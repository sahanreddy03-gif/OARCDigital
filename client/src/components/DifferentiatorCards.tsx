import { Card } from "@/components/ui/card";
import { Search, Lightbulb, TrendingUp } from "lucide-react";

const differentiators = [
  {
    icon: Search,
    title: "AI Market Intelligence",
    description: "We spot the gaps by uncovering competitors, customers, and seasonal patterns you're missing.",
    gradient: "from-chart-1/10 via-chart-1/5 to-transparent",
  },
  {
    icon: Lightbulb,
    title: "Creative Strategy",
    description: "We create the edge with organic, local-first ideas that actually connect with your audience.",
    gradient: "from-chart-3/10 via-chart-3/5 to-transparent",
  },
  {
    icon: TrendingUp,
    title: "Revenue Centered",
    description: "We engage & convert through automated follow-ups that keep leads warm and drive real sales.",
    gradient: "from-primary/10 via-primary/5 to-transparent",
  },
];

export default function DifferentiatorCards() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-display tracking-tight mb-4">
            Our <span className="italic font-black">difference</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            The perfect fit for fast moving brands
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {differentiators.map((item, index) => (
            <Card 
              key={index}
              className={`group relative p-8 md:p-10 hover-elevate hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden bg-gradient-to-br ${item.gradient}`}
              data-testid={`card-differentiator-${index}`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl"></div>
              
              <div className="relative">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-chart-2/20 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black font-display mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
