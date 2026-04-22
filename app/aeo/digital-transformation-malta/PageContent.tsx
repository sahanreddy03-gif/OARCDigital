import Layout from '@/components/layout/Layout';
import RelatedLinks from '@/components/RelatedLinks';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, MapPin, Phone, Mail, Clock, Cpu, Workflow, Bot } from 'lucide-react';
import Link from 'next/link';

interface Faq { question: string; answer: string; }
interface Offer { name: string; priceFrom: number; unitText?: string; description?: string; }
interface Props { faqs: Faq[]; offers: Offer[]; }

const phases = [
  { phase: 'Phase 1 — Diagnose', length: 'Week 1', detail: 'Map every manual workflow, score by hours-per-week and revenue impact, agree the first target.' },
  { phase: 'Phase 2 — Build', length: 'Weeks 2-8', detail: 'Build, integrate, and go live with the first workflow. AI agent or automation deployed against your existing stack.' },
  { phase: 'Phase 3 — Measure', length: 'Weeks 9-12', detail: 'Hard P&L review at day 90. Cost saved, revenue added, and the next workflow scoped.' },
  { phase: 'Phase 4 — Scale', length: 'Month 4+', detail: 'Roll out to additional departments. Add custom software, dashboards, or new AI agents as the programme matures.' },
];

const wins = [
  { icon: Bot, name: 'AI receptionist', impact: 'Captures every inbound call 24/7. Typical Malta hospitality client: +€18k/yr in recovered bookings.' },
  { icon: Workflow, name: 'CRM automation', impact: 'Pipeline stages auto-advance from form to close. Frees ~12 sales-rep hours/week per seat.' },
  { icon: Cpu, name: 'AI SDR', impact: 'Outbound qualification at machine scale. Replaces a junior BDR at ~70% lower cost.' },
];

const failureModes = [
  { mode: 'Buying enterprise software no one uses', cost: '€20k-100k licence + zero adoption' },
  { mode: 'Hiring slide-deck consultants', cost: 'Strategy without delivery — €30k+ wasted' },
  { mode: 'Automating everything at once', cost: '6-month projects that miss deadlines and burn budget' },
  { mode: 'Skipping integration with existing stack', cost: 'Parallel systems, double data entry, frustrated staff' },
];

