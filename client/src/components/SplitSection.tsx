import PhoneMockup from "./PhoneMockup";

export default function SplitSection() {
  return (
    <section className="py-20 md:py-28 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-wider font-bold text-primary">
              The results-driven, social-first agency you've been waiting for
            </p>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-display tracking-tight leading-[1.1]">
              Creative that <span className="italic font-black">clicks</span>
            </h2>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              We blend creative and performance. We turn data and trends into campaigns that matter — helping brands stand out, connect with customers, and build social media that makes a difference. Every idea is designed to win attention, spark engagement, and convert into real revenue.
            </p>
          </div>

          <div className="md:sticky md:top-24 flex justify-center md:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
