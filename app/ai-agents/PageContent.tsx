"use client";

import { useEffect, useRef, useState, useCallback } from 'react';
import Link from "next/link";
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/ui/glass-card';
import { 
  NeuralBrain, LightningBolt, ClockSpeed, GlobeNetwork, NetworkHub, DataFlow, ShieldCheck, BarChart
} from '@/components/ui/ai-icons';
import FAQSection, { FAQItem } from '@/components/FAQSection';
import Footer from '@/components/Footer';
import CreativeNavigation from '@/components/CreativeNavigation';
import { 
  TeamCarousel, 
  CommandConsolePanel, 
  PersonalizationSteps
} from '@/components/ai';
import { 
  ArrowRight, Check,
  Zap, Shield, TrendingUp, MessageSquare, Play, Pause, RotateCcw,
  Database, Mail, Bot, Sparkles, ChevronRight, Star
} from 'lucide-react';
import { createAggregateRatingSchema } from '@/utils/advancedSchema';
import { agentRatings } from '@/components/ai/aiAgentsData';
import { SiWhatsapp } from 'react-icons/si';
import workspaceImage from '@assets/not_ai_agent_1768231816421.png';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};


const keyBenefits = [
  {
    icon: ShieldCheck,
    title: 'Ownership',
    headline: 'We run the workflows — you stop managing.',
    description: 'Hand over the work. Your AI team takes full ownership of execution.',
    stat: '100%',
    statLabel: 'Autonomous execution'
  },
  {
    icon: LightningBolt,
    title: 'Speed',
    headline: 'Pilot in 7-14 days; measurable value in weeks.',
    description: 'No 6-month implementation. See results fast.',
    stat: '7-14',
    statLabel: 'Days to deploy'
  },
  {
    icon: ClockSpeed,
    title: 'Consistency',
    headline: 'No late nights, sick days, or churn.',
    description: 'Your AI team works 24/7/365 without quality degradation.',
    stat: '24/7',
    statLabel: 'Always available'
  },
  {
    icon: TrendingUp,
    title: 'Scale',
    headline: 'Serve 10x the volume at a fraction of cost.',
    description: 'Handle exponential growth without proportional cost increase.',
    stat: '10x',
    statLabel: 'Volume capacity'
  },
  {
    icon: BarChart,
    title: 'Measurable ROI',
    headline: 'Dashboard shows conversion lift, response time, and cost saved.',
    description: 'Every interaction tracked. Every metric visible.',
    stat: '<2s',
    statLabel: 'Avg response time'
  }
];

const comparisonData = [
  { feature: 'Deployment time', hiring: '2-6 months', outsource: '2-4 weeks', oarc: '7-14 days' },
  { feature: 'Response time', hiring: 'Minutes-hours', outsource: 'Seconds-minutes', oarc: '<2 seconds' },
  { feature: 'Availability', hiring: 'Business hours', outsource: '12-16 hours', oarc: '24/7/365' },
  { feature: 'Cost efficiency', hiring: 'High overhead', outsource: 'Moderate', oarc: 'Fraction of the cost' },
  { feature: 'Quality consistency', hiring: 'Variable', outsource: 'Variable', oarc: '99.9% consistent' },
  { feature: 'Scalability', hiring: 'Linear cost', outsource: 'Moderate', oarc: 'Infinite at fixed cost' },
];

const processSteps = [
  {
    step: 1,
    title: 'Discovery & Audit',
    description: 'We map your processes and pick 1-3 high-impact workflows.',
    duration: '3-7 days',
    details: ['Workflow mapping', 'Integration review', 'KPI baseline']
  },
  {
    step: 2,
    title: 'Configure & Train',
    description: 'We train your AI team on your data and integrate with tools.',
    duration: '7-14 days',
    details: ['Custom training', 'Tool integration', 'Pilot launch']
  },
  {
    step: 3,
    title: 'Run & Optimize',
    description: 'Agents operate daily, report KPIs, and improve automatically.',
    duration: 'Continuous',
    details: ['24/7 operation', 'Performance reports', 'Continuous improvement']
  }
];

