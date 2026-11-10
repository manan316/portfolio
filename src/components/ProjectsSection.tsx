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
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="bento-badge text-cyan-400 bg-cyan-500/10 border-cyan-500/20">
            [04 // ENGINEERING ARCHIVE]
          </span>
          <span className="text-xs text-zinc-400 font-mono">
            {projects.length} PRODUCTION & RESEARCH BUILDS
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
          Complete Systems & Engineering Archive
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
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
                ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-zinc-950 font-bold shadow-md shadow-cyan-500/20'
                : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5'
            }`}
          >
            {cat} {cat === 'All' ? `(${projects.length})` : ''}
          </button>
        ))}
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bento-card p-5 flex flex-col justify-between bento-glow-cyan group"
          >
            <div>
              {/* Category & Date */}
              <div className="flex items-center justify-between text-xs mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-white/5 text-cyan-300 border border-cyan-500/20">
                  {project.category}
                </span>
                <span className="text-[11px] font-mono text-zinc-500">{project.date}</span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-1 tracking-tight leading-snug group-hover:text-cyan-200 transition-colors">
                {project.title}
              </h3>

              {project.badge && (
                <div className="mb-3">
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 inline-block">
                    {project.badge}
                  </span>
                </div>
              )}

              {/* Screenshot thumbnail */}
              {project.images && project.images[0] && (
                <div
                  onClick={() => onOpenImage(project.images![0])}
                  className="mb-3.5 h-36 rounded-xl overflow-hidden border border-white/10 relative cursor-pointer group/thumb bg-zinc-950 shadow-md"
                >
                  <img
                    src={project.images[0].url}
                    alt={project.images[0].caption}
                    className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex items-end p-2.5">
                    <span className="text-[11px] text-white truncate font-medium flex items-center justify-between w-full">
                      <span className="truncate">{project.images[0].caption}</span>
                      <ZoomIn className="w-3.5 h-3.5 text-cyan-400 ml-1 shrink-0" />
                    </span>
                  </div>
                </div>
              )}

              {/* Summary */}
              <p className="text-xs text-zinc-300 font-normal leading-relaxed line-clamp-3 mb-4">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/5 text-zinc-400 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono text-zinc-500">
                    +{project.technologies.length - 4}
                  </span>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
              <button
                onClick={() => onOpenInspector(project)}
                className="bento-btn-primary py-1.5 px-3 text-xs flex-1 justify-center"
              >
                <Sparkles className="w-3 h-3 text-zinc-950" />
                <span>Blueprint Spec</span>
              </button>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bento-btn-secondary p-1.5"
                  title="GitHub Repository"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-cyan-400" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
