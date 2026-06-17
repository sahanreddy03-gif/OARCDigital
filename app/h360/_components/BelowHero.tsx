'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

/* ─── Sunday exact design tokens ─── */
const S = {
  bg:      '#0a0a0a',
  bg2:     '#111111',
  bg3:     '#161616',
  border:  '#1f1f1f',
  border2: '#2a2a2a',
  text:    '#ffffff',
  muted:   '#888888',
  dim:     '#444444',
  pink:    '#e879f9',
  green:   '#0d3d1a',
  greenV:  '#1a5c2e',
  greenL:  '#4ade80',
};

/* ─── Injected CSS — all animations ─── */
const CSS = `
@keyframes sdmq  { from { transform:translateX(0)    } to { transform:translateX(-50%) } }
@keyframes sdmq2 { from { transform:translateX(-50%) } to { transform:translateX(0)    } }
.sdmq  { animation: sdmq  32s linear infinite; display:flex; width:max-content; gap:0; }
.sdmq2 { animation: sdmq2 26s linear infinite; display:flex; width:max-content; gap:0; }

.sdrev { opacity:0; transform:translateY(40px); transition: opacity 0.7s cubic-bezier(.22,1,.36,1), transform 0.7s cubic-bezier(.22,1,.36,1); }
.sdrev.sdin { opacity:1; transform:translateY(0); }
.sdrev.d1 { transition-delay:0.08s }
.sdrev.d2 { transition-delay:0.16s }
.sdrev.d3 { transition-delay:0.24s }
.sdrev.d4 { transition-delay:0.32s }
.sdrev.d5 { transition-delay:0.40s }

@keyframes sdqfade { from { opacity:0; transform:translateY(16px) } to { opacity:1; transform:translateY(0) } }
.sdqin { animation: sdqfade 0.5s cubic-bezier(.22,1,.36,1) both; }

.sdrail { overflow-x:auto; scroll-snap-type:x mandatory; -webkit-overflow-scrolling:touch; scrollbar-width:none; cursor:grab; user-select:none; }
.sdrail::-webkit-scrollbar { display:none; }
.sdrail:active { cursor:grabbing; }
.sdrail-item { scroll-snap-align:start; flex-shrink:0; }

.sdcard-lift { transition: transform 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s cubic-bezier(.22,1,.36,1); }
.sdcard-lift:hover { transform:translateY(-6px); box-shadow: 0 24px 60px rgba(0,0,0,0.5); }
`;

/* ─── IntersectionObserver reveal ─── */
function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('sdin'); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref as React.RefObject<any>;
}

function useMobile() {
  const [m, setM] = useState(false);
  useEffect(() => {
    const fn = () => setM(window.innerWidth < 768);
    fn();
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);
  return m;
}

/* drag-scroll rail */
function useDragScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const down = useRef(false);
  const startX = useRef(0);
  const scrollL = useRef(0);
  const onDown = useCallback((e: React.MouseEvent) => {
    down.current = true;
    startX.current = e.pageX - (ref.current?.offsetLeft ?? 0);
    scrollL.current = ref.current?.scrollLeft ?? 0;
  }, []);
  const onMove = useCallback((e: React.MouseEvent) => {
    if (!down.current || !ref.current) return;
    e.preventDefault();
    const x = e.pageX - ref.current.offsetLeft;
    ref.current.scrollLeft = scrollL.current - (x - startX.current);
  }, []);
  const onUp = useCallback(() => { down.current = false; }, []);
  return { ref, onMouseDown: onDown, onMouseMove: onMove, onMouseUp: onUp, onMouseLeave: onUp };
}

/* ══════════════════════════════════════════════════════
   1. STATS — Sunday: 4 large numbers, borderRight dividers
   ══════════════════════════════════════════════════════ */
