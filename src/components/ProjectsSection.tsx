import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { SectorRibbon } from './SectorRibbon';
import { ImageModal } from './ImageModal';
import { GithubIcon } from './Icons';
import { Maximize2 } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string; caption?: string } | null>(null);

  const categories = ['All', 'Edge AI & Vision', 'Neuroscience & Deep Learning', 'Embedded & Systems', 'Time Series & Scientific'];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="relative bg-blueprint-grid text-[#181715] border-t-2 border-[#FF5722]">
      {/* Sector Ribbon */}
      <SectorRibbon sectorNumber="03" sectorName="FEATURED PROJECTS & SYSTEM ARCHITECTURES" dark={true} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-14 sm:py-20">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 border-b border-[#D5CCBB] pb-6">
          <div>
            <span className="font-mono text-xs font-bold text-[#FF5722] tracking-widest uppercase">
              // PRODUCTION SYSTEMS & EXPERIMENTAL BUILDS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-sans text-[#181715] mt-1">
              Project Showcase
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] font-sans mt-1">
              End-to-end architectures spanning 3D WebGL neuroimaging, multispectral remote sensing, and low-level Linux routers.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#FAF7F0] border border-[#E2DBD0] rounded-lg">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-mono text-xs px-3 py-1.5 rounded-md transition-all ${
                  activeCategory === cat
                    ? 'bg-[#181715] text-[#F4EFE6] font-bold shadow-sm'
                    : 'text-[#64748B] hover:text-[#181715] hover:bg-white/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className={`tactical-card rounded-xl overflow-hidden bg-white border border-[#E2DBD0] flex flex-col justify-between ${
                project.featured ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              {/* Card Header Media / Thumbnail Banner */}
              {project.images && project.images.length > 0 ? (
                <div className="relative group bg-[#090D16] border-b border-[#E2DBD0] overflow-hidden">
                  <div className={`grid ${project.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'} gap-1 p-2 bg-[#0A0E17]`}>
                    {project.images.map((img, imgIdx) => (
                      <div
                        key={imgIdx}
                        onClick={() => setSelectedImage({
                          url: img.url,
                          title: project.title,
                          caption: img.caption
                        })}
                        className="relative h-44 sm:h-52 overflow-hidden rounded cursor-pointer group/img"
                      >
                        <img
                          src={img.url}
                          alt={img.caption}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover/img:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center text-white">
                          <Maximize2 className="w-5 h-5" />
                        </div>
                        <div className="absolute bottom-1 left-1 right-1 bg-black/75 backdrop-blur-sm text-[10px] font-mono text-white/90 px-2 py-0.5 rounded truncate">
                          {img.caption}
                        </div>
                      </div>
                    ))}
                  </div>

                  {project.badge && (
                    <div className="absolute top-3 right-3 font-mono text-[10px] font-bold px-2.5 py-1 rounded bg-[#FF5722] text-white shadow-md">
                      {project.badge}
                    </div>
                  )}
                </div>
              ) : (
                <div className="h-28 bg-[#0D131F] border-b border-[#E2DBD0] p-4 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-[#00E5FF] tracking-wider uppercase">
                      // {project.category}
                    </span>
                    {project.badge && (
                      <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-[#FF5722] text-white">
                        {project.badge}
                      </span>
                    )}
                  </div>
                  <div className="font-mono text-xs text-[#94A3B8]">
                    DATE // {project.date}
                  </div>
                </div>
              )}

              {/* Card Body Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-[#FF5722] font-bold uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="font-mono text-[11px] text-[#8899A6]">
                      {project.date}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-sans text-[#181715] leading-tight">
                    {project.title}
                  </h3>

                  {project.subtitle && (
                    <div className="text-xs font-semibold text-[#0088CC]">
                      {project.subtitle}
                    </div>
                  )}

                  {project.mentor && (
                    <div className="font-mono text-xs text-[#64748B] italic">
                      Mentor: <strong className="font-medium text-[#181715]">{project.mentor}</strong>
                    </div>
                  )}

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-sans pt-1">
                    {project.description}
                  </p>

                  {/* Architecture Deliverables (if present) */}
                  {project.architectureDetails && (
                    <div className="pt-2 space-y-1.5 bg-[#FAF7F0] p-3 rounded border border-[#E2DBD0]">
                      <div className="font-mono text-[10px] font-bold text-[#181715] uppercase tracking-wider">
                        &gt; CORE ARCHITECTURAL SPECIFICATIONS:
                      </div>
                      <ul className="space-y-1 text-xs text-[#475569]">
                        {project.architectureDetails.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2">
                            <span className="font-mono text-[#FF5722] font-bold select-none text-[11px]">▪</span>
                            <span className="leading-tight">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Footer: Tech tags + Action buttons */}
                <div className="space-y-4 pt-3 border-t border-[#E2DBD0]">
                  {/* Tech Tags */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#FAF7F0] border border-[#E2DBD0] text-[#334155]"
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
                        className="inline-flex items-center gap-2 font-mono text-xs font-bold px-3.5 py-1.5 rounded bg-[#181715] text-white hover:bg-[#FF5722] transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    ) : (
                      <span className="font-mono text-[10px] text-[#8899A6]">
                        INTERNAL / RESEARCH REPO
                      </span>
                    )}

                    <span className="font-mono text-[10px] text-[#8899A6]">
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
