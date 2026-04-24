/* eslint-disable no-console */
// Framework audit: validates that every SERVICE_SCHEMAS entry satisfies the
// 6-layer SEO discovery framework defined in `.local/seo-framework.md`.
//
// Run with:
//   npx tsx scripts/audit-framework.ts                              # offline
//   BASE=http://localhost:5000 npx tsx scripts/audit-framework.ts   # + live SSR
//
// Gates checked here (Layer 0 / Layer 5 are gated by audit-core-57 separately):
//   Layer 1 — uniqueValueProp present, length 40-180, unique across the table.
//             If BASE is set: BOTH the <meta name="description"> tag AND at
//             least one Service JSON-LD node on /services/<slug> must have
//             description === entry.description (proves both surfaces ship,
//             not just that the string appears somewhere in the body).
//   Layer 2 — entityFocus present, length >= 12.
//   Layer 3 — primaryIntent set; (intent x generalizationKeyword) collisions
//             flagged so two pages cannot own the same broad query.
//   Layer 4 — llmCitableFacts has >= 3 entries with claim length >= 30.
//             At least 2 entries per page must carry a `source` URL.
//             EXACT-BLOCK parity between SERVICE_SCHEMAS and the AUTOGEN
//             section of public/llms.txt: the audit regenerates the expected
//             section in-memory and fails on any difference (missing markers,
//             missing file, or content drift). Forces re-running
//             scripts/generate-llms-txt-facts.ts after every schema edit.
//   Layer 6 — conversionGoal present, length >= 8.

import fs from "node:fs";
import path from "node:path";
import { SERVICE_SCHEMAS, type ServiceSchemaEntry } from "../lib/seo/serviceSchemaConfig";

type Issue = { slug: string; layer: 1 | 2 | 3 | 4 | 6; message: string };

const issues: Issue[] = [];
const BASE = process.env.BASE?.replace(/\/$/, "") ?? "";
const LLMS_PATH = path.join(process.cwd(), "public", "llms.txt");
const AUTOGEN_START = "<!-- AUTOGEN:CITABLE-FACTS:START -->";
const AUTOGEN_END = "<!-- AUTOGEN:CITABLE-FACTS:END -->";

const seenUVPs = new Map<string, string>();
const seenIntentKeyword = new Map<string, string>();

function normalise(s: string): string {
  return s.trim().toLowerCase().replace(/\s+/g, " ");
}

async function fetchHtml(url: string): Promise<string | null> {
  try {
    const r = await fetch(url, { redirect: "follow" });
    if (!r.ok) return null;
    return await r.text();
  } catch {
    return null;
  }
}

// Decode HTML entities that show up inside meta tag content. Covers named
// entities AND numeric forms (decimal `&#39;` and hex `&#x27;`) — Next.js
// commonly emits the hex form for apostrophes inside server-rendered metadata.
function decodeEntities(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(parseInt(dec, 10)));
}

