'use client';

import Image from 'next/image';
import Link from 'next/link';
import { m } from 'framer-motion';
import H360ProductShell from './H360ProductShell';
import H360CinemaBreadcrumb from './H360CinemaBreadcrumb';
import VoiceAiLiveDemo from './VoiceAiLiveDemo';
import VoiceUseCaseRail from './VoiceUseCaseRail';
import { VoiceTalkCTA, VoiceWhyThisJob, VoiceShadowTraining } from './VoiceCinemaSections';
import { themeForVisual } from './productThemes';
import { C, G, FONT_DISPLAY } from '../tokens';
import type { StandaloneProductConfig } from './standaloneProductTypes';
import { ProductCompareBoard, ExpertFailCard } from './standaloneVisuals';
import { VOICE_HERO_IMAGE } from './voiceProductContent';

export default function VoiceProductPage({ config }: { config: StandaloneProductConfig }) {
  const theme = themeForVisual(config.visual);

  return (
    <H360ProductShell eyebrow={config.eyebrow} h1={config.h1} live={config.live} ctaName={config.ctaName} themeAccent={theme.accent} cinema>
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(165deg, #021208 0%, #041a0c 45%, #030303 100%)',
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <Image
          src={VOICE_HERO_IMAGE}
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 30%', opacity: 0.32 }}
        />
        <div style={{ position: 'absolute', inset: 0, background: theme.glow, pointerEvents: 'none', opacity: 0.85 }} />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(2,18,8,0.55) 0%, rgba(3,3,3,0.92) 88%)',
            pointerEvents: 'none',
          }}
        />

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

          <div style={{ marginBottom: 28, maxWidth: 620 }}>
            <m.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                display: 'inline-flex',
                alignItems: 'baseline',
                gap: 12,
                marginBottom: 18,
                padding: '12px 16px',
                borderRadius: 14,
                background: 'rgba(0,0,0,0.45)',
                border: `1px solid ${G.greenMid}55`,
                backdropFilter: 'blur(8px)',
              }}
            >
              <span style={{ fontSize: 'clamp(26px, 5vw, 38px)', fontWeight: 800, color: G.greenLt, letterSpacing: '-0.03em', fontFamily: FONT_DISPLAY }}>
                {config.hero.metric.value}
              </span>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.72)', lineHeight: 1.4, maxWidth: 180 }}>{config.hero.metric.label}</span>
            </m.div>
            <h2
              style={{
                fontSize: 'clamp(26px, 5.5vw, 36px)',
                fontWeight: 800,
                lineHeight: 1.12,
                color: 'rgba(255,255,255,0.96)',
                margin: '0 0 10px',
                letterSpacing: '-0.035em',
                fontFamily: FONT_DISPLAY,
              }}
              data-speakable
            >
              {config.hero.hook ?? config.hero.ownerPain}
            </h2>
            <p style={{ fontSize: 'clamp(15px, 2.5vw, 17px)', fontWeight: 700, color: G.greenLt, lineHeight: 1.4, margin: 0 }}>
              {config.hero.guestGain}
            </p>
            <p style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)' }} data-speakable>
              {config.hero.ownerPain}. {config.hero.wedge}
            </p>
          </div>

          <VoiceAiLiveDemo />

          <VoiceTalkCTA />

          <m.blockquote
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            style={{
              margin: '8px 0 0',
              padding: '14px 18px',
              borderLeft: `3px solid ${G.greenLt}`,
              background: 'rgba(0,0,0,0.35)',
              borderRadius: '0 12px 12px 0',
              fontSize: 'clamp(14px, 2vw, 16px)',
              fontWeight: 700,
              color: 'rgba(255,255,255,0.88)',
              lineHeight: 1.45,
              fontFamily: FONT_DISPLAY,
              maxWidth: 560,
              backdropFilter: 'blur(6px)',
            }}
          >
            {config.hero.doctrine}
          </m.blockquote>
        </div>
      </section>

      <VoiceUseCaseRail />
      <VoiceWhyThisJob />
      <VoiceShadowTraining />

      <section style={{ background: C.bg, borderTop: `1px solid ${C.border}`, padding: '72px 24px 80px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <ProductCompareBoard compare={config.compare} />
        </div>
      </section>

      <section style={{ background: G.bg, borderTop: `1px solid ${G.border}`, padding: '72px 24px 80px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: G.green, marginBottom: 12 }}>WHY THE OLD WAY LOSES</p>
          <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 800, color: G.text, letterSpacing: '-0.04em', marginBottom: 28, maxWidth: 640, lineHeight: 1.1, fontFamily: FONT_DISPLAY }}>
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
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: G.green, marginBottom: 12 }}>AI SEARCH · GOOGLE · VOICE</p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: 36, lineHeight: 1.1, color: G.text, fontFamily: FONT_DISPLAY }}>
            Before you switch.
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
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: G.textMuted, marginBottom: 14 }}>NEXT ON THE ROAD</p>
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
