import Link from "next/link";
import { ArrowRight, Lightbulb, Users, BarChart3, FileText, Rocket, AlertTriangle, CheckCircle2, Target } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import RelatedServices from "@/components/RelatedServices";
import MaltaContextBlock from "@/components/seo/MaltaContextBlock";
import TrustBlock from "@/components/seo/TrustBlock";
import FAQSection, { type FAQItem } from "@/components/FAQSection";

const heroImage = "/attached_assets/stock_images/startup_idea_validat_9b100223.jpg";

const imageObjectSchema = {
  "@context": "https://schema.org",
  "@type": "ImageObject",
  name: "Startup idea validation workspace with research materials and market data for a Malta-based entrepreneur",
  description: "A validation sprint workspace for a Malta entrepreneur — showing market research, landing page wireframes, and discovery call materials used to test product-market fit before committing to a full software build.",
  url: "https://oarcdigital.com/attached_assets/stock_images/startup_idea_validat_9b100223.jpg",
  width: 1200,
  height: 800,
  contentUrl: "https://oarcdigital.com/attached_assets/stock_images/startup_idea_validat_9b100223.jpg",
};

const phases = [
  {
    step: "01",
    days: "Days 1–3",
    title: "Workshop — lock the hypothesis",
    detail: "Workshop with the founder to lock the value proposition, the ICP, the pricing hypothesis, and the demand signals we will measure. Typical success thresholds: LP conversion above 4%, email-capture rate above 12%, qualified-discovery-call rate above 25%.",
    icon: Lightbulb,
  },
  {
    step: "02",
    days: "Days 4–6",
    title: "Landing page + paid-traffic plan",
    detail: "A production-quality landing page (not throwaway) and a paid-traffic plan across Meta, LinkedIn, or Google depending on the ICP. €1,500 ad spend included in the Sprint price.",
    icon: Rocket,
  },
  {
    step: "03",
    days: "Days 7–12",
    title: "Live traffic — real demand signals",
    detail: "Live traffic running. Daily metrics. Captured prospects scheduled into discovery calls run by a senior OARC strategist (recorded with consent, transcripts shared). This is real buyer behaviour, not surveys.",
    icon: Users,
  },
  {
    step: "04",
    days: "Days 13–14",
    title: "Written go / no-go recommendation",
    detail: "Synthesis of the captured signal, comparison against the pre-agreed thresholds, and a written recommendation with the reasoning, supporting data, and suggested next steps. The report belongs to the client regardless of outcome.",
    icon: FileText,
  },
];

const outcomes = [
  {
    result: "Go",
    pct: "~40%",
    desc: "Demand signals exceeded thresholds, discovery calls confirmed willingness-to-pay. The deliverable becomes a tighter MVP scope and a build proposal.",
    color: "text-green-600",
    bg: "bg-green-500/5 border-green-500/20",
  },
  {
    result: "Iterate",
    pct: "~35%",
    desc: "ICP was too broad or the value prop needed sharpening. We recommend a targeted re-test rather than a kill — usually resolves in one re-validation.",
    color: "text-orange-600",
    bg: "bg-orange-500/5 border-orange-500/20",
  },
  {
    result: "No-go",
    pct: "~25%",
    desc: "Demand signals were below threshold. The report names what we tested, what we learned, and what specifically needs to change — the most valuable outcome the framework can deliver.",
    color: "text-red-600",
    bg: "bg-red-500/5 border-red-500/20",
  },
];

const metrics = [
  { value: "14", label: "Days from kickoff to written recommendation", note: "not weeks or months" },
  { value: "€4,900", label: "Validation Sprint cost", note: "vs €60,000+ on the wrong build" },
  { value: "8+", label: "Qualified discovery calls included", note: "real buyer conversations, recorded" },
];

const pricingTiers = [
  {
    name: "Validation Sprint",
    price: "€4,900",
    unit: "project",
    desc: "14 days: landing page, €1,500 ad spend included, 8 qualified discovery calls, written go/no-go report.",
  },
  {
    name: "Validation + Scope",
    price: "€8,900",
    unit: "project",
    desc: "Sprint + written product spec and a build proposal if the validation passes. One procurement decision instead of two sequential ones.",
    featured: true,
  },
  {
    name: "Multi-Idea Validation",
    price: "€14,500",
    unit: "project",
    desc: "Three parallel validation sprints across three product hypotheses. Stack-ranked recommendation with relative demand signals across all three concepts.",
  },
];

