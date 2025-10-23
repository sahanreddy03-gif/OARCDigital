import { Card } from "@/components/ui/card";
import { Search, Lightbulb, TrendingUp } from "lucide-react";

const differentiators = [
  {
    icon: Search,
    title: "AI Market Intelligence",
    description: "We spot the gaps by uncovering competitors, customers, and seasonal patterns you're missing.",
  },
  {
    icon: Lightbulb,
    title: "Creative Strategy",
    description: "We create the edge with organic, local-first ideas that actually connect with your audience.",
  },
  {
    icon: TrendingUp,
    title: "Revenue Centered",
    description: "We engage & convert through automated follow-ups that keep leads warm and drive real sales.",
  },
];

export default function DifferentiatorCards() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight mb-4">
            Our <span className="italic">difference</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The perfect fit for fast moving brands
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <Card 
              key={index}
              className="p-8 hover-elevate hover:shadow-xl transition-all duration-300 cursor-pointer"
              data-testid={`card-differentiator-${index}`}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