function extractMetaDescription(html: string): string | null {
  // Tolerate attribute order: name first or content first; single or double quotes.
  const patterns = [
    /<meta[^>]*\bname=["']description["'][^>]*\bcontent=["']([^"']*)["'][^>]*>/i,
    /<meta[^>]*\bcontent=["']([^"']*)["'][^>]*\bname=["']description["'][^>]*>/i,
  ];
  for (const p of patterns) {
    const m = html.match(p);
    if (m) return decodeEntities(m[1]);
  }
  return null;
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

function jsonldHasServiceWithDescription(html: string, expected: string): boolean {
  for (const node of collectJsonldNodes(html)) {
    const n = node as { description?: unknown };
    if (nodeHasType(node, "Service") && typeof n.description === "string" && n.description === expected) return true;
  }
  return false;
}

function countJsonldNodesByType(html: string, type: string): number {
  return collectJsonldNodes(html).filter((n) => nodeHasType(n, type)).length;
}

// Build the expected AUTOGEN section content in-memory for exact-block parity.
// Mirrors scripts/generate-llms-txt-facts.ts so the two stay symmetrical.
function buildExpectedFactsSection(): string {
  const lines: string[] = [];
  lines.push(AUTOGEN_START);
  lines.push("");
  lines.push("## Cite-Able Service Facts (for AI answer engines)");
  lines.push("");
  lines.push(
    "Auto-generated from lib/seo/serviceSchemaConfig.ts by scripts/generate-llms-txt-facts.ts. Do not hand-edit between the AUTOGEN markers — re-run the generator instead.",
  );
  lines.push("");

  for (const [slug, entry] of Object.entries(SERVICE_SCHEMAS) as [string, ServiceSchemaEntry][]) {
    const fw = entry.framework;
    if (!fw) continue;
    const canonical = `https://oarcdigital.com/services/${slug}`;
    lines.push(`### ${entry.title.replace(/\s*\|.*$/, "").trim()}`);
    lines.push(`Canonical: ${canonical}`);
    lines.push(`Value: ${fw.uniqueValueProp}`);
    for (const f of fw.llmCitableFacts) lines.push(`- ${f.claim}`);
    lines.push("");
  }

  lines.push(AUTOGEN_END);
  return lines.join("\n");
}

function checkLlmsTxtParity(): Issue[] {
  const out: Issue[] = [];
  if (!fs.existsSync(LLMS_PATH)) {
    out.push({ slug: "_global", layer: 4, message: `public/llms.txt missing — cannot verify AI-discovery parity` });
    return out;
  }
  const llms = fs.readFileSync(LLMS_PATH, "utf-8");
  const startIdx = llms.indexOf(AUTOGEN_START);
  const endIdx = llms.indexOf(AUTOGEN_END);
  if (startIdx < 0 || endIdx < 0 || endIdx <= startIdx) {
    out.push({
      slug: "_global",
      layer: 4,
      message: `AUTOGEN markers missing or malformed in public/llms.txt — run \`npx tsx scripts/generate-llms-txt-facts.ts\``,
    });
    return out;
  }
  const actual = llms.slice(startIdx, endIdx + AUTOGEN_END.length);
  const expected = buildExpectedFactsSection();
  if (actual !== expected) {
    out.push({
      slug: "_global",
      layer: 4,
      message: `AUTOGEN block in public/llms.txt drifted from SERVICE_SCHEMAS — run \`npx tsx scripts/generate-llms-txt-facts.ts\``,
    });
  }
  return out;
}

async function audit() {
  // Per-entry (Layers 1-6) checks
  for (const [slug, entry] of Object.entries(SERVICE_SCHEMAS) as [string, ServiceSchemaEntry][]) {
    const fw = entry.framework;
    if (!fw) {
      issues.push({ slug, layer: 1, message: "missing framework block entirely" });
      continue;
    }

    // Layer 1 — UVP
    const uvp = (fw.uniqueValueProp ?? "").trim();
    if (!uvp) {
      issues.push({ slug, layer: 1, message: "uniqueValueProp empty" });
    } else {
      if (uvp.length < 40) issues.push({ slug, layer: 1, message: `uniqueValueProp too short (${uvp.length} chars, min 40)` });
      if (uvp.length > 180) issues.push({ slug, layer: 1, message: `uniqueValueProp too long (${uvp.length} chars, max 180)` });
      const key = normalise(uvp);
      const prior = seenUVPs.get(key);
      if (prior) issues.push({ slug, layer: 1, message: `uniqueValueProp duplicates ${prior}` });
      else seenUVPs.set(key, slug);
    }

    // Layer 2
    const ef = (fw.entityFocus ?? "").trim();
    if (!ef) issues.push({ slug, layer: 2, message: "entityFocus empty" });
    else if (ef.length < 12) issues.push({ slug, layer: 2, message: `entityFocus too short (${ef.length} chars)` });

    // Layer 3
    if (!fw.primaryIntent) issues.push({ slug, layer: 3, message: "primaryIntent not set" });
    const kws = fw.generalizationKeywords ?? [];
    if (kws.length < 3) issues.push({ slug, layer: 3, message: `generalizationKeywords has ${kws.length} entries, min 3` });
    for (const kw of kws) {
      const key = `${fw.primaryIntent}::${normalise(kw)}`;
      const prior = seenIntentKeyword.get(key);
      if (prior) issues.push({ slug, layer: 3, message: `(intent=${fw.primaryIntent}, keyword="${kw}") collides with ${prior}` });
      else seenIntentKeyword.set(key, slug);
    }

    // Layer 4 — counts + length + sourced threshold (parity is checked globally below)
    const facts = fw.llmCitableFacts ?? [];
    if (facts.length < 3) issues.push({ slug, layer: 4, message: `llmCitableFacts has ${facts.length} entries, min 3` });
    let sourcedCount = 0;
    for (let i = 0; i < facts.length; i++) {
      const f = facts[i];
      if (!f?.claim || f.claim.trim().length < 30) {
        issues.push({ slug, layer: 4, message: `llmCitableFacts[${i}].claim too short or empty` });
      }
      if (f?.source && /^https?:\/\//.test(f.source)) sourcedCount++;
    }
    if (sourcedCount < 2) {
      issues.push({
        slug,
        layer: 4,
        message: `only ${sourcedCount} llmCitableFacts entries carry a 'source' URL (min 2 required)`,
      });
    }

    // Layer 6
    const goal = (fw.conversionGoal ?? "").trim();
    if (!goal) issues.push({ slug, layer: 6, message: "conversionGoal empty" });
    else if (goal.length < 8) issues.push({ slug, layer: 6, message: `conversionGoal too short (${goal.length} chars)` });

    // Layer 1 (live SSR) — meta description AND Service JSON-LD description
    if (BASE) {
      const url = `${BASE}/services/${slug}`;
      const html = await fetchHtml(url);
      if (!html) {
        issues.push({ slug, layer: 1, message: `live SSR fetch failed for ${url}` });
      } else {
        const meta = extractMetaDescription(html);
        if (meta !== entry.description) {
          issues.push({
            slug,
            layer: 1,
            message: `<meta name="description"> on ${url} did not match SCHEMA.description (got ${meta === null ? "no tag" : `"${meta.slice(0, 60)}…"`})`,
          });
        }
        if (!jsonldHasServiceWithDescription(html, entry.description)) {
          issues.push({
            slug,
            layer: 1,
            message: `no Service JSON-LD node on ${url} has description === SCHEMA.description`,
          });
        }
        // Defensive gate: a RouteSchema-backed page must emit exactly one
        // FAQPage node. >1 means a stray FAQ schema (e.g. a child component
        // re-emitting one) and is a structured-data regression Google flags.
        if (entry.faqs && entry.faqs.length > 0) {
          const faqCount = countJsonldNodesByType(html, "FAQPage");
          if (faqCount !== 1) {
            issues.push({
              slug,
              layer: 1,
              message: `expected exactly 1 FAQPage JSON-LD node on ${url}, got ${faqCount}`,
            });
          }
        }
      }
    }
  }

  // Global Layer 4 parity gate
  for (const i of checkLlmsTxtParity()) issues.push(i);

  const total = Object.keys(SERVICE_SCHEMAS).length;
  const failedSlugs = new Set(issues.map((i) => i.slug));
  const passed = total - [...failedSlugs].filter((s) => s !== "_global").length;

  const liveTag = BASE ? ` (with live SSR check against ${BASE})` : " (offline; pass BASE=... for live SSR check)";
  console.log(`framework audit${liveTag}: ${passed}/${total} service entries pass all 6 layer checks\n`);

  if (issues.length === 0) {
    console.log("  ✓ all 6 framework layers satisfied for every entry");
    process.exit(0);
  }
  const grouped = new Map<string, Issue[]>();
  for (const i of issues) {
    if (!grouped.has(i.slug)) grouped.set(i.slug, []);
    grouped.get(i.slug)!.push(i);
  }
  for (const [slug, list] of grouped) {
    console.log(`  ✗ ${slug}`);
    for (const i of list) console.log(`      L${i.layer}: ${i.message}`);
  }
  process.exit(1);
}

audit().catch((err) => {
  console.error("audit-framework crashed:", err);
  process.exit(2);
});
