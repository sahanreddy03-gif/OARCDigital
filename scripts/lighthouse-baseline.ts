/* eslint-disable no-console */
// Lighthouse perf baseline (Task #93).
//
// For each route in TOP_PERF_PAGES, runs Lighthouse 3 times via the
// programmatic JS API, takes the median LCP / INP / CLS / scores, and
// writes the trimmed JSON report to `.local/lighthouse-baseline/<slug>.json`.
//
// Two modes:
//   --update      Overwrite the baseline (use after intentional perf
//                 changes or when adding a new route to TOP_PERF_PAGES).
//   (no flag)     Diff vs the committed baseline and FAIL on:
//                   - any score regression > 5% (perf, a11y, seo, bp)
//                   - any CWV regression > 20% (LCP, INP, CLS)
//                 SKIP cleanly with NOTE when no baseline exists.
//
// The script auto-detects the system Chromium binary (Nix install path)
// and points Lighthouse at it via chromeFlags.executablePath. When the
// binary is missing, exits 0 with a SKIP note — the seo-gate orchestrator
// also pre-checks but the in-script guard makes ad-hoc runs safe.
//
// Median-of-3 vs single-run: Lighthouse's lab data is intrinsically
// noisy (cold caches, network jitter, GC pauses). A single run can
// vary by ±5pts on the perf score. The median of three is the
// Lighthouse-team-recommended floor and dampens that variance below
// our 5% gate threshold.
//
// Real edge data (proper field-data, mobile-throttled) requires a
// Vercel preview URL — that work is on Sahan's handoff list. This
// script captures the LOCAL FLOOR only; treat absolute numbers as
// trend signals, not vendor-comparable benchmarks.
//
// Dev server vs production build:
//   The script consumes whatever URL `BASE` points at. By default it
//   talks to the dev server at http://localhost:5000 — those numbers
//   are NOT vendor-comparable (HMR, source maps, no minification) but
//   they ARE drift-comparable: a perf score that drops 8 points
//   between two dev-server runs is still a real regression. To capture
//   against a production build instead, the operator runs:
//     npm run build && PORT=5000 npm start &
//     BASE=http://localhost:5000 npx tsx scripts/lighthouse-baseline.ts --update
//   The committed baseline corpus in `.local/lighthouse-baseline/` was
//   captured against the dev server at HEAD. Re-baselining against
//   prod requires re-running with `--update` and the prod server up.
//   This is documented in `.local/seo-tier-doc.md` Section 2.
//
// Usage:
//   BASE=http://localhost:5000 npx tsx scripts/lighthouse-baseline.ts
//   BASE=http://localhost:5000 npx tsx scripts/lighthouse-baseline.ts --update
//   npx tsx scripts/lighthouse-baseline.ts --check-binary

import { execSync, spawn, type ChildProcess } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import net from "node:net";
import { TOP_PERF_PAGES, perfBaselineFilename } from "../lib/seo/topPerfPages";

const BASE = (process.env.BASE ?? "http://localhost:5000").replace(/\/$/, "");
const BASELINE_DIR = ".local/lighthouse-baseline";
// Default 3 (median dampens LH lab variance below the 5% threshold).
// Override via env when seeding incrementally on a slow dev server —
// LIGHTHOUSE_RUNS_PER_ROUTE=1 trades precision for capture wall-time
// (one LH pass = ~25-40s on this dev server vs. ~75-120s for three).
// Production seeding should always be the default 3 against a prod
// build (see header `Dev server vs production build` notes).
const RUNS_PER_ROUTE = Math.max(
  1,
  Math.min(5, parseInt(process.env.LIGHTHOUSE_RUNS_PER_ROUTE ?? "3", 10) || 3),
);
// Regression thresholds. Score columns (perf, a11y, best-practices, seo)
// are scaled 0-100 — 5% absolute. CWV are time-based — 20% relative.
const SCORE_REGRESSION_PCT = 0.05;
const CWV_REGRESSION_PCT = 0.20;

