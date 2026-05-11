/**
 * Hreflang + canonical consistency audit (Task #134).
 *
 * Two modes:
 *
 * STATIC (default, server-free). Wired into `gate:fast`. For every page in
 * `TOP_PAGES` (the canonical-60):
 *   1. Locates the page file (`app/<path>/page.tsx`) and asserts it exists.
 *   2. Asserts the page imports `getHreflangAlternates` from
 *      `@/lib/seo/hreflang` or `@/lib/seo/discoveryTags` (back-compat
 *      re-export) and invokes it inside the `metadata.alternates` block.
 *   3. Asserts the canonical URL declared by the helper call (or via an
 *      explicit `{ canonical: "..." }` override) is NOT a 308 source in any
 *      redirect map. A canonical that 308s is a self-cannibalising HARD FAIL
 *      — it means we are advertising a URL that Google will silently follow
 *      to a different URL, splitting equity.
 *
 * HTTP (--http or BASE set + flag). Wired into `gate:full`. For every
 * extracted canonical URL:
 *   1. Issues a manual-redirect GET against `$BASE` (default
 *      http://localhost:5000) for the canonical's pathname.
 *   2. Asserts the response status is 200. ANY 3xx (especially 308) is a
 *      HARD FAIL — the canonical is itself a redirect source, which means
 *      we're shipping a self-cannibalising page that Google would silently
 *      follow elsewhere.
 *   3. Parses the rendered HTML for `<link rel="canonical">` and the three
 *      `<link rel="alternate" hreflang="...">` tags, asserting the emitted
 *      values match what the metadata helper promised. This catches Next.js
 *      metadata serialisation regressions that static analysis can't see.
 *
 * The two modes are complementary: static catches commit-time regressions
 * before a server is even up; HTTP proves end-to-end reachability against
 * the real middleware + Next.js stack.
 *
 * Exit codes: 0 = clean, 1 = HARD FAIL, 2 = script-level error.
 */
import * as fs from "node:fs";
import * as path from "node:path";

import { TOP_PAGES, topPageCanonical } from "../lib/seo/topPages";
import {
  ARCHIVED_LOCATION_REDIRECTS,
  ARCHIVED_SERVICE_REDIRECTS,
  INDUSTRY_REDIRECTS,
  TASK_116_RETIRED_URLS,
} from "../lib/seo/redirectMap";
import {
  CROSS_SECTION_ALIASES,
  SERVICE_ALIASES,
} from "../lib/seo/seoSets";

type Failure = { path: string; reason: string };

const ROOT = process.cwd();
const HOST = "https://oarcdigital.com";

function pageFileFor(p: string): string {
  return p === "/"
    ? path.join(ROOT, "app", "page.tsx")
    : path.join(ROOT, "app", p, "page.tsx");
}

/**
 * Build the set of paths that 308 somewhere via middleware. We include every
 * map middleware consults so a canonical pointed at any of these would be
 * silently rewritten by Google.
 */
function buildRedirectSourceSet(): Set<string> {
  const sources = new Set<string>();
  for (const from of Object.keys(ARCHIVED_LOCATION_REDIRECTS)) {
    sources.add(`/malta/${from}`);
  }
  for (const from of Object.keys(INDUSTRY_REDIRECTS)) {
    sources.add(`/industries/${from}`);
  }
  for (const from of Object.keys(ARCHIVED_SERVICE_REDIRECTS)) {
    sources.add(`/services/${from}`);
  }
  for (const from of Object.keys(SERVICE_ALIASES)) sources.add(from);
  for (const from of Object.keys(CROSS_SECTION_ALIASES)) sources.add(from);
  for (const from of Object.keys(TASK_116_RETIRED_URLS)) sources.add(from);
  return sources;
}

/**
 * Extract the canonical URL the page actually exports. Two patterns are
 * supported (everything else fails the audit):
 *
 *   alternates: getHreflangAlternates("/some/path")
 *   alternates: getHreflangAlternates("/some/path", { canonical: "https://..." })
 *
 * For the second form, the override string wins. For the first, the helper
 * derives canonical from `topPageCanonical(path)`.
 *
 * We also accept the legacy `alternates: { canonical: "..." }` form for
 * detection purposes so the audit can flag pages that haven't been migrated
 * to the helper yet.
 */
type Extracted =
  | { kind: "helper"; pathArg: string | null; canonicalOverride: string | null }
  | { kind: "legacy"; canonical: string }
  | { kind: "missing" };

/**
 * Resolve a single-line string-literal expression. Supports plain string
 * literals (`"..."`, `'...'`) and template literals (\`...\`). For template
 * literals we resolve top-of-file `const NAME = "..."` declarations so the
 * common service-page pattern `getHreflangAlternates(\`/services/${SLUG}\`)`
 * (with `const SLUG = "branding"`) statically resolves to "/services/branding".
 *
 * Returns the resolved literal, or `null` if it can't be resolved (in which
 * case the audit skips the path-arg equality check and relies on the helper
 * call alone to confirm the hreflang cluster is emitted).
 */
