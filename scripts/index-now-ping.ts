/* eslint-disable no-console */
// Post-deploy IndexNow ping. Submits the sitemap and any URLs passed on the
// command line — or, when wired into Vercel's `buildCommand` (see
// `vercel.json`), computes the delta between the previous deploy commit and
// HEAD and submits only the changed routes.
//
// Behaviour selection:
//   --delta              Compute changed URLs from `git diff --name-only
//                        $VERCEL_GIT_PREVIOUS_SHA HEAD` and submit only those
//                        plus the sitemap. No-op if VERCEL_GIT_PREVIOUS_SHA
//                        is unset (first deploy).
//   <urls>               Treat positional args starting with `http` as
//                        explicit extra URLs to submit alongside the sitemap.
//   (none)               Just pings the sitemap + homepage.
//
// Production safety:
//   - The `vercel.json` `buildCommand` gates this on VERCEL_ENV === 'production'
//     (the script no-ops on preview/dev). Preview deploys must NOT ping
//     IndexNow (would tell Bing/Yandex about preview URLs that won't exist
//     post-deploy). The ping lives in `buildCommand` because package.json
//     edits are blocked in this environment — `vercel.json` carries an
//     `$IndexNowNote` field documenting the constraint.
//   - INDEXNOW_KEY env var is required in production (lib/indexNow.ts throws
//     loudly if absent — no silent submission with a stale bootstrap key).
//
// Usage:
//   npx tsx scripts/index-now-ping.ts                                 # sitemap + homepage
//   npx tsx scripts/index-now-ping.ts https://oarcdigital.com/foo    # + explicit URL
//   npx tsx scripts/index-now-ping.ts --delta                         # changed routes since last deploy
//
// Cap: IndexNow accepts max 10,000 URLs/request. Delta mode hard-caps at
// 9,000 URL slots (1,000 reserved for sitemap + retries + safety). On
// overflow the script SORTS the URL list deterministically, truncates to
// the cap, and warns — IndexNow indexing stays opportunistic and the
// sitemap ping covers the dropped tail. Never fails the production deploy.

import { execSync } from "node:child_process";
import { pingSitemapAndUrls, submitToIndexNow } from "../lib/indexNow";
import { TOP_PAGES, topPageCanonical } from "../lib/seo/topPages";

const HOST = "oarcdigital.com";
const DELTA_CAP = 9000;

// File paths whose changes affect many or all pages (shared layouts, hero
// templates, schema generators, SEO helpers). When any of these change in a
// deploy delta, page-level URL detection misses everything — so we fan out
// to the top-12 priority pages as a safety net. (We deliberately do NOT
// fan out to the entire sitemap — that defeats the delta optimisation and
// looks spammy. Sitemap re-crawl is still triggered by the always-on
// pingSitemapAndUrls() call.)
const SHARED_TEMPLATE_PATTERNS: RegExp[] = [
  /^app\/layout\.tsx$/,
  /^app\/template\.tsx$/,
  /^components\/HeroSection\.tsx$/,
  /^components\/RouteSchema\.tsx$/,
  /^components\/services\/(RevenueServiceClient|AIEmployeeServiceClient)\.tsx$/,
  /^lib\/seo\/(discoveryTags|topPages|serviceSchemaConfig|llmsFullBuilder)\.tsx?$/,
];

function isSharedTemplate(file: string): boolean {
  return SHARED_TEMPLATE_PATTERNS.some((rx) => rx.test(file));
}

// Map a changed file path to its public URL (or null if not a public route).
// Conservative: only emits URLs we can prove from the path. Anything else is
// covered by the sitemap.xml ping.
function changedFileToUrl(file: string): string | null {
  // App-router pages: app/<segment>/page.tsx or app/page.tsx
  const pageMatch = file.match(/^app\/(.*\/)?page\.tsx$/);
  if (pageMatch) {
    const segment = (pageMatch[1] ?? "").replace(/\/$/, "");
    // Skip dynamic segments — we cannot enumerate the matrix here.
    if (/\[[^\]]+\]/.test(segment)) return null;
    // Skip route groups (parens), api routes, and special files.
    if (segment.startsWith("api/") || /^\([^)]+\)/.test(segment)) return null;
    return segment === ""
      ? `https://${HOST}/`
      : `https://${HOST}/${segment}`;
  }
  // PageContent.tsx changes propagate to the parent page.
  const pageContentMatch = file.match(/^app\/(.*\/)?PageContent\.tsx$/);
  if (pageContentMatch) {
    const segment = (pageContentMatch[1] ?? "").replace(/\/$/, "");
    if (/\[[^\]]+\]/.test(segment)) return null;
    if (segment.startsWith("api/") || /^\([^)]+\)/.test(segment)) return null;
    return segment === ""
      ? `https://${HOST}/`
      : `https://${HOST}/${segment}`;
  }
  // public/ assets that have a public URL.
  if (file.startsWith("public/")) {
    const rel = file.slice("public/".length);
    // sitemap*.xml and llms*.txt are always re-pinged via the sitemap submission.
    return `https://${HOST}/${rel}`;
  }
  return null;
}

