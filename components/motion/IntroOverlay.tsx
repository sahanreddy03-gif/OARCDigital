"use client";

/**
 * Beat 00 — The Logo Strike.
 *
 * Full-screen intro overlay: the OARC mark strikes the "glass" of the
 * screen three times and punches through, shattering into shards that
 * dissolve into the chrome-dust ambient layer (ChromeDust listens for the
 * `oarc:shatter` event). The intro doubles as the site's loading screen —
 * hit 3 is gated on `preloadHeroAssets()` (fonts + hero image decode +
 * GPU warm frame) with a menacing idle pulse while it waits.
 *
 * - Desktop first visit: ~2.4s three-hit auto-play (silent until the user
 *   has opted into sound; a sound pill sits inside the overlay).
 * - Mobile first visit: tap-to-enter frame, then a compressed two-hit cut
 *   with haptic pulses. Auto-proceeds silently if the tap never comes.
 * - Repeat visit (sessionStorage): 0.4s one-hit micro-cut.
 * - prefers-reduced-motion: overlay never shows (CSS + boot script).
 * - Click / Escape skips at any point.
 *
 * SEO/CWV safety: the hero HTML renders under this overlay from ms 0; the
 * overlay is fixed-position (no layout shift) and removed from the DOM
 * when done. A synchronous boot script hides it pre-paint for
 * reduced-motion visitors and includes a 9s no-hydration failsafe.
 */

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Volume2, VolumeX } from "lucide-react";
import { soundManager } from "@/lib/motion/soundManager";
import { registerIntroSounds, INTRO_SOUNDS } from "@/lib/motion/introSounds";
import { preloadHeroAssets } from "@/lib/motion/prewarm";

const MARK_SRC = "/attached_assets/image_1767660951950.png";
const SEEN_KEY = "oarc-intro-seen";

// Desktop choreography (seconds on the shared clock)
const IMPACT_1 = 0.79; // rush starts 0.55, lands here
const IMPACT_2 = 1.35; // rush starts 1.15
const FREEZE_AT = 1.76;

const BOOT_SCRIPT = `(function(){try{var el=document.getElementById('oarc-intro');if(!el)return;if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){el.style.display='none';return;}var seen=false;try{seen=sessionStorage.getItem('${SEEN_KEY}')==='1';}catch(_){}if(!seen){document.body.style.overflow='hidden';}setTimeout(function(){if(el.style.display!=='none'&&!el.getAttribute('data-intro-live')){el.style.display='none';document.body.style.overflow='';}},9000);}catch(e){}})();`;

function markSeen() {
  try {
    sessionStorage.setItem(SEEN_KEY, "1");
  } catch {
    /* private mode */
  }
}

/** Jagged crack paths radiating from the center of a 0-100 viewBox. */
function makeCrackPaths(): string[] {
  const paths: string[] = [];
  const cracks = 9;
  for (let i = 0; i < cracks; i++) {
    const baseAngle =
      (i / cracks) * Math.PI * 2 + (Math.random() - 0.5) * 0.5;
    const segments = 5 + Math.floor(Math.random() * 3);
    const totalLen = 30 + Math.random() * 42;
    let x = 50;
    let y = 50;
    let angle = baseAngle;
    let d = `M ${x.toFixed(1)} ${y.toFixed(1)}`;
    for (let s = 0; s < segments; s++) {
      angle += (Math.random() - 0.5) * 0.7;
      const step = totalLen / segments;
      x += Math.cos(angle) * step;
      y += Math.sin(angle) * step;
      d += ` L ${x.toFixed(1)} ${y.toFixed(1)}`;
      // Occasional small branch
      if (Math.random() < 0.35 && s > 0) {
        const bAngle = angle + (Math.random() < 0.5 ? 1 : -1) * (0.6 + Math.random() * 0.5);
        const bx = x + Math.cos(bAngle) * step * 0.6;
        const by = y + Math.sin(bAngle) * step * 0.6;
        paths.push(
          `M ${x.toFixed(1)} ${y.toFixed(1)} L ${bx.toFixed(1)} ${by.toFixed(1)}`,
        );
      }
    }
    paths.push(d);
  }
  return paths;
}

/**
 * Build a jittered-grid shard tessellation (Voronoi-ish, seam-free because
 * neighbouring shards share jittered grid points). Returns the shard divs.
 */
