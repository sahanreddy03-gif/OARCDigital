/**
 * GOOGLE VISIBILITY — GOOGLE_PROFILE + SEARCH + LOCAL brain merge
 * H360-PRODUCT-CONTENT-BRAIN.md
 */
import type { ProductMetaConfig } from './buildProductMetadata';

const PATH = '/h360/google-business-profile-restaurant-malta';

const GATE2 = {
  question: 'How do I get my restaurant to show on Google?',
  answer:
    'H360 Google Visibility is a full discovery engine for Malta restaurants — not “post a photo once.” We claim and verify your Google Business Profile, run local SEO and AEO so AI search cites you, publish keyword-led GBP posts and articles with a human copywriter, reply to reviews in your voice, and track the one number owners care about: searches → calls. ARC data tells us what to target each week. You approve in 30 seconds — we do the strategy, writing, and technical work.',
};

export const GOOGLE_PROFILE_META: ProductMetaConfig = {
  brainId: 'GOOGLE_PROFILE',
  path: PATH,
  title: 'Google Business Profile Restaurant Malta | OARC Digital — H360',
  description:
    'H360 Google Visibility — local SEO, AEO, AI search, GBP posts, review replies, and Malta keyword strategy for restaurants. OARC Digital operators. Not a €500/mo listing tool.',
  keywords: [
    'google business profile restaurant malta',
    'restaurant seo malta',
    'restaurant google maps malta',
    'aeo restaurant malta',
    'ai search restaurant malta',
  ],
  og: {
    title: 'Google Visibility — SEO + AEO + AI search',
    subtitle: '847 searches → 37 calls · Malta operators',
    eyebrow: 'H360 · Google Visibility',
  },
  breadcrumbName: 'Google Business Profile Malta',
  serviceName: 'H360 Google Visibility — Malta',
  serviceType: 'Restaurant Google Visibility — SEO, AEO, GBP',
  faqs: [
    GATE2,
    {
      question: 'Is this just posting pictures to Google?',
      answer:
        'Photos are one lever. H360 runs the full stack: technical SEO, structured data, AEO for AI answers, llms.txt indexing, competitor keyword gaps, copywriter-led posts and articles, review reply strategy, and weekly ARC scoring. Posting without strategy is noise — we target what Malta diners actually search.',
    },
    {
      question: 'What is AEO and why does my restaurant need it?',
      answer:
        'Answer Engine Optimization means when someone asks ChatGPT, Perplexity, or Google AI “best seafood restaurant Sliema,” your venue can be cited. We structure your site, GBP, FAQs, and articles so machines can quote you — not your competitor.',
    },
    {
      question: 'How fast will I see results?',
      answer:
        'GBP activity often moves in 1–2 weeks. SEO and AI citations compound over 8–12 weeks. Malta’s market is small — 300 venues in a zone, not 3,000 — so ranking gains are realistic when execution is weekly, not “set and forget.”',
    },
    {
      question: 'Can you post to GBP automatically?',
      answer:
        'We generate everything — keyword-led copy, holiday hours, review replies. You publish in ~30 seconds. The bottleneck was never the button; it was knowing what to publish and why.',
    },
    {
      question: 'How do I know if it is working?',
      answer:
        'Weekly WhatsApp: Google Profile Score (e.g. 85/100), missing items, and the owner metric — “847 searches → 37 calls.” No 20-page PDFs.',
    },
  ],
};

export const VISIBILITY_HERO = {
  eyebrow: 'H360 · Google Visibility · Live',
  h1: 'Google Business Profile for restaurants in Malta.',
  ownerPain: 'Competitors rank above you. AI recommends someone else. Your profile has not moved in months.',
  guestGain: 'They search — you show up first. They call before they open Wolt.',
  wedge: 'Not Yext. Not PDF dashboards. SEO + AEO + AI search + ARC — built for Malta operators.',
  hook: 'We engineer how Malta finds you — Maps, Google, and AI answers.',
  metric: { value: '847→37', label: 'searches → walk-ins' },
  doctrine: 'Photos are hygiene. Visibility is strategy — weekly motion.',
};

export const VISIBILITY_STACK = [
  {
    id: 'seo',
    label: 'Local SEO',
    short: 'Rank for what diners type',
    detail: 'Category, citations, on-page signals, competitor gaps — tuned for Malta neighbourhoods.',
  },
  {
    id: 'aeo',
    label: 'AEO',
    short: 'Win AI answer boxes',
    detail: 'FAQ schema, speakable copy, entity clarity — so Google SGE and assistants cite you.',
  },
  {
    id: 'aisearch',
    label: 'AI search',
    short: 'ChatGPT · Perplexity · Gemini',
    detail: 'Structured facts, reviews, menu language — engineered so LLMs recommend your venue.',
  },
  {
    id: 'llm',
    label: 'LLM indexing',
    short: 'llms.txt + entity graph',
    detail: 'Machine-readable brand file so AI crawlers know who you are and what you serve.',
  },
  {
    id: 'articles',
    label: 'Articles',
    short: 'Keyword-led content',
    detail: 'Human copywriter + trend data — “best lampuki Malta,” festa hours, chef stories that rank.',
  },
  {
    id: 'gbp',
    label: 'GBP ops',
    short: 'Posts · hours · replies',
    detail: 'Weekly motion on your profile — the part owners see. Powered by everything above.',
  },
] as const;

