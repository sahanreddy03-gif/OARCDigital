import { useEffect, useRef, useState } from 'react';

interface LayeredSectionsProps {
  children: React.ReactNode[];
}

export default function LayeredSections({ children }: LayeredSectionsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const sections = containerRef.current.querySelectorAll('.layered-section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = window.scrollY + rect.top;
        
        if (scrollPosition >= sectionTop) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {children.map((child, index) => (
        <div
          key={index}
          className="layered-section relative"
          style={{
            position: index > 0 ? 'sticky' : 'relative',
            top: index > 0 ? '0' : 'auto',
            zIndex: children.length - index,
            marginTop: index > 0 ? '-2px' : '0',
          }}
          data-testid={`layered-section-${index}`}
        >
          <div
            className="transition-transform duration-700 ease-out"
            style={{
              transform: activeIndex >= index ? 'scale(1)' : 'scale(0.95)',
              transformOrigin: 'top center',
            }}
          >
            {child}
          </div>
        </div>
      ))}
    </div>
  );
}
