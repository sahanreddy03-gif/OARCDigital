import { Card } from "@/components/ui/card";
import marketIntelligence from '@assets/generated_images/AI_Market_Intelligence_Image_37e917d2.png';
import creativeStrategy from '@assets/generated_images/Creative_Strategy_Image_4f7ee50c.png';
import revenueCentered from '@assets/generated_images/Revenue_Centered_Image_633860e7.png';

const differentiators = [
  {
    title: "AI Market Intelligence",
    description: "We spot the gaps by uncovering competitors, customers, and seasonal patterns you're missing.",
    image: marketIntelligence,
  },
  {
    title: "Creative Strategy",
    description: "We create the edge with organic, local-first ideas that actually connect with your audience.",
    image: creativeStrategy,
  },
  {
    title: "Revenue Centered",
    description: "We engage & convert through automated follow-ups that keep leads warm and drive real sales.",
    image: revenueCentered,
  },
];

export default function DifferentiatorCards() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black font-display tracking-tight leading-[0.95] mb-4">
            Our <span className="italic font-black">difference</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            The perfect fit for fast moving brands
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <Card 
              key={index}
              className="group p-0 hover-elevate hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden bg-card border-2"
              data-testid={`card-differentiator-${index}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl md:text-3xl font-black font-display mb-4 leading-tight">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
