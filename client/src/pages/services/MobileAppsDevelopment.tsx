import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowRight, Smartphone, Code, Zap, Users, CheckCircle2, Download, Star, Cloud, Lock, Palette, Bell, ChevronRight } from 'lucide-react';
import { SiApple, SiAndroid, SiReact, SiFlutter, SiSwift, SiKotlin, SiFirebase, SiAmazon } from 'react-icons/si';
import Layout from '@/components/layout/Layout';
import SEOHead from "@/components/SEOHead";
import { createServiceSchema } from "@/utils/structuredData";
import ScrollReveal from "@/components/ScrollReveal";

import heroImg from '@assets/stock_images/mobile_app_design_us_2b0d5cbd.jpg';
import appImg1 from '@assets/stock_images/mobile_app_design_us_5eb8ced7.jpg';
import appImg2 from '@assets/stock_images/mobile_app_design_us_1ba5497a.jpg';
import mobileDevImg1 from '@assets/stock_images/mobile_app_developme_12e99cc2.jpg';
import mobileDevImg2 from '@assets/stock_images/mobile_app_developme_41ccf1c2.jpg';
import mobileDevImg3 from '@assets/stock_images/mobile_app_developme_51e6a80f.jpg';
import mobileDevImg4 from '@assets/stock_images/mobile_app_developme_8bd59a4e.jpg';

