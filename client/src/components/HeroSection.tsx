import { Button } from "@/components/ui/button";
import FloatingChipCarousel from "./FloatingChipCarousel";
import heroBackground from '@assets/generated_images/Premium_Artistic_Forest_Hero_Background_01273737.png';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
      
      <div className="relative flex-1 max-w-7xl w-full mx-auto px-6 md:px-12 flex flex-col justify-center">
        <div className="max-w-2xl pt-8 md:pt-0">
          <div className="mb-5">
            <span className="text-xs md:text-sm uppercase tracking-[0.2em] font-bold text-white/90 leading-none">
              AI-POWERED CREATIVE SERVICES
            </span>
          </div>

          <h1 className="mb-7 text-white">
            <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.95]">
              AI-Powered Marketing,
            </span>
            <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light italic font-serif tracking-tight leading-[0.95] mt-1">
              Agency That Drives Revenue
            </span>
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-xl leading-relaxed mb-9 font-normal">
            AI-Certified Talent + Custom AI Workflows + Ruthless Automation + Guaranteed Results = More Effective. Lower Cost. More Sales.
          </p>

          <Button 
            size="lg" 
            className="rounded-full text-base md:text-lg px-11 py-7 h-auto font-bold bg-[#c4ff4d] text-black hover:bg-[#b5ef3d] shadow-xl hover:shadow-2xl transition-all border-0"
            data-testid="button-start-talking"
          >
            Start Talking
          </Button>
        </div>
      </div>

      <div className="relative pb-4 md:pb-6">
        <FloatingChipCarousel />
      </div>
    </section>
  );
}
