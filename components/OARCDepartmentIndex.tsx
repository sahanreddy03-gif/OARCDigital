"use client";

import { useEffect, useRef, useState } from "react";
import DepartmentDetailModal from "./DepartmentDetailModal";

// ─── constants & helpers ──────────────────────────────────────────────────────
const TAU = Math.PI * 2;
function easeOut(t: number) { return 1 - (1 - t) ** 3; }

// ─── realm palettes ───────────────────────────────────────────────────────────
const REALM = {
  E: { bg:"#0E0D0C", fg:"#F2EFE9", sig:"#E02B20", dim:"rgba(242,239,233,.5)",
       gA:"rgba(14,13,12,.68)",    gB:"rgba(14,13,12,.97)",
       st:(a:number)=>`rgba(242,239,233,${a})`, ghost:"rgba(224,43,32,.32)", cost:"di-h1c" },
  S: { bg:"#F0EAE0", fg:"#191410", sig:"#7E1F2B", dim:"rgba(25,20,16,.55)",
       gA:"rgba(240,234,224,.68)", gB:"rgba(240,234,224,.97)",
       st:(a:number)=>`rgba(25,20,16,${a})`,    ghost:"rgba(126,31,43,.30)", cost:"di-h2c" },
  M: { bg:"#0B0C0D", fg:"#F5F5F3", sig:"#F5F5F3", dim:"rgba(245,245,243,.5)",
       gA:"rgba(11,12,13,.68)",    gB:"rgba(11,12,13,.97)",
       st:(a:number)=>`rgba(245,245,243,${a})`, ghost:"rgba(245,245,243,.28)", cost:"di-h3c" },
} as const;
type RealmKey = keyof typeof REALM;
type Pal = (typeof REALM)[RealmKey];

// ─── department data ──────────────────────────────────────────────────────────
interface Dept {
  r:RealmKey; k:string; h:string; hot:string; m:string; u:string; c:string[];
  nm:[string,string,string,string]; // [before, accentCls, accentText, after]
}
const DATA:Dept[] = [
  {r:"E",k:"Growth",        h:"Bring me more customers.", hot:"customers.", m:"inflow",  u:"/services/growth",
   nm:["BRING ME MORE ","eC","CUSTOMERS","."],
   c:["They find you","You find them","They like you","They pick you","You stay close","They come back"]},
  {r:"E",k:"Sales",         h:"Close more sales.",        hot:"sales.",     m:"bolt",    u:"/services/sales",
   nm:["CLOSE MORE ","eU","SALES","."],
   c:["Speed-to-lead","Pipeline & offer strategy","Founder story & sales reels","Trust & proof","Instant qualify & book","Team training"]},
  {r:"E",k:"Media",         h:"Ad spend that pays.",      hot:"pays.",      m:"resolve", u:"/services/media",
   nm:["AD SPEND THAT ","eC","PAYS","."],
   c:["Meta & Google","TikTok & YouTube","Out-of-home","100% spend → platforms","Flighted testing","Return in euros"]},
  {r:"S",k:"Creative",      h:"Make us worth more.",      hot:"more.",      m:"ascend",  u:"/services/creative",
   nm:["MAKE US WORTH ","sI","more","."],
   c:["Big idea & campaigns","Social & content studio","Brand & identity","Film & motion","Ad & performance creative","AI creative engine"]},
  {r:"S",k:"Social",        h:"Social, our powerhouse.",  hot:"powerhouse.",m:"pulse",   u:"/services/social",
   nm:["SOCIAL, OUR ","sC","POWERHOUSE","."],
   c:["Strategy — where they scroll","Storytelling","Video & editing","Native to every platform","The craft","Community that converts"]},
  {r:"S",k:"Reputation",    h:"Make me famous.",          hot:"famous.",    m:"reach",   u:"/services/reputation",
   nm:["MAKE ME ","sI","famous","."],
   c:["Reels & founder videos","Press & news features","Creator collabs","Podcast features","Shared everywhere"]},
  {r:"M",k:"AI Staff",      h:"Pick your employee.",      hot:"employee.",  m:"orbit",   u:"/services/ai-staff",
   nm:["PICK YOUR ","mB","EMPLOYEE","."],
   c:["Sales agent","Bookings host","Missed-call return","Review capture","Support agent","Quotes & invoices","Win-back","Nightly watch"]},
  {r:"S",k:"Brand",         h:"Creative and brand.",      hot:"brand.",     m:"markO",   u:"/services/brand",
   nm:["CREATIVE AND ","sC","BRAND","."],
   c:["Brand strategy & positioning","Identity system & guidelines","Photo, film & 3D","Web & product design","Campaigns & copy","Packaging, signage, merch"]},
  {r:"M",k:"Operations",    h:"Take work off my plate.",  hot:"plate.",     m:"lift",    u:"/services/operations",
   nm:["WORK OFF MY ","mU","PLATE","."],
   c:["≈13 hrs back weekly","DMs answered","Bookings confirmed","Invoices chased","Reminders sent","Reports written"]},
  {r:"M",k:"Clarity",       h:"Tell me what's working.",  hot:"working.",   m:"flip",    u:"/services/clarity",
   nm:["WHAT'S ","mB","WORKING","?"],
   c:["Money metrics, not vanity","Every euro traced","Winners vs losers","Spend→Click→Lead→Sale","The one move"]},
  {r:"M",k:"Automation",    h:"The business runs itself.",hot:"itself.",    m:"loop",    u:"/services/automation",
   nm:["IT RUNS ","mU","ITSELF","."],
   c:["Marketing automations","Sales & CRM flows","Bookings & reminders","Invoicing & payments","Stock & ops triggers","Dashboards & reports"]},
  {r:"M",k:"Transformation",h:"Change how it runs.",      hot:"runs.",      m:"flip2",   u:"/services/transformation",
   nm:["CHANGE HOW IT ","mB","RUNS","."],
   c:["Full guest lifecycle","QR ordering — MENU","Kitchen display","Self-order KIOSK","Owner dashboard — DESK","Reviews & loyalty — TABLE","POS bridge"]},
];

