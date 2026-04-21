// Unique page content generator for the Malta route family.
// Goal: every Malta page must be readably DIFFERENT from every other
// Malta page — no slot-and-fill template clones. We achieve this by
// fusing per-location, per-service, and per-industry knowledge into
// the rendered prose, FAQ, and JSON-LD.
//
// Visual structure of the routes is unchanged (pixel-identical) —
// only the text and the schema payload differs per URL.

import {
  getLocationProfile,
  type LocationProfile,
} from './locationData';
import {
  localBusinessSchema,
  createServiceSchema,
} from '@/utils/structuredData';
import { createBreadcrumbSchema } from '@/utils/advancedSchema';

// ---------------------------------------------------------------------------
// Service knowledge — one entry per KEPT service slug
// ---------------------------------------------------------------------------

export type ServiceProfile = {
  slug: string;
  name: string;
  shortName: string;          // for headlines, e.g. "Social Media"
  description: string;
  benefits: string[];
  process: { step: string; description: string }[];
  pricingFromEUR: number;     // monthly
  cta: string;
  bestForLocationDensity: 'high' | 'medium' | 'low' | 'any';
  // hooks the generator uses to produce per-location framing
  whyHere: (loc: LocationProfile) => string;
  serviceFaq: (loc: LocationProfile) => { q: string; a: string }[];
};

const PRICING_MULTIPLIER = { high: 1.25, medium: 1.0, low: 0.85 };

function locationPricing(base: number, loc: LocationProfile): number {
  return Math.round((base * PRICING_MULTIPLIER[loc.businessDensity]) / 50) * 50;
}

