import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Code, Smartphone, Zap, Layers, ArrowRight, TrendingUp, CheckCircle2, Gauge, Monitor, MousePointer2, Palette, Globe } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { createServiceSchema } from "@/utils/structuredData";
import ScrollReveal from "@/components/ScrollReveal";

import heroImage from '@assets/website-design-optimized.jpg';
import webImg1 from "@assets/stock_images/modern_web_design_ux_d23df466.jpg";
import webImg2 from "@assets/stock_images/modern_web_design_ux_62274473.jpg";
import webImg3 from "@assets/stock_images/modern_web_design_ux_699e8c91.jpg";
import webImg4 from "@assets/stock_images/modern_website_desig_4ba94acf.jpg";
import webAppImg from "@assets/stock_images/modern_web_design_we_927d8700.jpg";
import creativeImg from "@assets/stock_images/creative_designer_di_bb911588.jpg";

export default function WebDesign() {
  const [activeProject, setActiveProject] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

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
    {
      title: "SaaS Platform Redesign",
      category: "SaaS",
      img: webImg1,
      metrics: "+142% conversions",
      size: "large"
    },
    {
      title: "E-commerce Store",
      category: "Retail",
      img: webImg2,
      metrics: "+68% revenue",
      size: "medium"
    },
    {
      title: "Landing Page System",
      category: "Lead Gen",
      img: webImg3,
      metrics: "+89% leads",
      size: "medium"
    },
    {
      title: "Corporate Rebrand",
      category: "B2B",
      img: webImg4,
      metrics: "+45% engagement",
      size: "small"
    },
    {
      title: "Product Launch Site",
      category: "Startup",
      img: webAppImg,
      metrics: "2M visits",
      size: "small"
    },
    {
      title: "Design System",
      category: "Enterprise",
      img: creativeImg,
      metrics: "3x faster dev",
      size: "small"
    },
  ];

  const services = [
    { icon: Globe, title: "Full Website Design", desc: "Complete sites from strategy to launch" },
    { icon: Zap, title: "Landing Pages", desc: "High-converting single-page experiences" },
    { icon: Code, title: "E-commerce", desc: "Shops that sell 24/7" },
    { icon: Layers, title: "Design Systems", desc: "Scalable component libraries" },
    { icon: TrendingUp, title: "CRO Optimization", desc: "Data-driven improvements" },
    { icon: Gauge, title: "Webflow Development", desc: "No-code, full control" },
  ];

  const process = [
    { icon: MousePointer2, title: "Discovery", desc: "Research & strategy", days: "Week 1" },
    { icon: Palette, title: "Design", desc: "UI/UX & prototypes", days: "Week 2-3" },
    { icon: Code, title: "Build", desc: "Development & testing", days: "Week 4-5" },
    { icon: Zap, title: "Launch", desc: "Deploy & optimize", days: "Week 6" },
  ];

  return (
    <Layout>
      <SEOHead
        title="Web Design | High-Converting Websites | OARC Digital"
        description="Conversion-optimized web design with lightning-fast load times, mobile-first UX, and A/B testing. Launch in 6 weeks. Get a free UX audit."
        canonicalUrl="https://oarcdigital.com/services/web-design"
        ogType="article"
        structuredData={createServiceSchema(
          "Web Design Services",
          "Conversion-optimized web design for SaaS, e-commerce, and B2B companies",
          "Web Design & Development"
        )}
        schemaId="service-web-design"
      />

      {/* HERO: Full-screen portfolio showcase */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-zinc-950">
        {/* Background image */}
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt="Web design showcase"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-transparent"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-400 text-sm font-medium mb-6">
                <Monitor className="w-4 h-4" />
                Web Design
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6" data-testid="heading-web-design">
                Websites That <span className="text-blue-400">Convert</span>
              </h1>
              
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                Every pixel optimized for performance. Every interaction designed to convert. Launch in 6 weeks.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="/contact">
                  <button
                    className="btn-shimmer inline-flex items-center gap-3 bg-blue-500 text-white rounded-full pl-8 pr-4 py-4 text-lg font-bold hover:bg-blue-600 transition-colors"
                    data-testid="button-get-audit"
                  >
                    Get Free UX Audit
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </button>
                </Link>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: "+142%", label: "Avg. Conversion Lift" },
                  { value: "6 Weeks", label: "Avg. Launch Time" },
                  { value: "99/100", label: "Lighthouse Score" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-black text-blue-400">{stat.value}</div>
                    <div className="text-sm text-white/50">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Browser mockup */}
            <div className="relative hidden lg:block">
              <div className="absolute -inset-4 bg-blue-500/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
                {/* Browser chrome */}
                <div className="bg-zinc-800 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-zinc-700 rounded-md px-3 py-1 text-xs text-zinc-400 font-mono">
                      https://your-website.com
                    </div>
                  </div>
                </div>
                <img 
                  src={webImg1}
                  alt="Website design preview"
                  className="w-full h-[350px] object-cover"
                />
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
                Work That Converts
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                Sites designed for results, not just looks
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
                      <span className="inline-block px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full mb-2">
                        {project.metrics}
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
                Web Solutions That Scale
              </h2>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {services.map((service, i) => (
                <div 
                  key={i}
                  className="group p-6 rounded-2xl bg-zinc-50 hover:bg-blue-500 hover:text-white transition-all duration-300 border border-zinc-200 hover:border-blue-500 text-center"
                  data-testid={`service-${i}`}
                >
                  <div className="w-14 h-14 mx-auto rounded-xl bg-blue-500/10 group-hover:bg-white/20 flex items-center justify-center mb-4 transition-colors">
                    <service.icon className="w-7 h-7 text-blue-500 group-hover:text-white transition-colors" />
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
                From Brief to Launch in 6 Weeks
              </h2>
            </div>

            {/* Visual timeline */}
            <div className="grid md:grid-cols-4 gap-6">
              {process.map((step, i) => (
                <div 
                  key={i}
                  className={`relative p-6 rounded-2xl transition-all duration-500 cursor-pointer ${
                    activeStep === i 
                      ? 'bg-blue-500 text-white scale-105 shadow-2xl shadow-blue-500/30' 
                      : 'bg-white text-black hover:bg-zinc-100 border border-zinc-200'
                  }`}
                  onClick={() => setActiveStep(i)}
                  data-testid={`process-step-${i}`}
                >
                  <div className={`absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    activeStep === i ? 'bg-white text-blue-500' : 'bg-blue-500 text-white'
                  }`}>
                    {i + 1}
                  </div>
                  
                  <step.icon className={`w-10 h-10 mb-4 ${activeStep === i ? 'text-white' : 'text-blue-500'}`} />
                  
                  <div className={`text-xs font-bold mb-2 ${activeStep === i ? 'text-white/80' : 'text-blue-500'}`}>
                    {step.days}
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
                className="h-full bg-blue-500 transition-all duration-500 rounded-full"
                style={{ width: `${((activeStep + 1) / 4) * 100}%` }}
              ></div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SECTION 5: Stats Bar */}
      <section className="py-12 px-4 bg-blue-500">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "300+", label: "Sites Launched" },
              { value: "+142%", label: "Avg. Conversion Lift" },
              { value: "6 Weeks", label: "Avg. Timeline" },
              { value: "99/100", label: "Lighthouse Score" },
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
                  Not Just Pretty.<br />Profitable.
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Every design decision backed by data. Every pixel optimized for conversion.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Conversion-optimized from day one",
                    "99/100 Lighthouse performance scores",
                    "Mobile-first responsive design",
                    "A/B testing and CRO included",
                    "Full ownership of all assets",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-lg">{item}</span>
                    </div>
                  ))}
                </div>

                <Link href="/contact">
                  <button
                    className="mt-8 inline-flex items-center gap-3 bg-blue-500 text-white rounded-full pl-8 pr-4 py-4 text-base font-semibold hover:bg-blue-600 transition-colors"
                    data-testid="button-discuss-project"
                  >
                    Discuss Your Project
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </button>
                </Link>
              </div>

              {/* Image grid */}
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src={webImg2}
                  alt="Website design"
                  className="w-full h-48 object-cover rounded-2xl"
                />
                <img 
                  src={webImg3}
                  alt="UI design"
                  className="w-full h-48 object-cover rounded-2xl mt-8"
                />
                <img 
                  src={creativeImg}
                  alt="Design team"
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
            Ready for a Website That <span className="text-blue-400">Works?</span>
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Get a free UX audit and conversion strategy call
          </p>
          <Link href="/contact">
            <button
              className="btn-shimmer inline-flex items-center gap-3 bg-blue-500 text-white rounded-full pl-10 pr-4 py-5 text-lg font-bold hover:bg-blue-600 transition-colors"
              data-testid="button-cta-audit"
            >
              Get Free UX Audit
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
