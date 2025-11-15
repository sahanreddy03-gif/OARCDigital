import { useEffect } from "react";
import { Link } from "wouter";
import { Layers, Code, Palette, FileText, Settings, Zap, CheckCircle2, Component, Layout as LayoutIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollableCards } from "@/components/ui/scrollable-cards";
import Layout from "@/components/layout/Layout";
import heroImage from '@assets/15_1763085718435.avif';

export default function DesignSystems() {
  useEffect(() => {
    window.scrollTo(0, 0);
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
      {/* Hero Section with Real Image */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt="UI/UX design system components"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Design systems that <span className="italic bg-gradient-to-r from-[hsl(140,60%,45%)] via-[hsl(150,55%,50%)] to-[hsl(160,60%,55%)] text-transparent bg-clip-text">scale</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Component libraries, design tokens, and documentation that unify your product ecosystem. Build faster, maintain consistency, empower teams. From Figma to code—seamless handoff, automated updates, cross-platform perfection.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button size="lg" className="bg-white text-[hsl(140,60%,45%)] hover:bg-white/90" data-testid="button-get-started">
              Build Your System
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20" data-testid="button-view-examples">
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
            {['Product Teams', 'Design Agencies', 'SaaS Companies', 'Enterprise Software', 'Mobile Apps', 'Web Platforms'].map((type, i) => (
              <div key={i} className="text-lg md:text-xl font-bold text-foreground">{type}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-[hsl(140,60%,45%)] mb-3">PROVEN EFFICIENCY GAINS</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Consistency at scale. Velocity unlocked.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Design systems eliminate redundancy, accelerate development, and ensure every touchpoint reflects your brand perfectly
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-10">
            {[
              { value: "67%", label: "Faster design-to-dev handoff" },
              { value: "3.5x", label: "More screens shipped per sprint" },
              { value: "92%", label: "Reduction in inconsistencies" },
              { value: "40+", label: "Systems built for global brands" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-8 bg-gradient-to-br from-[hsl(140,10%,98%)] to-white rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1" data-testid={`metric-${i}`}>
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[hsl(140,60%,45%)] to-[hsl(160,60%,55%)] text-transparent bg-clip-text mb-3">{stat.value}</div>
                <div className="text-base text-muted-foreground font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Spotlight */}
      <section className="py-16 px-4 bg-[hsl(140,10%,98%)]">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl overflow-hidden border border-border shadow-lg">
            <div className="p-8 md:p-12">
              <div className="text-sm uppercase tracking-wider text-[hsl(140,60%,45%)] mb-4">CASE STUDY</div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                How we helped a fintech scale from 3 to 15 product teams with one design system
              </h3>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-2xl font-bold text-[hsl(140,60%,45%)] mb-2">4x faster</div>
                  <div className="text-sm text-muted-foreground">Design-to-development cycle time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[hsl(140,60%,45%)] mb-2">250+ components</div>
                  <div className="text-sm text-muted-foreground">Reusable across web, iOS, Android</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[hsl(140,60%,45%)] mb-2">$2.4M saved</div>
                  <div className="text-sm text-muted-foreground">In redundant design and dev work annually</div>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                A rapidly growing fintech was drowning in design debt. Each product team was building their own components, creating inconsistent experiences across web, iOS, and Android. We built a comprehensive design system with 250+ reusable components, design tokens for cross-platform consistency, and interactive documentation. The result: 4x faster design-to-dev handoff, 92% reduction in visual inconsistencies, and teams shipping 3.5x more features per sprint.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Component Library', 'Design Tokens', 'Figma to Code', 'Cross-Platform', 'Documentation'].map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-[hsl(140,10%,95%)] text-[hsl(140,60%,45%)] rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design System Components */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-10">
          <div className="text-sm uppercase tracking-wider text-[hsl(140,60%,45%)] mb-3">DESIGN SYSTEM COMPONENTS</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            End-to-end systems. <span className="italic text-[hsl(160,60%,55%)]">Future-proof.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            From component libraries to documentation—everything your team needs to build at scale
          </p>
        </div>

        <div className="relative">
          <ScrollableCards>
            {[
              { 
                name: "Component Libraries", 
                desc: "Reusable UI components in Figma, React, Vue, or Angular. Buttons, forms, modals, tables, cards—everything your team needs.",
                icon: Layers,
                features: ["Figma components", "React/Vue/Angular", "Fully documented", "Accessible (WCAG)"]
              },
              { 
                name: "Design Tokens", 
                desc: "Colors, typography, spacing, shadows defined as variables. Cross-platform consistency (web, iOS, Android).",
                icon: Palette,
                features: ["Color systems", "Typography scales", "Spacing units", "Export to CSS/JSON/Swift"]
              },
              { 
                name: "Pattern Libraries", 
                desc: "Complex patterns like navigation, authentication, onboarding, data tables. Pre-built templates for common screens.",
                icon: LayoutIcon,
                features: ["Navigation patterns", "Form patterns", "Data tables", "Best practices"]
              },
              { 
                name: "Documentation Sites", 
                desc: "Interactive documentation portals. Component usage examples, code snippets, design principles, contribution guidelines.",
                icon: FileText,
                features: ["Usage examples", "Code snippets", "Design principles", "Contribution guides"]
              },
              { 
                name: "Accessibility Standards", 
                desc: "WCAG AA/AAA compliance built into every component. Color contrast checking, keyboard navigation, screen reader support.",
                icon: Settings,
                features: ["WCAG compliance", "Color contrast", "Keyboard navigation", "Screen reader support"]
              },
              { 
                name: "Figma-to-Code Workflows", 
                desc: "Seamless handoff from design to development. Auto-generated code from Figma components. Version control, change tracking.",
                icon: Zap,
                features: ["Auto-generated code", "Version control", "Change tracking", "Automated updates"]
              },
            ].map((component, i) => (
              <div key={i} className="flex-none w-[340px] md:w-[420px] group" data-testid={`card-component-${i}`}>
                <div className="bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-border h-full hover:-translate-y-2">
                  <div className="relative h-48 bg-gradient-to-br from-[hsl(140,60%,45%)]/10 via-[hsl(150,55%,50%)]/10 to-[hsl(160,60%,55%)]/10 overflow-hidden flex items-center justify-center">
                    <component.icon className="h-16 w-16 text-[hsl(140,60%,45%)]/30 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[hsl(140,60%,45%)] transition-colors">{component.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{component.desc}</p>
                    <div className="space-y-2">
                      {component.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-[hsl(140,60%,45%)]" />
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
      <section className="py-16 px-4 bg-[hsl(140,10%,98%)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How we work: <span className="italic text-[hsl(160,60%,55%)]">Audit to implementation</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              From design debt audit to fully implemented, documented design system
            </p>
          </div>

          <div className="space-y-6">
            {[
              { step: "01", title: "Audit & Foundation", desc: "We audit your existing designs, identify patterns and inconsistencies, and define the foundational elements: color systems, typography scales, spacing units, component taxonomy. This creates the single source of truth for your entire product ecosystem." },
              { step: "02", title: "Component Development", desc: "Build reusable components in Figma and code (React, Vue, Angular). Each component is accessible, themeable, and documented with usage examples. We create both primitive components (buttons, inputs) and complex patterns (navigation, forms, tables)." },
              { step: "03", title: "Documentation & Rollout", desc: "Launch interactive documentation portal with code snippets, usage examples, design principles, contribution guidelines. Train teams on adoption, establish governance, and set up automated version control and change tracking." },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start p-6 md:p-8 bg-white rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-x-2" data-testid={`step-${i}`}>
                <div className="text-5xl font-bold text-[hsl(140,60%,45%)]/20 flex-shrink-0">{item.step}</div>
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
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(140,60%,45%)] via-[hsl(150,55%,50%)] to-[hsl(160,60%,55%)]"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to build your design system?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let's create a design system that scales with your product, accelerates development, and ensures consistency everywhere. Component libraries that empower teams.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-[hsl(140,60%,45%)] hover:bg-white/90" data-testid="button-cta-primary">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20" data-testid="button-cta-secondary">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
