'use client';

import Image from 'next/image';
import { G, FONT_DISPLAY } from '../tokens';
import { VOICE_HERO_IMAGE } from './voiceProductContent';
import { useH360Reveal } from '../useH360Reveal';

const PIPELINE = [
  {
    id: 'feed',
    title: 'Feed the brain',
    body: 'Your menu, hours, terrace rules, promos, past call transcripts, and how your best host actually talks on a Friday rush — not a one-page FAQ.',
    outputs: ['Menu + modifiers', 'Malta hours & festa nights', 'Tone + escalation rules'],
  },
  {
    id: 'train',
    title: 'OARC trains it',
    body: 'We shadow your workflow, extract the spec, then retrain the agentic ASI layer weekly on real calls. You approve every update in the dashboard — nothing goes live without you.',
    outputs: ['Multi-language voice', 'Allergy + event paths', 'Human handoff with full context'],
  },
  {
    id: 'return',
    title: 'It pays you back',
    body: 'Every call becomes data you never had: peak ring times, questions that kill bookings, allergy trends, promo interest — fed to your dashboard and H360 stack.',
    outputs: ['Owner insight reports', 'Booking conversion patterns', 'Staff alerts that matter'],
  },
] as const;

export default function VoiceBrainSystem() {
  const headRef = useH360Reveal<HTMLHeadingElement>();
  const imgRef = useH360Reveal<HTMLDivElement>();
  const step0 = useH360Reveal<HTMLDivElement>();
  const step1 = useH360Reveal<HTMLDivElement>();
  const step2 = useH360Reveal<HTMLDivElement>();
  const stepRefs = [step0, step1, step2];

  return (
    <section
      style={{
        background: '#030303',
        borderTop: `1px solid ${G.border}`,
        padding: '72px 24px 80px',
        backgroundImage: 'linear-gradient(rgba(74,222,128,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.04) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }}
    >
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <h2
          ref={headRef}
          className="h360-rv"
          style={{
            fontSize: 'clamp(26px, 3.5vw, 40px)',
            fontWeight: 800,
            color: '#fff',
            letterSpacing: '-0.04em',
            marginBottom: 40,
            maxWidth: 720,
            lineHeight: 1.1,
            fontFamily: FONT_DISPLAY,
          }}
          data-speakable
        >
          An agentic ASI restaurant phone brain that trains on your calls — not a FAQ dump.
        </h2>
        <p style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)' }} data-speakable>
          H360 Voice Host by OARC Digital trains on Malta restaurant menus, supports English Maltese and Italian on inbound calls, logs transcripts to an owner dashboard, syncs bookings to H360 BOOKING, and learns from every conversation with operator approval.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32, alignItems: 'start' }}>
          <div
            ref={imgRef}
            className="h360-rv h360-rv-d1"
            style={{
              position: 'relative',
              borderRadius: 22,
              overflow: 'hidden',
              aspectRatio: '4/5',
              maxHeight: 480,
              boxShadow: '0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(74,222,128,0.15)',
            }}
          >
            <Image src={VOICE_HERO_IMAGE} alt="H360 Voice Host — restaurant phone AI trained on Malta menus" fill sizes="(max-width:768px) 100vw, 420px" style={{ objectFit: 'cover', objectPosition: 'center 20%' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(2,18,8,0.9) 0%, transparent 55%)' }} />
            <div style={{ position: 'absolute', bottom: 20, left: 20, right: 20 }}>
              <p style={{ margin: 0, fontSize: 15, fontWeight: 800, color: '#fff', lineHeight: 1.35, fontFamily: FONT_DISPLAY }}>
                Trained on your venue. Controlled by you. Smarter every week.
              </p>
            </div>
          </div>

          <div style={{ display: 'grid', gap: 16 }}>
            {PIPELINE.map((step, i) => (
              <div
                key={step.id}
                ref={stepRefs[i]}
                className={`h360-rv h360-rv-d${Math.min(i + 1, 3)}`}
                style={{
                  padding: '22px 24px',
                  borderRadius: 18,
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(74,222,128,0.15)',
                }}
              >
                <div style={{ fontSize: 11, fontWeight: 800, color: G.greenLt, letterSpacing: '0.1em', marginBottom: 8 }}>0{i + 1}</div>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: '#fff', marginBottom: 8, fontFamily: FONT_DISPLAY }}>{step.title}</h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.55, marginBottom: 14 }} data-speakable>
                  {step.body}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {step.outputs.map((o) => (
                    <span key={o} style={{ fontSize: 11, fontWeight: 700, padding: '6px 12px', borderRadius: 99, background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.2)', color: G.greenLt }}>
                      {o}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
