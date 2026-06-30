'use client';

import { useEffect, useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import ProductCardVisual from '../product-cards/ProductCardVisual';
import DeviceFrame from './DeviceFrame';
import type { ProductTheme } from './productThemes';
import type { ProductVisualId } from '../product-cards/productCardsData';
import type { StandaloneProductConfig } from './standaloneProductTypes';
import { StackPreview } from './standaloneVisuals';
import { C, G, FONT_DISPLAY } from '../tokens';

/** Full-bleed hero — phone is the story; one line of copy */
export function ProductCinemaHero({
  config,
  theme,
}: {
  config: StandaloneProductConfig;
  theme: ProductTheme;
}) {
  const [line, setLine] = useState(0);
  const lines = [config.hero.doctrine, config.stack.items[0]?.short ?? '', config.hero.metric.label];

  useEffect(() => {
    const t = setInterval(() => setLine((l) => (l + 1) % lines.length), 3800);
    return () => clearInterval(t);
  }, [lines.length]);

  return (
    <section
      style={{
        position: 'relative',
        minHeight: 'min(92vh, 880px)',
        overflow: 'hidden',
        background: theme.gradient,
        marginTop: -8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, background: theme.glow, pointerEvents: 'none' }} />
      <m.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        style={{ position: 'relative', zIndex: 2, transform: 'scale(1.12)', marginBottom: 8 }}
      >
        <DeviceFrame visual={config.visual} theme={theme} playing />
      </m.div>

      <div style={{ position: 'relative', zIndex: 3, textAlign: 'center', padding: '0 24px 32px', maxWidth: 520 }}>
        <m.div
          key={config.hero.metric.value}
          style={{
            display: 'inline-flex',
            alignItems: 'baseline',
            gap: 10,
            marginBottom: 16,
            padding: '10px 18px',
            borderRadius: 99,
            background: 'rgba(0,0,0,0.45)',
            border: `1px solid ${theme.accent}55`,
          }}
        >
          <span style={{ fontSize: 'clamp(32px, 6vw, 48px)', fontWeight: 800, color: theme.accent, letterSpacing: '-0.04em' }}>
            {config.hero.metric.value}
          </span>
        </m.div>
        <AnimatePresence mode="wait">
          <m.p
            key={line}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            style={{
              fontSize: 'clamp(18px, 3vw, 26px)',
              fontWeight: 700,
              color: 'rgba(255,255,255,0.95)',
              margin: 0,
              letterSpacing: '-0.03em',
              fontFamily: FONT_DISPLAY,
              lineHeight: 1.2,
            }}
          >
            {lines[line]}
          </m.p>
        </AnimatePresence>
      </div>
    </section>
  );
}

/** Auto-playing stack reel — no reading required */
export function CinemaStackReel({ config, accent }: { config: StandaloneProductConfig; accent: string }) {
  const [idx, setIdx] = useState(0);
  const items = config.stack.items;

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % items.length), 3200);
    return () => clearInterval(t);
  }, [items.length]);

  const item = items[idx];

  return (
    <section style={{ background: '#000', padding: '48px 0 56px', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 20px' }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', color: accent, marginBottom: 8, textAlign: 'center' }}>
          {config.stack.title}
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 28, flexWrap: 'wrap' }}>
          {items.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setIdx(i)}
              style={{
                padding: '8px 14px',
                borderRadius: 99,
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontSize: 12,
                fontWeight: 700,
                background: i === idx ? accent : 'rgba(255,255,255,0.08)',
                color: i === idx ? '#000' : 'rgba(255,255,255,0.5)',
                transition: 'all 0.25s',
              }}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <m.div
          key={item.id}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.45 }}
          style={{
            maxWidth: 380,
            margin: '0 auto',
            background: '#fff',
            borderRadius: 20,
            overflow: 'hidden',
            boxShadow: `0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px ${accent}33`,
          }}
        >
          <div style={{ padding: '14px 18px', background: `linear-gradient(90deg, ${accent}22, transparent)`, borderBottom: `1px solid ${G.border}` }}>
            <div style={{ fontSize: 15, fontWeight: 800, color: G.text }}>{item.label}</div>
            <div style={{ fontSize: 12, color: G.textMuted }}>{item.short}</div>
          </div>
          <StackPreview kind={item.preview} />
        </m.div>
      </AnimatePresence>

      <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 20 }}>
        {items.map((_, i) => (
          <div
            key={i}
            style={{
              width: i === idx ? 28 : 8,
              height: 6,
              borderRadius: 99,
              background: i === idx ? accent : 'rgba(255,255,255,0.2)',
              transition: 'width 0.3s',
            }}
          />
        ))}
      </div>
    </section>
  );
}

