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
  "/services/mvp-development/software": "/services/custom-software-development",
  // Archived service: directory does not exist. Redirects to its canonical
  // counterpart so SEO equity consolidates instead of returning 404.
  "/services/branding-services": "/services/branding",
};

// Slugs we should not advertise in the sitemap because they redirect away.
export const REDIRECTING_SERVICE_SLUGS: ReadonlySet<string> = new Set(
  Object.keys(SERVICE_ALIASES).map((p) => p.replace(/^\/services\//, "")),
);
