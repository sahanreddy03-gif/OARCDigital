"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

// ── Machine realm tokens ──────────────────────────────────────────────────────
const C = {
  bg:    "#0B0C0D",
  fg:    "#F5F5F3",
  blue:  "#2E5BE6",
  line:  "rgba(245,245,243,.09)",
  dim:   "rgba(245,245,243,.6)",
  low:   "rgba(245,245,243,.4)",
  card:  "rgba(245,245,243,.04)",
  cB:    "rgba(245,245,243,.12)",
  sg:    "var(--font-space-grotesk,'Space Grotesk',sans-serif)",
  jb:    "var(--font-jetbrains-mono,'JetBrains Mono',monospace)",
  sm:    "var(--font-space-mono,'Space Mono',monospace)",
  e:     "cubic-bezier(.16,1,.3,1)",
  grid:  `repeating-linear-gradient(0deg,rgba(245,245,243,.035) 0 1px,transparent 1px 46px),
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
      background:C.fg, opacity:.55,
      animation:"oarc-pulse 1.8s ease-out infinite",
    }} />
  );
}

const CHANNELS = [
  { label:"WhatsApp", body:"Bookings, questions, follow-ups — where Malta actually talks." },
  { label:"Phone",    body:"Missed calls returned in seconds. Natural voice, your greeting." },
  { label:"DMs",      body:"Instagram & Facebook messages answered while you're on service." },
  { label:"Email",    body:"Quotes, confirmations and invoices — written, sent, chased." },
];

const LIFECYCLE = [
  { n:"01", h:"Hire", body:"Pick the role. We connect your numbers, inboxes and calendar — your employee clocks in within days, not months." },
  { n:"02", h:"Train", body:"It learns your menu, prices, tone and rules — then keeps learning from every conversation it handles." },
  { n:"03", h:"Scale", body:"Add roles as you grow. Every conversation becomes data: what guests ask, what sells, what's breaking." },
];

const ROSTER = [
  { id:"SALES-01", body:"Answers enquiries, quotes, closes and follows up until yes." },
  { id:"HOST",     body:"Takes bookings, confirms, reminds, refills cancellations." },
  { id:"RING",     body:"Returns every missed call in seconds. Never rings busy." },
  { id:"REVIEWS",  body:"Captures 5★ reviews and drafts replies in your voice." },
  { id:"SUPPORT",  body:"Handles the questions you answer forty times a week." },
  { id:"SCRIBE",   body:"Writes quotes, confirmations, invoices — and chases them." },
  { id:"WINBACK",  body:"Reaches guests who haven't returned, with a reason to." },
  { id:"WATCH",    body:"Reads the numbers nightly and flags what needs you." },
];

const METRICS = [
  { stat:"00:04", label:"Reply time" },
  { stat:"24/7",  label:"On shift" },
  { stat:"+41",   label:"Reviews / month" },
  { stat:"0",     label:"Sick days" },
];

const FAQS = [
  { q:"Will it sound like a robot?",
    a:"It's trained on your tone, your phrases, your menu. Most guests never ask — and when they do, it answers honestly." },
  { q:"What if it doesn't know the answer?",
    a:"It says so, takes a message, and hands off to a human — instead of inventing one. That rule is not optional." },
  { q:"How fast is it live?",
    a:"Days. We connect your existing WhatsApp, phone and inboxes — no new systems for your staff to learn." },
  { q:"Are you an AI company?",
    a:"No. We're the team that makes businesses grow — AI staff is one of the ways we do it, delivered by people you can call." },
];

const SEC: React.CSSProperties = {
  padding:"2.8rem 22px",
  borderTop:`1px solid ${C.line}`,
};

export default function AIStaffPageClient() {
  return (
    <main style={{ background:C.bg, color:C.fg, fontFamily:C.sg, WebkitFontSmoothing:"antialiased", overflowX:"hidden", position:"relative" }}>
      <style>{`
        @keyframes oarc-pulse{0%{box-shadow:0 0 0 0 rgba(245,245,243,.35)}100%{box-shadow:0 0 0 8px rgba(245,245,243,0)}}
        @keyframes oarc-bub{to{opacity:1;transform:none}}
      `}</style>
      {/* grid overlay */}
      <div style={{ position:"fixed", inset:0, zIndex:0, pointerEvents:"none", backgroundImage:C.grid, opacity:.7 }} />

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section style={{ position:"relative", zIndex:1, padding:"3.6rem 22px 2.8rem" }}>
        <Kicker label="AI Staff — dept 02" />
        <h1 style={{ fontFamily:C.sg, fontWeight:700, fontSize:"clamp(2.8rem,12vw,4.6rem)", lineHeight:.94, letterSpacing:"-.035em", margin:"1.1rem 0 0", maxWidth:"11ch" }}>
          Pick your<br />
          <span style={{ position:"relative", display:"inline-block" }}>
            employee.
            <span style={{ position:"absolute", inset:"-.05em -.12em", border:`1px solid ${C.line}`, borderRadius:4, pointerEvents:"none" }} />
          </span>
        </h1>
        <p style={{ fontFamily:C.jb, fontSize:"11.5px", lineHeight:1.85, color:C.dim, marginTop:"1.3rem", maxWidth:"36ch" }}>
          AI staff that answer, book, sell and follow up for your business — while you run it. Trained on your rules. Live in days.
        </p>

        {/* Chat bubbles */}
        <div style={{ marginTop:"1.9rem", display:"flex", flexDirection:"column", gap:".6rem", maxWidth:330 }}>
          {[
            { text:"Table for 4 booked — Friday 20:00. Confirmation sent on WhatsApp.", right:false, delay:.4 },
            { text:"Missed call at 14:32 — returned in 19s. Reservation saved.", right:true, delay:1.1 },
            { text:"New 5★ review — reply drafted in your voice. Approve?", right:false, delay:1.8 },
            { text:"Quote followed up. Client said yes — invoice sent.", right:true, delay:2.5 },
          ].map((b,i) => (
            <div key={i} style={{
              alignSelf: b.right ? "flex-end" : "flex-start",
              fontFamily:C.jb, fontSize:".74rem", lineHeight:1.55, color:C.fg,
              background:"rgba(245,245,243,.06)", border:`1px solid ${C.cB}`,
              borderRadius: b.right ? "12px 12px 3px 12px" : "12px 12px 12px 3px",
              padding:".65rem .85rem", maxWidth:"28ch",
              opacity:0, transform:"translateY(10px)",
              animation:`oarc-bub .7s ${C.e} ${b.delay}s forwards`,
            }}>{b.text}</div>
          ))}
        </div>

        <div style={{ marginTop:"1.6rem", fontFamily:C.jb, fontSize:"9px", letterSpacing:".18em", textTransform:"uppercase", color:C.low, display:"flex", alignItems:"center", gap:".55rem" }}>
          <span style={{ width:6, height:6, borderRadius:"50%", background:C.fg, opacity:.5, animation:"oarc-pulse 1.8s ease-out infinite", display:"inline-block" }} />
          On shift right now in Malta venues
        </div>
      </section>

      {/* ── CHANNELS ──────────────────────────────────────────────────────────── */}
      <Reveal>
        <section style={{ ...SEC, position:"relative", zIndex:1 }}>
          <Kicker label="Omnichannel — one brain" />
          <h2 style={{ fontFamily:C.sg, fontWeight:700, fontSize:"clamp(1.8rem,7.8vw,2.6rem)", letterSpacing:"-.03em", lineHeight:.98, marginTop:"1rem", maxWidth:"14ch" }}>
            Hire once. Answer <span style={{ color:C.fg }}>everywhere.</span>
          </h2>
          <p style={{ fontFamily:C.jb, fontSize:"11px", lineHeight:1.8, color:C.dim, marginTop:"1rem", maxWidth:"44ch" }}>
            One employee, every door your customers knock on. Same memory, same manners, every channel.
          </p>
          <div style={{ marginTop:"1.5rem", display:"grid", gap:10 }}>
            {CHANNELS.map((ch, i) => (
              <div key={i} style={{ border:`1px solid ${C.cB}`, borderRadius:8, padding:"1rem 1.05rem", background:C.card, display:"flex", alignItems:"baseline", gap:"1rem" }}>
                <span style={{ fontFamily:C.jb, fontWeight:700, fontSize:".8rem", letterSpacing:".06em", textTransform:"uppercase" as const, color:C.fg, flex:"0 0 6.4rem" }}>{ch.label}</span>
                <span style={{ fontFamily:C.jb, fontSize:".72rem", lineHeight:1.6, color:C.dim }}>{ch.body}</span>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* ── TRAINING TERMINAL ────────────────────────────────────────────────── */}
      <Reveal delay={50}>
        <section style={{ ...SEC, position:"relative", zIndex:1 }}>
          <Kicker label="The OARC difference" />
          <h2 style={{ fontFamily:C.sg, fontWeight:700, fontSize:"clamp(1.8rem,7.8vw,2.6rem)", letterSpacing:"-.03em", lineHeight:.98, marginTop:"1rem", maxWidth:"14ch" }}>
            Train it like a <span style={{ color:C.fg }}>new hire.</span>
          </h2>
          <p style={{ fontFamily:C.jb, fontSize:"11px", lineHeight:1.8, color:C.dim, marginTop:"1rem", maxWidth:"44ch" }}>
            No flowcharts, no code, no vendor tickets. You state the rule in plain words — it becomes how your employee behaves.{" "}
            <strong style={{ color:C.fg, fontWeight:700 }}>Change your mind, change the sentence.</strong>
          </p>
          <div style={{ marginTop:"1.5rem", border:`1px solid ${C.cB}`, borderRadius:8, overflow:"hidden", background:"rgba(0,0,0,.3)" }}>
            <div style={{ fontFamily:C.jb, fontSize:"8.5px", letterSpacing:".2em", textTransform:"uppercase" as const, padding:".75rem 1rem", borderBottom:`1px solid ${C.line}`, display:"flex", justifyContent:"space-between", color:C.low }}>
              <span>Training — plain language</span>
              <span style={{ color:"rgba(245,245,243,.28)" }}>live</span>
            </div>
            <div style={{ padding:"1rem", fontFamily:C.jb, fontSize:".74rem", lineHeight:1.95, color:C.dim }}>
              <span style={{ color:C.fg }}>You:</span>{" "}&ldquo;If someone asks for a refund under €50 and it&rsquo;s their first, approve it. Anything else — call me.&rdquo;<br />
              <span style={{ color:C.fg, opacity:.55 }}>›</span>{" "}rule learned · applied across whatsapp / phone / dms / email<br />
              <br />
              <span style={{ color:C.fg }}>You:</span>{" "}&ldquo;We&rsquo;re closed on the 15th for a private event.&rdquo;<br />
              <span style={{ color:C.fg, opacity:.55 }}>›</span>{" "}calendar updated · 3 bookings moved · guests notified{" "}
              <span style={{ color:C.fg }}>✓</span>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── LIFECYCLE ────────────────────────────────────────────────────────── */}
      <Reveal delay={50}>
        <section style={{ ...SEC, position:"relative", zIndex:1 }}>
          <Kicker label="The lifecycle" />
          <h2 style={{ fontFamily:C.sg, fontWeight:700, fontSize:"clamp(1.8rem,7.8vw,2.6rem)", letterSpacing:"-.03em", lineHeight:.98, marginTop:"1rem", maxWidth:"14ch" }}>
            Hire. Train. <span style={{ color:C.fg }}>Scale.</span>
          </h2>
          <div style={{ marginTop:"1.5rem" }}>
            {LIFECYCLE.map((s, i) => (
              <div key={i} style={{ display:"flex", gap:"1rem", padding:"1.15rem 0", borderTop: i===0 ? "none" : `1px solid ${C.line}` }}>
                <span style={{ fontFamily:C.jb, fontSize:10, color:C.low, width:"2.2rem", flexShrink:0, paddingTop:".35rem" }}>{s.n}</span>
                <div>
                  <h3 style={{ fontFamily:C.sg, fontWeight:700, fontSize:"1.25rem", letterSpacing:"-.02em" }}>{s.h}</h3>
                  <p style={{ fontFamily:C.jb, fontSize:".72rem", lineHeight:1.7, color:C.dim, marginTop:".35rem", maxWidth:"40ch" }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* ── ROSTER ───────────────────────────────────────────────────────────── */}
      <Reveal>
        <section style={{ ...SEC, position:"relative", zIndex:1 }}>
          <Kicker label="The roster" />
          <h2 style={{ fontFamily:C.sg, fontWeight:700, fontSize:"clamp(1.8rem,7.8vw,2.6rem)", letterSpacing:"-.03em", lineHeight:.98, marginTop:"1rem", maxWidth:"14ch" }}>
            On the <span style={{ color:C.fg }}>payroll.</span>
          </h2>
          <div style={{ marginTop:"1.5rem", display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
            {ROSTER.map((ag, i) => (
              <div key={i} style={{ border:`1px solid ${C.cB}`, borderRadius:8, padding:".95rem .9rem", background:C.card, position:"relative" }}>
                <PulseDot />
                <b style={{ display:"block", fontFamily:C.jb, fontWeight:800, fontSize:".86rem", letterSpacing:".04em", color:C.fg }}>{ag.id}</b>
                <span style={{ display:"block", fontFamily:C.jb, fontSize:".66rem", lineHeight:1.55, color:C.dim, marginTop:".4rem" }}>{ag.body}</span>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* ── METRIC WALL ──────────────────────────────────────────────────────── */}
      <Reveal>
        <section style={{ ...SEC, position:"relative", zIndex:1 }}>
          <Kicker label="Proof — the metrics that matter" />
          <h2 style={{ fontFamily:C.sg, fontWeight:700, fontSize:"clamp(1.8rem,7.8vw,2.6rem)", letterSpacing:"-.03em", lineHeight:.98, marginTop:"1rem", maxWidth:"14ch" }}>
            Instant <span style={{ color:C.fg }}>ROI.</span>
          </h2>
          <div style={{ marginTop:"1.5rem", display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
            {METRICS.map((m, i) => (
              <div key={i} style={{ border:`1px solid ${C.cB}`, borderRadius:8, padding:"1.05rem .95rem", background:C.card, position:"relative" }}>
                <PulseDot />
                <b style={{ display:"block", fontFamily:C.jb, fontWeight:800, fontVariantNumeric:"tabular-nums", fontSize:"clamp(1.7rem,8.4vw,2.5rem)", lineHeight:1, letterSpacing:"-.03em", color:C.fg }}>{m.stat}</b>
                <span style={{ display:"block", textDecoration:"none", fontFamily:C.jb, fontSize:"7.5px", letterSpacing:".16em", textTransform:"uppercase" as const, color:C.low, marginTop:".5rem" }}>{m.label}</span>
              </div>
            ))}
          </div>
          {/* handoff note */}
          <div style={{ marginTop:"1.2rem", border:`1px dashed ${C.cB}`, borderRadius:8, padding:"1.15rem 1.05rem" }}>
            <b style={{ fontFamily:C.jb, fontWeight:700, fontSize:".8rem", letterSpacing:".04em", color:C.fg }}>Knows when to call a human.</b>
            <p style={{ fontFamily:C.jb, fontSize:".72rem", lineHeight:1.75, color:C.dim, marginTop:".5rem", maxWidth:"44ch" }}>
              Anything sensitive, unusual or high-value hands off to you or your team instantly — with the full conversation attached. Guardrails set by you, in writing.
            </p>
          </div>
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

      {/* ── CLOSE / CTA ──────────────────────────────────────────────────────── */}
      <section style={{ padding:"3.4rem 22px 5rem", borderTop:`1px solid ${C.line}`, position:"relative", zIndex:1 }}>
        <Kicker label="AI Staff" />
        <h2 style={{ fontFamily:C.sg, fontWeight:700, fontSize:"clamp(2.1rem,9.6vw,3.2rem)", letterSpacing:"-.035em", lineHeight:.95, maxWidth:"13ch" }}>
          The employee that never <span style={{ position:"relative", display:"inline-block" }}>
            clocks out.
            <span style={{ position:"absolute", left:0, bottom:"-.1em", width:"100%", height:1, background:C.fg, opacity:.25 }} />
          </span>
        </h2>
        <Link
          href="/contact"
          style={{ display:"inline-flex", alignItems:"center", gap:".8rem", marginTop:"1.7rem", fontFamily:C.jb, fontWeight:700, fontSize:"11px", letterSpacing:".18em", textTransform:"uppercase", color:C.bg, background:C.blue, textDecoration:"none", padding:"1.05rem 1.5rem", borderRadius:4 }}
        >
          Hire yours — book a call
        </Link>
        <div style={{ marginTop:"2.6rem", fontFamily:C.jb, fontSize:"9px", letterSpacing:".18em", textTransform:"uppercase", color:"rgba(245,245,243,.28)", display:"flex", justifyContent:"space-between" }}>
          <span>OARC — Birkirkara MT</span>
          <span>Dept 02 / 12</span>
        </div>
      </section>
    </main>
  );
}
