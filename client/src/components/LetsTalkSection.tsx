import { useEffect, useRef, useState } from 'react';

export default function LetsTalkSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { 
        threshold: 0.3,
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const pillars = [
    {
      letter: "O",
      title: "Optimised",
      subtitle: "Nothing wasted. Everything aligned.",
      delay: 0
    },
    {
      letter: "A",
      title: "AI-Driven",
      subtitle: "Systems that learn and multiply your output.",
      delay: 0.15
    },
    {
      letter: "R",
      title: "Revenue",
      subtitle: "We focus on what matters.",
      delay: 0.3
    },
    {
      letter: "C",
      title: "Creative",
      subtitle: "We win attention that converts.",
      delay: 0.45
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative bg-white py-16 md:py-20 lg:py-24" 
      data-testid="section-lets-talk"
    >
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 tracking-tight mb-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s ease-out'
            }}
          >
            This is OARC.
          </h2>
          <p 
            className="text-lg md:text-xl text-zinc-600 max-w-3xl mx-auto"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s ease-out',
              transitionDelay: '0.2s'
            }}
          >
            Built for brands that demand exponential growth.
          </p>
        </div>
        
        {/* OARC Grid with Giant Letter Backgrounds */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mb-16 md:mb-20">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.letter}
              className="relative overflow-hidden rounded-2xl p-8 md:p-10 lg:p-12"
              data-testid={`oarc-pillar-${pillar.letter.toLowerCase()}`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
                transition: 'all 1s cubic-bezier(0.34, 1.56, 0.64, 1)',
                transitionDelay: `${pillar.delay}s`
              }}
            >
              {/* Giant Letter Background */}
              <div 
                className="absolute -top-8 -right-4 md:-top-12 md:-right-8 text-[10rem] md:text-[12rem] lg:text-[14rem] font-black leading-none text-orange-600/10 select-none pointer-events-none"
                aria-hidden="true"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'scale(1) rotate(0deg)' : 'scale(0.8) rotate(-10deg)',
                  transition: 'all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  transitionDelay: `${pillar.delay + 0.1}s`
                }}
              >
                {pillar.letter}
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-orange-600 mb-4">
                  {pillar.title}
                </h3>
                <p className="text-lg md:text-xl text-zinc-600 leading-relaxed">
                  {pillar.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Tagline */}
        <div 
          className="text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out',
            transitionDelay: '0.6s'
          }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-900">
            <span data-testid="text-super-talented">Super Talented</span>
            <span className="hidden md:inline text-zinc-400">·</span>
            <span data-testid="text-super-fast">Super Fast</span>
            <span className="hidden md:inline text-zinc-400">·</span>
            <span data-testid="text-super-responsive">Super Responsive</span>
          </div>
        </div>
      </div>
    </section>
  );
}
