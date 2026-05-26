"use client";

import { useState, useRef } from 'react';
import Link from "next/link";
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/ui/glass-card';
import { AnimatedGridBackground } from '@/components/ui/animated-grid-background';
import FAQSection, { FAQItem } from '@/components/FAQSection';
import Footer from '@/components/Footer';
import CreativeNavigation from '@/components/CreativeNavigation';
import QuickLeadModal from '@/components/QuickLeadModal';
import { NAP } from "@/lib/seo/nap";
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

export default function PageContent() {
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
      <>
<script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Business Automation Services Malta",
          "provider": {"@type": "Organization", "name": "OARC Digital", "url": "https://oarcdigital.com"},
          "description": "Complete business automation for Malta businesses. Workflow automation, CRM integration, API connections, lead generation funnels, email marketing sequences, and custom software development.",
          "serviceType": "Business Automation",
          "areaServed": [{"@type": "Country", "name": "Malta"}, {"@type": "Place", "name": "Europe"}],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Automation Services",
            "itemListElement": [
              {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Workflow Automation", "description": "Automate repetitive business processes and connect your tools."}},
              {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "CRM & Pipeline Automation", "description": "Set up and automate your sales pipeline with HubSpot, Pipedrive, or custom CRM."}},
              {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Lead Generation Funnels", "description": "Automated lead capture, qualification, and nurturing funnels."}},
              {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Email Marketing Sequences", "description": "Automated email campaigns, drip sequences, and re-engagement flows."}},
              {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Custom Software Development", "description": "Bespoke web applications, dashboards, and internal tools built for your business."}}
            ]
          },
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "OARC Digital - Business Automation",
          "description": "Malta's premier business automation partner. Workflow automation, CRM, and custom software development.",
          "url": "https://oarcdigital.com/automation",
          "telephone": NAP.phoneE164,
          "email": NAP.email,
          "address": {"@type": "PostalAddress", "streetAddress": NAP.streetAddress, "addressLocality": NAP.addressLocality, "addressRegion": NAP.addressRegion, "postalCode": NAP.postalCode, "addressCountry": NAP.addressCountry},
          "geo": {"@type": "GeoCoordinates", "latitude": NAP.geo.lat, "longitude": NAP.geo.lng},
          "areaServed": [{"@type": "Country", "name": "Malta"}],
          "priceRange": "€€€"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://oarcdigital.com/"},
            {"@type": "ListItem", "position": 2, "name": "Business Automation", "item": "https://oarcdigital.com/automation"}
          ]
        })}</script>
