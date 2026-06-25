'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FONT_DISPLAY, G } from './tokens';
import { OARC_HOME, OARC_WHY, JOURNEY_STEPS, H360_CARD_EVENT, OARC_OPERATOR_VENUES } from './h360Site';

export default function OarcBridge() {
  const [active, setActive] = useState<number | null>(null);

  const goToStep = (cardIndex: number, stepIdx: number) => {
    setActive(stepIdx);
    document.getElementById('h360-products')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.dispatchEvent(new CustomEvent(H360_CARD_EVENT, { detail: cardIndex }));
  };

  return (
    <section
      style={{
        background: '#f7f6f3',
        borderBottom: `1px solid ${G.border}`,
        fontFamily: FONT_DISPLAY,
      }}
      aria-label="OARC Digital hospitality"
    >
      <div
        style={{
          maxWidth: 1140,
          margin: '0 auto',
          padding: '28px 20px 32px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: 20,
            marginBottom: 22,
          }}
        >
          <div style={{ maxWidth: 520 }}>
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: G.green,
                margin: '0 0 8px',
              }}
            >
              OARC Digital · Malta
            </p>
            <p style={{ fontSize: 15, fontWeight: 600, color: G.text, margin: '0 0 6px', lineHeight: 1.35 }}>
              We run restaurants. H360 is how we fix yours.
            </p>
            <p style={{ fontSize: 13, color: G.textMuted, margin: 0, lineHeight: 1.55, maxWidth: 460 }}>
              H360 is one product line inside{' '}
              <Link href={OARC_HOME} style={{ color: G.text, fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 3 }}>
                OARC Digital
              </Link>
              {' '}— creative, AI, and revenue under one roof. Operators who run {OARC_OPERATOR_VENUES}.
            </p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            <Link
              href={OARC_HOME}
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: G.text,
                padding: '8px 14px',
                borderRadius: 99,
                border: `1px solid ${G.border}`,
                background: '#fff',
                textDecoration: 'none',
              }}
            >
              oarcdigital.com →
            </Link>
            <Link
              href={OARC_WHY}
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: G.textMuted,
                padding: '8px 14px',
                textDecoration: 'none',
              }}
            >
              Why OARC
            </Link>
          </div>
        </div>

        <p style={{ fontSize: 11, fontWeight: 600, color: G.textMuted, margin: '0 0 10px', letterSpacing: '0.04em' }}>
          TAP A STEP — JUMP TO THE TOOL ↓
        </p>

        <div
          style={{
            display: 'flex',
            gap: 0,
            overflowX: 'auto',
            scrollbarWidth: 'none',
            paddingBottom: 4,
          }}
          data-lenis-prevent
        >
          {JOURNEY_STEPS.map((step, i) => {
            const isActive = active === i;
            return (
              <div
                key={step.label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexShrink: 0,
                }}
              >
                <button
                  type="button"
                  onClick={() => goToStep(step.cardIndex, i)}
                  style={{
                    padding: '12px 16px',
                    borderRadius: 12,
                    background: isActive ? G.green : '#fff',
                    border: `1px solid ${isActive ? G.green : G.border}`,
                    minWidth: 108,
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontFamily: FONT_DISPLAY,
                    transition: 'background 0.2s, border-color 0.2s, transform 0.15s',
                    transform: isActive ? 'scale(1.02)' : 'none',
                  }}
                >
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: isActive ? '#fff' : G.text,
                      letterSpacing: '-0.02em',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                    }}
                  >
                    <span style={{ fontSize: 14, opacity: 0.9 }} aria-hidden>{step.glyph}</span>
                    {step.label}
                  </div>
                  <div style={{ fontSize: 10, color: isActive ? 'rgba(255,255,255,0.75)' : G.textMuted, marginTop: 3 }}>
                    {step.sub}
                  </div>
                </button>
                {i < JOURNEY_STEPS.length - 1 && (
                  <span style={{ color: G.border, fontSize: 14, padding: '0 6px', userSelect: 'none' }} aria-hidden>
                    →
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
