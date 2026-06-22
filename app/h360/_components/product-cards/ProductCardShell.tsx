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
          minHeight: mobile ? 520 : 540,
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

        {/* TOP — Entry + Headline + Result strip */}
        <div style={{ padding: '24px 28px 12px', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: theme.label, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Entry
            </span>
            {data.live ? (
              <span style={{ fontSize: 10, fontWeight: 700, color: '#fff', background: G.green, borderRadius: 99, padding: '2px 8px' }}>LIVE</span>
            ) : (
              <span style={{ fontSize: 10, fontWeight: 600, color: theme.dark ? 'rgba(255,255,255,0.5)' : '#888', background: theme.dark ? 'rgba(255,255,255,0.08)' : '#f3f4f6', borderRadius: 99, padding: '2px 8px' }}>Coming soon</span>
            )}
          </div>
          <p style={{ fontSize: 13, color: theme.label, lineHeight: 1.45, margin: '0 0 10px', maxWidth: 360 }}>{data.entry}</p>
          <div style={{ fontSize: mobile ? 20 : 22, fontWeight: 800, color: theme.headline, lineHeight: 1.18, letterSpacing: '-0.025em', maxWidth: 340, marginBottom: 12 }}>
            {data.headline}
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 700, color: theme.result, background: theme.dark ? 'rgba(255,255,255,0.08)' : 'rgba(9,68,19,0.07)', borderRadius: 8, padding: '6px 10px' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            Result: {data.result}
          </div>
        </div>

        {/* SYSTEM label */}
        <div style={{ padding: '0 28px 6px', position: 'relative' }}>
          <span style={{ fontSize: 11, fontWeight: 600, color: theme.label, letterSpacing: '0.06em', textTransform: 'uppercase', opacity: 0.85 }}>System</span>
        </div>

        <ProductCardVisual visual={data.visual} playing={playing} dark={theme.dark} />

        <div style={{ padding: '0 28px 20px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: theme.dark ? 'rgba(255,255,255,0.7)' : G.green }}>
            See how →
          </span>
          <span style={{ fontSize: 11, color: theme.label, opacity: 0.7 }}>by OARC Digital</span>
        </div>
      </m.div>
    </Link>
  );
}
