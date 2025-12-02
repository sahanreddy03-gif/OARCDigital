import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { 
  ArrowRight, CheckCircle2, Rocket, Target, Zap, Clock, 
  Shield, TrendingUp, Users, Lightbulb, Code2, Smartphone,
  BarChart3, RefreshCw, ChevronDown, Star, Building2, Globe,
  Landmark, Gamepad2, Heart, Home, ShoppingCart, Briefcase,
  Award, FileCheck, Layers, Calendar, Phone, Mail, MapPin,
  Play, ExternalLink, CheckCircle, XCircle, Euro, Scale,
  Sparkles, type LucideIcon
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SEOHead from "@/components/SEOHead";
import { motion } from 'framer-motion';
import { AnimatedGridBackground } from '@/components/ui/animated-grid-background';
import { GlassCard } from '@/components/ui/glass-card';
import { Button } from '@/components/ui/button';
import { 
  SiReact, SiTypescript, SiNodedotjs, SiPostgresql, 
  SiAmazon, SiStripe, SiTwilio, SiFigma,
  SiFlutter, SiKotlin, SiSwift, SiDocker
} from 'react-icons/si';

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
    { value: '70%', label: 'Cost Savings vs In-House', icon: TrendingUp },
    { value: '40+', label: 'MVPs Shipped', icon: Rocket },
    { value: '€5M+', label: 'Raised by Clients', icon: Euro }
  ];

  const whatYouGet = [
    {
      icon: Target,
      title: 'Core Feature Definition',
      description: 'Borrow OARC\'s super-honed methodology to choose the critical features you need for UVP validation. Our cost-effective approach keeps development streamlined but your product aligned with its primary objectives.',
      deliverables: ['Feature prioritization matrix', 'User story mapping', 'Technical scope document']
    },
    {
      icon: Zap,
      title: 'Rapid Prototyping for Early Testing',
      description: 'Create prototypes that highlight key functionalities so you can test with actual users—early. By gathering real feedback during this phase, you can refine your product before committing to full development.',
      deliverables: ['Interactive Figma prototype', 'User testing sessions', 'Iteration report']
    },
    {
      icon: Code2,
      title: 'Lean Development Approach',
      description: 'Focus on developing only the most important features to create a functional MVP. Doing so reduces both your time and capital investment while delivering a high-quality experience.',
      deliverables: ['Working software increments', 'Sprint demos every 2 weeks', 'Code documentation']
    },
    {
      icon: Users,
      title: 'User-Centric Feedback Collection',
      description: 'Use insights gathered from early users to fine-tune your MVP. These findings help ensure your software meets real-world expectations and lays the groundwork for future growth.',
      deliverables: ['Analytics dashboard', 'User feedback system', 'Behavior tracking']
    },
    {
      icon: Building2,
      title: 'Scalable Architecture',
      description: 'Design your MVP to support long-term scalability. Staying forward-thinking as we build will help make sure that our software can adapt to growing needs, seamlessly adding features and accommodating more users.',
      deliverables: ['Cloud infrastructure', 'Database optimization', 'API-first design']
    },
    {
      icon: RefreshCw,
      title: 'Support & Iteration',
      description: 'Receive continuous support after launch to further refine your MVP, pivot based on feedback, or turn it into a full-scale product. We\'re in it for the long-haul with you.',
      deliverables: ['30-day post-launch support', 'Bug fixes included', 'Performance monitoring']
    }
  ];

  const challenges = [
    { text: 'Defining core features for validation', icon: XCircle },
    { text: 'Avoiding unnecessary development costs', icon: XCircle },
    { text: 'Gathering meaningful feedback from users', icon: XCircle },
    { text: 'Building the MVP into a foundation for growth', icon: XCircle },
    { text: 'Refining based on the right user insights', icon: XCircle }
  ];

  const solutions = [
    { text: 'Honed methodology for high-impact MVP roadmapping', icon: CheckCircle },
    { text: 'Lean development to reduce costs by 70%', icon: CheckCircle },
    { text: 'Rapid prototyping that enables early user testing', icon: CheckCircle },
    { text: 'Scalable architecture for the future, from the get-go', icon: CheckCircle },
    { text: 'Iteration based on real user feedback for a full-scale product', icon: CheckCircle }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery Sprint',
      duration: 'Week 1-2',
      description: 'Deep dive into your vision, market, and users. We emerge with a validated feature set, technical architecture, and a clear roadmap to launch.',
      deliverables: ['User personas', 'Feature prioritization', 'Technical spec', 'Project timeline']
    },
    {
      step: '02',
      title: 'Design & Prototype',
      duration: 'Week 3-4',
      description: 'Transform concepts into interactive prototypes. Test with real users, gather feedback, and refine before development begins.',
      deliverables: ['UX wireframes', 'High-fidelity UI', 'Interactive prototype', 'User testing']
    },
    {
      step: '03',
      title: 'Agile Development',
      duration: 'Week 5-10',
      description: 'Two-week sprints with continuous delivery. You see working features every sprint, with the ability to adjust priorities as we learn.',
      deliverables: ['Working software', 'Sprint demos', 'Code documentation', 'Automated tests']
    },
    {
      step: '04',
      title: 'Launch & Learn',
      duration: 'Week 11-12',
      description: 'Deploy to production with monitoring, analytics, and support. Gather real-world data to inform your next iteration.',
      deliverables: ['Production deploy', 'Analytics setup', 'Feedback system', 'Support docs']
    }
  ];

  const industries: Array<{ name: string; icon: LucideIcon; examples: string; highlight?: string }> = [
    { name: 'FinTech & Banking', icon: Landmark, examples: 'Payment apps, lending platforms, investment tools', highlight: 'MGA Licensed' },
    { name: 'iGaming & Sports', icon: Gamepad2, examples: 'Betting platforms, fantasy sports, gaming apps', highlight: 'Malta Gaming Authority' },
    { name: 'HealthTech', icon: Heart, examples: 'Telemedicine, patient portals, wellness apps', highlight: 'GDPR Compliant' },
    { name: 'PropTech', icon: Home, examples: 'Property platforms, rental management, smart home', highlight: 'EU Ready' },
    { name: 'E-Commerce', icon: ShoppingCart, examples: 'Marketplaces, D2C platforms, subscription services', highlight: 'PCI DSS' },
    { name: 'Enterprise SaaS', icon: Briefcase, examples: 'CRM, project management, workflow automation', highlight: 'SOC 2 Ready' }
  ];

  const testimonials = [
    {
      quote: "OARC took our concept from napkin sketch to App Store in just 10 weeks. The MVP attracted €500K in seed funding within 3 months of launch. Their understanding of the Malta startup ecosystem was invaluable.",
      author: "Sarah Vella",
      role: "Founder & CEO",
      company: "TechStartup Malta",
      metric: "€500K raised",
      metricLabel: "Seed Funding"
    },
    {
      quote: "We needed to validate our iGaming concept fast. OARC delivered a working MVP that let us test with real users before committing to full development. They knew exactly what the MGA would require.",
      author: "Marco Camilleri",
      role: "Chief Executive",
      company: "Gaming Innovations Ltd",
      metric: "10,000+",
      metricLabel: "Beta Users"
    },
    {
      quote: "The Discovery Sprint alone saved us 6 months of wrong direction. OARC's methodology is battle-tested—they've clearly done this dozens of times before. Worth every euro.",
      author: "Elena Borg",
      role: "Product Director",
      company: "FinTech Solutions Malta",
      metric: "6 months",
      metricLabel: "Time Saved"
    }
  ];

  const faqs = [
    {
      question: 'What is an MVP and why do I need one?',
      answer: 'An MVP (Minimum Viable Product) is a functional version of your product with just enough features to validate your core hypothesis with real users. It helps you test market demand, gather feedback, and attract investors—all while minimizing time and development costs before committing to a full build. For Malta startups, an MVP is often the difference between raising seed funding and running out of runway.'
    },
    {
      question: 'How long does it take to build an MVP?',
      answer: 'Typically 8-12 weeks from kickoff to launch, depending on complexity. Our Discovery Sprint (2 weeks) defines scope and architecture. Design takes 2-3 weeks. Development runs 4-6 weeks with continuous delivery. We prioritize speed without sacrificing quality—and our Malta-based team works in your timezone for faster iteration.'
    },
    {
      question: 'How much does MVP development cost?',
      answer: 'MVP projects typically range from €25,000-€75,000 depending on complexity, platform (web, mobile, or both), and integrations required. We provide detailed estimates after our Discovery Sprint, with fixed-price options available for well-defined scopes. Compared to in-house development, our approach saves 70% on average—money you can redirect to growth.'
    },
    {
      question: 'Can the MVP scale when we grow?',
      answer: 'Absolutely. We build MVPs on production-grade architecture designed to scale. Our tech stack (React, Node.js, PostgreSQL, AWS) handles millions of users, and our clean code practices mean features can be added without costly rewrites. Many of our MVPs have grown into platforms serving 100,000+ users.'
    },
    {
      question: 'Do you sign NDAs and who owns the code?',
      answer: 'Yes, we sign NDAs before any project discussion. You own 100% of the code, designs, and IP from day one. Full source code access, comprehensive documentation, and no vendor lock-in. Your MVP is your asset—we provide full handover documentation so you\'re never dependent on us.'
    },
    {
      question: 'Why choose OARC Digital in Malta?',
      answer: 'Based in Malta\'s thriving tech ecosystem, we understand local regulations, EU compliance, and the iGaming, FinTech, and startup landscape. Our team combines Silicon Valley practices with Mediterranean business understanding. Plus, same timezone collaboration with European clients, and deep relationships with Malta Enterprise, MDIA, and the startup community.'
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'We have deep expertise in FinTech (payment processing, lending, investment), iGaming (MGA-licensed platforms, sports betting, fantasy sports), HealthTech (GDPR-compliant telemedicine, wellness apps), and Enterprise SaaS. Our Malta base gives us unique insight into regulated industries that require compliance-first development.'
    },
    {
      question: 'What happens after the MVP launches?',
      answer: 'Launch is just the beginning. We include 30 days of post-launch support covering bug fixes, performance monitoring, and user feedback analysis. From there, we offer ongoing development retainers for continuous improvement, or we can hand over to your internal team with full documentation and knowledge transfer.'
    }
  ];

  const whyOarc = [
    {
      title: 'Efficient, targeted concept validation',
      description: 'We focus on creating MVPs with only essential features, allowing you to validate your concept efficiently. This approach minimizes costs, gathers valuable feedback, and helps refine your product for a successful launch.',
      icon: Target
    },
    {
      title: 'User-centric, feedback-driven refinement',
      description: 'User feedback is integral to our process, guiding iterative improvements. This ensures your MVP evolves with user expectations and provides a strong foundation for future development.',
      icon: Users
    },
    {
      title: 'Built as a foundation for the future',
      description: 'Our MVPs are developed with scalability at their core, allowing for easy expansion into full-featured software. Your product can adapt to evolving market demands and growing user base.',
      icon: Layers
    }
  ];

  const maltaAdvantages = [
    {
      title: 'EU Market Access',
      description: 'Malta is your gateway to 450M+ EU consumers. Build once, deploy across Europe with full GDPR and PSD2 compliance baked in.',
      icon: Globe
    },
    {
      title: 'Regulatory Expertise',
      description: 'Deep understanding of MGA gaming licenses, MFSA financial regulations, and MDIA tech certifications. We build compliance-first.',
      icon: Scale
    },
    {
      title: 'Startup Ecosystem',
      description: 'Connected to Malta Enterprise, tech incubators, and VC networks. We\'ve helped clients access €2M+ in startup grants and incentives.',
      icon: Rocket
    },
    {
      title: 'Same Timezone',
      description: 'Central European Time means real-time collaboration with UK, EU, and MENA markets. No overnight delays or miscommunication.',
      icon: Clock
    }
  ];

  const techStack = [
    { name: 'React', icon: SiReact },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'AWS', icon: SiAmazon },
    { name: 'Stripe', icon: SiStripe },
    { name: 'Twilio', icon: SiTwilio },
    { name: 'Figma', icon: SiFigma },
    { name: 'Flutter', icon: SiFlutter },
    { name: 'Kotlin', icon: SiKotlin },
    { name: 'Swift', icon: SiSwift },
    { name: 'Docker', icon: SiDocker }
  ];

  const caseStudies = [
    {
      title: 'PropTech Platform',
      category: 'Real Estate',
      description: 'AI-powered property matching platform launched in 10 weeks',
      metric: '94%',
      metricLabel: 'faster response',
      image: mvpDashboard
    },
    {
      title: 'FinTech Mobile App',
      category: 'Payment Processing',
      description: 'Cross-border payment MVP with full MGA compliance',
      metric: '€2M',
      metricLabel: 'Series A raised',
      image: mvpMobileScreens
    },
    {
      title: 'SaaS Analytics Dashboard',
      category: 'Enterprise Software',
      description: 'B2B analytics platform from concept to paying customers',
      metric: '10x',
      metricLabel: 'pipeline velocity',
      image: mvpProcess
    }
  ];

  const deliverables = [
    { item: 'Feature Prioritization Matrix', included: true },
    { item: 'Technical Architecture Document', included: true },
    { item: 'Interactive Figma Prototype', included: true },
    { item: 'User Testing Report', included: true },
    { item: 'Full Source Code Ownership', included: true },
    { item: 'Production Deployment', included: true },
    { item: 'Analytics & Monitoring Setup', included: true },
    { item: '30-Day Post-Launch Support', included: true },
    { item: 'Code Documentation & Handover', included: true },
    { item: 'Investor Pitch Deck Support', included: true }
  ];

  return (
    <Layout>
      <SEOHead
        title="MVP Development Services Malta | Launch Your Startup in 8-12 Weeks | OARC Digital"
        description="Build your MVP with Malta's leading product development team. From concept validation to market launch in 8-12 weeks. €25K-€75K fixed price. 40+ MVPs shipped. Get a free consultation."
        canonicalUrl="https://oarcdigital.com/services/mvp-development"
        ogType="article"
      />

      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-black" data-testid="section-hero">
        <AnimatedGridBackground 
          className="absolute inset-0" 
          showParticles={true}
          showScanLine={true}
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black" />
        
        {/* Floating gradient orbs */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#23AACA]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#4ade80]/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 w-full px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6" data-testid="text-eyebrow">
                  <Sparkles className="w-4 h-4 text-[#4ade80]" />
                  <span className="text-sm font-medium text-white/80">MVP Development Services</span>
                  <span className="text-xs px-2 py-0.5 bg-[#23AACA]/20 text-[#23AACA] rounded-full">Malta</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight" data-testid="heading-title">
                  MVP Software Development for{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#23AACA] to-[#4ade80]">
                    Early Validation
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl leading-relaxed">
                  Whether you're launching a new company or scaling horizontally, OARC's MVP development services will help you build, test, and iterate—fast.
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    'Build a minimal, viable product to validate your UVP',
                    'Use a lean, cost-efficient approach to reduce time-to-market',
                    'Test and iterate based on real user feedback',
                    'Check assumptions and invest resources wisely—early'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-white">
                      <CheckCircle2 className="w-5 h-5 text-[#4ade80] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-[#23AACA] to-[#4ade80] hover:opacity-90 text-black font-bold px-8"
                      data-testid="button-cta-hero"
                    >
                      Get Free Consultation
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <Link href="/our-work">
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-white/20 text-white hover:bg-white/10"
                      data-testid="button-view-work"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      View Our Work
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hidden lg:block"
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#23AACA]/20 to-[#4ade80]/20 rounded-2xl blur-xl" />
                  <img 
                    src={mvpMobileScreens} 
                    alt="MVP mobile app prototype screens" 
                    className="relative rounded-xl shadow-2xl border border-white/10"
                    data-testid="img-hero-product"
                  />
                </div>
              </motion.div>
            </div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
            >
              {heroStats.map((stat, idx) => {
                const StatIcon = stat.icon;
                return (
                  <GlassCard key={idx} className="p-6 text-center" glowOnHover={true}>
                    <StatIcon className="w-6 h-6 text-[#23AACA] mx-auto mb-3" />
                    <div className="text-3xl md:text-4xl font-black text-white mb-1" data-testid={`stat-value-${idx}`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/50">{stat.label}</div>
                  </GlassCard>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <section className="bg-zinc-950 py-8 border-y border-white/5 overflow-hidden" data-testid="section-tech-stack">
        <div className="max-w-7xl mx-auto px-6 mb-4">
          <p className="text-xs uppercase tracking-widest text-white/40 text-center">Built with modern, scalable technology</p>
        </div>
        <div className="relative">
          <div className="flex gap-12 animate-scroll">
            {[...techStack, ...techStack, ...techStack].map((tech, idx) => {
              const TechIcon = tech.icon;
              return (
                <div key={idx} className="flex items-center gap-2 text-white/40 hover:text-white/70 transition-colors flex-shrink-0">
                  <TechIcon className="w-5 h-5" />
                  <span className="text-sm font-medium whitespace-nowrap">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
        `}</style>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#4ade80]/10 border border-[#4ade80]/20 rounded-full mb-6">
              <Award className="w-4 h-4 text-[#4ade80]" />
              <span className="text-sm font-medium text-[#4ade80]">What You Get</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              OARC's MVP Development Services
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Our MVP software development services help you create functional, market-ready software with minimal resources to validate your value prop.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatYouGet.map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  data-testid={`card-service-${idx}`}
                >
                  <GlassCard className="p-6 h-full" glowOnHover={true}>
                    <div className="w-14 h-14 bg-gradient-to-br from-[#23AACA]/20 to-[#4ade80]/20 rounded-xl flex items-center justify-center mb-4">
                      <ItemIcon className="w-7 h-7 text-[#23AACA]" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-white/80 mb-4 text-sm leading-relaxed">{item.description}</p>
                    <div className="pt-4 border-t border-white/10">
                      <p className="text-xs text-white/40 uppercase tracking-wider mb-2">Deliverables</p>
                      <div className="flex flex-wrap gap-2">
                        {item.deliverables.map((del, dIdx) => (
                          <span key={dIdx} className="text-xs px-2 py-1 bg-white/5 text-white/70 rounded">
                            {del}
                          </span>
                        ))}
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why OARC Section */}
      <section className="bg-zinc-950 py-24 px-6" data-testid="section-why-oarc">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                Why OARC's MVP Development Services?
              </h2>
              <div className="space-y-8">
                {whyOarc.map((item, idx) => {
                  const WhyIcon = item.icon;
                  return (
                    <div key={idx} className="flex gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#23AACA]/20 to-[#4ade80]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <WhyIcon className="w-6 h-6 text-[#23AACA]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-white/90 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#23AACA]/10 to-[#4ade80]/10 rounded-2xl blur-xl" />
                <img 
                  src={mvpDashboard} 
                  alt="SaaS MVP dashboard interface" 
                  className="relative rounded-xl shadow-2xl border border-white/10"
                  data-testid="img-dashboard"
                />
              </div>
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
              Common Challenges. Real Solutions.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Challenges */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <GlassCard className="p-8 h-full border-red-500/20" glowOnHover={false}>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <XCircle className="w-6 h-6 text-red-400" />
                  MVP Development Challenges
                </h3>
                <div className="space-y-4">
                  {challenges.map((challenge, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-red-500/5 rounded-lg border border-red-500/10">
                      <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span className="text-white/80 text-sm">{challenge.text}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>

            {/* Solutions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <GlassCard className="p-8 h-full border-[#4ade80]/20" glowOnHover={false}>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-[#4ade80]" />
                  OARC's Solutions
                </h3>
                <div className="space-y-4">
                  {solutions.map((solution, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-[#4ade80]/5 rounded-lg border border-[#4ade80]/10">
                      <CheckCircle className="w-5 h-5 text-[#4ade80] flex-shrink-0 mt-0.5" />
                      <span className="text-white/80 text-sm">{solution.text}</span>
                    </div>
                  ))}
                </div>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#23AACA]/10 border border-[#23AACA]/20 rounded-full mb-6">
              <Calendar className="w-4 h-4 text-[#23AACA]" />
              <span className="text-sm font-medium text-[#23AACA]">Our Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              From Idea to Launch in 8-12 Weeks
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Our battle-tested methodology has shipped 40+ MVPs. Here's how we do it.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((phase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                data-testid={`card-process-${idx}`}
              >
                <GlassCard className="p-6 h-full relative overflow-hidden" glowOnHover={true}>
                  <div className="absolute top-0 right-0 text-8xl font-black text-white/[0.03] leading-none">
                    {phase.step}
                  </div>
                  <div className="relative">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#23AACA]/10 text-[#23AACA] rounded-full text-xs font-bold mb-4">
                      <Clock className="w-3 h-3" />
                      {phase.duration}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{phase.title}</h3>
                    <p className="text-white/90 text-sm mb-4 leading-relaxed">{phase.description}</p>
                    <div className="space-y-2">
                      {phase.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2 text-xs text-white/50">
                          <CheckCircle2 className="w-3 h-3 text-[#4ade80]" />
                          {del}
                        </div>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#23AACA]/10 to-[#4ade80]/10 rounded-2xl blur-xl" />
              <img 
                src={mvpProcess} 
                alt="MVP development process diagram" 
                className="relative rounded-xl shadow-2xl border border-white/10 w-full"
                data-testid="img-process"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-black py-24 px-6" data-testid="section-case-studies">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
                What We've Built
              </h2>
              <p className="text-white/80">Real MVPs. Real results.</p>
            </div>
            <Link href="/our-work">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10" data-testid="button-all-case-studies">
                View All Case Studies
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((study, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                data-testid={`card-case-study-${idx}`}
              >
                <GlassCard className="overflow-hidden group cursor-pointer" glowOnHover={true}>
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-xs px-2 py-1 bg-[#23AACA]/20 text-[#23AACA] rounded-full">
                        {study.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2">{study.title}</h3>
                    <p className="text-white/90 text-sm mb-4">{study.description}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div>
                        <div className="text-2xl font-black text-[#4ade80]">{study.metric}</div>
                        <div className="text-xs text-white/50">{study.metricLabel}</div>
                      </div>
                      <ExternalLink className="w-5 h-5 text-white/40 group-hover:text-[#23AACA] transition-colors" />
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Malta Advantages */}
      <section className="bg-zinc-950 py-24 px-6" data-testid="section-malta">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-[#23AACA]" />
              <span className="text-sm font-medium text-white/80">Based in Malta, EU</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Why Malta. Why OARC.
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Your gateway to the EU market, with deep expertise in regulated industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {maltaAdvantages.map((advantage, idx) => {
              const AdvIcon = advantage.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  data-testid={`card-malta-${idx}`}
                >
                  <GlassCard className="p-6 h-full" glowOnHover={true}>
                    <div className="w-12 h-12 bg-gradient-to-br from-[#23AACA]/20 to-[#4ade80]/20 rounded-xl flex items-center justify-center mb-4">
                      <AdvIcon className="w-6 h-6 text-[#23AACA]" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{advantage.title}</h3>
                    <p className="text-white/90 text-sm leading-relaxed">{advantage.description}</p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-black py-24 px-6" data-testid="section-industries">
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
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
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
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#23AACA]/20 to-[#4ade80]/20 rounded-xl flex items-center justify-center">
                        <IndustryIcon className="w-6 h-6 text-[#23AACA]" />
                      </div>
                      {industry.highlight && (
                        <span className="text-xs px-2 py-1 bg-[#4ade80]/10 text-[#4ade80] rounded-full border border-[#4ade80]/20">
                          {industry.highlight}
                        </span>
                      )}
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

      {/* Deliverables Matrix */}
      <section className="bg-zinc-950 py-24 px-6" data-testid="section-deliverables">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              What's Included
            </h2>
            <p className="text-lg text-white/80">
              Every MVP project includes these deliverables—no hidden costs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlassCard className="p-8" glowOnHover={false}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {deliverables.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-3 p-3 bg-white/[0.02] rounded-lg"
                    data-testid={`deliverable-${idx}`}
                  >
                    <CheckCircle className="w-5 h-5 text-[#4ade80] flex-shrink-0" />
                    <span className="text-white/80">{item.item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-white/10 text-center">
                <div className="text-3xl font-black text-white mb-2">€25,000 - €75,000</div>
                <p className="text-white/50 text-sm">Fixed price available after Discovery Sprint</p>
              </div>
            </GlassCard>
          </motion.div>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                data-testid={`card-testimonial-${idx}`}
              >
                <GlassCard className="p-8 h-full flex flex-col" glowOnHover={false}>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#23AACA] text-[#23AACA]" />
                    ))}
                  </div>
                  <blockquote className="text-white/80 mb-6 flex-grow text-sm leading-relaxed" data-testid={`text-testimonial-${idx}`}>
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="pt-6 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-white font-bold">{testimonial.author}</div>
                        <div className="text-white/50 text-sm">{testimonial.role}</div>
                        <div className="text-white/40 text-xs">{testimonial.company}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-black text-[#4ade80]">{testimonial.metric}</div>
                        <div className="text-xs text-white/50">{testimonial.metricLabel}</div>
                      </div>
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
                  data-testid={`faq-toggle-${idx}`}
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
                        className="mt-4 pt-4 border-t border-white/10"
                      >
                        <p className="text-white/90 leading-relaxed" data-testid={`faq-answer-${idx}`}>
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-black py-24 px-6" data-testid="section-cta">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#4ade80]/10 border border-[#4ade80]/20 rounded-full mb-6">
              <Rocket className="w-4 h-4 text-[#4ade80]" />
              <span className="text-sm font-medium text-[#4ade80]">Ready to Launch?</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              Turn Your Idea Into a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#23AACA] to-[#4ade80]">
                Market-Ready MVP
              </span>
            </h2>
            
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Book a free 30-minute consultation with our team. We'll discuss your idea, timeline, and how we can help you launch fast.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-[#23AACA] to-[#4ade80] hover:opacity-90 text-black font-bold px-8"
                  data-testid="button-cta-contact"
                >
                  Schedule Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href="tel:+35699123456">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/20 text-white hover:bg-white/10"
                  data-testid="button-cta-phone"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  +356 9912 3456
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-white/40 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4ade80]" />
                <span>Free consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4ade80]" />
                <span>NDA signed upfront</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4ade80]" />
                <span>You own the code</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4ade80]" />
                <span>Fixed price available</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
