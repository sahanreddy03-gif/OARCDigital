"use client";

import { useEffect, useRef } from "react";

/** 144px retina chips (~5KB each) — same photos, sized for the 72px thumb slot. */
const CHIP = (name: string) => `/attached_assets/carousel-chips/${name}-chip.webp`;

const digitalMarketing = CHIP("digital-marketing-optimized");
const socialMedia = CHIP("social-media-management-optimized");
const aiVideo = CHIP("ai-video-production-optimized");
const branding = CHIP("branding-services-optimized");
const paidAdvertising = CHIP("paid-advertising-optimized");
const websiteDesign = CHIP("website-design-optimized");
const leadGen = CHIP("lead-generation-optimized");
const creativeAds = CHIP("creative-ad-campaigns-optimized");
const funnelAutomation = CHIP("funnel-automation-optimized");
const salesAI = CHIP("sales-ai-employee-optimized");
const supportAI = CHIP("support-ai-employee-optimized");
const mobileApps = CHIP("mobile-apps-robot-optimized");
const webApps = CHIP("web-applications-optimized");
const customAI = CHIP("custom-ai-solutions-robots-optimized");
const aiConsulting = CHIP("ai-consulting-presentation-optimized");

const services = [
  { text: "Marketing diġitali", image: digitalMarketing },
  { text: "Ġestjoni tas-social media", image: socialMedia },
  { text: "Produzzjoni ta' vidjows bl-AI", image: aiVideo },
  { text: "Servizzi tal-branding", image: branding },
  { text: "Reklami mħallsa", image: paidAdvertising },
  { text: "Disinn ta' websajts", image: websiteDesign },
  { text: "Ġenerazzjoni ta' leads", image: leadGen },
  { text: "Kampanji ta' reklami kreattivi", image: creativeAds },
  { text: "Awtomazzjoni tal-funnel", image: funnelAutomation },
  { text: "Impjegati tal-AI għall-bejgħ", image: salesAI },
  { text: "Impjegati tal-AI għall-appoġġ", image: supportAI },
  { text: "Applikazzjonijiet tal-mowbajl", image: mobileApps },
  { text: "Applikazzjonijiet tal-web", image: webApps },
  { text: "Soluzzjonijiet tal-AI imfassla għalik", image: customAI },
  { text: "Konsulenza dwar l-AI", image: aiConsulting },
  { text: "Żvilupp ta' MVP", image: customAI },
];

/** Matches the original 1.2px/frame loop (~72px/s at 60fps). */
const SCROLL_PX_PER_SEC = 72;

const carouselStyles = `
  @keyframes hero-chip-marquee {
    from { transform: translate3d(calc(-1 * var(--chip-loop, 3200px)), 0, 0); }
    to { transform: translate3d(0, 0, 0); }
  }
  .hero-chip-track {
    animation: hero-chip-marquee var(--chip-duration, 44s) linear infinite;
    will-change: transform;
    backface-visibility: hidden;
  }
  @media (prefers-reduced-motion: reduce) {
    .hero-chip-track {
      animation: none;
      transform: translate3d(calc(-1 * var(--chip-loop, 3200px)), 0, 0);
    }
  }
`;

function StraightCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const tripleServices = [...services, ...services, ...services];

  useEffect(() => {
    const track = scrollRef.current;
    if (!track) return;

    const measure = () => {
      if (track.children.length < services.length) return;
      let loop = 0;
      for (let i = 0; i < services.length; i++) {
        loop += (track.children[i] as HTMLElement).offsetWidth + 12;
      }
      if (loop <= 0) return;
      track.style.setProperty("--chip-loop", `${loop}px`);
      track.style.setProperty("--chip-duration", `${loop / SCROLL_PX_PER_SEC}s`);
    };

    measure();
    const ro =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(measure)
        : null;
    ro?.observe(track);
    document.fonts?.ready.then(measure).catch(() => measure());

    return () => ro?.disconnect();
  }, []);

  return (
    <div
      className="w-full max-w-full overflow-hidden"
      style={{ contain: "paint", isolation: "isolate" }}
    >
      <div ref={scrollRef} className="hero-chip-track flex whitespace-nowrap gap-3">
        {tripleServices.map((service, index) => (
          <div
            key={index}
            className="inline-flex flex-shrink-0"
            data-testid={`carousel-chip-${index}`}
          >
            <div className="group flex items-center gap-2 sm:gap-3 px-2.5 sm:px-3 py-2 sm:py-2.5 bg-white rounded-lg sm:rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-white transition-all duration-300 cursor-pointer border border-white/20 hover:border-[#c4ff4d]/30">
              <div className="w-[56px] h-[56px] sm:w-[72px] sm:h-[72px] rounded-lg sm:rounded-xl overflow-hidden flex-shrink-0 bg-zinc-100 ring-1 ring-white/30 group-hover:ring-[#c4ff4d]/40 transition-all duration-300">
                <img
                  src={service.image}
                  alt={service.text}
                  width={72}
                  height={72}
                  decoding="async"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <span className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-zinc-950 pr-1 sm:pr-2 whitespace-nowrap transition-colors duration-300">
                {service.text}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FloatingChipCarousel() {
  return (
    <div className="w-full">
      <style>{carouselStyles}</style>
      <StraightCarousel />
    </div>
  );
}
