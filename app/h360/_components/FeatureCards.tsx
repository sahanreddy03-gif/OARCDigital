'use client';

import { useState, useEffect, useRef } from 'react';

const WHITE  = '#ffffff';
const DARK   = '#111111';
const MUTED  = '#777777';
const BORDER = '#e5e7eb';
const GREEN  = '#094413';
const BEIGE  = '#f0ede6';
const FONT   = '"Inter",system-ui,-apple-system,Arial,sans-serif';
const INTERVAL = 5200;

const TABS = [
  'More Google Visibility',
  'Zero Commission',
  'More Repeat Guests',
  'Guest Rewards',
];

const CSS = `
  @keyframes fc-prog { from{width:0%} to{width:100%} }
  .fc-prog { animation: fc-prog ${INTERVAL}ms linear forwards; height:100%; background:#111; border-radius:1px; }
  .fc-scroll::-webkit-scrollbar { display:none; }
`;

/* ─── CARD 1 — Google Visibility ─── */
function Card1({ m }: { m: boolean }) {
  return (
    <div style={wrap(m, BEIGE)}>
      <div style={top()}>
        <div style={lbl(MUTED)}>Rank higher</div>
        <div style={hdl(DARK, m)}>Rank above every competitor on Malta Google Maps.</div>
      </div>
      <div style={illu()}>
        <div style={sheet()}>
          <div style={{ padding:'10px 14px', borderBottom:`1px solid ${BORDER}`, display:'flex', alignItems:'center', gap:8 }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            <span style={{ fontSize:12, color:'#aaa' }}>restaurants near me — Malta</span>
          </div>
          {[
            { r:'#1', name:'Your Restaurant', sub:'Valletta · 4.9 ★ · Open', hi:true  },
            { r:'#2', name:'Competitor A',    sub:"St. Julian's · 4.2 ★",    hi:false },
            { r:'#3', name:'Competitor B',    sub:'Sliema · 4.0 ★',          hi:false },
          ].map((row,i) => (
            <div key={i} style={{ display:'flex', alignItems:'center', gap:11, padding:'11px 14px', borderBottom: i<2 ? `1px solid ${BORDER}` : 'none', background: row.hi ? '#f0fdf4' : WHITE }}>
              <div style={{ width:26, height:26, borderRadius:7, background: row.hi ? GREEN : '#f0f0f0', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                <span style={{ fontSize:10, fontWeight:800, color: row.hi ? '#fff' : '#999' }}>{row.r}</span>
              </div>
              <div style={{ flex:1 }}>
                <div style={{ fontSize:13, fontWeight: row.hi ? 700 : 500, color: row.hi ? DARK : '#777' }}>{row.name}</div>
                <div style={{ fontSize:11, color:'#bbb', marginTop:1 }}>{row.sub}</div>
              </div>
              {row.hi && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── CARD 2 — Zero Commission ─── */
function Card2({ m }: { m: boolean }) {
  return (
    <div style={wrap(m, BEIGE)}>
      <div style={top()}>
        <div style={lbl(MUTED)}>Boost your margin</div>
        <div style={hdl(DARK, m)}>Keep 100% of every order. No Wolt cut. No Bolt fee. Ever.</div>
      </div>
      <div style={illu()}>
        <div style={sheet()}>
          <div style={{ padding:'11px 14px', borderBottom:`1px solid ${BORDER}`, display:'flex', alignItems:'center', gap:8 }}>
            <div style={{ width:22, height:22, borderRadius:6, background:GREEN, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
              <span style={{ color:'#fff', fontSize:8, fontWeight:900 }}>H3</span>
            </div>
            <span style={{ fontSize:12, fontWeight:700, color:DARK }}>Direct order — Table 7</span>
          </div>
          {([['Braġjoli ×2','€28.00',false],['Lampuki Pie','€16.50',false],["Ta' Arġentina",'€29.95',true]] as [string,string,boolean][]).map(([item,price,sel],i)=>(
            <div key={i} style={{ display:'flex', alignItems:'center', gap:10, padding:'10px 14px', borderBottom:`1px solid ${BORDER}` }}>
              <div style={{ width:34, height:34, borderRadius:8, background: sel ? '#dcfce7' : '#f3f4f6', flexShrink:0 }}/>
              <div style={{ flex:1 }}>
                <div style={{ fontSize:13, color:DARK }}>{item}</div>
                <div style={{ fontSize:11, color:'#aaa' }}>{price}</div>
              </div>
              {sel
                ? <div style={{ width:26, height:26, borderRadius:13, background:GREEN, display:'flex', alignItems:'center', justifyContent:'center' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                : <div style={{ width:26, height:26, borderRadius:13, border:`1px solid ${BORDER}`, display:'flex', alignItems:'center', justifyContent:'center' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                  </div>
              }
            </div>
          ))}
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', margin:'10px 14px 14px', padding:'10px 12px', background:DARK, borderRadius:10 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            <span style={{ fontSize:12, color:'#fff' }}>You&apos;ll earn 1,750 points</span>
            <div style={{ width:20, height:20, borderRadius:10, background:GREEN, display:'flex', alignItems:'center', justifyContent:'center', fontSize:10, fontWeight:700, color:'#fff' }}>1</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── CARD 3 — More Repeat Guests (purple-blue gradient) ─── */
function Card3({ m }: { m: boolean }) {
  const w = (o: number) => `rgba(255,255,255,${o})`;
  return (
    <div style={wrap(m, 'linear-gradient(155deg,#b197fc 0%,#74c0fc 100%)')}>
      <div style={top()}>
        <div style={lbl(w(0.7))}>Create more regulars</div>
        <div style={hdl('#fff', m)}>H360 uses smart AI follow-ups that turn guests into regulars.</div>
      </div>
      <div style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'0 24px 28px', gap:5 }}>
        <div style={{ background:w(0.92), borderRadius:99, padding:'9px 20px', display:'flex', alignItems:'center', gap:10 }}>
          <div style={{ width:28, height:28, borderRadius:14, background:'linear-gradient(135deg,#f97316,#ec4899)', flexShrink:0 }}/>
          <div>
            <div style={{ fontSize:10, color:'#888' }}>New guest</div>
            <div style={{ fontSize:13, fontWeight:700, color:DARK }}>Maria Borg</div>
          </div>
        </div>
        <FlowLine label="wait 1 day"/>
        {['Sent: Welcome + special offer','Sent: Recommended dishes'].map((s,i) => (
          <div key={i} style={{ background:w(0.13), border:`1px solid ${w(0.35)}`, borderRadius:99, padding:'8px 16px', fontSize:12, color:'#fff', textAlign:'center', width:'100%', marginBottom:3 }}>{s}</div>
        ))}
        <div style={{ fontSize:11, color:w(0.8), margin:'1px 0' }}>Maria orders again</div>
        <FlowLine label="wait 1 day"/>
        <div style={{ background:w(0.13), border:`1px solid ${w(0.35)}`, borderRadius:99, padding:'8px 16px', fontSize:12, color:'#fff', textAlign:'center', width:'100%' }}>Sent: Weekend special offer</div>
        <div style={{ fontSize:12, color:'#fff', fontWeight:700, marginTop:5, textAlign:'center' }}>Maria becomes a regular</div>
      </div>
    </div>
  );
}

function FlowLine({ label }: { label: string }) {
  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:1 }}>
      <span style={{ fontSize:10, color:'rgba(255,255,255,0.65)' }}>{label}</span>
      <div style={{ width:2, height:10, background:'rgba(255,255,255,0.35)', borderRadius:1 }}/>
    </div>
  );
}

/* ─── CARD 4 — Guest Rewards (dark warm) ─── */
function Card4({ m }: { m: boolean }) {
  const w = (o: number) => `rgba(255,255,255,${o})`;
  return (
    <div style={{ ...wrap(m,'linear-gradient(155deg,#1c0900 0%,#3d1800 55%,#6b2d00 100%)'), position:'relative' }}>
      <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at 65% 25%, rgba(251,146,60,0.18) 0%, transparent 60%)', pointerEvents:'none' }}/>
      <div style={{ ...top(), position:'relative' }}>
        <div style={lbl(w(0.55))}>Reward your guests</div>
        <div style={hdl('#fff', m)}>Give guests points every time they order direct from you.</div>
      </div>
      <div style={{ ...illu(), position:'relative' }}>
        <div style={{ width:'100%', maxWidth:300, background:w(0.07), borderRadius:18, border:`1px solid ${w(0.13)}`, padding:18 }}>
          <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:14 }}>
            <div style={{ width:36, height:36, borderRadius:10, background:'linear-gradient(135deg,#f97316,#ef4444)', flexShrink:0 }}/>
            <div>
              <div style={{ fontSize:13, fontWeight:700, color:'#fff' }}>Your Restaurant</div>
              <div style={{ fontSize:11, color:w(0.4) }}>Earn rewards</div>
            </div>
          </div>
          <div style={{ background:w(0.06), borderRadius:12, padding:14, marginBottom:12, textAlign:'center' }}>
            <div style={{ fontSize:40, fontWeight:800, color:'#fff', lineHeight:1 }}>340</div>
            <div style={{ fontSize:11, color:w(0.4), marginTop:3 }}>loyalty points</div>
          </div>
          <div style={{ marginBottom:8 }}>
            <div style={{ display:'flex', justifyContent:'space-between', fontSize:11, color:w(0.35), marginBottom:5 }}>
              <span>340</span><span>400</span>
            </div>
            <div style={{ height:6, background:w(0.10), borderRadius:3 }}>
              <div style={{ width:'68%', height:'100%', background:'linear-gradient(90deg,#f97316,#fbbf24)', borderRadius:3 }}/>
            </div>
          </div>
          <div style={{ fontSize:11, color:w(0.45), textAlign:'center' }}>60 pts away from a free dessert</div>
        </div>
      </div>
    </div>
  );
}

/* ─── Style helpers ─── */
function wrap(m: boolean, bg: string): React.CSSProperties {
  return { flexShrink:0, width: m ? '88vw' : '100%', minHeight: m ? 500 : 520, borderRadius:20, background:bg, overflow:'hidden', display:'flex', flexDirection:'column', scrollSnapAlign:'start', fontFamily:FONT };
}
function top(): React.CSSProperties { return { padding:'28px 28px 16px' }; }
function lbl(color: string): React.CSSProperties { return { fontSize:12, color, marginBottom:10, fontWeight:500 }; }
function hdl(color: string, m: boolean): React.CSSProperties { return { fontSize: m ? 21 : 23, fontWeight:800, color, lineHeight:1.18, letterSpacing:'-0.025em', maxWidth:320 }; }
function illu(): React.CSSProperties { return { flex:1, display:'flex', alignItems:'center', justifyContent:'center', padding:'0 28px 28px' }; }
function sheet(): React.CSSProperties { return { width:'100%', maxWidth:310, background:WHITE, borderRadius:16, overflow:'hidden', boxShadow:'0 8px 32px rgba(0,0,0,0.09)' }; }

const CARDS = [Card1, Card2, Card3, Card4];

/* ═══════════════════════════════════════════
   MAIN EXPORT
═══════════════════════════════════════════ */
export default function H360FeatureCards() {
  const [active,   setActive]  = useState(0);
  const [progKey,  setProgKey] = useState(0);
  const [isMobile, setMobile]  = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const timerRef  = useRef<ReturnType<typeof setTimeout>|null>(null);

  useEffect(() => {
    const fn = () => setMobile(window.innerWidth < 768);
    fn();
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);

  /* desktop: auto-advance with progress bar */
  useEffect(() => {
    if (isMobile) return;
    setProgKey(k => k+1);
    timerRef.current = setTimeout(() => setActive(a => (a+1) % TABS.length), INTERVAL);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [active, isMobile]);

  /* mobile: scroll to card */
  const scrollTo = (idx: number) => {
    const el = scrollRef.current?.children[idx] as HTMLElement|undefined;
    el?.scrollIntoView({ behavior:'smooth', block:'nearest', inline:'start' });
    setActive(idx);
  };

  /* mobile: sync active dot from scroll position */
  useEffect(() => {
    if (!isMobile) return;
    const container = scrollRef.current;
    if (!container) return;
    const obs = Array.from(container.children).map((card,i) => {
      const ob = new IntersectionObserver(([e]) => {
        if (e.isIntersecting && e.intersectionRatio >= 0.5) setActive(i);
      }, { root:container, threshold:0.5 });
      ob.observe(card as Element);
      return ob;
    });
    return () => obs.forEach(ob => ob.disconnect());
  }, [isMobile]);

  const handleTab = (i: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setActive(i);
  };

  const CardComp = CARDS[active];

  return (
    <section style={{ background:WHITE, fontFamily:FONT, padding: isMobile ? '44px 0 52px' : '72px 0 88px', overflow:'hidden' }}>
      <style>{CSS}</style>

      {/* ── Heading ── */}
      <div style={{ padding: isMobile ? '0 20px' : '0 64px', marginBottom:28 }}>
        <h2 style={{ fontSize: isMobile ? 27 : 36, fontWeight:800, color:DARK, letterSpacing:'-0.035em', lineHeight:1.1, margin:0 }}>
          With H360, you get more Google visibility,<br/>
          more direct orders, more loyal guests.
        </h2>
      </div>

      {/* ── Tab row ── */}
      <div
        className="fc-scroll"
        style={{ display:'flex', padding: isMobile ? '0 20px' : '0 64px', borderBottom:`1px solid ${BORDER}`, marginBottom: isMobile ? 20 : 36, overflowX:'auto', scrollbarWidth:'none' }}
      >
        {TABS.map((tab,i) => (
          <button
            key={i}
            onClick={() => isMobile ? scrollTo(i) : handleTab(i)}
            style={{ padding:'12px 0', marginRight: isMobile ? 22 : 32, fontSize: isMobile ? 13 : 14, fontWeight: active===i ? 700 : 400, color: active===i ? DARK : MUTED, background:'none', border:'none', cursor:'pointer', fontFamily:FONT, whiteSpace:'nowrap', borderBottom: active===i ? `2px solid ${DARK}` : '2px solid transparent', position:'relative', flexShrink:0, transition:'color 0.2s, border-color 0.2s' }}
            data-testid={`tab-feature-${i}`}
          >
            {tab}
            {/* desktop progress bar */}
            {!isMobile && active===i && (
              <div style={{ position:'absolute', bottom:-1, left:0, width:'100%', height:2, background:'#e5e7eb', borderRadius:1, overflow:'hidden' }}>
                <div key={progKey} className="fc-prog"/>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* ── MOBILE: horizontal swipe carousel ── */}
      {isMobile ? (
        <>
          <div
            ref={scrollRef}
            className="fc-scroll"
            style={{ display:'flex', gap:12, overflowX:'auto', scrollSnapType:'x mandatory', WebkitOverflowScrolling:'touch', scrollbarWidth:'none', padding:'0 20px' }}
          >
            <Card1 m={true}/>
            <Card2 m={true}/>
            <Card3 m={true}/>
            <Card4 m={true}/>
            <div style={{ flexShrink:0, width:4 }}/>
          </div>

          {/* Dots + arrows */}
          <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:10, marginTop:20 }}>
            <div style={{ display:'flex', gap:6, alignItems:'center' }}>
              {TABS.map((_,i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  style={{ width: active===i ? 20 : 8, height:8, borderRadius:4, border:'none', cursor:'pointer', background: active===i ? DARK : '#d1d5db', padding:0, transition:'width 0.25s ease, background 0.25s ease' }}
                />
              ))}
            </div>
            <button onClick={() => scrollTo(Math.max(0,active-1))} disabled={active===0} style={arrowSt(active===0)}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <button onClick={() => scrollTo(Math.min(3,active+1))} disabled={active===3} style={arrowSt(active===3)}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
        </>
      ) : (
        /* ── DESKTOP: vertical tab list + right panel ── */
        <div style={{ padding:'0 64px', display:'grid', gridTemplateColumns:'280px 1fr', gap:56, alignItems:'center', maxWidth:1100 }}>
          <div>
            {TABS.map((tab,i) => (
              <button
                key={i}
                onClick={() => handleTab(i)}
                style={{ display:'flex', flexDirection:'column', gap:8, padding:'18px 0', cursor:'pointer', background:'none', border:'none', borderBottom:`1px solid ${BORDER}`, width:'100%', textAlign:'left', fontFamily:FONT }}
              >
                <span style={{ fontSize:15, fontWeight: active===i ? 700 : 400, color: active===i ? DARK : MUTED, transition:'color 0.2s' }}>{tab}</span>
                {active===i && (
                  <div style={{ height:2, background:'#e5e7eb', borderRadius:1, overflow:'hidden', width:'100%' }}>
                    <div key={progKey} className="fc-prog"/>
                  </div>
                )}
              </button>
            ))}
          </div>
          <div><CardComp m={false}/></div>
        </div>
      )}
    </section>
  );
}

function arrowSt(disabled: boolean): React.CSSProperties {
  return { width:40, height:40, borderRadius:20, border:`1.5px solid ${disabled?'#e5e7eb':'#ccc'}`, background:WHITE, cursor:disabled?'default':'pointer', display:'flex', alignItems:'center', justifyContent:'center', color:disabled?'#d1d5db':DARK, padding:0 };
}
