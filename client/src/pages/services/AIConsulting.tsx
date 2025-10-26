import { useEffect } from "react";
import { Link } from "wouter";
import { Brain, TrendingUp, Zap, Target, Sparkles, BarChart, CheckCircle2, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import heroImage from "@assets/stock_images/consultant_strategy__2a8ff840.jpg";

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
      {/* Hero Section with Real Image */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt="AI consulting strategy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Turn AI hype into <span className="italic bg-gradient-to-r from-[hsl(262,83%,58%)] via-[hsl(300,81%,60%)] to-[hsl(330,81%,60%)] text-transparent bg-clip-text">competitive advantage</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            AI strategy consulting, implementation roadmaps, and transformation. From ChatGPT integration to custom models. We help you deploy AI that actually drives ROI.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button size="lg" className="bg-white text-[hsl(262,83%,58%)] hover:bg-white/90" data-testid="button-get-started">
              Book AI Strategy Call
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20" data-testid="button-view-case-studies">
              View AI Case Studies
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
            {['Tech Startups', 'Financial Services', 'Healthcare', 'Manufacturing', 'Logistics', 'Professional Services'].map((type, i) => (
              <div key={i} className="text-lg md:text-xl font-bold text-foreground">{type}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-[hsl(262,83%,58%)] mb-3">AI TRANSFORMATION RESULTS</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Real impact from AI implementation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We help businesses unlock measurable value from AI across operations, revenue, and efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-10">
            {[
              { value: "67%", label: "Avg. efficiency gain" },
              { value: "$2.4M", label: "Avg. cost savings/year" },
              { value: "4.2x", label: "Avg. ROI on AI projects" },
              { value: "90 days", label: "Avg. time to value" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-gradient-to-br from-[hsl(262,10%,98%)] to-white rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1" data-testid={`metric-${i}`}>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[hsl(262,83%,58%)] to-[hsl(330,81%,60%)] text-transparent bg-clip-text mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Spotlight */}
      <section className="py-16 px-4 bg-[hsl(262,10%,98%)]">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl overflow-hidden border border-border shadow-lg">
            <div className="p-8 md:p-12">
              <div className="text-sm uppercase tracking-wider text-[hsl(262,83%,58%)] mb-4">CASE STUDY</div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                How we helped a healthcare company reduce claims processing time by 83% with custom AI
              </h3>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-2xl font-bold text-[hsl(262,83%,58%)] mb-2">83% faster</div>
                  <div className="text-sm text-muted-foreground">Claims processing time reduced</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[hsl(262,83%,58%)] mb-2">$1.8M/year</div>
                  <div className="text-sm text-muted-foreground">Operational cost savings</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[hsl(262,83%,58%)] mb-2">94% accuracy</div>
                  <div className="text-sm text-muted-foreground">AI model performance</div>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                We built a custom LLM-powered system to automate medical claims processing, document classification, and fraud detection. The solution integrated with their existing EMR systems and included a human-in-the-loop review process. The company went from 5-day processing times to same-day turnaround while maintaining compliance.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Custom LLM Fine-tuning', 'OCR Integration', 'Legacy System API', 'Compliance Review', 'Real-time Dashboard'].map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-[hsl(262,10%,95%)] text-[hsl(262,83%,58%)] rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services We Offer */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-10">
          <div className="text-sm uppercase tracking-wider text-[hsl(262,83%,58%)] mb-3">AI CONSULTING SERVICES</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            From strategy to <span className="italic text-[hsl(330,81%,60%)]">deployment</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Comprehensive AI consulting that takes you from opportunity identification to production deployment
          </p>
        </div>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-6 px-4 scrollbar-hide snap-x snap-mandatory">
            {[
              { 
                name: "AI Strategy & Roadmap", 
                desc: "We assess your business operations, identify high-impact AI opportunities, and build a phased implementation plan. Clear ROI projections, resource requirements, and risk mitigation.",
                icon: Target,
                features: ["Opportunity assessment", "ROI modeling", "Implementation roadmap", "Risk analysis"]
              },
              { 
                name: "LLM Integration", 
                desc: "ChatGPT, Claude, GPT-4—we integrate leading LLMs into your workflows. Custom prompts, RAG systems, fine-tuning, and API orchestration that drives business value.",
                icon: Brain,
                features: ["API integration", "Prompt engineering", "RAG implementation", "Fine-tuning workflows"]
              },
              { 
                name: "Custom AI Models", 
                desc: "Build proprietary models trained on your data. Computer vision, NLP, forecasting, recommendation engines. We handle data prep, training, deployment, and monitoring.",
                icon: Cpu,
                features: ["Model architecture", "Training pipeline", "MLOps setup", "Performance monitoring"]
              },
              { 
                name: "AI Process Automation", 
                desc: "Automate document processing, data entry, customer support, and decision workflows with AI agents. We build, test, and deploy AI that works 24/7.",
                icon: Zap,
                features: ["Document AI", "Workflow automation", "AI agents", "Legacy integration"]
              },
              { 
                name: "AI-Powered Analytics", 
                desc: "Turn data into actionable insights with predictive models, anomaly detection, and forecasting. Real-time dashboards and automated reporting.",
                icon: BarChart,
                features: ["Predictive analytics", "Forecasting models", "Anomaly detection", "Custom dashboards"]
              },
              { 
                name: "AI Governance & Ethics", 
                desc: "Build responsible AI systems. Bias detection, explainability, compliance frameworks, and ethical guidelines. We help you deploy AI safely.",
                icon: CheckCircle2,
                features: ["Bias auditing", "Model explainability", "Compliance review", "Governance framework"]
              },
            ].map((service, i) => (
              <div key={i} className="flex-none w-[340px] md:w-[420px] snap-center group" data-testid={`card-service-${i}`}>
                <div className="bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-border h-full hover:-translate-y-2">
                  <div className="relative h-48 bg-gradient-to-br from-[hsl(262,83%,58%)]/10 via-[hsl(300,81%,60%)]/10 to-[hsl(330,81%,60%)]/10 overflow-hidden flex items-center justify-center">
                    <service.icon className="h-16 w-16 text-[hsl(262,83%,58%)]/30 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[hsl(262,83%,58%)] transition-colors">{service.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{service.desc}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-[hsl(262,83%,58%)]" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-4 bg-[hsl(262,10%,98%)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              End-to-end AI implementation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From initial discovery to production deployment and ongoing optimization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Discovery & Assessment", desc: "Deep dive into your business processes, data infrastructure, and AI readiness. We identify quick wins and long-term opportunities with clear ROI projections." },
              { name: "Data Strategy", desc: "Audit your data quality, structure pipelines, implement governance, and prepare datasets for AI training. Clean data is the foundation of successful AI." },
              { name: "Proof of Concept", desc: "Rapid prototypes to validate technical feasibility and business value. Most POCs delivered in 2-4 weeks with measurable success criteria." },
              { name: "Production Deployment", desc: "Scalable architecture, security hardening, API integration, and user training. We deploy AI systems that work reliably in production environments." },
              { name: "Model Monitoring", desc: "Continuous performance tracking, drift detection, and retraining pipelines. We ensure your AI maintains accuracy over time." },
              { name: "Team Enablement", desc: "Technical training, best practices documentation, and knowledge transfer. We build your team's AI capabilities for long-term success." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-white border border-border hover:border-[hsl(262,83%,58%)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1" data-testid={`card-deliverable-${i}`}>
                <h3 className="text-lg font-bold mb-2">{item.name}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How we work: <span className="italic text-[hsl(330,81%,60%)]">Validate, build, scale</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A proven 4-phase approach to AI transformation
            </p>
          </div>

          <div className="space-y-6">
            {[
              { step: "01", title: "Strategic Assessment", desc: "We analyze your business processes, data infrastructure, and competitive landscape. We identify AI opportunities with the highest ROI potential and define clear success metrics. Most assessments complete in 1-2 weeks." },
              { step: "02", title: "Proof of Concept", desc: "Build rapid prototypes to validate technical feasibility and business value. We test assumptions, measure performance, and demonstrate ROI before committing to full-scale implementation." },
              { step: "03", title: "Production Build", desc: "Develop production-grade AI systems with proper architecture, security, monitoring, and integration. We handle data pipelines, model training, API development, and user interface design." },
              { step: "04", title: "Scale & Optimize", desc: "Monitor performance, retrain models, expand to new use cases, and optimize costs. Continuous improvement ensures your AI systems deliver increasing value over time." },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start p-6 md:p-8 bg-gradient-to-br from-[hsl(262,10%,98%)] to-white rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-x-2" data-testid={`step-${i}`}>
                <div className="text-5xl font-bold text-[hsl(262,83%,58%)]/20 flex-shrink-0">{item.step}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(262,83%,58%)] via-[hsl(300,81%,60%)] to-[hsl(330,81%,60%)]"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to deploy AI that drives ROI?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Book a free AI strategy call. We'll identify opportunities, assess feasibility, and show you exactly how AI can transform your business.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-[hsl(262,83%,58%)] hover:bg-white/90" data-testid="button-cta-primary">
              Book Strategy Call
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20" data-testid="button-cta-secondary">
              View AI Case Studies
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
