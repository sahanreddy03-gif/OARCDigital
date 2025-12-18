import { useEffect } from "react";
import { Link } from "wouter";
import { Target, TrendingUp, Users, Zap, BarChart, Globe, CheckCircle2, Megaphone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollableCards } from "@/components/ui/scrollable-cards";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { revenueServicesSEO } from "@/data/seoMetadata";
import { createServiceSchema } from "@/utils/structuredData";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import heroImage from "@assets/digital-marketing-optimized.jpg";

const digitalMarketingFAQs: FAQItem[] = [
  { question: "What digital marketing services do you offer?", answer: "SEO, paid advertising, social media marketing, email marketing, content marketing, and conversion optimization. Full-funnel digital growth services." },
  { question: "How do you measure marketing success?", answer: "We track leads, conversions, ROI, and revenue attribution. Monthly reports with transparent metrics show exactly how campaigns perform." },
  { question: "What makes OARC's digital marketing different?", answer: "We combine AI-powered automation with human strategy. Our systems optimize campaigns 24/7 while experts guide overall direction." },
  { question: "How quickly can we see marketing results?", answer: "Paid ads show results within days. SEO and content marketing typically take 3-6 months for significant organic traffic growth." },
  { question: "Do you work with specific industries?", answer: "We specialize in B2B, SaaS, e-commerce, and professional services. Our Malta base gives us EU compliance expertise." },
  { question: "What's your approach to marketing strategy?", answer: "Data-driven and audience-first. We start with research, define metrics, test rapidly, and scale what works best." },
  { question: "What is the investment for digital marketing?", answer: "Marketing retainers start from €2,000/month for focused campaigns. Comprehensive programs range from €5,000-15,000/month." },
  { question: "Do you offer marketing on a project basis?", answer: "Yes, we offer campaign-based projects for launches, promotions, and specific initiatives alongside ongoing retainer relationships." }
];

