'use client';

import { useEffect, useRef } from 'react';
import { AI_AGENTS_HERO_POSTER, AI_AGENTS_HERO_VIDEO } from '@/lib/media/aiAgentsHeroVideo';

type Props = {
  objectPosition?: string;
  overlay?: 'bottom' | 'full' | 'none';
  className?: string;
  style?: React.CSSProperties;
};

/** Full-bleed autoplay 3D avatar video — same high-quality asset as /ai-agents */
export default function AiAgentsHeroVideo({
  objectPosition = 'center top',
  overlay = 'bottom',
  className = '',
  style,
}: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    ref.current?.play().catch(() => {});
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} style={style}>
      <video
        ref={ref}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={AI_AGENTS_HERO_POSTER}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition }}
      >
        <source src={AI_AGENTS_HERO_VIDEO} type="video/mp4" />
      </video>
      {overlay === 'bottom' && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
      )}
      {overlay === 'full' && (
        <div className="pointer-events-none absolute inset-0 bg-black/45" />
      )}
    </div>
  );
}

/** Large showcase — full 3D character visible (not a small circle crop) */
export function AiAgentsVideoShowcase({
  speaking = false,
  accentLight = '#4ade80',
  label = 'LIVE',
}: {
  speaking?: boolean;
  accentLight?: string;
  label?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    ref.current?.play().catch(() => {});
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        borderRadius: 24,
        overflow: 'hidden',
        aspectRatio: '3/4',
        maxHeight: 520,
        width: '100%',
        boxShadow: speaking
          ? `0 0 0 2px ${accentLight}66, 0 32px 80px rgba(0,0,0,0.55), 0 0 60px ${accentLight}33`
          : '0 32px 80px rgba(0,0,0,0.45)',
        border: `1px solid ${accentLight}33`,
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
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
      >
        <source src={AI_AGENTS_HERO_VIDEO} type="video/mp4" />
      </video>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 45%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 16, left: 16, right: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: accentLight, boxShadow: speaking ? `0 0 12px ${accentLight}` : 'none' }} />
          <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.12em', color: '#fff' }}>{label}</span>
        </div>
        <span style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.08em' }}>OARC 3D · HQ</span>
      </div>
    </div>
  );
}
