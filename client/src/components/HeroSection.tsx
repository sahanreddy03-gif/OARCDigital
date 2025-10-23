import { Button } from "@/components/ui/button";
import FloatingChipCarousel from "./FloatingChipCarousel";
import heroBackground from '@assets/generated_images/Artistic_Hero_Background_Illustration_ff3373eb.png';

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
          <div className="mb-4">
            <span className="text-xs md:text-sm uppercase tracking-wider font-bold text-white/90">
              AI-POWERED CREATIVE SERVICES
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black font-display tracking-tight leading-[1.05] mb-6 text-white">
            AI-powered creative,
            <br />
            <span className="italic font-serif">delivered at scale</span>
          </h1>

          <p className="text-base md:text-lg text-white/90 max-w-xl leading-relaxed mb-8">
            AI-certified creative talent + custom AI workflows + the latest AI tools = faster delivery, more efficiency, and real money saved for your team.
          </p>

          <Button 
            size="lg" 
            className="rounded-full text-base md:text-lg px-10 py-6 h-auto font-bold bg-[#c4ff4d] text-black hover:bg-[#b5ef3d] shadow-xl hover:shadow-2xl transition-all"
            data-testid="button-book-demo"
          >
            Book a demo
          </Button>
        </div>
      </div>

      <div className="relative pb-4 md:pb-6">
        <FloatingChipCarousel />
      </div>
    </section>
  );
}
