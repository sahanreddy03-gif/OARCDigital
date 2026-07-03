'use client';

import { useState } from 'react';
import Link from 'next/link';
import { m, AnimatePresence } from 'framer-motion';
import type { VoiceProductBrand } from '@/lib/voice-products/voiceProductBrands';
import VoiceCompanyDemo from './VoiceCompanyDemo';
import AiAgentsHeroVideo from '@/components/media/AiAgentsHeroVideo';
import CreativeNavigation from '@/components/CreativeNavigation';
import Footer from '@/components/Footer';
import { NAP } from '@/lib/seo/nap';

export default function VoiceCompanyPage({ brand }: { brand: VoiceProductBrand }) {
  const [activeCase, setActiveCase] = useState(0);
  const uc = brand.useCases[activeCase];

  return (
    <>
      <CreativeNavigation />
      <main style={{ background: '#030303', color: '#fff', minHeight: '100vh' }}>
        {/* Hero — full ai-agents 3D video background */}
        <section style={{ position: 'relative', overflow: 'hidden', minHeight: 'min(92vh, 920px)' }}>
          <AiAgentsHeroVideo overlay="bottom" />
          <div style={{ position: 'absolute', inset: 0, background: brand.glow, pointerEvents: 'none', opacity: 0.6 }} />
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(105deg, ${brand.accent}55 0%, transparent 45%, transparent 100%)`, pointerEvents: 'none' }} />

          <div style={{ position: 'relative', zIndex: 2, maxWidth: 1160, margin: '0 auto', padding: '100px 24px 56px', minHeight: 'min(92vh, 920px)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center', marginBottom: 20 }}>
              <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.14em', color: brand.accentLight, padding: '6px 12px', borderRadius: 99, border: `1px solid ${brand.accentLight}44`, background: `${brand.accentSoft}` }}>
                {brand.eyebrow}
              </span>
              <span style={{ fontSize: 28, fontWeight: 900, letterSpacing: '-0.06em', color: '#fff' }}>{brand.companyName}</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 40, alignItems: 'start' }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'baseline', gap: 12, marginBottom: 20, padding: '12px 16px', borderRadius: 14, background: 'rgba(0,0,0,0.45)', border: `1px solid ${brand.accentLight}33` }}>
                  <span style={{ fontSize: 36, fontWeight: 800, color: brand.accentLight }}>{brand.metric.value}</span>
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', maxWidth: 160, lineHeight: 1.4 }}>{brand.metric.label}</span>
                </div>
                <h1 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', margin: '0 0 16px' }} data-speakable>{brand.h1}</h1>
                <p style={{ fontSize: 18, fontWeight: 700, color: brand.accentLight, marginBottom: 12 }}>{brand.hook}</p>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.55, maxWidth: 480, marginBottom: 24 }}>{brand.wedge}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                  <Link href="/contact" style={{ fontSize: 14, fontWeight: 700, padding: '14px 22px', borderRadius: 99, background: brand.accentLight, color: '#000', textDecoration: 'none' }}>
                    Book a demo →
                  </Link>
                  {brand.h360Href && (
                    <Link href={brand.h360Href} style={{ fontSize: 14, fontWeight: 700, padding: '14px 22px', borderRadius: 99, border: `1px solid ${brand.accentLight}`, color: brand.accentLight, textDecoration: 'none' }}>
                      See H360 product →
                    </Link>
                  )}
                  <a href={`tel:${NAP.phoneE164}`} style={{ fontSize: 14, fontWeight: 600, padding: '14px 18px', borderRadius: 99, border: '1px solid rgba(255,255,255,0.2)', color: '#fff', textDecoration: 'none' }}>
                    Talk to OARC
                  </a>
                </div>
              </div>
              <VoiceCompanyDemo brand={brand} />
            </div>

            <blockquote style={{ margin: '40px 0 0', padding: '16px 20px', borderLeft: `3px solid ${brand.accentLight}`, background: 'rgba(0,0,0,0.35)', borderRadius: '0 12px 12px 0', fontSize: 16, fontWeight: 700, color: 'rgba(255,255,255,0.88)', maxWidth: 560 }}>
              {brand.doctrine}
            </blockquote>
          </div>
        </section>

        {/* Use cases — Sameday style */}
        <section style={{ padding: '72px 24px', background: '#fafafa', color: '#111' }}>
          <div style={{ maxWidth: 1160, margin: '0 auto' }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: brand.accent, textAlign: 'center', marginBottom: 8 }}>USE CASES</p>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, textAlign: 'center', marginBottom: 32, letterSpacing: '-0.03em' }}>One brain. Five jobs.</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', marginBottom: 36 }}>
              {brand.useCases.map((u, i) => (
                <button key={u.id} type="button" onClick={() => setActiveCase(i)} style={{ fontSize: 12, fontWeight: 700, padding: '10px 16px', borderRadius: 99, border: `1px solid ${i === activeCase ? brand.accent : '#ddd'}`, background: i === activeCase ? brand.accent : '#fff', color: i === activeCase ? '#fff' : '#666', cursor: 'pointer' }}>
                  {u.label.toUpperCase()}
                </button>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 40, alignItems: 'center' }}>
              <AnimatePresence mode="wait">
                <m.div key={uc.id} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 12 }}>
                  <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 12 }}>{uc.headline}</h3>
                  <p style={{ fontSize: 16, color: '#555', lineHeight: 1.55, marginBottom: 20 }}>{uc.detail}</p>
                  <div style={{ display: 'inline-flex', gap: 10, alignItems: 'baseline', padding: '12px 16px', borderRadius: 12, background: `${brand.accentSoft}`, border: `1px solid ${brand.accentLight}44` }}>
                    <span style={{ fontSize: 26, fontWeight: 800, color: brand.accent }}>{uc.metric}</span>
                    <span style={{ fontSize: 13, color: '#666' }}>{uc.metricLabel}</span>
                  </div>
                </m.div>
              </AnimatePresence>
              <m.div style={{ background: '#fff', borderRadius: 20, border: '1px solid #eee', boxShadow: '0 24px 60px rgba(0,0,0,0.08)', overflow: 'hidden' }}>
                <div style={{ padding: 18, borderBottom: '1px solid #eee' }}>
                  <div style={{ fontWeight: 800, fontSize: 16 }}>{uc.caller.name}</div>
                  <div style={{ fontSize: 12, color: '#888' }}>{uc.caller.phone}</div>
                  <div style={{ display: 'flex', gap: 6, marginTop: 10 }}>
                    {uc.caller.tags.map((t) => (
                      <span key={t} style={{ fontSize: 10, fontWeight: 700, padding: '4px 8px', borderRadius: 99, background: '#f4f4f5', color: '#666' }}>{t}</span>
                    ))}
                  </div>
                </div>
                <div style={{ padding: 18, background: '#f8faf8' }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: brand.accent, marginBottom: 8 }}>{brand.companyName} · LIVE</div>
                  <p style={{ margin: 0, fontSize: 14, fontWeight: 600, lineHeight: 1.5 }}>{uc.transcript}</p>
                </div>
                <div style={{ padding: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 12 }}>
                  <span style={{ fontWeight: 700 }}>{uc.subCard.title} · {uc.subCard.staff}</span>
                  <span style={{ fontWeight: 800, color: uc.subCard.status === 'Unavailable' ? '#b91c1c' : brand.accent }}>{uc.subCard.status}</span>
                </div>
              </m.div>
            </div>
          </div>
        </section>

        {/* Shadow training */}
        <section style={{ padding: '72px 24px', background: '#030303' }}>
          <div style={{ maxWidth: 1160, margin: '0 auto' }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: brand.accentLight, marginBottom: 8 }}>HOW {brand.companyName} LEARNS</p>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, marginBottom: 32, maxWidth: 640 }}>Shadow the human → extract the spec → trusted agent.</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
              {[
                { t: 'Watch 10–20 runs', d: 'Record real calls. Mark edge cases. Manager moments.' },
                { t: 'Extract the spec', d: 'Trigger · rules · escalation · success = finish line.' },
                { t: 'Trusted agent', d: 'Knows the job. Knows limits. Knows when to ask you.' },
              ].map((s, i) => (
                <div key={s.t} style={{ padding: 22, borderRadius: 16, border: `1px solid ${brand.accentSoft}`, background: 'rgba(255,255,255,0.04)' }}>
                  <div style={{ fontSize: 11, fontWeight: 800, color: brand.accentLight, marginBottom: 8 }}>0{i + 1}</div>
                  <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 8 }}>{s.t}</div>
                  <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>{s.d}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" style={{ padding: '72px 24px', background: brand.gradient }}>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 28 }}>Before you switch.</h2>
            {brand.faqs.map((faq, i) => (
              <details key={faq.question} style={{ background: 'rgba(0,0,0,0.35)', border: `1px solid ${brand.accentSoft}`, borderRadius: 14, padding: '4px 18px', marginBottom: 10 }}>
                <summary style={{ fontSize: 15, fontWeight: 700, cursor: 'pointer', padding: '14px 0', listStyle: 'none' }}>{String(i + 1).padStart(2, '0')} · {faq.question}</summary>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.72)', lineHeight: 1.7, margin: '0 0 16px' }} data-speakable>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Related */}
        <section style={{ padding: '48px 24px 80px', maxWidth: 1160, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)', marginBottom: 14 }}>VOICE AI SUITE · OARC DIGITAL</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {brand.related.map((l) => (
              <Link key={l.href} href={l.href} style={{ fontSize: 13, fontWeight: 600, padding: '10px 16px', borderRadius: 99, border: `1px solid ${brand.accentSoft}`, color: brand.accentLight, textDecoration: 'none' }}>
                {l.label} →
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