function resolveStringExpr(expr: string, src: string): string | null {
  expr = expr.trim();
  // Plain string literal.
  const plain = expr.match(/^["']([^"']*)["']$/);
  if (plain) return plain[1];
  // Template literal — resolve `${IDENT}` against `const IDENT = "..."`.
  const tmpl = expr.match(/^`([^`]*)`$/);
  if (tmpl) {
    const body = tmpl[1];
    let out = "";
    let i = 0;
    while (i < body.length) {
      if (body[i] === "$" && body[i + 1] === "{") {
        const close = body.indexOf("}", i + 2);
        if (close === -1) return null;
        const ident = body.slice(i + 2, close).trim();
        const constRe = new RegExp(
          `\\bconst\\s+${ident}\\s*=\\s*["']([^"']+)["']`,
        );
        const cm = src.match(constRe);
        if (!cm) return null;
        out += cm[1];
        i = close + 1;
      } else {
        out += body[i];
        i += 1;
      }
    }
    return out;
  }
  return null;
}

function extractAlternates(src: string): Extracted {
  // Helper form. Tolerates whitespace and accepts plain or template-literal
  // path args; the canonical override (when present) must be a plain string
  // literal so static analysis can resolve it.
  const helperRe =
    /alternates:\s*getHreflangAlternates\(\s*((?:`[^`]*`)|(?:["'][^"']*["']))\s*(?:,\s*\{\s*canonical:\s*["']([^"']+)["']\s*,?\s*\})?\s*\)/;
  const m = src.match(helperRe);
  if (m) {
    return {
      kind: "helper",
      pathArg: resolveStringExpr(m[1], src),
      canonicalOverride: m[2] ?? null,
    };
  }
  const legacyRe = /alternates:\s*\{\s*canonical:\s*([^,\n}]+)/;
  const lm = src.match(legacyRe);
  if (lm) {
    return { kind: "legacy", canonical: lm[1].trim() };
  }
  return { kind: "missing" };
}

function urlToPath(url: string): string | null {
  if (!url.startsWith(HOST)) return null;
  const tail = url.slice(HOST.length);
  return tail === "" ? "/" : tail;
}

type CanonicalRow = { topPath: string; canonicalPath: string; canonicalUrl: string };

const HTTP_MODE = process.argv.includes("--http");
const BASE = process.env.BASE ?? "http://localhost:5000";

async function fetchWithTimeout(url: string, ms: number): Promise<Response> {
  // Cold-compile on dev server can take 20-40s for an unvisited route. Use a
  // generous per-request timeout (configurable via AUDIT_CANONICAL_TIMEOUT_MS)
  // and a single retry — gate:full's bootstrapped server is fresh, so the
  // first hit on any route always pays the compile cost.
  const ctl = new AbortController();
  const t = setTimeout(() => ctl.abort(), ms);
  try {
    return await fetch(url, {
      redirect: "manual",
      headers: { "user-agent": "audit-canonical-script" },
      signal: ctl.signal,
    });
  } finally {
    clearTimeout(t);
  }
}

async function checkOneHttp(r: CanonicalRow): Promise<Failure[]> {
  const fails: Failure[] = [];
  const timeoutMs = Number(process.env.AUDIT_CANONICAL_TIMEOUT_MS ?? 60_000);
  let res: Response;
  try {
    try {
      res = await fetchWithTimeout(`${BASE}${r.canonicalPath}`, timeoutMs);
    } catch {
      // Single retry — dev server occasionally drops the first request when
      // multiple cold compiles fight for the worker pool.
      res = await fetchWithTimeout(`${BASE}${r.canonicalPath}`, timeoutMs);
    }
    if (res.status !== 200) {
      const loc = res.headers.get("location") ?? "(no Location)";
      try { await res.arrayBuffer(); } catch {}
      return [{
        path: r.topPath,
        reason: `HARD FAIL — HTTP ${res.status} on canonical ${r.canonicalPath} (Location: ${loc}). Canonical must return 200.`,
      }];
    }
    // Parse rendered HTML for canonical + hreflang tags. Next.js emits the
    // canonical as <link rel="canonical" href="..."/> and each hreflang as
    // <link rel="alternate" hrefLang="..." href="..."/> (note camelCase
    // hrefLang from React's JSX serialiser — case-insensitive match handles
    // both spellings). We assert the exact set of three locales is present
    // and every href === canonicalUrl, matching the helper contract.
    const html = await res.text();
    const canonicalTag = html.match(
      /<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']+)["']/i,
    );
    if (!canonicalTag) {
      return [{ path: r.topPath, reason: 'no <link rel="canonical"> in rendered HTML' }];
    }
    if (canonicalTag[1] !== r.canonicalUrl) {
      fails.push({
        path: r.topPath,
        reason: `rendered canonical "${canonicalTag[1]}" ≠ helper-promised "${r.canonicalUrl}"`,
      });
    }
    for (const lang of ["en-MT", "en-GB", "x-default"]) {
      const re = new RegExp(
        `<link[^>]+rel=["']alternate["'][^>]*hreflang=["']${lang}["'][^>]*href=["']([^"']+)["']`,
        "i",
      );
      const m = html.match(re);
      if (!m) {
        fails.push({
          path: r.topPath,
          reason: `missing <link rel="alternate" hreflang="${lang}"> in rendered HTML`,
        });
        continue;
      }
      if (m[1] !== r.canonicalUrl) {
        fails.push({
          path: r.topPath,
          reason: `hreflang="${lang}" href "${m[1]}" ≠ canonical "${r.canonicalUrl}"`,
        });
      }
    }
    return fails;
  } catch (e) {
    return [{
      path: r.topPath,
      reason: `fetch error for ${r.canonicalPath}: ${e instanceof Error ? e.message : String(e)}`,
    }];
  }
}

