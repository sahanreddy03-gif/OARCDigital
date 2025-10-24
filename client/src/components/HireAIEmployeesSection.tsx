// Import stock images - matching the images from AICreativeSection
import salesDevRep from '@assets/stock_images/sales-dev-rep-9uyqe4bvd-1734644643913.jpeg';
import customerSupport from '@assets/stock_images/customer-support-i57yqvzgg-1734644643974.jpeg';
import adminAssistant from '@assets/stock_images/admin-assistant-5ruhd41wr-1734644644014.jpeg';
import marketingCoord from '@assets/stock_images/marketing-coordinator-rzkc60vr9-1734644644048.jpeg';
import hrRecruiter from '@assets/stock_images/hr-recruiter-mvmr6s2z9-1734644644089.jpeg';
import socialMedia from '@assets/stock_images/social-media-manager-jqnkwpjg7-1734644644127.jpeg';
import contentWriter from '@assets/stock_images/content-writer-1wmu7tg35-1734644644160.jpeg';
import dataAnalyst from '@assets/stock_images/data-analyst-gznqp43vq-1734644644204.jpeg';
import leadQualifier from '@assets/stock_images/lead-qualifier-7gwdehfqm-1734644644249.jpeg';
import emailManager from '@assets/stock_images/email-manager-tgzvs6ot6-1734644644289.jpeg';
import meetingCoord from '@assets/stock_images/meeting-coordinator-9rk5k9zg4-1734644644318.jpeg';
import financialAnalyst from '@assets/stock_images/financial-analyst-ffux0r8r-1734644644360.jpeg';
import qualityAssurance from '@assets/stock_images/quality-assurance-w9r5ubmzd-1734644644399.jpeg';
import projectManager from '@assets/stock_images/project-manager-xb0z52f9s-1734644644440.jpeg';
import researchAnalyst from '@assets/stock_images/research-analyst-h4c7x19k1-1734644644481.jpeg';
import travelCoordinator from '@assets/stock_images/travel-coordinator-45pxk18vl-1734644644523.jpeg';
import accountManager from '@assets/stock_images/account-manager-w1zdjbw5n-1734644644550.jpeg';
import technicalSupport from '@assets/stock_images/technical-support-gvh5yqoh8-1734644644590.jpeg';

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
    <section className="relative bg-white py-16 md:py-20 lg:py-24 overflow-hidden" data-testid="section-hire-ai-employees">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl mb-12 md:mb-16">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-zinc-900 tracking-tight mb-4" data-testid="text-ai-employees-heading">
            Hire AI Employees
          </h2>
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-zinc-600">
            Scale your team instantly with AI-powered employees for every role
          </p>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full">
        {/* Gradient Overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 lg:w-64 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 lg:w-64 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling Carousel */}
        <div className="carousel-track" data-testid="ai-employees-carousel-track" ref={trackRef}>
          {duplicatedEmployees.map((employee, index) => (
            <div
              key={index}
              className="carousel-card group"
              data-testid={`employee-card-${index}`}
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-100 mb-6">
                <img
                  src={employee.image}
                  alt={employee.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  data-testid={`carousel-image-admin-ai-employees`}
                />
                <div className="absolute top-4 right-4 bg-[#c4ff4d] text-zinc-900 text-xs font-bold px-3 py-1.5 rounded-full">
                  {employee.category}
                </div>
              </div>

              {/* Employee Info */}
              <div className="px-2">
                <h3 className="text-2xl lg:text-3xl font-bold text-zinc-900 mb-2">
                  {employee.title}
                </h3>
                <p className="text-base lg:text-lg text-zinc-600 leading-relaxed">
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