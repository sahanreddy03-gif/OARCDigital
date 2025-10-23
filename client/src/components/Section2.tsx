import { Button } from "@/components/ui/button";
import { Palette, Check } from "lucide-react";

export default function Section2() {
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

          {/* Right Visual - Phone Mockup - Exact Social Shepherd Style */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end items-center">
            <div className="relative w-full max-w-[280px] md:max-w-[320px] lg:max-w-[380px]" style={{ aspectRatio: '9/19' }}>
              {/* Phone interior with subtle texture */}
              <div className="absolute inset-6 md:inset-8 bg-white/5 rounded-[2rem] overflow-hidden">
                <div className="w-full h-full relative" style={{
                  backgroundImage: `
                    radial-gradient(circle at 20% 50%, rgba(92, 225, 230, 0.03) 0%, transparent 50%),
                    radial-gradient(circle at 80% 50%, rgba(92, 225, 230, 0.03) 0%, transparent 50%)
                  `
                }}>
                  <div className="flex items-center justify-center h-full">
                    <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#5ce1e6]/20">The</p>
                  </div>
                </div>
              </div>
              
              {/* Hand-drawn phone outline - Simple single border like Social Shepherd */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 280 595" fill="none">
                {/* Notch cutout */}
                <path 
                  d="M 90 2 L 90 8 Q 95 12 100 12 L 180 12 Q 185 12 190 8 L 190 2" 
                  stroke="#1a1a1a" 
                  strokeWidth="3.5"
                  fill="none"
                  strokeLinecap="round"
                />
                {/* Main phone outline - hand-drawn style with slight imperfections */}
                <path 
                  d="M 18 45 Q 16 40 18 35 L 20 25 Q 22 18 28 14 L 40 8 Q 50 4 65 3 L 215 3 Q 230 4 240 8 L 252 14 Q 258 18 260 25 L 262 35 Q 264 40 262 45 L 262 550 Q 264 555 262 560 L 260 570 Q 258 577 252 581 L 240 587 Q 230 591 215 592 L 65 592 Q 50 591 40 587 L 28 581 Q 22 577 20 570 L 18 560 Q 16 555 18 550 Z" 
                  stroke="#1a1a1a" 
                  strokeWidth="3.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              
              {/* Turquoise accent swooshes - top left */}
              <div className="absolute -top-4 -left-2 md:-top-6 md:-left-4">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                  <path d="M 5 25 Q 15 20 25 25" stroke="#5ce1e6" strokeWidth="3" strokeLinecap="round" fill="none"/>
                  <path d="M 25 5 Q 20 15 25 25" stroke="#5ce1e6" strokeWidth="3" strokeLinecap="round" fill="none"/>
                </svg>
              </div>
              
              {/* Turquoise accent swooshes - bottom right */}
              <div className="absolute -bottom-4 -right-2 md:-bottom-6 md:-right-4">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                  <path d="M 25 25 Q 35 30 45 25" stroke="#5ce1e6" strokeWidth="3" strokeLinecap="round" fill="none"/>
                  <path d="M 25 25 Q 30 35 25 45" stroke="#5ce1e6" strokeWidth="3" strokeLinecap="round" fill="none"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
