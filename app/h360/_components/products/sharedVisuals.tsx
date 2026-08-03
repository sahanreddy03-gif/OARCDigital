'use client';

import { useEffect, useState } from 'react';
import { m } from 'framer-motion';
import { C } from '../tokens';

const GREEN = '#4ade80';
const RED = '#f87171';

export type FlowNode = { id: string; label: string; detail: string };

export function ProductFlowDiagram({
  title,
  subtitle,
  nodes,
  footer,
  accent = GREEN,
}: {
  title: string;
  subtitle: string;
  nodes: readonly FlowNode[];
  footer?: React.ReactNode;
  accent?: string;
}) {
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setPulse((p) => (p + 1) % nodes.length), 2200);
    return () => clearInterval(t);
  }, [nodes.length]);

  return (
    <div style={{ width: '100%' }}>
      <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 34px)', fontWeight: 800, color: C.white, letterSpacing: '-0.03em', margin: '0 0 8px' }}>
        {title}
      </h2>
      <p style={{ fontSize: 15, color: C.muted, marginBottom: 32, maxWidth: 520, lineHeight: 1.5 }}>{subtitle}</p>

      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'stretch', gap: 0, justifyContent: 'center' }}>
        {nodes.map((node, i) => {
          const active = pulse === i;
          return (
            <div key={node.id} style={{ display: 'flex', alignItems: 'center', flex: '1 1 140px', minWidth: 120, maxWidth: 220 }}>
              <m.div
                animate={active ? { scale: [1, 1.04, 1], borderColor: [C.border, accent, C.border] } : {}}
                transition={{ duration: 0.6 }}
                style={{
                  flex: 1,
                  padding: '20px 14px',
                  background: active ? `${accent}14` : C.card,
                  border: `2px solid ${active ? accent : C.border}`,
                  borderRadius: 16,
                  textAlign: 'center',
                  minHeight: 132,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                }}
              >
                <div style={{ fontSize: 11, fontWeight: 800, color: active ? accent : C.muted }}>0{i + 1}</div>
                <div style={{ fontSize: 13, fontWeight: 800, color: C.white, lineHeight: 1.25 }}>{node.label}</div>
                <div style={{ fontSize: 11, color: '#888', lineHeight: 1.35 }}>{node.detail}</div>
              </m.div>
              {i < nodes.length - 1 && (
                <span style={{ color: accent, fontSize: 22, padding: '0 4px', opacity: active ? 1 : 0.35, flexShrink: 0 }} aria-hidden>
                  →
                </span>
              )}
            </div>
          );
        })}
      </div>
      {footer}
    </div>
  );
}

export function ExpertFailCard({ name, fail, index }: { name: string; fail: string; index: number }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      style={{
        padding: '18px 18px 18px 20px',
        background: C.card2,
        border: `1px solid ${C.border}`,
        borderRadius: 12,
        borderLeft: `3px solid ${RED}`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <m.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          right: 0,
          height: 2,
          background: RED,
          opacity: 0.25,
          transformOrigin: 'left',
        }}
      />
      <div style={{ fontSize: 13, fontWeight: 700, color: C.white, marginBottom: 8 }}>{name}</div>
      <p style={{ fontSize: 13, color: '#aaa', lineHeight: 1.55, margin: 0 }}>{fail}</p>
    </m.div>
  );
}

export function StampCompareVisual() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginTop: 28 }}>
      <m.div
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        style={{ background: C.card2, border: `1px solid ${C.border}`, borderRadius: 14, padding: 20, textAlign: 'center' }}
      >
        <div style={{ fontSize: 12, fontWeight: 700, color: RED, marginBottom: 12 }}>Paper card</div>
        <div style={{ fontSize: 32, opacity: 0.4, marginBottom: 8 }}>☐ ☐ ☐ ☐</div>
        <p style={{ fontSize: 12, color: C.muted, margin: 0, lineHeight: 1.5 }}>Lost · forged · staff forgets to stamp</p>
      </m.div>
      <m.div
        initial={{ opacity: 0, x: 16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        style={{ background: 'rgba(74,222,128,0.06)', border: `2px solid ${GREEN}`, borderRadius: 14, padding: 20, textAlign: 'center' }}
      >
        <div style={{ fontSize: 12, fontWeight: 700, color: GREEN, marginBottom: 12 }}>H360 STAMP</div>
        <m.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }} style={{ fontSize: 36, fontWeight: 800, color: C.white, marginBottom: 8 }}>
          7 / 8
        </m.div>
        <p style={{ fontSize: 12, color: C.muted, margin: 0, lineHeight: 1.5 }}>Auto-credits · wallet ping · no waiter scan</p>
      </m.div>
    </div>
  );
}

