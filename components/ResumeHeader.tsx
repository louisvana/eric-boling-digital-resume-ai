
import React, { useState, useEffect } from 'react';
import { RESUME_DATA } from '../constants';
import { MapPin, Mail, Linkedin } from 'lucide-react';

const ResumeHeader: React.FC = () => {
  const { header } = RESUME_DATA;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`
        sticky top-0 z-50 
        transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
        backdrop-blur-2xl border-b
        ${isScrolled 
          ? 'py-3 border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' 
          : 'py-8 md:py-12 border-transparent bg-transparent'
        }
      `}
      style={{
        background: isScrolled 
          ? 'linear-gradient(90deg, rgba(66, 133, 244, 0.05) 0%, rgba(155, 114, 203, 0.05) 50%, rgba(217, 101, 112, 0.05) 100%)' 
          : 'transparent'
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center">
          
          {/* LEFT: Name and Title */}
          <div className="flex flex-col justify-center z-10 shrink-0">
            <h1 className={`
              font-display font-bold text-white tracking-tight transition-all duration-500 origin-left leading-none
              ${isScrolled ? 'text-xl' : 'text-3xl md:text-4xl mb-1'}
            `}>
              {header.name}
            </h1>
            <p className={`
              font-mono bg-gradient-to-r from-brand-gemini-start to-brand-gemini-middle bg-clip-text text-transparent transition-all duration-500 origin-left
              ${isScrolled ? 'text-[10px] opacity-0 h-0 overflow-hidden' : 'text-sm md:text-base opacity-100'}
            `}>
              {header.title}
            </p>
          </div>

          {/* RIGHT: Collapsible Contact Info */}
          <div className="flex flex-col items-end z-10 gap-4">
            
            {/* Desktop Contact Info - Fades out on scroll */}
            <div className={`
              hidden md:flex flex-col items-end gap-1 text-sm transition-all duration-500 ease-in-out overflow-hidden
              ${isScrolled ? 'max-h-0 opacity-0 -translate-y-4' : 'max-h-[300px] opacity-100 translate-y-0'}
            `}>
              <div className="flex items-center justify-end gap-2 text-slate-400 hover:text-white transition-colors group">
                <MapPin size={14} className="text-slate-600 group-hover:text-brand-gemini-start transition-colors" />
                <span>{header.contact.location}</span>
              </div>
              <div className="flex items-center justify-end gap-2 text-slate-400 hover:text-white transition-colors group">
                <Mail size={14} className="text-slate-600 group-hover:text-brand-gemini-middle transition-colors" />
                <a href={`mailto:${header.contact.email}`}>{header.contact.email}</a>
              </div>
              <div className="flex items-center justify-end gap-2 text-slate-400 hover:text-white transition-colors group">
                <Linkedin size={14} className="text-slate-600 group-hover:text-brand-gemini-start transition-colors" />
                <a href={header.contact.linkedinUrl} target="_blank" rel="noopener noreferrer">
                  {header.contact.linkedin}
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default ResumeHeader;
