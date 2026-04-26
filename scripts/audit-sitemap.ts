/* eslint-disable no-console */
/**
 * Sitemap honesty regression audit.
 *
 * The spam-tell we're catching: every URL in a sitemap emitting TODAY's
 * date as its `lastmod`, which is what `TODAY = new Date()` produced
 * before Task #89 replaced it with `lastmodForPath()`.
 *
 * A legitimate bulk-commit (e.g. all 30 location pages shipped together
 * on 2026-04-21) will also see every URL share one date, but that date
 * will be HISTORICAL — not today. The audit therefore fails ONLY when
 * the dominant date is today exactly (UTC). Yesterday is treated as
 * legitimate history; if a deploy happens within hours of the dev session
 * that committed the content, the commit date will rotate to "yesterday"
 * by deploy time anyway.
 *
 * Two execution modes:
 *   - Static (default): imports each sitemap route's GET handler directly
 *     and invokes it. No server required. This is what the Vercel build
 *     gate runs.
 *   - HTTP (`--http`): hits the dev server at $BASE. Used by `gate:full`
 *     for an end-to-end smoke test against the running app.
 *
 * Sitemaps with fewer than MIN_URLS_FOR_AUDIT URLs are exempt
 * (statistically meaningless).
 *
 * Usage:
 *   npx tsx scripts/audit-sitemap.ts                 # static
 *   BASE=http://localhost:5000 npx tsx scripts/audit-sitemap.ts --http
 *
 * Exits non-zero on failure.
 */

const BASE = process.env.BASE ?? "http://localhost:5000";
// Per task #89 spec: ">50% of URLs sharing today's date" is the spam tell.
// We FAIL only when the dominant date is today AND it covers >MAX_DOMINANT_PCT
// of URLs. Historical bulk-commit days (e.g. 100% of /malta on 2026-04-25)
// pass cleanly because the date is not today.
const MAX_DOMINANT_PCT = 50;
const MIN_URLS_FOR_AUDIT = 5;

const TODAY_UTC = new Date().toISOString().slice(0, 10);
const TODAY_DATES = new Set([TODAY_UTC]);

const MODE: "static" | "http" = process.argv.includes("--http") ? "http" : "static";

const SITEMAPS = [
  "sitemap.xml",            // index: must show varied dates across children
  "sitemap-core.xml",
  "sitemap-services.xml",
  "sitemap-malta.xml",
  "sitemap-industries.xml",
  "sitemap-case-studies.xml",
  "sitemap-aeo.xml",
  "sitemap-blog.xml",
  "image-sitemap.xml",
];

interface Result {
  name: string;
  total: number;
  uniqueDates: number;
  dominantDate: string | null;
  dominantPct: number;
  status: "PASS" | "FAIL" | "SKIP";
  reason?: string;
}

async function fetchSitemapHttp(name: string): Promise<string> {
  const url = `${BASE}/${name}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url} → HTTP ${res.status}`);
  return res.text();
}

// Static-mode getter map. Each entry is a thunk returning the route's
// Response so we can import handlers lazily and skip ones we don't need.
type RouteGetter = () => Promise<Response>;
const STATIC_GETTERS: Record<string, () => Promise<RouteGetter>> = {
  "sitemap.xml": async () => (await import("../app/sitemap.xml/route")).GET,
  "sitemap-core.xml": async () => (await import("../app/sitemap-core.xml/route")).GET,
  "sitemap-services.xml": async () => (await import("../app/sitemap-services.xml/route")).GET,
  "sitemap-malta.xml": async () => (await import("../app/sitemap-malta.xml/route")).GET,
  "sitemap-industries.xml": async () => (await import("../app/sitemap-industries.xml/route")).GET,
  "sitemap-case-studies.xml": async () => (await import("../app/sitemap-case-studies.xml/route")).GET,
  "sitemap-aeo.xml": async () => (await import("../app/sitemap-aeo.xml/route")).GET,
  "sitemap-blog.xml": async () => (await import("../app/sitemap-blog.xml/route")).GET,
  "image-sitemap.xml": async () => (await import("../app/image-sitemap.xml/route")).GET,
};

