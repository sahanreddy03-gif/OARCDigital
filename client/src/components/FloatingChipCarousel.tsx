// 3D Concave Curved Carousel for homepage hero section
import { useEffect, useRef, useState } from "react";
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

// Flat carousel for portrait mobile - original simple scroll
function FlatCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const duplicatedServices = [...services, ...services];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const speed = 0.5;
    let currentTranslate = 0;
    let contentWidth = 0;

    const measureWidth = () => {
      if (track.scrollWidth > 0) {
        contentWidth = track.scrollWidth / 2;
      }
    };

    const animate = () => {
      currentTranslate -= speed;
      if (Math.abs(currentTranslate) >= contentWidth) {
        currentTranslate = 0;
      }
      if (track) {
        track.style.transform = `translateX(${currentTranslate}px)`;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    if (track) {
      track.style.transform = 'translateX(0px)';
    }

    const startTimer = setTimeout(() => {
      measureWidth();
      if (contentWidth > 0) {
        currentTranslate = 0;
        animate();
      }
    }, 200);

    return () => {
      clearTimeout(startTimer);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full overflow-hidden" style={{ maxWidth: '100vw' }}>
      <div 
        ref={trackRef}
        className="flex whitespace-nowrap gap-3"
        style={{ willChange: 'transform' }}
      >
        {duplicatedServices.map((service, index) => (
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
// Center cards sink INTO the screen (smaller), edge cards come FORWARD (larger)
function ConcaveCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const animationRef = useRef<number>();
  const offsetRef = useRef(0);
  
  const visibleCount = 9;
  const centerIndex = Math.floor(visibleCount / 2);
  
  // Use refs for smooth animation without React state updates
  useEffect(() => {
    const speed = 0.012; // Smooth rotation speed
    
    const getCardTransform = (visualIndex: number) => {
      const distanceFromCenter = visualIndex - centerIndex;
      const normalizedDistance = distanceFromCenter / centerIndex;
      
      // CONCAVE EFFECT: Center cards go INWARD (negative Z, smaller scale)
      // Edge cards come FORWARD (positive Z, larger scale)
      const translateZ = -150 + Math.abs(normalizedDistance) * 180; // Center: -150, Edges: +30
      const scale = 0.7 + Math.abs(normalizedDistance) * 0.35; // Center: 0.7, Edges: 1.05
      
      // Cards angle inward toward the center (like sides of a bowl curving away)
      const rotateY = normalizedDistance * 45; // Positive = right side rotates right, left side rotates left
      
      // Horizontal spacing
      const translateX = distanceFromCenter * 180;
      
      // Opacity: edges slightly faded
      const opacity = 1 - Math.abs(normalizedDistance) * 0.25;
      
      // Z-index: edges on top since they're closer
      const zIndex = Math.round(Math.abs(normalizedDistance) * 10);
      
      return { translateX, translateZ, rotateY, scale, opacity, zIndex };
    };
    
    const animate = () => {
      offsetRef.current += speed;
      if (offsetRef.current >= services.length) {
        offsetRef.current = 0;
      }
      
      const baseIndex = Math.floor(offsetRef.current);
      const fraction = offsetRef.current - baseIndex;
      
      // Update each card directly via refs (no React state = smoother)
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        
        const serviceIndex = (baseIndex + i) % services.length;
        const visualIndex = i - fraction;
        const { translateX, translateZ, rotateY, scale, opacity, zIndex } = getCardTransform(visualIndex);
        
        card.style.transform = `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`;
        card.style.opacity = String(Math.max(0.3, opacity));
        card.style.zIndex = String(zIndex);
        
        // Update image src for infinite loop
        const img = card.querySelector('img') as HTMLImageElement;
        const span = card.querySelector('span');
        if (img && services[serviceIndex]) {
          img.src = services[serviceIndex].image;
          img.alt = services[serviceIndex].text;
        }
        if (span && services[serviceIndex]) {
          span.textContent = services[serviceIndex].text;
        }
      });
      
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
        {Array.from({ length: visibleCount }).map((_, i) => {
          const serviceIndex = i % services.length;
          return (
            <div
              key={i}
              ref={el => cardsRef.current[i] = el}
              className="absolute"
              style={{
                willChange: 'transform, opacity',
                backfaceVisibility: 'hidden',
              }}
              data-testid={`carousel-3d-chip-${i}`}
            >
              <div className="group flex items-center gap-3 px-4 py-3 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl hover:shadow-2xl hover:bg-white transition-all duration-300 cursor-pointer border border-white/20 hover:border-[#c4ff4d]/30">
                <div className="w-[70px] h-[70px] rounded-xl overflow-hidden flex-shrink-0 bg-zinc-100 ring-2 ring-white/50 group-hover:ring-[#c4ff4d]/40 transition-all duration-300">
                  <img 
                    src={services[serviceIndex].image} 
                    alt={services[serviceIndex].text}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <span className="text-base font-bold text-gray-900 group-hover:text-zinc-950 pr-2.5 whitespace-nowrap transition-colors duration-300">
                  {services[serviceIndex].text}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function FloatingChipCarousel() {
  const [isLandscapeOrDesktop, setIsLandscapeOrDesktop] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      const isLandscape = window.matchMedia('(orientation: landscape)').matches;
      const isWideScreen = window.innerWidth >= 768;
      setIsLandscapeOrDesktop(isLandscape || isWideScreen);
    };

    checkOrientation();

    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);

    const mediaQuery = window.matchMedia('(orientation: landscape)');
    mediaQuery.addEventListener('change', checkOrientation);

    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
      mediaQuery.removeEventListener('change', checkOrientation);
    };
  }, []);

  return isLandscapeOrDesktop ? <ConcaveCarousel /> : <FlatCarousel />;
}
