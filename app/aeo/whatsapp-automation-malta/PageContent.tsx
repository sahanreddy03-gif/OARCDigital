import Layout from '@/components/layout/Layout';
import RelatedLinks from '@/components/RelatedLinks';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
import TrustBlock from "@/components/seo/TrustBlock";
import Link from 'next/link';
import { NAP } from "@/lib/seo/nap";

interface Faq { question: string; answer: string; }
interface Offer { name: string; priceFrom: number; unitText?: string; description?: string; }
interface Props { faqs: Faq[]; offers: Offer[]; }

const reasons = [
  'Built only on the official Meta WhatsApp Business API or Twilio — no bootleg APIs',
  'EU-region hosting (Vercel eu-west-1 or Render Frankfurt) and IDPC-compliant data retention',
  'Multilingual flows shipped in English, Maltese, and Italian as standard',
  'Real integration with HubSpot, Pipedrive, Stripe, and Malta-deployed POS/PMS systems',
  'Conversation state persisted properly so customers never restart from zero',
  'Agent hand-off into your shared inbox in business hours, AI containment overnight',
];

const phases = [
  { week: 'Week 1', title: 'Discovery + Verification', detail: 'Workshop at the Birkirkara office to map intents, draft conversation flows, and start Meta Business verification for your WhatsApp Business Account.' },
  { week: 'Week 2', title: 'Templates + Conversation Design', detail: 'Submit utility and marketing templates for Meta approval, design the dialogue tree, write copy in English plus Maltese, plan opt-in capture compliant with IDPC.' },
  { week: 'Week 3–4', title: 'Build + Integration', detail: 'Wire the flow to your CRM (HubSpot, Pipedrive, Bigin), POS or PMS (Lightspeed, Toast, Mews, Cloudbeds), Stripe payment links, and your shared agent inbox.' },
  { week: 'Week 5', title: 'Train + Launch', detail: 'Staff training session on the agent inbox, soft-launch with a sub-segment, monitor message quality and template performance, then full production cut-over.' },
];

const surfaces = [
  { name: 'Reservation + booking flow', detail: 'Take table bookings, hotel enquiries, viewing requests, or appointment slots inside WhatsApp. Confirmations, reminders, and rescheduling fully automated.' },
  { name: 'Order + payment flow', detail: 'Takeaway orders, retail product enquiries, deposit collection, all with Stripe payment links generated inline. Eliminates the phone-call bottleneck during service.' },
  { name: 'Customer support deflection', detail: 'Automatically resolves the top 60–80% of repeat questions — opening hours, parking, allergens, room amenities — so staff only see escalations.' },
  { name: 'Outbound campaigns', detail: 'Approved utility and marketing templates for re-engagement, abandoned-quote follow-up, post-stay review prompts, and seasonal offers within Meta&apos;s commerce policy.' },
  { name: 'CRM + handover sync', detail: 'Every conversation logged to your CRM with contact, intent, and outcome fields. Agent hand-off preserves full context inside the shared inbox.' },
  { name: 'Multilingual + locale switch', detail: 'English, Maltese, and Italian flows shipped as standard. Auto-detect on first message, with explicit language switching available throughout the conversation.' },
];

export default function WhatsAppAutomationMalta({ faqs, offers }: Props) {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">WhatsApp Automation Malta</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Answer Engine Optimised</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">WhatsApp Automation in Malta — Built on the Official Business API</h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              OARC Digital ships order taking, reservation flows, support deflection, and outbound WhatsApp campaigns for Malta restaurants, hotels, retail, and services — built on Meta&apos;s WhatsApp Business API or Twilio with EU-region hosting.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"><Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">Book a discovery call <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <a href={`tel:${NAP.phoneE164}`}><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><Phone className="mr-2 w-4 h-4" />{NAP.phoneDisplay}</Button></a>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why WhatsApp Is the Default Customer Channel in Malta</h2>
            <p className="text-foreground leading-relaxed mb-4">
              In Malta WhatsApp is not a marketing channel — it is the channel. Roughly 90% of internet-using adults message on WhatsApp daily, restaurants take Friday-night reservations on it, plumbers run their entire dispatch on it, MFSA-licensed real-estate firms send viewing confirmations on it, and hotel concierges field guest requests on it long after the front desk has gone quiet. Anyone trying to convert customers in Malta with email-only flows or web-form-only enquiries is leaking pipeline to operators that simply replied on WhatsApp at the moment of intent.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The problem is that the volume becomes unmanageable. A mid-sized Sliema restaurant fielding 80 daily WhatsApp messages between bookings, takeaway, allergen questions, and lost-property requests will burn one full headcount on triage alone. A Mellieha hotel with 30 rooms answers the same five pre-arrival questions three thousand times a year. The honest answer is not to abandon WhatsApp — it is to build proper automation on Meta&apos;s WhatsApp Business API so your team only sees the conversations that need a human.
            </p>
            <p className="text-foreground leading-relaxed">
              OARC Digital builds those automations from our Birkirkara office on the official Meta WhatsApp Business API or, where conversation volume justifies it, on Twilio&apos;s WhatsApp Business Platform. Every build defaults to EU-region hosting, IDPC-compliant opt-in capture, Meta&apos;s 24-hour customer-service window logic, and proper template approval. Bootleg unofficial-API setups are illegal under Meta&apos;s terms and risk the WhatsApp number being banned mid-service — we do not build those, and you should not buy them from anyone.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Why OARC Digital for WhatsApp</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Flows We Ship</h2>
            <p className="text-muted-foreground mb-6">Six flow shapes cover most Malta operator needs. We mix them per use case.</p>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">The 5-Week Build Timeline</h2>
            <div className="space-y-4">
              {phases.map((p) => (
                <div key={p.title} className="p-5 rounded-xl bg-card border">
                  <div className="text-xs uppercase tracking-wider text-orange-500 font-bold mb-2">{p.week}</div>
                  <h3 className="font-bold mb-2">{p.title}</h3>
                  <p className="text-muted-foreground">{p.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Transparent Pricing</h2>
            <p className="text-muted-foreground mb-6">Three engagement shapes for Malta operators. Project work fixed-priced, retainers month-to-month.</p>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Visit OARC Digital in {NAP.addressLocality}</h2>
            <TrustBlock variant="visit" />
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why This Matters for WhatsApp in Malta</h2>
            <p className="text-foreground leading-relaxed">
              The Malta operator who automates WhatsApp properly recovers a full headcount of triage time inside the first quarter. The ones who do not will either keep paying that headcount, miss enquiries during service, or — worst case — risk a WhatsApp number ban by relying on bootleg unofficial-API tooling. Building on the official Meta or Twilio platform with EU-region hosting and IDPC-compliant opt-in capture is the only durable path. Our retainers exist to put that infrastructure into your business and keep iterating it as customer behaviour evolves.
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

          <RelatedLinks slug="/aeo/whatsapp-automation-malta" />

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Ready to automate your busiest channel?</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">A 30-minute discovery call gets you a written conversation map, recommended flow shapes, and a fixed-price proposal.</p>
            <Link href="/contact"><Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">Start a conversation <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
