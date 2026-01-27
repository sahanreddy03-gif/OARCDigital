import { useState } from 'react';
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { supportingPagesSEO } from "@/data/seoMetadata";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Star, Building2, Zap, Sparkles, Crown, MessageCircle, Lock, ArrowRight, Loader2, Rocket, Target, Clock, Briefcase, Gift, Shield, TrendingUp, Users, Palette, Video, Globe, Bot, Headphones, BarChart3, Smartphone, ShoppingCart, Mail, Calendar } from 'lucide-react';
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

const valueProps = [
  {
    icon: Target,
    title: "Pay for Outcomes",
    desc: "Not hours. Not outputs. You pay for results that move your revenue needle."
  },
  {
    icon: Clock,
    title: "10x Faster Delivery",
    desc: "What takes agencies 4 weeks, we deliver in days. AI-powered speed."
  },
  {
    icon: Palette,
    title: "Custom to Your Needs",
    desc: "Every package tailored to your industry, goals, and growth stage."
  },
  {
    icon: Rocket,
    title: "Breaking the Old Model",
    desc: "No retainers. No bloated teams. Just pure execution and measurable results."
  }
];

const pricingData = {
  social: [
    {
      name: "STARTER",
      price: "799",
      period: "/month",
      desc: "Build a consistent social presence with video content that converts followers into customers.",
      sub: "Save €800+ vs traditional agencies",
      originalPrice: "1,299",
      guarantee: "30-day money-back guarantee",
      bonuses: [
        { name: "Brand Style Guide", value: "€300", desc: "Complete visual identity system" },
        { name: "Content Calendar Template", value: "€150", desc: "12-month strategic planning tool" },
        { name: "30-Day Strategy Session", value: "€200", desc: "1-on-1 with our creative director" },
        { name: "Hashtag Research Pack", value: "€100", desc: "Industry-specific hashtag strategy" },
        { name: "Free Stock Library Access", value: "€240/yr", desc: "Premium assets unlimited" },
        { name: "Competitor Analysis Report", value: "€250", desc: "Detailed market positioning insights" }
      ],
      features: [
        { name: "12 High-Fidelity Posts/mo", desc: "Scroll-stopping designs that convert" },
        { name: "2 Short-Form Videos/mo", desc: "Reels, TikToks, Stories ready to post" },
        { name: "1 Platform Management", desc: "Full optimization for your main channel" },
        { name: "Custom Design System", desc: "Templates matching your brand DNA" },
        { name: "Monthly Performance Report", desc: "Data-driven insights for growth" },
        { name: "48-Hour Turnaround", desc: "Request today, receive tomorrow" },
        { name: "Dedicated Account Manager", desc: "Your single point of contact" },
        { name: "Unlimited Revisions", desc: "Until you're 100% satisfied" }
      ],
      icon: Sparkles,
      style: "basic",
      cta: "Get Started"
    },
    {
      name: "GROWTH",
      price: "1,899",
      period: "/month",
      desc: "Scale across multiple platforms with professional video production and community management.",
      sub: "Most Popular • Best Value",
      originalPrice: "2,999",
      guarantee: "ROI guarantee or we work free",
      bonuses: [
        { name: "Deep Competitor Analysis", value: "€500", desc: "5 competitors fully analyzed" },
        { name: "Engagement Strategy Blueprint", value: "€400", desc: "Proven tactics for growth" },
        { name: "Priority 24-Hour Support", value: "€300/mo", desc: "Direct Slack/WhatsApp access" },
        { name: "Quarterly Brand Audit", value: "€600", desc: "Stay ahead of market trends" },
        { name: "Weekly Trend Reports", value: "€200/mo", desc: "Never miss viral opportunities" },
        { name: "Influencer Outreach Templates", value: "€150", desc: "Ready-to-send collaboration scripts" },
        { name: "UGC Content Strategy", value: "€350", desc: "Turn customers into creators" },
        { name: "Crisis Management Protocol", value: "€400", desc: "24/7 reputation protection" }
      ],
      features: [
        { name: "24 High-Fidelity Posts/mo", desc: "Daily content for maximum visibility" },
        { name: "8 Professional Videos/mo", desc: "Studio-quality production included" },
        { name: "3 Platform Management", desc: "Instagram, TikTok, LinkedIn covered" },
        { name: "Community Management", desc: "We engage with your audience daily" },
        { name: "Influencer Outreach", desc: "Partnership opportunities sourced" },
        { name: "Story Templates Pack", desc: "50+ on-brand templates" },
        { name: "Performance Dashboard", desc: "Real-time analytics access" },
        { name: "A/B Testing", desc: "Data-driven creative optimization" }
      ],
      icon: Zap,
      style: "popular",
      cta: "Accelerate Growth"
    },
    {
      name: "SCALE",
      price: "3,499",
      period: "/month",
      desc: "Your full creative department at a fraction of in-house cost. Enterprise-grade output.",
      sub: "Enterprise Grade • Full Team",
      originalPrice: "5,999",
      guarantee: "Performance-based pricing available",
      bonuses: [
        { name: "Dedicated Creative Lead", value: "€2,000/mo", desc: "Senior creative on your account" },
        { name: "Quarterly Brand Refresh", value: "€1,500", desc: "Stay fresh, never stale" },
        { name: "UGC Creator Network Access", value: "€800/mo", desc: "Pre-vetted creators on demand" },
        { name: "White-Label Reporting", value: "€500/mo", desc: "Your brand, our insights" },
        { name: "VIP Strategy Calls Monthly", value: "€600/mo", desc: "Direct access to founders" },
        { name: "Crisis Management 24/7", value: "€1,000/mo", desc: "Reputation protection guaranteed" },
        { name: "Paid Ad Creative Library", value: "€2,000", desc: "50+ proven ad templates" },
        { name: "Priority Feature Access", value: "Priceless", desc: "Beta features before anyone" }
      ],
      features: [
        { name: "Daily Posting (32/mo)", desc: "Omnichannel presence achieved" },
        { name: "16 Cinematic Videos/mo", desc: "Production value that stands out" },
        { name: "All Platforms Managed", desc: "Instagram, TikTok, LinkedIn, X, YouTube" },
        { name: "Paid Ad Creative", desc: "Performance-optimized ad sets" },
        { name: "Influencer Campaigns", desc: "End-to-end campaign management" },
        { name: "Real-Time Analytics", desc: "Dashboard with live metrics" },
        { name: "Unlimited Revisions", desc: "Perfect is the only standard" },
        { name: "Same-Day Emergency", desc: "Rush requests handled immediately" }
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
      desc: "Professional landing page engineered to convert visitors into paying customers.", 
      sub: "Includes 3 months free hosting",
      originalPrice: "2,299",
      guarantee: "Conversion rate guarantee",
      bonuses: [
        { name: "SEO Optimization", value: "€300", desc: "Rank higher from day one" },
        { name: "Mobile-First Design", value: "€200", desc: "60% of traffic is mobile" },
        { name: "Contact Form + CRM Setup", value: "€250", desc: "Leads flow directly to you" },
        { name: "Speed Optimization", value: "€150", desc: "Sub-2s load times" },
        { name: "SSL Certificate", value: "€100/yr", desc: "Security that builds trust" },
        { name: "Google Analytics Setup", value: "€150", desc: "Track every visitor" }
      ],
      features: [
        { name: "5 Custom Pages", desc: "Home, About, Services, Contact, FAQ" },
        { name: "Conversion-Focused Design", desc: "Psychology-based layouts that sell" },
        { name: "Basic SEO Setup", desc: "Meta tags, schema, sitemap included" },
        { name: "Contact Forms", desc: "Multi-step forms for better leads" },
        { name: "Google Analytics", desc: "Full tracking implementation" },
        { name: "Social Media Integration", desc: "Connect all your channels" },
        { name: "2 Rounds of Revisions", desc: "We refine until perfect" },
        { name: "48-Hour Turnaround", desc: "Live faster than competitors" }
      ], 
      icon: Sparkles, 
      style: "basic", 
      cta: "Build My Site" 
    },
    { 
      name: "GROWTH", 
      price: "3,999", 
      period: "one-time", 
      desc: "Full website with CMS, booking system, and blog. Everything a growing business needs.", 
      sub: "Best Value • Most Popular",
      originalPrice: "5,499",
      guarantee: "Launch in 14 days or 20% off",
      bonuses: [
        { name: "CMS Training Session", value: "€400", desc: "Manage content yourself" },
        { name: "Booking System Integration", value: "€500", desc: "Calendly/Cal.com built in" },
        { name: "Google My Business Setup", value: "€200", desc: "Local SEO dominance" },
        { name: "3 Rounds of Revisions", value: "€300", desc: "Perfect every detail" },
        { name: "1 Month Free Support", value: "€500", desc: "We're here post-launch" },
        { name: "Email Newsletter Setup", value: "€300", desc: "Mailchimp/ConvertKit ready" },
        { name: "Live Chat Widget", value: "€200", desc: "Capture leads 24/7" },
        { name: "Performance Audit", value: "€250", desc: "30-day post-launch review" }
      ],
      features: [
        { name: "10 Custom Pages", desc: "Complete site architecture" },
        { name: "Content Management System", desc: "Update content without code" },
        { name: "Advanced SEO Setup", desc: "Technical SEO + content optimization" },
        { name: "Booking/Calendar System", desc: "Automate appointment scheduling" },
        { name: "Blog with Categories", desc: "Build authority with content" },
        { name: "Email Newsletter Integration", desc: "Grow your list automatically" },
        { name: "Custom Animations", desc: "Modern, engaging interactions" },
        { name: "Multi-Language Ready", desc: "Expand to new markets" }
      ], 
      icon: Zap, 
      style: "popular", 
      cta: "Build Platform" 
    },
    { 
      name: "E-COMMERCE", 
      price: "7,999", 
      period: "one-time", 
      desc: "Complete online store ready to sell from day one. Built for scale.", 
      sub: "Enterprise • Revenue-Ready",
      originalPrice: "10,999",
      guarantee: "First €10K in sales or extended support free",
      bonuses: [
        { name: "Payment Gateway Setup", value: "€500", desc: "Stripe/PayPal configured" },
        { name: "Inventory Management", value: "€800", desc: "Never oversell again" },
        { name: "Email Automation Flows", value: "€1,000", desc: "Welcome, abandon cart, win-back" },
        { name: "Launch Marketing Support", value: "€1,500", desc: "30-day growth sprint included" },
        { name: "90-Day Priority Support", value: "€1,500", desc: "Direct access to dev team" },
        { name: "Product Photography Guide", value: "€300", desc: "Shoot products that sell" },
        { name: "SEO Product Optimization", value: "€500", desc: "Rank in Google Shopping" },
        { name: "Facebook Pixel + GA4", value: "€400", desc: "Track every conversion" }
      ],
      features: [
        { name: "Unlimited Products", desc: "Scale without limits" },
        { name: "Payment Processing", desc: "Stripe, PayPal, Apple Pay, Google Pay" },
        { name: "Inventory & Order Logic", desc: "Automated stock management" },
        { name: "Customer Portal", desc: "Order history, tracking, returns" },
        { name: "Abandoned Cart Recovery", desc: "Recover 15-20% of lost sales" },
        { name: "Multi-Currency Support", desc: "Sell globally, bill locally" },
        { name: "Discount & Coupon System", desc: "Run promotions that convert" },
        { name: "Reviews & Ratings", desc: "Social proof built in" }
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
      desc: "14-day pilot to prove ROI before you commit. Zero risk, maximum clarity.", 
      sub: "Risk-Free Trial • Prove ROI First",
      originalPrice: "1,999",
      guarantee: "Full refund if no ROI shown",
      bonuses: [
        { name: "Full Implementation", value: "€500", desc: "We handle everything" },
        { name: "Team Training Session", value: "€300", desc: "Get your team onboarded" },
        { name: "Performance Report", value: "€200", desc: "Detailed ROI analysis" },
        { name: "No Monthly Lock-in", value: "Priceless", desc: "Cancel anytime, no questions" },
        { name: "Free Migration Support", value: "€400", desc: "Move from any platform" },
        { name: "Custom Knowledge Base", value: "€300", desc: "Train AI on your business" }
      ],
      features: [
        { name: "1 AI Agent", desc: "Sales, support, or booking specialist" },
        { name: "Lead Capture Bot", desc: "Qualify leads while you sleep" },
        { name: "24/7 Availability", desc: "Never miss a lead again" },
        { name: "CRM Integration", desc: "Syncs with HubSpot, Salesforce, etc." },
        { name: "Custom Knowledge Base", desc: "Trained on your business" },
        { name: "Slack/Teams Notifications", desc: "Real-time alerts for hot leads" },
        { name: "Conversation Analytics", desc: "Understand what customers ask" },
        { name: "Human Handoff", desc: "Seamless escalation when needed" }
      ], 
      icon: Sparkles, 
      style: "basic", 
      cta: "Start Pilot" 
    },
    { 
      name: "GROWTH", 
      price: "2,497", 
      period: "/month", 
      desc: "Full AI workforce replacing 3-5 staff for sales, support & operations.", 
      sub: "Most Popular • Replace 3-5 Staff",
      originalPrice: "3,997",
      guarantee: "Beat your current cost per lead or free",
      bonuses: [
        { name: "Dedicated Success Manager", value: "€800/mo", desc: "Your AI optimization expert" },
        { name: "Weekly Optimization Calls", value: "€600/mo", desc: "Continuous improvement" },
        { name: "Multi-Language Support", value: "€500", desc: "10+ languages included" },
        { name: "Priority Response SLA", value: "€400/mo", desc: "4-hour response guarantee" },
        { name: "Custom Integrations", value: "€1,000", desc: "Connect to any tool" },
        { name: "Advanced Analytics", value: "€500/mo", desc: "Revenue attribution dashboard" },
        { name: "Voice AI Add-on Ready", value: "€300", desc: "Phone support automation" },
        { name: "Quarterly Strategy Review", value: "€600", desc: "Roadmap your AI expansion" }
      ],
      features: [
        { name: "3 AI Agents", desc: "Sales + Support + Operations covered" },
        { name: "Unlimited Conversations", desc: "No per-message fees" },
        { name: "Advanced Analytics", desc: "Track every metric that matters" },
        { name: "API Access", desc: "Build custom workflows" },
        { name: "Workflow Automation", desc: "Trigger actions automatically" },
        { name: "Multi-Channel", desc: "Website, WhatsApp, Instagram, Email" },
        { name: "Custom Personas", desc: "Match your brand voice perfectly" },
        { name: "A/B Testing", desc: "Optimize conversion rates" }
      ], 
      icon: Zap, 
      style: "popular", 
      cta: "Deploy AI Team" 
    },
    { 
      name: "ENTERPRISE", 
      price: "Custom", 
      period: "", 
      desc: "Tailored AI solutions for complex enterprise operations. Full department replacement.", 
      sub: "Full Department Replacement",
      guarantee: "SLA-backed performance guarantees",
      bonuses: [
        { name: "Custom LLM Training", value: "€5,000+", desc: "AI trained on your data" },
        { name: "Dedicated Dev Team", value: "€3,000/mo", desc: "Engineers on your account" },
        { name: "SLA Guarantee (99.9%)", value: "Enterprise", desc: "Uptime you can bank on" },
        { name: "On-Premise Option", value: "€10,000+", desc: "Data stays with you" },
        { name: "Compliance Audit Support", value: "€2,000", desc: "GDPR, HIPAA, SOC2 ready" },
        { name: "24/7 Priority Support", value: "€2,000/mo", desc: "Dedicated support team" },
        { name: "Custom Reporting", value: "€1,000", desc: "Executive dashboards" },
        { name: "Quarterly Business Reviews", value: "€1,500", desc: "Strategic partnership" }
      ],
      features: [
        { name: "Unlimited Agents", desc: "Scale without limits" },
        { name: "Custom Integrations", desc: "Connect to any enterprise tool" },
        { name: "White-Label Solutions", desc: "Your brand, our technology" },
        { name: "Enterprise Compliance", desc: "GDPR, HIPAA, SOC2 compliant" },
        { name: "24/7 Priority Support", desc: "Dedicated support team" },
        { name: "Dedicated Infrastructure", desc: "Isolated, secure, fast" },
        { name: "Advanced Security", desc: "SSO, audit logs, encryption" },
        { name: "Revenue Guarantee", desc: "Performance-based pricing" }
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

// Compact inline unlock form
function PriceUnlockForm({ onUnlock }: { onUnlock: () => void }) {
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
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-slate-900 rounded-2xl p-6 md:p-8 text-white max-w-lg mx-auto"
    >
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 mb-3 px-3 py-1.5 bg-lime-500/20 text-lime-400 rounded-full text-xs font-bold">
          <Lock className="w-3 h-3" />
          Unlock Custom Pricing
        </div>
        <h3 className="text-xl font-bold mb-2">See Your Personalized Rates</h3>
        <p className="text-slate-400 text-sm">We tailor pricing to your specific needs. Quick form, instant access.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          className="h-11 rounded-xl bg-white/10 border-white/20 text-white placeholder:text-slate-400"
          data-testid="input-unlock-name"
        />
        <Input
          type="email"
          placeholder="Work Email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          className="h-11 rounded-xl bg-white/10 border-white/20 text-white placeholder:text-slate-400"
          data-testid="input-unlock-email"
        />
        <Input
          type="text"
          placeholder="Company (Optional)"
          value={formData.company}
          onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
          className="h-11 rounded-xl bg-white/10 border-white/20 text-white placeholder:text-slate-400"
          data-testid="input-unlock-company"
        />

        {error && <p className="text-red-400 text-sm text-center">{error}</p>}

        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full h-12 rounded-xl bg-lime-500 hover:bg-lime-400 text-slate-900 font-bold"
          data-testid="button-unlock-pricing"
        >
          {isSubmitting ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              Reveal All Prices <ArrowRight className="w-4 h-4 ml-2" />
            </>
          )}
        </Button>
      </form>

      <div className="mt-4 pt-4 border-t border-white/10 text-center">
        <a 
          href="https://wa.me/35699263179?text=Hi%20OARC%20Digital%2C%20I%27d%20like%20to%20discuss%20pricing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
          data-testid="link-whatsapp-unlock"
        >
          <SiWhatsapp className="w-4 h-4 text-green-500" />
          Or chat with us on WhatsApp
        </a>
      </div>
    </motion.div>
  );
}

// Blurred price display
function BlurredPrice({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="group relative cursor-pointer w-full"
      data-testid="button-reveal-price"
    >
      <div className="relative overflow-hidden rounded-xl p-4 bg-slate-100 border border-slate-200 hover:border-slate-300 transition-all">
        <div className="flex items-center justify-center gap-2">
          <Lock className="w-4 h-4 text-slate-400" />
          <span className="font-semibold text-slate-600 group-hover:text-slate-800 transition-colors">
            Unlock Price
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
      </div>
    </button>
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
  const [showUnlockModal, setShowUnlockModal] = useState(false);
  const activeTheme = pricingCategories.find(c => c.id === activeTab) || pricingCategories[0];

  const handleUnlockClick = () => {
    setShowUnlockModal(true);
  };

  const handleUnlock = () => {
    setPricingUnlocked(true);
    setShowUnlockModal(false);
  };

  return (
    <Layout>
      <SEOHead
        title="Pricing Plans | OARC Digital"
        description="Flexible plans built for growth. Pay for outcomes, not outputs. 10x faster than traditional agencies."
        canonicalUrl={`https://oarcdigital.com${supportingPagesSEO.pricing.path}`}
        ogType={supportingPagesSEO.pricing.ogType}
      />

      <div className="min-h-screen bg-slate-50/50 font-sans text-slate-900 pt-32 pb-24 relative">
        <AnimatedBackground />

        {/* --- HERO HEADER --- */}
        <div className="container mx-auto px-6 max-w-7xl mb-12 text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-slate-900 text-white rounded-full text-xs font-bold uppercase tracking-widest">
            <Rocket className="w-3 h-3 text-lime-400" /> Breaking the Old Agency Model
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-medium tracking-tight mb-6 text-slate-900">
            Pay for <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-green-600">outcomes</span>,<br />
            not outputs
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Every package custom-tailored to your business. More value, faster delivery, measurable results.
          </p>
        </div>

        {/* --- VALUE PROPS --- */}
        <div className="container mx-auto px-6 max-w-6xl mb-20 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {valueProps.map((prop, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-5 shadow-lg border border-slate-100"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center mb-3">
                  <prop.icon className="w-5 h-5 text-lime-400" />
                </div>
                <h3 className="font-bold text-slate-900 mb-1">{prop.title}</h3>
                <p className="text-sm text-slate-500">{prop.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- TIER SELECTION --- */}
        <div className="container mx-auto px-6 max-w-7xl relative z-10">

          <div className="flex justify-center mb-12">
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

          {/* --- PRICING CARDS (Always Visible) --- */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            <AnimatePresence mode="wait">
              {pricingData[activeTab].map((plan, i) => {
                const Icon = plan.icon;
                const isBasic = plan.style === 'basic';
                const isPopular = plan.style === 'popular';
                const isPremium = plan.style === 'premium';

                return (
                  <motion.div
                    key={`${activeTab}-${plan.name}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                    className={`group relative rounded-[2rem] flex flex-col transition-all duration-300 overflow-hidden
                      ${isBasic ? 'bg-white border border-slate-200 shadow-lg' : ''}
                      ${isPopular ? 'bg-white border-2 border-slate-900 shadow-2xl lg:scale-[1.02] z-10' : ''}
                      ${isPremium ? 'bg-slate-900 text-white shadow-2xl' : ''}
                    `}
                    data-testid={`card-${plan.name.toLowerCase()}`}
                  >
                    {isPopular && (
                      <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg ${activeTheme.bg} text-slate-900`}>
                        Most Popular
                      </div>
                    )}

                    <div className="p-8">
                      {/* Card Header */}
                      <div className="mb-6 flex items-start justify-between gap-2">
                        <div className={`p-3 rounded-2xl ${isPremium ? 'bg-white/10' : activeTheme.lightBg}`}>
                          <Icon className={`w-6 h-6 ${isPremium ? 'text-white' : activeTheme.accent}`} />
                        </div>
                        {isPremium && <Crown className="w-5 h-5 text-yellow-400 fill-current" />}
                      </div>

                      <div className="mb-6">
                        <h3 className={`text-2xl font-black mb-2 ${isPremium ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h3>
                        <p className={`text-sm leading-relaxed ${isPremium ? 'text-slate-400' : 'text-slate-500'}`}>{plan.desc}</p>
                      </div>

                      {/* Price Block */}
                      <div className="mb-6">
                        {pricingUnlocked ? (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className={`p-4 rounded-2xl text-center ${isPremium ? 'bg-white/5 border border-white/10' : 'bg-slate-50 border border-slate-100'}`}
                          >
                            {plan.originalPrice && (
                              <span className={`text-sm line-through ${isPremium ? 'text-slate-500' : 'text-slate-400'}`}>
                                €{plan.originalPrice}
                              </span>
                            )}
                            <div className="flex items-baseline justify-center gap-1">
                              <span className={`text-4xl font-black ${isPremium ? 'text-white' : 'text-slate-900'}`}>
                                {plan.price === 'Custom' ? 'Custom' : `€${plan.price}`}
                              </span>
                              {plan.period && (
                                <span className={`text-sm ${isPremium ? 'text-slate-400' : 'text-slate-500'}`}>
                                  {plan.period}
                                </span>
                              )}
                            </div>
                            <p className={`text-xs mt-2 font-medium ${isPremium ? 'text-lime-400' : 'text-lime-600'}`}>
                              {plan.sub}
                            </p>
                          </motion.div>
                        ) : (
                          <BlurredPrice onClick={handleUnlockClick} />
                        )}
                      </div>

                      {/* Guarantee Badge */}
                      {plan.guarantee && (
                        <div className={`mb-6 flex items-center gap-2 text-xs font-semibold ${isPremium ? 'text-lime-400' : 'text-green-600'}`}>
                          <Shield className="w-4 h-4" />
                          {plan.guarantee}
                        </div>
                      )}

                      {/* CTA Button */}
                      <a
                        href={`https://wa.me/35699263179?text=Hi%20OARC%20Digital%2C%20I%27m%20interested%20in%20the%20${encodeURIComponent(plan.name)}%20package`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block w-full py-4 rounded-xl font-bold text-center transition-all mb-6
                          ${isPremium 
                            ? 'bg-white text-slate-900 hover:bg-lime-400' 
                            : isPopular 
                              ? 'bg-slate-900 text-white hover:bg-black'
                              : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                          }`}
                        data-testid={`cta-${plan.name.toLowerCase()}`}
                      >
                        <span className="flex items-center justify-center gap-2">
                          <SiWhatsapp className="w-4 h-4" />
                          {plan.cta}
                        </span>
                      </a>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className={`text-sm font-bold uppercase tracking-wider mb-4 ${isPremium ? 'text-slate-400' : 'text-slate-500'}`}>
                          What's Included
                        </h4>
                        <div className="space-y-3">
                          {plan.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div className={`mt-0.5 p-1 rounded-full ${isPremium ? 'bg-lime-500/20' : 'bg-lime-100'}`}>
                                <Check className={`w-3 h-3 ${isPremium ? 'text-lime-400' : 'text-lime-600'}`} />
                              </div>
                              <div>
                                <span className={`text-sm font-semibold ${isPremium ? 'text-white' : 'text-slate-900'}`}>
                                  {feature.name}
                                </span>
                                <p className={`text-xs ${isPremium ? 'text-slate-500' : 'text-slate-400'}`}>
                                  {feature.desc}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bonuses Section */}
                    <div className={`p-8 pt-0`}>
                      <div className={`p-6 rounded-2xl ${isPremium ? 'bg-white/5 border border-white/10' : 'bg-gradient-to-br from-lime-50 to-green-50 border border-lime-100'}`}>
                        <div className="flex items-center gap-2 mb-4">
                          <Gift className={`w-5 h-5 ${isPremium ? 'text-lime-400' : 'text-lime-600'}`} />
                          <h4 className={`font-bold ${isPremium ? 'text-white' : 'text-slate-900'}`}>
                            Exclusive Bonuses
                          </h4>
                        </div>
                        <div className="space-y-3">
                          {plan.bonuses.map((bonus, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div className={`mt-0.5 p-1 rounded-full ${isPremium ? 'bg-yellow-500/20' : 'bg-yellow-100'}`}>
                                <Star className={`w-3 h-3 ${isPremium ? 'text-yellow-400' : 'text-yellow-600'} fill-current`} />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between gap-2">
                                  <span className={`text-sm font-semibold ${isPremium ? 'text-white' : 'text-slate-900'}`}>
                                    {bonus.name}
                                  </span>
                                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${isPremium ? 'bg-yellow-500/20 text-yellow-400' : 'bg-yellow-100 text-yellow-700'}`}>
                                    {bonus.value}
                                  </span>
                                </div>
                                <p className={`text-xs ${isPremium ? 'text-slate-500' : 'text-slate-400'}`}>
                                  {bonus.desc}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* --- UNLOCK PROMPT (if not unlocked) --- */}
          {!pricingUnlocked && (
            <div className="mb-20 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex flex-col items-center gap-4 bg-white rounded-2xl p-8 shadow-xl border border-slate-200"
              >
                <div className="p-3 rounded-full bg-slate-100">
                  <Lock className="w-6 h-6 text-slate-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Ready to see your pricing?</h3>
                  <p className="text-slate-500 text-sm mb-4">Click any "Unlock Price" button above or</p>
                </div>
                <Button 
                  onClick={handleUnlockClick}
                  className="px-8 py-3 bg-slate-900 hover:bg-black text-white rounded-full font-bold"
                  data-testid="button-unlock-all"
                >
                  Unlock All Prices <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            </div>
          )}

          {/* --- BOTTOM CTA --- */}
          <div className="text-center mb-16">
            <div className="bg-slate-900 rounded-3xl p-10 md:p-16 text-white">
              <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">
                Still not sure which package fits?
              </h2>
              <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                We customize every package to your specific industry, goals, and budget. 
                <span className="text-white font-semibold"> No two clients get the same solution.</span>
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://wa.me/35699263179?text=Hi%20OARC%20Digital%2C%20I%27d%20like%20a%20custom%20quote"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-full font-bold transition-all"
                  data-testid="button-custom-quote"
                >
                  <SiWhatsapp className="w-5 h-5" />
                  Get Custom Quote
                </a>
                <Link href="/contact">
                  <Button variant="outline" className="h-14 px-8 rounded-full border-white/20 text-white hover:bg-white/10">
                    Book Strategy Call
                  </Button>
                </Link>
              </div>
            </div>
          </div>

        </div>

        <FloatingWhatsApp />
      </div>

      {/* Unlock Modal */}
      <AnimatePresence>
        {showUnlockModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowUnlockModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <PriceUnlockForm onUnlock={handleUnlock} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
