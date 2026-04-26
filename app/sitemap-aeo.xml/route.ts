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

// Exported so lib/seo/sitemapSources.ts derives the index lastmod from
// the same entries the GET handler serves.
export async function buildEntries(): Promise<UrlEntry[]> {
  const slugs = await listRouteSlugs("app/aeo");
  return slugs.map((slug) => ({
    loc: `${SITE_BASE}/aeo/${slug}`,
    lastmod: lastmodForPath(`app/aeo/${slug}`),
    changefreq: "monthly" as const,
    priority: 0.85,
  }));
}

export async function GET() {
  return xmlResponse(urlsetXml(await buildEntries()));
}
