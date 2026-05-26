import { industryHubSlugs } from "@/shared/seoConfig";
import { INDUSTRY_HUBS_PENDING_CONTENT, NOINDEX_INDUSTRY_HUB_SLUGS } from "@/lib/seo/seoSets";
import {
  SITE_BASE,
  lastmodForPath,
  urlsetXml,
  xmlResponse,
  type UrlEntry,
} from "@/lib/seo/sitemapHelpers";
import { HUB_INTRO_DATE } from "@/lib/seo/industryHubMeta";

export const dynamic = "force-static";
export const revalidate = false;

// Exported so lib/seo/sitemapSources.ts derives the index lastmod from
// the same entries the GET handler serves.
//
// Task #138 + #221 (Programmatic cluster cull): hubs in
// `INDUSTRY_HUBS_PENDING_CONTENT` are excluded (they 308 to /industries).
// Hubs in `NOINDEX_INDUSTRY_HUB_SLUGS` are excluded (they render noindex —
// advertising noindexed pages is a sitemap honesty violation).
// Currently: INDUSTRY_HUBS_PENDING_CONTENT has 4 slugs; NOINDEX_INDUSTRY_HUB_SLUGS
// is empty (all active hubs score KEEP). Audit: .local/seo/programmatic-audit.md §2
export function buildEntries(): UrlEntry[] {
  return [
    {
      loc: `${SITE_BASE}/industries`,
      lastmod: lastmodForPath("app/industries/page.tsx"),
      changefreq: "monthly" as const,
      priority: 0.8,
    },
    ...industryHubSlugs
      .filter(
        (slug) =>
          !INDUSTRY_HUBS_PENDING_CONTENT.has(slug) &&
          !NOINDEX_INDUSTRY_HUB_SLUGS.has(slug),
      )
      .map((slug) => ({
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
