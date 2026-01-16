import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/ui/glass-card';
import { AnimatedGridBackground } from '@/components/ui/animated-grid-background';
import FAQSection, { FAQItem } from '@/components/FAQSection';
import Footer from '@/components/Footer';
import CreativeNavigation from '@/components/CreativeNavigation';
import QuickLeadModal from '@/components/QuickLeadModal';
import { 
  ArrowRight, Check, Zap, Users, BarChart3, 
  Calendar, Bot, Workflow, Settings, ChevronRight,
  MessageSquare, FileText, Code, Database, Cloud, Cpu,
  Layers, GitBranch, Shield, Rocket, Target, Sparkles,
  Building2, CreditCard, Package, Phone
} from 'lucide-react';
import { SiWhatsapp, SiReact, SiNodedotjs, SiPython, SiPostgresql, SiDocker, SiAmazon } from 'react-icons/si';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const solutionPillars = [
  {
    id: 'automation',
    icon: Workflow,
    title: 'Business Automation',
    subtitle: 'Eliminate Manual Work',
    color: '#c4ff4d',
    description: 'Transform repetitive tasks into seamless automated workflows. Your tools work together while you focus on growth.',
    features: [
      'CRM & Sales Pipeline Automation',
      'Client Onboarding Workflows', 
      'Invoice & Payment Processing',
      'Project Management Integration',
      'Content Generation Pipelines'
    ],
    metrics: { value: '20+', label: 'Hours Saved Weekly' }
  },
  {
    id: 'software',
    icon: Code,
    title: 'Custom Software',
    subtitle: 'Built For Your Business',
    color: '#8b5cf6',
    description: 'Purpose-built applications that solve your unique challenges. From MVPs to enterprise platforms.',
    features: [
      'Web & Mobile Applications',
      'SaaS Products & Platforms',
      'API Development & Integration',
      'Database Architecture',
      'Cloud Infrastructure'
    ],
    metrics: { value: '6-8', label: 'Weeks to Launch' }
  }
];

const automationServices = [
  {
    icon: Users,
    title: "CRM Management",
    description: "Every lead status, meeting note, and follow-up task gets logged automatically."
  },
  {
    icon: Calendar,
    title: "Client Onboarding",
    description: "Contracts and kick-off meetings happen automatically when clients sign."
  },
  {
    icon: Package,
    title: "Project Management",
    description: "Your project tools talk to each other, work flows naturally."
  },
  {
    icon: CreditCard,
    title: "Invoice Management",
    description: "Turn completed work into paid invoices automatically."
  },
];

const softwareServices = [
  {
    icon: Layers,
    title: "Web Applications",
    description: "Full-stack web apps with React, Node.js, and modern frameworks."
  },
  {
    icon: Cpu,
    title: "SaaS Platforms",
    description: "Multi-tenant solutions with subscriptions, analytics, and scaling."
  },
  {
    icon: Database,
    title: "API Development",
    description: "RESTful and GraphQL APIs that connect your entire ecosystem."
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "AWS, Docker, Kubernetes - built for scale and reliability."
  },
];

const techStack = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'AWS', icon: SiAmazon, color: '#FF9900' },
];

const processPhases = [
  {
    phase: "01",
    title: "Discovery",
    duration: "Week 1",
    description: "Deep dive into your business processes, pain points, and goals. We map everything.",
    color: "#c4ff4d"
  },
  {
    phase: "02",
    title: "Design",
    duration: "Week 2",
    description: "Architecture planning, workflow mapping, and solution design with your team.",
    color: "#8b5cf6"
  },
  {
    phase: "03",
    title: "Develop",
    duration: "Weeks 3-8",
    description: "Agile sprints with weekly demos. You see progress and provide feedback continuously.",
    color: "#14b8a6"
  },
  {
    phase: "04",
    title: "Deploy & Scale",
    duration: "Ongoing",
    description: "Launch, monitor, optimize. Dedicated support and continuous improvements.",
    color: "#f97316"
  }
];

const testimonials = [
  {
    quote: "OARC set up our entire operations in a way that keeps everything organized and moving fast. I spend less time managing and more time building.",
    name: "Mark Borg",
    title: "Managing Director",
    company: "Spinola Development",
    avatar: "MB"
  },
  {
    quote: "The custom platform they built transformed how we handle client portfolios. What took days now takes minutes.",
    name: "Sarah Camilleri",
    title: "Operations Lead",
    company: "Heritage Hotels Malta",
    avatar: "SC"
  },
  {
    quote: "From automation to a full custom app - OARC delivered both. One team, complete digital transformation.",
    name: "David Grech",
    title: "Founder",
    company: "TechMalta Ventures",
    avatar: "DG"
  },
];

