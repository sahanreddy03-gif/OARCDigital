import { CHILD_SITEMAPS } from "@/lib/seo/sitemapIndexConfig";
import { SITE_BASE, sitemapIndexXml, xmlResponse } from "@/lib/seo/sitemapHelpers";
import { getSitemapLastmod } from "@/lib/seo/sitemapSources";

export const dynamic = "force-static";
export const revalidate = false;

// Re-export for validators / legacy imports.
export { CHILD_SITEMAPS, MATRIX_SITEMAP_PARTITIONS } from "@/lib/seo/sitemapIndexConfig";

export async function GET() {
  const sitemaps = await Promise.all(
    CHILD_SITEMAPS.map(async (name) => ({
      loc: `${SITE_BASE}/${name}`,
      lastmod: await getSitemapLastmod(name),
    })),
  );

  return xmlResponse(sitemapIndexXml(sitemaps));
}
