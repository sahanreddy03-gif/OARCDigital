'use client';

import Link from 'next/link';
import H360ProductShell from './H360ProductShell';
import H360CinemaBreadcrumb from './H360CinemaBreadcrumb';
import VoiceHostConsole from './VoiceHostConsole';
import VoiceUseCaseRail from './VoiceUseCaseRail';
import VoiceBrainSystem from './VoiceBrainSystem';
import { useH360Reveal } from '../useH360Reveal';
import { themeForVisual } from './productThemes';
import { C, G, FONT_DISPLAY } from '../tokens';
import type { StandaloneProductConfig } from './standaloneProductTypes';
import { ProductCompareBoard, ExpertFailCard } from './standaloneVisuals';

export default function VoiceProductPage({ config }: { config: StandaloneProductConfig }) {
  const theme = themeForVisual(config.visual);
  const compareRef = useH360Reveal<HTMLElement>();
  const expertRef = useH360Reveal<HTMLHeadingElement>();

  return (
    <H360ProductShell eyebrow={config.eyebrow} h1={config.h1} live={config.live} ctaName={config.ctaName} themeAccent={theme.accent} cinema>
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(165deg, #021208 0%, #041a0c 45%, #030303 100%)',
          borderBottom: `1px solid ${C.border}`,
          backgroundImage: 'linear-gradient(rgba(74,222,128,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.05) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, background: theme.glow, pointerEvents: 'none', opacity: 0.5 }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: 1160, margin: '0 auto', padding: '20px 20px 48px' }}>
          <H360CinemaBreadcrumb ctaName={config.ctaName} />
          <h1
            style={{
              position: 'absolute',
              width: 1,
              height: 1,
              overflow: 'hidden',
              clip: 'rect(0,0,0,0)',
              whiteSpace: 'nowrap',
            }}
          >
            {config.h1}
          </h1>

          <VoiceHostConsole
            hero={{
              h1: config.h1,
              hook: config.hero.hook ?? config.hero.ownerPain,
              guestGain: config.hero.guestGain,
              ownerPain: config.hero.ownerPain,
              wedge: config.hero.wedge ?? '',
            }}
          />
        </div>
      </section>

      <VoiceUseCaseRail />
      <VoiceBrainSystem />

      <section ref={compareRef} className="h360-rv" style={{ background: C.bg, borderTop: `1px solid ${C.border}`, padding: '72px 24px 80px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <ProductCompareBoard compare={config.compare} />
        </div>
      </section>

      <section style={{ background: G.bg, borderTop: `1px solid ${G.border}`, padding: '72px 24px 80px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <h2 ref={expertRef} className="h360-rv" style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 800, color: G.text, letterSpacing: '-0.04em', marginBottom: 28, maxWidth: 640, lineHeight: 1.1, fontFamily: FONT_DISPLAY }}>
            {config.expert.title}
          </h2>
          <div style={{ display: 'grid', gap: 14, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            {config.expert.fails.map((row, i) => (
              <ExpertFailCard key={row.name} name={row.name} fail={row.fail} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section id="product-faq" style={{ background: G.beige, borderTop: `1px solid ${G.border}`, padding: '72px 24px 80px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: 36, lineHeight: 1.1, color: G.text, fontFamily: FONT_DISPLAY }}>
            Restaurant phone AI Malta — questions owners ask.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {config.faqs.map((faq, i) => (
              <details key={faq.question} style={{ background: G.bg, border: `1px solid ${G.border}`, borderRadius: 14, padding: '4px 20px' }}>
                <summary style={{ fontSize: 15, fontWeight: 700, cursor: 'pointer', listStyle: 'none', padding: '16px 0', display: 'flex', gap: 14 }}>
                  <span style={{ fontSize: 12, fontWeight: 800, color: G.green, opacity: 0.7, minWidth: 24 }}>{String(i + 1).padStart(2, '0')}</span>
                  <span>{faq.question}</span>
                </summary>
                <p style={{ fontSize: 14, color: G.textMuted, lineHeight: 1.7, margin: '0 0 18px', paddingLeft: 38 }} data-speakable>
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '40px 24px 56px', maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {config.related.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: 13,
                fontWeight: 600,
                padding: '10px 16px',
                borderRadius: 99,
                border: `1px solid ${G.border}`,
                background: G.bg,
                color: G.text,
                textDecoration: 'none',
              }}
            >
              {link.label} →
            </Link>
          ))}
        </div>
      </section>
    </H360ProductShell>
  );
}
