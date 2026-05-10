import Link from "next/link";
import { ArrowRight, CheckCircle2, BarChart3, Target, Rocket, FileText, TrendingUp } from "lucide-react";
import RelatedLinks from "@/components/RelatedLinks";
import MaltaContextBlock from "@/components/seo/MaltaContextBlock";
import TrustBlock from "@/components/seo/TrustBlock";

const phases = [
  {
    step: "01",
    weeks: "Weeks 1–2",
    title: "Baseline — attribution audit + experimentation backlog",
    detail: "Full attribution audit, CPA-by-channel snapshot, creative-and-landing-page inventory, and an experimentation backlog with effort and expected-impact scores. Output: 8–12 highest-expected-value tests, priority-ranked.",
    icon: BarChart3,
  },
  {
    step: "02",
    weeks: "Weeks 3–8",
    title: "Execution — creative iteration + LP testing",
    detail: "Two new ad batches per week (8 winning concepts at week 8), landing-page A/B testing (one variant live every fortnight), lifecycle automation upgrades (welcome / abandon / post-purchase rebuilt where the existing flows are template-only).",
    icon: Target,
  },
  {
    step: "03",
    weeks: "Weeks 9–10",
    title: "Scaling — pour budget into the winners",
    detail: "Take the winning ads, the winning landing variants, the winning audiences, and scale the budget into them with disciplined frequency capping. This is where the CPA improvement compounds into revenue impact.",
    icon: Rocket,
  },
  {
    step: "04",
    weeks: "Weeks 11–12",
    title: "Handover — playbook your team can run from",
    detail: "A written playbook your in-house team can operate when we leave, a recorded handover session, and a 30-day post-engagement support window for tuning questions. 60% of Sprint clients move into our Retainer; the other 40% take the playbook in-house.",
    icon: FileText,
  },
];

const metrics = [
  { value: "30%", label: "CPA improvement committed in the SOW", note: "credited if missed by > 10%" },
  { value: "38%", label: "Median delivered improvement across 6 sprints", note: "over 6 months" },
  { value: "90", label: "Days from kickoff to proven playbook", note: "fixed scope, fixed price" },
];

const included = [
  "Channel audit and attribution rebuild",
  "Creative iteration cadence (2 batches/week)",
  "Landing-page A/B test programme",
  "Lifecycle automation upgrade (welcome / abandon / post-purchase)",
  "Playbook handover with recorded walkthrough",
  "30-day post-engagement support window",
];

const pricingTiers = [
  {
    name: "Acceleration Sprint",
    price: "€14,500",
    unit: "project",
    desc: "90-day engagement: channel audit, attribution rebuild, creative iteration, LP test programme, lifecycle automation upgrade, and playbook handover.",
  },
  {
    name: "Acceleration + AI",
    price: "€22,500",
    unit: "project",
    desc: "Sprint + AI SDR (for outbound qualification) and AI Nurture (for lifecycle email). Adds incremental qualified-meeting volume on top of the CPA improvement.",
  },
  {
    name: "Post-Sprint Retainer",
    price: "€3,900",
    unit: "/ month",
    desc: "Rolling experimentation board, monthly executive review, quarterly strategic re-evaluation. For clients who want to keep the test cadence running.",
  },
];

export default function PageContent() {
  return (
    <div className="border-t">
      <div className="bg-zinc-950 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
            <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Fixed Scope. Guaranteed Outcome.</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ninety days. Fixed scope. 30% CPA improvement target.</h2>
          <p className="text-zinc-300 text-lg leading-relaxed mb-4">
            Open-ended retainers drift. The first month is set-up. The second month is debugging the set-up. By month four the CFO is asking &quot;what have we actually moved&quot; and the answer is &quot;attribution is much better&quot; — which is true and important and also not what they wanted to hear.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            The Accelerator short-circuits that drift. Ninety days, fixed scope, fixed price, one outcome target committed in the SOW. We have run six of these in the last twelve months; the median delivered CPA improvement is 38%.
          </p>
        </div>
      </div>

      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">The 90-Day Programme, Phase by Phase</h2>
          <p className="text-muted-foreground mb-10">Fixed scope. No weekly re-briefs. One decision request per week for the founder.</p>
          <div className="space-y-4">
            {phases.map((phase) => (
              <div key={phase.step} className="p-6 rounded-xl bg-card border flex items-start gap-5">
                <div className="w-12 h-12 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
                  <phase.icon className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-orange-500 font-bold text-sm">{phase.step}</span>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">{phase.weeks}</span>
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
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Results We Commit to in Writing</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold mb-8">What Every Sprint Includes</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {included.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card border">
                <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <p className="text-foreground">{item}</p>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-xl bg-card border mb-10">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-semibold">Media budget requirement</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Minimum recommended media budget during the sprint is €15k/month. Below that, creative tests reach statistical significance too slowly to fit the 90-day timebox. Pure cold-start accounts add 2–3 weeks of warm-up — for new businesses we recommend running the <Link href="/services/idea-validation-engine" className="text-orange-500 hover:text-orange-600 underline underline-offset-2">Idea Validation Engine</Link> first.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-6">Pricing</h2>
          <p className="text-muted-foreground mb-6">Fixed scope, fixed price — no month-3 surprise invoices.</p>
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
              <strong className="text-foreground">Customer acquisition vs lead generation — what&apos;s different:</strong>
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              The Accelerator converts qualified leads into paying clients — landing pages, offer construction, nurture sequences, and closing automation. If you don&apos;t yet have a steady flow of qualified leads, that problem needs to be solved first.
            </p>
            <Link href="/services/lead-generation-engine" className="inline-flex items-center gap-2 text-orange-500 font-medium hover:text-orange-600 transition-colors text-sm">
              See the Lead Generation Engine — qualified meetings before conversion
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6">
        <MaltaContextBlock slug="customer-acquisition-accelerator" />
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-8">
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Visit OARC Digital</h2>
          <TrustBlock variant="visit" />
        </section>
        <RelatedLinks slug="/services/customer-acquisition-accelerator" />
      </div>
    </div>
  );
}
