import PhoneMockup from "./PhoneMockup";

export default function SplitSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#faf8ff] to-[#f5f0ff]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-wider font-black text-primary">
              The results-driven, social-first agency you've been waiting for
            </p>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black font-display tracking-tight leading-[0.95]">
              Creative that <span className="italic font-black">clicks</span>
            </h2>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              We blend creative and performance. We turn data and trends into campaigns that matter — helping brands stand out, connect with customers, and build social media that makes a difference. Every idea is designed to win attention, spark engagement, and convert into real revenue.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