const aiAgentsFAQs: FAQItem[] = [
  { question: "Will this replace our staff?", answer: "It removes repetitive work and lets your team focus on higher-value tasks; you retain full control. AI handles the routine so humans can do strategic work." },
  { question: "How long to see ROI?", answer: "Typical pilots deliver measurable improvements in 4-8 weeks. Most clients see positive ROI within the first month of full deployment." },
  { question: "Is my data safe?", answer: "Data remains yours. We use secure integrations, SOC 2 compliant infrastructure, and provide an enterprise data control agreement. No data is used to train external models." },
  { question: "What if the agent fails?", answer: "Agents escalate with full context to humans and we fix issues within SLA windows. Human oversight is always available, and we continuously improve based on edge cases." },
  { question: "What's the pricing model?", answer: "We offer flexible pricing based on your specific needs. Request a custom quote to get transparent pricing tailored to your business - no hidden fees, no surprises." },
  { question: "Which tools do you integrate?", answer: "CRMs (Salesforce, HubSpot), booking systems (Calendly, Cal.com), payment gateways (Stripe), email, Slack/Teams, WhatsApp, and more. We handle all connectors." },
  { question: "How quickly can you deploy?", answer: "Basic agents deploy in 7-14 days. Complex enterprise deployments with custom integrations typically take 4-6 weeks." },
  { question: "Can we try before committing?", answer: "Yes. Our 2-week pilot program lets you test with real workflows and measurable KPIs before committing to a long-term engagement." }
];

function AnimatedCounter({ value, suffix = '', prefix = '' }: { value: string; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState('0');
  
  useEffect(() => {
    if (!isInView) return;
    
    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
    if (isNaN(numericValue)) {
      setDisplayValue(value);
      return;
    }
    
    const duration = 1500;
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(numericValue * eased);
      
      if (value.includes('.')) {
        setDisplayValue((numericValue * eased).toFixed(2));
      } else {
        setDisplayValue(current.toString());
      }
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isInView, value]);
  
  return <span ref={ref}>{prefix}{displayValue}{suffix}</span>;
}


const allRatings = Object.values(agentRatings);
const overallReviewCount = allRatings.reduce((sum, r) => sum + r.reviewCount, 0);
const overallRatingValue = Math.round(
  (allRatings.reduce((sum, r) => sum + r.ratingValue * r.reviewCount, 0) / overallReviewCount) * 10
) / 10;

export default function PageContent() {
  const prefersReducedMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    // Force video to play immediately
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay was prevented, try again with user interaction
      });
    }
  }, []);

  return (
    <>
      <>
<script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AI Workforce Agents Malta",
            "provider": {
              "@type": "Organization",
              "name": "OARC Digital",
              "url": "https://oarcdigital.com"
            },
            "description": "Deploy autonomous AI agents for sales, customer support, bookings, and operations in Malta. AI employees that work 24/7 — qualify leads, answer queries, book appointments, and manage workflows automatically.",
            "serviceType": "AI Business Automation",
            "areaServed": [
              {"@type": "Country", "name": "Malta"},
              {"@type": "Place", "name": "Europe"}
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI Agent Services",
              "itemListElement": [
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "AI Sales Representative", "description": "Automated lead qualification, follow-up sequences, and demo booking for Malta businesses."}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "AI Customer Support Agent", "description": "90% auto-resolution of customer queries with human-like conversations, 24/7."}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "AI Booking & Reservation Assistant", "description": "Automated scheduling, reminders, and calendar management for restaurants, clinics, and service businesses."}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "AI Operations Manager", "description": "Workflow automation, task routing, and operational efficiency optimization."}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "AI Lead Follow-up Agent", "description": "Automated lead nurturing, re-engagement campaigns, and conversion optimization."}}
              ]
            },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "OARC Digital - AI Agents",
            "description": "Malta's first AI workforce agency. Deploy AI agents for sales, support, bookings & operations.",
            "url": "https://oarcdigital.com/ai-agents",
            "telephone": "+356 99263179",
            "email": "hello@oarcdigital.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Seaside Spirit, Triq ix-Xatt, Ta' Xbiex",
              "addressLocality": "Ta' Xbiex",
              "postalCode": "XBX 1020",
              "addressCountry": "MT"
            },
            "geo": {"@type": "GeoCoordinates", "latitude": "35.9047", "longitude": "14.4931"},
            "areaServed": [{"@type": "Country", "name": "Malta"}, {"@type": "Place", "name": "Europe"}],
            "priceRange": "€€€"
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://oarcdigital.com/"},
              {"@type": "ListItem", "position": 2, "name": "AI Agents", "item": "https://oarcdigital.com/ai-agents"}
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(createAggregateRatingSchema(
            "OARC Digital AI Agents",
            overallRatingValue,
            overallReviewCount,
            5,
            'Service'
          ))}
        </script>
