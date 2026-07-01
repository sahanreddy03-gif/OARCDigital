/**
 * ORDER — content from H360-PRODUCT-CONTENT-BRAIN.md
 * Wedge + expert-fails + failure modes sourced from brain (LOCAL section holds ORDER body).
 */
import type { BrainProductId } from '../product-cards/productCardsData';

export const ORDER_BRAIN_ID = 'ORDER' satisfies BrainProductId;

export const ORDER_PATH = '/h360/restaurant-table-ordering-qr-malta';

export const ORDER_META = {
  title: 'Restaurant Table Ordering QR Malta | OARC Digital — H360',
  description:
    'Malta restaurant table ordering by QR — guests scan, order from their phone, kitchen prints it. Zero commission, no POS required. H360 by OARC Digital — built for Malta restaurants on the road to #1.',
};

export const ORDER_HERO = {
  eyebrow: 'H360 · Direct Orders · Live',
  h1: 'Restaurant table ordering by QR in Malta.',
  ownerPain: 'Wolt takes 30%. Hundreds gone on a busy night — and those guests are not yours.',
  guestGain: 'Scan. Tap. Kitchen sees it. No wrong order on a pad.',
  wedge: 'Not Wolt. Scan → order → kitchen. No POS. No Sunday terminal.',
  hook: 'Menu on their phone. Tap what they want. You keep the margin.',
};

export const ORDER_STEPS = [
  { id: 'qr', label: 'Scan table QR', sub: 'Menu opens on their phone', icon: 'qr' as const },
  { id: 'tap', label: 'Tap & send', sub: 'Kitchen ticket prints', icon: 'tap' as const },
  { id: 'margin', label: 'You keep margin', sub: '€0 commission', icon: 'margin' as const },
] as const;

/** Brain: ORDER flow + Wolt comparison maths */
export const ORDER_FLOW_DIAGRAM = {
  title: 'Scan → tap → kitchen',
  subtitle: ORDER_HERO.hook,
  nodes: [
    { id: 'guest', label: 'Scan QR', detail: 'Tent card on table' },
    { id: 'menu', label: 'Tap order', detail: 'Menu on phone' },
    { id: 'kitchen', label: 'Kitchen', detail: 'Ticket prints' },
    { id: 'owner', label: 'Keep margin', detail: '€0 commission' },
  ],
} as const;

export const ORDER_MARGIN_COMPARE = {
  title: 'Same busy night. Two different outcomes.',
  wolt: {
    label: 'Wolt / Bolt',
    daily: '€500/day orders',
    fee: '22% commission',
    monthly: '≈ €3,300/month in fees',
    note: 'Guest data stays with the app',
  },
  direct: {
    label: 'H360 ORDER',
    daily: '€500/day orders',
    fee: '€0 commission',
    monthly: 'Margin stays in your till',
    note: 'You own the guest list',
  },
  brainLine: 'On €500/day at 22% commission you pay roughly €3,300/month in fees. Direct QR ordering keeps that margin.',
} as const;

export const ORDER_DISH_COMPARE = {
  dish: '€15 pasta',
  woltFee: '−€4.50 (30%)',
  youKeep: '€15.00 direct',
} as const;

export const ORDER_GATE2 = {
  question: 'How do guests order from the table by QR?',
  answer:
    'Guests scan a QR code on the table. It opens your digital menu on their phone. They pick dishes, add a note if needed, and submit — the order prints in the kitchen or shows on a tablet. OARC Digital\'s H360 ORDER runs without a POS or delivery-app commission: the restaurant keeps the full order value and owns the guest relationship.',
};

export const ORDER_EXPERT_FAILS = [
  { name: 'Wolt / Bolt', fail: '15–30% per order. Guest data stays with the app.' },
  { name: 'Owner.com / ChowNow', fail: '$99–199/mo. You bring every customer.' },
  { name: 'Toast ordering', fail: 'Requires Toast POS. Rare in Malta.' },
  { name: 'WhatsApp DIY', fail: 'Lost messages. Wrong items. No kitchen ticket.' },
] as const;

export const ORDER_FAQS = [
  ORDER_GATE2,
  {
    question: 'Do I need delivery drivers for QR table ordering?',
    answer:
      'No. ORDER is for guests at your tables (and takeout pickup if you want). They come to you — no fleet required. Most Malta restaurants that do not deliver still use QR ordering every night.',
  },
  {
    question: 'Guests only know Wolt — how do they switch?',
    answer:
      'Put your ordering link on Google Business Profile, Instagram bio, and your website. When someone calls: "Order at [link]." Over time, regulars order direct and you stop paying commission.',
  },
  {
    question: 'Can we use our existing kitchen printer?',
    answer:
      'Yes. ORDER works with common thermal printers (Epson, Star) or a kitchen tablet. No new hardware stack required.',
  },
  {
    question: 'What if the menu changes daily?',
    answer:
      'Send a WhatsApp: "New menu today." We update within minutes, or you edit from the dashboard.',
  },
  {
    question: 'Why switch if Wolt already works?',
    answer:
      'On €500/day at 22% commission you pay roughly €3,300/month in fees. Direct QR ordering keeps that margin. The maths is obvious once you see a week of orders on your own link.',
  },
] as const;

export const ORDER_RELATED = [
  { label: 'QR Payment', href: '/h360/restaurant-qr-payment-malta' },
  { label: 'Stamp Card', href: '/h360/digital-stamp-card-restaurant-malta' },
  { label: 'WhatsApp', href: '/h360/whatsapp-marketing-restaurant-malta' },
  { label: 'All H360 tools', href: '/h360#h360-products' },
] as const;

/** Page shell for standalone builder */
export const ORDER_PAGE = {
  eyebrow: ORDER_HERO.eyebrow,
  h1: ORDER_HERO.h1,
  ctaName: 'ORDER',
  hero: {
    ownerPain: ORDER_HERO.ownerPain,
    guestGain: ORDER_HERO.guestGain,
    wedge: ORDER_HERO.wedge,
    hook: ORDER_HERO.hook,
  },
  visual: 'direct-order' as const,
  flow: {
    title: ORDER_FLOW_DIAGRAM.title,
    subtitle: ORDER_FLOW_DIAGRAM.subtitle,
    nodes: ORDER_FLOW_DIAGRAM.nodes,
  },
  expertTitle: 'Wolt is not owning the order.',
  expertSubtitle: 'Built for Malta restaurants — not US chains.',
  expertFails: ORDER_EXPERT_FAILS,
  faqs: ORDER_FAQS,
  related: ORDER_RELATED,
};
