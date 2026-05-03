/* eslint-disable no-console */
// Static codebase guard — fails the build if any source file contains a
// non-Malta NAP fragment. Designed to be cheap (synchronous fs walk, no
// dependencies) so it can live in `gate:fast` (Husky pre-commit) and catch
// drift the moment a developer pastes a stale phone or office address.
//
// Why this exists: scripts/audit-nap.ts walks RENDERED HTML (HTTP-mode,
// gate:full) and catches drift in shipped pages. But by then the bad data
// is already committed. This script walks the SOURCE tree at lint-time so
// the regression never lands.
//
// Patterns watched:
//   - India phone (+91 99005 55588 / +919900555588)
//   - UAE phone (+971 52 647 2981 / +971526472981)
//   - Office strings ("Olympia Tech Park", "Jumeirah Lake Towers",
//     "Cluster F", "Chennai 600032", "JLT")
//
// Excluded paths (legitimate places these strings may appear):
//   - attached_assets/  — user-uploaded historical context, untouchable.
//   - node_modules/     — third-party.
//   - .next/, .git/     — build/VCS artifacts.
//   - .local/           — agent scratch; some plan docs reference the
//                         legacy numbers as historical context.
//   - scripts/audit-no-foreign-nap.ts — this file (it lists the patterns).
//
// Usage:
//   npx tsx scripts/audit-no-foreign-nap.ts
// Wired into seo-gate.sh gate:fast block.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = process.cwd();
// ESM has no __filename — derive it. Used to self-exempt this script from
// its own pattern scan (the file lists every banned fragment by design).
const SELF_PATH = fileURLToPath(import.meta.url);

type Pattern = { name: string; regex: RegExp };

const FOREIGN_NAP_PATTERNS: readonly Pattern[] = [
  { name: "India phone (+91 99005 55588)", regex: /\+?91[ -]?99005[ -]?55588/g },
  { name: "India phone (+919900555588)", regex: /\+?919900555588/g },
  { name: "UAE phone (+971 52 647 2981)", regex: /\+?971[ -]?52[ -]?647[ -]?2981/g },
  { name: "UAE phone (+971526472981)", regex: /\+?971526472981/g },
  // Office-string fragments. Case-insensitive whole-word-ish matches.
  // "Chennai" alone is too noisy (it's a real city; copy may legitimately
  // mention it). The full "Chennai 600032" pin-code form is unambiguous.
  { name: "India office string", regex: /Olympia Tech Park|Chennai[ -]?600032|Guindy[, ]+Chennai/gi },
  { name: "Dubai office string", regex: /Jumeirah Lake Towers|JLT[, ]+Dubai|Cluster F[, ]+Jumeirah/gi },
];

const EXCLUDED_DIRS = new Set([
  "node_modules",
  ".next",
  ".git",
  "attached_assets",
  ".local",
  "dist",
  "build",
  ".turbo",
  ".vercel",
  "coverage",
]);

const EXCLUDED_FILES = new Set<string>([
  // This file itself lists every banned pattern — exempt by basename match
  // (full path comparison handled below).
  path.relative(ROOT, SELF_PATH),
]);

const SCANNED_EXTENSIONS = new Set([
  ".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs",
  ".md", ".mdx", ".json", ".html", ".css",
]);

type Hit = { file: string; pattern: string; line: number; snippet: string };

function walk(dir: string, hits: Hit[]): void {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (EXCLUDED_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, hits);
      continue;
    }
    if (!entry.isFile()) continue;
    const ext = path.extname(entry.name);
    if (!SCANNED_EXTENSIONS.has(ext)) continue;
    const rel = path.relative(ROOT, full);
    if (EXCLUDED_FILES.has(rel)) continue;
    // Guard against the audit script self-matching (path-form-tolerant).
    if (rel.endsWith("scripts/audit-no-foreign-nap.ts")) continue;
    let content: string;
    try {
      content = fs.readFileSync(full, "utf-8");
    } catch {
      continue;
    }
    for (const { name, regex } of FOREIGN_NAP_PATTERNS) {
      regex.lastIndex = 0;
      let m: RegExpExecArray | null;
      while ((m = regex.exec(content)) !== null) {
        // Compute line number by counting newlines before the match.
        const before = content.slice(0, m.index);
        const line = before.split("\n").length;
        const lineStart = before.lastIndexOf("\n") + 1;
        const lineEnd = content.indexOf("\n", m.index);
        const snippet = content
          .slice(lineStart, lineEnd === -1 ? content.length : lineEnd)
          .trim()
          .slice(0, 200);
        hits.push({ file: rel, pattern: name, line, snippet });
      }
    }
  }
}

function main(): void {
  const hits: Hit[] = [];
  walk(ROOT, hits);
  if (hits.length === 0) {
    console.log("audit-no-foreign-nap: ✓ no India/UAE NAP fragments in source tree");
    process.exit(0);
  }
  console.error(`audit-no-foreign-nap: ✗ ${hits.length} foreign-NAP fragment(s) found:\n`);
  for (const h of hits) {
    console.error(`  ${h.file}:${h.line}  [${h.pattern}]`);
    console.error(`    ${h.snippet}`);
  }
  console.error(
    "\nRemove the fragment(s) above. The canonical NAP lives in lib/seo/nap.ts and the agency operates from a single Malta address per Task 80B.",
  );
  process.exit(1);
}

main();
