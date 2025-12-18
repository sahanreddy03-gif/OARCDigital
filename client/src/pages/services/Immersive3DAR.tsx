import { useEffect } from "react";
import { Link } from "wouter";
import { Box as BoxIcon, Smartphone, Glasses, Package, Layers, Sparkles, CheckCircle2, Eye, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollableCards } from "@/components/ui/scrollable-cards";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { creativeServicesSEO } from "@/data/seoMetadata";
import { createServiceSchema } from "@/utils/structuredData";
import heroImage from "@assets/stock_images/virtual_reality_vr_h_6d01f361.jpg";
import FAQSection, { FAQItem } from '@/components/FAQSection';

const immersive3DFAQs: FAQItem[] = [
  { question: "What 3D and AR services do you offer?", answer: "3D product visualization, AR experiences, virtual showrooms, interactive configurators, and immersive brand experiences." },
  { question: "What industries benefit from 3D/AR?", answer: "E-commerce, real estate, manufacturing, retail, education, and events. Any industry where seeing is believing." },
  { question: "How long does 3D development take?", answer: "Simple 3D models take 1-2 weeks. Complete AR experiences typically require 4-8 weeks." },
  { question: "What makes OARC's 3D/AR different?", answer: "Marketing-focused immersive experiences. We create 3D that drives engagement and conversions, not just looks impressive." },
  { question: "What platforms do AR experiences work on?", answer: "Web-based AR works on any smartphone browser. No app download required for your customers." },
  { question: "Can we update 3D products ourselves?", answer: "Yes, we build systems where you can swap textures, colors, and configurations without technical skills." },
  { question: "What is the investment for 3D/AR?", answer: "Product visualizations start from €2,000. Complete AR experiences range from €10,000-50,000 based on complexity." },
  { question: "Do you provide hosting for 3D assets?", answer: "Yes, we offer optimized CDN hosting for 3D assets ensuring fast loading and smooth performance globally." }
];

