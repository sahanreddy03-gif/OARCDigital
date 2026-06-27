/** GOOGLE REVIEWS — H360-PRODUCT-CONTENT-BRAIN.md */
import type { ProductMetaConfig } from './buildProductMetadata';
import type { H360ProductPageConfig } from './H360ProductPageLayout';

const PATH = '/h360/get-more-google-reviews-restaurant-malta';

const GATE2 = {
  question: 'How do I get more Google reviews for my restaurant?',
  answer:
    'Put a QR on every table that opens your Google review form in one tap — not a generic Maps search that takes 3–4 steps. OARC Digital\'s H360 smart review collection uses timing and automation after the meal, with no reward attached to the review (Google-compliant). Built by Malta operators — no Sunday terminal, no POS integration, no Birdeye enterprise fees.',
};

export const REVIEWS_META: ProductMetaConfig = {
  brainId: 'GOOGLE_REVIEWS',
  path: PATH,
  title: 'Get More Google Reviews Restaurant Malta | OARC Digital — H360',
  description:
    'Get more Google reviews for your Malta restaurant — table QR, one tap to review, no POS or Sunday terminal. Smart timing by OARC Digital H360.',
  keywords: ['get more google reviews restaurant malta', 'restaurant google reviews malta', 'google review qr restaurant'],
  og: { title: 'More Google reviews — one tap', subtitle: 'Table QR · Malta · H360', eyebrow: 'H360 · Smart Reviews' },
  breadcrumbName: 'Google reviews Malta',
  serviceName: 'H360 Smart Google Reviews — Malta',
  serviceType: 'Restaurant Google Review Collection',
  faqs: [
    GATE2,
    {
      question: 'Does Google allow incentivized reviews?',
      answer: 'We don\'t incentivize. No bonus stamp, discount, or free item for reviewing. The QR opens the review page — guests review because they want to, not because they\'re paid.',
    },
    {
      question: 'Nobody scans QR codes — will this work?',
      answer: 'Some do — enough to grow reviews significantly. The card says "Happy? Tap to share" — it catches guests who already wanted to review but didn\'t have the link.',
    },
    {
      question: 'We already have a free Google QR — why pay?',
      answer: 'Free QRs link to Maps search, not the review form. Guests tap Reviews, then Write a review — most quit at step 2. Ours is one step directly to the form.',
    },
    {
      question: 'What about bad reviews?',
      answer: 'Unhappy guests may review too — that\'s real. The system alerts you immediately so you can respond first. A bad review with a good owner reply beats no reviews at all.',
    },
  ],
};

export const REVIEWS_PAGE: Omit<H360ProductPageConfig, 'flowFooter'> = {
  eyebrow: 'H360 · Smart Google Reviews',
  h1: 'Get more Google reviews for your restaurant in Malta.',
  ctaName: 'Smart Google Reviews',
  hero: {
    ownerPain:
      'Competitors have 200 reviews. You have 12. People search Google — they pick the place with stars and recent reviews, not the best food on the block.',
    guestGain:
      'Happy with the meal? One tap while they\'re still at the table — "Happy? Tap to share." No waiter awkwardness.',
    wedge: 'No POS. No Sunday terminal. A QR on the table — one tap to review.',
    hook: 'It asks your customers to leave a Google review. You get more reviews. More people find your restaurant.',
  },
  visual: 'reviews-stars',
  flow: {
    title: 'Table QR → review form → stars climb.',
    subtitle: 'Not 3–4 taps through Maps. One step to the review form — that\'s the wedge.',
    nodes: [
      { id: 'qr', label: 'Table QR', detail: '"Happy? Tap to share"' },
      { id: 'form', label: 'Review form', detail: 'Direct — one tap' },
      { id: 'stars', label: 'Review live', detail: 'Google profile grows' },
      { id: 'maps', label: 'You rank', detail: 'More searches → calls' },
    ],
  },
  expertTitle: 'Why Sunday and Birdeye need hardware you don\'t have.',
  expertSubtitle: 'Every competitor needs something you don\'t have. GOOGLE REVIEWS needs nothing — a QR on a table.',
  expertFails: [
    { name: 'Sunday', fail: 'Requires their €250 payment terminal per table. No terminal — no review system.' },
    { name: 'Birdeye', fail: 'Requires POS integration. €299+/mo. Generic SMS: "Rate your experience" — not what they ate.' },
    { name: 'Broadly', fail: 'Not restaurant-specific. Generic "How was your experience?" — plumbers and dentists, not your braġjoli.' },
    { name: 'Free DIY QR', fail: 'Links to Maps search, not review page. 3–4 taps. Most quit. No tracking.' },
  ],
  faqs: REVIEWS_META.faqs,
  related: [
    { label: 'Google Visibility', href: '/h360/google-business-profile-restaurant-malta' },
    { label: 'Direct Orders', href: '/h360/restaurant-table-ordering-qr-malta' },
    { label: 'All H360 tools', href: '/h360#h360-products' },
  ],
};
