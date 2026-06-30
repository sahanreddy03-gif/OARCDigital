/**
 * Smart Google Reviews — bespoke experience (Product #2 of 18)
 */
'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { m, useInView, AnimatePresence } from 'framer-motion';
import H360ProductShell from './H360ProductShell';
import { REVIEWS_META } from './reviewsProductContent';
import { G, FONT_DISPLAY } from '../tokens';
import { H360_AUDIT } from '../h360Site';

const GOLD = '#eab308';
const INK = '#0c0a04';

function SeoVault() {
  return (
    <div style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)' }} aria-hidden={false}>
      <h1>{REVIEWS_META.serviceName}</h1>
      {REVIEWS_META.faqs.map((x) => (
        <div key={x.question}>
          <p>{x.question}</p>
          <p data-speakable>{x.answer}</p>
        </div>
      ))}
    </div>
  );
}

function useCountUp(target: number, active: boolean, ms = 1200) {
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

/** Act 1 — 12 vs 200 reviews */
function SceneStarGap() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });
  const yours = useCountUp(12, inView, 800);
  const theirs = useCountUp(200, inView, 1400);

  return (
    <section ref={ref} style={{ minHeight: '100vh', background: `linear-gradient(180deg, ${INK} 0%, #1a1408 100%)`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 48, position: 'relative' }}>
      <m.div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse 60% 40% at 50% 30%, ${GOLD}22 0%, transparent 60%)`, pointerEvents: 'none' }} />
      <m.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: GOLD, marginBottom: 16 }}>SMART GOOGLE REVIEWS</m.p>
      <m.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} style={{ fontSize: 'clamp(32px, 7vw, 52px)', fontWeight: 800, color: '#fff', textAlign: 'center', letterSpacing: '-0.04em', marginBottom: 48, fontFamily: FONT_DISPLAY, maxWidth: 560, lineHeight: 1.08 }}>
        They pick the place<br />with <span style={{ color: GOLD }}>more stars.</span>
      </m.h2>

      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'center', width: '100%', maxWidth: 640 }}>
        <m.div animate={inView ? { opacity: [0.5, 1, 0.5] } : {}} transition={{ duration: 2, repeat: Infinity }} style={{ flex: '1 1 200px', padding: 28, borderRadius: 20, background: 'rgba(255,255,255,0.06)', border: '1px solid #333', textAlign: 'center' }}>
          <div style={{ fontSize: 12, color: '#888', marginBottom: 8 }}>You</div>
          <div style={{ fontSize: 56, fontWeight: 800, color: '#666', fontFamily: FONT_DISPLAY }}>{yours}</div>
          <div style={{ fontSize: 22, color: '#555', marginTop: 8 }}>★★☆☆☆</div>
        </m.div>
        <m.div style={{ flex: '1 1 200px', padding: 28, borderRadius: 20, background: `linear-gradient(145deg, ${GOLD}33, #1a1408)`, border: `2px solid ${GOLD}`, textAlign: 'center', boxShadow: `0 0 60px ${GOLD}33` }}>
          <div style={{ fontSize: 12, color: GOLD, marginBottom: 8 }}>Competitor</div>
          <div style={{ fontSize: 56, fontWeight: 800, color: '#fff', fontFamily: FONT_DISPLAY }}>{theirs}</div>
          <div style={{ fontSize: 22, color: GOLD, marginTop: 8 }}>★★★★★</div>
        </m.div>
      </div>
      <m.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 1.2 }} style={{ marginTop: 36, fontSize: 15, color: 'rgba(255,255,255,0.45)', textAlign: 'center' }}>
        Best food on the block ≠ best Google profile.
      </m.p>
    </section>
  );
}

