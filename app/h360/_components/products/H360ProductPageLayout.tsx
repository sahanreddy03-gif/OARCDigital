'use client';

import Link from 'next/link';
import { m } from 'framer-motion';
import ProductCardVisual from '../product-cards/ProductCardVisual';
import type { ProductVisualId } from '../product-cards/productCardsData';
import H360ProductShell from './H360ProductShell';
import { ProductFlowDiagram, ExpertFailCard } from './sharedVisuals';
import { PremiumCompare, type PremiumCompareId } from './premiumCompareVisuals';
import { C, G } from '../tokens';

export type { PremiumCompareId };

export type H360ProductPageConfig = {
  eyebrow: string;
  h1: string;
  live?: boolean;
  ctaName: string;
  hero: {
    ownerPain: string;
    guestGain: string;
    wedge: string;
    hook?: string;
  };
  visual: ProductVisualId;
  flow: {
    title: string;
    subtitle: string;
    nodes: readonly { id: string; label: string; detail: string }[];
  };
  flowFooter?: React.ReactNode;
  compare?: {
    title: string;
    subtitle?: string;
    brainLine?: string;
    visual: PremiumCompareId;
  };
  expertTitle: string;
  expertSubtitle: string;
  expertFails: readonly { name: string; fail: string }[];
  faqs: readonly { question: string; answer: string }[];
  related: readonly { label: string; href: string }[];
};

export default function H360ProductPageLayout({ config }: { config: H360ProductPageConfig }) {
  const { hero, flow } = config;
  return (
    <H360ProductShell eyebrow={config.eyebrow} h1={config.h1} live={config.live} ctaName={config.ctaName}>
      <section style={{ padding: '0 20px 48px', maxWidth: 1140, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 40, alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: G.text, margin: '0 0 16px', maxWidth: 520 }} data-speakable>
              {hero.ownerPain}
            </p>
            <p style={{ fontSize: 14, fontWeight: 600, color: G.green, lineHeight: 1.55, margin: '0 0 12px', maxWidth: 520 }}>
              For your guest: {hero.guestGain}
            </p>
            <p style={{ fontSize: 14, color: G.textMuted, lineHeight: 1.55, margin: 0, maxWidth: 520 }}>
              {hero.wedge}
            </p>
            {hero.hook && (
              <p style={{ fontSize: 13, fontStyle: 'italic', color: G.textMuted, marginTop: 16, marginBottom: 0 }}>{hero.hook}</p>
            )}
          </div>
          <m.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} style={{ display: 'flex', justifyContent: 'center', transform: 'scale(1.06)' }}>
            <ProductCardVisual visual={config.visual} playing dark={false} />
          </m.div>
        </div>
      </section>

      <section style={{ background: C.bg, borderTop: `1px solid ${C.border}`, padding: '56px 20px 64px' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <ProductFlowDiagram title={flow.title} subtitle={flow.subtitle} nodes={flow.nodes} footer={config.flowFooter} />
        </div>
      </section>

      {config.compare && (
        <section style={{ background: '#050505', borderTop: `1px solid ${C.border}`, padding: '56px 20px 64px' }}>
          <div style={{ maxWidth: 1140, margin: '0 auto' }}>
            <PremiumCompare
              visual={config.compare.visual}
              title={config.compare.title}
              subtitle={config.compare.subtitle}
              brainLine={config.compare.brainLine}
            />
          </div>
        </section>
      )}

      <section style={{ background: C.bg, borderTop: `1px solid ${C.border}`, padding: config.compare ? '56px 20px 64px' : '0 20px 64px' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, color: C.white, letterSpacing: '-0.03em', marginBottom: 8 }}>
            {config.expertTitle}
          </h2>
          <p style={{ fontSize: 14, color: C.muted, marginBottom: 28, maxWidth: 560 }}>{config.expertSubtitle}</p>
          <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            {config.expertFails.map((row, i) => (
              <ExpertFailCard key={row.name} name={row.name} fail={row.fail} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section id="product-faq" style={{ background: G.bg, borderTop: `1px solid ${G.border}`, padding: '56px 20px 64px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: G.green, marginBottom: 12 }}>AI SEARCH · GOOGLE</p>
          <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 28 }}>
            Questions owners ask before they switch.
          </h2>
          {config.faqs.map((faq) => (
            <details key={faq.question} style={{ borderBottom: `1px solid ${G.border}`, padding: '16px 0' }}>
              <summary style={{ fontSize: 15, fontWeight: 700, cursor: 'pointer', listStyle: 'none' }}>{faq.question}</summary>
              <p style={{ fontSize: 14, color: G.textMuted, lineHeight: 1.65, margin: '12px 0 0' }} data-speakable>
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section style={{ padding: '32px 20px 48px', maxWidth: 1140, margin: '0 auto' }}>
        <p style={{ fontSize: 12, fontWeight: 600, color: G.textMuted, marginBottom: 12 }}>Related H360 tools</p>
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
