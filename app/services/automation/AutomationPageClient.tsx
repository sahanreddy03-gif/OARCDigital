"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

// ── Machine realm tokens ──────────────────────────────────────────────────────
const C = {
  bg:   "#0B0C0D",
  fg:   "#F5F5F3",
  blue: "#2E5BE6",
  line: "rgba(245,245,243,.09)",
  dim:  "rgba(245,245,243,.6)",
  low:  "rgba(245,245,243,.4)",
  card: "rgba(245,245,243,.04)",
  cB:   "rgba(245,245,243,.12)",
  sg:   "var(--font-space-grotesk,'Space Grotesk',sans-serif)",
  jb:   "var(--font-jetbrains-mono,'JetBrains Mono',monospace)",
  sm:   "var(--font-space-mono,'Space Mono',monospace)",
  e:    "cubic-bezier(.16,1,.3,1)",
  grid: `repeating-linear-gradient(0deg,rgba(245,245,243,.035) 0 1px,transparent 1px 46px),
         repeating-linear-gradient(90deg,rgba(245,245,243,.035) 0 1px,transparent 1px 46px)`,
};

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion:reduce)").matches) return;
    el.style.opacity = "0"; el.style.transform = "translateY(18px)";
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.style.transition = `opacity .7s ${C.e} ${delay}ms, transform .7s ${C.e} ${delay}ms`;
        el.style.opacity = "1"; el.style.transform = "none";
        io.disconnect();
      }
    }, { threshold: .12 });
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return <div ref={ref}>{children}</div>;
}

function Kicker({ label }: { label: string }) {
  return (
    <div style={{ display:"flex", alignItems:"center", gap:".65rem", marginBottom:".9rem" }}>
      <span style={{ display:"block", width:24, height:1, background:C.fg, opacity:.35, flexShrink:0 }} />
      <span style={{ fontFamily:C.sm, fontSize:10, letterSpacing:".26em", textTransform:"uppercase" as const, color:C.low }}>
        {label}
      </span>
    </div>
  );
}

function PulseDot({ style }: { style?: React.CSSProperties }) {
  return (
    <span style={{
      position:"absolute", top:10, right:10, width:5, height:5, borderRadius:"50%",
      background:C.fg, opacity:.55, animation:"oarc-pulse 1.8s ease-out infinite", ...style,
    }} />
  );
}

const PHASES = [
  { n:"01", sp:"Integrations", h:"Everything", hl:"talks", tail:" to everything.",
    who:"Integrations team",
    cap:"Your bookings, your till, your inbox, your sheets, your ads — today they don't talk, so you're the glue, copying between them by hand. We wire them into one connected system so information moves on its own. The booking updates the calendar, the sale updates the stock, the lead lands in the CRM — no one lifting a finger.",
    stat:"1", statSfx:"", statP:"connected system where your tools were islands — no more copy-paste between apps" },
  { n:"02", sp:"Automation engineers", h:"Work", hl:"triggers", tail:" itself.",
    who:"Automation engineers",
    cap:"We set the rules once: when this happens, do that. A booking comes in → confirmation sent, reminder scheduled, table blocked. An invoice goes unpaid → a polite chase goes out on day three. The restaurant, the shop, the clinic — the busywork just happens, on time, every time.",
    stat:"30", statSfx:"%", statP:"of everyday work can run itself, hands-free" },
  { n:"03", sp:"AI, inside the flow", h:"The smart part is", hl:"handled.", tail:"",
    who:"AI team",
    cap:"Where a little judgement is needed, AI handles it inside the flow — sorting the message, drafting the reply, routing the lead to the right person, flagging the odd one out. Not a robot pretending to be you; just the small decisions made instantly, so nothing waits in a queue for someone to get to it.",
    stat:"80", statSfx:"%", statP:"of routine questions and tasks handled without a human touching them" },
  { n:"04", sp:"Always-on", h:"It runs while you", hl:"sleep.", tail:"",
    who:"The system",
    cap:"It doesn't take breaks, doesn't forget, doesn't call in sick. The follow-up still goes at 9pm, the reminder still fires on Sunday, the lead at 2am still gets an instant reply. The business keeps working when you've gone home.",
    stat:"24/7", statSfx:"", statP:"always running — never a dropped ball, never a forgotten follow-up" },
  { n:"05", sp:"Oversight", h:"You", hl:"watch", tail:" it, not run it.",
    who:"Support",
    cap:"You get one clear view of everything running — what fired, what's pending, what needs you. You step in only when you want, change a rule in a click, and otherwise let it run. The point isn't to remove you; it's to free you.",
    stat:"0", statSfx:"", statP:"things falling through the cracks — nothing waits on someone remembering" },
];

