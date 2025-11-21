// Custom carousel images for homepage hero section
import { useEffect, useRef } from "react";
import digitalMarketing from '@assets/1_1763067301763.avif';
import socialMedia from '@assets/stock_images/social_media_managem_8e61c86d.jpg'; // Keep old - file 2 missing
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

export default function FloatingChipCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  // Double duplication for seamless loop
  const duplicatedServices = [...services, ...services];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Determine speed based on screen size
    const isMobile = window.innerWidth < 768;
    const speed = isMobile ? 0.5 : 0.3; // Pixels per frame (faster on mobile)

    let currentTranslate = 0;
    let contentWidth = 0;

    // Measure actual rendered width of one complete set (including gaps)
    const measureWidth = () => {
      // Since we have 2x duplication, the total scrollWidth is 2x one set
      // So one set width = scrollWidth / 2
      if (track.scrollWidth > 0) {
        contentWidth = track.scrollWidth / 2;
      }
    };

    // Animation loop
    const animate = () => {
      currentTranslate -= speed;

      // Reset seamlessly when we've scrolled past one full set
      if (Math.abs(currentTranslate) >= contentWidth) {
        currentTranslate = 0;
      }

      // Apply transform directly to avoid state updates every frame
      if (track) {
        track.style.transform = `translateX(${currentTranslate}px)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation after measuring
    setTimeout(() => {
      measureWidth();
      if (contentWidth > 0) {
        animate();
      }
    }, 100);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full overflow-hidden relative">
      {/* Premium dark glass background with neon edge */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60 backdrop-blur-sm border-t border-white/10"></div>
      <div 
        ref={trackRef}
        className="flex whitespace-nowrap gap-3 md:gap-2 py-5 md:py-4 relative z-10"
        style={{ willChange: 'transform' }}
      >
        {duplicatedServices.map((service, index) => (
          <div 
            key={index} 
            className="inline-flex flex-shrink-0"
            data-testid={`carousel-chip-${index}`}
          >
            <div className="group flex items-center gap-3 md:gap-2 px-4 md:px-3 py-3 md:py-2 bg-white/95 backdrop-blur-md rounded-full shadow-xl hover:shadow-2xl hover:scale-[1.02] hover:bg-white transition-all duration-500 cursor-pointer border border-white/30 hover:border-[#c4ff4d]/50 motion-reduce:transition-none motion-reduce:hover:scale-100" style={{ boxShadow: '0 0 0 rgba(196, 255, 77, 0)', '--tw-shadow-color': 'transparent' } as React.CSSProperties}>
              {/* Enhanced Mobile: 60px, Tablet+: 52px professional images */}
              <div className="w-[60px] h-[60px] md:w-[52px] md:h-[52px] rounded-xl md:rounded-lg overflow-hidden flex-shrink-0 bg-zinc-100 ring-2 ring-white/60 group-hover:ring-[#c4ff4d]/60 transition-all duration-500">
                <img 
                  src={service.image} 
                  alt={service.text}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  data-testid={`carousel-image-${service.text.toLowerCase().replace(/\s+/g, '-')}`}
                />
              </div>
              <span className="text-sm md:text-xs lg:text-sm font-bold text-gray-900 group-hover:text-zinc-950 pr-2 md:pr-1 whitespace-nowrap transition-colors duration-300" data-testid={`carousel-text-${service.text.toLowerCase().replace(/\s+/g, '-')}`}>
                {service.text}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
