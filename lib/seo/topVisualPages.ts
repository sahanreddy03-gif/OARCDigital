// Top 20 routes for the Playwright visual-diff baseline (Task #93).
//
// Captured at desktop (1280x800) + mobile (375x667) by
// `tests/visual/visual.spec.ts` and committed to
// `tests/visual/visual.spec.ts-snapshots/`. Future drip batches diff
// against these baselines; >1% pixel diff fails the gate. The point is
// to catch shared-component CSS regressions ("I changed a Tailwind
// variable and broke 17 service pages") that no single-page audit can
// see.
//
// 16 service slugs + 4 pillars = 20. The list deliberately mirrors
// `lib/seo/serviceSchemaConfig.ts` plus the four pillars so a service
// added to the schema config is also added here as a single edit.
//
// Regenerate snapshots after intentional design changes:
//   npx playwright test --update-snapshots
// Then commit `tests/visual/visual.spec.ts-snapshots/` in the same PR.

export const TOP_VISUAL_PAGES: readonly string[] = [
  // Pillars
  "/",
  "/ai-agents",
  "/creative",
  "/automation",
  // Services (mirrors SERVICE_SCHEMAS keys in serviceSchemaConfig.ts)
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
] as const;

export function visualSnapshotName(path: string, viewport: "desktop" | "mobile"): string {
  // Snapshot file basename. `/` -> "home", `/services/foo` -> "services-foo".
  const slug = path === "/" ? "home" : path.slice(1).replace(/\//g, "-");
  return `${slug}-${viewport}.png`;
}
