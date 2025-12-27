// Centralized SEO configuration - single source of truth for all URLs
// This ensures sitemap, routes, and components stay in sync

// Malta locations for programmatic SEO
export const maltaLocations = [
  'valletta', 'sliema', 'st-julians', 'mosta', 'birkirkara',
  'qormi', 'hamrun', 'naxxar', 'zabbar', 'attard'
] as const;

// Top services available for location-based pages
// MUST match the serviceData keys in LocationService.tsx
export const locationServices = [
  'social-media-creative-management',
  'digital-marketing',
  'branding-services',
  'web-design',
  'video-production',
  'ai-copywriting',
  'hire-ai-employees',
  'revenue-automation'
] as const;

// All valid service slugs - ONLY services with explicit routes in App.tsx
// These are guaranteed to render without 404s
export const allServiceSlugs = [
  // Creative & Marketing Services
  'social-media-creative-management',
  'social',
  'paid',
  'creative',
  'influencer',
  'branding',
  'ad-creative',
  'web-design',
  'video-production',
  'paid-advertising',
  'media-buying',
  'influencer-marketing',
  'ai-copywriting',
  'digital-marketing',
  'rapid-idea-testing',
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
  'mobile-apps-development',
  'custom-software-development',
  'web-application-development',
  'api-integration-services',
  'mvp-development',
  // AI Employees Hub
  'ai-virtual-talent-hub',
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
  'ai-revenue-engine',
  'revenue-automation',
  'lead-generation-engine',
  'customer-acquisition-accelerator',
  'funnel-optimization-agent',
  'marketing-automation-suite',
  'idea-validation-engine',
  'lead-generation',
  'customer-acquisition',
  'funnel-automation'
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
