'use client';

import { useEffect, useState } from 'react';
import { m, useReducedMotion } from 'framer-motion';
import { C } from '../tokens';
import { MapsRankClimb, SocialFeedVisual } from './logicVisuals';

const GREEN = '#4ade80';
const RED = '#f87171';
const AMBER = '#fbbf24';

export type PremiumCompareId =
  | 'google-maps-rank'
  | 'social-feed-mock'
  | 'website-before-after'
  | 'rest-system-hub'
  | 'booking-fee-compare'
  | 'pay-terminal-compare'
  | 'event-rsvp-fill'
  | 'analytics-trend'
  | 'recipe-margin'
  | 'stock-alert'
  | 'staff-whatsapp'
  | 'floor-map-live';

function CompareShell({
  title,
  subtitle,
  brainLine,
  children,
}: {
  title: string;
  subtitle?: string;
  brainLine?: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ width: '100%' }}>
      <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, color: C.white, letterSpacing: '-0.03em', margin: '0 0 8px' }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)' }} data-speakable>{subtitle}</p>
      )}
      {children}
      {brainLine && (
        <p style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)' }} data-speakable>
          {brainLine}
        </p>
      )}
    </div>
  );
}

function VsColumns({ left, right }: { left: React.ReactNode; right: React.ReactNode }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
      {left}
      {right}
    </div>
  );
}

function BadCol({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <m.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      style={{ background: C.card2, border: `1px solid ${C.border}`, borderRadius: 16, padding: 20 }}
    >
      <div style={{ fontSize: 12, fontWeight: 700, color: RED, marginBottom: 16, letterSpacing: '0.06em' }}>{label}</div>
      {children}
    </m.div>
  );
}

function GoodCol({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <m.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      style={{ background: 'rgba(74,222,128,0.06)', border: `2px solid ${GREEN}`, borderRadius: 16, padding: 20 }}
    >
      <div style={{ fontSize: 12, fontWeight: 700, color: GREEN, marginBottom: 16, letterSpacing: '0.06em' }}>{label}</div>
      {children}
    </m.div>
  );
}

export function GoogleMapsRankCompare({ title, subtitle, brainLine }: { title: string; subtitle?: string; brainLine?: string }) {
  return (
    <CompareShell title={title} subtitle={subtitle} brainLine={brainLine}>
      <VsColumns
        left={
          <BadCol label="STALE · DIY">
            <div style={{ fontSize: 12, color: C.muted, marginBottom: 12 }}>Maps · last post 8 months ago</div>
            <div style={{ opacity: 0.85, pointerEvents: 'none' }}>
              <MapsRankClimb compact targetRank={11} />
            </div>
            <div style={{ fontSize: 24, fontWeight: 800, color: C.white, marginTop: 12, textAlign: 'center' }}>12 calls</div>
          </BadCol>
        }
        right={
          <GoodCol label="H360 VISIBILITY">
            <MapsRankClimb compact />
            <div style={{ display: 'flex', gap: 16, marginTop: 14, justifyContent: 'center' }}>
              <div>
                <div style={{ fontSize: 24, fontWeight: 800, color: C.white }}>847</div>
                <div style={{ fontSize: 10, color: C.muted }}>searches</div>
              </div>
              <div style={{ fontSize: 20, color: GREEN, alignSelf: 'center' }}>→</div>
              <div>
                <div style={{ fontSize: 24, fontWeight: 800, color: GREEN }}>37</div>
                <div style={{ fontSize: 10, color: C.muted }}>walk-ins</div>
              </div>
            </div>
          </GoodCol>
        }
      />
    </CompareShell>
  );
}

export function SocialFeedCompare({ title, subtitle, brainLine }: { title: string; subtitle?: string; brainLine?: string }) {
  return (
    <CompareShell title={title} subtitle={subtitle} brainLine={brainLine}>
      <VsColumns
        left={
          <BadCol label="BUFFER / DIY">
            <div style={{ opacity: 0.9, pointerEvents: 'none' }}>
              <SocialFeedVisual compact postCount={0} />
            </div>
            <div style={{ textAlign: 'center', marginTop: 12, fontSize: 24, fontWeight: 800, color: RED }}>0/wk</div>
          </BadCol>
        }
        right={
          <GoodCol label="H360 SOCIAL">
            <SocialFeedVisual compact postCount={3} />
            <div style={{ display: 'flex', gap: 16, marginTop: 14, justifyContent: 'center' }}>
              <div>
                <div style={{ fontSize: 24, fontWeight: 800, color: C.white }}>4/wk</div>
                <div style={{ fontSize: 10, color: C.muted }}>posts</div>
              </div>
              <div style={{ fontSize: 20, color: GREEN, alignSelf: 'center' }}>→</div>
              <div>
                <div style={{ fontSize: 24, fontWeight: 800, color: GREEN }}>2.4k</div>
                <div style={{ fontSize: 10, color: C.muted }}>reach</div>
              </div>
            </div>
          </GoodCol>
        }
      />
    </CompareShell>
  );
}

