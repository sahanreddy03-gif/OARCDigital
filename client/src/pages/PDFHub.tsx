import { Link } from "wouter";
import { FileText, File, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import logoImage from "@assets/fdfdfd_1762818183304.png";

export default function PDFHub() {
  const pdfs = [
    {
      id: "company-profile",
      title: "OARC Digital Company Profile",
      description: "Comprehensive 10-page company deck covering services, case studies, technology stack, and contact information. Perfect for detailed client presentations.",
      pages: "10 pages",
      icon: FileText,
      path: "/pdf/company-profile",
      color: "from-orange-500 to-orange-600"
    },
    {
      id: "one-pager",
      title: "One-Page Capability Overview",
      description: "Condensed single-page overview of services, differentiators, technologies, and industries served. Ideal for quick introductions and email attachments.",
      pages: "1 page",
      icon: File,
      path: "/pdf/one-pager",
      color: "from-green-500 to-emerald-600"
    },
    {
      id: "ai-creative",
      title: "AI & Creative Services Profile",
      description: "AI-focused 8-page deck highlighting AI capabilities, automation services, creative solutions, and AI-driven case studies. Best for tech-savvy prospects.",
      pages: "8 pages",
      icon: Brain,
      path: "/pdf/ai-creative-profile",
      color: "from-orange-500 to-green-500"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <img src={logoImage} alt="OARC Digital" className="w-32 h-auto mx-auto mb-8" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent">
              Client Proposal Documents
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Professional PDF presentations for client proposals. Print to PDF using Ctrl+P (or Cmd+P on Mac) with "Background graphics" enabled.
            </p>
          </div>

          {/* PDF Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {pdfs.map((pdf) => {
              const Icon = pdf.icon;
              return (
                <div 
                  key={pdf.id}
                  className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${pdf.color} p-4 mb-6`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  
                  <div className="mb-2">
                    <span className="text-xs font-semibold text-orange-500 uppercase tracking-wider">
                      {pdf.pages}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {pdf.title}
                  </h3>
                  
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {pdf.description}
                  </p>
                  
                  <Link href={pdf.path}>
                    <Button 
                      className="w-full bg-white text-black hover:bg-slate-200 font-semibold"
                      data-testid={`button-view-${pdf.id}`}
                    >
                      View & Print PDF
                    </Button>
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Instructions */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">How to Create PDF Files</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-orange-500 mb-3">Print to PDF Instructions</h3>
                <ol className="space-y-2 text-slate-300">
                  <li className="flex gap-3">
                    <span className="text-orange-500 font-bold">1.</span>
                    <span>Click "View & Print PDF" on any document above</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 font-bold">2.</span>
                    <span>Press <code className="bg-zinc-800 px-2 py-1 rounded">Ctrl+P</code> (or <code className="bg-zinc-800 px-2 py-1 rounded">Cmd+P</code> on Mac)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 font-bold">3.</span>
                    <span>Select "Save as PDF" as the destination</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 font-bold">4.</span>
                    <span>Choose A4 paper size</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 font-bold">5.</span>
                    <span>Set margins to "None"</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 font-bold">6.</span>
                    <span>✓ Enable "Background graphics"</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 font-bold">7.</span>
                    <span>Click Save</span>
                  </li>
                </ol>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-green-500 mb-3">Usage Recommendations</h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex gap-3">
                    <span className="text-green-500">•</span>
                    <span><strong>Company Profile:</strong> For detailed client meetings and comprehensive proposals</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-500">•</span>
                    <span><strong>One-Pager:</strong> For cold outreach, email attachments, and quick introductions</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-500">•</span>
                    <span><strong>AI & Creative:</strong> For tech companies and AI-focused prospects</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-500">•</span>
                    <span><strong>Tip:</strong> Combine multiple PDFs for comprehensive client presentations</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-500">•</span>
                    <span><strong>Target:</strong> Malta and European market clients</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quick Access Links */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold text-white mb-4">Quick Access Links</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/pdf/company-profile">
                <Button variant="outline" className="text-white border-zinc-700 hover:border-orange-500">
                  Company Profile (10p)
                </Button>
              </Link>
              <Link href="/pdf/one-pager">
                <Button variant="outline" className="text-white border-zinc-700 hover:border-green-500">
                  One-Pager (1p)
                </Button>
              </Link>
              <Link href="/pdf/ai-creative-profile">
                <Button variant="outline" className="text-white border-zinc-700 hover:border-orange-500">
                  AI & Creative (8p)
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
