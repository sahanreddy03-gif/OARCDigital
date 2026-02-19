import { motion } from 'framer-motion';
import LivePulse from './LivePulse';

export default function TopBar() {
  return (
    <motion.div
      className="sticky top-0 z-50 flex items-center justify-between px-4 py-3"
      style={{
        background: 'rgba(13,13,15,0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
      }}
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <span className="text-lg font-black tracking-tight" style={{ color: '#C4941E' }}>
        PJAZZA
      </span>

      <div
        className="flex items-center gap-1.5 px-3 py-1 rounded-full"
        style={{
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <LivePulse size={6} />
        <span className="text-[11px] font-semibold" style={{ color: '#E05A3A' }}>47 Live</span>
      </div>

      <div className="flex items-center gap-3">
        <button className="text-white/40 text-sm" data-testid="button-search">🔍</button>
        <button className="text-white/40 text-sm" data-testid="button-notifications">🔔</button>
        <span className="text-sm">🇲🇹</span>
      </div>
    </motion.div>
  );
}
