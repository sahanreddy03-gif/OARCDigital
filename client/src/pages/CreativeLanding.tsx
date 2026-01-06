import { useEffect, useRef, useState } from 'react';
import { Link } from 'wouter';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, Check, ChevronDown, ChevronUp, Sparkles, Zap, Target, 
  TrendingUp, Users, BarChart3, Shield, Clock, Gift, Star, X,
  MessageSquare, Palette, Video, Globe, Mail, Megaphone, Bot,
  Instagram, Linkedin, Play, Award, Lightbulb, Layers, RefreshCw
} from 'lucide-react';
import { SiInstagram, SiFacebook, SiTiktok, SiLinkedin, SiYoutube, SiGoogle } from 'react-icons/si';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PhoneMockup from '@/components/PhoneMockup';
import AICreativeSection from '@/components/AICreativeSection';
import { createFAQSchema } from '@/utils/structuredData';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};

const floatAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
  }
};

const platformMetrics = [
  { platform: 'IG POST', metric: '2.4M', color: 'from-pink-500 to-purple-600', icon: SiInstagram },
  { platform: 'VIDEO', metric: '8.7M+', color: 'from-red-500 to-orange-500', icon: Play },
  { platform: 'TIKTOK', metric: '5.2M', color: 'from-cyan-400 to-pink-500', icon: SiTiktok },
  { platform: 'AD ROAS', metric: '4.7x', color: 'from-orange-500 to-amber-500', icon: TrendingUp },
  { platform: 'REELS', metric: '890K', color: 'from-emerald-500 to-teal-500', icon: Video },
  { platform: 'LINKEDIN', metric: 'B2B', color: 'from-blue-600 to-indigo-600', icon: SiLinkedin },
];

const comparisonData = [
  { traditional: 'Social media posts', oarc: 'Social media + AI optimization + AI responder' },
  { traditional: 'Website design', oarc: 'Website + AI chatbot included FREE' },
  { traditional: 'Brand identity', oarc: 'Brand + AI voice guide + AI asset generator' },
  { traditional: 'Video production', oarc: 'Video + AI script + AI repurposing' },
  { traditional: 'Paid ads', oarc: 'Paid ads + AI audience analysis + AI creative' },
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
  {
    q: 'Who owns the creative and content?',
    a: 'You do. All creative assets, designs, and content belong to you. We believe in transparency, ownership, and trust.',
  },
  {
    q: 'What happens after I click "Get pricing"?',
    a: 'You\'ll share a few quick details, instantly view recommended packages and pricing ranges, and have the option to book a free Creative Audit. No pressure. No spam.',
  },
  {
    q: 'Is this suitable for small businesses in Malta?',
    a: 'Yes — if you care about quality and growth. This is not for businesses looking for the cheapest option. It is for brands that want creative tied to real outcomes.',
  },
];

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function PackageTier({ pkg, type }: { pkg: any; type: 'monthly' | 'oneTime' }) {
  return (
    <Card className={`relative p-6 lg:p-8 bg-white border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
      pkg.popular ? 'border-[#c4ff4d] shadow-xl' : 'border-zinc-200 hover:border-zinc-300'
    }`}>
      {pkg.popular && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#c4ff4d] text-black font-bold px-4 py-1">
          <Star className="w-3 h-3 mr-1" /> MOST POPULAR
        </Badge>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-zinc-900 mb-2">{pkg.name}</h3>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-4xl font-bold text-zinc-900">€{pkg.price}</span>
          <span className="text-zinc-500">{type === 'monthly' ? '/month' : ''}</span>
        </div>
        <p className="text-sm text-zinc-600 mt-2">{pkg.bestFor}</p>
      </div>

      <div className="space-y-3 mb-6">
        <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">What you get</p>
        {pkg.features.map((feature: string, i: number) => (
          <div key={i} className="flex items-start gap-2">
            <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
            <span className="text-sm text-zinc-700">{feature}</span>
          </div>
        ))}
      </div>

      <div className="space-y-2 mb-6 p-4 bg-zinc-50 rounded-lg">
        <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Included bonuses</p>
        {pkg.bonuses.map((bonus: string, i: number) => (
          <div key={i} className="flex items-start gap-2">
            <Gift className="w-3.5 h-3.5 text-[#c4ff4d] mt-0.5 flex-shrink-0" />
            <span className="text-xs text-zinc-600">{bonus}</span>
          </div>
        ))}
      </div>

      <div className="text-center mb-4">
        <p className="text-xs text-zinc-500">
          Total value: <span className="line-through">{pkg.totalValue}</span>
        </p>
        <p className="text-sm font-bold text-emerald-600">Save {pkg.savings}</p>
      </div>

      <Link href="/contact">
        <Button 
          className={`w-full ${pkg.popular ? 'bg-[#c4ff4d] text-black hover:bg-[#b5ef3d]' : 'bg-zinc-900 text-white hover:bg-zinc-800'}`}
          data-testid={`button-get-pricing-${pkg.name.toLowerCase()}`}
        >
          Get pricing <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </Link>
    </Card>
  );
}

function FAQItem({ item, index }: { item: { q: string; a: string }; index: number }) {
  const [isOpen, setIsOpen] = useState(index === 0);
  
  return (
    <div className="border-b border-zinc-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left hover:bg-zinc-50 transition-colors px-2 -mx-2 rounded"
        data-testid={`button-faq-${index}`}
      >
        <span className="font-semibold text-zinc-900 pr-4">{item.q}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-zinc-500 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-zinc-500 flex-shrink-0" />
        )}
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-zinc-600 leading-relaxed">{item.a}</p>
      </motion.div>
    </div>
  );
}

