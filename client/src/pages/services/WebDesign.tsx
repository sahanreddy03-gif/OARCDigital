import { useEffect } from "react";
import { Link } from "wouter";
import { Code, Smartphone, Zap, Layers, ArrowRight, TrendingUp, CheckCircle2, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollableCards } from "@/components/ui/scrollable-cards";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { creativeServicesSEO } from "@/data/seoMetadata";
import heroImage from '@assets/web design_1763084519615.avif';
import webImg1 from "@assets/stock_images/modern_web_design_ux_d23df466.jpg";
import webImg2 from "@assets/stock_images/modern_web_design_ux_62274473.jpg";
import webImg3 from "@assets/stock_images/modern_web_design_ux_699e8c91.jpg";

export default function WebDesign() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <SEOHead
        title={creativeServicesSEO.webDesign.title}
        description={creativeServicesSEO.webDesign.description}
        canonicalUrl={`https://oarcdigital.com${creativeServicesSEO.webDesign.path}`}
        ogType={creativeServicesSEO.webDesign.ogType}
      />
    <div className="web-design">
      {/* Hero Section with Real Image */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt="Web design and development"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Websites that <span className="italic bg-gradient-to-r from-[hsl(220,65%,33%)] via-[hsl(188,95%,43%)] to-[hsl(220,65%,33%)] text-transparent bg-clip-text">convert visitors</span> into customers
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Conversion-optimized web design with lightning-fast load times, mobile-first UX, and A/B testing built-in. Your website is working 24/7—make every second count.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button size="lg" className="bg-white text-[hsl(220,65%,33%)] hover:bg-white/90" data-testid="button-get-started">
              Get Free UX Audit
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20" data-testid="button-view-portfolio">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 px-4 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-sm uppercase tracking-wider text-muted-foreground mb-8">
            Building high-converting websites for
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {['SaaS Startups', 'Professional Services', 'B2B Tech', 'E-commerce Stores', 'Digital Agencies', 'Consulting Firms'].map((type, i) => (
              <div key={i} className="text-lg md:text-xl font-bold text-foreground">{type}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-[hsl(220,65%,33%)] mb-3">PERFORMANCE-DRIVEN</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Every pixel optimized for conversion
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fast loading, mobile-first, and built with CRO principles from day one
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-10">
            {[
              { value: "42%", label: "Avg. conversion increase", gradient: "from-blue-600 to-cyan-600" },
              { value: "1.8s", label: "Page load time", gradient: "from-green-600 to-emerald-600" },
              { value: "97%", label: "Mobile performance score", gradient: "from-purple-600 to-pink-600" },
              { value: "7 days", label: "Landing page launch", gradient: "from-orange-600 to-red-600" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-8 bg-gradient-to-br from-[hsl(220,10%,98%)] to-white rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1" data-testid={`metric-${i}`}>
                <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.gradient} text-transparent bg-clip-text mb-3`}>{stat.value}</div>
                <div className="text-base text-muted-foreground font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Web Design Matters */}
      <section className="py-20 px-4 bg-[hsl(210,20%,98%)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-wider text-[hsl(220,65%,33%)] mb-4">CONVERSION OPTIMIZATION</div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Your website should be your <span className="italic bg-gradient-to-r from-[hsl(220,65%,33%)] to-[hsl(188,95%,43%)] text-transparent bg-clip-text">best salesperson</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We design every page, button, and interaction to guide visitors toward conversion—backed by data, tested rigorously, and optimized continuously.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer - Large Cards */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="text-sm uppercase tracking-wider text-[hsl(220,65%,33%)] mb-4">SERVICES</div>
          <h2 className="text-5xl md:text-6xl font-bold">
            Web solutions built to <span className="italic bg-gradient-to-r from-[hsl(220,65%,33%)] to-[hsl(188,95%,43%)] text-transparent bg-clip-text">scale and convert</span>
          </h2>
        </div>

        <div className="relative">
          <ScrollableCards>
            {[
              { name: "Full Website Design", desc: "Conversion-optimized websites from sitemap to launch. UX research, wireframes, prototypes, and pixel-perfect UI. Built to scale.", icon: Layers },
              { name: "High-Converting Landing Pages", desc: "Single-purpose pages engineered to convert. A/B test ready, mobile-first, and optimized for Core Web Vitals. Launch in 7 days.", icon: Zap },
              { name: "E-commerce Design", desc: "Product pages, cart flows, and checkout optimization. Reduce cart abandonment by 25%+ with proven UX patterns.", icon: Code },
              { name: "Design System & Components", desc: "Scalable component libraries with documentation. Accelerate development by 3x while maintaining brand consistency.", icon: Layers },
              { name: "Conversion Rate Optimization", desc: "Data-driven CRO audits, heatmaps, session recordings, and A/B testing. Find and fix conversion leaks.", icon: TrendingUp },
              { name: "Webflow & No-Code Development", desc: "Launch fast on Webflow or Framer. Full control, easy updates, blazing performance. No developer required.", icon: Gauge },
            ].map((item, i) => (
              <div key={i} className="flex-none w-[360px] md:w-[480px] group" data-testid={`card-service-${i}`}>
                <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-border">
                  <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                    <img src={[webImg1, webImg2, webImg3][i % 3]} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                      <div className="text-white text-sm font-medium">View Example →</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{item.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </ScrollableCards>
        </div>
      </section>

      {/* Who This Service Is For */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-[hsl(220,65%,33%)] mb-4">WHO THIS IS FOR</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Built for ambitious <span className="italic bg-gradient-to-r from-[hsl(220,65%,33%)] to-[hsl(188,95%,43%)] text-transparent bg-clip-text">growth-focused</span> companies
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[hsl(210,20%,98%)] rounded-xl p-8 border border-border" data-testid="use-case-saas">
              <h3 className="text-xl font-bold mb-4">SaaS & Tech Companies</h3>
              <p className="text-muted-foreground mb-4">
                High-converting product pages, demo request flows, and trial signup experiences. Built for companies needing measurable ROI from every visitor.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[hsl(220,65%,33%)] flex-shrink-0 mt-0.5" />
                  <span>Conversion-optimized landing pages</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[hsl(220,65%,33%)] flex-shrink-0 mt-0.5" />
                  <span>Product demo & trial signup flows</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[hsl(220,65%,33%)] flex-shrink-0 mt-0.5" />
                  <span>Technical documentation sites</span>
                </li>
              </ul>
            </div>

            <div className="bg-[hsl(210,20%,98%)] rounded-xl p-8 border border-border" data-testid="use-case-professional">
              <h3 className="text-xl font-bold mb-4">Professional Services</h3>
              <p className="text-muted-foreground mb-4">
                Premium brand experiences that establish credibility and generate qualified leads. Perfect for consulting, legal, and financial services.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[hsl(220,65%,33%)] flex-shrink-0 mt-0.5" />
                  <span>Authority-building brand sites</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[hsl(220,65%,33%)] flex-shrink-0 mt-0.5" />
                  <span>Lead generation & contact forms</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[hsl(220,65%,33%)] flex-shrink-0 mt-0.5" />
                  <span>Client portal experiences</span>
                </li>
              </ul>
            </div>

            <div className="bg-[hsl(210,20%,98%)] rounded-xl p-8 border border-border" data-testid="use-case-ecommerce">
              <h3 className="text-xl font-bold mb-4">E-commerce & DTC Brands</h3>
              <p className="text-muted-foreground mb-4">
                Fast, mobile-optimized shopping experiences with checkout flows that convert. Reduce cart abandonment and increase average order value.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[hsl(220,65%,33%)] flex-shrink-0 mt-0.5" />
                  <span>Product pages that sell</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[hsl(220,65%,33%)] flex-shrink-0 mt-0.5" />
                  <span>Optimized checkout experiences</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[hsl(220,65%,33%)] flex-shrink-0 mt-0.5" />
                  <span>Mobile-first shopping flows</span>
                </li>
              </ul>
            </div>

            <div className="bg-[hsl(210,20%,98%)] rounded-xl p-8 border border-border" data-testid="use-case-agencies">
              <h3 className="text-xl font-bold mb-4">Marketing & Creative Agencies</h3>
              <p className="text-muted-foreground mb-4">
                Showcase your work with portfolio sites and project galleries that win clients. Built for agencies that need to stand out.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[hsl(220,65%,33%)] flex-shrink-0 mt-0.5" />
                  <span>Portfolio & case study showcases</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[hsl(220,65%,33%)] flex-shrink-0 mt-0.5" />
                  <span>Service page optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[hsl(220,65%,33%)] flex-shrink-0 mt-0.5" />
                  <span>Client onboarding experiences</span>
                </li>
              </ul>
            </div>

            <div className="bg-[hsl(210,20%,98%)] rounded-xl p-8 border border-border" data-testid="use-case-b2b">
              <h3 className="text-xl font-bold mb-4">B2B Technology</h3>
              <p className="text-muted-foreground mb-4">
                Complex products explained simply. Enterprise-grade websites that educate buyers and accelerate sales cycles.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[hsl(220,65%,33%)] flex-shrink-0 mt-0.5" />
                  <span>Enterprise product showcases</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[hsl(220,65%,33%)] flex-shrink-0 mt-0.5" />
                  <span>Multi-tier pricing pages</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[hsl(220,65%,33%)] flex-shrink-0 mt-0.5" />
                  <span>Solution & integration pages</span>
                </li>
              </ul>
            </div>

            <div className="bg-[hsl(210,20%,98%)] rounded-xl p-8 border border-border" data-testid="use-case-startups">
              <h3 className="text-xl font-bold mb-4">Funded Startups</h3>
              <p className="text-muted-foreground mb-4">
                Launch fast with MVP websites that can scale. Built for startups needing to validate product-market fit and grow quickly.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[hsl(220,65%,33%)] flex-shrink-0 mt-0.5" />
                  <span>Rapid MVP launches (7-14 days)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[hsl(220,65%,33%)] flex-shrink-0 mt-0.5" />
                  <span>Investor pitch pages</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[hsl(220,65%,33%)] flex-shrink-0 mt-0.5" />
                  <span>Scalable design systems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 bg-[hsl(210,20%,98%)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-wider text-[hsl(220,65%,33%)] mb-4">CASE STUDIES</div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Designs that <span className="italic bg-gradient-to-r from-[hsl(220,65%,33%)] to-[hsl(188,95%,43%)] text-transparent bg-clip-text">drive revenue</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                industry: "SaaS Platform", 
                challenge: "Redesigning homepage to improve trial signups",
                result: "4.7x signups",
                metric1: "62% increase in conversion rate",
                metric2: "$3.2M ARR increase",
                icon: Layers
              },
              { 
                industry: "E-commerce Store", 
                challenge: "Optimizing product pages and checkout flow",
                result: "38% more sales",
                metric1: "24% cart abandonment reduction",
                metric2: "$1.9M additional revenue",
                icon: Code
              },
              { 
                industry: "B2B Tech Company", 
                challenge: "Building high-converting landing pages for campaigns",
                result: "5.3x leads",
                metric1: "47% cost per lead reduction",
                metric2: "$680K in closed deals",
                icon: TrendingUp
              },
            ].map((study, i) => (
              <div key={i} className="group p-8 bg-white rounded-xl border border-border hover:border-[hsl(220,65%,33%)] hover:shadow-xl transition-all duration-300" data-testid={`case-study-${i}`}>
                <study.icon className="h-12 w-12 text-[hsl(220,65%,33%)] mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-sm uppercase tracking-wider text-[hsl(220,65%,33%)] mb-2">{study.industry}</div>
                <p className="text-sm text-muted-foreground mb-4">{study.challenge}</p>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 text-transparent bg-clip-text mb-4">{study.result}</div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{study.metric1}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{study.metric2}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UX & Page Speed */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm uppercase tracking-wider text-[hsl(220,65%,33%)] mb-4">SPEED & UX</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Lightning-fast. <span className="italic bg-gradient-to-r from-[hsl(220,65%,33%)] to-[hsl(188,95%,43%)] text-transparent bg-clip-text">Beautifully intuitive.</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Speed kills. A 1-second delay costs you 7% in conversions. We obsess over Core Web Vitals and deliver sub-2-second load times as standard.
              </p>
              <div className="space-y-4">
                {[
                  "Mobile-first responsive design (97% mobile performance)",
                  "Optimized for Core Web Vitals and SEO",
                  "A/B testing infrastructure built-in",
                  "Conversion-focused UX patterns and psychology",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Load Time", value: "<2s" },
                { label: "Mobile Score", value: "97+" },
                { label: "Conversion Lift", value: "42%" },
                { label: "Launch Time", value: "7d" },
              ].map((stat, i) => (
                <div key={i} className="p-6 bg-gradient-to-br from-slate-50 to-cyan-50 rounded-xl text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 text-transparent bg-clip-text mb-3">{stat.value}</div>
                  <div className="text-base text-muted-foreground font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Services / Internal CTAs */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-[hsl(220,65%,33%)] mb-4">MAXIMIZE YOUR IMPACT</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Combine with these <span className="italic bg-gradient-to-r from-[hsl(220,65%,33%)] to-[hsl(188,95%,43%)] text-transparent bg-clip-text">complementary services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A great website is just the start. Drive traffic, create content, and convert visitors with our full suite of services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/video-production">
              <div className="group p-8 bg-[hsl(210,20%,98%)] rounded-xl border border-border hover:border-[hsl(220,65%,33%)] hover:shadow-xl transition-all duration-300 cursor-pointer" data-testid="related-service-video">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold group-hover:text-[hsl(220,65%,33%)] transition-colors">Video Production</h3>
                  <ArrowRight className="h-5 w-5 text-[hsl(220,65%,33%)] group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-muted-foreground mb-4">
                  Bring your website to life with explainer videos, product demos, and testimonials that boost conversions.
                </p>
                <div className="text-sm text-[hsl(220,65%,33%)] font-semibold">Learn More →</div>
              </div>
            </Link>

            <Link href="/services/paid-advertising">
              <div className="group p-8 bg-[hsl(210,20%,98%)] rounded-xl border border-border hover:border-[hsl(220,65%,33%)] hover:shadow-xl transition-all duration-300 cursor-pointer" data-testid="related-service-paid">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold group-hover:text-[hsl(220,65%,33%)] transition-colors">Paid Advertising</h3>
                  <ArrowRight className="h-5 w-5 text-[hsl(220,65%,33%)] group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-muted-foreground mb-4">
                  Drive qualified traffic to your new website with targeted Google, Facebook, and LinkedIn campaigns.
                </p>
                <div className="text-sm text-[hsl(220,65%,33%)] font-semibold">Learn More →</div>
              </div>
            </Link>

            <Link href="/services/social-media-creative">
              <div className="group p-8 bg-[hsl(210,20%,98%)] rounded-xl border border-border hover:border-[hsl(220,65%,33%)] hover:shadow-xl transition-all duration-300 cursor-pointer" data-testid="related-service-social">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold group-hover:text-[hsl(220,65%,33%)] transition-colors">Social Media Creative</h3>
                  <ArrowRight className="h-5 w-5 text-[hsl(220,65%,33%)] group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-muted-foreground mb-4">
                  Keep your brand consistent across all channels with scroll-stopping social content and ad creative.
                </p>
                <div className="text-sm text-[hsl(220,65%,33%)] font-semibold">Learn More →</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-[hsl(220,65%,33%)] to-[hsl(188,95%,43%)] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to turn visitors into <span className="italic">customers?</span>
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get conversion-optimized web design that drives measurable results
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-white text-[hsl(220,65%,33%)] hover:bg-white/90 h-12 px-8" data-testid="button-cta-demo">
              Get Free UX Audit
            </Button>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 h-12 px-8" data-testid="button-cta-contact">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
    </Layout>
  );
}
