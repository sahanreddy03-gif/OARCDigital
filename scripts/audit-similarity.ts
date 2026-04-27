/* eslint-disable no-console */
// Cross-page similarity audit. Walks the live sitemap, fetches each
// page's SSR HTML, extracts visible body text (excluding head, script,
// style, noscript, JSON-LD, and any element wrapped in
// `data-similarity-ignore`), tokenises the text into 5-word shingles,
// and computes pairwise Jaccard similarity across every URL pair.
//
// Pairs above the threshold (default 0.70 — the textbook Google
// duplicate-content trigger) FAIL the audit. Top-N most-similar pairs
// are printed regardless so the calibrated threshold is auditable.
//
// Why SSR HTML rather than JSX source: shared component libraries
// inflate similarity at the source level. Comparing rendered HTML
// matches what Google sees.
//
// Why `data-similarity-ignore`: the Malta-context block (Task #88) and
// the TrustBlock NAP variants (Task #90) are structurally similar
// across the site by design, and each is independently gated by its
// own audit. Comparing them again here is noise.
//
// Coverage modes (resolved in this order):
//   1. AUDIT_FULL=1       — walks every URL in the sitemap (gate-safe).
//   2. --sample=N         — walks N URLs (manual calibration).
//   3. SAMPLE_CAP default — walks 50 URLs (inner-loop iteration).
//
// Direct invocation defaults to sampled mode so a developer running the
// script ad-hoc on a freshly-booted dev server doesn't pay the
// full-walk cold-compile cost. The SEO gate (`scripts/seo-gate.sh →
// gate:full`) explicitly sets AUDIT_FULL=1 so release gating ALWAYS
// runs every-route-pair coverage. Sampled-mode runs print a stderr
// warning naming the AUDIT_FULL=1 flag so the trade-off is obvious.
//
// Usage:
//   BASE=http://localhost:5000 npx tsx scripts/audit-similarity.ts
//   BASE=http://localhost:5000 AUDIT_FULL=1 npx tsx scripts/audit-similarity.ts
//   BASE=http://localhost:5000 npx tsx scripts/audit-similarity.ts --sample=120
//   BASE=http://localhost:5000 npx tsx scripts/audit-similarity.ts --threshold=0.85
//   BASE=http://localhost:5000 npx tsx scripts/audit-similarity.ts --top=100 --json

import { walkSitemap } from "../lib/seo/sitemapWalker";

const BASE = (process.env.BASE ?? "http://localhost:5000").replace(/\/$/, "");
const FULL_WALK = process.env.AUDIT_FULL === "1";
// Default sample size when not in FULL mode. Sized to finish under the
// 110s gate budget on a freshly-booted dev server (every cold-compile
// adds 5-10s per page). Override with `--sample=N` or set AUDIT_FULL=1
// to walk every URL.
const SAMPLE_CAP = 50;
const SHINGLE_SIZE = 5;
// Higher concurrency does NOT speed up cold compiles (Next.js compiles
// pages on-demand serially) and aggressive parallelism can OOM the dev
// server on a Replit container. Keep at 4 for the dev path; set
// AUDIT_CONCURRENCY env to override for `next start` runs.
const FETCH_CONCURRENCY = Number(process.env.AUDIT_CONCURRENCY ?? 4);
const PER_FETCH_TIMEOUT_MS = 30_000;

type Args = { threshold: number; top: number; json: boolean; sample: number | null };
function parseArgs(): Args {
  const args = process.argv.slice(2);
  let threshold = 0.7;
  let top = 50;
  let json = false;
  let sample: number | null = null;
  for (const a of args) {
    if (a.startsWith("--threshold=")) threshold = Number(a.slice("--threshold=".length));
    else if (a.startsWith("--top=")) top = Number(a.slice("--top=".length));
    else if (a.startsWith("--sample=")) sample = Number(a.slice("--sample=".length));
    else if (a === "--json") json = true;
  }
  if (!Number.isFinite(threshold) || threshold <= 0 || threshold > 1) {
    throw new Error(`invalid --threshold: ${threshold}`);
  }
  if (!Number.isFinite(top) || top <= 0) {
    throw new Error(`invalid --top: ${top}`);
  }
  if (sample !== null && (!Number.isFinite(sample) || sample <= 0)) {
    throw new Error(`invalid --sample: ${sample}`);
  }
  return { threshold, top, json, sample };
}

async function fetchHtml(url: string): Promise<string | null> {
  const ac = new AbortController();
  const t = setTimeout(() => ac.abort(), PER_FETCH_TIMEOUT_MS);
  try {
    const r = await fetch(url, { redirect: "follow", signal: ac.signal });
    if (!r.ok) return null;
    return await r.text();
  } catch {
    return null;
  } finally {
    clearTimeout(t);
  }
}

