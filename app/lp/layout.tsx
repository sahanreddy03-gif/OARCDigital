import { Inter_Tight, Instrument_Serif } from 'next/font/google';
import type { ReactNode } from 'react';
import './lp-guides.css';

const interTight = Inter_Tight({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lp-sans',
  weight: ['400', '500', '600', '700'],
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lp-serif',
  weight: '400',
});

/** Superside-inspired LP shell — scoped fonts/colours; main site homepage untouched. */
export default function LpLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`lp-root ${interTight.variable} ${instrumentSerif.variable}`}>
      {children}
    </div>
  );
}
