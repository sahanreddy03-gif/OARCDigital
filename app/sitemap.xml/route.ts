import { SITE_BASE, sitemapIndexXml, xmlResponse } from "@/lib/seo/sitemapHelpers";
import { getSitemapLastmod } from "@/lib/seo/sitemapSources";

export const dynamic = "force-static";
export const revalidate = false;

/**
 * Child sitemaps advertised for indexing.
 * Expanded malta matrix is intentionally omitted until quality gate —
 * pages remain live/indexable via GLOBAL_KEEP + internal links.
 */
const CHILD_SITEMAPS = [
  "sitemap-core.xml",
  "sitemap-h360.xml",
  "sitemap-services.xml",
  "sitemap-malta-locations.xml",
  "sitemap-malta-location-services.xml",
  "sitemap-malta-priority-matrix.xml",
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
