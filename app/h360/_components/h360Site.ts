/** H360 site — /h360 is the only homepage. Nav stays on-page until child routes ship. */
export const H360_HOME = '/h360';
export const H360_AUDIT = '/h360#h360-audit';
export const OARC_HOME = 'https://oarcdigital.com';

export const H360_NAV_LINKS: ReadonlyArray<{ label: string; href: string }> = [
  { label: 'Products', href: '/h360#h360-products' },
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
