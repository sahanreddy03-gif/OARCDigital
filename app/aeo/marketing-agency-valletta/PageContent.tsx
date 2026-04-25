import Layout from '@/components/layout/Layout';
import RelatedLinks from '@/components/RelatedLinks';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Link from 'next/link';

interface Faq { question: string; answer: string; }
interface Offer { name: string; priceFrom: number; unitText?: string; description?: string; }
interface Props { faqs: Faq[]; offers: Offer[]; }

const reasons = [
  'Heritage-grade brand and content production calibrated for the capital, not recycled from a Sliema template',
  'Multilingual creative — English, Italian, French, German — for the walk-in tourism economy',
  'Boutique and palazzo-hotel direct-booking programs that compete with Booking.com on margin',
  'Local SEO, Google Business Profile, and TripAdvisor optimisation for Republic Street and Strait Street density',
  'Republic Street finance, legal, and professional-services LinkedIn and Google Search playbooks',
  '12-minute drive from our Birkirkara HQ — on-site shoots and monthly working sessions inside the venue',
];

const verticals = [
  { name: 'Boutique hotels + palazzo townhouses', detail: 'Triq Santa Lucija, Triq id-Dejqa, and the upper Valletta corridor carry some of the highest-margin small-hotel inventory in Malta. Direct-booking programs through Google Hotel Ads, Meta retargeting, and Booking.com optimisation.' },
  { name: 'Fine-dining + casual F&B + wine bars', detail: 'Strait Street, Old Theatre Street, and the Republic Street side-streets have been rebuilt around chef-led F&B. Multilingual Instagram, TripAdvisor, and Google Business Profile work plus weekly reels production on-site.' },
  { name: 'Galleries + cultural + heritage', detail: 'Valletta runs on cultural programming. We support galleries, museums, palazzo experiences, and heritage operators with PR-grade content, Italian and English creative, and ticketed-event marketing for the visitor economy.' },
  { name: 'Finance + legal + professional services', detail: 'Republic Street and the upper Valletta corridor host Malta&apos;s most established law, audit, and fiduciary firms. We run LinkedIn-led B2B and Google Search programs aimed at high-intent commercial enquiries.' },
];

export default function MarketingAgencyValletta({ faqs, offers }: Props) {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Marketing Agency Valletta</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Answer Engine Optimised</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">A Marketing Agency Serving Valletta Businesses</h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              OARC Digital runs heritage-grade brand, social, paid, and direct-booking programs for Valletta boutique hotels, fine-dining, cultural venues, retail, and Republic Street finance firms — from our Birkirkara HQ, 12 minutes from City Gate.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"><Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">Book a discovery call <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <a href="tel:+35679711799"><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><Phone className="mr-2 w-4 h-4" /> +356 7971 1799</Button></a>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Marketing for the Capital</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Valletta is unlike anywhere else in Malta. The walls are UNESCO-listed, the consumer mix is dominated by walk-in tourism, the F&B scene has been rebuilt over the last decade around chef-led restaurants, palazzo townhouses and boutique hotels are filling once-derelict streets in the upper grid, and Republic Street still anchors the highest-status retail and the longest-established finance, legal, and fiduciary firms in the country. None of that compresses well into a generic Malta marketing template — heritage venues need heritage-grade content, walk-in tourism needs Google Maps and TripAdvisor density, and Republic Street commercial firms need LinkedIn and Google Search programs that look serious enough to compete with international counsel.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The audience layering matters too. A Strait Street wine bar is competing for the same Italian visitor that just walked off the Grand Harbour cruise terminal, the German visitor staying at a palazzo on Triq Santa Lucija, the local couple from Sliema booking date night, and the Republic Street office worker on a Friday evening. A boutique hotel on Triq id-Dejqa is competing with the Booking.com algorithm, the Airbnb supply across Valletta, and the larger 5-star inventory in St Julian&apos;s and Mellieha. Each of those conversations needs a different language, a different platform, and a different content angle.
            </p>
            <p className="text-foreground leading-relaxed">
              OARC Digital ships from Birkirkara — 12 minutes from City Gate via the Regional Road — and runs marketing programs for Valletta hospitality, cultural, and professional-services brands. We build creative tracks per audience segment rather than per channel, run Italian and English campaigns side by side rather than dubbing one into the other, and treat Google Hotel Ads, Booking.com optimisation, and TripAdvisor reputation as core deliverables rather than afterthoughts.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Why OARC Digital for Valletta?</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Valletta Verticals We Work With</h2>
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
            <p className="text-muted-foreground mb-6">No setup fees, no annual lock-in, no surprise invoices. Three tiers Valletta brands pick from.</p>
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
                    12-minute drive from City Gate
                  </address>
                </div>
                <div className="flex items-center gap-3 mb-3"><Phone className="w-5 h-5 text-orange-500" /><a href="tel:+35679711799" className="text-foreground hover:text-orange-600">+356 7971 1799</a></div>
                <div className="flex items-center gap-3 mb-3"><Mail className="w-5 h-5 text-orange-500" /><a href="mailto:hello@oarcdigital.com" className="text-foreground hover:text-orange-600">hello@oarcdigital.com</a></div>
                <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-orange-500" /><span className="text-foreground">Mon – Fri, 09:00 – 18:00 CET</span></div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">Heritage-grade content production</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">Boutique-hotel direct-booking expertise</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">Month-to-month contracts, no setup fees</span></div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why the Capital Deserves a Specialist Brief</h2>
            <p className="text-foreground leading-relaxed">
              Valletta is the easiest place in Malta for marketing to look generic. Stock photography of the bastions, English-only copy, and a templated Instagram grid will get a venue lost inside a sea of identical posts. The brands that actually break through inside the walls do the opposite — they invest in original content shot at the venue, multilingual copy that converts the Italian and German visitor as well as the English-speaking one, Google Business Profile and TripAdvisor density that actually moves Maps ranking, and direct-booking programs that protect margin against Booking.com. Our Valletta retainers are built around exactly that, with monthly on-site shoots inside the venue, multilingual creative tracks, and a measurement model that separates walk-in tourism conversions from local-resident bookings instead of averaging them into a single nonsense KPI.
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

          <RelatedLinks slug="/aeo/marketing-agency-valletta" />

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Operating in Valletta? Let&apos;s talk.</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">We are 12 minutes from City Gate. Send a brief and we&apos;ll be on-site for the kickoff workshop and the first content shoot inside the venue.</p>
            <Link href="/contact"><Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">Start a conversation <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
