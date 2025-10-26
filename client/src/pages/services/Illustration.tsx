import { useEffect } from "react";
import { Link } from "wouter";
import { Palette, Sparkles, Image, Users, Book, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

export default function Illustration() {
  useEffect(() => {
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
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-[hsl(340,75%,55%)] via-[hsl(350,70%,60%)] to-[hsl(10,80%,65%)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
            Illustrations that <span className="italic">stop the scroll</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Custom digital illustration for brands, products, campaigns, and editorial. Unique visual storytelling that sets you apart from stock imagery.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-[hsl(340,75%,55%)]" data-testid="button-get-started">
              Commission Art
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white" data-testid="button-view-portfolio">
              View Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 px-4 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-sm uppercase tracking-wider text-muted-foreground mb-8">
            Illustrating for world-class brands
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {['Tech Startups', 'Fortune 500', 'Publishing', 'E-commerce', 'Apps & SaaS', 'Non-Profits'].map((type, i) => (
              <div key={i} className="text-lg md:text-xl font-bold text-foreground">{type}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-wider text-[hsl(340,75%,55%)] mb-4">PROVEN IMPACT</div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Unique visuals. <span className="italic text-[hsl(10,80%,65%)]">Unforgettable brands.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Custom illustration elevates your brand above generic stock photos. Every piece is tailored to your message, audience, and style guidelines.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {[
              { value: "2,800+", label: "Custom illustrations delivered annually" },
              { value: "89%", label: "Increase in content engagement vs stock" },
              { value: "5 days", label: "Average turnaround for complex illustrations" },
              { value: "100%", label: "Original artwork - zero stock imagery" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-[hsl(340,10%,98%)] rounded-xl" data-testid={`metric-${i}`}>
                <div className="text-5xl font-bold text-[hsl(340,75%,55%)] mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Illustration Styles */}
      <section className="py-20 bg-[hsl(340,10%,98%)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="text-sm uppercase tracking-wider text-[hsl(340,75%,55%)] mb-4">ILLUSTRATION STYLES</div>
          <h2 className="text-5xl md:text-6xl font-bold">
            Every style. <span className="italic text-[hsl(10,80%,65%)]">Every medium.</span>
          </h2>
        </div>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-6 px-4 scrollbar-hide snap-x snap-mandatory">
            {[
              { name: "Editorial Illustration", desc: "Magazine covers, article headers, opinion pieces. Conceptual storytelling, metaphor visualization, thought-provoking imagery. Publication-ready at any size.", icon: Book },
              { name: "Product Illustration", desc: "Technical diagrams, product exploded views, feature callouts. SaaS dashboards, app UI mockups, marketing materials. Precise, detailed, scalable.", icon: Image },
              { name: "Character Design", desc: "Mascots, brand ambassadors, avatars, and personas. From concept sketches to final polished characters. Consistent across all applications.", icon: Users },
              { name: "Isometric & 3D-Style", desc: "Isometric cityscapes, office scenes, tech ecosystems. Depth and dimension without full 3D rendering. Perfect for SaaS, tech, and process visualization.", icon: Sparkles },
              { name: "Icon Systems", desc: "Custom icon libraries for brands, apps, and websites. Pixel-perfect, consistent, scalable. Light/dark mode variants, multiple sizes, export-ready.", icon: Zap },
              { name: "Concept Art", desc: "Visual development for campaigns, products, and experiences. Mood boards, style frames, storyboards. Exploration before final execution.", icon: Palette },
            ].map((style, i) => (
              <div key={i} className="flex-none w-[360px] md:w-[480px] snap-center group" data-testid={`card-style-${i}`}>
                <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-border h-full">
                  <div className="relative h-[300px] md:h-[350px] bg-gradient-to-br from-rose-50 via-pink-50 to-orange-100 overflow-hidden flex items-center justify-center">
                    <style.icon className="h-24 w-24 text-[hsl(340,75%,55%)]/20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3">{style.name}</h3>
                    <p className="text-muted-foreground">{style.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-[hsl(340,75%,55%)] to-[hsl(10,80%,65%)] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready for original artwork?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's create custom illustrations that elevate your brand and captivate your audience.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-[hsl(340,75%,55%)]" data-testid="button-cta-primary">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white" data-testid="button-cta-secondary">
              See Portfolio
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
