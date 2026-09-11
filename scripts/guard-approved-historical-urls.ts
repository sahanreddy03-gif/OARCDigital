/* eslint-disable no-console */
/**
 * Build / CI guard for the approved historical URL ledger.
 *
 * Static mode (default, prebuild):
 *   - LOCATION_IND_SVC_GLOBAL_KEEP must remain true
 *   - Every Sahan CSV + full restored matrix path stays kept / self-canonical
 *     in the content builder (no 410 / alias / noindex configuration)
 *   - Priority∪expanded sitemap partition covers the full matrix
 *   - Indexing sitemaps pass hygiene (no redirect/noindex/non-self-canonical)
 *
 * Live mode (BASE=https://oarcdigital.com):
 *   - Sample or full HTTP check: fail on 404/410/redirect/noindex/wrong canonical
 *
 * Usage:
 *   npx tsx scripts/guard-approved-historical-urls.ts
 *   BASE=https://oarcdigital.com npx tsx scripts/guard-approved-historical-urls.ts --live
 *   BASE=https://oarcdigital.com LIMIT=50 npx tsx scripts/guard-approved-historical-urls.ts --live
 */

import { createHash } from "node:crypto";
import approvedLedger from "../seo-manifest/approved-historical-urls.json";
import { buildEntries as buildExpandedMatrixEntries } from "../app/sitemap-malta-expanded-matrix.xml/route";
import { buildEntries as buildPriorityMatrixEntries } from "../app/sitemap-malta-priority-matrix.xml/route";
import { buildLocationIndustryServiceContent } from "../lib/seo/generateUniquePageContent";
import {
  HARD_410_PATHS,
  KEEP_LOCATION_IND_SVC_COMBOS,
  LOCATION_IND_SVC_GLOBAL_KEEP,
  LOCATION_SERVICE_ALIASES,
  SERVICE_ALIASES,
  isKeptLocationIndustryServicePath,
} from "../lib/seo/seoSets";
import {
  assertMatrixCohortPartition,
  MALTA_PRIORITY_MATRIX_PATHS,
} from "../lib/seo/maltaMatrixCohorts";
import { hygieneRejectReason, isSitemapEligible } from "../lib/seo/sitemapHygiene";
import { SITE_BASE } from "../lib/seo/sitemapHelpers";
import {
  historicalMatrixPaths,
  historicalProgrammaticExpected,
} from "../shared/historicalProgrammaticInventory";

