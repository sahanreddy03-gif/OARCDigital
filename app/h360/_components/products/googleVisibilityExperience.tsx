/**
 * Google Visibility — bespoke experience (Product #1 of 18)
 * Storyboard: invisible → engine → proof → why us → owner WhatsApp
 * SEO copy in SeoVault only.
 */
'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { m, useInView, AnimatePresence } from 'framer-motion';
import H360ProductShell from './H360ProductShell';
import { GOOGLE_PROFILE_META } from './googleProfileProductContent';
import { G, FONT_DISPLAY } from '../tokens';
import { H360_AUDIT } from '../h360Site';

const SKY = '#38bdf8';
const EMERALD = '#4ade80';
const INK = '#020617';

function SeoVault() {
  const f = GOOGLE_PROFILE_META.faqs;
  return (
    <div style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)' }} aria-hidden={false}>
      <h1>{GOOGLE_PROFILE_META.serviceName}</h1>
      {f.map((x) => (
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

/** Scene 1 — Search typing, rank climb */
function SceneSearchRank() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });
  const [typed, setTyped] = useState('');
  const query = 'restaurant near me malta';
  const [rank, setRank] = useState(11);

  useEffect(() => {
    if (!inView) return;
    let i = 0;
    const t1 = setInterval(() => {
      i += 1;
      setTyped(query.slice(0, i));
      if (i >= query.length) clearInterval(t1);
    }, 55);
    const t2 = setTimeout(() => {
      const climb = setInterval(() => {
        setRank((r) => {
          if (r <= 1) {
            clearInterval(climb);
            return 1;
          }
          return r - 1;
        });
      }, 380);
    }, 1200);
    return () => {
      clearInterval(t1);
      clearTimeout(t2);
    };
  }, [inView]);

  const rows = [
    { pos: 1, name: 'Your restaurant', you: true },
    { pos: 2, name: 'Competitor A', you: false },
    { pos: 3, name: 'Competitor B', you: false },
  ];

  return (
    <section ref={ref} style={{ minHeight: '100vh', background: `linear-gradient(180deg, ${INK} 0%, #0c1a2e 100%)`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '48px 20px', position: 'relative', overflow: 'hidden' }}>
      <m.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse 70% 50% at 50% 20%, ${SKY}33 0%, transparent 60%)`, pointerEvents: 'none' }} />

      <m.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: SKY, marginBottom: 16, fontFamily: FONT_DISPLAY }}>
        GOOGLE VISIBILITY
      </m.p>
      <m.h2 initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} style={{ fontSize: 'clamp(32px, 7vw, 56px)', fontWeight: 800, color: '#fff', textAlign: 'center', letterSpacing: '-0.04em', margin: '0 0 40px', maxWidth: 640, lineHeight: 1.05, fontFamily: FONT_DISPLAY }}>
        They search.<br />
        <span style={{ color: EMERALD }}>You show up first.</span>
      </m.h2>

      <m.div initial={{ scale: 0.92, opacity: 0 }} animate={inView ? { scale: 1, opacity: 1 } : {}} transition={{ delay: 0.2, type: 'spring', stiffness: 120 }} style={{ width: 'min(100%, 400px)', background: '#fff', borderRadius: 20, overflow: 'hidden', boxShadow: `0 40px 100px rgba(0,0,0,0.5), 0 0 80px ${SKY}22`, transform: 'perspective(1200px) rotateX(4deg)' }}>
        <div style={{ padding: '14px 16px', borderBottom: '1px solid #eee', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'conic-gradient(#ea4335 0 25%, #fbbc05 25% 50%, #34a853 50% 75%, #4285f4 75% 100%)' }} />
          <span style={{ fontSize: 14, color: '#333', fontWeight: 500 }}>{typed}<m.span animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 0.8 }}>|</m.span></span>
        </div>
        {rows.map((row, i) => {
          const displayRank = row.you ? rank : row.pos + (rank > 3 ? 0 : rank - 1);
          return (
            <m.div
              key={row.name}
              layout
              animate={row.you && rank <= 3 ? { backgroundColor: '#f0fdf4' } : { backgroundColor: '#fff' }}
              style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px', borderBottom: '1px solid #f0f0f0' }}
            >
              <m.span key={displayRank} initial={{ scale: 0.6 }} animate={{ scale: 1 }} style={{ fontSize: 18, fontWeight: 800, color: row.you ? G.green : '#999', width: 28 }}>
                #{displayRank}
              </m.span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: row.you ? 700 : 500, color: '#111' }}>{row.name}</div>
                {row.you && <div style={{ fontSize: 11, color: G.green }}>★★★★★ · Open now</div>}
              </div>
              {row.you && rank === 1 && (
                <m.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring' }} style={{ width: 28, height: 28, borderRadius: '50%', background: G.green, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                </m.div>
              )}
            </m.div>
          );
        })}
      </m.div>

      <m.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 1.8 }} style={{ marginTop: 32, fontSize: 15, color: 'rgba(255,255,255,0.5)', textAlign: 'center', maxWidth: 360 }}>
        Not luck. A visibility engine.
      </m.p>
    </section>
  );
}

/** Scene 2 — Stale vs H360 (split wipe) */
function SceneStaleVsEngine() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-15%' });
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const t = setInterval(() => setPhase((p) => (p + 1) % 2), 3200);
    return () => clearInterval(t);
  }, [inView]);

  return (
    <section ref={ref} style={{ minHeight: '90vh', background: '#000', padding: '64px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, color: '#fff', textAlign: 'center', letterSpacing: '-0.03em', marginBottom: 40, fontFamily: FONT_DISPLAY }}>
        Posting photos is <span style={{ color: '#666', textDecoration: 'line-through' }}>not</span> the job.
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, maxWidth: 900, width: '100%' }}>
        <m.div animate={{ opacity: phase === 0 ? 1 : 0.35, scale: phase === 0 ? 1 : 0.96 }} style={{ borderRadius: 20, padding: 24, background: '#1a1a1a', border: '1px solid #333', filter: 'grayscale(0.8)' }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#ef4444', marginBottom: 16 }}>DIY · STALE</div>
          <div style={{ fontSize: 13, color: '#666', marginBottom: 8 }}>Last post: 8 months ago</div>
          <div style={{ fontSize: 48, fontWeight: 800, color: '#555' }}>#11</div>
          <div style={{ fontSize: 12, color: '#444', marginTop: 8 }}>Google stops showing you</div>
        </m.div>

        <m.div animate={{ opacity: phase === 1 ? 1 : 0.35, scale: phase === 1 ? 1.02 : 0.96, boxShadow: phase === 1 ? `0 0 60px ${SKY}44` : 'none' }} style={{ borderRadius: 20, padding: 24, background: `linear-gradient(145deg, #0c1a2e, #061510)`, border: `2px solid ${SKY}` }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: SKY, marginBottom: 16 }}>H360 ENGINE</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
            {['SEO', 'AEO', 'AI', 'Copy', 'GBP'].map((tag, i) => (
              <m.span key={tag} initial={{ opacity: 0, y: 8 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 * i }} style={{ fontSize: 10, fontWeight: 700, padding: '5px 10px', borderRadius: 99, background: `${SKY}22`, color: SKY }}>
                {tag}
              </m.span>
            ))}
          </div>
          <div style={{ fontSize: 48, fontWeight: 800, color: EMERALD }}>#1</div>
          <div style={{ fontSize: 12, color: SKY, marginTop: 8 }}>Weekly motion · Malta operators</div>
        </m.div>
      </div>
    </section>
  );
}

/** Scene 3 — Engine pipeline (orbital auto-play) */
const ENGINE_STEPS = [
  { id: 'seo', label: 'Local SEO', visual: 'maps' },
  { id: 'aeo', label: 'AEO', visual: 'ai-box' },
  { id: 'ai', label: 'AI search', visual: 'chat' },
  { id: 'copy', label: 'Copywriter', visual: 'keyword' },
  { id: 'gbp', label: 'GBP live', visual: 'post' },
] as const;

function EngineViewport({ kind }: { kind: string }) {
  if (kind === 'maps')
    return (
      <div style={{ padding: 20 }}>
        {[3, 2, 1].map((r) => (
          <div key={r} style={{ display: 'flex', gap: 10, marginBottom: 10, alignItems: 'center' }}>
            <span style={{ fontWeight: 800, color: r === 1 ? G.green : '#ccc' }}>#{r}</span>
            <div style={{ flex: 1, height: 8, borderRadius: 99, background: '#eee', overflow: 'hidden' }}>
              <m.div initial={{ width: 0 }} animate={{ width: `${100 - r * 20}%` }} style={{ height: '100%', background: r === 1 ? G.green : '#cbd5e1' }} />
            </div>
          </div>
        ))}
      </div>
    );
  if (kind === 'ai-box')
    return (
      <div style={{ padding: 20, background: '#f0f9ff', margin: 16, borderRadius: 12 }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: '#0369a1' }}>AI OVERVIEW</div>
        <p style={{ fontSize: 13, margin: '8px 0 0', color: '#111' }}>Best seafood Sliema → <strong>your restaurant</strong></p>
      </div>
    );
  if (kind === 'chat')
    return (
      <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ alignSelf: 'flex-end', background: G.green, color: '#fff', padding: '8px 12px', borderRadius: 12, fontSize: 12 }}>Best pasta Valletta?</div>
        <div style={{ background: '#f4f4f5', padding: '8px 12px', borderRadius: 12, fontSize: 12 }}>Try <strong>your restaurant</strong> — 4.8★</div>
      </div>
    );
  if (kind === 'keyword')
    return (
      <div style={{ padding: 20 }}>
        <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 8 }}>lampuki season malta</div>
        <m.div animate={{ width: ['30%', '92%'] }} transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }} style={{ height: 8, background: G.green, borderRadius: 99 }} />
      </div>
    );
  return (
    <div style={{ padding: 20, fontSize: 13, fontWeight: 600, color: G.green }}>
      ✓ Post ready — approve in 30 sec
    </div>
  );
}

