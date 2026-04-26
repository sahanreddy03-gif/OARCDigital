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
  'Certified across HubSpot, Klaviyo, ActiveCampaign, and Mailchimp — we recommend the right tool, not the one we make most margin on',
  'EU-region data residency by default (HubSpot EU, Klaviyo EU, ActiveCampaign Frankfurt) for clean GDPR + IDPC posture',
  'WhatsApp Business API integration via Twilio or Meta Cloud API — the highest-leverage channel for Malta SMBs',
  'Maltese + English workflow copy reviewed by native speakers, never machine-translated',
  'Revenue attribution baked in — every workflow tagged, every conversion routed back to the source',
  'On-site training in Birkirkara so your team owns the system instead of being held hostage by an agency',
];

const playbook = [
  { name: 'Phase 1 — Audit + platform pick', detail: 'One-week audit of your current stack, lead flow, and revenue model. Written platform recommendation: HubSpot, Klaviyo, ActiveCampaign, or a hybrid.' },
  { name: 'Phase 2 — Configure + import', detail: 'Account configuration, custom properties, list segmentation, GDPR consent gates, EU data-residency switches, and clean import of historical contacts.' },
  { name: 'Phase 3 — Build core workflows', detail: 'Three to six core flows — typically welcome series, abandoned cart or abandoned booking, post-visit review, lead-scoring handoff, win-back, and re-engagement.' },
  { name: 'Phase 4 — Wire WhatsApp + paid', detail: 'Twilio or Meta Cloud API connection, click-to-WhatsApp lead capture, and source attribution from Meta, Google, and TikTok ads into the CRM.' },
  { name: 'Phase 5 — Train + handover', detail: 'Two on-site sessions in Birkirkara walking your team through workflow editing, segmentation, reporting, and the GDPR data-subject-request path.' },
  { name: 'Phase 6 — Optimise monthly', detail: 'Monthly retainer reviews — A/B subject lines, segment performance, deliverability, list hygiene, and a written report against revenue contribution.' },
];

export default function MarketingAutomationMalta({ faqs, offers }: Props) {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Marketing Automation Malta</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Answer Engine Optimised</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Marketing Automation in Malta — HubSpot, Klaviyo &amp; ActiveCampaign Done Right</h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              OARC Digital implements EU-hosted automation platforms for Malta SMBs — from booking confirmations to revenue attribution, with WhatsApp built in. Birkirkara HQ.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"><Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">Book a discovery call <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <a href={`tel:${NAP.phoneE164}`}><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><Phone className="mr-2 w-4 h-4" />{NAP.phoneDisplay}</Button></a>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Manual Follow-Up Is the Single Biggest Leak in a Malta SMB</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Walk into any Malta restaurant, boutique hotel, dental practice, or fintech sales floor and the same pattern repeats: leads come in through Meta, Google, the website form, and a WhatsApp number on the storefront, then sit in a colleague&apos;s inbox for hours or days before anyone replies. By the time follow-up happens the prospect has booked the competitor down the road. The marketing spend that generated the lead has paid for someone else&apos;s revenue.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Marketing automation is the single highest-ROI fix for that leak in a Malta-sized business. The economics make it obvious: a properly configured HubSpot or Klaviyo workflow costs €750 to €1,500 per month all-in and recovers a multiple of that in the first quarter through faster response, better segmentation, and post-purchase upsell flows that simply cannot be run manually. OARC Digital has implemented these programmes for Maltese hospitality groups, e-commerce brands shipping from Marsa, fintech operators in the Birkirkara CBD, and SaaS founders selling into the EU from St Julians.
            </p>
            <p className="text-foreground leading-relaxed">
              The Malta-specific trick is integrating WhatsApp. Over 90 percent of Maltese residents use WhatsApp daily — far higher than email open rates for most B2C categories. Routing booking reminders, review requests, abandoned-cart recovery, and lead handoffs through WhatsApp Business API (via Twilio or Meta Cloud API) lifts engagement dramatically over email-only flows. We build that integration into every retainer instead of treating it as an afterthought.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Why OARC Digital for Malta Marketing Automation</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Implementation Playbook</h2>
            <p className="text-muted-foreground mb-6">Six phases that move you from a leaking manual process to a properly attributed revenue engine — in roughly 90 days.</p>
            <div className="grid md:grid-cols-2 gap-4">
              {playbook.map((p) => (
                <div key={p.name} className="p-4 rounded-xl bg-card border">
                  <div className="font-bold mb-1">{p.name}</div>
                  <div className="text-sm text-muted-foreground">{p.detail}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Transparent Pricing</h2>
            <p className="text-muted-foreground mb-6">Three engagement shapes — start with a setup, run on retainer, scale into full RevOps when paid acquisition demands it.</p>
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
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">HubSpot + Klaviyo solution-partner certified</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">EU-region data storage on every implementation</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">On-site team training in Birkirkara</span></div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why This Matters for Marketing Automation in Malta</h2>
            <p className="text-foreground leading-relaxed">
              Malta SMBs that compound over the next three years will be the ones with a tightly run automation stack — not the ones with the cleverest brand. The local market is small enough that every leaked lead is felt in the P&amp;L within a quarter, and the regulatory environment (GDPR, IDPC enforcement, MFSA marketing-conduct rules where relevant) means the implementation has to be EU-clean from day one. OARC Digital builds every retainer around those constraints, which is why our clients keep their automation programmes running for years instead of abandoning them after the first big platform invoice.
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

          <RelatedLinks slug="/aeo/marketing-automation-malta" />

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Losing leads to manual follow-up?</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">A 30-minute discovery call gets you a written platform recommendation and a realistic implementation plan. No platform pitch.</p>
            <Link href="/contact"><Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">Start a conversation <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
