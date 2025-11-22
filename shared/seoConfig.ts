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
  // AI Creative Services (with explicit routes)
  'social-media-creative-management',
  'ad-creative',
  'web-design',
  'mobile-apps-development',
  'video-production',
  'motion-design',
  'branding-services',
  'design-systems',
  'email-creative',
  'presentation-pitch',
  'illustration',
  'print-packaging',
  'immersive-3d-ar',
  'ai-copywriting',
  'paid-advertising',
  'media-buying',
  'influencer-marketing',
  'ai-consulting',
  // AI Employees (with explicit routes)
  'hire-ai-employees',
  'ai-sdr',
  'ai-support',
  'ai-marketing',
  'ai-writer',
  'ai-analyst',
  'ai-financial-analyst',
  'ai-admin',
  // Revenue Automation (with explicit routes)
  'revenue-automation',
  'funnel-automation',
  'lead-generation',
  'customer-acquisition',
  'digital-marketing',
  'rapid-idea-testing'
] as const;

// All valid case study slugs (from App.tsx routes)
export const allCaseStudySlugs = [
  'tefal',
  'azzaro',
  'body-shop',
  'dont-make-ads',
  'lenovo-legion',
  'esl-gaming',
  'gym-group',
  'antler',
  'sherweb-ai-adoption',
  'peopleready-ai-team',
  'cleverly-automation',
  'fanduel-chuckgpt',
  'tapestry-automation',
  'bancolombia-automation',
  'jbs-automation',
  'acclaim-autism'
] as const;

export type MaltaLocation = typeof maltaLocations[number];
export type LocationService = typeof locationServices[number];
export type ServiceSlug = typeof allServiceSlugs[number];
export type CaseStudySlug = typeof allCaseStudySlugs[number];
