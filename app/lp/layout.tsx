import localFont from 'next/font/local';
import type { ReactNode } from 'react';
import './lp-guides.css';

const lpSans = localFont({
  src: [
    { path: '../fonts/inter-tight.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/inter-tight.woff2', weight: '500', style: 'normal' },
    { path: '../fonts/inter-tight.woff2', weight: '600', style: 'normal' },
    { path: '../fonts/inter-tight.woff2', weight: '700', style: 'normal' },
  ],
  display: 'swap',
  variable: '--font-lp-sans',
});

const lpSerif = localFont({
  src: [{ path: '../fonts/instrument-serif.woff2', weight: '400', style: 'normal' }],
  display: 'swap',
  variable: '--font-lp-serif',
  adjustFontFallback: 'Times New Roman',
});

/** Superside-inspired LP shell — scoped fonts/colours; main site homepage untouched. */
export default function LpLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`lp-root ${lpSans.variable} ${lpSerif.variable}`}>
      {children}
    </div>
  );
}
