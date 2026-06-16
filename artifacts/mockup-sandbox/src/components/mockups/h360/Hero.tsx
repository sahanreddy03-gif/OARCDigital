import { useState, useEffect, useRef } from 'react';

/* ─── Design tokens (Owner.com exact) ───────────────────────────────────── */
const G = {
  bg:        '#ffffff',
  text:      '#1a1a1a',
  textMuted: '#6b7280',
  textLight: '#9ca3af',
  green:     '#094413',
  greenMid:  '#1a6b30',
  greenLt:   '#c2edce',
  greenPale: '#edf7f0',
  border:    '#e5e7eb',
  pill:      '#f4f4f5',
  star:      '#eab308',
  red:       '#ef4444',
  orange:    '#f97316',
};

/* ─── Cycling headline words ─────────────────────────────────────────────── */
const WORDS = [
  'drive repeat orders.',
  'win online.',
  'grow first-party sales.',
  'grow online discovery.',
];

/* ─── Phone screen — single long scrollable content ─────────────────────── */
function PhoneContent() {
  return (
    <div style={{ padding: '14px 14px 24px', display: 'flex', flexDirection: 'column', gap: 0 }}>

      {/* ── Screen 1: Who's beating you ── */}
      <div style={{ marginBottom: 20 }}>
        <p style={{ fontSize: 13, fontWeight: 700, color: G.text, marginBottom: 10 }}>Who's beating you on Google</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {[
            { rank: '1st', name: 'Competitor 1', stars: 4.8, score: '39/40', green: true },
            { rank: '2nd', name: 'Competitor 2', stars: 4.0, score: '39/40', green: true },
            { rank: '3rd', name: 'Competitor 3', stars: 3.1, score: '39/40', green: true },
          ].map(r => (
            <div key={r.rank} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 10px', borderRadius: 10, background: '#f9fafb', border: `1px solid ${G.border}` }}>
              <span style={{ fontSize: 10, color: G.textMuted, width: 24, fontWeight: 600 }}>{r.rank}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: G.text }}>{r.name}</div>
                <div style={{ fontSize: 11, color: G.star }}>{'★'.repeat(Math.round(r.stars))} <span style={{ color: G.textMuted }}>{r.stars}</span></div>
              </div>
              <span style={{ fontSize: 12, fontWeight: 700, color: G.green }}>{r.score}</span>
            </div>
          ))}
          <div style={{ textAlign: 'center', color: G.textMuted, fontSize: 16, letterSpacing: 3, padding: '2px 0' }}>···</div>
          {/* Your restaurant */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 10px', borderRadius: 10, background: '#fffbeb', border: '1.5px solid #fde68a' }}>
            <span style={{ fontSize: 10, color: G.textMuted, width: 24, fontWeight: 600 }}>10th</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: G.text }}>Your restaurant</div>
              <div style={{ fontSize: 11, color: G.star }}>★★★★★ <span style={{ color: G.textMuted }}>4.9</span></div>
            </div>
            <span style={{ fontSize: 12, fontWeight: 700, color: G.orange }}>39/40</span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: G.border, margin: '0 -14px 20px' }} />

      {/* ── Screen 2: Issues list ── */}
      <div style={{ marginBottom: 20 }}>
        <p style={{ fontSize: 13, fontWeight: 700, color: G.text, marginBottom: 4 }}>You're losing €450 a month in sales until you fix these issues:</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 10 }}>
          {[
            { title: 'Not ranking in 3 nearby areas', desc: 'Missing keywords to rank nearby for terms competitors are winning with.' },
            { title: 'Title missing primary keyword', desc: 'Including "Pizza in Malta" will increase Google rankings.' },
            { title: '2 images missing alt tags', desc: 'Adding alt tags to all images will boost visibility on Google Maps.' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: 8, padding: '8px 10px', borderRadius: 10, background: '#f9fafb', border: `1px solid ${G.border}` }}>
              <div style={{ width: 20, height: 20, borderRadius: 4, background: '#fef2f2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill={G.red}><path d="M12 2L1 21h22L12 2zm0 3.5L20.5 19h-17L12 5.5zM11 10v4h2v-4h-2zm0 6v2h2v-2h-2z"/></svg>
              </div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 600, color: G.text }}>{item.title}</div>
                <div style={{ fontSize: 11, color: G.textMuted, lineHeight: 1.4, marginTop: 2 }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 11, color: G.textMuted, textAlign: 'center', marginTop: 10 }}>Improve your score to drive more sales</p>
        <div style={{ background: G.text, color: '#fff', borderRadius: 10, padding: '11px', textAlign: 'center', fontSize: 13, fontWeight: 600, marginTop: 8, cursor: 'pointer' }}>
          Fix it now with AI
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: G.border, margin: '0 -14px 20px' }} />

      {/* ── Screen 3: Health score gauge ── */}
      <div style={{ marginBottom: 20 }}>
        {/* Restaurant header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg, #f97316, #ef4444)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>🍕</div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: G.text }}>Your restaurant</div>
            <div style={{ fontSize: 11, color: G.textMuted }}>Malta, MT</div>
          </div>
        </div>

        {/* Gauge */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px 0 12px', background: '#fafafa', borderRadius: 12, marginBottom: 12 }}>
          <svg width="110" height="60" viewBox="0 0 110 60">
            <path d="M 10 55 A 45 45 0 0 1 100 55" stroke="#e5e7eb" strokeWidth="8" fill="none" strokeLinecap="round"/>
            <path d="M 10 55 A 45 45 0 0 1 100 55" stroke="url(#gaugeGrad)" strokeWidth="8" fill="none" strokeLinecap="round" strokeDasharray="141" strokeDashoffset="92"/>
            <defs>
              <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={G.red}/>
                <stop offset="100%" stopColor={G.orange}/>
              </linearGradient>
            </defs>
            <text x="55" y="52" textAnchor="middle" fontSize="22" fontWeight="800" fill={G.text}>36</text>
            <text x="55" y="62" textAnchor="middle" fontSize="8" fill={G.textMuted}>/ 100</text>
          </svg>
          <div style={{ fontSize: 13, fontWeight: 700, color: G.orange, marginTop: -2 }}>Website health</div>
          <div style={{ fontSize: 12, color: G.orange }}>Poor</div>
        </div>

        {/* Sub-scores */}
        {[
          { label: 'Search results', score: '12/40', status: 'Poor', color: G.red, pct: 30 },
          { label: 'Guest experience', score: '35/40', status: 'Fair', color: G.orange, pct: 70 },
          { label: 'Local listings', score: '4/20', status: 'Poor', color: G.red, pct: 20 },
        ].map((s, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <svg width="22" height="22" viewBox="0 0 22 22">
              <circle cx="11" cy="11" r="9" stroke="#e5e7eb" strokeWidth="3" fill="none"/>
              <circle cx="11" cy="11" r="9" stroke={s.color} strokeWidth="3" fill="none"
                strokeDasharray={`${s.pct * 0.565} 100`} strokeLinecap="round"
                transform="rotate(-90 11 11)"/>
            </svg>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, color: G.text, fontWeight: 500 }}>{s.label}</div>
              <div style={{ fontSize: 10, color: s.color }}>{s.status}</div>
            </div>
            <span style={{ fontSize: 11, color: G.textMuted, fontWeight: 600 }}>{s.score}</span>
          </div>
        ))}
      </div>

    </div>
  );
}

