'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { C, FONT_DARK } from './tokens';

const CSS = `
  .h360-cta-reveal { opacity:0; transform:translateY(32px);
    transition:opacity .7s cubic-bezier(.22,1,.36,1), transform .7s cubic-bezier(.22,1,.36,1); }
  .h360-cta-reveal.in { opacity:1; transform:translateY(0); }
`;

type H360FinalCTAProps = {
  headline?: string;
  subline?: string;
  buttonLabel?: string;
};

export default function H360FinalCTA({
  headline = 'Try H360 for free!',
  subline = 'An expert will reach out to you today.',
  buttonLabel = 'Get a free demo',
}: H360FinalCTAProps) {
  const [m, setM] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fn = () => setM(window.innerWidth < 768);
    fn();
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ob = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add('in');
          ob.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    ob.observe(el);
    return () => ob.disconnect();
  }, []);

  return (
    <section
      style={{
        background: C.bg,
        borderTop: `1px solid ${C.border}`,
        padding: m ? '88px 24px 120px' : '120px 80px 160px',
        fontFamily: FONT_DARK,
      }}
    >
      <style>{CSS}</style>
      <div ref={ref} className="h360-cta-reveal" style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
        <h2
          style={{
            fontSize: m ? 32 : 60,
            fontWeight: 800,
            letterSpacing: '-0.045em',
            color: C.white,
            lineHeight: 1.05,
            marginBottom: 12,
          }}
        >
          {headline}
        </h2>
        <p style={{ fontSize: m ? 15 : 18, color: C.muted, lineHeight: 1.6, marginBottom: 36 }}>{subline}</p>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            background: C.card2,
            border: `1px solid ${C.border}`,
            borderRadius: 14,
            padding: '6px 6px 6px 18px',
            maxWidth: 440,
            margin: '0 auto 14px',
          }}
        >
          <input
            type="text"
            placeholder="Your restaurant name"
            readOnly
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              fontSize: 15,
              color: C.white,
              background: 'transparent',
              fontFamily: FONT_DARK,
            }}
            data-testid="input-h360-cta"
          />
          <Link
            href="/h360/demo"
            style={{
              padding: '12px 22px',
              background: C.white,
              color: '#000',
              borderRadius: 10,
              fontSize: 14,
              fontWeight: 700,
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
            data-testid="button-h360-cta"
          >
            {buttonLabel}
          </Link>
        </div>
        <div style={{ fontSize: 12, color: C.dim }}>Powered by ARC AI · No commitment needed</div>
      </div>
    </section>
  );
}