// ─── scoped CSS ───────────────────────────────────────────────────────────────
const CSS = `
.oarc-di{
  background:#F2EFE9;color:#0E0D0C;
  font-family:var(--font-ds-display,'Bricolage Grotesque',sans-serif);
  -webkit-font-smoothing:antialiased;overflow-x:hidden;position:relative;
  --di-expo:cubic-bezier(.16,1,.3,1);--di-soft:cubic-bezier(.33,1,.68,1);
  --di-line:rgba(14,13,12,.10);--di-crim:#C8102E;--di-scar:#E02B20;--di-oxb:#7E1F2B;
  --stBg:#0E0D0C;--stFg:#F2EFE9;--stSig:#E02B20;--stDim:rgba(242,239,233,.5);
  --gA:rgba(14,13,12,.68);--gB:rgba(14,13,12,.97);
}
/* grain */
.oarc-di::before{content:'';position:absolute;inset:-120%;z-index:0;pointer-events:none;
  opacity:.025;mix-blend-mode:multiply;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")}
/* vignette */
.oarc-di::after{content:'';position:absolute;inset:0;z-index:0;pointer-events:none;
  background:radial-gradient(ellipse 90% 70% at 50% 50%,transparent 55%,rgba(14,13,12,.08) 100%)}

@media(hover:hover) and (pointer:fine){.oarc-di,.oarc-di *{cursor:none}}

.di-frame{display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:repeat(4,minmax(122px,1fr));
  gap:14px;min-height:100vh;padding:14px;position:relative;z-index:2}

/* entrance — cells start hidden; .di-up releases them */
.di-cell,.di-mat,.di-stage{opacity:0;transform:translateY(18px);
  transition:opacity 850ms var(--di-soft),transform 950ms var(--di-expo)}
.di-frame.di-up .di-cell,.di-frame.di-up .di-mat,.di-frame.di-up .di-stage{opacity:1;transform:none}
.di-frame.di-up .di-cell:nth-child(1){transition-delay:0ms}
.di-frame.di-up .di-cell:nth-child(2){transition-delay:60ms}
.di-frame.di-up .di-cell:nth-child(3){transition-delay:120ms}
.di-frame.di-up .di-cell:nth-child(4){transition-delay:180ms}
.di-frame.di-up .di-cell:nth-child(5){transition-delay:240ms}
.di-frame.di-up .di-cell:nth-child(6){transition-delay:300ms}
.di-frame.di-up .di-stage{transition-delay:100ms}
.di-frame.di-up .di-mat{transition-delay:320ms}

/* ── tiles ── */
.di-cell{background:#F2EFE9;padding:1rem 1.05rem;cursor:pointer;display:flex;flex-direction:column;
  justify-content:space-between;position:relative;overflow:hidden;border:1px solid var(--di-line);
  transition:background 460ms var(--di-expo),color 460ms var(--di-expo),border-color 460ms var(--di-expo),
             opacity 850ms var(--di-soft),transform 950ms var(--di-expo)}
.di-wash{position:absolute;inset:0;background:#0E0D0C;transform:scaleY(0);transform-origin:bottom;
  transition:transform 620ms var(--di-expo)}
.di-cell.di-from-top .di-wash{transform-origin:top}
.di-cell.di-on .di-wash{transform:scaleY(1)}
.di-cell.di-on{color:#F2EFE9;border-color:#0E0D0C}
.di-cell:focus-visible{outline:2px solid var(--di-crim);outline-offset:2px}
.di-cell>span{position:relative;z-index:2}
.di-k{font-family:var(--font-ds-mono,'Space Mono',monospace);font-size:9px;letter-spacing:.24em;
  text-transform:uppercase;color:#8E8A83;transition:color 460ms var(--di-expo)}
.di-cell.di-rE.di-on .di-k{color:var(--di-scar)}
.di-cell.di-rS.di-on .di-k{color:#E9B9AE}
.di-cell.di-rM.di-on .di-k{color:rgba(242,239,233,.75)}

/* tile names */
.di-nm{font-family:var(--font-ds-display,'Bricolage Grotesque',sans-serif);font-weight:800;
  font-size:clamp(1.02rem,1.45vw,1.4rem);line-height:1.04;letter-spacing:-.025em;margin-top:auto;
  text-transform:uppercase;transition:transform 620ms var(--di-expo)}
.di-cell.di-on .di-nm{transform:translateY(-2px)}
.di-nm em{font-style:normal;display:inline-block;
  transition:transform 500ms var(--di-expo),color 460ms var(--di-expo),box-shadow 460ms var(--di-expo)}
.di-cell.di-on .di-nm em{animation:di-pop 640ms var(--di-expo)}
@keyframes di-pop{0%{transform:scale(.86)}55%{transform:scale(1.08)}100%{transform:scale(1)}}

/* realm costumes — ivory surface */
.di-eC{color:var(--di-crim)}
.di-eU{box-shadow:inset 0 -3px 0 var(--di-crim)}
.di-sI{font-family:var(--font-ds-flair,'Instrument Serif',serif);font-style:italic;font-weight:400;
  letter-spacing:0;text-transform:lowercase;font-size:1.22em;color:var(--di-oxb)}
.di-sC{color:var(--di-oxb)}
.di-mB{box-shadow:inset 0 0 0 2px #0E0D0C;padding:0 .1em}
.di-mU{box-shadow:inset 0 -3px 0 #0E0D0C}
/* costumes on dark wash */
.di-cell.di-on .di-sI{color:#F0D9D3}
.di-cell.di-on .di-sC{color:#E9B9AE}
.di-cell.di-on .di-mB{box-shadow:inset 0 0 0 2px #F2EFE9}
.di-cell.di-on .di-mU{box-shadow:inset 0 -3px 0 #F2EFE9}
.di-cell.di-on .di-eU{box-shadow:inset 0 -3px 0 var(--di-scar)}
.di-cell.di-on .di-eC{color:var(--di-scar)}

/* ── mat tiles ── */
.di-mat{background:#0E0D0C;color:#F2EFE9;padding:1rem 1.05rem;display:flex;flex-direction:column;
  justify-content:flex-end;gap:.4rem}
.di-mat .di-mat-big{font-family:var(--font-ds-display,'Bricolage Grotesque',sans-serif);font-weight:800;
  font-size:clamp(1.05rem,1.5vw,1.5rem);text-transform:uppercase;letter-spacing:-.03em;line-height:.9}
.di-mat .di-mat-lbl{font-family:var(--font-ds-mono,'Space Mono',monospace);font-size:9px;
  letter-spacing:.2em;text-transform:uppercase;color:var(--di-scar)}

/* ── stage ── */
.di-stage{grid-column:2/5;grid-row:2/4;background:var(--stBg);color:var(--stFg);position:relative;
  overflow:hidden;display:flex;flex-direction:column;justify-content:flex-end;
  padding:clamp(1.5rem,2.8vw,2.8rem);
  transition:background 700ms var(--di-expo),color 700ms var(--di-expo),
             opacity 850ms var(--di-soft),transform 950ms var(--di-expo)}
.di-stage canvas{position:absolute;inset:0;width:100%;height:100%;z-index:1}
.di-stage::before{content:'';position:absolute;inset:0;z-index:2;pointer-events:none;
  background:linear-gradient(180deg,transparent 0%,transparent 46%,var(--gA) 73%,var(--gB) 100%);
  transition:opacity .5s}
/* realm-flash overlay */
.di-flash{position:absolute;inset:0;z-index:3;pointer-events:none;opacity:0;
  transition:opacity 60ms ease}
.di-ghost{position:absolute;top:.3rem;right:1rem;z-index:4;
  font-family:var(--font-ds-mono,'Space Mono',monospace);font-weight:700;
  font-size:clamp(3.4rem,7vw,6rem);line-height:1;color:transparent;pointer-events:none;user-select:none;
  font-variant-numeric:tabular-nums;transition:opacity 150ms,transform 200ms var(--di-expo)}
.di-ghost.di-ghost-exit{opacity:0;transform:translateX(-16px)}
.di-ghost.di-ghost-enter{opacity:0;transform:translateX(16px)}

.di-layer{position:relative;z-index:5;will-change:transform}
.di-dept{font-family:var(--font-ds-mono,'Space Mono',monospace);font-size:10px;letter-spacing:.28em;
  text-transform:uppercase;color:var(--stDim);margin-bottom:1rem;display:flex;align-items:center;gap:.7rem;
  transition:color 600ms var(--di-expo)}
.di-dept::before{content:'';width:24px;height:1px;background:var(--stSig);flex-shrink:0;
  transition:background 600ms var(--di-expo)}
.di-head{font-family:var(--font-ds-display,'Bricolage Grotesque',sans-serif);font-weight:800;
  font-size:clamp(2.6rem,7vw,6.6rem);line-height:.85;letter-spacing:-.05em;text-transform:uppercase;
  max-width:13ch;font-variation-settings:'opsz' 96}
.di-ln{display:block;overflow:hidden;padding-bottom:.08em;margin-bottom:-.06em}
.di-wd{display:inline-block;transform:translateY(110%);
  transition:transform 880ms var(--di-expo),letter-spacing 600ms var(--di-expo)}
.di-stage.di-ready .di-wd{transform:none;letter-spacing:-.03em}
/* hot word costumes on stage */
.di-h1c{color:var(--stSig)}
.di-h2c{font-family:var(--font-ds-flair,'Instrument Serif',serif);font-style:italic;font-weight:400;
  text-transform:lowercase;letter-spacing:0;font-size:1.06em;color:var(--stSig)}
.di-h3c{box-shadow:inset 0 0 0 3px var(--stSig);padding:0 .1em}

/* chips */
.di-kids{display:flex;flex-wrap:wrap;gap:.5rem 1.1rem;margin-top:1.6rem;max-width:52ch}
.di-kids a{font-family:var(--font-ds-mono,'Space Mono',monospace);font-size:10px;letter-spacing:.14em;
  text-transform:uppercase;color:var(--stDim);text-decoration:none;opacity:0;
  transform:translateY(12px);position:relative;
  transition:opacity 470ms var(--di-expo),transform 550ms var(--di-expo),color 220ms}
.di-stage.di-ready .di-kids a{opacity:1;transform:none}
.di-kids a::after{content:'';position:absolute;left:0;right:0;bottom:-3px;height:1px;
  background:var(--stSig);transform:scaleX(0);transform-origin:right;
  transition:transform 420ms var(--di-expo)}
.di-kids a:hover{color:var(--stFg)}
.di-kids a:hover::after{transform:scaleX(1);transform-origin:left}

/* ── custom cursor ── */
.di-cur{position:fixed;width:7px;height:7px;border-radius:50%;background:var(--di-crim);
  pointer-events:none;z-index:9999;transform:translate(-50%,-50%);
  transition:width 400ms var(--di-expo),height 400ms var(--di-expo),
             background 300ms,border-color 300ms,opacity 300ms;opacity:0}
.di-cur.di-live{opacity:1}
.di-cur.di-big{width:44px;height:44px;background:transparent;border:1px solid var(--di-crim)}
@media(hover:none){.di-cur{display:none}}

/* ── explicit desktop grid positions ────────────────────────────────────────
   All reset to auto at ≤820px so cells flow into the 2-col grid naturally.
   .di-mat then wins its own grid-column:1/-1 rule (declared after the reset). */
.di-r2c1{grid-column:1;grid-row:2}
.di-r2c5{grid-column:5;grid-row:2}
.di-r3c1{grid-column:1;grid-row:3}
.di-r3c5{grid-column:5;grid-row:3}
.di-r4c1{grid-column:1;grid-row:4}
.di-r4c2{grid-column:2;grid-row:4}
.di-r4c3{grid-column:3;grid-row:4}
.di-r4c4{grid-column:4;grid-row:4}
.di-r4c5{grid-column:5;grid-row:4}

/* ── responsive ── */
@media(max-width:820px){
  /* reset explicit positions — items auto-flow in the 2-col mobile grid;
     .di-mat{grid-column:1/-1} below overrides this for mats (same specificity, later rule) */
  .di-r2c1,.di-r2c5,.di-r3c1,.di-r3c5,
  .di-r4c1,.di-r4c2,.di-r4c3,.di-r4c4,.di-r4c5{grid-column:auto;grid-row:auto}
  .di-frame{grid-template-columns:repeat(2,1fr);grid-template-rows:auto;gap:8px;padding:8px}
  .di-stage{grid-column:1/-1;grid-row:1;min-height:62vh;position:sticky;top:0;z-index:10}
  .di-cell{min-height:112px}
  .di-mat{grid-column:1/-1;min-height:76px;flex-direction:row;align-items:flex-end;justify-content:space-between}
  .di-head{font-size:clamp(2.7rem,12.5vw,4rem)}
  .di-nm{font-size:clamp(1.06rem,4.6vw,1.3rem)}
  .di-ghost{font-size:3rem;top:.5rem}
}
@media(prefers-reduced-motion:reduce){
  .oarc-di *{transition-duration:.01ms!important;animation:none!important}
  .di-wd{transform:none}
  .di-kids a{opacity:1;transform:none}
}
`;

