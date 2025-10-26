import { useEffect } from "react";
import { Link } from "wouter";
import { Instagram, Youtube, Linkedin, Facebook, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

export default function SocialMediaCreative() {
  useEffect(() => {
    document.title = "Social Media Creative Services | OARC Digital";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Scroll-stopping social content for Instagram, TikTok, LinkedIn & more. Creative that clicks.");
    }
  }, []);

  return (
    <Layout>
    <div className="social-media-creative">
      {/* Hero Section - Full-width visual with minimal text */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[hsl(262,83%,58%)] to-[hsl(330,81%,60%)]">
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
            Your <span className="italic">competitive edge</span> in a crowded feed
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Scroll-stopping content that gets your brand noticed and drives results
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" variant="default" className="bg-white text-[hsl(262,83%,58%)] hover:bg-white/90 h-12 px-8" data-testid="button-book-demo">
              Book a Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 h-12 px-8" data-testid="button-view-work">
              View Our Work
            </Button>
          </div>
        </div>

        {/* Placeholder for hero video/image */}
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-gradient-to-br from-purple-900 to-pink-900 flex items-center justify-center">
            <div className="text-white/50 text-center">
              <div className="text-sm uppercase tracking-wider mb-2">Hero Asset Placeholder</div>
              <div className="text-xs">4K/UHD Video (3840x2160)</div>
              <div className="text-xs mt-1">Social media content montage</div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready-to-Post Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-[hsl(262,83%,58%)] mb-4">READY-TO-POST</div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Your shortcut to <span className="italic text-[hsl(330,81%,60%)]">scroll-stopping</span> content
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xl text-muted-foreground mb-6">
                Scaling your social ads and posts in-house? Easier said than done. Whether it's looming deadlines or limited resources, keeping up with the demand for compelling social media content is a challenge.
              </p>
              <p className="text-xl text-muted-foreground mb-8">
                Our fully-stacked creative team is ready to deliver high-performing content. On-brand, on-trend, and on your deadline.
              </p>
              <Button size="lg" className="bg-[hsl(262,83%,58%)] hover:bg-[hsl(262,83%,50%)]" data-testid="button-get-started">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Placeholder portfolio images */}
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-300">
                  <div className="text-center text-muted-foreground">
                    <div className="text-xs">Portfolio #{i}</div>
                    <div className="text-xs mt-1">1920x1920</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Scrolling Platform Showcase */}
      <section className="py-20 bg-[hsl(270,100%,98%)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="text-sm uppercase tracking-wider text-[hsl(262,83%,58%)] mb-4">MADE FOR SOCIAL</div>
          <h2 className="text-5xl md:text-6xl font-bold">
            Creative that <span className="italic text-[hsl(330,81%,60%)]">clicks</span>
          </h2>
        </div>

        {/* Horizontal scrolling container */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-6 px-4 scrollbar-hide snap-x snap-mandatory">
            {/* Platform cards */}
            {[
              { name: "Organic Social Content", icon: Instagram },
              { name: "Video Content", icon: Youtube },
              { name: "Post Design", icon: Instagram },
              { name: "Social Collateral", icon: Facebook },
              { name: "Response Guide", icon: Linkedin },
              { name: "Social Concepts", icon: Instagram },
            ].map((item, i) => (
              <div key={i} className="flex-none w-80 snap-center">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                  {/* Image placeholder */}
                  <div className="h-96 bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <item.icon className="h-12 w-12 mx-auto mb-2 opacity-50" />
                      <div className="text-xs">Platform Example</div>
                      <div className="text-xs mt-1">1440x1548</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                    <p className="text-muted-foreground text-sm">
                      Engage your audience with authentic and compelling content that boosts reach and loyalty.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Mastery Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-wider text-[hsl(262,83%,58%)] mb-4">PLATFORM MASTERY</div>
            <h2 className="text-5xl md:text-6xl font-bold">
              Expertise across <span className="italic text-[hsl(330,81%,60%)]">all social platforms</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Instagram", icon: Instagram, desc: "Captivate Instagram's visually-driven audience with stunning graphics" },
              { name: "TikTok", icon: Youtube, desc: "Tap into viral content designed for maximum shareability" },
              { name: "LinkedIn", icon: Linkedin, desc: "Position your brand as an industry leader with professional content" },
              { name: "Facebook", icon: Facebook, desc: "Maximize engagement with custom creative tailored for Facebook" },
              { name: "YouTube", icon: Youtube, desc: "Optimize viewer interaction with tailored creatives for YouTube" },
              { name: "Other Platforms", icon: Instagram, desc: "Global team ready to cater to any platform preference" },
            ].map((platform, i) => (
              <div key={i} className="group p-6 rounded-xl border border-border hover:border-[hsl(262,83%,58%)] hover:shadow-lg transition-all" data-testid={`card-platform-${platform.name.toLowerCase().replace(' ', '-')}`}>
                <platform.icon className="h-10 w-10 text-[hsl(262,83%,58%)] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">{platform.name}</h3>
                <p className="text-muted-foreground">{platform.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI-Enhanced Section */}
      <section className="py-20 px-4 bg-[hsl(218,26%,17%)] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-sm uppercase tracking-wider text-[hsl(262,83%,58%)] mb-4">AI-ENHANCED</div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Powerful creative, <span className="italic text-[hsl(330,81%,60%)]">impressive</span> turnarounds
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            By equipping the top 1% of global talent with the latest AI tools, we're able to deliver high-performing ad creative <span className="font-bold text-[hsl(330,81%,60%)]">up to 60% faster.</span>
          </p>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" data-testid="button-ai-services">
            AI Design Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 px-4 bg-[hsl(270,100%,98%)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-wider text-[hsl(262,83%,58%)] mb-4">PROVEN IMPACT</div>
            <h2 className="text-5xl md:text-6xl font-bold">
              <span className="italic text-[hsl(330,81%,60%)]">Data-driven success</span> for our customers
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "20K+", label: "Social media creative projects completed" },
              { value: "1,900+", label: "Total customers using our services" },
              { value: "30k+", label: "Hours dedicated to social creative" },
              { value: "4.8/5", label: "Average project approval rating" },
            ].map((metric, i) => (
              <div key={i} className="text-center" data-testid={`metric-${i}`}>
                <div className="text-6xl md:text-7xl font-bold text-[hsl(262,83%,58%)] mb-3">{metric.value}</div>
                <div className="text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-[hsl(262,83%,58%)] to-[hsl(330,81%,60%)] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to level up your social media game?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's create scroll-stopping content that drives real results
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-white text-[hsl(262,83%,58%)] hover:bg-white/90 h-12 px-8" data-testid="button-cta-demo">
              Book a Demo
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
