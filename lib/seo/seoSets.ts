import {
  maltaLocations,
  maltaIndustries,
  industryHubSlugs,
  locationServices,
  allServiceSlugs,
} from "../../shared/seoConfig";

export const KEPT_LOCATIONS: ReadonlySet<string> = new Set(maltaLocations);
// `KEPT_INDUSTRIES` gates the location-paired routes only
// (/malta/{loc}/{ind} and /services/{svc}/{ind}). The standalone
// /industries/{slug} hubs use the broader `KEPT_INDUSTRY_HUBS` below.
export const KEPT_INDUSTRIES: ReadonlySet<string> = new Set(maltaIndustries);
export const KEPT_INDUSTRY_HUBS: ReadonlySet<string> = new Set(industryHubSlugs);
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
  // Task #134: canonical winner is /services/lead-generation per the locked
  // ranked list (`.local/memory/core-url-rank.md` row 32). The legacy
  // /services/lead-generation-engine 308s into it. Direction was reversed
  // before #134 — that made the canonical itself a 308 source (a self-
  // cannibalising HARD FAIL caught by `scripts/audit-canonical.ts`).
  "/services/lead-generation-engine": "/services/lead-generation",
  "/services/api-integration": "/services/api-integration-services",
  "/services/mobile-applications-development": "/services/mobile-apps-development",
  "/services/web-application-development": "/services/web-apps-development",
  "/services/web-app-development": "/services/web-apps-development",
  "/services/mvp-development/software": "/services/custom-software-development",
  // Archived service: directory does not exist. Redirects to its canonical
  // counterpart so SEO equity consolidates instead of returning 404.
  "/services/branding-services": "/services/branding",
  // Task #116 (SEO Foundation) — duplicate / cannibalising service slugs
  // collapsed into canonical winners. Folders deleted; equity consolidates
  // on the target. See `.local/tasks/MASTER-seo-aeo-rebuild.md`.
  "/services/ai-revenue-engine": "/services/revenue-automation",
  "/services/funnel-optimization-agent": "/services/funnel-automation",
  "/services/rapid-idea-testing": "/services/idea-validation-engine",
  "/services/ai-virtual-talent-hub": "/services/hire-ai-employees",
  "/services/media-buying": "/services/paid-advertising",
  "/services/ai-copywriting": "/services/content-marketing",
};

/**
 * Programmatic /malta/{loc}/{svc} aliases — preserve LOCATION SEO equity
 * when a service slug is consolidated. Maps the OLD slug → NEW slug, both
 * in the location-paired vocabulary. Middleware uses this in the
 * /malta/{loc}/{svc} branch BEFORE falling through to gone(): if the slug
 * has been merged we 308 to /malta/{loc}/{newSlug} so Google moves the
 * locality-page ranking to the new canonical slug rather than dropping it.
 *
 * Task #116:
 *   digital-marketing → seo-services    (new locationServices member)
 *
 * Other consolidated services (ai-copywriting, media-buying, etc.) were
 * never in `locationServices` so no /malta/{loc}/{slug} pages existed for
 * them — no alias needed.
 */
export const LOCATION_SERVICE_ALIASES: Record<string, string> = {
  "digital-marketing": "seo-services",
};

/**
 * Cross-section 308 redirects whose TARGET is NOT under `/services/<slug>/`.
 * Kept separate from `SERVICE_ALIASES` so the build-time `verify-redirects`
 * check (which asserts every alias target maps to a real `app/services/<slug>/`
 * directory) doesn't false-flag them. Middleware checks both maps; sitemap
 * filters use both as well.
 *
 * Task #116:
 *   /services/digital-marketing → /services        (umbrella too generic, fan out via hub)
 *   /services/creative          → /creative       (was duplicate of pillar)
 *   /diagnostic                 → /diagnostics    (singular legacy variant)
 *   /roadmap                    → /roadmap-2026   (year-anchored canonical)
 */
export const CROSS_SECTION_ALIASES: Record<string, string> = {
  "/services/digital-marketing": "/services",
  "/services/creative": "/creative",
  "/diagnostic": "/diagnostics",
  "/roadmap": "/roadmap-2026",
};

// Slugs we should not advertise in the sitemap because they redirect away.
// Combines: (1) every `/services/<slug>` key in SERVICE_ALIASES, and (2)
// every `/services/<slug>` key in CROSS_SECTION_ALIASES (e.g.
// digital-marketing → /services, creative → /creative).
export const REDIRECTING_SERVICE_SLUGS: ReadonlySet<string> = new Set(
  [
    ...Object.keys(SERVICE_ALIASES),
    ...Object.keys(CROSS_SECTION_ALIASES).filter((p) => p.startsWith("/services/")),
  ].map((p) => p.replace(/^\/services\//, "")),
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
// Task #116: ai-revenue-engine, ai-virtual-talent-hub,
// funnel-optimization-agent, rapid-idea-testing — pages DELETED, no longer
// need noindex (308 redirects fire from middleware via SERVICE_ALIASES).
// funnel-automation and idea-validation-engine REMOVED from this set —
// they are the canonical winners and must be indexed.
export const NOINDEX_SERVICE_SLUGS: ReadonlySet<string> = new Set<string>([]);
