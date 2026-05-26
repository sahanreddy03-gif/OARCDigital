// Single source of truth for the Organization JSON-LD knowledge-graph block.
//
// Why this file exists (Task #118):
//   The Google Knowledge Panel + branded-SERP defence are driven by a single
//   complete Organization entity that resolves consistently across every
//   high-authority surface (home, /about, /contact, /why-us). Previously the
//   Organization builder lived inside `lib/schema/index.ts` alongside every
//   other schema helper, which made it easy for downstream surfaces to drift
//   (different sameAs lists, missing foundingDate, no contactPoint, etc.).
//
//   This module owns the Organization + founder Person entities. Every other
//   builder (`lib/schema/index.ts`, `lib/schema/shellSchemas.ts`,
//   `components/RouteSchema.tsx`) re-exports from here so a single edit
//   updates every emission site-wide.
//
// Authoring rules:
//   - Pure module. No side effects beyond reading process.env for the
//     optional Twitter override (kept for parity with prior behaviour).
//   - All emitted nodes are anchored on `BASE/#organization` and
//     `BASE/#founder` so cross-page references resolve cleanly.
//   - sameAs URLs MUST be live and owned by OARC Digital. Empty/abandoned
//     profiles read as "fake entity created for SEO" to AI answer engines
//     and damage trust — better to omit than to ship a dead one.
//   - knowsAbout entries are the topic graph that anchors entity-based
//     ranking on AI answer engines. Keep them tight (8-12 entries) and
//     rooted in services we actually deliver.

import { NAP, POSTAL_ADDRESS } from "@/lib/seo/nap";

const BASE = "https://oarcdigital.com";

const ORG_REF = { "@id": `${BASE}/#organization` } as const;

// Founder identity. The Person entity is anchored at `/about` (the single
// page where Mr Reddy is publicly named — every other surface keeps founder
// visibility low per his stated preference). Schema name is the full
// "Sahan Reddy" form so the Person entity resolves cleanly against the
// LinkedIn vanity URL `/in/sahanoarcdigital`; visible page prose calls him
// "Reddy" or "Mr Reddy" only.
const FOUNDER_LINKEDIN_DEFAULT = "https://www.linkedin.com/in/sahanoarcdigital";
const FOUNDER_SAMEAS: string[] = [
  process.env.NEXT_PUBLIC_FOUNDER_LINKEDIN ?? FOUNDER_LINKEDIN_DEFAULT,
  process.env.NEXT_PUBLIC_FOUNDER_TWITTER,
].filter((v): v is string => Boolean(v && v.trim()));

/**
 * Canonical Organization sameAs — every emission site-wide stays in lockstep
 * by importing from this list. URLs MUST be live, owned by OARC Digital, and
 * carry real engagement signals (profile photo, bio, recent activity).
 */
export const ORG_SAMEAS: readonly string[] = Object.freeze([
  "https://www.instagram.com/oarcdigital/",
  "https://www.facebook.com/profile.php?id=61584491206896",
  "https://x.com/oarcdigital",
  "https://www.linkedin.com/in/sahanoarcdigital",
  "https://www.linkedin.com/company/oarc-digital",
  "https://www.youtube.com/@oarcdigital",
  "https://www.crunchbase.com/organization/oarc-digital",
  "https://www.yellow.com.mt/oarc-digital_marketing-consultants+bkara/",
  "https://clutch.co/profile/oarc-digital",
  "https://www.goodfirms.co/company/oarc-digital",
  "https://www.agencyspotter.com/oarc-digital",
  "https://theresanaiforthat.com/ai/oarc-digital-ai-workforce-agents/",
  "https://toolhunt.io/oarc-digital-ai-workforce-agents/",
  "https://huntscreens.com/products/oarc-digital-ai-workforce-agents",
  "https://cal.com/oarc-digital-srwvnv",
]);

/**
 * The agency's founding date. Set once here so every Knowledge-Graph
 * emission carries a consistent value. Format: ISO 8601 (YYYY-MM-DD).
 */
export const ORG_FOUNDING_DATE = "2022";

/**
 * The topic graph that anchors entity-based ranking on AI answer engines.
 * Each entry is a high-level capability we deliver — kept short (8-12) so
 * the entity stays focused rather than diluted across every long-tail tag.
 */
export const ORG_KNOWS_ABOUT: readonly string[] = Object.freeze([
  "Social Media Marketing",
  "AI Automation",
  "Paid Advertising",
  "Video Production",
  "Brand Strategy",
  "Search Engine Optimisation",
  "Influencer Marketing",
  "Revenue Automation",
]);

/**
 * Founder Person entity. Referenced from `Organization.founder` via @id.
 */
export function buildPerson() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${BASE}/#founder`,
    name: "Sahan Reddy",
    givenName: "Sahan",
    familyName: "Reddy",
    jobTitle: "Founder",
    worksFor: ORG_REF,
    url: `${BASE}/about`,
    sameAs: FOUNDER_SAMEAS,
    knowsAbout: [
      "Artificial Intelligence",
      "Digital Marketing",
      "Software Development",
      "Hospitality Technology",
      "Malta Business Strategy",
    ],
  };
}

/**
 * Full Organization knowledge-graph block. Used by the home page (`/`),
 * `/about`, `/contact`, `/why-us`, and indirectly by every pillar via
 * `components/RouteSchema.tsx`.
 *
 * Properties chosen for Google Knowledge Panel + AI answer-engine
 * extraction:
 *   - name / alternateName / url / logo / description       — branded SERP
 *   - address (PostalAddress)                                — local pack
 *   - telephone / email / contactPoint                       — Knowledge Panel
 *   - founder (Person ref) + foundingDate                    — entity history
 *   - sameAs                                                 — entity disambiguation
 *   - areaServed                                             — service geography
 *   - knowsAbout                                             — topic graph
 */
export function buildOrganization() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE}/#organization`,
    name: NAP.name,
    alternateName: NAP.alternateName,
    url: BASE,
    logo: `${BASE}/oarc-logo.png`,
    image: `${BASE}/oarc-logo.png`,
    description:
      "Malta's first AI-native creative, automation & intelligent agents agency. Brand strategy, social media, video, and AI systems for Maltese businesses.",
    telephone: NAP.phoneE164,
    email: NAP.email,
    address: POSTAL_ADDRESS,
    foundingDate: ORG_FOUNDING_DATE,
    founder: { "@id": `${BASE}/#founder` },
    areaServed: { "@type": "Country", name: "Malta" },
    knowsAbout: [...ORG_KNOWS_ABOUT],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: NAP.phoneE164,
        email: NAP.email,
        areaServed: "MT",
        availableLanguage: ["English", "Maltese"],
      },
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: NAP.phoneE164,
        email: NAP.email,
        areaServed: ["MT", "EU"],
        availableLanguage: ["English"],
      },
    ],
    slogan: "AI-Native Marketing That Drives Revenue",
    sameAs: [...ORG_SAMEAS],
  };
}
