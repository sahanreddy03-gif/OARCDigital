'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { G } from '../tokens';
import type { StackPreviewKind } from './standaloneProductTypes';

const PACK_COMPETITORS = ['Harbour House · Sliema', 'Ta\' Kris · St Julian\'s', 'The Grill · Valletta'];
const QUERY = 'restaurant near me malta';

function buildPackRows(rank: number) {
  if (rank > 3) {
    return {
      inPack: PACK_COMPETITORS.map((name, i) => ({ name, pos: i + 1, you: false })),
      below: { name: 'Your restaurant', pos: rank },
    };
  }
  const inPack: { name: string; pos: number; you: boolean }[] = [];
  let comp = 0;
  for (let pos = 1; pos <= 3; pos++) {
    if (pos === rank) inPack.push({ name: 'Your restaurant', pos, you: true });
    else inPack.push({ name: PACK_COMPETITORS[comp++], pos, you: false });
  }
  return { inPack, below: null };
}

/** Google local pack — you climb from #14 into the 3-pack */
export function MapsRankClimb({ compact = false, targetRank }: { compact?: boolean; targetRank?: number }) {
  const [rank, setRank] = useState(targetRank ?? 14);

  useEffect(() => {
    if (targetRank != null) {
      setRank(targetRank);
      return;
    }
    const t = setInterval(() => setRank((r) => (r <= 3 ? 14 : r - 1)), 1100);
    return () => clearInterval(t);
  }, [targetRank]);

  const { inPack, below } = buildPackRows(rank);

  return (
    <div style={{ padding: compact ? 12 : 16 }}>
      <div style={{ background: '#fff', borderRadius: 14, border: `1px solid ${G.border}`, overflow: 'hidden', boxShadow: compact ? 'none' : '0 8px 28px rgba(0,0,0,0.08)' }}>
        <div style={{ padding: '10px 12px', borderBottom: `1px solid ${G.border}`, display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 16, height: 16, borderRadius: '50%', background: 'conic-gradient(#ea4335 0 25%, #fbbc05 25% 50%, #34a853 50% 75%, #4285f4 75% 100%)' }} />
          <span style={{ fontSize: 12, color: '#444', fontWeight: 500 }}>{QUERY}</span>
        </div>
        <div style={{ padding: '6px 12px', fontSize: 10, fontWeight: 700, color: '#888', letterSpacing: '0.08em' }}>MAP · LOCAL RESULTS</div>
        <AnimatePresence mode="popLayout">
          {inPack.map((row) => (
            <m.div
              key={row.you ? 'you' : row.name}
              layout
              animate={{ backgroundColor: row.you ? G.greenLt : '#fff' }}
              style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '11px 12px', borderBottom: `1px solid ${G.border}` }}
            >
              <span style={{ fontSize: 15, fontWeight: 800, color: row.you ? G.green : '#999', width: 32 }}>#{row.pos}</span>
              <span style={{ flex: 1, fontSize: 13, fontWeight: row.you ? 700 : 500, color: G.text }}>{row.name}</span>
              {row.you && <span style={{ fontSize: 10, fontWeight: 700, color: G.green }}>YOU</span>}
            </m.div>
          ))}
        </AnimatePresence>
        {below && (
          <m.div
            initial={{ opacity: 0.6 }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '11px 12px', background: '#f8faf8', borderTop: `2px dashed ${G.greenMid}` }}
          >
            <span style={{ fontSize: 15, fontWeight: 800, color: '#b45309', width: 32 }}>#{below.pos}</span>
            <span style={{ flex: 1, fontSize: 13, fontWeight: 700, color: G.text }}>{below.name}</span>
            <span style={{ fontSize: 10, fontWeight: 700, color: G.green }}>↑ CLIMBING</span>
          </m.div>
        )}
      </div>
      {!compact && !targetRank && (
        <p style={{ margin: '10px 0 0', fontSize: 11, fontWeight: 700, color: G.green, textAlign: 'center', letterSpacing: '0.06em' }}>
          #14 → #3 · same search
        </p>
      )}
    </div>
  );
}

export function KeywordHit({ term, vol }: { term: string; vol: number }) {
  return (
    <div style={{ padding: 14 }}>
      <div style={{ fontSize: 13, fontWeight: 700, color: G.text, marginBottom: 8 }}>{term}</div>
      <div style={{ height: 8, borderRadius: 99, background: G.border, overflow: 'hidden' }}>
        <m.div initial={{ width: 0 }} animate={{ width: `${vol}%` }} transition={{ duration: 1 }} style={{ height: '100%', background: G.green }} />
      </div>
      <div style={{ fontSize: 11, fontWeight: 700, color: G.green, marginTop: 6 }}>Malta intent</div>
    </div>
  );
}

