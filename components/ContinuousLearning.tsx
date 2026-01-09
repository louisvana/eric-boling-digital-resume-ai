import React from 'react';
import { Linkedin, Youtube, Rss, Mail, BookOpen } from 'lucide-react';

const ContinuousLearning: React.FC = () => {
  const learningSources = [
    {
      title: "The Strategy Hub",
      icon: Linkedin,
      useCase: "Advanced, pro-tier Meta & Google ad strategy.",
      detail: "Where I find advanced, detailed breakdowns that elevate my work.",
      tags: ["Paid Media Creators", "LinkedIn"]
    },
    {
      title: "Deep Dives & Tutorials",
      icon: Youtube,
      useCase: "In-depth ad buying tutorials, platform news, and technical implementation.",
      detail: "My go-to for mastering new features and mechanics.",
      tags: ["YouTube Paid Media", "Platform News"]
    },
    {
      title: "Real-Time Intelligence",
      icon: Rss,
      useCase: "Daily updates for Meta/Google platforms and AI tech news.",
      detail: "Daily reading to spot trends before they become standard practice.",
      tags: ["PPCNewsFeed.com", "Google News", "Feedly AI Feed"]
    },
    {
      title: "The Daily Pulse",
      icon: Mail,
      useCase: "Broader marketing trends and AI tool discovery.",
      detail: "Keeping a finger on the pulse of the wider ecosystem.",
      tags: ["Neil Patel", "Marketing Brew", "Startup Spells", "Instagram AI"]
    }
  ];

  return (
    <section className="py-24 max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-brand-gemini-middle/10 border border-brand-gemini-middle/20 animate-pulse-slow">
            <BookOpen className="w-6 h-6 text-brand-gemini-middle" />
        </div>
        <h2 className="text-4xl font-display font-bold text-white mb-4">Staying Ahead: My Information Diet</h2>
        <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
          In an algorithm-driven world, stagnation is regression. Here is how I maintain an edge in Paid Media strategy and AI integration.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {learningSources.map((source, idx) => {
          const Icon = source.icon;
          return (
            <div 
              key={idx}
              className="group relative flex flex-col h-full bg-slate-900/40 backdrop-blur-sm border border-white/10 rounded-3xl p-8 overflow-hidden transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_30px_rgba(66,133,244,0.1)]"
            >
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-gemini-start/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 rounded-xl bg-black/50 border border-white/10 group-hover:border-brand-gemini-start/50 group-hover:text-brand-gemini-start text-slate-400 transition-all duration-300 group-hover:scale-110">
                    <Icon size={24} />
                  </div>
                </div>

                <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-brand-gemini-start transition-colors">
                  {source.title}
                </h3>
                
                <p className="text-slate-300 font-medium mb-3 text-sm">
                  {source.useCase}
                </p>
                
                <p className="text-slate-500 text-sm italic mb-8 flex-grow leading-relaxed">
                  "{source.detail}"
                </p>

                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                  {source.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-400 font-mono group-hover:border-brand-gemini-start/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ContinuousLearning;