export default function Immersive3DAR() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <SEOHead
        title={creativeServicesSEO.immersive3DAR.title}
        description={creativeServicesSEO.immersive3DAR.description}
        canonicalUrl={`https://oarcdigital.com${creativeServicesSEO.immersive3DAR.path}`}
        ogType="article"
        structuredData={createServiceSchema(
          "3D & AR Experiences Services",
          creativeServicesSEO.immersive3DAR.description,
          "Immersive Design"
        )}
        schemaId="service-immersive-3d-ar"
      />
      {/* Hero Section with Real Image */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt="Virtual reality and immersive 3D experiences"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Step into the <span className="italic text-[#c4ff4d]">next dimension</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            3D product modeling, AR try-on experiences, virtual showrooms, and immersive web design. We build interactive experiences that engage customers, reduce returns, and drive conversions—bringing your products to life before they buy.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button size="lg" className="bg-[#c4ff4d] text-[#1a2e29] hover:bg-[#c4ff4d]/90" data-testid="button-get-started">
              Explore 3D & AR
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20" data-testid="button-view-demos">
              View Live Demos
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 px-4 bg-[#f5f0e6] border-b border-[#1a2e29]/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-sm uppercase tracking-wider text-[#1a2e29]/60 mb-8">
            Building immersive experiences for leading brands
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {['E-commerce Brands', 'Real Estate Firms', 'Furniture Retailers', 'Automotive', 'Museums & Galleries', 'Architecture Firms'].map((type, i) => (
              <div key={i} className="text-lg md:text-xl font-bold text-[#1a2e29]">{type}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#a8b892]">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl overflow-hidden border border-[#1a2e29]/10 shadow-lg">
            <div className="p-8 md:p-12">
              <div className="text-sm uppercase tracking-wider text-[#23AACA] mb-4">CASE STUDY</div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-[#1a2e29]">
                How AR try-on reduced returns by 38% for a furniture retailer
              </h3>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-2xl font-bold text-[#23AACA] mb-2">38% reduction</div>
                  <div className="text-sm text-[#1a2e29]/60">In product returns and exchanges</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#23AACA] mb-2">3.2x increase</div>
                  <div className="text-sm text-[#1a2e29]/60">In average time spent on product pages</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#23AACA] mb-2">156% ROI</div>
                  <div className="text-sm text-[#1a2e29]/60">Within 6 months of launch</div>
                </div>
              </div>
              <p className="text-[#1a2e29]/70 mb-6">
                A high-end furniture retailer was struggling with a 22% return rate due to size and style mismatches. We developed WebAR "see it in your space" experiences for their top 200 SKUs, allowing customers to visualize furniture in their actual rooms before purchasing. The results were immediate: returns dropped 38%, conversion rates increased 27%, and average order value grew 15%. Customers who used AR were 2.7x more likely to complete a purchase.
              </p>
              <div className="flex flex-wrap gap-3">
                {['WebAR Development', '3D Modeling', 'Product Visualization', 'iOS/Android Compatible', 'Real-time Rendering'].map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-[#23AACA]/10 text-[#23AACA] rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3D & AR Services */}
      <section className="py-16 bg-[#f5f0e6] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-10">
          <div className="text-sm uppercase tracking-wider text-[#23AACA] mb-3">3D & AR SERVICES</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1a2e29]">
            From concept. <span className="italic text-orange-500">To reality.</span>
          </h2>
          <p className="text-lg text-[#1a2e29]/60 max-w-2xl">
            Photorealistic 3D models, interactive AR experiences, and immersive web applications
          </p>
        </div>

        <div className="relative">
          <ScrollableCards>
            {[
              { 
                name: "3D Product Modeling", 
                desc: "Photorealistic 3D models for e-commerce, marketing, web experiences. Interactive 360° views, zoom, color variants.",
                icon: BoxIcon,
                features: ["360° rotation", "Color variants", "Zoom & detail", "WebGL optimized"]
              },
              { 
                name: "AR Try-On Experiences", 
                desc: "Virtual try-on for furniture, fashion, cosmetics, eyewear. iOS/Android AR apps, WebAR for browsers.",
                icon: Smartphone,
                features: ["See in your space", "Virtual try-on", "WebAR (browser)", "iOS/Android apps"]
              },
              { 
                name: "Virtual Showrooms", 
                desc: "Immersive 3D spaces for product exploration. Virtual stores, car configurators, real estate tours.",
                icon: Package,
                features: ["Virtual tours", "Product configurators", "VR headset compatible", "Interactive navigation"]
              },
              { 
                name: "3D Animation & Walkthroughs", 
                desc: "Product reveals, exploded views, assembly animations. Architectural walkthroughs, interior tours.",
                icon: Layers,
                features: ["Product reveals", "Exploded views", "Assembly guides", "Architectural tours"]
              },
              { 
                name: "WebGL Experiences", 
                desc: "Interactive 3D web experiences using Three.js, Babylon.js. Gamified product configurators, interactive storytelling.",
                icon: Sparkles,
                features: ["Product configurators", "Interactive storytelling", "Data visualization", "Custom WebGL"]
              },
              { 
                name: "VR & Metaverse Content", 
                desc: "Virtual reality experiences for Oculus, Meta Quest, WebXR. Metaverse activations, virtual events, branded spaces.",
                icon: Glasses,
                features: ["VR experiences", "Metaverse activations", "Virtual events", "WebXR compatible"]
              },
            ].map((service, i) => (
              <div key={i} className="flex-none w-[340px] md:w-[420px] group" data-testid={`card-service-${i}`}>
                <div className="bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-[#1a2e29]/10 h-full hover:-translate-y-2">
                  <div className="relative h-48 bg-gradient-to-br from-[#23AACA]/10 via-[#c4ff4d]/10 to-orange-500/10 overflow-hidden flex items-center justify-center">
                    <service.icon className="h-16 w-16 text-[#23AACA]/40 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-[#1a2e29] group-hover:text-[#23AACA] transition-colors">{service.name}</h3>
                    <p className="text-sm text-[#1a2e29]/60 mb-4">{service.desc}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm text-[#1a2e29]">
                          <CheckCircle2 className="h-4 w-4 text-[#23AACA]" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </ScrollableCards>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 px-4 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              How we work: <span className="italic text-[#c4ff4d]">Concept to immersive reality</span>
            </h2>
            <p className="text-lg text-white/70">
              From initial 3D models to fully interactive AR experiences
            </p>
          </div>

          <div className="space-y-6">
            {[
              { step: "01", title: "Asset Collection & Modeling", desc: "We start with product photos, CAD files, or physical samples. Our 3D artists create photorealistic models with accurate textures, materials, and lighting. Every detail matters—from fabric weave to surface reflections." },
              { step: "02", title: "Interactive Development", desc: "Transform static 3D models into interactive experiences. 360° rotation, color variants, zoom capabilities, AR placement. Optimize for fast loading and smooth interactions across all devices and browsers." },
              { step: "03", title: "Testing & Deployment", desc: "Rigorous testing on iOS, Android, desktop browsers, VR headsets. Performance optimization, cross-device compatibility, analytics integration. We don't launch until it's flawless across every platform." },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start p-6 md:p-8 bg-zinc-900 rounded-xl border border-zinc-800 hover:shadow-lg transition-all duration-300 hover:-translate-x-2" data-testid={`step-${i}`}>
                <div className="text-5xl font-bold text-[#23AACA]/30 flex-shrink-0">{item.step}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                  <p className="text-sm text-white/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Service Is For */}
      <section className="py-20 px-4 bg-[#f5f0e6]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-[#23AACA] mb-4">WHO THIS IS FOR</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1a2e29]">
              Perfect for <span className="italic text-orange-500">innovative brands</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-[#1a2e29]/10" data-testid="use-case-ecommerce">
              <h3 className="text-xl font-bold mb-4 text-[#1a2e29]">E-commerce & Retail</h3>
              <p className="text-[#1a2e29]/70 mb-4">
                Reduce returns and increase conversions with AR try-on. Let customers visualize products in their space before buying.
              </p>
              <ul className="space-y-2 text-sm text-[#1a2e29]/70">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>AR product visualization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Virtual try-on experiences</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>360° product views</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 border border-[#1a2e29]/10" data-testid="use-case-furniture">
              <h3 className="text-xl font-bold mb-4 text-[#1a2e29]">Furniture & Home Decor</h3>
              <p className="text-[#1a2e29]/70 mb-4">
                Help customers visualize furniture in their homes. AR placement experiences that reduce returns and boost confidence.
              </p>
              <ul className="space-y-2 text-sm text-[#1a2e29]/70">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>"See it in your space" AR</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Room planning tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>3D product configurators</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 border border-[#1a2e29]/10" data-testid="use-case-realestate">
              <h3 className="text-xl font-bold mb-4 text-[#1a2e29]">Real Estate & Architecture</h3>
              <p className="text-[#1a2e29]/70 mb-4">
                Showcase properties with immersive virtual tours. 3D walkthroughs that engage buyers and drive qualified leads.
              </p>
              <ul className="space-y-2 text-sm text-[#1a2e29]/70">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Virtual property tours</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Architectural visualizations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Interactive floor plans</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 border border-[#1a2e29]/10" data-testid="use-case-automotive">
              <h3 className="text-xl font-bold mb-4 text-[#1a2e29]">Automotive</h3>
              <p className="text-[#1a2e29]/70 mb-4">
                Let customers explore and configure vehicles in 3D. Interactive car configurators and virtual showrooms.
              </p>
              <ul className="space-y-2 text-sm text-[#1a2e29]/70">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>3D vehicle configurators</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Virtual test drives</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Feature exploration tools</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 border border-[#1a2e29]/10" data-testid="use-case-fashion">
              <h3 className="text-xl font-bold mb-4 text-[#1a2e29]">Fashion & Accessories</h3>
              <p className="text-[#1a2e29]/70 mb-4">
                Virtual try-on for glasses, jewelry, clothing. AR experiences that increase engagement and reduce returns.
              </p>
              <ul className="space-y-2 text-sm text-[#1a2e29]/70">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Virtual try-on (glasses, jewelry)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Fit & sizing visualization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Style recommendations</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 border border-[#1a2e29]/10" data-testid="use-case-education">
              <h3 className="text-xl font-bold mb-4 text-[#1a2e29]">Education & Museums</h3>
              <p className="text-[#1a2e29]/70 mb-4">
                Create immersive learning experiences. Virtual exhibits, interactive 3D models, and educational VR content.
              </p>
              <ul className="space-y-2 text-sm text-[#1a2e29]/70">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Virtual museum tours</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Interactive 3D models</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Educational VR experiences</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 px-4 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-[#23AACA] mb-4">ENHANCE YOUR EXPERIENCE</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Combine with <span className="italic text-[#c4ff4d]">complementary services</span>
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              3D and AR work best as part of a complete digital experience strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/web-design">
              <div className="group p-8 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-[#23AACA] hover:shadow-xl transition-all duration-300 cursor-pointer" data-testid="related-service-web">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#23AACA] transition-colors">Web Design & Development</h3>
                  <ArrowRight className="h-5 w-5 text-[#23AACA] group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-white/70 mb-4">
                  Integrate 3D and AR experiences into beautiful, high-performing websites. Seamless user experiences.
                </p>
              </div>
            </Link>

            <Link href="/services/paid-advertising">
              <div className="group p-8 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-[#23AACA] hover:shadow-xl transition-all duration-300 cursor-pointer" data-testid="related-service-paid">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#23AACA] transition-colors">Paid Advertising</h3>
                  <ArrowRight className="h-5 w-5 text-[#23AACA] group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-white/70 mb-4">
                  Drive traffic to your 3D and AR experiences. Showcase immersive content in high-impact ad campaigns.
                </p>
              </div>
            </Link>

            <Link href="/services/social-media-creative">
              <div className="group p-8 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-[#23AACA] hover:shadow-xl transition-all duration-300 cursor-pointer" data-testid="related-service-creative">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#23AACA] transition-colors">Creative Production</h3>
                  <ArrowRight className="h-5 w-5 text-[#23AACA] group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-white/70 mb-4">
                  Create marketing assets that showcase your 3D and AR experiences. Video demos and social content.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={immersive3DFAQs} title="Frequently Asked Questions" subtitle="Everything you need to know about 3D and AR" schemaId="faq-3d-ar" />

      {/* CTA */}
      <section className="py-20 px-4 relative overflow-hidden bg-[#23AACA]">
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to build immersive experiences?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let's create 3D and AR experiences that captivate customers, reduce returns, and drive conversions. Interactive product visualization that sells.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-[#c4ff4d] text-[#1a2e29] hover:bg-[#c4ff4d]/90" data-testid="button-cta-primary">
              Start Your Project
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20" data-testid="button-cta-secondary">
              See Live Demos
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
