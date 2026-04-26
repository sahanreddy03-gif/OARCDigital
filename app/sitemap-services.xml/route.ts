import { allServiceSlugs } from "@/shared/seoConfig";
import {
  SITE_BASE,
  lastmodForPath,
  urlsetXml,
  xmlResponse,
  listRouteSlugs,
  type UrlEntry,
} from "@/lib/seo/sitemapHelpers";
import { REDIRECTING_SERVICE_SLUGS, NOINDEX_SERVICE_SLUGS } from "@/lib/seo/seoSets";

export const dynamic = "force-static";
export const revalidate = false;

// Exported so lib/seo/sitemapSources.ts derives the index lastmod from
// the same entries the GET handler serves.
export async function buildEntries(): Promise<UrlEntry[]> {
  const fsSlugs = await listRouteSlugs("app/services");
  const set = new Set<string>([...allServiceSlugs, ...fsSlugs]);
  // Drop slugs that the middleware permanently redirects away — they
  // should not advertise themselves to Google as canonical URLs.
  for (const slug of REDIRECTING_SERVICE_SLUGS) set.delete(slug);
  // Drop invented service slugs flagged by Task #83 — pages carry
  // robots: noindex,nofollow and must not appear in the sitemap.
  for (const slug of NOINDEX_SERVICE_SLUGS) set.delete(slug);
  return Array.from(set)
    .sort()
    .map((slug) => ({
      loc: `${SITE_BASE}/services/${slug}`,
      lastmod: lastmodForPath(`app/services/${slug}`),
      changefreq: "weekly" as const,
      priority: 0.8,
    }));
}

export async function GET() {
  return xmlResponse(urlsetXml(await buildEntries()));
}
