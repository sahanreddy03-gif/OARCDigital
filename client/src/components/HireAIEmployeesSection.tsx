import { useRef, useEffect, useState } from 'react';

// Import new AI employee images
import salesDevRep from '@assets/1_1763228440276.avif';
import customerSupport from '@assets/2_1763228440277.jpg';
import adminAssistant from '@assets/3_1763228440278.jpg';
import marketingCoord from '@assets/4_1763228440279.avif';
import hrRecruiter from '@assets/5_1763228440279.avif';
import socialMedia from '@assets/6_1763228440279.avif';
import contentWriter from '@assets/7_1763228440280.avif';
import dataAnalyst from '@assets/8_1763228440280.avif';
import leadQualifier from '@assets/9_1763228440281.jpg';
import emailManager from '@assets/10_1763228440281.avif';
import meetingCoord from '@assets/11_1763228440281.jpg';
import financialAnalyst from '@assets/12_1763228440282.jpg';

const employees = [
  {
    title: "Sales Development Rep",
    subtitle: "Cold outreach & lead qualification",
    image: salesDevRep,
    category: "Sales & Revenue"
  },
  {
    title: "Customer Support Agent",
    subtitle: "24/7 customer inquiry handling",
    image: customerSupport,
    category: "Customer Success"
  },
  {
    title: "Administrative Assistant",
    subtitle: "Calendar & email management",
    image: adminAssistant,
    category: "Operations"
  },
  {
    title: "Marketing Coordinator",
    subtitle: "Campaign management & analytics",
    image: marketingCoord,
    category: "Marketing"
  },
  {
    title: "HR Recruiter",
    subtitle: "Candidate sourcing & screening",
    image: hrRecruiter,
    category: "Human Resources"
  },
  {
    title: "Social Media Manager",
    subtitle: "Content scheduling & engagement",
    image: socialMedia,
    category: "Marketing"
  },
  {
    title: "Content Writer",
    subtitle: "Blog posts & marketing copy",
    image: contentWriter,
    category: "Content"
  },
  {
    title: "Data Analyst",
    subtitle: "Reports & insights generation",
    image: dataAnalyst,
    category: "Analytics"
  },
  {
    title: "Lead Qualifier",
    subtitle: "Prospect scoring & routing",
    image: leadQualifier,
    category: "Sales & Revenue"
  },
  {
    title: "Email Manager",
    subtitle: "Newsletter & campaign automation",
    image: emailManager,
    category: "Marketing"
  },
  {
    title: "Meeting Coordinator",
    subtitle: "Scheduling & agenda preparation",
    image: meetingCoord,
    category: "Operations"
  },
  {
    title: "Financial Analyst",
    subtitle: "Budget tracking & forecasting",
    image: financialAnalyst,
    category: "Finance"
  },
];

export default function HireAIEmployeesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  
  // Performance optimization: Use ref to avoid rebinding listeners on every scroll update
  const scrollOffsetRef = useRef(0);
  const dragStartRef = useRef({ x: 0, scrollOffset: 0 });
  const autoScrollRef = useRef<number | null>(null);

  // Keep ref in sync with state
  useEffect(() => {
    scrollOffsetRef.current = scrollOffset;
  }, [scrollOffset]);

  // Duplicate employees for seamless infinite loop
  const duplicatedEmployees = [...employees, ...employees, ...employees];

  // Auto-scroll logic
  useEffect(() => {
    if (!isAutoScrolling) return;

    const animate = () => {
      setScrollOffset(prev => prev - 1); // Scroll left
      autoScrollRef.current = requestAnimationFrame(animate);
    };

    autoScrollRef.current = requestAnimationFrame(animate);

    return () => {
      if (autoScrollRef.current) {
        cancelAnimationFrame(autoScrollRef.current);
      }
    };
  }, [isAutoScrolling]);

  // Manual drag controls
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handlePointerDown = (e: PointerEvent) => {
      setIsDragging(true);
      setIsAutoScrolling(false);
      // Read from ref to get current scroll offset value
      dragStartRef.current = { x: e.clientX, scrollOffset: scrollOffsetRef.current };
      container.setPointerCapture(e.pointerId);
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const delta = e.clientX - dragStartRef.current.x;
      setScrollOffset(dragStartRef.current.scrollOffset + delta);
    };

    const handlePointerUp = (e: PointerEvent) => {
      if (isDragging) {
        setIsDragging(false);
        container.releasePointerCapture(e.pointerId);
        setTimeout(() => setIsAutoScrolling(true), 2000);
      }
    };

    container.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerup', handlePointerUp);
    container.addEventListener('pointercancel', handlePointerUp);

    return () => {
      container.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerup', handlePointerUp);
      container.removeEventListener('pointercancel', handlePointerUp);
    };
  }, [isDragging]);

  return (
    <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden" data-testid="section-hire-ai-employees">
      {/* Blue/Purple/Magenta gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-950 via-purple-900 to-fuchsia-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(168,85,247,0.4),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_30%,rgba(217,70,239,0.3),transparent_55%)]"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/40 to-transparent"></div>

      <div className="relative container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl mb-12 md:mb-16">
        <div className="text-center">
          <h2 className="font-heading font-bold text-white mb-4" data-testid="text-hire-ai-employees-heading" style={{ fontSize: 'clamp(1.75rem, 5vw, 3.25rem)', letterSpacing: '-0.04em', lineHeight: '1.2' }}>
            Hire AI Employees
          </h2>
          <p className="text-base md:text-lg lg:text-xl font-medium text-white/90 tracking-tight max-w-4xl mx-auto leading-relaxed">
            Scale your team with AI-powered specialists who work 24/7
          </p>
        </div>
      </div>

      {/* HORIZONTAL WAVE SCROLL - ALL DEVICES */}
      <div 
        ref={containerRef}
        className="relative h-[400px] md:h-[480px] lg:h-[550px] overflow-hidden"
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        <div 
          className="absolute top-0 left-0 flex gap-6 items-center py-8"
          style={{
            transform: `translateX(${scrollOffset % (duplicatedEmployees.length / 3 * 340)}px)`,
            willChange: 'transform',
            transition: isDragging ? 'none' : 'transform 0.1s linear'
          }}
        >
          {duplicatedEmployees.map((employee, index) => {
            // Calculate sine wave offset for vertical position
            const waveOffset = Math.sin((scrollOffset / 100) + (index * 0.5)) * 60;
            
            return (
              <div
                key={`${employee.title}-${index}`}
                className="flex-shrink-0 group"
                style={{
                  width: '280px',
                  transform: `translateY(${waveOffset}px)`,
                  willChange: 'transform',
                  transition: 'transform 0.3s ease-out'
                }}
              >
                <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl bg-zinc-100 shadow-2xl ring-1 ring-white/10">
                  <img
                    src={employee.image}
                    alt={employee.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  
                  <div className="absolute top-4 left-4">
                    <span className="inline-block text-xs font-bold text-purple-300 bg-purple-900/60 backdrop-blur-sm px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {employee.category}
                    </span>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-sm font-medium text-purple-200 mb-2">
                      {employee.subtitle}
                    </p>
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-white leading-tight" style={{ letterSpacing: '-0.02em' }}>
                      {employee.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interaction hint */}
      <div className="text-center mt-8">
        <p className="text-sm text-white/70 font-medium">
          Drag to explore • Wave scrolls automatically
        </p>
      </div>
    </section>
  );
}