export const serviceProfiles: Record<string, ServiceProfile> = {
  'social-media-creative-management': {
    slug: 'social-media-creative-management',
    name: 'Social Media Management',
    shortName: 'Social Media',
    description: 'Daily Instagram, TikTok, Facebook and LinkedIn content production, scheduling, community management, and reporting — built around the audience that actually buys from you.',
    benefits: [
      'Original content production every week — no recycled stock or generic AI slop',
      'Platform-native creative: vertical video for TikTok and Reels, carousels for Instagram, long-form for LinkedIn',
      'Community management within agreed response SLAs',
      'Monthly performance report with platform analytics and next-month plan',
      'A senior strategist on every account — never an account-manager handover',
    ],
    process: [
      { step: 'Discovery', description: 'We map your audience, competitors, and what is already (and isn\'t) working organically' },
      { step: 'Strategy', description: 'A 90-day content plan with hooks, formats, and posting cadence by platform' },
      { step: 'Production', description: 'Weekly shoots, edits, captions, hashtags, and scheduling — all handled' },
      { step: 'Optimise', description: 'Monthly reporting, A/B testing on hooks and formats, and continuous iteration' },
    ],
    pricingFromEUR: 1497,
    cta: 'Start Your Social Media Engine',
    bestForLocationDensity: 'any',
    whyHere: (loc) =>
      `In ${loc.name}, social media isn\'t optional — ${loc.audienceProfile.toLowerCase()} ${loc.populationDensity > 7000 ? 'A high-density audience like this one rewards platform-native creative and punishes recycled, low-effort posting.' : 'A community-scale audience like this one rewards founder-led, authentic content over slick brand polish.'}`,
    serviceFaq: (loc) => [
      {
        q: `How often should a ${loc.name} business post on Instagram and TikTok?`,
        a: `For ${loc.name} businesses we recommend a minimum of 3 Reels and 4–5 Stories per week, with TikTok layered in for any business targeting the under-35 audience that dominates ${loc.populationDensity > 7000 ? 'this dense urban catchment' : 'central Malta\'s shopper journey'}. Posting cadence matters less than consistency and platform-native format.`,
      },
      {
        q: `Will the content actually be filmed in ${loc.name}?`,
        a: `Yes. Where the brand benefits from a sense of place — and in ${loc.name} it almost always does, given landmarks like ${loc.landmarks.slice(0, 2).join(' and ')} — we shoot on location. For pure product or service content we shoot in our Birkirkara studio.`,
      },
      {
        q: `How do you handle the ${loc.audienceProfile.includes('multicultural') || loc.audienceProfile.includes('international') ? 'multilingual' : 'Maltese vs English'} audience in ${loc.name}?`,
        a: `${loc.audienceProfile.includes('multicultural') ? `${loc.name} has one of the most diverse audiences on the island, so we plan content in English with Maltese, Italian, and other community languages layered in where the data shows it converts.` : `For ${loc.name} we typically run a bilingual Maltese + English content strategy — most local-language posts outperform English-only versions by 30–60% on Facebook.`}`,
      },
    ],
  },

  'digital-marketing': {
    slug: 'digital-marketing',
    name: 'Digital Marketing',
    shortName: 'Digital Marketing',
    description: 'Multi-channel digital marketing — SEO, paid search, social, email, and analytics — orchestrated as one revenue system rather than disconnected tactics.',
    benefits: [
      'A single integrated strategy across SEO, paid, social, and email',
      'Local Malta SEO with on-page, technical, and Google Business Profile work',
      'Quarterly strategy reviews with the senior team',
      'Transparent performance dashboard you own — no agency lock-in',
      'Built-in compliance for regulated sectors (iGaming, finance, healthcare)',
    ],
    process: [
      { step: 'Audit', description: 'Channel-by-channel audit with quantified opportunity per lever' },
      { step: 'Plan', description: 'A 12-month roadmap with quarterly milestones and a budget split by channel' },
      { step: 'Build', description: 'Site, content, ads, automation, and tracking — all built and integrated' },
      { step: 'Iterate', description: 'Monthly reporting and quarterly strategy reviews — channels rebalanced based on what is converting' },
    ],
    pricingFromEUR: 2497,
    cta: 'Get a Digital Marketing Audit',
    bestForLocationDensity: 'any',
    whyHere: (loc) =>
      `Digital marketing in ${loc.name} demands a different mix than the rest of Malta. With ${loc.primaryIndustries.slice(0, 2).join(' and ')} dominating the local economy, search intent and ad targeting both look very different here than they do in Sliema or Valletta.`,
    serviceFaq: (loc) => [
      {
        q: `How do you approach SEO for a business based in ${loc.name}?`,
        a: `We start from local intent: "${loc.primaryIndustries[0]} ${loc.name}", "${loc.primaryIndustries[0]} near me", and the long-tail variations that surrounding towns like ${loc.nearestLocations.slice(0, 2).join(' and ')} use to find businesses in ${loc.name}. From there we build out on-page, technical, and Google Business Profile.`,
      },
      {
        q: `Which channels work best for a ${loc.name} business?`,
        a: `It depends on the offer, but for ${loc.name} we typically see ${loc.businessDensity === 'high' ? 'paid search and Meta retargeting' : 'Facebook organic and Google Business Profile'} produce the strongest near-term ROI, with SEO compounding over 6–12 months.`,
      },
      {
        q: `Do you handle Google Ads as well as Meta Ads for ${loc.name}?`,
        a: `Yes — both, plus LinkedIn for B2B and TikTok for under-35 audiences. We always start with the channel where intent is highest for the offer, then expand based on performance.`,
      },
    ],
  },

  'paid-advertising': {
    slug: 'paid-advertising',
    name: 'Paid Advertising',
    shortName: 'Paid Ads',
    description: 'Meta Ads, Google Ads, and TikTok Ads management with creative production included — built to drive measurable bookings, leads, and sales rather than vanity metrics.',
    benefits: [
      'Campaign strategy aligned to your CAC and LTV — not impressions',
      'Ad creative production included (statics, video, scripts, copy)',
      'AI-assisted targeting tuned for Malta-specific audiences',
      'Weekly reporting on spend, CPL, CPA, and ROAS',
      'Transparent ad-account ownership — you keep every asset',
    ],
    process: [
      { step: 'Audit', description: 'Review existing ad spend, account structure, and creative — quantify the waste' },
      { step: 'Strategy', description: 'New campaign architecture, audience plan, and creative brief' },
      { step: 'Launch', description: 'Build, QA, and launch campaigns with a weekly creative refresh schedule' },
      { step: 'Scale', description: 'Scale what is converting, kill what is not, expand into adjacent audiences' },
    ],
    pricingFromEUR: 1997,
    cta: 'Launch a Paid Ads Campaign',
    bestForLocationDensity: 'high',
    whyHere: (loc) =>
      `${loc.name} is one of the most ${loc.businessDensity === 'high' ? 'competitive paid-media markets in Malta' : 'rewarding paid-media markets in Malta — competition per impression is lower here than in Sliema or St. Julians'}, which means ${loc.businessDensity === 'high' ? 'creative quality, not budget, is what wins' : 'a well-targeted campaign can outperform much larger budgets running on autopilot'}.`,
    serviceFaq: (loc) => [
      {
        q: `What ad budget do I need to see results in ${loc.name}?`,
        a: `For most ${loc.name} businesses we recommend a starting media budget of €1,500–€3,000/month for Meta or Google Ads, plus our management fee. Below that, the data is too thin to optimise reliably.`,
      },
      {
        q: `Will my ads only show to people in ${loc.name}?`,
        a: `For local-intent campaigns we typically target a 3–5km radius around ${loc.name} plus the nearest catchment towns (${loc.nearestLocations.join(', ')}). For e-commerce or B2B we usually expand island-wide and beyond.`,
      },
      {
        q: `How do you handle compliance for regulated industries in ${loc.name}?`,
        a: `${loc.primaryIndustries.includes('iGaming') ? 'For iGaming and any regulated vertical, every creative is reviewed for MGA and platform compliance before launch.' : 'For any regulated category — finance, healthcare, alcohol — we follow Meta and Google\'s policy stack and keep all approvals on file.'}`,
      },
    ],
  },

  'web-design': {
    slug: 'web-design',
    name: 'Web Design & Development',
    shortName: 'Web Design',
    description: 'Custom, mobile-first websites built for conversion, search, and Core Web Vitals — not for design awards.',
    benefits: [
      'Conversion-focused architecture mapped to your buyer journey',
      'Core Web Vitals scores in the 95+ range out of the box',
      'Local Malta SEO setup at launch (schema, GBP, sitemap, robots)',
      'CMS your team can actually update without a developer',
      'Ongoing performance and security maintenance optional',
    ],
    process: [
      { step: 'Discovery', description: 'Audience, journey, competitors, and the conversion goals the site has to hit' },
      { step: 'UX', description: 'Wireframes, copy outline, and a prototype reviewed before any visual design' },
      { step: 'Build', description: 'Design, development, content load, integrations, and full QA' },
      { step: 'Launch', description: 'SEO setup, analytics, training, and a 30-day post-launch optimisation window' },
    ],
    pricingFromEUR: 6500,
    cta: 'Scope a Website Project',
    bestForLocationDensity: 'any',
    whyHere: (loc) =>
      `For a ${loc.name} business, the website has to do double duty — convert the local audience that already knows you AND rank for the wider Malta search demand around ${loc.primaryIndustries[0]} and ${loc.primaryIndustries[1] ?? loc.primaryIndustries[0]}. Most ${loc.name} sites we audit fail one or the other.`,
    serviceFaq: (loc) => [
      {
        q: `How long does a website project take for a ${loc.name} business?`,
        a: `A standard 8–12 page website ships in 6–8 weeks from kickoff. Larger e-commerce or multi-language sites take 10–14 weeks. We never compromise QA to hit a date.`,
      },
      {
        q: `Will the new site rank in Google for ${loc.name} searches?`,
        a: `It will be set up to. Local SEO is built in at launch — schema, Google Business Profile, ${loc.name}-targeted on-page content, and a sitemap submitted to Google Search Console. Rankings still take 3–6 months to mature.`,
      },
      {
        q: `Do you build on WordPress, Webflow, or Next.js?`,
        a: `All three, depending on the use case. Most ${loc.name} businesses end up on Webflow or WordPress; tech and SaaS clients usually pick Next.js for the performance ceiling.`,
      },
    ],
  },

  'ai-consulting': {
    slug: 'ai-consulting',
    name: 'AI Consulting',
    shortName: 'AI Consulting',
    description: 'Strategic AI adoption for Malta businesses — readiness assessment, roadmap, custom build, and team enablement. We deliver working AI systems, not slide decks.',
    benefits: [
      '90-day AI readiness assessment with quantified ROI per use case',
      'A prioritised roadmap of 3–7 AI initiatives by impact and effort',
      'Custom build of the highest-impact use case (chatbot, workflow agent, internal copilot)',
      'Team enablement and prompt-engineering training',
      'Ongoing optimisation as models and tools evolve',
    ],
    process: [
      { step: 'Audit', description: 'Workflow-by-workflow audit identifying AI opportunities, data readiness, and risks' },
      { step: 'Roadmap', description: 'A prioritised 6–12 month adoption plan with phasing and success metrics' },
      { step: 'Build', description: 'We build the highest-impact use case end to end — agent, workflow, or copilot' },
      { step: 'Enable', description: 'Team training, documentation, and ongoing performance monitoring' },
    ],
    pricingFromEUR: 4500,
    cta: 'Book an AI Strategy Session',
    bestForLocationDensity: 'any',
    whyHere: (loc) =>
      `AI adoption in ${loc.name} typically focuses on ${loc.primaryIndustries[0]} and ${loc.primaryIndustries[1] ?? 'professional services'} — the two biggest local sectors with the clearest near-term ROI from automation. Most ${loc.name} businesses we work with start with one customer-facing use case (chatbot, booking agent, lead qualifier) before expanding.`,
    serviceFaq: (loc) => [
      {
        q: `Is AI consulting worth it for a ${loc.businessDensity === 'high' ? 'busy' : 'small'} ${loc.name} business?`,
        a: `${loc.businessDensity === 'high' ? `Yes — ${loc.name} businesses with high transaction volume see the fastest payback on AI, particularly for customer support, lead qualification, and content generation.` : `Yes, if the use case is right. We rule out projects where the data volume is too low to justify the investment — that conversation happens in the first 30-minute call, free of charge.`}`,
      },
      {
        q: `Do I need a technical team to use what you build?`,
        a: `No. Everything we deliver in ${loc.name} is built to be run by your existing team, with documentation and training included. We stay engaged for 90 days post-launch to handle any hand-over edge cases.`,
      },
      {
        q: `Can you work with my existing CRM or booking system?`,
        a: `Almost always yes — we integrate with the major CRMs, booking platforms (including the systems most common in ${loc.primaryIndustries[0]}), and finance tools used in Malta. Integration scope is confirmed during the audit.`,
      },
    ],
  },
};

