import { useEffect } from "react";
import { Link } from "wouter";
import { Package, Award, Sparkles, ShoppingBag, Box, Tag, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollableCards } from "@/components/ui/scrollable-cards";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { creativeServicesSEO } from "@/data/seoMetadata";
import { createServiceSchema } from "@/utils/structuredData";
import heroImage from '@assets/printy design_1763086257815.avif';

export default function PrintPackaging() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <SEOHead
        title={creativeServicesSEO.printPackaging.title}
        description={creativeServicesSEO.printPackaging.description}
        canonicalUrl={`https://oarcdigital.com${creativeServicesSEO.printPackaging.path}`}
        ogType="article"
        structuredData={createServiceSchema(
          "Print & Packaging Design Services",
          creativeServicesSEO.printPackaging.description,
          "Product Packaging & Print Design"
        )}
        schemaId="service-print-packaging"
      />
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
            Packaging that <span className="italic text-[#c4ff4d]">flies off shelves</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Product packaging designed to capture attention, communicate value, and drive sales. From initial concept to print-ready dielines. Retail-tested designs that turn browsers into buyers.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button size="lg" className="bg-[#c4ff4d] text-[#1a2e29] hover:bg-[#c4ff4d]/90" data-testid="button-get-started">
              Design My Packaging
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20" data-testid="button-view-work">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 px-4 bg-[#f5f0e6] border-b border-[#1a2e29]/10">
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
      <section className="py-16 px-4 bg-[#f5f0e6]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-[#23AACA] mb-3">PROVEN SALES IMPACT</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1a2e29]">
              Stand out. <span className="italic text-orange-500">Sell more.</span>
            </h2>
            <p className="text-lg text-[#1a2e29]/70 max-w-2xl mx-auto">
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
              <div key={i} className="text-center p-8 bg-white rounded-xl border border-[#1a2e29]/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1" data-testid={`metric-${i}`}>
                <div className="text-5xl md:text-6xl font-bold text-[#23AACA] mb-3">{stat.value}</div>
                <div className="text-base text-[#1a2e29]/60 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-sm uppercase tracking-wider text-[#23AACA] mb-4">CLIENT SPOTLIGHT</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">
            How premium packaging drove <span className="italic text-[#c4ff4d]">shelf velocity for a CBD brand</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">The Challenge</h3>
              <p className="text-lg text-white/70 mb-6">
                A wellness CBD brand was struggling to compete in crowded health food stores. Their packaging looked "cheap" compared to premium competitors, despite having a superior product. They needed packaging that commanded higher price points and stood out on crowded shelves.
              </p>
              
              <h3 className="text-2xl font-bold mb-4 text-white">Our Approach</h3>
              <ul className="space-y-3 mb-6">
                {[
                  'Developed elevated unboxing experience with rigid boxes',
                  'Introduced spot UV, embossing, and premium finishes',
                  'Created modular label system for 12 product SKUs',
                  'Designed retail display boxes and shelf merchandising'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#23AACA] flex-shrink-0 mt-0.5" />
                    <span className="text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-zinc-900 rounded-xl p-8 border border-zinc-800">
              <h3 className="text-xl font-bold mb-6 text-white">Results After Retail Launch</h3>
              <div className="space-y-6">
                {[
                  { metric: '+127%', label: 'Shelf velocity increase' },
                  { metric: '+$12', label: 'Average order value lift' },
                  { metric: '76%', label: 'Customers kept packaging (vs 8% before)' },
                  { metric: '3.8x', label: 'ROI on packaging investment' }
                ].map((result, i) => (
                  <div key={i} className="flex justify-between items-center pb-4 border-b border-zinc-800 last:border-0">
                    <span className="text-white/70">{result.label}</span>
                    <span className="text-2xl font-bold text-[#c4ff4d]">{result.metric}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Design */}
      <section className="py-20 bg-[#f5f0e6] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="text-sm uppercase tracking-wider text-[#23AACA] mb-4">PACKAGING & PRINT SERVICES</div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2e29]">
            Every format. <span className="italic text-orange-500">Print-perfect.</span>
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
                <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-[#1a2e29]/10 h-full">
                  <div className="relative h-[280px] bg-[#23AACA]/10 overflow-hidden flex items-center justify-center">
                    <service.icon className="h-20 w-20 text-[#23AACA]/20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-[#1a2e29]">{service.name}</h3>
                    <p className="text-sm text-[#1a2e29]/60 mb-4">{service.desc}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-[#1a2e29]">
                          <CheckCircle2 className="h-4 w-4 text-[#23AACA]" />
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

      {/* Who This Service Is For */}
      <section className="py-20 px-4 bg-[#a8b892]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-[#1a2e29] mb-4">WHO THIS IS FOR</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1a2e29]">
              Designed for brands that <span className="italic text-white">compete on shelves</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-[#1a2e29]/10 hover-elevate" data-testid="use-case-cpg">
              <h3 className="text-xl font-bold mb-4">CPG & Consumer Brands</h3>
              <p className="text-muted-foreground mb-4">
                Stand out in competitive retail environments with packaging that captures attention and communicates premium quality at a glance.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Shelf-optimized product packaging for retail</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Multi-SKU label systems and variant management</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Print-ready dielines and production files</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 border border-[#1a2e29]/10 hover-elevate" data-testid="use-case-beauty">
              <h3 className="text-xl font-bold mb-4">Beauty & Skincare Brands</h3>
              <p className="text-muted-foreground mb-4">
                Premium packaging that reflects product quality. Luxury finishes, clean design, and sustainable materials that appeal to conscious consumers.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Luxury packaging with premium finishes and materials</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Sustainable packaging solutions and eco-certifications</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Product photography and art direction</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 border border-[#1a2e29]/10 hover-elevate" data-testid="use-case-food-bev">
              <h3 className="text-xl font-bold mb-4">Food & Beverage Companies</h3>
              <p className="text-muted-foreground mb-4">
                FDA-compliant labeling that sells. Balance regulatory requirements with eye-catching design that drives purchase decisions.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>FDA-compliant nutrition labels and ingredient panels</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Beverage label design and can/bottle packaging</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Point-of-sale displays and retail merchandising</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 border border-[#1a2e29]/10 hover-elevate" data-testid="use-case-luxury">
              <h3 className="text-xl font-bold mb-4">Luxury & Premium Brands</h3>
              <p className="text-muted-foreground mb-4">
                Unboxing experiences that justify premium pricing. Rigid boxes, foil stamping, embossing, and magnetic closures that create moments of delight.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Rigid gift boxes with custom inserts and compartments</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Foil stamping, embossing, and specialty finishes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Premium unboxing experiences for high-value products</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 border border-[#1a2e29]/10 hover-elevate" data-testid="use-case-ecommerce">
              <h3 className="text-xl font-bold mb-4">E-commerce & DTC Brands</h3>
              <p className="text-muted-foreground mb-4">
                Shipping packaging that becomes part of your brand experience. Custom mailers, inserts, and thank you cards that drive repeat purchases and social sharing.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Custom e-commerce mailers and shipping boxes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Branded tissue paper, stickers, and thank you cards</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Instagram-worthy unboxing experiences</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 border border-[#1a2e29]/10 hover-elevate" data-testid="use-case-retail">
              <h3 className="text-xl font-bold mb-4">Retail & Wholesale Brands</h3>
              <p className="text-muted-foreground mb-4">
                Packaging systems that work across multiple retail channels. From big box stores to boutiques, maintain consistency while optimizing for each environment.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Multi-channel packaging strategies for retail distribution</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Shelf displays and point-of-purchase materials</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Bulk packaging and case design for wholesale</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-[#23AACA] mb-4">COMPLETE YOUR BRAND</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Amplify your packaging with <span className="italic text-[#c4ff4d]">complementary services</span>
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Great packaging is part of a complete brand ecosystem. Extend your visual identity across every touchpoint.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/branding">
              <div className="group p-8 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-[#23AACA] hover:shadow-xl transition-all duration-300 cursor-pointer" data-testid="related-service-branding">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#23AACA] transition-colors">Branding Services</h3>
                  <ArrowRight className="h-5 w-5 text-[#23AACA] group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-white/70 mb-4">
                  Develop a complete brand identity before packaging design. Create a cohesive visual system that works across all materials.
                </p>
              </div>
            </Link>

            <Link href="/services/video-production">
              <div className="group p-8 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-[#23AACA] hover:shadow-xl transition-all duration-300 cursor-pointer" data-testid="related-service-video">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#23AACA] transition-colors">Video Production</h3>
                  <ArrowRight className="h-5 w-5 text-[#23AACA] group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-white/70 mb-4">
                  Showcase your packaging with professional product photography and unboxing videos that drive social engagement.
                </p>
              </div>
            </Link>

            <Link href="/services/social-media-creative">
              <div className="group p-8 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-[#23AACA] hover:shadow-xl transition-all duration-300 cursor-pointer" data-testid="related-service-social">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#23AACA] transition-colors">Social Media Creative</h3>
                  <ArrowRight className="h-5 w-5 text-[#23AACA] group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-white/70 mb-4">
                  Turn your packaging into shareable content. Create social campaigns that highlight your product design and unboxing experience.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-[#23AACA] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to design packaging that sells?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            From concept to retail shelves—let's create packaging that captivates customers and drives sales.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-[#c4ff4d] text-[#1a2e29] hover:bg-[#c4ff4d]/90" data-testid="button-cta-primary">
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
