import { useEffect } from "react";
import { Link } from "wouter";
import { Sparkles, Zap, FileText, TrendingUp, Target, BarChart, CheckCircle2, PenTool, MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollableCards } from "@/components/ui/scrollable-cards";
import Layout from "@/components/layout/Layout";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import SEOHead from "@/components/SEOHead";
import { creativeServicesSEO } from "@/data/seoMetadata";
import { createServiceSchema } from "@/utils/structuredData";
import { serviceImagesBySlug } from "@/assets/serviceImages";

const heroImage = serviceImagesBySlug['ai-copywriting'] || serviceImagesBySlug['ai-enhanced-creative'];

const aiCopywritingFAQs: FAQItem[] = [
  { question: "What types of content do you create?", answer: "Blog posts, website copy, ad copy, email sequences, social media captions, whitepapers, and product descriptions. Full content spectrum covered." },
  { question: "How does AI copywriting maintain quality?", answer: "AI creates first drafts, human editors refine. You get speed of AI with quality of professional copywriters. Best of both worlds." },
  { question: "How do you capture our brand voice?", answer: "We train AI on your existing content and brand guidelines. Voice calibration ensures every piece sounds authentically you." },
  { question: "How much content can you produce monthly?", answer: "AI-powered production scales infinitely. Standard packages include 10-50+ pieces monthly based on your content calendar needs." },
  { question: "What makes OARC's AI copywriting different?", answer: "Human-led AI—not just automated content. Strategists guide direction while AI accelerates production 10x faster." },
  { question: "Do you offer SEO-optimized content?", answer: "Yes, all content includes SEO optimization. Keyword research, meta descriptions, and search-friendly structure included." },
  { question: "What is the investment for AI copywriting?", answer: "Content packages start from €1,500/month for essential needs. Enterprise content programs range from €3,000-8,000/month." },
  { question: "Can you handle multilingual content?", answer: "Yes, we produce content in 20+ languages with native-level quality. Translation and localization services available." }
];

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
            Content that <span className="italic text-[#c4ff4d]">scales with AI</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            10x faster content production without sacrificing quality. AI-powered drafts, human-edited perfection, brand voice training. From blog posts to ad copy—we deliver at machine speed with human excellence.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button size="lg" className="bg-[#c4ff4d] text-[#1a2e29] hover:bg-[#c4ff4d]/90" data-testid="button-get-started">
              Start Creating Content
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20" data-testid="button-view-samples">
              View Writing Samples
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 px-4 bg-[#f5f0e6] border-b border-[#1a2e29]/10">
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

      <section className="py-16 px-4 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 shadow-lg">
            <div className="p-8 md:p-12">
              <div className="text-sm uppercase tracking-wider text-[#23AACA] mb-4">CASE STUDY</div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                How we helped a SaaS platform produce 500+ SEO articles in 90 days
              </h3>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-2xl font-bold text-[#c4ff4d] mb-2">287% increase</div>
                  <div className="text-sm text-white/60">Organic search traffic growth</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#c4ff4d] mb-2">12x faster</div>
                  <div className="text-sm text-white/60">Than their previous content velocity</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#c4ff4d] mb-2">$180k saved</div>
                  <div className="text-sm text-white/60">In content production costs</div>
                </div>
              </div>
              <p className="text-white/70 mb-6">
                A fast-growing SaaS platform needed to dominate long-tail keywords but couldn't afford traditional content agencies. We deployed our AI-human hybrid system to produce 500+ high-quality, SEO-optimized articles in just 90 days. Every piece was brand-aligned, factually accurate, and optimized for featured snippets. The result: massive organic traffic growth and industry-leading content velocity.
              </p>
              <div className="flex flex-wrap gap-3">
                {['SEO Blog Posts', 'Brand Voice Training', 'Human Editing', 'Keyword Research', 'Content Calendar'].map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-zinc-800 text-[#23AACA] rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-16 bg-[#f5f0e6] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-10">
          <div className="text-sm uppercase tracking-wider text-[#23AACA] mb-3">CONTENT FORMATS</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1a2e29]">
            Every format. <span className="italic text-orange-500">Every channel.</span>
          </h2>
          <p className="text-lg text-[#1a2e29]/70 max-w-2xl">
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
                <div className="bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-[#1a2e29]/10 h-full hover:-translate-y-2">
                  <div className="relative h-48 bg-[#23AACA]/10 overflow-hidden flex items-center justify-center">
                    <type.icon className="h-16 w-16 text-[#23AACA]/30 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-[#1a2e29] group-hover:text-[#23AACA] transition-colors">{type.name}</h3>
                    <p className="text-sm text-[#1a2e29]/60 mb-4">{type.desc}</p>
                    <div className="space-y-2">
                      {type.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm text-[#1a2e29]">
                          <CheckCircle2 className="h-4 w-4 text-[#23AACA]" />
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
      <section className="py-16 px-4 bg-[#a8b892]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1a2e29]">
              How it works: <span className="italic text-white">AI speed, human quality</span>
            </h2>
            <p className="text-lg text-[#1a2e29]/80">
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
              <div key={i} className="flex gap-6 items-start p-6 md:p-8 bg-white rounded-xl border border-[#1a2e29]/10 hover:shadow-lg transition-all duration-300 hover:-translate-x-2" data-testid={`step-${i}`}>
                <div className="text-5xl font-bold text-[#23AACA]/30 flex-shrink-0">{item.step}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-[#1a2e29]">{item.title}</h3>
                  <p className="text-sm text-[#1a2e29]/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Service Is For */}
      <section className="py-20 px-4 bg-[#f5f0e6]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Who This Service Is For
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white border border-border rounded-xl hover-elevate" data-testid="use-case-content-teams">
              <h3 className="text-2xl font-bold mb-4">Content Marketing Teams</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Marketing teams publishing 50+ blog posts monthly need to scale content production without sacrificing quality or brand consistency.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">SEO-optimized blog posts and articles at scale</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Brand voice consistency across all content</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">10x faster production without quality compromise</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white border border-border rounded-xl hover-elevate" data-testid="use-case-ecommerce">
              <h3 className="text-2xl font-bold mb-4">E-commerce Brands</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Online retailers with hundreds or thousands of products need compelling, SEO-friendly product descriptions that convert browsers into buyers.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Thousands of product descriptions in days</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">SEO optimization for organic traffic</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Conversion-focused copy that sells</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white border border-border rounded-xl hover-elevate" data-testid="use-case-saas">
              <h3 className="text-2xl font-bold mb-4">SaaS Companies</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Software companies need ongoing content for product marketing, education, onboarding, and SEO to drive trial signups and reduce churn.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Feature guides and documentation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Help center and knowledge base articles</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Email nurture sequences and onboarding content</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white border border-border rounded-xl hover-elevate" data-testid="use-case-agencies">
              <h3 className="text-2xl font-bold mb-4">Agencies</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Marketing agencies managing multiple clients need scalable content production to deliver consistent results without hiring additional writers.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">White-label content production</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Multi-client brand voice management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Predictable capacity and fast turnaround</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white border border-border rounded-xl hover-elevate" data-testid="use-case-b2b-services">
              <h3 className="text-2xl font-bold mb-4">B2B Service Providers</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Professional services firms need thought leadership content, case studies, and educational resources to generate leads and build authority.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">White papers and research reports</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Case studies and success stories</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Industry insights and trend analysis</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white border border-border rounded-xl hover-elevate" data-testid="use-case-publishers">
              <h3 className="text-2xl font-bold mb-4">Media & Publishers</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Digital publishers need high volumes of quality content to maintain publication schedules, attract readers, and monetize through ads or subscriptions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">News articles and evergreen content</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Listicles, how-tos, and guides</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">SEO content for organic traffic growth</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
            Services That Work Great Together
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/digital-marketing">
              <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-[#23AACA] cursor-pointer transition-all" data-testid="related-service-digital-marketing">
                <h3 className="text-xl font-bold mb-3 text-white">Digital Marketing Services</h3>
                <p className="text-white/70 mb-4">
                  Combine AI-powered content with full-funnel marketing strategy for comprehensive growth.
                </p>
                <div className="flex items-center text-[#23AACA] font-semibold">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>

            <Link href="/services/email-creative">
              <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-[#23AACA] cursor-pointer transition-all" data-testid="related-service-email-creative">
                <h3 className="text-xl font-bold mb-3 text-white">Email Creative</h3>
                <p className="text-white/70 mb-4">
                  Beautiful email templates paired with AI-generated copy for high-converting campaigns.
                </p>
                <div className="flex items-center text-[#23AACA] font-semibold">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>

            <Link href="/services/social-media-creative">
              <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-[#23AACA] cursor-pointer transition-all" data-testid="related-service-social-creative">
                <h3 className="text-xl font-bold mb-3 text-white">Social Media Creative</h3>
                <p className="text-white/70 mb-4">
                  Scale social content creation with AI copywriting and professional creative design.
                </p>
                <div className="flex items-center text-[#23AACA] font-semibold">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        faqs={aiCopywritingFAQs} 
        title="Frequently Asked Questions" 
        subtitle="Everything you need to know about AI copywriting" 
        schemaId="faq-ai-copywriting" 
      />

      {/* CTA */}
      <section className="py-20 px-4 bg-[#23AACA]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to 10x your content production?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Get human-quality content at AI speed. Let's build your content engine with brand voice training and expert human editing.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-[#c4ff4d] text-[#1a2e29] hover:bg-[#c4ff4d]/90" data-testid="button-cta-primary">
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
