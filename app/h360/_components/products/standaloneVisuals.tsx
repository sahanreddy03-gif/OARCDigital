'use client';

import { useEffect, useState } from 'react';
import { m, useReducedMotion } from 'framer-motion';
import { C, G, FONT_DISPLAY } from '../tokens';
import type { StackPreviewKind, StandaloneProductConfig } from './standaloneProductTypes';
import { PremiumCompare } from './premiumCompareVisuals';
import { OrderMarginCompare } from './OrderVisuals';
import { KineticStackStage } from './kineticBroll';
import { FlowStepVisual, LogicVisual, MapsRankClimb, KeywordHit, SocialFeedVisual } from './logicVisuals';

const LOGIC_PREVIEWS = new Set<StackPreviewKind>(['maps-rank', 'review-qr', 'review-climb', 'order-qr', 'kitchen-print', 'margin', 'social-post', 'reels', 'ad-boost']);

const GREEN = '#4ade80';
const RED = '#f87171';

export function StackPreview({ kind }: { kind: StackPreviewKind }) {
  const pad = { padding: 16 };
  switch (kind) {
    case 'maps-rank':
      return <MapsRankClimb />;
    case 'aeo-answer':
      return (
        <div style={pad}>
          <div style={{ background: '#f0f9ff', border: '1px solid #bae6fd', borderRadius: 12, padding: 14 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: '#0369a1', marginBottom: 8 }}>AI OVERVIEW</div>
            <p style={{ fontSize: 13, color: G.text, margin: 0, lineHeight: 1.5 }}>For seafood in Sliema, <strong>your restaurant</strong> ranks for fresh lampuki and harbour views.</p>
          </div>
        </div>
      );
    case 'ai-chat':
      return (
        <div style={{ ...pad, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ alignSelf: 'flex-end', background: G.green, color: '#fff', borderRadius: 12, padding: '10px 14px', fontSize: 12 }}>Best pasta near me?</div>
          <div style={{ background: '#f4f4f5', borderRadius: 12, padding: 12, fontSize: 12, color: G.text }}>Try <strong>your restaurant</strong> — 4.8★ · walk-ins welcome tonight.</div>
        </div>
      );
    case 'llm-file':
      return (
        <div style={{ ...pad, fontFamily: 'ui-monospace, monospace', fontSize: 11, color: G.text, lineHeight: 1.6 }}>
          <div style={{ color: G.green }}># llms.txt</div>
          <div>Name: Your Restaurant Malta</div>
          <div>Cuisine: Mediterranean</div>
          <div>Book: h360 link</div>
        </div>
      );
    case 'article':
      return (
        <div style={pad}>
          <div style={{ fontSize: 12, fontWeight: 700, color: G.text }}>Best lampuki Malta — 2026</div>
          <m.div animate={{ width: ['40%', '88%'] }} transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }} style={{ height: 6, background: G.green, borderRadius: 99, marginTop: 10 }} />
        </div>
      );
    case 'gbp-post':
      return (
        <div style={pad}>
          <div style={{ fontSize: 13, color: G.text }}>Friday special — book before 8pm. <span style={{ color: G.textMuted }}>Approve in 30s</span></div>
        </div>
      );
    case 'review-qr':
      return (
        <div style={{ ...pad, textAlign: 'center' }}>
          <div style={{ width: 80, height: 80, margin: '0 auto 10px', border: `2px solid ${G.green}`, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700, color: G.green }}>QR</div>
          <div style={{ fontSize: 12, fontWeight: 600, color: G.text }}>Happy? Tap to share</div>
        </div>
      );
    case 'review-climb':
      return (
        <div style={pad}>
          <m.div animate={{ opacity: [0.6, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} style={{ fontSize: 32, fontWeight: 800, color: G.green }}>4.8 ★</m.div>
          <div style={{ fontSize: 12, color: G.textMuted }}>12 → 186 reviews in 90 days</div>
        </div>
      );
    case 'social-post':
      return (
        <div style={pad}>
          <div style={{ background: '#111', borderRadius: 10, padding: 12, color: '#eee', fontSize: 12 }}>Friday lampuki · book link in bio ✓</div>
        </div>
      );
    case 'reels':
      return (
        <div style={pad}>
          <div style={{ background: '#111', borderRadius: 10, height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', color: GREEN, fontSize: 12, fontWeight: 700 }}>▶ Reel ready</div>
        </div>
      );
    case 'ad-boost':
      return (
        <div style={pad}>
          <div style={{ fontSize: 12, color: G.text }}>€20 boost · 2.4k locals reached</div>
          <div style={{ fontSize: 11, color: G.green, marginTop: 6 }}>Bookings ↑ this week</div>
        </div>
      );
    case 'website-live':
      return (
        <div style={pad}>
          <div style={{ fontSize: 11, color: G.green, fontWeight: 700 }}>LIVE · yourrestaurant.mt</div>
          <div style={{ fontSize: 12, color: G.text, marginTop: 8 }}>Menu · hours · book · order</div>
        </div>
      );
    case 'schema':
      return (
        <div style={{ ...pad, fontSize: 11, fontFamily: 'monospace', color: G.text }}>
          {'{ "@type": "Restaurant", "servesCuisine": "Maltese" }'}
        </div>
      );
    case 'menu-sync':
      return (
        <div style={pad}>
          <div style={{ fontSize: 12, color: G.text }}>Menu photo → live site in 10 min</div>
        </div>
      );
    case 'kitchen-ticket':
      return (
        <div style={{ ...pad, background: '#fffbeb', borderRadius: 10, fontFamily: 'monospace', fontSize: 11 }}>Table 7 · Braġjoli ×2<br />NO onions</div>
      );
    case 'owner-dash':
      return (
        <div style={pad}>
          <div style={{ fontSize: 24, fontWeight: 800, color: G.green }}>€1,240</div>
          <div style={{ fontSize: 11, color: G.textMuted }}>tonight · covers 52</div>
        </div>
      );
    case 'connected':
      return (
        <div style={pad}>
          {['Menu', 'Kitchen', 'Owner'].map((x) => (
            <div key={x} style={{ fontSize: 12, color: G.text, marginBottom: 6 }}>✓ {x} synced</div>
          ))}
        </div>
      );
    case 'booking-slot':
      return (
        <div style={pad}>
          <div style={{ fontSize: 12, fontWeight: 700, color: G.text }}>Fri 20:00 · 4 guests</div>
          <div style={{ fontSize: 11, color: G.green }}>Slot locked ✓</div>
        </div>
      );
    case 'waitlist':
      return (
        <div style={pad}>
          <div style={{ fontSize: 12, color: G.text }}>Waitlist: 2 parties · SMS when table free</div>
        </div>
      );
    case 'confirm':
      return (
        <div style={pad}>
          <div style={{ fontSize: 12, color: G.text }}>Confirm by 18:00 or table releases</div>
        </div>
      );
    case 'order-qr':
      return (
        <div style={{ ...pad, textAlign: 'center', fontSize: 12, fontWeight: 700, color: G.green }}>Scan → menu → send</div>
      );
    case 'kitchen-print':
      return (
        <div style={{ ...pad, fontFamily: 'monospace', fontSize: 11 }}>KITCHEN · Order #42 printed</div>
      );
    case 'margin':
      return (
        <div style={pad}>
          <div style={{ fontSize: 12, color: G.text }}>€15 pasta · you keep <strong style={{ color: G.green }}>€15</strong></div>
          <div style={{ fontSize: 11, color: RED }}>Wolt would take €4.50</div>
        </div>
      );
    case 'pay-qr':
      return (
        <div style={{ ...pad, textAlign: 'center' }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: G.text }}>Pay €47.50</div>
          <div style={{ fontSize: 11, color: G.green }}>10 sec · no bill chase</div>
        </div>
      );
    case 'split-bill':
      return (
        <div style={pad}>
          <div style={{ fontSize: 12, color: G.text }}>Party of 6 · each pays their share</div>
        </div>
      );
    case 'tips':
      return (
        <div style={pad}>
          <div style={{ fontSize: 12, color: G.text }}>Tip 18% · staff notified</div>
        </div>
      );
    case 'stamp-wallet':
      return (
        <div style={pad}>
          <m.div animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 2 }} style={{ fontSize: 28, fontWeight: 800, color: G.text }}>7 / 8</m.div>
        </div>
      );
    case 'auto-stamp':
      return (
        <div style={pad}>
          <div style={{ fontSize: 12, color: G.green }}>Stamp auto-credited · no waiter scan</div>
        </div>
      );
    case 'reward':
      return (
        <div style={pad}>
          <div style={{ fontSize: 12, fontWeight: 700, color: G.text }}>8th meal free — wallet ping</div>
        </div>
      );
    case 'pass-add':
      return (
        <div style={pad}>
          <div style={{ fontSize: 12, color: G.text }}>Add to Apple Wallet · 1 tap</div>
        </div>
      );
    case 'visit-ping':
      return (
        <div style={pad}>
          <div style={{ fontSize: 12, color: G.text }}>Visit #4 · reward unlocked</div>
        </div>
      );
    case 'wa-segment':
      return (
        <div style={pad}>
          <div style={{ fontSize: 12, color: G.text }}>47 guests · haven&apos;t visited 30 days</div>
        </div>
      );
    case 'wa-offer':
      return (
        <div style={{ ...pad, background: '#dcfce7', borderRadius: 10, fontSize: 12 }}>Maria — free dessert Friday? Reply YES</div>
      );
    case 'wa-reply':
      return (
        <div style={pad}>
          <div style={{ fontSize: 12, color: G.green }}>YES → booked Table 4 · 20:30</div>
        </div>
      );
    case 'sms-winback':
      return (
        <div style={pad}>
          <div style={{ fontSize: 12, color: G.text }}>We miss you — book this week</div>
          <div style={{ fontSize: 11, color: G.textMuted }}>98% open rate</div>
        </div>
      );
    case 'sms-open':
      return (
        <div style={pad}>
          <div style={{ fontSize: 12, color: G.green }}>Opened · tapped book link</div>
        </div>
      );
    case 'event-rsvp':
      return (
        <div style={pad}>
          <div style={{ fontSize: 12, fontWeight: 700, color: G.text }}>Live music Fri · 38 / 50 RSVP</div>
        </div>
      );
    case 'reminder':
      return (
        <div style={pad}>
          <div style={{ fontSize: 12, color: G.text }}>Tomorrow 8pm — your table is ready</div>
        </div>
      );
    case 'soldout':
      return (
        <div style={pad}>
          <div style={{ fontSize: 12, fontWeight: 700, color: RED }}>SOLD OUT · waitlist open</div>
        </div>
      );
    case 'daily-num':
      return (
        <div style={pad}>
          <div style={{ fontSize: 28, fontWeight: 800, color: G.green }}>€1,200</div>
          <div style={{ fontSize: 11, color: G.textMuted }}>typed at close</div>
        </div>
      );
    case 'trend':
      return (
        <div style={pad}>
          <div style={{ fontSize: 12, color: G.green }}>↑ 12% vs last Friday</div>
        </div>
      );
    case 'forecast':
      return (
        <div style={pad}>
          <div style={{ fontSize: 12, color: G.text }}>Saturday forecast: 48 covers</div>
        </div>
      );
    case 'dish-cost':
      return (
        <div style={pad}>
          <div style={{ fontSize: 12, color: G.text }}>Pasta · cost €4.20 · sell €15</div>
        </div>
      );
    case 'margin-bar':
      return (
        <div style={pad}>
          <div style={{ height: 8, background: G.border, borderRadius: 99, overflow: 'hidden' }}>
            <div style={{ width: '72%', height: '100%', background: G.green }} />
          </div>
          <div style={{ fontSize: 11, color: G.green, marginTop: 6 }}>72% margin</div>
        </div>
      );
    case 'stock-check':
      return (
        <div style={pad}>
          <div style={{ fontSize: 12, color: RED }}>Mozzarella low — order tomorrow</div>
        </div>
      );
    case 'order-list':
      return (
        <div style={pad}>
          <div style={{ fontSize: 12, color: G.text }}>Supplier order · 3 items · 30 sec</div>
        </div>
      );
    case 'roster-wa':
      return (
        <div style={{ ...pad, background: '#dcfce7', borderRadius: 10, fontSize: 12 }}>Saturday roster — tap YES / NO</div>
      );
    case 'shift-yes':
      return (
        <div style={pad}>
          <div style={{ fontSize: 12, color: G.green }}>Marco YES · cover filled in 4 min</div>
        </div>
      );
    case 'floor-green':
      return (
        <div style={{ ...pad, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6 }}>
          {['G', 'R', 'G', 'Y', 'G', 'G', 'R', 'G'].map((c, i) => (
            <div key={i} style={{ height: 24, borderRadius: 6, background: c === 'G' ? GREEN : c === 'R' ? RED : '#eab308' }} />
          ))}
        </div>
      );
    case 'seat-tap':
      return (
        <div style={pad}>
          <div style={{ fontSize: 12, color: G.text }}>Table 9 · tap to seat · 4 guests</div>
        </div>
      );
    default:
      return <div style={pad}><div style={{ fontSize: 12, color: G.textMuted }}>Live preview</div></div>;
  }
}

