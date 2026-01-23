import { useEffect, useRef, useState } from 'react';
import { Link } from 'wouter';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import heroVideoSrc from '@assets/2026-01-07_01_1767825976557.mp4';
import { serviceImages } from '@/assets/serviceImages';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { 
  ArrowRight, Check, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Sparkles, Zap, Target, 
  TrendingUp, Users, BarChart3, Shield, Clock, Gift, Star, X,
  MessageSquare, Palette, Video, Globe, Mail, Megaphone, Bot,
  Instagram, Linkedin, Play, Award, Lightbulb, Layers, RefreshCw,
  Eye, Crosshair, Brain, Crown, Rocket, LineChart, Lock, Unlock
} from 'lucide-react';
import { SiInstagram, SiFacebook, SiTiktok, SiLinkedin, SiYoutube, SiGoogle, SiFigma, SiSlack, SiNotion, SiMeta, SiShopify, SiHubspot, SiMailchimp, SiZapier, SiWhatsapp } from 'react-icons/si';
import CreativeNavigation from '@/components/CreativeNavigation';
import Footer from '@/components/Footer';
import AICreativeSection from '@/components/AICreativeSection';
import { createFAQSchema } from '@/utils/structuredData';

// Creative work categories for carousel pills
const creativeCategories = [
  { id: 'static', label: 'Static social content', icon: Palette },
  { id: 'video', label: 'Video', icon: Video },
  { id: 'campaign', label: 'Campaign concepts', icon: Megaphone },
  { id: 'ai', label: 'AI production', icon: Bot },
  { id: 'immersive', label: 'Immersive experiences', icon: Globe },
  { id: 'paid', label: 'Paid social ads', icon: Target },
  { id: 'organic', label: 'Organic social content', icon: Users },
];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.12 } }
};

const platformVideos = [
  { 
    platform: 'IG POST', 
    video: '/phone-video.mp4',
    color: 'from-pink-500 via-purple-500 to-indigo-500',
    icon: SiInstagram,
    stat: '2.4M+',
    label: 'Views Generated'
  },
  { 
    platform: 'REELS', 
    video: '/phone-video.mp4',
    color: 'from-rose-500 via-pink-500 to-fuchsia-500',
    icon: Video,
    stat: '890K',
    label: 'Engagement'
  },
  { 
    platform: 'TIKTOK', 
    video: '/phone-video.mp4',
    color: 'from-cyan-400 via-teal-400 to-emerald-400',
    icon: SiTiktok,
    stat: '5.2M',
    label: 'Reach'
  },
  { 
    platform: 'VIDEO', 
    video: '/phone-video.mp4',
    color: 'from-orange-500 via-amber-500 to-yellow-500',
    icon: Play,
    stat: '8.7M+',
    label: 'Total Views'
  },
];

const comparisonData = [
  { traditional: 'Social media posts', oarc: 'Social media + AI optimization + AI responder' },
  { traditional: 'Website design', oarc: 'Website + AI chatbot included FREE' },
  { traditional: 'Brand identity', oarc: 'Brand + AI voice guide + AI asset generator' },
  { traditional: 'Video production', oarc: 'Video + AI script + AI repurposing' },
  { traditional: 'Paid ads', oarc: 'Paid ads + AI audience analysis + AI creative' },
];

const valuePillars = [
  {
    icon: Crosshair,
    title: 'Competitor Intelligence',
    headline: 'Know exactly what works in your market',
    description: 'We analyze your top 5 competitors monthly — their content, engagement, and gaps. You get actionable insights to outperform them.',
    stat: '73%',
    statLabel: 'of clients outrank competitors within 90 days',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    icon: Eye,
    title: 'Long-Term Brand Vision',
    headline: 'Build a brand that lasts decades',
    description: 'Not just monthly posts. We create a 12-month content roadmap aligned with your business goals, ensuring every piece builds towards something bigger.',
    stat: '3x',
    statLabel: 'higher brand recall after 6 months',
    color: 'from-purple-500 to-pink-400',
  },
  {
    icon: Crown,
    title: 'Brand Avatar Creation',
    headline: 'Give your brand a distinct personality',
    description: 'We develop your brand\'s voice, persona, and visual identity system — so your content is instantly recognizable across all platforms.',
    stat: '85%',
    statLabel: 'increase in audience recognition',
    color: 'from-amber-500 to-orange-400',
  },
  {
    icon: Users,
    title: 'Influencer Strategy',
    headline: 'Amplify through trusted voices',
    description: 'We identify, vet, and coordinate with relevant Malta-based influencers who align with your brand values and target audience.',
    stat: '5+',
    statLabel: 'influencer partnerships per month (Pro tier)',
    color: 'from-emerald-500 to-teal-400',
  },
];

const channels = [
  { name: 'Instagram', icon: SiInstagram, desc: 'Posts, carousels, Reels, Stories' },
  { name: 'Facebook', icon: SiFacebook, desc: 'Organic, paid, retargeting visuals' },
  { name: 'TikTok', icon: SiTiktok, desc: 'Short-form video, trends, storytelling' },
  { name: 'LinkedIn', icon: SiLinkedin, desc: 'B2B content, brand authority' },
  { name: 'Google & YouTube', icon: SiGoogle, desc: 'Display & video creatives' },
  { name: 'Email & CRM', icon: Mail, desc: 'Email campaigns, automation assets' },
];

const differentiators = [
  {
    icon: Target,
    title: 'Creative-first. Strategy-led.',
    desc: 'Before anything goes live, we define what it must achieve, where it sits in the journey, and how success is measured.'
  },
  {
    icon: Bot,
    title: 'AI-enhanced, not AI-generated.',
    desc: 'AI analyses, optimises, and enhances. Human creativity stays in control. AI works quietly to make it sharper.'
  },
  {
    icon: TrendingUp,
    title: 'Built for revenue, not vanity.',
    desc: 'Likes don\'t pay salaries. We optimise for qualified engagement, leads, conversions, and brand authority.'
  },
  {
    icon: Layers,
    title: 'One system, not scattered services.',
    desc: 'Faster execution, consistent brand voice, lower friction, and better results over time.'
  },
  {
    icon: Shield,
    title: 'Transparency, ownership, control.',
    desc: 'You own all creative assets, all data, all insights. No lock-ins. We earn retention through performance.'
  },
];

