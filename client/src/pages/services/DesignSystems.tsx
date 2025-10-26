import { useEffect } from "react";
import { Link } from "wouter";
import { Layers, Code, Palette, FileText, Settings, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

export default function DesignSystems() {
  useEffect(() => {
    document.title = "Design Systems Services - Scalable Design Infrastructure | OARC Digital";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Build scalable design systems with component libraries, design tokens, and documentation. Figma to code, cross-platform consistency, faster product development.");
    }
    // Open Graph tags - always update content
    let ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (!ogTitleMeta) {
      ogTitleMeta = document.createElement('meta');
      ogTitleMeta.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitleMeta);
    }
    ogTitleMeta.setAttribute('content', 'Design Systems - Scale Your Product Design | OARC Digital');
    
    let ogDescMeta = document.querySelector('meta[property="og:description"]');
    if (!ogDescMeta) {
      ogDescMeta = document.createElement('meta');
      ogDescMeta.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescMeta);
    }
    ogDescMeta.setAttribute('content', 'Design systems that scale. Component libraries, design tokens, and documentation for consistent, efficient product development.');
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-[hsl(140,60%,45%)] via-[hsl(150,55%,50%)] to-[hsl(160,60%,55%)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
            Design systems that <span className="italic">scale</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Component libraries, design tokens, and documentation that unify your product ecosystem. Build faster, maintain consistency, empower teams.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-[hsl(140,60%,45%)]" data-testid="button-get-started">
              Build Your System
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white" data-testid="button-view-examples">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 px-4 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-sm uppercase tracking-wider text-muted-foreground mb-8">
            Building design systems for high-growth products
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {['SaaS Platforms', 'Fintech Apps', 'Enterprise Software', 'Consumer Apps', 'Design Agencies', 'Product Teams'].map((type, i) => (
              <div key={i} className="text-lg md:text-xl font-bold text-foreground">{type}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-wider text-[hsl(140,60%,45%)] mb-4">PROVEN EFFICIENCY GAINS</div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Consistency at scale. <span className="italic text-[hsl(160,60%,55%)]">Velocity unlocked.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Design systems eliminate redundancy, accelerate development, and ensure every touchpoint reflects your brand perfectly.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {[
              { value: "67%", label: "Faster design-to-development handoff" },
              { value: "3.5x", label: "More screens shipped per sprint" },
              { value: "92%", label: "Reduction in design inconsistencies" },
              { value: "40+", label: "Design systems built for global brands" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-[hsl(140,10%,98%)] rounded-xl" data-testid={`metric-${i}`}>
                <div className="text-5xl font-bold text-[hsl(140,60%,45%)] mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-20 bg-[hsl(140,10%,98%)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="text-sm uppercase tracking-wider text-[hsl(140,60%,45%)] mb-4">DESIGN SYSTEM COMPONENTS</div>
          <h2 className="text-5xl md:text-6xl font-bold">
            End-to-end systems. <span className="italic text-[hsl(160,60%,55%)]">Future-proof.</span>
          </h2>
        </div>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-6 px-4 scrollbar-hide snap-x snap-mandatory">
            {[
              { name: "Component Libraries", desc: "Reusable UI components in Figma, React, Vue, or Angular. Buttons, forms, modals, tables, cards—everything your team needs. Fully documented, accessible, themeable.", icon: Layers },
              { name: "Design Tokens", desc: "Colors, typography, spacing, shadows defined as variables. Cross-platform consistency (web, iOS, Android). Export to CSS, SCSS, JSON, Swift, Kotlin.", icon: Palette },
              { name: "Pattern Libraries", desc: "Complex patterns like navigation, authentication, onboarding, data tables. Pre-built templates for common screens. Best practices baked in.", icon: Code },
              { name: "Documentation Sites", desc: "Interactive documentation portals. Component usage examples, code snippets, design principles, contribution guidelines. Built with Storybook, Docusaurus, or custom.", icon: FileText },
              { name: "Accessibility Standards", desc: "WCAG AA/AAA compliance built into every component. Color contrast checking, keyboard navigation, screen reader support, ARIA attributes.", icon: Settings },
              { name: "Figma-to-Code Workflows", desc: "Seamless handoff from design to development. Auto-generated code from Figma components. Version control, change tracking, automated updates.", icon: Zap },
            ].map((component, i) => (
              <div key={i} className="flex-none w-[360px] md:w-[480px] snap-center group" data-testid={`card-component-${i}`}>
                <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-border h-full">
                  <div className="relative h-[300px] md:h-[350px] bg-gradient-to-br from-emerald-50 via-green-50 to-teal-100 overflow-hidden flex items-center justify-center">
                    <component.icon className="h-24 w-24 text-[hsl(140,60%,45%)]/20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3">{component.name}</h3>
                    <p className="text-muted-foreground">{component.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-[hsl(140,60%,45%)] to-[hsl(160,60%,55%)] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to build your design system?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's create a design system that scales with your product, accelerates development, and ensures consistency everywhere.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-[hsl(140,60%,45%)]" data-testid="button-cta-primary">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white" data-testid="button-cta-secondary">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
