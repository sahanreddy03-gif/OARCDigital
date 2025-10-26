import { useEffect } from "react";
import { Link } from "wouter";
import { Code, Smartphone, Zap, Layers, ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

export default function WebDesign() {
  useEffect(() => {
    document.title = "Web Design & Landing Pages | OARC Digital";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "High-performing web solutions built to grow with your brand. Fast, scalable, designed to convert.");
    }
  }, []);

  return (
    <Layout>
    <div className="web-design">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[hsl(220,65%,33%)] to-[hsl(188,95%,43%)]">
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="text-sm uppercase tracking-wider text-white/80 mb-4">Web Design Services</div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
            High-performing web solutions <span className="italic">built to grow</span> with your brand
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Fast, scalable web experiences, designed and optimized to convert across every screen and stage of the funnel.
          </p>
          <Button size="lg" className="bg-white text-[hsl(220,65%,33%)] hover:bg-white/90 h-12 px-8" data-testid="button-book-call">
            Book a Call
          </Button>
        </div>

        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-800" />
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 px-4 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-sm uppercase tracking-wider text-muted-foreground mb-8">
            Trusted by the world's top brands
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {['Stripe', 'Shopify', 'Webflow', 'Figma', 'Notion', 'Slack', 'Dropbox', 'Airbnb'].map((brand, i) => (
              <div key={i} className="text-xl md:text-2xl font-bold text-foreground">{brand}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Website is a Growth Engine */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-wider text-[hsl(220,65%,33%)] mb-4">WHY WEB DESIGN MATTERS</div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Every page, <span className="italic text-[hsl(188,95%,43%)]">every pixel</span>, every click—optimized to convert
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your website is working 24/7. Make every second count with conversion-focused design, lightning-fast load times, and experiences that turn visitors into customers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { value: "38%", label: "Average conversion rate increase" },
              { value: "2.3s", label: "Page load time (industry avg: 4.7s)" },
              { value: "94%", label: "Mobile-first design success rate" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-[hsl(220,20%,98%)] rounded-xl">
                <div className="text-5xl font-bold text-[hsl(220,65%,33%)] mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer - Large Cards */}
      <section className="py-20 bg-[hsl(220,20%,98%)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="text-sm uppercase tracking-wider text-[hsl(220,65%,33%)] mb-4">WHAT WE OFFER</div>
          <h2 className="text-5xl md:text-6xl font-bold">
            Creative web design, ready to <span className="italic text-[hsl(188,95%,43%)]">scale and convert</span>
          </h2>
        </div>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-6 px-4 scrollbar-hide snap-x snap-mandatory">
            {[
              { name: "Full Website Design", desc: "Conversion-optimized websites from sitemap to launch. UX research, wireframes, prototypes, and pixel-perfect UI. Built to scale.", icon: Layers },
              { name: "High-Converting Landing Pages", desc: "Single-purpose pages engineered to convert. A/B test ready, mobile-first, and optimized for Core Web Vitals. Launch in 7 days.", icon: Zap },
              { name: "E-commerce Design", desc: "Product pages, cart flows, checkout optimization. Reduce cart abandonment by 25%+ with proven UX patterns.", icon: Code },
              { name: "Design System & Components", desc: "Scalable component libraries with documentation. Accelerate development by 3x while maintaining brand consistency.", icon: Layers },
              { name: "Conversion Rate Optimization", desc: "Data-driven CRO audits, heatmaps, session recordings, A/B testing. Find and fix conversion leaks.", icon: TrendingUp },
              { name: "Webflow & Framer Development", desc: "No-code development on Webflow or Framer. Full control, easy updates, blazing fast performance.", icon: Zap },
            ].map((item, i) => (
              <div key={i} className="flex-none w-[360px] md:w-[480px] snap-center group" data-testid={`card-service-${i}`}>
                <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-border">
                  <div className="relative h-[400px] md:h-[500px] bg-gradient-to-br from-slate-50 via-cyan-50 to-slate-100 overflow-hidden flex items-center justify-center">
                    <item.icon className="h-24 w-24 text-[hsl(220,65%,33%)]/20" />
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

      {/* Before/After Transformations */}
      <section className="py-20 px-4 bg-[hsl(210,20%,98%)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-wider text-[hsl(220,65%,33%)] mb-4">TRANSFORMATION</div>
            <h2 className="text-5xl md:text-6xl font-bold">
              From <span className="italic text-[hsl(188,95%,43%)]">outdated</span> to outstanding
            </h2>
          </div>

          <div className="space-y-16">
            {[
              { category: "E-commerce", before: "Cluttered product pages", after: "Clean, conversion-focused design" },
              { category: "SaaS Platform", before: "Confusing navigation", after: "Intuitive user flows" },
              { category: "Brand Site", before: "Generic template", after: "Custom brand experience" },
            ].map((item, i) => (
              <div key={i} className="grid md:grid-cols-2 gap-8" data-testid={`before-after-${i}`}>
                {/* Before */}
                <div className="group">
                  <div className="mb-4">
                    <span className="text-sm uppercase tracking-wider text-muted-foreground">Before</span>
                    <h3 className="text-2xl font-bold mt-2">{item.before}</h3>
                  </div>
                  <div className="relative h-[400px] bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg overflow-hidden border-2 border-red-300">
                    <div className="absolute top-4 left-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full">Before</div>
                  </div>
                </div>

                {/* After */}
                <div className="group">
                  <div className="mb-4">
                    <span className="text-sm uppercase tracking-wider text-muted-foreground">After</span>
                    <h3 className="text-2xl font-bold mt-2">{item.after}</h3>
                  </div>
                  <div className="relative h-[400px] bg-gradient-to-br from-cyan-50 to-slate-50 rounded-lg overflow-hidden border-2 border-[hsl(188,95%,43%)]">
                    <div className="absolute top-4 left-4 bg-[hsl(188,95%,43%)] text-white text-xs px-3 py-1 rounded-full">After</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-wider text-[hsl(220,65%,33%)] mb-4">METRICS THAT MATTER</div>
            <h2 className="text-5xl md:text-6xl font-bold">
              A <span className="italic text-[hsl(188,95%,43%)]">creative web design partner</span> you can trust
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: "400+", label: "Websites and landing pages designed" },
              { value: "2.1M+", label: "Annual conversions generated" },
              { value: "7 days", label: "Average landing page delivery" },
            ].map((metric, i) => (
              <div key={i} className="text-center" data-testid={`metric-${i}`}>
                <div className="text-6xl md:text-7xl font-bold text-[hsl(220,65%,33%)] mb-3">{metric.value}</div>
                <div className="text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-[hsl(220,65%,33%)] to-[hsl(188,95%,43%)] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to transform your <span className="italic">digital presence?</span>
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's build web experiences that convert and scale
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-white text-[hsl(220,65%,33%)] hover:bg-white/90 h-12 px-8" data-testid="button-cta-demo">
              Book a Call
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