const whyFoundersSkip = [
  {
    icon: AlertTriangle,
    title: "They mistake confidence for evidence",
    desc: "Founders who have worked in an industry for a decade assume they know the buyer. They often do — but the specific product form, the price point, and the ICP are still hypotheses. Confidence is not the same as a confirmed conversion rate.",
  },
  {
    icon: AlertTriangle,
    title: "They confuse a survey with a signal",
    desc: "A survey where 80% of respondents say they would pay for your product means nothing. What people say they will do and what they actually do when asked to hand over a card are two completely different things. We test behaviour, not intention.",
  },
  {
    icon: AlertTriangle,
    title: "They believe speed is the moat",
    desc: "The belief that shipping fast is the moat leads to building the wrong thing fast. Nine months into a build, discovering that the market wanted a different feature set or a different price point is the most expensive lesson in product development.",
  },
  {
    icon: AlertTriangle,
    title: "They treat validation as a delay",
    desc: "Founders see 14 days as 14 days lost. They are actually 14 days that can save 9 months. If the answer is no-go, you saved 9 months and €60,000. If the answer is go, you have transcripts, a landing page, and a qualified prospect list to hand to the build team.",
  },
];

const whatValidationCovers = [
  { covered: true, item: "Whether real buyers convert at a landing page with your value proposition and price" },
  { covered: true, item: "What language buyers use when describing the problem you are solving" },
  { covered: true, item: "Which ICP segment converts highest and which objections come up most in discovery calls" },
  { covered: true, item: "Whether the pricing hypothesis is in the right range for the segment" },
  { covered: true, item: "A go/no-go recommendation with a written rationale against pre-agreed thresholds" },
  { covered: false, item: "Technical feasibility of the product concept" },
  { covered: false, item: "Intellectual property or freedom-to-operate assessment" },
  { covered: false, item: "Competitive moat analysis or long-term defensibility" },
];

const ideaValFAQs: FAQItem[] = [
  {
    question: "Why should I validate before building?",
    answer: "Software founders fail at the same step over and over: they spend six to twelve months and €40,000–€100,000 building the wrong thing. The Validation Sprint costs €4,900 and takes 14 days. If the answer is no-go, you saved 9 months and €55,000. If the answer is go, you have real buyer transcripts, a landing page, and a prospect list to hand to the build team.",
  },
  {
    question: "What makes a Validation Sprint different from just building an MVP?",
    answer: "An MVP tests whether you can build the product. A Validation Sprint tests whether anyone will pay for it before you build anything. We use a production-quality landing page, real paid traffic, and senior-led discovery calls — not a rough prototype — because the signal has to be reliable enough to stake €60,000 on.",
  },
  {
    question: "What does the written go/no-go report contain?",
    answer: "The report includes the pre-agreed success thresholds, the actual metrics captured across the 14 days, all discovery call transcripts (with consent), the reasoning behind the recommendation, and suggested next steps. If the answer is no-go, the report includes what specifically needs to change — it is not a blank rejection.",
  },
  {
    question: "What happens if the answer is no-go?",
    answer: "You receive the full report, the discovery call transcripts, the landing page (yours to keep), and a specific list of what needs to change for a re-test to make sense. Around 25% of sprints return a no-go. In our experience, that is the most valuable possible outcome — it redirects the founder's capital and energy before the expensive build starts.",
  },
  {
    question: "Can I run a Validation Sprint for a B2B SaaS idea?",
    answer: "B2B SaaS is the most common use case. We have validated ideas for Malta-based SaaS companies targeting iGaming operators, hospitality groups, professional-services firms, and fintech compliance teams. LinkedIn and targeted email outreach replace or supplement paid search for B2B validations.",
  },
  {
    question: "What ad spend is included in the Sprint price?",
    answer: "€1,500 in paid traffic is included in the €4,900 Sprint price. This covers the first 6–7 days of live traffic. If the validation produces strong early signals and more traffic is needed to confirm them, we recommend an extension — billed at cost, no margin.",
  },
  {
    question: "How does this connect to MVP development?",
    answer: "The Validation Engine tests whether to build at all. Once the go signal is confirmed, the same OARC team that ran the validation carries the customer language, discovery transcripts, and demand-signal data directly into the build phase — no starting from scratch. The Validation + Scope tier adds a written product spec and build proposal at the same time as the validation decision.",
  },
  {
    question: "Do you run validations for non-software product ideas?",
    answer: "Yes — we have validated physical product concepts, service-business niches, and marketplace models. The framework is the same: land page, targeted traffic, behaviour-based signal, written recommendation. The main difference is the discovery-call script, which we adapt to the specific product type.",
  },
];

