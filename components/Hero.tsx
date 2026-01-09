
import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../../constants';
import { Sparkles, ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const { hero } = PORTFOLIO_DATA;
  const [isVisible, setIsVisible] = useState(false);
  
  // Generate static particles for the background
  const [particles] = useState(() => 
    Array.from({ length: 30 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 3 + 1}px`,
      duration: `${Math.random() * 10 + 10}s`,
      delay: `${Math.random() * 5}s`,
      opacity: Math.random() * 0.5 + 0.1
    }))
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {particles.map((p, i) => (
          <div 
            key={i}
            className="absolute bg-white rounded-full animate-float"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              animationDuration: p.duration,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Central Glowing Orb */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-brand-gemini-start/20 via-brand-gemini-middle/20 to-brand-gemini-end/20 rounded-full blur-[100px] -z-10 transition-all duration-[2000ms] ease-in-out ${isVisible ? 'opacity-100 animate-pulse-slow scale-100' : 'opacity-0 scale-50'}`}></div>

      <div className="max-w-6xl mx-auto px-6 text-center z-10 flex flex-col items-center">
        
        {/* Profile Picture with "Cool" Effect */}
        <div className={`transition-all duration-1000 delay-300 ease-out transform ${isVisible ? 'opacity-100 translate-y-0 scale-100 blur-0' : 'opacity-0 translate-y-12 scale-90 blur-sm'}`}>
            <div className="relative mb-6 group animate-float">
                {/* Rotating Gradient Ring */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-gemini-start via-brand-gemini-middle to-brand-gemini-end rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
                
                {/* Image Container */}
                <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-full p-[3px] bg-gradient-to-br from-brand-gemini-start via-brand-gemini-middle to-brand-gemini-end">
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-black relative bg-black">
                        <img 
                            src={hero.image} 
                            alt={hero.name} 
                            className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" 
                        />
                        {/* Glossy overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter text-white mb-3 leading-[1.1]">
          <span className={`block transition-all duration-1000 delay-700 ease-out transform ${isVisible ? 'opacity-100 translate-x-0 blur-0' : 'opacity-0 -translate-x-12 blur-sm'}`}>
            {hero.name}
          </span>
          <span className={`block bg-[linear-gradient(to_right,#4285f4,#9b72cb,#d96570,#4285f4)] bg-[length:200%_auto] animate-shimmer bg-clip-text text-transparent transition-all duration-1000 delay-[900ms] ease-out transform ${isVisible ? 'opacity-100 translate-x-0 blur-0' : 'opacity-0 translate-x-12 blur-sm'}`}>
            {hero.role}
          </span>
        </h1>

        {/* Tagline with Vivid Underglow & Shine */}
        <div className={`relative max-w-3xl mx-auto mb-6 transition-all duration-1000 delay-[1100ms] ease-out transform ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-sm'}`}>
           {/* Moving Underglow Glow */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[150%] bg-gradient-to-r from-brand-gemini-start/40 via-brand-gemini-middle/40 to-brand-gemini-end/40 blur-[50px] animate-pulse rounded-full opacity-60 pointer-events-none"></div>
           
           {/* Shimmering Bold Text */}
           <p className="relative z-10 text-xl md:text-2xl font-bold leading-relaxed bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.white),theme(colors.slate.200),theme(colors.white))] bg-[length:200%_auto] animate-shimmer drop-shadow-[0_0_15px_rgba(66,133,244,0.5)]">
             {hero.tagline}
           </p>
        </div>

        {/* AI Assistant CTA & Scroll Button Container */}
        <div className={`mt-4 mb-8 w-full flex flex-col items-center gap-6 transition-all duration-1000 delay-[1300ms] ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <button 
                onClick={() => window.dispatchEvent(new Event('open-chat'))}
                className="relative group overflow-hidden rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-brand-gemini-middle/50 p-6 transition-all duration-300 text-left md:text-center max-w-lg mx-auto w-full cursor-pointer shadow-lg shadow-black/20"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-gemini-start/5 via-brand-gemini-middle/5 to-brand-gemini-end/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-4 md:gap-6">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-brand-gemini-start/10 flex items-center justify-center border border-brand-gemini-start/20 group-hover:scale-110 transition-transform duration-300">
                        <Sparkles className="w-6 h-6 text-brand-gemini-start" />
                    </div>
                    
                    <div className="flex-1">
                        <h3 className="text-white font-display font-bold text-lg mb-1 group-hover:text-brand-gemini-middle transition-colors">
                            Use Eric's AI Assistant
                        </h3>
                        <div className="text-slate-400 text-sm space-y-1">
                            <p className="flex items-center gap-2 md:justify-center">
                                <span className="w-1 h-1 rounded-full bg-brand-gemini-start"></span>
                                Summarize Resume & Experience
                            </p>
                            <p className="flex items-center gap-2 md:justify-center">
                                <span className="w-1 h-1 rounded-full bg-brand-gemini-middle"></span>
                                Match Skills to Your Job Description
                            </p>
                        </div>
                    </div>

                    <div className="hidden md:flex shrink-0 w-8 h-8 rounded-full border border-white/10 items-center justify-center text-slate-500 group-hover:border-brand-gemini-start/50 group-hover:text-white transition-all">
                        <ArrowRight size={14} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                    </div>
                </div>
            </button>

            {/* Scroll Down CTA - Pulse Glowing Button */}
            <button
                onClick={() => {
                    const element = document.getElementById('experience');
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                }}
                className="relative group px-8 py-3 rounded-full bg-slate-950 border border-brand-gemini-start/30 shadow-[0_0_20px_-5px_rgba(66,133,244,0.4)] hover:shadow-[0_0_30px_-5px_rgba(66,133,244,0.6)] transition-all duration-300 overflow-hidden"
            >
                {/* Glowing Pulse Background */}
                <div className="absolute inset-0 bg-brand-gemini-start/10 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                
                {/* Content */}
                <div className="relative z-10 flex items-center gap-3">
                    <span className="text-xs font-mono uppercase tracking-widest font-bold text-brand-gemini-start group-hover:text-white transition-colors">
                        Scroll Directly To Why I'm Qualified
                    </span>
                    <ChevronDown size={14} className="text-brand-gemini-start group-hover:text-white group-hover:translate-y-0.5 transition-all" />
                </div>
            </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;
