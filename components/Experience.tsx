
import React, { useState } from 'react';
import { RESUME_DATA } from '../constants';
import { Calendar, MapPin, Briefcase, ExternalLink, Info, ChevronDown, CheckCircle2, TrendingUp, ArrowDownCircle } from 'lucide-react';

const Experience: React.FC = () => {
  const { experience } = RESUME_DATA;
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleExperience = isExpanded ? experience : experience.slice(0, 2);

  /**
   * Enhanced text formatter:
   * 1. Header bolding: **Title**: Content
   * 2. Markdown links: [Text](Url)
   * 3. Performance Metrics: % figures and $ figures (Bold + Vivid Color)
   * 4. Brand Highlighting: Highlighting key client names with specific scroll actions
   */
  const formatText = (text: string, isPrimary: boolean = false) => {
    // 1. Handle the initial bold header if present (e.g., **Ad Campaign Management**: ...)
    const headerMatch = text.match(/^\*\*(.*?)\*\*:(.*)$/);
    let header = null;
    let body = text;

    if (headerMatch) {
      header = <strong className={`${isPrimary ? 'text-white font-extrabold' : 'text-brand-purple font-bold'} tracking-tight`}>{headerMatch[1]}:</strong>;
      body = headerMatch[2];
    }

    // List of brands to highlight
    const BRANDS = ['Caterpillar®', 'Airstream®', 'Gallery Furniture', 'ShopCaterpillar.com', 'ShopCaterpillar', 'Meta', 'Google', 'LinkedIn', 'TikTok', 'Shopify'];
    const brandRegexStr = BRANDS.map(b => b.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');

    // Case Study Buttons Configuration
    const CLIENT_CASE_STUDIES: Record<string, { index: number; color: string; label: string }> = {
      'Caterpillar®': { 
        index: 0, 
        color: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/5 hover:bg-yellow-400/10 hover:border-yellow-400/50', 
        label: 'View Case Study' 
      },
      'Gallery Furniture': { 
        index: 1, 
        color: 'text-red-400 border-red-400/30 bg-red-400/5 hover:bg-red-400/10 hover:border-red-400/50', 
        label: 'View Growth' 
      },
      'Airstream®': { 
        index: 2, 
        color: 'text-sky-300 border-sky-300/30 bg-sky-300/5 hover:bg-sky-300/10 hover:border-sky-300/50', 
        label: 'View Pivot' 
      },
    };

    // 2. Combined regex for Links, Metrics, and Brands
    const combinedRegex = new RegExp(`\\[([^\\]]+)\\]\\(([^)]+)\\)|(\\d+(?:\\.\\d+)?%)|(\\$\\d+(?:\\.\\d+)?[KkMmBb]?)|(${brandRegexStr})`, 'g');
    
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = combinedRegex.exec(body)) !== null) {
      if (match.index > lastIndex) {
        parts.push(body.substring(lastIndex, match.index));
      }

      if (match[1]) {
        // Link
        const linkText = match[1];
        const linkUrl = match[2];
        const isDataTag = linkText === 'DataTag';

        parts.push(
          <span key={match.index} className="inline-flex items-baseline group/link relative">
            <a 
              href={linkUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${isPrimary ? 'text-brand-accent' : 'text-brand-accent'} hover:text-white hover:underline underline-offset-4 transition-colors font-bold inline-flex items-center gap-0.5`}
            >
              {linkText}
              <ExternalLink size={10} className="opacity-70" />
            </a>
            
            {isDataTag && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('datatag-card')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="ml-2 inline-flex items-center gap-1 text-[9px] bg-brand-gemini-middle/20 text-brand-gemini-middle px-1.5 py-0.5 rounded-full cursor-pointer hover:bg-brand-gemini-middle/40 transition-all font-mono uppercase tracking-tighter"
                title="Click to scroll to explanation"
              >
                <Info size={9} />
                Deep Dive
              </button>
            )}
          </span>
        );
      } else if (match[3] || match[4]) {
        // Metric
        const metricValue = match[3] || match[4];
        parts.push(
          <span key={match.index} className={`font-black ${isPrimary ? 'text-white bg-white/10 px-1 rounded shadow-[0_0_10px_rgba(255,255,255,0.1)]' : 'text-brand-accent'}`}>
            {metricValue}
          </span>
        );
      } else if (match[5]) {
        // Brand Highlight with specific scroll buttons
        const brandName = match[5];
        const caseStudyConfig = CLIENT_CASE_STUDIES[brandName];
        
        parts.push(
          <span key={match.index} className={`font-semibold ${isPrimary ? 'text-brand-accent' : 'text-slate-200'} inline-flex items-center flex-wrap gap-x-1`}>
            {brandName}
            {caseStudyConfig && isPrimary && (
               <button
                  onClick={(e) => {
                    e.preventDefault();
                    window.dispatchEvent(new CustomEvent('switch-case-study', { detail: caseStudyConfig.index }));
                  }}
                  className={`ml-1 inline-flex items-center gap-1 text-[9px] px-2 py-0.5 rounded-full cursor-pointer transition-all font-mono uppercase tracking-tighter border ${caseStudyConfig.color}`}
                  title={`Scroll to ${brandName} Case Study`}
               >
                  <ArrowDownCircle size={10} />
                  {caseStudyConfig.label}
               </button>
            )}
          </span>
        );
      }

      lastIndex = combinedRegex.lastIndex;
    }

    if (lastIndex < body.length) {
      parts.push(body.substring(lastIndex));
    }

    return (
      <span>
        {header}
        {parts.length > 0 ? parts : body}
      </span>
    );
  };

  return (
    <section id="experience" className="pt-10 pb-24 max-w-5xl mx-auto px-6 md:px-12 relative scroll-mt-24">
      {/* Decorative background element for the whole section */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(66,133,244,0.03)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="flex items-center justify-between mb-12">
        <h2 className="text-3xl font-display font-bold text-white flex items-center gap-4">
          <div className="p-2 rounded-lg bg-brand-accent/10 border border-brand-accent/20">
            <Briefcase className="text-brand-accent w-6 h-6" />
          </div>
          Experience
        </h2>
        <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-brand-accent/20 to-transparent ml-8"></div>
      </div>

      <div className="space-y-12">
        {visibleExperience.map((job, idx) => {
           const isPrimary = idx === 0; 
           
           return (
            <div 
              key={idx} 
              className={`
                group relative p-8 md:p-10 rounded-[2.5rem] border transition-all duration-700 animate-in fade-in slide-in-from-bottom-6
                ${isPrimary 
                    ? 'bg-white/[0.03] backdrop-blur-2xl border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.1)] hover:border-white/40' 
                    : 'bg-slate-900/40 border-white/5 opacity-90'
                }
              `}
            >
                {/* Subtle Gloss Overlay for Ice Effect (Only on Primary) */}
                {isPrimary && (
                  <>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/[0.05] via-transparent to-transparent pointer-events-none rounded-[2.5rem]"></div>
                    <div className="absolute inset-0 bg-gemini-shine opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none rounded-[2.5rem]"></div>
                  </>
                )}

                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-10 gap-6">
                  <div className="relative">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className={`text-2xl md:text-3xl font-display font-bold ${isPrimary ? 'text-white' : 'text-slate-300'}`}>
                          {job.role}
                        </h3>
                      </div>
                      <div className={`text-xl font-medium transition-colors ${isPrimary ? 'text-brand-accent' : 'text-brand-accent/80'}`}>
                          {formatText(job.company, isPrimary)}
                      </div>
                      {job.description && (
                        <div className="text-sm text-slate-500 mt-2 font-mono flex items-center gap-2">
                          <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
                          {job.description}
                        </div>
                      )}
                  </div>
                  <div className="flex flex-col md:items-end gap-2 shrink-0">
                      <div className="flex items-center gap-2 text-white text-xs font-mono bg-white/5 px-4 py-2 rounded-full border border-white/10 shadow-inner group-hover:bg-white/10 transition-colors">
                          <Calendar size={14} className="text-brand-gemini-middle" />
                          <span className="font-bold tracking-tight">{job.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-500 text-xs px-2 font-mono">
                          <MapPin size={12} />
                          <span>{job.location}</span>
                      </div>
                  </div>
                </div>

                <div className="grid gap-1">
                {job.achievements.map((item, i) => (
                    <div 
                      key={i} 
                      className={`
                        flex items-start gap-4 p-2 rounded-2xl transition-all duration-300 cursor-default
                        ${isPrimary 
                          ? 'hover:bg-white/5 hover:translate-x-1 border border-transparent hover:border-white/10' 
                          : 'hover:translate-x-1'
                        }
                      `}
                    >
                      <div className={`mt-1.5 shrink-0 ${isPrimary ? 'text-brand-accent' : 'text-slate-600'}`}>
                        {isPrimary ? <TrendingUp size={18} /> : <div className="w-1.5 h-1.5 rounded-full bg-slate-700 mt-1" />}
                      </div>
                      <div className={`
                        text-sm md:text-base leading-relaxed transition-colors
                        ${isPrimary ? 'text-slate-300 group-hover/ach:text-white' : 'text-slate-400'}
                      `}>
                        {formatText(item, isPrimary)}
                      </div>
                    </div>
                ))}
                </div>
                
                {/* Visual Accent for Primary Card */}
                {isPrimary && (
                  <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                    <div className="flex -space-x-2">
                      {['Meta', 'Google', 'Shopify', 'GA4'].map((tag) => (
                        <div key={tag} className="px-3 py-1 bg-black/40 border border-white/5 rounded-full text-[10px] font-mono text-slate-500 uppercase tracking-tighter">
                          {tag}
                        </div>
                      ))}
                    </div>
                    <div className="text-[10px] font-mono text-brand-gemini-middle flex items-center gap-2 uppercase tracking-widest font-bold opacity-60">
                      <CheckCircle2 size={12} />
                      Verified Expertise
                    </div>
                  </div>
                )}
            </div>
          );
        })}
      </div>

      {/* Expand/Collapse Toggle */}
      {experience.length > 2 && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full py-6 mt-12 flex items-center justify-center gap-3 text-xs md:text-sm font-mono uppercase tracking-[0.2em] text-slate-500 hover:text-white hover:bg-white/5 border border-white/5 hover:border-white/10 rounded-2xl transition-all group overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <span className="relative z-10">{isExpanded ? 'Collapse Archives' : 'View Full Career History'}</span>
            <ChevronDown className={`relative z-10 transition-transform duration-500 ${isExpanded ? 'rotate-180 text-brand-gemini-pink' : 'text-brand-gemini-start'}`} size={18} />
          </button>
      )}

    </section>
  );
};

export default Experience;
