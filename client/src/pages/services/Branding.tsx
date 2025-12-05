import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowRight, Palette, Type, Layers, Sparkles, BookOpen, Mic2, Globe, Package } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/SEOHead';
import { createServiceSchema } from "@/utils/structuredData";
import ScrollReveal from "@/components/ScrollReveal";

import brandImg1 from "@assets/stock_images/branding_design_logo_562a38a3.jpg";
import brandImg2 from "@assets/stock_images/branding_design_logo_ccf3aba4.jpg";
import brandImg3 from "@assets/stock_images/branding_design_logo_def8ba83.jpg";
import brandIdentityImg from "@assets/stock_images/brand_identity_desig_a250cc24.jpg";
import corporateLogoImg1 from "@assets/stock_images/corporate_brand_logo_36956200.jpg";
import corporateLogoImg2 from "@assets/stock_images/corporate_brand_logo_3ecd3c3a.jpg";
import designSystemImg from "@assets/stock_images/design_system_compon_362ff5cd.jpg";
import graphicDesignImg from "@assets/stock_images/graphic_design_creat_297cb911.jpg";

export default function Branding() {
  const [activeExploration, setActiveExploration] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const brandColors = [
    { name: "Primary", colors: ["#c4ff4d", "#23AACA", "#F97316"] },
    { name: "Secondary", colors: ["#1A1A2E", "#FFFFFF", "#18181B"] },
    { name: "Neutral", colors: ["#F5F5F5", "#E0E0E0", "#333333"] },
  ];

  const typeExplorations = [
    { family: "Montserrat", weight: "Bold", style: "Modern Sans" },
    { family: "Playfair Display", weight: "Regular", style: "Classic Serif" },
    { family: "Inter", weight: "Medium", style: "Clean Sans" },
  ];

  return (
    <Layout>
      <SEOHead
        title="Branding & Identity Design | OARC Digital"
        description="Build brands that resonate. From strategy to visual identity, we create complete brand systems that stand out and scale with your business."
        canonicalUrl="https://oarcdigital.com/services/branding"
        ogType="article"
        structuredData={createServiceSchema(
          "Branding & Identity Design",
          "Complete brand strategy and visual identity design",
          "Brand Design"
        )}
        schemaId="service-branding"
      />

      {/* HERO: Brand Lab Introduction */}
      <section className="relative min-h-[90vh] flex items-center bg-zinc-950 overflow-hidden">
        {/* Floating brand elements */}
        <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-32 h-32 bg-gradient-to-br from-[#23AACA]/15 to-[#c4ff4d]/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-orange-400 text-sm uppercase tracking-widest mb-4">Brand Design Studio</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6" data-testid="heading-branding">
                Brands people remember.
              </h1>
              <p className="text-xl text-white/80 mb-8">
                More than a logo. We build complete brand systems—strategy, identity, voice, and everything in between.
              </p>
              
              <Link href="/contact">
                <button
                  className="inline-flex items-center gap-3 bg-orange-500 text-white rounded-full pl-8 pr-4 py-4 text-lg font-bold hover:bg-orange-600 transition-colors"
                  data-testid="button-start-brand"
                >
                  Start a Brand Project
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </button>
              </Link>
            </div>

            {/* Brand explorations preview */}
            <div className="grid grid-cols-2 gap-4">
              {/* Color palette card */}
              <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800">
                <span className="text-white/70 text-xs uppercase tracking-wider">Color Palette</span>
                <div className="mt-4 space-y-3">
                  {brandColors.map((set, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-white/70 text-xs w-16">{set.name}</span>
                      <div className="flex gap-1">
                        {set.colors.map((color, j) => (
                          <div 
                            key={j}
                            className="w-6 h-6 rounded-full border border-zinc-700"
                            style={{ backgroundColor: color }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Typography card */}
              <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800">
                <span className="text-white/70 text-xs uppercase tracking-wider">Typography</span>
                <div className="mt-4">
                  <div className="text-4xl font-black text-white mb-2">Aa</div>
                  <div className="text-sm font-bold text-white">Montserrat Bold</div>
                  <div className="text-sm text-white/70">Headings & Display</div>
                </div>
              </div>

              {/* Logo mark preview */}
              <div className="col-span-2 bg-gradient-to-r from-orange-500/15 to-[#23AACA]/15 rounded-2xl p-5 border border-orange-500/30">
                <img src={corporateLogoImg2} alt="Brand logo" className="w-full h-32 object-cover rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Brand Portfolio - Storytelling Format */}
      <ScrollReveal>
        <section className="py-20 px-4 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-white">Recent brand work</h2>
                <p className="text-white/80 mt-2">From strategy to rollout</p>
              </div>
            </div>

            {/* Featured case study */}
            <div className="grid lg:grid-cols-5 gap-6 mb-8">
              <div className="lg:col-span-3 relative rounded-2xl overflow-hidden h-[400px]">
                <img src={brandImg1} alt="Fintech rebrand" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">Complete Rebrand</span>
                  <h3 className="text-2xl font-black text-white mt-3">Fintech Startup</h3>
                  <p className="text-white/80 mt-2">Brand strategy, visual identity, guidelines, and rollout across 12 touchpoints.</p>
                </div>
              </div>
              <div className="lg:col-span-2 grid grid-rows-2 gap-6">
                <div className="relative rounded-2xl overflow-hidden">
                  <img src={brandImg2} alt="E-commerce brand" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="text-orange-400 text-xs font-bold">DTC Brand</span>
                    <h4 className="text-white font-bold">Lifestyle E-commerce</h4>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden">
                  <img src={brandImg3} alt="Tech startup" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="text-orange-400 text-xs font-bold">B2B SaaS</span>
                    <h4 className="text-white font-bold">Enterprise Platform</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* More work grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { img: corporateLogoImg1, title: "Corporate Identity" },
                { img: designSystemImg, title: "Design System" },
                { img: graphicDesignImg, title: "Visual Language" },
                { img: brandIdentityImg, title: "Brand Guidelines" },
              ].map((item, i) => (
                <div 
                  key={i}
                  className="group relative rounded-xl overflow-hidden cursor-pointer"
                  data-testid={`work-${i}`}
                >
                  <img 
                    src={item.img}
                    alt={item.title}
                    className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors"></div>
                  <div className="absolute bottom-3 left-3">
                    <h4 className="text-white font-bold text-sm">{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SECTION 3: What Goes Into a Brand */}
      <ScrollReveal>
        <section className="py-20 px-4 bg-black">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                What goes into a brand
              </h2>
              <p className="text-white/80 max-w-xl mx-auto">
                Every brand we build includes these essential elements, tailored to your business and audience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Sparkles, title: "Strategy", items: ["Brand positioning", "Audience research", "Competitive analysis", "Brand architecture"] },
                { icon: Palette, title: "Visual Identity", items: ["Logo design", "Color palette", "Typography", "Imagery style"] },
                { icon: Mic2, title: "Brand Voice", items: ["Tone of voice", "Messaging framework", "Taglines", "Copy guidelines"] },
                { icon: BookOpen, title: "Guidelines", items: ["Usage rules", "Do's and don'ts", "Templates", "Asset library"] },
              ].map((pillar, i) => (
                <div 
                  key={i}
                  className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-orange-500/50 transition-colors"
                  data-testid={`pillar-${i}`}
                >
                  <pillar.icon className="w-8 h-8 text-orange-400 mb-4" />
                  <h3 className="text-white font-bold text-lg mb-4">{pillar.title}</h3>
                  <ul className="space-y-2">
                    {pillar.items.map((item, j) => (
                      <li key={j} className="text-white/80 text-sm flex items-center gap-2">
                        <span className="w-1 h-1 bg-orange-400 rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SECTION 4: Brand Rollout - Where It Lives */}
      <ScrollReveal>
        <section className="py-20 px-4 bg-zinc-950">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Where your brand lives
              </h2>
              <p className="text-white/80">
                We design for every touchpoint your customers encounter.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Globe, title: "Website", desc: "Digital home" },
                { icon: Layers, title: "Social Media", desc: "Profile & content" },
                { icon: Type, title: "Marketing", desc: "Ads & collateral" },
                { icon: Package, title: "Packaging", desc: "Physical products" },
              ].map((touchpoint, i) => (
                <div 
                  key={i}
                  className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 text-center group hover:border-orange-500/50 transition-colors"
                  data-testid={`touchpoint-${i}`}
                >
                  <touchpoint.icon className="w-10 h-10 text-white/70 group-hover:text-orange-400 transition-colors mx-auto mb-4" />
                  <h3 className="text-white font-bold mb-1">{touchpoint.title}</h3>
                  <p className="text-white/80 text-sm">{touchpoint.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SECTION 5: Typography Exploration */}
      <ScrollReveal>
        <section className="py-20 px-4 bg-gradient-to-b from-[#fafff5] to-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-black mb-6">
                  Typography tells a story
                </h2>
                <p className="text-muted-foreground mb-8">
                  We explore dozens of type combinations before landing on the perfect pairing for your brand. Every font choice communicates something about who you are.
                </p>

                <div className="space-y-4">
                  {typeExplorations.map((type, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveExploration(i)}
                      data-testid={`type-exploration-${i}`}
                      className={`w-full text-left p-4 rounded-xl transition-colors ${
                        activeExploration === i 
                          ? 'bg-orange-500 text-white' 
                          : 'bg-zinc-100 hover:bg-zinc-200'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-bold">{type.family}</span>
                        <span className={`text-sm ${activeExploration === i ? 'text-white/70' : 'text-muted-foreground'}`}>
                          {type.style}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-zinc-100 rounded-2xl p-10 text-center">
                <div 
                  className="text-6xl md:text-8xl font-black mb-4"
                  style={{ fontFamily: typeExplorations[activeExploration].family }}
                >
                  Aa
                </div>
                <div className="text-2xl font-bold mb-2">
                  {typeExplorations[activeExploration].family}
                </div>
                <div className="text-muted-foreground">
                  {typeExplorations[activeExploration].weight} · {typeExplorations[activeExploration].style}
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Stats */}
      <section className="py-16 px-4 bg-orange-500">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "150+", label: "Brands created" },
              { value: "100%", label: "File ownership" },
              { value: "12", label: "Avg. touchpoints" },
              { value: "5.0", label: "Client rating" },
            ].map((stat, i) => (
              <div key={i} data-testid={`stat-${i}`}>
                <div className="text-3xl md:text-4xl font-black text-white">{stat.value}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-4 bg-zinc-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to build your brand?
          </h2>
          <p className="text-white/80 text-lg mb-10">
            Let's talk about your vision and how we can bring it to life.
          </p>
          <Link href="/contact">
            <button
              className="inline-flex items-center gap-3 bg-orange-500 text-white rounded-full pl-10 pr-4 py-5 text-lg font-bold hover:bg-orange-600 transition-colors"
              data-testid="button-cta-brand"
            >
              Start a Brand Project
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <ArrowRight className="h-6 w-6" />
              </div>
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
