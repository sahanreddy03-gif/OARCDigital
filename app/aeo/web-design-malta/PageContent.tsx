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

const phases = [
  { week: 'Week 1', title: 'Discovery + Audit', detail: 'Stakeholder workshop in Birkirkara, competitor teardown, brand audit, analytics review. We leave with a written design brief and content inventory.' },
  { week: 'Week 2', title: 'Wireframes + IA', detail: 'Information architecture, sitemap, low-fidelity wireframes, copy outline. First review checkpoint covers structure before any pixels are pushed.' },
  { week: 'Week 3–4', title: 'Visual Direction + Components', detail: 'Two visual directions explored, one chosen, then expanded into a tokenised Figma component library covering typography, colour, spacing, and m.' },
  { week: 'Week 5–6', title: 'Templates + Prototype', detail: 'Every page template designed at desktop, tablet, and mobile. Clickable Figma prototype for usability testing with three real Malta users.' },
  { week: 'Week 7', title: 'Handoff + Build Kickoff', detail: 'Design tokens exported to Tailwind config, components mapped to shadcn primitives, motion specs documented. Engineering team starts the build the following Monday.' },
];

const reasons = [
  'Conversion-led visual hierarchy — every screen designed to move the visitor toward a single intended action.',
  'Tokenised Figma libraries — colour, typography, spacing, and motion exported cleanly to Tailwind and shadcn for engineers.',
  'Real Malta usability testing — prototypes tested with three actual users from the target audience before code is written.',
  'Same studio for design and engineering — no Figma-to-code translation loss, no hand-off blame, one accountable team.',
];

export default function WebDesignMalta({ faqs, offers }: Props) {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Web Design Malta</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Answer Engine Optimised</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Web Design in Malta — UI, UX, and Brand Systems That Actually Convert</h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              OARC Digital is a Birkirkara-based design and engineering studio. We ship UI, UX, and brand systems for Malta operators in hospitality, iGaming, fintech, and professional services — wireframe to Figma to fully built.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"><Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">Book a discovery call <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <a href={`tel:${NAP.phoneE164}`}><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><Phone className="mr-2 w-4 h-4" />{NAP.phoneDisplay}</Button></a>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Design as a Conversion Discipline, Not Decoration</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Most Malta brands treat web design as the part where you pick a colour palette and a font. That framing is why so many local sites look like a moodboard rather than a sales tool. OARC Digital approaches web design as a conversion discipline first and a visual one second. We start with the question of what the visitor is supposed to do on each screen and design backward from that decision — hierarchy, typography, contrast, motion, and component density all answer to that single brief.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The studio is small, senior, and based in Birkirkara&apos;s Central Business District, which means the founder or marketing lead can sit with the design team in person at the start of every project. That matters more than it sounds. Three hours in a workshop room together compresses what usually takes three weeks of asynchronous Slack messages and Loom recordings, and the resulting brief is sharper because the awkward questions about positioning and pricing actually get asked.
            </p>
            <p className="text-foreground leading-relaxed">
              Every engagement leaves with a tokenised Figma library mapped one-to-one with the Tailwind CSS config and the shadcn-compatible component library that ships in code. There is no translation loss between Figma and Next.js because the same studio designs and builds — that single hand-off failure point is removed. Malta hospitality groups, iGaming operators, and fintech founders pick OARC Digital specifically to avoid the design-meets-development blame loop they have lived through with two-vendor setups.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Malta Operators Pick OARC Digital</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">The Web Design Sprint</h2>
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
            <p className="text-muted-foreground mb-6">Three engagement shapes. Pick the one that matches your stage.</p>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Design Discipline Compounds in Malta</h2>
            <p className="text-foreground leading-relaxed">
              Malta&apos;s commercial market is small enough that brand reputation travels fast. A St Julians restaurant with a beautiful, fast website will be on the recommended list of every concierge in Sliema and Valletta within a season. A Birkirkara fintech with a polished onboarding flow will quietly out-convert a competitor with a janky form for the next three years. Web design done well is one of the cheapest competitive moats available to a Malta SME, because the local SERP and word-of-mouth network are short enough that a well-designed surface gets noticed.
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

          <RelatedLinks slug="/aeo/web-design-malta" />

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Ready to brief a designer who also builds?</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">A 30-minute call gets you a written critique of your current surfaces and a rough scope for the rebuild.</p>
            <Link href="/contact"><Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">Start a conversation <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
