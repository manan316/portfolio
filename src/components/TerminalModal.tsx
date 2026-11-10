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
      output: 'Manan Sharma Engineering Shell // Systems Online. SAVERA Flagships Active.'
    },
    {
      command: 'help',
      output: (
        <div className="space-y-1 text-zinc-300 font-mono text-xs">
          <div className="text-cyan-400 font-semibold uppercase">Available Commands:</div>
          <div><span className="text-violet-400 font-semibold">help</span> — Display this manual</div>
          <div><span className="text-violet-400 font-semibold">sim</span> / <span className="text-violet-400 font-semibold">lab</span> — Jump to Interactive Simulation Lab</div>
          <div><span className="text-violet-400 font-semibold">flagships</span> — Jump to Flagship Systems (OJASEWS, GeoChange AI)</div>
          <div><span className="text-violet-400 font-semibold">journey</span> — Jump to Experience & Research Timeline</div>
          <div><span className="text-violet-400 font-semibold">archive</span> / <span className="text-violet-400 font-semibold">work</span> — Jump to 8+ Systems Archive</div>
          <div><span className="text-violet-400 font-semibold">skills</span> — Jump to Technical Workbench</div>
          <div><span className="text-violet-400 font-semibold">contact</span> — Jump to Field Communications Relay</div>
          <div><span className="text-violet-400 font-semibold">resume</span> — Open verified Resume.pdf</div>
          <div><span className="text-violet-400 font-semibold">sudo hire</span> — Authorize interview protocol</div>
          <div><span className="text-violet-400 font-semibold">clear</span> — Clear terminal output buffer</div>
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
          <div className="space-y-1 text-zinc-300 font-mono text-xs">
            <div className="text-cyan-400 font-semibold uppercase">Available Commands:</div>
            <div><span className="text-violet-400 font-semibold">help</span> — Display this manual</div>
            <div><span className="text-violet-400 font-semibold">sim</span> / <span className="text-violet-400 font-semibold">lab</span> — Jump to Simulation Lab</div>
            <div><span className="text-violet-400 font-semibold">flagships</span> — Jump to Flagship Systems</div>
            <div><span className="text-violet-400 font-semibold">journey</span> — Jump to Experience & Research Timeline</div>
            <div><span className="text-violet-400 font-semibold">archive</span> / <span className="text-violet-400 font-semibold">work</span> — Jump to 8+ Systems Archive</div>
            <div><span className="text-violet-400 font-semibold">skills</span> — Jump to Technical Workbench</div>
            <div><span className="text-violet-400 font-semibold">contact</span> — Jump to Direct Communication Relay</div>
            <div><span className="text-violet-400 font-semibold">resume</span> — Open verified Resume.pdf</div>
            <div><span className="text-violet-400 font-semibold">sudo hire</span> — Authorize interview protocol</div>
            <div><span className="text-violet-400 font-semibold">clear</span> — Clear terminal output buffer</div>
          </div>
        );
        break;
      case 'sim':
      case 'lab':
        response = <span className="text-emerald-400 font-semibold">Navigating to [03 // SIMULATION LAB]...</span>;
        scrollToSection('lab');
        break;
      case 'flagships':
      case 'case-studies':
        response = <span className="text-emerald-400 font-semibold">Navigating to [02 // FLAGSHIP SYSTEMS]...</span>;
        scrollToSection('flagships');
        break;
      case 'journey':
      case 'experience':
        response = <span className="text-emerald-400 font-semibold">Navigating to [04 // CAREER & RESEARCH CHRONICLE]...</span>;
        scrollToSection('journey');
        break;
      case 'archive':
      case 'work':
      case 'projects':
        response = <span className="text-emerald-400 font-semibold">Navigating to [05 // SYSTEMS ARCHIVE]...</span>;
        scrollToSection('work');
        break;
      case 'skills':
        response = <span className="text-emerald-400 font-semibold">Navigating to [06 // TECHNICAL WORKBENCH]...</span>;
        scrollToSection('skills');
        break;
      case 'contact':
        response = <span className="text-emerald-400 font-semibold">Navigating to [07 // CONTACT RELAY]...</span>;
        scrollToSection('contact');
        break;
      case 'resume':
        response = (
          <div className="space-y-1 text-zinc-300 font-mono text-xs">
            <div>Opening Resume.pdf...</div>
            <a href={personalInfo.resumeUrl} target="_blank" rel="noreferrer" className="underline text-cyan-400">
              [Click here if download does not begin]
            </a>
          </div>
        );
        window.open(personalInfo.resumeUrl, '_blank');
        break;
      case 'sudo hire':
      case 'hire':
        response = (
          <div className="space-y-1 bg-emerald-500/10 p-3 rounded-lg border border-emerald-500/20 text-xs text-emerald-300 font-mono">
            <div className="font-semibold flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>ACCESS GRANTED: HIRING RELAY INITIATED</span>
            </div>
            <div>Routing transmission to Manan Sharma ({personalInfo.email})...</div>
          </div>
        );
        setTimeout(() => scrollToSection('contact'), 1000);
        break;
      default:
        response = (
          <span className="text-rose-400 font-mono text-xs">
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
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      <div 
        className="relative max-w-2xl w-full bg-zinc-900 border border-white/15 rounded-2xl shadow-2xl font-mono overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-zinc-950/60">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
            </div>
            <div className="text-xs text-zinc-300 font-semibold flex items-center gap-1.5 pl-2">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>manan@shell:~</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-full text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
            aria-label="Close terminal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Body */}
        <div className="p-5 max-h-[55vh] overflow-y-auto space-y-3.5 text-xs bg-zinc-950/90">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-zinc-400">
                <span className="text-cyan-400 font-semibold">guest@manan:~$</span>
                <span className="text-white">{item.command}</span>
              </div>
              <div className="pl-4 border-l border-zinc-800">
                {item.output}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-3 border-t border-white/10 bg-zinc-900 flex items-center gap-2">
          <span className="text-cyan-400 font-semibold text-xs pl-2">guest@manan:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help' or command..."
            className="flex-1 bg-transparent text-white text-xs font-mono outline-none"
            spellCheck={false}
          />
          <button
            type="submit"
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-colors"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
};
