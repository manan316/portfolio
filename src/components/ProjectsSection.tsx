import React, { useState } from 'react';
import { ProjectItem } from '../types/portfolio';
import { ArrowRight, ArrowUpRight, ZoomIn } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectsSectionProps {
  projects: ProjectItem[];
  onOpenImage: (image: { url: string; caption: string }) => void;
  onOpenInspector: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  onOpenImage,
  onOpenInspector,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filterCategories = [
    'All',
    'Edge AI & Vision',
    'IoT & Digital Twins',
    'Geospatial & Environmental AI',
    'Deep Learning & Neural Systems',
    'Embedded & Systems',
    'Time Series & Scientific'
  ];

  const filteredProjects = projects.filter((p) => {
    if (selectedFilter === 'All') return true;
    return p.category === selectedFilter;
  });

  return (
    <section id="work" className="pt-24 sm:pt-32 lg:pt-40 px-4 sm:px-8 max-w-[1600px] mx-auto scroll-mt-24 hairline-divider">
      {/* Section Header */}
      <div className="pb-12 sm:pb-16">
        <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-[#71717a]">
          <span className="w-2 h-2 bg-[#ff4d00] inline-block"></span>
          <span>04 // ARCHIVE OF BUILDS</span>
          <span>· {projects.length} RESEARCH & PRODUCTION BUILDS</span>
        </div>
        <h2 className="fluid-heading text-[#0a0a0a] uppercase tracking-[-0.04em] leading-[0.88] font-black break-words mt-4 mb-6">
          SELECTED BUILDS.
        </h2>
        <p className="text-lg sm:text-xl text-[#0a0a0a] font-normal leading-[1.5] max-w-3xl">
          Comprehensive inventory of edge firmware, low-level C pipelines, neural network models, and full-stack systems engineered across research and independent initiatives.
        </p>
      </div>

      {/* Monospace Filter Categories */}
      <div className="flex flex-wrap gap-2 pb-8 border-b border-[#0a0a0a]/15 font-mono text-[11px] tracking-[0.2em] uppercase">
        {filterCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedFilter(cat)}
            className={`px-4 py-2 transition-colors ${
              selectedFilter === cat
                ? 'bg-[#0a0a0a] text-white font-medium'
                : 'text-[#71717a] hover:text-[#0a0a0a] border border-[#0a0a0a]/15'
            }`}
          >
            {cat} {cat === 'All' ? `(${projects.length})` : ''}
          </button>
        ))}
      </div>

      {/* Oversized Typography Work Index Rows */}
      <div className="divide-y divide-[#0a0a0a]/15">
        {filteredProjects.map((project, idx) => (
          <div
            key={project.id}
            className="index-row py-8 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center group"
          >
            {/* Part 1: Index Number (11px monospace) */}
            <div className="lg:col-span-1 font-mono text-[11px] tracking-[0.2em] uppercase text-[#71717a]">
              {String(idx + 1).padStart(2, '0')}
            </div>

            {/* Part 2: Project Name (Large Type fluid) */}
            <div className="lg:col-span-5 space-y-1.5">
              <h3 className="index-title text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0a0a0a] tracking-tight leading-tight transition-colors duration-150">
                {project.title}
              </h3>
              {project.badge && (
                <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#ff4d00]">
                  {project.badge}
                </div>
              )}
              <p className="text-sm text-[#71717a] line-clamp-2 pt-1 font-normal">
                {project.description}
              </p>
            </div>

            {/* Part 3: Category (11px monospace) */}
            <div className="lg:col-span-3 font-mono text-[11px] tracking-[0.2em] uppercase text-[#71717a]">
              <div>{project.category}</div>
              <div className="text-[#0a0a0a] mt-1">{project.date}</div>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.technologies.slice(0, 3).map((t) => (
                  <span key={t} className="text-[10px] text-[#71717a]">
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            {/* Part 4: Interactive Actions & Thumbnail (3 cols) */}
            <div className="lg:col-span-3 flex items-center justify-start lg:justify-end gap-3">
              {project.images && project.images[0] && (
                <div
                  onClick={() => onOpenImage(project.images![0])}
                  className="w-24 h-16 sm:w-28 sm:h-18 bg-[#e4e4e7] border border-[#0a0a0a]/15 group-hover/img:border-[#ff4d00] overflow-hidden cursor-pointer shrink-0 group/img relative transition-all"
                  title={project.images[0].caption}
                >
                  <img
                    src={project.images[0].url}
                    alt={project.images[0].caption}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale contrast-110 group-hover/img:grayscale-0 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 flex items-center justify-center transition-opacity">
                    <span className="text-[9px] text-white font-mono uppercase tracking-[0.15em] flex items-center gap-1">
                      <ZoomIn className="w-3 h-3 text-[#ff4d00]" /> ZOOM
                    </span>
                  </div>
                </div>
              )}

              <button
                onClick={() => onOpenInspector(project)}
                className="px-4 py-2 bg-transparent hover:bg-[#ff4d00] text-[#0a0a0a] hover:text-white border border-[#0a0a0a]/20 hover:border-[#ff4d00] font-mono text-[11px] tracking-[0.2em] uppercase transition-colors flex items-center gap-1.5"
              >
                <span>SPEC</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-[#71717a] hover:text-[#0a0a0a] border border-[#0a0a0a]/20 hover:border-[#0a0a0a] transition-colors"
                  title="View Repository"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
