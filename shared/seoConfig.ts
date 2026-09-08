// Centralized SEO configuration - single source of truth for all URLs
// This ensures sitemap, routes, and components stay in sync

import {
  historicalIndustries,
  historicalMatrixLocations,
} from "./historicalProgrammaticInventory";

// Exact 49-location set published in the historical 7,350-URL sitemap.
// The checked-in manifest is the authority; do not infer this list from
// comments or the broader modern locality-profile catalogue.
export const maltaLocations = historicalMatrixLocations;

// Broader modern profile catalogue. These five localities were researched
// after the historical sitemap and remain available for content work, but are
// not silently added to the restored published matrix.
export const maltaLocationsAll = Array.from(new Set([
  ...historicalMatrixLocations,
  'ta-xbiex',
  'qrendi',
  'dingli',
  'gharghur',
  'mgarr',
]));

export type MaltaLocationAll = typeof maltaLocationsAll[number];

// Exact 15-industry set published in the historical Malta matrix.
export const maltaIndustries = historicalIndustries;

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
  // Task #116: removed media-buying, ai-copywriting, digital-marketing,
  // rapid-idea-testing — folders deleted, 308'd via SERVICE_ALIASES /
  // CROSS_SECTION_ALIASES in lib/seo/seoSets.ts.
  // Task #294: creative, brand, reputation restored as Studio realm pages.
  'creative',
  'brand',
  'reputation',
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
  'api-integration',
  'mvp-development',
  // AI Employees Hub
  // Task #116: removed ai-virtual-talent-hub — 308 → hire-ai-employees.
  'hire-ai-employees',
  'ai-sdr-agent',
  'ai-support-specialist',
  'ai-data-analyst',
  'ai-admin-agent',
  'ai-compliance-auditor',
  'ai-appointment-booker',
  'ai-restaurant-voice-host',
  'ai-voice-receptionist',
  'ai-voice-csr',
  'ai-voice-dispatcher',
  'ai-voice-sales',
  'ai-voice-follow-up',
  'ai-real-estate-agent',
  'custom-ai-agents',
  'conversational-commerce',
  'ai-employee-service-desk',
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
  'database-design',
  // Machine realm dept pages (Task #295)
  'ai-staff',
  'automation',
  'operations',
  'clarity',
  'transformation',
  // Remaining department index pages (Task #296)
  'growth',
  'sales',
  'media',
  'social'
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
