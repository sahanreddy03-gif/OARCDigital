import type { ProductVisualId } from './productCardsData';

export type VisualTier = 'hero' | 'standard' | 'compact';

const TIER: Record<ProductVisualId, VisualTier> = {
  'voice-ai': 'hero',
  'whatsapp-flow': 'standard',
  'direct-order': 'standard',
  'maps-rank': 'standard',
  'local-search': 'standard',
  'loyalty-stamps': 'standard',
  'venue-360': 'standard',
  'google-visibility': 'compact',
  'seo-climb': 'compact',
  'reviews-stars': 'compact',
  'website-phone': 'compact',
  'booking-calendar': 'compact',
  'qr-pay': 'compact',
  'wallet-pass': 'compact',
  'sms-return': 'compact',
  'event-rsvp': 'compact',
  'daily-revenue': 'compact',
  'dish-margin': 'compact',
  'stock-alert': 'compact',
  'staff-roster': 'compact',
  'floor-map': 'compact',
  'social-feed': 'compact',
  'decision-hub': 'compact',
};

export function getCardLayout(visual: ProductVisualId, mobile: boolean) {
  const tier = TIER[visual] ?? 'compact';
  const spec = {
    hero: { card: mobile ? 400 : 440, visual: mobile ? 228 : 248 },
    standard: { card: mobile ? 332 : 368, visual: mobile ? 164 : 184 },
    compact: { card: mobile ? 292 : 312, visual: mobile ? 128 : 142 },
  }[tier];

  return {
    tier,
    minCardH: spec.card,
    visualH: spec.visual,
    headerPad: mobile ? '16px 18px 6px' : '20px 24px 8px',
    visualPad: mobile ? '0 18px 8px' : '0 24px 12px',
    footerPad: mobile ? '0 18px 14px' : '0 24px 18px',
  };
}
