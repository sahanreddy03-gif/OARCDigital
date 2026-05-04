// Per-slug introduction date map for industry hub pages.
//
// Single source of truth shared by:
//   - app/sitemap-industries.xml/route.ts (drives <lastmod>)
//   - app/industries/[industry]/page.tsx  (drives the visible
//     "Last updated" stamp + Service schema dateModified)
//
// Each value is the date that hub was first publicly published. Update
// only when the hub's *content* materially changes — not when the
// shared template is touched. Avoids the "100% share today's date"
// sitemap-regression flag.
export const HUB_INTRO_DATE: Record<string, string> = {
  // Pre-existing 11 (originally published with the dynamic route).
  restaurants: "2025-08-15",
  hotels: "2025-08-15",
  cafes: "2025-08-22",
  bars: "2025-08-22",
  igaming: "2025-09-05",
  fintech: "2025-09-05",
  "real-estate": "2025-09-12",
  retail: "2025-09-19",
  fitness: "2025-10-03",
  wellness: "2025-10-03",
  events: "2025-10-10",
  // Phase E new 8 (Task #108 — staggered per W7/W8/W9 calendar).
  "healthcare-clinics": "2026-04-15",
  "legal-services": "2026-04-15",
  "professional-services": "2026-04-15",
  construction: "2026-04-22",
  "beauty-wellness": "2026-04-22",
  automotive: "2026-04-22",
  education: "2026-04-29",
  "nonprofits-ngos": "2026-04-29",
};

export function hubLastUpdated(slug: string, fallback: string): string {
  return HUB_INTRO_DATE[slug] ?? fallback;
}
