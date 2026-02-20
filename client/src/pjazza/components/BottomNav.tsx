import { motion } from 'framer-motion';
import { Home, ShoppingBag, Radio, Wrench, User } from 'lucide-react';

const tabs = [
  { id: 'home', Icon: Home, label: 'Home' },
  { id: 'shop', Icon: ShoppingBag, label: 'Shop' },
  { id: 'live', Icon: Radio, label: 'LIVE' },
  { id: 'services', Icon: Wrench, label: 'Services' },
  { id: 'profile', Icon: User, label: 'Profile' },
];

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[420px] z-40">
      <div className="mx-3 mb-3 rounded-[28px] pj-frosted border" style={{ borderColor: 'var(--pj-border)' }}>
        <div className="flex items-center justify-around px-2 py-2">
          {tabs.map((tab) => {
            const isActive = tab.id === 'home';
            const isLive = tab.id === 'live';

            if (isLive) {
              return (
                <motion.button
                  key={tab.id}
                  className="relative flex flex-col items-center"
                  whileTap={{ scale: 0.88 }}
                  data-testid="button-nav-live"
                >
                  <div className="relative">
                    <motion.div
                      className="absolute -inset-1.5 rounded-full"
                      style={{ background: 'var(--pj-crimson)' }}
                      animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0, 0.2] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <div
                      className="relative w-11 h-11 rounded-full flex items-center justify-center"
                      style={{
                        background: 'var(--pj-crimson)',
                        boxShadow: '0 4px 20px rgba(196,30,58,0.4)',
                      }}
                    >
                      <Radio size={18} className="text-white" strokeWidth={2.5} />
                    </div>
                  </div>
                </motion.button>
              );
            }

            return (
              <motion.button
                key={tab.id}
                className="relative flex flex-col items-center py-1.5 px-3"
                whileTap={{ scale: 0.88 }}
                data-testid={`button-nav-${tab.id}`}
              >
                {isActive && (
                  <motion.div
                    className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-5 h-1 rounded-full"
                    style={{ background: 'var(--pj-crimson)' }}
                    layoutId="nav-pill"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <tab.Icon
                  size={20}
                  strokeWidth={isActive ? 2.5 : 1.8}
                  style={{ color: isActive ? 'var(--pj-text)' : 'var(--pj-text-tertiary)' }}
                />
                <span
                  className="text-[9px] font-semibold mt-1"
                  style={{
                    fontFamily: 'var(--pj-font-display)',
                    color: isActive ? 'var(--pj-text)' : 'var(--pj-text-tertiary)',
                  }}
                >
                  {tab.label}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
