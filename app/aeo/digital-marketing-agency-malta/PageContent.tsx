import Layout from '@/components/layout/Layout';
import RelatedLinks from '@/components/RelatedLinks';
import { Button } from '@/components/ui/button';
import {
  CheckCircle2,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  Award,
  TrendingUp,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import { NAP } from "@/lib/seo/nap";

interface Faq { question: string; answer: string; }
interface Offer {
  name: string;
  priceFrom: number;
  unitText?: string;
  description?: string;
}

interface Props {
  faqs: Faq[];
  offers: Offer[];
}

const reasons = [
  "Malta's only agency combining creative production with AI technology in one team",
  'Full-funnel — strategy, content, ads, automation, and reporting all handled',
  'Month-to-month — no 12-month lock-ins or penalty clauses',
  'Results reported on what actually moved the needle, not vanity metrics',
  'Local team in Birkirkara — meet in person, in your time zone',
  'Proprietary tools like Hospitality 360 built specifically for the Malta market',
];

const caseStudies = [
  {
    industry: 'Restaurant — St Julian\'s',
    headline: 'Doubled monthly bookings in 11 weeks',
    detail:
      'Independent fine-dining restaurant. Rebuilt Instagram content strategy, launched targeted Meta ads to a 5km radius, deployed Hospitality 360 review automation. Result: +112% direct bookings via website and Google, 4.7 → 4.9 average Google rating.',
    metric: '+112%',
    metricLabel: 'monthly bookings',
  },
  {
    industry: 'iGaming — Sliema',
    headline: 'Cut blended CAC by 38%',
    detail:
      'Affiliate-led iGaming brand. Migrated paid social from a London agency to OARC. Restructured Meta and TikTok funnels, introduced AI-driven creative testing. CAC dropped from €184 to €114 within two months while volume held flat.',
    metric: '−38%',
    metricLabel: 'cost per acquisition',
  },
  {
    industry: 'Hotel — Valletta',
    headline: '€41k incremental direct bookings in 90 days',
    detail:
      'Boutique 22-room hotel. Replaced OTA dependency with a direct-booking funnel: paid search on branded and competitor terms, AI WhatsApp concierge, and a redesigned booking page. €41k of net-new direct revenue in the first quarter.',
    metric: '€41k',
    metricLabel: 'incremental direct revenue',
  },
];

export default function DigitalMarketingAgencyMalta({ faqs, offers }: Props) {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        {/* HERO */}
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Digital Marketing Agency Malta</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Birkirkara · Malta</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              The Digital Marketing Agency Malta Businesses Actually Use
            </h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              Strategy, creative, paid media, SEO, and AI automation — one team, one strategy. No handoffs between agencies. No generic playbooks. Local Birkirkara team, month-to-month engagements, results reported in revenue not impressions.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  Talk to OARC Digital <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <a href={`tel:${NAP.phoneE164}`}>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  <Phone className="mr-2 w-4 h-4" />{NAP.phoneDisplay}</Button>
              </a>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          {/* WHO WE ARE */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Malta's First Creative + AI Systems Agency</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Most marketing agencies in Malta are built around one specialism. Some run paid ads but cannot produce content. Some make beautiful creative but cannot prove ROI. Some build websites but disappear after launch. OARC Digital was founded in Birkirkara to fix that gap — one team that owns strategy, creative production, paid media, SEO, automation, and AI deployment end to end.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              We work with Malta restaurants in Sliema and St Julian&apos;s, hotels in Valletta and Gozo, iGaming operators in St Julian&apos;s and Ta&apos; Xbiex, retail brands across the islands, and B2B service companies that need predictable lead flow. Every engagement is built around a single question: which marketing investment will return the most revenue in the next 90 days, and how do we measure it honestly.
            </p>
            <p className="text-foreground leading-relaxed">
              The output is unusual for a Malta agency: weekly performance reports written by humans, monthly strategy calls that change tactics based on data, and proprietary tools — like Hospitality 360 for restaurants — built in-house for the Malta market.
            </p>
          </section>

          {/* WHY US */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Malta Businesses Choose OARC Digital</h2>
            <div className="space-y-4">
              {reasons.map((reason, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card border">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">{reason}</p>
                </div>
              ))}
            </div>
          </section>

          {/* COMPARISON TABLE */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">How OARC Compares</h2>
            <p className="text-muted-foreground mb-6">
              An honest side-by-side of OARC Digital versus the three other ways Malta businesses typically buy marketing.
            </p>
            <div className="overflow-x-auto rounded-xl border">
              <table className="w-full text-sm">
                <thead className="bg-muted/40">
                  <tr>
                    <th className="text-left p-4 font-semibold">Capability</th>
                    <th className="text-left p-4 font-semibold text-orange-600">OARC Digital</th>
                    <th className="text-left p-4 font-semibold">Traditional Malta agency</th>
                    <th className="text-left p-4 font-semibold">Freelance specialist</th>
                    <th className="text-left p-4 font-semibold">In-house hire</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr><td className="p-4 font-medium">Strategy + creative + paid in one team</td><td className="p-4 text-emerald-600">Yes</td><td className="p-4 text-muted-foreground">Partial</td><td className="p-4 text-muted-foreground">No</td><td className="p-4 text-muted-foreground">Rare</td></tr>
                  <tr><td className="p-4 font-medium">AI automation included</td><td className="p-4 text-emerald-600">Yes</td><td className="p-4 text-muted-foreground">No</td><td className="p-4 text-muted-foreground">No</td><td className="p-4 text-muted-foreground">Limited</td></tr>
                  <tr><td className="p-4 font-medium">Month-to-month</td><td className="p-4 text-emerald-600">Yes</td><td className="p-4 text-muted-foreground">12-month typical</td><td className="p-4 text-emerald-600">Yes</td><td className="p-4 text-muted-foreground">N/A</td></tr>
                  <tr><td className="p-4 font-medium">Local Malta team</td><td className="p-4 text-emerald-600">Yes</td><td className="p-4 text-emerald-600">Usually</td><td className="p-4 text-muted-foreground">Mixed</td><td className="p-4 text-emerald-600">Yes</td></tr>
                  <tr><td className="p-4 font-medium">Industry-specific tools</td><td className="p-4 text-emerald-600">Hospitality 360</td><td className="p-4 text-muted-foreground">No</td><td className="p-4 text-muted-foreground">No</td><td className="p-4 text-muted-foreground">No</td></tr>
                  <tr><td className="p-4 font-medium">Monthly cost (typical)</td><td className="p-4 font-semibold">€297 – €2,997</td><td className="p-4">€2,000 – €5,000</td><td className="p-4">€800 – €2,500</td><td className="p-4">€2,800 – €4,500 + benefits</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* PRICING / OFFERS */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Transparent Pricing</h2>
            <p className="text-muted-foreground mb-6">
              Three retainer tiers. No setup fees, no minimum contract length, and the scope is documented before you commit.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {offers.map((offer) => (
                <div key={offer.name} className="rounded-xl border p-6 bg-card flex flex-col">
                  <h3 className="font-bold text-lg mb-1">{offer.name}</h3>
                  <p className="text-3xl font-bold text-orange-600 mb-1">€{offer.priceFrom}</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">per month</p>
                  <p className="text-sm text-muted-foreground flex-1">{offer.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CASE STUDIES */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Recent Malta Results</h2>
            <p className="text-muted-foreground mb-6">
              Three engagements run from our Birkirkara office in the past 12 months. Metrics are measured in the client&apos;s own analytics, not ours.
            </p>
            <div className="space-y-4">
              {caseStudies.map((cs) => (
                <div key={cs.headline} className="rounded-xl border p-6 bg-card grid md:grid-cols-[1fr,160px] gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-orange-600 font-semibold mb-2">{cs.industry}</p>
                    <h3 className="text-lg font-bold mb-2">{cs.headline}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cs.detail}</p>
                  </div>
                  <div className="rounded-lg bg-orange-500/10 border border-orange-500/20 p-4 flex flex-col items-center justify-center text-center">
                    <p className="text-3xl font-bold text-orange-600">{cs.metric}</p>
                    <p className="text-xs text-muted-foreground mt-1">{cs.metricLabel}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* LOCAL NAP */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Visit OARC Digital in Birkirkara</h2>
            <div className="rounded-xl border bg-card p-6 grid md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-orange-500 mt-0.5" />
                  <address className="not-italic text-foreground leading-relaxed">
                    Level 1, The Brewhouse,<br />
                    Zone 2, Central Business District,<br />
                    Mdina Road, Birkirkara CBD 2010, Malta
                  </address>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <Phone className="w-5 h-5 text-orange-500" />
                  <a href={`tel:${NAP.phoneE164}`} className="text-foreground hover:text-orange-600">{NAP.phoneDisplay}</a>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <Mail className="w-5 h-5 text-orange-500" />
                  <a href={`mailto:${NAP.email}`} className="text-foreground hover:text-orange-600">{NAP.email}</a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-orange-500" />
                  <span className="text-foreground">Mon – Fri, 09:00 – 18:00 CET</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-orange-500" />
                  <span className="text-sm text-foreground">Serving Sliema, St Julian&apos;s, Valletta, Mosta, Msida, Gzira, and Gozo</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-orange-500" />
                  <span className="text-sm text-foreground">4.9 / 5 average client rating across 47 reviews</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-orange-500" />
                  <span className="text-sm text-foreground">€2.4M in tracked client revenue generated in 2025</span>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
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

          <RelatedLinks slug="/aeo/digital-marketing-agency-malta" />

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Ready to Talk Digital Marketing?</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">No pitch deck. No generic proposal. A direct conversation about what your Malta business needs and what results are realistic in the next 90 days.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">
                  Start a conversation <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <a href={`tel:${NAP.phoneE164}`}>
                <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 font-bold">
                  <Phone className="mr-2 w-4 h-4" /> Call {NAP.phoneDisplay}
                </Button>
              </a>
            </div>
          </div>
        </article>
      </main>
    </Layout>
  );
}
