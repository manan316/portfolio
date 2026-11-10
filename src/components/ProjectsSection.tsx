import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { SectorRibbon } from './SectorRibbon';
import { ImageModal } from './ImageModal';
import { GithubIcon } from './Icons';
import { 
  Maximize2, 
  ExternalLink, 
  Terminal, 
  Sparkles,
  Layers
} from 'lucide-react';
import { 
  MemphisCircle, 
  MemphisTriangle, 
  MemphisWave, 
  MemphisZigzag, 
  MemphisCardOrnaments,
  MemphisZigzagDivider 
} from './MemphisOrnament';

export const ProjectsSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string; caption?: string } | null>(null);

  const cardBorderColors = [
    'hover:border-black',
    'hover:border-black',
  ];

  return (
    <section id="projects" className="relative bg-[#fdf6e3] text-black overflow-hidden pt-4 pb-24">
      {/* Sector Ribbon */}
      <SectorRibbon sectorNumber="03" sectorName="PRODUCTION SYSTEMS & EXPERIMENTAL BUILDS" color="mint" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 pt-16">
        
        {/* Section Heading */}
        <div className="mb-12">
          <div className="inline-block bg-[#ff6b6b] text-white px-3.5 py-1 text-xs font-black uppercase tracking-wider border-3 border-black shadow-[3px_3px_0_#000000] tilt-neg-1 mb-2">
            // PORTFOLIO ARCHIVES
          </div>
          <h2 className="memphis-heading text-black">
            FEATURED PROJECT SHOWCASE
          </h2>
          <p className="font-sans font-bold text-base text-black/80 mt-1 max-w-2xl">
            High-performance digital twins, remote sensing intelligence, NPU vision inference, and hardened embedded Linux routers.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {projects.map((project, idx) => {
            const isFeatured = project.featured;
            const colSpan = isFeatured ? 'lg:col-span-12' : 'lg:col-span-6';
            const tiltClass = idx % 3 === 0 ? 'tilt-neg-1' : idx % 3 === 1 ? 'tilt-pos-1' : 'tilt-neg-2';

            return (
              <div
                key={project.id}
                className={`${colSpan} memphis-card group p-0 overflow-hidden ${tiltClass} hover:tilt-0 transition-transform duration-150 flex flex-col justify-between`}
              >
                {/* Chaos Ornaments */}
                <MemphisCardOrnaments variant={(idx % 4 + 1) as 1 | 2 | 3 | 4} />

                {/* Card Top Banner: Title, Category, Badge, Date */}
                <div className="p-5 sm:p-6 bg-white border-b-4 border-black">
                  
                  <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3">
                    <span className="memphis-badge bg-[#48dbfb] text-black font-black">
                      <Layers className="w-3.5 h-3.5 text-black" />
                      <span>{project.category}</span>
                    </span>

                    <div className="flex items-center gap-2">
                      {project.badge && (
                        <span className="memphis-badge bg-[#feca57] text-black">
                          <Sparkles className="w-3 h-3 text-[#ff6b6b]" />
                          <span>{project.badge}</span>
                        </span>
                      )}
                      <span className="font-mono text-xs font-bold text-black bg-[#fdf6e3] px-2.5 py-1 border-2 border-black">
                        {project.date}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-sans font-black text-2xl sm:text-3xl text-black group-hover:text-[#ff6b6b] pop-swap leading-tight">
                    {project.title}
                  </h3>

                  {project.subtitle && (
                    <div className="font-sans font-bold text-sm text-[#5f27cd] mt-1 flex items-center gap-1.5">
                      <span className="text-[#ff6b6b]">▶</span>
                      <span>{project.subtitle}</span>
                    </div>
                  )}

                  {project.mentor && (
                    <div className="font-mono text-xs font-bold text-black mt-2 bg-[#fdf6e3] px-3 py-1 border-2 border-black inline-block">
                      Academic Mentor: <strong>{project.mentor}</strong>
                    </div>
                  )}
                </div>

                {/* Project Screenshots Gallery (Framed in 4px black borders) */}
                {project.images && project.images.length > 0 && (
                  <div className="p-4 sm:p-6 bg-[#fdf6e3] border-b-4 border-black">
                    <div className={`grid ${project.images.length >= 3 ? 'grid-cols-1 sm:grid-cols-3' : project.images.length === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'} gap-4`}>
                      {project.images.map((img, imgIdx) => (
                        <div
                          key={imgIdx}
                          onClick={() => setSelectedImage({
                            url: img.url,
                            title: project.title,
                            caption: img.caption
                          })}
                          className="group/img cursor-pointer border-3 border-black bg-white p-1.5 shadow-[3px_3px_0_#000000] hover:shadow-[6px_6px_0_#000000] hover:-translate-y-1 transition-all duration-150 select-none relative"
                        >
                          <div className="relative h-44 sm:h-48 overflow-hidden border-2 border-black bg-[#ff9ff3]">
                            <img
                              src={img.url}
                              alt={img.caption}
                              className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-150 flex items-center justify-center">
                              <span className="bg-[#feca57] text-black font-black text-xs px-3 py-1.5 border-2 border-black shadow-[2px_2px_0_#000000] flex items-center gap-1.5">
                                <Maximize2 className="w-3.5 h-3.5" />
                                <span>VIEW FULLSCREEN</span>
                              </span>
                            </div>
                          </div>
                          <div className="mt-2 font-mono text-[11px] font-bold text-black truncate px-1">
                            {img.caption}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Card Body: Description & Architecture Specs */}
                <div className="p-6 sm:p-8 space-y-5 bg-white flex-1 flex flex-col justify-between">
                  
                  <div className="space-y-4">
                    <p className="font-sans font-bold text-sm sm:text-base text-black/90 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Architecture Deliverables Box */}
                    {project.architectureDetails && (
                      <div className="p-4 sm:p-5 bg-[#fdf6e3] border-3 border-black shadow-[3px_3px_0_#000000] space-y-2.5">
                        <div className="font-sans font-black text-xs uppercase tracking-wider text-[#5f27cd] flex items-center gap-2">
                          <Terminal className="w-4 h-4 text-[#ff6b6b]" />
                          <span>CORE ARCHITECTURAL SPECIFICATIONS:</span>
                        </div>
                        <ul className="space-y-2 text-xs sm:text-sm font-bold text-black">
                          {project.architectureDetails.map((detail, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2">
                              <span className="text-[#ff6b6b] font-black select-none text-sm">▶</span>
                              <span className="leading-snug">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Footer: Tech tags + Action Links */}
                  <div className="pt-5 border-t-3 border-black space-y-4 mt-4">
                    {/* Tech Badges */}
                    <div className="flex flex-wrap items-center gap-1.5">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="memphis-badge bg-[#feca57] text-black text-[11px] py-0.5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="memphis-btn-blue text-xs py-2 px-4 border-3"
                        >
                          <GithubIcon className="w-4 h-4" />
                          <span>SOURCE CODE</span>
                          <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                        </a>
                      ) : (
                        <span className="memphis-badge bg-white text-black/70 text-[11px]">
                          INTERNAL / RESEARCH LAB REPO
                        </span>
                      )}

                      <span className="font-mono text-xs font-bold text-black bg-[#ff9ff3] px-2.5 py-1 border-2 border-black">
                        SYS_ID: PRJ_0{idx + 1}
                      </span>
                    </div>

                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Section Bottom Zigzag Divider */}
        <MemphisZigzagDivider color="honey" className="mt-16" />

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
