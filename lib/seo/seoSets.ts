import {
  maltaLocations,
  maltaIndustries,
  locationServices,
  allServiceSlugs,
} from "../../shared/seoConfig";

export const KEPT_LOCATIONS: ReadonlySet<string> = new Set(maltaLocations);
export const KEPT_INDUSTRIES: ReadonlySet<string> = new Set(maltaIndustries);
export const KEPT_LOCATION_SERVICES: ReadonlySet<string> = new Set(locationServices);
export const ALL_SERVICES: ReadonlySet<string> = new Set(allServiceSlugs);

export const HARD_410_PATHS: ReadonlySet<string> = new Set([
  "/case-studies/gym-group",
  "/automation-test",
]);

// Legacy short slugs that duplicate canonical "-accelerator" / "-engine" pages.
// Both directories still exist in app/services/ but the short versions are
// permanently redirected to their canonical counterpart so SEO equity
// consolidates on a single URL.
export const SERVICE_ALIASES: Record<string, string> = {
  "/services/customer-acquisition": "/services/customer-acquisition-accelerator",
  "/services/lead-generation": "/services/lead-generation-engine",
  "/services/api-integration": "/services/api-integration-services",
  "/services/mobile-applications-development": "/services/mobile-apps-development",
  "/services/web-application-development": "/services/web-apps-development",
  "/services/web-app-development": "/services/web-apps-development",
  "/services/mvp-development/software": "/services/custom-software-development",
  // Archived service: directory does not exist. Redirects to its canonical
  // counterpart so SEO equity consolidates instead of returning 404.
  "/services/branding-services": "/services/branding",
};

// Slugs we should not advertise in the sitemap because they redirect away.
export const REDIRECTING_SERVICE_SLUGS: ReadonlySet<string> = new Set(
  Object.keys(SERVICE_ALIASES).map((p) => p.replace(/^\/services\//, "")),
);

/**
 * Invented service slugs flagged by Sahan in Task #83 — pages exist as
 * directories but were never real offerings. Each carries `robots: { index:
 * false, follow: false }` in its `metadata` and is excluded from
 * sitemap-services.xml so Google does not see them as canonical URLs.
 *
 * Either the directories will be deleted in a follow-up cleanup or the pages
 * will be merged into their canonical replacements (e.g. ai-revenue-engine
 * already self-canonicalises to /services/revenue-automation). Keeping the
 * pages live but unindexed is the safe interim — no broken inbound links from
 * stale third-party citations, no SEO equity advertised.
 */
export const NOINDEX_SERVICE_SLUGS: ReadonlySet<string> = new Set([
  "ai-revenue-engine",
  "ai-virtual-talent-hub",
  "funnel-automation",
  "funnel-optimization-agent",
  "idea-validation-engine",
  "rapid-idea-testing",
]);
