import { NextRequest, NextResponse } from "next/server";
import { insertLeadSchema } from "@shared/schema";
import { storage } from "@/lib/storage";

export const runtime = "nodejs";

// Build-resilience: do NOT crash `next build` when DATABASE_URL is unset.
// Both handlers short-circuit with 503 before touching the database client.
// This lets the static portion of the site ship while DB-backed endpoints
// remain disabled until the env var is configured in the Vercel dashboard.

async function notifyFormspree(payload: {
  name: string;
  contact: string;
  service: string;
  source?: string;
  transcript?: string;
}) {
  const res = await fetch("https://formspree.io/f/xblnedyl", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      _replyto: payload.contact,
      _subject: `New ARC lead — ${payload.name} (${payload.service})`,
      name: payload.name,
      contact: payload.contact,
      service: payload.service,
      source: payload.source ?? "ARC Chat",
      transcript: payload.transcript ?? "",
      message:
        `New lead from ARC chat — ${payload.name} | ${payload.contact} | Interest: ${payload.service}` +
        (payload.transcript ? `\n\n--- Transcript ---\n${payload.transcript}` : ""),
    }),
  });
  if (!res.ok) {
    console.error("Formspree notification returned non-2xx:", res.status);
  }
  return res.ok;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = insertLeadSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json({ error: "Invalid lead data" }, { status: 400 });
    }

    // ALWAYS email the lead via Formspree — even when DATABASE_URL is unset.
    // Email delivery to hello@oarcdigital.com is the contractual guarantee;
    // DB persistence is a best-effort secondary store.
    const transcript = (body && typeof body.transcript === "string") ? body.transcript : "";
    const emailed = await notifyFormspree({
      name: result.data.name,
      contact: result.data.contact,
      service: result.data.service,
      source: typeof body?.source === "string" ? body.source : "ARC Chat",
      transcript,
    });

    let lead: unknown = null;
    if (process.env.DATABASE_URL) {
      try {
        lead = await storage.createLead(result.data);
      } catch (dbErr) {
        console.error("Lead DB write failed (email already sent):", dbErr);
      }
    }

    return NextResponse.json({ success: true, emailed, lead });
  } catch (error) {
    console.error("Lead capture error:", error);
    return NextResponse.json({ error: "Failed to save lead" }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  // Gate admin-style lead retrieval behind a shared secret so the endpoint is
  // not publicly enumerable. Accepts either `Authorization: Bearer <token>`
  // or an `x-admin-token` header; expects LEADS_ADMIN_TOKEN to be set.
  if (!process.env.DATABASE_URL) {
    return NextResponse.json(
      { error: "Database not configured" },
      { status: 503 },
    );
  }
  const expected = process.env.LEADS_ADMIN_TOKEN;
  if (!expected) {
    return NextResponse.json({ error: "Admin access not configured" }, { status: 503 });
  }
  const auth = request.headers.get("authorization") ?? "";
  const bearer = auth.toLowerCase().startsWith("bearer ") ? auth.slice(7) : "";
  const headerToken = request.headers.get("x-admin-token") ?? "";
  const provided = bearer || headerToken;
  if (!provided || provided !== expected) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const leads = await storage.getLeads();
    return NextResponse.json(leads);
  } catch (error) {
    console.error("Get leads error:", error);
    return NextResponse.json({ error: "Failed to fetch leads" }, { status: 500 });
  }
}
