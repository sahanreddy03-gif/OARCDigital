'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

/* ─── design tokens (Sunday #0a0a0a dark) ─── */
const C = {
  bg:     '#0a0a0a',
  card:   '#111111',
  card2:  '#161616',
  border: '#222222',
  text:   '#ffffff',
  muted:  '#9ca3af',
  dim:    '#555555',
  green:  '#0d3d1a',
  greenV: '#166b30',
  greenL: '#c2edce',
  pink:   '#e879f9',
  blue:   '#3b82f6',
  amber:  '#22c55e',
};

/* ─── global animation CSS injected once ─── */
const ANIM_CSS = `
/* Marquee */
@keyframes h3mq  { from { transform:translateX(0) }   to { transform:translateX(-50%) } }
@keyframes h3mq2 { from { transform:translateX(-50%) } to { transform:translateX(0) } }
.h3mq  { animation: h3mq  28s linear infinite; display:flex; width:max-content; }
.h3mq2 { animation: h3mq2 22s linear infinite; display:flex; width:max-content; }

/* Scroll-reveal */
.h3reveal { opacity:0; transform:translateY(32px); transition:opacity 0.65s cubic-bezier(.22,1,.36,1), transform 0.65s cubic-bezier(.22,1,.36,1); }
.h3reveal.h3in { opacity:1; transform:translateY(0); }
.h3reveal.d1 { transition-delay:0.08s }
.h3reveal.d2 { transition-delay:0.16s }
.h3reveal.d3 { transition-delay:0.24s }
.h3reveal.d4 { transition-delay:0.32s }
.h3reveal.d5 { transition-delay:0.40s }

/* Quote fade */
@keyframes h3qfade { from { opacity:0; transform:translateY(12px) } to { opacity:1; transform:translateY(0) } }
.h3qactive { animation: h3qfade 0.45s cubic-bezier(.22,1,.36,1) both; }

/* Horizontal card rail — no scrollbar */
.h3rail { overflow-x:auto; scroll-snap-type:x mandatory; -webkit-overflow-scrolling:touch; scrollbar-width:none; cursor:grab; }
.h3rail::-webkit-scrollbar { display:none; }
.h3rail:active { cursor:grabbing; }
.h3card { scroll-snap-align:start; flex-shrink:0; }

/* Value card hover lift */
.h3vcard { transition: transform 0.3s cubic-bezier(.22,1,.36,1); }
.h3vcard:hover { transform: scale(1.012); }
`;

/* ─── IntersectionObserver reveal hook ─── */
function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('h3in'); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

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

/* ══════════════════════════════════════════════
   1. STATS STRIP
   Sunday: "3,500+ Clients · 80M+ Diners · $176M Tips · 2M Reviews"
   ══════════════════════════════════════════════ */
