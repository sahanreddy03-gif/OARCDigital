import { useState } from 'react';
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { supportingPagesSEO } from "@/data/seoMetadata";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Star, Building2, Zap, Sparkles, Crown, MessageCircle, Lock, ArrowRight, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import { SiWhatsapp } from 'react-icons/si';

const pricingCategories = [
  {
    id: 'social',
    label: 'Social Creative',
    accent: 'text-lime-600',
    bg: 'bg-lime-500',
    gradient: 'from-lime-400 to-green-500',
    lightBg: 'bg-lime-50'
  },
  {
    id: 'web',
    label: 'Web Experience',
    accent: 'text-orange-600',
    bg: 'bg-orange-500',
    gradient: 'from-orange-400 to-amber-500',
    lightBg: 'bg-orange-50'
  },
  {
    id: 'ai',
    label: 'AI Employees',
    accent: 'text-blue-600',
    bg: 'bg-blue-600',
    gradient: 'from-blue-500 to-indigo-600',
    lightBg: 'bg-blue-50'
  }
];

const sharedFeatures = [
  "Dedicated creative project manager",
  "Turnaround times starting at 48 hours",
  "Global timezone coverage",
  "AI-enhanced workflows",
  "Unlimited revisions on all drafts",
  "Support for multiple brands",
  "Real-time revenue dashboard"
];