export default function CreativeLanding() {
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

      <Navigation />
      
      <main className="bg-[#fafaf8]">
        {/* ========== HERO SECTION ========== */}
        <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-16">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-[#c4ff4d]/20 to-emerald-200/20 rounded-full blur-3xl" />
            
            {/* Geometric connecting lines */}
            <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#c4ff4d" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <path d="M100,100 Q300,50 500,150 T900,100" stroke="url(#lineGrad)" strokeWidth="1" fill="none" className="hidden lg:block" />
              <path d="M50,300 Q250,250 450,350 T850,300" stroke="url(#lineGrad)" strokeWidth="1" fill="none" className="hidden lg:block" />
            </svg>
            
            {/* Floating social icons */}
            <motion.div {...floatAnimation} className="absolute top-32 right-[20%] hidden lg:block">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <SiInstagram className="w-6 h-6 text-white" />
              </div>
            </motion.div>
            <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 0.5 }} className="absolute top-48 right-[30%] hidden lg:block">
              <div className="w-10 h-10 bg-[#1877f2] rounded-xl flex items-center justify-center shadow-lg">
                <SiFacebook className="w-5 h-5 text-white" />
              </div>
            </motion.div>
            <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 3.5, repeat: Infinity, delay: 1 }} className="absolute top-24 right-[40%] hidden lg:block">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center shadow-lg">
                <SiTiktok className="w-4 h-4 text-white" />
              </div>
            </motion.div>
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4.5, repeat: Infinity, delay: 0.3 }} className="absolute top-56 right-[15%] hidden lg:block">
              <div className="w-10 h-10 bg-[#0a66c2] rounded-xl flex items-center justify-center shadow-lg">
                <SiLinkedin className="w-5 h-5 text-white" />
              </div>
            </motion.div>
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0.8 }} className="absolute top-36 right-[10%] hidden lg:block">
              <div className="w-9 h-9 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-lg">❤️</span>
              </div>
            </motion.div>
            <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1.2 }} className="absolute top-64 right-[25%] hidden lg:block">
              <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-lg">😊</span>
              </div>
            </motion.div>
          </div>

          <div className="relative container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-4" data-testid="text-hero-label">
                  SOCIAL MEDIA MANAGEMENT
                </p>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6" data-testid="text-hero-headline">
                  <span className="text-zinc-900">Creative</span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                    That Converts
                  </span>
                </h1>
                
                <p className="text-xl text-zinc-600 mb-4 max-w-lg" data-testid="text-hero-subheadline">
                  Not just looks good — <em className="text-zinc-900 font-medium">it drives revenue.</em>
                </p>
                
                <p className="text-lg text-zinc-600 mb-8 max-w-lg">
                  High-impact creative for social, brand, and campaigns —
                  <span className="text-zinc-900 font-medium"> enhanced with AI optimisation</span> to turn attention into action.
                </p>
                
                <p className="text-sm text-zinc-500 mb-6">
                  Built for brands that refuse to compete on price.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <Link href="/contact">
                    <Button 
                      size="lg" 
                      className="bg-[#c4ff4d] text-black hover:bg-[#b5ef3d] font-bold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
                      data-testid="button-hero-get-pricing"
                    >
                      Get pricing <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <Link href="/our-work">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="border-2 border-zinc-300 text-zinc-700 hover:bg-zinc-100 font-semibold px-8 py-6 text-lg rounded-full"
                      data-testid="button-hero-see-examples"
                    >
                      <Play className="w-5 h-5 mr-2" /> See examples
                    </Button>
                  </Link>
                </div>
                
                <p className="text-sm text-zinc-500">
                  Includes <span className="font-semibold text-zinc-700">FREE Creative Audit</span> and AI-enhanced optimisation on every package.
                </p>
              </motion.div>

              {/* Right: Phone Mockup */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative hidden lg:block"
              >
                <div className="relative max-w-sm mx-auto">
                  <PhoneMockup />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ========== PLATFORM METRICS STRIP ========== */}
        <section className="py-8 bg-white border-y border-zinc-100">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
              {platformMetrics.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1`}
                >
                  <div className={`bg-gradient-to-br ${item.color} p-4 md:p-5 min-w-[100px] md:min-w-[120px]`}>
                    <div className="flex flex-col items-center text-white">
                      <item.icon className="w-5 h-5 mb-1 opacity-80" />
                      <span className="text-2xl md:text-3xl font-bold">{item.metric}</span>
                      <span className="text-[10px] md:text-xs uppercase tracking-wider opacity-80">{item.platform}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== AI VS TRADITIONAL COMPARISON ========== */}
        <AnimatedSection className="py-20 md:py-28">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <Badge className="bg-zinc-100 text-zinc-700 mb-4">THE OARC DIFFERENCE</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                Every Malta agency offers social media.
              </h2>
              <p className="text-xl text-zinc-600">
                <span className="font-bold text-zinc-900">ZERO</span> offer it WITH AI enhancement baked in.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-xl">
              <div className="grid grid-cols-2">
                <div className="bg-zinc-100 p-4 font-bold text-zinc-700 text-center border-b border-r border-zinc-200">
                  Traditional Agency
                </div>
                <div className="bg-[#c4ff4d] p-4 font-bold text-black text-center border-b border-zinc-200">
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
                  <div className="p-4 text-zinc-600 border-r border-zinc-100 flex items-center">
                    {row.traditional}
                  </div>
                  <div className="p-4 text-zinc-900 font-medium flex items-center bg-[#c4ff4d]/5">
                    <Check className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                    {row.oarc}
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
                Wherever your audience is — we design creative that fits. Each platform has its own behaviour, formats, and conversion logic.
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
                  whileHover={{ y: -5 }}
                  className="bg-zinc-50 rounded-xl p-5 text-center hover:bg-white hover:shadow-lg transition-all border border-zinc-100"
                >
                  <channel.icon className="w-8 h-8 mx-auto mb-3 text-zinc-700" />
                  <h3 className="font-semibold text-zinc-900 text-sm mb-1">{channel.name}</h3>
                  <p className="text-xs text-zinc-500">{channel.desc}</p>
                </motion.div>
              ))}
            </div>
            
            <p className="text-center text-sm text-zinc-500 mt-8">
              Local + international coverage. Creative adapted for Malta market behaviour.
            </p>
          </div>
        </AnimatedSection>

        {/* ========== WHAT MAKES OARC DIFFERENT ========== */}
        <AnimatedSection className="py-20 md:py-28">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
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
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full bg-white border-zinc-200 hover:border-[#c4ff4d] hover:shadow-xl transition-all group">
                    <div className="w-12 h-12 bg-[#c4ff4d]/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#c4ff4d]/40 transition-colors">
                      <item.icon className="w-6 h-6 text-zinc-900" />
                    </div>
                    <h3 className="font-bold text-zinc-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-zinc-600 leading-relaxed">{item.desc}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ========== CREATIVE WORK SHOWCASE ========== */}
        <section className="py-16 md:py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-6 mb-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Badge className="bg-zinc-100 text-zinc-700 mb-4">FULL-SPECTRUM CREATIVE</Badge>
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

        {/* ========== SOCIAL MEDIA PACKAGES ========== */}
        <AnimatedSection className="py-20 md:py-28 bg-zinc-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <Badge className="bg-[#c4ff4d] text-black mb-4">SERVICE 1</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-2">
                Social Media Management
              </h2>
              <p className="text-xl text-zinc-600 italic">"The Feed & Lead System™"</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
              {socialMediaPackages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <PackageTier pkg={pkg} type="monthly" />
                </motion.div>
              ))}
            </div>
            
            {/* Guarantee */}
            <div className="max-w-3xl mx-auto">
              <Card className="p-6 bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-900 mb-1">The Engagement Guarantee</h3>
                    <p className="text-zinc-700">
                      <strong>"If your engagement doesn't increase by 50% in 90 days, we work 100% FREE until it does."</strong>
                    </p>
                    <p className="text-sm text-zinc-600 mt-2">
                      PLUS: Miss a posting deadline = that week is FREE • Response time over 4 hours = €50 credit
                    </p>
                  </div>
                </div>
              </Card>
            </div>
            
            <p className="text-center text-sm text-zinc-500 mt-8">
              Most brands invest between <strong>€997–€1,997/month</strong> depending on platforms, volume, and goals.
            </p>
          </div>
        </AnimatedSection>

        {/* ========== WEBSITE PACKAGES ========== */}
        <AnimatedSection className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <Badge className="bg-blue-100 text-blue-700 mb-4">SERVICE 2</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-2">
                Website Design
              </h2>
              <p className="text-xl text-zinc-600 italic">"The Click & Convert System™"</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
              {websitePackages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <PackageTier pkg={pkg} type="oneTime" />
                </motion.div>
              ))}
            </div>
            
            {/* Guarantee */}
            <div className="max-w-3xl mx-auto">
              <Card className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-900 mb-1">The 4-Week Launch Guarantee</h3>
                    <p className="text-zinc-700">
                      <strong>"Your website goes live in 4 weeks or €300 off."</strong>
                    </p>
                    <p className="text-sm text-zinc-600 mt-2">
                      PLUS: Every extra week = additional €100 credit • 30-day money-back if not satisfied • Unlimited revisions until you love it
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </AnimatedSection>

        {/* ========== BRAND PACKAGES ========== */}
        <AnimatedSection className="py-20 md:py-28 bg-zinc-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <Badge className="bg-purple-100 text-purple-700 mb-4">SERVICE 3</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-2">
                Brand Identity
              </h2>
              <p className="text-xl text-zinc-600 italic">"The Look & Lead System™"</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {brandPackages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <PackageTier pkg={pkg} type="oneTime" />
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ========== HOW IT WORKS ========== */}
        <AnimatedSection className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
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
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#c4ff4d] via-emerald-400 to-teal-400 hidden md:block" />
                
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="relative flex gap-6 mb-8 last:mb-0"
                  >
                    <div className="relative z-10 w-16 h-16 bg-[#c4ff4d] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <span className="text-2xl font-bold text-black">{step.step}</span>
                    </div>
                    <Card className="flex-1 p-6 bg-white border-zinc-200 hover:shadow-lg transition-shadow">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="font-bold text-zinc-900">{step.title}</h3>
                        <Badge variant="outline" className="text-xs">⏱ {step.time}</Badge>
                      </div>
                      <p className="text-zinc-600">{step.desc}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-zinc-600 mb-6">
                <strong>Total setup time:</strong> 1 week • <strong>Your time:</strong> ~5 hours first month, 2-3 hours/month ongoing
              </p>
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-[#c4ff4d] text-black hover:bg-[#b5ef3d] font-bold px-8"
                  data-testid="button-how-it-works-cta"
                >
                  Get pricing <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* ========== WHO IT'S FOR / NOT FOR ========== */}
        <AnimatedSection className="py-20 md:py-28 bg-zinc-900">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* For */}
              <Card className="p-8 bg-zinc-800 border-zinc-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">This is built for brands that</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Care about results, not shortcuts',
                    'Want creative tied to business growth',
                    'Are done wasting money on disconnected agencies',
                    'Want a long-term creative partner, not vendors',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-zinc-300">
                      <Check className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
              
              {/* Not For */}
              <Card className="p-8 bg-zinc-800 border-zinc-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                    <X className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">This is NOT for you if</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'You want the cheapest option',
                    'You\'re chasing viral hits without strategy',
                    'You don\'t track performance',
                    'You\'re looking for freelancers, not systems',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-zinc-300">
                      <X className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-2xl font-bold text-white mb-2">Creative shouldn't be a cost.</p>
              <p className="text-xl text-zinc-400">It should be a <span className="text-[#c4ff4d] font-bold">growth asset</span>.</p>
            </div>
          </div>
        </AnimatedSection>

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
              
              <div className="divide-y divide-zinc-200">
                {faqItems.map((item, index) => (
                  <FAQItem key={index} item={item} index={index} />
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* ========== FINAL CTA ========== */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to turn creative into revenue?
              </h2>
              <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
                Get a customised package recommendation and see exactly how we can help your brand grow.
              </p>
              
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-[#c4ff4d] text-black hover:bg-[#b5ef3d] font-bold px-12 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                  data-testid="button-final-cta"
                >
                  Get pricing <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              
              <p className="text-sm text-zinc-500 mt-6">
                Includes a <span className="text-[#c4ff4d] font-semibold">free Creative Audit</span> for Malta-based brands.
              </p>
              
              <div className="mt-8 flex items-center justify-center gap-2 text-sm text-zinc-500">
                <Clock className="w-4 h-4" />
                <span><strong>January onboarding is limited.</strong> We take on a small number of new creative clients each month to maintain quality.</span>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
