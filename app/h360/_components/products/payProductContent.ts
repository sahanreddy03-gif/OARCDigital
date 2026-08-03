/** PAY — H360-PRODUCT-CONTENT-BRAIN.md */
import type { ProductMetaConfig } from './buildProductMetadata';
import type { H360ProductPageConfig } from './H360ProductPageLayout';

const PATH = '/h360/restaurant-qr-payment-malta';

const GATE2 = {
  question: 'How do guests pay by QR at my restaurant?',
  answer:
    'Print a QR tent card on each table — guest scans, sees their bill, pays on their phone. No €250 Sunday terminal per table, no waiter bringing a card reader. OARC Digital\'s H360 PAY is built for Malta restaurants where guests wait 15 minutes for the bill: faster turns, full margin, digital trail. A QR code on a tent card — that\'s the only hardware.',
};

export const PAY_META: ProductMetaConfig = {
  brainId: 'PAY',
  path: PATH,
  title: 'Restaurant QR Payment Malta | OARC Digital — H360',
  description:
    'QR payment for Malta restaurants — guests pay from the table on their phone, no €250 terminals. H360 by OARC Digital.',
  keywords: ['restaurant qr payment malta', 'pay at table qr restaurant', 'restaurant mobile payment malta'],
  og: { title: 'Pay from the table', subtitle: 'No terminal · QR tent card · H360', eyebrow: 'H360 · QR Payment' },
  breadcrumbName: 'Restaurant QR payment Malta',
  serviceName: 'H360 QR Table Payment — Malta',
  serviceType: 'Restaurant QR Payment Processing',
  faqs: [
    GATE2,
    {
      question: 'Why not Zettle or SumUp?',
      answer: 'The waiter still brings the reader — same wait as the bill. PAY lets the guest pay when ready, from their seat.',
    },
    {
      question: 'What about split bills?',
      answer: 'Guest selects their items or enters their share. No mental maths at the table.',
    },
    {
      question: 'Do I need new hardware?',
      answer: 'No. A printed QR tent card per table. Works with your existing Stripe or payment setup.',
    },
    {
      question: 'Guests still pay cash?',
      answer: 'Cash stays. PAY is for the guest who wants to leave without waiting — faster table turns either way.',
    },
  ],
};

export const PAY_PAGE: Omit<H360ProductPageConfig, 'flowFooter'> = {
  eyebrow: 'H360 · QR Payment',
  h1: 'Restaurant QR payment in Malta.',
  ctaName: 'QR Payment',
  hero: {
    ownerPain:
      'Guests wait 15 minutes for the bill. Tables turn slow on a busy Friday. Every minute waiting is money left on the floor.',
    guestGain:
      'Pay when they\'re ready — leave without the 15-minute bill wait.',
    wedge: 'Not €250 Sunday terminals — a QR tent card. That\'s it.',
    hook: 'Scan the QR on the table. Pay for your food on your phone. No waiting for the bill.',
  },
  visual: 'qr-pay',
  flow: {
    title: 'QR → bill → pay → table free.',
    subtitle: 'Every payment product needs hardware. PAY needs a tent card.',
    nodes: [
      { id: 'qr', label: 'Table QR', detail: 'Printed tent card' },
      { id: 'bill', label: 'Bill on phone', detail: 'Guest reviews total' },
      { id: 'pay', label: 'Pay instantly', detail: 'Card · Apple Pay' },
      { id: 'free', label: 'Table turns', detail: 'No bill wait' },
    ],
  },
  compare: {
    title: '€3,750 in terminals vs a QR tent card.',
    subtitle: 'Guest pays from their seat — table turns faster, no 15-minute bill wait.',
    brainLine:
      'Zettle still needs the waiter with a reader. H360 PAY puts the bill on the guest\'s phone — split bills included, full margin kept.',
    visual: 'pay-terminal-compare',
  },
  expertTitle: 'Why Sunday and Zettle still slow you down.',
  expertSubtitle: 'Hardware per table or a waiter with a reader — same bottleneck, different device.',
  expertFails: [
    { name: 'Sunday', fail: '€250 per terminal. 15 tables = €3,750 hardware plus ~€99/mo and 2.6% per transaction.' },
    { name: 'Toast Pay', fail: 'Requires Toast POS — not common in Malta.' },
    { name: 'Zettle / SumUp', fail: 'Waiter brings the reader. Guest still waits. Same flow, different gadget.' },
    { name: 'Revolut links', fail: 'Waiter creates a link per table. Extra work. No bill integration.' },
  ],
  faqs: PAY_META.faqs,
  related: [
    { label: 'Direct Orders', href: '/h360/restaurant-table-ordering-qr-malta' },
    { label: 'Stamp Card', href: '/h360/digital-stamp-card-restaurant-malta' },
    { label: 'All H360 tools', href: '/h360#h360-products' },
  ],
};
