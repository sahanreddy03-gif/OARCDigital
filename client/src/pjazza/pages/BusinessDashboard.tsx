import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLocation } from 'wouter';
import {
  Eye, Calendar, DollarSign, Star, Video, Flame, TrendingUp,
  Utensils, Phone, ShoppingBag, Check, X, Ship, ArrowRight, CreditCard, ArrowLeft, Zap
} from 'lucide-react';
import CountUp from '../components/CountUp';
import LivePulse from '../components/LivePulse';
import { DashboardScene } from '../components/Scene3D';

const metrics = [
  { Icon: Eye, label: 'Viewers', value: 47, color: 'var(--pj-crimson)' },
  { Icon: Calendar, label: 'Bookings', value: 12, color: '#3B82F6' },
  { Icon: DollarSign, label: 'Revenue', value: 840, color: 'var(--pj-green)', prefix: '\u20ac' },
  { Icon: Star, label: 'Rating', value: 4.8, color: '#F59E0B', decimals: 1 },
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
    <div ref={ref} className="relative min-h-screen pj-mesh-animated pj-grain" style={{ background: 'var(--pj-deep)' }}>
      <DashboardScene />
      <div className="pj-content-overlay px-6 py-6 pb-20">
        <motion.button
          className="flex items-center gap-2 mb-5 text-[12px] font-semibold"
          style={{ fontFamily: 'var(--pj-font-display)', color: 'var(--pj-text-tertiary)' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/pjazza/business/onboard')}
        >
          <ArrowLeft size={16} strokeWidth={2.5} />
          Back
        </motion.button>

        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="pj-section-label mb-2 block">DASHBOARD</span>
          <h1
            className="text-[28px] font-bold tracking-tight mb-2"
            style={{ fontFamily: 'var(--pj-font-display)', color: 'var(--pj-text)' }}
          >
            Noni's Kitchen
          </h1>
          <motion.div
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full"
            style={{ background: 'var(--pj-crimson-subtle)', border: '1px solid var(--pj-crimson-border)' }}
            animate={{ boxShadow: ['0 0 0 rgba(196,30,58,0)', '0 0 16px rgba(196,30,58,0.1)', '0 0 0 rgba(196,30,58,0)'] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Flame size={13} strokeWidth={2.5} style={{ color: 'var(--pj-crimson)' }} />
            <span className="text-[11px] font-bold" style={{ fontFamily: 'var(--pj-font-display)', color: 'var(--pj-crimson)' }}>14-day streak</span>
            <span className="text-[10px]" style={{ color: 'var(--pj-text-muted)' }}>· Score: 94</span>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-2 gap-2.5 mb-5">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              className="pj-card-glow p-4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.08 }}
            >
              <div className="pj-icon-orb mb-3" style={{ width: 32, height: 32 }}>
                <m.Icon size={14} strokeWidth={2.5} style={{ color: m.color }} />
              </div>
              <div
                className="text-2xl font-bold"
                style={{ fontFamily: 'var(--pj-font-display)', color: m.color }}
              >
                <CountUp end={m.value} prefix={m.prefix || ''} decimals={m.decimals || 0} />
              </div>
              <p className="text-[10px] mt-1.5 font-medium" style={{ color: 'var(--pj-text-muted)' }}>{m.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.button
          className="w-full pj-btn-primary py-5 text-lg font-bold flex items-center justify-center gap-2.5 mb-2.5 relative"
          style={{
            fontFamily: 'var(--pj-font-display)',
            boxShadow: '0 0 40px rgba(196,30,58,0.3)',
          }}
          whileTap={{ scale: 0.96 }}
          onClick={() => navigate('/pjazza/business/stream')}
          data-testid="button-go-live"
          animate={{ boxShadow: ['0 0 30px rgba(196,30,58,0.2)', '0 0 50px rgba(196,30,58,0.4)', '0 0 30px rgba(196,30,58,0.2)'] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Video size={20} strokeWidth={2.5} />
          <span>GO LIVE</span>
        </motion.button>

        <motion.button
          className="w-full pj-btn-ghost py-3.5 text-[13px] font-bold mb-6"
          style={{ fontFamily: 'var(--pj-font-display)' }}
          whileTap={{ scale: 0.96 }}
          onClick={() => navigate('/pjazza/business/stream')}
          data-testid="button-record-video"
        >
          Record Video
        </motion.button>

        <div className="pj-card-glow p-5 mb-5">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="pj-icon-orb" style={{ width: 32, height: 32 }}>
              <CreditCard size={14} strokeWidth={2.5} style={{ color: 'var(--pj-green)' }} />
            </div>
            <h3 className="text-[14px] font-bold" style={{ fontFamily: 'var(--pj-font-display)', color: 'var(--pj-text)' }}>Revenue This Month</h3>
          </div>
          <div
            className="text-3xl font-bold mb-5"
            style={{ fontFamily: 'var(--pj-font-display)', color: 'var(--pj-green)' }}
          >
            <CountUp end={840} prefix="\u20ac" />
          </div>
          <div className="space-y-2.5">
            {earnings.map((e, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-[11px]" style={{ color: 'var(--pj-text-muted)' }}>{e.label}</span>
                <span
                  className={`text-[11px] font-bold ${e.isTotal ? 'text-[13px]' : ''}`}
                  style={{
                    fontFamily: 'var(--pj-font-display)',
                    color: e.isNegative ? 'var(--pj-crimson)' : e.isTotal ? 'var(--pj-green)' : 'var(--pj-text-secondary)',
                  }}
                >
                  {e.value}
                </span>
              </div>
            ))}
          </div>
          <div className="pj-divider mt-4 mb-3" />
          <p className="text-[10px]" style={{ color: 'var(--pj-text-muted)' }}>Next payout: Monday</p>
        </div>

        <div className="mb-5">
          <div className="flex items-center gap-2.5 mb-3">
            <h3 className="text-[16px] font-bold" style={{ fontFamily: 'var(--pj-font-display)', color: 'var(--pj-text)' }}>Incoming</h3>
            <span
              className="px-2.5 py-1 rounded-full text-[10px] font-bold"
              style={{ background: 'var(--pj-crimson-subtle)', color: 'var(--pj-crimson)' }}
            >
              {requests.length}
            </span>
          </div>
          <div className="space-y-2.5">
            {requests.map((req, i) => (
              <motion.div
                key={i}
                className="pj-card p-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="flex items-start justify-between mb-2.5">
                  <div className="flex items-center gap-2">
                    <req.TypeIcon size={13} strokeWidth={2.5} style={{ color: 'var(--pj-crimson)' }} />
                    <span className="text-[10px] font-bold" style={{ fontFamily: 'var(--pj-font-display)', color: 'var(--pj-text-secondary)' }}>{req.type}</span>
                  </div>
                  <span className="text-[10px]" style={{ color: 'var(--pj-text-muted)' }}>{req.time}</span>
                </div>
                <p className="text-[14px] font-bold mb-0.5" style={{ fontFamily: 'var(--pj-font-display)', color: 'var(--pj-text)' }}>{req.name}</p>
                <p className="text-[11px] mb-3" style={{ color: 'var(--pj-text-tertiary)' }}>{req.message}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[14px] font-bold" style={{ fontFamily: 'var(--pj-font-display)', color: 'var(--pj-green)' }}>{req.value}</span>
                  <div className="flex gap-2">
                    <motion.button
                      className="px-4 py-2 rounded-full text-[10px] font-bold flex items-center gap-1.5"
                      style={{ background: 'var(--pj-green-subtle)', color: 'var(--pj-green)' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Check size={12} strokeWidth={2.5} /> Accept
                    </motion.button>
                    <motion.button
                      className="px-2.5 py-2 rounded-full"
                      style={{ background: 'var(--pj-surface-2)', border: '1px solid var(--pj-border)' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <X size={12} strokeWidth={2.5} style={{ color: 'var(--pj-text-muted)' }} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="pj-card p-5" style={{ borderColor: 'rgba(245,158,11,0.12)' }}>
          <div className="flex items-center gap-2.5 mb-2.5">
            <div className="pj-icon-orb" style={{ width: 32, height: 32 }}>
              <Ship size={14} strokeWidth={2.5} style={{ color: 'var(--pj-amber)' }} />
            </div>
            <p className="text-[14px] font-bold" style={{ fontFamily: 'var(--pj-font-display)', color: 'var(--pj-text)' }}>
              MSC Bellissima arriving tomorrow
            </p>
          </div>
          <p className="text-[11px] mb-3" style={{ color: 'var(--pj-text-tertiary)' }}>4,500 passengers · 85% American/British</p>
          <div
            className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-full"
            style={{ background: 'rgba(245,158,11,0.05)', border: '1px solid rgba(245,158,11,0.1)' }}
          >
            <TrendingUp size={13} strokeWidth={2.5} style={{ color: 'var(--pj-amber)' }} />
            <span className="text-[11px] font-semibold" style={{ color: 'var(--pj-amber)' }}>
              Go LIVE at 9:30 AM for peak traffic (+40%)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
