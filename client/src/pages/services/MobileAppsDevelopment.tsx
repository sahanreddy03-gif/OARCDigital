import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Smartphone, Download, Star, Users, TrendingUp, Code, Layers, Zap, Rocket, Bug, BarChart3, Shield, Bell, CheckCircle2, ChevronRight, Cpu, Globe, Target, Clock } from 'lucide-react';
import { SiApple, SiGoogleplay, SiReact, SiFlutter, SiSwift, SiKotlin, SiFirebase, SiExpo } from 'react-icons/si';
import Layout from '@/components/layout/Layout';
import SEOHead from "@/components/SEOHead";
import { createServiceSchema } from "@/utils/structuredData";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from '@/components/ui/button';
import { AnimatedGridBackground } from '@/components/ui/animated-grid-background';
import { GlassCard } from '@/components/ui/glass-card';
import FAQSection, { FAQItem } from '@/components/FAQSection';

import heroImg from '@assets/stock_images/mobile_app_design_us_2b0d5cbd.jpg';
import appImg1 from '@assets/stock_images/mobile_app_design_us_5eb8ced7.jpg';
import appImg2 from '@assets/stock_images/mobile_app_design_us_1ba5497a.jpg';
import mobileDevImg1 from '@assets/stock_images/mobile_app_developme_12e99cc2.jpg';
import mobileDevImg2 from '@assets/stock_images/mobile_app_developme_41ccf1c2.jpg';
import mobileDevImg3 from '@assets/stock_images/mobile_app_developme_51e6a80f.jpg';
import mobileDevImg4 from '@assets/stock_images/mobile_app_developme_8bd59a4e.jpg';
import mobileAppsRobotImg from '@assets/mobile-apps-robot-optimized.webp';

const ELITE_COLORS = {
  primary: '#6366f1',
  secondary: '#8b5cf6',
  accent: '#22d3ee',
  success: '#22c55e',
};

