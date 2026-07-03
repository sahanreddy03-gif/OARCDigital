'use client';

import { useEffect, useState } from 'react';
import { m, AnimatePresence, useReducedMotion } from 'framer-motion';
import { G, FONT_DISPLAY } from '../tokens';
import { AiAgentsVideoShowcase } from '@/components/media/AiAgentsHeroVideo';

type Line = { who: 'guest' | 'ai' | 'staff'; text: string; sub?: string };

const SCRIPT: Line[] = [
  { who: 'guest', text: 'Hi — table for eight on Saturday evening?' },
  { who: 'ai', text: 'Of course. Terrace at 7:30pm is open — shall I lock it in?' },
  { who: 'guest', text: 'Yes please. One guest is gluten-free.' },
  { who: 'ai', text: 'Noted. Confirmation on its way — see you Saturday.' },
  { who: 'staff', text: 'Party of 8 · Sat 19:30 · terrace · GF noted', sub: 'Staff alert · H360 dashboard' },
];

function WaveBars({ active }: { active: boolean }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, height: 28 }}>
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <m.div
          key={i}
          animate={active ? { height: [6, 18 + (i % 3) * 6, 8, 22, 10] } : { height: 4 }}
          transition={active ? { repeat: Infinity, duration: 0.55 + i * 0.06, ease: 'easeInOut' } : { duration: 0.2 }}
          style={{ width: 4, borderRadius: 99, background: 'linear-gradient(180deg,#86efac,#094413)' }}
        />
      ))}
    </div>
  );
}

function Orb({ speaking, reduce, compact }: { speaking: boolean; reduce: boolean | null; compact?: boolean }) {
  if (compact) {
    return (
      <div style={{ maxWidth: 280, margin: '0 auto' }}>
        <AiAgentsVideoShowcase speaking={speaking && !reduce} accentLight="#4ade80" label={speaking ? 'SPEAKING' : 'LISTENING'} />
      </div>
    );
  }
  return (
    <AiAgentsVideoShowcase speaking={speaking && !reduce} accentLight="#4ade80" label={speaking ? 'SPEAKING' : 'LISTENING'} />
  );
}

