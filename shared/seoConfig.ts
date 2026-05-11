// Centralized SEO configuration - single source of truth for all URLs
// This ensures sitemap, routes, and components stay in sync

// Malta locations for programmatic SEO
// REDUCED for Next.js migration: 50 -> 10 (top traffic locations only).
// Archived locations are preserved here in a comment block for reference.
//
// ARCHIVED (40): naxxar, attard, mdina, rabat, marsaskala, marsaxlokk,
// birgu, msida, swieqi, mellieha, bugibba, san-pawl-il-bahar, zejtun,
// zurrieq, paola, tarxien, fgura, balzan, floriana, marsa, luqa, gudja,
// birzebbuga, kirkop, siggiewi, mqabba, lija, iklin, san-lawrenz,
// santa-venera, pieta, pembroke, swatar, ghaxaq, xghajra, kalkara,
// isla, bormla, cospicua
export const maltaLocations = [
  'valletta',
  'sliema',
  'st-julians',
  'birkirkara',
  'mosta',
  'qormi',
  'zabbar',
  'san-gwann',
  'gzira',
  'hamrun',
] as const;

// Full canonical 50-locality Malta map. The Tier-1 `maltaLocations` set above
// is what we statically render today (10 KEPT). The remaining 40 are warm-bench
// localities with full LocationProfile entries in `lib/seo/locationData.ts`,
// ready to promote into the Tier-1 list and `restore.json` without further
// research. Matches `Object.keys(locationProfiles)` 1:1.
export const maltaLocationsAll = [
  'valletta', 'sliema', 'st-julians', 'birkirkara', 'mosta', 'qormi',
  'zabbar', 'san-gwann', 'gzira', 'hamrun',
  'attard', 'balzan', 'lija', 'naxxar', 'mellieha', 'rabat', 'mdina',
  'msida', 'pieta', 'ta-xbiex', 'swieqi', 'pembroke', 'gharghur',
  'mgarr', 'dingli', 'siggiewi', 'qrendi', 'mqabba', 'zurrieq', 'luqa',
  'gudja', 'tarxien', 'paola', 'fgura', 'birzebbuga', 'marsaxlokk',
  'marsaskala', 'zejtun', 'floriana', 'san-pawl-il-bahar', 'birgu',
  'isla', 'bormla', 'kalkara', 'iklin', 'san-lawrenz', 'santa-venera',
  'swatar', 'ghaxaq', 'xghajra',
] as const;

export type MaltaLocationAll = typeof maltaLocationsAll[number];

// REDUCED for Next.js migration: 15 -> 3 (top vertical industries only).
// This list gates the /malta/{loc}/{ind} programmatic routes and the
// /services/{svc}/{ind} pairing pages. It is INTENTIONALLY narrower than
// `industryHubSlugs` below — location-paired pages multiply combinatorially
// so we keep that surface tight, while the standalone `/industries/{slug}`
// hubs can grow independently.
//
// ARCHIVED (12): cafe, bar, spa-wellness, gym-fitness, retail, igaming,
// fintech, healthcare, law-firm, car-dealership, construction, ecommerce
export const maltaIndustries = [
  'restaurant',
  'hotel',
  'real-estate',
] as const;

export type MaltaIndustry = typeof maltaIndustries[number];

// Industry hub slugs served by `app/industries/[industry]/page.tsx`.
// Single source of truth for: middleware allow-list, sitemap-industries,
// generateStaticParams, and the master /industries grid. When adding a hub:
// 1) add the data entry in `app/industries/[industry]/page.tsx`,
// 2) add the slug here,
// 3) add a card to `app/industries/page.tsx`.
// All three changes ship in the same commit (audit-core-57 walks them).
export const industryHubSlugs = [
  'restaurants',
  'hotels',
  'cafes',
  'bars',
  'igaming',
  'fintech',
  'real-estate',
  'retail',
  'ecommerce',
  'fitness',
  'wellness',
  'events',
  'healthcare-clinics',
  'legal-services',
  'professional-services',
  'construction',
  'beauty-wellness',
  'automotive',
  'education',
  'nonprofits-ngos',
] as const;

