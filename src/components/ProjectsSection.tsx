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
      className="relative bg-cyber-mesh text-[#F8FAFC] border-t-2 border-[#1E293B] overflow-hidden"
    >
      {/* Sector Ribbon */}
      <SectorRibbon sectorNumber="03" sectorName="FEATURED PROJECTS & SYSTEM ARCHITECTURES" dark={true} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-24">
        
        {/* Section Title */}
        <div className="mb-12 border-b border-[#1E293B] pb-6 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D131F] border border-[#1E293B] font-mono text-xs font-bold text-[#00E5FF] shadow-sm mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] beacon-pulse shadow-[0_0_6px_#00E5FF]"></span>
            <span>// PRODUCTION SYSTEMS & EXPERIMENTAL BUILDS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-white">
            Project Showcase
          </h2>
          <p className="text-xs sm:text-sm text-[#94A3B8] font-sans mt-1 max-w-2xl">
            End-to-end architectures spanning 3D WebGL neuroimaging, multispectral remote sensing, and low-level Linux routers.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className={`tactical-glass-card rounded-2xl overflow-hidden flex flex-col justify-between reveal-on-scroll reveal-delay-${(idx % 3 + 1) * 100} ${
                project.featured ? 'md:col-span-2 lg:col-span-2' : ''
              } corner-brackets`}
            >
              {/* Card Header Media / Thumbnail Banner */}
              {project.images && project.images.length > 0 ? (
                <div className="relative group bg-[#06090E] border-b border-[#1E293B] overflow-hidden">
                  <div className={`grid ${project.images.length >= 3 ? 'grid-cols-1 sm:grid-cols-3' : project.images.length === 2 ? 'grid-cols-2' : 'grid-cols-1'} gap-2 p-2 bg-[#06090E]`}>
                    {project.images.map((img, imgIdx) => (
                      <div
                        key={imgIdx}
                        onClick={() => setSelectedImage({
                          url: img.url,
                          title: project.title,
                          caption: img.caption
                        })}
                        className="relative h-48 sm:h-56 overflow-hidden rounded-xl cursor-pointer group/img"
                      >
                        <img
                          src={img.url}
                          alt={img.caption}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white backdrop-blur-[3px]">
                          <div className="p-3 rounded-full bg-black/80 border border-white/20 transform translate-y-2 group-hover/img:translate-y-0 transition-transform duration-300 shadow-2xl">
                            <Maximize2 className="w-5 h-5 text-[#00E5FF]" />
                          </div>
                        </div>
                        <div className="absolute bottom-2 left-2 right-2 bg-black/85 backdrop-blur-md text-[10px] font-mono text-white/95 px-3 py-1 rounded-lg truncate border border-white/10 flex items-center justify-between shadow-lg">
                          <span className="truncate">{img.caption}</span>
                          <span className="text-[#00E5FF] text-[9px] font-bold ml-1 shrink-0">[VIEW]</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {project.badge && (
                    <div className="absolute top-3.5 right-3.5 font-mono text-[10px] font-bold px-3 py-1 rounded-full bg-[#00E5FF] text-[#06090E] shadow-xl flex items-center gap-1.5 border border-[#00E5FF]/40">
                      <Sparkles className="w-3 h-3 text-[#06090E] animate-spin" style={{ animationDuration: '6s' }} />
                      <span>{project.badge}</span>
                    </div>
                  )}
                </div>
              ) : (
                <div className="h-32 bg-[#06090E] border-b border-[#1E293B] p-5 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-36 h-36 bg-[#00E5FF]/10 rounded-full blur-2xl pointer-events-none"></div>
                  <div className="flex items-center justify-between z-10">
                    <span className="font-mono text-[10px] text-[#00E5FF] tracking-wider uppercase flex items-center gap-1.5 bg-[#0D131F] px-3 py-1 rounded-lg border border-[#1E293B]">
                      <Layers className="w-3 h-3 text-[#00E5FF]" />
                      // {project.category}
                    </span>
                    {project.badge && (
                      <span className="font-mono text-[10px] font-bold px-3 py-1 rounded-full bg-[#00E5FF] text-[#06090E] shadow-md">
                        {project.badge}
                      </span>
                    )}
                  </div>
                  <div className="font-mono text-xs text-[#94A3B8] z-10 flex items-center gap-2">
                    <span className="text-white/40">SYS_TIMELINE //</span>
                    <span className="text-[#00E5FF] font-semibold">{project.date}</span>
                  </div>
                </div>
              )}

              {/* Card Body Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-[#00E5FF] font-bold uppercase tracking-wider bg-[#00E5FF]/10 px-2.5 py-0.5 rounded-full border border-[#00E5FF]/20">
                      {project.category}
                    </span>
                    <span className="font-mono text-[11px] text-[#64748B] font-medium">
                      {project.date}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-sans text-white leading-tight group-hover:text-[#00E5FF] transition-colors">
                    {project.title}
                  </h3>

                  {project.subtitle && (
                    <div className="text-xs font-semibold text-[#38BDF8] flex items-center gap-1">
                      <span>▸</span>
                      <span>{project.subtitle}</span>
                    </div>
                  )}

                  {project.mentor && (
                    <div className="font-mono text-xs text-[#94A3B8] italic bg-[#06090E] px-3 py-1.5 rounded-lg border border-[#1E293B]">
                      Academic Mentor: <strong className="font-semibold text-white">{project.mentor}</strong>
                    </div>
                  )}

                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed font-sans pt-1">
                    {project.description}
                  </p>

                  {/* Architecture Deliverables */}
                  {project.architectureDetails && (
                    <div className="pt-2.5 space-y-2 bg-[#06090E]/80 p-4 rounded-xl border border-[#1E293B] shadow-inner">
                      <div className="font-mono text-[10px] font-bold text-[#00E5FF] uppercase tracking-wider flex items-center gap-1.5">
                        <Terminal className="w-3.5 h-3.5 text-[#00E5FF]" />
                        <span>CORE ARCHITECTURAL SPECIFICATIONS:</span>
                      </div>
                      <ul className="space-y-1.5 text-xs text-[#94A3B8]">
                        {project.architectureDetails.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2 group/spec">
                            <span className="font-mono text-[#00E5FF] font-bold select-none text-xs mt-0.5">▪</span>
                            <span className="leading-relaxed group-hover/spec:text-[#F8FAFC] transition-colors">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Footer: Tech tags + Action buttons */}
                <div className="space-y-4 pt-4 border-t border-[#1E293B]">
                  {/* Tech Tags */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="font-mono text-[10px] px-2.5 py-1 rounded-md bg-[#06090E] hover:bg-[#131C2E] border border-[#1E293B] hover:border-[#00E5FF] text-[#CBD5E1] transition-all hover:scale-105 font-medium"
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
                        className="inline-flex items-center gap-2 font-mono text-xs font-bold px-4 py-2 rounded-xl bg-[#00E5FF] hover:bg-[#38BDF8] text-[#06090E] transition-all duration-200 interactive-btn shadow-md hover:shadow-[0_0_18px_rgba(0,229,255,0.4)]"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="font-mono text-[10px] text-[#64748B] bg-[#06090E] px-3 py-1 rounded-lg border border-[#1E293B]">
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
