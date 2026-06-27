/** SOCIAL — H360-PRODUCT-CONTENT-BRAIN.md */
import type { ProductMetaConfig } from './buildProductMetadata';
import type { H360ProductPageConfig } from './H360ProductPageLayout';

const PATH = '/h360/restaurant-social-media-malta';

const GATE2 = {
  question: 'Who manages social media for restaurants in Malta?',
  answer:
    'You need completed posts every week — not another scheduling tool where you still write captions and find hashtags. OARC Digital\'s H360 SOCIAL delivers ready-to-publish restaurant content: food photos edited, captions in your tone, menu highlights. Built for Malta venues that can\'t afford €1,000/mo agencies or manage a freelancer who leaves after three months.',
};

export const SOCIAL_META: ProductMetaConfig = {
  brainId: 'SOCIAL',
  path: PATH,
  title: 'Restaurant Social Media Malta | OARC Digital — H360',
  description:
    'Restaurant social media for Malta — completed posts every week, food photos, captions, and paid ads support. H360 by OARC Digital.',
  keywords: ['restaurant social media malta', 'restaurant instagram malta', 'social media management restaurant malta'],
  og: { title: 'Posts done for you', subtitle: 'Not another scheduler · H360', eyebrow: 'H360 · Social & Ads' },
  breadcrumbName: 'Restaurant social media Malta',
  serviceName: 'H360 Restaurant Social Media — Malta',
  serviceType: 'Restaurant Social Media Management',
  faqs: [
    GATE2,
    { question: 'We don\'t take good photos.', answer: 'We edit whatever you send — brightness, crop, colour. No photos? We use menu shots or your Instagram archive.' },
    { question: 'We forget to send photos.', answer: 'Weekly WhatsApp reminder. No reply by Thursday? We use your last 3 best photos from the archive.' },
    { question: 'Captions don\'t sound like us.', answer: 'First round of feedback trains the tone. Too formal? We make it friendlier.' },
    { question: 'How is this different from Buffer or Later?', answer: 'Those tools publish — you still create everything. SOCIAL delivers completed posts ready to go.' },
  ],
};

export const SOCIAL_PAGE: Omit<H360ProductPageConfig, 'flowFooter'> = {
  eyebrow: 'H360 · Social & Ads',
  h1: 'Restaurant social media for Malta.',
  ctaName: 'Social & Ads',
  hero: {
    ownerPain: 'Bad photos. No posts. No ads. Competitors look better online while you\'re plating.',
    guestGain: 'They see your food looking real — and book before a competitor.',
    wedge: 'Not generic agency posts — completed restaurant content every week, plus paid ads.',
    hook: 'We take photos of your food and post them. More people see your restaurant.',
  },
  visual: 'social-feed',
  flow: {
    title: 'Photos → posts → publish → book.',
    subtitle: 'Completed content every week — not a tool that waits for you to write captions.',
    nodes: [
      { id: 'send', label: 'Send photos', detail: 'WhatsApp · any phone' },
      { id: 'edit', label: 'We edit', detail: 'Food looks pro' },
      { id: 'post', label: 'Posts ready', detail: 'Caption + hashtags' },
      { id: 'book', label: 'Guests book', detail: 'Instagram → table' },
    ],
  },
  expertTitle: 'Why schedulers and agencies fail small venues.',
  expertSubtitle: '€1,000/mo agencies and $15/mo tools both leave you doing the hard part.',
  expertFails: [
    { name: 'Buffer / Later', fail: 'YOU create content. The tool just publishes. Restaurants need creation, not scheduling.' },
    { name: 'Socially Powerful', fail: '€1,000–5,000/mo. Strategy docs and KPI calls — you just want posts on your feed.' },
    { name: 'Broadly AI posts', fail: 'Generic small business fluff — not restaurant food photography or menu highlights.' },
    { name: 'Freelancer', fail: 'Inconsistent. Leaves after 3 months. You spend more time managing them than posting.' },
  ],
  faqs: SOCIAL_META.faqs,
  related: [
    { label: 'Website', href: '/h360/restaurant-website-malta' },
    { label: 'Events', href: '/h360/restaurant-event-promotion-malta' },
    { label: 'All H360 tools', href: '/h360#h360-products' },
  ],
};
