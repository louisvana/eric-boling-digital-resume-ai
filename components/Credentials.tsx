import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { Award, CheckCircle2 } from 'lucide-react';

const Credentials: React.FC = () => {
  const { credentials } = PORTFOLIO_DATA;

  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Award className="text-brand-purple w-6 h-6" />
          <h2 className="text-2xl font-bold text-white">Verified Credentials</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {credentials.map((cred, idx) => (
            <div key={idx} className="group p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-brand-purple/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-brand-purple shrink-0 mt-0.5" />
                <span className="text-slate-300 font-light text-sm md:text-base leading-relaxed">
                  {cred}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Credentials;