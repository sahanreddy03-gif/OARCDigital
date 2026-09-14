import { NextResponse } from "next/server";

export const runtime = "nodejs";

export function GET() {
  return NextResponse.json(
    {
      schemaVersion: "1.0",
      name: "OARC Digital Agent Access",
      description:
        "Public machine-readable access to OARC Digital service discovery and enquiry requests.",
      provider: {
        name: "OARC Digital",
        url: "https://oarcdigital.com",
      },
      capabilities: ["service-discovery", "pricing-guidance", "enquiry-request"],
      endpoints: {
        services: "https://oarcdigital.com/api/services",
        agents: "https://oarcdigital.com/agents.json",
        pricing: "https://oarcdigital.com/pricing.txt",
        openapi: "https://oarcdigital.com/openapi.json",
        mcp: "https://oarcdigital.com/mcp",
        enquiry: "https://oarcdigital.com/api/book",
      },
      contactPolicy:
        "Enquiries are reviewed by OARC and followed up by a person. This interface never claims to book a calendar appointment.",
    },
    {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "public, max-age=300, s-maxage=3600",
      },
    },
  );
}
