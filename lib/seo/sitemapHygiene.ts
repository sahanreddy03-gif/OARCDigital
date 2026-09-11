import {
  HARD_410_PATHS,
  INDUSTRY_HUBS_PENDING_CONTENT,
  LOCATION_IND_SVC_GLOBAL_KEEP,
  LOCATION_SERVICE_ALIASES,
  NOINDEX_AEO_SLUGS,
  NOINDEX_INDUSTRY_HUB_SLUGS,
  SERVICE_ALIASES,
  isKeptLocationIndustryServicePath,
  isKeptLocationServicePath,
} from "@/lib/seo/seoSets";
import { SITE_BASE, type UrlEntry } from "@/lib/seo/sitemapHelpers";

/**
 * Build-time sitemap hygiene: drop URLs that would be non-200, noindex,
 * redirected, or non-self-canonical if a crawler fetched them.
 *
 * Static-only — no network. Live HTTP verification lives in
 * scripts/guard-approved-historical-urls.ts (BASE=…) and
 * scripts/crawl-historical-programmatic.ts.
 */
export type HygieneRejectReason =
  | "hard-410"
  | "service-alias-redirect"
  | "location-service-alias-redirect"
  | "industry-hub-pending-redirect"
  | "aeo-noindex"
  | "industry-hub-noindex"
  | "matrix-not-kept"
  | "matrix-global-keep-off"
  | "parent-not-kept"
  | "non-self-canonical-loc";

export function pathnameFromLoc(loc: string): string {
  try {
    const u = new URL(loc);
    return u.pathname || "/";
  } catch {
    return loc.startsWith("/") ? loc : `/${loc}`;
  }
}

export function hygieneRejectReason(loc: string): HygieneRejectReason | null {
  const pathname = pathnameFromLoc(loc);

  if (HARD_410_PATHS.has(pathname)) return "hard-410";
  if (SERVICE_ALIASES[pathname]) return "service-alias-redirect";

  // Absolute loc must be on SITE_BASE (self-host) and path-only canonical form.
  if (!loc.startsWith(SITE_BASE)) return "non-self-canonical-loc";
  if (loc !== `${SITE_BASE}${pathname}` && loc !== `${SITE_BASE}/` && pathname === "/") {
    return "non-self-canonical-loc";
  }
  // Reject trailing-slash variants except bare origin handled above.
  if (pathname.length > 1 && pathname.endsWith("/")) return "non-self-canonical-loc";

  const parts = pathname.split("/").filter(Boolean);

  if (parts[0] === "aeo" && parts.length === 2 && NOINDEX_AEO_SLUGS.has(parts[1])) {
    return "aeo-noindex";
  }

  if (parts[0] === "industries" && parts.length === 2) {
    if (INDUSTRY_HUBS_PENDING_CONTENT.has(parts[1])) return "industry-hub-pending-redirect";
    if (NOINDEX_INDUSTRY_HUB_SLUGS.has(parts[1])) return "industry-hub-noindex";
  }

  // /malta/{loc}/{svc} (parent) or /malta/{loc}/{ind}/{svc} (matrix)
  if (parts[0] === "malta") {
    if (parts.length === 3) {
      const [, location, service] = ["malta", parts[1], parts[2]];
      if (LOCATION_SERVICE_ALIASES[service]) return "location-service-alias-redirect";
      if (!isKeptLocationServicePath(location, service)) return "parent-not-kept";
    }
    if (parts.length === 4) {
      const location = parts[1];
      const industry = parts[2];
      const service = parts[3];
      if (LOCATION_SERVICE_ALIASES[service]) return "location-service-alias-redirect";
      if (!LOCATION_IND_SVC_GLOBAL_KEEP) return "matrix-global-keep-off";
      if (!isKeptLocationIndustryServicePath(location, industry, service)) {
        return "matrix-not-kept";
      }
    }
  }

  return null;
}

export function isSitemapEligible(loc: string): boolean {
  return hygieneRejectReason(loc) === null;
}

export function filterSitemapEntries(entries: UrlEntry[]): UrlEntry[] {
  return entries.filter((e) => isSitemapEligible(e.loc));
}
