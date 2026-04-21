import * as fs from "node:fs";
import * as path from "node:path";
import { locationProfiles } from "./locationData";
import { maltaLocations, maltaIndustries, allServiceSlugs } from "../../shared/seoConfig";

const KEPT_LOCATIONS = new Set<string>(maltaLocations);
const KEPT_INDUSTRIES = new Set<string>(maltaIndustries);
const ALL_SERVICES = new Set<string>(allServiceSlugs);

// Best-effort check that a service slug has a real `app/services/<slug>/`
// directory. Used by the build-time validator below so we catch destinations
// that exist in the slug allowlist but have no actual page.
function serviceDirExists(slug: string): boolean {
  try {
    const dir = path.join(process.cwd(), "app", "services", slug);
    return fs.statSync(dir).isDirectory();
  } catch {
    return false;
  }
}

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

// Hand-curated archived industry slugs → nearest KEPT industry (singular,
// matching `maltaIndustries` and `app/industries/[industry]/generateStaticParams`).
// Covers both plural slugs (used in the /industries index links) and singular
// slugs (older inbound links from the Vite era).
export const INDUSTRY_REDIRECTS: Readonly<Record<string, string>> = Object.freeze({
  // plural canonicalisation (kept already as singular)
  restaurants: "restaurant",
  hotels: "hotel",
  // archived plurals → nearest KEPT singular
  cafes: "restaurant",
  bars: "restaurant",
  igaming: "real-estate",
  fintech: "real-estate",
  retail: "real-estate",
  fitness: "hotel",
  wellness: "hotel",
  events: "hotel",
  // legacy singular variants (Vite-era URLs) → KEPT singular
  cafe: "restaurant",
  bar: "restaurant",
  "spa-wellness": "hotel",
  "gym-fitness": "hotel",
  healthcare: "real-estate",
  "law-firm": "real-estate",
  "car-dealership": "real-estate",
  construction: "real-estate",
  ecommerce: "restaurant",
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
    if (!KEPT_INDUSTRIES.has(to)) {
      errors.push(`INDUSTRY_REDIRECTS: ${from} -> ${to} (target not in maltaIndustries)`);
    }
  }
  for (const [from, to] of Object.entries(ARCHIVED_SERVICE_REDIRECTS)) {
    if (!ALL_SERVICES.has(to)) {
      errors.push(`ARCHIVED_SERVICE_REDIRECTS: ${from} -> ${to} (target not in allServiceSlugs)`);
    } else if (!serviceDirExists(to)) {
      errors.push(`ARCHIVED_SERVICE_REDIRECTS: ${from} -> ${to} (no app/services/${to}/ directory)`);
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
