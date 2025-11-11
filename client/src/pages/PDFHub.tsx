import { Link } from "wouter";
import { FileText, File, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import logoImage from "@assets/fdfdfd_1762818183304.png";

export default function PDFHub() {
  const pdfs = [
    {
      id: "capabilities-deck",
      title: "OARC Digital Capabilities Deck",
      description: "Comprehensive 12-page capabilities deck showcasing services, global brand success stories, Malta/EU case studies, technology stack, pricing tiers, process workflow, and results dashboard. The complete OARC Digital story in one premium document.",
      pages: "12 pages",
      icon: FileText,
      path: "/pdf/capabilities-deck",
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
          <div className="grid md:grid-cols-1 max-w-2xl mx-auto gap-8 mb-16">
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
                <h3 className="text-lg font-semibold text-green-500 mb-3">What's Inside</h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex gap-3">
                    <span className="text-green-500">•</span>
                    <span><strong>Executive Snapshot:</strong> At-a-glance metrics and company overview</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-500">•</span>
                    <span><strong>Global Brand Case Studies:</strong> Results from Gym Group, Azzaro, Body Shop, Tefal, Lenovo, ESL Gaming</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-500">•</span>
                    <span><strong>Malta & EU Success Stories:</strong> Local market expertise with measurable results</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-500">•</span>
                    <span><strong>4D Framework:</strong> Our proven Discover → Design → Deploy → Dominate process</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-500">•</span>
                    <span><strong>Technology Stack:</strong> AI tools and platforms we leverage</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-500">•</span>
                    <span><strong>Pricing Tiers:</strong> Starter, Growth, and Enterprise packages</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-500">•</span>
                    <span><strong>Results Dashboard:</strong> Aggregate performance metrics across all clients</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quick Access */}
          <div className="mt-12 text-center">
            <p className="text-slate-400 mb-4">
              This comprehensive deck combines all our capabilities, case studies, and pricing in one premium document—designed to match what top creative agencies send to prospects.
            </p>
            <Link href="/pdf/capabilities-deck">
              <Button className="bg-gradient-to-r from-orange-500 to-green-500 text-white font-bold px-8 py-6 text-lg hover:opacity-90">
                View Capabilities Deck
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
