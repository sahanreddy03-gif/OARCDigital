import { locationProfiles } from "./locationData";
import {
  maltaLocations,
  industryHubSlugs,
  allServiceSlugs,
} from "../../shared/seoConfig";

const KEPT_LOCATIONS = new Set<string>(maltaLocations);
// Validator below checks INDUSTRY_REDIRECTS targets resolve to a real hub.
// Hubs are the broader `industryHubSlugs` set, not the location-paired
// `maltaIndustries` set, so a redirect like `healthcare → healthcare-clinics`
// is valid even though `healthcare-clinics` is not a maltaIndustries slug.
const KEPT_INDUSTRY_HUBS = new Set<string>(industryHubSlugs);
const ALL_SERVICES = new Set<string>(allServiceSlugs);

// NOTE: this module is imported by `middleware.ts`, which compiles to the Edge
// Runtime. Edge Runtime forbids `node:fs` / `node:path`. The build-time
// "service-dir exists on disk" check therefore lives in
// `scripts/verify-redirects.ts` (Node-runtime smoke test), not here. The
// in-module validator below is kept to the pure-data checks that Edge can run.

function haversineKm(
  a: { lat: number; lng: number },
  b: { lat: number; lng: number },
): number {
  const R = 6371;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

function buildArchivedLocationMap(): Record<string, string> {
  const keptProfiles = Array.from(KEPT_LOCATIONS).flatMap((slug) => {
    const p = locationProfiles[slug];
    return p ? [{ slug, geo: p.geo }] : [];
  });

  const map: Record<string, string> = {};
  for (const [slug, profile] of Object.entries(locationProfiles)) {
    if (KEPT_LOCATIONS.has(slug)) continue;
    let bestSlug = keptProfiles[0].slug;
    let bestDist = Infinity;
    for (const k of keptProfiles) {
      const d = haversineKm(profile.geo, k.geo);
      if (d < bestDist) {
        bestDist = d;
        bestSlug = k.slug;
      }
    }
    map[slug] = bestSlug;
  }
  return map;
}

export const ARCHIVED_LOCATION_REDIRECTS: Readonly<Record<string, string>> =
  Object.freeze(buildArchivedLocationMap());

// Hand-curated legacy/archived industry slugs → canonical hub slug.
// Targets must resolve in `industryHubSlugs` (validated below). The current
// canonical hubs (restaurants, hotels, cafes, bars, igaming, fintech,
// real-estate, retail, fitness, wellness, events, healthcare-clinics,
// legal-services, professional-services, construction, beauty-wellness,
// automotive, education, nonprofits-ngos) are NOT listed here — they serve
// directly via `app/industries/[industry]/page.tsx` without a redirect hop.
// Only Vite-era / SEO-domination-era archived URLs need a 308 to preserve
// inbound link equity.
export const INDUSTRY_REDIRECTS: Readonly<Record<string, string>> = Object.freeze({
  // Singular legacy slugs from the maltaIndustries-only era → plural hub.
  restaurant: "restaurants",
  hotel: "hotels",
  // Vite-era singular variants → current hub.
  cafe: "cafes",
  bar: "bars",
  "spa-wellness": "beauty-wellness",
  "gym-fitness": "fitness",
  healthcare: "healthcare-clinics",
  "law-firm": "legal-services",
  "car-dealership": "automotive",
  ecommerce: "retail",
});

// Archived /services/* slugs whose page directory does not exist.
// (Other "archived" service slugs from the SEO Domination prompt —
// video-production, ai-copywriting, hire-ai-employees, revenue-automation —
// still have live `app/services/*` directories so we deliberately do NOT
// redirect them. They are kept live until the Tier-2 consolidation task.)
export const ARCHIVED_SERVICE_REDIRECTS: Readonly<Record<string, string>> = Object.freeze({
  "branding-services": "branding",
});

// Build-time validation: fail fast if any redirect target is missing.
// Runs once at module load (server start / build).
(function validateRedirectTargets() {
  const errors: string[] = [];
  for (const [from, to] of Object.entries(ARCHIVED_LOCATION_REDIRECTS)) {
    if (!KEPT_LOCATIONS.has(to)) {
      errors.push(`ARCHIVED_LOCATION_REDIRECTS: ${from} -> ${to} (target not in maltaLocations)`);
    }
  }
  for (const [from, to] of Object.entries(INDUSTRY_REDIRECTS)) {
    if (!KEPT_INDUSTRY_HUBS.has(to)) {
      errors.push(`INDUSTRY_REDIRECTS: ${from} -> ${to} (target not in industryHubSlugs)`);
    }
  }
  for (const [from, to] of Object.entries(ARCHIVED_SERVICE_REDIRECTS)) {
    if (!ALL_SERVICES.has(to)) {
      errors.push(`ARCHIVED_SERVICE_REDIRECTS: ${from} -> ${to} (target not in allServiceSlugs)`);
    }
  }
  if (errors.length > 0) {
    // eslint-disable-next-line no-console
    console.error("[redirectMap] Invalid redirect targets:\n  " + errors.join("\n  "));
    if (process.env.NODE_ENV === "production") {
      throw new Error("[redirectMap] Invalid redirect targets — see console.");
    }
  }
})();
