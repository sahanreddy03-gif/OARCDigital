import brandImage from '@assets/generated_images/Brand_Image_Library_Card_94571438.png';
import keyArt from '@assets/generated_images/Key_Art_Composition_Card_eb4acb99.png';
import motionGraphics from '@assets/generated_images/Motion_Graphics_Card_dcb90033.png';
import characterDev from '@assets/generated_images/Character_Development_Card_f5d07add.png';
import voiceover from '@assets/generated_images/Voiceover_Generation_Card_b5ecfb72.png';

const services = [
  { text: "Brand Image Library", image: brandImage },
  { text: "Key Art Composition", image: keyArt },
  { text: "Adding Motion To Static", image: motionGraphics },
  { text: "Character Development", image: characterDev },
  { text: "Voiceover Generation", image: voiceover },
  { text: "AI-Enhanced Motion", image: motionGraphics },
  { text: "Rapid Idea Testing", image: keyArt },
  { text: "Copy and Concept", image: brandImage },
];

export default function FloatingChipCarousel() {
  const duplicatedServices = [...services, ...services, ...services];

  return (
    <div className="w-full overflow-hidden py-3">
      <div className="flex animate-scroll whitespace-nowrap">
        {duplicatedServices.map((service, index) => (
          <div 
            key={index} 
            className="inline-flex items-center mx-2"
          >
            <div className="group relative w-44 h-28 rounded-lg overflow-hidden shadow-lg hover-elevate transition-all cursor-pointer">
              <img 
                src={service.image} 
                alt={service.text}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-100 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <span className="text-xs font-semibold text-background whitespace-normal line-clamp-2">
                  {service.text}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
