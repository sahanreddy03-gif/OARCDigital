import {
  SITE_BASE,
  lastmodForPath,
  urlsetXml,
  xmlResponse,
  listRouteSlugs,
} from "@/lib/seo/sitemapHelpers";

export const dynamic = "force-static";
export const revalidate = false;

export async function GET() {
  const slugs = await listRouteSlugs("app/aeo");
  const entries = slugs.map((slug) => ({
    loc: `${SITE_BASE}/aeo/${slug}`,
    lastmod: lastmodForPath(`app/aeo/${slug}`),
    changefreq: "monthly" as const,
    priority: 0.85,
  }));
  return xmlResponse(urlsetXml(entries));
}
