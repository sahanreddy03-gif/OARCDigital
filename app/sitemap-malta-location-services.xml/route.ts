import {
  HISTORICAL_PARENT_EXPANDED_LASTMOD,
  HISTORICAL_PARENT_ORIGINAL_LASTMOD,
  currentAdditionalLocationServiceLocations,
  currentAdditionalLocationServices,
  historicalParentLocations,
  historicalServices,
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

/** Parent /malta/{loc}/{svc} pairs — historical 280 + retained seo-services. */
export function buildEntries(): UrlEntry[] {
  const entries: UrlEntry[] = [];

  for (const loc of historicalParentLocations) {
    for (const svc of historicalServices) {
      entries.push({
        loc: `${SITE_BASE}/malta/${loc}/${svc}`,
        lastmod: HISTORICAL_PARENT_ORIGINAL_LASTMOD,
        changefreq: "monthly",
        priority: 0.7,
      });
    }
  }

  for (const loc of currentAdditionalLocationServiceLocations) {
    for (const svc of currentAdditionalLocationServices) {
      entries.push({
        loc: `${SITE_BASE}/malta/${loc}/${svc}`,
        lastmod: HISTORICAL_PARENT_EXPANDED_LASTMOD,
        changefreq: "monthly",
        priority: 0.7,
      });
    }
  }

  return filterSitemapEntries(entries);
}

export async function GET() {
  return xmlResponse(urlsetXml(buildEntries()));
}
