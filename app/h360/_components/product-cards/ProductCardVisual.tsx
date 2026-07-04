'use client';

import { m, useReducedMotion } from 'framer-motion';
import type { ProductVisualId } from './productCardsData';
import VoiceHubCardVisual from './VoiceHubCardVisual';
import { getCardLayout } from './cardLayout';

const WHITE = '#ffffff';
const DARK = '#111111';
const BORDER = '#e5e7eb';
const GREEN = '#094413';

type VisualProps = { playing: boolean; dark?: boolean };

function Sheet({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: 310,
        background: dark ? 'rgba(255,255,255,0.07)' : WHITE,
        borderRadius: 16,
        overflow: 'hidden',
        boxShadow: dark ? '0 16px 48px rgba(0,0,0,0.35)' : '0 8px 32px rgba(0,0,0,0.09)',
        border: dark ? '1px solid rgba(255,255,255,0.12)' : 'none',
      }}
    >
      {children}
    </div>
  );
}

/* ─── Maps rank ─── */
function MapsRankVisual({ playing }: VisualProps) {
  const reduce = useReducedMotion();
  const rows = [
    { r: '#1', name: 'Your Restaurant', sub: 'Valletta · 4.9 ★ · Open', hi: true },
    { r: '#2', name: 'Competitor A', sub: "St. Julian's · 4.2 ★", hi: false },
    { r: '#3', name: 'Competitor B', sub: 'Sliema · 4.0 ★', hi: false },
  ];
  return (
    <Sheet>
      <div style={{ padding: '10px 14px', borderBottom: `1px solid ${BORDER}`, display: 'flex', alignItems: 'center', gap: 8 }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        <span style={{ fontSize: 12, color: '#aaa' }}>restaurants near me — Malta</span>
      </div>
      {rows.map((row, i) => (
        <m.div
          key={row.r}
          initial={{ opacity: 0, x: -12 }}
          animate={playing && !reduce ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
          transition={{ delay: i * 0.35, duration: 0.45 }}
          style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '11px 14px', borderBottom: i < 2 ? `1px solid ${BORDER}` : 'none', background: row.hi ? '#f0fdf4' : WHITE }}
        >
          <div style={{ width: 26, height: 26, borderRadius: 7, background: row.hi ? GREEN : '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <span style={{ fontSize: 10, fontWeight: 800, color: row.hi ? '#fff' : '#999' }}>{row.r}</span>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: row.hi ? 700 : 500, color: row.hi ? DARK : '#777' }}>{row.name}</div>
            <div style={{ fontSize: 11, color: '#bbb', marginTop: 1 }}>{row.sub}</div>
          </div>
          {row.hi && (
            <m.svg initial={{ scale: 0 }} animate={playing ? { scale: 1 } : {}} transition={{ delay: 1.1, type: 'spring' }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></m.svg>
          )}
        </m.div>
      ))}
    </Sheet>
  );
}

/* ─── Direct order ─── */
function DirectOrderVisual({ playing }: VisualProps) {
  const reduce = useReducedMotion();
  const items = [['Braġjoli ×2', '€28.00', false], ['Lampuki Pie', '€16.50', false], ["Ta' Arġentina", '€29.95', true]] as const;
  return (
    <Sheet>
      <div style={{ padding: '11px 14px', borderBottom: `1px solid ${BORDER}`, display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 22, height: 22, borderRadius: 6, background: GREEN, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <span style={{ color: '#fff', fontSize: 8, fontWeight: 900 }}>H3</span>
        </div>
        <span style={{ fontSize: 12, fontWeight: 700, color: DARK }}>Direct order — Table 7</span>
      </div>
      {items.map(([item, price, sel], i) => (
        <m.div
          key={item}
          initial={{ opacity: 0, y: 8 }}
          animate={playing && !reduce ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 + i * 0.25 }}
          style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', borderBottom: `1px solid ${BORDER}` }}
        >
          <div style={{ width: 34, height: 34, borderRadius: 8, background: sel ? '#dcfce7' : '#f3f4f6', flexShrink: 0 }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, color: DARK }}>{item}</div>
            <div style={{ fontSize: 11, color: '#aaa' }}>{price}</div>
          </div>
          {sel ? (
            <m.div animate={playing ? { scale: [1, 1.15, 1] } : {}} transition={{ delay: 1.2, duration: 0.4 }} style={{ width: 26, height: 26, borderRadius: 13, background: GREEN, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            </m.div>
          ) : (
            <div style={{ width: 26, height: 26, borderRadius: 13, border: `1px solid ${BORDER}` }} />
          )}
        </m.div>
      ))}
      <m.div
        initial={{ opacity: 0 }}
        animate={playing && !reduce ? { opacity: 1 } : {}}
        transition={{ delay: 1.4 }}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '10px 14px 14px', padding: '10px 12px', background: DARK, borderRadius: 10 }}
      >
        <span style={{ fontSize: 12, color: '#fff' }}>€0 commission · You keep all</span>
        <span style={{ fontSize: 12, fontWeight: 800, color: '#4ade80' }}>€74.45</span>
      </m.div>
    </Sheet>
  );
}

/* ─── WhatsApp flow ─── */
function WhatsappFlowVisual({ playing }: VisualProps) {
  const reduce = useReducedMotion();
  const w = (o: number) => `rgba(255,255,255,${o})`;
  const steps = ['Sent: Welcome + special offer', 'Sent: Recommended dishes', 'Sent: Weekend special offer'];
  return (
    <div style={{ width: '100%', maxWidth: 300, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
      <m.div initial={{ opacity: 0, y: -8 }} animate={playing && !reduce ? { opacity: 1, y: 0 } : {}} style={{ background: w(0.92), borderRadius: 99, padding: '9px 20px', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 28, height: 28, borderRadius: 14, background: 'linear-gradient(135deg,#f97316,#ec4899)', flexShrink: 0 }} />
        <div>
          <div style={{ fontSize: 10, color: '#888' }}>New guest</div>
          <div style={{ fontSize: 13, fontWeight: 700, color: DARK }}>Maria Borg</div>
        </div>
      </m.div>
      {steps.map((s, i) => (
        <m.div
          key={s}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={playing && !reduce ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.5 + i * 0.55 }}
          style={{ background: w(0.13), border: `1px solid ${w(0.35)}`, borderRadius: 99, padding: '8px 16px', fontSize: 12, color: '#fff', textAlign: 'center', width: '100%' }}
        >
          {s}
        </m.div>
      ))}
      <m.div initial={{ opacity: 0 }} animate={playing && !reduce ? { opacity: 1 } : {}} transition={{ delay: 2.2 }} style={{ fontSize: 12, color: '#fff', fontWeight: 700, marginTop: 4 }}>
        Maria becomes a regular ✓
      </m.div>
    </div>
  );
}

/* ─── Loyalty stamps ─── */
function LoyaltyStampsVisual({ playing }: VisualProps) {
  const reduce = useReducedMotion();
  const w = (o: number) => `rgba(255,255,255,${o})`;
  const pct = playing && !reduce ? 68 : 68;
  return (
    <Sheet dark>
      <div style={{ padding: 18 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg,#f97316,#ef4444)', flexShrink: 0 }} />
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>Your Restaurant</div>
            <div style={{ fontSize: 11, color: w(0.4) }}>6 of 8 stamps</div>
          </div>
        </div>
        <m.div
          key={playing ? 'on' : 'off'}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ background: w(0.06), borderRadius: 12, padding: 14, marginBottom: 12, textAlign: 'center' }}
        >
          <div style={{ fontSize: 40, fontWeight: 800, color: '#fff', lineHeight: 1 }}>6</div>
          <div style={{ fontSize: 11, color: w(0.4), marginTop: 3 }}>stamps earned</div>
        </m.div>
        <div style={{ height: 6, background: w(0.10), borderRadius: 3, overflow: 'hidden' }}>
          <m.div
            initial={{ width: '0%' }}
            animate={playing && !reduce ? { width: `${pct}%` } : { width: `${pct}%` }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            style={{ height: '100%', background: 'linear-gradient(90deg,#f97316,#fbbf24)', borderRadius: 3 }}
          />
        </div>
        <div style={{ fontSize: 11, color: w(0.45), textAlign: 'center', marginTop: 10 }}>2 more visits → free meal</div>
      </div>
    </Sheet>
  );
}

/* ─── Reviews stars ─── */
function ReviewsStarsVisual({ playing }: VisualProps) {
  const reduce = useReducedMotion();
  return (
    <Sheet>
      <div style={{ padding: 16, textAlign: 'center' }}>
        <div style={{ fontSize: 12, color: '#888', marginBottom: 8 }}>Google review request sent</div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 4, marginBottom: 12 }}>
          {[1, 2, 3, 4, 5].map((n) => (
            <m.span
              key={n}
              initial={{ opacity: 0, scale: 0 }}
              animate={playing && !reduce ? { opacity: 1, scale: 1 } : { opacity: 0.3, scale: 1 }}
              transition={{ delay: 0.3 + n * 0.15, type: 'spring' }}
              style={{ fontSize: 22, color: '#eab308' }}
            >
              ★
            </m.span>
          ))}
        </div>
        <m.div initial={{ opacity: 0 }} animate={playing && !reduce ? { opacity: 1 } : {}} transition={{ delay: 1.2 }} style={{ fontSize: 28, fontWeight: 800, color: DARK }}>
          4.9
        </m.div>
        <div style={{ fontSize: 11, color: '#aaa', marginTop: 4 }}>+47 reviews this month</div>
      </div>
    </Sheet>
  );
}

/* ─── Generic step flow (fallback + several products) ─── */
function StepFlowVisual({ playing, steps, icon }: { playing: boolean; steps: ReadonlyArray<readonly string[]>; icon?: string }) {
  const reduce = useReducedMotion();
  return (
    <Sheet>
      <div style={{ padding: '10px 12px' }}>
        {icon && <div style={{ fontSize: 10, fontWeight: 700, color: GREEN, marginBottom: 8, letterSpacing: '0.04em' }}>{icon}</div>}
        {steps.map(([label, detail], i) => (
          <m.div
            key={label}
            initial={{ opacity: 0, x: -10 }}
            animate={playing && !reduce ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.25 + i * 0.4 }}
            style={{ display: 'flex', gap: 8, padding: '7px 0', borderBottom: i < steps.length - 1 ? `1px solid ${BORDER}` : 'none' }}
          >
            <div style={{ width: 20, height: 20, borderRadius: 10, background: i === steps.length - 1 ? GREEN : '#f3f4f6', color: i === steps.length - 1 ? '#fff' : '#999', fontSize: 10, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              {i + 1}
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: DARK, lineHeight: 1.25 }}>{label}</div>
              <div style={{ fontSize: 10, color: '#999', marginTop: 1, lineHeight: 1.3 }}>{detail}</div>
            </div>
          </m.div>
        ))}
      </div>
    </Sheet>
  );
}

/* ─── Counter / chart mini ─── */
function CounterVisual({ playing, label, from, to, suffix }: { playing: boolean; label: string; from: number; to: number; suffix?: string }) {
  const reduce = useReducedMotion();
  return (
    <Sheet>
      <div style={{ padding: 20, textAlign: 'center' }}>
        <div style={{ fontSize: 11, color: '#888', marginBottom: 8 }}>{label}</div>
        <m.div
          key={playing ? `c-${to}` : 'c-off'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <m.span
            initial={{ opacity: 0 }}
            animate={playing && !reduce ? { opacity: 1 } : {}}
            style={{ fontSize: 36, fontWeight: 800, color: DARK, letterSpacing: '-0.03em' }}
          >
            {playing && !reduce ? to : from}{suffix}
          </m.span>
        </m.div>
        <div style={{ marginTop: 12, height: 6, background: '#f0f0f0', borderRadius: 3, overflow: 'hidden' }}>
          <m.div
            initial={{ width: '20%' }}
            animate={playing && !reduce ? { width: '78%' } : { width: '20%' }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
            style={{ height: '100%', background: `linear-gradient(90deg,${GREEN},#4ade80)`, borderRadius: 3 }}
          />
        </div>
      </div>
    </Sheet>
  );
}

const VISUAL_MAP: Record<ProductVisualId, (p: VisualProps) => React.ReactNode> = {
  'google-visibility': (p) => (
    <StepFlowVisual
      playing={p.playing}
      steps={[
        ['Profile stays active', 'Posts · photos · replies'],
        ['You climb search', '"best pizza Malta" → top 3'],
        ['Calls come in', '847 searches → 37 calls'],
      ]}
    />
  ),
  'voice-ai': (p) => <VoiceHubCardVisual playing={p.playing} />,
  'venue-360': (p) => (
    <StepFlowVisual
      playing={p.playing}
      steps={[
        ['Digital menu', 'Guests scan, browse, order on phone'],
        ['Kitchen', 'Orders hit the screen — even offline'],
        ['Owner', 'Sales, tables, and reports — live'],
      ]}
    />
  ),
  'maps-rank': (p) => <MapsRankVisual {...p} />,
  'seo-climb': (p) => <CounterVisual playing={p.playing} label="Google ranking" from={8} to={2} suffix="" />,
  'reviews-stars': (p) => <ReviewsStarsVisual {...p} />,
  'website-phone': (p) => <StepFlowVisual playing={p.playing} steps={[['Menu live', 'Photos + hours on mobile'], ['Google indexes', 'Shows in search'], ['Guest books', 'Walks in tonight']] as const} />,
  'booking-calendar': (p) => <StepFlowVisual playing={p.playing} steps={[['Guest picks time', '7:30pm · party of 4'], ['Slot locks', 'No double booking'], ['You see list', '4 covers confirmed']] as const} />,
  'direct-order': (p) => <DirectOrderVisual {...p} />,
  'qr-pay': (p) => <StepFlowVisual playing={p.playing} steps={[['Scan table QR', 'Bill on phone'], ['Pay in 10 sec', 'No waiter wait'], ['Full margin', '€0 platform fee']]} />,
  'loyalty-stamps': (p) => <LoyaltyStampsVisual {...p} />,
  'wallet-pass': (p) => <StepFlowVisual playing={p.playing} steps={[['First visit', 'Pass saves to wallet'], ['Every order', 'Points auto-credit'], ['Guest returns', 'No app download']]} />,
  'whatsapp-flow': (p) => <WhatsappFlowVisual {...p} />,
  'sms-return': (p) => <StepFlowVisual playing={p.playing} steps={[['Guest lapses', '45 days no visit'], ['TEXT sends offer', '94% open rate'], ['They book', 'Table filled']]} />,
  'event-rsvp': (p) => <CounterVisual playing={p.playing} label="Friday live music RSVPs" from={12} to={48} suffix="" />,
  'daily-revenue': (p) => <CounterVisual playing={p.playing} label="Today's revenue" from={0} to={1200} suffix="€" />,
  'dish-margin': (p) => <StepFlowVisual playing={p.playing} steps={[['Enter recipe', 'Braġjoli ingredients'], ['Real food cost', '€4.20 per plate'], ['Margin shown', '62% — not 70% guess']]} />,
  'stock-alert': (p) => <StepFlowVisual playing={p.playing} steps={[['Closing check', '3 questions · 30 sec'], ['Mozzarella low', 'Order by Tuesday'], ['Never 86', 'Bestseller stays on']]} />,
  'staff-roster': (p) => <StepFlowVisual playing={p.playing} steps={[['Set tomorrow', '4 staff · WhatsApp'], ['They confirm', 'Yes / No in 1 tap'], ['Sick cover', 'Replacement in minutes']]} />,
  'floor-map': (p) => <StepFlowVisual playing={p.playing} steps={[['Table map', '15 tables live'], ['T7 turns red', 'Occupied 48 min'], ['Host seats', 'Next free: T3']]} />,
  'social-feed': (p) => <StepFlowVisual playing={p.playing} steps={[['Video + photos', 'We shoot and edit'], ['Social posts', 'Instagram and Facebook'], ['Paid ads', 'More guests book tables']]} />,
  'decision-hub': (p) => <StepFlowVisual playing={p.playing} steps={[['All signals', 'Orders · reviews · stock'], ['ARC reads it', 'One dashboard'], ['You decide', 'What to fix first']]} />,
  'local-search': (p) => <MapsRankVisual {...p} />,
};

export default function ProductCardVisual({ visual, playing, dark, mobile = false }: { visual: ProductVisualId; playing: boolean; dark?: boolean; mobile?: boolean }) {
  const Comp = VISUAL_MAP[visual];
  const layout = getCardLayout(visual, mobile);
  return (
    <div
      style={{
        height: layout.visualH,
        display: 'flex',
        alignItems: layout.tier === 'compact' ? 'flex-start' : 'center',
        justifyContent: 'center',
        padding: layout.visualPad,
        overflow: 'hidden',
        boxSizing: 'border-box',
      }}
    >
      {Comp({ playing, dark })}
    </div>
  );
}
