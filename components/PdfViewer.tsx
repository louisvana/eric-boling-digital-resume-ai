
import React from 'react';
import { FileText, ExternalLink, Download } from 'lucide-react';

const PdfViewer: React.FC = () => {
  const pdfUrl = "https://cdn.shopify.com/s/files/1/0657/7825/4048/files/ShopCaterpillar_com_Yearly_Report_2025.pdf?v=1767917802";
  // Using Google Docs Viewer ensures the PDF renders on mobile devices where native PDF support in iframes is inconsistent (often forcing a download).
  const viewerUrl = `https://docs.google.com/gview?url=${encodeURIComponent(pdfUrl)}&embedded=true`;

  return (
    <section className="py-12 w-full h-screen flex flex-col bg-slate-900/50 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 w-full h-full flex flex-col">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4 shrink-0">
            <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                    <FileText size={24} />
                </div>
                <div>
                    <h2 className="text-xl md:text-2xl font-display font-bold text-white">Yearly Impact Report</h2>
                    <p className="text-slate-400 text-xs md:text-sm font-mono flex items-center gap-2">
                        ShopCaterpillar.com 
                        <span className="w-1 h-1 rounded-full bg-slate-600"></span> 
                        2025 Performance Analysis
                    </p>
                </div>
            </div>
            
            <a 
                href={pdfUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 rounded-xl text-sm text-slate-300 hover:text-white transition-all group"
            >
                <Download size={16} />
                <span>Direct Download</span>
                <ExternalLink size={12} className="opacity-50 group-hover:translate-x-0.5 transition-transform" />
            </a>
        </div>

        {/* Viewer Container */}
        <div className="flex-1 w-full rounded-2xl overflow-hidden border border-white/10 bg-[#1e2330] relative shadow-2xl flex flex-col">
            {/* Loading/Fallback Indicator (Visible if iframe takes time) */}
            <div className="absolute inset-0 flex items-center justify-center text-slate-500 z-0">
                <div className="flex flex-col items-center gap-3">
                    <div className="w-8 h-8 border-2 border-brand-accent/30 border-t-brand-accent rounded-full animate-spin"></div>
                    <span className="text-xs font-mono uppercase tracking-widest">Loading Report Viewer...</span>
                </div>
            </div>

            <iframe 
                src={viewerUrl}
                className="w-full h-full border-0 relative z-10 bg-white"
                title="ShopCaterpillar Yearly Report 2025"
                allow="autoplay"
            />
        </div>
        
        <p className="text-center text-[10px] text-slate-600 font-mono mt-4">
            Powered by Google Docs Viewer
        </p>
      </div>
    </section>
  );
};

export default PdfViewer;
