/**
 * Cohesive H360 product-card palette — muted gradients (Stripe / Linear / Sunday tier).
 * Outer shell = subtle atmosphere; inner sheet = white glass device UI (always pops).
 */
export type CardTheme = {
  bg: string;
  label: string;
  headline: string;
  result: string;
  dark: boolean;
  innerShadow: string;
};

export const CARD_THEMES: CardTheme[] = [
  /* 0 GET FOUND — sage */
  { bg: 'linear-gradient(155deg,#e9f0ea 0%,#d8e6dc 100%)', label: '#5a6b5e', headline: '#0f1a12', result: '#094413', dark: false, innerShadow: '0 12px 40px rgba(9,68,19,0.12)' },
  /* 1 SEARCH — cool stone */
  { bg: 'linear-gradient(155deg,#e8eef3 0%,#d9e3ec 100%)', label: '#5c6a75', headline: '#0f1419', result: '#094413', dark: false, innerShadow: '0 12px 40px rgba(15,20,25,0.10)' },
  /* 2 REVIEWS — warm parchment */
  { bg: 'linear-gradient(155deg,#f2ebe2 0%,#e8ddd0 100%)', label: '#7a6a58', headline: '#1a1208', result: '#094413', dark: false, innerShadow: '0 12px 40px rgba(120,90,50,0.10)' },
  /* 3 WEBSITE — linen */
  { bg: 'linear-gradient(155deg,#eee9e2 0%,#e2d9ce 100%)', label: '#6b6258', headline: '#14110e', result: '#094413', dark: false, innerShadow: '0 12px 40px rgba(60,50,40,0.09)' },
  /* 4 BOOKING — slate mist */
  { bg: 'linear-gradient(155deg,#e9ebf0 0%,#dce1ea 100%)', label: '#5a6270', headline: '#0e1118', result: '#094413', dark: false, innerShadow: '0 12px 40px rgba(30,40,60,0.09)' },
  /* 5 ORDER — forest whisper */
  { bg: 'linear-gradient(155deg,#e4ebe5 0%,#cfe0d4 100%)', label: '#4a5e50', headline: '#08140a', result: '#094413', dark: false, innerShadow: '0 12px 40px rgba(9,68,19,0.14)' },
  /* 6 PAY — mint */
  { bg: 'linear-gradient(155deg,#e0f0e8 0%,#c8e4d6 100%)', label: '#4a6b5a', headline: '#08140a', result: '#094413', dark: false, innerShadow: '0 12px 40px rgba(9,68,19,0.11)' },
  /* 7 STAMP — amber night (dark) */
  { bg: 'linear-gradient(155deg,#1c0900 0%,#3d1800 55%,#6b2d00 100%)', label: 'rgba(255,255,255,0.55)', headline: '#ffffff', result: '#fbbf24', dark: true, innerShadow: '0 16px 48px rgba(0,0,0,0.35)' },
  /* 8 PASS — soft violet */
  { bg: 'linear-gradient(155deg,#eee8f5 0%,#dfd6ee 100%)', label: '#6a5a7a', headline: '#120e18', result: '#094413', dark: false, innerShadow: '0 12px 40px rgba(80,50,120,0.10)' },
  /* 9 SEND — periwinkle (signature motion) */
  { bg: 'linear-gradient(155deg,#b197fc 0%,#74c0fc 100%)', label: 'rgba(255,255,255,0.72)', headline: '#ffffff', result: '#ffffff', dark: true, innerShadow: '0 16px 48px rgba(60,40,120,0.20)' },
  /* 10 TEXT — rose quartz */
  { bg: 'linear-gradient(155deg,#f0e8ec 0%,#e6d8e0 100%)', label: '#756068', headline: '#140e12', result: '#094413', dark: false, innerShadow: '0 12px 40px rgba(100,60,80,0.09)' },
  /* 11 EVENT — evening lilac */
  { bg: 'linear-gradient(155deg,#ece8f2 0%,#ddd6ea 100%)', label: '#655a75', headline: '#100e14', result: '#094413', dark: false, innerShadow: '0 12px 40px rgba(70,50,100,0.09)' },
  /* 12 ANALYTICS — graphite light */
  { bg: 'linear-gradient(155deg,#eaeced 0%,#dfe3e6 100%)', label: '#5c6368', headline: '#0e1012', result: '#094413', dark: false, innerShadow: '0 12px 40px rgba(20,30,40,0.09)' },
  /* 13 RECIPE — wheat */
  { bg: 'linear-gradient(155deg,#f0ebe0 0%,#e4d8c4 100%)', label: '#7a6e58', headline: '#141008', result: '#094413', dark: false, innerShadow: '0 12px 40px rgba(100,80,40,0.09)' },
  /* 14 INVENTORY — cool sage */
  { bg: 'linear-gradient(155deg,#e6ebe7 0%,#d5e2da 100%)', label: '#55685c', headline: '#0c1210', result: '#094413', dark: false, innerShadow: '0 12px 40px rgba(40,70,50,0.09)' },
  /* 15 STAFF — steel */
  { bg: 'linear-gradient(155deg,#e8ecf1 0%,#d8e0ea 100%)', label: '#586878', headline: '#0c1018', result: '#094413', dark: false, innerShadow: '0 12px 40px rgba(40,60,90,0.09)' },
  /* 16 FLOOR PLAN — terrain */
  { bg: 'linear-gradient(155deg,#ebe7e2 0%,#ddd5ca 100%)', label: '#6a6258', headline: '#12100c', result: '#094413', dark: false, innerShadow: '0 12px 40px rgba(80,60,40,0.08)' },
  /* 17 SOCIAL — blush */
  { bg: 'linear-gradient(155deg,#f2e8e5 0%,#ead8d2 100%)', label: '#7a6258', headline: '#140e0c', result: '#094413', dark: false, innerShadow: '0 12px 40px rgba(120,70,60,0.09)' },
  /* 18 REST — deep slate premium (dark) */
  { bg: 'linear-gradient(155deg,#141a1f 0%,#232c34 100%)', label: 'rgba(255,255,255,0.45)', headline: '#ffffff', result: '#4ade80', dark: true, innerShadow: '0 16px 48px rgba(0,0,0,0.40)' },
  /* 19 LOCAL — ocean mist */
  { bg: 'linear-gradient(155deg,#e4eef1 0%,#d2e4ea 100%)', label: '#4a6570', headline: '#0a1216', result: '#094413', dark: false, innerShadow: '0 12px 40px rgba(30,80,100,0.10)' },
];