export default function DigitalMarketing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <SEOHead
        title={revenueServicesSEO.digitalMarketing.title}
        description={revenueServicesSEO.digitalMarketing.description}
        canonicalUrl={`https://oarcdigital.com${revenueServicesSEO.digitalMarketing.path}`}
        ogType="article"
        structuredData={createServiceSchema(
          "Digital Marketing Services",
          revenueServicesSEO.digitalMarketing.description,
          "Full-Service Marketing"
        )}
        schemaId="service-digital-marketing"
      />
      {/* Hero Section with Real Image */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt="Digital marketing strategy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Your complete <span className="italic text-[#c4ff4d]">digital growth</span> partner
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Full-service digital marketing. Strategy, creative, paid media, SEO, social, content, analytics. Everything you need to grow online, all under one roof.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button size="lg" className="bg-white text-[#1a2e29] hover:bg-white/90" data-testid="button-get-started">
              Build Your Growth Plan
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20" data-testid="button-view-case-studies">
              View Marketing Results
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 px-4 bg-[#f5f0e6] border-b border-[#1a2e29]/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-sm uppercase tracking-wider text-muted-foreground mb-8">
            Powering growth for businesses across industries
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {['Multi-location Businesses', 'E-commerce', 'Service Providers', 'Franchises', 'Retail', 'B2B'].map((type, i) => (
              <div key={i} className="text-lg md:text-xl font-bold text-foreground">{type}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#f5f0e6]">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl overflow-hidden border border-border shadow-lg">
            <div className="p-8 md:p-12">
              <div className="text-sm uppercase tracking-wider text-[#1a2e29]/70 mb-4">CASE STUDY</div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                How we grew a multi-location service business from $2M to $8.5M in 18 months
              </h3>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-2xl font-bold text-[#1a2e29] mb-2">$6.5M growth</div>
                  <div className="text-sm text-muted-foreground">Revenue increase in 18 months</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#1a2e29] mb-2">425% ROAS</div>
                  <div className="text-sm text-muted-foreground">Return on ad spend</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#1a2e29] mb-2">23 locations</div>
                  <div className="text-sm text-muted-foreground">Expanded from 8 locations</div>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Through integrated campaigns across Google Ads, Facebook, SEO, content marketing, and email, we built a full-funnel marketing engine. We optimized local search presence for each location, launched geo-targeted paid campaigns, created location-specific landing pages, and built automated nurture sequences. Revenue per location increased 285% while customer acquisition cost decreased 42%.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Multi-Location SEO', 'Geo-Targeted Ads', 'Content Marketing', 'Email Automation', 'Local Optimization'].map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-[#f5f0e6] text-[#1a2e29]/70 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-[#f5f0e6] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-10">
          <div className="text-sm uppercase tracking-wider text-[#1a2e29]/70 mb-3">COMPREHENSIVE SERVICES</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything you need. <span className="italic text-orange-500">Under one roof.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Full-stack digital marketing that works together as one integrated system
          </p>
        </div>

        <div className="relative">
          <ScrollableCards>
            {[
              { 
                name: "Digital Strategy & Planning", 
                desc: "Market research, competitive analysis, channel strategy, budget allocation. Build the roadmap for growth with clear KPIs and milestones.",
                icon: Target,
                features: ["Market research", "Competitor analysis", "Channel strategy", "Budget planning"]
              },
              { 
                name: "Creative & Content Production", 
                desc: "Ad creative, video, social content, copywriting, design. All the assets you need to execute campaigns across every channel.",
                icon: Zap,
                features: ["Ad creative design", "Video production", "Copywriting", "Brand assets"]
              },
              { 
                name: "Paid Media Management", 
                desc: "Google Ads, Meta Ads, LinkedIn, TikTok, programmatic. Expert campaign management across all paid channels with performance tracking.",
                icon: TrendingUp,
                features: ["Search ads", "Social ads", "Display ads", "Performance tracking"]
              },
              { 
                name: "SEO & Content Marketing", 
                desc: "Technical SEO, content strategy, link building, blog production. Organic growth that compounds over time with sustainable traffic.",
                icon: Globe,
                features: ["Technical SEO", "Content strategy", "Link building", "Blog production"]
              },
              { 
                name: "Social Media Marketing", 
                desc: "Strategy, content creation, community management, influencer partnerships. Build engaged audiences on every platform that matters.",
                icon: Users,
                features: ["Content creation", "Community management", "Influencer partnerships", "Social strategy"]
              },
              { 
                name: "Analytics & Optimization", 
                desc: "Multi-touch attribution, conversion tracking, A/B testing, dashboards. Data-driven decision making across all channels with unified reporting.",
                icon: BarChart,
                features: ["Attribution modeling", "Conversion tracking", "A/B testing", "Custom dashboards"]
              },
            ].map((service, i) => (
              <div key={i} className="flex-none w-[340px] md:w-[420px] group" data-testid={`card-service-${i}`}>
                <div className="bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-border h-full hover:-translate-y-2">
                  <div className="relative h-48 bg-gradient-to-br from-[#f5f0e6] via-white to-[#f5f0e6] overflow-hidden flex items-center justify-center">
                    <service.icon className="h-16 w-16 text-[#1a2e29]/30 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[#1a2e29] transition-colors">{service.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{service.desc}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-[#1a2e29]/70" />
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

      {/* What's Included */}
      <section className="py-16 px-4 bg-[#f5f0e6]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Integrated marketing execution
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From strategy to execution, we handle every aspect of your digital marketing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Marketing Strategy & Planning", desc: "Comprehensive strategy covering all channels. Define target audiences, messaging, budget allocation, and success metrics for integrated campaigns." },
              { name: "Campaign Development & Creative", desc: "Create compelling campaigns with professional creative assets. Ad copy, landing pages, email templates, social content, and video production." },
              { name: "Multi-Channel Execution", desc: "Execute campaigns across paid search, social, SEO, email, and content. Coordinated messaging and timing across all touchpoints." },
              { name: "Conversion Rate Optimization", desc: "Systematically test and optimize landing pages, forms, CTAs, and user flows. Improve conversion rates across all channels month over month." },
              { name: "Performance Tracking & Attribution", desc: "Multi-touch attribution modeling, conversion tracking, and custom dashboards. Understand what's driving revenue and ROI across all channels." },
              { name: "Monthly Reporting & Optimization", desc: "Detailed monthly reports with actionable insights. Regular strategy calls to review performance and optimize campaigns for better results." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-white border border-border hover:border-[#23AACA] hover:shadow-lg transition-all duration-300 hover:-translate-y-1" data-testid={`card-deliverable-${i}`}>
                <h3 className="text-lg font-bold mb-2">{item.name}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 px-4 bg-[#f5f0e6]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How we work: <span className="italic text-orange-500">Strategy, execute, optimize</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A proven 4-phase approach to integrated marketing
            </p>
          </div>

          <div className="space-y-6">
            {[
              { step: "01", title: "Discovery & Strategy", desc: "Deep dive into your business, customers, competitors, and market. Build comprehensive strategy covering all channels with clear objectives and KPIs." },
              { step: "02", title: "Campaign Development", desc: "Create campaign assets including creative, copy, landing pages, and email sequences. Set up tracking, attribution, and reporting infrastructure." },
              { step: "03", title: "Multi-Channel Launch", desc: "Launch integrated campaigns across paid, organic, and owned channels. Coordinate messaging and timing for maximum impact and efficiency." },
              { step: "04", title: "Test, Learn, Scale", desc: "Weekly optimization across all channels. A/B test creative, messaging, audiences, and budgets. Scale what works, kill what doesn't." },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start p-6 md:p-8 bg-gradient-to-br from-[#f5f0e6] to-white rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-x-2" data-testid={`step-${i}`}>
                <div className="text-5xl font-bold text-[#1a2e29]/20 flex-shrink-0">{item.step}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
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
            <div className="p-8 bg-white border border-border rounded-xl hover-elevate" data-testid="use-case-multi-location">
              <h3 className="text-2xl font-bold mb-4">Multi-Location Businesses</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Franchises, retail chains, and service businesses with multiple locations need coordinated marketing that works locally and at scale.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Location-specific SEO and local search optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Geo-targeted paid advertising campaigns</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Unified brand messaging across all channels</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white border border-border rounded-xl hover-elevate" data-testid="use-case-ecommerce">
              <h3 className="text-2xl font-bold mb-4">E-commerce Stores</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Online retailers need integrated marketing that drives traffic, converts visitors, and maximizes customer lifetime value.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Full-funnel campaigns from awareness to retention</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Shopping feed optimization and retargeting</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Email marketing and abandoned cart recovery</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white border border-border rounded-xl hover-elevate" data-testid="use-case-b2b-services">
              <h3 className="text-2xl font-bold mb-4">B2B Service Providers</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Professional services firms need sophisticated marketing that generates qualified leads and nurtures long sales cycles.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Thought leadership content and SEO strategy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">LinkedIn and account-based marketing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Lead nurturing and marketing automation</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white border border-border rounded-xl hover-elevate" data-testid="use-case-healthcare">
              <h3 className="text-2xl font-bold mb-4">Healthcare Organizations</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Medical practices, dental offices, and healthcare providers need compliant marketing that builds trust and attracts patients.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">HIPAA-compliant digital marketing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Local SEO and reputation management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Patient education content and email campaigns</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white border border-border rounded-xl hover-elevate" data-testid="use-case-saas-tech">
              <h3 className="text-2xl font-bold mb-4">SaaS & Technology Companies</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Tech companies need data-driven marketing that generates MQLs, reduces CAC, and scales efficiently.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Product-led content strategy and SEO</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Paid acquisition optimized for trial signups</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Multi-touch attribution and analytics</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white border border-border rounded-xl hover-elevate" data-testid="use-case-home-services">
              <h3 className="text-2xl font-bold mb-4">Home Services Companies</h3>
              <p className="text-lg text-muted-foreground mb-4">
                HVAC, plumbing, roofing, and contracting businesses need local marketing that fills the calendar with qualified leads.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Google Local Services Ads and search campaigns</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Review generation and reputation management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Seasonal campaign management</span>
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
            Services That Work <span className="italic text-[#c4ff4d]">Great Together</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/lead-generation">
              <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-[#23AACA] cursor-pointer transition-all" data-testid="related-service-lead-generation">
                <h3 className="text-xl font-bold mb-3 text-white">Lead Generation</h3>
                <p className="text-white/70 mb-4">
                  Complement your full-service marketing with specialized lead gen systems that fill your pipeline consistently.
                </p>
                <div className="flex items-center text-[#c4ff4d] font-semibold">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>

            <Link href="/services/funnel-automation">
              <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-[#23AACA] cursor-pointer transition-all" data-testid="related-service-funnel-automation">
                <h3 className="text-xl font-bold mb-3 text-white">Funnel Automation</h3>
                <p className="text-white/70 mb-4">
                  Add intelligent automation to your marketing stack and scale lead nurturing without scaling headcount.
                </p>
                <div className="flex items-center text-[#c4ff4d] font-semibold">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>

            <Link href="/services/ai-copywriting">
              <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-[#23AACA] cursor-pointer transition-all" data-testid="related-service-ai-copywriting">
                <h3 className="text-xl font-bold mb-3 text-white">AI Copywriting</h3>
                <p className="text-white/70 mb-4">
                  Scale your content production 10x with AI-powered copywriting that maintains brand voice and quality.
                </p>
                <div className="flex items-center text-[#c4ff4d] font-semibold">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        faqs={digitalMarketingFAQs} 
        title="Frequently Asked Questions" 
        subtitle="Everything you need to know about digital marketing" 
        schemaId="faq-digital-marketing" 
      />

      {/* CTA */}
      <section className="py-20 px-4 bg-[#23AACA]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to grow with a full-service partner?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            One team. One strategy. Measurable results. Let's build your integrated digital marketing engine.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-[#c4ff4d] text-[#1a2e29] hover:bg-[#c4ff4d]/90" data-testid="button-cta-primary">
              Get Your Custom Plan
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20" data-testid="button-cta-secondary">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