const pricingData = {
  social: [
    {
      name: "STARTER",
      price: "799",
      period: "/month",
      desc: "Build a consistent social presence with video content included.",
      sub: "Save €800+ vs agencies",
      originalPrice: "1,299",
      bonuses: [
        "Brand Style Guide (€300 value)", 
        "Content Calendar Template", 
        "30-Day Strategy Session",
        "Hashtag Research Pack",
        "Free Stock Library Access"
      ],
      features: [
        "12 High-Fidelity Posts/mo", 
        "2 Short-Form Videos/mo",
        "1 Platform", 
        "Custom Design System", 
        "Monthly Performance Report", 
        "48-Hour Turnaround",
        "Dedicated Account Manager"
      ],
      icon: Sparkles,
      style: "basic",
      cta: "Get Started"
    },
    {
      name: "GROWTH",
      price: "1,899",
      period: "/month",
      desc: "Scale across platforms with professional video production.",
      sub: "Most Popular • Best Value",
      originalPrice: "2,999",
      bonuses: [
        "Competitor Analysis (€500 value)", 
        "Engagement Strategy Blueprint",
        "Priority 24-Hour Support",
        "Quarterly Brand Audit",
        "Trend Reports Weekly"
      ],
      features: [
        "24 High-Fidelity Posts/mo", 
        "8 Professional Videos/mo",
        "3 Platforms", 
        "Community Management", 
        "Influencer Outreach",
        "Story Templates Pack",
        "Performance Dashboard"
      ],
      icon: Zap,
      style: "popular",
      cta: "Accelerate Growth"
    },
    {
      name: "SCALE",
      price: "3,499",
      period: "/month",
      desc: "Full creative department at a fraction of in-house cost.",
      sub: "Enterprise Grade",
      originalPrice: "5,999",
      bonuses: [
        "Dedicated Creative Lead", 
        "Quarterly Brand Refresh",
        "UGC Creator Network Access", 
        "White-Label Reporting",
        "VIP Strategy Calls Monthly",
        "Crisis Management Support"
      ],
      features: [
        "Daily Posting (32/mo)", 
        "16 Cinematic Videos/mo",
        "All Platforms", 
        "Paid Ad Creative Library", 
        "Influencer Campaign Management",
        "Real-Time Analytics",
        "Unlimited Revisions"
      ],
      icon: Crown,
      style: "premium",
      cta: "Dominate Market"
    }
  ],
  web: [
    { 
      name: "STARTER", 
      price: "1,499", 
      period: "one-time", 
      desc: "Professional landing page that converts visitors into leads.", 
      sub: "Includes 3 months hosting",
      originalPrice: "2,299",
      bonuses: [
        "SEO Optimization (€300 value)", 
        "Mobile Responsive Design", 
        "Contact Form + CRM Setup",
        "Speed Optimization",
        "SSL Certificate"
      ],
      features: [
        "5 Custom Pages", 
        "Conversion-Focused Design", 
        "Basic SEO Setup", 
        "Contact Forms", 
        "Google Analytics",
        "Social Media Integration"
      ], 
      icon: Sparkles, 
      style: "basic", 
      cta: "Build My Site" 
    },
    { 
      name: "GROWTH", 
      price: "3,999", 
      period: "one-time", 
      desc: "Full website with CMS, booking system, and blog.", 
      sub: "Best Value",
      originalPrice: "5,499",
      bonuses: [
        "CMS Training Session (€400 value)", 
        "Booking System Integration", 
        "Google My Business Setup",
        "3 Rounds of Revisions",
        "1 Month Free Support"
      ],
      features: [
        "10 Custom Pages", 
        "Content Management System", 
        "Advanced SEO Setup", 
        "Booking/Calendar System", 
        "Blog with Categories",
        "Email Newsletter Integration"
      ], 
      icon: Zap, 
      style: "popular", 
      cta: "Build Platform" 
    },
    { 
      name: "E-COMMERCE", 
      price: "7,999", 
      period: "one-time", 
      desc: "Complete online store ready for sales from day one.", 
      sub: "Enterprise",
      originalPrice: "10,999",
      bonuses: [
        "Payment Gateway Setup", 
        "Inventory Management System", 
        "Email Automation Flows",
        "Launch Marketing Support",
        "90-Day Priority Support"
      ],
      features: [
        "Unlimited Products", 
        "Payment Processing", 
        "Inventory & Order Logic", 
        "Customer Portal", 
        "Abandoned Cart Recovery",
        "Multi-Currency Support"
      ], 
      icon: Crown, 
      style: "premium", 
      cta: "Launch Store" 
    }
  ],
  ai: [
    { 
      name: "PILOT", 
      price: "1,299", 
      period: "one-time", 
      desc: "14-day pilot to prove ROI before you commit.", 
      sub: "Risk-Free Trial",
      originalPrice: "1,999",
      bonuses: [
        "Full Implementation", 
        "Team Training Session", 
        "Performance Report",
        "No Monthly Lock-in",
        "Free Migration Support"
      ],
      features: [
        "1 AI Agent", 
        "Lead Capture Bot", 
        "24/7 Availability", 
        "CRM Integration", 
        "Custom Knowledge Base",
        "Slack/Teams Notifications"
      ], 
      icon: Sparkles, 
      style: "basic", 
      cta: "Start Pilot" 
    },
    { 
      name: "GROWTH", 
      price: "2,497", 
      period: "/month", 
      desc: "Full AI workforce for sales, support & operations.", 
      sub: "Most Popular • Replace 3-5 Staff",
      originalPrice: "3,997",
      bonuses: [
        "Dedicated Success Manager", 
        "Weekly Optimization Calls", 
        "Multi-Language Support (10+)",
        "Priority Response SLA",
        "Custom Integrations"
      ],
      features: [
        "3 AI Agents", 
        "Sales + Support + Ops", 
        "Unlimited Conversations", 
        "Advanced Analytics Dashboard", 
        "API Access",
        "Workflow Automation"
      ], 
      icon: Zap, 
      style: "popular", 
      cta: "Deploy AI Team" 
    },
    { 
      name: "ENTERPRISE", 
      price: "Custom", 
      period: "", 
      desc: "Tailored AI solutions for complex enterprise operations.", 
      sub: "Full Department Replacement",
      bonuses: [
        "Custom LLM Training", 
        "Dedicated Dev Team", 
        "SLA Guarantee (99.9%)",
        "On-Premise Option",
        "Compliance Audit Support"
      ],
      features: [
        "Unlimited Agents", 
        "Custom Integrations", 
        "White-Label Solutions", 
        "Enterprise Compliance", 
        "24/7 Priority Support",
        "Dedicated Infrastructure"
      ], 
      icon: Crown, 
      style: "premium", 
      cta: "Book Strategy Call" 
    }
  ]
};

const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
        x: [0, 50, 0],
        y: [0, -50, 0]
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-lime-200/40 rounded-full blur-[120px]"
    />
    <motion.div
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.2, 0.4, 0.2],
        x: [0, -30, 0]
      }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-[100px]"
    />
    <motion.div
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.2, 0.4, 0.2],
        y: [0, 40, 0]
      }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      className="absolute bottom-[-10%] left-[20%] w-[700px] h-[700px] bg-orange-200/40 rounded-full blur-[120px]"
    />
  </div>
);

