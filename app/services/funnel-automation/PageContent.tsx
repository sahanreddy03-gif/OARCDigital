import Link from "next/link";
import { ArrowRight, CheckCircle2, Database, Brain, Calendar, Mail, BarChart3, Shield } from "lucide-react";
import RelatedLinks from "@/components/RelatedLinks";
import MaltaContextBlock from "@/components/seo/MaltaContextBlock";
import TrustBlock from "@/components/seo/TrustBlock";

const layers = [
  {
    step: "01",
    title: "Form-to-CRM piping with enrichment, dedup, and routing",
    detail: "Leads land in the right pipeline with the right owner within seconds of submitting a form — not in a Slack message someone might or might not see on Tuesday. Typical effort: 2–3 weeks.",
    icon: Database,
  },
  {
    step: "02",
    title: "AI qualification — protected closer calendars",
    detail: "The OARC AI SDR or the Lead Generation Engine decides which leads earn a meeting and which earn a long-cycle nurture. Your closers only see qualified, intent-confirmed contacts.",
    icon: Brain,
  },
  {
    step: "03",
    title: "Calendar booking with no-show recovery",
    detail: "Qualified prospects book directly into the right calendar. No-show recovery sequences reclaim 25–40% of would-be-lost meetings. Rebooking happens automatically.",
    icon: Calendar,
  },
  {
    step: "04",
    title: "Lifecycle email cadences keyed to behaviour",
    detail: "Not arbitrary day-counts. Prospects who are not ready right now stay engaged for the year that follows. The single most undervalued revenue lever in most B2B stacks.",
    icon: Mail,
  },
  {
    step: "05",
    title: "CRM stage hygiene — consistent pipeline data",
    detail: "Deal stages that mean the same thing across every rep. Hygiene rules that fire automatically when a deal stalls. Forecast accuracy that actually holds in a board meeting.",
    icon: Shield,
  },
  {
    step: "06",
    title: "Dashboards joining all of the above",
    detail: "Funnel-stage conversion rates visible weekly, not quarterly. Every metric has a curated definition. Every change has commentary. The bottleneck is always visible.",
    icon: BarChart3,
  },
];

const metrics = [
  { value: "35–60%", label: "Funnel conversion lift", note: "median 90 days after a Funnel Build" },
  { value: "25–40%", label: "No-show recovery rate", note: "from automated rebooking sequences" },
  { value: "6", label: "Shipped layers", note: "each independently observable" },
];

const tools = [
  { area: "CRM", options: "HubSpot (SMB), Salesforce (enterprise), Pipedrive (< 20 seats), Close / Attio (fast-growth startups)" },
  { area: "Email automation", options: "Klaviyo (ecommerce), Customer.io / Iterable (SaaS), HubSpot (B2B)" },
  { area: "Calendar booking", options: "Calendly, Cal.com, Chili Piper (high-volume routing)" },
  { area: "Workflow glue", options: "n8n, Workato, Make, or custom Node.js workers depending on volume" },
];

const pricingTiers = [
  {
    name: "Funnel Audit",
    price: "€1,800",
    unit: "project",
    desc: "2-week diagnostic: map every funnel stage, name the friction points, produce a top-3 fix list with effort estimates.",
  },
  {
    name: "Funnel Build",
    price: "€9,500",
    unit: "project",
    desc: "6–8 week sprint: form-to-CRM layer + AI qualification + lifecycle email refresh. Observable lift before the retainer starts.",
  },
  {
    name: "Funnel Retainer",
    price: "€2,900",
    unit: "/ month",
    desc: "Ongoing iteration: A/B tests, lifecycle tweaks, AI agent tuning, and weekly performance reviews.",
  },
];

export default function PageContent() {
  return (
    <div className="border-t">
      <div className="bg-zinc-950 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
            <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Six Layers, Each Shipped Independently</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Wire the funnel from ad-click to closed deal — instrumented and self-tuning</h2>
          <p className="text-zinc-300 text-lg leading-relaxed mb-4">
            The typical Malta SME funnel looks great in a slide deck and leaks like a sieve in production. Forms post to a CRM nobody opens until Tuesday. Lead-routing is a Slack message someone might not see. The lifecycle email cadence is two emails written in 2021. The dashboard says &quot;pipeline created&quot; but nobody can explain why conversion rate dropped from 12% in May to 4% in June.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            Funnel Automation is the engineering job that fixes all of that. We instrument every stage so the drop-off curve is observable. We automate the entire handoff layer. We ship each layer independently so every improvement is proven before the next one starts.
          </p>
        </div>
      </div>

      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">The 6 Layers of Funnel Automation</h2>
          <p className="text-muted-foreground mb-10">We deliberately do not bundle them into one monolithic platform — ship layer 1, prove the lift, move to layer 2.</p>
          <div className="space-y-4">
            {layers.map((layer) => (
              <div key={layer.step} className="p-6 rounded-xl bg-card border flex items-start gap-5">
                <div className="w-12 h-12 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
                  <layer.icon className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-orange-500 font-bold text-sm">{layer.step}</span>
                    <h3 className="font-bold">{layer.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{layer.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-zinc-950 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">What Clients See in 90 Days</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Tools We Build On — and Why</h2>
          <p className="text-muted-foreground mb-6">We do not take vendor commissions. Tool selection is purely on stack-fit and cost-per-event. You own the licenses — you can leave OARC at any time without re-platforming.</p>
          <div className="space-y-3 mb-12">
            {tools.map((t, i) => (
              <div key={i} className="p-4 rounded-xl bg-card border flex items-start gap-4">
                <span className="font-bold text-sm w-32 flex-shrink-0 text-orange-600">{t.area}</span>
                <p className="text-sm text-muted-foreground">{t.options}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-6">Pricing</h2>
          <p className="text-muted-foreground mb-6">Start with the Audit to know exactly where the bottleneck is before committing to the Build.</p>
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
              <strong className="text-foreground">Funnel Automation vs Revenue Automation — what&apos;s different:</strong>
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Funnel Automation covers acquisition-through-close — the conversion pipeline. Revenue Automation is the wider scope: it adds billing, customer-success, and finance integration on top. Most clients land on Funnel Automation first, then expand into the revenue automation layer once the pipeline is running cleanly.
            </p>
            <Link href="/services/revenue-automation" className="inline-flex items-center gap-2 text-orange-500 font-medium hover:text-orange-600 transition-colors text-sm">
              See Revenue Automation — the full-scope system above the funnel
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6">
        <MaltaContextBlock slug="funnel-automation" />
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-8">
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Visit OARC Digital</h2>
          <TrustBlock variant="visit" />
        </section>
        <RelatedLinks slug="/services/funnel-automation" />
      </div>
    </div>
  );
}
