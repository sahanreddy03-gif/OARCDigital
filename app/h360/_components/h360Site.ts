/** H360 site — /h360 is the hospitality hub. OARC Digital is the parent brand. */
export const H360_HOME = '/h360';
export const H360_AUDIT = '/h360#h360-audit';
export const OARC_HOME = 'https://oarcdigital.com';
export const OARC_WHY = 'https://oarcdigital.com/why-us';
export const OARC_CONTACT = 'https://oarcdigital.com/contact';

export const H360_NAV_LINKS: ReadonlyArray<{ label: string; href: string }> = [
  { label: 'Products', href: '/h360#h360-products' },
  { label: 'FAQ', href: '/h360/faq' },
  { label: 'How it works', href: '/h360#h360-how-it-works' },
  { label: 'OARC Digital', href: OARC_HOME },
];

/** Cluster URLs — wire cards + future cross-links */
export const H360_CLUSTER = {
  hub: H360_HOME,
  audit: H360_AUDIT,
  mapsPillar: '/h360/google-maps-restaurant-malta',
  reviewsPillar: '/h360/restaurant-reviews-malta',
  posPillar: '/h360/restaurant-pos-system-malta',
  faq: '/h360/faq',
  results: '/h360/results',
  demo: '/h360/demo',
} as const;

export const OARC_OPERATOR_VENUES = 'Louisiana Mama · Palino · Calli Bistro' as const;
export const JOURNEY_STEPS = [
  { label: 'Get found', sub: 'Google', cardIndex: 0, glyph: '◎' },
  { label: 'Build trust', sub: 'Reviews', cardIndex: 1, glyph: '★' },
  { label: 'Look pro', sub: 'Social', cardIndex: 2, glyph: '▶' },
  { label: 'Run floor', sub: 'Menu & kitchen', cardIndex: 4, glyph: '⌁' },
  { label: 'Keep margin', sub: 'Direct orders', cardIndex: 6, glyph: '€' },
  { label: 'Bring back', sub: 'Loyalty', cardIndex: 8, glyph: '↻' },
] as const;

export const H360_CARD_EVENT = 'h360-select-card' as const;
