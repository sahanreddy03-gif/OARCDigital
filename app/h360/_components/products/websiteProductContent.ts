/** WEBSITE — H360-PRODUCT-CONTENT-BRAIN.md */
import type { ProductMetaConfig } from './buildProductMetadata';
import type { H360ProductPageConfig } from './H360ProductPageLayout';

const PATH = '/h360/restaurant-website-malta';

const GATE2 = {
  question: 'Do I need a website for my restaurant?',
  answer:
    'Yes — every restaurant needs one place online where customers find hours, menu, and location under your control. Without it, TripAdvisor or Facebook owns your story. OARC Digital\'s H360 WEBSITE builds a real restaurant site in 10 minutes: menu that works on mobile, Google-ready structure, updates via WhatsApp when the menu changes. Not Wix DIY — not a €500/mo BentoBox kickoff call.',
};

export const WEBSITE_META: ProductMetaConfig = {
  brainId: 'WEBSITE',
  path: PATH,
  title: 'Restaurant Website Malta | OARC Digital — H360',
  description:
    'Restaurant website for Malta — menu online in 10 minutes, built for Google and walk-ins. H360 by OARC Digital.',
  keywords: ['restaurant website malta', 'restaurant menu website malta', 'build restaurant website malta'],
  og: { title: 'Menu online in 10 minutes', subtitle: 'Google-ready · Malta · H360', eyebrow: 'H360 · Website' },
  breadcrumbName: 'Restaurant website Malta',
  serviceName: 'H360 Restaurant Website — Malta',
  serviceType: 'Restaurant Website Builder',
  faqs: [
    GATE2,
    {
      question: 'Nobody visits restaurant websites anymore.',
      answer: 'When someone searches your name + Sliema, the website is the first result. That\'s where they check hours and menu. 1 in 5 visitors walk through the door.',
    },
    {
      question: 'I already have a Facebook page.',
      answer: 'Facebook is not a website. People search Google, not Facebook. The menu is buried under posts. You don\'t control how it looks.',
    },
    {
      question: 'The menu changes every week.',
      answer: 'Send the new menu via WhatsApp. We update within 24 hours.',
    },
    {
      question: 'I don\'t have good photos.',
      answer: 'We use whatever you send — phone photos look good when arranged properly. Or we use your menu shots and Instagram.',
    },
  ],
};

export const WEBSITE_PAGE: Omit<H360ProductPageConfig, 'flowFooter'> = {
  eyebrow: 'H360 · Website',
  h1: 'Restaurant website for Malta.',
  ctaName: 'Website',
  hero: {
    ownerPain:
      'No website means TripAdvisor owns your story. People search your name — they find outdated hours on a third-party site, not your menu.',
    guestGain:
      'Menu, hours, and directions in their language before they arrive.',
    wedge: 'Not Wix DIY — a real restaurant site built for Google and walk-ins.',
    hook: 'A website for your restaurant. Menu, location, photos. People find you on Google.',
  },
  visual: 'website-phone',
  flow: {
    title: 'Send menu → site live → Google finds you.',
    subtitle: '10 minutes to set up. Updates via WhatsApp when the menu changes.',
    nodes: [
      { id: 'send', label: 'Send menu', detail: 'WhatsApp or photos' },
      { id: 'build', label: 'Site built', detail: 'Mobile-first menu' },
      { id: 'google', label: 'Google indexes', detail: 'Name + location rank' },
      { id: 'walk', label: 'Walk-ins', detail: '1 in 5 visit' },
    ],
  },
  compare: {
    title: 'TripAdvisor owns your story vs your menu online.',
    subtitle: 'When someone searches your name + Sliema, you need one place under your control.',
    brainLine:
      'Wix means hours tweaking templates. H360 WEBSITE is a real restaurant site — menu, hours, booking link — live in 10 minutes, updated via WhatsApp.',
    visual: 'website-before-after',
  },
  expertTitle: 'Why Wix and Facebook fail restaurants.',
  expertSubtitle: 'Too much DIY work — or not a real website at all.',
  expertFails: [
    { name: 'Wix / Squarespace', fail: 'You build it yourself. Templates aren\'t for restaurants — menus break on mobile. Hours lost tweaking.' },
    { name: 'BentoBox', fail: '$150–500/mo. Fine dining process — kickoff calls and design rounds for a 40-seat trattoria.' },
    { name: 'Owner.com', fail: 'US only. Locked into their ordering and payment ecosystem.' },
    { name: 'Facebook page', fail: 'Not indexed like a website. Menu buried. You don\'t control the experience.' },
  ],
  faqs: WEBSITE_META.faqs,
  related: [
    { label: 'Google Visibility', href: '/h360/google-business-profile-restaurant-malta' },
    { label: 'Booking', href: '/h360/restaurant-booking-system-malta' },
    { label: 'All H360 tools', href: '/h360#h360-products' },
  ],
};
