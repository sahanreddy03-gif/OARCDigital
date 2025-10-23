import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "OARC Digital transformed our marketing approach. Their AI-powered strategies delivered a 320% ROI in just 6 months. The team's expertise and responsiveness are unmatched.",
    author: "Sarah Chen",
    role: "CMO",
    company: "TechVentures Inc.",
  },
  {
    quote: "Working with OARC has been game-changing. They don't just execute—they think strategically about our business goals and deliver results that matter.",
    author: "Michael Rodriguez",
    role: "Founder & CEO",
    company: "Growth Labs",
  },
  {
    quote: "The combination of AI technology and human creativity is what sets OARC apart. They've helped us scale our content production while maintaining quality.",
    author: "Emma Thompson",
    role: "Marketing Director",
    company: "InnovateCo",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary/5 via-chart-2/5 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-chart-4/10 via-transparent to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-wider font-bold text-primary mb-4">
            Our Credibility
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-display tracking-tight mb-4">
            What our <span className="italic font-black">clients say</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Real results from real partnerships
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="relative p-6 md:p-8 hover-elevate hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-background to-background/80 backdrop-blur-sm border-2 group overflow-hidden"
              data-testid={`card-testimonial-${index}`}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl"></div>
              
              <div className="relative">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-chart-5 text-chart-5" />
                  ))}
                </div>

                <blockquote className="text-base md:text-lg leading-relaxed mb-6 font-medium">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary via-chart-2 to-chart-4 flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-bold text-lg" data-testid={`text-author-${index}`}>{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
