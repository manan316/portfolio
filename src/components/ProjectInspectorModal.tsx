import React, { useEffect } from 'react';
import { ProjectItem } from '../types/portfolio';
import { X, ZoomIn, Cpu, Calendar, Tag } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectInspectorModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenImage: (image: { url: string; caption: string }) => void;
}

export const ProjectInspectorModal: React.FC<ProjectInspectorModalProps> = ({
  project,
  onClose,
  onOpenImage,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
      <div
        className="bento-card bg-white border border-slate-200 w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-6 border-b border-slate-200 flex items-start justify-between gap-4 bg-slate-50/90">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-cyan-50 text-cyan-800 border border-cyan-200">
                {project.category}
              </span>
              {project.badge && (
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                  {project.badge}
                </span>
              )}
              <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1 font-medium">
                <Calendar className="w-3 h-3" /> {project.date}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="text-xs sm:text-sm text-cyan-700 font-semibold mt-1">
                {project.subtitle}
              </p>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-500 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors"
            title="Close Inspector (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Overview */}
          <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-2">
              System Overview & Problem Statement
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              {project.description}
            </p>
          </div>

          {/* Subsystem Specifications */}
          {project.architectureDetails && project.architectureDetails.length > 0 && (
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-700 font-bold flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-600" />
                Architectural Breakdown & Engineering Subsystems
              </h4>
              <div className="space-y-2.5">
                {project.architectureDetails.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                    <span className="w-5 h-5 rounded-full bg-cyan-100 text-cyan-800 border border-cyan-200 flex items-center justify-center shrink-0 text-[10px] font-mono mt-0.5 font-bold">
                      {idx + 1}
                    </span>
                    <span className="leading-snug">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Screenshot Gallery */}
          {project.images && project.images.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-700 font-bold">
                Telemetry & System Captures ({project.images.length})
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {project.images.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => onOpenImage(img)}
                    className="h-32 rounded-xl overflow-hidden border border-slate-200 relative cursor-pointer group/card bg-slate-100 shadow-xs"
                  >
                    <img
                      src={img.url}
                      alt={img.caption}
                      className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-200"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/card:opacity-100 flex items-center justify-center transition-opacity">
                      <span className="text-[10px] text-white bg-black/75 px-2 py-1 rounded-md flex items-center gap-1 font-medium">
                        <ZoomIn className="w-3 h-3" /> Zoom
                      </span>
                    </div>
                    <div className="absolute bottom-0 inset-x-0 bg-white/95 text-slate-900 p-1 text-[10px] truncate font-medium border-t border-slate-200">
                      {img.caption}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-700 font-bold mb-3 flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-cyan-600" /> Technologies & Tooling
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white text-slate-800 border border-slate-200 font-medium shadow-2xs"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50/90 flex items-center justify-between gap-3">
          <span className="text-[11px] font-mono text-slate-500 font-medium">
            SAVERA RESEARCH ARTIFACT // SPEC READY
          </span>
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bento-btn-secondary text-xs"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Codebase</span>
              </a>
            )}
            <button onClick={onClose} className="bento-btn-primary text-xs">
              Close Spec
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
