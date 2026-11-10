import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SectorRibbon } from './components/SectorRibbon';
import { AboutSection } from './components/AboutSection';
import { InteractiveSimLab } from './components/InteractiveSimLab';
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
import { CustomCursor } from './components/CustomCursor';
import { VerticalGutterTracker } from './components/VerticalGutterTracker';
import { MemphisZigzagDivider } from './components/MemphisOrnament';
import { Terminal as TerminalIcon, Sparkles } from 'lucide-react';

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
    <div className="relative min-h-screen bg-[#fdf6e3] text-black font-sans selection:bg-[#feca57] selection:text-black">
      {/* Custom Memphis Geometric Pointer */}
      <CustomCursor />

      {/* Fixed Vertical Scroll Gutter HUD */}
      <VerticalGutterTracker />

      {/* Floating Memphis Header */}
      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />

      {/* SECTION 01: Hero Asymmetrical Bento Grid */}
      <Hero
        personalInfo={personalInfo}
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenImage={setSelectedImage}
      />

      {/* High-Velocity Marquee Ribbon */}
      <SectorRibbon
        sectorNumber="01"
        sectorName="SAVERA FLAGSHIP SYSTEMS & EDGE AI ACCELERATION"
        color="coral"
      />

      {/* Main Structural Flow */}
      <main className="relative z-10">
        {/* SECTION 02: About, Philosophy & Polymath Pursuits */}
        <AboutSection />

        <MemphisZigzagDivider color="honey" />

        {/* SECTION 03: Interactive Simulation Lab (OJASEWS & GeoChange AI) */}
        <InteractiveSimLab />

        <MemphisZigzagDivider color="coral" />

        {/* SECTION 04: Flagship Case Studies Deep-Dive */}
        <FlagshipCaseStudies
          projects={projects}
          onOpenImage={setSelectedImage}
          onOpenInspector={setSelectedProject}
        />

        <MemphisZigzagDivider color="blue" />

        {/* SECTION 05: Unified Career, Research Labs & Accolades Journey */}
        <CareerJourneyTimeline
          experiences={experiences}
          researchWork={researchWork}
          trainingWorkshops={trainingsAndWorkshops}
          onOpenImage={setSelectedImage}
        />

        <MemphisZigzagDivider color="mint" />

        {/* SECTION 06: Systems & Engineering Archive (Full 8+ Builds) */}
        <ProjectsSection
          projects={projects}
          onOpenImage={setSelectedImage}
          onOpenInspector={setSelectedProject}
        />

        <MemphisZigzagDivider color="honey" />

        {/* SECTION 07: Technical Stack & Engineering Workbench */}
        <SkillsSection skillCategories={skillCategories} />

        <MemphisZigzagDivider color="coral" />

        {/* SECTION 08: Education, Verified Certifications & Bootcamps */}
        <EducationCertSection
          educationList={educationList}
          certifications={certifications}
          trainingWorkshops={trainingsAndWorkshops}
          onOpenImage={setSelectedImage}
        />

        <MemphisZigzagDivider color="mint" />

        {/* SECTION 09: Himalayan Field Communications Relay & Dispatch Form */}
        <ContactSection />
      </main>

      {/* System Footer */}
      <Footer />

      {/* Interactive Terminal Modal */}
      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />

      {/* Project Inspector Blueprint Modal */}
      <ProjectInspectorModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenImage={setSelectedImage}
      />

      {/* Image Lightbox Modal */}
      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageUrl={selectedImage?.url || ''}
        title={selectedImage?.caption || 'Image Preview'}
        caption={selectedImage?.caption}
      />

      {/* Floating Bottom-Right Terminal Trigger Pill */}
      <button
        onClick={() => setTerminalOpen(true)}
        className="fixed bottom-6 right-6 z-40 memphis-btn-honey py-2.5 px-3.5 text-xs border-4 shadow-memphis active:translate-x-1 active:translate-y-1 group flex items-center gap-2"
        title="Open Interactive Terminal Shell (Ctrl + K or `)"
        aria-label="Open Interactive Terminal"
      >
        <TerminalIcon className="w-4 h-4 group-hover:rotate-12 transition-transform text-black" />
        <span className="font-black text-black hidden sm:inline">TERMINAL [~]</span>
        <span className="text-[10px] bg-black text-white px-1.5 py-0.5 font-mono font-bold hidden md:inline">
          ^K
        </span>
      </button>
    </div>
  );
};

export default App;