function ReviewTapVisual() {
  return (
    <div style={{ padding: 20, textAlign: 'center' }}>
      <m.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 1.6 }} style={{ width: 72, height: 72, margin: '0 auto 10px', border: `3px solid ${G.green}`, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 800, color: G.green }}>
        TAP
      </m.div>
      <div style={{ fontSize: 13, fontWeight: 700, color: G.text }}>Happy? Tap to share</div>
    </div>
  );
}

function ReviewClimbVisual() {
  return (
    <div style={{ padding: 20, textAlign: 'center' }}>
      <m.div animate={{ opacity: [0.7, 1] }} transition={{ repeat: Infinity, duration: 1.4 }} style={{ fontSize: 36, fontWeight: 800, color: G.green }}>4.2 → 4.8 ★</m.div>
      <div style={{ fontSize: 12, fontWeight: 600, color: G.textMuted }}>12 → 186 reviews</div>
    </div>
  );
}

function OrderFlowVisual() {
  return (
    <div style={{ padding: 16, fontSize: 12, fontWeight: 700, color: G.text, textAlign: 'center', lineHeight: 1.6 }}>
      <m.span animate={{ opacity: [1, 0.4, 1] }} transition={{ repeat: Infinity, duration: 1.2 }}>Scan</m.span>
      {' → '}
      <m.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.2 }}>Tap</m.span>
      {' → '}
      <m.span animate={{ opacity: [1, 0.4, 1] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.4 }}>Kitchen</m.span>
    </div>
  );
}

function MarginVisual() {
  return (
    <div style={{ padding: 20, textAlign: 'center' }}>
      <div style={{ fontSize: 13, color: G.text }}>€15 pasta</div>
      <m.div animate={{ scale: [1, 1.08, 1] }} transition={{ repeat: Infinity, duration: 2 }} style={{ fontSize: 32, fontWeight: 800, color: G.green, marginTop: 6 }}>You keep €15</m.div>
    </div>
  );
}

function ProfileScoreVisual() {
  return (
    <div style={{ padding: 14, textAlign: 'center' }}>
      <m.div animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 2 }} style={{ fontSize: 28, fontWeight: 800, color: G.green }}>
        85/100
      </m.div>
      <div style={{ fontSize: 11, fontWeight: 700, color: G.textMuted }}>Profile score</div>
    </div>
  );
}

function ResultPingVisual() {
  return (
    <div style={{ padding: 14, background: '#dcfce7', margin: 12, borderRadius: 12, fontSize: 12, fontWeight: 600, color: G.text, lineHeight: 1.45, textAlign: 'center' }}>
      <strong>ARC · WhatsApp</strong>
      <br />
      847 → 37 calls
    </div>
  );
}

/** Instagram-style feed — posts stack in (social product) */
export function SocialFeedVisual({ compact = false, postCount }: { compact?: boolean; postCount?: number }) {
  const posts = [
    { title: 'Friday lampuki special', tag: 'Ready to publish' },
    { title: 'Behind the pass', tag: 'Caption + hashtags' },
    { title: 'Book a table →', tag: 'Link in bio' },
  ];
  const [shown, setShown] = useState(postCount ?? 1);

  useEffect(() => {
    if (postCount != null) {
      setShown(postCount === 0 ? 0 : Math.min(postCount, 3));
      return;
    }
    const t = setInterval(() => setShown((s) => (s >= 3 ? 1 : s + 1)), 1400);
    return () => clearInterval(t);
  }, [postCount]);

  const visible = postCount === 0 ? [] : posts.slice(0, Math.max(1, Math.min(3, shown)));

  return (
    <div style={{ padding: compact ? 12 : 16 }}>
      <div style={{ background: '#111', borderRadius: 16, overflow: 'hidden', border: `1px solid ${compact ? G.border : '#333'}`, boxShadow: compact ? 'none' : '0 12px 40px rgba(0,0,0,0.15)' }}>
        <div style={{ padding: '12px 14px', borderBottom: '1px solid #333', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: `linear-gradient(135deg, ${G.green}, ${G.greenMid})` }} />
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>@yourrestaurant</div>
            <div style={{ fontSize: 10, color: '#888' }}>Malta · H360 SOCIAL</div>
          </div>
          <span style={{ marginLeft: 'auto', fontSize: 10, fontWeight: 700, color: G.greenLt }}>LIVE</span>
        </div>
        <AnimatePresence mode="popLayout">
          {visible.length === 0 ? (
            <div style={{ padding: '48px 14px', textAlign: 'center', fontSize: 13, color: '#666', fontWeight: 600 }}>No posts in 3 weeks</div>
          ) : (
            visible.map((p, i) => (
            <m.div
              key={p.title}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ padding: '12px 14px', borderBottom: i < visible.length - 1 ? '1px solid #222' : 'none' }}
            >
              <div style={{ height: compact ? 72 : 96, borderRadius: 10, background: `linear-gradient(145deg, #2d2d2d 0%, ${G.greenMid}44 100%)`, marginBottom: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28 }}>🍽</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#eee' }}>{p.title}</div>
              <div style={{ fontSize: 10, fontWeight: 700, color: G.greenLt, marginTop: 4 }}>{p.tag}</div>
            </m.div>
            ))
          )}
        </AnimatePresence>
        {!compact && (
          <div style={{ padding: '10px 14px', textAlign: 'center', fontSize: 11, fontWeight: 700, color: G.greenLt, letterSpacing: '0.06em' }}>
            0/wk → 4/wk · same feed
          </div>
        )}
      </div>
    </div>
  );
}

