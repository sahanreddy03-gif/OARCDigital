import { useEffect } from "react";
import { Link } from "wouter";
import { Layers, Code, Palette, FileText, Settings, Zap, CheckCircle2, Component, Layout as LayoutIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollableCards } from "@/components/ui/scrollable-cards";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { creativeServicesSEO } from "@/data/seoMetadata";
import { createServiceSchema } from "@/utils/structuredData";
import heroImage from '@assets/15_1763085718435.avif';

export default function DesignSystems() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <SEOHead
        title={creativeServicesSEO.designSystems.title}
        description={creativeServicesSEO.designSystems.description}
        canonicalUrl={`https://oarcdigital.com${creativeServicesSEO.designSystems.path}`}
        ogType="article"
        structuredData={createServiceSchema(
          "Design Systems Services",
          creativeServicesSEO.designSystems.description,
          "Scalable UI Frameworks"
        )}
        schemaId="service-design-systems"
      />
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
            Design systems that <span className="italic text-[#c4ff4d]">scale</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Component libraries, design tokens, and documentation that unify your product ecosystem. Build faster, maintain consistency, empower teams. From Figma to code—seamless handoff, automated updates, cross-platform perfection.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button size="lg" className="bg-[#c4ff4d] text-[#1a2e29] hover:bg-[#c4ff4d]/90" data-testid="button-get-started">
              Build Your System
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20" data-testid="button-view-examples">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 px-4 bg-[#f5f0e6] border-b border-[#1a2e29]/10">
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

      <section className="py-16 px-4 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 shadow-lg">
            <div className="p-8 md:p-12">
              <div className="text-sm uppercase tracking-wider text-[#23AACA] mb-4">CASE STUDY</div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                How we helped a fintech scale from 3 to 15 product teams with one design system
              </h3>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-2xl font-bold text-[#c4ff4d] mb-2">4x faster</div>
                  <div className="text-sm text-white/60">Design-to-development cycle time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#c4ff4d] mb-2">250+ components</div>
                  <div className="text-sm text-white/60">Reusable across web, iOS, Android</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#c4ff4d] mb-2">$2.4M saved</div>
                  <div className="text-sm text-white/60">In redundant design and dev work annually</div>
                </div>
              </div>
              <p className="text-white/70 mb-6">
                A rapidly growing fintech was drowning in design debt. Each product team was building their own components, creating inconsistent experiences across web, iOS, and Android. We built a comprehensive design system with 250+ reusable components, design tokens for cross-platform consistency, and interactive documentation. The result: 4x faster design-to-dev handoff, 92% reduction in visual inconsistencies, and teams shipping 3.5x more features per sprint.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Component Library', 'Design Tokens', 'Figma to Code', 'Cross-Platform', 'Documentation'].map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-zinc-800 text-[#23AACA] rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design System Components */}
      <section className="py-16 bg-[#f5f0e6] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-10">
          <div className="text-sm uppercase tracking-wider text-[#23AACA] mb-3">DESIGN SYSTEM COMPONENTS</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1a2e29]">
            End-to-end systems. <span className="italic text-orange-500">Future-proof.</span>
          </h2>
          <p className="text-lg text-[#1a2e29]/70 max-w-2xl">
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
                <div className="bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-[#1a2e29]/10 h-full hover:-translate-y-2">
                  <div className="relative h-48 bg-[#23AACA]/10 overflow-hidden flex items-center justify-center">
                    <component.icon className="h-16 w-16 text-[#23AACA]/30 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-[#1a2e29] group-hover:text-[#23AACA] transition-colors">{component.name}</h3>
                    <p className="text-sm text-[#1a2e29]/60 mb-4">{component.desc}</p>
                    <div className="space-y-2">
                      {component.features.map((feature, j) => (
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
              How we work: <span className="italic text-white">Audit to implementation</span>
            </h2>
            <p className="text-lg text-[#1a2e29]/80">
              From design debt audit to fully implemented, documented design system
            </p>
          </div>

          <div className="space-y-6">
            {[
              { step: "01", title: "Audit & Foundation", desc: "We audit your existing designs, identify patterns and inconsistencies, and define the foundational elements: color systems, typography scales, spacing units, component taxonomy. This creates the single source of truth for your entire product ecosystem." },
              { step: "02", title: "Component Development", desc: "Build reusable components in Figma and code (React, Vue, Angular). Each component is accessible, themeable, and documented with usage examples. We create both primitive components (buttons, inputs) and complex patterns (navigation, forms, tables)." },
              { step: "03", title: "Documentation & Rollout", desc: "Launch interactive documentation portal with code snippets, usage examples, design principles, contribution guidelines. Train teams on adoption, establish governance, and set up automated version control and change tracking." },
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
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-[#23AACA] mb-4">WHO THIS IS FOR</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1a2e29]">
              Built for teams that <span className="italic text-orange-500">ship at scale</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-[#1a2e29]/10 hover-elevate" data-testid="use-case-enterprise">
              <h3 className="text-xl font-bold mb-4">Enterprise Product Teams</h3>
              <p className="text-muted-foreground mb-4">
                Unify design and development across multiple products, teams, and platforms. Maintain brand consistency at scale while accelerating feature delivery.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Cross-platform component libraries (web, iOS, Android)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Design token systems for global theming</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Governance frameworks for multi-team collaboration</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 border border-[#1a2e29]/10 hover-elevate" data-testid="use-case-product">
              <h3 className="text-xl font-bold mb-4">Fast-Growing Product Companies</h3>
              <p className="text-muted-foreground mb-4">
                Ship features faster without sacrificing quality. Eliminate design debt and empower designers and developers to work in parallel.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Rapid prototyping with pre-built components</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Figma-to-code workflows that eliminate handoff friction</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Version-controlled design assets synced with code</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 border border-[#1a2e29]/10 hover-elevate" data-testid="use-case-saas">
              <h3 className="text-xl font-bold mb-4">SaaS Platforms</h3>
              <p className="text-muted-foreground mb-4">
                Build cohesive multi-product experiences. Ensure every touchpoint feels like part of the same ecosystem, from dashboard to mobile app.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>White-label theming for enterprise customers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Dashboard component patterns and data viz libraries</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Accessibility-first components (WCAG AA/AAA)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 border border-[#1a2e29]/10 hover-elevate" data-testid="use-case-agencies">
              <h3 className="text-xl font-bold mb-4">Design & Development Agencies</h3>
              <p className="text-muted-foreground mb-4">
                Deliver client projects faster with reusable systems. Win bigger contracts by offering design system implementation as a premium service.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Client-ready component documentation and guidelines</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Starter kits and templates for rapid project kickoff</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Training programs to upskill internal teams</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 border border-[#1a2e29]/10 hover-elevate" data-testid="use-case-dev-shops">
              <h3 className="text-xl font-bold mb-4">Development Shops & Studios</h3>
              <p className="text-muted-foreground mb-4">
                Reduce development time and minimize bugs with battle-tested component libraries. Ship pixel-perfect implementations every time.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Framework-agnostic components (React, Vue, Angular)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>TypeScript definitions and comprehensive API docs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Automated visual regression testing setups</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 border border-[#1a2e29]/10 hover-elevate" data-testid="use-case-startups">
              <h3 className="text-xl font-bold mb-4">Funded Startups Scaling Fast</h3>
              <p className="text-muted-foreground mb-4">
                Avoid technical debt from day one. Build a design system that scales with your team from 5 to 50+ people without major refactors.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>MVP-ready starter components for quick launches</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Scalable architecture that grows with team size</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Documentation that onboards new hires in hours</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-[#23AACA] mb-4">EXTEND YOUR SYSTEM</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Power your design system with <span className="italic text-[#c4ff4d]">complementary services</span>
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              A design system is the foundation. Bring it to life with product design, development, and strategic consulting.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/branding">
              <div className="group p-8 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-[#23AACA] hover:shadow-xl transition-all duration-300 cursor-pointer" data-testid="related-service-branding">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#23AACA] transition-colors">Branding Services</h3>
                  <ArrowRight className="h-5 w-5 text-[#23AACA] group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-white/70 mb-4">
                  Establish your brand foundation before building a design system. Define colors, typography, and visual language that scales.
                </p>
              </div>
            </Link>

            <Link href="/services/web-design">
              <div className="group p-8 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-[#23AACA] hover:shadow-xl transition-all duration-300 cursor-pointer" data-testid="related-service-web-design">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#23AACA] transition-colors">Web Design</h3>
                  <ArrowRight className="h-5 w-5 text-[#23AACA] group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-white/70 mb-4">
                  Apply your design system to real products. Build conversion-optimized websites using your component library.
                </p>
              </div>
            </Link>

            <Link href="/services/ai-employee">
              <div className="group p-8 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-[#23AACA] hover:shadow-xl transition-all duration-300 cursor-pointer" data-testid="related-service-ai-employee">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#23AACA] transition-colors">AI Employees</h3>
                  <ArrowRight className="h-5 w-5 text-[#23AACA] group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-white/70 mb-4">
                  Automate design system maintenance with AI. Generate components, update documentation, and catch inconsistencies automatically.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 relative overflow-hidden bg-[#23AACA]">
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to build your design system?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let's create a design system that scales with your product, accelerates development, and ensures consistency everywhere. Component libraries that empower teams.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-[#c4ff4d] text-[#1a2e29] hover:bg-[#c4ff4d]/90" data-testid="button-cta-primary">
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
