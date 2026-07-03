/** Core H360 pages ARC may link to — not thin /aeo/* or programmatic SEO URLs. */
export const H360_CORE_LINKS: Array<{ keywords: string[]; url: string; label: string }> = [
  { keywords: ['h360', 'hospitality', 'restaurant marketing malta', 'restaurant tools'], url: 'https://oarcdigital.com/h360', label: 'H360 hub' },
  { keywords: ['google maps', 'not on maps', 'gbp', 'google business profile', 'google visibility'], url: 'https://oarcdigital.com/h360/google-business-profile-restaurant-malta', label: 'Google Visibility' },
  { keywords: ['phone ai', 'voice ai', 'missed calls', 'answering service', 'receptionist', 'phone host', 'voicemail'], url: 'https://oarcdigital.com/h360/restaurant-phone-ai-malta', label: 'Voice Host' },
  { keywords: ['google reviews', 'more reviews', 'review qr'], url: 'https://oarcdigital.com/h360/get-more-google-reviews-restaurant-malta', label: 'Smart Reviews' },
  { keywords: ['wolt', 'bolt', 'delivery app', 'commission', 'direct order', 'qr order', 'table order'], url: 'https://oarcdigital.com/h360/restaurant-table-ordering-qr-malta', label: 'Direct QR Orders' },
  { keywords: ['loyalty', 'stamp card', 'wallet pass', 'repeat guest', 'regulars'], url: 'https://oarcdigital.com/h360/digital-stamp-card-restaurant-malta', label: 'Stamp Card' },
  { keywords: ['whatsapp', 'sms marketing'], url: 'https://oarcdigital.com/h360/whatsapp-marketing-restaurant-malta', label: 'WhatsApp' },
  { keywords: ['social media', 'instagram posts'], url: 'https://oarcdigital.com/h360/restaurant-social-media-malta', label: 'Social' },
  { keywords: ['website', 'menu online'], url: 'https://oarcdigital.com/h360/restaurant-website-malta', label: 'Website' },
  { keywords: ['booking', 'reservation', 'table booking'], url: 'https://oarcdigital.com/h360/restaurant-booking-system-malta', label: 'Bookings' },
  { keywords: ['pay at table', 'qr payment', 'bill pay'], url: 'https://oarcdigital.com/h360/restaurant-qr-payment-malta', label: 'QR Pay' },
];

export function buildH360LinkHint(message: string, history: Array<{ content: string }>): string {
  const text = (message + ' ' + history.map((m) => m.content).join(' ')).toLowerCase();
  for (const entry of H360_CORE_LINKS) {
    if (entry.keywords.some((kw) => text.includes(kw))) {
      return `Relevant H360 page (share only if it genuinely helps right now): ${entry.url} (${entry.label})`;
    }
  }
  return 'Default H360 hub if a tool page fits: https://oarcdigital.com/h360';
}
