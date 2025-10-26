import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { Palette, Sparkles, BookOpen, Target, Box, FileText, ArrowRight, CheckCircle2 } from "lucide-react";
import heroImage from "@assets/stock_images/branding_design_logo_562a38a3.jpg";

export default function BrandingServices() {
  useEffect(() => {
    document.title = "Branding Services - Build Unforgettable Brand Identities | OARC Digital";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Full-service brand identity design. Logo design, brand guidelines, visual systems, messaging frameworks. Build brands that resonate and endure.");
    }
    let ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (!ogTitleMeta) {
      ogTitleMeta = document.createElement('meta');
      ogTitleMeta.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitleMeta);
    }
    ogTitleMeta.setAttribute('content', 'Branding Services - Build Unforgettable Brand Identities | OARC Digital');
    
    let ogDescMeta = document.querySelector('meta[property="og:description"]');
    if (!ogDescMeta) {
      ogDescMeta = document.createElement('meta');
      ogDescMeta.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescMeta);
    }
    ogDescMeta.setAttribute('content', 'Full-service brand identity design. Logo design, brand guidelines, visual systems, messaging frameworks. Build brands that resonate and endure.');
  }, []);

  return (
    <Layout>
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

      {/* Performance Metrics */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-orange-600 mb-3">BRAND IDENTITY EXCELLENCE</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Strategy-first. Design-obsessed.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Great brands aren't built on pretty logos alone. We start with strategy, define positioning, craft messaging, then bring it all to life visually.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-10">
            {[
              { value: "500+", label: "Brand identities created" },
              { value: "94%", label: "Client satisfaction rate" },
              { value: "12 days", label: "Avg. brand identity delivery" },
              { value: "85%", label: "Brands still using our work 3+ years" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-gradient-to-br from-orange-50 to-white rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1" data-testid={`metric-${i}`}>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-500 text-transparent bg-clip-text mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-orange-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="text-sm uppercase tracking-wider text-orange-600 mb-4">COMPREHENSIVE BRANDING</div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Every touchpoint. <span className="italic bg-gradient-to-r from-orange-600 to-red-500 text-transparent bg-clip-text">Every detail.</span>
          </h2>
        </div>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-6 px-4 scrollbar-hide snap-x snap-mandatory">
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
                className="min-w-[320px] md:min-w-[400px] p-8 bg-white rounded-2xl border border-border snap-start hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                data-testid={`service-${i}`}
              >
                <service.icon className="w-12 h-12 text-orange-600 mb-4" />
                <h3 className="text-2xl font-bold mb-3">{service.name}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
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
