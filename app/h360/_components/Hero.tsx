'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { openH360Arc } from './openH360Arc';

const G = {
  bg: '#ffffff',
  text: '#111111',
  textMuted: '#6b7280',
  green: '#094413',
  greenMid: '#1a6b30',
  greenLt: '#c2edce',
  border: '#e5e7eb',
  star: '#eab308',
  red: '#ef4444',
  orange: '#f97316',
};

/** One headline line + one phone screen — same index, timer-only (no scroll hijack) */
const SLIDES = [
  { word: 'Take direct orders at the table.', label: 'Direct orders' },
  { word: 'Rank on Google Maps in Malta.', label: 'Google Maps' },
  { word: 'Fill tables on quiet nights.', label: 'Quiet night radar' },
  { word: 'Turn guests into regulars.', label: 'Loyalty' },
] as const;

const CYCLE_MS = 4500;
const FADE_MS = 320;

function Screen0() {
  return (
    <div style={{ padding: '12px 14px', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
        <div style={{ width: 32, height: 32, borderRadius: 8, background: G.green, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <span style={{ color: '#fff', fontSize: 11, fontWeight: 900 }}>H3</span>
        </div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: G.text }}>Direct Order — Table 7</div>
          <div style={{ fontSize: 11, color: G.textMuted }}>Straight to your kitchen</div>
        </div>
      </div>
      <div style={{ background: '#f9fafb', borderRadius: 10, border: `1px solid ${G.border}`, overflow: 'hidden', marginBottom: 10 }}>
        {[['Braġjoli ×2', '€28.00'], ['Lampuki Pie', '€16.50'], ['Kinnie ×3', '€7.50']].map(([item, price], i) => (
          <div key={item} style={{ display: 'flex', justifyContent: 'space-between', padding: '9px 12px', borderBottom: i < 2 ? `1px solid ${G.border}` : 'none', fontSize: 13 }}>
            <span style={{ color: G.text }}>{item}</span>
            <span style={{ fontWeight: 600, color: G.text }}>{price}</span>
          </div>
        ))}
      </div>
      <div style={{ background: G.text, color: '#fff', borderRadius: 10, padding: 12, textAlign: 'center', fontSize: 14, fontWeight: 700 }}>
        Order sent to kitchen ✓
      </div>
    </div>
  );
}

function Screen1() {
  return (
    <div style={{ padding: '12px 14px' }}>
      <p style={{ fontSize: 13, fontWeight: 700, color: G.text, marginBottom: 10 }}>Who&apos;s ranking above you on Google</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 5, marginBottom: 12 }}>
        {[
          { rank: '1st', name: 'Trattoria — Sliema', stars: 4.8 },
          { rank: '2nd', name: 'Steakhouse — St Julian\u2019s', stars: 4.0 },
          { rank: '3rd', name: 'Bistro — Valletta', stars: 3.1 },
        ].map((r) => (
          <div key={r.rank} style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '8px 10px', borderRadius: 9, background: '#f9fafb', border: `1px solid ${G.border}` }}>
            <span style={{ fontSize: 10, color: G.textMuted, width: 24, fontWeight: 600 }}>{r.rank}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: G.text }}>{r.name}</div>
              <div style={{ fontSize: 11, color: G.star }}>{'★'.repeat(Math.round(r.stars))}</div>
            </div>
          </div>
        ))}
        <div style={{ textAlign: 'center', color: G.textMuted, fontSize: 14, letterSpacing: 3, padding: '2px 0' }}>···</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '8px 10px', borderRadius: 9, background: '#fffbeb', border: '1.5px solid #fde68a' }}>
          <span style={{ fontSize: 10, color: G.textMuted, width: 24, fontWeight: 600 }}>10th</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: G.text }}>Your restaurant</div>
            <div style={{ fontSize: 11, color: G.star }}>★★★☆</div>
          </div>
        </div>
      </div>
      <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 10, padding: '10px 12px' }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: G.red }}>H360 fixes Maps ranking</div>
      </div>
    </div>
  );
}

function Screen2() {
  return (
    <div style={{ padding: '12px 14px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
        <div style={{ width: 34, height: 34, borderRadius: 9, background: `linear-gradient(135deg,${G.orange},${G.red})`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /></svg>
        </div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: G.text }}>Quiet night radar</div>
          <div style={{ fontSize: 11, color: G.textMuted }}>Covers forecast · ARC AI</div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '12px 0', background: '#fafafa', borderRadius: 12, marginBottom: 12 }}>
        <div style={{ fontSize: 36, fontWeight: 800, color: G.green }}>42</div>
        <div style={{ fontSize: 12, color: G.textMuted }}>covers expected Friday</div>
        <div style={{ fontSize: 11, color: G.green, marginTop: 6, fontWeight: 600 }}>↑ 18% vs last week</div>
      </div>
      <div style={{ background: G.text, color: '#fff', borderRadius: 10, padding: 12, textAlign: 'center', fontSize: 13, fontWeight: 700 }}>
        Fill tables — act now
      </div>
    </div>
  );
}

