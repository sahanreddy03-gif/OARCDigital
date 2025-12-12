// Blog Infrastructure for SEO Topic Clusters
// Voice search optimized, featured snippet ready

import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/SEOHead';
import { createBreadcrumbSchema, createArticleSchema } from '@/utils/advancedSchema';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Link } from 'wouter';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: 'AI Marketing' | 'Creative Services' | 'Revenue Growth' | 'Case Studies';
  readTime: string;
  publishDate: string;
  featured?: boolean;
  image: string;
}

// SEO-optimized blog posts targeting voice search
const blogPosts: BlogPost[] = [
  {
    slug: 'seo-malta-complete-guide',
    title: 'SEO Malta: Complete Guide to Ranking Your Business in 2025',
    excerpt: 'Expert guide to SEO in Malta covering local search, Google Business Profile optimization, and strategies for Maltese businesses to dominate search results.',
    category: 'Revenue Growth',
    readTime: '18 min',
    publishDate: '2024-12-10',
    featured: true,
    image: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=800&h=500&fit=crop&q=80'
  },
  {
    slug: 'marketing-trends-malta-2025',
    title: 'Marketing Trends Malta 2025: What Every Business Needs to Know',
    excerpt: 'Discover the top marketing trends shaping Malta\'s business landscape in 2025, from AI adoption to voice search and sustainability marketing.',
    category: 'AI Marketing',
    readTime: '15 min',
    publishDate: '2024-12-08',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&q=80'
  },
  {
    slug: 'digital-marketing-malta',
    title: 'Digital Marketing Malta: Complete Strategy Guide for 2025',
    excerpt: 'Comprehensive digital marketing guide for Malta businesses covering SEO, social media, paid ads, and AI-powered strategies that drive real results.',
    category: 'Revenue Growth',
    readTime: '20 min',
    publishDate: '2024-12-05',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&q=80'
  },
  {
    slug: 'ai-solutions-malta',
    title: 'AI Solutions Malta: Transform Your Business with Artificial Intelligence',
    excerpt: 'Complete guide to AI solutions for Malta businesses covering chatbots, automation, analytics, and implementation strategies with ROI projections.',
    category: 'AI Marketing',
    readTime: '16 min',
    publishDate: '2024-12-01',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop&q=80'
  }
];

export default function Blog() {
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
      <SEOHead
        title="OARC Digital Blog | AI Marketing, Creative Services & Growth Strategies"
        description="Expert insights on AI marketing, creative services, and revenue growth. Learn from real case studies, how-to guides, and industry best practices."
        canonicalUrl="https://oarcdigital.com/blog"
        structuredData={combinedSchema}
        schemaId="blog"
      />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-zinc-900 via-neutral-900 to-zinc-950 text-white py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                OARC Digital <span className="text-green-500">Blog</span>
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
