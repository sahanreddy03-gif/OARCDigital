"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

// ── Studio core palette ──────────────────────────────────────────────────────
const C = {
  bg:   "#F0EAE0",
  bg2:  "#EAE3D6",
  ink:  "#191410",
  ox:   "#7E1F2B",
  line: "rgba(25,20,16,.13)",
  dim:  "rgba(25,20,16,.68)",
  low:  "rgba(25,20,16,.45)",
  e:    "cubic-bezier(.16,1,.3,1)",
  fr:   "var(--font-fraunces,'Fraunces',serif)",
  sm:   "var(--font-space-mono,'Space Mono',monospace)",
};

// ── Scroll reveal hook ───────────────────────────────────────────────────────
function useReveal() {
  const box = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = box.current; if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion:reduce)").matches) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.style.transition = `opacity .7s ${C.e}, transform .7s ${C.e}`;
        el.style.opacity = "1"; el.style.transform = "none";
        io.disconnect();
      }
    }, { threshold: .14 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return box;
}

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

// ── Kicker ───────────────────────────────────────────────────────────────────
function Kicker({ label }: { label: string }) {
  return (
    <div style={{ display:"flex", alignItems:"center", gap:".65rem", marginBottom:".9rem" }}>
      <span style={{ display:"block", width:24, height:1, background:C.ox, flexShrink:0 }} />
      <span style={{ fontFamily:C.sm, fontSize:10, letterSpacing:".26em", textTransform:"uppercase" as const, color:C.ox }}>
        {label}
      </span>
    </div>
  );
}

// ── Works data ───────────────────────────────────────────────────────────────
const WORKS = [
  { no:"01", tag:"Big Idea & Campaigns", costume:"signal",
    h:"We find the idea", hl:"everyone repeats.", role:"Creative directors · strategists",
    body:"The concept a whole market ends up talking about — the campaign, the brand platform, the launch, the cultural moment. This is the firepower that separates brands people love from businesses people forget. Not a logo. The idea the logo serves.",
    deliv:["Brand platform","Campaigns","Launches","Cultural moments"],
    stat:"49%", statD:"of marketing return traces to the idea and creative" },
  { no:"02", tag:"Social & Content Studio", costume:"italic",
    h:"We make you", hl:"impossible to scroll past.", role:"Social leads · writers · editors",
    body:"An always-on studio making the content that lives where your buyers already are — short-form, reels, skits, founder POV, trends and UGC — enough of it, on-brand, to be everywhere at once. This is the modern way brands get known, loved and chosen, day after day.",
    deliv:["Always-on social","Reels & skits","Founder POV","Trends & UGC"],
    stat:"50ms", statD:"is all you get to make an impression in the feed" },
  { no:"03", tag:"Brand & Identity", costume:"boxed",
    h:"We make you look like the", hl:"leader.", role:"Art direction · designers",
    body:"The identity system — logo, type, colour, art direction — engineered so you read as the biggest, most trusted name in the room, everywhere a buyer meets you. Consistency is what turns a business into a category leader instead of just another contender.",
    deliv:["Brand identity","Art direction","Design system","Guidelines"],
    stat:"20%", statD:"premium that strongly-branded businesses command (McKinsey)" },
  { no:"04", tag:"Film & Motion", costume:"underline",
    h:"We make you look", hl:"worth millions.", role:"Directors · editors · motion",
    body:"Film, motion and photography — the highest-attention formats there are — produced so a business looks like it is worth far more than it spends. The hero films and motion that make people stop, feel something, and believe you are the real thing.",
    deliv:["Hero films","Motion & VFX","Photography","Edit & post"],
    stat:"2.5×", statD:"the attention film earns over static, second for second" },
  { no:"05", tag:"Ad & Performance Creative", costume:"inverted",
    h:"We make ads that", hl:"actually convert.", role:"Performance creatives · editors",
    body:"The scroll-stopping creative that goes into your paid — hooks, static and video ads, endless variations built and tested to win. We make the work and find the winners; the media buying lives on its own card. Here we make the creative that makes the spend pay.",
    deliv:["Ad concepts & hooks","Static + video ads","Variation testing","Winning edits"],
    stat:"56%", statD:"of paid ROI is the ad creative, not the audience (Nielsen)" },
  { no:"06", tag:"AI Creative Engine", costume:"signal", system:true,
    h:"We build your brand", hl:"a brain.", role:"The one built thing · engineering",
    body:"The single piece of software in the engagement — an AI creative engine trained on your finished brand. It generates on-brand social posts, ad variations and content on demand, at a scale no team could match by hand. Our taste, running when we're not in the room. You own it outright, in your full IP control.",
    deliv:["On-brand asset engine","Social & ad variations","Trained on your brand","Yours to keep — full IP"],
    stat:"24/7", statD:"on-brand social and ad creative, without a queue" },
];

