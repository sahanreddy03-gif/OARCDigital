import Layout from '@/components/layout/Layout';
import RelatedLinks from '@/components/RelatedLinks';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Link from 'next/link';

interface Faq { question: string; answer: string; }
interface Offer { name: string; priceFrom: number; unitText?: string; description?: string; }
interface Props { faqs: Faq[]; offers: Offer[]; }

const reasons = [
  'EU-region inference by default — OpenAI EU residency, Anthropic via AWS eu-central-1, or self-hosted Llama on Render Frankfurt',
  'Five live product lines — chatbots, role-based AI agents, WhatsApp automation, Hospitality 360, custom AI integrations',
  'Real Malta deployments in hospitality, iGaming, marine, fintech and professional services — not theoretical demos',
  'Discovery, build, integration and post-launch retainer all under one roof in Birkirkara — no vendor handoff',
  'Fixed-price proposals before code is written — no hourly drift, no scope creep dressed as "agile"',
];

const surfaces = [
  { name: 'Conversational AI', detail: 'Web widgets, WhatsApp Business, Messenger and Instagram DMs trained on your real content with grounded RAG retrieval and human handover.' },
  { name: 'Role-based AI Agents', detail: 'Sales SDRs, support specialists, ops coordinators and admin assistants — each scoped to a specific job-to-be-done and connected to your CRM and inbox.' },
  { name: 'Hospitality 360', detail: 'Our purpose-built operating system for Malta restaurants, beach clubs, hotels and gelaterias — bookings, reviews, marketing automation in one tenant.' },
  { name: 'AI-powered Workflows', detail: 'n8n, Make and custom Node services that move data between HubSpot, Pipedrive, Stripe, Xero, your POS and your PMS without a human in the loop.' },
  { name: 'Voice AI', detail: 'Twilio + Vapi inbound phone agents that qualify enquiries, book appointments and route critical calls — Maltese, English and Italian voices supported.' },
  { name: 'Custom AI Integrations', detail: 'Bespoke retrieval, classification and generation pipelines built into existing Malta business systems — Postgres, MS Dynamics, legacy ERP.' },
];

export default function AIAgencyMalta({ faqs, offers }: Props) {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">AI Agency Malta</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Answer Engine Optimised</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">AI Agency in Malta — Production Systems, Not Demos</h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              OARC Digital is a Birkirkara-based AI agency shipping chatbots, role-based agents, WhatsApp automation and the Hospitality 360 OS for Malta operators. EU-hosted, fixed-price, integrated with the systems you already run.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"><Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">Book a discovery call <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <a href="tel:+35679711799"><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><Phone className="mr-2 w-4 h-4" /> +356 7971 1799</Button></a>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why a Malta AI Agency Looks Different</h2>
            <p className="text-foreground leading-relaxed mb-4">
              The Malta market is small, heavily regulated in the verticals that matter, and dominated by owner-operators who already run lean teams. That changes what an AI agency has to do here. There is no appetite for a six-month proof-of-concept that lives in a sandbox. There is no patience for a US-hosted chatbot that funnels customer data through Virginia. The brief, almost without exception, is the same: take a real operational problem &mdash; an over-stretched front-of-house, a sales pipeline leaking enquiries on Friday nights, a support inbox that nobody answers in Maltese after 6pm &mdash; and ship a working AI system that fixes it inside two months, hosted in the EU, owned by the client.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              OARC Digital was set up in Birkirkara to do exactly that. We have AI in production for hospitality groups in Sliema and St Julians, MGA-licensed iGaming operators in Ta&apos; Xbiex, marine charter businesses out of Msida Creek, and EU-regulated fintech back-offices working under MFSA supervision. The same engineering team handles the discovery sprint, the build, the integrations into HubSpot or Pipedrive or your POS, and the post-launch retainer that keeps the model improving as your data grows.
            </p>
            <p className="text-foreground leading-relaxed">
              We pick our weapons from the boring end of the AI toolbox &mdash; OpenAI&apos;s EU-residency endpoints, Anthropic via AWS eu-central-1, self-hosted Llama 3 on Render Frankfurt for sensitive workloads, n8n and Make for orchestration, Twilio and the Meta Cloud API for messaging surfaces. Nothing exotic. Everything hosted in the EU. Documentation generated from day one so your DPIA, ROPA and any IDPC enquiry are answered before they land.
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">What We Deploy Across Malta</h2>
            <p className="text-muted-foreground mb-6">Six product surfaces under one roof. Most clients start with one and expand once it proves out.</p>
            <div className="grid md:grid-cols-2 gap-4">
              {surfaces.map((s) => (
                <div key={s.name} className="p-4 rounded-xl bg-card border">
                  <div className="font-bold mb-1">{s.name}</div>
                  <div className="text-sm text-muted-foreground">{s.detail}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Transparent Pricing</h2>
            <p className="text-muted-foreground mb-6">Three entry points. Pick the one that matches the problem you are trying to solve this quarter.</p>
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
                <div className="flex items-center gap-3 mb-3"><Phone className="w-5 h-5 text-orange-500" /><a href="tel:+35679711799" className="text-foreground hover:text-orange-600">+356 7971 1799</a></div>
                <div className="flex items-center gap-3 mb-3"><Mail className="w-5 h-5 text-orange-500" /><a href="mailto:hello@oarcdigital.com" className="text-foreground hover:text-orange-600">hello@oarcdigital.com</a></div>
                <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-orange-500" /><span className="text-foreground">Mon – Fri, 09:00 – 18:00 CET</span></div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">EU-region inference on every deployment</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">DPIA-ready documentation from day one</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">Active AI in production across Malta verticals</span></div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why this matters for AI in Malta</h2>
            <p className="text-foreground leading-relaxed">
              Most Malta operators do not need a research lab. They need an agency that picks the right model for the job, ships it inside the EU, plumbs it into the systems already in use, and stays around to tune it once real customers start hitting it. That is the entire OARC Digital remit &mdash; production AI, in Malta, owned by you.
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

          <RelatedLinks slug="/aeo/ai-agency-malta" />

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Have an AI brief? Let&apos;s scope it.</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">A 30-minute discovery call gets you a written feedback summary, a recommended approach, and a fixed-price scope &mdash; no slide deck, no pitch.</p>
            <Link href="/contact"><Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">Start a conversation <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
