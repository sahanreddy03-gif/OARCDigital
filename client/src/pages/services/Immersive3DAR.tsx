import { useEffect } from "react";
import { Link } from "wouter";
import { Box as BoxIcon, Smartphone, Glasses, Package, Layers, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

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
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-[hsl(200,75%,45%)] via-[hsl(210,70%,50%)] to-[hsl(220,75%,55%)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
            Step into the <span className="italic">next dimension</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            3D product modeling, augmented reality experiences, virtual showrooms, and immersive web design. We build the future of digital experiences.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-[hsl(200,75%,45%)]" data-testid="button-get-started">
              Explore 3D & AR
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white" data-testid="button-view-demos">
              View Demos
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
            {['E-commerce', 'Real Estate', 'Automotive', 'Furniture', 'Consumer Electronics', 'Fashion & Apparel'].map((type, i) => (
              <div key={i} className="text-lg md:text-xl font-bold text-foreground">{type}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-wider text-[hsl(200,75%,45%)] mb-4">MEASURABLE IMPACT</div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Immersive experiences. <span className="italic text-[hsl(220,75%,55%)]">Real results.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              3D and AR drive engagement, reduce returns, and increase conversions by letting customers interact with products before they buy.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {[
              { value: "94%", label: "Higher engagement with 3D product views" },
              { value: "40%", label: "Return rate reduction with AR try-on" },
              { value: "2.7x", label: "Longer time on site with 3D models" },
              { value: "850+", label: "3D assets and AR experiences created" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-[hsl(200,10%,98%)] rounded-xl" data-testid={`metric-${i}`}>
                <div className="text-5xl font-bold text-[hsl(200,75%,45%)] mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-[hsl(200,10%,98%)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="text-sm uppercase tracking-wider text-[hsl(200,75%,45%)] mb-4">3D & AR SERVICES</div>
          <h2 className="text-5xl md:text-6xl font-bold">
            From concept. <span className="italic text-[hsl(220,75%,55%)]">To reality.</span>
          </h2>
        </div>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-6 px-4 scrollbar-hide snap-x snap-mandatory">
            {[
              { name: "3D Product Modeling", desc: "Photorealistic 3D models for e-commerce, marketing, and web experiences. Interactive 360° views, zoom, color variants. WebGL-optimized for fast loading.", icon: BoxIcon },
              { name: "AR Try-On Experiences", desc: "Virtual try-on for furniture, fashion, cosmetics, eyewear. iOS/Android AR apps, WebAR for browsers. \"See it in your space\" features that drive conversions.", icon: Smartphone },
              { name: "Virtual Showrooms", desc: "Immersive 3D spaces for product exploration. Virtual stores, car configurators, real estate tours. Navigate with mouse/touch, VR headset compatible.", icon: Package },
              { name: "3D Animation & Walkthroughs", desc: "Product reveals, exploded views, assembly animations. Architectural walkthroughs, interior tours. Cinema-quality renders for marketing and sales.", icon: Layers },
              { name: "WebGL Experiences", desc: "Interactive 3D web experiences using Three.js, Babylon.js, and custom WebGL. Gamified product configurators, interactive storytelling, data visualization in 3D.", icon: Sparkles },
              { name: "VR & Metaverse Content", desc: "Virtual reality experiences for Oculus, Meta Quest, WebXR. Metaverse activations, virtual events, branded spaces in Decentraland/Sandbox.", icon: Glasses },
            ].map((service, i) => (
              <div key={i} className="flex-none w-[360px] md:w-[480px] snap-center group" data-testid={`card-service-${i}`}>
                <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-border h-full">
                  <div className="relative h-[300px] md:h-[350px] bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-100 overflow-hidden flex items-center justify-center">
                    <service.icon className="h-24 w-24 text-[hsl(200,75%,45%)]/20" />
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
      <section className="py-20 px-4 bg-gradient-to-br from-[hsl(200,75%,45%)] to-[hsl(220,75%,55%)] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to build immersive experiences?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's create 3D and AR experiences that captivate customers and drive conversions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-[hsl(200,75%,45%)]" data-testid="button-cta-primary">
              Start Your Project
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white" data-testid="button-cta-secondary">
              See Live Demos
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
