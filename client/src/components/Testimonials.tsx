import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "OARC Digital transformed our marketing approach. Their AI-powered strategies delivered a 320% ROI in just 6 months. The team's expertise and responsiveness are unmatched.",
    author: "Sarah Chen",
    role: "CMO",
    company: "TechVentures Inc.",
    rating: 5,
  },
  {
    quote: "Working with OARC has been game-changing. They don't just execute—they think strategically about our business goals and deliver results that matter.",
    author: "Michael Rodriguez",
    role: "Founder & CEO",
    company: "Growth Labs",
    rating: 5,
  },
  {
    quote: "The combination of AI technology and human creativity is what sets OARC apart. They've helped us scale our content production while maintaining quality.",
    author: "Emma Thompson",
    role: "Marketing Director",
    company: "InnovateCo",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-wider font-black text-primary mb-4">
            Our Credibility
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black font-display tracking-tight leading-[0.95] mb-6">
            What our <span className="italic font-black">clients say</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from real partnerships
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="relative p-8 md:p-10 hover-elevate hover:shadow-2xl transition-all duration-500 bg-background/95 backdrop-blur-sm border-2 group overflow-hidden"
              data-testid={`card-testimonial-${index}`}
            >
              <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Quote className="w-20 h-20" />
              </div>
              
              <div className="relative">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="text-lg md:text-xl font-medium leading-relaxed mb-8 min-h-[120px]">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center gap-4 pt-6 border-t-2 border-border">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 flex items-center justify-center text-white font-black text-xl shadow-xl">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-black text-xl leading-tight" data-testid={`text-author-${index}`}>{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground font-medium mt-1">
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
