import {
  SITE_BASE,
  urlsetXml,
  xmlResponse,
  type UrlEntry,
} from "@/lib/seo/sitemapHelpers";
import { CLIENT_CASE_STUDIES } from "@/lib/data/premium-work/clientCaseStudies";
import { ORIGINAL_STUDIES } from "@/lib/data/premium-work/originalStudies";

export const dynamic = "force-static";
export const revalidate = false;

// Exported so lib/seo/sitemapSources.ts derives the index lastmod from
// the same entries the GET handler serves.
export async function buildEntries(): Promise<UrlEntry[]> {
  const slugs = [
    ...Object.keys(CLIENT_CASE_STUDIES),
    "pjazza",
    "h360",
    ...Object.keys(ORIGINAL_STUDIES).filter((slug) => slug !== "live-context"),
  ];
  return slugs.map((slug) => ({
    loc: `${SITE_BASE}/our-work/${slug}`,
    lastmod: "2026-08-28",
    changefreq: "monthly" as const,
    priority: 0.7,
  }));
}

export async function GET() {
  return xmlResponse(urlsetXml(await buildEntries()));
}