// Strip a balanced element with the given opening match. Walks forward
// counting opens/closes of the same tag name so nested elements are
// handled. Operates on the cursor returned by the regex match.
function stripBalancedElement(html: string, openIdx: number, tag: string): string {
  // Find the end of the opening tag (first '>' that isn't inside an attribute
  // value). Simple scan tolerating quoted attributes.
  let i = openIdx;
  let inSingle = false;
  let inDouble = false;
  while (i < html.length) {
    const ch = html[i];
    if (inSingle) {
      if (ch === "'") inSingle = false;
    } else if (inDouble) {
      if (ch === '"') inDouble = false;
    } else if (ch === "'") {
      inSingle = true;
    } else if (ch === '"') {
      inDouble = true;
    } else if (ch === ">") {
      i++;
      break;
    }
    i++;
  }
  const openEnd = i;
  // Self-closing? Then just remove the opening tag.
  if (html.slice(openEnd - 2, openEnd) === "/>") {
    return html.slice(0, openIdx) + html.slice(openEnd);
  }
  // Walk forward counting nested opens/closes of the same tag.
  const openRe = new RegExp(`<${tag}\\b`, "gi");
  const closeRe = new RegExp(`</${tag}\\s*>`, "gi");
  let depth = 1;
  let cursor = openEnd;
  while (depth > 0 && cursor < html.length) {
    openRe.lastIndex = cursor;
    closeRe.lastIndex = cursor;
    const nextOpen = openRe.exec(html);
    const nextClose = closeRe.exec(html);
    if (!nextClose) break; // malformed — bail
    if (nextOpen && nextOpen.index < nextClose.index) {
      depth++;
      cursor = nextOpen.index + nextOpen[0].length;
    } else {
      depth--;
      cursor = nextClose.index + nextClose[0].length;
      if (depth === 0) {
        return html.slice(0, openIdx) + html.slice(cursor);
      }
    }
  }
  // Fall back to dropping just the opening tag if the close was missing.
  return html.slice(0, openIdx) + html.slice(openEnd);
}

// Strip every balanced occurrence of the given tag (with optional attribute
// gate). `attrGate` is a regex applied to the opening tag string; if it does
// not match, the element is left in place.
function stripAllBalanced(html: string, tag: string, attrGate?: RegExp): string {
  let out = html;
  // Repeatedly scan from the start until no more matches — necessary
  // because each strip changes the indices.
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const re = new RegExp(`<${tag}\\b([^>]*)>`, "i");
    const m = re.exec(out);
    if (!m) break;
    if (attrGate && !attrGate.test(m[0])) {
      // No attribute match — strip just this single open/close pair and continue
      // beyond it WITHOUT removing it. To avoid infinite loop we mark a sentinel:
      // replace the angle bracket with a placeholder, then restore at the end.
      // Simpler: bail out to prevent looping; this attribute-gated path is
      // only used for `data-similarity-ignore` which always matches when the
      // regex is present.
      break;
    }
    out = stripBalancedElement(out, m.index, tag);
  }
  return out;
}

function extractVisibleText(html: string): string {
  let s = html;
  // Drop entire <head>...</head> first — fastest reduction.
  s = stripAllBalanced(s, "head");
  // Drop <script>, <style>, <noscript> — content the user never reads.
  s = stripAllBalanced(s, "script");
  s = stripAllBalanced(s, "style");
  s = stripAllBalanced(s, "noscript");
  // Drop any element wrapped in data-similarity-ignore, regardless of tag.
  // Find each `<TAG ... data-similarity-ignore ...>` opening and strip it
  // balanced. Loop until none remain.
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const m = /<([a-zA-Z][a-zA-Z0-9]*)\b[^>]*\bdata-similarity-ignore(?:=("[^"]*"|'[^']*'|true|""|''))?[^>]*>/i.exec(s);
    if (!m) break;
    s = stripBalancedElement(s, m.index, m[1]);
  }
  // Drop HTML comments (incl. AUTOGEN markers and Next.js streaming markers).
  s = s.replace(/<!--[\s\S]*?-->/g, " ");
  // Strip remaining tags.
  s = s.replace(/<[^>]+>/g, " ");
  // Decode the small set of entities likely in body text.
  s = s
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(parseInt(dec, 10)));
  // Collapse whitespace.
  return s.replace(/\s+/g, " ").trim();
}

function tokenise(text: string): string[] {
  // Lowercase, keep alphanumeric tokens, split on the rest.
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]+/g, " ")
    .split(/\s+/)
    .filter((w) => w.length >= 2);
}

function shingles(words: string[], k: number): Set<string> {
  if (words.length < k) return new Set();
  const out = new Set<string>();
  for (let i = 0; i <= words.length - k; i++) {
    out.add(words.slice(i, i + k).join(" "));
  }
  return out;
}

function jaccard(a: Set<string>, b: Set<string>): number {
  if (a.size === 0 || b.size === 0) return 0;
  let inter = 0;
  const [small, big] = a.size < b.size ? [a, b] : [b, a];
  for (const v of small) if (big.has(v)) inter++;
  const union = a.size + b.size - inter;
  return union === 0 ? 0 : inter / union;
}

