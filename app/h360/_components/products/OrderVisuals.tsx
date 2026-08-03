'use client';

import { useEffect, useState } from 'react';
import { m, useReducedMotion } from 'framer-motion';
import { C, G } from '../tokens';
import {
  ORDER_FLOW_DIAGRAM,
  ORDER_MARGIN_COMPARE,
  ORDER_DISH_COMPARE,
  ORDER_STEPS,
} from './orderProductContent';

const GREEN = '#4ade80';
const RED = '#f87171';

function IconQr() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <path d="M14 14h3v3h-3zM17 17h3v3h-3zM14 20h3" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2" />
    </svg>
  );
}

function IconPrinter() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M6 9V3h12v6M6 14H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2" />
      <rect x="6" y="14" width="12" height="8" />
    </svg>
  );
}

function IconWallet() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M20 12V8H6a2 2 0 0 1 0-4h12v4" />
      <rect x="2" y="6" width="20" height="14" rx="2" />
      <circle cx="17" cy="13" r="1" fill="currentColor" />
    </svg>
  );
}

const NODE_ICONS = [IconQr, IconPhone, IconPrinter, IconWallet];

/** Animated left-to-right journey — brain ORDER hook */
export function OrderFlowDiagram() {
  const reduce = useReducedMotion();
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setPulse((p) => (p + 1) % 4), 2200);
    return () => clearInterval(t);
  }, [reduce]);

  const nodes = ORDER_FLOW_DIAGRAM.nodes;

  return (
    <div style={{ width: '100%' }}>
      <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 34px)', fontWeight: 800, color: C.white, letterSpacing: '-0.03em', margin: '0 0 8px' }}>
        {ORDER_FLOW_DIAGRAM.title}
      </h2>
      <p style={{ fontSize: 15, color: C.muted, marginBottom: 32, maxWidth: 480, lineHeight: 1.5 }}>
        {ORDER_FLOW_DIAGRAM.subtitle}
      </p>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'stretch',
          gap: 0,
          justifyContent: 'center',
        }}
      >
        {nodes.map((node, i) => {
          const Icon = NODE_ICONS[i];
          const active = pulse === i;
          return (
            <div key={node.id} style={{ display: 'flex', alignItems: 'center', flex: '1 1 140px', minWidth: 120, maxWidth: 220 }}>
              <m.div
                animate={active && !reduce ? { scale: [1, 1.04, 1], borderColor: [C.border, GREEN, C.border] } : {}}
                transition={{ duration: 0.6 }}
                style={{
                  flex: 1,
                  padding: '20px 14px',
                  background: active ? 'rgba(74,222,128,0.08)' : C.card,
                  border: `2px solid ${active ? GREEN : C.border}`,
                  borderRadius: 16,
                  textAlign: 'center',
                  minHeight: 148,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 10,
                }}
              >
                <div style={{ color: active ? GREEN : C.muted }}>
                  <Icon />
                </div>
                <div style={{ fontSize: 13, fontWeight: 800, color: C.white, lineHeight: 1.25 }}>{node.label}</div>
                <div style={{ fontSize: 11, color: '#888', lineHeight: 1.35 }}>{node.detail}</div>
              </m.div>
              {i < nodes.length - 1 && (
                <m.div
                  animate={pulse === i && !reduce ? { opacity: [0.3, 1, 0.3], x: [0, 4, 0] } : { opacity: 0.35 }}
                  transition={{ duration: 0.8, repeat: pulse === i ? 2 : 0 }}
                  style={{ color: GREEN, fontSize: 22, padding: '0 4px', flexShrink: 0, userSelect: 'none' }}
                  aria-hidden
                >
                  →
                </m.div>
              )}
            </div>
          );
        })}
      </div>

      {/* Kitchen ticket mock — motion proof */}
      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          marginTop: 28,
          maxWidth: 320,
          marginLeft: 'auto',
          marginRight: 'auto',
          background: '#fffef5',
          border: '2px dashed #d4d4d4',
          borderRadius: 8,
          padding: '14px 16px',
          fontFamily: 'monospace',
          boxShadow: '0 12px 40px rgba(0,0,0,0.35)',
        }}
      >
        <m.div
          animate={reduce ? {} : { opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ fontSize: 10, color: '#666', marginBottom: 8 }}
        >
          ● KITCHEN — printing now
        </m.div>
        <div style={{ fontSize: 12, fontWeight: 700, color: '#111', marginBottom: 6 }}>TABLE 7 · NEW ORDER</div>
        {['Braġjoli ×2', 'Lampuki Pie', "Ta' Arġentina"].map((line, i) => (
          <m.div
            key={line}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 * i }}
            style={{ fontSize: 11, color: '#333', padding: '3px 0' }}
          >
            {line}
          </m.div>
        ))}
        <div style={{ borderTop: '1px dashed #ccc', marginTop: 8, paddingTop: 8, fontSize: 11, color: '#166534' }}>
          €0 commission · direct to kitchen
        </div>
      </m.div>
    </div>
  );
}

