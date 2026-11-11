"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { DEPARTMENT_STYLES, GM_PARTS, GM_VIZ } from "@/components/DepartmentDetailModal";
import LeakCost from "./LeakCost";

/**
 * /services/growth, built on the owner's Growth content (the 6 steps, the teams, the
 * numbers and the 6 animated drawings from the homepage pop-up). The copy rule, set by the
 * owner: plain human language, "we do this, you get this", no slogans, and true for any
 * kind of business. Notion design system v3: Instrument Serif display, Inter Tight
 * sentences, ink on paper, one yellow thing per section.
 */
const serif = { fontFamily: "var(--font-instrument-serif-roman), Georgia, serif" };
const sans = { fontFamily: "var(--font-inter-tight), sans-serif" };
const H2 = "text-[clamp(2.4rem,5.5vw,4.2rem)] font-normal leading-[.95]";

/** The whole service in two lists. */
const WE_DO = [
  "Get you to the top of Google and Google Maps",
  "Run your social media and your ads",
  "Make your videos, photos and posts",
  "Fix your website, your prices and your reviews",
  "Answer every call and message in seconds, day and night",
  "Bring your customers back, and get you referrals",
];
const YOU_GET = [
  "More people finding you",
  "More enquiries and more bookings",
  "No missed customers",
  "More customers who come back",
  "One team to talk to, not 5 suppliers",
  "One number every month: how many customers we brought you",
];

/** Per step: plain service name, what we do, what you get, why OARC. Index matches GM_PARTS. */
const EXTRA: { service: string; text: string; weDo: string[]; youGet: string; why: string; links: { label: string; href: string }[] }[] = [
  {
    service: "SEO and Google Maps in Malta",
    text: "People search on Google and Google Maps before they buy. We make sure they see you first.",
    weDo: [
      "We set up and look after your Google Business Profile.",
      "We get you more Google reviews, and reply to them.",
      "We write the pages on your website that Google and AI assistants read.",
    ],
    youGet: "Your business at the top when people nearby search for what you sell.",
    why: "We work on Google, Google Maps and AI answers like ChatGPT together. Our own pages have been shown 9,600+ times inside Google's AI answers since May 2026.",
    links: [{ label: "SEO services", href: "/services/seo-services" }],
  },
  {
    service: "Social media and paid ads",
    text: "Most people are not searching for you yet. We put you in front of them with ads and social media.",
    weDo: [
      "We look at who already buys from you.",
      "We show your ads to more people like them, on Facebook, Instagram, TikTok and Google.",
      "We test small, keep the ads that work and stop the ones that don't.",
    ],
    youGet: "New people seeing you every day, not only the ones who already know you.",
    why: "Your ad money goes straight to Facebook or Google from your own account. It never goes through us. The people who make your ads and the people who run them are one team.",
    links: [
      { label: "Ads that pay for themselves", href: "/services/media" },
      { label: "Win on social media", href: "/services/social" },
    ],
  },
  {
    service: "Video and content",
    text: "People buy from businesses they like. We make the videos and posts that show who you are.",
    weDo: [
      "We find what makes your business different.",
      "We film and edit your videos and take your photos, here in Malta.",
      "We turn one shoot into content for your ads, your social media and your website.",
    ],
    youGet: "Videos and posts that make people remember you and want you.",
    why: "The team that films you also runs your ads. So we can see which video brings customers, and make more like it.",
    links: [{ label: "Look like the biggest brand in your market", href: "/services/creative" }],
  },
  {
    service: "Your website, your prices and your reviews",
    text: "Before they buy, people compare. They check 4 things: your price, your recent work, your reviews, and whether you give a straight answer.",
    weDo: [
      "We compare you with your 3 closest competitors on those 4 things.",
      "We fix whatever is missing, starting with a clear price.",
      "We put all 4 where people look first: Google, your website and your social media.",
    ],
    youGet: "More people choosing you after they compare.",
    why: "Design, marketing and tech are one team here. So the fix goes live without you chasing 3 different suppliers.",
    links: [{ label: "Close more sales", href: "/services/sales" }],
  },
  {
    service: "Fast replies, day and night",
    text: "When someone contacts you, speed wins. The business that answers first usually gets the customer.",
    weDo: [
      "Tom, our AI receptionist, answers every call, WhatsApp, Instagram message and email in seconds.",
      "He speaks English, Maltese and Italian. He answers questions and books people in.",
      "Anything he can't handle goes to a person on your team.",
    ],
    youGet: "No missed enquiry. Every customer gets a reply in seconds, even at 3am.",
    why: "Other agencies send you enquiries and stop there. We built Tom, so we answer them too.",
    links: [{ label: "Meet Tom, our AI receptionist", href: "/tom" }],
  },
  {
    service: "Reviews, repeat sales and referrals",
    text: "A customer who comes back costs you almost nothing. Most businesses never ask.",
    weDo: [
      "We ask every customer for a review, right after they buy.",
      "We send the next offer when they are likely to need you again.",
      "We give happy customers an easy way to bring a friend.",
    ],
    youGet: "Customers who buy again and bring their friends.",
    why: "One team runs all 6 steps. So the reviews from this step are what get you found in step 1.",
    links: [{ label: "Get famous in Malta", href: "/services/reputation" }],
  },
];

