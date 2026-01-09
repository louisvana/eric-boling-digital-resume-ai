import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { ShieldCheck } from 'lucide-react';

const Introduction: React.FC = () => {
  return (
    <section id="intro" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 backdrop-blur-lg">
          <div className="flex items-start gap-6">
            <div className="hidden md:flex flex-shrink-0 w-16 h-16 rounded-full bg-brand-accent/10 items-center justify-center border border-brand-accent/20">
              <ShieldCheck className="w-8 h-8 text-brand-accent" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">The Logic Barrier</h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                {PORTFOLIO_DATA.introduction.philosophy}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;