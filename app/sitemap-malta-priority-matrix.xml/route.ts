import { HISTORICAL_ORIGINAL_MATRIX_LASTMOD } from "@/shared/historicalProgrammaticInventory";
import { MALTA_PRIORITY_MATRIX_PATHS } from "@/lib/seo/maltaMatrixCohorts";
import { filterSitemapEntries } from "@/lib/seo/sitemapHygiene";
import {
  SITE_BASE,
  urlsetXml,
  xmlResponse,
  type UrlEntry,
} from "@/lib/seo/sitemapHelpers";

export const dynamic = "force-static";
export const revalidate = false;

/**
 * Strongest ≤2000 location×industry×service combinations for indexing.
 * Seeded from Sahan malta-priority-1000; filled with high-demand AI /
 * automation / hospitality / healthcare / iGaming combos.
 */
export function buildEntries(): UrlEntry[] {
  const lastmod = HISTORICAL_ORIGINAL_MATRIX_LASTMOD;
  const entries: UrlEntry[] = MALTA_PRIORITY_MATRIX_PATHS.map((path) => ({
    loc: `${SITE_BASE}${path}`,
    lastmod,
    changefreq: "monthly" as const,
    priority: 0.7,
  }));
  return filterSitemapEntries(entries);
}

export async function GET() {
  return xmlResponse(urlsetXml(buildEntries()));
}
