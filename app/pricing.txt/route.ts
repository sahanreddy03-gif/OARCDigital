import { serviceCatalogue } from "@/lib/agent-access/catalogue";

export const runtime = "nodejs";

export function GET() {
  const lines = [
    "OARC DIGITAL — PRICING",
    "",
    "Current campaign offer: a whole social marketing team for EUR 500 a month, no contract. Details: https://oarcdigital.com/aeo/digital-marketing-agency-malta",
    "Everything else is custom-priced after a 20-minute call: creative work, AI automation and AI staff, custom-built websites, apps and systems, video shoots, or a mix.",
    "Custom pricing is tailored to the scope, complexity, integrations and operating context.",
    "Affordable entry options are available: a focused sprint, audit, pilot or single workflow can be scoped before a wider programme.",
    "Results-based structures may be considered where the measurement, attribution and commercial fit are clear. They are not automatic or suitable for every engagement.",
    "",
    ...serviceCatalogue.flatMap((service) => [
      `${service.title} — ${service.path}`,
      service.description,
      `Commercial model: ${service.pricing.summary}`,
      `Entry option: ${service.pricing.affordableEntry}`,
      `Scope: ${service.pricing.scopeNote}`,
      "",
    ]),
    "Request an enquiry at https://oarcdigital.com/api/book or learn more at https://oarcdigital.com/pricing.",
    "An enquiry is not a calendar booking. OARC confirms the next step with a person.",
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=300, s-maxage=3600",
    },
  });
}
