
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { RESUME_DATA } from '../constants';
import { Headphones, Loader2, Square, Play } from 'lucide-react';
import { base64ToUint8Array, pcmToAudioBuffer } from '../utils/audio';

const AudioProfile: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const sourceNodeRef = useRef<AudioBufferSourceNode | null>(null);

  // Initialize AudioContext on user interaction to handle autoplay policies
  const initAudioContext = () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({
        sampleRate: 24000,
      });
    } else if (audioContextRef.current.state === 'suspended') {
      audioContextRef.current.resume();
    }
  };

  const generateScript = () => {
    const { header, summary, experience } = RESUME_DATA;
    // Clean up summary markdown if any (basic removal)
    const cleanSummary = summary.replace(/\*\*/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
    const currentJob = experience[0];
    
    return `
      Hi, I'm ${header.name}, a ${header.title} based in ${header.contact.location}.
      
      Here is a quick summary of my background. ${cleanSummary}
      
      Currently, I am working at ${currentJob.company.replace(/\[|\]|\(.*\)/g, '')} as a ${currentJob.role}, where I specialize in scaling e-commerce brands.
      
      Feel free to ask my AI assistant any questions, or contact me directly at ${header.contact.email}.
    `;
  };

  const handleToggleAudio = async () => {
    initAudioContext();

    if (isPlaying) {
      // Stop playback
      if (sourceNodeRef.current) {
        sourceNodeRef.current.stop();
        sourceNodeRef.current = null;
      }
      setIsPlaying(false);
      return;
    }

    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const script = generateScript();

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-preview-tts',
        contents: [{ parts: [{ text: script }] }],
        config: {
          responseModalities: ['AUDIO'],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: 'Fenrir' },
            },
          },
        },
      });

      const audioData = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;

      if (!audioData) {
        throw new Error("No audio data received");
      }

      if (audioContextRef.current) {
        const pcmBytes = base64ToUint8Array(audioData);
        const audioBuffer = pcmToAudioBuffer(pcmBytes, audioContextRef.current);

        const source = audioContextRef.current.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(audioContextRef.current.destination);
        
        source.onended = () => {
          setIsPlaying(false);
          sourceNodeRef.current = null;
        };

        source.start();
        sourceNodeRef.current = source;
        setIsPlaying(true);
      }

    } catch (error) {
      console.error("Audio generation failed:", error);
      alert("Unable to generate audio profile at this time.");
    } finally {
      setIsLoading(false);
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (sourceNodeRef.current) {
        sourceNodeRef.current.stop();
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  return (
    <button
      onClick={handleToggleAudio}
      disabled={isLoading}
      className={`
        flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-300
        ${isPlaying 
          ? 'bg-brand-accent/20 border-brand-accent text-brand-accent animate-pulse' 
          : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
        }
      `}
      title={isPlaying ? "Stop Audio Profile" : "Listen to Audio Profile"}
    >
      {isLoading ? (
        <Loader2 size={16} className="animate-spin" />
      ) : isPlaying ? (
        <Square size={14} className="fill-current" />
      ) : (
        <Headphones size={16} />
      )}
      <span className="text-xs font-mono font-bold hidden sm:inline">
        {isLoading ? 'GENERATING...' : isPlaying ? 'PLAYING...' : 'LISTEN'}
      </span>
    </button>
  );
};

export default AudioProfile;
