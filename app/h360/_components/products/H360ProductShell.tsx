'use client';

import Link from 'next/link';
import { useLenis } from 'lenis/react';
import { FONT_DISPLAY, G } from '../tokens';
import { H360_AUDIT, H360_HOME, H360_POSITIONING, OARC_HOME } from '../h360Site';
import { scrollToPageTop } from '@/lib/scrollToPageTop';

type Props = {
  eyebrow: string;
  h1: string;
  live?: boolean;
  ctaName?: string;
  themeAccent?: string;
  /** Motion-first layout — hides document-style header copy */
  cinema?: boolean;
  children: React.ReactNode;
};

export default function H360ProductShell({ eyebrow, h1, live, ctaName = 'this tool', themeAccent = G.green, cinema, children }: Props) {
  const lenis = useLenis();

  return (
    <div style={{ fontFamily: FONT_DISPLAY, background: G.bg, color: G.text }}>
      {!cinema && (
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '28px 24px 0' }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: 12, color: G.textMuted, marginBottom: 20, display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center' }}>
            <Link href={OARC_HOME} style={{ color: G.green, fontWeight: 600 }}>OARC Digital</Link>
            <span aria-hidden>→</span>
            <Link href={H360_HOME} style={{ color: G.textMuted }}>H360</Link>
            <span aria-hidden>→</span>
            <span style={{ color: G.text }}>{h1.replace(/\.$/, '')}</span>
          </nav>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center', marginBottom: 14 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: themeAccent, margin: 0 }}>
              {eyebrow}
            </p>
            {live && (
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.06em', color: G.green, border: `1px solid ${G.greenLt}`, background: 'rgba(9,68,19,0.06)', borderRadius: 99, padding: '4px 10px' }}>
                LIVE
              </span>
            )}
          </div>

          <h1 style={{ fontSize: 'clamp(36px, 5.5vw, 56px)', fontWeight: 800, letterSpacing: '-0.045em', lineHeight: 1.05, margin: '0 0 12px', maxWidth: 800 }}>
            {h1}
          </h1>

          <p style={{ fontSize: 14, color: G.textMuted, margin: '0 0 8px', maxWidth: 620, lineHeight: 1.55 }}>
            {H360_POSITIONING}
          </p>
          <p style={{ fontSize: 12, color: G.textMuted, margin: '0 0 24px', maxWidth: 560, lineHeight: 1.5 }}>
            By{' '}
            <Link href={OARC_HOME} style={{ color: G.text, fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 3 }}>
              OARC Digital
            </Link>
            {' '}— parent brand. H360 is the restaurant-only line.
          </p>
        </div>
      )}

      {children}

      <section style={{ background: G.beige, borderTop: `1px solid ${G.border}`, padding: '56px 24px 72px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: 'clamp(17px, 2.5vw, 22px)', fontWeight: 700, margin: '0 0 8px', letterSpacing: '-0.02em' }}>
            See what {ctaName} does at your venue.
          </p>
          <p style={{ fontSize: 14, color: G.textMuted, margin: '0 0 22px' }}>Free ARC audit — where you leak guests and margin today.</p>
          <Link
            href={H360_AUDIT}
            style={{
              display: 'inline-flex',
              padding: '14px 28px',
              background: G.green,
              color: '#f0f9f4',
              borderRadius: 99,
              fontSize: 15,
              fontWeight: 600,
              textDecoration: 'none',
              boxShadow: '0 8px 32px rgba(9,68,19,0.25)',
            }}
          >
            Get free ARC audit →
          </Link>
          <p style={{ fontSize: 12, color: G.textMuted, marginTop: 18 }}>
            <Link href={H360_HOME} onClick={() => scrollToPageTop(lenis)} scroll style={{ color: G.textMuted }}>← Back to H360 hub</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
