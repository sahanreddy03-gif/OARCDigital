/** STAFF — H360-PRODUCT-CONTENT-BRAIN.md */
import type { ProductMetaConfig } from './buildProductMetadata';
import type { H360ProductPageConfig } from './H360ProductPageLayout';

const PATH = '/h360/restaurant-staff-scheduling-malta';

const GATE2 = {
  question: 'How do I schedule my restaurant staff?',
  answer:
    'Roster lives in WhatsApp — the app your team already uses. OARC Digital\'s H360 STAFF sends tomorrow\'s shift, staff reply yes or no, and sick cover blasts to off-duty staff in minutes. Not $40/mo 7Shifts where everyone downloads another app. Built for Malta restaurants where "Who\'s working Saturday?" means scrolling a WhatsApp group.',
};

export const STAFF_META: ProductMetaConfig = {
  brainId: 'STAFF',
  path: PATH,
  title: 'Restaurant Staff Scheduling Malta | OARC Digital — H360',
  description:
    'Restaurant staff scheduling for Malta — roster in WhatsApp, yes/no confirmations, sick cover in minutes. H360 by OARC Digital.',
  keywords: ['restaurant staff scheduling malta', 'restaurant roster malta', 'staff scheduling whatsapp restaurant'],
  og: { title: 'Roster in WhatsApp', subtitle: 'Yes or no · sick cover · H360', eyebrow: 'H360 · Staff' },
  breadcrumbName: 'Staff scheduling Malta',
  serviceName: 'H360 Restaurant Staff Scheduling — Malta',
  serviceType: 'Restaurant Staff Scheduling',
  faqs: [
    GATE2,
    { question: 'Staff don\'t confirm.', answer: 'Two reminders. After the third with no reply: "John hasn\'t confirmed. Call him."' },
    { question: 'Someone calls in sick 30 minutes before shift.', answer: 'Staff texts "Sick" → STAFF messages everyone off that day. First reply gets the shift.' },
    { question: 'I forget to set the schedule.', answer: 'STAFF asks daily at 6pm: "What\'s tomorrow? Reply with names and times."' },
    { question: 'Why not 7Shifts?', answer: '$40+/mo. Staff download an app and remember passwords. Four staff don\'t need tip pooling ERP.' },
  ],
};

export const STAFF_PAGE: Omit<H360ProductPageConfig, 'flowFooter'> = {
  eyebrow: 'H360 · Staff',
  h1: 'Restaurant staff scheduling in Malta.',
  ctaName: 'Staff',
  hero: {
    ownerPain: 'Who\'s working Saturday? Scroll WhatsApp. Staff say yes and don\'t show. Sick call — no replacement plan.',
    guestGain: 'Faster service — the right team is on the floor.',
    wedge: 'Not a €3/staff scheduling app — roster in WhatsApp, confirmed in one tap.',
    hook: 'You tell us who\'s working tomorrow. We send them a message. They say yes or no.',
  },
  visual: 'staff-roster',
  flow: {
    title: 'Roster → WhatsApp → confirm → cover sick.',
    subtitle: 'The scheduling product that lives where your team already is.',
    nodes: [
      { id: 'set', label: 'Set roster', detail: 'Names · times' },
      { id: 'send', label: 'WhatsApp sent', detail: 'Each staff member' },
      { id: 'yes', label: 'Yes / no', detail: 'Tracked for you' },
      { id: 'sick', label: 'Sick cover', detail: 'Blast off-duty staff' },
    ],
  },
  compare: {
    title: 'WhatsApp chaos vs confirmed roster.',
    subtitle: 'Staff reply yes or no in the app they already use — sick cover in minutes.',
    brainLine:
      '7Shifts is $40+/mo and another app to download. H360 STAFF lives in WhatsApp — roster sent, confirmations tracked, cover blasted when someone\'s sick.',
    visual: 'staff-whatsapp',
  },
  expertTitle: 'Why 7Shifts and WhatsApp groups fail.',
  expertSubtitle: 'Another app to learn — or messages lost in the group chat.',
  expertFails: [
    { name: '7Shifts', fail: '$40+/mo. Staff download app. Tip pooling you don\'t need.' },
    { name: 'Deputy', fail: '$4.50/staff/month. General workforce app — not restaurant-simple.' },
    { name: 'WhatsApp group', fail: 'Messages buried. "Who\'s working?" — someone counts manually.' },
    { name: 'Owner\'s memory', fail: 'Sick call, no backup. Only you know the schedule.' },
  ],
  faqs: STAFF_META.faqs,
  related: [
    { label: 'Floor Plan', href: '/h360/restaurant-table-management-malta' },
    { label: 'Events', href: '/h360/restaurant-event-promotion-malta' },
    { label: 'All H360 tools', href: '/h360#h360-products' },
  ],
};
