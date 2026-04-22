/* eslint-disable no-console */
// Core-57 audit: verifies that every priority page in our canonical SEO set
// has the right schema type, enough word depth, and enough internal links to
// compete in Malta SERPs.
//
// Run with: npx tsx scripts/audit-core-57.ts
// (No CI gate — script reports findings; humans triage.)

import fs from "node:fs";
import path from "node:path";
import { LINK_GRAPH, getInboundLinks } from "../lib/seo/internalLinkGraph";

type Tier = "top4" | "aeo" | "service-page" | "shell";

interface Target {
  path: string;
  expectedSchema: "service" | "article" | "page" | "localBusiness";
  tier: Tier;
}

// The four ranking-priority pillars per Task #64.
const TOP_4 = ["/", "/ai-agents", "/creative", "/automation"] as const;

// Service shells we want to track in the audit even though they aren't pillars.
const CORE_SHELLS = ["/services", "/our-work", "/contact"] as const;

// All AEO landing pages discovered on disk — the canonical Malta-search set.
const AEO_DIR = "app/aeo";
const aeoSlugs = fs.existsSync(AEO_DIR)
  ? fs.readdirSync(AEO_DIR).filter((d) => fs.statSync(path.join(AEO_DIR, d)).isDirectory())
  : [];
const aeoPaths = aeoSlugs.map((s) => `/aeo/${s}`);

// All /services/* pages discovered on disk. These collectively form the
// "service pages" tier of the Core-57 set.
const SERVICES_DIR = "app/services";
const servicePaths = fs.existsSync(SERVICES_DIR)
  ? fs
      .readdirSync(SERVICES_DIR)
      .filter((d) => fs.statSync(path.join(SERVICES_DIR, d)).isDirectory())
      .map((s) => `/services/${s}`)
  : [];

const allPaths = Array.from(
  new Set([...TOP_4, ...CORE_SHELLS, ...aeoPaths, ...servicePaths]),
);

const targets: Target[] = allPaths.map((p) => {
  const tier: Tier = (TOP_4 as readonly string[]).includes(p)
    ? "top4"
    : p.startsWith("/aeo/")
      ? "aeo"
      : p.startsWith("/services/")
        ? "service-page"
        : "shell";
  const expectedSchema = p.startsWith("/aeo/") || p.startsWith("/services/") ? "service" : "page";
  return { path: p, expectedSchema, tier };
});

// Tier-specific minimums. Word counts are post-strip approximations; rendered
// counts are typically 1.4-1.6x. Inbound thresholds reflect realistic graph
// density: pillars deserve heavy reinforcement, AEOs need visible link
// equity, service pages tolerate fewer.
const MIN_WORDS: Record<Tier, number> = {
  top4: 1500,
  aeo: 800,
  "service-page": 500,
  shell: 0,
};

const MIN_INBOUND: Record<Tier, number> = {
  top4: 8,
  aeo: 3,
  "service-page": 4,
  shell: 0,
};

interface Row {
  path: string;
  tier: Tier;
  exists: boolean;
  schemaOk: boolean;
  schemaFound: string;
  words: number;
  wordsOk: boolean;
  inboundLinks: number;
  inboundOk: boolean;
}

function pageFileFor(p: string): string {
  if (p === "/") return "app/page.tsx";
  return `app${p}/page.tsx`;
}

function contentFileFor(p: string): string | null {
  const dir = p === "/" ? "app" : `app${p}`;
  const candidates = ["PageContent.tsx", "page.tsx"];
  for (const c of candidates) {
    const full = path.join(dir, c);
    if (fs.existsSync(full)) return full;
  }
  return null;
}

function detectSchemaType(src: string): string {
  const m = src.match(/<RouteSchema\s+[^>]*type="([^"]+)"/);
  if (m) return m[1];
  if (/RouteSchema/.test(src)) return "page";
  return "none";
}

function countWords(src: string): number {
  // Strip imports, JSX tags, and code symbols. Approximation, not perfect — but
  // stable enough to detect thin pages vs deep pages.
  const stripped = src
    .replace(/import .* from .*;?/g, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/[{}();[\]<>=]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return stripped.split(" ").filter((w) => w.length > 1).length;
}

const rows: Row[] = targets.map((t) => {
  const pageFile = pageFileFor(t.path);
  const exists = fs.existsSync(pageFile);
  const inbound = getInboundLinks(t.path).length;
  const minInbound = MIN_INBOUND[t.tier];
  if (!exists) {
    return {
      path: t.path,
      tier: t.tier,
      exists,
      schemaOk: false,
      schemaFound: "missing",
      words: 0,
      wordsOk: false,
      inboundLinks: inbound,
      inboundOk: inbound >= minInbound,
    };
  }

  const pageSrc = fs.readFileSync(pageFile, "utf8");
  const schemaFound = detectSchemaType(pageSrc);
  const schemaOk =
    schemaFound === t.expectedSchema ||
    (t.expectedSchema === "page" && schemaFound !== "missing");

  const contentFile = contentFileFor(t.path);
  const contentSrc = contentFile ? fs.readFileSync(contentFile, "utf8") : pageSrc;
  const words =
    countWords(contentSrc) +
    (contentFile && contentFile !== pageFile ? countWords(pageSrc) : 0);
  const minWords = MIN_WORDS[t.tier];

  return {
    path: t.path,
    tier: t.tier,
    exists,
    schemaOk,
    schemaFound,
    words,
    wordsOk: words >= minWords,
    inboundLinks: inbound,
    inboundOk: inbound >= minInbound,
  };
});

// Report
console.log("\nCore-57 audit report — generated", new Date().toISOString());
console.log("path,tier,exists,schemaFound,schemaOk,words,wordsOk,inbound,inboundOk");
for (const r of rows) {
  console.log(
    [r.path, r.tier, r.exists, r.schemaFound, r.schemaOk, r.words, r.wordsOk, r.inboundLinks, r.inboundOk].join(","),
  );
}

const failures = rows.filter(
  (r) => !r.exists || !r.schemaOk || (!r.wordsOk && r.tier !== "shell") || (!r.inboundOk && r.tier !== "shell"),
);

const byTier = (tier: Tier) => rows.filter((r) => r.tier === tier).length;
console.log(`\nSummary: ${rows.length} pages audited, ${failures.length} flagged.`);
console.log(
  `By tier — top4: ${byTier("top4")}, aeo: ${byTier("aeo")}, service-page: ${byTier("service-page")}, shell: ${byTier("shell")}`,
);
console.log(`Graph nodes: ${LINK_GRAPH.size}`);
console.log(
  `Thresholds — words: top4=${MIN_WORDS.top4}, aeo=${MIN_WORDS.aeo}, service=${MIN_WORDS["service-page"]}; inbound: top4=${MIN_INBOUND.top4}, aeo=${MIN_INBOUND.aeo}, service=${MIN_INBOUND["service-page"]}`,
);

if (failures.length) {
  console.log("\nFailures:");
  for (const f of failures) {
    const reasons: string[] = [];
    if (!f.exists) reasons.push("missing-file");
    if (!f.schemaOk) reasons.push(`bad-schema(${f.schemaFound})`);
    if (!f.wordsOk && f.tier !== "shell") reasons.push(`thin(${f.words}w)`);
    if (!f.inboundOk && f.tier !== "shell") reasons.push(`low-inbound(${f.inboundLinks})`);
    console.log(`  ${f.path}  [${f.tier}]  ${reasons.join(", ")}`);
  }
}
