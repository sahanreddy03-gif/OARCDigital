import {
  SITE_BASE,
  lastmodForPath,
  urlsetXml,
  xmlResponse,
  listRouteSlugs,
  type UrlEntry,
} from "@/lib/seo/sitemapHelpers";
import { NOINDEX_AEO_SLUGS } from "@/lib/seo/seoSets";

export const dynamic = "force-static";
export const revalidate = false;

// Exported so lib/seo/sitemapSources.ts derives the index lastmod from
// the same entries the GET handler serves.
//
// Task #221 (Programmatic cluster cull): slugs in NOINDEX_AEO_SLUGS are
// excluded — advertising noindexed pages in the sitemap is a sitemap
// honesty violation. Currently empty (all 44 AEO pages score KEEP).
export async function buildEntries(): Promise<UrlEntry[]> {
  const slugs = await listRouteSlugs("app/aeo");
  return slugs
    .filter((slug) => !NOINDEX_AEO_SLUGS.has(slug))
    .map((slug) => ({
      loc: `${SITE_BASE}/aeo/${slug}`,
      lastmod: lastmodForPath(`app/aeo/${slug}`),
      changefreq: "monthly" as const,
      priority: 0.85,
    }));
}

export async function GET() {
  return xmlResponse(urlsetXml(await buildEntries()));
}
