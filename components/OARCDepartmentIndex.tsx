"use client";

import { useEffect, useRef, useState } from "react";
import DepartmentDetailModal from "./DepartmentDetailModal";

// ─── types ────────────────────────────────────────────────────────────────────
const TAU = Math.PI * 2;
function easeOut(t: number) { return 1 - (1 - t) ** 3; }

interface World {
  bg: string; fg: string; ac: string;
  dim: string; gA: string; gB: string;
  st: (a: number) => string;
}
function mkWorld(bg: string, fg: string, ac: string): World {
  const fRGB = (h: string) => { const n = parseInt(h.slice(1), 16); return `${n >> 16},${(n >> 8) & 255},${n & 255}`; };
  const f = fRGB(fg), b = fRGB(bg);
  return {
    bg, fg, ac,
    dim: `rgba(${f},.55)`,
    gA: `rgba(${b},.62)`,
    gB: `rgba(${b},.95)`,
    st: (a: number) => `rgba(${f},${a})`,
  };
}

// ─── stage worlds — 4 distinct canvases ──────────────────────────────────────
const W_NOIR  = mkWorld("#0E0D0C", "#F2EFE9", "#F2A9B4"); // money — rose tint on noir
const W_PAPER = mkWorld("#F2EFE9", "#0E0D0C", "#C8102E"); // studio — crimson ink on ivory
const W_GRAPH = mkWorld("#0B0C0D", "#F5F5F3", "#F5F5F3"); // machine — surgical white
const W_BONE  = mkWorld("#F2EFE9", "#0C1F13", "#0E5A3A"); // media/brand — racing on bone

// ─── department data — 16 cards ───────────────────────────────────────────────
interface Dept {
  h: string;  // "Sentence with |hot word|."
  w: "C"|"I"|"B"|"U"|"V"|"S"|"O"; // costume letter
  ac: string; // tile accent (rest)
  acT: string;// tile accent tint (on ink wash)
  wd: World;  // stage world
  m: string;  // canvas mark key
  k: string;  // modal / dept key
  u: string;  // chip href
  c: string[];// chips
}

const CRIM = "#C8102E", RACE = "#0E5A3A", INK = "#0E0D0C";
const DATA: Dept[] = [
  { h:"Bring me more |customers.|",    w:"V", ac:INK,  acT:"#F2EFE9", wd:W_NOIR,  m:"inflow",  k:"Growth",
    u:"/services/growth",    c:["They find you","You find them","They like you","They pick you","You stay close","They come back"] },
  { h:"Pick your |employee.|",          w:"O", ac:CRIM, acT:"#F2A9B4", wd:W_GRAPH, m:"orbit",   k:"AI Staff",
    u:"/services/ai-staff",  c:["Sales agent","Bookings host","Missed-call return","Review capture","Support agent","Quotes & invoices","Win-back","Nightly watch"] },
  { h:"Make us worth |more.|",          w:"I", ac:INK,  acT:"#0E5A3A", wd:W_PAPER, m:"ascend",  k:"Creative",
    u:"/services/creative",  c:["Big idea & campaigns","Social & content studio","Brand & identity","Film & motion","Ad & performance creative","AI creative engine"] },
  { h:"Make me |famous.|",              w:"I", ac:CRIM, acT:"#F2A9B4", wd:W_PAPER, m:"reach",   k:"Reputation",
    u:"/services/reputation",c:["Reels & founder videos","Press & news features","Creator collabs","Podcast features","Shared everywhere"] },
  { h:"Close more |sales.|",            w:"U", ac:CRIM, acT:"#F2A9B4", wd:W_NOIR,  m:"bolt",    k:"Sales",
    u:"/services/sales",     c:["Speed-to-lead","Pipeline & offer strategy","Founder story & sales reels","Trust & proof","Instant qualify & book","Team training"] },
  { h:"Turn enquiries into |money.|",   w:"V", ac:CRIM, acT:"#F2A9B4", wd:W_NOIR,  m:"rail",    k:"Enquiries",
    u:"/services/automation",c:["Answered in 00:04","Qualified & booked","Chased to paid","WhatsApp automation","CRM & pipeline","Loyalty & win-back"] },
  { h:"Social, our |powerhouse.|",      w:"B", ac:CRIM, acT:"#F2A9B4", wd:W_PAPER, m:"pulse",   k:"Social",
    u:"/services/social",    c:["Strategy — where they scroll","Storytelling","Video & editing","Editors & the craft","Native to every platform","Community that converts"] },
  { h:"Ad spend that |pays.|",          w:"C", ac:RACE, acT:"#8FD6AE", wd:W_BONE,  m:"resolve", k:"Media",
    u:"/services/media",     c:["Meta & Google","TikTok & YouTube","Out-of-home","100% spend → platforms","Flighted testing","Return in euros"] },
  { h:"Creative and |brand.|",          w:"V", ac:RACE, acT:"#8FD6AE", wd:W_BONE,  m:"markO",   k:"Brand",
    u:"/services/brand",     c:["Brand strategy & positioning","Naming & voice","Identity system & guidelines","Photo, film & 3D","Web & product design","Campaigns & copy","Packaging, signage, merch"] },
  { h:"Take |work| off my plate.",      w:"S", ac:CRIM, acT:"#F2A9B4", wd:W_GRAPH, m:"lift",    k:"Operations",
    u:"/services/operations",c:["≈13 hrs back weekly","DMs answered","Bookings confirmed","Invoices chased","Reminders sent","Reports written"] },
  { h:"Tell me what's |working.|",      w:"C", ac:RACE, acT:"#8FD6AE", wd:W_GRAPH, m:"flip",    k:"Clarity",
    u:"/services/clarity",   c:["Money metrics, not vanity","Every euro traced","Winners vs losers","Spend→Click→Lead→Sale","The one move"] },
  { h:"The business runs |itself.|",    w:"B", ac:INK,  acT:"#F2EFE9", wd:W_GRAPH, m:"loop",    k:"Automation",
    u:"/services/automation",c:["Marketing automations","Sales & CRM flows","Bookings & reminders","Invoicing & payments","Stock & ops triggers","Dashboards & reports"] },
  { h:"Change how it |runs.|",          w:"U", ac:RACE, acT:"#8FD6AE", wd:W_GRAPH, m:"flip2",   k:"Transformation",
    u:"/services/transformation",c:["Full guest lifecycle","QR ordering — MENU","Kitchen display","Self-order KIOSK","Owner dashboard — DESK","Reviews & loyalty — TABLE","POS bridge"] },
  { h:"We |ship.|",                     w:"V", ac:INK,  acT:"#F2EFE9", wd:W_GRAPH, m:"stack",   k:"Ship",
    u:"/h360",               c:["Working software, week one","QR ordering","Kitchen display","Self-order kiosk","Owner dashboard","You own the code"] },
  { h:"We don't |advise|. We build.",   w:"S", ac:CRIM, acT:"#F2A9B4", wd:W_NOIR,  m:"shelf",   k:"Products",
    u:"/h360",               c:["H360 OS — 4 apps","Lucky Table — 5★","AI Workforce — 00:04","Led by people you can call","One number per case"] },
  { h:"Paper vs |production.|",         w:"I", ac:CRIM, acT:"#F2A9B4", wd:W_NOIR,  m:"scales",  k:"Compare",
    u:"/why-oarc",           c:["Own platform in production","Metric-proven cases","AI staff deployed","Founder-led","You own the code"] },
];

