"use client";

/**
 * Closed carousel grid — BrandLyft-style continuous smooth slide.
 * CSS-driven (GPU) so it never sticks / lags. Chip size unchanged.
 */
const CHIP = (name: string) => `/attached_assets/carousel-chips/${name}-chip.webp`;

const services = [
  { text: "Digital Marketing", image: CHIP("digital-marketing-optimized") },
  { text: "Social Media Management", image: CHIP("social-media-management-optimized") },
  { text: "AI Video Production", image: CHIP("ai-video-production-optimized") },
  { text: "Branding Services", image: CHIP("branding-services-optimized") },
  { text: "Paid Advertising", image: CHIP("paid-advertising-optimized") },
  { text: "Website Design", image: CHIP("website-design-optimized") },
  { text: "Lead Generation", image: CHIP("lead-generation-optimized") },
  { text: "Creative Ad Campaigns", image: CHIP("creative-ad-campaigns-optimized") },
  { text: "Funnel Automation", image: CHIP("funnel-automation-optimized") },
  { text: "Sales AI Employees", image: CHIP("sales-ai-employee-optimized") },
  { text: "Support AI Employees", image: CHIP("support-ai-employee-optimized") },
  { text: "Mobile Applications", image: CHIP("mobile-apps-robot-optimized") },
  { text: "Web Applications", image: CHIP("web-applications-optimized") },
  { text: "Custom AI Solutions", image: CHIP("custom-ai-solutions-robots-optimized") },
  { text: "AI Consulting", image: CHIP("ai-consulting-presentation-optimized") },
  { text: "MVP Development", image: CHIP("custom-ai-solutions-robots-optimized") },
];

const CARD_W = 168;
const CARD_H = 62;
const THUMB = 48;
const GAP = 10; // closed grid
const STEP = CARD_W + GAP;
const LOOP_PX = services.length * STEP;
const DURATION_S = LOOP_PX / 78; // ~78px/s continuous

const styles = `
  @keyframes hero-grid-slide {
    from { transform: translate3d(0, 0, 0); }
    to { transform: translate3d(${-LOOP_PX}px, 0, 0); }
  }
  .hero-grid-track {
    animation: hero-grid-slide ${DURATION_S}s linear infinite;
    will-change: transform;
    backface-visibility: hidden;
    transform: translateZ(0);
  }
  @media (prefers-reduced-motion: reduce) {
    .hero-grid-track { animation: none; }
  }
`;

function Chip({
  text,
  image,
  index,
}: {
  text: string;
  image: string;
  index: number;
}) {
  // Stable BrandLyft smile across one set (repeated on the duplicate)
  const n = services.length;
  const pos = index % n;
  const t = n <= 1 ? 0 : (pos / (n - 1)) * 2 - 1;
  const arcY = t * t * 8;
  const tilt = t * -6;

  return (
    <div
      className="relative flex shrink-0 items-center gap-2 overflow-hidden rounded-xl border border-black/10 bg-white px-2 py-1.5"
      style={{
        width: CARD_W,
        height: CARD_H,
        marginTop: arcY,
        transform: `rotateZ(${tilt}deg)`,
        boxShadow: "0 10px 20px rgba(0,0,0,0.28)",
      }}
      data-testid={`coverflow-card-${index}`}
    >
      <div
        className="shrink-0 overflow-hidden rounded-lg bg-zinc-100"
        style={{ width: THUMB, height: THUMB }}
      >
        <img
          src={image}
          alt=""
          aria-hidden="true"
          decoding="async"
          draggable={false}
          className="h-full w-full object-cover"
        />
      </div>
      <span className="pr-0.5 text-[11px] font-bold leading-tight text-gray-900">
        {text}
      </span>
    </div>
  );
}

export default function MobileHeroCoverflowCarousel() {
  const loop = [...services, ...services];

  return (
    <div
      className="relative w-full select-none overflow-hidden"
      style={{ height: 90 }}
      data-testid="hero-mobile-coverflow"
    >
      <style>{styles}</style>

      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-20 w-10"
        style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.5), transparent)" }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-20 w-10"
        style={{ background: "linear-gradient(270deg, rgba(0,0,0,0.5), transparent)" }}
      />

      {/* Slight perspective so the closed grid reads like BrandLyft’s curved strip */}
      <div
        className="absolute inset-0 flex items-center"
        style={{ perspective: "900px" }}
      >
        <div
          className="hero-grid-track flex items-start"
          style={{
            gap: GAP,
            width: "max-content",
            transformStyle: "preserve-3d",
          }}
        >
          {loop.map((service, i) => (
            <Chip
              key={`${service.text}-${i}`}
              text={service.text}
              image={service.image}
              index={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