function SceneEngine() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const t = setInterval(() => setStep((s) => (s + 1) % ENGINE_STEPS.length), 2800);
    return () => clearInterval(t);
  }, [inView]);

  const current = ENGINE_STEPS[step];

  return (
    <section ref={ref} style={{ minHeight: '100vh', background: G.beige, padding: '72px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', color: G.green, marginBottom: 12 }}>THE ENGINE</p>
      <h2 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 800, textAlign: 'center', letterSpacing: '-0.04em', marginBottom: 48, fontFamily: FONT_DISPLAY, maxWidth: 520 }}>
        Five layers.<br />One outcome.
      </h2>

      <div style={{ display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
        {ENGINE_STEPS.map((s, i) => (
          <m.button
            key={s.id}
            type="button"
            onClick={() => setStep(i)}
            animate={{ scale: i === step ? 1.08 : 1, backgroundColor: i === step ? G.green : '#fff' }}
            style={{ border: `2px solid ${i === step ? G.green : G.border}`, borderRadius: 99, padding: '10px 18px', fontSize: 12, fontWeight: 700, cursor: 'pointer', color: i === step ? '#fff' : G.text, fontFamily: 'inherit' }}
          >
            {s.label}
          </m.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <m.div
          key={current.id}
          initial={{ opacity: 0, rotateY: -12, x: 40 }}
          animate={{ opacity: 1, rotateY: 0, x: 0 }}
          exit={{ opacity: 0, rotateY: 12, x: -40 }}
          transition={{ duration: 0.45 }}
          style={{ width: 'min(100%, 360px)', background: '#fff', borderRadius: 24, overflow: 'hidden', boxShadow: '0 32px 80px rgba(0,0,0,0.12)', transformStyle: 'preserve-3d', perspective: 1000 }}
        >
          <div style={{ padding: '16px 20px', borderBottom: `1px solid ${G.border}`, fontWeight: 800, fontSize: 16 }}>{current.label}</div>
          <EngineViewport kind={current.visual} />
        </m.div>
      </AnimatePresence>
    </section>
  );
}

/** Scene 4 — 847 → 37 hero metric */
function SceneProofNumber() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const searches = useCountUp(847, inView);
  const calls = useCountUp(37, inView, 1800);

  return (
    <section ref={ref} style={{ minHeight: '85vh', background: INK, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 48, position: 'relative', overflow: 'hidden' }}>
      <m.div animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 4, repeat: Infinity }} style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: `radial-gradient(circle, ${EMERALD}33 0%, transparent 70%)` }} />
      <p style={{ fontSize: 12, color: SKY, fontWeight: 700, letterSpacing: '0.12em', marginBottom: 24 }}>THE ONE NUMBER OWNERS READ</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(16px, 4vw, 40px)', flexWrap: 'wrap', justifyContent: 'center' }}>
        <m.div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 'clamp(48px, 12vw, 96px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.04em', fontFamily: FONT_DISPLAY }}>{searches}</div>
          <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)' }}>searches</div>
        </m.div>
        <m.div animate={{ x: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.2 }} style={{ fontSize: 48, color: EMERALD }}>→</m.div>
        <m.div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 'clamp(48px, 12vw, 96px)', fontWeight: 800, color: EMERALD, letterSpacing: '-0.04em', fontFamily: FONT_DISPLAY }}>{calls}</div>
          <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)' }}>walk-ins</div>
        </m.div>
      </div>
      <m.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 1.2 }} style={{ marginTop: 40, fontSize: 15, color: 'rgba(255,255,255,0.55)', textAlign: 'center' }}>
        Weekly WhatsApp. Not a 20-page PDF.
      </m.p>
    </section>
  );
}

