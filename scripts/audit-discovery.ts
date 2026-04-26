/* eslint-disable no-console */
// AI/voice discovery audit. HTTP-only — must run against a live server (the
// gate:full bootstraps `npm run dev` if BASE is not reachable).
//
// For every page in TOP_PAGES, asserts:
//   1. A WebPage JSON-LD node with a SpeakableSpecification targeting
//      `[data-speakable]` is present in the rendered HTML.
//   2. The DOM contains at least one element matching `[data-speakable]`
//      (otherwise the Speakable selector points at nothing — Google ignores
//      Speakable entries with empty targets).
//   3. The hreflang cluster is emitted: en-MT, en-GB, x-default — each
//      pointing at the page's own canonical URL. NO en-US (intentionally
//      not claimed; would dilute the en-MT signal).
//   4. The page renders the canonical <link rel="canonical"> matching the
//      en-MT hreflang target.
//
// Layer 0 — also asserts public/llms-full.txt exists and matches the
// generator output (parity gate at HTTP layer; the static gate also runs
// the same check via audit-framework so we catch drift in both stages).
//
// Usage:
//   BASE=http://localhost:5000 npx tsx scripts/audit-discovery.ts

import fs from "node:fs";
import path from "node:path";
import { TOP_PAGES, topPageCanonical, type TopPage } from "../lib/seo/topPages";
import { applyLlmsFullTransform, LLMS_FULL_PATH } from "../lib/seo/llmsFullBuilder";

type Issue = { path: string; layer: string; message: string };

const BASE = (process.env.BASE ?? "http://localhost:5000").replace(/\/$/, "");
const issues: Issue[] = [];

async function fetchHtml(url: string): Promise<string | null> {
  try {
    const r = await fetch(url, { redirect: "follow" });
    if (!r.ok) return null;
    return await r.text();
  } catch {
    return null;
  }
}

function collectJsonldNodes(html: string): unknown[] {
  const re = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  const all: unknown[] = [];
  let match: RegExpExecArray | null;
  while ((match = re.exec(html)) !== null) {
    const raw = match[1].trim();
    if (!raw) continue;
    let data: unknown;
    try {
      data = JSON.parse(raw);
    } catch {
      continue;
    }
    const walk = (v: unknown) => {
      if (Array.isArray(v)) v.forEach(walk);
      else if (v && typeof v === "object") {
        all.push(v);
        const graph = (v as { "@graph"?: unknown })["@graph"];
        if (graph) walk(graph);
      }
    };
    walk(data);
  }
  return all;
}

function nodeHasType(node: unknown, type: string): boolean {
  const n = node as { "@type"?: unknown };
  const types = Array.isArray(n["@type"]) ? n["@type"] : n["@type"] ? [n["@type"]] : [];
  return types.some((t) => typeof t === "string" && t === type);
}

function findSpeakableNode(html: string): { ok: boolean; cssSelectors: string[] } {
  const nodes = collectJsonldNodes(html);
  for (const node of nodes) {
    if (!nodeHasType(node, "WebPage")) continue;
    const sp = (node as { speakable?: unknown }).speakable;
    if (!sp || typeof sp !== "object") continue;
    // Tighten: speakable MUST be a SpeakableSpecification node. A bare object
    // with cssSelector but no @type is invalid per Google's Speakable spec
    // and would silently fail validation in Search Console.
    if (!nodeHasType(sp, "SpeakableSpecification")) continue;
    const css = (sp as { cssSelector?: unknown }).cssSelector;
    if (Array.isArray(css)) {
      const flat = css.filter((c): c is string => typeof c === "string");
      if (flat.some((c) => c.includes("[data-speakable]"))) {
        return { ok: true, cssSelectors: flat };
      }
    } else if (typeof css === "string" && css.includes("[data-speakable]")) {
      return { ok: true, cssSelectors: [css] };
    }
  }
  return { ok: false, cssSelectors: [] };
}

function countDataSpeakable(html: string): number {
  // Server-rendered Next.js may emit attributes with or without quotes; tolerate both.
  // Counts every occurrence so we can enforce the headline + lead-paragraph
  // pair (>=2 targets) — Speakable with a single target loses the lead-p
  // signal answer engines need to vocalise the page summary.
  const re = /\bdata-speakable(=|\s|>)/g;
  return (html.match(re) ?? []).length;
}

