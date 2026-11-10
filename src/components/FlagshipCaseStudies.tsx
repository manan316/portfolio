import React, { useState } from 'react';
import { ProjectItem } from '../types/portfolio';
import { MemphisCardOrnaments } from './MemphisOrnament';
import { ExternalLink, ZoomIn, Cpu, Layers, Sparkles, ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';

interface FlagshipCaseStudiesProps {
  projects: ProjectItem[];
  onOpenImage: (image: { url: string; caption: string }) => void;
  onOpenInspector: (project: ProjectItem) => void;
}

export const FlagshipCaseStudies: React.FC<FlagshipCaseStudiesProps> = ({
  projects,
  onOpenImage,
  onOpenInspector,
}) => {
  // Filter the top 4 flagship systems
  const flagships = projects.filter((p) =>
    ['ojasews', 'geochange-ai', 'neuroview', 'slipsense'].includes(p.id)
  );

  const [activeId, setActiveId] = useState<string>(flagships[0]?.id || 'ojasews');
  const [activeTab, setActiveTab] = useState<'blueprint' | 'innovations' | 'gallery' | 'tech'>('blueprint');
  const [activeImageIdx, setActiveImageIdx] = useState<number>(0);

  const activeProject = flagships.find((p) => p.id === activeId) || flagships[0];

  return (
    <section id="case-studies" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="memphis-badge bg-coral text-white border-4 border-black px-4 py-1.5 text-xs font-black tracking-widest uppercase">
            [03 // FLAGSHIP CASE STUDIES]
          </span>
          <span className="bg-electric-blue text-black border-3 border-black px-3 py-1 text-xs font-black tracking-wider uppercase">
            DEEP ARCHITECTURAL DEEP-DIVES
          </span>
        </div>
        <h2 className="memphis-heading text-black pop-swap mb-4">
          SYSTEM ARCHITECTURE & CASE STUDIES
        </h2>
        <p className="text-black text-base sm:text-lg font-bold max-w-3xl leading-relaxed">
          Examine the comprehensive system engineering, data ingestion pipelines, and ML architectures behind my four flagship innovations.
        </p>
      </div>

      {/* Flagship Selector Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {flagships.map((proj, idx) => {
          const isSelected = proj.id === activeId;
          const bgColors = ['bg-honey', 'bg-coral', 'bg-electric-blue', 'bg-mint'];
          const activeBg = bgColors[idx % bgColors.length];

          return (
            <button
              key={proj.id}
              onClick={() => {
                setActiveId(proj.id);
                setActiveImageIdx(0);
              }}
              className={`p-4 border-4 border-black text-left font-black transition-all duration-150 relative ${
                isSelected
                  ? `${activeBg} text-black shadow-memphis -translate-y-1`
                  : 'bg-white text-black hover:bg-paper shadow-memphis-sm'
              }`}
            >
              <div className="flex items-center justify-between text-[11px] mb-2 opacity-80 uppercase tracking-widest">
                <span>SYSTEM 0{idx + 1}</span>
                {proj.badge && (
                  <span className="bg-black text-white px-1.5 py-0.5 text-[9px] font-black truncate max-w-[120px]">
                    {proj.badge.split('(')[0]}
                  </span>
                )}
              </div>
              <div className="text-base sm:text-lg leading-tight line-clamp-2">
                {proj.title.split('—')[0]}
              </div>
              <div className="text-xs font-bold text-gray-700 mt-1 line-clamp-1">
                {proj.category}
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Case Study Stage */}
      {activeProject && (
        <div className="memphis-card bg-paper p-6 sm:p-8 lg:p-10 relative overflow-hidden group">
          <MemphisCardOrnaments variant={3} />

          {/* Top Metadata Banner */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b-4 border-black">
            <div className="space-y-1.5 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-black text-white px-3 py-1 text-xs font-black tracking-wider uppercase">
                  {activeProject.category}
                </span>
                {activeProject.badge && (
                  <span className="bg-honey text-black border-2 border-black px-3 py-1 text-xs font-black tracking-wider uppercase">
                    {activeProject.badge}
                  </span>
                )}
                <span className="text-xs font-bold text-gray-600 bg-white border-2 border-black px-2 py-0.5">
                  {activeProject.date}
                </span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-black tracking-tight leading-tight pt-2">
                {activeProject.title}
              </h3>
              {activeProject.subtitle && (
                <p className="text-xs sm:text-sm font-bold text-gray-800 leading-normal">
                  {activeProject.subtitle}
                </p>
              )}
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              {activeProject.githubUrl && (
                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="memphis-btn-honey px-4 py-2.5 text-xs flex items-center gap-2"
                >
                  <GithubIcon className="w-4 h-4" /> Codebase
                </a>
              )}
              <button
                onClick={() => onOpenInspector(activeProject)}
                className="memphis-btn px-4 py-2.5 text-xs flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" /> Full Blueprint
              </button>
            </div>
          </div>

          {/* Sub-Tabs Navigation */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 pb-4 border-b-3 border-black">
            <button
              onClick={() => setActiveTab('blueprint')}
              className={`memphis-tab-btn text-xs sm:text-sm py-2 px-3 sm:px-4 ${
                activeTab === 'blueprint' ? 'active' : ''
              }`}
            >
              System Blueprint & Flow
            </button>
            <button
              onClick={() => setActiveTab('innovations')}
              className={`memphis-tab-btn text-xs sm:text-sm py-2 px-3 sm:px-4 ${
                activeTab === 'innovations' ? 'active' : ''
              }`}
            >
              Key Innovations
            </button>
            <button
              onClick={() => setActiveTab('gallery')}
              className={`memphis-tab-btn text-xs sm:text-sm py-2 px-3 sm:px-4 ${
                activeTab === 'gallery' ? 'active' : ''
              }`}
            >
              Telemetry & UI ({activeProject.images?.length || 0})
            </button>
            <button
              onClick={() => setActiveTab('tech')}
              className={`memphis-tab-btn text-xs sm:text-sm py-2 px-3 sm:px-4 ${
                activeTab === 'tech' ? 'active' : ''
              }`}
            >
              Stack & Metrics
            </button>
          </div>

          {/* Sub-Tab Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 7 Columns: Active Tab Information */}
            <div className="lg:col-span-7 space-y-6">
              {/* Tab 1: Blueprint */}
              {activeTab === 'blueprint' && (
                <div className="space-y-6">
                  <div className="bg-white border-4 border-black p-6 shadow-memphis-sm">
                    <h4 className="text-xs font-black uppercase tracking-widest text-black mb-3 pb-2 border-b-2 border-black flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-coral" /> Architecture & Data Pipeline
                    </h4>
                    <p className="text-xs sm:text-sm font-bold text-black leading-relaxed mb-4">
                      {activeProject.description}
                    </p>

                    {activeProject.architectureDetails && (
                      <div className="space-y-3 mt-4 pt-4 border-t-2 border-black">
                        <span className="text-xs font-black uppercase tracking-wider block text-gray-700">
                          Engineering Subsystem Specifications:
                        </span>
                        {activeProject.architectureDetails.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-bold text-black">
                            <span className="bg-black text-white w-5 h-5 flex items-center justify-center shrink-0 text-[10px] font-black mt-0.5">
                              {idx + 1}
                            </span>
                            <span className="leading-snug">{detail}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Tab 2: Innovations */}
              {activeTab === 'innovations' && (
                <div className="space-y-4">
                  <div className="bg-white border-4 border-black p-6 shadow-memphis-sm space-y-4">
                    <h4 className="text-xs font-black uppercase tracking-widest text-black pb-2 border-b-2 border-black flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-honey" /> Technical Breakthroughs
                    </h4>
                    <ul className="space-y-3 text-xs sm:text-sm font-bold text-black">
                      {activeProject.architectureDetails?.slice(0, 4).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-mint shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {activeProject.mentor && (
                    <div className="bg-mint text-black border-4 border-black p-4 shadow-memphis-sm text-xs font-black">
                      Academic / Research Mentor: {activeProject.mentor}
                    </div>
                  )}
                </div>
              )}

              {/* Tab 3: Gallery */}
              {activeTab === 'gallery' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activeProject.images?.map((img, idx) => (
                      <div
                        key={idx}
                        onClick={() => onOpenImage(img)}
                        className="bg-white border-4 border-black p-2 shadow-memphis-sm cursor-pointer group/img hover:bg-honey transition-colors"
                      >
                        <div className="h-44 overflow-hidden border-2 border-black relative">
                          <img
                            src={img.url}
                            alt={img.caption}
                            className="w-full h-full object-cover transition-transform duration-200 group-hover/img:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="bg-white text-black px-2 py-1 text-xs font-black border-2 border-black flex items-center gap-1">
                              <ZoomIn className="w-3.5 h-3.5" /> Click to Enlarge
                            </span>
                          </div>
                        </div>
                        <p className="text-[11px] font-black text-black mt-2 line-clamp-2 px-1">
                          {img.caption}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 4: Tech Stack */}
              {activeTab === 'tech' && (
                <div className="bg-white border-4 border-black p-6 shadow-memphis-sm space-y-4">
                  <h4 className="text-xs font-black uppercase tracking-widest text-black pb-2 border-b-2 border-black">
                    Technologies & Protocols Utilized
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="memphis-badge bg-paper hover:bg-honey text-black border-2 border-black px-3 py-1.5 text-xs font-black"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Banner */}
              <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-honey border-4 border-black shadow-memphis-sm">
                <span className="text-xs font-black uppercase tracking-wider text-black">
                  Interested in the code or mathematical formulation?
                </span>
                <button
                  onClick={() => onOpenInspector(activeProject)}
                  className="memphis-btn bg-coral text-white px-4 py-2 text-xs flex items-center gap-1.5"
                >
                  Inspect Full Spec <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right 5 Columns: Active Featured Screenshot Showcase */}
            <div className="lg:col-span-5 space-y-4">
              {activeProject.images && activeProject.images.length > 0 && (
                <div className="bg-white border-4 border-black p-4 shadow-memphis relative">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b-2 border-black">
                    <span className="text-xs font-black uppercase tracking-widest">
                      SYSTEM TELEMETRY DISPLAY
                    </span>
                    <button
                      onClick={() => onOpenImage(activeProject.images![activeImageIdx])}
                      className="text-xs font-black bg-electric-blue border-2 border-black px-2 py-0.5 flex items-center gap-1 hover:bg-honey"
                    >
                      <ZoomIn className="w-3.5 h-3.5" /> Fullscreen
                    </button>
                  </div>

                  {/* Main Selected Image */}
                  <div
                    onClick={() => onOpenImage(activeProject.images![activeImageIdx])}
                    className="h-64 sm:h-72 border-3 border-black overflow-hidden relative cursor-zoom-in group/main"
                  >
                    <img
                      src={activeProject.images[activeImageIdx].url}
                      alt={activeProject.images[activeImageIdx].caption}
                      className="w-full h-full object-cover group-hover/main:scale-105 transition-transform duration-200"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-black/80 text-white p-2 text-xs font-bold leading-tight">
                      {activeProject.images[activeImageIdx].caption}
                    </div>
                  </div>

                  {/* Thumbnail Row if multiple images */}
                  {activeProject.images.length > 1 && (
                    <div className="flex gap-2 mt-3 pt-3 border-t-2 border-black overflow-x-auto">
                      {activeProject.images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveImageIdx(idx)}
                          className={`w-16 h-12 shrink-0 border-2 border-black overflow-hidden relative transition-transform ${
                            activeImageIdx === idx
                              ? 'ring-4 ring-coral scale-105'
                              : 'opacity-70 hover:opacity-100'
                          }`}
                        >
                          <img src={img.url} alt={img.caption} className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
