import { useRef, useEffect } from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';

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
import qualityAssurance from '@assets/13_1763228440282.avif';
import projectManager from '@assets/14_1763228440283.avif';
import researchAnalyst from '@assets/15_1763085718435.avif';
import travelCoordinator from '@assets/16_1763228440283.jpg';
import accountManager from '@assets/17_1763228440284.avif';
import technicalSupport from '@assets/18_1763228440284.jpg';

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
  {
    title: "Quality Assurance",
    subtitle: "Testing & bug documentation",
    image: qualityAssurance,
    category: "Operations"
  },
  {
    title: "Project Manager",
    subtitle: "Task tracking & team coordination",
    image: projectManager,
    category: "Strategy"
  },
  {
    title: "Research Analyst",
    subtitle: "Market research & competitive intelligence",
    image: researchAnalyst,
    category: "Strategy"
  },
  {
    title: "Travel Coordinator",
    subtitle: "Flight, hotel & itinerary planning",
    image: travelCoordinator,
    category: "Operations"
  },
  {
    title: "Account Manager",
    subtitle: "Client relationship & renewal management",
    image: accountManager,
    category: "Customer Success"
  },
  {
    title: "Technical Support",
    subtitle: "Issue resolution & troubleshooting",
    image: technicalSupport,
    category: "Customer Success"
  },
];

