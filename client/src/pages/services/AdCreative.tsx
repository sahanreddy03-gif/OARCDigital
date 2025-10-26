import { useEffect } from "react";
import { Link } from "wouter";
import { Facebook, Linkedin, Instagram, Youtube, ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

export default function AdCreative() {
  useEffect(() => {
    document.title = "Ad Creative Services | OARC Digital";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Ad creative designed to convert. High-performing ads in any format, for any platform.");
    }
  }, []);

  return (
    <Layout>
    <div className="ad-creative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[hsl(221,91%,60%)] to-[hsl(158,83%,39%)]">
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="text-sm uppercase tracking-wider text-white/80 mb-4">Creative Services</div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
            Ad creative designed to <span className="italic">convert</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Flexible. Agile. Versatile. We deliver the high-performing ad creative you're after—in any format, for any use.
          </p>
          <Button size="lg" className="bg-white text-[hsl(221,91%,60%)] hover:bg-white/90 h-12 px-8" data-testid="button-book-demo">
            Book a Demo
          </Button>
        </div>

        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-blue-900 to-green-900" />
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 px-4 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-sm uppercase tracking-wider text-muted-foreground mb-8">
            Trusted by 500+ of the world's biggest brands
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {['Meta', 'Google', 'LinkedIn', 'Amazon', 'Shopify', 'HubSpot', 'Salesforce', 'Adobe'].map((brand, i) => (
              <div key={i} className="text-xl md:text-2xl font-bold text-foreground">{brand}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative That Converts */}
      <section className="py-20 px-4 bg-[hsl(210,20%,98%)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-wider text-[hsl(221,91%,60%)] mb-4">CREATIVE THAT CONVERTS</div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Lower your CPA. <span className="italic text-[hsl(158,83%,39%)]">Increase ROAS.</span> Scale profitably.
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Performance-focused ad creative backed by data. We A/B test every concept, optimize for conversion, and deliver ads that actually move metrics—not just look pretty.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { value: "43%", label: "Average CPA reduction in first 90 days" },
              { value: "2.8x", label: "Average ROAS improvement" },
              { value: "50+", label: "Ad variations tested per campaign" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-xl border border-border">
                <div className="text-5xl font-bold text-[hsl(221,91%,60%)] mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Only Creative Subscription - Large Cards */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="text-sm uppercase tracking-wider text-[hsl(221,91%,60%)] mb-4">CREATIVITY, REIMAGINED</div>
          <h2 className="text-5xl md:text-6xl font-bold">
            The <span className="italic text-[hsl(158,83%,39%)]">only</span> creative subscription you'll ever need
          </h2>
        </div>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-6 px-4 scrollbar-hide snap-x snap-mandatory">
            {[
              { name: "Static Ad Creative", desc: "High-converting static ads optimized for Facebook, Instagram, TikTok, and Google Display. Test 20+ variants per week." },
              { name: "Video & Motion Ads", desc: "15s, 30s, 60s video ads engineered for platform algorithms. Hooks tested to maximize 3-second retention." },
              { name: "UGC-Style Ads", desc: "Authentic user-generated content that outperforms polished ads. Real creators, real results, better CTR." },
              { name: "Dynamic Product Ads", desc: "Automated catalog ads with personalized product recommendations. Scale to thousands of SKUs effortlessly." },
              { name: "Carousel & Collection Ads", desc: "Multi-product storytelling formats proven to increase AOV by 32%. Perfect for e-commerce brands." },
              { name: "Retargeting Creative", desc: "Stage-aware creative that speaks to where customers are in the funnel. Cart abandonment to loyalty loops." },
            ].map((item, i) => (
              <div key={i} className="flex-none w-[360px] md:w-[480px] snap-center group" data-testid={`card-ad-type-${i}`}>
                <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-border">
                  <div className="relative h-[400px] md:h-[500px] bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        View Example →
                      </div>
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
      <section className="py-20 px-4 bg-[hsl(210,20%,98%)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-wider text-[hsl(221,91%,60%)] mb-4">PLATFORM PROFICIENCY</div>
            <h2 className="text-5xl md:text-6xl font-bold">
              In-depth channel expertise for <span className="italic text-[hsl(158,83%,39%)]">ads that click</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Facebook", icon: Facebook, desc: "Maximize your presence with ads optimized for engagement and conversion" },
              { name: "LinkedIn", icon: Linkedin, desc: "Target professionals effectively with ads designed to generate leads" },
              { name: "Instagram", icon: Instagram, desc: "Capture the visual-centric audience with eye-catching ads" },
              { name: "TikTok", icon: TrendingUp, desc: "Tap into this growing channel with trendy, catchy, viral-worthy content" },
              { name: "YouTube", icon: Youtube, desc: "Take advantage of granular targeting with memorable video ads" },
              { name: "Other Platforms", icon: Facebook, desc: "We have skills across the board and can cater to any need" },
            ].map((platform, i) => (
              <div key={i} className="group p-6 rounded-xl border border-border hover:border-[hsl(221,91%,60%)] hover:shadow-lg transition-all bg-white" data-testid={`card-platform-${platform.name.toLowerCase()}`}>
                <platform.icon className="h-10 w-10 text-[hsl(221,91%,60%)] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">{platform.name}</h3>
                <p className="text-muted-foreground">{platform.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "$200M+", label: "Ad spend managed for clients" },
              { value: "500+", label: "Ad concepts tested weekly" },
              { value: "2.1x", label: "Average CTR improvement" },
              { value: "72hrs", label: "Turnaround for new creative" },
            ].map((metric, i) => (
              <div key={i} className="text-center" data-testid={`metric-${i}`}>
                <div className="text-6xl md:text-7xl font-bold text-[hsl(221,91%,60%)] mb-3">{metric.value}</div>
                <div className="text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-[hsl(221,91%,60%)] to-[hsl(158,83%,39%)] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to create ads that <span className="italic">actually convert?</span>
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's build scroll-stopping creative that drives real results
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-white text-[hsl(221,91%,60%)] hover:bg-white/90 h-12 px-8" data-testid="button-cta-demo">
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
