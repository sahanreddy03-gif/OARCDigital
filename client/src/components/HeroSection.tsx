import { Button } from "@/components/ui/button";
import FloatingChipCarousel from "./FloatingChipCarousel";
import heroBackground from '@assets/generated_images/Ultra_High_Quality_Hero_Background_5edfbd6f.png';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col overflow-hidden bg-black">
      {/* Mobile Layout - Image fills screen, content overlays with gentle fade */}
      <div className="md:hidden absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        {/* Gentler gradient - fades down but not entirely black */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-20% via-black/50 via-45% to-black/85 to-75%"></div>
      </div>

      {/* Desktop Layout - Horizontal with side fade (STAYS EXACTLY SAME - PERFECT) */}
      <div 
        className="hidden md:block absolute inset-0 bg-cover bg-no-repeat bg-left-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent"></div>
      <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50"></div>
      <div className="hidden md:block absolute inset-0 bg-gradient-to-l from-transparent via-black/10 to-black/60"></div>
      
      <div className="relative flex-1 flex flex-col pt-14 md:pt-24">
        {/* Content area - centered on mobile, pushed higher */}
        <div className="flex-1 flex items-center justify-center md:justify-start pb-20 md:pb-0">
          <div className="max-w-7xl w-full mx-auto px-5 md:px-8 lg:px-12">
            <div className="w-full md:max-w-2xl text-center md:text-left">
              <div className="mb-3 md:mb-3">
                <span className="text-[10px] md:text-[10px] lg:text-xs uppercase tracking-[0.2em] font-bold text-white leading-none">
                  WHERE CREATIVITY MEETS REVENUE
                </span>
              </div>

              <h1 className="mb-4 md:mb-4 text-white">
                <span className="block text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[0.95]">
                  AI-Powered Marketing,
                </span>
                <span className="block text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light italic font-serif tracking-tight leading-[0.95] mt-1">
                  Agency That Drives Revenue
                </span>
              </h1>

              <p className="text-sm md:text-sm lg:text-base text-white/95 max-w-xl mx-auto md:mx-0 leading-relaxed mb-4 md:mb-4 font-normal">
                AI-Certified Talent + Custom AI Workflows + Ruthless Automation + Guaranteed Results = More Effective. Lower Cost. More Sales.
              </p>

              <div className="flex flex-col items-center md:items-start gap-3 md:gap-3">
                <Button 
                  size="lg" 
                  className="rounded-full text-sm md:text-sm px-8 md:px-8 py-5 md:py-5 h-auto font-bold bg-[#c4ff4d] text-black hover:bg-[#b5ef3d] shadow-xl hover:shadow-2xl transition-all border-0"
                  data-testid="button-start-talking"
                >
                  Start Talking
                </Button>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-2 text-white text-[10px] md:text-[10px] font-semibold px-3 md:px-3 py-1.5 md:py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <span className="whitespace-nowrap">Malta's #1</span>
                  <span className="text-white/50">•</span>
                  <span className="whitespace-nowrap">AI Employees Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel - brought up slightly on mobile */}
        <div className="w-full absolute bottom-12 md:static md:pb-3">
          <FloatingChipCarousel />
        </div>
      </div>
    </section>
  );
}