/** Scene 5 — Competitors fall */
const RIVALS = [
  { name: 'Yext', kill: '€500+/mo · listings only' },
  { name: 'BrightLocal', kill: 'PDF report · you fix it' },
  { name: 'SEO agency', kill: '€1,500/mo · 6-month deck' },
  { name: 'DIY', kill: 'Set & forget · goes stale' },
];

function SceneRivals() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} style={{ padding: '72px 20px', background: '#fff' }}>
      <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, textAlign: 'center', letterSpacing: '-0.03em', marginBottom: 40, fontFamily: FONT_DISPLAY }}>
        Built for a <span style={{ color: G.green }}>40-cover Malta</span> restaurant.
      </h2>
      <div style={{ maxWidth: 700, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {RIVALS.map((r, i) => (
          <m.div
            key={r.name}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.12 }}
            style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '18px 20px', borderRadius: 14, background: '#fafafa', border: `1px solid ${G.border}`, position: 'relative', overflow: 'hidden' }}
          >
            <m.div initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}} transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }} style={{ position: 'absolute', left: 0, right: 0, top: '50%', height: 2, background: '#ef4444', transformOrigin: 'left', opacity: 0.5 }} />
            <span style={{ fontSize: 16, fontWeight: 800, color: '#111', textDecoration: 'line-through', textDecorationColor: '#ef4444', minWidth: 120 }}>{r.name}</span>
            <span style={{ fontSize: 13, color: G.textMuted }}>{r.kill}</span>
            <m.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.8 + i * 0.1 }} style={{ marginLeft: 'auto', color: '#ef4444', fontSize: 18 }}>✕</m.span>
          </m.div>
        ))}
        <m.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.9 }} style={{ marginTop: 20, padding: 24, borderRadius: 16, background: G.green, color: '#fff', textAlign: 'center' }}>
          <div style={{ fontSize: 18, fontWeight: 800 }}>H360 Google Visibility</div>
          <div style={{ fontSize: 13, opacity: 0.9, marginTop: 6 }}>Malta operators · SEO + AEO + AI · you approve in 30 sec</div>
        </m.div>
      </div>
    </section>
  );
}

