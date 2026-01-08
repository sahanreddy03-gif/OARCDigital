import { useEffect, useRef, useState } from 'react';
import { Link } from 'wouter';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import heroVideoSrc from '@assets/2026-01-07_01_1767825976557.mp4';
import { 
  ArrowRight, Check, ChevronDown, ChevronUp, Sparkles, Zap, Target, 
  TrendingUp, Users, BarChart3, Shield, Clock, Gift, Star, X,
  MessageSquare, Palette, Video, Globe, Mail, Megaphone, Bot,
  Instagram, Linkedin, Play, Award, Lightbulb, Layers, RefreshCw,
  Eye, Crosshair, Brain, Crown, Rocket, LineChart, Brush, PenTool,
  Camera, Film, Layout, Smartphone, Monitor, Image, Wand2, MousePointerClick
} from 'lucide-react';
import { SiInstagram, SiFacebook, SiTiktok, SiLinkedin, SiYoutube, SiGoogle } from 'react-icons/si';
import CreativeNavigation from '@/components/CreativeNavigation';
import Footer from '@/components/Footer';
import AICreativeSection from '@/components/AICreativeSection';
import { createFAQSchema } from '@/utils/structuredData';

// Enhanced creative categories with comprehensive services
const creativeCategories = [
  { id: 'social', label: 'Social Media Content', icon: SiInstagram, description: 'Posts, Stories, Reels' },
  { id: 'video', label: 'Video Production', icon: Film, description: 'Reels, Ads, Brand Films' },
  { id: 'branding', label: 'Brand Identity', icon: Crown, description: 'Logo, Guidelines, Assets' },
  { id: 'paid', label: 'Paid Ad Creative', icon: Target, description: 'Meta, Google, TikTok' },
  { id: 'web', label: 'Web & UI Design', icon: Monitor, description: 'Websites, Landing Pages' },
  { id: 'motion', label: 'Motion Graphics', icon: Wand2, description: 'Animations, Intros' },
  { id: 'ai', label: 'AI-Enhanced Creative', icon: Bot, description: 'Smart Production' },
  { id: 'campaign', label: 'Campaign Concepts', icon: Megaphone, description: 'Ideas to Execution' },
];

// Client brands for logo strip
const clientBrands = [
  { name: 'Brand 1', placeholder: true },
  { name: 'Brand 2', placeholder: true },
  { name: 'Brand 3', placeholder: true },
  { name: 'Brand 4', placeholder: true },
  { name: 'Brand 5', placeholder: true },
  { name: 'Brand 6', placeholder: true },
];

// VaynerMedia-style services
const howWeHelp = [
  {
    category: 'BUILDING RELEVANCE',
    title: 'Creative',
    description: 'We create content people actually want to engage with. By listening to your audience, not assumptions, we build ideas that drive relevance. We blend strategic thinking with social-first storytelling, proving a single post can be as powerful as a full campaign.',
    image: null,
    link: '/services/creative',
    color: 'from-emerald-600 to-teal-600',
  },
  {
    category: 'AMPLIFIED REACH',
    title: 'Paid Media',
    description: 'We focus on driving business results, not just potential reach. We understand the channels where your customers spend their time and use modern planning, buying, and analytics to turn attention into action.',
    image: null,
    link: '/services/paid-advertising',
    color: 'from-blue-600 to-indigo-600',
  },
  {
    category: 'TARGETED IMPACT',
    title: 'Strategy',
    description: 'We put your customers at the forefront of everything we do. Brands today can\'t rely on generic messages served to mass audiences. The most effective way to drive growth is by understanding and speaking to people as individuals.',
    image: null,
    link: '/services/digital-marketing',
    color: 'from-purple-600 to-pink-600',
  },
  {
    category: 'COMPLETE IDENTITY',
    title: 'Branding',
    description: 'Your brand is more than a logo. We craft complete identity systems—visual language, voice, positioning—that make your business instantly recognizable and impossible to ignore across every touchpoint.',
    image: null,
    link: '/services/branding',
    color: 'from-amber-500 to-orange-600',
  },
  {
    category: 'DIGITAL PRESENCE',
    title: 'Web Design',
    description: 'Websites that don\'t just look good—they convert. We design and build digital experiences optimized for performance, user experience, and business outcomes. Every pixel serves a purpose.',
    image: null,
    link: '/services/web-design',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    category: 'VISUAL STORYTELLING',
    title: 'Video Production',
    description: 'From concept to final cut. We produce scroll-stopping video content for social, ads, and brand storytelling. Short-form, long-form, motion graphics—all crafted to capture and convert attention.',
    image: null,
    link: '/services/video-production',
    color: 'from-rose-500 to-red-600',
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.12 } }
};

