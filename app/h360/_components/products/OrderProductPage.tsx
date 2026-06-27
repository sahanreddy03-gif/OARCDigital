'use client';

import Link from 'next/link';
import { m } from 'framer-motion';
import ProductCardVisual from '../product-cards/ProductCardVisual';
import H360ProductShell from './H360ProductShell';
import { OrderFlowDiagram, OrderMarginCompare, ExpertFailCard } from './OrderVisuals';
import { C, G } from '../tokens';
import {
  ORDER_HERO,
  ORDER_EXPERT_FAILS,
  ORDER_FAQS,
  ORDER_RELATED,
} from './orderProductContent';

export default function OrderProductPage() {
  return (
    <H360ProductShell eyebrow={ORDER_HERO.eyebrow} h1={ORDER_HERO.h1} live ctaName="ORDER">
      {/* Hero — owner + guest + phone mock */}
      <section style={{ padding: '0 20px 48px', maxWidth: 1140, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 40, alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: G.text, margin: '0 0 16px', maxWidth: 520 }} data-speakable>
              {ORDER_HERO.ownerPain}
            </p>
            <p style={{ fontSize: 14, fontWeight: 600, color: G.green, lineHeight: 1.55, margin: '0 0 12px', maxWidth: 520 }}>
              For your guest: {ORDER_HERO.guestGain}
            </p>
            <p style={{ fontSize: 14, color: G.textMuted, lineHeight: 1.55, margin: 0, maxWidth: 520 }}>
              {ORDER_HERO.wedge}
            </p>
          </div>
          <m.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'flex', justifyContent: 'center', transform: 'scale(1.08)' }}
          >
            <ProductCardVisual visual="direct-order" playing dark={false} />
          </m.div>
        </div>
      </section>

      {/* Flow diagram — brain hook as motion journey */}
      <section style={{ background: C.bg, borderTop: `1px solid ${C.border}`, padding: '56px 20px 64px' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <OrderFlowDiagram />
        </div>
      </section>

      {/* Margin compare — brain Wolt maths */}
      <section style={{ background: '#050505', borderTop: `1px solid ${C.border}`, padding: '56px 20px 64px' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <OrderMarginCompare />
        </div>
      </section>

      {/* Expert fails — visual cards, brain contrast */}
      <section style={{ background: C.bg, borderTop: `1px solid ${C.border}`, padding: '56px 20px 64px' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, color: C.white, letterSpacing: '-0.03em', marginBottom: 8 }}>
            Why Wolt is not the same as owning the order.
          </h2>
          <p style={{ fontSize: 14, color: C.muted, marginBottom: 28, maxWidth: 560 }}>
            Master the experts, then beat them — built for small Malta restaurants, not US chains.
          </p>
          <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            {ORDER_EXPERT_FAILS.map((row, i) => (
              <ExpertFailCard key={row.name} name={row.name} fail={row.fail} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Gate 2 — AEO FAQ */}
      <section id="order-faq" style={{ background: G.bg, borderTop: `1px solid ${G.border}`, padding: '56px 20px 64px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: G.green, marginBottom: 12 }}>AI SEARCH · GOOGLE</p>
          <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 28 }}>
            Questions owners ask before they switch.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {ORDER_FAQS.map((faq) => (
              <details
                key={faq.question}
                style={{
                  borderBottom: `1px solid ${G.border}`,
                  padding: '16px 0',
                }}
              >
                <summary style={{ fontSize: 15, fontWeight: 700, cursor: 'pointer', listStyle: 'none' }}>
                  {faq.question}
                </summary>
                <p style={{ fontSize: 14, color: G.textMuted, lineHeight: 1.65, margin: '12px 0 0' }} data-speakable>
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Cluster links */}
      <section style={{ padding: '32px 20px 48px', maxWidth: 1140, margin: '0 auto' }}>
        <p style={{ fontSize: 12, fontWeight: 600, color: G.textMuted, marginBottom: 12 }}>Related H360 tools</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {ORDER_RELATED.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: 13,
                fontWeight: 600,
                padding: '8px 14px',
                borderRadius: 99,
                border: `1px solid ${G.border}`,
                color: G.text,
                textDecoration: 'none',
              }}
            >
              {link.label} →
            </Link>
          ))}
        </div>
      </section>
    </H360ProductShell>
  );
}
