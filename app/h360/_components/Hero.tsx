'use client';

import { useState, useEffect } from 'react';

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

const WORDS = [
  'stop paying Wolt 30%.',
  'rank #1 on Google.',
  'fill tables every night.',
  'own every repeat guest.',
];

/* Auto-scrolling phone content — CSS keyframe, no scroll-linking */
const PHONE_STYLE = `
@keyframes phoneScroll {
  0%   { transform: translateY(0px);    }
  30%  { transform: translateY(0px);    }
  65%  { transform: translateY(-320px); }
  95%  { transform: translateY(-320px); }
  100% { transform: translateY(0px);    }
}
.phone-scroll-inner { animation: phoneScroll 9s ease-in-out infinite; }
`;

function PhoneContent() {
  return (
    <>
      {/* Screen 1 — ranking */}
      <div style={{ padding: '14px 14px 20px', minHeight: 340 }}>
        <p style={{ fontSize: 13, fontWeight: 700, color: G.text, marginBottom: 10 }}>
          Who&apos;s beating you on Google
        </p>
        {[
          { rank: '1st', name: 'Competitor A', stars: 4.8 },
          { rank: '2nd', name: 'Competitor B', stars: 4.0 },
          { rank: '3rd', name: 'Competitor C', stars: 3.1 },
        ].map(r => (
          <div key={r.rank} style={{ display:'flex', alignItems:'center', gap:8, padding:'8px 10px', borderRadius:10, background:'#f9fafb', border:`1px solid ${G.border}`, marginBottom:6 }}>
            <span style={{ fontSize:10, color:G.textMuted, width:24, fontWeight:600 }}>{r.rank}</span>
            <div style={{ flex:1 }}>
              <div style={{ fontSize:12, fontWeight:600, color:G.text }}>{r.name}</div>
              <div style={{ fontSize:11, color:G.star }}>{'★'.repeat(Math.round(r.stars))} <span style={{ color:G.textMuted, fontSize:10 }}>{r.stars}</span></div>
            </div>
          </div>
        ))}
        <div style={{ textAlign:'center', color:G.textMuted, fontSize:15, letterSpacing:4, padding:'4px 0' }}>···</div>
        <div style={{ display:'flex', alignItems:'center', gap:8, padding:'9px 10px', borderRadius:10, background:'#fffbeb', border:'1.5px solid #fde68a', marginBottom:16 }}>
          <span style={{ fontSize:10, color:G.textMuted, width:24, fontWeight:600 }}>10th</span>
          <div style={{ flex:1 }}>
            <div style={{ fontSize:12, fontWeight:600, color:G.text }}>Your restaurant</div>
            <div style={{ fontSize:11, color:G.star }}>★★★★★ <span style={{ color:G.textMuted, fontSize:10 }}>4.9</span></div>
          </div>
          <span style={{ fontSize:11, fontWeight:700, color:G.orange }}>39/40</span>
        </div>

        <div style={{ height:1, background:G.border, margin:'0 -14px 16px' }}/>
        <p style={{ fontSize:13, fontWeight:700, color:G.text, marginBottom:10 }}>
          You&apos;re losing €450/mo until you fix this:
        </p>
        {[
          { title:'Not ranking in 3 nearby areas', desc:'Missing keywords competitors win with' },
          { title:'Title missing primary keyword',  desc:'"Restaurant Malta" increases rankings fast' },
        ].map((item,i) => (
          <div key={i} style={{ display:'flex', gap:8, padding:'9px 10px', borderRadius:10, background:'#f9fafb', border:`1px solid ${G.border}`, marginBottom:6 }}>
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

      {/* Screen 2 — score card */}
      <div style={{ padding: '14px 14px 20px', minHeight: 320 }}>
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', padding:'16px 0 12px', background:'#fafafa', borderRadius:14, marginBottom:14 }}>
          <svg width="108" height="60" viewBox="0 0 108 60">
            <path d="M 9 54 A 45 45 0 0 1 99 54" stroke="#e5e7eb" strokeWidth="8" fill="none" strokeLinecap="round"/>
            <path d="M 9 54 A 45 45 0 0 1 99 54" stroke="url(#hgg)" strokeWidth="8" fill="none" strokeLinecap="round" strokeDasharray="141" strokeDashoffset="91"/>
            <defs><linearGradient id="hgg" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor={G.red}/><stop offset="100%" stopColor={G.orange}/></linearGradient></defs>
            <text x="54" y="50" textAnchor="middle" fontSize="22" fontWeight="800" fill={G.text}>36</text>
            <text x="54" y="60" textAnchor="middle" fontSize="8" fill={G.textMuted}>/ 100</text>
          </svg>
          <div style={{ fontSize:13, fontWeight:700, color:G.orange }}>Website health: Poor</div>
        </div>
        {[
          { label:'Search results',   score:'12/40', color:G.red,    pct:30 },
          { label:'Guest experience', score:'35/40', color:G.orange, pct:70 },
          { label:'Local listings',   score:'4/20',  color:G.red,    pct:20 },
        ].map((s,i) => (
          <div key={i} style={{ display:'flex', alignItems:'center', gap:8, marginBottom:10 }}>
            <svg width="22" height="22" viewBox="0 0 22 22">
              <circle cx="11" cy="11" r="9" stroke="#e5e7eb" strokeWidth="3" fill="none"/>
              <circle cx="11" cy="11" r="9" stroke={s.color} strokeWidth="3" fill="none"
                strokeDasharray={`${s.pct*0.565} 100`} strokeLinecap="round"
                transform="rotate(-90 11 11)"/>
            </svg>
            <div style={{ flex:1 }}>
              <div style={{ fontSize:11, color:G.text, fontWeight:500 }}>{s.label}</div>
            </div>
            <span style={{ fontSize:11, color:G.textMuted, fontWeight:600 }}>{s.score}</span>
          </div>
        ))}
        <div style={{ background:G.text, color:'#fff', borderRadius:10, padding:'11px', textAlign:'center', fontSize:13, fontWeight:600, marginTop:8 }}>
          Fix it now with AI
        </div>
      </div>
    </>
  );
}

export default function H360Hero() {
  const [wordIdx,     setWordIdx]     = useState(0);
  const [wordVisible, setWordVisible] = useState(true);
  const [isMobile,    setIsMobile]    = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setWordVisible(false);
      setTimeout(() => { setWordIdx(i => (i+1) % WORDS.length); setWordVisible(true); }, 280);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ fontFamily:'"Inter",system-ui,-apple-system,Arial,sans-serif', background:G.bg, color:G.text }}>
      <style>{PHONE_STYLE}</style>

      {/* ── NAV ── */}
      <nav style={{
        position:'sticky', top:0, zIndex:100,
        background:G.bg, borderBottom:`1px solid ${G.border}`,
        padding: isMobile ? '0 18px' : '0 40px',
        height:60, display:'flex', alignItems:'center', justifyContent:'space-between',
      }}>
        <div style={{ display:'flex', alignItems:'center', gap:8 }}>
          <div style={{ width:28, height:28, borderRadius:7, background:G.green, display:'flex', alignItems:'center', justifyContent:'center' }}>
            <span style={{ color:'#fff', fontSize:11, fontWeight:900, letterSpacing:'-0.05em' }}>H3</span>
          </div>
          <span style={{ fontSize:16, fontWeight:800, letterSpacing:'-0.04em', color:G.text }}>H360</span>
        </div>
        {!isMobile && (
          <div style={{ display:'flex', gap:28, fontSize:14, fontWeight:500, color:G.textMuted }}>
            {[
              { label:'Product',      href:'#h360-products' },
              { label:'Pricing',      href:'/h360/pricing' },
              { label:'How it works', href:'#h360-how-it-works' },
              { label:'Company',      href:'/about' },
            ].map(l=>(
              <a key={l.label} href={l.href} style={{ cursor:'pointer', color:'inherit', textDecoration:'none', transition:'color 0.15s' }}
                onMouseEnter={e=>(e.currentTarget.style.color=G.text)}
                onMouseLeave={e=>(e.currentTarget.style.color=G.textMuted)}
              >{l.label}</a>
            ))}
          </div>
        )}
        <div style={{ display:'flex', alignItems:'center', gap:isMobile ? 10 : 12 }}>
          <a href="/h360/demo" style={{ fontSize:14, fontWeight:500, color:G.text, cursor:'pointer', textDecoration:'none' }}>Login</a>
          <a href="/h360/demo" style={{ padding:'8px 18px', background:G.text, color:'#fff', borderRadius:99, fontSize:14, fontWeight:600, cursor:'pointer', letterSpacing:'-0.01em', whiteSpace:'nowrap', textDecoration:'none', display:'inline-block', transition:'opacity 0.15s' }}
            onMouseEnter={e=>(e.currentTarget.style.opacity='0.85')}
            onMouseLeave={e=>(e.currentTarget.style.opacity='1')}
            data-testid="button-h360-nav-demo"
          >
            Get a free demo
          </a>
          {isMobile && (
            <div style={{ display:'flex', flexDirection:'column', gap:4, cursor:'pointer' }}>
              {[0,1,2].map(i=><div key={i} style={{ width:20, height:2, background:G.text, borderRadius:2 }}/>)}
            </div>
          )}
        </div>
      </nav>

      {/* ── HERO — flat, no sticky gap ── */}
      <section style={{
        padding: isMobile ? '52px 20px 0' : '64px 40px 0',
        background: G.bg,
        overflow: 'hidden',
        minHeight: isMobile ? 'auto' : '92vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        {/* Star rating */}
        <div style={{ display:'flex', alignItems:'center', gap:6, marginBottom:20, fontSize:13, color:G.textMuted }}>
          <span style={{ color:G.star, letterSpacing:2 }}>★★★★★</span>
          <span style={{ fontWeight:700, color:G.text }}>4.8</span>
          <span>across 1,000+ Malta restaurant reviews</span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontSize: isMobile ? 'clamp(32px,9vw,46px)' : 'clamp(48px,5.8vw,80px)',
          fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.036em',
          color: G.text, margin: '0 0 14px', textAlign: 'center',
          maxWidth: 860,
        }}>
          The platform Malta restaurants use to{' '}
          <span style={{
            display: 'inline-block',
            transition: 'opacity 0.22s ease, transform 0.22s ease',
            opacity:    wordVisible ? 1 : 0,
            transform:  wordVisible ? 'translateY(0)' : 'translateY(8px)',
            minWidth:   isMobile ? undefined : 540,
            textAlign:  'left',
          }}>
            {WORDS[wordIdx]}
          </span>
        </h1>

        {/* Subtitle */}
        <p style={{ fontSize: isMobile ? 16 : 19, color:G.textMuted, maxWidth:500, lineHeight:1.55, textAlign:'center', margin:'0 0 32px' }}>
          H360 kills commission theft, builds your Google presence, and turns one-time guests into loyal regulars.
        </p>

        {/* CTA bar */}
        <div style={{ display:'flex', flexDirection: isMobile ? 'column' : 'row', alignItems:'center', gap:10, width:'100%', maxWidth:480, marginBottom: isMobile ? 36 : 0 }}>
          <div style={{ flex:1, display:'flex', alignItems:'center', background:G.bg, border:`1.5px solid ${G.border}`, borderRadius:12, padding:'5px 5px 5px 14px', gap:8, width: isMobile ? '100%' : undefined, boxShadow:'0 2px 16px rgba(0,0,0,0.06)' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={G.textMuted} strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            <input
              type="text"
              placeholder="Find your restaurant name"
              style={{ flex:1, border:'none', outline:'none', fontSize:15, color:G.text, background:'transparent', fontFamily:'inherit' }}
              data-testid="input-h360-hero-search"
            />
            <a href="/h360/demo" style={{ padding:'9px 16px', background:G.green, color:'#f0f9f4', borderRadius:9, fontSize:14, fontWeight:600, cursor:'pointer', whiteSpace:'nowrap', display:'flex', alignItems:'center', gap:6, letterSpacing:'-0.01em', textDecoration:'none' }}
              data-testid="button-h360-hero-cta">
              Get my AI report
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
            </a>
          </div>
        </div>

        <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:5, marginTop:10, marginBottom: isMobile ? 0 : 48, fontSize:12, color:G.textMuted }}>
          <div style={{ width:15, height:15, borderRadius:4, background:'#1a1a1a', display:'flex', alignItems:'center', justifyContent:'center' }}>
            <span style={{ color:'#fff', fontSize:7, fontWeight:800 }}>A</span>
          </div>
          Powered by ARC AI · Instant restaurant audit
        </div>

        {/* Phone + green slab — fixed height, no scroll gap */}
        {!isMobile && (
          <div style={{ position:'relative', width:'100%', maxWidth:900, height:520, flexShrink:0 }}>
            {/* Green slab */}
            <div style={{
              position:'absolute', bottom:0, left:'50%', transform:'translateX(-50%)',
              width:'68%', height:'88%',
              borderRadius:'22px 22px 0 0',
              background:'linear-gradient(112deg,#094413 0%,#166b2e 30%,#3db85e 70%,#c2edce 100%)',
              overflow:'hidden',
            }}>
              <svg style={{ position:'absolute', inset:0, opacity:0.08, width:'100%', height:'100%' }}>
                <defs><pattern id="hlines" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse" patternTransform="rotate(30)">
                  <line x1="0" y1="0" x2="0" y2="28" stroke="#fff" strokeWidth="1"/>
                </pattern></defs>
                <rect width="100%" height="100%" fill="url(#hlines)"/>
              </svg>
            </div>
            {/* Phone */}
            <div style={{
              position:'absolute', bottom:0, left:'50%', transform:'translateX(-50%)',
              zIndex:2, width:255,
              background:'#0d0d0d', borderRadius:42,
              padding:'10px 8px',
              boxShadow:'0 40px 80px rgba(0,0,0,0.28), 0 0 0 0.5px rgba(255,255,255,0.06)',
            }}>
              {/* Side buttons */}
              {[{s:'left',t:80},{s:'left',t:120},{s:'left',t:178},{s:'right',t:118}].map((b,i)=>(
                <div key={i} style={{ position:'absolute', [b.s]:-2.5, top:b.t, width:2.5,
                  height:b.s==='right'?62:(i===0?28:46),
                  background:'#2a2a2a',
                  borderRadius:b.s==='left'?'3px 0 0 3px':'0 3px 3px 0' }}/>
              ))}
              {/* Notch */}
              <div style={{ width:96, height:26, background:'#000', borderRadius:18, margin:'0 auto', position:'relative', zIndex:5 }}/>
              {/* Screen */}
              <div style={{ borderRadius:30, overflow:'hidden', background:'#ffffff', height:440, marginTop:-1 }}>
                {/* Status bar */}
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'8px 14px 4px', fontSize:11, fontWeight:700, color:G.text }}>
                  <span>9:41</span>
                  <div style={{ display:'flex', gap:4, alignItems:'center' }}>
                    <svg width="15" height="10" viewBox="0 0 18 12" fill={G.text}><rect x="0" y="7" width="3" height="5" rx="1"/><rect x="4.5" y="5" width="3" height="7" rx="1"/><rect x="9" y="2" width="3" height="10" rx="1"/><rect x="13.5" y="0" width="3" height="12" rx="1" opacity="0.25"/></svg>
                    <svg width="14" height="11" viewBox="0 0 16 12" fill="none"><path d="M8 9.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" fill={G.text}/><path d="M3.5 7A6.5 6.5 0 0112.5 7" stroke={G.text} strokeWidth="1.5" fill="none" strokeLinecap="round"/><path d="M1 4.5A10 10 0 0115 4.5" stroke={G.text} strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
                    <svg width="25" height="12" viewBox="0 0 28 13" fill="none"><rect x="0.5" y="0.5" width="23" height="12" rx="3.5" stroke={G.text} strokeOpacity="0.35"/><rect x="2" y="2" width="18" height="9" rx="2" fill={G.text}/><path d="M24.5 4.5v4c1-.6 1-3.4 0-4z" fill={G.text} opacity="0.4"/></svg>
                  </div>
                </div>
                {/* Auto-scrolling content */}
                <div className="phone-scroll-inner">
                  <PhoneContent/>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile: compact phone strip */}
        {isMobile && (
          <div style={{ width:'100%', maxWidth:320, margin:'0 auto' }}>
            <div style={{ background:'#0d0d0d', borderRadius:28, padding:'8px 6px', boxShadow:'0 24px 60px rgba(0,0,0,0.22)' }}>
              <div style={{ width:72, height:20, background:'#000', borderRadius:14, margin:'0 auto 1px' }}/>
              <div style={{ borderRadius:22, overflow:'hidden', background:'#fff', height:260 }}>
                <div style={{ padding:'10px 12px 0', fontSize:11, fontWeight:700, color:G.text, marginBottom:8 }}>Who&apos;s beating you on Google</div>
                {[{rank:'1st',name:'Competitor A'},{rank:'2nd',name:'Competitor B'},{rank:'10th',name:'Your restaurant',hl:true}].map(r=>(
                  <div key={r.rank} style={{ display:'flex', alignItems:'center', gap:7, padding:'7px 12px', background:r.hl?'#fffbeb':'transparent', borderBottom:`1px solid ${G.border}` }}>
                    <span style={{ fontSize:9, color:G.textMuted, width:20, fontWeight:600 }}>{r.rank}</span>
                    <div style={{ flex:1, fontSize:11, fontWeight:600, color:G.text }}>{r.name}</div>
                    <span style={{ fontSize:9, color:r.hl?G.orange:G.textMuted }}>★★★★★</span>
                  </div>
                ))}
                <div style={{ padding:'12px 12px 0' }}>
                  <div style={{ background:G.text, color:'#fff', borderRadius:8, padding:'9px', textAlign:'center', fontSize:12, fontWeight:600 }}>Fix it now with AI</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Mobile sticky CTA */}
      {isMobile && (
        <div style={{ position:'fixed', bottom:0, left:0, right:0, zIndex:200, background:G.bg, borderTop:`1px solid ${G.border}`, padding:'10px 16px 24px', boxShadow:'0 -4px 24px rgba(0,0,0,0.08)' }}>
          <div style={{ display:'flex', alignItems:'center', gap:8 }}>
            <input type="text" placeholder="Find your restaurant name"
              style={{ flex:1, border:`1.5px solid ${G.border}`, borderRadius:10, padding:'10px 13px', fontSize:15, color:G.text, background:G.bg, fontFamily:'inherit', outline:'none' }}
              data-testid="input-h360-mobile-search"/>
            <a href="/h360/demo" style={{ width:44, height:44, borderRadius:10, background:G.green, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, textDecoration:'none' }}
              data-testid="button-h360-mobile-cta">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
