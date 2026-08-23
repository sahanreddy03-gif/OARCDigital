"use client";

import { useEffect, useLayoutEffect, useRef, useState, useCallback } from "react";
import { createPortal } from "react-dom";

// ── Engine realm tokens ──────────────────────────────────────────────────────
const T = {
  noir:   "#0E0D0C",
  ivory:  "#F2EFE9",
  scar:   "#E02B20",  // scarlet on noir
  crim:   "#C8102E",  // crimson on ivory
  card:   "#141210",
  line:   "rgba(242,239,233,.12)",
  dim:    "rgba(242,239,233,.55)",
  dimLow: "rgba(242,239,233,.36)",
  e:      "cubic-bezier(.16,1,.3,1)",
  // Studio tokens (for placeholder)
  stu:    "#F0EAE0",
  ink:    "#191410",
  oxb:    "#7E1F2B",
  // Machine tokens
  gfx:    "#0B0C0D",
  wht:    "#F5F5F3",
};

// ── Reveal wrapper — scroll-triggered fade-up ────────────────────────────────
function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion:reduce)").matches;
    if (reduce) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(22px)";
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.style.transition = `opacity .65s ${T.e} ${delay}ms, transform .65s ${T.e} ${delay}ms`;
        el.style.opacity = "1"; el.style.transform = "none";
        io.disconnect();
      }
    }, { threshold: .1 });
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return <div ref={ref}>{children}</div>;
}

// ── Kicker ───────────────────────────────────────────────────────────────────
function Kicker({ label, color = T.scar }: { label: string; color?: string }) {
  return (
    <div style={{ display:"flex", alignItems:"center", gap:".65rem", marginBottom:".9rem" }}>
      <span style={{ display:"block", width:24, height:1, background:color, flexShrink:0 }} />
      <span style={{ fontFamily:"var(--font-space-mono,'Space Mono',monospace)", fontSize:10,
        letterSpacing:".26em", textTransform:"uppercase" as const, color }}>{label}</span>
    </div>
  );
}

// ── Phase card ───────────────────────────────────────────────────────────────
interface PhaseData {
  num: string; label: string; headline: string; hook: string;
  who: string; body: string; stat: string; statS?: string; statD: string;
}
function Phase({ p, realm = "E" }: { p: PhaseData; realm?: string }) {
  const sig = realm === "E" ? T.scar : realm === "S" ? T.oxb : T.wht;
  const bg = realm === "E" ? T.noir : realm === "S" ? T.stu : T.gfx;
  const fg = realm === "E" ? T.ivory : realm === "S" ? T.ink : T.wht;
  const line = realm === "E" ? T.line : realm === "S" ? "rgba(25,20,16,.12)" : "rgba(245,245,243,.12)";
  return (
    <Reveal>
      <div style={{ padding:"1.8rem 20px 2rem", borderTop:`1px solid ${line}` }}>
        <div style={{ display:"flex", alignItems:"baseline", gap:".5rem", marginBottom:".8rem" }}>
          <span style={{ fontFamily:"var(--font-space-mono,'Space Mono',monospace)", fontSize:11,
            letterSpacing:".04em", color:sig }}>{p.num}</span>
          <span style={{ fontFamily:"var(--font-space-mono,'Space Mono',monospace)", fontSize:9.5,
            letterSpacing:".18em", textTransform:"uppercase" as const, color: realm==="E" ? T.dim : "rgba(25,20,16,.5)" }}>{p.label}</span>
        </div>
        <h3 style={{ fontFamily:"var(--font-bricolage,'Bricolage Grotesque',sans-serif)", fontWeight:800,
          fontSize:"clamp(1.8rem,7.5vw,2.6rem)", lineHeight:1, letterSpacing:"-.04em", color:fg,
          marginBottom:".75rem" }} dangerouslySetInnerHTML={{ __html: p.headline }} />
        <p style={{ fontFamily:"var(--font-instrument-serif,'Instrument Serif',serif)",
          fontStyle:"italic", fontSize:"clamp(1.1rem,4vw,1.4rem)", color: realm==="S" ? T.oxb : sig,
          lineHeight:1.2, marginBottom:"1rem" }}>{p.hook}</p>
        <p style={{ fontSize:".93rem", color: realm==="E" ? T.dim : "rgba(25,20,16,.62)",
          lineHeight:1.62, marginBottom:".8rem" }}>
          <strong style={{ color:fg, fontWeight:600, marginRight:"0.5rem" }}>— {p.who}</strong>
          <span dangerouslySetInnerHTML={{ __html: p.body }} />
        </p>
        <div style={{ display:"flex", alignItems:"baseline", gap:".7rem",
          paddingTop:"1rem", borderTop:`1px solid ${line}`, marginTop:".8rem" }}>
          <span style={{ fontFamily:"var(--font-space-mono,'Space Mono',monospace)", fontWeight:700,
            fontSize:"clamp(2rem,9vw,2.8rem)", lineHeight:.88, letterSpacing:"-.04em", color:fg }}>
            {p.stat}
            {p.statS && <span style={{ fontFamily:"var(--font-instrument-serif,'Instrument Serif',serif)",
              fontStyle:"italic", fontWeight:400, fontSize:".42em", color:sig }}>{p.statS}</span>}
          </span>
          <span style={{ fontSize:11.5, color: realm==="E" ? T.dim : "rgba(25,20,16,.5)",
            lineHeight:1.4, maxWidth:"28ch" }}>{p.statD}</span>
        </div>
      </div>
    </Reveal>
  );
}

// ── Stat strip ───────────────────────────────────────────────────────────────
function StatStrip({ items }: { items: { n: string; s?: string; label: string }[] }) {
  return (
    <div style={{ display:"flex", flexWrap:"wrap" as const, gap:"1.4rem 2rem",
      padding:"1.6rem 20px 1.4rem", borderBottom:`1px solid ${T.line}` }}>
      {items.map((st, i) => (
        <div key={i} style={{ position:"relative" as const, paddingLeft:"1rem" }}>
          <span style={{ position:"absolute" as const, left:0, top:".1rem", bottom:".4rem",
            width:3, background:T.scar, borderRadius:2 }} />
          <strong style={{ display:"block",
            fontFamily:"var(--font-space-mono,'Space Mono',monospace)", fontWeight:700,
            fontSize:"clamp(1.8rem,7vw,2.4rem)", lineHeight:.85, color:T.ivory, letterSpacing:"-.04em" }}>
            {st.n}
            {st.s && <span style={{ fontFamily:"var(--font-instrument-serif,'Instrument Serif',serif)",
              fontStyle:"italic", fontWeight:400, fontSize:".44em", color:T.dim }}>{st.s}</span>}
          </strong>
          <span style={{ display:"block", fontSize:11.5, color:T.dim, lineHeight:1.35,
            marginTop:".4rem", maxWidth:"18ch" }}>{st.label}</span>
        </div>
      ))}
    </div>
  );
}

// ── FAQ block ────────────────────────────────────────────────────────────────
function FAQ({ items, line, fg, dim, bg, border, head, body, light = false }:
  { items: { q: string; a: string }[]; line?: string; fg?: string; dim?: string;
    bg?: string; border?: string; head?: string; body?: string; light?: boolean; }) {
  const bdr  = border ?? line ?? T.line;
  const hdFg = head   ?? fg  ?? T.ivory;
  const bdFg = body   ?? dim ?? T.dim;
  const sigC = light ? "#555" : T.scar;
  return (
    <div style={{ padding:"1.8rem 20px 2rem", borderTop:`1px solid ${bdr}` }}>
      <Kicker label="Straight answers" color={sigC} />
      {items.map((it, i) => (
        <Reveal key={i} delay={i * 60}>
          <div style={{ borderTop: i > 0 ? `1px solid ${bdr}` : "none",
            paddingTop: i > 0 ? "1.4rem" : 0, paddingBottom:"1.4rem" }}>
            <h4 style={{ fontFamily:"var(--font-bricolage,'Bricolage Grotesque',sans-serif)",
              fontWeight:800, fontSize:"clamp(1rem,3.8vw,1.3rem)", letterSpacing:"-.02em",
              lineHeight:1.2, color:hdFg, marginBottom:".6rem" }}>{it.q}</h4>
            <p style={{ fontSize:".96rem", color:bdFg, lineHeight:1.62, maxWidth:"58ch" }}>{it.a}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

// ── CTA block ────────────────────────────────────────────────────────────────
function CTA({ big, sub, btn, onClose, light = false }:
  { big: React.ReactNode; sub: string; btn: string; onClose: () => void; light?: boolean }) {
  const ctaBg   = light ? "#16120F"      : T.scar;
  const ctaFg   = light ? "#ECE7DE"      : T.noir;
  const headFg  = light ? "#16120F"      : T.ivory;
  const subFg   = light ? "rgba(22,18,15,.68)" : T.dim;
  const border  = light ? "rgba(22,18,15,.13)" : T.line;
  const footFg  = light ? "rgba(22,18,15,.35)" : "rgba(242,239,233,.3)";
  return (
    <div style={{ padding:"2.4rem 20px calc(3.2rem + env(safe-area-inset-bottom))",
      borderTop:`1px solid ${border}`, marginTop:"1rem" }}>
      <h2 style={{ fontFamily:"var(--font-bricolage,'Bricolage Grotesque',sans-serif)", fontWeight:800,
        fontSize:"clamp(2rem,9vw,3rem)", lineHeight:.95, letterSpacing:"-.04em",
        color:headFg, marginBottom:"1rem" }}>{big}</h2>
      <p style={{ fontSize:".96rem", color:subFg, lineHeight:1.62, maxWidth:"44ch", marginBottom:"1.6rem" }}>{sub}</p>
      <a href="/contact" onClick={onClose} style={{ display:"block", textAlign:"center" as const,
        fontFamily:"var(--font-space-mono,'Space Mono',monospace)", fontSize:12, fontWeight:700,
        letterSpacing:".13em", textTransform:"uppercase" as const, color:ctaFg, background:ctaBg,
        textDecoration:"none", padding:"1.15rem", borderRadius:6 }}>{btn} →</a>
      <p style={{ fontFamily:"var(--font-space-mono,'Space Mono',monospace)", fontSize:10.5,
        color:footFg, letterSpacing:".04em", marginTop:"1.4rem", textAlign:"center" as const }}>
        OARC — one team for the whole business. Malta.</p>
    </div>
  );
}

// shared Instrument Serif italic style for CTA headlines
const CtaItalic = ({ children }: { children: React.ReactNode }) => (
  <em style={{ fontFamily:"var(--font-instrument-serif,'Instrument Serif',serif)", fontStyle:"italic", fontWeight:400 }}>{children}</em>
);

// ── GROWTH content — exact prototype port, bone/terra light world ────────────
// src: growth_bring_me_more_customer_same_1786575410244.txt
const GM_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Spectral:ital,wght@0,500;1,400;1,500&display=swap');
.gmx{
  --bone:#F6F1E9;--card:#FBF8F2;--ink:#17120C;--terra:#C0532B;--terrad:#A5401E;
  --i70:rgba(23,18,12,.7);--i45:rgba(23,18,12,.46);--i30:rgba(23,18,12,.3);
  --i16:rgba(23,18,12,.16);--i10:rgba(23,18,12,.08);
  --tg:rgba(192,83,43,.28);--tf:rgba(192,83,43,.08);
  --line:rgba(23,18,12,.12);
  --ui:'Instrument Sans',sans-serif;--serif:'Spectral',serif;--e:cubic-bezier(.16,1,.3,1);
  background:var(--bone);color:var(--ink);font-family:var(--ui);-webkit-font-smoothing:antialiased;overflow-x:hidden}
.gmx *{margin:0;padding:0;box-sizing:border-box}
.gmx .hero{padding:1.8rem 20px 2.2rem;border-bottom:1px solid var(--line)}
.gmx .hero .lbl{font-size:10.5px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--terra)}
.gmx .hero h1{font-size:clamp(2.4rem,10vw,3.6rem);font-weight:700;line-height:.96;letter-spacing:-.035em;margin-top:.7rem}
.gmx .hero h1 em{font-family:var(--serif);font-style:italic;font-weight:500;font-size:1.06em;color:var(--terra)}
.gmx .hero p{font-size:.98rem;color:var(--i70);line-height:1.58;margin-top:1rem;max-width:44ch}
.gmx .hero p b{color:var(--ink);font-weight:600}
.gmx .journey{margin-top:2rem;border:1px solid var(--line);border-radius:14px;background:var(--card);padding:1.4rem 1.2rem;box-shadow:0 1px 0 rgba(255,255,255,.6) inset,0 14px 34px rgba(23,18,12,.05)}
.gmx .journey .jcap{display:flex;justify-content:space-between;font-family:var(--ui);font-size:10px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--i30);margin-bottom:.4rem}
.gmx .jsvg{width:100%;display:block;overflow:visible}
.gmx .hero .team{margin-top:1.7rem}
.gmx .hero .team s{font-size:10px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--i45);font-style:normal;text-decoration:none}
.gmx .hero .team .row{display:flex;flex-wrap:wrap;gap:6px;margin-top:.7rem}
.gmx .hero .team .row span{border:1px solid var(--line);padding:6px 10px;font-size:11px;color:var(--i70);border-radius:2px;background:var(--card)}
.gmx .shead{padding:1.7rem 20px .4rem;font-size:10.5px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--i45);display:flex;align-items:center;gap:.8rem}
.gmx .shead::after{content:'';flex:1;height:1px;background:var(--line)}
.gmx .phase{padding:1.8rem 20px 2rem;border-top:1px solid var(--line)}
.gmx .phase:first-of-type{border-top:0}
.gmx .phase .idx{display:flex;align-items:baseline;gap:.6rem;font-variant-numeric:tabular-nums}
.gmx .phase .idx b{font-family:var(--serif);font-style:italic;font-size:1.1rem;color:var(--terra)}
.gmx .phase .idx s{font-size:10.5px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--i45);text-decoration:none;font-style:normal}
.gmx .phase h2{font-size:clamp(2rem,8.4vw,2.7rem);font-weight:700;line-height:1;letter-spacing:-.035em;margin-top:.9rem}
.gmx .phase h2 em{font-family:var(--serif);font-style:italic;font-weight:500;font-size:1.08em;color:var(--terra)}
.gmx .phase .out{font-family:var(--serif);font-style:italic;font-size:clamp(1.35rem,5.5vw,1.7rem);color:var(--ink);margin-top:.9rem;line-height:1.15}
.gmx .viz{margin-top:1.5rem;border:1px solid var(--line);border-radius:10px;background:var(--card);position:relative;overflow:hidden;aspect-ratio:1/.8;box-shadow:0 1px 0 rgba(255,255,255,.6) inset}
.gmx .viz::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle at 1px 1px,rgba(23,18,12,.05) 1px,transparent 0);background-size:22px 22px;mask-image:radial-gradient(130% 100% at 50% 45%,#000 45%,transparent 85%)}
.gmx .viz svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
.gmx .who{margin-top:1rem;display:flex;align-items:center;gap:8px;font-size:11px;font-weight:700;letter-spacing:.02em;color:var(--terra)}
.gmx .who::before{content:'';width:16px;height:1px;background:var(--terra);opacity:.5}
.gmx .cap{margin-top:.7rem;font-size:.92rem;color:var(--i70);line-height:1.6}
.gmx .cap b{color:var(--ink);font-weight:600}
.gmx .stat{margin-top:1.1rem;display:flex;align-items:baseline;gap:.7rem;padding-top:1rem;border-top:1px solid var(--line)}
.gmx .stat b{font-size:clamp(2.4rem,11vw,3.2rem);font-weight:700;letter-spacing:-.05em;line-height:.85;font-variant-numeric:tabular-nums}
.gmx .stat b em{font-family:var(--serif);font-style:italic;font-size:.42em;color:var(--terra);font-weight:500}
.gmx .stat p{font-size:11.5px;color:var(--i45);line-height:1.4;max-width:26ch}
.gmx .bonus{margin:0 20px;padding:1.3rem 1.4rem;border:1px dashed var(--line);border-radius:10px;background:var(--card)}
.gmx .bonus s{font-size:10px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--i45);font-style:normal;text-decoration:none}
.gmx .bonus h4{font-family:var(--serif);font-style:italic;font-size:1.3rem;font-weight:500;margin:.4rem 0 .5rem}
.gmx .bonus p{font-size:.88rem;color:var(--i70);line-height:1.55}
.gmx .bonus p b{color:var(--ink);font-weight:600}
.gmx .end{padding:2.2rem 20px calc(2.4rem + env(safe-area-inset-bottom));border-top:1px solid var(--line);margin-top:1.7rem}
.gmx .end .big{font-family:var(--serif);font-style:italic;font-weight:500;font-size:clamp(2.4rem,10vw,3.4rem);line-height:1.05;letter-spacing:-.01em}
.gmx .end .big span{color:var(--terra)}
.gmx .end p{font-size:.95rem;color:var(--i70);line-height:1.62;max-width:46ch;margin-top:1rem}
.gmx .end p b{color:var(--ink);font-weight:600}
.gmx .end a{display:block;margin-top:1.4rem;text-align:center;font-size:12px;font-weight:700;letter-spacing:.13em;text-transform:uppercase;color:var(--bone);background:var(--terra);text-decoration:none;padding:1.15rem;border-radius:6px}
.gmx .end .foot{font-size:11px;color:var(--i30);letter-spacing:.04em;margin-top:1.4rem}
.gmx .wire{stroke:var(--i16);stroke-width:1.25;fill:none}
.gmx .node{fill:var(--i16)} .gmx .nodeOn{fill:var(--terra)}
.gmx .ring{fill:none;stroke:var(--terra);stroke-width:1.5}
.gmx .lab{font-family:'Instrument Sans';font-weight:600;fill:var(--i70)}
.gmx .labk{font-family:'Instrument Sans';font-weight:700;fill:var(--bone)}
.gmx .glow{filter:drop-shadow(0 0 7px var(--tg))}
.gmx .draw{stroke-dasharray:var(--L,240);stroke-dashoffset:var(--L,240)}
.gmx .live .draw{animation:gmx-draw 1.15s var(--e) forwards}
@keyframes gmx-draw{to{stroke-dashoffset:0}}
.gmx .pop{opacity:0;transform:scale(.4);transform-origin:center}
.gmx .live .pop{animation:gmx-pop .5s var(--e) forwards}
@keyframes gmx-pop{to{opacity:1;transform:scale(1)}}
.gmx .up{opacity:0}
.gmx .live .up{animation:gmx-up .6s var(--e) forwards}
@keyframes gmx-up{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}
.gmx .grow{transform:scaleY(0);transform-origin:50% 100%}
.gmx .live .grow{animation:gmx-grw .75s var(--e) forwards}
@keyframes gmx-grw{to{transform:scaleY(1)}}
.gmx .spin{animation:gmx-sp 6s linear infinite}
@keyframes gmx-sp{to{transform:rotate(360deg)}}
@media(prefers-reduced-motion:reduce){.gmx *{animation:none!important;transition-duration:.01ms!important}.gmx .up,.gmx .pop{opacity:1;transform:none}.gmx .draw{stroke-dashoffset:0}.gmx .grow{transform:none}}
`;

const GM_TERRA = '#C0532B';
const GM_BONE = '#F6F1E9';

const GM_STEPS = ['They find you','You find them','They like you','They pick you','You stay close','They come back'];
const GM_TEAM = ['Search','Reach','The Studio','Conversion','Lifecycle','Retention'];

const GM_PARTS = [
  { n:'01', sp:'They find you', h:'They <em>find</em> you.', out:'The ones already looking.',
    who:'Search team',
    cap:'The Search team owns the moment someone is already searching for what you sell \u2014 on Google, on Maps, in the AI answer. We work your listing, your reviews and the pages those answers are built from, so when a buyer looks, <b>you\u2019re the one they find.</b> The plumber searched at 8pm, the clinic got googled nearby, the shopper typed \u201cbest near me\u201d \u2014 the cheapest customer there is, already wanting you.',
    stat:'76', statEm:'%', statP:'of people who search nearby on their phone visit a business within a day \u2014 if you show up', viz:'find' },
  { n:'02', sp:'You find them', h:'You <em>find</em> them.', out:'The ones not looking yet.',
    who:'Reach team',
    cap:'Most of your future customers aren\u2019t searching today. The Reach team builds audiences from the people who already paid you, then runs your social and paid ads at the exact people who look just like them \u2014 on the platform, at the hour they\u2019re actually there. Search waits to be found; <b>this goes and finds them.</b>',
    stat:'6', statP:'audiences built from your own buyers, not guesswork \u2014 the people most likely to be next', viz:'findthem' },
  { n:'03', sp:'They like you', h:'They <em>like</em> you.', out:'They care before they compare.',
    who:'The Studio',
    cap:'Reach picks who sees you; the Studio gives them a reason to stop. We turn your business into story-led video and content \u2014 who you are, why you do it, what you stand for \u2014 so people care before they ever compare a price. Because half of what an ad returns is the creative itself, not the spend.',
    stat:'49', statEm:'%', statP:'of an ad\u2019s sales lift comes from the creative \u2014 the story is the reason they pick you', viz:'like' },
  { n:'04', sp:'They pick you', h:'They <em>pick</em> you.', out:'You beat the other three.',
    who:'Conversion team',
    cap:'Once they care, they compare. Every buyer checks the same four things with their head \u2014 a visible price, recent work, real reviews, a straight answer \u2014 and picks whoever has them all. The Conversion team fills whatever\u2019s blank, <b>starting with the price most competitors hide.</b>',
    stat:'4', statP:'things every buyer checks before they choose \u2014 we make sure yours are all there', viz:'pick' },
  { n:'05', sp:'You stay close', h:'You <em>stay close</em>.', out:'You never go quiet.',
    who:'Lifecycle team',
    cap:'The Lifecycle team owns every moment between deciding and buying \u2014 both ways. The instant a buyer reaches out they get an answer in seconds, any hour, and we stay in front across the gap until they\u2019re ready. Answer in five minutes and you\u2019re far likelier to win them than at thirty.',
    stat:'21', statEm:'\u00d7', statP:'likelier to qualify a lead answered in 5 minutes than in 30 \u2014 so we never go quiet', viz:'stayclose' },
  { n:'06', sp:'They come back', h:'They <em>come back</em>.', out:'Again, and again.',
    who:'Retention team',
    cap:'The first sale is the expensive one. The Retention team captures the review at the sale, times the next offer to the buyer\u2019s own cycle, and engineers the referral \u2014 turning one customer into many, at almost no cost. <b>This is the cheapest growth there is.</b>',
    stat:'25-95', statEm:'%', statP:'more profit from just a 5% lift in how many customers come back', viz:'comeback' },
] as const;

const GM_VIZ: Record<string, () => string> = {
  find() {
    let s='<rect class="wire up" x="40" y="34" width="320" height="42" rx="10" style="animation-delay:.1s"/>'+
      '<circle class="wire up" cx="66" cy="55" r="8" style="animation-delay:.2s"/><line class="wire up" x1="72" y1="61" x2="80" y2="69" style="animation-delay:.2s"/>'+
      '<text class="lab up" x="90" y="60" font-size="12.5" style="animation-delay:.3s">best [your service] near me</text>';
    const rows=[{y:98,on:1,t:'You'},{y:156,on:0,t:'A competitor'},{y:214,on:0,t:'A competitor'}];
    rows.forEach((r,i)=>{s+=`<rect class="${r.on?'nodeOn glow':'wire'} up" x="40" y="${r.y}" width="320" height="44" rx="8" ${r.on?'':'fill="rgba(23,18,12,.03)"'} style="animation-delay:${.4+i*.12}s"/>`+
      `<text class="${r.on?'labk':'lab'} up" x="60" y="${r.y+28}" font-size="13.5" style="animation-delay:${.5+i*.12}s">${r.t}</text>`;});
    s+='<text class="lab up" x="40" y="282" font-size="10.5" opacity=".55" style="animation-delay:.9s">found the moment they search</text>';
    return `<svg viewBox="0 0 400 292">${s}</svg>`;
  },
  findthem() {
    let s='';[128,92,56].forEach((r,i)=>{s+=`<circle class="wire draw" style="--L:${(2*Math.PI*r).toFixed(0)};animation-delay:${i*.18}s" cx="200" cy="150" r="${r}"/>`;});
    s+='<circle class="nodeOn glow pop" cx="200" cy="150" r="20" style="animation-delay:.2s"/><text class="labk pop" x="200" y="154" font-size="10" text-anchor="middle" font-weight="700" style="animation-delay:.35s">buyers</text>';
    const pts=[[80,66],[322,80],[300,236],[100,240],[152,104],[268,116],[112,196],[300,192]];const hit=[0,3,5,6];
    pts.forEach((p,i)=>{const on=hit.indexOf(i)>-1;s+=`<circle class="${on?'nodeOn glow':'node'} pop" cx="${p[0]}" cy="${p[1]}" r="${on?6:5}" style="animation-delay:${.8+i*.05}s"/>`;});
    s+='<text class="lab up" x="200" y="294" font-size="10.5" text-anchor="middle" opacity=".55" style="animation-delay:1s">more people just like them</text>';
    return `<svg viewBox="0 0 400 302">${s}</svg>`;
  },
  like() {
    let s='<path class="wire draw glow" style="--L:520" d="M30,214 C110,214 124,110 204,98 C264,89 292,116 300,120"/>';
    const b=[[30,214],[124,158],[204,98]];b.forEach((p,i)=>{const on=i===2;s+=`<circle class="${on?'nodeOn glow':'node'} pop" cx="${p[0]}" cy="${p[1]}" r="${on?7:5}" style="animation-delay:${.6+i*.2}s"/>`;});
    s+=`<path class="pop" style="animation-delay:1.3s" d="M330,112 c-7,-11 -24,-4 -24,9 c0,11 24,24 24,24 c0,0 24,-13 24,-24 c0,-13 -17,-20 -24,-9 z" fill="${GM_TERRA}"/>`+
       '<text class="lab up" x="34" y="240" font-size="10.5" style="animation-delay:.3s">a reason to care</text>';
    return `<svg viewBox="0 0 400 260">${s}</svg>`;
  },
  pick() {
    const items=['A clear price','Recent work','Real reviews','A straight answer'];let s='';
    items.forEach((l,i)=>{const y=32+i*60;s+=`<rect class="wire up" x="40" y="${y}" width="236" height="46" rx="8" style="animation-delay:${i*.1}s"/>`+
      `<text class="lab up" x="58" y="${y+29}" font-size="13.5" style="animation-delay:${i*.1}s">${l}</text>`+
      `<circle class="nodeOn glow pop" cx="322" cy="${y+23}" r="16" style="animation-delay:${.6+i*.14}s"/>`+
      `<path class="draw" style="--L:26;animation-delay:${.9+i*.14}s" d="M313,${y+23} l6,7 l12,-14" stroke="${GM_BONE}" stroke-width="2.6" fill="none" stroke-linecap="round"/>`;});
    return `<svg viewBox="0 0 400 292">${s}</svg>`;
  },
  stayclose() {
    const s='<circle class="wire" cx="118" cy="128" r="72"/>'+
      '<g class="spin" style="transform-origin:118px 128px"><circle class="nodeOn glow" cx="118" cy="60" r="6"/></g>'+
      `<path class="draw glow" style="--L:100" d="M118,128 L118,76 M118,128 L150,142" stroke="${GM_TERRA}" stroke-width="3.2" fill="none" stroke-linecap="round"/><circle class="nodeOn" cx="118" cy="128" r="4"/>`+
      '<rect class="nodeOn glow up" x="222" y="106" width="152" height="46" rx="12" style="animation-delay:.8s"/><text class="labk up" x="240" y="134" font-size="12.5" style="animation-delay:.9s">Replied · in seconds</text>'+
      '<text class="lab up" x="118" y="226" font-size="10.5" text-anchor="middle" opacity=".55" style="animation-delay:.5s">any hour, never quiet</text>';
    return `<svg viewBox="0 0 400 252">${s}</svg>`;
  },
  comeback() {
    let s='<line class="wire" x1="28" y1="204" x2="372" y2="204"/>';
    [0,1,2,3].forEach(i=>{const h=44+i*30,x=120+i*58;s+=`<rect class="nodeOn grow" x="${x}" y="${204-h}" width="44" height="${h}" rx="3" style="animation-delay:${.3+i*.15}s"/>`;});
    s+='<rect class="node grow" x="40" y="152" width="44" height="52" rx="3"/><text class="lab" x="62" y="226" font-size="10.5" text-anchor="middle" opacity=".55">first sale</text>'+
       '<text class="lab" x="264" y="226" font-size="10.5" text-anchor="middle" opacity=".55">every time after</text>'+
       `<path class="wire draw glow" style="--L:420;animation-delay:1s" d="M300,150 C360,120 360,40 200,40 C82,40 70,110 84,150"/><path class="pop" style="animation-delay:1.8s" d="M84,150 l-4,-14 l14,5 z" fill="${GM_TERRA}"/>`;
    return `<svg viewBox="0 0 400 262">${s}</svg>`;
  },
};

function GrowthContent({ onClose }: { onClose: () => void }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const journeyRef = useRef<HTMLDivElement>(null);
  const jnodesRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const id = 'gmx-modal-css';
    if (!document.getElementById(id)) {
      const s = document.createElement('style');
      s.id = id; s.textContent = GM_CSS;
      document.head.appendChild(s);
    }
  }, []);

  // hero journey nodes
  useEffect(() => {
    const g = jnodesRef.current; if (!g) return;
    let ns='';
    GM_STEPS.forEach((nm,i)=>{const y=40+i*79.2;
      ns+=`<circle class="nodeOn glow pop" cx="52" cy="${y}" r="7" style="animation-delay:${.2+i*.16}s"/>`+
          `<text class="lab up" x="76" y="${y-3}" font-size="10" style="animation-delay:${.3+i*.16}s" font-family="Instrument Sans" font-weight="700" fill="rgba(23,18,12,.3)">0${i+1}</text>`+
          `<text class="up" x="76" y="${y+13}" font-size="14" style="animation-delay:${.35+i*.16}s" font-family="Instrument Sans" font-weight="600" fill="#17120C">${nm}</text>`;});
    g.innerHTML = ns;
    const id = requestAnimationFrame(() => journeyRef.current?.classList.add('live'));
    return () => cancelAnimationFrame(id);
  }, []);

  // scroll-triggered viz reveal
  useEffect(() => {
    const io = new IntersectionObserver(
      es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('live'); io.unobserve(e.target); } }),
      { threshold: 0.3 }
    );
    wrapRef.current?.querySelectorAll('.gmx .viz').forEach(v => io.observe(v));
    return () => io.disconnect();
  }, []);

  return (
    <div className="gmx" ref={wrapRef}>
      <div className="hero">
        <p className="lbl">Growth</p>
        <h1>Bring me more<br /><em>customers.</em></h1>
        <p>A stranger finds you, likes you, picks you over the others, and comes back for more. <b>That whole journey — six steps, one team, one number at month end.</b> Miss a step and the rest never happen, so we run all six.</p>

        <div className="journey" ref={journeyRef}>
          <div className="jcap"><span>A stranger</span><span>A regular</span></div>
          <svg className="jsvg" viewBox="0 0 340 476" preserveAspectRatio="xMidYMid meet">
            <path className="wire draw" style={{ ['--L' as string]: 400 }} d="M52,40 L52,436" />
            <path className="wire draw glow" style={{ ['--L' as string]: 640, animationDelay: '.6s' }} d="M52,436 C300,436 300,40 52,40" />
            <path className="pop" style={{ animationDelay: '1.6s' }} d="M52,40 l-6,-13 l14,4 z" fill="#C0532B" />
            <g ref={jnodesRef} />
          </svg>
        </div>

        <div className="team">
          <s>The teams on it</s>
          <div className="row">{GM_TEAM.map(t => <span key={t}>{t}</span>)}</div>
        </div>
      </div>

      <div className="shead">The six steps, in detail</div>
      <div>
        {GM_PARTS.map((p, i) => (
          <section key={i} className="phase">
            <div className="idx"><b>{p.n}</b><s>{p.sp}</s></div>
            <h2 dangerouslySetInnerHTML={{ __html: p.h }} />
            <p className="out">{p.out}</p>
            <div className="viz" dangerouslySetInnerHTML={{ __html: GM_VIZ[p.viz]() }} />
            <p className="who">{p.who}</p>
            <p className="cap" dangerouslySetInnerHTML={{ __html: p.cap }} />
            <div className="stat">
              <b dangerouslySetInnerHTML={{ __html: p.stat + ((p as {statEm?:string}).statEm ? `<em>${(p as {statEm?:string}).statEm}</em>` : '') }} />
              <p>{p.statP}</p>
            </div>
          </section>
        ))}
      </div>

      <div className="bonus">
        <s>Bonus, included</s>
        <h4>Oh — and a little tool, on us.</h4>
        <p>A small tool that watches the journey and flags the step where customers are leaking — so the team fixes the right thing first. <b>Nice to have, not the main event.</b> The work at every step is done by the people above.</p>
      </div>

      <div className="end">
        <div className="big">Six steps. One team.<br /><span>One number.</span></div>
        <p>Six teams, one engagement, one number at month end: more customers — and the whole journey they took to become them. Everyone else hands you a dashboard — <b>we show you the machine, and you can check every step.</b></p>
        <a href="/contact" onClick={onClose}>Run the machine on your business →</a>
        <p className="foot">OARC — one team for the whole business. Malta.</p>
      </div>
    </div>
  );
}

// ── SALES content — exact prototype port, paper/red/navy world ───────────────
// src: CLSOE_MORE_SALES_1786575410251.txt
const SL_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter+Tight:wght@300;400;500;600;700;800&display=swap');
.slx{
  --paper:#FFFFFF;--ink:#16120E;--red:#D2302A;--navy:#152949;--cream:#F4EFE6;
  --i62:rgba(22,18,14,.62);--i42:rgba(22,18,14,.42);--i26:rgba(22,18,14,.26);
  --i14:rgba(22,18,14,.14);--i06:rgba(22,18,14,.05);
  --ui:'Inter Tight',sans-serif;--serif:'Instrument Serif',serif;
  --e:cubic-bezier(.16,1,.3,1);
  background:var(--paper);color:var(--ink);font-family:var(--ui);
  -webkit-font-smoothing:antialiased;overflow-x:hidden}
.slx *{margin:0;padding:0;box-sizing:border-box}
.slx .wrap{max-width:960px;margin:0 auto;padding:0 22px}
.slx .bar{display:flex;justify-content:space-between;align-items:center;padding:16px 22px;max-width:960px;margin:0 auto}
.slx .bar .b{font-weight:800;font-size:14px;letter-spacing:-.03em}
.slx .bar .s{font-size:10px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--i42)}
.slx .hero{padding:2.2rem 0 2.8rem}
.slx .kick{display:inline-block;font-size:11px;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:#fff;background:var(--red);padding:.4rem .7rem;border-radius:3px}
.slx .hero h1{font-size:clamp(2.9rem,11.5vw,6rem);font-weight:800;line-height:.88;letter-spacing:-.055em;margin-top:1.2rem}
.slx .hero h1 em{font-family:var(--serif);font-style:italic;font-weight:400;color:var(--red);letter-spacing:-.02em}
.slx .hero .sub{font-size:clamp(1.08rem,1.9vw,1.32rem);color:var(--i62);line-height:1.55;margin-top:1.4rem;max-width:46ch}
.slx .stats{display:flex;flex-wrap:wrap;gap:1.4rem 2.2rem;margin-top:2.2rem}
.slx .stats .st{position:relative;padding-left:1rem}
.slx .stats .st::before{content:'';position:absolute;left:0;top:.1rem;bottom:.5rem;width:3px;background:var(--red)}
.slx .stats .st b{display:block;font-size:clamp(2.1rem,7.5vw,3rem);font-weight:800;letter-spacing:-.04em;line-height:.85;font-variant-numeric:tabular-nums}
.slx .stats .st b em{font-family:var(--serif);font-style:italic;font-weight:400;font-size:.42em;color:var(--i26)}
.slx .stats .st p{font-size:11.5px;color:var(--i42);line-height:1.35;margin-top:.5rem;max-width:16ch}
.slx .thesis{background:var(--red);color:#fff;border-radius:16px;padding:2.4rem 1.6rem;margin:.5rem 0 2.2rem}
.slx .thesis .lead{font-size:11px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:rgba(255,255,255,.65);margin-bottom:.8rem}
.slx .thesis h2{font-size:clamp(1.7rem,5vw,2.6rem);font-weight:700;letter-spacing:-.035em;line-height:1.04;max-width:22ch}
.slx .thesis h2 em{font-family:var(--serif);font-style:italic;font-weight:400}
.slx .thesis .who{font-size:1rem;color:rgba(255,255,255,.85);line-height:1.6;margin-top:1.2rem;max-width:50ch}
.slx .thesis .count{display:flex;gap:1.6rem;margin-top:1.8rem;padding-top:1.5rem;border-top:1px solid rgba(255,255,255,.22)}
.slx .thesis .count div b{font-family:var(--serif);font-style:italic;font-size:2.6rem;font-weight:400;line-height:1;display:block}
.slx .thesis .count div p{font-size:11px;font-weight:600;letter-spacing:.05em;text-transform:uppercase;color:rgba(255,255,255,.8);margin-top:.4rem}
.slx .roof{font-size:11px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--i42);margin-bottom:.4rem}
.slx .rooftitle{font-size:clamp(1.4rem,4.6vw,2rem);font-weight:700;letter-spacing:-.03em;line-height:1.1;max-width:24ch;margin-bottom:1.4rem}
.slx .rooftitle em{font-family:var(--serif);font-style:italic;font-weight:400;color:var(--red)}
.slx .showcase{padding:2.2rem 0;border-top:1.5px solid var(--ink)}
.slx .chartwrap{background:#FAF8F4;border:1px solid var(--i14);border-radius:14px;padding:1.5rem 1.3rem 1.3rem}
.slx .chart{display:flex;align-items:flex-end;gap:.55rem;height:186px}
.slx .col{flex:1;display:flex;flex-direction:column;justify-content:flex-end;height:100%;text-align:center;min-width:0}
.slx .col .v{font-size:12px;font-weight:800;margin-bottom:.4rem;color:var(--ink);font-variant-numeric:tabular-nums;opacity:0;transform:translateY(6px);transition:opacity .5s var(--e) .6s,transform .5s var(--e) .6s}
.slx .chart.in .col .v{opacity:1;transform:none}
.slx .cbar{width:100%;background:var(--red);border-radius:5px 5px 0 0;height:0;transition:height 1.05s var(--e)}
.slx .chart.in .col .cbar{height:var(--h)}
.slx .col:nth-child(1) .cbar{opacity:1}
.slx .col:nth-child(2) .cbar{opacity:.82}
.slx .col:nth-child(3) .cbar{opacity:.6}
.slx .col:nth-child(4) .cbar{opacity:.42}
.slx .col:nth-child(5) .cbar{opacity:.28}
.slx .col .x{font-size:10px;color:var(--i42);margin-top:.55rem;font-weight:700;letter-spacing:.01em}
.slx .chartcap{font-size:11px;color:var(--i42);line-height:1.4;margin-top:1rem;max-width:52ch}
.slx .chartcap b{color:var(--red);font-weight:700}
.slx .units{padding:.4rem 0 1.4rem}
.slx .unit{border-top:1.5px solid var(--ink);padding:2rem 0}
.slx .unit .hd{display:flex;align-items:flex-start;gap:1rem}
.slx .unit .no{font-family:var(--serif);font-style:italic;font-size:2.3rem;color:var(--red);width:52px;flex-shrink:0;line-height:.8}
.slx .unit .nm{flex:1}
.slx .unit .tag{font-size:9.5px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--navy);border:1px solid var(--i14);border-radius:20px;padding:.32rem .7rem;white-space:nowrap}
.slx .unit h3{font-size:clamp(1.7rem,5.4vw,2.4rem);font-weight:700;letter-spacing:-.04em;line-height:1;margin-top:.5rem}
.slx .unit h3 em{font-family:var(--serif);font-style:italic;font-weight:400;color:var(--red)}
.slx .unit .role{font-size:10px;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:var(--navy);margin-top:.75rem}
.slx .unit .body{font-size:1rem;color:var(--i62);line-height:1.6;margin-top:.7rem;max-width:56ch}
.slx .unit .deliv{display:flex;flex-wrap:wrap;gap:.5rem;margin-top:1.1rem}
.slx .unit .deliv span{font-size:11.5px;font-weight:600;color:var(--ink);background:var(--i06);border-radius:4px;padding:.42rem .72rem}
.slx .unit .proof{margin-top:1.35rem;display:flex;align-items:baseline;gap:.75rem;border-left:3px solid var(--red);padding-left:.95rem}
.slx .unit .proof b{font-size:clamp(2.1rem,8vw,3rem);font-weight:800;letter-spacing:-.04em;line-height:.8;font-variant-numeric:tabular-nums}
.slx .unit .proof b em{font-family:var(--serif);font-style:italic;font-weight:400;font-size:.4em;color:var(--i26)}
.slx .unit .proof p{font-size:12px;color:var(--i42);line-height:1.35;max-width:26ch}
.slx .unit.system{background:var(--navy);color:var(--cream);border-radius:16px;padding:2.2rem 1.6rem;border-top:0;margin:.6rem 0}
.slx .unit.system .no{color:#fff}
.slx .unit.system .tag{color:#fff;border-color:rgba(244,239,230,.32)}
.slx .unit.system h3 em{color:#fff}
.slx .unit.system .role{color:#9FC0EC}
.slx .unit.system .body{color:rgba(244,239,230,.78)}
.slx .unit.system .deliv span{color:var(--cream);background:rgba(244,239,230,.12)}
.slx .unit.system .proof{border-left-color:#fff}
.slx .unit.system .proof b em{color:rgba(244,239,230,.4)}
.slx .unit.system .proof p{color:rgba(244,239,230,.6)}
.slx .unit.system .ip{display:inline-flex;align-items:center;gap:.5rem;margin-top:1.3rem;font-size:10.5px;font-weight:700;letter-spacing:.11em;text-transform:uppercase;color:#9FC0EC}
.slx .unit.system .ip::before{content:'';width:7px;height:7px;border-radius:50%;background:#9FC0EC}
.slx .flow{margin-top:1.5rem;padding-top:1.4rem;border-top:1px solid rgba(244,239,230,.18)}
.slx .flow .flab{font-size:10px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:rgba(244,239,230,.5);margin-bottom:1rem;display:flex;justify-content:space-between}
.slx .flow .flab .live{color:#7FE0A8;display:inline-flex;align-items:center;gap:.4rem}
.slx .flow .flab .live::before{content:'';width:6px;height:6px;border-radius:50%;background:#7FE0A8;animation:slx-blink 1.4s var(--e) infinite}
@keyframes slx-blink{0%,100%{opacity:1}50%{opacity:.25}}
.slx .track{display:flex;align-items:flex-start;gap:.3rem}
.slx .node{flex:1;text-align:center;position:relative}
.slx .node .dot{width:13px;height:13px;border-radius:50%;background:rgba(244,239,230,.22);margin:0 auto .55rem;transition:background .4s var(--e),box-shadow .4s var(--e)}
.slx .node.on .dot{background:#9FC0EC;box-shadow:0 0 0 5px rgba(159,192,236,.18)}
.slx .node .lb{font-size:9.5px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:rgba(244,239,230,.55);line-height:1.25;transition:color .4s}
.slx .node.on .lb{color:var(--cream)}
.slx .node .t{font-family:var(--serif);font-style:italic;font-size:.85rem;color:#9FC0EC;margin-top:.2rem;height:1rem;opacity:0;transition:opacity .4s}
.slx .node.on .t{opacity:1}
.slx .track .seg{flex:0 0 auto;align-self:flex-start;width:14px;height:2px;background:rgba(244,239,230,.2);margin-top:5.5px;border-radius:2px}
.slx .track .seg.on{background:#9FC0EC}
.slx .faq{padding:2.2rem 0;border-top:1.5px solid var(--ink)}
.slx .qa{border-top:1px solid var(--i14);padding:1.4rem 0}
.slx .qa:first-of-type{border-top:0}
.slx .qa h4{font-size:clamp(1.1rem,3.4vw,1.3rem);font-weight:700;letter-spacing:-.02em;line-height:1.25}
.slx .qa p{font-size:.98rem;color:var(--i62);line-height:1.6;margin-top:.6rem;max-width:58ch}
.slx .proof-sec{padding:2.2rem 0;border-top:1.5px solid var(--ink)}
.slx .trow{border-top:1px solid var(--i14);padding:1.2rem 0}
.slx .trow:first-of-type{border-top:0}
.slx .trow .tlab{font-size:10px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--navy);display:block;margin-bottom:.5rem}
.slx .trow .tba{display:flex;align-items:center;gap:.7rem;flex-wrap:wrap}
.slx .trow .before{font-size:1rem;color:var(--i42);text-decoration:line-through;text-decoration-color:var(--i26)}
.slx .trow .arrow{color:var(--red);font-weight:800;font-size:1.1rem}
.slx .trow .after{font-size:1.08rem;font-weight:700;color:var(--ink);letter-spacing:-.01em}
.slx .tcap{font-size:11.5px;color:var(--i42);line-height:1.45;margin-top:1.2rem;max-width:50ch}
.slx .tcap b{color:var(--red);font-weight:700}
.slx .guar{background:var(--ink);color:var(--cream);border-radius:16px;padding:2.4rem 1.6rem;margin:2.2rem 0}
.slx .guar .g-eye{font-size:11px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#F0857E}
.slx .guar .g-big{font-size:clamp(1.8rem,5.6vw,2.7rem);font-weight:700;letter-spacing:-.035em;line-height:1.1;margin-top:1rem;max-width:20ch}
.slx .guar .g-big em{font-family:var(--serif);font-style:italic;font-weight:400;color:#fff}
.slx .guar .g-sub{font-size:1rem;color:rgba(244,239,230,.8);line-height:1.6;margin-top:1.2rem;max-width:52ch}
.slx .guar .g-sig{font-family:var(--serif);font-style:italic;font-size:1.15rem;color:#9FC0EC;margin-top:1.4rem}
.slx .step{display:flex;gap:1rem;border-top:1px solid var(--i14);padding:1.2rem 0}
.slx .step:first-of-type{border-top:0}
.slx .step .sn{font-family:var(--serif);font-style:italic;font-size:1.6rem;color:var(--red);width:40px;flex-shrink:0;line-height:1}
.slx .step .sc h4{font-size:1.12rem;font-weight:700;letter-spacing:-.02em}
.slx .step .sc p{font-size:.96rem;color:var(--i62);line-height:1.55;margin-top:.3rem;max-width:52ch}
.slx .ident{font-size:1rem;color:var(--i62);line-height:1.6;margin:1.6rem 0 0;max-width:50ch}
.slx .ident b{color:var(--ink);font-weight:700}
.slx .end .big{margin-top:2rem}
.slx .end{padding:2.4rem 0 calc(3rem + env(safe-area-inset-bottom));border-top:1.5px solid var(--ink)}
.slx .end .big{font-size:clamp(2.2rem,9vw,3.6rem);font-weight:800;letter-spacing:-.045em;line-height:.95}
.slx .end .big em{font-family:var(--serif);font-style:italic;font-weight:400;color:var(--red)}
.slx .end p{font-size:clamp(1.05rem,1.9vw,1.3rem);color:var(--i62);line-height:1.45;margin-top:1.1rem;max-width:34ch}
.slx .end a{display:inline-flex;align-items:center;gap:.6rem;margin-top:1.6rem;font-size:12px;font-weight:700;letter-spacing:.13em;text-transform:uppercase;color:#fff;background:var(--navy);text-decoration:none;padding:1.1rem 1.8rem;border-radius:4px;transition:gap .3s var(--e),background .3s}
.slx .end a:hover{gap:1rem;background:var(--red)}
.slx .reveal{opacity:0;transform:translateY(20px);transition:opacity .7s var(--e),transform .7s var(--e)}
.slx .reveal.in{opacity:1;transform:none}
@media(prefers-reduced-motion:reduce){.slx .reveal,.slx .col .v{opacity:1;transform:none}.slx .cbar{transition:none}}
`;

const SL_UNITS = [
  { no:'i', tag:'Strategy', system:false,
    h:'We set the <em>play</em>.',
    role:'Strategists · revenue operators',
    body:'We map how your leads actually move and find where deals stall and die. Then we set the play: your offer, your pricing, your follow-up cadence, your qualifying criteria, and the one number everything is accountable to. Nothing else gets built until the strategy is right.',
    deliv:['Pipeline audit','Offer & pricing','Qualifying criteria','Follow-up cadence'],
    proof:'30', proofEm:'%', proofP:'of leads are never contacted \u2014 the first leak we close' },
  { no:'ii', tag:'Creative · Content · Social', system:false,
    h:'We make what <em>sells</em>.',
    role:'Writers · designers · social',
    body:'Two kinds of content, both aimed at revenue. The assets that close a live deal \u2014 pitch, proof, case studies, objection-handling. And, when your buyers live on social, we run it as a sales channel: founder storytelling, sales skits and reels, proof content and DM-to-close flows. Not content chasing followers \u2014 content measured in booked calls.',
    deliv:['Founder storytelling','Sales skits & reels','Social that sells','Proof & case studies','DM-to-close flows'],
    proof:'49', proofEm:'%', proofP:'of sales lift comes from creative, not targeting (Nielsen)' },
  { no:'iii', tag:'Brand', system:false,
    h:'We make you the <em>safe choice</em>.',
    role:'Brand · positioning',
    body:'People buy the business they trust, not the cheapest quote. We sharpen how you show up across every point a buyer checks you \u2014 so you read as the premium, obvious choice and stop competing on price. A strong brand lets you charge more and close faster.',
    deliv:['Positioning','Trust signals','Reviews & proof','Premium presentation'],
    proof:'20', proofEm:'%', proofP:'higher performance for strongly-branded firms (McKinsey)' },
  { no:'iv', tag:'AI & Tech', system:true,
    h:'We build you <em>one system</em>.',
    role:'The one built thing · engineering',
    body:'The single piece of technology in the engagement \u2014 built for your sales, then handed to you. It catches every enquiry, answers in seconds any hour, qualifies against your criteria, and books straight into the calendar. Voice and chat agents included. You own it outright, in your full IP control \u2014 we build it, you keep it.',
    deliv:['Lead capture & routing','Instant qualify & book','Voice + chat agents','Yours to keep \u2014 full IP'],
    proof:'67', proofEm:'%', proofP:'booked with instant reply, versus 30% (Chili Piper, 4M)',
    ip:'Built for you · handed to you · your IP', flow:true },
  { no:'v', tag:'Enablement', system:false,
    h:'We keep it <em>running</em>.',
    role:'Training · recovery',
    body:'We train your team on the play, run the cadence, and work every stalled lead again on a trigger \u2014 win-backs and sequences that do not quit after one try. The follow-through is where most sales are quietly lost, so this is where we find quiet money.',
    deliv:['Team training','Cadence management','Stalled-lead recovery','Monthly reporting'],
    proof:'2.3', proofEm:'\u00d7', proofP:'more closed when stalled leads are properly revived' },
];

const SL_FLOW = ['Enquiry in','Answered','Qualified','Booked'];
const SL_FLOWT = ['','0:04','','\u2713'];
const SL_BARS = [
  { v:'100%', h:'100%', x:'5 min' },
  { v:'40%',  h:'40%',  x:'10 min' },
  { v:'5%',   h:'12%',  x:'30 min' },
  { v:'2%',   h:'6%',   x:'1 hr' },
  { v:'<1%',  h:'3%',   x:'24 hr' },
];
const SL_FAQS = [
  { q:"How do you increase a company's sales?", a:"We run the whole sale as one team: fix where leads leak, make the content that closes, build the trust that wins the deal, and install one system that answers and books every enquiry instantly. Most of the gain comes from replying faster, following up longer, and closing with better proof — not from buying another tool." },
  { q:"Why aren't my leads converting?", a:"Usually speed and follow-up. Around 30% of leads are never contacted at all, and the odds of qualifying a lead drop sharply after the first five minutes. Answer instantly, follow up on a set cadence, and close with proof, and conversion climbs without spending more on traffic." },
  { q:"Do I own the system you build?", a:"Yes, completely. We build your lead-capture, qualifying, booking and voice-or-chat system for your business and hand it over in your full IP control. If we ever part ways, you keep it." },
  { q:"Is this software or an agency?", a:"An agency. Four teams of people — strategy, creative, brand and enablement — plus one system you own. A tool can route a lead, but it can't set your pricing, write what closes, or build trust. That takes people." },
];
const SL_PROOF = [
  { lab:'Every enquiry', before:'1 in 3 answered, hours late', after:'all of them, in seconds' },
  { lab:'Your content & social', before:'posts chasing likes', after:'stories that book calls' },
  { lab:'Your brand', before:'just another quote', after:'the obvious, premium choice' },
];
const SL_STEPS = [
  { n:'01', h:'Audit', p:'We map your pipeline and find where the leads leak — usually inside the first week.' },
  { n:'02', h:'Build', p:"We set the play, make the brand, story and content, and build the system you'll own." },
  { n:'03', h:'Run', p:'We run it as one team, report on the one number, and revive every deal that stalls.' },
];

function SalesContent({ onClose }: { onClose: () => void }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);
  const [pipeStep, setPipeStep] = useState(0);

  useEffect(() => {
    const id = 'slx-modal-css';
    if (!document.getElementById(id)) {
      const s = document.createElement('style');
      s.id = id; s.textContent = SL_CSS;
      document.head.appendChild(s);
    }
  }, []);

  // reveal
  useEffect(() => {
    const io = new IntersectionObserver(
      es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }),
      { threshold: 0.14 }
    );
    wrapRef.current?.querySelectorAll('.reveal').forEach(n => io.observe(n));
    return () => io.disconnect();
  }, []);

  // chart animate on view
  useEffect(() => {
    const el = chartRef.current; if (!el) return;
    const cio = new IntersectionObserver(
      es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); cio.unobserve(en.target); } }),
      { threshold: 0.3 }
    );
    cio.observe(el);
    return () => cio.disconnect();
  }, []);

  // live pipeline loop
  useEffect(() => {
    const reduce = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { setPipeStep(SL_FLOW.length); return; }
    const id = setInterval(() => setPipeStep(i => (i + 1) % (SL_FLOW.length + 1)), 820);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="slx" ref={wrapRef}>
      <div className="bar"><span className="b">OARC</span><span className="s">Close more sales</span></div>

      <div className="wrap">
        <section className="hero">
          <span className="kick">The sales engagement</span>
          <h1>We don&apos;t sell you<br />software. <em>We run<br />your sales.</em></h1>
          <p className="sub">One team that owns the whole sale — the strategy, the content that closes, how you show up, and one system you keep. Everything your sales needs, pointed at one number: revenue.</p>
          <div className="stats">
            <div className="st"><b>78<em>%</em></b><p>of buyers choose whoever answers first</p></div>
            <div className="st"><b>21<em>×</em></b><p>more likely to qualify at 5 minutes than 30</p></div>
            <div className="st"><b>30<em>%</em></b><p>of leads today are never contacted at all</p></div>
          </div>
        </section>

        <section className="thesis reveal">
          <p className="lead">How the engagement works</p>
          <h2>Most of closing more is <em>strategy and craft</em> — not a tool.</h2>
          <p className="who">A tool routes a lead; it doesn&apos;t decide what you say, how you&apos;re priced, why they trust you, or what happens when they go quiet. You don&apos;t stitch together five vendors for that. You get one team that owns the whole sale — and one system we build and hand you.</p>
          <div className="count">
            <div><b>1</b><p>team,<br />end to end</p></div>
            <div><b>0</b><p>vendors<br />to juggle</p></div>
          </div>
        </section>

        <section className="showcase reveal">
          <p className="roof">Why speed is the whole game</p>
          <div className="rooftitle">How likely a lead is to qualify, <em>by how fast you reply.</em></div>
          <div className="chartwrap">
            <div className="chart" ref={chartRef}>
              {SL_BARS.map((b, k) => (
                <div className="col" key={k}>
                  <span className="v">{b.v}</span>
                  <div className="cbar" style={{ ['--h' as string]: b.h }} />
                  <span className="x">{b.x}</span>
                </div>
              ))}
            </div>
            <p className="chartcap"><b>Reply in 5 minutes and you&apos;re 21× more likely to qualify the lead than at 30.</b> Relative odds by first-response time, based on lead-response research. Our job is to make sure you&apos;re always the 5-minute reply.</p>
          </div>
        </section>

        <section className="units">
          <p className="roof reveal">What that one team covers</p>
          <div className="rooftitle reveal">Five ways we lift the number — <em>run as one.</em></div>
          <div>
            {SL_UNITS.map((d, i) => (
              <div key={i} className={`unit reveal${d.system ? ' system' : ''}`}>
                <div className="hd">
                  <span className="no">{d.no}</span>
                  <div className="nm">
                    <span className="tag">{d.tag}</span>
                    <h3 dangerouslySetInnerHTML={{ __html: d.h }} />
                  </div>
                </div>
                <p className="role">{d.role}</p>
                <p className="body">{d.body}</p>
                <div className="deliv">{d.deliv.map((x, j) => <span key={j}>{x}</span>)}</div>
                {d.ip && <span className="ip">{d.ip}</span>}
                <div className="proof">
                  <b dangerouslySetInnerHTML={{ __html: d.proof + (d.proofEm ? `<em>${d.proofEm}</em>` : '') }} />
                  <p>{d.proofP}</p>
                </div>
                {d.flow && (
                  <div className="flow">
                    <div className="flab"><span>How your system runs, 24/7</span><span className="live">Live</span></div>
                    <div className="track">
                      {SL_FLOW.flatMap((label, k) => {
                        const node = (
                          <div key={label} className={`node${pipeStep > k ? ' on' : ''}`}>
                            <div className="dot" />
                            <div className="lb">{label}</div>
                            <div className="t">{SL_FLOWT[k]}</div>
                          </div>
                        );
                        if (k < SL_FLOW.length - 1) {
                          return [node, <div key={`seg-${k}`} className={`seg${pipeStep > k + 1 ? ' on' : ''}`} />];
                        }
                        return [node];
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="proof-sec reveal">
          <p className="roof">What changes when we run it</p>
          <div className="rooftitle">The <em>before</em> and after.</div>
          {SL_PROOF.map((row, k) => (
            <div className="trow" key={k}>
              <span className="tlab">{row.lab}</span>
              <div className="tba">
                <span className="before">{row.before}</span>
                <span className="arrow">→</span>
                <span className="after">{row.after}</span>
              </div>
            </div>
          ))}
          <p className="tcap"><b>A typical first 90 days:</b> booked calls up, no extra ad spend — the story, the brand and the system pulling in the same direction. Illustrative of a full engagement.</p>
        </section>

        <section className="guar reveal">
          <p className="g-eye">Our guarantee</p>
          <div className="g-big">If your booked calls don&apos;t climb in 90 days, <em>we work free until they do.</em></div>
          <p className="g-sub">We&apos;re a sales company — refusing to stand behind sales would be a tell. So we tie our retainer to your pipeline, not to hours. You carry none of the risk of trying us.</p>
          <div className="g-sig">— OARC, your one team</div>
        </section>

        <section className="faq reveal">
          <p className="roof">Straight answers</p>
          <div className="rooftitle">The questions every owner <em>actually asks.</em></div>
          {SL_FAQS.map((f, k) => (
            <div className="qa" key={k}><h4>{f.q}</h4><p>{f.a}</p></div>
          ))}
        </section>

        <section className="end reveal">
          <p className="roof">How we start</p>
          <div className="start">
            {SL_STEPS.map((s, k) => (
              <div className="step" key={k}>
                <span className="sn">{s.n}</span>
                <div className="sc"><h4>{s.h}</h4><p>{s.p}</p></div>
              </div>
            ))}
          </div>
          <p className="ident">At the end of the day we&apos;re a <b>creative and AI software agency</b> — so your sales get brand, storytelling, social and a system you keep. Not spreadsheets.</p>
          <div className="big">One team.<br /><em>The whole sale.</em></div>
          <p>You keep the system, the playbook, and the pipeline. We keep you closing.</p>
          <a href="/contact" onClick={onClose}>Book the sales audit →</a>
        </section>
      </div>
    </div>
  );
}

// ── MEDIA content — exact prototype port, amber world ────────────────────────
const MM_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Chivo:wght@400;500;700;900&family=DM+Mono:ital,wght@0,400;0,500;1,400&display=swap');
.mm{
  --ink:#0C0F16;--deep:#080A0F;--card:#12151E;--c:#F0EBE2;--am:#F6A61C;--dim:#7C8598;
  --c70:rgba(240,235,226,.72);--c45:rgba(240,235,226,.46);--c26:rgba(240,235,226,.26);
  --c16:rgba(240,235,226,.16);--c10:rgba(240,235,226,.1);
  --amg:rgba(246,166,28,.5);--amf:rgba(246,166,28,.12);
  --line:rgba(240,235,226,.12);
  --ui:'Chivo',sans-serif;--mono:'DM Mono',monospace;
  --e:cubic-bezier(.16,1,.3,1);
  background:var(--ink);color:var(--c);font-family:var(--ui);
  -webkit-font-smoothing:antialiased;overflow-x:hidden
}
.mm .lbl{font-family:var(--mono);font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--am)}
.mm h1{font-size:clamp(2.3rem,9.2vw,3.4rem);font-weight:900;line-height:.98;letter-spacing:-.04em;margin-top:.7rem}
.mm h1 em{font-style:normal;color:var(--am)}
.mm .desc{font-size:.97rem;color:var(--c70);line-height:1.55;margin-top:1rem;max-width:43ch}
.mm .desc b{color:var(--c);font-weight:700}
.mm .board{margin-top:2rem;border:1px solid var(--line);border-radius:14px;background:var(--card);overflow:hidden;box-shadow:0 20px 50px rgba(0,0,0,.35)}
.mm .bhead{display:flex;justify-content:space-between;align-items:center;padding:.85rem 1.1rem;border-bottom:1px solid var(--line);background:rgba(240,235,226,.02)}
.mm .bhead b{font-size:12px;font-weight:700}
.mm .bhead s{font-family:var(--mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--c45);font-style:normal}
.mm .brow{display:flex;justify-content:space-between;align-items:center;padding:.85rem 1.1rem;border-bottom:1px solid var(--line);opacity:0;transform:translateY(8px);transition:.55s var(--e)}
.mm .brow:last-child{border-bottom:0}
.mm .board.go .brow{opacity:1;transform:none}
.mm .bch{font-family:var(--mono);font-size:12.5px;color:var(--c)}
.mm .bv{font-family:var(--mono);font-size:11px;font-weight:500;letter-spacing:.02em;padding:5px 10px;border-radius:5px;white-space:nowrap}
.mm .bv.on{color:var(--am);background:var(--amf);border:1px solid rgba(246,166,28,.4)}
.mm .bv.off{color:var(--dim);background:rgba(124,133,152,.08);border:1px solid var(--line)}
.mm .team{margin-top:1.7rem}
.mm .team s{font-family:var(--mono);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--c45);font-style:normal}
.mm .team .chips{display:flex;flex-wrap:wrap;gap:6px;margin-top:.7rem}
.mm .team .chips span{border:1px solid var(--line);padding:6px 10px;font-size:11px;color:var(--c70);border-radius:2px}
.mm .pass{margin:1.5rem 20px 0;border:1px solid rgba(246,166,28,.4);border-radius:12px;background:linear-gradient(180deg,rgba(246,166,28,.08),transparent);padding:1.4rem}
.mm .pass s{font-family:var(--mono);font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--am);font-style:normal}
.mm .pass h3{font-size:1.5rem;font-weight:900;letter-spacing:-.03em;margin:.4rem 0 .5rem}
.mm .pass p{font-size:.9rem;color:var(--c70);line-height:1.55}
.mm .pass p b{color:var(--c);font-weight:700}
.mm .pass .big{font-family:var(--mono);font-size:2.4rem;font-weight:500;color:var(--am);letter-spacing:-.03em;margin-top:.6rem;display:block}
.mm .shead{padding:1.7rem 20px .4rem;font-family:var(--mono);font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--c45);display:flex;align-items:center;gap:.8rem}
.mm .shead::after{content:'';flex:1;height:1px;background:var(--line)}
.mm .phase{padding:1.8rem 20px 2rem;border-top:1px solid var(--line)}
.mm .phase .idx{display:flex;align-items:baseline;gap:.6rem}
.mm .phase .idx b{font-family:var(--mono);font-size:11px;font-weight:500;letter-spacing:.06em;color:var(--am)}
.mm .phase .idx s{font-family:var(--mono);font-size:10.5px;letter-spacing:.08em;text-transform:uppercase;color:var(--c45);font-style:normal}
.mm .phase h2{font-size:clamp(2rem,8.2vw,2.6rem);font-weight:900;line-height:1;letter-spacing:-.035em;margin-top:1rem}
.mm .phase h2 em{font-style:normal;color:var(--am)}
.mm .phase .out{font-size:clamp(1.3rem,5.2vw,1.6rem);color:var(--c);margin-top:.9rem;line-height:1.2;font-weight:500}
.mm .viz{margin-top:1.5rem;border:1px solid var(--line);border-radius:10px;background:var(--deep);position:relative;overflow:hidden;aspect-ratio:1/.78}
.mm .viz::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle at 1px 1px,rgba(240,235,226,.05) 1px,transparent 0);background-size:22px 22px;mask-image:radial-gradient(130% 100% at 50% 45%,#000 45%,transparent 85%)}
.mm .viz svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
.mm .who{margin-top:1rem;display:flex;align-items:center;gap:8px;font-family:var(--mono);font-size:11px;letter-spacing:.02em;color:var(--am)}
.mm .who::before{content:'';width:16px;height:1px;background:var(--am);opacity:.5}
.mm .cap{margin-top:.7rem;font-size:.9rem;color:var(--c70);line-height:1.55}
.mm .cap b{color:var(--c);font-weight:700}
.mm .stat{margin-top:1.1rem;display:flex;align-items:baseline;gap:.7rem;padding-top:1rem;border-top:1px solid var(--line)}
.mm .stat b{font-family:var(--mono);font-size:clamp(2.1rem,9.5vw,2.8rem);font-weight:500;letter-spacing:-.03em;line-height:.9}
.mm .stat b em{font-style:normal;font-size:.5em;color:var(--am)}
.mm .stat p{font-size:11.5px;color:var(--c45);line-height:1.35;max-width:26ch}
.mm .bonus{margin:0 20px;padding:1.3rem 1.4rem;border:1px dashed var(--line);border-radius:10px;background:rgba(240,235,226,.02)}
.mm .bonus s{font-family:var(--mono);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--c45);font-style:normal}
.mm .bonus h4{font-size:1.15rem;font-weight:700;margin:.5rem 0 .5rem;letter-spacing:-.02em}
.mm .bonus p{font-size:.88rem;color:var(--c70);line-height:1.55}
.mm .bonus p b{color:var(--c);font-weight:700}
.mm .end{padding:2.2rem 20px calc(2.4rem + env(safe-area-inset-bottom));border-top:1px solid var(--line);margin-top:1.7rem}
.mm .end .big{font-size:clamp(2.6rem,11vw,3.7rem);font-weight:900;line-height:1;letter-spacing:-.04em}
.mm .end .big span{color:var(--am)}
.mm .end > p{font-size:.95rem;color:var(--c70);line-height:1.6;max-width:44ch;margin-top:1rem}
.mm .end > p b{color:var(--c);font-weight:700}
.mm .end a{display:block;margin-top:1.4rem;text-align:center;font-family:var(--mono);font-size:12px;font-weight:500;letter-spacing:.06em;text-transform:uppercase;color:var(--ink);background:var(--am);text-decoration:none;padding:1.15rem;border-radius:6px}
.mm .end .foot{font-family:var(--mono);font-size:10.5px;color:var(--c26);letter-spacing:.04em;margin-top:1.4rem}
.mm .wire{stroke:rgba(240,235,226,.16);stroke-width:1.25;fill:none}
.mm .node{fill:rgba(240,235,226,.16)}
.mm .nodeOn{fill:#F6A61C}
.mm .bad{fill:#7C8598}
.mm .ring{fill:none;stroke:#F6A61C;stroke-width:1.5}
.mm .lab{font-family:'DM Mono';font-weight:400;fill:rgba(240,235,226,.7)}
.mm .labA{font-family:'DM Mono';font-weight:500;fill:#F6A61C}
.mm .labk{font-family:'DM Mono';font-weight:500;fill:#0C0F16}
.mm .glow{filter:drop-shadow(0 0 8px rgba(246,166,28,.5))}
.mm .draw{stroke-dasharray:var(--L,240);stroke-dashoffset:var(--L,240)}
.mm .viz.live .draw{animation:mm-draw 1.1s var(--e) forwards}
@keyframes mm-draw{to{stroke-dashoffset:0}}
.mm .pop{opacity:0;transform:scale(.4);transform-origin:center}
.mm .viz.live .pop{animation:mm-pop .5s var(--e) forwards}
@keyframes mm-pop{to{opacity:1;transform:scale(1)}}
.mm .up{opacity:0}
.mm .viz.live .up{animation:mm-up .6s var(--e) forwards}
@keyframes mm-up{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}
.mm .grow{transform:scaleY(0);transform-origin:50% 100%}
.mm .viz.live .grow{animation:mm-grw .75s var(--e) forwards}
@keyframes mm-grw{to{transform:scaleY(1)}}
.mm .growd{transform:scaleY(0);transform-origin:50% 0}
.mm .viz.live .growd{animation:mm-grw .75s var(--e) forwards}
.mm .growx{transform:scaleX(0);transform-origin:left center}
.mm .viz.live .growx{animation:mm-grwx .9s var(--e) forwards}
@keyframes mm-grwx{to{transform:scaleX(1)}}
@media(prefers-reduced-motion:reduce){.mm *{animation:none!important;transition-duration:.01ms!important}.mm .up,.mm .pop,.mm .brow{opacity:1;transform:none}.mm .draw{stroke-dashoffset:0}.mm .grow,.mm .growd,.mm .growx{transform:none}}
`;

const MM_AM = '#F6A61C';
const MM_INK = '#0C0F16';

const MM_VIZ: Record<string, () => string> = {
  allocate: () => {
    const ch = [{l:'Meta',v:.9},{l:'Google',v:.72},{l:'TikTok',v:.5},{l:'YouTube',v:.34},{l:'OOH',v:.2}];
    let s = '';
    ch.forEach((c, i) => {
      const y = 28 + i * 40;
      s += `<text class="lab up" x="88" y="${y+16}" font-size="12" text-anchor="end" style="animation-delay:${i*.1}s">${c.l}</text>`;
      s += `<rect class="nodeOn glow growx" x="100" y="${y}" width="${250*c.v}" height="22" rx="4" style="animation-delay:${i*.1+.1}s"/>`;
    });
    s += `<text class="labA up" x="100" y="238" font-size="10.5" style="animation-delay:.7s">budget follows the return</text>`;
    return `<svg viewBox="0 0 400 250">${s}</svg>`;
  },
  lever: () => {
    let s = `<text class="lab up" x="110" y="30" font-size="10.5" text-anchor="middle" opacity=".6" style="animation-delay:.2s">same spend</text>`;
    s += `<text class="lab up" x="290" y="30" font-size="10.5" text-anchor="middle" opacity=".6" style="animation-delay:.2s">same spend</text>`;
    s += `<rect class="wire up" x="50" y="46" width="120" height="80" rx="8" style="animation-delay:.2s"/>`;
    s += `<text class="lab up" x="110" y="92" font-size="11" text-anchor="middle" style="animation-delay:.3s">weak ad</text>`;
    s += `<rect class="ring glow up" x="230" y="46" width="120" height="80" rx="8" style="animation-delay:.4s"/>`;
    s += `<text class="labA up" x="290" y="92" font-size="11" text-anchor="middle" style="animation-delay:.5s">better ad</text>`;
    s += `<line class="wire" x1="40" y1="230" x2="366" y2="230"/>`;
    s += `<rect class="node grow" x="86" y="196" width="48" height="34" rx="3" style="animation-delay:.6s"/>`;
    s += `<text class="lab up" x="110" y="250" font-size="10" text-anchor="middle" opacity=".55" style="animation-delay:.7s">return</text>`;
    s += `<rect class="nodeOn glow grow" x="266" y="150" width="48" height="80" rx="3" style="animation-delay:.9s"/>`;
    s += `<text class="labA up" x="290" y="250" font-size="10" text-anchor="middle" style="animation-delay:1s">return</text>`;
    return `<svg viewBox="0 0 400 260">${s}</svg>`;
  },
  flights: () => {
    const win = [2, 4, 7]; let s = '';
    for (let i = 0; i < 9; i++) {
      const x = 44 + (i % 3) * 116, y = 30 + Math.floor(i / 3) * 74, on = win.includes(i);
      s += `<rect class="${on ? 'nodeOn glow' : 'node'} pop" x="${x}" y="${y}" width="96" height="56" rx="6" style="animation-delay:${i*.07}s"/>`;
      if (on) s += `<path class="draw" style="--L:22;animation-delay:${.7+i*.07}s" d="M${x+40},${y+28} l6,7 l12,-14" stroke="${MM_INK}" stroke-width="2.4" fill="none" stroke-linecap="round"/>`;
    }
    s += `<text class="labA up" x="200" y="270" font-size="10.5" text-anchor="middle" style="animation-delay:.9s">the winners, found fast</text>`;
    return `<svg viewBox="0 0 400 284">${s}</svg>`;
  },
  loop: () => {
    const bars = [84, 66, 44, -30, -46], on = [1, 1, 1, 0, 0], mid = 138, x0 = 58, bw = 44, gap = 24;
    let s = `<line class="wire" x1="30" y1="${mid}" x2="370" y2="${mid}" stroke-dasharray="4 4"/>`;
    s += `<text class="lab" x="34" y="${mid-7}" font-size="9.5" opacity=".5">break-even</text>`;
    bars.forEach((hh, i) => {
      const x = x0 + i * (bw + gap), h = Math.abs(hh), up = hh > 0, y = up ? mid - h : mid;
      s += `<rect class="${on[i] ? 'nodeOn glow' : 'bad'} ${up ? 'grow' : 'growd'}" x="${x}" y="${y}" width="${bw}" height="${h}" rx="4" style="animation-delay:${i*.12}s"/>`;
    });
    s += `<text class="labA up" x="102" y="${mid-102}" font-size="10.5" text-anchor="middle" style="animation-delay:.6s">scale</text>`;
    s += `<text class="lab up" x="320" y="${mid+64}" font-size="10.5" text-anchor="middle" opacity=".6" style="animation-delay:.8s">kill</text>`;
    return `<svg viewBox="0 0 400 256">${s}</svg>`;
  },
  revenue: () => {
    const cy = 112; let s = '';
    s += `<circle class="ring glow pop" cx="80" cy="${cy}" r="30" style="animation-delay:.2s"/>`;
    s += `<text class="labA pop" x="80" y="${cy+6}" font-size="16" text-anchor="middle" style="animation-delay:.35s">€</text>`;
    s += `<text class="lab up" x="80" y="${cy+52}" font-size="10.5" text-anchor="middle" opacity=".6" style="animation-delay:.4s">spend</text>`;
    s += `<path class="wire draw glow" style="--L:150;animation-delay:.5s" d="M116,${cy} L284,${cy}"/>`;
    s += `<path class="pop" style="animation-delay:1.3s" d="M284,${cy-6} l10,6 l-10,6 z" fill="${MM_AM}"/>`;
    s += `<circle class="nodeOn glow pop" cx="320" cy="${cy}" r="34" style="animation-delay:1s"/>`;
    s += `<text class="labk pop" x="320" y="${cy+6}" font-size="18" text-anchor="middle" style="animation-delay:1.15s">€+</text>`;
    s += `<text class="labA up" x="320" y="${cy+56}" font-size="10.5" text-anchor="middle" style="animation-delay:1.1s">revenue</text>`;
    s += `<text class="lab up" x="200" y="40" font-size="10.5" text-anchor="middle" opacity=".55" style="animation-delay:.3s">measured on sales, not clicks</text>`;
    return `<svg viewBox="0 0 400 220">${s}</svg>`;
  },
};

const MM_PARTS = [
  { n:'01', sp:'Where it pays', h:'We put money where it <em>pays.</em>', out:'Every euro where the return is.',
    who:'Media strategists',
    cap:'We put your budget where it actually returns — not where it\'s habit. Meta, Google, TikTok, YouTube, out-of-home: the mix follows the money. The restaurant fills tables with local video, the shop drives orders with shopping ads, the clinic books with search — and <b>every euro of that budget goes to the platform, never to us.</b>',
    stat:'5', statEm:'×', statP:'the gap between your best and worst channel — we find it and shift the money', viz:'allocate' },
  { n:'02', sp:'Creative is the lever', h:'The ad is the <em>lever.</em>', out:'The ad decides — so we build it.',
    who:'Ad creatives',
    cap:'Targeting barely moves the needle anymore — the ad itself decides whether the money works. Our creatives build the video and the hook, because that\'s the real lever now. <b>Same spend, a better ad, a completely different return.</b>',
    stat:'50', statEm:'%', statP:'of what an ad returns comes down to the creative — so we make it, not just buy space', viz:'lever' },
  { n:'03', sp:'Flighted testing', h:'We fly tests, not <em>bets.</em>', out:'Many small tests, fast winners.',
    who:'Media buyers',
    cap:'We don\'t bet the budget on one idea. We launch in flights — many small, cheap tests — and let the market pick the winner. <b>Only about one in ten ads ever scales, so we find that one fast, before the money\'s gone.</b>',
    stat:'10', statEm:undefined as string|undefined, statP:'ads tested for every winner — we fly many, cheap, and find it early', viz:'flights' },
  { n:'04', sp:'The loop', h:'Scale winners. <em>Kill losers.</em>', out:'More of what works, none of what doesn\'t.',
    who:'Media buyers · Analysts',
    cap:'The moment an ad tires or its cost climbs, we cut it — kill-rules, not opinions — and pour budget into what\'s working. <b>That loop, run every week, is what lifts the return month after month.</b>',
    stat:'25-40', statEm:'%', statP:'more return over six months, from scaling only what wins', viz:'loop' },
  { n:'05', sp:'Measured on money', h:'We prove it in <em>revenue.</em>', out:'Return in euros, not clicks.',
    who:'Analysts',
    cap:'We tie spend to real sales — not clicks or likes. You see revenue back per euro, the only number that decides whether media is working. <b>Vanity metrics stay off your report.</b>',
    stat:'1', statEm:undefined as string|undefined, statP:'number that matters: revenue back per euro spent — and you can check it', viz:'revenue' },
];

function MediaContent({ onClose }: { onClose: () => void }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const boardRef = useRef<HTMLDivElement>(null);
  const MM_BOARD: [string, string, boolean][] = [
    ['Meta video', '↑ 3.4×', true],
    ['Google Search', '↑ 2.8×', true],
    ['TikTok', '↑ 2.1×', false],
    ['Boosted posts', '↓ 0.6×', false],
  ];

  useEffect(() => {
    const id = 'mm-modal-css';
    if (!document.getElementById(id)) {
      const s = document.createElement('style');
      s.id = id; s.textContent = MM_CSS;
      document.head.appendChild(s);
    }
  }, []);

  useEffect(() => {
    const b = boardRef.current; if (!b) return;
    const t = setTimeout(() => b.classList.add('go'), 150);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('live'); io.unobserve(e.target); } }),
      { threshold: 0.3 }
    );
    wrapRef.current?.querySelectorAll('.mm .viz').forEach(v => io.observe(v));
    return () => io.disconnect();
  }, []);

  return (
    <div className="mm" ref={wrapRef}>
      <div style={{ padding:"1.8rem 20px 2.2rem", borderBottom:"1px solid var(--line)" }}>
        <p className="lbl">Marketing and media</p>
        <h1>We make your money<br /><em>come back with more.</em></h1>
        <p className="desc">The right channels, the right creative, tested in flights and scaled only when they win — and <b>every euro of ad spend goes to the platforms, never to us.</b> Media that pays for itself, run by one team.</p>

        <div className="board" ref={boardRef}>
          <div className="bhead"><b>Where your money works</b><s>return</s></div>
          {MM_BOARD.map(([ch, v, on], i) => (
            <div key={i} className="brow" style={{ transitionDelay:`${.15+i*.13}s` }}>
              <span className="bch">{ch}</span>
              <span className={`bv ${on ? 'on' : 'off'}`}>{v}</span>
            </div>
          ))}
        </div>

        <div className="team">
          <s>The people on it</s>
          <div className="chips">
            {['Media strategists','Ad creatives','Media buyers','Analysts'].map(t => <span key={t}>{t}</span>)}
          </div>
        </div>
      </div>

      <div className="pass">
        <s>The part other agencies hide</s>
        <h3>Your budget is yours.</h3>
        <p><b>100% of your ad spend goes to the platforms — we never take a cut of it.</b> We're paid for the work: the strategy, the creative, the buying. Not your media money.</p>
        <span className="big">100% → platforms</span>
      </div>

      <div className="shead">How the money is run</div>

      <div>
        {MM_PARTS.map((p, i) => (
          <div key={i} className="phase">
            <div className="idx"><b>{p.n}</b><s>{p.sp}</s></div>
            <h2 dangerouslySetInnerHTML={{ __html: p.h }} />
            <p className="out">{p.out}</p>
            <div className="viz" dangerouslySetInnerHTML={{ __html: MM_VIZ[p.viz]() }} />
            <p className="who">{p.who}</p>
            <p className="cap" dangerouslySetInnerHTML={{ __html: p.cap }} />
            <div className="stat">
              <b dangerouslySetInnerHTML={{ __html: p.stat + (p.statEm ? `<em>${p.statEm}</em>` : '') }} />
              <p>{p.statP}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bonus">
        <s>Bonus, included</s>
        <h4>Oh — and a little tool, on us.</h4>
        <p>A small tool that pings the team the moment a channel's cost spikes or a winning ad starts to tire — so budget never quietly bleeds. <b>Nice to have, not the main event.</b> The buying and the calls are made by the people above.</p>
      </div>

      <div className="end">
        <div className="big">Media that pays<br /><span>for itself.</span></div>
        <p>The right channels, the right creative, tested in flights and scaled only when they win — with every euro of budget going to the platforms, not to us. <b>Return in revenue, proof you can check.</b></p>
        <a href="/contact" onClick={onClose}>See what your spend could do →</a>
        <p className="foot">OARC — one team for the whole business. Malta.</p>
      </div>
    </div>
  );
}

// ── SOCIAL content — exact prototype port, green world ───────────────────────
const SC_CSS = `
.sc{
  --bg:#0E0C14;--deep:#08070C;--em:#FF6A2B;
  --c:#F3EEE6;
  --c70:rgba(243,238,230,.72);--c45:rgba(243,238,230,.46);
  --c26:rgba(243,238,230,.26);--c16:rgba(243,238,230,.16);
  --emg:rgba(255,106,43,.55);--emd:rgba(255,106,43,.16);
  --line:rgba(243,238,230,.13);
  --e:cubic-bezier(.16,1,.3,1);
  background:var(--bg);color:var(--c);
  font-family:'Familjen Grotesk',sans-serif;
  -webkit-font-smoothing:antialiased;overflow-x:hidden
}
.sc .hero{padding:1.7rem 20px 2.4rem;border-bottom:1px solid var(--line)}
.sc .hero .lbl{font-size:10.5px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--em)}
.sc .hero h1{font-size:clamp(2.2rem,9.4vw,3.3rem);font-weight:700;line-height:.98;letter-spacing:-.045em;margin-top:.7rem}
.sc .hero h1 em{font-family:var(--font-instrument-serif,'Instrument Serif',serif);font-style:italic;font-weight:400;font-size:1.14em;color:var(--em)}
.sc .hero > .desc{font-size:.96rem;color:var(--c70);line-height:1.55;margin-top:1rem;max-width:42ch}
.sc .hero > .desc b{color:var(--c)}
.sc .stage3d{margin:2.3rem 0 .5rem;height:344px;display:flex;align-items:center;justify-content:center;perspective:1400px;perspective-origin:50% 30%;position:relative}
.sc .stage3d::before{content:'';position:absolute;width:280px;height:280px;border-radius:50%;
  background:radial-gradient(circle,var(--emd),transparent 62%);filter:blur(8px);z-index:0;animation:sc-breathe 6s var(--e) infinite alternate}
@keyframes sc-breathe{from{opacity:.5;transform:scale(.9)}to{opacity:1;transform:scale(1.08)}}
.sc .stack{position:relative;width:230px;height:230px;transform-style:preserve-3d;
  transform:rotateX(58deg) rotateZ(-38deg);animation:sc-float 9s var(--e) infinite alternate;z-index:2}
@keyframes sc-float{from{transform:rotateX(58deg) rotateZ(-38deg) translateZ(0)}to{transform:rotateX(54deg) rotateZ(-34deg) translateZ(7px)}}
.sc .layer{position:absolute;inset:0;border:1.5px solid var(--c26);background:rgba(242,239,233,.03);
  border-radius:6px;opacity:0;box-shadow:0 1px 0 rgba(242,239,233,.08) inset}
.sc .layer.hot{border-color:var(--em);background:rgba(255,106,43,.12);box-shadow:0 0 26px var(--emg)}
.sc .layer .dot{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);
  width:7px;height:7px;border-radius:50%;background:var(--em);box-shadow:0 0 12px var(--emg)}
.sc .layer .tag{position:absolute;left:calc(100% + 16px);top:50%;white-space:nowrap;
  transform:translateY(-50%) rotateZ(38deg) rotateX(-58deg);transform-origin:left center;
  font-size:11px;font-weight:600;letter-spacing:-.01em;color:var(--c70);
  display:flex;align-items:center;gap:8px}
.sc .layer .tag::before{content:'';width:22px;height:1px;background:var(--line)}
.sc .layer .tag b{font-size:9px;font-weight:700;letter-spacing:.1em;color:var(--c26)}
.sc .layer .tag.hot{color:var(--c)}
.sc .layer .tag.hot b{color:var(--em)}
.sc .stack.go .layer{animation:sc-rise .9s var(--e) forwards}
@keyframes sc-rise{from{opacity:0;transform:translateZ(-40px)}to{opacity:1}}
.sc .spineline{position:absolute;left:50%;top:50%;width:2px;
  background:linear-gradient(var(--em),transparent);
  transform:translate(-50%,-50%);transform-style:preserve-3d}
.sc .team-row{margin-top:1.6rem}
.sc .team-row s{font-size:10px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--c45);font-style:normal}
.sc .team-row .chips{display:flex;flex-wrap:wrap;gap:6px;margin-top:.7rem}
.sc .team-row .chips span{border:1px solid var(--line);padding:6px 10px;font-size:11px;color:var(--c70);border-radius:2px}
.sc .shead{padding:1.7rem 20px .4rem;font-size:10.5px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--c45);display:flex;align-items:center;gap:.8rem}
.sc .shead::after{content:'';flex:1;height:1px;background:var(--line)}
.sc .phase{padding:1.8rem 20px 2rem;border-top:1px solid var(--line)}
.sc .phase.hot{background:linear-gradient(180deg,rgba(255,106,43,.07),transparent 58%)}
.sc .core-tag{display:inline-block;font-size:9.5px;font-weight:700;letter-spacing:.16em;
  text-transform:uppercase;color:var(--bg);background:var(--em);padding:5px 10px;border-radius:2px;margin-bottom:1rem}
.sc .phase .idx{display:flex;align-items:baseline;gap:.6rem;font-variant-numeric:tabular-nums}
.sc .phase .idx b{font-size:11px;font-weight:700;letter-spacing:.12em;color:var(--em)}
.sc .phase .idx s{font-size:10.5px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:var(--c45);text-decoration:none}
.sc .phase h2{font-size:clamp(2rem,8.4vw,2.7rem);font-weight:700;line-height:1;letter-spacing:-.04em;margin-top:1rem}
.sc .phase h2 em{font-family:var(--font-instrument-serif,'Instrument Serif',serif);font-style:italic;font-weight:400;font-size:1.16em;color:var(--em)}
.sc .phase .out{font-family:var(--font-instrument-serif,'Instrument Serif',serif);font-style:italic;
  font-size:clamp(1.35rem,5.5vw,1.7rem);color:var(--c);margin-top:.9rem;line-height:1.12}
.sc .viz{margin-top:1.5rem;border:1px solid var(--line);border-radius:8px;
  background:var(--deep);position:relative;overflow:hidden;aspect-ratio:1/.82}
.sc .viz::before{content:'';position:absolute;inset:0;
  background-image:radial-gradient(circle at 1px 1px,rgba(242,239,233,.05) 1px,transparent 0);
  background-size:22px 22px;
  mask-image:radial-gradient(130% 100% at 50% 45%,#000 45%,transparent 85%)}
.sc .viz svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
.sc .who{margin-top:1rem;display:flex;align-items:center;gap:8px;font-size:11px;font-weight:600;letter-spacing:.02em;color:var(--em)}
.sc .who::before{content:'';width:16px;height:1px;background:var(--em);opacity:.5}
.sc .cap{margin-top:.7rem;font-size:.9rem;color:var(--c70);line-height:1.55}
.sc .cap b{color:var(--c)}
.sc .stat{margin-top:1.1rem;display:flex;align-items:baseline;gap:.7rem;padding-top:1rem;border-top:1px solid var(--line)}
.sc .stat b{font-size:clamp(2.4rem,11vw,3.2rem);font-weight:700;letter-spacing:-.05em;line-height:.85;font-variant-numeric:tabular-nums}
.sc .stat b em{font-family:var(--font-instrument-serif,'Instrument Serif',serif);font-style:italic;font-size:.42em;color:var(--em)}
.sc .stat p{font-size:11.5px;color:var(--c45);line-height:1.35;max-width:24ch}
.sc .bonus{margin:0 20px 0;padding:1.3rem 1.4rem;border:1px dashed var(--line);border-radius:8px;background:rgba(242,239,233,.02)}
.sc .bonus s{font-size:10px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--c45);font-style:normal}
.sc .bonus h4{font-family:var(--font-instrument-serif,'Instrument Serif',serif);font-style:italic;font-size:1.3rem;font-weight:400;margin:.4rem 0 .5rem}
.sc .bonus > p{font-size:.88rem;color:var(--c70);line-height:1.55}
.sc .bonus > p b{color:var(--c)}
.sc .end{padding:2.2rem 20px calc(2.4rem + env(safe-area-inset-bottom));border-top:1px solid var(--line);margin-top:1.7rem}
.sc .end .big{font-family:var(--font-instrument-serif,'Instrument Serif',serif);font-style:italic;
  font-size:clamp(2.4rem,10vw,3.4rem);font-weight:400;line-height:1.02;letter-spacing:-.01em}
.sc .end .big span{color:var(--em)}
.sc .end > p{font-size:.95rem;color:var(--c70);line-height:1.6;max-width:44ch;margin-top:1rem}
.sc .end > p b{color:var(--c)}
.sc .end a{display:block;margin-top:1.4rem;text-align:center;font-size:12px;font-weight:700;
  letter-spacing:.13em;text-transform:uppercase;color:#F3EEE6;background:var(--em);
  text-decoration:none;padding:1.15rem;border-radius:4px}
.sc .end .foot{font-size:11px;color:var(--c26);letter-spacing:.04em;margin-top:1.4rem}
.sc .wire{stroke:var(--c16);stroke-width:1.25;fill:none}
.sc .node{fill:var(--c16)}
.sc .nodeOn{fill:var(--em)}
.sc .ring{fill:none;stroke:var(--em);stroke-width:1.5}
.sc .lab{font-weight:600;fill:rgba(243,238,230,.7)}
.sc .labk{font-weight:700;fill:#08070C}
.sc .glow{filter:drop-shadow(0 0 9px var(--emg))}
.sc .draw{stroke-dasharray:var(--L,240);stroke-dashoffset:var(--L,240)}
.sc .viz.live .draw{animation:sc-draw 1.1s var(--e) forwards}
@keyframes sc-draw{to{stroke-dashoffset:0}}
.sc .pop{opacity:0;transform:scale(.4);transform-origin:center}
.sc .viz.live .pop{animation:sc-pop .5s var(--e) forwards}
@keyframes sc-pop{to{opacity:1;transform:scale(1)}}
.sc .up{opacity:0}
.sc .viz.live .up{animation:sc-up .6s var(--e) forwards}
@keyframes sc-up{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}
.sc .grow{transform:scaleY(0);transform-origin:50% 100%}
.sc .viz.live .grow{animation:sc-grw .75s var(--e) forwards}
@keyframes sc-grw{to{transform:scaleY(1)}}
@media(prefers-reduced-motion:reduce){
.sc *{animation:none!important;transition-duration:.01ms!important}
.sc .stack{animation:none}.sc .layer{opacity:1}.sc .stack.go .layer{animation:none;opacity:1}
.sc .up,.sc .pop{opacity:1;transform:none}.sc .draw{stroke-dashoffset:0}.sc .grow{transform:none}}
`;

const SC_EM = '#FF6A2B';
const SC_INK = '#08070C';

const SC_VIZ: Record<string, () => string> = {
  where: () => {
    const lit = [1, 2, 4]; let s = '';
    for (let i = 0; i < 6; i++) {
      const x = 40 + (i % 3) * 116, y = 40 + Math.floor(i / 3) * 118, on = lit.includes(i);
      s += `<rect class="${on ? 'ring glow' : 'wire'} up" x="${x}" y="${y}" width="96" height="96" rx="18" ${on ? '' : 'fill="rgba(242,239,233,.03)"'} style="animation-delay:${i * .1}s"/>`;
      if (on) {
        s += `<circle class="nodeOn glow pop" cx="${x+48}" cy="${y+38}" r="12" style="animation-delay:${i*.1+.2}s"/>` +
             `<path class="pop" style="animation-delay:${i*.1+.3}s" d="M${x+28},${y+76} q20,-24 40,0 z" fill="${SC_EM}"/>`;
      } else {
        s += `<circle class="node pop" cx="${x+48}" cy="${y+48}" r="8" style="animation-delay:${i*.1+.2}s"/>`;
      }
    }
    s += `<text class="lab up" x="200" y="288" font-size="11" text-anchor="middle" style="animation-delay:.8s">where your people already are</text>`;
    return `<svg viewBox="0 0 400 300">${s}</svg>`;
  },
  story: () => {
    let s = `<path class="wire draw glow" style="--L:540" d="M30,208 C110,208 122,120 190,104 C252,90 292,60 362,66"/>`;
    const pts: [number,number][] = [[30,208],[112,164],[190,104],[282,80],[362,66]];
    pts.forEach((p, i) => {
      const on = i === 0;
      s += `<circle class="${on ? 'nodeOn glow' : 'node'} pop" cx="${p[0]}" cy="${p[1]}" r="${on ? 9 : 6}" style="animation-delay:${.6+i*.16}s"/>`;
    });
    s += `<text class="lab up" x="34" y="234" font-size="11" style="animation-delay:.3s">the hook</text>` +
         `<text class="lab up" x="360" y="52" font-size="11" text-anchor="end" style="animation-delay:1.2s">the payoff</text>`;
    return `<svg viewBox="0 0 400 258">${s}</svg>`;
  },
  videos: () => {
    const cards: [number,number][] = [[40,28],[150,28],[260,28],[40,152],[150,152],[260,152]];
    let s = '';
    cards.forEach((c, i) => {
      const on = i === 1;
      s += `<rect class="${on ? 'ring glow' : 'wire'} up" x="${c[0]}" y="${c[1]}" width="100" height="106" rx="11" ${on ? '' : 'fill="rgba(242,239,233,.03)"'} style="animation-delay:${i*.08}s"/>` +
           `<circle class="${on ? 'nodeOn glow' : 'node'} pop" cx="${c[0]+50}" cy="${c[1]+53}" r="17" style="animation-delay:${i*.08+.15}s"/>` +
           `<path class="pop" style="animation-delay:${i*.08+.25}s" d="M${c[0]+45},${c[1]+44} l13,9 l-13,9 z" fill="${on ? SC_INK : 'rgba(242,239,233,.5)'}"/>`;
    });
    return `<svg viewBox="0 0 400 288">${s}</svg>`;
  },
  native: () => {
    const frames = [{x:34,y:66,w:60,h:112,l:'9:16'},{x:120,y:88,w:82,h:82,l:'1:1'},{x:226,y:98,w:128,h:72,l:'16:9'}];
    let s = `<text class="lab up" x="200" y="38" font-size="11.5" text-anchor="middle" style="animation-delay:.1s">one story · every feed</text>`;
    frames.forEach((o, i) => {
      s += `<rect class="${i === 0 ? 'ring glow' : 'wire'} up" x="${o.x}" y="${o.y}" width="${o.w}" height="${o.h}" rx="8" style="animation-delay:${i*.2}s"/>` +
           `<circle class="${i === 0 ? 'nodeOn glow' : 'node'} pop" cx="${o.x+o.w/2}" cy="${o.y+o.h/2}" r="12" style="animation-delay:${i*.2+.15}s"/>` +
           `<path class="pop" style="animation-delay:${i*.2+.25}s" d="M${o.x+o.w/2-4},${o.y+o.h/2-6} l11,6 l-11,6 z" fill="${SC_INK}"/>` +
           `<text class="lab up" x="${o.x+o.w/2}" y="${o.y+o.h+18}" font-size="10.5" text-anchor="middle" style="animation-delay:${i*.2+.3}s">${o.l}</text>`;
    });
    return `<svg viewBox="0 0 400 252">${s}</svg>`;
  },
  craft: () => {
    let s = `<line class="wire" x1="44" y1="204" x2="366" y2="204"/>`;
    s += `<path class="wire draw glow" style="--L:440" d="M44,64 C120,64 132,150 224,170 C286,182 326,188 366,190"/>`;
    s += `<rect class="nodeOn glow grow" x="44" y="60" width="7" height="144" rx="3"/>` +
         `<text class="lab up" x="60" y="48" font-size="10.5" style="animation-delay:.5s">first 3 seconds</text>`;
    s += `<circle class="ring glow pop" cx="300" cy="120" r="12" style="animation-delay:1s"/>` +
         `<text class="lab up" x="300" y="148" font-size="10.5" text-anchor="middle" style="animation-delay:1.2s">catch the trend</text>` +
         `<text class="lab up" x="205" y="234" font-size="10.5" text-anchor="middle" opacity=".5" style="animation-delay:.3s">why it flies — not luck</text>`;
    return `<svg viewBox="0 0 400 250">${s}</svg>`;
  },
  tribe: () => {
    let s = `<circle class="ring glow pop" cx="200" cy="152" r="34" style="animation-delay:.2s"/>` +
             `<circle class="nodeOn glow pop" cx="200" cy="152" r="9" style="animation-delay:.35s"/>` +
             `<text class="labk pop" x="200" y="156" font-size="10" font-weight="700" text-anchor="middle" style="animation-delay:.5s">YOU</text>`;
    const radials: [number,number][] = [[110,72],[290,72],[332,152],[290,232],[110,232],[68,152],[200,44],[200,260]];
    radials.forEach((p, i) => {
      const fan = i % 2 === 0;
      s += `<path class="wire draw" style="--L:210;animation-delay:${.5+i*.07}s" d="M200,152 L${p[0]},${p[1]}"/>` +
           `<circle class="${fan ? 'nodeOn glow' : 'node'} pop" cx="${p[0]}" cy="${p[1]}" r="${fan ? 8 : 6}" style="animation-delay:${.8+i*.07}s"/>`;
    });
    return `<svg viewBox="0 0 400 304">${s}</svg>`;
  },
};

const SC_PARTS = [
  { n:'01', sp:'Where your people are', h:'We find <em>your people.</em>', out:'We start where they already scroll.', core:false,
    who:'Strategists',
    cap:'Before a single post, we study who actually buys from you and where they spend their time — TikTok, Instagram, YouTube, LinkedIn. We don\'t chase every platform. We go where <b>your</b> customers already are, so nothing we make is wasted.',
    stat:'5.2', statEm:'B', statP:'people on social — we find the slice that\'s yours', viz:'where' },
  { n:'02', sp:'The story', h:'We find the <em>story.</em>', out:'The reason they stop scrolling.', core:true,
    who:'Storytellers',
    cap:'This is the heart of it. We turn your business into something worth watching — a hook, a reason to stay, a payoff. Everything else is just how that story travels. <b>No story, and the best camera in the world still gets scrolled past.</b>',
    stat:'3', statEm:'sec', statP:'to hook them — the story earns the rest of the video', viz:'story' },
  { n:'03', sp:'The video', h:'We make the <em>video.</em>', out:'The way people watch now.', core:false,
    who:'Videographers · Editors',
    cap:'Reels, TikToks, Shorts, YouTube, live — we shoot and cut all of it. Video is how people watch, learn and decide today; if you\'re not on camera, you\'re silent. <b>One shoot becomes a month of content.</b>',
    stat:'30', statEm:'+', statP:'pieces of video from one shoot — always something to post', viz:'videos' },
  { n:'04', sp:'Every platform', h:'We speak <em>every platform.</em>', out:'Native everywhere your people are.', core:false,
    who:'Platform leads',
    cap:'A TikTok isn\'t a Reel isn\'t a LinkedIn post. We reshape the same story into each feed\'s own language, so it belongs there — <b>instead of being posted everywhere and ignored everywhere.</b>',
    stat:'4', statEm:undefined as string|undefined, statP:'platforms, four native languages, one story', viz:'native' },
  { n:'05', sp:'How it works', h:'We know <em>how it works.</em>', out:'The craft under every post.', core:false,
    who:'The whole team',
    cap:'The first-second hook, watch-time, the trend that\'s alive for 48 hours, the rhythm the algorithm rewards — the craft most people guess at. <b>We don\'t guess. We\'ve done this enough to know why a post flies or dies.</b>',
    stat:'48', statEm:'hr', statP:'a trend\'s whole life — we move while it\'s climbing', viz:'craft' },
  { n:'06', sp:'The community', h:'We build the <em>community.</em>', out:'Followers who bring you customers.', core:false,
    who:'Community managers',
    cap:'Social is a conversation, not a billboard. We reply, we DM, we turn your audience into people who trust you, defend you, and bring their friends. <b>This is where attention quietly becomes sales.</b>',
    stat:'88', statEm:'%', statP:'trust a real person over any ad you could run', viz:'tribe' },
];

function SocialContent({ onClose }: { onClose: () => void }) {
  const wrapRef = useRef<HTMLDivElement>(null);

  // inject fonts + scoped CSS once
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const lid = 'sc-modal-fonts';
    if (!document.getElementById(lid)) {
      const l = document.createElement('link');
      l.id = lid; l.rel = 'stylesheet';
      l.href = 'https://fonts.googleapis.com/css2?family=Familjen+Grotesk:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap';
      document.head.appendChild(l);
    }
    const id = 'sc-modal-css';
    if (!document.getElementById(id)) {
      const s = document.createElement('style');
      s.id = id; s.textContent = SC_CSS;
      document.head.appendChild(s);
    }
  }, []);

  // build 3D stack
  useEffect(() => {
    const stack = wrapRef.current?.querySelector<HTMLElement>('.stack');
    if (!stack || stack.children.length > 0) return;
    const SCOPE: [string, number][] = [['Strategy',0],['Story',1],['Video',0],['Platforms',0],['Craft',0],['Community',0]];
    const n = SCOPE.length, gap = 34, base = -(n-1)*gap/2;
    const spine = document.createElement('div');
    spine.className = 'spineline';
    spine.style.height = ((n-1)*gap)+'px';
    spine.style.transform = 'translate(-50%,-50%) rotateX(90deg)';
    stack.appendChild(spine);
    SCOPE.forEach(([name, hot], i) => {
      const layer = document.createElement('div');
      layer.className = `layer${hot ? ' hot' : ''}`;
      layer.style.transform = `translateZ(${base + i * gap}px)`;
      layer.style.animationDelay = `${i * .13}s`;
      layer.innerHTML = `<span class="dot"></span><span class="tag${hot ? ' hot' : ''}"><b>0${i+1}</b>${name}</span>`;
      stack.appendChild(layer);
    });
    requestAnimationFrame(() => stack.classList.add('go'));
  }, []);

  // scroll-triggered viz animations
  useEffect(() => {
    const io = new IntersectionObserver(
      es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('live'); io.unobserve(e.target); } }),
      { threshold: 0.32 }
    );
    wrapRef.current?.querySelectorAll('.viz').forEach(v => io.observe(v));
    return () => io.disconnect();
  }, []);

  return (
    <div className="sc" ref={wrapRef}>
      {/* sticky top bar */}
      {/* hero */}
      <div className="hero">
        <p className="lbl">Everything social takes</p>
        <h1>Social is a whole world.<br /><em>We deliver all of it.</em></h1>
        <p className="desc">The story, the video, every platform, being where your people already are, and knowing how it all actually works — <b>delivered by one team who does this all day.</b> You touch none of it. It becomes the strongest thing you&apos;ve got.</p>

        {/* 3D stack */}
        <div className="stage3d"><div className="stack" /></div>

        {/* team chips */}
        <div className="team-row">
          <s>The people on it</s>
          <div className="chips">
            {['Strategists','Storytellers','Videographers','Editors','Platform leads','Community'].map(t => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* section heading */}
      <div className="shead">Everything you get</div>

      {/* 6 phases */}
      {SC_PARTS.map((p, i) => (
        <div key={i} className={`phase${p.core ? ' hot' : ''}`}>
          {p.core && <span className="core-tag">The heart of it</span>}
          <div className="idx"><b>{p.n}</b><s>{p.sp}</s></div>
          <h2 dangerouslySetInnerHTML={{ __html: p.h }} />
          <p className="out">{p.out}</p>
          <div className="viz" dangerouslySetInnerHTML={{ __html: SC_VIZ[p.viz]() }} />
          <p className="who">{p.who}</p>
          <p className="cap" dangerouslySetInnerHTML={{ __html: p.cap }} />
          <div className="stat">
            <b dangerouslySetInnerHTML={{ __html: p.stat + (p.statEm ? `<em>${p.statEm}</em>` : '') }} />
            <p>{p.statP}</p>
          </div>
        </div>
      ))}

      {/* bonus */}
      <div className="bonus">
        <s>Bonus, included</s>
        <h4>Oh — and a little tool, on us.</h4>
        <p>A simple tool that flags a rising trend and pings the team the second someone mentions you, so we&apos;re first to the moment. <b>Nice to have — not the main event.</b> The work is done by the people above.</p>
      </div>

      {/* end / CTA */}
      <div className="end">
        <div className="big">Then social becomes<br /><span>your powerhouse.</span></div>
        <p>Everything it takes — the story, the video, every platform, the craft, the community — <b>delivered by one team who does this all day.</b> You do none of it. What comes back is the most powerful thing in your business: attention that turns into customers, month after month.</p>
        <a href="/contact" onClick={onClose}>Put the whole team on your social →</a>
        <p className="foot">OARC — a creative and content team. Malta.</p>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// VIZBOX — animated SVG container shared across all new departments
// ────────────────────────────────────────────────────────────────────────────
const VIZ_CSS = [
  ".oarc-vb{position:relative;border-radius:10px;overflow:hidden;aspect-ratio:1/.78;margin-top:1.5rem}",
  ".oarc-vb svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}",
  ".oarc-vb .draw{stroke-dasharray:var(--L,240);stroke-dashoffset:var(--L,240)}",
  ".oarc-vb.live .draw{animation:oVD 1.1s cubic-bezier(.16,1,.3,1) forwards}",
  "@keyframes oVD{to{stroke-dashoffset:0}}",
  ".oarc-vb .pop{opacity:0;transform:scale(.4);transform-origin:center}",
  ".oarc-vb.live .pop{animation:oVP .5s cubic-bezier(.16,1,.3,1) forwards}",
  "@keyframes oVP{to{opacity:1;transform:scale(1)}}",
  ".oarc-vb .up{opacity:0}",
  ".oarc-vb.live .up{animation:oVU .6s cubic-bezier(.16,1,.3,1) forwards}",
  "@keyframes oVU{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}",
  ".oarc-vb .grow{transform:scaleY(0);transform-origin:50% 100%}",
  ".oarc-vb .growd{transform:scaleY(0);transform-origin:50% 0}",
  ".oarc-vb.live .grow,.oarc-vb.live .growd{animation:oVG .75s cubic-bezier(.16,1,.3,1) forwards}",
  "@keyframes oVG{to{transform:scaleY(1)}}",
  ".oarc-vb .growx{transform:scaleX(0);transform-origin:left center}",
  ".oarc-vb.live .growx{animation:oVGX .9s cubic-bezier(.16,1,.3,1) forwards}",
  "@keyframes oVGX{to{transform:scaleX(1)}}",
  ".oarc-vb .orbit{transform-box:fill-box;transform-origin:center center;animation:oVOrb 6s linear infinite}",
  "@keyframes oVOrb{to{transform:rotate(360deg)}}",
  "@media(prefers-reduced-motion:reduce){",
  ".oarc-vb .draw{stroke-dashoffset:0!important}",
  ".oarc-vb .pop,.oarc-vb .up{opacity:1!important;transform:none!important}",
  ".oarc-vb .grow,.oarc-vb .growd,.oarc-vb .growx{transform:none!important}",
  ".oarc-vb .orbit{animation:none!important}}",
].join("\n");

let _vbInj = false;
function injectVB() {
  if (typeof document === "undefined" || _vbInj) return;
  if (!document.getElementById("oarc-vb-css")) {
    const s = document.createElement("style"); s.id = "oarc-vb-css"; s.textContent = VIZ_CSS;
    document.head.appendChild(s);
  }
  _vbInj = true;
}

function VizBox({ svg, bg = "#07080C", brd = "rgba(234,237,242,.11)", dot = "rgba(234,237,242,.05)" }:
  { svg: string; bg?: string; brd?: string; dot?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    injectVB();
    const el = ref.current; if (!el) return;
    const rm = window.matchMedia("(prefers-reduced-motion:reduce)").matches;
    if (rm) { el.classList.add("live"); return; }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add("live"); io.disconnect(); }
    }, { threshold: .3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className="oarc-vb" style={{ background: bg, border: `1px solid ${brd}` }}
      dangerouslySetInnerHTML={{ __html:
        `<div style="position:absolute;inset:0;pointer-events:none;` +
        `background-image:radial-gradient(circle at 1px 1px,${dot} 1px,transparent 0);` +
        `background-size:22px 22px;` +
        `-webkit-mask-image:radial-gradient(130% 100% at 50% 45%,#000 45%,transparent 85%);` +
        `mask-image:radial-gradient(130% 100% at 50% 45%,#000 45%,transparent 85%)"></div>` + svg
      }}
    />
  );
}

// ────────────────────────────────────────────────────────────────────────────
// CLARITY CONTENT  (exact prototype port — dark azure "the answer" world)
// src: we_tell_you_wahts_working_1786575410248.txt
// ────────────────────────────────────────────────────────────────────────────
const CL_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap');
.clx{
  --ink:#0B0D12;--deep:#07080C;--card:#0E1117;--c:#EAEDF2;--az:#3D7BFF;--bad:#E5563B;
  --c70:rgba(234,237,242,.72);--c45:rgba(234,237,242,.46);--c26:rgba(234,237,242,.26);
  --c16:rgba(234,237,242,.16);--c10:rgba(234,237,242,.1);
  --azg:rgba(61,123,255,.5);--azf:rgba(61,123,255,.12);
  --line:rgba(234,237,242,.11);
  --ui:'Sora',sans-serif;--mono:'JetBrains Mono',monospace;--e:cubic-bezier(.16,1,.3,1);
  background:var(--ink);color:var(--c);font-family:var(--ui);-webkit-font-smoothing:antialiased;overflow-x:hidden}
.clx *{margin:0;padding:0;box-sizing:border-box}
.clx .hero{padding:1.8rem 20px 2.2rem;border-bottom:1px solid var(--line)}
.clx .hero .lbl{font-family:var(--mono);font-size:10.5px;font-weight:500;letter-spacing:.16em;text-transform:uppercase;color:var(--az)}
.clx .hero h1{font-size:clamp(2.3rem,9.4vw,3.4rem);font-weight:800;line-height:.98;letter-spacing:-.04em;margin-top:.7rem}
.clx .hero h1 em{font-style:normal;color:var(--az)}
.clx .hero p{font-size:.98rem;color:var(--c70);line-height:1.55;margin-top:1rem;max-width:42ch}
.clx .hero p b{color:var(--c);font-weight:600}
.clx .board{margin-top:2rem;border:1px solid var(--line);border-radius:14px;background:var(--card);overflow:hidden;box-shadow:0 20px 50px rgba(0,0,0,.3)}
.clx .bhead{display:flex;justify-content:space-between;align-items:center;padding:.9rem 1.1rem;border-bottom:1px solid var(--line);background:rgba(234,237,242,.02)}
.clx .bhead b{font-size:12px;font-weight:700;letter-spacing:.01em}
.clx .bhead s{font-family:var(--mono);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--c45);font-style:normal;text-decoration:none}
.clx .brow{display:flex;justify-content:space-between;align-items:center;padding:.9rem 1.1rem;border-bottom:1px solid var(--line);opacity:0;transform:translateY(8px);transition:.55s var(--e)}
.clx .brow:last-child{border-bottom:0}
.clx .board.go .brow{opacity:1;transform:none}
.clx .bch{font-family:var(--mono);font-size:13px;color:var(--c)}
.clx .bv{font-family:var(--mono);font-size:11px;font-weight:700;letter-spacing:.04em;padding:5px 10px;border-radius:5px;white-space:nowrap}
.clx .bv.on{color:var(--az);background:var(--azf);border:1px solid rgba(61,123,255,.4)}
.clx .bv.off{color:var(--bad);background:rgba(229,86,59,.1);border:1px solid rgba(229,86,59,.32)}
.clx .hero .team{margin-top:1.7rem}
.clx .hero .team s{font-family:var(--mono);font-size:10px;font-weight:500;letter-spacing:.12em;text-transform:uppercase;color:var(--c45);font-style:normal;text-decoration:none}
.clx .hero .team .row{display:flex;flex-wrap:wrap;gap:6px;margin-top:.7rem}
.clx .hero .team .row span{border:1px solid var(--line);padding:6px 10px;font-size:11px;color:var(--c70);border-radius:2px}
.clx .shead{padding:1.7rem 20px .4rem;font-family:var(--mono);font-size:10.5px;font-weight:500;letter-spacing:.14em;text-transform:uppercase;color:var(--c45);display:flex;align-items:center;gap:.8rem}
.clx .shead::after{content:'';flex:1;height:1px;background:var(--line)}
.clx .phase{padding:1.8rem 20px 2rem;border-top:1px solid var(--line)}
.clx .phase:first-of-type{border-top:0}
.clx .phase .idx{display:flex;align-items:baseline;gap:.6rem}
.clx .phase .idx b{font-family:var(--mono);font-size:11px;font-weight:700;letter-spacing:.06em;color:var(--az)}
.clx .phase .idx s{font-family:var(--mono);font-size:10.5px;font-weight:500;letter-spacing:.1em;text-transform:uppercase;color:var(--c45);text-decoration:none}
.clx .phase h2{font-size:clamp(2rem,8.2vw,2.6rem);font-weight:800;line-height:1;letter-spacing:-.035em;margin-top:1rem}
.clx .phase h2 em{font-style:normal;color:var(--az)}
.clx .phase .out{font-size:clamp(1.3rem,5.2vw,1.6rem);color:var(--c);margin-top:.9rem;line-height:1.2;font-weight:500}
.clx .viz{margin-top:1.5rem;border:1px solid var(--line);border-radius:10px;background:var(--deep);position:relative;overflow:hidden;aspect-ratio:1/.78}
.clx .viz::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle at 1px 1px,rgba(234,237,242,.05) 1px,transparent 0);background-size:22px 22px;mask-image:radial-gradient(130% 100% at 50% 45%,#000 45%,transparent 85%)}
.clx .viz svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
.clx .who{margin-top:1rem;display:flex;align-items:center;gap:8px;font-family:var(--mono);font-size:11px;font-weight:500;letter-spacing:.02em;color:var(--az)}
.clx .who::before{content:'';width:16px;height:1px;background:var(--az);opacity:.5}
.clx .cap{margin-top:.7rem;font-size:.9rem;color:var(--c70);line-height:1.55}
.clx .cap b{color:var(--c);font-weight:600}
.clx .stat{margin-top:1.1rem;display:flex;align-items:baseline;gap:.7rem;padding-top:1rem;border-top:1px solid var(--line)}
.clx .stat b{font-family:var(--mono);font-size:clamp(2.1rem,9.5vw,2.8rem);font-weight:700;letter-spacing:-.03em;line-height:.9}
.clx .stat b em{font-style:normal;font-size:.5em;color:var(--az)}
.clx .stat p{font-size:11.5px;color:var(--c45);line-height:1.35;max-width:25ch}
.clx .bonus{margin:0 20px;padding:1.3rem 1.4rem;border:1px dashed var(--line);border-radius:10px;background:rgba(234,237,242,.02)}
.clx .bonus s{font-family:var(--mono);font-size:10px;font-weight:500;letter-spacing:.12em;text-transform:uppercase;color:var(--c45);font-style:normal;text-decoration:none}
.clx .bonus h4{font-size:1.15rem;font-weight:700;margin:.5rem 0 .5rem;letter-spacing:-.02em}
.clx .bonus p{font-size:.88rem;color:var(--c70);line-height:1.55}
.clx .bonus p b{color:var(--c);font-weight:600}
.clx .end{padding:2.2rem 20px calc(2.4rem + env(safe-area-inset-bottom));border-top:1px solid var(--line);margin-top:1.7rem}
.clx .end .big{font-size:clamp(2.6rem,11vw,3.7rem);font-weight:800;line-height:1;letter-spacing:-.04em}
.clx .end .big span{color:var(--az)}
.clx .end p{font-size:.95rem;color:var(--c70);line-height:1.6;max-width:44ch;margin-top:1rem}
.clx .end p b{color:var(--c);font-weight:600}
.clx .end a{display:block;margin-top:1.4rem;text-align:center;font-family:var(--mono);font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--ink);background:var(--az);text-decoration:none;padding:1.15rem;border-radius:6px}
.clx .end .foot{font-family:var(--mono);font-size:10.5px;color:var(--c26);letter-spacing:.04em;margin-top:1.4rem}
.clx .wire{stroke:var(--c16);stroke-width:1.25;fill:none}
.clx .node{fill:var(--c16)} .clx .nodeOn{fill:var(--az)} .clx .bad{fill:var(--bad)}
.clx .ring{fill:none;stroke:var(--az);stroke-width:1.5}
.clx .lab{font-family:'JetBrains Mono';font-weight:400;fill:var(--c70)}
.clx .labA{font-family:'JetBrains Mono';font-weight:500;fill:var(--az)}
.clx .labk{font-family:'JetBrains Mono';font-weight:700;fill:var(--ink)}
.clx .glow{filter:drop-shadow(0 0 8px var(--azg))}
.clx .draw{stroke-dasharray:var(--L,240);stroke-dashoffset:var(--L,240)}
.clx .live .draw{animation:clx-draw 1.1s var(--e) forwards}
@keyframes clx-draw{to{stroke-dashoffset:0}}
.clx .pop{opacity:0;transform:scale(.4);transform-origin:center}
.clx .live .pop{animation:clx-pop .5s var(--e) forwards}
@keyframes clx-pop{to{opacity:1;transform:scale(1)}}
.clx .up{opacity:0}
.clx .live .up{animation:clx-up .6s var(--e) forwards}
@keyframes clx-up{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}
.clx .grow{transform:scaleY(0);transform-origin:50% 100%}
.clx .live .grow{animation:clx-grw .75s var(--e) forwards}
@keyframes clx-grw{to{transform:scaleY(1)}}
.clx .growd{transform:scaleY(0);transform-origin:50% 0}
.clx .live .growd{animation:clx-grw .75s var(--e) forwards}
@media(prefers-reduced-motion:reduce){.clx *{animation:none!important;transition-duration:.01ms!important}.clx .up,.clx .pop,.clx .brow{opacity:1;transform:none}.clx .draw{stroke-dashoffset:0}.clx .grow,.clx .growd{transform:none}}
`;

const CL_INK = '#0B0D12';
const CL_AZ = '#3D7BFF';

const CL_BOARD: [string, string, number][] = [
  ['Instagram video', 'WORKING  \u2191', 1],
  ['Google Search', 'WORKING  \u2191', 1],
  ['Boosted posts', 'WASTING  \u2193', 0],
  ['That cold campaign', 'WASTING  \u2193', 0],
];
const CL_TEAM = ['Analysts', 'Analytics engineers', 'Strategists', 'Your strategist'];

const CL_PARTS = [
  { n:'01', sp:'What matters', h:'We track what <em>matters.</em>', out:'Money metrics, not vanity.',
    who:'Analysts',
    cap:'Likes, impressions and reach feel good and pay nothing. We track the numbers that actually run your business \u2014 revenue, cost per customer, return, repeat rate \u2014 and quietly ignore the noise everyone else puts on the front page.',
    stat:'3', statP:'numbers decide almost everything \u2014 we watch those, not the noise', viz:'matters' },
  { n:'02', sp:'Spend to sales', h:'We connect spend to <em>sales.</em>', out:'Every euro, traced to what it made.',
    who:'Analytics engineers',
    cap:'The shop\u2019s boosted post, the clinic\u2019s Google spend, the restaurant\u2019s reel \u2014 we trace each one from the ad to the click to the lead to the sale. Not clicks; euros. You finally see which spend actually turned into money.',
    stat:'100', statEm:'%', statP:'of your spend tied to the sales it truly drove', viz:'connect' },
  { n:'03', sp:'Winners vs losers', h:'We split winners from <em>losers.</em>', out:'A clear verdict on every channel.',
    who:'Strategists',
    cap:'Once spend is tied to sales, the truth is obvious: a few things make most of the money, and some quietly bleed it. We scale the winners and cut the losers \u2014 no loyalty to a channel just because you\u2019ve always used it.',
    stat:'80/20', statP:'of your return comes from a fraction of your spend \u2014 we find which', viz:'split' },
  { n:'04', sp:'The one move', h:'We tell you the <em>one move.</em>', out:'The decision, not the dashboard.',
    who:'Your strategist',
    cap:'Every month you get a straight answer a busy owner can act on in a minute: do more of this, stop that, here\u2019s the single move that matters most. Not forty charts \u2014 one decision, with the proof behind it.',
    stat:'1', statP:'clear move a month \u2014 what to do, backed by the numbers', viz:'decision' },
] as const;

const CL_VIZ: Record<string, () => string> = {
  matters() {
    const vain=['Likes','Impressions','Reach','Followers'],money=['Revenue','Cost / sale','Return','Repeat rate'];let s='';
    s+='<text class="lab up" x="106" y="26" font-size="10.5" text-anchor="middle" opacity=".4" style="animation-delay:.2s">noise</text>'+
       '<text class="labA up" x="296" y="26" font-size="10.5" text-anchor="middle" style="animation-delay:.6s">what matters</text>';
    vain.forEach((t,i)=>{const y=42+i*52;
      s+=`<rect class="wire up" x="30" y="${y}" width="152" height="38" rx="6" opacity=".38" style="animation-delay:${i*.08}s"/>`+
         `<text class="lab up" x="46" y="${y+24}" font-size="12.5" opacity=".38" style="animation-delay:${i*.08}s">${t}</text>`;});
    money.forEach((t,i)=>{const y=42+i*52;
      s+=`<rect class="up" x="218" y="${y}" width="152" height="38" rx="6" fill="rgba(61,123,255,.1)" stroke="${CL_AZ}" stroke-width="1.4" style="animation-delay:${.5+i*.1}s"/>`+
         `<text class="labA up" x="234" y="${y+24}" font-size="12.5" style="animation-delay:${.5+i*.1}s">${t}</text>`;});
    return `<svg viewBox="0 0 400 264">${s}</svg>`;
  },
  connect() {
    const st=[{x:52,l:'Spend'},{x:158,l:'Click'},{x:250,l:'Lead'},{x:348,l:'Sale'}],y=112;let s='';
    for(let i=0;i<st.length-1;i++){s+=`<path class="wire draw glow" style="--L:70;animation-delay:${i*.3}s" d="M${st[i].x+28},${y} L${st[i+1].x-28},${y}"/>`;}
    st.forEach((n,i)=>{const end=i===st.length-1;
      s+=`<circle class="${end?'nodeOn glow':'ring glow'} pop" cx="${n.x}" cy="${y}" r="25" style="animation-delay:${i*.25}s"/>`+
         `<text class="${end?'labk':'lab'} pop" x="${n.x}" y="${y+4}" font-size="10" font-weight="700" text-anchor="middle" style="animation-delay:${i*.25+.1}s">${n.l}</text>`;});
    s+=`<text class="labA up" x="52" y="${y+50}" font-size="12.5" text-anchor="middle" style="animation-delay:.2s">\u20ac in</text>`+
       `<text class="labA up" x="348" y="${y+50}" font-size="12.5" text-anchor="middle" style="animation-delay:1.1s">\u20ac out</text>`+
       `<text class="lab up" x="200" y="${y-44}" font-size="10.5" text-anchor="middle" opacity=".5" style="animation-delay:.4s">every euro, traced end to end</text>`;
    return `<svg viewBox="0 0 400 220">${s}</svg>`;
  },
  split() {
    const bars=[80,64,42,-32,-48],on=[1,1,1,0,0],mid=140,x0=58,bw=44,gap=24;let s='';
    s+=`<line class="wire" x1="30" y1="${mid}" x2="370" y2="${mid}" stroke-dasharray="4 4"/>`+
       `<text class="lab" x="34" y="${mid-7}" font-size="9.5" opacity=".5">break-even</text>`;
    bars.forEach((hh,i)=>{const x=x0+i*(bw+gap),h=Math.abs(hh),up=hh>0,y=up?mid-h:mid;
      s+=`<rect class="${on[i]?'nodeOn glow':'bad'} ${up?'grow':'growd'}" x="${x}" y="${y}" width="${bw}" height="${h}" rx="4" style="animation-delay:${i*.12}s"/>`;});
    s+=`<text class="labA up" x="102" y="${mid-98}" font-size="10.5" text-anchor="middle" style="animation-delay:.6s">scale these</text>`+
       `<text class="lab up" x="320" y="${mid+66}" font-size="10.5" text-anchor="middle" opacity=".6" style="animation-delay:.8s">cut these</text>`;
    return `<svg viewBox="0 0 400 258">${s}</svg>`;
  },
  decision() {
    const s='<rect class="ring glow up" x="38" y="38" width="324" height="150" rx="14" style="animation-delay:.1s"/>'+
      '<text class="lab up" x="62" y="74" font-size="10" letter-spacing="2.5" style="animation-delay:.2s">THIS MONTH</text>'+
      '<circle class="nodeOn glow pop" cx="74" cy="108" r="11" style="animation-delay:.5s"/>'+
      `<path class="draw" style="--L:22;animation-delay:.85s" d="M69,108 l4,5 l9,-10" stroke="${CL_INK}" stroke-width="2.4" fill="none" stroke-linecap="round"/>`+
      '<text class="labA up" x="96" y="113" font-size="14" font-weight="700" style="animation-delay:.6s">Do more: Instagram video</text>'+
      '<circle class="bad pop" cx="74" cy="152" r="11" style="animation-delay:.95s"/>'+
      `<path class="pop" style="animation-delay:1.15s" d="M69,147 l10,10 m0,-10 l-10,10" stroke="${CL_INK}" stroke-width="2.2" stroke-linecap="round"/>`+
      '<text class="lab up" x="96" y="157" font-size="14" style="animation-delay:1.05s">Stop: boosted posts</text>';
    return `<svg viewBox="0 0 400 228">${s}</svg>`;
  },
};

function ClarityContent({ onClose }: { onClose: () => void }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const boardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = 'clx-modal-css';
    if (!document.getElementById(id)) {
      const s = document.createElement('style');
      s.id = id; s.textContent = CL_CSS;
      document.head.appendChild(s);
    }
  }, []);

  // hero board reveal
  useEffect(() => {
    const b = boardRef.current; if (!b) return;
    const id = requestAnimationFrame(() => b.classList.add('go'));
    return () => cancelAnimationFrame(id);
  }, []);

  // scroll-triggered viz animations
  useEffect(() => {
    const io = new IntersectionObserver(
      es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('live'); io.unobserve(e.target); } }),
      { threshold: 0.3 }
    );
    wrapRef.current?.querySelectorAll('.clx .viz').forEach(v => io.observe(v));
    return () => io.disconnect();
  }, []);

  return (
    <div className="clx" ref={wrapRef}>
      <div className="hero">
        <p className="lbl">Tell me what&apos;s working</p>
        <h1>We tell you what&apos;s<br /><em>actually working.</em></h1>
        <p>Not a dashboard full of numbers you&apos;ll never read — one straight answer: what&apos;s making you money, what&apos;s wasting it, and what to do next. <b>Everyone hands you data. We hand you the decision.</b></p>

        <div className="board" ref={boardRef}>
          <div className="bhead"><b>What&apos;s working</b><s>this month</s></div>
          {CL_BOARD.map(([ch, v, on], i) => (
            <div key={i} className="brow" style={{ transitionDelay: `${.15+i*.13}s` }}>
              <span className="bch">{ch}</span>
              <span className={`bv ${on ? 'on' : 'off'}`}>{v}</span>
            </div>
          ))}
        </div>

        <div className="team">
          <s>The people on it</s>
          <div className="row">{CL_TEAM.map(t => <span key={t}>{t}</span>)}</div>
        </div>
      </div>

      <div className="shead">From noise to the answer</div>
      <div>
        {CL_PARTS.map((p, i) => (
          <section key={i} className="phase">
            <div className="idx"><b>{p.n}</b><s>{p.sp}</s></div>
            <h2 dangerouslySetInnerHTML={{ __html: p.h }} />
            <p className="out">{p.out}</p>
            <div className="viz" dangerouslySetInnerHTML={{ __html: CL_VIZ[p.viz]() }} />
            <p className="who">{p.who}</p>
            <p className="cap">{p.cap}</p>
            <div className="stat">
              <b dangerouslySetInnerHTML={{ __html: p.stat + ((p as {statEm?:string}).statEm ? `<em>${(p as {statEm?:string}).statEm}</em>` : '') }} />
              <p>{p.statP}</p>
            </div>
          </section>
        ))}
      </div>

      <div className="bonus">
        <s>Bonus, included</s>
        <h4>Oh — and a little tool, on us.</h4>
        <p>A small tool that watches your numbers and pings the team the moment one moves sharply — up or down — so nothing surprises you late. <b>Nice to have, not the main event.</b> The reading and the call are done by the people above.</p>
      </div>

      <div className="end">
        <div className="big">Stop guessing.<br /><span>Know.</span></div>
        <p>No more dashboards you don&apos;t read. Every euro traced to what it made, every channel judged, and one straight answer each month: what&apos;s working, what&apos;s not, and the single move to make next. <b>Decisions with proof, not hope.</b></p>
        <a href="/contact" onClick={onClose}>Get the straight answer →</a>
        <p className="foot">OARC — one team for the whole business. Malta.</p>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// AI STAFF CONTENT
// ────────────────────────────────────────────────────────────────────────────
// ─── AI STAFF — Graphite monochrome world (design sheet World D) ─────────────
const AIS_VI  = '#F5F5F3';
const AIS_INK = '#0B0C0D';

const AIS_CSS = `
.ais{
  --vi:#F5F5F3;--vi2:rgba(245,245,243,.9);
  --vig:rgba(245,245,243,.3);--vif:rgba(245,245,243,.08);
  --ink:#0B0C0D;--deep:#0B0C0D;--card:#131415;
  --c:#F5F5F3;--c70:rgba(245,245,243,.72);--c45:rgba(245,245,243,.46);
  --c26:rgba(245,245,243,.26);--c16:rgba(245,245,243,.16);
  --c10:rgba(245,245,243,.1);--line:rgba(245,245,243,.11);
  --e:cubic-bezier(.16,1,.3,1);
  background:#0B0C0D;color:#F5F5F3;
  font-family:'Schibsted Grotesk',var(--font-bricolage,'Bricolage Grotesque',sans-serif);
  -webkit-font-smoothing:antialiased;overflow-x:hidden}
.ais .hero{padding:1.8rem 20px 2.2rem;border-bottom:1px solid var(--line);position:relative;overflow:hidden}
.ais .hero::before{content:'';position:absolute;top:-40px;right:-60px;width:280px;height:280px;border-radius:50%;
  background:radial-gradient(circle,rgba(245,245,243,.09),rgba(245,245,243,.03) 45%,transparent 70%);filter:blur(10px)}
.ais .hero>*{position:relative}
.ais .hero .lbl{font-family:'Space Mono',monospace;font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--vi2)}
.ais .hero h1{font-size:clamp(2.3rem,9.4vw,3.4rem);font-weight:800;line-height:.98;letter-spacing:-.04em;margin-top:.7rem}
.ais .hero h1 em{font-style:normal;color:var(--vi2)}
.ais .hero>p{font-size:.96rem;color:var(--c70);line-height:1.55;margin-top:1rem;max-width:44ch}
.ais .hero>p b{color:var(--c);font-weight:600}
.ais .roster{margin-top:2rem;border:1px solid var(--line);border-radius:14px;background:var(--card);overflow:hidden;box-shadow:0 24px 60px rgba(0,0,0,.4)}
.ais .rtop{display:flex;align-items:center;gap:8px;padding:.75rem 1rem;border-bottom:1px solid var(--line);font-family:'Space Mono',monospace;font-size:9.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--c45)}
.ais .rtop i{width:6px;height:6px;border-radius:50%;background:var(--vi);box-shadow:0 0 8px var(--vig);display:inline-block;flex-shrink:0}
.ais .rgrid{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--line)}
.ais .rcard{background:var(--card);padding:1rem;opacity:0;transform:translateY(8px);transition:.5s var(--e)}
.ais .roster.go .rcard{opacity:1;transform:none}
.ais .rcard.hot{background:rgba(245,245,243,.06)}
.ais .rcard .rn{font-weight:700;font-size:.95rem;letter-spacing:-.01em}
.ais .rcard .rd{font-size:11.5px;color:var(--c45);margin-top:.2rem;line-height:1.3}
.ais .rcard .rs{margin-top:.6rem;display:inline-flex;align-items:center;gap:5px;font-family:'Space Mono',monospace;font-size:9px;letter-spacing:.1em;color:var(--vi2)}
.ais .rcard .rs i{width:5px;height:5px;border-radius:50%;background:var(--vi);box-shadow:0 0 6px var(--vig);display:inline-block;flex-shrink:0}
.ais .rfoot{padding:.75rem 1rem;border-top:1px solid var(--line);font-size:11px;color:var(--c45);text-align:center}
.ais .team{margin-top:1.6rem}
.ais .team s{font-family:'Space Mono',monospace;font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--c45);font-style:normal;text-decoration:none}
.ais .team .row{display:flex;flex-wrap:wrap;gap:6px;margin-top:.7rem}
.ais .team .row span{border:1px solid var(--line);padding:6px 10px;font-size:11px;color:var(--c70);border-radius:2px}
.ais .shead{padding:1.7rem 20px .4rem;font-family:'Space Mono',monospace;font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--c45);display:flex;align-items:center;gap:.8rem}
.ais .shead::after{content:'';flex:1;height:1px;background:var(--line)}
.ais .phase{padding:1.8rem 20px 2rem;border-top:1px solid var(--line)}
.ais .phase:first-of-type{border-top:0}
.ais .phase .idx{display:flex;align-items:baseline;gap:.6rem}
.ais .phase .idx b{font-family:'Space Mono',monospace;font-size:11px;font-weight:700;letter-spacing:.06em;color:var(--vi2)}
.ais .phase .idx s{font-family:'Space Mono',monospace;font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:var(--c45);text-decoration:none}
.ais .phase h2{font-size:clamp(1.9rem,7.8vw,2.5rem);font-weight:800;line-height:1.02;letter-spacing:-.035em;margin-top:1rem}
.ais .phase h2 em{font-style:normal;color:var(--vi2)}
.ais .out{font-size:clamp(1.25rem,5vw,1.55rem);color:var(--c);margin-top:.9rem;line-height:1.22;font-weight:500}
.ais .viz{margin-top:1.5rem;border:1px solid var(--line);border-radius:10px;background:var(--deep);position:relative;overflow:hidden;aspect-ratio:1/.78}
.ais .viz::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle at 1px 1px,rgba(245,245,243,.05) 1px,transparent 0);background-size:22px 22px;-webkit-mask-image:radial-gradient(130% 100% at 50% 45%,#000 45%,transparent 85%);mask-image:radial-gradient(130% 100% at 50% 45%,#000 45%,transparent 85%)}
.ais .viz svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
.ais .who{margin-top:1rem;display:flex;align-items:center;gap:8px;font-family:'Space Mono',monospace;font-size:11px;letter-spacing:.02em;color:var(--vi2)}
.ais .who::before{content:'';width:16px;height:1px;background:var(--vi);opacity:.5}
.ais .cap{margin-top:.7rem;font-size:.9rem;color:var(--c70);line-height:1.55}
.ais .cap b{color:var(--c);font-weight:600}
.ais .stat{margin-top:1.1rem;display:flex;align-items:baseline;gap:.7rem;padding-top:1rem;border-top:1px solid var(--line)}
.ais .stat b{font-size:clamp(2.4rem,11vw,3.2rem);font-weight:800;letter-spacing:-.05em;line-height:.85}
.ais .stat b em{font-family:'Space Mono',monospace;font-style:normal;font-size:.36em;font-weight:700;color:var(--vi2)}
.ais .stat p{font-size:11.5px;color:var(--c45);line-height:1.35;max-width:25ch}
.ais .diff{margin:1.7rem 20px 0;padding:0 0 0 16px;border-left:2px solid var(--vi);font-size:1.08rem;line-height:1.4;color:var(--c70)}
.ais .diff b{color:var(--c);font-weight:700}
.ais .value{margin:1.8rem 20px 0;border:1px solid var(--line);border-radius:14px;background:var(--card);overflow:hidden;box-shadow:0 20px 50px rgba(0,0,0,.3)}
.ais .vhead{padding:.85rem 1.1rem;border-bottom:1px solid var(--line);font-family:'Space Mono',monospace;font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--c45)}
.ais .vcompare{display:grid;grid-template-columns:1fr 1fr}
.ais .vcol{padding:1.1rem 1.05rem 1.3rem}
.ais .vcol+.vcol{border-left:1px solid var(--line)}
.ais .vcol.on{background:rgba(245,245,243,.06)}
.ais .vcol s{font-size:11px;font-weight:700;color:var(--c45);font-style:normal;text-decoration:none}
.ais .vcol.on s{color:var(--vi2)}
.ais .vcol ul{list-style:none;margin-top:.75rem;display:flex;flex-direction:column;gap:.55rem}
.ais .vcol li{font-size:12.5px;color:var(--c70);line-height:1.3;padding-left:16px;position:relative}
.ais .vcol.on li{color:var(--c)}
.ais .vcol li::before{content:'';position:absolute;left:0;top:6px;width:6px;height:6px;border-radius:50%;background:var(--c26)}
.ais .vcol.on li::before{background:var(--vi);box-shadow:0 0 6px var(--vig)}
.ais .vguarantee{padding:1rem 1.1rem;border-top:1px solid var(--line);font-size:.9rem;line-height:1.45;color:var(--c);background:rgba(245,245,243,.04)}
.ais .vguarantee b{color:var(--vi2)}
.ais .end{padding:2.4rem 20px calc(2.4rem + env(safe-area-inset-bottom));border-top:1px solid var(--line);margin-top:1.7rem;position:relative;overflow:hidden}
.ais .end::before{content:'';position:absolute;bottom:-80px;left:-40px;width:300px;height:300px;border-radius:50%;
  background:radial-gradient(circle,rgba(245,245,243,.09),transparent 68%);filter:blur(12px)}
.ais .end>*{position:relative}
.ais .end .big{font-size:clamp(2.5rem,10.5vw,3.6rem);font-weight:900;line-height:1;letter-spacing:-.04em}
.ais .end .big span{color:var(--vi2)}
.ais .end>p{font-size:.95rem;color:var(--c70);line-height:1.62;max-width:46ch;margin-top:1.1rem}
.ais .end>p b{color:var(--c);font-weight:600}
.ais .end a{display:block;margin-top:1.5rem;text-align:center;font-family:'Space Mono',monospace;font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--ink);background:var(--vi);text-decoration:none;padding:1.15rem;border-radius:6px;box-shadow:0 10px 30px rgba(245,245,243,.14)}
.ais .end .foot{font-family:'Space Mono',monospace;font-size:10px;color:var(--c26);letter-spacing:.03em;margin-top:1.4rem}
.ais .wire{stroke:var(--c16);stroke-width:1.25;fill:none}
.ais .node{fill:var(--c16)}.ais .nodeOn{fill:var(--vi)}
.ais .ring{fill:none;stroke:var(--vi);stroke-width:1.5}
.ais .lab{font-family:'Space Mono',monospace;font-weight:400;fill:var(--c70)}
.ais .labA{font-family:'Space Mono',monospace;font-weight:400;fill:var(--vi2)}
.ais .labk{font-family:'Space Mono',monospace;font-weight:700;fill:var(--ink)}
.ais .glow{filter:drop-shadow(0 0 8px var(--vig))}
.ais .draw{stroke-dasharray:var(--L,240);stroke-dashoffset:var(--L,240)}
.ais .viz.live .draw{animation:ais-draw 1.1s var(--e) forwards}
@keyframes ais-draw{to{stroke-dashoffset:0}}
.ais .pop{opacity:0;transform:scale(.4);transform-origin:center}
.ais .viz.live .pop{animation:ais-pop .5s var(--e) forwards}
@keyframes ais-pop{to{opacity:1;transform:scale(1)}}
.ais .up{opacity:0}
.ais .viz.live .up{animation:ais-up .6s var(--e) forwards}
@keyframes ais-up{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}
.ais .grow{transform:scaleY(0);transform-origin:50% 50%}
.ais .viz.live .grow{animation:ais-grw .7s var(--e) forwards}
@keyframes ais-grw{to{transform:scaleY(1)}}
@media(prefers-reduced-motion:reduce){
  .ais .up,.ais .pop,.ais .rcard{opacity:1;transform:none}
  .ais .draw{stroke-dashoffset:0}.ais .grow{transform:none}}
`;

// ─── AI STAFF — VIZ generators (monochrome: AIS_VI=white, AIS_INK=graphite) ──
const AIS_VIZ: Record<string, () => string> = {
  trained: () => {
    let s = `<rect class="wire up" x="30" y="30" width="340" height="200" rx="16" stroke-dasharray="6 6" style="animation-delay:.1s"/>` +
      `<text class="lab up" x="48" y="52" font-size="10.5" opacity=".6" style="animation-delay:.2s">your system · your data</text>` +
      `<circle class="nodeOn glow pop" cx="200" cy="132" r="30" style="animation-delay:.5s"/>` +
      `<text class="labk pop" x="200" y="136" font-size="9.5" font-weight="700" text-anchor="middle" style="animation-delay:.6s">TRAINED</text>`;
    const tools: [number,number,string][] = [[92,92,'CRM'],[308,94,'Calendar'],[90,180,'POS'],[310,180,'Inbox']];
    tools.forEach((t,i) => {
      s += `<path class="wire draw glow" style="--L:150;animation-delay:${(.7+i*.12).toFixed(2)}s" d="M200,132 L${t[0]},${t[1]}"/>` +
           `<circle class="ring glow pop" cx="${t[0]}" cy="${t[1]}" r="17" style="animation-delay:${(.9+i*.12).toFixed(2)}s"/>` +
           `<text class="lab pop" x="${t[0]}" y="${t[1]+4}" font-size="8.5" text-anchor="middle" style="animation-delay:${(1+i*.12).toFixed(2)}s">${t[2]}</text>`;
    });
    return `<svg viewBox="0 0 400 260">${s}</svg>`;
  },
  voice: () => {
    let s = `<text class="labA up" x="40" y="42" font-size="10.5" style="animation-delay:.2s">◉ live call</text>`;
    for (let i=0;i<22;i++){const h=12+((i*i*5)%56),on=i>2&&i<18;
      s+=`<rect class="${on?'nodeOn glow':'node'} grow" x="${36+i*15}" y="${122-h/2}" width="7" height="${h}" rx="3" style="animation-delay:${(i*.035).toFixed(3)}s"/>`;}
    s+=`<line class="wire" x1="36" y1="122" x2="366" y2="122" opacity=".22"/>` +
       `<rect class="up" x="108" y="178" width="184" height="42" rx="11" fill="rgba(245,245,243,.1)" stroke="${AIS_VI}" stroke-width="1.4" style="animation-delay:1s"/>` +
       `<text class="labA up" x="200" y="204" font-size="12.5" font-weight="700" text-anchor="middle" style="animation-delay:1.1s">Answered · booked · sold</text>`;
    return `<svg viewBox="0 0 400 250">${s}</svg>`;
  },
  workflow: () => {
    const y=68;
    let s=`<text class="labA up" x="40" y="32" font-size="10.5" style="animation-delay:.15s">1 message in → whole job done</text>`;
    const steps=[{x:58,l:'Take',t:'booking'},{x:170,l:'Update',t:'calendar'},{x:282,l:'Tell',t:'the team'}];
    for(let i=0;i<steps.length-1;i++)s+=`<path class="wire draw glow" style="--L:72;animation-delay:${(.3+i*.3).toFixed(2)}s" d="M${steps[i].x+22},${y} L${steps[i+1].x-22},${y}"/>`;
    steps.forEach((n,i)=>{s+=`<circle class="ring glow pop" cx="${n.x}" cy="${y}" r="21" style="animation-delay:${(i*.28).toFixed(2)}s"/>` +
      `<text class="lab pop" x="${n.x}" y="${y+3}" font-size="9" font-weight="700" text-anchor="middle" style="animation-delay:${(i*.28+.1).toFixed(2)}s">${n.l}</text>` +
      `<text class="lab up" x="${n.x}" y="${y+37}" font-size="8.5" text-anchor="middle" opacity=".5" style="animation-delay:${(i*.28+.2).toFixed(2)}s">${n.t}</text>`;});
    s+=`<path class="wire draw glow" style="--L:60;animation-delay:1.1s" d="M304,${y} L344,${y}"/>` +
       `<circle class="nodeOn glow pop" cx="366" cy="${y}" r="16" style="animation-delay:1.3s"/>` +
       `<path class="draw" style="--L:20;animation-delay:1.6s" d="M360,${y} l4,5 l8,-9" stroke="${AIS_INK}" stroke-width="2.2" fill="none" stroke-linecap="round"/>` +
       `<path class="wire draw" style="--L:80;animation-delay:1.4s" d="M170,90 L170,150"/>` +
       `<circle class="ring glow pop" cx="170" cy="172" r="20" style="animation-delay:1.6s"/>` +
       `<circle class="nodeOn pop" cx="170" cy="166" r="7" style="animation-delay:1.7s"/>` +
       `<path class="pop" style="animation-delay:1.8s" d="M158,185 q12,-15 24,0 z" fill="${AIS_VI}"/>` +
       `<text class="lab up" x="170" y="210" font-size="9" text-anchor="middle" opacity=".6" style="animation-delay:1.9s">odd case → a human</text>`;
    return `<svg viewBox="0 0 400 224">${s}</svg>`;
  },
  build: () => {
    let s=`<rect class="ring glow up" x="38" y="40" width="182" height="132" rx="10" style="animation-delay:.2s"/>` +
      `<line class="wire up" x1="38" y1="66" x2="220" y2="66" style="animation-delay:.3s"/>` +
      `<circle class="nodeOn pop" cx="54" cy="53" r="3" style="animation-delay:.4s"/>` +
      `<circle class="node pop" cx="66" cy="53" r="3" style="animation-delay:.45s"/>` +
      `<circle class="node pop" cx="78" cy="53" r="3" style="animation-delay:.5s"/>`;
    [0,1,2].forEach(i=>{s+=`<rect class="node up" x="58" y="${86+i*24}" width="${140-i*32}" height="10" rx="3" style="animation-delay:${(.6+i*.12).toFixed(2)}s"/>`;});
    s+=`<text class="lab up" x="129" y="192" font-size="9.5" text-anchor="middle" opacity=".6" style="animation-delay:1s">software, built to you</text>` +
       `<rect class="ring glow up" x="256" y="56" width="106" height="74" rx="8" style="animation-delay:.7s"/>` +
       `<circle class="nodeOn glow pop" cx="309" cy="93" r="15" style="animation-delay:.9s"/>` +
       `<rect class="wire up" x="299" y="134" width="20" height="24" rx="3" style="animation-delay:1s"/>` +
       `<text class="lab up" x="309" y="192" font-size="9.5" text-anchor="middle" opacity=".6" style="animation-delay:1.1s">screens · hardware</text>`;
    return `<svg viewBox="0 0 400 212">${s}</svg>`;
  },
  come: () => {
    const st=[{x:60,l:'Visit'},{x:180,l:'Research'},{x:300,l:'Build'}],y=88;
    let s='';
    for(let i=0;i<st.length-1;i++)s+=`<path class="wire draw glow" style="--L:96;animation-delay:${(i*.3).toFixed(2)}s" d="M${st[i].x+26},${y} L${st[i+1].x-26},${y}"/>`;
    st.forEach((n,i)=>{s+=`<circle class="ring glow pop" cx="${n.x}" cy="${y}" r="24" style="animation-delay:${(i*.25).toFixed(2)}s"/>` +
      `<text class="lab pop" x="${n.x}" y="${y+4}" font-size="9.5" font-weight="700" text-anchor="middle" style="animation-delay:${(i*.25+.1).toFixed(2)}s">${n.l}</text>`;});
    s+=`<text class="lab up" x="200" y="40" font-size="10.5" text-anchor="middle" opacity=".6" style="animation-delay:.2s">our people, at your table</text>` +
       `<rect class="up" x="118" y="148" width="164" height="44" rx="12" fill="rgba(245,245,243,.1)" stroke="${AIS_VI}" stroke-width="1.4" style="animation-delay:1.1s"/>` +
       `<text class="labA up" x="200" y="175" font-size="13" font-weight="700" text-anchor="middle" style="animation-delay:1.2s">Delivered in a week</text>`;
    return `<svg viewBox="0 0 400 210">${s}</svg>`;
  },
  audit: () => {
    let s=`<rect class="ring glow up" x="66" y="34" width="196" height="182" rx="12" style="animation-delay:.2s"/>` +
      `<text class="lab up" x="86" y="64" font-size="10.5" letter-spacing="1.5" style="animation-delay:.3s">YOUR AUDIT</text>`;
    [0,1,2,3].forEach(i=>{const y=94+i*30;
      s+=`<circle class="nodeOn glow pop" cx="96" cy="${y}" r="8" style="animation-delay:${(.5+i*.15).toFixed(2)}s"/>` +
         `<path class="draw" style="--L:16;animation-delay:${(.8+i*.15).toFixed(2)}s" d="M92,${y} l3,4 l7,-8" stroke="${AIS_INK}" stroke-width="2" fill="none" stroke-linecap="round"/>` +
         `<rect class="node up" x="116" y="${y-6}" width="${120-i*16}" height="10" rx="3" style="animation-delay:${(.6+i*.15).toFixed(2)}s"/>`;});
    s+=`<g class="pop" style="animation-delay:1.4s">` +
       `<circle cx="300" cy="92" r="34" fill="none" stroke="${AIS_VI}" stroke-width="2"/>` +
       `<text class="labA" x="300" y="88" font-size="15" font-weight="700" text-anchor="middle">FREE</text>` +
       `<text class="lab" x="300" y="104" font-size="7.5" text-anchor="middle">even if you say no</text></g>`;
    return `<svg viewBox="0 0 400 240">${s}</svg>`;
  },
};

const AIS_ROLES: [string,string,string,boolean][] = [
  ['Voice support','Answers every call & chat','24/7',true],
  ['Sales agent','Qualifies, books, never sleeps','ALWAYS ON',false],
  ['Concierge','Helps your customers, end to end','LIVE',false],
  ['Market research','Watches your competitors','ON',false],
  ['Back-office','Runs the repetitive ops','ON',false],
  ['Bespoke','Built for your exact problem','CUSTOM',false],
];
const AIS_TEAM = ['AI engineers','Conversation designers','Software & hardware','Business consultants','Strategists'];
const AIS_PARTS = [
  { n:'01',sp:'Trained on you',h:'Not chatbots. <em>Trained employees.</em>',
    out:'They know your business — and do the work.',who:'AI engineers',
    cap:'Not a chatbot bolted on. Each employee is trained on your prices, your rules, your tone and your data — plugged into the tools you already run, and it builds its own workflow when the job needs one. It works inside your system, and <b>your data never leaves it.</b>',
    stat:'100',statEm:'%',statP:'of your data stays in your system — owned by you, protected',viz:'trained'},
  { n:'02',sp:'The roles you hire',h:'Voice, sales, <em>concierge.</em>',
    out:'Every call, chat and customer, handled.',who:'Conversation designers',
    cap:'A voice agent that answers the clinic\'s calls and books them, takes the restaurant\'s orders, handles the shop\'s DMs, qualifies and sells — any hour, no queue. A concierge that helps your customers end to end. Research agents that watch your competitors while you sleep.',
    stat:'5',statEm:'sec',statP:'under five seconds to answer — any hour, no queue, never a bad day',viz:'voice'},
  { n:'03',sp:'They work together',h:'They work as <em>one team.</em>',
    out:'Not one bot — a workforce that runs the whole job.',who:'AI systems architects',
    cap:'One agent takes the booking, hands it to the next that updates your calendar, texts the customer and tells your team, then logs it — a whole process end to end, across the tools you already use. When something\'s off, it passes it to a person. <b>Real workflow automation, run by a team of agents that talk to each other.</b>',
    stat:'1',statEm:'msg',statP:'one message in — the whole workflow runs itself, end to end',viz:'workflow'},
  { n:'04',sp:'Built to your system',h:'Software and <em>hardware, built to you.</em>',
    out:'Not a SaaS tool. Built for you.',who:'Software & hardware engineers',
    cap:'When the job needs software, we build it to your system — not a rented SaaS tool you bend your business around. When it needs a screen, a kiosk, or hardware and robotics on the floor, we build and install that too.',
    stat:'7',statEm:'days',statP:'from problem to built and running — software or hardware',viz:'build'},
  { n:'05',sp:'How we deliver',h:'We <em>come to you.</em>',
    out:'We gather everything before we build anything.',who:'Engineer + business consultant',
    cap:'This isn\'t a login. A tech engineer and a business consultant come to you, learn your business, your market, its size and your customers, and take every problem you\'re carrying. Then we go back, research it with our strategists and your data, and return with the fixes — <b>plus the ones you were too busy to see.</b>',
    stat:'2',statEm:'',statP:'of our people at your table first — a tech engineer and a business consultant',viz:'come'},
  { n:'06',sp:'No risk to look',h:'A free audit, <em>either way.</em>',
    out:'Free audit and strategies — even if you say no.',who:'Your strategist',
    cap:'Even if you never sign, you keep the audit and the strategies — free. New to this, or not sure? Just call. We visit, we look, and we tell you honestly where AI would help — or that you don\'t need it yet, at your size, right now. <b>Adoption done right, or not at all.</b>',
    stat:'0',statEm:'€',statP:'the audit and strategies — free, even if you never work with us',viz:'audit'},
];

function AIStaffContent({ onClose }: { onClose: () => void }) {
  const rosterRef = useRef<HTMLDivElement>(null);
  const wrapRef   = useRef<HTMLDivElement>(null);

  // inject CSS + Schibsted Grotesk font once
  useEffect(() => {
    const id = "ais-styles";
    if (!document.getElementById(id)) {
      if (!document.getElementById("ais-font")) {
        const lk = document.createElement("link");
        lk.id = "ais-font"; lk.rel = "stylesheet";
        lk.href = "https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400;500;600;700;800;900&display=swap";
        document.head.appendChild(lk);
      }
      const el = document.createElement("style");
      el.id = id; el.textContent = AIS_CSS;
      document.head.appendChild(el);
    }
    return () => { document.getElementById(id)?.remove(); };
  }, []);

  // roster entrance animation
  useEffect(() => {
    const t = setTimeout(() => rosterRef.current?.classList.add("go"), 200);
    return () => clearTimeout(t);
  }, []);

  // scroll-triggered SVG animations (adds .live class to .viz)
  useEffect(() => {
    const io = new IntersectionObserver(
      es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add("live"); }),
      { threshold: 0.3 }
    );
    wrapRef.current?.querySelectorAll(".viz").forEach(v => io.observe(v));
    return () => io.disconnect();
  }, []);

  return (
    <div className="ais" ref={wrapRef}>
      {/* sticky top bar */}
      {/* hero */}
      <div className="hero">
        <p className="lbl">Pick your employee</p>
        <h1>Not chatbots.<br /><em>Employees that do the work.</em></h1>
        <p>Trained on your business, plugged into your systems, working under your control with your data protected — <b>voice support, sales, a concierge for your customers, research on your competitors,</b> and the software and hardware around them. Built and delivered by our people. In a week. In Malta.</p>

        <div className="roster" ref={rosterRef}>
          <div className="rtop"><i />Your business · your data · your control</div>
          <div className="rgrid">
            {AIS_ROLES.map(([name, desc, status, hot], i) => (
              <div key={i} className={`rcard${hot ? ' hot' : ''}`} style={{ transitionDelay: `${.12+i*.08}s` }}>
                <div className="rn">{name}</div>
                <div className="rd">{desc}</div>
                <div className="rs"><i />{status}</div>
              </div>
            ))}
          </div>
          <div className="rfoot">Trained on your business · your data stays yours</div>
        </div>

        <div className="team">
          <s>The people who build it</s>
          <div className="row">{AIS_TEAM.map((t,i) => <span key={i}>{t}</span>)}</div>
        </div>
      </div>

      {/* section divider */}
      <div className="shead">What you actually get</div>

      {/* 6 phases */}
      <div>
        {AIS_PARTS.map((p, i) => (
          <div key={i} className="phase">
            <div className="idx"><b>{p.n}</b><s>{p.sp}</s></div>
            <h2 dangerouslySetInnerHTML={{ __html: p.h }} />
            <p className="out">{p.out}</p>
            <div className="viz" dangerouslySetInnerHTML={{ __html: AIS_VIZ[p.viz]() }} />
            <p className="who">{p.who}</p>
            <p className="cap" dangerouslySetInnerHTML={{ __html: p.cap }} />
            <div className="stat">
              <b dangerouslySetInnerHTML={{ __html: p.stat + (p.statEm ? `<em>${p.statEm}</em>` : '') }} />
              <p>{p.statP}</p>
            </div>
          </div>
        ))}
      </div>

      {/* differentiator */}
      <p className="diff">Everyone sells you a chatbot login. <b>We build you a workforce that works.</b></p>

      {/* value comparison */}
      <div className="value">
        <div className="vhead">The value, plainly</div>
        <div className="vcompare">
          <div className="vcol">
            <s>Doing it by hand</s>
            <ul>
              <li>8 hours, 5 days</li>
              <li>Replies when someone&apos;s free</li>
              <li>A salary for every seat</li>
              <li>Off sick, on holiday, one at a time</li>
            </ul>
          </div>
          <div className="vcol on">
            <s>Your AI workforce</s>
            <ul>
              <li>24/7, every single day</li>
              <li>Answers in seconds</li>
              <li>A fraction of the cost</li>
              <li>Never off — and smarter every week</li>
            </ul>
          </div>
        </div>
        <div className="vguarantee"><b>Our promise:</b> if it hasn&apos;t taken real work off your plate in 30 days, we keep building until it does.</div>
      </div>

      {/* end manifesto */}
      <div className="end">
        <div className="big">The future isn&apos;t a chatbot.<br /><span>It&apos;s built today. Built right.</span></div>
        <p>Forget toy bots and busywork integrations. We build trained AI employees — moving toward intelligence that does the work for you, always under your control. Some call it ASI; we call it doing it properly. Done wrong, AI breaks businesses and the market with them. <b>So we build it today, and we build it right — here, in Malta.</b></p>
        <a href="#" onClick={(e) => { e.preventDefault(); onClose(); }}>Book your free audit →</a>
        <p className="foot">OARC — AI employees, built and delivered in Malta.</p>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// CREATIVE CONTENT — exact prototype port, gold/dark world
// src: make_su_look_like_a_billion_-_creat_1786497975381.txt
// ────────────────────────────────────────────────────────────────────────────
const CR_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..600;1,9..144,300..600&family=Space+Grotesk:wght@400;500;600;700&display=swap');
.cr{
  --bg:#100E0A;--bg2:#171410;--bone:#F2ECDD;--gold:#D9B26A;--goldd:#B98F3E;
  --b72:rgba(242,236,221,.72);--b50:rgba(242,236,221,.5);--b32:rgba(242,236,221,.32);
  --b18:rgba(242,236,221,.18);--b10:rgba(242,236,221,.1);
  --ui:'Space Grotesk',sans-serif;--serif:'Fraunces',serif;
  --e:cubic-bezier(.16,1,.3,1);
  background:var(--bg);color:var(--bone);font-family:var(--ui);
  -webkit-font-smoothing:antialiased;overflow-x:hidden}
.cr *{margin:0;padding:0;box-sizing:border-box}
.cr .wrap{max-width:960px;margin:0 auto;padding:0 22px}
.cr .bar{display:flex;justify-content:space-between;align-items:center;padding:16px 22px;max-width:960px;margin:0 auto}
.cr .bar .b{font-weight:700;font-size:14px;letter-spacing:-.02em}
.cr .bar .s{font-size:10px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:var(--b50)}
.cr .hero{padding:2.4rem 0 2.8rem}
.cr .kick{display:inline-block;font-size:11px;font-weight:600;letter-spacing:.22em;text-transform:uppercase;color:var(--gold);border:1px solid var(--b18);padding:.42rem .8rem;border-radius:30px}
.cr .hero h1{font-family:var(--serif);font-weight:300;font-size:clamp(2.9rem,12vw,6.2rem);line-height:.92;letter-spacing:-.03em;margin-top:1.3rem}
.cr .hero h1 em{font-style:italic;font-weight:400;color:var(--gold)}
.cr .hero .sub{font-size:clamp(1.06rem,1.9vw,1.3rem);color:var(--b72);line-height:1.55;margin-top:1.4rem;max-width:46ch}
.cr .stats{display:flex;flex-wrap:wrap;gap:1.6rem 2.4rem;margin-top:2.2rem}
.cr .stats .st b{display:block;font-family:var(--serif);font-weight:400;font-size:clamp(2.3rem,7.5vw,3.2rem);letter-spacing:-.02em;line-height:.85}
.cr .stats .st b em{font-style:italic;color:var(--gold)}
.cr .stats .st p{font-size:11.5px;color:var(--b50);line-height:1.4;margin-top:.55rem;max-width:18ch}
.cr .thesis{border-top:1px solid var(--b18);border-bottom:1px solid var(--b18);padding:2.4rem 0;margin:.6rem 0 0}
.cr .thesis .lead{font-size:11px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:var(--gold);margin-bottom:1rem}
.cr .thesis h2{font-family:var(--serif);font-weight:300;font-size:clamp(1.9rem,5.6vw,2.9rem);line-height:1.08;letter-spacing:-.02em;max-width:18ch}
.cr .thesis h2 em{font-style:italic;color:var(--gold)}
.cr .thesis p{font-size:1rem;color:var(--b72);line-height:1.62;margin-top:1.2rem;max-width:54ch}
.cr .mech{padding:2.6rem 0}
.cr .eyebrow{font-size:11px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:var(--b50);margin-bottom:.5rem}
.cr .rt{font-family:var(--serif);font-weight:300;font-size:clamp(1.7rem,5.2vw,2.5rem);line-height:1.05;letter-spacing:-.02em;margin-bottom:1.6rem}
.cr .rt em{font-style:italic;color:var(--gold)}
.cr .stage{display:grid;grid-template-columns:1fr 1fr;gap:.9rem}
.cr .spec{background:var(--bg2);border:1px solid var(--b10);border-radius:14px;padding:1rem .9rem 1.1rem}
.cr .spec .plate{height:96px;border-radius:9px;margin-bottom:.9rem;position:relative;overflow:hidden}
.cr .plate-plain{background:#26241d;display:flex;align-items:center;justify-content:center}
.cr .plate-plain::after{content:'YOUR BRAND';font-family:var(--ui);font-size:10px;letter-spacing:.15em;color:var(--b32);font-weight:600}
.cr .plate-craft{background:linear-gradient(150deg,#3a2f16,#1c1810);display:flex;align-items:center;justify-content:center;border:1px solid rgba(217,178,106,.3)}
.cr .plate-craft .mono{font-family:var(--serif);font-style:italic;font-size:2rem;color:var(--gold)}
.cr .plate-craft::before{content:'';position:absolute;inset:0;background:linear-gradient(120deg,transparent,rgba(217,178,106,.22),transparent);transform:translateX(-100%);animation:cr-sweep 3s var(--e) infinite}
@keyframes cr-sweep{to{transform:translateX(100%)}}
.cr .spec .lbl{font-size:10px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--b50)}
.cr .spec.after .lbl{color:var(--gold)}
.cr .spec .val{font-family:var(--serif);font-size:2.1rem;font-weight:400;line-height:1;margin:.5rem 0 .15rem;font-variant-numeric:tabular-nums}
.cr .spec.after .val{color:var(--gold)}
.cr .spec .vl{font-size:10px;color:var(--b50);margin-bottom:.6rem;height:1.1rem}
.cr .meter{height:6px;border-radius:6px;background:var(--b10);overflow:hidden}
.cr .meter .fill{height:100%;width:0;border-radius:6px;transition:width 1.2s var(--e)}
.cr .spec.before .fill{background:var(--b32)}
.cr .spec.after .fill{background:var(--gold)}
.cr .mcap{font-size:12px;color:var(--b50);line-height:1.5;margin-top:1.2rem;max-width:52ch}
.cr .mcap b{color:var(--gold);font-weight:600}
.cr .work-sec{padding:1.4rem 0}
.cr .roof{font-size:11px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:var(--b50);margin-bottom:.5rem}
.cr .rooftitle{font-family:var(--serif);font-weight:300;font-size:clamp(1.6rem,5vw,2.3rem);letter-spacing:-.02em;line-height:1.1;max-width:22ch;margin-bottom:1.8rem}
.cr .rooftitle em{font-style:italic;color:var(--gold)}
.cr .work{border-top:1px solid var(--b18);padding:2rem 0}
.cr .art{height:168px;border-radius:13px;position:relative;overflow:hidden;margin-bottom:1.2rem;background:linear-gradient(160deg,#1b1810,#121009);border:1px solid var(--b10);display:flex;align-items:center;justify-content:center}
.cr .art .ast{font-family:var(--serif);font-style:italic;font-size:5rem;color:var(--gold);line-height:1}
.cr .art .aa{font-family:var(--serif);font-size:4.4rem;color:var(--bone);letter-spacing:-.02em}
.cr .art.identity{background-image:radial-gradient(var(--b18) 1.2px,transparent 1.2px);background-size:17px 17px;background-color:#121009}
.cr .reel{width:66px;height:106px;border-radius:13px;border:1.5px solid var(--gold);position:relative;background:rgba(217,178,106,.06);display:flex;align-items:center;justify-content:center}
.cr .reel .rp{width:0;height:0;border-left:20px solid var(--gold);border-top:13px solid transparent;border-bottom:13px solid transparent;margin-left:4px}
.cr .reel::before{content:'';position:absolute;top:11px;left:11px;right:11px;height:4px;border-radius:3px;background:var(--b18)}
.cr .reel::after{content:'';position:absolute;bottom:13px;left:11px;width:32px;height:4px;border-radius:3px;background:var(--b18)}
.cr .play{width:0;height:0;border-left:36px solid var(--gold);border-top:23px solid transparent;border-bottom:23px solid transparent}
.cr .eq{position:absolute;bottom:26px;left:50%;transform:translateX(-50%);display:flex;gap:6px;align-items:flex-end;height:34px}
.cr .eq b{width:5px;background:var(--gold);border-radius:2px;height:10px;animation:cr-eq 1.1s var(--e) infinite}
.cr .eq b:nth-child(2){animation-delay:.15s}.cr .eq b:nth-child(3){animation-delay:.3s}
.cr .eq b:nth-child(4){animation-delay:.45s}.cr .eq b:nth-child(5){animation-delay:.6s}
@keyframes cr-eq{0%,100%{height:9px}50%{height:31px}}
.cr .ab{display:flex;gap:14px;align-items:center}
.cr .abx{width:60px;height:70px;border-radius:11px;border:1.5px solid var(--b18);display:flex;align-items:center;justify-content:center;font-family:var(--serif);font-size:1.7rem;color:var(--b50);position:relative}
.cr .abx.win{border-color:var(--gold);color:var(--gold);background:rgba(217,178,106,.1)}
.cr .abx.win::after{content:'\\2713';position:absolute;top:-9px;right:-9px;width:22px;height:22px;border-radius:50%;background:var(--gold);color:#100E0A;font-size:12px;display:flex;align-items:center;justify-content:center;font-family:var(--ui);font-weight:700}
.cr .dgrid{display:grid;grid-template-columns:repeat(6,1fr);gap:9px;width:138px}
.cr .dgrid i{width:13px;height:13px;border-radius:3px;background:var(--b18)}
.cr .dgrid i.on{background:var(--gold)}
.cr .art.ai::after{content:'';position:absolute;inset:0;background:linear-gradient(120deg,transparent,rgba(217,178,106,.28),transparent);transform:translateX(-100%);animation:cr-sweep 2.8s var(--e) infinite}
.cr .work .tag{font-size:9.5px;font-weight:600;letter-spacing:.15em;text-transform:uppercase;color:var(--gold);border:1px solid var(--b18);border-radius:20px;padding:.32rem .7rem;display:inline-block}
.cr .work h3{font-family:var(--serif);font-weight:400;font-size:clamp(1.8rem,5.6vw,2.5rem);letter-spacing:-.02em;line-height:1.02;margin-top:.9rem}
.cr .work h3 em{font-style:italic;color:var(--gold)}
.cr .work .role{font-size:10px;font-weight:600;letter-spacing:.15em;text-transform:uppercase;color:var(--b50);margin-top:.8rem}
.cr .work .body{font-size:1rem;color:var(--b72);line-height:1.62;margin-top:.7rem;max-width:56ch}
.cr .work .deliv{display:flex;flex-wrap:wrap;gap:.5rem;margin-top:1.1rem}
.cr .work .deliv span{font-size:11.5px;font-weight:500;color:var(--bone);background:var(--b10);border-radius:5px;padding:.44rem .74rem}
.cr .work .pf{margin-top:1.35rem;display:flex;align-items:baseline;gap:.75rem;border-left:2px solid var(--gold);padding-left:.95rem}
.cr .work .pf b{font-family:var(--serif);font-size:clamp(2rem,7vw,2.7rem);font-weight:400;line-height:.8}
.cr .work .pf b em{font-style:italic;color:var(--gold);font-size:.5em}
.cr .work .pf p{font-size:12px;color:var(--b50);line-height:1.35;max-width:26ch}
.cr .work.system{background:linear-gradient(160deg,rgba(217,178,106,.08),transparent);border:1px solid rgba(217,178,106,.34);border-radius:16px;padding:1.8rem 1.4rem;margin:.6rem 0}
.cr .work.system .ip{display:inline-flex;align-items:center;gap:.5rem;margin-top:1.3rem;font-size:10.5px;font-weight:600;letter-spacing:.11em;text-transform:uppercase;color:var(--gold)}
.cr .work.system .ip::before{content:'';width:7px;height:7px;border-radius:50%;background:var(--gold)}
.cr .proof-sec{padding:2.2rem 0;border-top:1px solid var(--b18)}
.cr .trow{border-top:1px solid var(--b10);padding:1.2rem 0}
.cr .trow:first-of-type{border-top:0}
.cr .trow .tlab{font-size:10px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--gold);display:block;margin-bottom:.5rem}
.cr .trow .tba{display:flex;align-items:center;gap:.7rem;flex-wrap:wrap}
.cr .trow .before{font-size:1rem;color:var(--b50);text-decoration:line-through;text-decoration-color:var(--b32)}
.cr .trow .arrow{color:var(--gold);font-weight:700;font-size:1.1rem}
.cr .trow .after{font-family:var(--serif);font-size:1.2rem;font-weight:400;color:var(--bone)}
.cr .tcap{font-size:12px;color:var(--b50);line-height:1.45;margin-top:1.2rem;max-width:52ch}
.cr .tcap b{color:var(--gold);font-weight:600}
.cr .guar{background:var(--bone);color:#100E0A;border-radius:16px;padding:2.4rem 1.6rem;margin:2.2rem 0}
.cr .guar .g-eye{font-size:11px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:var(--goldd)}
.cr .guar .g-big{font-family:var(--serif);font-weight:300;font-size:clamp(1.9rem,5.8vw,2.8rem);line-height:1.08;letter-spacing:-.02em;margin-top:1rem;max-width:19ch}
.cr .guar .g-big em{font-style:italic;color:var(--goldd)}
.cr .guar .g-sub{font-size:1rem;color:rgba(16,14,10,.72);line-height:1.6;margin-top:1.2rem;max-width:52ch}
.cr .guar .g-sig{font-family:var(--serif);font-style:italic;font-size:1.15rem;color:var(--goldd);margin-top:1.4rem}
.cr .faq{padding:2.2rem 0;border-top:1px solid var(--b18)}
.cr .qa{border-top:1px solid var(--b10);padding:1.4rem 0}
.cr .qa:first-of-type{border-top:0}
.cr .qa h4{font-family:var(--serif);font-weight:400;font-size:clamp(1.2rem,3.6vw,1.45rem);letter-spacing:-.01em;line-height:1.25}
.cr .qa p{font-size:.98rem;color:var(--b72);line-height:1.62;margin-top:.6rem;max-width:58ch}
.cr .end{padding:2.4rem 0 calc(3rem + env(safe-area-inset-bottom));border-top:1px solid var(--b18)}
.cr .step{display:flex;gap:1rem;border-top:1px solid var(--b10);padding:1.2rem 0}
.cr .step:first-of-type{border-top:0}
.cr .step .sn{font-family:var(--serif);font-style:italic;font-size:1.6rem;color:var(--gold);width:40px;flex-shrink:0;line-height:1}
.cr .step .sc h4{font-size:1.1rem;font-weight:600;letter-spacing:-.01em}
.cr .step .sc p{font-size:.96rem;color:var(--b72);line-height:1.55;margin-top:.3rem;max-width:52ch}
.cr .ident{font-size:1rem;color:var(--b72);line-height:1.62;margin:1.6rem 0 0;max-width:50ch}
.cr .ident b{color:var(--bone);font-weight:600}
.cr .end .big{font-family:var(--serif);font-weight:300;font-size:clamp(2.4rem,9vw,3.8rem);letter-spacing:-.02em;line-height:.98;margin-top:2rem}
.cr .end .big em{font-style:italic;color:var(--gold)}
.cr .end .k{font-size:clamp(1.05rem,1.9vw,1.3rem);color:var(--b72);line-height:1.45;margin-top:1.1rem;max-width:34ch}
.cr .end a{display:inline-flex;align-items:center;gap:.6rem;margin-top:1.6rem;font-size:12px;font-weight:600;letter-spacing:.13em;text-transform:uppercase;color:#100E0A;background:var(--gold);text-decoration:none;padding:1.1rem 1.8rem;border-radius:4px;transition:gap .3s var(--e),background .3s}
.cr .end a:hover{gap:1rem;background:var(--bone)}
.cr .reveal{opacity:0;transform:translateY(20px);transition:opacity .7s var(--e),transform .7s var(--e)}
.cr .reveal.in{opacity:1;transform:none}
@media(prefers-reduced-motion:reduce){.cr .reveal{opacity:1;transform:none}.cr .meter .fill{transition:none}
  .cr .plate-craft::before,.cr .art.ai::after,.cr .eq b{animation:none}}
`;

const CR_WORKS = [
  { tag:'Big Idea & Campaigns', system:false,
    art:`<div class="art"><span class="ast">&#10035;</span></div>`,
    h:`We find the idea <em>everyone repeats</em>.`,
    role:'Creative directors · strategists',
    body:'The concept a whole market ends up talking about — the campaign, the brand platform, the launch, the cultural moment. This is the firepower that separates brands people love from businesses people forget. Not a logo. The idea the logo serves.',
    deliv:['Brand platform','Campaigns','Launches','Cultural moments'],
    pf:'49', pfEm:'%', pfP:'of marketing return traces to the idea and creative', ip:'' },
  { tag:'Social & Content Studio', system:false,
    art:`<div class="art"><div class="reel"><span class="rp"></span></div></div>`,
    h:`We make you <em>impossible to scroll past</em>.`,
    role:'Social leads · writers · editors',
    body:'An always-on studio making the content that lives where your buyers already are — short-form, reels, skits, founder POV, trends and UGC — enough of it, on-brand, to be everywhere at once. This is the modern way brands get known, loved and chosen, day after day.',
    deliv:['Always-on social','Reels & skits','Founder POV','Trends & UGC'],
    pf:'50', pfEm:'ms', pfP:'is all you get to make an impression in the feed', ip:'' },
  { tag:'Brand & Identity', system:false,
    art:`<div class="art identity"><span class="aa">Aa</span></div>`,
    h:`We make you look like the <em>leader</em>.`,
    role:'Art direction · designers',
    body:'The identity system — logo, type, colour, art direction — engineered so you read as the biggest, most trusted name in the room, everywhere a buyer meets you. Consistency is what turns a business into a category leader instead of just another contender.',
    deliv:['Brand identity','Art direction','Design system','Guidelines'],
    pf:'20', pfEm:'%', pfP:'premium that strongly-branded businesses command (McKinsey)', ip:'' },
  { tag:'Film & Motion', system:false,
    art:`<div class="art"><span class="play"></span><div class="eq"><b></b><b></b><b></b><b></b><b></b></div></div>`,
    h:`We make you look <em>worth millions</em>.`,
    role:'Directors · editors · motion',
    body:'Film, motion and photography — the highest-attention formats there are — produced so a business looks like it is worth far more than it spends. The hero films and motion that make people stop, feel something, and believe you are the real thing.',
    deliv:['Hero films','Motion & VFX','Photography','Edit & post'],
    pf:'2.5', pfEm:'×', pfP:'the attention film earns over static, second for second', ip:'' },
  { tag:'Ad & Performance Creative', system:false,
    art:`<div class="art"><div class="ab"><div class="abx">A</div><div class="abx win">B</div></div></div>`,
    h:`We make ads that <em>actually convert</em>.`,
    role:'Performance creatives · editors',
    body:'The scroll-stopping creative that goes into your paid — hooks, static and video ads, endless variations built and tested to win. We make the work and find the winners; the media buying lives on its own card. Here we make the creative that makes the spend pay.',
    deliv:['Ad concepts & hooks','Static + video ads','Variation testing','Winning edits'],
    pf:'56', pfEm:'%', pfP:'of paid ROI is the ad creative, not the audience (Nielsen)', ip:'' },
  { tag:'AI Creative Engine', system:true,
    art:`<div class="art ai"><div class="dgrid"><i></i><i class="on"></i><i></i><i></i><i class="on"></i><i></i><i></i><i></i><i class="on"></i><i></i><i></i><i class="on"></i><i class="on"></i><i></i><i></i><i class="on"></i><i></i><i></i></div></div>`,
    h:`We build your brand <em>a brain</em>.`,
    role:'The one built thing · engineering',
    body:'The single piece of software in the engagement — an AI creative engine trained on your finished brand. It generates on-brand social posts, ad variations and content on demand, at a scale no team could match by hand. Our taste, running when we are not in the room. You own it outright, in your full IP control.',
    deliv:['On-brand asset engine','Social & ad variations','Trained on your brand','Yours to keep — full IP'],
    pf:'24', pfEm:'/7', pfP:'on-brand social and ad creative, without a queue',
    ip:'Trained on your brand · handed to you · your IP' },
];

const CR_FAQS = [
  { q:'How does creative make a business worth more?', a:'Creative is the biggest single lever in marketing ROI — around half of the return comes from the work itself, not the targeting. A stronger idea, a distinctive brand and content people remember make a business look bigger, feel more trusted, and able to charge more for the same product.' },
  { q:'How can a small business look like a big brand?', a:'With creative firepower, not a bigger budget. Buyers judge you in milliseconds, so a sharp idea, a distinctive identity, and enough on-brand content to be everywhere at once make a small company read as the category leader. People buy the business that looks like the leader.' },
  { q:'Do you make ads, or buy media?', a:'We make the ad creative — the hooks, static and video ads, and the variations tested to win — so your spend actually pays. The media buying, targeting and budgets live on our Media card; here we make the creative that makes the spend work.' },
  { q:'Do I own the designs and assets you create?', a:'Yes, in full. Every asset, the brand system, and the on-brand AI creative engine we build are handed to you in your complete IP control. You keep them and reuse them freely.' },
  { q:'Is this design, or strategy?', a:'Both, plus social, film, ad creative and AI. We are a creative and AI software agency — one team covering the idea and campaigns, the identity, the social and content, the film, the ad creative, and a system you own that makes on-brand work at scale.' },
];

const CR_PROOF = [
  { lab:'How big you look', before:'one of many', after:'the category leader' },
  { lab:'What you can charge', before:'the cheapest quote', after:'a premium, paid gladly' },
  { lab:'In the feed', before:'scrolled past', after:'screenshotted and shared' },
];

const CR_STEPS = [
  { n:'01', h:'Read', p:'We learn your business, your buyers and your market — and find the idea only you can own.' },
  { n:'02', h:'Make', p:'We build the brand, the social engine, the films and the ad creative — and the AI system that makes it at scale.' },
  { n:'03', h:'Scale', p:'We hand you the system, keep you consistent everywhere, and push the bar higher over time.' },
];

function CreativeContent({ onClose }: { onClose: () => void }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const mechRef = useRef<HTMLElement>(null);
  const vBeforeRef = useRef<HTMLDivElement>(null);
  const vAfterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = 'cr-modal-css';
    if (!document.getElementById(id)) {
      const s = document.createElement('style');
      s.id = id; s.textContent = CR_CSS;
      document.head.appendChild(s);
    }
  }, []);

  // reveal
  useEffect(() => {
    const io = new IntersectionObserver(
      es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }),
      { threshold: 0.14 }
    );
    wrapRef.current?.querySelectorAll('.reveal').forEach(n => io.observe(n));
    return () => io.disconnect();
  }, []);

  // mechanism: meter fill + count-up on view
  useEffect(() => {
    const mech = mechRef.current; if (!mech) return;
    const reduce = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const rafIds: number[] = [];
    function countTo(el: HTMLElement | null, target: number, ms: number) {
      if (!el) return;
      if (reduce) { el.textContent = String(target); return; }
      let start: number | null = null;
      function step(ts: number) {
        if (start === null) start = ts;
        const p = Math.min((ts - start) / ms, 1);
        el!.textContent = String(Math.round(p * target));
        if (p < 1) rafIds.push(requestAnimationFrame(step));
      }
      rafIds.push(requestAnimationFrame(step));
    }
    const mio = new IntersectionObserver(
      es => es.forEach(en => {
        if (en.isIntersecting) {
          mech.querySelectorAll<HTMLElement>('.meter .fill').forEach(f => { f.style.width = (f.getAttribute('data-v') || '0') + '%'; });
          countTo(vBeforeRef.current, 34, 1100);
          countTo(vAfterRef.current, 92, 1300);
          mio.unobserve(en.target);
        }
      }),
      { threshold: 0.4 }
    );
    mio.observe(mech);
    return () => { mio.disconnect(); rafIds.forEach(cancelAnimationFrame); };
  }, []);

  return (
    <div className="cr" ref={wrapRef}>
      <div className="bar"><span className="b">OARC</span><span className="s">Make us look like a billion</span></div>

      <div className="wrap">
        <section className="hero">
          <span className="kick">Creative firepower</span>
          <h1>Make us look<br />like a <em>billion.</em></h1>
          <p className="sub">Whatever your size, we make you look like the category leader — the brand people remember, screenshot, and pay a premium for. Big ideas, an always-on social engine, films, ad creative that converts, and a system that makes it all. One team, full firepower.</p>
          <div className="stats">
            <div className="st"><b>49<em>%</em></b><p>of marketing return is the creative itself</p></div>
            <div className="st"><b>50<em>ms</em></b><p>is all a buyer needs to judge your brand</p></div>
            <div className="st"><b>20<em>%</em></b><p>premium that leader-looking brands command</p></div>
          </div>
        </section>

        <section className="thesis reveal">
          <p className="lead">Why this matters now</p>
          <h2>Looking small is a <em>choice.</em></h2>
          <p>Buyers judge you in milliseconds, against brands with a hundred times your budget — and everyone now has the same average AI content. What closes that gap isn&apos;t a bigger spend. It&apos;s a sharper idea, a look that&apos;s unmistakably yours, and enough on-brand work to be everywhere at once. Firepower, not decoration. That&apos;s what a real creative team is for.</p>
        </section>

        <section className="mech reveal" ref={mechRef}>
          <p className="eyebrow">Watch what creative does</p>
          <h2 className="rt">Look like a contender. Or the <em>leader.</em></h2>
          <div className="stage">
            <div className="spec before">
              <div className="plate plate-plain" />
              <span className="lbl">Before</span>
              <div className="val" ref={vBeforeRef}>0</div>
              <div className="vl">looks like a startup</div>
              <div className="meter"><div className="fill" data-v="34" /></div>
            </div>
            <div className="spec after">
              <div className="plate plate-craft"><span className="mono">✳</span></div>
              <span className="lbl">After</span>
              <div className="val" ref={vAfterRef}>0</div>
              <div className="vl">looks like the leader</div>
              <div className="meter"><div className="fill" data-v="92" /></div>
            </div>
          </div>
          <p className="mcap"><b>Same company, same size — only the creative changed.</b> People don&apos;t buy the biggest business. They buy the one that looks like it. Raise how big you look and you raise your price, your pull and your permission to charge more.</p>
        </section>

        <section className="work-sec">
          <p className="roof reveal">The firepower, as one team</p>
          <div className="rooftitle reveal">Six crafts — <em>one point of view.</em></div>
          <div>
            {CR_WORKS.map((d, i) => (
              <div key={i} className={`work reveal${d.system ? ' system' : ''}`}>
                <div dangerouslySetInnerHTML={{ __html: d.art }} />
                <span className="tag">{d.tag}</span>
                <h3 dangerouslySetInnerHTML={{ __html: d.h }} />
                <p className="role">{d.role}</p>
                <p className="body">{d.body}</p>
                <div className="deliv">{d.deliv.map((x, j) => <span key={j}>{x}</span>)}</div>
                {d.ip && <span className="ip">{d.ip}</span>}
                <div className="pf">
                  <b dangerouslySetInnerHTML={{ __html: d.pf + (d.pfEm ? `<em>${d.pfEm}</em>` : '') }} />
                  <p>{d.pfP}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="proof-sec reveal">
          <p className="roof">What changes when we make it</p>
          <div className="rooftitle">The <em>before</em> and after.</div>
          {CR_PROOF.map((row, k) => (
            <div className="trow" key={k}>
              <span className="tlab">{row.lab}</span>
              <div className="tba">
                <span className="before">{row.before}</span>
                <span className="arrow">→</span>
                <span className="after">{row.after}</span>
              </div>
            </div>
          ))}
          <p className="tcap"><b>A typical engagement:</b> a brand that looks twice its size, content people keep, ads that pull their weight, and the confidence to raise prices. Illustrative of a full engagement.</p>
        </section>

        <section className="guar reveal">
          <p className="g-eye">Our guarantee</p>
          <div className="g-big">If the work doesn&apos;t make you look <em>bigger and worth more</em>, we keep going until it does.</div>
          <p className="g-sub">Creative is judged, not billed by the hour — so we don&apos;t charge for effort, we deliver work you&apos;d put your name on and a brand that reads like the leader. We refine until it&apos;s undeniable. You carry none of the risk of trying us.</p>
          <div className="g-sig">— OARC, your one team</div>
        </section>

        <section className="faq reveal">
          <p className="roof">Straight answers</p>
          <div className="rooftitle">The questions every owner <em>actually asks.</em></div>
          {CR_FAQS.map((f, k) => (
            <div className="qa" key={k}><h4>{f.q}</h4><p>{f.a}</p></div>
          ))}
        </section>

        <section className="end reveal">
          <p className="roof">How we start</p>
          <div className="start">
            {CR_STEPS.map((s, k) => (
              <div className="step" key={k}>
                <span className="sn">{s.n}</span>
                <div className="sc"><h4>{s.h}</h4><p>{s.p}</p></div>
              </div>
            ))}
          </div>
          <p className="ident">At the end of the day we&apos;re a <b>creative and AI software agency</b> — so you get the ideas, the firepower and a system you keep. Taste, made repeatable.</p>
          <div className="big">Look like a billion.<br /><em>Be worth it.</em></div>
          <p className="k">You keep every asset, the brand system, and the engine that makes more. We keep you looking like the leader.</p>
          <a href="/contact" onClick={onClose}>Book the creative audit →</a>
        </section>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// OPERATIONS CONTENT  (exact prototype port — light paper / green world)
// src: take_the_boing_work_off_yur_plate_-_1786575410249.txt
// ────────────────────────────────────────────────────────────────────────────
const OP_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700;800&family=Newsreader:ital,opsz,wght@1,6..72,400;1,6..72,500&display=swap');
.op{
  --paper:#F4F1EA;--card:#FBFAF6;--ink:#16150F;--em:#0E7A54;--emd:#0B6446;
  --i70:rgba(22,21,15,.7);--i50:rgba(22,21,15,.5);--i30:rgba(22,21,15,.32);
  --i16:rgba(22,21,15,.16);--i12:rgba(22,21,15,.12);--i08:rgba(22,21,15,.07);
  --emg:rgba(14,122,84,.28);--emf:rgba(14,122,84,.08);--line:rgba(22,21,15,.12);
  --ui:'Hanken Grotesk',sans-serif;--serif:'Newsreader',serif;--e:cubic-bezier(.16,1,.3,1);
  background:var(--paper);color:var(--ink);font-family:var(--ui);-webkit-font-smoothing:antialiased}
.op *{margin:0;padding:0;box-sizing:border-box}
.op .hero{padding:1.8rem 20px 2.2rem;border-bottom:1px solid var(--line)}
.op .hero .lbl{font-size:10.5px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--em)}
.op .hero h1{font-size:clamp(2.3rem,9.6vw,3.4rem);font-weight:800;line-height:.98;letter-spacing:-.04em;margin-top:.7rem}
.op .hero h1 em{font-family:var(--serif);font-style:italic;font-weight:400;font-size:1.1em;color:var(--em)}
.op .hero p{font-size:.98rem;color:var(--i70);line-height:1.55;margin-top:1rem;max-width:42ch}
.op .hero p b{color:var(--ink);font-weight:600}
.op .heroviz{margin-top:2rem;border:1px solid var(--line);border-radius:14px;background:var(--card);padding:1.2rem 1.1rem 1rem;box-shadow:0 1px 0 rgba(255,255,255,.6) inset,0 10px 30px rgba(22,21,15,.04)}
.op .heroviz .cap{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:.9rem}
.op .heroviz .cap b{font-size:12px;font-weight:700;letter-spacing:.02em}
.op .heroviz .cap s{font-size:10.5px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--i30);font-style:normal;text-decoration:none}
.op .wk{width:100%;display:block}
.op .wk .lblx{font-family:'Hanken Grotesk';font-weight:700;fill:var(--i30);font-size:11px;text-anchor:middle}
.op .wk rect.c{fill:var(--i16);transition:fill .7s var(--e),stroke .7s var(--e);stroke:transparent;stroke-width:1.4}
.op .wk.cleared rect.cl{fill:var(--emf);stroke:var(--em)}
.op .hcount{margin-top:.9rem;display:flex;align-items:center;gap:.6rem;opacity:0;transform:translateY(6px);transition:.6s var(--e)}
.op .heroviz.cleared .hcount{opacity:1;transform:none}
.op .hcount b{font-family:var(--serif);font-style:italic;font-weight:500;font-size:1.5rem;color:var(--em)}
.op .hcount span{font-size:12px;color:var(--i50);line-height:1.3}
.op .hero .team{margin-top:1.7rem}
.op .hero .team s{font-size:10px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--i50);font-style:normal;text-decoration:none}
.op .hero .team .row{display:flex;flex-wrap:wrap;gap:6px;margin-top:.7rem}
.op .hero .team .row span{border:1px solid var(--line);padding:6px 10px;font-size:11px;color:var(--i70);border-radius:2px;background:var(--card)}
.op .shead{padding:1.7rem 20px .4rem;font-size:10.5px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--i50);display:flex;align-items:center;gap:.8rem}
.op .shead::after{content:'';flex:1;height:1px;background:var(--line)}
.op .phase{padding:1.8rem 20px 2rem;border-top:1px solid var(--line)}
.op .phase:first-of-type{border-top:0}
.op .phase .idx{display:flex;align-items:baseline;gap:.6rem;font-variant-numeric:tabular-nums}
.op .phase .idx b{font-size:11px;font-weight:800;letter-spacing:.12em;color:var(--em)}
.op .phase .idx s{font-size:10.5px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--i50);text-decoration:none}
.op .phase h2{font-size:clamp(2rem,8.2vw,2.6rem);font-weight:800;line-height:1;letter-spacing:-.035em;margin-top:1rem}
.op .phase h2 em{font-family:var(--serif);font-style:italic;font-weight:400;font-size:1.14em;color:var(--em)}
.op .phase .out{font-family:var(--serif);font-style:italic;font-size:clamp(1.35rem,5.5vw,1.7rem);color:var(--ink);margin-top:.9rem;line-height:1.14}
.op .viz{margin-top:1.5rem;border:1px solid var(--line);border-radius:10px;background:var(--card);position:relative;overflow:hidden;aspect-ratio:1/.78;box-shadow:0 1px 0 rgba(255,255,255,.6) inset}
.op .viz::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle at 1px 1px,rgba(22,21,15,.05) 1px,transparent 0);background-size:22px 22px;mask-image:radial-gradient(130% 100% at 50% 45%,#000 45%,transparent 85%)}
.op .viz svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
.op .who{margin-top:1rem;display:flex;align-items:center;gap:8px;font-size:11px;font-weight:700;letter-spacing:.02em;color:var(--em)}
.op .who::before{content:'';width:16px;height:1px;background:var(--em);opacity:.5}
.op .cap{margin-top:.7rem;font-size:.9rem;color:var(--i70);line-height:1.55}
.op .cap b{color:var(--ink);font-weight:600}
.op .stat{margin-top:1.1rem;display:flex;align-items:baseline;gap:.7rem;padding-top:1rem;border-top:1px solid var(--line)}
.op .stat b{font-size:clamp(2.4rem,11vw,3.2rem);font-weight:800;letter-spacing:-.05em;line-height:.85;font-variant-numeric:tabular-nums}
.op .stat b em{font-family:var(--serif);font-style:italic;font-size:.42em;color:var(--em);font-weight:500}
.op .stat p{font-size:11.5px;color:var(--i50);line-height:1.35;max-width:25ch}
.op .bonus{margin:0 20px;padding:1.3rem 1.4rem;border:1px dashed var(--line);border-radius:10px;background:var(--card)}
.op .bonus s{font-size:10px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--i50);font-style:normal;text-decoration:none}
.op .bonus h4{font-family:var(--serif);font-style:italic;font-size:1.3rem;font-weight:400;margin:.4rem 0 .5rem}
.op .bonus p{font-size:.88rem;color:var(--i70);line-height:1.55}
.op .bonus p b{color:var(--ink);font-weight:600}
.op .end{padding:2.2rem 20px calc(2.4rem + env(safe-area-inset-bottom));border-top:1px solid var(--line);margin-top:1.7rem}
.op .end .big{font-family:var(--serif);font-style:italic;font-size:clamp(2.6rem,11vw,3.6rem);font-weight:400;line-height:1.02;letter-spacing:-.01em}
.op .end .big span{color:var(--em)}
.op .end p{font-size:.95rem;color:var(--i70);line-height:1.6;max-width:44ch;margin-top:1rem}
.op .end p b{color:var(--ink);font-weight:600}
.op .end a{display:block;margin-top:1.4rem;text-align:center;font-size:12px;font-weight:800;letter-spacing:.13em;text-transform:uppercase;color:var(--paper);background:var(--em);text-decoration:none;padding:1.15rem;border-radius:6px}
.op .end .foot{font-size:11px;color:var(--i30);letter-spacing:.04em;margin-top:1.4rem}
.op .wire{stroke:var(--i16);stroke-width:1.25;fill:none}
.op .node{fill:var(--i12)} .op .nodeOn{fill:var(--em)}
.op .ring{fill:none;stroke:var(--em);stroke-width:1.5}
.op .lab{font-family:'Hanken Grotesk';font-weight:600;fill:var(--i70)}
.op .labk{font-family:'Hanken Grotesk';font-weight:800;fill:var(--paper)}
.op .glow{filter:drop-shadow(0 0 7px var(--emg))}
.op .draw{stroke-dasharray:var(--L,240);stroke-dashoffset:var(--L,240)}
.op .live .draw{animation:op-draw 1.1s var(--e) forwards}
@keyframes op-draw{to{stroke-dashoffset:0}}
.op .pop{opacity:0;transform:scale(.4);transform-origin:center}
.op .live .pop{animation:op-pop .5s var(--e) forwards}
@keyframes op-pop{to{opacity:1;transform:scale(1)}}
.op .up{opacity:0}
.op .live .up{animation:op-up .6s var(--e) forwards}
@keyframes op-up{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}
.op .growx{transform:scaleX(0);transform-origin:left center}
.op .live .growx{animation:op-grwx .9s var(--e) forwards}
@keyframes op-grwx{to{transform:scaleX(1)}}
@media(prefers-reduced-motion:reduce){.op *{animation:none!important;transition-duration:.01ms!important}.op .up,.op .pop{opacity:1;transform:none}.op .draw{stroke-dashoffset:0}.op .growx{transform:none}}
`;

const OP_PAPER = '#F4F1EA', OP_EM = '#0E7A54';
const OP_TEAM = ['Operations strategists','Systems builders','Automation engineers','Your account lead'];
const OP_PARTS = [
  { n:'01', sp:'Where your time goes', h:'We find where your <em>time goes.</em>', out:'The week you can\u2019t see, mapped.',
    who:'Operations strategists',
    cap:'We follow how your business actually runs for a week and map every repeating job \u2014 the same questions answered, the bookings, the chasing, the entering, the reports. The restaurant re-ordering stock, the clinic confirming appointments, the shop replying to the same DM. You feel busy; <b>we show you exactly where it goes.</b>',
    stat:'40', statEm:'%', statP:'of the average owner\u2019s week goes to work that doesn\u2019t grow the business', viz:'audit' },
  { n:'02', sp:'Off your plate', h:'We take the <em>repetitive</em> jobs.', out:'The work that ate your day \u2014 gone.',
    who:'Systems builders',
    cap:'Answering, booking, reminders, follow-ups, invoicing and chasing, data entry, the weekly report \u2014 the jobs that don\u2019t need you, but eat your day. We take them off your plate one by one, until the week is yours again.',
    stat:'20', statEm:'+', statP:'recurring jobs a typical business hands off', viz:'take' },
  { n:'03', sp:'Runs itself', h:'We build it to <em>run itself.</em>', out:'Set up once. Runs every day.',
    who:'Automation engineers',
    cap:'Our people design the system and wire it into the tools you already use, so the work happens on its own \u2014 triggered, handled, done \u2014 without anyone remembering to do it. Set up once by people who\u2019ve done it before; it runs every day after.',
    stat:'24/7', statP:'it runs without you \u2014 nights, weekends, holidays', viz:'flow' },
  { n:'04', sp:'You stay in charge', h:'You stay <em>in charge.</em>', out:'Nothing happens you can\u2019t see or stop.',
    who:'Your account lead',
    cap:'Every action is logged, there\u2019s one switch to pause anything, and a real person on our side owns the exceptions \u2014 the odd case a system shouldn\u2019t decide. It works on its own, but it\u2019s never out of your hands.',
    stat:'1', statEm:'tap', statP:'to pause anything \u2014 you\u2019re always in control', viz:'control' },
] as const;

const OP_VIZ: Record<string, () => string> = {
  audit() {
    const rows = [{l:'Answering',v:.92,on:1},{l:'Booking',v:.72,on:1},{l:'Chasing',v:.56,on:0},{l:'Data entry',v:.44,on:0},{l:'Reports',v:.34,on:0}];
    let s=''; const y0=30,gap=42,maxw=250,x0=118;
    let y=y0;
    rows.forEach((r,i)=>{ y=y0+i*gap;
      s+=`<text class="lab up" x="${x0-12}" y="${y+17}" font-size="12.5" text-anchor="end" style="animation-delay:${i*.1}s">${r.l}</text>`+
         `<rect class="${r.on?'nodeOn glow':'node'} growx" x="${x0}" y="${y}" width="${maxw*r.v}" height="24" rx="4" style="animation-delay:${i*.1+.1}s"/>`;});
    s+=`<text class="lab up" x="${x0}" y="${y0+5*gap-4}" font-size="10.5" style="animation-delay:.7s" opacity=".55">hours a week \u2014 biggest sinks first</text>`;
    return `<svg viewBox="0 0 400 250">${s}</svg>`;
  },
  take() {
    const tasks=['Reply to the same DM','Confirm bookings','Chase invoices','Send reminders','Weekly report','Data entry']; let s='';
    tasks.forEach((t,i)=>{ const y=22+i*40,gone=i<4;
      s+=`<rect class="wire up" x="46" y="${y}" width="248" height="30" rx="8"${gone?' opacity=".4"':''} style="animation-delay:${i*.09}s"/>`+
         `<text class="lab up" x="62" y="${y+20}" font-size="12.5"${gone?' opacity=".42"':''} style="animation-delay:${i*.09+.05}s">${t}</text>`+
         `<circle class="${gone?'nodeOn glow':'node'} pop" cx="318" cy="${y+15}" r="13" style="animation-delay:${.6+i*.11}s"/>`;
      if(gone)s+=`<path class="draw" style="--L:26;animation-delay:${.9+i*.11}s" d="M311,${y+15} l5,6 l10,-11" stroke="${OP_PAPER}" stroke-width="2.6" fill="none" stroke-linecap="round"/>`;});
    s+=`<text class="lab up" x="46" y="278" font-size="10.5" style="animation-delay:1.1s" opacity=".55">handled \u2014 off your plate</text>`;
    return `<svg viewBox="0 0 400 292">${s}</svg>`;
  },
  flow() {
    const nodes=[{x:64,l:'Trigger'},{x:200,l:'Steps'},{x:336,l:'Done'}],y=104; let s='';
    s+=`<path class="wire draw glow" style="--L:96" d="M92,${y} L172,${y}"/>`+
       `<path class="wire draw glow" style="--L:96;animation-delay:.3s" d="M228,${y} L308,${y}"/>`;
    nodes.forEach((n,i)=>{
      s+=`<circle class="${i===2?'nodeOn glow':'ring glow'} pop" cx="${n.x}" cy="${y}" r="24" style="animation-delay:${i*.25}s"/>`+
         `<text class="${i===2?'labk':'lab'} pop" x="${n.x}" y="${y+4}" font-size="11" font-weight="800" text-anchor="middle" style="animation-delay:${i*.25+.1}s">${n.l}</text>`;});
    s+=`<path class="wire draw" style="--L:400;animation-delay:1s" d="M336,132 C336,204 64,204 64,132"/>`+
       `<path class="pop" style="animation-delay:1.8s" d="M64,132 l-5,-14 l13,4 z" fill="${OP_EM}"/>`+
       `<text class="lab up" x="200" y="200" font-size="10.5" text-anchor="middle" opacity=".55" style="animation-delay:1.2s">every day, on its own</text>`;
    return `<svg viewBox="0 0 400 224">${s}</svg>`;
  },
  control() {
    const rows=['09:02   Booking confirmed','09:14   Invoice chased','09:31   Reminder sent']; let s='';
    rows.forEach((t,i)=>{ const y=30+i*42;
      s+=`<rect class="wire up" x="40" y="${y}" width="236" height="32" rx="8" style="animation-delay:${i*.14}s"/>`+
         `<circle class="nodeOn glow pop" cx="60" cy="${y+16}" r="5" style="animation-delay:${i*.14+.1}s"/>`+
         `<text class="lab up" x="78" y="${y+21}" font-size="12" style="animation-delay:${i*.14+.1}s">${t}</text>`;});
    s+=`<rect class="ring glow up" x="300" y="30" width="58" height="116" rx="18" style="animation-delay:.5s"/>`+
       `<circle class="nodeOn glow pop" cx="329" cy="62" r="17" style="animation-delay:.8s"/>`+
       `<rect x="324" y="54" width="4" height="16" rx="2" fill="${OP_PAPER}" class="pop" style="animation-delay:1s"/>`+
       `<rect x="331" y="54" width="4" height="16" rx="2" fill="${OP_PAPER}" class="pop" style="animation-delay:1s"/>`+
       `<text class="lab up" x="329" y="160" font-size="10.5" text-anchor="middle" style="animation-delay:1.1s">pause</text>`+
       `<text class="lab up" x="40" y="182" font-size="10.5" opacity=".55" style="animation-delay:1s">every action logged \u00b7 one tap to stop</text>`;
    return `<svg viewBox="0 0 400 200">${s}</svg>`;
  },
};

function OperationsContent({ onClose }: { onClose: () => void }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const wkRef = useRef<SVGSVGElement>(null);
  const herovizRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = 'op-modal-css';
    if (!document.getElementById(id)) {
      const s = document.createElement('style');
      s.id = id; s.textContent = OP_CSS;
      document.head.appendChild(s);
    }
  }, []);

  // hero week grid — build + clear
  useEffect(() => {
    const wk = wkRef.current; if (!wk) return;
    const heights = [4,5,3,5,4,2,1]; let svg = '';
    for (let i=0;i<7;i++){
      const x=22+i*52;
      svg+=`<text class="lblx" x="${x+18}" y="16">${'MTWTFSS'[i]}</text>`;
      for (let r=0;r<5;r++){
        const filled=r>=(5-heights[i]); if(!filled)continue;
        const essential=(r===4); const y=30+r*28;
        svg+=`<rect class="c${essential?'':' cl'}" x="${x}" y="${y}" width="36" height="22" rx="4"/>`;
      }
    }
    wk.innerHTML = svg;
    const t = setTimeout(()=>{ wk.classList.add('cleared'); herovizRef.current?.classList.add('cleared'); }, 900);
    return () => clearTimeout(t);
  }, []);

  // reveal viz on scroll
  useEffect(() => {
    const io = new IntersectionObserver(
      es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('live'); io.unobserve(e.target); } }),
      { threshold: 0.3 }
    );
    wrapRef.current?.querySelectorAll('.op .viz').forEach(v => io.observe(v));
    return () => io.disconnect();
  }, []);

  return (
    <div className="op" ref={wrapRef}>
      <div className="hero">
        <p className="lbl">Your week, given back</p>
        <h1>Take the boring work<br /><em>off your plate.</em></h1>
        <p>Every week you lose hours to the same repetitive jobs — answering, booking, chasing, entering, reporting. <b>We find all of it, take it off you, and build it to run itself.</b> You get the one thing you can&apos;t buy back: time.</p>

        <div className="heroviz" ref={herovizRef}>
          <div className="cap"><b>A normal week</b><s>watch it clear</s></div>
          <svg className="wk" ref={wkRef} viewBox="0 0 400 176" preserveAspectRatio="xMidYMid meet" />
          <div className="hcount"><b>≈ 13 hrs</b><span>handed back to you,<br />every single week</span></div>
        </div>

        <div className="team">
          <s>The people on it</s>
          <div className="row">
            {OP_TEAM.map(t => <span key={t}>{t}</span>)}
          </div>
        </div>
      </div>

      <div className="shead">How the work leaves your plate</div>

      <div>
        {OP_PARTS.map((p, i) => (
          <section key={i} className="phase">
            <div className="idx"><b>{p.n}</b><s>{p.sp}</s></div>
            <h2 dangerouslySetInnerHTML={{ __html: p.h }} />
            <p className="out">{p.out}</p>
            <div className="viz" dangerouslySetInnerHTML={{ __html: OP_VIZ[p.viz]() }} />
            <p className="who">{p.who}</p>
            <p className="cap" dangerouslySetInnerHTML={{ __html: p.cap }} />
            <div className="stat">
              <b dangerouslySetInnerHTML={{ __html: p.stat + ((p as {statEm?:string}).statEm ? `<em>${(p as {statEm?:string}).statEm}</em>` : '') }} />
              <p>{p.statP}</p>
            </div>
          </section>
        ))}
      </div>

      <div className="bonus">
        <s>Bonus, included</s>
        <h4>Oh — and a little tool, on us.</h4>
        <p>A small assistant that drafts the repetitive replies for a human to approve, so even the answering gets faster. <b>Nice to have, not the main event.</b> The system is designed and owned by the people above.</p>
      </div>

      <div className="end">
        <div className="big">You get your<br /><span>week back.</span></div>
        <p>The repetitive work — found, taken off you, and built to run itself, with your team owning it and you in control. What comes back is hours, every week, for the work that actually grows the business. <b>That&apos;s the whole point.</b></p>
        <a href="/contact" onClick={onClose}>Get your week back →</a>
        <p className="foot">OARC — one team for the whole business. Malta.</p>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// AUTOMATION CONTENT  (exact prototype port — dark mint world)
// src: business_that_runs_itself_aia_nd_au_1786575410241.txt
// ────────────────────────────────────────────────────────────────────────────
const AU_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Martian+Mono:wght@400;500&display=swap');
.au{
  --ink:#0A0C0F;--deep:#06070A;--card:#12151A;--c:#EAF0EC;--mint:#34E39B;--mintd:#22B87C;
  --c70:rgba(234,240,236,.72);--c45:rgba(234,240,236,.46);--c26:rgba(234,240,236,.26);
  --c16:rgba(234,240,236,.15);--c10:rgba(234,240,236,.08);
  --mg:rgba(52,227,155,.45);--mf:rgba(52,227,155,.12);--line:rgba(234,240,236,.12);
  --ui:'Plus Jakarta Sans',sans-serif;--mono:'Martian Mono',monospace;--e:cubic-bezier(.16,1,.3,1);
  background:var(--ink);color:var(--c);font-family:var(--ui);-webkit-font-smoothing:antialiased}
.au *{margin:0;padding:0;box-sizing:border-box}
.au .hero{padding:1.8rem 20px 2.2rem;border-bottom:1px solid var(--line)}
.au .hero .lbl{font-family:var(--mono);font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:var(--mint)}
.au .hero h1{font-size:clamp(2.4rem,9.4vw,3.6rem);font-weight:800;line-height:.98;letter-spacing:-.04em;margin-top:.8rem}
.au .hero h1 em{font-style:normal;color:var(--mint)}
.au .hero p{font-size:.98rem;color:var(--c70);line-height:1.58;margin-top:1rem;max-width:44ch}
.au .hero p b{color:var(--c);font-weight:700}
.au .frame{margin-top:2rem;border:1px solid var(--line);border-radius:14px;background:var(--card);padding:1.3rem 1rem 1rem;box-shadow:0 20px 50px rgba(0,0,0,.4)}
.au .frame .fc{text-align:center;font-family:var(--mono);font-size:9.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--c26);margin-bottom:.4rem}
.au .frame svg{width:100%;display:block;overflow:visible}
.au .hero .team{margin-top:1.7rem}
.au .hero .team s{font-family:var(--mono);font-size:9.5px;letter-spacing:.05em;text-transform:uppercase;color:var(--c45);font-style:normal;text-decoration:none}
.au .hero .team .row{display:flex;flex-wrap:wrap;gap:6px;margin-top:.7rem}
.au .hero .team .row span{border:1px solid var(--line);padding:6px 10px;font-size:11px;color:var(--c70);border-radius:2px}
.au .shead{padding:1.7rem 20px .4rem;font-family:var(--mono);font-size:10px;letter-spacing:.05em;text-transform:uppercase;color:var(--c45);display:flex;align-items:center;gap:.8rem}
.au .shead::after{content:'';flex:1;height:1px;background:var(--line)}
.au .phase{padding:1.8rem 20px 2rem;border-top:1px solid var(--line)}
.au .phase:first-of-type{border-top:0}
.au .phase .idx{display:flex;align-items:baseline;gap:.6rem}
.au .phase .idx b{font-family:var(--mono);font-size:10.5px;font-weight:500;color:var(--mint)}
.au .phase .idx s{font-family:var(--mono);font-size:10px;letter-spacing:.04em;text-transform:uppercase;color:var(--c45);text-decoration:none}
.au .phase h2{font-size:clamp(2rem,8.2vw,2.6rem);font-weight:800;line-height:1;letter-spacing:-.035em;margin-top:1rem}
.au .phase h2 em{font-style:normal;color:var(--mint)}
.au .phase .out{font-size:clamp(1.3rem,5.2vw,1.6rem);color:var(--c);margin-top:.9rem;line-height:1.2;font-weight:500}
.au .viz{margin-top:1.5rem;border:1px solid var(--line);border-radius:10px;background:var(--deep);position:relative;overflow:hidden;aspect-ratio:1/.72}
.au .viz::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle at 1px 1px,rgba(234,240,236,.05) 1px,transparent 0);background-size:22px 22px;mask-image:radial-gradient(130% 100% at 50% 45%,#000 45%,transparent 85%)}
.au .viz svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
.au .who{margin-top:1rem;display:flex;align-items:center;gap:8px;font-family:var(--mono);font-size:10.5px;color:var(--mint)}
.au .who::before{content:'';width:16px;height:1px;background:var(--mint);opacity:.5}
.au .cap{margin-top:.7rem;font-size:.92rem;color:var(--c70);line-height:1.6}
.au .cap b{color:var(--c);font-weight:700}
.au .stat{margin-top:1.1rem;display:flex;align-items:baseline;gap:.7rem;padding-top:1rem;border-top:1px solid var(--line)}
.au .stat b{font-family:var(--mono);font-size:clamp(1.9rem,8.6vw,2.5rem);font-weight:500;letter-spacing:-.03em;line-height:.9}
.au .stat b em{font-style:normal;font-size:.5em;color:var(--mint)}
.au .stat p{font-size:11.5px;color:var(--c45);line-height:1.4;max-width:26ch}
.au .value{padding:.4rem 20px 1rem}
.au .vrow{display:flex;gap:.9rem;padding:1.1rem 0;border-top:1px solid var(--line);opacity:0;transform:translateY(12px);transition:opacity .6s var(--e),transform .6s var(--e)}
.au .vrow:first-child{border-top:0}
.au .vrow.live{opacity:1;transform:none}
.au .vrow .vn{font-family:var(--mono);font-size:.85rem;color:var(--mint);flex-shrink:0;width:1.8rem;line-height:1.7}
.au .vrow .vc h4{font-size:1.22rem;font-weight:700;letter-spacing:-.02em;line-height:1.12}
.au .vrow .vc p{font-size:.9rem;color:var(--c70);line-height:1.55;margin-top:.35rem}
.au .vrow .vc .st2{display:inline-block;margin-top:.55rem;font-family:var(--mono);font-size:9px;letter-spacing:.04em;text-transform:uppercase;color:var(--mint);border:1px solid var(--mg);padding:4px 9px;border-radius:2px}
.au .breadth{padding:.6rem 20px 1.2rem}
.au .clu{padding:1.15rem 0;border-top:1px solid var(--line)}
.au .clu:first-child{border-top:0}
.au .clu h5{display:flex;align-items:baseline;gap:.55rem;font-family:var(--mono);font-size:10.5px;letter-spacing:.04em;text-transform:uppercase;color:var(--mint)}
.au .clu h5 b{font-size:.95rem;color:var(--c26)}
.au .clu .items{display:flex;flex-wrap:wrap;gap:6px;margin-top:.75rem}
.au .clu .items span{border:1px solid var(--line);background:var(--card);padding:6px 10px;font-size:11.5px;color:var(--c70);border-radius:2px}
.au .end{padding:2.2rem 20px calc(2.4rem + env(safe-area-inset-bottom));border-top:1px solid var(--line);margin-top:1.7rem}
.au .end .big{font-size:clamp(2.6rem,11vw,3.7rem);font-weight:800;line-height:1;letter-spacing:-.04em}
.au .end .big span{color:var(--mint)}
.au .end p{font-size:.95rem;color:var(--c70);line-height:1.62;max-width:46ch;margin-top:1rem}
.au .end p b{color:var(--c);font-weight:700}
.au .end a{display:block;margin-top:1.4rem;text-align:center;font-family:var(--mono);font-size:11.5px;letter-spacing:.02em;text-transform:uppercase;color:var(--ink);background:var(--mint);text-decoration:none;padding:1.15rem;border-radius:6px;font-weight:500}
.au .end .foot{font-family:var(--mono);font-size:10px;color:var(--c26);letter-spacing:.02em;margin-top:1.4rem}
.au .wire{stroke:var(--c16);stroke-width:1.25;fill:none}
.au .node{fill:var(--c16)} .au .nodeOn{fill:var(--mint)}
.au .ring{fill:none;stroke:var(--mint);stroke-width:1.5}
.au .lab{font-family:'Martian Mono';font-weight:400;fill:var(--c70)}
.au .labA{font-family:'Martian Mono';font-weight:500;fill:var(--mint)}
.au .labk{font-family:'Plus Jakarta Sans';font-weight:700;fill:var(--ink)}
.au .glow{filter:drop-shadow(0 0 7px var(--mg))}
.au .draw{stroke-dasharray:var(--L,240);stroke-dashoffset:var(--L,240)}
.au .live .draw{animation:au-draw 1.15s var(--e) forwards}
@keyframes au-draw{to{stroke-dashoffset:0}}
.au .pop{opacity:0;transform:scale(.4);transform-origin:center}
.au .live .pop{animation:au-pop .5s var(--e) forwards}
@keyframes au-pop{to{opacity:1;transform:scale(1)}}
.au .up{opacity:0}
.au .live .up{animation:au-up .6s var(--e) forwards}
@keyframes au-up{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}
.au .grow{transform:scaleY(0);transform-origin:50% 100%}
.au .live .grow{animation:au-grw .75s var(--e) forwards}
@keyframes au-grw{to{transform:scaleY(1)}}
.au .orbit{transform-origin:200px 150px;animation:au-orb 4.5s linear infinite}
.au .orbit2{transform-origin:200px 120px;animation:au-orb 3.5s linear infinite}
@keyframes au-orb{to{transform:rotate(360deg)}}
@media(prefers-reduced-motion:reduce){.au *{animation:none!important;transition-duration:.01ms!important}.au .up,.au .pop{opacity:1;transform:none}.au .draw{stroke-dashoffset:0}.au .grow{transform:none}.au .vrow{opacity:1;transform:none}.au .orbit,.au .orbit2{animation:none!important}}
`;

const AU_TEAM = ['Automation engineers','Integrations','AI','Support'];
const AU_PARTS = [
  { n:'01', sp:'Integrations', h:'Everything <em>talks</em> to everything.', out:'Your tools stop being islands.',
    who:'Integrations',
    cap:'Your bookings, your till, your inbox, your sheets, your ads \u2014 today they don\u2019t talk, so you\u2019re the glue, copying between them by hand. We wire them into one connected system so information moves on its own. The booking updates the calendar, the sale updates the stock, the lead lands in the CRM \u2014 <b>no one lifting a finger.</b>',
    stat:'1', statP:'connected system where your tools were islands \u2014 no more copy-paste between apps', viz:'connect' },
  { n:'02', sp:'Automation engineers', h:'Work <em>triggers</em> itself.', out:'One event, everything after it.',
    who:'Automation engineers',
    cap:'We set the rules once: when this happens, do that. A booking comes in \u2192 confirmation sent, reminder scheduled, table blocked. An invoice goes unpaid \u2192 a polite chase goes out on day three. The restaurant, the shop, the clinic \u2014 the busywork just happens, on time, every time.',
    stat:'30', statEm:'%', statP:'of everyday work can run itself, hands-free', viz:'trigger' },
  { n:'03', sp:'AI, inside the flow', h:'The smart part is <em>handled.</em>', out:'AI makes the small calls.',
    who:'AI',
    cap:'Where a little judgement is needed, AI handles it inside the flow \u2014 sorting the message, drafting the reply, routing the lead to the right person, flagging the odd one out. Not a robot pretending to be you; just the small decisions made instantly, so nothing waits in a queue for someone to get to it.',
    stat:'80', statEm:'%', statP:'of routine questions and tasks handled without a human touching them', viz:'decide' },
  { n:'04', sp:'Always-on', h:'It runs while you <em>sleep.</em>', out:'24/7, never forgets.',
    who:'The system',
    cap:'It doesn\u2019t take breaks, doesn\u2019t forget, doesn\u2019t call in sick. The follow-up still goes at 9pm, the reminder still fires on Sunday, the lead at 2am still gets an instant reply. <b>The business keeps working when you\u2019ve gone home.</b>',
    stat:'24/7', statP:'always running \u2014 never a dropped ball, never a forgotten follow-up', viz:'always' },
  { n:'05', sp:'Oversight', h:'You <em>watch</em> it, not run it.', out:'In control, hands-free.',
    who:'Support',
    cap:'You get one clear view of everything running \u2014 what fired, what\u2019s pending, what needs you. You step in only when you want, change a rule in a click, and otherwise let it run. The point isn\u2019t to remove you; it\u2019s to free you.',
    stat:'0', statP:'things falling through the cracks \u2014 nothing waits on someone remembering', viz:'watch' },
] as const;

const AU_VALUE: [string,string,string][] = [
  ['Hours back, every week','The manual busywork runs itself, so you get your time back for the work only you can do \u2014 not chasing, copying and reminding.','Your time back'],
  ['Nothing falls through','Every follow-up, reminder, invoice and reply happens on time, without anyone having to remember it.','Zero dropped balls'],
  ['Served around the clock','Leads answered and customers looked after while you sleep \u2014 you never lose one to a slow reply again.','Always on'],
  ['Fewer mistakes','No typos, no missed steps, no double-entry \u2014 the system does it the same, correct way every single time.','No human error'],
  ['Grow without hiring','Handle far more volume with the same team, because the extra work doesn\u2019t need extra hands.','Scale without headcount'],
];
const AU_CLUSTERS: [string,string[]][] = [
  ['Marketing',['Post scheduling','Review requests','Retargeting triggers','Lead capture','Campaign automation','Win-back flows']],
  ['Sales & CRM',['Lead routing','Follow-up sequences','Missed-call callback','Quote generation','Pipeline updates','Deal alerts']],
  ['Bookings & customers',['Confirmations','Reminders','No-show chasing','Feedback requests','Loyalty & rewards','Waitlists']],
  ['Finance & admin',['Invoicing','Payment reminders','Receipts','Expense sync','Reporting','Payroll prep']],
  ['Operations',['Stock alerts','Reorder triggers','Supplier orders','Rota & scheduling','Task assignment','Checklists']],
  ['Data & reporting',['Tool-to-tool sync','Dashboards','Weekly reports','Anomaly alerts','Backups','Data cleanup']],
];

const AU_VIZ: Record<string, () => string> = {
  connect() {
    const tools:[string,number,number][]=[['Sheets',72,54],['Stripe',330,60],['WhatsApp',60,196],['POS',324,202],['Email',200,38]];
    let s='<circle class="nodeOn glow pop" cx="200" cy="128" r="34" style="animation-delay:.2s"/><text class="labk pop" x="200" y="132" font-size="10" text-anchor="middle" style="animation-delay:.35s">one system</text>';
    tools.forEach((t,i)=>{s+=`<line class="wire draw" style="--L:180;animation-delay:${.5+i*.1}s" x1="200" y1="128" x2="${t[1]}" y2="${t[2]}"/>`+
      `<rect class="wire up" x="${t[1]-38}" y="${t[2]-15}" width="76" height="30" rx="7" fill="rgba(234,240,236,.03)" style="animation-delay:${.7+i*.1}s"/>`+
      `<text class="lab up" x="${t[1]}" y="${t[2]+4}" font-size="10.5" text-anchor="middle" style="animation-delay:${.8+i*.1}s">${t[0]}</text>`;});
    return `<svg viewBox="0 0 400 256">${s}</svg>`;
  },
  trigger() {
    let s='<rect class="nodeOn glow pop" x="26" y="96" width="72" height="44" rx="8" style="animation-delay:.2s"/><text class="labk pop" x="62" y="122" font-size="9" text-anchor="middle" style="animation-delay:.35s">trigger</text>';
    const acts=['send','update','notify'],x0=134;
    acts.forEach((t,i)=>{const x=x0+i*90;
      s+=`<line class="wire draw glow" style="--L:38;animation-delay:${.5+i*.25}s" x1="${x-38}" y1="118" x2="${x-6}" y2="118"/>`+
        `<rect class="wire up" x="${x}" y="96" width="72" height="44" rx="8" style="animation-delay:${.6+i*.25}s"/>`+
        `<text class="lab up" x="${x+36}" y="122" font-size="10" text-anchor="middle" style="animation-delay:${.7+i*.25}s">${t}</text>`;});
    s+='<text class="lab up" x="200" y="176" font-size="10.5" text-anchor="middle" opacity=".55" style="animation-delay:1.2s">one event \u2014 everything after it, automatic</text>';
    return `<svg viewBox="0 0 400 196">${s}</svg>`;
  },
  decide() {
    let s='<line class="wire draw" style="--L:70" x1="40" y1="120" x2="150" y2="120"/>';
    s+='<polygon class="nodeOn glow pop" points="150,90 200,120 150,150 100,120" style="animation-delay:.4s"/><text class="labk pop" x="150" y="124" font-size="8" text-anchor="middle" style="animation-delay:.55s">AI</text>';
    s+='<line class="wire draw glow" style="--L:112;animation-delay:.7s" x1="200" y1="120" x2="300" y2="70"/><rect class="nodeOn glow pop" x="300" y="52" width="72" height="36" rx="7" style="animation-delay:.9s"/><text class="labk pop" x="336" y="74" font-size="9" text-anchor="middle" style="animation-delay:1s">this way</text>';
    s+='<line class="wire draw" style="--L:112;animation-delay:.7s" x1="200" y1="120" x2="300" y2="170"/><rect class="wire up" x="300" y="152" width="72" height="36" rx="7" style="animation-delay:.9s"/><text class="lab up" x="336" y="174" font-size="9" text-anchor="middle" style="animation-delay:1s">or that</text>';
    return `<svg viewBox="0 0 400 216">${s}</svg>`;
  },
  always() {
    let s='<circle class="wire" cx="200" cy="120" r="70"/>';
    s+='<circle class="ring draw glow" style="--L:440" cx="200" cy="120" r="70"/>';
    s+='<g class="orbit2"><circle class="nodeOn glow" cx="200" cy="50" r="5"/></g>';
    s+='<text class="labA pop" x="200" y="116" font-size="19" text-anchor="middle" font-weight="500" style="animation-delay:.5s">24/7</text><text class="lab up" x="200" y="138" font-size="9" text-anchor="middle" opacity=".55" style="animation-delay:.7s">never stops</text>';
    return `<svg viewBox="0 0 400 240">${s}</svg>`;
  },
  watch() {
    let s='<rect class="wire up" x="60" y="46" width="280" height="140" rx="12" style="animation-delay:.2s"/>';
    const bars=[58,88,72,108,82];bars.forEach((h,i)=>{const x=92+i*48;s+=`<rect class="nodeOn glow grow" x="${x}" y="${166-h}" width="26" height="${h}" rx="3" style="animation-delay:${.5+i*.1}s"/>`;});
    s+='<circle class="nodeOn glow pop" cx="316" cy="68" r="5" style="animation-delay:1s"/><text class="labA up" x="200" y="208" font-size="10.5" text-anchor="middle" style="animation-delay:1.1s">you watch it \u2014 you don\u2019t run it</text>';
    return `<svg viewBox="0 0 400 224">${s}</svg>`;
  },
};

function AutomationContent({ onClose }: { onClose: () => void }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const flowRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const id = 'au-modal-css';
    if (!document.getElementById(id)) {
      const s = document.createElement('style');
      s.id = id; s.textContent = AU_CSS;
      document.head.appendChild(s);
    }
  }, []);

  // hero engine
  useEffect(() => {
    const flow = flowRef.current; if (!flow) return;
    const cx=200,cy=150,R=92,steps=['Lead in','Reply','Book','Remind','Invoice','Review']; let s='';
    s+=`<circle class="ring" cx="${cx}" cy="${cy}" r="${R}" opacity=".22"/>`;
    steps.forEach((nm,i)=>{const a=-Math.PI/2+i/steps.length*Math.PI*2,x=cx+Math.cos(a)*R,y=cy+Math.sin(a)*R;
      s+=`<circle class="nodeOn glow pop" cx="${x}" cy="${y}" r="6" style="animation-delay:${.4+i*.1}s"/>`;
      const lx=cx+Math.cos(a)*(R+12),ly=cy+Math.sin(a)*(R+12),an=Math.cos(a)>.25?'start':(Math.cos(a)<-.25?'end':'middle');
      s+=`<text class="lab up" x="${lx}" y="${ly+4}" font-size="10" text-anchor="${an}" style="animation-delay:${.6+i*.1}s">${nm}</text>`;});
    s+=`<g class="orbit"><circle class="nodeOn glow" cx="${cx}" cy="${cy-R}" r="4.5"/></g>`;
    s+=`<circle class="ring glow pop" cx="${cx}" cy="${cy}" r="30" style="animation-delay:.15s"/>`+
       `<circle class="nodeOn glow pop" cx="${cx}" cy="${cy}" r="16" style="animation-delay:.2s"/>`+
       `<text class="labk pop" x="${cx}" y="${cy+4}" font-size="9" text-anchor="middle" style="animation-delay:.35s">auto</text>`;
    flow.innerHTML = s;
    const id = requestAnimationFrame(() => frameRef.current?.classList.add('live'));
    return () => cancelAnimationFrame(id);
  }, []);

  // reveal
  useEffect(() => {
    const io = new IntersectionObserver(
      es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('live'); io.unobserve(e.target); } }),
      { threshold: 0.25 }
    );
    wrapRef.current?.querySelectorAll('.au .viz,.au .vrow,.au .clu').forEach(v => io.observe(v));
    return () => io.disconnect();
  }, []);

  return (
    <div className="au" ref={wrapRef}>
      <div className="hero">
        <p className="lbl">AI and automation</p>
        <h1>The business that<br /><em>runs itself.</em></h1>
        <p>Everything connected, the busywork triggering itself, the smart calls handled — running 24/7 while you watch it work. <b>Not more staff. A business that needs fewer hands to run.</b></p>

        <div className="frame" ref={frameRef}>
          <div className="fc">One engine — always running</div>
          <svg ref={flowRef} viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet" />
        </div>

        <div className="team">
          <s>The people on it</s>
          <div className="row">{AU_TEAM.map(t => <span key={t}>{t}</span>)}</div>
        </div>
      </div>

      <div className="shead">How it runs</div>
      <div>
        {AU_PARTS.map((p, i) => (
          <section key={i} className="phase">
            <div className="idx"><b>{p.n}</b><s>{p.sp}</s></div>
            <h2 dangerouslySetInnerHTML={{ __html: p.h }} />
            <p className="out">{p.out}</p>
            <div className="viz" dangerouslySetInnerHTML={{ __html: AU_VIZ[p.viz]() }} />
            <p className="who">{p.who}</p>
            <p className="cap" dangerouslySetInnerHTML={{ __html: p.cap }} />
            <div className="stat">
              <b dangerouslySetInnerHTML={{ __html: p.stat + ((p as {statEm?:string}).statEm ? `<em>${(p as {statEm?:string}).statEm}</em>` : '') }} />
              <p>{p.statP}</p>
            </div>
          </section>
        ))}
      </div>

      <div className="shead">What it&apos;s worth to you</div>
      <div className="value">
        {AU_VALUE.map((v, i) => (
          <div key={i} className="vrow">
            <div className="vn">0{i + 1}</div>
            <div className="vc"><h4>{v[0]}</h4><p>{v[1]}</p><span className="st2">{v[2]}</span></div>
          </div>
        ))}
      </div>

      <div className="shead">Everything it runs — one system</div>
      <div className="breadth">
        {AU_CLUSTERS.map((c, ci) => (
          <div key={ci} className="clu">
            <h5><b>0{ci + 1}</b>{c[0]}</h5>
            <div className="items">
              {c[1].map((x, xi) => <span key={xi} className="up" style={{ animationDelay:`${xi*.03}s` }}>{x}</span>)}
            </div>
          </div>
        ))}
      </div>

      <div className="end">
        <div className="big">Fewer hands.<br /><span>More business.</span></div>
        <p>Your tools connected, the busywork triggering itself, the smart calls handled, running around the clock — while you oversee it in one view. <b>The point isn&apos;t to remove you. It&apos;s to free you.</b></p>
        <a href="/contact" onClick={onClose}>See what we&apos;d automate first →</a>
        <p className="foot">OARC — one team for the whole business. Malta.</p>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// TRANSFORMATION CONTENT  (exact prototype port — paper/cyan light world)
// src: change_how_the_business_runs_1786575410243.txt
// ────────────────────────────────────────────────────────────────────────────
const TR_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=IBM+Plex+Mono:wght@400;500&display=swap');
.trx{
  --paper:#EEF1F4;--card:#F8FAFB;--ink:#0D1220;--cyan:#0E8FA8;--cyand:#0A7285;
  --i70:rgba(13,18,32,.7);--i45:rgba(13,18,32,.45);--i30:rgba(13,18,32,.3);
  --i16:rgba(13,18,32,.14);--i10:rgba(13,18,32,.07);
  --cg:rgba(14,143,168,.3);--cf:rgba(14,143,168,.1);--line:rgba(13,18,32,.12);
  --ui:'Space Grotesk',sans-serif;--mono:'IBM Plex Mono',monospace;--e:cubic-bezier(.16,1,.3,1);
  background:var(--paper);color:var(--ink);font-family:var(--ui);-webkit-font-smoothing:antialiased}
.trx *{margin:0;padding:0;box-sizing:border-box}
.trx .hero{padding:1.8rem 20px 2.2rem;border-bottom:1px solid var(--line)}
.trx .hero .lbl{font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--cyand)}
.trx .hero h1{font-size:clamp(2.3rem,9vw,3.5rem);font-weight:700;line-height:.98;letter-spacing:-.04em;margin-top:.7rem}
.trx .hero h1 em{font-style:normal;color:var(--cyand)}
.trx .hero p{font-size:.98rem;color:var(--i70);line-height:1.58;margin-top:1rem;max-width:44ch}
.trx .hero p b{color:var(--ink);font-weight:700}
.trx .frame{margin-top:2rem;border:1px solid var(--line);border-radius:14px;background:var(--card);padding:1.3rem 1rem 1rem;box-shadow:0 14px 34px rgba(13,18,32,.05)}
.trx .frame .fc{display:flex;justify-content:space-between;font-family:var(--mono);font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:var(--i30);margin-bottom:.3rem;padding:0 .3rem}
.trx .frame svg{width:100%;display:block;overflow:visible}
.trx .hero .team{margin-top:1.7rem}
.trx .hero .team s{font-family:var(--mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--i45);font-style:normal;text-decoration:none}
.trx .hero .team .row{display:flex;flex-wrap:wrap;gap:6px;margin-top:.7rem}
.trx .hero .team .row span{border:1px solid var(--line);padding:6px 10px;font-size:11px;color:var(--i70);border-radius:2px;background:var(--card)}
.trx .shead{padding:1.7rem 20px .4rem;font-family:var(--mono);font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;color:var(--i45);display:flex;align-items:center;gap:.8rem}
.trx .shead::after{content:'';flex:1;height:1px;background:var(--line)}
.trx .phase{padding:1.8rem 20px 2rem;border-top:1px solid var(--line)}
.trx .phase:first-of-type{border-top:0}
.trx .phase .idx{display:flex;align-items:baseline;gap:.6rem}
.trx .phase .idx b{font-family:var(--mono);font-size:11px;font-weight:500;color:var(--cyand)}
.trx .phase .idx s{font-family:var(--mono);font-size:10.5px;letter-spacing:.08em;text-transform:uppercase;color:var(--i45);text-decoration:none}
.trx .phase h2{font-size:clamp(1.95rem,8vw,2.6rem);font-weight:700;line-height:1;letter-spacing:-.035em;margin-top:1rem}
.trx .phase h2 em{font-style:normal;color:var(--cyand)}
.trx .phase .out{font-size:clamp(1.3rem,5.2vw,1.6rem);color:var(--ink);margin-top:.9rem;line-height:1.2;font-weight:500}
.trx .viz{margin-top:1.5rem;border:1px solid var(--line);border-radius:10px;background:var(--card);position:relative;overflow:hidden;aspect-ratio:1/.72;box-shadow:0 1px 0 rgba(255,255,255,.7) inset}
.trx .viz::before{content:'';position:absolute;inset:0;background-image:linear-gradient(rgba(13,18,32,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(13,18,32,.05) 1px,transparent 1px);background-size:26px 26px;mask-image:radial-gradient(130% 100% at 50% 45%,#000 45%,transparent 88%)}
.trx .viz svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
.trx .who{margin-top:1rem;display:flex;align-items:center;gap:8px;font-family:var(--mono);font-size:11px;color:var(--cyand)}
.trx .who::before{content:'';width:16px;height:1px;background:var(--cyan);opacity:.5}
.trx .cap{margin-top:.7rem;font-size:.92rem;color:var(--i70);line-height:1.6}
.trx .cap b{color:var(--ink);font-weight:700}
.trx .stat{margin-top:1.1rem;display:flex;align-items:baseline;gap:.7rem;padding-top:1rem;border-top:1px solid var(--line)}
.trx .stat b{font-family:var(--mono);font-size:clamp(2.1rem,9.5vw,2.8rem);font-weight:500;letter-spacing:-.03em;line-height:.9}
.trx .stat b em{font-style:normal;font-size:.42em;color:var(--cyand)}
.trx .stat p{font-size:11.5px;color:var(--i45);line-height:1.4;max-width:26ch}
.trx .bonus{margin:0 20px;padding:1.3rem 1.4rem;border:1px dashed var(--line);border-radius:10px;background:var(--card)}
.trx .bonus s{font-family:var(--mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--i45);font-style:normal;text-decoration:none}
.trx .bonus h4{font-size:1.15rem;font-weight:700;margin:.5rem 0 .5rem;letter-spacing:-.02em}
.trx .bonus p{font-size:.88rem;color:var(--i70);line-height:1.55}
.trx .bonus p b{color:var(--ink);font-weight:700}
.trx .end{padding:2.2rem 20px calc(2.4rem + env(safe-area-inset-bottom));border-top:1px solid var(--line);margin-top:1.7rem}
.trx .end .big{font-size:clamp(2.5rem,10.5vw,3.6rem);font-weight:700;line-height:1;letter-spacing:-.04em}
.trx .end .big span{color:var(--cyand)}
.trx .end p{font-size:.95rem;color:var(--i70);line-height:1.62;max-width:46ch;margin-top:1rem}
.trx .end p b{color:var(--ink);font-weight:700}
.trx .end a{display:block;margin-top:1.4rem;text-align:center;font-family:var(--mono);font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:#fff;background:var(--cyand);text-decoration:none;padding:1.15rem;border-radius:6px}
.trx .end .foot{font-family:var(--mono);font-size:10.5px;color:var(--i30);letter-spacing:.02em;margin-top:1.4rem}
.trx .wire{stroke:var(--i16);stroke-width:1.25;fill:none}
.trx .node{fill:var(--i16)} .trx .nodeOn{fill:var(--cyan)}
.trx .ring{fill:none;stroke:var(--cyan);stroke-width:1.5}
.trx .lab{font-family:'IBM Plex Mono';font-weight:400;fill:var(--i70)}
.trx .labA{font-family:'IBM Plex Mono';font-weight:500;fill:var(--cyand)}
.trx .labk{font-family:'IBM Plex Mono';font-weight:500;fill:#fff}
.trx .glow{filter:drop-shadow(0 0 7px var(--cg))}
.trx .draw{stroke-dasharray:var(--L,240);stroke-dashoffset:var(--L,240)}
.trx .live .draw{animation:trx-draw 1.15s var(--e) forwards}
@keyframes trx-draw{to{stroke-dashoffset:0}}
.trx .pop{opacity:0;transform:scale(.4);transform-origin:center}
.trx .live .pop{animation:trx-pop .5s var(--e) forwards}
@keyframes trx-pop{to{opacity:1;transform:scale(1)}}
.trx .up{opacity:0}
.trx .live .up{animation:trx-up .6s var(--e) forwards}
@keyframes trx-up{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}
.trx .grow{transform:scaleY(0);transform-origin:50% 100%}
.trx .live .grow{animation:trx-grw .75s var(--e) forwards}
@keyframes trx-grw{to{transform:scaleY(1)}}
.trx .growx{transform:scaleX(0);transform-origin:left center}
.trx .live .growx{animation:trx-grwx .9s var(--e) forwards}
@keyframes trx-grwx{to{transform:scaleX(1)}}
@media(prefers-reduced-motion:reduce){.trx *{animation:none!important;transition-duration:.01ms!important}.trx .up,.trx .pop{opacity:1;transform:none}.trx .draw{stroke-dashoffset:0}.trx .grow,.trx .growx{transform:none}}
`;

const TR_CY = '#0E8FA8';
const TR_TEAM = ['Discovery','Product & design','Engineering','Integrations','Support'];

const TR_PARTS = [
  { n:'01', sp:'Discovery', h:'We learn how it <em>really</em> runs.', out:'The real workflow, not the org chart.',
    who:'Discovery team',
    cap:'Before a line of code, we map how your business truly runs \u2014 the WhatsApp threads, the spreadsheet everyone secretly depends on, the step only Maria knows. Most transformations fail because nobody did this first. The restaurant\u2019s real bottleneck is the pass, not the till; the trades firm bleeds hours in quoting, not on the job. <b>We find the actual break before we build.</b>',
    stat:'70', statEm:'%', statP:'of transformations fail \u2014 almost always because no one mapped how the business really runs first', viz:'map' },
  { n:'02', sp:'Product & design', h:'Built for <em>you</em>, not a template.', out:'Fitted to your workflow, not you to it.',
    who:'Product & design',
    cap:'Off-the-shelf tools make you bend your business to their shape. We do the opposite: design the system around how you actually work, so staff adopt it in a day because it matches what they already do. The shop\u2019s stock speaks its own product names; the clinic\u2019s bookings follow its own rules.',
    stat:'0', statP:'templates \u2014 it\u2019s built to your workflow, not you bent to someone else\u2019s', viz:'custom' },
  { n:'03', sp:'Engineering', h:'Live in <em>weeks</em>, not years.', out:'A working version, fast.',
    who:'Engineering',
    cap:'We don\u2019t vanish for a year and hand over slides. We ship the smallest thing that works \u2014 the one screen, the one flow that moves the needle \u2014 live in weeks, then improve it with you in the open. <b>You\u2019re using it while competitors are still scoping.</b>',
    stat:'6', statEm:'weeks', statP:'to a working first version in your hands \u2014 not a year of promises', viz:'ship' },
  { n:'04', sp:'Integrations', h:'It plugs into what you <em>have</em>.', out:'No rip-and-replace.',
    who:'Engineering',
    cap:'Your new system sits on top of the rails you already run \u2014 your POS, Stripe, your sheets, your calendar \u2014 pulling them into one place instead of replacing them. Nothing gets thrown out; everything finally talks to everything else.',
    stat:'1', statP:'system on your POS, Stripe and sheets \u2014 one place, no rip-and-replace', viz:'integrate' },
  { n:'05', sp:'Support', h:'You <em>own</em> it.', out:'Yours, and always improving.',
    who:'The whole team',
    cap:'It\u2019s your software \u2014 the code, the data, no lock-in and no hostage fees. And it\u2019s a living system, not a finished project: we stay and evolve it as the business grows, so it never becomes the old thing you\u2019re stuck with.',
    stat:'100', statEm:'%', statP:'yours: the code, the data, no lock-in \u2014 and we keep improving it', viz:'own' },
] as const;

const TR_VIZ: Record<string, () => string> = {
  map() {
    const st:[string,number][]=[['A',54],['B',150],['C',246],['D',342]],y=92;let s='';
    st.forEach((n,i)=>{s+=`<rect class="wire up" x="${n[1]}" y="${y}" width="60" height="44" rx="7" fill="rgba(13,18,32,.03)" style="animation-delay:${i*.12}s"/>`+
      `<text class="lab up" x="${n[1]+30}" y="${y+27}" font-size="14" text-anchor="middle" style="animation-delay:${i*.12}s">${n[0]}</text>`;});
    s+=`<line class="wire draw" style="--L:32;animation-delay:.5s" x1="116" y1="${y+22}" x2="148" y2="${y+22}"/>`;
    s+=`<line class="draw glow" style="--L:32;animation-delay:.7s" x1="208" y1="${y+22}" x2="244" y2="${y+22}" stroke="${TR_CY}" stroke-width="2.2" stroke-dasharray="4 4"/>`;
    s+=`<text class="labA up" x="228" y="${y-12}" font-size="11" text-anchor="middle" style="animation-delay:1s">where it breaks</text>`;
    s+=`<line class="wire draw" style="--L:32;animation-delay:.9s" x1="308" y1="${y+22}" x2="340" y2="${y+22}"/>`;
    s+=`<text class="lab up" x="200" y="${y+88}" font-size="10.5" text-anchor="middle" opacity=".55" style="animation-delay:1.1s">how it actually runs</text>`;
    return `<svg viewBox="0 0 400 208">${s}</svg>`;
  },
  custom() {
    let s='<rect class="wire up" x="150" y="66" width="100" height="100" rx="10" style="animation-delay:.1s"/><text class="lab up" x="200" y="52" font-size="10.5" text-anchor="middle" opacity=".55" style="animation-delay:.15s">the shape of your work</text>';
    s+='<rect class="node up" x="58" y="94" width="66" height="66" rx="10" style="animation-delay:.35s"/><text class="lab up" x="91" y="182" font-size="10.5" text-anchor="middle" opacity=".55" style="animation-delay:.45s">template</text>';
    s+='<rect class="nodeOn glow pop" x="158" y="74" width="84" height="84" rx="8" style="animation-delay:.75s"/><path class="draw" style="--L:30;animation-delay:1.05s" d="M186,116 l9,10 l17,-21" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round"/>';
    s+='<text class="labA up" x="200" y="182" font-size="10.5" text-anchor="middle" style="animation-delay:.95s">built for you</text>';
    return `<svg viewBox="0 0 400 196">${s}</svg>`;
  },
  ship() {
    let s='<text class="lab up" x="40" y="52" font-size="11" style="animation-delay:.2s">the usual</text>'+
      '<rect class="node growx" x="40" y="62" width="320" height="26" rx="6" style="transform-origin:40px center;animation-delay:.3s"/><text class="lab up" x="54" y="80" font-size="11" style="animation-delay:.8s">a year of slides</text>';
    s+='<text class="labA up" x="40" y="128" font-size="11" style="animation-delay:.5s">us</text>'+
      '<rect class="nodeOn glow growx" x="40" y="138" width="122" height="26" rx="6" style="transform-origin:40px center;animation-delay:.6s"/><text class="labk up" x="54" y="156" font-size="11" style="animation-delay:.95s">weeks \u00b7 live</text>';
    s+='<rect class="ring up" x="176" y="138" width="54" height="26" rx="13" style="animation-delay:1s"/><text class="labA up" x="203" y="156" font-size="10" text-anchor="middle" style="animation-delay:1.1s">LIVE</text>';
    return `<svg viewBox="0 0 400 196">${s}</svg>`;
  },
  integrate() {
    const tools:[string,number,number][]=[['POS',72,54],['Stripe',330,64],['Sheets',62,198],['Calendar',322,206]];
    let s='<circle class="nodeOn glow pop" cx="200" cy="130" r="36" style="animation-delay:.2s"/><text class="labk pop" x="200" y="134" font-size="11" text-anchor="middle" font-weight="500" style="animation-delay:.35s">your system</text>';
    tools.forEach((t,i)=>{s+=`<line class="wire draw" style="--L:180;animation-delay:${.5+i*.12}s" x1="200" y1="130" x2="${t[1]}" y2="${t[2]}"/>`+
      `<rect class="wire up" x="${t[1]-36}" y="${t[2]-16}" width="72" height="32" rx="7" fill="rgba(13,18,32,.03)" style="animation-delay:${.7+i*.12}s"/>`+
      `<text class="lab up" x="${t[1]}" y="${t[2]+5}" font-size="11" text-anchor="middle" style="animation-delay:${.8+i*.12}s">${t[0]}</text>`;});
    return `<svg viewBox="0 0 400 260">${s}</svg>`;
  },
  own() {
    let s='<rect class="nodeOn glow pop" x="150" y="92" width="100" height="78" rx="12" style="animation-delay:.35s"/><text class="labk pop" x="200" y="137" font-size="12" text-anchor="middle" font-weight="500" style="animation-delay:.55s">yours</text>';
    s+=`<rect class="ring pop" x="184" y="66" width="32" height="22" rx="4" style="animation-delay:.65s"/><path class="draw" style="--L:44;animation-delay:.85s" d="M191,66 v-9 a11,11 0 0 1 22,0" fill="none" stroke="${TR_CY}" stroke-width="2"/>`;
    s+=`<path class="wire draw glow" style="--L:320;animation-delay:1.05s" d="M250,131 C304,131 304,206 200,206 C118,206 106,156 120,136"/><path class="pop" style="animation-delay:1.75s" d="M120,136 l-3,-14 l13,5 z" fill="${TR_CY}"/>`;
    s+='<text class="labA up" x="200" y="236" font-size="10.5" text-anchor="middle" style="animation-delay:1.2s">and always improving</text>';
    return `<svg viewBox="0 0 400 252">${s}</svg>`;
  },
};

function TransformationContent({ onClose }: { onClose: () => void }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const id = 'trx-modal-css';
    if (!document.getElementById(id)) {
      const s = document.createElement('style');
      s.id = id; s.textContent = TR_CSS;
      document.head.appendChild(s);
    }
  }, []);

  // hero: chaos -> built
  useEffect(() => {
    const hero = heroRef.current; if (!hero) return;
    const chaos=[[52,44],[96,86],[40,120],[104,150],[70,96]];let s='';
    const links=[[0,1],[1,2],[2,3],[0,4],[4,3],[1,4]];
    links.forEach((l,i)=>{s+=`<line class="wire draw" style="--L:120;animation-delay:${i*.08}s" x1="${chaos[l[0]][0]}" y1="${chaos[l[0]][1]}" x2="${chaos[l[1]][0]}" y2="${chaos[l[1]][1]}"/>`;});
    chaos.forEach((p,i)=>{s+=`<circle class="node pop" cx="${p[0]}" cy="${p[1]}" r="6" style="animation-delay:${.3+i*.06}s"/>`;});
    s+='<text class="lab up" x="70" y="180" font-size="10" text-anchor="middle" opacity=".55" style="animation-delay:.7s">tools that don\u2019t talk</text>';
    s+=`<path class="wire draw glow" style="--L:60;animation-delay:.9s" d="M168,96 L228,96"/><path class="pop" style="animation-delay:1.4s" d="M228,90 l12,6 l-12,6 z" fill="${TR_CY}"/>`;
    s+='<rect class="ring glow pop" x="268" y="40" width="104" height="112" rx="12" style="animation-delay:1.1s"/>';
    [58,84,110].forEach((y,i)=>{s+=`<rect class="nodeOn growx" x="284" y="${y}" width="${72-i*12}" height="12" rx="3" style="transform-origin:284px center;animation-delay:${1.3+i*.12}s"/>`;});
    s+='<text class="labA up" x="320" y="180" font-size="10" text-anchor="middle" style="animation-delay:1.5s">one system</text>';
    hero.innerHTML = s;
    const id = requestAnimationFrame(() => frameRef.current?.classList.add('live'));
    return () => cancelAnimationFrame(id);
  }, []);

  // reveal
  useEffect(() => {
    const io = new IntersectionObserver(
      es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('live'); io.unobserve(e.target); } }),
      { threshold: 0.3 }
    );
    wrapRef.current?.querySelectorAll('.trx .viz').forEach(v => io.observe(v));
    return () => io.disconnect();
  }, []);

  return (
    <div className="trx" ref={wrapRef}>
      <div className="hero">
        <p className="lbl">Change how the business runs</p>
        <h1>Software your business<br /><em>should run on.</em></h1>
        <p>Some businesses run on spreadsheets, WhatsApp and duct tape. We design and build the custom software they should run on — <b>a real product and engineering team, live in weeks, and it&apos;s yours to keep.</b></p>

        <div className="frame" ref={frameRef}>
          <div className="fc"><span>Today</span><span>Built</span></div>
          <svg ref={heroRef} viewBox="0 0 400 190" preserveAspectRatio="xMidYMid meet" />
        </div>

        <div className="team">
          <s>The people on it</s>
          <div className="row">{TR_TEAM.map(t => <span key={t}>{t}</span>)}</div>
        </div>
      </div>

      <div className="shead">How we build the change</div>
      <div>
        {TR_PARTS.map((p, i) => (
          <section key={i} className="phase">
            <div className="idx"><b>{p.n}</b><s>{p.sp}</s></div>
            <h2 dangerouslySetInnerHTML={{ __html: p.h }} />
            <p className="out">{p.out}</p>
            <div className="viz" dangerouslySetInnerHTML={{ __html: TR_VIZ[p.viz]() }} />
            <p className="who">{p.who}</p>
            <p className="cap" dangerouslySetInnerHTML={{ __html: p.cap }} />
            <div className="stat">
              <b dangerouslySetInnerHTML={{ __html: p.stat + ((p as {statEm?:string}).statEm ? `<em>${(p as {statEm?:string}).statEm}</em>` : '') }} />
              <p>{p.statP}</p>
            </div>
          </section>
        ))}
      </div>

      <div className="bonus">
        <s>Bonus, included</s>
        <h4>Oh — and AI, where it earns its place.</h4>
        <p>Where AI genuinely helps inside the system — a smart search, a first-draft, a prediction — it&apos;s built in. <b>But this is real engineering, not an AI badge.</b> Nice to have, not the point.</p>
      </div>

      <div className="end">
        <div className="big">Not their software.<br /><span>Yours.</span></div>
        <p>We map how it really works, build it around you, ship in weeks and hand you the keys — then keep making it better. Everyone sells you their software; <b>we build you yours.</b></p>
        <a href="/contact" onClick={onClose}>Show me what we&apos;d build →</a>
        <p className="foot">OARC — one team for the whole business. Malta.</p>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// REPUTATION CONTENT  (light theme)
// ────────────────────────────────────────────────────────────────────────────
const RE = { bg:"#F5F1E8", card:"#FBF8F1", hot:"#FF2E6C", ink:"#151312",
  dim:"rgba(21,19,18,.7)", c45:"rgba(21,19,18,.48)", line:"rgba(21,19,18,.13)" };

const SVG_RE_CHART = `<svg viewBox="0 0 300 170" style="position:absolute;inset:0;width:100%;height:100%;overflow:visible">
  <line stroke="rgba(21,19,18,.14)" stroke-width="1" x1="12" y1="152" x2="288" y2="152"/>
  <text font-family="monospace" font-size="8" fill="rgba(21,19,18,.45)" x="12" y="165">time →</text>
  <line stroke="rgba(21,19,18,.2)" stroke-width="1.5" stroke-dasharray="3 3" x1="182" y1="14" x2="182" y2="150"/>
  <text font-family="monospace" font-size="8" fill="rgba(21,19,18,.5)" text-anchor="middle" x="182" y="10">you stop paying</text>
  <path fill="none" stroke="rgba(21,19,18,.28)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
    class="draw" style="--L:440" d="M12,142 L60,96 L110,74 L160,70 L182,74 L230,110 L288,138"/>
  <path fill="none" stroke="${RE.hot}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
    class="draw" style="--L:520;animation-delay:.3s" d="M12,150 C70,148 130,132 178,104 C226,76 262,34 288,16"/>
  <text font-family="monospace" font-size="9" font-weight="700" fill="${RE.hot}" text-anchor="end" class="up" x="292" y="20" style="animation-delay:.6s">fame</text>
  <text font-family="monospace" font-size="9" font-weight="700" fill="rgba(21,19,18,.4)" text-anchor="end" class="up" x="292" y="150" style="animation-delay:.4s">ads</text>
</svg>`;

function ReputationContent({ onClose }: { onClose: () => void }) {
  const stages = [
    { n:"01", tag:"Videos & reels", h:"We make the videos that <em>get you seen</em>.", role:"Video & content team",
      cap:"Fame today is made in video. We produce the reels, short videos and social posts that actually get watched and shared — putting you in front of thousands who've never heard of you — so they walk in, order or book.",
      delivs:["Reels & short video","Founder videos","Social content","Made to be shared"],
      stat:"10×", statD:"a single reel can out-reach a month of plain posts" },
    { n:"02", tag:"In the news", h:"We get you <em>in the news</em>.", role:"PR & story team",
      cap:"People believe what they read about you more than what you say about yourself. We find the story worth covering and get it in front of the press — so your name shows up where it counts, feels official, and people trust you before they meet you.",
      delivs:["Press coverage","News features","A story worth telling","Launch moments"],
      stat:"90%", statD:"of getting covered is simply having a story worth telling" },
    { n:"03", tag:"The buzz", h:"We get the right people <em>talking about you</em>.", role:"Creator & partnerships team",
      cap:"People trust the voices they already follow. We get you onto podcasts and working with the creators your customers watch — so your name arrives from someone they already believe — and they pick you first.",
      delivs:["Creator collabs","Podcast features","Real recommendations","Partnerships"],
      stat:"3×", statD:"a recommendation from someone trusted beats any ad you could run" },
    { n:"04", tag:"Everywhere", h:"We put you <em>everywhere they look</em>.", role:"Distribution team",
      cap:"A great video or story nobody sees is a waste. We get your name spread across every place your customers spend time — social, communities and search — so it hits hard, hits wide, and the right customers keep finding you.",
      delivs:["Shared everywhere","Every platform","Communities","Top of search"],
      stat:"5×", statD:"the reach when your name is spread wide, not posted once" },
  ];
  const faqs = [
    { q: "How do you make a business famous?", a: "Four things, over and over: videos and reels that get you seen, getting you in the news, getting the right people talking about you, and putting you everywhere your customers look. Each one makes the next bigger, so your name keeps growing." },
    { q: "Do you actually make the videos?", a: "Yes — that's the heart of it. We produce the reels, short videos and social posts that get watched and shared. Video is how people discover a business they've never heard of." },
    { q: "Why is being known better than running ads?", a: "Ads stop the moment you stop paying. Being known keeps working for free. Videos, press and a name people trust stay with you and grow every time your name comes up — long after any ad budget runs dry." },
    { q: "Are you an AI company?", a: "No. We're a creative and content team. We include a small tool that hears every mention as a bonus — but the fame comes from people making videos, getting you press, and getting the right voices talking about you." },
  ];
  return (
    <div style={{ background: RE.bg, color: RE.ink }}>
      <div style={{ padding: "1.8rem 20px 2.2rem", borderBottom: `1px solid ${RE.line}` }}>
        <h1 style={{ fontFamily: "var(--font-bricolage,'Bricolage Grotesque',sans-serif)", fontWeight: 800,
          fontSize: "clamp(2.4rem,10vw,3.8rem)", lineHeight: .9, letterSpacing: "-.05em",
          textTransform: "uppercase", color: RE.ink, marginBottom: "1rem" }}>
          Make me<br />
          <em style={{ fontFamily: "var(--font-instrument-serif,'Instrument Serif',serif)",
            fontStyle: "italic", fontWeight: 400, textTransform: "none", letterSpacing: 0,
            color: RE.hot, fontSize: "1.04em" }}>famous.</em>
        </h1>
        <p style={{ fontSize: ".98rem", color: RE.dim, lineHeight: 1.6, maxWidth: "44ch" }}>
          Famous means people know you before you say a word — and pick you because of it.
          We make the videos, get you in the news, get the right people talking,
          and put you everywhere they look.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "1.2rem 2.4rem", marginTop: "1.8rem" }}>
          {[["88%","trust a real person more than any ad"], ["9 in 10","discover brands through video and social"],
            ["1st","people buy the name they already know"]].map(([v, d]) => (
            <div key={v}>
              <p style={{ fontFamily: "var(--font-bricolage,'Bricolage Grotesque',sans-serif)",
                fontWeight: 800, fontSize: "clamp(1.8rem,6vw,2.4rem)", color: RE.ink,
                letterSpacing: "-.04em", lineHeight: .85 }}>
                <span style={{ color: RE.hot }}>{v.replace(/\d+/g, m => m)}</span>
              </p>
              <p style={{ fontSize: 11, color: RE.c45, maxWidth: "18ch", marginTop: ".3rem" }}>{d}</p>
            </div>
          ))}
        </div>
      </div>
      {/* ads vs fame mechanism */}
      <Reveal>
        <div style={{ margin: "1.8rem 20px 0", background: RE.card, border: `1px solid ${RE.line}`,
          borderRadius: 14, padding: "1.4rem 1.2rem" }}>
          <p style={{ fontFamily: "monospace", fontSize: 9, letterSpacing: ".14em",
            textTransform: "uppercase", color: RE.c45, marginBottom: ".6rem" }}>Ads stop. Fame doesn't.</p>
          <div style={{ display: "flex", gap: "1rem", marginBottom: ".8rem" }}>
            <span style={{ display: "flex", alignItems: "center", gap: ".4rem", fontSize: 11, color: RE.dim }}>
              <span style={{ width: 16, height: 3, background: "rgba(21,19,18,.28)", borderRadius: 2, display: "inline-block" }}/>
              Ads — you pay to show up
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: ".4rem", fontSize: 11, color: RE.dim }}>
              <span style={{ width: 16, height: 3, background: RE.hot, borderRadius: 2, display: "inline-block" }}/>
              Fame — keeps working free
            </span>
          </div>
          <VizBox svg={SVG_RE_CHART} bg={RE.card} brd={RE.line} dot="rgba(21,19,18,.04)" />
          <p style={{ fontSize: 12, color: RE.dim, lineHeight: 1.5, marginTop: ".8rem" }}>
            <strong style={{ color: RE.hot }}>Stop paying for ads and you disappear.</strong> Fame keeps working after you stop — and it grows every time your name comes up.
          </p>
        </div>
      </Reveal>
      <div style={{ padding: "1.6rem 20px 0" }}><Kicker label="Four moves. One team." color={RE.hot} /></div>
      {stages.map((s, i) => (
        <Reveal key={i}>
          <div style={{ padding: "1.8rem 20px 2rem", borderTop: `1px solid ${RE.line}` }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: ".9rem", marginBottom: ".6rem" }}>
              <span style={{ fontFamily: "var(--font-bricolage,'Bricolage Grotesque',sans-serif)",
                fontWeight: 800, fontSize: "1.5rem", color: RE.hot }}>{s.n}</span>
              <span style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: ".13em",
                textTransform: "uppercase" as const, color: RE.c45,
                border: `1px solid rgba(21,19,18,.14)`, borderRadius: 20, padding: ".3rem .68rem" }}>{s.tag}</span>
            </div>
            <h2 style={{ fontFamily: "var(--font-bricolage,'Bricolage Grotesque',sans-serif)", fontWeight: 700,
              fontSize: "clamp(1.8rem,7vw,2.4rem)", lineHeight: 1, letterSpacing: "-.03em", color: RE.ink, marginBottom: ".6rem" }}
              dangerouslySetInnerHTML={{ __html: s.h.replace(/<em>/g,
                `<em style="font-family:var(--font-instrument-serif,serif);font-style:italic;font-weight:400;color:${RE.hot}">`) }} />
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".14em",
              textTransform: "uppercase" as const, color: RE.hot, marginBottom: ".6rem" }}>{s.role}</p>
            <p style={{ fontSize: ".92rem", color: RE.dim, lineHeight: 1.6, maxWidth: "54ch", marginBottom: ".8rem" }}>{s.cap}</p>
            <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 6, marginBottom: "1rem" }}>
              {s.delivs.map(d => (
                <span key={d} style={{ fontSize: 11.5, fontWeight: 600, color: RE.ink,
                  background: "rgba(21,19,18,.055)", borderRadius: 5, padding: ".44rem .74rem" }}>{d}</span>
              ))}
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: ".7rem",
              borderLeft: `3px solid ${RE.hot}`, paddingLeft: ".9rem" }}>
              <span style={{ fontFamily: "var(--font-bricolage,'Bricolage Grotesque',sans-serif)",
                fontWeight: 800, fontSize: "clamp(2rem,7vw,2.6rem)", letterSpacing: "-.04em", lineHeight: .8 }}>
                {s.stat}
              </span>
              <span style={{ fontSize: 12, color: RE.c45, lineHeight: 1.35, maxWidth: "28ch" }}>{s.statD}</span>
            </div>
          </div>
        </Reveal>
      ))}
      <Reveal>
        <div style={{ margin: "0 20px 1.8rem", padding: "1.5rem 1.3rem",
          border: `1px dashed rgba(21,19,18,.28)`, borderRadius: 14 }}>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".14em",
            textTransform: "uppercase" as const, color: RE.hot, marginBottom: ".7rem" }}>+ Bonus, included</p>
          <h3 style={{ fontFamily: "var(--font-bricolage,'Bricolage Grotesque',sans-serif)", fontWeight: 700,
            fontSize: "clamp(1.25rem,4vw,1.55rem)", letterSpacing: "-.02em", color: RE.ink, marginBottom: ".5rem" }}>
            Oh — and a little tool, on us.
          </h3>
          <p style={{ fontSize: ".97rem", color: RE.dim, lineHeight: 1.6 }}>
            A simple tool that pings you when anyone mentions you online.{" "}
            <strong style={{ color: RE.ink }}>Nice to have — not the main event.</strong>
          </p>
        </div>
      </Reveal>
      <FAQ items={faqs} bg={RE.bg} border={RE.line} head={RE.ink} body={RE.dim} light />
      <CTA big={<>Famous.<br /><CtaItalic>On purpose.</CtaItalic></>}
        sub="Videos, press, the right people talking, and everywhere they look — the four moves that make your name the one everyone knows."
        btn="See what people would be saying" onClose={onClose} light />
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// BRAND CONTENT  (exact prototype port — stone/oxblood light world)
// src: card_brand_1786575410242.txt
// ────────────────────────────────────────────────────────────────────────────
const BR_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;0,900;1,500&family=Manrope:wght@400;500;600;700&display=swap');
.br{
  --stone:#ECE7DE;--card:#F5F1EA;--ink:#16120F;--ox:#8A2233;--oxd:#6E1926;
  --i70:rgba(22,18,15,.7);--i45:rgba(22,18,15,.46);--i30:rgba(22,18,15,.3);
  --i16:rgba(22,18,15,.15);--i10:rgba(22,18,15,.07);
  --og:rgba(138,34,51,.3);--of:rgba(138,34,51,.09);--line:rgba(22,18,15,.13);
  --disp:'Playfair Display',serif;--ui:'Manrope',sans-serif;--e:cubic-bezier(.16,1,.3,1);
  background:var(--stone);color:var(--ink);font-family:var(--ui);-webkit-font-smoothing:antialiased}
.br *{margin:0;padding:0;box-sizing:border-box}
.br .hero{padding:1.8rem 20px 2.2rem;border-bottom:1px solid var(--line)}
.br .hero .lbl{font-size:10.5px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--ox)}
.br .hero h1{font-family:var(--disp);font-weight:900;font-size:clamp(2.5rem,10vw,3.7rem);line-height:.98;letter-spacing:-.02em;margin-top:.8rem}
.br .hero h1 em{font-style:italic;font-weight:500;color:var(--ox)}
.br .hero p{font-size:.98rem;color:var(--i70);line-height:1.6;margin-top:1.1rem;max-width:44ch}
.br .hero p b{color:var(--ink);font-weight:700}
.br .frame{margin-top:2rem;border:1px solid var(--line);border-radius:14px;background:var(--card);padding:1.4rem 1rem 1rem;box-shadow:0 14px 34px rgba(22,18,15,.06)}
.br .frame .fc{text-align:center;font-size:10px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--i30);margin-bottom:.5rem}
.br .frame svg{width:100%;display:block;overflow:visible}
.br .hero .team{margin-top:1.7rem}
.br .hero .team s{font-size:10px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--i45);font-style:normal;text-decoration:none}
.br .hero .team .row{display:flex;flex-wrap:wrap;gap:6px;margin-top:.7rem}
.br .hero .team .row span{border:1px solid var(--line);padding:6px 10px;font-size:11px;color:var(--i70);border-radius:2px;background:var(--card)}
.br .shead{padding:1.7rem 20px .4rem;font-size:10.5px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--i45);display:flex;align-items:center;gap:.8rem}
.br .shead::after{content:'';flex:1;height:1px;background:var(--line)}
.br .phase{padding:1.8rem 20px 2rem;border-top:1px solid var(--line)}
.br .phase:first-of-type{border-top:0}
.br .phase .idx{display:flex;align-items:baseline;gap:.6rem}
.br .phase .idx b{font-family:var(--disp);font-style:italic;font-size:1.15rem;color:var(--ox)}
.br .phase .idx s{font-size:10.5px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--i45);text-decoration:none}
.br .phase h2{font-family:var(--disp);font-weight:700;font-size:clamp(2rem,8.4vw,2.7rem);line-height:1.02;letter-spacing:-.02em;margin-top:.9rem}
.br .phase h2 em{font-style:italic;font-weight:500;color:var(--ox)}
.br .phase .out{font-family:var(--disp);font-style:italic;font-weight:500;font-size:clamp(1.35rem,5.5vw,1.7rem);color:var(--ink);margin-top:.8rem;line-height:1.2}
.br .viz{margin-top:1.5rem;border:1px solid var(--line);border-radius:10px;background:var(--card);position:relative;overflow:hidden;aspect-ratio:1/.78;box-shadow:0 1px 0 rgba(255,255,255,.7) inset}
.br .viz::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle at 1px 1px,rgba(22,18,15,.05) 1px,transparent 0);background-size:22px 22px;mask-image:radial-gradient(130% 100% at 50% 45%,#000 45%,transparent 85%)}
.br .viz svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
.br .who{margin-top:1rem;display:flex;align-items:center;gap:8px;font-size:11px;font-weight:700;letter-spacing:.02em;color:var(--ox)}
.br .who::before{content:'';width:16px;height:1px;background:var(--ox);opacity:.5}
.br .cap{margin-top:.7rem;font-size:.92rem;color:var(--i70);line-height:1.62}
.br .cap b{color:var(--ink);font-weight:700}
.br .stat{margin-top:1.1rem;display:flex;align-items:baseline;gap:.7rem;padding-top:1rem;border-top:1px solid var(--line)}
.br .stat b{font-family:var(--disp);font-size:clamp(2.4rem,11vw,3.2rem);font-weight:700;letter-spacing:-.02em;line-height:.86}
.br .stat b em{font-style:italic;font-size:.4em;color:var(--ox);font-weight:500}
.br .stat p{font-size:11.5px;color:var(--i45);line-height:1.4;max-width:26ch}
.br .value{padding:.4rem 20px 1rem}
.br .vrow{display:flex;gap:.9rem;padding:1.1rem 0;border-top:1px solid var(--line);opacity:0;transform:translateY(12px);transition:opacity .6s var(--e),transform .6s var(--e)}
.br .vrow:first-child{border-top:0}
.br .vrow.live{opacity:1;transform:none}
.br .vrow .vn{font-family:var(--disp);font-style:italic;font-weight:500;color:var(--ox);font-size:1rem;flex-shrink:0;width:1.5rem;line-height:1.5}
.br .vrow .vc h4{font-family:var(--disp);font-weight:700;font-size:1.22rem;letter-spacing:-.01em;line-height:1.12}
.br .vrow .vc p{font-size:.9rem;color:var(--i70);line-height:1.55;margin-top:.35rem}
.br .vrow .vc .st2{display:inline-block;margin-top:.55rem;font-size:10px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--ox);border:1px solid var(--og);padding:4px 9px;border-radius:2px}
.br .breadth{padding:.6rem 20px 1.2rem}
.br .clu{padding:1.15rem 0;border-top:1px solid var(--line)}
.br .clu:first-child{border-top:0}
.br .clu h5{display:flex;align-items:baseline;gap:.55rem;font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--ox)}
.br .clu h5 b{font-family:var(--disp);font-style:italic;font-weight:500;font-size:1.05rem;color:var(--i30);letter-spacing:0}
.br .clu .items{display:flex;flex-wrap:wrap;gap:6px;margin-top:.75rem}
.br .clu .items span{border:1px solid var(--line);background:var(--card);padding:6px 10px;font-size:11.5px;color:var(--i70);border-radius:2px}
.br .bonus{margin:0 20px;padding:1.3rem 1.4rem;border:1px dashed var(--line);border-radius:10px;background:var(--card)}
.br .bonus s{font-size:10px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--i45);font-style:normal;text-decoration:none}
.br .bonus h4{font-family:var(--disp);font-style:italic;font-weight:500;font-size:1.3rem;margin:.4rem 0 .5rem}
.br .bonus p{font-size:.88rem;color:var(--i70);line-height:1.55}
.br .bonus p b{color:var(--ink);font-weight:700}
.br .end{padding:2.2rem 20px calc(2.4rem + env(safe-area-inset-bottom));border-top:1px solid var(--line);margin-top:1.7rem}
.br .end .big{font-family:var(--disp);font-weight:700;font-size:clamp(2.3rem,9.6vw,3.3rem);line-height:1.04;letter-spacing:-.02em}
.br .end .big span{font-style:italic;font-weight:500;color:var(--ox)}
.br .end p{font-size:.95rem;color:var(--i70);line-height:1.64;max-width:46ch;margin-top:1.1rem}
.br .end p b{color:var(--ink);font-weight:700}
.br .end a{display:block;margin-top:1.4rem;text-align:center;font-size:12px;font-weight:700;letter-spacing:.13em;text-transform:uppercase;color:var(--stone);background:var(--ox);text-decoration:none;padding:1.15rem;border-radius:6px}
.br .end .foot{font-size:11px;color:var(--i30);letter-spacing:.04em;margin-top:1.4rem}
.br .wire{stroke:var(--i16);stroke-width:1.25;fill:none}
.br .node{fill:var(--i16)} .br .nodeOn{fill:var(--ox)}
.br .ring{fill:none;stroke:var(--ox);stroke-width:1.5}
.br .lab{font-family:'Manrope';font-weight:600;fill:var(--i70)}
.br .labA{font-family:'Manrope';font-weight:700;fill:var(--ox)}
.br .labk{font-family:'Manrope';font-weight:700;fill:var(--stone)}
.br .glow{filter:drop-shadow(0 0 7px var(--og))}
.br .draw{stroke-dasharray:var(--L,240);stroke-dashoffset:var(--L,240)}
.br .live .draw{animation:br-draw 1.15s var(--e) forwards}
@keyframes br-draw{to{stroke-dashoffset:0}}
.br .pop{opacity:0;transform:scale(.4);transform-origin:center}
.br .live .pop{animation:br-pop .5s var(--e) forwards}
@keyframes br-pop{to{opacity:1;transform:scale(1)}}
.br .up{opacity:0}
.br .live .up{animation:br-up .6s var(--e) forwards}
@keyframes br-up{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}
.br .grow{transform:scaleY(0);transform-origin:50% 100%}
.br .live .grow{animation:br-grw .7s var(--e) forwards}
@keyframes br-grw{to{transform:scaleY(1)}}
@media(prefers-reduced-motion:reduce){.br *{animation:none!important;transition-duration:.01ms!important}.br .up,.br .pop{opacity:1;transform:none}.br .draw{stroke-dashoffset:0}.br .grow{transform:none}.br .vrow{opacity:1;transform:none}}
`;

const BR_OX = '#8A2233';
const BR_TEAM = ['Brand strategists','Naming & voice','Designers','The Studio'];

const BR_PARTS = [
  { n:'01', sp:'Purpose', h:'What you actually <em>stand for.</em>', out:'A belief, not a slogan.',
    who:'Brand strategists',
    cap:'We find the real reason your business exists beyond making money \u2014 the belief a certain kind of customer will choose you for. It\u2019s not a tagline; it\u2019s the thing everything else is built on. The bakery that\u2019s really about mornings worth waking up for; the gym that\u2019s really about proving something to yourself.',
    stat:'64', statEm:'%', statP:'say shared values are the main reason they choose one brand over another', viz:'purpose' },
  { n:'02', sp:'Positioning', h:'The one place you <em>own.</em>', out:'Where you win by default.',
    who:'Brand strategists',
    cap:'Most businesses fight in the same crowded spot and end up competing on price. We find the space that\u2019s yours alone \u2014 the promise no competitor is making \u2014 so that for the right customer <b>you\u2019re not the better choice, you\u2019re the only one.</b>',
    stat:'1', statP:'position no competitor can take from you \u2014 the end of competing on price', viz:'positioning' },
  { n:'03', sp:'Naming & voice', h:'How you <em>sound and feel.</em>', out:'Recognisable in a dark room.',
    who:'Naming & voice',
    cap:'A name, a voice, a look and a feeling that are unmistakably yours \u2014 the same on the sign, the post and the reply. Consistency is what turns a business into something people recognise before they read the name. Even a single signature colour does most of that work.',
    stat:'80', statEm:'%', statP:'how much a signature colour can lift brand recognition', viz:'personality' },
  { n:'04', sp:'Promise', h:'Why they pick you over <em>cheaper.</em>', out:'The reason to pay more.',
    who:'Brand strategists',
    cap:'A brand\u2019s real job is to make price the second question. We build the promise \u2014 what a customer can always count on from you \u2014 so people choose you knowing you cost more, and feel right about it. <b>That\u2019s what turns a business into a brand people pay more for.</b>',
    stat:'46', statEm:'%', statP:'of people will pay more to buy from a brand they trust', viz:'promise' },
  { n:'05', sp:'The system', h:'Then it shows up the <em>same.</em>', out:'Everywhere, without slipping.',
    who:'Designers \u2192 The Studio',
    cap:'The foundation becomes a system \u2014 the rules, the assets, the guardrails \u2014 so every menu, ad, post and shopfront looks and sounds like the same business. Then it\u2019s handed to the Studio to produce, already knowing exactly what it should be. Consistency alone is worth real money.',
    stat:'23', statEm:'%', statP:'how much consistent brand presentation can lift revenue', viz:'system' },
] as const;

const BR_CLUSTERS: [string,string[]][] = [
  ['Strategy',['Brand strategy','Positioning','Naming','Brand architecture','Messaging','Tone of voice','Category & competitor audit','Brand workshops']],
  ['Identity',['Logo & marks','Visual identity system','Typography','Colour system','Iconography','Brand guidelines','Brand book','Sub-brands & lockups']],
  ['Content & film',['Photography','Food & product shoots','Video & film','Motion graphics','Animation','Illustration','3D & CGI','Music & sound']],
  ['Digital & product',['Website design','UI / UX','Product design','Landing pages','Email design','Social templates','Design systems']],
  ['Campaign & words',['Campaign concepts','Ad creative','Copywriting','Taglines & scripts','Launch campaigns','Content series']],
  ['Physical & space',['Print & editorial','Packaging','Signage','Environmental','Merch & apparel','Events & exhibitions','Menus & collateral']],
];

const BR_VALUE: [string,string,string][] = [
  ['You can charge more \u2014 and they pay it','Price stops being the first question. When people trust and recognise you, they choose you knowing you cost more, and feel right about it.','You set the price'],
  ['You stop competing on price','With a position that\u2019s yours alone, the right customer has no real alternative \u2014 so you win without discounting your way there.','No race to the bottom'],
  ['You\u2019re remembered \u2014 and recommended','People recall you before they even search, and tell others. 88% trust a word from someone they know over any ad you could buy.','88% trust word of mouth'],
  ['Every marketing euro works harder','A consistent brand makes every ad, post and page convert better \u2014 the creative alone drives about half of what an ad returns.','~49% of ad return'],
  ['The business itself becomes worth more','A brand is an asset on the business, not a cost \u2014 it\u2019s what a buyer, investor or partner pays a premium for when it matters.','An asset, not a cost'],
];

const BR_VIZ: Record<string, () => string> = {
  purpose() {
    let s='<circle class="wire draw" style="--L:440" cx="200" cy="118" r="70"/><circle class="wire draw" style="--L:660;animation-delay:.2s" cx="200" cy="118" r="104"/>';
    s+='<circle class="nodeOn glow pop" cx="200" cy="118" r="26" style="animation-delay:.3s"/><text class="labk pop" x="200" y="122" font-size="12" text-anchor="middle" style="animation-delay:.45s">why</text>';
    const sat=[[200,48],[270,118],[200,188],[130,118]];sat.forEach((p,i)=>{s+=`<circle class="node pop" cx="${p[0]}" cy="${p[1]}" r="6" style="animation-delay:${.7+i*.1}s"/>`;});
    s+='<text class="lab up" x="200" y="228" font-size="10.5" text-anchor="middle" opacity=".55" style="animation-delay:1s">everything is built on it</text>';
    return `<svg viewBox="0 0 400 240">${s}</svg>`;
  },
  positioning() {
    let s='<line class="wire" x1="42" y1="196" x2="360" y2="196"/><line class="wire" x1="42" y1="36" x2="42" y2="196"/>';
    const comp=[[82,168],[112,180],[96,150],[132,166],[72,150]];comp.forEach((p,i)=>{s+=`<circle class="node pop" cx="${p[0]}" cy="${p[1]}" r="6" style="animation-delay:${.2+i*.08}s"/>`;});
    s+='<text class="lab up" x="100" y="192" font-size="10" text-anchor="middle" opacity=".5" style="animation-delay:.6s">everyone else</text>';
    s+='<circle class="ring glow pop" cx="300" cy="80" r="30" style="animation-delay:.95s"/><circle class="nodeOn glow pop" cx="300" cy="80" r="12" style="animation-delay:.9s"/>';
    s+='<text class="labA up" x="300" y="132" font-size="11" text-anchor="middle" style="animation-delay:1.1s">you, alone</text>';
    return `<svg viewBox="0 0 400 216">${s}</svg>`;
  },
  personality() {
    const surf:[string,number][]=[['post',54],['sign',164],['reply',274]];let s='';
    surf.forEach((t,i)=>{const x=t[1];s+=`<rect class="wire up" x="${x}" y="54" width="82" height="104" rx="8" style="animation-delay:${i*.15}s"/>`+
      `<circle class="nodeOn glow pop" cx="${x+41}" cy="92" r="15" style="animation-delay:${.5+i*.15}s"/>`+
      `<rect class="node up" x="${x+16}" y="120" width="50" height="6" rx="3" style="animation-delay:${.6+i*.15}s"/>`+
      `<rect class="node up" x="${x+16}" y="132" width="34" height="6" rx="3" style="animation-delay:${.65+i*.15}s"/>`+
      `<text class="lab up" x="${x+41}" y="180" font-size="10" text-anchor="middle" opacity=".55" style="animation-delay:${.7+i*.15}s">${t[0]}</text>`;});
    s+='<text class="labA up" x="200" y="208" font-size="10.5" text-anchor="middle" style="animation-delay:1s">recognisable anywhere</text>';
    return `<svg viewBox="0 0 400 222">${s}</svg>`;
  },
  promise() {
    let s='<rect class="wire up" x="54" y="56" width="118" height="118" rx="10" style="animation-delay:.2s"/><text class="lab up" x="113" y="122" font-size="15" text-anchor="middle" style="animation-delay:.3s">\u20ac</text><text class="lab up" x="113" y="196" font-size="10.5" text-anchor="middle" opacity=".55" style="animation-delay:.4s">cheaper</text>';
    s+='<rect class="nodeOn glow pop" x="228" y="56" width="118" height="118" rx="10" style="animation-delay:.6s"/><text class="labk pop" x="287" y="124" font-size="17" text-anchor="middle" style="animation-delay:.75s">\u20ac\u20ac</text>';
    s+=`<circle class="ring glow pop" cx="336" cy="66" r="16" style="animation-delay:1s"/><path class="draw" style="--L:24;animation-delay:1.2s" d="M328,66 l5,6 l11,-13" stroke="${BR_OX}" stroke-width="2.6" fill="none" stroke-linecap="round"/>`;
    s+='<text class="labA up" x="287" y="196" font-size="10.5" text-anchor="middle" style="animation-delay:1s">still chosen</text>';
    return `<svg viewBox="0 0 400 210">${s}</svg>`;
  },
  system() {
    let s='<rect class="nodeOn glow pop" x="150" y="28" width="100" height="34" rx="7" style="animation-delay:.2s"/><text class="labk pop" x="200" y="50" font-size="11" text-anchor="middle" style="animation-delay:.35s">foundation</text>';
    const outs=[64,148,232,316];outs.forEach((x,i)=>{s+=`<line class="wire draw" style="--L:120;animation-delay:${.5+i*.1}s" x1="200" y1="62" x2="${x+26}" y2="118"/>`+
      `<rect class="wire up" x="${x}" y="118" width="52" height="66" rx="8" style="animation-delay:${.7+i*.1}s"/>`+
      `<circle class="nodeOn pop" cx="${x+26}" cy="142" r="9" style="animation-delay:${.9+i*.1}s"/>`+
      `<rect class="node up" x="${x+11}" y="160" width="30" height="5" rx="2" style="animation-delay:${1+i*.1}s"/>`;});
    s+='<text class="lab up" x="200" y="206" font-size="10.5" text-anchor="middle" opacity=".55" style="animation-delay:1.2s">the same everywhere \u2014 handed to the Studio</text>';
    return `<svg viewBox="0 0 400 220">${s}</svg>`;
  },
};

function BrandContent({ onClose }: { onClose: () => void }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const universeRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const id = 'br-modal-css';
    if (!document.getElementById(id)) {
      const s = document.createElement('style');
      s.id = id; s.textContent = BR_CSS;
      document.head.appendChild(s);
    }
  }, []);

  // hero: the whole creative world radiating from you
  useEffect(() => {
    const universe = universeRef.current; if (!universe) return;
    const cx=200,cy=150,R=94,crafts=['Strategy','Identity','Film & content','Digital','Campaign','Physical & space'];let s='';
    crafts.forEach((nm,i)=>{const a=-Math.PI/2+i/crafts.length*Math.PI*2,x=cx+Math.cos(a)*R,y=cy+Math.sin(a)*R;
      s+=`<line class="wire draw" style="--L:120;animation-delay:${.3+i*.09}s" x1="${cx}" y1="${cy}" x2="${x}" y2="${y}"/>`+
         `<circle class="nodeOn glow pop" cx="${x}" cy="${y}" r="7" style="animation-delay:${.6+i*.09}s"/>`;
      const lx=cx+Math.cos(a)*(R+12),ly=cy+Math.sin(a)*(R+12),an=Math.cos(a)>.25?'start':(Math.cos(a)<-.25?'end':'middle');
      s+=`<text class="lab up" x="${lx}" y="${ly+4}" font-size="11" text-anchor="${an}" style="animation-delay:${.8+i*.09}s">${nm}</text>`;});
    s+=`<circle class="ring glow pop" cx="${cx}" cy="${cy}" r="30" style="animation-delay:.2s"/>`+
       `<circle class="nodeOn glow pop" cx="${cx}" cy="${cy}" r="17" style="animation-delay:.25s"/>`+
       `<text class="labk pop" x="${cx}" y="${cy+4}" font-size="10" text-anchor="middle" style="animation-delay:.4s">you</text>`;
    universe.innerHTML = s;
    const id = requestAnimationFrame(() => frameRef.current?.classList.add('live'));
    return () => cancelAnimationFrame(id);
  }, []);

  // reveal
  useEffect(() => {
    const io = new IntersectionObserver(
      es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('live'); io.unobserve(e.target); } }),
      { threshold: 0.25 }
    );
    wrapRef.current?.querySelectorAll('.br .viz,.br .clu,.br .vrow').forEach(v => io.observe(v));
    return () => io.disconnect();
  }, []);

  return (
    <div className="br" ref={wrapRef}>
      <div className="hero">
        <p className="lbl">Creative and brand</p>
        <h1>Everything they see,<br /><em>hear and feel.</em></h1>
        <p>Every image, film, word, screen, sign and space that makes someone feel something about your business — and choose you. Strategy, identity, content, product, campaigns, the lot. <b>One team for the entire creative world of your company.</b></p>

        <div className="frame" ref={frameRef}>
          <div className="fc">One creative world — every craft</div>
          <svg ref={universeRef} viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet" />
        </div>

        <div className="team">
          <s>The people on it</s>
          <div className="row">{BR_TEAM.map(t => <span key={t}>{t}</span>)}</div>
        </div>
      </div>

      <div className="shead">The strategy underneath it all</div>
      <div>
        {BR_PARTS.map((p, i) => (
          <section key={i} className="phase">
            <div className="idx"><b>{p.n}</b><s>{p.sp}</s></div>
            <h2 dangerouslySetInnerHTML={{ __html: p.h }} />
            <p className="out">{p.out}</p>
            <div className="viz" dangerouslySetInnerHTML={{ __html: BR_VIZ[p.viz]() }} />
            <p className="who">{p.who}</p>
            <p className="cap" dangerouslySetInnerHTML={{ __html: p.cap }} />
            <div className="stat">
              <b dangerouslySetInnerHTML={{ __html: p.stat + ((p as {statEm?:string}).statEm ? `<em>${(p as {statEm?:string}).statEm}</em>` : '') }} />
              <p>{p.statP}</p>
            </div>
          </section>
        ))}
      </div>

      <div className="shead">What it&apos;s worth to you</div>
      <div className="value">
        {BR_VALUE.map((v, i) => (
          <div key={i} className="vrow">
            <div className="vn">0{i + 1}</div>
            <div className="vc"><h4>{v[0]}</h4><p>{v[1]}</p><span className="st2">{v[2]}</span></div>
          </div>
        ))}
      </div>

      <div className="shead">Then we make all of it — one team</div>
      <div className="breadth">
        {BR_CLUSTERS.map((c, ci) => (
          <div key={ci} className="clu">
            <h5><b>0{ci + 1}</b>{c[0]}</h5>
            <div className="items">
              {c[1].map((x, xi) => <span key={xi} className="up" style={{ animationDelay:`${xi*.03}s` }}>{x}</span>)}
            </div>
          </div>
        ))}
      </div>

      <div className="bonus">
        <s>Bonus, included</s>
        <h4>Oh — and a little tool, on us.</h4>
        <p>A small tool that scans where your brand is showing up inconsistent — an old logo here, a wrong colour there — so nothing slips. <b>Nice to have, not the main event.</b> The thinking is done by the people above.</p>
      </div>

      <div className="end">
        <div className="big">The whole way your business<br /><span>looks, sounds and feels.</span></div>
        <p>Strategy that decides what you stand for, and every craft that brings it to life — identity, film, digital, campaigns, space. <b>One team, one standard, everywhere anyone meets you.</b></p>
        <a href="/contact" onClick={onClose}>Build our creative world →</a>
        <p className="foot">OARC — one team for the whole business. Malta.</p>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// ENQUIRIES CONTENT  (noir / crimson — omnichannel AI that converts leads)
// ────────────────────────────────────────────────────────────────────────────
const SVG_EQ_SPEED = `<svg viewBox="0 0 400 220" style="position:absolute;inset:0;width:100%;height:100%;overflow:visible">
  <text font-family="monospace" font-size="9" fill="rgba(242,239,233,.38)" letter-spacing=".1em" class="up" x="24" y="28" style="animation-delay:.05s">ENQUIRY IN</text>
  ${["WhatsApp","Phone","DMs","Email"].map((ch, i) => {
    const y = 44 + i * 36;
    return `<rect fill="rgba(224,43,32,.08)" stroke="rgba(224,43,32,.28)" stroke-width="1.25" rx="5" class="up" x="24" y="${y}" width="148" height="26" style="animation-delay:${0.15 + i * 0.1}s"/>
    <text font-family="monospace" font-size="10" fill="rgba(242,239,233,.72)" class="up" x="38" y="${y + 17}" style="animation-delay:${0.28 + i * 0.1}s">${ch}</text>`;
  }).join("")}
  <line stroke="rgba(242,239,233,.14)" stroke-width="1.25" class="draw" style="--L:66;animation-delay:.65s" x1="172" y1="110" x2="238" y2="110"/>
  <circle fill="#E02B20" class="pop" cx="272" cy="110" r="34" style="animation-delay:.82s"/>
  <text font-family="monospace" font-size="14" font-weight="700" fill="#fff" text-anchor="middle" class="up" x="272" y="104" style="animation-delay:.96s">00:04</text>
  <text font-family="monospace" font-size="8.5" fill="rgba(255,255,255,.75)" text-anchor="middle" class="up" x="272" y="120" style="animation-delay:1.01s">seconds</text>
  <line stroke="rgba(224,43,32,.35)" stroke-width="1.25" class="draw" style="--L:54;animation-delay:1.1s" x1="305" y1="96" x2="346" y2="74"/>
  <line stroke="rgba(224,43,32,.35)" stroke-width="1.25" class="draw" style="--L:54;animation-delay:1.2s" x1="305" y1="124" x2="346" y2="146"/>
  <rect fill="rgba(242,239,233,.06)" stroke="rgba(242,239,233,.12)" stroke-width="1.25" rx="6" class="up" x="340" y="58" width="52" height="28" style="animation-delay:1.15s"/>
  <text font-family="monospace" font-size="10" fill="rgba(242,239,233,.72)" text-anchor="middle" class="up" x="366" y="76" style="animation-delay:1.3s">Book</text>
  <rect fill="#E02B20" rx="6" class="pop" x="340" y="130" width="52" height="28" style="animation-delay:1.25s"/>
  <text font-family="monospace" font-size="10" fill="#fff" text-anchor="middle" class="pop" x="366" y="148" style="animation-delay:1.4s">Close</text>
</svg>`;

const SVG_EQ_QUALIFY = `<svg viewBox="0 0 400 210" style="position:absolute;inset:0;width:100%;height:100%;overflow:visible">
  <circle fill="rgba(224,43,32,.1)" stroke="#E02B20" stroke-width="1.5" class="pop" cx="52" cy="105" r="28" style="animation-delay:.1s"/>
  <text font-family="monospace" font-size="9" fill="#E02B20" text-anchor="middle" class="up" x="52" y="101" style="animation-delay:.22s">Enquiry</text>
  <text font-family="monospace" font-size="8.5" fill="rgba(242,239,233,.5)" text-anchor="middle" class="up" x="52" y="115" style="animation-delay:.27s">in</text>
  <line stroke="rgba(242,239,233,.14)" stroke-width="1.25" class="draw" style="--L:56;animation-delay:.32s" x1="80" y1="105" x2="136" y2="105"/>
  <rect fill="rgba(242,239,233,.05)" stroke="rgba(242,239,233,.12)" stroke-width="1.25" rx="8" class="pop" x="136" y="72" width="104" height="66" style="animation-delay:.44s"/>
  <text font-family="monospace" font-size="9" fill="rgba(242,239,233,.55)" text-anchor="middle" class="up" x="188" y="95" style="animation-delay:.56s">Budget?</text>
  <text font-family="monospace" font-size="9" fill="rgba(242,239,233,.55)" text-anchor="middle" class="up" x="188" y="110" style="animation-delay:.62s">Timeline?</text>
  <text font-family="monospace" font-size="9" fill="rgba(242,239,233,.55)" text-anchor="middle" class="up" x="188" y="125" style="animation-delay:.68s">Decision?</text>
  <line stroke="rgba(242,239,233,.14)" stroke-width="1.25" class="draw" style="--L:56;animation-delay:.78s" x1="240" y1="105" x2="296" y2="105"/>
  <circle fill="#E02B20" class="pop" cx="324" cy="105" r="28" style="animation-delay:.92s"/>
  <text font-family="monospace" font-size="9" font-weight="700" fill="#fff" text-anchor="middle" class="up" x="324" y="101" style="animation-delay:1.06s">Booked</text>
  <text font-family="monospace" font-size="8.5" fill="rgba(255,255,255,.7)" text-anchor="middle" class="up" x="324" y="115" style="animation-delay:1.11s">auto</text>
</svg>`;

const SVG_EQ_CHASE = `<svg viewBox="0 0 400 228" style="position:absolute;inset:0;width:100%;height:100%;overflow:visible">
  <text font-family="monospace" font-size="9" fill="rgba(242,239,233,.38)" letter-spacing=".08em" class="up" x="24" y="24" style="animation-delay:.05s">AUTO FOLLOW-UP CHAIN</text>
  <rect fill="#E02B20" rx="7" class="up" x="72" y="40" width="256" height="30" style="animation-delay:.15s"/>
  <text font-family="monospace" font-size="10" fill="#fff" text-anchor="middle" class="up" x="200" y="59" style="animation-delay:.3s">Answered in 00:04</text>
  <line stroke="rgba(242,239,233,.18)" stroke-width="1.25" class="draw" style="--L:22;animation-delay:.42s" x1="200" y1="70" x2="200" y2="92"/>
  <rect fill="rgba(242,239,233,.05)" stroke="rgba(242,239,233,.12)" stroke-width="1.25" rx="7" class="up" x="72" y="92" width="256" height="30" style="animation-delay:.48s"/>
  <text font-family="monospace" font-size="10" fill="rgba(242,239,233,.7)" text-anchor="middle" class="up" x="200" y="111" style="animation-delay:.62s">No reply → Day 1 follow-up</text>
  <line stroke="rgba(242,239,233,.18)" stroke-width="1.25" class="draw" style="--L:22;animation-delay:.74s" x1="200" y1="122" x2="200" y2="144"/>
  <rect fill="rgba(242,239,233,.05)" stroke="rgba(242,239,233,.12)" stroke-width="1.25" rx="7" class="up" x="72" y="144" width="256" height="30" style="animation-delay:.8s"/>
  <text font-family="monospace" font-size="10" fill="rgba(242,239,233,.7)" text-anchor="middle" class="up" x="200" y="163" style="animation-delay:.94s">Still quiet → Day 3 nudge</text>
  <line stroke="rgba(242,239,233,.18)" stroke-width="1.25" class="draw" style="--L:22;animation-delay:1.06s" x1="200" y1="174" x2="200" y2="196"/>
  <rect fill="#E02B20" rx="7" class="up" x="72" y="196" width="256" height="30" style="animation-delay:1.12s"/>
  <text font-family="monospace" font-size="10" fill="#fff" text-anchor="middle" class="up" x="200" y="215" style="animation-delay:1.26s">Final win-back — Day 7</text>
</svg>`;

const SVG_EQ_PIPE = `<svg viewBox="0 0 400 226" style="position:absolute;inset:0;width:100%;height:100%;overflow:visible">
  <text font-family="monospace" font-size="9" fill="rgba(242,239,233,.38)" letter-spacing=".08em" class="up" x="16" y="26" style="animation-delay:.05s">PIPELINE</text>
  ${["New","Qualified","Booked","Closed"].map((label, i) => {
    const x = 16 + i * 94;
    const h = [88, 60, 40, 76][i];
    const col = i === 3 ? "#E02B20" : `rgba(224,43,32,${[".28",".48",".66"][i]})`;
    return `<rect fill="rgba(242,239,233,.04)" stroke="rgba(242,239,233,.1)" stroke-width="1.25" rx="6" class="up" x="${x}" y="40" width="82" height="160" style="animation-delay:${0.1 + i * 0.08}s"/>
    <text font-family="monospace" font-size="8.5" fill="rgba(242,239,233,.42)" text-anchor="middle" class="up" x="${x + 41}" y="57" style="animation-delay:${0.2 + i * 0.08}s">${label}</text>
    <rect fill="${col}" rx="3" class="grow" x="${x + 8}" y="${200 - h}" width="66" height="${h}" style="animation-delay:${0.35 + i * 0.1}s"/>`;
  }).join("")}
</svg>`;

function EnquiriesContent({ onClose }: { onClose: () => void }) {
  const channels = [
    { id:"WA", label:"WhatsApp",  desc:"Bookings, questions, follow-ups — where people actually message." },
    { id:"PH", label:"Phone",     desc:"Missed calls returned in seconds. Your voice, your greeting." },
    { id:"DM", label:"DMs",       desc:"Instagram & Facebook messages answered while you're on service." },
    { id:"EM", label:"Email",     desc:"Quotes, confirmations and invoices — written, sent, chased." },
  ];
  const phases = [
    { n:"01", sp:"Instant answer",  h:"Answered in <em>00:04.</em>",         stat:"00:04",
      statD:"average first reply — before a person could pick up the phone",
      cap:"The moment an enquiry comes in — WhatsApp, phone, DM, email — it gets a real answer in four seconds. Day or night. A person answering this fast would need to be at the desk every second of every day. The AI is.",
      svg: SVG_EQ_SPEED, svgCap:"Every channel, one AI, four seconds to reply." },
    { n:"02", sp:"Qualify & book", h:"Qualified, then <em>booked.</em>",      stat:"21×",
      statD:"more likely to qualify a lead answered in 5 min vs 30 — so we never wait",
      cap:"The AI doesn't just reply — it asks the right questions and books the ones who are ready. Budget, timeline, decision-maker — confirmed in the same conversation. The calendar fills without a person in the loop.",
      svg: SVG_EQ_QUALIFY, svgCap:"Enquiry in, qualification confirmed, booked automatically." },
    { n:"03", sp:"Chased to paid", h:"Chased until <em>paid.</em>",           stat:"2.3×",
      statD:"more revenue when stalled leads are properly followed up",
      cap:"Most leads go cold because nobody followed up. The AI chases on a set cadence — day one, day three, day seven. Each follow-up is fresh. It doesn't get embarrassed; it doesn't give up.",
      svg: SVG_EQ_CHASE, svgCap:"Auto follow-up chain: day 1, day 3, day 7." },
    { n:"04", sp:"Pipeline",        h:"Every lead <em>tracked.</em>",          stat:"One",
      statD:"pipeline — every enquiry, every stage, every action visible at a glance",
      cap:"Every lead is logged the moment it arrives, moved through the pipeline as it progresses, and flagged when it needs a human. Nothing falls through. You see the whole picture at a glance.",
      svg: SVG_EQ_PIPE, svgCap:"New → Qualified → Booked → Closed. Nothing missed." },
  ];
  const faqs = [
    { q:"What does 'turn enquiries into money' mean in practice?",
      a:"Every enquiry answered in seconds, qualified and booked automatically, chased until paid, and tracked in one pipeline. The AI handles the first three steps without anyone lifting a finger — your team closes the deals that need a person." },
    { q:"Which channels does it cover?",
      a:"WhatsApp, phone (voice), Instagram and Facebook DMs, and email. One AI, one memory, every channel — so a lead that starts on WhatsApp and calls back the next day gets a consistent experience." },
    { q:"What if it gets something wrong?",
      a:"Every AI has a built-in human fallback. If it hits something outside its scope, it flags a person immediately. We monitor every conversation and tune the AI weekly." },
    { q:"Are you an AI company?",
      a:"We're a team that builds, trains and runs AI for real businesses. The AI handles the speed; the pipeline and follow-up cadence are designed by people. Together, enquiries become a reliable revenue engine instead of a leaky bucket." },
  ];
  return (
    <div style={{ background:T.noir, color:T.ivory }}>
      <div style={{ padding:"1.8rem 20px 2.2rem", borderBottom:`1px solid ${T.line}` }}>
        <h1 style={{ fontFamily:"var(--font-bricolage,'Bricolage Grotesque',sans-serif)", fontWeight:800,
          fontSize:"clamp(2.4rem,10vw,3.8rem)", lineHeight:.9, letterSpacing:"-.05em",
          textTransform:"uppercase", color:T.ivory, marginBottom:"1rem" }}>
          Turn enquiries<br />
          <em style={{ fontFamily:"var(--font-instrument-serif,'Instrument Serif',serif)",
            fontStyle:"italic", fontWeight:400, textTransform:"none", letterSpacing:0,
            color:T.scar, fontSize:"1.04em" }}>into money.</em>
        </h1>
        <p style={{ fontSize:".98rem", color:T.dim, lineHeight:1.6, maxWidth:"44ch" }}>
          Every enquiry answered in four seconds, qualified, booked, and chased until paid.{" "}
          <strong style={{ color:T.ivory }}>One AI across WhatsApp, phone, DMs and email — every lead tracked in one pipeline.</strong>
        </p>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginTop:"1.6rem" }}>
          {channels.map(ch => (
            <div key={ch.id} style={{ background:T.card, border:`1px solid ${T.line}`, borderRadius:8, padding:"10px 12px" }}>
              <p style={{ fontFamily:"monospace", fontSize:9, color:T.scar, letterSpacing:".1em",
                textTransform:"uppercase" as const, marginBottom:4 }}>{ch.label}</p>
              <p style={{ fontFamily:"monospace", fontSize:10, color:T.dim, lineHeight:1.55 }}>{ch.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <StatStrip items={[
        { n:"00:04", label:"avg first reply — any hour, any day" },
        { n:"21",  s:"×", label:"more likely to qualify at 5 min vs 30" },
        { n:"30",  s:"%", label:"of leads today are never contacted at all" },
      ]} />
      <div style={{ padding:"1.6rem 20px 0" }}><Kicker label="How every enquiry becomes revenue" /></div>
      {phases.map((p, i) => (
        <Reveal key={i}>
          <div style={{ padding:"1.8rem 20px 2rem", borderTop:`1px solid ${T.line}` }}>
            <div style={{ display:"flex", alignItems:"baseline", gap:".6rem", marginBottom:".8rem" }}>
              <span style={{ fontFamily:"monospace", fontSize:11, color:T.scar }}>{p.n}</span>
              <span style={{ fontFamily:"monospace", fontSize:9, letterSpacing:".16em",
                textTransform:"uppercase" as const, color:T.dimLow }}>{p.sp}</span>
            </div>
            <h2 style={{ fontFamily:"var(--font-bricolage,'Bricolage Grotesque',sans-serif)", fontWeight:700,
              fontSize:"clamp(1.8rem,7vw,2.4rem)", lineHeight:1.02, letterSpacing:"-.03em",
              color:T.ivory, marginBottom:".8rem" }}
              dangerouslySetInnerHTML={{ __html: p.h.replace(/<em>/g,
                `<em style="font-family:var(--font-instrument-serif,serif);font-style:italic;font-weight:400;color:${T.scar}">`) }} />
            <p style={{ fontSize:".92rem", color:T.dim, lineHeight:1.62, maxWidth:"52ch", marginBottom:"1rem" }}>{p.cap}</p>
            <VizBox svg={p.svg} />
            <p style={{ fontFamily:"monospace", fontSize:10, color:T.dimLow, marginTop:".6rem" }}>{p.svgCap}</p>
            <div style={{ display:"flex", alignItems:"baseline", gap:".7rem",
              borderTop:`1px solid ${T.line}`, marginTop:"1rem", paddingTop:"1rem" }}>
              <span style={{ fontFamily:"var(--font-bricolage,'Bricolage Grotesque',sans-serif)", fontWeight:800,
                fontSize:"clamp(2rem,7vw,2.6rem)", color:T.ivory, letterSpacing:"-.04em", lineHeight:.85 }}>{p.stat}</span>
              <span style={{ fontSize:11, color:T.dimLow, lineHeight:1.4, maxWidth:"28ch" }}>{p.statD}</span>
            </div>
          </div>
        </Reveal>
      ))}
      <Reveal>
        <div style={{ margin:"0 20px 1.8rem", padding:"1.3rem 1.4rem",
          border:`1px dashed ${T.line}`, borderRadius:10, background:T.card }}>
          <Kicker label="Bonus, included" color={T.dim} />
          <h4 style={{ fontFamily:"var(--font-instrument-serif,'Instrument Serif',serif)",
            fontStyle:"italic", fontSize:"1.3rem", fontWeight:400, color:T.ivory, marginBottom:".5rem" }}>
            Oh — and a little tool, on us.
          </h4>
          <p style={{ fontSize:".88rem", color:T.dim, lineHeight:1.55 }}>
            A small tool that flags the moment a lead goes cold in the pipeline — so the team steps in before the window closes.{" "}
            <strong style={{ color:T.ivory }}>Nice to have, not the main event.</strong>
          </p>
        </div>
      </Reveal>
      <FAQ items={faqs} />
      <CTA big={<>Every lead caught.<br /><CtaItalic>Every one paid.</CtaItalic></>}
        sub="Four seconds to answer, automatic qualification and booking, chased until paid — and every lead tracked in one pipeline."
        btn="Turn your enquiries into revenue" onClose={onClose} />
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// SHIP CONTENT  (light / cyan — custom software engineering)
// ────────────────────────────────────────────────────────────────────────────
const SH = {
  bg:"#EEF1F4", card:"#F8FAFB", cy:"#0A7285", cy2:"#0E8FA8",
  ink:"#0D1220", dim:"rgba(13,18,32,.7)", c45:"rgba(13,18,32,.45)",
  c28:"rgba(13,18,32,.28)", line:"rgba(13,18,32,.12)",
};

const SVG_SH_MAP = `<svg viewBox="0 0 400 230" style="position:absolute;inset:0;width:100%;height:100%;overflow:visible">
  <text font-family="monospace" font-size="9" fill="${SH.c45}" letter-spacing=".1em" class="up" x="16" y="26" style="animation-delay:.05s">HOW IT REALLY RUNS</text>
  ${[
    { l:"WhatsApp thread",  x:14,  y:48  },
    { l:"Spreadsheet",      x:178, y:48  },
    { l:"Paper job cards",  x:14,  y:96  },
    { l:"Email chain",      x:178, y:96  },
    { l:"Phone bookings",   x:14,  y:144 },
    { l:"Manual invoices",  x:178, y:144 },
  ].map((n, i) => `
    <rect fill="rgba(14,143,168,.06)" stroke="rgba(14,143,168,.25)" stroke-width="1.25" rx="5" class="up" x="${n.x}" y="${n.y}" width="150" height="26" style="animation-delay:${0.1 + i * 0.08}s"/>
    <text font-family="monospace" font-size="9.5" fill="${SH.dim}" class="up" x="${n.x + 10}" y="${n.y + 17}" style="animation-delay:${0.22 + i * 0.08}s">${n.l}</text>
  `).join("")}
  <circle fill="#0E8FA8" class="pop" cx="358" cy="117" r="34" style="animation-delay:.72s"/>
  <text font-family="monospace" font-size="10" font-weight="700" fill="#fff" text-anchor="middle" class="up" x="358" y="113" style="animation-delay:.86s">One</text>
  <text font-family="monospace" font-size="9.5" fill="rgba(255,255,255,.85)" text-anchor="middle" class="up" x="358" y="127" style="animation-delay:.92s">system</text>
</svg>`;

const SVG_SH_FIT = `<svg viewBox="0 0 400 220" style="position:absolute;inset:0;width:100%;height:100%;overflow:visible">
  <rect fill="rgba(13,18,32,.06)" stroke="${SH.line}" stroke-width="1.25" rx="8" class="up" x="20" y="36" width="158" height="148" style="animation-delay:.1s"/>
  <text font-family="monospace" font-size="9" fill="${SH.c45}" text-anchor="middle" class="up" x="99" y="56" style="animation-delay:.2s">Off-the-shelf</text>
  <rect fill="rgba(13,18,32,.1)" rx="4" class="up" x="38" y="70" width="84" height="52" style="animation-delay:.28s"/>
  <rect fill="rgba(13,18,32,.06)" rx="3" class="up" x="134" y="80" width="28" height="30" style="animation-delay:.34s"/>
  <text font-family="monospace" font-size="8.5" fill="${SH.c45}" text-anchor="middle" class="up" x="99" y="144" style="animation-delay:.4s">You bend to fit it</text>
  <text font-family="monospace" font-size="22" fill="${SH.line}" text-anchor="middle" class="up" x="99" y="174" style="animation-delay:.45s">⟲</text>
  <rect fill="rgba(14,143,168,.09)" stroke="#0E8FA8" stroke-width="1.5" rx="8" class="pop" x="222" y="36" width="158" height="148" style="animation-delay:.58s"/>
  <text font-family="monospace" font-size="9" fill="${SH.cy}" text-anchor="middle" class="up" x="301" y="56" style="animation-delay:.7s">Built for you</text>
  <rect fill="rgba(14,143,168,.2)" stroke="#0E8FA8" stroke-width="1.5" rx="4" class="pop" x="240" y="70" width="122" height="52" style="animation-delay:.84s"/>
  <text font-family="monospace" font-size="8.5" fill="${SH.cy}" text-anchor="middle" class="up" x="301" y="144" style="animation-delay:.9s">It fits your workflow</text>
  <circle fill="#0E8FA8" class="pop" cx="318" cy="166" r="14" style="animation-delay:1.02s"/>
  <text font-family="monospace" font-size="13" fill="#fff" text-anchor="middle" class="pop" x="318" y="171" style="animation-delay:1.16s">✓</text>
</svg>`;

const SVG_SH_WEEKS = `<svg viewBox="0 0 400 210" style="position:absolute;inset:0;width:100%;height:100%;overflow:visible">
  <text font-family="monospace" font-size="9" fill="${SH.c45}" letter-spacing=".08em" class="up" x="16" y="26" style="animation-delay:.05s">TIMELINE</text>
  <text font-family="monospace" font-size="9.5" fill="${SH.c45}" class="up" x="16" y="60" style="animation-delay:.12s">Others</text>
  <rect fill="rgba(13,18,32,.1)" rx="5" class="growx" x="72" y="46" width="312" height="24" style="animation-delay:.22s"/>
  <text font-family="monospace" font-size="9" fill="${SH.c28}" class="up" x="78" y="62" style="animation-delay:.7s">12–18 months of slides</text>
  <text font-family="monospace" font-size="9.5" fill="${SH.cy}" class="up" x="16" y="104" style="animation-delay:.35s">Us</text>
  <rect fill="#0E8FA8" rx="5" class="growx" x="72" y="90" width="120" height="24" style="animation-delay:.48s"/>
  <text font-family="monospace" font-size="9" fill="#fff" class="up" x="78" y="106" style="animation-delay:.92s">6 weeks · live</text>
  <rect fill="rgba(14,143,168,.15)" stroke="#0E8FA8" stroke-width="1.5" rx="12" class="pop" x="200" y="90" width="52" height="24" style="animation-delay:.96s"/>
  <text font-family="monospace" font-size="9.5" fill="${SH.cy}" text-anchor="middle" class="up" x="226" y="106" style="animation-delay:1.1s">LIVE</text>
  <line stroke="${SH.line}" stroke-width="1" class="draw" style="--L:96;animation-delay:1.18s" x1="72" y1="140" x2="168" y2="140"/>
  ${["Discover","Design","Build","Ship"].map((s, i) => `<text font-family="monospace" font-size="8.5" fill="${SH.c45}" text-anchor="middle" class="up" x="${96 + i * 32}" y="155" style="animation-delay:${1.24 + i * 0.08}s">${s}</text>`).join("")}
</svg>`;

const SVG_SH_PLUG = `<svg viewBox="0 0 400 230" style="position:absolute;inset:0;width:100%;height:100%;overflow:visible">
  ${[
    { l:"POS",      cx:54,  cy:60  },
    { l:"Stripe",   cx:346, cy:60  },
    { l:"Sheets",   cx:54,  cy:180 },
    { l:"Calendar", cx:346, cy:180 },
    { l:"WhatsApp", cx:200, cy:30  },
  ].map((n, i) => `
    <line stroke="${SH.line}" stroke-width="1.25" class="draw" style="--L:172;animation-delay:${0.2 + i * 0.1}s" x1="${n.cx}" y1="${n.cy}" x2="200" y2="125"/>
    <circle fill="rgba(14,143,168,.08)" stroke="rgba(14,143,168,.3)" stroke-width="1.25" class="pop" cx="${n.cx}" cy="${n.cy}" r="20" style="animation-delay:${0.36 + i * 0.1}s"/>
    <text font-family="monospace" font-size="8.5" fill="${SH.cy}" text-anchor="middle" class="up" x="${n.cx}" y="${n.cy + 4}" style="animation-delay:${0.52 + i * 0.1}s">${n.l}</text>
  `).join("")}
  <circle fill="#0E8FA8" class="pop" cx="200" cy="125" r="36" style="animation-delay:.76s"/>
  <text font-family="monospace" font-size="9.5" font-weight="700" fill="#fff" text-anchor="middle" class="up" x="200" y="121" style="animation-delay:.9s">your</text>
  <text font-family="monospace" font-size="9.5" font-weight="700" fill="#fff" text-anchor="middle" class="up" x="200" y="135" style="animation-delay:.96s">system</text>
</svg>`;

function ShipContent({ onClose }: { onClose: () => void }) {
  const phases = [
    { n:"01", sp:"Discovery",        h:"We learn how it <em>really</em> runs.",   stat:"0",    statS:"",
      statD:"surprises — we map the real workflow before writing a line of code",
      out:"The real workflow, not the org chart.",
      cap:"Before a line of code, we map how your business truly runs — the WhatsApp threads, the spreadsheet everyone secretly depends on, the step only one person knows. Most transformations fail because nobody did this first. We find the actual break before we build.",
      svg:SVG_SH_MAP, svgCap:"The real tools your business runs on — discovered, then connected." },
    { n:"02", sp:"Product & design", h:"Built for <em>you</em>, not a template.", stat:"0",    statS:"",
      statD:"templates — the system is designed around your workflow, not you bent to it",
      out:"Fitted to your workflow, not you to it.",
      cap:"Off-the-shelf tools make you bend your business to their shape. We do the opposite: design the system around how you actually work, so your team adopts it in a day because it matches what they already do.",
      svg:SVG_SH_FIT, svgCap:"Off-the-shelf makes you bend. We build to your shape." },
    { n:"03", sp:"Engineering",      h:"Live in <em>weeks</em>, not years.",       stat:"6",    statS:"wk",
      statD:"to a working first version in your hands — not a year of promises",
      out:"A working version, fast.",
      cap:"We ship the smallest thing that works — the one screen, the one flow that moves the needle — live in weeks, then improve it with you in the open. You're using it while competitors are still scoping.",
      svg:SVG_SH_WEEKS, svgCap:"Discovery to live in 6 weeks — used while others are still scoping." },
    { n:"04", sp:"Integrations",     h:"Plugs into what you <em>have</em>.",       stat:"0",    statS:"",
      statD:"existing tools replaced by force — we connect what you have, not swap it out",
      out:"No rip-and-replace.",
      cap:"Your new system sits on top of the rails you already run — your POS, Stripe, your sheets, your calendar — pulling them into one place instead of replacing them. Nothing gets thrown out; everything finally talks to everything else.",
      svg:SVG_SH_PLUG, svgCap:"All your existing tools connected — nothing replaced by force." },
  ];
  const faqs = [
    { q:"Is this off-the-shelf software?",
      a:"No. We build custom software designed around how your business actually works, so your team adopts it fast instead of bending their work to a template." },
    { q:"How long does it take?",
      a:"We ship a working first version — an MVP — in 6 weeks, then improve it with you in the open. No year of slides before anything works." },
    { q:"Do I have to replace my current tools?",
      a:"No. The system plugs into the rails you already run — POS, Stripe, spreadsheets, calendar — pulling them into one place rather than replacing them." },
    { q:"Do I own it?",
      a:"Yes. The code and the data are yours — no lock-in — and we stay to evolve it as the business grows." },
    { q:"Are you an AI company?",
      a:"No. This is real product and software engineering. AI is built in only where it genuinely helps — not the point." },
  ];
  return (
    <div style={{ background:SH.bg, color:SH.ink }}>
      {/* hero */}
      <div style={{ padding:"1.8rem 20px 2.2rem", borderBottom:`1px solid ${SH.line}` }}>
        <Kicker label="Build" color={SH.cy} />
        <h1 style={{ fontFamily:"var(--font-bricolage,'Bricolage Grotesque',sans-serif)", fontWeight:800,
          fontSize:"clamp(2.4rem,10vw,3.8rem)", lineHeight:.9, letterSpacing:"-.05em",
          textTransform:"uppercase", color:SH.ink, marginBottom:"1rem" }}>
          Software your business<br />
          <em style={{ fontFamily:"var(--font-instrument-serif,'Instrument Serif',serif)",
            fontStyle:"italic", fontWeight:400, textTransform:"none", letterSpacing:0,
            color:SH.cy, fontSize:"1.04em" }}>should run on.</em>
        </h1>
        <p style={{ fontSize:".98rem", color:SH.dim, lineHeight:1.6, maxWidth:"44ch" }}>
          Some businesses run on spreadsheets, WhatsApp and duct tape. We design and build the custom software they should run on —{" "}
          <strong style={{ color:SH.ink }}>a real product and engineering team, live in weeks, and it's yours to keep.</strong>
        </p>
        <div style={{ display:"flex", flexWrap:"wrap" as const, gap:6, marginTop:"1.4rem" }}>
          {["Discovery","Product & design","Engineering","Integrations","Support"].map(t => (
            <span key={t} style={{ border:`1px solid ${SH.line}`, padding:"6px 10px",
              fontSize:11, color:SH.dim, borderRadius:2, background:SH.card }}>{t}</span>
          ))}
        </div>
      </div>
      {/* metric strip */}
      <div style={{ display:"flex", flexWrap:"wrap" as const, gap:"1.4rem 2rem",
        padding:"1.6rem 20px 1.4rem", borderBottom:`1px solid ${SH.line}` }}>
        {[
          { n:"6", s:"wk",  label:"to a working first version" },
          { n:"0", s:"",    label:"templates — built to your workflow" },
          { n:"100", s:"%", label:"owned by you — code, data, accounts" },
        ].map((st, i) => (
          <div key={i} style={{ position:"relative" as const, paddingLeft:"1rem" }}>
            <span style={{ position:"absolute" as const, left:0, top:".1rem", bottom:".4rem",
              width:3, background:SH.cy2, borderRadius:2 }} />
            <strong style={{ display:"block",
              fontFamily:"var(--font-bricolage,'Bricolage Grotesque',sans-serif)", fontWeight:800,
              fontSize:"clamp(1.8rem,7vw,2.4rem)", lineHeight:.85, color:SH.ink, letterSpacing:"-.04em" }}>
              {st.n}
              {st.s && <span style={{ fontFamily:"var(--font-instrument-serif,'Instrument Serif',serif)",
                fontStyle:"italic", fontWeight:400, fontSize:".44em", color:SH.dim }}>{st.s}</span>}
            </strong>
            <span style={{ display:"block", fontSize:11.5, color:SH.c45, lineHeight:1.35,
              marginTop:".4rem", maxWidth:"18ch" }}>{st.label}</span>
          </div>
        ))}
      </div>
      <div style={{ padding:"1.6rem 20px 0" }}><Kicker label="How we build the change" color={SH.cy} /></div>
      {phases.map((p, i) => (
        <Reveal key={i}>
          <div style={{ padding:"1.8rem 20px 2rem", borderTop:`1px solid ${SH.line}` }}>
            <div style={{ display:"flex", alignItems:"baseline", gap:".6rem", marginBottom:".8rem" }}>
              <span style={{ fontFamily:"monospace", fontSize:11, color:SH.cy }}>{p.n}</span>
              <span style={{ fontFamily:"monospace", fontSize:9, letterSpacing:".16em",
                textTransform:"uppercase" as const, color:SH.c45 }}>{p.sp}</span>
            </div>
            <h2 style={{ fontFamily:"var(--font-bricolage,'Bricolage Grotesque',sans-serif)", fontWeight:700,
              fontSize:"clamp(1.8rem,7vw,2.4rem)", lineHeight:1.02, letterSpacing:"-.03em",
              color:SH.ink, marginBottom:".4rem" }}
              dangerouslySetInnerHTML={{ __html: p.h.replace(/<em>/g,
                `<em style="font-family:var(--font-instrument-serif,serif);font-style:italic;font-weight:400;color:${SH.cy}">`) }} />
            <p style={{ fontFamily:"var(--font-instrument-serif,'Instrument Serif',serif)",
              fontStyle:"italic", fontSize:"clamp(1.05rem,3.8vw,1.25rem)", color:SH.ink,
              marginBottom:".7rem", lineHeight:1.2 }}>{p.out}</p>
            <VizBox svg={p.svg} bg={SH.card} brd={SH.line} dot="rgba(13,18,32,.04)" />
            <p style={{ fontFamily:"monospace", fontSize:10, color:SH.c45, marginTop:".6rem",
              marginBottom:".6rem" }}>— {p.svgCap}</p>
            <p style={{ fontSize:".92rem", color:SH.dim, lineHeight:1.62, maxWidth:"52ch" }}>{p.cap}</p>
            <div style={{ display:"flex", alignItems:"baseline", gap:".7rem",
              borderTop:`1px solid ${SH.line}`, marginTop:"1rem", paddingTop:"1rem" }}>
              <span style={{ fontFamily:"var(--font-bricolage,'Bricolage Grotesque',sans-serif)", fontWeight:800,
                fontSize:"clamp(2rem,7vw,2.6rem)", color:SH.cy, letterSpacing:"-.04em", lineHeight:.85 }}>
                {p.stat}
                {p.statS && <span style={{ fontFamily:"var(--font-instrument-serif,'Instrument Serif',serif)",
                  fontStyle:"italic", fontWeight:400, fontSize:".44em", color:SH.dim }}>{p.statS}</span>}
              </span>
              <span style={{ fontSize:11, color:SH.c45, lineHeight:1.4, maxWidth:"28ch" }}>{p.statD}</span>
            </div>
          </div>
        </Reveal>
      ))}
      <Reveal>
        <div style={{ margin:"0 20px 1.8rem", padding:"1.3rem 1.4rem",
          border:`1px dashed ${SH.line}`, borderRadius:10, background:SH.card }}>
          <p style={{ fontFamily:"monospace", fontSize:10, fontWeight:700, letterSpacing:".16em",
            textTransform:"uppercase" as const, color:SH.c45, marginBottom:".6rem" }}>Bonus, included</p>
          <h4 style={{ fontFamily:"var(--font-instrument-serif,'Instrument Serif',serif)",
            fontStyle:"italic", fontWeight:400, fontSize:"1.25rem", color:SH.ink, marginBottom:".5rem" }}>
            Oh — and AI, where it earns its place.
          </h4>
          <p style={{ fontSize:".88rem", color:SH.dim, lineHeight:1.55 }}>
            Where AI genuinely helps inside the system — a smart search, a first-draft, a prediction — it's built in.{" "}
            <strong style={{ color:SH.ink }}>But this is real engineering, not an AI badge. Nice to have, not the point.</strong>
          </p>
        </div>
      </Reveal>
      <FAQ items={faqs} bg={SH.bg} border={SH.line} head={SH.ink} body={SH.dim} light />
      {/* CTA — light page, custom colours */}
      <div style={{ padding:"2.4rem 20px calc(3.2rem + env(safe-area-inset-bottom))",
        borderTop:`1px solid ${SH.line}`, marginTop:"1rem" }}>
        <h2 style={{ fontFamily:"var(--font-bricolage,'Bricolage Grotesque',sans-serif)", fontWeight:800,
          fontSize:"clamp(2rem,9vw,3rem)", lineHeight:.95, letterSpacing:"-.04em",
          color:SH.ink, marginBottom:"1rem" }}>
          Not their software.<br />
          <em style={{ fontFamily:"var(--font-instrument-serif,'Instrument Serif',serif)",
            fontStyle:"italic", fontWeight:400 }}>Yours.</em>
        </h2>
        <p style={{ fontSize:".96rem", color:SH.dim, lineHeight:1.62, maxWidth:"44ch", marginBottom:"1.6rem" }}>
          We map how it really works, build it around you, ship in weeks and hand you the keys — then keep making it better.
        </p>
        <a href="/contact" onClick={onClose} style={{ display:"block", textAlign:"center" as const,
          fontFamily:"var(--font-space-mono,'Space Mono',monospace)", fontSize:12, fontWeight:700,
          letterSpacing:".13em", textTransform:"uppercase" as const,
          color:"#fff", background:SH.cy2,
          textDecoration:"none", padding:"1.15rem", borderRadius:6 }}>Show me what we'd build →</a>
        <p style={{ fontFamily:"var(--font-space-mono,'Space Mono',monospace)", fontSize:10.5,
          color:SH.c28, letterSpacing:".04em", marginTop:"1.4rem", textAlign:"center" as const }}>
          OARC — one team for the whole business. Malta.</p>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// PRODUCTS CONTENT  (dark blue — OARC's own platforms, in production)
// ────────────────────────────────────────────────────────────────────────────
const PRD = {
  bg:"#050A10", card:"#0A1018", sig:"#3EC6FF",
  c:"#EAF2F6", dim:"rgba(234,242,246,.62)", c45:"rgba(234,242,246,.45)",
  line:"rgba(234,242,246,.1)", b22:"rgba(62,198,255,.22)",
};

function ProductsContent({ onClose }: { onClose: () => void }) {
  const lifecycle = [
    { n:"01", stage:"Discover", desc:"Found on Google, Maps and AI answers — before competitors." },
    { n:"02", stage:"Book",     desc:"Reservations taken, confirmed and reminded — no-shows refilled." },
    { n:"03", stage:"Order",    desc:"QR menus in the guest's language. Straight to the kitchen — zero mishears." },
    { n:"04", stage:"Serve",    desc:"Kitchen display runs the line. Kiosk takes the queue. Staff serve, not type." },
    { n:"05", stage:"Pay",      desc:"Fast checkout, tips included, tills that reconcile themselves." },
    { n:"06", stage:"Review",   desc:"5★ captured at the table, replies drafted — reputation compounds." },
    { n:"07", stage:"Return",   desc:"Loyalty passes and win-back nudges bring them back through the door." },
  ];
  const modules = [
    { id:"MENU",    name:"Digital menu",     desc:"Multilingual QR ordering — guests order in their own language." },
    { id:"KITCHEN", name:"Kitchen display",  desc:"Live display that sequences the line and kills lost tickets." },
    { id:"KIOSK",   name:"Self-order kiosk", desc:"Touchscreen that eats the queue at peak." },
    { id:"DESK",    name:"Owner dashboard",  desc:"Sales, staff, stock — one screen, nightly." },
    { id:"TABLE",   name:"Review & loyalty", desc:"5★ capture + loyalty passes, scanned at the till." },
    { id:"BRIDGE",  name:"The bridge",       desc:"Connects your POS, payments and printers — nothing replaced by force." },
  ];
  const guarantees = [
    { n:"01", t:"Working software in week one.",
      b:"You see it running in your venue, not in a slide. The pilot is the product." },
    { n:"02", t:"You own everything.",
      b:"Code, data, accounts — yours. No licence hostage, no vendor tickets, no exit fee." },
    { n:"03", t:"ROI counted in weeks.",
      b:"Every stage has a number attached — orders, covers, reviews, hours saved. If it doesn't move a number, it doesn't ship." },
  ];
  const faqs = [
    { q:"Are these off-the-shelf products?",
      a:"No. We engineered the full stack — so when you need it to bend, we bend it. No licence fee, no vendor support tickets, no waiting for a feature someone else asked for." },
    { q:"Do we have to replace our POS?",
      a:"No. We bridge into what you run. Replacement only happens when the numbers prove it's worth it — your call." },
    { q:"Who owns the system afterwards?",
      a:"You do. Code, data and accounts are handed over. We stay because the work is good, not because you're locked in." },
    { q:"How disruptive is the rollout?",
      a:"One stage at a time, quiet hours, staff trained in minutes per tool. Service never stops for the rebuild." },
  ];
  return (
    <div style={{ background:PRD.bg, color:PRD.c }}>
      {/* hero */}
      <div style={{ padding:"1.8rem 20px 2.2rem", borderBottom:`1px solid ${PRD.line}` }}>
        <h1 style={{ fontFamily:"var(--font-bricolage,'Bricolage Grotesque',sans-serif)", fontWeight:800,
          fontSize:"clamp(2.4rem,10vw,3.8rem)", lineHeight:.9, letterSpacing:"-.05em",
          textTransform:"uppercase", color:PRD.c, marginBottom:"1rem" }}>
          We don't advise.<br />
          <em style={{ fontFamily:"var(--font-instrument-serif,'Instrument Serif',serif)",
            fontStyle:"italic", fontWeight:400, textTransform:"none", letterSpacing:0,
            color:PRD.sig, fontSize:"1.04em" }}>We build.</em>
        </h1>
        <p style={{ fontSize:".98rem", color:PRD.dim, lineHeight:1.6, maxWidth:"44ch" }}>
          Production-ready platforms, not decks.{" "}
          <strong style={{ color:PRD.c }}>We rebuilt how businesses operate on systems we've already built — already running in Malta venues tonight.</strong>
        </p>
        <div style={{ display:"flex", flexWrap:"wrap" as const, gap:"1.2rem 2rem", marginTop:"1.8rem" }}>
          {[["7d","first ship to live venue"],["100%","owned by you"],
            ["4+","languages served"],["24/7","system uptime"]].map(([v, d]) => (
            <div key={v}>
              <p style={{ fontFamily:"var(--font-bricolage,'Bricolage Grotesque',sans-serif)", fontWeight:800,
                fontSize:"clamp(1.8rem,6vw,2.4rem)", color:PRD.sig,
                letterSpacing:"-.04em", lineHeight:.85, marginBottom:".4rem" }}>{v}</p>
              <p style={{ fontFamily:"monospace", fontSize:10, color:PRD.c45, maxWidth:"18ch" }}>{d}</p>
            </div>
          ))}
        </div>
      </div>
      {/* lifecycle */}
      <Reveal>
        <div style={{ padding:"1.6rem 20px 2rem", borderBottom:`1px solid ${PRD.line}` }}>
          <Kicker label="The full guest lifecycle" color={PRD.sig} />
          <p style={{ fontSize:".92rem", color:PRD.dim, lineHeight:1.6, maxWidth:"48ch", marginBottom:"1.2rem" }}>
            Others automate a step. We run the <strong style={{ color:PRD.c }}>entire journey</strong> — and every stage feeds the next.
          </p>
          <div>
            {lifecycle.map((l, i) => (
              <div key={i} style={{ display:"flex", gap:"1rem", padding:".85rem 0",
                borderTop:i > 0 ? `1px solid ${PRD.line}` : "none" }}>
                <span style={{ fontFamily:"monospace", fontSize:10, color:PRD.sig,
                  width:28, flexShrink:0, paddingTop:2 }}>{l.n}</span>
                <div>
                  <span style={{ fontFamily:"var(--font-bricolage,'Bricolage Grotesque',sans-serif)",
                    fontWeight:700, fontSize:"1rem", letterSpacing:"-.02em", color:PRD.c }}>{l.stage}</span>
                  <span style={{ fontSize:".88rem", color:PRD.dim, marginLeft:".8rem" }}>{l.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
      {/* platform modules */}
      <Reveal>
        <div style={{ padding:"1.6rem 20px 2rem", borderBottom:`1px solid ${PRD.line}` }}>
          <Kicker label="The platform — ours, in production" color={PRD.sig} />
          <p style={{ fontSize:".92rem", color:PRD.dim, lineHeight:1.6, maxWidth:"48ch", marginBottom:"1.2rem" }}>
            These aren't licensed tools with our sticker on them.{" "}
            <strong style={{ color:PRD.c }}>We engineered the stack — so when you need it to bend, we bend it.</strong>
          </p>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8 }}>
            {modules.map(m => (
              <div key={m.id} style={{ background:PRD.card, border:`1px solid ${PRD.b22}`,
                borderRadius:8, padding:"12px 14px", position:"relative" as const }}>
                <span style={{ position:"absolute" as const, top:9, right:10, width:5, height:5,
                  borderRadius:"50%", background:PRD.sig,
                  boxShadow:`0 0 0 0 rgba(62,198,255,.5)`,
                  animation:"blip 1.6s ease-out infinite", display:"block" }} />
                <p style={{ fontFamily:"monospace", fontSize:9, color:PRD.sig,
                  letterSpacing:".12em", marginBottom:".4rem" }}>{m.id}</p>
                <p style={{ fontFamily:"var(--font-bricolage,'Bricolage Grotesque',sans-serif)",
                  fontWeight:700, fontSize:"1rem", color:PRD.c, marginBottom:".25rem" }}>{m.name}</p>
                <p style={{ fontSize:11, color:PRD.c45, lineHeight:1.5 }}>{m.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ fontFamily:"monospace", fontSize:9, letterSpacing:".14em",
            textTransform:"uppercase" as const, color:PRD.sig, marginTop:"1rem",
            display:"flex", alignItems:"center", gap:".5rem" }}>
            <span style={{ width:6, height:6, borderRadius:"50%", background:PRD.sig,
              display:"inline-block", boxShadow:`0 0 8px ${PRD.sig}` }} />
            In production across Malta venues right now
          </p>
        </div>
      </Reveal>
      {/* anti-consultancy */}
      <Reveal>
        <div style={{ padding:"1.6rem 20px 2rem", borderBottom:`1px solid ${PRD.line}` }}>
          <Kicker label="Not a consultancy" color={PRD.sig} />
          <h3 style={{ fontFamily:"var(--font-bricolage,'Bricolage Grotesque',sans-serif)", fontWeight:700,
            fontSize:"clamp(1.7rem,6vw,2.2rem)", lineHeight:1, letterSpacing:"-.03em",
            color:PRD.c, marginBottom:"1.2rem" }}>
            Shipped, not{" "}
            <em style={{ fontFamily:"var(--font-instrument-serif,'Instrument Serif',serif)",
              fontStyle:"italic", fontWeight:400, color:PRD.sig }}>advised.</em>
          </h3>
          {guarantees.map((g, i) => (
            <div key={i} style={{ display:"flex", gap:"1rem", padding:".85rem 0",
              borderTop:i > 0 ? `1px solid ${PRD.line}` : "none" }}>
              <span style={{ fontFamily:"monospace", fontSize:10, color:PRD.sig,
                width:28, flexShrink:0, paddingTop:2 }}>{g.n}</span>
              <div>
                <p style={{ fontFamily:"var(--font-bricolage,'Bricolage Grotesque',sans-serif)",
                  fontWeight:700, fontSize:"1rem", color:PRD.c, marginBottom:".25rem" }}>{g.t}</p>
                <p style={{ fontSize:".88rem", color:PRD.dim, lineHeight:1.55 }}>{g.b}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
      <FAQ items={faqs} bg={PRD.bg} border={PRD.line} head={PRD.c} body={PRD.dim} />
      {/* CTA */}
      <div style={{ padding:"2.4rem 20px calc(3.2rem + env(safe-area-inset-bottom))",
        borderTop:`1px solid ${PRD.line}`, marginTop:"1rem" }}>
        <h2 style={{ fontFamily:"var(--font-bricolage,'Bricolage Grotesque',sans-serif)", fontWeight:800,
          fontSize:"clamp(2rem,9vw,3rem)", lineHeight:.95, letterSpacing:"-.04em",
          color:PRD.c, marginBottom:"1rem" }}>
          Shipped.<br />
          <em style={{ fontFamily:"var(--font-instrument-serif,'Instrument Serif',serif)",
            fontStyle:"italic", fontWeight:400 }}>Not advised.</em>
        </h2>
        <p style={{ fontSize:".96rem", color:PRD.dim, lineHeight:1.62, maxWidth:"44ch", marginBottom:"1.6rem" }}>
          Production-ready platforms built on systems we already run — live in your venue in 7 days, owned by you completely.
        </p>
        <a href="/contact" onClick={onClose} style={{ display:"block", textAlign:"center" as const,
          fontFamily:"var(--font-space-mono,'Space Mono',monospace)", fontSize:12, fontWeight:700,
          letterSpacing:".13em", textTransform:"uppercase" as const,
          color:PRD.bg, background:PRD.sig,
          textDecoration:"none", padding:"1.15rem", borderRadius:6 }}>Rebuild yours — book a call →</a>
        <p style={{ fontFamily:"var(--font-space-mono,'Space Mono',monospace)", fontSize:10.5,
          color:"rgba(234,242,246,.3)", letterSpacing:".04em", marginTop:"1.4rem", textAlign:"center" as const }}>
          OARC — one team for the whole business. Malta.</p>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// COMPARE CONTENT  (noir — paper vs production, why OARC)
// ────────────────────────────────────────────────────────────────────────────
function CompareContent({ onClose }: { onClose: () => void }) {
  const rows = [
    { label:"What you pay for",    them:"Reports & recommendations",    us:"Working systems in production" },
    { label:"Timeline",            them:"6–18 months of consulting",     us:"Live in 7 days" },
    { label:"Who owns the result", them:"You implement; they invoice",   us:"Code, data, accounts — yours" },
    { label:"AI involvement",      them:"AI badge on the deck",          us:"AI deployed, working now" },
    { label:"Evidence",            them:"Case studies from elsewhere",   us:"Metric-proven, Malta venues" },
    { label:"After it's done",     them:"They leave; you're on your own",us:"We stay; you grow" },
  ];
  const proofs = [
    { t:"Own platform in production",
      b:"The H360 OS is live in Malta venues tonight. We didn't license it — we built it. That's the difference between consultants who buy software and engineers who ship it." },
    { t:"Metric-proven cases",
      b:"Every engagement is tied to a number that moves: orders, covers, reviews, hours saved. If the metric doesn't move, the engagement isn't finished." },
    { t:"AI staff deployed",
      b:"Our AI staff are answering calls and booking at 3 am across Malta businesses right now. Not a demo — a deployed, working team member." },
    { t:"Founder-led",
      b:"The people who started this are still on the calls, still in the venues, still writing the code. The work gets done by the people who care about the outcome." },
    { t:"You own the code",
      b:"When we build you something, you get the code, the data and the accounts. No vendor lock-in, no licence fee, no ransom for the keys to your own system." },
  ];
  const faqs = [
    { q:"Why not just hire a consultancy?",
      a:"A consultancy writes you a report; you pay someone else to build it. We build it, ship it, train your team on it and hand you the keys. You get a running system, not a recommendation." },
    { q:"How is OARC different from an agency?",
      a:"Agencies manage campaigns. We build the underlying systems — the AI staff, the platforms, the automations — and the campaigns on top. One team owns the full stack instead of five vendors managing one layer each." },
    { q:"What proof do you have that it works?",
      a:"Our own platforms are live in Malta venues right now — the menu system, the kitchen display, the AI workforce. The metric-proven cases are all local, all recent, all with real numbers attached." },
    { q:"What if we're already working with another agency?",
      a:"Most of our clients come in alongside an existing agency. We typically own the technology, AI and automation layer while any existing relationship handles brand or media." },
  ];
  return (
    <div style={{ background:T.noir, color:T.ivory }}>
      {/* hero */}
      <div style={{ padding:"1.8rem 20px 2.2rem", borderBottom:`1px solid ${T.line}` }}>
        <Kicker label="Why OARC" />
        <h1 style={{ fontFamily:"var(--font-bricolage,'Bricolage Grotesque',sans-serif)", fontWeight:800,
          fontSize:"clamp(2.4rem,10vw,3.8rem)", lineHeight:.9, letterSpacing:"-.05em",
          textTransform:"uppercase", color:T.ivory, marginBottom:"1rem" }}>
          Paper vs<br />
          <em style={{ fontFamily:"var(--font-instrument-serif,'Instrument Serif',serif)",
            fontStyle:"italic", fontWeight:400, textTransform:"none", letterSpacing:0,
            color:T.scar, fontSize:"1.04em" }}>production.</em>
        </h1>
        <p style={{ fontSize:".98rem", color:T.dim, lineHeight:1.6, maxWidth:"44ch" }}>
          Consultants give you a report. Agencies manage the spend. We build and run the systems.{" "}
          <strong style={{ color:T.ivory }}>Own platform in production. AI staff deployed. Metric-proven. Founder-led.</strong>
        </p>
      </div>
      {/* comparison table */}
      <Reveal>
        <div style={{ padding:"1.6rem 20px 2rem", borderBottom:`1px solid ${T.line}` }}>
          <Kicker label="The difference" />
          <div style={{ marginTop:"1.2rem" }}>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:0,
              paddingBottom:".6rem", borderBottom:`1px solid ${T.line}`, marginBottom:".2rem" }}>
              <span />
              <span style={{ fontFamily:"monospace", fontSize:9, letterSpacing:".1em",
                textTransform:"uppercase" as const, color:T.dimLow, textAlign:"center" as const }}>Others</span>
              <span style={{ fontFamily:"monospace", fontSize:9, letterSpacing:".1em",
                textTransform:"uppercase" as const, color:T.scar, textAlign:"center" as const }}>OARC</span>
            </div>
            {rows.map((r, i) => (
              <div key={i} style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:0,
                padding:".7rem 0", borderBottom:`1px solid ${T.line}`, alignItems:"start" }}>
                <span style={{ fontFamily:"monospace", fontSize:9.5, color:T.dimLow, lineHeight:1.45,
                  paddingRight:".5rem" }}>{r.label}</span>
                <span style={{ fontSize:11, color:"rgba(242,239,233,.3)", lineHeight:1.45,
                  paddingRight:".5rem", textAlign:"center" as const }}>{r.them}</span>
                <span style={{ fontSize:11, color:T.ivory, lineHeight:1.45, fontWeight:600,
                  textAlign:"center" as const }}>{r.us}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
      {/* proof points */}
      <div style={{ padding:"1.6rem 20px 0" }}><Kicker label="What makes it real" /></div>
      {proofs.map((p, i) => (
        <Reveal key={i}>
          <div style={{ padding:"1.3rem 20px 1.5rem", borderTop:`1px solid ${T.line}` }}>
            <div style={{ display:"flex", gap:".8rem", alignItems:"flex-start" }}>
              <span style={{ fontFamily:"var(--font-instrument-serif,'Instrument Serif',serif)",
                fontStyle:"italic", color:T.scar, fontSize:"1.05rem", flexShrink:0,
                width:"1.6rem", lineHeight:1.5 }}>0{i + 1}</span>
              <div>
                <h4 style={{ fontFamily:"var(--font-bricolage,'Bricolage Grotesque',sans-serif)",
                  fontWeight:700, fontSize:"clamp(1.1rem,4.5vw,1.3rem)", letterSpacing:"-.02em",
                  color:T.ivory, marginBottom:".35rem" }}>{p.t}</h4>
                <p style={{ fontSize:".9rem", color:T.dim, lineHeight:1.6, maxWidth:"52ch" }}>{p.b}</p>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
      <FAQ items={faqs} />
      <CTA big={<>Not their systems.<br /><CtaItalic>Yours.</CtaItalic></>}
        sub="We build and run the AI, platforms and automations — deployed now, owned by you, proven on real Malta businesses."
        btn="See what we'd build for you" onClose={onClose} />
    </div>
  );
}

// ── Placeholder for non-Engine departments ────────────────────────────────────
function PlaceholderContent({ dept, onClose }: { dept: string; onClose: () => void }) {
  const realmColors: Record<string,{bg:string;fg:string;sig:string}> = {
    Creative:       { bg:T.stu, fg:T.ink, sig:T.oxb },
    Brand:          { bg:T.stu, fg:T.ink, sig:T.oxb },
    Reputation:     { bg:T.stu, fg:T.ink, sig:T.oxb },
    "AI Staff":     { bg:T.gfx, fg:T.wht, sig:T.wht },
    Automation:     { bg:T.gfx, fg:T.wht, sig:T.wht },
    Operations:     { bg:T.gfx, fg:T.wht, sig:T.wht },
    Clarity:        { bg:T.gfx, fg:T.wht, sig:T.wht },
    Transformation: { bg:T.gfx, fg:T.wht, sig:T.wht },
  };
  const c = realmColors[dept] ?? { bg:T.noir, fg:T.ivory, sig:T.scar };
  return (
    <div style={{ background:c.bg, color:c.fg, minHeight:"60vh",
      display:"flex", flexDirection:"column" as const, justifyContent:"center", padding:"3rem 20px" }}>
      <h2 style={{ fontFamily:"var(--font-bricolage,'Bricolage Grotesque',sans-serif)", fontWeight:800,
        fontSize:"clamp(2rem,9vw,3rem)", lineHeight:.96, letterSpacing:"-.04em",
        textTransform:"uppercase", color:c.fg, marginBottom:"1.2rem" }}>
        This department is{" "}
        <em style={{ fontFamily:"var(--font-instrument-serif,'Instrument Serif',serif)",
          fontStyle:"italic", fontWeight:400, textTransform:"none" }}>on its way.</em>
      </h2>
      <p style={{ fontSize:".98rem", lineHeight:1.6, maxWidth:"40ch",
        color: c.fg === T.wht ? "rgba(245,245,243,.62)" : "rgba(25,20,16,.6)", marginBottom:"2rem" }}>
        The {dept} department page is being built. In the meantime, speak to us directly —
        we'll walk you through exactly what this team does for your business.
      </p>
      <a href="/contact" onClick={onClose} style={{ display:"inline-block", alignSelf:"flex-start" as const,
        fontFamily:"var(--font-space-mono,'Space Mono',monospace)", fontSize:11, fontWeight:700,
        letterSpacing:".14em", textTransform:"uppercase" as const,
        color: c.sig === T.wht ? c.bg : "#fff",
        background: c.sig, textDecoration:"none", padding:"1rem 1.5rem", borderRadius:6 }}>
        Talk to us →
      </a>
    </div>
  );
}

// ── content registry ──────────────────────────────────────────────────────────
const CONTENT_MAP: Record<string, (props:{onClose:()=>void}) => React.ReactElement> = {
  Growth:         GrowthContent,
  Sales:          SalesContent,
  Media:          MediaContent,
  Social:         SocialContent,
  Clarity:        ClarityContent,
  "AI Staff":     AIStaffContent,
  Creative:       CreativeContent,
  Operations:     OperationsContent,
  Automation:     AutomationContent,
  Transformation: TransformationContent,
  Reputation:     ReputationContent,
  Brand:          BrandContent,
  Enquiries:      EnquiriesContent,
  Ship:           ShipContent,
  Products:       ProductsContent,
  Compare:        CompareContent,
};

// ── per-department header colours ─────────────────────────────────────────────
const DEPT_HDR_BG: Record<string,string> = {
  Growth: "#F6F1E9",  Sales: "#FFFFFF",  Media: "#0C0F16",  Social: T.noir,
  Clarity: "#0B0D12",  "AI Staff": "#060607",  Creative: "#100E0A",
  Operations: "#F4F1EA",  Automation: "#0A0C0F",  Transformation: "#050A10",
  Reputation: "#F5F1E8",  Brand: "#ECE7DE",
  Enquiries: T.noir,  Ship: "#EEF1F4",  Products: "#050A10",  Compare: T.noir,
};
const LIGHT_DEPTS = new Set(["Operations","Reputation","Brand","Ship","Growth","Sales"]);

// ── Main modal ────────────────────────────────────────────────────────────────
interface DepartmentDetailModalProps {
  dept: string | null;
  onClose: () => void;
}

export default function DepartmentDetailModal({ dept, onClose }: DepartmentDetailModalProps) {
  const [mounted,  setMounted]  = useState(false);
  const [visible,  setVisible]  = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const handleClose = useCallback(() => {
    setVisible(false);
    setMounted(false);
    onClose();
    requestAnimationFrame(() => {
      if (triggerRef.current?.isConnected) triggerRef.current.focus();
    });
  }, [onClose]);

  useEffect(() => {
    if (!dept) { setMounted(false); return; }
    triggerRef.current = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;
    setMounted(true);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const id1 = requestAnimationFrame(() => setVisible(true));
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        handleClose();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable.length) {
        e.preventDefault();
        panelRef.current.focus();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement as HTMLElement | null;
      if (e.shiftKey) {
        if (active === first || !panelRef.current.contains(active)) {
          e.preventDefault();
          last.focus();
        }
      } else if (active === last || !panelRef.current.contains(active)) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey, true);
    return () => {
      cancelAnimationFrame(id1);
      document.removeEventListener("keydown", onKey, true);
      document.body.style.overflow = prev;
    };
  }, [dept, handleClose]);

  useLayoutEffect(() => {
    if (dept && mounted) closeButtonRef.current?.focus();
  }, [dept, mounted]);

  if (!dept || !mounted) return null;

  const ContentComponent = CONTENT_MAP[dept];

  return createPortal(
    <>
      {/* backdrop */}
      <div aria-hidden="true" onClick={handleClose} style={{
        position:"fixed", inset:0, zIndex:8998,
        background:"rgba(14,13,12,.6)",
        opacity: visible ? 1 : 0,
        transition:`opacity 420ms ${T.e}`,
      }} />
      {/* panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="department-detail-modal-title"
        tabIndex={-1}
        style={{
        position:"fixed", left:0, right:0, bottom:0,
        height:"94dvh", zIndex:8999,
        display:"flex", flexDirection:"column" as const,
        borderRadius:"18px 18px 0 0",
        overflow:"clip",
        background: DEPT_HDR_BG[dept] ?? T.noir,
        transform: visible ? "translateY(0)" : "translateY(100%)",
        transition:`transform 480ms ${T.e}`,
        boxShadow:"0 -20px 80px rgba(0,0,0,.6)",
      }}>
        <h2 id="department-detail-modal-title" style={{
          position:"absolute", width:1, height:1, padding:0, margin:-1,
          overflow:"hidden", clip:"rect(0, 0, 0, 0)", whiteSpace:"nowrap",
          border:0,
        }}>{dept} department details</h2>
        {/* sticky top bar */}
        {(() => {
          const hdrBg   = DEPT_HDR_BG[dept] ?? T.noir;
          const isLight = LIGHT_DEPTS.has(dept);
          const fgCol   = isLight ? "#16120F" : T.ivory;
          const bdrCol  = isLight ? "rgba(22,18,15,.13)" : T.line;
          return (
            <div style={{
              display:"flex", justifyContent:"flex-end", alignItems:"center",
              padding:"14px 20px", paddingTop:"max(14px, env(safe-area-inset-top))",
              background: hdrBg,
              backdropFilter:"blur(14px)", flexShrink:0,
              borderBottom:`1px solid ${bdrCol}`,
            }}>
              <button ref={closeButtonRef} onClick={handleClose} aria-label="Close department details" style={{
                background:"transparent",
                border:`1px solid ${bdrCol}`,
                borderRadius:6, cursor:"pointer",
                padding:"7px 13px",
                fontFamily:"var(--font-space-mono,'Space Mono',monospace)",
                fontSize:9.5, letterSpacing:".18em", textTransform:"uppercase" as const,
                color: fgCol,
              }}>✕ Close</button>
            </div>
          );
        })()}
        {/* scrollable content */}
        <div style={{ flex:1, overflowY:"auto" as const, WebkitOverflowScrolling:"touch" as any }}>
          {ContentComponent
            ? <ContentComponent onClose={handleClose} />
            : <PlaceholderContent dept={dept} onClose={handleClose} />
          }
        </div>
      </div>
    </>,
    document.body
  );
}
