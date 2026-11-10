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
      output: 'MANAN SHARMA SHELL // SYSTEMS ONLINE. OVERSIZED TYPOGRAPHY ACTIVE.'
    },
    {
      command: 'help',
      output: (
        <div className="space-y-1 text-[#fafaf8] font-mono text-xs">
          <div className="text-[#ff4d00] font-bold uppercase tracking-wider">AVAILABLE COMMANDS:</div>
          <div><span className="text-[#ff4d00] font-semibold">help</span> — Display this manual</div>
          <div><span className="text-[#ff4d00] font-semibold">flagships</span> — Jump to Flagship Systems (OJASEWS, GeoChange AI)</div>
          <div><span className="text-[#ff4d00] font-semibold">journey</span> — Jump to Experience & Research Timeline</div>
          <div><span className="text-[#ff4d00] font-semibold">archive</span> / <span className="text-[#ff4d00] font-semibold">work</span> — Jump to Selected Works Archive</div>
          <div><span className="text-[#ff4d00] font-semibold">skills</span> — Jump to Technical Workbench</div>
          <div><span className="text-[#ff4d00] font-semibold">education</span> — Jump to Degrees & Certifications</div>
          <div><span className="text-[#ff4d00] font-semibold">contact</span> — Jump to Field Communications Relay</div>
          <div><span className="text-[#ff4d00] font-semibold">resume</span> — Open verified Resume.pdf</div>
          <div><span className="text-[#ff4d00] font-semibold">sudo hire</span> — Authorize interview protocol</div>
          <div><span className="text-[#ff4d00] font-semibold">clear</span> — Clear terminal output buffer</div>
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
          <div className="space-y-1 text-[#fafaf8] font-mono text-xs">
            <div className="text-[#ff4d00] font-bold uppercase tracking-wider">AVAILABLE COMMANDS:</div>
            <div><span className="text-[#ff4d00] font-semibold">help</span> — Display this manual</div>
            <div><span className="text-[#ff4d00] font-semibold">flagships</span> — Jump to Flagship Systems</div>
            <div><span className="text-[#ff4d00] font-semibold">journey</span> — Jump to Experience & Research Timeline</div>
            <div><span className="text-[#ff4d00] font-semibold">archive</span> / <span className="text-[#ff4d00] font-semibold">work</span> — Jump to 8+ Systems Archive</div>
            <div><span className="text-[#ff4d00] font-semibold">skills</span> — Jump to Technical Workbench</div>
            <div><span className="text-[#ff4d00] font-semibold">education</span> — Jump to Degrees & Certifications</div>
            <div><span className="text-[#ff4d00] font-semibold">contact</span> — Jump to Direct Communication Relay</div>
            <div><span className="text-[#ff4d00] font-semibold">resume</span> — Open verified Resume.pdf</div>
            <div><span className="text-[#ff4d00] font-semibold">sudo hire</span> — Authorize interview protocol</div>
            <div><span className="text-[#ff4d00] font-semibold">clear</span> — Clear terminal output buffer</div>
          </div>
        );
        break;
      case 'flagships':
      case 'case-studies':
        response = <span className="text-[#ff4d00] font-semibold">NAVIGATING TO [02 // FLAGSHIPS]...</span>;
        scrollToSection('flagships');
        break;
      case 'journey':
      case 'experience':
        response = <span className="text-[#ff4d00] font-semibold">NAVIGATING TO [03 // CHRONICLES]...</span>;
        scrollToSection('journey');
        break;
      case 'archive':
      case 'work':
      case 'projects':
        response = <span className="text-[#ff4d00] font-semibold">NAVIGATING TO [04 // ARCHIVE]...</span>;
        scrollToSection('work');
        break;
      case 'skills':
      case 'stack':
        response = <span className="text-[#ff4d00] font-semibold">NAVIGATING TO [05 // WORKBENCH]...</span>;
        scrollToSection('skills');
        break;
      case 'education':
      case 'certs':
        response = <span className="text-[#ff4d00] font-semibold">NAVIGATING TO [06 // CREDENTIALS]...</span>;
        scrollToSection('education');
        break;
      case 'contact':
        response = <span className="text-[#ff4d00] font-semibold">NAVIGATING TO [07 // DISPATCH]...</span>;
        scrollToSection('contact');
        break;
      case 'resume':
        response = (
          <div className="space-y-1 text-[#fafaf8] font-mono text-xs">
            <div>OPENING RESUME.PDF...</div>
            <a href={personalInfo.resumeUrl} target="_blank" rel="noreferrer" className="underline text-[#ff4d00]">
              [CLICK HERE IF DOWNLOAD DOES NOT COMMENCE]
            </a>
          </div>
        );
        window.open(personalInfo.resumeUrl, '_blank');
        break;
      case 'sudo hire':
      case 'hire':
        response = (
          <div className="space-y-1 bg-white/5 p-3 border border-[#ff4d00] text-xs text-[#ff4d00] font-mono">
            <div className="font-semibold flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#ff4d00]" />
              <span>ACCESS GRANTED: HIRING RELAY INITIATED</span>
            </div>
            <div>Routing transmission to Manan Sharma ({personalInfo.email})...</div>
          </div>
        );
        setTimeout(() => scrollToSection('contact'), 1000);
        break;
      default:
        response = (
          <span className="text-[#ff4d00] font-mono text-xs">
            COMMAND NOT RECOGNIZED: '{cmd}'. TYPE 'help' FOR AVAILABLE PROTOCOLS.
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
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-[#0a0a0a]/90"
      onClick={onClose}
    >
      <div 
        className="relative max-w-2xl w-full bg-[#0a0a0a] border border-[#71717a]/30 font-mono overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-[#18181b]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#ff4d00] inline-block"></span>
            <div className="text-xs text-[#fafaf8] font-mono font-bold flex items-center gap-1.5 tracking-[0.2em] uppercase">
              <TerminalIcon className="w-3.5 h-3.5 text-[#ff4d00]" />
              <span>SYS_SHELL // MANAN SHARMA</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 text-[#71717a] hover:text-white transition-colors"
            aria-label="Close terminal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Body */}
        <div className="p-5 max-h-[55vh] overflow-y-auto space-y-3.5 text-xs bg-[#0a0a0a]">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-[#71717a]">
                <span className="text-[#ff4d00] font-bold">manan:~$</span>
                <span className="text-[#fafaf8] font-semibold">{item.command}</span>
              </div>
              <div className="pl-4 border-l border-white/10">
                {item.output}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-3 border-t border-white/10 bg-[#18181b] flex items-center gap-2">
          <span className="text-[#ff4d00] font-bold text-xs pl-2">manan:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="TYPE 'help' OR COMMAND..."
            className="flex-1 bg-transparent text-[#fafaf8] text-xs font-mono outline-none placeholder:text-[#71717a] uppercase"
            spellCheck={false}
          />
          <button
            type="submit"
            className="p-1.5 bg-[#ff4d00] text-white hover:bg-white hover:text-[#0a0a0a] transition-colors"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
};