</>

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
                  href={`https://wa.me/${NAP.whatsappNumber}?text=Hi%20OARC%2C%20I%27d%20like%20to%20explore%20solutions%20for%20my%20business`}
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
                <a href={`tel:${NAP.phoneE164}`}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/5 rounded-full px-8 py-6 text-lg font-semibold gap-3 h-auto w-full sm:w-auto"
                    data-testid="button-hero-call"
                  >
                    <Phone className="w-5 h-5" />
                    {NAP.phoneDisplay}
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

        {/* ========== REVENUE LEAKAGE PROSE — Where Revenue Disappears ========== */}
        <section className="py-24 px-6 border-t border-white/5 bg-black" data-testid="section-solutions-prose">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8" data-speakable>
                Where Revenue Disappears in a Malta Business
              </h2>

              <div className="space-y-6 text-white/65 leading-relaxed text-base sm:text-lg">
                <p>
                  Most Malta businesses do not have a growth problem. They have a compounding
                  inefficiency problem that looks like a growth problem from the inside. The
                  symptoms are familiar: the sales pipeline is inconsistent, the team is stretched,
                  and nobody can give you a clear number on which activity is actually generating
                  revenue versus which is generating busy-ness.
                </p>

                <p>
                  The pattern shows up across every sector. A hospitality operator cannot tell you
                  which booking channel is profitable at the table-type level, so marketing spend
                  goes to the channel that looks busiest rather than the one that fills the most
                  covers. A Malta-based financial advisory firm has qualified prospects sitting in
                  the pipeline for three months because nobody has a structured follow-up process
                  — the advisor meant to send that email but the week ran away. A professional
                  services practice spends two weeks on new client onboarding because it runs
                  entirely through email threads where critical information gets buried and tasks
                  fall through the gaps.
                </p>

                <p>
                  The problem in each case is not effort. Everyone is working. The problem is
                  that the business is running on disconnected systems — a CRM that nobody
                  updates consistently, a booking platform that does not talk to the marketing
                  stack, an inbox that doubles as a project management tool. The gaps between
                  those systems are where revenue disappears. A lead that arrives at 11pm does
                  not get a response until 9am the next morning, by which point they have already
                  contacted two competitors. An invoice sent with no automated follow-up sits
                  unpaid for 45 days. A customer asks a question on WhatsApp, gets no response,
                  and leaves a review explaining why they chose someone else.
                </p>

                <p>
                  The OARC solutions stack is designed around the specific topology of that gap.
                  The AI workforce layer — AI SDR agent, AI support specialist, AI admin agent
                  — closes the response-time and coverage gaps that the human team cannot fill
                  because the human team is already at capacity. The automation layer — revenue
                  automation, marketing automation suite, funnel automation — wires the disconnected
                  systems together so handoffs happen automatically rather than depending on someone
                  remembering to update a field. The intelligence layer — AI data analyst reporting
                  daily in plain English — gives the owner or commercial director a reliable picture
                  of what is actually working and what is not.
                </p>

                <p>
                  This is not a technology transformation project. It is a revenue operations
                  project. The question we ask at the start of every engagement is not what
                  technology do you want, but where is your revenue leaking? The answer to that
                  question shapes the deployment roadmap, the order in which we build, and the
                  metrics we measure against in the first 90 days.
                </p>

                <p>
                  For an iGaming operator, the answer is typically: player acquisition costs are
                  rising because acquisition and CRM are managed by separate teams with separate
                  tools and no shared attribution model. For a Malta restaurant group, it is
                  missed cover capacity during shoulder hours because reservation follow-up
                  is manual. For a law firm, it is partner time spent on client onboarding
                  tasks that a well-designed automation could handle in minutes rather than hours.
                </p>

                <p>
                  The deployment always starts with the highest-revenue-impact gap — whatever is
                  leaking the most, gets fixed first. That is why most OARC clients see measurable
                  improvement within 30 days of going live, and why the improvements compound
                  as the engagement matures: each layer we add closes a new gap and connects
                  to the layers already running.
                </p>
              </div>
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

        {/* ========== 90 / 180 / 360 DAY REVENUE ROADMAP ========== */}
        <section className="py-24 px-6 border-t border-white/5 bg-zinc-950" data-testid="section-solutions-roadmap">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-14"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4" data-speakable>
                What Results Look Like at 90, 180, and 360 Days
              </h2>
              <p className="text-white/60 text-lg max-w-3xl" data-speakable>
                Most Malta businesses arrive with the same problem: manual tasks consuming the team, leads
                falling through gaps in the follow-up process, and no clear view of which activities are
                generating revenue. The OARC solutions stack addresses each layer in sequence — so results
                compound as the engagement matures rather than flattening after the first sprint.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  period: "Day 1–90",
                  period_no: "90",
                  headline: "Foundation and Quick Wins",
                  problem: "The business problem",
                  problemDesc: "Leads fall through gaps between marketing and sales. The inbox is overloaded. Nobody knows which channel is generating real pipeline versus vanity clicks.",
                  solution: "What we deploy",
                  solutionDesc: "AI SDR agent for lead qualification and first contact. AI admin agent to triage the inbox and chase outstanding tasks. A revenue tracking dashboard connected to your CRM and ad accounts from day one.",
                  outcome: "Measurable by day 90",
                  outcomeDesc: "Lead response time drops from hours to under 2 minutes. Between 15 and 20 qualified sales conversations handled weekly without adding headcount. A clear picture of which campaigns are driving real pipeline rather than traffic.",
                },
                {
                  period: "Day 90–180",
                  period_no: "180",
                  headline: "Compounding Systems",
                  problem: "The next layer",
                  problemDesc: "The early wins are holding but growth is still tied to individuals — customer support, bookings and follow-up all depend on someone picking up the phone or opening the inbox.",
                  solution: "What we layer in",
                  solutionDesc: "AI support specialist handling tier-1 customer queries on WhatsApp and email. Automated booking and reminder sequences for appointment-based businesses. Multi-step follow-up flows for leads that went cold after first contact.",
                  outcome: "Measurable by day 180",
                  outcomeDesc: "Support volume handled without human input reaches 70 to 80 percent. Booking no-shows reduce by half with automated reminders. The sales pipeline is consistently fed without manual outreach from your team each morning.",
                },
                {
                  period: "Day 180–360",
                  period_no: "360",
                  headline: "Full Revenue Operations",
                  problem: "The strategic shift",
                  problemDesc: "The business has working systems but growth is capped because strategy and execution are still handled by the same small team — there is no leverage without proportional headcount.",
                  solution: "What the full stack delivers",
                  solutionDesc: "Marketing automation suite running multi-channel campaigns across email, SMS and WhatsApp. Funnel automation from first click through to second purchase. AI data analyst reporting weekly on the revenue levers that matter most.",
                  outcome: "Measurable at year one",
                  outcomeDesc: "Businesses running the full OARC revenue stack typically see a 40 to 60 percent reduction in cost per acquired customer and three to five times the qualified lead volume they had at day one — without proportional increases in headcount or spend.",
                },
              ].map((phase, idx) => (
                <motion.div
                  key={phase.period}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="h-full p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex flex-col gap-5">
                    <div>
                      <div className="text-6xl font-black text-white/[0.06] leading-none mb-2 select-none" aria-hidden="true">
                        {phase.period_no}
                      </div>
                      <span className="text-xs font-semibold text-[#c4ff4d]/70 uppercase tracking-widest block mb-1">
                        {phase.period}
                      </span>
                      <h3 className="text-white font-bold text-xl">{phase.headline}</h3>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-2">{phase.problem}</p>
                      <p className="text-white/60 text-sm leading-relaxed">{phase.problemDesc}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-2">{phase.solution}</p>
                      <p className="text-white/60 text-sm leading-relaxed">{phase.solutionDesc}</p>
                    </div>
                    <div className="mt-auto pt-4 border-t border-white/[0.08]">
                      <p className="text-xs font-semibold text-[#c4ff4d]/70 uppercase tracking-widest mb-2">{phase.outcome}</p>
                      <p className="text-white/70 text-sm leading-relaxed">{phase.outcomeDesc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== EXPLORE THE STACK — 10 SPOKES + IMAGE GRID ========== */}
        <section className="py-24 px-6 border-t border-white/5 bg-black" data-testid="section-solutions-spokes">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Explore the Revenue & Automation Stack
              </h2>
              <p className="text-white/60 text-lg max-w-3xl mx-auto">
                Ten focused services make up the OARC revenue stack for Malta SMBs and EU operators.
                Each one ships standalone, and they compound when run together — your AI workforce, your
                marketing engine, and your funnel, on one balance sheet.
              </p>
            </motion.div>

            {/* Image grid — hero + 4 supporting from the registry */}
            <div className="grid grid-cols-12 gap-3 mb-12" data-testid="grid-solutions-images">
              <picture className="col-span-12 md:col-span-8 rounded-2xl overflow-hidden border border-white/5 block">
                <source srcSet="/images/registry/ai-product-solutions-malta-revenue-stack.avif" type="image/avif" />
                <source srcSet="/images/registry/ai-product-solutions-malta-revenue-stack.webp" type="image/webp" />
                <img
                  src="/images/registry/ai-product-solutions-malta-revenue-stack.jpg"
                  alt="OARC Digital Malta revenue stack — AI product solutions across sales, support and ops"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover aspect-[16/10]"
                />
              </picture>
              <picture className="col-span-6 md:col-span-4 rounded-2xl overflow-hidden border border-white/5 block">
                <source srcSet="/images/registry/workflow-automations-malta-revenue-operations.avif" type="image/avif" />
                <source srcSet="/images/registry/workflow-automations-malta-revenue-operations.webp" type="image/webp" />
                <img
                  src="/images/registry/workflow-automations-malta-revenue-operations.jpg"
                  alt="Workflow automation map — revenue operations for Malta SMBs"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover aspect-[16/10]"
                />
              </picture>
              <picture className="col-span-6 md:col-span-4 rounded-2xl overflow-hidden border border-white/5 block">
                <source srcSet="/images/registry/operations-360-from-chaos-to-control-malta.avif" type="image/avif" />
                <source srcSet="/images/registry/operations-360-from-chaos-to-control-malta.webp" type="image/webp" />
                <img
                  src="/images/registry/operations-360-from-chaos-to-control-malta.jpg"
                  alt="Operations 360 — from chaos to control framework for Malta operators"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover aspect-[16/10]"
                />
              </picture>
              <picture className="col-span-6 md:col-span-4 rounded-2xl overflow-hidden border border-white/5 block">
                <source srcSet="/images/registry/operations-360-time-money-savings-framework.avif" type="image/avif" />
                <source srcSet="/images/registry/operations-360-time-money-savings-framework.webp" type="image/webp" />
                <img
                  src="/images/registry/operations-360-time-money-savings-framework.jpg"
                  alt="Hours and Euros recovered every month across business functions"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover aspect-[16/10]"
                />
              </picture>
              <picture className="col-span-12 md:col-span-4 rounded-2xl overflow-hidden border border-white/5 block">
                <source srcSet="/images/registry/ai-agent-multichannel-orchestration.avif" type="image/avif" />
                <source srcSet="/images/registry/ai-agent-multichannel-orchestration.webp" type="image/webp" />
                <img
                  src="/images/registry/ai-agent-multichannel-orchestration.jpg"
                  alt="AI agent orchestrating WhatsApp, email and web chat from one inbox"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover aspect-[16/10]"
                />
              </picture>
            </div>

            {/* 10 spoke cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" data-testid="grid-solutions-spokes">
              {[
                { slug: "hire-ai-employees", title: "Hire AI Employees", desc: "Bring on a full AI workforce — sales, support, ops and admin — billed per role, not per hour." },
                { slug: "ai-consulting", title: "AI Consulting", desc: "Roadmap your AI rollout: opportunity audit, build-vs-buy calls, and a 90-day deployment plan." },
                { slug: "ai-sdr-agent", title: "AI SDR Agent", desc: "Always-on outbound and inbound qualification — calls booked into your calendar overnight." },
                { slug: "ai-support-specialist", title: "AI Support Specialist", desc: "Handle 80%+ of tier-1 customer queries on WhatsApp, email and chat with full handover to humans." },
                { slug: "ai-appointment-booker", title: "AI Appointment Booker", desc: "Conversational booker for clinics, salons, restaurants and service businesses across Malta." },
                { slug: "ai-data-analyst", title: "AI Data Analyst", desc: "Daily and weekly answers from your CRM, ads and finance data — written in plain English." },
                { slug: "ai-admin-agent", title: "AI Admin Agent", desc: "Inboxes triaged, invoices chased, calendars defended — your back office on autopilot." },
                { slug: "revenue-automation", title: "Revenue Automation", desc: "Pipeline plumbing: lead capture, routing, scoring, follow-up and reporting wired together." },
                { slug: "marketing-automation-suite", title: "Marketing Automation Suite", desc: "Email, SMS, WhatsApp and ad-platform sync — one stack, one source of truth." },
                { slug: "funnel-automation", title: "Funnel Automation", desc: "Build and instrument the funnel from first click to second purchase, then keep tuning it." },
              ].map((spoke) => (
                <Link
                  key={spoke.slug}
                  href={`/services/${spoke.slug}`}
                  data-testid={`link-solutions-spoke-${spoke.slug}`}
                  className="block"
                >
                  <GlassCard className="p-6 h-full hover-elevate active-elevate-2">
                    <h3 className="text-white font-semibold mb-2 flex items-center justify-between gap-2">
                      <span>{spoke.title}</span>
                      <ArrowRight className="w-4 h-4 text-[#c4ff4d] flex-shrink-0" />
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">{spoke.desc}</p>
                  </GlassCard>
                </Link>
              ))}
            </div>
          </div>

          {/* ItemList JSON-LD for the 10 revenue/automation services */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "OARC Digital — Revenue & Automation Stack",
            "description": "Ten revenue and automation services that compose the OARC Digital solutions pillar for Malta and EU operators.",
            "numberOfItems": 10,
            "itemListOrder": "https://schema.org/ItemListOrderAscending",
            "itemListElement": [
              { slug: "hire-ai-employees", name: "Hire AI Employees" },
              { slug: "ai-consulting", name: "AI Consulting" },
              { slug: "ai-sdr-agent", name: "AI SDR Agent" },
              { slug: "ai-support-specialist", name: "AI Support Specialist" },
              { slug: "ai-appointment-booker", name: "AI Appointment Booker" },
              { slug: "ai-data-analyst", name: "AI Data Analyst" },
              { slug: "ai-admin-agent", name: "AI Admin Agent" },
              { slug: "revenue-automation", name: "Revenue Automation" },
              { slug: "marketing-automation-suite", name: "Marketing Automation Suite" },
              { slug: "funnel-automation", name: "Funnel Automation" },
            ].map((s, i) => ({
              "@type": "ListItem",
              "position": i + 1,
              "url": `https://oarcdigital.com/services/${s.slug}`,
              "name": s.name,
            })),
          }) }} />
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
                  href={`https://wa.me/${NAP.whatsappNumber}?text=Hi%20OARC%2C%20I%27d%20like%20to%20discuss%20solutions%20for%20my%20business`}
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
                <a href={`tel:${NAP.phoneE164}`}>
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

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      ` }} />
    </>
  );
}
