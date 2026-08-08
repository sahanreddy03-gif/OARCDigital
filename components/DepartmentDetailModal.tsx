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
function FAQ({ items, line = T.line, fg = T.ivory, dim = T.dim }: {
  items: { q: string; a: string }[];
  line?: string; fg?: string; dim?: string;
}) {
  return (
    <div style={{ padding:"1.8rem 20px 2rem", borderTop:`1px solid ${line}` }}>
      <Kicker label="Straight answers" />
      {items.map((it, i) => (
        <Reveal key={i} delay={i * 60}>
          <div style={{ borderTop: i > 0 ? `1px solid ${line}` : "none",
            paddingTop: i > 0 ? "1.4rem" : 0, paddingBottom:"1.4rem" }}>
            <h4 style={{ fontFamily:"var(--font-bricolage,'Bricolage Grotesque',sans-serif)",
              fontWeight:800, fontSize:"clamp(1rem,3.8vw,1.3rem)", letterSpacing:"-.02em",
              lineHeight:1.2, color:fg, marginBottom:".6rem" }}>{it.q}</h4>
            <p style={{ fontSize:".96rem", color:dim, lineHeight:1.62, maxWidth:"58ch" }}>{it.a}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

// ── CTA block ────────────────────────────────────────────────────────────────
function CTA({ big, sub, btn, onClose }: { big: React.ReactNode; sub: string; btn: string; onClose: () => void }) {
  return (
    <div style={{ padding:"2.4rem 20px calc(3.2rem + env(safe-area-inset-bottom))",
      borderTop:`1px solid ${T.line}`, marginTop:"1rem" }}>
      <h2 style={{ fontFamily:"var(--font-bricolage,'Bricolage Grotesque',sans-serif)", fontWeight:800,
        fontSize:"clamp(2rem,9vw,3rem)", lineHeight:.95, letterSpacing:"-.04em",
        color:T.ivory, marginBottom:"1rem" }}>{big}</h2>
      <p style={{ fontSize:".96rem", color:T.dim, lineHeight:1.62, maxWidth:"44ch", marginBottom:"1.6rem" }}>{sub}</p>
      <a href="/contact" onClick={onClose} style={{ display:"block", textAlign:"center" as const,
        fontFamily:"var(--font-space-mono,'Space Mono',monospace)", fontSize:12, fontWeight:700,
        letterSpacing:".13em", textTransform:"uppercase" as const, color:T.noir, background:T.scar,
        textDecoration:"none", padding:"1.15rem", borderRadius:6 }}>{btn} →</a>
      <p style={{ fontFamily:"var(--font-space-mono,'Space Mono',monospace)", fontSize:10.5,
        color:"rgba(242,239,233,.3)", letterSpacing:".04em", marginTop:"1.4rem", textAlign:"center" as const }}>
        OARC — one team for the whole business. Malta.</p>
    </div>
  );
}

// shared Instrument Serif italic style for CTA headlines
const CtaItalic = ({ children }: { children: React.ReactNode }) => (
  <em style={{ fontFamily:"var(--font-instrument-serif,'Instrument Serif',serif)", fontStyle:"italic", fontWeight:400 }}>{children}</em>
);

// ── GROWTH content ───────────────────────────────────────────────────────────
function GrowthContent({ onClose }: { onClose: () => void }) {
  const phases: PhaseData[] = [
    { num:"01", label:"They find you", headline:'They <em style="font-family:var(--font-instrument-serif,serif);font-style:italic;font-weight:400;color:#E02B20">find</em> you.', hook:"The ones already looking.", who:"Search team",
      body:"We own the moment someone is already searching for what you sell — on Google, on Maps, in the AI answer. When a buyer looks, <strong style='color:#F2EFE9'>you're the one they find.</strong>",
      stat:"76", statS:"%", statD:"of people who search nearby visit a business within a day — if you show up" },
    { num:"02", label:"You find them", headline:'You <em style="font-family:var(--font-instrument-serif,serif);font-style:italic;font-weight:400;color:#E02B20">find</em> them.', hook:"The ones not looking yet.", who:"Reach team",
      body:"Most future customers aren't searching today. We build audiences from people who already paid you, then run ads at people who look just like them. <strong style='color:#F2EFE9'>Search waits to be found; this goes and finds them.</strong>",
      stat:"6", statD:"audiences built from your own buyers — the people most likely to be next" },
    { num:"03", label:"They like you", headline:'They <em style="font-family:var(--font-instrument-serif,serif);font-style:italic;font-weight:400;color:#E02B20">like</em> you.', hook:"They care before they compare.", who:"The Studio",
      body:"Reach picks who sees you; the Studio gives them a reason to stop. We turn your business into story-led video and content — who you are, why you do it — so people care before they ever compare a price. <strong style='color:#F2EFE9'>Half of what an ad returns is the creative.</strong>",
      stat:"49", statS:"%", statD:"of an ad's sales lift comes from the creative — the story is the reason they pick you" },
    { num:"04", label:"They pick you", headline:'They <em style="font-family:var(--font-instrument-serif,serif);font-style:italic;font-weight:400;color:#E02B20">pick</em> you.', hook:"You beat the other three.", who:"Conversion team",
      body:"Once they care, they compare. Every buyer checks the same four things — a visible price, recent work, real reviews, a straight answer — and picks whoever has them all. <strong style='color:#F2EFE9'>We fill whatever's blank.</strong>",
      stat:"4", statD:"things every buyer checks before they choose — we make sure yours are all there" },
    { num:"05", label:"You stay close", headline:'You <em style="font-family:var(--font-instrument-serif,serif);font-style:italic;font-weight:400;color:#E02B20">stay close</em>.', hook:"You never go quiet.", who:"Lifecycle team",
      body:"The Lifecycle team owns every moment between deciding and buying — both ways. The instant a buyer reaches out they get an answer in seconds, any hour. <strong style='color:#F2EFE9'>Answer in five minutes and you're 21× more likely to win them.</strong>",
      stat:"21", statS:"×", statD:"more likely to qualify a lead answered in 5 min vs 30 — so we never go quiet" },
    { num:"06", label:"They come back", headline:'They <em style="font-family:var(--font-instrument-serif,serif);font-style:italic;font-weight:400;color:#E02B20">come back</em>.', hook:"Again, and again.", who:"Retention team",
      body:"The first sale is the expensive one. The Retention team captures the review, times the next offer to the buyer's own cycle, and engineers the referral. <strong style='color:#F2EFE9'>This is the cheapest growth there is.</strong>",
      stat:"25–95", statS:"%", statD:"more profit from just a 5% lift in how many customers come back" },
  ];
  const faqs = [
    { q:"What does 'bring me more customers' actually involve?", a:"The whole journey: being found when people search, reaching the ones not searching yet, giving them a reason to like you, being the one they pick, replying instantly, and making them come back. Six steps, run by one team." },
    { q:"Is this just ads?", a:"No. Ads are one step. We also own search and local visibility, the creative that makes people care, the four things buyers check before choosing, instant response, and retention — because a leak in any one step wastes all the others." },
    { q:"How do you measure it?", a:"On customers and revenue, at month end — not clicks. You can see every step of the journey and where it's working." },
    { q:"Are you an AI company?", a:"No. Real strategists, creatives and analysts run the journey. A small tool that flags where customers are leaking is included as a bonus, not the main thing." },
  ];
  return (
    <div style={{ background:T.noir, color:T.ivory }}>
      {/* hero */}
      <div style={{ padding:"1.8rem 20px 2.2rem", borderBottom:`1px solid ${T.line}` }}>
        <Kicker label="Growth" />
        <h1 style={{ fontFamily:"var(--font-bricolage,'Bricolage Grotesque',sans-serif)", fontWeight:800,
          fontSize:"clamp(2.6rem,10.5vw,4rem)", lineHeight:.9, letterSpacing:"-.05em",
          textTransform:"uppercase", color:T.ivory, marginBottom:"1rem" }}>
          Bring me more<br />
          <em style={{ fontFamily:"var(--font-instrument-serif,'Instrument Serif',serif)",
            fontStyle:"italic", fontWeight:400, textTransform:"none", letterSpacing:0, color:T.scar,
            fontSize:"1.04em" }}>customers.</em>
        </h1>
        <p style={{ fontSize:".98rem", color:T.dim, lineHeight:1.6, maxWidth:"44ch" }}>
          A stranger finds you, likes you, picks you over the others, and comes back for more.{" "}
          <strong style={{ color:T.ivory }}>Six steps, one team, one number at month end.</strong>{" "}
          Miss a step and the rest never happen, so we run all six.
        </p>
      </div>
      <StatStrip items={[
        { n:"76", s:"%", label:"of nearby searches visit within a day" },
        { n:"21", s:"×", label:"more likely to qualify at 5 min vs 30" },
        { n:"25–95", s:"%", label:"more profit from 5% better retention" },
      ]} />
      <div style={{ padding:".4rem 20px 0" }}>
        <Kicker label="The six steps, in detail" />
      </div>
      {phases.map((p, i) => <Phase key={i} p={p} realm="E" />)}
      {/* bonus */}
      <Reveal>
        <div style={{ margin:"0 20px 1.8rem", padding:"1.3rem 1.4rem",
          border:`1px dashed ${T.line}`, borderRadius:10, background:T.card }}>
          <Kicker label="Bonus, included" color={T.dim} />
          <h4 style={{ fontFamily:"var(--font-instrument-serif,'Instrument Serif',serif)",
            fontStyle:"italic", fontSize:"1.3rem", fontWeight:400, color:T.ivory, marginBottom:".5rem" }}>
            Oh — and a little tool, on us.
          </h4>
          <p style={{ fontSize:".88rem", color:T.dim, lineHeight:1.55 }}>
            A small tool that watches the journey and flags the step where customers are leaking — so the team fixes the right thing first.{" "}
            <strong style={{ color:T.ivory }}>Nice to have, not the main event.</strong>
          </p>
        </div>
      </Reveal>
      <FAQ items={faqs} />
      <CTA big={<>Six steps. One team.<br /><CtaItalic>One number.</CtaItalic></>}
        sub="Six teams, one engagement, one number at month end: more customers — and the whole journey they took to become them."
        btn="Run the machine on your business" onClose={onClose} />
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
  Growth:  GrowthContent,
  Sales:   SalesContent,
  Media:   MediaContent,
  Social:  SocialContent,
};

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
        <div style={{
          display:"flex", justifyContent:"space-between", alignItems:"center",
          padding:"14px 20px", paddingTop:"max(14px, env(safe-area-inset-top))",
          background: CONTENT_MAP[dept] ? T.noir : (["Creative","Brand","Reputation"].includes(dept) ? T.stu : T.gfx),
          backdropFilter:"blur(14px)", flexShrink:0,
          borderBottom:`1px solid ${T.line}`,
        }}>
          <span style={{
            fontFamily:"var(--font-bricolage,'Bricolage Grotesque',sans-serif)",
            fontWeight:800, fontSize:13, letterSpacing:"-.02em",
            color: ["Creative","Brand","Reputation"].includes(dept) && !CONTENT_MAP[dept] ? T.ink : T.ivory,
          }}>
            OARC <span style={{ color:T.scar }}>·</span> {dept}
          </span>
          <button onClick={handleClose} aria-label="Close" style={{
            background:"transparent",
            border:`1px solid ${T.line}`,
            borderRadius:6, cursor:"pointer",
            padding:"7px 13px",
            fontFamily:"var(--font-space-mono,'Space Mono',monospace)",
            fontSize:9.5, letterSpacing:".18em", textTransform:"uppercase" as const,
            color: ["Creative","Brand","Reputation"].includes(dept) && !CONTENT_MAP[dept] ? T.ink : T.ivory,
          }}>✕ Close</button>
        </div>
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
