'use client';

import { useState, useEffect } from 'react';
import { m } from 'framer-motion';
import { G, FONT_DISPLAY } from '../tokens';
import { useH360Reveal } from '../useH360Reveal';

const USE_CASES = [
  {
    id: 'reception',
    label: 'Reception',
    headline: 'Fourteen rings during seating — HOST picks up every line.',
    detail:
      'Parking, corkage, terrace wait, festa hours — answered in English or Maltese while your host stays on the floor. Repeat callers recognised before they repeat themselves.',
    metric: '0',
    metricLabel: 'hold music',
    brainInsight: 'Dashboard logs peak question topics so you fix menu copy once, not every night.',
    caller: { name: 'Marco Attard', phone: '+356 79xx xxxx', tags: ['Regular', 'Terrace'] as const },
    transcript: 'Hi Marco — kitchen open till 11pm. Want me to hold a table for tonight?',
    subCard: { title: 'Terrace check', staff: 'Live capacity', status: 'Available' as const },
  },
  {
    id: 'bookings',
    label: 'Bookings',
    headline: 'Talk → slot locked → SMS — no phone tag, no double book.',
    detail:
      'Party size, inside vs terrace, deposits, allergies — checked against live H360 BOOKING before the guest hangs up. Kitchen sees the ticket with dietary flags.',
    metric: '1',
    metricLabel: 'sync · H360 BOOK',
    brainInsight: 'Learns which phrases turn “maybe Saturday” into a locked cover.',
    caller: { name: 'Elena Vella', phone: '+356 99xx xxxx', tags: ['New', 'Party of 4'] as const },
    transcript: 'Friday 20:15 inside corner — locking now. SMS confirmation sent.',
    subCard: { title: 'H360 BOOKING', staff: 'Slot Fri 20:15', status: 'Locked' as const },
  },
  {
    id: 'guest',
    label: 'Guest care',
    headline: 'Nut allergy, kids menu, wheelchair — accurate from your trained menu.',
    detail:
      'Not guessing from the web — answers from the agentic ASI brain OARC built on your dishes, modifiers, and how your kitchen actually handles dietary requests.',
    metric: '100%',
    metricLabel: 'menu-grounded',
    brainInsight: 'Allergy questions feed a weekly report — spot menu gaps before a incident.',
    caller: { name: 'Keith Borg', phone: '+356 77xx xxxx', tags: ['VIP', 'Nut allergy'] as const },
    transcript: 'Three mains are nut-free — I\'ll flag the kitchen on your booking.',
    subCard: { title: 'Allergy flag', staff: 'Kitchen · noted', status: 'Available' as const },
  },
  {
    id: 'events',
    label: 'Events',
    headline: 'Twenty covers or a buyout — brief captured, manager looped in.',
    detail:
      'Collects date, budget, dietary mix, AV needs — routes to your events lead with full transcript. VIP corporate lines get priority handoff rules you set.',
    metric: 'VIP',
    metricLabel: 'routing rules',
    brainInsight: 'Large-party leads logged even when your floor team never picked up.',
    caller: { name: 'Sarah Camilleri', phone: '+356 21xx xxxx', tags: ['Corporate', '20 covers'] as const },
    transcript: 'Private room + wine pairing — briefing events. Manager calls within the hour.',
    subCard: { title: 'Events queue', staff: 'Manager · Luca', status: 'Unavailable' as const },
  },
  {
    id: 'followup',
    label: 'Recovery',
    headline: 'Confirmations and no-show recovery before you lose the table.',
    detail:
      'Outbound voice + SMS before service — table released on your rules if they ghost. Frees covers for walk-ins without staff chasing phones.',
    metric: '−60%',
    metricLabel: 'no-shows · when wired',
    brainInsight: 'Tracks who confirms vs who ghosts — tune deposit rules from real data.',
    caller: { name: 'David Grech', phone: '+356 79xx xxxx', tags: ['Confirm', 'Tomorrow'] as const },
    transcript: 'Confirming tomorrow 19:30 for four — reply YES to hold your table.',
    subCard: { title: 'Outbound SMS', staff: 'Auto · sent', status: 'Available' as const },
  },
] as const;

