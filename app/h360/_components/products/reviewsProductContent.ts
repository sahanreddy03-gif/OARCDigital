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
    ownerPain: 'They have 200 reviews. You have 12. Google picks stars — not best food.',
    guestGain: 'Happy? One tap at the table. "Happy? Tap to share."',
    wedge: 'No POS. No Sunday terminal. QR on the table.',
    hook: 'One tap to review. More stars. More walk-ins.',
  },
  visual: 'reviews-stars',
  flow: {
    title: 'QR → review → rank',
    subtitle: 'Not 3–4 taps through Maps. One step to the review form.',
    nodes: [
      { id: 'qr', label: 'Table QR', detail: '"Happy? Tap to share"' },
      { id: 'form', label: 'Review form', detail: 'Direct — one tap' },
      { id: 'stars', label: 'Stars live', detail: 'Profile grows' },
      { id: 'maps', label: 'Maps climb', detail: 'More calls' },
    ],
  },
  expertTitle: 'Sunday and Birdeye need hardware you do not have.',
  expertSubtitle: 'GOOGLE REVIEWS needs a tent card — nothing else.',
  expertFails: [
    { name: 'Sunday', fail: '€250 terminal per table. No terminal — no system.' },
    { name: 'Birdeye', fail: 'POS integration. €299+/mo. Generic SMS.' },
    { name: 'Broadly', fail: 'Not restaurant-specific.' },
    { name: 'Free DIY QR', fail: 'Maps search — 3–4 taps. Most quit.' },
  ],
  faqs: REVIEWS_META.faqs,
  related: [
    { label: 'Google Visibility', href: '/h360/google-business-profile-restaurant-malta' },
    { label: 'Direct Orders', href: '/h360/restaurant-table-ordering-qr-malta' },
    { label: 'All H360 tools', href: '/h360#h360-products' },
  ],
};
