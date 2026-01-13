import { useEffect, useRef, useState } from 'react';
import { Link } from 'wouter';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GlassCard } from '@/components/ui/glass-card';
import { AnimatedGridBackground } from '@/components/ui/animated-grid-background';
import FAQSection, { FAQItem } from '@/components/FAQSection';
import Footer from '@/components/Footer';
import CreativeNavigation from '@/components/CreativeNavigation';
import QuickLeadModal from '@/components/QuickLeadModal';
import { 
  ArrowRight, Check, ChevronDown, ChevronRight, Zap, Target, 
  TrendingUp, Users, BarChart3, Shield, Clock, Gift, Star,
  Bot, Play, Award, Layers, RefreshCw, Settings, Database,
  Workflow, FileCode, Cpu, CircuitBoard, Cog, ArrowUpRight,
  Building2, Utensils, Stethoscope, ShoppingCart, Home, Scale, Landmark, Gamepad2,
  AlertTriangle, DollarSign, Timer, Brain, Rocket, CheckCircle2, XCircle
} from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.12 } }
};

const maltaProblems = [
  {
    problem: "Manual processes bleeding €4,000+/month",
    industries: ["Real Estate", "Legal", "Finance"],
    pain: "Staff spend 60% of time on repetitive data entry, follow-ups, and document processing that could be automated.",
  },
  {
    problem: "After-hours leads going cold",
    industries: ["Restaurants", "Clinics", "iGaming"],
    pain: "72% of inquiries arrive outside business hours. By morning, prospects have moved to competitors who responded instantly.",
  },
  {
    problem: "No single source of truth",
    industries: ["All Industries"],
    pain: "Customer data scattered across WhatsApp, email, spreadsheets, and paper. Nothing connects. Insights get lost.",
  },
  {
    problem: "Scaling requires proportional headcount",
    industries: ["Retail", "iGaming", "Finance"],
    pain: "Every 50% revenue increase demands 40% more staff. Margins shrink as you grow.",
  },
];

const industries = [
  {
    id: 'restaurant',
    name: 'Restaurant & Hospitality',
    icon: Utensils,
    color: 'from-orange-500 to-amber-400',
    problems: ['Ghost reservations', 'No-show revenue loss', 'Manual booking chaos'],
    solutions: ['AI booking confirmation', 'Smart waitlist backfill', 'Automated review capture'],
    avgMonthlyLoss: '€12,800',
    avgRecovery: '€9,200',
  },
  {
    id: 'clinic',
    name: 'Medical Clinics',
    icon: Stethoscope,
    color: 'from-blue-500 to-cyan-400',
    problems: ['Appointment no-shows', 'Phone tag marathons', 'Referral black holes'],
    solutions: ['Multi-stage reminders', 'Async patient messaging', 'Referral tracking'],
    avgMonthlyLoss: '€19,400',
    avgRecovery: '€14,500',
  },
  {
    id: 'realestate',
    name: 'Real Estate',
    icon: Home,
    color: 'from-emerald-500 to-teal-400',
    problems: ['Leads going cold overnight', 'Property matching chaos', 'Manual listing updates'],
    solutions: ['24/7 AI lead response', 'Smart property matching', 'Automated syndication'],
    avgMonthlyLoss: '€23,000',
    avgRecovery: '€17,200',
  },
  {
    id: 'igaming',
    name: 'iGaming & Tech',
    icon: Gamepad2,
    color: 'from-purple-500 to-pink-400',
    problems: ['Player churn undetected', 'Support ticket overload', 'Compliance documentation'],
    solutions: ['Churn prediction alerts', 'AI support resolution', 'Automated compliance'],
    avgMonthlyLoss: '€45,000',
    avgRecovery: '€32,000',
  },
  {
    id: 'legal',
    name: 'Legal & Professional',
    icon: Scale,
    color: 'from-slate-500 to-zinc-400',
    problems: ['Contract review bottlenecks', 'Client intake friction', 'Deadline tracking chaos'],
    solutions: ['AI contract analysis', 'Automated intake flows', 'Smart deadline management'],
    avgMonthlyLoss: '€18,500',
    avgRecovery: '€13,800',
  },
  {
    id: 'finance',
    name: 'Finance & Banking',
    icon: Landmark,
    color: 'from-sky-500 to-blue-400',
    problems: ['KYC processing delays', 'Risk assessment manual work', 'Customer onboarding friction'],
    solutions: ['AI document verification', 'Automated risk scoring', 'Seamless onboarding'],
    avgMonthlyLoss: '€28,000',
    avgRecovery: '€21,000',
  },
  {
    id: 'retail',
    name: 'Retail & E-commerce',
    icon: ShoppingCart,
    color: 'from-rose-500 to-red-400',
    problems: ['Cart abandonment epidemic', 'Inventory blind spots', 'Customer support overload'],
    solutions: ['Smart recovery sequences', 'AI inventory forecasting', 'Automated support'],
    avgMonthlyLoss: '€16,200',
    avgRecovery: '€12,400',
  },
];

