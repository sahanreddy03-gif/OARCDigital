import { buildEntries as buildExpandedEntries } from "@/app/sitemap-malta-expanded-matrix.xml/route";
import { buildEntries as buildPriorityEntries } from "@/app/sitemap-malta-priority-matrix.xml/route";
import { MATRIX_SITEMAP_PARTITIONS } from "@/lib/seo/sitemapIndexConfig";
import {
  SITE_BASE,
  sitemapIndexXml,
  xmlResponse,
  type UrlEntry,
} from "@/lib/seo/sitemapHelpers";
import { getSitemapLastmod } from "@/lib/seo/sitemapSources";

export const dynamic = "force-static";
export const revalidate = false;

/**
 * Legacy matrix sitemap URL.
 *
 * Historically this served the full 7350 urlset; PR #28 incorrectly aliased
 * it to the priority cohort only. It now returns a sitemap *index* of every
 * matrix partition (priority + expanded) so crawlers that still fetch this
 * path discover the complete inventory without duplicating urls across files.
 */
export async function GET() {
  const sitemaps = await Promise.all(
    MATRIX_SITEMAP_PARTITIONS.map(async (name) => ({
      loc: `${SITE_BASE}/${name}`,
      lastmod: await getSitemapLastmod(name),
    })),
  );
  return xmlResponse(sitemapIndexXml(sitemaps));
}

/**
 * Guard/helper only — full matrix coverage as priority ∪ expanded.
 * Not served by GET (GET is a sitemap index).
 */
export function buildEntries(): UrlEntry[] {
  return [...buildPriorityEntries(), ...buildExpandedEntries()];
}
