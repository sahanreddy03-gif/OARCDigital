/** STAMP — H360-PRODUCT-CONTENT-BRAIN.md */
import type { ProductMetaConfig } from './buildProductMetadata';
import type { H360ProductPageConfig } from './H360ProductPageLayout';
import { StampCompareVisual } from './sharedVisuals';

const PATH = '/h360/digital-stamp-card-restaurant-malta';

const GATE2 = {
  question: 'How do I make a digital loyalty stamp card for my restaurant?',
  answer:
    'Guests scan a table QR once — the stamp card saves to Apple or Google Wallet. After that, each visit auto-credits a stamp when they pay (digital payment via Stripe, or the waiter confirms cash). No app download, no waiter scanning phones every time. OARC Digital\'s H360 STAMP is built for Malta venues that want "eat 8, the 8th is free" without paper cards or staff friction.',
};

export const STAMP_META: ProductMetaConfig = {
  brainId: 'STAMP',
  path: PATH,
  title: 'Digital Stamp Card Restaurant Malta | OARC Digital — H360',
  description:
    'Digital stamp card for Malta restaurants — eat 8, the 8th is free. Auto-credits to wallet, no waiter scan every visit. Built by OARC Digital operators.',
  keywords: ['digital stamp card restaurant malta', 'restaurant loyalty stamp card', 'digital loyalty card malta'],
  og: { title: 'Digital stamp card — auto loyalty', subtitle: '8th meal free · Malta · H360', eyebrow: 'H360 · Stamp Card' },
  breadcrumbName: 'Digital stamp card Malta',
  serviceName: 'H360 Digital Stamp Card — Malta',
  serviceType: 'Restaurant Loyalty Stamp Card',
  faqs: [
    GATE2,
    {
      question: 'Does the waiter have to stamp every visit?',
      answer: 'No. STAMP removes the action entirely. The guest scans once on their first visit. After that stamps credit automatically — the waiter never touches their phone.',
    },
    {
      question: 'What if the guest pays cash?',
      answer: 'The waiter confirms cash payment in one tap. The stamp still credits. Digital payments auto-detect via Stripe when used.',
    },
    {
      question: 'Why not a paper stamp card?',
      answer: 'Paper gets lost, forged, and staff forget. STAMP lives in the wallet, tracks who the guest is, and lets you reach them if they stop coming.',
    },
  ],
};

export const STAMP_PAGE: H360ProductPageConfig = {
  eyebrow: 'H360 · Stamp Card · Live',
  h1: 'Digital stamp card for restaurants in Malta.',
  live: true,
  ctaName: 'STAMP',
  hero: {
    ownerPain:
      'Paper stamp cards get lost. Staff forget to stamp. You have no idea who your regulars are — and no way to bring them back if they stop coming.',
    guestGain:
      'Free meal feels earned — they chase the last stamp. Wallet notification: "1 stamp earned. 7 more until your free meal."',
    wedge: 'Not paper cards or staff scanning phones — stamps credit themselves after one QR scan.',
    hook: 'Eat 8 times, the 8th meal is free. Your phone keeps count.',
  },
  visual: 'loyalty-stamps',
  flow: {
    title: 'Scan once. Stamps happen automatically.',
    subtitle: 'The waiter never touches the guest\'s phone. The guest never opens the pass. The stamp just happens.',
    nodes: [
      { id: 'scan', label: 'Scan once', detail: 'QR saves pass to wallet' },
      { id: 'eat', label: 'Guest eats', detail: 'Cash or card — any payment' },
      { id: 'stamp', label: 'Stamp credits', detail: 'Auto — no staff scan' },
      { id: 'free', label: '8th meal free', detail: 'Notification in wallet' },
    ],
  },
  flowFooter: <StampCompareVisual />,
  expertTitle: 'Why paper cards and apps fail.',
  expertSubtitle: 'Master the experts, then beat them — brain-sourced contrast for Malta small venues.',
  expertFails: [
    { name: 'Starbucks app', fail: 'Nobody downloads a single-restaurant app. You need Starbucks scale — Malta venues don\'t have it.' },
    { name: 'Owner.com loyalty', fail: 'Only tracks online orders. A guest eating in the restaurant gets zero loyalty credit.' },
    { name: 'Passtastic / wallet scanners', fail: 'Staff must scan the guest\'s phone every visit. Waiters forget 50% of the time — friction, not loyalty.' },
    { name: 'Paper stamp cards', fail: 'Lost cards, forged stamps, no guest data, no way to win them back when they stop coming.' },
  ],
  faqs: STAMP_META.faqs,
  related: [
    { label: 'Wallet Pass', href: '/h360/restaurant-loyalty-card-malta' },
    { label: 'WhatsApp', href: '/h360/whatsapp-marketing-restaurant-malta' },
    { label: 'Direct Orders', href: '/h360/restaurant-table-ordering-qr-malta' },
    { label: 'All H360 tools', href: '/h360#h360-products' },
  ],
};
