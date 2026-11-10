import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, CornerDownLeft, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Array<{ command: string; output: React.ReactNode }>>([
    {
      command: 'system --status',
      output: 'Manan Sharma Woodblock Shell // Systems Online. SAVERA Flagships Active.'
    },
    {
      command: 'help',
      output: (
        <div className="space-y-1 text-[#f5f0e1] font-mono text-xs">
          <div className="text-[#c9a227] font-bold uppercase tracking-wider">Available Commands:</div>
          <div><span className="text-[#48dbfb] font-semibold">help</span> — Display this manual</div>
          <div><span className="text-[#48dbfb] font-semibold">flagships</span> — Jump to Flagship Systems (OJASEWS, GeoChange AI)</div>
          <div><span className="text-[#48dbfb] font-semibold">journey</span> — Jump to Experience & Research Timeline</div>
          <div><span className="text-[#48dbfb] font-semibold">archive</span> / <span className="text-[#48dbfb] font-semibold">work</span> — Jump to 8+ Systems Archive</div>
          <div><span className="text-[#48dbfb] font-semibold">skills</span> — Jump to Technical Workbench</div>
          <div><span className="text-[#48dbfb] font-semibold">education</span> — Jump to Degrees & Certifications</div>
          <div><span className="text-[#48dbfb] font-semibold">contact</span> — Jump to Field Communications Relay</div>
          <div><span className="text-[#48dbfb] font-semibold">resume</span> — Open verified Resume.pdf</div>
          <div><span className="text-[#48dbfb] font-semibold">sudo hire</span> — Authorize interview protocol</div>
          <div><span className="text-[#48dbfb] font-semibold">clear</span> — Clear terminal output buffer</div>
        </div>
      )
    }
  ]);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const scrollToSection = (id: string) => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let response: React.ReactNode;

    switch (trimmed) {
      case 'clear':
        setHistory([]);
        return;
      case 'help':
        response = (
          <div className="space-y-1 text-[#f5f0e1] font-mono text-xs">
            <div className="text-[#c9a227] font-bold uppercase tracking-wider">Available Commands:</div>
            <div><span className="text-[#48dbfb] font-semibold">help</span> — Display this manual</div>
            <div><span className="text-[#48dbfb] font-semibold">flagships</span> — Jump to Flagship Systems</div>
            <div><span className="text-[#48dbfb] font-semibold">journey</span> — Jump to Experience & Research Timeline</div>
            <div><span className="text-[#48dbfb] font-semibold">archive</span> / <span className="text-[#48dbfb] font-semibold">work</span> — Jump to 8+ Systems Archive</div>
            <div><span className="text-[#48dbfb] font-semibold">skills</span> — Jump to Technical Workbench</div>
            <div><span className="text-[#48dbfb] font-semibold">education</span> — Jump to Degrees & Certifications</div>
            <div><span className="text-[#48dbfb] font-semibold">contact</span> — Jump to Direct Communication Relay</div>
            <div><span className="text-[#48dbfb] font-semibold">resume</span> — Open verified Resume.pdf</div>
            <div><span className="text-[#48dbfb] font-semibold">sudo hire</span> — Authorize interview protocol</div>
            <div><span className="text-[#48dbfb] font-semibold">clear</span> — Clear terminal output buffer</div>
          </div>
        );
        break;
      case 'flagships':
      case 'case-studies':
        response = <span className="text-[#1dd1a1] font-semibold">Navigating to [02 // FLAGSHIP SYSTEMS]...</span>;
        scrollToSection('flagships');
        break;
      case 'journey':
      case 'experience':
        response = <span className="text-[#1dd1a1] font-semibold">Navigating to [03 // CAREER & RESEARCH CHRONICLE]...</span>;
        scrollToSection('journey');
        break;
      case 'archive':
      case 'work':
      case 'projects':
        response = <span className="text-[#1dd1a1] font-semibold">Navigating to [04 // SYSTEMS ARCHIVE]...</span>;
        scrollToSection('work');
        break;
      case 'skills':
      case 'stack':
        response = <span className="text-[#1dd1a1] font-semibold">Navigating to [05 // TECHNICAL WORKBENCH]...</span>;
        scrollToSection('skills');
        break;
      case 'education':
      case 'certs':
        response = <span className="text-[#1dd1a1] font-semibold">Navigating to [06 // CREDENTIALS & HONORS]...</span>;
        scrollToSection('education');
        break;
      case 'contact':
        response = <span className="text-[#1dd1a1] font-semibold">Navigating to [07 // CONTACT RELAY]...</span>;
        scrollToSection('contact');
        break;
      case 'resume':
        response = (
          <div className="space-y-1 text-[#f5f0e1] font-mono text-xs">
            <div>Opening Resume.pdf...</div>
            <a href={personalInfo.resumeUrl} target="_blank" rel="noreferrer" className="underline text-[#48dbfb]">
              [Click here if download does not begin]
            </a>
          </div>
        );
        window.open(personalInfo.resumeUrl, '_blank');
        break;
      case 'sudo hire':
      case 'hire':
        response = (
          <div className="space-y-1 bg-[#1dd1a1]/10 p-3 border-2 border-[#1dd1a1] text-xs text-[#1dd1a1] font-mono">
            <div className="font-semibold flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#1dd1a1]" />
              <span>ACCESS GRANTED: HIRING RELAY INITIATED</span>
            </div>
            <div>Routing transmission to Manan Sharma ({personalInfo.email})...</div>
          </div>
        );
        setTimeout(() => scrollToSection('contact'), 1000);
        break;
      default:
        response = (
          <span className="text-[#d4553a] font-mono text-xs">
            Command not recognized: '{cmd}'. Type <span className="underline font-semibold">help</span> for available commands.
          </span>
        );
    }

    setHistory(prev => [...prev, { command: cmd, output: response }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleCommand(input);
    setInput('');
  };

  return (
    <div 
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-[#1a3055]/75"
      onClick={onClose}
    >
      <div 
        className="relative max-w-2xl w-full bg-[#1a3055] border-3 border-[#1a3055] shadow-woodblock-lg font-mono overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b-2 border-[#f5f0e1]/20 bg-[#12223d]">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 bg-[#d4553a] border border-[#f5f0e1]/40 inline-block"></span>
              <span className="w-3 h-3 bg-[#c9a227] border border-[#f5f0e1]/40 inline-block"></span>
              <span className="w-3 h-3 bg-[#1dd1a1] border border-[#f5f0e1]/40 inline-block"></span>
            </div>
            <div className="text-xs text-[#f5f0e1] font-serif font-bold flex items-center gap-1.5 pl-2 tracking-wider uppercase">
              <TerminalIcon className="w-3.5 h-3.5 text-[#c9a227]" />
              <span>manan@ukiyo-shell:~</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-7 h-7 border-2 border-[#f5f0e1]/40 bg-[#d4553a] text-[#f5f0e1] flex items-center justify-center hover:opacity-90 transition-opacity"
            aria-label="Close terminal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Body */}
        <div className="p-5 max-h-[55vh] overflow-y-auto space-y-3.5 text-xs bg-[#162744]">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-[#f5f0e1]/70">
                <span className="text-[#c9a227] font-bold">guest@manan:~$</span>
                <span className="text-[#f5f0e1] font-semibold">{item.command}</span>
              </div>
              <div className="pl-4 border-l-2 border-[#c9a227]/40">
                {item.output}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-3 border-t-2 border-[#f5f0e1]/20 bg-[#12223d] flex items-center gap-2">
          <span className="text-[#c9a227] font-bold text-xs pl-2">guest@manan:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help' or command..."
            className="flex-1 bg-transparent text-[#f5f0e1] text-xs font-mono outline-none placeholder:text-[#f5f0e1]/40"
            spellCheck={false}
          />
          <button
            type="submit"
            className="p-1.5 bg-[#d4553a] text-[#f5f0e1] border border-[#f5f0e1]/30 hover:opacity-90 transition-opacity"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
};