// ─── scoped CSS ───────────────────────────────────────────────────────────────
const CSS = `
/* defaults for stage CSS vars — overridden per-card by JS */
.oarc-di{
  --sBg:#0E0D0C;--sFg:#F2EFE9;--sAc:#F2A9B4;--sDim:rgba(242,239,233,.55);
  --sgA:rgba(14,13,12,.62);--sgB:rgba(14,13,12,.95);
}
.oarc-di{
  background:#F2EFE9;color:#0E0D0C;
  font-family:var(--font-bricolage,'Bricolage Grotesque',sans-serif);
  -webkit-font-smoothing:antialiased;overflow-x:clip;position:relative;-webkit-tap-highlight-color:transparent;
  touch-action:pan-y;
  --e:cubic-bezier(.16,1,.3,1);
  --line:rgba(14,13,12,.10);--crim:#C8102E;--race:#0E5A3A;
}
/* grain */
.oarc-di::before{content:'';position:absolute;inset:-120%;z-index:0;pointer-events:none;
  opacity:.025;mix-blend-mode:multiply;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")}
/* vignette */
.oarc-di::after{content:'';position:absolute;inset:0;z-index:0;pointer-events:none;
  background:radial-gradient(ellipse 90% 70% at 50% 50%,transparent 55%,rgba(14,13,12,.06) 100%)}

@media(hover:hover) and (pointer:fine){.oarc-di,.oarc-di *{cursor:none}}

/* 5-column, 5-row grid */
.di-frame{display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:repeat(5,minmax(110px,1fr));
  gap:11px;min-height:100vh;padding:11px;position:relative;z-index:2;touch-action:pan-y}

/* entrance */
.di-cell,.di-mat,.di-stage{opacity:0;transform:translateY(16px);
  transition:opacity 800ms var(--e),transform 900ms var(--e)}
.di-frame.di-up .di-cell,.di-frame.di-up .di-mat,.di-frame.di-up .di-stage{opacity:1;transform:none}
.di-frame.di-up .di-cell:nth-child(1){transition-delay:0ms}
.di-frame.di-up .di-cell:nth-child(2){transition-delay:55ms}
.di-frame.di-up .di-cell:nth-child(3){transition-delay:110ms}
.di-frame.di-up .di-cell:nth-child(4){transition-delay:165ms}
.di-frame.di-up .di-cell:nth-child(5){transition-delay:220ms}
.di-frame.di-up .di-stage{transition-delay:90ms}
.di-frame.di-up .di-mat{transition-delay:300ms}

/* ── tiles ── */
.di-cell{background:#F2EFE9;padding:1rem 1.05rem;cursor:pointer;display:flex;flex-direction:column;-webkit-tap-highlight-color:transparent;user-select:none;
  justify-content:space-between;position:relative;overflow:hidden;border:1px solid var(--line);
  transition:background 460ms var(--e),color 460ms var(--e),border-color 460ms var(--e),
             opacity 800ms var(--e),transform 900ms var(--e)}
.di-wash{position:absolute;inset:0;background:#0E0D0C;transform:scaleY(0);transform-origin:bottom;
  opacity:0;transition:transform 540ms var(--e),opacity 540ms var(--e)}
.di-cell.di-from-top .di-wash{transform-origin:top}
.di-cell.di-on .di-wash{transform:scaleY(1);opacity:1}
.di-cell.di-on{color:#F2EFE9;border-color:#0E0D0C}
.di-cell:focus-visible{outline:2px solid var(--crim);outline-offset:2px}
.di-cell>.di-nm{position:relative;z-index:2}

/* ── tile name ── */
.di-nm{font-family:var(--font-bricolage,'Bricolage Grotesque',sans-serif);font-weight:800;
  font-size:clamp(1.44rem,2.9vw,2.3rem);line-height:1.0;letter-spacing:-.02em;margin-top:auto;
  transition:transform 580ms var(--e)}
.di-cell.di-on .di-nm{transform:translateY(-2px)}
.di-nm em{font-style:normal;display:inline-block;position:relative;
  transition:transform 460ms var(--e),color 440ms var(--e),box-shadow 440ms var(--e),background 440ms var(--e)}
.di-cell.di-on .di-nm em{animation:di-pop 580ms var(--e)}
@keyframes di-pop{0%{transform:scale(.88)}55%{transform:scale(1.07)}100%{transform:scale(1)}}

/* ── costume system — every mark means something ── */
/* C: colour — the word lights up */
em.di-wC{color:var(--ac)}
.di-cell.di-on em.di-wC{color:var(--acT)}
/* I: serif italic — worth, fame, production */
em.di-wI{font-family:var(--font-instrument-serif,'Instrument Serif',serif);font-style:italic;
  font-weight:400;letter-spacing:0;font-size:1.13em;color:var(--ac)}
.di-cell.di-on em.di-wI{color:var(--acT)}
/* B: box — the powerhouse, the self-contained machine */
em.di-wB{box-shadow:inset 0 0 0 2.5px var(--ac);padding:0 .12em;border-radius:4px}
.di-cell.di-on em.di-wB{box-shadow:inset 0 0 0 2.5px var(--acT)}
/* U: underline — the signature line, the racing track */
em.di-wU::after{content:'';position:absolute;left:0;right:0;bottom:.04em;height:.09em;
  background:var(--ac);transform:scaleX(0);transform-origin:left;transition:transform 580ms var(--e) .12s}
.di-frame.di-up em.di-wU::after{transform:scaleX(1)}
.di-cell.di-on em.di-wU::after{background:var(--acT)}
/* V: inverted bar — price tag, SHIPPED stamp */
em.di-wV{background:var(--ac);color:#F2EFE9;padding:.03em .14em;border-radius:4px}
.di-cell.di-on em.di-wV{background:var(--acT);color:#0E0D0C}
/* S: strikethrough — crossed off */
em.di-wS::after{content:'';position:absolute;left:-3%;right:-3%;top:50%;height:.09em;
  background:var(--ac);transform:rotate(-3deg) scaleX(0);transform-origin:left;
  transition:transform 540ms var(--e) .22s}
.di-frame.di-up em.di-wS::after{transform:rotate(-3deg) scaleX(1)}
.di-cell.di-on em.di-wS::after{background:var(--acT)}
/* O: circle — the pick */
em.di-wO svg{position:absolute;inset:-28% -14%;width:128%;height:156%;overflow:visible;pointer-events:none}
em.di-wO path{fill:none;stroke:var(--ac);stroke-width:.065em;stroke-linecap:round;
  stroke-dasharray:340;stroke-dashoffset:340;transition:stroke-dashoffset 900ms var(--e) .28s}
.di-frame.di-up em.di-wO path{stroke-dashoffset:0}
.di-cell.di-on em.di-wO path{stroke:var(--acT)}

/* ── mat tiles ── */
.di-mat{background:#0E0D0C;color:#F2EFE9;padding:1rem 1.05rem;display:flex;flex-direction:column;
  justify-content:flex-end;gap:.4rem}
.di-mat-big{font-family:var(--font-bricolage,'Bricolage Grotesque',sans-serif);font-weight:800;
  font-size:clamp(1rem,1.45vw,1.4rem);text-transform:uppercase;letter-spacing:-.03em;line-height:.95}
.di-mat-lbl{font-family:var(--font-space-mono,'Space Mono',monospace);font-size:9px;
  letter-spacing:.2em;text-transform:uppercase;color:var(--crim)}

/* ── stage (the main box) ── */
.di-stage{grid-column:2/5;grid-row:2/4;background:var(--sBg);color:var(--sFg);position:relative;
  overflow:hidden;display:flex;flex-direction:column;justify-content:flex-end;
  border-radius:9px;border:1px solid rgba(14,13,12,.1);
  padding:clamp(1.4rem,2.6vw,2.6rem);
  transition:background 680ms var(--e),color 680ms var(--e),
             opacity 800ms var(--e),transform 900ms var(--e)}
.di-stage canvas{position:absolute;inset:0;width:100%;height:100%;z-index:1;touch-action:none}
.di-stage::before{content:'';position:absolute;inset:0;z-index:2;pointer-events:none;
  background:linear-gradient(180deg,transparent 0%,transparent 48%,var(--sgA) 74%,var(--sgB) 100%);
  transition:opacity .5s}
.di-flash{position:absolute;inset:0;z-index:3;pointer-events:none;opacity:0;transition:opacity 60ms ease}

.di-layer{position:relative;z-index:5;will-change:transform}

/* stage headline */
.di-head{font-family:var(--font-bricolage,'Bricolage Grotesque',sans-serif);font-weight:800;
  font-size:clamp(2.5rem,6vw,5.6rem);line-height:.86;letter-spacing:-.04em;max-width:14ch}
.di-ln{display:block;overflow:hidden;padding-bottom:.1em;margin-bottom:-.07em}
.di-wd{display:inline-block;transform:translateY(112%);
  transition:transform 840ms var(--e),letter-spacing 580ms var(--e)}
.di-stage.di-ready .di-wd{transform:none;letter-spacing:-.04em}
/* stage hot-word costumes */
.di-hot{color:var(--sAc)}
.di-hotI{font-family:var(--font-instrument-serif,'Instrument Serif',serif);font-style:italic;
  font-weight:400;letter-spacing:0;font-size:1.05em;color:var(--sAc)}

/* chips */
.di-kids{display:flex;flex-wrap:wrap;gap:.42rem .95rem;margin-top:1.1rem;max-width:56ch}
.di-kids a{font-family:var(--font-space-mono,'Space Mono',monospace);font-size:9.5px;
  letter-spacing:.14em;text-transform:uppercase;color:var(--sDim);text-decoration:none;
  opacity:0;transform:translateY(10px);position:relative;
  transition:opacity 440ms var(--e),transform 520ms var(--e),color 220ms}
.di-stage.di-ready .di-kids a{opacity:1;transform:none}
.di-kids a::after{content:'';position:absolute;left:0;right:0;bottom:-3px;height:1px;
  background:var(--sAc);transform:scaleX(0);transform-origin:right;transition:transform 380ms var(--e)}
.di-kids a:hover{color:var(--sFg)}
.di-kids a:hover::after{transform:scaleX(1);transform-origin:left}

/* ── custom cursor ── */
.di-cur{position:fixed;width:7px;height:7px;border-radius:50%;background:var(--crim);
  pointer-events:none;z-index:9999;transform:translate(-50%,-50%);
  transition:width 380ms var(--e),height 380ms var(--e),opacity 280ms;opacity:0}
.di-cur.di-live{opacity:1}
.di-cur.di-big{width:42px;height:42px;background:transparent;border:1px solid var(--crim)}
@media(hover:none){.di-cur{display:none}}

/* ── explicit grid positions ── */
.di-r2c1{grid-column:1;grid-row:2}
.di-r2c5{grid-column:5;grid-row:2}
.di-r3c1{grid-column:1;grid-row:3}
.di-r3c5{grid-column:5;grid-row:3}
.di-r4c1{grid-column:1;grid-row:4}
.di-r4c2{grid-column:2;grid-row:4}
.di-r4c3{grid-column:3;grid-row:4}
.di-r4c4{grid-column:4;grid-row:4}
.di-r4c5{grid-column:5;grid-row:4}
.di-r5c1{grid-column:1;grid-row:5}
.di-r5c2{grid-column:2;grid-row:5}
.di-r5c3{grid-column:3/6;grid-row:5}
.di-r5c4{grid-column:4;grid-row:5}
.di-r5c5{grid-column:5;grid-row:5}

/* ── responsive ── */
@media(max-width:820px){
  .di-r2c1,.di-r2c5,.di-r3c1,.di-r3c5,
  .di-r4c1,.di-r4c2,.di-r4c3,.di-r4c4,.di-r4c5,
  .di-r5c1,.di-r5c2,.di-r5c3,.di-r5c4,.di-r5c5{grid-column:auto;grid-row:auto}
  .di-frame{grid-template-columns:repeat(2,1fr);grid-template-rows:auto;gap:8px;padding:8px}
  .di-stage{grid-column:1/-1;grid-row:1;min-height:min(320px,70vw);position:relative;top:auto;z-index:2;border-radius:7px}
  .di-cell{min-height:100px}
  .di-mat{grid-column:1/-1;min-height:70px;flex-direction:row;align-items:flex-end;justify-content:space-between}
  .di-head{font-size:clamp(2.5rem,11.5vw,3.8rem)}
  .di-nm{font-size:clamp(1.24rem,5.9vw,1.64rem)}
}
@media(prefers-reduced-motion:reduce){
  .oarc-di *{transition-duration:.01ms!important;animation:none!important}
  .di-wd{transform:none}
  .di-kids a{opacity:1;transform:none}
  em.di-wU::after{transform:scaleX(1)}
  em.di-wS::after{transform:rotate(-3deg) scaleX(1)}
  em.di-wO path{stroke-dashoffset:0}
}

/* ── variant: dark — "Pick your employee" rests on black, flips to ivory on active ── */
/* doubled specificity (.di-cell.di-cell-dark) guarantees override of base .di-cell rules */
.di-cell.di-cell-dark{background:#0B0C0D!important;color:#F5F5F3!important;border-color:rgba(245,245,243,.1)}
.di-cell.di-cell-dark .di-wash{background:#F2EFE9}
.di-cell.di-cell-dark.di-on{color:#0E0D0C!important;border-color:#F2EFE9}
.di-cell.di-cell-dark em.di-wO path{stroke:#F5F5F3}
.di-cell.di-cell-dark.di-on em.di-wO path{stroke:#0B0C0D}

/* ── variant: green — "Social, our powerhouse" rests on Racing Green #0E5A3A, flips to ivory on active ── */
.di-cell.di-cell-green{background:#0E5A3A!important;color:#F2EFE9!important;border-color:rgba(242,239,233,.1)}
.di-cell.di-cell-green .di-wash{background:#F2EFE9}
.di-cell.di-cell-green.di-on{color:#0C1F13!important;border-color:#0C1F13}
.di-cell.di-cell-green em.di-wB{box-shadow:inset 0 0 0 2.5px rgba(242,239,233,.75)}
.di-cell.di-cell-green.di-on em.di-wB{box-shadow:inset 0 0 0 2.5px var(--ac)}
.di-cell.di-cell-green em.di-wI{box-shadow:inset 0 0 0 2.5px rgba(242,239,233,.75)}
.di-cell.di-cell-green.di-on em.di-wI{box-shadow:inset 0 0 0 2.5px #0E5A3A;color:#0E5A3A}
`;

