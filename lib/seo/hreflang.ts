// OARC Digital — hreflang + canonical helper for the canonical-60.
//
// =============================================================================
// MALTA-FIRST STRATEGY
// =============================================================================
//
// We serve ONE domain (oarcdigital.com) to BOTH Maltese and UK audiences. The
// product, pricing, NAP, and proof are identical. Without an explicit hreflang
// cluster, Google has historically defaulted UK searchers to the .co.uk
// competitor cluster and shown stale UK answers for Malta-intent queries
// ("marketing agency Malta", "AI consulting Malta", etc.).
//
// To prevent that, every page in `TOP_PAGES` (the canonical 60) emits THREE
// `<link rel="alternate" hreflang="...">` tags, all pointing at the SAME URL:
//
//     en-MT      → primary Maltese audience signal
//     en-GB      → claim the UK SERP so .co.uk competitors don't poach intent
//     x-default  → fallback for every other locale (US, AU, ZA, etc.)
//
// We DELIBERATELY do NOT emit `en-US`. The OARC offer is Malta-anchored
// (timezone, regulatory context, on-island delivery) and we don't want US-
// intent searchers landing on a Malta-priced page expecting US service.
// Leaving en-US off lets Google route US traffic to whatever it considers
// most relevant — usually a US competitor — which is the right outcome.
//
// All three variants point at the SAME canonical URL by design. This is the
// "Malta-first" pattern: one source of truth, three locale claims. It is NOT
// a translation cluster — there is only one English variant of every page.
//
// =============================================================================
// CANONICAL OVERRIDE
// =============================================================================
//
// A handful of TOP_PAGES are intentional duplicates of a sibling pillar (e.g.
// `/solutions` is a marketing-friendly duplicate of `/automation`). For those,
// the page passes an explicit canonical so all hreflang variants AND the
// `<link rel="canonical">` tag point at the chosen winner — never at the
// duplicate URL itself. This consolidates equity on the winner.
//
// =============================================================================
// AUDIT GUARANTEES
// =============================================================================
//
// `scripts/audit-canonical.ts` (wired into gate:fast) statically asserts:
//   1. Every TOP_PAGE has a non-empty `alternates.canonical` exported.
//   2. The canonical URL's path is NOT a 308 source in any redirect map
//      (SERVICE_ALIASES, CROSS_SECTION_ALIASES, ARCHIVED_*, TASK_116_*).
//      A canonical that 308s = self-cannibalising page = HARD FAIL.
//   3. Every TOP_PAGE imports + invokes `getHreflangAlternates`.
//   4. The hreflang languages object contains exactly the three keys
//      `en-MT`, `en-GB`, `x-default`, and every value matches `canonical`.

import { isTopPage, topPageCanonical } from "./topPages";

export type HreflangAlternates = {
  canonical: string;
  languages: Record<string, string>;
};

export type HreflangOptions = {
  /**
   * Override the canonical URL emitted for this page. Use ONLY when this
   * page is an intentional duplicate of a sibling pillar (e.g. `/solutions`
   * canonicalises to `/automation`). All hreflang variants will follow the
   * override so equity flows to the chosen winner.
   *
   * Must be a fully-qualified `https://oarcdigital.com/...` URL — the audit
   * rejects bare paths or wrong-host overrides.
   */
  canonical?: string;
};

/**
 * Returns the Next.js `metadata.alternates` block for any TOP_PAGE.
 *
 * For pages NOT in `TOP_PAGES`, returns just the canonical (callers can
 * spread or replace) — voice-answer + locale signal is intentionally scarce
 * (Layer 3 anti-cannibalisation).
 *
 * @param path             App-router path (leading slash). `/` for the home.
 * @param opts.canonical   Override the canonical URL. See `HreflangOptions`.
 */
export function getHreflangAlternates(
  path: string,
  opts?: HreflangOptions,
): HreflangAlternates {
  const url = opts?.canonical ?? topPageCanonical(path);
  if (!isTopPage(path)) {
    return { canonical: url, languages: {} };
  }
  return {
    canonical: url,
    languages: {
      "en-MT": url,
      "en-GB": url,
      "x-default": url,
    },
  };
}
