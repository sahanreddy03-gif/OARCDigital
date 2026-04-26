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
  const slugs = await listRouteSlugs("app/case-studies");
  const entries = slugs.map((slug) => ({
    loc: `${SITE_BASE}/case-studies/${slug}`,
    lastmod: lastmodForPath(`app/case-studies/${slug}`),
    changefreq: "monthly" as const,
    priority: 0.7,
  }));
  return xmlResponse(urlsetXml(entries));
}
