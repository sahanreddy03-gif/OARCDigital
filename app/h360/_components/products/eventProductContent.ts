/** EVENT — H360-PRODUCT-CONTENT-BRAIN.md */
import type { ProductMetaConfig } from './buildProductMetadata';
import type { H360ProductPageConfig } from './H360ProductPageLayout';

const PATH = '/h360/restaurant-event-promotion-malta';

const GATE2 = {
  question: 'How do I promote an event at my restaurant?',
  answer:
    'Create one event page, share one link, collect RSVPs with caps and reminders — not Eventbrite fees or a Facebook post seen by 50 of 2,000 followers. OARC Digital\'s H360 EVENT tells your customers about live music or wine nights, sends reminders to confirmed guests, and shows sold-out when you\'re full. Built for Malta restaurants where event night should fill the room, not surprise you with 80 walk-ins and no prep.',
};

export const EVENT_META: ProductMetaConfig = {
  brainId: 'EVENT',
  path: PATH,
  title: 'Restaurant Event Promotion Malta | OARC Digital — H360',
  description:
    'Restaurant event promotion for Malta — RSVPs, reminders, sold-out caps. Fill the room on event night. H360 by OARC Digital.',
  keywords: ['restaurant event promotion malta', 'restaurant live music promotion malta', 'restaurant event booking malta'],
  og: { title: 'Fill the room Friday', subtitle: 'RSVPs · reminders · H360', eyebrow: 'H360 · Events' },
  breadcrumbName: 'Restaurant events Malta',
  serviceName: 'H360 Restaurant Event Promotion — Malta',
  serviceType: 'Restaurant Event Management',
  faqs: [
    GATE2,
    { question: 'Nobody shows up.', answer: 'Reminders to confirmed guests: "Tomorrow: live music at 8pm. Your table is ready." No-shows drop ~60% with a reminder.' },
    { question: 'Too many people show up.', answer: 'Cap RSVPs. When full, the page shows sold out. You control headcount.' },
    { question: 'We don\'t have a following.', answer: 'EVENT posts to SOCIAL and Google Visibility automatically. Every event builds the next audience.' },
    { question: 'Why not Eventbrite?', answer: 'Per-ticket fees plus generic branding alongside yoga classes. Your event deserves your restaurant\'s look.' },
  ],
};

export const EVENT_PAGE: Omit<H360ProductPageConfig, 'flowFooter'> = {
  eyebrow: 'H360 · Events',
  h1: 'Restaurant event promotion in Malta.',
  ctaName: 'Events',
  hero: {
    ownerPain: 'Live music Friday — only 12 people know. Facebook reach is under 5%. You prep for 80 and get 20, or the opposite.',
    guestGain: 'One link — see the night, RSVP, get a reminder.',
    wedge: 'Not Eventbrite fees or Facebook reach — RSVPs, reminders, sold-out caps.',
    hook: 'You\'re having live music on Friday. EVENT tells everyone. People book. You know how many are coming.',
  },
  visual: 'event-rsvp',
  flow: {
    title: 'Create → share → RSVP → reminder.',
    subtitle: 'One event page. One link. Real headcount before prep night.',
    nodes: [
      { id: 'create', label: 'Event page', detail: 'Menu · time · cap' },
      { id: 'share', label: 'One link', detail: 'Instagram · WhatsApp' },
      { id: 'rsvp', label: 'RSVPs in', detail: 'Sold out when full' },
      { id: 'remind', label: 'Reminder', detail: '60% fewer no-shows' },
    ],
  },
  compare: {
    title: 'Facebook reach vs RSVPs you can prep for.',
    subtitle: 'One event page, one link, real headcount before you buy ingredients.',
    brainLine:
      'Eventbrite takes 2–3% per ticket and lists you next to yoga classes. H360 EVENT fills the room — reminders cut no-shows ~60%.',
    visual: 'event-rsvp-fill',
  },
  expertTitle: 'Why Eventbrite and Facebook fail event night.',
  expertSubtitle: 'Fees, generic pages, or posts nobody sees.',
  expertFails: [
    { name: 'Eventbrite', fail: '2–3% + €0.99 per ticket. Your event listed next to corporate training and yoga.' },
    { name: 'Facebook Events', fail: 'Under 5% organic reach. "I\'ll be there" comments — no real headcount.' },
    { name: 'WhatsApp broadcast', fail: 'No RSVP tracking. People say yes and don\'t show.' },
    { name: 'Sign at the door', fail: 'Only people already outside. No online promotion or prep data.' },
  ],
  faqs: EVENT_META.faqs,
  related: [
    { label: 'Booking', href: '/h360/restaurant-booking-system-malta' },
    { label: 'Social & Ads', href: '/h360/restaurant-social-media-malta' },
    { label: 'All H360 tools', href: '/h360#h360-products' },
  ],
};
