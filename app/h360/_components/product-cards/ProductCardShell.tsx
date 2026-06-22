'use client';

import Link from 'next/link';
import { m } from 'framer-motion';
import type { ProductCardData } from './productCardsData';
import { CARD_THEMES } from './cardPalette';
import ProductCardVisual from './ProductCardVisual';
import { FONT_LIGHT, G } from '../tokens';
import { H360_AUDIT } from '../h360Site';

const FONT = FONT_LIGHT;

type Props = {
  data: ProductCardData;
  mobile: boolean;
  playing: boolean;
};

export default function ProductCardShell({ data, mobile, playing }: Props) {
  const theme = CARD_THEMES[data.themeIndex] ?? CARD_THEMES[0];
  const href = data.live ? data.href : H360_AUDIT;

  return (
    <Link
      href={href}
      style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
      data-testid={`product-card-${data.id}`}
    >
      <m.div
        whileHover={mobile ? undefined : { y: -2 }}
        transition={{ duration: 0.2 }}
        style={{
          flexShrink: 0,
          width: mobile ? '88vw' : '100%',
          minHeight: mobile ? 500 : 520,
          borderRadius: 20,
          background: theme.bg,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          scrollSnapAlign: 'start',
          fontFamily: FONT,
          position: 'relative',
          cursor: 'pointer',
        }}
      >
        {theme.dark && (
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 65% 25%, rgba(255,255,255,0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
        )}

        <div style={{ padding: mobile ? '22px 22px 8px' : '26px 28px 10px', position: 'relative' }}>
          <h3
            style={{
              fontSize: mobile ? 22 : 24,
              fontWeight: 800,
              color: theme.headline,
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              margin: '0 0 10px',
              maxWidth: 360,
            }}
          >
            {data.headline}
          </h3>
          <p
            style={{
              fontSize: 13,
              color: theme.label,
              lineHeight: 1.5,
              margin: '0 0 14px',
              maxWidth: 340,
              opacity: 0.9,
            }}
          >
            {data.entry}
          </p>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 7,
              fontSize: 12,
              fontWeight: 700,
              color: theme.result,
              background: theme.dark ? 'rgba(255,255,255,0.09)' : 'rgba(9,68,19,0.08)',
              borderRadius: 10,
              padding: '7px 12px',
              lineHeight: 1.35,
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
              <polyline points="20 6 9 17 4 12" />
            </svg>
            {data.result}
          </div>
        </div>

        <ProductCardVisual visual={data.visual} playing={playing} dark={theme.dark} />

        <div
          style={{
            padding: mobile ? '4px 22px 18px' : '4px 28px 22px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 'auto',
          }}
        >
          <span style={{ fontSize: 14, fontWeight: 600, color: theme.dark ? 'rgba(255,255,255,0.75)' : G.green }}>
            See how →
          </span>
          <span style={{ fontSize: 11, color: theme.label, opacity: 0.65 }}>OARC Digital</span>
        </div>
      </m.div>
    </Link>
  );
}
