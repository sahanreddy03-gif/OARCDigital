"use client";

import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CheckCircle2, ArrowRight, AlertTriangle, Zap } from 'lucide-react';
import Link from 'next/link';

const videoReachData = [
  { type: 'Trending audio + original concept', reach: 48000 },
  { type: 'Behind-the-scenes (no audio trend)', reach: 22000 },
  { type: 'Day-in-the-life format', reach: 31000 },
  { type: 'Tutorial / how it\'s made', reach: 27000 },
  { type: 'Straight product showcase', reach: 8000 },
  { type: 'Promotional / sale content', reach: 4500 },
  { type: 'Duet / stitch with trending video', reach: 38000 },
];

export default function TikTokMaltaBusiness() {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white">TikTok for Malta Businesses</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Creative Services · 2026</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              TikTok for Malta Businesses: The No-Nonsense Guide for 2026
            </h1>
            <p className="text-xl text-zinc-300 leading-relaxed">
              A Gzira restaurant with 200 Instagram followers got 94,000 views on their first TikTok. That is not a fluke — that is the algorithm. Here is how to use it deliberately.
            </p>
            <div className="flex items-center gap-4 mt-8 text-sm text-zinc-400">
              <span>By OARC Digital</span>
              <span>·</span>
              <span>March 2026</span>
              <span>·</span>
              <span>10 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <div className="bg-orange-50 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/20 rounded-xl p-6 mb-12">
            <h2 className="text-lg font-bold mb-3 text-orange-700 dark:text-orange-400">The Case for TikTok in Malta</h2>
            <p className="text-foreground">
              TikTok's algorithm does not require an existing audience. A brand-new account with zero followers can reach <strong>50,000+ people in 24 hours</strong> if the content is right. In Malta, where organic Instagram reach has collapsed and Meta ad costs have risen, TikTok is the highest-ROI platform for businesses willing to show up on camera.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-6">Why TikTok Works Differently From Instagram</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Instagram shows your content to your followers first, then extends reach if engagement is high. TikTok does the opposite: it shows your content to a test audience of strangers, measures how long they watch, and if the retention is good, it pushes the video to a larger pool. Your follower count is almost irrelevant for the first year.
          </p>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            This levels the playing field dramatically. A pizza restaurant in Zabbar with no social media history can outperform a well-established Valletta brand on TikTok if they make more compelling content. Malta's small population also means that a video reaching 30,000 people locally is a genuinely significant percentage of your addressable market.
          </p>

          <h2 className="text-2xl font-bold mb-6">Average Reach by Video Type — Malta Businesses</h2>
          <div className="bg-card border rounded-xl p-6 mb-12">
            <h3 className="font-bold mb-1">Average Video Views by Content Format</h3>
            <p className="text-sm text-muted-foreground mb-6">Based on Malta hospitality and retail accounts, 2025–2026</p>
            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={videoReachData} layout="vertical" margin={{ left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`} />
                <YAxis type="category" dataKey="type" width={220} tick={{ fontSize: 10 }} />
                <Tooltip formatter={(value) => `${Number(value).toLocaleString()} views`} />
                <Bar dataKey="reach" fill="#ff914d" name="Avg Views" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <h2 className="text-2xl font-bold mb-6">The Four Content Formats That Work in Malta</h2>
          <div className="space-y-6 mb-12">
            {[
              {
                format: 'Trending audio + original concept',
                how: 'Find a sound that is gaining momentum in the TikTok Creative Center (filter by your region, last 7 days). Build a concept around your business that fits the audio. Do not force it — the concept must make sense with the sound.',
                example: 'A Sliema cafe using a trending "satisfying process" audio with a slow-motion pour of their specialty coffee. 40,000+ views in the first week.',
                effort: 'Medium',
              },
              {
                format: 'Day-in-the-life format',
                how: 'Film 60–90 seconds of a real working day. Open the kitchen. Show the prep. Include one moment of imperfection — it makes content feel authentic. Narrate with text overlays or voiceover.',
                example: 'A Qormi restaurant showing prep from 7am to service at 12pm. Real, unglamorous, specific. 55,000 views because it felt genuine.',
                effort: 'Low',
              },
              {
                format: 'Duet or stitch with a viral food/travel video',
                how: 'Find a video with 500k+ views in your category. Duet it with your reaction or a relevant response. Your video inherits some of the original\'s momentum in the algorithm.',
                example: 'Stitching a "Malta food you must try" video with your own version of the dish. Drives discovery from people already interested in Malta food.',
                effort: 'Low',
              },
              {
                format: 'Tutorial / how it is made',
                how: 'Show the process. Pizza dough stretching, cocktail preparation, CBD product assembly — step-by-step content gets saves, which is a strong algorithmic signal.',
                example: 'A Sliema bar showing how they make a specific cocktail in 45 seconds. 3x the saves of any other video they had posted.',
                effort: 'Low-Medium',
              },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl border bg-card">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-lg">{item.format}</h3>
                  <span className="px-2 py-0.5 bg-muted rounded text-xs font-medium">Effort: {item.effort}</span>
                </div>
                <p className="text-muted-foreground mb-3 leading-relaxed">{item.how}</p>
                <div className="p-3 bg-orange-500/5 rounded-lg border border-orange-500/20">
                  <p className="text-sm text-orange-700 dark:text-orange-400"><strong>Real example:</strong> {item.example}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-4">How the TikTok Algorithm Actually Works</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            TikTok measures five signals in order of importance: watch time (did people watch to the end?), replays (did people watch twice?), shares (did people send it to someone?), comments, and likes. Watch time and replays are weighted far more heavily than likes. This means a video that 10,000 people watch to the end will outperform a video that 100,000 people skip after 2 seconds.
          </p>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            The practical implication: your first 2–3 seconds must stop the scroll. No slow intros, no logo animations, no "Welcome to our TikTok." Start with the most interesting moment or a question that creates tension. "How we prep 200 portions of pasta before 12pm" is a better opener than "Hi, we are Palino restaurant."
          </p>

          <h2 className="text-2xl font-bold mb-4">TikTok vs Instagram for Malta Businesses: Which to Prioritize</h2>
          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left p-3 font-semibold border">Factor</th>
                  <th className="text-left p-3 font-semibold border">TikTok</th>
                  <th className="text-left p-3 font-semibold border">Instagram</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Reach potential (no existing audience)', 'Very high', 'Low'],
                  ['Existing audience engagement', 'Medium', 'High'],
                  ['Production effort per video', 'Low-Medium', 'Medium-High'],
                  ['Tourist audience reach', 'High', 'Medium'],
                  ['Local Malta audience (35+)', 'Medium', 'High'],
                  ['Link in bio / conversion', 'Limited', 'Better (via Link in Bio)'],
                  ['Best for starting from zero', 'Yes', 'No'],
                ].map(([factor, tiktok, instagram], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/20'}>
                    <td className="p-3 border font-medium text-sm">{factor}</td>
                    <td className="p-3 border text-sm">{tiktok}</td>
                    <td className="p-3 border text-sm">{instagram}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-muted-foreground mb-12 leading-relaxed">
            The right answer for most Malta businesses is both — but with different strategies. TikTok for reach and new audience acquisition. Instagram for nurturing, community, and converting warm followers into customers. They are not competing; they are complementary.
          </p>

          <div className="space-y-4 mb-12">
            <h2 className="text-2xl font-bold mb-6">6 Mistakes Malta Businesses Make on TikTok</h2>
            {[
              'Posting once a week and expecting results. TikTok rewards consistency. Post at minimum 4 times per week for the first 3 months.',
              'Using the same video on Instagram Reels and TikTok without editing. TikTok videos with Instagram watermarks are suppressed by the algorithm. Always download your TikTok natively before crossposting.',
              'Making every video a promotion. Promotional content gets low watch time. The ratio should be 80% entertainment/value, 20% promotion.',
              'Ignoring comments in the first hour. Commenting back on your own video\'s comments in the first 60 minutes signals engagement to the algorithm and boosts distribution.',
              'Deleting videos that underperform. Old videos can resurface weeks later. Never delete — just keep posting.',
              'Not using text overlays. Most people watch TikTok without sound in public places. Text overlays ensure your message lands regardless.',
            ].map((mistake, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-card border">
                <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <p className="text-foreground">{mistake}</p>
              </div>
            ))}
          </div>

          <div className="bg-muted/30 rounded-xl p-6 mb-12">
            <h3 className="font-bold mb-4">Related Services</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="/services/social-media-creative-management"><span className="px-3 py-1 rounded-full border text-sm hover:border-orange-400 hover:text-orange-400 transition-all cursor-pointer">Social Media Management</span></Link>
              <Link href="/services/video-production"><span className="px-3 py-1 rounded-full border text-sm hover:border-orange-400 hover:text-orange-400 transition-all cursor-pointer">Video Production</span></Link>
              <Link href="/blog/instagram-marketing-malta"><span className="px-3 py-1 rounded-full border text-sm hover:border-orange-400 hover:text-orange-400 transition-all cursor-pointer">Instagram Marketing Malta</span></Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Do I need professional equipment to make TikTok content?', a: 'No. A modern smartphone in good lighting outperforms a professional camera with poor lighting. The single biggest upgrade for most Malta businesses is natural light — shoot near a window, not under fluorescent kitchen lighting.' },
              { q: 'How long should TikTok videos be for a Malta business?', a: '15–30 seconds for food and product content. 45–90 seconds for tutorials and day-in-the-life. TikTok allows up to 10 minutes but longer content underperforms for business accounts unless you have an established audience.' },
              { q: 'Should I use Malta-specific hashtags on TikTok?', a: 'Use 3–5 hashtags maximum. Include one Malta-specific tag (#malta, #maltafood, #visitmalta) and one niche tag. Hashtags on TikTok have far less impact than on Instagram — the algorithm primarily distributes based on content, not tags.' },
              { q: 'Can TikTok actually drive customers to a Malta restaurant?', a: 'Yes, directly. A viral video showing a specific dish can result in customers coming in and specifically ordering that item. The conversion from TikTok view to in-person visit is higher than most Malta business owners expect.' },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-card border">
                <h3 className="font-bold mb-2">{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Ready to Start Getting Views?</h2>
            <p className="text-white/90 mb-6">We build content strategies and manage TikTok for Malta businesses that want growth without spending hours on their phone. Free strategy call.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/35679711799" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="font-bold">WhatsApp Us Now <ArrowRight className="ml-2 w-4 h-4" /></Button>
              </a>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">Book a Call</Button>
              </Link>
            </div>
          </div>
        </article>
      </main>
    </Layout>
  );
}
