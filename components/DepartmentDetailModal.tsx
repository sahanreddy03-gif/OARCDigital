"use client";

import { useEffect, useRef, useState, useCallback } from "react";
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

// ── GROWTH content ───────────────────────────────────────────────────────────
// ── GROWTH modal — exact prototype port ───────────────────────────────────
const GM_CSS = `
.gm{--ink:#08131A;--deep:#050D12;--clay:#EFE3D2;--c:#EFE3D2;
--c70:rgba(239,227,210,.72);--c45:rgba(239,227,210,.46);
--c26:rgba(239,227,210,.26);--c16:rgba(239,227,210,.16);
--c10:rgba(239,227,210,.10);--c06:rgba(239,227,210,.06);
--line:rgba(239,227,210,.14);--e:cubic-bezier(.16,1,.3,1);
background:var(--deep);color:var(--c);
font-family:'Inter Tight',var(--font-bricolage,'Bricolage Grotesque',sans-serif);
-webkit-font-smoothing:antialiased}
.gm .hero{padding:1.4rem 20px 2.2rem;border-bottom:1px solid var(--line)}
.gm .hero .lbl{font-size:10.5px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:var(--c45)}
.gm .hero h1{font-size:clamp(2rem,8.5vw,3rem);font-weight:600;line-height:.98;letter-spacing:-.045em;margin-top:.7rem}
.gm .hero h1 em{font-family:'Instrument Serif',var(--font-instrument-serif,serif);font-style:italic;font-weight:400;font-size:1.12em}
.gm .hero>p{font-size:.95rem;color:var(--c70);line-height:1.5;margin-top:.9rem;max-width:40ch}
.gm .stage3d{margin:2rem 0 .5rem;height:340px;display:flex;align-items:center;justify-content:center;perspective:1400px;perspective-origin:50% 30%}
.gm .stack{position:relative;width:230px;height:230px;transform-style:preserve-3d;transform:rotateX(56deg) rotateZ(-42deg);animation:gm-float 9s var(--e) infinite alternate}
@keyframes gm-float{from{transform:rotateX(56deg) rotateZ(-42deg) translateZ(0)}to{transform:rotateX(52deg) rotateZ(-38deg) translateZ(6px)}}
.gm .layer{position:absolute;inset:0;border:1.5px solid var(--c26);background:rgba(239,227,210,.03);border-radius:6px;display:grid;place-items:center;opacity:0;box-shadow:0 1px 0 rgba(239,227,210,.08) inset}
.gm .layer .dot{position:absolute;width:7px;height:7px;border-radius:50%;background:var(--clay);box-shadow:0 0 12px rgba(239,227,210,.5)}
.gm .layer .tag{position:absolute;left:calc(100% + 16px);top:50%;white-space:nowrap;transform:translateY(-50%) rotateZ(42deg) rotateX(-56deg);transform-origin:left center;font-size:11px;font-weight:600;letter-spacing:-.01em;color:var(--c70);display:flex;align-items:center;gap:8px}
.gm .layer .tag::before{content:'';width:22px;height:1px;background:var(--line)}
.gm .layer .tag b{font-size:9px;font-weight:700;letter-spacing:.1em;color:var(--c26)}
.gm .stack.go .layer{animation:gm-rise .9s var(--e) forwards}
@keyframes gm-rise{from{opacity:0;transform:translateZ(-40px)}to{opacity:1}}
.gm .spineline{position:absolute;left:50%;top:50%;width:2px;background:linear-gradient(var(--c26),transparent);transform:translate(-50%,-50%);transform-style:preserve-3d}
.gm .legend{display:flex;flex-wrap:wrap;gap:6px;margin-top:1.5rem}
.gm .legend span{border:1px solid var(--line);padding:6px 10px;font-size:11px;color:var(--c45);border-radius:2px}
.gm .shead{padding:1.6rem 20px .4rem;font-size:10.5px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:var(--c45);display:flex;align-items:center;gap:.8rem}
.gm .shead::after{content:'';flex:1;height:1px;background:var(--line)}
.gm .phase{padding:1.7rem 20px 2rem;border-top:1px solid var(--line)}
.gm .phase .idx{display:flex;align-items:baseline;gap:.6rem}
.gm .phase .idx b{font-size:11px;font-weight:700;letter-spacing:.12em;color:var(--clay)}
.gm .phase .idx s{font-size:10.5px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:var(--c45);text-decoration:none}
.gm .phase h2{font-size:clamp(1.9rem,7.5vw,2.5rem);font-weight:600;line-height:1;letter-spacing:-.04em;margin-top:1rem}
.gm .phase h2 em{font-family:'Instrument Serif',var(--font-instrument-serif,serif);font-style:italic;font-weight:400;font-size:1.15em}
.gm .phase .out{font-family:'Instrument Serif',var(--font-instrument-serif,serif);font-style:italic;font-size:clamp(1.35rem,5.5vw,1.7rem);color:var(--c);margin-top:.9rem;line-height:1.1}
.gm .viz{margin-top:1.4rem;border:1px solid var(--line);border-radius:8px;background:var(--deep);position:relative;overflow:hidden;aspect-ratio:1/.82}
.gm .viz::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle at 1px 1px,rgba(239,227,210,.05) 1px,transparent 0);background-size:22px 22px;mask-image:radial-gradient(130% 100% at 50% 45%,#000 45%,transparent 85%)}
.gm .viz svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
.gm .cap{margin-top:1rem;font-size:.9rem;color:var(--c70);line-height:1.5}
.gm .stat{margin-top:1.1rem;display:flex;align-items:baseline;gap:.7rem;padding-top:1rem;border-top:1px solid var(--line)}
.gm .stat b{font-size:clamp(2.4rem,11vw,3.2rem);font-weight:600;letter-spacing:-.05em;line-height:.85;font-variant-numeric:tabular-nums}
.gm .stat b em{font-family:'Instrument Serif',var(--font-instrument-serif,serif);font-style:italic;font-size:.42em;color:var(--c45)}
.gm .stat p{font-size:11.5px;color:var(--c45);line-height:1.35;max-width:22ch}
.gm .end{padding:2rem 20px calc(2rem + env(safe-area-inset-bottom));border-top:1px solid var(--line)}
.gm .end p{font-size:.95rem;color:var(--c70);line-height:1.55;max-width:44ch}
.gm .end p em{font-family:'Instrument Serif',var(--font-instrument-serif,serif);font-style:italic;font-size:1.15em;color:var(--c)}
.gm .end button{display:block;width:100%;margin-top:1.3rem;text-align:center;font-size:12px;font-weight:600;letter-spacing:.13em;text-transform:uppercase;color:var(--ink);background:var(--clay);border:none;padding:1.1rem;border-radius:4px;cursor:pointer;font-family:inherit}
.gm .wire{stroke:var(--c16);stroke-width:1.25;fill:none}
.gm .node{fill:var(--c16)}
.gm .nodeOn{fill:var(--clay)}
.gm .ring{fill:none;stroke:var(--clay);stroke-width:1.5}
.gm .lab{font-weight:600;fill:var(--c70)}
.gm .labk{font-weight:700;fill:var(--ink)}
.gm .glow{filter:drop-shadow(0 0 10px rgba(239,227,210,.55))}
.gm .draw{stroke-dasharray:var(--L,240);stroke-dashoffset:var(--L,240)}
.gm .live .draw{animation:gm-draw 1.1s var(--e) forwards}
@keyframes gm-draw{to{stroke-dashoffset:0}}
.gm .pop{opacity:0;transform:scale(.4);transform-origin:center}
.gm .live .pop{animation:gm-pop .5s var(--e) forwards}
@keyframes gm-pop{to{opacity:1;transform:scale(1)}}
.gm .up{opacity:0}
.gm .live .up{animation:gm-up .6s var(--e) forwards}
@keyframes gm-up{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}
.gm .grow{transform:scaleY(0);transform-origin:50% 100%}
.gm .live .grow{animation:gm-grw .75s var(--e) forwards}
@keyframes gm-grw{to{transform:scaleY(1)}}
.gm .spin{transform-origin:center;animation:gm-sp 6s linear infinite}
@keyframes gm-sp{to{transform:rotate(360deg)}}
@media(prefers-reduced-motion:reduce){
.gm .stack{animation:none}
.gm .layer{opacity:1}
.gm .stack.go .layer{animation:none;opacity:1}
.gm .up,.gm .pop{opacity:1;transform:none}
.gm .draw{stroke-dashoffset:0}
.gm .grow{transform:none}}
`;

const CV = '#EFE3D2';
const GM_VIZ: Record<string, () => string> = {
  radiate: () => {
    let s = '';
    for (let i = 0; i < 8; i++) {
      const a = (i/8)*Math.PI*2 - Math.PI/2;
      const x = (200+Math.cos(a)*128).toFixed(1), y = (170+Math.sin(a)*128).toFixed(1);
      s += `<path class="wire draw" style="--L:150;animation-delay:${(.4+i*.07).toFixed(2)}s" d="M200,170 L${x},${y}"/>`;
      s += `<circle class="node pop" cx="${x}" cy="${y}" r="11" style="animation-delay:${(.8+i*.07).toFixed(2)}s"/>`;
    }
    return `<svg viewBox="0 0 400 340">${s}<circle class="ring pop glow" cx="200" cy="170" r="30" style="animation-delay:.2s"/><circle class="nodeOn glow pop" cx="200" cy="170" r="6" style="animation-delay:.35s"/><text class="labk" x="200" y="174" font-size="12" font-weight="700" text-anchor="middle">YOU</text></svg>`;
  },
  target: () => {
    let s = '';
    [128,92,56].forEach((r,i) => { s += `<circle class="wire draw" style="--L:${(2*Math.PI*r).toFixed(0)};animation-delay:${(i*.18).toFixed(2)}s" cx="200" cy="170" r="${r}"/>`; });
    [[70,70],[330,90],[300,270],[96,266],[150,110],[262,120],[110,200],[300,190],[200,60],[210,286]].forEach((p,i) => {
      const on = [4,5,6,7].includes(i);
      s += `<circle class="${on?'nodeOn glow':'node'} pop" cx="${p[0]}" cy="${p[1]}" r="${on?7:5}" style="animation-delay:${(.9+i*.05).toFixed(2)}s"/>`;
    });
    s += `<line class="wire" x1="200" y1="120" x2="200" y2="220" opacity=".5"/><line class="wire" x1="150" y1="170" x2="250" y2="170" opacity=".5"/><circle class="ring glow pop" cx="200" cy="170" r="16" style="animation-delay:1.5s"/>`;
    return `<svg viewBox="0 0 400 340">${s}</svg>`;
  },
  told: () => {
    const beats: [number,number][] = [[40,250],[120,180],[200,110],[290,84],[360,70]];
    let s = `<path class="wire draw glow" style="--L:520" d="M40,250 C120,250 130,120 200,110 C270,100 300,60 360,70"/>`;
    beats.forEach((p,i) => { const on = i===beats.length-1; s += `<circle class="${on?'nodeOn glow':'node'} pop" cx="${p[0]}" cy="${p[1]}" r="${on?8:6}" style="animation-delay:${(.6+i*.18).toFixed(2)}s"/>`; });
    ['Who','Why','What for','You'].forEach((l,i) => { s += `<text class="lab up" x="${beats[i][0]}" y="${beats[i][1]+26}" font-size="10.5" text-anchor="middle" opacity=".5" style="animation-delay:${(1+i*.15).toFixed(2)}s">${l}</text>`; });
    return `<svg viewBox="0 0 400 300">${s}</svg>`;
  },
  check: () => {
    let s = '';
    ['Price','Recent work','Real reviews','An answer'].forEach((l,i) => {
      const y = 40+i*66;
      s += `<rect class="wire up" x="34" y="${y}" width="210" height="46" rx="4" style="animation-delay:${(i*.1).toFixed(2)}s"/>`;
      s += `<text class="lab up" x="52" y="${y+28}" font-size="13" style="animation-delay:${(i*.1).toFixed(2)}s">${l}</text>`;
      s += `<rect x="286" y="${y}" width="80" height="46" rx="4" fill="none" stroke="${CV}" stroke-opacity=".2" stroke-width="1.25"/>`;
      s += `<path class="draw" style="--L:30;animation-delay:${(.9+i*.35).toFixed(2)}s" d="M300,${y+24} l9,10 l18,-20" stroke="${CV}" stroke-width="2.5" fill="none"/>`;
    });
    return `<svg viewBox="0 0 400 320">${s}</svg>`;
  },
  timeline: () => {
    let s = '';
    [64,108,152,214,260,306,352].forEach((x,i) => { s += `<rect class="nodeOn grow" x="${x-3}" y="126" width="6" height="34" style="animation-delay:${(i*.11).toFixed(2)}s"/>`; });
    return `<svg viewBox="0 0 400 300"><line class="wire" x1="28" y1="170" x2="372" y2="170"/><circle class="node pop" cx="28" cy="170" r="8"/><circle class="ring glow pop" cx="372" cy="170" r="12" style="animation-delay:1.3s"/>${s}<text class="lab" x="28" y="205" font-size="10.5" text-anchor="middle" opacity=".55">Prefers you</text><text class="lab" x="372" y="205" font-size="10.5" text-anchor="middle" opacity=".55">Buys</text></svg>`;
  },
  stack: () => {
    let s = '';
    [0,1,2,3].forEach(i => { const h=44+i*38, x=150+i*64; s += `<rect class="nodeOn grow" x="${x}" y="${210-h}" width="48" height="${h}" rx="2" style="animation-delay:${(.3+i*.16).toFixed(2)}s"/>`; });
    return `<svg viewBox="0 0 400 260"><line class="wire" x1="28" y1="210" x2="372" y2="210"/><rect class="node grow" x="40" y="150" width="48" height="60" rx="2"/><text class="lab" x="64" y="232" font-size="10.5" text-anchor="middle" opacity=".5">Cost</text><text class="lab" x="278" y="232" font-size="10.5" text-anchor="middle" opacity=".5">Every time after</text>${s}</svg>`;
  },
};

const GM_PHASES = [
  { n:'01', sp:'They find you',  h:'They <em>find</em> you.',     out:'The ones already looking.',
    cap:"The Search desk owns the moment someone is already searching for what you sell. It runs your buyers\u2019 real questions through search, maps and AI, sees who gets named instead of you, and works the pages those answers are built from \u2014 where top rank and AI citation now overlap under 20%.",
    stat:'38', statEm:'%', statP:'of AI answers named the business, up from 11%', viz:'radiate' },
  { n:'02', sp:'You find them',  h:'You <em>find</em> them.',    out:'The ones not looking yet.',
    cap:"The Reach desk owns everyone who isn\u2019t searching yet \u2014 most of your future customers. It builds audiences from people who already paid you, then runs your social and paid ads at those exact buyers, on the platform and at the hour they are actually there. Search waits to be found; this goes and finds them.",
    stat:'6', statEm:'', statP:'audiences built from your own buyers, not guesswork', viz:'target' },
  { n:'03', sp:'They like you',  h:'They <em>like</em> you.',    out:'They care before they compare.',
    cap:"The Studio owns what you actually say. It builds the story \u2014 who you are, why you do it, what you stand for \u2014 into content, video and the creative inside every ad. Reach picks who sees you; the Studio gives them a reason to stop and care before they ever compare a price.",
    stat:'40', statEm:'', statP:'pieces of story-led content a month, made in your voice', viz:'told' },
  { n:'04', sp:'They pick you',  h:'They <em>pick</em> you.',    out:'You beat the other three.',
    cap:"Once they care, they compare. The Conversion desk builds the four things every buyer checks with their head \u2014 a visible price, recent work, real reviews, a straight answer \u2014 and fills whatever is blank, starting with the price most competitors hide.",
    stat:'4', statEm:'', statP:'things every buyer checks, before they pick', viz:'check' },
  { n:'05', sp:'You stay close', h:'You <em>stay close</em>.',   out:'You never go quiet.',
    cap:"The Lifecycle desk owns every moment between deciding and buying \u2014 both ways. It keeps you in front across the gap, triggered by what the buyer does, and the instant they reach back, an agent trained on your prices and rules replies in seconds, qualifies, and books. Reply in five minutes and you\u2019re 21\u00d7 likelier to qualify the lead than at thirty; 78% go with whoever answers first.",
    stat:'11', statEm:'sec', statP:'to reply, any hour \u2014 and 0 days you disappear', viz:'timeline' },
  { n:'06', sp:'They come back', h:'They <em>come back</em>.',   out:'Again, and again.',
    cap:"The Retention desk captures the review at the sale, times the return to the buyer\u2019s own cycle, and engineers the referral \u2014 because a 5% retention lift raises profit 25 to 95%.",
    stat:'2.4', statEm:'\u00d7', statP:'the value of a year, not a single sale', viz:'stack' },
];

