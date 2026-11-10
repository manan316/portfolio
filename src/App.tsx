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
import { CustomCursor } from './components/CustomCursor';
import { Terminal as TerminalIcon } from 'lucide-react';

export const App: React.FC = () => {
  const [terminalOpen, setTerminalOpen] = useState(false);

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
    <div className="relative min-h-screen bg-[#fdf6e3] text-black font-sans selection:bg-[#feca57] selection:text-black">
      {/* Custom Memphis Cursor */}
      <CustomCursor />

      {/* Fixed Gutter HUD */}
      <VerticalGutterTracker />

      {/* Floating Memphis Navbar */}
      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Hero Section */}
      <Hero triggerAnimation={true} />

      {/* Main Content */}
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

      {/* System Footer */}
      <Footer />

      {/* Terminal Modal */}
      <TerminalModal isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />

      {/* Floating Memphis Terminal Trigger Button on Bottom Right */}
      <button
        onClick={() => setTerminalOpen(true)}
        className="fixed bottom-6 right-6 z-40 memphis-btn-honey py-2 px-3 text-xs border-4 shadow-memphis active:translate-x-1 active:translate-y-1 group"
        title="Open Interactive Kernel Terminal (Ctrl + K)"
        aria-label="Open Interactive Terminal"
      >
        <TerminalIcon className="w-4 h-4 group-hover:rotate-12 transition-transform" />
        <span className="hidden sm:inline font-black">TERMINAL</span>
        <span className="text-[10px] bg-black text-white px-1.5 py-0.5 font-mono font-bold hidden md:inline">^K</span>
      </button>
    </div>
  );
};

export default App;
