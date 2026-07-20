/**
 * Web Audio sound-sprite manager.
 *
 * - Muted by default; the user opts in via the "sound" pill (SoundToggle).
 * - AudioContext is created lazily and resumed on the first user gesture
 *   (browsers block audio before interaction).
 * - Sprites are fetched eagerly but decoded once a context exists, so the
 *   Beat 00 intro can schedule its thuds on the audio clock the moment the
 *   user unlocks sound.
 * - `play(name, { at })` schedules on the AudioContext clock (currentTime
 *   based) so sound and GSAP motion can share one clock and never drift.
 */

type SynthFn = (ctx: BaseAudioContext) => AudioBuffer;

type SpriteState = {
  raw: ArrayBuffer | null;
  buffer: AudioBuffer | null;
  loading: Promise<void> | null;
  synth?: SynthFn;
};

type Listener = (enabled: boolean) => void;

const STORAGE_KEY = "oarc-sound-enabled";

class SoundManager {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private sprites = new Map<string, SpriteState>();
  private listeners: Listener[] = [];
  private _enabled = false;
  private unlockBound = false;

  constructor() {
    if (typeof window !== "undefined") {
      // Sound is opt-in per session; remember an explicit "on" choice.
      this._enabled = window.localStorage.getItem(STORAGE_KEY) === "1";
      if (this._enabled) this.bindUnlock();
    }
  }

  get enabled() {
    return this._enabled;
  }

  /** Audio clock, in seconds. 0 until the context exists. */
  get now(): number {
    return this.ctx?.currentTime ?? 0;
  }

  subscribe(cb: Listener): () => void {
    this.listeners.push(cb);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== cb);
    };
  }

  /** Fetch a sprite file. Safe to call early; decode happens post-unlock. */
  load(name: string, url: string): Promise<void> {
    const existing = this.sprites.get(name);
    if (existing?.loading) return existing.loading;
    const state: SpriteState = { raw: null, buffer: null, loading: null };
    state.loading = fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error(`sound sprite ${name}: HTTP ${r.status}`);
        return r.arrayBuffer();
      })
      .then(async (buf) => {
        state.raw = buf;
        if (this.ctx) await this.decode(name, state);
      })
      .catch((err) => {
        console.warn("[sound]", err);
      });
    this.sprites.set(name, state);
    return state.loading;
  }

  /**
   * Register a procedurally synthesized sprite. The synth function runs
   * once the AudioContext exists (it needs the context's sample rate).
   * Used by the Beat 00 intro — no audio files ship with the site.
   */
  loadSynth(name: string, synth: SynthFn) {
    if (this.sprites.get(name)?.buffer) return;
    const state: SpriteState = { raw: null, buffer: null, loading: null, synth };
    this.sprites.set(name, state);
    if (this.ctx) this.buildSynth(name, state);
  }

  private buildSynth(name: string, state: SpriteState) {
    if (!this.ctx || state.buffer || !state.synth) return;
    try {
      state.buffer = state.synth(this.ctx);
    } catch (err) {
      console.warn(`[sound] synth failed for ${name}`, err);
    }
  }

  private async decode(name: string, state: SpriteState) {
    if (!this.ctx || !state.raw || state.buffer) return;
    try {
      // decodeAudioData detaches the buffer — copy so retries stay possible
      state.buffer = await this.ctx.decodeAudioData(state.raw.slice(0));
    } catch (err) {
      console.warn(`[sound] decode failed for ${name}`, err);
    }
  }

  /**
   * Schedule a sprite on the audio clock.
   * @param at absolute AudioContext time in seconds (defaults to "now").
   * @returns the time it was scheduled for, or null if it couldn't play.
   */
  play(
    name: string,
    opts: { at?: number; gain?: number; playbackRate?: number } = {},
  ): number | null {
    if (!this._enabled || !this.ctx || !this.masterGain) return null;
    const sprite = this.sprites.get(name);
    if (!sprite?.buffer) return null;
    const when = Math.max(opts.at ?? this.ctx.currentTime, this.ctx.currentTime);
    const src = this.ctx.createBufferSource();
    src.buffer = sprite.buffer;
    if (opts.playbackRate) src.playbackRate.value = opts.playbackRate;
    const g = this.ctx.createGain();
    g.gain.value = opts.gain ?? 1;
    src.connect(g).connect(this.masterGain);
    src.start(when);
    return when;
  }

  async setEnabled(on: boolean) {
    this._enabled = on;
    try {
      window.localStorage.setItem(STORAGE_KEY, on ? "1" : "0");
    } catch {
      /* private mode */
    }
    if (on) {
      await this.unlock();
      this.ramp(1);
    } else {
      this.ramp(0);
    }
    this.listeners.forEach((l) => l(on));
  }

  toggle() {
    return this.setEnabled(!this._enabled);
  }

  private ramp(to: number) {
    if (!this.ctx || !this.masterGain) return;
    const t = this.ctx.currentTime;
    this.masterGain.gain.cancelScheduledValues(t);
    this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, t);
    this.masterGain.gain.linearRampToValueAtTime(to, t + 0.25);
  }

  /** Create/resume the AudioContext. Must be called from a user gesture. */
  async unlock(): Promise<void> {
    if (typeof window === "undefined") return;
    if (!this.ctx) {
      const Ctor =
        window.AudioContext ??
        (window as unknown as { webkitAudioContext?: typeof AudioContext })
          .webkitAudioContext;
      if (!Ctor) return;
      this.ctx = new Ctor();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = this._enabled ? 1 : 0;
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === "suspended") {
      try {
        await this.ctx.resume();
      } catch {
        /* will retry on next gesture */
      }
    }
    // Decode anything fetched before the context existed
    this.sprites.forEach((state, name) => {
      if (state.raw && !state.buffer) void this.decode(name, state);
      if (state.synth && !state.buffer) this.buildSynth(name, state);
    });
  }

  /** Arm a one-shot unlock on the next user interaction. */
  bindUnlock() {
    if (this.unlockBound || typeof window === "undefined") return;
    this.unlockBound = true;
    const handler = () => {
      void this.unlock();
      window.removeEventListener("pointerdown", handler);
      window.removeEventListener("keydown", handler);
    };
    window.addEventListener("pointerdown", handler, { passive: true });
    window.addEventListener("keydown", handler);
  }
}

export const soundManager = new SoundManager();
