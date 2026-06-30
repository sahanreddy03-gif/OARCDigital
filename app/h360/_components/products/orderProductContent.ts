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
  ownerPain:
    'Wolt and Bolt take up to 30% of every order. On a busy night that is hundreds of euros gone — and those guests are not yours to bring back. You need table orders that stay on your margin.',
  guestGain:
    'Your guest scans the QR, browses the menu on their phone, and taps what they want — no waving down a waiter, no order written wrong on a pad.',
  wedge:
    'Not Wolt or Bolt — scan, order, kitchen prints it. No POS required. No €250 Sunday terminal.',
  hook: 'You look at the menu on your phone. You tap what you want. The kitchen sees it. Done.',
};

export const ORDER_STEPS = [
  { id: 'qr', label: 'Scan table QR', sub: 'Menu opens on their phone', icon: 'qr' as const },
  { id: 'tap', label: 'Tap & send', sub: 'Kitchen ticket prints', icon: 'tap' as const },
  { id: 'margin', label: 'You keep margin', sub: '€0 commission', icon: 'margin' as const },
] as const;

/** Brain: ORDER flow + Wolt comparison maths */
export const ORDER_FLOW_DIAGRAM = {
  title: 'How table QR ordering works',
  subtitle: ORDER_HERO.hook,
  nodes: [
    { id: 'guest', label: 'Guest at table', detail: 'Scans QR on tent card' },
    { id: 'menu', label: 'Menu on phone', detail: 'Tap dishes · add a note' },
    { id: 'kitchen', label: 'Kitchen ticket', detail: 'Printer or tablet — no shouting' },
    { id: 'owner', label: 'You keep margin', detail: '€0 commission · guest is yours' },
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
  {
    name: 'Wolt / Bolt / Uber Eats',
    fail: '15–30% commission per order. A €15 pasta costs you €4.50 in fees. Guest data stays with the app — you cannot win them back.',
  },
  {
    name: 'Owner.com / ChowNow / GloriaFood',
    fail: '$99–199/mo subscription. You bring every customer yourself. No discovery, no Malta focus.',
  },
  {
    name: 'Toast online ordering',
    fail: 'Requires Toast POS. Not available in Malta for most small venues.',
  },
  {
    name: 'WhatsApp DIY orders',
    fail: 'Messages get lost during service. Wrong items, no payment flow, no kitchen ticket — every mistake is on you.',
  },
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
  expertTitle: 'Why Wolt is not the same as owning the order.',
  expertSubtitle: 'Master the experts, then beat them — built for small Malta restaurants, not US chains.',
  expertFails: ORDER_EXPERT_FAILS,
  faqs: ORDER_FAQS,
  related: ORDER_RELATED,
};
