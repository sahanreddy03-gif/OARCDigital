/**
 * H360 products — journey order, brain-sourced hooks, cluster URLs.
 * GBP + SEARCH merged → Google Visibility (carousel). LOCAL duplicate removed.
 * RATING merged into GOOGLE REVIEWS per brain URL lock.
 */
export type ProductCardData = {
  id: string;
  tab: string;
  entry: string;
  headline: string;
  result: string;
  href: string;
  live: boolean;
  themeIndex: number;
  visual: ProductVisualId;
};

export type ProductVisualId =
  | 'google-visibility'
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

/** Money journey: get found → reviews → own story → fill tables → keep margin → bring back → run smarter */
export const PRODUCT_CARDS: ProductCardData[] = [
  {
    id: 'google-visibility',
    tab: 'Google Visibility',
    entry: 'Your Google page goes stale — and when someone searches “best pizza Malta”, you’re not there.',
    headline: 'Rank above every competitor on Malta Google Maps.',
    result: '847 searches → 37 calls · Page 2 → top 3',
    href: '/h360/google-business-profile-restaurant-malta',
    live: false,
    themeIndex: 0,
    visual: 'google-visibility',
  },
  {
    id: 'google-reviews',
    tab: 'Google Reviews',
    entry: 'Competitors have 200 reviews. You have 12.',
    headline: 'We turn every customer into a good Google review — smart timing, personalised strategy, and smart automation.',
    result: '3× more reviews in 90 days',
    href: '/h360/get-more-google-reviews-restaurant-malta',
    live: false,
    themeIndex: 2,
    visual: 'reviews-stars',
  },
  {
    id: 'website',
    tab: 'Website',
    entry: 'No website means TripAdvisor owns your story.',
    headline: 'Your menu online in 10 minutes. Google finds you.',
    result: '1 in 5 visitors walk through the door',
    href: '/h360/restaurant-website-malta',
    live: false,
    themeIndex: 3,
    visual: 'website-phone',
  },
  {
    id: 'booking',
    tab: 'Booking',
    entry: 'Missed calls during service = empty tables tonight.',
    headline: 'Guests book on their phone. You see who’s coming.',
    result: 'No double bookings. No notebook.',
    href: '/h360/restaurant-booking-system-malta',
    live: false,
    themeIndex: 4,
    visual: 'booking-calendar',
  },
  {
    id: 'order',
    tab: 'Direct Orders',
    entry: 'Wolt takes 30% of every delivery order.',
    headline: 'Keep 100% of every order. Zero commission.',
    result: 'You keep €52 — not €36.40',
    href: '/h360/restaurant-table-ordering-qr-malta',
    live: true,
    themeIndex: 5,
    visual: 'direct-order',
  },
  {
    id: 'pay',
    tab: 'QR Payment',
    entry: 'Guests wait 15 minutes for the bill.',
    headline: 'Guests pay from the table in seconds.',
    result: 'Faster turns · you keep full margin',
    href: '/h360/restaurant-qr-payment-malta',
    live: false,
    themeIndex: 6,
    visual: 'qr-pay',
  },
  {
    id: 'stamp',
    tab: 'Loyalty Stamps',
    entry: 'Paper stamp cards get lost. Staff forget to stamp.',
    headline: '8th meal free. Their phone keeps count — automatic.',
    result: 'Stamps without staff touching phones',
    href: '/h360/digital-stamp-card-restaurant-malta',
    live: true,
    themeIndex: 7,
    visual: 'loyalty-stamps',
  },
  {
    id: 'pass',
    tab: 'Loyalty Pass',
    entry: 'Nobody downloads a single-restaurant app.',
    headline: 'Loyalty card in Apple & Google Wallet.',
    result: 'Guests come back — no app download',
    href: '/h360/restaurant-loyalty-card-malta',
    live: true,
    themeIndex: 8,
    visual: 'wallet-pass',
  },
  {
    id: 'send',
    tab: 'WhatsApp',
    entry: 'Guests visit once — then forget you exist.',
    headline: 'Turn first-timers into regulars on WhatsApp.',
    result: 'Maria orders again → becomes a regular',
    href: '/h360/whatsapp-marketing-restaurant-malta',
    live: true,
    themeIndex: 9,
    visual: 'whatsapp-flow',
  },
  {
    id: 'text',
    tab: 'SMS',
    entry: 'A guest stops coming. You never reach them.',
    headline: 'Win back guests who stopped visiting.',
    result: 'SMS they actually read — then they book',
    href: '/h360/restaurant-sms-marketing-malta',
    live: true,
    themeIndex: 10,
    visual: 'sms-return',
  },
  {
    id: 'event',
    tab: 'Events',
    entry: 'Live music Friday — only 12 people know.',
    headline: 'Sell out Friday night — RSVPs and reminders.',
    result: '60% fewer no-shows',
    href: '/h360/restaurant-event-promotion-malta',
    live: false,
    themeIndex: 11,
    visual: 'event-rsvp',
  },
  {
    id: 'analytics',
    tab: 'Analytics',
    entry: 'No POS? You’re flying blind on revenue.',
    headline: 'Know how you did today — one number, no POS.',
    result: 'Type €1,200 at close — trends built for you',
    href: '/h360/restaurant-analytics-without-pos-malta',
    live: false,
    themeIndex: 12,
    visual: 'daily-revenue',
  },
  {
    id: 'recipe',
    tab: 'Recipe Costing',
    entry: 'You think pasta is 70% margin. It’s 55%.',
    headline: 'See real profit on every dish — not a guess.',
    result: 'Kill the plates that leak money',
    href: '/h360/recipe-costing-restaurant-malta',
    live: false,
    themeIndex: 13,
    visual: 'dish-margin',
  },
  {
    id: 'inventory',
    tab: 'Stock',
    entry: 'You run out of mozzarella mid-service.',
    headline: 'Never 86 your bestseller mid-service.',
    result: 'We tell you what to order — 30 seconds at close',
    href: '/h360/restaurant-stock-management-malta',
    live: false,
    themeIndex: 14,
    visual: 'stock-alert',
  },
  {
    id: 'staff',
    tab: 'Staff',
    entry: 'Who’s working Saturday? Scroll the WhatsApp group.',
    headline: 'Staff roster in WhatsApp. Yes or no in one tap.',
    result: 'Sick cover filled in minutes',
    href: '/h360/restaurant-staff-scheduling-malta',
    live: false,
    themeIndex: 15,
    visual: 'staff-roster',
  },
  {
    id: 'floor-plan',
    tab: 'Floor Plan',
    entry: 'Host doesn’t know which table has been sitting longest.',
    headline: 'Every table on a map. Green free. Red full.',
    result: 'Faster turns — no €200/mo software',
    href: '/h360/restaurant-table-management-malta',
    live: false,
    themeIndex: 16,
    visual: 'floor-map',
  },
  {
    id: 'social',
    tab: 'Social Media',
    entry: 'You forget to post. Photos are dark. Reach dies.',
    headline: 'Instagram posts done for you — every week.',
    result: 'Consistent feed without an agency',
    href: '/h360/restaurant-social-media-malta',
    live: false,
    themeIndex: 17,
    visual: 'social-feed',
  },
  {
    id: 'rest',
    tab: 'Full System',
    entry: 'Twelve tools that don’t talk to each other.',
    headline: 'One dashboard for your whole restaurant.',
    result: 'Orders, reviews, stock — one place',
    href: '/h360/restaurant-management-system-malta',
    live: false,
    themeIndex: 18,
    visual: 'decision-hub',
  },
];
