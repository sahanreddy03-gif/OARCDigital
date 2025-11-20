import { companyInfo, coreServices, keyDifferentiators, targetIndustries } from "@/data/companyProfile";
import { Zap, Target, Clock, Globe, Cpu, TrendingUp } from "lucide-react";
import "../styles/pdf.css";
import logoImage from "@assets/fdfdfd_1762818183304.png";
import SEOHead from "@/components/SEOHead";
import { pdfPagesSEO } from "@/data/seoMetadata";

const iconMap: Record<string, any> = {
  zap: Zap,
  target: Target,
  clock: Clock,
  globe: Globe,
  cpu: Cpu,
  "trending-up": TrendingUp
};

export default function PDFOnePager() {
  return (
    <>
      <SEOHead
        title={pdfPagesSEO.onePager.title}
        description={pdfPagesSEO.onePager.description}
        canonicalUrl={`https://oarcdigital.com${pdfPagesSEO.onePager.path}`}
        ogType={pdfPagesSEO.onePager.ogType}
      />
      <div className="pdf-document">
      {/* SINGLE PAGE */}
      <div className="pdf-page" style={{ padding: '50px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        {/* Header */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
            <img src={logoImage} alt="OARC Digital" style={{ width: '100px', height: 'auto' }} />
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#FF5A00' }}>{companyInfo.website}</div>
              <div style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>{companyInfo.email}</div>
            </div>
          </div>

          {/* Hero Section */}
          <div style={{ marginBottom: '40px' }}>
            <h1 style={{ 
              fontSize: '48px', 
              fontWeight: '800', 
              lineHeight: '1.1', 
              margin: '0 0 15px 0',
              background: 'linear-gradient(135deg, #FF5A00 0%, #FF8A00 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Driving Business Transformation<br />
              with AI-Powered Creativity
            </h1>
            <p style={{ fontSize: '16px', color: '#a0a0a0', maxWidth: '700px', lineHeight: '1.7', margin: 0 }}>
              At OARC Digital, we don't just partner with you—we design the blueprint for your growth. With our mastery in AI Creative Services, Digital Employees, and Revenue Automation, we deep-dive into your challenges to forge future-ready solutions. Join us where innovation evolves into action.
            </p>
          </div>

          {/* Key Differentiators */}
          <div style={{ marginBottom: '35px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#00FF9C', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Key Differentiators
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
              {keyDifferentiators.map((item, idx) => {
                const Icon = iconMap[item.icon];
                return (
                  <div key={idx} style={{ 
                    background: 'rgba(255, 255, 255, 0.03)', 
                    border: '1px solid rgba(255, 255, 255, 0.1)', 
                    borderRadius: '10px', 
                    padding: '18px' 
                  }}>
                    <div style={{ marginBottom: '10px' }}>
                      <Icon size={24} color="#FF5A00" />
                    </div>
                    <h3 style={{ fontSize: '14px', fontWeight: '700', color: '#ffffff', marginBottom: '6px' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '12px', color: '#a0a0a0', lineHeight: '1.5', margin: 0 }}>
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div style={{ marginBottom: '35px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#00FF9C', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Services
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
              {coreServices.map((service, idx) => (
                <div key={idx} style={{ 
                  background: 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%)', 
                  border: '1px solid rgba(255, 90, 0, 0.2)', 
                  borderRadius: '10px', 
                  padding: '20px',
                  borderTop: '3px solid #FF5A00'
                }}>
                  <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#ffffff', marginBottom: '8px' }}>
                    {service.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#a0a0a0', lineHeight: '1.6', marginBottom: '12px' }}>
                    {service.description}
                  </p>
                  <ul style={{ fontSize: '11px', color: '#ffffff', lineHeight: '1.8', margin: 0, paddingLeft: '15px' }}>
                    {service.features.slice(0, 3).map((feature, fIdx) => (
                      <li key={fIdx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div style={{ marginBottom: '35px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#00FF9C', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Technologies
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
              <div style={{ background: 'rgba(255, 90, 0, 0.05)', border: '1px solid rgba(255, 90, 0, 0.2)', borderRadius: '8px', padding: '15px' }}>
                <h4 style={{ fontSize: '13px', fontWeight: '700', color: '#FF5A00', marginBottom: '8px' }}>AI Creative</h4>
                <p style={{ fontSize: '11px', color: '#a0a0a0', margin: 0 }}>ChatGPT-4 • Midjourney • DALL-E 3 • Runway ML • Adobe CC • Figma</p>
              </div>
              <div style={{ background: 'rgba(0, 255, 156, 0.05)', border: '1px solid rgba(0, 255, 156, 0.2)', borderRadius: '8px', padding: '15px' }}>
                <h4 style={{ fontSize: '13px', fontWeight: '700', color: '#00FF9C', marginBottom: '8px' }}>Automation</h4>
                <p style={{ fontSize: '11px', color: '#a0a0a0', margin: 0 }}>n8n • Make • Zapier • HubSpot • Salesforce • WhatsApp API</p>
              </div>
              <div style={{ background: 'rgba(255, 90, 0, 0.05)', border: '1px solid rgba(255, 90, 0, 0.2)', borderRadius: '8px', padding: '15px' }}>
                <h4 style={{ fontSize: '13px', fontWeight: '700', color: '#FF5A00', marginBottom: '8px' }}>Analytics</h4>
                <p style={{ fontSize: '11px', color: '#a0a0a0', margin: 0 }}>Google Analytics 4 • Meta Pixel • Mixpanel • Tableau • Power BI</p>
              </div>
            </div>
          </div>

          {/* Industries */}
          <div>
            <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#00FF9C', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Industries We Serve
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {targetIndustries.map((industry, idx) => (
                <span key={idx} style={{ 
                  background: 'rgba(255, 255, 255, 0.05)', 
                  border: '1px solid rgba(255, 255, 255, 0.1)', 
                  padding: '6px 14px', 
                  borderRadius: '20px', 
                  fontSize: '11px', 
                  color: '#ffffff', 
                  fontWeight: '600' 
                }}>
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          paddingTop: '30px', 
          borderTop: '1px solid rgba(255, 255, 255, 0.1)' 
        }}>
          <div style={{ fontSize: '12px', color: '#666' }}>
            © 2024 OARC Digital • {companyInfo.tagline}
          </div>
          <div style={{ fontSize: '12px', color: '#666' }}>
            {companyInfo.location} • {companyInfo.phone}
          </div>
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
    </>
  );
}