export default function MobileAppsDevelopment() {
  const [activePhase, setActivePhase] = useState(1);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

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
      timeline: "8-10 weeks",
      icon: Rocket
    },
    { 
      id: 2,
      name: "v1.0",
      title: "Polish for launch",
      desc: "App Store ready. Optimized UX, performance tuning, marketing prep.",
      milestones: ["Full feature set", "ASO optimization", "Crash-free launch"],
      timeline: "+4-6 weeks",
      icon: Star
    },
    { 
      id: 3,
      name: "Growth",
      title: "Scale & optimize",
      desc: "User feedback loop. A/B testing, retention features, analytics deep-dive.",
      milestones: ["Push notifications", "Referral system", "In-app purchases"],
      timeline: "Ongoing",
      icon: TrendingUp
    },
  ];

  const appFeatures = [
    { icon: Bell, title: "Push Notifications", desc: "Keep users engaged with smart, personalized alerts" },
    { icon: Shield, title: "Secure Auth", desc: "Biometrics, OAuth, secure session management" },
    { icon: BarChart3, title: "Analytics", desc: "Track user behavior, retention, and conversions" },
    { icon: Globe, title: "Offline Mode", desc: "Works without internet, syncs when connected" },
    { icon: Cpu, title: "Native Performance", desc: "60fps animations, instant load times" },
    { icon: Users, title: "Social Features", desc: "Chat, profiles, sharing, activity feeds" },
  ];

  const caseStudies = [
    { 
      img: appImg1,
      title: "SportsAI Interactive",
      type: "Consumer App",
      platform: "iOS & Android",
      metrics: ["50K+ users first week", "4.8 App Store rating", "Featured by Apple"],
      tech: ["React Native", "Firebase", "OpenAI"],
      color: ELITE_COLORS.primary
    },
    { 
      img: appImg2,
      title: "Enterprise Field Ops",
      type: "Enterprise",
      platform: "iOS & Android",
      metrics: ["10K+ daily active", "50+ countries", "99.9% uptime"],
      tech: ["Flutter", "AWS", "GraphQL"],
      color: ELITE_COLORS.secondary
    },
  ];

  const mobileAppsFAQs: FAQItem[] = [
    { question: "What mobile platforms do you develop for?", answer: "iOS, Android, and cross-platform using React Native and Flutter. Native and hybrid solutions based on your needs and budget." },
    { question: "How long does mobile app development take?", answer: "MVPs take 8-12 weeks. Full-featured apps typically require 4-6 months. Timeline depends on complexity and features." },
    { question: "What makes OARC's mobile development different?", answer: "We combine product thinking with technical excellence. Our apps are designed for user engagement, not just functionality." },
    { question: "Do you handle App Store submission?", answer: "Yes, we manage complete App Store and Google Play submission including metadata, screenshots, and approval process." },
    { question: "Can you integrate with existing systems?", answer: "Absolutely. API integration with your backend, CRM, payment systems, and third-party services is standard practice." },
    { question: "Do you offer app maintenance and updates?", answer: "Yes, we provide ongoing maintenance packages including bug fixes, OS updates, and feature enhancements." },
    { question: "What is the investment for mobile app development?", answer: "Simple apps start from €20,000. Feature-rich applications typically range from €40,000-100,000 based on complexity." },
    { question: "Native or cross-platform—which should I choose?", answer: "We recommend based on your goals. Cross-platform offers cost efficiency; native provides better performance for complex apps." }
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

      {/* HERO: Elite Dark Theme */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black">
        <AnimatedGridBackground 
          intensity="high" 
          showScanLine={true} 
          showParticles={true}
          showConcentricRings={true}
          showDiagonalGrid={true}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="px-5 py-2.5 bg-white/[0.05] backdrop-blur-md border border-white/15 rounded-full flex items-center gap-3">
                  <SiApple className="w-4 h-4 text-white/70" />
                  <SiGoogleplay className="w-4 h-4 text-white/70" />
                  <span className="text-xs font-medium text-white/70 uppercase tracking-[0.2em]">
                    iOS & Android
                  </span>
                </div>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.05]"
                data-testid="heading-mobile-apps"
              >
                Apps people{' '}
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  love to use
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-white/60 mb-8 leading-relaxed max-w-xl"
              >
                Native. Cross-platform. From first prototype to first million users. We build apps that grow with your business.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link href="/contact">
                  <Button size="lg" className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold text-lg px-8" data-testid="button-build-app">
                    Build Your App
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </motion.div>

              {/* Quick stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="grid grid-cols-3 gap-4 mt-12"
              >
                {[
                  { value: "75+", label: "Apps Shipped" },
                  { value: "4.7", label: "Avg Rating" },
                  { value: "5M+", label: "Downloads" },
                ].map((stat, i) => (
                  <div key={i} className="text-center p-4 bg-white/[0.03] backdrop-blur-sm rounded-xl border border-white/10">
                    <div className="text-2xl font-black text-indigo-400">{stat.value}</div>
                    <div className="text-xs text-white/50">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* App store card preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-2xl" />
              <GlassCard className="p-6" variant="strong" showCornerAccents={true}>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center">
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
                  {[mobileAppsRobotImg, mobileDevImg2, mobileDevImg3].map((img, i) => (
                    <img 
                      key={i}
                      src={img}
                      alt="App screenshot"
                      className="w-28 h-56 object-cover rounded-xl flex-shrink-0 border border-white/10"
                    />
                  ))}
                </div>

                <Button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold" data-testid="button-app-store-get">
                  GET
                </Button>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRODUCT ROADMAP SECTION */}
      <ScrollReveal>
        <section className="py-24 px-4 bg-zinc-950 border-t border-white/10 relative overflow-hidden">
          <AnimatedGridBackground intensity="subtle" showScanLine={false} showParticles={true} showConcentricRings={false} />
          <div className="relative max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/[0.05] border border-white/15 rounded-full mb-6"
              >
                <Rocket className="w-4 h-4 text-indigo-400" />
                <span className="text-xs text-white/70 uppercase tracking-[0.2em]">Product Lifecycle</span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                From Idea to <span className="text-indigo-400">App Store</span>
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                Every successful app follows a journey. Here's how we take you from concept to scale.
              </p>
            </div>

            {/* Roadmap timeline */}
            <div className="relative">
              {/* Progress line */}
              <div className="absolute top-8 left-0 right-0 h-1 bg-white/10 rounded-full hidden md:block">
                <motion.div 
                  className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${(activePhase / 3) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              <div className="grid md:grid-cols-3 gap-8 relative">
                {roadmapPhases.map((phase) => {
                  const PhaseIcon = phase.icon;
                  return (
                    <motion.button
                      key={phase.id}
                      onClick={() => setActivePhase(phase.id)}
                      data-testid={`phase-${phase.id}`}
                      className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 rounded-xl"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto transition-all ${
                        activePhase >= phase.id 
                          ? 'bg-indigo-500 text-white' 
                          : 'bg-white/10 text-white/50'
                      }`}>
                        <PhaseIcon className="w-7 h-7" />
                      </div>

                      <GlassCard 
                        className={`p-6 transition-all ${
                          activePhase === phase.id 
                            ? 'border-indigo-500/50' 
                            : ''
                        }`}
                        variant="strong"
                        liftOnHover={false}
                      >
                        <div className="text-indigo-400 text-xs font-bold mb-2">{phase.timeline}</div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-lg font-black text-white">{phase.name}</span>
                          <ChevronRight className={`w-4 h-4 text-white/40 transition-transform ${activePhase === phase.id ? 'rotate-90' : ''}`} />
                        </div>
                        <h3 className="text-white font-bold text-lg mb-2">{phase.title}</h3>
                        <p className="text-white/60 text-sm mb-4">{phase.desc}</p>
                        
                        <ul className="space-y-2">
                          {phase.milestones.map((milestone, i) => (
                            <li key={i} className="flex items-center gap-2 text-white/70 text-sm">
                              <CheckCircle2 className={`w-4 h-4 ${activePhase >= phase.id ? 'text-indigo-400' : 'text-white/30'}`} />
                              {milestone}
                            </li>
                          ))}
                        </ul>
                      </GlassCard>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* APP FEATURES GRID */}
      <ScrollReveal>
        <section className="py-24 px-4 bg-black border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Everything Your App <span className="text-indigo-400">Needs</span>
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                From core features to polish—we build complete mobile experiences
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {appFeatures.map((feature, i) => (
                <motion.div
                  key={i}
                  onHoverStart={() => setHoveredFeature(i)}
                  onHoverEnd={() => setHoveredFeature(null)}
                  data-testid={`feature-${i}`}
                >
                  <GlassCard 
                    className={`p-6 h-full transition-all ${hoveredFeature === i ? 'border-indigo-500/50' : ''}`}
                    variant="strong"
                    glowOnHover={true}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-indigo-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                        <p className="text-white/60 text-sm">{feature.desc}</p>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CASE STUDIES */}
      <ScrollReveal>
        <section className="py-24 px-4 bg-zinc-950 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-white">Apps We've <span className="text-indigo-400">Shipped</span></h2>
                <p className="text-white/60 mt-2">Real products, real users</p>
              </div>
              <Link href="/our-work">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  View All Work
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies.map((app, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  data-testid={`app-case-${i}`}
                >
                  <GlassCard className="overflow-hidden" variant="strong" showCornerAccents={true}>
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={app.img}
                        alt={app.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-white text-xs font-medium border border-white/20">
                        {app.platform}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <span className="text-indigo-400 text-xs font-bold uppercase tracking-wider">{app.type}</span>
                      <h3 className="text-white font-bold text-xl mt-1 mb-4">{app.title}</h3>
                      
                      <div className="space-y-2 mb-6">
                        {app.metrics.map((metric, j) => (
                          <div key={j} className="flex items-center gap-2 text-white/70 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                            {metric}
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {app.tech.map((t, j) => (
                          <span key={j} className="px-3 py-1 bg-white/5 border border-white/10 text-white/70 text-xs rounded-full">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* TECH COMPARISON */}
      <ScrollReveal>
        <section className="py-24 px-4 bg-black border-t border-white/10 relative overflow-hidden">
          <AnimatedGridBackground intensity="subtle" showScanLine={false} showParticles={true} showConcentricRings={true} />
          <div className="relative max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Right Tech for Your <span className="text-indigo-400">Goals</span>
              </h2>
              <p className="text-lg text-white/60">Native when you need performance. Cross-platform when you need speed.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Native */}
              <GlassCard className="p-8" variant="strong" showCornerAccents={true}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-orange-500/20 flex items-center justify-center">
                    <Target className="w-7 h-7 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl">Native Development</h3>
                    <p className="text-white/60 text-sm">Maximum performance, full platform access</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 mb-6 p-4 bg-white/[0.03] rounded-xl border border-white/10">
                  <div className="flex items-center gap-3">
                    <SiSwift className="w-8 h-8 text-orange-500" />
                    <span className="text-white/70 text-sm">Swift</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <SiKotlin className="w-8 h-8 text-purple-400" />
                    <span className="text-white/70 text-sm">Kotlin</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-white/50 text-xs uppercase tracking-wider mb-2">Best for:</div>
                  {["Games & AR/VR experiences", "Hardware integration", "Maximum performance apps"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-white/70 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-orange-400" />
                      {item}
                    </div>
                  ))}
                </div>
              </GlassCard>

              {/* Cross-platform */}
              <GlassCard className="p-8" variant="strong" showCornerAccents={true}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                    <Clock className="w-7 h-7 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl">Cross-Platform</h3>
                    <p className="text-white/60 text-sm">One codebase, both platforms</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 mb-6 p-4 bg-white/[0.03] rounded-xl border border-white/10">
                  <div className="flex items-center gap-3">
                    <SiReact className="w-8 h-8 text-cyan-400" />
                    <span className="text-white/70 text-sm">React Native</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <SiFlutter className="w-8 h-8 text-blue-400" />
                    <span className="text-white/70 text-sm">Flutter</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-white/50 text-xs uppercase tracking-wider mb-2">Best for:</div>
                  {["MVPs & startups", "Faster time-to-market", "Content & e-commerce apps"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-white/70 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                      {item}
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* FAQ Section */}
      <FAQSection 
        faqs={mobileAppsFAQs} 
        title="Frequently Asked Questions" 
        subtitle="Everything you need to know about mobile app development" 
        schemaId="faq-mobile-apps"
        darkMode={true}
      />

      {/* STATS BAR */}
      <section className="py-16 px-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "75+", label: "Apps shipped", icon: Smartphone },
              { value: "4.7", label: "Avg. store rating", icon: Star },
              { value: "5M+", label: "Total downloads", icon: Download },
              { value: "99.5%", label: "Crash-free rate", icon: Shield },
            ].map((stat, i) => (
              <div key={i} data-testid={`stat-${i}`}>
                <stat.icon className="w-8 h-8 text-white/80 mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-black text-white">{stat.value}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-4 bg-black text-white relative overflow-hidden border-t border-white/10">
        <AnimatedGridBackground intensity="subtle" showScanLine={false} showParticles={true} showConcentricRings={true} />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-6"
          >
            Got an <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">app idea</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg mb-10 max-w-2xl mx-auto"
          >
            Let's talk about bringing it to life. Free consultation and project scoping.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/contact">
              <Button size="lg" className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold text-lg px-10" data-testid="button-cta-contact">
                Start Your App Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-6 justify-center items-center mt-12"
          >
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <CheckCircle2 className="w-5 h-5 text-white" />
              <span className="text-white text-sm font-medium">Free consultation</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Zap className="w-5 h-5 text-white" />
              <span className="text-white text-sm font-medium">MVP in 8-10 weeks</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Star className="w-5 h-5 text-white" />
              <span className="text-white text-sm font-medium">App Store ready</span>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
