/**
 * H360 ORDER — bespoke experience (Product #3 of 18)
 */
'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { m, useInView, AnimatePresence } from 'framer-motion';
import H360ProductShell from './H360ProductShell';
import { OrderMarginCompare } from './OrderVisuals';
import { ORDER_FAQS, ORDER_HERO, ORDER_MARGIN_COMPARE, ORDER_DISH_COMPARE } from './orderProductContent';
import { C, G, FONT_DISPLAY } from '../tokens';
import { H360_AUDIT } from '../h360Site';

const GREEN = '#4ade80';
const RED = '#f87171';
const INK = '#030303';

function SeoVault() {
  return (
    <div style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)' }} aria-hidden={false}>
      <h1>{ORDER_HERO.h1}</h1>
      {ORDER_FAQS.map((x) => (
        <div key={x.question}>
          <p>{x.question}</p>
          <p data-speakable>{x.answer}</p>
        </div>
      ))}
    </div>
  );
}

function useCountUp(target: number, active: boolean, ms = 1400) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / ms);
      setN(Math.round(target * (1 - (1 - p) ** 3)));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, target, ms]);
  return n;
}

/** Act 1 — Commission drain */
function SceneCommissionDrain() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });
  const lost = useCountUp(3300, inView, 1800);

  return (
    <section ref={ref} style={{ minHeight: '100vh', background: `linear-gradient(180deg, ${INK} 0%, #1a0808 100%)`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 48, position: 'relative', overflow: 'hidden' }}>
      <m.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: GREEN, marginBottom: 16 }}>DIRECT ORDERS</m.p>
      <m.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} style={{ fontSize: 'clamp(32px, 7vw, 56px)', fontWeight: 800, color: '#fff', textAlign: 'center', letterSpacing: '-0.04em', marginBottom: 40, fontFamily: FONT_DISPLAY, maxWidth: 560, lineHeight: 1.08 }}>
        Wolt takes your margin.<br />
        <span style={{ color: RED }}>Every night.</span>
      </m.h2>

      <m.div initial={{ scale: 0.9, opacity: 0 }} animate={inView ? { scale: 1, opacity: 1 } : {}} style={{ width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, #2a1010 0%, #1a0808 70%)', border: `3px solid ${RED}44`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        {[0, 1, 2].map((i) => (
          <m.div key={i} animate={{ y: [0, -80], opacity: [1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }} style={{ position: 'absolute', fontSize: 18, fontWeight: 800, color: RED }}>−€</m.div>
        ))}
        <div style={{ fontSize: 14, color: '#888' }}>per month</div>
        <div style={{ fontSize: 42, fontWeight: 800, color: RED, fontFamily: FONT_DISPLAY }}>€{lost}</div>
      </m.div>
      <m.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 1.2 }} style={{ marginTop: 32, fontSize: 14, color: 'rgba(255,255,255,0.45)', textAlign: 'center' }}>
        €500/day × 22% commission
      </m.p>
    </section>
  );
}

