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

// Verdict board data
const VERDICTS = [
  { channel:"Instagram video", verdict:"WORKING", direction:"↑", detail:"Driving 68% of tracked bookings. Scale the budget." },
  { channel:"Boosted posts",   verdict:"WASTING", direction:"↓", detail:"€340 spent. Zero attributable revenue. Pause immediately." },
  { channel:"Google Ads",      verdict:"WORKING", direction:"↑", detail:"€3.20 cost per booked cover. Expand keywords." },
  { channel:"Print flyers",    verdict:"UNKNOWN", direction:"?", detail:"No tracking. No data. We'll fix that first." },
];

const PHASES = [
  { n:"01", h:"Tell you what", hl:"matters.",
    who:"Data analysts",
    cap:"Before spending one more euro, we connect every channel to your actual revenue. Not clicks, not impressions — sales, covers booked, leads converted. If a channel can't show a straight line to money, we say so immediately and tell you what to do about it.",
    stat:"7", statSfx:"days", statP:"to your first plain-language verdict on every active channel" },
  { n:"02", h:"Connect spend", hl:"to sales.",
    who:"Analytics team",
    cap:"We build the attribution layer your current setup is missing. Every ad, post and campaign gets a revenue number attached — what it actually earned, not what the platform dashboard claims. The gap between those two numbers is usually where the budget is leaking.",
    stat:"3.2×", statSfx:"", statP:"average return on marketing spend that becomes visible once tracked correctly" },
  { n:"03", h:"Winners versus", hl:"losers.",
    who:"Strategy",
    cap:"We separate every piece of content and every campaign into two piles: things that are working, and things that are wasting money. The working pile gets more resource. The wasting pile gets paused or redesigned. Most businesses are funding both in equal measure.",
    stat:"40", statSfx:"%", statP:"of marketing budget wasted on average — we find it and redirect it" },
  { n:"04", h:"The one", hl:"move.",
    who:"Strategists",
    cap:"Every report ends with a single priority: the one change that will move the needle most right now. Not a list of ten recommendations that sit in a doc. One thing, with a rationale and a number, actioned in the next seven days.",
    stat:"1", statSfx:"", statP:"priority move per week — not a list, not a deck, the thing that works now" },
];

const METRICS = [
  { stat:"7d",  label:"First verdict" },
  { stat:"40%", label:"Budget saved on avg" },
  { stat:"1",   label:"Priority per week" },
  { stat:"0",   label:"Vanity metrics" },
];

const FAQS = [
  { q:"What does a clarity engagement actually deliver?",
    a:"A plain-language verdict on every channel you're spending on — what's working, what's wasting, and the one priority move. Plus ongoing tracking so the picture updates as you act." },
  { q:"Do I need to give you access to all our data?",
    a:"We need ad accounts, Google Analytics and your POS or booking data to connect spend to revenue. Read-only access is sufficient — we never touch your settings." },
  { q:"We already have a marketing agency — why do we need this?",
    a:"Because agencies measure what looks good. We measure what makes money. If your agency can show you a direct line from spend to sales, you may not need us. If they can't, you do." },
  { q:"How quickly will we see the first insights?",
    a:"Most businesses get their first verdict within five to seven days of connecting their data. The AI anomaly alerts start firing from day one." },
];

const SEC: React.CSSProperties = { padding:"2.8rem 22px", borderTop:`1px solid rgba(245,245,243,.09)` };

