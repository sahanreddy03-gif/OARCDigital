import { useEffect } from "react";
import { Link } from "wouter";
import { Package, Award, Sparkles, ShoppingBag, Box, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

export default function PrintPackaging() {
  useEffect(() => {
    document.title = "Print & Packaging Design Services | OARC Digital";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Product packaging, print collateral, and branded materials. From concept to production-ready files. Retail packaging, labels, boxes, and more.");
    }
    // Open Graph tags - always update content
    let ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (!ogTitleMeta) {
      ogTitleMeta = document.createElement('meta');
      ogTitleMeta.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitleMeta);
    }
    ogTitleMeta.setAttribute('content', 'Print & Packaging Design - Shelf-Ready Packaging | OARC Digital');
    
    let ogDescMeta = document.querySelector('meta[property="og:description"]');
    if (!ogDescMeta) {
      ogDescMeta = document.createElement('meta');
      ogDescMeta.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescMeta);
    }
    ogDescMeta.setAttribute('content', 'Product packaging and print design that sells. Retail-ready packaging, labels, boxes, and branded collateral.');
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-[hsl(160,60%,45%)] via-[hsl(170,55%,50%)] to-[hsl(180,60%,55%)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
            Packaging that <span className="italic">flies off shelves</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Product packaging, labels, boxes, and print collateral designed to sell. From concept sketches to production-ready dielines. Retail-tested, consumer-loved.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-[hsl(160,60%,45%)]" data-testid="button-get-started">
              Design My Packaging
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white" data-testid="button-view-work">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 px-4 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-sm uppercase tracking-wider text-muted-foreground mb-8">
            Packaging for brands at retail
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {['CPG Brands', 'Food & Beverage', 'Beauty & Cosmetics', 'E-commerce', 'Luxury Goods', 'Retail Stores'].map((type, i) => (
              <div key={i} className="text-lg md:text-xl font-bold text-foreground">{type}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-wider text-[hsl(160,60%,45%)] mb-4">PROVEN SALES IMPACT</div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Stand out. <span className="italic text-[hsl(180,60%,55%)]">Sell more.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Great packaging doesn't just protect—it persuades. We design for the retail environment, where every detail matters.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {[
              { value: "1,200+", label: "SKUs designed and launched to retail" },
              { value: "41%", label: "Average sales lift after packaging redesign" },
              { value: "98%", label: "First-time print approval rate" },
              { value: "10 days", label: "Average turnaround for production files" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-[hsl(160,10%,98%)] rounded-xl" data-testid={`metric-${i}`}>
                <div className="text-5xl font-bold text-[hsl(160,60%,45%)] mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Design */}
      <section className="py-20 bg-[hsl(160,10%,98%)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="text-sm uppercase tracking-wider text-[hsl(160,60%,45%)] mb-4">PACKAGING & PRINT SERVICES</div>
          <h2 className="text-5xl md:text-6xl font-bold">
            Every format. <span className="italic text-[hsl(180,60%,55%)]">Print-perfect.</span>
          </h2>
        </div>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-6 px-4 scrollbar-hide snap-x snap-mandatory">
            {[
              { name: "Product Packaging", desc: "Retail boxes, blister packs, clamshells, bags, pouches. Structural design, dielines, mockups. CMYK, Pantone, spot UV, embossing specs.", icon: Package },
              { name: "Labels & Stickers", desc: "Product labels, wine/beer labels, ingredient panels, warning labels. Die-cut shapes, roll labels, waterproof materials. FDA/regulatory compliant.", icon: Tag },
              { name: "Shipping Boxes & Mailers", desc: "E-commerce unboxing experiences. Corrugated boxes, custom mailers, tissue paper, inserts. Branded packaging that delights customers.", icon: Box },
              { name: "Shopping Bags & Totes", desc: "Retail shopping bags, gift bags, branded totes. Paper, fabric, reusable materials. Handle options, custom sizes, eco-friendly choices.", icon: ShoppingBag },
              { name: "Print Collateral", desc: "Brochures, catalogs, sell sheets, business cards, letterheads, envelopes. Trade show materials, posters, signage. Production-ready files.", icon: Award },
              { name: "Luxury & Premium Packaging", desc: "Gift boxes, magnetic closure boxes, rigid boxes, foil stamping, embossing. High-end finishes for premium products and limited editions.", icon: Sparkles },
            ].map((service, i) => (
              <div key={i} className="flex-none w-[360px] md:w-[480px] snap-center group" data-testid={`card-service-${i}`}>
                <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-border h-full">
                  <div className="relative h-[300px] md:h-[350px] bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-100 overflow-hidden flex items-center justify-center">
                    <service.icon className="h-24 w-24 text-[hsl(160,60%,45%)]/20" />
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
      <section className="py-20 px-4 bg-gradient-to-br from-[hsl(160,60%,45%)] to-[hsl(180,60%,55%)] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to design packaging that sells?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            From concept to retail shelves—let's create packaging that captivates customers and drives sales.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-[hsl(160,60%,45%)]" data-testid="button-cta-primary">
              Start Your Project
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white" data-testid="button-cta-secondary">
              Get a Quote
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
