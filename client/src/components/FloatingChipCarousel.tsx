// Premium 8K quality stock images for homepage carousel
import digitalMarketing from '@assets/stock_images/digital_marketing_st_73e0d5ea.jpg';
import socialMedia from '@assets/stock_images/social_media_managem_8e61c86d.jpg';
import aiVideo from '@assets/stock_images/video_production_stu_abf9b7e6.jpg';
import branding from '@assets/stock_images/branding_design_logo_def8ba83.jpg';
import rapidTesting from '@assets/stock_images/rapid_prototyping_te_8f533efd.jpg';
import leadGen from '@assets/stock_images/lead_generation_sale_842797d5.jpg';
import creativeAds from '@assets/stock_images/creative_advertising_30aa5822.jpg';
import customerAcquisition from '@assets/stock_images/customer_acquisition_f9d88ee5.jpg';
import funnelAutomation from '@assets/stock_images/marketing_automation_0c8f4dcc.jpg';
import aiCopywriting from '@assets/stock_images/copywriting_content__42613a28.jpg';
import websiteDesign from '@assets/stock_images/website_design_ui_ux_4ef0c7cd.jpg';
import adminAI from '@assets/stock_images/administrative_assis_c2205c82.jpg';
import salesAI from '@assets/stock_images/sales_professional_b_92ff4f35.jpg';
import supportAI from '@assets/stock_images/customer_support_hel_973ef702.jpg';

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
  // Duplicate exactly 2 times for seamless -50% translateX animation
  const duplicatedServices = [...services, ...services];

  return (
    <div className="w-full overflow-hidden">
      <div className="flex animate-scroll-fast whitespace-nowrap gap-3 md:gap-2">
        {duplicatedServices.map((service, index) => (
          <div 
            key={index} 
            className="inline-flex flex-shrink-0"
            data-testid={`carousel-chip-${index}`}
          >
            <div className="group flex items-center gap-3 md:gap-2 px-4 md:px-3 py-3 md:py-2 bg-white/95 backdrop-blur-sm rounded-full shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-white transition-all duration-300 cursor-pointer border border-white/20 hover:border-[#c4ff4d]/30">
              {/* Enhanced Mobile: 60px, Tablet+: 52px professional images */}
              <div className="w-[60px] h-[60px] md:w-[52px] md:h-[52px] rounded-xl md:rounded-lg overflow-hidden flex-shrink-0 bg-zinc-100 ring-2 ring-white/50 group-hover:ring-[#c4ff4d]/40 transition-all duration-300">
                <img 
                  src={service.image} 
                  alt={service.text}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  data-testid={`carousel-image-${service.text.toLowerCase().replace(/\s+/g, '-')}`}
                />
              </div>
              <span className="text-sm md:text-xs lg:text-sm font-bold text-gray-900 group-hover:text-zinc-950 pr-2 md:pr-1 whitespace-nowrap transition-colors duration-300" data-testid={`carousel-text-${service.text.toLowerCase().replace(/\s+/g, '-')}`}>
                {service.text}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
