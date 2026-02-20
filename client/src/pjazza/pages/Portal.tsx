import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'wouter';
import { ArrowRight, Zap, Radio, Users, MapPin } from 'lucide-react';
import { PortalScene } from '../components/Scene3D';
import LivePulse from '../components/LivePulse';
import CountUp from '../components/CountUp';

export default function Portal() {
  const [, navigate] = useLocation();
  const [entered, setEntered] = useState(false);

  const handleEnter = () => {
    setEntered(true);
    setTimeout(() => navigate('/pjazza/discover'), 900);
  };

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden pj-mesh-animated pj-grain" style={{ background: 'var(--pj-deep)' }}>
      <PortalScene />

      <div className="pj-content-overlay flex-1 flex flex-col">
        <motion.div
          className="flex items-center justify-between px-6 pt-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex items-center gap-2.5">
            <LivePulse size={7} />
            <span className="pj-section-label">LIVE</span>
          </div>
          <span
            className="text-[10px] font-medium tracking-widest"
            style={{ fontFamily: 'var(--pj-font-display)', color: 'var(--pj-text-muted)' }}
          >
            MALTA
          </span>
        </motion.div>

        <div className="flex-1 flex flex-col justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1
              className="leading-[0.88] mb-5 tracking-[-0.04em]"
              style={{ fontFamily: 'var(--pj-font-display)', fontSize: 'var(--pj-size-hero)', fontWeight: 700 }}
            >
              <span style={{ color: 'var(--pj-text)' }}>SEE</span>
              <br />
              <span style={{ color: 'var(--pj-crimson)' }}>EVERY</span>
              <br />
              <span style={{ color: 'var(--pj-crimson)' }}>THING.</span>
            </h1>
            <p className="text-[15px] leading-relaxed max-w-[280px]" style={{ color: 'var(--pj-text-secondary)', fontFamily: 'var(--pj-font-body)' }}>
              Malta's living digital town square. Live streams, real crowds, trusted deals.
            </p>
          </motion.div>

          <motion.div
            className="flex gap-3 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            {[
              { icon: Radio, value: 47, label: 'Live Now', suffix: '' },
              { icon: Users, value: 2400, label: 'Online', suffix: '' },
              { icon: MapPin, value: 180, label: 'Venues', suffix: '+' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="pj-card-glow flex flex-col items-center py-3 px-4 flex-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + i * 0.12 }}
              >
                <stat.icon size={14} strokeWidth={2.5} style={{ color: 'var(--pj-crimson)', marginBottom: 6 }} />
                <span
                  className="text-lg font-bold pj-number-mono"
                  style={{ fontFamily: 'var(--pj-font-display)', color: 'var(--pj-text)' }}
                >
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-[9px] font-medium mt-0.5" style={{ color: 'var(--pj-text-tertiary)' }}>{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="px-6 pb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
        >
          <motion.button
            className="w-full pj-btn-primary py-4 text-[15px] font-bold flex items-center justify-center gap-2.5"
            style={{ fontFamily: 'var(--pj-font-display)' }}
            whileTap={{ scale: 0.96 }}
            onClick={handleEnter}
            data-testid="button-enter-pjazza"
          >
            <span>Enter PJAZZA</span>
            <ArrowRight size={18} strokeWidth={2.5} />
          </motion.button>

          <div className="flex items-center justify-center mt-5">
            <motion.button
              className="pj-btn-ghost text-[12px] px-5 py-2.5 flex items-center gap-2"
              style={{ fontFamily: 'var(--pj-font-display)' }}
              whileTap={{ scale: 0.96 }}
              onClick={() => navigate('/pjazza/business/onboard')}
              data-testid="button-business-cta"
            >
              <Zap size={13} strokeWidth={2.5} style={{ color: 'var(--pj-crimson)' }} />
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
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: 'bottom', background: 'var(--pj-crimson)' }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