async function fetchSitemapStatic(name: string): Promise<string> {
  const loader = STATIC_GETTERS[name];
  if (!loader) throw new Error(`no static getter registered for ${name}`);
  const get = await loader();
  const res = await get();
  return res.text();
}

function extractLastmods(xml: string): string[] {
  const matches = [...xml.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)];
  return matches.map((m) => m[1].trim().slice(0, 10));
}

function audit(name: string, lastmods: string[]): Result {
  const total = lastmods.length;
  if (total === 0) {
    return { name, total: 0, uniqueDates: 0, dominantDate: null, dominantPct: 0, status: "SKIP", reason: "no <lastmod> tags" };
  }
  if (total < MIN_URLS_FOR_AUDIT) {
    return { name, total, uniqueDates: new Set(lastmods).size, dominantDate: null, dominantPct: 0, status: "SKIP", reason: `< ${MIN_URLS_FOR_AUDIT} URLs` };
  }
  const counts = new Map<string, number>();
  for (const d of lastmods) counts.set(d, (counts.get(d) ?? 0) + 1);
  let dominantDate = "";
  let dominantCount = 0;
  for (const [d, c] of counts) {
    if (c > dominantCount) {
      dominantCount = c;
      dominantDate = d;
    }
  }
  const dominantPct = (dominantCount / total) * 100;
  const overThreshold = dominantPct > MAX_DOMINANT_PCT;
  const dominantIsToday = TODAY_DATES.has(dominantDate);
  const status: Result["status"] = overThreshold && dominantIsToday ? "FAIL" : "PASS";
  return {
    name,
    total,
    uniqueDates: counts.size,
    dominantDate,
    dominantPct,
    status,
    reason:
      status === "FAIL"
        ? `${dominantCount}/${total} URLs share ${dominantDate} (today, ${dominantPct.toFixed(1)}%) — TODAY-regression detected`
        : undefined,
  };
}

/**
 * Index ↔ children parity audit.
 *
 * Architecturally this can't drift — `getSitemapLastmod()` calls each
 * child's exact `buildEntries()` and returns max(entry.lastmod), so the
 * index date IS the children's max by construction. This regression test
 * exists anyway as a guard-rail: if a future refactor splits the data
 * source between index and child (the exact bug class architect rejected
 * the previous round on), parity will still be checked at CI time.
 *
 * Reads the index sitemap.xml's <sitemap><loc>…</loc><lastmod>…</lastmod>
 * pairs, parses each child's actual <lastmod> values, and asserts:
 *   index_lastmod_for(child) === max(child.urls[].lastmod)
 */
function extractIndexEntries(xml: string): { name: string; lastmod: string }[] {
  const entries: { name: string; lastmod: string }[] = [];
  const blocks = xml.matchAll(/<sitemap>([\s\S]*?)<\/sitemap>/g);
  for (const b of blocks) {
    const inner = b[1];
    const loc = /<loc>([^<]+)<\/loc>/.exec(inner)?.[1]?.trim() ?? "";
    const lm = /<lastmod>([^<]+)<\/lastmod>/.exec(inner)?.[1]?.trim().slice(0, 10) ?? "";
    if (loc && lm) {
      const name = loc.split("/").pop() ?? loc;
      entries.push({ name, lastmod: lm });
    }
  }
  return entries;
}

interface ParityResult {
  child: string;
  indexLastmod: string;
  childMaxLastmod: string;
  status: "PASS" | "FAIL" | "SKIP";
  reason?: string;
}

