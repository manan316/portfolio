import React, { useEffect } from 'react';
import { ProjectItem } from '../types/portfolio';
import { X, ZoomIn, ArrowUpRight } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#0a0a0a]/85 animate-fadeIn">
      <div
        className="bg-[#fafaf8] border border-[#0a0a0a] w-full max-w-4xl max-h-[90vh] flex flex-col relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-6 sm:p-8 border-b border-[#0a0a0a]/15 flex items-start justify-between gap-4 bg-[#fafaf8]">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] tracking-[0.2em] uppercase text-[#71717a]">
              <span className="text-[#ff4d00] font-medium">{project.category}</span>
              {project.badge && <span>· {project.badge}</span>}
              <span>· {project.date}</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-[#0a0a0a] uppercase tracking-[-0.03em] leading-tight">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="font-mono text-xs text-[#ff4d00] tracking-[0.1em] uppercase">
                {project.subtitle}
              </p>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#71717a] hover:text-[#0a0a0a] border border-[#0a0a0a]/15 hover:border-[#0a0a0a] transition-colors shrink-0"
            title="Close Inspector (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 bg-[#fafaf8]">
          {/* Overview */}
          <div className="p-6 border border-[#0a0a0a]/15 space-y-2">
            <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#ff4d00]">
              SYSTEM OVERVIEW & PROBLEM STATEMENT
            </div>
            <p className="text-base text-[#0a0a0a] leading-relaxed font-normal">
              {project.description}
            </p>
          </div>

          {/* Subsystem Specifications */}
          {project.architectureDetails && project.architectureDetails.length > 0 && (
            <div className="p-6 border border-[#0a0a0a]/15 space-y-4">
              <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#71717a]">
                ARCHITECTURAL BREAKDOWN & SUBSYSTEMS
              </div>
              <div className="space-y-3 font-mono text-xs text-[#0a0a0a] tracking-[0.05em]">
                {project.architectureDetails.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-[#ff4d00] font-bold">
                      [{String(idx + 1).padStart(2, '0')}]
                    </span>
                    <span className="leading-snug">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Screenshot Gallery */}
          {project.images && project.images.length > 0 && (
            <div className="space-y-4">
              <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#71717a]">
                TELEMETRY & CAPTURES ({project.images.length})
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {project.images.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => onOpenImage(img)}
                    className="h-36 bg-[#e4e4e7] overflow-hidden cursor-pointer group relative"
                  >
                    <img
                      src={img.url}
                      alt={img.caption}
                      className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-200"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                      <span className="text-[10px] text-white font-mono uppercase tracking-[0.15em] flex items-center gap-1">
                        <ZoomIn className="w-3 h-3 text-[#ff4d00]" /> ZOOM
                      </span>
                    </div>
                    <div className="absolute bottom-0 inset-x-0 bg-[#0a0a0a] text-white p-1 text-[10px] truncate font-mono uppercase tracking-[0.1em]">
                      {img.caption}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div className="space-y-3">
            <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#71717a]">
              ENGINEERING TOOLCHAIN
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span key={t} className="type-tag text-xs">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-[#0a0a0a]/15 bg-[#fafaf8] flex flex-wrap items-center justify-between gap-4">
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#71717a]">
            SAVERA ARTIFACT // SPECIFICATION COMPLETE
          </span>
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-xs py-2.5 px-4"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>REPO</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
            <button onClick={onClose} className="btn-orange text-xs py-2.5 px-4">
              CLOSE SPEC
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
