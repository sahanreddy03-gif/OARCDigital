'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FONT_DISPLAY, G } from './tokens';
import { OARC_HOME, JOURNEY_STEPS, H360_CARD_EVENT } from './h360Site';

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
            <p style={{ fontSize: 17, fontWeight: 700, color: G.text, margin: 0, lineHeight: 1.35 }}>
              We run restaurants. H360 is how we fix yours.
            </p>
          </div>
          <Link
            href={OARC_HOME}
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: G.text,
              padding: '10px 16px',
              borderRadius: 99,
              border: `1px solid ${G.border}`,
              background: '#fff',
              textDecoration: 'none',
              alignSelf: 'flex-start',
            }}
          >
            oarcdigital.com →
          </Link>
        </div>

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
