import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { Palette, Sparkles, BookOpen, Target, Box, FileText } from "lucide-react";

export default function BrandingServices() {
  useEffect(() => {
    document.title = "Branding Services - Build Unforgettable Brand Identities | OARC Digital";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Full-service brand identity design. Logo design, brand guidelines, visual systems, messaging frameworks. Build brands that resonate and endure.");
    }
    // Open Graph tags - always update content
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
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
            Build brands people <span className="italic">remember</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            From strategy to visual identity, we build cohesive brand systems that resonate with your audience and stand the test of time.
          </p>
          <Button size="lg" className="bg-white text-orange-600" data-testid="button-get-started">
            Start Your Rebrand
          </Button>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-wider text-orange-600 mb-4">BRAND IDENTITY EXCELLENCE</div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Strategy-first. <span className="italic text-amber-600">Design-obsessed.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Great brands aren't built on pretty logos alone. We start with strategy, define positioning, craft messaging, then bring it all to life visually.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {[
              { value: "500+", label: "Brand identities created" },
              { value: "94%", label: "Client satisfaction rate" },
              { value: "12 days", label: "Average brand identity delivery" },
              { value: "85%", label: "Brands still using our work 3+ years later" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-orange-50 rounded-xl" data-testid={`metric-${i}`}>
                <div className="text-5xl font-bold text-orange-600 mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-orange-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="text-sm uppercase tracking-wider text-orange-600 mb-4">COMPREHENSIVE BRANDING</div>
          <h2 className="text-5xl md:text-6xl font-bold">
            Every touchpoint. <span className="italic text-amber-600">Every detail.</span>
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
              <div key={i} className="flex-none w-[360px] md:w-[480px] snap-center group" data-testid={`card-service-${i}`}>
                <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-border h-full">
                  <div className="relative h-[300px] md:h-[350px] bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 overflow-hidden flex items-center justify-center">
                    <service.icon className="h-24 w-24 text-orange-600/20" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3">{service.name}</h3>
                    <p className="text-muted-foreground">{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-5xl md:text-6xl font-bold">
              Brands that <span className="italic text-amber-600">endure</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: "500+", label: "Brand identities created" },
              { value: "12 days", label: "Average brand identity delivery" },
              { value: "85%", label: "Brands still using our work 3+ years" },
            ].map((metric, i) => (
              <div key={i} className="text-center" data-testid={`final-metric-${i}`}>
                <div className="text-6xl md:text-7xl font-bold text-orange-600 mb-3">{metric.value}</div>
                <div className="text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-amber-500 to-red-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to build a timeless brand?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's create a brand identity that resonates with your audience and stands the test of time.
          </p>
          <Button size="lg" className="bg-white text-orange-600" data-testid="button-cta-primary">
            Start Your Brand Project
          </Button>
        </div>
      </section>
    </Layout>
  );
}
