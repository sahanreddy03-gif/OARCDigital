import Link from "next/link";
import { ArrowRight, CheckCircle2, Lightbulb, Users, BarChart3, FileText, Rocket } from "lucide-react";
import RelatedLinks from "@/components/RelatedLinks";
import MaltaContextBlock from "@/components/seo/MaltaContextBlock";
import TrustBlock from "@/components/seo/TrustBlock";

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
  },
  {
    name: "Multi-Idea Validation",
    price: "€14,500",
    unit: "project",
    desc: "Three parallel validation sprints across three product hypotheses. Stack-ranked recommendation with relative demand signals across all three concepts.",
  },
];

export default function PageContent() {
  return (
    <div className="border-t">
      <div className="bg-zinc-950 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
            <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">14 Days. Real Data. Go or No-Go.</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Validate the idea in fourteen days. Then build the right thing.</h2>
          <p className="text-zinc-300 text-lg leading-relaxed mb-4">
            Software founders fail at the same step over and over again: they spend six months and €60,000 building the wrong thing. The Idea Validation Engine is the structural intervention against that failure mode.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            The cost is not the headline. The cost is the saved nine months and €58,000 if the answer is no — and the sharpened positioning if the answer is yes. Skipping validation is the most expensive €4,900 most founders never spend.
          </p>
        </div>
      </div>

      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">What the Fourteen Days Actually Contain</h2>
          <p className="text-muted-foreground mb-10">Behaviour is the only signal that predicts what will happen six months from now. We test behaviour — not surveys.</p>
          <div className="space-y-4">
            {phases.map((phase) => (
              <div key={phase.step} className="p-6 rounded-xl bg-card border flex items-start gap-5">
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
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-zinc-950 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">The Three Outcomes</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {outcomes.map((o, i) => (
              <div key={i} className={`p-6 rounded-xl border ${o.bg}`}>
                <div className={`text-2xl font-bold mb-1 ${o.color}`}>{o.result}</div>
                <div className="text-sm text-zinc-400 mb-3">{o.pct} of sprints</div>
                <p className="text-sm text-zinc-300">{o.desc}</p>
              </div>
            ))}
          </div>
          <h2 className="text-xl font-bold mb-6 text-center">What Clients Get in Every Sprint</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {metrics.map((m, i) => (
              <div key={i} className="p-8 rounded-xl border border-white/10 text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2">{m.value}</div>
                <div className="font-medium text-white mb-1">{m.label}</div>
                <div className="text-sm text-zinc-500">{m.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Pricing</h2>
          <p className="text-muted-foreground mb-6">We refuse to scope MVP builds for ideas that have not passed a validation gate — not as a sales tactic, but because the unit economics of failed software are bad for both sides.</p>
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {pricingTiers.map((tier) => (
              <div key={tier.name} className="rounded-xl border p-6 bg-card flex flex-col">
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

      <div className="max-w-4xl mx-auto px-6">
        <MaltaContextBlock slug="idea-validation-engine" />
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-8">
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Visit OARC Digital</h2>
          <TrustBlock variant="visit" />
        </section>
        <RelatedLinks slug="/services/idea-validation-engine" />
      </div>
    </div>
  );
}
