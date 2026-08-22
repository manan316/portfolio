import React from 'react';
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

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#0A0E17] text-[#1E293B] font-sans">
      {/* Fixed Tactical Gutter HUD */}
      <VerticalGutterTracker />

      {/* Floating Tactical Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

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
    </div>
  );
};

export default App;
