"use client";

import { useEffect, useState } from "react";
import { m, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronDown,
  CircleDot,
  Mic2,
  Orbit,
  Sparkles,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/contact/ContactForm";

const themes = [
  {
    id: "ai",
    number: "01",
    title: "AI, automation\nand Voice AI",
    summary: "Put useful intelligence inside the work already happening.",
    detail:
      "From missed calls and follow-up to internal workflows, we find the moments where a well-designed agent can remove friction without removing judgement.",
    icon: Mic2,
    tone: "graphite",
    points: ["Voice and WhatsApp agents", "Workflow design and integrations", "Human handoffs, guardrails and training"],
  },
  {
    id: "growth",
    number: "02",
    title: "Digital marketing\nand creative growth",
    summary: "Make the right people notice, choose and remember you.",
    detail:
      "Strategy, creative, paid media and content working from the same commercial brief — not a pile of disconnected deliverables.",
    icon: Sparkles,
    tone: "green",
    points: ["Campaign and content direction", "Paid acquisition and landing journeys", "Brand systems that make speed possible"],
  },
  {
    id: "systems",
    number: "03",
    title: "H360 and full\noperating systems",
    summary: "Connect the front door of the business to what happens next.",
    detail:
      "A joined-up view of discovery, enquiries, bookings, service, reviews and retention — shaped around the way your team actually operates.",
    icon: Orbit,
    tone: "bone",
    points: ["Customer journey and channel map", "Connected tools and operating rhythm", "A clearer brief for your internal team"],
  },
];

const steps = [
  ["01", "Tell us what is moving", "A short enquiry gives us the commercial context, not a generic checklist."],
  ["02", "We open the blueprint", "We look at the business, the bottlenecks and the opportunities across all three themes."],
  ["03", "We send the blueprint", "You receive a tailored written summary of what to do first, what to leave alone and where OARC could help build."],
];

const faqs = [
  ["Is the blueprint really free?", "Yes. The expert working session and tailored written blueprint summary are free, with no obligation to continue. It covers the relevant priorities, opportunities, workflow or system recommendations, sequence and next actions. If implementation or deeper research would help, OARC scopes that separately before anything starts."],
  ["Do we need to know which service we need?", "No. The three entry themes are deliberately broad. Tell us what is stuck, expensive, slow or underperforming and we will help place it in the right part of the blueprint."],
  ["What exactly will we receive?", "After the working session, OARC sends a tailored blueprint summary covering the relevant parts of the six-point framework shown above. It is a practical first-move plan, not a generic report or a promise of results that still need validating."],
  ["Can OARC implement what it recommends?", "Yes, where there is a fit. OARC works across strategy, creative, marketing, automation and connected operating systems, so the next step can be practical rather than another document."],
];

const themeLabels: Record<string, string> = {
  ai: "AI, automation and Voice AI",
  growth: "Digital marketing and creative growth",
  systems: "H360 and full operating systems",
};

const deliverables = [
  ["01", "Priority map", "Channel and creative priorities, so the team knows where attention is worth spending."],
  ["02", "Use-case shortlist", "AI-agent and Voice AI opportunities, separated from ideas that are not ready yet."],
  ["03", "Workflow map", "The automation path: trigger, decision, human handoff, system update and next action."],
  ["04", "System recommendations", "A practical view of the tools, connections and operating habits the work needs."],
  ["05", "Sequence and next actions", "What to do first, what can wait and what the first build or campaign should prove."],
  ["06", "Expected business impact", "A grounded view of where time, responsiveness, demand or clarity could improve — without invented guarantees."],
];

export default function AIConsulting() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedTheme, setSelectedTheme] = useState("");
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const value = new URLSearchParams(window.location.search).get("theme") || "";
    setSelectedTheme(themeLabels[value] || "");
  }, []);

  return (
    <Layout>
      <main className="overflow-x-clip bg-[#f2efe9] text-[#0e0d0c]">
        <section className="relative overflow-hidden bg-[#0e0d0c] px-5 pb-20 pt-32 text-[#f2efe9] md:px-10 md:pb-28 md:pt-40">
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(rgba(245,245,243,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(245,245,243,.07) 1px, transparent 1px)", backgroundSize: "72px 72px" }} />
          <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
            <m.div initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
              <p className="kicker mb-7 text-[#f2efe9]/55">OARC growth blueprint / Malta and beyond</p>
              <h1 className="max-w-5xl text-[clamp(3.3rem,8vw,8.2rem)] font-extrabold leading-[.86] tracking-[-.075em]">
                Your free AI &amp;<br />
                growth <span className="text-[#c8102e]">blueprint.</span>
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#f2efe9]/65 md:text-xl" data-speakable>
                Open the working blueprint with a senior OARC team. We map the opportunity across AI, marketing, creative and the operating system underneath it.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-5">
                <a href="#enquiry" className="inline-flex items-center gap-3 rounded-full bg-[#c8102e] px-6 py-4 text-sm font-bold text-[#f2efe9] transition-transform hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#f2efe9]">
                  Get the free expert blueprint <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#themes" className="inline-flex items-center gap-2 text-sm text-[#f2efe9]/65 underline decoration-[#f2efe9]/25 underline-offset-8 transition-colors hover:text-[#f2efe9]">
                  See the three entry themes <ChevronDown className="h-4 w-4" />
                </a>
              </div>
              <p className="mt-5 font-mono text-[10px] uppercase tracking-[.18em] text-[#f2efe9]/35">No obligation · useful before it is commercial</p>
            </m.div>
            <m.div initial={prefersReducedMotion ? false : { opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8, delay: .15 }} className="relative">
              <div className="absolute -left-5 top-10 hidden h-24 w-24 rounded-full border border-[#c8102e]/60 md:block" />
              <div className="relative overflow-hidden bg-[#f2efe9] p-3 text-[#0e0d0c]">
                <img src="/attached_assets/premium-work/h360-public-product-hub_b339c106.webp" alt="H360 connected restaurant operating system" className="aspect-[4/3] w-full object-cover grayscale-[.15]" />
                <div className="flex items-end justify-between gap-5 p-5">
                  <div><p className="font-mono text-[10px] uppercase tracking-[.16em] text-[#0e5a3a]">Working view / 03</p><p className="mt-2 text-xl font-bold tracking-tight">One business.<br />One joined-up brief.</p></div>
                   <span className="mb-1 rounded-full bg-[#0e5a3a] px-3 py-2 font-mono text-[9px] uppercase tracking-[.14em] text-[#f2efe9]">OARC</span>
                </div>
              </div>
            </m.div>
          </div>
        </section>

        <section id="themes" className="px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-2xl"><p className="kicker kicker-paper">Choose the door, not the deliverable</p><h2 className="mt-6 text-4xl font-extrabold leading-[.95] tracking-[-.06em] md:text-6xl">Three ways in.<br /><em className="font-normal">One clear next move.</em></h2></div>
            <div className="grid gap-4 lg:grid-cols-3">
              {themes.map((theme) => {
                const Icon = theme.icon;
                return <a href="#enquiry" onClick={() => setSelectedTheme(themeLabels[theme.id])} key={theme.id} className={`group flex min-h-[430px] flex-col justify-between rounded-[10px] p-7 transition-transform duration-500 hover:-translate-y-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c8102e] md:p-9 ${theme.tone === "graphite" ? "bg-[#0b0c0d] text-[#f5f5f3]" : theme.tone === "green" ? "bg-[#0e5a3a] text-[#f2efe9]" : "border border-[#0e0d0c]/15 bg-[#f5f5f3]"}`}>
                  <div><div className="flex items-center justify-between"><span className="font-mono text-xs opacity-50">{theme.number}</span><Icon className="h-7 w-7 opacity-80" /></div><h3 className="mt-16 whitespace-pre-line text-3xl font-extrabold leading-[.94] tracking-[-.055em]">{theme.title}</h3><p className="mt-5 text-base leading-relaxed opacity-70">{theme.summary}</p></div>
                  <div><p className="mb-5 text-sm leading-relaxed opacity-65">{theme.detail}</p><div className="space-y-2 border-t border-current/20 pt-5">{theme.points.map((point) => <p key={point} className="flex items-start gap-2 text-xs opacity-80"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0" />{point}</p>)}</div><span className="mt-7 inline-flex items-center gap-2 text-sm font-bold">Use this as your starting point <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></div>
                </a>;
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#0e5a3a] px-5 py-20 text-[#f2efe9] md:px-10 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.8fr_1.2fr]">
            <div><p className="kicker text-[#f2efe9]/55">The blueprint is a working session</p><h2 className="mt-7 text-5xl font-extrabold leading-[.9] tracking-[-.065em] md:text-7xl">Useful<br /><em className="font-normal">before it is sold.</em></h2></div>
            <div className="grid gap-8 md:grid-cols-3">{steps.map(([number, title, body]) => <div key={number} className="border-t border-[#f2efe9]/30 pt-5"><span className="font-mono text-xs text-[#f2efe9]/55">{number}</span><h3 className="mt-12 text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-[#f2efe9]/65">{body}</p></div>)}</div>
          </div>
        </section>

        <section className="bg-[#f5f5f3] px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.72fr_1.28fr]">
            <div>
              <p className="kicker kicker-paper">What you leave with</p>
              <h2 className="mt-7 text-5xl font-extrabold leading-[.9] tracking-[-.065em] md:text-7xl">Not a nice<br /><em className="font-normal">conversation.</em></h2>
              <p className="mt-7 max-w-sm text-base leading-relaxed text-[#0e0d0c]/60">The blueprint turns a broad growth question into a set of decisions your team can use. It is deliberately specific, while staying honest about what still needs validating.</p>
              <div className="mt-9 overflow-hidden border border-[#0e0d0c]/15">
                <img src="/attached_assets/premium-work/h360-service-blueprint_49d8f69c.jpg" alt="H360 service blueprint showing a connected customer operating system" className="aspect-[4/3] w-full object-cover" loading="lazy" />
                <p className="bg-[#0e0d0c] px-4 py-3 font-mono text-[10px] uppercase tracking-[.14em] text-[#f2efe9]/60">Example lens / service and system connections</p>
              </div>
              <div className="mt-4 grid grid-cols-[1.15fr_.85fr] gap-4">
                <img src="/attached_assets/generated_images/oarc-growth-editorial-proof.jpg" alt="OARC creative growth editorial visual" className="aspect-[5/3] w-full object-cover" loading="lazy" />
                <div className="flex items-end bg-[#0e5a3a] p-4 text-[#f2efe9]"><p className="font-mono text-[10px] uppercase leading-relaxed tracking-[.12em]">The blueprint connects the front door to the work behind it.</p></div>
              </div>
            </div>
            <div className="border-t border-[#0e0d0c]/20">
              {deliverables.map(([number, title, body]) => (
                <div key={number} className="grid gap-4 border-b border-[#0e0d0c]/20 py-6 md:grid-cols-[48px_1fr]">
                  <span className="font-mono text-xs text-[#0e5a3a]">{number}</span>
                  <div><h3 className="text-xl font-bold tracking-[-.03em]">{title}</h3><p className="mt-2 max-w-xl text-sm leading-relaxed text-[#0e0d0c]/60">{body}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="enquiry" className="bg-[#0b0c0d] px-5 py-20 text-[#f5f5f3] md:px-10 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
            <div className="lg:sticky lg:top-28"><p className="kicker text-[#f5f5f3]/50">Open the blueprint</p><h2 className="mt-7 text-5xl font-extrabold leading-[.9] tracking-[-.065em] md:text-7xl">Bring the<br /><span className="text-[#c8102e]">real</span> problem.</h2><p className="mt-7 max-w-md text-base leading-relaxed text-[#f5f5f3]/60">Choose the theme that feels closest, or describe the knot in your own words. The working session and tailored written blueprint summary are free.</p><div className="mt-10 space-y-3 text-sm text-[#f5f5f3]/55"><p className="flex gap-3"><CircleDot className="h-4 w-4 text-[#c8102e]" />Senior working session, not a sales script</p><p className="flex gap-3"><CircleDot className="h-4 w-4 text-[#c8102e]" />A practical view across the whole business</p><p className="flex gap-3"><CircleDot className="h-4 w-4 text-[#c8102e]" />A tailored written first-move plan, with no obligation</p></div></div>
            <div><ContactForm funnelTheme={selectedTheme} submitLabel="Request my free blueprint" successMessage="Request sent. We’ll be in touch within 24 hours to arrange your working session." /></div>
          </div>
        </section>

        <section className="bg-[#f2efe9] px-5 py-20 md:px-10 md:py-28">
           <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><p className="kicker kicker-paper">Before you enquire</p><h2 className="mt-6 text-4xl font-extrabold leading-[.93] tracking-[-.06em] md:text-6xl">Good questions<br /><em className="font-normal">make good work.</em></h2></div><div className="border-t border-[#0e0d0c]/20">{faqs.map(([question, answer], index) => <div key={question} className="border-b border-[#0e0d0c]/20"><button type="button" onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index} className="flex w-full items-center justify-between gap-5 py-6 text-left text-lg font-bold"><span>{question}</span><ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${openFaq === index ? "rotate-180" : ""}`} /></button>{openFaq === index && <p className="faq-answer max-w-2xl pb-7 pr-10 text-sm leading-relaxed text-[#0e0d0c]/65">{answer}</p>}</div>)}</div></div>
        </section>
        <section className="flex flex-col gap-5 bg-[#c8102e] px-5 py-16 text-[#f2efe9] md:flex-row md:items-center md:justify-between md:px-10"><h2 className="max-w-2xl text-4xl font-extrabold leading-[.93] tracking-[-.06em] md:text-6xl">The next move should make the rest easier.</h2><a href="#enquiry" className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-[#0e0d0c] px-6 py-4 text-sm font-bold transition-transform hover:-translate-y-1">Open the blueprint <ArrowRight className="h-4 w-4" /></a></section>
      </main>
    </Layout>
  );
}