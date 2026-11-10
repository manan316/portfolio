import React, { useEffect } from 'react';
import { ProjectItem } from '../types/portfolio';
import { X, ExternalLink, ZoomIn, CheckCircle2, Cpu, Calendar, Tag } from 'lucide-react';
import { GithubIcon } from './Icons';
import { MemphisCardOrnaments } from './MemphisOrnament';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div
        className="bg-paper border-4 border-black w-full max-w-4xl max-h-[92vh] flex flex-col shadow-memphis-lg relative overflow-hidden group"
        onClick={(e) => e.stopPropagation()}
      >
        <MemphisCardOrnaments variant={4} />

        {/* Modal Header Bar */}
        <div className="bg-honey border-b-4 border-black p-4 sm:p-6 flex items-start justify-between gap-4 shrink-0">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-black text-white px-2.5 py-0.5 text-xs font-black uppercase tracking-wider">
                {project.category}
              </span>
              {project.badge && (
                <span className="bg-coral text-white border-2 border-black px-2 py-0.5 text-xs font-black uppercase">
                  {project.badge}
                </span>
              )}
              <span className="text-xs font-bold bg-white border-2 border-black px-2 py-0.5 flex items-center gap-1">
                <Calendar className="w-3 h-3" /> {project.date}
              </span>
            </div>
            <h3 className="text-xl sm:text-3xl font-black text-black leading-tight">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="text-xs sm:text-sm font-bold text-gray-800 mt-1">
                {project.subtitle}
              </p>
            )}
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 bg-coral text-white border-3 border-black flex items-center justify-center font-black hover:bg-black hover:text-white transition-colors shrink-0 shadow-memphis-sm active:translate-x-1 active:translate-y-1"
            title="Close Inspector (Esc)"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-8 overflow-y-auto space-y-6 flex-1">
          {/* Summary */}
          <div className="bg-white border-4 border-black p-5 shadow-memphis-sm">
            <h4 className="text-xs font-black uppercase tracking-widest text-black mb-2 pb-1 border-b-2 border-black">
              System Overview & Problem Statement
            </h4>
            <p className="text-xs sm:text-sm font-bold text-black leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Architecture Details */}
          {project.architectureDetails && project.architectureDetails.length > 0 && (
            <div className="bg-white border-4 border-black p-5 shadow-memphis-sm space-y-3">
              <h4 className="text-xs font-black uppercase tracking-widest text-black pb-1 border-b-2 border-black flex items-center gap-2">
                <Cpu className="w-4 h-4 text-electric-blue" />
                Architectural Breakdown & Engineering Subsystems
              </h4>
              <div className="space-y-2.5">
                {project.architectureDetails.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-bold text-black">
                    <span className="bg-electric-blue text-black border-2 border-black w-5 h-5 flex items-center justify-center shrink-0 text-[10px] font-black mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-snug">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Screenshots Gallery */}
          {project.images && project.images.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs font-black uppercase tracking-widest text-black">
                Telemetry & System Captures ({project.images.length})
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {project.images.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => onOpenImage(img)}
                    className="bg-white border-3 border-black p-2 cursor-pointer hover:bg-honey transition-colors group/card shadow-memphis-sm"
                  >
                    <div className="h-32 border-2 border-black overflow-hidden relative">
                      <img
                        src={img.url}
                        alt={img.caption}
                        className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-200"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/card:opacity-100 flex items-center justify-center transition-opacity">
                        <span className="bg-white text-black px-2 py-0.5 text-[10px] font-black border-2 border-black flex items-center gap-1">
                          <ZoomIn className="w-3 h-3" /> Zoom
                        </span>
                      </div>
                    </div>
                    <p className="text-[10px] font-bold text-black mt-1.5 line-clamp-2 px-1">
                      {img.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Tag Array */}
          <div className="bg-white border-4 border-black p-5 shadow-memphis-sm">
            <h4 className="text-xs font-black uppercase tracking-widest text-black mb-3 pb-1 border-b-2 border-black flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5" /> Technologies & Tooling
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="bg-paper hover:bg-honey text-black border-2 border-black px-2.5 py-1 text-xs font-black"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Bar */}
        <div className="bg-paper border-t-4 border-black p-4 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <span className="text-xs font-black uppercase tracking-wider text-black">
            SAVERA RESEARCH ARTIFACT // INSPECTION COMPLETE
          </span>
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="memphis-btn-honey px-4 py-2 text-xs flex items-center gap-1.5"
              >
                <GithubIcon className="w-4 h-4" /> Open Source Code
              </a>
            )}
            <button onClick={onClose} className="memphis-btn px-4 py-2 text-xs">
              Close Spec
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
