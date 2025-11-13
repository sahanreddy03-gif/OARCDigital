import aiExcellence from '@assets/739d30f2ecb844e9c1186e62ca63efbda518ff4a-1050x1200_1761257258076.avif';
import creativeStrategy from '@assets/db64abcfab31dccdde04f1fb8be45337dfb692e9-1392x1392_1761257777037.avif';
import revenueCentered from '@assets/07c35cf0cbddd33390e2f878e287f38703ae7b26-1040x904_1761258187346.avif';
import sectionBackground from '@assets/This OARC_1763076281807.avif';

const differentiators = [
  {
    title: "AI Excellence",
    description: "We spot the gaps by uncovering competitors, customers, and seasonal patterns you're missing.",
    image: aiExcellence,
  },
  {
    title: "Our Creative Strategy",
    description: "We create the edge with organic, local-first ideas that actually connect with your audience.",
    image: creativeStrategy,
  },
  {
    title: "Revenue Centered",
    description: "We engage & convert through automated follow-ups that keep leads warm and drive real sales.",
    image: revenueCentered,
  },
];

export default function Section5() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden" data-testid="section-5">
      {/* Background image - lowest layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: `url(${sectionBackground})`
        }}
      ></div>
      
      {/* Dark overlay for text readability - gradual darkening */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80 z-[1]"></div>
      
      {/* Additional warm overlay to maintain brand colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-orange-950/30 z-[2]"></div>
      
      {/* Smooth transition gradient from white (top) to dark - constrained to top only */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white via-zinc-100/50 to-transparent z-[3] pointer-events-none"></div>
      
      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-12">
        {/* Section heading with exact green from hero CTA */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Our <span className="italic" style={{ color: '#c4ff4d' }}>Difference</span>
          </h2>
        </div>

        {/* Desktop: Grid with CSS hover interactions */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="relative cursor-pointer card-hover-container"
              data-testid={`desktop-card-${index}`}
            >
              {/* Card container */}
              <div className="relative overflow-visible rounded-xl">
                {/* Image - always visible */}
                <div className="aspect-[4/3] relative overflow-hidden bg-gray-900 rounded-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700"
                  />
                </div>

                {/* Content below image - always visible */}
                <div className="mt-6 pb-6 border-b-2 border-white/20">
                  <h3 className="text-2xl lg:text-3xl xl:text-4xl font-light text-white">
                    <span className="italic">{item.title}</span>
                  </h3>
                </div>

                {/* Description - appears on hover with CSS */}
                <div className="card-description mt-4">
                  <p className="text-base lg:text-lg text-white/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Simple vertical stack */}
        <div
          className="md:hidden flex flex-col gap-12"
          data-testid="mobile-scroll-container"
        >
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="w-full"
              data-testid={`mobile-card-${index}`}
            >
              <div className="w-full">
                {/* Image */}
                <div className="aspect-[4/3] relative overflow-hidden bg-gray-900 rounded-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content below image with separator line */}
                <div className="mt-6 pb-4 border-b-2 border-white/20">
                  <h3 className="text-2xl sm:text-3xl font-light text-white">
                    <span className="italic">{item.title}</span>
                  </h3>
                </div>

                {/* Description - always visible */}
                <div className="mt-4">
                  <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS for hover interaction - DESKTOP ONLY */}
      <style>{`
        /* Desktop only: hide descriptions by default, show on hover */
        @media (min-width: 768px) {
          .card-hover-container .card-description {
            opacity: 0;
            transform: translateY(-1rem);
            visibility: hidden;
            transition: opacity 500ms ease-in-out, transform 500ms ease-in-out, visibility 500ms;
          }

          .card-hover-container:hover .card-description {
            opacity: 1;
            transform: translateY(0);
            visibility: visible;
          }
          
          .card-hover-container:hover img {
            transform: scale(1.05);
          }
        }
        
        /* Mobile: descriptions always visible */
        @media (max-width: 767px) {
          .card-description {
            opacity: 1;
            transform: translateY(0);
            visibility: visible;
          }
        }
      `}</style>
    </section>
  );
}
