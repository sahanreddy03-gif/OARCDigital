'use client';

import Link from 'next/link';
import { m } from 'framer-motion';
import H360ProductShell from './H360ProductShell';
import DeviceFrame from './DeviceFrame';
import { themeForVisual } from './productThemes';
import { C, G, FONT_DISPLAY } from '../tokens';
import type { StandaloneProductConfig } from './standaloneProductTypes';
import {
  ProductStackBoard,
  SignalPulseBoard,
  ProgressLiveBoard,
  ProductFlowDiagram,
  ProductCompareBoard,
  ExpertFailCard,
} from './standaloneVisuals';
import GrandSlamBand from './grandSlamBand';

export default function StandaloneProductPage({ config }: { config: StandaloneProductConfig }) {
  const theme = themeForVisual(config.visual);

  return (
    <H360ProductShell eyebrow={config.eyebrow} h1={config.h1} live={config.live} ctaName={config.ctaName} themeAccent={theme.accent} cinema>
      {/* Hero — one live device preview; value headlines only */}
      <section style={{ position: 'relative', overflow: 'hidden', background: theme.gradient, borderBottom: `1px solid ${C.border}`, marginTop: -8 }}>
        <div style={{ position: 'absolute', inset: 0, background: theme.glow, pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '48px 24px 56px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48, alignItems: 'center', position: 'relative' }}>
          <div>
            <m.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} style={{ display: 'inline-flex', alignItems: 'baseline', gap: 12, marginBottom: 24, padding: '14px 18px', borderRadius: 16, background: 'rgba(0,0,0,0.35)', border: `1px solid ${G.greenMid}66` }}>
              <span style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: G.greenLt, letterSpacing: '-0.03em', fontFamily: FONT_DISPLAY }}>{config.hero.metric.value}</span>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.72)', lineHeight: 1.4, maxWidth: 200 }}>{config.hero.metric.label}</span>
            </m.div>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 32px)', fontWeight: 800, lineHeight: 1.15, color: 'rgba(255,255,255,0.95)', margin: '0 0 12px', maxWidth: 520, letterSpacing: '-0.03em', fontFamily: FONT_DISPLAY }} data-speakable>
              {config.hero.hook ?? config.hero.ownerPain}
            </h2>
            <p style={{ fontSize: 17, fontWeight: 700, color: G.greenLt, lineHeight: 1.35, margin: '0 0 8px', maxWidth: 480 }}>
              {config.hero.guestGain}
            </p>
            <p style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)' }} data-speakable>{config.hero.ownerPain}. {config.hero.wedge}</p>
          </div>
          <DeviceFrame visual={config.visual} theme={theme} playing />
        </div>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px 32px' }}>
          <m.blockquote initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} style={{ margin: 0, padding: '16px 20px', borderLeft: `3px solid ${G.greenLt}`, background: 'rgba(0,0,0,0.25)', borderRadius: '0 12px 12px 0', fontSize: 'clamp(14px, 2vw, 16px)', fontWeight: 700, color: 'rgba(255,255,255,0.88)', lineHeight: 1.4, fontFamily: FONT_DISPLAY, maxWidth: 560 }}>
            {config.hero.doctrine}
          </m.blockquote>
        </div>
      </section>

      <section style={{ background: G.bg, borderTop: `1px solid ${G.border}`, padding: '72px 24px 80px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}><ProductStackBoard stack={config.stack} accent={G.green} kinetic /></div>
      </section>

      <section style={{ background: C.bg, borderTop: `1px solid ${C.border}`, padding: '72px 24px 80px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}><SignalPulseBoard signals={config.signals} accent={G.greenLt} mapsPulse={config.visual === 'google-visibility'} socialPulse={config.visual === 'social-feed'} /></div>
      </section>

      <section style={{ background: '#030303', borderTop: `1px solid ${C.border}`, padding: '72px 24px 80px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}><ProgressLiveBoard progress={config.progress} accent={G.greenLt} /></div>
      </section>

      <section style={{ background: G.beige, borderTop: `1px solid ${G.border}`, padding: '72px 24px 80px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}><ProductFlowDiagram flow={config.flow} accent={G.green} /></div>
      </section>

      <GrandSlamBand config={config} accent={G.greenLt} />

      <section style={{ background: C.bg, borderTop: `1px solid ${C.border}`, padding: '72px 24px 80px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}><ProductCompareBoard compare={config.compare} /></div>
      </section>

      <section style={{ background: G.bg, borderTop: `1px solid ${G.border}`, padding: '72px 24px 80px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: G.green, marginBottom: 12 }}>WHY THE OLD WAY LOSES</p>
          <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 800, color: G.text, letterSpacing: '-0.04em', marginBottom: 28, maxWidth: 640, lineHeight: 1.1, fontFamily: FONT_DISPLAY }}>{config.expert.title}</h2>
          <p style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)' }} data-speakable>{config.expert.subtitle}</p>
          <div style={{ display: 'grid', gap: 14, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            {config.expert.fails.map((row, i) => (
              <ExpertFailCard key={row.name} name={row.name} fail={row.fail} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section id="product-faq" style={{ background: G.beige, borderTop: `1px solid ${G.border}`, padding: '72px 24px 80px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: G.green, marginBottom: 12 }}>AI SEARCH · GOOGLE</p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: 36, lineHeight: 1.1, color: G.text, fontFamily: FONT_DISPLAY }}>Before you switch.</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {config.faqs.map((faq, i) => (
              <details key={faq.question} style={{ background: G.bg, border: `1px solid ${G.border}`, borderRadius: 14, padding: '4px 20px' }}>
                <summary style={{ fontSize: 15, fontWeight: 700, cursor: 'pointer', listStyle: 'none', padding: '16px 0', display: 'flex', gap: 14 }}>
                  <span style={{ fontSize: 12, fontWeight: 800, color: G.green, opacity: 0.7, minWidth: 24 }}>{String(i + 1).padStart(2, '0')}</span>
                  <span>{faq.question}</span>
                </summary>
                <p style={{ fontSize: 14, color: G.textMuted, lineHeight: 1.7, margin: '0 0 18px', paddingLeft: 38 }} data-speakable>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '40px 24px 56px', maxWidth: 1160, margin: '0 auto' }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: G.textMuted, marginBottom: 14 }}>NEXT ON THE ROAD</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {config.related.map((link) => (
            <Link key={link.href} href={link.href} style={{ fontSize: 13, fontWeight: 600, padding: '10px 16px', borderRadius: 99, border: `1px solid ${G.border}`, background: G.bg, color: G.text, textDecoration: 'none' }}>
              {link.label} →
            </Link>
          ))}
        </div>
      </section>
    </H360ProductShell>
  );
}
