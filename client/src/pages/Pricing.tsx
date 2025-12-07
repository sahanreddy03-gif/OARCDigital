import { useState } from 'react';
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { supportingPagesSEO } from "@/data/seoMetadata";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Sparkles, TrendingUp, Users, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';

const pricingCategories = [
  {
    id: 'social',
    label: 'Social Creative',
    icon: Sparkles,
    color: 'bg-lime-400',
    text: 'text-lime-900',
    gradient: 'from-lime-400 to-green-400'
  },
  {
    id: 'web',
    label: 'Web Experience',
    icon: TrendingUp,
    color: 'bg-orange-500',
    text: 'text-orange-900',
    gradient: 'from-orange-400 to-amber-500'
  },
  {
    id: 'ai',
    label: 'AI Employees',
    icon: Users,
    color: 'bg-blue-600',
    text: 'text-blue-900',
    gradient: 'from-blue-500 to-indigo-600'
  }
];

const pricingData: Record<string, Array<{
  name: string;
  price: string;
  period: string;
  desc: string;
  daily?: string;
  sub?: string;
  features: string[];
  extras: string[];
  cta: string;
  popular: boolean;
}>> = {
  social: [
    {
      name: "STARTER",
      price: "299",
      period: "/month",
      desc: "Essential brand presence for startups.",
      daily: "€10/day",
      features: ["16 High-Fidelity Posts", "1 Primary Platform", "Custom Design System", "Monthly Impact Report"],
      extras: ["Revenue Dashboard", "Rate Lock Guarantee"],
      cta: "Start Basic",
      popular: false
    },
    {
      name: "GROWTH",
      price: "549",
      period: "/month",
      desc: "Rapid scaling for ambitious brands.",
      daily: "€18/day",
      features: ["24 High-Fidelity Posts", "2 Platforms (FB/IG/LI)", "4 Short-Form Videos", "Community Management"],
      extras: ["Content Repurposing AI", "Priority Support (15m)", "Brand Voice Model"],
      cta: "Accelerate Growth",
      popular: true
    },
    {
      name: "SCALE",
      price: "895",
      period: "/month",
      desc: "Market dominance and daily output.",
      daily: "€30/day",
      features: ["Daily Posting (32/mo)", "Multi-Channel (3+)", "2 Cinematic Videos", "Influencer Outreach"],
      extras: ["Revenue Guarantee", "Dedicated Manager", "White-Glove Onboarding"],
      cta: "Dominate Market",
      popular: false
    }
  ],
  web: [
    {
      name: "ESSENTIALS",
      price: "995",
      period: " one-time",
      desc: "Professional landing page system.",
      sub: "+ €49/mo hosting",
      features: ["5-Page Brand Site", "Mobile-First Design", "SEO Foundation", "Contact Automation"],
      extras: ["AI Chatbot Lite", "3 Months Free Hosting"],
      cta: "Build Foundation",
      popular: false
    },
    {
      name: "GROWTH PLATFORM",
      price: "1,995",
      period: " one-time",
      desc: "Conversion-focused growth engine.",
      sub: "+ €99/mo hosting",
      features: ["10-Page Custom Build", "Booking Engine", "CMS / Blog System", "Lead Magnets"],
      extras: ["Performance Reporting", "Edit-Yourself Training"],
      cta: "Build Growth",
      popular: true
    },
    {
      name: "E-COMMERCE",
      price: "3,995",
      period: " one-time",
      desc: "Full-scale digital storefront.",
      sub: "+ €199/mo hosting",
      features: ["50-Product Catalog", "Global Payment Gateways", "Inventory Sync", "Shipping Logic"],
      extras: ["Abandoned Cart AI", "Revenue Dashboard"],
      cta: "Launch Store",
      popular: false
    }
  ],
  ai: [
    {
      name: "AI ASSISTANT",
      price: "1,495",
      period: " one-time",
      desc: "24/7 Intelligent Customer Support.",
      sub: "+ €149/mo maintain",
      features: ["Custom NLP Chatbot", "100+ FAQ Capacity", "Lead Qualification", "CRM Injection"],
      extras: ["Lead Reports", "Priority Support"],
      cta: "Deploy Assistant",
      popular: false
    },
    {
      name: "WORKFLOW AUTO",
      price: "2,995",
      period: " one-time",
      desc: "End-to-end operational automation.",
      sub: "+ €295/mo maintain",
      features: ["3 Custom Workflows", "Email Automation", "Appointment Setting", "Data Entry Bots"],
      extras: ["Time-Saved Guarantee", "ROI Tracking"],
      cta: "Automate Ops",
      popular: true
    },
    {
      name: "CUSTOM TEAM",
      price: "Custom",
      period: "",
      desc: "Enterprise-grade AI workforce.",
      sub: "Scope dependent",
      features: ["Full AI Department", "Sales/Ops/Marketing", "LLM Fine-Tuning", "Deep API Integration"],
      extras: ["Performance Guarantee", "Founding Partner Status"],
      cta: "Book Consult",
      popular: false
    }
  ]
};

