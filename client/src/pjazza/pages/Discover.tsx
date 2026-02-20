import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLocation } from 'wouter';
import {
  Utensils, Landmark, Home, Ship, Car, ShoppingBag, Wrench, Heart,
  TrendingUp, Eye, Clock, Star, ChevronRight, Phone, Shield, CheckCircle,
  Flame, Users, MapPin, Radio, Play, Sparkles, ArrowUpRight
} from 'lucide-react';
import TopBar from '../components/TopBar';
import BottomNav from '../components/BottomNav';
import GlassCard from '../components/GlassCard';
import LivePulse from '../components/LivePulse';
import CountUp from '../components/CountUp';
import { DiscoverScene } from '../components/Scene3D';

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

function HeroSection() {
  return (
    <div className="relative overflow-hidden pj-mesh-animated" style={{ height: '44vh', background: 'var(--pj-deep)' }}>
      <DiscoverScene />
      <div className="pj-content-overlay flex flex-col justify-end h-full px-6 pb-7">
        <motion.div
          className="flex items-center gap-2 mb-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <LivePulse size={6} />
          <span className="pj-section-label">LIVE NOW</span>
        </motion.div>

        <motion.h1
          className="tracking-[-0.04em] leading-[0.9] mb-4"
          style={{ fontFamily: 'var(--pj-font-display)', fontSize: 'var(--pj-size-h1)', fontWeight: 700 }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <span style={{ color: 'var(--pj-text)' }}>See Everything.</span>
          <br />
          <span style={{ color: 'var(--pj-text-tertiary)' }}>Trust Instantly.</span>
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
            <div key={i} className="pj-pill text-[10px]">
              <pill.icon size={12} strokeWidth={2.5} style={{ color: 'var(--pj-crimson)' }} />
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
    { Icon: Utensils, label: 'Dining', count: 127, color: '#EF4444' },
    { Icon: Landmark, label: 'Tours', count: 43, color: '#3B82F6' },
    { Icon: Home, label: 'Property', count: 89, color: '#8B5CF6' },
    { Icon: Ship, label: 'Yachts', count: 18, color: '#06B6D4' },
    { Icon: Car, label: 'Cars', count: 34, color: '#F59E0B' },
    { Icon: ShoppingBag, label: 'Shop', count: 67, color: '#EC4899' },
    { Icon: Wrench, label: 'Services', count: 56, color: '#34D399' },
    { Icon: Heart, label: 'Wellness', count: 31, color: '#F472B6' },
  ];

  return (
    <div ref={ref} className="px-6 py-7 pj-living-bg">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2
            className="text-[22px] font-bold tracking-tight"
            style={{ fontFamily: 'var(--pj-font-display)', color: 'var(--pj-text)' }}
          >
            Explore
          </h2>
          <p className="text-[11px] mt-0.5" style={{ color: 'var(--pj-text-tertiary)' }}>8 categories, all live</p>
        </div>
        <button className="pj-pill text-[11px] gap-1" style={{ color: 'var(--pj-crimson)' }}>
          All <ChevronRight size={14} strokeWidth={2.5} />
        </button>
      </div>
      <motion.div
        className="grid grid-cols-4 gap-3"
        variants={stagger}
        initial="hidden"
        animate={isInView ? 'show' : 'hidden'}
      >
        {categories.map((cat, i) => (
          <motion.button
            key={i}
            className="pj-category-orb"
            variants={fadeUp}
            whileTap={{ scale: 0.92 }}
            data-testid={`button-category-${cat.label.toLowerCase()}`}
          >
            <div className="pj-icon-orb" style={{ width: 52, height: 52 }}>
              <cat.Icon size={22} strokeWidth={2} style={{ color: cat.color }} />
            </div>
            <span className="text-[11px] font-semibold" style={{ fontFamily: 'var(--pj-font-display)', color: 'var(--pj-text)' }}>
              {cat.label}
            </span>
            <span className="text-[9px]" style={{ color: 'var(--pj-text-muted)' }}>{cat.count}</span>
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
    <div ref={ref} className="py-7 pj-living-bg">
      <div className="px-6 mb-5">
        <div className="flex items-center gap-2.5 mb-1">
          <LivePulse size={8} />
          <h2
            className="text-[22px] font-bold tracking-tight"
            style={{ fontFamily: 'var(--pj-font-display)', color: 'var(--pj-text)' }}
          >
            Live Now
          </h2>
        </div>
        <p className="text-[12px]" style={{ color: 'var(--pj-text-tertiary)' }}>Happening right now across Malta</p>
      </div>

      <div className="flex gap-3 overflow-x-auto px-6 pb-3 pj-scrollbar-hide" style={{ scrollSnapType: 'x mandatory' }}>
        {liveStreams.map((stream, i) => (
          <motion.div
            key={i}
            className="flex-shrink-0 pj-card-glow overflow-hidden"
            style={{ width: 220, scrollSnapAlign: 'center' }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <div className="pj-video-frame pj-video-frame-glow" style={{ aspectRatio: '16/10', borderRadius: '20px 20px 0 0', border: 'none' }}>
              <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, var(--pj-surface-2), var(--pj-surface-1))' }}>
                <motion.div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(196,30,58,0.15)', border: '1px solid rgba(196,30,58,0.2)' }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Play size={16} fill="white" style={{ color: 'white', marginLeft: 2 }} />
                </motion.div>
              </div>
              <div className="absolute top-2.5 left-2.5 pj-live-badge py-0.5 px-2.5">
                <LivePulse size={4} color="#fff" />
                <span className="text-[9px] font-bold text-white">{stream.viewers}</span>
              </div>
              <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full text-[9px] font-medium" style={{ background: 'var(--pj-surface-glass)', backdropFilter: 'blur(8px)', color: 'var(--pj-text-secondary)' }}>
                {stream.distance}
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: 'var(--pj-surface-3)' }}>
                <motion.div
                  className="h-full rounded-r-full"
                  style={{ background: stream.crowd > 70 ? 'var(--pj-crimson)' : stream.crowd > 40 ? 'var(--pj-amber)' : 'var(--pj-green)' }}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${stream.crowd}%` } : {}}
                  transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                />
              </div>
            </div>

            <div className="p-3.5">
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="text-[13px] font-bold truncate" style={{ fontFamily: 'var(--pj-font-display)', color: 'var(--pj-text)' }}>{stream.name}</span>
                <CheckCircle size={13} style={{ color: 'var(--pj-green)', flexShrink: 0 }} />
              </div>
              <p className="text-[10px] mb-2.5" style={{ color: 'var(--pj-text-tertiary)' }}>{stream.location} · {stream.category}</p>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-medium" style={{ color: 'var(--pj-text-secondary)' }}>
                  <Star size={10} className="inline mr-0.5" fill="#F59E0B" style={{ color: '#F59E0B' }} />
                  {stream.rating}
                  <span style={{ color: 'var(--pj-text-muted)' }}> ({stream.reviews.toLocaleString()})</span>
                </span>
                <span
                  className="text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1"
                  style={{ background: 'var(--pj-crimson)', color: 'white' }}
                >
                  <Eye size={10} /> Watch
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
    { name: "Ta' Kris", percent: 78, status: 'Busy', Icon: Flame, color: 'var(--pj-crimson)', tip: 'Best before 6:30 PM' },
    { name: 'The Chophouse', percent: 62, status: 'Good time', Icon: TrendingUp, color: 'var(--pj-amber)', tip: 'Happy hour until 7 PM' },
    { name: 'Caf\u00e9 del Mar', percent: 20, status: 'Quiet', Icon: CheckCircle, color: 'var(--pj-green)', tip: 'Sunset seats available' },
  ];

  return (
    <div ref={ref} className="px-6 py-7 pj-living-bg">
      <div className="flex items-center gap-2.5 mb-1">
        <div className="pj-icon-orb" style={{ width: 32, height: 32 }}>
          <Users size={15} strokeWidth={2.5} style={{ color: 'var(--pj-crimson)' }} />
        </div>
        <div>
          <h2 className="text-[22px] font-bold tracking-tight" style={{ fontFamily: 'var(--pj-font-display)', color: 'var(--pj-text)' }}>
            Crowd Intelligence
          </h2>
          <p className="text-[11px]" style={{ color: 'var(--pj-text-tertiary)' }}>Real-time. Know before you go.</p>
        </div>
      </div>

      <div className="space-y-2.5 mt-5">
        {crowds.map((c, i) => (
          <GlassCard
            key={i}
            className="p-4"
            tilt={false}
            glow
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1 + i * 0.1 }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <c.Icon size={15} strokeWidth={2.5} style={{ color: c.color }} />
                <span className="text-[14px] font-bold" style={{ fontFamily: 'var(--pj-font-display)', color: 'var(--pj-text)' }}>{c.name}</span>
              </div>
              <span className="text-2xl font-bold pj-number-mono" style={{ fontFamily: 'var(--pj-font-display)', color: c.color }}>
                {isInView ? <CountUp end={c.percent} suffix="%" /> : '0%'}
              </span>
            </div>
            <div className="h-1.5 rounded-full overflow-hidden mb-2.5" style={{ background: 'var(--pj-surface-3)' }}>
              <motion.div
                className="h-full rounded-full"
                style={{ background: c.color }}
                initial={{ width: 0 }}
                animate={isInView ? { width: `${c.percent}%` } : {}}
                transition={{ duration: 1.2, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold" style={{ color: 'var(--pj-text-secondary)' }}>{c.status}</span>
              <span className="text-[10px]" style={{ color: 'var(--pj-text-muted)' }}>{c.tip}</span>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}

function VideoCallSection() {
  return (
    <div className="px-6 py-7 pj-living-bg">
      <div className="flex items-center gap-2.5 mb-1">
        <div className="pj-icon-orb" style={{ width: 32, height: 32 }}>
          <Phone size={15} strokeWidth={2.5} style={{ color: 'var(--pj-crimson)' }} />
        </div>
        <div>
          <h2 className="text-[22px] font-bold tracking-tight" style={{ fontFamily: 'var(--pj-font-display)', color: 'var(--pj-text)' }}>
            Video Shopping
          </h2>
          <p className="text-[11px]" style={{ color: 'var(--pj-text-tertiary)' }}>See products live. Buy in-app. Delivered today.</p>
        </div>
      </div>

      <div className="pj-card-elevated p-5 mt-5">
        <div className="flex items-center justify-around mb-6">
          {[
            { Icon: ShoppingBag, label: 'Pick', color: '#EC4899' },
            { Icon: Phone, label: 'Call', color: 'var(--pj-crimson)' },
            { Icon: CheckCircle, label: 'Receive', color: 'var(--pj-green)' },
          ].map((step, i) => (
            <div key={i} className="flex items-center">
              <div className="flex flex-col items-center">
                <motion.div
                  className="pj-icon-orb mb-2.5"
                  style={{ width: 52, height: 52 }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.15, type: 'spring', stiffness: 300 }}
                >
                  <step.Icon size={22} strokeWidth={2} style={{ color: step.color }} />
                </motion.div>
                <span className="text-[11px] font-bold" style={{ fontFamily: 'var(--pj-font-display)', color: 'var(--pj-text)' }}>{step.label}</span>
              </div>
              {i < 2 && (
                <div className="w-6 mx-1 mb-6">
                  <div className="h-[1px]" style={{ background: 'linear-gradient(90deg, transparent, var(--pj-crimson-border), transparent)' }} />
                </div>
              )}
            </div>
          ))}
        </div>

        <motion.button
          className="w-full pj-btn-primary py-4 text-[14px] font-bold"
          style={{ fontFamily: 'var(--pj-font-display)' }}
          whileTap={{ scale: 0.96 }}
          data-testid="button-video-shopping"
        >
          Start Video Shopping
        </motion.button>
        <p className="text-[10px] text-center mt-3" style={{ color: 'var(--pj-text-muted)' }}>
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
    { name: 'Mark Borg', skill: 'Plumber', rating: 4.8, jobs: 156, response: '12 min', price: '\u20ac45/hr', available: true, Icon: Wrench },
    { name: 'Sarah Chen', skill: 'Electrician', rating: 4.9, jobs: 203, response: '8 min', price: '\u20ac55/hr', available: true, Icon: Sparkles },
    { name: 'Joe Vella', skill: 'Painter', rating: 4.7, jobs: 89, response: '25 min', price: '\u20ac35/hr', available: false, Icon: Wrench },
  ];

  return (
    <div ref={ref} className="px-6 py-7 pj-living-bg">
      <div className="flex items-center gap-2.5 mb-1">
        <div className="pj-icon-orb" style={{ width: 32, height: 32 }}>
          <Shield size={15} strokeWidth={2.5} style={{ color: 'var(--pj-green)' }} />
        </div>
        <div>
          <h2 className="text-[22px] font-bold tracking-tight" style={{ fontFamily: 'var(--pj-font-display)', color: 'var(--pj-text)' }}>
            Trusted Services
          </h2>
          <p className="text-[11px]" style={{ color: 'var(--pj-text-tertiary)' }}>Escrow-protected. Watch them work live.</p>
        </div>
      </div>

      <div className="space-y-2.5 mt-5">
        {services.map((s, i) => (
          <motion.div
            key={i}
            className="pj-card flex items-center gap-3.5 p-4"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.1 }}
          >
            <div className="pj-icon-orb flex-shrink-0" style={{ width: 44, height: 44 }}>
              <s.Icon size={18} strokeWidth={2} style={{ color: 'var(--pj-crimson)' }} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-[13px] font-bold" style={{ fontFamily: 'var(--pj-font-display)', color: 'var(--pj-text)' }}>{s.name}</span>
                <CheckCircle size={12} style={{ color: 'var(--pj-green)' }} />
              </div>
              <p className="text-[10px] flex items-center gap-1 mt-0.5" style={{ color: 'var(--pj-text-tertiary)' }}>
                {s.skill} · <Star size={9} fill="#F59E0B" style={{ color: '#F59E0B' }} /> {s.rating} · {s.jobs} jobs · <Clock size={9} /> {s.response}
              </p>
            </div>
            <div className="text-right flex flex-col items-end gap-1.5 flex-shrink-0">
              <span className="text-[12px] font-bold" style={{ fontFamily: 'var(--pj-font-display)', color: 'var(--pj-text)' }}>{s.price}</span>
              <span className={`w-2 h-2 rounded-full`} style={{ background: s.available ? 'var(--pj-green)' : 'var(--pj-crimson)' }} />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {['Pay \u2192 Escrow holds', 'Work done \u2192 Photos', 'Approve \u2192 Released', 'Rate \u2192 Trust builds'].map((step, i) => (
          <span key={i} className="pj-pill text-[9px]" style={{ color: 'var(--pj-text-tertiary)' }}>
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
    <div ref={ref} className="py-7 pj-living-bg">
      <div className="px-6 mb-5">
        <div className="flex items-center gap-2.5 mb-1">
          <div className="pj-icon-orb" style={{ width: 32, height: 32 }}>
            <Sparkles size={15} strokeWidth={2.5} style={{ color: 'var(--pj-amber)' }} />
          </div>
          <div>
            <h2 className="text-[22px] font-bold tracking-tight" style={{ fontFamily: 'var(--pj-font-display)', color: 'var(--pj-text)' }}>
              High-Value Live
            </h2>
            <p className="text-[11px]" style={{ color: 'var(--pj-text-tertiary)' }}>Property · Yachts · Cars — escrow protected</p>
          </div>
        </div>
      </div>

      <div className="flex gap-3 overflow-x-auto px-6 pb-3 pj-scrollbar-hide">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="flex-shrink-0 pj-card-glow overflow-hidden"
            style={{ width: 200 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.12 }}
          >
            <div className="pj-video-frame" style={{ aspectRatio: '16/10', borderRadius: '20px 20px 0 0', border: 'none' }}>
              <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, var(--pj-surface-2), var(--pj-surface-1))' }}>
                <item.Icon size={32} strokeWidth={1.5} style={{ color: 'var(--pj-crimson)', opacity: 0.15 }} />
              </div>
              <div className="absolute top-2.5 left-2.5 pj-live-badge py-0.5 px-2.5">
                <LivePulse size={4} color="#fff" />
                <span className="text-[9px] font-bold text-white">{item.badge}</span>
              </div>
            </div>
            <div className="p-3.5">
              <p className="text-[13px] font-bold mb-0.5" style={{ fontFamily: 'var(--pj-font-display)', color: 'var(--pj-text)' }}>{item.title}</p>
              <p className="text-[10px] mb-2" style={{ color: 'var(--pj-text-tertiary)' }}>{item.location}</p>
              <div className="flex items-center justify-between">
                <p className="text-[16px] font-bold" style={{ fontFamily: 'var(--pj-font-display)', color: 'var(--pj-crimson)' }}>{item.price}</p>
                <ArrowUpRight size={14} strokeWidth={2.5} style={{ color: 'var(--pj-text-tertiary)' }} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function Discover() {
  return (
    <div className="min-h-screen pj-grain" style={{ background: 'var(--pj-deep)' }}>
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
      <div className="h-24" />
      <BottomNav />
    </div>
  );
}
