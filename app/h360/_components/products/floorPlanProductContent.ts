/** FLOOR_PLAN — H360-PRODUCT-CONTENT-BRAIN.md */
import type { ProductMetaConfig } from './buildProductMetadata';
import type { H360ProductPageConfig } from './H360ProductPageLayout';

const PATH = '/h360/restaurant-table-management-malta';

const GATE2 = {
  question: 'How do I manage tables and seating in my restaurant?',
  answer:
    'A live floor map on any phone — green free, red full, yellow clearing. OARC Digital\'s H360 FLOOR PLAN is just a map: one tap to seat, merge tables for parties, split back when they leave. Not OpenTable per-cover fees or $200/mo SevenRooms. Built for Malta restaurants where the host doesn\'t know which table is free during a Friday rush.',
};

export const FLOOR_PLAN_META: ProductMetaConfig = {
  brainId: 'FLOOR_PLAN',
  path: PATH,
  title: 'Restaurant Table Management Malta | OARC Digital — H360',
  description:
    'Restaurant table management for Malta — live floor map, green/red status, merge tables. H360 by OARC Digital.',
  keywords: ['restaurant table management malta', 'restaurant floor plan malta', 'table seating restaurant malta'],
  og: { title: 'Green free · red full', subtitle: 'Live floor map · H360', eyebrow: 'H360 · Floor Plan' },
  breadcrumbName: 'Table management Malta',
  serviceName: 'H360 Restaurant Floor Plan — Malta',
  serviceType: 'Restaurant Table Management',
  faqs: [
    GATE2,
    { question: 'Nobody updates the map.', answer: 'One tap when guest sits or leaves. Host already has their phone — 1 second.' },
    { question: 'We don\'t have a host tablet.', answer: 'Works on any phone. No dedicated hardware.' },
    { question: 'Tables get merged for big parties.', answer: 'Tap two adjacent tables → merge. Split back when the party leaves.' },
    { question: 'We only have 5 tables.', answer: 'Still worth knowing which table has sat longest — faster turns on busy nights.' },
  ],
};

export const FLOOR_PLAN_PAGE: Omit<H360ProductPageConfig, 'flowFooter'> = {
  eyebrow: 'H360 · Floor Plan',
  h1: 'Restaurant table management in Malta.',
  ctaName: 'Floor Plan',
  hero: {
    ownerPain: 'Host doesn\'t know which table is free. Walk-ins wait while two tables sit empty. Friday chaos at the door.',
    guestGain: 'Seated faster — less waiting at the door on a busy Friday.',
    wedge: 'Not €200/mo table software — live floor map, one tap to seat.',
    hook: 'A map of all your tables. Green = free. Red = full. You see who\'s sitting where.',
  },
  visual: 'floor-map',
  flow: {
    title: 'Map → tap → seated → turn faster.',
    subtitle: 'Just a map. Green. Red. Yellow. That\'s it.',
    nodes: [
      { id: 'map', label: 'Floor map', detail: 'All tables live' },
      { id: 'tap', label: 'One tap', detail: 'Seat · clear · merge' },
      { id: 'see', label: 'Everyone sees', detail: 'Host · waiters · phone' },
      { id: 'turn', label: 'Faster turns', detail: 'No empty tables hidden' },
    ],
  },
  expertTitle: 'Why OpenTable bundles fail small floors.',
  expertSubtitle: 'Per-cover fees and reservation ERP — you need a map.',
  expertFails: [
    { name: 'OpenTable', fail: 'Per-cover fee plus reservation bundle. Complex for 15 tables.' },
    { name: 'SevenRooms', fail: '$200+/mo enterprise table management for fine dining groups.' },
    { name: 'ResDiary', fail: '€39–199/mo. Learning curve for accurate floor diagrams.' },
    { name: 'Host\'s head', fail: 'Friday rush — wrong table, long waits, slow turns.' },
  ],
  faqs: FLOOR_PLAN_META.faqs,
  related: [
    { label: 'Booking', href: '/h360/restaurant-booking-system-malta' },
    { label: 'Staff', href: '/h360/restaurant-staff-scheduling-malta' },
    { label: 'All H360 tools', href: '/h360#h360-products' },
  ],
};