/** Act 2 — 4 taps vs 1 tap */
function SceneTapRace() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-15%' });
  const [freeStep, setFreeStep] = useState(0);
  const [h360Done, setH360Done] = useState(false);

  useEffect(() => {
    if (!inView) return;
    const t0 = setTimeout(() => setH360Done(true), 600);
    const t1 = setInterval(() => setFreeStep((s) => (s >= 4 ? 0 : s + 1)), 700);
    return () => {
      clearTimeout(t0);
      clearInterval(t1);
    };
  }, [inView]);

  const freeLabels = ['Open Maps', 'Find restaurant', 'Tap Reviews', 'Write review', '…guest quits'];

  return (
    <section ref={ref} style={{ minHeight: '90vh', background: '#fff', padding: '64px 20px' }}>
      <h2 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, textAlign: 'center', letterSpacing: '-0.03em', marginBottom: 48, fontFamily: FONT_DISPLAY }}>
        Free QR vs <span style={{ color: G.green }}>one tap</span>
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24, maxWidth: 800, margin: '0 auto' }}>
        <div style={{ padding: 24, borderRadius: 20, background: '#fafafa', border: `1px solid ${G.border}` }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#ef4444', marginBottom: 16 }}>FREE MAPS QR</div>
          {freeLabels.map((label, i) => (
            <m.div key={label} animate={{ opacity: freeStep === i ? 1 : 0.25, x: freeStep === i ? 0 : -4 }} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, fontSize: 13, color: G.text }}>
              <span style={{ width: 22, height: 22, borderRadius: '50%', background: freeStep === i ? '#fecaca' : '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700 }}>{i + 1}</span>
              {label}
            </m.div>
          ))}
        </div>
        <m.div animate={h360Done ? { boxShadow: `0 0 40px ${G.green}44` } : {}} style={{ padding: 24, borderRadius: 20, background: G.greenLt, border: `2px solid ${G.green}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 220 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: G.green, marginBottom: 16 }}>H360 TABLE QR</div>
          <m.div initial={{ scale: 0 }} animate={h360Done ? { scale: 1 } : {}} transition={{ type: 'spring' }} style={{ width: 72, height: 72, border: `3px solid ${G.green}`, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 800, color: G.green }}>QR</m.div>
          <m.p initial={{ opacity: 0 }} animate={h360Done ? { opacity: 1 } : {}} transition={{ delay: 0.3 }} style={{ marginTop: 16, fontSize: 14, fontWeight: 700, color: G.text, textAlign: 'center' }}>
            Review form opens.<br />Done.
          </m.p>
        </m.div>
      </div>
    </section>
  );
}

/** Act 3 — Table moment */
function SceneTableMoment() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const steps = [800, 1200, 1000];
    let i = 0;
    const run = () => {
      if (i < steps.length) {
        setTimeout(() => {
          setPhase(i + 1);
          i += 1;
          run();
        }, steps[i]);
      }
    };
    run();
  }, [inView]);

  return (
    <section ref={ref} style={{ minHeight: '85vh', background: G.beige, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 48, position: 'relative' }}>
      <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, textAlign: 'center', marginBottom: 40, fontFamily: FONT_DISPLAY, letterSpacing: '-0.03em' }}>
        &ldquo;Happy? Tap to share.&rdquo;
      </h2>

      <div style={{ position: 'relative', width: 280, height: 200 }}>
        <m.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 3 }} style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: 200, height: 12, background: '#d4cfc4', borderRadius: 6 }} />
        <m.div style={{ position: 'absolute', bottom: 12, left: '50%', transform: 'translateX(-50%)', width: 160, height: 100, background: 'linear-gradient(180deg, #8B4513 0%, #5c3310 100%)', borderRadius: '8px 8px 4px 4px' }} />
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : {}}
          style={{ position: 'absolute', bottom: 90, left: '50%', transform: 'translateX(-50%)', width: 100, padding: '10px 8px', background: '#fff', borderRadius: 8, boxShadow: '0 8px 24px rgba(0,0,0,0.15)', textAlign: 'center', fontSize: 9, fontWeight: 700, color: G.green, border: `2px solid ${G.green}` }}
        >
          Happy?<br />Tap to share ★
        </m.div>
        {phase >= 2 && (
          <m.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} style={{ position: 'absolute', top: 20, right: 20, fontSize: 28 }}>📱</m.div>
        )}
        {phase >= 3 && (
          <m.div initial={{ y: 60, opacity: 0 }} animate={{ y: -20, opacity: [0, 1, 0] }} transition={{ duration: 1.2 }} style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', fontSize: 32, color: GOLD }}>
            ★★★★★
          </m.div>
        )}
      </div>
      <m.p initial={{ opacity: 0 }} animate={phase >= 3 ? { opacity: 1 } : {}} style={{ marginTop: 32, fontSize: 14, color: G.textMuted }}>No waiter awkwardness. Google-compliant — no bribe.</m.p>
    </section>
  );
}

/** Act 4 — Stars climb */
function SceneStarsClimb() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const reviews = useCountUp(186, inView, 2000);
  const [rating, setRating] = useState(4.2);

  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => setRating(4.8), 1000);
    return () => clearTimeout(t);
  }, [inView]);

  return (
    <section ref={ref} style={{ minHeight: '80vh', background: INK, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 48 }}>
      <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: GOLD, marginBottom: 20 }}>90 DAYS</p>
      <m.div style={{ fontSize: 'clamp(56px, 14vw, 100px)', fontWeight: 800, color: '#fff', fontFamily: FONT_DISPLAY, letterSpacing: '-0.04em' }}>
        {rating.toFixed(1)} <span style={{ fontSize: '0.5em', color: GOLD }}>★</span>
      </m.div>
      <div style={{ fontSize: 32, fontWeight: 800, color: G.green, marginTop: 16 }}>{reviews} reviews</div>
      <m.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 1.5 }} style={{ marginTop: 24, fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>3× growth · Maps trusts velocity</m.p>
    </section>
  );
}

const RIVALS = [
  { name: 'Sunday', kill: '€250 terminal per table' },
  { name: 'Birdeye', kill: '€299/mo · needs POS' },
  { name: 'Broadly', kill: 'Generic · not restaurant' },
  { name: 'Free QR', kill: '4 taps · most quit' },
];

function SceneRivals() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <section ref={ref} style={{ padding: '64px 20px', background: '#fff' }}>
      <h2 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 800, textAlign: 'center', marginBottom: 36, fontFamily: FONT_DISPLAY }}>
        Needs nothing you don&apos;t have.
      </h2>
      <div style={{ maxWidth: 560, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {RIVALS.map((r, i) => (
          <m.div key={r.name} initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: i * 0.1 }} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 18px', borderRadius: 12, background: '#fafafa', border: `1px solid ${G.border}` }}>
            <span style={{ fontWeight: 800, textDecoration: 'line-through', color: '#999', minWidth: 90 }}>{r.name}</span>
            <span style={{ fontSize: 13, color: G.textMuted }}>{r.kill}</span>
          </m.div>
        ))}
        <m.div initial={{ opacity: 0, scale: 0.95 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.5 }} style={{ marginTop: 16, padding: 20, borderRadius: 14, background: G.green, color: '#fff', textAlign: 'center', fontWeight: 700 }}>
          H360 · A QR on the table. That&apos;s it.
        </m.div>
      </div>
    </section>
  );
}

/** Act 6 — Bad review alert */
function SceneAlertReply() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => setShow(true), 500);
    return () => clearTimeout(t);
  }, [inView]);

  return (
    <section ref={ref} style={{ minHeight: '70vh', background: G.beige, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 48 }}>
      <AnimatePresence>
        {show && (
          <m.div initial={{ opacity: 0, y: 60, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ type: 'spring' }} style={{ width: 'min(100%, 360px)', background: '#fff', borderRadius: 20, boxShadow: '0 24px 64px rgba(0,0,0,0.12)', overflow: 'hidden' }}>
            <div style={{ background: '#ef4444', padding: '12px 16px', color: '#fff', fontSize: 13, fontWeight: 700 }}>⚠ New 1★ review — reply first</div>
            <div style={{ padding: 16 }}>
              <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} style={{ background: '#f0fdf4', borderRadius: 12, padding: 14, fontSize: 12, lineHeight: 1.55, color: '#111', border: `1px solid ${G.green}44` }}>
                <strong>AI draft (your tone):</strong><br />
                Thanks for the honest feedback — we&apos;d love to make this right. Please call us directly.
              </m.div>
              <m.button type="button" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} style={{ marginTop: 12, width: '100%', padding: 12, borderRadius: 10, border: 'none', background: G.green, color: '#fff', fontWeight: 700, fontSize: 13, cursor: 'default' }}>
                Approve reply →
              </m.button>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function SceneCta() {
  return (
    <section style={{ padding: '56px 24px 72px', textAlign: 'center', background: G.bg }}>
      <p style={{ fontSize: 'clamp(22px, 4vw, 30px)', fontWeight: 800, marginBottom: 24, fontFamily: FONT_DISPLAY, letterSpacing: '-0.03em' }}>More reviews. More trust. More covers.</p>
      <Link href={H360_AUDIT} style={{ display: 'inline-flex', padding: '16px 32px', background: G.green, color: '#f0f9f4', borderRadius: 99, fontSize: 16, fontWeight: 700, textDecoration: 'none' }}>
        Get ARC audit →
      </Link>
      <div style={{ marginTop: 28, display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
        <Link href="/h360/google-business-profile-restaurant-malta" style={{ fontSize: 12, fontWeight: 600, padding: '8px 14px', borderRadius: 99, border: `1px solid ${G.border}`, color: G.text, textDecoration: 'none' }}>Google Visibility</Link>
        <Link href="/h360#h360-products" style={{ fontSize: 12, fontWeight: 600, padding: '8px 14px', borderRadius: 99, border: `1px solid ${G.border}`, color: G.text, textDecoration: 'none' }}>All H360</Link>
      </div>
    </section>
  );
}

export default function GoogleReviewsExperience() {
  return (
    <H360ProductShell eyebrow="H360 · Smart Google Reviews" h1="Get more Google reviews for your restaurant in Malta." live ctaName="Smart Reviews" themeAccent={GOLD} cinema>
      <SeoVault />
      <SceneStarGap />
      <SceneTapRace />
      <SceneTableMoment />
      <SceneStarsClimb />
      <SceneRivals />
      <SceneAlertReply />
      <SceneCta />
    </H360ProductShell>
  );
}