export default function VoiceUseCaseRail() {
  const [active, setActive] = useState(0);
  const [fade, setFade] = useState(true);
  const headRef = useH360Reveal<HTMLHeadingElement>();
  const item = USE_CASES[active];

  useEffect(() => {
    setFade(false);
    const t = window.setTimeout(() => setFade(true), 40);
    return () => window.clearTimeout(t);
  }, [active]);

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
        <h2
          ref={headRef}
          className="h360-rv"
          style={{
            fontSize: 'clamp(26px, 3.5vw, 40px)',
            fontWeight: 800,
            color: G.text,
            letterSpacing: '-0.04em',
            marginBottom: 32,
            maxWidth: 680,
            lineHeight: 1.1,
            fontFamily: FONT_DISPLAY,
            textAlign: 'center',
            margin: '0 auto 32px',
          }}
          data-speakable
        >
          Five front-desk jobs — one agentic ASI brain trained on Malta restaurants.
        </h2>
        <p style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)' }} data-speakable>
          H360 Voice Host handles AI reception, table booking, guest care and allergies, private events and large parties, and booking confirmation with no-show recovery for restaurants in Malta.
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
                transition: 'background 0.2s, color 0.2s, border-color 0.2s',
              }}
            >
              {u.label.toUpperCase()}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48, alignItems: 'center' }}>
          <div
            style={{
              opacity: fade ? 1 : 0,
              transform: fade ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.35s cubic-bezier(.22,1,.36,1), transform 0.35s cubic-bezier(.22,1,.36,1)',
            }}
          >
            <h3 style={{ fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 800, color: G.text, marginBottom: 14, letterSpacing: '-0.03em', fontFamily: FONT_DISPLAY }}>{item.headline}</h3>
            <p style={{ fontSize: 16, color: G.textMuted, lineHeight: 1.55, marginBottom: 20, maxWidth: 460 }} data-speakable>
              {item.detail}
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'baseline', gap: 10, padding: '14px 18px', borderRadius: 14, background: '#fff', border: `1px solid ${G.border}`, boxShadow: '0 8px 24px rgba(0,0,0,0.06)', marginBottom: 16 }}>
              <span style={{ fontSize: 28, fontWeight: 800, color: G.green, fontFamily: FONT_DISPLAY }}>{item.metric}</span>
              <span style={{ fontSize: 13, color: G.textMuted, fontWeight: 600 }}>{item.metricLabel}</span>
            </div>
            <p style={{ fontSize: 14, fontWeight: 700, color: G.text, lineHeight: 1.5, maxWidth: 440, padding: '12px 14px', borderRadius: 12, background: G.greenLt, border: `1px solid ${G.border}` }}>
              <span style={{ color: G.green }}>Brain → </span>
              {item.brainInsight}
            </p>
          </div>

          <div
            style={{
              opacity: fade ? 1 : 0,
              transform: fade ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.4s cubic-bezier(.22,1,.36,1) 0.05s, transform 0.4s cubic-bezier(.22,1,.36,1) 0.05s',
            }}
          >
            <div
              style={{
                background: '#fff',
                borderRadius: 24,
                border: `1px solid ${G.border}`,
                boxShadow: '0 32px 80px rgba(0,0,0,0.12)',
                overflow: 'hidden',
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
                <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: G.text, lineHeight: 1.5 }}>{item.transcript}</p>
              </div>
              <div style={{ padding: '14px 22px', borderTop: `1px solid ${G.border}`, background: G.beige }}>
                <p style={{ margin: 0, fontSize: 12, fontWeight: 700, color: G.green, lineHeight: 1.45 }}>{item.brainInsight}</p>
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
                    background: item.subCard.status === 'Available' ? '#dcfce7' : item.subCard.status === 'Locked' ? '#dbeafe' : '#fee2e2',
                    color: item.subCard.status === 'Available' ? G.green : item.subCard.status === 'Locked' ? '#1d4ed8' : '#b91c1c',
                    letterSpacing: '0.06em',
                  }}
                >
                  {item.subCard.status.toUpperCase()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
