import { useEffect } from "react";
import { Link } from "wouter";
import { Palette, Sparkles, Image, Users, Book, Zap, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollableCards } from "@/components/ui/scrollable-cards";
import Layout from "@/components/layout/Layout";
import heroImage from "@assets/stock_images/artist_illustration__034f8f53.jpg";

export default function Illustration() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Illustration Services - Custom Digital Art | OARC Digital";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Custom illustration for brands, products, and campaigns. Editorial, product, character, isometric, and icon design. Unlimited revisions, fast turnaround.");
    }
    // Open Graph tags - always update content
    let ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (!ogTitleMeta) {
      ogTitleMeta = document.createElement('meta');
      ogTitleMeta.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitleMeta);
    }
    ogTitleMeta.setAttribute('content', 'Custom Illustration Services - Unique Visual Storytelling | OARC Digital');
    
    let ogDescMeta = document.querySelector('meta[property="og:description"]');
    if (!ogDescMeta) {
      ogDescMeta = document.createElement('meta');
      ogDescMeta.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescMeta);
    }
    ogDescMeta.setAttribute('content', 'Custom illustrations that bring your brand to life. Editorial, product, character design, and more.');
  }, []);

  return (
    <Layout>
      {/* Hero Section with Real Image */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt="Custom illustration artist at work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Illustrations that <span className="italic bg-gradient-to-r from-[hsl(340,75%,55%)] via-[hsl(350,70%,60%)] to-[hsl(10,80%,65%)] text-transparent bg-clip-text">stop the scroll</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Custom digital illustration for brands who refuse to blend in. We craft unique visual stories that cut through the noise of stock imagery and make your brand unforgettable.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button size="lg" className="bg-white text-[hsl(340,75%,55%)] hover:bg-white/90" data-testid="button-get-started">
              Commission Art
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20" data-testid="button-view-portfolio">
              View Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 px-4 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-sm uppercase tracking-wider text-muted-foreground mb-8">
            Crafting visuals for forward-thinking brands
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {['Tech Startups', 'SaaS Platforms', 'Publishing Houses', 'DTC E-commerce', 'Health & Wellness Apps', 'Fintech Companies'].map((type, i) => (
              <div key={i} className="text-lg md:text-xl font-bold text-foreground">{type}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics - REDUCED SIZE */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-[hsl(340,75%,55%)] mb-3">PROVEN IMPACT</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Unique visuals. <span className="italic text-[hsl(10,80%,65%)]">Unforgettable brands.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Custom illustration elevates your brand above generic stock photos. Every piece is tailored to your message, audience, and style guidelines.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-10">
            {[
              { value: "2,800+", label: "Custom illustrations delivered" },
              { value: "89%", label: "Higher engagement vs stock" },
              { value: "5 days", label: "Avg. turnaround time" },
              { value: "100%", label: "Original artwork guarantee" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-gradient-to-br from-[hsl(340,10%,98%)] to-white rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1" data-testid={`metric-${i}`}>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[hsl(340,75%,55%)] to-[hsl(10,80%,65%)] text-transparent bg-clip-text mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 px-4 bg-[hsl(340,10%,98%)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-sm uppercase tracking-wider text-[hsl(340,75%,55%)] mb-4">CLIENT SPOTLIGHT</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            How custom illustrations transformed <span className="italic text-[hsl(10,80%,65%)]">a DTC wellness brand</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
              <p className="text-lg text-muted-foreground mb-6">
                A fast-growing wellness supplement brand was drowning in a sea of competitors using the same stock photos. They needed a distinctive visual identity that would make their Instagram feed instantly recognizable and elevate their brand from "startup" to "premium."
              </p>
              
              <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
              <ul className="space-y-3 mb-6">
                {[
                  'Developed custom botanical illustration style guide',
                  'Created 50+ unique product and lifestyle illustrations',
                  'Designed cohesive icon system for packaging and digital',
                  'Built reusable template library for ongoing campaigns'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[hsl(340,75%,55%)] flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 border border-border">
              <h3 className="text-xl font-bold mb-6">Results After 3 Months</h3>
              <div className="space-y-6">
                {[
                  { metric: '+243%', label: 'Instagram engagement rate' },
                  { metric: '+167%', label: 'Email click-through rate' },
                  { metric: '+89%', label: 'Time on product pages' },
                  { metric: '4.2x', label: 'ROI on illustration investment' }
                ].map((result, i) => (
                  <div key={i} className="flex justify-between items-center pb-4 border-b border-border last:border-0">
                    <span className="text-muted-foreground">{result.label}</span>
                    <span className="text-2xl font-bold text-[hsl(340,75%,55%)]">{result.metric}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Illustration Styles */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="text-sm uppercase tracking-wider text-[hsl(340,75%,55%)] mb-4">ILLUSTRATION STYLES</div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Every style. <span className="italic text-[hsl(10,80%,65%)]">Every medium.</span>
          </h2>
        </div>

        <div className="relative">
          <ScrollableCards>
            {[
              { 
                name: "Editorial Illustration", 
                desc: "Conceptual storytelling for publications, thought leadership, and brand content. From metaphorical visualizations to bold opinion pieces.",
                features: ['Magazine covers', 'Article headers', 'Conceptual metaphors', 'Publication-ready'],
                icon: Book 
              },
              { 
                name: "Product Illustration", 
                desc: "Technical precision meets visual appeal. Perfect for SaaS dashboards, app features, marketing materials, and exploded product views.",
                features: ['Technical diagrams', 'Feature callouts', 'UI mockups', 'Scalable vectors'],
                icon: Image 
              },
              { 
                name: "Character Design", 
                desc: "Build memorable brand mascots and personas. From initial concept sketches to fully realized characters with expressions and poses.",
                features: ['Brand mascots', 'Avatar systems', 'Expression sheets', 'Style consistency'],
                icon: Users 
              },
              { 
                name: "Isometric & 3D-Style", 
                desc: "Add depth without the complexity of 3D rendering. Ideal for tech ecosystems, process flows, and cityscapes.",
                features: ['Isometric scenes', 'Office environments', 'Tech stacks', 'Process visualization'],
                icon: Sparkles 
              },
              { 
                name: "Icon Systems", 
                desc: "Pixel-perfect custom icon libraries for apps, websites, and brand systems. Designed for consistency and scalability.",
                features: ['Custom icon sets', 'Light/dark variants', 'Multiple sizes', 'Export-ready SVGs'],
                icon: Zap 
              },
              { 
                name: "Concept Art", 
                desc: "Visual exploration before final execution. Mood boards, style frames, and storyboards for campaigns and products.",
                features: ['Mood boards', 'Style exploration', 'Storyboards', 'Visual development'],
                icon: Palette 
              },
            ].map((style, i) => (
              <div key={i} className="flex-none w-[360px] md:w-[420px] group" data-testid={`card-style-${i}`}>
                <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border h-full">
                  <div className="relative h-[280px] bg-gradient-to-br from-rose-50 via-pink-50 to-orange-100 overflow-hidden flex items-center justify-center">
                    <style.icon className="h-20 w-20 text-[hsl(340,75%,55%)]/20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{style.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{style.desc}</p>
                    <div className="space-y-2">
                      {style.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-[hsl(340,75%,55%)]" />
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

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-[hsl(340,75%,55%)] to-[hsl(10,80%,65%)] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for original artwork?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Let's create custom illustrations that elevate your brand and captivate your audience.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-[hsl(340,75%,55%)] hover:bg-white/90" data-testid="button-cta-primary">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20" data-testid="button-cta-secondary">
              See Portfolio
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
