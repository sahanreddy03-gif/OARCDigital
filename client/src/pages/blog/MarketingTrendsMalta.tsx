
import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
    Legend,
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from 'recharts';
import {
    TrendingUp,
    Smartphone,
    Video,
    Bot,
    MessageCircle,
    ShoppingBag,
    ArrowRight,
    Zap,
    Globe
} from 'lucide-react';
import { Link } from 'wouter';

const SocialPlatformComparison = [
    { subject: 'Organic Reach', A: 20, B: 90, C: 40, fullMark: 100 }, // A=FB, B=TikTok, C=Insta
    { subject: 'Conversion', A: 80, B: 30, C: 60, fullMark: 100 },
    { subject: 'Cost (Low is Good)', A: 80, B: 90, C: 60, fullMark: 100 },
    { subject: 'B2B Suitability', A: 40, B: 10, C: 30, fullMark: 100 },
    { subject: 'Video Priority', A: 50, B: 100, C: 80, fullMark: 100 },
];

const VideoStats = [
    { name: 'Short Form (TikTok/Reels)', value: 82 },
    { name: 'YouTube', value: 65 },
    { name: 'Stories', value: 70 },
    { name: 'Live Stream', value: 25 },
];

export default function MarketingTrendsMalta() {
    const publishDate = '2024-12-18';

    return (
        <Layout>
            <SEOHead
                title="Malta Business Marketing in 2025: What's Working Now | OARC Digital"
                description="Exclusive 2025 report: discover the marketing trends actually driving revenue in Malta. From TikTok for local business to AI automation, see what's working now."
                canonicalUrl="https://oarcdigital.com/blog/marketing-trends-malta-2025"
                ogType="article"
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": "Malta Business Marketing in 2025: What's Working Now",
                    "image": "https://oarcdigital.com/assets/blog/malta-marketing-2025.jpg",
                    "author": {
                        "@type": "Organization",
                        "name": "OARC Digital Team"
                    },
                    "publisher": {
                        "@type": "Organization",
                        "name": "OARC Digital",
                        "logo": {
                            "@type": "ImageObject",
                            "url": "https://oarcdigital.com/logo.png"
                        }
                    },
                    "datePublished": publishDate,
                    "dateModified": publishDate,
                }}
                schemaId="article-3"
            />

            <article className="min-h-screen bg-background text-foreground font-sans">
                {/* Hero Section */}
                <header className="relative w-full py-24 bg-zinc-50 dark:bg-zinc-950 border-b">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="flex-1">
                                <Badge className="mb-4 bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400 border-none">
                                    2025 Trend Report
                                </Badge>
                                <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                                    Malta Marketing <br /><span className="text-purple-600">What's Working Now</span>
                                </h1>
                                <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                                    Stop looking at US case studies. Here is the real data on what is driving revenue for Maltese businesses in 2025.
                                </p>
                                <div className="flex items-center gap-4 text-sm font-medium text-slate-500">
                                    <span className="flex items-center gap-1"><Zap className="w-4 h-4 text-yellow-500" /> Real Client Data</span>
                                    <span className="flex items-center gap-1"><Globe className="w-4 h-4" /> Malta Specific</span>
                                </div>
                            </div>
                            <div className="flex-1 w-full max-w-sm">
                                <div className="aspect-square bg-gradient-to-tr from-purple-500 to-pink-500 rounded-2xl p-1 shadow-2xl rotate-3 hover:rotate-0 transition-transform">
                                    <div className="bg-white dark:bg-zinc-900 w-full h-full rounded-xl flex items-center justify-center p-6 text-center">
                                        <div>
                                            <div className="text-5xl font-bold mb-2">2025</div>
                                            <div className="text-sm uppercase tracking-widest text-muted-foreground">The Year of AI & Video</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="max-w-4xl mx-auto px-6 py-16">

                    {/* Introduction */}
                    <section className="prose prose-lg dark:prose-invert max-w-none mb-16">
                        <p className="lead text-2xl font-light">
                            We analyzed data from 50+ local campaigns in 2024 to predict what will happen in 2025. The results? <strong>Static images are dying. Generic ads are ignored. AI is exploding.</strong>
                        </p>
                        <p>
                            The Maltese market has matured. The days of "posting whatever" on Facebook are over. The MDIA (Malta Digital Innovation Authority) is pushing tech adoption, and consumers—whether locals in Mosta or expats in Sliema—expect seamless digital experiences.
                        </p>
                    </section>

                    {/* Section 1: Social Media Wars */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                            <Smartphone className="w-8 h-8 text-purple-600" /> The Social Media Shift
                        </h2>

                        <div className="grid md:grid-cols-2 gap-12 mb-12">
                            <div className="h-[300px]">
                                <h4 className="text-center font-bold mb-4">Platform Strength Analysis</h4>
                                <ResponsiveContainer width="100%" height="100%">
                                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={SocialPlatformComparison}>
                                        <PolarGrid stroke="#e5e7eb" />
                                        <PolarAngleAxis dataKey="subject" tick={{ fill: '#6b7280', fontSize: 10 }} />
                                        <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} />
                                        <Radar name="Facebook" dataKey="A" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
                                        <Radar name="TikTok" dataKey="B" stroke="#000000" fill="#000000" fillOpacity={0.1} />
                                        <Radar name="Instagram" dataKey="C" stroke="#ec4899" fill="#ec4899" fillOpacity={0.3} />
                                        <Legend />
                                        <Tooltip />
                                    </RadarChart>
                                </ResponsiveContainer>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-4">The Verdict</h3>
                                <div className="space-y-4">
                                    <div className="border-l-4 border-blue-500 pl-4">
                                        <h4 className="font-bold text-blue-600">Facebook: The Old Reliable</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">Still #1 for reaching 35+ demographics in Malta. Excellent for events, community groups (Mellieha Residents, etc.), and direct lead gen forms.</p>
                                    </div>
                                    <div className="border-l-4 border-pink-500 pl-4">
                                        <h4 className="font-bold text-pink-600">Instagram: The Aesthetic Engine</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">If you sell food, fashion, or experiences (hotels), you MUST be here. "Reels" are currently getting 4x the reach of photo posts.</p>
                                    </div>
                                    <div className="border-l-4 border-black dark:border-white pl-4">
                                        <h4 className="font-bold text-black dark:text-white">TikTok: The Wildcard</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">Undervalued in Malta. Organic reach is insane. A video from a local bakery can hit 50k views (10% of the population) for free.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: Video */}
                    <section className="mb-20">
                        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
                            <div className="relative z-10">
                                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                    <Video className="w-8 h-8 text-red-500" /> Video is King (Finally)
                                </h2>
                                <p className="text-lg text-slate-300 mb-8">
                                    In 2025, if you don't have video, you don't have marketing.
                                    The average Maltese user watches <strong>90 minutes</strong> of vertical video per day.
                                </p>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {VideoStats.map((stat, i) => (
                                        <div key={i} className="bg-white/10 p-4 rounded-xl backdrop-blur">
                                            <div className="text-2xl font-bold text-red-400">{stat.value}%</div>
                                            <div className="text-xs text-slate-300">{stat.name} Usage</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: AI Trends */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                            <Bot className="w-8 h-8 text-green-600" /> AI & Automation
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2"><MessageCircle className="w-5 h-5" /> Conversational Commerce</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        People hate calling. They want to WhatsApp you.
                                    </p>
                                    <p className="text-sm font-medium">
                                        <strong>Trend:</strong> AI Greeting Bots on WhatsApp Business API.
                                    </p>
                                    <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded mt-2 text-xs font-mono">
                                        User: "Do you have vegan options?"<br />
                                        AI: "Yes! Here is our vegan menu PDF. Would you like to book a table?"
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2"><ShoppingBag className="w-5 h-5" /> Hyper-Personalization</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Generic emails get deleted.
                                    </p>
                                    <p className="text-sm font-medium">
                                        <strong>Trend:</strong> Using data to predict purchases.
                                    </p>
                                    <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded mt-2 text-xs font-mono">
                                        "Hey Mario, it's been 30 days since you bought dog food. Running low? Here is 10% off."
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* Section 4: Industry Scenarios */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold mb-8">Industry Snapshots: 2025</h2>
                        <div className="space-y-6">
                            {[
                                {
                                    ind: "Tourism (Hotel)",
                                    scenario: "The 'St. Julian's Hotel' Strategy",
                                    desc: "Instead of generic room photos, they post POV TikToks: 'Walking from our lobby to the beach in 2 minutes.' They bid on keywords like 'honeymoon malta' not just 'hotel malta'."
                                },
                                {
                                    ind: "iGaming",
                                    scenario: "The Compliance-First Content",
                                    desc: "With tightening regulations, smart iGaming brands are pivoting to 'Educational Entertainment' on YouTube and influencer partnerships rather than direct acquisition ads."
                                },
                                {
                                    ind: "Retail",
                                    scenario: "The 'Try-On' AR Experience",
                                    desc: "Local fashion brands using Instagram filters to let users 'try on' sunglasses virtually before ordering for same-day delivery."
                                }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-6 border rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                                    <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 font-bold">
                                        {i + 1}
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold uppercase text-muted-foreground mb-1">{item.ind}</div>
                                        <h3 className="text-xl font-bold mb-2">{item.scenario}</h3>
                                        <p className="text-slate-600 dark:text-slate-300">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section 5: What's NOT Working */}
                    <section className="mb-20 bg-red-50 dark:bg-red-900/10 p-8 rounded-2xl border border-red-100 dark:border-red-900/30">
                        <h3 className="text-2xl font-bold text-red-600 mb-4">What's Dead in 2025? 💀</h3>
                        <ul className="grid md:grid-cols-2 gap-4">
                            <li className="flex items-center gap-2 text-red-800 dark:text-red-300"><div className="w-2 h-2 rounded-full bg-red-500" /> Buying Email Lists (GDPR suicide)</li>
                            <li className="flex items-center gap-2 text-red-800 dark:text-red-300"><div className="w-2 h-2 rounded-full bg-red-500" /> Stock Photos of 'Business People'</li>
                            <li className="flex items-center gap-2 text-red-800 dark:text-red-300"><div className="w-2 h-2 rounded-full bg-red-500" /> Inconsistent Posting (Algorithm punishment)</li>
                            <li className="flex items-center gap-2 text-red-800 dark:text-red-300"><div className="w-2 h-2 rounded-full bg-red-500" /> Non-Mobile Websites</li>
                        </ul>
                    </section>

                    {/* CTA */}
                    <section className="text-center py-12">
                        <h2 className="text-3xl font-bold mb-6">Stay Ahead of the Local Curve</h2>
                        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                            Marketing moves fast. What worked in 2024 might waste your budget in 2025. OARC Digital keeps you on the bleeding edge.
                        </p>
                        <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
                            <Link href="/contact">Book a Strategy Session <ArrowRight className="ml-2 w-4 h-4" /></Link>
                        </Button>
                    </section>

                </div>
            </article>
        </Layout>
    );
}
