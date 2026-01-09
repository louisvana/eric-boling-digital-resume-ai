
import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';

const FAQ: React.FC = () => {
  const { faqs } = PORTFOLIO_DATA;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 max-w-5xl mx-auto px-6 md:px-12">
      <div className="flex items-center gap-4 mb-12">
        <div className="p-3 rounded-2xl bg-brand-accent/10 border border-brand-accent/20">
          <MessageCircleQuestion className="w-6 h-6 text-brand-accent" />
        </div>
        <div>
          <h2 className="text-3xl font-display font-bold text-white">Interview Intelligence</h2>
          <p className="text-slate-500 font-mono text-xs uppercase tracking-widest mt-1">Commonly asked questions & strategic insights</p>
        </div>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          
          return (
            <div 
              key={idx} 
              className={`
                group rounded-2xl border transition-all duration-300 overflow-hidden
                ${isOpen 
                  ? 'bg-white/[0.04] border-brand-accent/30 shadow-[0_0_30px_rgba(56,189,248,0.05)]' 
                  : 'bg-white/[0.02] border-white/5 hover:border-white/10'
                }
              `}
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`text-lg md:text-xl font-bold transition-colors duration-300 ${isOpen ? 'text-brand-accent' : 'text-slate-200 group-hover:text-white'}`}>
                  {faq.question}
                </span>
                <div className={`shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-accent' : 'text-slate-600'}`}>
                  <ChevronDown size={24} />
                </div>
              </button>

              <div 
                className={`
                  grid transition-all duration-500 ease-in-out
                  ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'}
                `}
              >
                <div className="overflow-hidden">
                  <div className="p-6 pt-0 border-t border-white/5 mt-0">
                    <p className="text-slate-400 leading-relaxed text-sm md:text-base whitespace-pre-wrap font-light">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
