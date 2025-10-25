import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import executiveWoman1 from '@assets/stock_images/professional_busines_7b41edc5.jpg';
import executiveWoman2 from '@assets/stock_images/professional_busines_37925e9b.jpg';
import executiveMan1 from '@assets/stock_images/professional_busines_473aedf4.jpg';
import executiveMan2 from '@assets/stock_images/professional_busines_69be6204.jpg';

const testimonials = [
  {
    quote: "OARC Digital transformed our marketing approach. Their AI-powered strategies delivered a 320% ROI in just 6 months. The team's expertise and responsiveness are unmatched.",
    author: "Sarah Chen",
    role: "Chief Marketing Officer",
    company: "TechVentures Inc.",
    image: executiveWoman1,
    metric: "320% ROI",
    metricLabel: "in 6 months"
  },
  {
    quote: "Working with OARC has been game-changing. They don't just execute—they think strategically about our business goals and deliver results that matter. Best investment we've made.",
    author: "Michael Rodriguez",
    role: "Founder & CEO",
    company: "Growth Labs",
    image: executiveMan1,
    metric: "$2.4M ARR",
    metricLabel: "additional revenue"
  },
  {
    quote: "The combination of AI technology and human creativity is what sets OARC apart. They've helped us scale our content production 10x while maintaining exceptional quality.",
    author: "Emma Thompson",
    role: "VP of Marketing",
    company: "InnovateCo",
    image: executiveWoman2,
    metric: "10x Content",
    metricLabel: "production scale"
  },
  {
    quote: "OARC Digital isn't just a vendor—they're a true partner in our growth. Their strategic insights and execution have been instrumental in our market expansion.",
    author: "David Park",
    role: "Chief Revenue Officer",
    company: "Scale Systems",
    image: executiveMan2,
    metric: "+450%",
    metricLabel: "lead generation"
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
    <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden bg-gradient-to-br from-zinc-50 to-zinc-100">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-zinc-200/30 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm uppercase tracking-wider font-bold text-orange-600 mb-4" data-testid="text-testimonials-eyebrow">
            Our Credibility
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl md:text-2xl text-zinc-600 max-w-3xl mx-auto">
            Real results from real partnerships with ambitious brands
          </p>
        </div>

        {/* Main Featured Testimonial - Large Format */}
        <div className="mb-8 md:mb-12">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl hover-elevate transition-all duration-700">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left: Image */}
              <div className="relative h-80 lg:h-auto overflow-hidden bg-gradient-to-br from-zinc-100 to-zinc-200">
                <img 
                  src={activeTestimonial.image} 
                  alt={activeTestimonial.author}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  data-testid="testimonial-featured-image"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                
                {/* Metric Badge */}
                <div className="absolute bottom-6 left-6 bg-[#c4ff4d] text-zinc-900 px-6 py-3 rounded-2xl shadow-lg">
                  <div className="text-3xl font-black">{activeTestimonial.metric}</div>
                  <div className="text-sm font-semibold">{activeTestimonial.metricLabel}</div>
                </div>
              </div>

              {/* Right: Content */}
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-between">
                {/* Quote Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
                    <Quote className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-900 leading-tight mb-8 flex-1">
                  "{activeTestimonial.quote}"
                </blockquote>

                {/* Author Info */}
                <div>
                  <div className="mb-6">
                    <div className="text-2xl font-black text-zinc-900" data-testid="testimonial-author-name">
                      {activeTestimonial.author}
                    </div>
                    <div className="text-lg text-zinc-600 font-medium mt-1">
                      {activeTestimonial.role}
                    </div>
                    <div className="text-base text-zinc-500 font-medium">
                      {activeTestimonial.company}
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center gap-4">
                    <button
                      onClick={prevTestimonial}
                      className="w-12 h-12 rounded-full bg-zinc-900 text-white flex items-center justify-center hover-elevate active-elevate-2 transition-all duration-300"
                      data-testid="button-testimonial-prev"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="w-12 h-12 rounded-full bg-zinc-900 text-white flex items-center justify-center hover-elevate active-elevate-2 transition-all duration-300"
                      data-testid="button-testimonial-next"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                    <div className="text-sm font-semibold text-zinc-600 ml-2">
                      {activeIndex + 1} / {testimonials.length}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-500 ${
                index === activeIndex 
                  ? 'ring-4 ring-orange-500 scale-105' 
                  : 'hover-elevate opacity-70 hover:opacity-100'
              }`}
              data-testid={`button-testimonial-${index}`}
            >
              <div className="aspect-square">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${
                  index === activeIndex ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}></div>
                <div className={`absolute bottom-0 left-0 right-0 p-4 text-white transform transition-all duration-300 ${
                  index === activeIndex ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'
                }`}>
                  <div className="text-sm font-bold">{testimonial.author}</div>
                  <div className="text-xs opacity-90">{testimonial.company}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
