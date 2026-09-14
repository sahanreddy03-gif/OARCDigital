import { NextResponse } from "next/server";
import { serviceCatalogue, workerCatalogue } from "@/lib/agent-access/catalogue";

export const runtime = "nodejs";

export function GET() {
  return NextResponse.json(
    {
      version: "1.0",
      name: "OARC Digital agent and service catalogue",
      description: "Public discovery metadata for OARC Digital services and scoped AI workers.",
      services: serviceCatalogue,
      workers: workerCatalogue,
      enquiry: {
        method: "POST",
        url: "/api/book",
        note: "Creates an enquiry request for human follow-up; it does not book a calendar appointment.",
      },
    },
    {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "public, max-age=300, s-maxage=3600",
      },
    },
  );
}
