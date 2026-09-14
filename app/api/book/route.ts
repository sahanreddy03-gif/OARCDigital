import { NextRequest, NextResponse } from "next/server";
import { getCatalogueService } from "@/lib/agent-access/catalogue";
import { enquiryRequestSchema, submitLead } from "@/lib/agent-access/leadSubmission";
import {
  consumeAgentAccessRateLimit,
  firstPlatformAddress,
} from "@/lib/agent-access/rateLimit";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const parsed = enquiryRequestSchema.safeParse(await request.json());
    if (!parsed.success || parsed.data.website?.trim()) {
      return NextResponse.json({ error: "Invalid enquiry request" }, { status: 400 });
    }

    const service = getCatalogueService(parsed.data.service);
    if (!service) {
      return NextResponse.json(
        { error: "Unknown service. Use GET /api/services for available services." },
        { status: 400 },
      );
    }

    const contact = parsed.data.email || parsed.data.contact;
    if (!contact) {
      return NextResponse.json({ error: "An email or other contact is required" }, { status: 400 });
    }

    const rate = await consumeAgentAccessRateLimit({
      ipAddress: firstPlatformAddress(
        request.headers.get("x-forwarded-for"),
        request.headers.get("x-real-ip"),
      ),
      contact,
      service: service.id,
    });
    if (!rate.available) {
      return NextResponse.json(
        { error: "Enquiry protection is temporarily unavailable. Please try again later." },
        { status: 503 },
      );
    }
    if (!rate.allowed) {
      return NextResponse.json(
        { error: "Too many enquiry requests. Please try again later." },
        { status: 429, headers: { "Retry-After": String(rate.retryAfterSeconds) } },
      );
    }

    const theme = parsed.data.theme || "";
    const message =
      parsed.data.message ||
      `Enquiry request for ${service.title}${theme ? ` — ${theme}` : ""}.`;
    const submission = await submitLead({
      name: parsed.data.name,
      contact,
      company: parsed.data.company,
      service: service.title,
      theme,
      message,
      source: parsed.data.source || "Agent Access enquiry",
    });

    if (!submission.emailed) {
      return NextResponse.json(
        { error: "The enquiry request could not be delivered. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        requestType: "enquiry",
        service: { id: service.id, title: service.title, path: service.path },
        confirmation:
          "Your enquiry request was received. OARC will follow up with a person; this did not book a calendar appointment.",
      },
      { status: 201 },
    );
  } catch {
    return NextResponse.json({ error: "Invalid enquiry request" }, { status: 400 });
  }
}
