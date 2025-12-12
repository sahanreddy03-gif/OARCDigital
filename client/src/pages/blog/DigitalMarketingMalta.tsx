
import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
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
    Legend
} from 'recharts';
import {
    CheckCircle,
    XCircle,
    TrendingUp,
    Users,
    Smartphone,
    Search,
    Share2,
    Mail,
    Target,
    Award,
    ArrowRight,
    MapPin,
    Euro,
    Globe,
    Brain
} from 'lucide-react';
import { Link } from 'wouter';

const SocialUserGrowth = [
    { year: '2020', users: 280000 },
    { year: '2021', users: 310000 },
    { year: '2022', users: 340000 },
    { year: '2023', users: 355000 },
    { year: '2024', users: 366500 },
    { year: '2025', users: 380000 },
];

const BudgetAllocation = [
    { name: 'Social Ads', value: 35, color: '#3b82f6' },
    { name: 'Google/Search', value: 25, color: '#22c55e' },
    { name: 'Content/SEO', value: 20, color: '#f59e0b' },
    { name: 'Email/Retention', value: 10, color: '#8b5cf6' },
    { name: 'Emerging/AI', value: 10, color: '#ec4899' },
];

export default function DigitalMarketingMalta() {
    const publishDate = '2024-12-12';

    return (
        <Layout>
            <SEOHead
                title="The Complete Guide to Digital Marketing in Malta 2025 | OARC Digital"
                description="The ultimate guide to digital marketing in Malta for 2025. Discover what actually works for local businesses, from SEO and Social Media to AI-powered growth strategies."
                canonicalUrl="https://oarcdigital.com/blog/digital-marketing-malta"
                ogType="article"
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": "The Complete Guide to Digital Marketing in Malta 2025",
                    "image": "https://oarcdigital.com/assets/blog/malta-digital-marketing-2025.jpg",
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
                    "description": "Comprehensive guide for Malta businesses on digital marketing strategies, costs, and trends for 2025."
                }}
                schemaId="article-1"
            />

            <article className="min-h-screen bg-background text-foreground font-sans">
                {/* Hero Section */}
                <header className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-950">
                    <div className="absolute inset-0 z-0 opacity-40">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/90" />
                        {/* Abstract Tech/Malta Background Pattern */}
                        <svg className="w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path d="M0 100 L0 50 Q 50 20 100 50 L100 100 Z" fill="url(#grad1)" />
                            <defs>
                                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                                    <stop offset="100%" style={{ stopColor: '#22c55e', stopOpacity: 1 }} />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                        <Badge className="mb-6 bg-green-500/20 text-green-400 hover:bg-green-500/30 border-green-500/50 px-4 py-1 text-base">
                            Market Intelligence 2025
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                            The Complete Guide to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Digital Marketing in Malta</span> 2025
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
                            Internet penetration in Malta has hit <span className="text-white font-bold">92.4%</span>. Is your business capturing its share of the <span className="text-white font-bold">€2.9B</span> e-commerce market?
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-400">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-white border border-slate-700">
                                    OD
                                </div>
                                <div className="text-left">
                                    <div className="text-white font-medium">By OARC Digital Team</div>
                                    <div>8 min read • {new Date(publishDate).toLocaleDateString()}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="max-w-4xl mx-auto px-6 py-16">

                    {/* Table of Contents */}
                    <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-8 mb-16 border border-slate-200 dark:border-slate-800">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <span className="text-blue-500">📑</span> What You'll Learn
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <ul className="space-y-3">
                                {[
                                    "Understanding Malta's Digital Landscape 2025",
                                    "SEO & Local Search Dominance",
                                    "Social Media: Beyond Just 'Boosting' Posts",
                                    "Paid Advertising (PPC) benchmark costs",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-500 cursor-pointer transition-colors">
                                        <ArrowRight className="w-4 h-4 text-slate-400" /> {item}
                                    </li>
                                ))}
                            </ul>
                            <ul className="space-y-3">
                                {[
                                    "Industry Strategies: iGaming to Tourism",
                                    "Real Marketing Budgets in Malta",
                                    "6 Common Mistakes Local Businesses Make",
                                    "Why AI is the New Competitive Advantage"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-500 cursor-pointer transition-colors">
                                        <ArrowRight className="w-4 h-4 text-slate-400" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Introduction */}
                    <section className="prose prose-lg dark:prose-invert max-w-none mb-16">
                        <p className="lead text-xl md:text-2xl leading-relaxed text-slate-700 dark:text-slate-200">
                            If you’re running a business in Malta today, you already know the ground has shifted. It wasn't long ago that having a Facebook page and a phone number on Yellow Pages was "enough."
                        </p>
                        <p>
                            Those days are gone. In 2025, Malta is a digital-first economy. With <strong>92.4% internet penetration</strong> and a population that spends an average of 6 hours daily online, the battle for customers—whether you're a boutique hotel in Valletta, a law firm in Sliema, or a retail chain in Birkirkara—is fought and won on screens.
                        </p>
                        <p>
                            But here is the challenge: <strong>Usage is high, but sophistication is low.</strong> Many Maltese businesses are still treating digital marketing like a lottery—boosting random posts, ignoring SEO, and guessing at budgets. Meanwhile, international competitors and local disruptors (often powered by AI) are seizing market share.
                        </p>
                        <p>
                            At <strong>OARC Digital</strong>, we don't guess. We use intelligence. This guide is your blueprint. It strips away the jargon and gives you the hard data, cost benchmarks, and strategies that actually move the needle in the Maltese Islands right now.
                        </p>
                    </section>

                    {/* Section 1: Malta Digital Landscape */}
                    <section className="mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                                <Globe className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl font-bold">1. The State of Digital in Malta (2025)</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 mb-12">
                            <Card className="bg-slate-50 dark:bg-slate-900 border-none shadow-sm">
                                <CardContent className="pt-6 text-center">
                                    <div className="text-4xl font-bold text-blue-600 mb-2">92.4%</div>
                                    <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Internet Penetration</div>
                                    <p className="text-xs text-muted-foreground mt-2">One of the highest in the EU</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-slate-50 dark:bg-slate-900 border-none shadow-sm">
                                <CardContent className="pt-6 text-center">
                                    <div className="text-4xl font-bold text-green-600 mb-2">366k</div>
                                    <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Social Media Users</div>
                                    <p className="text-xs text-muted-foreground mt-2">~70% of total population</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-slate-50 dark:bg-slate-900 border-none shadow-sm">
                                <CardContent className="pt-6 text-center">
                                    <div className="text-4xl font-bold text-purple-600 mb-2">87%</div>
                                    <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Mobile Traffic</div>
                                    <p className="text-xs text-muted-foreground mt-2">Mobile-first is mandatory</p>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <p>
                                The Maltese consumer in 2025 is hyper-connected. They research restaurants on Instagram Reels before booking. They check Google Maps reviews before visiting a mechanic in Qormi. They expect instant answers from local service providers.
                            </p>
                            <h3 className="text-xl font-bold text-foreground mt-8 mb-4">The Bilingual Reality</h3>
                            <p>
                                Unlike many markets, Malta requires a nuanced language strategy. While English is the dominant language of commerce and search (85%+ of Google searches in Malta are in English), <strong>Maltese</strong> creates a massive trust bridge.
                            </p>
                            <div className="bg-amber-50 dark:bg-amber-900/10 border-l-4 border-amber-500 p-6 rounded-r-lg">
                                <strong>OARC Insight:</strong> We've found that ads written in casual, conversational Maltese can see <strong>20-30% higher engagement rates</strong> for local B2C offers (retail, food, events), while English performs significantly better for B2B, iGaming, and high-ticket luxury services.
                            </div>
                        </div>

                        <div className="mt-12 h-[300px] w-full">
                            <h4 className="text-sm font-semibold text-center mb-4 text-muted-foreground">Social Media User Growth in Malta (Estimated)</h4>
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={SocialUserGrowth}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" opacity={0.1} />
                                    <XAxis dataKey="year" fontSize={12} tickLine={false} axisLine={false} />
                                    <YAxis fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value / 1000}k`} />
                                    <Tooltip
                                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                    />
                                    <Bar dataKey="users" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </section>

                    {/* Section 2: Channels */}
                    <section className="mb-20">
                        <header className="mb-10 text-center max-w-2xl mx-auto">
                            <h2 className="text-3xl font-bold mb-4">2. The Core Channels: What Works in Malta?</h2>
                            <p className="text-muted-foreground">Not every platform deserves your budget. Here is the hierarchy of effectiveness for local businesses.</p>
                        </header>

                        <div className="space-y-12">
                            {/* SEO */}
                            <div className="bg-card rounded-2xl border p-8 flex flex-col md:flex-row gap-8">
                                <div className="md:w-1/3">
                                    <div className="w-16 h-16 rounded-xl bg-green-100 dark:bg-green-900/20 text-green-600 flex items-center justify-center mb-6">
                                        <Search className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">Google SEO & Local</h3>
                                    <Badge variant="outline" className="mb-4">Priority: Critical</Badge>
                                    <p className="text-sm text-muted-foreground">
                                        Google holds 87.95% market share in Malta. If you aren't in the "Map Pack," you are invisible.
                                    </p>
                                </div>
                                <div className="md:w-2/3 space-y-4">
                                    <h4 className="font-semibold text-lg">Why it works locally:</h4>
                                    <ul className="grid gap-3">
                                        <li className="flex gap-3 text-sm">
                                            <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                                            <span><strong>High Intent:</strong> Users searching "notary in Malta" or "best pizza St Julians" are ready to buy immediately.</span>
                                        </li>
                                        <li className="flex gap-3 text-sm">
                                            <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                                            <span><strong>Low Competition (Still):</strong> Many Malta sites have poor technical SEO. A fast, structured site ranks quickly.</span>
                                        </li>
                                    </ul>
                                    <div className="mt-4 p-4 bg-muted/50 rounded-lg text-sm">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-medium">Market Cost Benchmark:</span>
                                            <span className="font-bold text-foreground">€350 - €800 / month</span>
                                        </div>
                                        <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                                            <div className="bg-green-500 w-1/3 h-full" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social */}
                            <div className="bg-card rounded-2xl border p-8 flex flex-col md:flex-row gap-8">
                                <div className="md:w-1/3">
                                    <div className="w-16 h-16 rounded-xl bg-blue-100 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center mb-6">
                                        <Share2 className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">Social Strategy</h3>
                                    <Badge variant="outline" className="mb-4">Priority: High</Badge>
                                    <p className="text-sm text-muted-foreground">
                                        Facebook is Malta's digital town square. Instagram is its shop window. TikTok is its playground.
                                    </p>
                                </div>
                                <div className="md:w-2/3 space-y-4">
                                    <h4 className="font-semibold text-lg">Platform Breakdown:</h4>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="border p-3 rounded-lg">
                                            <div className="font-bold text-blue-600">Facebook</div>
                                            <div className="text-xs text-muted-foreground">Best for community, older demographics, events.</div>
                                        </div>
                                        <div className="border p-3 rounded-lg">
                                            <div className="font-bold text-pink-600">Instagram</div>
                                            <div className="text-xs text-muted-foreground">Essential for food, fashion, retail, and tourism.</div>
                                        </div>
                                        <div className="border p-3 rounded-lg">
                                            <div className="font-bold text-slate-800 dark:text-white">TikTok</div>
                                            <div className="text-xs text-muted-foreground">Rapidly growing for Gen Z awareness.</div>
                                        </div>
                                        <div className="border p-3 rounded-lg">
                                            <div className="font-bold text-sky-700">LinkedIn</div>
                                            <div className="text-xs text-muted-foreground">The only game in town for Malta B2B/iGaming.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Paid Ads */}
                            <div className="bg-card rounded-2xl border p-8 flex flex-col md:flex-row gap-8">
                                <div className="md:w-1/3">
                                    <div className="w-16 h-16 rounded-xl bg-orange-100 dark:bg-orange-900/20 text-orange-600 flex items-center justify-center mb-6">
                                        <Target className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">Paid Media (PPC)</h3>
                                    <Badge variant="outline" className="mb-4">Priority: Medium-High</Badge>
                                    <p className="text-sm text-muted-foreground">
                                        Pay-to-play is necessary as organic reach declines.
                                    </p>
                                </div>
                                <div className="md:w-2/3">
                                    <h4 className="font-semibold text-lg mb-4">Average CPC in Malta:</h4>
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Platform</TableHead>
                                                <TableHead>Cost Per Click (Avg)</TableHead>
                                                <TableHead>OARC Note</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell className="font-medium">Meta (FB/IG)</TableCell>
                                                <TableCell>€0.15 - €0.45</TableCell>
                                                <TableCell className="text-xs">Very cheap compared to UK/US</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className="font-medium">Google Search</TableCell>
                                                <TableCell>€0.80 - €3.50</TableCell>
                                                <TableCell className="text-xs">Expensive for iGaming/Financial</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className="font-medium">LinkedIn</TableCell>
                                                <TableCell>€2.50 - €6.00</TableCell>
                                                <TableCell className="text-xs">High quality B2B leads</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Industry Specifics */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold mb-8">3. Industry Playbooks</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                {
                                    title: "Tourism & Hospitality",
                                    icon: <Globe className="w-6 h-6 text-blue-500" />,
                                    focus: "Visual Selling + Reviews",
                                    tips: "TripAdvisor optimization is non-negotiable. Use Instagram Reels to show the *experience*, not just the room. Geotarget tourists currently IN Malta."
                                },
                                {
                                    title: "Retail & E-commerce",
                                    icon: <Smartphone className="w-6 h-6 text-pink-500" />,
                                    focus: "Convenience + Speed",
                                    tips: "Malta represents a 'delivery island.' Offer same-day or next-day delivery. Optimize Google Shopping feed. Use Facebook dynamic product ads."
                                },
                                {
                                    title: "iGaming & B2B",
                                    icon: <Brain className="w-6 h-6 text-purple-500" />,
                                    focus: "Authority + Compliance",
                                    tips: "Heavy LinkedIn focus. Publish whitepapers. Ensure strict adherence to MGA advertising guidelines. Use AI to personalize player retention emails."
                                },
                                {
                                    title: "Real Estate",
                                    icon: <MapPin className="w-6 h-6 text-green-500" />,
                                    focus: "Lead Qualification",
                                    tips: "Use virtual tours (Matterport). Facebook Lead Forms perform well but require instant follow-up (within 5 mins) or leads go cold."
                                }
                            ].map((industry, i) => (
                                <Card key={i} className="hover:shadow-lg transition-shadow">
                                    <CardHeader>
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-muted rounded-lg">{industry.icon}</div>
                                            <CardTitle className="text-lg">{industry.title}</CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-xs font-bold uppercase text-muted-foreground mb-2">{industry.focus}</div>
                                        <p className="text-sm text-slate-600 dark:text-slate-300">{industry.tips}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    {/* Section 4: Budget */}
                    <section className="mb-20 bg-slate-900 text-white rounded-3xl p-8 md:p-12 overflow-hidden relative">
                        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold mb-6">4. Realistic Budgeting</h2>
                                <p className="text-slate-300 mb-6">
                                    "How much should I spend?" is the #1 question we get.
                                    For a typical Maltese SME (Small-to-Medium Enterprise) aiming for growth, the marketing budget usually lands between <strong>5-10% of revenue</strong>.
                                </p>
                                <p className="text-slate-300 mb-8">
                                    Here is a healthy allocation for a €500k/year business:
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 rounded-full bg-blue-500" />
                                        <span className="text-sm">Paid Social (Traffic): 35%</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 rounded-full bg-green-500" />
                                        <span className="text-sm">Google Ads (Intent): 25%</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 rounded-full bg-orange-500" />
                                        <span className="text-sm">Content/SEO (Long term): 20%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[300px] flex items-center justify-center">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={BudgetAllocation}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={60}
                                            outerRadius={100}
                                            paddingAngle={5}
                                            dataKey="value"
                                        >
                                            {BudgetAllocation.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                        <Legend />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </section>

                    {/* Section 5: Mistakes */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold mb-8 text-center">5. Common Malta Marketing Mistakes</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { title: "The 'Boost Post' Trap", desc: "Hitting 'Boost' on Facebook is not a strategy. It lacks targeting depth and conversion tracking." },
                                { title: "Ignoring Google Maps", desc: "Many businesses have unclaimed profiles, wrong hours, or no photos. This kills foot traffic." },
                                { title: "Slow Websites", desc: "Malta mobile networks are good, but users are impatient. If your site takes 4s to load, you lose 40% of traffic." },
                                { title: "English Only", desc: "Ignoring Maltese keywords or cultural nuances alienates a large segment of the local population." },
                                { title: "No CRM", desc: "Leads come in via Messenger/WhatsApp and get lost in chats. You need a system to track them." },
                                { title: "Inconsistent Brand", desc: "Looking premium on Instagram but having a broken, 1990s website creates a trust gap." }
                            ].map((mistake, i) => (
                                <div key={i} className="flex gap-4 p-4 border rounded-lg bg-red-50/50 dark:bg-red-900/10 border-red-100 dark:border-red-900/30">
                                    <XCircle className="w-6 h-6 text-red-500 shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-sm mb-1">{mistake.title}</h4>
                                        <p className="text-xs text-muted-foreground">{mistake.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section 6: OARC Advantage */}
                    <section className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-10 text-white text-center">
                        <h2 className="text-3xl font-bold mb-6">6. The AI Advantage: Why OARC Digital Wins</h2>
                        <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-10">
                            Traditional agencies are slow and expensive. OARC Digital is Malta's first <strong>Intelligence-Powered Agency</strong>. We don't just run ads; we build systems.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 text-left mb-10">
                            <div className="bg-white/10 backdrop-blur p-6 rounded-xl border border-white/20">
                                <div className="font-bold text-xl mb-2 flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5" /> Data-Driven
                                </div>
                                <p className="text-sm text-blue-100">We use predictive analytics to know which campaigns will work before we spend a euro.</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur p-6 rounded-xl border border-white/20">
                                <div className="font-bold text-xl mb-2 flex items-center gap-2">
                                    <Users className="w-5 h-5" /> AI Agents
                                </div>
                                <p className="text-sm text-blue-100">We deploy 24/7 AI sales agents and support bots that capture leads while you sleep.</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur p-6 rounded-xl border border-white/20">
                                <div className="font-bold text-xl mb-2 flex items-center gap-2">
                                    <Award className="w-5 h-5" /> Full Stack
                                </div>
                                <p className="text-sm text-blue-100">From stunning web design to complex backend automation. One partner, total solution.</p>
                            </div>
                        </div>

                        <Button size="lg" variant="secondary" className="font-bold text-blue-700 bg-white hover:bg-blue-50" asChild>
                            <Link href="/contact">
                                Schedule Your Free Strategy Session <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </Button>
                        <p className="text-xs text-blue-200 mt-4">Limited spots available for new client audits.</p>
                    </section>

                    {/* Related Articles */}
                    <div className="mt-20 pt-10 border-t">
                        <h3 className="text-xl font-bold mb-6 text-muted-foreground">Read Next</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Link href="/blog/seo-malta-guide">
                                <div className="group cursor-pointer border rounded-xl p-6 hover:bg-muted/50 transition-colors">
                                    <h4 className="font-bold text-lg mb-2 group-hover:text-blue-500 transition-colors">How to Rank #1 on Google in Malta</h4>
                                    <p className="text-sm text-muted-foreground">The definitive local SEO guide for 2025.</p>
                                </div>
                            </Link>
                            <Link href="/blog/ai-solutions-malta">
                                <div className="group cursor-pointer border rounded-xl p-6 hover:bg-muted/50 transition-colors">
                                    <h4 className="font-bold text-lg mb-2 group-hover:text-blue-500 transition-colors">AI Solutions for Local Business</h4>
                                    <p className="text-sm text-muted-foreground">How to automate your workflows and save costs.</p>
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>
            </article>
        </Layout>
    );
}
