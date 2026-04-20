import { NextRequest, NextResponse } from "next/server";
import { insertLeadSchema } from "@shared/schema";
import { storage } from "@/lib/storage";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = insertLeadSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json({ error: "Invalid lead data" }, { status: 400 });
    }
    const lead = await storage.createLead(result.data);

    // Fire-and-forget: notify via Formspree so lead lands in email inbox
    void fetch("https://formspree.io/f/xblnedyl", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name: result.data.name,
        contact: result.data.contact,
        service: result.data.service,
        source: "ARC Chat",
        message: `New lead from ARC chat — ${result.data.name} | ${result.data.contact} | Interest: ${result.data.service}`,
      }),
    })
      .then((r) => {
        if (!r.ok) console.error("Formspree notification returned non-2xx:", r.status);
      })
      .catch((err) => console.error("Formspree notification failed:", err));

    return NextResponse.json({ success: true, lead });
  } catch (error) {
    console.error("Lead capture error:", error);
    return NextResponse.json({ error: "Failed to save lead" }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  // Gate admin-style lead retrieval behind a shared secret so the endpoint is
  // not publicly enumerable. Accepts either `Authorization: Bearer <token>`
  // or an `x-admin-token` header; expects LEADS_ADMIN_TOKEN to be set.
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
