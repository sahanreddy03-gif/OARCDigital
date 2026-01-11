import { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'wouter';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { AnimatedGridBackground } from '@/components/ui/animated-grid-background';
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
  StatsRail, 
  PersonalizationSteps,
  HeroAvatar,
  AITeamMember
} from '@/components/ai';
import { 
  ArrowRight, Check, Target, HeadphonesIcon, Calendar, LayoutGrid, Users,
  Zap, Clock, Shield, TrendingUp, MessageSquare, Play, Pause, RotateCcw,
  Database, Phone, Mail, Bot, Sparkles, ChevronRight
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};

const roleReplacements = [
  {
    icon: Target,
    title: 'Sales Reps',
    description: 'Capture & qualify leads, book demos, and nurture automatically.',
    metric: '3x conversion lift'
  },
  {
    icon: HeadphonesIcon,
    title: 'Support Agents',
    description: 'Resolve 80-95% common queries instantly, escalate the rest.',
    metric: '90% auto-resolution'
  },
  {
    icon: Calendar,
    title: 'Bookings & Scheduling',
    description: 'Book, reschedule, and remind customers across channels.',
    metric: '20% fewer no-shows'
  },
  {
    icon: LayoutGrid,
    title: 'Operations Coordinator',
    description: 'Route tasks, update systems, and close the loop automatically.',
    metric: '50% time reclaimed'
  },
  {
    icon: Users,
    title: 'Follow-up Specialist',
    description: 'Re-engage leads and customers until they convert.',
    metric: '10x outreach velocity'
  }
];

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
    stat: '€0.02',
    statLabel: 'Per interaction avg'
  }
];