/** Wolt vs ORDER — brain maths animated */
export function OrderMarginCompare() {
  const reduce = useReducedMotion();
  const { wolt, direct, title, brainLine } = ORDER_MARGIN_COMPARE;

  return (
    <div style={{ width: '100%' }}>
      <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, color: C.white, letterSpacing: '-0.03em', margin: '0 0 28px' }}>
        {title}
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, marginBottom: 24 }}>
        {/* Wolt column */}
        <m.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{ background: C.card2, border: `1px solid ${C.border}`, borderRadius: 16, padding: 20, overflow: 'hidden' }}
        >
          <div style={{ fontSize: 12, fontWeight: 700, color: RED, marginBottom: 16, letterSpacing: '0.06em' }}>{wolt.label}</div>
          <div style={{ fontSize: 13, color: '#aaa', marginBottom: 8 }}>{wolt.daily}</div>
          <m.div
            initial={{ width: 0 }}
            whileInView={{ width: '78%' }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
            style={{ height: 36, background: `linear-gradient(90deg, ${RED}, #dc2626)`, borderRadius: 8, marginBottom: 8, display: 'flex', alignItems: 'center', paddingLeft: 12 }}
          >
            <span style={{ fontSize: 12, fontWeight: 700, color: '#fff' }}>{wolt.fee}</span>
          </m.div>
          <div style={{ fontSize: 15, fontWeight: 800, color: RED, marginBottom: 8 }}>{wolt.monthly}</div>
          <div style={{ fontSize: 12, color: C.muted }}>{wolt.note}</div>
          <div style={{ marginTop: 14, padding: '10px 12px', background: 'rgba(248,113,113,0.1)', borderRadius: 8, fontSize: 12, color: '#fca5a5' }}>
            {ORDER_DISH_COMPARE.dish} → {ORDER_DISH_COMPARE.woltFee}
          </div>
        </m.div>

        {/* ORDER column */}
        <m.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{ background: 'rgba(74,222,128,0.06)', border: `2px solid ${GREEN}`, borderRadius: 16, padding: 20 }}
        >
          <div style={{ fontSize: 12, fontWeight: 700, color: GREEN, marginBottom: 16, letterSpacing: '0.06em' }}>{direct.label}</div>
          <div style={{ fontSize: 13, color: '#aaa', marginBottom: 8 }}>{direct.daily}</div>
          <m.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            style={{ height: 36, background: `linear-gradient(90deg, ${G.green}, #166534)`, borderRadius: 8, marginBottom: 8, display: 'flex', alignItems: 'center', paddingLeft: 12 }}
          >
            <span style={{ fontSize: 12, fontWeight: 700, color: '#fff' }}>{direct.fee}</span>
          </m.div>
          <div style={{ fontSize: 15, fontWeight: 800, color: GREEN, marginBottom: 8 }}>{direct.monthly}</div>
          <div style={{ fontSize: 12, color: C.muted }}>{direct.note}</div>
          <div style={{ marginTop: 14, padding: '10px 12px', background: 'rgba(74,222,128,0.12)', borderRadius: 8, fontSize: 12, color: GREEN }}>
            {ORDER_DISH_COMPARE.dish} → {ORDER_DISH_COMPARE.youKeep}
          </div>
        </m.div>
      </div>

      <p style={{ fontSize: 14, color: '#bbb', lineHeight: 1.6, maxWidth: 640, margin: 0 }} data-speakable>
        {brainLine}
      </p>
    </div>
  );
}

/** Compact step pills with icons — hub-style motion */
export function OrderStepPills() {
  const icons = [IconQr, IconPhone, IconPrinter];
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
      {ORDER_STEPS.map((step, i) => {
        const Icon = icons[i];
        return (
          <m.div
            key={step.id}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            style={{
              flex: '1 1 140px',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '14px 16px',
              background: C.card,
              border: `1px solid ${C.border}`,
              borderRadius: 14,
            }}
          >
            <div style={{ color: GREEN, flexShrink: 0 }}>
              <Icon />
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: C.white }}>{step.label}</div>
              <div style={{ fontSize: 11, color: C.muted }}>{step.sub}</div>
            </div>
          </m.div>
        );
      })}
    </div>
  );
}

/** Expert-fail row with visual strike-through bar */
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
