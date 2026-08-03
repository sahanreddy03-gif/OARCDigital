"use client";

/**
 * One continuous hero film — wing-shaped shell, no cuts.
 * True full-bleed: left and right touch the screen. No 3D tilt
 * (tilt was foreshortening the sides and creating gaps).
 */
export default function MobileHeroCylindricalVideo() {
  return (
    <div
      className="relative w-screen"
      style={{
        marginLeft: "calc(50% - 50vw)",
        marginRight: "calc(50% - 50vw)",
        height: "36svh",
        minHeight: 248,
        maxHeight: 320,
      }}
      data-testid="hero-mobile-video-shell"
    >
      <div
        className="absolute inset-0 overflow-hidden bg-zinc-950"
        style={{
          // Soft wing curve on the bottom — sides stay flush to the screen
          borderRadius: "0 0 42% 42% / 0 0 36px 36px",
          boxShadow:
            "0 28px 50px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.14)",
        }}
      >
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="OARC hero film"
          data-testid="hero-mobile-video"
        >
          <source src="/media/oarc-hero-sonly-web.mp4" type="video/mp4" />
        </video>

        {/* Convex gloss — reads as one curved surface, not panel cuts */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 120% 80% at 50% 28%, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.04) 40%, transparent 68%)",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/45" />
      </div>
    </div>
  );
}
