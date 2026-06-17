'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

/* ─────────────────────────────────────────────────────
   Sunday exact design tokens (from extractBranding)
   bg: #0a0a0a  card: #111  border: #1f1f1f
   font: Helvetica Neue / Arial (system sans)
   h1: 64px  h2: 48px  body: 16px
   primary pink: #FF17E9  button-radius: 64px
───────────────────────────────────────────────────── */
const C = {
  bg:     '#0a0a0a',
  card:   '#111111',
  card2:  '#161616',
  border: '#1f1f1f',
  white:  '#ffffff',
  muted:  '#888888',
  dim:    '#3a3a3a',
  pink:   '#FF17E9',
  green:  '#4ade80',
};
const FONT = '"Helvetica Neue",Arial,system-ui,sans-serif';

/* ─── keyframes + utility classes ─── */
const CSS = `
  @keyframes sdmq  { to { transform:translateX(-50%) } }
  @keyframes sdmq2 { from { transform:translateX(-50%) } to { transform:translateX(0) } }
  .sdmq  { animation:sdmq  36s linear infinite; display:flex; width:max-content; will-change:transform; }
  .sdmq2 { animation:sdmq2 28s linear infinite; display:flex; width:max-content; will-change:transform; }
  .sdmq:hover,.sdmq2:hover { animation-play-state:paused; }

  .sdr { opacity:0; transform:translateY(32px);
         transition:opacity .7s cubic-bezier(.22,1,.36,1), transform .7s cubic-bezier(.22,1,.36,1); }
  .sdr.sdin { opacity:1; transform:translateY(0); }
  .d1{transition-delay:.08s}.d2{transition-delay:.16s}.d3{transition-delay:.24s}

  @keyframes qfade { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
  .qactive { animation:qfade .45s cubic-bezier(.22,1,.36,1) both; }

  /* drag-scroll rail */
  .rail { overflow-x:auto; scroll-snap-type:x mandatory; -webkit-overflow-scrolling:touch;
          scrollbar-width:none; cursor:grab; user-select:none; }
  .rail::-webkit-scrollbar { display:none; }
  .rail:active { cursor:grabbing; }
  .snap { scroll-snap-align:start; flex-shrink:0; }
`;

/* ─── hooks ─── */
function useReveal(t = 0.1) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const ob = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('sdin'); ob.disconnect(); }
    }, { threshold: t });
    ob.observe(el);
    return () => ob.disconnect();
  }, [t]);
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

function useDrag() {
  const ref = useRef<HTMLDivElement>(null);
  const s = useRef({ on: false, x: 0, sl: 0 });
  return {
    ref,
    onMouseDown:  (e: React.MouseEvent) => { s.current = { on:true, x:e.pageX, sl:ref.current?.scrollLeft??0 }; },
    onMouseMove:  (e: React.MouseEvent) => { if (!s.current.on || !ref.current) return; e.preventDefault(); ref.current.scrollLeft = s.current.sl - (e.pageX - s.current.x); },
    onMouseUp:    () => { s.current.on = false; },
    onMouseLeave: () => { s.current.on = false; },
  };
}