const faqItems: FAQItem[] = [
  {
    question: "Do you only do automation, or can you build custom software too?",
    answer: "We do both - and often together. Many clients start with automation to solve immediate operational pain, then expand into custom software for unique competitive advantages. Having one team handle both means seamless integration."
  },
  {
    question: "What types of businesses in Malta do you work with?",
    answer: "We work across all sectors including real estate, legal, finance, healthcare, hospitality, iGaming, retail, and professional services. Our solutions are customized for each industry's specific workflows and challenges."
  },
  {
    question: "How long does a typical project take?",
    answer: "Automation projects typically go live in 2-4 weeks. Custom software MVPs take 6-8 weeks. Full enterprise platforms may take 3-6 months. We prioritize quick wins that deliver immediate ROI."
  },
  {
    question: "What technologies do you use?",
    answer: "We use modern, proven technologies: React, Node.js, Python for development. PostgreSQL, MongoDB for databases. AWS, Docker, Kubernetes for infrastructure. Make, n8n, Zapier for automation. Always choosing the right tool for your specific needs."
  },
  {
    question: "Do I need technical knowledge to use what you build?",
    answer: "Absolutely not. We design everything to be user-friendly. You get training, documentation, and ongoing support. Your team can confidently manage day-to-day operations without any technical background."
  },
  {
    question: "How do you price your services?",
    answer: "We offer project-based pricing with clear milestones, or retainer packages for ongoing work. Every engagement starts with a discovery phase so we can provide accurate, no-surprise quotes."
  },
  {
    question: "What makes OARC different from other agencies?",
    answer: "We're based in Malta and understand the local business landscape. We combine automation AND custom software under one roof. We focus on revenue-driving solutions, not just technical implementations. And we maintain everything we build."
  },
  {
    question: "What does ongoing support look like?",
    answer: "All projects include dedicated support. We monitor systems, handle updates, and are available via WhatsApp for quick questions. Growth clients get priority support with faster response times and proactive optimization."
  },
];

