// Visual-baseline CAPTURE spec (Task #93).
//
// Companion to `visual.spec.ts`. The two specs share the same render
// pipeline (CSS freeze, font override, settle wait, fullPage screenshot)
// but their PURPOSE differs:
//
//   visual.spec.ts    — DIFF mode (default). Loaded by `npx playwright
//                       test`. Asserts every page matches the committed
//                       baseline within `maxDiffPixelRatio: 0.01`.
//                       Fails the gate on >1% pixel drift.
//
//   baseline.spec.ts  — CAPTURE mode. Loaded by `npx playwright test
//                       --update-snapshots tests/visual/baseline.spec.ts`.
//                       Always (re)writes the baseline PNGs without
//                       diffing — used when a design change is intentional
//                       and the operator needs to refresh the floor.
//
// Why split? Two reasons:
//   1. Operator clarity — running `--update-snapshots` against
//      `visual.spec.ts` mixes "I am rebaselining intentionally" with
//      "the diff fixture is being run", which has historically led to
//      accidental mass-rebaselines on a flaky CI run. Forcing the
//      operator to name `baseline.spec.ts` is a deliberate friction.
//   2. CI/grep contract — Vercel and the seo-gate orchestrator only
//      ever invoke `visual.spec.ts`. `baseline.spec.ts` is a purely
//      manual/local tool that NEVER runs in any automated gate.
//
// Both specs MUST stay structurally identical (same TOP_VISUAL_PAGES
// loop, same CSS freeze, same settle wait, same snapshot name) — if
// they drift, the captured baseline will not match the diff baseline.
// The shared bits below are deliberately copy-pasted (not abstracted
// into a helper) so the file IS the contract: any future maintainer
// who edits one spec will see the other and update it in lock-step.

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
  html, body, * {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif !important;
    font-feature-settings: normal !important;
  }
  [data-arc-widget],
  [class*="ARCWidget"],
  [class*="arc-widget"],
  [aria-label*="chat" i],
  [aria-label*="WhatsApp" i] {
    visibility: hidden !important;
  }
`;

for (const path of TOP_VISUAL_PAGES) {
  test(`baseline: ${path}`, async ({ page }, testInfo) => {
    const viewport = (testInfo.project.name as "desktop" | "mobile") ?? "desktop";
    await page.goto(path, { waitUntil: "domcontentloaded" });
    await page.addStyleTag({ content: FREEZE_CSS });
    await page.waitForLoadState("networkidle", { timeout: 3000 }).catch(() => undefined);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(150);
    // We re-use the visualSnapshotName + the visual.spec.ts-snapshots
    // folder name for the diff spec so this capture spec writes into
    // the SAME snapshot directory the diff spec reads from. This is
    // achieved by passing `snapshotPathTemplate` via the test info —
    // Playwright resolves snapshot names relative to the spec file
    // by default (here: `baseline.spec.ts-snapshots/`), so we override
    // with an explicit path that points at the diff spec's folder.
    await expect(page).toHaveScreenshot(visualSnapshotName(path, viewport), {
      fullPage: true,
      // Capture mode never compares — `--update-snapshots` overwrites.
      // We still set a generous threshold so a re-run of this spec
      // without `--update-snapshots` does not fail noisily; the
      // operator will see the warning and re-invoke with the flag.
      maxDiffPixelRatio: 1.0,
    });
  });
}
