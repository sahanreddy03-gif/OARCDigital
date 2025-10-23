import { useState } from "react";
import marketIntelligence from '@assets/generated_images/AI_Market_Intelligence_Image_37e917d2.png';
import creativeStrategy from '@assets/generated_images/Creative_Strategy_Image_4f7ee50c.png';
import revenueCentered from '@assets/generated_images/Revenue_Centered_Image_633860e7.png';

const differentiators = [
  {
    title: "AI Excellence",
    description: "With dedicated AI systems, advanced automation and expert implementation, projects can be completed with unprecedented speed and accuracy.",
    image: marketIntelligence,
  },
  {
    title: "Our Creative Strategy",
    description: "Superside-inspired creative solutions that combine data-driven insights with artistic excellence to deliver campaigns that resonate.",
    image: creativeStrategy,
  },
  {
    title: "Revenue Centered",
    description: "Every decision, every campaign, every creative output is optimized for one goal: driving measurable revenue growth for your business.",
    image: revenueCentered,
  },
];

export default function Section5() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-[#0a1628]" data-testid="section-5">
      <div className="container mx-auto px-4">
        {/* Section heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our <span className="italic">difference</span>
          </h2>
        </div>

        {/* Desktop: Grid with hover interactions */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="relative group cursor-pointer rounded-2xl overflow-hidden bg-[#0f1e36] transition-all duration-500"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              data-testid={`desktop-card-${index}`}
            >
              {/* Image background */}
              <div className="aspect-[4/5] relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Title - always visible */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <h3 className="text-2xl lg:text-3xl xl:text-4xl font-normal text-white">
                    <span className="italic font-light">{item.title}</span>
                  </h3>
                </div>
              </div>

              {/* Description - appears on hover */}
              <div
                className={`absolute inset-0 bg-white p-6 lg:p-8 flex flex-col justify-end transition-all duration-500 ${
                  hoveredIndex === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-full"
                }`}
              >
                <h3 className="text-2xl lg:text-3xl xl:text-4xl font-normal text-gray-900 mb-4">
                  <span className="italic font-light">{item.title}</span>
                </h3>
                <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Scroll-snap with smooth animations */}
        <div
          className="md:hidden snap-y snap-mandatory overflow-y-scroll h-[80vh] scrollbar-hide"
          data-testid="mobile-scroll-container"
          style={{ scrollBehavior: "smooth" }}
        >
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="snap-start snap-always h-[80vh] flex items-center justify-center px-4"
              data-testid={`mobile-card-${index}`}
            >
              <div className="w-full max-w-md rounded-2xl overflow-hidden bg-[#0f1e36] shadow-2xl">
                {/* Image */}
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>

                {/* Content - always visible on mobile */}
                <div className="p-6 bg-white">
                  <h3 className="text-2xl sm:text-3xl font-normal text-gray-900 mb-3">
                    <span className="italic font-light">{item.title}</span>
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hide scrollbar on mobile */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