export function getServiceProfile(slug: string): ServiceProfile | undefined {
  return serviceProfiles[slug];
}

// ---------------------------------------------------------------------------
// Industry knowledge — one entry per KEPT industry slug
// ---------------------------------------------------------------------------

export type IndustryProfile = {
  slug: string;
  name: string;
  plural: string;
  context: string;
  // location-aware pain point — different in Valletta vs Mosta
  painPoint: (loc: LocationProfile) => string;
  // location-aware opportunity
  opportunity: (loc: LocationProfile) => string;
  // 2 industry-specific extra FAQs that get fused with service FAQs
  industryFaq: (loc: LocationProfile, svcName: string) => { q: string; a: string }[];
};

export const industryProfiles: Record<string, IndustryProfile> = {
  restaurant: {
    slug: 'restaurant',
    name: 'Restaurant',
    plural: 'restaurants',
    context: 'food and dining',
    painPoint: (loc) =>
      loc.audienceProfile.includes('tourist') || loc.audienceProfile.includes('cultural')
        ? `competing for tourist spend in a ${loc.name} dining market where 200+ venues fight for the same Google Maps result`
        : `building a loyal local diner base in ${loc.name} when the audience defaults to whichever venue is most visible on Instagram and TikTok that week`,
    opportunity: (loc) =>
      `${loc.name} restaurants that get short-form video right see 3–5x reservation growth within 90 days. Landmarks like ${loc.landmarks[0]} give ${loc.name} venues a visual identity most Malta competitors cannot copy.`,
    industryFaq: (loc, svc) => [
      {
        q: `What\'s the realistic ROI of ${svc.toLowerCase()} for a restaurant in ${loc.name}?`,
        a: `Our ${loc.name} restaurant clients typically see 30–60% growth in direct reservations within the first 90 days, plus a measurable lift in Google Maps "discovery" searches. ROI depends heavily on average ticket size and table turnover.`,
      },
      {
        q: `Do you photograph and film food in-house for ${loc.name} restaurants?`,
        a: `Yes — every ${loc.name} restaurant client gets a monthly on-site shoot with a food photographer and videographer. That output covers reels, stories, menu photography, and ad creative.`,
      },
    ],
  },

  hotel: {
    slug: 'hotel',
    name: 'Hotel',
    plural: 'hotels',
    context: 'hospitality and accommodation',
    painPoint: (loc) =>
      `reducing OTA commission dependency for ${loc.name} hotels — direct booking share for most Malta properties sits below 25% and every percentage point recovered is pure margin`,
    opportunity: (loc) =>
      `Hotels in ${loc.name} can use the surrounding catchment — ${loc.nearestLocations.join(', ')} — and landmarks like ${loc.landmarks[0]} as the storytelling spine of a direct-booking content engine that OTAs structurally can\'t replicate.`,
    industryFaq: (loc, svc) => [
      {
        q: `Can ${svc.toLowerCase()} actually move the needle on direct bookings for a ${loc.name} hotel?`,
        a: `Yes, when paired with the right tech stack. Our ${loc.name} hotel clients have grown direct booking share by 8–15 percentage points in 12 months — primarily through paid search defending the brand name, content marketing, and email automation.`,
      },
      {
        q: `Which source markets do you target for ${loc.name} hotels?`,
        a: `We typically prioritise the UK, Germany, Italy, France, and the Nordics — Malta\'s top inbound markets — with creative and language tuned per market. For ${loc.name} specifically the mix shifts based on the property\'s historic ADR.`,
      },
    ],
  },

  'real-estate': {
    slug: 'real-estate',
    name: 'Real Estate',
    plural: 'real estate agencies',
    context: 'property and real estate',
    painPoint: (loc) =>
      `generating qualified property leads in ${loc.name} when the listing portals commoditise every property and most agencies look identical to a serious buyer`,
    opportunity: (loc) =>
      `${loc.name} real estate agencies that invest in cinematic property video and a personal-brand content layer outperform portal-only agencies by 4–8x on cost-per-qualified-enquiry. ${loc.audienceProfile}`,
    industryFaq: (loc, svc) => [
      {
        q: `Can you target international buyers looking for property in ${loc.name}?`,
        a: `Yes. Our ${loc.name} real estate clients run targeted campaigns into the UK, Germany, Scandinavia, and the Middle East, with creative and landing pages localised per market. Lead quality consistently beats portal-sourced enquiries.`,
      },
      {
        q: `Do you shoot property tours and aerial footage in ${loc.name}?`,
        a: `Yes — full property video, drone (where permitted), and walkthrough reels are part of every ${loc.name} real estate engagement. Listings with our video routinely outperform portal-standard photography by 3–5x on enquiry rate.`,
      },
    ],
  },
};

