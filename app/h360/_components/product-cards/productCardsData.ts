/**
 * 20 H360 products — journey order, brain-sourced hooks, cluster URLs.
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

/** Money journey: get found → fill tables → keep margin → bring back → run smarter */
export const PRODUCT_CARDS: ProductCardData[] = [
  {
    id: 'google-profile',
    tab: 'Google Profile',
    entry: 'Your Google page goes stale. Nobody finds you.',
    headline: 'We keep your Google Business Profile active — posts, photos, replies.',
    result: '847 searches → 37 calls this week',
    href: '/h360/google-business-profile-restaurant-malta',
    live: false,
    themeIndex: 0,
    visual: 'maps-rank',
  },
  {
    id: 'search',
    tab: 'Restaurant SEO',
    entry: 'Someone searches “best pizza Malta” — you’re not there.',
    headline: 'SEARCH improves your ranking. You don’t read reports — the system fixes it.',
    result: 'Page 2 → top 3 on Google',
    href: '/h360/restaurant-seo-malta',
    live: false,
    themeIndex: 1,
    visual: 'seo-climb',
  },
  {
    id: 'google-reviews',
    tab: 'Google Reviews',
    entry: 'Competitors have 200 reviews. You have 12.',
    headline: 'It asks happy guests for a Google review — automatically.',
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
    headline: 'Menu, hours, location — live in 10 minutes. Google finds you.',
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
    headline: 'Guests book on their phone. You see who’s coming — no notebook.',
    result: 'Zero double bookings',
    href: '/h360/restaurant-booking-system-malta',
    live: false,
    themeIndex: 4,
    visual: 'booking-calendar',
  },
  {
    id: 'order',
    tab: 'Direct Orders',
    entry: 'Wolt takes 30% of every delivery order.',
    headline: 'Guests scan, order, pay — kitchen prints it. Zero commission.',
    result: 'You keep €52.00 — not €36.40',
    href: '/h360/restaurant-table-ordering-qr-malta',
    live: true,
    themeIndex: 5,
    visual: 'direct-order',
  },
  {
    id: 'pay',
    tab: 'QR Payment',
    entry: 'Guests wait 15 minutes for the bill.',
    headline: 'Scan QR, pay on phone. No terminal per table.',
    result: 'Faster turns · full margin',
    href: '/h360/restaurant-qr-payment-malta',
    live: false,
    themeIndex: 6,
    visual: 'qr-pay',
  },
  {
    id: 'stamp',
    tab: 'Loyalty Stamps',
    entry: 'Paper stamp cards get lost. Staff forget to stamp.',
    headline: 'Eat 8 times, the 8th is free. Phone keeps count — automatic.',
    result: 'Stamps credit without staff touching phones',
    href: '/h360/digital-stamp-card-restaurant-malta',
    live: true,
    themeIndex: 7,
    visual: 'loyalty-stamps',
  },
  {
    id: 'pass',
    tab: 'Loyalty Pass',
    entry: 'Nobody downloads a single-restaurant app.',
    headline: 'Digital pass in Apple/Google Wallet — rewards every visit.',
    result: 'Guests return without friction',
    href: '/h360/restaurant-loyalty-card-malta',
    live: true,
    themeIndex: 8,
    visual: 'wallet-pass',
  },
  {
    id: 'send',
    tab: 'WhatsApp',
    entry: 'Guests visit once — then forget you exist.',
    headline: 'Smart follow-ups turn first-timers into regulars on WhatsApp.',
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
    headline: 'TEXT messages lapsed guests — they remember and return.',
    result: 'Win-back messages that actually get read',
    href: '/h360/restaurant-sms-marketing-malta',
    live: true,
    themeIndex: 10,
    visual: 'sms-return',
  },
  {
    id: 'event',
    tab: 'Events',
    entry: 'Live music Friday — only 12 people know.',
    headline: 'EVENT creates the page, sends RSVPs, caps attendance.',
    result: 'Sold-out nights with 60% fewer no-shows',
    href: '/h360/restaurant-event-promotion-malta',
    live: false,
    themeIndex: 11,
    visual: 'event-rsvp',
  },
  {
    id: 'analytics',
    tab: 'Analytics',
    entry: 'No POS? You’re flying blind on revenue.',
    headline: 'Type today’s total. ARC tracks trends — no integrations.',
    result: '“I made €1,200 today” — that’s all we need',
    href: '/h360/restaurant-analytics-without-pos-malta',
    live: false,
    themeIndex: 12,
    visual: 'daily-revenue',
  },
  {
    id: 'recipe',
    tab: 'Recipe Costing',
    entry: 'You think pasta is 70% margin. It’s 55%.',
    headline: 'Enter ingredients once. See real profit per dish.',
    result: 'Kill the dishes that leak money',
    href: '/h360/recipe-costing-restaurant-malta',
    live: false,
    themeIndex: 13,
    visual: 'dish-margin',
  },
  {
    id: 'inventory',
    tab: 'Stock',
    entry: 'You run out of mozzarella mid-service.',
    headline: 'Three questions at closing. We tell you what to order.',
    result: 'Never 86 your bestseller again',
    href: '/h360/restaurant-stock-management-malta',
    live: false,
    themeIndex: 14,
    visual: 'stock-alert',
  },
  {
    id: 'staff',
    tab: 'Staff',
    entry: 'Who’s working Saturday? Scroll the WhatsApp group.',
    headline: 'Set the roster in WhatsApp. Staff confirm yes or no.',
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
    headline: 'Map of every table. Green free. Red full. One tap.',
    result: 'Faster turns without a €200/mo system',
    href: '/h360/restaurant-table-management-malta',
    live: false,
    themeIndex: 16,
    visual: 'floor-map',
  },
  {
    id: 'social',
    tab: 'Social Media',
    entry: 'You forget to post. Photos are dark. Reach dies.',
    headline: 'Completed Instagram posts every week — ready to publish.',
    result: 'Consistent feed without hiring an agency',
    href: '/h360/restaurant-social-media-malta',
    live: false,
    themeIndex: 17,
    visual: 'social-feed',
  },
  {
    id: 'rest',
    tab: 'Full System',
    entry: 'Twelve tools that don’t talk to each other.',
    headline: 'REST — one decision engine for your whole restaurant.',
    result: 'Every signal in one place',
    href: '/h360/restaurant-management-system-malta',
    live: false,
    themeIndex: 18,
    visual: 'decision-hub',
  },
  {
    id: 'local',
    tab: 'Local SEO',
    entry: 'Tourists search “restaurant near me” — competitors win.',
    headline: 'When someone searches locally, your restaurant shows first.',
    result: 'Found online in Malta — not just on Maps',
    href: '/h360/restaurant-seo-malta',
    live: false,
    themeIndex: 19,
    visual: 'local-search',
  },
];
