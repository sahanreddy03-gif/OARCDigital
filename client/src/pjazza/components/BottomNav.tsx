import { motion } from 'framer-motion';
import { Home, ShoppingBag, Video, Wrench, User } from 'lucide-react';

const tabs = [
  { id: 'home', Icon: Home, label: 'Home' },
  { id: 'shop', Icon: ShoppingBag, label: 'Shop' },
  { id: 'live', Icon: Video, label: 'LIVE' },
  { id: 'services', Icon: Wrench, label: 'Services' },
  { id: 'profile', Icon: User, label: 'Profile' },
];

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[420px] z-40">
      <div
        className="flex items-end justify-around px-2 pb-3 pt-2 pj-frosted border-t"
        style={{ borderColor: 'var(--pj-border)' }}
      >
        {tabs.map((tab) => {
          const isActive = tab.id === 'home';
          const isLive = tab.id === 'live';

          if (isLive) {
            return (
              <motion.button
                key={tab.id}
                className="relative flex flex-col items-center -mt-5"
                whileTap={{ scale: 0.92 }}
                data-testid="button-nav-live"
              >
                <div className="relative">
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{ background: 'var(--pj-red)' }}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <div
                    className="relative w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ background: 'var(--pj-red)', boxShadow: '0 4px 20px var(--pj-red-glow)' }}
                  >
                    <Video size={20} className="text-white" />
                  </div>
                </div>
                <span className="text-[9px] font-bold mt-1" style={{ color: 'var(--pj-red)' }}>{tab.label}</span>
              </motion.button>
            );
          }

          return (
            <motion.button
              key={tab.id}
              className="flex flex-col items-center py-1 px-3"
              whileTap={{ scale: 0.92 }}
              data-testid={`button-nav-${tab.id}`}
            >
              <tab.Icon size={20} style={{ color: isActive ? 'var(--pj-red)' : 'var(--pj-text-tertiary)' }} />
              <span
                className="text-[9px] font-semibold mt-1"
                style={{ color: isActive ? 'var(--pj-red)' : 'var(--pj-text-tertiary)' }}
              >
                {tab.label}
              </span>
              {isActive && (
                <motion.div
                  className="w-4 h-0.5 rounded-full mt-1"
                  style={{ background: 'var(--pj-red)' }}
                  layoutId="nav-indicator"
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
