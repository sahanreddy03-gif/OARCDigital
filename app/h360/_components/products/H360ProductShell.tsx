'use client';

import Link from 'next/link';
import H360Nav from '../H360Nav';
import { FONT_DISPLAY, G } from '../tokens';
import { H360_AUDIT, H360_HOME, OARC_HOME, OARC_OPERATOR_VENUES } from '../h360Site';

type Props = {
  eyebrow: string;
  h1: string;
  live?: boolean;
  ctaName?: string;
  children: React.ReactNode;
};

export default function H360ProductShell({ eyebrow, h1, live, ctaName = 'this tool', children }: Props) {
  return (
    <div style={{ fontFamily: FONT_DISPLAY, background: G.bg, color: G.text }}>
      <H360Nav />

      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '28px 20px 0' }}>
        <nav aria-label="Breadcrumb" style={{ fontSize: 12, color: G.textMuted, marginBottom: 20, display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center' }}>
          <Link href={OARC_HOME} style={{ color: G.green, fontWeight: 600 }}>OARC Digital</Link>
          <span aria-hidden>→</span>
          <Link href={H360_HOME} style={{ color: G.textMuted }}>H360</Link>
          <span aria-hidden>→</span>
          <span style={{ color: G.text }}>{h1.replace(/\.$/, '')}</span>
        </nav>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center', marginBottom: 14 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: G.green, margin: 0 }}>
            {eyebrow}
          </p>
          {live && (
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.06em', color: G.green, border: `1px solid ${G.greenLt}`, background: 'rgba(9,68,19,0.06)', borderRadius: 99, padding: '4px 10px' }}>
              LIVE
            </span>
          )}
        </div>

        <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.08, margin: '0 0 12px', maxWidth: 720 }}>
          {h1}
        </h1>

        <p style={{ fontSize: 13, color: G.textMuted, margin: '0 0 32px', maxWidth: 560, lineHeight: 1.5 }}>
          By{' '}
          <Link href={OARC_HOME} style={{ color: G.text, fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 3 }}>
            OARC Digital
          </Link>
          {' '}— operators who run {OARC_OPERATOR_VENUES}.
        </p>
      </div>

      {children}

      <section style={{ background: G.beige, borderTop: `1px solid ${G.border}`, padding: '48px 20px 64px' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: 15, fontWeight: 600, margin: '0 0 16px' }}>See what {ctaName} would do at your venue.</p>
          <Link
            href={H360_AUDIT}
            style={{
              display: 'inline-flex',
              padding: '12px 22px',
              background: G.green,
              color: '#f0f9f4',
              borderRadius: 99,
              fontSize: 14,
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            Get free ARC audit →
          </Link>
          <p style={{ fontSize: 12, color: G.textMuted, marginTop: 14 }}>
            <Link href={H360_HOME} style={{ color: G.textMuted }}>← Back to H360 hub</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
