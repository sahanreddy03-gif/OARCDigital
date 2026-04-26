import { SITE_BASE, sitemapIndexXml, xmlResponse } from "@/lib/seo/sitemapHelpers";
import { getSitemapLastmod } from "@/lib/seo/sitemapSources";

export const dynamic = "force-static";
export const revalidate = false;

export async function GET() {
  const sitemaps = [
    "sitemap-core.xml",
    "sitemap-services.xml",
    "sitemap-malta.xml",
    "sitemap-industries.xml",
    "sitemap-case-studies.xml",
    "sitemap-aeo.xml",
    "sitemap-blog.xml",
    "image-sitemap.xml",
  ].map((name) => ({
    loc: `${SITE_BASE}/${name}`,
    lastmod: getSitemapLastmod(name),
  }));

  return xmlResponse(sitemapIndexXml(sitemaps));
}
