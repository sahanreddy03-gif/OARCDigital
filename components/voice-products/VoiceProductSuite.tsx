'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { m } from 'framer-motion';
import { VOICE_PRODUCTS } from '@/lib/voice-products/voiceProductBrands';
import { AI_AGENTS_HERO_POSTER, AI_AGENTS_HERO_VIDEO } from '@/lib/media/aiAgentsHeroVideo';

function VideoCardPreview({ accentLight }: { accentLight: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    ref.current?.play().catch(() => {});
  }, []);
  return (
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <video ref={ref} autoPlay loop muted playsInline preload="auto" poster={AI_AGENTS_HERO_POSTER} className="h-full w-full object-cover object-top">
        <source src={AI_AGENTS_HERO_VIDEO} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      <div className="absolute bottom-3 left-3 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: accentLight }} />
        <span className="text-[10px] font-bold tracking-widest text-white">OARC 3D · LIVE</span>
      </div>
    </div>
  );
}

/** Six voice-AI products — each its own "company" on /ai-agents */
export default function VoiceProductSuite() {
  return (
    <section className="py-20 md:py-28 bg-black border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'linear-gradient(rgba(74,222,128,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.06) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* Featured 3D video strip — same HQ asset as /ai-agents hero */}
      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
        <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[21/9] max-h-[340px]">
          <video autoPlay loop muted playsInline preload="auto" poster={AI_AGENTS_HERO_POSTER} className="absolute inset-0 h-full w-full object-cover object-top">
            <source src={AI_AGENTS_HERO_VIDEO} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-12">
            <p className="text-xs font-bold tracking-[0.2em] text-emerald-400 mb-2">OARC 3D · HIGH QUALITY</p>
            <h3 className="text-2xl md:text-4xl font-bold text-white max-w-lg leading-tight">The same 3D host you see on AI Agents — now on every voice product.</h3>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <p className="text-xs font-bold tracking-[0.2em] text-emerald-400 mb-3 text-center">VOICE AI SUITE</p>
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-4 tracking-tight">
          Six products. Six brains. One operator.
        </h2>
        <p className="text-white/60 text-center max-w-2xl mx-auto mb-14 text-lg">
          Hover any card — watch the 3D host come alive. Each product is its own company.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VOICE_PRODUCTS.map((p, i) => (
            <m.div key={p.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
              <Link href={p.path} className="group block h-full rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:border-emerald-400/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(74,222,128,0.15)]">
                <div className="relative h-44 overflow-hidden bg-black">
                  <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0" style={{ background: `linear-gradient(145deg, ${p.accent} 0%, #000 100%)` }} />
                  <div className="absolute bottom-3 left-4 z-10 transition-opacity group-hover:opacity-0">
                    <span className="text-2xl font-black text-white tracking-tight">{p.companyName}</span>
                    <p className="text-xs text-white/70 font-medium">{p.companyTag}</p>
                  </div>
                  <VideoCardPreview accentLight={p.accentLight} />
                </div>
                <div className="p-5">
                  <p className="text-sm font-bold text-emerald-400 mb-2">{p.metric.value} · {p.metric.label}</p>
                  <p className="text-white/90 font-semibold text-base leading-snug mb-3">{p.hook}</p>
                  <span className="text-sm font-bold text-white/50 group-hover:text-emerald-400 transition-colors">Explore {p.companyName} →</span>
                </div>
              </Link>
            </m.div>
          ))}
        </div>

        <p className="text-center mt-12 text-white/40 text-sm">
          Restaurants: also see{' '}
          <Link href="/h360/restaurant-phone-ai-malta" className="text-emerald-400 font-semibold hover:underline">H360 Voice Host</Link>
          {' '}inside the full Malta restaurant stack.
        </p>
      </div>
    </section>
  );
}