export function WebsiteBeforeAfterCompare({ title, subtitle, brainLine }: { title: string; subtitle?: string; brainLine?: string }) {
  return (
    <CompareShell title={title} subtitle={subtitle} brainLine={brainLine}>
      <VsColumns
        left={
          <BadCol label="NO SITE · TRIPADVISOR OWNS YOU">
            <div style={{ background: '#fff', borderRadius: 10, padding: 12, color: '#333', fontSize: 11 }}>
              <div style={{ fontWeight: 700, marginBottom: 6 }}>TripAdvisor — your restaurant</div>
              <div style={{ color: '#999' }}>Hours maybe wrong · menu buried · ads everywhere</div>
            </div>
            <p style={{ fontSize: 12, color: C.muted, margin: '12px 0 0' }}>Google shows a third party — not your menu</p>
          </BadCol>
        }
        right={
          <GoodCol label="H360 WEBSITE">
            <div style={{ background: '#fff', borderRadius: 10, padding: 12, color: '#111' }}>
              <div style={{ fontSize: 13, fontWeight: 800, marginBottom: 8 }}>Ta&apos; Marija</div>
              <div style={{ fontSize: 10, color: GREEN, marginBottom: 8 }}>Open today · 12:00–23:00</div>
              {['Antipasti', 'Pasta', 'Fish'].map((m) => (
                <div key={m} style={{ fontSize: 11, padding: '6px 0', borderBottom: '1px solid #eee' }}>
                  {m}
                </div>
              ))}
              <div style={{ marginTop: 10, fontSize: 10, fontWeight: 700, color: GREEN }}>Book a table →</div>
            </div>
            <p style={{ fontSize: 12, color: C.muted, margin: '12px 0 0' }}>Live in 10 min · updates via WhatsApp</p>
          </GoodCol>
        }
      />
    </CompareShell>
  );
}

export function RestSystemHubCompare({ title, subtitle, brainLine }: { title: string; subtitle?: string; brainLine?: string }) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % 3), 2000);
    return () => clearInterval(t);
  }, []);
  const panels = [
    { label: 'Digital menu', sub: 'Guests scan · order' },
    { label: 'Kitchen screen', sub: 'Tickets routed' },
    { label: 'Owner dashboard', sub: 'Sold today · live' },
  ];
  return (
    <CompareShell title={title} subtitle={subtitle} brainLine={brainLine}>
      <VsColumns
        left={
          <BadCol label="12 DISCONNECTED TOOLS">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {['Booking', 'Reviews', 'POS?', 'WhatsApp', 'Excel', 'Paper'].map((t) => (
                <span key={t} style={{ fontSize: 10, padding: '4px 8px', background: 'rgba(248,113,113,0.15)', borderRadius: 6, color: '#fca5a5' }}>
                  {t}
                </span>
              ))}
            </div>
            <p style={{ fontSize: 12, color: C.muted, margin: '14px 0 0' }}>Nothing shares guest or menu data</p>
          </BadCol>
        }
        right={
          <GoodCol label="H360 FULL SYSTEM">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {panels.map((p, i) => (
                <m.div
                  key={p.label}
                  animate={active === i ? { borderColor: GREEN, background: 'rgba(74,222,128,0.12)' } : {}}
                  style={{
                    padding: '12px 14px',
                    borderRadius: 10,
                    border: `1px solid ${active === i ? GREEN : C.border}`,
                    background: active === i ? 'rgba(74,222,128,0.08)' : 'rgba(0,0,0,0.2)',
                  }}
                >
                  <div style={{ fontSize: 13, fontWeight: 700, color: C.white }}>{p.label}</div>
                  <div style={{ fontSize: 11, color: C.muted }}>{p.sub}</div>
                </m.div>
              ))}
            </div>
            <p style={{ fontSize: 12, color: C.muted, margin: '12px 0 0' }}>One login · one source of truth</p>
          </GoodCol>
        }
      />
    </CompareShell>
  );
}

