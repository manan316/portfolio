import React from 'react';
import { researchWork } from '../data/portfolioData';
import { SectorRibbon } from './SectorRibbon';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Brain, CheckCircle, Compass, Cpu, FileText } from 'lucide-react';

export const ResearchSection: React.FC = () => {
  const containerRef = useScrollReveal<HTMLElement>();

  return (
    <section 
      id="research" 
      ref={containerRef} 
      className="relative bg-parchment-canvas text-[#1C1917] border-t-2 border-[#DECFC0] overflow-hidden"
    >
      {/* Sector Ribbon */}
      <SectorRibbon sectorNumber="04" sectorName="SCIENTIFIC RESEARCH & APPLIED SIGNAL COMPUTING" dark={false} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-24">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-3 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DECFC0] font-mono text-xs font-bold text-[#A45238] shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A45238] beacon-pulse shadow-[0_0_6px_#A45238]"></span>
            <span>// INTERDISCIPLINARY SCIENTIFIC INVESTIGATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-[#1C1917]">
            Research & Publications Pipeline
          </h2>
          <p className="text-xs sm:text-sm text-[#78716C] font-sans">
            Investigating high-dimensional temporal signal classification, low-power neural processing unit acceleration, and multispectral satellite semantic segmentation.
          </p>
        </div>

        {/* Research Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {researchWork.map((item, idx) => (
            <div
              key={item.id}
              className={`tactical-glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-5 reveal-on-scroll reveal-delay-${(idx + 1) * 150} corner-brackets shadow-sm`}
            >
              <div className="space-y-4">
                
                {/* Domain Pill & Institution */}
                <div className="flex items-start justify-between gap-2 pb-3 border-b border-[#DECFC0]">
                  <div className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold px-3 py-1 rounded-lg bg-[#EFE6D7] text-[#A45238] uppercase border border-[#DECFC0] shadow-2xs">
                    <Brain className="w-3.5 h-3.5 text-[#A45238]" />
                    <span>{item.domain}</span>
                  </div>
                  <span className="font-mono text-[10px] text-[#8C7D6B] font-semibold">
                    RES_0{idx + 1}
                  </span>
                </div>

                {/* Title & Focus */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-sans text-[#1C1917] leading-snug group-hover:text-[#A45238] transition-colors">
                    {item.title}
                  </h3>
                  <div className="font-mono text-xs font-semibold text-[#A45238] mt-2 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-[#A45238]" />
                    <span>{item.focus}</span>
                  </div>
                  {item.institutions && (
                    <div className="font-mono text-[11px] text-[#B45309] mt-1 font-semibold">
                      Affiliation: {item.institutions}
                    </div>
                  )}
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed font-sans bg-[#EFE6D7] p-4 rounded-xl border border-[#DECFC0]">
                  {item.description}
                </p>

                {/* Key Innovations */}
                <div className="space-y-2 bg-[#EFE6D7] p-4 rounded-xl border border-[#DECFC0]">
                  <div className="font-mono text-[10px] font-bold text-[#A45238] uppercase tracking-wider flex items-center gap-1.5">
                    <FileText className="w-3 h-3 text-[#A45238]" />
                    <span>KEY METHODOLOGICAL ADVANCES:</span>
                  </div>
                  <ul className="space-y-2 text-xs text-[#44403C]">
                    {item.keyInnovations.map((innov, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2.5 group/item">
                        <CheckCircle className="w-3.5 h-3.5 text-[#15803D] shrink-0 mt-0.5" />
                        <span className="leading-relaxed group-hover/item:text-[#1C1917] transition-colors">{innov}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Applied Frameworks */}
              <div className="pt-4 border-t border-[#DECFC0] space-y-2">
                <div className="font-mono text-[10px] text-[#78716C] uppercase font-bold flex items-center gap-1.5">
                  <Cpu className="w-3 h-3 text-[#78716C]" />
                  <span>APPLIED FRAMEWORKS:</span>
                </div>
                <div className="flex flex-wrap items-center gap-1.5">
                  {item.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-mono text-[10px] px-2.5 py-1 rounded-md bg-[#EFE6D7] hover:bg-[#E8DDD0] border border-[#DECFC0] hover:border-[#A45238] text-[#574E45] transition-all hover:scale-105 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
