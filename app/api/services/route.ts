import { NextResponse } from "next/server";
import { serviceCatalogue } from "@/lib/agent-access/catalogue";

export const runtime = "nodejs";

const JSON_HEADERS = {
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "public, max-age=300, s-maxage=3600",
};

export function GET() {
  return NextResponse.json(
    {
      version: "1.0",
      publisher: "OARC Digital",
      services: serviceCatalogue,
      pricingNote:
        "Pricing is scoped to fit, complexity and operating context. Ask for a tailored enquiry; there is no universal fixed price.",
    },
    { headers: JSON_HEADERS },
  );
}
