import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import {
  Utensils, Home, Ship, Car, Wrench, ShoppingBag, Heart, Landmark,
  ArrowRight, Gift, CheckCircle, Zap, ChevronRight, ArrowLeft
} from 'lucide-react';
import { DashboardScene } from '../components/Scene3D';

const industries = [
  { Icon: Utensils, name: 'Restaurant / Caf\u00e9 / Bar', tagline: 'Fill every seat. Tonight.', commission: '8%', color: '#EF4444' },
  { Icon: Home, name: 'Real Estate', tagline: 'Close deals before they land.', commission: '0.5%', color: '#8B5CF6' },
  { Icon: Ship, name: 'Yacht & Marine', tagline: 'Sell charters through a screen.', commission: '3%', color: '#06B6D4' },
  { Icon: Car, name: 'Automotive', tagline: 'Sell 3\u00d7 faster with live walkarounds.', commission: '1%', color: '#F59E0B' },
  { Icon: Wrench, name: 'Services / Freelancer', tagline: 'Get paid. Every. Time.', commission: '10%', color: '#34D399' },
  { Icon: ShoppingBag, name: 'Retail / Artisan', tagline: "Sell to tourists who don't know you exist.", commission: '8%', color: '#EC4899' },
  { Icon: Heart, name: 'Spa / Salon / Wellness', tagline: 'Zero no-shows.', commission: '8%', color: '#F472B6' },
  { Icon: Landmark, name: 'Tours / Experiences', tagline: 'Keep 92% instead of 80%.', commission: '8%', color: '#3B82F6' },
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
    <div className="relative min-h-screen pj-mesh-animated pj-grain" style={{ background: 'var(--pj-deep)' }}>
      <DashboardScene />
      <div className="pj-content-overlay px-6 py-6 pb-20">
        <motion.button
          className="flex items-center gap-2 mb-6 text-[12px] font-semibold"
          style={{ fontFamily: 'var(--pj-font-display)', color: 'var(--pj-text-tertiary)' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/pjazza')}
        >
          <ArrowLeft size={16} strokeWidth={2.5} />
          Back
        </motion.button>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="pj-section-label mb-3 block">FOR BUSINESS</span>
          <h1
            className="leading-[0.9] mb-3 tracking-[-0.03em]"
            style={{ fontFamily: 'var(--pj-font-display)', fontSize: 'var(--pj-size-h1)', fontWeight: 700, color: 'var(--pj-text)' }}
          >
            What Do<br />You Do?
          </h1>
          <p className="text-[14px]" style={{ color: 'var(--pj-text-tertiary)' }}>
            We'll build your world around it.
          </p>
        </motion.div>

        <div className="space-y-2.5">
          {industries.map((ind, i) => (
            <motion.button
              key={i}
              className="w-full pj-card flex items-center gap-3.5 p-4 text-left transition-all duration-300"
              style={{
                borderColor: selected === i ? 'var(--pj-crimson-border)' : undefined,
                boxShadow: selected === i ? '0 0 30px rgba(196,30,58,0.08)' : undefined,
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelected(i)}
              data-testid={`button-industry-${i}`}
            >
              <div className="pj-icon-orb flex-shrink-0" style={{ width: 48, height: 48 }}>
                <ind.Icon size={20} strokeWidth={2} style={{ color: ind.color }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-bold" style={{ fontFamily: 'var(--pj-font-display)', color: 'var(--pj-text)' }}>{ind.name}</p>
                <p className="text-[10px] mt-0.5" style={{ color: 'var(--pj-text-tertiary)' }}>{ind.tagline}</p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="px-2.5 py-1 rounded-full text-[9px] font-bold" style={{ background: 'var(--pj-green-subtle)', color: 'var(--pj-green)' }}>
                  {ind.commission}
                </span>
                <ChevronRight size={14} strokeWidth={2.5} style={{ color: 'var(--pj-text-muted)' }} />
              </div>
            </motion.button>
          ))}
        </div>

        <motion.div
          className="mt-8 pj-card-glow p-6 relative overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative z-10">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="pj-starburst" style={{ width: 28, height: 28 }}>
                <Gift size={13} style={{ color: 'white' }} />
              </div>
              <span className="pj-section-label">FOUNDING PARTNER</span>
            </div>
            <h3
              className="text-xl font-bold mb-5 tracking-tight"
              style={{ fontFamily: 'var(--pj-font-display)', color: 'var(--pj-text)' }}
            >
              Join the first 50. Get everything free.
            </h3>

            <div className="space-y-3.5 mb-6">
              {founderBenefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <CheckCircle size={15} strokeWidth={2.5} style={{ color: 'var(--pj-green)', flexShrink: 0 }} />
                  <span className="text-[13px]" style={{ color: 'var(--pj-text-secondary)' }}>{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              className="w-full pj-btn-primary py-4 text-[15px] font-bold flex items-center justify-center gap-2.5"
              style={{ fontFamily: 'var(--pj-font-display)' }}
              whileTap={{ scale: 0.96 }}
              onClick={() => navigate('/pjazza/business/dashboard')}
              data-testid="button-join-founding"
            >
              <span>Join Free</span>
              <ArrowRight size={18} strokeWidth={2.5} />
            </motion.button>
            <p className="text-[10px] text-center mt-3" style={{ color: 'var(--pj-text-muted)' }}>
              5 minute setup · No credit card
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
