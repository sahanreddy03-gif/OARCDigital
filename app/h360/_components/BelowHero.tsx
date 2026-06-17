'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

/* ─── Sunday exact tokens ─── */
const S = {
  bg:      '#0a0a0a',
  card:    '#141414',
  card2:   '#1c1c1e',
  border:  '#262626',
  text:    '#ffffff',
  muted:   '#888888',
  dim:     '#444444',
  pink:    '#e879f9',
  green:   '#1a5c2e',
};

const CSS = `
@keyframes sdmq  { from{transform:translateX(0)}     to{transform:translateX(-50%)} }
@keyframes sdmq2 { from{transform:translateX(-50%)}  to{transform:translateX(0)}    }
.sdmq  { animation:sdmq  34s linear infinite; display:flex; width:max-content; }
.sdmq2 { animation:sdmq2 26s linear infinite; display:flex; width:max-content; }

.sdrev { opacity:0; transform:translateY(36px); transition:opacity 0.72s cubic-bezier(.22,1,.36,1), transform 0.72s cubic-bezier(.22,1,.36,1); }
.sdrev.sdin { opacity:1; transform:translateY(0); }
.sdrev.d1{transition-delay:.07s}.sdrev.d2{transition-delay:.14s}.sdrev.d3{transition-delay:.21s}.sdrev.d4{transition-delay:.28s}

@keyframes sdqin { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
.sdqactive { animation:sdqin 0.48s cubic-bezier(.22,1,.36,1) both; }

.sdrail { overflow-x:auto; scroll-snap-type:x mandatory; -webkit-overflow-scrolling:touch; scrollbar-width:none; cursor:grab; user-select:none; }
.sdrail::-webkit-scrollbar { display:none; }
.sdrail:active { cursor:grabbing; }
.sdrail-snap { scroll-snap-align:start; flex-shrink:0; }
`;

function useReveal(threshold = 0.08) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
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
    fn(); window.addEventListener('resize', fn); return () => window.removeEventListener('resize', fn);
  }, []);
  return m;
}

function useDragScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const state = useRef({ down:false, startX:0, scrollL:0 });
  const onDown  = (e:React.MouseEvent) => { state.current = { down:true, startX:e.pageX-(ref.current?.offsetLeft??0), scrollL:ref.current?.scrollLeft??0 }; };
  const onMove  = (e:React.MouseEvent) => { if (!state.current.down||!ref.current) return; e.preventDefault(); ref.current.scrollLeft = state.current.scrollL-(e.pageX-ref.current.offsetLeft-state.current.startX); };
  const onUp    = () => { state.current.down = false; };
  return { ref, onMouseDown:onDown, onMouseMove:onMove, onMouseUp:onUp, onMouseLeave:onUp };
}

/* ══════════════════════════════════════════════════════
   1. STATS — 4 large numbers, borderRight dividers
   ══════════════════════════════════════════════════════ */
