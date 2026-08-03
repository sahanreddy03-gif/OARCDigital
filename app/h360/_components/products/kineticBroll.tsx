'use client';

import { useEffect, useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { G, FONT_DISPLAY } from '../tokens';
import type { StackPreviewKind } from './standaloneProductTypes';

type StackItem = {
  label: string;
  short: string;
  preview: StackPreviewKind;
};

const POP_META: Partial<Record<StackPreviewKind, { icon: string; pops: string[] }>> = {
  'maps-rank': { icon: '📍', pops: ['#11 → #3', 'Maps rank climbing', 'Near-me searches'] },
  'aeo-answer': { icon: '✦', pops: ['AI cites you', 'Answer box won', 'Sliema · seafood'] },
  'ai-chat': { icon: '💬', pops: ['Best pasta near me?', 'Your restaurant · 4.8★', 'Walk-ins tonight'] },
  'llm-file': { icon: '◇', pops: ['llms.txt live', 'Entity indexed', 'Machines know you'] },
  article: { icon: '✎', pops: ['Keyword article', 'Copywriter draft', 'Approve · publish'] },
  'gbp-post': { icon: '📣', pops: ['GBP post ready', 'Approve in 30 sec', 'Goes live'] },
  'review-qr': { icon: '⭐', pops: ['Happy? Tap to share', 'One tap → review', 'Table 7'] },
  'review-climb': { icon: '★', pops: ['4.2 → 4.8', '12 → 186 reviews', 'Maps trust'] },
  'social-post': { icon: '📸', pops: ['Food shot edited', 'Caption ready', 'Posted'] },
  reels: { icon: '▶', pops: ['Reel cut', 'Hook in 2 sec', 'Boost queued'] },
  'ad-boost': { icon: '🎯', pops: ['€20 local boost', '2.4k reached', 'Bookings ↑'] },
  'website-live': { icon: '🌐', pops: ['Site live', 'Menu synced', 'Book link on'] },
  schema: { icon: '{ }', pops: ['Restaurant schema', 'Google reads it', 'Rich results'] },
  'menu-sync': { icon: '🍽', pops: ['Menu photo in', 'Live in 10 min', 'No developer'] },
  'kitchen-ticket': { icon: '🧾', pops: ['Table 7 · order in', 'Kitchen ticket', 'NO onions'] },
  'owner-dash': { icon: '📊', pops: ['€1,240 tonight', '52 covers', 'Owner view'] },
  connected: { icon: '⟳', pops: ['Menu synced', 'Kitchen synced', 'Owner synced'] },
  'booking-slot': { icon: '📅', pops: ['Fri 20:00 locked', '4 guests', 'Confirmed'] },
  waitlist: { icon: '⏳', pops: ['Waitlist: 2', 'SMS when free', 'Table turns'] },
  confirm: { icon: '✓', pops: ['Confirm by 18:00', 'Or table releases', 'No no-shows'] },
  'order-qr': { icon: '📱', pops: ['Scan → menu', 'Tap to send', 'Kitchen sees it'] },
  'kitchen-print': { icon: '🖨', pops: ['Order #42', 'Printed kitchen', 'Under 8 sec'] },
  margin: { icon: '€', pops: ['€15 pasta', 'You keep €15', 'No commission'] },
  'pay-qr': { icon: '💳', pops: ['Pay €47.50', '10 sec checkout', 'Table cleared'] },
  'split-bill': { icon: '÷', pops: ['Party of 6', 'Each pays share', 'No bill chase'] },
  tips: { icon: '👍', pops: ['Tip 18%', 'Staff notified', 'Same night'] },
  'stamp-wallet': { icon: '🎫', pops: ['7 / 8 stamps', 'One more visit', 'Reward near'] },
  'auto-stamp': { icon: '⚡', pops: ['Stamp credited', 'No waiter scan', 'Automatic'] },
  reward: { icon: '🎁', pops: ['8th meal free', 'Wallet ping', 'Guest returns'] },
  'pass-add': { icon: '📲', pops: ['Add to Wallet', 'One tap', 'Pass live'] },
  'visit-ping': { icon: '🔔', pops: ['Visit #4', 'Reward unlocked', 'Push sent'] },
  'wa-segment': { icon: '👥', pops: ['47 guests', '30 days quiet', 'Segment ready'] },
  'wa-offer': { icon: '💚', pops: ['Free dessert Fri?', 'Reply YES', 'Booked'] },
  'wa-reply': { icon: '↩', pops: ['YES → Table 4', '20:30 booked', 'From WhatsApp'] },
  'sms-winback': { icon: '📩', pops: ['We miss you', '98% open', 'Book this week'] },
  'sms-open': { icon: '👁', pops: ['Opened', 'Tapped book', 'Win-back works'] },
  'event-rsvp': { icon: '🎵', pops: ['Live music Fri', '38 / 50 RSVP', 'Filling fast'] },
  reminder: { icon: '⏰', pops: ['Tomorrow 8pm', 'Table ready', 'Reminder sent'] },
  soldout: { icon: '🚫', pops: ['SOLD OUT', 'Waitlist open', 'Demand signal'] },
  'daily-num': { icon: '📈', pops: ['€1,200 today', 'Typed at close', 'No POS needed'] },
  trend: { icon: '↑', pops: ['↑ 12% Friday', 'vs last week', 'Trend clear'] },
  forecast: { icon: '🔮', pops: ['Sat: 48 covers', 'Staff hint', 'Prep right'] },
  'dish-cost': { icon: '🧮', pops: ['Pasta €4.20', 'Sell €15', 'Margin clear'] },
  'margin-bar': { icon: '▮', pops: ['72% margin', 'Price alert', 'Chef knows'] },
  'stock-check': { icon: '⚠', pops: ['Mozzarella low', 'Order tomorrow', 'Before service'] },
  'order-list': { icon: '📋', pops: ['Supplier order', '3 items', '30 sec'] },
  'roster-wa': { icon: '📲', pops: ['Saturday roster', 'Tap YES / NO', 'WhatsApp'] },
  'shift-yes': { icon: '✅', pops: ['Marco YES', 'Cover filled', '4 min'] },
  'floor-green': { icon: '🗺', pops: ['Table 9 green', 'Tap to seat', '4 guests'] },
  'seat-tap': { icon: '👆', pops: ['Seat party', 'Floor live', 'Turn faster'] },
};

function PopupChip({ text, icon, delay, accent, x, y }: { text: string; icon: string; delay: number; accent: string; x: string; y: string }) {
  return (
    <m.div
      initial={{ opacity: 0, scale: 0.6, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.85, y: -12 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22, delay }}
      style={{
        position: 'absolute',
        left: x,
        top: y,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '12px 16px',
        borderRadius: 14,
        background: '#fff',
        border: `2px solid ${accent}44`,
        boxShadow: '0 16px 48px rgba(9,68,19,0.12), 0 4px 12px rgba(0,0,0,0.06)',
        maxWidth: 200,
        zIndex: 2,
      }}
    >
      <span style={{ fontSize: 18, lineHeight: 1 }}>{icon}</span>
      <span style={{ fontSize: 13, fontWeight: 700, color: G.text, lineHeight: 1.25, letterSpacing: '-0.02em' }}>{text}</span>
    </m.div>
  );
}

/** Motion B-roll stage — pop-up kinetics, not a static app screenshot */
export function KineticStackStage({ item, accent }: { item: StackItem; accent: string }) {
  const [tick, setTick] = useState(0);
  const meta = POP_META[item.preview] ?? { icon: '◆', pops: [item.short, item.label, 'Live'] };
  const positions = [
    { x: '8%', y: '12%' },
    { x: '48%', y: '8%' },
    { x: '18%', y: '52%' },
    { x: '52%', y: '48%' },
  ];

  useEffect(() => {
    const t = setInterval(() => setTick((n) => n + 1), 3200);
    return () => clearInterval(t);
  }, [item.label]);

  return (
    <div
      style={{
        position: 'relative',
        minHeight: 300,
        borderRadius: 20,
        overflow: 'hidden',
        background: `linear-gradient(145deg, ${G.beige} 0%, #e8e4dc 45%, ${G.greenLt}88 100%)`,
        border: `1px solid ${G.border}`,
      }}
    >
      <m.div
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.08, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
        style={{
          position: 'absolute',
          width: 180,
          height: 180,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${accent}33 0%, transparent 70%)`,
          top: '20%',
          left: '30%',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'absolute', top: 16, left: 18, zIndex: 3 }}>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: G.green, marginBottom: 4 }}>LIVE MOTION</div>
        <div style={{ fontSize: 18, fontWeight: 800, color: G.text, fontFamily: FONT_DISPLAY, letterSpacing: '-0.03em' }}>{item.label}</div>
      </div>

      <AnimatePresence mode="wait">
        <m.div key={`${item.label}-${tick}`} style={{ position: 'absolute', inset: 0 }}>
          {meta.pops.slice(0, 3).map((pop, i) => (
            <PopupChip key={pop} text={pop} icon={meta.icon} delay={0.12 * i} accent={accent} x={positions[i].x} y={positions[i].y} />
          ))}
        </m.div>
      </AnimatePresence>

      <m.div
        animate={{ x: ['-120%', '140%'] }}
        transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 1.2, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 3,
          background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
          opacity: 0.5,
        }}
      />
    </div>
  );
}
