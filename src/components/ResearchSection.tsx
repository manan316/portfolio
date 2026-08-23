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
      className="relative bg-cyber-mesh text-[#F8FAFC] border-t-2 border-[#1E293B] overflow-hidden"
    >
      {/* Sector Ribbon */}
      <SectorRibbon sectorNumber="04" sectorName="SCIENTIFIC RESEARCH & COMPUTATIONAL NEUROSCIENCE" dark={true} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-24">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-3 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D131F] border border-[#1E293B] font-mono text-xs font-bold text-[#00E5FF] shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] beacon-pulse shadow-[0_0_6px_#00E5FF]"></span>
            <span>// INTERDISCIPLINARY SCIENTIFIC INVESTIGATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-white">
            Research & Publications Pipeline
          </h2>
          <p className="text-xs sm:text-sm text-[#94A3B8] font-sans">
            Investigating electrophysiological EEG signal classification, low-power neural processing unit acceleration, and satellite semantic segmentation.
          </p>
        </div>

        {/* Research Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {researchWork.map((item, idx) => (
            <div
              key={item.id}
              className={`tactical-glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-5 reveal-on-scroll reveal-delay-${(idx + 1) * 150} corner-brackets shadow-lg`}
            >
              <div className="space-y-4">
                
                {/* Domain Pill & Institution */}
                <div className="flex items-start justify-between gap-2 pb-3 border-b border-[#1E293B]">
                  <div className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold px-3 py-1 rounded-lg bg-[#06090E] text-[#00E5FF] uppercase border border-[#00E5FF]/30 shadow-xs">
                    <Brain className="w-3.5 h-3.5 text-[#00E5FF]" />
                    <span>{item.domain}</span>
                  </div>
                  <span className="font-mono text-[10px] text-[#64748B] font-semibold">
                    RES_0{idx + 1}
                  </span>
                </div>

                {/* Title & Focus */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-sans text-white leading-snug group-hover:text-[#00E5FF] transition-colors">
                    {item.title}
                  </h3>
                  <div className="font-mono text-xs font-semibold text-[#00E5FF] mt-2 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-[#00E5FF]" />
                    <span>{item.focus}</span>
                  </div>
                  {item.institutions && (
                    <div className="font-mono text-[11px] text-[#38BDF8] mt-1 font-semibold">
                      Affiliation: {item.institutions}
                    </div>
                  )}
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed font-sans bg-[#06090E]/60 p-4 rounded-xl border border-[#1E293B]">
                  {item.description}
                </p>

                {/* Key Innovations */}
                <div className="space-y-2 bg-[#06090E]/80 p-4 rounded-xl border border-[#1E293B]">
                  <div className="font-mono text-[10px] font-bold text-[#00E5FF] uppercase tracking-wider flex items-center gap-1.5">
                    <FileText className="w-3 h-3 text-[#00E5FF]" />
                    <span>KEY METHODOLOGICAL ADVANCES:</span>
                  </div>
                  <ul className="space-y-2 text-xs text-[#94A3B8]">
                    {item.keyInnovations.map((innov, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2.5 group/item">
                        <CheckCircle className="w-3.5 h-3.5 text-[#00E5FF] shrink-0 mt-0.5 group-hover/item:text-[#38BDF8] transition-colors" />
                        <span className="leading-relaxed group-hover/item:text-[#F8FAFC] transition-colors">{innov}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Applied Frameworks */}
              <div className="pt-4 border-t border-[#1E293B] space-y-2">
                <div className="font-mono text-[10px] text-[#64748B] uppercase font-bold flex items-center gap-1.5">
                  <Cpu className="w-3 h-3 text-[#64748B]" />
                  <span>APPLIED FRAMEWORKS:</span>
                </div>
                <div className="flex flex-wrap items-center gap-1.5">
                  {item.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-mono text-[10px] px-2.5 py-1 rounded-md bg-[#06090E] hover:bg-[#131C2E] border border-[#1E293B] hover:border-[#00E5FF] text-[#CBD5E1] transition-all hover:scale-105 font-medium"
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
