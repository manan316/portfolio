import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FlagshipCaseStudies } from './components/FlagshipCaseStudies';
import { CareerJourneyTimeline } from './components/CareerJourneyTimeline';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationCertSection } from './components/EducationCertSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { TerminalModal } from './components/TerminalModal';
import { ImageModal } from './components/ImageModal';
import { ProjectInspectorModal } from './components/ProjectInspectorModal';
import { Terminal as TerminalIcon } from 'lucide-react';

import {
  personalInfo,
  projects,
  experiences,
  researchWork,
  skillCategories,
  educationList,
  certifications,
  trainingsAndWorkshops
} from './data/portfolioData';
import { ProjectItem } from './types/portfolio';

export const App: React.FC = () => {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ url: string; caption: string } | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
      if (e.key === '`' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#fafaf8] text-[#0a0a0a] font-sans antialiased selection:bg-[#ff4d00] selection:text-white w-full">
      {/* Pinned Minimal Monospace Header */}
      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Main Flow: Sections divide with hairline and vast vertical emptiness */}
      <main className="relative z-10 w-full pb-32">
        {/* SECTION 01: Fluid Headline Hero */}
        <Hero
          personalInfo={personalInfo}
          onOpenTerminal={() => setTerminalOpen(true)}
          onOpenImage={setSelectedImage}
        />

        {/* SECTION 02: Flagship Systems */}
        <FlagshipCaseStudies
          projects={projects}
          onOpenImage={setSelectedImage}
          onOpenInspector={setSelectedProject}
        />

        {/* SECTION 03: Experience & Research Chronicle */}
        <CareerJourneyTimeline
          experiences={experiences}
          researchWork={researchWork}
          trainingWorkshops={trainingsAndWorkshops}
          onOpenImage={setSelectedImage}
        />

        {/* SECTION 04: Complete Systems & Engineering Archive (Index Rows) */}
        <ProjectsSection
          projects={projects}
          onOpenImage={setSelectedImage}
          onOpenInspector={setSelectedProject}
        />

        {/* SECTION 05: Technical Stack & Toolchain Workbench */}
        <SkillsSection skillCategories={skillCategories} />

        {/* SECTION 06: Education, Verified Certifications & Honors */}
        <EducationCertSection
          educationList={educationList}
          certifications={certifications}
          trainingWorkshops={trainingsAndWorkshops}
          onOpenImage={setSelectedImage}
        />

        {/* SECTION 07: Direct Dispatch Relay */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Terminal Modal */}
      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />

      {/* Full Architectural Blueprint Inspector Modal */}
      <ProjectInspectorModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenImage={setSelectedImage}
      />

      {/* High-Resolution Screenshot Lightbox Modal */}
      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageUrl={selectedImage?.url || ''}
        title={selectedImage?.caption || 'Image Preview'}
        caption={selectedImage?.caption}
      />

      {/* Floating Bottom-Right Monospace Terminal Launcher */}
      <button
        onClick={() => setTerminalOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-[#0a0a0a] text-white hover:bg-[#ff4d00] py-2.5 px-4 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors duration-150 flex items-center gap-2"
        title="Open Command Shell (Ctrl + K or `)"
        aria-label="Open Command Shell"
      >
        <TerminalIcon className="w-3.5 h-3.5 text-[#ff4d00] group-hover:text-white" />
        <span className="hidden sm:inline">TERMINAL</span>
        <span className="text-[10px] text-[#71717a] font-mono">[^K]</span>
      </button>
    </div>
  );
};

export default App;
