"use client";

import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CheckCircle2, ArrowRight, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

const platformData = [
  { platform: 'Google Search', minCPC: 0.80, maxCPC: 3.50 },
  { platform: 'Facebook/Instagram', minCPC: 0.20, maxCPC: 0.90 },
  { platform: 'Google Display', minCPC: 0.10, maxCPC: 0.40 },
];

const budgetData = [
  { platform: 'Google Search', budget: 1250 },
  { platform: 'Facebook/Instagram', budget: 900 },
  { platform: 'Google Display', budget: 500 },
];

export default function PaidAdvertisingMalta() {
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
              <span className="text-white">Paid Advertising Malta</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Paid Media · 2026</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Facebook and Google Ads in Malta: What Paid Advertising Actually Costs
            </h1>
            <p className="text-xl text-zinc-300 leading-relaxed">
              Malta has one of the most competitive paid advertising markets in Europe per capita. Small island, concentrated business community, and most sectors have at least 3–5 businesses running ads. Here's how to not waste your budget.
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
            <h2 className="text-lg font-bold mb-3 text-orange-700 dark:text-orange-400">Quick Answer</h2>
            <p className="text-foreground">
              Minimum <strong>€300/month</strong> to gather any data. <strong>€800–€2,000/month</strong> combined budget across Google and Facebook to test and optimise properly. Under €300, you are not getting enough impressions to learn anything meaningful.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-6">The Real Numbers — Malta Ad Costs 2026</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left p-3 font-semibold border">Platform</th>
                  <th className="text-left p-3 font-semibold border">Avg CPC (Malta)</th>
                  <th className="text-left p-3 font-semibold border">Avg CPM</th>
                  <th className="text-left p-3 font-semibold border">Realistic Monthly Budget</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Google Search', '€0.80–€3.50', '—', '€500–€2,000'],
                  ['Facebook/Instagram', '€0.20–€0.90', '€4–€12', '€300–€1,500'],
                  ['Google Display', '€0.10–€0.40', '€1.50–€4', '€200–€800'],
                ].map(([platform, cpc, cpm, budget], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/20'}>
                    <td className="p-3 border font-medium text-sm">{platform}</td>
                    <td className="p-3 border text-sm font-semibold text-orange-600">{cpc}</td>
                    <td className="p-3 border text-sm">{cpm}</td>
                    <td className="p-3 border text-sm">{budget}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mb-12">These are averages across industries. iGaming and financial services skew significantly higher. Hospitality and food are on the lower end.</p>

          <h2 className="text-2xl font-bold mb-4">What "Running Ads" Actually Means</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            There's a difference between boosting posts (what most Malta SMEs do) and running a proper paid media strategy. Boosted posts are not advertising — they're paid reach for content that should have performed organically. Real advertising means targeting specific audiences, testing creative, monitoring conversion data, and optimising weekly.
          </p>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            The businesses winning on Facebook ads in Malta are not spending more — they're testing more. 5 ad variants, 3 audiences, 2 creatives. Kill the losers in week 1. Scale the winner in week 2.
          </p>

          <h2 className="text-2xl font-bold mb-6">Google vs Facebook for Malta Businesses</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                platform: 'Google Search',
                mechanic: 'Captures intent — someone is actively looking for what you sell.',
                roi: 'Faster ROI but higher cost per click.',
                best: 'Businesses with high-intent keywords (e.g. "restaurant Sliema", "web designer Malta").',
              },
              {
                platform: 'Facebook / Instagram',
                mechanic: 'Creates intent — you interrupt someone\'s scroll with something relevant enough that they stop.',
                roi: 'Cheaper reach but requires stronger creative and longer buying cycles.',
                best: 'Brand building, retargeting, and businesses with strong visual products.',
              },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl border bg-card">
                <h3 className="font-bold text-lg mb-3 text-orange-600">{item.platform}</h3>
                <p className="text-sm text-muted-foreground mb-2"><strong>How it works:</strong> {item.mechanic}</p>
                <p className="text-sm text-muted-foreground mb-2"><strong>ROI profile:</strong> {item.roi}</p>
                <p className="text-sm text-muted-foreground"><strong>Best for:</strong> {item.best}</p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground mb-12 leading-relaxed">
            The right answer for most Malta businesses: both, with a combined budget of €800–€2,000/month minimum to see meaningful data.
          </p>

          <h2 className="text-2xl font-bold mb-4">Retargeting: The Highest-ROI Ad Spend Nobody Uses</h2>
          <div className="p-6 rounded-xl bg-orange-500/5 border border-orange-500/20 mb-12">
            <p className="text-foreground leading-relaxed">
              Retargeting is the highest-ROI ad spend available to Malta businesses right now and almost nobody is using it properly. If someone visited your website, viewed your menu, or watched 50% of your video — you can serve them a specific ad. That audience converts at 3–5x the rate of cold traffic. Most Malta ad budgets go entirely to cold audiences. That's backwards.
            </p>
          </div>

          <div className="bg-muted/30 rounded-xl p-6 mb-12">
            <h3 className="font-bold mb-4">Related Services</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="/services/paid-advertising"><span className="px-3 py-1 rounded-full border text-sm hover:border-orange-400 hover:text-orange-400 transition-all cursor-pointer">Paid Advertising</span></Link>
              <Link href="/blog/ai-marketing-malta"><span className="px-3 py-1 rounded-full border text-sm hover:border-orange-400 hover:text-orange-400 transition-all cursor-pointer">AI Marketing Malta</span></Link>
              <Link href="/blog/social-media-management-cost-malta"><span className="px-3 py-1 rounded-full border text-sm hover:border-orange-400 hover:text-orange-400 transition-all cursor-pointer">Social Media Costs Malta</span></Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'How much should I spend on ads in Malta?', a: 'Minimum €300/month to gather data. €800/month to test properly. Under €300, you are not getting enough impressions to learn anything.' },
              { q: 'Do Facebook ads work for restaurants in Malta?', a: 'Yes — but only with strong creative. A blurry photo and "Come visit us" will burn your budget. A video of the food being prepared with a specific offer converts.' },
              { q: 'Should I run ads myself or hire an agency?', a: 'Self-managed works at low budgets if you are willing to learn. At €1,000+/month, the cost of poor optimisation exceeds agency fees. The break-even point for most Malta businesses is around €600–€800/month ad spend.' },
              { q: 'How long before ads show results?', a: 'Google Search can show results within days. Facebook needs 2–4 weeks of data before the algorithm optimises properly. Any agency promising results in week 1 is measuring the wrong thing.' },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-card border">
                <h3 className="font-bold mb-2">{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Get a Free Ad Account Audit</h2>
            <p className="text-white/90 mb-6">We will review your current campaigns (or tell you what to run if you don't have any) and show you exactly where the budget should go. No charge.</p>
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
