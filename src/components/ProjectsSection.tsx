import React, { useState } from 'react';
import { ProjectItem } from '../types/portfolio';
import { ExternalLink, ZoomIn, Sparkles, Filter, Code2, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { MemphisCardOrnaments } from './MemphisOrnament';

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
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="memphis-badge bg-mint text-black border-4 border-black px-4 py-1.5 text-xs font-black tracking-widest uppercase">
            [05 // ENGINEERING ARCHIVE]
          </span>
          <span className="bg-honey text-black border-3 border-black px-3 py-1 text-xs font-black tracking-wider uppercase">
            FULL SYSTEM REPERTOIRE ({projects.length} BUILDS)
          </span>
        </div>
        <h2 className="memphis-heading text-black pop-swap mb-4">
          SYSTEMS & ENGINEERING ARCHIVE
        </h2>
        <p className="text-black text-base sm:text-lg font-bold max-w-3xl leading-relaxed">
          Comprehensive catalog of all production pipelines, edge firmware, neural network architectures, and multi-language scientific tools built by Manan Sharma.
        </p>
      </div>

      {/* Filter Category Pills */}
      <div className="flex flex-wrap gap-2.5 mb-10 pb-4 border-b-4 border-black">
        {filterCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedFilter(cat)}
            className={`memphis-tab-btn text-xs py-2 px-3 sm:px-4 ${
              selectedFilter === cat ? 'active' : ''
            }`}
          >
            {cat} {cat === 'All' ? `(${projects.length})` : ''}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        {filteredProjects.map((project, idx) => (
          <div
            key={project.id}
            className="memphis-card bg-paper p-6 relative flex flex-col justify-between group overflow-hidden"
          >
            <MemphisCardOrnaments variant={(((idx % 4) + 1) as 1 | 2 | 3 | 4)} />

            <div>
              {/* Card Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="bg-black text-white px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider">
                  {project.category}
                </span>
                <span className="text-xs font-bold text-gray-700 bg-white border-2 border-black px-1.5 py-0.5">
                  {project.date}
                </span>
              </div>

              {/* Title & Pop Swap */}
              <h3 className="text-xl font-black text-black leading-tight pop-swap mb-2">
                {project.title}
              </h3>

              {project.badge && (
                <div className="mb-3">
                  <span className="bg-honey text-black border-2 border-black px-2 py-0.5 text-[10px] font-black uppercase inline-block shadow-[1px_1px_0_#000]">
                    {project.badge}
                  </span>
                </div>
              )}

              {/* Thumbnail Image if available */}
              {project.images && project.images[0] && (
                <div
                  onClick={() => onOpenImage(project.images![0])}
                  className="mb-4 h-40 border-3 border-black overflow-hidden relative cursor-pointer group/thumb bg-white shadow-memphis-sm"
                >
                  <img
                    src={project.images[0].url}
                    alt={project.images[0].caption}
                    className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/thumb:opacity-100 flex items-center justify-center transition-opacity">
                    <span className="bg-white text-black px-2 py-1 text-xs font-black border-2 border-black flex items-center gap-1">
                      <ZoomIn className="w-3.5 h-3.5" /> Enlarge
                    </span>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 bg-black/75 text-white p-1 text-[10px] font-bold truncate">
                    {project.images[0].caption}
                  </div>
                </div>
              )}

              {/* Summary Description */}
              <p className="text-xs font-bold text-black leading-relaxed line-clamp-3 mb-4">
                {project.description}
              </p>

              {/* Technologies Badges */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.technologies.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="bg-white text-black border-2 border-black px-2 py-0.5 text-[10px] font-black"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 5 && (
                  <span className="bg-paper text-gray-700 border-2 border-black px-1.5 py-0.5 text-[10px] font-bold">
                    +{project.technologies.length - 5}
                  </span>
                )}
              </div>
            </div>

            {/* Card Footer Actions */}
            <div className="pt-4 border-t-3 border-black flex items-center justify-between gap-2 mt-auto">
              <button
                onClick={() => onOpenInspector(project)}
                className="memphis-btn-honey text-xs py-2 px-3 flex items-center gap-1.5 flex-1 justify-center"
              >
                <Sparkles className="w-3.5 h-3.5" /> Deep Dive
              </button>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="memphis-btn bg-white hover:bg-black hover:text-white text-black border-3 border-black p-2 flex items-center justify-center shrink-0"
                  title="View GitHub Repository"
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
