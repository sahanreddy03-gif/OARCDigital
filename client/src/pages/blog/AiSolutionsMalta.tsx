
import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Legend,
    LineChart,
    Line
} from 'recharts';
import {
    Bot,
    Brain,
    Database,
    Code,
    Cpu,
    ShieldCheck,
    TrendingUp,
    ArrowRight,
    CheckCircle,
    XCircle,
    Clock,
    Globe,
    ShoppingBag
} from 'lucide-react';
import { Link } from 'wouter';

const CostComparison = [
    { name: 'Custom AI Agent', cost: 15000, time: 4 },
    { name: 'Full Platform', cost: 45000, time: 12 },
    { name: 'Enterprise System', cost: 100000, time: 24 },
];

const ImplementationTimeline = [
    { phase: 'Discovery', weeks: 2 },
    { phase: 'Prototype', weeks: 4 },
    { phase: 'Development', weeks: 8 },
    { phase: 'Training', weeks: 2 },
    { phase: 'Launch', weeks: 1 },
];

export default function AiSolutionsMalta() {
    const publishDate = '2025-12-11';

    return (
        <Layout>
            <SEOHead
                title="AI Solutions for Malta Businesses | Complete Implementation Guide 2025"
                description="The definitive guide to building AI systems in Malta. Learn about custom AI development costs, use cases for iGaming and Tourism, and how to automate your business."
                canonicalUrl="https://oarcdigital.com/blog/ai-solutions-malta"
                ogType="article"
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": "AI Solutions for Malta Businesses: Complete Guide 2025",
                    "image": "https://oarcdigital.com/assets/blog/ai-solutions-malta.jpg",
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
                schemaId="article-4"
            />

            <article className="min-h-screen bg-background text-foreground font-sans">
                {/* Hero Section */}
                <header className="relative w-full py-24 bg-zinc-950 text-white border-b border-zinc-800 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        {/* Tech Grid Background */}
                        <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(#4ade80 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                    </div>

                    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                        <Badge variant="outline" className="mb-6 border-green-500 text-green-400 bg-green-500/10">
                            Future of Business
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                            AI Solutions for <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Malta Businesses</span>
                        </h1>
                        <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
                            Artificial Intelligence isn't just "ChatGPT." It's predictive analytics for iGaming, dynamic pricing for hotels, and automated customer service for retail. Here is how to build it.
                        </p>
                    </div>
                </header>

                <div className="max-w-4xl mx-auto px-6 py-16">

                    {/* Introduction */}
                    <section className="prose prose-lg dark:prose-invert max-w-none mb-16">
                        <p className="lead text-2xl font-light">
                            For years, "AI" in Malta meant a basic chatbot that didn't work. In 2025, that has changed.
                        </p>
                        <p>
                            We are seeing a wave of adoption across the island. From <strong>iGaming giants</strong> in Sliema utilizing machine learning to detect fraud, to <strong>Boutique Hotels</strong> in Gozo using predictive AI to set room rates.
                        </p>
                        <p>
                            The question is no longer "Should we use AI?" It is "Build or Buy?" and "How much will it cost?" This guide answers both.
                        </p>
                    </section>

                    {/* Section 1: Types of AI */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold mb-8">1. What Do We Mean by "AI Solutions"?</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <Card className="bg-zinc-50 dark:bg-zinc-900 border-none">
                                <CardHeader><Bot className="w-10 h-10 text-blue-500 mb-2" /><CardTitle>NLP (Language)</CardTitle></CardHeader>
                                <CardContent className="text-sm text-muted-foreground">
                                    Chatbots that actually understand Maltese/English context. Document analysis for law firms.
                                </CardContent>
                            </Card>
                            <Card className="bg-zinc-50 dark:bg-zinc-900 border-none">
                                <CardHeader><TrendingUp className="w-10 h-10 text-green-500 mb-2" /><CardTitle>Predictive</CardTitle></CardHeader>
                                <CardContent className="text-sm text-muted-foreground">
                                    Forecasting sales, inventory needs, or customer churn before it happens.
                                </CardContent>
                            </Card>
                            <Card className="bg-zinc-50 dark:bg-zinc-900 border-none">
                                <CardHeader><Cpu className="w-10 h-10 text-purple-500 mb-2" /><CardTitle>Automation</CardTitle></CardHeader>
                                <CardContent className="text-sm text-muted-foreground">
                                    Connecting systems (CRM to Email to Accounts) to remove manual data entry.
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* Section 2: Use Cases */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold mb-8">2. Industry Use Cases</h2>
                        <div className="space-y-8">
                            {/* iGaming */}
                            <div className="flex flex-col md:flex-row gap-6 border rounded-xl p-6 hover:shadow-lg transition-shadow">
                                <div className="w-full md:w-1/4 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex flex-col items-center justify-center p-4 text-center">
                                    <Database className="w-8 h-8 text-blue-600 mb-2" />
                                    <span className="font-bold text-blue-800 dark:text-blue-300">iGaming</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold mb-2">Player Behavior Prediction</h3>
                                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                                        <strong>Scenario:</strong> A Malta-based operator wants to identify VIPs <em>before</em> they deposit large amounts.
                                        <br /><strong>Solution:</strong> A custom ML model analyses registration data, click patterns, and initial game choice to assign a "Potential Value Score."
                                    </p>
                                    <Badge variant="secondary">Impact: +15% Retention</Badge>
                                </div>
                            </div>

                            {/* Tourism */}
                            <div className="flex flex-col md:flex-row gap-6 border rounded-xl p-6 hover:shadow-lg transition-shadow">
                                <div className="w-full md:w-1/4 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex flex-col items-center justify-center p-4 text-center">
                                    <Globe className="w-8 h-8 text-orange-600 mb-2" />
                                    <span className="font-bold text-orange-800 dark:text-orange-300">Tourism</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold mb-2">Dynamic Seasonal Pricing</h3>
                                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                                        <strong>Scenario:</strong> A hotel in Mellieha struggles to price rooms during "shoulder season."
                                        <br /><strong>Solution:</strong> An AI agent monitors flight search volume to Malta and competitor prices daily, adjusting rates automatically.
                                    </p>
                                    <Badge variant="secondary">Impact: +22% RevPAR</Badge>
                                </div>
                            </div>

                            {/* Retail */}
                            <div className="flex flex-col md:flex-row gap-6 border rounded-xl p-6 hover:shadow-lg transition-shadow">
                                <div className="w-full md:w-1/4 bg-pink-100 dark:bg-pink-900/20 rounded-lg flex flex-col items-center justify-center p-4 text-center">
                                    <ShoppingBag className="w-8 h-8 text-pink-600 mb-2" />
                                    <span className="font-bold text-pink-800 dark:text-pink-300">Retail</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold mb-2">Inventory Forecasting</h3>
                                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                                        <strong>Scenario:</strong> A supermarket chain overstocks perishables.
                                        <br /><strong>Solution:</strong> AI predicts demand based on local weather, holidays (Public Holidays), and historical sales data.
                                    </p>
                                    <Badge variant="secondary">Impact: -30% Waste</Badge>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Cost Analysis */}
                    <section className="mb-20">
                        <div className="bg-zinc-100 dark:bg-zinc-900 rounded-3xl p-8 md:p-12">
                            <h2 className="text-3xl font-bold mb-6">3. The Cost of AI in Malta</h2>
                            <p className="mb-8 text-muted-foreground">
                                "How much?" It depends on complexity. Here is the OARC benchmark for 2025.
                            </p>

                            <div className="h-[300px] w-full mb-8">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={CostComparison} layout="vertical">
                                        <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                                        <XAxis type="number" hide />
                                        <YAxis dataKey="name" type="category" width={120} />
                                        <Tooltip formatter={(value) => `€${value.toLocaleString()}`} />
                                        <Bar dataKey="cost" fill="#22c55e" radius={[0, 4, 4, 0]} barSize={40} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>

                            <div className="grid md:grid-cols-3 gap-4 text-center">
                                <div className="p-4 bg-background rounded-lg shadow-sm">
                                    <div className="font-bold text-lg">€15k - €25k</div>
                                    <div className="text-xs text-muted-foreground">Single Custom Agent</div>
                                </div>
                                <div className="p-4 bg-background rounded-lg shadow-sm">
                                    <div className="font-bold text-lg">€35k - €60k</div>
                                    <div className="text-xs text-muted-foreground">Multi-Agent System</div>
                                </div>
                                <div className="p-4 bg-background rounded-lg shadow-sm">
                                    <div className="font-bold text-lg">€100k+</div>
                                    <div className="text-xs text-muted-foreground">Enterprise ML Platform</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 4: Implementation */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold mb-8">4. Implementation Roadmap</h2>
                        <div className="space-y-0">
                            {ImplementationTimeline.map((step, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="flex flex-col items-center">
                                        <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm">
                                            {i + 1}
                                        </div>
                                        {i !== ImplementationTimeline.length - 1 && <div className="w-0.5 h-12 bg-zinc-200 dark:bg-zinc-800"></div>}
                                    </div>
                                    <div className="pb-8">
                                        <h4 className="font-bold text-lg">{step.phase}</h4>
                                        <p className="text-sm text-muted-foreground">{step.weeks} Weeks Duration</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section 5: Compliance */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                            <ShieldCheck className="w-8 h-8 text-blue-600" /> Compliance & The EU AI Act
                        </h2>
                        <div className="bg-blue-50 dark:bg-blue-950/30 p-8 rounded-2xl border-l-4 border-blue-600">
                            <p className="text-lg font-medium text-blue-900 dark:text-blue-100 mb-4">
                                Malta follows the EU AI Act strictly.
                            </p>
                            <ul className="space-y-2 text-blue-800 dark:text-blue-200">
                                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> <strong>Transparency:</strong> Users must know they are talking to an AI.</li>
                                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> <strong>Data Privacy:</strong> GDPR applies to training data.</li>
                                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> <strong>Risk Assessment:</strong> High-risk AI (e.g., HR hiring tools) needs MDIA certification.</li>
                            </ul>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="text-center py-12 bg-zinc-950 text-white rounded-3xl">
                        <h2 className="text-3xl font-bold mb-6">Build the Future</h2>
                        <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
                            Don't buy a generic tool. Build a system that knows your business.
                            OARC Digital is Malta's leading AI development agency.
                        </p>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                            <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-black font-bold">
                                <Link href="/contact">Get a Free AI Consultation <Brain className="ml-2 w-4 h-4" /></Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                                <Link href="/services/ai-solutions">View Our Solutions</Link>
                            </Button>
                        </div>
                    </section>

                </div>
            </article>
        </Layout>
    );
}