const comparisonData = [
  { feature: 'Deployment time', hiring: '2-6 months', outsource: '2-4 weeks', oarc: '7-14 days' },
  { feature: 'Response time', hiring: 'Minutes-hours', outsource: 'Seconds-minutes', oarc: '<2 seconds' },
  { feature: 'Availability', hiring: 'Business hours', outsource: '12-16 hours', oarc: '24/7/365' },
  { feature: 'Cost per interaction', hiring: '€5-15', outsource: '€1-3', oarc: '€0.02-0.10' },
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

const packages = [
  {
    name: 'PILOT',
    price: '1,500',
    period: '2 weeks',
    description: 'Best for testing with measurable results.',
    features: [
      '1 AI agent deployed',
      'Up to 500 interactions',
      'KPI baseline + dashboard',
      'Daily performance reports',
      'Dedicated support'
    ],
    cta: 'Start Pilot',
    popular: false
  },
  {
    name: 'GROWTH',
    price: '2,997',
    period: '/month',
    description: 'Scale with multiple agents and full integration.',
    features: [
      '3 AI agents deployed',
      'Unlimited interactions',
      'Full tool integrations',
      'Weekly optimization calls',
      'Priority support',
      'Custom training updates'
    ],
    cta: 'Get Started',
    popular: true
  },
  {
    name: 'ENTERPRISE',
    price: 'Custom',
    period: '',
    description: 'End-to-end deployment with SLA and dedicated team.',
    features: [
      'Unlimited AI agents',
      'Custom SLA guarantee',
      'Dedicated success manager',
      'White-label options',
      'On-premise deployment',
      'Advanced security controls'
    ],
    cta: 'Request Quote',
    popular: false
  }
];

const demoMessages = [
  { id: 'm1', sender: 'user', text: "Hi — can I book a demo for next Tuesday at 10am?", time: 0, source: 'Website Chat' },
  { id: 'm2', sender: 'agent', text: "Hi Sahan — I can book that. Which timezone should I use? (Malta or Home)", time: 800, source: 'OARC AI' },
  { id: 'm3', sender: 'user', text: "Malta time please — and send an invite to sahan@oarc.com", time: 1400, source: 'Website Chat' },
  { id: 'm4', sender: 'agent', text: "Got it. I found availability next Tue 10:00 CET. I booked the slot and sent an invite. Would you like a reminder 1 hour before?", time: 2200, source: 'Calendar API', action: 'Booked slot: Tue 10:00 CET → Calendar invite sent' },
  { id: 'm5', sender: 'user', text: "Yes please", time: 3000, source: 'Website Chat' },
  { id: 'm6', sender: 'agent', text: "Done — reminder created. Also, I attached the demo brief and your call link to the calendar invite.", time: 3600, source: 'CRM', action: 'Created reminder + attached docs' },
  { id: 'm7', sender: 'user', text: "Can you answer a quick Q — do you handle refunds?", time: 4800, source: 'Website Chat' },
  { id: 'm8', sender: 'agent', text: "Yes — I can check order #45892. One moment while I look it up.", time: 5400, source: 'Order DB' },
  { id: 'm9', sender: 'agent', text: "Order #45892 shipped yesterday by courier — expected Thu 17:00. Would you like to initiate a refund or wait for delivery?", time: 7600, source: 'Order DB', action: 'Retrieved order: #45892 → Status: Shipped' },
  { id: 'm10', sender: 'user', text: "Please cancel and refund. It was the wrong size.", time: 8800, source: 'Website Chat' },
  { id: 'm11', sender: 'agent', text: "Refund initiated — €49.99 will be returned to the original payment method within 3-5 business days. I'll email the confirmation now.", time: 9600, source: 'Payments API', action: 'Initiated refund: €49.99 → Card ending 4242' },
  { id: 'm12', sender: 'agent', text: "If you prefer, I can rebook a different size and send a return label. Which would you like?", time: 10400, source: 'CRM' }
];

const aiAgentsFAQs: FAQItem[] = [
  { question: "Will this replace our staff?", answer: "It removes repetitive work and lets your team focus on higher-value tasks; you retain full control. AI handles the routine so humans can do strategic work." },
  { question: "How long to see ROI?", answer: "Typical pilots deliver measurable improvements in 4-8 weeks. Most clients see positive ROI within the first month of full deployment." },
  { question: "Is my data safe?", answer: "Data remains yours. We use secure integrations, SOC 2 compliant infrastructure, and provide an enterprise data control agreement. No data is used to train external models." },
  { question: "What if the agent fails?", answer: "Agents escalate with full context to humans and we fix issues within SLA windows. Human oversight is always available, and we continuously improve based on edge cases." },
  { question: "What's the pricing model?", answer: "We offer pilots from €1,500 and fixed monthly packages starting at €2,997/month. Enterprise custom pricing available. Request a quote for a clear, no-surprise estimate." },
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

function LiveDemoChat() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState<typeof demoMessages>([]);
  const [expandedAction, setExpandedAction] = useState<string | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const resetDemo = useCallback(() => {
    setCurrentTime(0);
    setVisibleMessages([]);
    setIsPlaying(false);
    setExpandedAction(null);
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);
  
  const togglePlay = useCallback(() => {
    if (isPlaying) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      intervalRef.current = setInterval(() => {
        setCurrentTime(prev => prev + 100);
      }, 100);
    }
  }, [isPlaying]);
  
  useEffect(() => {
    const newVisible = demoMessages.filter(msg => msg.time <= currentTime);
    setVisibleMessages(newVisible);
    
    if (currentTime >= 11000) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setIsPlaying(false);
    }
  }, [currentTime]);
  
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);
  
  return (
    <div className="relative">
      <div className="text-center mb-4">
        <p className="text-xs text-white/50">Demo uses mock data — real integrations possible on onboarding.</p>
      </div>
      
      <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden max-w-lg mx-auto">
        <div className="bg-white/5 px-4 py-3 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#c4ff4d] animate-pulse" />
            <span className="text-sm text-white/80 font-medium">OARC AI Agent</span>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={togglePlay}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              data-testid="button-demo-play"
            >
              {isPlaying ? <Pause className="w-4 h-4 text-white/70" /> : <Play className="w-4 h-4 text-white/70" />}
            </button>
            <button 
              onClick={resetDemo}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              data-testid="button-demo-reset"
            >
              <RotateCcw className="w-4 h-4 text-white/70" />
            </button>
          </div>
        </div>
        
        <div className="h-[400px] overflow-y-auto p-4 space-y-3 scrollbar-hide">
          {visibleMessages.map((msg, idx) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[85%] ${msg.sender === 'user' ? 'order-1' : ''}`}>
                <div 
                  className={`px-4 py-2.5 rounded-2xl text-sm ${
                    msg.sender === 'user' 
                      ? 'bg-[#c4ff4d] text-black rounded-br-md' 
                      : 'bg-white/10 text-white rounded-bl-md cursor-pointer hover:bg-white/15 transition-colors'
                  }`}
                  onClick={() => msg.action && setExpandedAction(expandedAction === msg.id ? null : msg.id)}
                >
                  {msg.text}
                </div>
                
                <div className="flex items-center gap-2 mt-1 px-1">
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                    msg.sender === 'user' 
                      ? 'bg-white/10 text-white/50' 
                      : 'bg-[#c4ff4d]/20 text-[#c4ff4d]/80'
                  }`}>
                    {msg.source}
                  </span>
                </div>
                
                {msg.action && expandedAction === msg.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-2 px-3 py-2 bg-[#c4ff4d]/10 border border-[#c4ff4d]/20 rounded-lg"
                  >
                    <p className="text-[10px] text-[#c4ff4d]/60 uppercase tracking-wider mb-1">Action Taken</p>
                    <p className="text-xs text-white/80">{msg.action}</p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
          
          {isPlaying && visibleMessages.length < demoMessages.length && (
            <div className="flex justify-start">
              <div className="bg-white/10 rounded-2xl rounded-bl-md px-4 py-3">
                <div className="flex gap-1">
                  <motion.div 
                    className="w-2 h-2 bg-white/40 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                  />
                  <motion.div 
                    className="w-2 h-2 bg-white/40 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                  />
                  <motion.div 
                    className="w-2 h-2 bg-white/40 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        
        {currentTime >= 11000 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="border-t border-white/10 p-4 bg-[#c4ff4d]/5"
          >
            <div className="flex items-center justify-between text-xs">
              <span className="text-white/60">Session complete</span>
              <div className="flex items-center gap-4">
                <span className="text-[#c4ff4d]">✓ 3 tasks resolved</span>
                <span className="text-white/60">Response: &lt;2s avg</span>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

function KPICounter({ value, label, icon: Icon }: { value: string; label: string; icon: any }) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-12 h-12 mb-3 rounded-xl bg-white/5 border border-white/10">
        <Icon className="w-5 h-5 text-[#c4ff4d]" />
      </div>
      <div className="text-3xl md:text-4xl font-bold text-white mb-1">
        <AnimatedCounter value={value} />
      </div>
      <p className="text-sm text-white/60">{label}</p>
    </div>
  );
}

export default function AIAgentsLanding() {
  const prefersReducedMotion = useReducedMotion();
  const [selectedAgent, setSelectedAgent] = useState<AITeamMember | null>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>AI Workforce Agents | Autonomous AI Team for Business | OARC Digital</title>
        <meta name="description" content="Deploy AI agents for sales, support, bookings, and operations. One AI team that takes ownership, delivers results, and runs 24/7. Pilot in 7-14 days." />
        <link rel="canonical" href="https://oarcdigital.com/ai-agents" />
      </Helmet>
      
      <CreativeNavigation />
      
      <main className="min-h-screen bg-black text-white overflow-x-hidden">
        {/* Hero Section - Split Layout with Avatar */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <AnimatedGridBackground 
            intensity="high" 
            showScanLine={true} 
            showParticles={true}
            showConcentricRings={true}
            showDiagonalGrid={true}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black pointer-events-none" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-32 w-full">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center lg:text-left"
              >
                <motion.div 
                  className="inline-flex items-center gap-2 px-3 py-1.5 sm:py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full mb-6 sm:mb-8"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="w-2 h-2 rounded-full bg-[#c4ff4d] animate-pulse flex-shrink-0" />
                  <span className="text-[10px] sm:text-xs md:text-sm text-white/80">We train it. It takes ownership. Delivers results.</span>
                </motion.div>
                
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-6 leading-[1.15]">
                  <span className="block">One AI Team for</span>
                  <span className="text-[#c4ff4d]">Sales, Support,</span>
                  <br />
                  <span className="text-[#c4ff4d]">Bookings</span> & Operations.
                </h1>
                
                <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-xl mx-auto lg:mx-0 mb-8 sm:mb-10 px-2 sm:px-0">
                  Buy once. Hand over the work. Your business runs smoother, faster, and more profitably.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-12">
                  <Link href="/contact">
                    <Button 
                      size="lg" 
                      className="bg-[#c4ff4d] hover:bg-[#d4ff6d] text-black font-semibold px-8 py-6 text-lg rounded-full group"
                      data-testid="button-hero-cta"
                    >
                      Get Your AI Team
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <a 
                    href="#how-it-works" 
                    className="text-white/70 hover:text-white flex items-center gap-2 transition-colors"
                    data-testid="link-how-it-works"
                  >
                    See How It Works
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl mx-auto lg:mx-0">
                  <KPICounter value="7" label="Days to Deploy" icon={Clock} />
                  <KPICounter value="<2s" label="Response Time" icon={Zap} />
                  <KPICounter value="90%" label="Auto-Resolution" icon={Check} />
                  <KPICounter value="24/7" label="Availability" icon={GlobeNetwork} />
                </div>
              </motion.div>
              
              <div className="hidden lg:block">
                <HeroAvatar />
              </div>
            </div>
          </div>
        </section>
        
        {/* Stats Rail - Always On */}
        <StatsRail />

        {/* Meet Your AI Team - Carousel */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <TeamCarousel 
              onAgentSelect={setSelectedAgent} 
              selectedAgentId={selectedAgent?.id}
            />
          </div>
        </section>
        
        {/* Command Console - Natural Language Control */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-black overflow-hidden">
          <div className="max-w-6xl mx-auto w-full">
            <CommandConsolePanel 
              autoPlay={false} 
              selectedAgentId={selectedAgent?.id}
            />
          </div>
        </section>

        {/* Proof & Comparison */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-zinc-950">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why OARC AI Agents Win</h2>
              <p className="text-white/60 max-w-xl mx-auto">Compare hiring, outsourcing, and AI deployment side by side.</p>
            </motion.div>
            
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-4 text-white/60 font-medium">Feature</th>
                    <th className="text-center py-4 px-4 text-white/60 font-medium">Hire Staff</th>
                    <th className="text-center py-4 px-4 text-white/60 font-medium">Outsource</th>
                    <th className="text-center py-4 px-4 font-medium">
                      <span className="text-[#c4ff4d]">OARC AI Team</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, idx) => (
                    <tr key={row.feature} className="border-b border-white/5">
                      <td className="py-4 px-4 text-white/80">{row.feature}</td>
                      <td className="py-4 px-4 text-center text-white/50">{row.hiring}</td>
                      <td className="py-4 px-4 text-center text-white/50">{row.outsource}</td>
                      <td className="py-4 px-4 text-center">
                        <span className="text-[#c4ff4d] font-medium">{row.oarc}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12">
              {[
                { label: 'Deploy in', value: '7-14 days' },
                { label: 'Response time', value: '<2s' },
                { label: 'Auto-resolution', value: '90%' },
                { label: 'Availability', value: '24/7' },
                { label: 'Agents deployed', value: '40+' }
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-2xl font-bold text-[#c4ff4d] mb-1">{stat.value}</div>
                  <div className="text-xs text-white/50">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works - Personalization Steps */}
        <section id="how-it-works" className="py-16 sm:py-24 px-4 sm:px-6 bg-black">
          <div className="max-w-6xl mx-auto">
            <PersonalizationSteps />
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-zinc-950">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Businesses Choose AI Teams</h2>
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

        {/* Live Demo Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-zinc-950">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">See It In Action</h2>
              <p className="text-white/60 max-w-xl mx-auto">Watch our AI agent handle a real booking + support request in under 15 seconds.</p>
            </motion.div>
            
            <LiveDemoChat />
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-black">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How Customers Start</h2>
              <p className="text-white/60 max-w-xl mx-auto">Choose your entry point. All packages include onboarding, support, and baseline KPI guarantee.</p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {packages.map((pkg, idx) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative"
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                      <span className="bg-[#c4ff4d] text-black text-xs font-bold px-4 py-1 rounded-full">
                        MOST POPULAR
                      </span>
                    </div>
                  )}
                  <GlassCard 
                    className={`p-6 h-full ${pkg.popular ? 'border-[#c4ff4d]/30' : ''}`}
                    variant={pkg.popular ? 'strong' : 'default'}
                  >
                    <div className="text-center mb-6">
                      <h3 className="text-sm font-semibold text-[#c4ff4d] tracking-wider mb-2">{pkg.name}</h3>
                      <div className="flex items-baseline justify-center gap-1">
                        {pkg.price === 'Custom' ? (
                          <span className="text-4xl font-bold">Custom</span>
                        ) : (
                          <>
                            <span className="text-4xl font-bold">€{pkg.price}</span>
                            <span className="text-white/50">{pkg.period}</span>
                          </>
                        )}
                      </div>
                      <p className="text-sm text-white/60 mt-2">{pkg.description}</p>
                    </div>
                    
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm">
                          <Check className="w-4 h-4 text-[#c4ff4d] mt-0.5 flex-shrink-0" />
                          <span className="text-white/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link href="/contact">
                      <Button 
                        className={`w-full ${
                          pkg.popular 
                            ? 'bg-[#c4ff4d] hover:bg-[#d4ff6d] text-black' 
                            : 'bg-white/10 hover:bg-white/20 text-white'
                        }`}
                        data-testid={`button-pricing-${pkg.name.toLowerCase()}`}
                      >
                        {pkg.cta}
                      </Button>
                    </Link>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
            
            <p className="text-center text-sm text-white/50 mt-8">
              All packages include onboarding, prioritised support, and guarantee to meet baseline KPIs or we iterate at no extra cost.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-zinc-950">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-white/60">Got questions? We've got answers.</p>
            </motion.div>
            
            <FAQSection 
              faqs={aiAgentsFAQs} 
              schemaId="ai-agents-faq" 
              darkMode={true}
            />
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#c4ff4d]/5 via-transparent to-[#c4ff4d]/5" />
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Deploy Your AI Team?
              </h2>
              <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
                Book an intro call — onboarding limited to ensure quality. We guarantee measurable results or iterate at no extra cost.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    className="bg-[#c4ff4d] hover:bg-[#d4ff6d] text-black font-semibold px-8 py-6 text-lg rounded-full group"
                    data-testid="button-final-cta"
                  >
                    Book Intro Call
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <a 
                  href="tel:+35677788990" 
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                  data-testid="link-phone"
                >
                  <Phone className="w-5 h-5" />
                  +356 7778 8990
                </a>
                <a 
                  href="mailto:hello@oarcdigital.com" 
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                  data-testid="link-email"
                >
                  <Mail className="w-5 h-5" />
                  hello@oarcdigital.com
                </a>
              </div>
              
              <div className="flex items-center justify-center gap-6 text-sm text-white/50">
                <span className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Results guaranteed
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Deploy in 7-14 days
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  No lock-in contracts
                </span>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer hideGetInTouch />
    </>
  );
}