function GrowthContent({ onClose }: { onClose: () => void }) {
  const stackRef = useRef<HTMLDivElement>(null);
  const wrapRef  = useRef<HTMLDivElement>(null);

  // inject exact prototype CSS once, clean up on unmount
  useEffect(() => {
    const id = "gm-styles";
    if (!document.getElementById(id)) {
      const el = document.createElement("style");
      el.id = id; el.textContent = GM_CSS;
      document.head.appendChild(el);
    }
    return () => { document.getElementById("gm-styles")?.remove(); };
  }, []);

  // trigger 3-D stack entrance
  useEffect(() => {
    const t = setTimeout(() => stackRef.current?.classList.add("go"), 380);
    return () => clearTimeout(t);
  }, []);

  // scroll-triggered viz reveal (exact prototype behaviour)
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach(en => { if (en.isIntersecting) en.target.classList.add("live"); }),
      { threshold: 0.35 }
    );
    wrapRef.current?.querySelectorAll(".viz").forEach(v => io.observe(v));
    return () => io.disconnect();
  }, []);

  const desks = ["Search desk","Reach desk","The Studio","Conversion desk","Lifecycle desk","Retention desk"];
  const n = desks.length, gap = 34, base = -(n-1)*gap/2;

  return (
    <div className="gm" ref={wrapRef}>
      <div className="hero">
        <p className="lbl">One engagement</p>
        <h1>A stranger becomes<br />a customer. <em>Six steps to the sale.</em></h1>
        <p>They find you. You find them. They like you. They pick you. You stay close. They come back. Six steps, each run by its own desk. Miss one and the rest never happen — so we run all six.</p>
        <div className="stage3d">
          <div className="stack" ref={stackRef}>
            <div className="spineline" style={{ height:`${(n-1)*gap}px`, transform:"translate(-50%,-50%) rotateX(90deg)" }} />
            {desks.map((d, i) => (
              <div key={i} className="layer"
                style={{ transform:`translateZ(${base+i*gap}px)`, animationDelay:`${(i*.13).toFixed(2)}s` }}>
                <span className="dot" /><span className="tag"><b>0{i+1}</b>{d}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="legend">
          {desks.map((d, i) => <span key={i}>0{i+1}&nbsp;&nbsp;{d}</span>)}
        </div>
      </div>

      <div className="shead">The phases, in detail</div>

      {GM_PHASES.map((p, i) => (
        <div key={i} className="phase">
          <div className="idx"><b>{p.n}</b><s>{p.sp}</s></div>
          {/* eslint-disable-next-line react/no-danger */}
          <h2 dangerouslySetInnerHTML={{ __html: p.h }} />
          <p className="out">{p.out}</p>
          <div className="viz" dangerouslySetInnerHTML={{ __html: GM_VIZ[p.viz]?.() ?? '' }} />
          <p className="cap">{p.cap}</p>
          <div className="stat">
            {/* eslint-disable-next-line react/no-danger */}
            <b dangerouslySetInnerHTML={{ __html: p.statEm ? `${p.stat}<em>${p.statEm}</em>` : p.stat }} />
            <p>{p.statP}</p>
          </div>
        </div>
      ))}

      <div className="end">
        {/* eslint-disable-next-line react/no-danger */}
        <p dangerouslySetInnerHTML={{ __html: "Five desks, one engagement, one number at month end. Everyone else hands you a dashboard \u2014 <em>we show you the machine, and you can check it.</em>" }} />
        <button onClick={onClose}>Run the machine on your business</button>
      </div>
    </div>
  );
}

// ── SALES content ────────────────────────────────────────────────────────────
function SalesContent({ onClose }: { onClose: () => void }) {
  const units = [
    { no:"i", tag:"Strategy", headline:"We set the <em style=\"font-family:var(--font-instrument-serif,'Instrument Serif',serif);font-style:italic;font-weight:400;color:#E02B20\">play.</em>",
      body:"We map how your leads actually move and find where deals stall and die. Then we set the play: your offer, your pricing, your follow-up cadence, and the one number everything is accountable to.",
      deliv:["Pipeline audit","Offer & pricing","Qualifying criteria","Follow-up cadence"], stat:"30", statS:"%", statP:"of leads are never contacted — the first leak we close" },
    { no:"ii", tag:"Creative · Content · Social", headline:"We make what <em style=\"font-family:var(--font-instrument-serif,'Instrument Serif',serif);font-style:italic;font-weight:400;color:#E02B20\">sells.</em>",
      body:"Two kinds of content, both aimed at revenue: the assets that close a live deal — pitch, proof, case studies — and social run as a sales channel with founder storytelling and DM-to-close flows. Not content chasing followers — content measured in booked calls.",
      deliv:["Founder storytelling","Sales skits & reels","Social that sells","Proof & case studies"], stat:"49", statS:"%", statP:"of sales lift comes from creative, not targeting (Nielsen)" },
    { no:"iii", tag:"Brand", headline:"We make you the <em style=\"font-family:var(--font-instrument-serif,'Instrument Serif',serif);font-style:italic;font-weight:400;color:#E02B20\">safe choice.</em>",
      body:"People buy the business they trust, not the cheapest quote. We sharpen how you show up across every point a buyer checks — so you read as the premium, obvious choice and stop competing on price.",
      deliv:["Positioning","Trust signals","Reviews & proof","Premium presentation"], stat:"20", statS:"%", statP:"higher performance for strongly-branded firms (McKinsey)" },
    { no:"iv", tag:"AI & Tech — The system you own", headline:"We build you <em style=\"font-family:var(--font-instrument-serif,'Instrument Serif',serif);font-style:italic;font-weight:400;color:#E02B20\">one system.</em>",
      body:"The single piece of technology in the engagement — built for your sales, then handed to you. It catches every enquiry, answers in seconds any hour, qualifies against your criteria, and books straight into the calendar. Voice and chat agents included. You own it outright, full IP control.",
      deliv:["Lead capture & routing","Instant qualify & book","Voice + chat agents","Yours to keep — full IP"], stat:"67", statS:"%", statP:"of deals booked with instant reply vs 30% (Chili Piper)" },
    { no:"v", tag:"Enablement", headline:"We keep it <em style=\"font-family:var(--font-instrument-serif,'Instrument Serif',serif);font-style:italic;font-weight:400;color:#E02B20\">running.</em>",
      body:"We train your team on the play, run the cadence, and work every stalled lead again on a trigger — win-backs and sequences that do not quit after one try. The follow-through is where most sales are quietly lost.",
      deliv:["Team training","Cadence management","Stalled-lead recovery","Monthly reporting"], stat:"2.3", statS:"×", statP:"more closed when stalled leads are properly revived" },
  ];
  const faqs = [
    { q:"How do you increase a company's sales?", a:"We run the whole sale as one team: fix where leads leak, make the content that closes, build the trust that wins the deal, and install one system that answers and books every enquiry instantly. Most of the gain comes from replying faster, following up longer, and closing with better proof — not from buying another tool." },
    { q:"Why aren't my leads converting?", a:"Usually speed and follow-up. Around 30% of leads are never contacted at all, and the odds of qualifying a lead drop sharply after the first five minutes. Answer instantly, follow up on a set cadence, and close with proof, and conversion climbs without spending more on traffic." },
    { q:"Do I own the system you build?", a:"Yes, completely. We build your lead-capture, qualifying, booking and voice-or-chat system for your business and hand it over in your full IP control. If we ever part ways, you keep it." },
    { q:"Is this software or an agency?", a:"An agency. Four teams of people — strategy, creative, brand and enablement — plus one system you own. A tool can route a lead, but it can't set your pricing, write what closes, or build trust. That takes people." },
  ];
  return (
    <div style={{ background:T.noir, color:T.ivory }}>
      {/* hero */}
      <div style={{ padding:"1.8rem 20px 2.2rem", borderBottom:`1px solid ${T.line}` }}>
        <Kicker label="Sales" />
        <h1 style={{ fontFamily:"var(--font-bricolage,'Bricolage Grotesque',sans-serif)", fontWeight:800,
          fontSize:"clamp(2.4rem,10vw,3.8rem)", lineHeight:.9, letterSpacing:"-.05em",
          textTransform:"uppercase", color:T.ivory, marginBottom:"1rem" }}>
          Close more{" "}
          <em style={{ fontFamily:"var(--font-instrument-serif,'Instrument Serif',serif)",
            fontStyle:"italic", fontWeight:400, textTransform:"none", letterSpacing:0,
            color:T.scar, display:"block", fontSize:"1.04em" }}>sales.</em>
        </h1>
        <p style={{ fontSize:".98rem", color:T.dim, lineHeight:1.6, maxWidth:"44ch" }}>
          One team that owns the whole sale — the strategy, the content that closes, how you show up, and one system you keep.{" "}
          <strong style={{ color:T.ivory }}>Everything your sales needs, pointed at one number: revenue.</strong>
        </p>
      </div>
      <StatStrip items={[
        { n:"78", s:"%", label:"of buyers choose whoever answers first" },
        { n:"21", s:"×", label:"more likely to qualify at 5 min vs 30" },
        { n:"30", s:"%", label:"of leads today are never contacted at all" },
      ]} />
      {/* thesis */}
      <Reveal>
        <div style={{ margin:"1.6rem 20px", padding:"2rem 1.6rem",
          background:T.scar, borderRadius:14, color:"#fff" }}>
          <Kicker label="How the engagement works" color="rgba(255,255,255,.65)" />
          <h2 style={{ fontFamily:"var(--font-bricolage,'Bricolage Grotesque',sans-serif)", fontWeight:800,
            fontSize:"clamp(1.6rem,5vw,2.4rem)", lineHeight:1.04, letterSpacing:"-.04em",
            maxWidth:"22ch", marginBottom:"1rem" }}>
            Most of closing more is{" "}
            <em style={{ fontFamily:"var(--font-instrument-serif,'Instrument Serif',serif)",
              fontStyle:"italic", fontWeight:400 }}>strategy and craft</em> — not a tool.
          </h2>
          <p style={{ fontSize:".96rem", color:"rgba(255,255,255,.85)", lineHeight:1.6, maxWidth:"50ch" }}>
            A tool routes a lead; it doesn't decide what you say, how you're priced, why they trust you, or what happens when they go quiet. You don't stitch together five vendors for that. You get one team that owns the whole sale — and one system we build and hand you.
          </p>
          <div style={{ display:"flex", gap:"1.8rem", marginTop:"1.6rem", paddingTop:"1.4rem",
            borderTop:"1px solid rgba(255,255,255,.22)" }}>
            {[["1","team, end to end"],["0","vendors to juggle"]].map(([n,l])=>(
              <div key={n}>
                <strong style={{ fontFamily:"var(--font-instrument-serif,'Instrument Serif',serif)",
                  fontStyle:"italic", fontSize:"2.6rem", fontWeight:400, display:"block",
                  lineHeight:1, color:"#fff" }}>{n}</strong>
                <p style={{ fontSize:11, fontWeight:600, letterSpacing:".06em",
                  textTransform:"uppercase" as const, color:"rgba(255,255,255,.8)", marginTop:".4rem" }}>{l}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
      {/* units */}
      <div style={{ padding:".4rem 20px 0" }}>
        <Kicker label="What that one team covers" />
      </div>
      {units.map((u, i) => (
        <Reveal key={i} delay={i * 50}>
          <div style={{ padding:"1.8rem 20px 2rem", borderTop:`1px solid ${T.line}` }}>
            <div style={{ display:"flex", alignItems:"flex-start", gap:".8rem", marginBottom:".6rem" }}>
              <span style={{ fontFamily:"var(--font-instrument-serif,'Instrument Serif',serif)",
                fontStyle:"italic", fontSize:"2rem", color:T.scar, width:44, flexShrink:0, lineHeight:.8 }}>{u.no}</span>
              <span style={{ fontFamily:"var(--font-space-mono,'Space Mono',monospace)", fontSize:9.5,
                letterSpacing:".14em", textTransform:"uppercase" as const, color:T.dim,
                border:`1px solid ${T.line}`, borderRadius:20, padding:".28rem .65rem",
                display:"inline-block", alignSelf:"flex-start" }}>{u.tag}</span>
            </div>
            <h3 style={{ fontFamily:"var(--font-bricolage,'Bricolage Grotesque',sans-serif)", fontWeight:800,
              fontSize:"clamp(1.7rem,6.5vw,2.4rem)", lineHeight:1, letterSpacing:"-.04em",
              color:T.ivory, marginBottom:".8rem" }} dangerouslySetInnerHTML={{ __html: u.headline }} />
            <p style={{ fontSize:".94rem", color:T.dim, lineHeight:1.6, marginBottom:"1rem",
              maxWidth:"56ch" }}>{u.body}</p>
            <div style={{ display:"flex", flexWrap:"wrap" as const, gap:".5rem", marginBottom:"1.1rem" }}>
              {u.deliv.map((d,j)=>(
                <span key={j} style={{ fontSize:11.5, fontWeight:600, color:T.ivory,
                  background:"rgba(242,239,233,.06)", borderRadius:4, padding:".38rem .68rem" }}>{d}</span>
              ))}
            </div>
            <div style={{ display:"flex", alignItems:"baseline", gap:".7rem",
              paddingTop:".9rem", borderTop:`1px solid ${T.line}` }}>
              <span style={{ fontFamily:"var(--font-space-mono,'Space Mono',monospace)", fontWeight:700,
                fontSize:"clamp(1.8rem,7vw,2.6rem)", lineHeight:.85, color:T.ivory }}>
                {u.stat}
                <span style={{ fontFamily:"var(--font-instrument-serif,'Instrument Serif',serif)",
                  fontStyle:"italic", fontWeight:400, fontSize:".42em", color:T.dim }}>{u.statS}</span>
              </span>
              <span style={{ fontSize:11.5, color:T.dim, lineHeight:1.35, maxWidth:"28ch" }}>{u.statP}</span>
            </div>
          </div>
        </Reveal>
      ))}
      {/* guarantee */}
      <Reveal>
        <div style={{ margin:"1.6rem 20px", padding:"2rem 1.6rem",
          background:"#1A1614", borderRadius:14, border:`1px solid ${T.line}` }}>
          <Kicker label="Our guarantee" color="#F0857E" />
          <h2 style={{ fontFamily:"var(--font-bricolage,'Bricolage Grotesque',sans-serif)", fontWeight:800,
            fontSize:"clamp(1.6rem,5vw,2.4rem)", lineHeight:1.1, letterSpacing:"-.04em",
            color:T.ivory, maxWidth:"22ch", marginBottom:"1rem" }}>
            If your booked calls don't climb in 90 days,{" "}
            <em style={{ fontFamily:"var(--font-instrument-serif,'Instrument Serif',serif)",
              fontStyle:"italic", fontWeight:400 }}>we work free until they do.</em>
          </h2>
          <p style={{ fontSize:".96rem", color:T.dim, lineHeight:1.6, maxWidth:"52ch" }}>
            We're a sales company — refusing to stand behind sales would be a tell. So we tie our retainer to your pipeline, not to hours. You carry none of the risk of trying us.
          </p>
        </div>
      </Reveal>
      <FAQ items={faqs} />
      <CTA big={<>One team.<br /><CtaItalic>The whole sale.</CtaItalic></>}
        sub="You keep the system, the playbook, and the pipeline. We keep you closing."
        btn="Book the sales audit" onClose={onClose} />
    </div>
  );
}

// ── MEDIA content ────────────────────────────────────────────────────────────
function MediaContent({ onClose }: { onClose: () => void }) {
  const phases: PhaseData[] = [
    { num:"01", label:"Where it pays", headline:'We put money where it <em style="font-family:var(--font-instrument-serif,serif);font-style:italic;font-weight:400;color:#E02B20">pays.</em>', hook:"Every euro where the return is.", who:"Media strategists",
      body:"We put your budget where it actually returns — not where it's habit. Meta, Google, TikTok, YouTube, out-of-home: the mix follows the money. <strong style='color:#F2EFE9'>Every euro of that budget goes to the platform, never to us.</strong>",
      stat:"5", statS:"×", statD:"the gap between your best and worst channel — we find it and shift the money" },
    { num:"02", label:"Creative is the lever", headline:'The ad is the <em style="font-family:var(--font-instrument-serif,serif);font-style:italic;font-weight:400;color:#E02B20">lever.</em>', hook:"The ad decides — so we build it.", who:"Ad creatives",
      body:"Targeting barely moves the needle anymore — the ad itself decides whether the money works. Our creatives build the video and the hook, because <strong style='color:#F2EFE9'>that's the real lever now. Same spend, a better ad, a completely different return.</strong>",
      stat:"50", statS:"%", statD:"of what an ad returns comes down to the creative — so we make it, not just buy space" },
    { num:"03", label:"Flighted testing", headline:'We fly tests, not <em style="font-family:var(--font-instrument-serif,serif);font-style:italic;font-weight:400;color:#E02B20">bets.</em>', hook:"Many small tests, fast winners.", who:"Media buyers",
      body:"We don't bet the budget on one idea. We launch in flights — many small, cheap tests — and let the market pick the winner. <strong style='color:#F2EFE9'>Only about one in ten ads ever scales, so we find that one fast, before the money's gone.</strong>",
      stat:"10", statD:"ads tested for every winner — we fly many, cheap, and find it early" },
    { num:"04", label:"The loop", headline:'Scale winners. <em style="font-family:var(--font-instrument-serif,serif);font-style:italic;font-weight:400;color:#E02B20">Kill losers.</em>', hook:"More of what works, none of what doesn't.", who:"Media buyers · Analysts",
      body:"The moment an ad tires or its cost climbs, we cut it — kill-rules, not opinions — and pour budget into what's working. <strong style='color:#F2EFE9'>That loop, run every week, is what lifts the return month after month.</strong>",
      stat:"25–40", statS:"%", statD:"more return over six months, from scaling only what wins" },
    { num:"05", label:"Measured on money", headline:'We prove it in <em style="font-family:var(--font-instrument-serif,serif);font-style:italic;font-weight:400;color:#E02B20">revenue.</em>', hook:"Return in euros, not clicks.", who:"Analysts",
      body:"We tie spend to real sales — not clicks or likes. You see revenue back per euro, the only number that decides whether media is working. <strong style='color:#F2EFE9'>Vanity metrics stay off your report.</strong>",
      stat:"1", statD:"number that matters: revenue back per euro spent — and you can check it" },
  ];
  const faqs = [
    { q:"Do you take a cut of my ad budget?", a:"No. 100% of your ad spend goes to the platforms. We're paid for the work — strategy, creative and buying — never a percentage of your media budget." },
    { q:"How do you make ads actually work?", a:"We put budget where it returns, build the creative (which now decides performance), test in small flights, scale winners and kill losers weekly, and measure everything on real revenue, not clicks." },
    { q:"Which channels do you run?", a:"The ones that pay for your business — Meta, Google, TikTok, YouTube and out-of-home — with the budget split following the return, not habit." },
    { q:"Are you an AI company?", a:"No. Real strategists, creatives, buyers and analysts run your media. A small tool that flags a cost spike is included as a bonus, not the main thing." },
  ];
  return (
    <div style={{ background:T.noir, color:T.ivory }}>
      <div style={{ padding:"1.8rem 20px 2.2rem", borderBottom:`1px solid ${T.line}` }}>
        <Kicker label="Media" />
        <h1 style={{ fontFamily:"var(--font-bricolage,'Bricolage Grotesque',sans-serif)", fontWeight:800,
          fontSize:"clamp(2.4rem,10vw,3.8rem)", lineHeight:.9, letterSpacing:"-.05em",
          textTransform:"uppercase", color:T.ivory, marginBottom:"1rem" }}>
          We make your money<br />
          <em style={{ fontFamily:"var(--font-instrument-serif,'Instrument Serif',serif)",
            fontStyle:"italic", fontWeight:400, textTransform:"none", letterSpacing:0,
            color:T.scar, fontSize:"1.04em" }}>come back with more.</em>
        </h1>
        <p style={{ fontSize:".98rem", color:T.dim, lineHeight:1.6, maxWidth:"44ch" }}>
          The right channels, the right creative, tested in flights and scaled only when they win.{" "}
          <strong style={{ color:T.ivory }}>Every euro of ad spend goes to the platforms, never to us.</strong>{" "}
          Media that pays for itself, run by one team.
        </p>
      </div>
      {/* pass-through strip */}
      <Reveal>
        <div style={{ margin:"1.6rem 20px 0", padding:"1.4rem 1.4rem",
          border:`1px solid rgba(224,43,32,.4)`, borderRadius:12,
          background:"linear-gradient(180deg,rgba(224,43,32,.08),transparent)" }}>
          <Kicker label="The part other agencies hide" />
          <h3 style={{ fontFamily:"var(--font-bricolage,'Bricolage Grotesque',sans-serif)", fontWeight:800,
            fontSize:"1.5rem", letterSpacing:"-.03em", color:T.ivory, marginBottom:".5rem" }}>Your budget is yours.</h3>
          <p style={{ fontSize:".9rem", color:T.dim, lineHeight:1.55, marginBottom:".6rem" }}>
            <strong style={{ color:T.ivory }}>100% of your ad spend goes to the platforms — we never take a cut of it.</strong>{" "}
            We're paid for the work: the strategy, the creative, the buying. Not your media money.
          </p>
          <span style={{ fontFamily:"var(--font-space-mono,'Space Mono',monospace)", fontSize:"2.2rem",
            fontWeight:700, color:T.scar, letterSpacing:"-.03em", display:"block" }}>100% → platforms</span>
        </div>
      </Reveal>
      <div style={{ padding:"1.6rem 20px 0" }}>
        <Kicker label="How the money is run" />
      </div>
      {phases.map((p, i) => <Phase key={i} p={p} realm="E" />)}
      <Reveal>
        <div style={{ margin:"0 20px 1.8rem", padding:"1.3rem 1.4rem",
          border:`1px dashed ${T.line}`, borderRadius:10, background:T.card }}>
          <Kicker label="Bonus, included" color={T.dim} />
          <h4 style={{ fontFamily:"var(--font-instrument-serif,'Instrument Serif',serif)",
            fontStyle:"italic", fontSize:"1.3rem", fontWeight:400, color:T.ivory, marginBottom:".5rem" }}>
            Oh — and a little tool, on us.
          </h4>
          <p style={{ fontSize:".88rem", color:T.dim, lineHeight:1.55 }}>
            A small tool that pings the team the moment a channel's cost spikes or a winning ad starts to tire — so budget never quietly bleeds.{" "}
            <strong style={{ color:T.ivory }}>Nice to have, not the main event.</strong>
          </p>
        </div>
      </Reveal>
      <FAQ items={faqs} />
      <CTA big={<>Media that pays<br /><CtaItalic>for itself.</CtaItalic></>}
        sub="The right channels, the right creative, tested in flights and scaled only when they win — with every euro going to the platforms, not to us."
        btn="See what your spend could do" onClose={onClose} />
    </div>
  );
}

// ── SOCIAL content ───────────────────────────────────────────────────────────
function SocialContent({ onClose }: { onClose: () => void }) {
  const phases: PhaseData[] = [
    { num:"01", label:"Where your people are", headline:'We find <em style="font-family:var(--font-instrument-serif,serif);font-style:italic;font-weight:400;color:#E02B20">your people.</em>', hook:"We start where they already scroll.", who:"Strategists",
      body:"Before a single post, we study who actually buys from you and where they spend their time — TikTok, Instagram, YouTube, LinkedIn. We don't chase every platform. <strong style='color:#F2EFE9'>We go where your customers already are, so nothing we make is wasted.</strong>",
      stat:"5.2", statS:"B", statD:"people on social — we find the slice that's yours" },
    { num:"02", label:"The story", headline:'We find the <em style="font-family:var(--font-instrument-serif,serif);font-style:italic;font-weight:400;color:#E02B20">story.</em>', hook:"The reason they stop scrolling.", who:"Storytellers",
      body:"This is the heart of it. We turn your business into something worth watching — a hook, a reason to stay, a payoff. Everything else is just how that story travels. <strong style='color:#F2EFE9'>No story, and the best camera in the world still gets scrolled past.</strong>",
      stat:"3", statS:"sec", statD:"to hook them — the story earns the rest of the video" },
    { num:"03", label:"The video", headline:'We make the <em style="font-family:var(--font-instrument-serif,serif);font-style:italic;font-weight:400;color:#E02B20">video.</em>', hook:"The way people watch now.", who:"Videographers · Editors",
      body:"Reels, TikToks, Shorts, YouTube, live — we shoot and cut all of it. Video is how people watch, learn and decide today; if you're not on camera, you're silent. <strong style='color:#F2EFE9'>One shoot becomes a month of content.</strong>",
      stat:"30", statS:"+", statD:"pieces of video from one shoot — always something to post" },
    { num:"04", label:"Every platform", headline:'We speak <em style="font-family:var(--font-instrument-serif,serif);font-style:italic;font-weight:400;color:#E02B20">every platform.</em>', hook:"Native everywhere your people are.", who:"Platform leads",
      body:"A TikTok isn't a Reel isn't a LinkedIn post. We reshape the same story into each feed's own language, so it belongs there — <strong style='color:#F2EFE9'>instead of being posted everywhere and ignored everywhere.</strong>",
      stat:"4", statD:"platforms, four native languages, one story" },
    { num:"05", label:"How it works", headline:'We know <em style="font-family:var(--font-instrument-serif,serif);font-style:italic;font-weight:400;color:#E02B20">how it works.</em>', hook:"The craft under every post.", who:"The whole team",
      body:"The first-second hook, watch-time, the trend that's alive for 48 hours, the rhythm the algorithm rewards — the craft most people guess at. <strong style='color:#F2EFE9'>We don't guess. We've done this enough to know why a post flies or dies.</strong>",
      stat:"48", statS:"hr", statD:"a trend's whole life — we move while it's climbing" },
    { num:"06", label:"The community", headline:'We build the <em style="font-family:var(--font-instrument-serif,serif);font-style:italic;font-weight:400;color:#E02B20">community.</em>', hook:"Followers who bring you customers.", who:"Community managers",
      body:"Social is a conversation, not a billboard. We reply, we DM, we turn your audience into people who trust you, defend you, and bring their friends. <strong style='color:#F2EFE9'>This is where attention quietly becomes sales.</strong>",
      stat:"88", statS:"%", statD:"trust a real person over any ad you could run" },
  ];
  const faqs = [
    { q:"What does making social a powerhouse actually involve?", a:"The whole of social: finding where your customers are, the story worth telling, the video, making it native to each platform, understanding how social actually works, and building a community. OARC delivers all of it with one team." },
    { q:"Do I have to manage any of it?", a:"No. Strategists, storytellers, videographers, editors, platform leads and community managers handle every part. You touch none of it." },
    { q:"Which platforms do you cover?", a:"The ones your customers actually use — TikTok, Instagram, YouTube, LinkedIn, Facebook and more. We go where your people are rather than posting everywhere and being ignored everywhere." },
    { q:"Are you an AI company?", a:"No. We are a creative and content team — real people doing the strategy, the storytelling, the video and the community. A small trend-and-mention tool is included as a bonus, not the main thing." },
  ];
  return (
    <div style={{ background:T.noir, color:T.ivory }}>
      <div style={{ padding:"1.8rem 20px 2.2rem", borderBottom:`1px solid ${T.line}` }}>
        <Kicker label="Social" />
        <h1 style={{ fontFamily:"var(--font-bricolage,'Bricolage Grotesque',sans-serif)", fontWeight:800,
          fontSize:"clamp(2.4rem,10vw,3.8rem)", lineHeight:.9, letterSpacing:"-.05em",
          textTransform:"uppercase", color:T.ivory, marginBottom:"1rem" }}>
          Social is a whole world.<br />
          <em style={{ fontFamily:"var(--font-instrument-serif,'Instrument Serif',serif)",
            fontStyle:"italic", fontWeight:400, textTransform:"none", letterSpacing:0,
            color:T.scar, fontSize:"1.04em" }}>We deliver all of it.</em>
        </h1>
        <p style={{ fontSize:".98rem", color:T.dim, lineHeight:1.6, maxWidth:"44ch" }}>
          The story, the video, every platform, being where your people already are, and knowing how it all actually works —{" "}
          <strong style={{ color:T.ivory }}>delivered by one team who does this all day.</strong>{" "}
          You touch none of it. It becomes the strongest thing you've got.
        </p>
        {/* team chips */}
        <div style={{ display:"flex", flexWrap:"wrap" as const, gap:6, marginTop:"1.4rem" }}>
          {["Strategists","Storytellers","Videographers","Editors","Platform leads","Community"].map(t => (
            <span key={t} style={{ border:`1px solid ${T.line}`, padding:"6px 10px",
              fontSize:11, color:T.dim, borderRadius:2 }}>{t}</span>
          ))}
        </div>
      </div>
      <div style={{ padding:"1.6rem 20px 0" }}>
        <Kicker label="Everything you get" />
      </div>
      {phases.map((p, i) => <Phase key={i} p={p} realm="E" />)}
      <Reveal>
        <div style={{ margin:"0 20px 1.8rem", padding:"1.3rem 1.4rem",
          border:`1px dashed ${T.line}`, borderRadius:10, background:T.card }}>
          <Kicker label="Bonus, included" color={T.dim} />
          <h4 style={{ fontFamily:"var(--font-instrument-serif,'Instrument Serif',serif)",
            fontStyle:"italic", fontSize:"1.3rem", fontWeight:400, color:T.ivory, marginBottom:".5rem" }}>
            Oh — and a little tool, on us.
          </h4>
          <p style={{ fontSize:".88rem", color:T.dim, lineHeight:1.55 }}>
            A simple tool that flags a rising trend and pings the team the second someone mentions you, so we're first to the moment.{" "}
            <strong style={{ color:T.ivory }}>Nice to have — not the main event.</strong>
          </p>
        </div>
      </Reveal>
      <FAQ items={faqs} />
      <CTA big={<>Then social becomes<br /><CtaItalic>your powerhouse.</CtaItalic></>}
        sub="Everything it takes — the story, the video, every platform, the craft, the community — delivered by one team who does this all day."
        btn="Put the whole team on your social" onClose={onClose} />
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
// CLARITY CONTENT
// ────────────────────────────────────────────────────────────────────────────
const CL = { bg:"#0B0D12", card:"#0E1117", az:"#3D7BFF", bad:"#E5563B",
  c:"#EAEDF2", dim:"rgba(234,237,242,.72)", c45:"rgba(234,237,242,.46)",
  c16:"rgba(234,237,242,.16)", line:"rgba(234,237,242,.11)" };

const SVG_CL_MATTERS = `<svg viewBox="0 0 400 264" style="position:absolute;inset:0;width:100%;height:100%;overflow:visible">
  <text font-family="monospace" font-size="10.5" fill="rgba(234,237,242,.45)" text-anchor="middle" class="up" x="106" y="26" style="animation-delay:.2s">noise</text>
  <text font-family="monospace" font-size="10.5" fill="#3D7BFF" text-anchor="middle" class="up" x="296" y="26" style="animation-delay:.6s">what matters</text>
  <rect fill="none" stroke="${CL.c16}" stroke-width="1.25" rx="6" class="up" x="30" y="42" width="152" height="38" opacity=".38"/>
  <text font-family="monospace" font-size="12.5" fill="rgba(234,237,242,.45)" opacity=".38" class="up" x="46" y="66">Likes</text>
  <rect fill="none" stroke="${CL.c16}" stroke-width="1.25" rx="6" class="up" x="30" y="94" width="152" height="38" opacity=".38" style="animation-delay:.08s"/>
  <text font-family="monospace" font-size="12.5" fill="rgba(234,237,242,.45)" opacity=".38" class="up" x="46" y="118" style="animation-delay:.08s">Impressions</text>
  <rect fill="none" stroke="${CL.c16}" stroke-width="1.25" rx="6" class="up" x="30" y="146" width="152" height="38" opacity=".38" style="animation-delay:.16s"/>
  <text font-family="monospace" font-size="12.5" fill="rgba(234,237,242,.45)" opacity=".38" class="up" x="46" y="170" style="animation-delay:.16s">Reach</text>
  <rect fill="none" stroke="${CL.c16}" stroke-width="1.25" rx="6" class="up" x="30" y="198" width="152" height="38" opacity=".38" style="animation-delay:.24s"/>
  <text font-family="monospace" font-size="12.5" fill="rgba(234,237,242,.45)" opacity=".38" class="up" x="46" y="222" style="animation-delay:.24s">Followers</text>
  <rect fill="rgba(61,123,255,.1)" stroke="#3D7BFF" stroke-width="1.4" rx="6" class="up" x="218" y="42" width="152" height="38" style="animation-delay:.5s"/>
  <text font-family="monospace" font-size="12.5" fill="#3D7BFF" class="up" x="234" y="66" style="animation-delay:.5s">Revenue</text>
  <rect fill="rgba(61,123,255,.1)" stroke="#3D7BFF" stroke-width="1.4" rx="6" class="up" x="218" y="94" width="152" height="38" style="animation-delay:.6s"/>
  <text font-family="monospace" font-size="12.5" fill="#3D7BFF" class="up" x="234" y="118" style="animation-delay:.6s">Cost / sale</text>
  <rect fill="rgba(61,123,255,.1)" stroke="#3D7BFF" stroke-width="1.4" rx="6" class="up" x="218" y="146" width="152" height="38" style="animation-delay:.7s"/>
  <text font-family="monospace" font-size="12.5" fill="#3D7BFF" class="up" x="234" y="170" style="animation-delay:.7s">Return</text>
  <rect fill="rgba(61,123,255,.1)" stroke="#3D7BFF" stroke-width="1.4" rx="6" class="up" x="218" y="198" width="152" height="38" style="animation-delay:.8s"/>
  <text font-family="monospace" font-size="12.5" fill="#3D7BFF" class="up" x="234" y="222" style="animation-delay:.8s">Repeat rate</text>
</svg>`;

const SVG_CL_CONNECT = `<svg viewBox="0 0 400 220" style="position:absolute;inset:0;width:100%;height:100%;overflow:visible">
  <line stroke="${CL.c16}" stroke-width="1.25" class="draw" style="--L:110" x1="82" y1="112" x2="128" y2="112"/>
  <line stroke="${CL.c16}" stroke-width="1.25" class="draw" style="--L:94;animation-delay:.2s" x1="188" y1="112" x2="220" y2="112"/>
  <line stroke="${CL.c16}" stroke-width="1.25" class="draw" style="--L:94;animation-delay:.4s" x1="280" y1="112" x2="318" y2="112"/>
  <circle fill="rgba(61,123,255,.1)" stroke="#3D7BFF" stroke-width="1.5" class="pop" cx="52" cy="112" r="30"/>
  <text font-family="monospace" font-size="10" fill="#3D7BFF" text-anchor="middle" class="up" x="52" y="116" style="animation-delay:.1s">Spend</text>
  <circle fill="none" stroke="${CL.c16}" stroke-width="1.25" class="pop" style="animation-delay:.15s" cx="158" cy="112" r="30"/>
  <text font-family="monospace" font-size="10" fill="rgba(234,237,242,.72)" text-anchor="middle" class="up" x="158" y="116" style="animation-delay:.3s">Click</text>
  <circle fill="none" stroke="${CL.c16}" stroke-width="1.25" class="pop" style="animation-delay:.3s" cx="250" cy="112" r="30"/>
  <text font-family="monospace" font-size="10" fill="rgba(234,237,242,.72)" text-anchor="middle" class="up" x="250" y="116" style="animation-delay:.5s">Lead</text>
  <circle fill="#3D7BFF" class="pop" style="animation-delay:.5s" cx="348" cy="112" r="30"/>
  <text font-family="monospace" font-size="10" font-weight="700" fill="#0B0D12" text-anchor="middle" class="up" x="348" y="116" style="animation-delay:.7s">Sale</text>
  <text font-family="monospace" font-size="9" fill="rgba(234,237,242,.45)" text-anchor="middle" class="up" x="52" y="78" style="animation-delay:.05s">€ in</text>
  <text font-family="monospace" font-size="9" fill="#3D7BFF" text-anchor="middle" class="up" x="348" y="78" style="animation-delay:.6s">€ back</text>
</svg>`;

const SVG_CL_SPLIT = `<svg viewBox="0 0 400 258" style="position:absolute;inset:0;width:100%;height:100%;overflow:visible">
  <line stroke="${CL.c16}" stroke-width="1" x1="30" y1="140" x2="370" y2="140"/>
  <text font-family="monospace" font-size="9" fill="rgba(234,237,242,.35)" text-anchor="middle" x="200" y="135">break-even</text>
  <rect fill="#3D7BFF" rx="5" class="grow" x="50" y="60" width="42" height="80" style="animation-delay:0s"/>
  <rect fill="#3D7BFF" rx="5" class="grow" x="108" y="76" width="42" height="64" style="animation-delay:.12s"/>
  <rect fill="#3D7BFF" rx="5" class="grow" x="166" y="98" width="42" height="42" style="animation-delay:.24s"/>
  <rect fill="rgba(229,86,59,.65)" rx="5" class="growd" x="224" y="140" width="42" height="32" style="animation-delay:.36s"/>
  <rect fill="rgba(229,86,59,.65)" rx="5" class="growd" x="282" y="140" width="42" height="48" style="animation-delay:.48s"/>
  <text font-family="monospace" font-size="9" fill="rgba(234,237,242,.55)" text-anchor="middle" class="up" x="71" y="56" style="animation-delay:.4s">↑</text>
  <text font-family="monospace" font-size="9" fill="rgba(234,237,242,.55)" text-anchor="middle" class="up" x="129" y="72" style="animation-delay:.52s">↑</text>
  <text font-family="monospace" font-size="9" fill="rgba(234,237,242,.55)" text-anchor="middle" class="up" x="187" y="94" style="animation-delay:.64s">↑</text>
  <text font-family="monospace" font-size="9" fill="rgba(229,86,59,.8)" text-anchor="middle" class="up" x="245" y="184" style="animation-delay:.76s">↓</text>
  <text font-family="monospace" font-size="9" fill="rgba(229,86,59,.8)" text-anchor="middle" class="up" x="303" y="200" style="animation-delay:.88s">↓</text>
  <text font-family="monospace" font-size="9.5" fill="#3D7BFF" text-anchor="middle" class="up" x="129" y="226" style="animation-delay:.7s">winners</text>
  <text font-family="monospace" font-size="9.5" fill="rgba(229,86,59,.8)" text-anchor="middle" class="up" x="265" y="226" style="animation-delay:.9s">cut these</text>
</svg>`;

const SVG_CL_DECISION = `<svg viewBox="0 0 400 228" style="position:absolute;inset:0;width:100%;height:100%;overflow:visible">
  <rect fill="${CL.card}" stroke="${CL.c16}" stroke-width="1.25" rx="12" class="up" x="80" y="34" width="240" height="158" style="animation-delay:.1s"/>
  <text font-family="monospace" font-size="9" fill="rgba(234,237,242,.45)" letter-spacing=".12em" text-anchor="middle" class="up" x="200" y="62" style="animation-delay:.3s">THIS MONTH</text>
  <line stroke="${CL.c16}" stroke-width="1" class="draw" style="--L:240;animation-delay:.4s" x1="80" y1="72" x2="320" y2="72"/>
  <circle fill="rgba(61,123,255,.15)" stroke="#3D7BFF" stroke-width="1.5" class="pop" cx="108" cy="104" r="14" style="animation-delay:.6s"/>
  <text font-family="monospace" font-size="13" fill="#3D7BFF" text-anchor="middle" class="pop" x="108" y="109" style="animation-delay:.7s">✓</text>
  <text font-family="monospace" font-size="11" fill="rgba(234,237,242,.85)" class="up" x="132" y="100" style="animation-delay:.75s">Do more</text>
  <text font-family="monospace" font-size="10" fill="rgba(234,237,242,.55)" class="up" x="132" y="116" style="animation-delay:.8s">Instagram video</text>
  <circle fill="rgba(229,86,59,.15)" stroke="#E5563B" stroke-width="1.5" class="pop" cx="108" cy="156" r="14" style="animation-delay:.8s"/>
  <text font-family="monospace" font-size="13" fill="#E5563B" text-anchor="middle" class="pop" x="108" y="161" style="animation-delay:.9s">✕</text>
  <text font-family="monospace" font-size="11" fill="rgba(234,237,242,.85)" class="up" x="132" y="152" style="animation-delay:.95s">Stop</text>
  <text font-family="monospace" font-size="10" fill="rgba(234,237,242,.55)" class="up" x="132" y="168" style="animation-delay:1s">Boosted posts</text>
</svg>`;

function ClarityContent({ onClose }: { onClose: () => void }) {
  const faqs = [
    { q: "What does Clarity actually deliver?", a: "We track the numbers that connect your spend to sales, run regular A/B split tests, and give you a monthly verdict card: which channels to do more of, and which to cut — in plain English, not a dashboard you have to decode." },
    { q: "How is this different from Google Analytics?", a: "Analytics tells you what happened. Clarity tells you what to do about it — and, critically, what to stop spending money on. We connect the spend to the sale, which most analytics tools don't do out of the box." },
    { q: "How long before we see results?", a: "The first verdict card comes in your first month. From there, each month builds a clearer picture. Most clients see measurable lift in return within two to three months of acting on the decisions." },
    { q: "Are you an AI company?", a: "No. Real analysts read your numbers, connect spend to sales, and make the calls. A small tool that surfaces anomalies early is included as a bonus — not the main thing." },
  ];
  return (
    <div style={{ background: CL.bg, color: CL.c }}>
      {/* hero */}
      <div style={{ padding: "1.8rem 20px 2.2rem", borderBottom: `1px solid ${CL.line}` }}>
        <Kicker label="Clarity" color={CL.az} />
        <h1 style={{ fontFamily: "var(--font-bricolage,'Bricolage Grotesque',sans-serif)", fontWeight: 800,
          fontSize: "clamp(2.4rem,10vw,3.8rem)", lineHeight: .9, letterSpacing: "-.05em",
          textTransform: "uppercase", color: CL.c, marginBottom: "1rem" }}>
          We tell you what's<br />
          <em style={{ fontFamily: "var(--font-instrument-serif,'Instrument Serif',serif)",
            fontStyle: "italic", fontWeight: 400, textTransform: "none", letterSpacing: 0,
            color: CL.az, fontSize: "1.04em" }}>working.</em>
        </h1>
        <p style={{ fontSize: ".98rem", color: CL.dim, lineHeight: 1.6, maxWidth: "44ch" }}>
          We track what your money is actually doing — connect spend to sales, run split tests,
          and give you one simple verdict every month:{" "}
          <strong style={{ color: CL.c }}>do more of this, stop spending on that.</strong>
        </p>
        {/* verdict board hero */}
        <div style={{ marginTop: "1.8rem", background: CL.card, borderRadius: 12,
          border: `1px solid ${CL.line}`, padding: "1.2rem 1rem", overflow: "hidden" }}>
          <p style={{ fontFamily: "monospace", fontSize: 9, letterSpacing: ".16em",
            color: CL.c45, textTransform: "uppercase", marginBottom: ".9rem" }}>This month's verdict</p>
          {[
            { ch:"Instagram video", st:"WORKING", up:true },
            { ch:"Google Search", st:"WORKING", up:true },
            { ch:"Boosted posts", st:"WASTING", up:false },
            { ch:"Cold campaign", st:"WASTING", up:false },
          ].map((row, i) => (
            <Reveal key={i}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center",
                borderTop: i > 0 ? `1px solid ${CL.line}` : "none", padding: ".7rem 0" }}>
                <span style={{ fontFamily: "monospace", fontSize: 12, color: CL.dim }}>{row.ch}</span>
                <span style={{ fontFamily: "monospace", fontSize: 10, fontWeight: 700,
                  letterSpacing: ".1em", color: row.up ? CL.az : CL.bad,
                  background: row.up ? "rgba(61,123,255,.1)" : "rgba(229,86,59,.1)",
                  border: `1px solid ${row.up ? CL.az : CL.bad}`,
                  padding: "4px 10px", borderRadius: 4 }}>
                  {row.up ? "▲ " : "▼ "}{row.st}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      {/* phases */}
      <div style={{ padding: "1.6rem 20px 0" }}><Kicker label="How clarity works" color={CL.az} /></div>
      {[
        { n:"01", sp:"What matters", h:"We track what <em>matters</em>.", stat:"5×", statD:"the gap between your best and worst channel — we find it",
          cap:"Likes and reach are noise. Revenue per euro, cost per sale, return rate, repeat customer rate — these are the numbers that tell you whether your business is growing. We track those, and only those.",
          svg: SVG_CL_MATTERS, svgCap:"Noise on the left. The numbers that make decisions on the right." },
        { n:"02", sp:"Spend to sales", h:"We connect spend to <em>sales</em>.", stat:"1", statD:"number that matters: revenue back per euro spent — and you can check it",
          cap:"Most reporting stops at clicks. We connect the full path — spend to click to lead to sale — so you know exactly what each euro is returning, not just where it went.",
          svg: SVG_CL_CONNECT, svgCap:"Every step from spend to sale, tracked in one chain." },
        { n:"03", sp:"Winners vs losers", h:"We split the winners from the <em>losers</em>.", stat:"1 in 10", statD:"ads ever scale — we find it fast, before the budget's gone",
          cap:"We run A/B tests on channels, creatives and messages — small, cheap, fast. The winners get more money. The losers get cut. That loop, run every month, is what keeps return climbing.",
          svg: SVG_CL_SPLIT, svgCap:"Winners get more budget. Losers get cut. The gap widens every month." },
        { n:"04", sp:"The one move", h:"We tell you the <em>one move</em>.", stat:"Monthly", statD:"verdict card: one thing to do more, one thing to stop",
          cap:"Every month you get a plain-English verdict card — not a 40-page report, not a login to a dashboard. One clear call: do more of this, stop spending on that. That's the whole job.",
          svg: SVG_CL_DECISION, svgCap:"One call, every month. No dashboard to decode." },
      ].map((p, i) => (
        <Reveal key={i}>
          <div style={{ padding: "1.8rem 20px 2rem", borderTop: `1px solid ${CL.line}` }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: ".6rem", marginBottom: ".9rem" }}>
              <span style={{ fontFamily: "monospace", fontSize: 11, color: CL.az }}>{p.n}</span>
              <span style={{ fontFamily: "monospace", fontSize: 9, letterSpacing: ".16em",
                textTransform: "uppercase" as const, color: CL.c45 }}>{p.sp}</span>
            </div>
            <h2 style={{ fontFamily: "var(--font-bricolage,'Bricolage Grotesque',sans-serif)", fontWeight: 700,
              fontSize: "clamp(1.8rem,7vw,2.4rem)", lineHeight: 1.02, letterSpacing: "-.03em",
              color: CL.c, marginBottom: ".9rem" }}
              dangerouslySetInnerHTML={{ __html: p.h.replace(/<em>/g,
                `<em style="font-family:var(--font-instrument-serif,serif);font-style:italic;font-weight:400;color:${CL.az}">`) }} />
            <p style={{ fontSize: ".92rem", color: CL.dim, lineHeight: 1.62, maxWidth: "52ch" }}>{p.cap}</p>
            <VizBox svg={p.svg} bg={CL.card} brd={CL.line} />
            <p style={{ fontFamily: "monospace", fontSize: 10, color: CL.c45, marginTop: ".7rem" }}>{p.svgCap}</p>
            <div style={{ display: "flex", alignItems: "baseline", gap: ".7rem",
              borderTop: `1px solid ${CL.line}`, marginTop: "1rem", paddingTop: "1rem" }}>
              <span style={{ fontFamily: "var(--font-bricolage,'Bricolage Grotesque',sans-serif)",
                fontWeight: 800, fontSize: "clamp(2rem,7vw,2.6rem)", color: CL.az,
                letterSpacing: "-.04em", lineHeight: .85 }}>{p.stat}</span>
              <span style={{ fontSize: 11, color: CL.c45, lineHeight: 1.4, maxWidth: "28ch" }}>{p.statD}</span>
            </div>
          </div>
        </Reveal>
      ))}
      <FAQ items={faqs} bg={CL.bg} border={CL.line} head={CL.c} body={CL.dim} />
      <CTA big={<>Clarity that drives<br /><CtaItalic>real decisions.</CtaItalic></>}
        sub="We track what matters, connect spend to sales, split winners from losers, and give you one plain-English verdict every month."
        btn="See what your numbers say" onClose={onClose} />
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// AI STAFF CONTENT
// ────────────────────────────────────────────────────────────────────────────
const AI = { bg:"#060607", card:"#121016", vi:"#7B61FF", vi2:"#9B87FF", vi3:"rgba(123,97,255,.12)",
  c:"#F0EEF8", dim:"rgba(240,238,248,.7)", c45:"rgba(240,238,248,.45)", line:"rgba(240,238,248,.1)" };

const SVG_AI_TRAINED = `<svg viewBox="0 0 400 260" style="position:absolute;inset:0;width:100%;height:100%;overflow:visible">
  <rect fill="none" stroke="${AI.line}" stroke-width="1.25" stroke-dasharray="6 4" rx="14" class="up" x="26" y="22" width="348" height="218" style="animation-delay:.1s"/>
  <text font-family="monospace" font-size="9" fill="rgba(240,238,248,.35)" letter-spacing=".1em" text-anchor="middle" class="up" x="200" y="44" style="animation-delay:.2s">YOUR SYSTEM</text>
  <line stroke="${AI.line}" stroke-width="1.25" class="draw" style="--L:120;animation-delay:.3s" x1="200" y1="136" x2="92" y2="92"/>
  <line stroke="${AI.line}" stroke-width="1.25" class="draw" style="--L:120;animation-delay:.4s" x1="200" y1="136" x2="308" y2="94"/>
  <line stroke="${AI.line}" stroke-width="1.25" class="draw" style="--L:100;animation-delay:.5s" x1="200" y1="136" x2="90" y2="180"/>
  <line stroke="${AI.line}" stroke-width="1.25" class="draw" style="--L:120;animation-delay:.6s" x1="200" y1="136" x2="310" y2="180"/>
  <circle fill="${AI.vi3}" stroke="${AI.vi}" stroke-width="1.5" class="pop" cx="92" cy="92" r="22" style="animation-delay:.5s"/>
  <text font-family="monospace" font-size="10" fill="${AI.vi2}" text-anchor="middle" class="up" x="92" y="96" style="animation-delay:.65s">CRM</text>
  <circle fill="${AI.vi3}" stroke="${AI.vi}" stroke-width="1.5" class="pop" cx="308" cy="94" r="22" style="animation-delay:.55s"/>
  <text font-family="monospace" font-size="9" fill="${AI.vi2}" text-anchor="middle" class="up" x="308" y="98" style="animation-delay:.7s">Calendar</text>
  <circle fill="${AI.vi3}" stroke="${AI.vi}" stroke-width="1.5" class="pop" cx="90" cy="180" r="22" style="animation-delay:.65s"/>
  <text font-family="monospace" font-size="10" fill="${AI.vi2}" text-anchor="middle" class="up" x="90" y="184" style="animation-delay:.8s">POS</text>
  <circle fill="${AI.vi3}" stroke="${AI.vi}" stroke-width="1.5" class="pop" cx="310" cy="180" r="22" style="animation-delay:.7s"/>
  <text font-family="monospace" font-size="9.5" fill="${AI.vi2}" text-anchor="middle" class="up" x="310" y="184" style="animation-delay:.85s">Inbox</text>
  <circle fill="${AI.vi}" class="pop" cx="200" cy="136" r="34" style="animation-delay:.8s"/>
  <text font-family="monospace" font-size="10" font-weight="700" fill="${AI.bg}" text-anchor="middle" class="up" x="200" y="133" style="animation-delay:.95s">TRAINED</text>
  <text font-family="monospace" font-size="9" fill="${AI.bg}" text-anchor="middle" class="up" x="200" y="148" style="animation-delay:1s">on your business</text>
</svg>`;

const SVG_AI_VOICE = `<svg viewBox="0 0 400 250" style="position:absolute;inset:0;width:100%;height:100%;overflow:visible">
  <text font-family="monospace" font-size="9" fill="rgba(240,238,248,.38)" letter-spacing=".14em" text-anchor="middle" class="up" x="200" y="28" style="animation-delay:.1s">LIVE CALL</text>
  ${[24,38,56,70,82,88,80,66,50,36,62,78,90,86,68,44,30,52,72,84,80,58].map((h, i) => {
    const x = 40 + i * 15; const y = 130 - h;
    return `<rect fill="${AI.vi}" opacity="${.55 + (h/90)*0.45}" rx="2" class="grow" x="${x}" y="${y}" width="10" height="${h}" style="animation-delay:${i * 0.04}s"/>`;
  }).join("")}
  <rect fill="${AI.vi3}" stroke="${AI.vi}" stroke-width="1.25" rx="20" class="pop" x="90" y="170" width="220" height="34" style="animation-delay:1s"/>
  <text font-family="monospace" font-size="10" fill="${AI.vi2}" text-anchor="middle" class="up" x="200" y="191" style="animation-delay:1.15s">Answered · booked · sold</text>
</svg>`;

const SVG_AI_WORKFLOW = `<svg viewBox="0 0 400 224" style="position:absolute;inset:0;width:100%;height:100%;overflow:visible">
  <text font-family="monospace" font-size="9" fill="rgba(240,238,248,.38)" letter-spacing=".1em" class="up" x="24" y="30" style="animation-delay:.05s">1 message in → whole job done</text>
  <line stroke="${AI.line}" stroke-width="1.25" class="draw" style="--L:80;animation-delay:.2s" x1="78" y1="72" x2="138" y2="72"/>
  <line stroke="${AI.line}" stroke-width="1.25" class="draw" style="--L:80;animation-delay:.35s" x1="202" y1="72" x2="248" y2="72"/>
  <line stroke="${AI.line}" stroke-width="1.25" class="draw" style="--L:80;animation-delay:.5s" x1="312" y1="72" x2="358" y2="72"/>
  <rect fill="${AI.vi3}" stroke="${AI.vi}" stroke-width="1.25" rx="8" class="up" x="24" y="54" width="54" height="36" style="animation-delay:.1s"/>
  <text font-family="monospace" font-size="9" fill="${AI.vi2}" text-anchor="middle" class="up" x="51" y="72" style="animation-delay:.2s">message</text>
  <rect fill="${AI.card}" stroke="${AI.line}" stroke-width="1.25" rx="8" class="up" x="138" y="54" width="64" height="36" style="animation-delay:.25s"/>
  <text font-family="monospace" font-size="9" fill="${AI.dim}" text-anchor="middle" class="up" x="170" y="68" style="animation-delay:.35s">Take</text>
  <text font-family="monospace" font-size="9" fill="${AI.dim}" text-anchor="middle" class="up" x="170" y="81" style="animation-delay:.4s">booking</text>
  <rect fill="${AI.card}" stroke="${AI.line}" stroke-width="1.25" rx="8" class="up" x="248" y="54" width="64" height="36" style="animation-delay:.4s"/>
  <text font-family="monospace" font-size="9" fill="${AI.dim}" text-anchor="middle" class="up" x="280" y="68" style="animation-delay:.5s">Update</text>
  <text font-family="monospace" font-size="9" fill="${AI.dim}" text-anchor="middle" class="up" x="280" y="81" style="animation-delay:.55s">calendar</text>
  <circle fill="${AI.vi}" class="pop" cx="370" cy="72" r="16" style="animation-delay:.65s"/>
  <text font-family="monospace" font-size="13" fill="${AI.bg}" text-anchor="middle" class="pop" x="370" y="77" style="animation-delay:.75s">✓</text>
  <line stroke="rgba(123,97,255,.3)" stroke-width="1" stroke-dasharray="4 3" class="draw" style="--L:60;animation-delay:.7s" x1="280" y1="90" x2="280" y2="148"/>
  <rect fill="${AI.card}" stroke="rgba(240,238,248,.07)" stroke-width="1" rx="8" class="up" x="230" y="148" width="100" height="28" style="animation-delay:.85s"/>
  <text font-family="monospace" font-size="8.5" fill="rgba(240,238,248,.38)" text-anchor="middle" class="up" x="280" y="166" style="animation-delay:.95s">→ human if needed</text>
</svg>`;

const SVG_AI_BUILD = `<svg viewBox="0 0 400 212" style="position:absolute;inset:0;width:100%;height:100%;overflow:visible">
  <rect fill="${AI.card}" stroke="${AI.line}" stroke-width="1.25" rx="10" class="up" x="40" y="30" width="200" height="148" style="animation-delay:.1s"/>
  <rect fill="${AI.vi}" rx="8" class="up" x="40" y="30" width="200" height="28" style="animation-delay:.2s; border-radius:8px 8px 0 0"/>
  <circle fill="rgba(240,238,248,.4)" class="pop" cx="62" cy="44" r="5" style="animation-delay:.35s"/>
  <circle fill="rgba(240,238,248,.4)" class="pop" cx="78" cy="44" r="5" style="animation-delay:.4s"/>
  <circle fill="rgba(240,238,248,.4)" class="pop" cx="94" cy="44" r="5" style="animation-delay:.45s"/>
  <rect fill="${AI.vi3}" rx="3" class="growx" x="60" y="76" width="120" height="8" style="animation-delay:.5s"/>
  <rect fill="rgba(240,238,248,.06)" rx="3" class="growx" x="60" y="92" width="88" height="6" style="animation-delay:.6s"/>
  <rect fill="rgba(240,238,248,.06)" rx="3" class="growx" x="60" y="104" width="104" height="6" style="animation-delay:.7s"/>
  <rect fill="rgba(240,238,248,.06)" rx="3" class="growx" x="60" y="116" width="72" height="6" style="animation-delay:.8s"/>
  <rect fill="${AI.card}" stroke="${AI.line}" stroke-width="1.25" rx="8" class="up" x="272" y="56" width="90" height="112" style="animation-delay:.5s"/>
  <rect fill="${AI.vi3}" stroke="${AI.vi}" stroke-width="1" rx="6" class="pop" cx="317" cy="82" x="284" y="68" width="66" height="46" style="animation-delay:.7s"/>
  <text font-family="monospace" font-size="9" fill="${AI.vi2}" text-anchor="middle" class="up" x="317" y="134" style="animation-delay:.85s">hardware</text>
</svg>`;

const SVG_AI_COME = `<svg viewBox="0 0 400 210" style="position:absolute;inset:0;width:100%;height:100%;overflow:visible">
  <line stroke="${AI.line}" stroke-width="1.25" class="draw" style="--L:126;animation-delay:.3s" x1="82" y1="88" x2="158" y2="88"/>
  <line stroke="${AI.line}" stroke-width="1.25" class="draw" style="--L:126;animation-delay:.5s" x1="222" y1="88" x2="278" y2="88"/>
  <circle fill="${AI.vi3}" stroke="${AI.vi}" stroke-width="1.5" class="pop" cx="60" cy="88" r="22" style="animation-delay:.1s"/>
  <text font-family="monospace" font-size="9.5" fill="${AI.vi2}" text-anchor="middle" class="up" x="60" y="92" style="animation-delay:.2s">Visit</text>
  <circle fill="${AI.vi3}" stroke="${AI.vi}" stroke-width="1.5" class="pop" cx="190" cy="88" r="32" style="animation-delay:.3s"/>
  <text font-family="monospace" font-size="9.5" fill="${AI.vi2}" text-anchor="middle" class="up" x="190" y="85" style="animation-delay:.45s">Research</text>
  <text font-family="monospace" font-size="8.5" fill="${AI.c45}" text-anchor="middle" class="up" x="190" y="98" style="animation-delay:.5s">&amp; scope</text>
  <circle fill="${AI.vi}" class="pop" cx="320" cy="88" r="30" style="animation-delay:.55s"/>
  <text font-family="monospace" font-size="10" font-weight="700" fill="${AI.bg}" text-anchor="middle" class="up" x="320" y="92" style="animation-delay:.7s">Build</text>
  <rect fill="${AI.vi3}" stroke="${AI.vi}" stroke-width="1.25" rx="20" class="pop" x="112" y="148" width="176" height="32" style="animation-delay:.9s"/>
  <text font-family="monospace" font-size="10" fill="${AI.vi2}" text-anchor="middle" class="up" x="200" y="168" style="animation-delay:1.05s">Delivered in a week</text>
</svg>`;

const SVG_AI_AUDIT = `<svg viewBox="0 0 400 240" style="position:absolute;inset:0;width:100%;height:100%;overflow:visible">
  <rect fill="${AI.card}" stroke="${AI.line}" stroke-width="1.25" rx="10" class="up" x="60" y="26" width="190" height="186" style="animation-delay:.1s"/>
  <text font-family="monospace" font-size="9" fill="${AI.c45}" letter-spacing=".1em" class="up" x="78" y="50" style="animation-delay:.2s">AGENT CHECKLIST</text>
  ${["Trained on your data","Handles your calls","Books appointments","Escalates when needed"].map((t, i) => {
    const y = 74 + i * 38;
    return `<circle fill="rgba(123,97,255,.15)" stroke="${AI.vi}" stroke-width="1.5" class="pop" cx="84" cy="${y}" r="10" style="animation-delay:${0.4 + i * 0.12}s"/>
            <text font-family="monospace" font-size="11" fill="${AI.vi}" text-anchor="middle" class="pop" x="84" y="${y + 4}" style="animation-delay:${0.55 + i * 0.12}s">✓</text>
            <text font-family="monospace" font-size="10.5" fill="${AI.dim}" class="up" x="102" y="${y + 4}" style="animation-delay:${0.6 + i * 0.12}s">${t}</text>`;
  }).join("")}
  <circle fill="${AI.vi}" class="pop" cx="314" cy="119" r="36" style="animation-delay:.9s"/>
  <text font-family="monospace" font-size="14" font-weight="700" fill="${AI.bg}" text-anchor="middle" class="pop" x="314" y="112" style="animation-delay:1.05s">FREE</text>
  <text font-family="monospace" font-size="9" fill="${AI.bg}" text-anchor="middle" class="pop" x="314" y="128" style="animation-delay:1.1s">to audit</text>
</svg>`;

function AIStaffContent({ onClose }: { onClose: () => void }) {
  const faqs = [
    { q: "How quickly can an AI staff member be deployed?", a: "Most AI staff members are live within a week. We audit your setup, scope the agent, build it on your systems, and hand it over already handling real work — with a human fallback built in for anything it can't handle." },
    { q: "What can an AI staff member actually do?", a: "Anything that's a repeatable workflow: answer calls and book appointments, handle WhatsApp and email, review and respond to Google reviews, chase unpaid invoices, greet tables, take orders — the work that costs your team time every single day." },
    { q: "What if it gets something wrong?", a: "Every agent has a built-in human fallback. If it hits something it can't handle, it flags a real person. We also monitor every agent weekly and retrain it when the business changes." },
    { q: "Are you an AI company?", a: "We're a team that builds, trains and runs AI staff members for real businesses. The 'AI' part is how the work gets done — you get the result: fewer missed calls, faster replies, work that runs while you sleep." },
  ];
  const roster = [
    { id:"SALES-01", role:"Sales assistant", sig:"Qualifies and books" },
    { id:"HOST", role:"Front-of-house", sig:"Greets, seats, orders" },
    { id:"RING", role:"Receptionist", sig:"Answers every call" },
    { id:"REVIEWS", role:"Review manager", sig:"Replies on autopilot" },
    { id:"SUPPORT", role:"Support agent", sig:"First-line resolution" },
    { id:"SCRIBE", role:"Note-taker", sig:"Logs every meeting" },
  ];
  return (
    <div style={{ background: AI.bg, color: AI.c }}>
      <div style={{ padding: "1.8rem 20px 2.2rem", borderBottom: `1px solid ${AI.line}` }}>
        <Kicker label="AI Staff" color={AI.vi2} />
        <h1 style={{ fontFamily: "var(--font-bricolage,'Bricolage Grotesque',sans-serif)", fontWeight: 800,
          fontSize: "clamp(2.4rem,10vw,3.8rem)", lineHeight: .9, letterSpacing: "-.05em",
          textTransform: "uppercase", color: AI.c, marginBottom: "1rem" }}>
          Your new team.<br />
          <em style={{ fontFamily: "var(--font-instrument-serif,'Instrument Serif',serif)",
            fontStyle: "italic", fontWeight: 400, textTransform: "none", letterSpacing: 0,
            color: AI.vi2, fontSize: "1.04em" }}>Never off the clock.</em>
        </h1>
        <p style={{ fontSize: ".98rem", color: AI.dim, lineHeight: 1.6, maxWidth: "44ch", marginBottom: "1.6rem" }}>
          AI staff members built, trained and deployed on your business — answering calls,
          booking appointments, handling messages, and running the repetitive work that
          costs your team hours every day.{" "}
          <strong style={{ color: AI.c }}>Ready in a week. Free to audit.</strong>
        </p>
        {/* roster grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 8 }}>
          {roster.map(r => (
            <div key={r.id} style={{ background: AI.card, border: `1px solid ${AI.line}`,
              borderRadius: 8, padding: "10px 12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: AI.vi,
                  boxShadow: `0 0 0 3px ${AI.vi3}`, flexShrink: 0 }} />
                <span style={{ fontFamily: "monospace", fontSize: 9.5, color: AI.vi2,
                  letterSpacing: ".06em" }}>{r.id}</span>
              </div>
              <p style={{ fontFamily: "monospace", fontSize: 10, color: AI.dim }}>{r.role}</p>
              <p style={{ fontFamily: "monospace", fontSize: 9.5, color: AI.c45, marginTop: 2 }}>{r.sig}</p>
            </div>
          ))}
        </div>
      </div>
      <div style={{ padding: "1.6rem 20px 0" }}><Kicker label="What they do" color={AI.vi2} /></div>
      {[
        { n:"01", sp:"Trained on your business", h:"Trained on <em>your systems</em>.", stat:"1 week", statD:"from audit to a live, deployed AI staff member",
          cap:"Every AI staff member is trained on your actual data — your systems, your products, your process, your voice. Not a generic chatbot. A member of staff who knows your business before they start their first shift.",
          svg: SVG_AI_TRAINED, svgCap:"Your CRM, calendar, POS and inbox — all connected to one trained agent." },
        { n:"02", sp:"Always answers", h:"Every call, every message — <em>answered</em>.", stat:"00:04", statD:"average first reply time — before a human could even pick up",
          cap:"The phone rings at 2 am. A WhatsApp comes in on Sunday. A Google review lands. An AI staff member handles it immediately — books, resolves, replies — without ever missing a beat or needing a lunch break.",
          svg: SVG_AI_VOICE, svgCap:"Every call answered, every booking taken, every message resolved." },
        { n:"03", sp:"Runs whole workflows", h:"One message. <em>Whole job done.</em>", stat:"0", statD:"hours your team spends on jobs the AI staff member now owns",
          cap:"When a customer books, the agent takes the appointment, updates the calendar, sends the confirmation and tells the team — without a human touching it. We map the workflow, build the automations, and hand you back the time.",
          svg: SVG_AI_WORKFLOW, svgCap:"One incoming message triggers a complete chain — no human in the loop." },
        { n:"04", sp:"Built on your tech", h:"Built on your tools — no new <em>system.</em>", stat:"No", statD:"new software to learn — it runs on the tools you already use",
          cap:"We build on what you already use. The agent connects to your systems, lives in your inbox, answers your calls. Nothing new to log into. Nothing to learn. It simply works inside the tools your team uses every day.",
          svg: SVG_AI_BUILD, svgCap:"Software, hardware, workflows — all connected through one trained agent." },
        { n:"05", sp:"Delivered in a week", h:"Audited, built, <em>live in a week.</em>", stat:"Visit", statD:"we scope it first — then build it — no upfront commitment",
          cap:"We visit, understand the problem, scope the agent, build it on your tech, and hand it over — live and handling real work — in a week. You see what it does before you commit to anything.",
          svg: SVG_AI_COME, svgCap:"Visit to scope, research to build, delivery in a week." },
        { n:"06", sp:"Free audit", h:"Start with a <em>free audit.</em>", stat:"Free", statD:"full audit of where an AI staff member would save you the most time",
          cap:"Before we build anything, we audit your business — where the time goes, which workflows repeat, where the biggest opportunity is. That audit is free, and it tells you exactly what you'd get. No obligation to build.",
          svg: SVG_AI_AUDIT, svgCap:"The checklist we verify before we build. Audit is free." },
      ].map((p, i) => (
        <Reveal key={i}>
          <div style={{ padding: "1.8rem 20px 2rem", borderTop: `1px solid ${AI.line}` }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: ".6rem", marginBottom: ".9rem" }}>
              <span style={{ fontFamily: "monospace", fontSize: 11, color: AI.vi2 }}>{p.n}</span>
              <span style={{ fontFamily: "monospace", fontSize: 9, letterSpacing: ".16em",
                textTransform: "uppercase" as const, color: AI.c45 }}>{p.sp}</span>
            </div>
            <h2 style={{ fontFamily: "var(--font-bricolage,'Bricolage Grotesque',sans-serif)", fontWeight: 700,
              fontSize: "clamp(1.8rem,7vw,2.4rem)", lineHeight: 1.02, letterSpacing: "-.03em", color: AI.c, marginBottom: ".9rem" }}
              dangerouslySetInnerHTML={{ __html: p.h.replace(/<em>/g,
                `<em style="font-family:var(--font-instrument-serif,serif);font-style:italic;font-weight:400;color:${AI.vi2}">`) }} />
            <p style={{ fontSize: ".92rem", color: AI.dim, lineHeight: 1.62, maxWidth: "52ch" }}>{p.cap}</p>
            <VizBox svg={p.svg} bg={AI.card} brd={AI.line} />
            <p style={{ fontFamily: "monospace", fontSize: 10, color: AI.c45, marginTop: ".7rem" }}>{p.svgCap}</p>
            <div style={{ display: "flex", alignItems: "baseline", gap: ".7rem",
              borderTop: `1px solid ${AI.line}`, marginTop: "1rem", paddingTop: "1rem" }}>
              <span style={{ fontFamily: "var(--font-bricolage,'Bricolage Grotesque',sans-serif)", fontWeight: 800,
                fontSize: "clamp(2rem,7vw,2.6rem)", color: AI.vi2, letterSpacing: "-.04em", lineHeight: .85 }}>{p.stat}</span>
              <span style={{ fontSize: 11, color: AI.c45, lineHeight: 1.4, maxWidth: "28ch" }}>{p.statD}</span>
            </div>
          </div>
        </Reveal>
      ))}
      <FAQ items={faqs} bg={AI.bg} border={AI.line} head={AI.c} body={AI.dim} />
      <CTA big={<>A team that never<br /><CtaItalic>clocks off.</CtaItalic></>}
        sub="AI staff members built, trained and deployed on your business — answering every call, running every workflow, free to audit first."
        btn="Get a free audit" onClose={onClose} />
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// CREATIVE CONTENT
// ────────────────────────────────────────────────────────────────────────────
const CR = { bg:"#100E0A", card:"#171410", gold:"#D9B26A", bone:"#F2ECDD",
  dim:"rgba(242,236,221,.7)", c45:"rgba(242,236,221,.45)", line:"rgba(242,236,221,.11)" };

function CreativeContent({ onClose }: { onClose: () => void }) {
  const meterRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = meterRef.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.querySelectorAll<HTMLElement>("[data-fill]").forEach(bar => {
          bar.style.width = bar.dataset.fill + "%";
        });
        el.querySelectorAll<HTMLElement>("[data-count]").forEach(num => {
          const target = parseInt(num.dataset.count!); let cur = 0;
          const step = target > 50 ? 3 : 1;
          const id = setInterval(() => {
            cur = Math.min(cur + step, target);
            num.textContent = cur + "%";
            if (cur >= target) clearInterval(id);
          }, 18);
        });
        io.disconnect();
      }
    }, { threshold: .4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const works = [
    { n:"01", title:"Big Idea", desc:"The concept that makes everything else make sense. One idea a team can execute across every channel without losing the thread.", tag:"strategy · concept" },
    { n:"02", title:"Social Studio", desc:"Reels, carousels, short videos, posts — made to be watched, shared and remembered. The content that feeds the algorithm and builds the name.", tag:"video · content" },
    { n:"03", title:"Brand & Identity", desc:"Logo, colours, type, voice, feel. The system a customer recognises before they read the name — and charges more for.", tag:"identity · systems" },
    { n:"04", title:"Film & Motion", desc:"Full production — from concept to cut. Campaigns, brand films, product shots, social ads. Moving work for any screen.", tag:"film · motion" },
    { n:"05", title:"Ad Creative", desc:"Performance creative built to convert. Hook, visual, copy — made to stop the scroll and earn the click.", tag:"ads · conversion" },
    { n:"06", title:"AI Creative Engine", desc:"AI-assisted concepting, production and iteration — so the team moves faster, tests more ideas, and produces more without hiring more.", tag:"AI-assisted · velocity" },
  ];
  const faqs = [
    { q: "What does 'making a business look like a billion' actually mean?", a: "It means the design, video and creative work so good that a customer assumes you're the best — before they've spoken to you, before you've said a word. That first impression is built by what they see, and it sets the price they're willing to pay." },
    { q: "Do you do the actual production work?", a: "Yes — that's the heart of the Studio. We produce the videos, shoot the photos, design the identity, build the brand system, make the ads. Real production, not briefings to other agencies." },
    { q: "How is Creative different from Brand?", a: "Brand decides what the business stands for — the strategy and foundation. Creative makes it real — the films, ads, identity and everything a customer sees. Both live at OARC; they're stronger together." },
    { q: "Are you an AI company?", a: "No. Real creatives, designers, directors and strategists make everything. AI is one tool in the Studio that helps the team move faster — not a replacement for the people who make the decisions." },
  ];
  return (
    <div style={{ background: CR.bg, color: CR.bone }}>
      <div style={{ padding: "1.8rem 20px 2.2rem", borderBottom: `1px solid ${CR.line}` }}>
        <Kicker label="Creative" color={CR.gold} />
        <h1 style={{ fontFamily: "var(--font-bricolage,'Bricolage Grotesque',sans-serif)", fontWeight: 800,
          fontSize: "clamp(2.4rem,10vw,3.8rem)", lineHeight: .9, letterSpacing: "-.05em",
          textTransform: "uppercase", color: CR.bone, marginBottom: "1rem" }}>
          We make you look<br />
          <em style={{ fontFamily: "var(--font-instrument-serif,'Instrument Serif',serif)",
            fontStyle: "italic", fontWeight: 400, textTransform: "none", letterSpacing: 0,
            color: CR.gold, fontSize: "1.04em" }}>like a billion.</em>
        </h1>
        <p style={{ fontSize: ".98rem", color: CR.dim, lineHeight: 1.6, maxWidth: "44ch" }}>
          The videos, the identity, the ads and the creative system that make customers assume
          you're the best — before you've said a word.{" "}
          <strong style={{ color: CR.bone }}>One Studio. Everything it takes to look the part.</strong>
        </p>
      </div>
      {/* before/after mechanism */}
      <Reveal>
        <div ref={meterRef} style={{ margin: "1.8rem 20px 0", background: CR.card,
          border: `1px solid ${CR.line}`, borderRadius: 12, padding: "1.4rem 1.2rem" }}>
          <p style={{ fontFamily: "monospace", fontSize: 9, letterSpacing: ".14em",
            color: CR.c45, textTransform: "uppercase", marginBottom: "1rem" }}>The difference it makes</p>
          {[{ label:"First impression score", before:34, after:92 },
            { label:"Perceived value (customer survey)", before:41, after:88 }].map((m, i) => (
            <div key={i} style={{ marginBottom: i === 0 ? "1.2rem" : 0 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: ".4rem" }}>
                <span style={{ fontSize: 11, color: CR.dim }}>{m.label}</span>
                <span data-count={m.after} style={{ fontFamily: "monospace", fontSize: 12,
                  color: CR.gold, fontWeight: 700 }}>0%</span>
              </div>
              <div style={{ height: 6, background: CR.line, borderRadius: 4, overflow: "hidden" }}>
                <div data-fill={m.after} style={{ height: "100%", background: CR.gold,
                  borderRadius: 4, width: "0%", transition: "width 1.4s cubic-bezier(.16,1,.3,1)" }} />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: ".3rem" }}>
                <span style={{ fontFamily: "monospace", fontSize: 9.5, color: "rgba(242,236,221,.3)" }}>
                  Before: {m.before}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
      <div style={{ padding: "1.6rem 20px 0" }}><Kicker label="Six things the Studio does" color={CR.gold} /></div>
      {works.map((w, i) => (
        <Reveal key={i}>
          <div style={{ padding: "1.4rem 20px 1.6rem", borderTop: `1px solid ${CR.line}` }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: ".6rem", marginBottom: ".5rem" }}>
                  <span style={{ fontFamily: "monospace", fontSize: 10, color: CR.gold }}>{w.n}</span>
                  <span style={{ fontFamily: "monospace", fontSize: 9, letterSpacing: ".12em",
                    textTransform: "uppercase" as const, color: CR.c45 }}>{w.tag}</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-bricolage,'Bricolage Grotesque',sans-serif)", fontWeight: 700,
                  fontSize: "clamp(1.5rem,6vw,2rem)", letterSpacing: "-.03em", color: CR.bone, marginBottom: ".5rem" }}>
                  {w.title}
                </h3>
                <p style={{ fontSize: ".9rem", color: CR.dim, lineHeight: 1.6, maxWidth: "48ch" }}>{w.desc}</p>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
      <FAQ items={faqs} bg={CR.bg} border={CR.line} head={CR.bone} body={CR.dim} />
      <CTA big={<>Work that makes them<br /><CtaItalic>choose you first.</CtaItalic></>}
        sub="The videos, identity and creative system that make customers assume you're the best — before you've said a word."
        btn="See what the Studio builds" onClose={onClose} />
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// OPERATIONS CONTENT  (light theme)
// ────────────────────────────────────────────────────────────────────────────
const OP = { bg:"#F4F1EA", card:"#FBFAF6", em:"#0E7A54", ink:"#16150F",
  dim:"rgba(22,21,15,.68)", c45:"rgba(22,21,15,.46)", line:"rgba(22,21,15,.11)" };

const SVG_OP_AUDIT = `<svg viewBox="0 0 400 250" style="position:absolute;inset:0;width:100%;height:100%;overflow:visible">
  <text font-family="monospace" font-size="9" fill="rgba(22,21,15,.38)" letter-spacing=".1em" class="up" x="24" y="28" style="animation-delay:.05s">BIGGEST TIME SINKS</text>
  ${[
    { label:"Answering same questions", w:210, em:true },
    { label:"Booking &amp; rescheduling", w:176, em:true },
    { label:"Chasing payments", w:138, em:false },
    { label:"Data entry", w:108, em:false },
    { label:"Status reports", w:84, em:false },
  ].map((b, i) => {
    const y = 44 + i * 38;
    return `<text font-family="monospace" font-size="10" fill="rgba(22,21,15,.55)" class="up" x="24" y="${y}" style="animation-delay:${i * 0.08}s">${b.label}</text>
            <rect fill="${b.em ? "rgba(14,122,84,.18)" : "rgba(22,21,15,.06)"}" stroke="${b.em ? OP.em : "rgba(22,21,15,.12)"}" stroke-width="1.25" rx="4" class="growx" x="24" y="${y + 6}" width="${b.w}" height="14" style="animation-delay:${0.2 + i * 0.1}s"/>`;
  }).join("")}
  <text font-family="monospace" font-size="9.5" fill="${OP.em}" class="up" x="24" y="240" style="animation-delay:.8s">← these go to your AI team</text>
</svg>`;

const SVG_OP_TAKE = `<svg viewBox="0 0 400 292" style="position:absolute;inset:0;width:100%;height:100%;overflow:visible">
  ${["Answer FAQ message","Rebook cancellation","Send payment reminder","Log the enquiry","Chase overdue invoice","Weekly report draft"].map((t, i) => {
    const y = 24 + i * 42; const done = i < 4;
    return `<rect fill="${done ? "rgba(14,122,84,.07)" : OP.card}" stroke="${done ? OP.em : "rgba(22,21,15,.1)"}" stroke-width="1.25" rx="7" class="up" x="24" y="${y}" width="272" height="32" style="animation-delay:${i * 0.1}s"/>
            <text font-family="monospace" font-size="10.5" fill="${done ? OP.em : "rgba(22,21,15,.45)"}" class="up" x="44" y="${y + 20}" style="animation-delay:${0.1 + i * 0.1}s">${t}</text>
            <circle fill="${done ? OP.em : "rgba(22,21,15,.08)"}" stroke="${done ? OP.em : "rgba(22,21,15,.16)"}" stroke-width="1.25" class="pop" cx="332" cy="${y + 16}" r="12" style="animation-delay:${0.2 + i * 0.1}s"/>
            ${done ? `<text font-family="monospace" font-size="12" fill="#F4F1EA" text-anchor="middle" class="pop" x="332" y="${y + 20}" style="animation-delay:${0.35 + i * 0.1}s">✓</text>` : ""}`;
  }).join("")}
</svg>`;

const SVG_OP_FLOW = `<svg viewBox="0 0 400 224" style="position:absolute;inset:0;width:100%;height:100%;overflow:visible">
  <line stroke="rgba(22,21,15,.12)" stroke-width="1.25" class="draw" style="--L:100;animation-delay:.3s" x1="100" y1="104" x2="158" y2="104"/>
  <line stroke="rgba(22,21,15,.12)" stroke-width="1.25" class="draw" style="--L:100;animation-delay:.5s" x1="242" y1="104" x2="302" y2="104"/>
  <path fill="none" stroke="rgba(14,122,84,.4)" stroke-width="1.25" stroke-dasharray="5 3" class="draw" style="--L:280;animation-delay:.8s" d="M336,120 Q336,184 200,184 Q64,184 64,120"/>
  <circle fill="${OP.card}" stroke="${OP.em}" stroke-width="1.5" class="pop" cx="64" cy="104" r="36" style="animation-delay:.1s"/>
  <text font-family="monospace" font-size="9.5" fill="${OP.em}" text-anchor="middle" class="up" x="64" y="100" style="animation-delay:.2s">Trigger</text>
  <text font-family="monospace" font-size="8.5" fill="${OP.dim}" text-anchor="middle" class="up" x="64" y="113" style="animation-delay:.25s">fires</text>
  <rect fill="${OP.card}" stroke="rgba(22,21,15,.12)" stroke-width="1.25" rx="10" class="up" x="158" y="84" width="84" height="40" style="animation-delay:.35s"/>
  <text font-family="monospace" font-size="9" fill="${OP.dim}" text-anchor="middle" class="up" x="200" y="108" style="animation-delay:.5s">Steps run</text>
  <circle fill="${OP.em}" class="pop" cx="336" cy="104" r="34" style="animation-delay:.6s"/>
  <text font-family="monospace" font-size="9.5" font-weight="700" fill="#F4F1EA" text-anchor="middle" class="up" x="336" y="100" style="animation-delay:.75s">Done</text>
  <text font-family="monospace" font-size="8.5" fill="#F4F1EA" text-anchor="middle" class="up" x="336" y="113" style="animation-delay:.8s">repeats</text>
  <text font-family="monospace" font-size="9" fill="rgba(14,122,84,.7)" text-anchor="middle" class="up" x="200" y="200" style="animation-delay:1s">↺ loops automatically</text>
</svg>`;

const SVG_OP_CONTROL = `<svg viewBox="0 0 400 200" style="position:absolute;inset:0;width:100%;height:100%;overflow:visible">
  <rect fill="${OP.card}" stroke="rgba(22,21,15,.1)" stroke-width="1.25" rx="10" class="up" x="24" y="20" width="280" height="148" style="animation-delay:.1s"/>
  <text font-family="monospace" font-size="9" fill="rgba(22,21,15,.38)" letter-spacing=".1em" class="up" x="40" y="44" style="animation-delay:.2s">OPERATIONS LOG</text>
  ${["09:14 — Booking confirmed auto","09:31 — Invoice sent (overdue)","10:02 — FAQ replied × 4","10:44 — Report drafted"].map((t, i) => {
    const y = 62 + i * 28;
    return `<rect fill="${i < 3 ? "rgba(14,122,84,.06)" : "rgba(22,21,15,.03)"}" rx="4" class="up" x="36" y="${y}" width="256" height="20" style="animation-delay:${0.3 + i * 0.1}s"/>
            <text font-family="monospace" font-size="9.5" fill="rgba(22,21,15,.6)" class="up" x="48" y="${y + 14}" style="animation-delay:${0.4 + i * 0.1}s">${t}</text>`;
  }).join("")}
  <rect fill="${OP.em}" rx="6" class="pop" x="328" y="80" width="48" height="48" style="animation-delay:.7s"/>
  <rect fill="#F4F1EA" rx="2" class="pop" x="340" y="92" width="8" height="24" style="animation-delay:.85s"/>
  <rect fill="#F4F1EA" rx="2" class="pop" x="356" y="92" width="8" height="24" style="animation-delay:.9s"/>
</svg>`;

function OperationsContent({ onClose }: { onClose: () => void }) {
  const faqs = [
    { q: "What does taking the boring work off my plate actually mean?", a: "We map the repetitive jobs that eat your team's time — answering the same questions, booking and rescheduling, chasing payments, data entry, reports — and build the automations and AI workflows that handle them, so your people do the work that matters." },
    { q: "How much of my team's time can this actually return?", a: "Most businesses recover 8–14 hours per person per week. The exact number depends on the audit. The audit is the first step — and it's free." },
    { q: "Do we need new software?", a: "Usually not. We build on the tools your team already uses. The automation connects what you have; your team doesn't need to learn anything new." },
    { q: "Are you an AI company?", a: "We use AI where it speeds things up — but this is fundamentally about process design and automation. Real operations designers map the work, identify what can be automated, and build the systems." },
  ];
  const timeItems = [
    "Answering the same questions every day",
    "Booking, rescheduling, confirming",
    "Chasing payments and invoices",
    "Data entry and logging",
    "Status updates and reports",
    "Follow-ups that never got sent",
  ];
  return (
    <div style={{ background: OP.bg, color: OP.ink }}>
      <div style={{ padding: "1.8rem 20px 2.2rem", borderBottom: `1px solid ${OP.line}` }}>
        <Kicker label="Operations" color={OP.em} />
        <h1 style={{ fontFamily: "var(--font-bricolage,'Bricolage Grotesque',sans-serif)", fontWeight: 800,
          fontSize: "clamp(2.4rem,10vw,3.8rem)", lineHeight: .9, letterSpacing: "-.05em",
          textTransform: "uppercase", color: OP.ink, marginBottom: "1rem" }}>
          Take the boring work<br />
          <em style={{ fontFamily: "var(--font-instrument-serif,'Instrument Serif',serif)",
            fontStyle: "italic", fontWeight: 400, textTransform: "none", letterSpacing: 0,
            color: OP.em, fontSize: "1.04em" }}>off your plate.</em>
        </h1>
        <p style={{ fontSize: ".98rem", color: OP.dim, lineHeight: 1.6, maxWidth: "44ch" }}>
          We map the repetitive jobs eating your team's time, then build the automations and
          AI workflows that handle them.{" "}
          <strong style={{ color: OP.ink }}>Most businesses get 8–14 hours per person per week back.</strong>
        </p>
        <div style={{ marginTop: "1.6rem", display: "flex", flexWrap: "wrap" as const, gap: 6 }}>
          {timeItems.map(t => (
            <span key={t} style={{ border: `1px solid ${OP.line}`, background: OP.card,
              padding: "6px 10px", fontSize: 11, color: OP.dim, borderRadius: 4 }}>{t}</span>
          ))}
        </div>
      </div>
      <div style={{ padding: "1.6rem 20px 0" }}><Kicker label="How we do it" color={OP.em} /></div>
      {[
        { n:"01", sp:"The audit", h:"We map where the <em>time goes</em>.", stat:"Free", statD:"the audit costs nothing — you see exactly what you'd get back",
          cap:"We spend time with your team, map every repetitive job, and surface the biggest time sinks. Most businesses are surprised by how much time goes to the same five tasks. The audit is free — and it tells you the ROI before we build a thing.",
          svg: SVG_OP_AUDIT, svgCap:"The biggest time sinks — found in the audit, handled by automation." },
        { n:"02", sp:"Handle it all", h:"Every repetitive task <em>handled</em>.", stat:"13 hrs", statD:"the average time returned per person per week after the first three months",
          cap:"Answering the same questions. Booking and rescheduling. Chasing payments. Logging data. Sending reports. We build the automations and AI workflows that handle each one — so your team never touches them again.",
          svg: SVG_OP_TAKE, svgCap:"Every repeating task checked off — without a human in the loop." },
        { n:"03", sp:"Triggers and loops", h:"Work that runs itself — <em>automatically</em>.", stat:"24/7", statD:"automations run without supervision — nights, weekends, bank holidays",
          cap:"Every automation we build is trigger-based — an event fires it, the steps run, it loops back ready for the next time. No human needs to kick it off. It runs while your team is at home.",
          svg: SVG_OP_FLOW, svgCap:"Trigger fires, steps run, loops back — no human required." },
        { n:"04", sp:"You stay in control", h:"You stay in <em>control</em>.", stat:"Always", statD:"pause, edit or override any automation — you're always in the driving seat",
          cap:"Every automation has a kill switch. You can pause, edit or override anything we've built — you're never dependent on us to make a change. We hand you a running system, not a black box.",
          svg: SVG_OP_CONTROL, svgCap:"The operations log — everything running, always visible, always pauseable." },
      ].map((p, i) => (
        <Reveal key={i}>
          <div style={{ padding: "1.8rem 20px 2rem", borderTop: `1px solid ${OP.line}` }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: ".6rem", marginBottom: ".9rem" }}>
              <span style={{ fontFamily: "monospace", fontSize: 11, color: OP.em }}>{p.n}</span>
              <span style={{ fontFamily: "monospace", fontSize: 9, letterSpacing: ".16em",
                textTransform: "uppercase" as const, color: OP.c45 }}>{p.sp}</span>
            </div>
            <h2 style={{ fontFamily: "var(--font-bricolage,'Bricolage Grotesque',sans-serif)", fontWeight: 700,
              fontSize: "clamp(1.8rem,7vw,2.4rem)", lineHeight: 1.02, letterSpacing: "-.03em", color: OP.ink, marginBottom: ".9rem" }}
              dangerouslySetInnerHTML={{ __html: p.h.replace(/<em>/g,
                `<em style="font-family:var(--font-instrument-serif,serif);font-style:italic;font-weight:400;color:${OP.em}">`) }} />
            <p style={{ fontSize: ".92rem", color: OP.dim, lineHeight: 1.62, maxWidth: "52ch" }}>{p.cap}</p>
            <VizBox svg={p.svg} bg={OP.card} brd={OP.line} dot="rgba(22,21,15,.04)" />
            <p style={{ fontFamily: "monospace", fontSize: 10, color: OP.c45, marginTop: ".7rem" }}>{p.svgCap}</p>
            <div style={{ display: "flex", alignItems: "baseline", gap: ".7rem",
              borderTop: `1px solid ${OP.line}`, marginTop: "1rem", paddingTop: "1rem" }}>
              <span style={{ fontFamily: "var(--font-bricolage,'Bricolage Grotesque',sans-serif)", fontWeight: 800,
                fontSize: "clamp(2rem,7vw,2.6rem)", color: OP.em, letterSpacing: "-.04em", lineHeight: .85 }}>{p.stat}</span>
              <span style={{ fontSize: 11, color: OP.c45, lineHeight: 1.4, maxWidth: "28ch" }}>{p.statD}</span>
            </div>
          </div>
        </Reveal>
      ))}
      <FAQ items={faqs} bg={OP.bg} border={OP.line} head={OP.ink} body={OP.dim} light />
      <CTA big={<>Hours back every<br /><CtaItalic>single week.</CtaItalic></>}
        sub="We map the time sinks, build the automations, and hand your team back 8–14 hours a week. Audit is free."
        btn="Get a free audit" onClose={onClose} light />
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// AUTOMATION CONTENT
// ────────────────────────────────────────────────────────────────────────────
const AU = { bg:"#0A0C0F", card:"#12151A", mint:"#34E39B", mint2:"rgba(52,227,155,.12)",
  c:"#EAF0EC", dim:"rgba(234,240,236,.7)", c45:"rgba(234,240,236,.45)", line:"rgba(234,240,236,.1)" };

const SVG_AU_CONNECT = `<svg viewBox="0 0 400 256" style="position:absolute;inset:0;width:100%;height:100%;overflow:visible">
  ${[
    { l:"Sheets", x:72, y:54 }, { l:"Stripe", x:330, y:60 },
    { l:"WhatsApp", x:60, y:196 }, { l:"POS", x:324, y:202 }, { l:"Email", x:200, y:38 },
  ].map((n, i) => `
    <line stroke="${AU.line}" stroke-width="1.25" class="draw" style="--L:160;animation-delay:${0.2 + i * 0.1}s" x1="${n.x}" y1="${n.y}" x2="200" y2="136"/>
    <circle fill="${AU.mint2}" stroke="${AU.mint}" stroke-width="1.25" class="pop" cx="${n.x}" cy="${n.y}" r="18" style="animation-delay:${0.4 + i * 0.1}s"/>
    <text font-family="monospace" font-size="8.5" fill="${AU.mint}" text-anchor="middle" class="up" x="${n.x}" y="${n.y + 4}" style="animation-delay:${0.55 + i * 0.1}s">${n.l}</text>
  `).join("")}
  <circle fill="${AU.mint}" class="pop" cx="200" cy="136" r="38" style="animation-delay:.75s"/>
  <text font-family="monospace" font-size="9.5" font-weight="700" fill="${AU.bg}" text-anchor="middle" class="up" x="200" y="130" style="animation-delay:.9s">one</text>
  <text font-family="monospace" font-size="9.5" font-weight="700" fill="${AU.bg}" text-anchor="middle" class="up" x="200" y="144" style="animation-delay:.95s">system</text>
</svg>`;

const SVG_AU_TRIGGER = `<svg viewBox="0 0 400 196" style="position:absolute;inset:0;width:100%;height:100%;overflow:visible">
  <rect fill="${AU.mint2}" stroke="${AU.mint}" stroke-width="1.25" rx="8" class="up" x="28" y="78" width="90" height="40" style="animation-delay:.1s"/>
  <text font-family="monospace" font-size="10" fill="${AU.mint}" text-anchor="middle" class="up" x="73" y="102" style="animation-delay:.2s">trigger</text>
  <line stroke="${AU.line}" stroke-width="1.25" class="draw" style="--L:56;animation-delay:.3s" x1="118" y1="98" x2="170" y2="98"/>
  <text font-family="monospace" font-size="9" fill="rgba(234,240,236,.35)" text-anchor="middle" class="up" x="144" y="92" style="animation-delay:.35s">fires</text>
  ${[{ l:"send", y:56 }, { l:"update", y:98 }, { l:"notify", y:140 }].map((a, i) => `
    <line stroke="${AU.line}" stroke-width="1" stroke-dasharray="4 3" class="draw" style="--L:50;animation-delay:${0.4 + i * 0.08}s" x1="170" y1="98" x2="214" y2="${a.y + 20}"/>
    <rect fill="${AU.card}" stroke="${AU.line}" stroke-width="1.25" rx="8" class="up" x="214" y="${a.y}" width="80" height="40" style="animation-delay:${0.5 + i * 0.1}s"/>
    <text font-family="monospace" font-size="10" fill="${AU.dim}" text-anchor="middle" class="up" x="254" y="${a.y + 24}" style="animation-delay:${0.65 + i * 0.1}s">${a.l}</text>
  `).join("")}
  <circle fill="${AU.mint}" class="pop" cx="324" cy="98" r="16" style="animation-delay:.85s"/>
  <text font-family="monospace" font-size="12" fill="${AU.bg}" text-anchor="middle" class="pop" x="324" y="103" style="animation-delay:1s">✓</text>
</svg>`;

const SVG_AU_DECIDE = `<svg viewBox="0 0 400 216" style="position:absolute;inset:0;width:100%;height:100%;overflow:visible">
  <line stroke="${AU.line}" stroke-width="1.25" class="draw" style="--L:80;animation-delay:.1s" x1="30" y1="108" x2="150" y2="108"/>
  <rect fill="${AU.mint2}" stroke="${AU.mint}" stroke-width="1.5" rx="4" class="pop" x="150" y="80" width="56" height="56" transform="rotate(45 178 108)" style="animation-delay:.3s"/>
  <text font-family="monospace" font-size="10" font-weight="700" fill="${AU.mint}" text-anchor="middle" class="pop" x="178" y="104" style="animation-delay:.45s">AI</text>
  <text font-family="monospace" font-size="9" fill="${AU.dim}" text-anchor="middle" class="pop" x="178" y="118" style="animation-delay:.5s">decides</text>
  <line stroke="${AU.line}" stroke-width="1.25" class="draw" style="--L:80;animation-delay:.6s" x1="218" y1="80" x2="282" y2="48"/>
  <line stroke="${AU.line}" stroke-width="1.25" class="draw" style="--L:80;animation-delay:.7s" x1="218" y1="136" x2="282" y2="168"/>
  <rect fill="${AU.card}" stroke="${AU.line}" stroke-width="1.25" rx="8" class="up" x="282" y="28" width="96" height="40" style="animation-delay:.75s"/>
  <text font-family="monospace" font-size="10" fill="${AU.dim}" text-anchor="middle" class="up" x="330" y="52" style="animation-delay:.9s">this way</text>
  <rect fill="${AU.card}" stroke="${AU.line}" stroke-width="1.25" rx="8" class="up" x="282" y="148" width="96" height="40" style="animation-delay:.85s"/>
  <text font-family="monospace" font-size="10" fill="${AU.dim}" text-anchor="middle" class="up" x="330" y="172" style="animation-delay:1s">or that</text>
</svg>`;

const SVG_AU_ALWAYS = `<svg viewBox="0 0 400 240" style="position:absolute;inset:0;width:100%;height:100%;overflow:visible">
  <circle fill="none" stroke="${AU.line}" stroke-width="1.25" cx="200" cy="120" r="70"/>
  <circle fill="none" stroke="rgba(52,227,155,.2)" stroke-width="1.5" stroke-dasharray="5 3" cx="200" cy="120" r="90"/>
  <circle fill="${AU.card}" stroke="${AU.mint}" stroke-width="1.5" cx="200" cy="120" r="42"/>
  <text font-family="monospace" font-size="18" font-weight="700" fill="${AU.mint}" text-anchor="middle" x="200" y="114">24</text>
  <line stroke="${AU.mint}" stroke-width="1.5" x1="178" y1="120" x2="222" y2="120"/>
  <text font-family="monospace" font-size="18" font-weight="700" fill="${AU.mint}" text-anchor="middle" x="200" y="136">7</text>
  <g class="orbit">
    <circle fill="${AU.mint}" cx="200" cy="30" r="8" style="filter:drop-shadow(0 0 8px rgba(52,227,155,.6))"/>
  </g>
  <text font-family="monospace" font-size="9.5" fill="${AU.c45}" text-anchor="middle" x="200" y="222">always on — no holidays, no sick days</text>
</svg>`;

const SVG_AU_WATCH = `<svg viewBox="0 0 400 224" style="position:absolute;inset:0;width:100%;height:100%;overflow:visible">
  <rect fill="${AU.card}" stroke="${AU.line}" stroke-width="1.25" rx="12" class="up" x="24" y="24" width="280" height="168" style="animation-delay:.1s"/>
  <text font-family="monospace" font-size="9" fill="${AU.c45}" letter-spacing=".1em" class="up" x="40" y="50" style="animation-delay:.2s">AUTOMATION DASHBOARD</text>
  ${[{ h:80, c:AU.mint }, { h:56, c:AU.mint }, { h:96, c:AU.mint }, { h:42, c:"rgba(234,240,236,.2)" }, { h:64, c:AU.mint }].map((b, i) => {
    const x = 48 + i * 48; const y = 160 - b.h;
    return `<rect fill="${b.c}" rx="4" class="grow" x="${x}" y="${y}" width="32" height="${b.h}" style="animation-delay:${0.3 + i * 0.1}s"/>`;
  }).join("")}
  <circle fill="${AU.mint}" class="pop" cx="340" cy="48" r="10" style="animation-delay:.7s;filter:drop-shadow(0 0 6px rgba(52,227,155,.5))"/>
  <text font-family="monospace" font-size="9" fill="${AU.mint}" class="up" x="326" y="74" text-anchor="middle" style="animation-delay:.85s">alert</text>
</svg>`;

function AutomationContent({ onClose }: { onClose: () => void }) {
  const faqs = [
    { q: "What does 'a business that runs itself' mean in practice?", a: "It means your core workflows — booking, invoicing, follow-up, lead routing, reporting — happen automatically when the trigger fires, without a human kicking them off. Your team focuses on work that actually needs a person." },
    { q: "What tools do you connect?", a: "Whatever you already use: Stripe, Google Sheets, WhatsApp, your CRM, your POS, your email platform, your calendar. We connect what you have — we don't sell you new software." },
    { q: "What if something breaks or needs changing?", a: "We monitor every automation and you can pause or override anything at any time. When your business changes, we update the workflows — usually in hours, not days." },
    { q: "Are you an AI company?", a: "Automation is the foundation — AI is one layer on top where it adds value (smart routing, dynamic responses). Real engineers design and build the systems. The result is a business that runs whether you're watching or not." },
  ];
  const clusters = [
    { title:"Marketing", items:["Lead capture", "Email sequences", "Re-engagement", "Campaign reporting"] },
    { title:"Sales", items:["Lead routing", "Follow-up chains", "Pipeline updates", "Quote sending"] },
    { title:"Bookings", items:["Confirmation sends", "Reminder messages", "Rescheduling", "No-show follow-up"] },
    { title:"Finance", items:["Invoice creation", "Payment chasing", "Reconciliation alerts", "Report generation"] },
    { title:"Operations", items:["Task creation", "Status updates", "Handoff triggers", "SLA alerts"] },
    { title:"Data", items:["Cross-system sync", "CRM updates", "Dashboard refresh", "Anomaly flags"] },
  ];
  return (
    <div style={{ background: AU.bg, color: AU.c }}>
      <div style={{ padding: "1.8rem 20px 2.2rem", borderBottom: `1px solid ${AU.line}` }}>
        <Kicker label="Automation" color={AU.mint} />
        <h1 style={{ fontFamily: "var(--font-bricolage,'Bricolage Grotesque',sans-serif)", fontWeight: 800,
          fontSize: "clamp(2.4rem,10vw,3.8rem)", lineHeight: .9, letterSpacing: "-.05em",
          textTransform: "uppercase", color: AU.c, marginBottom: "1rem" }}>
          The business that<br />
          <em style={{ fontFamily: "var(--font-instrument-serif,'Instrument Serif',serif)",
            fontStyle: "italic", fontWeight: 400, textTransform: "none", letterSpacing: 0,
            color: AU.mint, fontSize: "1.04em" }}>runs itself.</em>
        </h1>
        <p style={{ fontSize: ".98rem", color: AU.dim, lineHeight: 1.6, maxWidth: "44ch" }}>
          We connect your tools, build the triggers, and automate the workflows so your business
          keeps moving — booking, invoicing, following up —{" "}
          <strong style={{ color: AU.c }}>while your team works on things that actually need a person.</strong>
        </p>
      </div>
      <div style={{ padding: "1.6rem 20px 0" }}><Kicker label="How automation works" color={AU.mint} /></div>
      {[
        { n:"01", sp:"One connected system", h:"Everything <em>connected</em> — one system.", stat:"Zero", statD:"data entry between systems once the automations are live",
          cap:"Your tools don't talk to each other. We connect them — Stripe, WhatsApp, your CRM, your calendar, your spreadsheets — so data flows automatically without a person copying it from one place to another.",
          svg: SVG_AU_CONNECT, svgCap:"All your tools connected through one central automation layer." },
        { n:"02", sp:"Trigger → actions", h:"Trigger fires. <em>Job done.</em>", stat:"Seconds", statD:"from trigger to completed workflow — no human in the loop",
          cap:"Every automation starts with a trigger — a booking, a payment, a new lead, a message. The moment it fires, a chain of actions runs: send, update, notify, log. The whole job is done before you'd have had time to open the tab.",
          svg: SVG_AU_TRIGGER, svgCap:"One trigger fires, the chain runs, everything is done." },
        { n:"03", sp:"AI routing", h:"AI decides which <em>path it takes</em>.", stat:"Smart", statD:"routing based on what the customer said, the amount owed, the lead score",
          cap:"Some decisions need context. We use AI routing at the branch points — so a message from a high-value customer goes one way, a cold lead another. Smarter than a simple if/then, and it learns as it handles more.",
          svg: SVG_AU_DECIDE, svgCap:"AI reads the context and routes to the right path — automatically." },
        { n:"04", sp:"Always on", h:"Never off. <em>24/7.</em>", stat:"24/7", statD:"automations running — nights, weekends, bank holidays, while you sleep",
          cap:"Your automation doesn't take holidays or get sick. A booking at 2 am gets confirmed. An overdue invoice at 11 pm gets chased. A lead that comes in on Sunday gets routed by Monday morning. Always on, never tiring.",
          svg: SVG_AU_ALWAYS, svgCap:"The orbit never stops. Every trigger is caught, every job is done." },
        { n:"05", sp:"Watch it work", h:"See it running — in <em>real time</em>.", stat:"Full", statD:"visibility into every automation, every trigger, every completed job",
          cap:"You can see everything. A live dashboard shows which automations are running, how many tasks each one has handled, and an alert when anything needs attention. You're always in control of the system.",
          svg: SVG_AU_WATCH, svgCap:"The dashboard: every automation live, every alert surfaced." },
      ].map((p, i) => (
        <Reveal key={i}>
          <div style={{ padding: "1.8rem 20px 2rem", borderTop: `1px solid ${AU.line}` }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: ".6rem", marginBottom: ".9rem" }}>
              <span style={{ fontFamily: "monospace", fontSize: 11, color: AU.mint }}>{p.n}</span>
              <span style={{ fontFamily: "monospace", fontSize: 9, letterSpacing: ".16em",
                textTransform: "uppercase" as const, color: AU.c45 }}>{p.sp}</span>
            </div>
            <h2 style={{ fontFamily: "var(--font-bricolage,'Bricolage Grotesque',sans-serif)", fontWeight: 700,
              fontSize: "clamp(1.8rem,7vw,2.4rem)", lineHeight: 1.02, letterSpacing: "-.03em", color: AU.c, marginBottom: ".9rem" }}
              dangerouslySetInnerHTML={{ __html: p.h.replace(/<em>/g,
                `<em style="font-family:var(--font-instrument-serif,serif);font-style:italic;font-weight:400;color:${AU.mint}">`) }} />
            <p style={{ fontSize: ".92rem", color: AU.dim, lineHeight: 1.62, maxWidth: "52ch" }}>{p.cap}</p>
            <VizBox svg={p.svg} bg={AU.card} brd={AU.line} />
            <p style={{ fontFamily: "monospace", fontSize: 10, color: AU.c45, marginTop: ".7rem" }}>{p.svgCap}</p>
            <div style={{ display: "flex", alignItems: "baseline", gap: ".7rem",
              borderTop: `1px solid ${AU.line}`, marginTop: "1rem", paddingTop: "1rem" }}>
              <span style={{ fontFamily: "var(--font-bricolage,'Bricolage Grotesque',sans-serif)", fontWeight: 800,
                fontSize: "clamp(2rem,7vw,2.6rem)", color: AU.mint, letterSpacing: "-.04em", lineHeight: .85 }}>{p.stat}</span>
              <span style={{ fontSize: 11, color: AU.c45, lineHeight: 1.4, maxWidth: "28ch" }}>{p.statD}</span>
            </div>
          </div>
        </Reveal>
      ))}
      {/* cluster grid */}
      <Reveal>
        <div style={{ padding: "1.6rem 20px 2rem", borderTop: `1px solid ${AU.line}` }}>
          <Kicker label="What we automate" color={AU.mint} />
          <div style={{ marginTop: "1.2rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem 1.2rem" }}>
            {clusters.map(c => (
              <div key={c.title}>
                <p style={{ fontFamily: "monospace", fontSize: 9, letterSpacing: ".14em",
                  textTransform: "uppercase", color: AU.mint, marginBottom: ".5rem" }}>{c.title}</p>
                {c.items.map(item => (
                  <p key={item} style={{ fontSize: 11, color: AU.dim, lineHeight: 1.6 }}>· {item}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
      <FAQ items={faqs} bg={AU.bg} border={AU.line} head={AU.c} body={AU.dim} />
      <CTA big={<>A business that runs<br /><CtaItalic>on its own.</CtaItalic></>}
        sub="Connect your tools, build the triggers, automate the workflows — so your business keeps moving while your team does work that actually needs a person."
        btn="See what we can automate for you" onClose={onClose} />
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// TRANSFORMATION CONTENT
// ────────────────────────────────────────────────────────────────────────────
const TR = { bg:"#050A10", card:"#0A1018", sig:"#3EC6FF", sig2:"rgba(62,198,255,.12)",
  c:"#E8F4FF", dim:"rgba(232,244,255,.7)", c45:"rgba(232,244,255,.45)", line:"rgba(232,244,255,.1)" };

function TransformationContent({ onClose }: { onClose: () => void }) {
  const lifecycle = [
    { n:"01", stage:"Discover", desc:"Guests find you — website, maps, social" },
    { n:"02", stage:"Book", desc:"They reserve — online, phone, in person" },
    { n:"03", stage:"Order", desc:"They choose — menu, products, services" },
    { n:"04", stage:"Serve", desc:"You deliver — kitchen, floor, fulfilment" },
    { n:"05", stage:"Pay", desc:"Transaction happens — fast, frictionless" },
    { n:"06", stage:"Review", desc:"They share — Google, TripAdvisor, social" },
    { n:"07", stage:"Return", desc:"They come back — loyalty, re-engagement" },
  ];
  const platforms = [
    { id:"MENU", name:"Digital menu", desc:"QR, kiosk or screen" },
    { id:"KITCHEN", name:"Kitchen system", desc:"Orders flow direct" },
    { id:"KIOSK", name:"Self-order", desc:"Staff freed up" },
    { id:"DESK", name:"Reservations", desc:"Bookings managed" },
    { id:"TABLE", name:"Table service", desc:"Order at seat" },
    { id:"BRIDGE", name:"The bridge", desc:"All platforms, one view" },
  ];
  const phases = [
    { n:"01", sp:"Diagnose", h:"We map where the business <em>breaks</em>.", stat:"Day 1", statD:"we map the full picture before touching a single system",
      cap:"Before we build anything, we spend time inside the operation — front of house, back of house, the systems, the team. We find the five places friction costs the most money. That diagnostic shapes everything." },
    { n:"02", sp:"Design", h:"We design it — <em>around your operation</em>.", stat:"Custom", statD:"every transformation is designed for this business, not a template",
      cap:"No two restaurants, hotels or retail operations are the same. The transformation we build fits the floor plan, the team structure, the volume, the brand. We design it with you, not for a generic use case." },
    { n:"03", sp:"Ship in 7 days", h:"Live in a <em>week</em>.", stat:"7 days", statD:"from kick-off to live systems — not weeks, not months",
      cap:"We move fast. Most clients are live within a week. We install, configure, train the team, and run the first service with you. No six-month implementation. No consultant day-rates while nothing happens." },
    { n:"04", sp:"Integrate", h:"Everything talks to <em>everything</em>.", stat:"100%", statD:"of your data in one place — reservations, orders, payments, reviews",
      cap:"The front-of-house talks to the kitchen. Reservations talk to the floor. Payments talk to the POS. We connect the full loop so data flows without anyone typing it twice." },
    { n:"05", sp:"You own it", h:"The system is <em>yours</em>.", stat:"4+", statD:"stars — the typical review score after the first three months",
      cap:"We hand over a running system, train your team, and stay on call. You're not dependent on us to keep it working. You own the tech, you own the data, you own the result." },
  ];
  const faqs = [
    { q: "What does 'transformation' actually involve?", a: "We redesign the full customer journey — from discovery to repeat visit — implementing the tech stack that makes each step faster, easier and more profitable. The menu, the kitchen, the reservations, the payments, the reviews, the loyalty. All of it." },
    { q: "How fast can you actually deploy?", a: "Most businesses are live within 7 days of kick-off. We don't do six-month implementation projects. We install, configure, train and go live — then we stay on for the first month to make sure it sticks." },
    { q: "Are you consultants?", a: "No. Consultants give you a report. We build the thing, install it, train your team on it, and run the first service with you. We only get paid if the system is live and working — not for writing recommendations." },
    { q: "Are you an AI company?", a: "AI is one layer of the transformation — smart routing, demand forecasting, review management. But the transformation is physical: the systems in your space, the screens your team uses, the flow your guests experience." },
  ];
  return (
    <div style={{ background: TR.bg, color: TR.c }}>
      <div style={{ padding: "1.8rem 20px 2.2rem", borderBottom: `1px solid ${TR.line}` }}>
        <Kicker label="Transformation" color={TR.sig} />
        <h1 style={{ fontFamily: "var(--font-bricolage,'Bricolage Grotesque',sans-serif)", fontWeight: 800,
          fontSize: "clamp(2.4rem,10vw,3.8rem)", lineHeight: .9, letterSpacing: "-.05em",
          textTransform: "uppercase", color: TR.c, marginBottom: "1rem" }}>
          Change how<br />
          <em style={{ fontFamily: "var(--font-instrument-serif,'Instrument Serif',serif)",
            fontStyle: "italic", fontWeight: 400, textTransform: "none", letterSpacing: 0,
            color: TR.sig, fontSize: "1.04em" }}>the business runs.</em>
        </h1>
        <p style={{ fontSize: ".98rem", color: TR.dim, lineHeight: 1.6, maxWidth: "44ch" }}>
          We redesign the full guest journey — from the moment they discover you to the moment
          they come back — and implement the tech that makes every step faster and more profitable.{" "}
          <strong style={{ color: TR.c }}>Live in 7 days. No consultant day-rates.</strong>
        </p>
        {/* speed metrics */}
        <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "1.2rem 2rem", marginTop: "1.8rem" }}>
          {[["7d","from kick-off to live systems"], ["100%","of your data in one place"],
            ["4+","star review score after 3 months"], ["24/7","system monitoring after go-live"]].map(([v, d]) => (
            <div key={v}>
              <p style={{ fontFamily: "var(--font-bricolage,'Bricolage Grotesque',sans-serif)",
                fontWeight: 800, fontSize: "clamp(1.8rem,6vw,2.4rem)", color: TR.sig,
                letterSpacing: "-.04em", lineHeight: .85, marginBottom: ".4rem" }}>{v}</p>
              <p style={{ fontFamily: "monospace", fontSize: 10, color: TR.c45, maxWidth: "18ch" }}>{d}</p>
            </div>
          ))}
        </div>
      </div>
      {/* lifecycle rail */}
      <Reveal>
        <div style={{ padding: "1.6rem 20px 2rem", borderBottom: `1px solid ${TR.line}` }}>
          <Kicker label="The full guest lifecycle" color={TR.sig} />
          <div style={{ marginTop: "1.2rem" }}>
            {lifecycle.map((l, i) => (
              <div key={i} style={{ display: "flex", gap: "1rem", padding: ".9rem 0",
                borderTop: i > 0 ? `1px solid ${TR.line}` : "none" }}>
                <span style={{ fontFamily: "monospace", fontSize: 10, color: TR.sig,
                  width: 28, flexShrink: 0 }}>{l.n}</span>
                <div>
                  <span style={{ fontFamily: "var(--font-bricolage,'Bricolage Grotesque',sans-serif)",
                    fontWeight: 700, fontSize: "1.05rem", letterSpacing: "-.02em", color: TR.c }}>{l.stage}</span>
                  <span style={{ fontSize: ".88rem", color: TR.dim, marginLeft: "1rem" }}>{l.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
      {/* platform modules */}
      <Reveal>
        <div style={{ padding: "1.6rem 20px 2rem", borderBottom: `1px solid ${TR.line}` }}>
          <Kicker label="The platform" color={TR.sig} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: "1.2rem" }}>
            {platforms.map(p => (
              <div key={p.id} style={{ background: TR.card, border: `1px solid ${TR.line}`,
                borderRadius: 8, padding: "12px 14px" }}>
                <p style={{ fontFamily: "monospace", fontSize: 9, color: TR.sig,
                  letterSpacing: ".12em", marginBottom: ".4rem" }}>{p.id}</p>
                <p style={{ fontFamily: "var(--font-bricolage,'Bricolage Grotesque',sans-serif)",
                  fontWeight: 700, fontSize: "1rem", color: TR.c, marginBottom: ".25rem" }}>{p.name}</p>
                <p style={{ fontSize: 11, color: TR.c45 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
      {/* anti-consultancy */}
      <Reveal>
        <div style={{ margin: "1.8rem 20px 0", padding: "1.4rem", background: TR.card,
          border: `1px solid ${TR.sig}22`, borderRadius: 12 }}>
          <Kicker label="Not a consultancy" color={TR.sig} />
          {[
            { n:"01", t:"No reports. A running system.", b:"We build it, install it and run the first service with you. You don't pay for recommendations you have to implement yourself." },
            { n:"02", t:"No day-rate.", b:"We price by outcome, not hours. If the system isn't live and working in 7 days, we keep going until it is — at no extra cost." },
            { n:"03", t:"You own it.", b:"We hand over the system, train your team, and stay on call. You're never dependent on us to keep it working." },
          ].map((p, i) => (
            <div key={i} style={{ borderTop: i > 0 ? `1px solid ${TR.line}` : "none", paddingTop: i > 0 ? "1rem" : ".7rem", marginTop: i > 0 ? "1rem" : 0 }}>
              <p style={{ fontFamily: "monospace", fontSize: 10, color: TR.sig, marginBottom: ".3rem" }}>{p.n} — {p.t}</p>
              <p style={{ fontSize: ".88rem", color: TR.dim, lineHeight: 1.55 }}>{p.b}</p>
            </div>
          ))}
        </div>
      </Reveal>
      <div style={{ padding: "1.6rem 20px 0" }}><Kicker label="How it happens" color={TR.sig} /></div>
      {phases.map((p, i) => (
        <Reveal key={i}>
          <div style={{ padding: "1.8rem 20px 2rem", borderTop: `1px solid ${TR.line}` }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: ".6rem", marginBottom: ".9rem" }}>
              <span style={{ fontFamily: "monospace", fontSize: 11, color: TR.sig }}>{p.n}</span>
              <span style={{ fontFamily: "monospace", fontSize: 9, letterSpacing: ".16em",
                textTransform: "uppercase" as const, color: TR.c45 }}>{p.sp}</span>
            </div>
            <h2 style={{ fontFamily: "var(--font-bricolage,'Bricolage Grotesque',sans-serif)", fontWeight: 700,
              fontSize: "clamp(1.8rem,7vw,2.4rem)", lineHeight: 1.02, letterSpacing: "-.03em", color: TR.c, marginBottom: ".9rem" }}
              dangerouslySetInnerHTML={{ __html: p.h.replace(/<em>/g,
                `<em style="font-family:var(--font-instrument-serif,serif);font-style:italic;font-weight:400;color:${TR.sig}">`) }} />
            <p style={{ fontSize: ".92rem", color: TR.dim, lineHeight: 1.62, maxWidth: "52ch" }}>{p.cap}</p>
            <div style={{ display: "flex", alignItems: "baseline", gap: ".7rem",
              borderTop: `1px solid ${TR.line}`, marginTop: "1.2rem", paddingTop: "1rem" }}>
              <span style={{ fontFamily: "var(--font-bricolage,'Bricolage Grotesque',sans-serif)", fontWeight: 800,
                fontSize: "clamp(2rem,7vw,2.6rem)", color: TR.sig, letterSpacing: "-.04em", lineHeight: .85 }}>{p.stat}</span>
              <span style={{ fontSize: 11, color: TR.c45, lineHeight: 1.4, maxWidth: "28ch" }}>{p.statD}</span>
            </div>
          </div>
        </Reveal>
      ))}
      <FAQ items={faqs} bg={TR.bg} border={TR.line} head={TR.c} body={TR.dim} />
      <CTA big={<>Live in a week.<br /><CtaItalic>No consultants.</CtaItalic></>}
        sub="We redesign the full guest journey, implement the tech, train your team and go live — in 7 days. No day-rates, no recommendations you have to implement yourself."
        btn="Start the transformation" onClose={onClose} />
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
        <Kicker label="Reputation" color={RE.hot} />
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
// BRAND CONTENT  (light theme)
// ────────────────────────────────────────────────────────────────────────────
const BR = { bg:"#ECE7DE", card:"#F5F1EA", ox:"#8A2233", oxd:"#6E1926",
  ink:"#16120F", dim:"rgba(22,18,15,.7)", c45:"rgba(22,18,15,.46)", line:"rgba(22,18,15,.13)" };

const SVG_BR_PURPOSE = `<svg viewBox="0 0 400 240" style="position:absolute;inset:0;width:100%;height:100%;overflow:visible">
  <circle fill="none" stroke="rgba(22,18,15,.16)" stroke-width="1.25" class="draw" style="--L:440" cx="200" cy="118" r="70"/>
  <circle fill="none" stroke="rgba(22,18,15,.1)" stroke-width="1.25" class="draw" style="--L:660;animation-delay:.2s" cx="200" cy="118" r="104"/>
  <circle fill="${BR.ox}" class="pop" cx="200" cy="118" r="26" style="animation-delay:.3s"/>
  <text font-family="monospace" font-size="12" font-weight="700" fill="${BR.card}" text-anchor="middle" class="pop" x="200" y="122" style="animation-delay:.45s">why</text>
  <circle fill="rgba(22,18,15,.15)" class="pop" cx="200" cy="48" r="6" style="animation-delay:.7s"/>
  <circle fill="rgba(22,18,15,.15)" class="pop" cx="270" cy="118" r="6" style="animation-delay:.8s"/>
  <circle fill="rgba(22,18,15,.15)" class="pop" cx="200" cy="188" r="6" style="animation-delay:.9s"/>
  <circle fill="rgba(22,18,15,.15)" class="pop" cx="130" cy="118" r="6" style="animation-delay:1s"/>
  <text font-family="monospace" font-size="10.5" fill="rgba(22,18,15,.45)" text-anchor="middle" class="up" x="200" y="228" style="animation-delay:1.1s">everything is built on it</text>
</svg>`;

const SVG_BR_POSITIONING = `<svg viewBox="0 0 400 216" style="position:absolute;inset:0;width:100%;height:100%;overflow:visible">
  <line stroke="rgba(22,18,15,.16)" stroke-width="1.25" x1="42" y1="196" x2="360" y2="196"/>
  <line stroke="rgba(22,18,15,.16)" stroke-width="1.25" x1="42" y1="36" x2="42" y2="196"/>
  <circle fill="rgba(22,18,15,.15)" class="pop" cx="82" cy="168" r="6" style="animation-delay:.2s"/>
  <circle fill="rgba(22,18,15,.15)" class="pop" cx="112" cy="180" r="6" style="animation-delay:.28s"/>
  <circle fill="rgba(22,18,15,.15)" class="pop" cx="96" cy="150" r="6" style="animation-delay:.36s"/>
  <circle fill="rgba(22,18,15,.15)" class="pop" cx="132" cy="166" r="6" style="animation-delay:.44s"/>
  <circle fill="rgba(22,18,15,.15)" class="pop" cx="72" cy="150" r="6" style="animation-delay:.52s"/>
  <text font-family="monospace" font-size="10" fill="rgba(22,18,15,.45)" text-anchor="middle" class="up" x="100" y="192" style="animation-delay:.65s">everyone else</text>
  <circle fill="none" stroke="${BR.ox}" stroke-width="1.5" class="pop" cx="300" cy="80" r="30" style="animation-delay:.95s"/>
  <circle fill="${BR.ox}" class="pop" cx="300" cy="80" r="12" style="animation-delay:.9s"/>
  <text font-family="monospace" font-size="11" font-weight="700" fill="${BR.ox}" text-anchor="middle" class="up" x="300" y="128" style="animation-delay:1.1s">you, alone</text>
</svg>`;

const SVG_BR_PERSONALITY = `<svg viewBox="0 0 400 222" style="position:absolute;inset:0;width:100%;height:100%;overflow:visible">
  ${[["post",54], ["sign",164], ["reply",274]].map(([t, x], i) => `
    <rect fill="none" stroke="rgba(22,18,15,.14)" stroke-width="1.25" rx="8" class="up" x="${x}" y="54" width="82" height="104" style="animation-delay:${i * 0.15}s"/>
    <circle fill="${BR.ox}" class="pop" cx="${(x as number)+41}" cy="92" r="15" style="animation-delay:${0.5 + i * 0.15}s"/>
    <rect fill="rgba(22,18,15,.12)" rx="3" class="up" x="${(x as number)+16}" y="120" width="50" height="6" style="animation-delay:${0.6 + i * 0.15}s"/>
    <rect fill="rgba(22,18,15,.08)" rx="3" class="up" x="${(x as number)+16}" y="132" width="34" height="6" style="animation-delay:${0.65 + i * 0.15}s"/>
    <text font-family="monospace" font-size="10" fill="rgba(22,18,15,.45)" text-anchor="middle" class="up" x="${(x as number)+41}" y="180" style="animation-delay:${0.7 + i * 0.15}s">${t}</text>
  `).join("")}
  <text font-family="monospace" font-size="10.5" font-weight="700" fill="${BR.ox}" text-anchor="middle" class="up" x="200" y="210" style="animation-delay:1.05s">recognisable anywhere</text>
</svg>`;

const SVG_BR_PROMISE = `<svg viewBox="0 0 400 210" style="position:absolute;inset:0;width:100%;height:100%;overflow:visible">
  <rect fill="none" stroke="rgba(22,18,15,.14)" stroke-width="1.25" rx="10" class="up" x="54" y="56" width="118" height="118" style="animation-delay:.2s"/>
  <text font-family="monospace" font-size="22" fill="rgba(22,18,15,.35)" text-anchor="middle" class="up" x="113" y="126" style="animation-delay:.3s">€</text>
  <text font-family="monospace" font-size="10.5" fill="rgba(22,18,15,.45)" text-anchor="middle" class="up" x="113" y="196" style="animation-delay:.4s">cheaper</text>
  <rect fill="${BR.ox}" rx="10" class="pop" x="228" y="56" width="118" height="118" style="animation-delay:.6s"/>
  <text font-family="monospace" font-size="22" font-weight="700" fill="${BR.card}" text-anchor="middle" class="pop" x="287" y="130" style="animation-delay:.75s">€€</text>
  <circle fill="none" stroke="${BR.card}" stroke-width="2" class="pop" cx="336" cy="66" r="14" style="animation-delay:1s"/>
  <path fill="none" stroke="${BR.card}" stroke-width="2.4" stroke-linecap="round" class="draw" style="--L:22;animation-delay:1.2s" d="M328,66 l5,6 l10,-12"/>
  <text font-family="monospace" font-size="10.5" fill="${BR.ox}" text-anchor="middle" class="up" x="287" y="196" style="animation-delay:1.05s">still chosen</text>
</svg>`;

const SVG_BR_SYSTEM = `<svg viewBox="0 0 400 220" style="position:absolute;inset:0;width:100%;height:100%;overflow:visible">
  <rect fill="${BR.ox}" rx="7" class="pop" x="150" y="28" width="100" height="34" style="animation-delay:.2s"/>
  <text font-family="monospace" font-size="11" font-weight="700" fill="${BR.card}" text-anchor="middle" class="pop" x="200" y="50" style="animation-delay:.35s">foundation</text>
  ${[64,148,232,316].map((x, i) => `
    <line stroke="rgba(22,18,15,.12)" stroke-width="1.25" class="draw" style="--L:100;animation-delay:${0.5 + i * 0.1}s" x1="200" y1="62" x2="${x+26}" y2="118"/>
    <rect fill="none" stroke="rgba(22,18,15,.14)" stroke-width="1.25" rx="8" class="up" x="${x}" y="118" width="52" height="66" style="animation-delay:${0.7 + i * 0.1}s"/>
    <circle fill="${BR.ox}" class="pop" cx="${x+26}" cy="142" r="9" style="animation-delay:${0.9 + i * 0.1}s"/>
    <rect fill="rgba(22,18,15,.1)" rx="2" class="up" x="${x+11}" y="160" width="30" height="5" style="animation-delay:${1 + i * 0.1}s"/>
  `).join("")}
  <text font-family="monospace" font-size="10.5" fill="rgba(22,18,15,.45)" text-anchor="middle" class="up" x="200" y="208" style="animation-delay:1.2s">the same everywhere</text>
</svg>`;

function BrandContent({ onClose }: { onClose: () => void }) {
  const phases = [
    { n:"01", sp:"Purpose", h:"What you actually <em>stand for</em>.", out:"A belief, not a slogan.",
      who:"Brand strategists",
      cap:"We find the real reason your business exists beyond making money — the belief a certain kind of customer will choose you for. It's not a tagline; it's the thing everything else is built on.",
      stat:"64%", statD:"say shared values are the main reason they choose one brand over another",
      svg: SVG_BR_PURPOSE },
    { n:"02", sp:"Positioning", h:"The one place you <em>own</em>.", out:"Where you win by default.",
      who:"Brand strategists",
      cap:"Most businesses fight in the same crowded spot and end up competing on price. We find the space that's yours alone — the promise no competitor is making — so you're not the better choice, you're the only one.",
      stat:"1", statD:"position no competitor can take from you — the end of competing on price",
      svg: SVG_BR_POSITIONING },
    { n:"03", sp:"Naming & voice", h:"How you <em>sound and feel</em>.", out:"Recognisable in a dark room.",
      who:"Naming & voice",
      cap:"A name, a voice and a look that are unmistakably yours — the same on the sign, the post and the reply. Consistency is what turns a business into something people recognise before they read the name.",
      stat:"80%", statD:"how much a signature colour can lift brand recognition",
      svg: SVG_BR_PERSONALITY },
    { n:"04", sp:"Promise", h:"Why they pick you over <em>cheaper</em>.", out:"The reason to pay more.",
      who:"Brand strategists",
      cap:"A brand's real job is to make price the second question. We build the promise — what a customer can always count on from you — so people choose you knowing you cost more, and feel right about it.",
      stat:"46%", statD:"of people will pay more to buy from a brand they trust",
      svg: SVG_BR_PROMISE },
    { n:"05", sp:"The system", h:"Then it shows up the <em>same</em>.", out:"Everywhere, without slipping.",
      who:"Designers → The Studio",
      cap:"The foundation becomes a system — the rules, the assets, the guardrails — so every menu, ad, post and shopfront looks and sounds like the same business. Consistency alone is worth real money.",
      stat:"23%", statD:"how much consistent brand presentation can lift revenue",
      svg: SVG_BR_SYSTEM },
  ];
  const clusters = [
    { title:"Strategy", items:["Brand strategy","Positioning","Naming","Brand architecture","Messaging","Tone of voice"] },
    { title:"Identity", items:["Logo & marks","Visual identity system","Typography","Colour system","Brand guidelines","Brand book"] },
    { title:"Content & film", items:["Photography","Video & film","Motion graphics","Animation","Illustration"] },
    { title:"Digital", items:["Website design","UI / UX","Product design","Social templates","Design systems"] },
    { title:"Campaign", items:["Campaign concepts","Ad creative","Copywriting","Taglines","Scripts"] },
    { title:"Physical", items:["Print & editorial","Packaging","Signage","Environmental","Menus"] },
  ];
  const values = [
    { t:"You can charge more — and they pay it", b:"Price stops being the first question. When people trust and recognise you, they choose you knowing you cost more, and feel right about it.", tag:"You set the price" },
    { t:"You stop competing on price", b:"With a position that's yours alone, the right customer has no real alternative — so you win without discounting your way there.", tag:"No race to the bottom" },
    { t:"You're remembered — and recommended", b:"People recall you before they even search, and tell others. 88% trust a word from someone they know over any ad you could buy.", tag:"88% trust word of mouth" },
    { t:"Every marketing euro works harder", b:"A consistent brand makes every ad, post and page convert better — the creative alone drives about half of what an ad returns.", tag:"~49% of ad return" },
    { t:"The business becomes worth more", b:"A brand is an asset on the business, not a cost — it's what a buyer, investor or partner pays a premium for when it matters.", tag:"An asset, not a cost" },
  ];
  const faqs = [
    { q:"Isn't a brand just a logo?", a:"No. A logo is one asset. A brand is the reason a customer chooses you over someone cheaper — what you stand for, the space you own, and the promise people remember." },
    { q:"How is this different from Creative?", a:"Creative makes a business look worth more — the videos, identity and assets. Brand decides what it's worth in the first place — the strategy and foundation that all the creative is built on. Both live at OARC; they're stronger together." },
    { q:"What does a brand foundation actually change?", a:"It lets you stop competing on price, be remembered, charge more, and make every piece of creative consistent and stronger." },
    { q:"Are you an AI company?", a:"No. Real brand strategists and designers build your foundation. A small tool that checks brand consistency is included as a bonus — not the main thing." },
  ];
  return (
    <div style={{ background: BR.bg, color: BR.ink }}>
      <div style={{ padding: "1.8rem 20px 2.2rem", borderBottom: `1px solid ${BR.line}` }}>
        <Kicker label="Brand" color={BR.ox} />
        <h1 style={{ fontFamily: "var(--font-bricolage,'Bricolage Grotesque',sans-serif)", fontWeight: 800,
          fontSize: "clamp(2.4rem,10vw,3.8rem)", lineHeight: .9, letterSpacing: "-.05em",
          textTransform: "uppercase", color: BR.ink, marginBottom: "1rem" }}>
          Everything they see,<br />
          <em style={{ fontFamily: "var(--font-instrument-serif,'Instrument Serif',serif)",
            fontStyle: "italic", fontWeight: 400, textTransform: "none", letterSpacing: 0,
            color: BR.ox, fontSize: "1.04em" }}>hear and feel.</em>
        </h1>
        <p style={{ fontSize: ".98rem", color: BR.dim, lineHeight: 1.6, maxWidth: "44ch" }}>
          Every image, film, word, screen, sign and space that makes someone feel something
          about your business — and choose you. Strategy, identity, content, campaigns, the lot.{" "}
          <strong style={{ color: BR.ink }}>One team for the entire creative world of your company.</strong>
        </p>
        <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 6, marginTop: "1.4rem" }}>
          {["Brand strategists","Naming & voice","Designers","The Studio"].map(t => (
            <span key={t} style={{ border: `1px solid ${BR.line}`, padding: "6px 10px",
              fontSize: 11, color: BR.dim, borderRadius: 2, background: BR.card }}>{t}</span>
          ))}
        </div>
      </div>
      {/* 5 strategy phases with vizzes */}
      <div style={{ padding: "1.6rem 20px .4rem" }}>
        <p style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase" as const,
          color: BR.c45, display: "flex", alignItems: "center", gap: ".8rem" }}>
          The strategy underneath it all
          <span style={{ flex: 1, height: 1, background: BR.line, display: "inline-block" }} />
        </p>
      </div>
      {phases.map((p, i) => (
        <Reveal key={i}>
          <div style={{ padding: "1.8rem 20px 2rem", borderTop: `1px solid ${BR.line}` }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: ".6rem", marginBottom: ".9rem" }}>
              <span style={{ fontFamily: "var(--font-bricolage,'Bricolage Grotesque',sans-serif)",
                fontStyle: "italic", fontSize: "1.15rem", color: BR.ox }}>{p.n}</span>
              <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: ".18em",
                textTransform: "uppercase" as const, color: BR.c45 }}>{p.sp}</span>
            </div>
            <h2 style={{ fontFamily: "var(--font-bricolage,'Bricolage Grotesque',sans-serif)", fontWeight: 700,
              fontSize: "clamp(1.8rem,7vw,2.4rem)", lineHeight: 1.02, letterSpacing: "-.02em", color: BR.ink, marginBottom: ".5rem" }}
              dangerouslySetInnerHTML={{ __html: p.h.replace(/<em>/g,
                `<em style="font-family:var(--font-instrument-serif,serif);font-style:italic;font-weight:500;color:${BR.ox}">`) }} />
            <p style={{ fontFamily: "var(--font-bricolage,'Bricolage Grotesque',sans-serif)",
              fontStyle: "italic", fontSize: "clamp(1.1rem,4vw,1.35rem)", color: BR.ink,
              marginBottom: ".7rem", lineHeight: 1.2 }}>{p.out}</p>
            <VizBox svg={p.svg} bg={BR.card} brd={BR.line} dot="rgba(22,18,15,.04)" />
            <p style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: ".02em",
              color: BR.ox, marginTop: ".8rem", marginBottom: ".6rem" }}>— {p.who}</p>
            <p style={{ fontSize: ".92rem", color: BR.dim, lineHeight: 1.62, maxWidth: "52ch", marginBottom: ".8rem" }}>{p.cap}</p>
            <div style={{ display: "flex", alignItems: "baseline", gap: ".7rem",
              paddingTop: "1rem", borderTop: `1px solid ${BR.line}` }}>
              <span style={{ fontFamily: "var(--font-bricolage,'Bricolage Grotesque',sans-serif)",
                fontWeight: 700, fontSize: "clamp(2rem,7vw,2.6rem)", letterSpacing: "-.02em",
                lineHeight: .86, color: BR.ink }}>{p.stat}</span>
              <span style={{ fontSize: 11.5, color: BR.c45, lineHeight: 1.4, maxWidth: "26ch" }}>{p.statD}</span>
            </div>
          </div>
        </Reveal>
      ))}
      {/* what it's worth */}
      <div style={{ padding: ".4rem 20px 1rem" }}>
        <p style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase" as const,
          color: BR.c45, display: "flex", alignItems: "center", gap: ".8rem" }}>
          What it's worth to you
          <span style={{ flex: 1, height: 1, background: BR.line, display: "inline-block" }} />
        </p>
        {values.map((v, i) => (
          <Reveal key={i}>
            <div style={{ display: "flex", gap: ".9rem", padding: "1.1rem 0",
              borderTop: i > 0 ? `1px solid ${BR.line}` : "none" }}>
              <span style={{ fontFamily: "var(--font-instrument-serif,'Instrument Serif',serif)",
                fontStyle: "italic", color: BR.ox, fontSize: "1rem", flexShrink: 0,
                width: "1.5rem", lineHeight: 1.5 }}>0{i+1}</span>
              <div>
                <h4 style={{ fontFamily: "var(--font-bricolage,'Bricolage Grotesque',sans-serif)",
                  fontWeight: 700, fontSize: "1.22rem", letterSpacing: "-.01em", color: BR.ink, marginBottom: ".35rem" }}>
                  {v.t}
                </h4>
                <p style={{ fontSize: ".9rem", color: BR.dim, lineHeight: 1.55, marginBottom: ".55rem" }}>{v.b}</p>
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".06em",
                  textTransform: "uppercase" as const, color: BR.ox,
                  border: `1px solid rgba(138,34,51,.3)`, padding: "4px 9px", borderRadius: 2 }}>{v.tag}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      {/* breadth clusters */}
      <div style={{ padding: ".6rem 20px 1.2rem" }}>
        <p style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase" as const,
          color: BR.c45, display: "flex", alignItems: "center", gap: ".8rem", marginBottom: "1rem" }}>
          Then we make all of it — one team
          <span style={{ flex: 1, height: 1, background: BR.line, display: "inline-block" }} />
        </p>
        {clusters.map((c, ci) => (
          <Reveal key={ci}>
            <div style={{ padding: "1.15rem 0", borderTop: ci > 0 ? `1px solid ${BR.line}` : "none" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: ".55rem", marginBottom: ".75rem" }}>
                <span style={{ fontFamily: "var(--font-instrument-serif,'Instrument Serif',serif)",
                  fontStyle: "italic", fontWeight: 500, fontSize: "1.05rem", color: BR.c45 }}>0{ci+1}</span>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".14em",
                  textTransform: "uppercase" as const, color: BR.ox }}>{c.title}</span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 6 }}>
                {c.items.map(item => (
                  <span key={item} style={{ border: `1px solid ${BR.line}`, background: BR.card,
                    padding: "6px 10px", fontSize: 11.5, color: BR.dim, borderRadius: 2 }}>{item}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div style={{ margin: "0 20px 1.8rem", padding: "1.3rem 1.4rem",
          border: `1px dashed ${BR.line}`, borderRadius: 10, background: BR.card }}>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".16em",
            textTransform: "uppercase" as const, color: BR.c45, marginBottom: ".7rem" }}>Bonus, included</p>
          <h4 style={{ fontFamily: "var(--font-instrument-serif,'Instrument Serif',serif)",
            fontStyle: "italic", fontWeight: 500, fontSize: "1.3rem", color: BR.ink, marginBottom: ".5rem" }}>
            Oh — and a little tool, on us.
          </h4>
          <p style={{ fontSize: ".88rem", color: BR.dim, lineHeight: 1.55 }}>
            A small tool that scans where your brand is showing up inconsistent — an old logo here,
            a wrong colour there — so nothing slips.{" "}
            <strong style={{ color: BR.ink }}>Nice to have, not the main event.</strong>
          </p>
        </div>
      </Reveal>
      <FAQ items={faqs} bg={BR.bg} border={BR.line} head={BR.ink} body={BR.dim} light />
      <CTA big={<>The whole way your business<br /><CtaItalic>looks, sounds and feels.</CtaItalic></>}
        sub="Strategy, identity, every craft — one team, one standard, everywhere anyone meets your business."
        btn="Build our creative world" onClose={onClose} light />
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
        <Kicker label="Enquiries" />
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
        <Kicker label="Products" color={PRD.sig} />
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
      <Kicker label={dept} color={c.sig} />
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
  Growth: T.noir,  Sales: T.noir,  Media: T.noir,  Social: T.noir,
  Clarity: "#0B0D12",  "AI Staff": "#060607",  Creative: "#100E0A",
  Operations: "#F4F1EA",  Automation: "#0A0C0F",  Transformation: "#050A10",
  Reputation: "#F5F1E8",  Brand: "#ECE7DE",
  Enquiries: T.noir,  Ship: "#EEF1F4",  Products: "#050A10",  Compare: T.noir,
};
const LIGHT_DEPTS = new Set(["Operations","Reputation","Brand","Ship"]);

// ── Main modal ────────────────────────────────────────────────────────────────
interface DepartmentDetailModalProps {
  dept: string | null;
  onClose: () => void;
}

export default function DepartmentDetailModal({ dept, onClose }: DepartmentDetailModalProps) {
  const [mounted,  setMounted]  = useState(false);
  const [visible,  setVisible]  = useState(false);

  useEffect(() => {
    if (!dept) { setMounted(false); return; }
    setMounted(true);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // Two rAF ticks to ensure DOM is painted before animating in
    const id1 = requestAnimationFrame(() =>
      requestAnimationFrame(() => setVisible(true))
    );
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") handleClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      cancelAnimationFrame(id1);
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dept]);

  const handleClose = useCallback(() => {
    setVisible(false);
    setTimeout(() => { setMounted(false); onClose(); }, 420);
  }, [onClose]);

  if (!dept || !mounted) return null;

  const ContentComponent = CONTENT_MAP[dept];

  return createPortal(
    <>
      {/* backdrop */}
      <div onClick={handleClose} style={{
        position:"fixed", inset:0, zIndex:8998,
        background:"rgba(14,13,12,.6)",
        opacity: visible ? 1 : 0,
        transition:`opacity 420ms ${T.e}`,
      }} />
      {/* panel */}
      <div style={{
        position:"fixed", left:0, right:0, bottom:0,
        height:"94dvh", zIndex:8999,
        display:"flex", flexDirection:"column" as const,
        borderRadius:"18px 18px 0 0",
        overflow:"hidden",
        transform: visible ? "translateY(0)" : "translateY(100%)",
        transition:`transform 480ms ${T.e}`,
        boxShadow:"0 -20px 80px rgba(0,0,0,.6)",
      }}>
        {/* sticky top bar */}
        {(() => {
          const hdrBg   = DEPT_HDR_BG[dept] ?? T.noir;
          const isLight = LIGHT_DEPTS.has(dept);
          const fgCol   = isLight ? "#16120F" : T.ivory;
          const dotCol  = isLight ? "#8A2233" : T.scar;
          const bdrCol  = isLight ? "rgba(22,18,15,.13)" : T.line;
          return (
            <div style={{
              display:"flex", justifyContent:"space-between", alignItems:"center",
              padding:"14px 20px", paddingTop:"max(14px, env(safe-area-inset-top))",
              background: hdrBg,
              backdropFilter:"blur(14px)", flexShrink:0,
              borderBottom:`1px solid ${bdrCol}`,
            }}>
              <span style={{
                fontFamily:"var(--font-bricolage,'Bricolage Grotesque',sans-serif)",
                fontWeight:800, fontSize:13, letterSpacing:"-.02em", color: fgCol,
              }}>
                OARC <span style={{ color:dotCol }}>·</span> {dept}
              </span>
              <button onClick={handleClose} aria-label="Close" style={{
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
