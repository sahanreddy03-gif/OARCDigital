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

function PulseDot() {
  return (
    <span style={{
      position:"absolute", top:10, right:10, width:5, height:5, borderRadius:"50%",
      background:C.fg, opacity:.55, animation:"oarc-pulse 1.8s ease-out infinite",
    }} />
  );
}

const LIFECYCLE_STAGES = [
  { h:"Discover",  body:"Found on Google, Maps and AI answers — before competitors." },
  { h:"Book",      body:"Reservations taken, confirmed and reminded — no-shows refilled." },
  { h:"Order",     body:"QR menus in the guest's language. Straight to the kitchen — zero mishears." },
  { h:"Serve",     body:"Kitchen display runs the line. Kiosk takes the queue. Staff serve, not type." },
  { h:"Pay",       body:"Fast checkout, tips included, tills that reconcile themselves." },
  { h:"Review",    body:"5★ captured at the table, replies drafted — reputation compounds." },
  { h:"Return",    body:"Loyalty passes and win-back nudges bring them back through the door." },
];

const MODULES = [
  { id:"MENU",    body:"Multilingual QR ordering — guests order in their own language." },
  { id:"KITCHEN", body:"Live display that sequences the line and kills lost tickets." },
  { id:"KIOSK",   body:"Self-order touchscreen that eats the queue at peak." },
  { id:"DESK",    body:"Owner dashboard — sales, staff, stock, one screen, nightly." },
  { id:"TABLE",   body:"Review capture + loyalty passes, scanned at the till." },
  { id:"BRIDGE",  body:"Connects your POS, payments and printers — nothing replaced by force." },
];

const PRINCIPLES = [
  { n:"01", h:"Working software in week one",
    body:"You see it running in your venue, not in a slide. The pilot is the product." },
  { n:"02", h:"You own everything",
    body:"Code, data, accounts — yours. No licence hostage, no vendor tickets, no exit fee." },
  { n:"03", h:"ROI counted in weeks",
    body:"Every stage has a number attached — orders, covers, reviews, hours saved. If it doesn't move a number, it doesn't ship." },
];

const BUILD_PHASES = [
  { n:"01", sp:"Discovery",       h:"We learn how it", hl:"really runs.",
    cap:"Before a line of code, we map your real workflows — the WhatsApp threads, the spreadsheet everyone depends on, the step only one person knows. Most transformations fail here. We don't.",
    stat:"70", statSfx:"%", statP:"of transformations fail — almost always because no one mapped how the business really runs first" },
  { n:"02", sp:"Product & design", h:"Built for you,", hl:"not a template.",
    cap:"Off-the-shelf tools make you bend your business to their shape. We do the opposite — design around how you actually work, so staff adopt in a day.",
    stat:"0", statSfx:"", statP:"templates — built to your workflow, not you bent to someone else's" },
  { n:"03", sp:"Engineering",     h:"Live in weeks,", hl:"not years.",
    cap:"We ship the smallest thing that works — the one screen, the one flow that moves the needle — live in weeks, then improve it with you in the open.",
    stat:"6", statSfx:"weeks", statP:"to a working first version in your hands — not a year of promises" },
  { n:"04", sp:"Integrations",   h:"It plugs into what", hl:"you have.",
    cap:"Your new system sits on top of the rails you already run — your POS, Stripe, your sheets, your calendar — pulling them into one place instead of replacing them.",
    stat:"1", statSfx:"", statP:"system on your POS, Stripe and existing tools — no rip-and-replace" },
  { n:"05", sp:"Support",        h:"You own", hl:"it.",
    cap:"Your software — the code, the data, no lock-in. And it's a living system: we stay and evolve it as the business grows, so it never becomes the old thing you're stuck with.",
    stat:"100", statSfx:"%", statP:"yours: the code, the data, no lock-in — and we keep improving it" },
];

