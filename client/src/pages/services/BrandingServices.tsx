import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ScrollableCards } from "@/components/ui/scrollable-cards";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { creativeServicesSEO } from "@/data/seoMetadata";
import { createServiceSchema } from "@/utils/structuredData";
import { Palette, Sparkles, BookOpen, Target, Box, FileText, ArrowRight, CheckCircle2 } from "lucide-react";
import heroImage from "@assets/stock_images/branding_design_logo_562a38a3.jpg";

export default function BrandingServices() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <SEOHead
        title={creativeServicesSEO.branding.title}
        description={creativeServicesSEO.branding.description}
        canonicalUrl={`https://oarcdigital.com${creativeServicesSEO.branding.path}`}
        ogType="article"
        structuredData={createServiceSchema(
          "Branding Services",
          creativeServicesSEO.branding.description,
          "Brand Identity Design"
        )}
        schemaId="service-branding-services"
      />
      {/* Hero Section with Real Image */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt="Branding and design process"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Build brands people <span className="italic bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-transparent bg-clip-text">remember</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            From strategy to visual identity, we build cohesive brand systems that resonate with your audience and stand the test of time.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-white/90" data-testid="button-get-started">
              Start Your Rebrand
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20" data-testid="button-view-case-studies">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 px-4 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-sm uppercase tracking-wider text-muted-foreground mb-8">
            Powering growth for ambitious brands
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {['Tech Startups', 'Boutique Hotels', 'Specialty Coffee Roasters', 'Craft Distilleries', 'Premium Pet Brands', 'Sustainable Fashion Labels'].map((type, i) => (
              <div key={i} className="text-base md:text-lg font-bold text-foreground">{type}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-orange-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="text-sm uppercase tracking-wider text-orange-600 mb-4">COMPREHENSIVE BRANDING</div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Every touchpoint. <span className="italic bg-gradient-to-r from-orange-600 to-red-500 text-transparent bg-clip-text">Every detail.</span>
          </h2>
        </div>

        <div className="relative">
          <ScrollableCards>
            {[
              { name: "Brand Strategy & Positioning", desc: "Audience research, competitive analysis, brand archetype definition, value proposition. Build the strategic foundation.", icon: Target },
              { name: "Logo & Visual Identity", desc: "Custom logo design, color palette, typography system, visual style guide. Cohesive visual language across all touchpoints.", icon: Palette },
              { name: "Brand Messaging & Voice", desc: "Taglines, mission statements, brand story, tone of voice guidelines. Consistent messaging that resonates.", icon: FileText },
              { name: "Brand Guidelines & Systems", desc: "Comprehensive brand books, usage rules, templates, dos and don'ts. Ensure consistency as you scale.", icon: BookOpen },
              { name: "Brand Collateral Design", desc: "Business cards, letterheads, presentations, packaging, signage. Apply your brand across all materials.", icon: Box },
              { name: "Rebranding & Refreshes", desc: "Modernize outdated brands, reposition for new markets, evolve visual identity while maintaining equity.", icon: Sparkles },
            ].map((service, i) => (
              <div 
                key={i} 
                className="flex-none w-[320px] md:min-w-[400px] p-8 bg-white rounded-2xl border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                data-testid={`service-${i}`}
              >
                <service.icon className="w-12 h-12 text-orange-600 mb-4" />
                <h3 className="text-2xl font-bold mb-3">{service.name}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </ScrollableCards>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-orange-600 mb-3">SUCCESS STORIES</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Brands that stand the test of time
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "AI SaaS Startup Raises $8M Series A with New Brand",
                industry: "Tech Startup",
                challenge: "Needed premium brand identity to compete in enterprise market",
                solution: "Developed complete brand system including strategy, visual identity, messaging framework, and brand guidelines for consistent application",
                results: [
                  "Successfully raised $8M Series A funding",
                  "2.3x increase in enterprise demo requests",
                  "Featured in TechCrunch, VentureBeat",
                  "Brand identity still in use 3 years later"
                ]
              },
              {
                title: "Boutique Hotel Group Achieves 67% Increase in Direct Bookings",
                industry: "Hospitality",
                challenge: "Outdated brand not resonating with millennial travelers",
                solution: "Complete rebrand including positioning as 'locally-inspired luxury,' new visual identity, photography direction, and collateral across 8 properties",
                results: [
                  "67% increase in direct bookings",
                  "4.8/5 brand perception score (up from 3.2)",
                  "300% increase in Instagram engagement",
                  "$4.2M additional annual revenue"
                ]
              },
              {
                title: "Specialty Coffee Roaster Expands to 15 Retail Locations",
                industry: "Food & Beverage",
                challenge: "Needed scalable brand system for retail expansion",
                solution: "Developed brand strategy emphasizing craft and sustainability, created flexible visual system, packaging design, and comprehensive guidelines",
                results: [
                  "Expanded from 3 to 15 locations in 2 years",
                  "Retail sales up 340%",
                  "Won 3 packaging design awards",
                  "Brand guidelines enabled consistent franchising"
                ]
              },
              {
                title: "Sustainable Fashion Label Grows Following to 250K",
                industry: "Fashion / Apparel",
                challenge: "Generic brand not standing out in crowded sustainable fashion market",
                solution: "Repositioned as 'luxury with conscience,' created distinctive visual identity, art direction for campaigns, and brand storytelling framework",
                results: [
                  "Instagram following grew from 12K to 250K",
                  "Average order value increased 89%",
                  "Featured in Vogue, Elle, Refinery29",
                  "Wholesale partnerships with 45 premium retailers"
                ]
              },
            ].map((study, i) => (
              <div key={i} className="p-8 bg-gradient-to-br from-orange-50 to-white rounded-2xl border border-border hover:shadow-xl transition-all duration-300" data-testid={`case-study-${i}`}>
                <div className="text-sm uppercase tracking-wider text-orange-600 mb-2">{study.industry}</div>
                <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                
                <div className="mb-4">
                  <div className="text-sm font-semibold text-foreground mb-1">Challenge</div>
                  <p className="text-sm text-muted-foreground">{study.challenge}</p>
                </div>

                <div className="mb-4">
                  <div className="text-sm font-semibold text-foreground mb-1">Solution</div>
                  <p className="text-sm text-muted-foreground">{study.solution}</p>
                </div>

                <div>
                  <div className="text-sm font-semibold text-foreground mb-2">Results</div>
                  <ul className="space-y-2">
                    {study.results.map((result, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[hsl(142,76%,36%)] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-orange-600 mb-3">OUR PROCESS</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              From strategy to guidelines
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Strategy & Positioning",
                description: "Research your audience, competitors, and market. Define brand positioning, values, personality, and messaging framework before any design."
              },
              {
                step: "02",
                title: "Visual Identity Design",
                description: "Create logo, color palette, typography, visual style, and photography direction. Build a cohesive system that works across all touchpoints."
              },
              {
                step: "03",
                title: "Guidelines & Application",
                description: "Document comprehensive brand guidelines. Apply brand across collateral, create templates, and ensure consistency as you grow."
              },
            ].map((item, i) => (
              <div key={i} className="text-center" data-testid={`step-${i}`}>
                <div className="inline-block text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 to-red-500 text-transparent bg-clip-text mb-4">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Service Is For */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-orange-600 mb-4">WHO THIS IS FOR</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Built for ambitious <span className="italic bg-gradient-to-r from-orange-600 to-red-500 text-transparent bg-clip-text">brand builders</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[hsl(210,20%,98%)] rounded-xl p-8 border border-border hover-elevate" data-testid="use-case-startups">
              <h3 className="text-xl font-bold mb-4">Early-Stage Startups</h3>
              <p className="text-muted-foreground mb-4">
                Launch with a strong brand foundation that attracts investors, customers, and top talent. Stand out in competitive markets from day one.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Investor-ready brand identity and pitch materials</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Strategic positioning to differentiate from competitors</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Scalable brand systems that grow with your company</span>
                </li>
              </ul>
            </div>

            <div className="bg-[hsl(210,20%,98%)] rounded-xl p-8 border border-border hover-elevate" data-testid="use-case-rebrands">
              <h3 className="text-xl font-bold mb-4">Companies Needing Rebrands</h3>
              <p className="text-muted-foreground mb-4">
                Evolve your brand to reflect growth, new markets, or strategic pivots. Modernize outdated identities while preserving brand equity.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Strategic rebrand roadmaps and stakeholder alignment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Visual identity refresh while maintaining recognition</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Brand migration strategies and rollout plans</span>
                </li>
              </ul>
            </div>

            <div className="bg-[hsl(210,20%,98%)] rounded-xl p-8 border border-border hover-elevate" data-testid="use-case-enterprise">
              <h3 className="text-xl font-bold mb-4">Enterprise & Corporate</h3>
              <p className="text-muted-foreground mb-4">
                Unified brand architecture for complex organizations. Multi-brand portfolios, sub-brands, and internal brand systems at scale.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Master brand architecture and portfolio strategy</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Comprehensive brand governance and compliance tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Global brand consistency across markets and teams</span>
                </li>
              </ul>
            </div>

            <div className="bg-[hsl(210,20%,98%)] rounded-xl p-8 border border-border hover-elevate" data-testid="use-case-dtc">
              <h3 className="text-xl font-bold mb-4">DTC & E-commerce Brands</h3>
              <p className="text-muted-foreground mb-4">
                Create memorable brand experiences that drive customer loyalty and premium pricing. Stand out on digital shelves and in feeds.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Social-first brand identities optimized for feeds</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Packaging and unboxing experience design</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Brand storytelling that drives conversion and retention</span>
                </li>
              </ul>
            </div>

            <div className="bg-[hsl(210,20%,98%)] rounded-xl p-8 border border-border hover-elevate" data-testid="use-case-b2b">
              <h3 className="text-xl font-bold mb-4">B2B Tech Companies</h3>
              <p className="text-muted-foreground mb-4">
                Enterprise-grade brands that build trust and accelerate sales cycles. Communicate complex value propositions clearly and credibly.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Professional brand identities that win enterprise deals</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Sales enablement collateral and pitch materials</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Product branding and feature naming frameworks</span>
                </li>
              </ul>
            </div>

            <div className="bg-[hsl(210,20%,98%)] rounded-xl p-8 border border-border hover-elevate" data-testid="use-case-agencies">
              <h3 className="text-xl font-bold mb-4">Agencies & Creative Studios</h3>
              <p className="text-muted-foreground mb-4">
                Portfolio-worthy brand work that attracts premium clients. Build a distinctive agency brand that showcases your creative excellence.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Unique agency positioning and differentiation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Portfolio presentation systems and case study templates</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Client-facing brand materials that close deals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 px-4 bg-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-orange-600 mb-4">COMPLETE YOUR BRAND</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Amplify your brand with <span className="italic bg-gradient-to-r from-orange-600 to-red-500 text-transparent bg-clip-text">complementary services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A strong brand identity is just the beginning. Bring it to life across digital and physical touchpoints.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/web-design">
              <div className="group p-8 bg-white rounded-xl border border-border hover:border-orange-600 hover:shadow-xl transition-all duration-300 cursor-pointer hover-elevate" data-testid="related-service-web">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold group-hover:text-orange-600 transition-colors">Web Design</h3>
                  <ArrowRight className="h-5 w-5 text-orange-600 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-muted-foreground mb-4">
                  Bring your brand to life online with conversion-optimized websites that reflect your visual identity perfectly.
                </p>
              </div>
            </Link>

            <Link href="/services/design-systems">
              <div className="group p-8 bg-white rounded-xl border border-border hover:border-orange-600 hover:shadow-xl transition-all duration-300 cursor-pointer hover-elevate" data-testid="related-service-design-systems">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold group-hover:text-orange-600 transition-colors">Design Systems</h3>
                  <ArrowRight className="h-5 w-5 text-orange-600 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-muted-foreground mb-4">
                  Scale your brand consistently across all digital products with comprehensive design systems and component libraries.
                </p>
              </div>
            </Link>

            <Link href="/services/print-packaging">
              <div className="group p-8 bg-white rounded-xl border border-border hover:border-orange-600 hover:shadow-xl transition-all duration-300 cursor-pointer hover-elevate" data-testid="related-service-print">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold group-hover:text-orange-600 transition-colors">Print & Packaging</h3>
                  <ArrowRight className="h-5 w-5 text-orange-600 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-muted-foreground mb-4">
                  Extend your brand to physical touchpoints with premium packaging, collateral, and print materials that make an impact.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-500 to-red-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to build a timeless brand?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's create a brand identity that resonates with your audience and stands the test of time.
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-white/90" data-testid="button-cta">
            Start Your Brand Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </Layout>
  );
}
