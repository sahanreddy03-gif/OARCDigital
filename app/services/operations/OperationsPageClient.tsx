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

// Week grid data — showing blocked vs freed time
const WEEK_GRID = [
  { day:"Mon", blocked:3 }, { day:"Tue", blocked:4 }, { day:"Wed", blocked:2 },
  { day:"Thu", blocked:3 }, { day:"Fri", blocked:2 }, { day:"Sat", blocked:1 }, { day:"Sun", blocked:0 },
];

const PHASES = [
  { n:"01", h:"Where does your time", hl:"actually go?",
    who:"Operations analysts",
    cap:"We spend one week mapping your real week — the WhatsApp threads, the spreadsheet chase, the approvals only you can give, the jobs you do because no one else does. Most owners are shocked by the list. The audit is the product; everything after it is just removal.",
    stat:"13", statSfx:"hrs", statP:"freed per week on average once the top five jobs are systematised" },
  { n:"02", h:"We take the jobs", hl:"off.",
    who:"Automation engineers",
    cap:"Every job on the list gets one of three outcomes: automated, delegated to a system, or written as a procedure your team can run without you. Nothing survives that isn't either worth your time or reassigned. The goal is a week where you only do what only you can do.",
    stat:"5", statSfx:"", statP:"jobs removed or automated in the first two weeks, on average" },
  { n:"03", h:"It runs", hl:"itself.",
    who:"The system",
    cap:"The confirmed, the chased, the reminded, the restocked, the reported — all happen automatically, on schedule, without anyone having to remember. The system runs the routine; you run the business.",
    stat:"0", statSfx:"", statP:"things dropped or forgotten — the system never calls in sick" },
  { n:"04", h:"Stay in", hl:"charge.",
    who:"Support",
    cap:"You get a single view of everything running — what fired, what's pending, what needs a decision. You can change any rule in a click. The point isn't to remove you from the business; it's to make sure the business only needs you for the things that matter.",
    stat:"100", statSfx:"%", statP:"visible — every automated job shown in one dashboard, nothing hidden" },
];

const METRICS = [
  { stat:"≈13", label:"Hours freed / week" },
  { stat:"7d",  label:"First jobs removed" },
  { stat:"0",   label:"Dropped tasks" },
  { stat:"1",   label:"View for everything" },
];

const FAQS = [
  { q:"What kind of work do you take off my plate?",
    a:"Chasing, reminding, confirming, scheduling, reporting, reordering — the work that fills your week but doesn't need to be you doing it. We identify it, then remove it from your daily load." },
  { q:"Will my team need to learn new systems?",
    a:"We build on your existing tools wherever possible. When something new is introduced, staff typically need minutes to learn it, not days — because it matches how they already work." },
  { q:"How do I stay in control?",
    a:"You get a single overview of everything running — what's on, what's pending, what's waiting. You step in when you want; the system runs the rest." },
  { q:"How fast do I get time back?",
    a:"Most Malta businesses start seeing hours freed up within the first two weeks. The time audit alone usually surfaces three to five jobs you can hand off immediately." },
];

const SEC: React.CSSProperties = { padding:"2.8rem 22px", borderTop:`1px solid rgba(245,245,243,.09)` };

