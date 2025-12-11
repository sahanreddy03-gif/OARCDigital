import { useEffect, useRef } from "react";
import { 
  SiInstagram,
  SiFacebook,
  SiYoutube,
  SiLinkedin,
  SiTiktok,
  SiSnapchat,
  SiReddit,
  SiX,
  SiDiscord,
  SiTwitch,
  SiPinterest,
  SiThreads,
  SiWhatsapp,
  SiTelegram,
  SiSpotify,
  SiOpenai,
  SiAnthropic,
  SiMeta,
  SiGoogle,
  SiFigma,
  SiNotion,
  SiSlack,
  SiZoom,
  SiCanva,
  SiAdobe,
  SiShopify,
  SiHubspot,
  SiMailchimp,
  SiZapier,
  SiAirtable,
} from "react-icons/si";

const platforms = [
  { name: "Instagram", icon: SiInstagram },
  { name: "Facebook", icon: SiFacebook },
  { name: "YouTube", icon: SiYoutube },
  { name: "TikTok", icon: SiTiktok },
  { name: "X", icon: SiX },
  { name: "LinkedIn", icon: SiLinkedin },
  { name: "Snapchat", icon: SiSnapchat },
  { name: "Reddit", icon: SiReddit },
  { name: "Discord", icon: SiDiscord },
  { name: "Twitch", icon: SiTwitch },
  { name: "Pinterest", icon: SiPinterest },
  { name: "Threads", icon: SiThreads },
  { name: "WhatsApp", icon: SiWhatsapp },
  { name: "Telegram", icon: SiTelegram },
  { name: "Spotify", icon: SiSpotify },
  { name: "OpenAI", icon: SiOpenai },
  { name: "Anthropic", icon: SiAnthropic },
  { name: "Meta", icon: SiMeta },
  { name: "Google", icon: SiGoogle },
  { name: "Figma", icon: SiFigma },
  { name: "Notion", icon: SiNotion },
  { name: "Slack", icon: SiSlack },
  { name: "Zoom", icon: SiZoom },
  { name: "Canva", icon: SiCanva },
  { name: "Adobe", icon: SiAdobe },
  { name: "Shopify", icon: SiShopify },
  { name: "HubSpot", icon: SiHubspot },
  { name: "Mailchimp", icon: SiMailchimp },
  { name: "Zapier", icon: SiZapier },
  { name: "Airtable", icon: SiAirtable },
];

export default function TrustedBrandsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const positionRef = useRef(0);
  const contentWidthRef = useRef(0);
  
  const triplePlatforms = [...platforms, ...platforms, ...platforms];
  
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    const children = scrollContainer.children;
    if (children.length > 0) {
      let singleSetWidth = 0;
      for (let i = 0; i < platforms.length; i++) {
        const child = children[i] as HTMLElement;
        singleSetWidth += child.offsetWidth + 40;
      }
      contentWidthRef.current = singleSetWidth;
    }
    
    const speed = 0.5;
    
    const animate = () => {
      positionRef.current += speed;
      
      if (positionRef.current >= contentWidthRef.current) {
        positionRef.current = 0;
      }
      
      scrollContainer.style.transform = `translateX(-${positionRef.current}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <section 
      className="relative py-6 md:py-8 overflow-hidden" 
      style={{ backgroundColor: '#f0fff4' }}
      data-testid="platforms-section"
    >
      <div className="w-full overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #f0fff4, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #f0fff4, transparent)' }} />
        
        <div 
          ref={scrollRef}
          className="flex gap-10 whitespace-nowrap py-2"
          style={{ willChange: 'transform' }}
          data-testid="platforms-carousel"
        >
          {triplePlatforms.map((platform, index) => (
            <div
              key={`${platform.name}-${index}`}
              className="inline-flex items-center justify-center flex-shrink-0 group"
              data-testid={`platform-${index}`}
            >
              <platform.icon
                className="w-5 h-5 md:w-6 md:h-6 text-zinc-300 group-hover:text-zinc-500 transition-colors duration-300"
                aria-label={platform.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
