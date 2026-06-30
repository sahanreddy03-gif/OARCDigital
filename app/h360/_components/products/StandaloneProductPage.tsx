'use client';

import Link from 'next/link';
import { m } from 'framer-motion';
import H360ProductShell from './H360ProductShell';
import DeviceFrame from './DeviceFrame';
import { themeForVisual } from './productThemes';
import { C, G } from '../tokens';
import type { StandaloneProductConfig } from './standaloneProductTypes';
import {
  ProductStackBoard,
  SignalPulseBoard,
  ProgressLiveBoard,
  ProductFlowDiagram,
  ProductCompareBoard,
  ExpertFailCard,
} from './standaloneVisuals';

export default function StandaloneProductPage({ config }: { config: StandaloneProductConfig }) {
  const theme = themeForVisual(config.visual);

  return (
    <H360ProductShell eyebrow={config.eyebrow} h1={config.h1} live={config.live} ctaName={config.ctaName} themeAccent={theme.accent}>
      <section style={{ position: 'relative', overflow: 'hidden', background: theme.gradient, borderBottom: `1px solid ${C.border}`, marginTop: -8 }}>
        <div style={{ position: 'absolute', inset: 0, background: theme.glow, pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '48px 24px 56px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48, alignItems: 'center', position: 'relative' }}>
          <div>
            <m.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} style={{ display: 'inline-flex', alignItems: 'baseline', gap: 12, marginBottom: 24, padding: '14px 18px', borderRadius: 16, background: 'rgba(0,0,0,0.35)', border: `1px solid ${theme.accent}44` }}>
              <span style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: theme.accent, letterSpacing: '-0.03em' }}>{config.hero.metric.value}</span>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.72)', lineHeight: 1.4, maxWidth: 200 }}>{config.hero.metric.label}</span>
            </m.div>
            <p style={{ fontSize: 'clamp(17px, 2.2vw, 20px)', lineHeight: 1.65, color: 'rgba(255,255,255,0.92)', margin: '0 0 18px', maxWidth: 520, fontWeight: 500 }} data-speakable>{config.hero.ownerPain}</p>
            <p style={{ fontSize: 15, fontWeight: 600, color: theme.accent, lineHeight: 1.55, margin: '0 0 12px', maxWidth: 520 }}>For your guest: {config.hero.guestGain}</p>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, margin: 0, maxWidth: 520 }}>{config.hero.wedge}</p>
          </div>
          <DeviceFrame visual={config.visual} theme={theme} playing />
        </div>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px 40px' }}>
          <m.blockquote initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} style={{ margin: 0, padding: '20px 24px', borderLeft: `3px solid ${theme.accent}`, background: 'rgba(0,0,0,0.25)', borderRadius: '0 14px 14px 0', fontSize: 'clamp(15px, 2vw, 18px)', fontWeight: 600, color: 'rgba(255,255,255,0.88)', lineHeight: 1.5 }}>
            {config.hero.doctrine}
          </m.blockquote>
        </div>
      </section>

      <section style={{ background: G.bg, borderTop: `1px solid ${G.border}`, padding: '72px 24px 80px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}><ProductStackBoard stack={config.stack} accent={theme.accent} /></div>
      </section>

      <section style={{ background: C.bg, borderTop: `1px solid ${C.border}`, padding: '72px 24px 80px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}><SignalPulseBoard signals={config.signals} accent={theme.accent} /></div>
      </section>

      <section style={{ background: '#030303', borderTop: `1px solid ${C.border}`, padding: '72px 24px 80px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}><ProgressLiveBoard progress={config.progress} accent={theme.accent} /></div>
      </section>

      <section style={{ background: G.beige, borderTop: `1px solid ${G.border}`, padding: '72px 24px 80px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}><ProductFlowDiagram flow={config.flow} accent={theme.accent} /></div>
      </section>

      <section style={{ background: C.bg, borderTop: `1px solid ${C.border}`, padding: '72px 24px 80px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}><ProductCompareBoard compare={config.compare} /></div>
      </section>

      <section style={{ background: G.bg, borderTop: `1px solid ${G.border}`, padding: '72px 24px 80px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: G.green, marginBottom: 12 }}>WHY THE OLD WAY LOSES</p>
          <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 800, color: G.text, letterSpacing: '-0.04em', marginBottom: 10, maxWidth: 640, lineHeight: 1.1 }}>{config.expert.title}</h2>
          <p style={{ fontSize: 15, color: G.textMuted, marginBottom: 36, maxWidth: 560, lineHeight: 1.55 }}>{config.expert.subtitle}</p>
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
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: 36, lineHeight: 1.1, color: G.text }}>Before you switch.</h2>
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