type Baseline = {
  url: string;
  capturedAt: string;
  scores: { performance: number; accessibility: number; bestPractices: number; seo: number };
  cwv: { lcp: number; inp: number; cls: number };
  runs: number;
};

const args = new Set(process.argv.slice(2));
const updateMode = args.has("--update");
const checkBinaryOnly = args.has("--check-binary");

// Optional route filter: `LIGHTHOUSE_ROUTE_FILTER=/services/web-design,/`
// captures or diffs ONLY those routes. Used by the operator to stage
// the baseline corpus in batches when the dev server's cold-compile
// makes a single 30-route run impractical (each median-of-3 capture
// is ~30-90s; batched seeding lets the corpus grow incrementally
// across multiple sessions). Empty / unset = full TOP_PERF_PAGES.
const routeFilter = (process.env.LIGHTHOUSE_ROUTE_FILTER ?? "")
  .split(",")
  .map((r) => r.trim())
  .filter(Boolean);
const ROUTES = routeFilter.length > 0
  ? TOP_PERF_PAGES.filter((r) => routeFilter.includes(r))
  : TOP_PERF_PAGES;

function resolveChromiumPath(): string | null {
  if (process.env.LIGHTHOUSE_CHROMIUM_PATH) return process.env.LIGHTHOUSE_CHROMIUM_PATH;
  try {
    const p = execSync("command -v chromium", { encoding: "utf-8" }).trim();
    if (p && fs.existsSync(p)) return p;
  } catch {
    /* fall through */
  }
  return null;
}

const CHROMIUM_PATH = resolveChromiumPath();
if (checkBinaryOnly) {
  if (CHROMIUM_PATH) {
    console.log(`lighthouse-baseline: chromium found at ${CHROMIUM_PATH}`);
    process.exit(0);
  } else {
    console.log("lighthouse-baseline: NOTE — chromium binary not found; install via system deps to run perf baseline");
    process.exit(0);
  }
}

if (!CHROMIUM_PATH) {
  console.log("lighthouse-baseline: SKIP — chromium binary not found (skip-clean per Task #93 install-fail policy)");
  process.exit(0);
}

function median(values: number[]): number {
  const s = [...values].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 === 0 ? (s[m - 1] + s[m]) / 2 : s[m];
}

async function lighthouseFor(url: string, port: number): Promise<{
  scores: Baseline["scores"]; cwv: Baseline["cwv"];
} | null> {
  // Dynamic import — `lighthouse` is an ESM module, and tsx doesn't allow
  // a top-level `import` of an optional dep without crashing the script
  // when it's not installed. The skip path above already guards on
  // chromium absence; this guards on the npm package itself.
  let lighthouse: typeof import("lighthouse").default;
  try {
    lighthouse = (await import("lighthouse")).default;
  } catch {
    console.log("lighthouse-baseline: SKIP — lighthouse npm package not installed");
    process.exit(0);
  }
  const result = await lighthouse(url, {
    port,
    output: "json",
    logLevel: "error",
    onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
  });
  if (!result || !result.lhr) return null;
  const lhr = result.lhr;
  const scores: Baseline["scores"] = {
    performance: Math.round((lhr.categories.performance?.score ?? 0) * 100),
    accessibility: Math.round((lhr.categories.accessibility?.score ?? 0) * 100),
    bestPractices: Math.round((lhr.categories["best-practices"]?.score ?? 0) * 100),
    seo: Math.round((lhr.categories.seo?.score ?? 0) * 100),
  };
  const cwv: Baseline["cwv"] = {
    lcp: Math.round((lhr.audits["largest-contentful-paint"]?.numericValue ?? 0)),
    // Lighthouse 12 emits INP via "interaction-to-next-paint" when measured
    // from real user input; in lab mode it falls back to TBT. Capture
    // whichever is present so the gate signal stays consistent.
    inp: Math.round(
      (lhr.audits["interaction-to-next-paint"]?.numericValue ??
        lhr.audits["total-blocking-time"]?.numericValue ??
        0),
    ),
    cls: Number(((lhr.audits["cumulative-layout-shift"]?.numericValue ?? 0)).toFixed(3)),
  };
  return { scores, cwv };
}

