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

// Source-of-truth files for the Malta location/industry/service grid.
// These pages are served by dynamic routes (e.g. `app/malta/[location]/page.tsx`)
// so we date them by the last edit to the underlying data + route files.
const MALTA_SOURCES = [
  "shared/seoConfig.ts",
  "lib/seo/locationData.ts",
  "app/malta",
];

/**
 * Source of truth for the URL entries this sitemap emits. See
 * `lib/seo/sitemapSources.ts` — the index `lastmod` is derived from
 * `max(entry.lastmod)` across these entries (which all share one date
 * here, since the Malta grid is programmatic from one data surface).
 */
export function buildEntries(): UrlEntry[] {
  // Compute one date for the whole Malta grid — these URLs are programmatic
  // and share a single content surface, so a single derived `lastmod` is
  // honest. (Any edit to the data file or routes bumps the date.)
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
