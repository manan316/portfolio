import React from 'react';
import { ProjectItem } from '../types/portfolio';
import { ArrowRight, ArrowUpRight, ZoomIn } from 'lucide-react';
import { GithubIcon } from './Icons';

interface FlagshipCaseStudiesProps {
  projects: ProjectItem[];
  onOpenImage: (image: { url: string; caption: string }) => void;
  onOpenInspector: (project: ProjectItem) => void;
}

export const FlagshipCaseStudies: React.FC<FlagshipCaseStudiesProps> = ({
  projects,
  onOpenImage,
  onOpenInspector,
}) => {
  const ojasews = projects.find((p) => p.id === 'ojasews') || projects[0];
  const geochange = projects.find((p) => p.id === 'geochange-ai') || projects[1];
  const neuroview = projects.find((p) => p.id === 'neuroview') || projects[2];
  const slipsense = projects.find((p) => p.id === 'slipsense') || projects[3];

  const flagships = [
    { item: ojasews, idx: '01', badge: 'SAVERA FLAGSHIP SYSTEM' },
    { item: geochange, idx: '02', badge: '1ST PRIZE / BEST PRESENTATION' },
    { item: neuroview, idx: '03', badge: 'SPATIAL TELEMETRY ARCHITECTURE' },
    { item: slipsense, idx: '04', badge: '14-BAND MULTISPECTRAL' }
  ];

  return (
    <section id="flagships" className="pt-24 sm:pt-32 lg:pt-40 px-4 sm:px-8 max-w-[1600px] mx-auto scroll-mt-24 hairline-divider">
      {/* Section Header */}
      <div className="pb-16 sm:pb-24">
        <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-[#71717a]">
          <span className="w-2 h-2 bg-[#ff4d00] inline-block"></span>
          <span>02 // FLAGSHIP BLUEPRINTS</span>
          <span>· ARCHITECTURAL INNOVATIONS</span>
        </div>
        <h2 className="fluid-heading text-[#0a0a0a] uppercase tracking-[-0.04em] leading-[0.88] font-black break-words mt-4 mb-6">
          SYSTEM ARCHITECTURES.
        </h2>
        <p className="text-lg sm:text-xl text-[#0a0a0a] font-normal leading-[1.5] max-w-3xl">
          Deep-tech platforms developed under Project SAVERA, international hackathon winners, and high-throughput spatial telemetry architectures.
        </p>
      </div>

      {/* Flagship Case Studies Divided by 1px Hairlines */}
      <div className="divide-y divide-[#0a0a0a]/15">
        {flagships.map(({ item, idx, badge }) => {
          if (!item) return null;
          return (
            <article key={item.id} className="py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              {/* Left Column (7 cols): Typographic Content */}
              <div className="lg:col-span-7 space-y-6">
                {/* Monospace Metadata Row */}
                <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-[#71717a]">
                  <div className="flex items-center gap-3">
                    <span className="text-[#0a0a0a] font-medium">INDEX {idx} / 04</span>
                    <span className="text-[#ff4d00]">· {badge}</span>
                  </div>
                  <span>{item.date}</span>
                </div>

                {/* Massive Title */}
                <div>
                  <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0a0a0a] uppercase tracking-[-0.03em] leading-[0.95] break-words">
                    {item.title.split('—')[0]}
                  </h3>
                  {item.subtitle && (
                    <p className="font-mono text-xs sm:text-sm text-[#ff4d00] tracking-[0.1em] uppercase mt-2">
                      {item.subtitle}
                    </p>
                  )}
                </div>

                {/* Narrative Description */}
                <p className="text-base sm:text-lg text-[#0a0a0a] font-normal leading-[1.5]">
                  {item.description}
                </p>

                {/* Architectural Subsystems */}
                {item.architectureDetails && item.architectureDetails.length > 0 && (
                  <div className="space-y-2 pt-2">
                    <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#71717a]">
                      KEY SUBSYSTEMS & METRICS:
                    </div>
                    <ul className="space-y-2 font-mono text-xs text-[#0a0a0a] tracking-[0.05em]">
                      {item.architectureDetails.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5">
                          <span className="text-[#ff4d00] font-bold">—</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.technologies.map((tech) => (
                    <span key={tech} className="type-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-4">
                  <button
                    onClick={() => onOpenInspector(item)}
                    className="btn-orange text-xs"
                  >
                    <span>VIEW SPECIFICATION</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {item.githubUrl && (
                    <a
                      href={item.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost text-xs"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>SOURCE REPO</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column (5 cols): Unbordered Receding Screen Capture */}
              <div className="lg:col-span-5">
                {item.images && item.images.length > 0 && (
                  <div className="space-y-3">
                    <div
                      onClick={() => onOpenImage(item.images![0])}
                      className="w-full h-64 sm:h-80 bg-[#e4e4e7] overflow-hidden cursor-pointer group relative"
                    >
                      <img
                        src={item.images[0].url}
                        alt={item.images[0].caption}
                        className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                        <span className="px-3 py-1.5 bg-[#ff4d00] text-white font-mono text-[11px] tracking-[0.2em] uppercase flex items-center gap-1.5">
                          <ZoomIn className="w-3.5 h-3.5" /> ENLARGE
                        </span>
                      </div>
                    </div>
                    <div className="font-mono text-[11px] tracking-[0.15em] uppercase text-[#71717a] flex items-center justify-between">
                      <span className="truncate">{item.images[0].caption}</span>
                      <span className="text-[#0a0a0a] ml-2 shrink-0">FIG {idx}.1</span>
                    </div>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