function buildShards(
  container: HTMLDivElement,
  cols: number,
  rows: number,
): HTMLDivElement[] {
  const pts: { x: number; y: number }[][] = [];
  for (let r = 0; r <= rows; r++) {
    pts[r] = [];
    for (let c = 0; c <= cols; c++) {
      const edgeX = c === 0 || c === cols;
      const edgeY = r === 0 || r === rows;
      pts[r][c] = {
        x: (c / cols) * 100 + (edgeX ? 0 : (Math.random() - 0.5) * (100 / cols) * 0.6),
        y: (r / rows) * 100 + (edgeY ? 0 : (Math.random() - 0.5) * (100 / rows) * 0.6),
      };
    }
  }
  const shards: HTMLDivElement[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const p1 = pts[r][c];
      const p2 = pts[r][c + 1];
      const p3 = pts[r + 1][c + 1];
      const p4 = pts[r + 1][c];
      const el = document.createElement("div");
      el.style.position = "absolute";
      el.style.inset = "0";
      el.style.willChange = "transform, opacity";
      el.style.clipPath = `polygon(${p1.x}% ${p1.y}%, ${p2.x}% ${p2.y}%, ${p3.x}% ${p3.y}%, ${p4.x}% ${p4.y}%)`;
      const tone = 8 + Math.floor(Math.random() * 8);
      el.style.background = `linear-gradient(${Math.floor(Math.random() * 360)}deg, rgb(${tone + 6}, ${tone + 6}, ${tone + 10}), rgb(${tone}, ${tone}, ${tone + 2}))`;
      el.dataset.cx = String((p1.x + p2.x + p3.x + p4.x) / 4);
      el.dataset.cy = String((p1.y + p2.y + p3.y + p4.y) / 4);
      container.appendChild(el);
      shards.push(el);
    }
  }
  return shards;
}

