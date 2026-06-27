/** SEND — WhatsApp; brain gates + hub card wedge */
import type { ProductMetaConfig } from './buildProductMetadata';
import type { H360ProductPageConfig } from './H360ProductPageLayout';

const PATH = '/h360/whatsapp-marketing-restaurant-malta';

const GATE2 = {
  question: 'How do I send WhatsApp offers to my restaurant customers?',
  answer:
    'OARC Digital\'s H360 SEND turns first-time guests into regulars with smart WhatsApp follow-ups — not generic blasts. After a visit (via ORDER or wallet pass), personalised messages bring them back: welcome, dish recommendations, weekend offers. Built by Malta operators for venues that already use WhatsApp but lose guests in chat chaos.',
};

export const SEND_META: ProductMetaConfig = {
  brainId: 'SEND',
  path: PATH,
  title: 'WhatsApp Marketing Restaurant Malta | OARC Digital — H360',
  description:
    'WhatsApp marketing for Malta restaurants — smart follow-ups that turn first-timers into regulars. Not generic blasts. H360 by OARC Digital.',
  keywords: ['whatsapp marketing restaurant malta', 'restaurant whatsapp malta', 'whatsapp offers restaurant'],
  og: { title: 'WhatsApp that brings guests back', subtitle: 'Smart follow-ups · Malta · H360', eyebrow: 'H360 · WhatsApp' },
  breadcrumbName: 'WhatsApp marketing Malta',
  serviceName: 'H360 WhatsApp Marketing — Malta',
  serviceType: 'Restaurant WhatsApp Marketing',
  faqs: [
    GATE2,
    {
      question: 'Is this just blasting everyone "50% off"?',
      answer: 'No. SEND uses smart follow-ups — welcome after first visit, dish picks, weekend specials. Maria orders again → becomes a regular. Not spam.',
    },
    {
      question: 'We already use WhatsApp Business — why H360?',
      answer: 'Manual chats get lost during service. SEND automates the follow-up sequence and ties to your guest data from orders and wallet passes.',
    },
    {
      question: 'Do guests opt in?',
      answer: 'Yes — through ordering, wallet pass, or explicit opt-in. Compliant, personal, not cold lists.',
    },
  ],
};

export const SEND_PAGE: Omit<H360ProductPageConfig, 'flowFooter'> = {
  eyebrow: 'H360 · WhatsApp · Live',
  h1: 'WhatsApp marketing for restaurants in Malta.',
  live: true,
  ctaName: 'WhatsApp',
  hero: {
    ownerPain:
      'Guests visit once — then forget you. Your WhatsApp is chaos: orders mixed with "table for 4?" and lost messages.',
    guestGain:
      'A personal WhatsApp — not a spam blast. They feel remembered, not marketed at.',
    wedge: 'Not generic blasts — smart follow-ups that turn first-timers into regulars.',
    hook: 'Bring guests back on WhatsApp — Maria orders again, becomes a regular.',
  },
  visual: 'whatsapp-flow',
  flow: {
    title: 'First visit → smart WhatsApp → regular.',
    subtitle: 'Maria\'s journey — from new guest to repeat order.',
    nodes: [
      { id: 'visit', label: 'First visit', detail: 'Guest tries your food' },
      { id: 'welcome', label: 'Welcome message', detail: 'Offer + favourite dishes' },
      { id: 'nudge', label: 'Smart follow-up', detail: 'Weekend special' },
      { id: 'regular', label: 'Regular', detail: 'Orders again on WhatsApp' },
    ],
  },
  expertTitle: 'Why manual WhatsApp doesn\'t scale.',
  expertSubtitle: 'WATI blasts vs personal operator-built sequences.',
  expertFails: [
    { name: 'WATI broadcasts', fail: 'Generic blasts to a list you don\'t have. €39/mo — no restaurant-specific timing.' },
    { name: 'WhatsApp Business manual', fail: 'You type each message. Lost during service. 256 contact cap. No behaviour triggers.' },
    { name: 'Broadly', fail: 'Inbound AI replies — not outbound win-back when they stop visiting.' },
    { name: 'DIY group chat', fail: 'Orders and marketing mixed together. Staff misses messages. Zero automation.' },
  ],
  faqs: SEND_META.faqs,
  related: [
    { label: 'SMS', href: '/h360/restaurant-sms-marketing-malta' },
    { label: 'Direct Orders', href: '/h360/restaurant-table-ordering-qr-malta' },
    { label: 'Stamp Card', href: '/h360/digital-stamp-card-restaurant-malta' },
    { label: 'All H360 tools', href: '/h360#h360-products' },
  ],
};