async function auditIndexParity(
  fetchSitemap: (name: string) => Promise<string>,
): Promise<ParityResult[]> {
  let indexXml: string;
  try {
    indexXml = await fetchSitemap("sitemap.xml");
  } catch (e) {
    const err = e instanceof Error ? e.message : String(e);
    return [
      {
        child: "(index)",
        indexLastmod: "",
        childMaxLastmod: "",
        status: "FAIL",
        reason: `failed to load sitemap.xml: ${err}`,
      },
    ];
  }
  const indexEntries = extractIndexEntries(indexXml);
  const results: ParityResult[] = [];
  for (const { name, lastmod: indexLm } of indexEntries) {
    try {
      const childXml = await fetchSitemap(name);
      const childLms = extractLastmods(childXml);
      if (childLms.length === 0) {
        results.push({
          child: name,
          indexLastmod: indexLm,
          childMaxLastmod: "",
          status: "SKIP",
          reason: "child has no <lastmod> tags",
        });
        continue;
      }
      const childMax = childLms.reduce((m, d) => (d > m ? d : m), "");
      const ok = indexLm === childMax;
      results.push({
        child: name,
        indexLastmod: indexLm,
        childMaxLastmod: childMax,
        status: ok ? "PASS" : "FAIL",
        reason: ok
          ? undefined
          : `index says ${indexLm}, child max is ${childMax} — drift detected`,
      });
    } catch (e) {
      const err = e instanceof Error ? e.message : String(e);
      results.push({
        child: name,
        indexLastmod: indexLm,
        childMaxLastmod: "",
        status: "FAIL",
        reason: `failed to load child: ${err}`,
      });
    }
  }
  return results;
}

async function main() {
  const tag = MODE === "http" ? `mode=http BASE=${BASE}` : "mode=static";
  console.log(`audit-sitemap: ${tag} threshold=${MAX_DOMINANT_PCT}%`);

  const fetchSitemap = MODE === "http" ? fetchSitemapHttp : fetchSitemapStatic;

  const results: Result[] = [];
  for (const name of SITEMAPS) {
    try {
      const xml = await fetchSitemap(name);
      const lastmods = extractLastmods(xml);
      results.push(audit(name, lastmods));
    } catch (e) {
      const err = e instanceof Error ? e.message : String(e);
      results.push({ name, total: 0, uniqueDates: 0, dominantDate: null, dominantPct: 0, status: "FAIL", reason: `load failed: ${err}` });
    }
  }

  let failed = 0;
  for (const r of results) {
    const label = r.status === "PASS" ? "  PASS" : r.status === "SKIP" ? "  SKIP" : "  FAIL";
    const detail =
      r.status === "SKIP"
        ? r.reason ?? ""
        : r.status === "PASS"
        ? `${r.total} URLs, ${r.uniqueDates} unique dates, dominant ${r.dominantDate} ${r.dominantPct.toFixed(1)}%`
        : r.reason ?? "";
    console.log(`${label}  ${r.name.padEnd(28)} ${detail}`);
    if (r.status === "FAIL") failed++;
  }

  console.log(`\naudit-sitemap: ${results.length - failed}/${results.length} sitemaps clean (TODAY-regression check)`);

  console.log(`\naudit-sitemap: index ↔ children parity check`);
  const parity = await auditIndexParity(fetchSitemap);
  let parityFailed = 0;
  for (const p of parity) {
    const label = p.status === "PASS" ? "  PASS" : p.status === "SKIP" ? "  SKIP" : "  FAIL";
    const detail =
      p.status === "SKIP"
        ? p.reason ?? ""
        : p.status === "PASS"
        ? `index=${p.indexLastmod} == max(child)=${p.childMaxLastmod}`
        : p.reason ?? "";
    console.log(`${label}  ${p.child.padEnd(28)} ${detail}`);
    if (p.status === "FAIL") parityFailed++;
  }
  console.log(
    `\naudit-sitemap: ${parity.length - parityFailed}/${parity.length} children agree with index (parity)`,
  );

  const total = failed + parityFailed;
  if (total > 0) {
    console.error(
      `audit-sitemap: ${failed} TODAY-regression failure(s), ${parityFailed} parity failure(s)`,
    );
    process.exit(1);
  }
}

main().catch((e) => {
  console.error("audit-sitemap fatal:", e);
  process.exit(2);
});
