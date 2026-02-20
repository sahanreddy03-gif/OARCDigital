import { Search, Bell } from 'lucide-react';

export default function TopBar() {
  return (
    <div
      className="pj-frosted"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        borderBottom: '1px solid var(--pj-border)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 20px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span
            style={{
              fontSize: 18,
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: 'var(--pj-text)',
            }}
          >
            PJAZZA
          </span>
          <span className="pj-live-dot" />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <button
            className="pj-touch"
            style={{
              padding: 10,
              borderRadius: '50%',
              background: 'transparent',
              border: 'none',
              color: 'var(--pj-text-tertiary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            data-testid="button-search"
          >
            <Search size={18} strokeWidth={2} />
          </button>
          <button
            className="pj-touch"
            style={{
              padding: 10,
              borderRadius: '50%',
              background: 'transparent',
              border: 'none',
              color: 'var(--pj-text-tertiary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
            data-testid="button-notifications"
          >
            <Bell size={18} strokeWidth={2} />
            <span
              style={{
                position: 'absolute',
                top: 10,
                right: 10,
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: 'var(--pj-red)',
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
