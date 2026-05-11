"use client";

import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { ArrowRight, MapPin, Compass, Hammer, Heart, Quote } from "lucide-react";
import { buildOrganization, buildPerson, buildFAQ } from "@/lib/schema";
import { NAP } from "@/lib/seo/nap";
import { ORG_FOUNDING_DATE } from "@/lib/seo/organizationSchema";

const URL = "https://oarcdigital.com/why-us";
const TITLE = "Who We Are | Our Founding Story | OARC Digital Malta";

const FOUNDER_FAQS: { question: string; answer: string }[] = [
  {
    question: "Who founded OARC Digital and when?",
    answer:
      "OARC Digital was founded in 2023 by Sahan Reddy, after a decade of running creative, engineering, and growth teams across Asia and the European Union. The studio was set up in Birkirkara, Malta, to put three disciplines that Maltese businesses usually have to source separately — creative, AI engineering, and growth automation — under one roof.",
  },
  {
    question: "Where is OARC Digital based?",
    answer:
      "Level 1, The Brewhouse, Mdina Road, Birkirkara CBD 2010, Malta. The studio is a five-minute drive from Mriehel, ten from Mosta, and twenty from Valletta or Sliema. Local clients are welcome to drop in for a Friday review.",
  },
  {
    question: "What does OARC stand for?",
    answer:
      "Optimised, AI, Revenue, Creative. Each letter is a working principle, not a tagline. Optimised means we engineer for output per hour. AI is a real capability, not a sticker. Revenue is the metric we report against. Creative is the surface that has to earn attention before any spend.",
  },
  {
    question: "What is the mission of OARC Digital?",
    answer:
      "To be the Malta studio that a serious operator can hand the entire growth stack to — brand, performance, AI agents, automation — without stitching together three vendors, four account managers, and a quarterly review cadence. The goal is weekly output and weekly revenue impact.",
  },
];