async function fetchAll(paths: string[]): Promise<Map<string, Set<string>>> {
  const out = new Map<string, Set<string>>();
  let cursor = 0;
  let done = 0;
  async function worker() {
    while (cursor < paths.length) {
      const i = cursor++;
      const p = paths[i];
      const url = `${BASE}${p}`;
      const html = await fetchHtml(url);
      done++;
      if (done % 25 === 0 || done === paths.length) {
        process.stderr.write(`audit-similarity: fetched ${done}/${paths.length}\n`);
      }
      if (!html) continue;
      const text = extractVisibleText(html);
      const words = tokenise(text);
      const sh = shingles(words, SHINGLE_SIZE);
      if (sh.size >= 20) out.set(p, sh); // pages with too few shingles are noise
    }
  }
  await Promise.all(Array.from({ length: FETCH_CONCURRENCY }, () => worker()));
  return out;
}

type Pair = { a: string; b: string; score: number; aSize: number; bSize: number };

function topPairs(map: Map<string, Set<string>>, top: number): Pair[] {
  const keys = Array.from(map.keys()).sort();
  const all: Pair[] = [];
  for (let i = 0; i < keys.length; i++) {
    for (let j = i + 1; j < keys.length; j++) {
      const a = keys[i];
      const b = keys[j];
      const sa = map.get(a)!;
      const sb = map.get(b)!;
      const score = jaccard(sa, sb);
      if (score > 0) all.push({ a, b, score, aSize: sa.size, bSize: sb.size });
    }
  }
  all.sort((x, y) => y.score - x.score);
  return all.slice(0, top);
}

function pickSample(paths: string[], cap: number): string[] {
  if (paths.length <= cap) return paths;
  // Stratified sample: include all pillar/service slugs first (they own the
  // boilerplate-prone real estate), then fill with a deterministic stride
  // across the rest so we don't accidentally only sample one prefix.
  const priority = paths.filter(
    (p) =>
      p === "/" ||
      p.startsWith("/services/") ||
      p === "/creative" ||
      p === "/ai-employees" ||
      p === "/revenue" ||
      p === "/intelligence",
  );
  const rest = paths.filter((p) => !priority.includes(p));
  const headroom = Math.max(0, cap - priority.length);
  const stride = Math.max(1, Math.floor(rest.length / Math.max(1, headroom)));
  const sampled: string[] = [];
  for (let i = 0; i < rest.length && sampled.length < headroom; i += stride) {
    sampled.push(rest[i]);
  }
  return [...priority, ...sampled].slice(0, cap);
}

async function main() {
  const { threshold, top, json, sample } = parseArgs();
  // Resolution order: AUDIT_FULL=1 wins (every URL); else --sample=N if
  // provided; else SAMPLE_CAP fallback. The CLI flag exists so a human
  // calibrating the threshold can dial coverage up or down without
  // editing the script and without paying the full-walk cost.
  const cap = sample ?? SAMPLE_CAP;
  process.stderr.write(
    `audit-similarity: BASE=${BASE} threshold=${threshold} top=${top} mode=${FULL_WALK ? "full" : `sample(cap=${cap})`}\n`,
  );
  if (!FULL_WALK) {
    process.stderr.write(
      `audit-similarity: WARNING — sampled mode. Set AUDIT_FULL=1 to walk every URL (gate-equivalent coverage).\n`,
    );
  }

  const { paths } = await walkSitemap(BASE);
  const targetPaths = FULL_WALK ? paths : pickSample(paths, cap);
  process.stderr.write(`audit-similarity: walking ${targetPaths.length} of ${paths.length} sitemap URLs\n`);

  const shingleMap = await fetchAll(targetPaths);
  process.stderr.write(`audit-similarity: kept ${shingleMap.size} pages with >=20 shingles\n`);

  const pairs = topPairs(shingleMap, top);
  const failing = pairs.filter((p) => p.score >= threshold);

  if (json) {
    process.stdout.write(JSON.stringify({ threshold, totalPairs: pairs.length, failing: failing.length, pairs }, null, 2));
    return;
  }

  console.log(`\nTop ${pairs.length} most-similar page pairs (threshold=${threshold}):\n`);
  for (const p of pairs) {
    const flag = p.score >= threshold ? "FAIL" : "    ";
    console.log(`  ${flag}  ${p.score.toFixed(3)}  ${p.a}  vs  ${p.b}   (shingles ${p.aSize}/${p.bSize})`);
  }

  if (failing.length === 0) {
    console.log(`\naudit-similarity: OK — no page pair exceeds Jaccard ${threshold}\n`);
    process.exit(0);
  }
  console.log(`\naudit-similarity: FAIL — ${failing.length} pair(s) >= threshold ${threshold}`);
  console.log(`  See .local/seo-similarity-backlog.md for triage guidance.\n`);
  process.exit(1);
}

main().catch((err) => {
  console.error("audit-similarity crashed:", err);
  process.exit(2);
});
