import Layout from '@/components/layout/Layout';
import RelatedLinks from '@/components/RelatedLinks';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Link from 'next/link';

interface Faq { question: string; answer: string; }
interface Offer { name: string; priceFrom: number; unitText?: string; description?: string; }
interface Props { faqs: Faq[]; offers: Offer[]; }

const reasons = [
  'Active Swieqi client campaigns — direct data from a high-income, design-aware audience',
  'Instagram-led visual creative produced in-house for the Swieqi aesthetic standard',
  'Google Maps + local SEO optimisation for Swieqi premium-service categories',
  'Fitness, beauty, clinic, and hospitality playbooks tested on Swieqi audiences',
  '12 minutes from our Birkirkara HQ — on-site visits during onboarding',
];

const verticals = [
  { name: 'Fitness + wellness', detail: 'High-end gyms, pilates, yoga, and personal training studios — Swieqi has Malta&apos;s densest concentration of fitness consumers per capita.' },
  { name: 'Beauty + aesthetics', detail: 'Premium salons, aesthetic clinics, dermatology, and skincare brands. Instagram lead-gen ads dominate the channel mix.' },
  { name: 'Restaurants + bars', detail: 'Swieqi&apos;s F&B scene targets a discerning resident audience plus the adjacent St Julian&apos;s tourist overflow. Visual content sets the bar.' },
  { name: 'Real estate + lettings', detail: 'Swieqi&apos;s property market is Malta&apos;s most expensive per square metre. Brand presentation matters more than promotional volume.' },
];

export default function MarketingAgencySwieqi({ faqs, offers }: Props) {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Marketing Agency Swieqi</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Answer Engine Optimised</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">A Marketing Agency Serving Swieqi Businesses</h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              OARC Digital runs Instagram-led social, paid ads, and SEO for Swieqi fitness, beauty, hospitality, and premium-service businesses. Birkirkara HQ — 12 minutes away.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"><Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">Book a call <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <a href="tel:+35679711799"><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><Phone className="mr-2 w-4 h-4" /> +356 7971 1799</Button></a>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Marketing for Malta&apos;s Most Aspirational Catchment</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Swieqi is one of Malta&apos;s smallest councils by area but consistently among its highest-income by household. The combination of young professional families, expat workers in the iGaming and fintech corridor, and a long-established affluent local base gives the area a consumer profile that is closer to a London or Amsterdam suburb than to most of Malta. Marketing strategies built for the rest of the country have to be adapted before they work in Swieqi.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The first adaptation is platform mix. Instagram outperforms Facebook for almost every Swieqi consumer category. The audience is younger, more visually driven, and more international — English-language creative outperforms Maltese, video-first content outperforms static, and Reels are now a dominant discovery surface in the area. The second adaptation is creative quality bar. Swieqi consumers compare every brand they see on their feed to the international brands they follow. Mediocre photography, sloppy typography, or generic stock content gets ignored in this catchment in a way it does not elsewhere in Malta.
            </p>
            <p className="text-foreground leading-relaxed">
              OARC Digital builds marketing for Swieqi businesses from this brief: visually rigorous, English-language-first, Instagram and Google Maps led, with paid lead-gen layered on top for the fitness, beauty, and clinic verticals where conversion needs to be measured monthly. We have direct campaign data from clients near Triq is-Sirena and across the broader St Julian&apos;s / Swieqi corridor.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Why OARC Digital for Swieqi?</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Swieqi Verticals We Work With</h2>
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
                    12-minute drive from Swieqi
                  </address>
                </div>
                <div className="flex items-center gap-3 mb-3"><Phone className="w-5 h-5 text-orange-500" /><a href="tel:+35679711799" className="text-foreground hover:text-orange-600">+356 7971 1799</a></div>
                <div className="flex items-center gap-3 mb-3"><Mail className="w-5 h-5 text-orange-500" /><a href="mailto:hello@oarcdigital.com" className="text-foreground hover:text-orange-600">hello@oarcdigital.com</a></div>
                <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-orange-500" /><span className="text-foreground">Mon – Fri, 09:00 – 18:00 CET</span></div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">Instagram + Google Maps focus</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">In-house creative production studio</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">Month-to-month contracts</span></div>
              </div>
            </div>
          </section>

          <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Marketing for the Swieqi Premium Market</h2>
              <p className="text-foreground leading-relaxed">
                Swieqi is one of the highest-spend residential pockets in Malta — younger professionals, expatriate families, and a steady flow of premium hospitality and wellness brands competing for their attention. Marketing into Swieqi rewards quality over volume: high-production Reels and TikToks shot on location, Google Business Profile listings with weekly fresh photography, and review-acquisition workflows wired into the customer journey. Our Swieqi retainers ship that production cadence from our in-house Birkirkara studio rather than outsourcing the creative chain — every shoot, edit, and post stays under one roof.
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

          <RelatedLinks slug="/aeo/marketing-agency-swieqi" />

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Operating in Swieqi? Let&apos;s talk.</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">12 minutes by car. Send a brief and we&apos;ll book a kickoff workshop on-site at your premises.</p>
            <Link href="/contact"><Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">Start a conversation <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
