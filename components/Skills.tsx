
import React, { useState } from 'react';
import { RESUME_DATA } from '../constants';
import { Cpu, Database, User, Scan, Target, Server } from 'lucide-react';

const Skills: React.FC = () => {
  const { skills } = RESUME_DATA;
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...skills.map((group) => group.category)];
  
  const filteredSkills = activeCategory === "All" 
    ? skills 
    : skills.filter((group) => group.category === activeCategory);

  return (
    <section className="py-12 max-w-5xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <Cpu className="text-brand-accent" />
                Technical Skills
            </h2>

            <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`
                            px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wide transition-all duration-300 border
                            ${activeCategory === cat 
                                ? 'bg-brand-accent text-brand-dark border-brand-accent font-bold shadow-lg shadow-brand-accent/20' 
                                : 'bg-transparent text-slate-500 border-white/10 hover:border-brand-accent/50 hover:text-white'
                            }
                        `}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>
        
        <div className="grid grid-cols-1 gap-12 min-h-[300px]">
            {filteredSkills.map((group) => (
                <div key={group.category} className="relative animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider mb-4 border-b border-white/10 pb-2 flex items-center gap-2">
                        {group.category}
                    </h3>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                        {group.items.map((skill, sIdx) => (
                            <span key={sIdx} className="px-3 py-1.5 rounded-md bg-slate-800/50 text-slate-200 text-sm border border-slate-700 hover:border-brand-accent/30 hover:bg-slate-800 transition-colors cursor-default">
                                {skill}
                            </span>
                        ))}
                    </div>

                    {/* DataTag Section - Reimagined */}
                    {group.category === "Organizational & Data" && (
                        <div id="datatag-card" className="mt-32 scroll-mt-28">
                            <div className="relative rounded-3xl bg-[#0a0d14] border border-brand-purple/20 overflow-hidden shadow-2xl group">
                                {/* Background Effects */}
                                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-purple/10 via-transparent to-transparent"></div>
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-purple to-transparent opacity-50"></div>
                                
                                <div className="grid lg:grid-cols-5 relative z-10">
                                    
                                    {/* Left Panel: Context & Process (3 cols) */}
                                    <div className="lg:col-span-3 p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="p-3 rounded-xl bg-brand-purple/10 border border-brand-purple/20 text-brand-purple shadow-[0_0_15px_rgba(167,139,250,0.1)]">
                                                <Database size={28} />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-white tracking-tight leading-none mb-1">DataTag</h3>
                                                <p className="text-xs text-brand-purple font-mono uppercase tracking-widest font-bold">Proprietary SaaS Technology</p>
                                            </div>
                                        </div>

                                        <p className="text-slate-400 leading-relaxed mb-10 text-sm md:text-base">
                                            A proprietary engine that deanonymizes web traffic to build first-party audiences. We turn invisible visitors into actionable profiles by resolving identity at the server level.
                                        </p>

                                        {/* Process Flow */}
                                        <div className="space-y-8 relative">
                                            {/* Connecting Line */}
                                            <div className="absolute left-6 top-4 bottom-8 w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent -z-10"></div>

                                            {[
                                                { icon: User, title: "Visitor Entry", desc: "User lands on site. Cookies accepted or rejected.", color: "text-slate-400", borderColor: "border-slate-700" },
                                                { icon: Scan, title: "Identity Resolution", desc: "Cross-referencing IP & device fingerprint against proprietary data graph.", color: "text-brand-purple", borderColor: "border-brand-purple/50" },
                                                { icon: Target, title: "Audience Activation", desc: "Push profile to Meta CAPI, Google Ads, or CRM for retargeting.", color: "text-brand-accent", borderColor: "border-brand-accent/50" }
                                            ].map((step, idx) => (
                                                <div key={idx} className="flex items-start gap-5">
                                                    <div className={`w-12 h-12 rounded-full bg-[#0a0d14] border ${step.borderColor} flex items-center justify-center shrink-0 ${step.color} shadow-lg z-10`}>
                                                        <step.icon size={20} />
                                                    </div>
                                                    <div className="pt-1">
                                                        <h4 className={`font-bold text-sm mb-1 ${idx === 1 ? 'text-brand-purple' : 'text-white'}`}>{step.title}</h4>
                                                        <p className="text-slate-500 text-xs leading-relaxed max-w-xs">{step.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Right Panel: The Data Payload (2 cols) */}
                                    <div className="lg:col-span-2 bg-[#05060a] p-8 md:p-10 flex flex-col justify-center relative overflow-hidden">
                                        {/* Code/Terminal Look */}
                                        <div className="absolute top-0 left-0 right-0 h-8 bg-white/5 flex items-center px-4 gap-1.5 border-b border-white/5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
                                        </div>

                                        <div className="mt-6 mb-6">
                                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-mono border border-green-500/20 shadow-[0_0_10px_rgba(74,222,128,0.1)]">
                                                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                                                MATCH_FOUND
                                            </span>
                                        </div>

                                        <div className="space-y-4 font-mono text-xs md:text-sm relative z-10">
                                            <div className="p-4 md:p-6 rounded-xl bg-white/[0.03] border border-white/5 space-y-4 backdrop-blur-sm">
                                                <div className="flex justify-between border-b border-white/5 pb-3">
                                                    <span className="text-slate-500">profile_id</span>
                                                    <span className="text-brand-purple">usr_8492_x9</span>
                                                </div>
                                                <div className="space-y-3">
                                                    <div className="flex justify-between items-center">
                                                        <span className="text-slate-600">PII_Name</span>
                                                        <span className="text-slate-300 bg-white/5 px-1.5 rounded">Alex J. *****</span>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <span className="text-slate-600">PII_Email</span>
                                                        <span className="text-slate-300 bg-white/5 px-1.5 rounded">alex.j@****.com</span>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <span className="text-slate-600">Location</span>
                                                        <span className="text-slate-300">Louisville, KY</span>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <span className="text-slate-600">Net_Worth</span>
                                                        <span className="text-green-400 font-bold">$100k - $250k</span>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <span className="text-slate-600">Intent_Score</span>
                                                        <span className="text-brand-accent font-bold">High (85/100)</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between text-[10px] text-slate-600 mt-4 px-2">
                                                <span>Latency: 45ms</span>
                                                <span className="flex items-center gap-1"><Server size={10} /> server_us_east</span>
                                            </div>
                                        </div>

                                        {/* Grid decoration */}
                                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none opacity-20"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    </section>
  );
};

export default Skills;
    