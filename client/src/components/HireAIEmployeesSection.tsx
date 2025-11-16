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
    subtitle: "IT helpdesk & troubleshooting",
    image: technicalSupport,
    category: "Support"
  },
];

import { useRef, useEffect, useState } from 'react';

export default function HireAIEmployeesSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const duplicatedEmployees = [...employees, ...employees, ...employees];
  
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let isDown = false;
    let startX: number;
    let scrollLeft: number;
    let velocity = 0;
    let lastX: number;
    let dragStartTime: number;
    let animationTimeout: NodeJS.Timeout;
    
    const handleMouseDown = (e: MouseEvent) => {
      isDown = true;
      dragStartTime = Date.now();
      lastX = e.pageX;
      track.classList.add('dragging');
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
      track.style.animationPlayState = 'paused';
      velocity = 0;
      clearTimeout(animationTimeout);
    };
    
    const handleTouchStart = (e: TouchEvent) => {
      isDown = true;
      dragStartTime = Date.now();
      lastX = e.touches[0].pageX;
      track.classList.add('dragging');
      startX = e.touches[0].pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
      track.style.animationPlayState = 'paused';
      velocity = 0;
      clearTimeout(animationTimeout);
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX) * 2;
      track.scrollLeft = scrollLeft - walk;
      
      // Track velocity for momentum
      velocity = e.pageX - lastX;
      lastX = e.pageX;
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      if (!isDown) return;
      const x = e.touches[0].pageX - track.offsetLeft;
      const walk = (x - startX) * 2;
      track.scrollLeft = scrollLeft - walk;
      
      // Track velocity for momentum
      velocity = e.touches[0].pageX - lastX;
      lastX = e.touches[0].pageX;
    };
    
    const handleEnd = () => {
      if (!isDown) return;
      isDown = false;
      track.classList.remove('dragging');
      
      const dragDuration = Date.now() - dragStartTime;
      
      // Apply momentum for quick flicks
      if (Math.abs(velocity) > 5 && dragDuration < 200) {
        const momentum = velocity * 3;
        track.scrollLeft = track.scrollLeft - momentum;
      }
      
      // Snap to nearest card
      const cards = track.querySelectorAll('.carousel-card');
      if (cards.length > 0) {
        const cardWidth = (cards[0] as HTMLElement).offsetWidth;
        const gap = 24; // gap-6 = 24px
        const cardWithGap = cardWidth + gap;
        
        const currentScroll = track.scrollLeft;
        const nearestIndex = Math.round(currentScroll / cardWithGap);
        const targetScroll = nearestIndex * cardWithGap;
        
        // Update selected index
        setSelectedIndex(nearestIndex % 18);
        
        // Smooth snap animation
        const startScroll = currentScroll;
        const distance = targetScroll - startScroll;
        const duration = 300;
        const startTime = performance.now();
        
        const animateSnap = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          
          track.scrollLeft = startScroll + distance * easeProgress;
          
          if (progress < 1) {
            requestAnimationFrame(animateSnap);
          } else {
            // Resume auto-scroll after user interaction
            animationTimeout = setTimeout(() => {
              track.style.animationPlayState = 'running';
            }, 2000);
          }
        };
        
        requestAnimationFrame(animateSnap);
      }
    };
    
    track.addEventListener('mousedown', handleMouseDown);
    track.addEventListener('touchstart', handleTouchStart);
    track.addEventListener('mousemove', handleMouseMove);
    track.addEventListener('touchmove', handleTouchMove);
    track.addEventListener('mouseup', handleEnd);
    track.addEventListener('touchend', handleEnd);
    track.addEventListener('mouseleave', handleEnd);
    
    return () => {
      track.removeEventListener('mousedown', handleMouseDown);
      track.removeEventListener('touchstart', handleTouchStart);
      track.removeEventListener('mousemove', handleMouseMove);
      track.removeEventListener('touchmove', handleTouchMove);
      track.removeEventListener('mouseup', handleEnd);
      track.removeEventListener('touchend', handleEnd);
      track.removeEventListener('mouseleave', handleEnd);
      clearTimeout(animationTimeout);
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

      <div className="relative container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl mb-14 md:mb-20">
        {/* Section Header - Elite Typography */}
        <div className="text-center">
          <h2 className="font-bold text-zinc-900 mb-5" data-testid="text-ai-employees-heading" style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', letterSpacing: '-0.04em', lineHeight: '1.1' }}>
            Hire AI Employees
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl font-medium text-zinc-600 tracking-tight max-w-4xl mx-auto leading-relaxed">
            Scale your team instantly with AI-powered employees for every role
          </p>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full">
        {/* Enhanced Gradient Overlays with smoother fade */}
        <div className="absolute left-0 top-0 bottom-0 w-40 md:w-56 lg:w-72 bg-gradient-to-r from-zinc-50 via-zinc-50/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-40 md:w-56 lg:w-72 bg-gradient-to-l from-zinc-50 via-zinc-50/80 to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling Carousel */}
        <div className="carousel-track" data-testid="ai-employees-carousel-track" ref={trackRef}>
          {duplicatedEmployees.map((employee, index) => (
            <div
              key={index}
              className="carousel-card group"
              data-testid={`employee-card-${index}`}
            >
              {/* Image Container - Enhanced with subtle border */}
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-100 mb-6 ring-1 ring-zinc-200/50 shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:ring-zinc-300/70">
                <img
                  src={employee.image}
                  alt={employee.title}
                  className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105"
                  data-testid={`carousel-image-admin-ai-employees`}
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Employee Info - Premium Typography */}
              <div className="px-2">
                <h3 className="text-2xl lg:text-3xl font-bold text-zinc-900 mb-2.5 tracking-tight leading-tight transition-colors duration-300 group-hover:text-primary" style={{ letterSpacing: '-0.02em' }}>
                  {employee.title}
                </h3>
                <p className="text-base lg:text-lg text-zinc-600 leading-relaxed font-normal tracking-wide">
                  {employee.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}