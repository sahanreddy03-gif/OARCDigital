import Layout from "@/components/layout/Layout";
import RelatedServices from "@/components/RelatedServices";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import { SERVICE_SCHEMAS } from "@/lib/seo/serviceSchemaConfig";

import MaltaContextBlock from "@/components/seo/MaltaContextBlock";
import TrustBlock from "@/components/seo/TrustBlock";
import { NAP } from "@/lib/seo/nap";
const SCHEMA = SERVICE_SCHEMAS["devops-services"];

const phases = [
  { title: "Infrastructure audit (week 1)", detail: "We map your current cloud footprint, list every running resource, identify cost waste, surface single points of failure, and grade observability and incident response on a 1–5 scale." },
  { title: "CI/CD pipeline + IaC baseline (weeks 2–3)", detail: "GitHub Actions or GitLab CI for build, test, deploy. Terraform or Pulumi for infrastructure-as-code so every resource is versioned, reviewable, and reproducible." },
  { title: "Observability and on-call (week 4)", detail: "Logs to Loki/Datadog, metrics to Prometheus/Grafana, error tracking via Sentry, uptime via BetterStack — plus a written on-call runbook for the top 10 incident types." },
  { title: "Cost optimisation and security hardening (ongoing)", detail: "Quarterly AWS/GCP/Azure cost reviews, IAM tightening, secrets rotation, automated dependency-vulnerability scanning, and EU GDPR data-residency checks." },
];

