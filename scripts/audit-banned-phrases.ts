#!/usr/bin/env tsx
//
// audit-banned-phrases — scans every page-author-controlled TSX file for the
// AI-tell phrases listed in `lib/seo/phrase-blocklist.md`.
//
// Background: `scripts/audit-framework.ts` already enforces the blocklist over
// the 21 framework data entries (lib/seo/serviceFramework.ts +
// MALTA_CONTEXT). That covers the 6-layer SSOT but NOT the actual rendered
// JSX copy that ships to the user. The Task 80B-Master spec marks the banned-
// phrase list as "audit-enforced" across all visible content, so we close
// the gap with this script.
//
// Strategy:
//  - Walk app/ and components/ for *.tsx (skip *.test.tsx, *.stories.tsx).
//  - Per line: skip lines that are clearly pure code (import/export/comments/
//    statement openers/closers — anything that produces no DOM text).
//  - Strip attribute values that aren't user-visible (className, data-testid,
//    href, src, id, key, name, import paths). This prevents false positives
//    where, for example, an asset filename literally contains "supercharge".
//  - Pass what remains through `findBannedPhrase` from
//    `lib/seo/phraseBlocklist.ts` (single source of truth for the list +
//    matching rules: case-insensitive, whitespace-collapsed, word-boundary).
//
// Allowlist:
//  - Tier 1 pages are content-locked per the master spec. If a banned phrase
//    is found in a Tier 1 file, we annotate it as `TIER1-LOCKED` in the
//    output and require the path be added to TIER1_GRANDFATHER below with a
//    note (so a fresh hit on an unlocked page is never silently absorbed).
//  - All other hits hard-fail.

import fs from "node:fs";
import path from "node:path";
import { findBannedPhrase } from "../lib/seo/phraseBlocklist";

const ROOT = process.cwd();
const SCAN_DIRS = ["app", "components"];
const EXCLUDE_DIR_NAMES = new Set([".next", "node_modules", "dist", "build"]);
const SKIP_FILE_PATTERNS = [/\.test\.tsx?$/, /\.stories\.tsx?$/, /\.d\.ts$/];

// Tier 1 (content-locked) page roots — banned-phrase hits inside these files
// are reported but do NOT fail the gate. Each entry MUST carry a justification
// committed alongside it. To unlock a phrase: get Reddy's approval, rewrite
// the line, and remove the path from this list (or let the audit be silent).
const TIER1_PATH_PREFIXES: { prefix: string; reason: string }[] = [
  { prefix: "app/page.tsx", reason: "Tier 1 — homepage, content-locked" },
  { prefix: "app/creative/", reason: "Tier 1 — /creative, content-locked" },
  { prefix: "app/ai-agents/", reason: "Tier 1 — /ai-agents, content-locked" },
  { prefix: "app/solutions/", reason: "Tier 1 — /solutions, content-locked" },
  { prefix: "app/services/social-media-creative-management/", reason: "Tier 1 — content-locked" },
  { prefix: "app/services/branding/", reason: "Tier 1 — content-locked" },
  { prefix: "app/services/video-production/", reason: "Tier 1 — content-locked" },
  { prefix: "app/services/ai-consulting/", reason: "Tier 1 — content-locked" },
  { prefix: "app/services/web-design/", reason: "Tier 1 — content-locked" },
  { prefix: "app/services/social/", reason: "Tier 1 — content-locked" },
  { prefix: "app/services/influencer/", reason: "Tier 1 — content-locked" },
  { prefix: "app/services/motion-design/", reason: "Tier 1 — content-locked" },
  { prefix: "app/services/presentation-pitch/", reason: "Tier 1 — content-locked" },
  { prefix: "app/services/paid-advertising/", reason: "Tier 1 — content-locked" },
  { prefix: "app/services/hire-ai-employees/", reason: "Tier 1 — content-locked" },
];

// Lines that produce no rendered text — skip them entirely. The patterns are
// conservative: we'd rather scan a few extra lines than swallow a real hit.
const SKIP_LINE_RE =
  /^(\s*)(import\s|export\s+(default\s+)?(function|const|class|interface|type|async)?|\/\/|\/\*|\*[\s/]|const\s+\w+\s*=|let\s+\w+\s*=|var\s+\w+\s*=|function\s|interface\s|type\s+\w+\s*=|enum\s|class\s|return\s*[({;]?\s*$|}\s*\)?\s*;?\s*,?\s*$|\)\s*[;,]?\s*$|\{\s*$|\[\s*$|\]\s*[,;]?\s*$|\}\s*[,;]?\s*$|use(State|Effect|Ref|Memo|Callback|Context)\s*\()/;

