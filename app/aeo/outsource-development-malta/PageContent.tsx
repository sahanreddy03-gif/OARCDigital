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

const compare = [
  { region: 'Eastern Europe', cost: '€35–60/hr', pros: 'Cheap, large talent pool', cons: 'Time-zone overlap is partial; communication friction; quality varies wildly' },
  { region: 'India / Philippines', cost: '€20–40/hr', pros: 'Cheapest hourly; large pool', cons: 'No EU time overlap; GDPR data-residency complications; senior talent harder to retain' },
  { region: 'Western Europe', cost: '€90–150/hr', pros: 'Senior, EU-clean, fluent', cons: 'Materially more expensive; harder to scale teams up and down quickly' },
  { region: 'Malta (OARC Digital)', cost: '€65–95/hr', pros: 'EU time + GDPR + English-first + senior team + in-person available', cons: 'Smaller pool; not the cheapest option' },
];

const models = [
  { name: 'Fixed-scope', detail: 'Best when the spec is stable. Written contract, fixed price, fixed timeline, full IP and code handover.' },
  { name: 'Discovery sprint', detail: 'Two weeks fixed-price to convert a half-formed idea into a written spec, ER diagram, and proposal for the build.' },
  { name: 'Team augmentation', detail: '1–3 senior engineers dedicated to your roadmap with PM coverage. Best when scope is evolving.' },
  { name: 'Fractional CTO', detail: 'Senior technical leadership embedded with your in-house team for architecture, hiring, and roadmap.' },
];

export default function OutsourceDevelopmentMalta({ faqs, offers }: Props) {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Outsource Development Malta</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Answer Engine Optimised</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Outsource Development to Malta — EU-Time, GDPR-Clean, Senior</h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              OARC Digital takes on outsourced engineering for Malta-based and EU-based businesses. Fixed-scope SaaS MVPs, mobile apps, web platforms, and dedicated team augmentation.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"><Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">Talk to engineering <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <a href={`tel:${NAP.phoneE164}`}><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><Phone className="mr-2 w-4 h-4" />{NAP.phoneDisplay}</Button></a>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Outsource Development to Malta?</h2>
            <p className="text-foreground leading-relaxed mb-4">
              The outsourcing decision used to be a simple cost calculation: send the work to wherever the hourly rate was lowest, accept the friction, ship something. That model is now broken for serious products. EU-regulated buyers ask data-residency questions on the first call. Time-zone gaps that work for body-shop hours fall apart when a product needs sprint-level collaboration. Senior engineers walk out of low-cost shops the moment they earn a real reference.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Malta has emerged as a sweet-spot location for outsourcing development from a UK, EU, or US base. CET time zone overlaps fully with London and Continental Europe and substantially with the US East Coast. English is the business language across the country. Customer data stays in the EU by default — no cross-border transfer agreements, no Schrems II workarounds. And the senior engineering pool, while small, has shipped real B2B SaaS, fintech, and iGaming products at quality that matches Western European agencies at a materially lower cost.
            </p>
            <p className="text-foreground leading-relaxed">
              OARC Digital has been the outsourced engineering partner for Malta-based scale-ups, EU-based product teams without their own engineering bench, and US founders who needed an EU-region build for GDPR reasons. The model works because we treat ourselves as a partner, not a vendor — written sprint reports, weekly synchronous reviews, full code and IP handover at the end of every engagement.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Where Malta Sits in the Outsourcing Market</h2>
            <div className="overflow-x-auto rounded-xl border">
              <table className="w-full text-sm">
                <thead className="bg-muted/40">
                  <tr>
                    <th className="text-left p-4 font-semibold">Region</th>
                    <th className="text-left p-4 font-semibold">Senior cost</th>
                    <th className="text-left p-4 font-semibold text-emerald-600">Pros</th>
                    <th className="text-left p-4 font-semibold text-red-600">Cons</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {compare.map((c) => (
                    <tr key={c.region}>
                      <td className="p-4 font-medium">{c.region}</td>
                      <td className="p-4 text-muted-foreground">{c.cost}</td>
                      <td className="p-4 text-muted-foreground">{c.pros}</td>
                      <td className="p-4 text-muted-foreground">{c.cons}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Engagement Models</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {models.map((m) => (
                <div key={m.name} className="p-4 rounded-xl bg-card border">
                  <div className="font-bold mb-1">{m.name}</div>
                  <div className="text-sm text-muted-foreground">{m.detail}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Transparent Pricing</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">How We Run an Outsourced Engagement</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Daily asynchronous Loom updates from the engineering lead — what shipped, what is blocked, what is next. Weekly synchronous sprint review by Zoom or in person at our Birkirkara office. Fortnightly written sprint summary covering velocity, scope, and risk. Quarterly in-person session at the client&apos;s location for clients in London, Berlin, Amsterdam, Dubai, or New York.
            </p>
            <p className="text-foreground leading-relaxed">
              All code in your GitHub organisation from day one. EU-region staging environment from week two. Weekly demo of the working build, never slides about future plans. The first thing you receive at the end of any engagement is a full handover document — repository structure, deployment runbook, monitoring access, and escalation paths.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Visit OARC Digital in {NAP.addressLocality}</h2>
            <TrustBlock variant="visit" />
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

          <RelatedLinks slug="/aeo/outsource-development-malta" />

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Considering Malta for outsourcing?</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">A 30-minute call to scope the work and understand whether OARC Digital is the right fit. No deck, no pitch, honest answers.</p>
            <Link href="/contact"><Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">Book the call <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