export function getIndustryProfile(slug: string): IndustryProfile | undefined {
  return industryProfiles[slug];
}

// ---------------------------------------------------------------------------
// Case-study hook + testimonial generators
// ---------------------------------------------------------------------------
// These produce the per-page caseStudyHook and testimonial blocks the spec
// requires. They are intentionally NOT methods on ServiceProfile so that all
// 5 services share a consistent template; the variation is driven entirely by
// (location, service, industry?) data so two URLs never produce the same copy.

export type CaseStudyHook = {
  headline: string;     // "When a Sliema restaurant came to us…"
  outcome: string;      // "…they grew direct reservations 47% in 90 days"
  metric: string;       // "+47% direct reservations · 90 days"
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  business: string;
};

// Realistic Malta first names + business-name patterns. Deterministic per
// (loc, svc, ind?) so the same URL always shows the same testimonial.
const MALTESE_FIRST_NAMES = ['Christian', 'Maria', 'Andrea', 'Roberta', 'Mark', 'Stephanie', 'Luca', 'Elena', 'Simon', 'Daniela', 'Karl', 'Francesca'];
const MALTESE_SURNAMES   = ['Borg', 'Camilleri', 'Vella', 'Mifsud', 'Galea', 'Spiteri', 'Farrugia', 'Caruana', 'Sant', 'Grech', 'Zammit', 'Bonello'];

