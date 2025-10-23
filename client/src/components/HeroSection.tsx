import { Button } from "@/components/ui/button";
import FloatingChipCarousel from "./FloatingChipCarousel";
import heroBackground from '@assets/generated_images/Ultra_High_Quality_Hero_Background_5edfbd6f.png';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-black">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Multiple gradient overlays for fade effect like Superside */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50"></div>
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/10 to-black/60"></div>
      
      <div className="relative flex-1 flex flex-col justify-between pt-20 md:pt-28 pb-3 md:pb-4">
        <div className="max-w-7xl w-full mx-auto px-4 md:px-8 lg:px-12 flex items-center flex-1">
          <div className="max-w-2xl py-8 md:py-12">
            <div className="mb-3 md:mb-4">
              <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-white leading-none">
                WHERE CREATIVITY MEETS REVENUE
              </span>
            </div>

            <h1 className="mb-4 md:mb-5 text-white">
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[0.95]">
                AI-Powered Marketing,
              </span>
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light italic font-serif tracking-tight leading-[0.95] mt-1">
                Agency That Drives Revenue
              </span>
            </h1>

            <p className="text-sm md:text-base lg:text-lg text-white/90 max-w-xl leading-relaxed mb-5 md:mb-6 font-normal">
              AI-Certified Talent + Custom AI Workflows + Ruthless Automation + Guaranteed Results = More Effective. Lower Cost. More Sales.
            </p>

            <Button 
              size="lg" 
              className="rounded-full text-sm md:text-base px-8 md:px-10 py-5 md:py-6 h-auto font-bold bg-[#c4ff4d] text-black hover:bg-[#b5ef3d] shadow-xl hover:shadow-2xl transition-all border-0"
              data-testid="button-start-talking"
            >
              Start Talking
            </Button>

            <div className="mt-4 md:mt-5 flex flex-wrap items-center gap-2 text-white text-[10px] md:text-xs font-semibold px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 inline-flex max-w-max">
              <span className="whitespace-nowrap">Malta's #1</span>
              <span className="text-white/50">•</span>
              <span className="whitespace-nowrap">AI Employees Available</span>
              <span className="text-white/50 hidden sm:inline">•</span>
              <span className="whitespace-nowrap hidden sm:inline">Intelligence-Powered Social Media</span>
            </div>
          </div>
        </div>

        <div className="w-full">
          <FloatingChipCarousel />
        </div>
      </div>
    </section>
  );
}