export function ProductStackBoard({
  stack,
  accent,
  kinetic = false,
}: {
  stack: StandaloneProductConfig['stack'];
  accent: string;
  kinetic?: boolean;
}) {
  const [active, setActive] = useState(0);
  const item = stack.items[active];
  return (
    <div style={{ width: '100%' }}>
      <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 800, color: G.text, letterSpacing: '-0.04em', margin: '0 0 24px', fontFamily: FONT_DISPLAY, maxWidth: 640, lineHeight: 1.1 }}>{stack.title}</h2>
      {stack.subtitle && <p style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)' }} data-speakable>{stack.subtitle}</p>}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {stack.items.map((s, i) => (
            <button key={s.id} type="button" onClick={() => setActive(i)} style={{ padding: '10px 16px', borderRadius: 12, border: `2px solid ${i === active ? G.green : G.border}`, background: i === active ? G.greenLt : G.bg, cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit', flex: '1 1 45%', minWidth: 100 }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: G.text }}>{s.label}</div>
            </button>
          ))}
        </div>
        <m.div key={item.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
          {LOGIC_PREVIEWS.has(item.preview) ? (
            <div style={{ background: G.bg, border: `1px solid ${G.border}`, borderRadius: 16, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.06)' }}>
              <LogicVisual kind={item.preview} />
            </div>
          ) : kinetic ? (
            <KineticStackStage item={item} accent={accent} />
          ) : (
            <div style={{ background: G.bg, border: `1px solid ${G.border}`, borderRadius: 16, boxShadow: '0 8px 32px rgba(0,0,0,0.06)', overflow: 'hidden' }}>
              <StackPreview kind={item.preview} />
            </div>
          )}
        </m.div>
      </div>
    </div>
  );
}