const socialMediaPackages = [
  {
    name: 'STARTER',
    price: '497',
    bestFor: 'New or local brands getting consistent, professional creative.',
    coreValue: '€910/mo',
    bonusValue: '€1,000',
    totalValue: '€1,910/mo',
    savings: '74%',
    features: [
      '2 platforms managed',
      '12 custom posts (designed + written)',
      'Content calendar',
      'Monthly performance report',
      'Hashtag & posting strategy',
    ],
    bonuses: [
      'Competitor tracking dashboard',
      '30 caption templates',
      'Best posting times analysis',
      'Social media audit',
    ],
    popular: false,
  },
  {
    name: 'GROWTH',
    price: '997',
    bestFor: 'Growing brands that want creative tied to real business results.',
    coreValue: '€2,250/mo',
    bonusValue: '€1,700',
    totalValue: '€3,950/mo',
    savings: '75%',
    features: [
      '3 platforms managed',
      '20 custom posts (designed + written)',
      '4 Reels/short videos',
      'Community management (DMs/comments)',
      'Monthly strategy call (30 min)',
      'Weekly performance reports',
    ],
    bonuses: [
      'AI Comment Responder (24/7)',
      'Competitor analysis (monthly)',
      '50 caption templates',
      'Trending audio library access',
      'UGC content strategy guide',
    ],
    popular: true,
  },
  {
    name: 'PRO',
    price: '1,997',
    bestFor: 'Established brands ready to scale creative aggressively.',
    coreValue: '€4,000/mo',
    bonusValue: '€4,300',
    totalValue: '€8,300/mo',
    savings: '76%',
    features: [
      '4 platforms managed',
      '30 custom posts (designed + written)',
      '8 Reels/short videos',
      'Full community management',
      'Weekly strategy calls',
      'AI response bot (24/7)',
      'Influencer outreach (5/month)',
    ],
    bonuses: [
      'Everything in Growth bonuses',
      'Monthly trend report',
      'Crisis response templates',
      'Brand voice guide document',
      'Content calendar tool (12 months)',
    ],
    popular: false,
  },
];

const websitePackages = [
  {
    name: 'STARTER',
    price: '1,497',
    oneTime: true,
    bestFor: 'Small businesses needing a professional online presence.',
    totalValue: '€3,341',
    savings: '55%',
    features: [
      '5-page custom website',
      'Mobile responsive design',
      'Basic SEO setup',
      'Contact form',
      'Speed optimization',
    ],
    bonuses: [
      'Basic AI Chatbot (3 months FREE)',
      'Google Analytics setup',
      'Social media integration',
      '30-day support',
    ],
    popular: false,
  },
  {
    name: 'BUSINESS',
    price: '2,997',
    oneTime: true,
    bestFor: 'Growing businesses ready to convert visitors into customers.',
    totalValue: '€9,282',
    savings: '68%',
    features: [
      '10-page custom website',
      'CMS (edit yourself)',
      'Full SEO optimization',
      'Blog setup',
      'Email capture forms',
    ],
    bonuses: [
      'Smart AI Chatbot (6 months FREE)',
      'Google Analytics + Search Console',
      '20 stock images',
      'Full training session (1 hour)',
      '60-day support',
      'Exit-intent popup',
    ],
    popular: true,
  },
  {
    name: 'PREMIUM',
    price: '5,997',
    oneTime: true,
    bestFor: 'Established brands needing advanced functionality.',
    totalValue: '€27,646',
    savings: '78%',
    features: [
      '15+ page custom website',
      'E-commerce ready',
      'Advanced CMS',
      'Full SEO + local SEO',
      'Blog + content strategy',
      'CRM integrations',
    ],
    bonuses: [
      'Advanced AI Chatbot (12 months FREE)',
      'Conversion rate audit',
      'Heatmap tracking setup',
      'A/B testing framework',
      '90-day priority support',
    ],
    popular: false,
  },
];

const brandPackages = [
  {
    name: 'ESSENTIAL',
    price: '997',
    oneTime: true,
    bestFor: 'Startups and new businesses establishing identity.',
    totalValue: '€1,800',
    savings: '45%',
    features: [
      'Logo design (3 concepts)',
      'Color palette',
      'Typography selection',
      'Basic brand guide (5 pages)',
    ],
    bonuses: [
      'Logo files (all formats)',
      'Social media profile templates',
      'Business card design',
      'Email signature design',
    ],
    popular: false,
  },
  {
    name: 'PROFESSIONAL',
    price: '1,997',
    oneTime: true,
    bestFor: 'Brands ready to look as premium as they perform.',
    totalValue: '€4,600',
    savings: '57%',
    features: [
      'Logo design (5 concepts)',
      'Color palette + secondary colors',
      'Typography system',
      'Brand guide (20 pages)',
      'Pattern/texture design',
      'Icon set (10 custom)',
    ],
    bonuses: [
      'Everything in Essential bonuses',
      'Social media templates (15)',
      'Presentation template',
      'AI Brand Voice Guide',
      'Brand photography guide',
    ],
    popular: true,
  },
  {
    name: 'COMPLETE',
    price: '3,997',
    oneTime: true,
    bestFor: 'Enterprise brands requiring full identity systems.',
    totalValue: '€9,000+',
    savings: '55%+',
    features: [
      'Everything in Professional',
      'Full brand strategy',
      'Messaging framework',
      'Brand positioning document',
      'Comprehensive asset library',
    ],
    bonuses: [
      'AI Content Generator training',
      'Motion logo animation',
      'Brand launch strategy',
      'Quarterly brand audit',
    ],
    popular: false,
  },
];

const processSteps = [
  {
    step: 1,
    title: 'Creative Audit & Direction',
    time: '30-45 minutes',
    desc: 'We review your current content, competitors, and identify where attention is being lost and conversion opportunities exist.',
  },
  {
    step: 2,
    title: 'Creative System Setup',
    time: '1 hour kickoff',
    desc: 'Define content pillars, visual direction, platform-specific formats, and performance benchmarks.',
  },
  {
    step: 3,
    title: 'Creation & Launch',
    time: '15-20 min review',
    desc: 'We produce assets with AI-enhanced insights. First content goes live quickly — not weeks later.',
  },
  {
    step: 4,
    title: 'Optimise, Scale, Improve',
    time: '2-3 hours/month',
    desc: 'Track performance, improve what works, refine what doesn\'t. Creative becomes smarter over time.',
  },
];

