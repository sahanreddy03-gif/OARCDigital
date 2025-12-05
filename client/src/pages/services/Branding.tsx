import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle2, Palette, Target, Layers, Sparkles, Eye, BookOpen, PenTool, Brush, Type, Box } from 'lucide-react';
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
  const [activeStep, setActiveStep] = useState(0);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const portfolio = [
    { title: "Fintech Rebrand", category: "B2B", img: brandImg1, metric: "Brand Refresh", size: "large" },
    { title: "E-commerce Identity", category: "DTC", img: brandImg2, metric: "Full System", size: "medium" },
    { title: "Startup Launch", category: "Tech", img: brandImg3, metric: "Logo + Brand", size: "medium" },
    { title: "Corporate Identity", category: "Enterprise", img: corporateLogoImg1, metric: "Full Rebrand", size: "small" },
    { title: "Design System", category: "SaaS", img: designSystemImg, metric: "100+ Components", size: "small" },
    { title: "Visual Language", category: "Agency", img: graphicDesignImg, metric: "Brand Assets", size: "small" },
  ];

  const services = [
    { icon: Target, title: "Brand Strategy", desc: "Positioning & messaging" },
    { icon: PenTool, title: "Logo Design", desc: "Distinctive marks" },
    { icon: Palette, title: "Visual Identity", desc: "Color & typography" },
    { icon: BookOpen, title: "Brand Guidelines", desc: "Usage documentation" },
    { icon: Layers, title: "Design Systems", desc: "Component libraries" },
    { icon: Box, title: "Packaging", desc: "Physical applications" },
  ];

  const process = [
    { icon: Target, title: "Discover", desc: "Research & strategy", weeks: "Week 1-2" },
    { icon: Eye, title: "Define", desc: "Concepts & direction", weeks: "Week 3" },
    { icon: Brush, title: "Design", desc: "Visual identity system", weeks: "Week 4-5" },
    { icon: BookOpen, title: "Deliver", desc: "Guidelines & assets", weeks: "Week 6" },
  ];

  return (
    <Layout>
      <SEOHead
        title="Branding & Identity Design | Logo & Visual Systems | OARC Digital"
        description="Build powerful brands that resonate. Complete branding services from strategy to visual identity, logo design, and brand guidelines. Launch in 6 weeks."
        canonicalUrl="https://oarcdigital.com/services/branding"
        ogType="article"
        structuredData={createServiceSchema(
          "Branding & Identity Design Services",
          "Complete branding from strategy to visual identity and guidelines",
          "Brand Design & Strategy"
        )}
        schemaId="service-branding"
      />

      {/* HERO: Portfolio showcase */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-zinc-950">
        {/* Background gradient */}
        <div className="absolute inset-0">
          <img 
            src={brandIdentityImg}
            alt="Brand identity design"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/95 to-zinc-950/80"></div>
        </div>
        
        {/* Floating brand elements */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-rose-500/10 rounded-full blur-2xl"></div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-400 text-sm font-medium mb-6">
                <Palette className="w-4 h-4" />
                Brand Design
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6" data-testid="heading-branding">
                Brands People <span className="text-orange-400">Remember</span>
              </h1>
              
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                From strategy to visual identity. Create a brand that stands out, connects, and grows with your business.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="/contact">
                  <button
                    className="btn-shimmer inline-flex items-center gap-3 bg-orange-500 text-white rounded-full pl-8 pr-4 py-4 text-lg font-bold hover:bg-orange-600 transition-colors"
                    data-testid="button-start-brand"
                  >
                    Start Your Brand
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </button>
                </Link>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: "200+", label: "Brands Created" },
                  { value: "6 Weeks", label: "Avg. Delivery" },
                  { value: "100%", label: "Ownership" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-black text-orange-400">{stat.value}</div>
                    <div className="text-sm text-white/50">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Brand mockup showcase */}
            <div className="relative hidden lg:block">
              <div className="absolute -inset-4 bg-orange-500/20 rounded-3xl blur-2xl"></div>
              <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white rounded-2xl p-4 shadow-2xl">
                    <img 
                      src={corporateLogoImg2}
                      alt="Brand logo"
                      className="w-full h-32 object-cover rounded-xl"
                    />
                  </div>
                  <div className="bg-zinc-900 rounded-2xl p-4 border border-zinc-800">
                    <div className="flex gap-2 mb-3">
                      {['#FF6B35', '#1A1A2E', '#4ECDC4', '#FFE66D'].map((color, i) => (
                        <div 
                          key={i}
                          className="w-8 h-8 rounded-full shadow-lg"
                          style={{ backgroundColor: color }}
                        ></div>
                      ))}
                    </div>
                    <div className="text-xs text-white/50">Color Palette</div>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-zinc-900 rounded-2xl p-4 border border-zinc-800">
                    <div className="space-y-2">
                      <div className="text-2xl font-black text-white">Aa</div>
                      <div className="text-sm text-white/70 font-bold">Montserrat Bold</div>
                      <div className="text-sm text-white/50 font-light">Nunito Sans Light</div>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-4 shadow-2xl">
                    <img 
                      src={brandImg2}
                      alt="Brand applications"
                      className="w-full h-32 object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Portfolio Bento Grid */}
      <ScrollReveal>
        <section className="py-20 px-4 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Brands We've Built
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                Visual identities that stand the test of time
              </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {portfolio.map((project, i) => (
                <div 
                  key={i}
                  className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                    project.size === 'large' ? 'col-span-2 row-span-2' : 
                    project.size === 'medium' ? 'col-span-2' : ''
                  }`}
                  data-testid={`portfolio-${i}`}
                  onMouseEnter={() => setActiveProject(i)}
                >
                  <div className={`relative ${
                    project.size === 'large' ? 'h-[400px]' : 
                    project.size === 'medium' ? 'h-[200px]' : 'h-[200px]'
                  }`}>
                    <img 
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="inline-block px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full mb-2">
                        {project.metric}
                      </span>
                      <h3 className={`font-bold text-white mb-1 ${project.size === 'large' ? 'text-2xl' : 'text-lg'}`}>
                        {project.title}
                      </h3>
                      <div className="text-sm text-white/60">{project.category}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SECTION 3: Services Grid */}
      <ScrollReveal>
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
                Complete Brand Solutions
              </h2>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {services.map((service, i) => (
                <div 
                  key={i}
                  className="group p-6 rounded-2xl bg-zinc-50 hover:bg-orange-500 hover:text-white transition-all duration-300 border border-zinc-200 hover:border-orange-500 text-center"
                  data-testid={`service-${i}`}
                >
                  <div className="w-14 h-14 mx-auto rounded-xl bg-orange-500/10 group-hover:bg-white/20 flex items-center justify-center mb-4 transition-colors">
                    <service.icon className="w-7 h-7 text-orange-500 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold mb-1 text-sm">{service.title}</h3>
                  <p className="text-xs text-muted-foreground group-hover:text-white/80">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SECTION 4: Process Timeline */}
      <ScrollReveal>
        <section className="py-20 px-4 bg-zinc-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
                From Brief to Brand in 6 Weeks
              </h2>
            </div>

            {/* Visual timeline */}
            <div className="grid md:grid-cols-4 gap-6">
              {process.map((step, i) => (
                <div 
                  key={i}
                  className={`relative p-6 rounded-2xl transition-all duration-500 cursor-pointer ${
                    activeStep === i 
                      ? 'bg-orange-500 text-white scale-105 shadow-2xl shadow-orange-500/30' 
                      : 'bg-white text-black hover:bg-zinc-100 border border-zinc-200'
                  }`}
                  onClick={() => setActiveStep(i)}
                  data-testid={`process-step-${i}`}
                >
                  <div className={`absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    activeStep === i ? 'bg-white text-orange-500' : 'bg-orange-500 text-white'
                  }`}>
                    {i + 1}
                  </div>
                  
                  <step.icon className={`w-10 h-10 mb-4 ${activeStep === i ? 'text-white' : 'text-orange-500'}`} />
                  
                  <div className={`text-xs font-bold mb-2 ${activeStep === i ? 'text-white/80' : 'text-orange-500'}`}>
                    {step.weeks}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className={`text-sm ${activeStep === i ? 'text-white/80' : 'text-muted-foreground'}`}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Progress bar */}
            <div className="mt-8 h-2 bg-zinc-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-orange-500 transition-all duration-500 rounded-full"
                style={{ width: `${((activeStep + 1) / 4) * 100}%` }}
              ></div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SECTION 5: Stats Bar */}
      <section className="py-12 px-4 bg-orange-500">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "200+", label: "Brands Built" },
              { value: "6 Weeks", label: "Avg. Timeline" },
              { value: "100%", label: "Full Ownership" },
              { value: "5-Star", label: "Client Reviews" },
            ].map((stat, i) => (
              <div key={i} className="text-center" data-testid={`stat-${i}`}>
                <div className="text-3xl md:text-4xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Why OARC */}
      <ScrollReveal>
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
                  Not Just a Logo.<br />A Complete System.
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We build brand systems that scale—from startup to enterprise.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Complete visual identity system",
                    "Comprehensive brand guidelines",
                    "Scalable design system components",
                    "All source files and assets included",
                    "Ongoing brand evolution support",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-lg">{item}</span>
                    </div>
                  ))}
                </div>

                <Link href="/contact">
                  <button
                    className="mt-8 inline-flex items-center gap-3 bg-orange-500 text-white rounded-full pl-8 pr-4 py-4 text-base font-semibold hover:bg-orange-600 transition-colors"
                    data-testid="button-discuss-brand"
                  >
                    Discuss Your Brand
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </button>
                </Link>
              </div>

              {/* Image grid */}
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src={brandImg1}
                  alt="Brand design"
                  className="w-full h-48 object-cover rounded-2xl"
                />
                <img 
                  src={brandImg3}
                  alt="Logo design"
                  className="w-full h-48 object-cover rounded-2xl mt-8"
                />
                <img 
                  src={designSystemImg}
                  alt="Design system"
                  className="w-full h-48 object-cover rounded-2xl col-span-2"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* FINAL CTA */}
      <section className="py-20 px-4 bg-zinc-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Ready to Build Your <span className="text-orange-400">Brand?</span>
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Free brand strategy call with our creative team
          </p>
          <Link href="/contact">
            <button
              className="btn-shimmer inline-flex items-center gap-3 bg-orange-500 text-white rounded-full pl-10 pr-4 py-5 text-lg font-bold hover:bg-orange-600 transition-colors"
              data-testid="button-cta-brand"
            >
              Start Your Brand Project
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
