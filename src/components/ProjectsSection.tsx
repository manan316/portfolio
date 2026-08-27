import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { SectorRibbon } from './SectorRibbon';
import { ImageModal } from './ImageModal';
import { GithubIcon } from './Icons';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Maximize2, Layers, ExternalLink, Terminal, Sparkles } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string; caption?: string } | null>(null);
  const containerRef = useScrollReveal<HTMLElement>();

  return (
    <section 
      id="projects" 
      ref={containerRef} 
      className="relative bg-cyber-canvas text-[#F1F5F9] border-t-2 border-[#1E263D]/80 overflow-hidden"
    >
      {/* Sector Ribbon */}
      <SectorRibbon sectorNumber="03" sectorName="FEATURED PROJECTS & SYSTEM ARCHITECTURES" dark={true} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-24">
        
        {/* Section Title */}
        <div className="mb-12 border-b border-white/[0.08] pb-6 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F121E]/80 backdrop-blur-md border border-[#00F0FF]/30 font-mono text-xs font-bold text-[#00F0FF] shadow-2xs mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] beacon-pulse shadow-[0_0_8px_#00FF9D]"></span>
            <span>// PRODUCTION SYSTEMS & EXPERIMENTAL BUILDS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-[#F1F5F9]">
            Project Showcase
          </h2>
          <p className="text-xs sm:text-sm text-[#94A3B8] font-sans mt-1 max-w-2xl">
            End-to-end architectures spanning 3D WebGL spatial telemetry, multispectral remote sensing, and low-level Linux routers.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className={`tactical-glass-card rounded-3xl overflow-hidden flex flex-col justify-between reveal-on-scroll reveal-delay-${(idx % 3 + 1) * 100} ${
                project.featured ? 'md:col-span-2 lg:col-span-2' : ''
              } corner-brackets`}
            >
              {/* Card Header Media / Thumbnail Banner */}
              {project.images && project.images.length > 0 ? (
                <div className="relative group bg-[#08090D] border-b border-white/[0.08] overflow-hidden">
                  <div className={`grid ${project.images.length >= 3 ? 'grid-cols-1 sm:grid-cols-3' : project.images.length === 2 ? 'grid-cols-2' : 'grid-cols-1'} gap-2.5 p-2.5 bg-[#08090D]`}>
                    {project.images.map((img, imgIdx) => (
                      <div
                        key={imgIdx}
                        onClick={() => setSelectedImage({
                          url: img.url,
                          title: project.title,
                          caption: img.caption
                        })}
                        className="relative h-48 sm:h-56 overflow-hidden rounded-2xl cursor-pointer group/img border border-white/[0.08]"
                      >
                        <img
                          src={img.url}
                          alt={img.caption}
                          className="w-full h-full object-cover transition-transform duration-600 group-hover/img:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white backdrop-blur-[3px]">
                          <div className="p-3 rounded-2xl bg-black/80 border border-[#00F0FF]/50 transform translate-y-2 group-hover/img:translate-y-0 transition-transform duration-300 shadow-[0_0_20px_rgba(0,240,255,0.4)]">
                            <Maximize2 className="w-5 h-5 text-[#00F0FF]" />
                          </div>
                        </div>
                        <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-[#0A0D17]/85 backdrop-blur-md text-[10px] font-mono text-white px-3 py-1.5 rounded-xl truncate border border-white/[0.08] flex items-center justify-between shadow-lg">
                          <span className="truncate">{img.caption}</span>
                          <span className="text-[#00F0FF] text-[9px] font-bold ml-1 shrink-0">[VIEW]</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {project.badge && (
                    <div className="absolute top-4 right-4 font-mono text-[10px] font-bold px-3 py-1 rounded-full bg-[#08090D]/90 backdrop-blur-md text-[#00FF9D] shadow-lg flex items-center gap-1.5 border border-[#00FF9D]/40 animate-float">
                      <Sparkles className="w-3 h-3 text-[#00FF9D] animate-spin" style={{ animationDuration: '6s' }} />
                      <span>{project.badge}</span>
                    </div>
                  )}
                </div>
              ) : (
                <div className="h-32 bg-[#08090D] border-b border-white/[0.08] p-5 flex flex-col justify-between relative overflow-hidden">
                  <div className="flex items-center justify-between z-10">
                    <span className="font-mono text-[10px] text-[#00F0FF] tracking-wider uppercase flex items-center gap-1.5 bg-[#0F121E]/80 backdrop-blur-md px-3 py-1 rounded-xl border border-white/[0.08]">
                      <Layers className="w-3 h-3 text-[#00F0FF]" />
                      // {project.category}
                    </span>
                    {project.badge && (
                      <span className="font-mono text-[10px] font-bold px-3 py-1 rounded-full bg-[#00FF9D]/10 text-[#00FF9D] border border-[#00FF9D]/30 shadow-xs">
                        {project.badge}
                      </span>
                    )}
                  </div>
                  <div className="font-mono text-xs text-[#94A3B8] z-10 flex items-center gap-2">
                    <span className="text-[#64748B]">SYS_TIMELINE //</span>
                    <span className="text-[#00FF9D] font-semibold">{project.date}</span>
                  </div>
                </div>
              )}

              {/* Card Body Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-[#00F0FF] font-bold uppercase tracking-wider bg-[#00F0FF]/10 px-2.5 py-0.5 rounded-full border border-[#00F0FF]/30 shadow-xs">
                      {project.category}
                    </span>
                    <span className="font-mono text-[11px] text-[#94A3B8] font-medium">
                      {project.date}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-sans text-[#F1F5F9] leading-tight group-hover:text-[#00F0FF] transition-colors">
                    {project.title}
                  </h3>

                  {project.subtitle && (
                    <div className="text-xs font-semibold text-[#38BDF8] flex items-center gap-1">
                      <span className="text-[#00FF9D]">▸</span>
                      <span>{project.subtitle}</span>
                    </div>
                  )}

                  {project.mentor && (
                    <div className="font-mono text-xs text-[#94A3B8] italic glass-inset px-3 py-1.5 rounded-xl">
                      Academic Mentor: <strong className="font-semibold text-[#F1F5F9]">{project.mentor}</strong>
                    </div>
                  )}

                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed font-sans pt-1">
                    {project.description}
                  </p>

                  {/* Architecture Deliverables - Frosted Inset Box */}
                  {project.architectureDetails && (
                    <div className="pt-2.5 space-y-2 glass-inset p-4.5 rounded-2xl">
                      <div className="font-mono text-[10px] font-bold text-[#00F0FF] uppercase tracking-wider flex items-center gap-1.5">
                        <Terminal className="w-3.5 h-3.5 text-[#00F0FF]" />
                        <span>CORE ARCHITECTURAL SPECIFICATIONS:</span>
                      </div>
                      <ul className="space-y-1.5 text-xs text-[#CBD5E1]">
                        {project.architectureDetails.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2 group/spec">
                            <span className="font-mono text-[#00FF9D] font-bold select-none text-xs mt-0.5">▪</span>
                            <span className="leading-relaxed group-hover/spec:text-white transition-colors">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Footer: Tech tags + Action buttons */}
                <div className="space-y-4 pt-4 border-t border-white/[0.08]">
                  {/* Tech Tags */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="font-mono text-[10px] px-2.5 py-1 rounded-xl glass-pill text-[#CBD5E1] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center justify-between pt-1">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-xs font-bold px-4 py-2 rounded-xl bg-gradient-to-r from-[#00F0FF]/20 to-[#00FF9D]/20 hover:from-[#00F0FF] hover:to-[#38BDF8] text-[#00F0FF] hover:text-[#08090D] transition-all duration-250 interactive-btn shadow-sm border border-[#00F0FF]/40 hover:border-[#00F0FF]"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="font-mono text-[10px] text-[#64748B] glass-pill px-3 py-1 rounded-xl">
                        INTERNAL / RESEARCH REPO
                      </span>
                    )}

                    <span className="font-mono text-[10px] text-[#64748B] font-semibold">
                      SYS_ID: PRJ_0{idx + 1}
                    </span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          imageUrl={selectedImage.url}
          title={selectedImage.title}
          caption={selectedImage.caption}
        />
      )}
    </section>
  );
};
