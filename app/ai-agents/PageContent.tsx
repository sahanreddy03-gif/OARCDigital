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
import { NAP } from "@/lib/seo/nap";
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
const workspaceImage = "/attached_assets/not_ai_agent_1768231816421.png";

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
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "AI SDR Agent", "url": "https://oarcdigital.com/services/ai-sdr-agent", "description": "Automated lead qualification, follow-up sequences, and demo booking for Malta businesses."}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "AI Support Specialist", "url": "https://oarcdigital.com/services/ai-support-specialist", "description": "90% auto-resolution of customer queries with human-like conversations, 24/7."}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "AI Appointment Booker", "url": "https://oarcdigital.com/services/ai-appointment-booker", "description": "Automated scheduling, reminders, and calendar management for restaurants, clinics, and service businesses."}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "AI Admin Agent", "url": "https://oarcdigital.com/services/ai-admin-agent", "description": "Inboxes, invoices and calendars handled — back-office workflow automation."}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "AI Data Analyst", "url": "https://oarcdigital.com/services/ai-data-analyst", "description": "Plain-English answers from your CRM, ads and finance data — daily."}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "AI Compliance Auditor", "url": "https://oarcdigital.com/services/ai-compliance-auditor", "description": "Continuous policy and regulatory checks for Malta operators (MFSA, MGA, IDPC aware)."}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "AI Real Estate Agent", "url": "https://oarcdigital.com/services/ai-real-estate-agent", "description": "Lead capture, listing answers and viewing scheduling for Malta property agencies."}}
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
            "telephone": NAP.phoneE164,
            "email": NAP.email,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": NAP.streetAddress,
              "addressLocality": NAP.addressLocality,
              "addressRegion": NAP.addressRegion,
              "postalCode": NAP.postalCode,
              "addressCountry": NAP.addressCountry
            },
            "geo": {"@type": "GeoCoordinates", "latitude": NAP.geo.lat, "longitude": NAP.geo.lng},
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
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-3 sm:mb-4 tracking-tight" style={{ fontFamily: 'var(--font-pixelag)' }} data-speakable>
                  AI Employees
                  <br />
                  <span className="text-white/90">Your team that works</span>
                  <br />
                  <span className="text-[#c4ff4d]">24/7</span>
                </h1>
                
                <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-xl mb-6 sm:mb-8 font-light tracking-wide" data-speakable>
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
              emitJsonLd={false}
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

        {/* ========== MEET YOUR AI TEAM — PER-ROLE OUTCOME CARDS ========== */}
        <section className="relative z-10 py-20 sm:py-24 px-4 sm:px-6 bg-zinc-950 border-t border-white/5" data-testid="section-meet-ai-team">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="mb-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4" data-speakable>
                Meet Your <span className="text-[#c4ff4d]">AI Team</span>
              </h2>
              <p className="text-white/60 text-base sm:text-lg max-w-3xl" data-speakable>
                Seven specialised AI employees, each trained on a single high-value business function and
                measured against a concrete outcome. Deploy one as a pilot, or build the full workforce —
                every agent integrates with your existing CRM, calendar and communications stack in 7–14 days.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  slug: "ai-sdr-agent",
                  role: "AI SDR Agent",
                  function: "Sales Development",
                  desc: "Qualifies inbound and outbound leads around the clock — researching prospects, sending personalised first-contact messages, following up across email and WhatsApp, and routing warm leads directly into your calendar without any manual input.",
                  metric: "8–15 qualified demos booked per week",
                },
                {
                  slug: "ai-support-specialist",
                  role: "AI Support Specialist",
                  function: "Customer Support",
                  desc: "Handles tier-1 support queries on WhatsApp, live chat and email with contextual, human-like responses. Resolves common questions, processes returns, checks order status and escalates complex cases with full conversation context.",
                  metric: "80%+ of queries resolved without human intervention",
                },
                {
                  slug: "ai-appointment-booker",
                  role: "AI Appointment Booker",
                  function: "Scheduling & Bookings",
                  desc: "Conversational booking agent for clinics, restaurants, salons and service businesses across Malta. Reads your live calendar, handles confirmations and reminders, and reschedules no-shows automatically via SMS or WhatsApp.",
                  metric: "Zero missed bookings — 24/7 across every channel",
                },
                {
                  slug: "ai-data-analyst",
                  role: "AI Data Analyst",
                  function: "Business Intelligence",
                  desc: "Connects to your CRM, ad platforms and finance data, then delivers plain-English performance summaries every morning. Flags anomalies, answers ad-hoc questions in seconds, and surfaces the metrics that are actually moving revenue.",
                  metric: "Daily revenue intelligence in your inbox by 8 am",
                },
                {
                  slug: "ai-admin-agent",
                  role: "AI Admin Agent",
                  function: "Back-Office Operations",
                  desc: "Triages your inbox, chases outstanding invoices, defends your calendar from low-priority requests and files documents into the right folders. Handles the recurring admin load that consumes four or more hours of your team's week.",
                  metric: "4+ hours of back-office time returned to your team weekly",
                },
                {
                  slug: "ai-real-estate-agent",
                  role: "AI Real Estate Agent",
                  function: "Property Lead Management",
                  desc: "Captures and qualifies property enquiries from portals, social and web around the clock. Answers listing questions instantly, pre-qualifies buyers by budget and timeline, and schedules viewings directly with your agents.",
                  metric: "Every listing enquiry answered and viewing booked within 60 seconds",
                },
                {
                  slug: "ai-consulting",
                  role: "AI Consulting",
                  function: "Strategy & Roadmap",
                  desc: "A structured audit of your current operations identifies where AI agents will deliver the fastest return. Outputs a 90-day deployment roadmap with build-vs-buy guidance, integration requirements and phased cost projections specific to your Malta business.",
                  metric: "90-day AI deployment roadmap built around your revenue gaps",
                },
              ].map((agent, idx) => (
                <motion.div
                  key={agent.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.07 }}
                >
                  <Link
                    href={`/services/${agent.slug}`}
                    data-testid={`link-meet-ai-team-${agent.slug}`}
                    className="block h-full"
                  >
                    <div className="h-full p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover-elevate flex flex-col gap-4">
                      <div>
                        <span className="text-xs font-semibold text-[#c4ff4d]/70 uppercase tracking-widest mb-2 block">
                          {agent.function}
                        </span>
                        <h3 className="text-white font-bold text-lg mb-2">{agent.role}</h3>
                        <p className="text-white/55 text-sm leading-relaxed">{agent.desc}</p>
                      </div>
                      <div className="mt-auto pt-3 border-t border-white/[0.08] flex items-center justify-between gap-2">
                        <span className="text-[#c4ff4d] text-sm font-semibold">{agent.metric}</span>
                        <ArrowRight className="w-4 h-4 text-white/30 flex-shrink-0" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* ========== EXPLORE THE 7 AI AGENTS — SPOKES + IMAGE GRID ========== */}
        <section className="relative z-10 py-20 sm:py-24 px-4 sm:px-6 bg-black border-t border-white/5" data-testid="section-ai-agents-spokes">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Meet the <span className="text-[#c4ff4d]">7 AI Agents</span>
              </h2>
              <p className="text-white/60 text-base sm:text-lg max-w-3xl mx-auto">
                Each agent is a specialist — trained on a single job, integrated with your stack, and
                deployed in 7–14 days. Pick one to pilot, or stack them into a full AI workforce.
              </p>
            </motion.div>

            {/* Image grid — hero + 4 supporting from registry */}
            <div className="grid grid-cols-12 gap-3 mb-12" data-testid="grid-ai-agents-images">
              <picture className="col-span-12 md:col-span-8 rounded-2xl overflow-hidden border border-white/5 block">
                <source srcSet="/images/registry/hidden-ai-features-control-room-malta.avif" type="image/avif" />
                <source srcSet="/images/registry/hidden-ai-features-control-room-malta.webp" type="image/webp" />
                <img
                  src="/images/registry/hidden-ai-features-control-room-malta.jpg"
                  alt="Operator control room view of OARC's AI agent stack"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover aspect-[16/10]"
                />
              </picture>
              <picture className="col-span-12 md:col-span-4 rounded-2xl overflow-hidden border border-white/5 block">
                <source srcSet="/images/registry/ai-knowledge-base-grounding-malta.avif" type="image/avif" />
                <source srcSet="/images/registry/ai-knowledge-base-grounding-malta.webp" type="image/webp" />
                <img
                  src="/images/registry/ai-knowledge-base-grounding-malta.jpg"
                  alt="AI agent grounded on a private company knowledge base"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover aspect-[16/10]"
                />
              </picture>
              <picture className="col-span-6 md:col-span-6 rounded-2xl overflow-hidden border border-white/5 block">
                <source srcSet="/images/registry/agent-handover-to-human-malta.avif" type="image/avif" />
                <source srcSet="/images/registry/agent-handover-to-human-malta.webp" type="image/webp" />
                <img
                  src="/images/registry/agent-handover-to-human-malta.jpg"
                  alt="AI to human handover — escalation flow inside the OARC console"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover aspect-[16/10]"
                />
              </picture>
              <picture className="col-span-6 md:col-span-6 rounded-2xl overflow-hidden border border-white/5 block">
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
              <picture className="col-span-12 rounded-2xl overflow-hidden border border-white/5 block">
                <source srcSet="/images/registry/ai-sales-pipeline-dashboard-malta.avif" type="image/avif" />
                <source srcSet="/images/registry/ai-sales-pipeline-dashboard-malta.webp" type="image/webp" />
                <img
                  src="/images/registry/ai-sales-pipeline-dashboard-malta.jpg"
                  alt="AI sales pipeline dashboard for a Malta SMB — agent activity and booked calls"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover aspect-[21/9]"
                />
              </picture>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" data-testid="grid-ai-agents-spokes">
              {[
                { slug: "ai-sdr-agent", title: "AI SDR Agent", desc: "Outbound and inbound qualification — booked calls land in your calendar overnight." },
                { slug: "ai-support-specialist", title: "AI Support Specialist", desc: "Tier-1 customer support on WhatsApp, email and chat with full handover to humans." },
                { slug: "ai-appointment-booker", title: "AI Appointment Booker", desc: "Conversational booker for clinics, salons and restaurants — calendar-aware and SMS-confirmed." },
                { slug: "ai-data-analyst", title: "AI Data Analyst", desc: "Daily plain-English answers from your CRM, ads and finance data — no dashboards required." },
                { slug: "ai-admin-agent", title: "AI Admin Agent", desc: "Inboxes triaged, invoices chased, and calendars defended on autopilot." },
                { slug: "ai-compliance-auditor", title: "AI Compliance Auditor", desc: "Continuous policy and regulatory checks built for MFSA, MGA and IDPC contexts." },
                { slug: "ai-real-estate-agent", title: "AI Real Estate Agent", desc: "Lead capture, listing answers and viewing scheduling for Malta property agencies." },
                { slug: "hire-ai-employees", title: "Hire AI Employees", desc: "Bring on a complete AI workforce, billed per role rather than per hour." },
                { slug: "ai-consulting", title: "AI Consulting", desc: "Roadmap your AI rollout — opportunity audit and 90-day deployment plan." },
              ].map((spoke) => (
                <Link
                  key={spoke.slug}
                  href={`/services/${spoke.slug}`}
                  data-testid={`link-ai-agents-spoke-${spoke.slug}`}
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

          {/* ItemList JSON-LD — the 7 OARC AI Agent service pages */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "OARC Digital — AI Agent Service Pages",
            "description": "The seven specialist AI agent services offered by OARC Digital from Malta.",
            "numberOfItems": 7,
            "itemListOrder": "https://schema.org/ItemListOrderAscending",
            "itemListElement": [
              { slug: "ai-sdr-agent", name: "AI SDR Agent" },
              { slug: "ai-support-specialist", name: "AI Support Specialist" },
              { slug: "ai-appointment-booker", name: "AI Appointment Booker" },
              { slug: "ai-data-analyst", name: "AI Data Analyst" },
              { slug: "ai-admin-agent", name: "AI Admin Agent" },
              { slug: "ai-compliance-auditor", name: "AI Compliance Auditor" },
              { slug: "ai-real-estate-agent", name: "AI Real Estate Agent" },
            ].map((s, i) => ({
              "@type": "ListItem",
              "position": i + 1,
              "url": `https://oarcdigital.com/services/${s.slug}`,
              "name": s.name,
            })),
          }) }} />
        </section>

        <Footer />
      </main>
    </>
  );
}