const VALUES = [
  { h:"Hours back, every week", body:"The manual busywork runs itself, so you get your time back for the work only you can do — not chasing, copying and reminding.", tag:"Your time back" },
  { h:"Nothing falls through", body:"Every follow-up, reminder, invoice and reply happens on time, without anyone having to remember it.", tag:"Zero dropped balls" },
  { h:"Served around the clock", body:"Leads answered and customers looked after while you sleep — you never lose one to a slow reply again.", tag:"Always on" },
  { h:"Fewer mistakes", body:"No typos, no missed steps, no double-entry — the system does it the same, correct way every single time.", tag:"No human error" },
  { h:"Grow without hiring", body:"Handle far more volume with the same team, because the extra work doesn't need extra hands.", tag:"Scale without headcount" },
];

const CLUSTERS = [
  { name:"Marketing",         items:["Post scheduling","Review requests","Retargeting triggers","Lead capture","Campaign automation","Win-back flows"] },
  { name:"Sales & CRM",       items:["Lead routing","Follow-up sequences","Missed-call callback","Quote generation","Pipeline updates","Deal alerts"] },
  { name:"Bookings & customers", items:["Confirmations","Reminders","No-show chasing","Feedback requests","Loyalty & rewards","Waitlists"] },
  { name:"Finance & admin",   items:["Invoicing","Payment reminders","Receipts","Expense sync","Reporting","Payroll prep"] },
  { name:"Operations",        items:["Stock alerts","Reorder triggers","Supplier orders","Rota & scheduling","Task assignment","Checklists"] },
  { name:"Data & reporting",  items:["Tool-to-tool sync","Dashboards","Weekly reports","Anomaly alerts","Backups","Data cleanup"] },
];

const FAQS = [
  { q:"What does automation actually do for me?",
    a:"It connects your tools and makes the repetitive work happen by itself — confirmations, reminders, follow-ups, invoicing, reporting — on time, 24/7, without anyone remembering to do it." },
  { q:"Will it replace my staff?",
    a:"No. It removes the busywork so your team can do the work only people can do, and lets you handle far more volume without hiring more hands." },
  { q:"Where does AI come in?",
    a:"AI handles the small judgement calls inside a workflow — sorting a message, drafting a reply, routing a lead — so nothing waits in a queue. It's one tool inside the automation, not the point." },
  { q:"Are you an AI company?",
    a:"No. We're the team that makes your business run itself. AI is one of the tools we use inside that, not the pitch." },
];

const SEC: React.CSSProperties = { padding:"2.8rem 22px", borderTop:`1px solid rgba(245,245,243,.09)` };

const ORBIT_SVG = `<svg viewBox="0 0 400 300" style="width:100%;display:block;overflow:visible">
  <circle fill="none" stroke="rgba(245,245,243,.18)" stroke-width="1.5" cx="200" cy="150" r="92"/>
  <circle fill="none" stroke="rgba(245,245,243,.35)" stroke-width="1.5" cx="200" cy="150" r="30"/>
  <circle fill="#F5F5F3" cx="200" cy="150" r="16"/>
  <text font-family="JetBrains Mono,monospace" font-weight="800" fill="#0B0C0D" font-size="9" text-anchor="middle" x="200" y="154">auto</text>
  ${["Lead in","Reply","Book","Remind","Invoice","Review"].map((nm,i)=>{
    const a=-Math.PI/2+i/6*Math.PI*2,x=200+Math.cos(a)*92,y=150+Math.sin(a)*92;
    const lx=200+Math.cos(a)*108,ly=150+Math.sin(a)*108;
    const anchor=Math.cos(a)>.25?'start':(Math.cos(a)<-.25?'end':'middle');
    return `<circle fill="#F5F5F3" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="6"/>
            <text font-family="JetBrains Mono,monospace" fill="rgba(245,245,243,.7)" font-size="10" text-anchor="${anchor}" x="${lx.toFixed(1)}" y="${(ly+4).toFixed(1)}">${nm}</text>`;
  }).join('')}
</svg>`;