export default function Pricing() {
  const [activeTab, setActiveTab] = useState('social');
  const activeCategory = pricingCategories.find(c => c.id === activeTab) || pricingCategories[0];

  return (
    <Layout>
      <SEOHead
        title="Pricing | OARC Digital"
        description="Transparent pricing for AI marketing. Founding rates locked in."
        canonicalUrl={`https://oarcdigital.com${supportingPagesSEO.pricing.path}`}
        ogType={supportingPagesSEO.pricing.ogType}
      />

      <div className="min-h-screen bg-slate-50 font-sans pt-28 pb-24">

        <div className="container mx-auto px-6">

          <div className="text-center max-w-4xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-slate-900 text-xs font-bold tracking-widest uppercase mb-6"
              data-testid="badge-founding-program"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
              </span>
              Founding Client Program: 14/20 Spots Taken
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight mb-6"
              data-testid="heading-pricing-title"
            >
              Agencies Charge Fortunes.<br />
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${activeCategory.gradient}`}>
                We Change Parameters.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 font-medium max-w-2xl mx-auto"
            >
              Lock in "Startup Rates" for agency-grade work.
              <span className="text-slate-900 font-bold"> 100% Satisfaction or Refund Guaranteed.</span>
            </motion.p>
          </div>

          <div className="flex justify-center mb-16">
            <div className="bg-white p-2 rounded-full shadow-lg border border-slate-100 inline-flex gap-1 flex-wrap justify-center">
              {pricingCategories.map((cat) => {
                const isActive = activeTab === cat.id;
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`relative px-4 sm:px-6 py-3 rounded-full flex items-center gap-2 text-sm font-bold transition-all duration-300 ${isActive
                        ? 'bg-slate-900 text-white shadow-md'
                        : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    data-testid={`tab-${cat.id}`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                    <span className="hidden sm:inline">{cat.label}</span>
                    <span className="sm:hidden">{cat.label.split(' ')[0]}</span>
                  </button>
                )
              })}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "backOut" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto"
            >
              {pricingData[activeTab].map((plan, i) => {
                const isPop = plan.popular;
                return (
                  <motion.div
                    key={i}
                    whileHover={{ y: -12 }}
                    className={`relative p-6 lg:p-8 rounded-3xl border flex flex-col transition-all duration-300 bg-white
                          ${isPop
                        ? 'border-slate-300 shadow-2xl md:scale-105 z-10 ring-4 ring-slate-50'
                        : 'border-slate-100 shadow-lg hover:shadow-xl'
                      }
                       `}
                    data-testid={`card-pricing-${plan.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {isPop && (
                      <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 ${activeCategory.color} ${activeCategory.text} text-xs font-black uppercase tracking-widest rounded-full shadow-lg`}>
                        Most Popular
                      </div>
                    )}

                    <div className="mb-6">
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{plan.name}</h3>
                      <p className="text-sm text-slate-500 font-medium leading-relaxed">{plan.desc}</p>
                    </div>

                    <div className="mb-8 p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                      <div className="flex items-baseline justify-center gap-1 text-slate-900">
                        {plan.price !== "Custom" && <span className="text-sm font-bold">€</span>}
                        <span className="text-4xl lg:text-5xl font-black tracking-tighter">{plan.price}</span>
                      </div>
                      <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">{plan.period}</div>
                      {plan.sub && (
                        <div className="text-xs text-slate-500 mt-2">{plan.sub}</div>
                      )}
                    </div>

                    <div className="flex-grow space-y-4 mb-8">
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">What's Included</div>
                      {plan.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                          <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${isPop ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-600'}`}>
                            <Check className="w-3 h-3" />
                          </div>
                          {feat}
                        </div>
                      ))}

                      <div className={`mt-6 p-4 rounded-xl border ${isPop ? 'bg-slate-900 text-white border-slate-900' : 'bg-white border-dashed border-slate-300'}`}>
                        <div className="flex items-center gap-2 mb-3">
                          <Star className={`w-4 h-4 ${isPop ? 'text-yellow-400 fill-yellow-400' : 'text-slate-400'}`} />
                          <span className={`text-xs font-bold uppercase tracking-wider ${isPop ? 'text-white' : 'text-slate-500'}`}>Founding Extras (Free)</span>
                        </div>
                        <div className="space-y-2">
                          {plan.extras.map((extra) => (
                            <div key={extra} className={`text-xs flex items-center gap-2 ${isPop ? 'text-slate-300' : 'text-slate-500'}`}>
                              <div className={`w-1 h-1 rounded-full ${isPop ? 'bg-yellow-400' : 'bg-slate-400'}`} />
                              {extra}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Link href="/contact">
                      <Button
                        className={`w-full h-14 rounded-full font-bold text-base transition-all shadow-lg hover:shadow-xl ${isPop
                            ? `bg-gradient-to-r ${activeCategory.gradient} text-white border-none hover:scale-[1.02]`
                            : 'bg-white border-2 border-slate-200 text-slate-900 hover:border-slate-900 hover:bg-slate-50'
                          }`}
                        data-testid={`button-${plan.cta.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {plan.cta}
                      </Button>
                    </Link>

                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>

          <div className="mt-24 pt-16 border-t border-slate-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
              <div>
                <h4 className="font-black text-3xl text-slate-900 mb-1" data-testid="stat-refund">100%</h4>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Refund Guarantee</p>
              </div>
              <div>
                <h4 className="font-black text-3xl text-slate-900 mb-1" data-testid="stat-vision">20/20</h4>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Vision Clarity</p>
              </div>
              <div>
                <h4 className="font-black text-3xl text-slate-900 mb-1" data-testid="stat-roi">ROI+</h4>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Metrics Focused</p>
              </div>
              <div>
                <Link href="/contact">
                  <div className="cursor-pointer group flex items-center justify-center md:justify-start gap-2 text-slate-900 font-bold" data-testid="link-book-call">
                    Book Strategy Call
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}
