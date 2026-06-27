/** REST — Full System; hub card + journey wedge (brain TODO filled from hub) */
import type { ProductMetaConfig } from './buildProductMetadata';
import type { H360ProductPageConfig } from './H360ProductPageLayout';

const PATH = '/h360/restaurant-management-system-malta';

const GATE2 = {
  question: 'What is the best all-in-one system for a small restaurant?',
  answer:
    'For a small Malta restaurant, the best system is one source of truth — digital menu, kitchen screen, and owner dashboard that talk to each other without twelve disconnected tools. OARC Digital\'s H360 Full System (REST) replaces paper menus and kitchen shouting: guests see the live menu, orders print in the kitchen, the owner sees what sold today. Not Toast or Lightspeed bundles you don\'t need — built for venues where the owner still runs the floor.',
};

export const REST_META: ProductMetaConfig = {
  brainId: 'REST',
  path: PATH,
  title: 'Restaurant Management System Malta | OARC Digital — H360',
  description:
    'All-in-one restaurant management for Malta — digital menu, kitchen screen, owner dashboard. H360 Full System by OARC Digital.',
  keywords: ['restaurant management system malta', 'restaurant pos alternative malta', 'digital menu kitchen display malta'],
  og: { title: 'Menu · Kitchen · Owner', subtitle: 'One system · Malta · H360', eyebrow: 'H360 · Full System' },
  breadcrumbName: 'Restaurant management Malta',
  serviceName: 'H360 Full Restaurant System — Malta',
  serviceType: 'Restaurant Management System',
  faqs: [
    GATE2,
    {
      question: 'Do I need a full POS to use this?',
      answer: 'No. REST works alongside cash and card as you run today. Digital menu and kitchen routing don\'t require ripping out your till.',
    },
    {
      question: 'How is this different from Toast or Lightspeed?',
      answer: 'Enterprise POS bundles assume multi-location ops and hardware contracts. REST is menu + kitchen + owner view — what a 40-seat Malta restaurant actually uses daily.',
    },
    {
      question: 'Can I start with just the digital menu?',
      answer: 'Yes. Many venues start with menu + QR ordering (ORDER) and add kitchen screen when ready. Same H360 stack grows with you.',
    },
    {
      question: 'Does it connect to my other H360 tools?',
      answer: 'Yes — ORDER, BOOKING, STAMP, and analytics plug into the same guest and menu data. One system, not twelve logins.',
    },
  ],
};

export const REST_PAGE: Omit<H360ProductPageConfig, 'flowFooter'> = {
  eyebrow: 'H360 · Full System',
  h1: 'Restaurant management system for Malta.',
  ctaName: 'Full System',
  hero: {
    ownerPain:
      'Menu on paper. Kitchen on shouting. Owner finds out what sold — and what ran out — too late. Twelve tools that don\'t talk.',
    guestGain:
      'Faster food, fewer mistakes — they leave happy and come back.',
    wedge: 'Not twelve tools that don\'t talk — menu, kitchen, and owner in one system.',
    hook: 'Digital menu. Kitchen screen. Owner dashboard. All connected.',
  },
  visual: 'venue-360',
  flow: {
    title: 'Menu → order → kitchen → owner knows.',
    subtitle: 'One source of truth — not paper tickets and WhatsApp chaos.',
    nodes: [
      { id: 'menu', label: 'Digital menu', detail: 'Live · mobile-first' },
      { id: 'order', label: 'Order in', detail: 'Table QR or staff' },
      { id: 'kitchen', label: 'Kitchen screen', detail: 'Tickets routed' },
      { id: 'owner', label: 'Owner view', detail: 'What sold today' },
    ],
  },
  expertTitle: 'Why enterprise POS is overkill here.',
  expertSubtitle: 'Toast and Lightspeed assume hardware contracts and multi-location ops.',
  expertFails: [
    { name: 'Toast', fail: 'US-centric POS bundle. Not common in Malta. Full replacement, not incremental.' },
    { name: 'Lightspeed', fail: 'Enterprise pricing and setup for venues that need menu + kitchen, not inventory ERP.' },
    { name: 'Paper + shouting', fail: 'Wrong orders, slow service, owner blind until close.' },
    { name: '12 disconnected apps', fail: 'Booking here, loyalty there, reviews somewhere else — nothing shares guest data.' },
  ],
  faqs: REST_META.faqs,
  related: [
    { label: 'Direct Orders', href: '/h360/restaurant-table-ordering-qr-malta' },
    { label: 'Booking', href: '/h360/restaurant-booking-system-malta' },
    { label: 'Analytics', href: '/h360/restaurant-analytics-without-pos-malta' },
    { label: 'All H360 tools', href: '/h360#h360-products' },
  ],
};
