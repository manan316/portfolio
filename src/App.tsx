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
    <div className="relative min-h-screen bg-[#f5f0e1] text-[#1a3055] font-serif antialiased selection:bg-[#d4553a] selection:text-[#f5f0e1] w-full">
      {/* Woodblock Header Navbar */}
      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Main Woodblock Flow */}
      <main className="relative z-10 space-y-20 sm:space-y-28 w-full pb-20">
        {/* SECTION 01: Hero Master Woodblock */}
        <Hero
          personalInfo={personalInfo}
          onOpenTerminal={() => setTerminalOpen(true)}
          onOpenImage={setSelectedImage}
        />

        {/* SECTION 02: Flagship Systems (OJASEWS, GeoChange AI, NeuroView, SlipSense) */}
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

        {/* SECTION 04: Complete Systems & Engineering Archive (8+ Builds) */}
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

      {/* Floating Bottom-Right Woodblock Terminal Launcher */}
      <button
        onClick={() => setTerminalOpen(true)}
        className="fixed bottom-6 right-6 z-40 seal-btn-secondary py-2.5 px-4 text-xs shadow-woodblock border-3 border-[#1a3055] group flex items-center gap-2.5 transition-all duration-150"
        title="Open Command Shell (Ctrl + K or `)"
        aria-label="Open Command Shell"
      >
        <TerminalIcon className="w-4 h-4 text-[#d4553a] group-hover:rotate-12 transition-transform" />
        <span className="font-mono text-[#1a3055] font-bold tracking-wider hidden sm:inline uppercase">Terminal</span>
        <span className="text-[10px] bg-[#1a3055] text-[#f5f0e1] px-1.5 py-0.5 font-mono hidden md:inline">
          ^K
        </span>
      </button>
    </div>
  );
};

export default App;