// Enhanced comparison data
const comparisonData = [
  { traditional: 'Social media posts', oarc: 'Social media + AI optimization + AI responder', icon: MessageSquare },
  { traditional: 'Website design', oarc: 'Website + AI chatbot included FREE', icon: Monitor },
  { traditional: 'Brand identity', oarc: 'Brand + AI voice guide + AI asset generator', icon: Crown },
  { traditional: 'Video production', oarc: 'Video + AI script + AI repurposing', icon: Film },
  { traditional: 'Paid ads', oarc: 'Paid ads + AI audience analysis + AI creative', icon: Target },
  { traditional: 'Content calendar', oarc: 'Smart calendar + trend prediction + auto-scheduling', icon: BarChart3 },
];

const valuePillars = [
  {
    icon: Crosshair,
    title: 'Competitor Intelligence',
    headline: 'Know exactly what works in your market',
    description: 'We analyze your top 5 competitors monthly — their content, engagement, and gaps. You get actionable insights to outperform them.',
    stat: '73%',
    statLabel: 'of clients outrank competitors within 90 days',
    color: 'from-emerald-600 to-teal-500',
  },
  {
    icon: Eye,
    title: 'Long-Term Brand Vision',
    headline: 'Build a brand that lasts decades',
    description: 'Not just monthly posts. We create a 12-month content roadmap aligned with your business goals, ensuring every piece builds towards something bigger.',
    stat: '3x',
    statLabel: 'higher brand recall after 6 months',
    color: 'from-emerald-700 to-emerald-500',
  },
  {
    icon: Crown,
    title: 'Brand Avatar Creation',
    headline: 'Give your brand a distinct personality',
    description: 'We develop your brand\'s voice, persona, and visual identity system — so your content is instantly recognizable across all platforms.',
    stat: '85%',
    statLabel: 'increase in audience recognition',
    color: 'from-teal-600 to-cyan-500',
  },
  {
    icon: Users,
    title: 'Influencer Strategy',
    headline: 'Amplify through trusted voices',
    description: 'We identify, vet, and coordinate with relevant influencers who align with your brand values and target audience.',
    stat: '5+',
    statLabel: 'influencer partnerships per month (Pro tier)',
    color: 'from-emerald-500 to-green-400',
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
    q: 'Is OARC a creative agency or a social media agency?',
    a: 'OARC is a creative agency focused on performance-driven content. While many social media agencies focus only on posting schedules, we design creative systems that combine content, design, video, optimisation, and platform-specific strategy — all under one roof.',
  },
  {
    q: 'What creative services do you offer?',
    a: 'We offer comprehensive creative services including social media content, video production, brand identity design, web design, paid ad creative, motion graphics, and AI-enhanced production. Everything is designed to work together as one cohesive system.',
  },
  {
    q: 'What social media platforms do you manage?',
    a: 'We manage creative and content across all major platforms including Instagram, Facebook, TikTok, and LinkedIn. Platform selection depends on your industry, audience location, and business goals. We don\'t push platforms that don\'t make sense for your brand.',
  },
  {
    q: 'How is OARC different from other creative agencies?',
    a: 'Most agencies focus on volume — more posts, more designs. We focus on outcomes. Our creative is strategy-led, performance-tracked, and continuously optimised. Every deliverable comes with AI-enhancement at no extra cost. This is why brands work with us long-term.',
  },
  {
    q: 'Do you use AI in your creative work?',
    a: 'Yes — but carefully and strategically. AI is used to analyse competitors, improve content performance, optimise captions and timing, and support faster response and engagement. Human creativity always leads. AI simply enhances performance.',
  },
  {
    q: 'How long does it take to see results from creative services?',
    a: 'Most clients see improvements in consistency and quality within the first few weeks, and engagement and brand response within 30-60 days. Creative results compound over time when done properly.',
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
          ? 'bg-gradient-to-br from-[#0A2818] via-[#0D3320] to-[#0A2818] text-white shadow-2xl shadow-emerald-900/30' 
          : 'bg-white border border-zinc-200 hover:border-emerald-200 hover:shadow-xl'
      }`}>
        {pkg.popular && (
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10" />
        )}
        
        {pkg.popular && (
          <div className="absolute -top-px left-1/2 -translate-x-1/2">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-1.5 rounded-b-xl text-xs font-bold flex items-center gap-1.5">
              <Star className="w-3 h-3" /> MOST POPULAR
            </div>
          </div>
        )}
        
        <div className="relative p-8 pt-10">
          <div className="text-center mb-8">
            <p className={`text-sm font-semibold uppercase tracking-wider mb-2 ${pkg.popular ? 'text-emerald-400' : 'text-zinc-500'}`}>
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
                  pkg.popular ? 'bg-emerald-500' : 'bg-emerald-100'
                }`}>
                  <Check className={`w-3 h-3 ${pkg.popular ? 'text-white' : 'text-emerald-600'}`} />
                </div>
                <span className={`text-sm ${pkg.popular ? 'text-zinc-300' : 'text-zinc-700'}`}>
                  {feature}
                </span>
              </div>
            ))}
          </div>

          <div className={`p-5 rounded-2xl mb-6 ${pkg.popular ? 'bg-white/5' : 'bg-zinc-50'}`}>
            <p className={`text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2 ${
              pkg.popular ? 'text-emerald-400' : 'text-zinc-500'
            }`}>
              <Gift className="w-3.5 h-3.5" /> Included bonuses
            </p>
            {pkg.bonuses.map((bonus: string, i: number) => (
              <div key={i} className="flex items-center gap-2 mb-2 last:mb-0">
                <Sparkles className={`w-3 h-3 flex-shrink-0 ${pkg.popular ? 'text-emerald-400' : 'text-emerald-500'}`} />
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
            <p className={`text-sm font-bold ${pkg.popular ? 'text-emerald-400' : 'text-emerald-600'}`}>
              Save {pkg.savings}
            </p>
          </div>

          <Link href="/contact">
            <Button 
              className={`w-full py-6 rounded-xl font-semibold transition-all ${
                pkg.popular 
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600 shadow-lg shadow-emerald-500/20' 
                  : 'bg-[#0A2818] text-white hover:bg-[#0D3320]'
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
        <span className="font-semibold text-zinc-900 pr-4 group-hover:text-emerald-600 transition-colors">
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

// Smooth scroll hook for parallax effects
function useParallax(value: any, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default function CreativeLanding() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  const faqSchema = createFAQSchema(
    faqItems.map(item => ({ question: item.q, answer: item.a }))
  );

  return (
    <>
      <Helmet>
        <title>Creative Agency | AI-Powered Social Media & Brand Design | OARC Digital</title>
        <meta name="description" content="Leading creative agency delivering social media management, branding, web design & video production enhanced with AI. Trusted by 500+ businesses. Book your free creative audit today." />
        <link rel="canonical" href="https://oarcdigital.com/creative" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Creative Agency | OARC Digital - AI-Enhanced Creative Services" />
        <meta property="og:description" content="High-impact creative for social media, branding & campaigns. Modern creative agency delivering results, not just reach. Free creative audit available." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Creative Agency | OARC Digital" />
        
        {/* FAQ Schema */}
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        
        {/* Service Schema */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Creative Agency Services",
          "provider": {
            "@type": "LocalBusiness",
            "name": "OARC Digital"
          },
          "serviceType": ["Social Media Management", "Branding", "Web Design", "Video Production", "AI Marketing"],
          "description": "Comprehensive creative services including social media management, brand identity design, website development, and AI-enhanced marketing solutions."
        })}</script>
      </Helmet>

      <CreativeNavigation />
      
      <main className="bg-[#F0FFF4]">
        {/* ========== HERO SECTION - VAYNERMEDIA STYLE ========== */}
        <section ref={heroRef} className="relative h-[78vh] md:h-[82vh] lg:h-[87vh] overflow-hidden" style={{ backgroundColor: '#F0FFF4' }}>
          {/* Full-width video background with optimized loading */}
          <div className="absolute inset-0 z-0 bg-[#0A2818]">
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
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
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
        <section className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500">
          <div className="py-4 md:py-5">
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 20,
                  ease: 'linear',
                },
              }}
              className="flex whitespace-nowrap"
            >
              {[...Array(10)].map((_, i) => (
                <span 
                  key={i} 
                  className="text-white font-bold uppercase text-sm md:text-base tracking-wider mx-8"
                  style={{ letterSpacing: '0.1em' }}
                >
                  WE PUT CREATIVE AT THE CENTER OF EVERYTHING WE DO.
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ========== SCROLL-STOPPING CAMPAIGNS SECTION ========== */}
        <section className="py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#F0FFF4' }}>
          <div className="container mx-auto px-6 lg:px-12">
            {/* Section Header - OARC Branded */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-16"
            >
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xs font-bold uppercase tracking-widest mb-6"
                style={{ color: '#0A2818', letterSpacing: '0.3em' }}
              >
                CREATIVE SERVICES
              </motion.p>
              <h2 
                className="font-bold mb-8"
                style={{ 
                  fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                  lineHeight: '1.05',
                  letterSpacing: '-0.02em',
                  color: '#0A2818'
                }}
              >
                <span 
                  className="italic" 
                  style={{ 
                    fontFamily: 'Georgia, serif', 
                    background: 'linear-gradient(135deg, #0A2818 0%, #166534 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Scroll-stopping
                </span>
                <br />
                campaigns <span className="font-normal">built fast</span>
                <br />
                <span className="font-normal">and on brand</span>
              </h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl max-w-3xl mx-auto mb-4"
                style={{ color: '#1A2E29' }}
              >
                One creative team. Every format. Every platform. AI-enhanced production 
                that delivers performance-driven creative at scale.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-base max-w-2xl mx-auto mb-10 text-zinc-600"
              >
                From social content and paid ads to brand identity and web design — 
                we don't just create assets, we build creative systems that convert.
              </motion.p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-4 rounded-full text-lg font-semibold transition-all"
                  style={{ 
                    background: 'linear-gradient(135deg, #0A2818 0%, #166534 100%)',
                    color: 'white',
                    boxShadow: '0 10px 40px rgba(10, 40, 24, 0.3)'
                  }}
                  data-testid="button-get-social-demo"
                >
                  Book a demo
                </motion.button>
              </Link>
            </motion.div>

            {/* Creative Categories Carousel/Pills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-3 md:gap-4 mb-20"
            >
              {creativeCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * index }}
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="group flex items-center gap-3 px-5 py-3 rounded-full border transition-all duration-300 cursor-pointer"
                  style={{ 
                    backgroundColor: 'white',
                    borderColor: '#e5e7eb',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                  }}
                  data-testid={`pill-category-${category.id}`}
                >
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ background: 'linear-gradient(135deg, #0A2818 0%, #166534 100%)' }}
                  >
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <span 
                      className="font-semibold text-sm block"
                      style={{ color: '#0A2818' }}
                    >
                      {category.label}
                    </span>
                    <span className="text-xs text-zinc-500">{category.description}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Client Brand Logo Strip */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <div className="text-center mb-8">
                <p className="text-sm text-zinc-500 uppercase tracking-widest font-medium">
                  Trusted by brands who demand results
                </p>
              </div>
              
              {/* Logo Strip - Horizontal Scroll on Mobile, Grid on Desktop */}
              <div className="overflow-hidden">
                <motion.div 
                  className="flex md:grid md:grid-cols-6 gap-6 md:gap-8 items-center justify-center"
                  animate={{ x: [0, -20, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                >
                  {clientBrands.map((brand, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                      whileHover={{ scale: 1.05 }}
                      className="flex-shrink-0 h-16 w-32 md:w-auto flex items-center justify-center px-4 py-3 rounded-xl bg-white/80 backdrop-blur-sm border border-zinc-100 hover:border-emerald-200 transition-all duration-300"
                      style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}
                    >
                      {brand.placeholder ? (
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-zinc-200 to-zinc-300 flex items-center justify-center">
                            <Crown className="w-4 h-4 text-zinc-400" />
                          </div>
                          <span className="text-zinc-400 font-medium text-sm">Logo</span>
                        </div>
                      ) : (
                        <span className="text-zinc-600 font-semibold">{brand.name}</span>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ========== IMPRESSIVE COMPARISON SECTION ========== */}
        <section className="py-20 md:py-32 overflow-hidden relative" style={{ backgroundColor: '#0A2818' }}>
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div 
              className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl"
              style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)' }}
              animate={{ 
                x: [0, 30, 0], 
                y: [0, -20, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl"
              style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.12) 0%, transparent 70%)' }}
              animate={{ 
                x: [0, -40, 0], 
                y: [0, 30, 0],
                scale: [1, 1.15, 1]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6"
              >
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 text-sm font-semibold uppercase tracking-wider">AI-Enhanced Delivery</span>
              </motion.div>
              
              <h2 
                className="font-bold mb-6"
                style={{ 
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  lineHeight: '1.1',
                  color: 'white'
                }}
              >
                Same deliverables.
                <br />
                <span 
                  className="italic"
                  style={{ 
                    fontFamily: 'Georgia, serif',
                    background: 'linear-gradient(135deg, #10B981 0%, #14B8A6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  10X more intelligence.
                </span>
              </h2>
              <p className="text-lg md:text-xl max-w-2xl mx-auto text-zinc-400">
                Every service comes with AI enhancement at no extra cost.
              </p>
            </motion.div>

            {/* Comparison Table - Premium Design */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-5xl mx-auto"
            >
              <div className="overflow-hidden rounded-3xl border border-emerald-500/20" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}>
                {/* Header Row */}
                <div className="grid grid-cols-2">
                  <div className="p-6 md:p-8 font-bold text-zinc-400 text-center border-b border-r border-emerald-500/20 bg-white/5">
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-zinc-700/50 flex items-center justify-center">
                        <X className="w-5 h-5 text-zinc-500" />
                      </div>
                      <span className="text-lg">Traditional Agency</span>
                    </div>
                  </div>
                  <div className="p-6 md:p-8 font-bold text-white text-center border-b border-emerald-500/20 bg-gradient-to-r from-emerald-600/20 to-teal-600/20">
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                        <Sparkles className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-lg">OARC Digital</span>
                    </div>
                  </div>
                </div>
                
                {/* Comparison Rows */}
                {comparisonData.map((row, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="grid grid-cols-2 border-b last:border-0 border-emerald-500/10 group hover:bg-emerald-500/5 transition-colors"
                  >
                    <div className="p-5 md:p-6 text-zinc-500 border-r border-emerald-500/10 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-zinc-800/50 flex items-center justify-center flex-shrink-0 opacity-50">
                        <row.icon className="w-5 h-5 text-zinc-500" />
                      </div>
                      <span className="text-sm md:text-base">{row.traditional}</span>
                    </div>
                    <div className="p-5 md:p-6 text-white flex items-center gap-4 bg-emerald-500/5 group-hover:bg-emerald-500/10 transition-colors">
                      <motion.div 
                        className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/20"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <row.icon className="w-5 h-5 text-white" />
                      </motion.div>
                      <span className="text-sm md:text-base font-medium">{row.oarc}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-center mt-12"
              >
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-10 py-4 rounded-full text-lg font-semibold transition-all inline-flex items-center gap-3"
                    style={{ 
                      background: 'linear-gradient(135deg, #10B981 0%, #14B8A6 100%)',
                      color: 'white',
                      boxShadow: '0 10px 40px rgba(16, 185, 129, 0.3)'
                    }}
                    data-testid="button-see-difference"
                  >
                    See the difference <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ========== HOW WE CAN HELP - VAYNERMEDIA STYLE ========== */}
        <section className="py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#F0FFF4' }}>
          <div className="container mx-auto px-6 lg:px-12">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p 
                className="text-xs font-bold uppercase tracking-widest mb-6"
                style={{ color: '#0A2818', letterSpacing: '0.3em' }}
              >
                HOW WE CAN HELP YOU
              </p>
              <h2 
                className="font-bold mb-6"
                style={{ 
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  lineHeight: '1.1',
                  color: '#0A2818'
                }}
              >
                We're relentlessly focused on one thing:
                <br />
                <span 
                  className="italic"
                  style={{ 
                    fontFamily: 'Georgia, serif',
                    background: 'linear-gradient(135deg, #0A2818 0%, #166534 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  growing your brand through creative.
                </span>
              </h2>
              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 rounded-full text-base font-semibold transition-all mt-4"
                  style={{ 
                    background: 'linear-gradient(135deg, #0A2818 0%, #166534 100%)',
                    color: 'white',
                  }}
                  data-testid="button-learn-more"
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>

            {/* Services Grid - VaynerMedia Style */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {howWeHelp.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <Link href={service.link}>
                    <div className="relative h-full rounded-3xl overflow-hidden bg-white border border-zinc-200 hover:border-emerald-300 transition-all duration-500 hover:shadow-2xl">
                      {/* Image/Placeholder Area */}
                      <div className={`relative h-48 bg-gradient-to-br ${service.color} overflow-hidden`}>
                        <div className="absolute inset-0 bg-black/10" />
                        {/* Placeholder Pattern */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                            {service.title === 'Creative' && <Palette className="w-10 h-10 text-white" />}
                            {service.title === 'Paid Media' && <Target className="w-10 h-10 text-white" />}
                            {service.title === 'Strategy' && <Brain className="w-10 h-10 text-white" />}
                            {service.title === 'Branding' && <Crown className="w-10 h-10 text-white" />}
                            {service.title === 'Web Design' && <Monitor className="w-10 h-10 text-white" />}
                            {service.title === 'Video Production' && <Film className="w-10 h-10 text-white" />}
                          </div>
                        </div>
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      
                      {/* Content */}
                      <div className="p-6">
                        <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">
                          {service.category}
                        </p>
                        <h3 className="text-2xl font-bold text-zinc-900 mb-3 group-hover:text-emerald-700 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-zinc-600 text-sm leading-relaxed">
                          {service.description}
                        </p>
                        
                        {/* Arrow */}
                        <div className="mt-4 flex items-center gap-2 text-emerald-600 font-semibold text-sm group-hover:gap-3 transition-all">
                          Learn more <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== DARK SECTION - AI CREATIVE ========== */}
        <section className="py-20 md:py-32 overflow-hidden" style={{ backgroundColor: '#0A2818' }}>
          <div className="container mx-auto px-6 lg:px-12">
            {/* Section Header */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p 
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: 'rgba(255,255,255,0.6)', letterSpacing: '0.3em' }}
              >
                A NEW ERA OF CREATIVE WORK
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
                The support your creative team
                <br />
                <span 
                  className="italic" 
                  style={{ 
                    fontFamily: 'Georgia, serif', 
                    background: 'linear-gradient(135deg, #10B981 0%, #14B8A6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  has been asking for
                </span>
              </h2>
              <p 
                className="text-lg md:text-xl max-w-2xl mx-auto mb-8"
                style={{ color: 'rgba(255,255,255,0.8)' }}
              >
                OARC Digital is your dedicated, on-call creative team to expand your production
                capacity and extend your team's creative capabilities.
              </p>
              <p 
                className="text-base max-w-xl mx-auto mb-10"
                style={{ color: 'rgba(255,255,255,0.6)' }}
              >
                See us as an extension of your team, freeing you to focus
                on your most impactful and creative work.
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 rounded-full text-lg font-semibold transition-all"
                  style={{ 
                    background: 'linear-gradient(135deg, #10B981 0%, #14B8A6 100%)',
                    color: 'white',
                    boxShadow: '0 10px 40px rgba(16, 185, 129, 0.3)'
                  }}
                  data-testid="button-book-intro-call"
                >
                  Book intro call
                </motion.button>
              </Link>
            </motion.div>
          </div>
          
          {/* Creative Carousel Section */}
          <div className="[&_section]:!py-0 [&_section]:!bg-transparent [&_.container]:!px-0 [&_h2]:!hidden [&_p.text-zinc-400]:!hidden">
            <AICreativeSection />
          </div>
        </section>

        {/* ========== DIFFERENTIATION: VALUE BEYOND AI ========== */}
        <AnimatedSection className="py-20 md:py-32 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#F0FFF4] to-transparent" />
          
          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-16">
              <Badge className="bg-[#0A2818] text-white mb-4">THE OARC ADVANTAGE</Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6">
                Every agency offers social media.
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
                We offer <span className="font-bold text-[#0A2818]">4 pillars of strategic value</span> that transform your brand's trajectory.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {valuePillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <div className="relative h-full rounded-3xl overflow-hidden bg-gradient-to-br from-white to-zinc-50 border border-zinc-200 hover:border-emerald-300 p-8 transition-all hover:shadow-2xl">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br opacity-5 group-hover:opacity-10 transition-opacity" 
                         style={{ background: `linear-gradient(135deg, #10B981 0%, transparent 100%)` }} />
                    
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6 shadow-lg`}>
                      <pillar.icon className="w-7 h-7 text-white" />
                    </div>
                    
                    <p className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-2">{pillar.title}</p>
                    <h3 className="text-2xl font-bold text-zinc-900 mb-4">{pillar.headline}</h3>
                    <p className="text-zinc-600 mb-6 leading-relaxed">{pillar.description}</p>
                    
                    <div className="flex items-end gap-3 pt-4 border-t border-zinc-100">
                      <span className={`text-4xl font-bold bg-gradient-to-r ${pillar.color} bg-clip-text text-transparent`}>
                        {pillar.stat}
                      </span>
                      <span className="text-sm text-zinc-500 pb-1">{pillar.statLabel}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ========== WHY OARC - ANIMATED ========== */}
        <AnimatedSection className="py-20 md:py-28 bg-[#F0FFF4]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge className="bg-[#0A2818] text-white mb-4">WHY OARC</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                Creative is everywhere.
              </h2>
              <p className="text-xl text-zinc-600">
                <span className="font-bold text-zinc-900">Creative that performs</span> is rare.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {differentiators.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group"
                >
                  <div className="relative p-8 h-full rounded-3xl bg-white border border-zinc-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300">
                    <motion.div 
                      className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                      whileHover={{ rotate: 5 }}
                    >
                      <item.icon className="w-7 h-7 text-[#0A2818]" />
                    </motion.div>
                    <h3 className="font-bold text-zinc-900 text-lg mb-3">{item.title}</h3>
                    <p className="text-zinc-600 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ========== CHANNELS SECTION ========== */}
        <AnimatedSection className="py-20 md:py-28 bg-white">
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
                  className="bg-[#F0FFF4] rounded-2xl p-5 text-center hover:shadow-xl transition-all border border-emerald-100 group"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-white group-hover:bg-gradient-to-br group-hover:from-emerald-500 group-hover:to-teal-500 flex items-center justify-center transition-all shadow-sm">
                    <channel.icon className="w-6 h-6 text-zinc-700 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-zinc-900 text-sm mb-1">{channel.name}</h3>
                  <p className="text-xs text-zinc-500">{channel.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ========== SOCIAL MEDIA PACKAGES ========== */}
        <AnimatedSection className="py-20 md:py-28 bg-[#F0FFF4]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white mb-4">SERVICE 1</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-2">
                Social Media Management
              </h2>
              <p className="text-xl text-zinc-600 italic">"The Feed & Lead System"</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-12">
              {socialMediaPackages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                >
                  <PremiumPackageCard pkg={pkg} type="monthly" />
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <div className="relative rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600" />
                <div className="relative p-8 text-white">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-xl mb-1">Need something custom?</h3>
                      <p className="text-emerald-100">Let's build a package that fits your exact needs.</p>
                    </div>
                    <Link href="/contact">
                      <Button 
                        className="bg-white text-emerald-600 hover:bg-emerald-50 font-semibold px-6 py-5 rounded-xl"
                        data-testid="button-custom-package"
                      >
                        Get custom pricing
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* ========== WEBSITE PACKAGES ========== */}
        <AnimatedSection className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white mb-4">SERVICE 2</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-2">
                Website Design & Development
              </h2>
              <p className="text-xl text-zinc-600 italic">"The Conversion Machine"</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {websitePackages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                >
                  <PremiumPackageCard pkg={pkg} type="oneTime" />
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ========== BRAND PACKAGES ========== */}
        <AnimatedSection className="py-20 md:py-28 bg-[#F0FFF4]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white mb-4">SERVICE 3</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-2">
                Brand Identity Design
              </h2>
              <p className="text-xl text-zinc-600 italic">"The Recognition System"</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {brandPackages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                >
                  <PremiumPackageCard pkg={pkg} type="oneTime" />
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ========== PROCESS SECTION ========== */}
        <AnimatedSection className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge className="bg-zinc-100 text-zinc-700 mb-4">THE PROCESS</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                Your time commitment: <span className="text-emerald-600">minimal</span>
              </h2>
              <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
                We handle the heavy lifting. You approve and watch results grow.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="bg-[#F0FFF4] rounded-2xl p-6 border border-emerald-100 h-full">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0 text-white font-bold text-lg shadow-lg">
                          {step.step}
                        </div>
                        <div>
                          <h3 className="font-bold text-zinc-900 text-lg mb-1">{step.title}</h3>
                          <p className="text-emerald-600 text-sm font-medium mb-2">{step.time}</p>
                          <p className="text-zinc-600 text-sm">{step.desc}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* ========== IS THIS FOR YOU SECTION ========== */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-[#0A2818] via-[#0D3320] to-[#0A2818]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Is OARC right for <span className="text-emerald-400">you</span>?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-900/50 to-emerald-800/30 border border-emerald-500/30 p-8"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl" />
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">This is for you if</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    'Care about results, not shortcuts',
                    'Want creative tied to business growth',
                    'Are done wasting money on disconnected agencies',
                    'Want a long-term creative partner',
                  ].map((item, i) => (
                    <motion.li 
                      key={i} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3 text-zinc-300"
                    >
                      <Check className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 border border-zinc-700/50 p-8"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl" />
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-red-500 rounded-2xl flex items-center justify-center">
                    <X className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">This is NOT for you if</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    'You want the cheapest option',
                    "You're chasing viral hits without strategy",
                    "You don't track performance",
                    "You're looking for freelancers, not systems",
                  ].map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3 text-zinc-300"
                    >
                      <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <p className="text-3xl font-bold text-white mb-3">Creative shouldn't be a cost.</p>
              <p className="text-xl text-zinc-400">
                It should be a <span className="text-emerald-400 font-bold">growth asset</span>.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ========== FAQ SECTION ========== */}
        <AnimatedSection className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="bg-zinc-100 text-zinc-700 mb-4">FAQ</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">
                  Frequently Asked Questions
                </h2>
              </div>
              
              <div className="bg-[#F0FFF4] rounded-3xl p-8 border border-emerald-100">
                {faqItems.map((item, index) => (
                  <FAQItem key={index} item={item} index={index} />
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* ========== FINAL CTA ========== */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-[#0A2818] via-[#0D3320] to-[#0A2818] relative overflow-hidden">
          <div className="absolute inset-0">
            <motion.div 
              className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
              style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)' }}
              animate={{ 
                x: [0, 50, 0], 
                y: [0, -30, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
              style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.12) 0%, transparent 70%)' }}
              animate={{ 
                x: [0, -50, 0], 
                y: [0, 40, 0],
                scale: [1, 1.15, 1]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          
          <div className="container mx-auto px-6 text-center relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                Ready to turn creative
                <br />
                <span 
                  className="italic"
                  style={{ 
                    fontFamily: 'Georgia, serif',
                    background: 'linear-gradient(135deg, #10B981 0%, #14B8A6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  into revenue?
                </span>
              </h2>
              <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
                Get a customised package recommendation and see exactly how we can help your brand grow.
              </p>
              
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-12 py-5 rounded-full text-xl font-bold transition-all inline-flex items-center gap-3"
                  style={{ 
                    background: 'linear-gradient(135deg, #10B981 0%, #14B8A6 100%)',
                    color: 'white',
                    boxShadow: '0 10px 40px rgba(16, 185, 129, 0.4)'
                  }}
                  data-testid="button-final-cta"
                >
                  Get pricing <ArrowRight className="w-6 h-6" />
                </motion.button>
              </Link>
              
              <p className="text-sm text-zinc-500 mt-8">
                Includes a <span className="text-emerald-400 font-semibold">free Creative Audit</span> for qualifying brands.
              </p>
              
              <div className="mt-10 inline-flex items-center gap-2 text-sm text-zinc-500 bg-white/5 px-5 py-3 rounded-full border border-emerald-500/20">
                <Clock className="w-4 h-4" />
                <span><strong className="text-zinc-300">January onboarding is limited.</strong> Small number of new clients accepted monthly.</span>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
