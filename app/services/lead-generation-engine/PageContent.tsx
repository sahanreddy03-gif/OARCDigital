import Link from "next/link";
import { ArrowRight, CheckCircle2, Target, Brain, Filter, Calendar, BarChart3, Zap } from "lucide-react";
import RelatedServices from "@/components/RelatedServices";
import MaltaContextBlock from "@/components/seo/MaltaContextBlock";
import TrustBlock from "@/components/seo/TrustBlock";

const IMG_HERO = "/attached_assets/hf_20260420_105621_ca372d08-65bd-489e-94b8-64550a070e23_1779836586702.png";

const leadGenImageSchema = {
  "@context": "https://schema.org",
  "@type": "ImageObject",
  name: "OARC Digital lead generation — while competitors post, clients close",
  description: "OARC Digital lead generation results — while competitors post content, OARC clients close deals using targeted lead generation for Malta businesses.",
  url: "https://oarcdigital.com" + IMG_HERO,
  width: 1080,
  height: 1080,
  contentUrl: "https://oarcdigital.com" + IMG_HERO,
};

const phases = [
  {
    step: "01",
    title: "AI prospecting — ICP-matched prospects daily",
    detail: "We define your Ideal Customer Profile precisely (industry, headcount, geography, technographics, intent signals). The engine pulls matching prospects from Apollo, Cognism, Lusha, ZoomInfo, and LinkedIn Sales Navigator daily — GDPR-compliance-checked at source.",
    icon: Target,
  },
  {
    step: "02",
    title: "Outreach sequences tuned to your voice",
    detail: "Sequenced email and LinkedIn touches from your domain, voice-trained against your top reps' actual sequences. Messages are short, conversational, and prospect-specific — not long-paragraph AI-style openers that get deleted. Reply-rate floor: 1% (industry average: 0.4%).",
    icon: Zap,
  },
  {
    step: "03",
    title: "AI qualification — protected closer calendars",
    detail: "Replies route through the engine's qualification logic. Prospects who fit the rubric and show intent book a meeting. Others enter a long-cycle nurture rather than being discarded. Your closers never see unqualified contacts.",
    icon: Filter,
  },
  {
    step: "04",
    title: "Pre-call brief — your team walks in prepped",
    detail: "Before every booked meeting the engine generates a one-page brief: prospect background, company context, recent news, predicted objections, recommended opening question. No cold introductions.",
    icon: Brain,
  },
];

const metrics = [
  { value: "25–60", label: "Qualified meetings per month", note: "vs 8–15 from a human SDR" },
  { value: "80%+", label: "Auto-send rate by week 6", note: "below threshold → human review queue" },
  { value: "< 30s", label: "Qualification reply time", note: "vs hours with a manual SDR" },
];

const differentiators = [
  "Voice-trained on your reps' actual sequences — not generic AI defaults",
  "GDPR-compliant ICP sourcing across 5 platforms simultaneously",
  "AI qualification + calendar booking + pre-call brief in one system",
  "Human review queue for below-confidence messages",
  "EU-only data residency with customer-held encryption keys",
  "Weekly performance reviews with reply-rate and meeting data",
];

const pricingTiers = [
  {
    name: "Engine Pilot",
    price: "€2,900",
    unit: "/ month",
    desc: "Single ICP, AI prospecting + qualification + booking. Target: 25 qualified meetings/month after warm-up.",
  },
  {
    name: "Engine Pro",
    price: "€5,900",
    unit: "/ month",
    desc: "Multi-ICP, multi-channel (email + LinkedIn + web chat). Target: 60+ qualified meetings/month with weekly tuning.",
  },
  {
    name: "Engine Custom Build",
    price: "€24,000",
    unit: "project",
    desc: "8-week build for bespoke ICP modelling, custom CRM hooks, or integration with your own enrichment stack. Includes 90 days of post-launch tuning.",
  },
];

export default function PageContent() {
  return (
    <div className="border-t">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(leadGenImageSchema) }} />
      <div className="bg-zinc-950 flex justify-center py-6 px-4" data-testid="section-hero-image">
        <img
          src={IMG_HERO}
          alt="OARC Digital lead generation — while competitors post content, OARC clients close deals in Malta | OARC Digital"
          width={1080}
          height={1080}
          className="w-full max-w-xl rounded-xl shadow-2xl"
          fetchPriority="high"
          data-testid="img-hero-lead-generation"
        />
      </div>
      <div className="bg-zinc-950 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
            <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">How the Engine Works</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">An AI-native engine — not a re-skinned SDR agency</h2>
          <p className="text-zinc-300 text-lg leading-relaxed mb-4">
            An SDR books 8–15 qualified meetings per month at a fully-loaded cost of €4,000–€6,000. The OARC Lead Generation Engine targets 25–60 qualified meetings per month at €2,900–€5,900 per month. The trade-off is not &quot;AI vs human&quot; — humans are still better at nuanced discovery calls. The trade-off is <strong className="text-white">AI for volume, humans for judgement</strong>.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            Production deployments typically replace 1.5–2 SDR seats inside 90 days. The saved budget reinvests in one additional account executive who closes the increased meeting volume. Net result: same headcount cost, materially higher pipeline and closed revenue.
          </p>
        </div>
      </div>

      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">End-to-End, in 4 Stages</h2>
          <p className="text-muted-foreground mb-10">Every stage ships to production. Every stage is observable.</p>
          <div className="space-y-4">
            {phases.map((phase) => (
              <div key={phase.step} className="p-6 rounded-xl bg-card border flex items-start gap-5">
                <div className="w-12 h-12 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
                  <phase.icon className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-orange-500 font-bold text-sm">{phase.step}</span>
                    <h3 className="font-bold">{phase.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{phase.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-zinc-950 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">What Clients See in the First 90 Days</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold mb-8">What Every Tier Includes</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {differentiators.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card border">
                <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <p className="text-foreground">{item}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-6">Pricing</h2>
          <p className="text-muted-foreground mb-6">No per-message billing, no surprise model-credit invoices.</p>
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
              <strong className="text-foreground">Lead generation vs customer acquisition — what&apos;s different:</strong>
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              This engine handles top-of-funnel through to the booked meeting. Once a prospect is qualified and on your calendar, the work of converting them into a paying client is a separate discipline — landing pages, offer construction, and closing automation.
            </p>
            <Link href="/services/customer-acquisition-accelerator" className="inline-flex items-center gap-2 text-orange-500 font-medium hover:text-orange-600 transition-colors text-sm">
              See the Customer Acquisition Accelerator — the next step after leads
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6">
        <MaltaContextBlock slug="lead-generation-engine" />
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-8">
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Visit OARC Digital</h2>
          <TrustBlock variant="visit" />
        </section>
        <RelatedServices slug="/services/lead-generation-engine" />
      </div>
    </div>
  );
}
