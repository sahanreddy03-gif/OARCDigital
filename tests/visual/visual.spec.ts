// Visual-diff baseline (Task #93).
//
// For every TOP_VISUAL_PAGE × {desktop, mobile} viewport, captures a
// full-page PNG and asserts it matches the committed baseline within
// `maxDiffPixelRatio: 0.01` (>1% pixel diff fails — see
// `playwright.config.ts`). Catches shared-component regressions that
// audit-core-57 and audit-similarity cannot detect (a Tailwind variable
// edit silently changes 17 service pages).
//
// First-run flow:
//   npx playwright test --update-snapshots
// Subsequent runs:
//   npx playwright test                # diff vs committed baseline
//
// All fonts are forced to system-ui because Montserrat / Nunito Sans /
// EB Garamond are loaded over the network in the dev server. A slow
// font fetch on one CI run vs another would shift every text glyph by
// 1-2px and tank the pixel-ratio threshold. We trade absolute fidelity
// for cross-run determinism here — the baseline still catches structural
// regressions (a missing section, a broken layout) which is the point.

import { test, expect } from "@playwright/test";
import { TOP_VISUAL_PAGES, visualSnapshotName } from "../../lib/seo/topVisualPages";

const FREEZE_CSS = `
  *, *::before, *::after {
    transition: none !important;
    animation: none !important;
    animation-duration: 0s !important;
    animation-delay: 0s !important;
    caret-color: transparent !important;
  }
  /* Force a single deterministic font stack so a missed/late web-font
     fetch on one CI run can't shift glyph widths and break the diff. */
  html, body, * {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif !important;
    font-feature-settings: normal !important;
  }
  /* Hide the ARC chat widget — its open/close state is non-deterministic
     and overlays the bottom-right of every page. */
  [data-arc-widget],
  [class*="ARCWidget"],
  [class*="arc-widget"],
  [aria-label*="chat" i],
  [aria-label*="WhatsApp" i] {
    visibility: hidden !important;
  }
`;

for (const path of TOP_VISUAL_PAGES) {
  test(`visual: ${path}`, async ({ page }, testInfo) => {
    const viewport = (testInfo.project.name as "desktop" | "mobile") ?? "desktop";
    // Wait for the body to render before injecting CSS — Next.js streams
    // the document and a too-early addStyleTag can be flushed away.
    await page.goto(path, { waitUntil: "domcontentloaded" });
    await page.addStyleTag({ content: FREEZE_CSS });
    // Settle: wait for the final network burst (lazy images, Vercel
    // analytics) but cap at 3s so we don't hang on a leaky long-poll.
    await page.waitForLoadState("networkidle", { timeout: 3000 }).catch(() => undefined);
    // Scroll to top so any IntersectionObserver-triggered reveal
    // animations are in their pre-trigger state for everything below
    // the fold (we're disabling the animations themselves above, but
    // some components conditionally render different markup based on
    // whether they've been scrolled into view).
    await page.evaluate(() => window.scrollTo(0, 0));
    // One frame so the style tag flushes.
    await page.waitForTimeout(150);
    await expect(page).toHaveScreenshot(visualSnapshotName(path, viewport), {
      fullPage: true,
    });
  });
}
