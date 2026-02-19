import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'wouter';
import CountUp from '../components/CountUp';
import LivePulse from '../components/LivePulse';

function GoldenParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            background: `rgba(196,148,30,${Math.random() * 0.4 + 0.1})`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

function LogoMark() {
  return (
    <motion.div
      className="relative"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8, type: 'spring', stiffness: 200, damping: 20 }}
    >
      <motion.div
        className="absolute inset-0 rounded-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(196,148,30,0.4) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div
        className="relative w-24 h-24 rounded-3xl flex items-center justify-center pj-gold-glow"
        style={{
          background: 'linear-gradient(135deg, #C4941E, #D4A843)',
          transform: 'perspective(600px) rotateX(5deg)',
        }}
      >
        <motion.span
          className="text-5xl"
          style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}
          animate={{ rotateY: [0, 5, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          🏛️
        </motion.span>
      </div>
    </motion.div>
  );
}

export default function Portal() {
  const [, navigate] = useLocation();
  const [transitioning, setTransitioning] = useState<'explore' | 'business' | null>(null);

  const handleNavigate = (type: 'explore' | 'business') => {
    setTransitioning(type);
    setTimeout(() => {
      navigate(type === 'explore' ? '/pjazza/discover' : '/pjazza/business/onboard');
    }, 600);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden" style={{ background: '#0D0D0F' }}>
      <GoldenParticles />

      <AnimatePresence>
        {transitioning && (
          <motion.div
            className="fixed inset-0 z-50"
            initial={{ scale: 0, borderRadius: '50%' }}
            animate={{ scale: 4, borderRadius: '0%' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: transitioning === 'explore'
                ? 'linear-gradient(135deg, #C4941E, #D4A843)'
                : 'rgba(255,255,255,0.1)',
              transformOrigin: transitioning === 'explore' ? '30% 60%' : '70% 60%',
            }}
          />
        )}
      </AnimatePresence>

      <div className="relative z-10 flex flex-col items-center text-center">
        <LogoMark />

        <motion.h1
          className="mt-8 text-5xl font-black text-white tracking-tighter leading-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          PJAZZA
        </motion.h1>

        <motion.p
          className="mt-4 text-[11px] font-bold tracking-[6px] uppercase"
          style={{ color: '#C4941E' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          ENTER MALTA'S LIVING WORLD
        </motion.p>

        <motion.div
          className="mt-12 flex gap-3 w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.6, type: 'spring', stiffness: 200, damping: 25 }}
        >
          <motion.button
            className="flex-1 pj-gold-btn py-5 px-4 flex flex-col items-center gap-1 pj-gold-glow-sm"
            whileTap={{ scale: 0.96 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => handleNavigate('explore')}
            data-testid="button-portal-explore"
          >
            <span className="text-3xl mb-1">🔍</span>
            <span className="text-lg font-black text-white">EXPLORE</span>
            <span className="text-[10px] text-white/50">Tourist • Expat • Local</span>
          </motion.button>

          <motion.button
            className="flex-1 pj-glass py-5 px-4 flex flex-col items-center gap-1 transition-all duration-300"
            whileTap={{ scale: 0.96 }}
            whileHover={{ scale: 1.02, borderColor: 'rgba(196,148,30,0.3)' }}
            onClick={() => handleNavigate('business')}
            data-testid="button-portal-business"
          >
            <span className="text-3xl mb-1">💼</span>
            <span className="text-lg font-black text-white">BUSINESS</span>
            <span className="text-[10px] text-white/50">Go Live • Earn • Grow</span>
          </motion.button>
        </motion.div>

        <motion.div
          className="mt-10 flex items-center gap-3 flex-wrap justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.5 }}
        >
          {[
            { end: 3.8, suffix: 'M', label: 'Tourists', prefix: '' },
            { end: 540, suffix: 'K', label: 'Locals', prefix: '' },
            { end: 0, suffix: '', label: 'to Start', prefix: '€' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="pj-glass px-4 py-2 flex items-center gap-2"
              style={{ borderRadius: 100 }}
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
            >
              <span className="text-sm font-black text-white">
                {stat.end === 0 ? (
                  '€0'
                ) : (
                  <CountUp end={stat.end} suffix={stat.suffix} prefix={stat.prefix} decimals={stat.end < 10 ? 1 : 0} />
                )}
              </span>
              <span className="text-[10px] text-white/40 font-medium">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-8 flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 0.5 }}
        >
          <div className="flex gap-1">
            {[0, 0.3, 0.6].map((d, i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: '#E05A3A' }}
                animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: d }}
              />
            ))}
          </div>
          <span className="text-[10px] text-white/30">47 businesses are live right now</span>
        </motion.div>
      </div>
    </div>
  );
}
