/**
 * Beat 00 sound sprites — synthesized, not sampled.
 *
 * No audio files ship with the site: the three escalating sub-bass thuds,
 * the glass tick and the shatter are rendered into AudioBuffers with plain
 * math the moment the AudioContext exists. Registered through
 * `soundManager.loadSynth`, played on the audio clock via
 * `soundManager.play(name, { at })` so motion and sound share one clock.
 */

import { soundManager } from "./soundManager";

export const INTRO_SOUNDS = {
  rumble: "intro-rumble",
  thud1: "intro-thud-1",
  thud2: "intro-thud-2",
  thud3: "intro-thud-3",
  tick: "intro-glass-tick",
  shatter: "intro-shatter",
} as const;

/** Sub-bass impact: pitch-swept sine + a short noise transient. */
function thud(ctx: BaseAudioContext, freq: number, gain: number): AudioBuffer {
  const sr = ctx.sampleRate;
  const dur = 0.5;
  const n = Math.floor(sr * dur);
  const buf = ctx.createBuffer(1, n, sr);
  const d = buf.getChannelData(0);
  let phase = 0;
  for (let i = 0; i < n; i++) {
    const t = i / sr;
    // Pitch drops fast from ~2.6x down to the fundamental — the "slam"
    const f = freq * (1 + 1.6 * Math.exp(-t * 28));
    phase += (2 * Math.PI * f) / sr;
    const body = Math.sin(phase) * Math.exp(-t * 8);
    const transient = (Math.random() * 2 - 1) * Math.exp(-t * 140) * 0.5;
    // Soft-clip so stacked hits never crackle
    d[i] = Math.tanh((body * 1.1 + transient) * gain * 1.4) * 0.9;
  }
  return buf;
}

/** Tiny bright glass tick — high-passed noise burst, ~60ms. */
function glassTick(ctx: BaseAudioContext): AudioBuffer {
  const sr = ctx.sampleRate;
  const dur = 0.08;
  const n = Math.floor(sr * dur);
  const buf = ctx.createBuffer(1, n, sr);
  const d = buf.getChannelData(0);
  let prevX = 0;
  let prevY = 0;
  for (let i = 0; i < n; i++) {
    const t = i / sr;
    const x = (Math.random() * 2 - 1) * Math.exp(-t * 90);
    // One-pole high-pass keeps only the bright edge
    const y = 0.92 * (prevY + x - prevX);
    prevX = x;
    prevY = y;
    d[i] = y * 0.5;
  }
  return buf;
}

/** Glass shatter: bright noise wash + a handful of decaying "shard" sines. */
function shatter(ctx: BaseAudioContext): AudioBuffer {
  const sr = ctx.sampleRate;
  const dur = 0.9;
  const n = Math.floor(sr * dur);
  const buf = ctx.createBuffer(1, n, sr);
  const d = buf.getChannelData(0);

  // High-passed noise bed
  let prevX = 0;
  let prevY = 0;
  for (let i = 0; i < n; i++) {
    const t = i / sr;
    const x = (Math.random() * 2 - 1) * Math.exp(-t * 7);
    const y = 0.9 * (prevY + x - prevX);
    prevX = x;
    prevY = y;
    d[i] = y * 0.45;
  }

  // Sparkling shard partials — random high sines starting slightly staggered
  for (let s = 0; s < 9; s++) {
    const f = 1600 + Math.random() * 3400;
    const start = Math.floor(Math.random() * 0.12 * sr);
    const decay = 14 + Math.random() * 26;
    const amp = 0.05 + Math.random() * 0.06;
    for (let i = start; i < n; i++) {
      const t = (i - start) / sr;
      d[i] += Math.sin(2 * Math.PI * f * t) * Math.exp(-t * decay) * amp;
    }
  }

  // Deep body under the glass
  let phase = 0;
  for (let i = 0; i < n; i++) {
    const t = i / sr;
    const f = 44 * (1 + 1.4 * Math.exp(-t * 22));
    phase += (2 * Math.PI * f) / sr;
    d[i] = Math.tanh(d[i] + Math.sin(phase) * Math.exp(-t * 6) * 0.8) * 0.92;
  }
  return buf;
}

/** Low rumble bed that fades in under the approach. */
function rumble(ctx: BaseAudioContext): AudioBuffer {
  const sr = ctx.sampleRate;
  const dur = 1.6;
  const n = Math.floor(sr * dur);
  const buf = ctx.createBuffer(1, n, sr);
  const d = buf.getChannelData(0);
  let lp = 0;
  for (let i = 0; i < n; i++) {
    const t = i / sr;
    // One-pole low-pass keeps only the sub band
    lp += 0.012 * ((Math.random() * 2 - 1) - lp);
    const attack = Math.min(1, t / 0.5);
    const release = Math.min(1, Math.max(0, (dur - t) / 0.4));
    d[i] = lp * attack * release * 2.2;
  }
  return buf;
}

let registered = false;

export function registerIntroSounds() {
  if (registered) return;
  registered = true;
  soundManager.loadSynth(INTRO_SOUNDS.rumble, rumble);
  soundManager.loadSynth(INTRO_SOUNDS.thud1, (ctx) => thud(ctx, 48, 0.55));
  soundManager.loadSynth(INTRO_SOUNDS.thud2, (ctx) => thud(ctx, 42, 0.75));
  soundManager.loadSynth(INTRO_SOUNDS.thud3, (ctx) => thud(ctx, 38, 1.0));
  soundManager.loadSynth(INTRO_SOUNDS.tick, glassTick);
  soundManager.loadSynth(INTRO_SOUNDS.shatter, shatter);
}
