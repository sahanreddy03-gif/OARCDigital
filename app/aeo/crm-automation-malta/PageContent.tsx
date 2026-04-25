import Layout from '@/components/layout/Layout';
import RelatedLinks from '@/components/RelatedLinks';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Link from 'next/link';

interface Faq { question: string; answer: string; }
interface Offer { name: string; priceFrom: number; unitText?: string; description?: string; }
interface Props { faqs: Faq[]; offers: Offer[]; }

const reasons = [
  'Platform-agnostic — Pipedrive, HubSpot, and Zoho Bigin certified, so the recommendation matches your business not our partner status',
  'Migration handled cleanly — from spreadsheets, Salesforce, Insightly, Monday, Notion, or any export-capable source',
  'WhatsApp + cloud telephony built in — Twilio, Meta Cloud API, GoTo, 3CX, and Aircall integrated as standard',
  'EU-region data residency on every install (Frankfurt or equivalent) so your IDPC posture is clean from day one',
  'Pipeline design rooted in real Malta sales motions — hospitality bookings, fintech onboarding, B2B SaaS demos, professional-services proposals',
  'On-site training in Birkirkara so your sales team owns the system instead of being agency-dependent',
];

const playbook = [
  { name: 'Phase 1 — Audit + recommendation', detail: 'Half-day workshop in Birkirkara mapping your current sales process, lead sources, team size, and reporting needs. Written CRM recommendation by the end of week 1.' },
  { name: 'Phase 2 — Account configuration', detail: 'Pipeline stages, custom properties, lifecycle definitions, user roles, EU-region storage, GDPR consent fields, and lead-source attribution wired in.' },
  { name: 'Phase 3 — Migration + dedup', detail: 'Clean import from your existing source — spreadsheets, Salesforce, Insightly, Monday, Notion, or anything else exportable. Deduplication, mapping, and a written rollback plan.' },
  { name: 'Phase 4 — Automation + integrations', detail: 'WhatsApp Business API, GoTo or 3CX telephony, Microsoft 365 or Google Workspace email sync, Stripe for invoicing, and three core deal-stage automations.' },
  { name: 'Phase 5 — Reporting dashboards', detail: 'Pipeline value, conversion rate by stage, win-loss reasons, rep performance, source attribution, and the weekly board-pack export your CFO will actually open.' },
  { name: 'Phase 6 — Training + retainer', detail: 'Two on-site training sessions for the sales team, written SOP, then optional monthly retainer for iteration, integration health checks, and quarterly pipeline reviews.' },
];

export default function CRMAutomationMalta({ faqs, offers }: Props) {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">CRM Automation Malta</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Answer Engine Optimised</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">CRM Automation in Malta — Pipedrive, HubSpot &amp; Bigin Installs</h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              OARC Digital installs and operates EU-hosted CRMs for Malta SMBs — sales pipelines, lead routing, WhatsApp integration, and the dashboards your board actually opens.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"><Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">Book a discovery call <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <a href="tel:+35679711799"><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><Phone className="mr-2 w-4 h-4" /> +356 7971 1799</Button></a>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Most Malta SMBs Run Their Sales Pipeline in a Spreadsheet</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Walk into a typical Malta professional-services firm, fintech sales floor, hospitality group, or trades business and you will find the sales pipeline living inside an Excel sheet on someone&apos;s laptop, a WhatsApp group, an inbox folder, and three Post-it notes on a monitor. Lead source attribution is anecdotal. Win rates are guessed at the end of the quarter. The owner only finds out a deal has stalled when the prospect goes quiet for three weeks. Every Maltese SMB owner who runs sales this way knows the cost — they just have no time to fix it.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              OARC Digital installs and operates the right CRM for the size and shape of your sales motion. Pipedrive for B2B sales-led teams of 3 to 30 reps who need a clean Kanban pipeline and minimal feature noise. HubSpot for SMBs who need CRM plus marketing plus customer service in one place with proper reporting. Zoho Bigin for the smallest Malta operators (under 10 users) who want a real CRM under €15 per user per month. We are platform-agnostic — the recommendation depends on your sales process, not our partner margins.
            </p>
            <p className="text-foreground leading-relaxed">
              Once the platform is picked we configure it for the Malta sales context: pipeline stages that match how your team actually closes (a hospitality booking pipeline looks nothing like a fintech onboarding pipeline), lead-source attribution that captures Meta, Google, TikTok, WhatsApp, and walk-in enquiries, EU-region data storage for clean GDPR posture, and integration with the WhatsApp Business API because that is where most Maltese B2C and B2B conversations actually happen. The end result is a sales operation that runs on data instead of memory.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Why OARC Digital for Malta CRM Installs</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">CRM Install Playbook</h2>
            <p className="text-muted-foreground mb-6">Six phases from messy spreadsheet to a properly run sales operation — typically inside 6 to 8 weeks for a Malta SMB.</p>
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
            <p className="text-muted-foreground mb-6">Two fixed-price install shapes plus an optional monthly retainer. Platform subscriptions paid directly to the vendor — no markup.</p>
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
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">Pipedrive + HubSpot + Zoho certified team</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">EU-region data residency on every install</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">On-site sales-team training in Birkirkara</span></div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why This Matters for CRM in Malta</h2>
            <p className="text-foreground leading-relaxed">
              The Malta SMBs that scale past €1m in revenue without burning out are almost always the ones who installed a real CRM before they hit 10 employees. The ones that stall are the ones still running on spreadsheets and WhatsApp groups when the team grows past five people. The fix is not buying a license — it is configuring the platform around your actual sales motion, integrating WhatsApp because that is where Maltese conversations live, and training the sales team properly so the system survives the second month. OARC Digital ships exactly that engagement, in 6 to 8 weeks, from Birkirkara.
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

          <RelatedLinks slug="/aeo/crm-automation-malta" />

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Still running sales out of a spreadsheet?</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">A 30-minute discovery call gets you a written CRM recommendation and a fixed-price install timeline. No license pitch.</p>
            <Link href="/contact"><Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">Start a conversation <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