export type IndustryHubSlug = typeof industryHubSlugs[number];

// Top services available for location-based pages
// MUST match the serviceData keys in LocationService.tsx
// REDUCED for Next.js migration: 10 -> 5 (top converting services only).
// ARCHIVED (5): branding-services, video-production, ai-copywriting,
// hire-ai-employees, revenue-automation
// Task #116: digital-marketing removed (folder deleted, 308 → /services).
// Replaced with seo-services to keep 5 high-intent location-paired offers.
export const locationServices = [
  'social-media-creative-management',
  'seo-services',
  'paid-advertising',
  'web-design',
  'ai-consulting',
] as const;

// All valid service slugs - ONLY services with explicit routes in App.tsx
// These are guaranteed to render without 404s
export const allServiceSlugs = [
  // Creative & Marketing Services
  // Task #116: removed creative, media-buying, ai-copywriting, digital-marketing,
  // rapid-idea-testing — folders deleted, 308'd via SERVICE_ALIASES /
  // CROSS_SECTION_ALIASES in lib/seo/seoSets.ts.
  'social-media-creative-management',
  'social',
  'paid',
  'influencer',
  'branding',
  'branding-services',
  'ad-creative',
  'web-design',
  'video-production',
  'paid-advertising',
  'influencer-marketing',
  'presentation-pitch',
  'illustration',
  'print-packaging',
  'motion-design',
  'immersive-3d-ar',
  'email-creative',
  'design-systems',
  'ai-consulting',
  'growth-strategy',
  'performance-analytics',
  // Development Services
  // NOTE: web-apps-development is the canonical slug; web-application-development
  // is permanently 308-aliased in lib/seo/seoSets.ts (SERVICE_ALIASES) so the
  // sitemap, internal-link graph, and any consumer of allServiceSlugs only
  // ever advertise the canonical URL.
  'mobile-apps-development',
  'custom-software-development',
  'web-apps-development',
  'api-integration-services',
  'mvp-development',
  // AI Employees Hub
  // Task #116: removed ai-virtual-talent-hub — 308 → hire-ai-employees.
  'hire-ai-employees',
  'ai-sdr-agent',
  'ai-support-specialist',
  'ai-data-analyst',
  'ai-admin-agent',
  'ai-content-strategist',
  'ai-compliance-auditor',
  'ai-appointment-booker',
  'ai-real-estate-agent',
  // Revenue Automation Hub
  // Task #116: removed ai-revenue-engine, funnel-optimization-agent — 308'd.
  'revenue-automation',
  'lead-generation-engine',
  'customer-acquisition-accelerator',
  'marketing-automation-suite',
  'idea-validation-engine',
  'lead-generation',
  'customer-acquisition',
  'funnel-automation',
  // Phase C — 9 new commercial-intent service pages (Task #70)
  'seo-services',
  'saas-development',
  'content-marketing',
  'email-marketing',
  'ecommerce-development',
  'wordpress-development',
  'shopify-development',
  'devops-services',
  'database-design'
] as const;

// All valid case study slugs (from App.tsx routes - canonical names only)
export const allCaseStudySlugs = [
  'apex-fitness-collective',
  'volta-home',
  'maison-lumiere',
  'phantom-peripherals',
  'riftleague',
  'authentic-stories',
  'naturalcare-beauty',
  'venturehub-co',
  'cloudbase-technologies',
  'talentscale-solutions',
  'sportsai-interactive',
  'heritage-luxury-group',
  'digital-finance-solutions',
  'global-supply-systems',
  'healthpath-ai',
  'propflow-property-platform',
  'fanstake-sports-platform',
  'strategypulse-enterprise',
  'national-distributor-nlp',
  'cricketpulse-india',
  'nexgen-retail-ai-transformation'
] as const;

export type MaltaLocation = typeof maltaLocations[number];
export type LocationService = typeof locationServices[number];
export type ServiceSlug = typeof allServiceSlugs[number];
export type CaseStudySlug = typeof allCaseStudySlugs[number];
