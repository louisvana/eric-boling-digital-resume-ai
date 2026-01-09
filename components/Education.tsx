
import React from 'react';
import { RESUME_DATA } from '../constants';
import { GraduationCap, ExternalLink } from 'lucide-react';

const Education: React.FC = () => {
  const { education, certifications } = RESUME_DATA;
  // Using the University of Louisville Cardinal logo
  const uoflLogo = "https://cdn.shopify.com/s/files/1/0657/7825/4048/files/University-of-Louisville-Logo.png?v=1766626707";

  return (
    <section className="pt-10 pb-10 max-w-6xl mx-auto px-4 md:px-6 relative">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-10 md:mb-16">
        <div className="self-start md:self-auto p-3.5 rounded-2xl bg-brand-gemini-start/10 border border-brand-gemini-start/20 shadow-[0_0_15px_rgba(66,133,244,0.2)]">
          <GraduationCap className="w-6 h-6 text-brand-gemini-start" />
        </div>
        <div>
           <h2 className="text-2xl md:text-3xl font-display font-bold text-white leading-tight">Academic & Professional Credentials</h2>
           <p className="text-slate-500 font-mono text-xs uppercase tracking-widest mt-1">Foundational Knowledge & Continuous Learning</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
        
        {/* Education Column (Span 3) - The Main Feature */}
        <div className="lg:col-span-3 space-y-6">
            <h3 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gemini-start animate-pulse"></span>
                University Degree
            </h3>

          {education.map((edu, idx) => (
            <div 
              key={idx} 
              className="group relative overflow-hidden rounded-3xl bg-slate-900/40 border border-white/10 p-5 md:p-10 hover:border-brand-gemini-start/30 transition-all duration-500 hover:shadow-[0_0_50px_rgba(66,133,244,0.15)]"
            >
              {/* Background Gradient Effect - Moves on hover */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gemini-start/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-gemini-start/10 transition-colors duration-700"></div>

              {/* Flex Row on Mobile too for tighter layout */}
              <div className="relative z-10 flex flex-row items-start gap-4 md:gap-8">
                {/* Logo Container with "Glass" look - Reduced padding on mobile */}
                <div className="shrink-0 p-2 md:p-6 rounded-xl md:rounded-2xl bg-white shadow-xl shadow-black/20 border border-white/20 group-hover:scale-105 group-hover:rotate-3 transition-all duration-500">
                    <img 
                        src={uoflLogo} 
                        alt="University of Louisville" 
                        className="w-10 h-10 md:w-20 md:h-20 object-contain"
                    />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-1 md:gap-2 mb-2 md:mb-3">
                    <h4 className="text-lg md:text-3xl font-display font-bold text-white leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-gemini-start group-hover:to-brand-gemini-middle transition-all">
                        {edu.school}
                    </h4>
                    <span className="self-start xl:self-auto font-mono text-[10px] md:text-xs text-slate-400 bg-black/40 px-2 md:px-3 py-1 md:py-1.5 rounded-full border border-white/10 whitespace-nowrap mt-1 xl:mt-0">
                        Class of {edu.year}
                    </span>
                  </div>
                  
                  <h5 className="text-sm md:text-xl text-slate-200 font-light mb-3 md:mb-6 border-l-2 border-brand-gemini-start/50 pl-3 md:pl-4">
                    {edu.degree}
                  </h5>

                  <div className="flex items-center gap-2 text-[10px] md:text-sm text-slate-500 font-mono bg-white/[0.02] inline-block px-2 md:px-3 py-1 rounded">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                    {edu.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Column (Span 2) - Stacked Cards */}
        <div className="lg:col-span-2 mt-8 lg:mt-0">
            <div className="flex flex-col gap-4 mb-6">
                <h3 className="text-xs font-mono text-slate-500 uppercase tracking-widest flex items-center gap-2 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gemini-purple animate-pulse"></span>
                    Certifications & Badges
                </h3>
                <div className="flex flex-wrap gap-2">
                    <a 
                        href="https://www.credly.com/users/eric-boling-creds" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs text-brand-gemini-middle hover:text-white transition-colors flex items-center gap-1 group/link bg-white/5 px-3 py-1.5 rounded-md border border-white/5 hover:border-brand-gemini-middle/30"
                    >
                        Verify on Credly <ExternalLink size={10} className="group-hover/link:translate-x-0.5 transition-transform" />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/eric-boling/#:~:text=Theta%20Chi%20Fraternity-,Licenses%20%26%20certifications,-Licenses%20%26%20certifications" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs text-[#0a66c2] hover:text-white transition-colors flex items-center gap-1 group/link bg-[#0a66c2]/10 px-3 py-1.5 rounded-md border border-[#0a66c2]/20 hover:border-[#0a66c2]/50 hover:bg-[#0a66c2]/20"
                    >
                        Verify on LinkedIn <ExternalLink size={10} className="group-hover/link:translate-x-0.5 transition-transform" />
                    </a>
                </div>
            </div>

          <div className="space-y-3 md:space-y-4">
            {certifications.map((cert, idx) => (
              <div 
                key={idx} 
                className="group relative flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-gemini-purple/40 hover:bg-white/[0.04] transition-all duration-300 overflow-hidden"
              >
                {/* Hover progress bar effect */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-brand-gemini-purple to-brand-gemini-pink group-hover:w-full transition-all duration-700 ease-out"></div>
                
                {/* Logo Placeholder */}
                <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white flex items-center justify-center p-2 shadow-sm group-hover:scale-105 transition-transform">
                   <img src={cert.logo} alt={cert.issuer} className="w-full h-full object-contain" />
                </div>
                
                <div className="min-w-0 flex-1">
                  {/* Changed truncate to whitespace-normal/break-words to allow wrapping on mobile */}
                  <h5 className="text-slate-200 text-sm font-bold leading-tight group-hover:text-white transition-colors mb-1 whitespace-normal">
                      {cert.title}
                  </h5>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span className="text-[10px] md:text-xs text-slate-500 font-mono uppercase tracking-wider">{cert.issuer}</span>
                    {cert.year && (
                        <>
                            <span className="inline w-0.5 h-0.5 md:w-1 md:h-1 rounded-full bg-slate-700"></span>
                            <span className="text-[10px] md:text-xs text-slate-500">{cert.year}</span>
                        </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
