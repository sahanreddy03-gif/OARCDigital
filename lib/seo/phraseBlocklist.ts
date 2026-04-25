// Banned AI-generated marketing phrases. Any string field on a framework
// entry (uniqueValueProp, entityFocus, llmCitableFacts.claim, conversionGoal,
// description, faqs.answer) is scanned for these phrases by
// scripts/audit-framework.ts. A hit fails the audit so the page cannot ship.
//
// Maintained as a per-task drop set — Sahan added the W1 cohort in Task #83.
// Add new phrases as we catch more LLM tells. Removing a phrase is a
// deliberate decision (e.g. it was a false positive on a real product term).
//
// Matching rules:
//  - Case-insensitive.
//  - Substring match against normalised whitespace.
//  - Must match a whole-word boundary on either side (so "innovate" does not
//    flag "automation").

export const BANNED_PHRASES: ReadonlyArray<string> = [
  "dive into",
  "deep dive into",
  "in today's fast-paced world",
  "in today's digital landscape",
  "in today's competitive market",
  "in the realm of",
  "unlock the power of",
  "unleash the power of",
  "harness the power of",
  "leverage cutting-edge",
  "leverage the power of",
  "revolutionize",
  "revolutionise",
  "game-changer",
  "game changer",
  "in this article we will explore",
  "in this article, we will explore",
  "in this post we will explore",
  "look no further",
  "are you tired of",
  "the world of digital",
  "navigate the complexities",
  "in conclusion",
  "to sum up",
  "embark on a journey",
  "supercharge your",
  "next-level",
  "best-in-class",
  "world-class solutions",
  "transformative experience",
  "seamless integration",
  "robust solution",
  "cutting-edge technology",
  "state-of-the-art",
  "tailored to your unique",
  "tailored to meet your unique",
  "elevate your business",
  "elevate your brand",
  "take your business to the next level",
  "delve into",
  "embrace the future",
  "stay ahead of the curve",
];

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
    // list each variant explicitly in BANNED_PHRASES.
    const leftChar = idx === 0 ? " " : normalised[idx - 1];
    if (/\w/.test(leftChar)) continue;
    const endIdx = idx + p.length;
    const rightChar = endIdx >= normalised.length ? " " : normalised[endIdx];
    if (/\w/.test(rightChar)) continue;
    return phrase;
  }
  return null;
}