function Stats({ m }: { m: boolean }) {
  const ref = useReveal();
  const stats = [
    { val: '3,500+',  lab: 'Restaurants served' },
    { val: '+34%',    lab: 'Avg revenue uplift' },
    { val: '4,200+',  lab: 'Google reviews generated' },
    { val: '€2.1M',   lab: 'Commission saved' },
  ];
  return (
    <section style={{ background: S.bg, borderBottom: `1px solid ${S.border}` }}>
      <div
        ref={ref}
        className="sdrev"
        style={{
          maxWidth: 1200, margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: m ? 'repeat(2,1fr)' : 'repeat(4,1fr)',
        }}
      >
        {stats.map((s, i) => (
          <div
            key={i}
            className={`sdrev d${i+1}`}
            style={{
              padding: m ? '40px 24px' : '52px 40px',
              borderRight: (!m && i < 3) ? `1px solid ${S.border}` : 'none',
              borderBottom: (m && i < 2) ? `1px solid ${S.border}` : 'none',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: m ? 44 : 64, fontWeight: 800, color: S.text, letterSpacing: '-0.05em', lineHeight: 1 }}>{s.val}</div>
            <div style={{ fontSize: 14, color: S.muted, marginTop: 8, letterSpacing: '0.01em' }}>{s.lab}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════
   2. EDITORIAL PROBLEM STATEMENT — Sunday: massive left-aligned headline
   ══════════════════════════════════════════════════════ */
function Problem({ m }: { m: boolean }) {
  const h = useReveal();
  const p = useReveal();
  return (
    <section style={{ background: S.bg, padding: m ? '80px 24px' : '120px 80px' }}>
      <div style={{ maxWidth: 1040, margin: '0 auto' }}>
        <h2
          ref={h}
          className="sdrev"
          style={{ fontSize: m ? 32 : 60, fontWeight: 800, letterSpacing: '-0.042em', color: S.text, lineHeight: 1.08, marginBottom: 28, maxWidth: 820 }}
        >
          Ordering and paying in Malta restaurants used to be broken, expensive, and invisible to Google.
        </h2>
        <p
          ref={p}
          className="sdrev d1"
          style={{ fontSize: m ? 17 : 20, color: S.muted, lineHeight: 1.7, maxWidth: 580 }}
        >
          H360 changed that. ARC AI learns your guests, kills commission leaks, and puts you at the top of every search — automatically.
        </p>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════
   3. PRODUCT CARDS RAIL — Sunday: horizontal drag-scroll, snap
   ══════════════════════════════════════════════════════ */
const PRODUCTS = [
  {
    tag: 'DIRECT ORDERS',
    title: 'The fastest way to take a direct order.',
    body: 'QR-code table ordering and checkout — no commission, no middleman. Guests order and pay in seconds, straight to your till.',
    grad: 'linear-gradient(135deg,#0d3d1a 0%,#1a5c2e 50%,#2a7a40 100%)',
    accent: '#4ade80',
    preview: (
      <div style={{ padding:'18px', background:'rgba(255,255,255,0.06)', borderRadius:14, border:'1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ fontSize:11, color:'#9ca3af', marginBottom:10 }}>Live orders — Table 7</div>
        {[['Braġjoli (×2)','€28.00'],['Lampuki Pie','€16.50'],['Kinnie ×3','€7.50']].map(([item,price],i)=>(
          <div key={i} style={{ display:'flex', justifyContent:'space-between', padding:'8px 0', borderBottom: i<2 ? '1px solid rgba(255,255,255,0.07)' : 'none', fontSize:13, color:'#fff' }}>
            <span>{item}</span><span style={{ fontWeight:700 }}>{price}</span>
          </div>
        ))}
        <div style={{ marginTop:14, padding:'10px', background:'#4ade80', borderRadius:9, textAlign:'center', fontSize:13, fontWeight:700, color:'#051a0a' }}>Pay €52.00 — direct</div>
      </div>
    ),
  },
  {
    tag: 'GOOGLE RANKING',
    title: 'Be the restaurant guests find first.',
    body: 'ARC AI fixes your Google Business profile, generates reviews, and ranks you at the top for "restaurant Malta" — fully automated.',
    grad: 'linear-gradient(135deg,#1a0a2e 0%,#2d1260 50%,#4c1d95 100%)',
    accent: '#a78bfa',
    preview: (
      <div style={{ padding:'18px', background:'rgba(255,255,255,0.06)', borderRadius:14, border:'1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ fontSize:11, color:'#9ca3af', marginBottom:10 }}>Google Maps — Valletta</div>
        {[{r:'#1',n:'Your Restaurant',s:'4.9 ★',hi:true},{r:'#2',n:'Competitor A',s:'4.2 ★',hi:false},{r:'#3',n:'Competitor B',s:'4.0 ★',hi:false}].map((row,i)=>(
          <div key={i} style={{ display:'flex', alignItems:'center', gap:10, padding:'8px 10px', borderRadius:8, background: row.hi ? 'rgba(74,222,128,0.12)' : 'rgba(255,255,255,0.04)', marginBottom:6 }}>
            <span style={{ fontSize:11, fontWeight:700, color: row.hi ? '#4ade80' : '#6b7280', width:22 }}>{row.r}</span>
            <span style={{ flex:1, fontSize:13, color:'#fff', fontWeight: row.hi ? 700 : 400 }}>{row.n}</span>
            <span style={{ fontSize:12, color: row.hi ? '#4ade80' : '#6b7280' }}>{row.s}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    tag: 'GUEST LOYALTY',
    title: 'Turn one-time guests into regulars.',
    body: 'ARC AI learns what your guests love. Right dish, right moment, right offer — sent automatically via WhatsApp or email.',
    grad: 'linear-gradient(135deg,#1a0820 0%,#2d0f3d 50%,#4a1260 100%)',
    accent: '#e879f9',
    preview: (
      <div style={{ padding:'18px', background:'rgba(255,255,255,0.06)', borderRadius:14, border:'1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ fontSize:11, color:'#9ca3af', marginBottom:10 }}>ARC AI message</div>
        <div style={{ background:'rgba(232,121,249,0.15)', border:'1px solid rgba(232,121,249,0.25)', borderRadius:12, padding:'12px 14px', fontSize:13, color:'#fff', lineHeight:1.5, marginBottom:10 }}>
          &ldquo;Hey Maria! It&apos;s been 3 weeks — your favourite Braġjoli is back on the menu. Table for 2 this Friday?&rdquo;
        </div>
        <div style={{ display:'flex', gap:8 }}>
          <div style={{ flex:1, padding:'8px', background:'#e879f9', borderRadius:8, textAlign:'center', fontSize:12, fontWeight:700, color:'#1a0820' }}>Book table</div>
          <div style={{ flex:1, padding:'8px', background:'rgba(255,255,255,0.08)', borderRadius:8, textAlign:'center', fontSize:12, color:'#9ca3af' }}>Maybe later</div>
        </div>
      </div>
    ),
  },
  {
    tag: 'ARC AI AUDIT',
    title: 'Know exactly what is costing you money.',
    body: 'ARC AI scans your Google presence, reviews, visibility, and ordering flow — and shows you exactly what to fix and in what order.',
    grad: 'linear-gradient(135deg,#0a1628 0%,#0f2847 50%,#1a3a6b 100%)',
    accent: '#60a5fa',
    preview: (
      <div style={{ padding:'18px', background:'rgba(255,255,255,0.06)', borderRadius:14, border:'1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ fontSize:12, fontWeight:700, color:'#fff', marginBottom:12 }}>ARC AI audit — Your Restaurant</div>
        {[['Google ranking',38,40,'#4ade80'],['Review velocity',18,40,'#f97316'],['Direct orders',8,20,'#ef4444']].map(([label,score,max,color],i)=>(
          <div key={i} style={{ marginBottom:12 }}>
            <div style={{ display:'flex', justifyContent:'space-between', fontSize:12, color:'#9ca3af', marginBottom:5 }}>
              <span>{label as string}</span><span style={{ fontWeight:600, color:'#fff' }}>{score}/{max}</span>
            </div>
            <div style={{ height:5, background:'rgba(255,255,255,0.08)', borderRadius:99 }}>
              <div style={{ height:'100%', width:`${((score as number)/(max as number))*100}%`, background:color as string, borderRadius:99 }}/>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    tag: 'REVENUE DASHBOARD',
    title: 'Your business. One clear view.',
    body: 'Real-time revenue, cover counts, review trends, and direct order growth — all in one dashboard, across every venue.',
    grad: 'linear-gradient(135deg,#0a1a0a 0%,#0f280f 50%,#1a3d1a 100%)',
    accent: '#4ade80',
    preview: (
      <div style={{ padding:'18px', background:'rgba(255,255,255,0.06)', borderRadius:14, border:'1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ display:'flex', justifyContent:'space-between', marginBottom:16 }}>
          <div>
            <div style={{ fontSize:11, color:'#9ca3af' }}>Revenue this month</div>
            <div style={{ fontSize:28, fontWeight:800, color:'#4ade80', letterSpacing:'-0.04em' }}>€18,420</div>
            <div style={{ fontSize:12, color:'#4ade80', fontWeight:600 }}>↑ +34% vs last month</div>
          </div>
          <div style={{ textAlign:'right' }}>
            <div style={{ fontSize:11, color:'#9ca3af' }}>Direct orders</div>
            <div style={{ fontSize:20, fontWeight:700, color:'#fff' }}>€6,100</div>
            <div style={{ fontSize:12, color:'#4ade80', fontWeight:600 }}>0% commission</div>
          </div>
        </div>
        <div style={{ display:'flex', alignItems:'flex-end', gap:4, height:48 }}>
          {[30,45,38,60,52,70,65,80,75,90,82,95].map((h,i)=>(
            <div key={i} style={{ flex:1, background: i===11 ? '#4ade80' : 'rgba(74,222,128,0.22)', borderRadius:'3px 3px 0 0', height:`${h}%` }}/>
          ))}
        </div>
        <div style={{ fontSize:10, color:'#444', marginTop:5, textAlign:'center' }}>Last 12 months</div>
      </div>
    ),
  },
];

function ProductRail({ m }: { m: boolean }) {
  const titleRef = useReveal();
  const drag = useDragScroll();
  return (
    <section style={{ background: S.bg, paddingTop: m ? 64 : 96 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: m ? '0 24px 40px' : '0 80px 48px' }}>
        <h2
          ref={titleRef}
          className="sdrev"
          style={{ fontSize: m ? 28 : 48, fontWeight: 800, letterSpacing: '-0.04em', color: S.text, marginBottom: 8 }}
        >
          Everything your restaurant needs.
        </h2>
        <p style={{ fontSize: m ? 15 : 18, color: S.muted, marginBottom: 0 }}>
          One platform. Five ways to grow.
        </p>
      </div>
      <div
        {...drag}
        className="sdrail"
        style={{ display:'flex', gap:0, paddingLeft: m ? 24 : 80, paddingBottom: m ? 40 : 64, paddingRight: m ? 24 : 80 }}
      >
        {PRODUCTS.map((p, i) => (
          <div
            key={i}
            className="sdrail-item sdcard-lift"
            style={{
              width: m ? 'min(340px, 86vw)' : 400,
              marginRight: 16,
              borderRadius: 20,
              background: p.grad,
              border: `1px solid rgba(255,255,255,0.08)`,
              padding: m ? 28 : 36,
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
            }}
          >
            <div style={{ display:'inline-flex', padding:'4px 10px', borderRadius:99, background:'rgba(255,255,255,0.10)', width:'fit-content' }}>
              <span style={{ fontSize:10, fontWeight:700, color: p.accent, letterSpacing:'0.1em' }}>{p.tag}</span>
            </div>
            <h3 style={{ fontSize: m ? 20 : 24, fontWeight: 800, color: '#fff', letterSpacing:'-0.03em', lineHeight: 1.15, margin: 0 }}>{p.title}</h3>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.65, margin: 0 }}>{p.body}</p>
            {p.preview}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════
   4. TRUST MARQUEE — Sunday: "Trusted by..." + scrolling name pills
   ══════════════════════════════════════════════════════ */
const RESTAURANTS = ['Noni','Rubino','Ta\' Marija','Bahia','Guze\'','Zen','Palazzo Preca','Terrone','De Mondion','Margo','Rock Salt','Tartarun','Beati Paoli','Trabuxu','Diar il-Bniet'];

function TrustMarquee({ m }: { m: boolean }) {
  const ref = useReveal();
  return (
    <section style={{ background: S.bg, borderTop:`1px solid ${S.border}`, borderBottom:`1px solid ${S.border}`, padding: m ? '64px 0' : '88px 0' }}>
      <div
        ref={ref}
        className="sdrev"
        style={{ textAlign:'center', maxWidth:900, margin:'0 auto', padding: m ? '0 24px 40px' : '0 80px 56px' }}
      >
        <h2 style={{ fontSize: m ? 26 : 42, fontWeight:800, letterSpacing:'-0.04em', color:S.text, marginBottom:10 }}>
          Trusted by Malta&apos;s best restaurants.
        </h2>
        <p style={{ fontSize:16, color:S.muted }}>From casual trattorias to Michelin-recommended dining rooms.</p>
      </div>
      <div style={{ overflow:'hidden', position:'relative' }}>
        <div style={{ position:'absolute', left:0, top:0, bottom:0, width:120, background:`linear-gradient(to right,${S.bg},transparent)`, zIndex:2, pointerEvents:'none' }}/>
        <div style={{ position:'absolute', right:0, top:0, bottom:0, width:120, background:`linear-gradient(to left,${S.bg},transparent)`, zIndex:2, pointerEvents:'none' }}/>
        <div className="sdmq">
          {[...RESTAURANTS,...RESTAURANTS].map((name,i)=>(
            <div key={i} style={{ padding:'10px 22px', border:`1px solid ${S.border2}`, borderRadius:99, background:S.bg2, fontSize:14, fontWeight:600, color:S.text, whiteSpace:'nowrap', margin:'0 8px', flexShrink:0 }}>
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════
   5. TESTIMONIALS — Sunday: 3 large dark quote cards
   ══════════════════════════════════════════════════════ */
const QUOTES = [
  { initials:'JB', name:'Jonathan Brincat', place:'Noni, Valletta',       quote:'We\'ve had more Google reviews in one month with H360 than in the entire previous year. Incredible.' },
  { initials:'MS', name:'Maria Schembri',   place:'Ta\' Marija, Mdina',   quote:'When we stopped paying Wolt, our direct revenue went up 41% in 3 months. H360 made it effortless.' },
  { initials:'AC', name:'Antoine Camilleri',place:'Rubino, Valletta',      quote:'H360 gives our guests a faster, easier checkout. The time saved lets the team focus on hospitality.' },
];

function Testimonials({ m }: { m: boolean }) {
  const ref = useReveal();
  return (
    <section style={{ background: S.bg, padding: m ? '72px 24px' : '104px 80px' }}>
      <div
        ref={ref}
        className="sdrev"
        style={{ maxWidth: 1200, margin: '0 auto' }}
      >
        <h2 style={{ fontSize: m ? 26 : 40, fontWeight:800, letterSpacing:'-0.04em', color:S.text, marginBottom: m ? 36 : 56 }}>
          What operators say.
        </h2>
        <div style={{ display:'grid', gridTemplateColumns: m ? '1fr' : 'repeat(3,1fr)', gap:20 }}>
          {QUOTES.map((q,i) => (
            <div
              key={i}
              className={`sdrev sdcard-lift d${i+1}`}
              style={{ padding: m ? '28px 24px' : '36px 32px', border:`1px solid ${S.border2}`, borderRadius:20, background:S.bg2 }}
            >
              <div style={{ display:'flex', alignItems:'center', gap:14, marginBottom:22 }}>
                <div style={{ width:48, height:48, borderRadius:99, background:`linear-gradient(135deg,${S.green},${S.greenV})`, display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontWeight:800, fontSize:16, flexShrink:0, letterSpacing:'-0.02em' }}>
                  {q.initials}
                </div>
                <div>
                  <div style={{ fontSize:14, fontWeight:700, color:S.text }}>{q.name}</div>
                  <div style={{ fontSize:12, color:S.muted, marginTop:2 }}>{q.place}</div>
                </div>
              </div>
              <p style={{ fontSize: m ? 15 : 16, color:'rgba(255,255,255,0.82)', lineHeight:1.65, fontStyle:'italic', margin:0 }}>
                &ldquo;{q.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════
   6. VALUE CARDS — Sunday: FOR OPERATORS / FOR STAFF / FOR GUESTS
      Tall gradient cards with glow orbs
   ══════════════════════════════════════════════════════ */
function ValueCard({ label, title, body, grad, glow, items, reveal }: {
  label:string; title:string; body:string; grad:string; glow:string; items:string[]; reveal: React.RefObject<any>;
}) {
  const m = useMobile();
  return (
    <div
      ref={reveal}
      className="sdrev sdcard-lift"
      style={{ position:'relative', borderRadius:22, overflow:'hidden', background:grad, border:`1px solid rgba(255,255,255,0.06)`, padding: m ? '36px 28px' : '48px 40px', minHeight: m ? 340 : 420 }}
    >
      <div style={{ position:'absolute', top:-60, right:-60, width:240, height:240, borderRadius:99, background:glow, filter:'blur(48px)', pointerEvents:'none', opacity:0.6 }}/>
      <div style={{ position:'absolute', bottom:-80, left:-40, width:200, height:200, borderRadius:99, background:glow, filter:'blur(64px)', pointerEvents:'none', opacity:0.3 }}/>
      <div style={{ position:'relative' }}>
        <div style={{ display:'inline-flex', padding:'4px 12px', borderRadius:99, background:'rgba(255,255,255,0.08)', marginBottom:22, border:'1px solid rgba(255,255,255,0.1)' }}>
          <span style={{ fontSize:10, fontWeight:700, color:'rgba(255,255,255,0.6)', letterSpacing:'0.1em' }}>{label}</span>
        </div>
        <h3 style={{ fontSize: m ? 22 : 28, fontWeight:800, color:'#fff', letterSpacing:'-0.035em', lineHeight:1.15, marginBottom:14, maxWidth:460 }}>{title}</h3>
        <p style={{ fontSize:14, color:'rgba(255,255,255,0.55)', lineHeight:1.65, marginBottom:28 }}>{body}</p>
        <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:10 }}>
          {items.map((item,i)=>(
            <li key={i} style={{ display:'flex', alignItems:'flex-start', gap:10, fontSize:14, color:'rgba(255,255,255,0.75)' }}>
              <span style={{ color:'rgba(255,255,255,0.4)', flexShrink:0, marginTop:1 }}>→</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ValueSection({ m }: { m: boolean }) {
  const hRef = useReveal();
  const r0 = useReveal();
  const r1 = useReveal();
  const r2 = useReveal();
  return (
    <section style={{ background: S.bg, padding: m ? '72px 24px' : '104px 80px', borderTop:`1px solid ${S.border}` }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h2 ref={hRef} className="sdrev" style={{ fontSize: m ? 28 : 52, fontWeight:800, letterSpacing:'-0.042em', color:S.text, marginBottom: m ? 48 : 72 }}>
          Every visit now drives value.
        </h2>
        <div style={{ display:'grid', gridTemplateColumns: m ? '1fr' : 'repeat(3,1fr)', gap:20 }}>
          <ValueCard
            reveal={r0}
            label="FOR OPERATORS"
            title="Faster table turns, more direct revenue, zero Wolt fees."
            body="H360 eliminates commission payments, accelerates service with instant QR ordering, and gives you full data on every cover."
            grad="linear-gradient(150deg,#0a1628 0%,#0f2040 50%,#1a3460 100%)"
            glow="#1d4ed8"
            items={['Zero commission on direct orders','Real-time revenue dashboard','Automated Google review generation']}
          />
          <ValueCard
            reveal={r1}
            label="FOR STAFF"
            title="Higher tips, smoother shifts, no chasing the bill."
            body="ARC AI-optimised tip suggestions boost staff earnings by an average of 30%. No more awkward moments with card machines."
            grad="linear-gradient(150deg,#1a0a2e 0%,#2d1260 50%,#3d1880 100%)"
            glow="#7c3aed"
            items={['AI-optimised tip suggestions','Instant split-bill QR payments','Less time waiting, more time serving']}
          />
          <ValueCard
            reveal={r2}
            label="FOR GUESTS"
            title="Fast, simple, personalised checkout they'll remember."
            body="Pay by QR in 10 seconds, split the bill without drama, and leave feeling valued. Every visit turns into a 5-star review."
            grad="linear-gradient(150deg,#0d3d1a 0%,#1a5c2e 50%,#2a7a40 100%)"
            glow="#16a34a"
            items={['Pay in 10 seconds — no app needed','Split bill instantly between guests','Personalised loyalty offers via WhatsApp']}
          />
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════
   7. ECOSYSTEM — Sunday: left headline + integration logos grid
   ══════════════════════════════════════════════════════ */
const INTEGRATIONS = [
  { name:'Lightspeed', color:'#ff5c35' },
  { name:'TheFork',    color:'#01a55e' },
  { name:'Wolt',       color:'#009de0' },
  { name:'Bolt Food',  color:'#34d186' },
  { name:'Google',     color:'#4285f4' },
  { name:'Nory',       color:'#7c3aed' },
  { name:'Stripe',     color:'#635bff' },
  { name:'WhatsApp',   color:'#25d366' },
];

function Ecosystem({ m }: { m: boolean }) {
  const lRef = useReveal();
  const rRef = useReveal();
  return (
    <section style={{ background: S.bg2, borderTop:`1px solid ${S.border}`, borderBottom:`1px solid ${S.border}`, padding: m ? '72px 24px' : '104px 80px' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', display: m ? 'flex' : 'grid', flexDirection: m ? 'column' : undefined, gridTemplateColumns:'1fr 1fr', gap: m ? 48 : 80, alignItems:'center' }}>
        <div ref={lRef} className="sdrev">
          <div style={{ display:'inline-flex', padding:'4px 12px', borderRadius:99, background:'rgba(255,255,255,0.05)', border:`1px solid ${S.border2}`, marginBottom:24 }}>
            <span style={{ fontSize:10, fontWeight:700, color:S.muted, letterSpacing:'0.1em' }}>WORKS WITH YOUR SETUP</span>
          </div>
          <h2 style={{ fontSize: m ? 28 : 42, fontWeight:800, letterSpacing:'-0.04em', color:S.text, lineHeight:1.12, marginBottom:18 }}>
            We don&apos;t pile on more tech. We amplify what already works.
          </h2>
          <p style={{ fontSize: m ? 15 : 17, color:S.muted, lineHeight:1.7, marginBottom:32 }}>
            H360 connects with your existing POS, delivery, and reservation tools — giving you one unified view with zero rip-and-replace.
          </p>
          <a href="/h360/demo" style={{ display:'inline-flex', padding:'12px 26px', background:S.text, color:S.bg, borderRadius:99, fontSize:14, fontWeight:700, letterSpacing:'-0.01em', textDecoration:'none', cursor:'pointer' }}>
            See all integrations
          </a>
        </div>
        <div ref={rRef} className="sdrev d1">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:12 }}>
            {INTEGRATIONS.map((int,i)=>(
              <div
                key={i}
                className="sdcard-lift"
                style={{ padding:'16px 12px', border:`1px solid ${S.border2}`, borderRadius:14, background:S.bg, textAlign:'center', display:'flex', flexDirection:'column', alignItems:'center', gap:8 }}
              >
                <div style={{ width:10, height:10, borderRadius:99, background:int.color }}/>
                <span style={{ fontSize:11, fontWeight:600, color:S.text, lineHeight:1.2 }}>{int.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════
   8. QUOTE CAROUSEL — Sunday: big crossfade quote, prev/next, marquee title
   ══════════════════════════════════════════════════════ */
const BIG_QUOTES = [
  { quote:'H360 is the only platform that actually increased our revenue without asking us to change everything. It just works.', name:'Jonathan Brincat', place:'Noni, Valletta', stars:5 },
  { quote:'In 6 weeks we went from 38 Google reviews to 340. Our visibility on maps is completely different. Guests now find us first.', name:'Maria Schembri', place:'Ta\' Marija, Mdina', stars:5 },
  { quote:'I was spending €3,800 a month on Wolt commissions. Now I spend €290 on H360 and keep the rest. The maths is obvious.', name:'Antoine Camilleri', place:'Rubino, Valletta', stars:5 },
  { quote:'The staff love it because tips went up. The guests love it because checkout takes 10 seconds. I love it because it pays for itself.', name:'Sandra Farrugia', place:'Rock Salt, St Julian\'s', stars:5 },
];

const MARQUEE_WORDS = ['More revenue','Zero commission','More reviews','More regulars','More direct orders','Better Google ranking'];

function QuoteCarousel({ m }: { m: boolean }) {
  const [idx, setIdx] = useState(0);
  const [key, setKey] = useState(0);
  const hRef = useReveal();
  const qRef = useReveal();

  const go = useCallback((dir: 1|-1) => {
    setIdx(i => (i + dir + BIG_QUOTES.length) % BIG_QUOTES.length);
    setKey(k => k + 1);
  }, []);

  const q = BIG_QUOTES[idx];

  return (
    <section style={{ background: S.bg, borderTop:`1px solid ${S.border}`, padding: m ? '72px 0' : '104px 0', overflow:'hidden' }}>
      {/* Marquee header */}
      <div style={{ overflow:'hidden', marginBottom: m ? 56 : 80, position:'relative' }}>
        <div style={{ position:'absolute', left:0, top:0, bottom:0, width:80, background:`linear-gradient(to right,${S.bg},transparent)`, zIndex:2, pointerEvents:'none' }}/>
        <div style={{ position:'absolute', right:0, top:0, bottom:0, width:80, background:`linear-gradient(to left,${S.bg},transparent)`, zIndex:2, pointerEvents:'none' }}/>
        <div className="sdmq2" style={{ gap:0 }}>
          {[...MARQUEE_WORDS,...MARQUEE_WORDS,...MARQUEE_WORDS,...MARQUEE_WORDS].map((word,i)=>(
            <span
              key={i}
              style={{
                fontSize: m ? 32 : 56,
                fontWeight:800,
                letterSpacing:'-0.04em',
                color: i%2===0 ? S.text : 'transparent',
                WebkitTextStroke: i%2===0 ? undefined : `1px ${S.border2}`,
                paddingRight: m ? 36 : 56,
                whiteSpace:'nowrap',
                flexShrink:0,
              }}
            >
              {word}
            </span>
          ))}
        </div>
      </div>

      {/* Quote */}
      <div style={{ maxWidth:900, margin:'0 auto', padding: m ? '0 24px' : '0 80px' }}>
        <div ref={hRef} className="sdrev" style={{ marginBottom: m ? 32 : 48 }}>
          <div style={{ display:'flex', gap: m ? 12 : 8, marginBottom: m ? 32 : 48 }}>
            {BIG_QUOTES.map((_,i)=>(
              <button
                key={i}
                onClick={()=>{ setIdx(i); setKey(k=>k+1); }}
                style={{ width: i===idx ? 28 : 8, height:8, borderRadius:99, background: i===idx ? S.text : S.border2, border:'none', cursor:'pointer', transition:'all 0.35s ease', padding:0 }}
              />
            ))}
          </div>
        </div>

        <div ref={qRef} key={key} className="sdrev sdin">
          <p style={{ fontSize: m ? 22 : 40, fontWeight:700, color:S.text, letterSpacing:'-0.03em', lineHeight:1.22, marginBottom: m ? 28 : 40, fontStyle:'italic' }}>
            &ldquo;{q.quote}&rdquo;
          </p>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
            <div style={{ display:'flex', alignItems:'center', gap:14 }}>
              <div style={{ width:44, height:44, borderRadius:99, background:`linear-gradient(135deg,${S.green},${S.greenV})`, display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontWeight:700, fontSize:14, flexShrink:0 }}>
                {q.name.split(' ').map(w=>w[0]).join('')}
              </div>
              <div>
                <div style={{ fontSize:14, fontWeight:700, color:S.text }}>{q.name}</div>
                <div style={{ fontSize:12, color:S.muted }}>{q.place}</div>
              </div>
            </div>
            <div style={{ display:'flex', gap:10 }}>
              <button onClick={()=>go(-1)} style={{ width:44, height:44, borderRadius:99, border:`1px solid ${S.border2}`, background:'transparent', color:S.text, fontSize:18, cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center' }}>←</button>
              <button onClick={()=>go(1)} style={{ width:44, height:44, borderRadius:99, border:`1px solid ${S.border2}`, background:'transparent', color:S.text, fontSize:18, cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center' }}>→</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════
   9. LOYALTY / GUEST PLATFORM — Sunday: dark green full-bleed
   ══════════════════════════════════════════════════════ */
function Loyalty({ m }: { m: boolean }) {
  const ref = useReveal();
  return (
    <section style={{ background:'#0a1f10', borderTop:`1px solid rgba(255,255,255,0.05)` }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding: m ? '80px 24px' : '120px 80px', display: m ? 'flex' : 'grid', flexDirection: m ? 'column' : undefined, gridTemplateColumns:'1fr 1fr', gap: m ? 48 : 80, alignItems:'center' }}>
        <div ref={ref} className="sdrev">
          <div style={{ display:'inline-flex', padding:'4px 12px', borderRadius:99, background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)', marginBottom:24, gap:8, alignItems:'center' }}>
            <span style={{ fontSize:10, fontWeight:700, color:'rgba(255,255,255,0.5)', letterSpacing:'0.1em' }}>GUEST PLATFORM</span>
            <span style={{ fontSize:10, fontWeight:700, color:'#4ade80', background:'rgba(74,222,128,0.15)', padding:'1px 7px', borderRadius:99 }}>NEW</span>
          </div>
          <h2 style={{ fontSize: m ? 32 : 52, fontWeight:800, letterSpacing:'-0.042em', color:'#ffffff', lineHeight:1.1, marginBottom:18 }}>
            From first visit<br/>to forever fan.
          </h2>
          <p style={{ fontSize: m ? 15 : 18, color:'rgba(255,255,255,0.55)', lineHeight:1.7, marginBottom:36, maxWidth:480 }}>
            With H360, ARC AI learns what your guests love — recommending the right dish, the right offer, the right moment. Guests order, pay, and come back. A virtuous circle of loyalty and revenue.
          </p>
          <a href="/h360/demo" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'13px 28px', background:'#ffffff', color:'#0a1f10', borderRadius:99, fontSize:15, fontWeight:700, letterSpacing:'-0.01em', textDecoration:'none', cursor:'pointer' }}>
            Discover
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
        <div className="sdrev d1" style={{ display:'flex', flexDirection:'column', gap:16 }}>
          {[
            { label:'Repeat visit rate', val:'+68%', color:'#4ade80' },
            { label:'Avg spend per guest', val:'+22%', color:'#4ade80' },
            { label:'WhatsApp open rate', val:'94%', color:'#facc15' },
            { label:'Churn reduction', val:'-41%', color:'#4ade80' },
          ].map((stat,i)=>(
            <div key={i} style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'18px 24px', borderRadius:14, background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.07)' }}>
              <span style={{ fontSize:14, color:'rgba(255,255,255,0.6)' }}>{stat.label}</span>
              <span style={{ fontSize:22, fontWeight:800, color:stat.color, letterSpacing:'-0.03em' }}>{stat.val}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════
   10. SUPPORT STRIP — Sunday: 3 support pillars
   ══════════════════════════════════════════════════════ */
function SupportStrip({ m }: { m: boolean }) {
  const ref = useReveal();
  return (
    <section style={{ background: S.bg, borderTop:`1px solid ${S.border}`, padding: m ? '64px 24px' : '88px 80px' }}>
      <div ref={ref} className="sdrev" style={{ maxWidth:1200, margin:'0 auto', display:'grid', gridTemplateColumns: m ? '1fr' : 'repeat(3,1fr)', gap: m ? 36 : 48 }}>
        {[
          { icon:'⚡', label:'24-Hour Setup', body:'We set up your H360 account, configure your menu, and train your team — all within 24 hours of signing.' },
          { icon:'🛡', label:'Malta-Local Support', body:'Dedicated Malta-based support team available 7 days a week. No ticket queues, no overseas call centres.' },
          { icon:'📈', label:'Guaranteed Results', body:'If you don\'t see measurable revenue growth within 90 days, we refund your entire setup fee. No questions.' },
        ].map((item,i)=>(
          <div key={i} className={`sdrev d${i+1}`} style={{ display:'flex', flexDirection:'column', gap:14 }}>
            <span style={{ fontSize:32 }}>{item.icon}</span>
            <div style={{ fontSize: m ? 18 : 20, fontWeight:800, color:S.text, letterSpacing:'-0.03em' }}>{item.label}</div>
            <p style={{ fontSize:14, color:S.muted, lineHeight:1.65, margin:0 }}>{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════
   11. FINAL CTA — Sunday: dark, centred, email pill
   ══════════════════════════════════════════════════════ */
function FinalCTA({ m }: { m: boolean }) {
  const ref = useReveal();
  return (
    <section style={{ background: S.bg, borderTop:`1px solid ${S.border}`, padding: m ? '88px 24px 120px' : '120px 80px 160px' }}>
      <div ref={ref} className="sdrev" style={{ maxWidth:720, margin:'0 auto', textAlign:'center' }}>
        <h2 style={{ fontSize: m ? 36 : 64, fontWeight:800, letterSpacing:'-0.045em', color:S.text, lineHeight:1.06, marginBottom:18 }}>
          Save your revenue.<br/>Start today.
        </h2>
        <p style={{ fontSize: m ? 16 : 19, color:S.muted, lineHeight:1.65, marginBottom:40, maxWidth:480, margin:'0 auto 40px' }}>
          An ARC AI expert will reach out to you today. Ready to grow with H360?
        </p>
        <div style={{ display:'flex', alignItems:'center', background:'#111', border:`1.5px solid ${S.border2}`, borderRadius:14, padding:'6px 6px 6px 18px', maxWidth:480, margin:'0 auto 16px', boxShadow:'0 0 0 1px rgba(255,255,255,0.04)' }}>
          <input
            type="text"
            placeholder="Your restaurant name"
            style={{ flex:1, border:'none', outline:'none', fontSize:15, color:S.text, background:'transparent', fontFamily:'inherit' }}
            data-testid="input-h360-cta-search"
          />
          <a href="/h360/demo"
            style={{ padding:'11px 22px', background:S.text, color:S.bg, borderRadius:10, fontSize:14, fontWeight:700, cursor:'pointer', whiteSpace:'nowrap', display:'inline-block', letterSpacing:'-0.01em', textDecoration:'none' }}
            data-testid="button-h360-cta"
          >
            Get a free demo
          </a>
        </div>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:6, fontSize:12, color:S.dim }}>
          <div style={{ width:14, height:14, borderRadius:3, background:'rgba(255,255,255,0.15)', display:'flex', alignItems:'center', justifyContent:'center' }}>
            <span style={{ color:'#fff', fontSize:7, fontWeight:800 }}>A</span>
          </div>
          Powered by ARC AI · No commitment needed
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════
   ROOT EXPORT
   ══════════════════════════════════════════════════════ */
export default function BelowHero() {
  const m = useMobile();
  return (
    <div style={{ fontFamily:'"Inter",system-ui,-apple-system,Arial,sans-serif', background: S.bg, color: S.text }}>
      <style>{CSS}</style>
      <Stats        m={m} />
      <Problem      m={m} />
      <ProductRail  m={m} />
      <TrustMarquee m={m} />
      <Testimonials m={m} />
      <ValueSection m={m} />
      <Ecosystem    m={m} />
      <QuoteCarousel m={m} />
      <Loyalty      m={m} />
      <SupportStrip m={m} />
      <FinalCTA     m={m} />
    </div>
  );
}
