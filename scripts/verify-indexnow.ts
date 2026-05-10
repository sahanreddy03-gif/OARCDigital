/* eslint-disable no-console */
/**
 * verify-indexnow — proves IndexNow actually fired in the last deploy
 * window. Reads the marker that `scripts/index-now-ping.ts` writes on
 * every successful submission and asserts it is recent (default: within
 * 24h of "now") and, when running on Vercel, that its commit matches
 * VERCEL_GIT_COMMIT_SHA so a stale marker from a previous deploy can't
 * pass verification.
 *
 * Marker location: `.local/.indexnow-last-ping.json` (gitignored —
 * rebuilt every deploy by the ping script).
 *
 * Usage:
 *   npx tsx scripts/verify-indexnow.ts                    # default 24h window
 *   npx tsx scripts/verify-indexnow.ts --max-age-hours=6  # tighter SLA
 *   npx tsx scripts/verify-indexnow.ts --no-commit-check  # skip SHA match
 *
 * Exit codes:
 *   0 — marker present, recent, and (in Vercel CI) commit matches HEAD.
 *   1 — marker missing, stale, malformed, or commit mismatch.
 *
 * Wired into the production deploy pipeline alongside `index-now-ping.ts`
 * so a silently-failing ping (network blip, key rotation, endpoint outage)
 * trips a loud post-deploy failure instead of decaying into "we thought we
 * were pinging Bing for a year".
 */

import * as fs from "node:fs";

// Marker written by scripts/index-now-ping.ts on every successful ping.
const MARKER_PATH = ".local/.indexnow-last-ping.json";
const DEFAULT_MAX_AGE_HOURS = 24;

interface Marker {
  pingedAt: string;
  commit: string;
  vercelEnv: string | null;
  mode: "delta" | "full";
  extraUrlCount: number;
  endpointsTotal: number;
  endpointsOk: number;
}

function parseArgs(): { maxAgeHours: number; commitCheck: boolean } {
  let maxAgeHours = DEFAULT_MAX_AGE_HOURS;
  let commitCheck = true;
  for (const arg of process.argv.slice(2)) {
    const m = arg.match(/^--max-age-hours=(\d+(?:\.\d+)?)$/);
    if (m) {
      maxAgeHours = Number(m[1]);
      continue;
    }
    if (arg === "--no-commit-check") {
      commitCheck = false;
      continue;
    }
    console.error(`[verify-indexnow] unknown arg: ${arg}`);
    process.exit(2);
  }
  return { maxAgeHours, commitCheck };
}

function fail(msg: string): never {
  console.error(`[verify-indexnow] FAIL — ${msg}`);
  process.exit(1);
}

function main() {
  const { maxAgeHours, commitCheck } = parseArgs();

  if (!fs.existsSync(MARKER_PATH)) {
    fail(
      `marker not found at ${MARKER_PATH}. ` +
        `Either index-now-ping.ts never ran in this build, or the artifact ` +
        `was wiped between build and verification. Check the deploy log for ` +
        `"[index-now-ping] wrote marker → ..." right after the build step.`,
    );
  }

  let raw: string;
  try {
    raw = fs.readFileSync(MARKER_PATH, "utf-8");
  } catch (err) {
    fail(`could not read ${MARKER_PATH}: ${err instanceof Error ? err.message : String(err)}`);
  }

  let marker: Marker;
  try {
    marker = JSON.parse(raw) as Marker;
  } catch (err) {
    fail(`marker is not valid JSON: ${err instanceof Error ? err.message : String(err)}`);
  }

  if (!marker.pingedAt || !/^\d{4}-\d{2}-\d{2}T/.test(marker.pingedAt)) {
    fail(`marker.pingedAt is missing or malformed: ${JSON.stringify(marker.pingedAt)}`);
  }

  const pingedAtMs = Date.parse(marker.pingedAt);
  if (Number.isNaN(pingedAtMs)) {
    fail(`marker.pingedAt is not a parseable timestamp: ${marker.pingedAt}`);
  }

  const ageMs = Date.now() - pingedAtMs;
  const ageHours = ageMs / (1000 * 60 * 60);
  if (ageHours > maxAgeHours) {
    fail(
      `last ping was ${ageHours.toFixed(2)}h ago (> ${maxAgeHours}h SLA). ` +
        `pingedAt=${marker.pingedAt}. The deploy did not re-ping IndexNow.`,
    );
  }

  if (marker.endpointsOk === 0) {
    fail(
      `marker says all ${marker.endpointsTotal} IndexNow endpoints failed at ${marker.pingedAt}. ` +
        `Check the deploy log for the per-endpoint status lines.`,
    );
  }

  if (commitCheck) {
    const expected = process.env.VERCEL_GIT_COMMIT_SHA;
    if (expected && marker.commit && marker.commit !== expected) {
      fail(
        `marker commit ${marker.commit.slice(0, 8)} does not match deploy commit ` +
          `${expected.slice(0, 8)}. The marker is from a previous build — the ping ` +
          `did not re-fire on this deploy.`,
      );
    }
  }

  console.log(
    `[verify-indexnow] OK — pingedAt=${marker.pingedAt} ` +
      `(${ageHours.toFixed(2)}h ago, mode=${marker.mode}, ` +
      `endpoints=${marker.endpointsOk}/${marker.endpointsTotal}, ` +
      `extras=${marker.extraUrlCount}, commit=${marker.commit.slice(0, 8) || "n/a"})`,
  );
}

main();
