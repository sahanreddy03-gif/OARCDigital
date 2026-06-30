'use client';

import { m } from 'framer-motion';
import type { ProductVisualId } from '../product-cards/productCardsData';
import ProductCardVisual from '../product-cards/ProductCardVisual';
import type { ProductTheme } from './productThemes';

export default function DeviceFrame({
  visual,
  theme,
  playing = true,
}: {
  visual: ProductVisualId;
  theme: ProductTheme;
  playing?: boolean;
}) {
  return (
    <m.div
      initial={{ opacity: 0, y: 32, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{
        perspective: 1200,
        width: '100%',
        maxWidth: 340,
        margin: '0 auto',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: '-20% -10%',
          background: theme.glow,
          pointerEvents: 'none',
          filter: 'blur(8px)',
        }}
      />
      <div
        style={{
          position: 'relative',
          borderRadius: 36,
          padding: 10,
          background: 'linear-gradient(145deg, #2a2a2a 0%, #0a0a0a 55%, #1a1a1a 100%)',
          boxShadow: `0 40px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.08), 0 0 60px ${theme.accentSoft}`,
        }}
      >
        <div
          style={{
            borderRadius: 28,
            overflow: 'hidden',
            background: '#ffffff',
            minHeight: 420,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              height: 28,
              background: '#f4f4f5',
              borderBottom: '1px solid #e4e4e7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6,
            }}
          >
            <div style={{ width: 48, height: 5, borderRadius: 99, background: '#d4d4d8' }} />
          </div>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8px 4px 16px' }}>
            <ProductCardVisual visual={visual} playing={playing} dark={false} />
          </div>
        </div>
      </div>
    </m.div>
  );
}
