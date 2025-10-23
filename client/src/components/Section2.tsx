import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { SiFacebook, SiInstagram, SiLinkedin, SiX, SiYoutube, SiSpotify } from "react-icons/si";
import phoneOutline from '@assets/phone-04_1761255932992.webp';

export default function Section2() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Array of gradient backgrounds to simulate Instagram/Reels style content
  const backgrounds = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgrounds.length);
    }, 2000); // Change every 2 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="relative bg-white py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <p className="text-sm md:text-base font-semibold text-zinc-900 mb-6 md:mb-8" data-testid="text-eyebrow">
              OARC Digital
            </p>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-zinc-900 leading-tight mb-6 md:mb-8" data-testid="text-section2-heading">
              The results-driven{' '}
              <span className="text-[#5ce1e6]">
                Social First Agency
              </span>{' '}
              you've been looking for
            </h2>

            <div className="flex flex-col gap-4 w-full sm:flex-row sm:gap-5">
              <Button 
                size="lg"
                className="bg-zinc-900 text-white font-bold rounded-full w-full sm:w-auto flex-shrink-0"
                data-testid="button-browse-services"
              >
                Browse Our Services
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-zinc-900 text-zinc-900 font-bold rounded-full bg-transparent w-full sm:w-auto flex-shrink-0"
                data-testid="button-meet-team"
              >
                Meet The Team
                <span aria-hidden="true">→</span>
              </Button>
            </div>
          </div>

          {/* Right Visual - Phone Mockup - Smaller with Animated Background */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end items-center">
            <div className="relative w-full max-w-[200px] md:max-w-[240px] lg:max-w-[280px]" style={{ aspectRatio: '9/16' }}>
              {/* Phone interior with animated Instagram/Reels-style backgrounds */}
              <div className="absolute inset-4 md:inset-5 rounded-[1.5rem] overflow-hidden">
                {backgrounds.map((bg, index) => (
                  <div
                    key={index}
                    className="absolute inset-0 transition-opacity duration-700"
                    style={{
                      background: bg,
                      opacity: currentImageIndex === index ? 1 : 0,
                    }}
                    data-testid={`phone-background-${index}`}
                  />
                ))}
                {/* Overlay content with animated text and social icons */}
                <div className="absolute inset-0 flex flex-col items-center justify-between bg-black/30 p-4 md:p-6">
                  {/* Top row - 3 social icons */}
                  <div className="flex gap-3 md:gap-4 items-center animate-[fadeInUp_0.8s_ease-out]" data-testid="social-icons-top">
                    <SiFacebook className="w-6 h-6 md:w-7 md:h-7 text-white/80 hover:text-white transition-colors" />
                    <SiInstagram className="w-6 h-6 md:w-7 md:h-7 text-white/80 hover:text-white transition-colors" />
                    <SiLinkedin className="w-6 h-6 md:w-7 md:h-7 text-white/80 hover:text-white transition-colors" />
                  </div>
                  
                  {/* Center text */}
                  <div className="text-center flex-1 flex items-center justify-center">
                    <p className="text-base md:text-lg lg:text-xl font-bold text-white leading-tight px-2">
                      <span className="inline-block animate-[fadeInUp_0.8s_ease-out]">We</span>{' '}
                      <span className="inline-block animate-[fadeInUp_0.8s_ease-out_0.1s] text-[#5ce1e6]">blend</span>{' '}
                      <span className="inline-block animate-[fadeInUp_0.8s_ease-out_0.2s]">creative</span>{' '}
                      <span className="inline-block animate-[fadeInUp_0.8s_ease-out_0.3s]">and</span>{' '}
                      <span className="inline-block animate-[fadeInUp_0.8s_ease-out_0.4s] text-[#5ce1e6]">performance</span>
                    </p>
                  </div>
                  
                  {/* Bottom row - 3 social icons */}
                  <div className="flex gap-3 md:gap-4 items-center animate-[fadeInUp_0.8s_ease-out_0.5s]" data-testid="social-icons-bottom">
                    <SiX className="w-6 h-6 md:w-7 md:h-7 text-white/80 hover:text-white transition-colors" />
                    <SiYoutube className="w-6 h-6 md:w-7 md:h-7 text-white/80 hover:text-white transition-colors" />
                    <SiSpotify className="w-6 h-6 md:w-7 md:h-7 text-white/80 hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
              
              {/* Phone outline image */}
              <img 
                src={phoneOutline} 
                alt="Phone mockup" 
                className="absolute inset-0 w-full h-full pointer-events-none object-contain"
                data-testid="phone-outline"
              />
              
              {/* Turquoise accent swooshes - top left */}
              <div className="absolute -top-3 -left-1 md:-top-4 md:-left-2">
                <svg width="40" height="40" viewBox="0 0 50 50" fill="none">
                  <path d="M 5 25 Q 15 20 25 25" stroke="#5ce1e6" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                  <path d="M 25 5 Q 20 15 25 25" stroke="#5ce1e6" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                </svg>
              </div>
              
              {/* Turquoise accent swooshes - bottom right */}
              <div className="absolute -bottom-3 -right-1 md:-bottom-4 md:-right-2">
                <svg width="40" height="40" viewBox="0 0 50 50" fill="none">
                  <path d="M 25 25 Q 35 30 45 25" stroke="#5ce1e6" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                  <path d="M 25 25 Q 30 35 25 45" stroke="#5ce1e6" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
