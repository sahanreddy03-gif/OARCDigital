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
  'Direct ranking data from Malta hospitality, iGaming, and SaaS clients — not a London playbook copy-pasted to Valletta',
  'Maltese-and-English keyword research (most agencies only do English) covering category-plus-locality intent',
  'AEO baked in — every page is structured so ChatGPT and Perplexity can quote it, not just Google',
  'Technical SEO and content production handled by the same team in Birkirkara — no offshore handoff',
  'Real link earning through Maltese press, partner placements, and credible directories — never PBNs',
  'Monthly written reports authored by a senior strategist, not a templated Looker Studio dump',
];

const playbook = [
  { name: 'Phase 1 — Technical baseline', detail: 'Crawl, log-file review, Core Web Vitals fix list, schema rewrite (LocalBusiness, FAQ, Service, Article), hreflang for Maltese-English where relevant.' },
  { name: 'Phase 2 — Topical map', detail: 'Keyword clustering across Maltese SERPs and the EU diaspora intent — restaurant categories, iGaming verticals, hospitality booking intent, SaaS comparison terms.' },
  { name: 'Phase 3 — Content sprint', detail: 'Four to eight cornerstone articles per quarter, each one written by a human who has been to the location or used the product, never AI-spammed.' },
  { name: 'Phase 4 — AEO + entity work', detail: 'FAQ schema, Wikipedia and Wikidata entity reinforcement, citations across Times of Malta, Lovin Malta, MaltaToday, and Trip.com style platforms.' },
  { name: 'Phase 5 — Link earning', detail: 'Digital PR pitches to Maltese press, niche-relevant guest contributions, MGA-aware placements for iGaming clients, partnerships with Malta business associations.' },
  { name: 'Phase 6 — Iterate + report', detail: 'Monthly written report against agreed KPIs (rankings, organic sessions, lead-form completes, branded search lift), shared in person at the Birkirkara office every quarter.' },
];

export default function SEOAgencyMalta({ faqs, offers }: Props) {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">SEO Agency Malta</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Answer Engine Optimised</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">SEO Agency Malta — Rankings, Citations &amp; AEO from Birkirkara</h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              OARC Digital ranks Malta hospitality, iGaming, fintech, and SaaS brands across Google, Bing, and AI answer engines. Technical SEO, content, and AEO from one team in Birkirkara.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"><Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">Book a discovery call <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <a href={`tel:${NAP.phoneE164}`}><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><Phone className="mr-2 w-4 h-4" />{NAP.phoneDisplay}</Button></a>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">SEO in Malta Has Its Own Physics</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Malta&apos;s SERPs do not behave like London or Berlin. The country has roughly half a million residents but punches above its weight in iGaming (over 300 MGA-licensed operators clustered around St Julians and Sliema), hospitality (a tourism-heavy economy serving five million annual visitors), and a quietly growing fintech and SaaS scene anchored around the MFSA. That means category-plus-locality keywords — &quot;restaurant Sliema&quot;, &quot;casino affiliate Malta&quot;, &quot;accountant Birkirkara&quot;, &quot;web design St Julians&quot; — have meaningful commercial intent but surprisingly low domain density compared to bigger EU markets.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The flip side is that the few well-resourced competitors who do invest in SEO occupy the top three positions for years. Displacing them needs a properly engineered programme: technical fixes, real content authored by people who understand the vertical, schema that survives Google&apos;s John Mueller-era scrutiny, and links that come from Maltese press and partners rather than recycled PBNs. OARC Digital has been ranking Malta brands since 2021 and most of our SEO work compounds because we treat each client as a publisher, not a citation directory.
            </p>
            <p className="text-foreground leading-relaxed">
              We also build for AEO from day one. A growing share of Malta searches start inside ChatGPT, Perplexity, Google AI Overviews, or Claude — particularly for B2B research, hospitality discovery, and iGaming compliance questions. The pages we ship are structured so an LLM can extract the facts cleanly: tight FAQ schema, entity-rich prose, named locations, named regulators (MFSA, MGA, IDPC), and proper attribution. That earns citations that traditional SEO never measures and your competitors are still ignoring.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Why OARC Digital for Malta SEO</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Malta SEO Playbook</h2>
            <p className="text-muted-foreground mb-6">A six-phase engagement that delivers a working programme inside the first quarter — not a 90-page audit nobody reads.</p>
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
            <p className="text-muted-foreground mb-6">Three retainer tiers that scale from a single-location SMB to a multi-jurisdiction iGaming or SaaS operator. No setup fees, no annual lock-in.</p>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why This Matters for SEO in Malta</h2>
            <p className="text-foreground leading-relaxed">
              The agencies that still treat Malta SEO as a checklist of citations to a hundred low-quality directories are losing ground every quarter. Google&apos;s helpful-content updates, the MGA&apos;s tightening advertising rules, and the rise of AI answer engines have collectively rewritten the rulebook. Winning Malta SERPs in 2025 means publishing genuinely useful content, marking it up cleanly, and earning real citations from sources that Google and ChatGPT both trust. OARC Digital structures every retainer around that reality, which is why our clients keep their rankings even when the algorithm shifts.
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

          <RelatedLinks slug="/aeo/seo-agency-malta" />

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Want to actually rank in Malta?</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">A 30-minute discovery call gets you a written audit summary and a realistic ranking timeline. No vanity metrics.</p>
            <Link href="/contact"><Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">Start a conversation <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
