import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import GlassCard from '../components/GlassCard';

const industries = [
  { emoji: '🍽️', name: 'Restaurant / Café / Bar', tagline: 'Fill every seat. Tonight.', commission: '8%', color: '#E05A3A' },
  { emoji: '🏠', name: 'Real Estate', tagline: 'Close deals before they land.', commission: '0.5%', color: '#2563EB' },
  { emoji: '🛥️', name: 'Yacht & Marine', tagline: 'Sell €50K charters through a screen.', commission: '3%', color: '#7C3AED' },
  { emoji: '🚗', name: 'Automotive', tagline: 'Sell 3× faster with live walkarounds.', commission: '1%', color: '#D97706' },
  { emoji: '🔧', name: 'Services / Freelancer', tagline: 'Get paid. Every. Time.', commission: '10%', color: '#1A8A5C' },
  { emoji: '🛍️', name: 'Retail / Artisan', tagline: "Sell to tourists who don't know you exist.", commission: '8%', color: '#C4941E' },
  { emoji: '💆', name: 'Spa / Salon / Wellness', tagline: "Zero no-shows. Clients who've seen your work.", commission: '8%', color: '#EC4899' },
  { emoji: '🏛️', name: 'Tours / Experiences', tagline: 'Keep 92% instead of 80%.', commission: '8%', color: '#0EA5E9' },
];

const founderBenefits = [
  'Free PJAZZA Kit (ring light + mount)',
  'First 3 streams produced for you',
  '50% off Pro plan for 12 months',
  'Permanent Founding Partner badge',
];

export default function BusinessOnboard() {
  const [selected, setSelected] = useState<number | null>(null);
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen px-5 py-8 pb-20" style={{ background: '#0D0D0F' }}>
      <motion.h1
        className="text-4xl font-black text-white tracking-tighter leading-none mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        What Do You Do?
      </motion.h1>
      <motion.p
        className="text-sm text-white/40 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        We'll build your world around it
      </motion.p>

      <div className="space-y-3">
        {industries.map((ind, i) => (
          <motion.button
            key={i}
            className="w-full pj-glass flex items-center gap-4 p-4 text-left transition-all duration-300"
            style={{
              borderColor: selected === i ? `${ind.color}50` : undefined,
              boxShadow: selected === i ? `0 0 20px ${ind.color}20` : undefined,
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + i * 0.06 }}
            whileTap={{ scale: 0.97 }}
            whileHover={{ borderColor: `${ind.color}30` }}
            onClick={() => setSelected(i)}
            data-testid={`button-industry-${i}`}
          >
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: `${ind.color}15`, boxShadow: `0 0 20px ${ind.color}20` }}
            >
              <span className="text-2xl">{ind.emoji}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-white">{ind.name}</p>
              <p className="text-[11px] text-white/40">{ind.tagline}</p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="px-2 py-1 rounded-full text-[10px] font-bold" style={{ background: 'rgba(26,138,92,0.15)', color: '#1A8A5C' }}>
                💰 {ind.commission}
              </span>
              <span className="text-white/20">→</span>
            </div>
          </motion.button>
        ))}
      </div>

      <motion.div
        className="mt-10 p-6 rounded-3xl relative overflow-hidden"
        style={{
          background: 'rgba(255,255,255,0.04)',
          border: '2px solid rgba(196,148,30,0.2)',
          boxShadow: '0 0 40px rgba(196,148,30,0.1)',
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 30% 50%, rgba(196,148,30,0.06), transparent 60%)',
          }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        <div className="relative z-10">
          <p className="text-[10px] font-bold tracking-[4px] uppercase mb-3" style={{ color: '#C4941E' }}>
            🎁 FOUNDING PARTNER
          </p>
          <h3 className="text-xl font-black text-white mb-4">
            Join the first 50. Get everything free.
          </h3>

          <div className="space-y-3 mb-6">
            {founderBenefits.map((benefit, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(196,148,30,0.2)' }}>
                  <span className="text-[10px]" style={{ color: '#C4941E' }}>✓</span>
                </div>
                <span className="text-sm text-white/80">{benefit}</span>
              </motion.div>
            ))}
          </div>

          <motion.button
            className="w-full pj-gold-btn py-4 text-base font-black text-white rounded-2xl"
            whileTap={{ scale: 0.96 }}
            onClick={() => navigate('/pjazza/business/dashboard')}
            data-testid="button-join-founding"
          >
            Join Free — No Credit Card →
          </motion.button>
          <p className="text-[10px] text-white/30 text-center mt-3">5 minute setup • Cancel anytime</p>
        </div>
      </motion.div>
    </div>
  );
}