export default function IntroOverlay() {
  const rootRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null); // shake target
  const markRef = useRef<HTMLImageElement>(null);
  const fogRef = useRef<HTMLDivElement>(null);
  const grainRef = useRef<HTMLDivElement>(null);
  const ringARef = useRef<HTMLDivElement>(null);
  const ringBRef = useRef<HTMLDivElement>(null);
  const crackRef = useRef<SVGSVGElement>(null);
  const flashRef = useRef<HTMLDivElement>(null);
  const shardsRef = useRef<HTMLDivElement>(null);

  const [gone, setGone] = useState(false);
  const [tapMode, setTapMode] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const [cracks, setCracks] = useState<string[]>([]);

  // Imperative machinery shared between handlers and the effect
  const doneRef = useRef(false);
  const startedRef = useRef(false); // mobile: tap consumed / auto-started
  const modeRef = useRef<"full" | "micro" | "tap" | null>(null);
  const runMobileRef = useRef<() => void>(() => {});
  const skipRef = useRef<() => void>(() => {});

  useEffect(() => {
    const root = rootRef.current;
    const wrap = wrapRef.current;
    const mark = markRef.current;
    if (!root || !wrap || !mark) return;
    root.setAttribute("data-intro-live", "1");

    const finish = () => {
      if (doneRef.current) return;
      doneRef.current = true;
      document.body.style.overflow = "";
      markSeen();
      setGone(true);
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      finish();
      return;
    }

    let seen = false;
    try {
      seen = sessionStorage.getItem(SEEN_KEY) === "1";
    } catch {
      /* private mode */
    }

    // Lock scroll while the overlay owns the screen (boot script already
    // did this for full first-visit loads; client-side navs land here).
    document.body.style.overflow = "hidden";

    registerIntroSounds();
    setSoundOn(soundManager.enabled);
    const unsubSound = soundManager.subscribe(setSoundOn);

    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const tweens: (gsap.core.Timeline | gsap.core.Tween)[] = [];
    const timers: ReturnType<typeof setTimeout>[] = [];
    const track = <T extends gsap.core.Timeline | gsap.core.Tween>(t: T): T => {
      tweens.push(t);
      return t;
    };

    // Start the hidden preloader immediately — it runs under hits 1–2.
    const ready = preloadHeroAssets(4000);

    const vibrate = (pattern: number | number[]) => {
      if (isTouch && "vibrate" in navigator) {
        try {
          navigator.vibrate(pattern);
        } catch {
          /* unsupported */
        }
      }
    };

    // ── Sound: schedule-ahead on the audio clock when possible; hit
    // callbacks fall back to immediate playback (covers mid-intro unlock).
    const scheduled = { h1: false, h2: false };
    const scheduleAhead = (t1: number, t2: number) => {
      const base = soundManager.now;
      soundManager.play(INTRO_SOUNDS.rumble, { at: base + 0.05, gain: 0.6 });
      scheduled.h1 =
        soundManager.play(INTRO_SOUNDS.thud1, { at: base + t1, gain: 0.75 }) !== null;
      scheduled.h2 =
        soundManager.play(INTRO_SOUNDS.thud2, { at: base + t2, gain: 0.9 }) !== null;
      if (scheduled.h2) soundManager.play(INTRO_SOUNDS.tick, { at: base + t2 });
    };

    const impact = (n: 1 | 2) => {
      const px = n === 1 ? 4 : 6;
      track(
        gsap.to(wrap, {
          keyframes: [
            { x: -px, y: px * 0.4 },
            { x: px * 0.8, y: -px * 0.3 },
            { x: -px * 0.4, y: 0 },
            { x: 0, y: 0 },
          ],
          duration: 0.16,
          ease: "power1.out",
        }),
      );
      const ring = n === 1 ? ringARef.current : ringBRef.current;
      if (ring) {
        track(
          gsap.fromTo(
            ring,
            { scale: 0.15, opacity: 0.5 },
            { scale: 9, opacity: 0, duration: 0.7, ease: "power2.out" },
          ),
        );
      }
      if (n === 1) {
        if (!scheduled.h1) soundManager.play(INTRO_SOUNDS.thud1, { gain: 0.75 });
        vibrate(35);
      } else {
        if (crackRef.current) {
          track(gsap.to(crackRef.current, { opacity: 1, duration: 0.06 }));
        }
        if (!scheduled.h2) {
          soundManager.play(INTRO_SOUNDS.thud2, { gain: 0.9 });
          soundManager.play(INTRO_SOUNDS.tick);
        }
        vibrate(50);
      }
    };

    // ── HIT 3: white flash, shatter, dissolve into the dust layer.
    const runShatter = (shardCols: number, shardRows: number) => {
      if (doneRef.current) return;
      const shardsEl = shardsRef.current;
      const flash = flashRef.current;
      root.style.pointerEvents = "none";
      soundManager.play(INTRO_SOUNDS.thud3, { gain: 1 });
      soundManager.play(INTRO_SOUNDS.shatter);
      vibrate(60);

      if (flash) {
        gsap.set(flash, { opacity: 0.9 });
        track(gsap.to(flash, { opacity: 0, duration: 0.18, ease: "power1.out" }));
      }

      if (shardsEl) {
        const shards = buildShards(shardsEl, shardCols, shardRows);
        // Swap the solid overlay for the shard tessellation in one frame
        gsap.set(
          [wrap, fogRef.current, grainRef.current, crackRef.current, ringARef.current, ringBRef.current].filter(Boolean),
          { opacity: 0 },
        );
        root.style.backgroundColor = "transparent";
        window.dispatchEvent(new CustomEvent("oarc:shatter"));

        shards.forEach((el) => {
          const cx = Number(el.dataset.cx);
          const cy = Number(el.dataset.cy);
          const dx = (cx - 50) / 50;
          const dy = (cy - 50) / 50;
          const dist = Math.hypot(dx, dy);
          track(
            gsap.to(el, {
              x: dx * (140 + Math.random() * 200),
              y: dy * 90 + 260 + Math.random() * 280,
              rotation: (Math.random() - 0.5) * 70,
              scale: 1.35 + Math.random() * 0.55, // falls *toward* the viewer
              opacity: 0,
              duration: 0.5 + Math.random() * 0.3,
              delay: Math.random() * 0.06 + dist * 0.06,
              ease: "power2.in",
            }),
          );
        });
      } else {
        window.dispatchEvent(new CustomEvent("oarc:shatter"));
      }
      timers.push(setTimeout(finish, 950));
    };

    // ── Elastic gate: the freeze holds until assets are ready. If they
    // aren't ready ~0.4s in, the mark idle-pulses menacingly in the dark.
    const gate = (onReady: () => void) => {
      const freezeStart = performance.now();
      let idle: gsap.core.Tween | null = null;
      const idleTimer = setTimeout(() => {
        idle = track(
          gsap.to(mark, {
            scale: "+=0.04",
            duration: 0.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          }),
        );
      }, 400);
      timers.push(idleTimer);
      void ready.then(() => {
        if (doneRef.current) return;
        // Always honor the full 200ms freeze — it's the money beat.
        const wait = Math.max(0, 200 - (performance.now() - freezeStart));
        timers.push(
          setTimeout(() => {
            if (doneRef.current) return;
            clearTimeout(idleTimer);
            idle?.kill();
            onReady();
          }, wait),
        );
      });
    };

    // ── Desktop first visit: the full three-hit strike.
    const runFull = () => {
      modeRef.current = "full";
      setCracks(makeCrackPaths());
      gsap.set(mark, { scale: 0.02, opacity: 0.4, filter: "blur(6px)" });
      scheduleAhead(IMPACT_1, IMPACT_2);
      const tl = track(gsap.timeline());
      // Distant glint sharpens slightly in the fog
      tl.to(mark, { opacity: 0.5, duration: 0.5, ease: "none" }, 0);
      // HIT 1 — rush, slam, recoil
      tl.to(
        mark,
        { scale: 0.62, opacity: 1, filter: "blur(0px)", duration: 0.24, ease: "power4.in" },
        0.55,
      );
      tl.call(() => impact(1), [], IMPACT_1);
      tl.to(mark, { scale: 0.42, duration: 0.3, ease: "power2.out" }, IMPACT_1 + 0.01);
      // HIT 2 — harder; cracks stay
      tl.to(mark, { scale: 0.88, duration: 0.2, ease: "power4.in" }, 1.15);
      tl.call(() => impact(2), [], IMPACT_2);
      tl.to(mark, { scale: 0.7, duration: 0.25, ease: "power2.out" }, IMPACT_2 + 0.01);
      // Rise to dead center for THE FREEZE
      tl.to(mark, { scale: 1.05, duration: 0.13, ease: "power2.out" }, 1.62);
      tl.call(
        () => {
          tl.pause();
          gate(() => {
            gsap.set(mark, { scale: 1.05 });
            runShatter(8, 5);
          });
        },
        [],
        FREEZE_AT,
      );
    };

    // ── Repeat visit: 0.4s one-hit micro-cut.
    const runMicro = () => {
      modeRef.current = "micro";
      gsap.set(mark, { scale: 0.5, opacity: 0, filter: "blur(2px)" });
      const tl = track(gsap.timeline());
      tl.to(mark, { scale: 1, opacity: 1, filter: "blur(0px)", duration: 0.16, ease: "power3.in" });
      tl.call(() => impact(1));
      tl.to(root, { opacity: 0, duration: 0.2, ease: "power1.out" }, 0.26);
      tl.call(finish, [], 0.48);
    };

    // ── Mobile first visit: tap-to-enter, then a compressed two-hit cut.
    const runMobile = () => {
      if (startedRef.current || doneRef.current) return;
      startedRef.current = true;
      setTapMode(false);
      vibrate([0, 40, 60, 50]);
      void soundManager.unlock(); // the tap is the gesture — context is live now
      setCracks(makeCrackPaths());
      gsap.killTweensOf(mark); // stop the tap-frame pulse
      gsap.set(mark, { scale: 0.05, opacity: 0.4, filter: "blur(4px)" });
      scheduleAhead(0.3, 0.73);
      const tl = track(gsap.timeline());
      tl.to(mark, { scale: 0.7, opacity: 1, filter: "blur(0px)", duration: 0.2, ease: "power4.in" }, 0.1);
      tl.call(() => impact(1), [], 0.3);
      tl.to(mark, { scale: 0.5, duration: 0.2, ease: "power2.out" }, 0.31);
      tl.to(mark, { scale: 1.05, duration: 0.18, ease: "power4.in" }, 0.55);
      tl.call(() => impact(2), [], 0.73);
      tl.call(
        () => {
          tl.pause();
          gate(() => runShatter(4, 6));
        },
        [],
        0.95,
      );
    };
    runMobileRef.current = runMobile;

    // ── Skip (click on desktop / Escape anywhere)
    const skip = () => {
      if (doneRef.current) return;
      doneRef.current = true; // freeze all gate callbacks first
      tweens.forEach((t) => t.kill());
      timers.forEach((t) => clearTimeout(t));
      window.dispatchEvent(new CustomEvent("oarc:shatter"));
      gsap.to(root, {
        opacity: 0,
        duration: 0.22,
        ease: "power1.out",
        onComplete: () => {
          document.body.style.overflow = "";
          markSeen();
          setGone(true);
        },
      });
    };
    skipRef.current = skip;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") skip();
    };
    window.addEventListener("keydown", onKey);

    // Rings pivot from their own center
    gsap.set(
      [ringARef.current, ringBRef.current].filter(Boolean),
      { xPercent: -50, yPercent: -50, opacity: 0 },
    );

    if (seen) {
      runMicro();
    } else if (isTouch) {
      modeRef.current = "tap";
      setTapMode(true);
      // Faint menacing pulse while waiting for the tap
      gsap.set(mark, { scale: 0.3, opacity: 0.5, filter: "blur(1px)" });
      track(
        gsap.to(mark, {
          scale: 0.34,
          opacity: 0.65,
          duration: 0.9,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        }),
      );
      // The door must never become a wall — proceed silently after 5s
      timers.push(setTimeout(runMobile, 5000));
    } else {
      runFull();
    }

    return () => {
      unsubSound();
      window.removeEventListener("keydown", onKey);
      tweens.forEach((t) => t.kill());
      timers.forEach((t) => clearTimeout(t));
      document.body.style.overflow = "";
    };
  }, []);

  if (gone) return null;

  const handleClick = () => {
    if (modeRef.current === "tap" && !startedRef.current) {
      runMobileRef.current();
    } else {
      skipRef.current();
    }
  };

  return (
    <>
      <div
        id="oarc-intro"
        ref={rootRef}
        suppressHydrationWarning
        onClick={handleClick}
        className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden motion-reduce:hidden"
        style={{ backgroundColor: "#0a0a0c", cursor: "pointer" }}
        data-testid="overlay-intro"
        role="presentation"
      >
        {/* Depth fog */}
        <div
          ref={fogRef}
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 48%, rgba(38,42,52,0.5), rgba(10,10,12,0) 70%)",
          }}
        />
        {/* Film grain */}
        <div
          ref={grainRef}
          className="absolute inset-0 opacity-[0.12]"
          style={{ backgroundImage: "url(/grain.svg)", backgroundSize: "180px 180px" }}
        />
        {/* Shockwave ripples */}
        <div
          ref={ringARef}
          className="absolute left-1/2 top-1/2 h-28 w-28 rounded-full border border-white/40"
          style={{ opacity: 0 }}
        />
        <div
          ref={ringBRef}
          className="absolute left-1/2 top-1/2 h-28 w-28 rounded-full border border-white/50"
          style={{ opacity: 0 }}
        />
        {/* The mark (shake wrapper around scale target) */}
        <div ref={wrapRef} className="relative flex items-center justify-center">
          <img
            ref={markRef}
            src={MARK_SRC}
            alt=""
            aria-hidden="true"
            width={380}
            height={380}
            className="h-[38vmin] w-[38vmin] object-contain select-none"
            style={{ transform: "scale(0.02)", opacity: 0.4, filter: "blur(6px)" }}
            draggable={false}
            data-testid="img-intro-mark"
          />
        </div>
        {/* Persistent micro-cracks (revealed at hit 2) */}
        <svg
          ref={crackRef}
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
          style={{ opacity: 0 }}
        >
          {cracks.map((d, i) => (
            <path
              key={i}
              d={d}
              fill="none"
              stroke="rgba(255,255,255,0.26)"
              strokeWidth={0.28}
              strokeLinecap="round"
            />
          ))}
        </svg>
        {/* Tap-to-enter hint (mobile first visit) */}
        {tapMode && (
          <div
            className="absolute bottom-20 left-0 right-0 flex justify-center"
            data-testid="text-intro-tap"
          >
            <span className="animate-pulse text-[11px] uppercase tracking-[0.5em] text-white/60">
              Tap to enter
            </span>
          </div>
        )}
        {/* Sound pill — lives inside the overlay so it's reachable mid-intro */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            void soundManager.toggle();
          }}
          className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] text-white/70 backdrop-blur-sm"
          data-testid="button-intro-sound"
          aria-label={soundOn ? "Mute intro sound" : "Enable intro sound"}
        >
          {soundOn ? <Volume2 className="h-3 w-3" /> : <VolumeX className="h-3 w-3" />}
          <span>Sound</span>
        </button>
        {/* One-frame white flash at hit 3 */}
        <div
          ref={flashRef}
          className="pointer-events-none absolute inset-0 bg-white"
          style={{ opacity: 0 }}
        />
        {/* Shard tessellation container (populated at hit 3) */}
        <div
          ref={shardsRef}
          className="pointer-events-none absolute inset-0"
          style={{ perspective: "1000px" }}
        />
      </div>
      {/* Synchronous boot: hide for reduced-motion, lock scroll for first
          visits, 9s no-hydration failsafe. Runs on parse, before paint. */}
      <script dangerouslySetInnerHTML={{ __html: BOOT_SCRIPT }} />
    </>
  );
}