export default function HireAIEmployeesSection() {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  
  // Dual column refs for infinite scroll animation
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const isDraggingLeftRef = useRef(false);
  const isDraggingRightRef = useRef(false);
  const startYLeftRef = useRef(0);
  const startYRightRef = useRef(0);
  const scrollTopLeftRef = useRef(0);
  const scrollTopRightRef = useRef(0);
  const animationIdRef = useRef<number>();
  const cleanupHandlersRef = useRef<(() => void) | null>(null);
  
  // Split employees into two columns for dual-column layout
  const leftColumnEmployees = [...employees, ...employees]; // Duplicate for seamless loop
  const rightColumnEmployees = [...employees, ...employees]; // Duplicate for seamless loop

  // Dual-column infinite scroll animation
  useEffect(() => {
    const leftColumn = leftColumnRef.current;
    const rightColumn = rightColumnRef.current;
    if (!leftColumn || !rightColumn) return;

    // Use ResizeObserver to detect when layout is ready (images loaded)
    let animationStarted = false;
    
    const tryStartAnimation = () => {
      if (animationStarted) return;
      
      const leftHeight = leftColumn.scrollHeight / 2;
      const rightHeight = rightColumn.scrollHeight / 2;
      
      // Only start animation if heights are valid (images loaded)
      if (leftHeight > 0 && rightHeight > 0) {
        animationStarted = true;
        startAnimation(leftHeight, rightHeight);
      }
    };

    // Try immediately in case images are cached
    requestAnimationFrame(tryStartAnimation);
    
    // Also watch for resize events as images load
    const observer = new ResizeObserver(() => {
      tryStartAnimation();
    });
    
    observer.observe(leftColumn);
    observer.observe(rightColumn);

    const startAnimation = (leftHeight: number, rightHeight: number) => {
    
    let leftScrollPosition = 0;  // Start at 0 for downward scroll  
    let rightScrollPosition = 0;
    const scrollSpeed = 1.2; // pixels per frame

    const animate = () => {
      // Left column: downward scroll
      if (!isDraggingLeftRef.current) {
        leftScrollPosition += scrollSpeed;
        const normalizedLeft = ((leftScrollPosition % leftHeight) + leftHeight) % leftHeight;
        const translateValue = normalizedLeft - leftHeight;
        leftColumn.style.transform = `translateY(${translateValue}px)`;
      }

      // Right column: upward scroll
      if (!isDraggingRightRef.current) {
        rightScrollPosition += scrollSpeed;
        const normalizedRight = ((rightScrollPosition % rightHeight) + rightHeight) % rightHeight;
        rightColumn.style.transform = `translateY(-${normalizedRight}px)`;
      }

      animationIdRef.current = requestAnimationFrame(animate);
    };

    // Drag handlers for left column
    const handleLeftPointerDown = (e: PointerEvent) => {
      isDraggingLeftRef.current = true;
      startYLeftRef.current = e.clientY;
      scrollTopLeftRef.current = leftScrollPosition;
      leftColumn.style.cursor = 'grabbing';
    };

    const handleLeftPointerMove = (e: PointerEvent) => {
      if (!isDraggingLeftRef.current) return;
      e.preventDefault();
      const deltaY = e.clientY - startYLeftRef.current;
      const currentPosition = scrollTopLeftRef.current + deltaY;
      const normalizedPosition = ((currentPosition % leftHeight) + leftHeight) % leftHeight;
      leftColumn.style.transform = `translateY(${normalizedPosition - leftHeight}px)`;
    };

    const handleLeftPointerUp = (e: PointerEvent) => {
      if (isDraggingLeftRef.current) {
        const deltaY = e.clientY - startYLeftRef.current;
        const rawPosition = scrollTopLeftRef.current + deltaY;
        leftScrollPosition = ((rawPosition % leftHeight) + leftHeight) % leftHeight;
      }
      isDraggingLeftRef.current = false;
      leftColumn.style.cursor = 'grab';
    };

    // Drag handlers for right column
    const handleRightPointerDown = (e: PointerEvent) => {
      isDraggingRightRef.current = true;
      startYRightRef.current = e.clientY;
      scrollTopRightRef.current = rightScrollPosition;
      rightColumn.style.cursor = 'grabbing';
    };

    const handleRightPointerMove = (e: PointerEvent) => {
      if (!isDraggingRightRef.current) return;
      e.preventDefault();
      const deltaY = e.clientY - startYRightRef.current;
      const currentPosition = scrollTopRightRef.current - deltaY;
      const normalizedPosition = ((currentPosition % rightHeight) + rightHeight) % rightHeight;
      rightColumn.style.transform = `translateY(-${normalizedPosition}px)`;
    };

    const handleRightPointerUp = (e: PointerEvent) => {
      if (isDraggingRightRef.current) {
        const deltaY = e.clientY - startYRightRef.current;
        const rawPosition = scrollTopRightRef.current - deltaY;
        rightScrollPosition = ((rawPosition % rightHeight) + rightHeight) % rightHeight;
      }
      isDraggingRightRef.current = false;
      rightColumn.style.cursor = 'grab';
    };

      // Add event listeners
      leftColumn.addEventListener('pointerdown', handleLeftPointerDown);
      document.addEventListener('pointermove', handleLeftPointerMove);
      document.addEventListener('pointerup', handleLeftPointerUp);
      document.addEventListener('pointercancel', handleLeftPointerUp);

      rightColumn.addEventListener('pointerdown', handleRightPointerDown);
      document.addEventListener('pointermove', handleRightPointerMove);
      document.addEventListener('pointerup', handleRightPointerUp);
      document.addEventListener('pointercancel', handleRightPointerUp);
      
      // Store cleanup function in ref
      cleanupHandlersRef.current = () => {
        leftColumn.removeEventListener('pointerdown', handleLeftPointerDown);
        document.removeEventListener('pointermove', handleLeftPointerMove);
        document.removeEventListener('pointerup', handleLeftPointerUp);
        document.removeEventListener('pointercancel', handleLeftPointerUp);

        rightColumn.removeEventListener('pointerdown', handleRightPointerDown);
        document.removeEventListener('pointermove', handleRightPointerMove);
        document.removeEventListener('pointerup', handleRightPointerUp);
        document.removeEventListener('pointercancel', handleRightPointerUp);
      };
      
      // START THE ANIMATION LOOP
      animate();
    };

    return () => {
      // Clean up observer
      observer.disconnect();
      
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      
      // Call the cleanup function if it exists
      if (cleanupHandlersRef.current) {
        cleanupHandlersRef.current();
        cleanupHandlersRef.current = null;
      }
      
      // Reset state
      isDraggingLeftRef.current = false;
      isDraggingRightRef.current = false;
      if (leftColumn && rightColumn) {
        leftColumn.style.transform = '';
        leftColumn.style.cursor = '';
        rightColumn.style.transform = '';
        rightColumn.style.cursor = '';
      }
    };
  }, []);

  return (
    <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden" data-testid="section-hire-ai-employees">
      {/* Sophisticated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 via-white to-zinc-100"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(168,85,247,0.08),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(59,130,246,0.06),transparent_50%)]"></div>
      
      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
        backgroundRepeat: 'repeat'
      }}></div>

      <div className="relative container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl mb-12 md:mb-16">
        {/* Section Header - Elite Typography */}
        <div className="text-center">
          <h2 className="font-heading font-bold text-zinc-900 mb-4" data-testid="text-ai-employees-heading" style={{ fontSize: 'clamp(1.75rem, 5vw, 3.25rem)', letterSpacing: '-0.04em', lineHeight: '1.2' }}>
            Hire AI Employees
          </h2>
          <p className="text-base md:text-lg lg:text-xl font-medium text-zinc-600 tracking-tight max-w-4xl mx-auto leading-relaxed">
            Scale your team instantly with AI-powered employees for every role
          </p>
        </div>
      </div>

      {/* Dual-Column Opposite Direction Infinite Scroll (All Screen Sizes) */}
      <div className="mx-auto" style={{ maxWidth: isDesktop ? '900px' : '100%' }}>
        <div className={`relative flex ${isDesktop ? 'gap-6' : 'gap-3 px-4'} h-[520px] ${isDesktop ? 'md:h-[720px]' : ''} overflow-hidden`} data-testid="ai-employees-dual-carousel">
          {/* Left Column - Top to Bottom */}
          <div className="flex-1 relative h-full overflow-hidden">
            <div 
              ref={leftColumnRef} 
              className="absolute top-0 left-0 right-0 flex flex-col gap-3 cursor-grab active:cursor-grabbing" 
              style={{ willChange: 'transform' }}
              data-testid="employees-left-column"
            >
              {leftColumnEmployees.map((employee, index) => (
                <div
                  key={`left-${index}`}
                  className="flex-shrink-0 group"
                  data-testid={`employee-card-left-${index}`}
                >
                  <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl bg-zinc-100 ring-1 ring-zinc-200/50 shadow-lg">
                    <img
                      src={employee.image}
                      alt={`${employee.title} - AI employee for hire`}
                      className="w-full h-full object-cover scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="font-heading text-lg font-bold text-white leading-tight" style={{ letterSpacing: '-0.02em' }}>
                        {employee.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Bottom to Top */}
          <div className="flex-1 relative h-full overflow-hidden">
            <div 
              ref={rightColumnRef} 
              className="absolute top-0 left-0 right-0 flex flex-col gap-3 cursor-grab active:cursor-grabbing" 
              style={{ willChange: 'transform' }}
              data-testid="employees-right-column"
            >
              {rightColumnEmployees.map((employee, index) => (
                <div
                  key={`right-${index}`}
                  className="flex-shrink-0 group"
                  data-testid={`employee-card-right-${index}`}
                >
                  <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl bg-zinc-100 ring-1 ring-zinc-200/50 shadow-lg">
                    <img
                      src={employee.image}
                      alt={`${employee.title} - AI employee for hire`}
                      className="w-full h-full object-cover scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="font-heading text-lg font-bold text-white leading-tight" style={{ letterSpacing: '-0.02em' }}>
                        {employee.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
