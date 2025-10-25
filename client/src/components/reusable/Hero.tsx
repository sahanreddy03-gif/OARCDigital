import { ArrowRight } from "lucide-react";

interface HeroProps {
  headline: string;
  subheadline: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
  backgroundVideo?: string;
}

export default function Hero({
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  backgroundVideo,
}: HeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Background Media - Placeholder for Phase 2 */}
      {backgroundVideo && (
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-gradient-to-br from-teal-900/20 to-blue-900/20" />
        </div>
      )}
      {!backgroundVideo && backgroundImage && (
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-teal-900/20 to-blue-900/20" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          data-testid="text-hero-headline"
        >
          {headline}
        </h1>
        <p
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto"
          data-testid="text-hero-subheadline"
        >
          {subheadline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={primaryCTA.href}
            className="inline-flex items-center gap-2 bg-[#c4ff4d] text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#b3e842] transition-all duration-200 hover:scale-105"
            data-testid="button-hero-primary-cta"
          >
            {primaryCTA.text}
            <ArrowRight size={20} />
          </a>
          {secondaryCTA && (
            <a
              href={secondaryCTA.href}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-200"
              data-testid="button-hero-secondary-cta"
            >
              {secondaryCTA.text}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
