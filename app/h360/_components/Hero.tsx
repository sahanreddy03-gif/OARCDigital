'use client';

import { useState, useEffect, useRef } from 'react';

const G = {
  bg:        '#ffffff',
  text:      '#111111',
  textMuted: '#6b7280',
  green:     '#094413',
  greenMid:  '#1a6b30',
  greenLt:   '#c2edce',
  border:    '#e5e7eb',
  star:      '#eab308',
  red:       '#ef4444',
  orange:    '#f97316',
};

/* ─── 4 punchy cycling words — one phone screen each ─── */
const WORDS = [
  'keep 100% of every order.',
  'rank #1 on Malta Google.',
  'fill tables every night.',
  'turn guests into regulars.',
];

/* ════════════════════════════════════════
   PHONE SCREEN 0 — "keep 100% of every order"
   Shows: direct order receipt, €0 commission
════════════════════════════════════════ */
function Screen0() {
  return (
    <div style={{ padding:'12px 14px', display:'flex', flexDirection:'column', gap:0 }}>
      <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:14 }}>
        <div style={{ width:32, height:32, borderRadius:8, background:G.green, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
          <span style={{ color:'#fff', fontSize:11, fontWeight:900 }}>H3</span>
        </div>
        <div>
          <div style={{ fontSize:13, fontWeight:700, color:G.text }}>Direct Order — Table 7</div>
          <div style={{ fontSize:11, color:G.textMuted }}>Zero commission · Straight to your till</div>
        </div>
      </div>

      {/* Order items */}
      <div style={{ background:'#f9fafb', borderRadius:10, border:`1px solid ${G.border}`, overflow:'hidden', marginBottom:10 }}>
        {[['Braġjoli ×2','€28.00'],['Lampuki Pie','€16.50'],['Kinnie ×3','€7.50']].map(([item,price],i)=>(
          <div key={i} style={{ display:'flex', justifyContent:'space-between', padding:'9px 12px', borderBottom:i<2?`1px solid ${G.border}`:'none', fontSize:13 }}>
            <span style={{ color:G.text }}>{item}</span>
            <span style={{ fontWeight:600, color:G.text }}>{price}</span>
          </div>
        ))}
      </div>

      {/* Commission comparison */}
      <div style={{ background:'#fff7ed', border:`1px solid #fed7aa`, borderRadius:10, padding:'10px 12px', marginBottom:10 }}>
        <div style={{ display:'flex', justifyContent:'space-between', fontSize:12, marginBottom:4 }}>
          <span style={{ color:G.textMuted, textDecoration:'line-through' }}>Wolt takes 30%</span>
          <span style={{ color:G.red, fontWeight:700, textDecoration:'line-through' }}>−€15.60</span>
        </div>
        <div style={{ display:'flex', justifyContent:'space-between', fontSize:14, fontWeight:800 }}>
          <span style={{ color:G.green }}>You keep</span>
          <span style={{ color:G.green }}>€52.00</span>
        </div>
      </div>

      <div style={{ background:G.text, color:'#fff', borderRadius:10, padding:'12px', textAlign:'center', fontSize:14, fontWeight:700 }}>
        Pay €52.00 — direct ↑
      </div>
    </div>
  );
}