/* ═══════════════════════════════════════════════
   §1 STATS
   Sunday: 4 numbers, large, minimal, horizontal
═══════════════════════════════════════════════ */
function Stats({ m }: { m: boolean }) {
  const ref = useReveal();
  const st = [
    { n: '3,500+', l: 'Malta restaurants' },
    { n: '+34%',   l: 'Avg revenue uplift' },
    { n: '4,200+', l: 'Reviews generated' },
    { n: '€0',     l: 'Commission per direct order' },
  ];
  return (
    <section style={{ background: C.bg, borderBottom: `1px solid ${C.border}` }}>
      <div ref={ref} className="sdr" style={{
        maxWidth: 1160, margin: '0 auto', fontFamily: FONT,
        display: 'grid', gridTemplateColumns: m ? 'repeat(2,1fr)' : 'repeat(4,1fr)',
      }}>
        {st.map((s, i) => (
          <div key={i} className={`sdr d${Math.min(i+1,3)}`} style={{
            padding: m ? '40px 20px' : '56px 40px', textAlign: 'center',
            borderRight: (!m && i < 3) ? `1px solid ${C.border}` : 'none',
            borderBottom: (m && i < 2) ? `1px solid ${C.border}` : 'none',
          }}>
            <div style={{ fontSize: m ? 44 : 64, fontWeight: 800, color: C.white, letterSpacing: '-0.04em', lineHeight: 1 }}>{s.n}</div>
            <div style={{ fontSize: 13, color: C.muted, marginTop: 8, fontFamily: FONT }}>{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   §2 PROBLEM — Sunday exact:
   "Paying in restaurants used to be slow,
    awkward and frustrating."
   Left-aligned, 48-64px, with paragraph below
═══════════════════════════════════════════════ */
function Problem({ m }: { m: boolean }) {
  const hRef = useReveal(); const pRef = useReveal();
  return (
    <section style={{ background: C.bg, padding: m ? '72px 24px' : '112px 80px' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', fontFamily: FONT }}>
        <h2 ref={hRef} className="sdr" style={{
          fontSize: m ? 32 : 56, fontWeight: 800, color: C.white,
          letterSpacing: '-0.04em', lineHeight: 1.1, maxWidth: 800, marginBottom: 20,
        }}>
          Ordering and paying used to cost Malta restaurants 30% of every sale.
        </h2>
        <p ref={pRef} className="sdr d1" style={{
          fontSize: m ? 16 : 20, color: C.muted, lineHeight: 1.7, maxWidth: 560,
        }}>
          H360 changed that with ARC AI-powered tools that learn, adapt, and create value at every step. Direct orders, Google reviews, and guest loyalty — one platform.
        </p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   §3 PRODUCT RAIL — Sunday exact:
   Dark #111 cards. IMAGE fills top ~65%.
   Bold title + one-line subtitle at bottom.
   No tag pills. No paragraphs.
═══════════════════════════════════════════════ */

/* CSS device illustrations — one per card, fills the image area */
function ImgDirectOrders() {
  return (
    <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px 20px 8px' }}>
      <div style={{ width: '100%', maxWidth: 240, background: '#0d0d0d', borderRadius: 16, border: `1px solid ${C.border}`, overflow: 'hidden', fontFamily: FONT }}>
        <div style={{ padding: '12px 14px', borderBottom: `1px solid ${C.border}`, fontSize: 10, color: C.muted }}>Live orders — Table 7</div>
        {[['Braġjoli ×2','€28.00'],['Lampuki Pie','€16.50'],['Kinnie ×3','€7.50']].map(([a,b],i) => (
          <div key={i} style={{ display:'flex', justifyContent:'space-between', padding:'10px 14px', borderBottom: i<2 ? `1px solid ${C.border}` : 'none', fontSize: 12 }}>
            <span style={{ color:'#ccc' }}>{a}</span><span style={{ fontWeight:700, color:C.white }}>{b}</span>
          </div>
        ))}
        <div style={{ margin:'10px 14px 14px', padding:'10px', background:C.green, borderRadius:8, textAlign:'center', fontSize:13, fontWeight:700, color:'#052010', letterSpacing:'-0.01em' }}>
          Pay €52.00 — direct
        </div>
      </div>
    </div>
  );
}

function ImgGoogleRanking() {
  return (
    <div style={{ flex:1, display:'flex', alignItems:'center', justifyContent:'center', padding:'24px 20px 8px' }}>
      <div style={{ width:'100%', maxWidth:240, background:'#0d0d0d', borderRadius:16, border:`1px solid ${C.border}`, overflow:'hidden', fontFamily:FONT }}>
        <div style={{ padding:'12px 14px', borderBottom:`1px solid ${C.border}`, fontSize:10, color:C.muted }}>Google Maps — Valletta</div>
        {[{r:'#1',n:'Your Restaurant',s:'4.9 ★',hi:true},{r:'#2',n:'Competitor A',s:'4.2 ★',hi:false},{r:'#3',n:'Competitor B',s:'4.0 ★',hi:false}].map((row,i) => (
          <div key={i} style={{ display:'flex', alignItems:'center', gap:10, padding:'10px 14px', borderBottom: i<2?`1px solid ${C.border}`:'none', background:row.hi?'rgba(74,222,128,0.06)':'transparent' }}>
            <span style={{ fontSize:11, fontWeight:800, color:row.hi?C.green:'#444', width:20 }}>{row.r}</span>
            <span style={{ flex:1, fontSize:12, color:row.hi?C.white:'#666', fontWeight:row.hi?700:400 }}>{row.n}</span>
            <span style={{ fontSize:11, color:row.hi?C.green:'#444' }}>{row.s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ImgLoyalty() {
  return (
    <div style={{ flex:1, display:'flex', alignItems:'center', justifyContent:'center', padding:'24px 20px 8px' }}>
      <div style={{ width:'100%', maxWidth:240, background:'#0d0d0d', borderRadius:16, border:`1px solid ${C.border}`, padding:14, fontFamily:FONT }}>
        <div style={{ fontSize:10, color:C.muted, marginBottom:8 }}>ARC AI — guest message</div>
        <div style={{ background:'rgba(255,255,255,0.05)', borderRadius:10, padding:'10px 12px', fontSize:12, color:'#ddd', lineHeight:1.5, marginBottom:10 }}>
          &ldquo;Hey Maria! Your favourite Braġjoli is back. Book your usual table?&rdquo;
        </div>
        <div style={{ display:'flex', gap:6 }}>
          <div style={{ flex:1, padding:'8px', background:C.white, borderRadius:7, textAlign:'center', fontSize:11, fontWeight:700, color:'#000' }}>Book now</div>
          <div style={{ flex:1, padding:'8px', background:'#1a1a1a', borderRadius:7, textAlign:'center', fontSize:11, color:'#555' }}>Later</div>
        </div>
      </div>
    </div>
  );
}

function ImgDashboard() {
  return (
    <div style={{ flex:1, display:'flex', alignItems:'center', justifyContent:'center', padding:'24px 20px 8px' }}>
      <div style={{ width:'100%', maxWidth:240, background:'#0d0d0d', borderRadius:16, border:`1px solid ${C.border}`, padding:16, fontFamily:FONT }}>
        <div style={{ display:'flex', justifyContent:'space-between', marginBottom:16 }}>
          <div>
            <div style={{ fontSize:10, color:C.muted }}>This month</div>
            <div style={{ fontSize:28, fontWeight:800, color:C.white, letterSpacing:'-0.04em', lineHeight:1 }}>€18,420</div>
            <div style={{ fontSize:11, color:C.green, fontWeight:600, marginTop:2 }}>↑ +34%</div>
          </div>
          <div style={{ textAlign:'right' }}>
            <div style={{ fontSize:10, color:C.muted }}>Commission</div>
            <div style={{ fontSize:22, fontWeight:700, color:C.green }}>€0</div>
          </div>
        </div>
        <div style={{ display:'flex', alignItems:'flex-end', gap:3, height:40 }}>
          {[28,42,36,55,48,66,60,76,70,86,78,95].map((h,i) => (
            <div key={i} style={{ flex:1, background: i===11?C.white:'rgba(255,255,255,0.14)', borderRadius:'2px 2px 0 0', height:`${h}%` }}/>
          ))}
        </div>
      </div>
    </div>
  );
}

function ImgAudit() {
  return (
    <div style={{ flex:1, display:'flex', alignItems:'center', justifyContent:'center', padding:'24px 20px 8px' }}>
      <div style={{ width:'100%', maxWidth:240, background:'#0d0d0d', borderRadius:16, border:`1px solid ${C.border}`, padding:16, fontFamily:FONT }}>
        <div style={{ fontSize:11, fontWeight:700, color:C.white, marginBottom:14 }}>ARC AI — Your Restaurant</div>
        {[['Google ranking',90,C.green],['Review velocity',46,'#f97316'],['Direct orders',18,'#ef4444']].map(([l,p,col],i) => (
          <div key={i} style={{ marginBottom:10 }}>
            <div style={{ display:'flex', justifyContent:'space-between', fontSize:11, color:'#aaa', marginBottom:4 }}>
              <span>{l}</span><span style={{ color:col as string }}>{p}%</span>
            </div>
            <div style={{ height:4, background:'#222', borderRadius:99 }}>
              <div style={{ height:'100%', width:`${p}%`, background:col as string, borderRadius:99 }}/>
            </div>
          </div>
        ))}
        <div style={{ padding:'9px 12px', background:'rgba(255,255,255,0.04)', border:`1px solid ${C.border}`, borderRadius:8, fontSize:11, color:C.white, textAlign:'center', marginTop:6 }}>
          Fix 3 issues → +€1,240/mo
        </div>
      </div>
    </div>
  );
}

const CARDS = [
  { title: 'Direct Orders',    sub: 'Zero commission. Guests pay in seconds.', img: <ImgDirectOrders/> },
  { title: 'Google Ranking',   sub: 'ARC AI gets you to #1 automatically.',    img: <ImgGoogleRanking/> },
  { title: 'Guest Loyalty',    sub: 'Right message, right moment, automated.', img: <ImgLoyalty/> },
  { title: 'Revenue View',     sub: 'Every venue, one clear dashboard.',        img: <ImgDashboard/> },
  { title: 'ARC AI Audit',     sub: 'Scan, fix, and grow — in the right order.',img: <ImgAudit/> },
];

function ProductRail({ m }: { m: boolean }) {
  const ref = useReveal();
  const drag = useDrag();
  const CARD_W = m ? Math.min(300, typeof window !== 'undefined' ? window.innerWidth * 0.82 : 300) : 320;
  const CARD_H = 460;
  return (
    <section style={{ background: C.bg, paddingTop: m ? 64 : 96, borderTop: `1px solid ${C.border}` }}>
      {/* header */}
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: m ? '0 24px 32px' : '0 80px 48px', fontFamily: FONT }}>
        <h2 ref={ref} className="sdr" style={{ fontSize: m ? 28 : 48, fontWeight: 800, color: C.white, letterSpacing: '-0.04em', marginBottom: 6 }}>
          Everything your restaurant needs.
        </h2>
        <p style={{ fontSize: m ? 15 : 18, color: C.muted }}>One platform. Five ways to grow.</p>
      </div>
      {/* rail */}
      <div {...drag} className="rail" style={{ display:'flex', gap:12, paddingLeft: m?24:80, paddingBottom: m?48:72, paddingRight: m?24:80 }}>
        {CARDS.map((c, i) => (
          <div key={i} className="snap" style={{
            width: CARD_W, height: CARD_H,
            background: C.card2, borderRadius: 16, border: `1px solid ${C.border}`,
            display: 'flex', flexDirection: 'column', overflow: 'hidden', flexShrink: 0,
          }}>
            {/* image area — Sunday: fills top ~65% of card */}
            <div style={{ flex: 1, display:'flex', flexDirection:'column', background: '#0c0c0c', minHeight: 0 }}>
              {c.img}
            </div>
            {/* text strip — Sunday: just title + subtitle, bottom */}
            <div style={{ padding: '20px 22px 24px', borderTop: `1px solid ${C.border}`, flexShrink: 0 }}>
              <div style={{ fontSize: m ? 17 : 19, fontWeight: 800, color: C.white, letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: 5, fontFamily: FONT }}>
                {c.title}
              </div>
              <div style={{ fontSize: 13, color: C.muted, fontFamily: FONT }}>
                {c.sub}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   §4 TRUST — Sunday: 2 rows of restaurant logos
   We use text pills (no logo images available)
   Two rows scrolling in opposite directions
═══════════════════════════════════════════════ */
const NAMES = ['Noni','Rubino','Ta\' Marija','Bahia','Guze\'','Zen','Palazzo Preca','Terrone','De Mondion','Margo','Rock Salt','Tartarun','Beati Paoli','Trabuxu','Palazzo Parisio','Rickshaw'];
const NAMES2 = ['Cugó Gran','Sciacca Grill','Medina','The Harbour Club','Palazzo Consiglia','Tal-Familja','Ta\' Kris','Diar il-Bniet','Commando','Bacchus','Vecchia Napoli','Il-Girna'];

function TrustLogos({ m }: { m: boolean }) {
  const ref = useReveal();
  return (
    <section style={{ background: C.bg, padding: m ? '64px 0' : '96px 0', borderTop: `1px solid ${C.border}` }}>
      <div ref={ref} className="sdr" style={{ textAlign:'center', padding: m?'0 24px 40px':'0 80px 56px', fontFamily:FONT }}>
        <h2 style={{ fontSize: m?24:38, fontWeight:800, letterSpacing:'-0.04em', color:C.white, marginBottom:8 }}>
          Trusted by thousands of restaurants.
        </h2>
        <p style={{ fontSize:16, color:C.muted }}>From casual trattorias to Michelin-recommended dining rooms.</p>
      </div>
      {[NAMES, NAMES2].map((row, ri) => (
        <div key={ri} style={{ overflow:'hidden', position:'relative', marginBottom: ri===0?12:0 }}>
          <div style={{ position:'absolute', left:0, top:0, bottom:0, width:80, background:`linear-gradient(to right,${C.bg},transparent)`, zIndex:2, pointerEvents:'none' }}/>
          <div style={{ position:'absolute', right:0, top:0, bottom:0, width:80, background:`linear-gradient(to left,${C.bg},transparent)`, zIndex:2, pointerEvents:'none' }}/>
          <div className={ri===0?'sdmq':'sdmq2'}>
            {[...row,...row,...row,...row].map((name, i) => (
              <div key={i} style={{
                padding:'8px 20px', border:`1px solid ${C.border}`, borderRadius:99,
                background: C.card, fontSize:13, fontWeight:600, color:'#aaa',
                whiteSpace:'nowrap', margin: ri===0?'0 6px':'0 6px', flexShrink:0, fontFamily:FONT,
              }}>{name}</div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

/* ═══════════════════════════════════════════════
   §5 "EVERY CHECK NOW DRIVES VALUE"
   §5a FOR OPERATORS / FOR STAFF / FOR GUESTS
   Sunday: 3 SQUARE cards side-by-side
   Full-bleed photo-like bg + text overlay top-left
═══════════════════════════════════════════════ */
type ValCardProps = { label: string; title: string; tintFrom: string; tintTo: string; widget: React.ReactNode; m: boolean; delay?: string; };

function ValCard({ label, title, tintFrom, tintTo, widget, m, delay='' }: ValCardProps) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`sdr${delay}`} style={{
      flex: 1, minWidth: m ? '100%' : 0,
      aspectRatio: m ? '4/3' : '1/1',
      borderRadius: 16, overflow:'hidden', position:'relative',
      background: tintFrom, border:`1px solid ${C.border}`,
      display:'flex', flexDirection:'column',
    }}>
      {/* Photo simulation: gradient + grain */}
      <div style={{ position:'absolute', inset:0, background:`linear-gradient(150deg,${tintFrom} 0%,${tintTo} 100%)`, opacity:0.9 }}/>
      <svg style={{ position:'absolute', inset:0, width:'100%', height:'100%', opacity:0.045 }} preserveAspectRatio="xMidYMid slice">
        <filter id={`n${label.slice(4,6)}`}><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter>
        <rect width="100%" height="100%" filter={`url(#n${label.slice(4,6)})`}/>
      </svg>
      {/* subtle light bloom */}
      <div style={{ position:'absolute', top:'-10%', right:'-10%', width:'70%', height:'70%', borderRadius:'50%', background:'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)', pointerEvents:'none' }}/>
      {/* content */}
      <div style={{ position:'relative', padding: m?'24px':'28px', flex:1, display:'flex', flexDirection:'column', fontFamily:FONT }}>
        <div style={{ fontSize:10, fontWeight:700, color:'rgba(255,255,255,0.55)', letterSpacing:'0.12em', marginBottom:10 }}>{label}</div>
        <h3 style={{ fontSize: m?20:22, fontWeight:800, color:C.white, letterSpacing:'-0.03em', lineHeight:1.15, marginBottom:'auto' }}>{title}</h3>
        <div style={{ marginTop:24 }}>{widget}</div>
      </div>
    </div>
  );
}

/* Floating frosted widgets — Sunday exact */
function WidgetRevenue() {
  return (
    <div style={{ background:'rgba(0,0,0,0.45)', backdropFilter:'blur(18px)', WebkitBackdropFilter:'blur(18px)', border:'1px solid rgba(255,255,255,0.12)', borderRadius:14, padding:'14px 18px', display:'inline-block' }}>
      <div style={{ fontSize:10, color:'rgba(255,255,255,0.4)', marginBottom:3 }}>Last month</div>
      <div style={{ fontSize:28, fontWeight:800, color:'#fff', letterSpacing:'-0.04em', lineHeight:1 }}>€18,420</div>
      <svg width="110" height="32" viewBox="0 0 110 32" style={{ display:'block', marginTop:8 }}>
        <polyline points="0,28 18,24 36,17 54,21 72,10 90,6 110,3" fill="none" stroke={C.pink} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="54" cy="21" r="4" fill={C.pink}/>
      </svg>
    </div>
  );
}

function WidgetTip() {
  return (
    <div style={{ background:'rgba(0,0,0,0.45)', backdropFilter:'blur(18px)', WebkitBackdropFilter:'blur(18px)', border:'1px solid rgba(255,255,255,0.12)', borderRadius:14, padding:'12px 18px', display:'inline-flex', alignItems:'center', gap:12 }}>
      <div style={{ width:36, height:36, borderRadius:99, background:'linear-gradient(135deg,#f97316,#ef4444)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:18, flexShrink:0 }}>
        <span style={{ fontSize:16 }}>🙂</span>
      </div>
      <div>
        <div style={{ fontSize:10, color:'rgba(255,255,255,0.4)' }}>Tip received</div>
        <div style={{ fontSize:24, fontWeight:800, color:'#fff', letterSpacing:'-0.03em' }}>+€12</div>
      </div>
    </div>
  );
}

function WidgetQR() {
  return (
    <div style={{ background:'rgba(0,0,0,0.45)', backdropFilter:'blur(18px)', WebkitBackdropFilter:'blur(18px)', border:'1px solid rgba(255,255,255,0.12)', borderRadius:14, padding:'12px 18px', display:'inline-block' }}>
      <div style={{ fontSize:10, color:'rgba(255,255,255,0.4)', marginBottom:5 }}>Table 12 — settled in 9s</div>
      <div style={{ fontSize:18, fontWeight:800, color:'#fff' }}>You&apos;re ready to go!</div>
      <div style={{ fontSize:12, color:'rgba(255,255,255,0.4)', marginTop:2 }}>€52.00 · No commission</div>
    </div>
  );
}

function ValueSection({ m }: { m: boolean }) {
  const ref = useReveal();
  return (
    <section style={{ background: C.bg, padding: m?'72px 24px':'104px 80px', borderTop:`1px solid ${C.border}` }}>
      <div style={{ maxWidth:1160, margin:'0 auto', fontFamily:FONT }}>
        <h2 ref={ref} className="sdr" style={{ fontSize: m?26:48, fontWeight:800, color:C.white, letterSpacing:'-0.04em', marginBottom: m?36:56 }}>
          Every order now drives value.
        </h2>
        <div style={{ display:'flex', flexDirection: m?'column':'row', gap:12 }}>
          <ValCard
            m={m} delay=" d1"
            label="FOR OPERATORS"
            title={"Faster table turns, more insights, higher revenue."}
            tintFrom="#0d1a0e" tintTo="#162b17"
            widget={<WidgetRevenue/>}
          />
          <ValCard
            m={m} delay=" d2"
            label="FOR STAFF"
            title={"Higher tips, smoother service, better guest-connections."}
            tintFrom="#10100d" tintTo="#1e1a08"
            widget={<WidgetTip/>}
          />
          <ValCard
            m={m} delay=" d3"
            label="FOR GUESTS"
            title={"Fast, simple, personalised checkout they'll remember."}
            tintFrom="#0d0d18" tintTo="#14102a"
            widget={<WidgetQR/>}
          />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   §6 ECOSYSTEM — Sunday: 2 side-by-side cards
   Left: "Built for your ecosystem" + integration
   Right: "Your business, one clear view" + chart
═══════════════════════════════════════════════ */
function EcoCard({ title, sub, href, children }: { title:string; sub:string; href:string; children:React.ReactNode }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="sdr" style={{ flex:1, background:C.card2, border:`1px solid ${C.border}`, borderRadius:16, overflow:'hidden', display:'flex', flexDirection:'column', fontFamily:FONT }}>
      <div style={{ padding:'28px 28px 20px' }}>
        <h3 style={{ fontSize:20, fontWeight:800, color:C.white, letterSpacing:'-0.03em', marginBottom:8 }}>{title}</h3>
        <p style={{ fontSize:14, color:C.muted, lineHeight:1.6, marginBottom:20 }}>{sub}</p>
        <a href={href} style={{ display:'inline-flex', alignItems:'center', gap:6, fontSize:14, fontWeight:700, color:C.white, textDecoration:'none' }}>
          Discover <span style={{ fontSize:18, lineHeight:1 }}>→</span>
        </a>
      </div>
      <div style={{ flex:1, background:'#0c0c0c', margin:'0 14px 14px', borderRadius:12, overflow:'hidden', minHeight:220 }}>
        {children}
      </div>
    </div>
  );
}

function HubSpoke() {
  const nodes = [
    { n:'Lightspeed', x:20,  y:20  },
    { n:'TheFork',    x:76,  y:16  },
    { n:'Wolt',       x:8,   y:54  },
    { n:'OLO',        x:82,  y:52  },
    { n:'NCR',        x:20,  y:80  },
    { n:'Clover',     x:76,  y:82  },
  ];
  return (
    <svg viewBox="0 0 200 130" preserveAspectRatio="xMidYMid meet" style={{ width:'100%', height:'100%', display:'block' }}>
      {nodes.map((nd,i) => (
        <g key={i}>
          <line x1="100" y1="65" x2={nd.x*2} y2={nd.y*1.3} stroke="#2a2a2a" strokeWidth="1" strokeDasharray="3,4"/>
          <circle cx={(100+nd.x*2)/2} cy={(65+nd.y*1.3)/2} r="2.5" fill={C.pink} opacity="0.85"/>
        </g>
      ))}
      {nodes.map((nd,i) => (
        <g key={i}>
          <rect x={nd.x*2-16} y={nd.y*1.3-9} width={32} height={18} rx="4" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="0.8"/>
          <text x={nd.x*2} y={nd.y*1.3+4} textAnchor="middle" fontSize="5.5" fill="#666" fontWeight="600" fontFamily={FONT}>{nd.n}</text>
        </g>
      ))}
      {/* center glow */}
      <circle cx="100" cy="65" r="24" fill="#000" stroke="#2a2a2a"/>
      <circle cx="100" cy="65" r="28" fill={C.pink} opacity="0.06"/>
      <circle cx="100" cy="65" r="36" fill={C.pink} opacity="0.03"/>
      <text x="100" y="69" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="900" fontFamily={FONT}>H3</text>
    </svg>
  );
}

function RevenueChart() {
  return (
    <div style={{ padding:20, height:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
      <div>
        <div style={{ fontSize:10, color:C.muted, fontFamily:FONT }}>Revenue this month</div>
        <div style={{ fontSize:28, fontWeight:800, color:C.white, letterSpacing:'-0.04em', fontFamily:FONT }}>€18,420</div>
        <div style={{ fontSize:12, color:C.green, fontWeight:600, fontFamily:FONT }}>↑ +34% vs last month</div>
      </div>
      <div>
        <div style={{ display:'flex', alignItems:'flex-end', gap:3, height:50 }}>
          {[28,42,36,55,48,66,60,76,70,86,78,96].map((h,i) => (
            <div key={i} style={{ flex:1, background: i===11?C.white:'rgba(255,255,255,0.13)', borderRadius:'2px 2px 0 0', height:`${h}%` }}/>
          ))}
        </div>
        <div style={{ fontSize:9, color:C.dim, textAlign:'center', marginTop:6, fontFamily:FONT }}>Last 12 months</div>
      </div>
    </div>
  );
}

function Ecosystem({ m }: { m: boolean }) {
  const ref = useReveal();
  return (
    <section style={{ background: C.card, padding: m?'72px 24px':'104px 80px', borderTop:`1px solid ${C.border}` }}>
      <div style={{ maxWidth:1160, margin:'0 auto', fontFamily:FONT }}>
        <div ref={ref} className="sdr" style={{ marginBottom: m?36:48 }}>
          <h2 style={{ fontSize: m?26:48, fontWeight:800, color:C.white, letterSpacing:'-0.04em', maxWidth:640 }}>
            We don&apos;t pile on more tech. We amplify what already works.
          </h2>
        </div>
        <div style={{ display:'flex', flexDirection: m?'column':'row', gap:12 }}>
          <EcoCard title="Built for your ecosystem." sub="Connects instantly with your POS, CRM, booking and loyalty tools — everything works together, automatically." href="/h360/demo">
            <HubSpoke/>
          </EcoCard>
          <EcoCard title="Your business, one clear view." sub="Real-time data across every venue. See what drives revenue, what kills table turns, and where guests drop off." href="/h360/demo">
            <RevenueChart/>
          </EcoCard>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   §7 TESTIMONIAL STRIP
   Sunday: Large photo on left, bold quote right
═══════════════════════════════════════════════ */
const TESTIMONIALS = [
  { quote: 'We\'ve had more reviews in one month with H360 than in the entire previous year.', name:'Jonathan Brincat', place:'Noni, Valletta', bg:'#1a0d00' },
  { quote: 'Top-line revenue went up 34% in 3 months when we stopped paying Wolt. The maths is obvious.', name:'Maria Schembri', place:'Ta\' Marija, Mdina', bg:'#0a0a14' },
  { quote: 'H360 gives guests a faster, easier way to pay — no more waiting for the check. Team focuses on hospitality.', name:'Antoine Camilleri', place:'Rubino, Valletta', bg:'#0d1208' },
];

function TestimonialRow({ t, m }: { t: typeof TESTIMONIALS[0]; m: boolean }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="sdr" style={{
      display:'flex', flexDirection: m?'column':'row', alignItems:'stretch',
      borderBottom:`1px solid ${C.border}`, minHeight: m?'auto':240,
    }}>
      <div style={{
        width: m?'100%':'40%', minHeight: m?120:240, flexShrink:0,
        background:`linear-gradient(135deg,${t.bg},#0a0a0a)`, position:'relative', overflow:'hidden',
      }}>
        <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center' }}>
          <div style={{ width:56, height:56, borderRadius:99, background:'rgba(255,255,255,0.07)', border:'1px solid rgba(255,255,255,0.12)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:20, fontWeight:800, color:'rgba(255,255,255,0.3)', fontFamily:FONT }}>
            {t.name.split(' ').map((w:string)=>w[0]).join('')}
          </div>
        </div>
      </div>
      <div style={{ flex:1, padding: m?'28px 24px':'40px 56px', display:'flex', flexDirection:'column', justifyContent:'center', fontFamily:FONT }}>
        <p style={{ fontSize: m?18:26, fontWeight:700, color:C.white, letterSpacing:'-0.025em', lineHeight:1.35, fontStyle:'italic', marginBottom:20 }}>
          &ldquo;{t.quote}&rdquo;
        </p>
        <div>
          <div style={{ fontSize:14, fontWeight:700, color:C.white }}>{t.name}</div>
          <div style={{ fontSize:13, color:C.muted, marginTop:2 }}>{t.place}</div>
        </div>
      </div>
    </div>
  );
}

function Testimonials({ m }: { m: boolean }) {
  return (
    <section style={{ background: C.bg, borderTop:`1px solid ${C.border}` }}>
      {TESTIMONIALS.map((t, i) => <TestimonialRow key={i} t={t} m={m}/>)}
    </section>
  );
}

/* ═══════════════════════════════════════════════
   §8 BIG QUOTE CAROUSEL
   Sunday: scrolling outline/filled heading,
   crossfade quote, dot indicators, prev/next
═══════════════════════════════════════════════ */
const BIG_QS = [
  { q:'"There\'s an art to dining, but no art to paying 30% to a delivery app."',         n:'Jonathan Brincat',  p:'Noni, Valletta' },
  { q:'"Tips went from a coin to 20% on average — staff haven\'t been happier."',         n:'Maria Schembri',    p:'Ta\' Marija, Mdina' },
  { q:'"Large parties can pay how they want — staff can focus entirely on guests."',       n:'Antoine Camilleri', p:'Rubino, Valletta' },
];
const SCROLL_WORDS = ['More revenue','Zero commission','More reviews','More regulars','More direct orders','#1 on Google'];

function QuoteCarousel({ m }: { m: boolean }) {
  const [idx, setIdx] = useState(0);
  const [key, setKey] = useState(0);
  const go = useCallback((d: 1|-1) => { setIdx(i => (i+d+BIG_QS.length)%BIG_QS.length); setKey(k=>k+1); }, []);
  const q = BIG_QS[idx];
  const ref = useReveal();
  return (
    <section style={{ background: C.bg, borderTop:`1px solid ${C.border}`, overflow:'hidden', padding:`${m?72:104}px 0` }}>
      {/* scrolling headline — alternating filled/outline like Sunday */}
      <div style={{ overflow:'hidden', marginBottom: m?52:72, position:'relative' }}>
        <div style={{ position:'absolute', left:0, top:0, bottom:0, width:60, background:`linear-gradient(to right,${C.bg},transparent)`, zIndex:2 }}/>
        <div style={{ position:'absolute', right:0, top:0, bottom:0, width:60, background:`linear-gradient(to left,${C.bg},transparent)`, zIndex:2 }}/>
        <div className="sdmq2">
          {[...SCROLL_WORDS,...SCROLL_WORDS,...SCROLL_WORDS,...SCROLL_WORDS].map((w,i) => (
            <span key={i} style={{
              fontSize: m?30:56, fontWeight:800, letterSpacing:'-0.04em',
              paddingRight: m?24:40, whiteSpace:'nowrap', flexShrink:0,
              color: i%2===0 ? C.white : 'transparent',
              WebkitTextStroke: i%2===0 ? undefined : `1px ${C.border}`,
              fontFamily: FONT,
            }}>{w}</span>
          ))}
        </div>
      </div>
      {/* quote */}
      <div ref={ref} className="sdr" style={{ maxWidth:860, margin:'0 auto', padding: m?'0 24px':'0 80px', fontFamily:FONT }}>
        <div style={{ display:'flex', gap:8, marginBottom: m?28:40 }}>
          {BIG_QS.map((_,i) => (
            <button key={i} onClick={() => { setIdx(i); setKey(k=>k+1); }} style={{ width:i===idx?28:8, height:8, borderRadius:99, background:i===idx?C.white:C.dim, border:'none', cursor:'pointer', transition:'all .3s ease', padding:0 }}/>
          ))}
        </div>
        <div key={key} className="qactive">
          <p style={{ fontSize: m?20:38, fontWeight:700, color:C.white, letterSpacing:'-0.03em', lineHeight:1.22, marginBottom: m?24:36, fontStyle:'italic' }}>
            {q.q}
          </p>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
            <div style={{ display:'flex', alignItems:'center', gap:12 }}>
              <div style={{ width:40, height:40, borderRadius:99, background:'linear-gradient(135deg,#1a5c2e,#0d3d1a)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:13, fontWeight:800, color:'#fff' }}>
                {q.n.split(' ').map((w:string)=>w[0]).join('')}
              </div>
              <div>
                <div style={{ fontSize:14, fontWeight:700, color:C.white }}>{q.n}</div>
                <div style={{ fontSize:12, color:C.muted }}>{q.p}</div>
              </div>
            </div>
            <div style={{ display:'flex', gap:8 }}>
              {([-1,1] as const).map(d => (
                <button key={d} onClick={() => go(d)} style={{ width:42, height:42, borderRadius:99, border:`1px solid ${C.dim}`, background:'transparent', color:C.white, fontSize:18, cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center' }}>
                  {d===-1?'←':'→'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   §9 GUEST PLATFORM / LOYALTY
   Sunday: "Guest platform NEW" label, bold headline,
   discover CTA, big image on right
═══════════════════════════════════════════════ */
function GuestPlatform({ m }: { m: boolean }) {
  const ref = useReveal();
  return (
    <section style={{ background:'#08140a', borderTop:`1px solid rgba(255,255,255,0.05)` }}>
      <div style={{ maxWidth:1160, margin:'0 auto', padding: m?'72px 24px':'104px 80px', display:'flex', flexDirection: m?'column':'row', gap: m?40:80, alignItems:'center', fontFamily:FONT }}>
        <div ref={ref} className="sdr" style={{ flex:1 }}>
          <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:22 }}>
            <span style={{ fontSize:11, fontWeight:700, color:'rgba(255,255,255,0.45)', letterSpacing:'0.1em' }}>GUEST PLATFORM</span>
            <span style={{ fontSize:10, fontWeight:700, color:C.green, background:'rgba(74,222,128,0.12)', padding:'2px 8px', borderRadius:99 }}>NEW</span>
          </div>
          <h2 style={{ fontSize: m?30:52, fontWeight:800, color:'#fff', letterSpacing:'-0.04em', lineHeight:1.1, marginBottom:16 }}>
            From first visit<br/>to forever fan.
          </h2>
          <p style={{ fontSize: m?15:18, color:'rgba(255,255,255,0.5)', lineHeight:1.7, marginBottom:32, maxWidth:440 }}>
            With H360, ARC AI learns what your guests love — recommending the right dish, the right offer, the right moment. Guests come back. Every time.
          </p>
          <a href="/h360/demo" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'12px 28px', background:'#fff', color:'#08140a', borderRadius:64, fontSize:15, fontWeight:700, textDecoration:'none' }}>
            Discover
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
        {/* Stats panel */}
        <div className="sdr d1" style={{ flex:1, display:'flex', flexDirection:'column', gap:10 }}>
          {[
            ['Repeat visit rate','+68%'],
            ['Avg spend per guest','+22%'],
            ['Review open rate','94%'],
            ['Commission saved','€0/order'],
          ].map(([l,v],i) => (
            <div key={i} style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'16px 20px', borderRadius:12, background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.06)' }}>
              <span style={{ fontSize:14, color:'rgba(255,255,255,0.5)' }}>{l}</span>
              <span style={{ fontSize:20, fontWeight:800, color:C.green, letterSpacing:'-0.03em' }}>{v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   §10 FINAL CTA
   Sunday: "Try sunday for free! An expert will
   reach out to you today." — simple, centered
═══════════════════════════════════════════════ */
function FinalCTA({ m }: { m: boolean }) {
  const ref = useReveal();
  return (
    <section style={{ background: C.bg, borderTop:`1px solid ${C.border}`, padding: m?'88px 24px 120px':'120px 80px 160px' }}>
      <div ref={ref} className="sdr" style={{ maxWidth:640, margin:'0 auto', textAlign:'center', fontFamily:FONT }}>
        <h2 style={{ fontSize: m?32:60, fontWeight:800, letterSpacing:'-0.045em', color:C.white, lineHeight:1.05, marginBottom:12 }}>
          Try H360 for free!
        </h2>
        <p style={{ fontSize: m?15:18, color:C.muted, lineHeight:1.6, marginBottom:36 }}>
          An expert will reach out to you today.
        </p>
        <div style={{ display:'flex', alignItems:'center', background:C.card2, border:`1px solid ${C.border}`, borderRadius:14, padding:'6px 6px 6px 18px', maxWidth:440, margin:'0 auto 14px' }}>
          <input type="text" placeholder="Your restaurant name" style={{ flex:1, border:'none', outline:'none', fontSize:15, color:C.white, background:'transparent', fontFamily:FONT }} data-testid="input-h360-cta"/>
          <a href="/h360/demo" style={{ padding:'12px 22px', background:C.white, color:'#000', borderRadius:10, fontSize:14, fontWeight:700, textDecoration:'none', whiteSpace:'nowrap' }} data-testid="button-h360-cta">
            Get a free demo
          </a>
        </div>
        <div style={{ fontSize:12, color:C.dim }}>
          Powered by ARC AI · No commitment needed
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   ROOT
═══════════════════════════════════════════════ */
export default function BelowHero() {
  const m = useMobile();
  return (
    <div style={{ fontFamily: FONT, background: C.bg, color: C.white }}>
      <style>{CSS}</style>
      <Stats          m={m}/>
      <Problem        m={m}/>
      <ProductRail    m={m}/>
      <TrustLogos     m={m}/>
      <ValueSection   m={m}/>
      <Ecosystem      m={m}/>
      <Testimonials   m={m}/>
      <QuoteCarousel  m={m}/>
      <GuestPlatform  m={m}/>
      <FinalCTA       m={m}/>
    </div>
  );
}
