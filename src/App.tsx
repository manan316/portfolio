import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FlagshipCaseStudies } from './components/FlagshipCaseStudies';
import { InteractiveSimLab } from './components/InteractiveSimLab';
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
    <div className="relative min-h-screen bg-[#09090b] text-[#fafafa] font-sans antialiased selection:bg-cyan-500/25 selection:text-cyan-200">
      {/* Floating Glass Pill Navbar */}
      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Main Bento Flow */}
      <main className="relative z-10 space-y-12">
        {/* SECTION 01: Hero Master Bento Grid */}
        <Hero
          personalInfo={personalInfo}
          onOpenTerminal={() => setTerminalOpen(true)}
          onOpenImage={setSelectedImage}
        />

        {/* SECTION 02: Flagship Systems Bento (OJASEWS, GeoChange AI, NeuroView, SlipSense) */}
        <FlagshipCaseStudies
          projects={projects}
          onOpenImage={setSelectedImage}
          onOpenInspector={setSelectedProject}
        />

        {/* SECTION 03: Interactive Simulation Lab Bento (Slope Physics & Carbon Accounting) */}
        <InteractiveSimLab />

        {/* SECTION 04: Experience & Research Bento Timeline */}
        <CareerJourneyTimeline
          experiences={experiences}
          researchWork={researchWork}
          trainingWorkshops={trainingsAndWorkshops}
          onOpenImage={setSelectedImage}
        />

        {/* SECTION 05: Complete Systems & Engineering Archive (8+ Builds) */}
        <ProjectsSection
          projects={projects}
          onOpenImage={setSelectedImage}
          onOpenInspector={setSelectedProject}
        />

        {/* SECTION 06: Technical Stack & Engineering Workbench */}
        <SkillsSection skillCategories={skillCategories} />

        {/* SECTION 07: Education, Verified Certifications & Bootcamps */}
        <EducationCertSection
          educationList={educationList}
          certifications={certifications}
          trainingWorkshops={trainingsAndWorkshops}
          onOpenImage={setSelectedImage}
        />

        {/* SECTION 08: Direct Field Communications Relay */}
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

      {/* Floating Bottom-Right Terminal Launcher Pill */}
      <button
        onClick={() => setTerminalOpen(true)}
        className="fixed bottom-6 right-6 z-40 bento-btn-secondary py-2 px-3 text-xs shadow-2xl backdrop-blur-xl border border-white/10 hover:border-cyan-400/40 group flex items-center gap-2"
        title="Open Terminal (Ctrl + K or `)"
        aria-label="Open Terminal"
      >
        <TerminalIcon className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
        <span className="font-mono text-zinc-300 hidden sm:inline">terminal</span>
        <span className="text-[10px] bg-white/10 text-zinc-400 px-1.5 py-0.2 rounded font-mono hidden md:inline">
          ^K
        </span>
      </button>
    </div>
  );
};

export default App;