function Stats({ m }: { m:boolean }) {
  const ref = useReveal();
  const stats = [
    { val:'3,500+', lab:'Restaurants' },
    { val:'+34%',   lab:'Avg revenue uplift' },
    { val:'4,200+', lab:'Reviews generated' },
    { val:'€2.1M',  lab:'Commission saved' },
  ];
  return (
    <section style={{ background:S.bg, borderBottom:`1px solid ${S.border}` }}>
      <div ref={ref} className="sdrev" style={{ maxWidth:1200, margin:'0 auto', display:'grid', gridTemplateColumns:m?'repeat(2,1fr)':'repeat(4,1fr)' }}>
        {stats.map((s,i)=>(
          <div key={i} className={`sdrev d${i+1}`} style={{ padding:m?'40px 24px':'56px 40px', borderRight:(!m&&i<3)?`1px solid ${S.border}`:'none', borderBottom:(m&&i<2)?`1px solid ${S.border}`:'none', textAlign:'center' }}>
            <div style={{ fontSize:m?48:68, fontWeight:800, color:S.text, letterSpacing:'-0.05em', lineHeight:1 }}>{s.val}</div>
            <div style={{ fontSize:14, color:S.muted, marginTop:8 }}>{s.lab}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════
   2. PROBLEM STATEMENT — Sunday exact: big editorial headline, NO heading size
      "Paying in restaurants used to be slow, awkward and frustrating."
   ══════════════════════════════════════════════════════ */
function Problem({ m }: { m:boolean }) {
  const h = useReveal(); const p = useReveal();
  return (
    <section style={{ background:S.bg, padding:m?'80px 24px':'120px 80px' }}>
      <div style={{ maxWidth:1040, margin:'0 auto' }}>
        <h2 ref={h} className="sdrev" style={{ fontSize:m?32:58, fontWeight:800, letterSpacing:'-0.04em', color:S.text, lineHeight:1.1, marginBottom:22, maxWidth:780 }}>
          Ordering and paying in Malta restaurants used to be slow, expensive, and invisible to Google.
        </h2>
        <p ref={p} className="sdrev d1" style={{ fontSize:m?17:20, color:S.muted, lineHeight:1.7, maxWidth:600 }}>
          H360 changed that with ARC AI-powered tools that learn, adapt, and create value at every step. On-site or online, dine-in or takeaway.
        </p>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════
   3. PRODUCT CARDS RAIL — Sunday: dark #1c1c1e cards, device images, NO color gradients
      Cards: Smart Handheld / Digital Bill / Hybrid / QR / etc.
   ══════════════════════════════════════════════════════ */

/* SVG device mockup for each card — dark, minimal, Sunday-style */
function DeviceMockupOrders() {
  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', justifyContent:'flex-end', padding:'0 0 4px' }}>
      <div style={{ background:'#111', borderRadius:14, border:`1px solid #2a2a2a`, overflow:'hidden' }}>
        <div style={{ padding:'14px 16px 10px', borderBottom:'1px solid #2a2a2a', fontSize:11, color:'#666' }}>Live orders — Table 7</div>
        {[['Braġjoli (×2)','€28.00'],['Lampuki Pie','€16.50'],['Kinnie ×3','€7.50']].map(([item,price],i)=>(
          <div key={i} style={{ display:'flex', justifyContent:'space-between', padding:'9px 16px', borderBottom:i<2?'1px solid #2a2a2a':'none', fontSize:13 }}>
            <span style={{ color:'#ccc' }}>{item}</span><span style={{ fontWeight:600, color:'#fff' }}>{price}</span>
          </div>
        ))}
        <div style={{ margin:'10px 16px 14px', padding:'10px', background:'#4ade80', borderRadius:9, textAlign:'center', fontSize:13, fontWeight:700, color:'#051a0a' }}>Pay €52.00 — direct</div>
      </div>
    </div>
  );
}
function DeviceMockupGoogle() {
  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', justifyContent:'flex-end', padding:'0 0 4px' }}>
      <div style={{ background:'#111', borderRadius:14, border:`1px solid #2a2a2a`, overflow:'hidden' }}>
        <div style={{ padding:'12px 16px 10px', borderBottom:'1px solid #2a2a2a', fontSize:11, color:'#666' }}>Google Maps — Valletta</div>
        {[{r:'#1',n:'Your Restaurant',s:'4.9 ★',hi:true},{r:'#2',n:'Competitor A',s:'4.2 ★',hi:false},{r:'#3',n:'Competitor B',s:'4.0 ★',hi:false}].map((row,i)=>(
          <div key={i} style={{ display:'flex', alignItems:'center', gap:10, padding:'9px 16px', borderBottom:i<2?'1px solid #2a2a2a':'none', background:row.hi?'rgba(74,222,128,0.07)':'transparent' }}>
            <span style={{ fontSize:11, fontWeight:700, color:row.hi?'#4ade80':'#555', width:22 }}>{row.r}</span>
            <span style={{ flex:1, fontSize:13, color:'#fff', fontWeight:row.hi?700:400 }}>{row.n}</span>
            <span style={{ fontSize:12, color:row.hi?'#4ade80':'#555' }}>{row.s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
function DeviceMockupLoyalty() {
  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', justifyContent:'flex-end', padding:'0 0 4px' }}>
      <div style={{ background:'#111', borderRadius:14, border:`1px solid #2a2a2a`, overflow:'hidden', padding:'14px 16px' }}>
        <div style={{ fontSize:11, color:'#666', marginBottom:10 }}>ARC AI — guest message</div>
        <div style={{ background:'rgba(255,255,255,0.06)', borderRadius:10, padding:'12px', fontSize:13, color:'#ddd', lineHeight:1.5, marginBottom:10 }}>
          &ldquo;Hey Maria! Your favourite Braġjoli is back. Table for 2 this Friday?&rdquo;
        </div>
        <div style={{ display:'flex', gap:8 }}>
          <div style={{ flex:1, padding:'8px', background:'#fff', borderRadius:7, textAlign:'center', fontSize:12, fontWeight:700, color:'#000' }}>Book table</div>
          <div style={{ flex:1, padding:'8px', background:'#1f1f1f', borderRadius:7, textAlign:'center', fontSize:12, color:'#666' }}>Maybe later</div>
        </div>
      </div>
    </div>
  );
}
function DeviceMockupDashboard() {
  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', justifyContent:'flex-end', padding:'0 0 4px' }}>
      <div style={{ background:'#111', borderRadius:14, border:`1px solid #2a2a2a`, padding:'16px' }}>
        <div style={{ display:'flex', justifyContent:'space-between', marginBottom:14 }}>
          <div><div style={{ fontSize:11, color:'#666' }}>This month</div><div style={{ fontSize:26, fontWeight:800, color:'#fff', letterSpacing:'-0.04em' }}>€18,420</div><div style={{ fontSize:12, color:'#4ade80', fontWeight:600 }}>↑ +34%</div></div>
          <div style={{ textAlign:'right' }}><div style={{ fontSize:11, color:'#666' }}>Commission</div><div style={{ fontSize:18, fontWeight:700, color:'#4ade80' }}>€0</div><div style={{ fontSize:11, color:'#666' }}>saved this month</div></div>
        </div>
        <div style={{ display:'flex', alignItems:'flex-end', gap:3, height:40 }}>
          {[28,42,36,55,48,66,60,76,70,86,78,92].map((h,i)=>(
            <div key={i} style={{ flex:1, background:i===11?'#fff':'rgba(255,255,255,0.15)', borderRadius:'2px 2px 0 0', height:`${h}%` }}/>
          ))}
        </div>
      </div>
    </div>
  );
}
function DeviceMockupAudit() {
  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', justifyContent:'flex-end', padding:'0 0 4px' }}>
      <div style={{ background:'#111', borderRadius:14, border:`1px solid #2a2a2a`, padding:'16px' }}>
        <div style={{ fontSize:12, fontWeight:700, color:'#fff', marginBottom:14 }}>ARC AI audit — Your Restaurant</div>
        {[['Google ranking',95,'#4ade80'],['Review velocity',45,'#f97316'],['Direct orders',20,'#ef4444']].map(([label,pct,color],i)=>(
          <div key={i} style={{ marginBottom:12 }}>
            <div style={{ display:'flex', justifyContent:'space-between', fontSize:12, color:'#666', marginBottom:5 }}>
              <span style={{ color:'#aaa' }}>{label as string}</span>
            </div>
            <div style={{ height:4, background:'#222', borderRadius:99 }}>
              <div style={{ height:'100%', width:`${pct}%`, background:color as string, borderRadius:99 }}/>
            </div>
          </div>
        ))}
        <div style={{ padding:'10px 12px', background:'rgba(255,255,255,0.04)', border:'1px solid #2a2a2a', borderRadius:9, fontSize:13, color:'#fff', textAlign:'center', marginTop:4 }}>
          Fix 3 issues → unlock €1,240/mo
        </div>
      </div>
    </div>
  );
}

const CARDS = [
  { tag:'DIRECT ORDERS',      title:'The fastest way to take a direct order.',         sub:'Zero commission. Guests order and pay in seconds.',       device:<DeviceMockupOrders/> },
  { tag:'GOOGLE RANKING',     title:'Be the restaurant guests find first.',            sub:'ARC AI ranks you #1 for "restaurant Malta" automatically.',device:<DeviceMockupGoogle/> },
  { tag:'GUEST LOYALTY',      title:'Turn one-time guests into regulars.',             sub:'Right dish, right moment, right offer — automated.',       device:<DeviceMockupLoyalty/> },
  { tag:'REVENUE DASHBOARD',  title:'Your business. One clear view.',                  sub:'Real-time revenue, tips, and review trends.',              device:<DeviceMockupDashboard/> },
  { tag:'ARC AI AUDIT',       title:'Know exactly what is costing you money.',        sub:'Scan, fix, and grow — in the right order.',               device:<DeviceMockupAudit/> },
];

function ProductRail({ m }: { m:boolean }) {
  const titleRef = useReveal();
  const drag = useDragScroll();
  return (
    <section style={{ background:S.bg, paddingTop:m?64:96, borderTop:`1px solid ${S.border}` }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:m?'0 24px 36px':'0 80px 48px' }}>
        <h2 ref={titleRef} className="sdrev" style={{ fontSize:m?28:46, fontWeight:800, letterSpacing:'-0.04em', color:S.text, marginBottom:6 }}>
          Everything your restaurant needs.
        </h2>
        <p style={{ fontSize:m?15:18, color:S.muted }}>One platform. Five ways to grow.</p>
      </div>
      <div {...drag} className="sdrail" style={{ display:'flex', gap:16, paddingLeft:m?24:80, paddingBottom:m?40:64, paddingRight:m?24:80 }}>
        {CARDS.map((c,i)=>(
          <div key={i} className="sdrail-snap" style={{ width:m?'min(320px,84vw)':360, background:S.card2, borderRadius:20, border:`1px solid ${S.border}`, padding:28, display:'flex', flexDirection:'column', gap:16, minHeight:m?420:460 }}>
            <div style={{ display:'inline-flex', padding:'4px 10px', borderRadius:99, border:`1px solid ${S.border}`, width:'fit-content' }}>
              <span style={{ fontSize:10, fontWeight:700, color:S.muted, letterSpacing:'0.1em' }}>{c.tag}</span>
            </div>
            <h3 style={{ fontSize:m?19:22, fontWeight:800, color:S.text, letterSpacing:'-0.03em', lineHeight:1.18, margin:0 }}>{c.title}</h3>
            <p style={{ fontSize:13, color:S.muted, lineHeight:1.6, margin:0 }}>{c.sub}</p>
            {c.device}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════
   4. TRUST MARQUEE
   ══════════════════════════════════════════════════════ */
const RESTO = ['Noni','Rubino','Ta\' Marija','Bahia','Guze\'','Zen','Palazzo Preca','Terrone','De Mondion','Margo','Rock Salt','Tartarun','Beati Paoli','Trabuxu'];

function TrustMarquee({ m }: { m:boolean }) {
  const ref = useReveal();
  return (
    <section style={{ background:S.bg, borderTop:`1px solid ${S.border}`, borderBottom:`1px solid ${S.border}`, padding:m?'64px 0':'88px 0' }}>
      <div ref={ref} className="sdrev" style={{ textAlign:'center', maxWidth:900, margin:'0 auto', padding:m?'0 24px 40px':'0 80px 56px' }}>
        <h2 style={{ fontSize:m?26:40, fontWeight:800, letterSpacing:'-0.04em', color:S.text, marginBottom:10 }}>Trusted by Malta&apos;s best restaurants.</h2>
        <p style={{ fontSize:16, color:S.muted }}>From casual trattorias to Michelin-recommended dining rooms.</p>
      </div>
      <div style={{ overflow:'hidden', position:'relative' }}>
        <div style={{ position:'absolute', left:0, top:0, bottom:0, width:100, background:`linear-gradient(to right,${S.bg},transparent)`, zIndex:2, pointerEvents:'none' }}/>
        <div style={{ position:'absolute', right:0, top:0, bottom:0, width:100, background:`linear-gradient(to left,${S.bg},transparent)`, zIndex:2, pointerEvents:'none' }}/>
        <div className="sdmq">
          {[...RESTO,...RESTO].map((name,i)=>(
            <div key={i} style={{ padding:'10px 22px', border:`1px solid ${S.border}`, borderRadius:99, background:S.card, fontSize:14, fontWeight:600, color:S.text, whiteSpace:'nowrap', margin:'0 8px', flexShrink:0 }}>{name}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════
   5. FOR OPERATORS / STAFF / GUESTS
      Sunday: tall full-bleed PHOTO cards stacked vertically,
      text overlay, floating frosted-glass data widget
   ══════════════════════════════════════════════════════ */
function OperatorCard({ m }: { m:boolean }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="sdrev" style={{ position:'relative', borderRadius:20, overflow:'hidden', background:'#0d0d0d', border:`1px solid ${S.border}`, minHeight:m?380:480 }}>
      {/* Simulated dark restaurant photo bg */}
      <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg, #1a1008 0%, #0d0d0d 100%)' }}>
        <svg style={{ position:'absolute', inset:0, width:'100%', height:'100%', opacity:0.04 }}>
          <filter id="fn"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter>
          <rect width="100%" height="100%" filter="url(#fn)"/>
        </svg>
        {/* Warm light bloom simulating restaurant atmosphere */}
        <div style={{ position:'absolute', top:'20%', right:'15%', width:200, height:200, borderRadius:'50%', background:'radial-gradient(circle, rgba(180,100,30,0.25) 0%, transparent 70%)' }}/>
        <div style={{ position:'absolute', bottom:'30%', left:'10%', width:160, height:160, borderRadius:'50%', background:'radial-gradient(circle, rgba(100,60,20,0.2) 0%, transparent 70%)' }}/>
      </div>
      {/* Content overlay */}
      <div style={{ position:'relative', padding:m?'28px 24px':'36px 36px', display:'flex', flexDirection:'column', height:'100%', minHeight:m?380:480 }}>
        <div style={{ display:'inline-flex', padding:'4px 10px', borderRadius:99, background:'rgba(255,255,255,0.08)', width:'fit-content', marginBottom:20 }}>
          <span style={{ fontSize:10, fontWeight:700, color:'rgba(255,255,255,0.5)', letterSpacing:'0.1em' }}>FOR OPERATORS</span>
        </div>
        <h3 style={{ fontSize:m?24:32, fontWeight:800, color:'#fff', letterSpacing:'-0.035em', lineHeight:1.15, marginBottom:12 }}>
          Faster table turns, more insights, higher revenue.
        </h3>
        <p style={{ fontSize:14, color:'rgba(255,255,255,0.5)', lineHeight:1.65, marginBottom:'auto', maxWidth:440 }}>
          H360 eliminates commission fees, accelerates service with instant QR ordering, and gives you live data on every cover.
        </p>
        {/* Floating frosted widget — Sunday exact */}
        <div style={{ marginTop:32, alignSelf:'flex-start', background:'rgba(255,255,255,0.07)', backdropFilter:'blur(20px)', WebkitBackdropFilter:'blur(20px)', border:'1px solid rgba(255,255,255,0.12)', borderRadius:16, padding:'16px 20px', minWidth:200 }}>
          <div style={{ fontSize:11, color:'rgba(255,255,255,0.4)', marginBottom:4 }}>Last month</div>
          <div style={{ fontSize:32, fontWeight:800, color:'#fff', letterSpacing:'-0.04em', lineHeight:1 }}>€18,420</div>
          <svg width="120" height="36" viewBox="0 0 120 36" style={{ marginTop:8, display:'block' }}>
            <polyline points="0,32 20,28 40,20 60,24 80,12 100,8 120,4" fill="none" stroke={S.pink} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="60" cy="24" r="4" fill={S.pink}/>
            <text x="62" y="20" fill={S.pink} fontSize="9" fontWeight="700">A</text>
          </svg>
          <div style={{ display:'flex', gap:16, marginTop:4, fontSize:10, color:'rgba(255,255,255,0.35)' }}>
            {['J','F','M','A','M','J','J'].map((mo,i)=><span key={i}>{mo}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
}

function StaffCard({ m }: { m:boolean }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="sdrev d1" style={{ position:'relative', borderRadius:20, overflow:'hidden', background:'#0d0d0d', border:`1px solid ${S.border}`, minHeight:m?360:440 }}>
      <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg,#0a120d 0%,#0d0d0d 100%)' }}>
        <div style={{ position:'absolute', top:'15%', left:'60%', width:180, height:180, borderRadius:'50%', background:'radial-gradient(circle,rgba(74,222,128,0.12) 0%,transparent 70%)' }}/>
      </div>
      <div style={{ position:'relative', padding:m?'28px 24px':'36px 36px', display:'flex', flexDirection:'column', minHeight:m?360:440 }}>
        <div style={{ display:'inline-flex', padding:'4px 10px', borderRadius:99, background:'rgba(255,255,255,0.08)', width:'fit-content', marginBottom:20 }}>
          <span style={{ fontSize:10, fontWeight:700, color:'rgba(255,255,255,0.5)', letterSpacing:'0.1em' }}>FOR STAFF</span>
        </div>
        <h3 style={{ fontSize:m?24:32, fontWeight:800, color:'#fff', letterSpacing:'-0.035em', lineHeight:1.15, marginBottom:12 }}>
          Higher tips, smoother service, better guest-connections.
        </h3>
        <p style={{ fontSize:14, color:'rgba(255,255,255,0.5)', lineHeight:1.65, maxWidth:440, marginBottom:'auto' }}>
          ARC AI-optimised tip suggestions boost staff earnings by an average of 30%. No awkward moments. No card machine chasing.
        </p>
        {/* Tip widget */}
        <div style={{ marginTop:32, alignSelf:'flex-start', background:'rgba(255,255,255,0.07)', backdropFilter:'blur(20px)', WebkitBackdropFilter:'blur(20px)', border:'1px solid rgba(255,255,255,0.12)', borderRadius:16, padding:'14px 20px', display:'flex', alignItems:'center', gap:16 }}>
          <div style={{ width:40, height:40, borderRadius:99, background:'linear-gradient(135deg,#f97316,#ef4444)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:18 }}>😄</div>
          <div>
            <div style={{ fontSize:10, color:'rgba(255,255,255,0.4)' }}>Tip received</div>
            <div style={{ fontSize:26, fontWeight:800, color:'#fff', letterSpacing:'-0.03em' }}>+€12 tip</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GuestCard({ m }: { m:boolean }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="sdrev d2" style={{ position:'relative', borderRadius:20, overflow:'hidden', background:'#0d0d0d', border:`1px solid ${S.border}`, minHeight:m?360:440 }}>
      <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg,#0a0a14 0%,#0d0d0d 100%)' }}>
        <div style={{ position:'absolute', top:'10%', right:'10%', width:200, height:200, borderRadius:'50%', background:`radial-gradient(circle,rgba(232,121,249,0.1) 0%,transparent 70%)` }}/>
      </div>
      <div style={{ position:'relative', padding:m?'28px 24px':'36px 36px', display:'flex', flexDirection:'column', minHeight:m?360:440 }}>
        <div style={{ display:'inline-flex', padding:'4px 10px', borderRadius:99, background:'rgba(255,255,255,0.08)', width:'fit-content', marginBottom:20 }}>
          <span style={{ fontSize:10, fontWeight:700, color:'rgba(255,255,255,0.5)', letterSpacing:'0.1em' }}>FOR GUESTS</span>
        </div>
        <h3 style={{ fontSize:m?24:32, fontWeight:800, color:'#fff', letterSpacing:'-0.035em', lineHeight:1.15, marginBottom:12 }}>
          Pay in 10 seconds. Leave as a regular.
        </h3>
        <p style={{ fontSize:14, color:'rgba(255,255,255,0.5)', lineHeight:1.65, maxWidth:440, marginBottom:'auto' }}>
          QR bill, split in one tap, personalised loyalty rewards. Every visit ends with a 5-star review and a reason to come back.
        </p>
        {/* Guest QR widget */}
        <div style={{ marginTop:32, alignSelf:'flex-start', background:'rgba(255,255,255,0.07)', backdropFilter:'blur(20px)', WebkitBackdropFilter:'blur(20px)', border:'1px solid rgba(255,255,255,0.12)', borderRadius:16, padding:'14px 20px' }}>
          <div style={{ fontSize:10, color:'rgba(255,255,255,0.4)', marginBottom:6 }}>Table 12 — bill settled</div>
          <div style={{ display:'flex', alignItems:'center', gap:10 }}>
            <svg width="36" height="36" viewBox="0 0 36 36" style={{ flexShrink:0 }}>
              <rect x="2" y="2" width="14" height="14" rx="2" fill="none" stroke="#fff" strokeWidth="1.5"/>
              <rect x="5" y="5" width="8" height="8" rx="1" fill="#fff"/>
              <rect x="20" y="2" width="14" height="14" rx="2" fill="none" stroke="#fff" strokeWidth="1.5"/>
              <rect x="23" y="5" width="8" height="8" rx="1" fill="#fff"/>
              <rect x="2" y="20" width="14" height="14" rx="2" fill="none" stroke="#fff" strokeWidth="1.5"/>
              <rect x="5" y="23" width="8" height="8" rx="1" fill="#fff"/>
              <rect x="20" y="20" width="6" height="6" rx="1" fill="#fff"/>
              <rect x="28" y="20" width="6" height="6" rx="1" fill="#fff"/>
              <rect x="20" y="28" width="6" height="6" rx="1" fill="#fff"/>
              <rect x="28" y="28" width="6" height="6" rx="1" fill="#fff"/>
            </svg>
            <div>
              <div style={{ fontSize:18, fontWeight:800, color:'#fff' }}>You&apos;re ready to go!</div>
              <div style={{ fontSize:12, color:'rgba(255,255,255,0.4)' }}>€52.00 paid · 10 seconds</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ValueSection({ m }: { m:boolean }) {
  const ref = useReveal();
  return (
    <section style={{ background:S.bg, padding:m?'72px 24px':'104px 80px', borderTop:`1px solid ${S.border}` }}>
      <div style={{ maxWidth:1040, margin:'0 auto' }}>
        <h2 ref={ref} className="sdrev" style={{ fontSize:m?28:52, fontWeight:800, letterSpacing:'-0.04em', color:S.text, marginBottom:m?40:64 }}>
          Every visit now drives value.
        </h2>
        <div style={{ display:'flex', flexDirection:'column', gap:m?16:20 }}>
          <OperatorCard m={m}/>
          <StaffCard    m={m}/>
          <GuestCard    m={m}/>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════
   6. ECOSYSTEM — Sunday: hub-spoke network diagram, central pink logo, dark card
   ══════════════════════════════════════════════════════ */
function Ecosystem({ m }: { m:boolean }) {
  const lRef = useReveal(); const rRef = useReveal();
  const integrations = [
    { name:'Lightspeed', x:18,  y:22  },
    { name:'TheFork',    x:75,  y:18  },
    { name:'Wolt',       x:10,  y:55  },
    { name:'OLO',        x:80,  y:52  },
    { name:'NCR VOYIX',  x:18,  y:80  },
    { name:'Clover',     x:74,  y:80  },
  ];
  const cx = 50, cy = 50; // center %
  return (
    <section style={{ background:S.card, borderTop:`1px solid ${S.border}`, borderBottom:`1px solid ${S.border}`, padding:m?'72px 24px':'104px 80px' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', display:m?'flex':'grid', flexDirection:m?'column':undefined, gridTemplateColumns:'1fr 1fr', gap:m?48:80, alignItems:'center' }}>
        <div ref={lRef} className="sdrev">
          <h2 style={{ fontSize:m?28:44, fontWeight:800, letterSpacing:'-0.04em', color:S.text, lineHeight:1.12, marginBottom:18 }}>
            We don&apos;t pile on more tech. We amplify what already works.
          </h2>
          <p style={{ fontSize:m?15:18, color:S.muted, lineHeight:1.7, marginBottom:32 }}>
            H360 connects your tech stack — from POS to delivery — giving you one powerful, unified view of your business. No rip-and-replace.
          </p>
          <a href="/h360/demo" style={{ display:'inline-flex', padding:'12px 26px', background:S.text, color:S.bg, borderRadius:99, fontSize:14, fontWeight:700, textDecoration:'none' }}>
            See integrations
          </a>
        </div>
        {/* Hub-spoke network diagram */}
        <div ref={rRef} className="sdrev d1">
          <div style={{ background:S.bg, border:`1px solid ${S.border}`, borderRadius:20, padding:m?'20px 16px':'28px 24px', position:'relative', overflow:'hidden' }}>
            <div style={{ fontSize:m?15:17, fontWeight:700, color:S.text, marginBottom:4 }}>Built for your ecosystem.</div>
            <div style={{ fontSize:13, color:S.muted, marginBottom:m?20:28 }}>Connects instantly with your POS, CRM, booking and loyalty tools.</div>
            <div style={{ position:'relative', paddingBottom:'75%' }}>
              <svg style={{ position:'absolute', inset:0, width:'100%', height:'100%' }} viewBox="0 0 200 150" preserveAspectRatio="xMidYMid meet">
                {/* Spoke lines from center to each node */}
                {integrations.map((int,i)=>(
                  <g key={i}>
                    <line
                      x1={`${cx*2}`} y1={`${cy*1.5}`}
                      x2={`${int.x*2}`} y2={`${int.y*1.5}`}
                      stroke={S.border} strokeWidth="1" strokeDasharray="3,3"
                    />
                    {/* Pink glow dot midpoint */}
                    <circle
                      cx={(cx*2+int.x*2)/2} cy={(cy*1.5+int.y*1.5)/2}
                      r="2.5" fill={S.pink} opacity="0.8"
                    />
                  </g>
                ))}
                {/* Integration node boxes */}
                {integrations.map((int,i)=>(
                  <g key={i}>
                    <rect x={int.x*2-16} y={int.y*1.5-10} width={32} height={20} rx="4" fill={S.card2} stroke={S.border} strokeWidth="0.8"/>
                    <text x={int.x*2} y={int.y*1.5+4} textAnchor="middle" fontSize="5.5" fill={S.muted} fontWeight="600">{int.name}</text>
                  </g>
                ))}
                {/* Central H360 logo */}
                <circle cx={cx*2} cy={cy*1.5} r="18" fill={S.bg} stroke={S.border} strokeWidth="1"/>
                <circle cx={cx*2} cy={cy*1.5} r="14" fill={S.card2}/>
                {/* Pink glow behind center */}
                <circle cx={cx*2} cy={cy*1.5} r="22" fill={S.pink} opacity="0.06"/>
                <circle cx={cx*2} cy={cy*1.5} r="28" fill={S.pink} opacity="0.03"/>
                {/* H3 text */}
                <text x={cx*2} y={cy*1.5+4} textAnchor="middle" fontSize="9" fill="#fff" fontWeight="900">H3</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════
   7. TESTIMONIALS — 3 dark quote cards
   ══════════════════════════════════════════════════════ */
const QUOTES = [
  { initials:'JB', name:'Jonathan Brincat', place:'Noni, Valletta',      quote:'We\'ve had more Google reviews in one month with H360 than in the entire previous year.' },
  { initials:'MS', name:'Maria Schembri',   place:'Ta\' Marija, Mdina', quote:'When we stopped paying Wolt, our direct revenue went up 41% in 3 months. Effortless.' },
  { initials:'AC', name:'Antoine Camilleri',place:'Rubino, Valletta',    quote:'H360 gives guests a faster checkout. The time saved lets the team focus on hospitality.' },
];

function Testimonials({ m }: { m:boolean }) {
  const ref = useReveal();
  return (
    <section style={{ background:S.bg, padding:m?'72px 24px':'104px 80px', borderTop:`1px solid ${S.border}` }}>
      <div ref={ref} className="sdrev" style={{ maxWidth:1200, margin:'0 auto' }}>
        <h2 style={{ fontSize:m?26:42, fontWeight:800, letterSpacing:'-0.04em', color:S.text, marginBottom:m?36:56 }}>What operators say.</h2>
        <div style={{ display:'grid', gridTemplateColumns:m?'1fr':'repeat(3,1fr)', gap:16 }}>
          {QUOTES.map((q,i)=>(
            <div key={i} className={`sdrev d${i+1}`} style={{ padding:m?'24px':' 32px', border:`1px solid ${S.border}`, borderRadius:18, background:S.card2 }}>
              <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:20 }}>
                <div style={{ width:44, height:44, borderRadius:99, background:`linear-gradient(135deg,#1a5c2e,#0d3d1a)`, display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontWeight:800, fontSize:14, flexShrink:0 }}>{q.initials}</div>
                <div>
                  <div style={{ fontSize:14, fontWeight:700, color:S.text }}>{q.name}</div>
                  <div style={{ fontSize:12, color:S.muted, marginTop:2 }}>{q.place}</div>
                </div>
              </div>
              <p style={{ fontSize:15, color:'rgba(255,255,255,0.78)', lineHeight:1.65, fontStyle:'italic', margin:0 }}>&ldquo;{q.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════
   8. QUOTE CAROUSEL — Sunday: marquee + crossfade big quote
   ══════════════════════════════════════════════════════ */
const BIG_QUOTES = [
  { quote:'H360 is the only platform that actually increased our revenue without asking us to change everything. It just works.', name:'Jonathan Brincat', place:'Noni, Valletta' },
  { quote:'In 6 weeks we went from 38 Google reviews to 340. Our visibility on maps is completely different. Guests find us first.', name:'Maria Schembri', place:'Ta\' Marija, Mdina' },
  { quote:'I was spending €3,800/mo on Wolt commissions. Now I spend €290 on H360 and keep the rest. The maths is obvious.', name:'Antoine Camilleri', place:'Rubino, Valletta' },
];
const MQ_WORDS = ['More revenue','Zero commission','More reviews','More regulars','More direct orders','#1 on Google'];

function QuoteCarousel({ m }: { m:boolean }) {
  const [idx, setIdx] = useState(0);
  const [qKey, setQKey] = useState(0);
  const hRef = useReveal();
  const go = useCallback((d:1|-1) => { setIdx(i=>(i+d+BIG_QUOTES.length)%BIG_QUOTES.length); setQKey(k=>k+1); }, []);
  const q = BIG_QUOTES[idx];
  return (
    <section style={{ background:S.bg, borderTop:`1px solid ${S.border}`, padding:m?'72px 0':'104px 0', overflow:'hidden' }}>
      {/* Alternating filled/outline marquee — Sunday exact */}
      <div style={{ overflow:'hidden', marginBottom:m?56:80, position:'relative' }}>
        <div style={{ position:'absolute', left:0, top:0, bottom:0, width:80, background:`linear-gradient(to right,${S.bg},transparent)`, zIndex:2, pointerEvents:'none' }}/>
        <div style={{ position:'absolute', right:0, top:0, bottom:0, width:80, background:`linear-gradient(to left,${S.bg},transparent)`, zIndex:2, pointerEvents:'none' }}/>
        <div className="sdmq2">
          {[...MQ_WORDS,...MQ_WORDS,...MQ_WORDS,...MQ_WORDS].map((w,i)=>(
            <span key={i} style={{ fontSize:m?28:52, fontWeight:800, letterSpacing:'-0.04em', paddingRight:m?28:44, whiteSpace:'nowrap', flexShrink:0, color:i%2===0?S.text:'transparent', WebkitTextStroke:i%2===0?undefined:`1px ${S.border}` }}>
              {w}
            </span>
          ))}
        </div>
      </div>
      {/* Quote */}
      <div style={{ maxWidth:860, margin:'0 auto', padding:m?'0 24px':'0 80px' }}>
        <div ref={hRef} className="sdrev" style={{ display:'flex', gap:m?12:8, marginBottom:m?32:48 }}>
          {BIG_QUOTES.map((_,i)=>(
            <button key={i} onClick={()=>{ setIdx(i); setQKey(k=>k+1); }} style={{ width:i===idx?28:8, height:8, borderRadius:99, background:i===idx?S.text:S.border, border:'none', cursor:'pointer', transition:'all 0.3s ease', padding:0 }}/>
          ))}
        </div>
        <div key={qKey} className="sdqactive">
          <p style={{ fontSize:m?22:40, fontWeight:700, color:S.text, letterSpacing:'-0.03em', lineHeight:1.2, marginBottom:m?28:40, fontStyle:'italic' }}>
            &ldquo;{q.quote}&rdquo;
          </p>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
            <div style={{ display:'flex', alignItems:'center', gap:12 }}>
              <div style={{ width:40, height:40, borderRadius:99, background:'linear-gradient(135deg,#1a5c2e,#0d3d1a)', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontWeight:700, fontSize:13 }}>
                {q.name.split(' ').map(w=>w[0]).join('')}
              </div>
              <div><div style={{ fontSize:14, fontWeight:700, color:S.text }}>{q.name}</div><div style={{ fontSize:12, color:S.muted }}>{q.place}</div></div>
            </div>
            <div style={{ display:'flex', gap:8 }}>
              <button onClick={()=>go(-1)} style={{ width:42, height:42, borderRadius:99, border:`1px solid ${S.border}`, background:'transparent', color:S.text, fontSize:18, cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center' }}>←</button>
              <button onClick={()=>go(1)}  style={{ width:42, height:42, borderRadius:99, border:`1px solid ${S.border}`, background:'transparent', color:S.text, fontSize:18, cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center' }}>→</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════
   9. LOYALTY — Sunday: dark green section
   ══════════════════════════════════════════════════════ */
function Loyalty({ m }: { m:boolean }) {
  const ref = useReveal();
  return (
    <section style={{ background:'#09180e', borderTop:`1px solid rgba(255,255,255,0.05)` }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:m?'80px 24px':'120px 80px', display:m?'flex':'grid', flexDirection:m?'column':undefined, gridTemplateColumns:'1fr 1fr', gap:m?48:80, alignItems:'center' }}>
        <div ref={ref} className="sdrev">
          <div style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'4px 12px', borderRadius:99, background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)', marginBottom:24 }}>
            <span style={{ fontSize:10, fontWeight:700, color:'rgba(255,255,255,0.45)', letterSpacing:'0.1em' }}>GUEST PLATFORM</span>
            <span style={{ fontSize:10, fontWeight:700, color:'#4ade80', background:'rgba(74,222,128,0.15)', padding:'1px 7px', borderRadius:99 }}>NEW</span>
          </div>
          <h2 style={{ fontSize:m?30:50, fontWeight:800, letterSpacing:'-0.04em', color:'#fff', lineHeight:1.1, marginBottom:16 }}>
            From first visit<br/>to forever fan.
          </h2>
          <p style={{ fontSize:m?15:18, color:'rgba(255,255,255,0.5)', lineHeight:1.7, marginBottom:36, maxWidth:460 }}>
            With H360, ARC AI learns what your guests love — recommending the right dish, the right offer, the right moment. Guests come back. Every time.
          </p>
          <a href="/h360/demo" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'13px 28px', background:'#fff', color:'#09180e', borderRadius:99, fontSize:15, fontWeight:700, textDecoration:'none' }}>
            Discover
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
        <div className="sdrev d1" style={{ display:'flex', flexDirection:'column', gap:12 }}>
          {[['Repeat visit rate','+68%'],['Avg spend per guest','+22%'],['WhatsApp open rate','94%'],['Churn reduction','-41%']].map(([label,val],i)=>(
            <div key={i} style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'16px 22px', borderRadius:12, background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.06)' }}>
              <span style={{ fontSize:14, color:'rgba(255,255,255,0.55)' }}>{label}</span>
              <span style={{ fontSize:20, fontWeight:800, color:'#4ade80', letterSpacing:'-0.03em' }}>{val}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════
   10. "YOUR BUSINESS. ONE CLEAR VIEW." — Sunday: dark, revenue dashboard highlight
   ══════════════════════════════════════════════════════ */
function BusinessView({ m }: { m:boolean }) {
  const ref = useReveal();
  return (
    <section style={{ background:S.bg, borderTop:`1px solid ${S.border}`, padding:m?'72px 24px':'104px 80px' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', display:m?'flex':'grid', flexDirection:m?'column':undefined, gridTemplateColumns:'1fr 1fr', gap:m?48:80, alignItems:'center' }}>
        <div ref={ref} className="sdrev">
          <h2 style={{ fontSize:m?28:46, fontWeight:800, letterSpacing:'-0.04em', color:S.text, lineHeight:1.12, marginBottom:16 }}>
            Your business.<br/>One clear view.
          </h2>
          <p style={{ fontSize:m?15:18, color:S.muted, lineHeight:1.7, marginBottom:32 }}>
            sunday connects your tech stack — from POS to delivery — giving you one powerful, unified view of your business.
          </p>
          <a href="/h360/demo" style={{ display:'inline-flex', padding:'12px 26px', background:S.text, color:S.bg, borderRadius:99, fontSize:14, fontWeight:700, textDecoration:'none' }}>
            See dashboard
          </a>
        </div>
        <div className="sdrev d1" style={{ background:S.card2, border:`1px solid ${S.border}`, borderRadius:20, padding:m?24:32 }}>
          <div style={{ display:'flex', justifyContent:'space-between', marginBottom:20 }}>
            <div><div style={{ fontSize:11, color:S.muted }}>Revenue this month</div><div style={{ fontSize:32, fontWeight:800, color:S.text, letterSpacing:'-0.04em' }}>€18,420</div><div style={{ fontSize:13, color:'#4ade80', fontWeight:600 }}>↑ +34% vs last month</div></div>
            <div style={{ textAlign:'right' }}><div style={{ fontSize:11, color:S.muted }}>Zero commission</div><div style={{ fontSize:22, fontWeight:700, color:S.text }}>€6,100</div><div style={{ fontSize:12, color:'#4ade80' }}>direct orders</div></div>
          </div>
          <div style={{ display:'flex', alignItems:'flex-end', gap:4, height:52, marginBottom:8 }}>
            {[28,42,36,55,48,66,60,76,70,86,78,95].map((h,i)=>(
              <div key={i} style={{ flex:1, background:i===11?S.text:'rgba(255,255,255,0.12)', borderRadius:'3px 3px 0 0', height:`${h}%` }}/>
            ))}
          </div>
          <div style={{ fontSize:10, color:S.dim, textAlign:'center' }}>Last 12 months</div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════
   11. FINAL CTA — dark, Sunday exact
   ══════════════════════════════════════════════════════ */
function FinalCTA({ m }: { m:boolean }) {
  const ref = useReveal();
  return (
    <section style={{ background:S.bg, borderTop:`1px solid ${S.border}`, padding:m?'88px 24px 120px':'120px 80px 160px' }}>
      <div ref={ref} className="sdrev" style={{ maxWidth:680, margin:'0 auto', textAlign:'center' }}>
        <h2 style={{ fontSize:m?34:62, fontWeight:800, letterSpacing:'-0.045em', color:S.text, lineHeight:1.07, marginBottom:16 }}>
          Save your revenue.<br/>Start today.
        </h2>
        <p style={{ fontSize:m?16:18, color:S.muted, lineHeight:1.65, margin:'0 auto 36px', maxWidth:460 }}>
          An ARC AI expert will reach out today. Ready to grow with H360?
        </p>
        <div style={{ display:'flex', alignItems:'center', background:S.card2, border:`1px solid ${S.border}`, borderRadius:14, padding:'6px 6px 6px 18px', maxWidth:440, margin:'0 auto 14px', boxShadow:'0 0 0 1px rgba(255,255,255,0.03)' }}>
          <input type="text" placeholder="Your restaurant name" style={{ flex:1, border:'none', outline:'none', fontSize:15, color:S.text, background:'transparent', fontFamily:'inherit' }} data-testid="input-h360-cta"/>
          <a href="/h360/demo" style={{ padding:'11px 20px', background:S.text, color:S.bg, borderRadius:10, fontSize:14, fontWeight:700, textDecoration:'none', whiteSpace:'nowrap', display:'inline-block' }} data-testid="button-h360-cta">Get a free demo</a>
        </div>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:6, fontSize:12, color:S.dim }}>
          <div style={{ width:14, height:14, borderRadius:3, background:'rgba(255,255,255,0.12)', display:'flex', alignItems:'center', justifyContent:'center' }}>
            <span style={{ color:'#fff', fontSize:7, fontWeight:800 }}>A</span>
          </div>
          Powered by ARC AI · No commitment needed
        </div>
      </div>
    </section>
  );
}

/* ROOT */
export default function BelowHero() {
  const m = useMobile();
  return (
    <div style={{ fontFamily:'"Inter",system-ui,-apple-system,Arial,sans-serif', background:S.bg, color:S.text }}>
      <style>{CSS}</style>
      <Stats         m={m}/>
      <Problem       m={m}/>
      <ProductRail   m={m}/>
      <TrustMarquee  m={m}/>
      <ValueSection  m={m}/>
      <Ecosystem     m={m}/>
      <Testimonials  m={m}/>
      <QuoteCarousel m={m}/>
      <Loyalty       m={m}/>
      <BusinessView  m={m}/>
      <FinalCTA      m={m}/>
    </div>
  );
}
