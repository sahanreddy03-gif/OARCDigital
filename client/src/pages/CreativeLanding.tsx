import { useEffect, useRef, useState } from 'react';
import { Link } from 'wouter';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, Check, ChevronDown, ChevronUp, Sparkles, Zap, Target, 
  TrendingUp, Users, BarChart3, Shield, Clock, Gift, Star, X,
  MessageSquare, Palette, Video, Globe, Mail, Megaphone, Bot,
  Instagram, Linkedin, Play, Award, Lightbulb, Layers, RefreshCw,
  Eye, Crosshair, Brain, Crown, Rocket, LineChart
} from 'lucide-react';
import { SiInstagram, SiFacebook, SiTiktok, SiLinkedin, SiYoutube, SiGoogle } from 'react-icons/si';
import CreativeNavigation from '@/components/CreativeNavigation';
import Footer from '@/components/Footer';
import ParticleField from '@/components/ParticleField';
import PhoneMockup from '@/components/PhoneMockup';
import AICreativeSection from '@/components/AICreativeSection';
import { createFAQSchema } from '@/utils/structuredData';

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

  const faqSchema = createFAQSchema(
    faqItems.map(item => ({ question: item.q, answer: item.a }))
  );

  return (
    <>
      <Helmet>
        <title>Creative That Converts | AI-Enhanced Creative Agency Malta | OARC Digital</title>
        <meta name="description" content="High-impact creative for social, brand, and campaigns — enhanced with AI optimisation. Creative agency Malta delivering creative systems that drive revenue, not just reach." />
        <link rel="canonical" href="https://oarcdigital.com/creative" />
        <meta property="og:title" content="Creative That Converts | OARC Digital Malta" />
        <meta property="og:description" content="High-impact creative for social, brand, and campaigns — enhanced with AI optimisation to turn attention into action." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://oarcdigital.com/creative" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <CreativeNavigation />
      
      <main className="bg-[#fafaf8]">
        {/* ========== HERO SECTION - ANTIGRAVITY INSPIRED ========== */}
        <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
          <ParticleField 
            particleCount={100}
            colors={['#2FA1D6', '#c4ff4d', '#8b5cf6', '#06b6d4', '#f472b6']}
            speed={0.4}
            connectionDistance={100}
            showConnections={true}
          />
          
          <div className="absolute inset-0 bg-gradient-to-b from-[#fafaf8]/80 via-transparent to-[#fafaf8]" />
          
          <motion.div 
            style={{ opacity: heroOpacity, y: heroY }}
            className="relative container mx-auto px-6 lg:px-12 pt-24"
          >
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-zinc-200 shadow-sm mb-6"
                >
                  <span className="w-2 h-2 bg-[#c4ff4d] rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-zinc-600">Malta's AI-Native Creative Agency</span>
                </motion.div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6" data-testid="text-hero-headline">
                  <span className="text-zinc-900">Creative</span>
                  <br />
                  <span className="relative">
                    <span className="bg-gradient-to-r from-[#2FA1D6] via-purple-500 to-[#c4ff4d] bg-clip-text text-transparent">
                      That Converts
                    </span>
                    <motion.svg
                      className="absolute -bottom-2 left-0 w-full"
                      viewBox="0 0 300 12"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 0.8, duration: 1 }}
                    >
                      <motion.path
                        d="M0 6 Q75 0 150 6 Q225 12 300 6"
                        fill="none"
                        stroke="url(#underlineGradient)"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id="underlineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#2FA1D6" />
                          <stop offset="50%" stopColor="#8b5cf6" />
                          <stop offset="100%" stopColor="#c4ff4d" />
                        </linearGradient>
                      </defs>
                    </motion.svg>
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-zinc-600 mb-6 max-w-lg leading-relaxed">
                  Not just looks good — <em className="text-zinc-900 font-medium not-italic">it drives revenue.</em>
                </p>
                
                <p className="text-lg text-zinc-500 mb-8 max-w-lg">
                  High-impact creative for social, brand, and campaigns — enhanced with 
                  <span className="text-[#2FA1D6] font-medium"> AI optimisation</span> to turn attention into action.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-10">
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-[#c4ff4d] text-zinc-900 px-8 py-4 rounded-full text-lg font-bold shadow-xl shadow-[#c4ff4d]/30 hover:shadow-2xl hover:shadow-[#c4ff4d]/40 transition-all flex items-center gap-2"
                      data-testid="button-hero-get-pricing"
                    >
                      Get pricing <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </Link>
                  <Link href="/our-work">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-white text-zinc-700 px-8 py-4 rounded-full text-lg font-semibold border-2 border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 transition-all flex items-center gap-2"
                      data-testid="button-hero-see-examples"
                    >
                      <Play className="w-5 h-5" /> See examples
                    </motion.button>
                  </Link>
                </div>
                
                <div className="flex items-center gap-6 text-sm text-zinc-500">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Free Creative Audit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>No lock-in contracts</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative hidden lg:flex items-center justify-center"
              >
                <motion.div 
                  className="relative"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="absolute -inset-8 bg-gradient-to-r from-[#2FA1D6]/20 via-purple-500/20 to-[#c4ff4d]/20 rounded-[3rem] blur-3xl" />
                  <div className="relative transform scale-90">
                    <PhoneMockup />
                  </div>
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  className="absolute -top-4 -right-8 bg-white rounded-2xl p-4 shadow-2xl border border-zinc-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500">Engagement</p>
                      <p className="text-lg font-bold text-zinc-900">+247%</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, -6, 0], rotate: [0, -2, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
                  className="absolute bottom-20 -left-12 bg-white rounded-2xl p-4 shadow-2xl border border-zinc-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#c4ff4d] rounded-xl flex items-center justify-center">
                      <LineChart className="w-5 h-5 text-zinc-900" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500">Leads</p>
                      <p className="text-lg font-bold text-zinc-900">4.7x ROI</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-zinc-400"
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </section>

        {/* ========== PLATFORM VIDEO SHOWCASE ========== */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px]" />
          
          <div className="container mx-auto px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Badge className="bg-zinc-100 text-zinc-700 mb-4">REAL RESULTS</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                Content that performs across every platform
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                Watch our work in action. Real campaigns, real engagement, real results.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-6xl mx-auto">
              {platformVideos.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative"
                >
                  <div className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500`} />
                  
                  <div className="relative bg-zinc-900 rounded-2xl overflow-hidden shadow-xl aspect-[9/16]">
                    <video
                      src={item.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    <div className="absolute top-4 left-4">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-xs text-zinc-400 uppercase tracking-wider mb-1">{item.platform}</p>
                      <p className="text-2xl font-bold text-white">{item.stat}</p>
                      <p className="text-sm text-zinc-400">{item.label}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== AI CREATIVE SHOWCASE - MOVED UP ========== */}
        <section className="py-16 md:py-24 bg-[#fafaf8] overflow-hidden">
          <div className="container mx-auto px-6 mb-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Badge className="bg-[#c4ff4d]/20 text-zinc-700 border-[#c4ff4d]/30 mb-4">FULL-SPECTRUM CREATIVE</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                Every type of creative work you'll ever need
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                From ad creatives and social content to full brand identities — all designed to perform, not just look pretty.
              </p>
            </motion.div>
          </div>
          
          <div className="[&_section]:!py-0 [&_section]:!bg-transparent [&_.container]:!px-0 [&_h2]:!hidden [&_p.text-zinc-400]:!hidden">
            <AICreativeSection />
          </div>
        </section>

        {/* ========== DIFFERENTIATION: VALUE BEYOND AI ========== */}
        <AnimatedSection className="py-20 md:py-32 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#fafaf8] to-transparent" />
          
          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-16">
              <Badge className="bg-zinc-900 text-white mb-4">THE OARC ADVANTAGE</Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6">
                Every Malta agency offers social media.
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
                We offer <span className="font-bold text-zinc-900">4 pillars of strategic value</span> that transform your brand's trajectory.
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
                  <div className="relative h-full rounded-3xl overflow-hidden bg-gradient-to-br from-white to-zinc-50 border border-zinc-200 hover:border-zinc-300 p-8 transition-all hover:shadow-2xl">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br opacity-5 group-hover:opacity-10 transition-opacity" 
                         style={{ background: `linear-gradient(135deg, ${pillar.color.split(' ')[0].replace('from-', '')} 0%, transparent 100%)` }} />
                    
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

        {/* ========== AI VS TRADITIONAL COMPARISON ========== */}
        <AnimatedSection className="py-20 md:py-28 bg-[#fafaf8]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <Badge className="bg-[#2FA1D6]/10 text-[#2FA1D6] border-[#2FA1D6]/20 mb-4">AI-ENHANCED DELIVERY</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                Same deliverables. <span className="text-[#2FA1D6]">10X more intelligence.</span>
              </h2>
              <p className="text-xl text-zinc-600">
                Every service comes with AI enhancement at no extra cost.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-xl">
                <div className="grid grid-cols-2">
                  <div className="bg-zinc-100 p-5 font-bold text-zinc-700 text-center border-b border-r border-zinc-200">
                    Traditional Agency
                  </div>
                  <div className="bg-gradient-to-r from-[#c4ff4d] to-[#9ed919] p-5 font-bold text-zinc-900 text-center border-b">
                    OARC Digital
                  </div>
                </div>
                {comparisonData.map((row, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="grid grid-cols-2 border-b last:border-0 border-zinc-100"
                  >
                    <div className="p-5 text-zinc-500 border-r border-zinc-100 flex items-center text-sm">
                      {row.traditional}
                    </div>
                    <div className="p-5 text-zinc-900 font-medium flex items-center bg-[#c4ff4d]/5 text-sm">
                      <Check className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0" />
                      {row.oarc}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* ========== WHY OARC - ANIMATED ========== */}
        <AnimatedSection className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge className="bg-zinc-100 text-zinc-700 mb-4">WHY OARC</Badge>
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
                  <div className="relative p-8 h-full rounded-3xl bg-gradient-to-br from-zinc-50 to-white border border-zinc-200 hover:border-[#c4ff4d] hover:shadow-xl transition-all duration-300">
                    <motion.div 
                      className="w-14 h-14 bg-gradient-to-br from-[#c4ff4d]/20 to-[#c4ff4d]/40 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                      whileHover={{ rotate: 5 }}
                    >
                      <item.icon className="w-7 h-7 text-zinc-900" />
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

        {/* ========== SOCIAL MEDIA PACKAGES ========== */}
        <AnimatedSection className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge className="bg-[#c4ff4d] text-zinc-900 mb-4">SERVICE 1</Badge>
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
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500" />
                <div className="relative p-8 text-white">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Shield className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">The Engagement Guarantee</h3>
                      <p className="text-white/90 text-lg mb-3">
                        "If your engagement doesn't increase by <strong>50% in 90 days</strong>, we work <strong>100% FREE</strong> until it does."
                      </p>
                      <p className="text-white/70 text-sm">
                        PLUS: Miss a posting deadline = that week is FREE
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* ========== WEBSITE PACKAGES ========== */}
        <AnimatedSection className="py-20 md:py-28 bg-[#fafaf8]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge className="bg-[#2FA1D6]/10 text-[#2FA1D6] border-[#2FA1D6]/20 mb-4">SERVICE 2</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-2">
                Website Design
              </h2>
              <p className="text-xl text-zinc-600 italic">"The Click & Convert System"</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-12">
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
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <div className="relative rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#2FA1D6] to-indigo-500" />
                <div className="relative p-8 text-white">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">The 4-Week Launch Guarantee</h3>
                      <p className="text-white/90 text-lg mb-3">
                        "Your website goes live in <strong>4 weeks</strong> or <strong>€300 off</strong>."
                      </p>
                      <p className="text-white/70 text-sm">
                        PLUS: Unlimited revisions until you love it • You own everything forever
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* ========== BRAND PACKAGES ========== */}
        <AnimatedSection className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge className="bg-purple-100 text-purple-700 mb-4">SERVICE 3</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-2">
                Brand Identity
              </h2>
              <p className="text-xl text-zinc-600 italic">"The Look & Lead System"</p>
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

        {/* ========== HOW IT WORKS ========== */}
        <AnimatedSection className="py-20 md:py-28 bg-[#fafaf8]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge className="bg-zinc-100 text-zinc-700 mb-4">PROCESS</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                How it works
              </h2>
              <p className="text-lg text-zinc-600">
                Simple, structured, and built to perform.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#c4ff4d] via-[#2FA1D6] to-purple-500 hidden md:block rounded-full" />
                
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="relative flex gap-6 mb-8 last:mb-0"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="relative z-10 w-16 h-16 bg-gradient-to-br from-[#c4ff4d] to-[#9ed919] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl shadow-[#c4ff4d]/30"
                    >
                      <span className="text-2xl font-bold text-zinc-900">{step.step}</span>
                    </motion.div>
                    <div className="flex-1 bg-white rounded-2xl p-6 border border-zinc-200 hover:shadow-lg transition-shadow">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="font-bold text-zinc-900 text-lg">{step.title}</h3>
                        <span className="text-xs bg-zinc-100 text-zinc-600 px-3 py-1 rounded-full">
                          {step.time}
                        </span>
                      </div>
                      <p className="text-zinc-600">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="text-center mt-16">
              <p className="text-zinc-600 mb-8">
                <strong>Total setup time:</strong> 1 week • <strong>Your time:</strong> ~5 hours first month
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#c4ff4d] text-zinc-900 px-10 py-4 rounded-full text-lg font-bold shadow-xl shadow-[#c4ff4d]/30 hover:shadow-2xl transition-all inline-flex items-center gap-2"
                  data-testid="button-how-it-works-cta"
                >
                  Get pricing <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* ========== WHO IT'S FOR / NOT FOR ========== */}
        <section className="py-20 md:py-28 bg-zinc-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:48px_48px]" />
          
          <div className="container mx-auto px-6 relative">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700/50 p-8"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl" />
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">This is built for brands that</h3>
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
                className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700/50 p-8"
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
                It should be a <span className="text-[#c4ff4d] font-bold">growth asset</span>.
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
              
              <div className="bg-zinc-50 rounded-3xl p-8">
                {faqItems.map((item, index) => (
                  <FAQItem key={index} item={item} index={index} />
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* ========== FINAL CTA ========== */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c4ff4d]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#2FA1D6]/10 rounded-full blur-3xl" />
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
                <span className="text-[#c4ff4d]">into revenue?</span>
              </h2>
              <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
                Get a customised package recommendation and see exactly how we can help your brand grow.
              </p>
              
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#c4ff4d] text-zinc-900 px-12 py-5 rounded-full text-xl font-bold shadow-2xl shadow-[#c4ff4d]/30 hover:shadow-[#c4ff4d]/50 transition-all inline-flex items-center gap-3"
                  data-testid="button-final-cta"
                >
                  Get pricing <ArrowRight className="w-6 h-6" />
                </motion.button>
              </Link>
              
              <p className="text-sm text-zinc-500 mt-8">
                Includes a <span className="text-[#c4ff4d] font-semibold">free Creative Audit</span> for Malta-based brands.
              </p>
              
              <div className="mt-10 inline-flex items-center gap-2 text-sm text-zinc-500 bg-white/5 px-5 py-3 rounded-full">
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