// Inline pricing gate form
function PricingGateForm({ onUnlock }: { onUnlock: () => void }) {
  const [formData, setFormData] = useState({ name: '', email: '', company: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!formData.name.trim() || !formData.email.trim()) {
      setError('Please fill in your name and email');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xblnedyl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'Pricing Page - Price Reveal',
          timestamp: new Date().toISOString()
        })
      });

      if (response.ok) {
        onUnlock();
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Connection error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-xl mx-auto"
    >
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-8 md:p-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-slate-100 rounded-full">
            <Lock className="w-4 h-4 text-slate-600" />
            <span className="text-sm font-semibold text-slate-700">Personalized Pricing</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Get Your Custom Quote
          </h3>
          <p className="text-slate-600 leading-relaxed">
            Every business is unique. We tailor our packages to fit your specific needs and budget. 
            <span className="font-semibold text-slate-800"> Enter your details to see pricing.</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="h-12 rounded-xl border-slate-200 focus:border-slate-400"
              data-testid="input-gate-name"
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Work Email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="h-12 rounded-xl border-slate-200 focus:border-slate-400"
              data-testid="input-gate-email"
            />
          </div>
          <div>
            <Input
              type="text"
              placeholder="Company Name (Optional)"
              value={formData.company}
              onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
              className="h-12 rounded-xl border-slate-200 focus:border-slate-400"
              data-testid="input-gate-company"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full h-14 rounded-xl bg-slate-900 hover:bg-black text-white font-bold text-base"
            data-testid="button-reveal-pricing"
          >
            {isSubmitting ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                Reveal Pricing <ArrowRight className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </form>

        <div className="mt-6 pt-6 border-t border-slate-100 text-center">
          <p className="text-xs text-slate-500 mb-4">Or speak with us directly</p>
          <a 
            href="https://wa.me/35699263179?text=Hi%20OARC%20Digital%2C%20I%27m%20interested%20in%20your%20pricing%20packages"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold transition-colors"
            data-testid="button-whatsapp-pricing"
          >
            <SiWhatsapp className="w-5 h-5" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  );
}

