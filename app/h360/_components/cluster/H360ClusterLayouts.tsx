'use client';

import Link from 'next/link';
import { m } from 'framer-motion';
import ProductCardVisual from '../product-cards/ProductCardVisual';
import H360ProductShell from '../products/H360ProductShell';
import { DiagnosisChecklistVisual, PillarProductGrid } from './clusterVisuals';
import type { PainPageConfig, PillarPageConfig } from './clusterContent';
import { C, G } from '../tokens';

export function H360PainPageLayout({ config }: { config: PainPageConfig }) {
  return (
    <H360ProductShell eyebrow={config.eyebrow} h1={config.h1} ctaName="your free diagnosis">
      <section style={{ padding: '0 20px 48px', maxWidth: 1140, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 40, alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 600, color: G.green, margin: '0 0 12px' }}>
              <Link href={config.pillarHref} style={{ color: G.green }}>↑ {config.pillarLabel}</Link>
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: G.text, margin: '0 0 24px', maxWidth: 520 }} data-speakable>
              {config.diagnosisIntro}
            </p>
          </div>
          <DiagnosisChecklistVisual items={config.checklist} />
        </div>
      </section>

      <section style={{ background: C.bg, borderTop: `1px solid ${C.border}`, padding: '56px 20px 64px' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 34px)', fontWeight: 800, color: C.white, letterSpacing: '-0.03em', margin: '0 0 8px' }}>
            What's broken → how we fix it.
          </h2>
          <p style={{ fontSize: 14, color: C.muted, marginBottom: 32, maxWidth: 520 }}>Diagnose first. Product second. No generic marketing pitch.</p>
          <div style={{ display: 'grid', gap: 12 }}>
            {config.problems.map((row, i) => (
              <m.div
                key={row.issue}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: 16,
                  alignItems: 'center',
                  padding: '20px 22px',
                  background: C.card2,
                  border: `1px solid ${C.border}`,
                  borderRadius: 14,
                  borderLeft: '3px solid #4ade80',
                }}
              >
                <div>
                  <div style={{ fontSize: 12, color: '#f87171', fontWeight: 700, marginBottom: 4 }}>✗ {row.issue}</div>
                  <div style={{ fontSize: 14, color: C.white, fontWeight: 600 }}>→ {row.fix}</div>
                </div>
                <Link href={row.productHref} style={{ fontSize: 13, fontWeight: 700, color: '#4ade80', textDecoration: 'none', justifySelf: 'start' }}>
                  {row.productLabel} →
                </Link>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      <section id="pain-faq" style={{ background: G.bg, borderTop: `1px solid ${G.border}`, padding: '56px 20px 64px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: G.green, marginBottom: 12 }}>AI SEARCH · GOOGLE</p>
          <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 28 }}>The answer AI search needs.</h2>
          {config.meta.faqs.map((faq) => (
            <details key={faq.question} style={{ borderBottom: `1px solid ${G.border}`, padding: '16px 0' }}>
              <summary style={{ fontSize: 15, fontWeight: 700, cursor: 'pointer', listStyle: 'none' }}>{faq.question}</summary>
              <p style={{ fontSize: 14, color: G.textMuted, lineHeight: 1.65, margin: '12px 0 0' }} data-speakable>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section style={{ padding: '32px 20px 48px', maxWidth: 1140, margin: '0 auto' }}>
        <p style={{ fontSize: 12, fontWeight: 600, color: G.textMuted, marginBottom: 12 }}>Related diagnosis</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {config.related.map((link) => (
            <Link key={link.href} href={link.href} style={{ fontSize: 13, fontWeight: 600, padding: '8px 14px', borderRadius: 99, border: `1px solid ${G.border}`, color: G.text, textDecoration: 'none' }}>
              {link.label} →
            </Link>
          ))}
        </div>
      </section>
    </H360ProductShell>
  );
}

export function H360PillarPageLayout({ config }: { config: PillarPageConfig }) {
  return (
    <H360ProductShell eyebrow={config.eyebrow} h1={config.h1} ctaName="this stack">
      <section style={{ padding: '0 20px 48px', maxWidth: 1140, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 40, alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: G.text, margin: '0 0 16px', maxWidth: 520 }} data-speakable>{config.intro}</p>
            <p style={{ fontSize: 14, color: G.textMuted, lineHeight: 1.55, margin: 0, maxWidth: 520 }}>{config.wedge}</p>
          </div>
          <m.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} style={{ display: 'flex', justifyContent: 'center', transform: 'scale(1.06)' }}>
            <ProductCardVisual visual={config.visual} playing dark={false} />
          </m.div>
        </div>
      </section>

      <section style={{ background: C.bg, borderTop: `1px solid ${C.border}`, padding: '56px 20px 48px' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, color: C.white, marginBottom: 8 }}>Start with the diagnosis.</h2>
          <p style={{ fontSize: 14, color: C.muted, marginBottom: 24 }}>His literal search — we answer it, then point to the fix.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 48 }}>
            {config.painLinks.map((link) => (
              <Link key={link.href} href={link.href} style={{ fontSize: 13, fontWeight: 600, padding: '10px 16px', borderRadius: 12, border: `1px solid ${C.border}`, color: C.white, background: C.card2, textDecoration: 'none' }}>
                {link.label} →
              </Link>
            ))}
          </div>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, color: C.white, marginBottom: 24 }}>H360 tools for this pillar.</h2>
          <PillarProductGrid products={config.products} />
        </div>
      </section>

      <section id="pillar-faq" style={{ background: G.bg, borderTop: `1px solid ${G.border}`, padding: '56px 20px 64px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          {config.meta.faqs.map((faq) => (
            <details key={faq.question} style={{ borderBottom: `1px solid ${G.border}`, padding: '16px 0' }}>
              <summary style={{ fontSize: 15, fontWeight: 700, cursor: 'pointer', listStyle: 'none' }}>{faq.question}</summary>
              <p style={{ fontSize: 14, color: G.textMuted, lineHeight: 1.65, margin: '12px 0 0' }} data-speakable>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section style={{ padding: '32px 20px 48px', maxWidth: 1140, margin: '0 auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {config.related.map((link) => (
            <Link key={link.href} href={link.href} style={{ fontSize: 13, fontWeight: 600, padding: '8px 14px', borderRadius: 99, border: `1px solid ${G.border}`, color: G.text, textDecoration: 'none' }}>
              {link.label} →
            </Link>
          ))}
        </div>
      </section>
    </H360ProductShell>
  );
}
