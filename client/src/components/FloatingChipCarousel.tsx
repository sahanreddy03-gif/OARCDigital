import digitalMarketing from '@assets/generated_images/Digital_Marketing_Service_Icon_93caaf8d.png';
import socialMedia from '@assets/generated_images/Social_Media_Management_Icon_3934084f.png';
import aiVideo from '@assets/generated_images/AI_Video_Production_Icon_4b03c9f2.png';
import branding from '@assets/generated_images/Branding_Services_Icon_691585a9.png';
import rapidTesting from '@assets/generated_images/Rapid_Idea_Testing_Icon_7cadb672.png';
import leadGen from '@assets/generated_images/Lead_Generation_Icon_e2638821.png';
import creativeAds from '@assets/generated_images/Creative_Ad_Campaigns_Icon_fa6472fb.png';
import customerAcquisition from '@assets/generated_images/Customer_Acquisition_Strategy_Icon_3ad38521.png';
import funnelAutomation from '@assets/generated_images/Funnel_Automation_Icon_fce2ba04.png';
import aiCopywriting from '@assets/generated_images/AI_Copywriting_Icon_09e6ed5d.png';
import websiteDesign from '@assets/generated_images/Website_Design_Icon_3730d680.png';
import adminAI from '@assets/generated_images/Admin_AI_Employees_Icon_61b4d44c.png';
import salesAI from '@assets/generated_images/Sales_AI_Employees_Icon_2a768208.png';
import supportAI from '@assets/generated_images/Support_AI_Employees_Icon_3cc3a07e.png';

const services = [
  { text: "Digital Marketing", image: digitalMarketing },
  { text: "Social Media Management", image: socialMedia },
  { text: "AI Video Production", image: aiVideo },
  { text: "Branding Services", image: branding },
  { text: "Rapid Idea Testing", image: rapidTesting },
  { text: "Lead Generation", image: leadGen },
  { text: "Creative Ad Campaigns", image: creativeAds },
  { text: "Customer Acquisition Strategy", image: customerAcquisition },
  { text: "Funnel Automation", image: funnelAutomation },
  { text: "AI Copywriting", image: aiCopywriting },
  { text: "Website Design", image: websiteDesign },
  { text: "Admin AI Employees", image: adminAI },
  { text: "Sales AI Employees", image: salesAI },
  { text: "Support AI Employees", image: supportAI },
];

export default function FloatingChipCarousel() {
  const duplicatedServices = [...services, ...services, ...services];

  return (
    <div className="w-full overflow-hidden">
      <div className="flex animate-scroll whitespace-nowrap gap-3 md:gap-2">
        {duplicatedServices.map((service, index) => (
          <div 
            key={index} 
            className="inline-flex flex-shrink-0"
            data-testid={`carousel-chip-${index}`}
          >
            <div className="group flex items-center gap-3 md:gap-2 px-4 md:px-3 py-3 md:py-2 bg-white/95 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer border border-white/20">
              {/* Mobile: 56px, Tablet+: 48px images */}
              <div className="w-[56px] h-[56px] md:w-12 md:h-12 rounded-lg md:rounded-md overflow-hidden flex-shrink-0 bg-white">
                <img 
                  src={service.image} 
                  alt={service.text}
                  className="w-full h-full object-cover"
                  data-testid={`carousel-image-${service.text.toLowerCase().replace(/\s+/g, '-')}`}
                />
              </div>
              <span className="text-sm md:text-xs lg:text-sm font-bold text-gray-900 pr-2 md:pr-1 whitespace-nowrap" data-testid={`carousel-text-${service.text.toLowerCase().replace(/\s+/g, '-')}`}>
                {service.text}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
