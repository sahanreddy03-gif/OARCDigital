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
 * Remaining historical matrix triples (live via LOCATION_IND_SVC_GLOBAL_KEEP).
 * Route exists for parity/guards; omitted from sitemap index / robots until
 * quality gate — do not advertise all thin combinations equally.
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