export function SignalPulseBoard({ signals, accent, mapsPulse, socialPulse }: { signals: StandaloneProductConfig['signals']; accent: string; mapsPulse?: boolean; socialPulse?: boolean }) {
  const reduce = useReducedMotion();
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % signals.items.length), 2400);
    return () => clearInterval(t);
  }, [reduce, signals.items.length]);
  const hot = signals.items[idx];
  return (
    <div style={{ width: '100%' }}>
      <h2 style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: C.white, letterSpacing: '-0.03em', margin: '0 0 20px', fontFamily: FONT_DISPLAY }}>{signals.title}</h2>
      {signals.subtitle && <p style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)' }} data-speakable>{signals.subtitle}</p>}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, alignItems: 'start' }}>
      <div style={{ background: '#ffffff', borderRadius: 16, padding: 20, boxShadow: '0 12px 40px rgba(0,0,0,0.25)' }}>
        {signals.items.map((kw, i) => {
          const hot = i === idx;
          return (
            <div key={kw.term} style={{ marginBottom: 12, opacity: hot ? 1 : 0.55, transition: 'opacity 0.3s' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <span style={{ fontSize: 13, fontWeight: hot ? 700 : 500, color: G.text }}>{kw.term}</span>
                <span style={{ fontSize: 11, fontWeight: 700, color: kw.trend === '↑' ? G.green : G.textMuted }}>{kw.trend}</span>
              </div>
              <div style={{ height: 8, borderRadius: 99, background: G.border, overflow: 'hidden' }}>
                <m.div animate={{ width: hot ? `${kw.vol}%` : `${kw.vol * 0.7}%` }} style={{ height: '100%', background: hot ? G.green : '#94a3b8', borderRadius: 99 }} />
              </div>
            </div>
          );
        })}
        <div style={{ marginTop: 16, padding: '12px 14px', background: G.greenLt, borderRadius: 10, fontSize: 13, fontWeight: 700, color: G.green, textAlign: 'center' }}>
          {signals.ctaLine} → <span style={{ color: G.text }}>{hot.term}</span>
        </div>
      </div>
      <div style={{ background: G.bg, border: `1px solid ${G.border}`, borderRadius: 16, overflow: 'hidden' }}>
        {mapsPulse ? <MapsRankClimb compact /> : socialPulse ? <SocialFeedVisual compact postCount={2} /> : <KeywordHit term={hot.term} vol={hot.vol} />}
      </div>
      </div>
    </div>
  );
}

