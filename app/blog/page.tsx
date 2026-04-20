import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OARC Digital Blog | AI Marketing, Creative Services & Growth Strategies",
  description: "Expert insights on AI marketing, creative services, and revenue growth. Learn from real case studies, how-to guides, and industry best practices.",
  alternates: { canonical: "https://oarcdigital.com/blog" },
  openGraph: {
    title: "OARC Digital Blog | AI Marketing, Creative Services & Growth Strategies",
    description: "Expert insights on AI marketing, creative services, and revenue growth. Learn from real case studies, how-to guides, and industry best practices.",
    url: "https://oarcdigital.com/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "OARC Digital Blog | AI Marketing, Creative Services & Growth Strategies",
    description: "Expert insights on AI marketing, creative services, and revenue growth. Learn from real case studies, how-to guides, and industry best practices.",
  },
};

// Blog Infrastructure for SEO Topic Clusters
// Voice search optimized, featured snippet ready

import Layout from '@/components/layout/Layout';
import { createBreadcrumbSchema, createArticleSchema } from '@/utils/advancedSchema';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishDate: string;
  featured?: boolean;
  image: string;
}

// SEO-optimized blog posts targeting voice search
const blogPosts: BlogPost[] = [
  {
    slug: 'seo-malta-complete-guide',
    title: 'How to Get Your Malta Business on Page 1 of Google',
    excerpt: 'Expert guide to SEO in Malta covering local search, Google Business Profile optimization, and strategies for Maltese businesses to dominate search results.',
    category: 'Revenue Growth',
    readTime: '18 min',
    publishDate: '2025-12-11',
    featured: true,
    image: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=800&h=500&fit=crop&q=80'
  },
  {
    slug: 'restaurant-marketing-malta',
    title: 'Restaurant Marketing in Malta: What the Top Venues Do Differently',
    excerpt: 'Why some Malta restaurants are always full and others struggle — the marketing strategies, content approaches, and operational decisions that separate them.',
    category: 'Revenue Growth',
    readTime: '13 min',
    publishDate: '2026-03-01',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=500&fit=crop&q=80'
  },
  {
    slug: 'instagram-marketing-malta',
    title: 'Instagram Marketing in Malta: How to Actually Get Results in 2026',
    excerpt: 'What works on Instagram in Malta in 2026 — the posting times, content formats, hashtag strategy, and growth tactics that Malta businesses are using to build real audiences.',
    category: 'Creative Services',
    readTime: '11 min',
    publishDate: '2026-03-01',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=500&fit=crop&q=80'
  },
  {
    slug: 'tiktok-for-malta-businesses',
    title: 'TikTok for Malta Businesses: The No-Nonsense Guide for 2026',
    excerpt: 'TikTok is not just for teenagers. Here is how Malta businesses are using it to get 50,000+ views and turn them into actual customers.',
    category: 'Creative Services',
    readTime: '10 min',
    publishDate: '2026-03-01',
    image: 'https://images.unsplash.com/photo-1611605698335-8441168e7f54?w=800&h=500&fit=crop&q=80'
  },
  {
    slug: 'ai-marketing-malta',
    title: 'AI Marketing in Malta: What\'s Actually Useful for Your Business Right Now',
    excerpt: 'Beyond the hype — the AI marketing tools saving Malta businesses real time and money in 2026.',
    category: 'AI Marketing',
    readTime: '12 min',
    publishDate: '2026-03-01',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop&q=80'
  },
  {
    slug: 'branding-agency-malta',
    title: 'What a Branding Agency in Malta Actually Does (And What to Expect)',
    excerpt: 'Logo vs brand. What Malta businesses get wrong about branding, what it costs, and how to know if you need a branding agency.',
    category: 'Creative Services',
    readTime: '11 min',
    publishDate: '2026-03-01',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop&q=80'
  },
  {
    slug: 'video-production-malta',
    title: 'Video Production in Malta: Costs, Formats, and What Actually Converts',
    excerpt: 'Short-form, long-form, corporate, social — what video formats Malta businesses should invest in and what they cost in 2026.',
    category: 'Creative Services',
    readTime: '12 min',
    publishDate: '2026-03-01',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=500&fit=crop&q=80'
  },
  {
    slug: 'social-media-management-cost-malta',
    title: 'How Much Does Social Media Management Cost in Malta? (2026 Guide)',
    excerpt: 'Real pricing for social media management in Malta. Freelancers vs agencies, what you actually get, and how to know if you are being overcharged.',
    category: 'Revenue Growth',
    readTime: '12 min',
    publishDate: '2026-03-20',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&q=80'
  },
  {
    slug: 'ai-sales-automation-malta',
    title: 'AI Sales Automation in Malta: How Businesses Are Replacing SDRs With AI Agents',
    excerpt: 'A human SDR in Malta costs €2,000–€3,500/month and makes 30–50 outreach attempts per week. An AI SDR costs €200–€800 and makes 200–500. The economics are not close.',
    category: 'AI Marketing',
    readTime: '11 min',
    publishDate: '2026-03-01',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=500&fit=crop&q=80'
  },
  {
    slug: 'marketing-agency-malta',
    title: 'How to Choose a Marketing Agency in Malta (Without Getting Burned)',
    excerpt: 'Malta has dozens of marketing agencies claiming to grow your business. Most won\'t. Here\'s how to tell the difference before you sign a contract — including a direct comparison table.',
    category: 'Revenue Growth',
    readTime: '12 min',
    publishDate: '2026-03-01',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=500&fit=crop&q=80'
  },
  {
    slug: 'web-design-malta',
    title: 'Web Design in Malta: What It Costs and What You Actually Need (2026)',
    excerpt: 'Most Malta businesses overpay for websites they don\'t need, or underpay for websites that quietly kill their credibility.',
    category: 'Creative Services',
    readTime: '10 min',
    publishDate: '2026-03-01',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop&q=80'
  },
  {
    slug: 'paid-advertising-malta',
    title: 'Facebook and Google Ads in Malta: What Paid Advertising Actually Costs',
    excerpt: 'Malta has one of the most competitive paid advertising markets in Europe per capita. Here\'s how to not waste your budget.',
    category: 'Revenue Growth',
    readTime: '10 min',
    publishDate: '2026-03-01',
    image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&h=500&fit=crop&q=80'
  },
  {
    slug: 'hotel-marketing-malta',
    title: 'Hotel Marketing in Malta: How to Fill Rooms Year-Round',
    excerpt: 'The hotels that fill rooms year-round aren\'t the ones with the biggest budgets — they\'re the ones with the smartest distribution strategy.',
    category: 'Revenue Growth',
    readTime: '12 min',
    publishDate: '2026-03-01',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=500&fit=crop&q=80'
  },
  {
    slug: 'igaming-marketing-malta',
    title: 'iGaming Marketing in Malta: What Works in 2026',
    excerpt: 'Malta is the iGaming capital of Europe. Over 300 licensed operators are based here — here\'s what the marketing landscape actually looks like.',
    category: 'AI Marketing',
    readTime: '11 min',
    publishDate: '2026-03-01',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=500&fit=crop&q=80'
  },
  {
    slug: 'content-marketing-malta',
    title: 'Content Marketing in Malta: The Strategy That Builds Traffic While You Sleep',
    excerpt: 'You don\'t need more content — you need content that compounds. Here\'s how to build a content strategy that generates leads 24/7.',
    category: 'Revenue Growth',
    readTime: '11 min',
    publishDate: '2026-03-01',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop&q=80'
  },
  {
    slug: 'marketing-trends-malta-2025',
    title: 'Malta Business Marketing in 2025: What\'s Working Now',
    excerpt: 'Discover the top marketing trends shaping Malta\'s business landscape in 2025, from AI adoption to voice search and sustainability marketing.',
    category: 'AI Marketing',
    readTime: '15 min',
    publishDate: '2025-12-11',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&q=80'
  },
  {
    slug: 'digital-marketing-malta',
    title: 'The Complete Guide to Digital Marketing in Malta 2025',
    excerpt: 'Comprehensive digital marketing guide for Malta businesses covering SEO, social media, paid ads, and AI-powered strategies that drive real results.',
    category: 'Revenue Growth',
    readTime: '20 min',
    publishDate: '2025-12-11',
    image: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=800&h=500&fit=crop&q=80'
  },
  {
    slug: 'ai-solutions-malta',
    title: 'AI Solutions for Malta Businesses: Complete Guide 2025',
    excerpt: 'Complete guide to AI solutions for Malta businesses covering chatbots, automation, analytics, and implementation strategies with ROI projections.',
    category: 'AI Marketing',
    readTime: '16 min',
    publishDate: '2025-12-11',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop&q=80'
  },
  {
    slug: 'email-marketing-malta',
    title: 'Email Marketing Malta: How to Get 40%+ Open Rates',
    excerpt: 'Most Malta businesses send emails nobody reads. Here is how to build a list, craft campaigns that convert, and achieve open rates that put you ahead of every competitor on the island.',
    category: 'Digital Marketing',
    readTime: '10 min',
    publishDate: '2026-04-03',
    image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=500&fit=crop&q=80'
  },
  {
    slug: 'linkedin-marketing-malta',
    title: 'LinkedIn Marketing Malta: B2B Lead Generation for Maltese Companies',
    excerpt: 'Malta has a concentrated, well-connected professional community on LinkedIn. Here is how to turn that into a predictable pipeline of B2B leads for your business.',
    category: 'Digital Marketing',
    readTime: '11 min',
    publishDate: '2026-04-03',
    image: 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=800&h=500&fit=crop&q=80'
  },
  {
    slug: 'ecommerce-marketing-malta',
    title: 'eCommerce Marketing Malta: How to Sell More Online in 2025',
    excerpt: 'Malta eCommerce is growing fast but most local stores are leaving money on the table. This guide covers what actually drives online sales in the Maltese market.',
    category: 'Digital Marketing',
    readTime: '12 min',
    publishDate: '2026-04-03',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop&q=80'
  },
  {
    slug: 'local-seo-malta',
    title: 'Local SEO Malta: Rank #1 on Google Maps in Your Area',
    excerpt: 'Google Maps is the most valuable piece of digital real estate for any Malta business with a physical location. Here is how to own it.',
    category: 'SEO',
    readTime: '11 min',
    publishDate: '2026-04-03',
    image: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&h=500&fit=crop&q=80'
  },
  {
    slug: 'content-strategy-malta',
    title: 'Content Strategy Malta: Build Authority and Drive Traffic in 2025',
    excerpt: 'A content strategy is not a content calendar. It is a plan to make your Malta business the most trusted voice in your industry. Here is how to build one.',
    category: 'Digital Marketing',
    readTime: '10 min',
    publishDate: '2026-04-03',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop&q=80'
  },
  {
    slug: 'google-ads-malta',
    title: 'Google Ads Malta: Get More Customers Without Wasting Budget',
    excerpt: 'Most Malta businesses running Google Ads are paying for clicks that never convert. This guide shows you how to set up, optimise, and scale campaigns that actually work.',
    category: 'Paid Advertising',
    readTime: '13 min',
    publishDate: '2026-04-03',
    image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&h=500&fit=crop&q=80'
  },
  {
    slug: 'facebook-ads-malta',
    title: 'Facebook Ads Malta: The Complete Guide to Meta Advertising in 2025',
    excerpt: 'Facebook and Instagram advertising in Malta is one of the most cost-effective ways to reach both locals and tourists. Here is the complete playbook.',
    category: 'Paid Advertising',
    readTime: '12 min',
    publishDate: '2026-04-03',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=500&fit=crop&q=80'
  },
  {
    slug: 'reputation-management-malta',
    title: 'Reputation Management Malta: How to Manage Your Google Reviews',
    excerpt: 'One bad review at the wrong moment can cost a Malta business thousands. Here is how to build a review strategy that protects and grows your reputation.',
    category: 'Digital Marketing',
    readTime: '9 min',
    publishDate: '2026-04-03',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=500&fit=crop&q=80'
  },
  {
    slug: 'ai-automation-malta',
    title: 'AI Automation Malta: How Maltese Businesses Are Saving 20+ Hours Per Week',
    excerpt: 'AI automation is no longer just for big companies. Malta businesses across hospitality, legal, accounting, and retail are saving hours every week. Here is how.',
    category: 'AI Marketing',
    readTime: '11 min',
    publishDate: '2026-04-03',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=500&fit=crop&q=80'
  },
  {
    slug: 'hospitality-marketing-malta',
    title: 'Hospitality Marketing Malta: Fill Your Restaurant, Hotel or Bar Every Night',
    excerpt: 'Malta has over 1,500 restaurants competing for the same customers. The venues fully booked every night are not always the best — they are the best marketed.',
    category: 'Hospitality',
    readTime: '12 min',
    publishDate: '2026-04-03',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=500&fit=crop&q=80'
  }
];

