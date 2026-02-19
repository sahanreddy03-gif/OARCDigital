import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLocation } from 'wouter';
import {
  Eye, Calendar, DollarSign, Star, Video, Flame, TrendingUp,
  Utensils, Phone, ShoppingBag, Check, X, Ship, ArrowRight, CreditCard
} from 'lucide-react';
import CountUp from '../components/CountUp';
import LivePulse from '../components/LivePulse';
import { DashboardScene } from '../components/Scene3D';

const metrics = [
  { Icon: Eye, label: 'Viewers', value: 47, color: 'var(--pj-red)' },
  { Icon: Calendar, label: 'Bookings', value: 12, color: '#2563EB' },
  { Icon: DollarSign, label: 'Revenue', value: 840, color: '#1A8A5C', prefix: '\u20ac' },
  { Icon: Star, label: 'Rating', value: 4.8, color: '#D97706', decimals: 1 },
];

const requests = [
  { type: 'Booking', TypeIcon: Utensils, name: 'John S.', message: 'Table for 4 tonight at 8pm?', time: '3m', value: '\u20ac180' },
  { type: 'Video Call', TypeIcon: Phone, name: 'Maria L.', message: 'Can I see the seafood display?', time: '8m', value: '\u20ac45' },
  { type: 'Order', TypeIcon: ShoppingBag, name: 'Alex T.', message: '2x pastizzi trays for pickup', time: '15m', value: '\u20ac28' },
];

const earnings = [
  { label: '12 bookings \u00d7 \u20ac45 avg', value: '\u20ac540' },
  { label: '8 live orders', value: '\u20ac300' },
  { label: 'PJAZZA fee (8%)', value: '-\u20ac67', isNegative: true },
  { label: 'Net to you', value: '\u20ac773', isTotal: true },
];

export default function BusinessDashboard() {
  const [, navigate] = useLocation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="relative min-h-screen" style={{ background: '#080808' }}>
      <DashboardScene />
      <div className="pj-content-overlay px-5 py-6 pb-20">
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-[10px] font-bold tracking-[3px] uppercase mb-2" style={{ color: 'var(--pj-red)' }}>
            DASHBOARD
          </p>
          <h1 className="text-2xl font-black text-white tracking-tight">Noni's Kitchen</h1>
          <motion.div
            className="inline-flex items-center gap-2 mt-2 px-3 py-1.5 rounded-full"
            style={{ background: 'var(--pj-red-subtle)', border: '1px solid var(--pj-red-border)' }}
          >
            <Flame size={12} style={{ color: 'var(--pj-red)' }} />
            <span className="text-[11px] font-bold" style={{ color: 'var(--pj-red)' }}>14-day streak</span>
            <span className="text-[10px]" style={{ color: 'var(--pj-text-tertiary)' }}>· Score: 94</span>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-2 gap-2 mb-5">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              className="pj-card p-4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.08 }}
            >
              <m.Icon size={16} style={{ color: m.color, marginBottom: 8 }} />
              <div className="text-2xl font-black" style={{ color: m.color }}>
                <CountUp end={m.value} prefix={m.prefix || ''} decimals={m.decimals || 0} />
              </div>
              <p className="text-[10px] mt-1 font-medium" style={{ color: 'var(--pj-text-tertiary)' }}>{m.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.button
          className="w-full pj-btn-primary py-5 text-lg font-black flex items-center justify-center gap-2 mb-2 relative"
          style={{ boxShadow: '0 0 30px var(--pj-red-glow)' }}
          whileTap={{ scale: 0.96 }}
          onClick={() => navigate('/pjazza/business/stream')}
          data-testid="button-go-live"
        >
          <Video size={20} />
          <span>GO LIVE</span>
        </motion.button>

        <motion.button
          className="w-full pj-btn-ghost py-3 text-sm font-bold mb-6"
          whileTap={{ scale: 0.96 }}
          onClick={() => navigate('/pjazza/business/stream')}
          data-testid="button-record-video"
        >
          Record Video
        </motion.button>

        <div className="pj-card p-5 mb-5">
          <div className="flex items-center gap-2 mb-3">
            <CreditCard size={16} style={{ color: '#1A8A5C' }} />
            <h3 className="text-sm font-bold text-white">Revenue This Month</h3>
          </div>
          <div className="text-3xl font-black mb-4" style={{ color: '#1A8A5C' }}>
            <CountUp end={840} prefix="\u20ac" />
          </div>
          <div className="space-y-2">
            {earnings.map((e, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-[11px]" style={{ color: 'var(--pj-text-tertiary)' }}>{e.label}</span>
                <span
                  className={`text-[11px] font-bold ${e.isTotal ? 'text-sm' : ''}`}
                  style={{ color: e.isNegative ? 'var(--pj-red)' : e.isTotal ? '#1A8A5C' : 'var(--pj-text-secondary)' }}
                >
                  {e.value}
                </span>
              </div>
            ))}
          </div>
          <div className="pj-divider mt-4 mb-3" />
          <p className="text-[10px]" style={{ color: 'var(--pj-text-tertiary)' }}>
            Next payout: Monday
          </p>
        </div>

        <div className="mb-5">
          <div className="flex items-center gap-2 mb-3">
            <h3 className="text-base font-bold text-white">Incoming</h3>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold" style={{ background: 'var(--pj-red-subtle)', color: 'var(--pj-red)' }}>
              {requests.length}
            </span>
          </div>
          <div className="space-y-2">
            {requests.map((req, i) => (
              <motion.div
                key={i}
                className="pj-card p-4"
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-1.5">
                    <req.TypeIcon size={12} style={{ color: 'var(--pj-red)' }} />
                    <span className="text-[10px] font-bold" style={{ color: 'var(--pj-text-secondary)' }}>{req.type}</span>
                  </div>
                  <span className="text-[10px]" style={{ color: 'var(--pj-text-tertiary)' }}>{req.time}</span>
                </div>
                <p className="text-sm font-bold text-white mb-0.5">{req.name}</p>
                <p className="text-[11px] mb-3" style={{ color: 'var(--pj-text-tertiary)' }}>{req.message}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-black" style={{ color: '#1A8A5C' }}>{req.value}</span>
                  <div className="flex gap-1.5">
                    <motion.button
                      className="px-3 py-1.5 rounded-xl text-[10px] font-bold flex items-center gap-1"
                      style={{ background: 'rgba(26,138,92,0.1)', color: '#1A8A5C' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Check size={12} /> Accept
                    </motion.button>
                    <motion.button
                      className="px-2.5 py-1.5 rounded-xl"
                      style={{ background: 'var(--pj-surface-2)' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <X size={12} style={{ color: 'var(--pj-text-tertiary)' }} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="pj-card p-5" style={{ borderColor: 'rgba(217,119,6,0.15)' }}>
          <div className="flex items-center gap-2 mb-2">
            <Ship size={16} style={{ color: '#D97706' }} />
            <p className="text-sm font-bold text-white">MSC Bellissima arriving tomorrow</p>
          </div>
          <p className="text-[11px] mb-3" style={{ color: 'var(--pj-text-tertiary)' }}>4,500 passengers · 85% American/British</p>
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl" style={{ background: 'rgba(217,119,6,0.06)', border: '1px solid rgba(217,119,6,0.1)' }}>
            <TrendingUp size={12} style={{ color: '#D97706' }} />
            <span className="text-[11px] font-medium" style={{ color: '#D97706' }}>
              Go LIVE at 9:30 AM for peak traffic (+40%)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
