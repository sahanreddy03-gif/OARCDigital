// AI/voice discovery tag helpers for the top-12 priority pages.
//
// Two surfaces:
//   1. <SpeakableJsonLd path="..." /> — emits a WebPage JSON-LD node with a
//      Speakable specification targeting any element marked with the
//      `data-speakable` attribute. Targets the smart-speaker / voice-search
//      use case (Google Assistant Speakable spec).
//   2. getHreflangAlternates(path) — returns the Next.js `metadata.alternates`
//      object with the en-MT/en-GB/x-default cluster. Same canonical URL on
//      every variant since we serve a single domain to both Maltese and UK
//      audiences. NO en-US emission — that surface is intentionally not
//      claimed.
//
// Both helpers no-op for paths not in TOP_PAGES (Layer 3 anti-cannibalisation
// — voice-answer signal is intentionally scarce). Audited by
// `scripts/audit-discovery.ts`.

import { isTopPage, topPageCanonical } from "./topPages";

export type HreflangAlternates = {
  canonical: string;
  languages: Record<string, string>;
};

/**
 * Returns the `metadata.alternates` object for the top-12 pages with the
 * en-MT/en-GB/x-default hreflang cluster. For non-top pages, returns just
 * the canonical (callers can spread or replace).
 */
export function getHreflangAlternates(path: string): HreflangAlternates {
  const url = topPageCanonical(path);
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