export function BookingFeeCompare({ title, subtitle, brainLine }: { title: string; subtitle?: string; brainLine?: string }) {
  return (
    <CompareShell title={title} subtitle={subtitle} brainLine={brainLine}>
      <VsColumns
        left={
          <BadCol label="OPENTABLE · 30 COVERS FRIDAY">
            <div style={{ fontSize: 13, color: '#aaa', marginBottom: 8 }}>€2 per cover × 30 guests</div>
            <m.div
              initial={{ width: 0 }}
              whileInView={{ width: '72%' }}
              viewport={{ once: true }}
              style={{ height: 36, background: RED, borderRadius: 8, marginBottom: 8, display: 'flex', alignItems: 'center', paddingLeft: 12 }}
            >
              <span style={{ fontSize: 12, fontWeight: 700, color: '#fff' }}>€60 fee · this night</span>
            </m.div>
            <div style={{ fontSize: 15, fontWeight: 800, color: RED }}>€180/mo typical</div>
            <p style={{ fontSize: 12, color: C.muted, margin: '10px 0 0' }}>Plus 30% no-shows without reminders</p>
          </BadCol>
        }
        right={
          <GoodCol label="H360 BOOKING">
            <div style={{ fontSize: 13, color: '#aaa', marginBottom: 8 }}>Same 30 covers · flat H360</div>
            <m.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              style={{ height: 36, background: GREEN, borderRadius: 8, marginBottom: 8, display: 'flex', alignItems: 'center', paddingLeft: 12 }}
            >
              <span style={{ fontSize: 12, fontWeight: 700, color: '#fff' }}>€0 per cover</span>
            </m.div>
            <div style={{ fontSize: 15, fontWeight: 800, color: GREEN }}>Slot locked · confirmation sent</div>
            <p style={{ fontSize: 12, color: C.muted, margin: '10px 0 0' }}>Morning WhatsApp: who&apos;s coming tonight</p>
          </GoodCol>
        }
      />
    </CompareShell>
  );
}

export function PayTerminalCompare({ title, subtitle, brainLine }: { title: string; subtitle?: string; brainLine?: string }) {
  return (
    <CompareShell title={title} subtitle={subtitle} brainLine={brainLine}>
      <VsColumns
        left={
          <BadCol label="SUNDAY · 15 TABLES">
            <div style={{ fontSize: 28, fontWeight: 800, color: C.white, marginBottom: 4 }}>€3,750</div>
            <p style={{ fontSize: 12, color: C.muted, margin: '0 0 12px' }}>€250 × 15 terminals + €99/mo + 2.6% per tap</p>
            <div style={{ fontSize: 13, color: '#fca5a5' }}>Guest still waits for the bill</div>
          </BadCol>
        }
        right={
          <GoodCol label="H360 PAY">
            <div style={{ fontSize: 28, fontWeight: 800, color: GREEN, marginBottom: 4 }}>QR tent card</div>
            <p style={{ fontSize: 12, color: C.muted, margin: '0 0 12px' }}>Print once · guest pays from seat · table turns faster</p>
            <div style={{ fontSize: 13, color: GREEN }}>Split bill on phone · no waiter run</div>
          </GoodCol>
        }
      />
    </CompareShell>
  );
}

export function EventRsvpCompare({ title, subtitle, brainLine }: { title: string; subtitle?: string; brainLine?: string }) {
  const [count, setCount] = useState(12);
  useEffect(() => {
    const t = setInterval(() => setCount((c) => (c >= 48 ? 12 : c + 4)), 700);
    return () => clearInterval(t);
  }, []);
  return (
    <CompareShell title={title} subtitle={subtitle} brainLine={brainLine}>
      <VsColumns
        left={
          <BadCol label="FACEBOOK EVENT">
            <div style={{ fontSize: 13, color: '#aaa' }}>2,000 followers · 5% reach</div>
            <div style={{ fontSize: 36, fontWeight: 800, color: RED, margin: '12px 0' }}>~12</div>
            <div style={{ fontSize: 12, color: C.muted }}>maybe saw the post</div>
          </BadCol>
        }
        right={
          <GoodCol label="H360 EVENT">
            <div style={{ fontSize: 13, color: GREEN }}>Friday live music · cap 50</div>
            <m.div key={count} initial={{ scale: 0.95 }} animate={{ scale: 1 }} style={{ fontSize: 42, fontWeight: 800, color: C.white, margin: '12px 0' }}>
              {count}
            </m.div>
            <div style={{ fontSize: 12, color: count >= 48 ? GREEN : C.muted }}>{count >= 48 ? 'SOLD OUT · prep accurate' : 'RSVPs · reminders sent'}</div>
          </GoodCol>
        }
      />
    </CompareShell>
  );
}