const WHY: [string, string][] = [
  ["One team does all of it.", "Google, ads, video, website, replies and repeat sales. You talk to one team, not 5 suppliers."],
  ["We use AI where it helps you.", "Tom answers your customers in 4 seconds, day and night. And we get your business named in AI answers."],
  ["You can leave any month.", "No lock-in. Your accounts, your ads and your data always stay yours."],
];

export default function GrowthBody() {
  const ref = useRef<HTMLDivElement>(null);

  // The owner's drawings animate when they scroll into view (same trigger as the pop-up).
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("live");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.3 },
    );
    ref.current?.querySelectorAll(".viz").forEach((v) => io.observe(v));
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} style={sans}>
      {/* The .gmx scope only lends the drawings their stroke, fill and motion classes. */}
      {DEPARTMENT_STYLES.Growth.map((s) => (
        <style key={s.id} id={s.id} dangerouslySetInnerHTML={{ __html: s.css }} />
      ))}
      <style>{`
        .gb .gmx{background:transparent;color:inherit;overflow:visible}
        .gb em{font-family:var(--font-instrument-serif),Georgia,serif;font-style:italic}
        /* The owner's drawings on an ink card: paper lines, one yellow highlight. */
        .gb .gmx .viz{margin-top:0;background:#0E0E0E;border:0;border-radius:18px;box-shadow:none}
        .gb .gmx .viz::before{display:none}
        .gb .gmx .wire{stroke:rgba(245,243,238,.55)}
        .gb .gmx .node{fill:rgba(245,243,238,.4)}
        .gb .gmx .nodeOn{fill:#F9FF84}
        .gb .gmx .ring{stroke:#F9FF84}
        .gb .gmx .lab{fill:#F5F3EE;opacity:1}
        .gb .gmx .labk{fill:#0E0E0E}
        .gb .gmx .glow{filter:none}
        .gb .gmx .viz [stroke="#F5F3EE"]{stroke:#0E0E0E}
        .gb .gmx .viz [stroke="#0E0E0E"]{stroke:#F9FF84}
        .gb .gmx .viz [fill="#0E0E0E"]{fill:#F9FF84}
        .gb .gmx .viz rect.wire[fill]{fill:rgba(245,243,238,.06)}
        .gb .gmx .viz text{font-family:var(--font-inter-tight),sans-serif}
      `}</style>

      {/* Hero: ink ground, paper words, one yellow word */}
      <section className="gb bg-[#0E0E0E] px-5 pb-16 pt-6 text-[#F5F3EE] md:pb-24">
        <div className="mx-auto max-w-[980px]">
          <h1 className="text-[clamp(3rem,8.6vw,6.4rem)] font-normal leading-[.92] tracking-[-0.02em]" style={serif}>
            Growth marketing in Malta. We bring you more <em className="text-[#F9FF84]">customers.</em>
          </h1>
          <p className="mt-8 max-w-[46ch] text-xl leading-relaxed md:text-2xl">
            We do your Google, your ads, your videos, your website, your replies and your repeat sales. You get more
            enquiries, more bookings and more customers who come back.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href="#free-check"
              className="inline-flex items-center rounded-full bg-[#F9FF84] px-7 py-4 text-lg font-semibold text-[#0E0E0E] transition-opacity hover:opacity-90"
            >
              Get a free check of my business →
            </a>
            <a href="#step-01" className="border-b border-white/60 pb-1 text-lg font-semibold hover:border-white">
              See how it works
            </a>
          </div>
        </div>
      </section>

      {/* We do / You get: paper ground, ink words */}
      <section className="gb bg-[#F5F3EE] px-5 py-16 text-[#0E0E0E] md:py-24">
        <div className="mx-auto max-w-[980px]">
          <div className="grid gap-10 md:grid-cols-2 md:gap-14">
            <div>
              <h2 className={H2} style={serif}>
                What we do.
              </h2>
              <ul className="mt-6 border-t border-[#0E0E0E]/25">
                {WE_DO.map((t, i) => (
                  <li key={t} className="flex gap-4 border-b border-[#0E0E0E]/25 py-4 text-xl leading-snug">
                    <span className="w-6 shrink-0 text-[26px] leading-none text-[#0035AD]" style={serif}>
                      {i + 1}
                    </span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className={H2} style={serif}>
                What you get.
              </h2>
              <ul className="mt-6 border-t border-[#0E0E0E]/25">
                {YOU_GET.map((t) => (
                  <li key={t} className="flex gap-4 border-b border-[#0E0E0E]/25 py-4 text-xl leading-snug">
                    <span aria-hidden="true" className="w-6 shrink-0 font-semibold">
                      ✓
                    </span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-10 max-w-[60ch] text-xl leading-relaxed">
            It works for any business that needs customers: restaurants, clinics, shops, gyms, property agents and
            service businesses, anywhere in Malta and Gozo.
          </p>

          <h2 className={`${H2} mt-16`} style={serif}>
            Why OARC.
          </h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {WHY.map(([big, small]) => (
              <li key={big} className="rounded-[18px] bg-white p-6 ring-1 ring-[#0E0E0E]/10">
                <p className="text-[26px] leading-[1.05] text-[#0035AD]" style={serif}>
                  {big}
                </p>
                <p className="mt-3 text-lg leading-snug">{small}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* The 6 steps: white and paper take turns */}
      {GM_PARTS.map((p, i) => {
        const x = EXTRA[i];
        return (
          <section
            key={p.n}
            id={`step-${p.n}`}
            className={`gb scroll-mt-20 px-5 py-16 text-[#0E0E0E] md:py-24 ${i % 2 === 0 ? "bg-white" : "bg-[#F5F3EE]"}`}
          >
            <div className="mx-auto grid max-w-[1080px] gap-10 md:grid-cols-2 md:items-center md:gap-14">
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <p className="text-lg font-semibold text-[#0035AD]">
                  Step {i + 1} of 6 · {x.service}
                </p>
                <h2
                  className="mt-3 text-[clamp(2.8rem,6.5vw,4.6rem)] font-normal leading-[.92] tracking-[-0.02em]"
                  style={serif}
                  dangerouslySetInnerHTML={{ __html: p.h }}
                />
                <p className="mt-5 text-xl leading-relaxed">{x.text}</p>

                <h3 className="mt-7 text-lg font-semibold">We do:</h3>
                <ul className="mt-2 border-t border-[#0E0E0E]/20">
                  {x.weDo.map((t) => (
                    <li key={t} className="border-b border-[#0E0E0E]/20 py-3 text-lg leading-snug">
                      {t}
                    </li>
                  ))}
                </ul>

                <h3 className="mt-6 text-lg font-semibold">You get:</h3>
                <p className="mt-1 text-2xl leading-snug" style={serif}>
                  {x.youGet}
                </p>

                <p className="mt-6 text-lg leading-relaxed">
                  <strong>Why OARC:</strong> {x.why}
                </p>

                <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-lg font-semibold">
                  {x.links.map((l) => (
                    <Link key={l.href} href={l.href} className="border-b-2 border-[#0035AD] pb-0.5 text-[#0035AD]">
                      {l.label} →
                    </Link>
                  ))}
                </p>
              </div>

              <div>
                <div className="gmx">
                  <div
                    className="viz"
                    role="img"
                    aria-label={`${p.sp}: ${p.out}`}
                    dangerouslySetInnerHTML={{ __html: GM_VIZ[p.viz]() }}
                  />
                </div>
                <div className="mt-6 flex items-start gap-5">
                  <span className="text-[72px] leading-[.8] md:text-[88px]" style={serif}>
                    {p.stat}
                    {"statEm" in p ? p.statEm : ""}
                  </span>
                  <p className="max-w-[30ch] pt-1 text-lg leading-snug">{p.statP}</p>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <LeakCost />
    </div>
  );
}