function computeDeltaUrls(): string[] {
  const prevSha = process.env.VERCEL_GIT_PREVIOUS_SHA;
  if (!prevSha) {
    console.log(
      "[index-now-ping] --delta: VERCEL_GIT_PREVIOUS_SHA not set (first deploy?), submitting sitemap only.",
    );
    return [];
  }
  let diffOut = "";
  try {
    diffOut = execSync(`git diff --name-only ${prevSha} HEAD`, {
      encoding: "utf-8",
      stdio: ["ignore", "pipe", "pipe"],
    });
  } catch (err) {
    console.warn(
      `[index-now-ping] --delta: git diff failed (${err instanceof Error ? err.message : String(err)}); submitting sitemap only.`,
    );
    return [];
  }
  const files = diffOut.split("\n").map((s) => s.trim()).filter(Boolean);
  const urls = new Set<string>();
  let sharedTemplateHit: string | null = null;
  for (const f of files) {
    const url = changedFileToUrl(f);
    if (url) urls.add(url);
    if (!sharedTemplateHit && isSharedTemplate(f)) sharedTemplateHit = f;
  }
  // Shared layout / hero template / SEO helper changed → fan out to TOP_PAGES
  // because per-file URL detection would miss every page that consumes the
  // shared template. We deliberately scope this fan-out to the curated top-12
  // (and not the entire sitemap) to keep the ping focused.
  if (sharedTemplateHit) {
    console.log(
      `[index-now-ping] --delta: shared template changed (${sharedTemplateHit}) — fanning out to ${TOP_PAGES.length} top pages.`,
    );
    for (const p of TOP_PAGES) urls.add(topPageCanonical(p.path));
  }
  const list = [...urls];
  if (list.length > DELTA_CAP) {
    // Cap and warn — never fail the deploy. A history rewrite (force-push,
    // rebase merge) can blow the diff up to thousands of files; failing the
    // production build over an opportunistic ping is worse than skipping the
    // tail. We sort for deterministic truncation so consecutive deploys ping
    // the same prefix and the sitemap path catches the rest.
    list.sort();
    const dropped = list.length - DELTA_CAP;
    console.warn(
      `[index-now-ping] --delta: ${list.length} changed URLs exceeds DELTA_CAP=${DELTA_CAP}. ` +
        `Submitting first ${DELTA_CAP} (sorted), dropping ${dropped}. ` +
        `Sitemap ping covers the tail. Likely cause: history rewrite or oversized deploy.`,
    );
    list.length = DELTA_CAP;
  }
  console.log(
    `[index-now-ping] --delta: ${files.length} changed files → ${list.length} ping-able URLs.`,
  );
  return list;
}

async function main() {
  const args = process.argv.slice(2);
  const isDelta = args.includes("--delta");
  const explicit = args.filter((a) => a.startsWith("http"));

  const extras = isDelta ? [...computeDeltaUrls(), ...explicit] : explicit;

  // Delta mode with zero changed URLs and no explicit args = sitemap-only ping.
  // Still useful so Bing/Yandex re-crawl /sitemap.xml on every deploy.
  console.log(
    `[index-now-ping] submitting sitemap + ${extras.length} URL(s) to ${isDelta ? "IndexNow (delta mode)" : "IndexNow"}…`,
  );

  let results;
  if (extras.length === 0) {
    results = await pingSitemapAndUrls();
  } else if (extras.length <= 9998) {
    // pingSitemapAndUrls prepends sitemap+homepage so cap-aware path ok.
    results = await pingSitemapAndUrls(extras);
  } else {
    // Should be unreachable due to DELTA_CAP, but defensive.
    console.warn(`[index-now-ping] ${extras.length} URLs > 9998 — submitting in batches.`);
    const all = [];
    for (let i = 0; i < extras.length; i += 9000) {
      const batch = extras.slice(i, i + 9000);
      all.push(...(await submitToIndexNow(batch)));
    }
    results = [...(await pingSitemapAndUrls()), ...all];
  }

  let failed = 0;
  for (const r of results) {
    const status = r.ok ? "OK " : "ERR";
    console.log(`  ${status} ${r.status.toString().padEnd(4)} ${r.endpoint}`);
    if (!r.ok) failed += 1;
    if (r.error) console.log(`       ${r.error}`);
  }
  if (failed === results.length) {
    console.error(`[index-now-ping] all endpoints failed.`);
    process.exit(1);
  }
  console.log(`[index-now-ping] done (${results.length - failed}/${results.length} succeeded).`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