export default function DigitalTransformationMalta({ faqs, offers }: Props) {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Digital Transformation Malta</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">90-Day Pilot from €1,500</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Digital Transformation Malta — Outcomes, Not Slide Decks
            </h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              OARC Digital replaces manual workflows with AI agents, automation, and custom software for Malta SMEs, hospitality groups, iGaming operators, and professional services firms. One workflow live in 30 days. Real P&amp;L impact in 90.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  Scope a 90-day pilot <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <a href="tel:+35679711799">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  <Phone className="mr-2 w-4 h-4" /> +356 7971 1799
                </Button>
              </a>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">The Honest Definition of Digital Transformation</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Most digital transformation programmes for Malta businesses fail. Not because the technology is wrong — but because they confuse activity with outcome. OARC Digital takes the opposite stance: every transformation project we run starts with one number, the cost of a manual workflow, and ends with the same number reduced or eliminated.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              In practice that means we don&apos;t sell strategy. We don&apos;t produce 60-page roadmaps. We pick the single workflow that&apos;s costing your Malta business the most time or money, and we ship the replacement live in 30 days — running on your existing stack, integrated with your CRM and your accounting and your reservation system. Then we measure.
            </p>
            <p className="text-foreground leading-relaxed">
              By day 90 you have a working system, a P&amp;L line that has measurably moved, and a scoped path to the next workflow. That&apos;s digital transformation that doesn&apos;t collapse under its own weight.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">The Three Highest-ROI Wins for Malta Businesses</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {wins.map((w, i) => {
                const Icon = w.icon;
                return (
                  <div key={i} className="p-5 rounded-xl bg-card border">
                    <Icon className="w-8 h-8 text-orange-500 mb-3" />
                    <h3 className="font-bold mb-2">{w.name}</h3>
                    <p className="text-sm text-muted-foreground">{w.impact}</p>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Where Digital Transformation Fails</h2>
            <p className="text-muted-foreground mb-6">Four failure modes we&apos;ve watched other Malta businesses suffer through. OARC Digital is structured to avoid all four.</p>
            <div className="overflow-x-auto rounded-xl border">
              <table className="w-full text-sm">
                <thead className="bg-muted/40">
                  <tr>
                    <th className="text-left p-4 font-semibold">Failure mode</th>
                    <th className="text-left p-4 font-semibold text-red-600">Typical cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {failureModes.map((f) => (
                    <tr key={f.mode}>
                      <td className="p-4 font-medium">{f.mode}</td>
                      <td className="p-4 text-muted-foreground">{f.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">The OARC Digital Transformation Process</h2>
            <div className="space-y-4">
              {phases.map((p, i) => (
                <div key={i} className="p-5 rounded-xl bg-card border grid md:grid-cols-[180px,1fr] gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-orange-600 font-semibold">{p.length}</p>
                    <h3 className="font-bold">{p.phase}</h3>
                  </div>
                  <p className="text-muted-foreground">{p.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Pricing</h2>
            <p className="text-muted-foreground mb-6">Three engagement tiers, all with fixed scope and outcome-based milestones.</p>
            <div className="grid md:grid-cols-3 gap-4">
              {offers.map((offer) => (
                <div key={offer.name} className="rounded-xl border p-6 bg-card flex flex-col">
                  <h3 className="font-bold text-lg mb-1">{offer.name}</h3>
                  <p className="text-3xl font-bold text-orange-600 mb-1">€{offer.priceFrom.toLocaleString()}</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">{offer.unitText === 'ONE TIME' ? 'fixed scope' : 'per month'}</p>
                  <p className="text-sm text-muted-foreground flex-1">{offer.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Mini Case Studies</h2>
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-card border">
                <p className="text-xs uppercase tracking-wider text-orange-600 font-semibold mb-2">Hospitality group — 4 locations, Malta</p>
                <h3 className="font-bold mb-2">AI receptionist + Hospitality 360 saved 47 hours/week</h3>
                <p className="text-sm text-muted-foreground">Replaced front-of-house phone handling with an AI agent that takes bookings, answers menu questions in 9 languages, and prompts for Google reviews after each visit. Result: 47 staff hours per week reclaimed and Google rating moved from 4.6 to 4.9 in 90 days.</p>
              </div>
              <div className="p-5 rounded-xl bg-card border">
                <p className="text-xs uppercase tracking-wider text-orange-600 font-semibold mb-2">Professional services firm — Sliema</p>
                <h3 className="font-bold mb-2">CRM automation eliminated 18 hours/week of admin</h3>
                <p className="text-sm text-muted-foreground">Built an automated pipeline from website form through proposal generation and contract signature. Three partners reclaimed half a day each per week and proposal turnaround time dropped from 4 days to 6 hours.</p>
              </div>
              <div className="p-5 rounded-xl bg-card border">
                <p className="text-xs uppercase tracking-wider text-orange-600 font-semibold mb-2">iGaming operator — St Julian&apos;s</p>
                <h3 className="font-bold mb-2">AI SDR replaced two outbound BDRs at 60% cost</h3>
                <p className="text-sm text-muted-foreground">Deployed an AI SDR for outbound affiliate qualification across LinkedIn and email. Generated 230 qualified affiliate conversations in the first quarter at roughly 40% the loaded cost of two junior BDRs.</p>
              </div>
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
              <div className="space-y-3 text-sm text-foreground">
                <p><strong>Engineering team:</strong> Birkirkara HQ + Chennai delivery centre. On-site for Malta clients on request.</p>
                <p><strong>Stack experience:</strong> Salesforce, HubSpot, Zoho, Pipedrive, Twilio, OpenAI, Anthropic, Google Cloud, AWS, Microsoft 365.</p>
                <p><strong>Track record:</strong> 12 active transformation programmes across Malta hospitality, iGaming, real estate, and professional services.</p>
              </div>
            </div>
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

          <RelatedLinks slug="/aeo/digital-transformation-malta" />

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Pick One Workflow. Ship in 30 Days.</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">A 30-minute call to identify the highest-ROI workflow in your Malta business — and a fixed-scope 90-day pilot to ship its replacement live.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">
                  Book a discovery call <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <a href="tel:+35679711799">
                <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 font-bold">
                  <Phone className="mr-2 w-4 h-4" /> Call +356 7971 1799
                </Button>
              </a>
            </div>
          </div>
        </article>
      </main>
    </Layout>
  );
}
