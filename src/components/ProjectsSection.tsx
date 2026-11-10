import React, { useState } from 'react';
import { ProjectItem } from '../types/portfolio';
import { ZoomIn, Sparkles, ArrowRight, Code2 } from 'lucide-react';
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
        <div className="flex items-center gap-2 mb-3">
          <span className="bento-badge text-cyan-800 bg-cyan-50 border-cyan-300 font-semibold">
            [04 // ENGINEERING ARCHIVE]
          </span>
          <span className="text-xs text-slate-500 font-mono">
            {projects.length} PRODUCTION & RESEARCH BUILDS
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
          Complete Systems & Engineering Archive
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-3xl font-normal leading-relaxed">
          Comprehensive inventory of edge firmware, low-level C pipelines, neural network models, and full-stack systems engineered across research and independent initiatives.
        </p>
      </div>

      {/* Filter Category Pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        {filterCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedFilter(cat)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
              selectedFilter === cat
                ? 'bg-slate-900 text-white font-bold shadow-md'
                : 'bg-white text-slate-700 hover:text-slate-950 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {cat} {cat === 'All' ? `(${projects.length})` : ''}
          </button>
        ))}
      </div>

      {/* Bento Grid - 4 Columns across widescreen displays */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bento-card p-6 flex flex-col justify-between bento-glow-cyan group"
          >
            <div>
              {/* Category & Date */}
              <div className="flex items-center justify-between text-xs mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-slate-100 text-cyan-800 border border-slate-200">
                  {project.category}
                </span>
                <span className="text-[11px] font-mono text-slate-500 font-medium">{project.date}</span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-slate-900 mb-1 tracking-tight leading-snug group-hover:text-cyan-700 transition-colors">
                {project.title}
              </h3>

              {project.badge && (
                <div className="mb-3">
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-cyan-50 text-cyan-800 border border-cyan-200 inline-block">
                    {project.badge}
                  </span>
                </div>
              )}

              {/* Screenshot thumbnail */}
              {project.images && project.images[0] && (
                <div
                  onClick={() => onOpenImage(project.images![0])}
                  className="mb-3.5 h-40 rounded-xl overflow-hidden border border-slate-200 relative cursor-pointer group/thumb bg-slate-100 shadow-sm"
                >
                  <img
                    src={project.images[0].url}
                    alt={project.images[0].caption}
                    className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-2.5">
                    <span className="text-[11px] text-white truncate font-medium flex items-center justify-between w-full">
                      <span className="truncate">{project.images[0].caption}</span>
                      <ZoomIn className="w-3.5 h-3.5 text-cyan-300 ml-1 shrink-0" />
                    </span>
                  </div>
                </div>
              )}

              {/* Summary */}
              <p className="text-xs text-slate-600 font-normal leading-relaxed line-clamp-3 mb-4">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-100 text-slate-700 border border-slate-200 font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono text-slate-500 font-medium">
                    +{project.technologies.length - 4}
                  </span>
                )}
              </div>
            </div>

            {/* Action Row */}
            <div className="pt-3 border-t border-slate-200 flex items-center justify-between gap-2">
              <button
                onClick={() => onOpenInspector(project)}
                className="bento-btn-primary py-1.5 px-3 text-xs flex items-center gap-1.5"
              >
                <span>Blueprint Spec</span>
                <ArrowRight className="w-3 h-3" />
              </button>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bento-btn-secondary py-1.5 px-2.5 text-xs"
                  title="View Repository"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-slate-700" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
