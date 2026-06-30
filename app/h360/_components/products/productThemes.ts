import type { ProductVisualId } from '../product-cards/productCardsData';

export type ProductTheme = {
  id: string;
  accent: string;
  accentSoft: string;
  glow: string;
  gradient: string;
  heroMetric: { value: string; label: string };
  doctrine: string;
};

const THEMES: Record<string, ProductTheme> = {
  'google-visibility': {
    id: 'maps',
    accent: '#38bdf8',
    accentSoft: 'rgba(56,189,248,0.14)',
    glow: 'radial-gradient(ellipse 80% 60% at 70% 20%, rgba(56,189,248,0.35) 0%, transparent 55%)',
    gradient: 'linear-gradient(165deg, #020617 0%, #0c1a2e 45%, #061510 100%)',
    heroMetric: { value: '847→37', label: 'searches that become walk-ins' },
    doctrine: 'Google rewards motion — not a profile you set up once and forgot.',
  },
  'social-feed': {
    id: 'social',
    accent: '#f472b6',
    accentSoft: 'rgba(244,114,182,0.14)',
    glow: 'radial-gradient(ellipse 70% 55% at 75% 15%, rgba(244,114,182,0.32) 0%, transparent 50%)',
    gradient: 'linear-gradient(165deg, #0a0610 0%, #1a0a18 50%, #0a1408 100%)',
    heroMetric: { value: '4/wk', label: 'finished posts — not blank calendars' },
    doctrine: 'Creation beats scheduling. Your feed should look alive before service starts.',
  },
  'website-phone': {
    id: 'web',
    accent: '#67e8f9',
    accentSoft: 'rgba(103,232,249,0.12)',
    glow: 'radial-gradient(ellipse 75% 50% at 65% 10%, rgba(103,232,249,0.28) 0%, transparent 52%)',
    gradient: 'linear-gradient(165deg, #030712 0%, #0c1220 48%, #071510 100%)',
    heroMetric: { value: '10 min', label: 'from menu photo to live site' },
    doctrine: 'Own the URL. TripAdvisor is a billboard — your site is the front door.',
  },
  'venue-360': {
    id: 'system',
    accent: '#4ade80',
    accentSoft: 'rgba(74,222,128,0.12)',
    glow: 'radial-gradient(ellipse 80% 60% at 72% 18%, rgba(74,222,128,0.3) 0%, transparent 55%)',
    gradient: 'linear-gradient(165deg, #030303 0%, #0a1a0f 50%, #050505 100%)',
    heroMetric: { value: '1 stack', label: 'menu · kitchen · owner — connected' },
    doctrine: 'One source of truth beats twelve tabs open during Friday rush.',
  },
  'booking-calendar': {
    id: 'book',
    accent: '#fbbf24',
    accentSoft: 'rgba(251,191,36,0.14)',
    glow: 'radial-gradient(ellipse 70% 55% at 68% 12%, rgba(251,191,36,0.28) 0%, transparent 50%)',
    gradient: 'linear-gradient(165deg, #0c0a04 0%, #1a1408 48%, #060806 100%)',
    heroMetric: { value: '€0', label: 'per-cover platform tax' },
    doctrine: 'The notebook dies tonight. Slots lock. You know who is coming.',
  },
  'qr-pay': {
    id: 'pay',
    accent: '#a78bfa',
    accentSoft: 'rgba(167,139,250,0.14)',
    glow: 'radial-gradient(ellipse 75% 55% at 70% 15%, rgba(167,139,250,0.3) 0%, transparent 52%)',
    gradient: 'linear-gradient(165deg, #080612 0%, #120a22 50%, #050508 100%)',
    heroMetric: { value: '10 sec', label: 'pay-at-table — no bill chase' },
    doctrine: 'Hardware is a tax. A tent card on the table is the whole terminal.',
  },
  'event-rsvp': {
    id: 'event',
    accent: '#fb7185',
    accentSoft: 'rgba(251,113,133,0.14)',
    glow: 'radial-gradient(ellipse 70% 55% at 72% 14%, rgba(251,113,133,0.3) 0%, transparent 50%)',
    gradient: 'linear-gradient(165deg, #100608 0%, #1a0a10 48%, #080604 100%)',
    heroMetric: { value: '−60%', label: 'no-shows with real RSVPs' },
    doctrine: 'Event night needs a headcount — not a prayer and a Facebook post.',
  },
  'daily-revenue': {
    id: 'data',
    accent: '#fcd34d',
    accentSoft: 'rgba(252,211,77,0.12)',
    glow: 'radial-gradient(ellipse 75% 55% at 68% 12%, rgba(252,211,77,0.25) 0%, transparent 50%)',
    gradient: 'linear-gradient(165deg, #0a0804 0%, #141008 50%, #060806 100%)',
    heroMetric: { value: '1 #', label: 'at close — trends without a POS' },
    doctrine: '"Felt busy" is not data. One honest number every night builds the road up.',
  },
  'dish-margin': {
    id: 'recipe',
    accent: '#fb923c',
    accentSoft: 'rgba(251,146,60,0.14)',
    glow: 'radial-gradient(ellipse 70% 55% at 70% 15%, rgba(251,146,60,0.28) 0%, transparent 50%)',
    gradient: 'linear-gradient(165deg, #0c0804 0%, #1a1008 48%, #060806 100%)',
    heroMetric: { value: '52%', label: 'real margin — not chef guesswork' },
    doctrine: 'Tomatoes doubled. Portions crept. The menu must tell the truth.',
  },
  'stock-alert': {
    id: 'stock',
    accent: '#facc15',
    accentSoft: 'rgba(250,204,21,0.12)',
    glow: 'radial-gradient(ellipse 75% 55% at 72% 14%, rgba(250,204,21,0.22) 0%, transparent 50%)',
    gradient: 'linear-gradient(165deg, #0a0802 0%, #121008 50%, #050806 100%)',
    heroMetric: { value: '30s', label: 'closing check — never 86 the hero dish' },
    doctrine: 'The chef knew Tuesday. Nobody wrote it down. That ends here.',
  },
  'staff-roster': {
    id: 'staff',
    accent: '#34d399',
    accentSoft: 'rgba(52,211,153,0.12)',
    glow: 'radial-gradient(ellipse 70% 55% at 68% 12%, rgba(52,211,153,0.28) 0%, transparent 50%)',
    gradient: 'linear-gradient(165deg, #040a08 0%, #081612 48%, #050505 100%)',
    heroMetric: { value: '1 tap', label: 'yes / no — roster in WhatsApp' },
    doctrine: 'Another app to download is another shift nobody shows up for.',
  },
  'floor-map': {
    id: 'floor',
    accent: '#2dd4bf',
    accentSoft: 'rgba(45,212,191,0.12)',
    glow: 'radial-gradient(ellipse 75% 55% at 70% 15%, rgba(45,212,191,0.28) 0%, transparent 52%)',
    gradient: 'linear-gradient(165deg, #040a0a 0%, #081818 50%, #050505 100%)',
    heroMetric: { value: 'live', label: 'green free · red full · yellow turning' },
    doctrine: 'The host should never guess which table is free on a Friday.',
  },
};

const DEFAULT_THEME = THEMES['venue-360'];

export function themeForVisual(visual: ProductVisualId): ProductTheme {
  return THEMES[visual] ?? DEFAULT_THEME;
}