export default function AutomationPageClient() {
  return (
    <main style={{ background:C.bg, color:C.fg, fontFamily:C.sg, WebkitFontSmoothing:"antialiased", overflowX:"hidden", position:"relative" }}>
      <style>{`@keyframes oarc-pulse{0%{box-shadow:0 0 0 0 rgba(245,245,243,.35)}100%{box-shadow:0 0 0 8px rgba(245,245,243,0)}}`}</style>
      <div style={{ position:"fixed", inset:0, zIndex:0, pointerEvents:"none", backgroundImage:C.grid, opacity:.7 }} />

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section style={{ position:"relative", zIndex:1, padding:"3.6rem 22px 2.4rem", borderBottom:`1px solid ${C.line}` }}>
        <Kicker label="AI and automation" />
        <h1 style={{ fontFamily:C.sg, fontWeight:700, fontSize:"clamp(2.8rem,12vw,4.6rem)", lineHeight:.94, letterSpacing:"-.035em", marginTop:"1.1rem", maxWidth:"12ch" }}>
          The business that<br />
          <span style={{ position:"relative", display:"inline-block" }}>
            runs itself.
            <span style={{ position:"absolute", inset:"-.05em -.12em", border:`1px solid ${C.line}`, borderRadius:4, pointerEvents:"none" }} />
          </span>
        </h1>
        <p style={{ fontFamily:C.jb, fontSize:"11.5px", lineHeight:1.85, color:C.dim, marginTop:"1.3rem", maxWidth:"40ch" }}>
          Everything connected, the busywork triggering itself, the smart calls handled — running 24/7 while you watch it work.{" "}
          <strong style={{ color:C.fg, fontWeight:700 }}>Not more staff. A business that needs fewer hands to run.</strong>
        </p>
        {/* orbit diagram */}
        <div style={{ marginTop:"2rem", border:`1px solid ${C.line}`, borderRadius:14, background:"rgba(245,245,243,.02)", padding:"1.3rem 1rem 1rem" }}>
          <div style={{ fontFamily:C.jb, fontSize:"9.5px", letterSpacing:".06em", textTransform:"uppercase" as const, color:C.low, marginBottom:".4rem", textAlign:"center" }}>
            One engine — always running
          </div>
          <div dangerouslySetInnerHTML={{ __html: ORBIT_SVG }} />
        </div>
        {/* team tags */}
        <div style={{ marginTop:"1.7rem" }}>
          <span style={{ fontFamily:C.jb, fontSize:"9.5px", letterSpacing:".05em", textTransform:"uppercase" as const, color:C.low }}>The people on it</span>
          <div style={{ display:"flex", flexWrap:"wrap" as const, gap:6, marginTop:".7rem" }}>
            {["Automation engineers","Integrations","AI","Support"].map((t,i) => (
              <span key={i} style={{ border:`1px solid ${C.line}`, padding:"6px 10px", fontSize:11, color:C.dim, borderRadius:2 }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHASES ────────────────────────────────────────────────────────────── */}
      <div style={{ padding:"0 0 .4rem" }}>
        <div style={{ padding:"1.7rem 22px .4rem", fontFamily:C.jb, fontSize:10, letterSpacing:".05em", textTransform:"uppercase" as const, color:C.low, display:"flex", alignItems:"center", gap:".8rem", position:"relative", zIndex:1 }}>
          How it runs
          <span style={{ flex:1, height:1, background:C.line, display:"block" }} />
        </div>
        {PHASES.map((p, i) => (
          <Reveal key={i}>
            <section style={{ ...SEC, position:"relative", zIndex:1 }}>
              <div style={{ display:"flex", alignItems:"baseline", gap:".6rem" }}>
                <span style={{ fontFamily:C.jb, fontSize:"10.5px", fontWeight:500, color:C.low }}>{p.n}</span>
                <span style={{ fontFamily:C.jb, fontSize:10, letterSpacing:".04em", textTransform:"uppercase" as const, color:"rgba(245,245,243,.35)" }}>{p.sp}</span>
              </div>
              <h2 style={{ fontFamily:C.sg, fontWeight:700, fontSize:"clamp(2rem,8.2vw,2.6rem)", lineHeight:1, letterSpacing:"-.035em", marginTop:"1rem" }}>
                {p.h} <span style={{ color:C.fg }}>{p.hl}</span>{p.tail}
              </h2>
              <p style={{ fontFamily:C.jb, fontSize:"11px", lineHeight:1.8, color:C.dim, marginTop:".8rem", maxWidth:"44ch" }}>→ {p.who}</p>
              <p style={{ fontFamily:C.jb, fontSize:".88rem", lineHeight:1.65, color:C.dim, marginTop:".6rem", maxWidth:"48ch" }}>{p.cap}</p>
              <div style={{ marginTop:"1.1rem", display:"flex", alignItems:"baseline", gap:".7rem", paddingTop:"1rem", borderTop:`1px solid ${C.line}` }}>
                <b style={{ fontFamily:C.jb, fontWeight:800, fontVariantNumeric:"tabular-nums", fontSize:"clamp(1.9rem,8.6vw,2.5rem)", letterSpacing:"-.03em", lineHeight:.9, color:C.fg }}>
                  {p.stat}{p.statSfx && <em style={{ fontStyle:"normal", fontSize:".5em", color:C.low }}>{p.statSfx}</em>}
                </b>
                <p style={{ fontFamily:C.jb, fontSize:"11.5px", color:C.low, lineHeight:1.4, maxWidth:"26ch" }}>{p.statP}</p>
              </div>
            </section>
          </Reveal>
        ))}
      </div>

      {/* ── VALUE ROWS ────────────────────────────────────────────────────────── */}
      <Reveal>
        <section style={{ padding:"0 22px 1rem", position:"relative", zIndex:1 }}>
          <div style={{ padding:"1.7rem 0 .4rem", fontFamily:C.jb, fontSize:10, letterSpacing:".05em", textTransform:"uppercase" as const, color:C.low, display:"flex", alignItems:"center", gap:".8rem" }}>
            What it&apos;s worth to you
            <span style={{ flex:1, height:1, background:C.line, display:"block" }} />
          </div>
          {VALUES.map((v, i) => (
            <div key={i} style={{ display:"flex", gap:".9rem", padding:"1.1rem 0", borderTop: i===0 ? "none" : `1px solid ${C.line}` }}>
              <div style={{ fontFamily:C.jb, fontSize:".85rem", color:C.low, flexShrink:0, width:"1.8rem", lineHeight:1.7 }}>0{i+1}</div>
              <div>
                <h4 style={{ fontFamily:C.sg, fontWeight:700, fontSize:"1.22rem", letterSpacing:"-.02em", lineHeight:1.12 }}>{v.h}</h4>
                <p style={{ fontFamily:C.jb, fontSize:".9rem", color:C.dim, lineHeight:1.55, marginTop:".35rem" }}>{v.body}</p>
                <span style={{ display:"inline-block", marginTop:".55rem", fontFamily:C.jb, fontSize:"9px", letterSpacing:".04em", textTransform:"uppercase" as const, color:C.low, border:`1px solid ${C.cB}`, padding:"4px 9px", borderRadius:2 }}>{v.tag}</span>
              </div>
            </div>
          ))}
        </section>
      </Reveal>

      {/* ── CLUSTERS ──────────────────────────────────────────────────────────── */}
      <Reveal>
        <section style={{ padding:"0 22px 1.2rem", position:"relative", zIndex:1 }}>
          <div style={{ padding:"1.7rem 0 .4rem", fontFamily:C.jb, fontSize:10, letterSpacing:".05em", textTransform:"uppercase" as const, color:C.low, display:"flex", alignItems:"center", gap:".8rem" }}>
            Everything it runs — one system
            <span style={{ flex:1, height:1, background:C.line, display:"block" }} />
          </div>
          {CLUSTERS.map((cl, ci) => (
            <div key={ci} style={{ padding:"1.15rem 0", borderTop: ci===0 ? "none" : `1px solid ${C.line}` }}>
              <h5 style={{ display:"flex", alignItems:"baseline", gap:".55rem", fontFamily:C.jb, fontSize:"10.5px", letterSpacing:".04em", textTransform:"uppercase" as const, color:C.low }}>
                <span style={{ color:"rgba(245,245,243,.26)" }}>0{ci+1}</span>{cl.name}
              </h5>
              <div style={{ display:"flex", flexWrap:"wrap" as const, gap:6, marginTop:".75rem" }}>
                {cl.items.map((item, ii) => (
                  <span key={ii} style={{ border:`1px solid ${C.line}`, background:C.card, padding:"6px 10px", fontSize:"11.5px", color:C.dim, borderRadius:2 }}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </section>
      </Reveal>

      {/* ── FAQs ─────────────────────────────────────────────────────────────── */}
      <Reveal>
        <section style={{ ...SEC, position:"relative", zIndex:1 }}>
          <Kicker label="Questions owners ask" />
          <div style={{ marginTop:"1.4rem" }}>
            {FAQS.map((f, i) => (
              <div key={i} style={{ borderTop: i===0 ? "none" : `1px solid ${C.line}`, padding:"1.05rem 0" }}>
                <b style={{ fontFamily:C.sg, fontWeight:700, fontSize:"1rem", letterSpacing:"-.015em", display:"block" }}>{f.q}</b>
                <p style={{ fontFamily:C.jb, fontSize:".72rem", lineHeight:1.75, color:C.dim, marginTop:".5rem", maxWidth:"44ch" }}>{f.a}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* ── CLOSE ────────────────────────────────────────────────────────────── */}
      <section style={{ padding:"3.4rem 22px 5rem", borderTop:`1px solid ${C.line}`, position:"relative", zIndex:1 }}>
        <Kicker label="Automation" />
        <h2 style={{ fontFamily:C.sg, fontWeight:700, fontSize:"clamp(2.6rem,11vw,3.7rem)", lineHeight:1, letterSpacing:"-.04em", maxWidth:"12ch" }}>
          Fewer hands.<br />
          <span style={{ position:"relative", display:"inline-block" }}>
            More business.
            <span style={{ position:"absolute", left:0, bottom:"-.1em", width:"100%", height:1, background:C.fg, opacity:.25 }} />
          </span>
        </h2>
        <p style={{ fontFamily:C.jb, fontSize:".88rem", color:C.dim, lineHeight:1.62, maxWidth:"46ch", marginTop:"1rem" }}>
          Your tools connected, the busywork triggering itself, the smart calls handled, running around the clock — while you oversee it in one view.{" "}
          <strong style={{ color:C.fg, fontWeight:700 }}>The point isn't to remove you. It's to free you.</strong>
        </p>
        <Link
          href="/contact"
          style={{ display:"block", marginTop:"1.4rem", textAlign:"center", fontFamily:C.jb, fontSize:"11.5px", letterSpacing:".02em", textTransform:"uppercase", color:C.bg, background:C.blue, textDecoration:"none", padding:"1.15rem", borderRadius:6, fontWeight:700 }}
        >
          See what we&apos;d automate first →
        </Link>
        <div style={{ marginTop:"2rem", fontFamily:C.jb, fontSize:"10px", color:"rgba(245,245,243,.26)", letterSpacing:".02em" }}>
          OARC — one team for the whole business. Malta.
        </div>
      </section>
    </main>
  );
}
