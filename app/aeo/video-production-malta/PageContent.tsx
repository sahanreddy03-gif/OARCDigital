import Layout from '@/components/layout/Layout';
import RelatedLinks from '@/components/RelatedLinks';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Link from 'next/link';

interface Faq { question: string; answer: string; }
interface Offer { name: string; priceFrom: number; unitText?: string; description?: string; }
interface Props { faqs: Faq[]; offers: Offer[]; }

const reasons = [
  'Platform-native edits — Reels, TikTok, Shorts and 16:9 cut from one shoot, not the same MP4 reformatted',
  'Sub-3-second hooks engineered for Meta and TikTok paid auctions, tested with multiple variants per concept',
  'In-house production end-to-end — direction, shooting, editing, colour, captioning, motion graphics under one roof',
  'Studio at the Brewhouse in Birkirkara plus on-location shooting across Sliema, St Julians, Valletta, Mosta and Gozo',
  'Performance read in Meta Ads Manager and TikTok Ads Manager — we judge a video on cost-per-result, not view count',
];

const formats = [
  { name: 'Brand films', detail: '60–120s anchor video that lives on the homepage and the about page. The single piece of content the rest of the year of social cuts hangs off.' },
  { name: 'Product + e-commerce video', detail: 'Demo, explainer, packaging-reveal and lifestyle product cuts &mdash; built for Shopify and WooCommerce PDPs and for paid retargeting.' },
  { name: 'Social cuts (Reels, TikTok, Shorts)', detail: '9:16 vertical content shot for native consumption &mdash; hard cuts, native captions, sound-on by default, multiple thumbnails per upload.' },
  { name: 'Paid ad creative', detail: 'Hook-led ad variants engineered for Meta Advantage+, TikTok Spark Ads and Google Performance Max, briefed off the actual targeting brief, not a generic moodboard.' },
  { name: 'Event coverage', detail: 'Launches, conferences, restaurant openings, weddings &mdash; multi-camera shoot with same-week social delivery and a long-form recap.' },
  { name: 'Founder + thought-leadership', detail: 'Studio talking-head series for B2B founders &mdash; LinkedIn cuts, podcast video, sales-collateral inserts &mdash; produced as a quarterly batch.' },
];

export default function VideoProductionMalta({ faqs, offers }: Props) {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Video Production Malta</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Answer Engine Optimised</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Video Production in Malta — Built for the Feed, Not the Festival</h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              OARC Digital produces brand films, product video, social cuts and paid ad creative for Malta SMEs. Studio at the Brewhouse in Birkirkara, on-location shoots across the islands, edits engineered for the platform that&apos;s actually paying back.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"><Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">Book a discovery call <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <a href="tel:+35679711799"><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><Phone className="mr-2 w-4 h-4" /> +356 7971 1799</Button></a>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Most Malta Video Budgets Underperform</h2>
            <p className="text-foreground leading-relaxed mb-4">
              The standard Malta video brief still arrives the same way it did in 2018: pick a videographer, shoot a single hero film, post it on YouTube, hope for a viral moment that never comes. The result is a beautifully colour-graded 90-second piece that earns 800 views, no purchases, and no reason to commission another. We see this pattern almost weekly when new clients walk into the Brewhouse showing us last year&apos;s production reel and asking why it stopped working.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The platforms have moved. Instagram Reels, TikTok and YouTube Shorts now drive the lion&apos;s share of consumer attention in Malta &mdash; particularly in Sliema and St Julians retail, in F&amp;B, in tourism, in iGaming brand work. Meta Ads Manager and TikTok Ads Manager reward sub-3-second hooks, hard cuts, native captions, multiple variants per concept. The 90-second hero film that wins on the festival circuit is the worst possible opening for a paid auction. The two skills are no longer the same skill.
            </p>
            <p className="text-foreground leading-relaxed">
              OARC Digital was built around that reality. We still produce brand films &mdash; every serious operator needs a 60–120s anchor video on the homepage and the LinkedIn header &mdash; but we shoot them knowing the same day&apos;s footage has to yield ten platform-native cuts and four paid ad variants. One day in production, a year of feed and ad inventory. That is the math that justifies the budget.
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Formats We Produce</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {formats.map((f) => (
                <div key={f.name} className="p-4 rounded-xl bg-card border">
                  <div className="font-bold mb-1">{f.name}</div>
                  <div className="text-sm text-muted-foreground">{f.detail}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Transparent Pricing</h2>
            <p className="text-muted-foreground mb-6">Three engagement shapes. Pick the one that fits the cadence you actually need.</p>
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
                <div className="flex items-center gap-3 mb-3"><Phone className="w-5 h-5 text-orange-500" /><a href="tel:+35679711799" className="text-foreground hover:text-orange-600">+356 7971 1799</a></div>
                <div className="flex items-center gap-3 mb-3"><Mail className="w-5 h-5 text-orange-500" /><a href="mailto:hello@oarcdigital.com" className="text-foreground hover:text-orange-600">hello@oarcdigital.com</a></div>
                <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-orange-500" /><span className="text-foreground">Mon – Fri, 09:00 – 18:00 CET</span></div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">In-house studio at the Brewhouse</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">On-location shoots across Malta + Gozo</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">CADM-authorised drone work where it adds value</span></div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why this matters for video in Malta</h2>
            <p className="text-foreground leading-relaxed">
              Malta is a visual market. The light is good, the architecture sells itself, the food and the coastline do half the work. The brands winning are not the ones spending most on production &mdash; they are the ones turning each shoot day into a month of feed inventory and ad variants. OARC Digital builds for that economics. One day in front of the camera should still be paying back six months later.
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

          <RelatedLinks slug="/aeo/video-production-malta" />

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Have a video brief? Let&apos;s scope it.</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">A 30-minute discovery call gets you a written treatment, a shot list and a fixed-price proposal &mdash; no moodboard padding.</p>
            <Link href="/contact"><Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">Start a conversation <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
