// Top 12 priority pages for AI/voice discovery enrichment.
//
// These are the pages that ship the Speakable JSON-LD + en-MT/en-GB/x-default
// hreflang cluster. The 4 pillars (`/`, `/ai-agents`, `/creative`,
// `/automation`) plus the 8 highest-priority service slugs that drive the
// most commercial-intent traffic.
//
// `scripts/audit-discovery.ts` walks this list at HTTP-time and asserts each
// page emits the WebPage Speakable node and the three-language hreflang link
// tags. Adding a page here means it MUST satisfy those gates before the next
// drip batch ships — see `.local/seo-framework.md`.
//
// IMPORTANT: keep this list small. Speakable + hreflang are signals to AI
// answer engines that THIS page is the canonical voice answer for its query
// — diluting it across 100 pages dilutes the signal. Anti-cannibalisation
// applies here too (Layer 3 in the framework).

export type TopPageKind = "pillar" | "service";

export type TopPage = {
  /** App-router path (leading slash). `/` for the home pillar. */
  path: string;
  /** `pillar` rolls up to PILLAR_SCHEMAS, `service` to SERVICE_SCHEMAS. */
  kind: TopPageKind;
};

export const TOP_PAGES: readonly TopPage[] = [
  { path: "/", kind: "pillar" },
  { path: "/ai-agents", kind: "pillar" },
  { path: "/creative", kind: "pillar" },
  { path: "/automation", kind: "pillar" },
  { path: "/services/web-design", kind: "service" },
  { path: "/services/social-media-creative-management", kind: "service" },
  { path: "/services/video-production", kind: "service" },
  { path: "/services/branding", kind: "service" },
  { path: "/services/paid-advertising", kind: "service" },
  { path: "/services/marketing-automation-suite", kind: "service" },
  { path: "/services/ai-sdr-agent", kind: "service" },
  { path: "/services/seo-services", kind: "service" },
] as const;

export function isTopPage(path: string): boolean {
  return TOP_PAGES.some((p) => p.path === path);
}

export function topPageCanonical(path: string): string {
  // Home pillar emits the bare-domain canonical (no trailing slash) because
  // Next.js's Metadata API normalises canonical that way; hreflang variants
  // MUST match exactly or audit-discovery flags a mismatch.
  return path === "/" ? "https://oarcdigital.com" : `https://oarcdigital.com${path}`;
}
