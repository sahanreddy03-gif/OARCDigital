import { maltaIndustries } from "@/shared/seoConfig";
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

/**
 * Source of truth for the URL entries this sitemap emits. See
 * `lib/seo/sitemapSources.ts` — the index `lastmod` is derived from
 * `max(entry.lastmod)` across these entries.
 */
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
    ...maltaIndustries.map((slug) => ({
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
