"use client";

import { useEffect, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { soundManager } from "@/lib/motion/soundManager";

/**
 * "Sound on" pill — top-right, under the fixed nav.
 * Sound is off by default; the first tap unlocks the Web Audio context
 * (user gesture) and arms the sprite manager for the Beat 00 intro.
 */
export default function SoundToggle() {
  const [enabled, setEnabled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setEnabled(soundManager.enabled);
    return soundManager.subscribe(setEnabled);
  }, []);

  if (!mounted) return null;

  return (
    <button
      type="button"
      onClick={() => void soundManager.toggle()}
      aria-pressed={enabled}
      aria-label={enabled ? "Turn sound off" : "Turn sound on"}
      data-testid="button-sound-toggle"
      className="fixed right-3 top-16 z-40 flex min-h-8 items-center gap-1.5 rounded-full border border-white/15 bg-black/50 px-3 text-[11px] font-semibold uppercase tracking-widest text-white/90 backdrop-blur-md transition-opacity hover:opacity-100 md:right-5 md:top-20"
      style={{ opacity: enabled ? 1 : 0.75 }}
    >
      {enabled ? <Volume2 className="h-3.5 w-3.5" /> : <VolumeX className="h-3.5 w-3.5" />}
      <span>{enabled ? "Sound on" : "Sound"}</span>
    </button>
  );
}
