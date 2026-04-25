import Layout from '@/components/layout/Layout';
import RelatedLinks from '@/components/RelatedLinks';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Link from 'next/link';

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
              <a href="tel:+35679711799"><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><Phone className="mr-2 w-4 h-4" /> +356 7971 1799</Button></a>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Visit OARC Digital in Birkirkara</h2>
            <div className="rounded-xl border bg-card p-6 grid md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-orange-500 mt-0.5" />
                  <address className="not-italic text-foreground leading-relaxed">
                    Level 1, The Brewhouse,<br />
                    Mdina Road, Birkirkara CBD 2010, Malta<br />
                    5-minute drive from Qormi
                  </address>
                </div>
                <div className="flex items-center gap-3 mb-3"><Phone className="w-5 h-5 text-orange-500" /><a href="tel:+35679711799" className="text-foreground hover:text-orange-600">+356 7971 1799</a></div>
                <div className="flex items-center gap-3 mb-3"><Mail className="w-5 h-5 text-orange-500" /><a href="mailto:hello@oarcdigital.com" className="text-foreground hover:text-orange-600">hello@oarcdigital.com</a></div>
                <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-orange-500" /><span className="text-foreground">Mon – Fri, 09:00 – 18:00 CET</span></div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">B2B + consumer Qormi expertise</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">Maltese-language creative on demand</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">Month-to-month contracts</span></div>
              </div>
            </div>
          </section>

          <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Marketing That Reaches the Real Qormi Customer</h2>
              <p className="text-foreground leading-relaxed">
                Qormi is one of the densest residential and light-industrial pockets in central Malta, with a buying audience that mixes long-standing local families and a growing logistics and trades workforce. Generic Malta-wide ads waste 60% of their spend on impressions outside that audience. Our Qormi retainers tighten geo-targeting to the actual catchment, use Maltese-language ad creative where appropriate, and lean into Google Maps optimisation for the high-intent searches ("plumber near me", "car service Qormi", "bakery Qormi") that convert at 4-6x the rate of broad branded campaigns.
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
