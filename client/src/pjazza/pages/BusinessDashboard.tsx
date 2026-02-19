import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLocation } from 'wouter';
import CountUp from '../components/CountUp';
import LivePulse from '../components/LivePulse';

const metrics = [
  { icon: '👁️', label: 'Viewers', value: 47, color: '#E05A3A' },
  { icon: '📅', label: 'Bookings', value: 12, color: '#2563EB' },
  { icon: '💰', label: 'Revenue', value: 840, color: '#1A8A5C', prefix: '€' },
  { icon: '⭐', label: 'Rating', value: 4.8, color: '#C4941E', decimals: 1 },
];

const requests = [
  { type: '🍽️ Booking', badge: 'booking', name: 'John S.', message: 'Table for 4 tonight at 8pm?', time: '3m ago', value: '€180' },
  { type: '📹 Video Call', badge: 'video', name: 'Maria L.', message: 'Can I see the seafood display?', time: '8m ago', value: '€45' },
  { type: '🛍️ Order', badge: 'order', name: 'Alex T.', message: 'I want 2x pastizzi trays for pickup', time: '15m ago', value: '€28' },
];

const earnings = [
  { label: '12 bookings × €45 avg', value: '€540', color: 'white' },
  { label: '8 live orders', value: '€300', color: 'white' },
  { label: 'PJAZZA fee (8%)', value: '-€67.20', color: '#E05A3A' },
  { label: 'Net to you', value: '€772.80', color: '#1A8A5C', bold: true },
];

export default function BusinessDashboard() {
  const [, navigate] = useLocation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="min-h-screen px-5 py-6 pb-20" style={{ background: '#0D0D0F' }}>
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-2xl font-black text-white tracking-tight">Welcome back, Noni's Kitchen</h1>
        <motion.div
          className="inline-flex items-center gap-2 mt-2 px-3 py-1.5 rounded-full"
          style={{ background: 'rgba(224,90,58,0.1)', border: '1px solid rgba(224,90,58,0.2)' }}
          animate={{ y: [-2, 2, -2] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <span className="text-[11px]">🔥</span>
          <span className="text-[11px] font-bold" style={{ color: '#E05A3A' }}>14-day streak</span>
          <span className="text-[10px] text-white/30">•</span>
          <span className="text-[11px] font-bold text-white/60">Live Score: 94</span>
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        {metrics.map((m, i) => (
          <motion.div
            key={i}
            className="pj-glass p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + i * 0.1, type: 'spring' }}
          >
            <span className="text-lg mb-2 block">{m.icon}</span>
            <div className="text-3xl font-black" style={{ color: m.color }}>
              <CountUp end={m.value} prefix={m.prefix || ''} decimals={m.decimals || 0} />
            </div>
            <p className="text-[10px] text-white/40 mt-1 font-medium">{m.label}</p>
          </motion.div>
        ))}
      </div>

      <motion.button
        className="w-full pj-gold-btn py-5 text-xl font-black text-white rounded-2xl mb-3 relative"
        style={{ boxShadow: '0 0 40px rgba(196,148,30,0.3)' }}
        whileTap={{ scale: 0.96 }}
        onClick={() => navigate('/pjazza/business/stream')}
        data-testid="button-go-live"
      >
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{ background: 'linear-gradient(135deg, #C4941E, #D4A843)', opacity: 0.3 }}
          animate={{ scale: [1, 1.03, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span className="relative z-10 flex items-center justify-center gap-2">
          📹 GO LIVE
        </span>
      </motion.button>

      <motion.button
        className="w-full pj-glass py-4 text-sm font-bold text-white rounded-2xl mb-8"
        whileTap={{ scale: 0.96 }}
        onClick={() => navigate('/pjazza/business/stream')}
        data-testid="button-record-video"
      >
        Record Video
      </motion.button>

      <motion.div
        className="pj-glass p-5 mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-sm font-bold text-white mb-1">💰 Your Revenue This Month</h3>
        <div className="text-4xl font-black mb-4" style={{ color: '#1A8A5C' }}>
          <CountUp end={840} prefix="€" />
        </div>
        <div className="space-y-2">
          {earnings.map((e, i) => (
            <div key={i} className="flex items-center justify-between">
              <span className="text-[11px] text-white/50">{e.label}</span>
              <span className={`text-[11px] font-bold ${e.bold ? 'text-sm' : ''}`} style={{ color: e.color === 'white' ? 'rgba(255,255,255,0.7)' : e.color }}>
                {e.value}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <p className="text-[10px] text-white/30">💳 Next payout: Monday → Your bank</p>
        </div>
      </motion.div>

      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-base font-bold text-white">📥 Incoming</h3>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold" style={{ background: 'rgba(224,90,58,0.15)', color: '#E05A3A' }}>
            {requests.length}
          </span>
        </div>
        <div className="space-y-3">
          {requests.map((req, i) => (
            <motion.div
              key={i}
              className="pj-glass p-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex items-start justify-between mb-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.6)' }}>
                  {req.type}
                </span>
                <span className="text-[10px] text-white/30">{req.time}</span>
              </div>
              <p className="text-sm font-bold text-white mb-0.5">{req.name}</p>
              <p className="text-[11px] text-white/50 mb-3">{req.message}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-black" style={{ color: '#1A8A5C' }}>{req.value}</span>
                <div className="flex gap-2">
                  <motion.button
                    className="px-4 py-1.5 rounded-full text-[11px] font-bold"
                    style={{ background: 'rgba(26,138,92,0.15)', color: '#1A8A5C' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    ✅ Accept
                  </motion.button>
                  <motion.button
                    className="px-3 py-1.5 rounded-full text-[11px] font-bold"
                    style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.3)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    ✕
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="pj-glass p-5 relative overflow-hidden"
        style={{ borderColor: 'rgba(217,119,6,0.2)', boxShadow: '0 0 30px rgba(217,119,6,0.08)' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(circle at 20% 50%, rgba(217,119,6,0.06), transparent 60%)' }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <div className="relative z-10">
          <p className="text-sm font-bold text-white mb-2">🚢 MSC Bellissima arriving tomorrow 7 AM</p>
          <p className="text-[11px] text-white/50 mb-3">4,500 passengers • 85% American/British</p>
          <div className="pj-glass px-3 py-2 inline-flex items-center gap-2 rounded-full">
            <span className="text-[10px]">💡</span>
            <span className="text-[11px] font-medium" style={{ color: '#D97706' }}>
              Go LIVE at 9:30 AM for peak traffic (+40%)
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
