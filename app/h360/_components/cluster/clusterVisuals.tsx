'use client';

import { useEffect, useState } from 'react';
import { m } from 'framer-motion';
import { C } from '../tokens';

const GREEN = '#4ade80';
const RED = '#f87171';

export function DiagnosisChecklistVisual({
  items,
}: {
  items: readonly { label: string; fixed: string }[];
}) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setStep((s) => (s >= items.length * 2 ? 0 : s + 1)), 1400);
    return () => clearInterval(t);
  }, [items.length]);

  return (
    <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 16, padding: 24, maxWidth: 360, margin: '0 auto' }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: C.muted, letterSpacing: '0.08em', marginBottom: 16 }}>DIAGNOSIS · LIVE</div>
      {items.map((item, i) => {
        const fixed = step > i * 2 + 1;
        const active = step === i * 2 || step === i * 2 + 1;
        return (
          <m.div
            key={item.label}
            animate={active ? { x: [0, 4, 0] } : {}}
            transition={{ duration: 0.4 }}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 12,
              padding: '12px 0',
              borderBottom: i < items.length - 1 ? `1px solid ${C.border}` : undefined,
            }}
          >
            <span style={{ fontSize: 16, color: fixed ? GREEN : RED, flexShrink: 0 }}>{fixed ? '✓' : '✗'}</span>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: fixed ? GREEN : C.white, lineHeight: 1.3 }}>{item.label}</div>
              {fixed && (
                <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ fontSize: 11, color: C.muted, marginTop: 4 }}>
                  → {item.fixed}
                </m.div>
              )}
            </div>
          </m.div>
        );
      })}
    </div>
  );
}

export function PillarProductGrid({
  products,
}: {
  products: readonly { label: string; href: string; sub: string }[];
}) {
  return (
    <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
      {products.map((p, i) => (
        <m.a
          key={p.href}
          href={p.href}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06 }}
          style={{
            display: 'block',
            padding: 20,
            background: C.card2,
            border: `1px solid ${C.border}`,
            borderRadius: 14,
            textDecoration: 'none',
            color: C.white,
          }}
        >
          <div style={{ fontSize: 14, fontWeight: 800, marginBottom: 6 }}>{p.label}</div>
          <div style={{ fontSize: 12, color: C.muted, lineHeight: 1.45 }}>{p.sub}</div>
          <div style={{ fontSize: 12, fontWeight: 600, color: GREEN, marginTop: 12 }}>See how →</div>
        </m.a>
      ))}
    </div>
  );
}
