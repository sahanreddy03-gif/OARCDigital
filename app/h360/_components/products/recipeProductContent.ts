/** RECIPE — H360-PRODUCT-CONTENT-BRAIN.md */
import type { ProductMetaConfig } from './buildProductMetadata';
import type { H360ProductPageConfig } from './H360ProductPageLayout';

const PATH = '/h360/recipe-costing-restaurant-malta';

const GATE2 = {
  question: 'How do I work out profit per dish?',
  answer:
    'Enter what\'s in each dish once — ingredients and quantities. OARC Digital\'s H360 RECIPE calculates real food cost and margin per plate, flags when ingredient prices jump, and shows which dishes leak money. Not $199/mo US tools or a spreadsheet from 2023 with tomato prices that doubled. Built for Malta restaurants where the chef cooks by feel but the owner needs numbers.',
};

export const RECIPE_META: ProductMetaConfig = {
  brainId: 'RECIPE',
  path: PATH,
  title: 'Recipe Costing Restaurant Malta | OARC Digital — H360',
  description:
    'Recipe costing for Malta restaurants — real profit per dish, ingredient costs, margin alerts. H360 by OARC Digital.',
  keywords: ['recipe costing restaurant malta', 'food cost calculator restaurant', 'profit per dish restaurant malta'],
  og: { title: 'Real margin per plate', subtitle: 'Not guesswork · H360', eyebrow: 'H360 · Recipe Costing' },
  breadcrumbName: 'Recipe costing Malta',
  serviceName: 'H360 Recipe Costing — Malta',
  serviceType: 'Restaurant Recipe Costing',
  faqs: [
    GATE2,
    { question: 'Chef cooks by feel — no exact quantities.', answer: 'Start with estimates. A handful of spinach = 50g. 80% accuracy beats 0% guesswork.' },
    { question: 'Ingredient prices change weekly.', answer: 'Update monthly or connect to INVENTORY price history. RECIPE flags big price jumps.' },
    { question: 'Daily specials change — too much work.', answer: 'Calculate your 80% staple dishes. Specials get one combined cost line.' },
    { question: 'What about labor cost?', answer: 'RECIPE tracks food cost only. Labor is a separate operational question.' },
  ],
};

export const RECIPE_PAGE: Omit<H360ProductPageConfig, 'flowFooter'> = {
  eyebrow: 'H360 · Recipe Costing',
  h1: 'Recipe costing for restaurants in Malta.',
  ctaName: 'Recipe Costing',
  hero: {
    ownerPain: 'You think pasta makes 70% margin. Tomatoes doubled. Portions crept up. The spreadsheet from 2023 is lying.',
    guestGain: 'Fair menu prices — you\'re not subsidising a dish that loses money.',
    wedge: 'Not $199/mo US tools — enter ingredients once, see real food cost.',
    hook: 'You tell us what\'s in each dish. We tell you how much profit you make on every plate.',
  },
  visual: 'dish-margin',
  flow: {
    title: 'Ingredients → cost → margin → kill losers.',
    subtitle: 'Enter once. Update prices when suppliers change.',
    nodes: [
      { id: 'enter', label: 'Enter recipe', detail: 'Ingredients · portions' },
      { id: 'cost', label: 'Food cost', detail: 'Latest prices' },
      { id: 'margin', label: 'Margin %', detail: 'Per dish · per menu' },
      { id: 'fix', label: 'Fix menu', detail: 'Raise or remove losers' },
    ],
  },
  expertTitle: 'Why spreadsheets and chef guesses fail.',
  expertSubtitle: 'Nobody updates the sheet. "About €4" isn\'t a number you can bank on.',
  expertFails: [
    { name: 'MarginEdge', fail: '$199/mo. US suppliers and QuickBooks — not Malta small venues.' },
    { name: 'Restaurant365', fail: '$500+/mo. Weeks of implementation. Needs dedicated staff.' },
    { name: 'Spreadsheet', fail: 'Prices from 2023. Portions drift. Owner thinks 70%, actually 55%.' },
    { name: 'Chef\'s brain', fail: 'Tomato prices doubled — chef didn\'t notice. Profit per dish is a guess.' },
  ],
  faqs: RECIPE_META.faqs,
  related: [
    { label: 'Stock', href: '/h360/restaurant-stock-management-malta' },
    { label: 'Analytics', href: '/h360/restaurant-analytics-without-pos-malta' },
    { label: 'All H360 tools', href: '/h360#h360-products' },
  ],
};