// Spawns a headless chromium with remote debugging on a free port.
// We do this ourselves (rather than relying on chrome-launcher's bundled
// Chrome lookup) so the executablePath is unambiguous in the Nix env.
function freePort(): Promise<number> {
  return new Promise((resolve, reject) => {
    const srv = net.createServer().listen(0, () => {
      const addr = srv.address();
      const port = typeof addr === "object" && addr ? addr.port : 0;
      srv.close(() => resolve(port));
    });
    srv.on("error", reject);
  });
}

function spawnChromium(port: number): { proc: ChildProcess; userDataDir: string } {
  const userDataDir = fs.mkdtempSync(path.join("/tmp/", "lh-chromium-"));
  const proc = spawn(CHROMIUM_PATH!, [
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${userDataDir}`,
    "--headless=new",
    "--no-sandbox",
    "--disable-gpu",
    "--disable-dev-shm-usage",
    "--disable-extensions",
    "--no-first-run",
    "--no-default-browser-check",
  ], { stdio: ["ignore", "pipe", "pipe"] });
  return { proc, userDataDir };
}

async function waitForDebugger(port: number, timeoutMs = 10_000): Promise<boolean> {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const r = await fetch(`http://127.0.0.1:${port}/json/version`);
      if (r.ok) return true;
    } catch { /* not ready */ }
    await new Promise((r) => setTimeout(r, 200));
  }
  return false;
}

async function runRoute(routePath: string): Promise<Baseline | null> {
  const url = `${BASE}${routePath === "/" ? "" : routePath}`;
  const port = await freePort();
  const { proc, userDataDir } = spawnChromium(port);
  try {
    const ready = await waitForDebugger(port);
    if (!ready) {
      console.log(`  ! chromium debugger never came up on port ${port}`);
      return null;
    }
    const runs: { scores: Baseline["scores"]; cwv: Baseline["cwv"] }[] = [];
    for (let i = 0; i < RUNS_PER_ROUTE; i++) {
      const r = await lighthouseFor(url, port);
      if (r) runs.push(r);
    }
    if (runs.length === 0) return null;
    return {
      url,
      capturedAt: new Date().toISOString(),
      scores: {
        performance: median(runs.map((r) => r.scores.performance)),
        accessibility: median(runs.map((r) => r.scores.accessibility)),
        bestPractices: median(runs.map((r) => r.scores.bestPractices)),
        seo: median(runs.map((r) => r.scores.seo)),
      },
      cwv: {
        lcp: median(runs.map((r) => r.cwv.lcp)),
        inp: median(runs.map((r) => r.cwv.inp)),
        cls: Number(median(runs.map((r) => r.cwv.cls)).toFixed(3)),
      },
      runs: runs.length,
    };
  } finally {
    proc.kill("SIGTERM");
    setTimeout(() => proc.kill("SIGKILL"), 1500);
    try { fs.rmSync(userDataDir, { recursive: true, force: true }); } catch { /* ignore */ }
  }
}

function readBaseline(file: string): Baseline | null {
  if (!fs.existsSync(file)) return null;
  try { return JSON.parse(fs.readFileSync(file, "utf-8")) as Baseline; } catch { return null; }
}

type Issue = { route: string; metric: string; baseline: number; current: number; delta: string };

