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

// Canonical URL pair resolutions — loser slug 308s to winner slug so all
// SEO equity consolidates on one URL. Targets must be real app/services/*
// directories (verified by scripts/verify-redirects.ts at build time).
//
// Pair 2: lead-generation-engine → lead-generation (shorter URL wins)
// Pair 3: customer-acquisition-accelerator → customer-acquisition (shorter URL wins)
// Pair 4: api-integration-services → api-integration (shorter URL wins)
// Pair 6: mobile-applications-development → mobile-apps-development (cleaner URL wins)
export const SERVICE_ALIASES: Record<string, string> = {
  "/services/lead-generation-engine": "/services/lead-generation",
  "/services/customer-acquisition-accelerator": "/services/customer-acquisition",
  "/services/api-integration-services": "/services/api-integration",
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

/**
 * Task #221 (Programmatic cluster cull) — NOINDEX control for /aeo/* pages.
 *
 * All 44 AEO pages currently score KEEP (1,080–1,332 source words each).
 * This set is intentionally empty. Add a slug here to noindex it without
 * touching the individual page file — middleware injects x-robots-tag:
 * noindex for any slug present in this set.
 *
 * Removal checklist (to promote back to indexed):
 *   1. Remove slug from this set.
 *   2. Verify sitemap-aeo.xml re-emits the slug (automatic).
 *   3. Deploy + IndexNow ping.
 *
 * Drip-feed rule: max 10 new pages per rolling 7-day window.
 * Audit verdicts: .local/seo/programmatic-audit.md §1
 */
export const NOINDEX_AEO_SLUGS: ReadonlySet<string> = new Set<string>([
  // No AEO slugs are noindexed — all 44 pass the ≥800 word threshold.
]);

/**
 * Task #221 (Programmatic cluster cull) — NOINDEX control for
 * /industries/{slug} dynamic-template pages.
 *
 * Distinct from INDUSTRY_HUBS_PENDING_CONTENT (which 308s to /industries):
 * this set targets hubs that HAVE content but are too thin to index —
 * noindex lets them remain accessible while withholding indexing signals.
 * Currently empty; separate from the 308 set.
 *
 * Promotion: remove slug from this set and ship in same commit as content
 * expansion to ≥800 user-visible words.
 *
 * Audit verdicts: .local/seo/programmatic-audit.md §2
 */
export const NOINDEX_INDUSTRY_HUB_SLUGS: ReadonlySet<string> = new Set<string>([
  // No industry hub slugs are noindexed — all active hubs have sufficient depth.
]);

/**
 * Task #221 (Programmatic cluster cull) — NOINDEX control for
 * /malta/{loc}/{ind}/{svc} triple-combination pages.
 *
 * All 150 loc×ind×svc pages are thin (≈300–500 user-visible words).
 * They are excluded from the sitemap and marked noindex to protect
 * domain authority. Pages can be selectively promoted to indexed
 * status — without a template rewrite — by adding their key here:
 *
 *   Format: "{location}/{industry}/{service}"
 *   Example: "valletta/restaurant/social-media-creative-management"
 *
 * To promote ALL pages at once, set LOCATION_IND_SVC_GLOBAL_KEEP = true.
 * To promote individual pages: add their key to KEEP_LOCATION_IND_SVC_COMBOS.
 *
 * Promotion checklist (per page):
 *   1. Expand to ≥800 user-visible words with unique industry narrative.
 *   2. Add the "{loc}/{ind}/{svc}" key to KEEP_LOCATION_IND_SVC_COMBOS.
 *   3. Add its sitemap entry to app/sitemap-malta.xml/route.ts.
 *   4. Ship in one commit; run gate:fast before deploy.
 *
 * Drip-feed rule: max 10 new pages per 7-day window.
 * Rollout calendar: .local/seo-rollout-calendar.md
 * Audit verdicts: .local/seo/programmatic-audit.md §4
 */
export const LOCATION_IND_SVC_GLOBAL_KEEP = false;
export const KEEP_LOCATION_IND_SVC_COMBOS: ReadonlySet<string> = new Set<string>([
  // Add promoted combos here, e.g.:
  // "valletta/restaurant/social-media-creative-management",
]);

/**
 * Task #138 (Programmatic cluster cull) — industry hub slugs that are
 * declared in `industryHubSlugs` (shared/seoConfig.ts) but DO NOT yet have
 * a content record in `app/industries/[industry]/page.tsx`'s `industries`
 * Record. Without a record the hub renders `notFound()` (404), which is
 * worse for SEO than a 308 to the master `/industries` index.
 *
 * Middleware uses this set to 308 these slugs to `/industries` before they
 * hit the page renderer. `app/sitemap-industries.xml/route.ts` excludes
 * these slugs so we don't advertise URLs that immediately bounce.
 *
 * Removing a slug here is the trigger to ship its content build:
 * 1) add the entry to the `industries` Record in
 *    `app/industries/[industry]/page.tsx`,
 * 2) drop it from this set,
 * 3) ship in the same commit (audit-framework walks both lists).
 *
 * Audit verdicts in `.local/seo/programmatic-audit.md` track the schedule.
 *
 * IMPORTANT: a slug only belongs here if it has NEITHER an entry in the
 * `industries` Record of `app/industries/[industry]/page.tsx` NOR a
 * dedicated static route at `app/industries/<slug>/page.tsx`. Static
 * routes take precedence over the dynamic `[industry]` segment in
 * Next.js, so a slug with its own page.tsx is fully live and must not
 * be force-redirected here (real-estate is the worked example).
 */
export const INDUSTRY_HUBS_PENDING_CONTENT: ReadonlySet<string> = new Set([
  "legal-services",
  "professional-services",
  "beauty-wellness",
  "nonprofits-ngos",
]);