const faqItems = [
  {
    q: 'Is OARC a creative agency or a social media agency in Malta?',
    a: 'OARC is a creative agency in Malta focused on performance-driven content. While many social media agencies focus only on posting schedules, we design creative systems that combine content, design, video, optimisation, and platform-specific strategy — all under one roof.',
  },
  {
    q: 'Do you work with Malta-based businesses?',
    a: 'Yes. We work extensively with Malta-based brands, startups, and growing companies across multiple industries. Our creative strategies are built with the Maltese market in mind, local audience behaviour, and platform performance data relevant to Malta. We also support international brands targeting Malta.',
  },
  {
    q: 'What social media platforms do you manage?',
    a: 'We manage creative and content across all major platforms including Instagram, Facebook, TikTok, and LinkedIn. Platform selection depends on your industry, audience location, and business goals. We don\'t push platforms that don\'t make sense for your brand.',
  },
  {
    q: 'How is OARC different from other creative agencies in Malta?',
    a: 'Most agencies focus on volume — more posts, more designs. We focus on outcomes. Our creative is strategy-led, performance-tracked, and continuously optimised. This is why brands work with us long-term instead of hopping between agencies.',
  },
  {
    q: 'Do you use AI in your creative work?',
    a: 'Yes — but carefully and strategically. AI is used to analyse competitors, improve content performance, optimise captions and timing, and support faster response and engagement. Human creativity always leads. AI simply enhances performance.',
  },
  {
    q: 'How long does it take to see results from creative services?',
    a: 'Most Malta-based clients see improvements in consistency and quality within the first few weeks, and engagement and brand response within 30-60 days. Creative results compound over time when done properly.',
  },
  {
    q: 'Do you offer flexible packages?',
    a: 'Yes. We show starting price ranges publicly, and final packages are customised based on platforms used, content volume, creative complexity, and business objectives. This ensures you only pay for what you actually need.',
  },
  {
    q: 'Do I need a long-term contract?',
    a: 'No. There are no long-term lock-ins. Clients stay because the creative works — not because they\'re forced to.',
  },
];

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function PremiumPackageCard({ pkg, type }: { pkg: any; type: 'monthly' | 'oneTime' }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="h-full"
    >
      <div className={`relative h-full rounded-3xl overflow-hidden transition-all duration-500 ${
        pkg.popular 
          ? 'bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white shadow-2xl shadow-zinc-900/30' 
          : 'bg-white border border-zinc-200 hover:border-zinc-300 hover:shadow-xl'
      }`}>
        {pkg.popular && (
          <div className="absolute inset-0 bg-gradient-to-br from-[#c4ff4d]/10 via-transparent to-purple-500/10" />
        )}
        
        {pkg.popular && (
          <div className="absolute -top-px left-1/2 -translate-x-1/2">
            <div className="bg-[#c4ff4d] text-black px-6 py-1.5 rounded-b-xl text-xs font-bold flex items-center gap-1.5">
              <Star className="w-3 h-3" /> MOST POPULAR
            </div>
          </div>
        )}
        
        <div className="relative p-8 pt-10">
          <div className="text-center mb-8">
            <p className={`text-sm font-semibold uppercase tracking-wider mb-2 ${pkg.popular ? 'text-[#c4ff4d]' : 'text-zinc-500'}`}>
              {pkg.name}
            </p>
            <div className="flex items-baseline justify-center gap-1">
              <span className={`text-5xl font-bold ${pkg.popular ? 'text-white' : 'text-zinc-900'}`}>
                €{pkg.price}
              </span>
              <span className={pkg.popular ? 'text-zinc-400' : 'text-zinc-500'}>
                {type === 'monthly' ? '/month' : ''}
              </span>
            </div>
            <p className={`text-sm mt-3 ${pkg.popular ? 'text-zinc-400' : 'text-zinc-600'}`}>
              {pkg.bestFor}
            </p>
          </div>

          <div className="space-y-3 mb-8">
            {pkg.features.map((feature: string, i: number) => (
              <div key={i} className="flex items-start gap-3">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                  pkg.popular ? 'bg-[#c4ff4d]' : 'bg-emerald-100'
                }`}>
                  <Check className={`w-3 h-3 ${pkg.popular ? 'text-black' : 'text-emerald-600'}`} />
                </div>
                <span className={`text-sm ${pkg.popular ? 'text-zinc-300' : 'text-zinc-700'}`}>
                  {feature}
                </span>
              </div>
            ))}
          </div>

          <div className={`p-5 rounded-2xl mb-6 ${pkg.popular ? 'bg-white/5' : 'bg-zinc-50'}`}>
            <p className={`text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2 ${
              pkg.popular ? 'text-[#c4ff4d]' : 'text-zinc-500'
            }`}>
              <Gift className="w-3.5 h-3.5" /> Included bonuses
            </p>
            {pkg.bonuses.map((bonus: string, i: number) => (
              <div key={i} className="flex items-center gap-2 mb-2 last:mb-0">
                <Sparkles className={`w-3 h-3 flex-shrink-0 ${pkg.popular ? 'text-[#c4ff4d]' : 'text-amber-500'}`} />
                <span className={`text-xs ${pkg.popular ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  {bonus}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mb-6">
            <p className={`text-xs ${pkg.popular ? 'text-zinc-500' : 'text-zinc-500'}`}>
              Total value: <span className="line-through">{pkg.totalValue}</span>
            </p>
            <p className={`text-sm font-bold ${pkg.popular ? 'text-[#c4ff4d]' : 'text-emerald-600'}`}>
              Save {pkg.savings}
            </p>
          </div>

          <Link href="/contact">
            <Button 
              className={`w-full py-6 rounded-xl font-semibold transition-all ${
                pkg.popular 
                  ? 'bg-[#c4ff4d] text-black hover:bg-[#b5ef3d] shadow-lg shadow-[#c4ff4d]/20' 
                  : 'bg-zinc-900 text-white hover:bg-zinc-800'
              }`}
              data-testid={`button-get-pricing-${pkg.name.toLowerCase()}`}
            >
              Get pricing <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

type PackageType = {
  name: string;
  price: string;
  bestFor: string;
  totalValue: string;
  savings: string;
  features: string[];
  bonuses: string[];
  popular: boolean;
};

// Pricing Modal Component
function PricingModal({ 
  isOpen, 
  onClose, 
  selectedPackage 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  selectedPackage: string | null;
}) {
  const [formData, setFormData] = useState({ name: '', email: '', company: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    
    setIsSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/xblnedyl', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ 
          name: formData.name,
          email: formData.email,
          company: formData.company,
          service: selectedPackage,
          source: 'creative',
          page: '/creative',
          timestamp: new Date().toISOString(),
        }),
      });
      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Error:', error);
    }
    setIsSubmitting(false);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-md bg-zinc-900 rounded-3xl p-8 border border-white/10 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            data-testid="button-close-pricing-modal"
          >
            <X className="w-4 h-4 text-white" />
          </button>

          {!isSubmitted ? (
            <>
              <div className="text-center mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#c4ff4d]/20 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-7 h-7 text-[#c4ff4d]" />
                </div>
                <h3 className="text-2xl font-bold text-white">Get Instant Pricing</h3>
                <p className="text-zinc-400 text-sm mt-2">We'll send your custom quote within 2 hours</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-zinc-500 focus:border-[#c4ff4d] focus:outline-none transition-all"
                  required
                  data-testid="input-modal-name"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-zinc-500 focus:border-[#c4ff4d] focus:outline-none transition-all"
                  required
                  data-testid="input-modal-email"
                />
                <input
                  type="text"
                  placeholder="Company (optional)"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-zinc-500 focus:border-[#c4ff4d] focus:outline-none transition-all"
                  data-testid="input-modal-company"
                />
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#c4ff4d] text-zinc-900 hover:bg-[#b5ef3d] py-6 rounded-xl font-bold text-base shadow-lg shadow-[#c4ff4d]/20"
                  data-testid="button-submit-pricing"
                >
                  {isSubmitting ? 'Sending...' : 'Get My Pricing'} <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </form>

              <p className="text-zinc-500 text-xs text-center mt-4">No spam, ever. Instant response guaranteed.</p>
            </>
          ) : (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-[#c4ff4d]/20 flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-[#c4ff4d]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Request Received!</h3>
              <p className="text-zinc-400">We'll send your custom pricing within 2 hours.</p>
              <Button 
                onClick={onClose}
                className="mt-6 bg-white/10 hover:bg-white/20 text-white px-8"
                data-testid="button-close-success"
              >
                Close
              </Button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function PricingCarousel({ 
  packages, 
  title, 
  icon: Icon, 
  onViewPrices,
  isMonthly = false 
}: { 
  packages: PackageType[]; 
  title: string; 
  icon: any; 
  onViewPrices: (tier: string) => void;
  isMonthly?: boolean;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', () => setCurrentIndex(emblaApi.selectedScrollSnap()));
  }, [emblaApi]);

  return (
    <div className="mb-12 last:mb-0">
      <div className="flex items-center justify-center gap-3 mb-5">
        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
          <Icon className="w-4 h-4 text-white/80" />
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">{title}</h3>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {packages.map((pkg, i) => (
            <div key={i} className="flex-[0_0_100%] min-w-0 px-4 md:px-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`relative rounded-2xl overflow-hidden backdrop-blur-xl ${
                  pkg.popular 
                    ? 'bg-gradient-to-br from-[#c4ff4d]/15 via-[#c4ff4d]/5 to-transparent border-2 border-[#c4ff4d]/40' 
                    : 'bg-white/[0.06] border border-white/15'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#c4ff4d] to-[#9fe830] text-zinc-900 text-[10px] font-bold text-center py-1.5 uppercase tracking-widest flex items-center justify-center gap-1">
                    <Star className="w-2.5 h-2.5" /> Most Popular
                  </div>
                )}
                
                <div className={`p-5 md:p-6 ${pkg.popular ? 'pt-10' : ''}`}>
                  <div className="text-center mb-5">
                    <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${pkg.popular ? 'text-[#c4ff4d]' : 'text-zinc-400'}`}>
                      {pkg.name}
                    </p>
                    <p className="text-zinc-400 text-sm">{pkg.bestFor}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-xl p-4">
                      <p className="text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2" style={{ color: '#c4ff4d' }}>
                        <Check className="w-3.5 h-3.5" style={{ color: '#c4ff4d' }} /> What's Included
                      </p>
                      <div className="space-y-2.5">
                        {pkg.features.map((f, j) => (
                          <div key={j} className="flex items-start gap-2.5 text-zinc-200 text-sm">
                            <div className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="w-2.5 h-2.5 text-white/70" />
                            </div>
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <p className="text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2" style={{ color: '#c4ff4d' }}>
                        <Gift className="w-3.5 h-3.5" style={{ color: '#c4ff4d' }} /> Exclusive Bonuses
                      </p>
                      <div className="space-y-2.5">
                        {pkg.bonuses.map((b, j) => (
                          <div key={j} className="flex items-start gap-2.5 text-zinc-200 text-sm">
                            <Sparkles className="w-3.5 h-3.5 text-white/70 flex-shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button 
                    onClick={() => onViewPrices(`${title} - ${pkg.name}`)}
                    className={`w-full mt-5 py-5 rounded-xl font-bold text-sm ${
                      pkg.popular 
                        ? 'bg-[#c4ff4d] text-zinc-900 hover:bg-[#b5ef3d] shadow-lg shadow-[#c4ff4d]/20' 
                        : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                    data-testid={`button-view-prices-${pkg.name.toLowerCase()}`}
                  >
                    View Prices <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 mt-4">
        {packages.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === i 
                ? 'bg-[#c4ff4d] w-6' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
            data-testid={`dot-${title.toLowerCase().replace(' ', '-')}-${i}`}
          />
        ))}
        <span className="text-zinc-500 text-[10px] ml-2">Swipe</span>
      </div>
    </div>
  );
}

// Benefits included in all plans
const allPlansIncludes = [
  'Dedicated creative project manager',
  'Turnaround times starting at 48 hours',
  'Global timezone coverage',
  'AI-enhanced workflows',
  'Unlimited revisions on all drafts',
  'Support for multiple brands',
];

function PricingSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const handleViewPrices = (tier: string) => {
    setSelectedPackage(tier);
    setIsModalOpen(true);
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden" style={{ backgroundColor: '#0A1A12' }}>
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Premium Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: 'rgba(255, 255, 255, 0.5)', letterSpacing: '0.15em' }}>
            FOUNDING CLIENT SPECIAL
          </p>
          <h2 className="font-bold mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white' }}>
            <span style={{ color: '#c4ff4d' }}>Flexible plans</span> <span className="italic font-normal" style={{ fontFamily: 'Georgia, serif', color: 'rgba(255,255,255,0.5)' }}>for every stage.</span>
          </h2>
          <p className="max-w-xl mx-auto text-base" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Lock in your founding rate instantly. We move <span style={{ color: 'white', fontWeight: 600 }}>10x faster</span> than traditional agencies.
          </p>
          <Link href="/contact">
            <Button 
              className="mt-6 px-8 py-3 rounded-full font-semibold"
              style={{ backgroundColor: 'transparent', border: '1px solid rgba(255,255,255,0.3)', color: 'white' }}
              data-testid="button-book-strategy-call"
            >
              Book Strategy Call
            </Button>
          </Link>
        </motion.div>

        {/* Pricing Carousels - Clean Layout */}
        <div className="max-w-4xl mx-auto">
          <PricingCarousel 
            packages={socialMediaPackages} 
            title="Social Media" 
            icon={Instagram} 
            onViewPrices={handleViewPrices}
            isMonthly={true}
          />
          <PricingCarousel 
            packages={websitePackages} 
            title="Website" 
            icon={Globe} 
            onViewPrices={handleViewPrices}
          />
          <PricingCarousel 
            packages={brandPackages} 
            title="Branding" 
            icon={Palette} 
            onViewPrices={handleViewPrices}
          />
        </div>

        {/* Included in All Plans - Lime Green Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-16"
        >
          <div className="bg-[#c4ff4d] rounded-2xl p-8 md:p-10">
            <h3 className="text-xl md:text-2xl font-bold text-zinc-900 text-center mb-6">
              Included in <span className="italic" style={{ fontFamily: 'Georgia, serif' }}>all plans:</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {allPlansIncludes.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-zinc-900/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-zinc-900" />
                  </div>
                  <span className="text-zinc-900 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Custom Package CTA - Highlighted */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <div className="inline-block px-6 py-4 rounded-xl mb-4" style={{ backgroundColor: 'rgba(196, 255, 77, 0.15)', border: '1px solid rgba(196, 255, 77, 0.3)' }}>
            <p className="text-base md:text-lg font-bold" style={{ color: '#c4ff4d' }}>
              Don't see exactly what you need? <span style={{ color: 'white' }}>We customize packages to fit your unique goals.</span>
            </p>
            <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Every business is different — tell us your needs and we'll build a tailored solution.
            </p>
          </div>
          <div className="mt-4">
            <Link href="/contact">
              <Button 
                className="px-8 py-3 rounded-full font-bold text-base"
                style={{ backgroundColor: '#c4ff4d', color: '#0A2818' }}
                data-testid="button-customize-package"
              >
                Get Your Custom Package <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Pricing Modal */}
      <PricingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        selectedPackage={selectedPackage}
      />
    </section>
  );
}

