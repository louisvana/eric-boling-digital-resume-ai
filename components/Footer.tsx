
import React from 'react';
import { PORTFOLIO_DATA, RESUME_DATA } from '../constants';
import { Mail, Linkedin, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const { hero } = PORTFOLIO_DATA;
  const { contact } = RESUME_DATA.header;

  return (
    <footer className="py-12 border-t border-white/10 bg-slate-950 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Identity */}
        <div className="text-center md:text-left">
          <h4 className="text-white font-bold text-lg mb-1">{hero.name}</h4>
          <p className="text-slate-500 text-sm mb-4">{hero.role}</p>
        </div>

        {/* Contact Links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-3">
             <div className="flex items-center gap-2 text-slate-400 text-sm hover:text-white transition-colors cursor-default">
                <MapPin size={16} className="text-brand-gemini-start" />
                <span>{contact.location}</span>
             </div>

             <a href={`mailto:${contact.email}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm group">
                <Mail size={16} className="text-brand-gemini-middle" />
                <span className="group-hover:underline">{contact.email}</span>
            </a>

             <a href={contact.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm group">
                <Linkedin size={16} className="text-[#0a66c2]" />
                <span className="group-hover:underline">{contact.linkedin}</span>
            </a>
        </div>
      </div>
      
      <div className="text-center mt-12 text-xs text-slate-700 font-mono">
        SYSTEM STATUS: ONLINE // RENDERING v1.0.4
      </div>
    </footer>
  );
};

export default Footer;
