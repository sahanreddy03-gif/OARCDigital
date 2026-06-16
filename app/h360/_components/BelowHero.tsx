'use client';

import { useState, useEffect, useRef } from 'react';

const G = {
  bg:        '#ffffff',
  bgSub:     '#f9fafb',
  bgDark:    '#111111',
  text:      '#1a1a1a',
  textMuted: '#6b7280',
  textLight: '#9ca3af',
  green:     '#094413',
  greenMid:  '#1a6b30',
  greenLt:   '#c2edce',
  border:    '#e5e7eb',
  borderDark:'#2a2a2a',
  star:      '#eab308',
  red:       '#ef4444',
  orange:    '#f97316',
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

/* ═══════════════════════════════════════════════════════════
   1. STATS STRIP
   ═══════════════════════════════════════════════════════════ */
function StatsStrip({ m }: { m: boolean }) {
  const stats = [
    { value: '50+',    label: 'Malta restaurants' },
    { value: '+34%',   label: 'Avg revenue uplift' },
    { value: '4,200+', label: 'Reviews generated' },
    { value: '€2.1M',  label: 'Commission saved from Wolt' },
  ];
  return (
    <section style={{ background: G.bg, borderTop: `1px solid ${G.border}`, borderBottom: `1px solid ${G.border}`, padding: m ? '40px 24px' : '56px 80px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: m ? 'repeat(2,1fr)' : 'repeat(4,1fr)', gap: m ? 32 : 0 }}>
        {stats.map((s, i) => (
          <div key={i} style={{ textAlign: 'center', padding: m ? 0 : '0 24px', borderRight: (!m && i < 3) ? `1px solid ${G.border}` : 'none' }}>
            <div style={{ fontSize: m ? 36 : 44, fontWeight: 800, color: G.text, letterSpacing: '-0.04em', lineHeight: 1 }}>{s.value}</div>
            <div style={{ fontSize: 14, color: G.textMuted, marginTop: 6, lineHeight: 1.4 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   2. PROBLEM STATEMENT
   ═══════════════════════════════════════════════════════════ */
function ProblemStatement({ m }: { m: boolean }) {
  return (
    <section style={{ padding: m ? '64px 24px' : '88px 80px', background: G.bg, maxWidth: '100%' }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        <h2 style={{ fontSize: m ? 28 : 42, fontWeight: 800, letterSpacing: '-0.035em', color: G.text, lineHeight: 1.15, marginBottom: 24 }}>
          Running a Malta restaurant used to mean losing revenue to Wolt, fighting for Google visibility, and watching guests walk out and never return.
        </h2>
        <p style={{ fontSize: m ? 16 : 19, color: G.textMuted, lineHeight: 1.65, maxWidth: 680 }}>
          H360 changed that with ARC AI-powered tools that learn, adapt, and create value at every touchpoint. Direct orders or walk-in, Google ranking or guest loyalty — all in one platform.
        </p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   3. PRODUCT TAB SWITCHER
   ═══════════════════════════════════════════════════════════ */
const TABS = [
  {
    label: 'Direct Orders',
    headline: 'The fastest way to take direct orders.',
    sub: 'QR-code table ordering and online checkout — no commission, no middleman. Guests order and pay in seconds, direct to your till.',
    card: (
      <div style={{ background: '#f9fafb', borderRadius: 16, padding: 20, border: '1px solid #e5e7eb' }}>
        <div style={{ fontSize: 12, color: '#6b7280', marginBottom: 12 }}>Live orders — Table 7</div>
        {[
          { item: 'Braġjoli (x2)', price: '€28.00' },
          { item: 'Lampuki Pie',   price: '€16.50' },
          { item: 'Kinnie x3',    price: '€7.50' },
        ].map((r, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: i < 2 ? '1px solid #e5e7eb' : 'none', fontSize: 14 }}>
            <span style={{ color: '#1a1a1a' }}>{r.item}</span>
            <span style={{ fontWeight: 600, color: '#1a1a1a' }}>{r.price}</span>
          </div>
        ))}
        <div style={{ marginTop: 12, padding: '10px 16px', background: '#094413', color: '#fff', borderRadius: 10, textAlign: 'center', fontSize: 14, fontWeight: 600 }}>
          Pay €52.00 — direct
        </div>
      </div>
    ),
  },
  {
    label: 'Google Ranking',
    headline: 'Be the restaurant guests find first.',
    sub: 'ARC AI fixes your Google Business profile, gets you reviewed, and puts you at the top for searches like "restaurant Malta" — automatically.',
    card: (
      <div style={{ background: '#f9fafb', borderRadius: 16, padding: 20, border: '1px solid #e5e7eb' }}>
        <div style={{ fontSize: 12, color: '#6b7280', marginBottom: 10 }}>Google Maps — Valletta</div>
        {[
          { rank: '1', name: 'Your Restaurant', score: '4.9 ★', color: '#094413', bg: '#f0fdf4' },
          { rank: '2', name: 'Competitor A',    score: '4.2 ★', color: '#6b7280', bg: '#f9fafb' },
          { rank: '3', name: 'Competitor B',    score: '4.0 ★', color: '#6b7280', bg: '#f9fafb' },
        ].map(r => (
          <div key={r.rank} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px', borderRadius: 8, background: r.bg, marginBottom: 6, border: '1px solid #e5e7eb' }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: r.color, width: 18 }}>#{r.rank}</span>
            <span style={{ flex: 1, fontSize: 13, color: r.color, fontWeight: r.rank === '1' ? 700 : 400 }}>{r.name}</span>
            <span style={{ fontSize: 12, color: r.color }}>{r.score}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    label: 'Guest Loyalty',
    headline: 'Turn one-time guests into regulars.',
    sub: 'ARC AI learns what your guests love. The right dish, the right moment, the right offer — sent automatically via WhatsApp or email.',
    card: (
      <div style={{ background: '#f9fafb', borderRadius: 16, padding: 20, border: '1px solid #e5e7eb' }}>
        <div style={{ fontSize: 12, color: '#6b7280', marginBottom: 12 }}>ARC AI guest message</div>
        <div style={{ background: '#094413', color: '#fff', borderRadius: 12, padding: '12px 14px', fontSize: 13, lineHeight: 1.5, marginBottom: 10 }}>
          &ldquo;Hey Maria! It&apos;s been 3 weeks — your favourite Braġjoli is back on the menu. Table for 2 this Friday?&rdquo;
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <div style={{ flex: 1, padding: '8px 12px', background: '#094413', color: '#fff', borderRadius: 8, textAlign: 'center', fontSize: 12, fontWeight: 600 }}>Book table</div>
          <div style={{ flex: 1, padding: '8px 12px', background: '#f3f4f6', color: '#1a1a1a', borderRadius: 8, textAlign: 'center', fontSize: 12 }}>Maybe later</div>
        </div>
      </div>
    ),
  },
  {
    label: 'ARC AI Audit',
    headline: 'Know exactly what is costing you money.',
    sub: 'ARC AI scans your Google presence, reviews, visibility, and ordering flow — and tells you exactly what to fix and in what order.',
    card: (
      <div style={{ background: '#f9fafb', borderRadius: 16, padding: 20, border: '1px solid #e5e7eb' }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: '#1a1a1a', marginBottom: 10 }}>ARC AI audit — Your Restaurant</div>
        {[
          { label: 'Google ranking', score: 38, max: 40, color: '#22c55e' },
          { label: 'Review velocity', score: 18, max: 40, color: '#f97316' },
          { label: 'Direct orders',  score: 8,  max: 20, color: '#ef4444' },
        ].map((b, i) => (
          <div key={i} style={{ marginBottom: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#6b7280', marginBottom: 4 }}>
              <span>{b.label}</span><span style={{ fontWeight: 600, color: '#1a1a1a' }}>{b.score}/{b.max}</span>
            </div>
            <div style={{ height: 6, background: '#e5e7eb', borderRadius: 99 }}>
              <div style={{ height: '100%', width: `${(b.score/b.max)*100}%`, background: b.color, borderRadius: 99 }}/>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    label: 'Revenue Dashboard',
    headline: 'Your business. One clear view.',
    sub: 'Real-time revenue, cover counts, review trends, and direct order growth — all in one dashboard, across every venue.',
    card: (
      <div style={{ background: '#f9fafb', borderRadius: 16, padding: 20, border: '1px solid #e5e7eb' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14 }}>
          <div>
            <div style={{ fontSize: 11, color: '#6b7280' }}>Revenue this month</div>
            <div style={{ fontSize: 26, fontWeight: 800, color: '#094413', letterSpacing: '-0.03em' }}>€18,420</div>
            <div style={{ fontSize: 12, color: '#22c55e', fontWeight: 600 }}>↑ +34% vs last month</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 11, color: '#6b7280' }}>Direct orders</div>
            <div style={{ fontSize: 20, fontWeight: 700, color: '#1a1a1a' }}>€6,100</div>
            <div style={{ fontSize: 12, color: '#22c55e', fontWeight: 600 }}>↑ 0% commission</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 5, height: 60 }}>
          {[30,45,38,60,52,70,65,80,75,90,82,95].map((h,i)=>(
            <div key={i} style={{ flex: 1, background: i===11 ? '#094413' : '#c2edce', borderRadius: '3px 3px 0 0', height: `${h}%` }}/>
          ))}
        </div>
        <div style={{ fontSize: 10, color: '#9ca3af', marginTop: 4, textAlign: 'center' }}>Last 12 months</div>
      </div>
    ),
  },
];

function ProductTabs({ m }: { m: boolean }) {
  const [active, setActive] = useState(0);
  return (
    <section style={{ padding: m ? '48px 0' : '80px 0', background: G.bgSub, borderTop: `1px solid ${G.border}` }}>
      <div style={{ maxWidth: 1040, margin: '0 auto', padding: m ? '0 20px' : '0 40px' }}>
        <p style={{ fontSize: m ? 18 : 22, color: G.text, fontWeight: 600, marginBottom: 32, lineHeight: 1.4 }}>
          H360 changed that with ARC AI-powered tools that learn, adapt, and create value at every step.
          <span style={{ color: G.textMuted, fontWeight: 400 }}> On-site or online, dine-in or takeaway.</span>
        </p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32, background: '#efefef', borderRadius: 14, padding: 6, width: 'fit-content', maxWidth: '100%' }}>
          {TABS.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                padding: '8px 18px', borderRadius: 10, border: 'none', cursor: 'pointer', fontSize: 14, fontWeight: 600,
                background: active === i ? G.bg : 'transparent',
                color: active === i ? G.text : G.textMuted,
                boxShadow: active === i ? '0 1px 6px rgba(0,0,0,0.10)' : 'none',
                transition: 'all 0.18s ease',
                whiteSpace: 'nowrap',
              }}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div style={{ display: m ? 'flex' : 'grid', flexDirection: m ? 'column' : undefined, gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center' }}>
          <div>
            <h3 style={{ fontSize: m ? 24 : 34, fontWeight: 800, letterSpacing: '-0.03em', color: G.text, marginBottom: 14, lineHeight: 1.15 }}>
              {TABS[active].headline}
            </h3>
            <p style={{ fontSize: m ? 15 : 17, color: G.textMuted, lineHeight: 1.65, marginBottom: 24 }}>
              {TABS[active].sub}
            </p>
            <button style={{ padding: '11px 24px', background: G.text, color: '#fff', border: 'none', borderRadius: 99, fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>
              Discover it for free
            </button>
          </div>
          <div style={{ transition: 'opacity 0.2s', opacity: 1 }}>
            {TABS[active].card}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   4. LOGO TRUST STRIP + INLINE TESTIMONIALS
   ═══════════════════════════════════════════════════════════ */
const RESTAURANT_NAMES = [
  'Noni', 'Rubino', "Ta' Marija", 'Bahia', "Guze'", 'Zen', 'Palazzo Preca',
  'Terrone', 'De Mondion', 'Margo', 'Rock Salt', 'Tartarun',
];

function LogoTrustStrip({ m }: { m: boolean }) {
  return (
    <section style={{ padding: m ? '48px 0' : '72px 0', background: G.bg, borderTop: `1px solid ${G.border}` }}>
      <style>{`@keyframes h360marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } } .h360-marquee { animation: h360marquee 22s linear infinite; display: flex; gap: 16px; width: max-content; }`}</style>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: m ? '0 24px' : '0 80px', textAlign: 'center', marginBottom: 40 }}>
        <h2 style={{ fontSize: m ? 22 : 30, fontWeight: 800, letterSpacing: '-0.03em', color: G.text, marginBottom: 8 }}>
          Trusted by Malta&apos;s best restaurants.
        </h2>
        <p style={{ fontSize: 15, color: G.textMuted }}>From casual trattorias to Michelin-recommended dining rooms.</p>
      </div>
      <div style={{ overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to right, #fff, transparent)', zIndex: 2 }}/>
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to left, #fff, transparent)', zIndex: 2 }}/>
        <div className="h360-marquee">
          {[...RESTAURANT_NAMES, ...RESTAURANT_NAMES].map((name, i) => (
            <div key={i} style={{ padding: '10px 22px', border: `1.5px solid ${G.border}`, borderRadius: 99, background: G.bg, fontSize: 14, fontWeight: 600, color: G.text, whiteSpace: 'nowrap' }}>
              {name}
            </div>
          ))}
        </div>
      </div>
      <div style={{ maxWidth: 1040, margin: '48px auto 0', padding: m ? '0 20px' : '0 40px', display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(3,1fr)', gap: 24 }}>
        {[
          { initials: 'JB', name: 'Jonathan Brincat', place: 'Noni, Valletta', quote: 'We\'ve had more Google reviews in one month with H360 than in the entire previous year.' },
          { initials: 'MS', name: 'Maria Schembri',   place: "Ta' Marija, Mdina", quote: 'When we stopped paying Wolt, our direct revenue went up 41% in 3 months. Every time.' },
          { initials: 'AC', name: 'Antoine Camilleri',place: 'Rubino, Valletta', quote: 'H360 gives our guests a faster, easier checkout. The time saved lets the team focus on hospitality.' },
        ].map(t => (
          <div key={t.name} style={{ padding: '24px 28px', border: `1px solid ${G.border}`, borderRadius: 16, background: G.bg }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ width: 44, height: 44, borderRadius: 99, background: `linear-gradient(135deg,${G.green},${G.greenMid})`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 15, flexShrink: 0 }}>
                {t.initials}
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: G.text }}>{t.name}</div>
                <div style={{ fontSize: 12, color: G.textMuted }}>{t.place}</div>
              </div>
            </div>
            <p style={{ fontSize: 14, color: G.text, lineHeight: 1.6, fontStyle: 'italic' }}>&ldquo;{t.quote}&rdquo;</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   5. THREE-COLUMN VALUE SECTION
   ═══════════════════════════════════════════════════════════ */
function ValueSection({ m }: { m: boolean }) {
  const cards = [
    {
      label: 'FOR OPERATORS',
      headline: 'Faster table turns, more direct revenue, zero Wolt fees.',
      sub: 'H360 eliminates commission payments, accelerates service with instant QR ordering, and gives you full data on every cover and order.',
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#094413" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
    },
    {
      label: 'FOR STAFF',
      headline: 'Higher tips, smoother shifts, and no chasing the bill.',
      sub: 'ARC AI-optimised tip suggestions boost staff earnings by an average of 30%. No more awkward moments waiting for card machines.',
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#094413" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    },
    {
      label: 'FOR GUESTS',
      headline: 'Fast, simple, personalised checkout they\'ll remember.',
      sub: 'Pay by QR in 10 seconds, split the bill without drama, and leave feeling valued — not forgotten. Every visit turns into a 5-star review.',
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#094413" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
    },
  ];
  return (
    <section style={{ padding: m ? '64px 24px' : '96px 80px', background: G.bg, borderTop: `1px solid ${G.border}` }}>
      <div style={{ maxWidth: 1040, margin: '0 auto' }}>
        <h2 style={{ fontSize: m ? 28 : 42, fontWeight: 800, letterSpacing: '-0.035em', color: G.text, marginBottom: 8 }}>
          Every visit now drives value.
        </h2>
        <p style={{ fontSize: m ? 15 : 17, color: G.textMuted, marginBottom: 56, maxWidth: 560, lineHeight: 1.6 }}>
          Every payment now creates value: ARC AI turns each transaction into better recommendations, smarter tips, and fewer errors.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(3,1fr)', gap: 32 }}>
          {cards.map(c => (
            <div key={c.label} style={{ padding: 32, border: `1px solid ${G.border}`, borderRadius: 16, background: G.bg }}>
              <div style={{ display: 'inline-flex', padding: '6px 12px', borderRadius: 99, background: '#f0fdf4', marginBottom: 20 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: G.green, letterSpacing: '0.08em' }}>{c.label}</span>
              </div>
              <div style={{ marginBottom: 16 }}>{c.icon}</div>
              <h3 style={{ fontSize: m ? 18 : 20, fontWeight: 700, color: G.text, marginBottom: 10, lineHeight: 1.3, letterSpacing: '-0.02em' }}>{c.headline}</h3>
              <p style={{ fontSize: 14, color: G.textMuted, lineHeight: 1.65 }}>{c.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   6. INTEGRATION / ECOSYSTEM
   ═══════════════════════════════════════════════════════════ */
function IntegrationSection({ m }: { m: boolean }) {
  const integrations = [
    { name: 'Lightspeed', color: '#ff5c35' },
    { name: 'TheFork',    color: '#01a55e' },
    { name: 'Wolt',       color: '#009de0' },
    { name: 'Bolt Food',  color: '#34d186' },
    { name: 'Google',     color: '#4285f4' },
    { name: 'Nory',       color: '#7c3aed' },
  ];
  return (
    <section style={{ padding: m ? '64px 24px' : '96px 80px', background: G.bgSub, borderTop: `1px solid ${G.border}` }}>
      <div style={{ maxWidth: 1040, margin: '0 auto', display: m ? 'flex' : 'grid', flexDirection: m ? 'column' : undefined, gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
        <div>
          <div style={{ display: 'inline-flex', padding: '5px 12px', borderRadius: 99, background: '#f0fdf4', border: `1px solid ${G.greenLt}`, marginBottom: 20 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: G.green, letterSpacing: '0.06em' }}>WORKS WITH YOUR SETUP</span>
          </div>
          <h2 style={{ fontSize: m ? 28 : 38, fontWeight: 800, letterSpacing: '-0.035em', color: G.text, marginBottom: 16, lineHeight: 1.15 }}>
            We don&apos;t pile on more tech. We amplify what already works.
          </h2>
          <p style={{ fontSize: m ? 15 : 17, color: G.textMuted, lineHeight: 1.65, marginBottom: 32 }}>
            H360 connects your tech stack — from POS to delivery — giving you one powerful, unified view of your restaurant. No rip-and-replace.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {integrations.map(int => (
              <div key={int.name} style={{ padding: '8px 16px', border: `1.5px solid ${G.border}`, borderRadius: 99, background: G.bg, fontSize: 13, fontWeight: 600, color: G.text, display: 'flex', alignItems: 'center', gap: 7 }}>
                <div style={{ width: 8, height: 8, borderRadius: 99, background: int.color }}/>
                {int.name}
              </div>
            ))}
          </div>
        </div>
        <div style={{ background: G.bg, border: `1px solid ${G.border}`, borderRadius: 20, padding: 28, position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
            <div style={{ width: 64, height: 64, borderRadius: 16, background: G.green, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 900, fontSize: 18, letterSpacing: '-0.05em', boxShadow: `0 0 0 8px ${G.greenLt}` }}>
              H360
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
            {integrations.map(int => (
              <div key={int.name} style={{ padding: '10px 12px', border: `1px solid ${G.border}`, borderRadius: 12, background: G.bgSub, textAlign: 'center' }}>
                <div style={{ width: 10, height: 10, borderRadius: 99, background: int.color, margin: '0 auto 6px' }}/>
                <div style={{ fontSize: 12, fontWeight: 600, color: G.text }}>{int.name}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 16, padding: '10px 14px', background: '#f0fdf4', borderRadius: 10, fontSize: 13, color: G.green, fontWeight: 600, textAlign: 'center' }}>
            Connected instantly · Zero manual setup
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   7. DASHBOARD — dark section
   ═══════════════════════════════════════════════════════════ */
function DashboardSection({ m }: { m: boolean }) {
  return (
    <section style={{ background: G.bgDark, padding: m ? '64px 24px' : '96px 80px' }}>
      <div style={{ maxWidth: 1040, margin: '0 auto', display: m ? 'flex' : 'grid', flexDirection: m ? 'column' : undefined, gridTemplateColumns: '1fr 1.4fr', gap: 56, alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: m ? 28 : 40, fontWeight: 800, letterSpacing: '-0.035em', color: '#ffffff', marginBottom: 16, lineHeight: 1.15 }}>
            Your restaurant. One clear view.
          </h2>
          <p style={{ fontSize: m ? 15 : 17, color: '#9ca3af', lineHeight: 1.65, marginBottom: 28 }}>
            Real-time data across every table, every shift, every channel. See what drives revenue, what kills table turns, and where guests stop coming back.
          </p>
          <button style={{ padding: '11px 24px', background: '#ffffff', color: G.bgDark, border: 'none', borderRadius: 99, fontSize: 14, fontWeight: 700, cursor: 'pointer' }}>
            Hear from our clients
          </button>
        </div>
        <div style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: 20, padding: 24 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginBottom: 20 }}>
            {[
              { label: 'Revenue MTD', value: '€18,420', delta: '+34%' },
              { label: 'Google rank', value: '#1',       delta: '▲ 9 places' },
              { label: 'New reviews', value: '29',        delta: 'this month' },
            ].map(s => (
              <div key={s.label} style={{ background: '#242424', border: '1px solid #2a2a2a', borderRadius: 12, padding: '14px 14px' }}>
                <div style={{ fontSize: 11, color: '#6b7280', marginBottom: 4 }}>{s.label}</div>
                <div style={{ fontSize: 22, fontWeight: 800, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: 11, color: '#22c55e', marginTop: 4, fontWeight: 600 }}>{s.delta}</div>
              </div>
            ))}
          </div>
          <div style={{ background: '#242424', border: '1px solid #2a2a2a', borderRadius: 12, padding: '16px 16px 12px' }}>
            <div style={{ fontSize: 11, color: '#6b7280', marginBottom: 10 }}>Revenue trend — last 12 months</div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 72 }}>
              {[25,38,32,50,44,58,52,72,65,80,76,95].map((h,i)=>(
                <div key={i} style={{ flex: 1, background: i===11 ? G.green : '#2a5c3a', borderRadius: '3px 3px 0 0', height: `${h}%`, opacity: i===11 ? 1 : 0.7 }}/>
              ))}
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 12 }}>
            {[
              { label: 'Direct orders today', value: '17', sub: '€940 captured direct' },
              { label: 'Avg review score',    value: '4.9★', sub: '29 new this month' },
            ].map(f => (
              <div key={f.label} style={{ background: '#242424', border: '1px solid #2a2a2a', borderRadius: 12, padding: '12px 14px' }}>
                <div style={{ fontSize: 11, color: '#6b7280', marginBottom: 3 }}>{f.label}</div>
                <div style={{ fontSize: 20, fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em' }}>{f.value}</div>
                <div style={{ fontSize: 11, color: '#22c55e' }}>{f.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   8. LARGE TESTIMONIALS CAROUSEL
   ═══════════════════════════════════════════════════════════ */
const LARGE_QUOTES = [
  { quote: 'There\'s an art to dining in Malta, but no art to losing €1,200 a month to delivery apps. H360 fixed that.', name: 'Jonathan Brincat', role: 'Owner, Noni — Valletta' },
  { quote: 'Large parties can pay how they want — split by dish, by person, by card. My staff focus on guests, not bills.', name: 'Maria Schembri', role: "Owner, Ta' Marija — Mdina" },
  { quote: 'Tips went from 18% to 28% on average the month we switched. The team noticed immediately.', name: 'Antoine Camilleri', role: 'Owner, Rubino — Valletta' },
];

function LargeTestimonials({ m }: { m: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <section style={{ background: G.bg, borderTop: `1px solid ${G.border}`, padding: m ? '64px 0' : '96px 0' }}>
      <div style={{ padding: m ? '0 24px' : '0 80px', maxWidth: 1040, margin: '0 auto 40px' }}>
        <h2 style={{ fontSize: m ? 28 : 40, fontWeight: 800, letterSpacing: '-0.035em', color: G.text, marginBottom: 8 }}>Hear from our clients</h2>
      </div>
      <div ref={ref} style={{ display: 'flex', gap: 20, overflowX: 'auto', padding: m ? '0 24px 24px' : '0 80px 24px', scrollbarWidth: 'none', scrollBehavior: 'smooth' }}>
        {LARGE_QUOTES.map((q, i) => (
          <div key={i} style={{ minWidth: m ? 300 : 400, maxWidth: m ? 300 : 400, padding: '36px 32px', border: `1px solid ${G.border}`, borderRadius: 20, background: G.bg, flexShrink: 0 }}>
            <div style={{ fontSize: 56, lineHeight: 1, color: G.border, fontFamily: 'Georgia, serif', marginBottom: 8, marginTop: -12 }}>&ldquo;</div>
            <p style={{ fontSize: m ? 15 : 18, color: G.text, lineHeight: 1.65, marginBottom: 28, fontStyle: 'italic' }}>
              {q.quote}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: 99, background: `linear-gradient(135deg,${G.green},${G.greenMid})`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 13 }}>
                {q.name.split(' ').map((w: string) => w[0]).join('')}
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: G.text }}>{q.name}</div>
                <div style={{ fontSize: 12, color: G.textMuted }}>{q.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   9. LOYALTY / RETENTION — full-bleed green
   ═══════════════════════════════════════════════════════════ */
function LoyaltySection({ m }: { m: boolean }) {
  return (
    <section style={{ background: G.green, padding: m ? '72px 24px' : '96px 80px', borderTop: 'none' }}>
      <div style={{ maxWidth: 1040, margin: '0 auto', display: m ? 'flex' : 'grid', flexDirection: m ? 'column' : undefined, gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
        <div>
          <div style={{ display: 'inline-flex', padding: '5px 12px', borderRadius: 99, background: 'rgba(255,255,255,0.12)', marginBottom: 20 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: G.greenLt, letterSpacing: '0.08em' }}>GUEST PLATFORM · NEW</span>
          </div>
          <h2 style={{ fontSize: m ? 30 : 44, fontWeight: 800, letterSpacing: '-0.035em', color: '#ffffff', marginBottom: 16, lineHeight: 1.1 }}>
            From first visit to forever fan.
          </h2>
          <p style={{ fontSize: m ? 15 : 17, color: G.greenLt, lineHeight: 1.65, marginBottom: 32, maxWidth: 440 }}>
            With H360, ARC AI learns what your guests love — recommending the right dish, the right offer, the right moment. Guests order, pay, and come back. A virtuous circle of loyalty and revenue.
          </p>
          <button style={{ padding: '12px 28px', background: '#ffffff', color: G.green, border: 'none', borderRadius: 99, fontSize: 15, fontWeight: 700, cursor: 'pointer' }}>
            Discover
          </button>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 20, padding: 28 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: G.greenLt, marginBottom: 20 }}>ARC AI guest loop</div>
          {[
            { step: '01', label: 'First visit detected', sub: 'ARC AI profiles the guest from their first scan' },
            { step: '02', label: 'Preference learned',   sub: 'Dish preferences, visit frequency, spend patterns' },
            { step: '03', label: 'Perfect offer sent',   sub: 'WhatsApp or email — right dish, right moment' },
            { step: '04', label: 'Guest returns',        sub: 'Every visit deepens the loyalty loop' },
          ].map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', marginBottom: i < 3 ? 20 : 0, position: 'relative' }}>
              <div style={{ width: 32, height: 32, borderRadius: 99, background: 'rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 11, fontWeight: 700, color: '#fff' }}>
                {s.step}
              </div>
              {i < 3 && (
                <div style={{ position: 'absolute', left: 15, top: 32, width: 2, height: 20, background: 'rgba(255,255,255,0.15)' }}/>
              )}
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#ffffff' }}>{s.label}</div>
                <div style={{ fontSize: 12, color: G.greenLt, marginTop: 2 }}>{s.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   10. SUPPORT STATS STRIP
   ═══════════════════════════════════════════════════════════ */
function SupportStrip({ m }: { m: boolean }) {
  const items = [
    { value: '24/7', label: 'Local Malta support ready for you' },
    { value: '3',    label: 'Days to go live and start earning direct' },
    { value: '100%', label: 'Direct-order coverage from day one' },
  ];
  return (
    <section style={{ background: G.bgSub, borderTop: `1px solid ${G.border}`, borderBottom: `1px solid ${G.border}`, padding: m ? '40px 24px' : '48px 80px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(3,1fr)', gap: m ? 28 : 0 }}>
        {items.map((s, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: m ? 0 : '0 32px', borderRight: (!m && i < 2) ? `1px solid ${G.border}` : 'none' }}>
            <div style={{ fontSize: m ? 36 : 44, fontWeight: 800, color: G.text, letterSpacing: '-0.04em', lineHeight: 1, flexShrink: 0 }}>{s.value}</div>
            <div style={{ fontSize: 14, color: G.textMuted, lineHeight: 1.4 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   11. FINAL CTA
   ═══════════════════════════════════════════════════════════ */
function FinalCTA({ m }: { m: boolean }) {
  return (
    <section style={{ background: G.bg, padding: m ? '72px 24px' : '96px 80px' }}>
      <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: m ? 30 : 48, fontWeight: 800, letterSpacing: '-0.04em', color: G.text, marginBottom: 14, lineHeight: 1.1 }}>
          Save your revenue. Start today.
        </h2>
        <p style={{ fontSize: m ? 15 : 17, color: G.textMuted, marginBottom: 36, lineHeight: 1.6 }}>
          An ARC AI expert will reach out to you today. Ready to grow with H360?
        </p>
        <div style={{ background: G.bg, border: `1.5px solid ${G.border}`, borderRadius: 14, padding: '6px 6px 6px 20px', display: 'flex', alignItems: 'center', gap: 8, maxWidth: 480, margin: '0 auto', boxShadow: '0 4px 32px rgba(0,0,0,0.08)' }}>
          <input
            type="text"
            placeholder="Your restaurant name"
            style={{ flex: 1, border: 'none', outline: 'none', fontSize: 15, color: G.text, background: 'transparent', fontFamily: 'inherit' }}
            data-testid="input-h360-final-cta"
          />
          <button
            style={{ padding: '11px 20px', background: G.text, color: '#fff', border: 'none', borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap' }}
            data-testid="button-h360-final-cta"
          >
            Get a free demo
          </button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginTop: 12, fontSize: 12, color: G.textMuted }}>
          <div style={{ width: 16, height: 16, borderRadius: 4, background: G.text, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#fff', fontSize: 8, fontWeight: 800 }}>A</span>
          </div>
          Powered by ARC AI · No commitment needed
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN EXPORT
   ═══════════════════════════════════════════════════════════ */
export default function H360BelowHero() {
  const m = useIsMobile();
  return (
    <div style={{ fontFamily: '"Inter",system-ui,-apple-system,Arial,sans-serif', background: '#ffffff', color: '#1a1a1a', overflowX: 'hidden' }}>
      <StatsStrip        m={m} />
      <ProblemStatement  m={m} />
      <ProductTabs       m={m} />
      <LogoTrustStrip    m={m} />
      <ValueSection      m={m} />
      <IntegrationSection m={m} />
      <DashboardSection  m={m} />
      <LargeTestimonials m={m} />
      <LoyaltySection    m={m} />
      <SupportStrip      m={m} />
      <FinalCTA          m={m} />
    </div>
  );
}
