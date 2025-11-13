import { useState, useEffect } from 'react';
import { useParams } from 'wouter';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import * as Icons from 'lucide-react';

interface ServiceContent {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  benefits: Array<{
    title: string;
    description: string;
  }>;
  features: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  useCases: Array<{
    title: string;
    description: string;
  }>;
  integrations: string[];
  metrics: {
    efficiency: string;
    speed: string;
    cost: string;
  };
}

export default function AIEmployeeService() {
  const params = useParams();
  const slug = params.slug;
  const [content, setContent] = useState<ServiceContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await fetch(`/content/services/${slug}.json`);
        if (response.ok) {
          const data = await response.json();
          setContent(data);
        }
      } catch (error) {
        console.error('Error loading service content:', error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      loadContent();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-zinc-400">Loading...</div>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="min-h-screen bg-black">
        <Navigation />
        <div className="pt-32 px-6 text-center">
          <h1 className="text-4xl font-black text-white mb-4">Service Not Found</h1>
          <Link href="/services">
            <button className="px-6 py-3 bg-gradient-to-r from-[#00FF9C] to-green-500 rounded-full font-bold text-black">
              View All Services
            </button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-black to-black"></div>
        
        <div className="relative max-w-6xl mx-auto text-center z-10">
          <div className="inline-block mb-6">
            <span className="px-5 py-2.5 bg-gradient-to-r from-purple-500/10 to-fuchsia-500/10 border border-purple-400/40 rounded-full text-xs font-bold text-fuchsia-300 backdrop-blur-sm uppercase tracking-wider">
              AI Employee
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">
              {content.title}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-3xl mx-auto font-medium">
            {content.subtitle}
          </p>
          
          <p className="text-base text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            {content.description}
          </p>

          <Link href="/contact">
            <button className="group px-8 py-4 bg-gradient-to-r from-[#00FF9C] to-green-500 rounded-full font-bold text-base text-black inline-flex items-center gap-2 hover:scale-105 transition-transform">
              Get Started Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 px-6 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-purple-400/20">
              <div className="text-3xl font-black bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent mb-3">
                {content.metrics.efficiency}
              </div>
              <div className="text-sm text-zinc-400 font-medium">Efficiency Gain</div>
            </div>
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-purple-400/20">
              <div className="text-3xl font-black bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent mb-3">
                {content.metrics.speed}
              </div>
              <div className="text-sm text-zinc-400 font-medium">Speed Improvement</div>
            </div>
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-purple-400/20">
              <div className="text-3xl font-black bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-3">
                {content.metrics.cost}
              </div>
              <div className="text-sm text-zinc-400 font-medium">Cost Savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-16">
            <span className="bg-gradient-to-r from-white via-purple-300 to-white bg-clip-text text-transparent">
              Key Benefits
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.benefits.map((benefit, index) => (
              <div key={index} className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-purple-400/50 transition-all" data-testid={`benefit-${index}`}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-zinc-400 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-16">
            <span className="bg-gradient-to-r from-white via-purple-300 to-white bg-clip-text text-transparent">
              Core Features
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.features.map((feature, index) => {
              const IconComponent = (Icons as any)[feature.icon] || Sparkles;
              
              return (
                <div key={index} className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-purple-400/50 transition-all" data-testid={`feature-${index}`}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-16">
            <span className="bg-gradient-to-r from-white via-purple-300 to-white bg-clip-text text-transparent">
              Real-World Applications
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.useCases.map((useCase, index) => (
              <div key={index} className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-purple-400/50 transition-all" data-testid={`usecase-${index}`}>
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center mb-4 text-white font-black text-lg">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-purple-300 to-white bg-clip-text text-transparent">
              Seamless Integrations
            </span>
          </h2>
          <p className="text-zinc-400 mb-12 max-w-2xl mx-auto">
            Works with the tools you already use
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {content.integrations.map((integration, index) => (
              <div key={index} className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-zinc-300" data-testid={`integration-${index}`}>
                {integration}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-b from-zinc-950 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-purple-300 to-white bg-clip-text text-transparent">
              Ready to Transform Your Workflow?
            </span>
          </h2>
          <p className="text-lg text-zinc-400 mb-10 max-w-2xl mx-auto">
            Deploy your AI employee in minutes and start automating today
          </p>
          <Link href="/contact">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 rounded-full font-bold text-base text-white inline-flex items-center gap-2 hover:scale-105 transition-transform" data-testid="button-get-started-footer">
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
