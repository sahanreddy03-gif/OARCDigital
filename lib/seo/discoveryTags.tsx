// AI/voice discovery tag helpers for the canonical-60 priority pages.
//
// Two surfaces:
//   1. <SpeakableJsonLd path="..." /> — emits a WebPage JSON-LD node with a
//      Speakable specification targeting any element marked with the
//      `data-speakable` attribute. Targets the smart-speaker / voice-search
//      use case (Google Assistant Speakable spec).
//   2. getHreflangAlternates(path, opts?) — re-exported from `./hreflang` for
//      backwards compatibility. Source of truth lives in `lib/seo/hreflang.ts`
//      (Task #134). New callers should import directly from `@/lib/seo/hreflang`.
//
// SpeakableJsonLd no-ops for paths not in TOP_PAGES (Layer 3 anti-
// cannibalisation — voice-answer signal is intentionally scarce). Audited by
// `scripts/audit-discovery.ts`. Hreflang/canonical consistency is audited by
// `scripts/audit-canonical.ts`.

import { isTopPage, topPageCanonical } from "./topPages";
export { getHreflangAlternates } from "./hreflang";
export type { HreflangAlternates, HreflangOptions } from "./hreflang";

/**
 * Inline JSON-LD `<script>` tag emitting a WebPage node with a Speakable
 * specification. Renders nothing for non-top paths so callers can mount
 * unconditionally without leaking the signal.
 */
export function SpeakableJsonLd({ path }: { path: string }) {
  if (!isTopPage(path)) return null;
  const url = topPageCanonical(path);
  const data = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["[data-speakable]"],
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
