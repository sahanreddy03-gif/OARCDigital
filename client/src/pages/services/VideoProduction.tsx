import { useEffect } from "react";
import { Link } from "wouter";
import { Video, Film, Sparkles, ArrowRight, Lightbulb } from "lucide-react";
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
              { value: "1,200%", label: "More shares for video vs static content" },
              { value: "86%", label: "Higher conversion with video on landing pages" },
              { value: "14 days", label: "Average full-service video turnaround" },
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
              { name: "Full-Service Commercial Production", desc: "End-to-end production: concept, scripting, casting, filming, editing, color grading, and sound design. Cinematic quality, brand-perfect.", icon: Film },
              { name: "Social-First Short-Form Video", desc: "15s-60s vertical videos for TikTok, Reels, and Shorts. Hook-first storytelling optimized for mobile and algorithms.", icon: Video },
              { name: "Explainer & Product Videos", desc: "Demo videos, tutorials, and explainers that educate and convert. Perfect for SaaS, e-commerce, and B2B.", icon: Sparkles },
              { name: "UGC & Testimonial Videos", desc: "Authentic customer testimonials and user-generated content that builds trust and drives social proof.", icon: Film },
              { name: "Animated Videos & Motion Graphics", desc: "2D/3D animation, kinetic typography, and motion graphics. Perfect when live-action isn't the answer.", icon: Sparkles },
              { name: "Video Editing & Post-Production", desc: "Already have footage? We'll transform raw clips into polished, branded videos. Color, sound, graphics—the works.", icon: Sparkles },
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

      {/* Production Process */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-wider text-purple-600 mb-4">OUR PROCESS</div>
            <h2 className="text-5xl md:text-6xl font-bold">
              From brief to <span className="italic text-pink-600">brilliant</span> in 4 steps
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", name: "Concept", desc: "Creative direction, storyboarding, and script development aligned with your goals", icon: Lightbulb },
              { step: "02", name: "Production", desc: "Casting, filming, directing with world-class crew and equipment", icon: Film },
              { step: "03", name: "Post", desc: "Editing, color grading, sound design, motion graphics, and VFX", icon: Video },
              { step: "04", name: "Delivery", desc: "Platform-optimized formats ready to launch and drive results", icon: Sparkles },
            ].map((item, i) => (
              <div key={i} className="relative group" data-testid={`process-step-${i}`}>
                <div className="text-8xl font-bold text-purple-600/10 absolute -top-8 left-0 group-hover:text-purple-600/20 transition-colors">
                  {item.step}
                </div>
                <div className="relative pt-16 p-6 bg-white rounded-xl border border-border hover:border-purple-600 hover:shadow-xl transition-all h-full">
                  <item.icon className="h-12 w-12 text-purple-600 mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{item.name}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Social Platform Videos", desc: "Platform-specific formats for YouTube, TikTok, Instagram, LinkedIn, and Twitter. Each optimized for the algorithm." },
              { name: "Paid Advertising", desc: "Video ads built to convert. Pre-roll, mid-roll, in-feed, and stories ads that drive clicks and sales." },
              { name: "Website & Landing Pages", desc: "Hero videos, background loops, and product demos that increase time-on-site and conversions." },
              { name: "Internal Communications", desc: "Training videos, company updates, and onboarding content that engages your team." },
              { name: "Event & Conference Content", desc: "Highlight reels, speaker recordings, and promotional videos that extend your event's reach." },
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
