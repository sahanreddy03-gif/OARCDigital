"use client";

import { useEffect, useRef } from "react";
const digitalMarketing = "/attached_assets/digital-marketing-optimized.jpg";
const socialMedia = "/attached_assets/social-media-management-optimized.jpg";
const aiVideo = "/attached_assets/ai-video-production-optimized.jpg";
const branding = "/attached_assets/branding-services-optimized.jpg";
const paidAdvertising = "/attached_assets/paid-advertising-optimized.jpg";
const websiteDesign = "/attached_assets/website-design-optimized.jpg";
const leadGen = "/attached_assets/lead-generation-optimized.jpg";
const creativeAds = "/attached_assets/creative-ad-campaigns-optimized.jpg";
const funnelAutomation = "/attached_assets/funnel-automation-optimized.jpg";
const salesAI = "/attached_assets/sales-ai-employee-optimized.jpg";
const supportAI = "/attached_assets/support-ai-employee-optimized.jpg";
// New AI & Development Services
const mobileApps = "/attached_assets/mobile-apps-robot-optimized.webp";
const webApps = "/attached_assets/web-applications-optimized.webp";
const customAI = "/attached_assets/custom-ai-solutions-robots-optimized.webp";
const aiConsulting = "/attached_assets/ai-consulting-presentation-optimized.webp";

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
  // New AI & Development Services
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
    
    const children = scrollContainer.children;
    if (children.length > 0) {
      let singleSetWidth = 0;
      for (let i = 0; i < services.length; i++) {
        const child = children[i] as HTMLElement;
        singleSetWidth += child.offsetWidth + 12;
      }
      contentWidthRef.current = singleSetWidth;
      positionRef.current = singleSetWidth;
    }
    
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
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);
  
  return (
    <div className="w-full overflow-hidden" style={{ maxWidth: '100vw' }}>
      <div 
        ref={scrollRef}
        className="flex whitespace-nowrap gap-3"
        style={{ 
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          perspective: 1000,
          transform: 'translate3d(0, 0, 0)',
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
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
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
