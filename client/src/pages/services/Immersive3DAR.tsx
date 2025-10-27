import { useEffect } from "react";
import { Link } from "wouter";
import { Box as BoxIcon, Smartphone, Glasses, Package, Layers, Sparkles, CheckCircle2, Eye, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollableCards } from "@/components/ui/scrollable-cards";
import Layout from "@/components/layout/Layout";
import heroImage from "@assets/stock_images/virtual_reality_vr_h_6d01f361.jpg";

export default function Immersive3DAR() {
  useEffect(() => {
    document.title = "Immersive 3D & AR Services - Virtual Experiences | OARC Digital";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "3D modeling, augmented reality experiences, virtual product tours, and immersive web experiences. Bring your products and ideas to life in 3D.");
    }
    // Open Graph tags - always update content
    let ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (!ogTitleMeta) {
      ogTitleMeta = document.createElement('meta');
      ogTitleMeta.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitleMeta);
    }
    ogTitleMeta.setAttribute('content', 'Immersive 3D & AR Services - Next-Gen Experiences | OARC Digital');
    
    let ogDescMeta = document.querySelector('meta[property="og:description"]');
    if (!ogDescMeta) {
      ogDescMeta = document.createElement('meta');
      ogDescMeta.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescMeta);
    }
    ogDescMeta.setAttribute('content', '3D modeling, AR experiences, and immersive web design. Bring your products to life in stunning detail.');
  }, []);

  return (
    <Layout>
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
            Step into the <span className="italic bg-gradient-to-r from-[hsl(200,75%,45%)] via-[hsl(210,70%,50%)] to-[hsl(220,75%,55%)] text-transparent bg-clip-text">next dimension</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            3D product modeling, AR try-on experiences, virtual showrooms, and immersive web design. We build interactive experiences that engage customers, reduce returns, and drive conversions—bringing your products to life before they buy.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button size="lg" className="bg-white text-[hsl(200,75%,45%)] hover:bg-white/90" data-testid="button-get-started">
              Explore 3D & AR
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20" data-testid="button-view-demos">
              View Live Demos
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 px-4 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-sm uppercase tracking-wider text-muted-foreground mb-8">
            Building immersive experiences for leading brands
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {['E-commerce Brands', 'Real Estate Firms', 'Furniture Retailers', 'Automotive', 'Museums & Galleries', 'Architecture Firms'].map((type, i) => (
              <div key={i} className="text-lg md:text-xl font-bold text-foreground">{type}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-[hsl(200,75%,45%)] mb-3">MEASURABLE IMPACT</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Immersive experiences. Real results.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              3D and AR drive engagement, reduce returns, and increase conversions by letting customers interact with products before purchase
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-10">
            {[
              { value: "94%", label: "Higher engagement with 3D views" },
              { value: "40%", label: "Return rate reduction (AR try-on)" },
              { value: "2.7x", label: "Longer time on site" },
              { value: "850+", label: "3D assets created" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-gradient-to-br from-[hsl(200,10%,98%)] to-white rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1" data-testid={`metric-${i}`}>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[hsl(200,75%,45%)] to-[hsl(220,75%,55%)] text-transparent bg-clip-text mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Spotlight */}
      <section className="py-16 px-4 bg-[hsl(200,10%,98%)]">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl overflow-hidden border border-border shadow-lg">
            <div className="p-8 md:p-12">
              <div className="text-sm uppercase tracking-wider text-[hsl(200,75%,45%)] mb-4">CASE STUDY</div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                How AR try-on reduced returns by 38% for a furniture retailer
              </h3>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-2xl font-bold text-[hsl(200,75%,45%)] mb-2">38% reduction</div>
                  <div className="text-sm text-muted-foreground">In product returns and exchanges</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[hsl(200,75%,45%)] mb-2">3.2x increase</div>
                  <div className="text-sm text-muted-foreground">In average time spent on product pages</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[hsl(200,75%,45%)] mb-2">156% ROI</div>
                  <div className="text-sm text-muted-foreground">Within 6 months of launch</div>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                A high-end furniture retailer was struggling with a 22% return rate due to size and style mismatches. We developed WebAR "see it in your space" experiences for their top 200 SKUs, allowing customers to visualize furniture in their actual rooms before purchasing. The results were immediate: returns dropped 38%, conversion rates increased 27%, and average order value grew 15%. Customers who used AR were 2.7x more likely to complete a purchase.
              </p>
              <div className="flex flex-wrap gap-3">
                {['WebAR Development', '3D Modeling', 'Product Visualization', 'iOS/Android Compatible', 'Real-time Rendering'].map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-[hsl(200,10%,95%)] text-[hsl(200,75%,45%)] rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3D & AR Services */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-10">
          <div className="text-sm uppercase tracking-wider text-[hsl(200,75%,45%)] mb-3">3D & AR SERVICES</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            From concept. <span className="italic text-[hsl(220,75%,55%)]">To reality.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
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
                <div className="bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-border h-full hover:-translate-y-2">
                  <div className="relative h-48 bg-gradient-to-br from-[hsl(200,75%,45%)]/10 via-[hsl(210,70%,50%)]/10 to-[hsl(220,75%,55%)]/10 overflow-hidden flex items-center justify-center">
                    <service.icon className="h-16 w-16 text-[hsl(200,75%,45%)]/30 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[hsl(200,75%,45%)] transition-colors">{service.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{service.desc}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-[hsl(200,75%,45%)]" />
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

      {/* Our Process */}
      <section className="py-16 px-4 bg-[hsl(200,10%,98%)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How we work: <span className="italic text-[hsl(220,75%,55%)]">Concept to immersive reality</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              From initial 3D models to fully interactive AR experiences
            </p>
          </div>

          <div className="space-y-6">
            {[
              { step: "01", title: "Asset Collection & Modeling", desc: "We start with product photos, CAD files, or physical samples. Our 3D artists create photorealistic models with accurate textures, materials, and lighting. Every detail matters—from fabric weave to surface reflections." },
              { step: "02", title: "Interactive Development", desc: "Transform static 3D models into interactive experiences. 360° rotation, color variants, zoom capabilities, AR placement. Optimize for fast loading and smooth interactions across all devices and browsers." },
              { step: "03", title: "Testing & Deployment", desc: "Rigorous testing on iOS, Android, desktop browsers, VR headsets. Performance optimization, cross-device compatibility, analytics integration. We don't launch until it's flawless across every platform." },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start p-6 md:p-8 bg-white rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-x-2" data-testid={`step-${i}`}>
                <div className="text-5xl font-bold text-[hsl(200,75%,45%)]/20 flex-shrink-0">{item.step}</div>
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
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(200,75%,45%)] via-[hsl(210,70%,50%)] to-[hsl(220,75%,55%)]"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to build immersive experiences?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let's create 3D and AR experiences that captivate customers, reduce returns, and drive conversions. Interactive product visualization that sells.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-[hsl(200,75%,45%)] hover:bg-white/90" data-testid="button-cta-primary">
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
