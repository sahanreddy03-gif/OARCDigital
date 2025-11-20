import { companyInfo, aboutText, coreServices, whyChooseUs, processSteps, caseStudies, technologyStack, clientTestimonials, targetIndustries } from "@/data/companyProfile";
import { Palette, Users, TrendingUp, Zap, Target, Clock, Globe, Cpu, Mail, Phone, MapPin, Globe2 } from "lucide-react";
import "../styles/pdf.css";
import logoImage from "@assets/fdfdfd_1762818183304.png";
import SEOHead from "@/components/SEOHead";
import { pdfPagesSEO } from "@/data/seoMetadata";

const iconMap: Record<string, any> = {
  palette: Palette,
  users: Users,
  "trending-up": TrendingUp,
  zap: Zap,
  target: Target,
  clock: Clock,
  globe: Globe,
  cpu: Cpu
};

export default function PDFCompanyProfile() {
  return (
    <>
      <SEOHead
        title={pdfPagesSEO.companyProfile.title}
        description={pdfPagesSEO.companyProfile.description}
        canonicalUrl={`https://oarcdigital.com${pdfPagesSEO.companyProfile.path}`}
        ogType={pdfPagesSEO.companyProfile.ogType}
      />
      <div className="pdf-document">
      {/* COVER PAGE */}
      <div className="pdf-page pdf-cover">
        <div>
          <img src={logoImage} alt="OARC Digital" className="pdf-logo" />
          <h1 className="pdf-cover-title">
            AI-Powered Marketing,<br />
            Measurable Results
          </h1>
          <p className="pdf-cover-subtitle">{companyInfo.tagline}</p>
          <p className="pdf-cover-tagline">
            {aboutText.main}
          </p>
        </div>
        <div className="pdf-cover-footer">
          <div className="pdf-cover-website">{companyInfo.website}</div>
          <div style={{ fontSize: '14px', color: '#666' }}>
            {companyInfo.location} • Established {companyInfo.founded}
          </div>
        </div>
      </div>

      {/* PAGE 2: ABOUT US */}
      <div className="pdf-page pdf-content-page">
        <div className="pdf-header">
          <img src={logoImage} alt="OARC Digital" className="pdf-header-logo" />
          <div className="pdf-page-number">02</div>
        </div>
        
        <h2 className="pdf-section-title">About OARC Digital</h2>
        <p className="pdf-section-subtitle">
          Your trusted partner for AI-driven marketing excellence in Malta and across Europe.
        </p>
        
        <div style={{ marginBottom: '50px' }}>
          <p style={{ fontSize: '18px', color: '#e0e0e0', lineHeight: '1.8', marginBottom: '30px' }}>
            {aboutText.mission}
          </p>
        </div>

        <div className="mb-large">
          <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#00FF9C', marginBottom: '30px' }}>
            What Makes Us Different
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '25px' }}>
            {whyChooseUs.slice(0, 4).map((item, idx) => (
              <div key={idx} style={{ 
                background: 'rgba(255, 90, 0, 0.05)', 
                border: '1px solid rgba(255, 90, 0, 0.2)', 
                borderRadius: '12px', 
                padding: '25px' 
              }}>
                <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#FF5A00', marginBottom: '10px' }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: '14px', color: '#a0a0a0', lineHeight: '1.6', margin: 0 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="pdf-footer">
          <div className="pdf-footer-text">OARC Digital • {companyInfo.tagline}</div>
          <div className="pdf-footer-text">{companyInfo.website}</div>
        </div>
      </div>

      {/* PAGE 3: OUR SERVICES */}
      <div className="pdf-page pdf-content-page">
        <div className="pdf-header">
          <img src={logoImage} alt="OARC Digital" className="pdf-header-logo" />
          <div className="pdf-page-number">03</div>
        </div>
        
        <h2 className="pdf-section-title">Our Services</h2>
        <p className="pdf-section-subtitle">
          Three integrated pillars powering your business growth with AI.
        </p>

        <div className="pdf-services-grid">
          {coreServices.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div key={service.id} className="pdf-service-card">
                <div className="pdf-service-icon">
                  <Icon size={24} color="#FF5A00" />
                </div>
                <h3 className="pdf-service-title">{service.title}</h3>
                <p className="pdf-service-description">{service.description}</p>
                <ul className="pdf-service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div style={{ 
          background: 'linear-gradient(135deg, rgba(0, 255, 156, 0.1) 0%, rgba(255, 90, 0, 0.1) 100%)', 
          border: '1px solid rgba(255, 255, 255, 0.1)', 
          borderRadius: '16px', 
          padding: '30px', 
          marginTop: '40px' 
        }}>
          <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#ffffff', marginBottom: '15px' }}>
            Integrated Approach
          </h3>
          <p style={{ fontSize: '15px', color: '#a0a0a0', lineHeight: '1.7', margin: 0 }}>
            Unlike traditional agencies that silo creative, technology, and analytics—we integrate all three from day one. 
            Our AI systems power creativity, automate workflows, and optimize revenue in a single unified platform.
          </p>
        </div>

        <div className="pdf-footer">
          <div className="pdf-footer-text">OARC Digital • {companyInfo.tagline}</div>
          <div className="pdf-footer-text">{companyInfo.website}</div>
        </div>
      </div>

      {/* PAGE 4: OUR PROCESS */}
      <div className="pdf-page pdf-content-page">
        <div className="pdf-header">
          <img src={logoImage} alt="OARC Digital" className="pdf-header-logo" />
          <div className="pdf-page-number">04</div>
        </div>
        
        <h2 className="pdf-section-title">The 4D Framework</h2>
        <p className="pdf-section-subtitle">
          Discover → Design → Deploy → Dominate
        </p>

        <div className="pdf-process-grid">
          {processSteps.map((step) => (
            <div key={step.number} className="pdf-process-step">
              <div className="pdf-process-number">{step.number}</div>
              <h3 className="pdf-process-title">{step.title}</h3>
              <p className="pdf-process-description">{step.description}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '60px' }}>
          <h3 style={{ fontSize: '28px', fontWeight: '700', color: '#00FF9C', marginBottom: '30px' }}>
            Why Our Process Works
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>
            {whyChooseUs.slice(4).map((item, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '15px' }}>
                <div style={{ 
                  width: '6px', 
                  height: '6px', 
                  borderRadius: '50%', 
                  background: '#FF5A00', 
                  marginTop: '8px', 
                  flexShrink: 0 
                }} />
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#ffffff', marginBottom: '8px' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '14px', color: '#a0a0a0', lineHeight: '1.6', margin: 0 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pdf-footer">
          <div className="pdf-footer-text">OARC Digital • {companyInfo.tagline}</div>
          <div className="pdf-footer-text">{companyInfo.website}</div>
        </div>
      </div>

      {/* PAGES 5-7: CASE STUDIES */}
      {caseStudies.slice(0, 3).map((caseStudy, caseIdx) => (
        <div key={caseIdx} className="pdf-page pdf-content-page">
          <div className="pdf-header">
            <img src={logoImage} alt="OARC Digital" className="pdf-header-logo" />
            <div className="pdf-page-number">{String(5 + caseIdx).padStart(2, '0')}</div>
          </div>
          
          <h2 className="pdf-section-title">Case Study</h2>
          
          <div className="pdf-case-study">
            <div className="pdf-case-header">
              <div>
                <h3 className="pdf-case-client">{caseStudy.client}</h3>
                <div className="pdf-case-industry">{caseStudy.industry}</div>
              </div>
              <div className="pdf-case-location">{caseStudy.location}</div>
            </div>

            <div className="pdf-case-content">
              <div style={{ marginBottom: '25px' }}>
                <div className="pdf-case-label">Challenge</div>
                <p className="pdf-case-text">{caseStudy.challenge}</p>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <div className="pdf-case-label">Solution</div>
                <p className="pdf-case-text">{caseStudy.solution}</p>
              </div>

              <div className="pdf-case-label">Results</div>
              <div className="pdf-case-results">
                {caseStudy.results.map((result, idx) => (
                  <div key={idx} className="pdf-result-card">
                    <div className="pdf-result-value">{result.value}</div>
                    <div className="pdf-result-metric">{result.metric}</div>
                    <div className="pdf-result-period">{result.period}</div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '30px' }}>
                <div className="pdf-case-label">Technologies Used</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '15px' }}>
                  {caseStudy.technologies.map((tech, idx) => (
                    <span key={idx} style={{ 
                      background: 'rgba(0, 255, 156, 0.1)', 
                      border: '1px solid rgba(0, 255, 156, 0.3)', 
                      padding: '8px 16px', 
                      borderRadius: '20px', 
                      fontSize: '13px', 
                      color: '#00FF9C', 
                      fontWeight: '600' 
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {caseStudy.testimonial && (
                <div className="pdf-testimonial">
                  "{caseStudy.testimonial}"
                </div>
              )}
            </div>
          </div>

          <div className="pdf-footer">
            <div className="pdf-footer-text">OARC Digital • {companyInfo.tagline}</div>
            <div className="pdf-footer-text">{companyInfo.website}</div>
          </div>
        </div>
      ))}

      {/* PAGE 8: TECHNOLOGY STACK */}
      <div className="pdf-page pdf-content-page">
        <div className="pdf-header">
          <img src={logoImage} alt="OARC Digital" className="pdf-header-logo" />
          <div className="pdf-page-number">08</div>
        </div>
        
        <h2 className="pdf-section-title">Technology & Tools</h2>
        <p className="pdf-section-subtitle">
          Best-in-class AI and automation platforms powering your growth.
        </p>

        <div className="mb-large">
          <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#FF5A00', marginBottom: '20px' }}>
            AI Creative Suite
          </h3>
          <div className="pdf-tech-grid">
            {technologyStack.aiCreative.map((tech, idx) => (
              <div key={idx} className="pdf-tech-item">
                <div className="pdf-tech-name">{tech.name}</div>
                <div className="pdf-tech-category">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-large">
          <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#FF5A00', marginBottom: '20px' }}>
            Automation Platforms
          </h3>
          <div className="pdf-tech-grid">
            {technologyStack.automation.map((tech, idx) => (
              <div key={idx} className="pdf-tech-item">
                <div className="pdf-tech-name">{tech.name}</div>
                <div className="pdf-tech-category">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-large">
          <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#FF5A00', marginBottom: '20px' }}>
            Analytics & Data
          </h3>
          <div className="pdf-tech-grid">
            {technologyStack.analytics.map((tech, idx) => (
              <div key={idx} className="pdf-tech-item">
                <div className="pdf-tech-name">{tech.name}</div>
                <div className="pdf-tech-category">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="pdf-footer">
          <div className="pdf-footer-text">OARC Digital • {companyInfo.tagline}</div>
          <div className="pdf-footer-text">{companyInfo.website}</div>
        </div>
      </div>

      {/* PAGE 9: CLIENT TESTIMONIALS & INDUSTRIES */}
      <div className="pdf-page pdf-content-page">
        <div className="pdf-header">
          <img src={logoImage} alt="OARC Digital" className="pdf-header-logo" />
          <div className="pdf-page-number">09</div>
        </div>
        
        <h2 className="pdf-section-title">What Clients Say</h2>
        
        <div className="mb-large">
          {clientTestimonials.map((testimonial, idx) => (
            <div key={idx} style={{ 
              background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)', 
              border: '1px solid rgba(255, 255, 255, 0.1)', 
              borderRadius: '16px', 
              padding: '30px', 
              marginBottom: '25px' 
            }}>
              <p style={{ fontSize: '16px', color: '#e0e0e0', fontStyle: 'italic', lineHeight: '1.8', marginBottom: '20px' }}>
                "{testimonial.quote}"
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: '700', color: '#ffffff' }}>
                    {testimonial.author}
                  </div>
                  <div style={{ fontSize: '13px', color: '#a0a0a0' }}>
                    {testimonial.position}, {testimonial.company}
                  </div>
                </div>
                <div style={{ fontSize: '13px', color: '#FF5A00', fontWeight: '600' }}>
                  {testimonial.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#00FF9C', marginBottom: '20px' }}>
            Industries We Serve
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px' }}>
            {targetIndustries.map((industry, idx) => (
              <div key={idx} style={{ 
                background: 'rgba(0, 255, 156, 0.05)', 
                border: '1px solid rgba(0, 255, 156, 0.2)', 
                borderRadius: '8px', 
                padding: '15px', 
                textAlign: 'center', 
                fontSize: '14px', 
                color: '#ffffff', 
                fontWeight: '600' 
              }}>
                {industry}
              </div>
            ))}
          </div>
        </div>

        <div className="pdf-footer">
          <div className="pdf-footer-text">OARC Digital • {companyInfo.tagline}</div>
          <div className="pdf-footer-text">{companyInfo.website}</div>
        </div>
      </div>

      {/* PAGE 10: CONTACT */}
      <div className="pdf-page pdf-content-page">
        <div className="pdf-header">
          <img src={logoImage} alt="OARC Digital" className="pdf-header-logo" />
          <div className="pdf-page-number">10</div>
        </div>
        
        <h2 className="pdf-section-title">Let's Build Something Intelligent Together</h2>
        <p className="pdf-section-subtitle">
          Ready to transform your marketing with AI? Get in touch today.
        </p>

        <div className="pdf-contact-section">
          <div className="pdf-contact-grid">
            <div className="pdf-contact-item">
              <div className="pdf-contact-icon">
                <Mail size={20} color="#FF5A00" />
              </div>
              <div>
                <div className="pdf-contact-label">Email</div>
                <div className="pdf-contact-value">{companyInfo.email}</div>
              </div>
            </div>

            <div className="pdf-contact-item">
              <div className="pdf-contact-icon">
                <Phone size={20} color="#FF5A00" />
              </div>
              <div>
                <div className="pdf-contact-label">Phone</div>
                <div className="pdf-contact-value">{companyInfo.phone}</div>
              </div>
            </div>

            <div className="pdf-contact-item">
              <div className="pdf-contact-icon">
                <MapPin size={20} color="#FF5A00" />
              </div>
              <div>
                <div className="pdf-contact-label">Location</div>
                <div className="pdf-contact-value">{companyInfo.location}</div>
              </div>
            </div>

            <div className="pdf-contact-item">
              <div className="pdf-contact-icon">
                <Globe2 size={20} color="#FF5A00" />
              </div>
              <div>
                <div className="pdf-contact-label">Website</div>
                <div className="pdf-contact-value">{companyInfo.website}</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ 
          background: 'linear-gradient(135deg, rgba(255, 90, 0, 0.15) 0%, rgba(0, 255, 156, 0.15) 100%)', 
          border: '2px solid rgba(255, 90, 0, 0.3)', 
          borderRadius: '20px', 
          padding: '50px', 
          marginTop: '80px', 
          textAlign: 'center' 
        }}>
          <h3 style={{ fontSize: '32px', fontWeight: '800', color: '#ffffff', marginBottom: '20px' }}>
            The Future of Marketing is Intelligent
          </h3>
          <p style={{ fontSize: '18px', color: '#a0a0a0', maxWidth: '600px', margin: '0 auto 30px auto', lineHeight: '1.7' }}>
            At OARC Digital, we believe creativity is data in motion—powered by AI. Our systems are designed not just to automate, but to accelerate your growth.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '30px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '40px', fontWeight: '800', color: '#FF5A00', marginBottom: '5px' }}>Malta</div>
              <div style={{ fontSize: '14px', color: '#666' }}>Headquartered</div>
            </div>
            <div style={{ width: '2px', background: 'rgba(255, 255, 255, 0.1)' }} />
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '40px', fontWeight: '800', color: '#00FF9C', marginBottom: '5px' }}>Europe</div>
              <div style={{ fontSize: '14px', color: '#666' }}>Market Reach</div>
            </div>
            <div style={{ width: '2px', background: 'rgba(255, 255, 255, 0.1)' }} />
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '40px', fontWeight: '800', color: '#FF5A00', marginBottom: '5px' }}>2024</div>
              <div style={{ fontSize: '14px', color: '#666' }}>Established</div>
            </div>
          </div>
        </div>

        <div className="pdf-footer">
          <div className="pdf-footer-text">© 2024 OARC Digital • All Rights Reserved</div>
          <div className="pdf-footer-text">{companyInfo.website}</div>
        </div>
      </div>

      {/* Print Instructions (No Print) */}
      <div className="no-print" style={{ 
        position: 'fixed', 
        top: '20px', 
        right: '20px', 
        background: '#1a1a1a', 
        border: '2px solid #FF5A00', 
        borderRadius: '12px', 
        padding: '20px', 
        maxWidth: '300px', 
        zIndex: 1000 
      }}>
        <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#FF5A00', marginBottom: '10px' }}>
          Print to PDF Instructions
        </h3>
        <ol style={{ fontSize: '13px', color: '#a0a0a0', lineHeight: '1.6', margin: 0, paddingLeft: '20px' }}>
          <li>Press Ctrl+P (or Cmd+P on Mac)</li>
          <li>Select "Save as PDF"</li>
          <li>Choose A4 paper size</li>
          <li>Set margins to "None"</li>
          <li>Enable "Background graphics"</li>
          <li>Click Save</li>
        </ol>
      </div>
      </div>
    </>
  );
}
