import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import executiveWoman1 from '@assets/stock_images/professional_busines_7b41edc5.jpg';
import executiveWoman2 from '@assets/stock_images/professional_busines_37925e9b.jpg';
import executiveMan1 from '@assets/stock_images/professional_busines_473aedf4.jpg';
import executiveMan2 from '@assets/stock_images/professional_busines_69be6204.jpg';

const testimonials = [
  {
    quote: "OARC Digital transformed our marketing approach. Their AI-powered strategies delivered a 320% ROI in just 6 months.",
    author: "Sarah Chen",
    role: "Chief Marketing Officer",
    company: "TechVentures Inc.",
    image: executiveWoman1,
    metric: "320% ROI"
  },
  {
    quote: "Working with OARC has been game-changing. They think strategically about our business goals and deliver results that matter.",
    author: "Michael Rodriguez",
    role: "Founder & CEO",
    company: "Growth Labs",
    image: executiveMan1,
    metric: "$2.4M ARR"
  },
  {
    quote: "The combination of AI technology and human creativity is what sets OARC apart. They've helped us scale 10x while maintaining quality.",
    author: "Emma Thompson",
    role: "VP of Marketing",
    company: "InnovateCo",
    image: executiveWoman2,
    metric: "10x Scale"
  },
  {
    quote: "OARC Digital isn't just a vendor—they're a true partner in our growth. Their strategic insights have been instrumental in our expansion.",
    author: "David Park",
    role: "Chief Revenue Officer",
    company: "Scale Systems",
    image: executiveMan2,
    metric: "+450%"
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-zinc-50 to-zinc-100">
      {/* Subtle background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative container mx-auto px-6 md:px-8 lg:px-12 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <p className="text-sm uppercase tracking-wider font-bold text-orange-600 mb-3" data-testid="text-testimonials-eyebrow">
            Our Credibility
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-zinc-900 mb-3">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto">
            Real results from real partnerships
          </p>
        </div>

        {/* Compact Featured Testimonial */}
        <div className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-xl hover-elevate transition-all duration-500">
          <div className="grid md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr] gap-0">
            {/* Left: Compact Image */}
            <div className="relative h-64 md:h-auto overflow-hidden bg-gradient-to-br from-zinc-100 to-zinc-200">
              <img 
                src={activeTestimonial.image} 
                alt={activeTestimonial.author}
                className="w-full h-full object-cover"
                data-testid="testimonial-featured-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>

            {/* Right: Content */}
            <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-between">
              {/* Quote Icon */}
              <div className="mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-md">
                  <Quote className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900 leading-tight mb-6 flex-1">
                "{activeTestimonial.quote}"
              </blockquote>

              {/* Bottom Row - Author Info & Navigation */}
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
                {/* Author Info */}
                <div className="flex items-center gap-4">
                  {/* Metric Badge */}
                  <div className="bg-[#c4ff4d] text-zinc-900 px-4 py-2.5 rounded-xl shadow-sm">
                    <div className="text-2xl font-black leading-none">{activeTestimonial.metric}</div>
                  </div>
                  
                  {/* Author Details */}
                  <div>
                    <div className="text-lg font-black text-zinc-900" data-testid="testimonial-author-name">
                      {activeTestimonial.author}
                    </div>
                    <div className="text-sm text-zinc-600 font-medium">
                      {activeTestimonial.role}
                    </div>
                    <div className="text-sm text-zinc-500">
                      {activeTestimonial.company}
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-full bg-zinc-900 text-white flex items-center justify-center hover-elevate active-elevate-2 transition-all duration-300"
                    data-testid="button-testimonial-prev"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <div className="text-sm font-bold text-zinc-600">
                    {activeIndex + 1} / {testimonials.length}
                  </div>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-full bg-zinc-900 text-white flex items-center justify-center hover-elevate active-elevate-2 transition-all duration-300"
                    data-testid="button-testimonial-next"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