export default function Page() {
  const featuredPost = blogPosts.find(post => post.featured) || blogPosts[0];
  const otherPosts = blogPosts.filter(post => !post.featured);
  
  // Breadcrumb schema for better navigation
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' }
  ]);
  
  // Article schema for featured post (rich results)
  const articleSchema = createArticleSchema(
    featuredPost.title,
    featuredPost.excerpt,
    'https://oarcdigital.com/logo.png',
    featuredPost.publishDate,
    featuredPost.publishDate,
    'OARC Digital Team'
  );
  
  // Combine schemas for maximum SEO impact
  const combinedSchema = [breadcrumbSchema, articleSchema];
  
  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }} />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-zinc-900 via-neutral-900 to-zinc-950 text-white py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span style={{ fontFamily: 'var(--font-heatrobox)' }}>OARC Digital</span> <span className="text-green-500">Blog</span>
              </h1>
              <p className="text-xl text-zinc-300">
                Expert insights on AI marketing, creative excellence, and revenue growth strategies
              </p>
            </div>
          </div>
        </section>
        
        {/* Featured Post */}
        <section className="py-12 bg-background border-b">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-sm uppercase tracking-wider text-green-600 font-semibold mb-3">
              Featured Article
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="aspect-video rounded-lg overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-green-500/10 text-green-600 text-sm font-medium mb-4">
                  {featuredPost.category}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(featuredPost.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime} read
                  </div>
                </div>
                <Link href={`/blog/${featuredPost.slug}`}>
                  <Button data-testid="button-read-featured-article">
                    Read Article <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* All Posts Grid */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <article className="bg-card rounded-lg border overflow-hidden hover-elevate transition-all group cursor-pointer h-full" data-testid={`article-card-${post.slug}`}>
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <div className="inline-block px-3 py-1 rounded-full bg-muted text-xs font-medium mb-3">
                        {post.category}
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-green-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* Category Navigation */}
        <section className="py-12 bg-muted/30 border-t">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h3 className="text-lg font-bold mb-4">Browse by Category</h3>
            <div className="flex flex-wrap gap-3">
              {['AI Marketing', 'Creative Services', 'Revenue Growth', 'Case Studies'].map((category) => (
                <Button key={category} variant="outline" className="rounded-full">
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Newsletter CTA */}
        <section className="py-20 bg-gradient-to-br from-green-600 to-green-700 text-white">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Weekly Marketing Insights
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join 5,000+ marketers getting expert tips on AI, creative, and growth strategies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg text-black"
                data-testid="input-newsletter-email"
              />
              <Button size="lg" variant="secondary" data-testid="button-subscribe">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