export function ReviewsClimbVisual() {
  const [count, setCount] = useState(12);
  useEffect(() => {
    const t = setInterval(() => setCount((c) => (c >= 47 ? 12 : c + 1)), 800);
    return () => clearInterval(t);
  }, []);
  return (
    <div style={{ marginTop: 28, maxWidth: 360, marginLeft: 'auto', marginRight: 'auto', background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: 20 }}>
      <div style={{ fontSize: 12, color: C.muted, marginBottom: 8 }}>Google reviews · your restaurant</div>
      <m.div key={count} initial={{ scale: 0.95 }} animate={{ scale: 1 }} style={{ fontSize: 42, fontWeight: 800, color: C.white }}>
        {count}
      </m.div>
      <div style={{ color: '#eab308', fontSize: 18, letterSpacing: 2, marginTop: 8 }}>★★★★★</div>
      <p style={{ fontSize: 11, color: C.muted, marginTop: 10, marginBottom: 0 }}>One tap from table QR · not 3–4 steps</p>
    </div>
  );
}

export function VisibilityScoreVisual() {
  return (
    <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
      <m.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ background: C.card2, border: `1px solid ${C.border}`, borderRadius: 14, padding: 20, textAlign: 'center' }}
      >
        <div style={{ fontSize: 11, color: C.muted, marginBottom: 8 }}>This week · your GBP</div>
        <m.div animate={{ scale: [1, 1.03, 1] }} transition={{ duration: 2.5, repeat: Infinity }} style={{ fontSize: 36, fontWeight: 800, color: GREEN }}>
          847
        </m.div>
        <div style={{ fontSize: 12, color: C.muted, marginTop: 4 }}>searches on Maps</div>
      </m.div>
      <m.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        style={{ background: 'rgba(74,222,128,0.06)', border: `2px solid ${GREEN}`, borderRadius: 14, padding: 20, textAlign: 'center' }}
      >
        <div style={{ fontSize: 11, color: GREEN, marginBottom: 8 }}>→ calls · directions</div>
        <div style={{ fontSize: 36, fontWeight: 800, color: C.white }}>37</div>
        <div style={{ fontSize: 12, color: C.muted, marginTop: 4 }}>people walked in</div>
      </m.div>
    </div>
  );
}

export function PayCompareVisual() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginTop: 28 }}>
      <m.div
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        style={{ background: C.card2, border: `1px solid ${C.border}`, borderRadius: 14, padding: 20 }}
      >
        <div style={{ fontSize: 12, fontWeight: 700, color: RED, marginBottom: 12 }}>Sunday terminal</div>
        <div style={{ fontSize: 28, fontWeight: 800, color: C.white, marginBottom: 4 }}>€250</div>
        <p style={{ fontSize: 12, color: C.muted, margin: 0, lineHeight: 1.5 }}>per table · €3,750 for 15 tables · plus platform fee</p>
      </m.div>
      <m.div
        initial={{ opacity: 0, x: 16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        style={{ background: 'rgba(74,222,128,0.06)', border: `2px solid ${GREEN}`, borderRadius: 14, padding: 20 }}
      >
        <div style={{ fontSize: 12, fontWeight: 700, color: GREEN, marginBottom: 12 }}>H360 PAY</div>
        <div style={{ fontSize: 28, fontWeight: 800, color: C.white, marginBottom: 4 }}>QR tent card</div>
        <p style={{ fontSize: 12, color: C.muted, margin: 0, lineHeight: 1.5 }}>Guest pays from phone · no hardware · no bill wait</p>
      </m.div>
    </div>
  );
}

export function WinBackVisual() {
  return (
    <div style={{ marginTop: 28, maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <m.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: '#1a1a1a', border: `1px solid ${C.border}`, borderRadius: 16, padding: 16, marginBottom: 10 }}>
        <div style={{ fontSize: 10, color: '#666', marginBottom: 6 }}>45 days · no visit</div>
        <div style={{ fontSize: 13, color: '#888' }}>Guest stopped coming</div>
      </m.div>
      <m.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} style={{ background: '#064e3b', border: `1px solid ${GREEN}`, borderRadius: 16, padding: 16, marginBottom: 10 }}>
        <div style={{ fontSize: 10, color: GREEN, marginBottom: 6 }}>TEXT · wallet notification</div>
        <div style={{ fontSize: 13, color: '#fff' }}>We miss you — book Friday?</div>
      </m.div>
      <m.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 16, padding: 16, textAlign: 'center' }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: GREEN }}>Table booked ✓</div>
      </m.div>
    </div>
  );
}
