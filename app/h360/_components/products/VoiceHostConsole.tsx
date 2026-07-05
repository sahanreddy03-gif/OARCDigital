'use client';

import { useEffect, useRef, useState } from 'react';
import { m, AnimatePresence, useReducedMotion } from 'framer-motion';
import { G, FONT_DISPLAY } from '../tokens';
import { AI_AGENTS_HERO_POSTER, AI_AGENTS_HERO_VIDEO } from '@/lib/media/aiAgentsHeroVideo';
import { openH360Arc } from '../openH360Arc';
import { useH360Reveal } from '../useH360Reveal';

type Line = { who: 'guest' | 'ai' | 'staff'; text: string; sub?: string };

const SCRIPT: Line[] = [
  { who: 'guest', text: 'Hi — table for eight on Saturday evening?' },
  { who: 'ai', text: 'Of course. Terrace at 7:30pm is open — shall I lock it in?' },
  { who: 'guest', text: 'Yes please. One guest is gluten-free.' },
  { who: 'ai', text: 'Noted. Confirmation on its way — see you Saturday.' },
  { who: 'staff', text: 'Party of 8 · Sat 19:30 · terrace · GF noted', sub: 'Staff alert · H360 dashboard' },
];

const LANGS = ['English', 'Maltese', 'Italian'] as const;

const BRAIN_STATES = [
  { label: 'Menu sync', value: 'Live · H360', ok: true },
  { label: 'Learning', value: 'Gluten-free phrasing', ok: false },
  { label: 'Language', value: 'EN · MT detected', ok: true },
] as const;

function WaveBars({ active }: { active: boolean }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: 20 }}>
      {[0, 1, 2, 3, 4].map((i) => (
        <m.div
          key={i}
          animate={active ? { height: [4, 14 + (i % 2) * 4, 6, 16] } : { height: 3 }}
          transition={active ? { repeat: Infinity, duration: 0.5 + i * 0.05, ease: 'easeInOut' } : { duration: 0.2 }}
          style={{ width: 3, borderRadius: 99, background: '#86efac' }}
        />
      ))}
    </div>
  );
}

function CompactOrb({ speaking, state }: { speaking: boolean; state: 'ring' | 'listen' | 'speak' | 'learn' }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    ref.current?.play().catch(() => {});
  }, []);

  const label = state === 'ring' ? 'RING' : state === 'speak' ? 'SPEAKING' : state === 'learn' ? 'LEARNING' : 'LISTENING';

  return (
    <div
      style={{
        position: 'relative',
        borderRadius: 18,
        overflow: 'hidden',
        aspectRatio: '1',
        maxWidth: 168,
        width: '100%',
        margin: '0 auto',
        boxShadow: speaking ? '0 0 0 2px rgba(74,222,128,0.5), 0 0 40px rgba(74,222,128,0.2)' : '0 0 0 1px rgba(74,222,128,0.2)',
        border: '1px solid rgba(74,222,128,0.25)',
      }}
    >
      <video
        ref={ref}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={AI_AGENTS_HERO_POSTER}
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%' }}
      >
        <source src={AI_AGENTS_HERO_VIDEO} type="video/mp4" />
      </video>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 10, left: 10, right: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 6 }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <m.span
            animate={speaking ? { opacity: [1, 0.35, 1] } : { opacity: 1 }}
            transition={{ repeat: Infinity, duration: 1.1 }}
            style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ade80', flexShrink: 0 }}
          />
          <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: '0.1em', color: '#fff' }}>{label}</span>
        </span>
        {speaking && <WaveBars active />}
      </div>
    </div>
  );
}

type HeroCopy = {
  hook: string;
  guestGain: string;
  ownerPain: string;
  wedge: string;
  h1: string;
};