function invariant(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

function hashPaths(paths: readonly string[]): string {
  return createHash("sha256")
    .update([...paths].sort().join("\n") + "\n")
    .digest("hex");
}

function attrContent(html: string, element: string, name: string, value: string, attr: string): string {
  const tags = html.match(new RegExp(`<${element}\\b[^>]*>`, "gi")) ?? [];
  for (const tag of tags) {
    const marker = tag.match(new RegExp(`${name}=[\"']([^\"']+)[\"']`, "i"))?.[1];
    if (marker?.toLowerCase() !== value.toLowerCase()) continue;
    return tag.match(new RegExp(`${attr}=[\"']([^\"']+)[\"']`, "i"))?.[1] ?? "";
  }
  return "";
}

async function liveCheck(paths: string[]): Promise<void> {
  const base = (process.env.BASE ?? "https://oarcdigital.com").replace(/\/+$/, "");
  const failures: string[] = [];
  const concurrency = Math.max(1, Number(process.env.CONCURRENCY ?? 8));
  let cursor = 0;

  async function worker() {
    while (cursor < paths.length) {
      const i = cursor++;
      const path = paths[i]!;
      const url = `${base}${path}`;
      try {
        const res = await fetch(url, {
          redirect: "manual",
          headers: { "user-agent": "OARC-approved-url-guard/1.0" },
          signal: AbortSignal.timeout(30000),
        });
        if (res.status === 404 || res.status === 410) {
          failures.push(`${path} → HTTP ${res.status}`);
          continue;
        }
        if (res.status >= 300 && res.status < 400) {
          failures.push(`${path} → redirect ${res.status} to ${res.headers.get("location") ?? "?"}`);
          continue;
        }
        if (res.status !== 200) {
          failures.push(`${path} → HTTP ${res.status}`);
          continue;
        }
        const html = await res.text();
        const robots = attrContent(html, "meta", "name", "robots", "content").toLowerCase();
        if (robots.includes("noindex")) {
          failures.push(`${path} → noindex (${robots})`);
          continue;
        }
        const canonical = attrContent(html, "link", "rel", "canonical", "href");
        const expected = `${SITE_BASE}${path === "/" ? "" : path}`;
        const expectedAlt = path === "/" ? `${SITE_BASE}/` : expected;
        if (canonical && canonical !== expected && canonical !== expectedAlt) {
          failures.push(`${path} → wrong canonical ${canonical} (expected ${expected})`);
        }
      } catch (err) {
        failures.push(`${path} → ${err instanceof Error ? err.message : String(err)}`);
      }
    }
  }

  await Promise.all(Array.from({ length: concurrency }, () => worker()));
  invariant(failures.length === 0, `live guard failures (${failures.length}):\n${failures.slice(0, 30).join("\n")}`);
}

function staticGuard(): string[] {
  const samplePaths: string[] = [];

  invariant(LOCATION_IND_SVC_GLOBAL_KEEP, "LOCATION_IND_SVC_GLOBAL_KEEP must stay true");
  invariant(
    approvedLedger.locationIndSvcGlobalKeepRequired === true,
    "approved ledger requires GLOBAL_KEEP",
  );
  invariant(
    KEEP_LOCATION_IND_SVC_COMBOS.size === 0,
    "selective KEEP_LOCATION_IND_SVC_COMBOS must stay empty while GLOBAL_KEEP governs the corpus",
  );

  const matrixPaths = [...historicalMatrixPaths()];
  invariant(
    matrixPaths.length === historicalProgrammaticExpected.matrixUrlCount,
    "matrix cardinality drifted from historical ledger",
  );
  invariant(
    hashPaths(matrixPaths) === approvedLedger.fingerprints.matrixPathSha256,
    "matrix fingerprint drifted from approved-historical-urls ledger",
  );
  invariant(
    hashPaths(matrixPaths) === historicalProgrammaticExpected.matrixPathSha256,
    "matrix fingerprint drifted from historical-programmatic.json",
  );

  const cohort = assertMatrixCohortPartition();
  invariant(cohort.priority === approvedLedger.counts.priorityMatrixSitemap);
  invariant(cohort.expanded === approvedLedger.counts.expandedMatrixSitemap);

  for (const path of approvedLedger.sahanMaltaPriorityPaths as string[]) {
    invariant(
      MALTA_PRIORITY_MATRIX_PATHS.includes(path),
      `Sahan CSV malta URL dropped from priority cohort: ${path}`,
    );
    samplePaths.push(path);
  }
  for (const path of approvedLedger.sahanOwnSitePaths as string[]) {
    samplePaths.push(path);
  }

  // Full matrix keep + hygiene (path-level). Deep content/canonical coverage for
  // all 7350 remains in validate-historical-programmatic.ts; here we assert
  // keep/hygiene for every approved matrix path and deep-check Sahan + stride.
  const deepCheckPaths = new Set<string>([
    ...(approvedLedger.sahanMaltaPriorityPaths as string[]),
  ]);
  for (let i = 0; i < matrixPaths.length; i += 37) deepCheckPaths.add(matrixPaths[i]!);

  for (const path of matrixPaths) {
    const parts = path.split("/").filter(Boolean);
    const location = parts[1]!;
    const industry = parts[2]!;
    const service = parts[3]!;
    invariant(
      isKeptLocationIndustryServicePath(location, industry, service),
      `approved matrix path no longer kept: ${path}`,
    );
    invariant(!HARD_410_PATHS.has(path), `approved matrix path marked HARD_410: ${path}`);
    invariant(!SERVICE_ALIASES[path], `approved matrix path redirected via SERVICE_ALIASES: ${path}`);
    invariant(
      !LOCATION_SERVICE_ALIASES[service],
      `approved matrix service redirected via LOCATION_SERVICE_ALIASES: ${service}`,
    );
    const loc = `${SITE_BASE}${path}`;
    const reason = hygieneRejectReason(loc);
    invariant(reason === null, `hygiene would exclude approved path ${path}: ${reason}`);

    if (deepCheckPaths.has(path)) {
      const content = buildLocationIndustryServiceContent(location, industry, service);
      invariant(content, `content builder empty for approved path: ${path}`);
      invariant(
        content.canonical === `${SITE_BASE}${path}`,
        `wrong canonical for approved path: ${path} → ${content.canonical}`,
      );
    }
  }

  const priorityEntries = buildPriorityMatrixEntries();
  const expandedEntries = buildExpandedMatrixEntries();
  invariant(priorityEntries.length === 2000);
  invariant(expandedEntries.length === 5350);
  for (const entry of [...priorityEntries, ...expandedEntries]) {
    invariant(isSitemapEligible(entry.loc), `sitemap hygiene rejected ${entry.loc}`);
  }

  // Prefer Sahan set first for live sampling, then a sparse matrix stride.
  for (let i = 0; i < matrixPaths.length; i += 73) {
    samplePaths.push(matrixPaths[i]!);
  }
  return [...new Set(samplePaths)];
}

async function main(): Promise<void> {
  const live = process.argv.includes("--live") || process.env.GUARD_LIVE === "1";
  const sample = staticGuard();
  console.log(
    `guard-approved-historical-urls: STATIC PASS (matrix=${historicalProgrammaticExpected.matrixUrlCount}, priority=${MALTA_PRIORITY_MATRIX_PATHS.length}, sahanMalta=${approvedLedger.counts.sahanMaltaPriority}, sahanOwn=${approvedLedger.counts.sahanOwnSite})`,
  );

  if (live) {
    const limit = Math.max(0, Number(process.env.LIMIT ?? 0));
    const paths = limit > 0 ? sample.slice(0, limit) : sample;
    console.log(`guard-approved-historical-urls: LIVE checking ${paths.length} URLs against ${process.env.BASE ?? "https://oarcdigital.com"}`);
    await liveCheck(paths);
    console.log(`guard-approved-historical-urls: LIVE PASS (${paths.length} URLs)`);
  }
}

main().catch((error) => {
  console.error(
    `guard-approved-historical-urls: FAIL ${error instanceof Error ? error.message : String(error)}`,
  );
  process.exitCode = 1;
});