function SocialEditVisual() {
  return (
    <div style={{ padding: 16, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ height: 80, borderRadius: 10, background: '#d1d5db', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: '#666', fontWeight: 600 }}>Phone shot</div>
        <div style={{ fontSize: 10, color: G.textMuted, marginTop: 6 }}>Before</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <m.div animate={{ scale: [1, 1.02, 1] }} transition={{ repeat: Infinity, duration: 2 }} style={{ height: 80, borderRadius: 10, background: `linear-gradient(145deg, ${G.greenLt}, #fff)`, border: `2px solid ${G.green}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>🍝</m.div>
        <div style={{ fontSize: 10, fontWeight: 700, color: G.green, marginTop: 6 }}>Pro edit</div>
      </div>
    </div>
  );
}

function SocialReelVisual() {
  return (
    <div style={{ padding: 20, textAlign: 'center' }}>
      <m.div animate={{ scale: [1, 1.06, 1] }} transition={{ repeat: Infinity, duration: 1.8 }} style={{ width: 64, height: 64, margin: '0 auto 12px', borderRadius: '50%', background: G.green, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 22, fontWeight: 800 }}>▶</m.div>
      <div style={{ fontSize: 13, fontWeight: 700, color: G.text }}>Reel ready</div>
      <div style={{ fontSize: 11, color: G.textMuted, marginTop: 4 }}>Hook in 2 sec</div>
    </div>
  );
}

function SocialBoostVisual() {
  return (
    <div style={{ padding: 20, textAlign: 'center' }}>
      <m.div animate={{ opacity: [0.7, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} style={{ fontSize: 28, fontWeight: 800, color: G.green }}>2.4k</m.div>
      <div style={{ fontSize: 12, fontWeight: 600, color: G.text }}>locals reached</div>
      <div style={{ fontSize: 11, color: G.textMuted, marginTop: 6 }}>€20 boost · Malta</div>
    </div>
  );
}

function SocialBookVisual() {
  return (
    <div style={{ padding: 16, textAlign: 'center' }}>
      <m.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 1.6 }} style={{ background: G.greenLt, borderRadius: 12, padding: '14px 16px', fontSize: 13, fontWeight: 700, color: G.text }}>
        DM → Table booked · Fri 20:00
      </m.div>
    </div>
  );
}

function SocialWhatsAppVisual() {
  return (
    <div style={{ padding: 16 }}>
      <div style={{ background: '#dcfce7', borderRadius: 12, padding: '12px 14px', fontSize: 12, fontWeight: 600, color: G.text, lineHeight: 1.5 }}>
        <strong>WhatsApp</strong>
        <br />
        3 photos sent · Thursday
      </div>
    </div>
  );
}

export function VoiceCallPulse({ compact = false }: { compact?: boolean }) {
  const [line, setLine] = useState(0);
  const lines = ['Incoming call…', 'Table for 8 Saturday?', 'Terrace 7:30 — lock it?', 'Booked ✓ · staff alerted'];
  useEffect(() => {
    const t = setInterval(() => setLine((l) => (l + 1) % lines.length), 1800);
    return () => clearInterval(t);
  }, [lines.length]);
  return (
    <div style={{ padding: compact ? 12 : 16 }}>
      <div style={{ background: '#0a0a0a', borderRadius: 14, border: `1px solid ${G.greenMid}`, overflow: 'hidden' }}>
        <div style={{ padding: '10px 12px', borderBottom: '1px solid #222', display: 'flex', alignItems: 'center', gap: 8 }}>
          <m.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 0.8 }} style={{ width: 10, height: 10, borderRadius: '50%', background: G.greenLt }} />
          <span style={{ fontSize: 11, fontWeight: 700, color: '#fff' }}>H360 Voice Host</span>
        </div>
        <div style={{ padding: '14px 12px', minHeight: compact ? 72 : 96 }}>
          <AnimatePresence mode="wait">
            <m.div key={line} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} style={{ fontSize: 13, fontWeight: 600, color: '#e2fbe8' }}>
              {lines[line]}
            </m.div>
          </AnimatePresence>
          <div style={{ display: 'flex', gap: 3, marginTop: 12, alignItems: 'flex-end', height: 20 }}>
            {[0, 1, 2, 3, 4].map((i) => (
              <m.div key={i} animate={{ height: [4, 14 + i * 2, 6] }} transition={{ repeat: Infinity, duration: 0.5 + i * 0.05 }} style={{ width: 3, borderRadius: 99, background: G.greenLt }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function VoiceBookPreview() {
  return (
    <div style={{ padding: 16, textAlign: 'center' }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: G.text }}>Sat 19:30 · party of 8</div>
      <m.div animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 1.6 }} style={{ fontSize: 28, fontWeight: 800, color: G.green, marginTop: 8 }}>Locked ✓</m.div>
    </div>
  );
}

function VoiceAlertPreview() {
  return (
    <div style={{ padding: 14, background: '#fef3c7', margin: 12, borderRadius: 12, fontSize: 12, fontWeight: 700, color: '#92400e', lineHeight: 1.45 }}>
      Staff alert · GF noted · terrace
    </div>
  );
}

function VoiceDashPreview() {
  return (
    <div style={{ padding: 16 }}>
      <div style={{ fontSize: 22, fontWeight: 800, color: G.green }}>47</div>
      <div style={{ fontSize: 11, fontWeight: 700, color: G.textMuted }}>calls this week · you approved 3 brain updates</div>
    </div>
  );
}

function VoiceLearnPreview() {
  return (
    <div style={{ padding: 16, textAlign: 'center' }}>
      <m.div animate={{ opacity: [0.6, 1] }} transition={{ repeat: Infinity, duration: 1.4 }} style={{ fontSize: 13, fontWeight: 800, color: G.green }}>Brain update ready</m.div>
      <div style={{ fontSize: 11, color: G.textMuted, marginTop: 6 }}>New lunch menu · approve in dashboard</div>
    </div>
  );
}

const FLOW_NODE_VISUAL: Record<string, () => ReactNode> = {
  scan: () => <MapsRankClimb compact />,
  strategy: () => <KeywordHit term="best restaurant sliema" vol={88} />,
  copy: () => <KeywordHit term="lampuki season malta" vol={72} />,
  publish: () => <ProfileScoreVisual />,
  rank: () => <ResultPingVisual />,
  ring: () => <VoiceCallPulse compact />,
  brain: () => <VoiceCallPulse compact />,
  alert: () => <VoiceAlertPreview />,
  dash: () => <VoiceDashPreview />,
  qr: () => <ReviewTapVisual />,
  form: () => <ReviewTapVisual />,
  stars: () => <ReviewClimbVisual />,
  maps: () => <MapsRankClimb compact />,
  guest: () => <OrderFlowVisual />,
  menu: () => <OrderFlowVisual />,
  kitchen: () => <OrderFlowVisual />,
  owner: () => <MarginVisual />,
  margin: () => <MarginVisual />,
  send: () => <SocialWhatsAppVisual />,
  edit: () => <SocialEditVisual />,
  post: () => <SocialFeedVisual compact postCount={3} />,
  book: () => <SocialBookVisual />,
};

/** Flow step — visual matches the node, not a random chart */
export function FlowStepVisual({ nodeId }: { stepIndex: number; total: number; nodeId: string }) {
  const Visual = FLOW_NODE_VISUAL[nodeId];
  if (Visual) return <>{Visual()}</>;
  return <MapsRankClimb compact />;
}

/** Stack / kinetic — pick visual that matches the lever */
export function LogicVisual({ kind }: { kind: StackPreviewKind }) {
  if (kind === 'maps-rank') return <MapsRankClimb />;
  if (kind === 'review-qr') return <ReviewTapVisual />;
  if (kind === 'review-climb') return <ReviewClimbVisual />;
  if (kind === 'order-qr' || kind === 'kitchen-print') return <OrderFlowVisual />;
  if (kind === 'margin') return <MarginVisual />;
  if (kind === 'social-post') return <SocialFeedVisual />;
  if (kind === 'reels') return <SocialReelVisual />;
  if (kind === 'ad-boost') return <SocialBoostVisual />;
  if (kind === 'voice-call') return <VoiceCallPulse />;
  if (kind === 'voice-book') return <VoiceBookPreview />;
  if (kind === 'voice-alert') return <VoiceAlertPreview />;
  if (kind === 'voice-dash') return <VoiceDashPreview />;
  if (kind === 'voice-learn') return <VoiceLearnPreview />;
  return null;
}