function Screen3() {
  return (
    <div style={{ padding: '12px 14px' }}>
      <p style={{ fontSize: 13, fontWeight: 700, color: G.text, marginBottom: 10 }}>Guests coming back</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 10 }}>
        {['Stamp saved to wallet', 'WhatsApp win-back sent', 'Table booked for Friday'].map((item) => (
          <div key={item} style={{ display: 'flex', gap: 8, padding: '8px 10px', borderRadius: 9, background: '#f0fdf4', border: '1px solid #bbf7d0' }}>
            <span style={{ color: G.green, fontSize: 14 }}>✓</span>
            <span style={{ fontSize: 12, fontWeight: 600, color: G.text }}>{item}</span>
          </div>
        ))}
      </div>
      <div style={{ background: G.text, color: '#fff', borderRadius: 10, padding: 12, textAlign: 'center', fontSize: 13, fontWeight: 700 }}>
        Regulars ↑ this month
      </div>
    </div>
  );
}

const SCREENS = [<Screen0 key="0" />, <Screen1 key="1" />, <Screen2 key="2" />, <Screen3 key="3" />];

export default function H360Hero() {
  const [slideIdx, setSlideIdx] = useState(1);
  const [visible, setVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const pauseUntil = useRef(0);
  const fadeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const desktopSearchRef = useRef<HTMLInputElement>(null);
  const mobileSearchRef = useRef<HTMLInputElement>(null);

  const runArcAudit = () => {
    const name = (desktopSearchRef.current?.value || mobileSearchRef.current?.value || '').trim();
    openH360Arc(name || undefined);
  };

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const goTo = useCallback((idx: number, manual = false) => {
    if (fadeTimer.current) clearTimeout(fadeTimer.current);
    if (manual) pauseUntil.current = Date.now() + 12000;
    setVisible(false);
    fadeTimer.current = setTimeout(() => {
      setSlideIdx(idx % SLIDES.length);
      setVisible(true);
    }, FADE_MS);
  }, []);

  /** Timer only — no scroll-linked changes */
  useEffect(() => {
    const id = setInterval(() => {
      if (Date.now() < pauseUntil.current) return;
      setVisible(false);
      if (fadeTimer.current) clearTimeout(fadeTimer.current);
      fadeTimer.current = setTimeout(() => {
        setSlideIdx((i) => (i + 1) % SLIDES.length);
        setVisible(true);
      }, FADE_MS);
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, []);

  useEffect(() => () => {
    if (fadeTimer.current) clearTimeout(fadeTimer.current);
  }, []);

  const phoneW = isMobile ? 'min(280px, 88vw)' : 272;
  const phoneH = isMobile ? 400 : 440;

  return (
    <div style={{ fontFamily: 'var(--font-inter), system-ui, -apple-system, Arial, sans-serif', background: G.bg, color: G.text, overflowX: 'hidden' }}>
      <section style={{ minHeight: isMobile ? 'auto' : 'min(100vh, 920px)', paddingBottom: isMobile ? 88 : 48 }}>
        {/* Copy — minimal */}
        <div
          style={{
            padding: isMobile ? '20px 20px 12px' : '28px 40px 16px',
            textAlign: isMobile ? 'left' : 'center',
            background: G.bg,
            scrollMarginTop: 24,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10, justifyContent: isMobile ? 'flex-start' : 'center', fontSize: 11, color: G.textMuted }}>
            <span style={{ color: G.star, letterSpacing: 0.5 }}>★★★★☆</span>
            <span style={{ fontWeight: 700, color: G.text }}>4.8</span>
            <span style={{ color: G.textMuted }}>client satisfaction</span>
            <span>·</span>
            <a href="https://oarcdigital.com" style={{ color: G.green, fontWeight: 600, textDecoration: 'none' }}>OARC Digital</a>
          </div>

          <h1
            style={{
              fontSize: isMobile ? 'clamp(30px, 8vw, 44px)' : 'clamp(44px, 5.5vw, 72px)',
              fontWeight: 800,
              lineHeight: 1.06,
              letterSpacing: '-0.04em',
              color: G.text,
              margin: '0 0 12px',
              maxWidth: 720,
              marginLeft: isMobile ? 0 : 'auto',
              marginRight: isMobile ? 0 : 'auto',
            }}
          >
            Malta restaurants on the road to #1.{' '}
            <span
              style={{
                display: 'inline-block',
                transition: 'opacity 0.28s ease, transform 0.28s ease',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(6px)',
                color: G.green,
              }}
            >
              {SLIDES[slideIdx].word}
            </span>
          </h1>

          <p
            style={{
              fontSize: isMobile ? 15 : 17,
              color: G.textMuted,
              lineHeight: 1.55,
              margin: '0 0 16px',
              maxWidth: 560,
              marginLeft: isMobile ? 0 : 'auto',
              marginRight: isMobile ? 0 : 'auto',
              textAlign: isMobile ? 'left' : 'center',
            }}
          >
            Free ARC audit — name your restaurant and see what&apos;s leaking on Maps, reviews, and margin.
          </p>

          {!isMobile && (
            <>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: G.bg,
                  border: `1.5px solid ${G.border}`,
                  borderRadius: 14,
                  padding: '6px 6px 6px 16px',
                  boxShadow: '0 2px 20px rgba(0,0,0,0.07)',
                  gap: 8,
                  width: '100%',
                  maxWidth: 460,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={G.textMuted} strokeWidth="2.5"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
                <input ref={desktopSearchRef} type="text" placeholder="Your restaurant name" style={{ flex: 1, border: 'none', outline: 'none', fontSize: 15, color: G.text, background: 'transparent', fontFamily: 'inherit' }} data-testid="input-h360-hero-search" onKeyDown={(e) => { if (e.key === 'Enter') runArcAudit(); }} />
                <button type="button" onClick={runArcAudit} style={{ padding: '9px 16px', background: G.green, color: '#f0f9f4', border: 'none', borderRadius: 10, fontSize: 14, fontWeight: 600, whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: 5, cursor: 'pointer', fontFamily: 'inherit' }} data-testid="button-h360-hero-cta">
                  Get my AI report
                </button>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginTop: 8, fontSize: 12, color: G.textMuted }}>
                Powered by ARC AI · Instant restaurant audit
              </div>
            </>
          )}
        </div>

        {/* Phone zone — centered, no sticky scroll trap */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: isMobile ? 520 : 560,
            margin: isMobile ? '0 16px' : '0 auto',
            maxWidth: 960,
            padding: isMobile ? '0 0 24px' : '0 24px 32px',
          }}
        >
          {/* Green slab — centered behind phone */}
          <div
            aria-hidden
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: isMobile ? '100%' : 'min(92%, 720px)',
              height: isMobile ? '88%' : '85%',
              borderRadius: isMobile ? 20 : 24,
              background: 'linear-gradient(108deg,#094413 0%,#166b2e 28%,#3db85e 65%,#c2edce 100%)',
              boxShadow: '0 24px 64px rgba(9,68,19,0.18)',
            }}
          />

          {/* Phone */}
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              width: phoneW,
              background: '#0d0d0d',
              borderRadius: 44,
              padding: '10px 8px',
              boxShadow: '0 36px 88px rgba(0,0,0,0.28)',
              transform: isMobile ? 'scale(1.02)' : 'scale(1.08)',
            }}
          >
            <div style={{ width: 100, height: 28, background: '#000', borderRadius: 20, margin: '0 auto', position: 'relative', zIndex: 5 }} />
            <div style={{ borderRadius: 32, overflow: 'hidden', background: G.bg, height: phoneH, marginTop: -1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 14px 4px', fontSize: 12, fontWeight: 700, color: G.text }}>
                <span>9:41</span>
              </div>
              <div
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(8px)',
                  transition: 'opacity 0.28s ease, transform 0.28s ease',
                }}
              >
                {SCREENS[slideIdx]}
              </div>
            </div>
          </div>

          {/* Slide dots — tap to pick, timer pauses briefly */}
          <div
            role="tablist"
            aria-label="Hero demo slides"
            style={{ position: 'relative', zIndex: 3, display: 'flex', gap: 8, marginTop: 20, alignItems: 'center' }}
          >
            {SLIDES.map((s, i) => (
              <button
                key={s.label}
                type="button"
                role="tab"
                aria-selected={i === slideIdx}
                aria-label={s.label}
                onClick={() => goTo(i, true)}
                style={{
                  width: i === slideIdx ? 28 : 8,
                  height: 8,
                  borderRadius: 99,
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  background: i === slideIdx ? G.green : 'rgba(9,68,19,0.25)',
                  transition: 'width 0.25s ease, background 0.25s ease',
                }}
              />
            ))}
          </div>
          <p style={{ position: 'relative', zIndex: 3, marginTop: 10, fontSize: 11, fontWeight: 600, color: G.textMuted, letterSpacing: '0.04em' }}>
            {SLIDES[slideIdx].label}
          </p>
        </div>
      </section>

      {isMobile && (
        <div
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 200,
            background: G.bg,
            borderTop: `1px solid ${G.border}`,
            padding: '10px 16px env(safe-area-inset-bottom, 16px)',
            boxShadow: '0 -4px 20px rgba(0,0,0,0.07)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <input ref={mobileSearchRef} type="text" placeholder="Your restaurant name" style={{ flex: 1, border: `1.5px solid ${G.border}`, borderRadius: 10, padding: '10px 13px', fontSize: 14, color: G.text, background: G.bg, fontFamily: 'inherit', outline: 'none' }} data-testid="input-h360-mobile-search" onKeyDown={(e) => { if (e.key === 'Enter') runArcAudit(); }} />
            <button type="button" onClick={runArcAudit} style={{ padding: '10px 14px', borderRadius: 10, background: G.green, color: '#f0f9f4', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 600, fontFamily: 'inherit', whiteSpace: 'nowrap' }} data-testid="button-h360-mobile-cta">
              Get my AI report
            </button>
          </div>
          <p style={{ fontSize: 11, color: G.textMuted, textAlign: 'center', marginTop: 8, marginBottom: 0 }}>
            Powered by ARC AI · Instant restaurant audit
          </p>
        </div>
      )}
    </div>
  );
}
