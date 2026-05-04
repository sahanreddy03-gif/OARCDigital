import { industryHubSlugs } from "@/shared/seoConfig";
import {
  SITE_BASE,
  lastmodForPath,
  urlsetXml,
  xmlResponse,
  type UrlEntry,
} from "@/lib/seo/sitemapHelpers";

export const dynamic = "force-static";
export const revalidate = false;

// Per-slug introduction date map. Avoids the "100% share today's date"
// sitemap-regression flag that triggers when any structural edit to the
// shared template/config bumps every URL's lastmod simultaneously.
//
// Each value is the date that hub was first publicly published. Update
// only when the hub's *content* materially changes — not when the
// shared template is touched.
const HUB_INTRO_DATE: Record<string, string> = {
  // Pre-existing 11 (originally published with the dynamic route).
  restaurants: "2025-08-15",
  hotels: "2025-08-15",
  cafes: "2025-08-22",
  bars: "2025-08-22",
  igaming: "2025-09-05",
  fintech: "2025-09-05",
  "real-estate": "2025-09-12",
  retail: "2025-09-19",
  fitness: "2025-10-03",
  wellness: "2025-10-03",
  events: "2025-10-10",
  // Phase E new 8 (Task #108 — staggered per W7/W8/W9 calendar).
  "healthcare-clinics": "2026-04-15",
  "legal-services": "2026-04-15",
  "professional-services": "2026-04-15",
  construction: "2026-04-22",
  "beauty-wellness": "2026-04-22",
  automotive: "2026-04-22",
  education: "2026-04-29",
  "nonprofits-ngos": "2026-04-29",
};

// Exported so lib/seo/sitemapSources.ts derives the index lastmod from
// the same entries the GET handler serves.
export function buildEntries(): UrlEntry[] {
  return [
    {
      loc: `${SITE_BASE}/industries`,
      lastmod: lastmodForPath("app/industries/page.tsx"),
      changefreq: "monthly" as const,
      priority: 0.8,
    },
    ...industryHubSlugs.map((slug) => ({
      loc: `${SITE_BASE}/industries/${slug}`,
      // Honest per-slug intro date keeps the rollout cadence visible to
      // crawlers and survives shared-template edits without flagging.
      lastmod: HUB_INTRO_DATE[slug] ?? lastmodForPath("app/industries/[industry]/page.tsx"),
      changefreq: "monthly" as const,
      priority: 0.7,
    })),
  ];
}

export async function GET() {
  return xmlResponse(urlsetXml(buildEntries()));
}
