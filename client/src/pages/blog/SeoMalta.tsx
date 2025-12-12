
import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    AreaChart,
    Area
} from 'recharts';
import {
    CheckCircle2,
    Search,
    MapPin,
    Globe,
    Smartphone,
    BarChart3,
    Link as LinkIcon,
    ArrowRight,
    Star,
    Settings,
    AlertTriangle
} from 'lucide-react';
import { Link } from 'wouter';

const RankingProgress = [
    { month: 'Start', rank: 50 },
    { month: 'Month 1', rank: 35 },
    { month: 'Month 2', rank: 18 },
    { month: 'Month 3', rank: 4 },
];

export default function SeoMalta() {
    const publishDate = '2024-12-15';

    return (
        <Layout>
            <SEOHead
                title="How to Get Your Malta Business on Page 1 of Google | Local SEO Guide 2025"
                description="The complete guide to ranking #1 on Google in Malta. Learn Local SEO strategies, Google Business Profile optimization, and how to beat competitors in Paceville, Sliema, and Valletta."
                canonicalUrl="https://oarcdigital.com/blog/seo-malta-complete-guide"
                ogType="article"
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": "How to Get Your Malta Business on Page 1 of Google",
                    "image": "https://oarcdigital.com/assets/blog/seo-malta-hero.jpg",
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
                schemaId="article-2"
            />

            <article className="min-h-screen bg-background text-foreground font-sans">
                {/* Hero Section */}
                <header className="relative w-full py-24 bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <div className="flex items-center justify-center gap-2 mb-6">
                            <Badge variant="outline" className="border-green-500 text-green-400">SEO Masterclass</Badge>
                            <span className="text-slate-400 text-sm">Updated for 2025</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                            How to Get Your Malta Business on <span className="text-green-500">Page 1 of Google</span>
                        </h1>

                        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                            87.95% of all web traffic in Malta starts on Google. If you aren't visible, you don't exist. Here is the exact roadmap to rank in 90 days.
                        </p>

                        {/* Mock Google Result Visual */}
                        <div className="max-w-2xl mx-auto bg-white rounded-lg p-4 shadow-xl text-left transform rotate-1 hover:rotate-0 transition-transform duration-500">
                            <div className="flex items-center gap-4 mb-3 border-b pb-3">
                                <div className="w-24 h-6 bg-slate-100 rounded animate-pulse"></div>
                                <div className="flex-1 w-full bg-slate-50 h-8 rounded-full flex items-center px-4 text-xs text-slate-400">
                                    <Search className="w-3 h-3 mr-2" /> best restaurant in valletta
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="p-3 border rounded border-blue-100 bg-blue-50/30">
                                    <div className="text-xs text-slate-500 mb-1">Sponsored</div>
                                    <div className="h-2 w-1/3 bg-slate-200 rounded mb-2"></div>
                                    <div className="h-2 w-full bg-slate-100 rounded"></div>
                                </div>
                                <div>
                                    <div className="flex items-center gap-1 mb-1">
                                        <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-[10px] font-bold">OD</div>
                                        <span className="text-xs text-slate-700">oarcdigital.com</span>
                                    </div>
                                    <div className="text-blue-700 text-lg font-medium hover:underline cursor-pointer">
                                        Top 10 Marketing Agencies in Malta - AI Powered Growth
                                    </div>
                                    <div className="text-sm text-slate-600">
                                        OARC Digital is Malta's premier AI marketing agency. We help businesses rank #1 on Google...
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="max-w-4xl mx-auto px-6 py-16">

                    {/* Introduction */}
                    <section className="prose prose-lg dark:prose-invert max-w-none mb-16">
                        <p className="lead text-xl">
                            Imagine two restaurants in St. Julian's. Restaurant A has the best rabbit stew on the island but is on page 2 of Google. Restaurant B has decent food but appears first when tourists search "best dinner Malta."
                        </p>
                        <p>
                            Who gets the booking? <strong>Restaurant B, every single time.</strong>
                        </p>
                        <p>
                            In Malta, Google isn't just a search engine; it's the operating system of the local economy. Whether it's a local searching for "notary" or a tourist looking for "taxi app," the intent is immediate and transactional.
                        </p>
                        <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-lg border-l-4 border-blue-600 my-8">
                            <strong>The 2025 Reality:</strong> Ranking globally is hard. Ranking <em>locally in Malta</em> is surprisingly achievable—if you follow the right strict process. Most local competitors have weak authority and poor site structure. This is your opportunity.
                        </div>
                    </section>

                    {/* Section 1: How Google Works in Malta */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold mb-8">1. Understanding the Malta Algorithm</h2>
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <p className="text-muted-foreground mb-4">
                                    Google treats Malta as a highly specific local ecosystem. The algorithm prioritizes three things for searches originating from Maltese IP addresses:
                                </p>
                                <ul className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 bg-green-100 text-green-600 rounded-lg"><MapPin className="w-5 h-5" /></div>
                                        <div>
                                            <h4 className="font-bold">Proximity</h4>
                                            <p className="text-sm">Is the business actually in Sliema if the user searches "gym sliema"? Verified addresses matter.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 bg-blue-100 text-blue-600 rounded-lg"><Star className="w-5 h-5" /></div>
                                        <div>
                                            <h4 className="font-bold">Prominence</h4>
                                            <p className="text-sm">Are people talking about you? Mentions in <em>Times of Malta</em> or <em>Lovin Malta</em> carry huge weight.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 bg-purple-100 text-purple-600 rounded-lg"><Settings className="w-5 h-5" /></div>
                                        <div>
                                            <h4 className="font-bold">Relevance</h4>
                                            <p className="text-sm">Does your website explicitly mention services in both English (and potentially Maltese keywords)?</p>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                            <div className="bg-slate-100 dark:bg-slate-900 p-8 rounded-2xl">
                                <h4 className="font-bold mb-4 text-center">Malta Search Market Share</h4>
                                <div className="space-y-3">
                                    <div className="flex justify-between text-sm"><span>Google</span> <span className="font-bold">87.95%</span></div>
                                    <div className="w-full bg-slate-300 h-2 rounded-full overflow-hidden"><div className="bg-blue-500 w-[88%] h-full"></div></div>

                                    <div className="flex justify-between text-sm"><span>Bing</span> <span className="font-bold">3.4%</span></div>
                                    <div className="w-full bg-slate-300 h-2 rounded-full overflow-hidden"><div className="bg-slate-500 w-[3%] h-full"></div></div>

                                    <div className="flex justify-between text-sm"><span>Yahoo/Others</span> <span className="font-bold">~8%</span></div>
                                    <div className="w-full bg-slate-300 h-2 rounded-full overflow-hidden"><div className="bg-slate-500 w-[8%] h-full"></div></div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: GBP */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold mb-6">2. Google Business Profile: Your 24/7 Storefront</h2>
                        <p className="text-muted-foreground mb-8">
                            Formerly "Google My Business," this is more important than your actual website for local searches (e.g., "plumber near me").
                        </p>

                        <Card className="mb-8">
                            <CardContent className="p-8">
                                <h3 className="text-xl font-bold mb-6">The "Perfect Profile" Checklist</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        "Claim and Verify ownership (postcard/video)",
                                        "Select primary Category (be specific: 'Pizza Restaurant' not just 'Restaurant')",
                                        "Add Secondary Categories (e.g., 'Delivery Service')",
                                        "Upload 20+ High-Res Photos (Interior, Exterior, Team, Product)",
                                        "Add Products/Services with Prices",
                                        "Turn on 'Chat/Messaging' feature",
                                        "Post weekly Updates (Offers, Events)",
                                        "Get 10+ Reviews to start ranking"
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-2 items-center">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                                            <span className="text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <div className="bg-yellow-50 dark:bg-yellow-900/10 p-6 rounded-lg flex gap-4 items-start">
                            <AlertTriangle className="w-6 h-6 text-yellow-600 shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-yellow-800 dark:text-yellow-500">The "Malta Address" Problem</h4>
                                <p className="text-sm text-yellow-700 dark:text-yellow-400">
                                    Google often struggles with Malta's irregular addresses. <strong>Tip:</strong> Manually drag the map pin to your exact building entrance. If the pin is wrong, customers (and the algorithm) will get confused.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Keyword Research */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold mb-6">3. Keyword Research for Malta</h2>
                        <div className="overflow-x-auto">
                            <Table className="border rounded-lg">
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Keyword Type</TableHead>
                                        <TableHead>English Example</TableHead>
                                        <TableHead>Maltese Context / Strategy</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell className="font-bold">Broad</TableCell>
                                        <TableCell>"Real Estate Malta"</TableCell>
                                        <TableCell>High volume, very hard to rank. Good for homepage.</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-bold">Local Modifier</TableCell>
                                        <TableCell>"Hairdresser in Sliema"</TableCell>
                                        <TableCell>The "Goldilocks" zone. Easier to rank, high intent.</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-bold">Problem-Based</TableCell>
                                        <TableCell>"Emergency plumber St Pauls"</TableCell>
                                        <TableCell>Urgent need. Optimise for "24/7" and "Quick".</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-bold">Near Me</TableCell>
                                        <TableCell>"Coffee shop near me"</TableCell>
                                        <TableCell>Requires GBP optimization and mobile-friendly site.</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </section>

                    {/* Section 4: On-Page SEO */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold mb-8">4. On-Page Excellence</h2>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-bold text-lg mb-2">Title Tags</h3>
                                    <p className="text-sm text-muted-foreground">Include your city. <br /><code className="text-xs bg-muted p-1 rounded">Best Sushi in Malta | Zen Sushi St Julians</code></p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2">Structure (H1, H2, H3)</h3>
                                    <p className="text-sm text-muted-foreground">One H1 per page. Use H2s for section headers containing secondary keywords.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2">Schema Markup</h3>
                                    <p className="text-sm text-muted-foreground">You must use <strong>LocalBusiness</strong> schema appearing in the code. This tells Google your opening hours, price range, and address in a language it understands perfectly.</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-900 border rounded-xl p-6">
                                <h4 className="font-bold mb-4">The "About Us" Page Mistake</h4>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Many Malta businesses put their address only on the Contact page. Put your <strong>Name, Address, and Phone Number (NAP)</strong> in the footer of <em>every single page</em>.
                                </p>
                                <div className="p-4 bg-white dark:bg-black rounded border text-xs font-mono text-slate-500">
                                    &lt;footer&gt;<br />
                                    &nbsp;&nbsp;HighHand Agency<br />
                                    &nbsp;&nbsp;123 Triq ir-Repubblika, Valletta<br />
                                    &nbsp;&nbsp;+356 2123 4567<br />
                                    &lt;/footer&gt;
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 5: Link Building */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold mb-6">5. Authority & Backlinks</h2>
                        <p className="mb-6">
                            A link from a Maltese site (.mt or local content) is worth 100x more than a link from a random US blog.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <Card>
                                <CardContent className="pt-6">
                                    <div className="font-bold mb-2">Tier 1: Directories</div>
                                    <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                                        <li>Yellow Pages Malta</li>
                                        <li>Findit.com.mt</li>
                                        <li>What's On Malta</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="pt-6">
                                    <div className="font-bold mb-2">Tier 2: Industry</div>
                                    <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                                        <li>Chamber of Commerce</li>
                                        <li>GameMR (for iGaming)</li>
                                        <li>MTA (Tourism Authority)</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="pt-6">
                                    <div className="font-bold mb-2">Tier 3: News/PR</div>
                                    <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                                        <li>Times of Malta (Sponsored)</li>
                                        <li>Lovin Malta</li>
                                        <li>MaltaToday</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* Section 6: Tracking */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold mb-6">6. Tracking Success: The 90-Day Curve</h2>
                        <div className="h-[300px] w-full bg-white dark:bg-black p-4 rounded-xl border mb-6">
                            <h4 className="text-center text-sm font-semibold mb-2">Typical Ranking Timeline (New Campaign)</h4>
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={RankingProgress}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} />
                                    <XAxis dataKey="month" />
                                    <YAxis reversed domain={[1, 50]} />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="rank" stroke="#22c55e" strokeWidth={3} dot={{ r: 6 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                        <p className="text-center text-sm text-muted-foreground">
                            *Based on OARC Digital client data from competitive niches (e.g., Real Estate, Legal).
                        </p>
                    </section>

                    {/* CTA Section */}
                    <section className="bg-slate-900 rounded-3xl p-10 text-center relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold text-white mb-6">Need a Free SEO Audit?</h2>
                            <p className="text-slate-300 max-w-xl mx-auto mb-8">
                                It's hard to read the label from inside the bottle. Let OARC Digital's AI analyze your website, spy on your competitors, and give you a checklist to rank #1.
                            </p>
                            <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white font-bold px-8">
                                <Link href="/contact">Get My Free Audit <ArrowRight className="ml-2 w-4 h-4" /></Link>
                            </Button>
                        </div>
                    </section>

                </div>
            </article>
        </Layout>
    );
}
