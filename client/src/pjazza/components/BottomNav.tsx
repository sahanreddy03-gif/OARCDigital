import { useLocation } from 'wouter';
import { Home, Compass, Radio, Briefcase, User } from 'lucide-react';

const tabs = [
  { id: 'home', Icon: Home, label: 'Home', path: '/pjazza/discover' },
  { id: 'explore', Icon: Compass, label: 'Explore', path: '/pjazza/discover' },
  { id: 'live', Icon: Radio, label: 'LIVE', path: '/pjazza/business/stream' },
  { id: 'business', Icon: Briefcase, label: 'Business', path: '/pjazza/business/dashboard' },
  { id: 'profile', Icon: User, label: 'Profile', path: '/pjazza/discover' },
];

export default function BottomNav() {
  const [location, navigate] = useLocation();

  const getActiveTab = () => {
    if (location.includes('/business/stream')) return 'live';
    if (location.includes('/business/dashboard')) return 'business';
    if (location.includes('/business/onboard')) return 'business';
    if (location === '/pjazza/discover') return 'home';
    return 'home';
  };

  const activeTab = getActiveTab();

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        maxWidth: 420,
        zIndex: 40,
      }}
    >
      <div
        className="pj-frosted"
        style={{
          borderTop: '1px solid var(--pj-border)',
          paddingBottom: 'env(safe-area-inset-bottom, 0px)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            padding: '8px 4px 8px',
          }}
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const isLive = tab.id === 'live';

            return (
              <button
                key={tab.id}
                className="pj-touch"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 4,
                  padding: '6px 12px',
                  background: 'transparent',
                  border: 'none',
                  minWidth: 56,
                }}
                onClick={() => navigate(tab.path)}
                data-testid={`button-nav-${tab.id}`}
              >
                {isLive ? (
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      background: 'var(--pj-red)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Radio size={18} strokeWidth={2.5} style={{ color: 'white' }} />
                  </div>
                ) : (
                  <tab.Icon
                    size={22}
                    strokeWidth={isActive ? 2.5 : 1.8}
                    style={{
                      color: isActive ? 'var(--pj-text)' : 'var(--pj-text-tertiary)',
                    }}
                  />
                )}
                {!isLive && (
                  <span
                    style={{
                      fontSize: 'var(--pj-size-micro)',
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? 'var(--pj-text)' : 'var(--pj-text-tertiary)',
                    }}
                  >
                    {tab.label}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
