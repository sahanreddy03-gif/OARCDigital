import { useEffect } from "react";
import { Link } from "wouter";
import { Sparkles, Zap, FileText, TrendingUp, Target, BarChart, CheckCircle2, PenTool, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollableCards } from "@/components/ui/scrollable-cards";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { creativeServicesSEO } from "@/data/seoMetadata";
import { createServiceSchema } from "@/utils/structuredData";
import { serviceImagesBySlug } from "@/assets/serviceImages";

const heroImage = serviceImagesBySlug['ai-copywriting'] || serviceImagesBySlug['ai-enhanced-creative'];

export default function AICopywriting() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <SEOHead
        title={creativeServicesSEO.aiCopywriting.title}
        description={creativeServicesSEO.aiCopywriting.description}
        canonicalUrl={`https://oarcdigital.com${creativeServicesSEO.aiCopywriting.path}`}
        ogType="article"
        structuredData={createServiceSchema(
          "AI Copywriting Services",
          creativeServicesSEO.aiCopywriting.description,
          "AI-Powered Content Creation"
        )}
        schemaId="service-ai-copywriting"
      />
      {/* Hero Section with Real Image */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt="AI copywriting team collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Content that <span className="italic bg-gradient-to-r from-[hsl(280,70%,55%)] via-[hsl(300,81%,60%)] to-[hsl(320,81%,60%)] text-transparent bg-clip-text">scales with AI</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            10x faster content production without sacrificing quality. AI-powered drafts, human-edited perfection, brand voice training. From blog posts to ad copy—we deliver at machine speed with human excellence.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button size="lg" className="bg-white text-[hsl(280,70%,55%)] hover:bg-white/90" data-testid="button-get-started">
              Start Creating Content
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20" data-testid="button-view-samples">
              View Writing Samples
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 px-4 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-sm uppercase tracking-wider text-muted-foreground mb-8">
            Powering content for high-growth brands
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {['SaaS Platforms', 'E-commerce Stores', 'Digital Agencies', 'Content Platforms', 'B2B Services', 'Marketing Teams'].map((type, i) => (
              <div key={i} className="text-lg md:text-xl font-bold text-foreground">{type}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-[hsl(280,70%,55%)] mb-3">PROVEN RESULTS</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Speed + quality at unprecedented scale
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              AI-human hybrid approach delivers 10x faster content production while maintaining brand voice and editorial standards
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-10">
            {[
              { value: "10x", label: "Faster content production" },
              { value: "50,000+", label: "Pieces generated monthly" },
              { value: "92%", label: "First-draft approval rate" },
              { value: "3 days", label: "Avg. turnaround time" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-8 bg-gradient-to-br from-[hsl(280,10%,98%)] to-white rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1" data-testid={`metric-${i}`}>
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[hsl(280,70%,55%)] to-[hsl(320,81%,60%)] text-transparent bg-clip-text mb-3">{stat.value}</div>
                <div className="text-base text-muted-foreground font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Spotlight */}
      <section className="py-16 px-4 bg-[hsl(280,10%,98%)]">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl overflow-hidden border border-border shadow-lg">
            <div className="p-8 md:p-12">
              <div className="text-sm uppercase tracking-wider text-[hsl(280,70%,55%)] mb-4">CASE STUDY</div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                How we helped a SaaS platform produce 500+ SEO articles in 90 days
              </h3>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-2xl font-bold text-[hsl(280,70%,55%)] mb-2">287% increase</div>
                  <div className="text-sm text-muted-foreground">Organic search traffic growth</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[hsl(280,70%,55%)] mb-2">12x faster</div>
                  <div className="text-sm text-muted-foreground">Than their previous content velocity</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[hsl(280,70%,55%)] mb-2">$180k saved</div>
                  <div className="text-sm text-muted-foreground">In content production costs</div>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                A fast-growing SaaS platform needed to dominate long-tail keywords but couldn't afford traditional content agencies. We deployed our AI-human hybrid system to produce 500+ high-quality, SEO-optimized articles in just 90 days. Every piece was brand-aligned, factually accurate, and optimized for featured snippets. The result: massive organic traffic growth and industry-leading content velocity.
              </p>
              <div className="flex flex-wrap gap-3">
                {['SEO Blog Posts', 'Brand Voice Training', 'Human Editing', 'Keyword Research', 'Content Calendar'].map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-[hsl(280,10%,95%)] text-[hsl(280,70%,55%)] rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-10">
          <div className="text-sm uppercase tracking-wider text-[hsl(280,70%,55%)] mb-3">CONTENT FORMATS</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Every format. <span className="italic text-[hsl(320,81%,60%)]">Every channel.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            AI-powered first drafts, human editing, brand-perfect final deliverables
          </p>
        </div>

        <div className="relative">
          <ScrollableCards>
            {[
              { 
                name: "Blog Posts & Articles", 
                desc: "Long-form SEO content, thought leadership, how-to guides. 1,500-3,000 words, fully researched, optimized for featured snippets.",
                icon: FileText,
                features: ["SEO optimization", "Keyword research", "Featured snippets", "Internal linking"]
              },
              { 
                name: "Ad Copy & Headlines", 
                desc: "Google Ads, Meta Ads, LinkedIn Ads. Multiple variations tested and optimized for CTR and conversions.",
                icon: Target,
                features: ["A/B test variations", "Platform-specific", "CTA optimization", "Character limits"]
              },
              { 
                name: "Product Descriptions", 
                desc: "E-commerce product copy that converts. SEO-optimized, benefit-focused, brand-consistent for thousands of SKUs.",
                icon: Sparkles,
                features: ["Benefit-focused", "SEO keywords", "Bulk production", "Brand voice"]
              },
              { 
                name: "Email Campaigns", 
                desc: "Welcome sequences, newsletters, promotional emails, abandoned cart. Personalized at scale with dynamic content.",
                icon: MessageSquare,
                features: ["Subject lines", "Preview text", "Personalization", "Sequence flows"]
              },
              { 
                name: "Social Media Captions", 
                desc: "Platform-specific captions for Instagram, LinkedIn, Twitter, Facebook. On-brand, engaging, hashtag-optimized.",
                icon: TrendingUp,
                features: ["Platform-specific", "Hashtag research", "Emoji placement", "CTA hooks"]
              },
              { 
                name: "Landing Page Copy", 
                desc: "Conversion-focused headlines, subheadlines, CTAs, body copy. Persuasive messaging that drives action and reduces bounce.",
                icon: PenTool,
                features: ["Headline formulas", "Benefit bullets", "CTA copy", "Trust signals"]
              },
            ].map((type, i) => (
              <div key={i} className="flex-none w-[340px] md:w-[420px] group" data-testid={`card-type-${i}`}>
                <div className="bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-border h-full hover:-translate-y-2">
                  <div className="relative h-48 bg-gradient-to-br from-[hsl(280,70%,55%)]/10 via-[hsl(300,81%,60%)]/10 to-[hsl(320,81%,60%)]/10 overflow-hidden flex items-center justify-center">
                    <type.icon className="h-16 w-16 text-[hsl(280,70%,55%)]/30 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[hsl(280,70%,55%)] transition-colors">{type.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{type.desc}</p>
                    <div className="space-y-2">
                      {type.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-[hsl(280,70%,55%)]" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </ScrollableCards>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 px-4 bg-[hsl(280,10%,98%)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How it works: <span className="italic text-[hsl(320,81%,60%)]">AI speed, human quality</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Our hybrid AI-human workflow delivers 10x faster without sacrificing brand voice
            </p>
          </div>

          <div className="space-y-6">
            {[
              { step: "01", title: "Brand Voice Training", desc: "We train custom AI models on your existing content, brand guidelines, tone of voice, and target audience. The AI learns your unique style, terminology, and messaging patterns to ensure every piece feels authentically yours." },
              { step: "02", title: "AI-Powered First Drafts", desc: "Our AI generates comprehensive first drafts based on your brief, keywords, and content goals. This reduces production time by 90% while maintaining structural quality and topical relevance." },
              { step: "03", title: "Human Editing & Optimization", desc: "Expert editors refine every piece for accuracy, brand alignment, SEO optimization, and persuasive impact. We add nuance, verify facts, optimize for featured snippets, and ensure publication-ready quality." },
              { step: "04", title: "Review & Iteration", desc: "You review, we iterate. Fast turnaround on revisions. Once approved, content is delivered in your preferred format with metadata, images, and internal linking recommendations." },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start p-6 md:p-8 bg-white rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-x-2" data-testid={`step-${i}`}>
                <div className="text-5xl font-bold text-[hsl(280,70%,55%)]/20 flex-shrink-0">{item.step}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(280,70%,55%)] via-[hsl(300,81%,60%)] to-[hsl(320,81%,60%)]"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to 10x your content production?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Get human-quality content at AI speed. Let's build your content engine with brand voice training and expert human editing.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-[hsl(280,70%,55%)] hover:bg-white/90" data-testid="button-cta-primary">
              Start Creating Content
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20" data-testid="button-cta-secondary">
              See Content Samples
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
