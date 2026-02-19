import { motion } from 'framer-motion';
import { Search, Bell, Radio } from 'lucide-react';

export default function TopBar() {
  return (
    <motion.div
      className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 pj-frosted border-b"
      style={{ borderColor: 'var(--pj-border)' }}
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <span className="text-lg font-black tracking-tight" style={{ color: 'var(--pj-red)' }}>
        PJAZZA
      </span>

      <div className="flex items-center gap-1.5 px-3 py-1 pj-live-badge">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-50" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
        </span>
        <span className="text-[11px] font-bold text-white">47 Live</span>
      </div>

      <div className="flex items-center gap-1">
        <button className="p-2 rounded-xl" style={{ color: 'var(--pj-text-tertiary)' }} data-testid="button-search">
          <Search size={18} />
        </button>
        <button className="p-2 rounded-xl" style={{ color: 'var(--pj-text-tertiary)' }} data-testid="button-notifications">
          <Bell size={18} />
        </button>
      </div>
    </motion.div>
  );
}
