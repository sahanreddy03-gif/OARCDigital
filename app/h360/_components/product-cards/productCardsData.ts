/**
 * H360 products — journey order, brain-sourced hooks, cluster URLs.
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

/** Money journey: get found → trust → attract → own story → run the venue → fill tables → keep margin → bring back → run smarter */
export const PRODUCT_CARDS: ProductCardData[] = [
  {
    id: 'google-visibility',
    tab: 'Google Visibility',
    entry: 'Your Google page is old. People search — they don’t find you.',
    headline: 'Show up first on Google Maps in Malta.',
    result: '847 searches → 37 calls this week',
    href: '/h360/google-business-profile-restaurant-malta',
    live: false,
    themeIndex: 0,
    visual: 'google-visibility',
  },
  {
    id: 'google-reviews',
    tab: 'Google Reviews',
    entry: 'Competitors have 200 reviews. You have 12.',
    headline: 'Get more Google reviews — asked automatically.',
    result: '3× more reviews in 90 days',
    href: '/h360/get-more-google-reviews-restaurant-malta',
    live: false,
    themeIndex: 2,
    visual: 'reviews-stars',
  },
  {
    id: 'social',
    tab: 'Social & Ads',
    entry: 'Bad photos. No posts. No ads. Competitors look better online.',
    headline: 'Video, social posts, and paid ads — done for you.',
    result: 'Look pro online without hiring an agency',
    href: '/h360/restaurant-social-media-malta',
    live: false,
    themeIndex: 17,
    visual: 'social-feed',
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
    id: 'venue-360',
    tab: 'Full System',
    entry: 'Menu on paper. Kitchen on shouting. Owner finds out too late.',
    headline: 'Digital menu. Kitchen screen. Owner dashboard. All automated.',
    result: 'Menu · Kitchen · Owner — one system',
    href: '/h360/restaurant-management-system-malta',
    live: false,
    themeIndex: 18,
    visual: 'venue-360',
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
    entry: 'Wolt takes 30% of every order.',
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
    result: 'Faster tables · you keep the money',
    href: '/h360/restaurant-qr-payment-malta',
    live: false,
    themeIndex: 6,
    visual: 'qr-pay',
  },
  {
    id: 'stamp',
    tab: 'Stamp Card',
    entry: 'Paper stamp cards get lost. Staff forget to stamp.',
    headline: 'Eat 8 times, the 8th is free — automatic.',
    result: 'Stamps without staff touching phones',
    href: '/h360/digital-stamp-card-restaurant-malta',
    live: true,
    themeIndex: 7,
    visual: 'loyalty-stamps',
  },
  {
    id: 'pass',
    tab: 'Wallet Pass',
    entry: 'Nobody downloads a restaurant app.',
    headline: 'Loyalty card in their phone wallet.',
    result: 'Guests come back — no app needed',
    href: '/h360/restaurant-loyalty-card-malta',
    live: true,
    themeIndex: 8,
    visual: 'wallet-pass',
  },
  {
    id: 'send',
    tab: 'WhatsApp',
    entry: 'Guests visit once — then forget you.',
    headline: 'Bring guests back on WhatsApp.',
    result: 'First-timers become regulars',
    href: '/h360/whatsapp-marketing-restaurant-malta',
    live: true,
    themeIndex: 9,
    visual: 'whatsapp-flow',
  },
  {
    id: 'text',
    tab: 'SMS',
    entry: 'A guest stops coming. You can’t reach them.',
    headline: 'Message guests who stopped visiting.',
    result: 'They read it — then they book',
    href: '/h360/restaurant-sms-marketing-malta',
    live: true,
    themeIndex: 10,
    visual: 'sms-return',
  },
  {
    id: 'event',
    tab: 'Events',
    entry: 'Live music Friday — only 12 people know.',
    headline: 'Fill the room on event night.',
    result: 'RSVPs and reminders — fewer no-shows',
    href: '/h360/restaurant-event-promotion-malta',
    live: false,
    themeIndex: 11,
    visual: 'event-rsvp',
  },
  {
    id: 'analytics',
    tab: 'Analytics',
    entry: 'No POS? You don’t know what you made today.',
    headline: 'Type today’s total. See the trend.',
    result: '€1,200 at close — that’s all we need',
    href: '/h360/restaurant-analytics-without-pos-malta',
    live: false,
    themeIndex: 12,
    visual: 'daily-revenue',
  },
  {
    id: 'recipe',
    tab: 'Recipe Costing',
    entry: 'You think pasta makes 70% margin. It doesn’t.',
    headline: 'See real profit on every dish.',
    result: 'Drop the dishes that lose money',
    href: '/h360/recipe-costing-restaurant-malta',
    live: false,
    themeIndex: 13,
    visual: 'dish-margin',
  },
  {
    id: 'inventory',
    tab: 'Stock',
    entry: 'You run out of mozzarella mid-service.',
    headline: 'Never run out of your bestseller.',
    result: 'We tell you what to order — 30 seconds',
    href: '/h360/restaurant-stock-management-malta',
    live: false,
    themeIndex: 14,
    visual: 'stock-alert',
  },
  {
    id: 'staff',
    tab: 'Staff',
    entry: 'Who’s working Saturday? Scroll WhatsApp.',
    headline: 'Staff schedule in WhatsApp. Yes or no.',
    result: 'Cover sick shifts in minutes',
    href: '/h360/restaurant-staff-scheduling-malta',
    live: false,
    themeIndex: 15,
    visual: 'staff-roster',
  },
  {
    id: 'floor-plan',
    tab: 'Floor Plan',
    entry: 'Host doesn’t know which table is free.',
    headline: 'Every table on a map. Green free. Red full.',
    result: 'Seat faster — no expensive software',
    href: '/h360/restaurant-table-management-malta',
    live: false,
    themeIndex: 16,
    visual: 'floor-map',
  },
];
