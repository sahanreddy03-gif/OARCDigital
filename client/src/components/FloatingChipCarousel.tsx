import brandImage from '@assets/generated_images/Brand_Identity_Design_d96ef0dd.png';
import socialMedia from '@assets/generated_images/Social_Media_Ad_Creative_1692b2b1.png';
import videoProduction from '@assets/generated_images/Video_Production_Still_f3b287b8.png';
import aiArtwork from '@assets/generated_images/AI_Generated_Artwork_Sample_21a12eed.png';
import keyArt from '@assets/generated_images/Key_Art_Composition_Card_eb4acb99.png';
import motionGraphics from '@assets/generated_images/Motion_Graphics_Card_dcb90033.png';

const services = [
  { text: "Brand Image Library", image: brandImage },
  { text: "Key Art Composition", image: keyArt },
  { text: "Adding Motion To Static", image: motionGraphics },
  { text: "Character Development", image: videoProduction },
  { text: "Voiceover Generation", image: aiArtwork },
  { text: "AI-Enhanced Motion", image: socialMedia },
  { text: "Rapid Idea Testing", image: videoProduction },
  { text: "Social Media Content", image: socialMedia },
];

export default function FloatingChipCarousel() {
  const duplicatedServices = [...services, ...services, ...services];

  return (
    <div className="w-full overflow-hidden">
      <div className="flex animate-scroll whitespace-nowrap gap-3 md:gap-4">
        {duplicatedServices.map((service, index) => (
          <div 
            key={index} 
            className="inline-flex flex-shrink-0"
          >
            <div className="group flex items-center gap-3 px-4 py-2.5 bg-white rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer border border-gray-200">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg overflow-hidden flex-shrink-0">
                <img 
                  src={service.image} 
                  alt={service.text}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm md:text-base font-bold text-gray-900 pr-2 whitespace-nowrap">
                {service.text}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
