import { useState, useEffect, useRef } from 'react';
import BelowHero from './BelowHero';

/* ─── Design tokens ──────────────────────────────────────────────────────── */
const G = {
  bg:        '#ffffff',
  text:      '#1a1a1a',
  textMuted: '#6b7280',
  green:     '#094413',
  greenMid:  '#1a6b30',
  greenLt:   '#c2edce',
  border:    '#e5e7eb',
  star:      '#eab308',
  red:       '#ef4444',
  orange:    '#f97316',
};

/* ─── Cycling words — punchy, Malta-specific ─────────────────────────────── */
const WORDS = [
  'stop paying Wolt 30%.',
  'rank #1 on Google.',
  'fill tables every night.',
  'own every repeat guest.',
];

/* ─── Phone content — scrolls as user scrolls ───────────────────────────── */
function PhoneContent() {
  return (
    <div style={{ padding: '12px 12px 32px', display: 'flex', flexDirection: 'column' }}>

      {/* ── Block 1: Rankings ── */}
      <p style={{ fontSize: 13, fontWeight: 700, color: G.text, marginBottom: 8 }}>
        Who's beating you on Google
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 5, marginBottom: 16 }}>
        {[
          { rank: '1st', name: 'Competitor 1', stars: 4.8, score: '39/40', ok: true },
          { rank: '2nd', name: 'Competitor 2', stars: 4.0, score: '39/40', ok: true },
          { rank: '3rd', name: 'Competitor 3', stars: 3.1, score: '39/40', ok: true },
        ].map(r => (
          <div key={r.rank} style={{ display:'flex', alignItems:'center', gap:7, padding:'7px 9px', borderRadius:9, background:'#f9fafb', border:`1px solid ${G.border}` }}>
            <span style={{ fontSize:10, color:G.textMuted, width:22, fontWeight:600 }}>{r.rank}</span>
            <div style={{ flex:1 }}>
              <div style={{ fontSize:12, fontWeight:600, color:G.text }}>{r.name}</div>
              <div style={{ fontSize:11, color:G.star }}>{'★'.repeat(Math.round(r.stars))} <span style={{ color:G.textMuted }}>{r.stars}</span></div>
            </div>
            <span style={{ fontSize:12, fontWeight:700, color:G.green }}>{r.score}</span>
          </div>
        ))}
        <div style={{ textAlign:'center', color:G.textMuted, fontSize:14, letterSpacing:3, padding:'1px 0' }}>···</div>
        <div style={{ display:'flex', alignItems:'center', gap:7, padding:'8px 9px', borderRadius:9, background:'#fffbeb', border:'1.5px solid #fde68a' }}>
          <span style={{ fontSize:10, color:G.textMuted, width:22, fontWeight:600 }}>10th</span>
          <div style={{ flex:1 }}>
            <div style={{ fontSize:12, fontWeight:600, color:G.text }}>Your restaurant</div>
            <div style={{ fontSize:11, color:G.star }}>★★★★★ <span style={{ color:G.textMuted }}>4.9</span></div>
          </div>
          <span style={{ fontSize:12, fontWeight:700, color:G.orange }}>39/40</span>
        </div>
      </div>

      <div style={{ height:1, background:G.border, margin:'0 -12px 16px' }}/>

      {/* ── Block 2: Issues ── */}
      <p style={{ fontSize:13, fontWeight:700, color:G.text, marginBottom:8 }}>
        You're losing €450 a month until you fix this:
      </p>
      <div style={{ display:'flex', flexDirection:'column', gap:5, marginBottom:10 }}>
        {[
          { title:'Not ranking in 3 nearby areas', desc:'Missing keywords competitors are winning with.' },
          { title:'Title missing primary keyword', desc:'Adding "Restaurant Malta" increases rankings fast.' },
          { title:'2 images missing alt tags', desc:'Alt tags boost Google Maps and Image visibility.' },
        ].map((item,i) => (
          <div key={i} style={{ display:'flex', gap:8, padding:'8px 9px', borderRadius:9, background:'#f9fafb', border:`1px solid ${G.border}` }}>
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
      <p style={{ fontSize:11, color:G.textMuted, textAlign:'center', marginBottom:7 }}>Improve your score to drive more sales</p>
      <div style={{ background:G.text, color:'#fff', borderRadius:10, padding:'11px', textAlign:'center', fontSize:13, fontWeight:600, cursor:'pointer' }}>
        Fix it now with AI
      </div>

      <div style={{ height:1, background:G.border, margin:'16px -12px' }}/>

      {/* ── Block 3: Health score ── */}
      <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:12 }}>
        <div style={{ width:34, height:34, borderRadius:9, background:'linear-gradient(135deg,#f97316,#ef4444)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:17, flexShrink:0 }}>🍕</div>
        <div>
          <div style={{ fontSize:13, fontWeight:700, color:G.text }}>Your restaurant</div>
          <div style={{ fontSize:11, color:G.textMuted }}>Malta, MT</div>
        </div>
      </div>
      <div style={{ display:'flex', flexDirection:'column', alignItems:'center', padding:'14px 0 10px', background:'#fafafa', borderRadius:12, marginBottom:12 }}>
        <svg width="108" height="58" viewBox="0 0 108 58">
          <path d="M 9 54 A 45 45 0 0 1 99 54" stroke="#e5e7eb" strokeWidth="8" fill="none" strokeLinecap="round"/>
          <path d="M 9 54 A 45 45 0 0 1 99 54" stroke="url(#gg)" strokeWidth="8" fill="none" strokeLinecap="round" strokeDasharray="141" strokeDashoffset="91"/>
          <defs><linearGradient id="gg" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor={G.red}/><stop offset="100%" stopColor={G.orange}/></linearGradient></defs>
          <text x="54" y="50" textAnchor="middle" fontSize="22" fontWeight="800" fill={G.text}>36</text>
          <text x="54" y="60" textAnchor="middle" fontSize="8" fill={G.textMuted}>/ 100</text>
        </svg>
        <div style={{ fontSize:13, fontWeight:700, color:G.orange }}>Website health: Poor</div>
      </div>
      {[
        { label:'Search results', score:'12/40', status:'Poor',  color:G.red,    pct:30 },
        { label:'Guest experience',score:'35/40', status:'Fair', color:G.orange, pct:70 },
        { label:'Local listings',  score:'4/20',  status:'Poor', color:G.red,    pct:20 },
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

/* ─── Main ───────────────────────────────────────────────────────────────── */
export default function H360Hero() {
  const [wordIdx,     setWordIdx]     = useState(0);
  const [wordVisible, setWordVisible] = useState(true);
  const [phoneScroll, setPhoneScroll] = useState(0);
  const [isMobile,    setIsMobile]    = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const MAX_SCROLL = 430;

  /* Detect mobile */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  /* Word cycle */
  useEffect(() => {
    const id = setInterval(() => {
      setWordVisible(false);
      setTimeout(() => { setWordIdx(i => (i+1) % WORDS.length); setWordVisible(true); }, 320);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  /* Scroll → phone parallax */
  useEffect(() => {
    const onScroll = () => {
      const el = heroRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrolled = Math.max(0, -rect.top);
      const pct = Math.min(1, scrolled / (el.offsetHeight * 0.55));
      setPhoneScroll(pct * MAX_SCROLL);
    };
    window.addEventListener('scroll', onScroll, { passive:true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Shared phone mockup ── */
  const phoneMockup = (
    <div style={{
      position: 'relative', zIndex: 1, flexShrink: 0,
      width: isMobile ? 'min(274px, 88vw)' : 275,
      background: '#0d0d0d',
      borderRadius: 46,
      padding: '11px 9px',
      boxShadow: '0 36px 88px rgba(0,0,0,0.30), 0 0 0 0.5px rgba(255,255,255,0.06)',
    }}>
      {/* Side buttons */}
      {[{s:'left',t:88},{s:'left',t:130},{s:'left',t:192},{s:'right',t:128}].map((b,i)=>(
        <div key={i} style={{
          position:'absolute', [b.s]: -3,
          top: b.t, width:3,
          height: b.s==='right' ? 68 : i===0 ? 30 : 50,
          background:'#2a2a2a',
          borderRadius: b.s==='left' ? '3px 0 0 3px' : '0 3px 3px 0',
        }}/>
      ))}
      {/* Dynamic island */}
      <div style={{ width:105, height:30, background:'#000', borderRadius:20, margin:'0 auto 0', position:'relative', zIndex:5 }}/>
      {/* Screen */}
      <div style={{ borderRadius:34, overflow:'hidden', background:G.bg, height:isMobile ? 420 : 480, marginTop:-1 }}>
        {/* Status bar */}
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'10px 15px 4px', fontSize:12, fontWeight:700, color:G.text }}>
          <span>9:41</span>
          <div style={{ display:'flex', gap:5, alignItems:'center' }}>
            <svg width="17" height="11" viewBox="0 0 18 12" fill={G.text}><rect x="0" y="7" width="3" height="5" rx="1"/><rect x="4.5" y="5" width="3" height="7" rx="1"/><rect x="9" y="2" width="3" height="10" rx="1"/><rect x="13.5" y="0" width="3" height="12" rx="1" opacity="0.25"/></svg>
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none"><path d="M8 9.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" fill={G.text}/><path d="M3.5 7A6.5 6.5 0 0112.5 7" stroke={G.text} strokeWidth="1.5" fill="none" strokeLinecap="round"/><path d="M1 4.5A10 10 0 0115 4.5" stroke={G.text} strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
            <svg width="27" height="13" viewBox="0 0 28 13" fill="none"><rect x="0.5" y="0.5" width="23" height="12" rx="3.5" stroke={G.text} strokeOpacity="0.35"/><rect x="2" y="2" width="18" height="9" rx="2" fill={G.text}/><path d="M24.5 4.5v4c1-.6 1-3.4 0-4z" fill={G.text} opacity="0.4"/></svg>
          </div>
        </div>
        {/* Scrolling content */}
        <div style={{ transform:`translateY(-${phoneScroll}px)`, transition:'transform 0.06s linear', willChange:'transform' }}>
          <PhoneContent/>
        </div>
      </div>
    </div>
  );

  /* ── Green gradient card behind phone ── */
  const greenCard = (
    <div style={{
      position:'absolute',
      bottom:0,
      left:'50%',
      transform:'translateX(-50%)',
      width: isMobile ? '90%' : '68%',
      maxWidth: 880,
      height: isMobile ? '72%' : '78%',
      borderRadius: isMobile ? '16px 16px 0 0' : '20px 20px 0 0',
      background:'linear-gradient(108deg, #094413 0%, #166b2e 28%, #3db85e 65%, #c2edce 100%)',
      overflow:'hidden',
    }}>
      <svg style={{ position:'absolute', inset:0, opacity:0.10 }} width="100%" height="100%">
        <defs><pattern id="dl" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse" patternTransform="rotate(30)"><line x1="0" y1="0" x2="0" y2="32" stroke="#fff" strokeWidth="1"/></pattern></defs>
        <rect width="100%" height="100%" fill="url(#dl)"/>
      </svg>
    </div>
  );

  return (
    <div style={{ fontFamily:'"Inter",system-ui,-apple-system,Arial,sans-serif', background:G.bg, color:G.text, overflowX:'hidden' }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');`}</style>

      {/* ── NAV ──────────────────────────────────────────────────────── */}
      <nav style={{
        position:'sticky', top:0, zIndex:100,
        background:G.bg, borderBottom:`1px solid ${G.border}`,
        padding: isMobile ? '0 18px' : '0 40px',
        height:64, display:'flex', alignItems:'center', justifyContent:'space-between',
      }}>
        {/* Logo */}
        <div style={{ display:'flex', alignItems:'center', gap:8 }}>
          <div style={{ width:30, height:30, borderRadius:8, background:G.green, display:'flex', alignItems:'center', justifyContent:'center' }}>
            <span style={{ color:'#fff', fontSize:12, fontWeight:900, letterSpacing:'-0.05em' }}>H3</span>
          </div>
          <span style={{ fontSize:17, fontWeight:800, letterSpacing:'-0.04em', color:G.text }}>H360</span>
        </div>

        {/* Desktop links */}
        {!isMobile && (
          <div style={{ display:'flex', gap:32, fontSize:14, fontWeight:500, color:G.textMuted }}>
            {['Product','Pricing','How it works','Company'].map(l=>(
              <span key={l} style={{ cursor:'pointer' }}>{l}</span>
            ))}
          </div>
        )}

        {/* Right side */}
        <div style={{ display:'flex', alignItems:'center', gap:isMobile ? 10 : 14 }}>
          <span style={{ fontSize:14, fontWeight:500, color:G.text, cursor:'pointer' }}>Login</span>
          <button style={{ padding: isMobile ? '9px 16px' : '9px 20px', background:G.text, color:'#fff', border:'none', borderRadius:99, fontSize:14, fontWeight:600, cursor:'pointer', letterSpacing:'-0.01em', whiteSpace:'nowrap' }}>
            Get a free demo
          </button>
          {isMobile && (
            <div style={{ display:'flex', flexDirection:'column', gap:4.5, cursor:'pointer' }}>
              {[0,1,2].map(i=><div key={i} style={{ width:20, height:2, background:G.text, borderRadius:2 }}/>)}
            </div>
          )}
        </div>
      </nav>

      {/* ── HERO (tall scroll container) ─────────────────────────────── */}
      <div ref={heroRef} style={{ minHeight:'290vh' }}>

        {/* Stars + heading + subtext */}
        <div style={{
          padding: isMobile ? '32px 20px 0' : '52px 40px 0',
          textAlign: isMobile ? 'left' : 'center',
          background:G.bg,
        }}>
          {/* Stars */}
          <div style={{ display:'flex', alignItems:'center', gap:6, marginBottom:16, justifyContent: isMobile ? 'flex-start' : 'center', fontSize:13, color:G.textMuted }}>
            <span style={{ color:G.star, fontSize:14 }}>★★★★★</span>
            <span style={{ fontWeight:700, color:G.text }}>4.8</span>
            <span>across 1,000+ reviews</span>
          </div>

          {/* H1 — punchier */}
          <h1 style={{
            fontSize: isMobile ? 'clamp(34px,9.5vw,48px)' : 'clamp(44px,6.2vw,80px)',
            fontWeight:800, lineHeight:1.06, letterSpacing:'-0.035em',
            color:G.text, margin:'0 0 12px', maxWidth:860,
            marginLeft: isMobile ? 0 : 'auto',
            marginRight: isMobile ? 0 : 'auto',
          }}>
            The platform Malta restaurants use to{' '}
            <span style={{
              display:'inline-block',
              transition:'opacity 0.28s ease, transform 0.28s ease',
              opacity: wordVisible ? 1 : 0,
              transform: wordVisible ? 'translateY(0)' : 'translateY(6px)',
            }}>
              {WORDS[wordIdx]}
            </span>
          </h1>

          {/* Sub */}
          <p style={{ fontSize: isMobile ? 16 : 18, color:G.textMuted, maxWidth:500, lineHeight:1.55, margin: isMobile ? '0 0 28px' : '0 auto 36px' }}>
            H360 kills commission theft, builds your Google presence, and turns one-time guests into loyal regulars — one platform, zero chaos.
          </p>

          {/* Desktop search pill only */}
          {!isMobile && (
            <div style={{ display:'inline-flex', alignItems:'center', background:G.bg, border:`1.5px solid ${G.border}`, borderRadius:14, padding:'6px 6px 6px 16px', boxShadow:'0 2px 20px rgba(0,0,0,0.07)', gap:8, width:'100%', maxWidth:480 }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={G.textMuted} strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
              <input type="text" placeholder="Find your restaurant name" style={{ flex:1, border:'none', outline:'none', fontSize:15, color:G.text, background:'transparent', fontFamily:'inherit' }}/>
              <button style={{ padding:'10px 18px', background:G.green, color:'#f0f9f4', border:'none', borderRadius:10, fontSize:14, fontWeight:600, cursor:'pointer', whiteSpace:'nowrap', display:'flex', alignItems:'center', gap:6, letterSpacing:'-0.01em' }}>
                Get my AI report
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
              </button>
            </div>
          )}
          {/* ARC AI badge */}
          {!isMobile && (
            <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:6, marginTop:10, fontSize:12, color:G.textMuted }}>
              <div style={{ width:16, height:16, borderRadius:4, background:'#1a1a1a', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <span style={{ color:'#fff', fontSize:8, fontWeight:800 }}>A</span>
              </div>
              Powered by ARC AI · Instant restaurant audit
            </div>
          )}
        </div>

        {/* Sticky phone section */}
        <div style={{
          position:'sticky', top:64,
          height:'calc(100vh - 64px)',
          display:'flex', alignItems:'flex-start',
          justifyContent:'center',
          paddingTop: isMobile ? 24 : 40,
          overflow:'hidden',
          background:G.bg,
        }}>
          {greenCard}
          {phoneMockup}
        </div>
      </div>

      {/* ── MOBILE STICKY BOTTOM INPUT — Owner.com exact ─────────────── */}
      {isMobile && (
        <div style={{
          position:'fixed', bottom:0, left:0, right:0, zIndex:200,
          background:G.bg, borderTop:`1px solid ${G.border}`,
          padding:'10px 16px 24px',
          boxShadow:'0 -4px 24px rgba(0,0,0,0.08)',
        }}>
          <div style={{ display:'flex', alignItems:'center', gap:8 }}>
            <input
              type="text"
              placeholder="Find your restaurant name"
              style={{ flex:1, border:`1.5px solid ${G.border}`, borderRadius:10, padding:'11px 14px', fontSize:15, color:G.text, background:G.bg, fontFamily:'inherit', outline:'none' }}
            />
            <button style={{
              width:46, height:46, borderRadius:10,
              background:G.green, border:'none',
              display:'flex', alignItems:'center', justifyContent:'center',
              cursor:'pointer', flexShrink:0,
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
                <path d="M12 19V5M5 12l7-7 7 7"/>
              </svg>
            </button>
          </div>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:5, marginTop:7, fontSize:11, color:G.textMuted }}>
            <div style={{ width:14, height:14, borderRadius:3, background:'#1a1a1a', display:'flex', alignItems:'center', justifyContent:'center' }}>
              <span style={{ color:'#fff', fontSize:7, fontWeight:800 }}>A</span>
            </div>
            Powered by ARC AI
          </div>
        </div>
      )}

      {/* ── BELOW HERO SECTIONS ──────────────────────────────────────── */}
      <BelowHero />
    </div>
  );
}
