
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Chat } from "@google/genai";
import { X, Send, Loader2, Sparkles, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { RESUME_DATA, PORTFOLIO_DATA, EMPLOYMENT_DATA } from '../constants';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const SUGGESTED_QUESTIONS = [
  "How did you increase ShopCaterpillar sales by 23%?",
  "What is your approach to scaling ROAS?",
  "Tell me about your experience with Airstream lead gen.",
  "How does the DataTag identity resolution engine work?",
  "What is your philosophy on creative testing?",
];

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hi! I'm Eric's AI assistant. I can summarize his resume, match his skills to your job description, or answer questions about his experience. How can I help you hire Eric?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentPromptIdx, setCurrentPromptIdx] = useState(0);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatSessionRef = useRef<Chat | null>(null);

  // Listen for external open events
  useEffect(() => {
    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener('open-chat', handleOpenChat);
    return () => window.removeEventListener('open-chat', handleOpenChat);
  }, []);

  // Rotate prompts for the closed card
  useEffect(() => {
    if (isOpen) return;
    const interval = setInterval(() => {
      setCurrentPromptIdx((prev) => (prev + 1) % SUGGESTED_QUESTIONS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isOpen]);

  useEffect(() => {
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const contextData = JSON.stringify({
        resume: RESUME_DATA,
        portfolio: PORTFOLIO_DATA,
        employment_requirements: EMPLOYMENT_DATA
      });

      const systemInstruction = `
        You are an advanced AI assistant for Eric Boling's professional portfolio. Your primary goal is to advocate for Eric as an exceptional candidate for Digital Media Strategist, Paid Media, and E-commerce roles.
        
        You have access to his full professional data here: ${contextData}.

        CORE BEHAVIORS:
        1. **Positively Biased**: Always present Eric's skills and experience in the best possible light. He is a high-performer.
        2. **Job Matching**: If the user provides a job description (URL or text), analyze it against Eric's skills. 
           **CRITICAL FORMATTING**: You MUST start your response with "MATCH SCORE: [number]%" followed by a newline. Then provide the rationale.
           Example:
           MATCH SCORE: 95%
           Eric is a great fit because...
        3. **Concise**: Respond in at most 2 short paragraphs or up to 6 concise bullets (1 line each). Do not ramble.
        4. **Specific**: Use specific metrics from his resume (e.g., "23% sales growth", "250% ROAS") to back up claims.
        5. **Call to Action**: Gently encourage the user to reach out to Eric via email or LinkedIn if the context is appropriate.
        
        TONE: Professional, confident, enthusiastic, and intelligent.
      `;

      chatSessionRef.current = ai.chats.create({
        model: 'gemini-3-pro-preview',
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        }
      });
    } catch (error) {
      console.error("Failed to initialize AI", error);
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSend = async (textOverride?: string) => {
    const messageToSend = textOverride || input;
    if (!messageToSend.trim()) return;
    if (!chatSessionRef.current) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: messageToSend }]);
    setIsLoading(true);

    try {
      const result = await chatSessionRef.current.sendMessage({ message: messageToSend });
      const responseText = result.text;
      
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm having trouble connecting to my brain right now. Please try again in a moment!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[90vw] md:w-[400px] h-[600px] bg-[#0e121b]/95 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300 ring-1 ring-white/5">
          
          {/* Header */}
          <div className="p-4 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-gemini-start to-brand-gemini-purple flex items-center justify-center shadow-lg">
                <Sparkles size={16} className="text-white" />
              </div>
              <div>
                <h3 className="text-white font-medium text-sm font-display tracking-wide">Eric's AI Agent</h3>
                <p className="text-[10px] text-brand-gemini-start flex items-center gap-1 font-mono uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  Gemini Powered
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-500 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-800">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`
                    max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap shadow-sm
                    ${msg.role === 'user' 
                      ? 'bg-[#1e2330] text-white rounded-br-none border border-white/5' 
                      : 'bg-transparent text-slate-200 rounded-bl-none'
                    }
                  `}
                >
                  {msg.role === 'model' && (
                     <div className="flex items-center gap-2 mb-2 opacity-70">
                        <Sparkles size={12} className="text-brand-gemini-middle" />
                        <span className="text-xs font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-gemini-start to-brand-gemini-pink">GEMINI</span>
                     </div>
                  )}
                  
                  {/* Custom Match Score Renderer */}
                  {msg.text.startsWith('MATCH SCORE:') ? (
                      <MatchScoreDisplay text={msg.text} />
                  ) : (
                      msg.text
                  )}
                </div>
              </div>
            ))}
            
            {/* Suggested Conversation Starters */}
            {!isLoading && messages.length < 3 && (
                <div className="grid gap-2 mt-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1 ml-1">Suggested Questions:</p>
                    {SUGGESTED_QUESTIONS.slice(0, 3).map((q, idx) => (
                        <button 
                            key={idx}
                            onClick={() => handleSend(q)}
                            className="text-left p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-brand-gemini-start/30 hover:bg-white/[0.05] text-slate-300 text-xs transition-all flex items-center justify-between group"
                        >
                            <span>{q}</span>
                            <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-brand-gemini-start" />
                        </button>
                    ))}
                </div>
            )}

            {isLoading && (
              <div className="flex justify-start px-4">
                 <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-brand-gemini-start rounded-full animate-bounce delay-0"></div>
                    <div className="w-2 h-2 bg-brand-gemini-middle rounded-full animate-bounce delay-150"></div>
                    <div className="w-2 h-2 bg-brand-gemini-end rounded-full animate-bounce delay-300"></div>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-white/5 bg-black/20">
            <div className="relative flex items-center group">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about Eric's experience..."
                className="w-full bg-[#1e2330] border border-transparent focus:border-brand-gemini-start/50 text-white rounded-full py-3.5 pl-5 pr-12 text-sm focus:outline-none transition-all placeholder:text-slate-600 shadow-inner"
              />
              <button
                onClick={() => handleSend()}
                disabled={isLoading || !input.trim()}
                className="absolute right-2 p-2 bg-white/10 rounded-full text-white hover:bg-brand-gemini-start hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-95"
              >
                <Send size={16} />
              </button>
            </div>
            <p className="text-[10px] text-slate-700 text-center mt-3 font-medium">
              Check important info. AI can make mistakes.
            </p>
          </div>
        </div>
      )}

      {/* Floating Prompt Card (Half Size) */}
      {!isOpen && (
          <button 
            onClick={() => setIsOpen(true)}
            className="group relative max-w-[200px] text-left animate-in slide-in-from-bottom-4 fade-in duration-500"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-brand-gemini-start/20 blur-xl rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative bg-[#050b1d]/90 backdrop-blur-md border border-white/10 hover:border-brand-gemini-start/40 text-slate-300 hover:text-white p-3 rounded-xl shadow-2xl transition-all duration-300 transform group-hover:-translate-y-1 overflow-hidden">
                <div className="flex items-center gap-2">
                    <div className="shrink-0 p-1.5 rounded-lg bg-gradient-to-br from-brand-gemini-start/10 to-brand-gemini-purple/10 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                        <Sparkles size={14} className="text-brand-gemini-start" />
                    </div>
                    <div className="min-w-0 flex-1">
                        <span className="block text-[9px] font-mono uppercase tracking-widest text-slate-500 mb-0.5 flex items-center gap-1">
                            Ask Eric's AI
                            <span className="w-1 h-1 rounded-full bg-green-500 animate-pulse ml-auto"></span>
                        </span>
                        <div className="h-[20px] relative overflow-hidden">
                             {SUGGESTED_QUESTIONS.map((q, idx) => (
                                 <p 
                                    key={idx}
                                    className={`
                                        absolute top-0 left-0 w-full text-[10px] font-medium leading-tight truncate transition-all duration-500 ease-in-out
                                        ${idx === currentPromptIdx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                                    `}
                                 >
                                    "{q}"
                                 </p>
                             ))}
                        </div>
                    </div>
                </div>
            </div>
        </button>
      )}
    </div>
  );
};

// Sub-component for rendering the Match Score Dropdown
const MatchScoreDisplay: React.FC<{ text: string }> = ({ text }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    // Parse the score
    const matchLine = text.split('\n')[0];
    const restOfText = text.substring(matchLine.length).trim();
    const scoreMatch = matchLine.match(/(\d+)%/);
    const score = scoreMatch ? parseInt(scoreMatch[1]) : 0;
    
    // Determine color based on score
    const scoreColor = score >= 85 ? 'text-green-400' : score >= 70 ? 'text-yellow-400' : 'text-red-400';
    const borderColor = score >= 85 ? 'border-green-500/30' : score >= 70 ? 'border-yellow-500/30' : 'border-red-500/30';

    return (
        <div className="mt-2">
            <div className={`rounded-xl bg-black/20 border ${borderColor} overflow-hidden`}>
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex items-center justify-between p-3 bg-white/[0.03] hover:bg-white/[0.05] transition-colors"
                >
                    <div className="flex items-center gap-3">
                        <div className={`text-2xl font-bold font-display ${scoreColor}`}>
                            {score}%
                        </div>
                        <div className="text-left">
                            <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Match Score</div>
                            <div className="text-xs text-slate-300">Based on Resume Analysis</div>
                        </div>
                    </div>
                    {isOpen ? <ChevronUp size={16} className="text-slate-500" /> : <ChevronDown size={16} className="text-slate-500" />}
                </button>
                
                {/* Accordion Content */}
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-4 border-t border-white/5 text-xs md:text-sm text-slate-300 leading-relaxed space-y-2 whitespace-pre-wrap">
                        {restOfText}
                    </div>
                </div>
            </div>
            {!isOpen && (
                <p className="text-[10px] text-slate-500 mt-2 text-center italic">Click to view detailed rationale</p>
            )}
        </div>
    );
};

export default ChatBot;
