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

// JavaScript-based infinite scroll - truly seamless, no CSS animation issues
function FlatCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const positionRef = useRef(0);
  const contentWidthRef = useRef(0);
  
  // Triple the services for seamless wrap-around
  const tripleServices = [...services, ...services, ...services];
  
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    // Calculate width of one set of services
    const children = scrollContainer.children;
    if (children.length > 0) {
      let singleSetWidth = 0;
      for (let i = 0; i < services.length; i++) {
        const child = children[i] as HTMLElement;
        singleSetWidth += child.offsetWidth + 12; // 12px gap
      }
      contentWidthRef.current = singleSetWidth;
    }
    
    // Speed: pixels per frame (higher = faster)
    const speed = 1.5;
    
    const animate = () => {
      positionRef.current += speed;
      
      // When we've scrolled past one full set, reset to beginning
      if (positionRef.current >= contentWidthRef.current) {
        positionRef.current = 0;
      }
      
      scrollContainer.style.transform = `translateX(-${positionRef.current}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Start animation
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
        }}
      >
        {tripleServices.map((service, index) => (
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
  const autoScrollSpeed = 0.012; // Slightly slower for premium feel
  
  const getCardTransform = (visualIndex: number) => {
    const distanceFromCenter = visualIndex - centerIndex;
    const normalizedDistance = distanceFromCenter / centerIndex;
    const absNormalized = Math.abs(normalizedDistance);
    
    // DEEP CONCAVE: Center goes far back, edges come forward cleanly
    // Center: -280px (deep), Edges: +100px (forward but controlled)
    const translateZ = -280 + absNormalized * 380;
    
    // Scale: Center slightly smaller, edges slightly larger but capped
    // Range: 0.85 (center) to 1.1 (edges) - prevents overlap
    const scale = 0.85 + absNormalized * 0.25;
    
    // Rotation: Gentler angle to reduce projection overlap
    // Range: 0° (center) to ±28° (edges)
    const rotateY = normalizedDistance * 28;
    
    // Wider horizontal spacing to prevent card collision
    const translateX = distanceFromCenter * 240;
    
    // Opacity: Center bright, edges fade more gradually
    const opacity = 1 - absNormalized * 0.2;
    
    // Z-index: Edges on top since they're closer to viewer
    const zIndex = Math.round(absNormalized * 10);
    
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
        perspective: '1200px',
        perspectiveOrigin: 'center center',
        height: '180px',
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
