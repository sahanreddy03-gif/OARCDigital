interface OARCBrandSectionProps {
  videoSrc?: string;
}

export default function OARCBrandSection({ videoSrc }: OARCBrandSectionProps) {
  return (
    <section
      className="relative min-h-[50vh] md:min-h-[65vh] overflow-hidden"
      style={{ background: "#0a0a0a", touchAction: "pan-y" }}
      data-testid="oarc-brand-section"
    >
      {videoSrc && (
        <div
          className="absolute inset-0 z-0"
          style={{ pointerEvents: "none" }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            style={{ opacity: 0.92, pointerEvents: "none" }}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      )}
    </section>
  );
}
