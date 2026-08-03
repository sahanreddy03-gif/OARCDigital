'use client';

import Link from 'next/link';
import { m } from 'framer-motion';
import type { ProductCardData } from './productCardsData';
import { CARD_THEMES } from './cardPalette';
import { getCardLayout } from './cardLayout';
import ProductCardVisual from './ProductCardVisual';
import { FONT_DISPLAY, G } from '../tokens';
import { OARC_HOME } from '../h360Site';

type Props = {
  data: ProductCardData;
  mobile: boolean;
  playing: boolean;
};

export default function ProductCardShell({ data, mobile, playing }: Props) {
  const theme = CARD_THEMES[data.themeIndex] ?? CARD_THEMES[0];
  const href = data.href;
  const layout = getCardLayout(data.visual, mobile);

  return (
    <m.div
      whileHover={mobile ? undefined : { y: -2 }}
      transition={{ duration: 0.2 }}
      style={{
        flexShrink: 0,
        width: mobile ? '86vw' : '100%',
        maxWidth: mobile ? 360 : undefined,
        minHeight: layout.minCardH,
        borderRadius: 18,
        background: theme.bg,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        scrollSnapAlign: 'center',
        fontFamily: FONT_DISPLAY,
        position: 'relative',
      }}
      data-testid={`product-card-${data.id}`}
      data-brain-id={data.brainId}
      data-brain-ids={data.brainIds?.join(',') ?? data.brainId}
    >
      {theme.dark && (
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 65% 25%, rgba(255,255,255,0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
      )}

      <Link href={href} style={{ textDecoration: 'none', color: 'inherit', flex: 1, display: 'flex', flexDirection: 'column', cursor: 'pointer' }}>
        <div style={{ padding: layout.headerPad, position: 'relative' }}>
          <h3
            style={{
              fontSize: mobile ? 19 : 21,
              fontWeight: 800,
              color: theme.headline,
              lineHeight: 1.2,
              letterSpacing: '-0.035em',
              margin: '0 0 8px',
              maxWidth: 360,
            }}
          >
            {data.headline}
          </h3>
          <p
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: theme.dark ? 'rgba(255,255,255,0.72)' : G.green,
              lineHeight: 1.4,
              margin: '0 0 8px',
              maxWidth: 360,
            }}
          >
            {data.wedge}
          </p>
          <p
            style={{
              fontSize: 12,
              color: theme.label,
              lineHeight: 1.45,
              margin: '0 0 6px',
              maxWidth: 340,
              opacity: 0.88,
            }}
          >
            {data.entry}
          </p>
          <p
            style={{
              fontSize: 10,
              fontWeight: 600,
              color: theme.dark ? 'rgba(255,255,255,0.55)' : G.textMuted,
              lineHeight: 1.4,
              margin: '0 0 10px',
              maxWidth: 340,
            }}
          >
            For your guest: {data.guestGain}
          </p>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              fontSize: 11,
              fontWeight: 700,
              color: theme.result,
              background: theme.dark ? 'rgba(255,255,255,0.09)' : 'rgba(9,68,19,0.08)',
              borderRadius: 8,
              padding: '5px 10px',
              lineHeight: 1.35,
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
              <polyline points="20 6 9 17 4 12" />
            </svg>
            {data.result}
          </div>
        </div>

        <ProductCardVisual visual={data.visual} playing={playing} dark={theme.dark} mobile={mobile} />

        <div style={{ padding: layout.footerPad, marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: theme.dark ? 'rgba(255,255,255,0.75)' : G.green }}>
            See how →
          </span>
          {data.live && (
            <span
              style={{
                fontSize: 9,
                fontWeight: 800,
                letterSpacing: '0.06em',
                color: theme.dark ? '#7dffb0' : G.green,
                background: theme.dark ? 'rgba(125,255,176,0.12)' : 'rgba(9,68,19,0.08)',
                borderRadius: 6,
                padding: '3px 7px',
              }}
            >
              LIVE
            </span>
          )}
        </div>
      </Link>

      <div
        style={{
          padding: layout.footerPad,
          paddingTop: 0,
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Link
          href={OARC_HOME}
          style={{
            fontSize: 11,
            fontWeight: 600,
            color: theme.label,
            opacity: 0.75,
            textDecoration: 'none',
          }}
        >
          OARC Digital ↗
        </Link>
      </div>
    </m.div>
  );
}