const FAQS = [
  { q:"How does creative make a business worth more?", a:"Creative is the biggest single lever in marketing ROI — around half of the return comes from the work itself, not the targeting. A stronger idea, a distinctive brand and content people remember make a business look bigger, feel more trusted, and able to charge more for the same product." },
  { q:"How can a small business look like a big brand?", a:"With creative firepower, not a bigger budget. Buyers judge you in milliseconds, so a sharp idea, a distinctive identity, and enough on-brand content to be everywhere at once make a small company read as the category leader. People buy the business that looks like the leader." },
  { q:"Do you make ads, or buy media?", a:"We make the ad creative — the hooks, static and video ads, and the variations tested to win — so your spend actually pays. The media buying, targeting and budgets live on our Media card; here we make the creative that makes the spend work." },
  { q:"Do I own the designs and assets you create?", a:"Yes, in full. Every asset, the brand system, and the on-brand AI creative engine we build are handed to you in your complete IP control. You keep them and reuse them freely." },
  { q:"Is this design, or strategy?", a:"Both, plus social, film, ad creative and AI. We are a creative agency in Malta — one team covering the idea and campaigns, the identity, the social and content, the film, the ad creative, and a system you own that makes on-brand work at scale." },
];

// ── Highlight accent by costume ──────────────────────────────────────────────
function Hl({ text, costume }: { text: string; costume: string }) {
  const shared: React.CSSProperties = { color: C.ox };
  if (costume === "italic") return (
    <em style={{ fontFamily:C.fr, fontStyle:"italic", fontWeight:600, color:C.ox }}>{text}</em>
  );
  if (costume === "boxed") return (
    <span style={{ position:"relative" as const, display:"inline-block" }}>
      <span style={{ position:"relative" as const, zIndex:1 }}>{text}</span>
      <span style={{ position:"absolute" as const, inset:"-.06em -.14em", border:`1.5px solid ${C.ox}`, borderRadius:4, pointerEvents:"none" }} />
    </span>
  );
  if (costume === "underline") return (
    <span style={{ position:"relative" as const }}>
      {text}
      <span style={{ position:"absolute" as const, left:0, right:0, bottom:".04em", height:2, background:C.ox, borderRadius:1 }} />
    </span>
  );
  if (costume === "inverted") return (
    <span style={{ background:C.ink, color:C.bg, padding:"0 .13em", borderRadius:3 }}>{text}</span>
  );
  return <span style={shared}>{text}</span>; // signal color (default)
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function CreativePageClient() {
  return (
    <div style={{ background:C.bg, color:C.ink, overflowX:"hidden" }}>
      {/* top bar */}
      <nav style={{ display:"flex", justifyContent:"space-between", alignItems:"center",
        padding:"16px 22px", paddingTop:"max(16px,env(safe-area-inset-top))",
        borderBottom:`1px solid ${C.line}`, background:C.bg }}>
        <Link href="/" style={{ fontFamily:C.sm, fontWeight:700, fontSize:13,
          letterSpacing:"-.01em", color:C.ink, textDecoration:"none" }}>OARC</Link>
        <Link href="/contact" style={{ fontFamily:C.sm, fontSize:10, fontWeight:700,
          letterSpacing:".18em", textTransform:"uppercase", color:C.bg,
          background:C.ox, textDecoration:"none", padding:".55rem 1rem", borderRadius:5 }}>
          Work with us
        </Link>
      </nav>

      <div style={{ maxWidth:960, margin:"0 auto", padding:"0 22px" }}>

        {/* ── HERO ── */}
        <section style={{ padding:"2.4rem 0 2.8rem" }}>
          <Kicker label="Creative firepower — creative agency Malta" />
          <h1 style={{ fontFamily:C.fr, fontWeight:900, fontSize:"clamp(2.9rem,12vw,6.2rem)",
            lineHeight:.92, letterSpacing:"-.03em", marginBottom:"1.3rem" }}>
            Make us look like a{" "}
            <em style={{ fontStyle:"italic", fontWeight:900, color:C.ox }}>billion.</em>
          </h1>
          <p style={{ fontSize:"clamp(1.06rem,1.9vw,1.3rem)", color:C.dim, lineHeight:1.55,
            marginBottom:"2.2rem", maxWidth:"46ch" }}>
            Whatever your size, we make you look like the category leader — the brand people remember,
            screenshot, and pay a premium for. Big ideas, an always-on social engine, films, ad creative
            that converts, and a system that makes it all.{" "}
            <strong style={{ color:C.ink }}>One team, full firepower.</strong>
          </p>
          {/* stats */}
          <div style={{ display:"flex", flexWrap:"wrap" as const, gap:"1.6rem 2.4rem" }}>
            {[["49%","of marketing return is the creative itself"],
              ["50ms","is all a buyer needs to judge your brand"],
              ["20%","premium that leader-looking brands command"]].map(([n,l])=>(
              <div key={n} style={{ position:"relative" as const, paddingLeft:"1rem" }}>
                <span style={{ position:"absolute" as const, left:0, top:".1rem", bottom:".4rem", width:2, background:C.ox, borderRadius:2 }} />
                <strong style={{ display:"block", fontFamily:C.sm, fontWeight:700,
                  fontSize:"clamp(1.8rem,7vw,2.4rem)", lineHeight:.85, color:C.ink,
                  letterSpacing:"-.03em" }}>{n}</strong>
                <span style={{ display:"block", fontSize:11.5, color:C.low, lineHeight:1.35,
                  marginTop:".4rem", maxWidth:"18ch" }}>{l}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── THESIS ── */}
        <Reveal>
          <section style={{ borderTop:`1px solid ${C.line}`, borderBottom:`1px solid ${C.line}`,
            padding:"2.4rem 0", marginBottom:"2rem" }}>
            <Kicker label="Why this matters now" />
            <h2 style={{ fontFamily:C.fr, fontWeight:900, fontSize:"clamp(1.9rem,5.6vw,2.9rem)",
              lineHeight:1.08, letterSpacing:"-.02em", maxWidth:"18ch", marginBottom:"1.2rem" }}>
              Looking small is a{" "}
              <em style={{ fontStyle:"italic", fontWeight:600, color:C.ox }}>choice.</em>
            </h2>
            <p style={{ fontSize:"1rem", color:C.dim, lineHeight:1.62, maxWidth:"54ch" }}>
              Buyers judge you in milliseconds, against brands with a hundred times your budget —
              and everyone now has the same average AI content. What closes that gap isn't a bigger spend.
              It's a sharper idea, a look that's unmistakably yours, and enough on-brand work to be everywhere
              at once. Firepower, not decoration. That's what a real creative team is for.
            </p>
          </section>
        </Reveal>

        {/* ── THE WORKS ── */}
        <Kicker label="The firepower, as one team" />
        <h2 style={{ fontFamily:C.fr, fontWeight:900, fontSize:"clamp(1.6rem,5vw,2.3rem)",
          letterSpacing:"-.02em", lineHeight:1.1, maxWidth:"22ch", marginBottom:"1.8rem" }}>
          Six crafts —{" "}
          <em style={{ fontStyle:"italic", fontWeight:600, color:C.ox }}>one point of view.</em>
        </h2>

        {WORKS.map((w, i) => (
          <Reveal key={i} delay={i * 40}>
            <div style={{ borderTop: w.system ? "none" : `1px solid ${C.line}`,
              background: w.system ? `linear-gradient(160deg,rgba(126,31,43,.06),transparent)` : "transparent",
              border: w.system ? `1px solid rgba(126,31,43,.22)` : undefined,
              borderRadius: w.system ? 14 : undefined,
              padding: w.system ? "1.8rem 1.4rem" : "2rem 0",
              marginBottom: w.system ? ".6rem" : 0 }}>
              <div style={{ display:"flex", alignItems:"baseline", gap:".9rem", marginBottom:".8rem" }}>
                <span style={{ fontFamily:C.fr, fontStyle:"italic", fontWeight:400, fontSize:"1.4rem",
                  color:C.ox, lineHeight:1, width:40, flexShrink:0 }}>{w.no}</span>
                <span style={{ fontFamily:C.sm, fontSize:9.5, letterSpacing:".15em",
                  textTransform:"uppercase" as const, color:C.low,
                  border:`1px solid ${C.line}`, borderRadius:20, padding:".32rem .7rem" }}>{w.tag}</span>
              </div>
              <h3 style={{ fontFamily:C.fr, fontWeight:900, fontSize:"clamp(1.8rem,5.6vw,2.5rem)",
                letterSpacing:"-.02em", lineHeight:1.02, marginBottom:".9rem" }}>
                {w.h}{" "}<Hl text={w.hl} costume={w.costume} />
              </h3>
              <p style={{ fontFamily:C.sm, fontSize:9.5, letterSpacing:".14em",
                textTransform:"uppercase" as const, color:C.low, marginBottom:".7rem" }}>{w.role}</p>
              <p style={{ fontSize:"1rem", color:C.dim, lineHeight:1.62, maxWidth:"56ch", marginBottom:"1.1rem" }}>
                {w.body}
              </p>
              <div style={{ display:"flex", flexWrap:"wrap" as const, gap:".5rem", marginBottom:"1.2rem" }}>
                {w.deliv.map(d => (
                  <span key={d} style={{ fontSize:11.5, fontWeight:500, color:C.ink,
                    background:"rgba(25,20,16,.07)", borderRadius:5, padding:".44rem .74rem" }}>{d}</span>
                ))}
              </div>
              {w.system && (
                <div style={{ display:"flex", alignItems:"center", gap:".5rem", marginBottom:".9rem",
                  fontFamily:C.sm, fontSize:10.5, letterSpacing:".11em",
                  textTransform:"uppercase" as const, color:C.ox }}>
                  <span style={{ width:7, height:7, borderRadius:"50%", background:C.ox }} />
                  Trained on your brand · handed to you · your IP
                </div>
              )}
              <div style={{ display:"flex", alignItems:"baseline", gap:".75rem",
                borderLeft:`2px solid ${C.ox}`, paddingLeft:".95rem" }}>
                <strong style={{ fontFamily:C.fr, fontSize:"clamp(2rem,7vw,2.7rem)",
                  fontWeight:900, lineHeight:.8, color:C.ink }}>{w.stat}</strong>
                <p style={{ fontSize:12, color:C.low, lineHeight:1.35, maxWidth:"26ch" }}>{w.statD}</p>
              </div>
            </div>
          </Reveal>
        ))}

        {/* ── BEFORE / AFTER ── */}
        <Reveal>
          <section style={{ padding:"2.2rem 0", borderTop:`1px solid ${C.line}` }}>
            <Kicker label="What changes when we make it" />
            <h2 style={{ fontFamily:C.fr, fontWeight:900, fontSize:"clamp(1.6rem,5vw,2.3rem)",
              letterSpacing:"-.02em", lineHeight:1.1, marginBottom:"1.6rem" }}>
              The <em style={{ fontStyle:"italic", fontWeight:600, color:C.ox }}>before</em> and after.
            </h2>
            {[["How big you look","one of many","the category leader"],
              ["What you can charge","the cheapest quote","a premium, paid gladly"],
              ["In the feed","scrolled past","screenshotted and shared"]].map(([label,b,a])=>(
              <div key={label} style={{ borderTop:`1px solid rgba(25,20,16,.07)`, padding:"1.2rem 0" }}>
                <span style={{ display:"block", fontFamily:C.sm, fontSize:10, fontWeight:700,
                  letterSpacing:".14em", textTransform:"uppercase" as const, color:C.ox,
                  marginBottom:".5rem" }}>{label}</span>
                <div style={{ display:"flex", alignItems:"center", gap:".7rem", flexWrap:"wrap" as const }}>
                  <span style={{ fontSize:"1rem", color:C.low,
                    textDecoration:"line-through", textDecorationColor:"rgba(25,20,16,.3)" }}>{b}</span>
                  <span style={{ color:C.ox, fontWeight:700, fontSize:"1.1rem" }}>→</span>
                  <span style={{ fontFamily:C.fr, fontSize:"1.2rem", fontWeight:900, color:C.ink }}>{a}</span>
                </div>
              </div>
            ))}
          </section>
        </Reveal>

        {/* ── GUARANTEE ── */}
        <Reveal>
          <div style={{ background:C.ink, color:C.bg, borderRadius:16, padding:"2.4rem 1.6rem",
            margin:"2.2rem 0" }}>
            <Kicker label="Our guarantee" />
            <h2 style={{ fontFamily:C.fr, fontWeight:900, fontSize:"clamp(1.9rem,5.8vw,2.8rem)",
              lineHeight:1.08, letterSpacing:"-.02em", maxWidth:"19ch", marginBottom:"1rem",
              color:C.bg }}>
              If the work doesn't make you look bigger and{" "}
              <em style={{ fontStyle:"italic", fontWeight:600, color:"rgba(240,234,224,.7)" }}>worth more</em>,
              we keep going until it does.
            </h2>
            <p style={{ fontSize:"1rem", color:"rgba(240,234,224,.8)", lineHeight:1.6, maxWidth:"52ch" }}>
              Creative is judged, not billed by the hour — so we don't charge for effort, we deliver work
              you'd put your name on and a brand that reads like the leader. We refine until it's undeniable.
              You carry none of the risk of trying us.
            </p>
            <p style={{ fontFamily:C.fr, fontStyle:"italic", fontSize:"1.15rem",
              color:"rgba(240,234,224,.7)", marginTop:"1.4rem" }}>— OARC, your one team. Malta.</p>
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
              <Reveal key={i} delay={i * 55}>
                <div style={{ borderTop: i>0 ? `1px solid rgba(25,20,16,.07)` : "none",
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
          <section style={{ padding:"2.4rem 0 calc(3rem + env(safe-area-inset-bottom))",
            borderTop:`1px solid ${C.line}` }}>
            <Kicker label="How we start" />
            {[["01","Read","We learn your business, your buyers and your market — and find the idea only you can own."],
              ["02","Make","We build the brand, the social engine, the films and the ad creative — and the AI system that makes it at scale."],
              ["03","Scale","We hand you the system, keep you consistent everywhere, and push the bar higher over time."]].map(([n,h,p])=>(
              <div key={n} style={{ display:"flex", gap:"1rem", borderTop: n!=="01" ? `1px solid rgba(25,20,16,.07)` : "none",
                padding:"1.2rem 0" }}>
                <span style={{ fontFamily:C.fr, fontStyle:"italic", fontWeight:400, fontSize:"1.6rem",
                  color:C.ox, width:40, flexShrink:0, lineHeight:1 }}>{n}</span>
                <div>
                  <h4 style={{ fontSize:"1.1rem", fontWeight:700, letterSpacing:"-.01em" }}>{h}</h4>
                  <p style={{ fontSize:".96rem", color:C.dim, lineHeight:1.55, marginTop:".3rem", maxWidth:"52ch" }}>{p}</p>
                </div>
              </div>
            ))}
            <div style={{ marginTop:"2rem" }}>
              <h2 style={{ fontFamily:C.fr, fontWeight:900,
                fontSize:"clamp(2.4rem,9vw,3.8rem)", letterSpacing:"-.02em", lineHeight:.98,
                marginBottom:"1.1rem" }}>
                Look like a billion.<br />
                <em style={{ fontStyle:"italic", fontWeight:600, color:C.ox }}>Be worth it.</em>
              </h2>
              <p style={{ fontSize:"clamp(1.05rem,1.9vw,1.3rem)", color:C.dim, lineHeight:1.45,
                maxWidth:"34ch", marginBottom:"1.6rem" }}>
                You keep every asset, the brand system, and the engine that makes more.
                We keep you looking like the leader.
              </p>
              <Link href="/contact" style={{ display:"inline-flex", alignItems:"center", gap:".6rem",
                fontFamily:C.sm, fontSize:12, fontWeight:700, letterSpacing:".13em",
                textTransform:"uppercase" as const, color:C.bg, background:C.ox,
                textDecoration:"none", padding:"1.1rem 1.8rem", borderRadius:4 }}>
                Book the creative audit →
              </Link>
            </div>
          </section>
        </Reveal>

        {/* footer line */}
        <p style={{ fontFamily:C.sm, fontSize:11, color:"rgba(25,20,16,.3)",
          letterSpacing:".04em", paddingBottom:"calc(1.6rem + env(safe-area-inset-bottom))",
          borderTop:`1px solid ${C.line}`, paddingTop:"1.4rem" }}>
          OARC — creative agency Malta · Birkirkara
        </p>
      </div>
    </div>
  );
}