export default function ClarityPageClient() {
  return (
    <main style={{ background:C.bg, color:C.fg, fontFamily:C.sg, WebkitFontSmoothing:"antialiased", overflowX:"hidden", position:"relative" }}>
      <style>{`@keyframes oarc-pulse{0%{box-shadow:0 0 0 0 rgba(245,245,243,.35)}100%{box-shadow:0 0 0 8px rgba(245,245,243,0)}}`}</style>
      <div style={{ position:"fixed", inset:0, zIndex:0, pointerEvents:"none", backgroundImage:C.grid, opacity:.7 }} />

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section style={{ position:"relative", zIndex:1, padding:"3.6rem 22px 2.8rem", borderBottom:`1px solid ${C.line}` }}>
        <Kicker label="Clarity — dept 07" />
        <h1 style={{ fontFamily:C.sg, fontWeight:700, fontSize:"clamp(2.8rem,12vw,4.6rem)", lineHeight:.94, letterSpacing:"-.035em", marginTop:"1.1rem", maxWidth:"12ch" }}>
          We tell you{" "}
          <span style={{ position:"relative", display:"inline-block" }}>
            what&apos;s working.
            <span style={{ position:"absolute", inset:"-.05em -.12em", border:`1px solid ${C.line}`, borderRadius:4, pointerEvents:"none" }} />
          </span>
        </h1>
        <p style={{ fontFamily:C.jb, fontSize:"11.5px", lineHeight:1.85, color:C.dim, marginTop:"1.3rem", maxWidth:"38ch" }}>
          No dashboards full of metrics that mean nothing. No agency spin.{" "}
          <strong style={{ color:C.fg, fontWeight:700 }}>A straight answer on what&apos;s driving revenue and what&apos;s burning budget.</strong>
        </p>

        {/* Verdict board */}
        <div style={{ marginTop:"2rem", border:`1px solid ${C.line}`, borderRadius:14, background:"rgba(245,245,243,.02)", overflow:"hidden" }}>
          <div style={{ padding:".75rem 1rem", borderBottom:`1px solid ${C.line}`, fontFamily:C.jb, fontSize:"9.5px", letterSpacing:".06em", textTransform:"uppercase" as const, color:C.low }}>
            Verdict board — your channels right now
          </div>
          {VERDICTS.map((v, i) => (
            <div key={i} style={{ padding:".9rem 1rem", borderTop: i===0 ? "none" : `1px solid ${C.line}`, display:"flex", alignItems:"flex-start", gap:"1rem" }}>
              <div style={{ flexShrink:0, width:"1.5rem", paddingTop:".1rem" }}>
                <span style={{
                  fontFamily:C.jb, fontWeight:800, fontSize:".9rem",
                  color: v.verdict==="WORKING" ? C.fg : v.verdict==="WASTING" ? "rgba(245,245,243,.4)" : C.low,
                }}>{v.direction}</span>
              </div>
              <div style={{ flex:1 }}>
                <div style={{ display:"flex", alignItems:"baseline", gap:".55rem" }}>
                  <span style={{ fontFamily:C.jb, fontWeight:700, fontSize:".78rem", color:C.fg }}>{v.channel}</span>
                  <span style={{
                    fontFamily:C.jb, fontSize:"8px", letterSpacing:".12em", textTransform:"uppercase" as const,
                    color: v.verdict==="WORKING" ? C.fg : v.verdict==="WASTING" ? "rgba(245,245,243,.4)" : C.low,
                    border:`1px solid ${v.verdict==="WORKING" ? C.cB : "rgba(245,245,243,.08)"}`,
                    padding:"2px 6px", borderRadius:2,
                  }}>{v.verdict}</span>
                </div>
                <p style={{ fontFamily:C.jb, fontSize:".68rem", lineHeight:1.6, color:C.dim, marginTop:".3rem" }}>{v.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop:"1.6rem", fontFamily:C.jb, fontSize:"9px", letterSpacing:".18em", textTransform:"uppercase" as const, color:C.low, display:"flex", alignItems:"center", gap:".55rem" }}>
          <span style={{ width:6, height:6, borderRadius:"50%", background:C.fg, opacity:.5, animation:"oarc-pulse 1.8s ease-out infinite", display:"inline-block" }} />
          Updated weekly · plain language · no dashboards
        </div>
      </section>

      {/* ── PHASES ────────────────────────────────────────────────────────────── */}
      <div style={{ padding:"1.7rem 22px .4rem", fontFamily:C.jb, fontSize:10, letterSpacing:".05em", textTransform:"uppercase" as const, color:C.low, display:"flex", alignItems:"center", gap:".8rem", position:"relative", zIndex:1 }}>
        How we get to the answer
        <span style={{ flex:1, height:1, background:C.line, display:"block" }} />
      </div>

      {PHASES.map((p, i) => (
        <Reveal key={i}>
          <section style={{ ...SEC, position:"relative", zIndex:1 }}>
            <div style={{ display:"flex", alignItems:"baseline", gap:".6rem", marginBottom:".6rem" }}>
              <span style={{ fontFamily:C.jb, fontSize:"10.5px", fontWeight:500, color:C.low }}>{p.n}</span>
              <span style={{ fontFamily:C.jb, fontSize:10, letterSpacing:".04em", textTransform:"uppercase" as const, color:"rgba(245,245,243,.3)" }}>{p.who}</span>
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

      {/* ── AI ANOMALY BONUS ─────────────────────────────────────────────────── */}
      <Reveal>
        <div style={{ margin:"0 22px 1.5rem", padding:"1.3rem 1.4rem", border:`1px dashed ${C.cB}`, borderRadius:10, background:C.card, position:"relative", zIndex:1 }}>
          <span style={{ fontFamily:C.jb, fontSize:10, letterSpacing:".1em", textTransform:"uppercase" as const, color:C.low }}>AI — always watching</span>
          <h4 style={{ fontFamily:C.sg, fontWeight:700, fontSize:"1.15rem", margin:".5rem 0 .5rem", letterSpacing:"-.02em" }}>Anomaly alerts. Before you notice.</h4>
          <p style={{ fontFamily:C.jb, fontSize:".88rem", color:C.dim, lineHeight:1.55 }}>
            Our AI monitors your numbers nightly. If a campaign suddenly drops, a channel spikes, or spend-to-sales breaks pattern —{" "}
            <strong style={{ color:C.fg, fontWeight:700 }}>you get a plain-language alert before it becomes expensive.</strong>{" "}Not a dashboard notification. A message that tells you what happened and what to do.
          </p>
        </div>
      </Reveal>

      {/* ── METRIC WALL ──────────────────────────────────────────────────────── */}
      <Reveal>
        <section style={{ ...SEC, position:"relative", zIndex:1 }}>
          <Kicker label="What clarity delivers" />
          <h2 style={{ fontFamily:C.sg, fontWeight:700, fontSize:"clamp(1.8rem,7.8vw,2.6rem)", letterSpacing:"-.03em", lineHeight:.98, marginTop:"1rem", maxWidth:"14ch" }}>
            Straight <span style={{ color:C.fg }}>answers.</span>
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
        <Kicker label="Clarity" />
        <h2 style={{ fontFamily:C.sg, fontWeight:700, fontSize:"clamp(2.1rem,9.6vw,3.2rem)", letterSpacing:"-.035em", lineHeight:.95, maxWidth:"13ch" }}>
          Stop guessing.{" "}
          <span style={{ position:"relative", display:"inline-block" }}>
            Start knowing.
            <span style={{ position:"absolute", left:0, bottom:"-.1em", width:"100%", height:1, background:C.fg, opacity:.25 }} />
          </span>
        </h2>
        <Link
          href="/contact"
          style={{ display:"inline-flex", alignItems:"center", gap:".8rem", marginTop:"1.7rem", fontFamily:C.jb, fontWeight:700, fontSize:"11px", letterSpacing:".18em", textTransform:"uppercase", color:C.bg, background:C.blue, textDecoration:"none", padding:"1.05rem 1.5rem", borderRadius:4 }}
        >
          Get the straight answer
        </Link>
        <div style={{ marginTop:"2.6rem", fontFamily:C.jb, fontSize:"9px", letterSpacing:".18em", textTransform:"uppercase", color:"rgba(245,245,243,.28)", display:"flex", justifyContent:"space-between" }}>
          <span>OARC — Birkirkara MT</span>
          <span>Dept 07 / 12</span>
        </div>
      </section>
    </main>
  );
}
