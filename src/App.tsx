import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VerticalGutterTracker } from './components/VerticalGutterTracker';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ResearchSection } from './components/ResearchSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationCertSection } from './components/EducationCertSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { TerminalModal } from './components/TerminalModal';
import { KernelBootSequence } from './components/KernelBootSequence';
import { CustomCursor } from './components/CustomCursor';
import { Terminal as TerminalIcon } from 'lucide-react';

export const App: React.FC = () => {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [isBooting, setIsBooting] = useState(() => {
    try {
      return !sessionStorage.getItem('hasBooted');
    } catch {
      return true;
    }
  });

  const handleBootComplete = () => {
    setIsBooting(false);
    try {
      sessionStorage.setItem('hasBooted', 'true');
    } catch {}
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setTerminalOpen(prev => !prev);
      }
      if (e.key === '`' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        e.preventDefault();
        setTerminalOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#08090D] text-[#F1F5F9] font-sans selection:bg-[#00F0FF]/30 selection:text-[#00FF9D]">
      {/* Custom Futuristic Cyber Reticle Cursor */}
      <CustomCursor />

      {/* 1st Visit Encryption/Decryption Kernel Boot Sequence */}
      {isBooting && <KernelBootSequence onComplete={handleBootComplete} />}

      {/* Fixed Tactical Gutter HUD */}
      <VerticalGutterTracker />

      {/* Floating Tactical Navbar */}
      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Hero Section with Decrypted Title Animation */}
      <Hero triggerAnimation={!isBooting} />

      {/* Main Content Blueprint Canvas */}
      <main className="relative z-10">
        {/* Sector 01: About Me */}
        <AboutSection />

        {/* Sector 02: Experience */}
        <ExperienceSection />

        {/* Sector 03: Projects */}
        <ProjectsSection />

        {/* Sector 04: Research */}
        <ResearchSection />

        {/* Sector 05: Skills */}
        <SkillsSection />

        {/* Sector 06: Education & Certifications */}
        <EducationCertSection />

        {/* Sector 07: Contact */}
        <ContactSection />
      </main>

      {/* System Terminal Footer */}
      <Footer />

      {/* Interactive Micro-Terminal Easter Egg Modal */}
      <TerminalModal isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />

      {/* Floating Tactical Terminal Trigger Button on Bottom Right */}
      <button
        onClick={() => setTerminalOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#0F121E]/90 hover:bg-[#00F0FF] text-[#00F0FF] hover:text-[#08090D] border border-[#00F0FF]/40 hover:border-[#00F0FF] backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.7),0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300 interactive-btn font-mono text-xs group font-bold"
        title="Open Interactive Kernel Terminal (Ctrl + K)"
        aria-label="Open Interactive Terminal"
      >
        <TerminalIcon className="w-4 h-4 group-hover:rotate-12 transition-transform" />
        <span className="hidden sm:inline">TERMINAL</span>
        <span className="text-[10px] opacity-70 bg-black/40 px-1.5 py-0.5 rounded border border-white/10 hidden md:inline">^K</span>
      </button>
    </div>
  );
};

export default App;
