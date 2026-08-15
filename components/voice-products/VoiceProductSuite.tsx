'use client';

import Link from 'next/link';
import { m } from 'framer-motion';
import { VOICE_PRODUCTS } from '@/lib/voice-products/voiceProductBrands';

/** Accent colours that are vivid enough to work on dark backgrounds */
const CARD_ACCENTS: Record<string, { bar: string; glow: string; tag: string }> = {
  'ai-restaurant-voice-host': {
    bar: '#4ade80',
    glow: 'rgba(74,222,128,0.18)',
    tag: 'text-emerald-400',
  },
  'ai-voice-receptionist': {
    bar: '#fbbf24',
    glow: 'rgba(251,191,36,0.18)',
    tag: 'text-amber-400',
  },
  'ai-voice-csr': {
    bar: '#38bdf8',
    glow: 'rgba(56,189,248,0.18)',
    tag: 'text-sky-400',
  },
  'ai-voice-dispatcher': {
    bar: '#fb923c',
    glow: 'rgba(251,146,60,0.18)',
    tag: 'text-orange-400',
  },
  'ai-voice-sales': {
    bar: '#fde047',
    glow: 'rgba(253,224,71,0.18)',
    tag: 'text-yellow-300',
  },
  'ai-voice-follow-up': {
    bar: '#c084fc',
    glow: 'rgba(192,132,252,0.18)',
    tag: 'text-violet-400',
  },
};

/** Six voice-AI products — each its own "company" on /ai-agents */
export default function VoiceProductSuite() {
  return (
    <section className="py-20 md:py-28 bg-black border-t border-white/10 relative overflow-hidden">
      {/* Subtle dot-grid */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(196,255,77,0.08) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ── Section header ── */}
        <div className="max-w-3xl mb-16">
          <p className="text-[10px] font-bold tracking-[0.22em] text-[#c4ff4d] mb-4 uppercase">
            Voice AI Suite · Built &amp; Managed by OARC
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-5">
            Six products.<br />
            <span className="text-[#c4ff4d]">One intelligence layer.</span>
          </h2>
          <p className="text-white/55 text-lg leading-relaxed max-w-2xl">
            We don't hand you a login and wish you luck. Each product is trained on your
            business, plugged into your systems, and managed by OARC engineers — so the
            intelligence compounds week by week, not just out of the box.
          </p>
        </div>

        {/* ── Agency value strip ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/[0.07] rounded-2xl overflow-hidden mb-16">
          {[
            { label: 'Trained on you', desc: 'Your prices, your tone, your rules — not a generic template.' },
            { label: 'Plugged in live', desc: 'CRM, calendar, WhatsApp, phone. Connected from day one.' },
            { label: 'Managed weekly', desc: 'OARC reviews every transcript and improves the brain for you.' },
          ].map((item) => (
            <div key={item.label} className="bg-black px-6 py-5">
              <p className="text-white font-semibold text-sm mb-1">{item.label}</p>
              <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* ── Product cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {VOICE_PRODUCTS.map((p, i) => {
            const accent = CARD_ACCENTS[p.slug] ?? {
              bar: '#c4ff4d',
              glow: 'rgba(196,255,77,0.14)',
              tag: 'text-[#c4ff4d]',
            };
            return (
              <m.div
                key={p.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={p.path}
                  className="group flex flex-col h-full rounded-2xl overflow-hidden border border-white/[0.09] bg-[#0a0a0a] hover:border-white/20 transition-all duration-300"
                  style={{
                    boxShadow: `0 0 0 0 ${accent.bar}`,
                    transition: 'box-shadow 0.35s ease, border-color 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 36px ${accent.glow}`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 0 transparent';
                  }}
                >
                  {/* Top accent bar */}
                  <div
                    className="h-[3px] w-full flex-shrink-0"
                    style={{ background: accent.bar }}
                  />

                  <div className="flex flex-col flex-1 p-6 gap-5">
                    {/* Metric chip */}
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span
                          className={`text-[10px] font-bold tracking-[0.18em] uppercase ${accent.tag}`}
                        >
                          {p.metric.value}
                        </span>
                        <p className="text-white/35 text-[10px] mt-0.5 tracking-wide">
                          {p.metric.label}
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 flex-shrink-0 mt-0.5">
                        <span
                          className="w-1.5 h-1.5 rounded-full animate-pulse"
                          style={{ background: accent.bar }}
                        />
                        <span className="text-[9px] font-bold tracking-widest text-white/30 uppercase">
                          LIVE
                        </span>
                      </div>
                    </div>

                    {/* Identity */}
                    <div>
                      <h3 className="text-xl font-black text-white tracking-tight leading-none mb-1">
                        {p.companyName}
                      </h3>
                      <p className={`text-xs font-medium ${accent.tag} opacity-70`}>
                        {p.companyTag}
                      </p>
                    </div>

                    {/* Hook */}
                    <p className="text-white/65 text-sm leading-relaxed flex-1">
                      {p.hook}
                    </p>

                    {/* Agency proof line */}
                    <p className="text-white/30 text-xs leading-relaxed border-t border-white/[0.06] pt-4">
                      {p.wedge}
                    </p>

                    {/* CTA row */}
                    <div className="flex items-center justify-between pt-1">
                      <span
                        className={`text-xs font-bold tracking-wide group-hover:opacity-100 opacity-50 transition-opacity ${accent.tag}`}
                      >
                        Explore {p.companyName} →
                      </span>
                    </div>
                  </div>
                </Link>
              </m.div>
            );
          })}
        </div>

        {/* ── Bottom note ── */}
        <p className="text-center mt-12 text-white/30 text-xs tracking-wide">
          Restaurants: also see{' '}
          <Link
            href="/h360/restaurant-phone-ai-malta"
            className="text-emerald-400 font-semibold hover:underline"
          >
            H360 Voice Host
          </Link>{' '}
          inside the full Malta restaurant stack.
        </p>
      </div>
    </section>
  );
}