const workflowSteps = [
  {
    step: 1,
    title: 'Discover & Map',
    subtitle: 'Week 1-2',
    description: 'We audit your current workflows, identify the 20% of processes causing 80% of friction, and map integration points.',
    details: ['Process documentation', 'Pain point identification', 'Integration assessment', 'ROI projection'],
    icon: Target,
    color: '#c4ff4d',
  },
  {
    step: 2,
    title: 'Design & Build',
    subtitle: 'Week 2-4',
    description: 'Our team architects and develops your custom automation solution — whether AI agents, workflow automation, or bespoke software.',
    details: ['Solution architecture', 'Custom development', 'API integrations', 'Testing environment'],
    icon: Settings,
    color: '#60a5fa',
  },
  {
    step: 3,
    title: 'Deploy & Train',
    subtitle: 'Week 4-5',
    description: 'We launch your solution in production, train your team, and ensure everything runs smoothly from day one.',
    details: ['Production deployment', 'Team training', 'Documentation', 'Go-live support'],
    icon: Rocket,
    color: '#f472b6',
  },
  {
    step: 4,
    title: 'Optimize & Scale',
    subtitle: 'Ongoing',
    description: 'Continuous monitoring, optimization, and expansion of your automation stack as your business grows.',
    details: ['Performance monitoring', 'Continuous improvement', 'Scale planning', 'Quarterly reviews'],
    icon: TrendingUp,
    color: '#34d399',
  },
];

const solutionTypes = [
  {
    id: 'revenue-ops',
    title: 'Revenue Operations',
    subtitle: 'Automate the revenue engine',
    icon: DollarSign,
    color: 'from-emerald-500/20 to-emerald-500/5',
    borderColor: 'border-emerald-500/30',
    features: [
      'Lead capture & qualification',
      'Automated follow-up sequences',
      'CRM synchronization',
      'Sales pipeline automation',
      'Quote & proposal generation',
      'Payment collection workflows',
    ],
    stat: '3.2x',
    statLabel: 'avg conversion lift',
  },
  {
    id: 'workflow-auto',
    title: 'Workflow Automation',
    subtitle: 'Eliminate repetitive tasks',
    icon: Workflow,
    color: 'from-blue-500/20 to-blue-500/5',
    borderColor: 'border-blue-500/30',
    features: [
      'Document processing & routing',
      'Approval workflows',
      'Data synchronization',
      'Notification systems',
      'Reporting automation',
      'Cross-platform integrations',
    ],
    stat: '68%',
    statLabel: 'time saved on admin',
  },
  {
    id: 'custom-ai',
    title: 'Custom AI Solutions',
    subtitle: 'Purpose-built intelligence',
    icon: Brain,
    color: 'from-purple-500/20 to-purple-500/5',
    borderColor: 'border-purple-500/30',
    features: [
      'AI agents for specific tasks',
      'Natural language interfaces',
      'Predictive analytics',
      'Document intelligence',
      'Custom chatbots & assistants',
      'Machine learning models',
    ],
    stat: '24/7',
    statLabel: 'autonomous operation',
  },
  {
    id: 'software-dev',
    title: 'Bespoke Software',
    subtitle: 'When off-the-shelf fails',
    icon: FileCode,
    color: 'from-orange-500/20 to-orange-500/5',
    borderColor: 'border-orange-500/30',
    features: [
      'Custom web applications',
      'Mobile apps (iOS & Android)',
      'Internal tools & dashboards',
      'API development',
      'System integrations',
      'Legacy modernization',
    ],
    stat: '100%',
    statLabel: 'tailored to your needs',
  },
];

