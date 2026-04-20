"use client";

import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, animate } from 'framer-motion';
import { Check, MessageSquare, Phone, Bot, Users, Building2, Sparkles, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import QuickLeadModal from '@/components/QuickLeadModal';

interface PricingTier {
  id: string;
  name: string;
  category: 'productized' | 'managed' | 'enterprise';
  bestFor: string;
  features: string[];
  bonuses?: string[];
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
    bestFor: 'Micro-businesses, landing pages, freelancers',
    features: [
      '1 AI chatbot (website or social)',
      'Custom training on FAQs & brand tone',
      '1,000 conversations/month',
      'Appointment booking & lead capture',
      'Weekly summary + basic reporting',
      'GDPR-ready processing'
    ],
    bonuses: [
      'Fast onboarding pack (priority install + launch QA)',
      'Mobile booking landing template',
      'Starter conversion script pack',
      '14-day launch monitoring & tuning'
    ],
    cta: 'Get Started',
    ctaLink: '/contact',
    icon: MessageSquare
  },
  {
    id: 'voice-starter',
    name: 'AI Voice Assistant',
    category: 'productized',
    bestFor: 'Small businesses automating inbound calls',
    features: [
      '1 AI voice agent + dedicated number',
      'Custom phone scripts & context',
      '300 call minutes/month',
      'Call-to-calendar booking',
      'Voicemail transcription',
      'Basic call analytics'
    ],
    bonuses: [
      'Holiday message and call script templates',
      '7-day launch monitoring and first-week tuning'
    ],
    cta: 'Get Started',
    ctaLink: '/contact',
    icon: Phone
  },
  {
    id: 'workflow-agent',
    name: 'AI Workflow Agent',
    category: 'managed',
    bestFor: 'Restaurants, retail, solo professionals',
    features: [
      'AI agent (Bookings OR Support OR Leads)',
      'Custom training on products & policies',
      '500 conversations/month',
      '1 channel (website OR WhatsApp)',
      'Live widget + email/SMS alerts',
      'Monthly report + 14-day guarantee'
    ],
    bonuses: [
      'Fast onboarding pack + mobile landing template',
      'Conversion scripts for bookings & objections',
      '14-day launch monitoring and first-week tuning'
    ],
    cta: 'Get Started',
    ctaLink: '/contact',
    icon: Bot
  },
  {
    id: 'ai-operations-team',
    name: 'AI Operations Team',
    category: 'managed',
    bestFor: 'Agencies, hospitality, real estate, professional services',
    features: [
      'Multiple AI agents (Sales + Support + Bookings)',
      'Comprehensive training & workflow mapping',
      '2,500 conversations/month',
      'Multi-channel: Web, WhatsApp, Social',
      'CRM sync + analytics dashboard',
      'Weekly optimization + 90-day ROI promise'
    ],
    bonuses: [
      'Paid-creative launch pack (Reel + carousel templates)',
      'Competitor response audit + improvement playbook',
      'Knowledge base starter (pre-built FAQ mapped to your product)',
      '30 days post-launch priority tuning (daily checks first week)'
    ],
    cta: 'Get Started',
    ctaLink: '/contact',
    popular: true,
    icon: Users
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    category: 'enterprise',
    bestFor: 'Complex, regulated, high-volume deployments',
    features: [
      'Full AI team configured to your operations',
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isFoundingClient, setIsFoundingClient] = useState(false);

  const handleOpenModal = (planName: string, isFoundingOffer: boolean = false) => {
    setSelectedPlan(planName);
    setIsFoundingClient(isFoundingOffer);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
    setIsFoundingClient(false);
  };

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
            Our Solutions
          </h2>
          <p className="text-base sm:text-lg text-white/50 max-w-xl mx-auto">
            Choose your AI solution. We'll tailor pricing to your specific needs.
          </p>
        </motion.div>

        <div className="hidden lg:grid lg:grid-cols-5 gap-4 px-4">
          {pricingTiers.map((tier, idx) => (
            <PricingCard key={tier.id} tier={tier} index={idx} onOpenModal={handleOpenModal} />
          ))}
        </div>

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
                <PricingCard tier={tier} index={idx} onOpenModal={handleOpenModal} />
              </motion.div>
            ))}
          </div>

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
                      <span>Exclusive early-access pricing on managed tiers</span>
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
              
              <Button 
                onClick={() => handleOpenModal('Founding Client Offer', true)}
                className="bg-[#c4ff4d] hover:bg-[#d4ff6d] text-black font-semibold px-6 py-3 rounded-full w-full md:w-auto"
                data-testid="button-founding-client"
              >
                Apply Now
              </Button>
            </div>
          </div>
        </motion.div>

        <QuickLeadModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          planName={selectedPlan}
          showPlanDropdown={isFoundingClient}
          source={isFoundingClient ? 'founding-client' : 'ai-agents'}
        />
      </div>
    </section>
  );
}

function PricingCard({ tier, index, onOpenModal }: { tier: PricingTier; index: number; onOpenModal: (planName: string, isFoundingOffer?: boolean) => void }) {
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

      <div className="mb-4">
        <div className="flex items-center gap-2 mb-3">
          <Icon className="w-4 h-4 text-white/40" />
          <span className="text-xs uppercase tracking-wider text-white/40 font-medium">
            {tier.category === 'productized' ? 'Fast Start' : tier.category === 'managed' ? 'Managed' : 'Enterprise'}
          </span>
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{tier.name}</h3>
      </div>

      <p className="text-sm text-white/50 italic mb-4 pb-4 border-b border-white/5">
        {tier.bestFor}
      </p>

      <ul className="space-y-2.5 mb-4">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm">
            <Check className="w-4 h-4 text-[#c4ff4d] mt-0.5 flex-shrink-0" />
            <span className="text-white/70">{feature}</span>
          </li>
        ))}
      </ul>

      {tier.bonuses && tier.bonuses.length > 0 && (
        <div className="mb-4 pt-3 border-t border-white/5">
          <div className="flex items-center gap-1.5 mb-2">
            <Gift className="w-3.5 h-3.5 text-[#c4ff4d]" />
            <span className="text-xs uppercase tracking-wider text-[#c4ff4d]/80 font-medium">Limited Bonuses</span>
          </div>
          <ul className="space-y-1.5">
            {tier.bonuses.map((bonus) => (
              <li key={bonus} className="flex items-start gap-2 text-xs">
                <span className="text-[#c4ff4d]/60 mt-0.5">+</span>
                <span className="text-white/50">{bonus}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <Button 
        onClick={() => onOpenModal(tier.name)}
        className={`w-full rounded-full font-medium ${
          tier.popular 
            ? 'bg-[#c4ff4d] hover:bg-[#d4ff6d] text-black' 
            : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
        }`}
        data-testid={`button-pricing-${tier.id}`}
      >
        {tier.cta}
      </Button>
    </div>
  );
}