'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { G, FONT_LIGHT } from './tokens';
import { H360_AUDIT, H360_HOME, H360_NAV_LINKS } from './h360Site';

export default function H360Nav() {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const fn = () => setMobile(window.innerWidth < 768);
    fn();
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: G.bg,
        borderBottom: `1px solid ${G.border}`,
        padding: isMobile ? '0 18px' : '0 40px',
        height: 56,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontFamily: FONT_LIGHT,
      }}
    >
      <Link href={H360_HOME} style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', color: 'inherit' }}>
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: 7,
            background: G.green,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span style={{ color: '#fff', fontSize: 11, fontWeight: 900, letterSpacing: '-0.05em' }}>H3</span>
        </div>
        <span style={{ fontSize: 16, fontWeight: 800, letterSpacing: '-0.04em', color: G.text }}>H360</span>
      </Link>

      {!isMobile && (
        <div style={{ display: 'flex', gap: 28, fontSize: 14, fontWeight: 500, color: G.textMuted }}>
          {H360_NAV_LINKS.map(({ label, href }) => (
            <Link key={href} href={href} style={{ color: 'inherit', textDecoration: 'none' }}>
              {label}
            </Link>
          ))}
        </div>
      )}

      <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 8 : 12 }}>
        <Link
          href={H360_AUDIT}
          style={{
            padding: isMobile ? '8px 14px' : '8px 18px',
            background: G.text,
            color: '#fff',
            borderRadius: 99,
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: '-0.01em',
            whiteSpace: 'nowrap',
            textDecoration: 'none',
          }}
          data-testid="button-h360-nav-demo"
        >
          Get a free demo
        </Link>
      </div>
    </nav>
  );
}
