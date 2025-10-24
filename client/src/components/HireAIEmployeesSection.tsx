// AI Employee services carousel
import salesRep from '@assets/stock_images/professional_sales_r_664f92e1.jpg';
import customerSupport from '@assets/stock_images/customer_support_age_3dc30c2b.jpg';
import adminAssistant from '@assets/stock_images/administrative_assis_29a8cede.jpg';
import marketingCoordinator from '@assets/stock_images/marketing_coordinato_07711488.jpg';
import hrRecruiter from '@assets/stock_images/hr_recruiter_intervi_a2bb2926.jpg';
import socialMediaManager from '@assets/stock_images/social_media_manager_c1d1c7a1.jpg';
import contentWriter from '@assets/stock_images/content_writer_copyw_b2e16fb5.jpg';
import dataAnalyst from '@assets/stock_images/data_analyst_busines_2273e6c3.jpg';
import leadQualifier from '@assets/stock_images/lead_generation_qual_8e5b0d01.jpg';
import emailManager from '@assets/stock_images/email_management_inb_28a2e38a.jpg';
import meetingCoordinator from '@assets/stock_images/meeting_coordinator__9e9824c0.jpg';
import financialAnalyst from '@assets/stock_images/financial_analyst_ac_a7ca6914.jpg';
import qualityAssurance from '@assets/stock_images/quality_assurance_te_3da1a1e3.jpg';
import projectManager from '@assets/stock_images/project_manager_agil_eb024bff.jpg';
import researchAnalyst from '@assets/stock_images/research_analyst_mar_25bf90c5.jpg';
import travelCoordinator from '@assets/stock_images/travel_coordinator_b_ed44bec5.jpg';
import accountManager from '@assets/stock_images/account_manager_clie_a209606c.jpg';
import technicalSupport from '@assets/stock_images/technical_support_it_0a2f3fa2.jpg';

interface AIEmployee {
  title: string;
  subtitle: string;
  image: string;
  category: string;
}

const employees: AIEmployee[] = [
  {
    title: "Sales Development Rep",
    subtitle: "AI-powered prospecting & lead generation",
    image: salesRep,
    category: "Sales & Revenue"
  },
  {
    title: "Customer Support Agent",
    subtitle: "24/7 intelligent customer service",
    image: customerSupport,
    category: "Customer Success"
  },
  {
    title: "Administrative Assistant",
    subtitle: "Calendar, email & task management",
    image: adminAssistant,
    category: "Operations"
  },
  {
    title: "Marketing Coordinator",
    subtitle: "Campaign execution & content scheduling",
    image: marketingCoordinator,
    category: "Marketing"
  },
  {
    title: "HR Recruiter",
    subtitle: "Candidate screening & interview scheduling",
    image: hrRecruiter,
    category: "Human Resources"
  },
  {
    title: "Social Media Manager",
    subtitle: "Content creation & community engagement",
    image: socialMediaManager,
    category: "Marketing"
  },
  {
    title: "Content Writer",
    subtitle: "SEO-optimized blog posts & copy",
    image: contentWriter,
    category: "Content"
  },
  {
    title: "Data Analyst",
    subtitle: "Business intelligence & reporting",
    image: dataAnalyst,
    category: "Analytics"
  },
  {
    title: "Lead Qualifier",
    subtitle: "Intelligent lead scoring & routing",
    image: leadQualifier,
    category: "Sales & Revenue"
  },
  {
    title: "Email Manager",
    subtitle: "Inbox automation & smart responses",
    image: emailManager,
    category: "Operations"
  },
  {
    title: "Meeting Coordinator",
    subtitle: "Automated scheduling & coordination",
    image: meetingCoordinator,
    category: "Operations"
  },
  {
    title: "Financial Analyst",
    subtitle: "Financial modeling & forecasting",
    image: financialAnalyst,
    category: "Finance"
  },
  {
    title: "Quality Assurance",
    subtitle: "Automated testing & compliance checks",
    image: qualityAssurance,
    category: "Operations"
  },
  {
    title: "Project Manager",
    subtitle: "Task tracking & team coordination",
    image: projectManager,
    category: "Operations"
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

import { useRef, useEffect } from 'react';

export default function HireAIEmployeesSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const duplicatedEmployees = [...employees, ...employees, ...employees];
  
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let isDown = false;
    let startX: number;
    let scrollLeft: number;
    
    const handleMouseDown = (e: MouseEvent) => {
      isDown = true;
      track.classList.add('dragging');
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
      track.style.animationPlayState = 'paused';
    };
    
    const handleTouchStart = (e: TouchEvent) => {
      isDown = true;
      track.classList.add('dragging');
      startX = e.touches[0].pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
      track.style.animationPlayState = 'paused';
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX) * 2;
      track.scrollLeft = scrollLeft - walk;
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      if (!isDown) return;
      const x = e.touches[0].pageX - track.offsetLeft;
      const walk = (x - startX) * 2;
      track.scrollLeft = scrollLeft - walk;
    };
    
    const handleEnd = () => {
      isDown = false;
      track.classList.remove('dragging');
      // Resume animation after drag
      setTimeout(() => {
        track.style.animationPlayState = 'running';
      }, 500);
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
    };
  }, []);

  return (
    <section className="relative bg-white py-16 md:py-20 lg:py-24 overflow-hidden" data-testid="section-hire-ai-employees">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl mb-12 md:mb-16">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-zinc-900 tracking-tight mb-4" data-testid="text-hire-ai-employees-heading">
            Hire AI Employees
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-zinc-600 max-w-4xl mx-auto">
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
              data-testid={`ai-employee-card-${index}`}
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-100 mb-6">
                <img
                  src={employee.image}
                  alt={employee.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Employee Info */}
              <div className="px-2">
                <div className="text-sm font-bold text-[#c4ff4d] mb-2 uppercase tracking-wider">
                  {employee.category}
                </div>
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