const beforeAfter = [
  {
    before: 'Staff chase leads manually via WhatsApp',
    after: 'AI responds in <2 seconds, 24/7, qualifies & books',
    saving: '€2,400/mo labor + recovered leads',
  },
  {
    before: 'Data entry across 4 different systems',
    after: 'Single entry auto-syncs everywhere',
    saving: '15 hours/week freed up',
  },
  {
    before: 'Reports compiled manually each week',
    after: 'Real-time dashboards update automatically',
    saving: '8 hours/week + better decisions',
  },
  {
    before: 'Appointments missed, no-shows eat revenue',
    after: 'Smart reminders, instant waitlist backfill',
    saving: '€3,800/mo in recovered bookings',
  },
  {
    before: 'Customer queries wait hours for response',
    after: 'AI handles 85%+ instantly, escalates rest',
    saving: '2 full-time staff hours reallocated',
  },
];

const pricingTiers = [
  {
    name: 'Automation Pilot',
    price: '2,497',
    period: 'one-time',
    description: 'Prove value with one high-impact workflow automated end-to-end.',
    features: [
      '1 workflow fully automated',
      'Integration with 2 systems',
      '30 days of optimization',
      'Training for your team',
      'ROI measurement report',
    ],
    cta: 'Start Pilot',
    popular: false,
  },
  {
    name: 'Growth Engine',
    price: '4,997',
    period: '/month',
    description: 'Comprehensive revenue and operations automation for growing businesses.',
    features: [
      'Up to 5 automated workflows',
      'AI agent deployment',
      'Unlimited integrations',
      'Custom dashboard',
      'Monthly strategy calls',
      'Priority support',
      'Continuous optimization',
    ],
    cta: 'Get Started',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Full-scale digital transformation with bespoke solutions.',
    features: [
      'Unlimited workflows',
      'Custom AI development',
      'Bespoke software builds',
      'Dedicated success manager',
      'On-site training options',
      'SLA guarantees',
      'Quarterly business reviews',
    ],
    cta: 'Contact Us',
    popular: false,
  },
];

const faqItems: FAQItem[] = [
  {
    question: "What's the difference between automation and custom AI?",
    answer: "Workflow automation handles predictable, rule-based processes (if X then Y). Custom AI handles nuanced tasks requiring judgment — understanding intent, making decisions, generating content. Most businesses benefit from both working together.",
  },
  {
    question: "How quickly can we see results?",
    answer: "Most automation pilots show measurable impact within 2-4 weeks. Complex custom solutions take 4-8 weeks to deploy but deliver proportionally higher ROI. We prioritize quick wins to prove value early.",
  },
  {
    question: "Do you work with our existing systems?",
    answer: "Absolutely. We integrate with any system that has an API — CRMs, ERPs, booking systems, payment processors, email, WhatsApp, and more. If there's no API, we can often create workarounds.",
  },
  {
    question: "What if we don't know what we need?",
    answer: "That's what our Discovery phase is for. We audit your operations, identify the highest-impact opportunities, and recommend a prioritized roadmap. You don't need technical knowledge — we translate business problems into solutions.",
  },
  {
    question: "How is pricing structured?",
    answer: "Automation pilots are fixed-price projects. Ongoing services are monthly retainers covering maintenance, optimization, and support. Custom builds are scoped individually. We always provide clear quotes before work begins.",
  },
  {
    question: "Will this replace our staff?",
    answer: "Automation handles repetitive tasks so your team can focus on high-value work. Most clients redeploy staff to revenue-generating activities rather than reducing headcount. The goal is leverage, not replacement.",
  },
  {
    question: "What happens if something breaks?",
    answer: "All solutions include monitoring and alerting. Our team responds within 4 hours for critical issues. We build redundancy into every system and maintain documentation for your internal IT team.",
  },
  {
    question: "Can we start small and scale?",
    answer: "Absolutely — that's our recommended approach. Start with one high-impact workflow, prove the ROI, then expand. Most clients grow their automation stack organically over 6-12 months.",
  },
];