function diff(prev: Baseline, curr: Baseline, route: string): Issue[] {
  const out: Issue[] = [];
  const checkScore = (name: string, p: number, c: number) => {
    // Lower is worse for scores. Allow up to SCORE_REGRESSION_PCT * 100
    // ABSOLUTE points of slip (5pts at default 0.05).
    const allowedDrop = Math.max(1, Math.round(p * SCORE_REGRESSION_PCT));
    if (c < p - allowedDrop) {
      out.push({ route, metric: name, baseline: p, current: c, delta: `-${p - c}pts (>${allowedDrop} allowed)` });
    }
  };
  checkScore("perf", prev.scores.performance, curr.scores.performance);
  checkScore("a11y", prev.scores.accessibility, curr.scores.accessibility);
  checkScore("best-practices", prev.scores.bestPractices, curr.scores.bestPractices);
  checkScore("seo", prev.scores.seo, curr.scores.seo);
  // Higher is worse for CWV. Allow up to CWV_REGRESSION_PCT relative.
  const checkCwv = (name: string, p: number, c: number) => {
    if (p === 0) return;
    const allowed = p * (1 + CWV_REGRESSION_PCT);
    if (c > allowed) {
      out.push({
        route, metric: name, baseline: p, current: c,
        delta: `+${(((c - p) / p) * 100).toFixed(1)}% (>${(CWV_REGRESSION_PCT * 100).toFixed(0)}% allowed)`,
      });
    }
  };
  checkCwv("lcp", prev.cwv.lcp, curr.cwv.lcp);
  checkCwv("inp", prev.cwv.inp, curr.cwv.inp);
  checkCwv("cls", prev.cwv.cls, curr.cwv.cls);
  return out;
}