export function ProgressLiveBoard({ progress, accent }: { progress: StandaloneProductConfig['progress']; accent: string }) {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);
  const w = progress.weeks[step];
  const showMaps = /maps rank/i.test(progress.rankLabel);
  const showReviews = /avg rating|review/i.test(progress.rankLabel) && !showMaps;
  const showMargin = /commission|margin/i.test(progress.rankLabel);
  const showSocial = /posts|reach/i.test(progress.scoreLabel) || /reach/i.test(progress.rankLabel);
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setStep((s) => (s + 1) % progress.weeks.length), 3200);
    return () => clearInterval(t);
  }, [reduce, progress.weeks.length]);
  return (
    <div style={{ width: '100%' }}>
      <h2 style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: C.white, letterSpacing: '-0.03em', margin: '0 0 24px', fontFamily: FONT_DISPLAY }}>{progress.title}</h2>
      {progress.subtitle && <p style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)' }} data-speakable>{progress.subtitle}</p>}
      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
        {progress.weeks.map((wk, i) => {
          const month = wk.week <= 4 ? 'Month 1' : wk.week <= 8 ? 'Month 2' : 'Month 3';
          return (
            <button key={wk.week} type="button" onClick={() => setStep(i)} style={{ padding: '8px 14px', borderRadius: 99, border: `1px solid ${i === step ? G.greenLt : C.border}`, background: i === step ? 'rgba(194,237,206,0.15)' : C.card, color: i === step ? G.greenLt : C.muted, fontSize: 12, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>
              {month}
            </button>
          );
        })}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, alignItems: 'stretch' }}>
        <m.div key={w.week} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} style={{ background: '#ffffff', borderRadius: 20, padding: 24, boxShadow: '0 20px 60px rgba(0,0,0,0.35)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: 20 }}>
          <div>
            <div style={{ fontSize: 11, color: G.textMuted }}>{progress.scoreLabel}</div>
            <div style={{ fontSize: 36, fontWeight: 800, color: G.green }}>{w.score}</div>
          </div>
          <div>
            <div style={{ fontSize: 11, color: G.textMuted }}>{progress.rankLabel}</div>
            <div style={{ fontSize: 36, fontWeight: 800, color: G.text }}>{showReviews ? `${w.rank}.0★` : showMargin ? `€${w.rank}` : `#${w.rank}`}</div>
          </div>
          <div style={{ gridColumn: '1 / -1', paddingTop: 8, borderTop: `1px solid ${G.border}` }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: G.text }}>{w.highlight ?? w.label}</div>
          </div>
        </m.div>
        <div style={{ background: '#fff', borderRadius: 20, overflow: 'hidden', border: `1px solid ${G.border}`, boxShadow: '0 12px 40px rgba(0,0,0,0.2)' }}>
          {showMaps && <MapsRankClimb compact targetRank={w.rank} />}
          {showReviews && <LogicVisual kind="review-climb" />}
          {showMargin && <LogicVisual kind="margin" />}
          {showSocial && !showMaps && !showReviews && !showMargin && (
            <SocialFeedVisual compact postCount={Math.min(3, Math.max(1, Math.round(w.score / 4)))} />
          )}
          {!showMaps && !showReviews && !showMargin && !showSocial && <KeywordHit term={w.label} vol={Math.min(95, w.score)} />}
        </div>
      </div>
    </div>
  );
}