const stats = [
  { value: '€2.4M+', label: 'Revenue automated monthly' },
  { value: '47+', label: 'Malta businesses transformed' },
  { value: '340%', label: 'Average ROI in year one' },
  { value: '4.9/5', label: 'Client satisfaction score' },
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
        setDisplayValue((numericValue * eased).toFixed(1));
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


export default function RevenueSolutionsLanding() {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePricingClick = (planName: string) => {
    setSelectedPlan(planName);
    setShowLeadModal(true);
  };

  return (
    <>
      <Helmet>
        <title>Revenue Automation & Custom AI Solutions | OARC Digital Malta</title>
        <meta name="description" content="Transform your business with revenue automation, AI agents, and custom software solutions. Malta's premium automation agency. Proven ROI in 4-8 weeks." />
        <link rel="canonical" href="https://oarcdigital.com/solutions" />
        <meta property="og:title" content="Revenue Automation & Custom AI Solutions | OARC Digital" />
        <meta property="og:description" content="Automate revenue operations, deploy AI agents, and build custom solutions. Malta's leading automation agency with 340% average ROI." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://oarcdigital.com/solutions" />
      </Helmet>

      <CreativeNavigation />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-zinc-950">
        <AnimatedGridBackground />
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-transparent to-zinc-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-transparent to-zinc-950/80" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <Badge className="mb-6 bg-[#c4ff4d]/10 text-[#c4ff4d] border-[#c4ff4d]/20 hover:bg-[#c4ff4d]/20">
              Revenue Automation + Custom AI + Bespoke Software
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
              Stop losing money to
              <br />
              <span className="text-[#c4ff4d]">manual processes</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/70 max-w-2xl mb-8">
              We automate your revenue operations, deploy AI agents, and build custom software — 
              so your business runs faster, smarter, and leaner. Malta's premier automation partner.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/35679711799?text=Hi%20OARC,%20I'm%20interested%20in%20revenue%20automation%20solutions"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg"
                  className="bg-[#c4ff4d] hover:bg-[#d4ff6d] text-black font-semibold px-8 rounded-full shadow-lg shadow-[#c4ff4d]/20"
                  data-testid="button-hero-cta"
                >
                  <SiWhatsapp className="mr-2 w-5 h-5" />
                  Get Free Audit
                </Button>
              </a>
              <Button 
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 rounded-full px-8"
                onClick={() => {
                  document.getElementById('workflow')?.scrollIntoView({ behavior: 'smooth' });
                }}
                data-testid="button-hero-secondary"
              >
                See How It Works
                <ChevronDown className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
          
          {/* Floating stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  <AnimatedCounter value={stat.value.replace(/[^0-9.]/g, '')} prefix={stat.value.includes('€') ? '€' : ''} suffix={stat.value.includes('%') ? '%' : stat.value.includes('+') ? '+' : stat.value.includes('/') ? '/5' : ''} />
                </div>
                <div className="text-sm text-white/50 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Malta Problem Index */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              The <span className="text-[#c4ff4d]">reality</span> Malta businesses face
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              These problems cost local businesses millions annually. Most don't realize how fixable they are.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {maltaProblems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard className="h-full p-6 border-red-500/20 bg-red-500/5">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-red-500/20 shrink-0">
                      <AlertTriangle className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{item.problem}</h3>
                      <p className="text-sm text-white/60 mb-3">{item.pain}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.industries.map((ind, j) => (
                          <Badge key={j} variant="outline" className="text-xs border-white/20 text-white/70">
                            {ind}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Types Grid */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-white/5 text-white/70 border-white/10">Our Solutions</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Four pillars of <span className="text-[#c4ff4d]">transformation</span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Whether you need to automate revenue, eliminate busywork, deploy AI, or build something entirely new — we've got you covered.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {solutionTypes.map((solution, i) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className={`h-full p-6 bg-gradient-to-br ${solution.color} border ${solution.borderColor} backdrop-blur-sm`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-white/10">
                      <solution.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{solution.stat}</div>
                      <div className="text-xs text-white/60">{solution.statLabel}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-1">{solution.title}</h3>
                  <p className="text-sm text-white/60 mb-4">{solution.subtitle}</p>
                  
                  <ul className="space-y-2">
                    {solution.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-white/80">
                        <Check className="w-4 h-4 text-[#c4ff4d] shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Workflow Section */}
      <section id="workflow" className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-white/5 text-white/70 border-white/10">Our Process</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              From chaos to <span className="text-[#c4ff4d]">clarity</span> in 4 steps
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              We don't just throw technology at problems. We follow a proven methodology that delivers measurable results.
            </p>
          </motion.div>
          
          {/* Visual workflow diagram */}
          <div className="relative">
            {/* Connecting line - desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#c4ff4d] via-[#60a5fa] via-[#f472b6] to-[#34d399] transform -translate-y-1/2 z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {workflowSteps.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative"
                >
                  <Card className="h-full p-6 bg-zinc-950/80 border-white/10 backdrop-blur-sm">
                    {/* Step number bubble */}
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center mb-4 font-bold text-lg"
                      style={{ 
                        backgroundColor: `${step.color}20`, 
                        color: step.color,
                        border: `2px solid ${step.color}40`
                      }}
                    >
                      {step.step}
                    </div>
                    
                    <div className="flex items-center gap-2 mb-2">
                      <step.icon className="w-5 h-5" style={{ color: step.color }} />
                      <span className="text-xs font-medium text-white/50">{step.subtitle}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-white/60 mb-4">{step.description}</p>
                    
                    <ul className="space-y-1">
                      {step.details.map((detail, j) => (
                        <li key={j} className="flex items-center gap-2 text-xs text-white/50">
                          <div className="w-1 h-1 rounded-full" style={{ backgroundColor: step.color }} />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Transformation */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-white/5 text-white/70 border-white/10">Transformation</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              What <span className="text-[#c4ff4d]">changes</span> when you automate
            </h2>
          </motion.div>
          
          <div className="space-y-4">
            {beforeAfter.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="grid md:grid-cols-[1fr,auto,1fr,auto] gap-4 items-center p-4 rounded-xl bg-zinc-900/50 border border-white/5"
              >
                {/* Before */}
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-red-500/20 shrink-0">
                    <XCircle className="w-4 h-4 text-red-400" />
                  </div>
                  <span className="text-sm text-white/70">{item.before}</span>
                </div>
                
                {/* Arrow */}
                <div className="hidden md:flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-[#c4ff4d]" />
                </div>
                
                {/* After */}
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/20 shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span className="text-sm text-white">{item.after}</span>
                </div>
                
                {/* Saving */}
                <div className="md:text-right">
                  <Badge className="bg-[#c4ff4d]/10 text-[#c4ff4d] border-[#c4ff4d]/20 text-xs">
                    {item.saving}
                  </Badge>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Deep-Dives */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-white/5 text-white/70 border-white/10">Industry Solutions</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Built for <span className="text-[#c4ff4d]">your</span> industry
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              We understand the unique challenges of Malta's key industries. Click to explore solutions tailored to your sector.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map((industry, i) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Card 
                  className={`p-4 cursor-pointer transition-all duration-300 ${
                    selectedIndustry === industry.id 
                      ? 'bg-zinc-800 border-[#c4ff4d]/50 ring-1 ring-[#c4ff4d]/30' 
                      : 'bg-zinc-950/50 border-white/10 hover:border-white/20'
                  }`}
                  onClick={() => setSelectedIndustry(selectedIndustry === industry.id ? null : industry.id)}
                  data-testid={`card-industry-${industry.id}`}
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${industry.color} flex items-center justify-center mb-3`}>
                    <industry.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1">{industry.name}</h3>
                  <p className="text-xs text-white/50">
                    {selectedIndustry === industry.id ? 'Click to collapse' : 'Click to explore'}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
          
          {/* Expanded industry detail */}
          <AnimatePresence>
            {selectedIndustry && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-8 overflow-hidden"
              >
                {industries.filter(ind => ind.id === selectedIndustry).map(industry => (
                  <Card key={industry.id} className="p-6 bg-zinc-950/80 border-white/10">
                    <div className="grid md:grid-cols-3 gap-8">
                      {/* Problems */}
                      <div>
                        <h4 className="text-sm font-semibold text-red-400 mb-3 flex items-center gap-2" data-testid="heading-common-problems">
                          <AlertTriangle className="w-4 h-4" />
                          Common Problems
                        </h4>
                        <ul className="space-y-2">
                          {industry.problems.map((p, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-white/70">
                              <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                              {p}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                          <div className="text-xs text-red-400">Avg. monthly loss</div>
                          <div className="text-xl font-bold text-white">{industry.avgMonthlyLoss}</div>
                        </div>
                      </div>
                      
                      {/* Solutions */}
                      <div>
                        <h4 className="text-sm font-semibold text-emerald-400 mb-3 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4" />
                          Our Solutions
                        </h4>
                        <ul className="space-y-2">
                          {industry.solutions.map((s, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-white/70">
                              <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              {s}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                          <div className="text-xs text-emerald-400">Avg. monthly recovery</div>
                          <div className="text-xl font-bold text-white">{industry.avgRecovery}</div>
                        </div>
                      </div>
                      
                      {/* CTA */}
                      <div className="flex flex-col justify-center">
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Ready to fix {industry.name.toLowerCase()}?
                        </h4>
                        <p className="text-sm text-white/60 mb-4">
                          Get a free audit of your current operations and see exactly where you're losing money.
                        </p>
                        <a
                          href={`https://wa.me/35679711799?text=Hi%20OARC,%20I%20run%20a%20${encodeURIComponent(industry.name)}%20business%20and%20want%20to%20learn%20about%20automation`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button className="w-full bg-[#c4ff4d] hover:bg-[#d4ff6d] text-black font-semibold rounded-full">
                            <SiWhatsapp className="mr-2 w-4 h-4" />
                            Chat About {industry.name}
                          </Button>
                        </a>
                      </div>
                    </div>
                  </Card>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-white/5 text-white/70 border-white/10">Investment</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Start with a pilot, <span className="text-[#c4ff4d]">scale</span> with results
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Clear pricing, no surprises. Prove ROI before committing to ongoing engagement.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {pricingTiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className={`h-full p-6 ${
                  tier.popular 
                    ? 'bg-gradient-to-b from-[#c4ff4d]/10 to-zinc-900 border-[#c4ff4d]/30' 
                    : 'bg-zinc-900/50 border-white/10'
                }`}>
                  {tier.popular && (
                    <Badge className="mb-4 bg-[#c4ff4d] text-black">Most Popular</Badge>
                  )}
                  
                  <h3 className="text-xl font-bold text-white mb-1">{tier.name}</h3>
                  <p className="text-sm text-white/60 mb-4">{tier.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-white">
                      {tier.price === 'Custom' ? tier.price : `€${tier.price}`}
                    </span>
                    <span className="text-white/50 text-sm">{tier.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-white/80">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${tier.popular ? 'text-[#c4ff4d]' : 'text-emerald-400'}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full rounded-full ${
                      tier.popular 
                        ? 'bg-[#c4ff4d] hover:bg-[#d4ff6d] text-black font-semibold' 
                        : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                    onClick={() => handlePricingClick(tier.name)}
                    data-testid={`button-pricing-${tier.name.toLowerCase().replace(/\s/g, '-')}`}
                  >
                    {tier.cta}
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-6">
          <FAQSection 
            faqs={faqItems}
            title="Common questions answered"
            schemaId="revenue-solutions-faq"
            darkMode={true}
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to stop leaving money
              <br />
              <span className="text-[#c4ff4d]">on the table?</span>
            </h2>
            <p className="text-lg text-white/60 max-w-xl mx-auto mb-8">
              Get a free automation audit. We'll identify your highest-impact opportunities and show you exactly what's possible.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/35679711799?text=Hi%20OARC,%20I%20want%20a%20free%20automation%20audit%20for%20my%20business"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg"
                  className="bg-[#c4ff4d] hover:bg-[#d4ff6d] text-black font-semibold px-8 rounded-full shadow-lg shadow-[#c4ff4d]/20"
                  data-testid="button-final-cta"
                >
                  <SiWhatsapp className="mr-2 w-5 h-5" />
                  Get Free Audit
                </Button>
              </a>
              <a href="tel:+35679711799">
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 rounded-full px-8"
                  data-testid="button-call-cta"
                >
                  Or Call Us Directly
                </Button>
              </a>
            </div>
            
            <p className="mt-6 text-sm text-white/40">
              Average response time: 2 hours during business hours
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Quick Lead Modal */}
      <QuickLeadModal
        isOpen={showLeadModal}
        onClose={() => {
          setShowLeadModal(false);
          setSelectedPlan(null);
        }}
        planName={selectedPlan}
        showPlanDropdown={!selectedPlan}
        source="solutions-pricing"
      />
    </>
  );
}
