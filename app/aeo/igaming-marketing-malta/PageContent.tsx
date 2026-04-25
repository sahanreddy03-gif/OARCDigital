import Layout from '@/components/layout/Layout';
import RelatedLinks from '@/components/RelatedLinks';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Link from 'next/link';

interface Faq { question: string; answer: string; }
interface Offer { name: string; priceFrom: number; unitText?: string; description?: string; }
interface Props { faqs: Faq[]; offers: Offer[]; }

const reasons = [
  'MGA Player Protection Directive built into every brief — responsible-gambling, age-gate, and 25% tools-coverage rule pre-applied',
  'Affiliate channel ops across Income Access, NetRefer, MyAffiliates, and direct deals — manager roles, reconciliation, fraud monitoring',
  'Cohort-LTV and FTD reporting from day one — no vanity-metric reporting on player acquisition retainers',
  'B2B + B2C dual capability — operators, suppliers, payment / KYC / compliance vendors, game studios all served',
  'SiGMA, iGaming Next, ICE conference visibility built into the B2B retainers — booth, content, lead capture, follow-up',
  'Five minutes from St Julians, Spinola Bay, and Portomaso — meetings happen in person',
];

const playbook = [
  { name: 'MGA-compliant paid acquisition', detail: 'Paid social and search where allowed, with creative engineered for the MGA Commercial Communications Committee guidance, age gating, and the per-jurisdiction rules of the operator&apos;s focus markets.' },
  { name: 'Affiliate channel ops', detail: 'Income Access, NetRefer, MyAffiliates, and direct deals — recruit, contract, distribute creatives, monitor brand-bidding, reconcile payouts, and enforce the responsible-gambling clauses.' },
  { name: 'Programmatic + push / pop networks', detail: 'Acquired.IO, Smartyads, PropellerAds, Adsterra — engineered for tier-2 / tier-3 jurisdictions where the operator has a licence and standard channels are restricted.' },
  { name: 'Creative production for FTD lift', detail: 'Weekly creative refresh tested at the cohort level, with the welcome offer, RG messaging, and call-to-action variants engineered around what actually moves first-time-deposit rate.' },
  { name: 'B2B LinkedIn + conference', detail: 'For suppliers and platform vendors — LinkedIn demand-gen into VP / C-suite at operators, plus SiGMA / iGaming Next / ICE booth strategy, content, and follow-up sequencing.' },
  { name: 'Trade-press + content', detail: 'Bylined content into iGaming Business, EGR, SBC News, and Gambling Insider plus owned-channel SEO into commercial-comparison and affiliate-comparison terms.' },
];

export default function IGamingMarketingMalta({ faqs, offers }: Props) {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">iGaming Marketing Malta</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Answer Engine Optimised</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">iGaming Marketing Malta — MGA-Compliant Acquisition + Affiliate Ops</h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              OARC Digital runs marketing for MGA-licensed operators, B2B iGaming suppliers, and affiliate networks. Compliance built in at the brief stage, reported in cohort LTV and FTD — not impressions.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"><Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">Book a discovery call <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <a href="tel:+35679711799"><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><Phone className="mr-2 w-4 h-4" /> +356 7971 1799</Button></a>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">iGaming Marketing in Malta is a Compliance-First Discipline</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Player acquisition for an MGA-licensed operator is not the same as DTC e-commerce or B2B SaaS. Every creative, every affiliate placement, every push / pop ad is filtered through the MGA Player Protection Directive, the Commercial Communications Committee guidance, and the per-jurisdiction rules of the markets the operator is licensed into. Get any one of those wrong and the licence is at risk — which is why most generic Malta agencies politely decline iGaming work and the ones that take it on tend to lean on a B2B-supplier roster they understand.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              OARC Digital was built five minutes from the St Julians and Spinola Bay iGaming cluster. That proximity is not a positioning gimmick — it is the reason we have spent the last several years working with operators, B2B suppliers, payments and KYC vendors, game studios, and affiliate networks across the cluster. The compliance layer is internalised, not bolted on. Responsible-gambling messaging, age gating (18+ / 19+ / 21+ depending on jurisdiction), the 25% creative coverage rule for tools-and-controls content, and the brand-bidding clauses in affiliate contracts are pre-baked into our briefs.
            </p>
            <p className="text-foreground leading-relaxed">
              On the channel side, we manage the affiliate stack across Income Access, NetRefer, MyAffiliates, and direct deals; the programmatic stack across Acquired.IO, Smartyads, PropellerAds and Adsterra; paid social and search where allowed by jurisdiction; SEO into commercial-comparison and affiliate-comparison terms; and ASO for branded apps. For B2B clients selling into operators, the work shifts to LinkedIn demand-gen, SiGMA and iGaming Next conference presence, and bylined content for iGaming Business, EGR, SBC News and Gambling Insider.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Why OARC Digital for Maltese iGaming</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">The iGaming Marketing Playbook</h2>
            <p className="text-muted-foreground mb-6">Six tracks. Weighted to operator versus B2B, jurisdiction mix, and product vertical (casino, sports, poker, lottery).</p>
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
            <p className="text-muted-foreground mb-6">Three retainer shapes. No annual lock-in.</p>
            <div className="grid md:grid-cols-3 gap-4">
              {offers.map((o) => (
                <div key={o.name} className="rounded-xl border p-6 bg-card flex flex-col">
                  <h3 className="font-bold text-lg mb-1">{o.name}</h3>
                  <p className="text-3xl font-bold text-orange-600 mb-1">€{o.priceFrom.toLocaleString()}</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">per month</p>
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
                    Mdina Road, Birkirkara CBD 2010, Malta<br />
                    Five minutes from St Julians + Spinola Bay
                  </address>
                </div>
                <div className="flex items-center gap-3 mb-3"><Phone className="w-5 h-5 text-orange-500" /><a href="tel:+35679711799" className="text-foreground hover:text-orange-600">+356 7971 1799</a></div>
                <div className="flex items-center gap-3 mb-3"><Mail className="w-5 h-5 text-orange-500" /><a href="mailto:hello@oarcdigital.com" className="text-foreground hover:text-orange-600">hello@oarcdigital.com</a></div>
                <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-orange-500" /><span className="text-foreground">Mon – Fri, 09:00 – 18:00 CET</span></div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">MGA + jurisdiction-rules pre-applied</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">Affiliate fraud + brand-bidding monitoring</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">SiGMA + iGaming Next conference cover</span></div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Cluster Proximity Matters in Maltese iGaming</h2>
            <p className="text-foreground leading-relaxed">
              The Maltese iGaming sector runs on relationships. Affiliate managers, compliance leads, paid-acquisition heads, conference organisers, and licence advisors all sit inside a 20-minute walk between Birkirkara, Sliema, St Julians, and Spinola Bay. An agency that works the cluster from a London or Barcelona office will always be one degree of separation removed from the conversation that matters. OARC Digital is in the cluster — which means our briefs, our affiliate negotiations, and our conference work happen in the same room as the operator&apos;s commercial leadership.
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

          <RelatedLinks slug="/aeo/igaming-marketing-malta" />

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Need a serious iGaming partner?</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">A 30-minute call gets you a compliance-first acquisition audit and a frank verdict on what to change next quarter.</p>
            <Link href="/contact"><Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">Start a conversation <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
