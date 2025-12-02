import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { 
  ArrowRight, CheckCircle2, Rocket, Target, Zap, Clock, 
  Shield, TrendingUp, Users, Lightbulb, Code2, Smartphone,
  BarChart3, RefreshCw, ChevronDown, Star, Building2, Globe,
  Landmark, Gamepad2, Heart, Home, ShoppingCart, Briefcase,
  type LucideIcon
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SEOHead from "@/components/SEOHead";
import { motion } from 'framer-motion';
import { AnimatedGridBackground } from '@/components/ui/animated-grid-background';
import { GlassCard } from '@/components/ui/glass-card';

import mvpMobileScreens from '@assets/generated_images/mvp_mobile_app_prototype_screens.png';
import mvpDashboard from '@assets/generated_images/saas_mvp_dashboard_interface.png';
import mvpProcess from '@assets/generated_images/mvp_development_process_diagram.png';

export default function MVPDevelopment() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const heroStats = [
    { value: '8-12', label: 'Weeks to Launch', icon: Clock },
    { value: '70%', label: 'Cost Savings', icon: TrendingUp },
    { value: '40+', label: 'MVPs Launched', icon: Rocket },
    { value: '94%', label: 'Client Retention', icon: Star }
  ];

  const whatYouGet = [
    {
      icon: Target,
      title: 'Feature Set Strategy',
      description: 'We identify the 20% of features that deliver 80% of user value. No bloat, no waste—just the core functionality that validates your concept.'
    },
    {
      icon: Zap,
      title: 'Rapid Prototyping',
      description: 'Interactive prototypes within 2 weeks. Test with real users before writing production code, saving months of misdirected development.'
    },
    {
      icon: Code2,
      title: 'Lean Development',
      description: 'Agile sprints focused on shipping fast. We deliver working software every 2 weeks so you see progress and can pivot quickly.'
    },
    {
      icon: Building2,
      title: 'Scalable Architecture',
      description: 'Built to grow from day one. When you hit product-market fit, your MVP scales to 100,000+ users without a costly rebuild.'
    },
    {
      icon: Shield,
      title: 'Post-Launch Support',
      description: 'We don\'t disappear after launch. Ongoing support, bug fixes, and performance monitoring ensure your MVP keeps improving.'
    },
    {
      icon: RefreshCw,
      title: 'Feedback & Iteration',
      description: 'Built-in analytics and user feedback loops. Make data-driven decisions about what to build next based on real user behavior.'
    }
  ];

  const challenges = [
    'Selecting which core features to prioritize',
    'Quickly validating the concept within a tight timeline',
    'Getting real user feedback early on',
    'Ensuring the MVP can scale as the business grows',
    'Managing post-launch feedback and full-scale iterations'
  ];

  const solutions = [
    'Clear methodology to define maximum-value MVP',
    'Rapid prototyping for fast market entry',
    'Lean, thoughtful MVP creation to test value prop',
    'Scalable design & build as a foundation for full product',
    'Post-launch support to iterate based on feedback'
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery Sprint',
      duration: 'Week 1-2',
      description: 'Deep dive into your vision, market, and users. We emerge with a validated feature set, technical architecture, and a clear roadmap to launch.',
      deliverables: ['User personas', 'Feature prioritization matrix', 'Technical specification', 'Project timeline']
    },
    {
      step: '02',
      title: 'Design & Prototype',
      duration: 'Week 3-4',
      description: 'Transform concepts into interactive prototypes. Test with real users, gather feedback, and refine before development begins.',
      deliverables: ['UX wireframes', 'High-fidelity UI designs', 'Interactive prototype', 'User testing report']
    },
    {
      step: '03',
      title: 'Agile Development',
      duration: 'Week 5-10',
      description: 'Two-week sprints with continuous delivery. You see working features every sprint, with the ability to adjust priorities as we learn.',
      deliverables: ['Working software increments', 'Sprint demos', 'Code documentation', 'Automated testing']
    },
    {
      step: '04',
      title: 'Launch & Learn',
      duration: 'Week 11-12',
      description: 'Deploy to production with monitoring, analytics, and support. Gather real-world data to inform your next iteration.',
      deliverables: ['Production deployment', 'Analytics dashboard', 'User feedback system', 'Support documentation']
    }
  ];

  const industries: Array<{ name: string; icon: LucideIcon; examples: string }> = [
    { name: 'FinTech & Banking', icon: Landmark, examples: 'Payment apps, lending platforms, investment tools' },
    { name: 'iGaming & Sports', icon: Gamepad2, examples: 'Betting platforms, fantasy sports, gaming apps' },
    { name: 'HealthTech', icon: Heart, examples: 'Telemedicine, patient portals, wellness apps' },
    { name: 'PropTech', icon: Home, examples: 'Property platforms, rental management, smart home' },
    { name: 'E-Commerce', icon: ShoppingCart, examples: 'Marketplaces, D2C platforms, subscription services' },
    { name: 'Enterprise SaaS', icon: Briefcase, examples: 'CRM, project management, workflow automation' }
  ];

  const testimonials = [
    {
      quote: "OARC took our concept from napkin sketch to App Store in just 10 weeks. The MVP attracted €500K in seed funding within 3 months of launch.",
      author: "Sarah Vella",
      role: "Founder, TechStartup Malta",
      metric: "€500K raised"
    },
    {
      quote: "We needed to validate our iGaming concept fast. OARC delivered a working MVP that let us test with real users before committing to full development.",
      author: "Marco Camilleri",
      role: "CEO, Gaming Innovations",
      metric: "10K beta users"
    }
  ];

  const faqs = [
    {
      question: 'What is an MVP and why do I need one?',
      answer: 'An MVP (Minimum Viable Product) is a functional version of your product with just enough features to validate your core hypothesis with real users. It helps you test market demand, gather feedback, and attract investors—all while minimizing time and development costs before committing to a full build.'
    },
    {
      question: 'How long does it take to build an MVP?',
      answer: 'Typically 8-12 weeks from kickoff to launch, depending on complexity. Our Discovery Sprint (2 weeks) defines scope and architecture. Design takes 2-3 weeks. Development runs 4-6 weeks with continuous delivery. We prioritize speed without sacrificing quality.'
    },
    {
      question: 'How much does MVP development cost?',
      answer: 'MVP projects typically range from €25,000-€75,000 depending on complexity, platform (web, mobile, or both), and integrations required. We provide detailed estimates after our Discovery Sprint, with fixed-price options available for well-defined scopes.'
    },
    {
      question: 'Can the MVP scale when we grow?',
      answer: 'Absolutely. We build MVPs on production-grade architecture designed to scale. Our tech stack handles millions of users, and our clean code practices mean features can be added without costly rewrites. Many of our MVPs have grown into enterprise platforms.'
    },
    {
      question: 'Do you sign NDAs and who owns the code?',
      answer: 'Yes, we sign NDAs before any project discussion. You own 100% of the code, designs, and IP from day one. Full source code access, comprehensive documentation, and no vendor lock-in. Your MVP is your asset.'
    },
    {
      question: 'Why choose OARC Digital in Malta?',
      answer: 'Based in Malta\'s thriving tech ecosystem, we understand local regulations, EU compliance, and the iGaming, FinTech, and startup landscape. Our team combines Silicon Valley practices with Mediterranean business understanding. Plus, same timezone collaboration with European clients.'
    }
  ];

  const whyOarc = [
    {
      title: 'Malta\'s Tech Ecosystem Experts',
      description: 'Deep understanding of Malta\'s startup scene, iGaming regulations, and EU compliance requirements.',
      icon: Globe
    },
    {
      title: 'Startup-Focused Methodology',
      description: 'Battle-tested processes refined across 40+ startup launches. We know what it takes to go from zero to launch.',
      icon: Rocket
    },
    {
      title: 'Full-Stack Capability',
      description: 'Strategy, design, development, and growth—all under one roof. No coordination overhead, no finger-pointing.',
      icon: Users
    },
    {
      title: 'Investor-Ready Deliverables',
      description: 'We\'ve helped clients raise over €5M combined. Our MVPs are designed to impress investors and early adopters.',
      icon: TrendingUp
    }
  ];

  return (
    <Layout>
      <SEOHead
        title="MVP Development Services Malta | Launch Your Startup Fast | OARC Digital"
        description="Build your MVP in 8-12 weeks with Malta's leading product development team. From concept validation to market launch, we help startups and enterprises bring ideas to life fast. Get a free consultation."
        canonicalUrl="https://oarcdigital.com/services/mvp-development"
        ogType="article"
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black" data-testid="section-hero">
        <AnimatedGridBackground 
          className="absolute inset-0" 
          showParticles={true}
          showScanLine={true}
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
        
        <div className="relative z-10 w-full px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6" data-testid="text-eyebrow">
                <Rocket className="w-4 h-4 text-[#23AACA]" />
                <span className="text-sm font-medium text-white/80">MVP Development Services • Malta</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 max-w-4xl leading-tight" data-testid="heading-title">
                Launch Your MVP in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#23AACA] to-[#4ade80]">
                  8-12 Weeks
                </span>
              </h1>

              <p className="text-xl text-white/70 max-w-3xl mb-6">
                Validate your concept fast. Whether you're a startup building from scratch or an enterprise 
                expanding horizontally, our MVP development services help you:
              </p>

              <ul className="space-y-3 mb-10 max-w-xl">
                {[
                  'Build a lean, market-ready product that resonates',
                  'Prioritize core features to maximize user engagement',
                  'Rapidly test, iterate, and refine with real feedback',
                  'Reduce time-to-market before full validation'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#4ade80] flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4 mb-12">
                <Link href="/contact">
                  <button 
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-[#23AACA] to-[#4ade80] text-black rounded-full pl-8 pr-4 py-4 text-base font-bold hover:opacity-90 transition-opacity"
                    data-testid="button-cta-hero"
                  >
                    Get Free Consultation
                    <div className="w-10 h-10 bg-black/20 rounded-full flex items-center justify-center">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </button>
                </Link>
                <Link href="/our-work">
                  <button 
                    className="inline-flex items-center gap-2 border border-white/20 text-white rounded-full px-8 py-4 text-base font-medium hover:bg-white/5 transition-colors"
                    data-testid="button-view-work"
                  >
                    View Our Work
                  </button>
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {heroStats.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <GlassCard key={idx} className="p-4 text-center" glowOnHover={true}>
                      <Icon className="w-5 h-5 text-white/40 mx-auto mb-2" />
                      <div className="text-2xl md:text-3xl font-black text-white mb-1" data-testid={`stat-value-${idx}`}>
                        {stat.value}
                      </div>
                      <div className="text-xs text-white/50">{stat.label}</div>
                    </GlassCard>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="relative bg-black py-0" data-testid="section-showcase">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <GlassCard className="overflow-hidden" glowOnHover={false}>
              <img 
                src={mvpMobileScreens}
                alt="MVP mobile app development - fintech prototype screens showing modern app interface"
                className="w-full h-auto"
                loading="lazy"
                data-testid="img-hero-product"
              />
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="bg-black py-24 px-6" data-testid="section-what-you-get">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              What You Get with OARC's MVP Development
            </h2>
            <p className="text-lg text-white/60 max-w-3xl mx-auto">
              Our MVP development services help you create a functional, market-ready product 
              with minimal time and investment to validate your concept.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatYouGet.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <GlassCard className="p-8 h-full" glowOnHover={true}>
                    <div className="w-12 h-12 bg-gradient-to-br from-[#23AACA]/20 to-[#4ade80]/20 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-[#23AACA]" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-white/60">{item.description}</p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SaaS Dashboard Showcase */}
      <section className="bg-zinc-950 py-20 px-6" data-testid="section-dashboard">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                Why OARC's MVP Development Services?
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Resource-Efficient Validation</h3>
                  <p className="text-white/60">
                    An MVP gets your product to market fast, helping validate the concept with minimal resources. 
                    By focusing only on essential features, you gather early feedback and make informed decisions 
                    before committing to full-scale development.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Scalable Solutions for Growth</h3>
                  <p className="text-white/60">
                    Although built as a minimal viable product, scalability is embedded to ensure the MVP can 
                    evolve into a robust solution. This foundation enables seamless scaling, saving resources 
                    when it's time to expand functionality.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Continuous Improvement</h3>
                  <p className="text-white/60">
                    Post-launch support ensures your MVP evolves based on user feedback and market performance. 
                    Iteration driven by real-world data keeps your product aligned with user needs.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <GlassCard className="overflow-hidden" glowOnHover={true}>
                <img 
                  src={mvpDashboard}
                  alt="SaaS MVP dashboard interface - enterprise software prototype"
                  className="w-full h-auto"
                  loading="lazy"
                  data-testid="img-dashboard"
                />
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenges vs Solutions */}
      <section className="bg-black py-24 px-6" data-testid="section-challenges">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Common Challenges, Proven Solutions
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <GlassCard className="p-8 h-full" glowOnHover={false}>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="text-red-400">✕</span> Common MVP Challenges
                </h3>
                <ul className="space-y-4">
                  {challenges.map((challenge, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-red-400 text-sm">✕</span>
                      </span>
                      <span className="text-white/70">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <GlassCard className="p-8 h-full border-[#4ade80]/20" glowOnHover={false}>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#4ade80]" /> OARC's Solutions
                </h3>
                <ul className="space-y-4">
                  {solutions.map((solution, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#4ade80]/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-[#4ade80]" />
                      </span>
                      <span className="text-white/80">{solution}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-zinc-950 py-24 px-6" data-testid="section-process">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Our 12-Week MVP Development Process
            </h2>
            <p className="text-lg text-white/60 max-w-3xl mx-auto">
              A proven methodology refined across 40+ startup launches
            </p>
          </motion.div>

          <div className="relative">
            {/* Process Timeline */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#23AACA] via-[#4ade80] to-[#23AACA]" />

            <div className="space-y-12">
              {process.map((phase, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={`${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <GlassCard className="p-8" glowOnHover={true}>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-5xl font-black text-white/10">{phase.step}</span>
                        <div>
                          <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                          <span className="text-sm text-[#23AACA]">{phase.duration}</span>
                        </div>
                      </div>
                      <p className="text-white/60 mb-6">{phase.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {phase.deliverables.map((item, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/70"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </GlassCard>
                  </div>
                  
                  {/* Spacer for alternating layout */}
                  <div className={`hidden lg:block ${idx % 2 === 1 ? 'lg:order-1' : ''}`} />
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16"
          >
            <GlassCard className="overflow-hidden" glowOnHover={false}>
              <img 
                src={mvpProcess}
                alt="MVP development process from wireframe to prototype to launch"
                className="w-full h-auto"
                loading="lazy"
                data-testid="img-process"
              />
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Why OARC Section */}
      <section className="bg-black py-24 px-6" data-testid="section-why-oarc">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Why Malta's Startups Choose OARC
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyOarc.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <GlassCard className="p-8 h-full" glowOnHover={true}>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#23AACA]/20 to-[#4ade80]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-[#23AACA]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-white/60">{item.description}</p>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-zinc-950 py-24 px-6" data-testid="section-industries">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Deep expertise in Malta's key sectors and beyond
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, idx) => {
              const IndustryIcon = industry.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  data-testid={`card-industry-${idx}`}
                >
                  <GlassCard className="p-6" glowOnHover={true}>
                    <div className="w-12 h-12 bg-gradient-to-br from-[#23AACA]/20 to-[#4ade80]/20 rounded-xl flex items-center justify-center mb-4">
                      <IndustryIcon className="w-6 h-6 text-[#23AACA]" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{industry.name}</h3>
                    <p className="text-sm text-white/50">{industry.examples}</p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-black py-24 px-6" data-testid="section-testimonials">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              What Our Clients Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <GlassCard className="p-8 h-full" glowOnHover={false}>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#23AACA] text-[#23AACA]" />
                    ))}
                  </div>
                  <blockquote className="text-lg text-white mb-6" data-testid={`text-testimonial-${idx}`}>
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-bold">{testimonial.author}</div>
                      <div className="text-white/50 text-sm">{testimonial.role}</div>
                    </div>
                    <div className="px-4 py-2 bg-[#4ade80]/10 border border-[#4ade80]/20 rounded-full">
                      <span className="text-[#4ade80] text-sm font-bold">{testimonial.metric}</span>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-zinc-950 py-24 px-6" data-testid="section-faq">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
              >
                <GlassCard 
                  className="overflow-hidden cursor-pointer" 
                  glowOnHover={false}
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-lg font-bold text-white" data-testid={`faq-question-${idx}`}>
                        {faq.question}
                      </h3>
                      <ChevronDown 
                        className={`w-5 h-5 text-white/40 transition-transform flex-shrink-0 ${openFaq === idx ? 'rotate-180' : ''}`}
                      />
                    </div>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 text-white/60"
                        data-testid={`faq-answer-${idx}`}
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-t from-zinc-900 to-black py-24 px-6" data-testid="section-cta">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Lightbulb className="w-16 h-16 text-[#23AACA] mx-auto mb-6" />
            
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              Ready to Build Your MVP?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss your idea. Get a free consultation and detailed project estimate—no commitment required.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#23AACA] to-[#4ade80] text-black rounded-full pl-10 pr-4 py-4 text-base font-bold hover:opacity-90 transition-opacity"
                  data-testid="button-cta-contact"
                >
                  Schedule Free Consultation
                  <div className="w-10 h-10 bg-black/20 rounded-full flex items-center justify-center">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </button>
              </Link>
            </div>

            <p className="text-white/40 text-sm mt-6">
              📞 Or call us: +356 2034 5678 • 🕐 Response within 24 hours
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
