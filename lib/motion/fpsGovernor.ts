/**
 * Adaptive frame-rate governor.
 *
 * Monitors real frame times via requestAnimationFrame and steps the global
 * quality tier DOWN whenever the running average drops below ~55fps for 30
 * consecutive frames. Tiers only ever step down (never flap back up) so the
 * user never sees quality oscillate. Later WebGL work (Monolith, shards,
 * dust field) subscribes to this to pick particle counts / fall back to
 * pre-rendered video.
 *
 * The rAF loop only runs while at least one subscriber is attached.
 */

export type QualityTier = "high" | "medium" | "low" | "static";

const TIERS: QualityTier[] = ["high", "medium", "low", "static"];
const FPS_FLOOR = 55;
const BAD_FRAMES_NEEDED = 30;
/** Ignore the first frames after (re)start — they include compile/layout spikes. */
const WARMUP_FRAMES = 60;

type Listener = (tier: QualityTier) => void;

let currentTier: QualityTier = "high";
let listeners: Listener[] = [];
let rafId: number | null = null;
let lastTime = 0;
let badFrames = 0;
let frameCount = 0;

function stepDown() {
  const idx = TIERS.indexOf(currentTier);
  if (idx >= TIERS.length - 1) {
    stopLoop(); // already at the floor — nothing left to govern
    return;
  }
  currentTier = TIERS[idx + 1];
  badFrames = 0;
  frameCount = 0; // re-warm after a tier change
  listeners.forEach((l) => l(currentTier));
}

function frame(now: number) {
  rafId = requestAnimationFrame(frame);
  if (document.hidden) {
    lastTime = 0;
    return;
  }
  if (lastTime === 0) {
    lastTime = now;
    return;
  }
  const delta = now - lastTime;
  lastTime = now;
  frameCount++;
  if (frameCount <= WARMUP_FRAMES) return;
  // Ignore absurd deltas (tab switches, debugger pauses)
  if (delta > 250) return;

  if (1000 / delta < FPS_FLOOR) {
    badFrames++;
    if (badFrames >= BAD_FRAMES_NEEDED) stepDown();
  } else {
    badFrames = Math.max(0, badFrames - 2);
  }
}

function startLoop() {
  if (rafId !== null || typeof window === "undefined") return;
  lastTime = 0;
  badFrames = 0;
  frameCount = 0;
  rafId = requestAnimationFrame(frame);
}

function stopLoop() {
  if (rafId !== null) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
}

export function getQualityTier(): QualityTier {
  return currentTier;
}

/**
 * Subscribe to tier changes. Starts the monitor on first subscriber,
 * stops it when the last one unsubscribes. Returns an unsubscribe fn.
 */
export function onQualityTierChange(cb: Listener): () => void {
  listeners.push(cb);
  startLoop();
  return () => {
    listeners = listeners.filter((l) => l !== cb);
    if (listeners.length === 0) stopLoop();
  };
}
