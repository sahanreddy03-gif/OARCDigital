import {
  HISTORICAL_RESTORATION_LASTMOD,
  historicalIndustries,
  historicalMatrixLocations,
  historicalServices,
} from "@/shared/historicalProgrammaticInventory";
import {
  SITE_BASE,
  urlsetXml,
  xmlResponse,
  type UrlEntry,
} from "@/lib/seo/sitemapHelpers";

export const dynamic = "force-static";
export const revalidate = false;

export function buildEntries(): UrlEntry[] {
  const entries: UrlEntry[] = [];
  for (const location of historicalMatrixLocations) {
    for (const industry of historicalIndustries) {
      for (const service of historicalServices) {
        entries.push({
          loc: `${SITE_BASE}/malta/${location}/${industry}/${service}`,
          lastmod: HISTORICAL_RESTORATION_LASTMOD,
          changefreq: "monthly",
          priority: 0.7,
        });
      }
    }
  }
  return entries;
}

export async function GET() {
  return xmlResponse(urlsetXml(buildEntries()));
}