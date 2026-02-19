import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import {
  Utensils, Home, Ship, Car, Wrench, ShoppingBag, Heart, Landmark,
  ArrowRight, Gift, CheckCircle, Zap
} from 'lucide-react';
import { DashboardScene } from '../components/Scene3D';

const industries = [
  { Icon: Utensils, name: 'Restaurant / Caf\u00e9 / Bar', tagline: 'Fill every seat. Tonight.', commission: '8%', color: 'var(--pj-red)' },
  { Icon: Home, name: 'Real Estate', tagline: 'Close deals before they land.', commission: '0.5%', color: '#2563EB' },
  { Icon: Ship, name: 'Yacht & Marine', tagline: 'Sell charters through a screen.', commission: '3%', color: '#7C3AED' },
  { Icon: Car, name: 'Automotive', tagline: 'Sell 3\u00d7 faster with live walkarounds.', commission: '1%', color: '#D97706' },
  { Icon: Wrench, name: 'Services / Freelancer', tagline: 'Get paid. Every. Time.', commission: '10%', color: '#1A8A5C' },
  { Icon: ShoppingBag, name: 'Retail / Artisan', tagline: "Sell to tourists who don't know you exist.", commission: '8%', color: 'var(--pj-red)' },
  { Icon: Heart, name: 'Spa / Salon / Wellness', tagline: 'Zero no-shows.', commission: '8%', color: '#EC4899' },
  { Icon: Landmark, name: 'Tours / Experiences', tagline: 'Keep 92% instead of 80%.', commission: '8%', color: '#0EA5E9' },
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
    <div className="relative min-h-screen" style={{ background: '#080808' }}>
      <DashboardScene />
      <div className="pj-content-overlay px-5 py-8 pb-20">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-[10px] font-bold tracking-[3px] uppercase mb-3" style={{ color: 'var(--pj-red)' }}>
            FOR BUSINESS
          </p>
          <h1 className="text-4xl font-black text-white tracking-tighter leading-[0.95] mb-2">
            What Do You Do?
          </h1>
          <p className="text-sm" style={{ color: 'var(--pj-text-tertiary)' }}>
            We'll build your world around it
          </p>
        </motion.div>

        <div className="space-y-2">
          {industries.map((ind, i) => (
            <motion.button
              key={i}
              className="w-full pj-card flex items-center gap-3 p-3.5 text-left transition-all duration-200"
              style={{
                borderColor: selected === i ? 'var(--pj-red-border)' : undefined,
                boxShadow: selected === i ? '0 0 20px var(--pj-red-subtle)' : undefined,
              }}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelected(i)}
              data-testid={`button-industry-${i}`}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'var(--pj-red-subtle)', border: '1px solid var(--pj-red-border)' }}
              >
                <ind.Icon size={18} style={{ color: ind.color }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-white">{ind.name}</p>
                <p className="text-[10px]" style={{ color: 'var(--pj-text-tertiary)' }}>{ind.tagline}</p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="px-2 py-0.5 rounded-full text-[9px] font-bold" style={{ background: 'rgba(26,138,92,0.1)', color: '#1A8A5C' }}>
                  {ind.commission}
                </span>
                <ChevronRight size={14} style={{ color: 'var(--pj-text-tertiary)' }} />
              </div>
            </motion.button>
          ))}
        </div>

        <motion.div
          className="mt-8 pj-card-elevated p-6 relative overflow-hidden"
          style={{ borderColor: 'var(--pj-red-border)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <Gift size={16} style={{ color: 'var(--pj-red)' }} />
              <p className="text-[10px] font-bold tracking-[3px] uppercase" style={{ color: 'var(--pj-red)' }}>
                FOUNDING PARTNER
              </p>
            </div>
            <h3 className="text-xl font-black text-white mb-4">
              Join the first 50. Get everything free.
            </h3>

            <div className="space-y-3 mb-6">
              {founderBenefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-2.5"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <CheckCircle size={14} style={{ color: 'var(--pj-red)', flexShrink: 0 }} />
                  <span className="text-sm" style={{ color: 'var(--pj-text-secondary)' }}>{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              className="w-full pj-btn-primary py-4 text-base font-black flex items-center justify-center gap-2"
              whileTap={{ scale: 0.96 }}
              onClick={() => navigate('/pjazza/business/dashboard')}
              data-testid="button-join-founding"
            >
              <span>Join Free</span>
              <ArrowRight size={18} />
            </motion.button>
            <p className="text-[10px] text-center mt-3" style={{ color: 'var(--pj-text-tertiary)' }}>
              5 minute setup · No credit card
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function ChevronRight({ size, style }: { size: number; style?: React.CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