/** Act 2 — Scan → kitchen */
function SceneScanToKitchen() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const t = setInterval(() => setStep((s) => (s + 1) % 4), 2200);
    return () => clearInterval(t);
  }, [inView]);

  const labels = ['Scan QR', 'Tap menu', 'Send order', 'Kitchen prints'];

  return (
    <section ref={ref} style={{ minHeight: '90vh', background: G.beige, padding: '64px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, textAlign: 'center', marginBottom: 40, fontFamily: FONT_DISPLAY, letterSpacing: '-0.03em' }}>
        Scan. Tap. Kitchen sees it.
      </h2>

      <div style={{ display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
        {labels.map((l, i) => (
          <m.span key={l} animate={{ backgroundColor: step === i ? G.green : '#fff', color: step === i ? '#fff' : G.text }} style={{ padding: '8px 14px', borderRadius: 99, fontSize: 12, fontWeight: 700, border: `1px solid ${G.border}` }}>{l}</m.span>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24, maxWidth: 700, width: '100%' }}>
        <AnimatePresence mode="wait">
          <m.div key={step} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} style={{ background: '#fff', borderRadius: 20, padding: 20, boxShadow: '0 16px 48px rgba(0,0,0,0.08)', border: `2px solid ${step === 3 ? G.green : G.border}` }}>
            {step === 0 && (
              <div style={{ textAlign: 'center', padding: 20 }}>
                <div style={{ width: 80, height: 80, margin: '0 auto', border: `3px solid ${G.green}`, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: G.green }}>QR</div>
                <p style={{ marginTop: 12, fontSize: 13, fontWeight: 600 }}>Table 7</p>
              </div>
            )}
            {step === 1 && (
              <div>
                {['Braġjoli ×2', 'Lampuki Pie'].map((d) => (
                  <div key={d} style={{ padding: '10px 0', borderBottom: `1px solid ${G.border}`, fontSize: 13, display: 'flex', justifyContent: 'space-between' }}>
                    <span>{d}</span><span style={{ color: G.green }}>+</span>
                  </div>
                ))}
              </div>
            )}
            {step === 2 && (
              <div style={{ textAlign: 'center', padding: 24 }}>
                <m.div animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 1 }} style={{ padding: 14, background: G.green, color: '#fff', borderRadius: 12, fontWeight: 700 }}>Send to kitchen ✓</m.div>
              </div>
            )}
            {step === 3 && (
              <div style={{ fontFamily: 'monospace', fontSize: 11, background: '#fffef5', padding: 14, borderRadius: 8, border: '2px dashed #ccc' }}>
                <div style={{ fontWeight: 700, marginBottom: 8 }}>TABLE 7 · KITCHEN</div>
                <div>Braġjoli ×2</div>
                <div>Lampuki Pie</div>
                <div style={{ color: G.green, marginTop: 8 }}>€0 commission</div>
              </div>
            )}
          </m.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/** Act 3 — Margin compare (reuse motion component) */
function SceneMargin() {
  return (
    <section style={{ background: C.bg, padding: '64px 20px' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <OrderMarginCompare />
      </div>
    </section>
  );
}

/** Act 4 — One dish */
function SceneOneDish() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [side, setSide] = useState<'wolt' | 'direct'>('wolt');

  useEffect(() => {
    if (!inView) return;
    const t = setInterval(() => setSide((s) => (s === 'wolt' ? 'direct' : 'wolt')), 2500);
    return () => clearInterval(t);
  }, [inView]);

  return (
    <section ref={ref} style={{ minHeight: '70vh', background: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 48 }}>
      <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 800, marginBottom: 32, fontFamily: FONT_DISPLAY }}>{ORDER_DISH_COMPARE.dish}</h2>
      <AnimatePresence mode="wait">
        <m.div
          key={side}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          style={{ textAlign: 'center', padding: 32, borderRadius: 20, background: side === 'wolt' ? '#fef2f2' : '#f0fdf4', border: `2px solid ${side === 'wolt' ? RED : G.green}`, minWidth: 260 }}
        >
          <div style={{ fontSize: 14, fontWeight: 700, color: side === 'wolt' ? RED : G.green, marginBottom: 12 }}>{side === 'wolt' ? 'Wolt / Bolt' : 'H360 direct'}</div>
          <div style={{ fontSize: 56, fontWeight: 800, color: side === 'wolt' ? RED : G.green, fontFamily: FONT_DISPLAY }}>
            {side === 'wolt' ? '€10.50' : '€15.00'}
          </div>
          <div style={{ fontSize: 13, color: G.textMuted, marginTop: 8 }}>{side === 'wolt' ? ORDER_DISH_COMPARE.woltFee : 'You keep all'}</div>
        </m.div>
      </AnimatePresence>
    </section>
  );
}

const RIVALS = [
  { name: 'Wolt / Bolt', kill: '30% per order' },
  { name: 'Owner.com', kill: '$99/mo · US only' },
  { name: 'Toast', kill: 'Needs POS · not Malta' },
  { name: 'WhatsApp DIY', kill: 'Lost messages · no ticket' },
];

function SceneRivals() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <section ref={ref} style={{ padding: '56px 20px', background: INK }}>
      <h2 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 800, color: '#fff', textAlign: 'center', marginBottom: 32, fontFamily: FONT_DISPLAY }}>
        No POS. No terminal. No commission.
      </h2>
      <div style={{ maxWidth: 520, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {RIVALS.map((r, i) => (
          <m.div key={r.name} initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: i * 0.08 }} style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 18px', borderRadius: 12, background: 'rgba(255,255,255,0.05)', border: '1px solid #333' }}>
            <span style={{ fontWeight: 700, color: '#888', textDecoration: 'line-through' }}>{r.name}</span>
            <span style={{ fontSize: 13, color: '#aaa' }}>{r.kill}</span>
          </m.div>
        ))}
      </div>
    </section>
  );
}

/** Act 6 — You own the guest */
function SceneOwnGuest() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <section ref={ref} style={{ minHeight: '60vh', background: `linear-gradient(180deg, #0a1a0f, ${G.beige})`, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 48 }}>
      <m.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} style={{ textAlign: 'center', maxWidth: 400 }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>👤</div>
        <p style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 800, color: '#fff', fontFamily: FONT_DISPLAY, letterSpacing: '-0.03em', marginBottom: 12 }}>The guest is yours.</p>
        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)' }}>Not Wolt&apos;s database. WhatsApp win-back later.</p>
      </m.div>
    </section>
  );
}

function SceneCta() {
  return (
    <section style={{ padding: '56px 24px 72px', textAlign: 'center', background: G.bg }}>
      <p style={{ fontSize: 'clamp(22px, 4vw, 30px)', fontWeight: 800, marginBottom: 8, fontFamily: FONT_DISPLAY }}>Keep €3,300/month.</p>
      <p style={{ fontSize: 14, color: G.textMuted, marginBottom: 24 }}>{ORDER_MARGIN_COMPARE.brainLine.slice(0, 60)}…</p>
      <Link href={H360_AUDIT} style={{ display: 'inline-flex', padding: '16px 32px', background: G.green, color: '#f0f9f4', borderRadius: 99, fontSize: 16, fontWeight: 700, textDecoration: 'none' }}>
        Get ARC audit →
      </Link>
      <div style={{ marginTop: 28, display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
        {ORDER_FAQS.length > 0 && (
          <>
            <Link href="/h360/restaurant-qr-payment-malta" style={{ fontSize: 12, fontWeight: 600, padding: '8px 14px', borderRadius: 99, border: `1px solid ${G.border}`, color: G.text, textDecoration: 'none' }}>QR Payment</Link>
            <Link href="/h360#h360-products" style={{ fontSize: 12, fontWeight: 600, padding: '8px 14px', borderRadius: 99, border: `1px solid ${G.border}`, color: G.text, textDecoration: 'none' }}>All H360</Link>
          </>
        )}
      </div>
    </section>
  );
}

export default function OrderExperience() {
  return (
    <H360ProductShell eyebrow={ORDER_HERO.eyebrow} h1={ORDER_HERO.h1} live ctaName="ORDER" themeAccent={GREEN} cinema>
      <SeoVault />
      <SceneCommissionDrain />
      <SceneScanToKitchen />
      <SceneMargin />
      <SceneOneDish />
      <SceneRivals />
      <SceneOwnGuest />
      <SceneCta />
    </H360ProductShell>
  );
}
