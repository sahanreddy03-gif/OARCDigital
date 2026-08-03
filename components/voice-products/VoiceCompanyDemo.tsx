'use client';

import { useEffect, useState } from 'react';
import { m, AnimatePresence, useReducedMotion } from 'framer-motion';
import type { VoiceProductBrand } from '@/lib/voice-products/voiceProductBrands';
import { AiAgentsVideoShowcase } from '@/components/media/AiAgentsHeroVideo';

type Line = { who: 'guest' | 'ai' | 'staff'; text: string; sub?: string };

function WaveBars({ active, color }: { active: boolean; color: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, height: 28 }}>
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <m.div
          key={i}
          animate={active ? { height: [6, 18 + (i % 3) * 6, 8, 22, 10] } : { height: 4 }}
          transition={active ? { repeat: Infinity, duration: 0.55 + i * 0.06, ease: 'easeInOut' } : { duration: 0.2 }}
          style={{ width: 4, borderRadius: 99, background: `linear-gradient(180deg,${color},${color}88)` }}
        />
      ))}
    </div>
  );
}

export default function VoiceCompanyDemo({ brand, compact = false }: { brand: VoiceProductBrand; compact?: boolean }) {
  const reduce = useReducedMotion();
  const script = brand.demoScript;
  const [ringing, setRinging] = useState(true);
  const [visibleLines, setVisibleLines] = useState<Line[]>([]);
  const [aiSpeaking, setAiSpeaking] = useState(false);

  useEffect(() => {
    if (reduce) {
      setRinging(false);
      setVisibleLines(script);
      return;
    }
    let cancelled = false;
    const run = async () => {
      setRinging(true);
      setVisibleLines([]);
      setAiSpeaking(false);
      await wait(1200);
      if (cancelled) return;
      setRinging(false);
      for (let i = 0; i < script.length; i++) {
        if (cancelled) return;
        const line = script[i];
        setAiSpeaking(line.who === 'ai');
        setVisibleLines((prev) => [...prev, line]);
        await wait(line.who === 'ai' ? 2000 : 1600);
      }
      setAiSpeaking(false);
      await wait(2200);
      if (!cancelled) run();
    };
    run();
    return () => { cancelled = true; };
  }, [reduce, script]);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: compact ? '1fr' : 'minmax(220px, 0.95fr) minmax(280px, 1.05fr)', gap: compact ? 20 : 32, alignItems: 'center' }}>
      <div style={{ order: compact ? 2 : 0 }}>
        <AiAgentsVideoShowcase
          speaking={aiSpeaking && !ringing}
          accentLight={brand.accentLight}
          label={ringing ? 'STANDBY' : aiSpeaking ? 'SPEAKING' : 'LISTENING'}
        />
      </div>

      <div style={{ perspective: 1000, order: compact ? 1 : 0 }}>
        <m.div style={{ background: 'linear-gradient(165deg,#0a0a0a,#141414)', borderRadius: 24, border: `1px solid ${brand.accentSoft}`, overflow: 'hidden', boxShadow: '0 28px 70px rgba(0,0,0,0.5)' }}>
          <div style={{ padding: '14px 18px', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              {ringing ? (
                <m.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 0.9 }} style={{ width: 36, height: 36, borderRadius: 12, background: brand.accent, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: 16 }}>📞</span>
                </m.div>
              ) : (
                <div style={{ width: 36, height: 36, borderRadius: 12, background: brand.accent, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <WaveBars active={aiSpeaking} color={brand.accentLight} />
                </div>
              )}
              <div>
                <div style={{ fontSize: 13, fontWeight: 800, color: '#fff' }}>{ringing ? 'Incoming…' : `${brand.companyName} · Live`}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)' }}>{brand.companyTag}</div>
              </div>
            </div>
            <span style={{ fontSize: 10, fontWeight: 700, color: brand.accentLight, letterSpacing: '0.1em' }}>{ringing ? 'RING' : 'ON CALL'}</span>
          </div>
          <div style={{ padding: '14px 18px 18px', minHeight: compact ? 180 : 260, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <AnimatePresence>
              {visibleLines.map((line, i) => (
                <m.div key={`${line.text}-${i}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ alignSelf: line.who === 'guest' ? 'flex-end' : 'flex-start', maxWidth: '92%' }}>
                  {line.who === 'staff' ? (
                    <div style={{ background: `${brand.accentLight}22`, border: `1px solid ${brand.accentLight}55`, borderRadius: 12, padding: '10px 12px' }}>
                      <div style={{ fontSize: 10, fontWeight: 700, color: brand.accentLight, marginBottom: 4 }}>{line.sub}</div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>{line.text}</div>
                    </div>
                  ) : (
                    <div style={{ background: line.who === 'ai' ? `${brand.accent}dd` : 'rgba(255,255,255,0.08)', border: `1px solid ${line.who === 'ai' ? brand.accentLight + '55' : 'rgba(255,255,255,0.1)'}`, borderRadius: 14, padding: '10px 12px' }}>
                      <div style={{ fontSize: 10, fontWeight: 700, color: line.who === 'ai' ? brand.accentLight : 'rgba(255,255,255,0.45)', marginBottom: 4 }}>{line.who === 'ai' ? brand.companyName : 'CALLER'}</div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: '#fff', lineHeight: 1.4 }}>{line.text}</div>
                    </div>
                  )}
                </m.div>
              ))}
            </AnimatePresence>
          </div>
        </m.div>
      </div>
    </div>
  );
}

function wait(ms: number) {
  return new Promise<void>((r) => setTimeout(r, ms));
}
