// Banned AI-generated marketing phrases. Any string field on a framework
// entry (uniqueValueProp, entityFocus, llmCitableFacts.claim, conversionGoal,
// description, faqs.answer) is scanned for these phrases by
// scripts/audit-framework.ts. A hit fails the audit so the page cannot ship.
//
// SOURCE OF TRUTH: `.local/seo-phrase-blocklist.md`. This module reads that
// markdown file at module-load time and exposes the parsed list. Edit the
// markdown file, not this file, when adding/removing phrases.
//
// Matching rules:
//  - Case-insensitive.
//  - Substring match against normalised whitespace.
//  - Must match a whole-word boundary on either side (so "innovate" does not
//    flag "automation").

import fs from "node:fs";
import path from "node:path";

const BLOCKLIST_MD_PATH = path.join(process.cwd(), ".local", "seo-phrase-blocklist.md");

function loadBlocklist(): readonly string[] {
  let raw = "";
  try {
    raw = fs.readFileSync(BLOCKLIST_MD_PATH, "utf-8");
  } catch (err) {
    throw new Error(
      `phraseBlocklist: could not read source-of-truth markdown at ${BLOCKLIST_MD_PATH}: ${(err as Error).message}`,
    );
  }
  // Extract the fenced ```phrases block. There must be exactly one.
  const re = /```phrases\s*\n([\s\S]*?)```/;
  const match = raw.match(re);
  if (!match) {
    throw new Error(
      `phraseBlocklist: no \`\`\`phrases code block found in ${BLOCKLIST_MD_PATH}`,
    );
  }
  const lines = match[1].split("\n");
  const out: string[] = [];
  const seen = new Set<string>();
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    if (trimmed.startsWith("#")) continue;
    const norm = trimmed.toLowerCase();
    if (seen.has(norm)) continue;
    seen.add(norm);
    out.push(trimmed);
  }
  if (out.length === 0) {
    throw new Error(`phraseBlocklist: ${BLOCKLIST_MD_PATH} parsed to zero phrases`);
  }
  return Object.freeze(out);
}

export const BANNED_PHRASES: readonly string[] = loadBlocklist();

/**
 * Returns the first banned phrase found in `text`, or null if clean.
 * Matches are case-insensitive and whitespace-collapsed.
 */
export function findBannedPhrase(text: string): string | null {
  if (!text) return null;
  const normalised = text.toLowerCase().replace(/\s+/g, " ");
  for (const phrase of BANNED_PHRASES) {
    const p = phrase.toLowerCase();
    const idx = normalised.indexOf(p);
    if (idx < 0) continue;
    // Whole-word boundary check on BOTH edges. Without the right-edge check
    // a stem like "revolutionize" would also flag any future product copy
    // containing variants like "revolutionizes" / "revolutionized" / a
    // longer compound — sometimes that is the intent (still an AI tell)
    // but it creates surprising false positives, so we require an explicit
    // boundary char on each side. If you want a stem to match every variant,
    // list each variant explicitly in the markdown source.
    const leftChar = idx === 0 ? " " : normalised[idx - 1];
    if (/\w/.test(leftChar)) continue;
    const endIdx = idx + p.length;
    const rightChar = endIdx >= normalised.length ? " " : normalised[endIdx];
    if (/\w/.test(rightChar)) continue;
    return phrase;
  }
  return null;
}