export default function VoiceHostConsole({ hero }: { hero: HeroCopy }) {
  const reduce = useReducedMotion();
  const consoleRef = useH360Reveal<HTMLDivElement>(0.08);
  const [ringing, setRinging] = useState(true);
  const [visibleLines, setVisibleLines] = useState<Line[]>([]);
  const [aiSpeaking, setAiSpeaking] = useState(false);
  const [bookingLocked, setBookingLocked] = useState(false);
  const [narrow, setNarrow] = useState(false);

  useEffect(() => {
    const fn = () => setNarrow(window.innerWidth < 768);
    fn();
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);

  useEffect(() => {
    if (reduce) {
      setRinging(false);
      setVisibleLines(SCRIPT);
      setBookingLocked(true);
      return;
    }

    let cancelled = false;
    const run = async () => {
      setRinging(true);
      setVisibleLines([]);
      setAiSpeaking(false);
      setBookingLocked(false);
      await wait(1200);
      if (cancelled) return;
      setRinging(false);

      for (let i = 0; i < SCRIPT.length; i++) {
        if (cancelled) return;
        const line = SCRIPT[i];
        setAiSpeaking(line.who === 'ai');
        setVisibleLines((prev) => [...prev, line]);
        if (line.who === 'ai' && line.text.includes('Noted')) setBookingLocked(true);
        await wait(line.who === 'ai' ? 2000 : 1600);
      }
      setAiSpeaking(false);
      await wait(2200);
      if (!cancelled) run();
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [reduce]);

  const orbState = ringing ? 'ring' : aiSpeaking ? 'speak' : bookingLocked ? 'learn' : 'listen';

  return (
    <div
      ref={consoleRef}
      className="h360-rv"
      style={{
        borderRadius: 24,
        border: '1px solid rgba(74,222,128,0.2)',
        background: 'linear-gradient(165deg, rgba(6,20,10,0.95) 0%, rgba(10,10,10,0.98) 100%)',
        boxShadow: '0 40px 100px rgba(0,0,0,0.55), inset 0 1px 0 rgba(74,222,128,0.08)',
        overflow: 'hidden',
      }}
    >
      {/* Console header */}
      <div
        style={{
          padding: '12px 16px',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: 10,
          background: 'rgba(0,0,0,0.35)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <m.span animate={{ opacity: ringing ? [1, 0.4, 1] : 1 }} transition={{ repeat: ringing ? Infinity : 0, duration: 0.9 }} style={{ width: 8, height: 8, borderRadius: '50%', background: ringing ? '#fbbf24' : '#22c55e' }} />
          <span style={{ fontSize: 12, fontWeight: 800, color: '#fff', fontFamily: FONT_DISPLAY, letterSpacing: '0.06em' }}>HOST · {ringing ? 'INCOMING' : 'LIVE'}</span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {LANGS.map((lang) => (
            <span key={lang} style={{ fontSize: 10, fontWeight: 700, padding: '4px 10px', borderRadius: 99, border: '1px solid rgba(74,222,128,0.25)', color: 'rgba(255,255,255,0.7)', background: 'rgba(74,222,128,0.06)' }}>
              {lang}
            </span>
          ))}
        </div>
        <button
          type="button"
          onClick={() => openH360Arc()}
          style={{
            marginLeft: narrow ? 0 : 'auto',
            fontSize: 11,
            fontWeight: 700,
            padding: '8px 14px',
            borderRadius: 99,
            border: '1px solid rgba(74,222,128,0.35)',
            background: 'rgba(74,222,128,0.1)',
            color: G.greenLt,
            cursor: 'pointer',
            fontFamily: FONT_DISPLAY,
          }}
        >
          Free ARC audit →
        </button>
      </div>

      {/* Hero copy — one headline, one line; rest for SEO/AEO */}
      <div style={{ padding: '20px 20px 0', maxWidth: 680 }}>
        <h2
          style={{
            fontSize: 'clamp(24px, 5vw, 34px)',
            fontWeight: 800,
            lineHeight: 1.12,
            color: '#fff',
            margin: '0 0 8px',
            letterSpacing: '-0.035em',
            fontFamily: FONT_DISPLAY,
          }}
          data-speakable
        >
          {hero.hook}
        </h2>
        <p style={{ fontSize: 'clamp(15px, 2.5vw, 17px)', fontWeight: 600, color: G.greenLt, lineHeight: 1.4, margin: 0 }}>{hero.guestGain}</p>
        <p style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)' }} data-speakable>
          {hero.h1}. {hero.ownerPain} {hero.wedge}
        </p>
      </div>

      {/* Main console body */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: narrow ? '1fr' : '168px 1fr',
          gap: narrow ? 16 : 20,
          padding: '20px 16px 16px',
          alignItems: 'start',
        }}
      >
        <CompactOrb speaking={aiSpeaking && !ringing} state={orbState} />

        <div style={{ minWidth: 0, borderRadius: 16, border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.4)', overflow: 'hidden' }}>
          <div style={{ padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.5)' }}>Live transcript</span>
            <span style={{ fontSize: 10, fontWeight: 700, color: ringing ? '#fbbf24' : '#4ade80', letterSpacing: '0.08em' }}>{ringing ? 'WAITING' : 'ON CALL'}</span>
          </div>
          <div style={{ padding: '12px 14px 14px', minHeight: narrow ? 200 : 220, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <AnimatePresence>
              {visibleLines.map((line, i) => (
                <m.div
                  key={`${line.text}-${i}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ alignSelf: line.who === 'guest' ? 'flex-end' : 'flex-start', maxWidth: '94%' }}
                >
                  {line.who === 'staff' ? (
                    <div style={{ background: 'rgba(251,191,36,0.12)', border: '1px solid rgba(251,191,36,0.35)', borderRadius: 12, padding: '10px 12px' }}>
                      <div style={{ fontSize: 10, fontWeight: 700, color: '#fbbf24', marginBottom: 3 }}>{line.sub}</div>
                      <div style={{ fontSize: 12, fontWeight: 700, color: '#fef3c7' }}>{line.text}</div>
                    </div>
                  ) : (
                    <div
                      style={{
                        background: line.who === 'ai' ? 'rgba(9,68,19,0.85)' : 'rgba(255,255,255,0.07)',
                        border: line.who === 'ai' ? '1px solid rgba(74,222,128,0.3)' : '1px solid rgba(255,255,255,0.08)',
                        borderRadius: line.who === 'guest' ? '14px 14px 4px 14px' : '14px 14px 14px 4px',
                        padding: '9px 12px',
                      }}
                    >
                      <div style={{ fontSize: 9, fontWeight: 700, color: line.who === 'ai' ? '#86efac' : 'rgba(255,255,255,0.4)', marginBottom: 3 }}>
                        {line.who === 'ai' ? 'HOST' : 'GUEST'}
                      </div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: '#fff', lineHeight: 1.4 }}>{line.text}</div>
                    </div>
                  )}
                </m.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* System status rows */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', display: 'grid', gridTemplateColumns: narrow ? '1fr' : 'repeat(3, 1fr)' }}>
        <StatusRow
          tag="BRAIN"
          accent="#86efac"
          lines={BRAIN_STATES.map((s) => `${s.label}: ${s.value}`)}
          pulse={bookingLocked}
        />
        <StatusRow
          tag="BOOKING"
          accent="#4ade80"
          lines={bookingLocked ? ['Sat 19:30 · terrace · 8 covers', 'H360 BOOKING · LOCKED · SMS sent'] : ['Checking live availability…', 'H360 BOOKING sync']}
          pulse={bookingLocked}
        />
        <StatusRow
          tag="YOU"
          accent="#fbbf24"
          lines={bookingLocked ? ['Missed calls today: 0', 'Cover saved · approve brain update in dashboard'] : ['Watching every ring', 'Dashboard · transcript · handoff rules']}
          pulse={false}
        />
      </div>
    </div>
  );
}

function StatusRow({ tag, accent, lines, pulse }: { tag: string; accent: string; lines: string[]; pulse: boolean }) {
  return (
    <div style={{ padding: '14px 16px', borderRight: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
        <m.span animate={pulse ? { opacity: [1, 0.5, 1] } : {}} transition={{ repeat: pulse ? Infinity : 0, duration: 1.4 }} style={{ width: 6, height: 6, borderRadius: '50%', background: accent }} />
        <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.12em', color: accent }}>{tag}</span>
      </div>
      {lines.map((line) => (
        <div key={line} style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.82)', lineHeight: 1.45, marginBottom: 2 }}>
          {line}
        </div>
      ))}
    </div>
  );
}

function wait(ms: number) {
  return new Promise<void>((r) => setTimeout(r, ms));
}
