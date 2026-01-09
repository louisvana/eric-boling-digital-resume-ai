
import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { TrendingUp, Users, DollarSign, ShoppingBag, Zap, Target, Layers, Activity, Sparkles, Database } from 'lucide-react';

const Featured: React.FC = () => {
  const { case_studies } = PORTFOLIO_DATA;
  const [activeTab, setActiveTab] = useState(0);

  const icons = {
    trending: TrendingUp,
    users: Users,
    dollar: DollarSign,
    cart: ShoppingBag,
    zap: Zap,
    target: Target
  };

  const activeStudy = case_studies[activeTab];

  // Listen for external events to switch case studies
  useEffect(() => {
    const handleSwitchCaseStudy = (e: Event) => {
      const customEvent = e as CustomEvent<number>;
      const index = customEvent.detail;
      if (typeof index === 'number' && index >= 0 && index < case_studies.length) {
        setActiveTab(index);
        const element = document.getElementById('featured-case-studies');
        if (element) {
          // Small timeout to allow tab state to update before scrolling if needed, though usually instant
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 50);
        }
      }
    };

    window.addEventListener('switch-case-study', handleSwitchCaseStudy);
    return () => window.removeEventListener('switch-case-study', handleSwitchCaseStudy);
  }, [case_studies.length]);

  return (
    <section id="featured-case-studies" className="py-24 px-6 relative bg-slate-950/50 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-brand-gemini-start/10 border border-brand-gemini-start/20">
            <Sparkles size={12} className="text-brand-gemini-start" />
            <span className="text-brand-gemini-start font-mono text-xs tracking-widest uppercase font-bold">Client Impact</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Featured Case Studies</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Three Big Wins for Three Unique Clients.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {case_studies.map((study, idx) => (
            <button
              key={study.id}
              onClick={() => setActiveTab(idx)}
              className={`
                relative px-6 py-4 rounded-xl text-left transition-all duration-300 border
                ${activeTab === idx 
                  ? 'bg-white/10 border-brand-gemini-start/50 shadow-[0_0_20px_rgba(66,133,244,0.15)] scale-105 z-10' 
                  : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.05] text-slate-400 hover:text-white'
                }
              `}
            >
              <span className="block text-xs font-mono uppercase tracking-widest mb-1 opacity-70">
                {study.client}
              </span>
              <span className={`block font-bold font-display text-sm md:text-base ${activeTab === idx ? 'text-white' : ''}`}>
                {study.title}
              </span>
              {activeTab === idx && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-gemini-start via-brand-gemini-middle to-brand-gemini-end rounded-b-xl"></div>
              )}
            </button>
          ))}
        </div>
        
        {/* Main "Bento Box" Card */}
        <div className="relative bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden min-h-[600px]">
          
          {/* Animated Transition Container */}
          <div key={activeStudy.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            
            {/* [The Hook] */}
            <div className="mb-12 border-b border-white/5 pb-8">
              <h3 className="text-2xl md:text-4xl font-display font-bold text-white mb-3 tracking-tight leading-tight">
                {activeStudy.hook}
              </h3>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gemini-start to-brand-gemini-middle font-medium text-xl">
                {activeStudy.role}
              </p>
            </div>

            {/* [The Power Stats] */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {activeStudy.stats.map((stat, idx) => {
                const Icon = icons[stat.icon];
                return (
                  <div key={idx} className="bg-black/40 p-6 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center hover:border-brand-gemini-start/30 transition-colors">
                    <Icon className={`mb-3 w-6 h-6 ${idx === 0 ? 'text-green-400' : idx === 1 ? 'text-brand-gemini-start' : idx === 2 ? 'text-brand-gemini-middle' : 'text-brand-gemini-end'}`} />
                    <span className="text-2xl md:text-3xl font-display font-bold text-white block mb-1">{stat.value}</span>
                    <span className="text-slate-500 text-xs uppercase tracking-wider font-mono">{stat.label}</span>
                  </div>
                );
              })}
            </div>

            {/* [The Context] & [The Pivot] & [The Strategy] */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
              <div className="space-y-6">
                <div>
                  <h4 className="flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-slate-500 mb-3 font-bold">
                    <Users size={16} /> The Client
                  </h4>
                  <p className="text-slate-300 leading-relaxed font-light text-lg">
                    {activeStudy.context}
                  </p>
                </div>
                
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                   <h4 className="flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-slate-500 mb-4 font-bold">
                    <Activity size={16} /> The Pivot
                  </h4>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/20 text-red-400 font-bold text-xs">VS</div>
                      <div>
                        <span className="block text-red-400 text-xs font-bold uppercase mb-1">Broken State</span>
                        <p className="text-slate-400 text-sm leading-relaxed">{activeStudy.pivot.problem}</p>
                      </div>
                    </div>
                    <div className="w-px h-8 bg-white/10 ml-4"></div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center shrink-0 border border-green-500/20 text-green-400 font-bold text-xs">FIX</div>
                      <div>
                        <span className="block text-green-400 text-xs font-bold uppercase mb-1">Fixed State</span>
                        <p className="text-white text-sm leading-relaxed">{activeStudy.pivot.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* [The Strategy] - Dynamic Title */}
              <div className="flex flex-col h-full">
                <h4 className="flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-slate-500 mb-4 font-bold">
                  <Layers size={16} /> {activeStudy.strategyTitle || "The Strategy"}
                </h4>
                <div className="bg-gradient-to-b from-brand-gemini-start/10 to-transparent p-1 rounded-2xl flex-grow">
                  <div className="bg-[#0b101b] rounded-xl p-6 h-full">
                    <p className="text-slate-200 leading-relaxed whitespace-pre-wrap">
                      {activeStudy.strategy}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Stack Sub-section - Moved below grid for better spacing */}
            <div className="mb-12 pt-6 border-t border-white/5">
                <h4 className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-500 mb-4 font-bold">
                <Database size={14} className="text-brand-gemini-middle" /> 
                Tech Stack & Platforms
                </h4>
                <div className="flex flex-wrap gap-2">
                {activeStudy.techStack.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-slate-300 text-xs font-mono hover:bg-white/[0.05] transition-colors cursor-default">
                    {tech}
                    </span>
                ))}
                </div>
            </div>

            {/* Visual Footer Decor */}
            <div className="flex items-center justify-end text-slate-600 gap-2 border-t border-white/5 pt-6">
               <span className="text-[10px] font-mono uppercase tracking-widest">Case Study ID: {activeStudy.id.toUpperCase()}_v.2.0</span>
               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
