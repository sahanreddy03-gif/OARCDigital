import { Button } from "@/components/ui/button";
import FloatingChipCarousel from "./FloatingChipCarousel";
import heroBackground from '@assets/generated_images/Ultra_High_Quality_Hero_Background_5edfbd6f.png';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col overflow-hidden bg-black">
      {/* Background with proper positioning for all devices */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat bg-center md:bg-left-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Multiple gradient overlays for fade effect like Superside */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50"></div>
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/10 to-black/60"></div>
      
      <div className="relative flex-1 flex flex-col justify-between pt-16 md:pt-24 pb-2 md:pb-3">
        <div className="max-w-7xl w-full mx-auto px-4 md:px-8 lg:px-12 flex items-center flex-1">
          <div className="max-w-2xl py-4 md:py-6">
            <div className="mb-2 md:mb-3">
              <span className="text-[9px] md:text-[10px] lg:text-xs uppercase tracking-[0.2em] font-bold text-white leading-none">
                WHERE CREATIVITY MEETS REVENUE
              </span>
            </div>

            <h1 className="mb-3 md:mb-4 text-white">
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[0.9]">
                AI-Powered Marketing,
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light italic font-serif tracking-tight leading-[0.9] mt-0.5">
                Agency That Drives Revenue
              </span>
            </h1>

            <p className="text-xs md:text-sm lg:text-base text-white/90 max-w-xl leading-relaxed mb-3 md:mb-4 font-normal">
              AI-Certified Talent + Custom AI Workflows + Ruthless Automation + Guaranteed Results = More Effective. Lower Cost. More Sales.
            </p>

            <Button 
              size="default" 
              className="rounded-full text-xs md:text-sm px-6 md:px-8 py-4 md:py-5 h-auto font-bold bg-[#c4ff4d] text-black hover:bg-[#b5ef3d] shadow-xl hover:shadow-2xl transition-all border-0"
              data-testid="button-start-talking"
            >
              Start Talking
            </Button>

            <div className="mt-2 md:mt-3 flex flex-wrap items-center gap-1.5 md:gap-2 text-white text-[9px] md:text-[10px] font-semibold px-2.5 md:px-3 py-1 md:py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 inline-flex max-w-max">
              <span className="whitespace-nowrap">Malta's #1</span>
              <span className="text-white/50">•</span>
              <span className="whitespace-nowrap">AI Employees Available</span>
              <span className="text-white/50 hidden sm:inline">•</span>
              <span className="whitespace-nowrap hidden sm:inline">Intelligence-Powered Social Media</span>
            </div>
          </div>
        </div>

        <div className="w-full pb-1">
          <FloatingChipCarousel />
        </div>
      </div>
    </section>
  );
}
