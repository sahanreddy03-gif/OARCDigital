import { useEffect } from "react";
import { Link } from "wouter";
import { Film, Zap, Play, Sparkles, Move, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

export default function MotionDesign() {
  useEffect(() => {
    document.title = "Motion Design Services - Animation & Motion Graphics | OARC Digital";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Motion graphics, kinetic typography, logo animations, and explainer videos. Bring your brand to life with professional motion design.");
    }
    // Open Graph tags - always update content
    let ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (!ogTitleMeta) {
      ogTitleMeta = document.createElement('meta');
      ogTitleMeta.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitleMeta);
    }
    ogTitleMeta.setAttribute('content', 'Motion Design Services - Bring Your Brand to Life | OARC Digital');
    
    let ogDescMeta = document.querySelector('meta[property="og:description"]');
    if (!ogDescMeta) {
      ogDescMeta = document.createElement('meta');
      ogDescMeta.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescMeta);
    }
    ogDescMeta.setAttribute('content', 'Motion graphics and animation that captivates. Logo animations, explainer videos, kinetic typography, and more.');
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-[hsl(280,70%,50%)] via-[hsl(290,65%,55%)] to-[hsl(310,70%,60%)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
            Motion that <span className="italic">moves people</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Motion graphics, kinetic typography, logo animations, and explainer videos. We bring brands to life through the art of motion design.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-[hsl(280,70%,50%)]" data-testid="button-get-started">
              Animate Your Brand
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white" data-testid="button-view-reel">
              View Showreel
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 px-4 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-sm uppercase tracking-wider text-muted-foreground mb-8">
            Animating for world-class brands
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {['Tech Companies', 'Streaming Platforms', 'Social Brands', 'SaaS Products', 'Marketing Agencies', 'Event Producers'].map((type, i) => (
              <div key={i} className="text-lg md:text-xl font-bold text-foreground">{type}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-wider text-[hsl(280,70%,50%)] mb-4">PROVEN ENGAGEMENT</div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Static is dead. <span className="italic text-[hsl(310,70%,60%)]">Motion wins.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Motion graphics capture attention, explain complex ideas simply, and boost engagement across every channel.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {[
              { value: "4,100+", label: "Motion graphics projects delivered" },
              { value: "3.2x", label: "Higher engagement vs static content" },
              { value: "7 days", label: "Average turnaround for 30s animations" },
              { value: "94%", label: "Client retention rate year-over-year" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-[hsl(280,10%,98%)] rounded-xl" data-testid={`metric-${i}`}>
                <div className="text-5xl font-bold text-[hsl(280,70%,50%)] mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Motion Services */}
      <section className="py-20 bg-[hsl(280,10%,98%)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="text-sm uppercase tracking-wider text-[hsl(280,70%,50%)] mb-4">MOTION DESIGN SERVICES</div>
          <h2 className="text-5xl md:text-6xl font-bold">
            Every style. <span className="italic text-[hsl(310,70%,60%)]">Every platform.</span>
          </h2>
        </div>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-6 px-4 scrollbar-hide snap-x snap-mandatory">
            {[
              { name: "Logo Animations", desc: "Bring your logo to life. Intro sequences, YouTube outros, app splash screens, social stingers. Subtle micro-animations to full brand reveals.", icon: Sparkles },
              { name: "Explainer Videos", desc: "Simplify complex products and services. Animated explainers for SaaS, fintech, healthcare, tech. Script to final render. 60-90s sweet spot.", icon: Play },
              { name: "Kinetic Typography", desc: "Text that moves with purpose. Lyric videos, quote animations, announcement videos. Synced to music, voiceover, or silence for social feeds.", icon: Move },
              { name: "Social Media Motion", desc: "Scroll-stopping animations for Instagram, TikTok, LinkedIn, Twitter. GIFs, stickers, Reels, Stories. Optimized for each platform's specs.", icon: Zap },
              { name: "Infographic Animations", desc: "Data visualization in motion. Chart animations, number counters, progress bars, timelines. Make data memorable and shareable.", icon: Layers },
              { name: "Title Sequences & Intros", desc: "Opening sequences for videos, podcasts, webinars, events. Broadcast-quality motion design. Customizable templates for ongoing content.", icon: Film },
            ].map((service, i) => (
              <div key={i} className="flex-none w-[360px] md:w-[480px] snap-center group" data-testid={`card-service-${i}`}>
                <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-border h-full">
                  <div className="relative h-[300px] md:h-[350px] bg-gradient-to-br from-purple-50 via-fuchsia-50 to-pink-100 overflow-hidden flex items-center justify-center">
                    <service.icon className="h-24 w-24 text-[hsl(280,70%,50%)]/20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-[hsl(280,70%,50%)] to-[hsl(310,70%,60%)] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to add motion to your brand?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's create motion graphics that captivate audiences, explain ideas, and elevate your content.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-[hsl(280,70%,50%)]" data-testid="button-cta-primary">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white" data-testid="button-cta-secondary">
              See Pricing
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