// ─── component ────────────────────────────────────────────────────────────────
export default function OARCDepartmentIndex() {
  const sectionRef = useRef<HTMLElement>(null);
  const frameRef   = useRef<HTMLDivElement>(null);
  const stageRef   = useRef<HTMLElement>(null);
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const ghostRef   = useRef<HTMLSpanElement>(null);
  const flashRef   = useRef<HTMLDivElement>(null);
  const deptRef    = useRef<HTMLParagraphElement>(null);
  const headRef    = useRef<HTMLElement>(null);
  const kidsRef    = useRef<HTMLDivElement>(null);
  const curRef     = useRef<HTMLDivElement>(null);

  const [openDept, setOpenDept] = useState<string|null>(null);

  useEffect(() => {
    // Check all refs before capturing — TypeScript narrows .current to non-null after each check
    if (!sectionRef.current || !frameRef.current || !stageRef.current || !canvasRef.current ||
        !ghostRef.current  || !flashRef.current  || !deptRef.current  || !headRef.current  ||
        !kidsRef.current   || !curRef.current) return;

    // Capture after narrowing — all types are non-null here and TypeScript knows it in closures
    const section = sectionRef.current;
    const frame   = frameRef.current;
    const stage   = stageRef.current;
    const cvs     = canvasRef.current;
    const ghost   = ghostRef.current;
    const flash   = flashRef.current;
    const dept    = deptRef.current;
    const sHead   = headRef.current;
    const sKids   = kidsRef.current;
    const cur     = curRef.current;

    // getContext("2d") is never null for a real HTMLCanvasElement
    const ctx = cvs.getContext("2d") as CanvasRenderingContext2D;

    const reduce = window.matchMedia("(prefers-reduced-motion:reduce)").matches;
    const isTouch = window.matchMedia("(hover:none)").matches;
    const isFine  = window.matchMedia("(pointer:fine)").matches;

    let PAL: Pal = REALM.E;
    let active  = -1;
    let autoR   = true;
    let born    = 0;
    let W_ = 0, H_ = 0, CX = 0, CY = 0, MR = 0;
    let prevRealm: RealmKey = "E";
    let rafId   = 0;
    let autoId  = 0;
    const tids: ReturnType<typeof setTimeout>[] = [];

    const cells = Array.from(frame.querySelectorAll<HTMLElement>(".di-cell"));

    // ── canvas helpers ────────────────────────────────────────────────────────
    const dot  = (x:number,y:number,r:number,col:string,al=1) => { ctx.globalAlpha=al; ctx.beginPath(); ctx.arc(x,y,r,0,TAU); ctx.fillStyle=col; ctx.fill(); ctx.globalAlpha=1; };
    const ring = (x:number,y:number,r:number,col:string,w:number,al=1) => { ctx.globalAlpha=al; ctx.beginPath(); ctx.arc(x,y,r,0,TAU); ctx.strokeStyle=col; ctx.lineWidth=w; ctx.stroke(); ctx.globalAlpha=1; };
    const seg  = (x1:number,y1:number,x2:number,y2:number,col:string,w:number,al=1) => { ctx.globalAlpha=al; ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(x2,y2); ctx.strokeStyle=col; ctx.lineWidth=w; ctx.stroke(); ctx.globalAlpha=1; };
    const box  = (x:number,y:number,w:number,h:number,col:string) => { ctx.fillStyle=col; ctx.fillRect(x,y,w,h); };
    const star = (x:number,y:number,r:number,col:string) => {
      ctx.fillStyle=col; ctx.beginPath();
      for (let i=0;i<10;i++) { const a=i/10*TAU-Math.PI/2, rr=i%2?r*.42:r; ctx.lineTo(x+Math.cos(a)*rr, y+Math.sin(a)*rr); }
      ctx.closePath(); ctx.fill();
    };
    const arrow = (x1:number,y1:number,x2:number,y2:number,col:string,w:number) => {
      const a = Math.atan2(y2-y1,x2-x1), s=8;
      seg(x1,y1,x2,y2,col,w);
      ctx.beginPath(); ctx.moveTo(x2,y2);
      ctx.lineTo(x2-Math.cos(a-0.4)*s, y2-Math.sin(a-0.4)*s);
      ctx.lineTo(x2-Math.cos(a+0.4)*s, y2-Math.sin(a+0.4)*s);
      ctx.closePath(); ctx.fillStyle=col; ctx.fill();
    };

    // ── elevated pictograms ───────────────────────────────────────────────────
    type MarkFn = (x:number,y:number,R:number,T:number) => void;
    const MARK: Record<string, MarkFn> = {

      // Growth — converging network: 6 particles tracing bezier paths inward
      inflow(x,y,R,T){
        ring(x,y,R*.34,PAL.st(.10),1);
        for(let k=0;k<6;k++){
          const ph=(T*.38+k/6)%1, prog=easeOut(ph);
          const ang=k/6*TAU, sr=R*1.85, sx=x+Math.cos(ang)*sr, sy=y+Math.sin(ang)*sr;
          const cx1=x+Math.cos(ang)*R, cy1=y+Math.sin(ang)*R;
          const ex=x+Math.cos(ang+.3)*R*.18, ey=y+Math.sin(ang+.3)*R*.18;
          // trail
          for(let s=3;s>=0;s--){
            const tp=Math.max(0,prog-s*.06), tpx=3*tp*(1-tp)**2, tpy=3*tp**2*(1-tp), tpz=tp**3;
            const tx=tpx*sx+tpy*cx1+tpz*ex, ty=tpx*sy+tpy*cy1+tpz*ey;
            dot(tx,ty, s===0?3.5:1.5, s===0?PAL.sig:PAL.st(.4), Math.max(0,(1-s*.22)*(1-ph*.4)));
          }
        }
        const pulse=.72+.28*Math.sin(T*4);
        dot(x,y,7,PAL.sig,pulse); ring(x,y,R*.16,PAL.sig,.9,pulse*.5);
      },

      // Sales — forked lightning bolt with glow + electric flicker
      bolt(x,y,R,T){
        const f=.5+.5*Math.abs(Math.sin(T*3.8));
        ctx.save(); ctx.shadowColor=PAL.sig; ctx.shadowBlur=18*f;
        ctx.strokeStyle=PAL.sig; ctx.lineWidth=2.8; ctx.lineJoin="round"; ctx.lineCap="round";
        ctx.globalAlpha=f;
        // main bolt
        ctx.beginPath(); ctx.moveTo(x-R*.32,y-R); ctx.lineTo(x+R*.18,y-R*.1);
        ctx.lineTo(x-R*.12,y+R*.08); ctx.lineTo(x+R*.35,y+R); ctx.stroke();
        // fork branch at midpoint
        ctx.globalAlpha=f*.6; ctx.lineWidth=1.6;
        ctx.beginPath(); ctx.moveTo(x+R*.18,y-R*.1); ctx.lineTo(x+R*.65,y+R*.3); ctx.stroke();
        ctx.restore(); ctx.globalAlpha=1;
        // ambient glow dot
        dot(x-R*.12,y+R*.08, 4.5, PAL.sig, f*.8);
      },

      // Media — noisy signal smoothing into a clean return arrow
      resolve(x,y,R,T){
        const n=32;
        ctx.strokeStyle=PAL.st(.38); ctx.lineWidth=1.8; ctx.lineJoin="round";
        ctx.beginPath();
        for(let k=0;k<=n;k++){
          const t=k/n, X=x-R+2*R*t;
          const decay=Math.max(0,1-t*2.2);
          const Y = t<.45 ? y+Math.sin(t*26+T*4.5)*R*.42*decay : y-(t-.45)*2*R*.8;
          k===0 ? ctx.moveTo(X,Y) : ctx.lineTo(X,Y);
        }
        ctx.stroke();
        // return arrow at end
        const ex=x+R, ey=y-R*.72;
        arrow(ex-R*.18,ey+R*.18,ex,ey,PAL.sig,2.2);
        dot(x+R*.02,y,3,PAL.st(.5),.55);
      },

      // Creative — star rising on diagonal, comet trail behind it
      ascend(x,y,R,T){
        const ph=(T*.44)%1, prog=easeOut(ph);
        const x0=x-R*.95, y0=y+R*.95, x1=x+R*.95, y1=y-R*.95;
        const ex=x0+(x1-x0)*prog, ey=y0+(y1-y0)*prog;
        // comet tail (5 fading dots)
        for(let s=5;s>=1;s--){
          const tp=Math.max(0,prog-s*.08), ex2=x0+(x1-x0)*tp, ey2=y0+(y1-y0)*tp;
          dot(ex2,ey2, 1.8, PAL.st(.5), (1-s*.17)*.6);
        }
        seg(x0,y0,ex,ey,PAL.st(.32),1.4);
        star(ex,ey,5.5,PAL.sig);
        // sparkle at peak when near top
        if(prog>.85){ const sp=1-Math.abs(prog-.92)/.08; dot(ex,ey,9,PAL.sig,sp*.2); }
      },

      // Social — ripple rings + pulsing center + two orbiting satellites
      pulse(x,y,R,T){
        for(let k=0;k<3;k++){
          const ph=(T*.7+k/3)%1;
          ring(x,y, R*.18+ph*R*1.35, ph<.05?PAL.sig:PAL.st(.48), 1.4, (1-ph)*.9);
        }
        dot(x,y,7,PAL.sig,.9); ring(x,y,R*.12,PAL.sig,.8,.55);
        // two satellites
        [.7,-1.1].forEach((spd,i)=>{
          const a=T*spd+(i*Math.PI), sx=x+Math.cos(a)*R*.95, sy=y+Math.sin(a)*R*.48;
          dot(sx,sy, 3, PAL.st(.65), 1);
        });
      },

      // Reputation — broadcast semicircles expanding from a person mark
      reach(x,y,R,T){
        const oy=y+R*.5;
        // person glyph
        dot(x,oy-R*.72,4.5,PAL.sig,1);
        ctx.fillStyle=PAL.st(.5); ctx.beginPath();
        ctx.ellipse(x,oy-R*.42,R*.14,R*.22,0,0,TAU); ctx.fill();
        // broadcast arcs
        for(let k=0;k<3;k++){
          const ph=(T*.52+k/3)%1, rad=R*.28+ph*R*1.55;
          ctx.globalAlpha=(1-ph)*.8;
          ctx.beginPath(); ctx.arc(x,oy-R*.72,rad,Math.PI,0);
          ctx.strokeStyle=ph<.04?PAL.sig:PAL.st(.52); ctx.lineWidth=1.5; ctx.stroke();
          ctx.globalAlpha=1;
        }
      },

      // AI Staff — elliptical orbit with trail, two satellites
      orbit(x,y,R,T){
        // orbit ellipse guide
        ctx.globalAlpha=.12; ctx.beginPath();
        ctx.ellipse(x,y,R*.78,R*.38,-.15,0,TAU); ctx.strokeStyle=PAL.st(.8); ctx.lineWidth=1.2; ctx.stroke(); ctx.globalAlpha=1;
        // primary satellite + trail
        const a=T*1.1;
        for(let s=5;s>=0;s--){
          const ta=a-s*.08, sx=x+Math.cos(ta)*R*.78, sy=y+Math.sin(ta)*R*.38;
          dot(sx,sy, s===0?5:1.8, PAL.st(.7), Math.max(0,1-s*.18));
        }
        dot(x+Math.cos(a)*R*.78, y+Math.sin(a)*R*.38, 5, PAL.sig, 1);
        // secondary satellite at 180°
        const b=a+Math.PI;
        dot(x+Math.cos(b)*R*.78, y+Math.sin(b)*R*.38, 3, PAL.st(.5), .7);
        // core
        dot(x,y,6,PAL.sig,.9);
      },

      // Brand — drawing-O arc with variable thickness and completion glow
      markO(x,y,R,T){
        const ph=(T*.34)%1, a0=-Math.PI/2, a1=a0+ph*TAU;
        const grd=ctx.createLinearGradient(x-R*.7,y,x+R*.7,y);
        grd.addColorStop(0,PAL.st(.15)); grd.addColorStop(1,PAL.sig);
        ctx.strokeStyle=grd; ctx.lineWidth=2.6; ctx.lineCap="round";
        ctx.beginPath(); ctx.arc(x,y,R*.7,a0,a1); ctx.stroke();
        const ex=x+Math.cos(a1)*R*.7, ey=y+Math.sin(a1)*R*.7;
        dot(ex,ey,4.5,PAL.sig,1);
        if(ph>.9){ const g=(1-Math.abs(ph-.95)/.05); dot(x,y,R*.7,PAL.sig,g*.12); }
      },

      // Operations — 5 task bars; each clears and the final one stays (signal)
      lift(x,y,R,T){
        const n=5, bw=R*.22, gap=R*.2, Wt=n*bw+(n-1)*gap, x0=x-Wt/2, h=R*.92;
        const ph=(T*.42)%1;
        for(let k=0;k<n;k++){
          const keep=k===n-1, bx=x0+k*(bw+gap), cleared=!keep&&ph>(k/n*.75+.12);
          if(cleared){
            ctx.strokeStyle=PAL.st(.28); ctx.lineWidth=1;
            ctx.strokeRect(bx, y+R*.5-h, bw, h);
          } else {
            const barH=keep ? h : h*Math.min(1,(ph/(k/n*.75+.12+.001)*.8));
            box(bx, y+R*.5-barH, bw, barH, keep?PAL.sig:PAL.st(.42));
          }
        }
        // completion line
        seg(x0-2,y+R*.5-h, x0+Wt+2,y+R*.5-h, PAL.st(.18), 1);
      },

      // Clarity — rotating data needle with wake + trend markers
      flip(x,y,R,T){
        const a=Math.sin(T*1.2)*.72, dx=Math.cos(a)*R, dy=Math.sin(a)*R;
        // wake trail
        for(let s=3;s>=1;s--){
          const ta=Math.sin((T-s*.04)*1.2)*.72;
          seg(x-Math.cos(ta)*R, y-Math.sin(ta)*R, x+Math.cos(ta)*R, y+Math.sin(ta)*R,
              PAL.st(.18), 1.2, (1-s*.25));
        }
        seg(x-dx,y-dy, x+dx,y+dy, PAL.st(.42), 2.4);
        // markers
        [-.38,-.18,0,.18,.38].forEach((t)=>{
          const mk=x+t*2*R, mk2=y+Math.sin(Math.sin(T*1.2)*.72)*R*(t);
          dot(mk, y, 1.8, PAL.st(.32), .7);
        });
        dot(x-dx,y-dy, 4, PAL.st(.55), 1);
        dot(x+dx,y+dy, 5.5, PAL.sig, 1);
      },

      // Automation — smooth loop with arrowhead + second dot showing the cycle
      loop(x,y,R,T){
        ring(x,y,R*.7,PAL.st(.14),1.4);
        const a=T*1.3, ax=x+Math.cos(a)*R*.7, ay=y+Math.sin(a)*R*.7;
        // trail
        for(let s=4;s>=1;s--){
          const ta=a-s*.07, tx=x+Math.cos(ta)*R*.7, ty=y+Math.sin(ta)*R*.7;
          dot(tx,ty, 1.5, PAL.st(.6), 1-s*.22);
        }
        dot(ax,ay,5,PAL.sig,1);
        // arrowhead
        const ta2=a+Math.PI/2;
        ctx.fillStyle=PAL.sig; ctx.beginPath();
        ctx.moveTo(ax+Math.cos(ta2)*7, ay+Math.sin(ta2)*7);
        ctx.lineTo(ax+Math.cos(ta2-.55)*11, ay+Math.sin(ta2-.55)*11);
        ctx.lineTo(ax+Math.cos(ta2+.55)*11, ay+Math.sin(ta2+.55)*11);
        ctx.closePath(); ctx.fill();
        // second dot at 180° (cycle partner)
        const b=a+Math.PI;
        dot(x+Math.cos(b)*R*.7, y+Math.sin(b)*R*.7, 3, PAL.st(.48), .75);
        dot(x,y,5,PAL.sig,.88);
      },

      // Transformation — dots being progressively lit + connecting lines transform
      flip2(x,y,R,T){
        const n=7, ph=(T*.52)%1, lit=Math.floor(ph*n);
        for(let k=0;k<n;k++){
          const t=k/(n-1), xx=x-R+2*R*t, on=k<=lit, arriving=k===lit;
          if(k<n-1){
            const nx=x-R+2*R*(k+1)/(n-1);
            seg(xx+5,y, nx-5,y, on?PAL.sig:PAL.st(.22), on?1.8:1, on?.75:.45);
          }
          dot(xx,y, arriving?5.5+Math.sin(T*12)*.8:on?4:2.8,
              on?PAL.sig:PAL.st(.3), arriving?1:.85);
        }
        // small after-glow on just-lit dot
        if(lit<n){ const lx=x-R+2*R*lit/(n-1); dot(lx,y,10,PAL.sig,.08); }
      },
    };

    // ── canvas render ────────────────────────────────────────────────────────
    function draw() {
      ctx.clearRect(0,0,W_,H_); if(!MR) return;
      const d = DATA[active < 0 ? 0 : active]; if(!d || !MARK[d.m]) return;
      const app = Math.min(1,(performance.now()-born)/560), k=.92+.08*easeOut(app);
      ctx.save(); ctx.globalAlpha=easeOut(app);
      ctx.translate(CX,CY); ctx.scale(k,k); ctx.translate(-CX,-CY);
      MARK[d.m](CX,CY,MR,performance.now()/1000);
      ctx.restore();
    }

    function measure() {
      const dpr=Math.min(devicePixelRatio||1,2), r=stage.getBoundingClientRect(); if(!r.width) return;
      cvs.width=r.width*dpr; cvs.height=r.height*dpr; ctx.setTransform(dpr,0,0,dpr,0,0);
      W_=r.width; H_=r.height;
      CX=r.width*.5; CY=r.height*(r.width<820?.29:.32); MR=Math.min(r.width,r.height)*.155;
    }

    // ── realm setter — sets vars on section so CSS vars cascade ──────────────
    function setRealm(p: Pal, flash_=true) {
      PAL = p;
      section.style.setProperty("--stBg",  p.bg);
      section.style.setProperty("--stFg",  p.fg);
      section.style.setProperty("--stSig", p.sig);
      section.style.setProperty("--stDim", p.dim);
      section.style.setProperty("--gA",    p.gA);
      section.style.setProperty("--gB",    p.gB);
      ghost.style.webkitTextStroke = `1px ${p.ghost}`;
      // realm flash — skip entirely under reduced motion
      if(flash_ && !reduce) {
        flash.style.background = p.sig; flash.style.opacity = ".22";
        const t = setTimeout(()=>{ flash.style.opacity="0"; }, 80);
        tids.push(t);
      }
    }

    // ── ghost counter slide ──────────────────────────────────────────────────
    function slideGhost(num: string) {
      // under reduced motion: instant swap, no animation
      if(reduce) { ghost.textContent = num; return; }
      ghost.classList.add("di-ghost-exit");
      const t = setTimeout(()=>{
        ghost.textContent = num;
        ghost.classList.remove("di-ghost-exit");
        ghost.classList.add("di-ghost-enter");
        void ghost.offsetWidth; // force reflow
        ghost.style.transition="opacity 280ms var(--di-expo),transform 320ms var(--di-expo)";
        ghost.style.opacity="1"; ghost.style.transform="none";
        const t2=setTimeout(()=>{ ghost.classList.remove("di-ghost-enter"); ghost.style.transition=""; },320);
        tids.push(t2);
      }, 160);
      tids.push(t);
    }

    // ── show department ──────────────────────────────────────────────────────
    function show(i: number) {
      if(i===active) return;
      const d = DATA[i]; born = performance.now();
      stage.classList.remove("di-ready");
      // Clear chips immediately so the outgoing set never overlaps the incoming one.
      // The chip transition is 470ms fade-out; clearing instantly avoids the mismatch.
      sKids.innerHTML = "";
      const newRealm = REALM[d.r];
      const realmChanged = d.r !== prevRealm;
      setRealm(newRealm, realmChanged);
      if(realmChanged) prevRealm = d.r;
      const costume = newRealm.cost;
      slideGhost(("0"+(i+1)).slice(-2));
      active = i;
      cells.forEach((c,n)=>c.classList.toggle("di-on", n===i));

      const populate = () => {
        dept.textContent = d.k;
        sHead.innerHTML = d.h.split(" ").map((w,n)=>{
          const hot = w === d.hot;
          const delay = reduce ? 0 : n*78;
          return `<span class="di-ln"><span class="di-wd${hot?" "+costume:""}" style="transition-delay:${delay}ms;letter-spacing:-.05em">${w}</span></span>`;
        }).join(" ");
        sKids.innerHTML = d.c.map((c,n)=>`<a href="${d.u}" style="transition-delay:${reduce ? 0 : 290+n*46}ms">${c}</a>`).join("");
        stage.classList.add("di-ready");
      };

      // under reduced motion: update content immediately (no stagger), then draw the
      // pictogram once at full opacity by backdating born so app=1 in draw().
      if(reduce) {
        populate();
        born = performance.now() - 600; // backdate so draw() renders at full opacity
        draw();
      } else {
        const t=setTimeout(populate, 190); tids.push(t);
      }
    }

    // ── cell interactions ────────────────────────────────────────────────────
    cells.forEach((c) => {
      const i = parseInt(c.dataset.i ?? "0", 10);
      c.tabIndex = 0;
      const nmEl = c.querySelector<HTMLElement>(".di-nm");

      // magnetic pull
      const onMm = (e: MouseEvent) => {
        if(!nmEl) return;
        const r=c.getBoundingClientRect();
        const dx=(e.clientX-r.left)/r.width-.5, dy=(e.clientY-r.top)/r.height-.5;
        nmEl.style.transform = `translate(${dx*8}px,${dy*4}px)`;
      };
      const onMl = () => { nmEl && (nmEl.style.transform=""); };
      const onMe = (e: MouseEvent) => {
        const r=c.getBoundingClientRect();
        c.classList.toggle("di-from-top", e.clientY-r.top < r.height/2);
        show(i); autoR=false; cur.classList.add("di-big");
      };
      const onMlv = () => cur.classList.remove("di-big");
      const onClick = () => { show(i); autoR=false; };
      const onFocus = () => show(i);

      c.addEventListener("mousemove",  onMm);
      c.addEventListener("mouseleave", onMl);
      c.addEventListener("mouseenter", onMe);
      c.addEventListener("mouseleave", onMlv);
      c.addEventListener("click",      onClick);
      c.addEventListener("focus",      onFocus);
    });

    // ── stage parallax ───────────────────────────────────────────────────────
    const layers = Array.from(stage.querySelectorAll<HTMLElement>(".di-layer"));
    const onStageMm = (e: MouseEvent) => {
      const r=stage.getBoundingClientRect(), x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
      layers.forEach(l=>{ const dp=+(l.dataset.depth??0); l.style.transform=`translate3d(${-x*dp}px,${-y*dp*.6}px,0)`; });
    };
    if(!reduce && isFine) stage.addEventListener("mousemove", onStageMm);

    // ── section-scoped cursor ────────────────────────────────────────────────
    // Cursor is only active while the pointer is inside the section.
    // pointermove on window tracks position; pointerenter/leave toggle visibility.
    let cursorInSection = false;
    const onPm = (e: PointerEvent) => {
      if(!isTouch && cursorInSection){
        cur.style.transform=`translate(${e.clientX}px,${e.clientY}px) translate(-50%,-50%)`;
      }
    };
    const onSectionEnter = () => { if(!isTouch){ cursorInSection=true; cur.classList.add("di-live"); } };
    const onSectionLeave = () => { cursorInSection=false; cur.classList.remove("di-live"); };
    window.addEventListener("pointermove", onPm, {passive:true});
    section.addEventListener("pointerenter", onSectionEnter);
    section.addEventListener("pointerleave", onSectionLeave);

    // ── resize ───────────────────────────────────────────────────────────────
    let resizeT: ReturnType<typeof setTimeout>;
    const onResize = () => { clearTimeout(resizeT); resizeT=setTimeout(measure,140); };
    window.addEventListener("resize", onResize);

    // ── entrance observer ─────────────────────────────────────────────────────
    const io = new IntersectionObserver(([e])=>{
      if(e.isIntersecting){ frame.classList.add("di-up"); io.disconnect(); }
    }, {threshold:0.08});
    io.observe(frame);

    // ── init ─────────────────────────────────────────────────────────────────
    setRealm(REALM.E, false);
    show(0);
    measure();
    // under reduced motion: draw one static frame at full opacity after each measurement.
    // born is backdated inside show() so app=1; do it again here after measure() refines MR.
    if(reduce) { born = performance.now() - 600; draw(); }
    const t1=setTimeout(()=>{ measure(); if(reduce){ born=performance.now()-600; draw(); } }, 260);
    const t2=setTimeout(()=>{ measure(); if(reduce){ born=performance.now()-600; draw(); } }, 1100);
    tids.push(t1,t2);

    // auto-rotation and animation loop: disabled under reduced motion
    if(!reduce) {
      autoId = window.setInterval(()=>{ if(autoR && !document.hidden) show((active+1)%12); }, 4800);
      (function loop(){ draw(); rafId = requestAnimationFrame(loop); })();
    }

    return () => {
      cancelAnimationFrame(rafId);
      clearInterval(autoId);
      tids.forEach(clearTimeout);
      window.removeEventListener("pointermove", onPm);
      window.removeEventListener("resize", onResize);
      section.removeEventListener("pointerenter", onSectionEnter);
      section.removeEventListener("pointerleave", onSectionLeave);
      if(!reduce && isFine) stage.removeEventListener("mousemove", onStageMm);
      io.disconnect();
    };
  }, []);

  // ── JSX ───────────────────────────────────────────────────────────────────
  return (
    <section ref={sectionRef} className="oarc-di" aria-label="OARC departments" data-testid="oarc-department-index">
      {/* scoped styles */}
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      {/* ── Crawlable department nav — static <a> tags in initial HTML for Google ── */}
      <nav aria-label="Department pages" style={{position:"absolute",width:1,height:1,overflow:"hidden",clip:"rect(0,0,0,0)",whiteSpace:"nowrap",border:0}}>
        {DATA.map((d) => (
          <a key={d.k} href={d.u}>{d.k} — {d.h}</a>
        ))}
      </nav>

      {/* custom cursor — position:fixed, always atop viewport */}
      <div ref={curRef} className="di-cur" aria-hidden="true" />

      {/* 5×4 department grid */}
      <div ref={frameRef} className="di-frame" id="di-frame">

        {/* ── ROW 1 — MAKE MONEY (Engine) + Studio openers ── */}
        {DATA.slice(0,5).map((d,i)=>(
          <div key={i} className={`di-cell di-r${d.r}`} data-i={String(i)} tabIndex={0} onClick={()=>setOpenDept(d.k)}>
            <span className="di-k">{d.k}</span>
            <span className="di-wash" aria-hidden="true" />
            <span className="di-nm">
              {d.nm[0]}<em className={`di-${d.nm[1]}`}>{d.nm[2]}</em>{d.nm[3]}
            </span>
          </div>
        ))}

        {/* ── ROW 2, COL 1 — Reputation ── */}
        <div className="di-cell di-rS di-r2c1" data-i="5" tabIndex={0} onClick={()=>setOpenDept(DATA[5].k)}>
          <span className="di-k">{DATA[5].k}</span>
          <span className="di-wash" aria-hidden="true" />
          <span className="di-nm">
            {DATA[5].nm[0]}<em className={`di-${DATA[5].nm[1]}`}>{DATA[5].nm[2]}</em>{DATA[5].nm[3]}
          </span>
        </div>

        {/* ── THE STAGE — cols 2–4, rows 2–3 ── */}
        <section ref={stageRef} className="di-stage" id="di-stage" aria-label="Department stage" aria-live="polite">
          <canvas ref={canvasRef} aria-hidden="true" />
          {/* realm flash overlay */}
          <div ref={flashRef} className="di-flash" aria-hidden="true"
               style={{transition:"opacity 60ms ease"}} />
          {/* ghost number */}
          <span ref={ghostRef} className="di-ghost" aria-hidden="true">01</span>
          {/* content layers */}
          <div className="di-layer" data-depth="14">
            <p ref={deptRef} className="di-dept">Growth</p>
            <h2 ref={headRef as React.RefObject<HTMLHeadingElement>} className="di-head" />
          </div>
          <div className="di-layer" data-depth="7">
            <div ref={kidsRef} className="di-kids" />
          </div>
        </section>

        {/* ── ROW 2, COL 5 — AI Staff ── */}
        <div className="di-cell di-rM di-r2c5" data-i="6" tabIndex={0} onClick={()=>setOpenDept(DATA[6].k)}>
          <span className="di-k">{DATA[6].k}</span>
          <span className="di-wash" aria-hidden="true" />
          <span className="di-nm">
            {DATA[6].nm[0]}<em className={`di-${DATA[6].nm[1]}`}>{DATA[6].nm[2]}</em>{DATA[6].nm[3]}
          </span>
        </div>

        {/* ── ROW 3, COL 1 — Brand ── */}
        <div className="di-cell di-rS di-r3c1" data-i="7" tabIndex={0} onClick={()=>setOpenDept(DATA[7].k)}>
          <span className="di-k">{DATA[7].k}</span>
          <span className="di-wash" aria-hidden="true" />
          <span className="di-nm">
            {DATA[7].nm[0]}<em className={`di-${DATA[7].nm[1]}`}>{DATA[7].nm[2]}</em>{DATA[7].nm[3]}
          </span>
        </div>

        {/* ── ROW 3, COL 5 — mat (One team) ── */}
        <div className="di-mat di-r3c5">
          <span className="di-mat-big">One team</span>
          <span className="di-mat-lbl">Strategy → delivery</span>
        </div>

        {/* ── ROW 4 — RUN ITSELF (Machine), cols 1–4 ── */}
        {DATA.slice(8,12).map((d,i)=>{
          const colCls = ["di-r4c1","di-r4c2","di-r4c3","di-r4c4"][i];
          return (
            <div key={i+8} className={`di-cell di-r${d.r} ${colCls}`} data-i={String(i+8)} tabIndex={0} onClick={()=>setOpenDept(d.k)}>
              <span className="di-k">{d.k}</span>
              <span className="di-wash" aria-hidden="true" />
              <span className="di-nm">
                {d.nm[0]}<em className={`di-${d.nm[1]}`}>{d.nm[2]}</em>{d.nm[3]}
              </span>
            </div>
          );
        })}

        {/* ── ROW 4, COL 5 — mat (Malta) ── */}
        <div className="di-mat di-r4c5">
          <span className="di-mat-big">Malta</span>
          <span className="di-mat-lbl">Birkirkara</span>
        </div>

      </div>

      {/* ── Department detail modal — portal into document.body ── */}
      <DepartmentDetailModal
        dept={openDept}
        onClose={() => setOpenDept(null)}
      />
    </section>
  );
}
