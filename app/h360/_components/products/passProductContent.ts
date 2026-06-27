/** PASS — wallet loyalty; brain + hub card wedge */
import type { ProductMetaConfig } from './buildProductMetadata';
import type { H360ProductPageConfig } from './H360ProductPageLayout';

const PATH = '/h360/restaurant-loyalty-card-malta';

const GATE2 = {
  question: 'How do I run a loyalty program for my restaurant?',
  answer:
    'Guests save a loyalty card to Apple or Google Wallet — no app download. OARC Digital\'s H360 PASS rewards every visit automatically and connects to STAMP, TEXT, and WhatsApp so you own the guest relationship. Built for Malta restaurants where nobody installs a single-venue app.',
};

export const PASS_META: ProductMetaConfig = {
  brainId: 'PASS',
  path: PATH,
  title: 'Restaurant Loyalty Card Malta | OARC Digital — H360',
  description:
    'Restaurant loyalty card in Apple & Google Wallet for Malta — no app download, rewards every visit. H360 by OARC Digital.',
  keywords: ['restaurant loyalty card malta', 'digital loyalty card restaurant', 'apple wallet restaurant malta'],
  og: { title: 'Wallet loyalty card', subtitle: 'No app download · Malta · H360', eyebrow: 'H360 · Wallet Pass' },
  breadcrumbName: 'Restaurant loyalty card Malta',
  serviceName: 'H360 Restaurant Wallet Loyalty — Malta',
  serviceType: 'Restaurant Loyalty Wallet Pass',
  faqs: [
    GATE2,
    {
      question: 'Will guests download a restaurant app?',
      answer: 'No — and that\'s why single-restaurant apps fail. PASS lives in Apple or Google Wallet, already on their phone.',
    },
    {
      question: 'How is this different from STAMP?',
      answer: 'STAMP is eat-8-get-1-free mechanics. PASS is the wallet card layer — points, tiers, and the connection TEXT and WhatsApp use to win guests back.',
    },
    {
      question: 'Does staff scan every visit?',
      answer: 'Not like Passtastic. PASS auto-credits when paired with STAMP/ORDER — wallet notification, minimal friction.',
    },
  ],
};

export const PASS_PAGE: Omit<H360ProductPageConfig, 'flowFooter'> = {
  eyebrow: 'H360 · Wallet Pass · Live',
  h1: 'Restaurant loyalty card in Malta — Apple & Google Wallet.',
  live: true,
  ctaName: 'Wallet Pass',
  hero: {
    ownerPain:
      'Nobody downloads a restaurant app. Paper cards get lost. You have regulars — but no digital way to reward them or reach them when they drift.',
    guestGain:
      'Loyalty card already on their phone — nothing to download. Rewards show up every visit.',
    wedge: 'Not a single-restaurant app — Apple & Google Wallet, rewards every visit.',
    hook: 'Loyalty card in their phone wallet — tap and save.',
  },
  visual: 'wallet-pass',
  flow: {
    title: 'First visit → wallet → every return rewarded.',
    subtitle: 'The pass is the hub — STAMP, TEXT, and WhatsApp plug into the same guest connection.',
    nodes: [
      { id: 'visit', label: 'First visit', detail: 'QR saves to wallet' },
      { id: 'pass', label: 'Pass live', detail: 'Apple or Google Wallet' },
      { id: 'reward', label: 'Each return', detail: 'Auto reward credit' },
      { id: 'reach', label: 'You reach them', detail: 'TEXT · WhatsApp ready' },
    ],
  },
  expertTitle: 'Why apps and paper fail for Malta loyalty.',
  expertSubtitle: 'Starbucks scale apps don\'t work for a 40-seat Valletta trattoria.',
  expertFails: [
    { name: 'Single-restaurant app', fail: 'Nobody downloads it. Period. You need national scale — you have one venue.' },
    { name: 'Starbucks model', fail: 'Built for 32M app users. A Malta restaurant needs wallet, not another icon on page 4.' },
    { name: 'Passtastic scanners', fail: 'Waiter scans phone every visit. Busy service = 50% forgotten.' },
    { name: 'Paper cards', fail: 'No data, no push, no win-back when they stop coming.' },
  ],
  faqs: PASS_META.faqs,
  related: [
    { label: 'Stamp Card', href: '/h360/digital-stamp-card-restaurant-malta' },
    { label: 'SMS', href: '/h360/restaurant-sms-marketing-malta' },
    { label: 'WhatsApp', href: '/h360/whatsapp-marketing-restaurant-malta' },
    { label: 'All H360 tools', href: '/h360#h360-products' },
  ],
};