export const VISIBILITY_KEYWORDS = [
  { term: 'best restaurant sliema', vol: 92, trend: '↑' },
  { term: 'seafood restaurant malta', vol: 78, trend: '↑' },
  { term: 'restaurant near me valletta', vol: 85, trend: '→' },
  { term: 'lampuki season malta', vol: 64, trend: '↑' },
  { term: 'romantic dinner malta', vol: 71, trend: '↑' },
  { term: 'gluten free restaurant malta', vol: 48, trend: '↑' },
] as const;

export const VISIBILITY_FLOW = {
  title: 'How you climb — week by week',
  subtitle: 'ARC scans competitors → copywriter targets gaps → you approve → rank climbs.',
  nodes: [
    { id: 'scan', label: 'ARC scan', detail: 'Maps rank · reviews · keywords' },
    { id: 'strategy', label: 'Strategy', detail: 'SEO + AEO + AI targets' },
    { id: 'copy', label: 'Copywriter', detail: 'Trend keywords → posts' },
    { id: 'publish', label: 'Approve', detail: '30 sec · goes live' },
    { id: 'rank', label: 'Rank + calls', detail: '847 → 37 tracked' },
  ],
} as const;

export const VISIBILITY_WEEKS = [
  { week: 1, score: 42, rank: 14, label: 'Claimed · baseline audit' },
  { week: 4, score: 68, rank: 9, label: '4 posts · review replies live' },
  { week: 8, score: 81, rank: 5, label: 'Articles indexing · AI cites' },
  { week: 12, score: 91, rank: 3, label: '847 searches → 37 calls' },
] as const;

export const VISIBILITY_COMPARE = {
  title: 'Stale profile vs visibility engine',
  subtitle: 'Same search. Different outcome.',
  brainLine:
    'BrightLocal gives you a PDF. Yext syncs listings. H360 runs SEO, AEO, AI search, copy, and GBP — built for a 40-cover Malta restaurant, not enterprise software.',
} as const;

export const VISIBILITY_EXPERT_FAILS = [
  {
    name: 'SEO agencies (€500–€2,000/mo)',
    fail: 'Quarterly decks, 6-month timelines. Restaurants cancel before ROI. You need weekly motion, not strategy theatre.',
  },
  {
    name: 'BrightLocal / dashboards',
    fail: 'Reports what is wrong. Does not fix it. You still write content, chase citations, and reply to reviews alone.',
  },
  {
    name: 'Yext (€500+/mo)',
    fail: 'Directory sync for chains. Will not move your Maps rank if GBP, reviews, and site copy are weak.',
  },
  {
    name: 'Owner.com',
    fail: 'US-only bundle. GBP is a checkbox inside someone else’s website — not a Malta visibility engine.',
  },
  {
    name: 'DIY + “post when I remember”',
    fail: 'Profile goes stale in 8 weeks. Google stops showing you. Competitors with weekly posts win “near me.”',
  },
] as const;

export const VISIBILITY_FAQS = GOOGLE_PROFILE_META.faqs;

export const VISIBILITY_RELATED = [
  { label: 'Voice Host — Phone AI', href: '/h360/restaurant-phone-ai-malta' },
  { label: 'Smart Google Reviews', href: '/h360/get-more-google-reviews-restaurant-malta' },
  { label: 'Website', href: '/h360/restaurant-website-malta' },
  { label: 'Social & Ads', href: '/h360/restaurant-social-media-malta' },
  { label: 'All H360 tools', href: '/h360#h360-products' },
] as const;

/** @deprecated use custom page — kept for type compat */
export const GOOGLE_PROFILE_PAGE = {
  eyebrow: VISIBILITY_HERO.eyebrow,
  h1: VISIBILITY_HERO.h1,
  ctaName: 'Google Visibility',
  hero: {
    ownerPain: VISIBILITY_HERO.ownerPain,
    guestGain: VISIBILITY_HERO.guestGain,
    wedge: VISIBILITY_HERO.wedge,
    hook: VISIBILITY_HERO.hook,
  },
  visual: 'google-visibility' as const,
  flow: VISIBILITY_FLOW,
  compare: { ...VISIBILITY_COMPARE, visual: 'google-maps-rank' as const },
  expertTitle: 'Reports do not win Maps.',
  expertSubtitle: 'Visibility is a system — not a photo upload.',
  expertFails: [
    { name: 'SEO agencies', fail: 'Quarterly decks. You need weekly motion.' },
    { name: 'BrightLocal', fail: 'Reports problems. Does not fix them.' },
    { name: 'Yext', fail: 'Directory sync. Will not move Maps rank alone.' },
    { name: 'Owner.com', fail: 'US bundle. GBP is a checkbox.' },
    { name: 'DIY posting', fail: 'Stale in 8 weeks. Competitors win near-me.' },
  ],
  faqs: VISIBILITY_FAQS,
  related: VISIBILITY_RELATED,
};
