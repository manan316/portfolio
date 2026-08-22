import React from 'react';
import { researchWork } from '../data/portfolioData';
import { SectorRibbon } from './SectorRibbon';
import { Brain, CheckCircle } from 'lucide-react';

export const ResearchSection: React.FC = () => {
  return (
    <section id="research" className="relative bg-blueprint-grid text-[#181715] border-t-2 border-[#FF5722]">
      {/* Sector Ribbon */}
      <SectorRibbon sectorNumber="04" sectorName="SCIENTIFIC RESEARCH & COMPUTATIONAL NEUROSCIENCE" dark={true} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-14 sm:py-20">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
          <span className="font-mono text-xs font-bold text-[#FF5722] tracking-widest uppercase">
            // INTERDISCIPLINARY SCIENTIFIC INVESTIGATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-[#181715]">
            Research & Publications Pipeline
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B] font-sans">
            Investigating electrophysiological EEG signal classification, low-power neural processing unit acceleration, and satellite semantic segmentation.
          </p>
        </div>

        {/* Research Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {researchWork.map((item, idx) => (
            <div
              key={item.id}
              className="tactical-card rounded-xl p-6 sm:p-7 bg-white border border-[#E2DBD0] flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                
                {/* Domain Pill & Institution */}
                <div className="flex items-start justify-between gap-2">
                  <div className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold px-2.5 py-1 rounded bg-[#181715] text-[#F4EFE6] uppercase">
                    <Brain className="w-3 h-3 text-[#00E5FF]" />
                    <span>{item.domain}</span>
                  </div>
                  <span className="font-mono text-[10px] text-[#8899A6]">
                    RES_0{idx + 1}
                  </span>
                </div>

                {/* Title & Focus */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-sans text-[#181715] leading-snug">
                    {item.title}
                  </h3>
                  <div className="font-mono text-xs font-semibold text-[#FF5722] mt-1">
                    {item.focus}
                  </div>
                  {item.institutions && (
                    <div className="font-mono text-[11px] text-[#0088CC] mt-0.5">
                      Affiliation: {item.institutions}
                    </div>
                  )}
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-sans">
                  {item.description}
                </p>

                {/* Key Innovations */}
                <div className="space-y-2 bg-[#FAF7F0] p-3.5 rounded-lg border border-[#E2DBD0]">
                  <div className="font-mono text-[10px] font-bold text-[#181715] uppercase tracking-wider">
                    &gt; KEY METHODOLOGICAL ADVANCES:
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#334155]">
                    {item.keyInnovations.map((innov, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#00A9E0] shrink-0 mt-0.5" />
                        <span className="leading-tight">{innov}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Technologies */}
              <div className="pt-4 border-t border-[#E2DBD0] space-y-2">
                <div className="font-mono text-[10px] text-[#64748B] uppercase font-bold">
                  APPLIED FRAMEWORKS:
                </div>
                <div className="flex flex-wrap items-center gap-1.5">
                  {item.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#FAF7F0] border border-[#E2DBD0] text-[#334155]"
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
