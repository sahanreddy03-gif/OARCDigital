import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link } from "wouter";
import { SiFacebook, SiInstagram, SiLinkedin, SiX, SiYoutube, SiSpotify } from "react-icons/si";
import companyLogo from "@assets/final 2_1762907995368.png";
import AdvancedScrollReveal, { StaggerContainer } from "@/components/AdvancedScrollReveal";

export default function Section2() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  // Array of gradient backgrounds - OARC brand colors only (green + orange)
  const backgrounds = [
    'linear-gradient(135deg, #00FF9C 0%, #00D17D 100%)',
    'linear-gradient(135deg, #FF5A00 0%, #FF7A2E 100%)',
    'linear-gradient(135deg, #00FF9C 0%, #FF5A00 100%)',
    'linear-gradient(135deg, #0A2818 0%, #00FF9C 100%)',
    'linear-gradient(135deg, #FF5A00 0%, #1A1A1A 100%)',
    'linear-gradient(135deg, #00D17D 0%, #FF7A2E 100%)',
  ];
  
  // Content to display in phone (text or logo)
  const textContent = [
    { type: 'text', content: "We blend creative and performance" },
    { type: 'text', content: "Mastering the New Rules of Branding" },
    { type: 'logo', content: null }
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
        <div className="grid grid-cols-2 gap-3 sm:gap-5 md:gap-8 lg:gap-10 items-center">
          {/* Left Content */}
          <div className="col-span-1">
            <AdvancedScrollReveal variant="slide-up" delay={200}>
              <h2 className="text-heading-lg font-bold text-zinc-900 mb-3 sm:mb-5 md:mb-7" data-testid="text-section2-heading">
                <span className="block">The results-driven</span>
                <span className="text-primary block italic">Social First Agency</span>
                <span className="block">you've been looking for</span>
              </h2>
            </AdvancedScrollReveal>

            <AdvancedScrollReveal variant="slide-up" delay={300}>
              <div className="flex flex-col gap-2 w-full sm:flex-row sm:gap-3">
                <Link href="/services/social-media-creative-management">
                  <Button 
                    size="sm"
                    className="bg-zinc-900 text-white font-semibold rounded-full w-full sm:w-auto flex-shrink-0 text-xs sm:text-sm md:size-default"
                    data-testid="button-explore-social-services"
                  >
                    Explore Social Services
                  </Button>
                </Link>
                
                <Button 
                  variant="outline"
                  size="sm"
                  className="border-2 border-zinc-900 text-zinc-900 font-semibold rounded-full bg-transparent w-full sm:w-auto flex-shrink-0 text-xs sm:text-sm hidden sm:flex"
                  data-testid="button-meet-team"
                >
                  Meet The Team
                  <span aria-hidden="true">→</span>
                </Button>
              </div>
            </AdvancedScrollReveal>
          </div>

          {/* Right Visual - Phone Mockup - Smaller with Animated Background */}
          <AdvancedScrollReveal variant="scale" delay={150} className="col-span-1 flex justify-center lg:justify-end items-center">
            <div className="relative w-full max-w-[140px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-[260px]" style={{ aspectRatio: '9/16' }}>
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
                  
                  {/* Center text/logo - cycling through different messages */}
                  <div className="text-center flex-1 flex items-center justify-center px-3">
                    {textContent[currentTextIndex]?.type === 'text' ? (
                      <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight transition-opacity duration-500" data-testid="phone-text-content" style={{ letterSpacing: '-0.02em' }}>
                        {textContent[currentTextIndex]?.content || ''}
                      </p>
                    ) : (
                      <img 
                        src={companyLogo} 
                        alt="OARC logo" 
                        className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain transition-opacity duration-500"
                        data-testid="phone-logo-content"
                      />
                    )}
                  </div>
                  
                  {/* Bottom row - 3 social icons */}
                  <div className="flex gap-3 md:gap-4 items-center animate-[fadeInUp_0.8s_ease-out_0.5s]" data-testid="social-icons-bottom">
                    <SiX className="w-6 h-6 md:w-7 md:h-7 text-white/80 hover:text-white transition-colors" />
                    <SiYoutube className="w-6 h-6 md:w-7 md:h-7 text-white/80 hover:text-white transition-colors" />
                    <SiSpotify className="w-6 h-6 md:w-7 md:h-7 text-white/80 hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
              
              {/* Hand-drawn phone outline - Simple single border design */}
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
          </AdvancedScrollReveal>
        </div>
      </div>
    </section>
  );
}
