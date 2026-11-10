import React, { useState } from 'react';
import { ProjectItem } from '../types/portfolio';
import { ZoomIn, ArrowRight } from 'lucide-react';
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
    <section id="work" className="py-20 px-4 sm:px-8 lg:px-12 2xl:px-16 w-full max-w-[1720px] mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="cartouche-label text-xs">
            [04 // ARCHIVE OF CRAFT]
          </span>
          <span className="font-serif tracking-widest text-xs uppercase text-[#1a3055]/70 font-bold">
            {projects.length} RESEARCH & PRODUCTION BUILDS
          </span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1a3055] mb-4">
          Complete Systems & Engineering Archive
        </h2>
        <p className="font-serif text-sm sm:text-base max-w-3xl text-[#1a3055]/85 leading-relaxed">
          Comprehensive inventory of edge firmware, low-level C pipelines, neural network models, and full-stack systems engineered across research and independent initiatives.
        </p>
      </div>

      {/* Filter Category Woodblock Tabs */}
      <div className="flex flex-wrap gap-2.5 mb-10">
        {filterCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedFilter(cat)}
            className={`px-3.5 py-1.5 text-xs font-serif font-bold uppercase tracking-wider border-3 border-[#1a3055] transition-all duration-150 ${
              selectedFilter === cat
                ? 'bg-[#d4553a] text-[#f5f0e1] shadow-woodblock translate-x-0.5 translate-y-0.5'
                : 'bg-[#f5f0e1] text-[#1a3055] hover:bg-[#c9a227]/20 hover:shadow-woodblock hover:translate-x-0.5 hover:translate-y-0.5'
            }`}
          >
            {cat} {cat === 'All' ? `(${projects.length})` : ''}
          </button>
        ))}
      </div>

      {/* Woodblock Grid - 4 Columns across widescreen displays */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="woodblock-card woodblock-bar-ultramarine p-6 flex flex-col justify-between group relative"
          >
            <div>
              {/* Category & Date */}
              <div className="flex items-center justify-between text-xs mb-3">
                <span className="px-2 py-0.5 text-[10px] font-serif font-bold uppercase tracking-wider bg-[#2a5a8c] text-[#f5f0e1] border border-[#1a3055]">
                  {project.category}
                </span>
                <span className="font-serif text-xs font-bold text-[#1a3055]/70 tracking-wider">
                  {project.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-lg font-bold text-[#1a3055] mb-1 tracking-tight leading-snug group-hover:text-[#d4553a] transition-colors">
                {project.title}
              </h3>

              {project.badge && (
                <div className="mb-3">
                  <span className="px-2 py-0.5 text-[10px] font-serif font-bold uppercase tracking-wider bg-[#c9a227] text-[#1a3055] border border-[#1a3055] inline-block">
                    {project.badge}
                  </span>
                </div>
              )}

              {/* Screenshot thumbnail in woodblock frame */}
              {project.images && project.images[0] && (
                <div
                  onClick={() => onOpenImage(project.images![0])}
                  className="mb-3.5 h-40 border-3 border-[#1a3055] relative cursor-pointer group/thumb bg-[#f5f0e1] overflow-hidden shadow-woodblock"
                >
                  <img
                    src={project.images[0].url}
                    alt={project.images[0].caption}
                    className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-[#1a3055] text-[#f5f0e1] px-2 py-1 flex items-center justify-between border-t-2 border-[#1a3055]">
                    <span className="text-[10px] font-serif font-bold tracking-wider uppercase truncate">
                      {project.images[0].caption}
                    </span>
                    <ZoomIn className="w-3.5 h-3.5 text-[#c9a227] shrink-0 ml-1" />
                  </div>
                </div>
              )}

              {/* Summary */}
              <p className="font-serif text-xs text-[#1a3055]/85 leading-relaxed line-clamp-3 mb-4">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="woodblock-tag text-[10px]"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="px-1.5 py-0.5 text-[10px] font-serif font-bold text-[#1a3055]/70">
                    +{project.technologies.length - 4}
                  </span>
                )}
              </div>
            </div>

            {/* Action Row */}
            <div className="pt-3 border-t-2 border-[#1a3055]/20 flex items-center justify-between gap-2">
              <button
                onClick={() => onOpenInspector(project)}
                className="seal-btn-primary py-1.5 px-3 text-xs flex items-center gap-1.5"
              >
                <span>Blueprint Spec</span>
                <ArrowRight className="w-3 h-3 text-[#f5f0e1]" />
              </button>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="seal-btn-secondary py-1.5 px-2.5 text-xs flex items-center"
                  title="View Repository"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-[#1a3055]" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
