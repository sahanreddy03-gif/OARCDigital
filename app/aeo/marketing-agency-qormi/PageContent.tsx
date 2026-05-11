import Layout from '@/components/layout/Layout';
import RelatedLinks from '@/components/RelatedLinks';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
import TrustBlock from "@/components/seo/TrustBlock";
import MaltaContextBlock from "@/components/seo/MaltaContextBlock";
import Link from 'next/link';
import { NAP } from "@/lib/seo/nap";

interface Faq { question: string; answer: string; }
interface Offer { name: string; priceFrom: number; unitText?: string; description?: string; }
interface Props { faqs: Faq[]; offers: Offer[]; }

const reasons = [
  'Active Qormi client campaigns — direct data from the local market',
  'B2B and trade buyer expertise alongside consumer-side capability',
  'Maltese-language consumer creative produced in-house',
  'Local SEO for Qormi-plus-category keywords with low competition',
  '5-minute drive from our Birkirkara HQ — same-day on-site visits',
];

const verticals = [
  { name: 'Industrial + trade B2B', detail: 'Building merchants, suppliers, automotive parts and workshops — the dominant Qormi business profile. LinkedIn plus Google commercial-intent search.' },
  { name: 'Family hospitality', detail: 'Qormi has long-standing family restaurants and bars built on local custom. Facebook plus Maltese-language creative outperforms anything English-first.' },
  { name: 'Automotive services', detail: 'Body shops, MOT centres, tyres, valeting — consistent local-search demand. Google Business optimisation is a higher-leverage channel than paid social.' },
  { name: 'Home services + trades', detail: 'Plumbers, electricians, AC technicians, carpenters — Qormi-based businesses serving the central and southern Malta corridor.' },
];

export default function MarketingAgencyQormi({ faqs, offers }: Props) {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Marketing Agency Qormi</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Answer Engine Optimised</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">A Marketing Agency Serving Qormi Businesses</h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              OARC Digital runs social, paid ads, and SEO for Qormi industrial, trade, hospitality, and consumer businesses. Birkirkara HQ — 5 minutes away.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"><Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">Book a call <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <a href={`tel:${NAP.phoneE164}`}><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><Phone className="mr-2 w-4 h-4" />{NAP.phoneDisplay}</Button></a>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-8" data-testid="text-last-updated">Last updated: 10 May 2026</p>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Marketing for Qormi&apos;s B2B and Consumer Mix</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Qormi is unusual among Maltese towns in that its economy splits roughly evenly between B2B trade and industrial activity along the Marsa-Qormi corridor and a strong local consumer base in the town centre and the Pjazza San Gorg neighbourhood. Marketing strategies that work in Sliema or St Julian&apos;s — Instagram-heavy, English-language, lifestyle-driven — fail in Qormi because they are built for the wrong audience.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The Qormi B2B buyer searches Google for &quot;building suppliers Malta&quot; or &quot;car parts Qormi&quot; in commercial-intent moments. They click through to websites, ask for quotes by phone, and value reliability over flash. The Qormi consumer is family-driven, price-aware, and Maltese-language-first across most categories. They use Facebook far more than Instagram, value Google reviews above all other social proof, and are reached most effectively through community-page reposts and word-of-mouth amplified by paid ads.
            </p>
            <p className="text-foreground leading-relaxed">
              OARC Digital runs marketing for both sides of the Qormi economy. We have direct campaign data from Qormi industrial suppliers near the Marsa border and from hospitality clients in the town centre. We know which Google Ads keywords convert in Maltese, which LinkedIn audience configurations work for the small Maltese B2B sales motion, and how to structure a local-SEO campaign that competes with the bigger directory sites for category-plus-Qormi search.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Why OARC Digital for Qormi?</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Qormi Verticals We Work With</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Visit OARC Digital in {NAP.addressLocality}</h2>
            <TrustBlock variant="visit" />
          </section>

          <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Marketing That Reaches the Real Qormi Customer</h2>
              <p className="text-foreground leading-relaxed">
                Qormi is one of the densest residential and light-industrial pockets in central Malta, with a buying audience that mixes long-standing local families and a growing logistics and trades workforce. Generic Malta-wide ads waste 60% of their spend on impressions outside that audience. Our Qormi retainers tighten geo-targeting to the actual catchment, use Maltese-language ad creative where appropriate, and lean into Google Maps optimisation for the high-intent searches ("plumber near me", "car service Qormi", "bakery Qormi") that convert at 4-6x the rate of broad branded campaigns.
              </p>
            </section>
          <MaltaContextBlock slug="marketing-agency-qormi" />

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

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">The Qormi Industrial-Belt Advantage</h2>
            <p className="text-foreground leading-relaxed mb-4">
              The strip running from Triq il-Wied along the Marsa-Qormi corridor and out toward Hal Luqa hosts more building suppliers, automotive workshops, and trade distributors per square kilometre than any other part of Malta. That density is a marketing asset the average general agency does not know how to use. Buyers in this segment do not browse social feeds during the working day — they search Google for specific product or part terms in commercial-intent moments, click through to two or three suppliers in the local pack, and place a phone order before lunch.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The acquisition engine that wins here is technical and unfashionable. A Google Ads account structured around long-tail product SKUs rather than category brand terms. A Google Business Profile with the right opening hours, the right phone number, and weekly Q&amp;A activity. A WhatsApp Business catalog wired to the same product database the website uses. Our highest-performing Qormi B2B retainer doubled inbound phone-quote volume in the first 90 days using exactly that stack, with no spend on Meta and no investment in long-form content.
            </p>
            <p className="text-foreground leading-relaxed">
              The consumer side of Qormi — the family bakeries on Triq il-Vitorja, the salons around Pjazza San Gorg, the hospitality clusters in the town centre — runs on the standard Maltese-language Facebook plus Google Reviews motion. Running both engines in parallel inside one retainer is what makes Qormi unusually rewarding for an agency that understands the difference. The same retainer fee buys both motions because the production team and the media buying team are already shared across the rest of the Qormi book.
            </p>
          </section>

          <RelatedLinks slug="/aeo/marketing-agency-qormi" />

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Operating in Qormi? Let&apos;s talk.</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">5 minutes by car. Send a brief and we&apos;ll book a kickoff workshop on-site at your premises.</p>
            <Link href="/contact"><Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">Start a conversation <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
