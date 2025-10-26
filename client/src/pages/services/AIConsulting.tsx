import { useEffect } from "react";
import { Link } from "wouter";
import { Brain, TrendingUp, Zap, Target, Award, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

export default function AIConsulting() {
  useEffect(() => {
    document.title = "AI Consulting Services - AI Strategy & Implementation | OARC Digital";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "AI strategy consulting, implementation roadmaps, and AI transformation. From LLM integration to custom AI models. Turn AI hype into competitive advantage.");
    }
    // Open Graph tags - always update content
    let ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (!ogTitleMeta) {
      ogTitleMeta = document.createElement('meta');
      ogTitleMeta.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitleMeta);
    }
    ogTitleMeta.setAttribute('content', 'AI Consulting - Turn AI Into Competitive Advantage | OARC Digital');
    
    let ogDescMeta = document.querySelector('meta[property="og:description"]');
    if (!ogDescMeta) {
      ogDescMeta = document.createElement('meta');
      ogDescMeta.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescMeta);
    }
    ogDescMeta.setAttribute('content', 'AI strategy consulting and implementation. LLM integration, custom models, AI transformation roadmaps from experts who build AI.');
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-[hsl(260,70%,50%)] via-[hsl(270,65%,55%)] to-[hsl(280,70%,60%)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
            Turn AI hype into <span className="italic">competitive advantage</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            AI strategy consulting, implementation roadmaps, and transformation. From ChatGPT integration to custom models. We help you deploy AI that actually drives ROI.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-[hsl(260,70%,50%)]" data-testid="button-get-started">
              Book Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white" data-testid="button-view-services">
              View Services
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 px-4 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-sm uppercase tracking-wider text-muted-foreground mb-8">
            Advising companies on AI transformation
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {['B2B SaaS', 'E-commerce', 'Financial Services', 'Healthcare Tech', 'Marketing Agencies', 'Enterprises'].map((type, i) => (
              <div key={i} className="text-lg md:text-xl font-bold text-foreground">{type}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-wider text-[hsl(260,70%,50%)] mb-4">PROVEN AI OUTCOMES</div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Real AI. <span className="italic text-[hsl(280,70%,60%)]">Real ROI.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We cut through the hype and build AI solutions that solve actual business problems. No buzzwords, no vaporware—just measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {[
              { value: "120+", label: "AI implementations delivered successfully" },
              { value: "5.8x", label: "Average ROI from AI initiatives" },
              { value: "73%", label: "Reduction in manual work via AI automation" },
              { value: "30 days", label: "Average time to first AI deployment" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-[hsl(260,10%,98%)] rounded-xl" data-testid={`metric-${i}`}>
                <div className="text-5xl font-bold text-[hsl(260,70%,50%)] mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-[hsl(260,10%,98%)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="text-sm uppercase tracking-wider text-[hsl(260,70%,50%)] mb-4">AI CONSULTING SERVICES</div>
          <h2 className="text-5xl md:text-6xl font-bold">
            Strategy to execution. <span className="italic text-[hsl(280,70%,60%)]">End-to-end.</span>
          </h2>
        </div>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-6 px-4 scrollbar-hide snap-x snap-mandatory">
            {[
              { name: "AI Strategy & Roadmapping", desc: "Identify high-impact AI use cases for your business. Prioritization frameworks, ROI modeling, implementation timelines. From ChatGPT integrations to custom LLMs.", icon: Target },
              { name: "LLM Integration & Fine-Tuning", desc: "Deploy GPT-4, Claude, Llama, or custom models. API integration, prompt engineering, RAG systems, fine-tuning on your data. Production-ready AI applications.", icon: Brain },
              { name: "AI Agent Development", desc: "Build autonomous AI agents for sales, support, operations. Multi-step workflows, tool use, memory systems. Supervised by humans, powered by AI.", icon: Zap },
              { name: "Custom Model Development", desc: "Train specialized models for your domain. Computer vision, NLP, forecasting, recommendation engines. Own your IP, optimize for your data.", icon: Sparkles },
              { name: "AI Performance Optimization", desc: "Reduce costs, improve accuracy, speed up inference. Prompt optimization, model distillation, caching strategies. Cut AI spend by 60-80%.", icon: TrendingUp },
              { name: "AI Ethics & Governance", desc: "Responsible AI frameworks, bias detection, explainability, compliance. GDPR/SOC2-ready AI systems. Risk mitigation and safety protocols.", icon: Award },
            ].map((service, i) => (
              <div key={i} className="flex-none w-[360px] md:w-[480px] snap-center group" data-testid={`card-service-${i}`}>
                <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-border h-full">
                  <div className="relative h-[300px] md:h-[350px] bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-100 overflow-hidden flex items-center justify-center">
                    <service.icon className="h-24 w-24 text-[hsl(260,70%,50%)]/20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3">{service.name}</h3>
                    <p className="text-muted-foreground">{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-[hsl(260,70%,50%)] to-[hsl(280,70%,60%)] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to deploy AI that works?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's build an AI strategy and implementation roadmap that drives real business value—not just headlines.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-[hsl(260,70%,50%)]" data-testid="button-cta-primary">
              Schedule Discovery Call
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white" data-testid="button-cta-secondary">
              Read Case Studies
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