export default function PageContent() {
  const orgSchema = buildOrganization();
  const personSchema = buildPerson();
  const faqSchema = buildFAQ(FOUNDER_FAQS, true);

  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: URL,
    name: TITLE,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["[data-speakable]"],
    },
  };

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [orgSchema, personSchema],
          }),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      {/* HERO */}
      <section className="relative bg-zinc-950 pt-28 md:pt-32 pb-20 text-white" data-testid="section-hero">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[#ff914d] mb-6" data-testid="text-eyebrow">
            Our Founding Story
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold leading-[1.05] mb-8"
            data-speakable
            data-testid="heading-hero"
          >
            We built OARC Digital because Malta deserved an agency that worked at the pace of its operators.
          </h1>
          <p className="text-xl text-white/70 leading-relaxed max-w-3xl" data-speakable data-testid="text-hero-subtitle">
            Founded in 2023 by Sahan Reddy, OARC Digital is a Birkirkara studio that puts brand, performance, and AI agents under one roof — so Maltese businesses can stop stitching together three vendors and start shipping weekly.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-zinc-950 font-semibold hover:bg-white/90 transition-all"
              data-testid="link-hero-about"
            >
              Read the founder bio <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/why-oarc"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/30 text-white font-semibold hover:border-white transition-all"
              data-testid="link-hero-comparison"
            >
              See the comparison page
            </Link>
          </div>
        </div>
      </section>

      {/* THE GAP WE SAW */}
      <section className="bg-zinc-950 border-t border-white/5 py-20 text-white" data-testid="section-gap">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[#ff914d] mb-4">Chapter 01 — The gap we saw</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">A decade of agency work taught us one lesson.</h2>
          <p className="text-lg text-white/70 leading-relaxed mb-5">
            Before OARC Digital, Sahan Reddy spent more than ten years running creative, engineering, and growth teams across Asia and the EU — for hospitality groups, financial-services firms, and SaaS companies that paid serious money to good agencies and still walked away frustrated. The pattern repeated everywhere. Brand sat in one studio. Paid media sat in another. Engineering sat in a third. Each vendor blamed the other when a launch slipped, and the client paid for all three.
          </p>
          <p className="text-lg text-white/70 leading-relaxed mb-5">
            By 2022, two things changed at once. AI tooling matured to the point where a small team could carry the workload of a much bigger one without losing quality. And Malta — already a serious base for iGaming, financial services, and tech — started to need creative and growth partners that could keep up with how fast its operators move. The agencies on the island were good at brand prestige and slow at iteration. Nobody was doing weekly delivery for the price of a freelancer.
          </p>
          <p className="text-lg text-white/70 leading-relaxed">
            The thesis behind OARC Digital was to fix that. One studio. Three disciplines. Built around AI agents that handle the repeatable parts of the work so the human team can focus on judgement, taste, and revenue. No retainers, no account managers as middlemen, no monthly PDF report.
          </p>
        </div>
      </section>

      {/* WHY MALTA */}
      <section className="bg-zinc-950 border-t border-white/5 py-20 text-white" data-testid="section-malta">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[#ff914d] mb-4">Chapter 02 — Why Malta, why Birkirkara</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">We picked the island on purpose.</h2>
          <p className="text-lg text-white/70 leading-relaxed mb-5">
            Malta is a small market with global ambition. The operators here run iGaming brands that compete in Brazil, financial-services firms regulated under MFSA that serve clients across the EU, hotels that need to be discovered by travellers in twenty languages, and software teams shipping for customers from Tokyo to Toronto. Small island, large surface area. That mix is exactly the sort of work an AI-native studio is built to support.
          </p>
          <p className="text-lg text-white/70 leading-relaxed mb-5">
            We picked Birkirkara — specifically Level 1 of The Brewhouse on Mdina Road — because it sits in the middle of where the operators actually are. Mriehel is a five-minute drive. Mosta is ten. The St Julians and Sliema strip is twenty. Anyone running a serious business on the island can sit in the studio for a Friday review without losing a day. The address is published on every page of this site, the phone goes to a real human during office hours, and the AI agents pick up the rest.
          </p>
          <p className="text-lg text-white/70 leading-relaxed">
            More than location, the call was about regulators and seasonality. The team has worked under MGA, MFSA, MTA, and MBR rules long enough to know which campaigns are safe to run in July, what the pre-Christmas iGaming acquisition window looks like, and how Maltese consumers actually convert versus how UK or DACH ones do. That local context is the hardest thing for an offshore agency to fake.
          </p>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="bg-zinc-950 border-t border-white/5 py-20 text-white" data-testid="section-how">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[#ff914d] mb-4">Chapter 03 — How we actually work</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Three disciplines, one room, no handovers.</h2>
          <p className="text-lg text-white/70 leading-relaxed mb-5">
            Every account at OARC Digital is run by a named pod of three people: a strategist, a creative lead, and an AI engineer. The pod stays with the account from kickoff through the weekly review for as long as the engagement runs. Nobody hands the brief to a delivery team and disappears. The same humans who write the strategy are the humans answering the Slack thread on a Tuesday afternoon.
          </p>
          <p className="text-lg text-white/70 leading-relaxed mb-5">
            Behind each pod sits a roster of AI agents that we have built and tuned in-house — an SDR for outbound, a support specialist for inbound, an appointment booker for the calendar, a data analyst for reporting, and a few admin agents for the back-office work nobody enjoys. The agents do not replace the pod. They take the repeatable, low-judgement work off the pod's plate so the humans can spend their hours on the parts that actually move the number: strategy, taste, and direct client time.
          </p>
          <p className="text-lg text-white/70 leading-relaxed">
            That structure is the whole reason the maths works. A traditional agency has to bill enough each month to feed account management, planning, creative, production, and reporting overhead. We do not. The pod and the agents are the whole studio. That lets us run accounts at 40 to 60 per cent of the Malta agency average and still pay the team properly.
          </p>
        </div>
      </section>

      {/* THE MISSION */}
      <section className="bg-zinc-950 border-t border-white/5 py-20 text-white" data-testid="section-mission">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[#ff914d] mb-4">Chapter 04 — What we are here to do</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Be the studio a serious operator can hand the whole growth stack to.</h2>
          <p className="text-lg text-white/70 leading-relaxed mb-5">
            OARC Digital exists so that a Maltese founder, marketing director, or operator can stop stitching together three vendors, four account managers, and a quarterly review cadence to keep their growth machine running. One brief, one pod, one weekly review. Brand, performance, AI agents, and automation under the same roof, reporting against the same revenue number.
          </p>
          <p className="text-lg text-white/70 leading-relaxed mb-5">
            That mission has practical edges. We turn down work that does not fit it — e-commerce stores under €100k a year, single-event campaigns, clients who want to brief monthly and never review weekly. The economics do not work for either side, and we say so up front. The flip side is that the clients who do fit get a studio that actually owns the outcome with them.
          </p>
          <p className="text-lg text-white/70 leading-relaxed">
            We are not the right fit for every business in Malta. We try very hard to be the right fit for the ones we work with.
          </p>
        </div>
      </section>

      {/* THE FIRST TWO YEARS */}
      <section className="bg-zinc-950 border-t border-white/5 py-20 text-white" data-testid="section-first-two-years">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[#ff914d] mb-4">Chapter 04b — What the first two years taught us</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Two years in, the playbook is sharper than the pitch ever was.</h2>
          <p className="text-lg text-white/70 leading-relaxed mb-5">
            The first version of OARC Digital, in early 2023, was a four-person team running three accounts: a Sliema-based iGaming brand, a Mriehel financial-services firm, and a Mosta hospitality group. The work was good, the clients were patient, and the AI tooling was rougher than it is now. We learned in public — every Friday review for those first six months was a real conversation about what was working and what was not.
          </p>
          <p className="text-lg text-white/70 leading-relaxed mb-5">
            By the end of 2023 the pod model had earned its place. Accounts that had been managed by three vendors at once were down to one weekly review with us. By mid-2024 the AI agent roster — SDR, support, appointment booker, data analyst, admin — had matured to the point where a Maltese SME could plug a single one in for a week and feel the difference in their inbound numbers without changing anything else. By the start of 2025 we had clients in seven Maltese localities and four overseas markets, all run from the Birkirkara studio.
          </p>
          <p className="text-lg text-white/70 leading-relaxed mb-5">
            The lessons stack up the way you would expect. Briefs that name the revenue number on page one out-perform briefs that lead with the brand mood. Account managers between the client and the work add cost without adding speed. AI agents are at their best when a human reviews their output every morning and ships the corrections back into the prompt the same afternoon. Maltese buyers want to see the Friday review, not the quarterly review. None of these are insights; they are just the things every operator on this island already feels and that the studio has now built around.
          </p>
          <p className="text-lg text-white/70 leading-relaxed">
            The bit we are proudest of is the renewal rate. The first cohort of clients from 2023 is still on the books in 2026, on the same month-to-month terms they signed originally. No retainer lock-in, no minimum term, no contract trickery — just a weekly review that has been worth showing up to for three years running. That is the only marketing claim about the studio that is allowed on this page.
          </p>
        </div>
      </section>

      {/* PILLARS */}
      <section className="bg-zinc-950 border-t border-white/5 py-20 text-white" data-testid="section-pillars">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[#ff914d] mb-4 text-center">Chapter 05 — What O.A.R.C. stands for</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Four letters, four working principles.</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                letter: "O",
                title: "Optimised",
                Icon: Compass,
                body:
                  "Every workflow, every brief, every report is engineered for output per hour. If a step does not serve the revenue number, it gets cut. We measure ourselves against turnaround time and reporting cadence, not against the size of the team.",
              },
              {
                letter: "A",
                title: "AI",
                Icon: Hammer,
                body:
                  "AI is a real capability we build with, not a sticker we put on a deck. The agents in production handle live SDR outreach, support triage, appointment booking, and analytics. They are tuned for the Maltese market and reviewed weekly by the human team.",
              },
              {
                letter: "R",
                title: "Revenue",
                Icon: MapPin,
                body:
                  "The number that matters is the revenue we move for the client. Brand work, paid media, automation, AI agents — every surface ties back to a measurable outcome. If it does not, it does not ship.",
              },
              {
                letter: "C",
                title: "Creative",
                Icon: Heart,
                body:
                  "Organic-first, paid to amplify. Creative has to earn attention before a single euro is spent boosting it. We build the brand work that makes the performance work pay.",
              },
            ].map((p) => {
              const Icon = p.Icon;
              return (
                <div key={p.letter} className="bg-white/5 border border-white/10 rounded-xl p-6" data-testid={`pillar-${p.letter}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#ff914d] text-zinc-950 font-black text-lg flex items-center justify-center">
                      {p.letter}
                    </div>
                    <h3 className="text-xl font-bold">{p.title}</h3>
                    <Icon className="w-5 h-5 text-white/40 ml-auto" />
                  </div>
                  <p className="text-white/70 leading-relaxed">{p.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOUNDER VOICE — pull quote */}
      <section className="bg-zinc-950 border-t border-white/5 py-20 text-white" data-testid="section-founder-quote">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <Quote className="w-10 h-10 text-[#ff914d] mx-auto mb-6" />
          <p className="text-2xl md:text-3xl font-light leading-snug italic mb-6">
            "Maltese operators are some of the fastest-moving people I have worked with anywhere. The studio that serves them properly cannot move at the pace of a quarterly review. So we built one that does not."
          </p>
          <p className="text-sm text-white/60">— Mr Reddy, founder, OARC Digital</p>
          <p className="text-xs text-white/40 mt-2">
            Studio founded {new Date(ORG_FOUNDING_DATE).getFullYear()}. Headquartered at {NAP.streetAddressShort}, {NAP.addressLocality} {NAP.postalCode}.
          </p>
        </div>
      </section>

      {/* RELATED PAGES */}
      <section className="bg-zinc-950 border-t border-white/5 py-16" data-testid="section-related">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Where to go next</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/about" className="group bg-white/5 border border-white/10 rounded-xl p-6 hover-elevate block" data-testid="link-related-about">
              <div className="text-[#ff914d] font-bold text-xs tracking-widest uppercase mb-2">Founder bio</div>
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#ff914d] transition-colors">About the team</h3>
              <p className="text-sm text-white/60">The minimal founder bio, principles, and how to visit the studio.</p>
            </Link>
            <Link href="/why-oarc" className="group bg-white/5 border border-white/10 rounded-xl p-6 hover-elevate block" data-testid="link-related-comparison">
              <div className="text-[#ff914d] font-bold text-xs tracking-widest uppercase mb-2">Comparison</div>
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#ff914d] transition-colors">Why choose OARC</h3>
              <p className="text-sm text-white/60">Side-by-side comparison vs the typical Malta agency model.</p>
            </Link>
            <Link href="/case-studies" className="group bg-white/5 border border-white/10 rounded-xl p-6 hover-elevate block" data-testid="link-related-case-studies">
              <div className="text-[#ff914d] font-bold text-xs tracking-widest uppercase mb-2">Proof</div>
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#ff914d] transition-colors">Case studies</h3>
              <p className="text-sm text-white/60">Real Malta clients, real revenue numbers, real time-to-launch.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-zinc-900 to-zinc-950 py-20 text-center" data-testid="section-cta">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Want to meet the pod that would run your account?</h2>
          <p className="text-lg text-white/70 mb-8">
            Thirty minutes, no slide deck. We will pull live data on your current presence and walk you through what we would change in the first ninety days.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#ff914d] text-zinc-950 font-bold px-8 py-4 rounded-full text-lg hover:scale-[1.02] transition-transform"
            data-testid="button-cta"
          >
            Book the audit call <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