function Stats({ m }: { m: boolean }) {
  const ref = useReveal();
  const stats = [
    { val: '50+',    lab: 'Malta restaurants' },
    { val: '+34%',   lab: 'Average revenue uplift' },
    { val: '4,200+', lab: 'Google reviews generated' },
    { val: '€2.1M',  lab: 'Commission kept from Wolt' },
  ];
  return (
    <section style={{ background: C.bg, borderBottom: `1px solid ${C.border}` }}>
      <div
        ref={ref}
        className="h3reveal"
        style={{
          maxWidth: 1040, margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: m ? 'repeat(2,1fr)' : 'repeat(4,1fr)',
          padding: m ? '44px 24px' : '56px 40px',
          gap: m ? 36 : 0,
        }}
      >
        {stats.map((s, i) => (
          <div key={i} className={`h3reveal d${i+1}`} style={{
            textAlign: 'center',
            padding: m ? 0 : '0 20px',
            borderRight: !m && i < 3 ? `1px solid ${C.border}` : 'none',
          }}>
            <div style={{ fontSize: m ? 40 : 56, fontWeight: 800, color: C.text, letterSpacing: '-0.05em', lineHeight: 1 }}>{s.val}</div>
            <div style={{ fontSize: 13, color: C.muted, marginTop: 7, lineHeight: 1.3 }}>{s.lab}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   2. PROBLEM STATEMENT
   Sunday: "Paying in restaurants used to be slow, awkward and frustrating."
   ══════════════════════════════════════════════ */
function Problem({ m }: { m: boolean }) {
  const ref = useReveal();
  return (
    <section id="h360-how-it-works" style={{ background: C.bg, padding: m ? '64px 24px 52px' : '96px 40px 72px' }}>
      <div style={{ maxWidth: 920, margin: '0 auto' }}>
        <h2
          ref={ref}
          className="h3reveal"
          style={{
            fontSize: m ? 'clamp(30px,8vw,40px)' : 'clamp(40px,4.2vw,60px)',
            fontWeight: 800, lineHeight: 1.08,
            letterSpacing: '-0.038em', color: C.text,
            marginBottom: 26,
          }}
        >
          Ordering and paying in Malta restaurants used to be broken, expensive, and invisible to Google.
        </h2>
        <p className="h3reveal d1" style={{ fontSize: m ? 17 : 20, color: C.muted, lineHeight: 1.65, maxWidth: 660 }}>
          H360 changed that with ARC AI-powered solutions that learn, adapt, and create value at every step — on-site or online, dine-in or delivery.
        </p>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   3. PRODUCT CARDS — drag-scrollable, snap, stagger fade-up
   Sunday: Smart Handheld / Digital Bill / Hybrid / Order & Pay
   ══════════════════════════════════════════════ */
const PRODUCTS = [
  {
    title: 'Direct Orders',
    sub:   'QR ordering — zero commission to Wolt.',
    dot:   '#22c55e',
    content: (
      <div style={{ padding:'18px 18px 0', flex:1, display:'flex', flexDirection:'column', justifyContent:'flex-end' }}>
        <div style={{ background:'#1a1a1a', borderRadius:14, border:`1px solid #2a2a2a`, padding:14 }}>
          <div style={{ fontSize:10, color:'#555', marginBottom:8 }}>Table 7 · Live order</div>
          {['Braġjoli (x2) — €28.00','Lampuki Pie — €16.50','Kinnie x3 — €7.50'].map((r,i)=>(
            <div key={i} style={{ display:'flex', justifyContent:'space-between', padding:'6px 0', borderBottom:i<2?`1px solid #222`:'none', fontSize:12, color:'#d1d5db' }}>
              <span>{r.split('—')[0]}</span><span style={{ fontWeight:600, color:'#fff' }}>{r.split('—')[1]}</span>
            </div>
          ))}
          <div style={{ marginTop:12, background:'#22c55e', color:'#000', borderRadius:8, padding:'9px', textAlign:'center', fontSize:12, fontWeight:700 }}>Pay €52.00 — 0% fee</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Google Ranking',
    sub:   'Be the restaurant guests find first.',
    dot:   '#3b82f6',
    content: (
      <div style={{ padding:'18px 18px 0', flex:1 }}>
        <div style={{ fontSize:10, color:'#555', marginBottom:10 }}>Google Maps — Valletta</div>
        {[
          { rank:'#1', name:'Your Restaurant', stars:'4.9★', hl:true },
          { rank:'#2', name:'Competitor A',    stars:'4.2★', hl:false },
          { rank:'#3', name:'Competitor B',    stars:'4.0★', hl:false },
        ].map(r=>(
          <div key={r.rank} style={{ display:'flex', alignItems:'center', gap:10, padding:'8px 10px', borderRadius:10, background:r.hl?'rgba(34,197,94,0.1)':'transparent', marginBottom:6, border:`1px solid #222` }}>
            <span style={{ fontSize:10, fontWeight:700, color:r.hl?'#22c55e':'#555', width:20 }}>{r.rank}</span>
            <span style={{ flex:1, fontSize:12, color:r.hl?'#fff':'#9ca3af', fontWeight:r.hl?700:400 }}>{r.name}</span>
            <span style={{ fontSize:11, color:r.hl?'#22c55e':'#555' }}>{r.stars}</span>
          </div>
        ))}
        <div style={{ marginTop:10, padding:'8px 12px', background:'rgba(59,130,246,0.12)', borderRadius:8, fontSize:11, color:'#3b82f6', fontWeight:600 }}>
          ARC AI: +9 positions this month
        </div>
      </div>
    ),
  },
  {
    title: 'Guest Loyalty',
    sub:   'Turn one-time guests into regulars.',
    dot:   '#e879f9',
    content: (
      <div style={{ padding:'18px 18px 0', flex:1 }}>
        <div style={{ background:'#1a1a1a', borderRadius:14, padding:'12px 14px', border:`1px solid #2a2a2a`, marginBottom:10 }}>
          <div style={{ fontSize:10, color:'#555', marginBottom:6 }}>ARC AI · WhatsApp</div>
          <div style={{ background:'#e879f9', color:'#000', borderRadius:10, padding:'10px 12px', fontSize:12, lineHeight:1.45, fontWeight:500 }}>
            &ldquo;Hey Maria! Your favourite Braġjoli is back. Table for 2 this Friday?&rdquo;
          </div>
        </div>
        <div style={{ display:'flex', gap:8 }}>
          <div style={{ flex:1, padding:'9px', background:'#e879f9', color:'#000', borderRadius:8, textAlign:'center', fontSize:11, fontWeight:700 }}>Book table</div>
          <div style={{ flex:1, padding:'9px', background:'#1a1a1a', color:'#9ca3af', borderRadius:8, textAlign:'center', fontSize:11, border:`1px solid #222` }}>Maybe later</div>
        </div>
      </div>
    ),
  },
  {
    title: 'ARC AI Audit',
    sub:   'Know exactly what is costing you money.',
    dot:   '#f97316',
    content: (
      <div style={{ padding:'18px 18px 0', flex:1 }}>
        <div style={{ fontSize:12, fontWeight:700, color:C.text, marginBottom:14 }}>Your restaurant score</div>
        {[
          { lab:'Google ranking', pct:95, color:'#22c55e' },
          { lab:'Review velocity', pct:45, color:'#f97316' },
          { lab:'Direct orders',  pct:20, color:'#ef4444' },
        ].map((b,i)=>(
          <div key={i} style={{ marginBottom:14 }}>
            <div style={{ display:'flex', justifyContent:'space-between', fontSize:11, color:'#9ca3af', marginBottom:5 }}>
              <span>{b.lab}</span><span style={{ color:b.color, fontWeight:600 }}>{b.pct}%</span>
            </div>
            <div style={{ height:4, background:'#2a2a2a', borderRadius:99 }}>
              <div style={{ height:'100%', width:`${b.pct}%`, background:b.color, borderRadius:99, transition:'width 1s ease' }}/>
            </div>
          </div>
        ))}
        <div style={{ padding:'8px 12px', background:'rgba(249,115,22,0.1)', borderRadius:8, fontSize:11, color:'#f97316', fontWeight:600 }}>
          2 critical issues to fix
        </div>
      </div>
    ),
  },
  {
    title: 'Revenue Dashboard',
    sub:   'One clear view across every channel.',
    dot:   '#22c55e',
    content: (
      <div style={{ padding:'18px 18px 0', flex:1 }}>
        <div style={{ marginBottom:12 }}>
          <div style={{ fontSize:10, color:'#555' }}>Revenue this month</div>
          <div style={{ fontSize:34, fontWeight:800, color:'#22c55e', letterSpacing:'-0.05em', lineHeight:1 }}>€18,420</div>
          <div style={{ fontSize:11, color:'#22c55e', fontWeight:600 }}>↑ +34% vs last month</div>
        </div>
        <div style={{ display:'flex', alignItems:'flex-end', gap:3, height:52 }}>
          {[25,38,32,50,44,58,52,72,65,80,76,95].map((h,i)=>(
            <div key={i} style={{ flex:1, background:i===11?'#22c55e':'#1e4d2a', borderRadius:'2px 2px 0 0', height:`${h}%`, opacity:i===11?1:0.6 }}/>
          ))}
        </div>
        <div style={{ fontSize:9, color:'#555', textAlign:'center', marginTop:6 }}>Last 12 months</div>
      </div>
    ),
  },
];

function ProductCards({ m }: { m: boolean }) {
  const railRef = useRef<HTMLDivElement>(null);
  const headerRef = useReveal();

  /* drag-to-scroll */
  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    let isDown = false, startX = 0, scrollLeft = 0;
    const down  = (e: MouseEvent) => { isDown = true; startX = e.pageX - el.offsetLeft; scrollLeft = el.scrollLeft; };
    const leave = () => { isDown = false; };
    const up    = () => { isDown = false; };
    const move  = (e: MouseEvent) => { if (!isDown) return; e.preventDefault(); el.scrollLeft = scrollLeft - (e.pageX - el.offsetLeft - startX); };
    el.addEventListener('mousedown', down);
    el.addEventListener('mouseleave', leave);
    el.addEventListener('mouseup', up);
    el.addEventListener('mousemove', move);
    return () => { el.removeEventListener('mousedown', down); el.removeEventListener('mouseleave', leave); el.removeEventListener('mouseup', up); el.removeEventListener('mousemove', move); };
  }, []);

  return (
    <section id="h360-products" style={{ background: C.bg, paddingBottom: m ? 56 : 80 }}>
      <div ref={headerRef} className="h3reveal" style={{ padding: m ? '0 24px 28px' : '0 40px 36px', maxWidth: 1040, margin: '0 auto' }}>
        {/* empty — headline is in Problem section above, cards start immediately */}
      </div>
      <div ref={railRef} className="h3rail" style={{ padding: m ? '0 0 0 24px' : '0 0 0 40px' }}>
        <div style={{ display:'flex', gap:14, paddingRight: m ? 24 : 40, width:'max-content' }}>
          {PRODUCTS.map((p, i) => (
            <div
              key={i}
              className={`h3card h3reveal d${Math.min(i+1,5)}`}
              style={{
                width: m ? 268 : 308, height: m ? 330 : 368,
                background: C.card, border: `1px solid ${C.border}`,
                borderRadius: 20, overflow: 'hidden',
                display: 'flex', flexDirection: 'column',
              }}
            >
              <div style={{ padding:'22px 22px 0' }}>
                <div style={{ width:10, height:10, borderRadius:99, background:p.dot, marginBottom:14 }}/>
                <div style={{ fontSize:17, fontWeight:700, color:C.text, marginBottom:4 }}>{p.title}</div>
                <div style={{ fontSize:12, color:C.muted }}>{p.sub}</div>
              </div>
              {p.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   4. TRUST MARQUEE
   Sunday: infinite scrolling restaurant logos
   ══════════════════════════════════════════════ */
const RESTAURANTS = ['Noni','Rubino',"Ta' Marija",'Bahia',"Ġużé",'Zen','Palazzo Preca','Terrone','De Mondion','Margo','Rock Salt','Tartarun','Trabuxu','Tico Tico','Badass Burgers'];

function TrustLogos({ m }: { m: boolean }) {
  const ref = useReveal();
  return (
    <section style={{ background: C.bg, borderTop:`1px solid ${C.border}`, borderBottom:`1px solid ${C.border}`, padding: m ? '52px 0' : '72px 0' }}>
      <div ref={ref} className="h3reveal" style={{ maxWidth:840, margin:'0 auto', padding: m ? '0 24px' : '0 40px', textAlign:'center', marginBottom:40 }}>
        <h2 style={{ fontSize: m ? 22 : 32, fontWeight:700, letterSpacing:'-0.032em', color:C.text, marginBottom:6 }}>
          Trusted by Malta&apos;s best restaurants.
        </h2>
        <p style={{ fontSize:15, color:C.muted }}>From casual trattorias to Michelin-recommended dining rooms.</p>
      </div>
      <div style={{ overflow:'hidden', position:'relative' }}>
        <div style={{ position:'absolute', left:0, top:0, bottom:0, width:100, background:`linear-gradient(to right,${C.bg},transparent)`, zIndex:2, pointerEvents:'none' }}/>
        <div style={{ position:'absolute', right:0, top:0, bottom:0, width:100, background:`linear-gradient(to left,${C.bg},transparent)`, zIndex:2, pointerEvents:'none' }}/>
        <div className="h3mq">
          {[...RESTAURANTS,...RESTAURANTS].map((name,i)=>(
            <div key={i} style={{ padding:'10px 32px', borderRight:`1px solid ${C.border}`, fontSize:14, fontWeight:500, color:C.dim, whiteSpace:'nowrap', letterSpacing:'0.01em' }}>
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   5. INLINE TESTIMONIALS — 3 dark cards
   ══════════════════════════════════════════════ */
const INLINE_QUOTES = [
  { q:'We had more Google reviews in one month with H360 than in the entire previous year.', name:'Jonathan Brincat', place:'Noni, Valletta', init:'JB' },
  { q:'When we stopped paying Wolt, our direct revenue went up 41% in three months. Every time.', name:'Maria Schembri', place:"Ta' Marija, Mdina", init:'MS' },
  { q:'H360 gives our guests a faster checkout. The time saved lets the team focus on hospitality, not bills.', name:'Antoine Camilleri', place:'Rubino, Valletta', init:'AC' },
];

function InlineTestimonials({ m }: { m: boolean }) {
  const ref = useReveal();
  return (
    <section style={{ background: C.bg, padding: m ? '52px 24px' : '80px 40px' }}>
      <div ref={ref} className="h3reveal" style={{ maxWidth:1040, margin:'0 auto', display:'grid', gridTemplateColumns: m?'1fr':'repeat(3,1fr)', gap:20 }}>
        {INLINE_QUOTES.map((t,i)=>(
          <div key={i} className={`h3reveal d${i+1}`} style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:20, padding:'28px 28px 24px', display:'flex', flexDirection:'column', gap:20 }}>
            <p style={{ fontSize: m ? 15 : 16, color:C.text, lineHeight:1.62, flex:1 }}>&ldquo;{t.q}&rdquo;</p>
            <div style={{ display:'flex', alignItems:'center', gap:12 }}>
              <div style={{ width:40, height:40, borderRadius:99, background:`linear-gradient(135deg,${C.green},${C.greenV})`, display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontWeight:700, fontSize:13, flexShrink:0 }}>{t.init}</div>
              <div>
                <div style={{ fontSize:13, fontWeight:600, color:C.text }}>{t.name}</div>
                <div style={{ fontSize:12, color:C.muted }}>{t.place}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   6. "EVERY VISIT NOW DRIVES VALUE" + 3 TALL VALUE CARDS
   Sunday: FOR OPERATORS / FOR STAFF / FOR GUESTS — full-bleed photo cards
   ══════════════════════════════════════════════ */
function ValueCards({ m }: { m: boolean }) {
  const hRef  = useReveal();
  const cRef0 = useReveal();
  const cRef1 = useReveal();
  const cRef2 = useReveal();
  const cardRefs = [cRef0, cRef1, cRef2];
  const cards = [
    {
      label:'FOR OPERATORS',
      title:'Faster table turns, more direct revenue, higher margin.',
      bg:'linear-gradient(150deg,#1a0820 0%,#2d0f3d 45%,#111 100%)',
      glow:'rgba(232,121,249,0.12)',
      overlay:(
        <div style={{ position:'absolute', bottom:32, left:24, background:'rgba(15,15,15,0.88)', backdropFilter:'blur(14px)', borderRadius:16, padding:'16px 20px', border:`1px solid rgba(232,121,249,0.18)`, minWidth:196 }}>
          <div style={{ fontSize:10, color:C.muted, marginBottom:4 }}>Last month</div>
          <div style={{ fontSize:38, fontWeight:800, color:C.text, letterSpacing:'-0.05em', lineHeight:1, marginBottom:10 }}>€18,420</div>
          <div style={{ display:'flex', alignItems:'flex-end', gap:3, height:34 }}>
            {[20,35,28,50,42,60,55,70,65,80,72,95].map((h,i)=>(
              <div key={i} style={{ flex:1, background:i===11?C.pink:'rgba(232,121,249,0.25)', borderRadius:'2px 2px 0 0', height:`${h}%` }}/>
            ))}
          </div>
          <div style={{ display:'flex', gap:4, marginTop:5, fontSize:9, color:C.dim }}>
            {['J','F','M','A','M','J','J','A','S','O','N','D'].map((mo,i)=><span key={i} style={{ flex:1, textAlign:'center' }}>{mo}</span>)}
          </div>
        </div>
      ),
    },
    {
      label:'FOR STAFF',
      title:'Higher tips, smoother shifts, and no chasing the bill.',
      bg:'linear-gradient(150deg,#071a09 0%,#0f2d12 45%,#111 100%)',
      glow:'rgba(34,197,94,0.10)',
      overlay:(
        <div style={{ position:'absolute', bottom:32, left:24, background:'rgba(15,15,15,0.88)', backdropFilter:'blur(14px)', borderRadius:16, padding:'16px 20px', border:`1px solid rgba(34,197,94,0.18)` }}>
          <div style={{ fontSize:10, color:C.muted, marginBottom:6 }}>ARC AI tip suggestion</div>
          <div style={{ display:'flex', alignItems:'center', gap:12 }}>
            <div style={{ fontSize:44, fontWeight:800, color:'#22c55e', letterSpacing:'-0.05em' }}>+28%</div>
            <div>
              <div style={{ fontSize:12, color:C.text, fontWeight:600 }}>Average tip rate</div>
              <div style={{ fontSize:11, color:C.muted }}>Was 18% · +10pp lift</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      label:'FOR GUESTS',
      title:"Fast, simple, personalised checkout they'll remember.",
      bg:'linear-gradient(150deg,#07091a 0%,#0f112d 45%,#111 100%)',
      glow:'rgba(59,130,246,0.10)',
      overlay:(
        <div style={{ position:'absolute', bottom:32, left:24, background:'rgba(15,15,15,0.88)', backdropFilter:'blur(14px)', borderRadius:16, padding:'16px 20px', border:`1px solid rgba(59,130,246,0.18)`, maxWidth:232 }}>
          <div style={{ fontSize:13, fontWeight:600, color:C.text, marginBottom:4 }}>Thanks, you&apos;re good to go.</div>
          <div style={{ fontSize:11, color:C.muted, marginBottom:12, lineHeight:1.45 }}>The waiter knows the bill is paid. Feel free to head out!</div>
          <div style={{ display:'flex', justifyContent:'space-between', fontSize:13, color:C.text }}><span style={{ color:C.muted }}>You paid</span><span style={{ fontWeight:700 }}>€52.00</span></div>
        </div>
      ),
    },
  ];

  return (
    <section style={{ background:C.bg, padding: m ? '0 24px 72px' : '0 40px 104px', borderTop:`1px solid ${C.border}` }}>
      <div style={{ maxWidth:1040, margin:'0 auto' }}>
        <h2 ref={hRef} className="h3reveal" style={{ fontSize: m?28:48, fontWeight:800, letterSpacing:'-0.038em', color:C.text, padding: m?'52px 0 40px':'80px 0 56px', lineHeight:1.08 }}>
          Every visit now drives value.
        </h2>
        <div style={{ display:'flex', flexDirection:'column', gap:18 }}>
          {cards.map((c,i)=>(
              <div
                key={i}
                ref={cardRefs[i]}
                className={`h3reveal h3vcard d${i+1}`}
                style={{ position:'relative', borderRadius:22, overflow:'hidden', height: m?360:480, background:c.bg, border:`1px solid ${C.border}` }}
              >
                <div style={{ position:'absolute', top:-80, right:-80, width:280, height:280, borderRadius:99, background:c.glow, filter:'blur(50px)', pointerEvents:'none' }}/>
                <svg style={{ position:'absolute', inset:0, opacity:0.035, width:'100%', height:'100%', pointerEvents:'none' }}>
                  <defs><pattern id={`vp${i}`} x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse"><circle cx="18" cy="18" r="1" fill="#fff"/></pattern></defs>
                  <rect width="100%" height="100%" fill={`url(#vp${i})`}/>
                </svg>
                <div style={{ position:'absolute', top:28, left:24, right:24 }}>
                  <div style={{ display:'inline-flex', padding:'4px 10px', borderRadius:99, background:'rgba(255,255,255,0.07)', marginBottom:14 }}>
                    <span style={{ fontSize:10, fontWeight:700, color:C.muted, letterSpacing:'0.09em' }}>{c.label}</span>
                  </div>
                  <h3 style={{ fontSize: m?21:30, fontWeight:800, color:C.text, letterSpacing:'-0.032em', lineHeight:1.15, maxWidth:460 }}>{c.title}</h3>
                </div>
                {c.overlay}
              </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   7. ECOSYSTEM — two dark cards
   Sunday: "Built for your ecosystem" + "Your business, one clear view"
   ══════════════════════════════════════════════ */
function Ecosystem({ m }: { m: boolean }) {
  const ref = useReveal();
  const integ = [
    {name:'Lightspeed',color:'#ff5c35'},{name:'TheFork',color:'#01a55e'},
    {name:'Wolt',color:'#009de0'},{name:'Bolt',color:'#34d186'},
    {name:'Google',color:'#4285f4'},{name:'Nory',color:'#7c3aed'},
  ];
  return (
    <section style={{ background:C.bg, padding: m ? '0 24px 72px' : '0 40px 104px' }}>
      <div ref={ref} className="h3reveal" style={{ maxWidth:1040, margin:'0 auto' }}>
        <h2 style={{ fontSize: m?22:38, fontWeight:800, letterSpacing:'-0.035em', color:C.text, marginBottom:10 }}>
          We don&apos;t pile on more tech. We amplify what already works.
        </h2>
        <p style={{ fontSize:16, color:C.muted, marginBottom:44, maxWidth:580 }}>
          H360 connects your stack — POS to delivery — giving you one powerful, unified view.
        </p>
        <div style={{ display:'grid', gridTemplateColumns: m ? '1fr' : '1fr 1fr', gap:18 }}>
          {/* Ecosystem card */}
          <div className="h3reveal d1" style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:20, padding:28 }}>
            <div style={{ fontSize:10, fontWeight:700, color:C.muted, letterSpacing:'0.09em', marginBottom:14 }}>INTEGRATIONS</div>
            <h3 style={{ fontSize: m?20:24, fontWeight:700, color:C.text, letterSpacing:'-0.03em', marginBottom:8, lineHeight:1.2 }}>Built for your ecosystem.</h3>
            <p style={{ fontSize:14, color:C.muted, marginBottom:28, lineHeight:1.55 }}>Connects instantly with your POS, CRM, booking and loyalty tools — everything works together, automatically.</p>
            <div style={{ display:'flex', justifyContent:'center', marginBottom:20 }}>
              <div style={{ width:52, height:52, borderRadius:14, background:C.green, display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontWeight:900, fontSize:13, letterSpacing:'-0.06em', boxShadow:`0 0 0 8px rgba(13,61,26,0.30)` }}>H360</div>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:8 }}>
              {integ.map(int=>(
                <div key={int.name} style={{ padding:'8px 10px', border:`1px solid ${C.border}`, borderRadius:10, background:C.card2, textAlign:'center' }}>
                  <div style={{ width:8, height:8, borderRadius:99, background:int.color, margin:'0 auto 5px' }}/>
                  <div style={{ fontSize:10, fontWeight:600, color:C.muted }}>{int.name}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Dashboard card */}
          <div className="h3reveal d2" style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:20, padding:28 }}>
            <div style={{ fontSize:10, fontWeight:700, color:C.muted, letterSpacing:'0.09em', marginBottom:14 }}>DASHBOARD</div>
            <h3 style={{ fontSize: m?20:24, fontWeight:700, color:C.text, letterSpacing:'-0.03em', marginBottom:8, lineHeight:1.2 }}>Your restaurant, one clear view.</h3>
            <p style={{ fontSize:14, color:C.muted, marginBottom:24, lineHeight:1.55 }}>Real-time data across every table, every shift, every channel. See what drives revenue.</p>
            <div style={{ background:'#0d0d0d', border:`1px solid ${C.border}`, borderRadius:14, padding:14 }}>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:8, marginBottom:12 }}>
                {[
                  {lab:'Revenue',val:'€18,420',delta:'+34%',c:'#22c55e'},
                  {lab:'Rank',   val:'#1',     delta:'↑9',   c:'#22c55e'},
                  {lab:'Reviews',val:'29',      delta:'★4.9', c:'#eab308'},
                ].map(s=>(
                  <div key={s.lab} style={{ background:'#1a1a1a', border:`1px solid #2a2a2a`, borderRadius:10, padding:10 }}>
                    <div style={{ fontSize:9, color:'#555', marginBottom:2 }}>{s.lab}</div>
                    <div style={{ fontSize:17, fontWeight:800, color:'#fff', letterSpacing:'-0.03em' }}>{s.val}</div>
                    <div style={{ fontSize:10, color:s.c, fontWeight:600 }}>{s.delta}</div>
                  </div>
                ))}
              </div>
              <div style={{ display:'flex', alignItems:'flex-end', gap:3, height:44 }}>
                {[25,38,32,50,44,58,52,72,65,80,76,95].map((h,i)=>(
                  <div key={i} style={{ flex:1, background:i===11?C.green:'#1e4d2a', borderRadius:'2px 2px 0 0', height:`${h}%`, opacity:i===11?1:0.5 }}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   8. HEAR FROM OUR CLIENTS — scrolling marquee title + quote carousel
   Sunday: animated marquee header + prev/next quote slides with crossfade
   ══════════════════════════════════════════════ */
const QUOTES = [
  { q:"There's an art to dining in Malta, but no art to losing €1,200 a month to delivery apps. H360 fixed that.", name:'Jonathan Brincat', title:'Founder, Noni — Valletta', bg:'linear-gradient(150deg,#0f1a0f,#1a2d1a)' },
  { q:'Large parties can pay how they want — split by dish, by person, by card. My staff focus on guests, not bills.', name:'Maria Schembri', title:"Owner, Ta' Marija — Mdina", bg:'linear-gradient(150deg,#0a0a1a,#0f0f2d)' },
  { q:'Tips went from 18% to 28% on average the month we switched. The team noticed immediately.', name:'Antoine Camilleri', title:'Owner, Rubino — Valletta', bg:'linear-gradient(150deg,#1a0a0f,#2d0f1a)' },
];

function QuoteCarousel({ m }: { m: boolean }) {
  const [idx, setIdx] = useState(0);
  const [key, setKey] = useState(0); // triggers re-mount for animation

  const go = useCallback((next: number) => {
    setIdx(next);
    setKey(k => k + 1);
  }, []);

  const q = QUOTES[idx];

  return (
    <section style={{ background: C.bg, borderTop:`1px solid ${C.border}` }}>
      {/* Scrolling marquee title — Sunday's signature animation */}
      <div style={{ overflow:'hidden', borderBottom:`1px solid ${C.border}` }}>
        <div className="h3mq">
          {[...Array(6)].map((_,r)=>(
            <div key={r} style={{ display:'flex', alignItems:'center', flexShrink:0 }}>
              <span style={{ fontSize: m?30:52, fontWeight:800, color:C.text, letterSpacing:'-0.04em', padding: m?'20px 24px':'32px 40px', whiteSpace:'nowrap', borderRight:`1px solid ${C.border}` }}>
                Hear from our clients
              </span>
              <div style={{ padding: m?'20px 20px':'32px 28px', borderRight:`1px solid ${C.border}`, display:'flex', alignItems:'center' }}>
                <svg width={m?26:36} height={m?26:36} viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="none" stroke={C.greenV} strokeWidth="2"/></svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quote slide */}
      <div style={{ maxWidth:1040, margin:'0 auto', padding: m ? '52px 24px' : '80px 40px' }}>
        <div style={{ display: m ? 'flex' : 'grid', flexDirection: m ? 'column' : undefined, gridTemplateColumns:'1fr 1fr', gap: m ? 36 : 72, alignItems:'center' }}>
          {/* Left — text */}
          <div>
            {/* Prev / Next controls */}
            <div style={{ display:'flex', gap:10, marginBottom:36, alignItems:'center' }}>
              <button onClick={()=>go((idx-1+QUOTES.length)%QUOTES.length)}
                style={{ width:46, height:46, borderRadius:99, border:`1px solid ${C.border}`, background:'transparent', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', color:C.text, transition:'border-color 0.15s' }}
                onMouseEnter={e=>e.currentTarget.style.borderColor='#555'}
                onMouseLeave={e=>e.currentTarget.style.borderColor=C.border}
                data-testid="button-quote-prev">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <button onClick={()=>go((idx+1)%QUOTES.length)}
                style={{ width:46, height:46, borderRadius:99, border:`1px solid ${C.border}`, background:'transparent', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', color:C.text, transition:'border-color 0.15s' }}
                onMouseEnter={e=>e.currentTarget.style.borderColor='#555'}
                onMouseLeave={e=>e.currentTarget.style.borderColor=C.border}
                data-testid="button-quote-next">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
              </button>
              <div style={{ display:'flex', alignItems:'center', gap:7, marginLeft:8 }}>
                {QUOTES.map((_,i)=>(
                  <button key={i} onClick={()=>go(i)}
                    style={{ width:i===idx?24:8, height:8, borderRadius:99, background:i===idx?C.text:C.border, border:'none', cursor:'pointer', padding:0, transition:'all 0.25s cubic-bezier(.22,1,.36,1)' }}
                  />
                ))}
              </div>
            </div>
            {/* Quote text with crossfade */}
            <blockquote key={key} className="h3qactive" style={{ fontSize: m?22:34, fontWeight:700, color:C.text, letterSpacing:'-0.032em', lineHeight:1.22, marginBottom:28, fontStyle:'normal' }}>
              &ldquo;{q.q}&rdquo;
            </blockquote>
            <div key={`${key}a`} className="h3qactive" style={{ fontSize:15, color:C.muted, animationDelay:'0.06s' }}>
              — {q.name}, <span style={{ color:C.dim }}>{q.title}</span>
            </div>
          </div>
          {/* Right — photo card with crossfade */}
          <div key={`${key}b`} className="h3qactive" style={{
            height: m ? 220 : 340, borderRadius:20,
            background: q.bg, border:`1px solid ${C.border}`,
            display:'flex', alignItems:'center', justifyContent:'center',
            overflow:'hidden', position:'relative',
          }}>
            <svg style={{ position:'absolute', inset:0, opacity:0.04, width:'100%', height:'100%', pointerEvents:'none' }}>
              <defs><pattern id="qp" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse"><circle cx="18" cy="18" r="1" fill="#fff"/></pattern></defs>
              <rect width="100%" height="100%" fill="url(#qp)"/>
            </svg>
            <div style={{ textAlign:'center', padding:32, position:'relative' }}>
              <div style={{ width:58, height:58, borderRadius:99, background:`linear-gradient(135deg,${C.green},${C.greenV})`, display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontWeight:700, fontSize:20, margin:'0 auto 14px' }}>
                {q.name.split(' ').map(w=>w[0]).join('')}
              </div>
              <div style={{ fontSize:16, fontWeight:600, color:C.text }}>{q.name}</div>
              <div style={{ fontSize:13, color:C.muted, marginTop:4 }}>{q.title}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   9. LOYALTY — dark forest green
   Sunday: "Guest platform NEW · From first visit to forever fan."
   ══════════════════════════════════════════════ */
function Loyalty({ m }: { m: boolean }) {
  const ref = useReveal();
  return (
    <section id="h360-loyalty" style={{ background:C.green, padding: m ? '80px 24px' : '104px 40px', borderTop:`1px solid rgba(255,255,255,0.06)` }}>
      <div ref={ref} className="h3reveal" style={{ maxWidth:1040, margin:'0 auto', display: m ? 'flex' : 'grid', flexDirection: m ? 'column' : undefined, gridTemplateColumns:'1fr 1fr', gap:60, alignItems:'center' }}>
        <div>
          <div style={{ display:'inline-flex', alignItems:'center', gap:6, padding:'5px 12px', borderRadius:99, background:'rgba(255,255,255,0.10)', marginBottom:22 }}>
            <span style={{ fontSize:11, fontWeight:700, color:C.greenL, letterSpacing:'0.09em' }}>GUEST PLATFORM</span>
            <span style={{ fontSize:10, fontWeight:700, color:'#fff', background:'rgba(255,255,255,0.2)', padding:'2px 7px', borderRadius:99 }}>NEW</span>
          </div>
          <h2 style={{ fontSize: m?30:52, fontWeight:800, letterSpacing:'-0.042em', color:'#fff', marginBottom:16, lineHeight:1.06 }}>
            From first visit<br/>to forever fan.
          </h2>
          <p style={{ fontSize: m?15:18, color:C.greenL, lineHeight:1.65, marginBottom:34, maxWidth:440 }}>
            With H360, ARC AI learns what your guests love — recommending the right dish, the right offer, the right moment. Guests order, pay, and come back. A virtuous circle of loyalty and revenue.
          </p>
          <a href="/h360/demo" style={{ display:'inline-block', padding:'13px 30px', background:'#ffffff', color:C.green, borderRadius:99, fontSize:15, fontWeight:700, cursor:'pointer', textDecoration:'none', letterSpacing:'-0.01em', transition:'opacity 0.15s' }}
            onMouseEnter={e=>e.currentTarget.style.opacity='0.9'}
            onMouseLeave={e=>e.currentTarget.style.opacity='1'}
            data-testid="button-h360-loyalty-cta">
            Discover
          </a>
        </div>
        <div className="h3reveal d1" style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.10)', borderRadius:20, padding:28 }}>
          <div style={{ fontSize:11, fontWeight:700, color:C.greenL, marginBottom:22, letterSpacing:'0.06em' }}>ARC AI GUEST LOOP</div>
          {[
            {n:'01',t:'First visit detected',  s:'ARC AI profiles the guest from their first scan'},
            {n:'02',t:'Preference learned',    s:'Dish preferences, visit frequency, spend patterns'},
            {n:'03',t:'Perfect offer sent',    s:'WhatsApp or email — right dish, right moment'},
            {n:'04',t:'Guest returns',         s:'Every visit deepens the loyalty loop'},
          ].map((step,i)=>(
            <div key={i} style={{ display:'flex', gap:14, alignItems:'flex-start', marginBottom:i<3?22:0, position:'relative' }}>
              <div style={{ width:32, height:32, borderRadius:99, background:'rgba(255,255,255,0.10)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, fontSize:11, fontWeight:700, color:'#fff' }}>{step.n}</div>
              {i<3&&<div style={{ position:'absolute', left:15, top:32, width:2, height:22, background:'rgba(255,255,255,0.10)' }}/>}
              <div>
                <div style={{ fontSize:14, fontWeight:600, color:'#ffffff' }}>{step.t}</div>
                <div style={{ fontSize:12, color:C.greenL, marginTop:2 }}>{step.s}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   10. SUPPORT STRIP
   ══════════════════════════════════════════════ */
function SupportStrip({ m }: { m: boolean }) {
  const ref = useReveal();
  return (
    <section style={{ background:C.bg, borderTop:`1px solid ${C.border}`, borderBottom:`1px solid ${C.border}`, padding: m ? '44px 24px' : '60px 40px' }}>
      <div ref={ref} className="h3reveal" style={{ maxWidth:900, margin:'0 auto', display:'grid', gridTemplateColumns: m ? '1fr' : 'repeat(3,1fr)', gap: m ? 28 : 0 }}>
        {[
          {val:'24/7',   lab:'Local Malta support'},
          {val:'3 days', lab:'To go live and start earning direct'},
          {val:'100%',   lab:'Direct-order coverage from day one'},
        ].map((s,i)=>(
          <div key={i} className={`h3reveal d${i+1}`} style={{ display:'flex', alignItems:'center', gap:16, padding: m ? 0 : '0 32px', borderRight: !m && i<2 ? `1px solid ${C.border}` : 'none' }}>
            <div style={{ fontSize: m?38:48, fontWeight:800, color:C.text, letterSpacing:'-0.045em', lineHeight:1, flexShrink:0 }}>{s.val}</div>
            <div style={{ fontSize:14, color:C.muted, lineHeight:1.4 }}>{s.lab}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   11. FINAL CTA — Sunday: "Try sunday for free!"
   ══════════════════════════════════════════════ */
function FinalCTA({ m }: { m: boolean }) {
  const ref = useReveal();
  return (
    <section id="h360-cta" style={{ background:C.bg, padding: m ? '80px 24px 104px' : '104px 40px 128px' }}>
      <div ref={ref} className="h3reveal" style={{ maxWidth:620, margin:'0 auto', textAlign:'center' }}>
        <h2 style={{ fontSize: m?30:56, fontWeight:800, letterSpacing:'-0.042em', color:C.text, marginBottom:14, lineHeight:1.04 }}>
          Save your revenue.<br/>Start today.
        </h2>
        <p style={{ fontSize: m?15:18, color:C.muted, marginBottom:38, lineHeight:1.6 }}>
          An ARC AI expert will reach out to you today. Ready to grow with H360?
        </p>
        <div style={{ background:C.card, border:`1.5px solid ${C.border}`, borderRadius:14, padding:'6px 6px 6px 20px', display:'flex', alignItems:'center', gap:8, maxWidth:480, margin:'0 auto', boxShadow:'0 4px 60px rgba(0,0,0,0.5)' }}>
          <input type="text" placeholder="Your restaurant name"
            style={{ flex:1, border:'none', outline:'none', fontSize:15, color:C.text, background:'transparent', fontFamily:'inherit' }}
            data-testid="input-h360-final-cta"/>
          <a href="/h360/demo" style={{ padding:'12px 20px', background:'#ffffff', color:'#000', borderRadius:10, fontSize:14, fontWeight:700, cursor:'pointer', whiteSpace:'nowrap', textDecoration:'none', display:'inline-block', letterSpacing:'-0.01em', transition:'opacity 0.15s' }}
            onMouseEnter={e=>e.currentTarget.style.opacity='0.88'}
            onMouseLeave={e=>e.currentTarget.style.opacity='1'}
            data-testid="button-h360-final-cta">
            Get a free demo
          </a>
        </div>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:6, marginTop:14, fontSize:12, color:C.dim }}>
          <div style={{ width:16, height:16, borderRadius:4, background:'#fff', display:'flex', alignItems:'center', justifyContent:'center' }}>
            <span style={{ color:'#000', fontSize:8, fontWeight:800 }}>A</span>
          </div>
          Powered by ARC AI · No commitment needed
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   ROOT
   ══════════════════════════════════════════════ */
export default function H360BelowHero() {
  const m = useIsMobile();
  return (
    <div style={{ fontFamily:'"Inter",system-ui,-apple-system,Arial,sans-serif', background:C.bg, color:C.text, overflowX:'hidden' }}>
      <style>{ANIM_CSS}</style>
      <Stats              m={m} />
      <Problem            m={m} />
      <ProductCards       m={m} />
      <TrustLogos         m={m} />
      <InlineTestimonials m={m} />
      <ValueCards         m={m} />
      <Ecosystem          m={m} />
      <QuoteCarousel      m={m} />
      <Loyalty            m={m} />
      <SupportStrip       m={m} />
      <FinalCTA           m={m} />
    </div>
  );
}
