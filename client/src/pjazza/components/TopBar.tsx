import { motion } from 'framer-motion';
import { Search, Bell } from 'lucide-react';
import LivePulse from './LivePulse';

export default function TopBar() {
  return (
    <motion.div
      className="sticky top-0 z-50 pj-frosted border-b"
      style={{ borderColor: 'var(--pj-border)' }}
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex items-center justify-between px-5 py-3">
        <span
          className="pj-display text-xl font-bold tracking-tight"
          style={{ fontFamily: 'var(--pj-font-display)', color: 'var(--pj-crimson)' }}
        >
          PJAZZA
        </span>

        <motion.div
          className="pj-live-badge"
          animate={{ boxShadow: ['0 0 12px rgba(196,30,58,0.3)', '0 0 24px rgba(196,30,58,0.5)', '0 0 12px rgba(196,30,58,0.3)'] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <LivePulse size={5} color="#fff" />
          <span className="text-[10px] font-bold text-white" style={{ fontFamily: 'var(--pj-font-display)' }}>47 Live</span>
        </motion.div>

        <div className="flex items-center gap-0.5">
          <button
            className="p-2.5 rounded-full transition-colors"
            style={{ color: 'var(--pj-text-tertiary)' }}
            data-testid="button-search"
          >
            <Search size={18} strokeWidth={2.5} />
          </button>
          <button
            className="p-2.5 rounded-full relative transition-colors"
            style={{ color: 'var(--pj-text-tertiary)' }}
            data-testid="button-notifications"
          >
            <Bell size={18} strokeWidth={2.5} />
            <span
              className="absolute top-2 right-2 w-2 h-2 rounded-full"
              style={{ background: 'var(--pj-crimson)' }}
            />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