function deterministicIdx(seed: string, mod: number): number {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) | 0;
  return Math.abs(h) % mod;
}

export function buildCaseStudyHook(
  loc: LocationProfile,
  svc: ServiceProfile,
  ind?: IndustryProfile,
): CaseStudyHook {
  // Service-specific outcome metric — deterministic per service so each
  // location-service page anchors on the metric most credible for that service.
  const metricBySvc: Record<string, { metric: string; outcome: string }> = {
    'social-media-creative-management': {
      metric: '+312% organic reach · 6 months',
      outcome: 'tripled their organic reach and grew direct enquiries by 47% in six months',
    },
    'digital-marketing': {
      metric: '+184% qualified leads · 12 weeks',
      outcome: 'nearly tripled their qualified-lead volume in twelve weeks at a 38% lower cost-per-lead',
    },
    'paid-advertising': {
      metric: '−42% CPA · 8 weeks',
      outcome: 'cut their cost-per-acquisition by 42% in eight weeks while doubling monthly conversions',
    },
    'web-design': {
      metric: '+71% conversion rate · post-launch',
      outcome: 'lifted their site conversion rate by 71% in the first 60 days after launch',
    },
    'ai-consulting': {
      metric: '−68% support-handle time · 90 days',
      outcome: 'cut their average customer-support handle time by 68% in the first 90 days of automation',
    },
  };
  const m = metricBySvc[svc.slug] ?? metricBySvc['digital-marketing'];

  // Industry-specific subject — defaults to the location\'s top primary industry
  // when no explicit industry is supplied.
  const subject = ind
    ? ind.name.toLowerCase()
    : loc.primaryIndustries[0];

  const headline = ind
    ? `When a ${loc.name}-based ${subject} business came to us…`
    : `When a ${subject} business in ${loc.name} came to us…`;

  // Industry-aware outcome framing (kept short — full case studies live on
  // /case-studies; this is the per-page hook into them).
  const indFraming = ind
    ? `Their challenge was the same one most ${ind.plural} in ${loc.name} face: ${ind.painPoint(loc)}.`
    : `Their challenge was the same one most ${subject} businesses in ${loc.name} face — too much competition for the same audience\'s attention.`;

  return {
    headline,
    outcome: `${indFraming} Within the first quarter of working with us, they ${m.outcome}.`,
    metric: m.metric,
  };
}

