"use client";

import { useEffect, useRef, useState, useCallback } from 'react';
import Link from "next/link";
import { m, useInView, useReducedMotion } from 'framer-motion';
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
import VoiceProductSuite from '@/components/voice-products/VoiceProductSuite';
import { AI_AGENTS_HERO_POSTER, AI_AGENTS_HERO_VIDEO } from '@/lib/media/aiAgentsHeroVideo';
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
  { question: "How is this different from a chatbot?", answer: "A chatbot follows a script and breaks the moment a customer goes off it. An AI employee is trained on your business — your prices, rules, tone and data — plugged directly into your CRM, calendar and phone line, and it gets smarter every week from real conversations. Chatbots answer questions. Employees do the work." },
  { question: "Will it sound like a robot?", answer: "No. It's trained on your tone, your phrases, your menu or script. Most customers never ask — and when they do, it answers honestly. You approve everything before it goes live." },
  { question: "What if the agent doesn't know the answer?", answer: "It says so, takes a message, and hands the conversation to a human with full context attached — it never invents answers. That rule is not optional, and you set where and how it escalates." },
  { question: "Will this replace our staff?", answer: "It removes repetitive work and lets your team focus on higher-value tasks. The AI handles tier-1 volume — bookings, queries, follow-ups — so humans handle the cases that need real judgement." },
  { question: "Is my data safe?", answer: "Data remains yours, processed on EU-resident infrastructure under GDPR. We provide a data processing agreement and no data is used to train external models. For MGA/MFSA operators, additional documentation is available on request." },
  { question: "How quickly can you deploy?", answer: "Most AI employees are live in 7–14 days. We handle the integration, training and handover — you don't need to learn anything new." },
  { question: "Which tools do you integrate?", answer: "CRMs (Salesforce, HubSpot), booking systems (Calendly, Cal.com), payment gateways (Stripe), email, Slack/Teams, WhatsApp Business, and most hospitality and booking platforms used by Malta operators." },
  { question: "What if it makes a mistake?", answer: "Anything sensitive, unusual or high-value hands off to you or your team instantly — with the full conversation attached. Guardrails are set by you, in writing, and no AI agent at OARC operates without a human escalation path. It never invents answers: if it doesn't know, it says so and escalates." },
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
              poster={AI_AGENTS_HERO_POSTER}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: 'center top' }}
            >
              <source src={AI_AGENTS_HERO_VIDEO} type="video/mp4" />
            </video>
          </div>
          
          {/* Gradient overlay for text readability - only at bottom */}
          <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />
          
          {/* Content - Bottom positioned, leaving top clear for AI character */}
          <div className="relative z-10 h-full flex flex-col justify-end pb-8 sm:pb-12 md:pb-16">
            <div className="px-6 sm:px-8 md:px-12 lg:px-20 max-w-4xl">
              <m.div
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
              </m.div>
            </div>
          </div>
        </section>

        {/* ========== NOT CHATBOTS — PULL-QUOTE BRIDGE ========== */}
        <section className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 bg-zinc-950 border-t border-white/5" data-testid="section-not-chatbots">
          <div className="max-w-4xl mx-auto text-center">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[#c4ff4d] text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase mb-6">
                Not chatbots. Employees.
              </p>
              <blockquote className="text-2xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.15] tracking-tight" data-speakable>
                Everyone sells you a chatbot login.
                <br />
                <span className="text-[#c4ff4d]">We build you a workforce that works.</span>
              </blockquote>
              <p className="mt-8 text-white/50 text-base sm:text-lg font-light tracking-wide">
                Trained on your business. Plugged into your systems. Smarter every week.
              </p>
            </m.div>
          </div>
        </section>

        <VoiceProductSuite />
        
        {/* AI Agents Carousel Section - 2nd Section */}
        <section className="relative z-10 py-12 sm:py-16 px-4 sm:px-6 bg-black overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <m.div 
              className="text-center mb-10 sm:mb-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#c4ff4d] mb-2">
                Your team. Already on shift.
              </h2>
              <p className="text-base sm:text-lg text-white/70">
                Each employee is trained on your business — not a template, not a chatbot.
              </p>
            </m.div>

            {/* Six-role outcome grid — pick your employee */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mb-12 max-w-4xl mx-auto" data-testid="grid-employee-roles">
              {[
                { role: 'Voice support', outcome: 'Answers every call & chat', status: '24/7' },
                { role: 'Sales agent', outcome: 'Qualifies, books, never sleeps', status: 'ALWAYS ON' },
                { role: 'Concierge', outcome: 'Helps your customers, end to end', status: 'LIVE' },
                { role: 'Market research', outcome: 'Watches your competitors', status: 'ON' },
                { role: 'Back-office', outcome: 'Runs the repetitive ops', status: 'ON' },
                { role: 'Bespoke', outcome: 'Built for your exact problem', status: 'CUSTOM' },
              ].map((r, i) => (
                <m.div
                  key={r.role}
                  className="p-4 sm:p-5 rounded-xl bg-white/[0.03] border border-white/[0.08] flex flex-col gap-1.5"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  data-testid={`role-card-${i}`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-white font-semibold text-sm sm:text-base">{r.role}</h3>
                    <span className="inline-flex items-center gap-1 flex-shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c4ff4d] animate-pulse" />
                      <span className="text-[#c4ff4d] text-[9px] sm:text-[10px] font-bold tracking-widest">{r.status}</span>
                    </span>
                  </div>
                  <p className="text-white/45 text-xs sm:text-sm leading-relaxed">{r.outcome}</p>
                </m.div>
              ))}
            </div>

            <TeamCarousel />
          </div>
        </section>
        
        {/* In action right now — chat bubble proof */}
        <section className="relative z-10 py-16 sm:py-20 px-4 sm:px-6 bg-zinc-950 border-t border-white/5">
          <div className="max-w-2xl mx-auto">
            <m.div className="text-center mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                While you read this,<br />
                <span className="text-[#c4ff4d]">here's what just happened.</span>
              </h2>
            </m.div>
            <div className="space-y-3">
              {[
                { text: 'Missed call at 14:32 — returned in 19s. Reservation saved.', right: false, delay: 0 },
                { text: 'Table for 4 booked — Friday 20:00. Confirmation sent on WhatsApp.', right: true, delay: 0.15 },
                { text: 'New 5★ review — reply drafted in your voice. Approve?', right: false, delay: 0.3 },
                { text: 'Quote followed up. Client said yes — invoice sent.', right: true, delay: 0.45 },
              ].map((bub, i) => (
                <m.div key={i} className={`flex ${bub.right ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: bub.delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
                  <div className={`max-w-[82%] px-4 py-3 rounded-2xl text-sm leading-relaxed
                    ${bub.right
                      ? 'bg-[#c4ff4d]/10 border border-[#c4ff4d]/20 text-[#c4ff4d] rounded-tr-sm'
                      : 'bg-white/[0.06] border border-white/10 text-white/80 rounded-tl-sm'}`}>
                    {bub.text}
                  </div>
                </m.div>
              ))}
            </div>
            <m.p className="text-center text-white/25 text-[10px] font-mono mt-7 tracking-widest uppercase"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.7 }}>
              On shift in Malta venues · responding in seconds · never off
            </m.p>
          </div>
        </section>

        {/* How they're trained — 3-phase training story */}
        <section className="relative z-10 py-20 sm:py-32 px-4 sm:px-6 bg-black border-t border-white/5" data-testid="section-how-trained">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <m.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c4ff4d]/10 border border-[#c4ff4d]/20 text-[#c4ff4d] text-[10px] uppercase tracking-widest mb-6">
                  <Bot className="w-3 h-3" />
                  <span>How they're trained</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                  Not installed.
                  <br />
                  <span className="text-[#c4ff4d]">Trained.</span>
                </h2>
                
                <p className="text-white/60 text-lg mb-10 font-light leading-relaxed">
                  A chatbot gets configured once and stays dumb forever. An AI employee gets trained on your business — and keeps learning after it starts.
                </p>
                
                <div className="space-y-6">
                  {[
                    { phase: '01', title: 'We come to you', desc: 'An engineer and a consultant learn your prices, your rules, your tone, your data. In person — not a form.' },
                    { phase: '02', title: 'We build it in your system', desc: 'Plugged into your CRM, calendar, WhatsApp and phone line. Your data stays yours — it never leaves.' },
                    { phase: '03', title: 'It gets smarter', desc: 'Every call, chat and booking makes it better. Weekly updates, reviewed and approved by you.' }
                  ].map((item, idx) => (
                    <m.div 
                      key={item.title}
                      className="flex gap-4"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * idx }}
                    >
                      <div className="mt-0.5 flex-shrink-0">
                        <span className="text-[#c4ff4d] font-mono font-bold text-sm">{item.phase}</span>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">{item.title}</h4>
                        <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </m.div>
                  ))}
                </div>
              </m.div>
              
              <m.div
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: '00:04', label: 'Reply time' },
                    { value: '24/7', label: 'On shift' },
                    { value: '+41', label: 'Reviews / mo' },
                    { value: '0', label: 'Sick days' },
                  ].map((metric, i) => (
                    <m.div key={metric.label}
                      className={`p-6 sm:p-8 rounded-2xl border relative overflow-hidden ${i % 2 === 1 ? 'mt-6' : ''} bg-white/[0.02] border-white/5`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}>
                      <span className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-[#c4ff4d] animate-pulse" />
                      <div className="text-2xl sm:text-3xl font-bold text-[#c4ff4d] mb-1 font-mono">{metric.value}</div>
                      <div className="text-xs text-white/40 uppercase tracking-widest">{metric.label}</div>
                    </m.div>
                  ))}
                </div>
              </m.div>
            </div>
          </div>
        </section>
        
        {/* Hire once. Answer everywhere. */}
        <section className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 bg-black border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <m.div className="mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c4ff4d]/10 border border-[#c4ff4d]/20 text-[#c4ff4d] text-[10px] uppercase tracking-widest mb-5">
                <span>Omnichannel</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
                Hire once.<br /><span className="text-[#c4ff4d]">Answer everywhere.</span>
              </h2>
              <p className="text-white/60 text-lg max-w-2xl">
                One employee, every door your customers knock on. Same memory, same manners, every channel.
              </p>
              <p className="text-white/45 text-base max-w-2xl mt-3">
                A missed WhatsApp is a missed booking. A missed call is a missed client. Your AI employee never misses either.
              </p>
            </m.div>

            <div className="grid sm:grid-cols-2 gap-3 mb-16">
              {[
                { ch: 'WhatsApp', desc: 'Bookings, questions, follow-ups — where Malta actually talks.' },
                { ch: 'Phone', desc: 'Missed calls returned in seconds. Natural voice, your greeting.' },
                { ch: 'DMs', desc: 'Instagram & Facebook messages answered while you\'re on service.' },
                { ch: 'Email', desc: 'Quotes, confirmations and invoices — written, sent, chased.' },
              ].map((c, i) => (
                <m.div key={c.ch} className="flex items-start gap-4 p-4 rounded-xl border border-[#c4ff4d]/15 bg-[#c4ff4d]/[0.04]"
                  initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                  <span className="font-bold text-[#c4ff4d] text-sm tracking-wide flex-shrink-0 w-20 pt-0.5">{c.ch}</span>
                  <span className="text-white/60 text-sm leading-relaxed">{c.desc}</span>
                </m.div>
              ))}
            </div>

            {/* Training terminal */}
            <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Train it like a new hire.</h3>
              <p className="text-white/50 mb-5 text-sm leading-relaxed max-w-xl">
                No flowcharts, no code. State the rule in plain words — it becomes how your employee behaves, across every channel, from that moment.
              </p>
              <div className="rounded-xl border border-[#c4ff4d]/20 bg-black/60 overflow-hidden max-w-2xl">
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.06] bg-white/[0.02]">
                  <span className="text-[#c4ff4d] text-[10px] font-mono font-bold tracking-widest uppercase">Training — plain language</span>
                  <span className="text-white/25 text-[10px] font-mono">live</span>
                </div>
                <div className="p-5 font-mono text-sm leading-loose space-y-1">
                  <p><span className="text-white/90">You:</span> <span className="text-white/55">&ldquo;If someone asks for a refund under €50 and it&rsquo;s their first, approve it. Anything else — call me.&rdquo;</span></p>
                  <p><span className="text-[#c4ff4d]">›</span> <span className="text-white/35 text-xs">rule learned · applied across whatsapp / phone / dms / email</span></p>
                  <p className="pt-2"><span className="text-white/90">You:</span> <span className="text-white/55">&ldquo;We&rsquo;re closed on the 15th for a private event.&rdquo;</span></p>
                  <p><span className="text-[#c4ff4d]">›</span> <span className="text-white/35 text-xs">calendar updated · 3 bookings moved · guests notified</span> <span className="text-[#c4ff4d] text-xs">✓</span></p>
                </div>
              </div>
            </m.div>
          </div>
        </section>
        
        {/* ========== BUSINESS CASE PROSE — AI Employees in Malta ========== */}
        <section className="relative z-10 py-20 sm:py-24 px-4 sm:px-6 bg-black border-t border-white/5" data-testid="section-ai-agents-business-case">
          <div className="max-w-6xl mx-auto">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 max-w-3xl" data-speakable>
                Why Malta Businesses Are Switching to AI Employees
              </h2>
            </m.div>

            <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
              <m.div
                className="lg:col-span-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="space-y-6 text-white/65 leading-relaxed text-base sm:text-lg">
                  <p>
                    The argument is a staffing one. A Malta business paying around €2,400 per month
                    for a full-time team member gets someone who works eight hours a day, five days a
                    week, takes sick days, and has a ceiling on how much they can handle at once. The
                    same budget directed at an AI workforce gets 24/7 coverage across every channel,
                    zero sick days, consistent output regardless of volume, and the ability to handle
                    hundreds of conversations simultaneously. That is not a technology argument. It is
                    a commercial one.
                  </p>

                  <p>
                    Malta's labour market is tight. iGaming, fintech and financial services absorb most
                    of the available talent, which means hospitality, retail and fast-growing SMBs
                    compete for what's left. AI employees address the shortage directly — sales outreach,
                    first-contact qualification, query resolution, appointment scheduling, invoice
                    follow-up — all running on EU-resident infrastructure under GDPR-compliant
                    conditions, integrated with the tools your team already uses, live in 7–14 days.
                  </p>
                </div>
              </m.div>

              {/* What it earns you */}
              <m.div
                className="lg:col-span-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                data-testid="column-what-it-earns"
              >
                <p className="text-[#c4ff4d] text-[10px] font-bold tracking-widest uppercase mb-5">What it earns you</p>
                <div className="space-y-4">
                  {[
                    { who: 'Clinic', what: '23% more bookings in the first 30 days — every enquiry answered, every no-show rebooked.' },
                    { who: 'Restaurant', what: 'Zero missed calls in Q1. Every table request handled, even mid-service on a Saturday.' },
                    { who: 'Agency', what: '4 proposals sent while the team slept — follow-ups chased, meetings on the calendar by morning.' },
                  ].map((o, i) => (
                    <div key={o.who} className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                      <p className="text-white font-semibold text-sm mb-1">{o.who}</p>
                      <p className="text-white/50 text-sm leading-relaxed">{o.what}</p>
                    </div>
                  ))}
                </div>
              </m.div>
            </div>

            {/* Human handoff trust callout */}
            <m.div className="mt-10 max-w-3xl"
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
              <div className="p-5 rounded-xl border border-dashed border-[#c4ff4d]/30 bg-[#c4ff4d]/[0.03]">
                <p className="text-white font-semibold mb-1">Knows when to call a human.</p>
                <p className="text-white/50 text-sm leading-relaxed">
                  Anything sensitive, unusual or high-value hands off to you or your team instantly — with the full conversation attached. Guardrails set by you, in writing. No AI agent at OARC operates without a human escalation path.
                </p>
              </div>
            </m.div>
          </div>
        </section>

        {/* Command Console Section */}
        <section id="agents" className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 bg-zinc-950">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <m.h2 
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                The Command <span className="text-[#c4ff4d]">Console</span>
              </m.h2>
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
            <m.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">What you get from day one</h2>
              <p className="text-white/60 max-w-xl mx-auto">Measurable impact. Predictable costs. Zero management overhead.</p>
            </m.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyBenefits.map((benefit, idx) => (
                <m.div
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
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Pricing CTA - Pricing hidden, revealed via form */}
        <section className="relative z-10 py-20 sm:py-28 px-4 sm:px-6 bg-zinc-900/50 border-y border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <m.div
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
                Start with one employee. Scale from there.
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
                  <m.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-[#c4ff4d] text-black font-bold rounded-full text-lg shadow-lg shadow-[#c4ff4d]/20 hover:shadow-xl hover:shadow-[#c4ff4d]/30 transition-all flex items-center gap-2"
                    data-testid="button-get-custom-pricing"
                  >
                    <SiWhatsapp className="w-5 h-5" />
                    Get Prices Now
                  </m.button>
                </a>
                <Link href="/contact">
                  <m.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-transparent border-2 border-white/20 text-white font-bold rounded-full text-lg hover:border-white/40 transition-all"
                    data-testid="button-contact-pricing"
                  >
                    Book a Call
                  </m.button>
                </Link>
              </div>
              <p className="text-white/40 text-sm pt-2">
                Typically respond within 2 hours during business hours
              </p>
            </m.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 bg-zinc-950 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <m.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">Common Questions</h2>
              <p className="text-white/60">Everything you need to know about OARC AI Agents.</p>
            </m.div>
            
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
            <m.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
                Your first AI employee
                <br />
                <span className="opacity-70">can be live in 7 days.</span>
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
            </m.div>
          </div>
        </section>

        {/* ========== MEET YOUR AI TEAM — PER-ROLE OUTCOME CARDS ========== */}
        <section className="relative z-10 py-20 sm:py-24 px-4 sm:px-6 bg-zinc-950 border-t border-white/5" data-testid="section-meet-ai-team">
          <div className="max-w-6xl mx-auto">
            <m.div
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
            </m.div>

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
                  slug: "ai-compliance-auditor",
                  role: "AI Compliance Auditor",
                  function: "Regulatory Compliance",
                  desc: "Runs continuous policy checks across your operations for MFSA, MGA and IDPC regulatory requirements. Flags non-compliant content, documents, and workflows before they become enforcement issues — designed specifically for Malta's regulated sectors.",
                  metric: "Continuous compliance monitoring for MFSA, MGA and IDPC",
                },
              ].map((agent, idx) => (
                <m.div
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
                </m.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* ========== EXPLORE THE 7 AI AGENTS — SPOKES + IMAGE GRID ========== */}
        <section className="relative z-10 py-20 sm:py-24 px-4 sm:px-6 bg-black border-t border-white/5" data-testid="section-ai-agents-spokes">
          <div className="max-w-6xl mx-auto">
            <m.div
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
            </m.div>

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
