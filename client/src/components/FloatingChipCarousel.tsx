// 3D Curved Coverflow Carousel for homepage hero section
import { useEffect, useRef, useState, useCallback } from "react";
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

// Flat carousel for portrait mobile
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
    <div className="w-full overflow-hidden">
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

// 3D Curved Coverflow for landscape/desktop
function CurvedCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const [offset, setOffset] = useState(0);
  
  const visibleCount = 7;
  const centerIndex = Math.floor(visibleCount / 2);
  
  useEffect(() => {
    let currentOffset = 0;
    const speed = 0.008;
    
    const animate = () => {
      currentOffset += speed;
      if (currentOffset >= services.length) {
        currentOffset = 0;
      }
      setOffset(currentOffset);
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const getCardStyle = useCallback((visualIndex: number) => {
    const distanceFromCenter = visualIndex - centerIndex;
    const normalizedDistance = distanceFromCenter / centerIndex;
    
    const scale = 1 + Math.abs(normalizedDistance) * 0.15;
    const rotateY = -normalizedDistance * 35;
    const translateZ = -Math.abs(normalizedDistance) * 60;
    const translateX = distanceFromCenter * 220;
    const opacity = 1 - Math.abs(normalizedDistance) * 0.2;
    const blur = Math.abs(normalizedDistance) > 2 ? Math.abs(normalizedDistance) - 2 : 0;
    
    return {
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity: Math.max(0.4, opacity),
      filter: blur > 0 ? `blur(${blur}px)` : 'none',
      zIndex: 10 - Math.abs(Math.round(distanceFromCenter)),
    };
  }, [centerIndex]);

  const getVisibleServices = () => {
    const items = [];
    const baseIndex = Math.floor(offset);
    const fraction = offset - baseIndex;
    
    for (let i = 0; i < visibleCount; i++) {
      const serviceIndex = (baseIndex + i) % services.length;
      const adjustedVisualIndex = i - fraction;
      items.push({
        service: services[serviceIndex],
        visualIndex: adjustedVisualIndex,
        key: `${serviceIndex}-${Math.floor(offset / services.length)}`,
      });
    }
    return items;
  };

  return (
    <div 
      ref={containerRef}
      className="w-full overflow-hidden relative"
      style={{ 
        perspective: '1200px',
        perspectiveOrigin: 'center center',
        height: '140px',
      }}
    >
      <div 
        className="absolute inset-0 flex items-center justify-center"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {getVisibleServices().map(({ service, visualIndex, key }) => {
          const style = getCardStyle(visualIndex);
          return (
            <div
              key={key}
              className="absolute"
              style={{
                ...style,
                transition: 'none',
                willChange: 'transform, opacity',
              }}
              data-testid={`carousel-3d-chip-${service.text.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="group flex items-center gap-3 px-4 py-3 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl hover:bg-white transition-all duration-300 cursor-pointer border border-white/20 hover:border-[#c4ff4d]/30">
                <div className="w-[70px] h-[70px] rounded-xl overflow-hidden flex-shrink-0 bg-zinc-100 ring-2 ring-white/50 group-hover:ring-[#c4ff4d]/40 transition-all duration-300">
                  <img 
                    src={service.image} 
                    alt={service.text}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <span className="text-base font-bold text-gray-900 group-hover:text-zinc-950 pr-2.5 whitespace-nowrap transition-colors duration-300">
                  {service.text}
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

  return isLandscapeOrDesktop ? <CurvedCarousel /> : <FlatCarousel />;
}
