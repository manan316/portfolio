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
      command: 'memphis --status',
      output: 'Memphis 1981 Milan Architecture // Systems Ready. SAVERA Flagships Online.'
    },
    {
      command: 'help',
      output: (
        <div className="space-y-1 text-black font-mono text-xs">
          <div className="text-[#ff6b6b] font-black uppercase">AVAILABLE COMMANDS:</div>
          <div><span className="text-[#5f27cd] font-black">help</span> — Display this command manual</div>
          <div><span className="text-[#5f27cd] font-black">sim</span> / <span className="text-[#5f27cd] font-black">lab</span> — Jump to Interactive Simulation Lab</div>
          <div><span className="text-[#5f27cd] font-black">case-studies</span> — Jump to Flagship Architectural Blueprints</div>
          <div><span className="text-[#5f27cd] font-black">journey</span> — Jump to Career, Internships & Research Timeline</div>
          <div><span className="text-[#5f27cd] font-black">archive</span> / <span className="text-[#5f27cd] font-black">work</span> — Jump to 8+ Systems Archive</div>
          <div><span className="text-[#5f27cd] font-black">skills</span> — Jump to Technical Stack & Workbench</div>
          <div><span className="text-[#5f27cd] font-black">about</span> — Jump to Philosophy & Pursuits</div>
          <div><span className="text-[#5f27cd] font-black">contact</span> — Jump to Field Communications Relay</div>
          <div><span className="text-[#5f27cd] font-black">resume</span> — Open verified Resume.pdf</div>
          <div><span className="text-[#5f27cd] font-black">sudo hire</span> — Authorize high-impact hiring relay</div>
          <div><span className="text-[#5f27cd] font-black">clear</span> — Clear terminal output buffer</div>
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
          <div className="space-y-1 text-black font-mono text-xs">
            <div className="text-[#ff6b6b] font-black uppercase">AVAILABLE COMMANDS:</div>
            <div><span className="text-[#5f27cd] font-black">help</span> — Display this manual</div>
            <div><span className="text-[#5f27cd] font-black">sim</span> / <span className="text-[#5f27cd] font-black">lab</span> — Jump to Interactive Simulation Lab</div>
            <div><span className="text-[#5f27cd] font-black">case-studies</span> — Jump to Flagship Architectural Blueprints</div>
            <div><span className="text-[#5f27cd] font-black">journey</span> — Jump to Career, Internships & Research Timeline</div>
            <div><span className="text-[#5f27cd] font-black">archive</span> / <span className="text-[#5f27cd] font-black">work</span> — Jump to 8+ Systems Archive</div>
            <div><span className="text-[#5f27cd] font-black">skills</span> — Jump to Technical Stack & Workbench</div>
            <div><span className="text-[#5f27cd] font-black">about</span> — Jump to Philosophy & Pursuits</div>
            <div><span className="text-[#5f27cd] font-black">contact</span> — Jump to Field Communications Relay</div>
            <div><span className="text-[#5f27cd] font-black">resume</span> — Open verified Resume.pdf</div>
            <div><span className="text-[#5f27cd] font-black">sudo hire</span> — Authorize interview protocol</div>
            <div><span className="text-[#5f27cd] font-black">clear</span> — Clear terminal output buffer</div>
          </div>
        );
        break;
      case 'sim':
      case 'lab':
        response = <span className="text-[#1dd1a1] font-bold">Navigating to [02 // IN-BROWSER SIMULATION LAB]...</span>;
        scrollToSection('lab');
        break;
      case 'case-studies':
      case 'flagships':
        response = <span className="text-[#1dd1a1] font-bold">Navigating to [03 // FLAGSHIP CASE STUDIES] (OJASEWS, GeoChange AI)...</span>;
        scrollToSection('case-studies');
        break;
      case 'journey':
      case 'timeline':
      case 'experience':
        response = <span className="text-[#1dd1a1] font-bold">Navigating to [04 // CAREER & RESEARCH CHRONICLE]...</span>;
        scrollToSection('journey');
        break;
      case 'archive':
      case 'work':
      case 'projects':
        response = <span className="text-[#1dd1a1] font-bold">Navigating to [05 // SYSTEMS & ENGINEERING ARCHIVE]...</span>;
        scrollToSection('work');
        break;
      case 'skills':
      case 'workbench':
        response = <span className="text-[#1dd1a1] font-bold">Navigating to [06 // ENGINEERING WORKBENCH]...</span>;
        scrollToSection('skills');
        break;
      case 'about':
        response = <span className="text-[#1dd1a1] font-bold">Navigating to About Me & Philosophy...</span>;
        scrollToSection('about');
        break;
      case 'education':
      case 'certs':
        response = <span className="text-[#1dd1a1] font-bold">Navigating to [07 // CREDENTIALS & HONORS]...</span>;
        scrollToSection('education');
        break;
      case 'contact':
        response = <span className="text-[#1dd1a1] font-bold">Navigating to [08 // FIELD DISPATCH RELAY]...</span>;
        scrollToSection('contact');
        break;
      case 'resume':
        response = (
          <div className="space-y-1 text-black font-mono">
            <div>Opening verified Resume.pdf...</div>
            <a href={personalInfo.resumeUrl} download="Manan_Sharma_Resume.pdf" target="_blank" rel="noreferrer" className="underline text-[#ff6b6b] font-black">
              [Click here if download does not begin]
            </a>
          </div>
        );
        window.open(personalInfo.resumeUrl, '_blank');
        break;
      case 'sudo hire':
      case 'hire':
        response = (
          <div className="space-y-1 bg-[#1dd1a1] p-3 border-2 border-black font-mono text-black">
            <div className="font-black flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#ff6b6b]" />
              <span>ACCESS GRANTED: HIRING TRANSMISSION RELAY READY!</span>
            </div>
            <div>Routing transmission to Manan Sharma ({personalInfo.email})...</div>
          </div>
        );
        setTimeout(() => scrollToSection('contact'), 1200);
        break;
      default:
        response = (
          <span className="text-[#ff6b6b] font-bold">
            Command not recognized: '{cmd}'. Type <span className="underline font-black">help</span> for available commands.
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
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative max-w-2xl w-full bg-white border-4 border-black shadow-[10px_10px_0_#000000] font-mono select-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b-4 border-black bg-[#48dbfb]">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded-full bg-[#ff6b6b] border-2 border-black inline-block"></span>
              <span className="w-3.5 h-3.5 rounded-full bg-[#feca57] border-2 border-black inline-block"></span>
              <span className="w-3.5 h-3.5 rounded-full bg-[#1dd1a1] border-2 border-black inline-block"></span>
            </div>
            <div className="text-xs text-black font-black flex items-center gap-1.5 pl-2 uppercase">
              <TerminalIcon className="w-3.5 h-3.5" />
              <span>MANAN // MEMPHIS KERNEL SHELL</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 bg-white border-2 border-black shadow-[2px_2px_0_#000000] hover:bg-[#ff6b6b] hover:text-white transition-colors duration-150"
            aria-label="Close terminal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Body */}
        <div className="p-5 max-h-[60vh] overflow-y-auto space-y-3.5 text-xs bg-[#fdf6e3]">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-black font-bold">
                <span className="text-[#ff6b6b] font-black">guest@memphis:~$</span>
                <span>{item.command}</span>
              </div>
              <div className="pl-4 border-l-2 border-[#5f27cd]/40">
                {item.output}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Input Form */}
        <form onSubmit={handleSubmit} className="p-3.5 border-t-4 border-black bg-white flex items-center gap-2">
          <span className="text-[#ff6b6b] font-black text-xs pl-2">guest@memphis:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help' or command (e.g. sim, case-studies, journey, resume)..."
            className="flex-1 bg-transparent text-black text-xs font-mono font-bold focus:outline-none"
            spellCheck={false}
          />
          <button
            type="submit"
            className="p-1.5 bg-[#feca57] border-2 border-black shadow-[2px_2px_0_#000000] hover:bg-[#ff6b6b] hover:text-white transition-colors"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
};