export default function RevenueSolutionsLanding() {
  const [showModal, setShowModal] = useState(false);
  const [modalSource, setModalSource] = useState('Solutions Page');
  const [activePillar, setActivePillar] = useState<string | null>(null);
  const [activePhase, setActivePhase] = useState(0);
  
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const openModal = (source: string) => {
    setModalSource(source);
    setShowModal(true);
  };

  return (
    <>
      <Helmet>
        <title>Business Solutions Malta | Automation & Custom Software | OARC Digital</title>
        <meta name="description" content="Transform your business with OARC Digital. We combine automation and custom software development to eliminate operational chaos and build competitive advantages. Malta's premier digital solutions partner." />
        <meta name="keywords" content="business automation Malta, custom software development, digital transformation, Malta business solutions, workflow automation, web development Malta" />
        <link rel="canonical" href="https://oarcdigital.com/solutions" />
        <meta property="og:title" content="Business Solutions Malta | OARC Digital" />
        <meta property="og:description" content="Automation + Custom Software. One team, complete digital transformation." />
        <meta property="og:type" content="website" />
      </Helmet>

      <CreativeNavigation />

      <main className="bg-black min-h-screen overflow-x-hidden">
        
        {/* ========== HERO SECTION - Premium Dark with Grid ========== */}
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <AnimatedGridBackground 
            intensity="medium" 
            showScanLine={true} 
            showParticles={true}
            showConcentricRings={true}
            showDiagonalGrid={false}
          />
          
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-[#c4ff4d]/5 blur-[150px]" />
          <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[120px]" />

          <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8"
              >
                <Sparkles className="w-4 h-4 text-[#c4ff4d]" />
                <span className="text-sm text-white/70">Automation + Software Development</span>
              </motion.div>

              <h1 
                className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
                style={{ fontFamily: 'var(--font-swarsh)' }}
                data-testid="text-hero-headline"
              >
                One Team.<br />
                <span className="text-[#c4ff4d]">Complete</span> Digital<br />
                Transformation.
              </h1>
              
              <p 
                className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-10 leading-relaxed"
                style={{ fontFamily: 'var(--font-halfre)' }}
              >
                We automate your operations AND build custom software to solve your unique challenges.
                Stop juggling vendors — get one partner for your entire digital strategy.
              </p>

              {/* Dual CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/35679711799?text=Hi%20OARC%2C%20I%27d%20like%20to%20explore%20solutions%20for%20my%20business"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-[#c4ff4d] text-black hover:bg-[#c4ff4d]/90 rounded-full px-8 py-6 text-lg font-semibold gap-3 h-auto w-full sm:w-auto"
                    data-testid="button-hero-whatsapp"
                  >
                    <SiWhatsapp className="w-5 h-5" />
                    Chat With Us
                  </Button>
                </a>
                <a href="tel:+35679711799">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/5 rounded-full px-8 py-6 text-lg font-semibold gap-3 h-auto w-full sm:w-auto"
                    data-testid="button-hero-call"
                  >
                    <Phone className="w-5 h-5" />
                    +356 7971 1799
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Two Pillars Visual */}
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {solutionPillars.map((pillar, index) => (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.15 }}
                >
                  <GlassCard
                    className="p-8 cursor-pointer h-full"
                    glowOnHover={true}
                    liftOnHover={true}
                    onClick={() => setActivePillar(activePillar === pillar.id ? null : pillar.id)}
                  >
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                      style={{ backgroundColor: `${pillar.color}15` }}
                    >
                      <pillar.icon className="w-8 h-8" style={{ color: pillar.color }} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-1">{pillar.title}</h3>
                    <p className="text-sm mb-4" style={{ color: pillar.color }}>{pillar.subtitle}</p>
                    <p className="text-white/60 text-sm leading-relaxed mb-6">{pillar.description}</p>
                    
                    <AnimatePresence>
                      {activePillar === pillar.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="border-t border-white/10 pt-4 mt-4"
                        >
                          <ul className="space-y-2">
                            {pillar.features.map((feature, i) => (
                              <motion.li 
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="flex items-center gap-2 text-sm text-white/70"
                              >
                                <Check className="w-4 h-4 flex-shrink-0" style={{ color: pillar.color }} />
                                {feature}
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
                      <div>
                        <span className="text-3xl font-bold" style={{ color: pillar.color }}>{pillar.metrics.value}</span>
                        <span className="text-white/50 text-sm ml-2">{pillar.metrics.label}</span>
                      </div>
                      <ChevronRight className="w-5 h-5 text-white/40" />
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== TECH STACK MARQUEE ========== */}
        <section className="py-8 border-y border-white/5 bg-black/50 backdrop-blur-sm overflow-hidden">
          <div className="flex animate-marquee">
            {[...techStack, ...techStack, ...techStack].map((tech, i) => (
              <div key={i} className="flex items-center gap-3 px-8 py-2">
                <tech.icon className="w-6 h-6" style={{ color: tech.color }} />
                <span className="text-white/40 font-medium whitespace-nowrap">{tech.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ========== AUTOMATION SERVICES GRID ========== */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#c4ff4d]/5 rounded-full blur-[150px]" />
          </div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-[#c4ff4d]/10 border border-[#c4ff4d]/20 rounded-full px-4 py-2 mb-6">
                <Workflow className="w-4 h-4 text-[#c4ff4d]" />
                <span className="text-sm text-[#c4ff4d]">Automation Services</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Automate Your Operations
              </h2>
              <p className="text-white/50 text-lg max-w-2xl mx-auto">
                Your tools working together. Manual tasks eliminated. More time for what matters.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {automationServices.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <GlassCard className="p-6 h-full" variant="default">
                    <div className="w-12 h-12 rounded-xl bg-[#c4ff4d]/10 flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-[#c4ff4d]" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{service.description}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== SOFTWARE SERVICES GRID ========== */}
        <section className="py-24 px-6 relative border-t border-white/5">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px]" />
          </div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
                <Code className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-400">Software Development</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Custom Software That Scales
              </h2>
              <p className="text-white/50 text-lg max-w-2xl mx-auto">
                Purpose-built applications for your unique challenges. From idea to production.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {softwareServices.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <GlassCard className="p-6 h-full" variant="default">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{service.description}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== INTERACTIVE PROCESS TIMELINE ========== */}
        <section className="py-24 px-6 border-t border-white/5 relative overflow-hidden">
          <AnimatedGridBackground 
            intensity="subtle" 
            showScanLine={false} 
            showParticles={true}
            showConcentricRings={false}
            showDiagonalGrid={false}
          />
          
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Our Process
              </h2>
              <p className="text-white/50 text-lg max-w-2xl mx-auto">
                From discovery to deployment - transparent, iterative, collaborative.
              </p>
            </motion.div>

            {/* Desktop Timeline */}
            <div className="hidden lg:block">
              <div className="flex gap-4">
                {processPhases.map((phase, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex-1"
                  >
                    <GlassCard 
                      className="p-6 h-full cursor-pointer"
                      glowOnHover={true}
                      onClick={() => setActivePhase(i)}
                      style={{
                        borderColor: activePhase === i ? phase.color : undefined,
                        borderWidth: activePhase === i ? '2px' : '1px'
                      }}
                    >
                      <div 
                        className="text-4xl font-bold mb-4"
                        style={{ color: phase.color }}
                      >
                        {phase.phase}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1">{phase.title}</h3>
                      <p className="text-sm text-white/40 mb-4">{phase.duration}</p>
                      <p className="text-white/60 text-sm leading-relaxed">{phase.description}</p>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile Carousel */}
            <div className="lg:hidden">
              <GlassCard className="p-8">
                <div 
                  className="text-5xl font-bold mb-4"
                  style={{ color: processPhases[activePhase].color }}
                >
                  {processPhases[activePhase].phase}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{processPhases[activePhase].title}</h3>
                <p className="text-white/40 mb-4">{processPhases[activePhase].duration}</p>
                <p className="text-white/70 leading-relaxed mb-6">{processPhases[activePhase].description}</p>
                
                <div className="flex gap-2">
                  {processPhases.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActivePhase(i)}
                      className="w-3 h-3 rounded-full transition-colors"
                      style={{
                        backgroundColor: activePhase === i ? processPhases[i].color : 'rgba(255,255,255,0.2)'
                      }}
                    />
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* ========== COMBINED VALUE PROP ========== */}
        <section className="py-24 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-8 md:p-12 relative overflow-hidden" variant="strong">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#c4ff4d]/10 via-transparent to-purple-600/10" />
                
                <div className="relative z-10 text-center">
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#c4ff4d]/10 flex items-center justify-center">
                      <Workflow className="w-6 h-6 text-[#c4ff4d]" />
                    </div>
                    <span className="text-white/40 text-2xl">+</span>
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                      <Code className="w-6 h-6 text-purple-400" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                    Why Choose Both?
                  </h3>
                  <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                    Most businesses need automation <span className="text-[#c4ff4d]">AND</span> custom software.
                    Having one team handle both means seamless integration, faster delivery,
                    and a partner who understands your entire digital ecosystem.
                  </p>
                  
                  <div className="grid sm:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-[#c4ff4d] mb-1">1</div>
                      <p className="text-white/50 text-sm">Team, Complete Stack</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-purple-400 mb-1">50%</div>
                      <p className="text-white/50 text-sm">Faster Integration</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white mb-1">∞</div>
                      <p className="text-white/50 text-sm">Scalability</p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </section>

        {/* ========== TESTIMONIALS ========== */}
        <section className="py-24 px-6 border-t border-white/5">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <GlassCard className="p-6 h-full" variant="subtle">
                    <p className="text-white/70 text-sm leading-relaxed mb-6 italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#c4ff4d]/10 flex items-center justify-center text-[#c4ff4d] font-bold text-sm">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">{testimonial.name}</p>
                        <p className="text-white/40 text-xs">{testimonial.title}, {testimonial.company}</p>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== FAQ SECTION ========== */}
        <div className="border-t border-white/5">
          <FAQSection 
            faqs={faqItems}
            darkMode={true}
            schemaId="solutions-faq"
          />
        </div>

        {/* ========== FINAL CTA ========== */}
        <section className="py-24 px-6 border-t border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#c4ff4d]/5 rounded-full blur-[200px]" />
          </div>
          
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Transform<br />
                Your Business?
              </h2>
              <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
                Whether you need automation, custom software, or both — 
                let's discuss how we can help you achieve your goals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/35679711799?text=Hi%20OARC%2C%20I%27d%20like%20to%20discuss%20solutions%20for%20my%20business"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-[#c4ff4d] text-black hover:bg-[#c4ff4d]/90 rounded-full px-10 py-7 text-lg font-semibold gap-3 h-auto w-full sm:w-auto"
                    data-testid="button-final-whatsapp"
                  >
                    <SiWhatsapp className="w-6 h-6" />
                    Start a Conversation
                  </Button>
                </a>
                <a href="tel:+35679711799">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/5 rounded-full px-10 py-7 text-lg font-semibold gap-3 h-auto w-full sm:w-auto"
                    data-testid="button-final-call"
                  >
                    <Phone className="w-6 h-6" />
                    Call Us Directly
                  </Button>
                </a>
              </div>
              
              <p className="text-white/30 text-sm mt-8">
                Average response time: 2 hours during business hours
              </p>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
      <QuickLeadModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)}
        source={modalSource}
      />

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </>
  );
}