// Floating WhatsApp button
function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/35699263179?text=Hi%20OARC%20Digital%2C%20I%27m%20interested%20in%20your%20services"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all group"
      data-testid="button-floating-whatsapp"
    >
      <SiWhatsapp className="w-6 h-6" />
      <span className="font-semibold hidden sm:inline">Chat with us</span>
    </a>
  );
}

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<'social' | 'web' | 'ai'>('social');
  const [pricingUnlocked, setPricingUnlocked] = useState(false);
  const activeTheme = pricingCategories.find(c => c.id === activeTab) || pricingCategories[0];

  return (
    <Layout>
      <SEOHead
        title="Pricing Plans | OARC Digital"
        description="Flexible plans built for growth. Choose your subscription."
        canonicalUrl={`https://oarcdigital.com${supportingPagesSEO.pricing.path}`}
        ogType={supportingPagesSEO.pricing.ogType}
      />

      <div className="min-h-screen bg-slate-50/50 font-sans text-slate-900 pt-32 pb-24 relative">
        <AnimatedBackground />

        {/* --- HERO HEADER --- */}
        <div className="container mx-auto px-6 max-w-7xl mb-16 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-serif font-medium tracking-tight mb-4 text-slate-900">
            A subscription built to <br />
            <span className={`italic text-transparent bg-clip-text bg-gradient-to-r ${activeTheme.gradient}`}>
              fuel your growth
            </span>
          </h1>
        </div>

        {/* --- SUPERSIDE SPLIT LAYOUT --- */}
        <div className="container mx-auto px-6 max-w-7xl mb-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-[500px]">

            {/* LEFT: Visually Rich Card */}
            <div className="relative rounded-[2.5rem] overflow-hidden p-10 md:p-16 flex flex-col justify-center bg-white shadow-2xl shadow-slate-200/50">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay" />
              {/* Animated Gradient Overlay */}
              <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${activeTheme.gradient}`} />

              <div className="relative z-10 max-w-lg">
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-slate-900 text-white rounded-full text-xs font-bold uppercase tracking-widest">
                  <Star className="w-3 h-3 text-yellow-400 fill-current" /> Founding Client Special
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6 leading-tight text-slate-900">
                  Flexible plans <br />
                  <span className="italic text-slate-500">for every stage.</span>
                </h2>
                <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
                  Lock in your founding rate instantly.
                  From asset production to full-scale AI automation, we move
                  <span className="text-slate-900 font-bold"> 10x faster</span> than traditional agencies.
                </p>
                <Link href="/contact">
                  <Button className="h-14 px-10 rounded-full bg-slate-900 text-white font-bold text-base hover:bg-black transition-all hover:scale-105 shadow-xl hover:shadow-2xl">
                    Book Strategy Call
                  </Button>
                </Link>
              </div>
            </div>

            {/* RIGHT: Feature Checklist (Dynamic Color) */}
            <div className={`relative rounded-[2.5rem] overflow-hidden p-10 md:p-16 flex flex-col justify-center transition-colors duration-500 ${activeTheme.bg}`}>
              {/* Interior Glow */}
              <div className="absolute inset-0 bg-white/10 mix-blend-overlay" />
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/20 blur-[80px] rounded-full" />

              <h3 className="relative z-10 text-3xl font-serif font-medium mb-10 text-slate-900 mix-blend-color-burn">
                Included in <span className="italic">all plans:</span>
              </h3>
              <div className="relative z-10 space-y-5">
                {sharedFeatures.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="p-1 rounded-full bg-black/5 group-hover:bg-black/10 transition-colors">
                      <Check className="w-4 h-4 text-slate-900 stroke-[3]" />
                    </div>
                    <span className="text-base font-bold text-slate-900/90 leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* --- TIER SELECTION --- */}
        <div className="container mx-auto px-6 max-w-7xl relative z-10">

          <div className="flex justify-center mb-16">
            <div className="inline-flex bg-white/80 backdrop-blur-md p-2 rounded-full border border-slate-200 shadow-lg">
              {pricingCategories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id as 'social' | 'web' | 'ai')}
                  className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${activeTab === cat.id
                      ? `bg-slate-900 text-white shadow-md`
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  data-testid={`tab-${cat.id}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* --- PRICING GATE OR CARDS --- */}
          {!pricingUnlocked ? (
            <div className="mb-32">
              <PricingGateForm onUnlock={() => setPricingUnlocked(true)} />
            </div>
          ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 items-start">
            <AnimatePresence mode="wait">
              {pricingData[activeTab].map((plan, i) => {
                const Icon = plan.icon;

                const isBasic = plan.style === 'basic';
                const isPopular = plan.style === 'popular';
                const isPremium = plan.style === 'premium';

                return (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                    className={`group relative p-8 rounded-[2rem] flex flex-col transition-all duration-300
                                    ${isBasic ? 'bg-white border border-slate-200 shadow-lg hover:shadow-xl' : ''}
                                    ${isPopular ? 'bg-white border-2 border-slate-900 shadow-2xl scale-[1.05] z-10' : ''}
                                    ${isPremium ? 'bg-slate-900 text-white shadow-2xl hover:translate-y-[-8px]' : ''}
                                `}
                    data-testid={`card-${plan.name.toLowerCase()}`}
                  >
                    {isPopular && (
                      <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg ${activeTheme.bg} text-slate-900`}>
                        Most Popular
                      </div>
                    )}

                    {/* Card Header */}
                    <div className="mb-8 flex items-start justify-between gap-2">
                      <div className={`p-3 rounded-2xl ${isPremium ? 'bg-white/10' : activeTheme.lightBg}`}>
                        <Icon className={`w-6 h-6 ${isPremium ? 'text-white' : activeTheme.accent}`} />
                      </div>
                      {isPremium && <Crown className="w-5 h-5 text-yellow-400 fill-current" />}
                    </div>

                    <div className="mb-6">
                      <h3 className={`text-2xl font-black mb-2 ${isPremium ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h3>
                      <p className={`text-sm leading-relaxed min-h-[40px] ${isPremium ? 'text-slate-400' : 'text-slate-500'}`}>{plan.desc}</p>
                    </div>

                    {/* Price Block */}
                    <div className={`mb-6 p-6 rounded-2xl text-center ${isPremium ? 'bg-white/5 border border-white/10' : 'bg-slate-50 border border-slate-100'}`}>
                      {plan.originalPrice && (
                        <div className={`text-sm line-through mb-1 ${isPremium ? 'text-slate-500' : 'text-slate-400'}`}>
                          Was €{plan.originalPrice}
                        </div>
                      )}
                      <div className={`flex items-center justify-center gap-1 ${isPremium ? 'text-white' : 'text-slate-900'}`}>
                        {plan.price !== 'Custom' && <span className="text-sm font-bold">€</span>}
                        <span className="text-5xl font-black tracking-tighter">{plan.price}</span>
                      </div>
                      <div className={`text-[10px] font-bold uppercase tracking-wider mt-2 ${isPremium ? 'text-slate-500' : 'text-slate-400'}`}>{plan.period}</div>
                      {plan.sub && <div className={`text-xs mt-2 font-bold ${isPremium ? 'text-lime-400' : activeTheme.accent}`}>{plan.sub}</div>}
                    </div>

                    {/* Bonuses */}
                    {plan.bonuses && plan.bonuses.length > 0 && (
                      <div className={`mb-6 p-4 rounded-xl ${isPremium ? 'bg-lime-400/10 border border-lime-400/20' : 'bg-lime-50 border border-lime-200'}`}>
                        <div className={`text-xs font-bold uppercase tracking-wider mb-3 ${isPremium ? 'text-lime-400' : 'text-lime-700'}`}>
                          Included Bonuses
                        </div>
                        <div className="space-y-2">
                          {plan.bonuses.map((bonus: string) => (
                            <div key={bonus} className="flex items-center gap-2 text-xs font-medium">
                              <Check className={`w-3 h-3 flex-shrink-0 ${isPremium ? 'text-lime-400' : 'text-lime-600'}`} />
                              <span className={isPremium ? 'text-lime-200' : 'text-lime-800'}>{bonus}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Features */}
                    <div className="flex-grow space-y-3 mb-10">
                      <div className={`text-xs font-bold uppercase tracking-wider mb-3 ${isPremium ? 'text-slate-500' : 'text-slate-400'}`}>
                        What's Included
                      </div>
                      {plan.features.map((feat: string) => (
                        <div key={feat} className="flex items-center gap-3 text-sm font-medium">
                          <div className={`w-1.5 h-1.5 rounded-full ${isPremium ? 'bg-lime-400' : 'bg-slate-300 group-hover:bg-slate-900'}`} />
                          <span className={isPremium ? 'text-slate-200' : 'text-slate-700'}>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <Button className={`w-full h-14 rounded-full font-bold text-base transition-all ${isPopular
                        ? `bg-slate-900 text-white hover:bg-black shadow-lg`
                        : isPremium
                          ? 'bg-white text-black hover:bg-slate-100'
                          : 'bg-white border-2 border-slate-200 text-slate-900 hover:border-slate-900'
                      }`}
                      data-testid={`button-${plan.name.toLowerCase()}`}
                    >
                      {plan.cta}
                    </Button>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
          )}

          {/* --- ENTERPRISE SECTION --- */}
          <div className="rounded-[2.5rem] bg-slate-900 text-white p-10 md:p-20 relative overflow-hidden shadow-2xl">
            {/* Abstract Pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-600 to-lime-500 opacity-20 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-6 text-lime-400 text-xs font-bold uppercase tracking-widest">
                  <Building2 className="w-4 h-4" /> Enterprise
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6 leading-tight">
                  Need a custom <br />
                  <span className="italic text-slate-400">enterprise solution?</span>
                </h2>
                <ul className="space-y-4 mb-10">
                  {[
                    "Dedicated creative teams (no shared resources)",
                    "Custom AI model training on your brand data",
                    "SLA-backed delivery guarantees",
                    "Single Sign-On (SSO) & Advanced Security"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300 font-medium">
                      <Check className="w-5 h-5 text-lime-400" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button 
                    className="h-14 px-8 rounded-full bg-white text-black font-bold hover:bg-slate-200 transition-colors shadow-lg"
                    data-testid="button-enterprise"
                  >
                    Talk to Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </Layout>
  );
}
