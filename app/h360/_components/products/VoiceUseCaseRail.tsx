'use client';

import { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { G, FONT_DISPLAY } from '../tokens';

const USE_CASES = [
  {
    id: 'reception',
    label: 'AI Reception',
    headline: 'Every call answered — even Friday rush.',
    detail: 'Hours, parking, directions, wait times — warm voice, zero hold music.',
    metric: '24/7',
    metricLabel: 'line always live',
    caller: { name: 'Marco Attard', phone: '+356 79xx xxxx', tags: ['Regular', 'Terrace'] as const },
    transcript: 'Hi Marco — kitchen open till 11pm. Want me to hold a table for tonight?',
    subCard: { title: 'Checking terrace', staff: 'Host · Sandra', status: 'Available' as const },
  },
  {
    id: 'bookings',
    label: 'AI Bookings',
    headline: 'Talk. Book. Done.',
    detail: 'Party size, terrace vs inside, allergies — locked into H360 BOOKING. No phone tag.',
    metric: '0',
    metricLabel: 'double bookings',
    caller: { name: 'Elena Vella', phone: '+356 99xx xxxx', tags: ['New', 'Party of 4'] as const },
    transcript: 'Friday 20:15 inside corner — locking now. SMS confirmation sent.',
    subCard: { title: 'H360 BOOKING', staff: 'Slot Fri 20:15', status: 'Locked' as const },
  },
  {
    id: 'guest',
    label: 'AI Guest Care',
    headline: 'Allergies, kids, wheelchair — handled.',
    detail: 'Menu questions, dietary notes, gift vouchers — accurate answers from your trained brain.',
    metric: '1',
    metricLabel: 'brain · your menu',
    caller: { name: 'Keith Borg', phone: '+356 77xx xxxx', tags: ['VIP', 'Nut allergy'] as const },
    transcript: 'Three mains are nut-free — I\'ll flag the kitchen on your booking.',
    subCard: { title: 'Allergy flag', staff: 'Kitchen · noted', status: 'Available' as const },
  },
  {
    id: 'events',
    label: 'AI Events',
    headline: 'Large parties and private dining.',
    detail: 'Eight covers or eighty — collects brief, flags your events manager, routes VIPs.',
    metric: 'VIP',
    metricLabel: 'routing when it matters',
    caller: { name: 'Sarah Camilleri', phone: '+356 21xx xxxx', tags: ['Corporate', '20 covers'] as const },
    transcript: 'Private room + wine pairing — briefing events. Manager calls within the hour.',
    subCard: { title: 'Events queue', staff: 'Manager · Luca', status: 'Unavailable' as const },
  },
  {
    id: 'followup',
    label: 'AI Follow-up',
    headline: 'Confirmations and no-show recovery.',
    detail: 'Outbound calls and texts before service — table released if they ghost.',
    metric: '−60%',
    metricLabel: 'no-shows · H360 BOOK',
    caller: { name: 'David Grech', phone: '+356 79xx xxxx', tags: ['Confirm', 'Tomorrow'] as const },
    transcript: 'Confirming tomorrow 19:30 for four — reply YES to hold your table.',
    subCard: { title: 'Outbound SMS', staff: 'Auto · sent', status: 'Available' as const },
  },
] as const;

export default function VoiceUseCaseRail() {
  const [active, setActive] = useState(0);
  const item = USE_CASES[active];

  return (
    <section
      style={{
        background: 'linear-gradient(165deg, #fff7ed 0%, #f5f3ff 40%, #ecfdf5 100%)',
        borderTop: `1px solid ${G.border}`,
        padding: '72px 24px 80px',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }}
    >
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: G.green, marginBottom: 12, textAlign: 'center' }}>USE CASES</p>
        <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 800, color: G.text, letterSpacing: '-0.04em', marginBottom: 12, maxWidth: 640, lineHeight: 1.1, fontFamily: FONT_DISPLAY, textAlign: 'center', margin: '0 auto 12px' }}>
          Scale your front desk — without hiring three hosts.
        </h2>
        <p style={{ fontSize: 16, color: G.textMuted, maxWidth: 520, margin: '0 auto 32px', lineHeight: 1.5, textAlign: 'center' }}>
          Five jobs owners already pay for — one brain trained only by OARC on Malta restaurants.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 40, justifyContent: 'center' }}>
          {USE_CASES.map((u, i) => (
            <button
              key={u.id}
              type="button"
              onClick={() => setActive(i)}
              style={{
                fontSize: 12,
                fontWeight: 700,
                padding: '10px 16px',
                borderRadius: 99,
                border: `1px solid ${i === active ? G.text : G.border}`,
                background: i === active ? G.text : '#fff',
                color: i === active ? '#fff' : G.textMuted,
                cursor: 'pointer',
                fontFamily: FONT_DISPLAY,
                letterSpacing: '0.04em',
              }}
            >
              {u.label.toUpperCase()}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48, alignItems: 'center' }}>
          <AnimatePresence mode="wait">
            <m.div key={item.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: G.greenLt, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={G.green} strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h3 style={{ fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 800, color: G.text, marginBottom: 12, letterSpacing: '-0.03em', fontFamily: FONT_DISPLAY }}>{item.headline}</h3>
              <p style={{ fontSize: 16, color: G.textMuted, lineHeight: 1.55, marginBottom: 24, maxWidth: 440 }}>{item.detail}</p>
              <div style={{ display: 'inline-flex', alignItems: 'baseline', gap: 10, padding: '14px 18px', borderRadius: 14, background: '#fff', border: `1px solid ${G.border}`, boxShadow: '0 8px 24px rgba(0,0,0,0.06)' }}>
                <span style={{ fontSize: 28, fontWeight: 800, color: G.green, fontFamily: FONT_DISPLAY }}>{item.metric}</span>
                <span style={{ fontSize: 13, color: G.textMuted }}>{item.metricLabel}</span>
              </div>
            </m.div>
          </AnimatePresence>

          <m.div style={{ perspective: 1000 }}>
            <AnimatePresence mode="wait">
              <m.div
                key={item.id}
                initial={{ opacity: 0, rotateY: -8 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: 8 }}
                style={{
                  background: '#fff',
                  borderRadius: 24,
                  border: `1px solid ${G.border}`,
                  boxShadow: '0 32px 80px rgba(0,0,0,0.12)',
                  overflow: 'hidden',
                  transform: 'rotateY(-2deg)',
                }}
              >
                <div style={{ padding: '20px 22px', borderBottom: `1px solid ${G.border}` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{ width: 48, height: 48, borderRadius: '50%', background: `linear-gradient(135deg, ${G.greenLt}, ${G.greenMid})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 800, color: G.green }}>
                      {item.caller.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 16, fontWeight: 800, color: G.text }}>{item.caller.name}</div>
                      <div style={{ fontSize: 12, color: G.textMuted }}>{item.caller.phone}</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <m.span animate={{ opacity: [1, 0.4, 1] }} transition={{ repeat: Infinity, duration: 1.2 }} style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e' }} />
                      <span style={{ fontSize: 12, fontWeight: 700, color: G.textMuted, fontFamily: 'ui-monospace, monospace' }}>02:06</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 12 }}>
                    {item.caller.tags.map((tag) => (
                      <span key={tag} style={{ fontSize: 10, fontWeight: 700, padding: '4px 10px', borderRadius: 99, background: G.beige, color: G.textMuted, letterSpacing: '0.04em' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div style={{ padding: '18px 22px', background: '#f8faf8' }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: G.green, letterSpacing: '0.08em', marginBottom: 8 }}>H360 VOICE HOST · LIVE</div>
                  <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: G.text, lineHeight: 1.5 }}>{item.transcript}</p>
                </div>
                <div style={{ padding: '16px 22px', borderTop: `1px solid ${G.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: G.textMuted }}>{item.subCard.title}</div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: G.text }}>{item.subCard.staff}</div>
                  </div>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 800,
                      padding: '6px 12px',
                      borderRadius: 99,
                      background: item.subCard.status === 'Available' ? '#dcfce7' : '#fee2e2',
                      color: item.subCard.status === 'Available' ? G.green : '#b91c1c',
                      letterSpacing: '0.06em',
                    }}
                  >
                    {item.subCard.status.toUpperCase()}
                  </span>
                </div>
              </m.div>
            </AnimatePresence>
          </m.div>
        </div>
      </div>
    </section>
  );
}
