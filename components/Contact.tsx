import React, { useState } from 'react';
import { Send, AlertCircle, CheckCircle2 } from 'lucide-react';

interface FormData {
  name: string;
  company: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: '', company: '', email: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-24 max-w-3xl mx-auto px-6">
      <div className="relative rounded-2xl bg-slate-950 border border-white/10 p-8 md:p-12 overflow-hidden shadow-2xl">
        {/* Ambient Background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-purple/5 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-3">Get in Touch</h2>
            <p className="text-slate-400 font-mono text-sm uppercase tracking-wider">
              Contact me about a position here:
            </p>
          </div>

          {isSuccess ? (
            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-8 text-center animate-in fade-in zoom-in duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 text-green-400 mb-4">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-slate-300">
                Thank you for reaching out. I'll get back to you as soon as possible.
              </p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="mt-6 text-sm text-brand-accent hover:text-white transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300">
                    Name <span className="text-brand-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`
                      w-full bg-slate-900/50 border rounded-lg px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 transition-all
                      ${errors.name 
                        ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' 
                        : 'border-white/10 focus:border-brand-accent focus:ring-brand-accent/20'
                      }
                    `}
                    placeholder="Jane Doe"
                  />
                  {errors.name && (
                    <div className="flex items-center gap-1.5 text-red-400 text-xs mt-1 animate-in slide-in-from-top-1">
                      <AlertCircle size={12} />
                      <span>{errors.name}</span>
                    </div>
                  )}
                </div>

                {/* Company Field */}
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-slate-300">
                    Company <span className="text-slate-600 text-xs font-normal ml-1">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/20 transition-all"
                    placeholder="Acme Corp"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-300">
                  Email <span className="text-brand-accent">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`
                    w-full bg-slate-900/50 border rounded-lg px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 transition-all
                    ${errors.email 
                      ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' 
                      : 'border-white/10 focus:border-brand-accent focus:ring-brand-accent/20'
                    }
                  `}
                  placeholder="jane@example.com"
                />
                {errors.email && (
                  <div className="flex items-center gap-1.5 text-red-400 text-xs mt-1 animate-in slide-in-from-top-1">
                    <AlertCircle size={12} />
                    <span>{errors.email}</span>
                  </div>
                )}
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300">
                  Message <span className="text-brand-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`
                    w-full bg-slate-900/50 border rounded-lg px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 transition-all resize-none
                    ${errors.message 
                      ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' 
                      : 'border-white/10 focus:border-brand-accent focus:ring-brand-accent/20'
                    }
                  `}
                  placeholder="Hi Eric, I'd love to discuss a Senior Strategist role..."
                />
                {errors.message && (
                  <div className="flex items-center gap-1.5 text-red-400 text-xs mt-1 animate-in slide-in-from-top-1">
                    <AlertCircle size={12} />
                    <span>{errors.message}</span>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-brand-accent to-blue-600 hover:from-brand-accent/90 hover:to-blue-600/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-brand-accent/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-brand-accent/40 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;