/** Scene 6 — WhatsApp pop */
function SceneWhatsApp() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-20%' });
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => setShow(true), 400);
    return () => clearTimeout(t);
  }, [inView]);

  return (
    <section ref={ref} style={{ minHeight: '70vh', background: `linear-gradient(180deg, #ecfdf5 0%, ${G.beige} 100%)`, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 48 }}>
      <AnimatePresence>
        {show && (
          <m.div
            initial={{ opacity: 0, y: 80, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            style={{ width: 'min(100%, 340px)', background: '#fff', borderRadius: 20, boxShadow: '0 24px 80px rgba(0,0,0,0.15)', overflow: 'hidden' }}
          >
            <div style={{ background: '#25D366', padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 900, color: G.green }}>ARC</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>H360 · This week</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.8)' }}>Google Visibility</div>
              </div>
            </div>
            <div style={{ padding: 18 }}>
              <m.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} style={{ background: '#f0fdf4', borderRadius: 12, padding: 14, fontSize: 13, lineHeight: 1.55, color: '#111' }}>
                <strong>Profile score: 85/100</strong>
                <br />
                847 searches → 37 calls
                <br />
                <span style={{ color: G.green }}>Next: upload menu photos</span>
              </m.div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function SceneCta() {
  return (
    <section style={{ padding: '56px 24px 80px', textAlign: 'center', background: G.bg }}>
      <m.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 24, fontFamily: FONT_DISPLAY }}>See your Maps gap — free.</p>
        <Link href={H360_AUDIT} style={{ display: 'inline-flex', padding: '16px 32px', background: G.green, color: '#f0f9f4', borderRadius: 99, fontSize: 16, fontWeight: 700, textDecoration: 'none', boxShadow: '0 12px 40px rgba(9,68,19,0.3)' }}>
          Get ARC audit →
        </Link>
      </m.div>
      <div style={{ marginTop: 32, display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
        {[
          { label: 'Smart Reviews', href: '/h360/get-more-google-reviews-restaurant-malta' },
          { label: 'Website', href: '/h360/restaurant-website-malta' },
          { label: 'All H360', href: '/h360#h360-products' },
        ].map((l) => (
          <Link key={l.href} href={l.href} style={{ fontSize: 12, fontWeight: 600, padding: '8px 14px', borderRadius: 99, border: `1px solid ${G.border}`, color: G.text, textDecoration: 'none' }}>
            {l.label}
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function GoogleVisibilityExperience() {
  return (
    <H360ProductShell eyebrow="H360 · Google Visibility" h1="Google Business Profile for restaurants in Malta." live ctaName="Google Visibility" themeAccent={SKY} cinema>
      <SeoVault />
      <SceneSearchRank />
      <SceneStaleVsEngine />
      <SceneEngine />
      <SceneProofNumber />
      <SceneRivals />
      <SceneWhatsApp />
      <SceneCta />
    </H360ProductShell>
  );
}
