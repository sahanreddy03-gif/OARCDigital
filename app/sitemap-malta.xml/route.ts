import {
  currentAdditionalLocationServices,
  currentAdditionalLocationServiceLocations,
  HISTORICAL_RESTORATION_LASTMOD,
  historicalMatrixLocations,
  historicalParentLocations,
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

// This release materially restores and expands the rendered Malta content.
// Use the declared restoration date as lastmod; the original publication
// dates remain in the ledger as provenance, not as a substitute for the most
// recent significant page change.

// Exported so lib/seo/sitemapSources.ts derives the index lastmod from
// the same entries the GET handler serves.
export function buildEntries(): UrlEntry[] {
  const lastmod = HISTORICAL_RESTORATION_LASTMOD;

  const entries: UrlEntry[] = [];

  entries.push({
    loc: `${SITE_BASE}/malta`,
    lastmod,
    changefreq: "weekly",
    priority: 0.9,
  });

  for (const loc of historicalMatrixLocations) {
    entries.push({
      loc: `${SITE_BASE}/malta/${loc}`,
      lastmod,
      changefreq: "monthly",
      priority: 0.8,
    });
  }

  // Exact 280-path parent set published before the 7,350 matrix expansion.
  for (const loc of historicalParentLocations) {
    for (const svc of historicalServices) {
      entries.push({
        loc: `${SITE_BASE}/malta/${loc}/${svc}`,
        lastmod,
        changefreq: "monthly",
        priority: 0.7,
      });
    }
  }

  // Preserve the current migration-era SEO-service URLs for the original ten
  // locality hubs. They are additive and distinct from historical
  // /digital-marketing pages.
  for (const loc of currentAdditionalLocationServiceLocations) {
    for (const svc of currentAdditionalLocationServices) {
      entries.push({
        loc: `${SITE_BASE}/malta/${loc}/${svc}`,
        lastmod,
        changefreq: "monthly",
        priority: 0.7,
      });
    }
  }

  return entries;
}

export async function GET() {
  return xmlResponse(urlsetXml(buildEntries()));
}
