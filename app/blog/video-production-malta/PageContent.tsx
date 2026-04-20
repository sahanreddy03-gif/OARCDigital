"use client";

import JsonLd from '@/components/JsonLd';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CheckCircle2, ArrowRight, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

const costData = [
  { format: 'Smartphone Reel (DIY)', min: 0, max: 200 },
  { format: 'Branded short-form (agency)', min: 300, max: 800 },
  { format: 'Full Reel/TikTok production', min: 600, max: 1500 },
  { format: 'Corporate brand video (2–3 min)', min: 1500, max: 4000 },
  { format: 'YouTube / long-form (5–10 min)', min: 2000, max: 6000 },
  { format: 'TV / broadcast quality ad', min: 8000, max: 25000 },
];

export default function VideoProductionMalta() {
  return (
    <Layout>
      <JsonLd data={[{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Video Production in Malta: Costs, Formats, and What Actually Converts",
          "description": "Video production costs, formats, and conversion rates for Malta businesses in 2026.",
          "author": { "@type": "Organization", "name": "OARC Digital" },
          "publisher": { "@type": "Organization", "name": "OARC Digital", "url": "https://oarcdigital.com" },
          "datePublished": "2026-03-01",
          "dateModified": "2026-04-01",
        }, { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "How much does a professional video shoot cost in Malta?", "acceptedAnswer": { "@type": "Answer", "text": "A half-day professional shoot in Malta typically runs €400–€800. A full day with a two-person crew and professional editing runs €1,200–€3,000." } }, { "@type": "Question", "name": "What video formats work best for Malta businesses?", "acceptedAnswer": { "@type": "Answer", "text": "Short-form social (Reels and TikTok) delivers the highest reach and customer acquisition. Product videos on delivery platforms increase orders by 35–60%. Corporate brand video builds long-term trust." } }, { "@type": "Question", "name": "How often should a Malta business post video content?", "acceptedAnswer": { "@type": "Answer", "text": "Minimum 3–4 short-form videos per week on TikTok and Reels. This is achievable with a focused 2-hour filming session per week." } }] }]} />
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white">Video Production Malta</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Creative Services · 2026</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Video Production in Malta: Costs, Formats, and What Actually Converts
            </h1>
            <p className="text-xl text-zinc-300 leading-relaxed">
              A beautifully shot brand video sitting on a Vimeo page nobody visits is not marketing. A shaky phone video of your chef making pasta that gets 80,000 TikTok views is. Here is how to invest in video that works.
            </p>
            <div className="flex items-center gap-4 mt-8 text-sm text-zinc-400">
              <span>By OARC Digital</span>
              <span>·</span>
              <span>March 2026</span>
              <span>·</span>
              <span>12 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <div className="bg-orange-50 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/20 rounded-xl p-6 mb-12">
            <h2 className="text-lg font-bold mb-3 text-orange-700 dark:text-orange-400">The Most Important Thing to Understand</h2>
            <p className="text-foreground">
              Production value and conversion rate are not correlated. The video format that costs the most to produce is often not the format that brings in the most customers. <strong>Match production level to the platform and the purpose — not to what impresses you.</strong>
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-6">Video Production Cost Ranges in Malta</h2>
          <div className="bg-card border rounded-xl p-6 mb-12">
            <h3 className="font-bold mb-1">Malta Video Production Cost by Format (2026)</h3>
            <p className="text-sm text-muted-foreground mb-6">Per video / per production session. Ranges reflect DIY to full agency production.</p>
            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={costData} layout="vertical" margin={{ left: 30 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" tickFormatter={(v) => `€${v}`} />
                <YAxis type="category" dataKey="format" width={220} tick={{ fontSize: 10 }} />
                <Tooltip formatter={(value) => `€${value}`} />
                <Bar dataKey="min" fill="#ff914d" name="Min Cost" />
                <Bar dataKey="max" fill="#c4ff4d" name="Max Cost" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <h2 className="text-2xl font-bold mb-6">Video Format Breakdown: What Works Where</h2>
          <div className="space-y-6 mb-12">
            {[
              {
                format: 'Short-form social (Reels / TikTok) — 15–60 seconds',
                bestFor: 'Customer acquisition, brand awareness, reach',
                production: 'Smartphone to professional camera. Most effective content is often the most natural.',
                cost: '€0 DIY to €800 produced',
                converts: 'High — direct call to action possible. Drives in-store visits and reservation enquiries.',
                insight: 'This is where 90% of Malta businesses should be investing video budget right now. The algorithmic reach potential of a single short-form video exceeds the combined reach of any other format at any budget level.',
              },
              {
                format: 'Stories — 5–15 seconds',
                bestFor: 'Existing audience retention, time-sensitive offers, event promotion',
                production: 'Always smartphone. Polished Stories underperform raw ones.',
                cost: '€0 — do not spend money on Stories production',
                converts: 'Medium — drives link clicks, DMs, and reservation enquiries from warm audiences.',
                insight: 'Stories are a retention tool, not an acquisition tool. Do not confuse the two.',
              },
              {
                format: 'Corporate brand video — 2–3 minutes',
                bestFor: 'Website homepage, investor pitches, staff recruitment, long-term brand building',
                production: 'Professional production required. This represents your brand at its best.',
                cost: '€1,500–€4,000 in Malta for quality work',
                converts: 'Low direct conversion, high trust signal. Websites with a homepage brand video have 25–40% higher conversion rates.',
                insight: 'Every serious Malta business should have one well-produced brand video that lives permanently on their homepage. Budget for it once and use it for 2–3 years.',
              },
              {
                format: 'Product / menu videos — 30–90 seconds',
                bestFor: 'Social media, delivery platforms, website menus',
                production: 'Food requires proper lighting. A professional food shoot for 5–8 dishes in one session is cost-effective.',
                cost: '€500–€1,500 for a session producing 5–8 videos',
                converts: 'Very high for food and hospitality. Video of a dish on a delivery platform increases that item\'s orders by 35–60%.',
                insight: 'The highest-ROI video investment for Malta restaurants is not a brand video — it is video of your top 5 menu items for your Wolt/Bolt listings and social channels.',
              },
              {
                format: 'Paid ad video — 6–30 seconds',
                bestFor: 'Meta and Google paid campaigns targeting new audiences',
                production: 'Built for interruption. Must hook in 3 seconds. Message must work without sound.',
                cost: '€300–€1,000 per ad creative',
                converts: 'Depends entirely on targeting and offer, not production quality. A €300 ad that speaks directly to a pain point will outperform a €2,000 cinematic ad targeting the wrong audience.',
                insight: 'Test multiple short ad creatives at low budget before investing in high production value. The market tells you what works.',
              },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl border bg-card">
                <h3 className="font-bold text-lg mb-3">{item.format}</h3>
                <div className="grid md:grid-cols-2 gap-3 mb-4">
                  {[
                    ['Best for', item.bestFor],
                    ['Production', item.production],
                    ['Cost range', item.cost],
                    ['Conversion potential', item.converts],
                  ].map(([label, value], j) => (
                    <div key={j}>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">{label}</p>
                      <p className="text-sm">{value}</p>
                    </div>
                  ))}
                </div>
                <div className="p-3 bg-orange-500/5 rounded-lg border border-orange-500/20">
                  <p className="text-sm text-orange-700 dark:text-orange-400"><strong>Key insight:</strong> {item.insight}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-4">DIY vs Professional: When to Invest in Production</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            The question is not "should I film myself or hire a team?" The question is "what does this specific video need to achieve, and what level of production serves that goal?"
          </p>
          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left p-3 font-semibold border">Use case</th>
                  <th className="text-left p-3 font-semibold border">DIY or Professional?</th>
                  <th className="text-left p-3 font-semibold border">Why</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Daily TikTok / Reels content', 'DIY', 'Authenticity matters more than polish. Consistency matters more than perfection.'],
                  ['Specific dish showcase for social', 'Professional (or semi-professional)', 'Food photography and videography requires proper lighting and skill to make food look appetizing.'],
                  ['Website homepage hero video', 'Professional', 'This is your first impression for every website visitor. One high-quality production lasts years.'],
                  ['Paid advertising creative', 'DIY first to test, professional to scale', 'Test messaging and hooks with low-cost production. Only invest in professional once you know what converts.'],
                  ['Behind-the-scenes content', 'Always DIY', 'Over-produced behind-the-scenes content loses its authenticity and purpose.'],
                  ['Corporate pitch / investor video', 'Professional', 'This video needs to build trust with high-stakes audiences. Under-investment signals under-professionalism.'],
                ].map(([useCase, rec, why], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/20'}>
                    <td className="p-3 border text-sm font-medium">{useCase}</td>
                    <td className="p-3 border text-sm font-semibold text-orange-600">{rec}</td>
                    <td className="p-3 border text-sm text-muted-foreground">{why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mb-6">Optimal Video Lengths by Platform</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {[
              { platform: 'TikTok', optimal: '15–30 seconds', max: '10 minutes', note: 'Algorithm rewards videos people watch to the end. Shorter = higher completion rate.' },
              { platform: 'Instagram Reels', optimal: '15–30 seconds', max: '90 seconds', note: 'Reels over 60 seconds see significant drop in reach.' },
              { platform: 'Instagram Stories', optimal: '5–10 seconds', max: '15 seconds per slide', note: 'Multi-slide Stories keep people tapping. Single long Story loses viewers.' },
              { platform: 'YouTube', optimal: '8–12 minutes', max: 'No limit', note: 'Longer content enables mid-roll ads and performs better in search.' },
              { platform: 'Facebook Feed', optimal: '1–3 minutes', max: '240 minutes', note: 'Facebook users skew older. Slightly longer content performs better than on Instagram.' },
              { platform: 'Website homepage', optimal: '60–90 seconds', max: '3 minutes', note: 'Autoplay muted hero videos should deliver the core message in under 90 seconds.' },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-card border">
                <p className="font-bold text-orange-600 mb-1">{item.platform}</p>
                <p className="text-sm font-semibold mb-1">Optimal: {item.optimal}</p>
                <p className="text-xs text-muted-foreground">{item.note}</p>
              </div>
            ))}
          </div>

          <div className="bg-muted/30 rounded-xl p-6 mb-12">
            <h3 className="font-bold mb-4">Related Services</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="/services/video-production"><span className="px-3 py-1 rounded-full border text-sm hover:border-orange-400 hover:text-orange-400 transition-all cursor-pointer">Video Production</span></Link>
              <Link href="/services/social-media-creative-management"><span className="px-3 py-1 rounded-full border text-sm hover:border-orange-400 hover:text-orange-400 transition-all cursor-pointer">Social Media Management</span></Link>
              <Link href="/blog/tiktok-for-malta-businesses"><span className="px-3 py-1 rounded-full border text-sm hover:border-orange-400 hover:text-orange-400 transition-all cursor-pointer">TikTok for Malta Businesses</span></Link>
              <Link href="/blog"><span className="px-3 py-1 rounded-full border text-sm hover:border-orange-400 hover:text-orange-400 transition-all cursor-pointer">More Articles</span></Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'How much does a professional video shoot cost in Malta?', a: 'A half-day professional shoot in Malta (4 hours, one person crew, good equipment) typically runs €400–€800. A full day with a two-person crew and professional editing runs €1,200–€3,000. Larger productions with multiple crew, actors, or locations scale from there.' },
              { q: 'Do I need to hire a dedicated videographer or can my marketing agency handle it?', a: 'Agencies like OARC handle video production as part of a broader content strategy — which means the video is designed to perform on specific platforms with specific distribution plans, not just shot and delivered as raw footage.' },
              { q: 'How often should a Malta restaurant post video content?', a: 'Minimum 3–4 short-form videos per week on TikTok and/or Reels. This sounds like a lot but it is achievable with a 2-hour filming session per week that produces multiple pieces of content. One session, multiple angles, multiple cuts.' },
              { q: 'Is it worth investing in vertical video vs horizontal?', a: 'For social media: always vertical (9:16). For YouTube and website: horizontal (16:9). For a paid production, shoot both orientations simultaneously — the cost increase is minimal and you get assets for every platform.' },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-card border">
                <h3 className="font-bold mb-2">{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Need Video Content That Actually Performs?</h2>
            <p className="text-white/90 mb-6">We produce short-form and long-form video for Malta businesses — strategy, production, editing, and platform distribution included. Let us show you what we would do for your brand.</p>
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
