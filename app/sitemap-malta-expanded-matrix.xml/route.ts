import { HISTORICAL_ORIGINAL_MATRIX_LASTMOD } from "@/shared/historicalProgrammaticInventory";
import { maltaExpandedMatrixPathList } from "@/lib/seo/maltaMatrixCohorts";
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
 * Remaining historical matrix triples after the priority ≤2000 cohort.
 * Live via LOCATION_IND_SVC_GLOBAL_KEEP; advertised from /sitemap.xml so
 * Google can rediscover the full 7350 inventory (priority must not replace it).
 */
export function buildEntries(): UrlEntry[] {
  const lastmod = HISTORICAL_ORIGINAL_MATRIX_LASTMOD;
  const entries: UrlEntry[] = maltaExpandedMatrixPathList().map((path) => ({
    loc: `${SITE_BASE}${path}`,
    lastmod,
    changefreq: "monthly" as const,
    priority: 0.5,
  }));
  return filterSitemapEntries(entries);
}

export async function GET() {
  return xmlResponse(urlsetXml(buildEntries()));
}
