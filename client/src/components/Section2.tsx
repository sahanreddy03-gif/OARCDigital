import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link } from "wouter";
import { SiFacebook, SiInstagram, SiLinkedin, SiX, SiYoutube, SiSpotify } from "react-icons/si";

export default function Section2() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  // Array of gradient backgrounds to simulate Instagram/Reels style content
  const backgrounds = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
  ];
  
  // Text content to display in phone
  const textContent = [
    "We blend creative and performance",
    "Mastering the New Rules of Branding",
    "OARC Digital"
  ];
  
  useEffect(() => {
    const bgInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgrounds.length);
    }, 2000); // Change background every 2 seconds
    
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % textContent.length);
    }, 3000); // Change text every 3 seconds
    
    return () => {
      clearInterval(bgInterval);
      clearInterval(textInterval);
    };
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
            
            <h2 className="text-[1.625rem] md:text-4xl lg:text-5xl xl:text-6xl font-bold text-zinc-900 leading-tight mb-6 md:mb-8" data-testid="text-section2-heading">
              <span className="block whitespace-nowrap">The results-driven</span>
              <span className="text-[#5ce1e6] block whitespace-nowrap">Social First Agency</span>
              <span className="block whitespace-nowrap">you've been looking for</span>
            </h2>

            <div className="flex flex-col gap-4 w-full sm:flex-row sm:gap-5">
              <Link href="/services/social-media-creative-management">
                <Button 
                  size="lg"
                  className="bg-zinc-900 text-white font-bold rounded-full w-full sm:w-auto flex-shrink-0"
                  data-testid="button-explore-social-services"
                >
                  Explore Social Services
                </Button>
              </Link>
              
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
                  
                  {/* Center text - cycling through different messages */}
                  <div className="text-center flex-1 flex items-center justify-center px-3">
                    <p className="text-xl md:text-2xl lg:text-3xl font-black text-white leading-tight transition-opacity duration-500" data-testid="phone-text-content">
                      {textContent[currentTextIndex]}
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
              
              {/* Hand-drawn phone outline - Simple single border like Social Shepherd */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 200 355" fill="none">
                {/* Notch cutout */}
                <path 
                  d="M 65 2 L 65 6 Q 68 9 72 9 L 128 9 Q 132 9 135 6 L 135 2" 
                  stroke="#1a1a1a" 
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                {/* Main phone outline - hand-drawn style */}
                <path 
                  d="M 13 32 Q 11 28 13 25 L 14 18 Q 16 13 20 10 L 29 6 Q 36 3 47 2 L 153 2 Q 164 3 171 6 L 180 10 Q 184 13 186 18 L 187 25 Q 189 28 187 32 L 187 323 Q 189 327 187 331 L 186 338 Q 184 343 180 346 L 171 350 Q 164 353 153 354 L 47 354 Q 36 353 29 350 L 20 346 Q 16 343 14 338 L 13 331 Q 11 327 13 323 Z" 
                  stroke="#1a1a1a" 
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              
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
