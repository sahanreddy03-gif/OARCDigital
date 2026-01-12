import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, animate } from 'framer-motion';
import { Check, MessageSquare, Phone, Bot, Users, Building2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

interface PricingTier {
  id: string;
  name: string;
  category: 'productized' | 'managed' | 'enterprise';
  price: string;
  period: string;
  setup: string;
  bestFor: string;
  features: string[];
  overage?: string;
  cta: string;
  ctaLink: string;
  popular?: boolean;
  icon: typeof MessageSquare;
}

const pricingTiers: PricingTier[] = [
  {
    id: 'chatbot-starter',
    name: 'AI Chatbot',
    category: 'productized',
    price: '€79',
    period: '/month',
    setup: '€199 one-time setup',
    bestFor: 'Micro-businesses, landing pages, freelancers',
    features: [
      '1 AI chatbot (website or social)',
      'Custom training on FAQs & brand tone',
      '1,000 conversations/month',
      'Appointment booking & lead capture',
      'Weekly summary + basic reporting',
      'GDPR-ready processing'
    ],
    overage: '€0.05/extra conversation',
    cta: 'Get Chatbot Starter',
    ctaLink: '/contact',
    icon: MessageSquare
  },
  {
    id: 'voice-starter',
    name: 'AI Voice Assistant',
    category: 'productized',
    price: '€179',
    period: '/month',
    setup: '€299 one-time setup',
    bestFor: 'Small businesses automating inbound calls',
    features: [
      '1 AI voice agent + dedicated number',
      'Custom phone scripts & context',
      '300 call minutes/month',
      'Call-to-calendar booking',
      'Voicemail transcription',
      'Basic call analytics'
    ],
    overage: '€0.15/extra minute',
    cta: 'Get Voice Starter',
    ctaLink: '/contact',
    icon: Phone
  },
  {
    id: 'single-agent',
    name: 'Single Agent',
    category: 'managed',
    price: '€397',
    period: '/month',
    setup: '€297 one-time setup',
    bestFor: 'Restaurants, retail, solo professionals',
    features: [
      '1 AI agent (Bookings OR Support OR Leads)',
      'Custom training on products & policies',
      '500 conversations/month',
      '1 channel (website OR WhatsApp)',
      'Live widget + email/SMS alerts',
      'Monthly report + 14-day guarantee'
    ],
    overage: '€0.15/extra conversation',
    cta: 'Get Single Agent',
    ctaLink: '/contact',
    icon: Bot
  },
  {
    id: 'ai-team',
    name: 'AI Team',
    category: 'managed',
    price: '€1,497',
    period: '/month',
    setup: '€497 one-time setup',
    bestFor: 'Agencies, hospitality, real estate, professional services',
    features: [
      '3 AI agents (Sales + Support + Bookings)',
      'Comprehensive training & workflow mapping',
      '2,500 conversations/month',
      'Multi-channel: Web, WhatsApp, Social',
      'CRM sync + analytics dashboard',
      'Weekly optimization + 90-day ROI promise'
    ],
    overage: '€0.10/extra conversation',
    cta: 'Get AI Team',
    ctaLink: '/contact',
    popular: true,
    icon: Users
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    category: 'enterprise',
    price: 'Custom',
    period: '',
    setup: 'Bespoke implementation',
    bestFor: 'Complex, regulated, high-volume deployments',
    features: [
      'Up to 15 AI agents configured',
      'Enterprise-grade continuous fine-tuning',
      'Full API, payments, CRM integrations',
      'Multilingual + compliance options',
      'Dedicated success manager',
      'SLA choices + weekly strategy calls'
    ],
    cta: 'Book Transformation Call',
    ctaLink: '/contact',
    icon: Building2
  }
];

export function PricingSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const updateActiveIndex = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.offsetWidth * 0.85;
      const gap = 16;
      const newIndex = Math.round(scrollLeft / (cardWidth + gap));
      setActiveIndex(Math.min(newIndex, pricingTiers.length - 1));
    }
  };

  useEffect(() => {
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener('scroll', updateActiveIndex);
      return () => ref.removeEventListener('scroll', updateActiveIndex);
    }
  }, []);

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth * 0.85;
      const gap = 16;
      const targetScroll = index * (cardWidth + gap);
      
      scrollRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative z-10 py-16 sm:py-24 px-0 sm:px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12 sm:mb-16 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
            Pricing
          </h2>
          <p className="text-base sm:text-lg text-white/50 max-w-xl mx-auto">
            Clear pricing. No surprises. Choose your entry point.
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-4 px-4">
          {pricingTiers.map((tier, idx) => (
            <PricingCard key={tier.id} tier={tier} index={idx} />
          ))}
        </div>

        {/* Mobile/Tablet Snap Scroll Carousel */}
        <div className="lg:hidden">
          <div 
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto px-4 pb-6 snap-x snap-mandatory scroll-smooth"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {pricingTiers.map((tier, idx) => (
              <motion.div
                key={tier.id}
                className="flex-shrink-0 w-[85vw] max-w-[340px] snap-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: idx * 0.05,
                  type: 'spring',
                  stiffness: 300,
                  damping: 30
                }}
              >
                <PricingCard tier={tier} index={idx} />
              </motion.div>
            ))}
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {pricingTiers.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx 
                    ? 'bg-[#c4ff4d] w-6' 
                    : 'bg-white/20 hover:bg-white/40'
                }`}
                data-testid={`button-pricing-dot-${idx}`}
              />
            ))}
          </div>
        </div>

        {/* Founding Client Offer */}
        <motion.div 
          className="mt-16 sm:mt-20 mx-4 sm:mx-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative p-6 sm:p-8 rounded-2xl bg-zinc-900/50 border border-[#c4ff4d]/20 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c4ff4d]/50 to-transparent" />
            
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#c4ff4d]/10 border border-[#c4ff4d]/20">
                  <Sparkles className="w-6 h-6 text-[#c4ff4d]" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    Founding Client Offer
                  </h3>
                  <p className="text-white/60 text-sm sm:text-base mb-3">
                    Limited to the first 10 companies
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-white/80">
                      <Check className="w-4 h-4 text-[#c4ff4d] flex-shrink-0" />
                      <span>40% off first 3 months on managed tiers</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-white/80">
                      <Check className="w-4 h-4 text-[#c4ff4d] flex-shrink-0" />
                      <span>Setup fee waived</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-white/80">
                      <Check className="w-4 h-4 text-[#c4ff4d] flex-shrink-0" />
                      <span>Priority onboarding + rate lock on renewal</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <Link href="/contact">
                <Button 
                  className="bg-[#c4ff4d] hover:bg-[#d4ff6d] text-black font-semibold px-6 py-3 rounded-full w-full md:w-auto"
                  data-testid="button-founding-client"
                >
                  Apply Now
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PricingCard({ tier, index }: { tier: PricingTier; index: number }) {
  const Icon = tier.icon;
  
  return (
    <div 
      className={`relative h-full p-5 sm:p-6 rounded-2xl bg-zinc-900/60 backdrop-blur-sm border transition-all duration-300 ${
        tier.popular 
          ? 'border-[#c4ff4d]/40 shadow-lg shadow-[#c4ff4d]/5' 
          : 'border-white/10 hover:border-white/20'
      }`}
      data-testid={`card-pricing-${tier.id}`}
    >
      {tier.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <span className="bg-[#c4ff4d] text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Most Popular
          </span>
        </div>
      )}

      {/* Header */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-3">
          <Icon className="w-4 h-4 text-white/40" />
          <span className="text-xs uppercase tracking-wider text-white/40 font-medium">
            {tier.category === 'productized' ? 'Fast Start' : tier.category === 'managed' ? 'Managed' : 'Enterprise'}
          </span>
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{tier.name}</h3>
      </div>

      {/* Price */}
      <div className="mb-4">
        <div className="flex items-baseline gap-1">
          <span className="text-3xl sm:text-4xl font-bold text-white">{tier.price}</span>
          {tier.period && <span className="text-white/40 text-sm">{tier.period}</span>}
        </div>
        <p className="text-xs text-white/30 mt-1">{tier.setup}</p>
      </div>

      {/* Best For */}
      <p className="text-sm text-white/50 italic mb-4 pb-4 border-b border-white/5">
        {tier.bestFor}
      </p>

      {/* Features */}
      <ul className="space-y-2.5 mb-5">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm">
            <Check className="w-4 h-4 text-[#c4ff4d] mt-0.5 flex-shrink-0" />
            <span className="text-white/70">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Overage */}
      {tier.overage && (
        <p className="text-xs text-white/30 mb-4">
          Overage: {tier.overage}
        </p>
      )}

      {/* CTA */}
      <Link href={tier.ctaLink}>
        <Button 
          className={`w-full rounded-full font-medium ${
            tier.popular 
              ? 'bg-[#c4ff4d] hover:bg-[#d4ff6d] text-black' 
              : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
          }`}
          data-testid={`button-pricing-${tier.id}`}
        >
          {tier.cta}
        </Button>
      </Link>
    </div>
  );
}
