import { industryHubSlugs } from "@/shared/seoConfig";
import {
  SITE_BASE,
  lastmodForPath,
  lastmodForPaths,
  urlsetXml,
  xmlResponse,
  type UrlEntry,
} from "@/lib/seo/sitemapHelpers";

export const dynamic = "force-static";
export const revalidate = false;

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
    // All industry slug pages are served by the dynamic
    // `app/industries/[industry]/page.tsx` route — there are no per-slug
    // directories. Date them by the last edit to that single template plus
    // the data file that drives the slug list, so a content edit on either
    // bumps every industry URL's lastmod honestly.
    ...industryHubSlugs.map((slug) => ({
      loc: `${SITE_BASE}/industries/${slug}`,
      lastmod: lastmodForPaths([
        "app/industries/[industry]/page.tsx",
        "shared/seoConfig.ts",
      ]),
      changefreq: "monthly" as const,
      priority: 0.7,
    })),
  ];
}

export async function GET() {
  return xmlResponse(urlsetXml(buildEntries()));
}
