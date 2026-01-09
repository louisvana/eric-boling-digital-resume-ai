
import React from 'react';
import { EMPLOYMENT_DATA } from '../constants';
import { MapPin, Banknote, ShieldPlus, TrendingUp } from 'lucide-react';

const MustHaves: React.FC = () => {
  const { title, intro, items } = EMPLOYMENT_DATA;
  
  const icons = [MapPin, Banknote, ShieldPlus, TrendingUp];

  return (
    <section id="must-haves" className="pt-10 pb-24 max-w-5xl mx-auto px-6 md:px-12 scroll-mt-20">
      <div className="relative rounded-2xl bg-white/[0.02] border border-white/5 p-8 md:p-12 overflow-hidden">
        {/* Background Ambience */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/5 rounded-full blur-[80px] pointer-events-none"></div>

        <h2 className="text-2xl font-bold text-white mb-4 text-center">{title}</h2>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto leading-relaxed">
          {intro}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => {
            const Icon = icons[idx] || MapPin;
            return (
              <div key={idx} className="flex flex-col items-center text-center p-6 rounded-xl bg-[#050b1d] border border-white/5 hover:border-brand-accent/20 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-slate-800/50 flex items-center justify-center mb-4 text-brand-accent group-hover:scale-110 transition-transform duration-300">
                  <Icon size={24} />
                </div>
                <h3 className="text-sm font-mono text-slate-500 uppercase tracking-widest mb-2 font-bold">
                  {item.label}
                </h3>
                <p className="text-white font-medium">
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MustHaves;
    