/** One dark band: live signals + week progress side by side */
export function CinemaProofBand({ config, accent }: { config: StandaloneProductConfig; accent: string }) {
  const [sigIdx, setSigIdx] = useState(0);
  const [wkIdx, setWkIdx] = useState(0);
  const sig = config.signals.items[sigIdx];
  const wk = config.progress.weeks[wkIdx];

  useEffect(() => {
    const t = setInterval(() => {
      setSigIdx((i) => (i + 1) % config.signals.items.length);
      setWkIdx((i) => (i + 1) % config.progress.weeks.length);
    }, 2800);
    return () => clearInterval(t);
  }, [config.signals.items.length, config.progress.weeks.length]);

  return (
    <section style={{ background: 'linear-gradient(180deg, #030303 0%, #0a0a0a 100%)', padding: '56px 20px 64px' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
        <m.div
          key={sig.term}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ background: '#fff', borderRadius: 18, padding: 22, boxShadow: '0 20px 60px rgba(0,0,0,0.4)' }}
        >
          <div style={{ fontSize: 10, fontWeight: 700, color: G.textMuted, letterSpacing: '0.1em', marginBottom: 12 }}>{config.signals.boardLabel}</div>
          <div style={{ fontSize: 18, fontWeight: 800, color: G.text, marginBottom: 12, letterSpacing: '-0.02em' }}>{sig.term}</div>
          <div style={{ height: 10, borderRadius: 99, background: G.border, overflow: 'hidden' }}>
            <m.div animate={{ width: `${sig.vol}%` }} style={{ height: '100%', background: G.green }} />
          </div>
          <div style={{ fontSize: 12, fontWeight: 700, color: G.green, marginTop: 10 }}>{sig.trend} intent</div>
        </m.div>

        <m.div
          key={wk.week}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ background: '#fff', borderRadius: 18, padding: 22, boxShadow: '0 20px 60px rgba(0,0,0,0.4)' }}
        >
          <div style={{ fontSize: 10, fontWeight: 700, color: G.textMuted, letterSpacing: '0.1em', marginBottom: 12 }}>WEEK {wk.week}</div>
          <div style={{ display: 'flex', gap: 24 }}>
            <div>
              <div style={{ fontSize: 36, fontWeight: 800, color: G.green }}>{wk.score}</div>
              <div style={{ fontSize: 11, color: G.textMuted }}>{config.progress.scoreLabel}</div>
            </div>
            <div>
              <div style={{ fontSize: 36, fontWeight: 800, color: G.text }}>#{wk.rank}</div>
              <div style={{ fontSize: 11, color: G.textMuted }}>{config.progress.rankLabel}</div>
            </div>
          </div>
          {wk.highlight && <div style={{ fontSize: 14, fontWeight: 700, color: G.green, marginTop: 12 }}>{wk.highlight}</div>}
        </m.div>
      </div>
    </section>
  );
}

