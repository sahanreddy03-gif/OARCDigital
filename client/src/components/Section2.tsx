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

          {/* Right Visual - Phone Mockup with Hand-Drawn Border */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[180px] md:max-w-[200px] lg:max-w-[220px] aspect-[9/19.5]">
              {/* Phone content background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-zinc-900 rounded-[1.5rem] flex items-center justify-center overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <Palette className="w-12 h-12 md:w-14 md:h-14 text-[#5ce1e6] opacity-60" />
                </div>
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-zinc-900 rounded-b-xl"></div>
              </div>
              
              {/* Hand-drawn double border effect */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 180 390" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Outer sketchy border */}
                <path 
                  d="M 25 8 Q 90 5 155 8 L 172 195 Q 175 300 172 382 Q 90 385 25 382 L 8 195 Q 5 100 25 8 Z" 
                  stroke="#18181b" 
                  strokeWidth="2.5" 
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Inner sketchy border */}
                <path 
                  d="M 28 11 Q 90 8 152 11 L 168 195 Q 171 298 168 378 Q 90 381 28 378 L 12 195 Q 9 103 28 11 Z" 
                  stroke="#18181b" 
                  strokeWidth="2" 
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              
              {/* Feather/Tick accent in turquoise - top right corner */}
              <div className="absolute -top-2 -right-2 w-8 h-8 md:w-10 md:h-10">
                <Check className="w-full h-full text-[#5ce1e6]" strokeWidth={3} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
