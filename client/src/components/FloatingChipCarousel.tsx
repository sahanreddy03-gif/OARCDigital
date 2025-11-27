// 3D Concave Curved Carousel for homepage hero section
import { useEffect, useRef } from "react";
import digitalMarketing from '@assets/1_1763067301763.avif';
import socialMedia from '@assets/stock_images/social_media_managem_8e61c86d.jpg';
import aiVideo from '@assets/3_1763067301764.avif';
import branding from '@assets/4_1763067301765.avif';
import paidAdvertising from '@assets/5_1763067301765.avif';
import mediaBuying from '@assets/6_1763067301766.avif';
import websiteDesign from '@assets/7_1763067301766.avif';
import influencerMarketing from '@assets/8_1763067301767.avif';
import rapidTesting from '@assets/9_1763067301767.avif';
import leadGen from '@assets/10_1763070990278.avif';
import creativeAds from '@assets/11_1763067301767.avif';
import customerAcquisition from '@assets/12_1763067301768.avif';
import funnelAutomation from '@assets/13_1763067301768.avif';
import aiCopywriting from '@assets/14_1763067301769.avif';
import adminAI from '@assets/15_1763067301769.avif';
import salesAI from '@assets/16_1763067301769.avif';
import supportAI from '@assets/17_1763067301770.avif';

const services = [
  { text: "Digital Marketing", image: digitalMarketing },
  { text: "Social Media Management", image: socialMedia },
  { text: "AI Video Production", image: aiVideo },
  { text: "Branding Services", image: branding },
  { text: "Paid Advertising", image: paidAdvertising },
  { text: "Media Buying", image: mediaBuying },
  { text: "Website Design", image: websiteDesign },
  { text: "Influencer Marketing", image: influencerMarketing },
  { text: "Rapid Idea Testing", image: rapidTesting },
  { text: "Lead Generation", image: leadGen },
  { text: "Creative Ad Campaigns", image: creativeAds },
  { text: "Customer Acquisition Strategy", image: customerAcquisition },
  { text: "Funnel Automation", image: funnelAutomation },
  { text: "AI Copywriting", image: aiCopywriting },
  { text: "Admin AI Employees", image: adminAI },
  { text: "Sales AI Employees", image: salesAI },
  { text: "Support AI Employees", image: supportAI },
];

