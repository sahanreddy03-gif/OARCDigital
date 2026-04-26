import { maltaLocations, maltaIndustries, locationServices } from "@/shared/seoConfig";
import {
  SITE_BASE,
  lastmodForPath,
  urlsetXml,
  xmlResponse,
  type UrlEntry,
} from "@/lib/seo/sitemapHelpers";

export const dynamic = "force-static";
export const revalidate = false;

// Source paths for the Malta location/industry/service grid (served by
// dynamic routes, dated by the last edit to underlying data + templates).
const MALTA_SOURCES = [
  "shared/seoConfig.ts",
  "lib/seo/locationData.ts",
  "app/malta",
];

// Exported so lib/seo/sitemapSources.ts derives the index lastmod from
// the same entries the GET handler serves.
export function buildEntries(): UrlEntry[] {
  let lastmod = "";
  for (const src of MALTA_SOURCES) {
    const d = lastmodForPath(src);
    if (d > lastmod) lastmod = d;
  }

  const entries: UrlEntry[] = [];

  for (const loc of maltaLocations) {
    entries.push({
      loc: `${SITE_BASE}/malta/${loc}`,
      lastmod,
      changefreq: "monthly",
      priority: 0.8,
    });
    for (const svc of locationServices) {
      entries.push({
        loc: `${SITE_BASE}/malta/${loc}/${svc}`,
        lastmod,
        changefreq: "monthly",
        priority: 0.7,
      });
      for (const ind of maltaIndustries) {
        entries.push({
          loc: `${SITE_BASE}/malta/${loc}/${ind}/${svc}`,
          lastmod,
          changefreq: "monthly",
          priority: 0.6,
        });
      }
    }
  }

  return entries;
}

export async function GET() {
  return xmlResponse(urlsetXml(buildEntries()));
}
