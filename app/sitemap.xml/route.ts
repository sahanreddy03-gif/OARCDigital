import { SITE_BASE, sitemapIndexXml, xmlResponse } from "@/lib/seo/sitemapHelpers";
import { getSitemapLastmod } from "@/lib/seo/sitemapSources";

export const dynamic = "force-static";
export const revalidate = false;

const CHILD_SITEMAPS = [
  "sitemap-core.xml",
  "sitemap-services.xml",
  "sitemap-malta.xml",
  "sitemap-industries.xml",
  "sitemap-case-studies.xml",
  "sitemap-aeo.xml",
  "sitemap-blog.xml",
  "image-sitemap.xml",
] as const;

export async function GET() {
  const sitemaps = await Promise.all(
    CHILD_SITEMAPS.map(async (name) => ({
      loc: `${SITE_BASE}/${name}`,
      lastmod: await getSitemapLastmod(name),
    })),
  );

  return xmlResponse(sitemapIndexXml(sitemaps));
}