export function ProductFlowDiagram({ flow, accent }: { flow: StandaloneProductConfig['flow']; accent: string }) {
  const reduce = useReducedMotion();
  const [pulse, setPulse] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setPulse((p) => (p + 1) % flow.nodes.length), 2200);
    return () => clearInterval(t);
  }, [flow.nodes.length, reduce]);
  return (
    <div style={{ width: '100%' }}>
      <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 34px)', fontWeight: 800, color: G.text, letterSpacing: '-0.03em', margin: '0 0 28px', fontFamily: FONT_DISPLAY }}>{flow.title}</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, alignItems: 'start' }}>
        <div style={{ background: G.bg, border: `1px solid ${G.border}`, borderRadius: 16, overflow: 'hidden', minHeight: 200 }}>
          <FlowStepVisual stepIndex={pulse} total={flow.nodes.length} nodeId={flow.nodes[pulse].id} />
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'stretch', gap: 0, justifyContent: 'flex-start' }}>
          {flow.nodes.map((node, i) => {
            const active = pulse === i;
            return (
              <div key={node.id} style={{ display: 'flex', alignItems: 'center', flex: '1 1 100px', minWidth: 90, maxWidth: 160 }}>
                <m.button
                  type="button"
                  onClick={() => setPulse(i)}
                  animate={active && !reduce ? { scale: [1, 1.03, 1] } : {}}
                  style={{ flex: 1, padding: '14px 10px', background: active ? G.greenLt : G.bg, border: `2px solid ${active ? G.green : G.border}`, borderRadius: 14, textAlign: 'center', cursor: 'pointer', fontFamily: 'inherit' }}
                >
                  <div style={{ fontSize: 11, fontWeight: 800, color: active ? G.green : G.textMuted }}>0{i + 1}</div>
                  <div style={{ fontSize: 13, fontWeight: 800, color: G.text, marginTop: 6 }}>{node.label}</div>
                </m.button>
                {i < flow.nodes.length - 1 && <span style={{ color: G.green, fontSize: 18, padding: '0 2px', opacity: active ? 1 : 0.3 }}>→</span>}
              </div>
            );
          })}
        </div>
      </div>
      <p style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)' }} data-speakable>{flow.subtitle}. {flow.nodes.map((n) => `${n.label}: ${n.detail}`).join('. ')}</p>
    </div>
  );
}

