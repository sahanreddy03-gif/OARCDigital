import { Button } from "@/components/ui/button";
import FloatingChipCarousel from "./FloatingChipCarousel";

export default function HeroSection() {
  return (
    <section className="relative pt-24 md:pt-32 pb-12 md:pb-16 overflow-hidden bg-gradient-to-br from-primary/5 via-chart-2/5 to-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-block mb-6">
            <span className="text-sm uppercase tracking-wide font-semibold text-primary">
              Where Creativity Meets Revenue
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight leading-[1.1] mb-6">
            AI-Powered Marketing
            <br />
            <span className="italic">Agency That Drives Revenue</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            AI-Certified Talent + Custom AI Workflows + Ruthless Automation + Guaranteed Results = More Effective. Lower Cost. More Sales.
          </p>

          <Button 
            size="lg" 
            className="rounded-full text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all"
            data-testid="button-start-talking"
          >
            Start Talking
          </Button>

          <div className="flex items-center justify-center gap-4 mt-8 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-primary"></span>
              AI Employees Available
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-primary"></span>
              Intelligence-Powered Social Media
            </span>
          </div>
        </div>
      </div>

      <div className="relative mt-12 md:mt-16">
        <FloatingChipCarousel />
      </div>
    </section>
  );
}
