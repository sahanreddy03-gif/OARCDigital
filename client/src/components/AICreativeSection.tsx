import adCreative from '@assets/generated_images/Ad_Creative_Design_Service_9b57ab73.png';
import socialMedia from '@assets/generated_images/Social_Media_Creative_Service_bac7689b.png';
import presentation from '@assets/generated_images/Presentation_Design_Service_0e150083.png';
import illustration from '@assets/generated_images/Illustration_Design_Service_e094617c.png';
import branding from '@assets/generated_images/Branding_Services_629333f8.png';
import ebook from '@assets/generated_images/eBook_Report_Design_Service_2b6bb558.png';
import concept from '@assets/generated_images/Concept_Creation_Service_a73c3d67.png';
import printDesign from '@assets/generated_images/Print_Design_Service_bfd3343d.png';
import packaging from '@assets/generated_images/Packaging_Merchandise_Design_Service_a522dc52.png';
import video from '@assets/generated_images/Video_Production_Service_f2c7300b.png';
import motion from '@assets/generated_images/Motion_Design_Service_e37d4242.png';
import immersive from '@assets/generated_images/Immersive_Design_Service_43da9f59.png';
import email from '@assets/generated_images/Email_Creation_Service_be8fd73f.png';
import webDesign from '@assets/generated_images/Web_Design_Service_132e79a2.png';
import designSystems from '@assets/generated_images/Design_Systems_Service_84c88cc7.png';
import productDesign from '@assets/generated_images/Product_Design_Service_9225ba50.png';
import aiEnhanced from '@assets/generated_images/AI_Enhanced_Creative_Service_e862d3e2.png';
import aiConsulting from '@assets/generated_images/AI_Consulting_Service_9a867bd2.png';

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

      {/* Carousel CSS Animation */}
      <style>{`
        .carousel-track {
          display: flex;
          gap: 2rem;
          animation: scroll-rtl 90s linear infinite;
          width: fit-content;
        }

        .carousel-card {
          flex-shrink: 0;
          width: 380px;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .carousel-card {
            width: 300px;
          }
          .carousel-track {
            gap: 1.5rem;
          }
        }

        @keyframes scroll-rtl {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .carousel-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