/** Horizontal flow — auto pulse */
export function CinemaFlowStrip({ config, accent }: { config: StandaloneProductConfig; accent: string }) {
  const [pulse, setPulse] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setPulse((p) => (p + 1) % config.flow.nodes.length), 2000);
    return () => clearInterval(t);
  }, [config.flow.nodes.length]);

  return (
    <section style={{ background: G.beige, padding: '40px 0 48px', overflow: 'hidden' }}>
      <p style={{ textAlign: 'center', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: G.green, marginBottom: 20 }}>{config.flow.title}</p>
      <div style={{ display: 'flex', gap: 12, padding: '0 20px', overflowX: 'auto', scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}>
        {config.flow.nodes.map((node, i) => (
          <m.div
            key={node.id}
            animate={pulse === i ? { scale: 1.05, borderColor: accent } : { scale: 1 }}
            style={{
              flex: '0 0 140px',
              scrollSnapAlign: 'center',
              padding: '20px 14px',
              borderRadius: 16,
              background: G.bg,
              border: `2px solid ${pulse === i ? G.green : G.border}`,
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: 22, fontWeight: 800, color: pulse === i ? G.green : G.textMuted }}>0{i + 1}</div>
            <div style={{ fontSize: 13, fontWeight: 800, color: G.text, marginTop: 8 }}>{node.label}</div>
          </m.div>
        ))}
      </div>
    </section>
  );
}

/** Giant product visual for compare band */
export function CinemaCompareBand({
  config,
  visual,
}: {
  config: StandaloneProductConfig;
  visual: ProductVisualId;
}) {
  return (
    <section style={{ background: C.bg, padding: '48px 20px 56px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 32, alignItems: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', transform: 'scale(1.05)' }}>
          <ProductCardVisual visual={visual} playing dark />
        </div>
        <div>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 800, color: C.white, letterSpacing: '-0.04em', margin: '0 0 16px', lineHeight: 1.1 }}>
            {config.compare.goodLabel}
          </h2>
          <div style={{ fontSize: 'clamp(40px, 8vw, 56px)', fontWeight: 800, color: '#4ade80', letterSpacing: '-0.04em', marginBottom: 8 }}>
            {config.compare.goodMetric}
          </div>
          <p style={{ fontSize: 14, color: C.muted, margin: 0, lineHeight: 1.5 }}>{config.compare.goodNote}</p>
        </div>
      </div>
    </section>
  );
}

/** Horizontal expert strip — names big, fail one line */
export function CinemaExpertStrip({ config }: { config: StandaloneProductConfig }) {
  return (
    <section style={{ padding: '40px 0 48px', background: G.bg, overflow: 'hidden' }}>
      <p style={{ textAlign: 'center', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: G.green, marginBottom: 20 }}>NOT THIS</p>
      <div style={{ display: 'flex', gap: 14, padding: '0 20px 8px', overflowX: 'auto', scrollSnapType: 'x mandatory' }}>
        {config.expert.fails.map((row) => (
          <div
            key={row.name}
            style={{
              flex: '0 0 min(280px, 78vw)',
              scrollSnapAlign: 'start',
              padding: '20px 18px',
              borderRadius: 16,
              background: '#fafafa',
              border: `1px solid ${G.border}`,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 2, background: '#ef4444', opacity: 0.35, transform: 'rotate(-8deg)' }} />
            <div style={{ fontSize: 16, fontWeight: 800, color: G.text, marginBottom: 8, textDecoration: 'line-through', textDecorationColor: '#ef4444' }}>{row.name}</div>
            <p style={{ fontSize: 12, color: G.textMuted, margin: 0, lineHeight: 1.45, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{row.fail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/** SEO/AEO copy — hidden visually, present for crawlers */
export function CinemaSeoLayer({ config }: { config: StandaloneProductConfig }) {
  return (
    <div
      style={{
        position: 'absolute',
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: 'hidden',
        clip: 'rect(0,0,0,0)',
        whiteSpace: 'nowrap',
        border: 0,
      }}
      aria-hidden={false}
    >
      <p data-speakable>{config.hero.ownerPain}</p>
      <p data-speakable>{config.hero.guestGain}</p>
      <p data-speakable>{config.hero.wedge}</p>
      {config.faqs.map((f) => (
        <div key={f.question}>
          <p>{f.question}</p>
          <p data-speakable>{f.answer}</p>
        </div>
      ))}
    </div>
  );
}
