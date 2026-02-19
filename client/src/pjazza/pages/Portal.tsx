import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'wouter';
import { ArrowRight, Radio, MapPin, Users, Zap } from 'lucide-react';
import { PortalScene } from '../components/Scene3D';
import LivePulse from '../components/LivePulse';

export default function Portal() {
  const [, navigate] = useLocation();
  const [entered, setEntered] = useState(false);

  const handleEnter = () => {
    setEntered(true);
    setTimeout(() => navigate('/pjazza/discover'), 800);
  };

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden" style={{ background: '#080808' }}>
      <PortalScene />

      <div className="pj-content-overlay flex-1 flex flex-col">
        <motion.div
          className="flex items-center justify-between px-5 pt-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <LivePulse size={6} />
            <span className="text-[10px] font-bold tracking-[3px] uppercase" style={{ color: 'var(--pj-red)' }}>
              LIVE
            </span>
          </div>
          <span className="text-[10px] font-medium" style={{ color: 'var(--pj-text-tertiary)' }}>MALTA</span>
        </motion.div>

        <div className="flex-1 flex flex-col justify-center px-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <h1 className="text-6xl font-black tracking-tighter leading-[0.9] mb-6">
              <span className="text-white">See</span>
              <br />
              <span style={{ color: 'var(--pj-red)' }}>Everything.</span>
            </h1>
            <p className="text-base leading-relaxed mb-2" style={{ color: 'var(--pj-text-secondary)' }}>
              Malta's living digital town square.
            </p>
            <p className="text-sm" style={{ color: 'var(--pj-text-tertiary)' }}>
              Live streams. Real crowds. Trusted transactions.
            </p>
          </motion.div>

          <motion.div
            className="flex gap-6 mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            {[
              { icon: Radio, value: '47', label: 'Live Now' },
              { icon: Users, value: '2.4K', label: 'Online' },
              { icon: MapPin, value: '180+', label: 'Venues' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="flex flex-col"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + i * 0.15 }}
              >
                <stat.icon size={14} style={{ color: 'var(--pj-red)', marginBottom: 6 }} />
                <span className="text-xl font-black text-white pj-number-mono">{stat.value}</span>
                <span className="text-[10px]" style={{ color: 'var(--pj-text-tertiary)' }}>{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="px-5 pb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
        >
          <motion.button
            className="w-full pj-btn-primary py-4 text-base font-black flex items-center justify-center gap-2"
            whileTap={{ scale: 0.96 }}
            onClick={handleEnter}
            data-testid="button-enter-pjazza"
          >
            <span>Enter PJAZZA</span>
            <ArrowRight size={18} />
          </motion.button>

          <div className="flex items-center justify-center gap-4 mt-5">
            <motion.button
              className="text-[12px] font-semibold px-4 py-2 rounded-xl"
              style={{ color: 'var(--pj-text-secondary)', border: '1px solid var(--pj-border)' }}
              whileTap={{ scale: 0.96 }}
              onClick={() => navigate('/pjazza/business/onboard')}
              data-testid="button-business-cta"
            >
              <Zap size={12} className="inline mr-1.5" style={{ color: 'var(--pj-red)' }} />
              I'm a business
            </motion.button>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {entered && (
          <motion.div
            className="fixed inset-0 z-50"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: 'bottom', background: 'var(--pj-red)' }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
