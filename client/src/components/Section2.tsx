import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import companyLogo from "@assets/IMG_8813_(1)_1764796694787.png";

export default function Section2() {
  return (
    <section 
      className="relative overflow-hidden py-16 md:py-20 lg:py-28 bg-white"
      data-testid="section-phone-brands"
    >
      {/* Subtle decorative elements */}
      <div className="absolute top-20 right-10 w-3 h-3 rounded-full bg-[#23AACA]/30" />
      <div className="absolute bottom-32 right-20 w-2 h-2 rounded-full bg-[#23AACA]/20" />
      <div className="absolute top-40 right-[15%] w-4 h-1 bg-[#23AACA]/40 rotate-45" />

      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left: Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Small label */}
            <p 
              className="text-sm font-medium text-zinc-500 mb-6 tracking-wide"
              data-testid="text-company-label"
            >
              OARC Digital
            </p>
            
            {/* Main headline */}
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-[1.1] mb-8"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              data-testid="text-social-first"
            >
              The revenue-driven<br />
              <span className="text-[#23AACA]">Social first</span> partner<br />
              you've been looking for
            </h2>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Link href="/services">
                <Button 
                  className="bg-black hover:bg-zinc-800 text-white rounded-full px-8 py-6 h-auto text-base font-semibold flex items-center gap-2"
                  data-testid="button-browse-services"
                >
                  Browse Our Services
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              
              <Link href="/why-us">
                <span 
                  className="text-base font-medium text-zinc-700 hover:text-black flex items-center gap-1 transition-colors cursor-pointer"
                  data-testid="link-meet-team"
                >
                  Meet The Team
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>

          {/* Right: Tilted Phone Mockup */}
          <div className="relative flex-shrink-0">
            {/* Phone container with tilt */}
            <div 
              className="relative w-[200px] md:w-[240px] lg:w-[280px]"
              style={{ 
                transform: 'rotate(6deg)',
                transformOrigin: 'center center'
              }}
            >
              {/* Phone frame */}
              <div className="relative bg-zinc-900 rounded-[2.5rem] p-2 shadow-2xl">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-zinc-900 rounded-b-2xl z-20" />
                
                {/* Screen */}
                <div className="relative bg-white rounded-[2rem] overflow-hidden" style={{ aspectRatio: '9/19' }}>
                  {/* Screen content - showing a sample social post */}
                  <div className="absolute inset-0 flex flex-col">
                    {/* Status bar */}
                    <div className="h-8 bg-zinc-100 flex items-center justify-center">
                      <div className="w-12 h-1 bg-zinc-300 rounded-full" />
                    </div>
                    
                    {/* Content area */}
                    <div className="flex-1 p-4 flex flex-col items-center justify-center bg-gradient-to-b from-zinc-50 to-white">
                      {/* Sample content card */}
                      <div className="w-full bg-white rounded-xl shadow-lg p-4 border border-zinc-100">
                        {/* Header with logo */}
                        <div className="flex items-center gap-2 mb-3">
                          <img 
                            src={companyLogo} 
                            alt="OARC Digital" 
                            className="w-8 h-8 object-contain"
                          />
                          <div>
                            <p className="text-[10px] font-bold text-zinc-800">OARC Digital</p>
                            <p className="text-[8px] text-zinc-400">Sponsored</p>
                          </div>
                        </div>
                        
                        {/* Sample image placeholder */}
                        <div className="w-full aspect-square rounded-lg bg-gradient-to-br from-[#23AACA] via-[#c4ff4d] to-[#ff914d] mb-3 flex items-center justify-center">
                          <span className="text-white text-[10px] font-bold text-center px-2">
                            Revenue Driven Marketing
                          </span>
                        </div>
                        
                        {/* Engagement row */}
                        <div className="flex items-center gap-3 text-zinc-400">
                          <div className="flex items-center gap-1">
                            <div className="w-3 h-3 rounded-full bg-red-400" />
                            <span className="text-[8px]">2.4k</span>
                          </div>
                          <span className="text-[8px]">128 comments</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom navigation */}
                    <div className="h-12 bg-white border-t border-zinc-100 flex items-center justify-around px-6">
                      <div className="w-5 h-5 rounded-full bg-zinc-200" />
                      <div className="w-5 h-5 rounded-full bg-zinc-200" />
                      <div className="w-5 h-5 rounded-full bg-[#23AACA]" />
                      <div className="w-5 h-5 rounded-full bg-zinc-200" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements around phone */}
              <div className="absolute -top-4 -right-4">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path d="M5 15 Q15 10 25 15" stroke="#23AACA" strokeWidth="2" strokeLinecap="round" fill="none"/>
                </svg>
              </div>
              <div className="absolute -bottom-4 -left-4">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path d="M5 15 Q15 20 25 15" stroke="#23AACA" strokeWidth="2" strokeLinecap="round" fill="none"/>
                </svg>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
