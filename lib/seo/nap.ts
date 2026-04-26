import { locationProfiles } from "./locationData";

// Canonical NAP (Name / Address / Phone) for OARC Digital.
//
// Single source of truth for every place the address, phone, or email is
// rendered — JSON-LD blobs, footers, trust banners, layout metadata, UTM
// link helpers, conversational responses (instantResponses), and audit
// scripts. Every drift moment is exactly the kind of inconsistency the
// local-SEO ranking algorithm punishes, so the value is centralised here
// and the audit (`scripts/audit-nap.ts`) walks every emitted JSON-LD
// blob site-wide to verify nothing has wandered.
//
// Authoring rules:
//   - Pure module. No side effects. No imports.
//   - All exports are deeply frozen — consumers cannot mutate them.
//   - When a value changes, change it once here and rerun `gate:full`.
//   - Ta' Xbiex is NOT in this canonical record. It is permitted only in
//     emissions that originate from `lib/seo/locationData.ts` (where it
//     is a legitimate location entry, not the agency's primary address).
//   - The geo coordinates are the building footprint of "Level 1, The
//     Brewhouse, Mdina Road, Birkirkara CBD 2010" verified against the
//     Google Maps `?q=` link in app/layout.tsx.

function deepFreeze<T>(value: T): T {
  if (value === null || typeof value !== "object") return value;
  for (const key of Object.keys(value as object)) {
    deepFreeze((value as Record<string, unknown>)[key]);
  }
  return Object.freeze(value);
}

export const NAP = deepFreeze({
  name: "OARC Digital",
  alternateName: "OARC Digital Malta",

  streetAddress: "Level 1, The Brewhouse, Zone 2, Central Business District, Mdina Road",
  // Shorter address for inline rendering (e.g. Footer, TrustBlock visit tile).
  streetAddressShort: "Level 1, The Brewhouse, Mdina Road",

  addressLocality: "Birkirkara",
  addressRegion: "Birkirkara",
  postalCode: "CBD 2010",
  addressCountry: "MT",

  // E.164 form for `tel:` and JSON-LD `telephone`.
  phoneE164: "+35679711799",
  // Display form for human-rendered surfaces (Footer, TrustBlock, etc).
  phoneDisplay: "+356 7971 1799",
  // wa.me-compatible form (no leading +).
  whatsappNumber: "35679711799",
  // Separate WhatsApp line dedicated to the AI Agents service surface.
  // Routed to the AI Agents pod inbox rather than the main agency line.
  // The audit-nap.ts wa.me-tier allow-lists this number alongside the
  // primary one so /ai-agents/* and /creative pages don't false-positive.
  whatsappAgentNumber: "35699263179",

  email: "hello@oarcdigital.com",

  geo: { lat: 35.8978, lng: 14.4617 },

  // Used for `geo.region` HTML meta and JSON-LD areaServed contexts.
  countryCode: "MT",
  regionCode: "MT-09",

  // The canonical Google Maps deep-link rendered into JSON-LD `hasMap`.
  mapUrl: "https://maps.google.com/?q=Level+1+The+Brewhouse+Birkirkara+Malta",
} as const);

/**
 * Schema.org PostalAddress object for embedding in JSON-LD blobs. Frozen
 * so consumers cannot mutate it (a mutation would silently drift from
 * the canonical NAP and the audit would only catch it on the next run).
 */
export const POSTAL_ADDRESS = deepFreeze({
  "@type": "PostalAddress",
  streetAddress: NAP.streetAddress,
  addressLocality: NAP.addressLocality,
  addressRegion: NAP.addressRegion,
  postalCode: NAP.postalCode,
  addressCountry: NAP.addressCountry,
} as const);

/**
 * Schema.org GeoCoordinates object for JSON-LD `geo` fields.
 */
export const GEO_COORDINATES = deepFreeze({
  "@type": "GeoCoordinates",
  latitude: NAP.geo.lat,
  longitude: NAP.geo.lng,
} as const);

/**
 * Single-line human-readable address. Used by Footer, TrustBlock,
 * conversational responses, anywhere the full street block is not
 * appropriate.
 */
export const ADDRESS_ONE_LINE = `${NAP.streetAddressShort}, ${NAP.addressLocality} ${NAP.postalCode}, Malta`;

/**
 * The locality names permitted to appear in JSON-LD address blocks.
 * Anything else is a drift signal. Ta' Xbiex is intentionally NOT here —
 * it appears only in locationData.ts service-area pages where it is the
 * *page's* subject, not the agency's primary NAP.
 *
 * Stored as a frozen readonly tuple (not a Set) because Object.freeze
 * does NOT prevent Set mutations (`set.add()` still succeeds on a frozen
 * Set in non-strict mode). Callers do membership checks via includes()
 * which is fine at this list size.
 */
export const PERMITTED_NAP_LOCALITIES: readonly string[] = Object.freeze([
  NAP.addressLocality,
  ...Object.values(locationProfiles).map((p) => p.name),
]);
