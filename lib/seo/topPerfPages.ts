// Top 30 routes for the Lighthouse perf baseline (Task #93).
//
// Captured by `scripts/lighthouse-baseline.ts` against the local server,
// median-of-3 per route, written to `.local/lighthouse-baseline/<slug>.json`.
// Future runs diff against the baseline; >5% score regression OR >20%
// CWV regression fails the gate. The point is to put a measurable floor
// under Core Web Vitals, which are now a direct ranking signal — without
// this any silent perf regression goes unnoticed until Search Console
// flags it weeks later.
//
// Composition (30 routes):
//   - 4 pillars
//   - 16 service pages (mirrors SERVICE_SCHEMAS)
//   - 4 representative AEO pages (proves the canonical AEO template
//     stays performant as Task #76's depth-parity rewrites land)
//   - 4 representative blog pages
//   - 1 case-study + /contact (highest-conversion-intent surfaces)
//
// Real-edge Lighthouse runs (proper field data) require Vercel preview
// access, which is on Sahan's handoff list. Until then this captures the
// LOCAL FLOOR — the minimum these routes must clear when served locally
// at the deployed bundle size.

export const TOP_PERF_PAGES: readonly string[] = [
  // Pillars
  "/",
  "/ai-agents",
  "/creative",
  "/automation",
  // Services
  "/services/web-design",
  "/services/social-media-creative-management",
  "/services/video-production",
  "/services/branding",
  "/services/paid-advertising",
  "/services/marketing-automation-suite",
  "/services/ai-sdr-agent",
  "/services/seo-services",
  "/services/saas-development",
  "/services/web-apps-development",
  "/services/content-marketing",
  "/services/email-marketing",
  "/services/ecommerce-development",
  "/services/wordpress-development",
  "/services/shopify-development",
  "/services/devops-services",
  // AEO (representative — depth-parity refactor surface)
  "/aeo/saas-development-malta",
  "/aeo/marketing-agency-mosta",
  "/aeo/marketing-agency-swieqi",
  "/aeo/web-development-agency-malta",
  // Blog (Malta-targeted SEO articles)
  "/blog/marketing-agency-malta",
  "/blog/igaming-marketing-malta",
  "/blog",
  // Conversion-intent
  "/contact",
  "/case-studies/volta-home",
  "/industries",
] as const;

export function perfBaselineFilename(path: string): string {
  return path === "/" ? "home.json" : `${path.slice(1).replace(/\//g, "-")}.json`;
}
