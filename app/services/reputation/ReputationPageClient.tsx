"use client";

import MinimalNav from '@/components/MinimalNav';
import { useEffect, useRef } from "react";
import Link from "next/link";

// ── Studio core palette (different layout formation for Reputation) ───────────
const C = {
  bg:   "#F0EAE0",
  bg2:  "#E8E0D0",
  ink:  "#191410",
  ox:   "#7E1F2B",
  line: "rgba(25,20,16,.13)",
  dim:  "rgba(25,20,16,.68)",
  low:  "rgba(25,20,16,.45)",
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
      <span style={{ fontFamily:C.sm, fontSize:10, letterSpacing:".26em",
        textTransform:"uppercase" as const, color: dim ? C.low : C.ox }}>{label}</span>
    </div>
  );
}

// Accent costumes — rotate, never repeat
const COSTUMES = ["signal","italic","boxed","underline","inverted"] as const;
function Hl({ text, i }: { text: string; i: number }) {
  const c = COSTUMES[i % 5];
  if (c === "italic") return <em style={{ fontFamily:C.fr, fontStyle:"italic", fontWeight:600, color:C.ox }}>{text}</em>;
  if (c === "boxed") return (
    <span style={{ position:"relative" as const }}>
      {text}
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

const STAGES = [
  { no:"01", tag:"Videos & reels", costume:0,
    h:"We make videos & reels that get you", hl:"seen.",
    role:"Video & content team",
    body:"Fame today is made in video. We produce the reels, short videos and social posts that actually get watched and shared — putting you in front of thousands who've never heard of you — so they walk in, order or book.",
    deliv:["Reels & short video","Founder videos","Social content","Made to be shared"],
    stat:"10×", statD:"a single reel can out-reach a month of plain posts",
    feed:"Now thousands are watching." },
  { no:"02", tag:"In the news", costume:1,
    h:"We get you", hl:"in the news.",
    role:"PR & story team",
    body:"People believe what they read about you more than what you say about yourself. We find the story worth covering and get it in front of the press — so your name shows up where it counts, feels official, and people trust you before they meet you.",
    deliv:["Press coverage","News features","A story worth telling","Launch moments"],
    stat:"90%", statD:"of getting covered is simply having a story worth telling",
    feed:"Then it feels official — you're legit." },
  { no:"03", tag:"The buzz", costume:2,
    h:"We get the right people", hl:"talking about you.",
    role:"Creator & partnerships team",
    body:"People trust the voices they already follow. We get you onto podcasts and working with the creators your customers watch — so your name arrives from someone they already believe — and they pick you first.",
    deliv:["Creator collabs","Podcast features","Real recommendations","Partnerships"],
    stat:"3×", statD:"a recommendation from someone trusted beats any ad you could run",
    feed:"Then everyone starts trusting you." },
  { no:"04", tag:"Everywhere", costume:3,
    h:"We put you", hl:"everywhere they look.",
    role:"Distribution team",
    body:"A great video or story nobody sees is a waste. We get your name spread across every place your customers spend time — social, communities and search — so it hits hard, hits wide, and the right customers keep finding you.",
    deliv:["Shared everywhere","Every platform","Communities","Top of search"],
    stat:"5×", statD:"the reach when your name is spread wide, not posted once",
    feed:"" },
];

const INDUSTRIES = [
  ["Shop or online store","More orders, without paying for every click."],
  ["Restaurant","A full room, night after night."],
  ["Hotel","Direct bookings — less lost to the big sites."],
  ["Clinic or hospital","Patients who trust you before they walk in."],
  ["Gaming or iGaming","Players who sign up because they've heard of you."],
  ["Any Malta business","The name people pick without thinking."],
];

const FAQS = [
  { q:"How do you make a business or founder famous?", a:"We do four simple things, over and over: make videos and reels that get you seen, get you in the news, get the right people talking about you, and put you everywhere people look. Each one makes the next one bigger, so your name keeps growing instead of resetting." },
  { q:"Do you actually make the videos and content?", a:"Yes — that is the heart of it. We produce the reels, short videos and social content that get watched and shared, which is how brands get famous today. Video is the number one way people discover a business they have never heard of." },
  { q:"Why is being known better than running ads?", a:"Ads stop the moment you stop paying — you disappear. Being known keeps working for free. Videos, press and a name people trust stay with you and grow every time your name comes up. Around 88% of people trust a real person over any ad." },
  { q:"Are you an AI company?", a:"No. We are a creative and content team — the famous part is the work people do: videos, press and getting the right people to talk about you. We include a small AI tool that hears your mentions as a bonus, but that is an extra, not the main thing." },
];

export default function ReputationPageClient() {
  return (
    <div style={{ background:C.bg, color:C.ink, overflowX:"hidden" }}>
      <MinimalNav theme="light" />

      <div style={{ maxWidth:960, margin:"0 auto", padding:"0 22px" }}>

        {/* ── HERO ── */}
        <section style={{ padding:"2.2rem 0 2.6rem" }}>
          <Kicker label="The fame engagement — reputation management Malta" />
          <h1 style={{ fontFamily:C.fr, fontWeight:900,
            fontSize:"clamp(3rem,13.5vw,6.6rem)", lineHeight:.9,
            letterSpacing:"-.04em", marginBottom:"1.3rem" }}>
            Make me<br />
            <span style={{ background:C.ox, color:C.bg,
              padding:".02em .16em", borderRadius:5,
              display:"inline-block" }}>famous.</span>
          </h1>
          <p style={{ fontSize:"clamp(1.08rem,2vw,1.32rem)", color:C.dim, lineHeight:1.55,
            maxWidth:"45ch", marginBottom:"2.2rem" }}>
            Famous means people know you before you say a word — and pick you because of it.
            We make the videos and reels that get you seen, get you in the news, and get the right
            people talking — until you're the name everyone knows.
          </p>
          {/* stats — editorial, written as words */}
          <div style={{ display:"flex", flexWrap:"wrap" as const, gap:"1.5rem 2.4rem" }}>
            {[["88%","trust a real person more than any ad"],
              ["9 in 10","discover new brands through video and social"],
              ["1st","people buy the name they already know"]].map(([n,l])=>(
              <div key={n} style={{ position:"relative" as const, paddingLeft:"1rem" }}>
                <span style={{ position:"absolute" as const, left:0, top:".1rem", bottom:".4rem",
                  width:2, background:C.ox, borderRadius:2 }} />
                <strong style={{ display:"block", fontFamily:C.fr, fontWeight:900,
                  fontSize:"clamp(1.8rem,7.8vw,3.2rem)", letterSpacing:"-.03em", lineHeight:.85,
                  color:C.ink }}>{n}</strong>
                <span style={{ display:"block", fontSize:11.5, color:C.low, lineHeight:1.4,
                  marginTop:".55rem", maxWidth:"18ch" }}>{l}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── THESIS ── */}
        <Reveal>
          <section style={{ borderTop:`1.5px solid ${C.ink}`, borderBottom:`1.5px solid ${C.ink}`,
            padding:"2.4rem 0", marginBottom:"2rem" }}>
            <Kicker label="Why this matters" />
            <h2 style={{ fontFamily:C.fr, fontWeight:900, fontSize:"clamp(2.1rem,6.4vw,3.1rem)",
              lineHeight:1, letterSpacing:"-.03em", maxWidth:"15ch", marginBottom:"1.2rem" }}>
              People buy names they know.
            </h2>
            <p style={{ fontSize:"1.02rem", color:C.dim, lineHeight:1.62, maxWidth:"52ch" }}>
              The best business doesn't win. The best-known one does. We make you that name — and keep you there.
            </p>
          </section>
        </Reveal>

        {/* ── WHAT YOU ACTUALLY GET ── */}
        <Reveal>
          <section style={{ padding:"2.6rem 0", borderBottom:`1.5px solid ${C.ink}` }}>
            <Kicker label="What you actually get" />
            <h2 style={{ fontFamily:C.fr, fontWeight:900,
              fontSize:"clamp(1.9rem,6vw,2.7rem)", lineHeight:1, letterSpacing:"-.03em",
              marginBottom:".2rem" }}>
              "Famous" is just the{" "}
              <em style={{ fontStyle:"italic", fontWeight:600, color:C.ox }}>word.</em>
            </h2>
            <p style={{ fontSize:"1.02rem", color:C.dim, lineHeight:1.55, marginBottom:"1.5rem",
              maxWidth:"50ch" }}>
              More people who already want you — before you spend a cent chasing them:
            </p>
            {INDUSTRIES.map(([who, what]) => (
              <div key={who} style={{ borderTop:`1px solid ${C.line}`, padding:"1rem 0" }}>
                <span style={{ display:"block", fontFamily:C.sm, fontSize:10.5, fontWeight:700,
                  letterSpacing:".12em", textTransform:"uppercase" as const, color:C.ox,
                  marginBottom:".32rem" }}>{who}</span>
                <span style={{ fontFamily:C.fr, fontWeight:900, fontSize:"clamp(1.18rem,4.2vw,1.5rem)",
                  color:C.ink, lineHeight:1.12, letterSpacing:"-.02em" }}>{what}</span>
              </div>
            ))}
            <h3 style={{ fontFamily:C.fr, fontWeight:900,
              fontSize:"clamp(1.4rem,4.8vw,1.9rem)", letterSpacing:"-.03em", lineHeight:1.05,
              marginTop:"1.7rem" }}>
              Whatever you sell, famous means{" "}
              <span style={{ color:C.ox }}>chosen first.</span>
            </h3>
          </section>
        </Reveal>

        {/* ── MECHANISM — ads vs fame ── */}
        <Reveal>
          <section style={{ padding:"2.6rem 0" }}>
            <Kicker label="Here's the difference" />
            <h2 style={{ fontFamily:C.fr, fontWeight:900,
              fontSize:"clamp(1.9rem,6vw,2.7rem)", lineHeight:1, letterSpacing:"-.03em",
              marginBottom:"1.4rem" }}>
              Ads stop. Fame{" "}
              <em style={{ fontStyle:"italic", fontWeight:600, color:C.ox }}>doesn't.</em>
            </h2>
            <div style={{ border:`1.5px solid ${C.ink}`, borderRadius:14, padding:"1.4rem 1.2rem",
              background:"rgba(25,20,16,.03)" }}>
              <div style={{ display:"flex", gap:"1.4rem", marginBottom:"1rem", flexWrap:"wrap" as const }}>
                {[["rgba(25,20,16,.28)","Ads — you pay to show up"],
                  [C.ox,"Fame — keeps working free"]].map(([col,lbl])=>(
                  <div key={lbl} style={{ display:"flex", alignItems:"center", gap:".45rem",
                    fontSize:11.5, fontWeight:600, color:C.dim }}>
                    <span style={{ width:16, height:3, borderRadius:2, background:col, display:"inline-block" }} />
                    {lbl}
                  </div>
                ))}
              </div>
              {/* ASCII-ish chart substitute */}
              <svg viewBox="0 0 300 120" style={{ width:"100%", height:"auto", display:"block" }}
                aria-label="Ads drop when you stop paying; fame keeps growing">
                <line x1="12" y1="14" x2="12" y2="106" stroke="rgba(25,20,16,.18)" strokeWidth="1" />
                <line x1="12" y1="106" x2="288" y2="106" stroke="rgba(25,20,16,.18)" strokeWidth="1" />
                <line x1="170" y1="14" x2="170" y2="106" stroke="rgba(25,20,16,.2)" strokeWidth="1" strokeDasharray="3 3" />
                <text x="170" y="11" textAnchor="middle" fontSize="7" fill="rgba(25,20,16,.5)"
                  fontFamily="'Space Mono',monospace">you stop paying</text>
                {/* ads line */}
                <path d="M22,100 L70,72 L118,56 L158,52 L170,56 L215,80 L280,100"
                  fill="none" stroke="rgba(25,20,16,.35)" strokeWidth="2.5" strokeLinecap="round" />
                {/* fame line */}
                <path d="M22,108 C70,106 128,94 168,74 C210,54 248,28 280,14"
                  fill="none" stroke={C.ox} strokeWidth="2.5" strokeLinecap="round" />
                <text x="284" y="17" textAnchor="end" fontSize="8" fontWeight="700" fill={C.ox}
                  fontFamily="'Space Mono',monospace">fame</text>
                <text x="284" y="104" textAnchor="end" fontSize="8" fill="rgba(25,20,16,.4)"
                  fontFamily="'Space Mono',monospace">ads</text>
                <text x="22" y="118" fontSize="7" fill="rgba(25,20,16,.4)"
                  fontFamily="'Space Mono',monospace">time →</text>
              </svg>
              <p style={{ fontSize:12.5, color:C.low, lineHeight:1.5, marginTop:"1.1rem", maxWidth:"52ch" }}>
                <strong style={{ color:C.ox }}>Stop paying for ads and you disappear.</strong>{" "}
                Fame keeps working after you stop — and it grows every single time your name comes up.
              </p>
            </div>
          </section>
        </Reveal>

        {/* ── THE FOUR STAGES ── */}
        <Kicker label="How we make you famous" />
        <h2 style={{ fontFamily:C.fr, fontWeight:900,
          fontSize:"clamp(1.9rem,6vw,2.7rem)", letterSpacing:"-.03em", lineHeight:1.02,
          maxWidth:"18ch", marginBottom:"1.6rem" }}>
          Four simple moves.{" "}
          <em style={{ fontStyle:"italic", fontWeight:600, color:C.ox }}>One team.</em>
        </h2>

        {STAGES.map((s, i) => (
          <Reveal key={i} delay={i * 50}>
            <div style={{ padding:"1.9rem 0", borderTop:`1.5px solid ${C.ink}` }}>
              <div style={{ display:"flex", alignItems:"baseline", gap:".9rem", marginBottom:".55rem" }}>
                <span style={{ fontFamily:C.fr, fontWeight:900, fontSize:"1.5rem",
                  color:C.ox, width:38, flexShrink:0 }}>{s.no}</span>
                <span style={{ fontFamily:C.sm, fontSize:9.5, letterSpacing:".13em",
                  textTransform:"uppercase" as const, color:C.low,
                  border:`1px solid ${C.line}`, borderRadius:20, padding:".3rem .68rem" }}>{s.tag}</span>
              </div>
              <h3 style={{ fontFamily:C.fr, fontWeight:900,
                fontSize:"clamp(1.8rem,6vw,2.5rem)", letterSpacing:"-.03em", lineHeight:1,
                marginBottom:".6rem" }}>
                {s.h} <Hl text={s.hl} i={s.costume} />
              </h3>
              <p style={{ fontFamily:C.sm, fontSize:10, letterSpacing:".14em",
                textTransform:"uppercase" as const, color:C.ox, marginBottom:".7rem" }}>{s.role}</p>
              <p style={{ fontSize:"1.02rem", color:C.dim, lineHeight:1.6,
                maxWidth:"54ch", marginBottom:"1.1rem" }}>{s.body}</p>
              <div style={{ display:"flex", flexWrap:"wrap" as const, gap:".5rem", marginBottom:"1.3rem" }}>
                {s.deliv.map(d=>(
                  <span key={d} style={{ fontSize:11.5, fontWeight:600, color:C.ink,
                    background:"rgba(25,20,16,.06)", borderRadius:5, padding:".44rem .74rem" }}>{d}</span>
                ))}
              </div>
              <div style={{ display:"flex", alignItems:"baseline", gap:".7rem",
                borderLeft:`3px solid ${C.ox}`, paddingLeft:".9rem", marginBottom: s.feed ? "1rem" : 0 }}>
                <strong style={{ fontFamily:C.fr, fontWeight:900,
                  fontSize:"clamp(2rem,7vw,2.7rem)", lineHeight:.8, color:C.ink }}>{s.stat}</strong>
                <p style={{ fontSize:12, color:C.low, lineHeight:1.35, maxWidth:"28ch" }}>{s.statD}</p>
              </div>
              {s.feed && (
                <p style={{ fontFamily:C.sm, fontSize:11, fontWeight:700, letterSpacing:".02em",
                  color:C.ox, paddingTop:".85rem", borderTop:`1px solid ${C.line}` }}>↓ {s.feed}</p>
              )}
            </div>
          </Reveal>
        ))}

        {/* loop note */}
        <Reveal>
          <p style={{ textAlign:"center" as const, fontFamily:C.fr, fontWeight:900,
            fontSize:"clamp(1.15rem,3.8vw,1.5rem)", letterSpacing:"-.02em",
            padding:"1.6rem 0 .4rem", borderTop:`1.5px solid ${C.ink}` }}>
            Then it starts again —{" "}
            <em style={{ fontStyle:"italic", fontWeight:600, color:C.ox }}>bigger every time.</em>
          </p>
        </Reveal>

        {/* ── BONUS TOOL ── */}
        <Reveal>
          <div style={{ border:`1.5px dashed ${C.line}`, borderRadius:14, padding:"1.5rem 1.3rem",
            margin:"1.6rem 0 .4rem", background:"transparent" }}>
            <Kicker label="Bonus, included" dim />
            <h3 style={{ fontFamily:C.fr, fontWeight:900,
              fontSize:"clamp(1.25rem,4vw,1.55rem)", letterSpacing:"-.02em", lineHeight:1.1,
              marginBottom:".55rem" }}>
              Oh — and a little tool, on us.
            </h3>
            <p style={{ fontSize:".97rem", color:C.dim, lineHeight:1.6, maxWidth:"56ch" }}>
              A simple tool that pings you when anyone mentions you online.{" "}
              <strong style={{ color:C.ink }}>Nice to have — not the main event.</strong>
            </p>
          </div>
        </Reveal>

        {/* ── BEFORE / AFTER ── */}
        <Reveal>
          <section style={{ padding:"2.2rem 0", borderTop:`1.5px solid ${C.ink}` }}>
            <Kicker label="What changes" />
            <h2 style={{ fontFamily:C.fr, fontWeight:900, fontSize:"clamp(1.6rem,5vw,2.3rem)",
              letterSpacing:"-.02em", lineHeight:1.1, marginBottom:"1.6rem" }}>
              The <em style={{ fontStyle:"italic", fontWeight:600, color:C.ox }}>before</em> and after.
            </h2>
            {[["How known you are","nobody's heard of you","the name everyone knows"],
              ["When people look you up","they find others","they find you"],
              ["Meeting new people","you explain who you are","they already know you"],
              ["Winning the customer","you chase every sale","they come already sold"]].map(([lbl,b,a])=>(
              <div key={lbl} style={{ borderTop:`1px solid rgba(25,20,16,.1)`, padding:"1.2rem 0" }}>
                <span style={{ display:"block", fontFamily:C.sm, fontSize:10, fontWeight:700,
                  letterSpacing:".13em", textTransform:"uppercase" as const, color:C.ox,
                  marginBottom:".5rem" }}>{lbl}</span>
                <div style={{ display:"flex", alignItems:"center", gap:".7rem", flexWrap:"wrap" as const }}>
                  <span style={{ fontSize:"1.02rem", color:C.low,
                    textDecoration:"line-through", textDecorationColor:"rgba(25,20,16,.28)" }}>{b}</span>
                  <span style={{ color:C.ox, fontWeight:800, fontSize:"1.1rem" }}>→</span>
                  <span style={{ fontFamily:C.fr, fontWeight:900, fontSize:"1.2rem", color:C.ink }}>{a}</span>
                </div>
              </div>
            ))}
          </section>
        </Reveal>

        {/* ── GUARANTEE ── */}
        <Reveal>
          <div style={{ background:C.ox, color:"#fff", borderRadius:16, padding:"2.4rem 1.6rem",
            margin:"2.2rem 0" }}>
            <p style={{ fontFamily:C.sm, fontSize:11, fontWeight:700, letterSpacing:".2em",
              textTransform:"uppercase" as const, color:"rgba(255,255,255,.7)", marginBottom:".5rem" }}>
              Our guarantee
            </p>
            <h2 style={{ fontFamily:C.fr, fontWeight:900,
              fontSize:"clamp(1.9rem,5.8vw,2.8rem)", lineHeight:1.05, letterSpacing:"-.03em",
              maxWidth:"18ch", marginBottom:"1.2rem" }}>
              If more people aren't finding you and choosing you in 90 days, we keep going until they are.
            </h2>
            <p style={{ fontSize:"1.02rem", color:"rgba(255,255,255,.9)", lineHeight:1.6, maxWidth:"52ch" }}>
              We tie ourselves to the result, not hours. If it isn't moving, we keep going — free.
              You risk nothing.
            </p>
            <p style={{ fontFamily:C.fr, fontWeight:600, fontSize:"1.05rem",
              color:"#fff", marginTop:"1.4rem", opacity:.85 }}>— OARC, your one team. Malta.</p>
          </div>
        </Reveal>

        {/* ── FAQ ── */}
        <Reveal>
          <section style={{ padding:"2.2rem 0", borderTop:`1.5px solid ${C.ink}` }}>
            <Kicker label="Straight answers" />
            <h2 style={{ fontFamily:C.fr, fontWeight:900, fontSize:"clamp(1.6rem,5vw,2.3rem)",
              letterSpacing:"-.02em", lineHeight:1.1, maxWidth:"22ch", marginBottom:"1.8rem" }}>
              The questions everyone{" "}
              <em style={{ fontStyle:"italic", fontWeight:600, color:C.ox }}>actually asks.</em>
            </h2>
            {FAQS.map((f,i)=>(
              <Reveal key={i} delay={i*55}>
                <div style={{ borderTop: i>0 ? `1px solid rgba(25,20,16,.1)` : "none",
                  paddingTop: i>0 ? "1.4rem" : 0, paddingBottom:"1.4rem" }}>
                  <h3 style={{ fontFamily:C.fr, fontWeight:900,
                    fontSize:"clamp(1.25rem,3.8vw,1.5rem)", letterSpacing:"-.02em", lineHeight:1.22,
                    color:C.ink, marginBottom:".6rem" }}>{f.q}</h3>
                  <p style={{ fontSize:"1rem", color:C.dim, lineHeight:1.62, maxWidth:"58ch" }}>{f.a}</p>
                </div>
              </Reveal>
            ))}
          </section>
        </Reveal>

        {/* ── CTA ── */}
        <Reveal>
          <section style={{ padding:"2.4rem 0 calc(3rem + env(safe-area-inset-bottom))",
            borderTop:`1.5px solid ${C.ink}` }}>
            <Kicker label="How we start" />
            {[["01","Find your story","We find the story and the videos worth making about your business."],
              ["02","Get people talking","We make the content, get you in the news, and get the right people saying your name."],
              ["03","Keep it going","We keep it spreading everywhere, week after week. First results in weeks, compounding from there, so your name never goes quiet."]].map(([n,h,p])=>(
              <div key={n} style={{ display:"flex", gap:"1rem",
                borderTop: n!=="01" ? `1px solid rgba(25,20,16,.1)` : "none",
                padding:"1.2rem 0" }}>
                <span style={{ fontFamily:C.fr, fontWeight:900, fontSize:"1.5rem",
                  color:C.ox, width:38, flexShrink:0 }}>{n}</span>
                <div>
                  <h4 style={{ fontSize:"1.15rem", fontWeight:700, letterSpacing:"-.01em" }}>{h}</h4>
                  <p style={{ fontSize:".98rem", color:C.dim, lineHeight:1.55, marginTop:".3rem", maxWidth:"52ch" }}>{p}</p>
                </div>
              </div>
            ))}
            <div style={{ marginTop:"2rem" }}>
              <h2 style={{ fontFamily:C.fr, fontWeight:900,
                fontSize:"clamp(2.8rem,11vw,4.2rem)", letterSpacing:"-.03em", lineHeight:.94,
                marginBottom:"1.1rem" }}>
                Famous.<br />
                <em style={{ fontStyle:"italic", fontWeight:600, color:C.ox }}>On purpose.</em>
              </h2>
              <p style={{ fontSize:"clamp(1.08rem,2vw,1.32rem)", color:C.dim, lineHeight:1.45,
                maxWidth:"33ch", marginBottom:"1.6rem" }}>
                You get the videos, the press, the people talking — and more customers who pick you first.
              </p>
              <Link href="/contact" style={{ display:"inline-flex", alignItems:"center", gap:".6rem",
                fontFamily:C.sm, fontSize:12, fontWeight:700, letterSpacing:".13em",
                textTransform:"uppercase" as const, color:"#fff", background:C.ink,
                textDecoration:"none", padding:"1.1rem 1.8rem", borderRadius:4 }}>
                See what people would be saying →
              </Link>
            </div>
            <p style={{ fontFamily:C.sm, fontSize:11, color:"rgba(25,20,16,.3)",
              letterSpacing:".04em", marginTop:"2rem" }}>
              OARC — reputation management Malta · PR agency Malta · Birkirkara
            </p>
          </section>
        </Reveal>

      </div>
    </div>
  );
}