export default function DevopsServicesContent() {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link><span>/</span>
              <span className="text-white">DevOps Services</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Cloud &amp; Reliability</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">DevOps Services for Malta SaaS &amp; iGaming</h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              CI/CD pipelines, infrastructure-as-code, observability, on-call runbooks, and cloud cost optimisation — for Malta-based SaaS, iGaming, and fintech teams that cannot afford a dedicated platform engineer yet.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"><Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">Book an infrastructure audit <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <a href={`tel:${NAP.phoneE164}`}><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><Phone className="mr-2 w-4 h-4" />{NAP.phoneDisplay}</Button></a>
            </div>
            <p className="mt-6 text-xs text-zinc-500">Last updated: 10 May 2026</p>
          </div>
        </section>
        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Malta SaaS Teams Outsource DevOps</h2>
            <p className="text-foreground leading-relaxed mb-4">
              A senior platform engineer in Malta now commands €75k to €110k base salary plus benefits — and even at that price, the local hiring pool is shallow. Most early- and mid-stage Malta SaaS, iGaming, and fintech teams cannot justify the cost of a full-time hire when they need 25–40% of one engineer&apos;s capacity. The result is product engineers writing Terraform on the weekend and incidents being handled by whoever happens to be online at 2am.
            </p>
            <p className="text-foreground leading-relaxed">
              An external DevOps team converts that variable cost into a fixed monthly retainer. OARC Digital&apos;s platform engineers run the AWS, GCP, or Vercel footprint for a portfolio of Malta clients across iGaming, fintech, and SaaS — sharing best practice, sharing on-call coverage, and sharing the boring but critical work of keeping production stable.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">A 4-Week Onboarding, Phase by Phase</h2>
            <div className="space-y-4">
              {phases.map((p, i) => (
                <div key={i} className="p-5 rounded-xl bg-card border">
                  <div className="flex items-start gap-3 mb-2"><span className="text-orange-500 font-bold text-sm mt-0.5">{String(i + 1).padStart(2, "0")}</span><h3 className="font-bold">{p.title}</h3></div>
                  <p className="text-muted-foreground pl-8">{p.detail}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">What Comes In Every Retainer</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {SCHEMA.features.map((f) => (
                <div key={f.name} className="flex items-start gap-3 p-4 rounded-xl bg-card border">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">{f.name}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Cloud Cost Discipline Pays for the Retainer</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Most Malta-based teams we audit are spending 30–55% more on cloud infrastructure than they need to. The waste comes from idle development environments left running, oversized RDS or Cloud SQL instances, unattached EBS volumes, NAT gateway egress that should be VPC-peered, and storage classes that should be Intelligent-Tiering. Identifying and removing this waste typically funds an OARC DevOps retainer in the first month, and continues to compound after.
            </p>
            <p className="text-foreground leading-relaxed">
              We publish a quarterly cost report showing committed savings versus actual spend, plus a forward-looking forecast based on your product roadmap. No vendor opacity, no surprise bills — and no finger-pointing when AWS sends an unexpected charge.
            </p>
          </section>
          <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Incident Response Without a 2am Founder Page</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Production breaks. The question is not whether it will, but whether the team has a documented playbook for what happens next. Most early-stage Malta SaaS, iGaming, and fintech companies discover their incident process during the first real incident — usually around 2am on a Sunday, with a founder copy-pasting Stack Overflow into a terminal. Our retainers ship a written incident response plan in week four covering the top ten failure modes for the client's stack, with a named on-call engineer, an escalation path, and a customer-communication template for each one.
              </p>
              <p className="text-foreground leading-relaxed">
                We run a monthly tabletop exercise where the client's product team picks an incident from the runbook and walks through it with our on-call engineer. The exercise surfaces gaps before they cost real downtime and keeps the runbook current as the architecture evolves. Post-incident reviews are written, blameless, and shared with the client so the lessons compound across the engagement.
              </p>
            </section>
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Security Hardening and EU Data Residency</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Security work in our retainers covers IAM least-privilege baselines, secrets rotation through AWS Secrets Manager or HashiCorp Vault, automated dependency vulnerability scanning via Dependabot and Snyk, container-image scanning, and quarterly penetration test coordination with a Malta-based security partner. Findings are tracked in the same Linear board as feature work so security debt cannot be invisibly deferred forever.
              </p>
              <p className="text-foreground leading-relaxed">
                All client infrastructure is provisioned in EU regions for GDPR compliance, with documented data flow diagrams, sub-processor lists, and a written data processing agreement template the client can hand to enterprise customers. We also wire encrypted backup of databases and object storage to a separate region so a single-region outage cannot wipe the business — a discipline that has saved at least two of our Malta clients from existential incidents at AWS provider level.
              </p>
            </section>
            <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Documentation That Outlives the Engagement</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Engineering knowledge is the most expensive asset a Malta SaaS or fintech team accumulates, and the easiest one to lose when a contractor rotates out or a key engineer takes a role at a larger Sliema operator. Our documentation discipline exists specifically to break that pattern. Every architectural decision is captured in an ADR file inside the client&apos;s repository, every runbook is version-controlled next to the infrastructure-as-code that it operates, and every quarterly review is a written artefact rather than a conversation that evaporates the same week.
            </p>
            <p className="text-foreground leading-relaxed">
              Every retainer ships with a living architecture document, a runbook for the top ten failure modes, a written escalation tree, an inventory of every cloud resource with its owner and purpose, and a quarterly cost report. Documentation is updated inside the client's own GitHub repository alongside the infrastructure-as-code so it cannot drift away from the running system. If the client decides to bring DevOps in-house at any point, a new platform engineer can read the documentation and operate the stack within their first week — no tribal knowledge held hostage in our heads, no opaque dashboards, no exit toll. The same documentation also accelerates security reviews and SOC2 readiness because auditors find a coherent paper trail rather than a folder full of screenshots.
            </p>
            </section>
            <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Malta Teams Pick OARC Over a Generic Cloud Consultancy</h2>
            <p className="text-foreground leading-relaxed">
              We are a Malta-based team operating from Birkirkara, with engineers who have shipped production infrastructure for Malta-licensed iGaming operators, MFSA-regulated fintech, and EU-residency-bound SaaS. That context matters. Generic cloud consultancies parachute in with a US-trained playbook and miss the things that make Malta operations specifically hard — the EU-to-CDN egress economics, the MGA's data-residency expectations, the compressed talent market that makes hiring a backup engineer next to impossible, and the small-team realities where one engineer wears five hats. Our retainers are sized for those constraints rather than enterprise teams of fifty, and the on-call rota and incident response model is designed to give a two-person product team the operational maturity of a series-B startup without the corresponding headcount.
            </p>
            </section>
            <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Pricing</h2>
            <p className="text-muted-foreground mb-6">Three transparent retainers. No setup fees, no annual lock-in.</p>
            <div className="grid md:grid-cols-3 gap-4">
              {SCHEMA.offers.map((offer) => (
                <div key={offer.name} className="rounded-xl border p-6 bg-card flex flex-col">
                  <h3 className="font-bold text-lg mb-1">{offer.name}</h3>
                  <p className="text-3xl font-bold text-orange-600 mb-1">€{offer.priceFrom.toLocaleString()}</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">per {offer.unitText?.toLowerCase() ?? "month"}</p>
                  <p className="text-sm text-muted-foreground flex-1">{offer.description}</p>
                </div>
              ))}
            </div>
          </section>
          
          <MaltaContextBlock slug="devops-services" />
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {SCHEMA.faqs.map((faq, i) => (
                <div key={i} className="p-5 rounded-xl bg-card border">
                  <h3 className="font-bold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground faq-answer">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Visit OARC Digital</h2>
            <TrustBlock variant="visit" />
          </section>
          <RelatedServices slug="/services/devops-services" />
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Want a Free Cloud Audit?</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">We will review your AWS, GCP, or Vercel account and send you a written savings + reliability plan within 10 working days.</p>
            <Link href="/contact"><Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">Request the audit <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
