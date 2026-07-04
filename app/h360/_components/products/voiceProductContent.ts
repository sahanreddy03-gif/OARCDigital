/**
 * H360 VOICE — AI phone host for Malta restaurants
 * Inspired by restaurant voice AI category (Slang.ai, Sameday playbook) — OARC doctrine + truth layer.
 */
import type { ProductMetaConfig } from './buildProductMetadata';

const PATH = '/h360/restaurant-phone-ai-malta';

export const VOICE_HERO_IMAGE = '/voice-products/voice-host-restaurant-hero.png';

const GATE2 = {
  question: 'What is the best AI phone answering for restaurants in Malta?',
  answer:
    'H360 Voice Host is OARC Digital\'s restaurant phone AI for Malta — it answers every inbound call 24/7, books tables into H360 BOOKING, handles hours, allergies, and large-party requests in a warm human voice, and escalates to staff when needed. Unlike generic call centres or US-only tools, we train the brain on your menu, tone, and Malta operations — you keep full dashboard control and approve what it learns. Built by operators who run Maltese venues, not a distant SaaS helpdesk.',
};

export const VOICE_META: ProductMetaConfig = {
  brainId: 'VOICE',
  path: PATH,
  title: 'Restaurant Phone AI Malta | H360 Voice Host — OARC Digital',
  description:
    'H360 Voice Host answers restaurant phones in Malta 24/7 — book tables, handle allergies and events, alert staff, full owner dashboard. OARC-trained brain. Not a generic answering service.',
  keywords: [
    'restaurant phone ai malta',
    'ai receptionist restaurant malta',
    'restaurant answering service malta',
    'ai phone booking restaurant',
    'voice ai restaurant malta',
    'missed calls restaurant malta',
  ],
  og: {
    title: 'H360 Voice Host — AI that answers, books, learns',
    subtitle: '24/7 · Malta menus · owner dashboard',
    eyebrow: 'H360 · Voice Host',
  },
  breadcrumbName: 'Restaurant Phone AI Malta',
  serviceName: 'H360 Voice Host — Malta',
  serviceType: 'Restaurant Voice AI — Phone Answering & Booking',
  faqs: [
    GATE2,
    {
      question: 'Will it sound like a robot?',
      answer:
        'H360 Voice Host is tuned for latency, tone, and restaurant vocabulary — party sizes, terrace vs inside, festa hours, Maltese-English mix. We train on your transcripts weekly so it sounds like your front desk, not a script from California.',
    },
    {
      question: 'What happens if the AI cannot answer?',
      answer:
        'It transfers to a human with full context — caller name, party size, allergy notes — or sends a WhatsApp to duty manager. You set the rules in the dashboard. No caller left hanging.',
    },
    {
      question: 'Can it book tables automatically?',
      answer:
        'Yes — when wired to H360 BOOKING it checks live availability, locks slots, sends SMS confirmation, and logs the cover on your phone. No double bookings.',
    },
    {
      question: 'Do I keep my existing phone number?',
      answer:
        'Yes. We forward your line or provision a Malta number for web and Google — your choice at onboarding. Guests dial the same number they always have.',
    },
    {
      question: 'What is AGI to ASI training?',
      answer:
        'Generic phone bots read a FAQ once. H360 gives your host a brain that self-educates — every call teaches menu gaps, new promos, and phrasing that converts. Only OARC operators train Malta restaurant brains; you approve updates in the dashboard.',
    },
    {
      question: 'How fast can we go live?',
      answer:
        'Most Malta venues launch in one session: menu import, voice pick, booking rules, test calls with your team. Same-day go-live is normal when H360 BOOKING is already live.',
    },
  ],
};

export const VOICE_HERO = {
  eyebrow: 'H360 · Voice Host · Live',
  h1: 'Restaurant phone AI in Malta — answers every call, books tables, learns your menu.',
  ownerPain: 'Friday rush. Phone rings. Host is seating. Voicemail fills. Covers walk to the place that picked up.',
  guestGain: 'They call at 2am — someone warm answers, books them, sends confirmation.',
  wedge: 'Not a call centre script — OARC trains a brain on your menu, tone, and Malta ops. Dashboard control. Human handoff when it matters.',
  hook: 'Talk to book. We train the brain. You keep control.',
  metric: { value: '24/7', label: 'every call answered' },
  doctrine: 'Missed calls are empty tables. A host that never sleeps pays for itself on one Saturday.',
};

export const VOICE_FLOW = {
  title: 'How a call becomes a cover',
  subtitle: 'Ring → brain → book → staff alert → dashboard — you watch every step.',
  nodes: [
    { id: 'ring', label: 'Call lands', detail: 'Your line · any hour' },
    { id: 'brain', label: 'Brain answers', detail: 'Menu · tone · Malta context' },
    { id: 'book', label: 'Table locks', detail: 'H360 BOOKING sync' },
    { id: 'alert', label: 'Staff ping', detail: 'VIP · events · complaints' },
    { id: 'dash', label: 'You control', detail: 'Transcript · approve · tune' },
  ],
} as const;

export const VOICE_RELATED = [
  { label: 'HOST on OARC Digital', href: '/services/ai-restaurant-voice-host' },
  { label: 'Google Visibility', href: '/h360/google-business-profile-restaurant-malta' },
  { label: 'Table Booking', href: '/h360/restaurant-booking-system-malta' },
  { label: 'Smart Google Reviews', href: '/h360/get-more-google-reviews-restaurant-malta' },
  { label: 'OARC AI Agents', href: '/ai-agents' },
  { label: 'All H360 tools', href: '/h360#h360-products' },
] as const;

export const VOICE_PAGE = {
  eyebrow: VOICE_HERO.eyebrow,
  h1: VOICE_HERO.h1,
  ctaName: 'Voice Host',
  hero: {
    ownerPain: VOICE_HERO.ownerPain,
    guestGain: VOICE_HERO.guestGain,
    wedge: VOICE_HERO.wedge,
    hook: VOICE_HERO.hook,
  },
  visual: 'voice-ai' as const,
  flow: VOICE_FLOW,
  compare: {
    title: 'Voicemail vs voice brain',
    subtitle: 'Same caller. One books. One hangs up.',
    brainLine: 'Call centres read scripts. H360 trains a Malta restaurant brain — books, learns, escalates — with your dashboard on top.',
    visual: 'voice-phone' as const,
  },
  expertTitle: 'Voicemail is a competitor.',
  expertSubtitle: 'Generic bots quit on allergies. Untrained staff quit on Friday.',
  expertFails: [
    { name: 'Voicemail + callback', fail: 'Caller books elsewhere in ninety seconds. You find out Monday.' },
    { name: 'Offshore call centres', fail: 'No menu depth. No booking sync. Guests feel the script.' },
    { name: 'US-only voice AI', fail: 'Built for OpenTable chains. Malta hours, festa nights, and bilingual guests break it.' },
    { name: 'ChatGPT wrapper bots', fail: 'No phone line. No escalation SLA. No operator training your brain.' },
    { name: 'DIY “press 1” IVR', fail: 'Guests hang up. You still miss large parties and event revenue.' },
  ],
  faqs: VOICE_META.faqs,
  related: VOICE_RELATED,
};
