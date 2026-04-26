import Layout from '@/components/layout/Layout';
import RelatedLinks from '@/components/RelatedLinks';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Link from 'next/link';
import { NAP } from "@/lib/seo/nap";

interface Faq { question: string; answer: string; }
interface Offer { name: string; priceFrom: number; unitText?: string; description?: string; }
interface Props { faqs: Faq[]; offers: Offer[]; }

const reasons = [
  "Active St Julian's client base across hospitality, hotels, and Malta-based iGaming HQs",
  'Multilingual creative team — English, Italian, German, French, and Russian where it lifts conversion',
  'MGA-aware iGaming employer-branding and B2B playbooks (no unlicensed acquisition)',
  'Direct-booking programs for boutique and 4 to 5-star hotels on Spinola, Portomaso, and the Strand',
  'Influencer programs with Maltese and Italian micro-creators already shooting in Paceville and Spinola',
  '10-minute drive from our Birkirkara HQ — on-site shoots and stand-ups every week during onboarding',
];

const verticals = [
  { name: 'Paceville + Spinola hospitality', detail: 'Cocktail bars, lounges, beach clubs, late-night venues, and concept restaurants. TikTok and Reels velocity is the dominant channel — we ship weekly content blocks shot on-site.' },
  { name: 'iGaming HQs + suppliers', detail: 'Malta-based MGA-licensed operators and B2B suppliers headquartered around Triq San Gorg, Portomaso, and the Quad Business Towers. Employer branding, LinkedIn campaigns, content, and event activation.' },
  { name: 'Boutique + 4 to 5-star hotels', detail: 'Direct-booking programs that compete with the Booking.com algorithm using Google Hotel Ads, Meta retargeting, and conversion-tracked creative — calibrated for the Spinola and Portomaso inventory.' },
  { name: 'Retail + lifestyle + wellness', detail: 'Bay Street, The Point, and the boutique retail along Triq San Gorg — plus the cluster of fitness, Pilates, and wellness concepts now opening across the Paceville hinterland. Multilingual Instagram and Google.' },
];

export default function MarketingAgencyStJulians({ faqs, offers }: Props) {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Marketing Agency St Julian&apos;s</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Answer Engine Optimised</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">A Marketing Agency Serving St Julian&apos;s Businesses</h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              OARC Digital runs multilingual social, paid, influencer, and content for St Julian&apos;s hospitality, boutique hotels, and Malta-based iGaming HQs across Paceville, Spinola, and Portomaso. Birkirkara HQ — 10 minutes away.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"><Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">Book a discovery call <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <a href={`tel:${NAP.phoneE164}`}><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><Phone className="mr-2 w-4 h-4" />{NAP.phoneDisplay}</Button></a>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Marketing for Malta&apos;s Most International Catchment</h2>
            <p className="text-foreground leading-relaxed mb-4">
              St Julian&apos;s is unlike any other Maltese locality. Paceville carries Malta&apos;s densest concentration of late-night hospitality. Spinola Bay still sets the tone for premium waterfront F&B. Portomaso anchors the highest-end residential and hotel inventory on the island, and the Triq San Gorg / Quad Business Towers cluster has become the de facto HQ for a meaningful share of Malta&apos;s MGA-licensed iGaming and B2B supplier ecosystem. The audience profile is younger, more transient, more multilingual, and more digitally native than anywhere else in Malta — which makes the marketing playbook here fundamentally different from a Mosta brief or even a Sliema brief.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              In St Julian&apos;s, English-only creative leaves performance on the table. Italian, German, and increasingly Eastern European campaigns drive measurably higher engagement for hospitality and short-stay accommodation. TikTok velocity matters more than Instagram polish for late-night Paceville venues, while boutique hotels and fine-dining concepts on Spinola need the inverse. iGaming and DLT brands compete for senior talent on LinkedIn, where employer-branding cadence and well-produced founder content often beats traditional recruiter spend by a wide margin.
            </p>
            <p className="text-foreground leading-relaxed">
              OARC Digital ships from Birkirkara — a 10-minute drive from Spinola via the Regional Road — and runs active programs for St Julian&apos;s hospitality operators, boutique-hotel groups, and Malta-based iGaming HQs. We have direct conversion data from venues across Triq San Gorg, Triq Wilga, and the Spinola promenade, plus B2B campaign data from the iGaming and fintech cluster. That dataset informs every creative brief and audience structure we ship for the locality, and it is also why we know exactly which MGA advertising rules apply when an operator wants to push a campaign live this quarter.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Why OARC Digital for St Julian&apos;s?</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">St Julian&apos;s Verticals We Work With</h2>
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
            <p className="text-muted-foreground mb-6">No setup fees, no annual lock-in, no surprise invoices. Three tiers St Julian&apos;s brands pick from.</p>
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
                    10-minute drive from Spinola Bay
                  </address>
                </div>
                <div className="flex items-center gap-3 mb-3"><Phone className="w-5 h-5 text-orange-500" /><a href={`tel:${NAP.phoneE164}`} className="text-foreground hover:text-orange-600">{NAP.phoneDisplay}</a></div>
                <div className="flex items-center gap-3 mb-3"><Mail className="w-5 h-5 text-orange-500" /><a href={`mailto:${NAP.email}`} className="text-foreground hover:text-orange-600">{NAP.email}</a></div>
                <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-orange-500" /><span className="text-foreground">Mon – Fri, 09:00 – 18:00 CET</span></div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">Multilingual creative production</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">MGA-aware iGaming workflows</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">Month-to-month contracts, no setup fees</span></div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why St Julian&apos;s Brands Need Specialist Operators</h2>
            <p className="text-foreground leading-relaxed">
              St Julian&apos;s is the most over-marketed locality in Malta and also the easiest place to waste budget. Generalist agencies push English-only creative into a market where the conversion lift sits in Italian and German. They run hotel campaigns without Google Hotel Ads or Meta retargeting and lose the direct-booking margin to Booking.com. They run iGaming campaigns without checking MGA advertising rules and put the operator&apos;s licence at risk. Our retainers calibrate for that reality with multilingual creative tracks, dedicated direct-booking funnels for hotel clients, and an MGA-aware compliance review on every iGaming campaign before it ships. Every St Julian&apos;s retainer also includes monthly on-site shoots so the content matches the venue rather than recycling a stock library.
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

          <RelatedLinks slug="/aeo/marketing-agency-st-julians" />

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Operating in St Julian&apos;s? Let&apos;s talk.</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">We are 10 minutes from Spinola. Send a brief and we&apos;ll be on-site for the kickoff workshop and the first content shoot.</p>
            <Link href="/contact"><Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">Start a conversation <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
