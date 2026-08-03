/**
 * H360 products — journey order, brain wedges, cluster URLs.
 * wedge = Gate 3 one-liner (why only we can say this) — card weapon for AEO/SEO.
 * guestGain = Hero 2 — what the guest gains so they return to the owner.
 * brainId = codename in H360-PRODUCT-CONTENT-BRAIN.md (display tab names may differ).
 */
export type BrainProductId =
  | 'ANALYTICS'
  | 'BOOKING'
  | 'EVENT'
  | 'FLOOR_PLAN'
  | 'GOOGLE_PROFILE'
  | 'GOOGLE_REVIEWS'
  | 'INVENTORY'
  | 'LOCAL'
  | 'ORDER'
  | 'PASS'
  | 'PAY'
  | 'RECIPE'
  | 'REST'
  | 'SEARCH'
  | 'SEND'
  | 'SOCIAL'
  | 'STAFF'
  | 'STAMP'
  | 'TEXT'
  | 'VOICE'
  | 'WEBSITE';

export type ProductCardData = {
  id: string;
  /** Primary brain section — use for page builds and content lookup */
  brainId: BrainProductId;
  /** Extra brain sections merged into this hub card (e.g. Google Visibility) */
  brainIds?: readonly BrainProductId[];
  tab: string;
  entry: string;
  headline: string;
  wedge: string;
  guestGain: string;
  result: string;
  href: string;
  live: boolean;
  themeIndex: number;
  visual: ProductVisualId;
};

export type ProductVisualId =
  | 'google-visibility'
  | 'voice-ai'
  | 'venue-360'
  | 'maps-rank'
  | 'seo-climb'
  | 'reviews-stars'
  | 'website-phone'
  | 'booking-calendar'
  | 'direct-order'
  | 'qr-pay'
  | 'loyalty-stamps'
  | 'wallet-pass'
  | 'whatsapp-flow'
  | 'sms-return'
  | 'event-rsvp'
  | 'daily-revenue'
  | 'dish-margin'
  | 'stock-alert'
  | 'staff-roster'
  | 'floor-map'
  | 'social-feed'
  | 'decision-hub'
  | 'local-search';

