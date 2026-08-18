"use client";

import MinimalNav from '@/components/MinimalNav';
import { useEffect, useRef } from "react";
import Link from "next/link";

// ── Studio room palette: ivory/crimson ───────────────────────────────────────
const C = {
  bg:   "#F5F2EC",
  bg2:  "#EDE9E1",
  ink:  "#161210",
  ox:   "#C8102E",   // crimson on light ground
  line: "rgba(22,18,15,.13)",
  dim:  "rgba(22,18,15,.7)",
  low:  "rgba(22,18,15,.46)",
  e:    "cubic-bezier(.16,1,.3,1)",
  fr:   "var(--font-fraunces,'Fraunces',serif)",
  sm:   "var(--font-space-mono,'Space Mono',monospace)",
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

function Kicker({ label, dim = false }: { label: string; dim?: boolean }) {
  return (
    <div style={{ display:"flex", alignItems:"center", gap:".65rem", marginBottom:".9rem" }}>
      <span style={{ display:"block", width:24, height:1, background: dim ? C.low : C.ox, flexShrink:0 }} />
      <span style={{ fontFamily:C.sm, fontSize:10, letterSpacing:".26em", textTransform:"uppercase" as const,
        color: dim ? C.low : C.ox }}>{label}</span>
    </div>
  );
}

const PHASES = [
  { n:"01", sp:"Purpose",
    h:"What you actually", hl:"stand for.",
    out:"A belief, not a slogan.",
    who:"Brand strategists",
    cap:"We find the real reason your business exists beyond making money — the belief a certain kind of customer will choose you for. The bakery that's really about mornings worth waking up for; the gym that's really about proving something to yourself.",
    stat:"64", statE:"%", statP:"say shared values are the main reason they choose one brand over another" },
  { n:"02", sp:"Positioning",
    h:"The one place you", hl:"own.",
    out:"Where you win by default.",
    who:"Brand strategists",
    cap:"Most businesses fight in the same crowded spot and end up competing on price. We find the space that's yours alone — the promise no competitor is making — so that for the right customer you're not the better choice, you're the only one.",
    stat:"1", statP:"position no competitor can take from you — the end of competing on price" },
  { n:"03", sp:"Naming & voice",
    h:"How you", hl:"sound and feel.",
    out:"Recognisable in a dark room.",
    who:"Naming & voice",
    cap:"A name, a voice, a look and a feeling that are unmistakably yours — the same on the sign, the post and the reply. Consistency is what turns a business into something people recognise before they read the name. Even a single signature colour does most of that work.",
    stat:"80", statE:"%", statP:"how much a signature colour can lift brand recognition" },
  { n:"04", sp:"Promise",
    h:"Why they pick you over", hl:"cheaper.",
    out:"The reason to pay more.",
    who:"Brand strategists",
    cap:"A brand's real job is to make price the second question. We build the promise — what a customer can always count on from you — so people choose you knowing you cost more, and feel right about it.",
    stat:"46", statE:"%", statP:"of people will pay more to buy from a brand they trust" },
  { n:"05", sp:"The system",
    h:"Then it shows up the", hl:"same.",
    out:"Everywhere, without slipping.",
    who:"Designers → The Studio",
    cap:"The foundation becomes a system — the rules, the assets, the guardrails — so every menu, ad, post and shopfront looks and sounds like the same business. Then it's handed to the Studio to produce, already knowing exactly what it should be. Consistency alone is worth real money.",
    stat:"23", statE:"%", statP:"how much consistent brand presentation can lift revenue" },
];

const VALUE = [
  ["You can charge more — and they pay it","Price stops being the first question. When people trust and recognise you, they choose you knowing you cost more.","You set the price"],
  ["You stop competing on price","With a position that's yours alone, the right customer has no real alternative — so you win without discounting.","No race to the bottom"],
  ["You're remembered — and recommended","People recall you before they even search, and tell others. 88% trust a word from someone they know over any ad.","88% trust word of mouth"],
  ["Every marketing euro works harder","A consistent brand makes every ad, post and page convert better — the creative alone drives about half of what an ad returns.","~49% of ad return"],
  ["The business itself becomes worth more","A brand is an asset on the business, not a cost — it's what a buyer, investor or partner pays a premium for when it matters.","An asset, not a cost"],
];

const CLUSTERS = [
  ["Strategy",["Brand strategy","Positioning","Naming","Brand architecture","Messaging","Tone of voice","Category audit"]],
  ["Identity",["Logo & marks","Visual identity system","Typography","Colour system","Iconography","Brand guidelines"]],
  ["Content & film",["Photography","Food & product shoots","Video & film","Motion graphics","Illustration","3D & CGI"]],
  ["Digital & product",["Website design","UI / UX","Product design","Landing pages","Social templates","Design systems"]],
  ["Campaign & words",["Campaign concepts","Ad creative","Copywriting","Taglines & scripts","Launch campaigns"]],
  ["Physical & space",["Print & editorial","Packaging","Signage","Environmental","Merch & apparel","Events & exhibitions"]],
];

const FAQS = [
  { q:"Isn't a brand just a logo?", a:"No. A logo is one asset. A brand is the reason a customer chooses you over someone cheaper — what you stand for, the space you own, and the promise people remember." },
  { q:"How is this different from your creative work?", a:"Creative makes a business look worth more — the video, identity and assets. Brand decides what it's worth in the first place — the strategy and foundation that all the creative is built on." },
  { q:"What does a brand foundation actually change?", a:"It lets you stop competing on price, be remembered, charge more, and make every piece of creative consistent and stronger." },
  { q:"Are you an AI company?", a:"No. Real brand strategists and designers build your foundation. A small tool that checks brand consistency is included as a bonus, not the main thing." },
];

// Accent costumes rotation: signal(1), italic(2), boxed(3), underline(4), inverted(5)
const COSTUMES = ["signal","italic","boxed","underline","inverted"];
function Hl({ text, i }: { text: string; i: number }) {
  const c = COSTUMES[i % 5];
  if (c === "italic") return <em style={{ fontFamily:C.fr, fontStyle:"italic", fontWeight:600, color:C.ox }}>{text}</em>;
  if (c === "boxed") return (
    <span style={{ position:"relative" as const }}>
      <span style={{ position:"relative" as const, zIndex:1 }}>{text}</span>
      <span style={{ position:"absolute" as const, inset:"-.06em -.14em", border:`1.5px solid ${C.ox}`, borderRadius:4, pointerEvents:"none" }} />
    </span>
  );
  if (c === "underline") return (
    <span style={{ position:"relative" as const }}>
      {text}
      <span style={{ position:"absolute" as const, left:0, right:0, bottom:".04em", height:2, background:C.ox, borderRadius:1 }} />
    </span>
  );
  if (c === "inverted") return <span style={{ background:C.ink, color:C.bg, padding:"0 .13em", borderRadius:3 }}>{text}</span>;
  return <span style={{ color:C.ox }}>{text}</span>;
}

export default function BrandPageClient() {
  return (
    <div style={{ background:C.bg, color:C.ink, overflowX:"hidden" }}>
      <MinimalNav theme="light" />

      <div style={{ maxWidth:960, margin:"0 auto", padding:"0 22px" }}>

        {/* ── HERO ── */}
        <section style={{ padding:"1.8rem 0 2.2rem", borderBottom:`1px solid ${C.line}` }}>
          <Kicker label="Creative and brand — brand strategy Malta" />
          <h1 style={{ fontFamily:C.fr, fontWeight:900, fontSize:"clamp(2.5rem,10vw,3.7rem)",
            lineHeight:.98, letterSpacing:"-.02em", marginBottom:"1.1rem" }}>
            Everything they see,<br />
            <em style={{ fontStyle:"italic", fontWeight:600, color:C.ox }}>hear and feel.</em>
          </h1>
          <p style={{ fontSize:".98rem", color:C.dim, lineHeight:1.6, maxWidth:"44ch", marginBottom:"1.7rem" }}>
            Every image, film, word, screen, sign and space that makes someone feel something about your
            business — and choose you. Strategy, identity, content, campaigns, the lot.{" "}
            <strong style={{ color:C.ink }}>One team for the entire creative world of your company.</strong>
          </p>
          {/* team chips */}
          <div style={{ marginBottom:"1rem" }}>
            <span style={{ fontFamily:C.sm, fontSize:10, letterSpacing:".16em",
              textTransform:"uppercase" as const, color:C.low, display:"block", marginBottom:".7rem" }}>
              The people on it
            </span>
            <div style={{ display:"flex", flexWrap:"wrap" as const, gap:6 }}>
              {["Brand strategists","Naming & voice","Designers","The Studio"].map(t=>(
                <span key={t} style={{ border:`1px solid ${C.line}`, padding:"6px 10px",
                  fontSize:11, color:C.dim, borderRadius:2, background:"rgba(22,18,15,.04)" }}>{t}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ── PHASES ── */}
        <div style={{ padding:".4rem 0 0" }}>
          <Kicker label="The strategy underneath it all" />
        </div>

        {PHASES.map((p, i) => (
          <Reveal key={i} delay={i * 50}>
            <section style={{ padding:"1.8rem 0 2rem", borderTop:`1px solid ${C.line}` }}>
              <div style={{ display:"flex", alignItems:"baseline", gap:".6rem", marginBottom:".9rem" }}>
                <span style={{ fontFamily:C.fr, fontStyle:"italic", fontWeight:400, fontSize:"1.15rem",
                  color:C.ox }}>{p.n}</span>
                <span style={{ fontFamily:C.sm, fontSize:10.5, letterSpacing:".18em",
                  textTransform:"uppercase" as const, color:C.low }}>{p.sp}</span>
              </div>
              <h2 style={{ fontFamily:C.fr, fontWeight:900,
                fontSize:"clamp(2rem,8.4vw,2.7rem)", lineHeight:1.02, letterSpacing:"-.02em",
                marginBottom:".8rem" }}>
                {p.h} <Hl text={p.hl} i={i} />
              </h2>
              <p style={{ fontFamily:C.fr, fontStyle:"italic", fontWeight:600,
                fontSize:"clamp(1.35rem,5.5vw,1.7rem)", color:C.ink, marginBottom:".9rem", lineHeight:1.2 }}>
                {p.out}
              </p>
              <p style={{ fontFamily:C.sm, fontSize:9.5, letterSpacing:".12em",
                textTransform:"uppercase" as const, color:C.ox, marginBottom:".5rem",
                display:"flex", alignItems:"center", gap:8 }}>
                <span style={{ display:"block", width:16, height:1, background:C.ox, opacity:.5 }} />
                {p.who}
              </p>
              <p style={{ fontSize:".92rem", color:C.dim, lineHeight:1.62,
                marginBottom:"1.1rem", maxWidth:"54ch" }}>{p.cap}</p>
              <div style={{ display:"flex", alignItems:"baseline", gap:".7rem",
                paddingTop:"1rem", borderTop:`1px solid ${C.line}` }}>
                <strong style={{ fontFamily:C.fr, fontWeight:900,
                  fontSize:"clamp(2.4rem,11vw,3.2rem)", letterSpacing:"-.02em", lineHeight:.86, color:C.ink }}>
                  {p.stat}
                  {p.statE && <em style={{ fontStyle:"italic", fontSize:".4em", color:C.ox, fontWeight:600 }}>{p.statE}</em>}
                </strong>
                <p style={{ fontSize:11.5, color:C.low, lineHeight:1.4, maxWidth:"26ch" }}>{p.statP}</p>
              </div>
            </section>
          </Reveal>
        ))}

        {/* ── VALUE ── */}
        <div style={{ padding:"1.7rem 0 .4rem" }}>
          <Kicker label="What it's worth to you" />
        </div>
        {VALUE.map(([h,p,st], i) => (
          <Reveal key={i} delay={i * 50}>
            <div style={{ display:"flex", gap:".9rem", padding:"1.1rem 0",
              borderTop:`1px solid ${C.line}`, opacity:1 }}>
              <span style={{ fontFamily:C.fr, fontStyle:"italic", fontWeight:600, color:C.ox,
                fontSize:"1rem", flexShrink:0, width:"1.5rem", lineHeight:1.5 }}>0{i+1}</span>
              <div>
                <h4 style={{ fontFamily:C.fr, fontWeight:900, fontSize:"1.22rem",
                  letterSpacing:"-.01em", lineHeight:1.12, marginBottom:".35rem" }}>{h}</h4>
                <p style={{ fontSize:".9rem", color:C.dim, lineHeight:1.55, marginBottom:".55rem" }}>{p}</p>
                <span style={{ display:"inline-block", fontFamily:C.sm, fontSize:10,
                  letterSpacing:".06em", textTransform:"uppercase" as const, color:C.ox,
                  border:`1px solid rgba(200,16,46,.3)`, padding:"4px 9px", borderRadius:2 }}>{st}</span>
              </div>
            </div>
          </Reveal>
        ))}

        {/* ── FULL MENU ── */}
        <div style={{ padding:"2rem 0 .4rem" }}>
          <Kicker label="Then we make all of it — one team" />
        </div>
        <Reveal>
          <div style={{ paddingBottom:"1.2rem" }}>
            {CLUSTERS.map((cls, ci) => (
              <div key={ci} style={{ padding:"1.15rem 0", borderTop:`1px solid ${C.line}` }}>
                <h5 style={{ display:"flex", alignItems:"baseline", gap:".55rem",
                  fontFamily:C.sm, fontSize:11, letterSpacing:".14em",
                  textTransform:"uppercase" as const, color:C.ox, marginBottom:".75rem" }}>
                  <span style={{ fontFamily:C.fr, fontStyle:"italic", fontWeight:600, fontSize:"1.05rem",
                    color:"rgba(22,18,15,.3)", letterSpacing:0 }}>0{ci+1}</span>
                  {cls[0] as string}
                </h5>
                <div style={{ display:"flex", flexWrap:"wrap" as const, gap:6 }}>
                  {(cls[1] as string[]).map(x=>(
                    <span key={x} style={{ border:`1px solid ${C.line}`, background:"rgba(22,18,15,.04)",
                      padding:"6px 10px", fontSize:11.5, color:C.dim, borderRadius:2 }}>{x}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ── AI BONUS ── */}
        <Reveal>
          <div style={{ margin:"0 0 1.8rem", padding:"1.3rem 1.4rem",
            border:`1px dashed ${C.line}`, borderRadius:10,
            background:"rgba(22,18,15,.03)" }}>
            <Kicker label="Bonus, included" dim />
            <h4 style={{ fontFamily:C.fr, fontStyle:"italic", fontWeight:600, fontSize:"1.3rem",
              marginBottom:".5rem" }}>Oh — and a little tool, on us.</h4>
            <p style={{ fontSize:".88rem", color:C.dim, lineHeight:1.55 }}>
              A small tool that scans where your brand is showing up inconsistent — an old logo here,
              a wrong colour there — so nothing slips.{" "}
              <strong style={{ color:C.ink }}>Nice to have, not the main event.</strong>{" "}
              The thinking is done by the people above.
            </p>
          </div>
        </Reveal>

        {/* ── FAQ ── */}
        <Reveal>
          <section style={{ padding:"2.2rem 0", borderTop:`1px solid ${C.line}` }}>
            <Kicker label="Straight answers" />
            <h2 style={{ fontFamily:C.fr, fontWeight:900, fontSize:"clamp(1.6rem,5vw,2.3rem)",
              letterSpacing:"-.02em", lineHeight:1.1, maxWidth:"22ch", marginBottom:"1.8rem" }}>
              The questions every owner{" "}
              <em style={{ fontStyle:"italic", fontWeight:600, color:C.ox }}>actually asks.</em>
            </h2>
            {FAQS.map((f,i)=>(
              <Reveal key={i} delay={i*55}>
                <div style={{ borderTop: i>0 ? `1px solid rgba(22,18,15,.07)` : "none",
                  paddingTop: i>0 ? "1.4rem" : 0, paddingBottom:"1.4rem" }}>
                  <h3 style={{ fontFamily:C.fr, fontWeight:900, fontSize:"clamp(1.2rem,3.6vw,1.45rem)",
                    letterSpacing:"-.01em", lineHeight:1.25, color:C.ink, marginBottom:".6rem" }}>{f.q}</h3>
                  <p style={{ fontSize:".98rem", color:C.dim, lineHeight:1.62, maxWidth:"58ch" }}>{f.a}</p>
                </div>
              </Reveal>
            ))}
          </section>
        </Reveal>

        {/* ── CTA ── */}
        <Reveal>
          <section style={{ padding:"2.2rem 0 calc(2.4rem + env(safe-area-inset-bottom))",
            borderTop:`1px solid ${C.line}` }}>
            <h2 style={{ fontFamily:C.fr, fontWeight:900,
              fontSize:"clamp(2.3rem,9.6vw,3.3rem)", lineHeight:1.04, letterSpacing:"-.02em",
              marginBottom:"1.1rem" }}>
              The whole way your business<br />
              <em style={{ fontStyle:"italic", fontWeight:600, color:C.ox }}>looks, sounds and feels.</em>
            </h2>
            <p style={{ fontSize:".95rem", color:C.dim, lineHeight:1.64, maxWidth:"46ch", marginBottom:"1.4rem" }}>
              Strategy that decides what you stand for, and every craft that brings it to life —
              identity, film, digital, campaigns, space.{" "}
              <strong style={{ color:C.ink }}>One team, one standard, everywhere anyone meets you.</strong>
            </p>
            <Link href="/contact" style={{ display:"block", maxWidth:480, textAlign:"center" as const,
              fontFamily:C.sm, fontSize:12, fontWeight:700, letterSpacing:".13em",
              textTransform:"uppercase" as const, color:C.bg, background:C.ox,
              textDecoration:"none", padding:"1.15rem", borderRadius:6, marginBottom:"1.4rem" }}>
              Build our brand foundation →
            </Link>
            <p style={{ fontFamily:C.sm, fontSize:11, color:"rgba(22,18,15,.3)",
              letterSpacing:".04em" }}>OARC — brand strategy Malta · Birkirkara</p>
          </section>
        </Reveal>

      </div>
    </div>
  );
}
