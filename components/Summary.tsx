
import React from 'react';
import { RESUME_DATA } from '../constants';
import { MapPin, Mail, Linkedin } from 'lucide-react';

const Summary: React.FC = () => {
  const { contact } = RESUME_DATA.header;

  return (
    <section className="py-12 max-w-5xl mx-auto px-6 md:px-12">
      <h2 className="text-sm font-mono text-brand-accent uppercase tracking-wider mb-4">Professional Summary</h2>
      
      <p className="text-2xl md:text-3xl text-slate-200 leading-relaxed font-light border-l-2 border-brand-purple/50 pl-6 mb-10">
        {RESUME_DATA.summary}
      </p>

      {/* Contact Info Block */}
      <div className="flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/5 pt-8 pl-6">
        
        <div className="flex items-center gap-2 text-slate-400 text-sm font-mono cursor-default">
           <MapPin size={16} className="text-brand-gemini-start" />
           {contact.location}
        </div>

        <a 
          href={`mailto:${contact.email}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group text-sm font-mono"
        >
           <Mail size={16} className="text-brand-gemini-middle group-hover:scale-110 transition-transform" />
           <span className="border-b border-transparent group-hover:border-white/50">{contact.email}</span>
        </a>

        <a 
          href={contact.linkedinUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group text-sm font-mono"
        >
           <Linkedin size={16} className="text-[#0a66c2] group-hover:scale-110 transition-transform" />
           <span className="border-b border-transparent group-hover:border-white/50">{contact.linkedin}</span>
        </a>

      </div>
    </section>
  );
};

export default Summary;
