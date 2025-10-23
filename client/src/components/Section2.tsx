import { Button } from "@/components/ui/button";
import { Palette } from "lucide-react";

export default function Section2() {
  return (
    <section className="relative bg-white py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <p className="text-sm md:text-base font-semibold text-zinc-900 mb-6 md:mb-8" data-testid="text-eyebrow">
              OARC Digital
            </p>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-zinc-900 leading-tight mb-8 md:mb-10" data-testid="text-section2-heading">
              The AI-powered{' '}
              <span className="text-[#c4ff4d]">
                creative agency
              </span>{' '}
              driving revenue growth
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

          {/* Right Visual - Placeholder for now */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[300px] md:max-w-[400px] lg:max-w-[450px] aspect-[9/16]">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl flex items-center justify-center border-8 md:border-[10px] border-zinc-800">
                <div className="w-full h-full bg-gradient-to-br from-[#c4ff4d]/20 to-zinc-900/80 rounded-[2rem] md:rounded-[2.5rem] flex items-center justify-center p-8">
                  <div className="text-center">
                    <Palette className="w-20 h-20 md:w-24 md:h-24 mb-4 mx-auto text-[#c4ff4d]" />
                    <p className="text-white text-lg md:text-xl font-bold">AI Creative</p>
                    <p className="text-white/70 text-sm md:text-base mt-2">Innovation</p>
                  </div>
                </div>
              </div>
              {/* Decorative accent strokes */}
              <div className="absolute -top-4 -right-4 w-16 h-16 md:w-20 md:h-20">
                <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
                  <path d="M10 10 L70 10" stroke="#c4ff4d" strokeWidth="4" strokeLinecap="round"/>
                  <path d="M70 10 L70 70" stroke="#c4ff4d" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 md:w-24 md:h-24">
                <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                  <path d="M20 80 L80 20" stroke="#c4ff4d" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
