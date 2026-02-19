import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLocation } from 'wouter';
import {
  Utensils, Landmark, Home, Ship, Car, ShoppingBag, Wrench, Heart,
  TrendingUp, Eye, Clock, Star, ChevronRight, Phone, Shield, CheckCircle,
  Flame, Users, MapPin, Radio
} from 'lucide-react';
import TopBar from '../components/TopBar';
import BottomNav from '../components/BottomNav';
import GlassCard from '../components/GlassCard';
import LivePulse from '../components/LivePulse';
import CountUp from '../components/CountUp';
import { DiscoverScene } from '../components/Scene3D';

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

function HeroSection() {
  return (
    <div className="relative overflow-hidden" style={{ height: '42vh', background: '#080808' }}>
      <DiscoverScene />
      <div className="pj-content-overlay flex flex-col justify-end h-full px-5 pb-8">
        <motion.div
          className="flex items-center gap-2 mb-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <LivePulse size={6} />
          <span className="text-[10px] font-bold tracking-[3px] uppercase" style={{ color: 'var(--pj-red)' }}>
            LIVE NOW
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl font-black text-white tracking-tighter leading-[0.95] mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          See Everything.
          <br />
          <span style={{ color: 'var(--pj-text-secondary)' }}>Trust Instantly.</span>
        </motion.h1>

        <motion.div
          className="flex gap-2 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          {[
            { icon: Radio, text: '47 Live' },
            { icon: Users, text: '2.4K Online' },
            { icon: MapPin, text: 'Malta' },
          ].map((pill, i) => (
            <div
              key={i}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-medium"
              style={{ background: 'var(--pj-surface)', border: '1px solid var(--pj-border)', color: 'var(--pj-text-tertiary)' }}
            >
              <pill.icon size={11} style={{ color: 'var(--pj-red)' }} />
              {pill.text}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function CategoryGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const categories = [
    { Icon: Utensils, label: 'Dining', count: 127 },
    { Icon: Landmark, label: 'Tours', count: 43 },
    { Icon: Home, label: 'Property', count: 89 },
    { Icon: Ship, label: 'Yachts', count: 18 },
    { Icon: Car, label: 'Cars', count: 34 },
    { Icon: ShoppingBag, label: 'Shop', count: 67 },
    { Icon: Wrench, label: 'Services', count: 56 },
    { Icon: Heart, label: 'Wellness', count: 31 },
  ];

  return (
    <div ref={ref} className="px-5 py-6" style={{ background: '#080808' }}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-extrabold tracking-tight text-white">Explore</h2>
        <span className="text-xs font-bold flex items-center gap-0.5" style={{ color: 'var(--pj-red)' }}>
          All <ChevronRight size={14} />
        </span>
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
            className="pj-card flex flex-col items-center py-3 px-1"
            variants={fadeUp}
            whileTap={{ scale: 0.95 }}
            data-testid={`button-category-${cat.label.toLowerCase()}`}
          >
            <cat.Icon size={20} style={{ color: 'var(--pj-red)', marginBottom: 6 }} />
            <span className="text-[11px] font-bold text-white">{cat.label}</span>
            <span className="text-[9px]" style={{ color: 'var(--pj-text-tertiary)' }}>{cat.count}</span>
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
    { name: "Noni's Kitchen", viewers: 47, distance: '0.3km', crowd: 78, rating: 4.8, reviews: 1203, category: 'Restaurant', location: 'Sliema', Icon: Utensils },
    { name: 'Blue Harbour Yacht', viewers: 23, distance: '1.2km', crowd: 45, rating: 4.9, reviews: 342, category: 'Charter', location: 'Grand Harbour', Icon: Ship },
    { name: 'Mdina Glass', viewers: 18, distance: '5.4km', crowd: 30, rating: 4.7, reviews: 891, category: 'Artisan', location: 'Mdina', Icon: ShoppingBag },
    { name: 'Fortina Spa', viewers: 31, distance: '0.8km', crowd: 55, rating: 4.6, reviews: 567, category: 'Wellness', location: 'Sliema', Icon: Heart },
  ];

  return (
    <div ref={ref} className="py-6" style={{ background: '#080808' }}>
      <div className="px-5 mb-4">
        <div className="flex items-center gap-2 mb-1">
          <LivePulse size={8} />
          <h2 className="text-xl font-extrabold tracking-tight text-white">Live Now</h2>
        </div>
        <p className="text-xs" style={{ color: 'var(--pj-text-tertiary)' }}>Happening right now across Malta</p>
      </div>

      <div className="flex gap-3 overflow-x-auto px-5 pb-3 pj-scrollbar-hide" style={{ scrollSnapType: 'x mandatory' }}>
        {liveStreams.map((stream, i) => (
          <motion.div
            key={i}
            className="flex-shrink-0 pj-card overflow-hidden"
            style={{ width: 200, scrollSnapAlign: 'center' }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <div className="relative h-[120px] flex items-center justify-center" style={{ background: 'var(--pj-surface-2)' }}>
              <stream.Icon size={40} style={{ color: 'var(--pj-red)', opacity: 0.1 }} />
              <div className="absolute top-2 left-2 pj-live-badge py-0.5 px-2">
                <LivePulse size={4} color="#fff" />
                <span className="text-[9px] font-bold text-white">{stream.viewers}</span>
              </div>
              <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-[9px] font-medium" style={{ background: 'var(--pj-surface)', color: 'var(--pj-text-tertiary)' }}>
                {stream.distance}
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: 'var(--pj-surface-3)' }}>
                <div
                  className="h-full rounded-r-full"
                  style={{
                    width: `${stream.crowd}%`,
                    background: stream.crowd > 70 ? 'var(--pj-red)' : stream.crowd > 40 ? '#D97706' : '#1A8A5C',
                  }}
                />
              </div>
            </div>

            <div className="p-3">
              <div className="flex items-center gap-1 mb-0.5">
                <span className="text-sm font-bold text-white truncate">{stream.name}</span>
                <CheckCircle size={12} style={{ color: '#1A8A5C', flexShrink: 0 }} />
              </div>
              <p className="text-[10px] mb-2" style={{ color: 'var(--pj-text-tertiary)' }}>{stream.location} · {stream.category}</p>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-medium text-white">
                  <Star size={10} className="inline mr-0.5" style={{ color: '#D97706' }} />
                  {stream.rating}
                  <span style={{ color: 'var(--pj-text-tertiary)' }}> ({stream.reviews.toLocaleString()})</span>
                </span>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ background: 'var(--pj-red)', color: 'white' }}>
                  Watch
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
    { name: "Ta' Kris", percent: 78, status: 'Busy', Icon: Flame, color: 'var(--pj-red)', tip: 'Best before 6:30 PM' },
    { name: 'The Chophouse', percent: 62, status: 'Good time', Icon: TrendingUp, color: '#D97706', tip: 'Happy hour until 7 PM' },
    { name: 'Caf\u00e9 del Mar', percent: 20, status: 'Quiet', Icon: CheckCircle, color: '#1A8A5C', tip: 'Sunset seats available' },
  ];

  return (
    <div ref={ref} className="px-5 py-6" style={{ background: '#080808' }}>
      <div className="flex items-center gap-2 mb-1">
        <Users size={18} style={{ color: 'var(--pj-red)' }} />
        <h2 className="text-xl font-extrabold tracking-tight text-white">Crowd Intelligence</h2>
      </div>
      <p className="text-xs mb-4" style={{ color: 'var(--pj-text-tertiary)' }}>Real-time. Know before you go.</p>

      <div className="space-y-2">
        {crowds.map((c, i) => (
          <GlassCard
            key={i}
            className="p-4"
            tilt={false}
            initial={{ opacity: 0, x: -15 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.1 }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <c.Icon size={14} style={{ color: c.color }} />
                <span className="text-sm font-bold text-white">{c.name}</span>
              </div>
              <span className="text-2xl font-black pj-number-mono" style={{ color: c.color }}>
                {isInView ? <CountUp end={c.percent} suffix="%" /> : '0%'}
              </span>
            </div>
            <div className="h-1.5 rounded-full overflow-hidden mb-2" style={{ background: 'var(--pj-surface-3)' }}>
              <motion.div
                className="h-full rounded-full"
                style={{ background: c.color }}
                initial={{ width: 0 }}
                animate={isInView ? { width: `${c.percent}%` } : {}}
                transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-medium" style={{ color: 'var(--pj-text-secondary)' }}>{c.status}</span>
              <span className="text-[10px]" style={{ color: 'var(--pj-text-tertiary)' }}>{c.tip}</span>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}

function VideoCallSection() {
  return (
    <div className="px-5 py-6" style={{ background: '#080808' }}>
      <div className="flex items-center gap-2 mb-1">
        <Phone size={18} style={{ color: 'var(--pj-red)' }} />
        <h2 className="text-xl font-extrabold tracking-tight text-white">Video Shopping</h2>
      </div>
      <p className="text-xs mb-5" style={{ color: 'var(--pj-text-tertiary)' }}>See products live. Buy in-app. Delivered today.</p>

      <div className="pj-card-elevated p-5">
        <div className="flex items-center justify-around mb-6">
          {[
            { Icon: ShoppingBag, label: 'Pick' },
            { Icon: Phone, label: 'Call' },
            { Icon: CheckCircle, label: 'Receive' },
          ].map((step, i) => (
            <div key={i} className="flex items-center">
              <div className="flex flex-col items-center">
                <motion.div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-2"
                  style={{ background: 'var(--pj-red-subtle)', border: '1px solid var(--pj-red-border)' }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.15, type: 'spring' }}
                >
                  <step.Icon size={22} style={{ color: 'var(--pj-red)' }} />
                </motion.div>
                <span className="text-[11px] font-bold text-white">{step.label}</span>
              </div>
              {i < 2 && (
                <div className="w-8 mx-1 mb-5">
                  <div className="pj-red-line" />
                </div>
              )}
            </div>
          ))}
        </div>

        <motion.button
          className="w-full pj-btn-primary py-4 text-sm font-black"
          whileTap={{ scale: 0.96 }}
          data-testid="button-video-shopping"
        >
          Start Video Shopping
        </motion.button>
        <p className="text-[10px] text-center mt-3" style={{ color: 'var(--pj-text-tertiary)' }}>
          Same-day delivery · Free over \u20ac50
        </p>
      </div>
    </div>
  );
}

function TrustedServices() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const services = [
    { name: 'Mark Borg', skill: 'Plumber', rating: 4.8, jobs: 156, response: '12 min', price: '\u20ac45/hr', available: true },
    { name: 'Sarah Chen', skill: 'Electrician', rating: 4.9, jobs: 203, response: '8 min', price: '\u20ac55/hr', available: true },
    { name: 'Joe Vella', skill: 'Painter', rating: 4.7, jobs: 89, response: '25 min', price: '\u20ac35/hr', available: false },
  ];

  return (
    <div ref={ref} className="px-5 py-6" style={{ background: '#080808' }}>
      <div className="flex items-center gap-2 mb-1">
        <Shield size={18} style={{ color: 'var(--pj-red)' }} />
        <h2 className="text-xl font-extrabold tracking-tight text-white">Trusted Services</h2>
      </div>
      <p className="text-xs mb-4" style={{ color: 'var(--pj-text-tertiary)' }}>Escrow-protected. Watch them work live.</p>

      <div className="space-y-2">
        {services.map((s, i) => (
          <motion.div
            key={i}
            className="pj-card flex items-center gap-3 p-3"
            initial={{ opacity: 0, x: -15 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.1 }}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'var(--pj-red-subtle)' }}>
              <Wrench size={18} style={{ color: 'var(--pj-red)' }} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1">
                <span className="text-sm font-bold text-white">{s.name}</span>
                <CheckCircle size={12} style={{ color: '#1A8A5C' }} />
              </div>
              <p className="text-[10px]" style={{ color: 'var(--pj-text-tertiary)' }}>
                {s.skill} · <Star size={9} className="inline" style={{ color: '#D97706' }} /> {s.rating} · {s.jobs} jobs · <Clock size={9} className="inline" /> {s.response}
              </p>
            </div>
            <div className="text-right flex flex-col items-end gap-1">
              <span className="text-xs font-bold text-white">{s.price}</span>
              <span className={`w-2 h-2 rounded-full ${s.available ? 'bg-green-500' : 'bg-red-500'}`} />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {['Pay \u2192 Escrow holds', 'Work done \u2192 Photos', 'Approve \u2192 Released', 'Rate \u2192 Trust builds'].map((step, i) => (
          <span
            key={i}
            className="text-[9px] font-medium px-2.5 py-1 rounded-full"
            style={{ background: 'var(--pj-red-subtle)', border: '1px solid var(--pj-red-border)', color: 'var(--pj-text-secondary)' }}
          >
            {step}
          </span>
        ))}
      </div>
    </div>
  );
}

function HighValueSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const items = [
    { title: 'Sea View 2-Bed', location: 'Sliema', price: '\u20ac1,350/mo', Icon: Home, badge: 'Live Tour' },
    { title: '40ft Catamaran', location: 'Grand Harbour', price: '\u20ac1,200/day', Icon: Ship, badge: 'Live Tour' },
    { title: '2022 VW Polo', location: '28K km', price: '\u20ac16,500', Icon: Car, badge: 'Walkaround' },
  ];

  return (
    <div ref={ref} className="py-6" style={{ background: '#080808' }}>
      <div className="px-5 mb-4">
        <h2 className="text-xl font-extrabold tracking-tight text-white">High-Value Live</h2>
        <p className="text-xs mt-0.5" style={{ color: 'var(--pj-text-tertiary)' }}>Property · Yachts · Cars — live tours, escrow protected</p>
      </div>

      <div className="flex gap-3 overflow-x-auto px-5 pb-2 pj-scrollbar-hide">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="flex-shrink-0 pj-card overflow-hidden"
            style={{ width: 190 }}
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.12 }}
          >
            <div className="relative h-[110px] flex items-center justify-center" style={{ background: 'var(--pj-surface-2)' }}>
              <item.Icon size={36} style={{ color: 'var(--pj-red)', opacity: 0.1 }} />
              <div className="absolute top-2 left-2 pj-live-badge py-0.5 px-2">
                <LivePulse size={4} color="#fff" />
                <span className="text-[9px] font-bold text-white">{item.badge}</span>
              </div>
            </div>
            <div className="p-3">
              <p className="text-sm font-bold text-white mb-0.5">{item.title}</p>
              <p className="text-[10px] mb-1.5" style={{ color: 'var(--pj-text-tertiary)' }}>{item.location}</p>
              <p className="text-base font-black" style={{ color: 'var(--pj-red)' }}>{item.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function Discover() {
  return (
    <div className="min-h-screen" style={{ background: '#080808' }}>
      <TopBar />
      <HeroSection />
      <div className="pj-divider" />
      <CategoryGrid />
      <div className="pj-divider" />
      <LiveNowSection />
      <div className="pj-divider" />
      <CrowdIntelligence />
      <div className="pj-divider" />
      <VideoCallSection />
      <div className="pj-divider" />
      <TrustedServices />
      <div className="pj-divider" />
      <HighValueSection />
      <div className="h-20" />
      <BottomNav />
    </div>
  );
}
