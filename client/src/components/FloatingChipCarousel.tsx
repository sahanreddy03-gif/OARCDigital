import sample1 from '@assets/generated_images/Carousel_Sample_1_402ef8ac.png';
import sample2 from '@assets/generated_images/Carousel_Sample_2_e622a0fd.png';
import sample3 from '@assets/generated_images/Carousel_Sample_3_8ce5a9d3.png';
import sample4 from '@assets/generated_images/Carousel_Sample_4_8e1c7e2e.png';
import sample5 from '@assets/generated_images/Carousel_Sample_5_1febb1b4.png';

const services = [
  { text: "Brand Image Library", image: sample1 },
  { text: "Key Art Composition", image: sample2 },
  { text: "Adding Motion To Static", image: sample3 },
  { text: "Character Development", image: sample4 },
  { text: "Voiceover Generation", image: sample5 },
  { text: "AI-Enhanced Motion", image: sample3 },
  { text: "Rapid Idea Testing", image: sample2 },
  { text: "Social Media Content", image: sample1 },
];

export default function FloatingChipCarousel() {
  const duplicatedServices = [...services, ...services, ...services];

  return (
    <div className="w-full overflow-hidden">
      <div className="flex animate-scroll whitespace-nowrap gap-2 md:gap-3">
        {duplicatedServices.map((service, index) => (
          <div 
            key={index} 
            className="inline-flex flex-shrink-0"
          >
            <div className="group flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-2.5 bg-white/95 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer border border-white/20">
              <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-md md:rounded-lg overflow-hidden flex-shrink-0">
                <img 
                  src={service.image} 
                  alt={service.text}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xs md:text-sm lg:text-base font-bold text-gray-900 pr-1 md:pr-2 whitespace-nowrap">
                {service.text}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