</>
      
      <CreativeNavigation />
      
      <main className="min-h-screen bg-black text-white overflow-x-hidden relative" style={{ fontFamily: 'var(--font-pixelag)' }}>
        
        {/* Hero Section - Clean video background only, NO grid effects */}
        <section className="relative h-screen min-h-[600px] max-h-[1000px] overflow-hidden bg-black">
          {/* Video Background - Immediate playback */}
          <div className="absolute inset-0 z-0">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster="/ai-agents-hero-poster.jpg"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: 'center top' }}
            >
              <source src="/2026-01-11_01_1768174240415.mp4" type="video/mp4" />
            </video>
          </div>
          
          {/* Gradient overlay for text readability - only at bottom */}
          <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />
          
          {/* Content - Bottom positioned, leaving top clear for AI character */}
          <div className="relative z-10 h-full flex flex-col justify-end pb-8 sm:pb-12 md:pb-16">
            <div className="px-6 sm:px-8 md:px-12 lg:px-20 max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-3 sm:mb-4 tracking-tight" style={{ fontFamily: 'var(--font-pixelag)' }}>
                  AI Employees
                  <br />
                  <span className="text-white/90">Your team that works</span>
                  <br />
                  <span className="text-[#c4ff4d]">24/7</span>
                </h1>
                
                <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-xl mb-6 sm:mb-8 font-light tracking-wide">
                  Build, grow, and scale your business with our AI workforce.
                </p>
                
                <a
                  href="https://wa.me/35699263179?text=Hi%20OARC%20Digital%2C%20I%27m%20interested%20in%20your%20AI%20agents"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="default" 
                    className="bg-[#c4ff4d] hover:bg-[#d4ff6d] text-black font-semibold px-6 py-3 text-sm sm:text-base rounded-full shadow-lg shadow-[#c4ff4d]/20 transition-all duration-300 hover:shadow-[#c4ff4d]/30 hover:scale-[1.02]"
                    data-testid="button-hero-cta"
                  >
                    <SiWhatsapp className="mr-2 w-4 h-4" />
                    Chat With Us
                  </Button>
                </a>
                
                <div className="mt-5 flex items-center gap-2" data-testid="rating-trust-badge">
                  <div className="flex items-center gap-0.5">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-3.5 h-3.5 fill-[#c4ff4d] text-[#c4ff4d]" />
                    ))}
                  </div>
                  <span className="text-white/80 text-sm font-medium" data-testid="text-overall-rating">{overallRatingValue}</span>
                  <span className="text-white/40 text-sm">·</span>
                  <span className="text-white/50 text-sm" data-testid="text-review-count">{overallReviewCount} verified reviews</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* AI Agents Carousel Section - 2nd Section */}
        <section className="relative z-10 py-12 sm:py-16 px-4 sm:px-6 bg-black overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-10 sm:mb-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#c4ff4d] mb-2">
                AI Employees
              </h2>
              <p className="text-base sm:text-lg text-white/70">
                Customised to your workflows
              </p>
            </motion.div>
            
            <TeamCarousel />
          </div>
        </section>
        
        {/* Replacement Section - Unified AI Workforce */}
        <section className="relative z-10 py-20 sm:py-32 px-4 sm:px-6 bg-black border-t border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c4ff4d]/10 border border-[#c4ff4d]/20 text-[#c4ff4d] text-[10px] uppercase tracking-widest mb-6">
                  <Bot className="w-3 h-3" />
                  <span>The AI Advantage</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                  Stop hiring. 
                  <br />
                  <span className="text-[#c4ff4d]">Start deploying.</span>
                </h2>
                
                <p className="text-white/60 text-lg mb-10 font-light leading-relaxed">
                  The future of business isn't about more headcount. It's about higher throughput. OARC AI agents aren't just chatbots — they are autonomous employees that integrate with your tools and execute your business logic.
                </p>
                
                <div className="space-y-6">
                  {[
                    { title: 'Self-Improving', desc: 'Every interaction makes the agent smarter through continuous learning loops.' },
                    { title: 'Tool Integration', desc: 'Connects directly to your CRM, Calendar, DB, and custom APIs.' },
                    { title: 'Zero Onboarding', desc: 'Deploy a world-class agent in 7-14 days with zero management overhead.' }
                  ].map((item, idx) => (
                    <motion.div 
                      key={item.title}
                      className="flex gap-4"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * idx }}
                    >
                      <div className="mt-1">
                        <div className="w-5 h-5 rounded-full bg-[#c4ff4d]/20 flex items-center justify-center">
                          <Check className="w-3 h-3 text-[#c4ff4d]" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">{item.title}</h4>
                        <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                {/* Visual Representation of Agent Workforce */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <motion.div 
                      className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-3xl sm:text-4xl font-bold text-white mb-2">99.9%</div>
                      <div className="text-sm text-white/40">Task accuracy</div>
                    </motion.div>
                    
                    <motion.div 
                      className="p-6 sm:p-8 rounded-2xl bg-[#c4ff4d]/5 border border-[#c4ff4d]/10"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                    >
                      <div className="text-3xl sm:text-4xl font-bold text-[#c4ff4d] mb-2">&lt;2s</div>
                      <div className="text-sm text-[#c4ff4d]/40">Avg response time</div>
                    </motion.div>
                  </div>
                  
                  <div className="space-y-4 mt-8">
                    <motion.div 
                      className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="text-3xl sm:text-4xl font-bold text-white mb-2">15+</div>
                      <div className="text-sm text-white/40">AI employees</div>
                    </motion.div>
                    
                    <motion.div 
                      className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="text-3xl sm:text-4xl font-bold text-white mb-2">1</div>
                      <div className="text-sm text-white/40">Unified team</div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Workspace Management Section - Sintra.ai Style */}
        <section className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 bg-black">
          <div className="max-w-6xl mx-auto">
            {/* Workspace Dashboard Image */}
            <div className="mb-12 flex justify-center">
              <img 
                src={workspaceImage} 
                alt="OARC Digital Malta AI workspace management dashboard - unified AI team for multiple business profiles"
                loading="lazy"
                decoding="async"
                className="w-full max-w-md object-contain"
              />
            </div>
            
            {/* Content */}
            <div className="max-w-3xl mx-auto">
              <motion.h2 
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Multiple Workspaces.
                <br />
                One Unified AI Team.
              </motion.h2>
              
              <p className="text-white/60 text-lg mb-12">
                Manage multiple workspaces supported by a single AI team composed of specialized AI employees.
              </p>
              
              {/* Feature 1 */}
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
                  Up to Five Business Profiles
                </h3>
                <p className="text-white/50 text-base">
                  Create up to five distinct business profiles, each tailored to specific objectives, workflows, and operational requirements, powered by AI employees designed to deliver measurable results.
                </p>
              </motion.div>
              
              {/* Feature 2 */}
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
                  Shared Team Workspace
                </h3>
                <p className="text-white/50 text-base">
                  Collaborate seamlessly with your team in real time by sharing a centralized workspace, ensuring business insights, data, and decisions are accessible to all stakeholders.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Command Console Section */}
        <section id="agents" className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 bg-zinc-950">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                The Command <span className="text-[#c4ff4d]">Console</span>
              </motion.h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Manage your entire AI workforce from a single, unified interface. Monitor performance, review actions, and deploy new agents instantly.
              </p>
            </div>
            
            <CommandConsolePanel />
          </div>
        </section>

        {/* How It Works - Personalization Steps */}
        <section id="how-it-works" className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 bg-black">
          <div className="max-w-6xl mx-auto">
            <PersonalizationSteps />
          </div>
        </section>

        {/* Key Benefits */}
        <section className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 bg-zinc-950">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">Why Businesses Choose AI Teams</h2>
              <p className="text-white/60 max-w-xl mx-auto">Measurable impact. Predictable costs. Zero management overhead.</p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyBenefits.map((benefit, idx) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <GlassCard className="p-6 h-full" showCornerAccents>
                    <div className="flex items-start justify-between mb-4">
                      <benefit.icon size={40} />
                      <div className="text-right">
                        <div className="text-2xl font-bold text-[#c4ff4d]">{benefit.stat}</div>
                        <div className="text-xs text-white/50">{benefit.statLabel}</div>
                      </div>
                    </div>
                    <h3 className="font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-sm text-white/80 mb-2">{benefit.headline}</p>
                    <p className="text-xs text-white/50">{benefit.description}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Pricing CTA - Pricing hidden, revealed via form */}
        <section className="relative z-10 py-20 sm:py-28 px-4 sm:px-6 bg-zinc-900/50 border-y border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c4ff4d]/10 border border-[#c4ff4d]/20 text-[#c4ff4d] text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-[#c4ff4d] animate-pulse" />
                Limited Pilot Slots Available
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Get Your Custom AI Workforce Quote
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Every business is unique. Tell us about your needs and we'll create a tailored proposal with transparent pricing - no hidden fees, no surprises.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <a
                  href="https://wa.me/35699263179?text=Hi%20OARC%20Digital%2C%20I%27m%20interested%20in%20AI%20workforce%20pricing%20for%20my%20business"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-[#c4ff4d] text-black font-bold rounded-full text-lg shadow-lg shadow-[#c4ff4d]/20 hover:shadow-xl hover:shadow-[#c4ff4d]/30 transition-all flex items-center gap-2"
                    data-testid="button-get-custom-pricing"
                  >
                    <SiWhatsapp className="w-5 h-5" />
                    Get Prices Now
                  </motion.button>
                </a>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-transparent border-2 border-white/20 text-white font-bold rounded-full text-lg hover:border-white/40 transition-all"
                    data-testid="button-contact-pricing"
                  >
                    Book a Call
                  </motion.button>
                </Link>
              </div>
              <p className="text-white/40 text-sm pt-2">
                Typically respond within 2 hours during business hours
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 bg-zinc-950 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">Common Questions</h2>
              <p className="text-white/60">Everything you need to know about OARC AI Agents.</p>
            </motion.div>
            
            <FAQSection 
              faqs={aiAgentsFAQs}
              schemaId="ai-agents-landing"
              darkMode={true}
            />
          </div>
        </section>

        {/* Contact CTA */}
        <section className="relative z-10 py-20 sm:py-32 px-4 sm:px-6 bg-[#c4ff4d]">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
                Ready to deploy your 
                <br />
                <span className="opacity-70">autonomous AI team?</span>
              </h2>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://wa.me/35699263179?text=Hi%20OARC%20Digital%2C%20I%27m%20interested%20in%20starting%20a%2014-day%20AI%20pilot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button 
                    size="lg" 
                    className="bg-black text-white hover:bg-zinc-900 rounded-full px-8 py-6 text-lg font-bold w-full"
                    data-testid="button-final-cta"
                  >
                    <SiWhatsapp className="mr-2 w-5 h-5" />
                    Start 14-Day Pilot
                  </Button>
                </a>
                
                <a 
                  href="https://wa.me/35699263179?text=Hi%20OARC%20Digital%2C%20I%27m%20interested%20in%20your%20AI%20agents" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-black/20 text-black hover:bg-black/5 rounded-full px-8 py-6 text-lg font-bold w-full"
                    data-testid="button-final-whatsapp"
                  >
                    <SiWhatsapp className="mr-2 w-5 h-5" />
                    WhatsApp Us
                  </Button>
                </a>
              </div>
              
              <p className="mt-8 text-black/60 text-sm font-medium">
                No setup fees • SOC 2 Compliant • Integrated in 14 days
              </p>
            </motion.div>
          </div>
        </section>
        
        <Footer />
      </main>
    </>
  );
}