// ─── component ────────────────────────────────────────────────────────────────
export default function OARCDepartmentIndex() {
  const sectionRef = useRef<HTMLElement>(null);
  const frameRef   = useRef<HTMLDivElement>(null);
  const stageRef   = useRef<HTMLElement>(null);
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const flashRef   = useRef<HTMLDivElement>(null);
  const headRef    = useRef<HTMLElement>(null);
  const kidsRef    = useRef<HTMLDivElement>(null);
  const curRef     = useRef<HTMLDivElement>(null);

  const [openDept, setOpenDept] = useState<string|null>(null);

  useEffect(() => {
    if (!sectionRef.current || !frameRef.current || !stageRef.current || !canvasRef.current ||
        !flashRef.current  || !headRef.current  || !kidsRef.current   || !curRef.current) return;

    const section = sectionRef.current;
    const frame   = frameRef.current;
    const stage   = stageRef.current;
    const cvs     = canvasRef.current;
    const flash   = flashRef.current;
    const sHead   = headRef.current;
    const sKids   = kidsRef.current;
    const cur     = curRef.current;
    const ctx     = cvs.getContext("2d") as CanvasRenderingContext2D;

    const reduce  = window.matchMedia("(prefers-reduced-motion:reduce)").matches;
    const isTouch = window.matchMedia("(hover:none)").matches;
    const isFine  = window.matchMedia("(pointer:fine)").matches;

    let PAL: World = W_NOIR;
    let active  = -1;
    let autoR   = true;
    let born    = 0;
    let W_ = 0, H_ = 0, CX = 0, CY = 0, MR = 0;
    let rafId   = 0;
    let autoId  = 0;
    let rafPaused = false;
    const tids: ReturnType<typeof setTimeout>[] = [];
    const cells = Array.from(frame.querySelectorAll<HTMLElement>(".di-cell"));

    // ── canvas helpers ────────────────────────────────────────────────────
    const dot  = (x:number,y:number,r:number,col:string,al=1) => { ctx.globalAlpha=al; ctx.beginPath(); ctx.arc(x,y,r,0,TAU); ctx.fillStyle=col; ctx.fill(); ctx.globalAlpha=1; };
    const ring = (x:number,y:number,r:number,col:string,w:number,al=1) => { ctx.globalAlpha=al; ctx.beginPath(); ctx.arc(x,y,r,0,TAU); ctx.strokeStyle=col; ctx.lineWidth=w; ctx.stroke(); ctx.globalAlpha=1; };
    const seg  = (x1:number,y1:number,x2:number,y2:number,col:string,w:number,al=1) => { ctx.globalAlpha=al; ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(x2,y2); ctx.strokeStyle=col; ctx.lineWidth=w; ctx.stroke(); ctx.globalAlpha=1; };
    const box2 = (x:number,y:number,w:number,h:number,col:string) => { ctx.fillStyle=col; ctx.fillRect(x,y,w,h); };
    const star = (x:number,y:number,r:number,col:string) => {
      ctx.fillStyle=col; ctx.beginPath();
      for (let i=0;i<10;i++) { const a=i/10*TAU-Math.PI/2, rr=i%2?r*.42:r; ctx.lineTo(x+Math.cos(a)*rr, y+Math.sin(a)*rr); }
      ctx.closePath(); ctx.fill();
    };

    // ── canvas marks (all 16) ─────────────────────────────────────────────
    type MarkFn = (x:number,y:number,R:number,T:number)=>void;
    const MARK: Record<string,MarkFn> = {

      // Growth — converging particles
      inflow(x,y,R,T){
        for(let k=0;k<6;k++){
          const ph=(T*.3+k*.167)%1,e=easeOut(ph);
          dot(x+Math.sin(k*2.1+.6)*R*.7*(1-e),y+R*1.9-e*R*1.9,3,PAL.st(.6),Math.min(1,ph*2.4)*(1-ph*.3));
        }
        const fill=(T*.3)%1;
        ring(x,y,R*.4,PAL.st(.14),1.2);
        ctx.strokeStyle=PAL.ac;ctx.lineWidth=2;ctx.lineCap="round";ctx.beginPath();
        ctx.arc(x,y,R*.4,-Math.PI/2,-Math.PI/2+fill*TAU);ctx.stroke();
        dot(x,y,6,PAL.ac,.72+.28*Math.sin(T*3));
      },

      // AI Staff — elliptical orbits
      orbit(x,y,R,T){
        const os:Array<[number,number,number]>=[[.72,1.05,0],[.5,-1.5,2],[.9,.7,4]];
        for(let k=0;k<3;k++){
          const rr=R*os[k][0]; ring(x,y,rr,PAL.st(k===0?.14:.08),1.1);
          const a=T*os[k][1]+os[k][2];
          dot(x+Math.cos(a)*rr,y+Math.sin(a)*rr,k===0?4.5:3,k===0?PAL.ac:PAL.st(.45),1);
        }
        dot(x,y,6,PAL.ac,.85+.15*Math.sin(T*2.4));
      },

      // Creative — star ascending on diagonal
      ascend(x,y,R,T){
        const ph=(T*.42)%1,x0=x-R*.95,y0=y+R*.95,x1=x+R*.95,y1=y-R*.95;
        seg(x0,y0,x0+(x1-x0)*ph,y0+(y1-y0)*ph,PAL.st(.4),1.6);
        star(x0+(x1-x0)*ph,y0+(y1-y0)*ph,4.5*(.75+.25*Math.sin(T*5)),PAL.ac);
      },

      // Reputation — broadcast arcs from person
      reach(x,y,R,T){
        const oy=y+R*.5;
        dot(x,oy-R*.72,4.5,PAL.ac,1);
        ctx.fillStyle=PAL.st(.5);ctx.beginPath();ctx.ellipse(x,oy-R*.42,R*.14,R*.22,0,0,TAU);ctx.fill();
        for(let k=0;k<3;k++){
          const ph=(T*.5+k/3)%1,rad=R*.25+ph*R*1.5;
          ctx.globalAlpha=(1-ph)*.85;ctx.beginPath();ctx.arc(x,oy-R*.72,rad,Math.PI,0);
          ctx.strokeStyle=ph<.04?PAL.ac:PAL.st(.5);ctx.lineWidth=1.3;ctx.stroke();ctx.globalAlpha=1;
        }
      },

      // Sales — electric bolt
      bolt(x,y,R,T){
        const f=.45+.55*Math.abs(Math.sin(T*3.3));
        ring(x+R*.35,y+R,R*.14+((T*1.05)%1)*R*.7,PAL.ac,1.2,(1-((T*1.05)%1))*.5);
        ctx.save();ctx.shadowColor=PAL.ac;ctx.shadowBlur=14*f;
        ctx.strokeStyle=PAL.ac;ctx.lineWidth=2.6;ctx.lineJoin="round";ctx.lineCap="round";ctx.globalAlpha=f;
        ctx.beginPath();ctx.moveTo(x-R*.35,y-R);ctx.lineTo(x+R*.18,y-R*.12);ctx.lineTo(x-R*.14,y);ctx.lineTo(x+R*.35,y+R);
        ctx.stroke();ctx.restore();ctx.globalAlpha=1;
      },

      // Enquiries — enquiry rail with euro sign
      rail(x,y,R,T){
        const n=6,ph=(T*.45)%1;
        for(let k=0;k<n;k++){
          const t=k/(n-1),xx=x-R+2*R*t,on=t<=ph;
          if(k<n-1){const x2=x-R+2*R*(k+1)/(n-1);seg(xx+5,y,x2-5,y,PAL.st(on?.5:.2),1.2);}
          dot(xx,y,on?4:2.6,on?PAL.ac:PAL.st(.3),1);
        }
        ctx.font="700 13px 'Space Mono',monospace";ctx.fillStyle=PAL.ac;
        ctx.fillText("€",x-R+2*R*Math.min(1,ph*1.06)-4,y-12);
      },

      // Social — pulse rings + satellites
      pulse(x,y,R,T){
        for(let w=0;w<2;w++){
          const ph=(T*.68+w*.5)%1;
          ring(x,y,R*.2+ph*R*1.3,ph<.05?PAL.ac:PAL.st(.5),1.3,(1-ph)*.9);
        }
        dot(x,y,6,PAL.ac,.9);
      },

      // Media — noisy signal smoothing to return arrow
      resolve(x,y,R,T){
        ctx.strokeStyle=PAL.st(.42);ctx.lineWidth=1.8;ctx.beginPath();
        for(let k=0;k<=34;k++){
          const t=k/34,X=x-R+2*R*t;
          const Y=t<.5?y+Math.sin(t*30+T*4)*R*.4*(1-t*1.4):y-(t-.5)*2*R*.78;
          k===0?ctx.moveTo(X,Y):ctx.lineTo(X,Y);
        }
        ctx.stroke();
        star(x+R,y-R*.78,5*(.6+.4*Math.sin(T*3)),PAL.ac);
      },

      // Brand — drawing arc completes
      markO(x,y,R,T){
        const ph=Math.min(1,((T*.3)%1.25)/.8),a0=-Math.PI/2,a1=a0+easeOut(ph)*TAU;
        ctx.strokeStyle=PAL.ac;ctx.lineWidth=2.4;ctx.lineCap="round";
        ctx.beginPath();ctx.arc(x,y,R*.7,a0,a1);ctx.stroke();
        if(ph<1)dot(x+Math.cos(a1)*R*.7,y+Math.sin(a1)*R*.7,3.8,PAL.ac,1);
      },

      // Operations — task bars clearing
      lift(x,y,R,T){
        const n=5,bw=R*.24,gap=R*.22,Wt=n*bw+(n-1)*gap,x0=x-Wt/2,ph=(T*.4)%1,h=R*.95;
        for(let k=0;k<n;k++){
          const keep=(k===n-1),clr=(!keep)&&ph>(k/n*.75+.12),bx=x0+k*(bw+gap);
          const hh=clr?h*(1-Math.min(1,(ph-(k/n*.75+.12))*6)):h;
          if(hh>2)box2(bx,y+R*.5-hh,bw,hh,keep?PAL.ac:PAL.st(.4));
        }
      },

      // Clarity — data needle scanning
      flip(x,y,R,T){
        const a=Math.sin(T*1.1)*.62,dx=Math.cos(a)*R,dy=Math.sin(a)*R;
        for(let s=3;s>=1;s--){
          const ta=Math.sin((T-s*.04)*1.1)*.62;
          seg(x-Math.cos(ta)*R,y-Math.sin(ta)*R,x+Math.cos(ta)*R,y+Math.sin(ta)*R,PAL.st(.18),1.2,1-s*.24);
        }
        seg(x-dx,y-dy,x+dx,y+dy,PAL.st(.42),2.4);
        dot(x+dx,y+dy,5.5,PAL.ac,1);
        dot(x-dx,y-dy,3.8,PAL.st(.5),1);
      },

      // Automation — continuous loop
      loop(x,y,R,T){
        ring(x,y,R*.7,PAL.st(.15),1.4);
        const a=T*1.25;
        for(let t=1;t<=4;t++){
          const tb=a-t*.14;
          dot(x+Math.cos(tb)*R*.7,y+Math.sin(tb)*R*.7,3.6-t*.6,PAL.ac,.5-t*.1);
        }
        dot(x+Math.cos(a)*R*.7,y+Math.sin(a)*R*.7,4.4,PAL.ac,1);
        dot(x,y,5,PAL.ac,.88);
      },

      // Transformation — nodes lighting up
      flip2(x,y,R,T){
        const n=7,ph=(T*.5)%1;
        for(let k=0;k<n;k++){
          const t=k/(n-1),xx=x-R+2*R*t,on=t<ph;
          if(k<n-1){const x2=x-R+2*R*(k+1)/(n-1);seg(xx+5,y,x2-5,y,PAL.st(on?.5:.22),on?1.6:1);}
          dot(xx,y,on?4.2:2.6,on?PAL.ac:PAL.st(.3),1);
        }
      },

      // Ship — stacking layers
      stack(x,y,R,T){
        const n=4,ph=(T*.5)%1;
        for(let k=0;k<n;k++){
          const on=ph>(k+1)/(n+1),yy=y+R*.7-k*(R*.42);
          if(on){
            box2(x-R*.5,yy-R*.16,R,R*.32,k===n-1?PAL.ac:PAL.st(.5));
          } else {
            ctx.strokeStyle=PAL.st(.22);ctx.lineWidth=1.2;ctx.strokeRect(x-R*.5,yy-R*.16,R,R*.32);
          }
        }
      },

      // Products — shelf with lit dots
      shelf(x,y,R,T){
        const w=R*.6,g=R*.22,x0=x-(3*w+2*g)/2;
        for(let k=0;k<3;k++){
          const bx=x0+k*(w+g),p=.5+.5*Math.sin(T*2.2+k*2.1);
          ctx.strokeStyle=PAL.st(.4);ctx.lineWidth=1.4;ctx.strokeRect(bx,y-R*.45,w,R*.9);
          dot(bx+w/2,y,3.4+1.4*p,PAL.ac,.5+.5*p);
        }
      },

      // Compare — scales tipping
      scales(x,y,R,T){
        const p=Math.min(1,((T*.4)%1.3));
        const hL=R*.5+R*.5*easeOut(Math.min(1,p*1.4)),hR=R*.9-R*.55*easeOut(Math.min(1,p*1.4));
        box2(x-R*.7,y+R*.6-hL,R*.5,hL,PAL.ac);
        ctx.strokeStyle=PAL.st(.35);ctx.lineWidth=1.4;ctx.strokeRect(x+R*.2,y+R*.6-hR,R*.5,hR);
      },
    };

    // ── canvas render ─────────────────────────────────────────────────────
    function draw() {
      ctx.clearRect(0,0,W_,H_); if(!MR) return;
      const d=DATA[active<0?0:active]; if(!d||!MARK[d.m]) return;
      const app=Math.min(1,(performance.now()-born)/560),k=.92+.08*easeOut(app);
      ctx.save();ctx.globalAlpha=easeOut(app);
      ctx.translate(CX,CY);ctx.scale(k,k);ctx.translate(-CX,-CY);
      MARK[d.m](CX,CY,MR,performance.now()/1000);
      ctx.restore();
    }

    function measure() {
      const dpr=Math.min(devicePixelRatio||1,isTouch?1.5:2),r=stage.getBoundingClientRect();if(!r.width)return;
      cvs.width=r.width*dpr;cvs.height=r.height*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);
      W_=r.width;H_=r.height;
      CX=r.width*.5;CY=r.height*.36;MR=Math.min(r.width,r.height)*.17;
    }

    // ── world setter ──────────────────────────────────────────────────────
    function setWorld(w: World, flashIt=true) {
      PAL = w;
      section.style.setProperty("--sBg",  w.bg);
      section.style.setProperty("--sFg",  w.fg);
      section.style.setProperty("--sAc",  w.ac);
      section.style.setProperty("--sDim", w.dim);
      section.style.setProperty("--sgA",  w.gA);
      section.style.setProperty("--sgB",  w.gB);
      if(flashIt && !reduce) {
        flash.style.background=w.ac; flash.style.opacity=".18";
        const t=setTimeout(()=>{ flash.style.opacity="0"; },80);
        tids.push(t);
      }
    }

    // ── show department ───────────────────────────────────────────────────
    function show(i: number) {
      if(i===active) return;
      active=i; const d=DATA[i]; born=performance.now();
      stage.classList.remove("di-ready");
      sKids.innerHTML="";
      setWorld(d.wd, active>=0);

      const hotCls = d.w==="I" ? "di-hotI" : "di-hot";

      const populate = () => {
        // parse |hot| format
        const parts = d.h.split("|");
        // build word array spanning all parts
        const allWords: Array<{word:string; hot:boolean}> = [];
        parts.forEach((part, pi) => {
          const isHot = pi%2===1;
          part.trim().split(/\s+/).filter(Boolean).forEach(w => allWords.push({word:w, hot:isHot}));
        });
        sHead.innerHTML = allWords.map(({word, hot}, n) => {
          const delay = reduce ? 0 : n*68;
          return `<span class="di-ln"><span class="di-wd${hot?" "+hotCls:""}" style="transition-delay:${delay}ms;letter-spacing:-.05em">${word}</span></span> `;
        }).join("");
        sKids.innerHTML = d.c.map((c,n) =>
          `<a href="${d.u}" style="transition-delay:${reduce?0:240+n*42}ms">${c}</a>`
        ).join("");
        stage.classList.add("di-ready");
      };

      if(reduce) {
        populate(); born=performance.now()-600; draw();
      } else {
        const t=setTimeout(populate,175); tids.push(t);
      }

      cells.forEach((c,n) => c.classList.toggle("di-on", n===i));
    }

    // ── cell interactions ──────────────────────────────────────────────────
    cells.forEach((c) => {
      const i=parseInt(c.dataset.i ?? "0",10);
      c.tabIndex=0;
      const nmEl=c.querySelector<HTMLElement>(".di-nm");

      const onMm=(e:MouseEvent)=>{
        if(!nmEl)return;
        const r=c.getBoundingClientRect();
        const dx=(e.clientX-r.left)/r.width-.5,dy=(e.clientY-r.top)/r.height-.5;
        nmEl.style.transform=`translate(${dx*7}px,${dy*3.5}px)`;
      };
      const onMl=()=>{ if(nmEl) nmEl.style.transform=""; };
      const onMe=(e:MouseEvent)=>{
        const r=c.getBoundingClientRect();
        c.classList.toggle("di-from-top", e.clientY-r.top<r.height/2);
        show(i); autoR=false; cur.classList.add("di-big");
      };
      const onMlv=()=>cur.classList.remove("di-big");
      const onClick=()=>{ show(i); autoR=false; };
      const onFocus=()=>show(i);

      c.addEventListener("mousemove",  onMm);
      c.addEventListener("mouseleave", onMl);
      c.addEventListener("mouseenter", onMe);
      c.addEventListener("mouseleave", onMlv);
      c.addEventListener("click",      onClick);
      c.addEventListener("focus",      onFocus);
    });

    // ── stage parallax ────────────────────────────────────────────────────
    const layers=Array.from(stage.querySelectorAll<HTMLElement>(".di-layer"));
    const onStageMm=(e:MouseEvent)=>{
      const r=stage.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
      layers.forEach(l=>{ const dp=+(l.dataset.depth??0); l.style.transform=`translate3d(${-x*dp}px,${-y*dp*.6}px,0)`; });
    };
    if(!reduce && isFine) stage.addEventListener("mousemove",onStageMm);

    // ── cursor ────────────────────────────────────────────────────────────
    let cursorInSection=false;
    const onPm=(e:PointerEvent)=>{
      if(!isTouch && cursorInSection)
        cur.style.transform=`translate(${e.clientX}px,${e.clientY}px) translate(-50%,-50%)`;
    };
    const onSectionEnter=()=>{ if(!isTouch){cursorInSection=true;cur.classList.add("di-live");} };
    const onSectionLeave=()=>{ cursorInSection=false;cur.classList.remove("di-live"); };
    if(!isTouch) {
      window.addEventListener("pointermove",onPm,{passive:true});
      section.addEventListener("pointerenter",onSectionEnter);
      section.addEventListener("pointerleave",onSectionLeave);
    }

    // ── resize ────────────────────────────────────────────────────────────
    let resizeT:ReturnType<typeof setTimeout>;
    const onResize=()=>{ clearTimeout(resizeT);resizeT=setTimeout(measure,140); };
    window.addEventListener("resize",onResize);

    // ── entrance observer (grid fade-in) ──────────────────────────────────
    const entranceIO=new IntersectionObserver(([e])=>{
      if(e.isIntersecting){frame.classList.add("di-up");entranceIO.disconnect();}
    },{threshold:0.06});
    entranceIO.observe(frame);

    // ── RAF pause when section is off-screen ──────────────────────────────
    const rafIO=new IntersectionObserver(([e])=>{
      rafPaused=!e.isIntersecting;
    },{threshold:0});
    rafIO.observe(section);

    // ── init ──────────────────────────────────────────────────────────────
    setWorld(W_NOIR,false);
    show(0);
    measure();
    if(reduce){born=performance.now()-600;draw();}
    const t1=setTimeout(()=>{measure();if(reduce){born=performance.now()-600;draw();}},280);
    const t2=setTimeout(()=>{measure();if(reduce){born=performance.now()-600;draw();}},1100);
    tids.push(t1,t2);

    if(!reduce){
      autoId=window.setInterval(()=>{ if(autoR && !document.hidden && !rafPaused) show((active+1)%DATA.length); },4600);
      (function loop(){ if(!rafPaused) draw(); rafId=requestAnimationFrame(loop); })();
    }

    return ()=>{
      cancelAnimationFrame(rafId);
      clearInterval(autoId);
      tids.forEach(clearTimeout);
      if(!isTouch){
        window.removeEventListener("pointermove",onPm);
        section.removeEventListener("pointerenter",onSectionEnter);
        section.removeEventListener("pointerleave",onSectionLeave);
      }
      window.removeEventListener("resize",onResize);
      if(!reduce && isFine) stage.removeEventListener("mousemove",onStageMm);
      entranceIO.disconnect();
      rafIO.disconnect();
    };
  }, []);

  // helper: parse |hot| and render tile nm
  function renderNm(d: Dept) {
    const parts = d.h.split("|");
    return (
      <>
        {parts[0]}
        <em className={`di-w${d.w}`} style={{"--ac":d.ac,"--acT":d.acT} as React.CSSProperties}>
          {parts[1]}
          {d.w==="O" && (
            <svg viewBox="0 0 100 60" aria-hidden="true">
              <path d="M8,32 C10,12 88,6 93,26 C97,46 22,58 10,44 C4,37 6,34 12,30"/>
            </svg>
          )}
        </em>
        {parts[2]||""}
      </>
    );
  }

  // ── JSX ───────────────────────────────────────────────────────────────────
  return (
    <section ref={sectionRef} className="oarc-di" aria-label="OARC departments" data-testid="oarc-department-index">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      {/* SEO-crawlable nav — hidden from view */}
      <nav aria-label="Department pages" style={{position:"absolute",width:1,height:1,overflow:"hidden",clip:"rect(0,0,0,0)",whiteSpace:"nowrap",border:0}}>
        {DATA.map((d)=>(<a key={d.k} href={d.u}>{d.k} — {d.h.replace(/\|/g,"")}</a>))}
      </nav>

      {/* custom cursor */}
      <div ref={curRef} className="di-cur" aria-hidden="true" />

      {/* 5 × 5 grid */}
      <div ref={frameRef} className="di-frame" id="di-frame">

        {/* ── ROW 1 — 5 cards (auto-flow) ── */}
        {DATA.slice(0,5).map((d,i)=>(
          <div key={i}
               className={`di-cell${i===1?' di-cell-dark':i===2?' di-cell-green':''}`}
               data-i={String(i)}
               style={{"--ac":d.ac,"--acT":d.acT} as React.CSSProperties}
               tabIndex={0}
               onClick={()=>setOpenDept(d.k)}>
            <span className="di-wash" aria-hidden="true" />
            <span className="di-nm">{renderNm(d)}</span>
          </div>
        ))}

        {/* ── ROW 2, COL 1 — Enquiries ── */}
        <div className="di-cell di-r2c1"
             data-i="5"
             style={{"--ac":DATA[5].ac,"--acT":DATA[5].acT} as React.CSSProperties}
             tabIndex={0}
             onClick={()=>setOpenDept(DATA[5].k)}>
          <span className="di-wash" aria-hidden="true" />
          <span className="di-nm">{renderNm(DATA[5])}</span>
        </div>

        {/* ── THE STAGE — cols 2–4, rows 2–3 ── */}
        <section ref={stageRef} className="di-stage" id="di-stage" aria-label="Department stage" aria-live="polite">
          <canvas ref={canvasRef} aria-hidden="true" />
          <div ref={flashRef} className="di-flash" aria-hidden="true" />
          <div className="di-layer" data-depth="14">
            <h2 ref={headRef as React.RefObject<HTMLHeadingElement>} className="di-head" />
          </div>
          <div className="di-layer" data-depth="7">
            <div ref={kidsRef} className="di-kids" />
          </div>
        </section>

        {/* ── ROW 2, COL 5 — Social ── */}
        <div className="di-cell di-r2c5 di-cell-green"
             data-i="6"
             style={{"--ac":DATA[6].ac,"--acT":DATA[6].acT} as React.CSSProperties}
             tabIndex={0}
             onClick={()=>setOpenDept(DATA[6].k)}>
          <span className="di-wash" aria-hidden="true" />
          <span className="di-nm">{renderNm(DATA[6])}</span>
        </div>

        {/* ── ROW 3, COL 1 — Media ── */}
        <div className="di-cell di-r3c1"
             data-i="7"
             style={{"--ac":DATA[7].ac,"--acT":DATA[7].acT} as React.CSSProperties}
             tabIndex={0}
             onClick={()=>setOpenDept(DATA[7].k)}>
          <span className="di-wash" aria-hidden="true" />
          <span className="di-nm">{renderNm(DATA[7])}</span>
        </div>

        {/* ── ROW 3, COL 5 — Brand ── */}
        <div className="di-cell di-r3c5"
             data-i="8"
             style={{"--ac":DATA[8].ac,"--acT":DATA[8].acT} as React.CSSProperties}
             tabIndex={0}
             onClick={()=>setOpenDept(DATA[8].k)}>
          <span className="di-wash" aria-hidden="true" />
          <span className="di-nm">{renderNm(DATA[8])}</span>
        </div>

        {/* ── ROW 4 — cols 1–4 ── */}
        {DATA.slice(9,13).map((d,i)=>{
          const colCls=["di-r4c1","di-r4c2","di-r4c3","di-r4c4"][i];
          return (
            <div key={i+9}
                 className={`di-cell ${colCls}`}
                 data-i={String(i+9)}
                 style={{"--ac":d.ac,"--acT":d.acT} as React.CSSProperties}
                 tabIndex={0}
                 onClick={()=>setOpenDept(d.k)}>
              <span className="di-wash" aria-hidden="true" />
              <span className="di-nm">{renderNm(d)}</span>
            </div>
          );
        })}

        {/* ── ROW 4, COL 5 — mat ── */}
        <div className="di-mat di-r4c5">
          <span className="di-mat-big">One team</span>
          <span className="di-mat-lbl">Strategy → delivery</span>
        </div>

        {/* ── ROW 5 — cols 1–3 ── */}
        {DATA.slice(13,16).map((d,i)=>{
          const colCls=["di-r5c1","di-r5c2","di-r5c3"][i];
          return (
            <div key={i+13}
                 className={`di-cell ${colCls}`}
                 data-i={String(i+13)}
                 style={{"--ac":d.ac,"--acT":d.acT} as React.CSSProperties}
                 tabIndex={0}
                 onClick={()=>setOpenDept(d.k)}>
              <span className="di-wash" aria-hidden="true" />
              <span className="di-nm">{renderNm(d)}</span>
            </div>
          );
        })}


      </div>

      {/* Department detail modal */}
      <DepartmentDetailModal
        dept={openDept}
        onClose={()=>setOpenDept(null)}
      />
    </section>
  );
}
