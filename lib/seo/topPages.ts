// OARC Digital — canonical Top 40 priority pages.
//
// AUTHORITATIVE source of truth for which pages get the heavy SEO/AEO/AI
// discovery treatment (Speakable JSON-LD, en-MT/en-GB/x-default hreflang,
// audit-discovery walks, drip-batch ordering).
//
// Order is Sahan's stated preference (May 2026): the first 4 are
// "super-priority" core pillars, followed by main creative → AI →
// software → more-creative → marketing → revenue → supporting/conversion.
// Rearranging requires a Sahan ack — every audit gate keys off this order.
//
// `tier` semantics:
//   "core"       — top 4 super-priority pillars; every gate change blocks
//                  on these first.
//   "service"    — service-tier pages; Speakable + hreflang treatment.
//   "supporting" — conversion/utility shells (services index, contact,
//                  pricing, blog, etc.). Discovery audit applies but
//                  Speakable is optional.
//
// `kind` is kept for backwards compat with the older 12-page schema and
// the audit-discovery script's pillar/service routing.
//
// Audit script: `scripts/audit-discovery.ts` walks this list at HTTP-time.

export type TopPageKind = "pillar" | "service";
export type TopPageTier = "core" | "service" | "supporting";

export type TopPage = {
  /** App-router path (leading slash). `/` for the home pillar. */
  path: string;
  /** `pillar` rolls up to PILLAR_SCHEMAS, `service` to SERVICE_SCHEMAS. */
  kind: TopPageKind;
  /** Priority tier — `core` = super-priority top 4. */
  tier: TopPageTier;
};

export const TOP_PAGES: readonly TopPage[] = [
  // ── Tier 1: super-priority core pillars (top 4) ────────────────────────
  { path: "/",                                                   kind: "pillar",  tier: "core" },
  { path: "/creative",                                           kind: "pillar",  tier: "core" },
  { path: "/ai-agents",                                          kind: "pillar",  tier: "core" },
  { path: "/solutions",                                          kind: "pillar",  tier: "core" },

  // ── Tier 2: main creative services (3) ─────────────────────────────────
  { path: "/services/social-media-creative-management",          kind: "service", tier: "service" },
  { path: "/services/branding",                                  kind: "service", tier: "service" },
  { path: "/services/video-production",                          kind: "service", tier: "service" },

  // ── Tier 2: AI services (5) ────────────────────────────────────────────
  { path: "/services/ai-consulting",                             kind: "service", tier: "service" },
  { path: "/services/ai-sdr-agent",                              kind: "service", tier: "service" },
  { path: "/services/ai-support-specialist",                     kind: "service", tier: "service" },
  { path: "/services/ai-appointment-booker",                     kind: "service", tier: "service" },
  { path: "/services/ai-data-analyst",                           kind: "service", tier: "service" },

  // ── Tier 2: software services (5) ──────────────────────────────────────
  { path: "/services/custom-software-development",               kind: "service", tier: "service" },
  { path: "/services/saas-development",                          kind: "service", tier: "service" },
  { path: "/services/mobile-apps-development",                   kind: "service", tier: "service" },
  { path: "/services/devops-services",                           kind: "service", tier: "service" },
  { path: "/services/web-apps-development",                      kind: "service", tier: "service" },

  // ── Tier 2: more creative services (5) ─────────────────────────────────
  { path: "/services/web-design",                                kind: "service", tier: "service" },
  { path: "/services/social",                                    kind: "service", tier: "service" },
  { path: "/services/influencer",                                kind: "service", tier: "service" },
  { path: "/services/motion-design",                             kind: "service", tier: "service" },
  { path: "/services/presentation-pitch",                        kind: "service", tier: "service" },

  // ── Tier 2: marketing & growth services (5) ────────────────────────────
  { path: "/services/paid-advertising",                          kind: "service", tier: "service" },
  { path: "/services/seo-services",                              kind: "service", tier: "service" },
  { path: "/services/email-marketing",                           kind: "service", tier: "service" },
  { path: "/services/content-marketing",                         kind: "service", tier: "service" },
  { path: "/services/lead-generation",                           kind: "service", tier: "service" },

  // ── Tier 2: revenue & automation services (5) ──────────────────────────
  { path: "/services/marketing-automation-suite",                kind: "service", tier: "service" },
  { path: "/services/revenue-automation",                        kind: "service", tier: "service" },
  { path: "/services/funnel-automation",                         kind: "service", tier: "service" },
  { path: "/services/customer-acquisition-accelerator",          kind: "service", tier: "service" },
  { path: "/services/hire-ai-employees",                         kind: "service", tier: "service" },

  // ── Tier 3: supporting / conversion shells (8) ─────────────────────────
  { path: "/services",                                           kind: "pillar",  tier: "supporting" },
  { path: "/our-work",                                           kind: "pillar",  tier: "supporting" },
  { path: "/contact",                                            kind: "pillar",  tier: "supporting" },
  { path: "/pricing",                                            kind: "pillar",  tier: "supporting" },
  { path: "/why-us",                                             kind: "pillar",  tier: "supporting" },
  { path: "/blog",                                               kind: "pillar",  tier: "supporting" },
  { path: "/automation",                                         kind: "pillar",  tier: "supporting" },
  { path: "/tools",                                              kind: "pillar",  tier: "supporting" },
] as const;

/** Top 4 super-priority pages — every gate change blocks on these. */
export const CORE_TOP_PAGES: readonly TopPage[] = TOP_PAGES.filter(
  (p) => p.tier === "core",
);

export function isTopPage(path: string): boolean {
  return TOP_PAGES.some((p) => p.path === path);
}

export function isCorePage(path: string): boolean {
  return CORE_TOP_PAGES.some((p) => p.path === path);
}

export function topPageCanonical(path: string): string {
  // Home pillar emits the bare-domain canonical (no trailing slash) because
  // Next.js's Metadata API normalises canonical that way; hreflang variants
  // MUST match exactly or audit-discovery flags a mismatch.
  return path === "/" ? "https://oarcdigital.com" : `https://oarcdigital.com${path}`;
}
