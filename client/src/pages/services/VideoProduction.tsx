import { useEffect } from "react";
import { Link } from "wouter";
import { Video, Film, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

export default function VideoProduction() {
  useEffect(() => {
    document.title = "Video Production Services | OARC Digital";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "On-brand video storytelling that moves as fast as your campaign calendar. Over 1000 videos delivered, on brief and always on time.");
    }
  }, []);

  return (
    <Layout>
    <div className="video-production">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-600 via-pink-600 to-red-600">
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="text-sm uppercase tracking-wider text-white/80 mb-4">Video Production Services</div>
          <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-6">
            On-brand <span className="italic">video storytelling</span> that moves as fast as your campaign calendar
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Over 1000 videos delivered, on brief and always on time
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90 h-12 px-8" data-testid="button-need-video">
            Need Video Fast? Let's Talk
          </Button>
        </div>

        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900 to-pink-900" />
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 px-4 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-sm uppercase tracking-wider text-muted-foreground mb-8">
            Trusted by the world's top brands
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {['YouTube', 'Netflix', 'Disney', 'HBO', 'Spotify', 'TikTok', 'Vimeo', 'Adobe'].map((brand, i) => (
              <div key={i} className="text-xl md:text-2xl font-bold text-foreground">{brand}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Video */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-wider text-purple-600 mb-4">SEAMLESS SUPPORT</div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              More content, less stress, and <span className="italic text-pink-600">better results</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Unlike slow agencies or oversight-needing freelancers, our flexible video services plug into your workflows and scale with your needs.
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              { value: "1200%", label: "More shares for social video over static content" },
              { value: "80%", label: "Higher conversion on landing pages with video" },
              { value: "1000+", label: "Video projects delivered to date" },
            ].map((metric, i) => (
              <div key={i} className="text-center" data-testid={`metric-${i}`}>
                <div className="text-6xl md:text-7xl font-bold text-purple-600 mb-3">{metric.value}</div>
                <div className="text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Options - Large Cards */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="text-sm uppercase tracking-wider text-purple-600 mb-4">FULL-SERVICE PRODUCTION</div>
          <h2 className="text-5xl md:text-6xl font-bold">
            Flexible production options for <span className="italic text-pink-600">every kind of video need</span>
          </h2>
        </div>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-6 px-4 scrollbar-hide snap-x snap-mandatory">
            {[
              { name: "Full-Service Commercial", desc: "Script, cast, shoot, edit, and animate. Your cinematic campaign starts here.", icon: Film },
              { name: "Social-First Video", desc: "Made-for-platform content that is fast, fun, and built for thumb-stopping impact.", icon: Video },
              { name: "Performance Video", desc: "Build paid campaigns that convert, optimize rollout by channel, experiment with an expert by your side.", icon: Sparkles },
              { name: "Video Specialists", desc: "Only need the shoot? The edit? The voiceover? Plug our team into the gaps in yours.", icon: Film },
              { name: "Just the Concept", desc: "Bring us your goals and we'll return a ready-to-produce creative concept.", icon: Sparkles },
              { name: "AI-Enhanced Video", desc: "Adding motion, speeding up production, and getting to market faster with AI-human collaboration.", icon: Sparkles },
            ].map((item, i) => (
              <div key={i} className="flex-none w-[360px] md:w-[480px] snap-center group" data-testid={`card-video-type-${i}`}>
                <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative h-[300px] md:h-[400px] bg-gradient-to-br from-purple-100 via-pink-100 to-red-100 overflow-hidden flex items-center justify-center">
                    <item.icon className="h-24 w-24 text-purple-600/20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
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
          </div>
        </div>
      </section>

      {/* Platform Proficiency */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-wider text-purple-600 mb-4">PLATFORM PROFICIENCY</div>
            <h2 className="text-5xl md:text-6xl font-bold">
              In-depth channel expertise for <span className="italic text-pink-600">content that converts</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "YouTube, Meta, TikTok, LinkedIn", desc: "Designed to perform in-feed, in-stream, and on-platform. Optimized from day one." },
              { name: "TV and Streaming", desc: "Broadcast-ready ads with cinematic polish, built to scale across channels and countries." },
              { name: "Product Demos", desc: "Clear, on-brand videos that turn curious clicks into committed customers." },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-xl border border-border hover:border-purple-600 hover:shadow-lg transition-all" data-testid={`card-platform-${i}`}>
                <h3 className="text-2xl font-bold mb-3">{item.name}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to <span className="italic">press play</span> on your video strategy?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's create video content that captures attention and drives action
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90 h-12 px-8" data-testid="button-cta-demo">
              Let's Talk Video
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