/* ════════════════════════════════════════
   PHONE SCREEN 1 — "rank #1 on Malta Google"
   Shows: competitor list, your restaurant 10th → needs fixing
════════════════════════════════════════ */
function Screen1() {
  return (
    <div style={{ padding:'12px 14px' }}>
      <p style={{ fontSize:13, fontWeight:700, color:G.text, marginBottom:10 }}>
        Who&apos;s ranking above you on Google
      </p>
      <div style={{ display:'flex', flexDirection:'column', gap:5, marginBottom:12 }}>
        {[
          { rank:'1st', name:'Competitor 1', stars:4.8, score:'39/40', hi:false },
          { rank:'2nd', name:'Competitor 2', stars:4.0, score:'39/40', hi:false },
          { rank:'3rd', name:'Competitor 3', stars:3.1, score:'39/40', hi:false },
        ].map(r => (
          <div key={r.rank} style={{ display:'flex', alignItems:'center', gap:7, padding:'8px 10px', borderRadius:9, background:'#f9fafb', border:`1px solid ${G.border}` }}>
            <span style={{ fontSize:10, color:G.textMuted, width:24, fontWeight:600 }}>{r.rank}</span>
            <div style={{ flex:1 }}>
              <div style={{ fontSize:12, fontWeight:600, color:G.text }}>{r.name}</div>
              <div style={{ fontSize:11, color:G.star }}>{'★'.repeat(Math.round(r.stars))} <span style={{ color:G.textMuted }}>{r.stars}</span></div>
            </div>
            <span style={{ fontSize:12, fontWeight:700, color:G.green }}>{r.score}</span>
          </div>
        ))}
        <div style={{ textAlign:'center', color:G.textMuted, fontSize:14, letterSpacing:3, padding:'2px 0' }}>···</div>
        <div style={{ display:'flex', alignItems:'center', gap:7, padding:'8px 10px', borderRadius:9, background:'#fffbeb', border:'1.5px solid #fde68a' }}>
          <span style={{ fontSize:10, color:G.textMuted, width:24, fontWeight:600 }}>10th</span>
          <div style={{ flex:1 }}>
            <div style={{ fontSize:12, fontWeight:600, color:G.text }}>Your restaurant</div>
            <div style={{ fontSize:11, color:G.star }}>★★★★★ <span style={{ color:G.textMuted }}>4.9</span></div>
          </div>
          <span style={{ fontSize:12, fontWeight:700, color:G.orange }}>39/40</span>
        </div>
      </div>
      <div style={{ background:'#fef2f2', border:`1px solid #fecaca`, borderRadius:10, padding:'10px 12px' }}>
        <div style={{ fontSize:12, fontWeight:700, color:G.red, marginBottom:3 }}>You&apos;re invisible to new guests</div>
        <div style={{ fontSize:11, color:G.textMuted, lineHeight:1.4 }}>3 competitors are outranking you despite a lower rating. H360 fixes this in weeks.</div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════
   PHONE SCREEN 2 — "fill tables every night"
   Shows: ARC AI audit score + issues
════════════════════════════════════════ */
function Screen2() {
  return (
    <div style={{ padding:'12px 14px' }}>
      <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:12 }}>
        <div style={{ width:34, height:34, borderRadius:9, background:`linear-gradient(135deg,${G.orange},${G.red})`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        </div>
        <div>
          <div style={{ fontSize:13, fontWeight:700, color:G.text }}>Your restaurant</div>
          <div style={{ fontSize:11, color:G.textMuted }}>ARC AI audit complete</div>
        </div>
      </div>
      {/* Score gauge */}
      <div style={{ display:'flex', flexDirection:'column', alignItems:'center', padding:'12px 0 10px', background:'#fafafa', borderRadius:12, marginBottom:12 }}>
        <svg width="108" height="58" viewBox="0 0 108 58">
          <path d="M 9 54 A 45 45 0 0 1 99 54" stroke="#e5e7eb" strokeWidth="8" fill="none" strokeLinecap="round"/>
          <path d="M 9 54 A 45 45 0 0 1 99 54" stroke="url(#gg2)" strokeWidth="8" fill="none" strokeLinecap="round" strokeDasharray="141" strokeDashoffset="91"/>
          <defs><linearGradient id="gg2" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor={G.red}/><stop offset="100%" stopColor={G.orange}/></linearGradient></defs>
          <text x="54" y="50" textAnchor="middle" fontSize="22" fontWeight="800" fill={G.text}>36</text>
          <text x="54" y="60" textAnchor="middle" fontSize="8" fill={G.textMuted}>/ 100</text>
        </svg>
        <div style={{ fontSize:13, fontWeight:700, color:G.orange }}>Website health: Poor</div>
      </div>
      {[
        { label:'Search results',   score:'12/40', status:'Poor', color:G.red,    pct:30 },
        { label:'Guest experience', score:'35/40', status:'Fair', color:G.orange, pct:70 },
        { label:'Local listings',   score:'4/20',  status:'Poor', color:G.red,    pct:20 },
      ].map((s,i) => (
        <div key={i} style={{ display:'flex', alignItems:'center', gap:8, marginBottom:8 }}>
          <svg width="20" height="20" viewBox="0 0 22 22">
            <circle cx="11" cy="11" r="9" stroke="#e5e7eb" strokeWidth="3" fill="none"/>
            <circle cx="11" cy="11" r="9" stroke={s.color} strokeWidth="3" fill="none"
              strokeDasharray={`${s.pct*0.565} 100`} strokeLinecap="round"
              transform="rotate(-90 11 11)"/>
          </svg>
          <div style={{ flex:1 }}>
            <div style={{ fontSize:11, color:G.text, fontWeight:500 }}>{s.label}</div>
            <div style={{ fontSize:10, color:s.color }}>{s.status}</div>
          </div>
          <span style={{ fontSize:11, color:G.textMuted, fontWeight:600 }}>{s.score}</span>
        </div>
      ))}
    </div>
  );
}

/* ════════════════════════════════════════
   PHONE SCREEN 3 — "turn guests into regulars"
   Shows: issues list + Fix it CTA
════════════════════════════════════════ */
function Screen3() {
  return (
    <div style={{ padding:'12px 14px' }}>
      <p style={{ fontSize:13, fontWeight:700, color:G.text, marginBottom:10 }}>
        You&apos;re losing €450 a month until you fix this:
      </p>
      <div style={{ display:'flex', flexDirection:'column', gap:6, marginBottom:10 }}>
        {[
          { title:'Not ranking in 3 nearby areas', desc:'Missing keywords competitors are winning with.' },
          { title:'Title missing primary keyword', desc:'Adding "Restaurant Malta" increases rankings fast.' },
          { title:'2 images missing alt tags', desc:'Alt tags boost Google Maps and Image visibility.' },
        ].map((item,i) => (
          <div key={i} style={{ display:'flex', gap:8, padding:'8px 10px', borderRadius:9, background:'#f9fafb', border:`1px solid ${G.border}` }}>
            <div style={{ width:18, height:18, borderRadius:4, background:'#fef2f2', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, marginTop:1 }}>
              <svg width="9" height="9" viewBox="0 0 24 24" fill={G.red}><path d="M12 2L1 21h22L12 2zm0 3.5L20.5 19h-17L12 5.5zM11 10v4h2v-4h-2zm0 6v2h2v-2h-2z"/></svg>
            </div>
            <div>
              <div style={{ fontSize:12, fontWeight:600, color:G.text }}>{item.title}</div>
              <div style={{ fontSize:11, color:G.textMuted, lineHeight:1.4, marginTop:1 }}>{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <p style={{ fontSize:11, color:G.textMuted, textAlign:'center', marginBottom:8 }}>Improve your score to drive more sales</p>
      <div style={{ background:G.text, color:'#fff', borderRadius:10, padding:'12px', textAlign:'center', fontSize:13, fontWeight:700 }}>
        Fix it now with AI
      </div>
    </div>
  );
}

const SCREENS = [<Screen0/>, <Screen1/>, <Screen2/>, <Screen3/>];

/* ════════════════════════════════════════
   MAIN HERO
════════════════════════════════════════ */
export default function H360Hero() {
  const [wordIdx,      setWordIdx]      = useState(0);
  const [wordVisible,  setWordVisible]  = useState(true);
  const [screenVisible,setScreenVisible]= useState(true);
  const [isMobile,     setIsMobile]     = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  /* ── Word + screen cycle (timer) ── */
  useEffect(() => {
    const id = setInterval(() => {
      /* fade both out */
      setWordVisible(false);
      setScreenVisible(false);
      setTimeout(() => {
        setWordIdx(i => (i + 1) % WORDS.length);
        setWordVisible(true);
        setScreenVisible(true);
      }, 320);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  /* ── Scroll → also advance word/screen ── */
  useEffect(() => {
    const onScroll = () => {
      const el = heroRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrolled = Math.max(0, -rect.top);
      const total = el.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      const pct = Math.min(1, scrolled / total);
      const stage = Math.min(WORDS.length - 1, Math.floor(pct * WORDS.length));
      setWordIdx(prev => {
        if (prev !== stage) {
          setWordVisible(false);
          setScreenVisible(false);
          setTimeout(() => { setWordVisible(true); setScreenVisible(true); }, 280);
          return stage;
        }
        return prev;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Green slab ── */
  const greenCard = (
    <div style={{
      position:'absolute', bottom:0, left:'50%', transform:'translateX(-50%)',
      width: isMobile ? '90%' : '68%', maxWidth:880,
      height: isMobile ? '72%' : '78%',
      borderRadius: isMobile ? '16px 16px 0 0' : '20px 20px 0 0',
      background:'linear-gradient(108deg,#094413 0%,#166b2e 28%,#3db85e 65%,#c2edce 100%)',
      overflow:'hidden',
    }}>
      <svg style={{ position:'absolute', inset:0, opacity:0.10 }} width="100%" height="100%">
        <defs>
          <pattern id="dl" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse" patternTransform="rotate(30)">
            <line x1="0" y1="0" x2="0" y2="32" stroke="#fff" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dl)"/>
      </svg>
    </div>
  );

  /* ── Phone mockup ── */
  const phoneMockup = (
    <div style={{
      position:'relative', zIndex:1, flexShrink:0,
      width: isMobile ? 'min(264px,85vw)' : 268,
      background:'#0d0d0d', borderRadius:44, padding:'10px 8px',
      boxShadow:'0 36px 88px rgba(0,0,0,0.28), 0 0 0 0.5px rgba(255,255,255,0.06)',
    }}>
      {/* Side buttons */}
      {[{s:'left',t:82,h:28},{s:'left',t:122,h:48},{s:'left',t:180,h:48},{s:'right',t:120,h:66}].map((b,i)=>(
        <div key={i} style={{
          position:'absolute', [b.s]:-3, top:b.t, width:3, height:b.h,
          background:'#2a2a2a', borderRadius: b.s==='left'?'3px 0 0 3px':'0 3px 3px 0',
        }}/>
      ))}
      {/* Dynamic island */}
      <div style={{ width:100, height:28, background:'#000', borderRadius:20, margin:'0 auto', position:'relative', zIndex:5 }}/>
      {/* Screen */}
      <div style={{ borderRadius:32, overflow:'hidden', background:G.bg, height: isMobile ? 400 : 450, marginTop:-1 }}>
        {/* Status bar */}
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'8px 14px 4px', fontSize:12, fontWeight:700, color:G.text }}>
          <span>9:41</span>
          <div style={{ display:'flex', gap:5, alignItems:'center' }}>
            <svg width="17" height="11" viewBox="0 0 18 12" fill={G.text}><rect x="0" y="7" width="3" height="5" rx="1"/><rect x="4.5" y="5" width="3" height="7" rx="1"/><rect x="9" y="2" width="3" height="10" rx="1"/><rect x="13.5" y="0" width="3" height="12" rx="1" opacity="0.25"/></svg>
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none"><path d="M8 9.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" fill={G.text}/><path d="M3.5 7A6.5 6.5 0 0112.5 7" stroke={G.text} strokeWidth="1.5" fill="none" strokeLinecap="round"/><path d="M1 4.5A10 10 0 0115 4.5" stroke={G.text} strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
            <svg width="27" height="13" viewBox="0 0 28 13" fill="none"><rect x="0.5" y="0.5" width="23" height="12" rx="3.5" stroke={G.text} strokeOpacity="0.35"/><rect x="2" y="2" width="18" height="9" rx="2" fill={G.text}/><path d="M24.5 4.5v4c1-.6 1-3.4 0-4z" fill={G.text} opacity="0.4"/></svg>
          </div>
        </div>
        {/* Phone screen content — fades between screens with word */}
        <div style={{
          opacity: screenVisible ? 1 : 0,
          transform: screenVisible ? 'translateY(0)' : 'translateY(8px)',
          transition: 'opacity 0.28s ease, transform 0.28s ease',
          willChange: 'opacity, transform',
        }}>
          {SCREENS[wordIdx]}
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ fontFamily:'"Inter",system-ui,-apple-system,Arial,sans-serif', background:G.bg, color:G.text, overflowX:'hidden' }}>

      {/* ── NAV ── */}
      <nav style={{
        position:'sticky', top:0, zIndex:100,
        background:G.bg, borderBottom:`1px solid ${G.border}`,
        padding: isMobile ? '0 18px' : '0 40px',
        height:56, display:'flex', alignItems:'center', justifyContent:'space-between',
      }}>
        <div style={{ display:'flex', alignItems:'center', gap:8 }}>
          <div style={{ width:28, height:28, borderRadius:7, background:G.green, display:'flex', alignItems:'center', justifyContent:'center' }}>
            <span style={{ color:'#fff', fontSize:11, fontWeight:900, letterSpacing:'-0.05em' }}>H3</span>
          </div>
          <span style={{ fontSize:16, fontWeight:800, letterSpacing:'-0.04em', color:G.text }}>H360</span>
        </div>

        {!isMobile && (
          <div style={{ display:'flex', gap:28, fontSize:14, fontWeight:500, color:G.textMuted }}>
            {[['Product','#h360-products'],['Pricing','/h360/pricing'],['How it works','#h360-how-it-works'],['Company','/about']].map(([l,h])=>(
              <a key={l} href={h} style={{ cursor:'pointer', color:'inherit', textDecoration:'none' }}>{l}</a>
            ))}
          </div>
        )}

        <div style={{ display:'flex', alignItems:'center', gap: isMobile ? 8 : 12 }}>
          {!isMobile && <a href="/h360/demo" style={{ fontSize:14, fontWeight:500, color:G.text, textDecoration:'none' }}>Login</a>}
          <a href="/h360/demo" style={{ padding: isMobile ? '8px 14px' : '8px 18px', background:G.text, color:'#fff', borderRadius:99, fontSize:13, fontWeight:600, cursor:'pointer', letterSpacing:'-0.01em', whiteSpace:'nowrap', textDecoration:'none' }} data-testid="button-h360-nav-demo">
            Get a free demo
          </a>
        </div>
      </nav>

      {/* ── HERO — 290vh desktop / 160vh mobile, phone sticky ── */}
      <div ref={heroRef} style={{ minHeight: isMobile ? '160vh' : '290vh' }}>

        {/* Text block — compact, no description, no wasted space */}
        <div style={{
          padding: isMobile ? '24px 20px 0' : '40px 40px 0',
          textAlign: isMobile ? 'left' : 'center',
          background: G.bg,
        }}>
          {/* Stars */}
          <div style={{ display:'flex', alignItems:'center', gap:6, marginBottom:12, justifyContent: isMobile ? 'flex-start' : 'center', fontSize:12, color:G.textMuted }}>
            <span style={{ color:G.star, fontSize:13, letterSpacing:1 }}>★★★★★</span>
            <span style={{ fontWeight:700, color:G.text }}>4.8</span>
            <span>across 1,000+ reviews</span>
          </div>

          {/* H1 — "The AI platform..." */}
          <h1 style={{
            fontSize: isMobile ? 'clamp(30px,8.5vw,44px)' : 'clamp(42px,5.8vw,76px)',
            fontWeight:800, lineHeight:1.06, letterSpacing:'-0.035em',
            color:G.text, margin:'0 0 20px',
            marginLeft: isMobile ? 0 : 'auto',
            marginRight: isMobile ? 0 : 'auto',
            maxWidth:860,
          }}>
            The AI platform Malta restaurants use to{' '}
            <span style={{
              display:'inline-block',
              transition:'opacity 0.28s ease, transform 0.28s ease',
              opacity: wordVisible ? 1 : 0,
              transform: wordVisible ? 'translateY(0)' : 'translateY(6px)',
            }}>
              {WORDS[wordIdx]}
            </span>
          </h1>

          {/* Search pill — desktop */}
          {!isMobile && (
            <>
              <div style={{ display:'inline-flex', alignItems:'center', background:G.bg, border:`1.5px solid ${G.border}`, borderRadius:14, padding:'6px 6px 6px 16px', boxShadow:'0 2px 20px rgba(0,0,0,0.07)', gap:8, width:'100%', maxWidth:460 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={G.textMuted} strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                <input type="text" placeholder="Find your restaurant name" style={{ flex:1, border:'none', outline:'none', fontSize:15, color:G.text, background:'transparent', fontFamily:'inherit' }} data-testid="input-h360-hero-search"/>
                <a href="/h360/demo" style={{ padding:'9px 16px', background:G.green, color:'#f0f9f4', borderRadius:10, fontSize:14, fontWeight:600, whiteSpace:'nowrap', display:'flex', alignItems:'center', gap:5, letterSpacing:'-0.01em', textDecoration:'none' }} data-testid="button-h360-hero-cta">
                  Get my AI report
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
                </a>
              </div>
              <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:6, marginTop:8, fontSize:12, color:G.textMuted }}>
                <div style={{ width:15, height:15, borderRadius:4, background:'#1a1a1a', display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <span style={{ color:'#fff', fontSize:7.5, fontWeight:800 }}>A</span>
                </div>
                Powered by ARC AI · Instant restaurant audit
              </div>
            </>
          )}
        </div>

        {/* ── Sticky phone — pins while scrolling 290vh ── */}
        <div style={{
          position:'sticky', top:56,
          height:'calc(100vh - 56px)',
          display:'flex', alignItems:'flex-start',
          justifyContent:'center',
          paddingTop: isMobile ? 20 : 32,
          overflow:'hidden',
          background: G.bg,
        }}>
          {greenCard}
          {phoneMockup}
        </div>
      </div>

      {/* ── Mobile sticky bottom CTA ── */}
      {isMobile && (
        <div style={{
          position:'fixed', bottom:0, left:0, right:0, zIndex:200,
          background:G.bg, borderTop:`1px solid ${G.border}`,
          padding:'10px 16px env(safe-area-inset-bottom,16px)',
          boxShadow:'0 -4px 20px rgba(0,0,0,0.07)',
        }}>
          <div style={{ display:'flex', alignItems:'center', gap:8 }}>
            <input type="text" placeholder="Find your restaurant name" style={{ flex:1, border:`1.5px solid ${G.border}`, borderRadius:10, padding:'10px 13px', fontSize:14, color:G.text, background:G.bg, fontFamily:'inherit', outline:'none' }} data-testid="input-h360-mobile-search"/>
            <a href="/h360/demo" style={{ width:44, height:44, borderRadius:10, background:G.green, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, textDecoration:'none' }} data-testid="button-h360-mobile-cta">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
            </a>
          </div>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:5, marginTop:6, fontSize:11, color:G.textMuted }}>
            <div style={{ width:14, height:14, borderRadius:3, background:'#1a1a1a', display:'flex', alignItems:'center', justifyContent:'center' }}>
              <span style={{ color:'#fff', fontSize:7, fontWeight:800 }}>A</span>
            </div>
            Powered by ARC AI
          </div>
        </div>
      )}
    </div>
  );
}
