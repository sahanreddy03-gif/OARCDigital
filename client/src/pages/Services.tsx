import Layout from "@/components/layout/Layout";
import { ArrowRight } from "lucide-react";

const services = [
  { slug: "hire-ai-employees", title: "Hire AI Employees", category: "OARC Solutions", available: true },
  { slug: "revenue-automation", title: "Revenue Automation & Growth", category: "OARC Solutions", available: true },
  { slug: "web-design", title: "Web Design & Landing Pages", category: "Creative Services", available: true },
  { slug: "ad-creative", title: "Ad Creative", category: "Creative Services", available: true },
  { slug: "social-media-creative", title: "Social Media Creative", category: "Creative Services", available: true },
  { slug: "branding-identity", title: "Branding & Identity", category: "Creative Services", available: false },
  { slug: "presentation-pitch", title: "Presentation & Pitch", category: "Creative Services", available: false },
  { slug: "illustration", title: "Illustration", category: "Creative Services", available: false },
  { slug: "print-packaging", title: "Print & Packaging", category: "Creative Services", available: false },
  { slug: "video-production", title: "Video Production", category: "Creative Services", available: false },
  { slug: "motion-design", title: "Motion Design", category: "Creative Services", available: false },
  { slug: "immersive-3d-ar", title: "Immersive / 3D / AR", category: "Creative Services", available: false },
  { slug: "email-creative", title: "Email Creative", category: "Creative Services", available: false },
  { slug: "design-systems", title: "Design Systems", category: "Creative Services", available: false },
  { slug: "ai-powered-creative", title: "AI-Powered Creative", category: "AI Services", available: false },
  { slug: "ai-consulting", title: "AI Consulting", category: "AI Services", available: false },
  { slug: "growth-marketing", title: "Growth & Performance Marketing", category: "Marketing Services", available: false },
  { slug: "paid-media", title: "Paid Media & AdOps", category: "Marketing Services", available: false },
  { slug: "organic-social", title: "Organic Social Strategy", category: "Marketing Services", available: false },
];

const categories = Array.from(new Set(services.map(s => s.category)));

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From AI-powered automation to creative excellence—discover how we transform businesses through innovation and results.
          </p>
        </div>
      </section>

      {/* Services by Category */}
      <section className="py-20 px-4 bg-white">
        {categories.map((category, catIndex) => (
          <div key={category} className={`max-w-6xl mx-auto ${catIndex > 0 ? 'mt-20' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services
                .filter(s => s.category === category)
                .map(service => (
                  <a
                    key={service.slug}
                    href={service.available ? `/services/${service.slug}` : '#'}
                    className={`group p-6 rounded-xl border-2 transition-all duration-200 ${
                      service.available
                        ? 'border-gray-200 hover:border-[#c4ff4d] hover:shadow-lg cursor-pointer'
                        : 'border-gray-100 bg-gray-50 cursor-not-allowed opacity-60'
                    }`}
                    data-testid={`service-card-${service.slug}`}
                  >
                    <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-[#ea580c] transition-colors">
                      {service.title}
                    </h3>
                    {service.available ? (
                      <div className="flex items-center gap-2 text-[#ea580c] font-semibold text-sm">
                        Learn more <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    ) : (
                      <div className="text-sm text-gray-500 font-medium">
                        Coming in Phase 3
                      </div>
                    )}
                  </a>
                ))}
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Not sure which service you need?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's talk about your goals and find the perfect solution.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#c4ff4d] text-gray-900 px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#b3e842] transition-colors"
            data-testid="button-contact-cta"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </Layout>
  );
}
