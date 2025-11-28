import { useEffect, useRef, useState, useCallback } from "react";

const oarcItems = [
  { letter: "O", word: "Optimised", description: "Data-driven efficiency" },
  { letter: "A", word: "AI-powered", description: "Intelligent automation" },
  { letter: "R", word: "Revenue-focused", description: "Results that matter" },
  { letter: "C", word: "Creative-led", description: "Bold ideas that convert" },
];

interface MagneticPillProps {
  item: typeof oarcItems[0];
  index: number;
  isVisible: boolean;
}

function MagneticPill({ item, index, isVisible }: MagneticPillProps) {
  const pillRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ x: 0, y: 0, rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!pillRef.current) return;
    
    const rect = pillRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) / 8;
    const deltaY = (e.clientY - centerY) / 8;
    const rotateX = -(e.clientY - centerY) / 12;
    const rotateY = (e.clientX - centerX) / 12;
    
    setTransform({ x: deltaX, y: deltaY, rotateX, rotateY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTransform({ x: 0, y: 0, rotateX: 0, rotateY: 0 });
    setIsHovered(false);
  }, []);

  return (
    <div
      ref={pillRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`group relative cursor-pointer transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ 
        transitionDelay: `${200 + index * 150}ms`,
        transform: `translate(${transform.x}px, ${transform.y}px) perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
        transition: isHovered ? 'none' : 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
      }}
      data-testid={`oarc-pill-${item.letter}`}
    >
      <div 
        className={`relative flex flex-col items-center px-6 md:px-10 lg:px-14 py-5 md:py-7 rounded-2xl border transition-all duration-500 ${
          isHovered ? 'shadow-2xl' : 'shadow-lg'
        }`}
        style={{ 
          backgroundColor: isHovered ? "#0a0a0a" : "#fafafa",
          borderColor: isHovered ? "#c4ff4d" : "rgba(0, 0, 0, 0.06)",
          boxShadow: isHovered 
            ? "0 25px 60px -15px rgba(196, 255, 77, 0.25), 0 0 40px rgba(196, 255, 77, 0.1)" 
            : "0 4px 20px -5px rgba(0, 0, 0, 0.08)"
        }}
      >
        <span 
          className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight transition-all duration-500"
          style={{ 
            color: isHovered ? "#c4ff4d" : "#0a0a0a",
            textShadow: isHovered ? "0 0 30px rgba(196, 255, 77, 0.5)" : "none",
            transform: isHovered ? "scale(1.1)" : "scale(1)"
          }}
        >
          {item.letter}
        </span>
        
        <span 
          className="text-xs md:text-sm font-semibold uppercase tracking-[0.15em] mt-2 transition-all duration-500"
          style={{ color: isHovered ? "rgba(255, 255, 255, 0.9)" : "rgba(0, 0, 0, 0.6)" }}
        >
          {item.word}
        </span>

        <div 
          className="absolute -bottom-1 left-1/2 h-1 rounded-full transition-all duration-500"
          style={{
            width: isHovered ? "60%" : "0%",
            transform: "translateX(-50%)",
            backgroundColor: "#c4ff4d"
          }}
        />
      </div>

      <p 
        className="text-center text-[10px] md:text-xs mt-3 font-medium transition-all duration-500"
        style={{ 
          color: isHovered ? "#0a0a0a" : "rgba(0, 0, 0, 0.4)",
          opacity: isHovered ? 1 : 0.7,
          transform: isHovered ? "translateY(0)" : "translateY(-4px)"
        }}
      >
        {item.description}
      </p>
    </div>
  );
}

export default function OARCStripSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 lg:py-28 overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
      data-testid="oarc-strip-section"
    >
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(196, 255, 77, 0.15) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(249, 115, 22, 0.08) 0%, transparent 50%)`
        }}
      />

      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        <div
          className={`text-center mb-10 md:mb-14 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p
            className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-4"
            style={{ color: "rgba(0, 0, 0, 0.35)" }}
          >
            The OARC way
          </p>
          <h2 
            className="text-2xl md:text-3xl lg:text-4xl font-bold"
            style={{ 
              color: "#0a0a0a",
              letterSpacing: "-0.02em",
              lineHeight: 1.2
            }}
          >
            Four pillars of{" "}
            <span 
              className="relative inline-block"
              style={{ color: "#0a0a0a" }}
            >
              excellence
              <svg 
                className="absolute -bottom-1 left-0 w-full" 
                height="8" 
                viewBox="0 0 200 8" 
                preserveAspectRatio="none"
              >
                <path 
                  d="M0 7 Q50 0, 100 5 T200 3" 
                  fill="none" 
                  stroke="#c4ff4d" 
                  strokeWidth="3"
                  strokeLinecap="round"
                  className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                  style={{ 
                    strokeDasharray: 250,
                    strokeDashoffset: isVisible ? 0 : 250,
                    transition: 'stroke-dashoffset 1.2s ease-out 0.6s, opacity 0.5s ease-out 0.6s'
                  }}
                />
              </svg>
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {oarcItems.map((item, index) => (
            <MagneticPill 
              key={item.letter} 
              item={item} 
              index={index} 
              isVisible={isVisible} 
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          [data-testid="oarc-strip-section"] * {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}
