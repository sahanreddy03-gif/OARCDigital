import {
  SITE_BASE,
  lastmodForPath,
  urlsetXml,
  xmlResponse,
  listRouteSlugs,
  type UrlEntry,
} from "@/lib/seo/sitemapHelpers";

export const dynamic = "force-static";
export const revalidate = false;

/**
 * Source of truth for the URL entries this sitemap emits. See
 * `lib/seo/sitemapSources.ts` — the index `lastmod` is derived from
 * `max(entry.lastmod)` across these entries.
 */
export async function buildEntries(): Promise<UrlEntry[]> {
  const slugs = await listRouteSlugs("app/case-studies");
  return slugs.map((slug) => ({
    loc: `${SITE_BASE}/case-studies/${slug}`,
    lastmod: lastmodForPath(`app/case-studies/${slug}`),
    changefreq: "monthly" as const,
    priority: 0.7,
  }));
}

export async function GET() {
  return xmlResponse(urlsetXml(await buildEntries()));
}
