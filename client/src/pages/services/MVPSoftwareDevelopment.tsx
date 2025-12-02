import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { 
  ArrowRight, CheckCircle2, Rocket, Target, Zap, Clock, 
  Shield, TrendingUp, Users, Code2, Database, Server,
  BarChart3, RefreshCw, ChevronDown, Star, Building2, Globe,
  Award, Layers, Calendar, Phone, Play, ExternalLink, 
  CheckCircle, XCircle, Euro, GitBranch, Cpu, Lock,
  Sparkles, Cloud, Settings, Terminal, type LucideIcon
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SEOHead from "@/components/SEOHead";
import { motion } from 'framer-motion';
import { AnimatedGridBackground } from '@/components/ui/animated-grid-background';
import { GlassCard } from '@/components/ui/glass-card';
import { Button } from '@/components/ui/button';
import { 
  SiReact, SiTypescript, SiNodedotjs, SiPostgresql, 
  SiAmazon, SiDocker, SiKubernetes, SiRedis,
  SiMongodb, SiGraphql, SiTailwindcss, SiNextdotjs
} from 'react-icons/si';

import mvpMobileScreens from '@assets/generated_images/mvp_mobile_app_prototype_screens.png';
import mvpDashboard from '@assets/generated_images/saas_mvp_dashboard_interface.png';
import mvpProcess from '@assets/generated_images/mvp_development_process_diagram.png';

export default function MVPSoftwareDevelopment() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const heroStats = [
    { value: '8-12', label: 'Weeks to Launch', icon: Clock },
    { value: '70%', label: 'Cost Savings', icon: TrendingUp },
    { value: '40+', label: 'Software MVPs', icon: Code2 },
    { value: '€5M+', label: 'Client Funding', icon: Euro }
  ];

  const whatYouGet = [
    {
      icon: Target,
      title: 'Core Feature Definition',
      description: 'Borrow OARC\'s super-honed methodology to choose the critical features you need for UVP validation. Our cost-effective approach keeps development streamlined but your product aligned with its primary objectives.',
      deliverables: ['Feature prioritization matrix', 'Technical scope document', 'User story mapping']
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
      description: 'Focus on developing only the most important features to create a functional MVP. Doing so reduces both your time and capital investment while delivering a high-quality software experience.',
      deliverables: ['Working software increments', 'Sprint demos every 2 weeks', 'Full code documentation']
    },
    {
      icon: Users,
      title: 'User-Centric Feedback Collection',
      description: 'Use insights gathered from early users to fine-tune your MVP. These findings help ensure your software meets real-world expectations and lays the groundwork for future growth.',
      deliverables: ['Analytics integration', 'User feedback system', 'Behavior tracking']
    },
    {
      icon: Database,
      title: 'Scalable Architecture',
      description: 'Design your software MVP to support long-term scalability. Staying forward-thinking as we build will help make sure that your software can adapt to growing needs, seamlessly adding features.',
      deliverables: ['Cloud infrastructure', 'Database optimization', 'API-first design']
    },
    {
      icon: RefreshCw,
      title: 'Support & Iteration',
      description: 'Receive continuous support after launch to further refine your MVP, pivot based on feedback, or turn it into a full-scale product. We\'re in it for the long-haul with you—as your full-stack development partner.',
      deliverables: ['30-day post-launch support', 'Bug fixes included', 'Performance monitoring']
    }
  ];

  const challenges = [
    { text: 'Defining core features for software validation', icon: XCircle },
    { text: 'Avoiding unnecessary development costs', icon: XCircle },
    { text: 'Gathering meaningful feedback from beta users', icon: XCircle },
    { text: 'Building a foundation for enterprise growth', icon: XCircle },
    { text: 'Refining based on the right technical insights', icon: XCircle }
  ];

  const solutions = [
    { text: 'Honed methodology for high-impact MVP roadmapping', icon: CheckCircle },
    { text: 'Lean development to reduce costs by 70%', icon: CheckCircle },
    { text: 'Rapid prototyping that enables early user testing', icon: CheckCircle },
    { text: 'Scalable architecture built for the future', icon: CheckCircle },
    { text: 'Iteration based on real user feedback for full-scale product', icon: CheckCircle }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery Sprint',
      duration: 'Week 1-2',
      description: 'Deep dive into your software vision, market, and users. We emerge with a validated feature set, technical architecture, and a clear roadmap.',
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
      description: 'Two-week sprints with continuous delivery. You see working software every sprint, with the ability to adjust priorities as we learn.',
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

  const softwareTypes: Array<{ name: string; icon: LucideIcon; description: string }> = [
    { name: 'SaaS Platforms', icon: Cloud, description: 'Multi-tenant software with subscription billing, user management, and analytics dashboards' },
    { name: 'Enterprise Tools', icon: Building2, description: 'Internal tools, CRM systems, project management, and workflow automation software' },
    { name: 'API-First Products', icon: Server, description: 'Developer platforms, integrations, webhooks, and API management systems' },
    { name: 'Data Platforms', icon: Database, description: 'Analytics dashboards, BI tools, data visualization, and reporting systems' },
    { name: 'Developer Tools', icon: Terminal, description: 'IDEs, CLI tools, SDKs, and development infrastructure software' },
    { name: 'Admin Panels', icon: Settings, description: 'Back-office systems, content management, and administrative dashboards' }
  ];

  const testimonials = [
    {
      quote: "OARC built our SaaS MVP in 9 weeks. The architecture they designed handled our 10x growth without a single rewrite. Best investment we made.",
      author: "David Grech",
      role: "CTO",
      company: "DataFlow Solutions",
      metric: "10x",
      metricLabel: "Growth handled"
    },
    {
      quote: "We needed enterprise-grade software fast. OARC's Discovery Sprint saved us months of wrong direction and their agile process meant we could pivot weekly.",
      author: "Maria Spiteri",
      role: "Product Director",
      company: "Enterprise Tech Malta",
      metric: "€1.2M",
      metricLabel: "Series A raised"
    },
    {
      quote: "Their understanding of software architecture is exceptional. The codebase they delivered is clean, documented, and our internal team could maintain it immediately.",
      author: "James Borg",
      role: "Engineering Lead",
      company: "SaaS Innovations",
      metric: "3 months",
      metricLabel: "Time saved"
    }
  ];

  const faqs = [
    {
      question: 'What types of software can you build as an MVP?',
      answer: 'We specialize in SaaS platforms, enterprise tools, API-first products, data platforms, developer tools, and admin panels. Our tech stack (React, Node.js, PostgreSQL, AWS) is optimized for web-based software that needs to scale. We\'ve built everything from simple CRUD apps to complex multi-tenant platforms with real-time features.'
    },
    {
      question: 'How is software MVP development different from mobile app development?',
      answer: 'Software MVPs typically involve more complex backend architecture, database design, and integration requirements. We focus on building robust APIs, scalable infrastructure, and maintainable codebases that can grow into enterprise products. The timeline is similar (8-12 weeks), but the technical decisions are more focused on long-term scalability.'
    },
    {
      question: 'What technology stack do you use?',
      answer: 'Our core stack is React/TypeScript for frontend, Node.js for backend, PostgreSQL for databases, and AWS for infrastructure. We also work with Next.js, GraphQL, Redis, Docker, and Kubernetes depending on requirements. This modern stack ensures your MVP is built on proven, maintainable technology that attracts quality developers.'
    },
    {
      question: 'How do you ensure the software can scale?',
      answer: 'We design for scale from day one: API-first architecture, database indexing strategies, caching layers, and cloud-native deployment. Our MVPs typically handle 10x-100x traffic increases without major rewrites. We document scaling paths so your team knows exactly what to optimize as you grow.'
    },
    {
      question: 'Can you integrate with existing systems?',
      answer: 'Yes, integration is often a core requirement. We\'ve integrated with Stripe, Twilio, HubSpot, Salesforce, and dozens of industry-specific APIs. We build clean API layers that make future integrations straightforward, and we document all integration points for your team.'
    },
    {
      question: 'What about security and compliance?',
      answer: 'Security is built-in, not bolted on. We implement authentication (OAuth2, SSO), authorization, encryption at rest and in transit, and audit logging. For regulated industries, we ensure GDPR compliance and can work toward SOC 2 readiness. Our Malta base gives us deep EU compliance expertise.'
    },
    {
      question: 'How do you handle handover to our internal team?',
      answer: 'We treat handover as a first-class deliverable. You get complete source code, comprehensive documentation, architecture decision records, and optional knowledge transfer sessions. Our code follows industry best practices, so any competent developer can maintain it. No vendor lock-in, ever.'
    },
    {
      question: 'What happens after the MVP launches?',
      answer: 'We include 30 days of post-launch support for bug fixes and optimization. Beyond that, we offer ongoing development retainers for continuous improvement, or full handover with training for your internal team. Many clients continue with us for v2, v3, and beyond.'
    }
  ];

  const whyOarc = [
    {
      title: 'Efficient, targeted concept & assumption validation',
      description: 'We focus on creating MVPs with only essential features, allowing you to validate your concept efficiently. This approach minimizes costs, gathers valuable feedback, and helps refine your product to align with market needs.',
      icon: Target
    },
    {
      title: 'User-centric, feedback-driven refinement',
      description: 'User feedback is integral to our process, guiding iterative improvements. This ensures your MVP evolves with user expectations, providing a strong foundation for future development and scalability.',
      icon: Users
    },
    {
      title: 'Built as a foundation for the future',
      description: 'Our MVPs are developed with scalability at their core, allowing for easy expansion into full-featured software. Your product can adapt to evolving market demands and increasing user base—growing alongside your business.',
      icon: Layers
    }
  ];

  const techStack = [
    { name: 'React', icon: SiReact, category: 'Frontend' },
    { name: 'TypeScript', icon: SiTypescript, category: 'Language' },
    { name: 'Next.js', icon: SiNextdotjs, category: 'Framework' },
    { name: 'Node.js', icon: SiNodedotjs, category: 'Backend' },
    { name: 'PostgreSQL', icon: SiPostgresql, category: 'Database' },
    { name: 'MongoDB', icon: SiMongodb, category: 'Database' },
    { name: 'Redis', icon: SiRedis, category: 'Cache' },
    { name: 'GraphQL', icon: SiGraphql, category: 'API' },
    { name: 'AWS', icon: SiAmazon, category: 'Cloud' },
    { name: 'Docker', icon: SiDocker, category: 'DevOps' },
    { name: 'Kubernetes', icon: SiKubernetes, category: 'Orchestration' },
    { name: 'Tailwind', icon: SiTailwindcss, category: 'Styling' }
  ];

  const caseStudies = [
    {
      title: 'Enterprise Analytics Platform',
      category: 'SaaS',
      description: 'B2B analytics dashboard from concept to paying enterprise customers',
      metric: '10x',
      metricLabel: 'ARR growth',
      image: mvpDashboard
    },
    {
      title: 'API Management Tool',
      category: 'Developer Tools',
      description: 'Developer platform with rate limiting, analytics, and webhooks',
      metric: '50K',
      metricLabel: 'API calls/day',
      image: mvpProcess
    },
    {
      title: 'Multi-Tenant SaaS',
      category: 'Enterprise',
      description: 'White-label platform serving 200+ business customers',
      metric: '€2M',
      metricLabel: 'Series A raised',
      image: mvpMobileScreens
    }
  ];

  const vsInHouse = [
    { feature: 'Time to launch', oarc: '8-12 weeks', inHouse: '6-12 months' },
    { feature: 'Upfront cost', oarc: '€25K-€75K', inHouse: '€150K-€300K+' },
    { feature: 'Hiring time', oarc: 'None', inHouse: '3-6 months' },
    { feature: 'Technology risk', oarc: 'Mitigated by experience', inHouse: 'Learning curve' },
    { feature: 'Scalability', oarc: 'Built-in from day 1', inHouse: 'Depends on team' },
    { feature: 'Documentation', oarc: 'Comprehensive', inHouse: 'Often neglected' },
  ];

  const deliverables = [
    { item: 'Feature Prioritization Matrix', included: true },
    { item: 'Technical Architecture Document', included: true },
    { item: 'Interactive Figma Prototype', included: true },
    { item: 'Full Source Code (React/Node.js)', included: true },
    { item: 'API Documentation (OpenAPI/Swagger)', included: true },
    { item: 'Database Schema & Migrations', included: true },
    { item: 'CI/CD Pipeline Setup', included: true },
    { item: 'Production Deployment (AWS)', included: true },
    { item: 'Monitoring & Alerting Setup', included: true },
    { item: '30-Day Post-Launch Support', included: true }
  ];

  return (
    <Layout>
      <SEOHead
        title="MVP Software Development Services | SaaS & Enterprise | OARC Digital Malta"
        description="Build your software MVP in 8-12 weeks with Malta's leading development team. SaaS platforms, enterprise tools, API products. React, Node.js, AWS. €25K-€75K fixed price. Free consultation."
        canonicalUrl="https://oarcdigital.com/services/mvp-development/for-software"
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
                  <Code2 className="w-4 h-4 text-[#4ade80]" />
                  <span className="text-sm font-medium text-white/80">MVP Software Development</span>
                  <span className="text-xs px-2 py-0.5 bg-[#23AACA]/20 text-[#23AACA] rounded-full">For SaaS & Enterprise</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight" data-testid="heading-title">
                  MVP Software Development Services for{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#23AACA] to-[#4ade80]">
                    Early Validation
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl leading-relaxed">
                  Whether you're launching a new SaaS product or building enterprise software, OARC's MVP development services will help:
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    'Build a minimal, viable software product to validate your UVP',
                    'Use a lean, cost-efficient approach to reduce time-to-market',
                    'Test and iterate based on real user feedback',
                    'Check assumptions and invest resources wisely—early'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-white/80">
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
                      View Case Studies
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
                    src={mvpDashboard} 
                    alt="SaaS MVP dashboard interface" 
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

      {/* Tech Stack Section */}
      <section className="bg-zinc-950 py-16 px-6 border-y border-white/5" data-testid="section-tech-stack">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-sm uppercase tracking-widest text-white/40 mb-4">Built with production-grade technology</p>
            <h2 className="text-2xl font-bold text-white">Our Tech Stack</h2>
          </motion.div>

          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-4">
            {techStack.map((tech, idx) => {
              const TechIcon = tech.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="flex flex-col items-center gap-2 p-4 bg-white/[0.02] rounded-xl border border-white/5 hover:border-white/10 transition-colors"
                  data-testid={`tech-${idx}`}
                >
                  <TechIcon className="w-8 h-8 text-white/80" />
                  <span className="text-xs text-white/40">{tech.name}</span>
                </motion.div>
              );
            })}
          </div>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#4ade80]/10 border border-[#4ade80]/20 rounded-full mb-6">
              <Award className="w-4 h-4 text-[#4ade80]" />
              <span className="text-sm font-medium text-[#4ade80]">What You Get</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              OARC's MVP Software Development Services
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
                          <span key={dIdx} className="text-xs px-2 py-1 bg-white/5 text-white/90 rounded">
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
                Why OARC's MVP Software Development Services?
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
                        <p className="text-white/80 text-sm leading-relaxed">{item.description}</p>
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
                  src={mvpProcess} 
                  alt="Software development process" 
                  className="relative rounded-xl shadow-2xl border border-white/10"
                  data-testid="img-process"
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
              MVP Software Development Challenges
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <GlassCard className="p-8 h-full border-red-500/20" glowOnHover={false}>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <XCircle className="w-6 h-6 text-red-400" />
                  Common Challenges
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

      {/* OARC vs In-House Comparison */}
      <section className="bg-zinc-950 py-24 px-6" data-testid="section-comparison">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              OARC vs. Hiring In-House
            </h2>
            <p className="text-lg text-white/80">
              Why outsourcing your MVP makes financial sense
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlassCard className="overflow-hidden" glowOnHover={false}>
              <div className="grid grid-cols-3 bg-white/5 p-4 border-b border-white/10">
                <div className="font-bold text-white/80 text-sm"></div>
                <div className="font-bold text-[#4ade80] text-center">OARC Digital</div>
                <div className="font-bold text-white/80 text-center">In-House Team</div>
              </div>
              {vsInHouse.map((row, idx) => (
                <div 
                  key={idx} 
                  className="grid grid-cols-3 p-4 border-b border-white/5 last:border-0"
                  data-testid={`comparison-row-${idx}`}
                >
                  <div className="text-white/80 text-sm">{row.feature}</div>
                  <div className="text-[#4ade80] text-center text-sm font-medium">{row.oarc}</div>
                  <div className="text-white/50 text-center text-sm">{row.inHouse}</div>
                </div>
              ))}
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Software Types Section */}
      <section className="bg-black py-24 px-6" data-testid="section-software-types">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Types of Software We Build
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              From SaaS platforms to enterprise tools—we've built them all
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softwareTypes.map((type, idx) => {
              const TypeIcon = type.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  data-testid={`card-software-type-${idx}`}
                >
                  <GlassCard className="p-6" glowOnHover={true}>
                    <div className="w-12 h-12 bg-gradient-to-br from-[#23AACA]/20 to-[#4ade80]/20 rounded-xl flex items-center justify-center mb-4">
                      <TypeIcon className="w-6 h-6 text-[#23AACA]" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{type.name}</h3>
                    <p className="text-sm text-white/80">{type.description}</p>
                  </GlassCard>
                </motion.div>
              );
            })}
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
                    <p className="text-white/80 text-sm mb-4 leading-relaxed">{phase.description}</p>
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
              <p className="text-white/80">Real software MVPs. Real results.</p>
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
                    <p className="text-white/80 text-sm mb-4">{study.description}</p>
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
              Every software MVP project includes these deliverables—no hidden costs.
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
              <span className="text-sm font-medium text-[#4ade80]">Ready to Build?</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              Turn Your Software Idea Into a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#23AACA] to-[#4ade80]">
                Market-Ready Product
              </span>
            </h2>
            
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Book a free 30-minute consultation with our software development team. We'll discuss your idea, tech requirements, and how we can help you launch fast.
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
                <span>Full code ownership</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4ade80]" />
                <span>React/Node.js stack</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4ade80]" />
                <span>Fixed price available</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to main MVP page link */}
      <section className="bg-zinc-950 py-8 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <Link href="/services/mvp-development">
            <Button variant="ghost" className="text-white/80 hover:text-white" data-testid="button-back-to-mvp">
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Back to MVP Development Services
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
