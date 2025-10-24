import adCreative from '@assets/stock_images/professional_ad_crea_01a208c3.jpg';
import socialMedia from '@assets/stock_images/social_media_creativ_8b2d8cae.jpg';
import presentation from '@assets/stock_images/professional_present_2e93e298.jpg';
import illustration from '@assets/stock_images/digital_illustration_cc904733.jpg';
import branding from '@assets/stock_images/professional_brandin_f3b9b991.jpg';
import ebook from '@assets/stock_images/ebook_report_design__49ba2f95.jpg';
import concept from '@assets/stock_images/creative_concept_dev_96d7b938.jpg';
import printDesign from '@assets/stock_images/professional_print_d_ac873095.jpg';
import packaging from '@assets/stock_images/product_packaging_de_0ef4ba86.jpg';
import video from '@assets/stock_images/video_production_fil_418b397b.jpg';
import motion from '@assets/stock_images/motion_graphics_anim_1c720306.jpg';
import immersive from '@assets/stock_images/immersive_design_vir_c9997440.jpg';
import email from '@assets/stock_images/email_newsletter_des_50f406c8.jpg';
import webDesign from '@assets/stock_images/modern_web_design_we_927d8700.jpg';
import designSystems from '@assets/stock_images/design_system_compon_362ff5cd.jpg';
import productDesign from '@assets/stock_images/product_design_app_i_3c5ffe87.jpg';
import aiEnhanced from '@assets/stock_images/ai_artificial_intell_5f3c3d5c.jpg';
import aiConsulting from '@assets/stock_images/ai_consulting_techno_7ced77f9.jpg';

const services = [
  {
    title: "Ad creative",
    subtitle: "Eye-catching designs that perform",
    image: adCreative,
    category: "Design & Static Creative"
  },
  {
    title: "Social media creative",
    subtitle: "Engaging assets for all platforms",
    image: socialMedia,
    category: "Design & Static Creative"
  },
  {
    title: "Presentation design",
    subtitle: "Captivating slides that tell your story",
    image: presentation,
    category: "Design & Static Creative"
  },
  {
    title: "Illustration design",
    subtitle: "Visual storytelling for your brand",
    image: illustration,
    category: "Design & Static Creative"
  },
  {
    title: "Branding services",
    subtitle: "Expertise & custom design services",
    image: branding,
    category: "Design & Static Creative"
  },
  {
    title: "eBooks & report design",
    subtitle: "Your digital content supercharged",
    image: ebook,
    category: "Design & Static Creative"
  },
  {
    title: "Concept creation",
    subtitle: "Big ideas crafted for maximum impact",
    image: concept,
    category: "Design & Static Creative"
  },
  {
    title: "Print design",
    subtitle: "Tangible designs that leave a lasting impression",
    image: printDesign,
    category: "Design & Static Creative"
  },
  {
    title: "Packaging & merchandise design",
    subtitle: "Bring your brand to life",
    image: packaging,
    category: "Design & Static Creative"
  },
  {
    title: "Video production",
    subtitle: "Effortless video production at scale",
    image: video,
    category: "Motion & Video"
  },
  {
    title: "Motion design",
    subtitle: "For websites, ads, and presentations",
    image: motion,
    category: "Motion & Video"
  },
  {
    title: "Immersive design",
    subtitle: "Innovative solutions for 3D/AR design services",
    image: immersive,
    category: "Motion & Video"
  },
  {
    title: "Email creation",
    subtitle: "Click-worthy emails that drive engagement",
    image: email,
    category: "Digital & Web"
  },
  {
    title: "Web design",
    subtitle: "Stunning websites and landing pages built to engage",
    image: webDesign,
    category: "Digital & Web"
  },
  {
    title: "Design Systems",
    subtitle: "Robust design systems that drive visual consistency",
    image: designSystems,
    category: "Digital & Web",
    badge: "NEW"
  },
  {
    title: "Product Design",
    subtitle: "Engaging & intuitive experiences",
    image: productDesign,
    category: "Digital & Web",
    badge: "NEW"
  },
  {
    title: "AI-enhanced creative",
    subtitle: "Human brilliance powered by AI",
    image: aiEnhanced,
    category: "AI-Powered"
  },
  {
    title: "AI consulting",
    subtitle: "Maximize AI with tailored strategies",
    image: aiConsulting,
    category: "AI-Powered"
  },
];

export default function AICreativeSection() {
  // Duplicate services for seamless loop
  const duplicatedServices = [...services, ...services, ...services];

  return (
    <section className="relative bg-white py-16 md:py-20 lg:py-24 overflow-hidden" data-testid="section-ai-creative">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl mb-12 md:mb-16">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-zinc-900 tracking-tight mb-4" data-testid="text-ai-creative-heading">
            Every type of creative work
          </h2>
          <p className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-zinc-900 tracking-tight">
            you'll ever need
            <span className="italic text-[#c4ff4d]"> and more</span>
          </p>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full">
        {/* Gradient Overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 lg:w-64 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 lg:w-64 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling Carousel */}
        <div className="carousel-track" data-testid="carousel-track">
          {duplicatedServices.map((service, index) => (
            <div
              key={index}
              className="carousel-card group"
              data-testid={`service-card-${index}`}
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-100 mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {service.badge && (
                  <div className="absolute top-4 right-4 bg-[#c4ff4d] text-zinc-900 text-xs font-bold px-3 py-1.5 rounded-full">
                    {service.badge}
                  </div>
                )}
              </div>

              {/* Service Info */}
              <div className="px-2">
                <h3 className="text-2xl lg:text-3xl font-bold text-zinc-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-base lg:text-lg text-zinc-600 leading-relaxed">
                  {service.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