/* ─── Main export ────────────────────────────────────────────────────────── */
export default function H360Hero() {
  const [wordIdx, setWordIdx] = useState(0);
  const [wordVisible, setWordVisible] = useState(true);
  const [phoneScrollY, setPhoneScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const maxPhoneScroll = 420; // px the phone content can travel up

  /* Cycle words */
  useEffect(() => {
    const id = setInterval(() => {
      setWordVisible(false);
      setTimeout(() => {
        setWordIdx(i => (i + 1) % WORDS.length);
        setWordVisible(true);
      }, 320);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  /* Scroll → phone content parallax */
  useEffect(() => {
    const onScroll = () => {
      const el = heroRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const totalHeight = el.offsetHeight;
      const scrolled = Math.max(0, -rect.top);
      const pct = Math.min(1, scrolled / (totalHeight * 0.6));
      setPhoneScrollY(pct * maxPhoneScroll);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div style={{ fontFamily: '"Inter", system-ui, -apple-system, Arial, sans-serif', background: G.bg, color: G.text, overflowX: 'hidden' }}>
      {/* Google Font */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');`}</style>

      {/* ── NAV ──────────────────────────────────────────────────────── */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: G.bg,
        borderBottom: `1px solid ${G.border}`,
        padding: '0 40px', height: 64,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 30, height: 30, borderRadius: 8, background: G.green, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#fff', fontSize: 13, fontWeight: 900, letterSpacing: '-0.05em' }}>H3</span>
          </div>
          <span style={{ fontSize: 17, fontWeight: 800, letterSpacing: '-0.04em', color: G.text }}>H360</span>
        </div>
        <div style={{ display: 'flex', gap: 32, fontSize: 14, fontWeight: 500, color: G.textMuted }}>
          {['Product', 'Pricing', 'How it works', 'Company'].map(l => (
            <span key={l} style={{ cursor: 'pointer' }}>{l}</span>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <span style={{ fontSize: 14, fontWeight: 500, color: G.textMuted, cursor: 'pointer' }}>Login</span>
          <button style={{
            padding: '9px 20px', background: G.green, color: '#f0f9f4',
            border: 'none', borderRadius: 10, fontSize: 14, fontWeight: 600,
            cursor: 'pointer', letterSpacing: '-0.01em',
          }}>Get a free demo</button>
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <div ref={heroRef} style={{ minHeight: '280vh' }}>

        {/* Top section: stars + heading + input */}
        <div style={{ paddingTop: 56, paddingBottom: 0, textAlign: 'center', background: G.bg }}>

          {/* Stars pill */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            marginBottom: 20, fontSize: 13, color: G.textMuted, letterSpacing: '-0.01em',
          }}>
            <span style={{ color: G.star, letterSpacing: 0, fontSize: 14 }}>★★★★★</span>
            <span style={{ fontWeight: 700, color: G.text }}>4.8</span>
            <span>across 1,000+ reviews</span>
          </div>

          {/* H1 */}
          <h1 style={{
            fontSize: 'clamp(44px, 6.2vw, 80px)',
            fontWeight: 800,
            lineHeight: 1.06,
            letterSpacing: '-0.035em',
            color: G.text,
            margin: '0 auto 10px',
            maxWidth: 860,
            padding: '0 20px',
          }}>
            The restaurant system Malta uses to{' '}
            <span style={{
              display: 'inline-block',
              transition: 'opacity 0.28s ease, transform 0.28s ease',
              opacity: wordVisible ? 1 : 0,
              transform: wordVisible ? 'translateY(0)' : 'translateY(6px)',
            }}>
              {WORDS[wordIdx]}
            </span>
          </h1>

          {/* Sub */}
          <p style={{ fontSize: 18, color: G.textMuted, maxWidth: 500, margin: '0 auto 36px', lineHeight: 1.55, padding: '0 20px' }}>
            H360 unifies Google visibility, reviews, direct orders, and guest loyalty — one platform built for Malta restaurants.
          </p>

          {/* Search pill — Owner.com exact */}
          <div style={{
            display: 'inline-flex', alignItems: 'center',
            background: G.bg,
            border: `1.5px solid ${G.border}`,
            borderRadius: 14,
            padding: '6px 6px 6px 16px',
            boxShadow: '0 2px 20px rgba(0,0,0,0.07)',
            gap: 8, width: '100%', maxWidth: 480,
          }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={G.textMuted} strokeWidth="2.5">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              type="text"
              placeholder="Find your restaurant name"
              style={{
                flex: 1, border: 'none', outline: 'none',
                fontSize: 15, color: G.text,
                background: 'transparent', fontFamily: 'inherit',
              }}
            />
            <button style={{
              padding: '10px 18px',
              background: G.green, color: '#f0f9f4',
              border: 'none', borderRadius: 10,
              fontSize: 14, fontWeight: 600,
              cursor: 'pointer', whiteSpace: 'nowrap',
              display: 'flex', alignItems: 'center', gap: 6,
              letterSpacing: '-0.01em',
            }}>
              Get my AI report
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 19V5M5 12l7-7 7 7"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Phone + green card — sticky */}
        <div style={{
          position: 'sticky', top: 64,
          height: 'calc(100vh - 64px)',
          display: 'flex', alignItems: 'flex-start',
          justifyContent: 'center',
          paddingTop: 40,
          overflow: 'hidden',
          background: G.bg,
        }}>

          {/* Green gradient card behind phone — Owner.com exact */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '68%',
            maxWidth: 880,
            height: '78%',
            borderRadius: '20px 20px 0 0',
            background: 'linear-gradient(105deg, #094413 0%, #15692a 30%, #3db85e 65%, #c2edce 100%)',
            overflow: 'hidden',
          }}>
            {/* Subtle diagonal lines texture (Owner.com) */}
            <svg style={{ position: 'absolute', inset: 0, opacity: 0.12 }} width="100%" height="100%">
              <defs>
                <pattern id="lines" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse" patternTransform="rotate(30)">
                  <line x1="0" y1="0" x2="0" y2="32" stroke="#fff" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#lines)"/>
            </svg>
          </div>

          {/* iPhone frame */}
          <div style={{
            position: 'relative',
            zIndex: 1,
            width: 275,
            background: '#0d0d0d',
            borderRadius: 46,
            padding: '12px 10px',
            boxShadow: '0 36px 88px rgba(0,0,0,0.32), 0 0 0 1px rgba(255,255,255,0.05)',
            border: '0px solid transparent',
            flexShrink: 0,
          }}>
            {/* Side buttons */}
            <div style={{ position: 'absolute', left: -3, top: 90, width: 3, height: 32, background: '#2a2a2a', borderRadius: '3px 0 0 3px' }}/>
            <div style={{ position: 'absolute', left: -3, top: 132, width: 3, height: 52, background: '#2a2a2a', borderRadius: '3px 0 0 3px' }}/>
            <div style={{ position: 'absolute', left: -3, top: 194, width: 3, height: 52, background: '#2a2a2a', borderRadius: '3px 0 0 3px' }}/>
            <div style={{ position: 'absolute', right: -3, top: 130, width: 3, height: 68, background: '#2a2a2a', borderRadius: '0 3px 3px 0' }}/>

            {/* Dynamic Island */}
            <div style={{ width: 108, height: 32, background: '#000', borderRadius: 20, margin: '0 auto 0', position: 'relative', zIndex: 5 }}/>

            {/* Screen */}
            <div style={{
              borderRadius: 36,
              overflow: 'hidden',
              background: G.bg,
              height: 480,
              marginTop: -2,
            }}>
              {/* Status bar */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 16px 4px', fontSize: 12, fontWeight: 700 }}>
                <span>9:41</span>
                <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
                  {/* Signal */}
                  <svg width="18" height="12" viewBox="0 0 18 12" fill={G.text}>
                    <rect x="0" y="7" width="3" height="5" rx="1"/>
                    <rect x="4.5" y="5" width="3" height="7" rx="1"/>
                    <rect x="9" y="2" width="3" height="10" rx="1"/>
                    <rect x="13.5" y="0" width="3" height="12" rx="1" opacity="0.3"/>
                  </svg>
                  {/* WiFi */}
                  <svg width="16" height="12" viewBox="0 0 16 12" fill={G.text}>
                    <path d="M8 9.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"/>
                    <path d="M3.5 7A6.5 6.5 0 0112.5 7" stroke={G.text} strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                    <path d="M1 4.5A10 10 0 0115 4.5" stroke={G.text} strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  </svg>
                  {/* Battery */}
                  <svg width="28" height="13" viewBox="0 0 28 13" fill="none">
                    <rect x="0.5" y="0.5" width="23" height="12" rx="3.5" stroke={G.text} strokeOpacity="0.35"/>
                    <rect x="2" y="2" width="18" height="9" rx="2" fill={G.text}/>
                    <path d="M24.5 4.5v4c1-.6 1-3.4 0-4z" fill={G.text} opacity="0.4"/>
                  </svg>
                </div>
              </div>

              {/* Scrolling phone content */}
              <div style={{
                transform: `translateY(-${phoneScrollY}px)`,
                transition: 'transform 0.05s linear',
                willChange: 'transform',
              }}>
                <PhoneContent />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── CASE STUDIES ────────────────────────────────────────────── */}
      <section style={{ padding: '80px 60px', background: G.bg, borderTop: `1px solid ${G.border}` }}>
        <h2 style={{ fontSize: 40, fontWeight: 800, letterSpacing: '-0.03em', color: G.text, textAlign: 'center', marginBottom: 10 }}>
          Grow sales like these owners
        </h2>
        <p style={{ textAlign: 'center', color: G.textMuted, fontSize: 16, marginBottom: 48 }}>
          Real Malta restaurants. Real results.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, maxWidth: 980, margin: '0 auto' }}>
          {[
            { photo: '🍽️', stat: '+€4,200', label: 'Monthly direct sales', name: 'Jonathan Brincat', place: 'Noni, Valletta' },
            { photo: '🏠', stat: '+41%',    label: 'Google visibility',   name: 'Maria Schembri', place: 'Ta\' Marija, Mdina' },
            { photo: '⭐', stat: '29',       label: 'Reviews in 30 days',  name: 'Antoine Camilleri', place: 'Rubino, Valletta' },
          ].map(c => (
            <div key={c.name} style={{ borderRadius: 16, overflow: 'hidden', border: `1px solid ${G.border}`, background: G.bg }}>
              <div style={{ height: 180, background: `linear-gradient(135deg, ${G.green}, ${G.greenMid})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 52 }}>
                {c.photo}
              </div>
              <div style={{ padding: '20px 22px' }}>
                <div style={{ fontSize: 32, fontWeight: 800, color: G.green, letterSpacing: '-0.03em', lineHeight: 1 }}>{c.stat}</div>
                <div style={{ fontSize: 13, color: G.textMuted, margin: '4px 0 14px' }}>{c.label}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: G.text }}>{c.name}</div>
                <div style={{ fontSize: 12, color: G.textMuted }}>{c.place}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────── */}
      <section style={{ padding: '80px 40px', background: G.green, textAlign: 'center' }}>
        <h2 style={{ fontSize: 42, fontWeight: 800, letterSpacing: '-0.03em', color: '#fff', marginBottom: 14 }}>
          Ready to grow your restaurant?
        </h2>
        <p style={{ fontSize: 17, color: G.greenLt, marginBottom: 36, maxWidth: 460, margin: '0 auto 36px', lineHeight: 1.55 }}>
          Get your free H360 audit. See exactly what's holding your restaurant back — in 60 seconds.
        </p>
        <div style={{
          display: 'inline-flex', alignItems: 'center',
          background: G.bg, border: `1.5px solid ${G.border}`,
          borderRadius: 14, padding: '6px 6px 6px 16px',
          boxShadow: '0 2px 24px rgba(0,0,0,0.18)',
          gap: 8, width: '100%', maxWidth: 480,
        }}>
          <input type="text" placeholder="Find your restaurant in Malta" style={{ flex: 1, border: 'none', outline: 'none', fontSize: 15, color: G.text, background: 'transparent', fontFamily: 'inherit' }} />
          <button style={{ padding: '10px 18px', background: G.text, color: '#fff', border: 'none', borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap' }}>
            Get my free audit
          </button>
        </div>
      </section>
    </div>
  );
}
