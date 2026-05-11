import { industryHubSlugs } from "@/shared/seoConfig";
import { INDUSTRY_HUBS_PENDING_CONTENT } from "@/lib/seo/seoSets";
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
// Task #138 (Programmatic cluster cull): hubs in
// `INDUSTRY_HUBS_PENDING_CONTENT` are excluded — they currently render
// `notFound()` because the data record is not yet built, and middleware
// 308s them to `/industries`. Advertising bouncing URLs is a sitemap
// honesty violation.
export function buildEntries(): UrlEntry[] {
  return [
    {
      loc: `${SITE_BASE}/industries`,
      lastmod: lastmodForPath("app/industries/page.tsx"),
      changefreq: "monthly" as const,
      priority: 0.8,
    },
    ...industryHubSlugs
      .filter((slug) => !INDUSTRY_HUBS_PENDING_CONTENT.has(slug))
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
