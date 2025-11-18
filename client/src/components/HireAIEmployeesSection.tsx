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
  const trackRef = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  
  // Duplicate employees only when needed (desktop only)
  const duplicatedEmployees = isDesktop ? [...employees, ...employees, ...employees] : [];
  
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    
    // Early return if mobile, but ensure cleanup runs first for any existing listeners
    if (!isDesktop) {
      // Clean up any lingering classes/transforms from previous desktop state
      track.classList.remove('dragging');
      track.style.transform = '';
      return;
    }

    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID = 0;

    const handlePointerDown = (e: PointerEvent) => {
      isDragging = true;
      startPos = e.pageX;
      animationID = requestAnimationFrame(animation);
      track.classList.add('dragging');
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (isDragging) {
        const currentPosition = e.pageX;
        currentTranslate = prevTranslate + currentPosition - startPos;
      }
    };

    const handlePointerUp = () => {
      isDragging = false;
      cancelAnimationFrame(animationID);
      prevTranslate = currentTranslate;
      track.classList.remove('dragging');
      track.style.transform = '';
    };

    const handleTouchStart = (e: TouchEvent) => {
      isDragging = true;
      startPos = e.touches[0].clientX;
      animationID = requestAnimationFrame(animation);
      track.classList.add('dragging');
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging) {
        const currentPosition = e.touches[0].clientX;
        currentTranslate = prevTranslate + currentPosition - startPos;
      }
    };

    const handleTouchEnd = () => {
      isDragging = false;
      cancelAnimationFrame(animationID);
      prevTranslate = currentTranslate;
      track.classList.remove('dragging');
      track.style.transform = '';
    };

    function animation() {
      if (isDragging) {
        setSliderPosition();
        requestAnimationFrame(animation);
      }
    }

    function setSliderPosition() {
      if (track) track.style.transform = `translateX(${currentTranslate}px)`;
    }

    track.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerup', handlePointerUp);
    document.addEventListener('pointercancel', handlePointerUp);
    track.addEventListener('touchstart', handleTouchStart);
    track.addEventListener('touchmove', handleTouchMove);
    track.addEventListener('touchend', handleTouchEnd);

    return () => {
      track.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerup', handlePointerUp);
      document.removeEventListener('pointercancel', handlePointerUp);
      track.removeEventListener('touchstart', handleTouchStart);
      track.removeEventListener('touchmove', handleTouchMove);
      track.removeEventListener('touchend', handleTouchEnd);
      cancelAnimationFrame(animationID);
      // Reset drag state on cleanup
      prevTranslate = 0;
      currentTranslate = 0;
      track.style.transform = '';
      track.classList.remove('dragging');
    };
  }, [isDesktop]);

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

      {/* MOBILE: Static Grid (< 1024px) */}
      {!isDesktop && (
      <div className="relative container mx-auto px-6">
        <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
          {employees.slice(0, 8).map((employee, index) => (
            <div
              key={index}
              className="group"
              data-testid={`mobile-employee-card-${index}`}
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl bg-zinc-100 ring-1 ring-zinc-200/50 shadow-sm">
                <img
                  src={employee.image}
                  alt={employee.title}
                  className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105"
                  data-testid={`carousel-image-admin-ai-employees`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-heading text-base font-bold text-white leading-tight" style={{ letterSpacing: '-0.02em' }}>
                    {employee.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      )}

      {/* DESKTOP: Animated Carousel (≥ 1024px) */}
      {isDesktop && (
      <div className="relative w-full">
        <div className="carousel-track" data-testid="ai-employees-carousel-track" ref={trackRef}>
          {duplicatedEmployees.map((employee, index) => (
            <div
              key={index}
              className="carousel-card group"
              data-testid={`employee-card-${index}`}
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl bg-zinc-100 ring-1 ring-zinc-200/50 shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:ring-zinc-300/70">
                <img
                  src={employee.image}
                  alt={employee.title}
                  className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105"
                  data-testid={`carousel-image-admin-ai-employees`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight transition-all duration-300" style={{ letterSpacing: '-0.02em' }}>
                    {employee.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      )}
    </section>
  );
}
