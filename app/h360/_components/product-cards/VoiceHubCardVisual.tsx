'use client';

import { m, useReducedMotion } from 'framer-motion';

const GREEN = '#094413';

/** Hub card only — compact phone preview (full demo lives on the product page). */
export default function VoiceHubCardVisual({ playing }: { playing: boolean }) {
  const reduce = useReducedMotion();

  return (
    <div
      style={{
        width: '100%',
        maxWidth: 280,
        borderRadius: 18,
        overflow: 'hidden',
        background: 'linear-gradient(165deg,#0a0a0a,#141414)',
        border: '1px solid rgba(255,255,255,0.1)',
        boxShadow: '0 16px 40px rgba(0,0,0,0.25)',
      }}
    >
      <div style={{ padding: '10px 12px', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 28, height: 28, borderRadius: 8, background: GREEN, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#bbf7d0" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </div>
        <div>
          <div style={{ fontSize: 11, fontWeight: 800, color: '#fff' }}>H360 Voice Host</div>
          <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.45)' }}>24/7 · Malta line</div>
        </div>
        <m.span
          animate={playing && !reduce ? { opacity: [1, 0.4, 1] } : {}}
          transition={{ repeat: Infinity, duration: 1.2 }}
          style={{ marginLeft: 'auto', fontSize: 9, fontWeight: 700, color: '#4ade80', letterSpacing: '0.08em' }}
        >
          LIVE
        </m.span>
      </div>
      <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        <m.div
          initial={{ opacity: 0, y: 6 }}
          animate={playing && !reduce ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          style={{ alignSelf: 'flex-end', maxWidth: '88%', padding: '8px 10px', borderRadius: '12px 12px 4px 12px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <div style={{ fontSize: 8, fontWeight: 700, color: 'rgba(255,255,255,0.4)', marginBottom: 3 }}>GUEST</div>
          <div style={{ fontSize: 11, fontWeight: 600, color: '#fff', lineHeight: 1.35 }}>Table for 8 Saturday evening?</div>
        </m.div>
        <m.div
          initial={{ opacity: 0, y: 6 }}
          animate={playing && !reduce ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          style={{ alignSelf: 'flex-start', maxWidth: '92%', padding: '8px 10px', borderRadius: '12px 12px 12px 4px', background: 'rgba(9,68,19,0.9)', border: '1px solid rgba(74,222,128,0.3)' }}
        >
          <div style={{ fontSize: 8, fontWeight: 700, color: '#86efac', marginBottom: 3 }}>H360 HOST</div>
          <div style={{ fontSize: 11, fontWeight: 600, color: '#fff', lineHeight: 1.35 }}>Terrace 7:30pm open — lock it in?</div>
        </m.div>
        <m.div
          initial={{ opacity: 0 }}
          animate={playing && !reduce ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          style={{ marginTop: 2, padding: '7px 10px', borderRadius: 8, background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.2)', fontSize: 10, fontWeight: 700, color: '#86efac', textAlign: 'center' }}
        >
          Booking locked · SMS sent
        </m.div>
      </div>
    </div>
  );
}