function WhatsAppCTASection() {
  return (
    <section className="py-12 bg-[#c4ff4d]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-zinc-900">
              Ready to talk? Let's chat.
            </h3>
          </div>
          <a 
            href="https://wa.me/35679711799?text=Hi%20OARC,%20I'm%20interested%20in%20your%20creative%20services" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-zinc-900 text-white px-8 py-4 rounded-full font-bold hover:bg-zinc-800 transition-colors shadow-xl"
            data-testid="button-whatsapp-cta"
          >
            <SiWhatsapp className="w-6 h-6" />
            WhatsApp Us Now
          </a>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ item, index }: { item: { q: string; a: string }; index: number }) {
  const [isOpen, setIsOpen] = useState(index === 0);
  
  return (
    <motion.div 
      className="border-b border-zinc-200 last:border-0"
      initial={false}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
        data-testid={`button-faq-${index}`}
      >
        <span className="font-semibold text-zinc-900 pr-4 group-hover:text-[#9ed919] transition-colors">
          {item.q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-zinc-400 flex-shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-zinc-600 leading-relaxed">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function CreativeLanding() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  // Mobile carousel animation state
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const animationIdRef = useRef<number>();

  // Service carousel items
  const carouselServices = [
    { title: "Ad creative", image: serviceImages.adCreative },
    { title: "Social media creative", image: serviceImages.socialMedia },
    { title: "Video production", image: serviceImages.video },
    { title: "Motion design", image: serviceImages.motion },
    { title: "AI-enhanced creative", image: serviceImages.aiEnhanced },
    { title: "Immersive design", image: serviceImages.immersive },
    { title: "Branding services", image: serviceImages.branding },
    { title: "Website design", image: serviceImages.webDesign },
  ];

  // Split for mobile 2-column layout
  const leftColumnServices = [...carouselServices.slice(0, 4), ...carouselServices.slice(0, 4)];
  const rightColumnServices = [...carouselServices.slice(4), ...carouselServices.slice(4)];

  // Mobile vertical auto-scroll animation
  useEffect(() => {
    if (isDesktop) {
      if (leftColRef.current) leftColRef.current.style.transform = '';
      if (rightColRef.current) rightColRef.current.style.transform = '';
      return;
    }

    const leftColumn = leftColRef.current;
    const rightColumn = rightColRef.current;
    if (!leftColumn || !rightColumn) return;

    let animationStarted = false;

    const tryStartAnimation = () => {
      if (animationStarted) return;
      const leftHeight = leftColumn.scrollHeight / 2;
      const rightHeight = rightColumn.scrollHeight / 2;
      if (leftHeight > 0 && rightHeight > 0) {
        animationStarted = true;
        startAnimation(leftHeight, rightHeight);
      }
    };

    requestAnimationFrame(tryStartAnimation);

    const observer = new ResizeObserver(() => tryStartAnimation());
    observer.observe(leftColumn);
    observer.observe(rightColumn);

    const startAnimation = (leftHeight: number, rightHeight: number) => {
      let leftPos = 0;
      let rightPos = 0;
      const speed = 1.2;

      const animate = () => {
        leftPos += speed;
        const normLeft = ((leftPos % leftHeight) + leftHeight) % leftHeight;
        leftColumn.style.transform = `translateY(${normLeft - leftHeight}px)`;

        rightPos += speed;
        const normRight = ((rightPos % rightHeight) + rightHeight) % rightHeight;
        rightColumn.style.transform = `translateY(-${normRight}px)`;

        animationIdRef.current = requestAnimationFrame(animate);
      };

      animate();
    };

    return () => {
      observer.disconnect();
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
      if (leftColumn) leftColumn.style.transform = '';
      if (rightColumn) rightColumn.style.transform = '';
    };
  }, [isDesktop]);

  const faqSchema = createFAQSchema(
    faqItems.map(item => ({ question: item.q, answer: item.a }))
  );

  return (
    <>
      <Helmet>
        <title>Creative Agency Malta | AI-Powered Social Media & Brand Design | OARC Digital</title>
        <meta name="description" content="Malta's leading creative agency. Social media management, branding, web design & video production enhanced with AI. Trusted by 500+ Malta businesses. Book your free creative audit today." />
        <link rel="canonical" href="https://oarcdigital.com/creative" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Creative Agency Malta | OARC Digital - AI-Enhanced Creative Services" />
        <meta property="og:description" content="High-impact creative for social media, branding & campaigns. Malta's modern creative agency delivering results, not just reach. Free creative audit available." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://oarcdigital.com/creative" />
        <meta property="og:locale" content="en_MT" />
        <meta property="og:site_name" content="OARC Digital" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Creative Agency Malta | OARC Digital" />
        <meta name="twitter:description" content="Malta's AI-powered creative agency. Social media, branding, web design & video. Book your free audit." />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="MT" />
        <meta name="geo.placename" content="Malta" />
        <meta name="keywords" content="creative agency malta, social media agency malta, branding malta, web design malta, video production malta, marketing agency malta, AI marketing malta" />
        
        {/* Schema.org Structured Data */}
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "OARC Digital",
          "description": "Malta's leading AI-powered creative agency specializing in social media management, branding, web design, and video production.",
          "url": "https://oarcdigital.com",
          "telephone": "+356 9999 9999",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Valletta",
            "addressCountry": "MT"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "35.8989",
            "longitude": "14.5146"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Malta"
          },
          "priceRange": "€€€",
          "openingHours": "Mo-Fr 09:00-18:00",
          "sameAs": [
            "https://www.instagram.com/oarcdigital",
            "https://www.linkedin.com/company/oarcdigital",
            "https://www.facebook.com/oarcdigital"
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Creative Agency Services",
          "provider": {
            "@type": "LocalBusiness",
            "name": "OARC Digital"
          },
          "areaServed": "Malta",
          "serviceType": ["Social Media Management", "Branding", "Web Design", "Video Production", "AI Marketing"],
          "description": "Comprehensive creative services including social media management, brand identity design, website development, and AI-enhanced marketing solutions for Malta businesses."
        })}</script>
      </Helmet>

      <CreativeNavigation />
      
      <main className="bg-[#F0FFF4]">
        {/* ========== HERO SECTION - VAYNERMEDIA STYLE ========== */}
        <section ref={heroRef} className="relative h-[78vh] md:h-[82vh] lg:h-[87vh] overflow-hidden bg-black">
          {/* Full-width video background with optimized loading */}
          <div className="absolute inset-0 z-0 bg-black">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover object-[center_40%] md:object-[center_35%] lg:object-center md:saturate-[0.85] md:hue-rotate-[-5deg]"
              style={{ 
                willChange: 'transform',
                backfaceVisibility: 'hidden',
                transform: 'translateZ(0)'
              }}
              data-testid="video-hero-background"
            >
              <source src={heroVideoSrc} type="video/mp4" />
            </video>
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/50" />
          </div>
          
          {/* Hero Content */}
          <div className="relative z-10 h-full flex items-center justify-center pt-16 pb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-center px-6"
            >
              <h1 
                className="text-white font-bold uppercase tracking-tight mb-8"
                style={{ 
                  fontSize: 'clamp(2.5rem, 8vw, 6rem)',
                  letterSpacing: '-0.02em',
                  lineHeight: '1.05'
                }}
                data-testid="text-hero-headline"
              >
                WE ARE THE MODERN<br />
                <span className="italic" style={{ fontFamily: 'Georgia, serif' }}>
                  CREATIVE AGENCY
                </span>
              </h1>
            </motion.div>
          </div>
          
          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white/60"
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </section>

        {/* ========== INFINITE SCROLLING MARQUEE ========== */}
        <section className="relative overflow-hidden" style={{ backgroundColor: '#c4ff4d' }}>
          <div className="py-4 md:py-5">
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: isDesktop ? 20 : 10,
                  ease: 'linear',
                },
              }}
              className="flex whitespace-nowrap"
            >
              {[...Array(10)].map((_, i) => (
                <span 
                  key={i} 
                  className="text-[#1A2E29] font-bold uppercase text-sm md:text-base tracking-wider mx-8"
                  style={{ letterSpacing: '0.1em' }}
                >
                  WE PUT SOCIAL AT THE CENTER OF EVERYTHING WE DO.
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ========== SUPERSIDE-STYLE CREATIVE WORK SECTION ========== */}
        <section className="py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#F0FFF4' }}>
          <div className="container mx-auto px-6 lg:px-12">
            {/* Section Header - Superside Typography Style */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p 
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: '#1A2E29', letterSpacing: '0.3em' }}
              >
                SOCIAL MEDIA DESIGN SERVICES
              </p>
              <h2 
                className="font-bold mb-6"
                style={{ 
                  fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                  lineHeight: '1.05',
                  letterSpacing: '-0.02em',
                  color: '#1A2E29'
                }}
              >
                <span className="italic" style={{ fontFamily: 'Georgia, serif', color: '#c4ff4d', fontWeight: 600 }}>
                  Scroll stopping
                </span>
                <br />
                campaigns <span className="font-normal">built</span>
                <br />
                strategic & brand-led
              </h2>
              <p 
                className="text-lg md:text-xl max-w-2xl mx-auto mb-8"
                style={{ color: '#1A2E29' }}
              >
                Get high-performing social creative across every channel, format, and size.
                From paid ads and educational content to immersive experiences
                and YouTube pre-roll ads, all with one creative team.
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 rounded-full text-lg font-semibold transition-all"
                  style={{ 
                    backgroundColor: '#c4ff4d', 
                    color: '#1A2E29',
                    boxShadow: '0 10px 40px rgba(196, 255, 77, 0.3)'
                  }}
                  data-testid="button-get-social-demo"
                >
                  Get social—book a demo
                </motion.button>
              </Link>
            </motion.div>

            {/* Service Carousel - Mobile: 2-column vertical, Desktop: horizontal */}
            {isDesktop ? (
              /* Desktop: Horizontal Auto-Scrolling Carousel */
              <div className="relative w-full overflow-hidden">
                <motion.div
                  className="flex gap-4"
                  animate={{ x: [0, -2880] }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 40,
                      ease: "linear",
                    },
                  }}
                >
                  {[...Array(3)].flatMap((_, setIndex) =>
                    carouselServices.map((service, index) => (
                      <Link href="/services" key={`${setIndex}-${index}`}>
                        <div className="group flex-shrink-0 w-[280px] lg:w-[320px] relative rounded-2xl overflow-hidden shadow-xl cursor-pointer" style={{ aspectRatio: '3/3.5' }}>
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                          <div className="absolute bottom-4 left-4 right-4">
                            <p className="text-white font-bold text-lg md:text-xl">{service.title}</p>
                          </div>
                        </div>
                      </Link>
                    ))
                  )}
                </motion.div>
              </div>
            ) : (
              /* Mobile: 2-Column Vertical Floating Animation */
              <div className="relative w-full h-[500px] overflow-hidden">
                <div className="flex gap-3 h-full">
                  {/* Left Column - Scrolls Down */}
                  <div className="flex-1 overflow-hidden relative">
                    <div
                      ref={leftColRef}
                      className="flex flex-col gap-3"
                      style={{ cursor: 'grab' }}
                    >
                      {leftColumnServices.map((service, index) => (
                        <Link href="/services" key={`left-${index}`}>
                          <div className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer" style={{ aspectRatio: '3/3.5' }}>
                            <img
                              src={service.image}
                              alt={service.title}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                            <div className="absolute bottom-3 left-3 right-3">
                              <p className="text-white font-bold text-sm">{service.title}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                  {/* Right Column - Scrolls Up */}
                  <div className="flex-1 overflow-hidden relative">
                    <div
                      ref={rightColRef}
                      className="flex flex-col gap-3"
                      style={{ cursor: 'grab' }}
                    >
                      {rightColumnServices.map((service, index) => (
                        <Link href="/services" key={`right-${index}`}>
                          <div className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer" style={{ aspectRatio: '3/3.5' }}>
                            <img
                              src={service.image}
                              alt={service.title}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                            <div className="absolute bottom-3 left-3 right-3">
                              <p className="text-white font-bold text-sm">{service.title}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ========== BLACK BRAND LOGO STRIP ========== */}
        <section className="py-6 overflow-hidden" style={{ backgroundColor: '#000000' }}>
          <div className="relative">
            <motion.div
              className="flex items-center gap-16"
              animate={{ x: [0, -1200] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {[...Array(3)].flatMap((_, setIndex) => [
                { Icon: SiFigma, name: "Figma" },
                { Icon: SiSlack, name: "Slack" },
                { Icon: SiNotion, name: "Notion" },
                { Icon: SiMeta, name: "Meta" },
                { Icon: SiGoogle, name: "Google" },
                { Icon: SiShopify, name: "Shopify" },
                { Icon: SiHubspot, name: "HubSpot" },
                { Icon: SiMailchimp, name: "Mailchimp" },
                { Icon: SiZapier, name: "Zapier" },
              ].map((tool, index) => (
                <div key={`${setIndex}-${index}`} className="flex-shrink-0 flex items-center gap-2">
                  <tool.Icon className="w-6 h-6 text-white opacity-80" />
                  <span className="text-white font-semibold text-sm opacity-80 whitespace-nowrap">{tool.name}</span>
                </div>
              )))}
            </motion.div>
          </div>
        </section>

        {/* ========== HOW WE CAN HELP YOU SECTION ========== */}
        <section className="py-20 md:py-28 overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="container mx-auto px-6 lg:px-12">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 
                className="font-bold mb-4"
                style={{ 
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  lineHeight: '1.1',
                  letterSpacing: '-0.02em',
                  color: '#1A2E29',
                  fontFamily: 'system-ui, -apple-system, sans-serif'
                }}
              >
                HOW WE CAN HELP YOU
              </h2>
              <p 
                className="text-lg md:text-xl max-w-2xl mx-auto mb-8"
                style={{ color: '#4A5568' }}
              >
                We're relentlessly focused on one thing: growing your brand through creativity & AI.
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 rounded-full text-lg font-semibold transition-all"
                  style={{ 
                    backgroundColor: '#1A2E29', 
                    color: '#FFFFFF'
                  }}
                  data-testid="button-learn-more-help"
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>

            {/* Service Cards Carousel */}
            <div className="relative -mx-6 lg:-mx-12 group/carousel">
              {/* Left Arrow */}
              <button 
                onClick={(e) => {
                  const container = e.currentTarget.parentElement?.querySelector('.cards-scroll-container');
                  if (container) container.scrollBy({ left: -340, behavior: 'smooth' });
                }}
                className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg items-center justify-center hover:bg-gray-50 transition-all opacity-0 group-hover/carousel:opacity-100"
                data-testid="button-help-scroll-left"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
              
              {/* Right Arrow */}
              <button 
                onClick={(e) => {
                  const container = e.currentTarget.parentElement?.querySelector('.cards-scroll-container');
                  if (container) container.scrollBy({ left: 340, behavior: 'smooth' });
                }}
                className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg items-center justify-center hover:bg-gray-50 transition-all opacity-0 group-hover/carousel:opacity-100"
                data-testid="button-help-scroll-right"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>

              <div className="cards-scroll-container flex gap-5 overflow-x-auto pb-4 px-6 lg:px-12 snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {[
                  { 
                    category: "SOCIAL-FIRST STORYTELLING",
                    title: "Social Creative",
                    description: "We create content people actually want to watch. By listening to audiences, not opinions, we build ideas that drive relevance. A modern blend of traditional thinking and social-first storytelling.",
                    image: serviceImages.socialMedia
                  },
                  { 
                    category: "AMPLIFIED REACH",
                    title: "Media",
                    description: "We're focused on driving business results, not just potential reach. We understand where consumers spend their time and turn attention into action through modern planning and analytics.",
                    image: serviceImages.adCreative
                  },
                  { 
                    category: "TARGETED IMPACT",
                    title: "Strategy",
                    description: "We put human beings at the forefront of everything we do, ensuring our ideas are culturally rich and consumer-led. The most effective way to drive relevance and growth.",
                    image: serviceImages.concept
                  },
                  { 
                    category: "BORROW OUR BRAINS",
                    title: "Consulting",
                    description: "Work alongside seasoned strategists, creators, and platform specialists to unlock modern solutions to your biggest business challenges. Walk away with actionable ideas and a strategic roadmap.",
                    image: serviceImages.branding
                  },
                  { 
                    category: "SEARCH VISIBILITY",
                    title: "SEO & Digital Marketing",
                    description: "Dominate search results and build lasting organic traffic. From technical SEO to content strategy, we help your brand get found by the right people at the right time.",
                    image: serviceImages.webDesign
                  },
                  { 
                    category: "INTELLIGENT SCALE",
                    title: "AI Automation & Agents",
                    description: "Deploy AI employees that work 24/7. From automated content creation to intelligent customer support, we help you scale operations without scaling headcount.",
                    image: serviceImages.aiEnhanced
                  },
                  { 
                    category: "CONVERSION-READY",
                    title: "Commerce & Revenue",
                    description: "Build automated revenue engines that convert. From social commerce to lead generation funnels, we create systems that turn browsers into buyers on autopilot.",
                    image: serviceImages.designSystems
                  },
                  { 
                    category: "SOCIAL SIGNALS",
                    title: "Analytics",
                    description: "Numbers don't build relevance, people do. Our analytics go beyond dashboards, decoding culture in real time. We turn raw data into the insights that matter for your brand.",
                    image: serviceImages.presentation
                  },
                ].map((service, index) => (
                  <Link href="/services" key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * index }}
                      className="group flex-shrink-0 w-[280px] md:w-[320px] snap-start cursor-pointer"
                      data-testid={`card-help-service-${index}`}
                    >
                      <div className="relative rounded-xl overflow-hidden mb-4" style={{ aspectRatio: '4/3' }}>
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#888888' }}>
                        {service.category}
                      </p>
                      <h3 className="text-2xl font-bold mb-3" style={{ color: '#1A2E29' }}>
                        {service.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: '#4A5568' }}>
                        {service.description}
                      </p>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========== OARC VS ALTERNATIVES - SUPERSIDE STYLE ========== */}
        <section className="py-20 md:py-32 overflow-hidden" style={{ backgroundColor: '#0A2818' }}>
          <div className="container mx-auto px-6 lg:px-12">
            
            {/* Part 1: Checkmark Comparison Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p 
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: 'rgba(255,255,255,0.5)', letterSpacing: '0.3em', fontFamily: 'var(--font-heatrobox)' }}
              >
                OARC VS. TRADITIONAL ALTERNATIVES
              </p>
              <h2 
                className="font-bold mb-6"
                style={{ 
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  lineHeight: '1.1',
                  letterSpacing: '-0.02em',
                  color: 'white'
                }}
              >
                Traditional agency or DIY tools?
                <br />
                <span className="italic" style={{ fontFamily: 'Georgia, serif', color: '#c4ff4d' }}>
                  Neither.
                </span>
              </h2>
            </motion.div>

            {/* Superside-style Checkmark Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto mb-20 overflow-x-auto"
            >
              <div className="min-w-[600px]">
                {/* Header Row */}
                <div className="grid grid-cols-6 gap-2 mb-2">
                  <div className="col-span-1"></div>
                  {['AI Enhanced', 'SEO Included', 'Competitor Intel', 'Speed', 'Cost-Effective'].map((header) => (
                    <div key={header} className="text-center text-xs md:text-sm font-medium" style={{ color: 'rgba(255,255,255,0.7)' }}>
                      {header}
                    </div>
                  ))}
                </div>
                
                {/* OARC Row - Highlighted */}
                <motion.div 
                  className="grid grid-cols-6 gap-2 items-center rounded-full py-4 px-4 mb-3"
                  style={{ backgroundColor: '#c4ff4d' }}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="font-bold text-sm md:text-base" style={{ color: '#0A2818', fontFamily: 'var(--font-heatrobox)' }}>OARC Digital</div>
                  {[true, true, true, true, true].map((checked, i) => (
                    <div key={i} className="flex justify-center">
                      <Check className="w-5 h-5 md:w-6 md:h-6" style={{ color: '#0A2818' }} />
                    </div>
                  ))}
                </motion.div>
                
                {/* Competitor Rows */}
                {[
                  { name: 'In-house team', checks: [false, false, false, true, false] },
                  { name: 'Creative agencies', checks: [false, false, false, false, false] },
                  { name: 'Freelancers', checks: [false, true, false, true, true] },
                  { name: 'Self-service tools', checks: [true, false, false, true, true] },
                ].map((row, rowIndex) => (
                  <div 
                    key={rowIndex}
                    className="grid grid-cols-6 gap-2 items-center py-4 px-4 border-b"
                    style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                  >
                    <div className="text-sm md:text-base" style={{ color: 'rgba(255,255,255,0.8)' }}>{row.name}</div>
                    {row.checks.map((checked, i) => (
                      <div key={i} className="flex justify-center">
                        {checked ? (
                          <Check className="w-5 h-5 md:w-6 md:h-6" style={{ color: 'rgba(255,255,255,0.6)' }} />
                        ) : (
                          <X className="w-5 h-5 md:w-6 md:h-6" style={{ color: 'rgba(255,255,255,0.3)' }} />
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </section>

        {/* ========== SAME DELIVERABLES - WHITE/LIGHT SECTION (VAYNER STYLE) ========== */}
        <section className="py-16 md:py-20" style={{ backgroundColor: '#F8FAF9' }}>
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h3 
                className="font-bold mb-4"
                style={{ 
                  fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                  color: '#1A2E29'
                }}
              >
                Same deliverables. <span style={{ color: '#0A2818', fontWeight: 800 }}>10X more value.</span>
              </h3>
              <p style={{ color: '#4A5568' }} className="text-lg">
                Every service comes with AI enhancement at no extra cost.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="rounded-2xl overflow-hidden bg-white shadow-lg" style={{ border: '1px solid #E2E8F0' }}>
                {/* Table Header */}
                <div className="grid grid-cols-2">
                  <div className="p-5 font-bold text-center text-sm md:text-base" style={{ backgroundColor: '#F1F5F9', color: '#64748B', borderRight: '1px solid #E2E8F0' }}>
                    Traditional Agency
                  </div>
                  <div className="p-5 font-bold text-center text-sm md:text-base" style={{ background: 'linear-gradient(90deg, #c4ff4d 0%, #9ed919 100%)', color: '#0A2818', fontFamily: 'var(--font-heatrobox)' }}>
                    OARC Digital
                  </div>
                </div>
                {/* Table Rows */}
                {comparisonData.map((row, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="grid grid-cols-2"
                    style={{ borderTop: '1px solid #E2E8F0' }}
                  >
                    <div className="p-4 md:p-5 text-sm" style={{ color: '#64748B', borderRight: '1px solid #E2E8F0' }}>
                      {row.traditional}
                    </div>
                    <div className="p-4 md:p-5 text-sm font-medium flex items-center" style={{ color: '#1A2E29', backgroundColor: 'rgba(196, 255, 77, 0.08)' }}>
                      <Check className="w-4 h-4 mr-3 flex-shrink-0" style={{ color: '#22C55E' }} />
                      {row.oarc}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ========== OARC ADVANTAGE CONTINUES - DARK ========== */}
        <section className="py-20 md:py-24" style={{ backgroundColor: '#0A2818' }}>
          <div className="container mx-auto px-6 lg:px-12">

            {/* Part 3: Value Cards with Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p 
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: 'rgba(255,255,255,0.5)', letterSpacing: '0.2em', fontFamily: 'var(--font-heatrobox)' }}
              >
                THE OARC ADVANTAGE
              </p>
              <h3 
                className="font-bold"
                style={{ 
                  fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                  color: 'white'
                }}
              >
                4 pillars of strategic value
              </h3>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {valuePillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group"
                >
                  <div 
                    className="h-full rounded-2xl p-6 transition-all"
                    style={{ 
                      backgroundColor: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
                    >
                      <pillar.icon className="w-6 h-6" style={{ color: 'rgba(255, 255, 255, 0.8)' }} />
                    </div>
                    
                    <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      {pillar.title}
                    </p>
                    <h4 className="text-lg font-bold mb-3" style={{ color: 'white' }}>
                      {pillar.headline}
                    </h4>
                    <p className="text-sm mb-5 leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                      {pillar.description}
                    </p>
                    
                    <div className="pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                      <span className="text-3xl font-bold" style={{ color: '#c4ff4d' }}>
                        {pillar.stat}
                      </span>
                      <span className="text-xs ml-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
                        {pillar.statLabel}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 rounded-full text-lg font-semibold transition-all"
                  style={{ 
                    backgroundColor: '#c4ff4d', 
                    color: '#0A2818',
                    boxShadow: '0 10px 40px rgba(196, 255, 77, 0.3)'
                  }}
                  data-testid="button-book-intro-call"
                >
                  Book intro call
                </motion.button>
              </Link>
            </div>
          </div>
        </section>

        {/* ========== CHANNELS SECTION - VAYNER STYLE ========== */}
        <AnimatedSection className="py-20 md:py-28 bg-[#fafaf8]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                Channels we design & manage creative for
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                Wherever your audience is — we design creative that fits.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
              {channels.map((channel, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="bg-white rounded-2xl p-5 text-center hover:shadow-xl transition-all border border-zinc-100 group"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-zinc-100 group-hover:bg-[#c4ff4d]/20 flex items-center justify-center transition-colors">
                    <channel.icon className="w-6 h-6 text-zinc-700" />
                  </div>
                  <h3 className="font-semibold text-zinc-900 text-sm mb-1">{channel.name}</h3>
                  <p className="text-xs text-zinc-500">{channel.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ========== PRICING UNLOCK - SUPERSIDE STYLE ========== */}
        <PricingSection />

        {/* ========== WHATSAPP CTA - VAYNER STYLE ========== */}
        <WhatsAppCTASection />

        {/* ========== FAQ SECTION - SUPERSIDE STYLE ========== */}
        <AnimatedSection className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="bg-zinc-100 text-zinc-700 mb-4">FAQ</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">
                  Frequently Asked Questions
                </h2>
              </div>
              
              <div className="bg-zinc-50 rounded-3xl p-8">
                {faqItems.map((item, index) => (
                  <FAQItem key={index} item={item} index={index} />
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* ========== FINAL CTA - GET IN TOUCH STYLE ========== */}
        <section className="py-24 md:py-32" style={{ backgroundColor: '#0A0A0A' }}>
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Bold Headline - GET IN TOUCH Style */}
              <h2 
                className="font-black tracking-tight mb-12"
                style={{ 
                  fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                  lineHeight: '1',
                  color: 'white',
                  letterSpacing: '-0.02em'
                }}
              >
                READY TO TURN
                <br />
                <span style={{ color: '#c4ff4d' }}>CREATIVE INTO</span>
                <br />
                REVENUE?
              </h2>
              
              {/* Subtitle Lines */}
              <div className="space-y-3 mb-12 max-w-lg mx-auto">
                <p style={{ color: 'rgba(255,255,255,0.6)' }} className="text-base md:text-lg">
                  Get a customised package recommendation and see exactly how we can help your brand grow.
                </p>
              </div>
              
              {/* CTA Button - Lime Green Pill */}
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#c4ff4d] text-zinc-900 px-10 py-4 rounded-full text-lg font-bold inline-flex items-center gap-3 mb-10"
                  data-testid="button-final-cta"
                >
                  GET PRICING <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              
              {/* Free Audit Line */}
              <p style={{ color: 'rgba(255,255,255,0.5)' }} className="text-sm mb-6">
                Includes a <span style={{ color: '#c4ff4d' }} className="font-semibold">free Creative Audit</span> for Malta-based brands.
              </p>
              
              {/* Limited Notice */}
              <div className="inline-flex items-center gap-2 text-sm px-5 py-3 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.5)' }}>
                <Clock className="w-4 h-4" />
                <span><strong style={{ color: 'rgba(255,255,255,0.8)' }}>January onboarding is limited.</strong> Small number of new clients accepted monthly.</span>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer hideGetInTouch={true} />
    </>
  );
}
