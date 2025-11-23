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

    // Use consistent faster speed on all screen sizes
    const speed = 0.5; // Pixels per frame

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
            <div className="group flex items-center gap-3 px-4 py-3 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-white transition-all duration-300 cursor-pointer border border-white/20 hover:border-[#c4ff4d]/30">
              {/* Consistent 60px images on all screen sizes */}
              <div className="w-[60px] h-[60px] rounded-xl overflow-hidden flex-shrink-0 bg-zinc-100 ring-2 ring-white/50 group-hover:ring-[#c4ff4d]/40 transition-all duration-300">
                <img 
                  src={service.image} 
                  alt={service.text}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  data-testid={`carousel-image-${service.text.toLowerCase().replace(/\s+/g, '-')}`}
                />
              </div>
              <span className="text-sm font-bold text-gray-900 group-hover:text-zinc-950 pr-2 whitespace-nowrap transition-colors duration-300" data-testid={`carousel-text-${service.text.toLowerCase().replace(/\s+/g, '-')}`}>
                {service.text}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
