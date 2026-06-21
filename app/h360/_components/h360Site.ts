/** H360 site — /h360 is the only homepage. Nav stays on-page until child routes ship. */
export const H360_HOME = '/h360';
export const H360_AUDIT = '/h360#h360-audit';

export const H360_NAV_LINKS: ReadonlyArray<{ label: string; href: string }> = [
  { label: 'Product', href: '/h360#h360-products' },
  { label: 'How it works', href: '/h360#h360-how-it-works' },
];
