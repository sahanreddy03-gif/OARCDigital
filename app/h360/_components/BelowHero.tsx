'use client';

import { useState, useEffect, useRef } from 'react';

/* ─── tokens ──────────────────────────────────────────────── */
const C = {
  bg:       '#0a0a0a',
  card:     '#111111',
  card2:    '#161616',
  border:   '#2a2a2a',
  text:     '#ffffff',
  muted:    '#9ca3af',
  dim:      '#6b7280',
  green:    '#094413',
  greenMid: '#166b30',
  greenLt:  '#c2edce',
  pink:     '#e879f9',
  pinkDark: '#a21caf',
  blue:     '#3b82f6',
};

function useIsMobile() {
  const [m, setM] = useState(false);
  useEffect(() => {
    const check = () => setM(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return m;
}

/* ═══════════════════════════════════════════════════════════════
   1. STATS — dark, 4 numbers
   Sunday: "3,500+ Clients · 80M+ Diners · $176M Tips · 2M Reviews"
   ═══════════════════════════════════════════════════════════════ */
function Stats({ m }: { m: boolean }) {
  const stats = [
    { val: '50+',    lab: 'Malta restaurants' },
    { val: '+34%',   lab: 'Average revenue uplift' },
    { val: '4,200+', lab: 'Google reviews generated' },
    { val: '€2.1M',  lab: 'Commission kept from Wolt' },
  ];
  return (
    <section style={{ background: C.bg, borderBottom: `1px solid ${C.border}` }}>
      <div style={{
        maxWidth: 1040, margin: '0 auto',
        display: 'grid', gridTemplateColumns: m ? 'repeat(2,1fr)' : 'repeat(4,1fr)',
        padding: m ? '40px 24px' : '52px 40px',
        gap: m ? 32 : 0,
      }}>
        {stats.map((s, i) => (
          <div key={i} style={{
            textAlign: 'center',
            padding: m ? 0 : '0 24px',
            borderRight: (!m && i < 3) ? `1px solid ${C.border}` : 'none',
          }}>
            <div style={{ fontSize: m ? 38 : 52, fontWeight: 800, color: C.text, letterSpacing: '-0.04em', lineHeight: 1 }}>{s.val}</div>
            <div style={{ fontSize: 13, color: C.muted, marginTop: 6 }}>{s.lab}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   2. PROBLEM STATEMENT — dark, large editorial text
   Sunday: "Paying in restaurants used to be slow, awkward and frustrating."
   ═══════════════════════════════════════════════════════════════ */
function Problem({ m }: { m: boolean }) {
  return (
    <section id="h360-how-it-works" style={{ background: C.bg, padding: m ? '56px 24px 48px' : '80px 40px 64px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{
          fontSize: m ? 'clamp(28px,8vw,36px)' : 'clamp(36px,4vw,54px)',
          fontWeight: 800, lineHeight: 1.1,
          letterSpacing: '-0.035em', color: C.text,
          marginBottom: 24,
        }}>
          Ordering and paying in Malta restaurants used to be broken, expensive, and invisible to Google.
        </h2>
        <p style={{ fontSize: m ? 17 : 20, color: C.muted, lineHeight: 1.65, maxWidth: 680 }}>
          H360 changed that with ARC AI-powered solutions that learn, adapt, and create value at every step. On-site or online, dine-in or delivery.
        </p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   3. PRODUCT CARDS — horizontal scroll, dark cards + big visual
   Sunday: Smart Handheld / Digital Bill / Hybrid / Order & Pay
   ═══════════════════════════════════════════════════════════════ */
const PRODUCTS = [
  {
    title: 'Direct Orders',
    sub: 'QR ordering with zero commission.',
    accent: '#22c55e',
    visual: (
      <div style={{ padding: '20px 16px 0', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
        {/* QR mockup */}
        <div style={{ background: '#1a1a1a', borderRadius: 16, border: `1px solid #2a2a2a`, padding: 16, marginBottom: 0 }}>
          <div style={{ fontSize: 11, color: '#6b7280', marginBottom: 8 }}>Table 7 · Live order</div>
          {['Braġjoli (x2) — €28', 'Lampuki Pie — €16.50', 'Kinnie x3 — €7.50'].map((r, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: i < 2 ? `1px solid #2a2a2a` : 'none', fontSize: 13, color: '#fff' }}>
              <span style={{ color: '#d1d5db' }}>{r.split('—')[0]}</span>
              <span style={{ fontWeight: 600 }}>{r.split('—')[1]}</span>
            </div>
          ))}
          <div style={{ marginTop: 12, background: '#22c55e', color: '#000', borderRadius: 8, padding: '10px', textAlign: 'center', fontSize: 13, fontWeight: 700 }}>
            Pay €52.00 — 0% fee
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Google Ranking',
    sub: 'Be the restaurant guests find first.',
    accent: '#3b82f6',
    visual: (
      <div style={{ padding: '20px 16px 0', flex: 1 }}>
        <div style={{ fontSize: 11, color: '#6b7280', marginBottom: 10 }}>Google Maps — Valletta</div>
        {[
          { rank: '#1', name: 'Your Restaurant', score: '4.9★', c: '#22c55e', bg: 'rgba(34,197,94,0.1)' },
          { rank: '#2', name: 'Competitor A',    score: '4.2★', c: '#6b7280', bg: 'transparent' },
          { rank: '#3', name: 'Competitor B',    score: '4.0★', c: '#6b7280', bg: 'transparent' },
        ].map(r => (
          <div key={r.rank} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 10px', borderRadius: 10, background: r.bg, marginBottom: 6, border: `1px solid #2a2a2a` }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: r.c, width: 20 }}>{r.rank}</span>
            <span style={{ flex: 1, fontSize: 13, color: r.c, fontWeight: r.rank === '#1' ? 700 : 400 }}>{r.name}</span>
            <span style={{ fontSize: 12, color: r.c }}>{r.score}</span>
          </div>
        ))}
        <div style={{ marginTop: 10, padding: '8px 12px', background: 'rgba(59,130,246,0.12)', borderRadius: 8, fontSize: 12, color: '#3b82f6', fontWeight: 600 }}>
          ARC AI: +9 positions this month
        </div>
      </div>
    ),
  },
  {
    title: 'Guest Loyalty',
    sub: 'Turn one-time guests into regulars.',
    accent: '#e879f9',
    visual: (
      <div style={{ padding: '20px 16px 0', flex: 1 }}>
        <div style={{ background: '#1a1a1a', borderRadius: 14, padding: '12px 14px', border: `1px solid #2a2a2a`, marginBottom: 10 }}>
          <div style={{ fontSize: 11, color: '#6b7280', marginBottom: 6 }}>ARC AI — WhatsApp</div>
          <div style={{ background: '#e879f9', color: '#000', borderRadius: 10, padding: '10px 12px', fontSize: 13, lineHeight: 1.45, fontWeight: 500 }}>
            &ldquo;Hey Maria! Your favourite Braġjoli is back on the menu. Table for 2 this Friday?&rdquo;
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <div style={{ flex: 1, padding: '9px 12px', background: '#e879f9', color: '#000', borderRadius: 8, textAlign: 'center', fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>Book table</div>
          <div style={{ flex: 1, padding: '9px 12px', background: '#1a1a1a', color: '#9ca3af', borderRadius: 8, textAlign: 'center', fontSize: 12, border: `1px solid #2a2a2a` }}>Maybe later</div>
        </div>
      </div>
    ),
  },
  {
    title: 'ARC AI Audit',
    sub: 'Know exactly what is costing you money.',
    accent: '#f97316',
    visual: (
      <div style={{ padding: '20px 16px 0', flex: 1 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: C.text, marginBottom: 12 }}>Your restaurant score</div>
        {[
          { lab: 'Google ranking', pct: 95, color: '#22c55e' },
          { lab: 'Review velocity', pct: 45, color: '#f97316' },
          { lab: 'Direct orders',  pct: 20, color: '#ef4444' },
        ].map((b, i) => (
          <div key={i} style={{ marginBottom: 14 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#9ca3af', marginBottom: 6 }}>
              <span>{b.lab}</span><span style={{ color: b.color, fontWeight: 600 }}>{b.pct}%</span>
            </div>
            <div style={{ height: 5, background: '#2a2a2a', borderRadius: 99 }}>
              <div style={{ height: '100%', width: `${b.pct}%`, background: b.color, borderRadius: 99 }}/>
            </div>
          </div>
        ))}
        <div style={{ padding: '8px 12px', background: 'rgba(249,115,22,0.1)', borderRadius: 8, fontSize: 12, color: '#f97316', fontWeight: 600, marginTop: 4 }}>
          2 critical issues to fix
        </div>
      </div>
    ),
  },
  {
    title: 'Revenue Dashboard',
    sub: 'One clear view across every service.',
    accent: '#22c55e',
    visual: (
      <div style={{ padding: '20px 16px 0', flex: 1 }}>
        <div style={{ marginBottom: 10 }}>
          <div style={{ fontSize: 11, color: '#6b7280' }}>Revenue this month</div>
          <div style={{ fontSize: 32, fontWeight: 800, color: '#22c55e', letterSpacing: '-0.04em', lineHeight: 1 }}>€18,420</div>
          <div style={{ fontSize: 12, color: '#22c55e', fontWeight: 600 }}>↑ +34% vs last month</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 56, marginBottom: 10 }}>
          {[25,38,32,50,44,58,52,72,65,80,76,95].map((h, i) => (
            <div key={i} style={{ flex: 1, background: i === 11 ? '#22c55e' : '#2a5c3a', borderRadius: '2px 2px 0 0', height: `${h}%`, opacity: i === 11 ? 1 : 0.6 }}/>
          ))}
        </div>
        <div style={{ fontSize: 10, color: '#6b7280', textAlign: 'center' }}>Last 12 months</div>
      </div>
    ),
  },
];

function ProductCards({ m }: { m: boolean }) {
  return (
    <section id="h360-products" style={{ background: C.bg, paddingBottom: m ? 48 : 72 }}>
      <div style={{ padding: m ? '0 0 0 24px' : '0 0 0 40px', overflowX: 'auto', scrollbarWidth: 'none' }}>
        <div style={{ display: 'flex', gap: 16, paddingRight: m ? 24 : 40, width: 'max-content' }}>
          {/* pillar anchors */}
          <span id="h360-direct-orders"  style={{ display: 'none' }}/>
          <span id="h360-google-ranking" style={{ display: 'none' }}/>
          <span id="h360-audit"          style={{ display: 'none' }}/>
          {PRODUCTS.map((p, i) => (
            <div key={i} style={{
              width: m ? 280 : 320, height: m ? 340 : 380, flexShrink: 0,
              background: C.card, border: `1px solid ${C.border}`,
              borderRadius: 20, overflow: 'hidden',
              display: 'flex', flexDirection: 'column',
            }}>
              <div style={{ padding: '22px 22px 0' }}>
                <div style={{ width: 10, height: 10, borderRadius: 99, background: p.accent, marginBottom: 14 }}/>
                <div style={{ fontSize: 18, fontWeight: 700, color: C.text, marginBottom: 4 }}>{p.title}</div>
                <div style={{ fontSize: 13, color: C.muted }}>{p.sub}</div>
              </div>
              {p.visual}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   4. TRUSTED LOGOS — dark marquee
   Sunday: "Trusted by thousands of restaurants..."
   ═══════════════════════════════════════════════════════════════ */
const RESTAURANTS = ['Noni', 'Rubino', "Ta' Marija", 'Bahia', "Ġużé", 'Zen', 'Palazzo Preca', 'Terrone', 'De Mondion', 'Margo', 'Rock Salt', 'Tartarun'];

function TrustLogos({ m }: { m: boolean }) {
  return (
    <section style={{ background: C.bg, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, padding: m ? '48px 0' : '64px 0' }}>
      <style>{`@keyframes h360mq { from { transform: translateX(0) } to { transform: translateX(-50%) } } .h360mq { animation: h360mq 26s linear infinite; display: flex; gap: 0; width: max-content; }`}</style>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: m ? '0 24px' : '0 40px', textAlign: 'center', marginBottom: 36 }}>
        <h2 style={{ fontSize: m ? 22 : 30, fontWeight: 700, letterSpacing: '-0.03em', color: C.text, marginBottom: 6 }}>
          Trusted by Malta&apos;s best restaurants.
        </h2>
        <p style={{ fontSize: 15, color: C.muted }}>From casual trattorias to Michelin-recommended dining rooms.</p>
      </div>
      <div style={{ overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 80, background: `linear-gradient(to right, ${C.bg}, transparent)`, zIndex: 2 }}/>
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 80, background: `linear-gradient(to left, ${C.bg}, transparent)`, zIndex: 2 }}/>
        <div className="h360mq">
          {[...RESTAURANTS, ...RESTAURANTS].map((name, i) => (
            <div key={i} style={{ padding: '10px 28px', borderRight: `1px solid ${C.border}`, fontSize: 14, fontWeight: 500, color: C.muted, whiteSpace: 'nowrap' }}>
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   5. INLINE TESTIMONIALS — 3 blocks (dark)
   Sunday: 3 quote blocks with photo background thumbnails
   ═══════════════════════════════════════════════════════════════ */
const INLINE_QUOTES = [
  { q: 'We\'ve had more Google reviews in one month with H360 than in the entire previous year.', name: 'Jonathan Brincat', place: 'Noni, Valletta', init: 'JB' },
  { q: 'When we stopped paying Wolt, our direct revenue went up 41% in three months. Every time.', name: 'Maria Schembri', place: "Ta' Marija, Mdina", init: 'MS' },
  { q: 'H360 gives our guests a faster, easier checkout. The time saved lets the team focus on hospitality.', name: 'Antoine Camilleri', place: 'Rubino, Valletta', init: 'AC' },
];

function InlineTestimonials({ m }: { m: boolean }) {
  return (
    <section style={{ background: C.bg, padding: m ? '48px 24px' : '72px 40px' }}>
      <div style={{ maxWidth: 1040, margin: '0 auto', display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(3,1fr)', gap: 24 }}>
        {INLINE_QUOTES.map((t, i) => (
          <div key={i} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 20, padding: '28px 28px 24px', display: 'flex', flexDirection: 'column', gap: 20 }}>
            <p style={{ fontSize: m ? 15 : 16, color: C.text, lineHeight: 1.6, flex: 1 }}>
              &ldquo;{t.q}&rdquo;
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: 99, background: `linear-gradient(135deg,${C.green},${C.greenMid})`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 13, flexShrink: 0 }}>
                {t.init}
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: C.text }}>{t.name}</div>
                <div style={{ fontSize: 12, color: C.muted }}>{t.place}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   6. "EVERY VISIT NOW DRIVES VALUE" + 3 TALL CARDS
   Sunday: Full-bleed photo cards stacked — FOR OPERATORS / STAFF / GUESTS
   ═══════════════════════════════════════════════════════════════ */
function ValueCards({ m }: { m: boolean }) {
  const cards = [
    {
      label: 'FOR OPERATORS',
      title: 'Faster table turns, more direct revenue, higher margin.',
      accentColor: C.pink,
      bg: 'linear-gradient(160deg, #1a0a1a 0%, #2d0f2d 40%, #111 100%)',
      overlay: (
        <div style={{ position: 'absolute', bottom: 36, left: 28, background: 'rgba(20,20,20,0.85)', backdropFilter: 'blur(12px)', borderRadius: 16, padding: '16px 20px', border: `1px solid rgba(232,121,249,0.2)`, minWidth: 200 }}>
          <div style={{ fontSize: 11, color: C.muted, marginBottom: 4 }}>Last month</div>
          <div style={{ fontSize: 36, fontWeight: 800, color: C.text, letterSpacing: '-0.04em', lineHeight: 1, marginBottom: 10 }}>€18,420</div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, height: 36 }}>
            {[20,35,28,50,42,60,55,70,65,80,72,95].map((h, i) => (
              <div key={i} style={{ width: 10, background: i === 11 ? C.pink : 'rgba(232,121,249,0.3)', borderRadius: '2px 2px 0 0', height: `${h}%`, flex: 1 }}/>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 8, marginTop: 8, fontSize: 10, color: C.muted }}>
            {['J','F','M','A','M','J','J','A','S','O','N','D'].map((mo, i) => <span key={i} style={{ flex: 1, textAlign: 'center' }}>{mo}</span>)}
          </div>
        </div>
      ),
    },
    {
      label: 'FOR STAFF',
      title: 'Higher tips, smoother shifts, and no chasing the bill.',
      accentColor: '#22c55e',
      bg: 'linear-gradient(160deg, #0a1a0a 0%, #0f2d0f 40%, #111 100%)',
      overlay: (
        <div style={{ position: 'absolute', bottom: 36, left: 28, background: 'rgba(20,20,20,0.85)', backdropFilter: 'blur(12px)', borderRadius: 16, padding: '16px 20px', border: `1px solid rgba(34,197,94,0.2)` }}>
          <div style={{ fontSize: 11, color: C.muted, marginBottom: 6 }}>ARC AI tip suggestion</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ fontSize: 42, fontWeight: 800, color: '#22c55e', letterSpacing: '-0.04em' }}>+28%</div>
            <div>
              <div style={{ fontSize: 12, color: C.text, fontWeight: 600 }}>Average tip rate</div>
              <div style={{ fontSize: 11, color: C.muted }}>Was 18% · +10pp improvement</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: 'FOR GUESTS',
      title: 'Fast, simple, personalised checkout they\'ll remember.',
      accentColor: '#3b82f6',
      bg: 'linear-gradient(160deg, #0a0a1a 0%, #0f0f2d 40%, #111 100%)',
      overlay: (
        <div style={{ position: 'absolute', bottom: 36, left: 28, background: 'rgba(20,20,20,0.88)', backdropFilter: 'blur(12px)', borderRadius: 16, padding: '16px 20px', border: `1px solid rgba(59,130,246,0.2)`, maxWidth: 240 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: C.text, marginBottom: 4 }}>Thanks, you&apos;re good to go.</div>
          <div style={{ fontSize: 11, color: C.muted, marginBottom: 12, lineHeight: 1.4 }}>The waiter knows the bill is paid. Feel free to head out and don&apos;t hesitate to say bye!</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: C.text }}>
            <span style={{ color: C.muted }}>You paid</span>
            <span style={{ fontWeight: 700 }}>€52.00</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section style={{ background: C.bg, padding: m ? '0 24px 64px' : '0 40px 96px', borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 1040, margin: '0 auto' }}>
        <h2 style={{ fontSize: m ? 28 : 42, fontWeight: 800, letterSpacing: '-0.035em', color: C.text, padding: m ? '48px 0 36px' : '72px 0 48px', lineHeight: 1.1 }}>
          Every visit now drives value.
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {cards.map((c, i) => (
            <div key={i} style={{
              position: 'relative',
              borderRadius: 24,
              overflow: 'hidden',
              height: m ? 380 : 480,
              background: c.bg,
              border: `1px solid ${C.border}`,
            }}>
              {/* Pattern overlay */}
              <svg style={{ position: 'absolute', inset: 0, opacity: 0.04, width: '100%', height: '100%' }}>
                <defs><pattern id={`g${i}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="1" fill="#fff"/></pattern></defs>
                <rect width="100%" height="100%" fill={`url(#g${i})`}/>
              </svg>
              {/* Accent glow */}
              <div style={{ position: 'absolute', top: -80, right: -80, width: 300, height: 300, borderRadius: 99, background: c.accentColor, opacity: 0.08, filter: 'blur(60px)', pointerEvents: 'none' }}/>
              {/* Content */}
              <div style={{ position: 'absolute', top: 28, left: 28, right: 28 }}>
                <div style={{ display: 'inline-flex', padding: '4px 10px', borderRadius: 99, background: 'rgba(255,255,255,0.08)', marginBottom: 14 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: C.muted, letterSpacing: '0.08em' }}>{c.label}</span>
                </div>
                <h3 style={{ fontSize: m ? 22 : 28, fontWeight: 800, color: C.text, letterSpacing: '-0.03em', lineHeight: 1.15, maxWidth: 440 }}>
                  {c.title}
                </h3>
              </div>
              {c.overlay}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   7. ECOSYSTEM — two landscape cards side by side
   Sunday: "Built for your ecosystem" + "Your business, one clear view"
   ═══════════════════════════════════════════════════════════════ */
function Ecosystem({ m }: { m: boolean }) {
  const integrations = [
    { name: 'Lightspeed', color: '#ff5c35' }, { name: 'TheFork', color: '#01a55e' },
    { name: 'Wolt',       color: '#009de0' }, { name: 'Bolt',    color: '#34d186' },
    { name: 'Google',     color: '#4285f4' }, { name: 'Nory',    color: '#7c3aed' },
  ];
  return (
    <section style={{ background: C.bg, padding: m ? '0 24px 64px' : '0 40px 96px' }}>
      <div style={{ maxWidth: 1040, margin: '0 auto' }}>
        <h2 style={{ fontSize: m ? 24 : 36, fontWeight: 800, letterSpacing: '-0.03em', color: C.text, marginBottom: 8 }}>
          We don&apos;t pile on more tech. We amplify what already works.
        </h2>
        <p style={{ fontSize: 16, color: C.muted, marginBottom: 40, maxWidth: 600 }}>
          H360 connects your tech stack — from POS to delivery — giving you one powerful, unified view.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr 1fr', gap: 20 }}>
          {/* Built for your ecosystem */}
          <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 20, padding: 28, minHeight: 300 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: C.muted, letterSpacing: '0.08em', marginBottom: 14 }}>INTEGRATIONS</div>
            <h3 style={{ fontSize: m ? 20 : 24, fontWeight: 700, color: C.text, letterSpacing: '-0.03em', marginBottom: 8, lineHeight: 1.2 }}>
              Built for your ecosystem.
            </h3>
            <p style={{ fontSize: 14, color: C.muted, marginBottom: 28, lineHeight: 1.55 }}>
              Connects instantly with your POS, CRM, booking and loyalty tools — everything works together, automatically.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
              <div style={{ width: 52, height: 52, borderRadius: 14, background: C.green, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 900, fontSize: 14, letterSpacing: '-0.06em', boxShadow: `0 0 0 8px rgba(9,68,19,0.25)` }}>
                H360
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8 }}>
              {integrations.map(int => (
                <div key={int.name} style={{ padding: '8px 10px', border: `1px solid ${C.border}`, borderRadius: 10, background: C.card2, textAlign: 'center' }}>
                  <div style={{ width: 8, height: 8, borderRadius: 99, background: int.color, margin: '0 auto 5px' }}/>
                  <div style={{ fontSize: 11, fontWeight: 600, color: C.muted }}>{int.name}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Your business, one clear view */}
          <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 20, padding: 28, minHeight: 300 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: C.muted, letterSpacing: '0.08em', marginBottom: 14 }}>DASHBOARD</div>
            <h3 style={{ fontSize: m ? 20 : 24, fontWeight: 700, color: C.text, letterSpacing: '-0.03em', marginBottom: 8, lineHeight: 1.2 }}>
              Your restaurant, one clear view.
            </h3>
            <p style={{ fontSize: 14, color: C.muted, marginBottom: 24, lineHeight: 1.55 }}>
              Real-time data across every table, every shift, every channel.
            </p>
            {/* Mini dashboard */}
            <div style={{ background: '#0d0d0d', border: `1px solid ${C.border}`, borderRadius: 14, padding: '14px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8, marginBottom: 12 }}>
                {[
                  { lab: 'Revenue', val: '€18,420', delta: '+34%', c: '#22c55e' },
                  { lab: 'Rank',    val: '#1',       delta: '↑9',   c: '#22c55e' },
                  { lab: 'Reviews', val: '29',        delta: '★4.9', c: '#eab308' },
                ].map(s => (
                  <div key={s.lab} style={{ background: '#1a1a1a', border: `1px solid #2a2a2a`, borderRadius: 10, padding: '10px' }}>
                    <div style={{ fontSize: 9, color: '#6b7280', marginBottom: 2 }}>{s.lab}</div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: '#fff', letterSpacing: '-0.03em' }}>{s.val}</div>
                    <div style={{ fontSize: 10, color: s.c, fontWeight: 600 }}>{s.delta}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 48 }}>
                {[25,38,32,50,44,58,52,72,65,80,76,95].map((h, i) => (
                  <div key={i} style={{ flex: 1, background: i === 11 ? C.green : '#2a5c3a', borderRadius: '2px 2px 0 0', height: `${h}%`, opacity: i === 11 ? 1 : 0.5 }}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   8. "HEAR FROM OUR CLIENTS" — scrolling marquee title + quote carousel
   Sunday: animated "Hear from our clients" marquee, then quote slides with prev/next
   ═══════════════════════════════════════════════════════════════ */
const QUOTES = [
  {
    q: 'There\'s an art to dining in Malta, but no art to losing €1,200 a month to delivery apps. H360 fixed that.',
    name: 'Jonathan Brincat',
    title: 'Founder, Noni — Valletta',
    bg: 'linear-gradient(160deg,#0f1a0f,#1a2f1a)',
  },
  {
    q: 'Large parties can pay how they want — split by dish, by person, by card. My staff focus on guests, not bills.',
    name: 'Maria Schembri',
    title: "Owner, Ta' Marija — Mdina",
    bg: 'linear-gradient(160deg,#0a0a1a,#0f0f2d)',
  },
  {
    q: 'Tips went from 18% to 28% on average the month we switched. The team noticed immediately.',
    name: 'Antoine Camilleri',
    title: 'Owner, Rubino — Valletta',
    bg: 'linear-gradient(160deg,#1a0a0f,#2d0f1a)',
  },
];

function QuoteCarousel({ m }: { m: boolean }) {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx(i => (i - 1 + QUOTES.length) % QUOTES.length);
  const next = () => setIdx(i => (i + 1) % QUOTES.length);
  const q = QUOTES[idx];

  return (
    <section style={{ background: C.bg, borderTop: `1px solid ${C.border}` }}>
      {/* Marquee title */}
      <style>{`@keyframes h360htmq { from { transform: translateX(0) } to { transform: translateX(-50%) } } .h360htmq { animation: h360htmq 18s linear infinite; display: flex; gap: 0; width: max-content; } .h360htmq-wrap { overflow: hidden; border-bottom: 1px solid ${C.border}; padding: 0; }`}</style>
      <div className="h360htmq-wrap">
        <div className="h360htmq">
          {[...Array(6)].map((_, r) => (
            <div key={r} style={{ display: 'flex', alignItems: 'center', gap: 0, flexShrink: 0 }}>
              <span style={{ fontSize: m ? 32 : 48, fontWeight: 800, color: C.text, letterSpacing: '-0.04em', padding: m ? '20px 24px' : '28px 36px', whiteSpace: 'nowrap', borderRight: `1px solid ${C.border}` }}>
                Hear from our clients
              </span>
              <span style={{ fontSize: m ? 28 : 40, padding: m ? '20px 20px' : '28px 28px', borderRight: `1px solid ${C.border}`, display: 'flex', alignItems: 'center' }}>
                <svg width={m ? 28 : 36} height={m ? 28 : 36} viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="none" stroke={C.green} strokeWidth="2"/></svg>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Quote slide */}
      <div style={{ maxWidth: 1040, margin: '0 auto', padding: m ? '48px 24px' : '72px 40px' }}>
        <div style={{ display: m ? 'flex' : 'grid', flexDirection: m ? 'column' : undefined, gridTemplateColumns: '1fr 1fr', gap: m ? 32 : 64, alignItems: 'center' }}>
          {/* Quote text side */}
          <div>
            <div style={{ display: 'flex', gap: 12, marginBottom: 32 }}>
              {/* Prev */}
              <button
                onClick={prev}
                style={{ width: 44, height: 44, borderRadius: 99, border: `1px solid ${C.border}`, background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.text }}
                data-testid="button-quote-prev"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <button
                onClick={next}
                style={{ width: 44, height: 44, borderRadius: 99, border: `1px solid ${C.border}`, background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.text }}
                data-testid="button-quote-next"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
              </button>
              {/* Dots */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginLeft: 8 }}>
                {QUOTES.map((_, i) => (
                  <div key={i} style={{ width: i === idx ? 20 : 8, height: 8, borderRadius: 99, background: i === idx ? C.text : C.border, transition: 'all 0.2s' }}/>
                ))}
              </div>
            </div>
            <blockquote style={{ fontSize: m ? 22 : 32, fontWeight: 700, color: C.text, letterSpacing: '-0.03em', lineHeight: 1.25, marginBottom: 28, fontStyle: 'normal' }}>
              &ldquo;{q.q}&rdquo;
            </blockquote>
            <div style={{ fontSize: 15, color: C.muted }}>
              — {q.name}, <span style={{ color: C.dim }}>{q.title}</span>
            </div>
          </div>
          {/* Photo side */}
          <div style={{
            height: m ? 240 : 360,
            borderRadius: 20,
            background: q.bg,
            border: `1px solid ${C.border}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            overflow: 'hidden',
            position: 'relative',
            transition: 'background 0.3s',
          }}>
            <svg style={{ position: 'absolute', inset: 0, opacity: 0.04, width: '100%', height: '100%' }}>
              <defs><pattern id="qp" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="1" fill="#fff"/></pattern></defs>
              <rect width="100%" height="100%" fill="url(#qp)"/>
            </svg>
            <div style={{ textAlign: 'center', padding: 32 }}>
              <div style={{ width: 56, height: 56, borderRadius: 99, background: `linear-gradient(135deg,${C.green},${C.greenMid})`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 20, margin: '0 auto 16px' }}>
                {q.name.split(' ').map(w => w[0]).join('')}
              </div>
              <div style={{ fontSize: 16, fontWeight: 600, color: C.text }}>{q.name}</div>
              <div style={{ fontSize: 13, color: C.muted, marginTop: 4 }}>{q.title}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   9. LOYALTY — full-bleed dark green
   Sunday: "Guest platform NEW · From first visit to forever fan."
   ═══════════════════════════════════════════════════════════════ */
function Loyalty({ m }: { m: boolean }) {
  return (
    <section id="h360-loyalty" style={{ background: C.green, padding: m ? '72px 24px' : '96px 40px', borderTop: `1px solid rgba(255,255,255,0.06)` }}>
      <div style={{ maxWidth: 1040, margin: '0 auto', display: m ? 'flex' : 'grid', flexDirection: m ? 'column' : undefined, gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '5px 12px', borderRadius: 99, background: 'rgba(255,255,255,0.10)', marginBottom: 20 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: C.greenLt, letterSpacing: '0.08em' }}>GUEST PLATFORM</span>
            <span style={{ fontSize: 10, fontWeight: 700, color: '#fff', background: 'rgba(255,255,255,0.2)', padding: '2px 6px', borderRadius: 99 }}>NEW</span>
          </div>
          <h2 style={{ fontSize: m ? 30 : 48, fontWeight: 800, letterSpacing: '-0.04em', color: '#ffffff', marginBottom: 16, lineHeight: 1.08 }}>
            From first visit<br/>to forever fan.
          </h2>
          <p style={{ fontSize: m ? 15 : 17, color: C.greenLt, lineHeight: 1.65, marginBottom: 32, maxWidth: 440 }}>
            With H360, ARC AI learns what your guests love — recommending the right dish, the right offer, the right moment. Guests order, pay, and come back. A virtuous circle of loyalty and revenue.
          </p>
          <a
            href="/h360/demo"
            style={{ display: 'inline-block', padding: '13px 28px', background: '#ffffff', color: C.green, border: 'none', borderRadius: 99, fontSize: 15, fontWeight: 700, cursor: 'pointer', textDecoration: 'none', letterSpacing: '-0.01em' }}
            data-testid="button-h360-loyalty-cta"
          >
            Discover
          </a>
        </div>
        {/* ARC AI loop visual */}
        <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 20, padding: 28 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: C.greenLt, marginBottom: 20, letterSpacing: '0.05em' }}>ARC AI GUEST LOOP</div>
          {[
            { n: '01', t: 'First visit detected',  s: 'ARC AI profiles the guest from their first scan' },
            { n: '02', t: 'Preference learned',    s: 'Dish preferences, visit frequency, spend patterns' },
            { n: '03', t: 'Perfect offer sent',    s: 'WhatsApp or email — right dish, right moment' },
            { n: '04', t: 'Guest returns',         s: 'Every visit deepens the loyalty loop' },
          ].map((step, i) => (
            <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', marginBottom: i < 3 ? 20 : 0, position: 'relative' }}>
              <div style={{ width: 32, height: 32, borderRadius: 99, background: 'rgba(255,255,255,0.10)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 11, fontWeight: 700, color: '#fff' }}>
                {step.n}
              </div>
              {i < 3 && <div style={{ position: 'absolute', left: 15, top: 32, width: 2, height: 20, background: 'rgba(255,255,255,0.12)' }}/>}
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#ffffff' }}>{step.t}</div>
                <div style={{ fontSize: 12, color: C.greenLt, marginTop: 2 }}>{step.s}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   10. SUPPORT STRIP — dark
   ═══════════════════════════════════════════════════════════════ */
function SupportStrip({ m }: { m: boolean }) {
  const items = [
    { val: '24/7', lab: 'Local Malta support' },
    { val: '3 days', lab: 'To go live and start earning direct' },
    { val: '100%', lab: 'Direct-order coverage from day one' },
  ];
  return (
    <section style={{ background: C.bg, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, padding: m ? '40px 24px' : '52px 40px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(3,1fr)', gap: m ? 28 : 0 }}>
        {items.map((s, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: m ? 0 : '0 32px', borderRight: (!m && i < 2) ? `1px solid ${C.border}` : 'none' }}>
            <div style={{ fontSize: m ? 36 : 44, fontWeight: 800, color: C.text, letterSpacing: '-0.04em', lineHeight: 1, flexShrink: 0 }}>{s.val}</div>
            <div style={{ fontSize: 14, color: C.muted, lineHeight: 1.4 }}>{s.lab}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   11. FINAL CTA — dark
   Sunday: "Try sunday for free! An expert will reach out to you today."
   ═══════════════════════════════════════════════════════════════ */
function FinalCTA({ m }: { m: boolean }) {
  return (
    <section id="h360-cta" style={{ background: C.bg, padding: m ? '72px 24px 96px' : '96px 40px 120px' }}>
      <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: m ? 30 : 52, fontWeight: 800, letterSpacing: '-0.04em', color: C.text, marginBottom: 14, lineHeight: 1.05 }}>
          Save your revenue. Start today.
        </h2>
        <p style={{ fontSize: m ? 15 : 17, color: C.muted, marginBottom: 36, lineHeight: 1.6 }}>
          An ARC AI expert will reach out to you today. Ready to grow with H360?
        </p>
        <div style={{ background: C.card, border: `1.5px solid ${C.border}`, borderRadius: 14, padding: '6px 6px 6px 20px', display: 'flex', alignItems: 'center', gap: 8, maxWidth: 480, margin: '0 auto', boxShadow: '0 4px 48px rgba(0,0,0,0.4)' }}>
          <input
            type="text"
            placeholder="Your restaurant name"
            style={{ flex: 1, border: 'none', outline: 'none', fontSize: 15, color: C.text, background: 'transparent', fontFamily: 'inherit' }}
            data-testid="input-h360-final-cta"
          />
          <a
            href="/h360/demo"
            style={{ padding: '11px 20px', background: '#ffffff', color: '#000', border: 'none', borderRadius: 10, fontSize: 14, fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap', textDecoration: 'none', display: 'inline-block', letterSpacing: '-0.01em' }}
            data-testid="button-h360-final-cta"
          >
            Get a free demo
          </a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginTop: 14, fontSize: 12, color: C.dim }}>
          <div style={{ width: 16, height: 16, borderRadius: 4, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#000', fontSize: 8, fontWeight: 800 }}>A</span>
          </div>
          Powered by ARC AI · No commitment needed
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN EXPORT
   ═══════════════════════════════════════════════════════════════ */
export default function H360BelowHero() {
  const m = useIsMobile();
  return (
    <div style={{ fontFamily: '"Inter",system-ui,-apple-system,Arial,sans-serif', background: C.bg, color: C.text, overflowX: 'hidden' }}>
      <Stats             m={m} />
      <Problem           m={m} />
      <ProductCards      m={m} />
      <TrustLogos        m={m} />
      <InlineTestimonials m={m} />
      <ValueCards        m={m} />
      <Ecosystem         m={m} />
      <QuoteCarousel     m={m} />
      <Loyalty           m={m} />
      <SupportStrip      m={m} />
      <FinalCTA          m={m} />
    </div>
  );
}
