/** GOOGLE PROFILE + SEARCH — Google Visibility hub card; H360-PRODUCT-CONTENT-BRAIN.md */
import type { ProductMetaConfig } from './buildProductMetadata';
import type { H360ProductPageConfig } from './H360ProductPageLayout';

const PATH = '/h360/google-business-profile-restaurant-malta';

const GATE2 = {
  question: 'How do I set up my restaurant on Google?',
  answer:
    'Claim your Google Business Profile, keep it active with posts, photos, hours, and review replies — not a one-time setup you forget. OARC Digital\'s H360 Google Visibility manages GBP for Malta restaurants: weekly posts, holiday hours, the one number that matters ("847 searches → 37 calls"), and SEO that improves ranking without you reading 20-page reports. Built by Malta operators — not a €500/mo Yext contract.',
};

export const GOOGLE_PROFILE_META: ProductMetaConfig = {
  brainId: 'GOOGLE_PROFILE',
  path: PATH,
  title: 'Google Business Profile Restaurant Malta | OARC Digital — H360',
  description:
    'Google Business Profile management for Malta restaurants — active GBP, posts, photos, review replies, and local SEO. H360 by OARC Digital.',
  keywords: ['google business profile restaurant malta', 'restaurant google maps malta', 'restaurant seo malta'],
  og: { title: 'Google Visibility — stay active', subtitle: '847 searches → 37 calls · H360', eyebrow: 'H360 · Google Visibility' },
  breadcrumbName: 'Google Business Profile Malta',
  serviceName: 'H360 Google Visibility — Malta',
  serviceType: 'Restaurant Google Business Profile Management',
  faqs: [
    GATE2,
    {
      question: 'Can you post to GBP automatically?',
      answer: 'We generate all content — you publish in 30 seconds. The bottleneck isn\'t the button — it\'s knowing what to publish. We handle that.',
    },
    {
      question: 'Malta has too many public holidays — how do you track hours?',
      answer: 'We track all 14 Malta public holidays. Auto-reminder 3 days before each one so your hours stay accurate.',
    },
    {
      question: 'Reviews pile up and I never reply — can you help?',
      answer: 'AI drafts replies in your tone. You approve or edit in one tap. A replied review ranks better than silence.',
    },
    {
      question: 'How do I know if my Google profile is good or bad?',
      answer: 'Weekly score: "Your Google Profile Score: 85/100. Missing: menu photos. Next step: upload them." Plus the one number: searches → calls.',
    },
  ],
};

export const GOOGLE_PROFILE_PAGE: Omit<H360ProductPageConfig, 'flowFooter'> = {
  eyebrow: 'H360 · Google Visibility',
  h1: 'Google Business Profile for restaurants in Malta.',
  ctaName: 'Google Visibility',
  hero: {
    ownerPain:
      'Your Google page is old. People search "restaurant near me" — they pick the place with fresh photos, recent posts, and stars. Yours looks abandoned.',
    guestGain:
      'Hungry nearby — they find you on Maps, see today\'s special, and walk in.',
    wedge: 'Not a stale DIY profile — we keep GBP active and fix what stops you ranking.',
    hook: 'Your restaurant\'s Google page. We keep it looking good so people find you.',
  },
  visual: 'google-visibility',
  flow: {
    title: 'Claim → post → rank → calls.',
    subtitle: 'Google rewards active profiles. We generate posts, photos, replies — you publish in 30 seconds.',
    nodes: [
      { id: 'claim', label: 'GBP claimed', detail: 'Hours · menu · photos' },
      { id: 'post', label: 'Weekly posts', detail: 'Content we write' },
      { id: 'rank', label: 'Maps ranking', detail: 'SEO + reviews lift' },
      { id: 'calls', label: '847 → 37', detail: 'Searches become walk-ins' },
    ],
  },
  compare: {
    title: 'Stale profile vs active GBP — the number that matters.',
    subtitle: 'Google rewards profiles that post, reply, and stay accurate — not a one-time setup.',
    brainLine:
      'Yext charges €500+/mo for listings sync. H360 Google Visibility is built for Malta restaurants that need "847 searches → 37 calls" — not enterprise listing software.',
    visual: 'google-maps-rank',
  },
  expertTitle: 'Why Yext and DIY leave you invisible.',
  expertSubtitle: 'Every competitor either costs €500+/mo or expects you to do the work yourself.',
  expertFails: [
    { name: 'Owner.com', fail: 'US only. GBP is one feature inside their website bundle — not the product.' },
    { name: 'Yext', fail: '€500+/mo for a small restaurant that just needs hours updated and a photo posted.' },
    { name: 'Broadly', fail: 'Shows existing data — doesn\'t post, doesn\'t update, doesn\'t improve ranking.' },
    { name: 'Do it yourself', fail: 'Set up once, never touch again. Profile goes stale. Google stops showing you.' },
  ],
  faqs: GOOGLE_PROFILE_META.faqs,
  related: [
    { label: 'Smart Google Reviews', href: '/h360/get-more-google-reviews-restaurant-malta' },
    { label: 'Website', href: '/h360/restaurant-website-malta' },
    { label: 'All H360 tools', href: '/h360#h360-products' },
  ],
};