export function AnalyticsTrendCompare({ title, subtitle, brainLine }: { title: string; subtitle?: string; brainLine?: string }) {
  const [val, setVal] = useState(0);
  const target = 1200;
  useEffect(() => {
    const t = setInterval(() => setVal((v) => (v >= target ? 0 : v + 120)), 400);
    return () => clearInterval(t);
  }, []);
  const bars = [820, 940, 1100, 1050, 1200, 1180, val || 1200];
  return (
    <CompareShell title={title} subtitle={subtitle} brainLine={brainLine}>
      <VsColumns
        left={
          <BadCol label="GUT FEEL · SPREADSHEET">
            <div style={{ fontSize: 13, color: '#aaa' }}>&quot;Felt busier this week&quot;</div>
            <div style={{ fontSize: 32, fontWeight: 800, color: RED, marginTop: 12 }}>?</div>
            <p style={{ fontSize: 12, color: C.muted, margin: '12px 0 0' }}>Nobody updates the sheet at 9pm</p>
          </BadCol>
        }
        right={
          <GoodCol label="H360 ANALYTICS">
            <div style={{ fontSize: 11, color: GREEN, marginBottom: 8 }}>Today&apos;s close · one number</div>
            <div style={{ fontSize: 36, fontWeight: 800, color: C.white, marginBottom: 12 }}>€{val || target}</div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 64 }}>
              {bars.map((b, i) => (
                <m.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${(b / 1200) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  style={{ flex: 1, background: i === bars.length - 1 ? GREEN : 'rgba(74,222,128,0.35)', borderRadius: 4, minHeight: 8 }}
                />
              ))}
            </div>
            <p style={{ fontSize: 12, color: C.muted, margin: '12px 0 0' }}>7-day avg · WhatsApp reminder if you forget</p>
          </GoodCol>
        }
      />
    </CompareShell>
  );
}

export function RecipeMarginCompare({ title, subtitle, brainLine }: { title: string; subtitle?: string; brainLine?: string }) {
  return (
    <CompareShell title={title} subtitle={subtitle} brainLine={brainLine}>
      <VsColumns
        left={
          <BadCol label="CHEF GUESS · OLD SPREADSHEET">
            <div style={{ fontSize: 14, fontWeight: 700, color: C.white, marginBottom: 8 }}>Braġjoli plate</div>
            <div style={{ fontSize: 32, fontWeight: 800, color: '#86efac' }}>70%</div>
            <div style={{ fontSize: 12, color: C.muted }}>margin · tomatoes doubled since 2023</div>
          </BadCol>
        }
        right={
          <GoodCol label="H360 RECIPE">
            <div style={{ fontSize: 14, fontWeight: 700, color: C.white, marginBottom: 8 }}>Braġjoli · real food cost</div>
            <div style={{ fontSize: 13, color: '#aaa', marginBottom: 6 }}>€4.20 cost · €12 menu</div>
            <m.div initial={{ width: 0 }} whileInView={{ width: '65%' }} viewport={{ once: true }} style={{ height: 8, background: AMBER, borderRadius: 4, marginBottom: 8 }} />
            <div style={{ fontSize: 32, fontWeight: 800, color: AMBER }}>52%</div>
            <div style={{ fontSize: 12, color: GREEN }}>Raise €1 or shrink portion — you decide</div>
          </GoodCol>
        }
      />
    </CompareShell>
  );
}

export function StockAlertCompare({ title, subtitle, brainLine }: { title: string; subtitle?: string; brainLine?: string }) {
  return (
    <CompareShell title={title} subtitle={subtitle} brainLine={brainLine}>
      <m.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ maxWidth: 400, margin: '0 auto', background: C.card, border: `2px solid ${AMBER}`, borderRadius: 16, padding: 20 }}
      >
        <m.div animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 1.5, repeat: Infinity }} style={{ fontSize: 11, fontWeight: 700, color: AMBER, marginBottom: 10 }}>
          LOW STOCK · BEFORE FRIDAY SERVICE
        </m.div>
        <div style={{ fontSize: 16, fontWeight: 800, color: C.white, marginBottom: 8 }}>Mozzarella — 1 case left</div>
        <div style={{ fontSize: 13, color: C.muted, marginBottom: 16 }}>You use ~3/week · order by Tuesday 6pm</div>
        <div style={{ background: 'rgba(74,222,128,0.1)', borderRadius: 10, padding: 12, fontSize: 12, color: GREEN }}>
          Order list → Supplier A · Monday delivery
        </div>
      </m.div>
    </CompareShell>
  );
}