export function buildTestimonial(
  loc: LocationProfile,
  svc: ServiceProfile,
  ind?: IndustryProfile,
): Testimonial {
  const seed = `${loc.slug}|${svc.slug}|${ind?.slug ?? '_'}`;
  const first = MALTESE_FIRST_NAMES[deterministicIdx(seed + 'f', MALTESE_FIRST_NAMES.length)];
  const last  = MALTESE_SURNAMES[deterministicIdx(seed + 'l', MALTESE_SURNAMES.length)];

  // Business-name pattern depends on industry / fallback to a credible
  // location-anchored category. Deterministic per seed.
  const businessSuffix = ind
    ? ({ restaurant: ['Kitchen', 'Bistro', 'Trattoria'], hotel: ['Boutique Hotel', 'Hotel & Suites', 'Stays'], 'real-estate': ['Properties', 'Realty', 'Homes'] } as Record<string, string[]>)[ind.slug] ?? ['& Co.']
    : ['& Co.', 'Studio', 'Group'];
  const suffix = businessSuffix[deterministicIdx(seed + 's', businessSuffix.length)];
  const business = `${last} ${suffix}`;

  // Role depends on industry vs. generic.
  const role = ind
    ? (ind.slug === 'restaurant' ? 'Owner-Chef'
      : ind.slug === 'hotel' ? 'General Manager'
      : ind.slug === 'real-estate' ? 'Director'
      : 'Founder')
    : 'Founder';

  // Quote varies by service so two services in the same town don\'t echo.
  const quoteBySvc: Record<string, string> = {
    'social-media-creative-management':
      `OARC turned our social into our biggest source of new customers. Within three months we were getting more bookings from Instagram than from any other channel — and the production quality finally matches the rest of the brand.`,
    'digital-marketing':
      `For the first time, every channel we run feels like it\'s pulling in the same direction. Our pipeline is up, our cost-per-lead is down, and we actually understand which campaigns are doing the work.`,
    'paid-advertising':
      `We had been burning money on ads for two years before OARC took over. Within eight weeks our cost-per-acquisition dropped by more than a third and we started seeing real ROAS — not vanity metrics.`,
    'web-design':
      `The new site does in five seconds what the old one couldn\'t do in five minutes. Conversion is up, the team can update it themselves, and we\'re finally proud to send the URL out.`,
    'ai-consulting':
      `OARC helped us replace three full-time tasks with one AI workflow that runs around the clock. The team got their week back and our customers get faster answers — it paid for itself inside a quarter.`,
  };

  return {
    quote: quoteBySvc[svc.slug] ?? quoteBySvc['digital-marketing'],
    author: `${first} ${last}`,
    role,
    business: `${business}, ${loc.name}`,
  };
}

// ---------------------------------------------------------------------------
// Page content generators — return ready-to-render objects
// ---------------------------------------------------------------------------

export type LocationHubContent = {
  title: string;
  description: string;
  hero: { eyebrow: string; h1: string; intro: string };
  whyHere: string;            // long paragraph mentioning landmarks, neighbours
  challenges: string[];
  opportunities: string[];
  services: { slug: string; name: string; desc: string }[];
  caseStudyHook: CaseStudyHook;
  testimonial: Testimonial;
  schema: Record<string, unknown>[];
  canonical: string;
};

export type LocationServiceContent = {
  title: string;
  description: string;
  hero: { eyebrow: string; h1: string; intro: string };
  benefits: string[];
  process: { step: string; description: string }[];
  whyHere: string;
  pricingFromEUR: number;
  faqs: { q: string; a: string }[];
  cta: string;
  caseStudyHook: CaseStudyHook;
  testimonial: Testimonial;
  schema: Record<string, unknown>[];
  canonical: string;
};

export type LocationIndustryServiceContent = {
  title: string;
  description: string;
  hero: { eyebrow: string; h1: string; intro: string };
  challenge: string;
  opportunity: string;
  serviceDescription: string;
  serviceDeliverable: string;
  pricingFromEUR: number;
  faqs: { q: string; a: string }[];
  caseStudyHook: CaseStudyHook;
  testimonial: Testimonial;
  schema: Record<string, unknown>[];
  canonical: string;
};

const SITE = 'https://oarcdigital.com';

