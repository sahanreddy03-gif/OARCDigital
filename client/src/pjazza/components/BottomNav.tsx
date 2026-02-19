import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import LivePulse from './LivePulse';

const tabs = [
  { id: 'home', icon: '🏠', label: 'Home', path: '/pjazza/discover' },
  { id: 'shop', icon: '🛍️', label: 'Shop', path: '/pjazza/discover' },
  { id: 'live', icon: '📹', label: 'LIVE', path: '/pjazza/discover' },
  { id: 'services', icon: '🔧', label: 'Services', path: '/pjazza/discover' },
  { id: 'profile', icon: '👤', label: 'Profile', path: '/pjazza/discover' },
];

export default function BottomNav() {
  const [location, navigate] = useLocation();

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[420px] z-40">
      <div
        className="flex items-end justify-around px-2 pb-2 pt-2"
        style={{
          background: 'rgba(13,13,15,0.92)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
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
                    style={{ background: 'linear-gradient(135deg, #C4941E, #D4A843)' }}
                    animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.15, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <div
                    className="relative w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #C4941E, #D4A843)' }}
                  >
                    <span className="text-xl">{tab.icon}</span>
                  </div>
                </div>
                <span className="text-[9px] font-bold mt-1" style={{ color: '#C4941E' }}>{tab.label}</span>
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
              <span className="text-lg" style={{ opacity: isActive ? 1 : 0.3 }}>{tab.icon}</span>
              <span
                className="text-[9px] font-semibold mt-0.5"
                style={{ color: isActive ? '#C4941E' : 'rgba(255,255,255,0.3)' }}
              >
                {tab.label}
              </span>
              {isActive && (
                <motion.div
                  className="w-4 h-0.5 rounded-full mt-1"
                  style={{ background: '#C4941E', boxShadow: '0 0 8px rgba(196,148,30,0.5)' }}
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
