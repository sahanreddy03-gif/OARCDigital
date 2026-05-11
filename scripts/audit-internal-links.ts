/* eslint-disable no-console */
// audit-internal-links (Task #136)
// =================================
// Linter for the internal-link graph. Asserts the contract that every
// pillar links DOWN to >= MIN_PILLAR_SPOKES distinct spokes, every spoke
// links UP to its pillar, and every node carries >= MIN_ANCHOR_VARIANTS
// distinct anchor-text variants — none of which trigger the shared
// AI-tell phrase blocklist.
//
// CI-blocking. Wired into `gate:fast` via scripts/seo-gate.sh.
//
// Run locally:
//   npx tsx scripts/audit-internal-links.ts
//
// Exits 0 on pass, 1 on any violation. Prints a per-violation report so
// the failing edge is obvious in the gate log.

import {
  LINK_GRAPH,
  PILLAR_PATHS,
  pillarFor,
  getAnchors,
  type LinkNode,
} from "../lib/seo/internalLinkGraph";
import { findBannedPhrase } from "../lib/seo/phraseBlocklist";

const MIN_PILLAR_SPOKES = 6;
const MIN_ANCHOR_VARIANTS = 3;

interface Violation {
  path: string;
  kind: string;
  detail: string;
}

const violations: Violation[] = [];

let nodeCount = 0;
let pillarCount = 0;
let spokeCount = 0;
let anchorTotal = 0;

for (const node of LINK_GRAPH.values()) {
  nodeCount++;
  const isPillar = PILLAR_PATHS.has(node.path);

  // 1. Anchor-variant count + phrase-blocklist check.
  const anchors = getAnchors(node);
  anchorTotal += anchors.length;
  if (anchors.length < MIN_ANCHOR_VARIANTS) {
    violations.push({
      path: node.path,
      kind: "anchors-too-few",
      detail: `has ${anchors.length} variant(s); need >=${MIN_ANCHOR_VARIANTS}`,
    });
  }
  for (const a of anchors) {
    const banned = findBannedPhrase(a);
    if (banned) {
      violations.push({
        path: node.path,
        kind: "anchor-banned-phrase",
        detail: `"${a}" contains banned phrase "${banned}"`,
      });
    }
    if (!a.trim()) {
      violations.push({
        path: node.path,
        kind: "anchor-empty",
        detail: `empty anchor variant in list`,
      });
    }
  }
  // Distinctness (case-insensitive, whitespace-collapsed).
  const norm = anchors.map((a) => a.toLowerCase().replace(/\s+/g, " ").trim());
  if (new Set(norm).size !== norm.length) {
    violations.push({
      path: node.path,
      kind: "anchor-duplicates",
      detail: `anchor list contains case-insensitive duplicates: ${anchors.join(" | ")}`,
    });
  }

  // 2. Pillar link-DOWN density. PILLAR_PATHS is the 6 ranking pillars
  //    (the 4 cores + /services + /industries); every one MUST link to
  //    >=MIN_PILLAR_SPOKES distinct spokes per Task #136 spec.
  if (isPillar) {
    pillarCount++;
    const distinct = new Set(node.spokes);
    if (distinct.size < MIN_PILLAR_SPOKES) {
      violations.push({
        path: node.path,
        kind: "pillar-low-fanout",
        detail: `pillar links to ${distinct.size} distinct spoke(s); need >=${MIN_PILLAR_SPOKES}`,
      });
    }
  } else {
    // 3. Spoke link-UP requirement.
    spokeCount++;
    const pillar = pillarFor(node);
    if (pillar && !node.spokes.includes(pillar)) {
      violations.push({
        path: node.path,
        kind: "spoke-missing-pillar",
        detail: `spoke does not link UP to pillar "${pillar}"`,
      });
    }
  }

  // 4. Spoke targets resolve. (The graph itself runs this check at
  //    module-load too, but doing it here gives a clean CI message
  //    instead of a process-level throw.)
  for (const spoke of node.spokes) {
    if (!LINK_GRAPH.has(spoke)) {
      violations.push({
        path: node.path,
        kind: "spoke-target-missing",
        detail: `spoke target "${spoke}" not declared in LINK_GRAPH`,
      });
    }
  }
}

console.log(
  `audit-internal-links: ${nodeCount} nodes (${pillarCount} pillars, ${spokeCount} spokes), ` +
    `${anchorTotal} anchor variants total (avg ${(anchorTotal / nodeCount).toFixed(1)}/node)`,
);

if (violations.length === 0) {
  console.log("audit-internal-links: PASS");
  process.exit(0);
}

console.log(`\naudit-internal-links: FAIL — ${violations.length} violation(s)`);
const byKind = new Map<string, Violation[]>();
for (const v of violations) {
  const list = byKind.get(v.kind) ?? [];
  list.push(v);
  byKind.set(v.kind, list);
}
for (const [kind, list] of byKind) {
  console.log(`\n  [${kind}] ${list.length}`);
  for (const v of list) {
    console.log(`    ${v.path}  -  ${v.detail}`);
  }
}
process.exit(1);

// Defensive: silence unused-import linter for the LinkNode type re-export
// when no caller uses it. Keeping the import is intentional — having the
// fully-typed iteration above documents the audit's contract.
export type _Unused = LinkNode;
