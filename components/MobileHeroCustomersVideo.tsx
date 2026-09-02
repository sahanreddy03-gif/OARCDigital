import { HERO_CUSTOMERS_VIDEO } from "@/lib/media/heroCustomersVideo";

/**
 * Static CUSTOMERS hero frame. The homepage intentionally contains no
 * autoplaying media.
 */
export default function MobileHeroCustomersVideo() {
  const { width, height } = HERO_CUSTOMERS_VIDEO;

  return (
    <div className="absolute inset-0 bg-black" data-testid="hero-mobile-customers-still">
      <picture>
        <source srcSet={HERO_CUSTOMERS_VIDEO.posterAvif} type="image/avif" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_CUSTOMERS_VIDEO.posterJpg}
          alt="Customers?"
          width={width}
          height={height}
          className="absolute inset-0 h-full w-full object-cover object-center"
          draggable={false}
          decoding="async"
          fetchPriority="high"
        />
      </picture>
    </div>
  );
}
