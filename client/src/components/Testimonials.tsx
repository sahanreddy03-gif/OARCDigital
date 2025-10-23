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
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wide font-semibold text-primary mb-4">
            Our Credibility
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight mb-4">
            What our <span className="italic">clients say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from real partnerships
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-8 hover-elevate hover:shadow-xl transition-all"
              data-testid={`card-testimonial-${index}`}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-chart-5 text-chart-5" />
                ))}
              </div>

              <blockquote className="text-lg leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold" data-testid={`text-author-${index}`}>{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
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
