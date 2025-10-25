import { useEffect, useRef, useState } from 'react';

export default function LetsTalkSection() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = sectionRefs.current.indexOf(entry.target as HTMLDivElement);
          if (entry.isIntersecting && index !== -1) {
            setVisibleSections(prev => new Set(prev).add(index));
          }
        });
      },
      { 
        threshold: 0.6,
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const sections = [
    {
      title: "This is OARC.",
      subtitle: null,
      letter: null,
      accent: false
    },
    {
      title: "Optimised",
      subtitle: "Nothing wasted. Everything aligned.",
      letter: "O",
      accent: true
    },
    {
      title: "AI-Driven",
      subtitle: "Systems that learn and multiply your output.",
      letter: "A",
      accent: true
    },
    {
      title: "Revenue",
      subtitle: "We focus on what matters.",
      letter: "R",
      accent: true
    },
    {
      title: "Creative",
      subtitle: "We win attention that converts.",
      letter: "C",
      accent: true
    },
    {
      title: "Built for brands that demand exponential growth.",
      subtitle: null,
      letter: null,
      accent: false
    }
  ];

  return (
    <section className="relative bg-white" data-testid="section-lets-talk">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
        {sections.map((section, index) => {
          const isVisible = visibleSections.has(index);
          const isIntro = index === 0;
          const isOutro = index === sections.length - 1;
          
          return (
            <div
              key={index}
              ref={el => sectionRefs.current[index] = el}
              className="min-h-[60vh] md:min-h-[70vh] flex items-center justify-center py-12 md:py-16 lg:py-20"
              data-testid={`oarc-section-${index}`}
            >
              <div className="text-center max-w-5xl mx-auto w-full">
                {/* Letter Display - Large animated letter */}
                {section.letter && (
                  <div 
                    className="mb-8 md:mb-12 overflow-hidden"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.8)',
                      transition: 'all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }}
                  >
                    <div 
                      className="text-[12rem] md:text-[16rem] lg:text-[20rem] xl:text-[24rem] font-black leading-none text-orange-600/10 select-none"
                      aria-hidden="true"
                    >
                      {section.letter}
                    </div>
                  </div>
                )}
                
                {/* Title */}
                <div 
                  className="overflow-hidden mb-4 md:mb-6"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'all 0.8s ease-out',
                    transitionDelay: section.letter ? '0.3s' : '0s'
                  }}
                >
                  <h2 
                    className={`font-black tracking-tight ${
                      isIntro || isOutro 
                        ? 'text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-zinc-900' 
                        : 'text-5xl md:text-6xl lg:text-7xl xl:text-8xl'
                    } ${section.accent ? 'text-orange-600' : 'text-zinc-900'}`}
                    data-testid={`title-${section.title.toLowerCase().replace(/[^a-z]/g, '-')}`}
                  >
                    {section.title}
                  </h2>
                </div>
                
                {/* Subtitle */}
                {section.subtitle && (
                  <div 
                    className="overflow-hidden"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                      transition: 'all 0.8s ease-out',
                      transitionDelay: '0.5s'
                    }}
                  >
                    <p className="text-xl md:text-2xl lg:text-3xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
                      {section.subtitle}
                    </p>
                  </div>
                )}

                {/* Animated dot indicator for scrolling */}
                {index < sections.length - 1 && (
                  <div 
                    className="mt-12 md:mt-16"
                    style={{
                      opacity: isVisible ? 0.3 : 0,
                      transition: 'opacity 1s ease-out',
                      transitionDelay: '0.8s'
                    }}
                    aria-hidden="true"
                  >
                    <div className="w-2 h-2 bg-orange-600 rounded-full mx-auto animate-pulse" />
                  </div>
                )}
              </div>
            </div>
          );
        })}
        
        {/* Tagline - After all sections */}
        <div 
          ref={el => sectionRefs.current[sections.length] = el}
          className="py-16 md:py-20 text-center"
          style={{
            opacity: visibleSections.has(sections.length) ? 1 : 0,
            transform: visibleSections.has(sections.length) ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out'
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
