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
      command: 'uname -a',
      output: 'Linux manan-kernel 6.8.0-RT #1 SMP PREEMPT_RT x86_64 GNU/Linux'
    },
    {
      command: 'help',
      output: (
        <div className="space-y-1 text-[#CBD5E1]">
          <div className="text-[#00F0FF] font-bold">AVAILABLE COMMANDS:</div>
          <div><span className="text-[#00FF9D] font-bold">help</span> — Display this manual</div>
          <div><span className="text-[#00FF9D] font-bold">about</span> — Navigate to Sector 01: About Me</div>
          <div><span className="text-[#00FF9D] font-bold">experience</span> — Navigate to Sector 02: Experience</div>
          <div><span className="text-[#00FF9D] font-bold">projects</span> — Navigate to Sector 03: Projects Showcase</div>
          <div><span className="text-[#00FF9D] font-bold">research</span> — Navigate to Sector 04: Research Pipeline</div>
          <div><span className="text-[#00FF9D] font-bold">skills</span> — Navigate to Sector 05: Skills Matrix</div>
          <div><span className="text-[#00FF9D] font-bold">education</span> — Navigate to Sector 06: Education & Certs</div>
          <div><span className="text-[#00FF9D] font-bold">contact</span> — Navigate to Sector 07: Direct Transmission</div>
          <div><span className="text-[#00FF9D] font-bold">resume</span> — Open / download Resume.pdf</div>
          <div><span className="text-[#00FF9D] font-bold">sudo hire</span> — Authorize interview dispatch protocol</div>
          <div><span className="text-[#00FF9D] font-bold">clear</span> — Clear terminal output buffer</div>
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
          <div className="space-y-1 text-[#CBD5E1]">
            <div className="text-[#00F0FF] font-bold">AVAILABLE COMMANDS:</div>
            <div><span className="text-[#00FF9D] font-bold">about</span>, <span className="text-[#00FF9D] font-bold">experience</span>, <span className="text-[#00FF9D] font-bold">projects</span>, <span className="text-[#00FF9D] font-bold">research</span>, <span className="text-[#00FF9D] font-bold">skills</span>, <span className="text-[#00FF9D] font-bold">education</span>, <span className="text-[#00FF9D] font-bold">contact</span></div>
            <div><span className="text-[#00FF9D] font-bold">resume</span>, <span className="text-[#00FF9D] font-bold">sudo hire</span>, <span className="text-[#00FF9D] font-bold">uname -a</span>, <span className="text-[#00FF9D] font-bold">clear</span></div>
          </div>
        );
        break;
      case 'about':
        response = <span className="text-[#00FF9D]">Jumping to Sector 01: About Me...</span>;
        scrollToSection('about');
        break;
      case 'experience':
        response = <span className="text-[#00FF9D]">Jumping to Sector 02: Experience (UniConverge, IIT Roorkee)...</span>;
        scrollToSection('experience');
        break;
      case 'projects':
        response = <span className="text-[#00FF9D]">Jumping to Sector 03: Projects (NeuroView, SlipSense, YOLO NPU)...</span>;
        scrollToSection('projects');
        break;
      case 'research':
        response = <span className="text-[#00FF9D]">Jumping to Sector 04: Research Pipeline...</span>;
        scrollToSection('research');
        break;
      case 'skills':
        response = <span className="text-[#00FF9D]">Jumping to Sector 05: Skills Matrix...</span>;
        scrollToSection('skills');
        break;
      case 'education':
      case 'certs':
        response = <span className="text-[#00FF9D]">Jumping to Sector 06: Education & Certifications...</span>;
        scrollToSection('education');
        break;
      case 'contact':
        response = <span className="text-[#00FF9D]">Jumping to Sector 07: Direct Transmission...</span>;
        scrollToSection('contact');
        break;
      case 'resume':
        response = (
          <div className="space-y-1 text-[#00F0FF]">
            <div>Downloading verified Resume.pdf...</div>
            <a href={personalInfo.resumeUrl} download="Manan_Sharma_Resume.pdf" target="_blank" rel="noreferrer" className="underline text-[#00FF9D] font-bold">
              [Click here if download does not begin]
            </a>
          </div>
        );
        window.open(personalInfo.resumeUrl, '_blank');
        break;
      case 'sudo hire':
      case 'hire':
        response = (
          <div className="space-y-1 text-[#00FF9D] bg-[#00FF9D]/10 p-3 rounded-xl border border-[#00FF9D]/30">
            <div className="font-bold text-[#F1F5F9] flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#00FF9D] animate-spin" />
              <span>ACCESS GRANTED: HIRING PROTOCOL INITIATED!</span>
            </div>
            <div>Routing transmission to Manan Sharma (manan31206@gmail.com)...</div>
          </div>
        );
        setTimeout(() => scrollToSection('contact'), 1200);
        break;
      case 'uname -a':
        response = 'Linux manan-kernel 6.8.0-RT #1 SMP PREEMPT_RT x86_64 GNU/Linux';
        break;
      case 'whoami':
        response = 'root@manan-terminal — Guest Operator [Authenticated]';
        break;
      default:
        response = (
          <span className="text-red-400">
            zsh: command not found: {cmd}. Type <span className="text-[#00F0FF] font-bold">help</span> to view available system commands.
          </span>
        );
        break;
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
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative max-w-2xl w-full bg-[#08090D]/95 border border-[#00F0FF]/40 rounded-3xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.9),0_0_35px_rgba(0,240,255,0.25)] font-mono animate-modal-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.08] bg-[#0F121E]/90">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#EF4444] border border-red-900/60 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-[#FFB800] border border-amber-900/60 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-[#00FF9D] border border-emerald-900/60 inline-block"></span>
            </div>
            <div className="text-xs text-[#CBD5E1] font-bold flex items-center gap-1.5 pl-2">
              <TerminalIcon className="w-3.5 h-3.5 text-[#00F0FF]" />
              <span>root@manan-kernel:~</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-[#64748B] hidden sm:inline">Press ESC to exit</span>
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-[#94A3B8] hover:text-[#00F0FF] hover:bg-white/[0.08]"
              aria-label="Close terminal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-5 max-h-[55vh] overflow-y-auto space-y-4 text-xs">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex items-center gap-2 text-[#00F0FF]">
                <span className="text-[#00FF9D] font-bold">manan@kernel:~$</span>
                <span className="text-white font-semibold">{item.command}</span>
              </div>
              <div className="pl-4 text-[#CBD5E1] leading-relaxed">
                {item.output}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Terminal Input Footer */}
        <form onSubmit={handleSubmit} className="px-5 py-3.5 border-t border-white/[0.08] bg-[#0F121E]/90 flex items-center gap-2">
          <span className="text-[#00FF9D] font-bold text-xs">manan@kernel:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help', 'projects', 'sudo hire'..."
            className="flex-1 bg-transparent text-xs text-white placeholder-[#64748B] focus:outline-none font-mono"
          />
          <button
            type="submit"
            className="p-1.5 rounded-lg bg-[#00F0FF]/15 text-[#00F0FF] hover:bg-[#00F0FF] hover:text-[#08090D] transition-colors"
            title="Execute command"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
};
