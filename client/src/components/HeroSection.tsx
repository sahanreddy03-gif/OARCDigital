import { Button } from "@/components/ui/button";
import FloatingChipCarousel from "./FloatingChipCarousel";
import heroBackground from '@assets/generated_images/Ultra_High_Quality_Hero_Background_5edfbd6f.png';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col overflow-hidden bg-black">
      {/* Mobile Layout - Clean bottom-aligned layout */}
      <div className="md:hidden absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        {/* Stronger gradient to highlight text more */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-0% via-zinc-950/75 via-50% to-zinc-950/95 to-95%"></div>
      </div>

      {/* Desktop Layout - Horizontal with side fade (STAYS EXACTLY SAME - PERFECT) */}
      <div 
        className="hidden md:block absolute inset-0 bg-cover bg-no-repeat bg-left-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent"></div>
      <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50"></div>
      <div className="hidden md:block absolute inset-0 bg-gradient-to-l from-transparent via-black/10 to-black/60"></div>
      
      {/* Mobile: Bottom-aligned flex column | Desktop: Centered with padding */}
      <div className="relative flex-1 flex flex-col justify-end md:justify-between pt-14 md:pt-24 pb-6 md:pb-3">
        {/* Content wrapper */}
        <div className="md:flex-1 md:flex md:items-center">
          <div className="max-w-7xl w-full mx-auto px-5 md:px-8 lg:px-12">
            <div className="w-full md:max-w-2xl text-center md:text-left">
              {/* Local backdrop behind text for mobile */}
              <div className="relative md:before:content-none before:absolute before:inset-0 before:-z-10 before:bg-black/50 before:blur-xl before:rounded-[32px] before:-m-4 md:before:m-0">
                <div className="mb-3 md:mb-3">
                  <span className="text-[11px] md:text-[10px] lg:text-xs uppercase tracking-[0.2em] font-bold text-white leading-none">
                    WHERE CREATIVITY MEETS REVENUE
                  </span>
                </div>

                <h1 className="mb-4 md:mb-4 text-white">
                  <span className="block text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[0.9]">
                    AI-Powered Marketing,
                  </span>
                  <span className="block text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-light italic font-serif tracking-tight leading-[0.9] mt-1">
                    Agency That Drives Revenue
                  </span>
                </h1>

                <p className="text-[15px] md:text-sm lg:text-base text-white max-w-xl mx-auto md:mx-0 leading-relaxed mb-5 md:mb-4 font-normal">
                  AI-Certified Talent + Custom AI Workflows + Ruthless Automation + Guaranteed Results = More Effective. Lower Cost. More Sales.
                </p>

                <div className="flex flex-col items-center md:items-start gap-3 md:gap-3">
                  <Button 
                    size="lg" 
                    className="rounded-full text-[15px] md:text-sm px-10 md:px-8 py-6 md:py-5 h-auto font-bold bg-[#c4ff4d] text-black hover:bg-[#b5ef3d] shadow-2xl hover:shadow-2xl transition-all border-0"
                    data-testid="button-start-talking"
                  >
                    Start Talking
                  </Button>

                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-2 text-white text-[11px] md:text-[10px] font-semibold px-4 md:px-3 py-2 md:py-1.5 bg-white/15 backdrop-blur-md rounded-full border border-white/30">
                    <span className="whitespace-nowrap">Malta's #1</span>
                    <span className="text-white/50">•</span>
                    <span className="whitespace-nowrap">AI Employees Available</span>
                    <span className="text-white/50">•</span>
                    <span className="whitespace-nowrap">Intelligence-Powered Social Media</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel - in normal flow, bigger on mobile */}
        <div className="w-full mt-8 md:mt-0 md:pb-0">
          <FloatingChipCarousel />
        </div>
      </div>
    </section>
  );
}
