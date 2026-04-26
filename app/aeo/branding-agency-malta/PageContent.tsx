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
  'Strategy before pixels — positioning, audience and category audit signed off before any logo concept is shown',
  '40-page brand guideline document as standard — not a logo on a JPEG and a colour swatch',
  'Compliance-aware design for MGA and MFSA-licensed clients — disclosure, advertising and responsible-gambling rules baked in',
  'Implementation across web, social, signage, menus and packaging — not just a brand book that sits in a Drive folder',
  'Done from Birkirkara — workshops happen on-site or at your premises, not over a Zoom link from another country',
];

const verticals = [
  { name: 'Hospitality identity', detail: 'Restaurants, beach clubs, hotels, gelaterias and catering brands across Sliema, St Julians, Valletta and Gozo. Identity systems built to survive menu changes and seasonal photography.' },
  { name: 'iGaming + MGA operators', detail: 'B2C and B2B brands for MGA-licensed operators in Ta&apos; Xbiex and St Julians, with responsible-gambling messaging and MGA advertising rules embedded in the brand guideline.' },
  { name: 'Fintech + payments', detail: 'Identity work for MFSA-licensed payment institutions, EMIs and CASPs &mdash; precise typography, restrained colour, regulator-friendly disclosure patterns.' },
  { name: 'Retail + DTC', detail: 'Product brands for Malta makers and DTC retailers shipping to the EU mainland &mdash; packaging systems, ecommerce visual language, Instagram-first creative grids.' },
  { name: 'Professional services', detail: 'Law firms, audit practices, advisory boutiques and architectural studios in Birkirkara, Floriana and Valletta &mdash; identities that signal seniority without resorting to navy-and-gold cliché.' },
  { name: 'Marine + tourism', detail: 'Charter operators, dive schools, eco-tourism brands and boutique hospitality &mdash; identity systems that translate from Maltese coast photography to Instagram thumbnails to print.' },
];

export default function BrandingAgencyMalta({ faqs, offers }: Props) {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Branding Agency Malta</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Answer Engine Optimised</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Branding Agency in Malta — Identity Systems, Not Logo Files</h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              OARC Digital builds full brand identity systems for Malta hospitality, iGaming, fintech and retail operators. Strategy first, 40-page guideline as standard, implementation done end-to-end from our Birkirkara HQ.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"><Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">Book a discovery call <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <a href={`tel:${NAP.phoneE164}`}><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><Phone className="mr-2 w-4 h-4" />{NAP.phoneDisplay}</Button></a>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Brand in Malta Is Its Own Discipline</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Malta sits at an unusual crossroads. The local market is tiny &mdash; 550,000 residents on an island twenty miles long &mdash; and densely interconnected, where reputation travels faster than any marketing campaign. The visiting market is huge, three million tourists a year, with completely different expectations from your brand. The B2B market sits across two heavily regulated verticals (iGaming and financial services) where the regulator has explicit advertising rules. A brand built for Sliema strand needs to read on the side of a Valletta heritage façade, on a Wolt thumbnail, in a TikTok shot at golden hour, and in a printed compliance booklet for the MGA.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              That mix is what most generic brand agencies miss. The standard playbook from London or Berlin tends to optimise for one surface and one audience. Malta brands have to flex constantly &mdash; English to Maltese, locals to tourists, premium positioning to compliance disclosure, retail signage to Instagram grid. OARC Digital builds identity systems that do that work, not vanity logos that look great on Behance and break the moment your barback in Paceville needs to print a daily specials menu.
            </p>
            <p className="text-foreground leading-relaxed">
              We have been doing this from Birkirkara since 2021. Hospitality groups in Sliema and St Julians, MGA-licensed operators in Ta&apos; Xbiex, fintech and payment institutions under MFSA supervision, retail brands shipping to the EU mainland, professional-services firms in Floriana and Valletta. Every engagement starts with a half-day workshop on-site, a written positioning brief, and a category audit before anyone in the studio touches Figma.
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Verticals We Brand For</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {verticals.map((v) => (
                <div key={v.name} className="p-4 rounded-xl bg-card border">
                  <div className="font-bold mb-1">{v.name}</div>
                  <div className="text-sm text-muted-foreground">{v.detail}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Transparent Pricing</h2>
            <p className="text-muted-foreground mb-6">Three engagement tiers. Pick the one that matches the size of the bet you are making.</p>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why this matters for branding in Malta</h2>
            <p className="text-foreground leading-relaxed">
              The Malta operators commanding premium pricing &mdash; the €250 covers in Mdina, the boutique fintechs with a six-week sales cycle, the iGaming brands competing in five regulated markets &mdash; all share one thing: a brand that scales across surface, language, audience and regulator without losing coherence. That is what an identity system gives you that a logo file never will.
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

          <RelatedLinks slug="/aeo/branding-agency-malta" />

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Have a brand brief? Let&apos;s scope it.</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">A 30-minute discovery call gets you a written feedback summary and a fixed-price proposal &mdash; no slide deck, no creative ego.</p>
            <Link href="/contact"><Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">Start a conversation <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
