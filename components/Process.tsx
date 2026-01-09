import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { Search, LayoutTemplate, Zap, RefreshCw } from 'lucide-react';

const Process: React.FC = () => {
  const steps = PORTFOLIO_DATA.process_diagram;
  
  const icons = [Search, LayoutTemplate, Zap, RefreshCw];

  return (
    <section className="py-32 relative overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              System Architecture
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-brand-accent to-transparent mx-auto rounded-full opacity-50"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
             {/* Vertical Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-accent/30 to-transparent md:-translate-x-1/2"></div>

            <div className="space-y-16">
                {steps.map((step, idx) => {
                    const Icon = icons[idx];
                    const isEven = idx % 2 === 0;

                    return (
                        <div key={idx} className="relative flex flex-col md:flex-row items-start md:items-center group">
                            
                            {/* Desktop Left Side (Content for Evens) */}
                            <div className={`hidden md:block md:w-1/2 md:pr-16 text-right ${isEven ? 'order-1' : 'order-3'}`}>
                                {isEven && (
                                    <div className="group-hover:-translate-x-2 transition-transform duration-300">
                                        <div className="flex items-center justify-end gap-3 mb-2">
                                            <span className="font-mono text-brand-accent/60 text-sm">0{idx + 1}</span>
                                            <h3 className="text-2xl font-bold text-white">{step.stage}</h3>
                                        </div>
                                        <p className="text-slate-400 leading-relaxed">{step.description}</p>
                                    </div>
                                )}
                            </div>

                            {/* Center Node */}
                            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center md:static md:w-auto md:order-2 z-10 mt-1 md:mt-0">
                                <div className="relative flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-xl bg-slate-950 border border-white/10 group-hover:border-brand-accent group-hover:shadow-[0_0_30px_rgba(56,189,248,0.3)] transition-all duration-300 flex items-center justify-center z-10">
                                        <Icon className="w-7 h-7 text-white group-hover:text-brand-accent transition-colors duration-300" />
                                    </div>
                                    {/* Pulse Effect */}
                                    <div className="absolute inset-0 bg-brand-accent/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </div>

                            {/* Mobile Content / Desktop Right Side */}
                            <div className={`pl-24 md:pl-16 w-full md:w-1/2 ${!isEven ? 'md:order-3' : 'md:order-1'}`}>
                                {/* Mobile View (Always Visible for all items, hidden on desktop) */}
                                <div className="md:hidden">
                                     <div className="flex items-center gap-3 mb-2">
                                        <span className="font-mono text-brand-accent/60 text-sm">0{idx + 1}</span>
                                        <h3 className="text-xl font-bold text-white">{step.stage}</h3>
                                     </div>
                                     <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-white/10 pl-4">{step.description}</p>
                                </div>

                                {/* Desktop View (Only for Odds) */}
                                {!isEven && (
                                    <div className="hidden md:block text-left group-hover:translate-x-2 transition-transform duration-300">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="text-2xl font-bold text-white">{step.stage}</h3>
                                            <span className="font-mono text-brand-accent/60 text-sm">0{idx + 1}</span>
                                        </div>
                                        <p className="text-slate-400 leading-relaxed">{step.description}</p>
                                    </div>
                                )}
                            </div>

                        </div>
                    );
                })}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Process;