export const PRODUCT_CARDS: ProductCardData[] = [
  {
    id: 'google-visibility',
    brainId: 'GOOGLE_PROFILE',
    brainIds: ['GOOGLE_PROFILE', 'SEARCH', 'LOCAL'],
    tab: 'Google Visibility',
    entry: 'Your Google page is old. People search — they don’t find you.',
    headline: 'Show up first on Google Maps in Malta.',
    wedge: 'Not photos-only — SEO + AEO + AI search + copywriter keywords + ARC data. GBP posts are the tip.',
    guestGain: 'Hungry nearby — they find you on Maps and walk in.',
    result: '847 searches → 37 calls this week',
    href: '/h360/google-business-profile-restaurant-malta',
    live: true,
    themeIndex: 0,
    visual: 'google-visibility',
  },
  {
    id: 'voice-ai',
    brainId: 'VOICE',
    tab: 'Voice Host',
    entry: 'Phone rings during service. Voicemail fills. Covers walk next door.',
    headline: 'AI answers every call — books tables, learns your menu, never sleeps.',
    wedge: 'Not a call-centre script — OARC trains a Malta restaurant brain. Dashboard control. Human handoff when it matters.',
    guestGain: 'They call at 2am — someone warm answers, books them, sends confirmation.',
    result: '24/7 · zero missed booking calls',
    href: '/h360/restaurant-phone-ai-malta',
    live: true,
    themeIndex: 1,
    visual: 'voice-ai',
  },
  {
    id: 'google-reviews',
    brainId: 'GOOGLE_REVIEWS',
    tab: 'Smart Google Reviews',
    entry: 'Competitors have 200 reviews. You have 12.',
    headline: 'We turn every customer into a good Google review — smart timing, personalised strategy, and smart automation.',
    wedge: 'No POS. No Sunday terminal. A QR on the table — one tap to review.',
    guestGain: 'They trust you before they sit down — reviews already sold them.',
    result: '3× more reviews in 90 days',
    href: '/h360/get-more-google-reviews-restaurant-malta',
    live: true,
    themeIndex: 2,
    visual: 'reviews-stars',
  },
  {
    id: 'social',
    brainId: 'SOCIAL',
    tab: 'Social & Ads',
    entry: 'Bad photos. No posts. No ads. Competitors look better online.',
    headline: 'Video, social posts, and paid ads — done for you.',
    wedge: 'Not generic agency posts — completed restaurant content every week, plus paid ads.',
    guestGain: 'They see your food looking real — and book before a competitor.',
    result: 'Look pro online without hiring an agency',
    href: '/h360/restaurant-social-media-malta',
    live: true,
    themeIndex: 17,
    visual: 'social-feed',
  },
  {
    id: 'website',
    brainId: 'WEBSITE',
    tab: 'Website',
    entry: 'No website means TripAdvisor owns your story.',
    headline: 'Your menu online in 10 minutes. Google finds you.',
    wedge: 'Not Wix DIY — a real restaurant site built for Google and walk-ins.',
    guestGain: 'Menu, hours, and directions in their language before they arrive.',
    result: '1 in 5 visitors walk through the door',
    href: '/h360/restaurant-website-malta',
    live: true,
    themeIndex: 3,
    visual: 'website-phone',
  },
  {
    id: 'venue-360',
    brainId: 'REST',
    tab: 'Full System',
    entry: 'Menu on paper. Kitchen on shouting. Owner finds out too late.',
    headline: 'Digital menu. Kitchen screen. Owner dashboard. All automated.',
    wedge: 'Not twelve tools that don’t talk — menu, kitchen, and owner in one system.',
    guestGain: 'Faster food, fewer mistakes — they leave happy and come back.',
    result: 'Menu · Kitchen · Owner — one source of truth',
    href: '/h360/restaurant-management-system-malta',
    live: true,
    themeIndex: 18,
    visual: 'venue-360',
  },
  {
    id: 'booking',
    brainId: 'BOOKING',
    tab: 'Booking',
    entry: 'Missed calls during service = empty tables tonight.',
    headline: 'Guests book on their phone. You see who’s coming.',
    wedge: 'Not OpenTable per-cover fees — replaces the notebook, locks slots, no double bookings.',
    guestGain: 'Book at 2am from Instagram — no phone tag during your service.',
    result: 'Who’s coming tonight — on your phone',
    href: '/h360/restaurant-booking-system-malta',
    live: true,
    themeIndex: 4,
    visual: 'booking-calendar',
  },
  {
    id: 'order',
    brainId: 'ORDER',
    tab: 'Direct Orders',
    entry: 'Wolt takes 30% of every order.',
    headline: 'Keep 100% of every order. Zero commission.',
    wedge: 'Not Wolt or Bolt — scan, order, kitchen prints it. No POS required.',
    guestGain: 'Order from the table — no waving down a waiter.',
    result: 'You keep €52 — not €36.40',
    href: '/h360/restaurant-table-ordering-qr-malta',
    live: true,
    themeIndex: 5,
    visual: 'direct-order',
  },
  {
    id: 'pay',
    brainId: 'PAY',
    tab: 'QR Payment',
    entry: 'Guests wait 15 minutes for the bill.',
    headline: 'Guests pay from the table in seconds.',
    wedge: 'Not €250 Sunday terminals — a QR tent card. That’s it.',
    guestGain: 'Pay when they’re ready — leave without the 15-minute bill wait.',
    result: 'Faster tables · you keep full margin',
    href: '/h360/restaurant-qr-payment-malta',
    live: true,
    themeIndex: 6,
    visual: 'qr-pay',
  },
  {
    id: 'stamp',
    brainId: 'STAMP',
    tab: 'Stamp Card',
    entry: 'Paper stamp cards get lost. Staff forget to stamp.',
    headline: 'Eat 8 times, the 8th is free — automatic.',
    wedge: 'Not paper cards or staff scanning phones — stamps credit themselves.',
    guestGain: 'Free meal feels earned — they chase the last stamp.',
    result: '8th meal free · zero friction',
    href: '/h360/digital-stamp-card-restaurant-malta',
    live: true,
    themeIndex: 7,
    visual: 'loyalty-stamps',
  },
  {
    id: 'pass',
    brainId: 'PASS',
    tab: 'Wallet Pass',
    entry: 'Nobody downloads a restaurant app.',
    headline: 'Loyalty card in their phone wallet.',
    wedge: 'Not a single-restaurant app — Apple & Google Wallet, rewards every visit.',
    guestGain: 'Loyalty card already on their phone — nothing to download.',
    result: 'Guests come back — no app download',
    href: '/h360/restaurant-loyalty-card-malta',
    live: true,
    themeIndex: 8,
    visual: 'wallet-pass',
  },
  {
    id: 'send',
    brainId: 'SEND',
    tab: 'WhatsApp',
    entry: 'Guests visit once — then forget you.',
    headline: 'Bring guests back on WhatsApp.',
    wedge: 'Not generic blasts — smart follow-ups that turn first-timers into regulars.',
    guestGain: 'A personal WhatsApp — not a spam blast.',
    result: 'Maria orders again → becomes a regular',
    href: '/h360/whatsapp-marketing-restaurant-malta',
    live: true,
    themeIndex: 9,
    visual: 'whatsapp-flow',
  },
  {
    id: 'text',
    brainId: 'TEXT',
    tab: 'SMS',
    entry: 'A guest stops coming. You can’t reach them.',
    headline: 'Message guests who stopped visiting.',
    wedge: 'No phone list upload — wallet pass opt-in. SMS they actually read.',
    guestGain: 'A short text they open — not another ignored email.',
    result: 'Win-back messages → they book again',
    href: '/h360/restaurant-sms-marketing-malta',
    live: true,
    themeIndex: 10,
    visual: 'sms-return',
  },
  {
    id: 'event',
    brainId: 'EVENT',
    tab: 'Events',
    entry: 'Live music Friday — only 12 people know.',
    headline: 'Fill the room on event night.',
    wedge: 'Not Eventbrite fees or Facebook reach — RSVPs, reminders, sold-out caps.',
    guestGain: 'One link — see the night, RSVP, get a reminder.',
    result: '60% fewer no-shows',
    href: '/h360/restaurant-event-promotion-malta',
    live: true,
    themeIndex: 11,
    visual: 'event-rsvp',
  },
  {
    id: 'analytics',
    brainId: 'ANALYTICS',
    tab: 'Analytics',
    entry: 'No POS? You don’t know what you made today.',
    headline: 'Type today’s total. See the trend.',
    wedge: 'No POS integration — “I made €1,200 today” is all we need.',
    guestGain: 'Smoother nights — you’re stocked and staffed because you saw it coming.',
    result: 'Trends built from one number at close',
    href: '/h360/restaurant-analytics-without-pos-malta',
    live: true,
    themeIndex: 12,
    visual: 'daily-revenue',
  },
  {
    id: 'recipe',
    brainId: 'RECIPE',
    tab: 'Recipe Costing',
    entry: 'You think pasta makes 70% margin. It doesn’t.',
    headline: 'See real profit on every dish.',
    wedge: 'Not $199/mo US tools — enter ingredients once, see real food cost.',
    guestGain: 'Fair menu prices — you’re not subsidising a dish that loses money.',
    result: 'Kill the plates that leak money',
    href: '/h360/recipe-costing-restaurant-malta',
    live: true,
    themeIndex: 13,
    visual: 'dish-margin',
  },
  {
    id: 'inventory',
    brainId: 'INVENTORY',
    tab: 'Stock',
    entry: 'You run out of mozzarella mid-service.',
    headline: 'Never run out of your bestseller.',
    wedge: 'Not $169/mo inventory software — 3 questions at close, 30 seconds.',
    guestGain: 'Their favourite dish is on the menu — not sold out mid-service.',
    result: 'We tell you what to order tomorrow',
    href: '/h360/restaurant-stock-management-malta',
    live: true,
    themeIndex: 14,
    visual: 'stock-alert',
  },
  {
    id: 'staff',
    brainId: 'STAFF',
    tab: 'Staff',
    entry: 'Who’s working Saturday? Scroll WhatsApp.',
    headline: 'Staff schedule in WhatsApp. Yes or no.',
    wedge: 'Not a €3/staff scheduling app — roster in WhatsApp, confirmed in one tap.',
    guestGain: 'Faster service — the right team is on the floor.',
    result: 'Sick cover filled in minutes',
    href: '/h360/restaurant-staff-scheduling-malta',
    live: true,
    themeIndex: 15,
    visual: 'staff-roster',
  },
  {
    id: 'floor-plan',
    brainId: 'FLOOR_PLAN',
    tab: 'Floor Plan',
    entry: 'Host doesn’t know which table is free.',
    headline: 'Every table on a map. Green free. Red full.',
    wedge: 'Not €200/mo table software — live floor map, one tap to seat.',
    guestGain: 'Seated faster — less waiting at the door on a busy Friday.',
    result: 'Faster turns without enterprise pricing',
    href: '/h360/restaurant-table-management-malta',
    live: true,
    themeIndex: 16,
    visual: 'floor-map',
  },
];

/** Brain section with no hub card — duplicate intent (see brain reviews URL lock) */
export const BRAIN_SECTION_EXCLUDED = ['RATING'] as const;

export function getCardByBrainId(id: BrainProductId): ProductCardData | undefined {
  return PRODUCT_CARDS.find((c) => c.brainId === id || c.brainIds?.includes(id));
}

export const BRAIN_ID_BY_CARD_ID = Object.fromEntries(
  PRODUCT_CARDS.map((c) => [c.id, c.brainIds ?? [c.brainId]]),
) as Record<string, readonly BrainProductId[]>;