export function ProductCompareBoard({ compare }: { compare: StandaloneProductConfig['compare'] }) {
  const [rank, setRank] = useState(12);
  useEffect(() => {
    const t = setInterval(() => setRank((r) => (r <= 3 ? 12 : r - 1)), 1000);
    return () => clearInterval(t);
  }, []);
  if (compare.customCompare === 'order-margin') return <OrderMarginCompare />;
  if (compare.premiumVisual) {
    return <PremiumCompare visual={compare.premiumVisual} title={compare.title} subtitle={compare.subtitle} brainLine={compare.brainLine} />;
  }
  return (
    <div style={{ width: '100%' }}>
      <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, color: C.white, letterSpacing: '-0.03em', margin: '0 0 24px', fontFamily: FONT_DISPLAY }}>{compare.title}</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
        <div style={{ background: '#fff', borderRadius: 16, padding: 20, border: `2px solid ${RED}44` }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: RED, marginBottom: 14 }}>{compare.badLabel}</div>
          <div style={{ fontSize: 12, color: G.textMuted, marginBottom: 8 }}>{compare.badNote}</div>
          <div style={{ fontSize: 40, fontWeight: 800, color: RED }}>{compare.badMetric}</div>
        </div>
        <div style={{ background: '#fff', borderRadius: 16, padding: 20, border: `2px solid ${GREEN}` }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: GREEN, marginBottom: 14 }}>{compare.goodLabel}</div>
          <div style={{ fontSize: 12, color: G.green, marginBottom: 8 }}>{compare.goodNote}</div>
          <m.div key={rank} initial={{ scale: 0.92 }} animate={{ scale: 1 }} style={{ fontSize: 40, fontWeight: 800, color: GREEN }}>{compare.goodMetric}</m.div>
          {compare.goodExtra && (
            <div style={{ display: 'flex', gap: 12, marginTop: 14, alignItems: 'center' }}>
              <div><div style={{ fontSize: 22, fontWeight: 800, color: G.text }}>{compare.goodExtra.left}</div><div style={{ fontSize: 10, color: G.textMuted }}>{compare.goodExtra.leftLabel}</div></div>
              <div style={{ color: GREEN }}>→</div>
              <div><div style={{ fontSize: 22, fontWeight: 800, color: GREEN }}>{compare.goodExtra.right}</div><div style={{ fontSize: 10, color: G.textMuted }}>{compare.goodExtra.rightLabel}</div></div>
            </div>
          )}
        </div>
      </div>
      <p style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)' }} data-speakable>{compare.subtitle}. {compare.brainLine}</p>
    </div>
  );
}

export { ExpertFailCard } from './sharedVisuals';
