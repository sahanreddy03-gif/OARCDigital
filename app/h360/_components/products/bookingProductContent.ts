/** BOOKING — H360-PRODUCT-CONTENT-BRAIN.md */
import type { ProductMetaConfig } from './buildProductMetadata';
import type { H360ProductPageConfig } from './H360ProductPageLayout';

const PATH = '/h360/restaurant-booking-system-malta';

const GATE2 = {
  question: 'How do I take table bookings without a system?',
  answer:
    'Replace the notebook with a booking link guests use on their phone — you see who\'s coming tonight, how many, and when. Slots lock in real time so double bookings stop. OARC Digital\'s H360 BOOKING is built for Malta restaurants on a notebook and phone: no OpenTable per-cover fees, no €199/mo ResDiary setup. Morning WhatsApp shows the list — no system to open during service.',
};

export const BOOKING_META: ProductMetaConfig = {
  brainId: 'BOOKING',
  path: PATH,
  title: 'Restaurant Booking System Malta | OARC Digital — H360',
  description:
    'Restaurant booking system for Malta — guests book on their phone, you see who\'s coming, no per-cover fees. H360 by OARC Digital.',
  keywords: ['restaurant booking system malta', 'table booking restaurant malta', 'online reservations restaurant malta'],
  og: { title: 'Bookings without OpenTable', subtitle: 'Notebook → phone link · H360', eyebrow: 'H360 · Booking' },
  breadcrumbName: 'Restaurant booking Malta',
  serviceName: 'H360 Restaurant Booking — Malta',
  serviceType: 'Restaurant Table Booking System',
  faqs: [
    GATE2,
    {
      question: 'Customers won\'t use a link — they\'ll call.',
      answer: 'Some will call. Some book online — tourists, younger guests, people on Instagram at 2am when you\'re closed. The link catches both.',
    },
    {
      question: 'What about double bookings?',
      answer: 'When a slot is booked, it locks. Real-time availability — no more two parties for the same table.',
    },
    {
      question: 'Last-minute bookings online?',
      answer: 'Cutoff rule: bookings must be 1 hour before. Inside 1 hour, they call. You stay in control.',
    },
    {
      question: 'No-shows?',
      answer: 'Confirmation request before the booking. Confirm within 2 hours or the table releases automatically.',
    },
  ],
};

export const BOOKING_PAGE: Omit<H360ProductPageConfig, 'flowFooter'> = {
  eyebrow: 'H360 · Booking',
  h1: 'Restaurant booking system for Malta.',
  ctaName: 'Booking',
  hero: {
    ownerPain:
      'Missed calls during service = empty tables tonight. The notebook gets messy. Someone books but you can\'t check because you\'re plating — double bookings happen.',
    guestGain:
      'Book at 2am from Instagram — no phone tag during your service.',
    wedge: 'Not OpenTable per-cover fees — replaces the notebook, locks slots, no double bookings.',
    hook: 'People book a table on their phone. You see who\'s coming. No more missed calls.',
  },
  visual: 'booking-calendar',
  flow: {
    title: 'Link → slot locked → confirmation → you know tonight.',
    subtitle: 'Built for the restaurant on a notebook — not enterprise table-turn algorithms.',
    nodes: [
      { id: 'link', label: 'Booking link', detail: 'Instagram · Google · website' },
      { id: 'pick', label: 'Guest picks time', detail: 'Real-time slots' },
      { id: 'lock', label: 'Slot locked', detail: 'No double booking' },
      { id: 'list', label: 'Morning list', detail: 'WhatsApp summary' },
    ],
  },
  expertTitle: 'Why OpenTable eats your margin.',
  expertSubtitle: 'Every booking product assumes you\'re already busy and need complex table management.',
  expertFails: [
    { name: 'OpenTable', fail: 'Per-cover fees €1–3 per person. 30% no-shows. Malta doesn\'t have the user base to justify it.' },
    { name: 'ResDiary', fail: '€39–199/mo. Overkill for 15 tables. Takes time to set up and learn.' },
    { name: 'SevenRooms', fail: '$200+/mo enterprise features for a small Valletta trattoria.' },
    { name: 'Phone + notebook', fail: 'Miss calls during rush. Double bookings. Can\'t check while serving.' },
  ],
  faqs: BOOKING_META.faqs,
  related: [
    { label: 'Floor Plan', href: '/h360/restaurant-table-management-malta' },
    { label: 'Events', href: '/h360/restaurant-event-promotion-malta' },
    { label: 'All H360 tools', href: '/h360#h360-products' },
  ],
};
