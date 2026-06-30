'use client';

import Link from 'next/link';
import H360ProductShell from './H360ProductShell';
import { themeForVisual } from './productThemes';
import { G } from '../tokens';
import type { StandaloneProductConfig } from './standaloneProductTypes';
import { ProductCompareBoard } from './standaloneVisuals';
import {
  ProductCinemaHero,
  CinemaStackReel,
  CinemaProofBand,
  CinemaFlowStrip,
  CinemaCompareBand,
  CinemaExpertStrip,
  CinemaSeoLayer,
} from './cinemaProductLayout';

export type CinemaLayoutId = 'visual' | 'proof' | 'compare';

/** Per-product section order — each product feels different */
const LAYOUT_SECTIONS: Record<CinemaLayoutId, ('stack' | 'proof' | 'flow' | 'compare' | 'comparePremium' | 'expert')[]> = {
  visual: ['stack', 'proof', 'flow', 'comparePremium', 'expert'],
  proof: ['proof', 'stack', 'compare', 'flow', 'expert'],
  compare: ['compare', 'stack', 'proof', 'flow', 'expert'],
};

const PRODUCT_LAYOUT: Record<string, CinemaLayoutId> = {
  'google-visibility': 'visual',
  'reviews-stars': 'proof',
  'social-feed': 'visual',
  'website-phone': 'visual',
  'venue-360': 'compare',
  'booking-calendar': 'proof',
  'direct-order': 'compare',
  'qr-pay': 'compare',
  'loyalty-stamps': 'proof',
  'wallet-pass': 'proof',
  'whatsapp-flow': 'visual',
  'sms-return': 'proof',
  'event-rsvp': 'visual',
  'daily-revenue': 'proof',
  'dish-margin': 'compare',
  'stock-alert': 'proof',
  'staff-roster': 'proof',
  'floor-map': 'visual',
};

const PRODUCT_SECTIONS_OVERRIDE: Partial<Record<string, ('stack' | 'proof' | 'flow' | 'compare' | 'comparePremium' | 'expert')[]>> = {
  'direct-order': ['comparePremium', 'proof', 'stack', 'flow', 'expert'],
  'google-visibility': ['stack', 'proof', 'comparePremium', 'flow', 'expert'],
};

export default function StandaloneProductPage({ config }: { config: StandaloneProductConfig }) {
  const theme = themeForVisual(config.visual);
  const layoutId = PRODUCT_LAYOUT[config.visual] ?? 'visual';
  const sections = PRODUCT_SECTIONS_OVERRIDE[config.visual] ?? LAYOUT_SECTIONS[layoutId];

  const renderSection = (key: string) => {
    switch (key) {
      case 'stack':
        return <CinemaStackReel key="stack" config={config} accent={theme.accent} />;
      case 'proof':
        return <CinemaProofBand key="proof" config={config} accent={theme.accent} />;
      case 'flow':
        return <CinemaFlowStrip key="flow" config={config} accent={theme.accent} />;
      case 'compare':
        return <CinemaCompareBand key="compare" config={config} visual={config.visual} />;
      case 'comparePremium':
        return (
          <section key="comparePremium" style={{ background: '#030303', padding: '48px 20px 56px' }}>
            <div style={{ maxWidth: 1160, margin: '0 auto' }}>
              <ProductCompareBoard compare={config.compare} />
            </div>
          </section>
        );
      case 'expert':
        return <CinemaExpertStrip key="expert" config={config} />;
      default:
        return null;
    }
  };

  return (
    <H360ProductShell
      eyebrow={config.eyebrow}
      h1={config.h1}
      live={config.live}
      ctaName={config.ctaName}
      themeAccent={theme.accent}
      cinema
    >
      <div style={{ position: 'relative' }}>
        <CinemaSeoLayer config={config} />
        <ProductCinemaHero config={config} theme={theme} />
        {sections.map(renderSection)}
      </div>

      <section style={{ padding: '32px 20px 40px', maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
          {config.related.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: 12,
                fontWeight: 600,
                padding: '10px 16px',
                borderRadius: 99,
                border: `1px solid ${G.border}`,
                background: G.bg,
                color: G.text,
                textDecoration: 'none',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>
    </H360ProductShell>
  );
}
