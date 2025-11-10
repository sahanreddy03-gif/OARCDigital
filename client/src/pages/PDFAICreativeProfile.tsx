import { companyInfo, aboutText, coreServices, caseStudies, technologyStack, processSteps } from "@/data/companyProfile";
import { Brain, Sparkles, BarChart3, Zap } from "lucide-react";
import "../styles/pdf.css";
import logoImage from "@assets/fdfdfd_1762818183304.png";

export default function PDFAICreativeProfile() {
  const aiCaseStudies = caseStudies.filter(cs => 
    cs.technologies.some(t => t.toLowerCase().includes('ai') || t.toLowerCase().includes('gpt'))
  );

  return (
    <div className="pdf-document">
      {/* COVER PAGE */}
      <div className="pdf-page pdf-cover">
        <div>
          <img src={logoImage} alt="OARC Digital" className="pdf-logo" />
          <h1 className="pdf-cover-title">
            Unlock 10X Growth<br />
            with Artificial Intelligence
          </h1>
          <p className="pdf-cover-subtitle">AI-Powered Creative & Automation Excellence</p>
          <p className="pdf-cover-tagline">
            Your business goals require innovative AI-driven solutions to complex marketing challenges. We are creative technologists who leverage AI to help you DOMINATE your market through intelligent automation, AI-generated content, and data-driven growth systems.
          </p>
        </div>
        <div className="pdf-cover-footer">
          <div className="pdf-cover-website">{companyInfo.website}</div>
          <div style={{ fontSize: '14px', color: '#666' }}>
            Malta's Premier AI Marketing Agency
          </div>
        </div>
      </div>

      {/* PAGE 2: AI TRANSFORMATION */}
      <div className="pdf-page pdf-content-page">
        <div className="pdf-header">
          <img src={logoImage} alt="OARC Digital" className="pdf-header-logo" />
          <div className="pdf-page-number">02</div>
        </div>
        
        <h2 className="pdf-section-title">The AI Advantage</h2>
        <p className="pdf-section-subtitle">
          Transform your business with intelligent systems that work 24/7.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px', marginBottom: '50px' }}>
          {[
            {
              icon: <Brain size={32} color="#FF5A00" />,
              title: "AI-Powered Automation",
              description: "Identify mundane, repeatable tasks and automate them with AI. Reduce costs while increasing output quality and speed."
            },
            {
              icon: <Sparkles size={32} color="#00FF9C" />,
              title: "Predictive Intelligence",
              description: "Forecast sales, understand customer behavior, and identify market trends before your competition does."
            },
            {
              icon: <BarChart3 size={32} color="#FF5A00" />,
              title: "Data-Driven Optimization",
              description: "Optimize inventory, cash flow, and processes at every level. Reduce costs, increase profitability exponentially."
            },
            {
              icon: <Zap size={32} color="#00FF9C" />,
              title: "Market Dominance",
              description: "Be more profitable, acquire more market share, and stay ahead with AI-driven innovation that competitors can't match."
            }
          ].map((item, idx) => (
            <div key={idx} style={{ 
              background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)', 
              border: '1px solid rgba(255, 90, 0, 0.2)', 
              borderRadius: '16px', 
              padding: '30px' 
            }}>
              <div style={{ marginBottom: '20px' }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#ffffff', marginBottom: '12px' }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '15px', color: '#a0a0a0', lineHeight: '1.7', margin: 0 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div style={{ 
          background: 'linear-gradient(135deg, rgba(255, 90, 0, 0.1) 0%, rgba(0, 255, 156, 0.1) 100%)', 
          border: '2px solid rgba(255, 90, 0, 0.3)', 
          borderRadius: '20px', 
          padding: '40px', 
          textAlign: 'center' 
        }}>
          <h3 style={{ fontSize: '28px', fontWeight: '800', color: '#ffffff', marginBottom: '15px' }}>
            We're the Trusted AI Partner
          </h3>
          <p style={{ fontSize: '16px', color: '#a0a0a0', maxWidth: '700px', margin: '0 auto', lineHeight: '1.7' }}>
            for businesses confidently facing the future. From AI-generated creative content to intelligent automation systems, we help you optimize current processes with ROI focus, then reach for clear, accomplishable AI-powered goals.
          </p>
        </div>

        <div className="pdf-footer">
          <div className="pdf-footer-text">OARC Digital • AI-Powered Marketing</div>
          <div className="pdf-footer-text">{companyInfo.website}</div>
        </div>
      </div>

      {/* PAGE 3: AI SERVICES */}
      <div className="pdf-page pdf-content-page">
        <div className="pdf-header">
          <img src={logoImage} alt="OARC Digital" className="pdf-header-logo" />
          <div className="pdf-page-number">03</div>
        </div>
        
        <h2 className="pdf-section-title">AI-Powered Services</h2>
        <p className="pdf-section-subtitle">
          Intelligent solutions for modern marketing challenges.
        </p>

        <div style={{ marginBottom: '50px' }}>
          {coreServices.map((service, idx) => (
            <div key={idx} style={{ 
              background: 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%)', 
              border: '1px solid rgba(0, 255, 156, 0.2)', 
              borderRadius: '16px', 
              padding: '35px', 
              marginBottom: '25px' 
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <div>
                  <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#ffffff', marginBottom: '8px' }}>
                    {service.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#00FF9C', fontWeight: '600', margin: 0 }}>
                    {service.subtitle}
                  </p>
                </div>
              </div>
              <p style={{ fontSize: '15px', color: '#a0a0a0', lineHeight: '1.7', marginBottom: '25px' }}>
                {service.description}
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                {service.features.map((feature, fIdx) => (
                  <div key={fIdx} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '10px', 
                    fontSize: '14px', 
                    color: '#ffffff' 
                  }}>
                    <div style={{ 
                      width: '6px', 
                      height: '6px', 
                      borderRadius: '50%', 
                      background: '#FF5A00', 
                      flexShrink: 0 
                    }} />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="pdf-footer">
          <div className="pdf-footer-text">OARC Digital • AI-Powered Marketing</div>
          <div className="pdf-footer-text">{companyInfo.website}</div>
        </div>
      </div>

      {/* PAGE 4: AI DELIVERY PIPELINE */}
      <div className="pdf-page pdf-content-page">
        <div className="pdf-header">
          <img src={logoImage} alt="OARC Digital" className="pdf-header-logo" />
          <div className="pdf-page-number">04</div>
        </div>
        
        <h2 className="pdf-section-title">AI Delivery Pipeline</h2>
        <p className="pdf-section-subtitle">
          From discovery to deployment—our proven AI implementation framework.
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
          <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#00FF9C', marginBottom: '30px' }}>
            AI Architecture Best Practices
          </h3>
          <div style={{ 
            background: 'rgba(0, 0, 0, 0.4)', 
            border: '1px solid rgba(255, 255, 255, 0.1)', 
            borderRadius: '16px', 
            padding: '35px' 
          }}>
            <p style={{ fontSize: '15px', color: '#e0e0e0', lineHeight: '1.8', marginBottom: '25px' }}>
              We define architectures that are scalable, reliable, and secure to serve your long-term growth goals. Using cloud-based practices for AI application development across AWS, Azure, and Google Cloud, we ensure:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
              {[
                { label: "Scalability", value: "Auto-scaling AI workloads based on demand" },
                { label: "Reliability", value: "99.9% uptime with redundancy and failover" },
                { label: "Security", value: "End-to-end encryption and compliance standards" },
                { label: "Performance", value: "Optimized response times and processing speed" }
              ].map((item, idx) => (
                <div key={idx}>
                  <div style={{ fontSize: '14px', fontWeight: '700', color: '#FF5A00', marginBottom: '6px' }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: '13px', color: '#a0a0a0', lineHeight: '1.6' }}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pdf-footer">
          <div className="pdf-footer-text">OARC Digital • AI-Powered Marketing</div>
          <div className="pdf-footer-text">{companyInfo.website}</div>
        </div>
      </div>

      {/* PAGES 5-6: AI CASE STUDIES */}
      {aiCaseStudies.slice(0, 2).map((caseStudy, caseIdx) => (
        <div key={caseIdx} className="pdf-page pdf-content-page">
          <div className="pdf-header">
            <img src={logoImage} alt="OARC Digital" className="pdf-header-logo" />
            <div className="pdf-page-number">{String(5 + caseIdx).padStart(2, '0')}</div>
          </div>
          
          <h2 className="pdf-section-title">AI Success Story</h2>
          
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
                <div className="pdf-case-label">Business Challenge</div>
                <p className="pdf-case-text">{caseStudy.challenge}</p>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <div className="pdf-case-label">AI-Powered Solution</div>
                <p className="pdf-case-text">{caseStudy.solution}</p>
              </div>

              <div className="pdf-case-label">Measurable Impact</div>
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
                <div className="pdf-case-label">AI Technologies Deployed</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '15px' }}>
                  {caseStudy.technologies.map((tech, idx) => (
                    <span key={idx} style={{ 
                      background: 'rgba(255, 90, 0, 0.1)', 
                      border: '1px solid rgba(255, 90, 0, 0.3)', 
                      padding: '8px 16px', 
                      borderRadius: '20px', 
                      fontSize: '13px', 
                      color: '#FF5A00', 
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
            <div className="pdf-footer-text">OARC Digital • AI-Powered Marketing</div>
            <div className="pdf-footer-text">{companyInfo.website}</div>
          </div>
        </div>
      ))}

      {/* PAGE 7: AI TECHNOLOGY STACK */}
      <div className="pdf-page pdf-content-page">
        <div className="pdf-header">
          <img src={logoImage} alt="OARC Digital" className="pdf-header-logo" />
          <div className="pdf-page-number">07</div>
        </div>
        
        <h2 className="pdf-section-title">AI & Creative Tech Stack</h2>
        <p className="pdf-section-subtitle">
          Cutting-edge AI tools powering your competitive advantage.
        </p>

        <div className="mb-large">
          <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#FF5A00', marginBottom: '20px' }}>
            AI Creative Generation
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
            Intelligent Automation
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
            Marketing Platforms
          </h3>
          <div className="pdf-tech-grid">
            {technologyStack.platforms.map((tech, idx) => (
              <div key={idx} className="pdf-tech-item">
                <div className="pdf-tech-name">{tech.name}</div>
                <div className="pdf-tech-category">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="pdf-footer">
          <div className="pdf-footer-text">OARC Digital • AI-Powered Marketing</div>
          <div className="pdf-footer-text">{companyInfo.website}</div>
        </div>
      </div>

      {/* PAGE 8: CONTACT */}
      <div className="pdf-page pdf-content-page">
        <div className="pdf-header">
          <img src={logoImage} alt="OARC Digital" className="pdf-header-logo" />
          <div className="pdf-page-number">08</div>
        </div>
        
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center', 
          minHeight: '600px', 
          textAlign: 'center' 
        }}>
          <h2 style={{ 
            fontSize: '56px', 
            fontWeight: '800', 
            lineHeight: '1.1', 
            margin: '0 0 30px 0',
            background: 'linear-gradient(135deg, #FF5A00 0%, #00FF9C 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            The Future is Intelligent
          </h2>
          <p style={{ fontSize: '20px', color: '#a0a0a0', maxWidth: '700px', margin: '0 0 60px 0', lineHeight: '1.8' }}>
            At OARC Digital, we believe creativity is data in motion—powered by AI. Our systems are designed not just to automate, but to accelerate your growth exponentially.
          </p>

          <div style={{ 
            background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)', 
            border: '2px solid rgba(255, 90, 0, 0.3)', 
            borderRadius: '20px', 
            padding: '50px', 
            maxWidth: '600px', 
            width: '100%' 
          }}>
            <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#ffffff', marginBottom: '30px' }}>
              Ready to Transform with AI?
            </h3>
            <div style={{ display: 'grid', gap: '20px', textAlign: 'left' }}>
              <div>
                <div style={{ fontSize: '12px', color: '#666', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                  Email
                </div>
                <div style={{ fontSize: '18px', color: '#FF5A00', fontWeight: '700' }}>
                  {companyInfo.email}
                </div>
              </div>
              <div>
                <div style={{ fontSize: '12px', color: '#666', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                  Phone
                </div>
                <div style={{ fontSize: '18px', color: '#00FF9C', fontWeight: '700' }}>
                  {companyInfo.phone}
                </div>
              </div>
              <div>
                <div style={{ fontSize: '12px', color: '#666', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                  Website
                </div>
                <div style={{ fontSize: '18px', color: '#FF5A00', fontWeight: '700' }}>
                  {companyInfo.website}
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '40px', marginTop: '60px' }}>
            <div>
              <div style={{ fontSize: '48px', fontWeight: '800', color: '#FF5A00', marginBottom: '8px' }}>Malta</div>
              <div style={{ fontSize: '14px', color: '#666' }}>Headquartered</div>
            </div>
            <div style={{ width: '2px', background: 'rgba(255, 255, 255, 0.1)' }} />
            <div>
              <div style={{ fontSize: '48px', fontWeight: '800', color: '#00FF9C', marginBottom: '8px' }}>EU</div>
              <div style={{ fontSize: '14px', color: '#666' }}>Market Focus</div>
            </div>
          </div>
        </div>

        <div className="pdf-footer">
          <div className="pdf-footer-text">© 2024 OARC Digital • All Rights Reserved</div>
          <div className="pdf-footer-text">{companyInfo.website}</div>
        </div>
      </div>

      {/* Print Instructions */}
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
  );
}