export default function OperationsPageClient() {
  return (
    <main style={{ background:C.bg, color:C.fg, fontFamily:C.sg, WebkitFontSmoothing:"antialiased", overflowX:"hidden", position:"relative" }}>
      <style>{`@keyframes oarc-pulse{0%{box-shadow:0 0 0 0 rgba(245,245,243,.35)}100%{box-shadow:0 0 0 8px rgba(245,245,243,0)}}`}</style>
      <div style={{ position:"fixed", inset:0, zIndex:0, pointerEvents:"none", backgroundImage:C.grid, opacity:.7 }} />

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section style={{ position:"relative", zIndex:1, padding:"3.6rem 22px 2.8rem", borderBottom:`1px solid ${C.line}` }}>
        <Kicker label="Operations — dept 05" />
        <h1 style={{ fontFamily:C.sg, fontWeight:700, fontSize:"clamp(2.8rem,12vw,4.6rem)", lineHeight:.94, letterSpacing:"-.035em", marginTop:"1.1rem", maxWidth:"12ch" }}>
          Take the boring work<br />
          <span style={{ position:"relative", display:"inline-block" }}>
            off your week.
            <span style={{ position:"absolute", inset:"-.05em -.12em", border:`1px solid ${C.line}`, borderRadius:4, pointerEvents:"none" }} />
          </span>
        </h1>
        <p style={{ fontFamily:C.jb, fontSize:"11.5px", lineHeight:1.85, color:C.dim, marginTop:"1.3rem", maxWidth:"38ch" }}>
          We map where your time actually goes, remove the jobs that don't need you, and run the rest automatically.{" "}
          <strong style={{ color:C.fg, fontWeight:700 }}>Malta owners get ≈13 hours back every week.</strong>
        </p>

        {/* Week grid visualiser */}
        <div style={{ marginTop:"2rem", border:`1px solid ${C.line}`, borderRadius:14, background:"rgba(245,245,243,.02)", padding:"1.3rem 1rem" }}>
          <div style={{ fontFamily:C.jb, fontSize:"9.5px", letterSpacing:".06em", textTransform:"uppercase" as const, color:C.low, marginBottom:"1rem", textAlign:"center" }}>
            Your week — before / after
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(7,1fr)", gap:6 }}>
            {WEEK_GRID.map((d, i) => (
              <div key={i} style={{ textAlign:"center" as const }}>
                <div style={{ fontFamily:C.jb, fontSize:"8px", letterSpacing:".06em", color:C.low, marginBottom:4 }}>{d.day}</div>
                {/* blocked hours in grey */}
                {Array.from({ length: d.blocked }).map((_, j) => (
                  <div key={j} style={{ height:10, background:"rgba(245,245,243,.2)", borderRadius:2, marginBottom:2 }} />
                ))}
                {/* freed hours highlighted */}
                {Array.from({ length: Math.max(0, 4 - d.blocked) }).map((_, j) => (
                  <div key={j} style={{ height:10, background:C.fg, borderRadius:2, marginBottom:2, opacity:.7 }} />
                ))}
              </div>
            ))}
          </div>
          <div style={{ marginTop:".8rem", display:"flex", gap:"1rem", justifyContent:"center" }}>
            <div style={{ display:"flex", alignItems:"center", gap:4 }}>
              <div style={{ width:8, height:8, background:"rgba(245,245,243,.2)", borderRadius:1 }} />
              <span style={{ fontFamily:C.jb, fontSize:"8px", color:C.low }}>Owned by the business</span>
            </div>
            <div style={{ display:"flex", alignItems:"center", gap:4 }}>
              <div style={{ width:8, height:8, background:C.fg, borderRadius:1, opacity:.7 }} />
              <span style={{ fontFamily:C.jb, fontSize:"8px", color:C.low }}>Freed — yours again</span>
            </div>
          </div>
        </div>

        <div style={{ marginTop:"1.7rem", fontFamily:C.jb, fontSize:"9px", letterSpacing:".18em", textTransform:"uppercase" as const, color:C.low, display:"flex", alignItems:"center", gap:".55rem" }}>
          <span style={{ width:6, height:6, borderRadius:"50%", background:C.fg, opacity:.5, animation:"oarc-pulse 1.8s ease-out infinite", display:"inline-block" }} />
          Active across Malta businesses right now
        </div>
      </section>

      {/* ── PHASES ────────────────────────────────────────────────────────────── */}
      <div style={{ padding:"1.7rem 22px .4rem", fontFamily:C.jb, fontSize:10, letterSpacing:".05em", textTransform:"uppercase" as const, color:C.low, display:"flex", alignItems:"center", gap:".8rem", position:"relative", zIndex:1 }}>
        How we remove the work
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

      {/* ── AI BONUS ─────────────────────────────────────────────────────────── */}
      <Reveal>
        <div style={{ margin:"0 22px 1.5rem", padding:"1.3rem 1.4rem", border:`1px dashed ${C.cB}`, borderRadius:10, background:C.card, position:"relative", zIndex:1 }}>
          <span style={{ fontFamily:C.jb, fontSize:10, letterSpacing:".1em", textTransform:"uppercase" as const, color:C.low }}>Bonus — included</span>
          <h4 style={{ fontFamily:C.sg, fontWeight:700, fontSize:"1.15rem", margin:".5rem 0 .5rem", letterSpacing:"-.02em" }}>Oh — and AI, where it earns its place.</h4>
          <p style={{ fontFamily:C.jb, fontSize:".88rem", color:C.dim, lineHeight:1.55 }}>
            Where AI genuinely shortens the loop — a smart sort, a drafted reply, a reorder prediction — it&apos;s built into the system.{" "}
            <strong style={{ color:C.fg, fontWeight:700 }}>But this is real operations work, not an AI badge.</strong>{" "}Nice to have, not the point.
          </p>
        </div>
      </Reveal>

      {/* ── METRIC WALL ──────────────────────────────────────────────────────── */}
      <Reveal>
        <section style={{ ...SEC, position:"relative", zIndex:1 }}>
          <Kicker label="Proof — the numbers" />
          <h2 style={{ fontFamily:C.sg, fontWeight:700, fontSize:"clamp(1.8rem,7.8vw,2.6rem)", letterSpacing:"-.03em", lineHeight:.98, marginTop:"1rem", maxWidth:"14ch" }}>
            Time back, <span style={{ color:C.fg }}>measured.</span>
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
        <Kicker label="Operations" />
        <h2 style={{ fontFamily:C.sg, fontWeight:700, fontSize:"clamp(2.1rem,9.6vw,3.2rem)", letterSpacing:"-.035em", lineHeight:.95, maxWidth:"13ch" }}>
          Run the business.
          <br />
          Not the{" "}
          <span style={{ position:"relative", display:"inline-block" }}>
            busywork.
            <span style={{ position:"absolute", left:0, bottom:"-.1em", width:"100%", height:1, background:C.fg, opacity:.25 }} />
          </span>
        </h2>
        <Link
          href="/contact"
          style={{ display:"inline-flex", alignItems:"center", gap:".8rem", marginTop:"1.7rem", fontFamily:C.jb, fontWeight:700, fontSize:"11px", letterSpacing:".18em", textTransform:"uppercase", color:C.bg, background:C.blue, textDecoration:"none", padding:"1.05rem 1.5rem", borderRadius:4 }}
        >
          Get your week back
        </Link>
        <div style={{ marginTop:"2.6rem", fontFamily:C.jb, fontSize:"9px", letterSpacing:".18em", textTransform:"uppercase", color:"rgba(245,245,243,.28)", display:"flex", justifyContent:"space-between" }}>
          <span>OARC — Birkirkara MT</span>
          <span>Dept 05 / 12</span>
        </div>
      </section>
    </main>
  );
}
