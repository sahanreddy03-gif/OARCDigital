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
}

// SEO-optimized blog posts targeting voice search
const blogPosts: BlogPost[] = [
  {
    slug: 'how-ai-marketing-works-2025',
    title: 'How Does AI Marketing Work in 2025? Complete Guide',
    excerpt: 'Discover how AI-powered marketing delivers better results faster. Learn about AI employees, automation, and creative AI tools transforming the industry.',
    category: 'AI Marketing',
    readTime: '8 min',
    publishDate: '2024-11-20',
    featured: true
  },
  {
    slug: 'ai-employees-vs-traditional-hiring',
    title: 'AI Employees vs Traditional Hiring: Which is Better?',
    excerpt: 'Compare costs, speed, and results of AI employees vs traditional recruitment. See real data from 100+ companies who made the switch.',
    category: 'AI Marketing',
    readTime: '6 min',
    publishDate: '2024-11-18'
  },
  {
    slug: 'social-media-marketing-malta-guide',
    title: 'Social Media Marketing in Malta: 2025 Complete Guide',
    excerpt: 'Everything Malta businesses need to know about social media marketing, from platform selection to AI-powered content creation.',
    category: 'Creative Services',
    readTime: '10 min',
    publishDate: '2024-11-15'
  },
  {
    slug: 'revenue-automation-beginners-guide',
    title: 'Revenue Automation for Beginners: Step-by-Step Guide',
    excerpt: 'Learn how to automate your revenue stack from lead generation to customer acquisition. Includes tools, strategies, and real examples.',
    category: 'Revenue Growth',
    readTime: '12 min',
    publishDate: '2024-11-10'
  },
  {
    slug: 'best-ai-copywriting-tools-2025',
    title: 'Best AI Copywriting Tools in 2025: Expert Review',
    excerpt: 'We tested 15+ AI copywriting tools. Here are the top 5 that actually deliver professional-quality content.',
    category: 'AI Marketing',
    readTime: '7 min',
    publishDate: '2024-11-05'
  },
  {
    slug: 'brand-identity-design-process',
    title: 'How to Create a Brand Identity: Complete Process',
    excerpt: 'Professional brand identity design process from research to final delivery. Includes templates, examples, and best practices.',
    category: 'Creative Services',
    readTime: '9 min',
    publishDate: '2024-11-01'
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
              <div className="aspect-video bg-gradient-to-br from-green-500 to-green-600 rounded-lg"></div>
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
                <Button>
                  Read Article <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
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
                <article key={post.slug} className="bg-card rounded-lg border overflow-hidden hover-elevate transition-all group">
                  <div className="aspect-video bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-900"></div>
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
