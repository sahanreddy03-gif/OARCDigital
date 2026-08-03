/** INVENTORY — H360-PRODUCT-CONTENT-BRAIN.md */
import type { ProductMetaConfig } from './buildProductMetadata';
import type { H360ProductPageConfig } from './H360ProductPageLayout';

const PATH = '/h360/restaurant-stock-management-malta';

const GATE2 = {
  question: 'How do I track stock and suppliers in my restaurant?',
  answer:
    'Three questions at closing — 30 seconds. OARC Digital\'s H360 INVENTORY learns what you use each week and tells you what to order before you run out of mozzarella mid-service. Not $169/mo MarketMan or a spreadsheet on one computer nobody checks. Built for Malta restaurants where the owner orders at 11pm after closing and the chef knows what\'s low but nobody writes it down.',
};

export const INVENTORY_META: ProductMetaConfig = {
  brainId: 'INVENTORY',
  path: PATH,
  title: 'Restaurant Stock Management Malta | OARC Digital — H360',
  description:
    'Restaurant stock management for Malta — 3 questions at close, order lists by supplier. H360 by OARC Digital.',
  keywords: ['restaurant stock management malta', 'restaurant inventory malta', 'kitchen stock tracking restaurant'],
  og: { title: 'Never run out mid-service', subtitle: '3 questions · 30 sec · H360', eyebrow: 'H360 · Stock' },
  breadcrumbName: 'Restaurant stock Malta',
  serviceName: 'H360 Restaurant Stock Management — Malta',
  serviceType: 'Restaurant Inventory Management',
  faqs: [
    GATE2,
    { question: 'Staff won\'t log everything.', answer: 'One person at closing — owner or head chef — answers 3 questions. No staff training.' },
    { question: 'Quantities are wrong at first.', answer: 'Week 1 is a guess. By week 4 INVENTORY knows your mozzarella usage per week.' },
    { question: 'Multiple suppliers, different days.', answer: 'Orders split by supplier with delivery day: "Send to Supplier A by Monday 6pm."' },
    { question: 'Menu changes every week.', answer: 'Type tomorrow\'s special needs in question 3 — extra 5 seconds.' },
  ],
};

export const INVENTORY_PAGE: Omit<H360ProductPageConfig, 'flowFooter'> = {
  eyebrow: 'H360 · Stock',
  h1: 'Restaurant stock management in Malta.',
  ctaName: 'Stock',
  hero: {
    ownerPain: 'You run out of mozzarella mid-service. The chef knew Tuesday — nobody wrote it down. You order 20 cases when you needed 2.',
    guestGain: 'Their favourite dish is on the menu — not sold out mid-service.',
    wedge: 'Not $169/mo inventory software — 3 questions at close, 30 seconds.',
    hook: 'You tell us what\'s in your kitchen. We tell you when to order more.',
  },
  visual: 'stock-alert',
  flow: {
    title: '3 questions → learn → order list → never run out.',
    subtitle: 'Pre-loaded with 30 common Malta ingredients. Remove what you don\'t use.',
    nodes: [
      { id: 'check', label: '3 questions', detail: '30 sec at close' },
      { id: 'learn', label: 'Usage learns', detail: 'Week 4 accurate' },
      { id: 'alert', label: 'Low stock alert', detail: 'Before service' },
      { id: 'order', label: 'Order list', detail: 'By supplier · day' },
    ],
  },
  compare: {
    title: 'Run out mid-service vs order before Friday.',
    subtitle: '3 questions at close — 30 seconds. INVENTORY learns what you use each week.',
    brainLine:
      'MarketMan is $169/mo with weeks of supplier setup. H360 INVENTORY tells you to order mozzarella by Tuesday — before you 86 the bestseller.',
    visual: 'stock-alert',
  },
  expertTitle: 'Why MarketMan and spreadsheets fail small kitchens.',
  expertSubtitle: 'Enterprise pricing and setup — or a sheet nobody opens before ordering.',
  expertFails: [
    { name: 'MarketMan', fail: '$169/mo. Weeks of supplier and POS setup. Built for multi-location groups.' },
    { name: 'Xenia', fail: '$500+/mo enterprise ops. Minimum locations on some plans.' },
    { name: 'Spreadsheet', fail: 'Lives on one PC. Forgotten before the 11pm order.' },
    { name: 'Paper and pen', fail: 'Lost lists. Illegible counts. 20 cases when you needed 2.' },
  ],
  faqs: INVENTORY_META.faqs,
  related: [
    { label: 'Recipe Costing', href: '/h360/recipe-costing-restaurant-malta' },
    { label: 'Full System', href: '/h360/restaurant-management-system-malta' },
    { label: 'All H360 tools', href: '/h360#h360-products' },
  ],
};
