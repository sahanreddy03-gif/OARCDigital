import {
  HISTORICAL_ORIGINAL_MATRIX_LASTMOD,
  historicalMatrixLocations,
} from "@/shared/historicalProgrammaticInventory";
import { filterSitemapEntries } from "@/lib/seo/sitemapHygiene";
import {
  SITE_BASE,
  urlsetXml,
  xmlResponse,
  type UrlEntry,
} from "@/lib/seo/sitemapHelpers";

export const dynamic = "force-static";
export const revalidate = false;

/** Locality hubs only: /malta + /malta/{location}. Stable content lastmod. */
export function buildEntries(): UrlEntry[] {
  const lastmod = HISTORICAL_ORIGINAL_MATRIX_LASTMOD;
  const entries: UrlEntry[] = [
    {
      loc: `${SITE_BASE}/malta`,
      lastmod,
      changefreq: "weekly",
      priority: 0.9,
    },
  ];
  for (const loc of historicalMatrixLocations) {
    entries.push({
      loc: `${SITE_BASE}/malta/${loc}`,
      lastmod,
      changefreq: "monthly",
      priority: 0.8,
    });
  }
  return filterSitemapEntries(entries);
}

export async function GET() {
  return xmlResponse(urlsetXml(buildEntries()));
}
