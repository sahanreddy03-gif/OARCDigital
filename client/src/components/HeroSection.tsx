import { Button } from "@/components/ui/button";
import FloatingChipCarousel from "./FloatingChipCarousel";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex flex-col overflow-hidden bg-gradient-to-br from-[#f8f3ff] via-[#fff5f7] to-[#f0f9ff]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-pink-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-[700px] h-[700px] bg-blue-200/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative flex-1 max-w-7xl w-full mx-auto px-6 md:px-12 flex flex-col justify-center">
        <div className="text-center max-w-5xl mx-auto pt-20 md:pt-28 pb-8">
          <div className="inline-block mb-4">
            <span className="text-xs md:text-sm uppercase tracking-wider font-bold text-primary">
              AI-powered creative services
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black font-display tracking-tight leading-[0.95] mb-6">
            AI-Powered Marketing
            <br />
            <span className="italic font-black">Agency That Drives Revenue</span>
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            AI-Certified Talent + Custom AI Workflows + Ruthless Automation + Guaranteed Results = More Effective. Lower Cost. More Sales.
          </p>

          <Button 
            size="lg" 
            className="rounded-full text-base md:text-lg px-10 py-6 h-auto font-bold shadow-xl hover:shadow-2xl transition-all"
            data-testid="button-start-talking"
          >
            Start Talking
          </Button>
        </div>
      </div>

      <div className="relative pb-8">
        <FloatingChipCarousel />
      </div>
    </section>
  );
}
