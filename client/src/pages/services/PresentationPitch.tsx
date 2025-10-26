import { useEffect } from "react";
import { Link } from "wouter";
import { Presentation, Sparkles, TrendingUp, Users, FileText, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

export default function PresentationPitch() {
  useEffect(() => {
    document.title = "Presentation & Pitch Design Services | OARC Digital";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Pitch decks that close deals. Investor presentations, sales decks, keynote slides designed to persuade, impress, and win.");
    }
    // Open Graph tags - always update content
    let ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (!ogTitleMeta) {
      ogTitleMeta = document.createElement('meta');
      ogTitleMeta.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitleMeta);
    }
    ogTitleMeta.setAttribute('content', 'Presentation & Pitch Design - Close More Deals | OARC Digital');
    
    let ogDescMeta = document.querySelector('meta[property="og:description"]');
    if (!ogDescMeta) {
      ogDescMeta = document.createElement('meta');
      ogDescMeta.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescMeta);
    }
    ogDescMeta.setAttribute('content', 'Pitch decks and presentations that win. Investor decks, sales presentations, keynote slides that persuade and close deals.');
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-[hsl(220,70%,50%)] via-[hsl(240,70%,55%)] to-[hsl(260,70%,60%)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
            Pitch decks that <span className="italic">close deals</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Investor presentations, sales decks, keynote slides—designed to persuade, impress, and win. Every slide tells your story with clarity and impact.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-[hsl(220,70%,50%)]" data-testid="button-get-started">
              Get Your Deck
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white" data-testid="button-view-portfolio">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 px-4 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-sm uppercase tracking-wider text-muted-foreground mb-8">
            Trusted by founders, sales teams, and executives
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {['Series A Startups', 'Enterprise Sales', 'Keynote Speakers', 'Venture Capital', 'Corporate Execs', 'Product Launches'].map((type, i) => (
              <div key={i} className="text-lg md:text-xl font-bold text-foreground">{type}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-wider text-[hsl(220,70%,50%)] mb-4">PROVEN RESULTS</div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Your story. <span className="italic text-[hsl(260,70%,60%)]">Flawlessly told.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From seed rounds to IPO roadshows, from cold outreach to boardroom keynotes—we craft presentations that command attention and drive action.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {[
              { value: "$2.1B+", label: "Capital raised using our pitch decks" },
              { value: "67%", label: "Average close rate improvement for sales decks" },
              { value: "3,400+", label: "Presentations designed annually" },
              { value: "48hrs", label: "Average turnaround for investor decks" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-[hsl(220,10%,98%)] rounded-xl" data-testid={`metric-${i}`}>
                <div className="text-5xl font-bold text-[hsl(220,70%,50%)] mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Design */}
      <section className="py-20 bg-[hsl(220,10%,98%)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="text-sm uppercase tracking-wider text-[hsl(220,70%,50%)] mb-4">PRESENTATION TYPES</div>
          <h2 className="text-5xl md:text-6xl font-bold">
            Every format. <span className="italic text-[hsl(260,70%,60%)]">Every occasion.</span>
          </h2>
        </div>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-6 px-4 scrollbar-hide snap-x snap-mandatory">
            {[
              { name: "Investor Pitch Decks", desc: "Fundraising presentations that tell your story, showcase traction, and secure funding. Series A-C, seed rounds, IPO roadshows. Data visualization, financial projections, team highlights.", icon: TrendingUp },
              { name: "Sales Presentations", desc: "Persuasive decks that close enterprise deals. Discovery decks, proposal presentations, ROI calculators, case study showcases. Tailored messaging for decision-makers.", icon: Award },
              { name: "Keynote & Conference Slides", desc: "Stage-ready presentations for events, conferences, and webinars. Speaker support, rehearsal decks, live presentation design. Visual storytelling for large audiences.", icon: Presentation },
              { name: "Product Launches", desc: "Launch decks for internal kickoffs, press events, and customer announcements. Feature walkthroughs, roadmap reveals, competitive positioning, go-to-market strategy.", icon: Sparkles },
              { name: "Board & Executive Reports", desc: "Strategic presentations for board meetings, quarterly reviews, and executive briefings. Financial dashboards, KPI tracking, strategic initiatives, risk assessments.", icon: FileText },
              { name: "Training & Onboarding", desc: "Educational decks for team training, customer onboarding, and certification programs. Process documentation, best practices, interactive workshops.", icon: Users },
            ].map((type, i) => (
              <div key={i} className="flex-none w-[360px] md:w-[480px] snap-center group" data-testid={`card-type-${i}`}>
                <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-border h-full">
                  <div className="relative h-[300px] md:h-[350px] bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 overflow-hidden flex items-center justify-center">
                    <type.icon className="h-24 w-24 text-[hsl(220,70%,50%)]/20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3">{type.name}</h3>
                    <p className="text-muted-foreground">{type.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-wider text-[hsl(220,70%,50%)] mb-4">OUR PROCESS</div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              From brief to <span className="italic text-[hsl(260,70%,60%)]">boardroom-ready</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Story & Structure", desc: "We start with your core message, audience, and goals. Build narrative flow, outline key points, and map the emotional arc of your presentation." },
              { step: "02", title: "Design & Visualization", desc: "Transform your content into stunning slides. Custom graphics, data visualizations, iconography, photography. Brand-aligned color schemes and typography." },
              { step: "03", title: "Refine & Rehearse", desc: "Polish every detail. Speaker notes, timing guidance, rehearsal support. We don't deliver until it's flawless." },
            ].map((process, i) => (
              <div key={i} className="text-center">
                <div className="text-6xl font-bold text-[hsl(220,70%,50%)]/20 mb-4">{process.step}</div>
                <h3 className="text-2xl font-bold mb-3">{process.title}</h3>
                <p className="text-muted-foreground">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-[hsl(220,70%,50%)] to-[hsl(260,70%,60%)] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to win your next pitch?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's design a presentation that closes deals, secures funding, and leaves a lasting impression.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-[hsl(220,70%,50%)]" data-testid="button-cta-primary">
              Start Your Project
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white" data-testid="button-cta-secondary">
              See Pricing
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
