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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#1a3055]/70 animate-fadeIn">
      <div
        className="woodblock-card woodblock-bar-vermilion bg-[#f5f0e1] border-3 border-[#1a3055] w-full max-w-4xl max-h-[90vh] flex flex-col shadow-woodblock-lg relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-6 border-b-2 border-[#1a3055]/20 flex items-start justify-between gap-4 bg-[#f5f0e1]">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="cartouche-label text-[10px]">
                {project.category}
              </span>
              {project.badge && (
                <span className="px-2 py-0.5 text-[10px] font-serif font-bold uppercase tracking-wider bg-[#c9a227] text-[#1a3055] border border-[#1a3055]">
                  {project.badge}
                </span>
              )}
              <span className="text-xs font-serif font-bold text-[#1a3055]/75 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#1a3055]" /> {project.date}
              </span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1a3055] tracking-tight">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="font-serif text-xs sm:text-sm text-[#2a5a8c] font-bold mt-1">
                {project.subtitle}
              </p>
            )}
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 border-2 border-[#1a3055] bg-[#d4553a] text-[#f5f0e1] flex items-center justify-center hover:opacity-90 transition-opacity shrink-0"
            title="Close Inspector (Esc)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 bg-[#f5f0e1]">
          {/* Overview */}
          <div className="bg-[#f5f0e1] border-2 border-[#1a3055] p-5 shadow-woodblock">
            <h4 className="font-serif text-xs uppercase tracking-widest text-[#1a3055] font-bold mb-2">
              System Overview & Problem Statement
            </h4>
            <p className="font-serif text-xs sm:text-sm text-[#1a3055]/85 leading-relaxed font-normal">
              {project.description}
            </p>
          </div>

          {/* Subsystem Specifications */}
          {project.architectureDetails && project.architectureDetails.length > 0 && (
            <div className="bg-[#f5f0e1] border-2 border-[#1a3055] p-5 space-y-3 shadow-woodblock">
              <h4 className="font-serif text-xs uppercase tracking-widest text-[#1a3055] font-bold flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#2a5a8c]" />
                Architectural Breakdown & Engineering Subsystems
              </h4>
              <div className="space-y-2.5">
                {project.architectureDetails.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#1a3055] font-medium">
                    <span className="w-5 h-5 bg-[#1a3055] text-[#f5f0e1] border border-[#1a3055] flex items-center justify-center shrink-0 text-[10px] font-serif font-bold mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="font-serif leading-snug text-[#1a3055]/90">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Screenshot Gallery */}
          {project.images && project.images.length > 0 && (
            <div className="space-y-3">
              <h4 className="font-serif text-xs uppercase tracking-widest text-[#1a3055] font-bold">
                Telemetry & System Captures ({project.images.length})
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {project.images.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => onOpenImage(img)}
                    className="h-32 border-3 border-[#1a3055] relative cursor-pointer group/card bg-[#f5f0e1] overflow-hidden shadow-woodblock"
                  >
                    <img
                      src={img.url}
                      alt={img.caption}
                      className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-200"
                    />
                    <div className="absolute inset-0 bg-[#1a3055]/60 opacity-0 group-hover/card:opacity-100 flex items-center justify-center transition-opacity">
                      <span className="text-[10px] text-[#f5f0e1] bg-[#1a3055] px-2 py-1 border border-[#f5f0e1] flex items-center gap-1 font-serif uppercase tracking-wider font-bold">
                        <ZoomIn className="w-3 h-3 text-[#c9a227]" /> Zoom
                      </span>
                    </div>
                    <div className="absolute bottom-0 inset-x-0 bg-[#1a3055] text-[#f5f0e1] p-1 text-[10px] truncate font-serif font-bold tracking-wider uppercase border-t border-[#1a3055]">
                      {img.caption}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div className="bg-[#f5f0e1] border-2 border-[#1a3055] p-5 shadow-woodblock">
            <h4 className="font-serif text-xs uppercase tracking-widest text-[#1a3055] font-bold mb-3 flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-[#1a3055]" /> Technologies & Tooling
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="woodblock-tag text-xs"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t-2 border-[#1a3055]/20 bg-[#f5f0e1] flex items-center justify-between gap-3">
          <span className="text-xs font-serif font-bold text-[#1a3055]/70 uppercase tracking-wider">
            SAVERA RESEARCH ARTIFACT // SPEC READY
          </span>
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="seal-btn-secondary text-xs flex items-center gap-1.5"
              >
                <GithubIcon className="w-3.5 h-3.5 text-[#1a3055]" />
                <span>Codebase</span>
              </a>
            )}
            <button onClick={onClose} className="seal-btn-primary text-xs">
              Close Spec
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