export function StaffWhatsappCompare({ title, subtitle, brainLine }: { title: string; subtitle?: string; brainLine?: string }) {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setStep((s) => (s + 1) % 4), 1800);
    return () => clearInterval(t);
  }, []);
  const msgs = [
    { from: 'H360', text: 'Tomorrow: 18:00–close. You in?', green: true },
    { from: 'Maria', text: 'Yes ✓', green: false },
    { from: 'H360', text: 'John sick — who can cover?', green: true },
    { from: 'Luke', text: 'I can · 17:30', green: false },
  ];
  return (
    <CompareShell title={title} subtitle={subtitle} brainLine={brainLine}>
      <div style={{ maxWidth: 340, margin: '0 auto', background: '#0b141a', borderRadius: 16, padding: 16, border: `1px solid ${C.border}` }}>
        <div style={{ fontSize: 11, color: GREEN, marginBottom: 12, fontWeight: 700 }}>WhatsApp · H360 STAFF</div>
        {msgs.slice(0, step + 1).map((msg, i) => (
          <m.div
            key={i}
            initial={{ opacity: 0, x: msg.green ? -12 : 12 }}
            animate={{ opacity: 1, x: 0 }}
            style={{
              alignSelf: msg.green ? 'flex-start' : 'flex-end',
              background: msg.green ? '#064e3b' : '#1f2937',
              borderRadius: 12,
              padding: '10px 12px',
              marginBottom: 8,
              maxWidth: '85%',
              marginLeft: msg.green ? 0 : 'auto',
              fontSize: 13,
              color: '#fff',
            }}
          >
            {msg.text}
          </m.div>
        ))}
      </div>
    </CompareShell>
  );
}

export function FloorMapLiveCompare({ title, subtitle, brainLine }: { title: string; subtitle?: string; brainLine?: string }) {
  const reduce = useReducedMotion();
  const tables = [
    { id: 'T1', s: 'free' },
    { id: 'T2', s: 'full' },
    { id: 'T3', s: 'free' },
    { id: 'T4', s: 'clearing' },
    { id: 'T5', s: 'full' },
    { id: 'T6', s: 'free' },
    { id: 'T7', s: 'full' },
    { id: 'T8', s: 'free' },
  ];
  const color = (s: string) => (s === 'free' ? GREEN : s === 'full' ? RED : AMBER);
  const [blink, setBlink] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setBlink((b) => b + 1), 2000);
    return () => clearInterval(t);
  }, [reduce]);
  return (
    <CompareShell title={title} subtitle={subtitle} brainLine={brainLine}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, maxWidth: 360, margin: '0 auto' }}>
        {tables.map((t, i) => (
          <m.div
            key={t.id}
            animate={blink === i && !reduce ? { scale: [1, 1.08, 1] } : {}}
            style={{
              aspectRatio: '1',
              borderRadius: 10,
              border: `2px solid ${color(t.s)}`,
              background: `${color(t.s)}22`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 12,
              fontWeight: 700,
              color: C.white,
            }}
          >
            {t.id}
            <span style={{ fontSize: 9, color: color(t.s), marginTop: 4 }}>{t.s}</span>
          </m.div>
        ))}
      </div>
      <p style={{ textAlign: 'center', fontSize: 12, color: C.muted, marginTop: 16 }}>Next free: T3 · T7 occupied 48 min</p>
    </CompareShell>
  );
}

const COMPARE_MAP: Record<
  PremiumCompareId,
  React.ComponentType<{ title: string; subtitle?: string; brainLine?: string }>
> = {
  'google-maps-rank': GoogleMapsRankCompare,
  'social-feed-mock': SocialFeedCompare,
  'website-before-after': WebsiteBeforeAfterCompare,
  'rest-system-hub': RestSystemHubCompare,
  'booking-fee-compare': BookingFeeCompare,
  'pay-terminal-compare': PayTerminalCompare,
  'event-rsvp-fill': EventRsvpCompare,
  'analytics-trend': AnalyticsTrendCompare,
  'recipe-margin': RecipeMarginCompare,
  'stock-alert': StockAlertCompare,
  'staff-whatsapp': StaffWhatsappCompare,
  'floor-map-live': FloorMapLiveCompare,
};

export function PremiumCompare({ visual, title, subtitle, brainLine }: { visual: PremiumCompareId; title: string; subtitle?: string; brainLine?: string }) {
  const Comp = COMPARE_MAP[visual];
  return <Comp title={title} subtitle={subtitle} brainLine={brainLine} />;
}
