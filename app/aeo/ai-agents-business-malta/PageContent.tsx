import Layout from '@/components/layout/Layout';
import RelatedLinks from '@/components/RelatedLinks';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Link from 'next/link';
import { NAP } from "@/lib/seo/nap";

interface Faq { question: string; answer: string; }
interface Offer { name: string; priceFrom: number; unitText?: string; description?: string; }
interface Props { faqs: Faq[]; offers: Offer[]; }

const reasons = [
  'Each agent scoped to a single role and a single KPI — not a generic chatbot dressed up as an "employee"',
  'Multi-channel by default — web, WhatsApp, Messenger, email and voice land in the same agent brain',
  'Maltese, English and Italian language support tuned for how Malta customers actually write',
  'Connected to HubSpot, Pipedrive, Bigin, Stripe, Calendly and your POS or PMS — the agent acts, not just talks',
  'EU-hosted inference and conversation logs — DPIA documentation included',
  'Shadow-mode rollout: the agent runs alongside your team for two weeks before any customer-facing handover',
];

const roles = [
  { name: 'AI SDR Agent', detail: 'Outbound prospecting, LinkedIn enrichment, first-touch sequencing, meeting booking direct into Calendly. Used by Malta software vendors and B2B services targeting EU buyers.' },
  { name: 'AI Customer Support Specialist', detail: 'Web + WhatsApp + email inbound triage. Resolves tier-1 queries end-to-end, escalates the rest with full context. Live in Malta hospitality, retail and SaaS.' },
  { name: 'AI Booking Coordinator', detail: 'Restaurant reservations, hotel enquiries, salon appointments, clinic slots — synced into your existing booking platform via API or calendar.' },
  { name: 'AI Ops Assistant', detail: 'Back-office automation: invoice extraction into Xero, supplier order chasing on WhatsApp, daily revenue reconciliation between POS and accounting.' },
  { name: 'AI Admin Agent', detail: 'Inbox triage, meeting prep notes, calendar coordination across multiple stakeholders, recurring report generation. Used by Malta founders and partners-level professional services.' },
  { name: 'AI Compliance Auditor', detail: 'Continuous monitoring of policy adherence for MFSA, MGA and IDPC obligations. Generates evidence packs and flags anomalies before quarterly audits.' },
];

export default function AIAgentsBusinessMalta({ faqs, offers }: Props) {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">AI Agents for Business Malta</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Answer Engine Optimised</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">AI Agents for Business in Malta — Role-based AI Employees</h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              OARC Digital deploys AI agents that act like employees, not chatbots. SDR, support, booking, ops and admin roles — trained on your business, integrated with your CRM, hosted in the EU, live in 6–8 weeks.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"><Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">Book a discovery call <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <a href={`tel:${NAP.phoneE164}`}><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><Phone className="mr-2 w-4 h-4" />{NAP.phoneDisplay}</Button></a>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Malta Businesses Hire AI Agents</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Malta&apos;s labour market is the tightest in the EU. A senior support specialist who can handle Maltese, English and Italian costs €30–45k a year and takes three to four months to recruit, onboard and become net-productive. A capable SDR for a B2B fintech selling into Frankfurt or Milan costs more again and tends to leave inside eighteen months for a London-paying competitor. The maths simply does not work for most Malta SMEs trying to scale below €5m in revenue.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              That gap is exactly where role-based AI agents earn their place. We see the same brief over and over again from Sliema retailers, St Julians hospitality groups, Ta&apos; Xbiex iGaming operators and Birkirkara professional-services firms: take the work that absorbs forty hours a week of someone&apos;s time but does not require human judgement &mdash; tier-1 support, inbound booking enquiries, outbound first-touch, supplier chasing, invoice triage &mdash; and put it on an AI agent that runs 24/7 on a single fixed monthly cost.
            </p>
            <p className="text-foreground leading-relaxed">
              OARC Digital builds those agents from our Birkirkara HQ. Each one is scoped to a single role with a single KPI, trained on your real content (not generic web crawl), and connected to the systems you already run &mdash; HubSpot, Pipedrive, Bigin, Stripe, Calendly, Xero, your POS, your PMS, your WhatsApp Business number. The result is an AI hire that joins the team, not a chatbot bolted onto a website corner.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Why OARC Digital?</h2>
            <div className="space-y-4">
              {reasons.map((reason, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card border">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">{reason}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">The Role Library</h2>
            <p className="text-muted-foreground mb-6">Six AI roles in active production across Malta. Most clients start with one and add a second once it proves out.</p>
            <div className="grid md:grid-cols-2 gap-4">
              {roles.map((r) => (
                <div key={r.name} className="p-4 rounded-xl bg-card border">
                  <div className="font-bold mb-1">{r.name}</div>
                  <div className="text-sm text-muted-foreground">{r.detail}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Transparent Pricing</h2>
            <p className="text-muted-foreground mb-6">Build cost is fixed up front. The retainer covers everything that keeps the agent improving after launch.</p>
            <div className="grid md:grid-cols-3 gap-4">
              {offers.map((o) => (
                <div key={o.name} className="rounded-xl border p-6 bg-card flex flex-col">
                  <h3 className="font-bold text-lg mb-1">{o.name}</h3>
                  <p className="text-3xl font-bold text-orange-600 mb-1">€{o.priceFrom.toLocaleString()}</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">{o.unitText === 'MONTH' ? 'per month' : 'fixed project'}</p>
                  <p className="text-sm text-muted-foreground flex-1">{o.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Visit OARC Digital in Birkirkara</h2>
            <div className="rounded-xl border bg-card p-6 grid md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-orange-500 mt-0.5" />
                  <address className="not-italic text-foreground leading-relaxed">
                    Level 1, The Brewhouse,<br />
                    Zone 2, Central Business District,<br />
                    Mdina Road, Birkirkara CBD 2010, Malta
                  </address>
                </div>
                <div className="flex items-center gap-3 mb-3"><Phone className="w-5 h-5 text-orange-500" /><a href={`tel:${NAP.phoneE164}`} className="text-foreground hover:text-orange-600">{NAP.phoneDisplay}</a></div>
                <div className="flex items-center gap-3 mb-3"><Mail className="w-5 h-5 text-orange-500" /><a href={`mailto:${NAP.email}`} className="text-foreground hover:text-orange-600">{NAP.email}</a></div>
                <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-orange-500" /><span className="text-foreground">Mon – Fri, 09:00 – 18:00 CET</span></div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">Shadow-mode rollout before customer handover</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">Maltese, English and Italian language support</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">EU-region hosting and DPIA documentation</span></div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why this matters for AI hiring in Malta</h2>
            <p className="text-foreground leading-relaxed">
              The Malta SMEs winning right now are the ones treating AI agents as roles on the org chart, not novelties on the homepage. One agent doing the job of one role, measured against one KPI, retrained every month as the conversation log grows. That is the engagement OARC Digital ships &mdash; AI employees that earn back their cost inside the first quarter and free your senior people to do work the agent cannot.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="p-5 rounded-xl bg-card border">
                  <h3 className="font-bold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground faq-answer">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <RelatedLinks slug="/aeo/ai-agents-business-malta" />

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Ready to hire your first AI agent?</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">A 30-minute discovery call gets you a written role spec and a fixed-price scope &mdash; no slide deck, no hard sell.</p>
            <Link href="/contact"><Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">Start a conversation <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