export default function MobileAppsDevelopment() {
  const [activeStep, setActiveStep] = useState(0);
  const [activeApp, setActiveApp] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveApp((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const appShowcase = [
    { title: "E-Commerce App", category: "Retail", img: mobileDevImg1, downloads: "1M+" },
    { title: "Fitness Tracker", category: "Health", img: mobileDevImg2, downloads: "500K+" },
    { title: "Fintech App", category: "Finance", img: mobileDevImg3, downloads: "250K+" },
    { title: "Social Platform", category: "Social", img: mobileDevImg4, downloads: "2M+" },
  ];

  const techStack = [
    { name: 'iOS', Icon: SiApple, color: '#000000' },
    { name: 'Android', Icon: SiAndroid, color: '#3DDC84' },
    { name: 'React Native', Icon: SiReact, color: '#61DAFB' },
    { name: 'Flutter', Icon: SiFlutter, color: '#02569B' },
    { name: 'Swift', Icon: SiSwift, color: '#FA7343' },
    { name: 'Kotlin', Icon: SiKotlin, color: '#7F52FF' },
    { name: 'Firebase', Icon: SiFirebase, color: '#FFCA28' },
    { name: 'AWS', Icon: SiAmazon, color: '#FF9900' },
  ];

  const buildProcess = [
    { icon: Palette, title: "Design", desc: "UI/UX & prototyping", weeks: "Week 1-2" },
    { icon: Code, title: "Develop", desc: "Native/cross-platform", weeks: "Week 3-8" },
    { icon: Zap, title: "Test", desc: "QA & beta testing", weeks: "Week 9-10" },
    { icon: Download, title: "Launch", desc: "Store submission", weeks: "Week 11-12" },
  ];

  const features = [
    { icon: Bell, title: "Push Notifications", desc: "Real-time engagement" },
    { icon: Cloud, title: "Cloud Sync", desc: "Seamless data access" },
    { icon: Lock, title: "Secure Auth", desc: "Biometric & OAuth" },
    { icon: Zap, title: "Offline Mode", desc: "Works without internet" },
    { icon: Users, title: "Social Features", desc: "Share & connect" },
    { icon: Star, title: "In-App Purchases", desc: "Monetization ready" },
  ];

  return (
    <Layout>
      <SEOHead
        title="Mobile App Development | iOS & Android Apps | OARC Digital"
        description="Build high-performance iOS and Android apps with React Native, Flutter, or native development. From concept to App Store in 12 weeks."
        canonicalUrl="https://oarcdigital.com/services/mobile-apps-development"
        ogType="article"
        structuredData={createServiceSchema(
          "Mobile App Development Services",
          "Build exceptional mobile experiences for iOS and Android",
          "iOS & Android Development"
        )}
        schemaId="service-mobile-apps-development"
      />

      {/* HERO: Phone Showcase */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
        {/* Background gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/40 text-green-400 text-sm font-medium mb-6">
                <Smartphone className="w-4 h-4" />
                Mobile Development
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6" data-testid="heading-mobile-apps">
                Apps People <span className="text-green-400">Love to Use</span>
              </h1>
              
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                iOS. Android. Cross-platform. From concept to App Store in 12 weeks.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="/contact">
                  <button
                    className="btn-shimmer inline-flex items-center gap-3 bg-green-500 text-black rounded-full pl-8 pr-4 py-4 text-lg font-bold hover:bg-green-400 transition-colors"
                    data-testid="button-build-app"
                  >
                    Build Your App
                    <div className="w-10 h-10 bg-black/20 rounded-full flex items-center justify-center">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </button>
                </Link>
              </div>

              {/* Platform badges */}
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-white/70">
                  <SiApple className="w-6 h-6" />
                  <span className="text-sm">iOS</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <SiAndroid className="w-6 h-6 text-[#3DDC84]" />
                  <span className="text-sm">Android</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <SiReact className="w-6 h-6 text-[#61DAFB]" />
                  <span className="text-sm">React Native</span>
                </div>
              </div>
            </div>

            {/* Phone mockup showcase */}
            <div className="relative flex justify-center">
              <div className="relative">
                {/* Phone frame */}
                <div className="relative w-[280px] h-[560px] bg-zinc-900 rounded-[3rem] border-4 border-zinc-800 shadow-2xl overflow-hidden">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-10"></div>
                  
                  {/* Screen content - carousel */}
                  <div className="relative h-full overflow-hidden">
                    {appShowcase.map((app, i) => (
                      <div 
                        key={i}
                        className={`absolute inset-0 transition-all duration-700 ${
                          activeApp === i ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                        }`}
                      >
                        <img 
                          src={app.img}
                          alt={app.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                          <div className="text-xs text-green-400 font-medium">{app.category}</div>
                          <div className="text-lg font-bold text-white">{app.title}</div>
                          <div className="text-xs text-white/60">{app.downloads} downloads</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Side indicators */}
                <div className="absolute -right-16 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                  {appShowcase.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveApp(i)}
                      data-testid={`button-app-indicator-${i}`}
                      className={`w-2 h-8 rounded-full transition-all ${
                        activeApp === i ? 'bg-green-500 h-12' : 'bg-white/20'
                      }`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: App Gallery - Bento Grid */}
      <ScrollReveal>
        <section className="py-20 px-4 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Apps Built to Scale
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                From MVPs to enterprise apps with millions of users
              </p>
            </div>

            {/* App showcase grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { title: "Consumer Apps", category: "B2C", img: appImg1, metrics: "1M+ Users" },
                { title: "Enterprise Mobile", category: "B2B", img: appImg2, metrics: "50+ Countries" },
                { title: "Fintech Apps", category: "Finance", img: mobileDevImg3, metrics: "$10M+ Processed" },
                { title: "Health & Fitness", category: "Health", img: mobileDevImg2, metrics: "500K+ Active" },
              ].map((app, i) => (
                <div 
                  key={i}
                  className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                    i === 0 ? 'col-span-2 row-span-2' : ''
                  }`}
                  data-testid={`app-showcase-${i}`}
                >
                  <div className={`relative ${i === 0 ? 'h-[400px]' : 'h-[200px]'}`}>
                    <img 
                      src={app.img}
                      alt={app.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="text-xs text-green-400 font-medium mb-1">{app.category}</div>
                      <h3 className={`font-bold text-white mb-1 ${i === 0 ? 'text-2xl' : 'text-lg'}`}>
                        {app.title}
                      </h3>
                      <div className="text-sm text-white/60">{app.metrics}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SECTION 3: Tech Stack */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Native & Cross-Platform
            </h2>
          </div>

          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {techStack.map((tech, i) => (
              <div 
                key={i}
                className="group flex flex-col items-center gap-2 p-4 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-green-500/50 transition-colors"
                data-testid={`tech-${tech.name.toLowerCase()}`}
              >
                <tech.Icon className="w-10 h-10" style={{ color: tech.color }} />
                <span className="text-xs text-white/70 text-center">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Build Process Timeline */}
      <ScrollReveal>
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
                From Idea to App Store in 12 Weeks
              </h2>
            </div>

            {/* Visual timeline */}
            <div className="grid md:grid-cols-4 gap-6">
              {buildProcess.map((step, i) => (
                <div 
                  key={i}
                  className={`relative p-6 rounded-2xl transition-all duration-500 cursor-pointer ${
                    activeStep === i 
                      ? 'bg-green-500 text-black scale-105 shadow-2xl shadow-green-500/30' 
                      : 'bg-zinc-100 text-black hover:bg-zinc-200'
                  }`}
                  onClick={() => setActiveStep(i)}
                  data-testid={`process-step-${i}`}
                >
                  <div className={`absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    activeStep === i ? 'bg-black text-green-500' : 'bg-green-500 text-black'
                  }`}>
                    {i + 1}
                  </div>
                  
                  <step.icon className={`w-10 h-10 mb-4 ${activeStep === i ? 'text-black' : 'text-green-500'}`} />
                  
                  <div className={`text-xs font-bold mb-2 ${activeStep === i ? 'text-black/70' : 'text-green-600'}`}>
                    {step.weeks}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className={`text-sm ${activeStep === i ? 'text-black/70' : 'text-muted-foreground'}`}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Progress bar */}
            <div className="mt-8 h-2 bg-zinc-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-green-500 transition-all duration-500 rounded-full"
                style={{ width: `${((activeStep + 1) / 4) * 100}%` }}
              ></div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SECTION 5: Features Grid */}
      <ScrollReveal>
        <section className="py-20 px-4 bg-zinc-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
                Every Feature You Need
              </h2>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {features.map((feature, i) => (
                <div 
                  key={i}
                  className="group p-6 rounded-2xl bg-white hover:bg-green-500 hover:text-black transition-all duration-300 border border-zinc-200 hover:border-green-500 text-center"
                  data-testid={`feature-${i}`}
                >
                  <div className="w-14 h-14 mx-auto rounded-xl bg-green-500/10 group-hover:bg-black/20 flex items-center justify-center mb-4 transition-colors">
                    <feature.icon className="w-7 h-7 text-green-500 group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="font-bold mb-1 text-sm">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground group-hover:text-black/70">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SECTION 6: Stats Bar */}
      <section className="py-12 px-4 bg-green-500">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "200+", label: "Apps Launched" },
              { value: "12 Weeks", label: "Avg. Timeline" },
              { value: "4.8/5", label: "Avg. Store Rating" },
              { value: "10M+", label: "Total Downloads" },
            ].map((stat, i) => (
              <div key={i} className="text-center" data-testid={`stat-${i}`}>
                <div className="text-3xl md:text-4xl font-black text-black mb-2">{stat.value}</div>
                <div className="text-sm text-black/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-4 bg-zinc-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Ready to Build Your <span className="text-green-400">App?</span>
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Free consultation and project scoping with our mobile team
          </p>
          <Link href="/contact">
            <button
              className="btn-shimmer inline-flex items-center gap-3 bg-green-500 text-black rounded-full pl-10 pr-4 py-5 text-lg font-bold hover:bg-green-400 transition-colors"
              data-testid="button-cta-contact"
            >
              Start Your App Project
              <div className="w-12 h-12 bg-black/20 rounded-full flex items-center justify-center">
                <ArrowRight className="h-6 w-6" />
              </div>
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
