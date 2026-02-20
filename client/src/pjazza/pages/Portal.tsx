import { useLocation } from 'wouter';
import { ArrowRight } from 'lucide-react';
import heroImg from '../assets/hero-malta.jpg';

export default function Portal() {
  const [, navigate] = useLocation();

  return (
    <div
      className="relative flex flex-col"
      style={{ minHeight: '100dvh', background: 'var(--pj-black)' }}
    >
      <div
        className="absolute inset-0 pj-image-wash"
        style={{ zIndex: 0 }}
      >
        <img
          src={heroImg}
          alt=""
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.5,
          }}
        />
      </div>

      <div style={{ position: 'relative', zIndex: 10, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '24px 24px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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
          <div className="pj-live-badge">
            <span className="pj-live-dot" />
            <span>47 Live</span>
          </div>
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 24px' }}>
          <h1
            style={{
              fontSize: 'var(--pj-size-hero)',
              fontWeight: 800,
              lineHeight: 0.92,
              letterSpacing: '-0.03em',
              color: 'var(--pj-text)',
              marginBottom: 16,
            }}
          >
            Malta,
            <br />
            <span style={{ color: 'var(--pj-red)' }}>Live.</span>
          </h1>

          <p
            style={{
              fontSize: 'var(--pj-size-body)',
              lineHeight: 1.6,
              color: 'var(--pj-text-secondary)',
              maxWidth: 280,
              marginBottom: 32,
            }}
          >
            Watch real shops. Talk to real people.
            <br />
            Buy with confidence.
          </p>

          <button
            className="pj-btn-primary"
            style={{ width: '100%', padding: '18px 24px', fontSize: 16 }}
            onClick={() => navigate('/pjazza/discover')}
            data-testid="button-enter-pjazza"
          >
            <span>Enter the Market</span>
            <ArrowRight size={18} strokeWidth={2.5} />
          </button>

          <button
            className="pj-btn-ghost"
            style={{
              width: '100%',
              justifyContent: 'center',
              padding: '16px',
              marginTop: 12,
              color: 'var(--pj-text-tertiary)',
              fontSize: 'var(--pj-size-small)',
            }}
            onClick={() => navigate('/pjazza/business/onboard')}
            data-testid="button-business-cta"
          >
            I'm a business
          </button>
        </div>

        <div
          style={{
            padding: '0 24px 40px',
            display: 'flex',
            gap: 1,
          }}
        >
          {[
            { value: '2,400+', label: 'watching now' },
            { value: '180+', label: 'businesses' },
            { value: 'Same-day', label: 'delivery' },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                textAlign: 'center',
                padding: '16px 8px',
                background: 'rgba(255,255,255,0.04)',
                borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                borderRadius: i === 0 ? '12px 0 0 12px' : i === 2 ? '0 12px 12px 0' : '0',
              }}
              data-testid={`text-stat-${i}`}
            >
              <div
                className="pj-mono"
                style={{
                  fontSize: 'var(--pj-size-h3)',
                  fontWeight: 700,
                  color: 'var(--pj-text)',
                  marginBottom: 2,
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: 'var(--pj-size-micro)', color: 'var(--pj-text-tertiary)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
