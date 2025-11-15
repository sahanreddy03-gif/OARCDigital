import { useEffect } from "react";
import { Link } from "wouter";
import { Package, Award, Sparkles, ShoppingBag, Box, Tag, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollableCards } from "@/components/ui/scrollable-cards";
import Layout from "@/components/layout/Layout";
import heroImage from '@assets/printy design_1763086257815.avif';

export default function PrintPackaging() {
  useEffect(() => {
    window.scrollTo(0, 0);
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
      {/* Hero Section with Real Image */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt="Product packaging design"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Packaging that <span className="italic bg-gradient-to-r from-[hsl(160,60%,45%)] via-[hsl(170,55%,50%)] to-[hsl(180,60%,55%)] text-transparent bg-clip-text">flies off shelves</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Product packaging designed to capture attention, communicate value, and drive sales. From initial concept to print-ready dielines. Retail-tested designs that turn browsers into buyers.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button size="lg" className="bg-white text-[hsl(160,60%,45%)] hover:bg-white/90" data-testid="button-get-started">
              Design My Packaging
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20" data-testid="button-view-work">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 px-4 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-sm uppercase tracking-wider text-muted-foreground mb-8">
            Designing for retail leaders
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {['CPG Startups', 'Food & Beverage Brands', 'Beauty & Skincare Lines', 'DTC E-commerce', 'Craft Breweries', 'Supplement Companies'].map((type, i) => (
              <div key={i} className="text-lg md:text-xl font-bold text-foreground">{type}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics - REDUCED SIZE */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-[hsl(160,60%,45%)] mb-3">PROVEN SALES IMPACT</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Stand out. <span className="italic text-[hsl(180,60%,55%)]">Sell more.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Great packaging doesn't just protect—it persuades. We design for the retail environment, where every detail matters.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-10">
            {[
              { value: "1,200+", label: "SKUs launched to retail" },
              { value: "41%", label: "Avg. sales lift post-redesign" },
              { value: "98%", label: "First-time approval rate" },
              { value: "10 days", label: "Production file turnaround" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-8 bg-gradient-to-br from-[hsl(160,10%,98%)] to-white rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1" data-testid={`metric-${i}`}>
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[hsl(160,60%,45%)] to-[hsl(180,60%,55%)] text-transparent bg-clip-text mb-3">{stat.value}</div>
                <div className="text-base text-muted-foreground font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 px-4 bg-[hsl(160,10%,98%)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-sm uppercase tracking-wider text-[hsl(160,60%,45%)] mb-4">CLIENT SPOTLIGHT</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            How premium packaging drove <span className="italic text-[hsl(180,60%,55%)]">shelf velocity for a CBD brand</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
              <p className="text-lg text-muted-foreground mb-6">
                A wellness CBD brand was struggling to compete in crowded health food stores. Their packaging looked "cheap" compared to premium competitors, despite having a superior product. They needed packaging that commanded higher price points and stood out on crowded shelves.
              </p>
              
              <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
              <ul className="space-y-3 mb-6">
                {[
                  'Developed elevated unboxing experience with rigid boxes',
                  'Introduced spot UV, embossing, and premium finishes',
                  'Created modular label system for 12 product SKUs',
                  'Designed retail display boxes and shelf merchandising'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[hsl(160,60%,45%)] flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 border border-border">
              <h3 className="text-xl font-bold mb-6">Results After Retail Launch</h3>
              <div className="space-y-6">
                {[
                  { metric: '+127%', label: 'Shelf velocity increase' },
                  { metric: '+$12', label: 'Average order value lift' },
                  { metric: '76%', label: 'Customers kept packaging (vs 8% before)' },
                  { metric: '3.8x', label: 'ROI on packaging investment' }
                ].map((result, i) => (
                  <div key={i} className="flex justify-between items-center pb-4 border-b border-border last:border-0">
                    <span className="text-muted-foreground">{result.label}</span>
                    <span className="text-2xl font-bold text-[hsl(160,60%,45%)]">{result.metric}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Design */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="text-sm uppercase tracking-wider text-[hsl(160,60%,45%)] mb-4">PACKAGING & PRINT SERVICES</div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Every format. <span className="italic text-[hsl(180,60%,55%)]">Print-perfect.</span>
          </h2>
        </div>

        <div className="relative">
          <ScrollableCards>
            {[
              { 
                name: "Product Packaging", 
                desc: "Retail-ready boxes, blister packs, and custom structural designs that protect and persuade.",
                features: ['Structural design', 'Die-lines & mockups', 'CMYK + Pantone specs', 'Embossing options'],
                icon: Package 
              },
              { 
                name: "Labels & Stickers", 
                desc: "Product labels that comply with regulations while capturing attention on crowded shelves.",
                features: ['Product labels', 'Ingredient panels', 'Die-cut shapes', 'FDA compliant'],
                icon: Tag 
              },
              { 
                name: "Shipping & Unboxing", 
                desc: "E-commerce packaging that creates memorable first impressions and encourages social sharing.",
                features: ['Custom mailers', 'Tissue inserts', 'Thank you cards', 'Branded tape'],
                icon: Box 
              },
              { 
                name: "Retail Displays", 
                desc: "Point-of-purchase displays, counter cards, and merchandising that drives impulse purchases.",
                features: ['POS displays', 'Shelf talkers', 'Counter cards', 'Signage systems'],
                icon: ShoppingBag 
              },
              { 
                name: "Print Collateral", 
                desc: "Business cards to catalogs—every print piece designed for impact and brand consistency.",
                features: ['Brochures & catalogs', 'Business cards', 'Sell sheets', 'Trade show materials'],
                icon: Award 
              },
              { 
                name: "Luxury Packaging", 
                desc: "Premium finishes for high-end products. Rigid boxes, foil stamping, and magnetic closures.",
                features: ['Rigid gift boxes', 'Foil stamping', 'Embossing', 'Magnetic closures'],
                icon: Sparkles 
              },
            ].map((service, i) => (
              <div key={i} className="flex-none w-[360px] md:w-[420px] group" data-testid={`card-service-${i}`}>
                <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border h-full">
                  <div className="relative h-[280px] bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-100 overflow-hidden flex items-center justify-center">
                    <service.icon className="h-20 w-20 text-[hsl(160,60%,45%)]/20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{service.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{service.desc}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-[hsl(160,60%,45%)]" />
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
      <section className="py-20 px-4 bg-gradient-to-br from-[hsl(160,60%,45%)] to-[hsl(180,60%,55%)] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to design packaging that sells?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            From concept to retail shelves—let's create packaging that captivates customers and drives sales.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-[hsl(160,60%,45%)] hover:bg-white/90" data-testid="button-cta-primary">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20" data-testid="button-cta-secondary">
              Get a Quote
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