function extractHreflangs(html: string): Map<string, string> {
  const out = new Map<string, string>();
  const re = /<link[^>]*\brel=["']alternate["'][^>]*>/gi;
  let match: RegExpExecArray | null;
  while ((match = re.exec(html)) !== null) {
    const tag = match[0];
    const lang = /\bhreflang=["']([^"']+)["']/i.exec(tag)?.[1];
    const href = /\bhref=["']([^"']+)["']/i.exec(tag)?.[1];
    if (lang && href) out.set(lang.toLowerCase(), href);
  }
  return out;
}

function extractCanonical(html: string): string | null {
  const m = /<link[^>]*\brel=["']canonical["'][^>]*\bhref=["']([^"']+)["'][^>]*>/i.exec(html)
    ?? /<link[^>]*\bhref=["']([^"']+)["'][^>]*\brel=["']canonical["'][^>]*>/i.exec(html);
  return m ? m[1] : null;
}

async function auditPage(p: TopPage) {
  const url = `${BASE}${p.path === "/" ? "" : p.path}`;
  const expectedCanonical = topPageCanonical(p.path);
  const html = await fetchHtml(url);
  if (!html) {
    issues.push({ path: p.path, layer: "fetch", message: `live SSR fetch failed for ${url}` });
    return;
  }

  // 1. Speakable JSON-LD
  const sp = findSpeakableNode(html);
  if (!sp.ok) {
    issues.push({
      path: p.path,
      layer: "speakable",
      message:
        `no WebPage JSON-LD with SpeakableSpecification targeting [data-speakable] found at ${url}`,
    });
  }

  // 2. data-speakable targets present — require BOTH a headline and a lead
  // paragraph (>=2 occurrences). A single target makes Speakable parse-valid
  // but useless: answer engines need the lead-p to vocalise the page summary
  // after reading the headline. Anything less is half-implemented.
  const speakableCount = countDataSpeakable(html);
  if (speakableCount === 0) {
    issues.push({
      path: p.path,
      layer: "speakable",
      message:
        `Speakable selector [data-speakable] has no matching element in rendered HTML at ${url}`,
    });
  } else if (speakableCount < 2) {
    issues.push({
      path: p.path,
      layer: "speakable",
      message:
        `Speakable target count = ${speakableCount} at ${url}; expected >=2 (headline + lead paragraph)`,
    });
  }

  // 3. Hreflang cluster
  const hreflangs = extractHreflangs(html);
  for (const lang of ["en-mt", "en-gb", "x-default"]) {
    const href = hreflangs.get(lang);
    if (!href) {
      issues.push({
        path: p.path,
        layer: "hreflang",
        message: `missing <link rel="alternate" hreflang="${lang}"> at ${url}`,
      });
      continue;
    }
    if (href !== expectedCanonical) {
      issues.push({
        path: p.path,
        layer: "hreflang",
        message: `hreflang="${lang}" href="${href}" did not match canonical "${expectedCanonical}"`,
      });
    }
  }
  // Anti-cannibalisation: en-US must NOT be claimed (we do not target US).
  if (hreflangs.has("en-us")) {
    issues.push({
      path: p.path,
      layer: "hreflang",
      message: `hreflang="en-US" is emitted at ${url} — must be removed (US not targeted)`,
    });
  }

  // 4. Canonical link matches hreflang en-MT
  const canonical = extractCanonical(html);
  if (canonical !== expectedCanonical) {
    issues.push({
      path: p.path,
      layer: "canonical",
      message: `<link rel="canonical"> on ${url} = "${canonical}", expected "${expectedCanonical}"`,
    });
  }
}

function checkLlmsFullParity(): Issue[] {
  const out: Issue[] = [];
  const fullPath = path.join(process.cwd(), LLMS_FULL_PATH);
  if (!fs.existsSync(fullPath)) {
    out.push({
      path: "_global",
      layer: "llms-full",
      message: `${LLMS_FULL_PATH} missing — run \`npx tsx scripts/generate-llms-full-txt.ts\``,
    });
    return out;
  }
  const current = fs.readFileSync(fullPath, "utf-8");
  // Marker-scoped parity: applyLlmsFullTransform is idempotent, so
  // current === transform(current) iff the AUTOGEN body is in sync. Content
  // OUTSIDE the markers is intentionally preserved across runs.
  const expected = applyLlmsFullTransform(current);
  if (current !== expected) {
    out.push({
      path: "_global",
      layer: "llms-full",
      message:
        `${LLMS_FULL_PATH} AUTOGEN body drifted from generator output — run \`npx tsx scripts/generate-llms-full-txt.ts\` and commit`,
    });
  }
  return out;
}

async function main() {
  console.log(`audit-discovery: BASE=${BASE} pages=${TOP_PAGES.length}`);
  for (const p of TOP_PAGES) await auditPage(p);
  for (const i of checkLlmsFullParity()) issues.push(i);

  if (issues.length === 0) {
    console.log(`  OK — all ${TOP_PAGES.length} top pages emit Speakable + hreflang correctly, llms-full.txt parity ok`);
    process.exit(0);
  }
  console.log(`  FAIL — ${issues.length} issue(s) across ${new Set(issues.map((i) => i.path)).size} page(s):`);
  const grouped = new Map<string, Issue[]>();
  for (const i of issues) {
    if (!grouped.has(i.path)) grouped.set(i.path, []);
    grouped.get(i.path)!.push(i);
  }
  for (const [p, list] of grouped) {
    console.log(`  ✗ ${p}`);
    for (const i of list) console.log(`      [${i.layer}] ${i.message}`);
  }
  process.exit(1);
}

main().catch((err) => {
  console.error("audit-discovery crashed:", err);
  process.exit(2);
});