export default function VoiceAiLiveDemo({ compact = false }: { compact?: boolean }) {
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState(0);
  const [ringing, setRinging] = useState(true);
  const [visibleLines, setVisibleLines] = useState<Line[]>([]);
  const [aiSpeaking, setAiSpeaking] = useState(false);

  useEffect(() => {
    if (reduce) {
      setRinging(false);
      setVisibleLines(SCRIPT);
      return;
    }

    let cancelled = false;
    const run = async () => {
      setPhase(0);
      setRinging(true);
      setVisibleLines([]);
      setAiSpeaking(false);
      await wait(1400);
      if (cancelled) return;
      setRinging(false);
      setPhase(1);

      for (let i = 0; i < SCRIPT.length; i++) {
        if (cancelled) return;
        const line = SCRIPT[i];
        setAiSpeaking(line.who === 'ai');
        setVisibleLines((prev) => [...prev, line]);
        await wait(line.who === 'ai' ? 2200 : 1800);
      }
      setAiSpeaking(false);
      await wait(2400);
      if (!cancelled) run();
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [reduce]);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: compact ? '1fr' : 'minmax(240px, 1fr) minmax(280px, 1.1fr)',
        gap: compact ? 24 : 40,
        alignItems: 'center',
        width: '100%',
      }}
    >
      <div style={{ order: compact ? 2 : 0 }}>
        <Orb speaking={aiSpeaking && !ringing} reduce={reduce} compact={compact} />
        {!compact && (
          <p style={{ textAlign: 'center', marginTop: 16, fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.08em' }}>
            AGI HOST → ASI BRAIN · OARC-TRAINED · MALTA MENUS
          </p>
        )}
      </div>

      <div
        style={{
          perspective: 1000,
          order: compact ? 1 : 0,
        }}
      >
        <m.div
          animate={reduce ? {} : { rotateY: -6, rotateX: 4 }}
          style={{
            background: 'linear-gradient(165deg,#0a0a0a,#141414)',
            borderRadius: 28,
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(74,222,128,0.08)',
            overflow: 'hidden',
            transformStyle: 'preserve-3d',
          }}
        >
          <div style={{ padding: '14px 18px', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <AnimatePresence mode="wait">
                {ringing ? (
                  <m.div key="ring" initial={{ scale: 0.8 }} animate={{ scale: [1, 1.08, 1] }} transition={{ repeat: Infinity, duration: 0.9 }} style={{ width: 36, height: 36, borderRadius: 12, background: '#166534', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#bbf7d0" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </m.div>
                ) : (
                  <m.div key="live" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ width: 36, height: 36, borderRadius: 12, background: G.green, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <WaveBars active={aiSpeaking} />
                  </m.div>
                )}
              </AnimatePresence>
              <div>
                <div style={{ fontSize: 13, fontWeight: 800, color: '#fff', fontFamily: FONT_DISPLAY }}>{ringing ? 'Incoming call…' : 'H360 Voice Host · Live'}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)' }}>Malta restaurant line · 24/7</div>
              </div>
            </div>
            <div style={{ fontSize: 10, fontWeight: 700, color: '#4ade80', letterSpacing: '0.1em' }}>{ringing ? 'RING' : 'ON CALL'}</div>
          </div>

          <div style={{ padding: '16px 18px 20px', minHeight: compact ? 200 : 280, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <AnimatePresence>
              {visibleLines.map((line, i) => (
                <m.div
                  key={`${line.text}-${i}`}
                  initial={{ opacity: 0, y: 12, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                  style={{
                    alignSelf: line.who === 'guest' ? 'flex-end' : 'flex-start',
                    maxWidth: '92%',
                  }}
                >
                  {line.who === 'staff' ? (
                    <div style={{ background: 'rgba(251,191,36,0.12)', border: '1px solid rgba(251,191,36,0.35)', borderRadius: 14, padding: '12px 14px' }}>
                      <div style={{ fontSize: 10, fontWeight: 700, color: '#fbbf24', letterSpacing: '0.08em', marginBottom: 4 }}>{line.sub}</div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: '#fef3c7' }}>{line.text}</div>
                    </div>
                  ) : (
                    <div
                      style={{
                        background: line.who === 'ai' ? 'rgba(9,68,19,0.85)' : 'rgba(255,255,255,0.08)',
                        border: line.who === 'ai' ? '1px solid rgba(74,222,128,0.35)' : '1px solid rgba(255,255,255,0.1)',
                        borderRadius: line.who === 'guest' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                        padding: '11px 14px',
                      }}
                    >
                      <div style={{ fontSize: 10, fontWeight: 700, color: line.who === 'ai' ? '#86efac' : 'rgba(255,255,255,0.45)', marginBottom: 4, letterSpacing: '0.06em' }}>
                        {line.who === 'ai' ? 'H360 HOST' : 'GUEST'}
                      </div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: '#fff', lineHeight: 1.4 }}>{line.text}</div>
                    </div>
                  )}
                </m.div>
              ))}
            </AnimatePresence>
          </div>

          {!ringing && visibleLines.length >= 3 && (
            <m.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ margin: '0 18px 18px', padding: '12px 14px', borderRadius: 12, background: 'rgba(74,222,128,0.08)', border: '1px solid rgba(74,222,128,0.2)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, color: '#86efac', letterSpacing: '0.08em' }}>DASHBOARD</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>Booking locked · you stay in control</div>
              </div>
              <div style={{ fontSize: 22, fontWeight: 800, color: '#4ade80' }}>✓</div>
            </m.div>
          )}
        </m.div>
      </div>
    </div>
  );
}

function wait(ms: number) {
  return new Promise<void>((r) => setTimeout(r, ms));
}
