import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowRight, Smartphone, Download, Star, Users, TrendingUp, Code, Layers, Zap, Rocket, Bug, BarChart3, Shield, Bell, CheckCircle2 } from 'lucide-react';
import { SiApple, SiGoogleplay, SiReact, SiFlutter, SiSwift, SiKotlin, SiFirebase } from 'react-icons/si';
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
  const [activePhase, setActivePhase] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const roadmapPhases = [
    { 
      id: 1,
      name: "MVP",
      title: "Validate your idea",
      desc: "Core features only. Get to market fast, learn from real users.",
      milestones: ["Core user flow", "Essential features", "Basic analytics"],
      timeline: "8-10 weeks"
    },
    { 
      id: 2,
      name: "v1.0",
      title: "Polish for launch",
      desc: "App Store ready. Optimized UX, performance tuning, marketing prep.",
      milestones: ["Full feature set", "ASO optimization", "Crash-free launch"],
      timeline: "+4-6 weeks"
    },
    { 
      id: 3,
      name: "Growth",
      title: "Scale & optimize",
      desc: "User feedback loop. A/B testing, retention features, analytics deep-dive.",
      milestones: ["Push notifications", "Referral system", "In-app purchases"],
      timeline: "Ongoing"
    },
  ];

  return (
    <Layout>
      <SEOHead
        title="Mobile App Development | iOS & Android | OARC Digital"
        description="Build apps people love. Native iOS, Android, and cross-platform development. From MVP to millions of users."
        canonicalUrl="https://oarcdigital.com/services/mobile-apps-development"
        ogType="article"
        structuredData={createServiceSchema(
          "Mobile App Development",
          "iOS and Android app development from MVP to scale",
          "Mobile Development"
        )}
        schemaId="service-mobile-apps-development"
      />

      {/* HERO: App Store Style Showcase */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-zinc-950 via-zinc-900 to-black overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#23AACA]/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#c4ff4d]/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <SiApple className="w-6 h-6 text-white/70" />
                <SiGoogleplay className="w-5 h-5 text-white/70" />
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6" data-testid="heading-mobile-apps">
                Apps people love to use.
              </h1>
              
              <p className="text-xl text-white/80 mb-8">
                Native. Cross-platform. From first prototype to first million users. We build apps that grow.
              </p>

              <Link href="/contact">
                <button
                  className="inline-flex items-center gap-3 bg-[#23AACA] text-white rounded-full pl-8 pr-4 py-4 text-lg font-bold hover:bg-[#1a8fa8] transition-colors"
                  data-testid="button-build-app"
                >
                  Build Your App
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </button>
              </Link>
            </div>

            {/* App store card preview */}
            <div className="relative">
              <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800 shadow-2xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#23AACA] to-[#c4ff4d] rounded-2xl flex items-center justify-center">
                    <Smartphone className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg">Your App Name</h3>
                    <p className="text-white/70 text-sm">Your Company</p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex">
                        {[1,2,3,4,5].map(i => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <span className="text-white/70 text-sm">4.9 · 10K+ reviews</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3 overflow-x-auto pb-4">
                  {[mobileDevImg1, mobileDevImg2, mobileDevImg3].map((img, i) => (
                    <img 
                      key={i}
                      src={img}
                      alt="App screenshot"
                      className="w-28 h-56 object-cover rounded-xl flex-shrink-0"
                    />
                  ))}
                </div>

                <button 
                  className="w-full py-3 bg-[#23AACA] text-white font-bold rounded-xl hover:bg-[#1a8fa8] transition-colors"
                  data-testid="button-app-store-get"
                >
                  GET
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Product Roadmap */}
      <ScrollReveal>
        <section className="py-20 px-4 bg-zinc-950">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                From idea to App Store
              </h2>
              <p className="text-white/70 max-w-xl mx-auto">
                Every successful app follows a journey. Here's how we take you from concept to scale.
              </p>
            </div>

            {/* Roadmap timeline */}
            <div className="relative">
              {/* Progress line */}
              <div className="absolute top-8 left-0 right-0 h-1 bg-zinc-800 rounded-full">
                <div 
                  className="h-full bg-[#23AACA] rounded-full transition-all duration-500"
                  style={{ width: `${(activePhase / 3) * 100}%` }}
                ></div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 relative">
                {roadmapPhases.map((phase) => (
                  <button
                    key={phase.id}
                    onClick={() => setActivePhase(phase.id)}
                    data-testid={`phase-${phase.id}`}
                    className="text-left"
                  >
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto transition-all ${
                      activePhase >= phase.id 
                        ? 'bg-[#23AACA] text-white' 
                        : 'bg-zinc-800 text-white/70'
                    }`}>
                      <span className="font-bold text-lg">{phase.name}</span>
                    </div>

                    <div className={`p-6 rounded-2xl transition-all ${
                      activePhase === phase.id 
                        ? 'bg-[#23AACA]/20 border border-[#23AACA]/50' 
                        : 'bg-zinc-900 border border-zinc-800'
                    }`}>
                      <div className="text-[#23AACA] text-xs font-bold mb-2">{phase.timeline}</div>
                      <h3 className="text-white font-bold text-lg mb-2">{phase.title}</h3>
                      <p className="text-white/70 text-sm mb-4">{phase.desc}</p>
                      
                      <ul className="space-y-2">
                        {phase.milestones.map((milestone, i) => (
                          <li key={i} className="flex items-center gap-2 text-white/80 text-sm">
                            <CheckCircle2 className={`w-4 h-4 ${activePhase >= phase.id ? 'text-[#23AACA]' : 'text-zinc-600'}`} />
                            {milestone}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SECTION 3: Apps We've Shipped */}
      <ScrollReveal>
        <section className="py-20 px-4 bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-white">Apps we've shipped</h2>
                <p className="text-white/70 mt-2">Real products, real users</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { 
                  img: appImg1,
                  title: "SportsAI Interactive",
                  type: "Consumer App",
                  platform: "iOS & Android",
                  metrics: ["50K+ users first week", "4.8 App Store rating", "Featured by Apple"],
                  tech: ["React Native", "Firebase", "OpenAI"]
                },
                { 
                  img: appImg2,
                  title: "Enterprise Field Ops",
                  type: "Enterprise",
                  platform: "iOS & Android",
                  metrics: ["10K+ daily active", "50+ countries", "99.9% uptime"],
                  tech: ["Flutter", "AWS", "GraphQL"]
                },
              ].map((app, i) => (
                <div 
                  key={i}
                  className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 group"
                  data-testid={`app-case-${i}`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={app.img}
                      alt={app.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                      {app.platform}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <span className="text-[#23AACA] text-xs font-bold">{app.type}</span>
                    <h3 className="text-white font-bold text-xl mt-1 mb-4">{app.title}</h3>
                    
                    <div className="space-y-2 mb-4">
                      {app.metrics.map((metric, j) => (
                        <div key={j} className="flex items-center gap-2 text-white/80 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-[#23AACA]" />
                          {metric}
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {app.tech.map((t, j) => (
                        <span key={j} className="px-3 py-1 bg-zinc-800 text-white/70 text-xs rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SECTION 4: Tech Stack */}
      <ScrollReveal>
        <section className="py-20 px-4 bg-zinc-950">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Right tech for your goals
              </h2>
              <p className="text-white/70">Native when you need performance. Cross-platform when you need speed.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Native */}
              <div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800">
                <h3 className="text-white font-bold text-xl mb-2">Native Development</h3>
                <p className="text-white/70 text-sm mb-6">Maximum performance, full platform access</p>
                
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <SiSwift className="w-8 h-8 text-orange-500" />
                    <span className="text-white/70 text-sm">Swift</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SiKotlin className="w-8 h-8 text-[#23AACA]" />
                    <span className="text-white/70 text-sm">Kotlin</span>
                  </div>
                </div>

                <div className="text-white/70 text-sm">
                  Best for: Games, AR/VR, hardware integration, maximum performance
                </div>
              </div>

              {/* Cross-platform */}
              <div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800">
                <h3 className="text-white font-bold text-xl mb-2">Cross-Platform</h3>
                <p className="text-white/70 text-sm mb-6">One codebase, both platforms</p>
                
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <SiReact className="w-8 h-8 text-cyan-400" />
                    <span className="text-white/70 text-sm">React Native</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SiFlutter className="w-8 h-8 text-blue-400" />
                    <span className="text-white/70 text-sm">Flutter</span>
                  </div>
                </div>

                <div className="text-white/70 text-sm">
                  Best for: MVPs, startups, content apps, faster time-to-market
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SECTION 5: What We Handle */}
      <ScrollReveal>
        <section className="py-20 px-4 bg-[#f5f0e6]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-[#1a2e29]">
              Everything your app needs
            </h2>

            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { icon: Code, title: "Development", desc: "iOS & Android" },
                { icon: Layers, title: "UI/UX Design", desc: "App interfaces" },
                { icon: Shield, title: "Security", desc: "Auth & encryption" },
                { icon: Bell, title: "Push Notifications", desc: "User engagement" },
                { icon: BarChart3, title: "Analytics", desc: "User insights" },
                { icon: Bug, title: "QA & Testing", desc: "Bug-free launch" },
              ].map((item, i) => (
                <div 
                  key={i}
                  className="p-5 rounded-2xl bg-white border border-[#1a2e29]/10 hover:border-[#23AACA] hover:shadow-lg transition-all text-center group"
                  data-testid={`capability-${i}`}
                >
                  <item.icon className="w-8 h-8 text-[#23AACA] mx-auto mb-3" />
                  <h3 className="font-bold text-sm mb-1 text-[#1a2e29]">{item.title}</h3>
                  <p className="text-[#1a2e29]/60 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Stats */}
      <section className="py-16 px-4 bg-[#23AACA]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "75+", label: "Apps shipped" },
              { value: "4.7", label: "Avg. store rating" },
              { value: "5M+", label: "Total downloads" },
              { value: "99.5%", label: "Crash-free rate" },
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
            Got an app idea?
          </h2>
          <p className="text-white/80 text-lg mb-10">
            Let's talk about bringing it to life. Free consultation and project scoping.
          </p>
          <Link href="/contact">
            <button
              className="inline-flex items-center gap-3 bg-[#23AACA] text-white rounded-full pl-10 pr-4 py-5 text-lg font-bold hover:bg-[#1a8fa8] transition-colors"
              data-testid="button-cta-contact"
            >
              Start Your App Project
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