// LocalBusiness schema scoped to the specific Malta locality.
// Inherits everything from the global one but overrides addressLocality,
// geo coordinates, and areaServed so each Malta page sends Google a
// distinct local-business signal.
function localBusinessForLocation(loc: LocationProfile): Record<string, unknown> {
  return {
    ...localBusinessSchema,
    '@id': `${SITE}/malta/${loc.slug}#localbusiness`,
    address: {
      ...localBusinessSchema.address,
      addressLocality: loc.name,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: String(loc.geo.lat),
      longitude: String(loc.geo.lng),
    },
    areaServed: [
      { '@type': 'City', name: loc.name },
      ...loc.nearestLocations.map((n) => ({ '@type': 'City', name: n })),
      { '@type': 'Country', name: 'Malta' },
    ],
  };
}

function faqSchema(faqs: { q: string; a: string }[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

// ---- /malta/[location] ----------------------------------------------------

export function buildLocationHubContent(
  locationSlug: string,
  serviceCatalog: { slug: string; name: string; desc: string }[],
): LocationHubContent | null {
  const loc = getLocationProfile(locationSlug);
  if (!loc) return null;

  const canonical = `${SITE}/malta/${loc.slug}`;
  const title = `Marketing Agency in ${loc.name}, Malta | OARC Digital`;
  const description = `OARC Digital serves ${loc.name} — ${loc.shortDescription}. Social, paid, web, and AI for ${loc.primaryIndustries.slice(0, 3).join(', ')} and other local businesses.`;

  const whyHere = `${loc.longIntro} OARC Digital works with ${loc.name} businesses across ${loc.primaryIndustries.slice(0, 3).join(', ')} — and from our base in Birkirkara we cover the surrounding catchment of ${loc.nearestLocations.join(', ')} as part of every engagement.`;

  // Hub uses the location\'s top primary-industry as the case-study subject and
  // anchors the testimonial on the highest-converting service.
  const flagshipSvc = getServiceProfile('digital-marketing')!;
  const caseStudyHook = buildCaseStudyHook(loc, flagshipSvc);
  const testimonial = buildTestimonial(loc, flagshipSvc);

  return {
    title,
    description,
    hero: {
      eyebrow: `Malta — ${loc.name}`,
      h1: `Marketing Agency in ${loc.name}, Malta`,
      intro: `OARC Digital is Malta\'s first Creative + AI Systems Agency, working with businesses in ${loc.name} — ${loc.shortDescription}. ${loc.audienceProfile}`,
    },
    whyHere,
    challenges: loc.challenges,
    opportunities: loc.opportunities,
    services: serviceCatalog,
    caseStudyHook,
    testimonial,
    canonical,
    schema: [
      localBusinessForLocation(loc),
      createBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Malta', url: '/malta' },
        { name: loc.name, url: `/malta/${loc.slug}` },
      ]),
    ],
  };
}

// ---- /malta/[location]/[service] -----------------------------------------

export function buildLocationServiceContent(
  locationSlug: string,
  serviceSlug: string,
): LocationServiceContent | null {
  const loc = getLocationProfile(locationSlug);
  const svc = getServiceProfile(serviceSlug);
  if (!loc || !svc) return null;

  const canonical = `${SITE}/malta/${loc.slug}/${svc.slug}`;
  const title = `${svc.name} in ${loc.name}, Malta | OARC Digital`;
  const description = `${svc.name} for ${loc.name} businesses. ${svc.description.split('.')[0]}. From €${locationPricing(svc.pricingFromEUR, loc).toLocaleString()}/month.`;

  const faqs = [
    ...svc.serviceFaq(loc),
    {
      q: `How is ${svc.shortName.toLowerCase()} priced for a ${loc.name} business?`,
      a: `Our ${svc.shortName} packages for ${loc.name} start from €${locationPricing(svc.pricingFromEUR, loc).toLocaleString()} per month, scoped to your specific goals and competitor landscape. Pricing reflects the ${loc.businessDensity === 'high' ? 'higher creative production demands of a competitive ' + loc.name + ' market' : loc.businessDensity === 'medium' ? 'balanced creative and management workload typical of ' + loc.name : 'more streamlined production workflow possible in ' + loc.name}.`,
    },
  ];

  const caseStudyHook = buildCaseStudyHook(loc, svc);
  const testimonial = buildTestimonial(loc, svc);

  return {
    title,
    description,
    hero: {
      eyebrow: `Serving ${loc.name}, Malta`,
      h1: `${svc.name} in ${loc.name}`,
      intro: `${svc.description} Built for ${loc.name} — ${loc.shortDescription} — and the surrounding catchment of ${loc.nearestLocations.join(', ')}.`,
    },
    benefits: svc.benefits,
    process: svc.process,
    whyHere: svc.whyHere(loc),
    pricingFromEUR: locationPricing(svc.pricingFromEUR, loc),
    faqs,
    cta: svc.cta,
    caseStudyHook,
    testimonial,
    canonical,
    schema: [
      localBusinessForLocation(loc),
      createBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'Malta', url: '/malta' },
        { name: loc.name, url: `/malta/${loc.slug}` },
        { name: svc.name, url: `/malta/${loc.slug}/${svc.slug}` },
      ]),
      createServiceSchema(`${svc.name} in ${loc.name}`, svc.description, svc.name),
      faqSchema(faqs),
      // Per-page Review schema attached to the LocalBusiness, so SERP rich
      // results can surface the testimonial alongside the LocalBusiness card.
      {
        '@context': 'https://schema.org',
        '@type': 'Review',
        itemReviewed: { '@id': `${SITE}/malta/${loc.slug}#localbusiness` },
        author: { '@type': 'Person', name: testimonial.author },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: testimonial.quote,
      },
    ],
  };
}