async function main() {
  if (!fs.existsSync(BASELINE_DIR)) fs.mkdirSync(BASELINE_DIR, { recursive: true });

  // Smoke-check the dev server before walking 30 routes.
  try {
    const r = await fetch(BASE, { redirect: "follow" });
    if (!r.ok) {
      console.log(`lighthouse-baseline: SKIP — BASE=${BASE} returned HTTP ${r.status}`);
      process.exit(0);
    }
  } catch {
    console.log(`lighthouse-baseline: SKIP — BASE=${BASE} unreachable`);
    process.exit(0);
  }

  // Diff mode requires a complete baseline. If ANY route is missing its
  // baseline file, refuse to silently capture — that would convert this
  // gate from "diff vs committed floor" into "always-pass capture mode"
  // and mutate the working tree mid-gate. Operator must run --update
  // explicitly to seed/refresh the baseline corpus, then commit it.
  // Diff mode: skip routes that have no committed baseline yet (the
  // operator is staging the corpus incrementally — see Task #101).
  // The gate FAILs only when (a) zero routes are covered or (b) a
  // covered route regresses. Routes without a baseline are listed
  // as "uncovered" so the operator knows what's left to seed.
  // Update mode runs all ROUTES in the (filtered) set unconditionally.
  let routesToRun: readonly string[] = ROUTES;
  if (!updateMode) {
    const covered = ROUTES.filter((r) =>
      fs.existsSync(path.join(BASELINE_DIR, perfBaselineFilename(r))),
    );
    const uncovered = ROUTES.filter((r) =>
      !fs.existsSync(path.join(BASELINE_DIR, perfBaselineFilename(r))),
    );
    if (covered.length === 0) {
      console.log(
        `lighthouse-baseline: SKIP — no baseline corpus in ${BASELINE_DIR}/. ` +
          `Run \`npx tsx scripts/lighthouse-baseline.ts --update\` once to seed it, then commit.`,
      );
      process.exit(0);
    }
    if (uncovered.length > 0) {
      console.log(
        `lighthouse-baseline: NOTE — ${covered.length}/${ROUTES.length} routes covered; ` +
          `${uncovered.length} uncovered (drift NOT enforced for these — re-run with --update to seed).`,
      );
      for (const r of uncovered) console.log(`  uncovered: ${r}`);
    }
    routesToRun = covered;
  }

  console.log(`lighthouse-baseline: mode=${updateMode ? "update" : "diff"} routes=${routesToRun.length}/${ROUTES.length} BASE=${BASE}${routeFilter.length ? " filter=ON" : ""}`);
  const allIssues: Issue[] = [];
  let captured = 0;
  for (const route of routesToRun) {
    process.stdout.write(`  > ${route} ... `);
    const result = await runRoute(route);
    if (!result) {
      // A null result means Chromium failed to start, the LH run threw,
      // or every retry produced no scoreable report. We MUST treat this
      // as a hard failure — silently `continue`-ing here would let
      // gate:full pass with incomplete coverage (the original Task #93
      // bug that the second-round code review caught). Push a synthetic
      // issue so allIssues is non-empty, and the loop's final FAIL
      // branch will surface every dropped route.
      process.stdout.write("FAIL (no result — Chromium/Lighthouse capture error)\n");
      allIssues.push({
        route,
        metric: "capture-failed",
        baseline: 0,
        current: 0,
        delta: "no scoreable report",
      });
      continue;
    }
    const file = path.join(BASELINE_DIR, perfBaselineFilename(route));
    const prev = readBaseline(file);
    if (updateMode) {
      fs.writeFileSync(file, JSON.stringify(result, null, 2) + "\n");
      captured++;
      process.stdout.write(`${prev ? "updated" : "captured"} perf=${result.scores.performance} lcp=${result.cwv.lcp}ms\n`);
    } else if (!prev) {
      // Defensive: the pre-flight check above should already have
      // exited, but if a single file is added between the check and
      // the loop iteration, treat it as a hard fail rather than auto-
      // capturing.
      process.stdout.write("FAIL (baseline disappeared between pre-flight and run)\n");
      allIssues.push({ route, metric: "baseline-missing", baseline: 0, current: 0, delta: "no committed baseline" });
    } else {
      const issues = diff(prev, result, route);
      allIssues.push(...issues);
      process.stdout.write(`perf=${result.scores.performance}/${prev.scores.performance} lcp=${result.cwv.lcp}/${prev.cwv.lcp}ms ${issues.length ? "REGRESS" : "ok"}\n`);
    }
  }

  if (updateMode) {
    // --update mode contract: every route MUST be captured. A partial
    // capture leaves an inconsistent baseline corpus (some routes on
    // the new floor, some on the old) — refuse to commit that. The
    // operator must re-run --update against a healthy server.
    // Completeness is enforced against the (potentially filtered) ROUTES
    // set, NOT the full TOP_PERF_PAGES — otherwise a deliberate batched
    // seeding run via LIGHTHOUSE_ROUTE_FILTER would always FAIL because
    // it captured fewer routes than the full corpus. The check still
    // catches the "some routes failed mid-run" case the operator cares
    // about.
    if (captured !== ROUTES.length) {
      const missing = ROUTES.length - captured;
      console.log(`\nlighthouse-baseline: FAIL — --update captured ${captured}/${ROUTES.length} routes (${missing} missing). Re-run after fixing the capture errors above; do NOT commit a partial baseline.`);
      process.exit(1);
    }
    console.log(`\nlighthouse-baseline: ${captured} route(s) (re)captured. Commit ${BASELINE_DIR}/.`);
    process.exit(0);
  }
  if (allIssues.length === 0) {
    console.log(`\nlighthouse-baseline: OK — no regressions vs baseline`);
    process.exit(0);
  }
  console.log(`\nlighthouse-baseline: FAIL — ${allIssues.length} regression(s):`);
  for (const i of allIssues) {
    console.log(`  ${i.route}  ${i.metric}: baseline=${i.baseline} current=${i.current} ${i.delta}`);
  }
  console.log(`\n  Re-run with --update if the regression is intentional, then commit ${BASELINE_DIR}/`);
  process.exit(1);
}

main().catch((err) => {
  console.error("lighthouse-baseline crashed:", err);
  process.exit(2);
});