// Flat carousel for portrait mobile - CSS animation based infinite scroll
function FlatCarousel() {
  return (
    <div className="w-full overflow-hidden" style={{ maxWidth: '100vw' }}>
      <div 
        className="flex whitespace-nowrap gap-3 animate-scroll-flat"
        style={{ 
          willChange: 'transform',
        }}
      >
        {/* Triple the items for seamless infinite loop */}
        {[...services, ...services, ...services].map((service, index) => (
          <div 
            key={index} 
            className="inline-flex flex-shrink-0"
            data-testid={`carousel-chip-${index}`}
          >
            <div className="group flex items-center gap-2 px-3 py-2 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-white transition-all duration-300 cursor-pointer border border-white/20 hover:border-[#c4ff4d]/30">
              <div className="w-[50px] h-[50px] rounded-lg overflow-hidden flex-shrink-0 bg-zinc-100 ring-2 ring-white/50 group-hover:ring-[#c4ff4d]/40 transition-all duration-300">
                <img 
                  src={service.image} 
                  alt={service.text}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <span className="text-xs font-bold text-gray-900 group-hover:text-zinc-950 pr-1 whitespace-nowrap transition-colors duration-300">
                {service.text}
              </span>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes scroll-flat {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-scroll-flat {
          animation: scroll-flat 4s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-scroll-flat {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}

// 3D Concave Curved Carousel for landscape/desktop
// Uses pure requestAnimationFrame with modulo wrapping - no state changes, no resets
function ConcaveCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  
  // Animation state stored in refs - persists across renders
  const offsetRef = useRef(0);
  const lastTimeRef = useRef(0);
  const isRunningRef = useRef(false);
  
  const visibleCount = 9;
  const centerIndex = Math.floor(visibleCount / 2);
  const autoScrollSpeed = 0.02; // Continuous floating speed
  
  const getCardTransform = (visualIndex: number) => {
    const distanceFromCenter = visualIndex - centerIndex;
    const normalizedDistance = distanceFromCenter / centerIndex;
    
    // CONCAVE EFFECT: Center cards go INWARD (negative Z, smaller scale)
    // Edge cards come FORWARD (positive Z, larger scale)
    const translateZ = -150 + Math.abs(normalizedDistance) * 180;
    const scale = 0.7 + Math.abs(normalizedDistance) * 0.35;
    
    // Cards angle inward toward the center
    const rotateY = normalizedDistance * 45;
    
    // Horizontal spacing
    const translateX = distanceFromCenter * 180;
    
    // Opacity: edges slightly faded
    const opacity = 1 - Math.abs(normalizedDistance) * 0.25;
    
    // Z-index: edges on top since they're closer
    const zIndex = Math.round(Math.abs(normalizedDistance) * 10);
    
    return { translateX, translateZ, rotateY, scale, opacity, zIndex };
  };

  // Proper modulo that handles negative numbers
  const mod = (n: number, m: number) => ((n % m) + m) % m;

  useEffect(() => {
    if (isRunningRef.current) return; // Prevent double-starting
    isRunningRef.current = true;
    
    const animate = (timestamp: number) => {
      // Calculate delta time for frame-rate independent animation
      if (lastTimeRef.current === 0) {
        lastTimeRef.current = timestamp;
      }
      const deltaTime = Math.min((timestamp - lastTimeRef.current) / 16.67, 3);
      lastTimeRef.current = timestamp;
      
      // Continuously increment offset - using modulo for seamless wrap
      offsetRef.current = mod(offsetRef.current + autoScrollSpeed * deltaTime, services.length);
      
      const baseIndex = Math.floor(offsetRef.current);
      const fraction = offsetRef.current - baseIndex;
      
      // Update each card's transform directly via refs (no React re-render)
      for (let i = 0; i < visibleCount; i++) {
        const card = cardRefs.current[i];
        const img = imageRefs.current[i];
        if (!card) continue;
        
        // Calculate which service this card should show
        const serviceIndex = mod(baseIndex + i, services.length);
        const visualIndex = i - fraction;
        
        const { translateX, translateZ, rotateY, scale, opacity, zIndex } = getCardTransform(visualIndex);
        
        // Apply transform directly to DOM element
        card.style.transform = `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`;
        card.style.opacity = String(Math.max(0.3, opacity));
        card.style.zIndex = String(zIndex);
        
        // Update the image source if service changed
        const service = services[serviceIndex];
        const currentServiceIndex = card.dataset.serviceIndex;
        if (currentServiceIndex !== String(serviceIndex)) {
          card.dataset.serviceIndex = String(serviceIndex);
          if (img) {
            img.src = service.image;
            img.alt = service.text;
          }
          const textSpan = card.querySelector('[data-text]') as HTMLSpanElement;
          if (textSpan) {
            textSpan.textContent = service.text;
          }
        }
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      isRunningRef.current = false;
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Pre-render cards once, then update via refs
  const initialCards = Array.from({ length: visibleCount }, (_, i) => {
    const serviceIndex = i % services.length;
    const service = services[serviceIndex];
    const { translateX, translateZ, rotateY, scale, opacity, zIndex } = getCardTransform(i);
    
    return (
      <div
        key={i}
        ref={(el) => { cardRefs.current[i] = el; }}
        className="absolute"
        data-service-index={serviceIndex}
        style={{
          transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
          opacity: Math.max(0.3, opacity),
          zIndex,
          willChange: 'transform, opacity',
          backfaceVisibility: 'hidden',
        }}
        data-testid={`carousel-3d-chip-${i}`}
      >
        <div className="group flex items-center gap-3 px-4 py-3 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl hover:shadow-2xl hover:bg-white transition-all duration-300 cursor-pointer border border-white/20 hover:border-[#c4ff4d]/30">
          <div className="w-[70px] h-[70px] rounded-xl overflow-hidden flex-shrink-0 bg-zinc-100 ring-2 ring-white/50 group-hover:ring-[#c4ff4d]/40 transition-all duration-300">
            <img 
              ref={(el) => { imageRefs.current[i] = el; }}
              src={service.image} 
              alt={service.text}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
          </div>
          <span 
            data-text="true"
            className="text-base font-bold text-gray-900 group-hover:text-zinc-950 pr-2.5 whitespace-nowrap transition-colors duration-300"
          >
            {service.text}
          </span>
        </div>
      </div>
    );
  });

  return (
    <div 
      ref={containerRef}
      className="w-full overflow-hidden relative"
      style={{ 
        perspective: '1000px',
        perspectiveOrigin: 'center center',
        height: '160px',
      }}
    >
      <div 
        className="absolute inset-0 flex items-center justify-center"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {initialCards}
      </div>
    </div>
  );
}

export default function FloatingChipCarousel() {
  return (
    <>
      {/* Mobile Portrait: Flat infinite scroll carousel */}
      <div className="md:hidden landscape:hidden">
        <FlatCarousel />
      </div>
      
      {/* Desktop & Landscape: 3D Concave carousel */}
      <div className="hidden md:block landscape:block">
        <ConcaveCarousel />
      </div>
    </>
  );
}
