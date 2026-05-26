import { maltaLocations, locationServices } from "@/shared/seoConfig";
import restore from "@/lib/seo/restore.json";
import {
  SITE_BASE,
  lastmodForPath,
  urlsetXml,
  xmlResponse,
  type UrlEntry,
} from "@/lib/seo/sitemapHelpers";

export const dynamic = "force-static";
export const revalidate = false;

// Anchor lastmod to the data's actual regeneration date (restore.generatedAt),
// NOT to file mtimes. The 60 Malta URLs (10 hub + 50 loc×svc) come from
// restore.json content, so a
// renderer/import-path tweak in app/malta/**/*.tsx must NOT cascade into "every
// URL was edited today" — that trips audit-sitemap's TODAY-regression check
// (a documented Google spam-tell). Fallback chain only fires if the data file
// is missing generatedAt for any reason.
const MALTA_FALLBACK_SOURCES = [
  "lib/seo/restore.json",
  "shared/seoConfig.ts",
  "lib/seo/locationData.ts",
];

// Exported so lib/seo/sitemapSources.ts derives the index lastmod from
// the same entries the GET handler serves.
export function buildEntries(): UrlEntry[] {
  let lastmod = (restore as { generatedAt?: string }).generatedAt ?? "";
  if (!lastmod) {
    for (const src of MALTA_FALLBACK_SOURCES) {
      const d = lastmodForPath(src);
      if (d > lastmod) lastmod = d;
    }
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
    }
  }
  // NOTE: /malta/{loc}/{ind}/{svc} pages (150 URLs) are intentionally
  // excluded from the sitemap. They render noindex and are not advertised
  // to crawlers. Verdict: thin (≈300–500 words at triple-combination level);
  // domain-authority risk outweighs indexing value. See audit doc at
  // .local/seo/programmatic-audit.md, section §4.

  return entries;
}

export async function GET() {
  return xmlResponse(urlsetXml(buildEntries()));
}