// Attribute strings we treat as noise (technical identifiers, asset paths).
const NOISE_ATTR_RES: RegExp[] = [
  /\bclassName\s*=\s*(["'`])[^"'`]*\1/g,
  /\bclass\s*=\s*(["'`])[^"'`]*\1/g,
  /\bdata-testid\s*=\s*(["'`])[^"'`]*\1/g,
  /\bdata-[a-z-]+\s*=\s*(["'`])[^"'`]*\1/g,
  /\bhref\s*=\s*(["'`])[^"'`]*\1/g,
  /\bsrc\s*=\s*(["'`])[^"'`]*\1/g,
  /\bid\s*=\s*(["'`])[^"'`]*\1/g,
  /\bkey\s*=\s*(["'`])[^"'`]*\1/g,
  /\bname\s*=\s*(["'`])[^"'`]*\1/g,
  /\baria-[a-z-]+\s*=\s*(["'`])[^"'`]*\1/g,
  /\brole\s*=\s*(["'`])[^"'`]*\1/g,
  /\bfrom\s+(["'`])[^"'`]*\1/g,
  /import\s*\(\s*(["'`])[^"'`]*\1\s*\)/g,
];

interface Hit {
  file: string;
  line: number;
  phrase: string;
  text: string;
  tier1: string | null;
}

function isTier1(rel: string): string | null {
  for (const { prefix, reason } of TIER1_PATH_PREFIXES) {
    if (rel === prefix || rel.startsWith(prefix)) return reason;
  }
  return null;
}

function walk(dir: string, out: string[] = []): string[] {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (EXCLUDE_DIR_NAMES.has(ent.name)) continue;
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(full, out);
    else if (ent.isFile() && /\.tsx?$/.test(ent.name)) {
      if (SKIP_FILE_PATTERNS.some((re) => re.test(ent.name))) continue;
      out.push(full);
    }
  }
  return out;
}

function scrubLine(line: string): string {
  let s = line;
  for (const re of NOISE_ATTR_RES) s = s.replace(re, "");
  return s;
}

const allFiles: string[] = [];
for (const dir of SCAN_DIRS) {
  const abs = path.join(ROOT, dir);
  if (!fs.existsSync(abs)) continue;
  walk(abs, allFiles);
}

const hits: Hit[] = [];
for (const file of allFiles) {
  const rel = path.relative(ROOT, file);
  const tier1 = isTier1(rel);
  const lines = fs.readFileSync(file, "utf-8").split("\n");
  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    if (SKIP_LINE_RE.test(raw)) continue;
    const cleaned = scrubLine(raw);
    if (!cleaned.trim()) continue;
    const phrase = findBannedPhrase(cleaned);
    if (phrase) {
      hits.push({ file: rel, line: i + 1, phrase, text: raw.trim().slice(0, 180), tier1 });
    }
  }
}

const fatal = hits.filter((h) => !h.tier1);
const grandfathered = hits.filter((h) => h.tier1);

if (grandfathered.length > 0) {
  console.log(
    `audit-banned-phrases: ${grandfathered.length} hit(s) in TIER 1 (content-locked, grandfathered):`,
  );
  for (const h of grandfathered) {
    console.log(`  [TIER1] ${h.file}:${h.line}  "${h.phrase}"  ${h.tier1}`);
    console.log(`          → ${h.text}`);
  }
  console.log("");
}

if (fatal.length > 0) {
  console.error(
    `audit-banned-phrases: ✗ ${fatal.length} banned-phrase hit(s) in unlocked TSX content (scanned ${allFiles.length} files)`,
  );
  for (const h of fatal) {
    console.error(`  ${h.file}:${h.line}  "${h.phrase}"`);
    console.error(`    → ${h.text}`);
  }
  console.error("");
  console.error("  Source-of-truth list: lib/seo/phrase-blocklist.md");
  console.error("  Rewrite each offending line in plain expert language.");
  process.exit(1);
}

console.log(
  `audit-banned-phrases: ✓ scanned ${allFiles.length} TSX files in app/ + components/ — no banned phrases in unlocked rendered content` +
    (grandfathered.length > 0 ? ` (${grandfathered.length} grandfathered Tier 1 hit(s) above)` : ""),
);