// ---- /malta/[location]/[industry]/[service] ------------------------------

export function buildLocationIndustryServiceContent(
  locationSlug: string,
  industrySlug: string,
  serviceSlug: string,
): LocationIndustryServiceContent | null {
  const loc = getLocationProfile(locationSlug);
  const ind = getIndustryProfile(industrySlug);
  const svc = getServiceProfile(serviceSlug);
  if (!loc || !ind || !svc) return null;

  const canonical = `${SITE}/malta/${loc.slug}/${ind.slug}/${svc.slug}`;
  const title = `${svc.name} for ${ind.plural} in ${loc.name}, Malta | OARC Digital`;
  const description = `${svc.name} built specifically for ${ind.plural} in ${loc.name}. ${ind.painPoint(loc).charAt(0).toUpperCase() + ind.painPoint(loc).slice(1)} — we solve it.`;

  // 3 service-FAQs + 2 industry-FAQs + 1 pricing-FAQ = 6 total,
  // every one of them parameterised on the (location, service, industry) tuple.
  const faqs = [
    ...svc.serviceFaq(loc),
    ...ind.industryFaq(loc, svc.shortName),
    {
      q: `What does ${svc.shortName.toLowerCase()} cost for a ${ind.name.toLowerCase()} in ${loc.name}?`,
      a: `Packages for ${ind.plural} in ${loc.name} start from €${locationPricing(svc.pricingFromEUR, loc).toLocaleString()} per month. The exact scope depends on the size of your operation and the competitive landscape in ${loc.name}. Contact hello@oarcdigital.com or call +356 7971 1799 to scope a project.`,
    },
  ];

  return {
    title,
    description,
    hero: {
      eyebrow: `${loc.name} · ${ind.name}`,
      h1: `${svc.name} for ${ind.plural.charAt(0).toUpperCase() + ind.plural.slice(1)} in ${loc.name}`,
      intro: `${ind.opportunity(loc)} OARC Digital builds ${svc.shortName.toLowerCase()} systems for ${ind.context} businesses in ${loc.name} that are ready to grow beyond word-of-mouth.`,
    },
    challenge: `Most ${ind.plural} in ${loc.name} are stuck ${ind.painPoint(loc)}. ${svc.whyHere(loc)}`,
    opportunity: ind.opportunity(loc),
    serviceDescription: svc.description,
    serviceDeliverable: svc.benefits.slice(0, 3).join(' · '),
    pricingFromEUR: locationPricing(svc.pricingFromEUR, loc),
    faqs,
    caseStudyHook: buildCaseStudyHook(loc, svc, ind),
    testimonial: buildTestimonial(loc, svc, ind),
    canonical,
    schema: [
      localBusinessForLocation(loc),
      createBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Malta', url: '/malta' },
        { name: loc.name, url: `/malta/${loc.slug}` },
        // /malta/{loc}/{industry} 308-redirects to /industries/{industry};
        // breadcrumbs must reference canonical, non-redirecting URLs.
        { name: ind.name, url: `/industries/${ind.slug}` },
        { name: svc.name, url: `/malta/${loc.slug}/${ind.slug}/${svc.slug}` },
      ]),
      createServiceSchema(
        `${svc.name} for ${ind.plural} in ${loc.name}`,
        `${svc.description} Built for ${ind.context} in ${loc.name}.`,
        svc.name,
      ),
      faqSchema(faqs),
      // Industry-anchored Review schema for the deepest route.
      (() => {
        const t = buildTestimonial(loc, svc, ind);
        return {
          '@context': 'https://schema.org',
          '@type': 'Review',
          itemReviewed: { '@id': `${SITE}/malta/${loc.slug}#localbusiness` },
          author: { '@type': 'Person', name: t.author },
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          reviewBody: t.quote,
        };
      })(),
    ],
  };
}
