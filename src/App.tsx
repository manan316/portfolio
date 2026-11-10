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
    <div className="relative min-h-screen bg-[#f8fafc] text-[#0f172a] font-sans antialiased selection:bg-cyan-500/20 selection:text-cyan-900 w-full">
      {/* Floating Glass Pill Navbar */}
      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Main Bento Flow - Full Width Spanning */}
      <main className="relative z-10 space-y-16 sm:space-y-24 w-full pb-16">
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

        {/* SECTION 03: Experience & Research Bento Timeline */}
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

        {/* SECTION 05: Technical Stack & Engineering Workbench */}
        <SkillsSection skillCategories={skillCategories} />

        {/* SECTION 06: Education, Verified Certifications & Bootcamps */}
        <EducationCertSection
          educationList={educationList}
          certifications={certifications}
          trainingWorkshops={trainingsAndWorkshops}
          onOpenImage={setSelectedImage}
        />

        {/* SECTION 07: Direct Field Communications Relay */}
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
        className="fixed bottom-6 right-6 z-40 bento-btn-secondary py-2.5 px-3.5 text-xs shadow-xl backdrop-blur-2xl border border-slate-200/90 hover:border-cyan-500/50 hover:bg-white group flex items-center gap-2 transition-all duration-300 text-slate-800"
        title="Open Terminal (Ctrl + K or `)"
        aria-label="Open Terminal"
      >
        <TerminalIcon className="w-4 h-4 text-cyan-600 group-hover:rotate-12 transition-transform" />
        <span className="font-mono text-slate-800 font-semibold hidden sm:inline">terminal</span>
        <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.2 rounded font-mono hidden md:inline border border-slate-200">
          ^K
        </span>
      </button>
    </div>
  );
};

export default App;