export default function PageContent() {
  return (
    <div className="border-t">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageObjectSchema) }}
      />

      {/* HERO with image */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Startup idea validation workspace with market research materials — used to test product-market fit for a Malta entrepreneur before committing to a full build"
            width={1200}
            height={800}
            className="w-full h-full object-cover"
            fetchPriority="high"
            data-testid="img-hero-idea-validation"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/80 to-zinc-900/60" />
        </div>
        <div className="relative bg-transparent text-white py-20 px-6 z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">14 Days. Real Data. Go or No-Go.</span>
            </div>
            <h1 data-speakable className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Know If Your Idea Will Work<br />
              <span className="text-orange-400 italic">Before You Spend a Penny.</span>
            </h1>
            <p data-speakable className="text-zinc-300 text-lg leading-relaxed mb-4 max-w-2xl">
              Software founders fail at the same step over and over again: they spend six months and €60,000 building the wrong thing. The Idea Validation Engine is the structural intervention against that failure mode.
            </p>
            <p className="text-zinc-400 leading-relaxed max-w-2xl mb-8">
              The cost is not the headline. The cost is the saved nine months and €58,000 if the answer is no — and the sharpened positioning if the answer is yes. Skipping validation is the most expensive €4,900 most founders never spend.
            </p>
            <Link href="/contact">
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors" data-testid="button-hero-cta">
                Book a Validation Sprint <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* PROOF METRICS */}
      <section className="py-16 px-6 bg-zinc-950 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {metrics.map((m, i) => (
              <div key={i} className="p-8 rounded-xl border border-white/10 text-center" data-testid={`metric-${i}`}>
                <div className="text-4xl font-bold text-orange-400 mb-2">{m.value}</div>
                <div className="font-medium text-white mb-1">{m.label}</div>
                <div className="text-sm text-zinc-500">{m.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT THE 14 DAYS CONTAIN */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">What the Fourteen Days Actually Contain</h2>
          <p className="text-muted-foreground mb-10">Behaviour is the only signal that predicts what will happen six months from now. We test behaviour — not surveys.</p>
          <div className="space-y-4">
            {phases.map((phase) => (
              <ScrollReveal key={phase.step}>
                <div className="p-6 rounded-xl bg-card border flex items-start gap-5" data-testid={`phase-${phase.step}`}>
                  <div className="w-12 h-12 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
                    <phase.icon className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-orange-500 font-bold text-sm">{phase.step}</span>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">{phase.days}</span>
                    </div>
                    <h3 className="font-bold mb-2">{phase.title}</h3>
                    <p className="text-muted-foreground">{phase.detail}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3 OUTCOMES */}
      <section className="py-20 px-6 bg-zinc-950 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">The Three Outcomes</h2>
          <p className="text-zinc-400 mb-10">Every sprint produces one of three outcomes. The report belongs to the client regardless of which one it is.</p>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {outcomes.map((o, i) => (
              <div key={i} className={`p-6 rounded-xl border ${o.bg}`} data-testid={`outcome-${o.result.toLowerCase()}`}>
                <div className={`text-2xl font-bold mb-1 ${o.color}`}>{o.result}</div>
                <div className="text-sm text-zinc-400 mb-3">{o.pct} of sprints</div>
                <p className="text-sm text-zinc-300">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY FOUNDERS SKIP VALIDATION */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Why founders skip validation — and the cost of each reason</h2>
          <p className="text-muted-foreground mb-10">These are the four most common explanations we hear, and why each one is mistaken.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {whyFoundersSkip.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="p-5 rounded-xl bg-card border h-full" data-testid={`skip-reason-${i}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <item.icon className="w-4 h-4 text-orange-500" />
                    <h3 className="font-bold">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT VALIDATION COVERS */}
      <section className="py-20 px-6 bg-zinc-950 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">What a Validation Sprint covers — and what it does not</h2>
          <p className="text-zinc-400 mb-10">Setting clear expectations up front is part of the service.</p>
          <div className="grid md:grid-cols-2 gap-3">
            {whatValidationCovers.map((item, i) => (
              <div key={i} className={`flex items-start gap-3 p-4 rounded-xl border ${item.covered ? "border-green-500/20 bg-green-500/5" : "border-red-500/20 bg-red-500/5"}`} data-testid={`coverage-${i}`}>
                {item.covered ? (
                  <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                ) : (
                  <span className="text-red-400 text-xs font-bold mt-1 flex-shrink-0">✕</span>
                )}
                <p className="text-sm text-zinc-300">{item.item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Pricing</h2>
          <p className="text-muted-foreground mb-6">We refuse to scope MVP builds for ideas that have not passed a validation gate — not as a sales tactic, but because the unit economics of failed software are bad for both sides.</p>
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {pricingTiers.map((tier) => (
              <div key={tier.name} className={`rounded-xl border p-6 bg-card flex flex-col ${tier.featured ? "border-orange-500" : ""}`} data-testid={`pricing-${tier.name.toLowerCase().replace(/\s+/g, "-")}`}>
                {tier.featured && <div className="text-xs uppercase tracking-wider text-orange-500 font-bold mb-2">Most popular</div>}
                <h3 className="font-bold text-lg mb-1">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-3xl font-bold text-orange-600">{tier.price}</span>
                  <span className="text-sm text-muted-foreground">{tier.unit}</span>
                </div>
                <p className="text-sm text-muted-foreground flex-1">{tier.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-xl bg-orange-500/5 border border-orange-500/20">
            <p className="text-sm text-muted-foreground mb-3">
              <strong className="text-foreground">Validation vs MVP development — what happens next:</strong>
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              The Validation Engine tests whether to build at all. Once the go signal is confirmed, the same OARC team that ran the validation carries the customer language, discovery transcripts, and demand-signal data directly into the build phase — no starting from scratch.
            </p>
            <Link href="/services/mvp-development" className="inline-flex items-center gap-2 text-orange-500 font-medium hover:text-orange-600 transition-colors text-sm">
              See MVP Development — what comes after a successful validation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* HOW VALIDATION EVIDENCE CHANGES THE MVP SCOPE */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">How Validation Evidence Changes the MVP Scope</h2>
          <p className="text-foreground leading-relaxed mb-6">
            The most underrated output of a Validation Sprint is not the go/no-go answer — it is the buyer language captured in 8 to 12 discovery calls. When a founder hears the same objection in six consecutive calls, or notices that three different buyers describe the same workaround, that signal rewrites the feature list before a line of code is written. The resulting MVP is faster to build and faster to close a first paying customer because it solves the confirmed problem rather than the assumed one.
          </p>
          <div className="space-y-4 mb-12">
            {[
              { from: "Before validation", state: "Feature list built from founder assumptions. 18 features planned for v1. Unclear which ones are table-stakes and which are nice-to-have. Build estimated at 9 months." },
              { from: "After validation — Go", state: "8 discovery calls confirm 3 features are must-haves. 2 features nobody mentioned are dropped. 1 new feature not in the original list was requested by 6 of 8 callers. Build re-scoped to 5 months, 40% cheaper." },
              { from: "After validation — Iterate", state: "ICP was too broad. Hospitality and SaaS buyers want different things from the same product. Two separate landing pages, two separate test runs, two separate pricing hypotheses. Avoids building a product that is average for two segments." },
            ].map((row, i) => (
              <div key={i} className="p-5 rounded-xl bg-card border" data-testid={`scope-change-${i}`}>
                <div className="font-bold text-orange-500 text-xs uppercase tracking-wider mb-2">{row.from}</div>
                <p className="text-muted-foreground text-sm">{row.state}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">Malta-Specific Validation Scenarios</h2>
          <p className="text-foreground leading-relaxed mb-6">
            The Maltese market has structural quirks that affect validation results. The buyer pool is small — an idea targeting iGaming compliance teams in the CBD might have 40 potential buyers in total. A conventional six-week landing-page test is too slow for a market that size. We adapt the traffic strategy and discovery call pace accordingly.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {[
              { title: "iGaming and fintech SaaS", desc: "A B2B product targeting MGA-licensed operators or MFSA-regulated firms has a small, senior, and highly networked buyer pool. We use LinkedIn targeting and direct outreach over paid search, run fewer but higher-quality discovery calls, and calibrate the signal threshold down to 5 confirmed conversations rather than 8." },
              { title: "Hospitality tech", desc: "Restaurant, hotel, and spa operators in Malta have a distinct buying process — decisions are owner-led and budget-tight. Validation for hospitality tech includes a price-sensitivity test and a payment-method test alongside the standard product-fit questions." },
              { title: "Consumer apps", desc: "Malta consumer apps targeting the island as a primary market face volume constraints. We extend the traffic test to include the Maltese diaspora in the UK, Italy, and Australia — a substantial secondary market with shared cultural context." },
              { title: "B2B services marketplaces", desc: "Malta has a small but active demand for professional services on-demand. Marketplace validation requires testing both sides — service provider supply and buyer demand — simultaneously, which we handle with two separate landing pages and two separate traffic budgets." },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-card border">
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-xl bg-orange-500/5 border border-orange-500/20">
            <h3 className="font-bold mb-3">Validation is the mandatory gate before MVP development at OARC</h3>
            <p className="text-sm text-muted-foreground mb-4">
              We refuse to scope MVP builds for ideas that have not passed a validation gate — not as a sales tactic, but because the unit economics of failed software are bad for both sides. A client who spent €60,000 building the wrong thing is not a repeat client. A client who spent €4,900 validating and then €45,000 building the right thing is an advocate.
            </p>
            <Link href="/services/mvp-development" className="inline-flex items-center gap-2 text-orange-500 font-medium text-sm hover:text-orange-600 transition-colors">
              MVP Development — what happens after the validation gate passes <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6">
        <MaltaContextBlock slug="idea-validation-engine" />
      </div>

      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Why OARC Runs the Validation Sprint, Not a Consultant Deck</h2>
          <p className="text-foreground leading-relaxed mb-4">
            Strategy consultants produce frameworks. Validation Sprints produce buyer transcripts, conversion rates, and a written recommendation that either commits to a build or saves the founder nine months of capital. OARC runs Validation Sprints because the same team that validates ideas also builds the MVPs that pass. We have skin in the game: a founder who builds the wrong thing does not hire us for the next stage.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            The evidence captured in a Validation Sprint is primary — real people, real clicks, real conversations. It is not secondary research, competitor analysis, or market-sizing from a report. Those inputs are useful for context, but they cannot replace the signal of a real buyer who visits a real landing page, reads a real pricing tier, and either converts or bounces. The sprint produces that primary signal in 14 days.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            For Malta-based founders, the Validation Sprint carries an additional benefit: the discovery calls we run often surface warm introductions to early-adopter buyers on the island who are interested in piloting the product before public launch. Malta&apos;s business community near Manoel Island, Ta&apos; Xbiex marina, and the Valletta Financial Centre is small enough that six discovery calls often surface referral connections that turn into design partners. We document those introductions in the report alongside the go/no-go recommendation.
          </p>
          <p className="text-foreground leading-relaxed">
            OARC Digital runs Validation Sprints from our Birkirkara base and remotely for founders outside Malta who want to test a Malta market entry alongside a UK, EU, or global market. Pricing is the same regardless of geography — the traffic budget covers the markets being tested.
          </p>
        </div>
      </section>

      <FAQSection
        faqs={ideaValFAQs}
        title="Idea validation questions, answered directly"
        subtitle="What Malta founders and product teams need to know before running a Validation Sprint"
        schemaId="faq-idea-validation"
      />

      <div className="max-w-4xl mx-auto px-6 pb-8">
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Who runs the Validation Sprint on your account</h2>
          <p className="text-foreground leading-relaxed mb-4">
            Every Validation Sprint is led by a named senior OARC strategist — someone who has run at least 20 prior sprints and who will personally conduct all 8-plus discovery calls. Discovery calls are not delegated to a junior researcher because the qualitative signal — the hesitations, the objections phrasing, the body language on a video call — is too valuable to lose in a transcription relay.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            The landing page is built by the OARC design and development team and tested against a minimum 2-second Largest Contentful Paint benchmark before traffic is turned on. A slow landing page produces a false negative — visitors who would have converted bounce before they see the offer. We do not allow a technical failure to produce a no-go recommendation.
          </p>
          <p className="text-foreground leading-relaxed">
            The written go/no-go report is delivered by the sprint lead in a 45-minute debrief call with the founder — not emailed without context. The debrief includes the raw discovery call transcripts shared as a read-only link, the live dashboard showing traffic and conversion metrics, and a 15-minute Q&amp;A. Clients consistently report the debrief call as the most valuable part of the sprint — it is the moment where the buyer language captured in the transcripts connects to the product decisions the founder needs to make.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">From Validation to AI-Powered MVP: the Handover Process</h2>
          <p className="text-foreground leading-relaxed mb-4">
            When a Validation Sprint returns a Go, the handover to the MVP build team begins in the same week. The sprint lead presents the buyer transcripts, the demand metrics, and the recommended MVP feature scope to the lead engineer and the product designer. The discovery call transcripts become the primary source for user stories — reducing requirements-gathering time by approximately 60% compared to a cold-start build. The landing page built during the sprint becomes the design baseline for the MVP onboarding flow.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            Founders who opt for the Validation + Scope tier receive the product spec and build proposal alongside the go/no-go decision — collapsing two decision points into one. The build proposal includes a feature prioritisation matrix ranked by the frequency of mention in discovery calls, a technology recommendation, and a 12-week MVP delivery timeline with payment milestones.
          </p>
          <p className="text-foreground leading-relaxed">
            For ideas targeting Malta-based buyers, the early-adopter prospects surfaced in the discovery calls often become the beta users and design partners for the build phase. Having beta users in the island&apos;s iGaming, hospitality, or professional-services community before public launch is a structural advantage that no amount of post-launch marketing can replicate.
          </p>
        </section>

        <section className="mb-12 p-6 rounded-xl border bg-card">
          <h2 className="text-xl font-bold mb-3">How to book a Validation Sprint</h2>
          <p className="text-sm text-muted-foreground mb-3">
            Book a 30-minute scoping call via the contact page or by phone. On the call we cover: the product hypothesis in one sentence, the target ICP, any prior market research you have done, and whether the sprint threshold should be calibrated for the Malta market specifically or a broader EU market. Following the scoping call, we send a one-page sprint brief and a payment link. The sprint clock starts on the day the brief is approved and payment is received.
          </p>
          <p className="text-sm text-muted-foreground mb-3">
            The €1,500 ad budget included in the Sprint price is held in an OARC account and spent exclusively on your validation traffic. You receive a full ad spend report alongside the go/no-go document — so you can see exactly what was tested, where the traffic came from, and what the cost per qualified discovery call was.
          </p>
          <p className="text-sm text-muted-foreground">
            If the sprint takes longer than 14 days due to unusually low traffic volume or a small target market, there is no additional charge for the extension. We committed to 8 qualified discovery calls — we deliver them regardless of how long it takes the traffic to produce them.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Validation Sprint Pricing — Three Tiers by Scope</h2>
          <p className="text-foreground leading-relaxed mb-4">
            The Validation Sprint is priced at three tiers: Sprint (€4,900 including €1,500 ad budget), Sprint + Scope (€7,200 including €1,500 ad budget plus a full product spec and build proposal), and Rapid Signal (€2,900 including €500 ad budget for faster go/no-go signal with a reduced discovery-call threshold of 5 calls). All tiers include the landing page build, ad management, discovery calls, and the go/no-go written report.
          </p>
          <p className="text-foreground leading-relaxed">
            There are no hidden platform fees, no markup on ad spend beyond the declared budget, and no additional cost if the sprint runs past 14 days due to traffic volume constraints. The price quoted is the price paid.
          </p>
        </section>

        <section className="mb-12 p-6 rounded-xl bg-orange-500/5 border border-orange-500/20">
          <h2 className="text-xl font-bold mb-3">Idea Validation Engine vs Idea Validation Retainer — when each applies</h2>
          <p className="text-sm text-muted-foreground mb-3">
            The Idea Validation Engine is a one-time sprint — a defined start, a defined end, and a written go/no-go recommendation. It is not a retainer. After the sprint, the recommendation either feeds the MVP build or sends the founder back to the hypothesis drawing board with evidence about why the original assumption was wrong. Some founders run a second sprint with a refined ICP or pricing model after an Iterate result — the second sprint is priced identically to the first.
          </p>
          <p className="text-sm text-muted-foreground">
            For operators running multiple ideas in parallel — an iGaming SaaS founder with three product hypotheses, for example — OARC offers a Discovery Programme that sequences three Rapid Signal sprints over 6 weeks, producing go/no-go decisions on all three before committing build resource to any of them. Contact us for Discovery Programme pricing.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Visit OARC Digital</h2>
          <TrustBlock variant="visit" />
        </section>
        <RelatedServices slug="/services/idea-validation-engine" />
      </div>
    </div>
  );
}
