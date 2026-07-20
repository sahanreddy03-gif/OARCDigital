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
  { text: "Digital Marketing", image: digitalMarketing },
  { text: "Social Media Management", image: socialMedia },
  { text: "AI Video Production", image: aiVideo },
  { text: "Branding Services", image: branding },
  { text: "Paid Advertising", image: paidAdvertising },
  { text: "Website Design", image: websiteDesign },
  { text: "Lead Generation", image: leadGen },
  { text: "Creative Ad Campaigns", image: creativeAds },
  { text: "Funnel Automation", image: funnelAutomation },
  { text: "Sales AI Employees", image: salesAI },
  { text: "Support AI Employees", image: supportAI },
  { text: "Mobile Applications", image: mobileApps },
  { text: "Web Applications", image: webApps },
  { text: "Custom AI Solutions", image: customAI },
  { text: "AI Consulting", image: aiConsulting },
  { text: "MVP Development", image: customAI },
];

function StraightCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const positionRef = useRef(0);
  const contentWidthRef = useRef(0);

  const tripleServices = [...services, ...services, ...services];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const measure = () => {
      const children = scrollContainer.children;
      if (children.length < services.length) return;
      let singleSetWidth = 0;
      for (let i = 0; i < services.length; i++) {
        singleSetWidth += (children[i] as HTMLElement).offsetWidth + 12;
      }
      if (singleSetWidth > 0) {
        contentWidthRef.current = singleSetWidth;
        if (positionRef.current === 0) {
          positionRef.current = singleSetWidth;
        }
      }
    };

    measure();
    const ro = typeof ResizeObserver !== "undefined"
      ? new ResizeObserver(measure)
      : null;
    ro?.observe(scrollContainer);

    const speed = 1.2;

    const animate = () => {
      positionRef.current -= speed;

      if (positionRef.current <= 0) {
        positionRef.current = contentWidthRef.current;
      }

      scrollContainer.style.transform = `translate3d(-${positionRef.current}px, 0, 0)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      ro?.disconnect();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full overflow-hidden" style={{ maxWidth: "100vw" }}>
      <div
        ref={scrollRef}
        className="flex whitespace-nowrap gap-3"
        style={{
          willChange: "transform",
          backfaceVisibility: "hidden",
          transform: "translate3d(0, 0, 0)",
        }}
      >
        {tripleServices.map((service, index) => (
          <div
            key={index}
            className="inline-flex flex-shrink-0"
            data-testid={`carousel-chip-${index}`}
          >
            <div className="group flex items-center gap-2 sm:gap-3 px-2.5 sm:px-3 py-2 sm:py-2.5 bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-white transition-all duration-300 cursor-pointer border border-white/20 hover:border-[#c4ff4d]/30">
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
      <StraightCarousel />
    </div>
  );
}
