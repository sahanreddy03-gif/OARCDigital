import { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import TopBar from '../components/TopBar';
import BottomNav from '../components/BottomNav';
import GlassCard from '../components/GlassCard';
import LivePulse from '../components/LivePulse';
import CountUp from '../components/CountUp';

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function HeroSection() {
  const words = ['See', 'Everything.', 'Trust', 'Instantly.'];
  return (
    <div className="relative overflow-hidden" style={{ height: '55vh' }}>
      <div className="absolute inset-0 pj-mesh-hero" />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 60%, #0D0D0F)' }} />
      <div className="relative z-10 flex flex-col justify-end h-full px-5 pb-12">
        <motion.div
          className="flex items-center gap-2 mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <LivePulse size={6} />
          <span className="text-[10px] font-bold tracking-[4px] uppercase" style={{ color: '#E05A3A' }}>
            LIVE NOW IN MALTA
          </span>
        </motion.div>

        <h1 className="text-5xl font-black text-white tracking-tighter leading-none mb-4">
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.5 }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="text-sm text-white/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          47 businesses streaming live right now
        </motion.p>

        <motion.div
          className="flex gap-2 mt-5 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          {['☀️ 28°C', '🚢 2 Cruise Ships', '🎉 Festa Tonight'].map((pill, i) => (
            <motion.div
              key={i}
              className="pj-glass px-3 py-1.5 text-[11px] font-medium text-white/70"
              style={{ borderRadius: 100 }}
              animate={{ y: [-3, 3, -3] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
            >
              {pill}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 420 40" fill="none" preserveAspectRatio="none" className="w-full h-10">
          <path d="M0 40 C105 0 315 0 420 40 L420 40 L0 40 Z" fill="#FAF7F2" />
        </svg>
      </div>
    </div>
  );
}

function TierSelector() {
  const [selected, setSelected] = useState(0);
  const tiers = [
    { emoji: '🌍', label: 'Everything', color: '#C4941E' },
    { emoji: '👑', label: 'Luxury', color: '#C4941E' },
    { emoji: '🎯', label: 'Authentic', color: '#1A8A5C' },
    { emoji: '💚', label: 'Budget', color: '#2563EB' },
  ];

  return (
    <div className="pj-cream-section px-5 py-8">
      <motion.h2
        className="text-2xl font-extrabold tracking-tight mb-1"
        style={{ color: '#2D2A24' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        What are you seeking?
      </motion.h2>
      <p className="text-xs mb-5" style={{ color: '#9C958D' }}>This shapes your entire world</p>
      <div className="grid grid-cols-4 gap-2">
        {tiers.map((tier, i) => (
          <motion.button
            key={i}
            className="flex flex-col items-center py-4 px-2 rounded-2xl border transition-all duration-300"
            style={{
              background: selected === i ? `${tier.color}10` : 'rgba(250,247,242,0.8)',
              borderColor: selected === i ? tier.color : 'rgba(0,0,0,0.06)',
              boxShadow: selected === i ? `0 4px 20px ${tier.color}20` : 'none',
            }}
            animate={{ scale: selected === i ? 1.05 : 1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelected(i)}
            data-testid={`button-tier-${tier.label.toLowerCase()}`}
          >
            <span className="text-2xl mb-1">{tier.emoji}</span>
            <span className="text-[11px] font-bold" style={{ color: '#2D2A24' }}>{tier.label}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

function CategoryGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const categories = [
    { emoji: '🍽️', label: 'Dining', count: 127 },
    { emoji: '🏛️', label: 'Tours', count: 43 },
    { emoji: '🏠', label: 'Property', count: 89 },
    { emoji: '🛥️', label: 'Yachts', count: 18 },
    { emoji: '🚗', label: 'Cars', count: 34 },
    { emoji: '🛍️', label: 'Shop', count: 67 },
    { emoji: '🔧', label: 'Services', count: 56 },
    { emoji: '💆', label: 'Wellness', count: 31 },
  ];

  return (
    <div className="pj-cream-section px-5 pb-8" ref={ref}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-extrabold tracking-tight" style={{ color: '#2D2A24' }}>Explore</h2>
        <span className="text-sm font-bold" style={{ color: '#C4941E' }}>All →</span>
      </div>
      <motion.div
        className="grid grid-cols-4 gap-2"
        variants={stagger}
        initial="hidden"
        animate={isInView ? 'show' : 'hidden'}
      >
        {categories.map((cat, i) => (
          <motion.button
            key={i}
            className="flex flex-col items-center py-3 px-1 rounded-2xl border transition-all duration-200"
            style={{
              background: 'rgba(255,255,255,0.8)',
              borderColor: 'rgba(0,0,0,0.06)',
            }}
            variants={fadeUp}
            whileHover={{ y: -2, borderColor: '#C4941E' }}
            whileTap={{ scale: 0.95 }}
            data-testid={`button-category-${cat.label.toLowerCase()}`}
          >
            <span className="text-2xl mb-1">{cat.emoji}</span>
            <span className="text-[11px] font-bold" style={{ color: '#2D2A24' }}>{cat.label}</span>
            <span className="text-[9px]" style={{ color: '#9C958D' }}>{cat.count}</span>
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}

function LiveNowSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const liveStreams = [
    { name: "Noni's Kitchen", emoji: '🍽️', viewers: 47, distance: '0.3km', crowd: 78, rating: 4.8, reviews: 1203, category: 'Restaurant', location: 'Sliema', verified: true },
    { name: 'Blue Harbour Yacht', emoji: '🛥️', viewers: 23, distance: '1.2km', crowd: 45, rating: 4.9, reviews: 342, category: 'Yacht Charter', location: 'Grand Harbour', verified: true },
    { name: 'Mdina Glass', emoji: '🛍️', viewers: 18, distance: '5.4km', crowd: 30, rating: 4.7, reviews: 891, category: 'Artisan Shop', location: 'Mdina', verified: true },
    { name: 'Fortina Spa', emoji: '💆', viewers: 31, distance: '0.8km', crowd: 55, rating: 4.6, reviews: 567, category: 'Wellness', location: 'Sliema', verified: true },
  ];

  return (
    <div ref={ref} className="py-8" style={{ background: '#0D0D0F' }}>
      <div className="px-5 mb-5">
        <div className="flex items-center gap-2 mb-1">
          <LivePulse size={8} />
          <h2 className="text-2xl font-extrabold tracking-tight text-white">Live Now</h2>
        </div>
        <p className="text-xs text-white/40">Happening right now across Malta</p>
      </div>

      <div className="flex gap-3 overflow-x-auto px-5 pb-4 pj-scrollbar-hide" style={{ scrollSnapType: 'x mandatory' }}>
        {liveStreams.map((stream, i) => (
          <motion.div
            key={i}
            className="flex-shrink-0 rounded-2xl overflow-hidden"
            style={{
              width: 220,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              scrollSnapAlign: 'center',
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.02, borderColor: 'rgba(196,148,30,0.3)' }}
          >
            <div className="relative h-[140px] overflow-hidden" style={{
              background: `radial-gradient(circle at 50% 50%, rgba(224,90,58,0.08), transparent 60%), #0D0D0F`,
            }}>
              <span className="absolute inset-0 flex items-center justify-center text-6xl opacity-[0.06]">{stream.emoji}</span>
              <div className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 rounded-full pj-live-glow" style={{ background: 'rgba(224,90,58,0.9)' }}>
                <LivePulse size={5} color="#fff" />
                <span className="text-[10px] font-bold text-white">LIVE • {stream.viewers}</span>
              </div>
              <div className="absolute top-3 right-3 px-2 py-1 rounded-full text-[10px] font-medium text-white/60" style={{ background: 'rgba(0,0,0,0.5)' }}>
                {stream.distance}
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${stream.crowd}%`,
                    background: stream.crowd > 70 ? '#E05A3A' : stream.crowd > 40 ? '#D97706' : '#1A8A5C',
                  }}
                />
              </div>
            </div>

            <div className="p-3" style={{ background: '#FAF7F2' }}>
              <div className="flex items-center gap-1 mb-1">
                <span className="text-sm font-bold" style={{ color: '#2D2A24' }}>{stream.name}</span>
                {stream.verified && <span className="text-[10px]" style={{ color: '#1A8A5C' }}>✅</span>}
              </div>
              <p className="text-[10px] mb-2" style={{ color: '#9C958D' }}>{stream.location} • {stream.category}</p>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-medium" style={{ color: '#2D2A24' }}>
                  ⭐ {stream.rating} <span style={{ color: '#9C958D' }}>({stream.reviews.toLocaleString()})</span>
                </span>
                <span className="text-[11px] font-bold px-3 py-1 rounded-full" style={{ background: 'linear-gradient(135deg, #C4941E, #D4A843)', color: 'white' }}>
                  Watch →
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function CrowdIntelligence() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const crowds = [
    { name: "Ta' Kris", emoji: '🍽️', percent: 78, status: 'Busy — book ahead', icon: '🔥', color: '#E05A3A', tip: 'Best before 6:30 PM • 🚢 +40% tomorrow' },
    { name: 'The Chophouse', emoji: '🍽️', percent: 62, status: 'Good time', icon: '✅', color: '#D97706', tip: 'Happy hour until 7 PM • 20% off cocktails' },
    { name: 'Café del Mar', emoji: '🍽️', percent: 20, status: 'Quiet — walk in', icon: '💚', color: '#1A8A5C', tip: 'Sunset seats available • DJ from 8 PM' },
  ];

  return (
    <div ref={ref} className="py-8 px-5" style={{ background: '#0D0D0F' }}>
      <h2 className="text-2xl font-extrabold tracking-tight text-white mb-1">👥 Crowd Intelligence</h2>
      <p className="text-xs text-white/40 mb-5">Real-time. Know before you go.</p>

      <div className="flex gap-3 overflow-x-auto pb-2 pj-scrollbar-hide">
        {crowds.map((c, i) => (
          <motion.div
            key={i}
            className="flex-shrink-0 pj-glass p-4"
            style={{ width: 200 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">{c.emoji}</span>
              <span className="text-sm font-bold text-white">{c.name}</span>
            </div>
            <div className="text-3xl font-black mb-1" style={{ color: c.color }}>
              {isInView ? <CountUp end={c.percent} suffix="%" /> : '0%'}
            </div>
            <p className="text-[11px] font-medium text-white/60 mb-3">{c.icon} {c.status}</p>
            <div className="h-1.5 rounded-full overflow-hidden mb-3" style={{ background: 'rgba(255,255,255,0.06)' }}>
              <motion.div
                className="h-full rounded-full"
                style={{ background: c.color }}
                initial={{ width: 0 }}
                animate={isInView ? { width: `${c.percent}%` } : {}}
                transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
              />
            </div>
            <p className="text-[9px] text-white/30">{c.tip}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function VideoCallSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const steps = [
    { emoji: '🛍️', label: 'Pick' },
    { emoji: '📹', label: 'Call' },
    { emoji: '📦', label: 'Receive' },
  ];

  return (
    <div ref={ref} className="pj-cream-section px-5 py-8">
      <motion.h2
        className="text-2xl font-extrabold tracking-tight mb-1"
        style={{ color: '#2D2A24' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        📞 Call Any Shop. Live.
      </motion.h2>
      <p className="text-xs mb-6" style={{ color: '#9C958D' }}>See products in real-time. Buy in-app. Delivered today.</p>

      <motion.div
        className="p-5 rounded-3xl relative overflow-hidden"
        style={{
          background: 'rgba(255,255,255,0.9)',
          border: '2px solid transparent',
          backgroundClip: 'padding-box',
          boxShadow: '0 8px 32px rgba(124,58,237,0.08)',
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
      >
        <div className="absolute inset-0 rounded-3xl" style={{ border: '2px solid', borderImage: 'linear-gradient(135deg, #7C3AED, #EC4899) 1' }} />
        <div className="flex items-center justify-around mb-6 relative z-10">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center">
              <div className="flex flex-col items-center">
                <motion.div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-2 relative"
                  style={{
                    background: 'rgba(124,58,237,0.06)',
                    border: '1px solid rgba(124,58,237,0.1)',
                  }}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.2, type: 'spring' }}
                >
                  <span className="text-2xl">{step.emoji}</span>
                  {i === 1 && (
                    <motion.div
                      className="absolute inset-0 rounded-2xl border-2"
                      style={{ borderColor: 'rgba(124,58,237,0.3)' }}
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </motion.div>
                <span className="text-[11px] font-bold" style={{ color: '#2D2A24' }}>{step.label}</span>
              </div>
              {i < 2 && (
                <svg width="30" height="2" className="mx-2 mb-5" viewBox="0 0 30 2">
                  <motion.line
                    x1="0" y1="1" x2="30" y2="1"
                    stroke="rgba(124,58,237,0.3)"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    animate={{ strokeDashoffset: [20, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  />
                </svg>
              )}
            </div>
          ))}
        </div>

        <motion.button
          className="w-full pj-gold-btn py-4 text-base font-black text-white rounded-2xl relative z-10"
          whileTap={{ scale: 0.96 }}
          data-testid="button-video-shopping"
        >
          Start Video Shopping — Free
        </motion.button>
        <p className="text-[10px] text-center mt-3 relative z-10" style={{ color: '#9C958D' }}>
          Same-day delivery • €5.99 or FREE over €50
        </p>
      </motion.div>
    </div>
  );
}

function TrustedServices() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const services = [
    { emoji: '🔧', name: 'Mark Borg', skill: 'Plumber', rating: 4.8, jobs: 156, response: '12 min', price: '€45/hr', available: true, verified: true },
    { emoji: '⚡', name: 'Sarah Chen', skill: 'Electrician', rating: 4.9, jobs: 203, response: '8 min', price: '€55/hr', available: true, verified: true },
    { emoji: '🎨', name: 'Joe Vella', skill: 'Painter', rating: 4.7, jobs: 89, response: '25 min', price: '€35/hr', available: false, verified: true },
  ];

  const escrowSteps = [
    { step: '1', text: 'Pay → Held in escrow' },
    { step: '2', text: 'Work done → Photos uploaded' },
    { step: '3', text: 'You approve → Money releases' },
    { step: '4', text: 'Rate → Builds trust' },
  ];

  return (
    <div ref={ref} className="pj-cream-section px-5 py-8">
      <h2 className="text-2xl font-extrabold tracking-tight mb-1" style={{ color: '#2D2A24' }}>🔧 Services. Guaranteed.</h2>
      <p className="text-xs mb-5" style={{ color: '#9C958D' }}>Escrow-protected. Watch them work live.</p>

      <div className="space-y-3 mb-6">
        {services.map((s, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-3 p-3 rounded-2xl"
            style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(0,0,0,0.06)' }}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.1 }}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(26,138,92,0.1)' }}>
              <span className="text-lg">{s.emoji}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1">
                <span className="text-sm font-bold" style={{ color: '#2D2A24' }}>{s.name}</span>
                {s.verified && <span className="text-[9px]">✅</span>}
              </div>
              <p className="text-[10px]" style={{ color: '#9C958D' }}>
                {s.skill} • ⭐{s.rating} • {s.jobs} jobs • ⚡{s.response}
              </p>
            </div>
            <div className="text-right flex flex-col items-end gap-1">
              <span className="text-xs font-bold" style={{ color: '#2D2A24' }}>{s.price}</span>
              <span className={`w-2 h-2 rounded-full ${s.available ? 'bg-green-500' : 'bg-red-500'}`} />
            </div>
          </motion.div>
        ))}
      </div>

      <p className="text-xs font-bold mb-3" style={{ color: '#2D2A24' }}>How You're Protected</p>
      <div className="flex flex-wrap gap-2">
        {escrowSteps.map((step, i) => (
          <motion.div
            key={i}
            className="pj-glass px-3 py-2 text-[10px] font-medium text-white/70"
            style={{
              background: 'rgba(15,74,51,0.08)',
              border: '1px solid rgba(26,138,92,0.15)',
              color: '#2D2A24',
              borderRadius: 100,
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 + i * 0.15 }}
          >
            <span className="font-bold mr-1" style={{ color: '#1A8A5C' }}>{step.step}.</span>
            {step.text}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function HighValueSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const items = [
    { title: 'Sea View 2-Bed', location: 'Sliema', price: '€1,350/mo', emoji: '🏠', badge: 'Live Tour', color: '#2563EB' },
    { title: '40ft Catamaran', location: 'Grand Harbour', price: '€1,200/day', emoji: '⛵', badge: 'Live Tour', color: '#7C3AED' },
    { title: '2022 VW Polo', location: '28K km', price: '€16,500', emoji: '🚗', badge: 'Live Walkaround', color: '#D97706' },
  ];

  return (
    <div ref={ref} className="py-8" style={{ background: '#0D0D0F' }}>
      <div className="px-5 mb-5">
        <h2 className="text-2xl font-extrabold tracking-tight text-white">🏠 Property • 🛥️ Yacht • 🚗 Cars</h2>
        <p className="text-xs text-white/40 mt-1">Live tours. Escrow protected.</p>
      </div>

      <div className="flex gap-3 overflow-x-auto px-5 pb-2 pj-scrollbar-hide">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="flex-shrink-0 rounded-2xl overflow-hidden"
            style={{
              width: 200,
              background: `linear-gradient(135deg, ${item.color}15, transparent)`,
              border: '1px solid rgba(255,255,255,0.08)',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.15 }}
            whileHover={{ borderColor: 'rgba(196,148,30,0.3)' }}
          >
            <div className="relative h-[120px] flex items-center justify-center" style={{ background: `${item.color}10` }}>
              <span className="text-5xl opacity-30">{item.emoji}</span>
              <div className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 rounded-full" style={{ background: `${item.color}`, boxShadow: `0 0 12px ${item.color}50` }}>
                <LivePulse size={5} color="#fff" />
                <span className="text-[9px] font-bold text-white">{item.badge}</span>
              </div>
            </div>
            <div className="p-3">
              <p className="text-sm font-bold text-white mb-0.5">{item.title}</p>
              <p className="text-[10px] text-white/40 mb-2">{item.location}</p>
              <p className="text-base font-black" style={{ color: item.color }}>{item.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function CommunitySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const communities = [
    { emoji: '🇮🇳', name: 'Indian Community', members: 1240 },
    { emoji: '☪️', name: 'Muslim Malta', members: 890 },
    { emoji: '💻', name: 'Digital Nomads', members: 3100 },
    { emoji: '🇬🇧', name: 'British Expats', members: 2450 },
  ];

  return (
    <div ref={ref} className="pj-cream-section px-5 py-8">
      <h2 className="text-2xl font-extrabold tracking-tight mb-5" style={{ color: '#2D2A24' }}>Your People. Here.</h2>
      <motion.div
        className="grid grid-cols-2 gap-3"
        variants={stagger}
        initial="hidden"
        animate={isInView ? 'show' : 'hidden'}
      >
        {communities.map((c, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-3 p-4 rounded-2xl"
            style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(0,0,0,0.06)' }}
            variants={fadeUp}
            whileHover={{ y: -2, borderColor: '#C4941E' }}
          >
            <span className="text-2xl">{c.emoji}</span>
            <div>
              <p className="text-xs font-bold" style={{ color: '#2D2A24' }}>{c.name}</p>
              <p className="text-[10px]" style={{ color: '#9C958D' }}>{c.members.toLocaleString()}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

function MagazineFooter() {
  const articles = [
    'Best Sunset Spots in Malta 2025',
    'How AI is Changing Maltese Business',
    'Hidden Gems: 10 Local Shops You Need to Visit',
  ];

  return (
    <div className="px-5 py-8" style={{ background: '#0D0D0F' }}>
      <h3 className="text-base font-bold text-white mb-3">📰 PJAZZA Magazine</h3>
      <div className="space-y-2 mb-6">
        {articles.map((a, i) => (
          <motion.div
            key={i}
            className="pj-glass px-4 py-3 text-sm text-white/60"
            whileHover={{ borderColor: 'rgba(196,148,30,0.3)' }}
          >
            {a}
          </motion.div>
        ))}
      </div>
      <p className="text-2xl font-black text-center mb-1" style={{ color: '#C4941E' }}>
        Malta is alive. See it now.
      </p>
      <div className="h-20" />
    </div>
  );
}

export default function Discover() {
  return (
    <div className="min-h-screen" style={{ background: '#0D0D0F' }}>
      <TopBar />
      <HeroSection />
      <TierSelector />
      <CategoryGrid />
      <LiveNowSection />
      <CrowdIntelligence />
      <VideoCallSection />
      <TrustedServices />
      <HighValueSection />
      <CommunitySection />
      <MagazineFooter />
      <BottomNav />
    </div>
  );
}
