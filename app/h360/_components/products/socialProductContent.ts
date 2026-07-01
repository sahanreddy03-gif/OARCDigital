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
  og: { title: 'Posts done for you', subtitle: '4/wk · not a scheduler · H360', eyebrow: 'H360 · Social & Ads' },
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
  eyebrow: 'H360 · Social & Ads · Live',
  h1: 'Restaurant social media for Malta.',
  ctaName: 'Social & Ads',
  hero: {
    ownerPain: 'Empty feed. Bad photos. Competitors look pro while you plate.',
    guestGain: 'They scroll your food — and book before the weekend fills.',
    wedge: 'Not Buffer. Not €1k agency decks. Posts done for you.',
    hook: 'We edit your shots. Write the caption. Post every week.',
  },
  visual: 'social-feed',
  flow: {
    title: 'Photo → post → book',
    subtitle: 'Completed content every week — not a tool waiting for captions.',
    nodes: [
      { id: 'send', label: 'WhatsApp', detail: 'Any phone · 3 photos' },
      { id: 'edit', label: 'We edit', detail: 'Food looks pro' },
      { id: 'post', label: 'Post ready', detail: 'Caption + hashtags' },
      { id: 'book', label: 'They book', detail: 'Instagram → table' },
    ],
  },
  compare: {
    title: 'Empty feed vs 4 posts a week',
    subtitle: 'Schedulers publish — they do not create.',
    brainLine: '€1,000/mo agencies write decks. H360 SOCIAL delivers ready posts — tap publish in 30 seconds.',
    visual: 'social-feed-mock',
  },
  expertTitle: 'Schedulers do not create content.',
  expertSubtitle: 'Agencies and $15/mo tools both leave you doing the hard part.',
  expertFails: [
    { name: 'Buffer / Later', fail: 'You create. It publishes. That is not the job.' },
    { name: 'Socially Powerful', fail: '€1k+/mo. Strategy decks — you want posts.' },
    { name: 'Broadly AI', fail: 'Generic fluff — not your food or menu.' },
    { name: 'Freelancer', fail: 'Gone in 3 months. You manage them.' },
  ],
  faqs: SOCIAL_META.faqs,
  related: [
    { label: 'Website', href: '/h360/restaurant-website-malta' },
    { label: 'Events', href: '/h360/restaurant-event-promotion-malta' },
    { label: 'All H360 tools', href: '/h360#h360-products' },
  ],
};
