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
      className="relative bg-cyber-canvas text-[#F1F5F9] border-t-2 border-[#1E263D]/80 overflow-hidden"
    >
      {/* Sector Ribbon */}
      <SectorRibbon sectorNumber="04" sectorName="SCIENTIFIC RESEARCH & APPLIED SIGNAL COMPUTING" dark={true} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-24">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-3 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F121E]/80 backdrop-blur-md border border-[#00F0FF]/30 font-mono text-xs font-bold text-[#00F0FF] shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] beacon-pulse shadow-[0_0_8px_#00FF9D]"></span>
            <span>// INTERDISCIPLINARY SCIENTIFIC INVESTIGATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-[#F1F5F9]">
            Research & Publications Pipeline
          </h2>
          <p className="text-xs sm:text-sm text-[#94A3B8] font-sans">
            Investigating high-dimensional temporal signal classification, low-power neural processing unit acceleration, and multispectral satellite semantic segmentation.
          </p>
        </div>

        {/* Research Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {researchWork.map((item, idx) => (
            <div
              key={item.id}
              className={`tactical-glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-5 reveal-on-scroll reveal-delay-${(idx + 1) * 150} corner-brackets shadow-sm`}
            >
              <div className="space-y-4">
                
                {/* Domain Pill & Institution */}
                <div className="flex items-start justify-between gap-2 pb-3 border-b border-white/[0.08]">
                  <div className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold px-3 py-1 rounded-xl bg-[#00F0FF]/10 text-[#00F0FF] uppercase border border-[#00F0FF]/30 shadow-xs">
                    <Brain className="w-3.5 h-3.5 text-[#00F0FF]" />
                    <span>{item.domain}</span>
                  </div>
                  <span className="font-mono text-[10px] text-[#64748B] font-semibold">
                    RES_0{idx + 1}
                  </span>
                </div>

                {/* Title & Focus */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-sans text-[#F1F5F9] leading-snug group-hover:text-[#00F0FF] transition-colors">
                    {item.title}
                  </h3>
                  <div className="font-mono text-xs font-semibold text-[#38BDF8] mt-2 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-[#00FF9D]" />
                    <span>{item.focus}</span>
                  </div>
                  {item.institutions && (
                    <div className="font-mono text-[11px] text-[#FFB800] mt-1 font-semibold">
                      Affiliation: {item.institutions}
                    </div>
                  )}
                </div>

                {/* Summary - Frosted Inset */}
                <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed font-sans glass-inset p-4.5 rounded-2xl">
                  {item.description}
                </p>

                {/* Key Innovations */}
                <div className="space-y-2 glass-inset p-4.5 rounded-2xl">
                  <div className="font-mono text-[10px] font-bold text-[#00F0FF] uppercase tracking-wider flex items-center gap-1.5">
                    <FileText className="w-3 h-3 text-[#00F0FF]" />
                    <span>KEY METHODOLOGICAL ADVANCES:</span>
                  </div>
                  <ul className="space-y-2 text-xs text-[#CBD5E1]">
                    {item.keyInnovations.map((innov, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2.5 group/item">
                        <CheckCircle className="w-3.5 h-3.5 text-[#00FF9D] shrink-0 mt-0.5 group-hover/item:text-[#00F0FF] transition-colors" />
                        <span className="leading-relaxed group-hover/item:text-white transition-colors">{innov}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Applied Frameworks */}
              <div className="pt-4 border-t border-white/[0.08] space-y-2">
                <div className="font-mono text-[10px] text-[#64748B] uppercase font-bold flex items-center gap-1.5">
                  <Cpu className="w-3 h-3 text-[#64748B]" />
                  <span>APPLIED FRAMEWORKS:</span>
                </div>
                <div className="flex flex-wrap items-center gap-1.5">
                  {item.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-mono text-[10px] px-2.5 py-1 rounded-xl glass-pill text-[#CBD5E1] font-medium"
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
