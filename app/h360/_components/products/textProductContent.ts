/** TEXT — H360-PRODUCT-CONTENT-BRAIN.md */
import type { ProductMetaConfig } from './buildProductMetadata';
import type { H360ProductPageConfig } from './H360ProductPageLayout';

const PATH = '/h360/restaurant-sms-marketing-malta';

const GATE2 = {
  question: 'How do I message my restaurant customers?',
  answer:
    'When a guest saves your STAMP or wallet pass, their device connects to your restaurant — no phone list upload needed. OARC Digital\'s H360 TEXT sends win-back notifications through that wallet connection when a guest stops visiting. Saving the pass is the opt-in. Built for Malta venues that never collected emails or phone numbers.',
};

export const TEXT_META: ProductMetaConfig = {
  brainId: 'TEXT',
  path: PATH,
  title: 'Restaurant SMS Marketing Malta | OARC Digital — H360',
  description:
    'Win back lapsed restaurant guests in Malta — H360 TEXT uses wallet pass opt-in, no phone list upload. Messages they actually open.',
  keywords: ['restaurant sms marketing malta', 'message restaurant customers malta', 'win back restaurant guests'],
  og: { title: 'Win-back SMS for restaurants', subtitle: 'Wallet opt-in · Malta · H360', eyebrow: 'H360 · SMS' },
  breadcrumbName: 'Restaurant SMS Malta',
  serviceName: 'H360 Restaurant SMS Marketing — Malta',
  serviceType: 'Restaurant SMS Marketing',
  faqs: [
    GATE2,
    {
      question: 'Do I need a phone list?',
      answer: 'No. TEXT works through the wallet pass. When a guest saves STAMP or PASS, their device is connected. No upload, no spreadsheet.',
    },
    {
      question: 'Why not WhatsApp or email?',
      answer: 'Most guests won\'t give email — 15–25% open rates on promos. WhatsApp needs opt-in lists and manual blasts. TEXT triggers when behaviour changes — they stopped visiting.',
    },
    {
      question: 'Is this the same as WATI?',
      answer: 'WATI needs phone numbers and sends generic blasts. TEXT personalises based on wallet connection and visit gaps — no €39/mo broadcast tool required.',
    },
  ],
};

export const TEXT_PAGE: Omit<H360ProductPageConfig, 'flowFooter'> = {
  eyebrow: 'H360 · SMS · Live',
  h1: 'Restaurant SMS marketing in Malta.',
  live: true,
  ctaName: 'TEXT',
  hero: {
    ownerPain:
      'A guest stops coming. You can\'t reach them — you never got their number, and you don\'t have a list to message.',
    guestGain:
      'A short message they open — not another ignored email. "We miss you — book Friday?" feels personal.',
    wedge: 'No phone list upload — wallet pass opt-in. SMS they actually read.',
    hook: 'When a customer stops coming, TEXT sends them a message. They remember you. They come back.',
  },
  visual: 'sms-return',
  flow: {
    title: 'Guest lapses → TEXT reaches → table fills.',
    subtitle: 'Saving the wallet pass IS the opt-in. No phone number collection at the till.',
    nodes: [
      { id: 'pass', label: 'Wallet pass', detail: 'Guest opted in once' },
      { id: 'lapse', label: '45 days quiet', detail: 'System detects gap' },
      { id: 'text', label: 'TEXT sends', detail: 'Win-back offer' },
      { id: 'book', label: 'They return', detail: 'Table filled again' },
    ],
  },
  expertTitle: 'Why blast tools need data you don\'t have.',
  expertSubtitle: 'TEXT needs nothing from the restaurant — the wallet pass is the connection.',
  expertFails: [
    { name: 'WATI', fail: 'Needs customer phone numbers. Most restaurants don\'t collect them. Generic "50% off pasta" blasts — no behaviour trigger.' },
    { name: 'Broadly', fail: 'Inbound only — guest messages first. Not outbound win-back when they stop visiting.' },
    { name: 'WhatsApp Business App', fail: 'Manual typing. 256 contact limit. No automation when a guest lapses.' },
    { name: 'Mailchimp', fail: '15–25% email open rates. Guests won\'t give email for a pasta place.' },
  ],
  faqs: TEXT_META.faqs,
  related: [
    { label: 'WhatsApp', href: '/h360/whatsapp-marketing-restaurant-malta' },
    { label: 'Stamp Card', href: '/h360/digital-stamp-card-restaurant-malta' },
    { label: 'Wallet Pass', href: '/h360/restaurant-loyalty-card-malta' },
    { label: 'All H360 tools', href: '/h360#h360-products' },
  ],
};