const METRICS = [
  { stat:"7d",   label:"First ship" },
  { stat:"100%", label:"Owned by you" },
  { stat:"4+",   label:"Languages served" },
  { stat:"24/7", label:"System uptime" },
];

const FAQS = [
  { q:"Do we have to replace our POS?",
    a:"No. We bridge into what you run. Replacement only happens when the numbers prove it's worth it — your call." },
  { q:"Who owns the system afterwards?",
    a:"You do. Code, data and accounts are handed over — we stay because the work is good, not because you're locked in." },
  { q:"How disruptive is the rollout?",
    a:"One stage at a time, quiet hours, staff trained in minutes per tool. Service never stops for the rebuild." },
  { q:"Is this off-the-shelf software?",
    a:"No. We build custom software designed around how your business actually works — plus we have production-tested platforms already running in Malta venues that we configure and integrate for you." },
  { q:"How long until ROI?",
    a:"First working software ships in seven days. Every stage has a number attached. If it doesn't move a number, it doesn't ship." },
];

const SEC: React.CSSProperties = { padding:"2.8rem 22px", borderTop:`1px solid rgba(245,245,243,.09)` };

export default function TransformationPageClient() {
  return (
    <main style={{ background:C.bg, color:C.fg, fontFamily:C.sg, WebkitFontSmoothing:"antialiased", overflowX:"hidden", position:"relative" }}>
      <style>{`@keyframes oarc-pulse{0%{box-shadow:0 0 0 0 rgba(245,245,243,.35)}100%{box-shadow:0 0 0 8px rgba(245,245,243,0)}}`}</style>
      <div style={{ position:"fixed", inset:0, zIndex:0, pointerEvents:"none", backgroundImage:C.grid, opacity:.7 }} />

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section style={{ position:"relative", zIndex:1, padding:"3.6rem 22px 2.8rem" }}>
        <Kicker label="Transformation — dept 09" />
        <h1 style={{ fontFamily:C.sg, fontWeight:700, fontSize:"clamp(2.8rem,12vw,4.6rem)", lineHeight:.94, letterSpacing:"-.035em", marginTop:"1.1rem", maxWidth:"11ch" }}>
          Change how it{" "}
          <span style={{ position:"relative", display:"inline-block" }}>
            runs.
            <span style={{ position:"absolute", inset:"-.05em -.12em", border:`1px solid ${C.line}`, borderRadius:4, pointerEvents:"none" }} />
          </span>
        </h1>
        <p style={{ fontFamily:C.jb, fontSize:"11.5px", lineHeight:1.85, color:C.dim, marginTop:"1.3rem", maxWidth:"38ch" }}>
          Production-ready transformation,{" "}
          <strong style={{ color:C.fg, fontWeight:700 }}>not decks.</strong>{" "}
          We rebuild how your business operates on systems we&apos;ve already built, already running in Malta venues tonight.
        </p>
      </section>

      {/* ── LIFECYCLE RAIL ────────────────────────────────────────────────────── */}
      <Reveal>
        <section style={{ ...SEC, position:"relative", zIndex:1 }}>
          <Kicker label="The whole lifecycle — one system" />
          <h2 style={{ fontFamily:C.sg, fontWeight:700, fontSize:"clamp(1.8rem,7.8vw,2.6rem)", letterSpacing:"-.03em", lineHeight:.98, marginTop:"1rem", maxWidth:"16ch" }}>
            Every step a guest takes,{" "}
            <span style={{ color:C.fg }}>automated.</span>
          </h2>
          <p style={{ fontFamily:C.jb, fontSize:"11px", lineHeight:1.8, color:C.dim, marginTop:"1rem", maxWidth:"44ch" }}>
            Others automate a step. We run the{" "}
            <strong style={{ color:C.fg, fontWeight:700 }}>entire journey</strong>{" "}
            — and every stage feeds the next.
          </p>
          {/* Rail */}
          <div style={{ marginTop:"1.6rem", position:"relative", paddingLeft:"1.15rem" }}>
            <span style={{ position:"absolute", left:3, top:8, bottom:8, width:1, background:`linear-gradient(180deg,${C.fg},${C.cB})`, display:"block" }} />
            {LIFECYCLE_STAGES.map((s, i) => (
              <div key={i} style={{ position:"relative", padding:".8rem 0 .8rem .6rem" }}>
                <span style={{ position:"absolute", left:"-1.15rem", top:"1.25rem", width:7, height:7, borderRadius:"50%", background:C.fg, display:"block" }} />
                <b style={{ fontFamily:C.jb, fontWeight:800, fontSize:".82rem", letterSpacing:".08em", textTransform:"uppercase" as const, color:C.fg }}>{s.h}</b>
                <span style={{ display:"block", fontFamily:C.jb, fontSize:".7rem", lineHeight:1.65, color:C.dim, marginTop:".3rem", maxWidth:"40ch" }}>{s.body}</span>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* ── PLATFORM MODULES ──────────────────────────────────────────────────── */}
      <Reveal>
        <section style={{ ...SEC, position:"relative", zIndex:1 }}>
          <Kicker label="The platform — ours, in production" />
          <h2 style={{ fontFamily:C.sg, fontWeight:700, fontSize:"clamp(1.8rem,7.8vw,2.6rem)", letterSpacing:"-.03em", lineHeight:.98, marginTop:"1rem", maxWidth:"14ch" }}>
            Not bought.{" "}
            <span style={{ color:C.fg }}>Built.</span>
          </h2>
          <p style={{ fontFamily:C.jb, fontSize:"11px", lineHeight:1.8, color:C.dim, marginTop:"1rem", maxWidth:"44ch" }}>
            These aren&apos;t licensed tools with our sticker on them.{" "}
            <strong style={{ color:C.fg, fontWeight:700 }}>We engineered the stack</strong>{" "}
            — so when you need it to bend, we bend it.
          </p>
          <div style={{ marginTop:"1.5rem", display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
            {MODULES.map((m, i) => (
              <div key={i} style={{ border:`1px solid ${C.cB}`, borderRadius:8, padding:".95rem .9rem", background:C.card, position:"relative" }}>
                <PulseDot />
                <b style={{ display:"block", fontFamily:C.jb, fontWeight:800, fontSize:".86rem", letterSpacing:".04em", color:C.fg }}>{m.id}</b>
                <span style={{ display:"block", fontFamily:C.jb, fontSize:".66rem", lineHeight:1.55, color:C.dim, marginTop:".4rem" }}>{m.body}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop:"1rem", fontFamily:C.jb, fontSize:"9px", letterSpacing:".16em", textTransform:"uppercase" as const, color:C.low, display:"flex", alignItems:"center", gap:".55rem" }}>
            <span style={{ width:6, height:6, borderRadius:"50%", background:C.fg, opacity:.5, animation:"oarc-pulse 1.8s ease-out infinite", display:"inline-block" }} />
            In production across Malta venues right now
          </div>
        </section>
      </Reveal>

      {/* ── ANTI-CONSULTANCY PRINCIPLES ───────────────────────────────────────── */}
      <Reveal>
        <section style={{ ...SEC, position:"relative", zIndex:1 }}>
          <Kicker label="How we work — the anti-consultancy" />
          <h2 style={{ fontFamily:C.sg, fontWeight:700, fontSize:"clamp(1.8rem,7.8vw,2.6rem)", letterSpacing:"-.03em", lineHeight:.98, marginTop:"1rem", maxWidth:"14ch" }}>
            Shipped, not{" "}
            <span style={{ color:C.fg }}>advised.</span>
          </h2>
          <div style={{ marginTop:"1.5rem" }}>
            {PRINCIPLES.map((p, i) => (
              <div key={i} style={{ display:"flex", gap:"1rem", padding:"1.05rem 0", borderTop: i===0 ? "none" : `1px solid ${C.line}` }}>
                <span style={{ fontFamily:C.jb, fontWeight:800, color:C.fg, width:"1.6rem", flexShrink:0, paddingTop:".15rem", opacity:.55 }}>{p.n}</span>
                <div>
                  <h3 style={{ fontFamily:C.sg, fontWeight:700, fontSize:"1.15rem", letterSpacing:"-.02em" }}>{p.h}</h3>
                  <p style={{ fontFamily:C.jb, fontSize:".72rem", lineHeight:1.7, color:C.dim, marginTop:".3rem", maxWidth:"40ch" }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* ── METRIC WALL ──────────────────────────────────────────────────────── */}
      <Reveal>
        <section style={{ ...SEC, position:"relative", zIndex:1 }}>
          <Kicker label="Proof — speed & scale" />
          <h2 style={{ fontFamily:C.sg, fontWeight:700, fontSize:"clamp(1.8rem,7.8vw,2.6rem)", letterSpacing:"-.03em", lineHeight:.98, marginTop:"1rem", maxWidth:"14ch" }}>
            Clockspeed,{" "}
            <span style={{ color:C.fg }}>measured.</span>
          </h2>
          <div style={{ marginTop:"1.5rem", display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
            {METRICS.map((m, i) => (
              <div key={i} style={{ border:`1px solid ${C.cB}`, borderRadius:8, padding:"1.05rem .95rem", background:C.card, position:"relative" }}>
                <PulseDot />
                <b style={{ display:"block", fontFamily:C.jb, fontWeight:800, fontVariantNumeric:"tabular-nums", fontSize:"clamp(1.7rem,8.4vw,2.5rem)", lineHeight:1, letterSpacing:"-.03em", color:C.fg }}>{m.stat}</b>
                <span style={{ display:"block", fontFamily:C.jb, fontSize:"7.5px", letterSpacing:".16em", textTransform:"uppercase" as const, color:C.low, marginTop:".5rem" }}>{m.label}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop:"1.2rem", border:`1px dashed ${C.cB}`, borderRadius:8, padding:"1.15rem 1.05rem" }}>
            <b style={{ fontFamily:C.jb, fontWeight:700, fontSize:".8rem", letterSpacing:".04em", color:C.fg }}>Fits what you already run.</b>
            <p style={{ fontFamily:C.jb, fontSize:".72rem", lineHeight:1.75, color:C.dim, marginTop:".5rem", maxWidth:"44ch" }}>
              POS, card terminals, printers, calendars — we integrate first, replace only what's costing you money. Your staff learn nothing new unless it saves them time.
            </p>
          </div>
        </section>
      </Reveal>

      {/* ── SOFTWARE BUILD PHASES ─────────────────────────────────────────────── */}
      <div style={{ padding:"1.7rem 22px .4rem", fontFamily:C.jb, fontSize:10, letterSpacing:".05em", textTransform:"uppercase" as const, color:C.low, display:"flex", alignItems:"center", gap:".8rem", position:"relative", zIndex:1 }}>
        How we build the change
        <span style={{ flex:1, height:1, background:C.line, display:"block" }} />
      </div>

      {BUILD_PHASES.map((p, i) => (
        <Reveal key={i}>
          <section style={{ ...SEC, position:"relative", zIndex:1 }}>
            <div style={{ display:"flex", alignItems:"baseline", gap:".6rem", marginBottom:".6rem" }}>
              <span style={{ fontFamily:C.jb, fontSize:"10.5px", fontWeight:500, color:C.low }}>{p.n}</span>
              <span style={{ fontFamily:C.jb, fontSize:10, letterSpacing:".04em", textTransform:"uppercase" as const, color:"rgba(245,245,243,.3)" }}>{p.sp}</span>
            </div>
            <h2 style={{ fontFamily:C.sg, fontWeight:700, fontSize:"clamp(2rem,8.2vw,2.6rem)", lineHeight:1, letterSpacing:"-.035em" }}>
              {p.h} <span style={{ color:C.fg }}>{p.hl}</span>
            </h2>
            <p style={{ fontFamily:C.jb, fontSize:".88rem", lineHeight:1.65, color:C.dim, marginTop:".8rem", maxWidth:"46ch" }}>{p.cap}</p>
            <div style={{ marginTop:"1.1rem", display:"flex", alignItems:"baseline", gap:".7rem", paddingTop:"1rem", borderTop:`1px solid ${C.line}` }}>
              <b style={{ fontFamily:C.jb, fontWeight:800, fontVariantNumeric:"tabular-nums", fontSize:"clamp(1.9rem,8.6vw,2.5rem)", letterSpacing:"-.03em", lineHeight:.9, color:C.fg }}>
                {p.stat}
                {p.statSfx && <em style={{ fontStyle:"normal", fontSize:".5em", color:C.low, marginLeft:".15em" }}>{p.statSfx}</em>}
              </b>
              <p style={{ fontFamily:C.jb, fontSize:"11.5px", color:C.low, lineHeight:1.4, maxWidth:"26ch" }}>{p.statP}</p>
            </div>
          </section>
        </Reveal>
      ))}

      {/* ── AI BONUS ─────────────────────────────────────────────────────────── */}
      <Reveal>
        <div style={{ margin:"0 22px 1.5rem", padding:"1.3rem 1.4rem", border:`1px dashed ${C.cB}`, borderRadius:10, background:C.card, position:"relative", zIndex:1 }}>
          <span style={{ fontFamily:C.jb, fontSize:10, letterSpacing:".1em", textTransform:"uppercase" as const, color:C.low }}>Bonus — included</span>
          <h4 style={{ fontFamily:C.sg, fontWeight:700, fontSize:"1.15rem", margin:".5rem 0 .5rem", letterSpacing:"-.02em" }}>Oh — and AI, where it earns its place.</h4>
          <p style={{ fontFamily:C.jb, fontSize:".88rem", color:C.dim, lineHeight:1.55 }}>
            Where AI genuinely helps inside the system — a smart search, a first-draft reply, a demand prediction — it&apos;s built in.{" "}
            <strong style={{ color:C.fg, fontWeight:700 }}>But this is real product and software engineering, not an AI badge.</strong>{" "}Nice to have, not the point.
          </p>
        </div>
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

      {/* ── CLOSE / CTA ──────────────────────────────────────────────────────── */}
      <section style={{ padding:"3.4rem 22px 5rem", borderTop:`1px solid ${C.line}`, position:"relative", zIndex:1 }}>
        <Kicker label="Transformation" />
        <h2 style={{ fontFamily:C.sg, fontWeight:700, fontSize:"clamp(2.1rem,9.6vw,3.2rem)", letterSpacing:"-.035em", lineHeight:.95, maxWidth:"13ch" }}>
          Run the business. It runs{" "}
          <span style={{ position:"relative", display:"inline-block" }}>
            itself.
            <span style={{ position:"absolute", left:0, bottom:"-.1em", width:"100%", height:1, background:C.fg, opacity:.25 }} />
          </span>
        </h2>
        <Link
          href="/contact"
          style={{ display:"inline-flex", alignItems:"center", gap:".8rem", marginTop:"1.7rem", fontFamily:C.jb, fontWeight:700, fontSize:"11px", letterSpacing:".18em", textTransform:"uppercase", color:C.bg, background:C.blue, textDecoration:"none", padding:"1.05rem 1.5rem", borderRadius:4 }}
        >
          Rebuild yours — book a call
        </Link>
        <div style={{ marginTop:"2.6rem", fontFamily:C.jb, fontSize:"9px", letterSpacing:".18em", textTransform:"uppercase", color:"rgba(245,245,243,.28)", display:"flex", justifyContent:"space-between" }}>
          <span>OARC — Birkirkara MT</span>
          <span>Dept 09 / 12</span>
        </div>
      </section>
    </main>
  );
}