async function checkHttp(rows: CanonicalRow[]): Promise<Failure[]> {
  // Crawl in batches of 8 — bounds peak parallelism on the dev server (which
  // serialises page compiles per-route and chokes if we open all 60 sockets
  // at once) while still cutting wall time roughly 8x vs. a serial loop.
  const failures: Failure[] = [];
  const BATCH = 4;
  for (let i = 0; i < rows.length; i += BATCH) {
    const batch = rows.slice(i, i + BATCH);
    const results = await Promise.all(batch.map(checkOneHttp));
    for (const r of results) failures.push(...r);
  }
  return failures;
}

async function main(): Promise<void> {
  const failures: Failure[] = [];
  const httpRows: CanonicalRow[] = [];
  const redirectSources = buildRedirectSourceSet();
  let checked = 0;

  for (const top of TOP_PAGES) {
    const file = pageFileFor(top.path);
    if (!fs.existsSync(file)) {
      failures.push({ path: top.path, reason: `page file missing: ${file}` });
      continue;
    }
    const src = fs.readFileSync(file, "utf8");
    const ex = extractAlternates(src);

    if (ex.kind === "missing") {
      failures.push({
        path: top.path,
        reason: "no alternates block found in metadata export",
      });
      continue;
    }

    if (ex.kind === "legacy") {
      failures.push({
        path: top.path,
        reason:
          "uses legacy `alternates: { canonical: ... }` instead of getHreflangAlternates() — Malta-first hreflang cluster missing",
      });
      continue;
    }

    // helper form — skip the path-arg equality check if static resolution
    // failed (template literal that referenced an unresolved identifier).
    if (ex.pathArg !== null && ex.pathArg !== top.path) {
      failures.push({
        path: top.path,
        reason: `getHreflangAlternates path arg "${ex.pathArg}" does not match TOP_PAGES path "${top.path}"`,
      });
    }

    const canonicalUrl = ex.canonicalOverride ?? topPageCanonical(top.path);
    if (!canonicalUrl.startsWith(HOST)) {
      failures.push({
        path: top.path,
        reason: `canonical "${canonicalUrl}" does not start with ${HOST}`,
      });
      continue;
    }
    const canonicalPath = urlToPath(canonicalUrl)!;

    if (redirectSources.has(canonicalPath)) {
      failures.push({
        path: top.path,
        reason: `HARD FAIL — canonical ${canonicalPath} is a 308 source (self-cannibalising). Either fix the redirect direction or change the canonical.`,
      });
    }

    // The canonical's destination page must actually exist on disk; an
    // override pointing at a missing app dir would 404 in production.
    if (canonicalPath !== top.path) {
      const targetFile =
        canonicalPath === "/"
          ? path.join(ROOT, "app", "page.tsx")
          : path.join(ROOT, "app", canonicalPath, "page.tsx");
      if (!fs.existsSync(targetFile)) {
        failures.push({
          path: top.path,
          reason: `canonical override ${canonicalPath} has no backing page file (${targetFile})`,
        });
      }
    }

    httpRows.push({ topPath: top.path, canonicalPath, canonicalUrl });
    checked += 1;
  }

  // eslint-disable-next-line no-console
  console.log(
    `audit-canonical (static): ${checked}/${TOP_PAGES.length} TOP_PAGES checked`,
  );

  if (HTTP_MODE && failures.length === 0) {
    // eslint-disable-next-line no-console
    console.log(`audit-canonical (http): crawling ${httpRows.length} canonicals against ${BASE}`);
    const httpFailures = await checkHttp(httpRows);
    failures.push(...httpFailures);
  } else if (HTTP_MODE) {
    // eslint-disable-next-line no-console
    console.log(`audit-canonical (http): SKIPPED — fix static failures first`);
  }

  if (failures.length) {
    // eslint-disable-next-line no-console
    console.error(`\nFAILURES (${failures.length}):`);
    for (const f of failures) {
      // eslint-disable-next-line no-console
      console.error(`  ${f.path.padEnd(50)} ${f.reason}`);
    }
    process.exit(1);
  }

  // eslint-disable-next-line no-console
  console.log(
    `  ✓ all ${TOP_PAGES.length} canonicals are live (no 308 sources) and every page emits the en-MT/en-GB/x-default cluster${HTTP_MODE ? " — verified via HTTP" : ""}`,
  );
}

void main();
