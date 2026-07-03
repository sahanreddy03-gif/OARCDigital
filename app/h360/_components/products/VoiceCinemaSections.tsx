'use client';

import { m } from 'framer-motion';
import { G, FONT_DISPLAY } from '../tokens';
import { openH360Arc } from '../openH360Arc';

/** Sameday-style "Talk to AI" — opens ARC with voice-host audit framing */
export function VoiceTalkCTA() {
  return (
    <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px 40px' }}>
      <m.button
        type="button"
        onClick={() => openH360Arc()}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 16,
          width: '100%',
          maxWidth: 420,
          margin: '0 auto',
          padding: '18px 28px',
          borderRadius: 99,
          border: 'none',
          cursor: 'pointer',
          background: '#0a0a0a',
          boxShadow: '0 0 0 1px rgba(74,222,128,0.3), 0 20px 60px rgba(0,0,0,0.5)',
          fontFamily: FONT_DISPLAY,
        }}
      >
        <m.span
          animate={{ boxShadow: ['0 0 0 rgba(74,222,128,0)', '0 0 28px rgba(74,222,128,0.6)', '0 0 0 rgba(74,222,128,0)'] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{
            width: 44,
            height: 44,
            borderRadius: '50%',
            background: 'radial-gradient(circle, #4ade80 0%, #094413 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            <line x1="12" y1="19" x2="12" y2="23" />
            <line x1="8" y1="23" x2="16" y2="23" />
          </svg>
        </m.span>
        <span style={{ fontSize: 15, fontWeight: 800, color: '#fff', letterSpacing: '0.04em' }}>TALK WITH H360 VOICE HOST</span>
      </m.button>
      <p style={{ textAlign: 'center', marginTop: 14, fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>
        Or{' '}
        <a href="#h360-try" style={{ color: G.greenLt, fontWeight: 700, textDecoration: 'underline' }}>
          get your free ARC audit
        </a>{' '}
        — see what missed calls cost you
      </p>
    </div>
  );
}

const WEDGES = [
  { title: 'Reservations', detail: 'Every ring → slot locked · SMS sent' },
  { title: 'VIP routing', detail: 'Regulars flagged · manager line when needed' },
  { title: 'Private dining', detail: 'Large parties briefed · events looped in' },
] as const;

/** Founder-sized wedge — restaurants column from Greg Isenberg framework */
export function VoiceFounderWedge() {
  return (
    <section
      style={{
        background: '#030303',
        borderTop: `1px solid ${G.border}`,
        padding: '72px 24px 80px',
        backgroundImage: 'linear-gradient(rgba(74,222,128,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.03) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }}
    >
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: G.greenLt, marginBottom: 12 }}>FOUNDER-SIZED WEDGE</p>
        <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.04em', marginBottom: 8, maxWidth: 720, lineHeight: 1.1, fontFamily: FONT_DISPLAY }}>
          The boring job people already pay for.
        </h2>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', maxWidth: 560, marginBottom: 36, lineHeight: 1.5 }}>
          Phone host that picks up every time — reservations, VIP routing, private dining. Malta restaurants bleed covers when nobody answers.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
          {WEDGES.map((w, i) => (
            <m.div
              key={w.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              style={{
                padding: 24,
                borderRadius: 18,
                border: '1px solid rgba(255,255,255,0.12)',
                background: 'rgba(255,255,255,0.04)',
                boxShadow: 'inset 0 0 0 1px rgba(74,222,128,0.08)',
              }}
            >
              <div style={{ fontSize: 18, fontWeight: 800, color: G.greenLt, marginBottom: 8, fontFamily: FONT_DISPLAY }}>{w.title}</div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>{w.detail}</div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const SHADOW_STEPS = [
  {
    id: 'watch',
    title: 'Watch 10–20 runs',
    sub: 'The product hides inside real workflow details.',
    items: ['Record your host on a busy night', 'Narrate every step out loud', 'Mark copy-paste spots', 'Document edge cases', 'Note manager moments'],
  },
  {
    id: 'extract',
    title: 'Extract the spec',
    sub: 'Turn human motion into machine rules.',
    items: ['Trigger · Context · Tools', 'Rules · Approval gates', 'Escalation paths', 'Success = booked cover'],
  },
  {
    id: 'trusted',
    title: 'Trusted agent',
    sub: 'AGI host → ASI brain. Only OARC trains it.',
    items: ['Knows the job', 'Knows its limits', 'Knows when to ask you'],
  },
] as const;

/** Shadow the human — training methodology (screenshot framework) */
export function VoiceShadowTraining() {
  return (
    <section style={{ background: G.beige, borderTop: `1px solid ${G.border}`, padding: '72px 24px 80px' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: G.green, marginBottom: 12 }}>HOW WE TRAIN THE BRAIN</p>
        <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 800, color: G.text, letterSpacing: '-0.04em', marginBottom: 8, maxWidth: 720, lineHeight: 1.1, fontFamily: FONT_DISPLAY }}>
          Shadow the human before we build.
        </h2>
        <p style={{ fontSize: 16, color: G.textMuted, maxWidth: 560, marginBottom: 40, lineHeight: 1.5 }}>
          Generic bots read a FAQ. H360 watches your best host handle allergies, large parties, and festa nights — then self-educates every week you approve.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, position: 'relative' }}>
          {SHADOW_STEPS.map((step, i) => (
            <m.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                position: 'relative',
                padding: 24,
                borderRadius: 20,
                background: G.bg,
                border: `2px solid ${G.border}`,
                boxShadow: '4px 4px 0 rgba(9,68,19,0.15)',
              }}
            >
              <div style={{ fontSize: 11, fontWeight: 800, color: G.green, letterSpacing: '0.1em', marginBottom: 8 }}>0{i + 1}</div>
              <h3 style={{ fontSize: 20, fontWeight: 800, color: G.text, marginBottom: 6, fontFamily: FONT_DISPLAY }}>{step.title}</h3>
              <p style={{ fontSize: 13, color: G.textMuted, marginBottom: 16, lineHeight: 1.45 }}>{step.sub}</p>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {step.items.map((item) => (
                  <li key={item} style={{ fontSize: 13, fontWeight: 600, color: G.text, display: 'flex', gap: 8 }}>
                    <span style={{ color: G.green }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
              {i < SHADOW_STEPS.length - 1 && (
                <div style={{ display: 'none' }} aria-hidden />
              )}
            </m.div>
          ))}
        </div>

        <m.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ marginTop: 32, padding: '16px 20px', borderRadius: 14, background: G.greenLt, fontSize: 14, fontWeight: 700, color: G.text, lineHeight: 1.5, maxWidth: 720 }}
        >
          Example: your host is really doing urgency, terrace capacity, allergies, VIP names, and private dining — we extract that spec, then the brain runs it 24/7.
        </m.p>
      </div>
    </section>
  );
}

const SCORES = [
  { label: 'Frequency', value: 'Hourly', detail: 'Friday lunch to Sunday close — phone never stops' },
  { label: 'Pain', value: 'Missed', detail: 'Voicemail · slow callback · covers walk next door' },
  { label: 'Finish line', value: 'Booked', detail: 'Slot locked · SMS sent · staff alerted' },
  { label: 'Tools', value: 'H360', detail: 'BOOKING · WhatsApp · Google · your line' },
  { label: 'Budget', value: 'You pay', detail: 'Host overtime · agency · missed covers today' },
] as const;

/** Pick a workflow with a paycheck attached — scored for restaurant phone */
export function VoiceWorkflowScore() {
  return (
    <section style={{ background: '#030303', borderTop: `1px solid ${G.border}`, padding: '72px 24px 80px' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: G.greenLt, marginBottom: 12 }}>SCORE THE JOB</p>
        <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.04em', marginBottom: 8, maxWidth: 720, lineHeight: 1.1, fontFamily: FONT_DISPLAY }}>
          A workflow with a paycheck attached.
        </h2>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', maxWidth: 620, marginBottom: 36, lineHeight: 1.5 }}>
          Work that happens often, has a finish line, touches software, and costs money when dropped — restaurant phone hits every box.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 12 }}>
          {SCORES.map((s, i) => (
            <m.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              style={{
                padding: '20px 16px',
                borderRadius: 16,
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.04)',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.45)', marginBottom: 8 }}>{s.label.toUpperCase()}</div>
              <div style={{ fontSize: 22, fontWeight: 800, color: G.greenLt, marginBottom: 8, fontFamily: FONT_DISPLAY }}>{s.value}</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', lineHeight: 1.4 }}>{s.detail}</div>
            </m.div>
          ))}
        </div>

        <div style={{ marginTop: 28, padding: '18px 22px', borderRadius: 14, background: 'rgba(127,29,29,0.35)', border: '1px solid rgba(248,113,113,0.25)' }}>
          <p style={{ margin: 0, fontSize: 14, fontWeight: 700, color: '#fecaca', lineHeight: 1.5 }}>
            First rep: one niche · Malta restaurants · phone host · score 5/5 · ship the brain.
          </p>
        </div>
      </div>
    </section>
  );
}
