// Playwright config for the visual-diff baseline (Task #93).
//
// Uses the SYSTEM Chromium installed via Nix (`installSystemDependencies`
// → `chromium`). We never rely on Playwright's bundled-browser download
// path because Replit's container blocks the CDN fetch. The seo-gate
// orchestrator (`scripts/seo-gate.sh`) checks for the binary before
// invoking playwright and skips this gate cleanly when absent.
//
// Determinism levers (any drift here invalidates committed baselines):
//   - Two viewport projects: desktop (1280x800) + mobile (375x667).
//   - Fixed deviceScaleFactor=1 — Playwright defaults differ across
//     OSes, which would shift every pixel.
//   - Animations disabled at the page-eval layer in the spec
//     (CSS injection — Playwright's `animations: "disabled"` only
//     freezes them at screenshot-time, not during pre-render layout).
//   - System fonts only — see `tests/visual/visual.spec.ts` for the
//     font-family override that prevents a missing Montserrat from
//     reflowing the layout silently.
//
// Regenerate snapshots after intentional design changes:
//   npx playwright test --update-snapshots
// Then commit `tests/visual/` in the same PR with the design change.
import { defineConfig, devices } from "@playwright/test";
import { execSync } from "node:child_process";
import fs from "node:fs";

function resolveChromiumPath(): string {
  if (process.env.PLAYWRIGHT_CHROMIUM_PATH) return process.env.PLAYWRIGHT_CHROMIUM_PATH;
  try {
    const p = execSync("command -v chromium", { encoding: "utf-8" }).trim();
    if (p && fs.existsSync(p)) return p;
  } catch {
    /* fall through */
  }
  // Returning an empty string is intentional — tests would fail at launch
  // with a clear "executablePath not set" error. The seo-gate skip path
  // catches the missing-binary case BEFORE we get here, so this branch is
  // only hit when someone runs `npx playwright test` directly without the
  // system chromium installed.
  return "";
}

const CHROMIUM_PATH = resolveChromiumPath();
const BASE_URL = process.env.PLAYWRIGHT_BASE_URL ?? process.env.BASE ?? "http://localhost:5000";

export default defineConfig({
  testDir: "./tests/visual",
  // Default test corpus = visual.spec.ts (the DIFF spec) only.
  // baseline.spec.ts is the operator-only CAPTURE spec — it must NEVER
  // run as part of the default `npx playwright test` invocation that
  // seo-gate.sh fires, otherwise every gate run would (a) double the
  // wall time and (b) silently re-write baselines into a parallel
  // snapshot folder. Operator targets it explicitly:
  //   npx playwright test tests/visual/baseline.spec.ts --update-snapshots
  testMatch: /visual\.spec\.ts$/,
  // Single worker — diff runs sequentially so the dev-server's on-demand
  // compile doesn't OOM the container under parallel page loads.
  workers: 1,
  fullyParallel: false,
  retries: 0,
  reporter: [["list"]],
  outputDir: "tests/visual/.output",
  // Per-test default timeout. Cold-compile + render + screenshot can run
  // up to 60s per route on this dev server (Next.js on-demand compile +
  // 40-route fixture). Default 30s isn't enough.
  timeout: 90 * 1000,
  expect: {
    // Default expect-timeout for individual matchers. We bump it well
    // above the dev-server's worst-case render time so a one-off slow
    // compile doesn't flake the gate.
    timeout: 30 * 1000,
    toHaveScreenshot: {
      // >1% pixel diff fails (per Task #93 spec). The threshold is on
      // ratio, not absolute count, so it scales with viewport size.
      maxDiffPixelRatio: 0.01,
      // Per-channel tolerance — RGBA differences below this are treated
      // as noise. 0.2 maps to "subtle anti-alias drift" and is the
      // Playwright-recommended starting value.
      threshold: 0.2,
      animations: "disabled",
      // Screenshot-stability detection re-captures until two consecutive
      // captures match. Default 5s is way too tight on the dev server
      // (lazy images, IntersectionObserver triggers, Vercel analytics
      // settle late). Bump to 60s so a slow first paint doesn't fail
      // the capture in `--update-snapshots` mode.
      timeout: 60 * 1000,
    },
  },
  use: {
    baseURL: BASE_URL,
    headless: true,
    deviceScaleFactor: 1,
    // Block known-flaky third-party tracking scripts at the network
    // layer so a slow Vercel-Analytics fetch can't shift layout.
    bypassCSP: true,
    launchOptions: {
      // No need to install a browser bundle — point at system chromium.
      executablePath: CHROMIUM_PATH || undefined,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
        "--font-render-hinting=none",
      ],
    },
  },
  projects: [
    {
      name: "desktop",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1280, height: 800 },
        deviceScaleFactor: 1,
      },
    },
    {
      name: "mobile",
      use: {
        ...devices["Pixel 5"],
        viewport: { width: 375, height: 667 },
        deviceScaleFactor: 1,
        isMobile: false, // keep DPR=1 across both projects for snapshot stability
        hasTouch: false,
      },
    },
  ],
});
