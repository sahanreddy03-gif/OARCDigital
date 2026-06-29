/** ANALYTICS — H360-PRODUCT-CONTENT-BRAIN.md */
import type { ProductMetaConfig } from './buildProductMetadata';
import type { H360ProductPageConfig } from './H360ProductPageLayout';

const PATH = '/h360/restaurant-analytics-without-pos-malta';

const GATE2 = {
  question: 'How do I track my restaurant numbers without a POS?',
  answer:
    'Type one number at closing: "I made €1,200 today." OARC Digital\'s H360 ANALYTICS builds trends from that — no POS integration, no Toast terminal, no spreadsheet nobody updates. WhatsApp reminder at 9pm if you forget. Rolling 7-day and 30-day averages so one busy Friday doesn\'t skew the picture. Built for Malta restaurants on a cash register and notebook.',
};

export const ANALYTICS_META: ProductMetaConfig = {
  brainId: 'ANALYTICS',
  path: PATH,
  title: 'Restaurant Analytics Without POS Malta | OARC Digital — H360',
  description:
    'Restaurant analytics without POS for Malta — type today\'s total, see trends. H360 by OARC Digital.',
  keywords: ['restaurant analytics without pos malta', 'restaurant revenue tracking malta', 'restaurant business data malta'],
  og: { title: 'One number at close', subtitle: 'Trends without POS · H360', eyebrow: 'H360 · Analytics' },
  breadcrumbName: 'Restaurant analytics Malta',
  serviceName: 'H360 Restaurant Analytics — Malta',
  serviceType: 'Restaurant Business Analytics',
  faqs: [
    GATE2,
    { question: 'I won\'t enter the number every day.', answer: 'WhatsApp reminder at 9pm. Miss 3 days? We ask if everything\'s ok. One reply keeps the trend alive.' },
    { question: 'Average spend is just a guess.', answer: 'We start at €22 typical. After 30 days we calculate actual average from your entries.' },
    { question: 'One huge day skews everything.', answer: 'Rolling 7-day and 30-day averages — one spike doesn\'t distort the trend.' },
    { question: 'I already use accounting software.', answer: 'Accounting is last month for tax. ANALYTICS is today for operational decisions. Both coexist.' },
  ],
};

export const ANALYTICS_PAGE: Omit<H360ProductPageConfig, 'flowFooter'> = {
  eyebrow: 'H360 · Analytics',
  h1: 'Restaurant analytics without POS in Malta.',
  ctaName: 'Analytics',
  hero: {
    ownerPain: 'No POS? You don\'t know what you made today — let alone whether Tuesday is trending up or down. Gut feel leaks money.',
    guestGain: 'Smoother nights — you\'re stocked and staffed because you saw it coming.',
    wedge: 'No POS integration — "I made €1,200 today" is all we need.',
    hook: 'It tells you how your restaurant is doing — customers, money, what people liked.',
  },
  visual: 'daily-revenue',
  flow: {
    title: 'Close → one number → trends → decisions.',
    subtitle: '"I made €1,200 today." — that\'s all the system needs.',
    nodes: [
      { id: 'close', label: 'Closing time', detail: '9pm WhatsApp ping' },
      { id: 'type', label: 'One number', detail: 'Today\'s total €' },
      { id: 'trend', label: 'Trends build', detail: '7-day · 30-day avg' },
      { id: 'act', label: 'You decide', detail: 'Staff · stock · hours' },
    ],
  },
  compare: {
    title: 'Gut feel vs one number at close.',
    subtitle: '"I made €1,200 today" — that\'s all H360 needs to show trends without a POS.',
    brainLine:
      'Toast Analytics needs Toast POS. H360 ANALYTICS is for Malta venues on a cash register — WhatsApp reminds you at 9pm if you forget.',
    visual: 'analytics-trend',
  },
  expertTitle: 'Why POS analytics and spreadsheets fail you.',
  expertSubtitle: 'No POS data to connect — or a sheet nobody updates.',
  expertFails: [
    { name: 'Toast Analytics', fail: 'Requires Toast POS — not common in Malta small venues.' },
    { name: '7Shifts', fail: 'Labor analytics — needs POS sales data you don\'t have.' },
    { name: 'Excel / Sheets', fail: 'Nobody updates consistently. Raw numbers, no alerts, no insights.' },
    { name: 'Gut feel', fail: '"It felt busier" is not data. You can\'t spot leaks or seasonality.' },
  ],
  faqs: ANALYTICS_META.faqs,
  related: [
    { label: 'Recipe Costing', href: '/h360/recipe-costing-restaurant-malta' },
    { label: 'Full System', href: '/h360/restaurant-management-system-malta' },
    { label: 'All H360 tools', href: '/h360#h360-products' },
  ],
};
