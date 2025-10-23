import PhoneMockup from "./PhoneMockup";

export default function SplitSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-wide font-semibold text-primary">
              The results-driven, social-first agency you've been waiting for
            </p>
            
            <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight leading-tight">
              Creative that <span className="italic">clicks</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              We blend creative and performance. We turn data and trends into campaigns that matter — helping brands stand out, connect with customers, and build social media that makes a difference. Every idea is designed to win attention, spark engagement, and convert into real revenue.
            </p>
          </div>

          <div className="md:sticky md:top-24">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
