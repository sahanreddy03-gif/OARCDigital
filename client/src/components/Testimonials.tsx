import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star, TrendingUp, Award } from "lucide-react";
import executiveWoman1 from '@assets/stock_images/professional_busines_db5e7c55.jpg';
import executiveWoman2 from '@assets/stock_images/professional_busines_e653c056.jpg';
import executiveMan1 from '@assets/stock_images/professional_busines_63192842.jpg';
import executiveMan2 from '@assets/stock_images/professional_busines_c7c03839.jpg';

const testimonials = [
  {
    quote: "OARC Digital transformed our marketing approach. Their AI-powered strategies delivered a 185% ROI in just 8 months.",
    author: "Sarah Chen",
    role: "Chief Marketing Officer",
    company: "TechVentures Inc.",
    industry: "SaaS",
    image: executiveWoman1,
    metric: "185% ROI",
    rating: 5,
    highlight: "AI Strategy"
  },
  {
    quote: "Working with OARC has been game-changing. They think strategically about our business goals and deliver results that matter.",
    author: "Michael Rodriguez",
    role: "Founder & CEO",
    company: "Growth Labs",
    industry: "Marketing Tech",
    image: executiveMan1,
    metric: "$850K ARR",
    rating: 5,
    highlight: "Revenue Growth"
  },
  {
    quote: "The combination of AI technology and human creativity is what sets OARC apart. They've helped us scale 4x while maintaining quality.",
    author: "Emma Thompson",
    role: "VP of Marketing",
    company: "InnovateCo",
    industry: "E-commerce",
    image: executiveWoman2,
    metric: "4x Scale",
    rating: 5,
    highlight: "Scaling Systems"
  },
  {
    quote: "OARC Digital isn't just a vendor—they're a true partner in our growth. Strategic insights that drive real business impact.",
    author: "David Park",
    role: "Chief Revenue Officer",
    company: "Scale Systems",
    industry: "B2B Tech",
    image: executiveMan2,
    metric: "+220%",
    rating: 5,
    highlight: "Partnership"
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
    <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
      {/* Dynamic background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-orange-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-orange-500/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="relative container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-4">
            <Award className="w-4 h-4 text-orange-500" />
            <p className="text-sm uppercase tracking-wider font-bold text-orange-500" data-testid="text-testimonials-eyebrow">
              Client Success Stories
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
            Trusted by Visionary Leaders
          </h2>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto">
            Real partnerships. Measurable impact. Transformative results.
          </p>
        </div>

        {/* Enhanced Featured Testimonial */}
        <div className="relative">
          {/* Refined gradient border effect with rose gold accent */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-rose-500 to-orange-400 rounded-3xl blur-xl opacity-25"></div>
          
          <div className="relative bg-zinc-800/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-zinc-700/50">
            <div className="grid md:grid-cols-[280px_1fr] gap-0">
              {/* Left: Premium Image Section */}
              <div className="relative h-80 md:h-auto overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/15 via-rose-500/15 to-orange-400/15"></div>
                <img 
                  src={activeTestimonial.image} 
                  alt={activeTestimonial.author}
                  className="w-full h-full object-cover mix-blend-luminosity opacity-90 hover:opacity-100 transition-opacity duration-500"
                  data-testid="testimonial-featured-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent"></div>
                
                {/* Floating badges */}
                <div className="absolute top-4 left-4 right-4 space-y-2">
                  <div className="inline-flex items-center gap-1 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg">
                    {[...Array(activeTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-orange-500 text-orange-500" />
                    ))}
                  </div>
                  <div className="bg-gradient-to-r from-orange-500 via-rose-500 to-orange-400 text-white px-3 py-1.5 rounded-lg shadow-lg backdrop-blur-sm">
                    <p className="text-xs font-black uppercase tracking-wide">{activeTestimonial.highlight}</p>
                  </div>
                </div>

                {/* Company badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg">
                    <p className="text-sm font-black text-zinc-900">{activeTestimonial.company}</p>
                    <p className="text-xs text-zinc-600">{activeTestimonial.industry}</p>
                  </div>
                </div>
              </div>

              {/* Right: Content Section */}
              <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-between">
                {/* Quote Icon with refined glow */}
                <div className="mb-6">
                  <div className="inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 via-rose-500 to-orange-400 items-center justify-center shadow-lg relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-rose-400 rounded-2xl blur-xl opacity-40"></div>
                    <Quote className="w-7 h-7 text-white relative z-10" />
                  </div>
                </div>

                {/* Quote Text */}
                <blockquote className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight mb-8 flex-1">
                  "{activeTestimonial.quote}"
                </blockquote>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-t border-zinc-700/50 pt-6">
                  {/* Author & Metric */}
                  <div className="flex items-center gap-5">
                    {/* Premium Metric Badge with rose gold accent */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-rose-500 to-orange-400 rounded-2xl blur-lg opacity-40"></div>
                      <div className="relative bg-gradient-to-br from-orange-500 via-rose-500 to-orange-400 text-white px-5 py-3 rounded-2xl shadow-xl">
                        <div className="flex items-center gap-1">
                          <TrendingUp className="w-5 h-5" />
                          <div className="text-2xl font-black leading-none">{activeTestimonial.metric}</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Author Info */}
                    <div>
                      <div className="text-xl font-black text-white mb-1" data-testid="testimonial-author-name">
                        {activeTestimonial.author}
                      </div>
                      <div className="text-sm text-zinc-400 font-semibold">
                        {activeTestimonial.role}
                      </div>
                      <div className="text-sm text-zinc-500">
                        {activeTestimonial.company}
                      </div>
                    </div>
                  </div>

                  {/* Navigation Controls */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={prevTestimonial}
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-zinc-700 to-zinc-800 border border-zinc-600 text-white flex items-center justify-center hover-elevate active-elevate-2 transition-all duration-300 shadow-lg"
                      data-testid="button-testimonial-prev"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <div className="px-4 py-2 bg-zinc-700/50 rounded-xl border border-zinc-600/50">
                      <div className="text-sm font-black text-white">
                        {activeIndex + 1} <span className="text-zinc-500">/</span> {testimonials.length}
                      </div>
                    </div>
                    <button
                      onClick={nextTestimonial}
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white flex items-center justify-center hover-elevate active-elevate-2 transition-all duration-300 shadow-lg"
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

        {/* Thumbnail Navigation */}
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`group relative overflow-hidden rounded-xl transition-all duration-300 ${
                activeIndex === index 
                  ? 'ring-2 ring-orange-500 scale-105' 
                  : 'opacity-50 hover:opacity-100 hover:scale-105'
              }`}
              data-testid={`button-testimonial-${index}`}
            >
              <img 
                src={testimonial.image} 
                alt={testimonial.author}
                className="w-16 h-16 object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              {activeIndex === index && (
                <div className="absolute inset-0 bg-gradient-to-t from-orange-500/50 to-transparent"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
