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
  'Active Gzira client campaigns from the waterfront and town centre',
  'Multi-language creative — English, Italian, German for tourist-facing brands',
  'Marine + yacht-services playbook tested on real Gzira clients',
  'Student + language-school targeting for the growing Gzira education economy',
  '10 minutes from our Birkirkara HQ — on-site kickoff workshops included',
];

const verticals = [
  { name: 'Hospitality + waterfront', detail: 'Restaurants, cafes, gelaterias, and bars along the Gzira waterfront and Manoel Island corridor. Tourist + resident dual targeting.' },
  { name: 'Marine + yacht services', detail: 'Yacht agencies, brokers, charter operators, and marine engineering. Niche audiences, high transaction values, LinkedIn + targeted Google.' },
  { name: 'Language schools', detail: 'Gzira hosts several major English language schools serving Italian, German, and Eastern European students. Multi-language campaign expertise required.' },
  { name: 'Real estate + lettings', detail: 'Gzira&apos;s student rental market is one of Malta&apos;s most active. Property brands compete on Instagram, Booking.com, and Airbnb visibility.' },
];

export default function MarketingAgencyGzira({ faqs, offers }: Props) {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Marketing Agency Gzira</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Answer Engine Optimised</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">A Marketing Agency Serving Gzira Businesses</h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              OARC Digital runs social, paid ads, and SEO for Gzira hospitality, marine services, language schools, and lettings. Birkirkara HQ — 10 minutes away.
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Marketing for the Gzira Mix</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Gzira sits between the affluent Sliema corridor to the east and the institutional cluster of Ta&apos; Xbiex and Msida to the west. The local economy combines a working resident base with three layered visitor economies: language-school students typically aged 18 to 30 from Italy, Germany, and Eastern Europe; tourists who use Gzira as a more affordable base than Sliema; and the marine and yacht-services industry built around Manoel Island and the surrounding moorings.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              That mix means almost every Gzira business is targeting at least two distinct audiences simultaneously. A waterfront restaurant might serve weekday lunch to local office workers, weekend dinners to language-school students, and high-season tourist breakfast trade. A real-estate agency might list both family homes for the resident market and short-term rentals on Booking.com and Airbnb for the visitor segment. Marketing strategies have to flex across language, tone, and channel mix accordingly.
            </p>
            <p className="text-foreground leading-relaxed">
              OARC Digital has direct campaign data from clients operating in Gzira and the adjacent Sliema and Ta&apos; Xbiex catchments. We produce multi-language creative in English, Italian, German, and French, run targeted Instagram and TikTok campaigns segmented by audience, and structure local SEO for the Gzira waterfront and town-centre keywords that consistently convert.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Why OARC Digital for Gzira?</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Gzira Verticals We Work With</h2>
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
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Marketing That Connects Gzira's Mixed Audience</h2>
              <p className="text-foreground leading-relaxed">
                Gzira is one of the most demographically mixed localities in Malta — long-time Maltese residents, expatriate professionals working out of the seafront offices, and a heavy student population from the nearby campuses. A campaign that treats them as one audience underperforms a campaign that segments them properly. Our Gzira retainers run separate creative tracks per segment, with bilingual ad copy where it lifts conversion and English-only where it does not, and a measurement model that breaks performance down per audience rather than per channel.
              </p>
            </section>
          <MaltaContextBlock slug="marketing-agency-gzira" />

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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Gzira&apos;s Three Layered Audiences in Detail</h2>
            <p className="text-foreground leading-relaxed mb-4">
              The waterfront audience along Triq ix-Xatt and around Manoel Island is a working-resident plus office-worker mix. Lunchtime and early-evening footfall is the dominant revenue window for the cafes, bars, and casual restaurants in this strip. Marketing into this audience is hyper-local — a 1km Meta geo-radius, English-language creative, midday and 5pm dayparting, and a Google Business Profile with up-to-date opening hours and a working menu link. A Gzira waterfront client of ours lifted weekday lunch covers by 41% over a single quarter using nothing more than that combination.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The language-school audience is concentrated in late spring and summer, with a spike at the start of every two-week course cycle as new student cohorts arrive in the area. This audience is reachable on Instagram and TikTok almost exclusively, in Italian, German, and Polish far more effectively than English. The conversion event is rarely a same-day booking — it is a saved post, a shared story, or a follow that converts to a visit two or three days later when the cohort decides where to eat or where to spend the weekend together.
            </p>
            <p className="text-foreground leading-relaxed">
              The marine and yacht-services audience around the Ta&apos; Xbiex marina and the broader Manoel Island moorings is a B2B audience reachable on LinkedIn and Google commercial-intent search, not paid social. This is a low-volume, high-value motion — a single charter agency or yacht-management contract justifies a quarter of marketing spend. We segment Gzira retainers across all three audiences explicitly rather than running a generic locality campaign. Reporting separates each segment so the client sees which audience is paying back and which is being subsidised, instead of a single Gzira-wide acquisition number that hides the real picture.
            </p>
          </section>

          <RelatedLinks slug="/aeo/marketing-agency-gzira" />

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Operating in Gzira? Let&apos;s talk.</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">10 minutes by car. Send a brief and we&apos;ll book a kickoff workshop on-site at your waterfront premises.</p>
            <Link href="/contact"><Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">Start a conversation <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
