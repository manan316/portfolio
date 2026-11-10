import React from 'react';
import { researchWork } from '../data/portfolioData';
import { SectorRibbon } from './SectorRibbon';
import { Brain, CheckCircle, Compass, Cpu, FileText, Sparkles } from 'lucide-react';
import { 
  MemphisCircle, 
  MemphisTriangle, 
  MemphisWave, 
  MemphisZigzag, 
  MemphisCardOrnaments,
  MemphisZigzagDivider 
} from './MemphisOrnament';

export const ResearchSection: React.FC = () => {
  const headerColors = ['bg-[#ff6b6b]', 'bg-[#48dbfb]', 'bg-[#1dd1a1]'];

  return (
    <section id="research" className="relative bg-[#fdf6e3] text-black overflow-hidden pt-4 pb-24">
      {/* Sector Ribbon */}
      <SectorRibbon sectorNumber="04" sectorName="SCIENTIFIC RESEARCH & SIGNAL COMPUTING" color="blue" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-16">
        
        {/* Section Heading */}
        <div className="mb-12">
          <div className="inline-block bg-[#ff9ff3] text-black px-3.5 py-1 text-xs font-black uppercase tracking-wider border-3 border-black shadow-[3px_3px_0_#000000] tilt-pos-1 mb-2">
            // INTERDISCIPLINARY INVESTIGATION
          </div>
          <h2 className="memphis-heading text-black">
            RESEARCH & PUBLICATIONS PIPELINE
          </h2>
          <p className="font-sans font-bold text-base text-black/80 mt-1 max-w-2xl">
            Investigating high-dimensional temporal signal classification, low-power NPU acceleration, and multispectral remote sensing.
          </p>
        </div>

        {/* Research Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchWork.map((item, idx) => {
            const tilt = idx === 0 ? 'tilt-neg-1' : idx === 1 ? 'tilt-pos-1' : 'tilt-neg-2';
            const badgeBg = headerColors[idx % headerColors.length];
            const badgeTextColor = badgeBg === 'bg-[#ff6b6b]' ? 'text-white' : 'text-black';

            return (
              <div
                key={item.id}
                className={`memphis-card group ${tilt} hover:tilt-0 transition-transform duration-150 flex flex-col justify-between`}
              >
                {/* Chaos Ornaments */}
                <MemphisCardOrnaments variant={(idx % 4 + 1) as 1 | 2 | 3 | 4} />

                <div className="space-y-4">
                  
                  {/* Domain Badge & Ref */}
                  <div className="flex items-start justify-between gap-2 pb-3 border-b-3 border-black">
                    <span className={`memphis-badge ${badgeBg} ${badgeTextColor}`}>
                      <Brain className="w-3.5 h-3.5" />
                      <span>{item.domain}</span>
                    </span>
                    <span className="font-mono text-xs font-bold text-black bg-[#fdf6e3] px-2 py-0.5 border-2 border-black">
                      RES_0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Focus */}
                  <div>
                    <h3 className="font-sans font-black text-xl text-black group-hover:text-[#ff6b6b] pop-swap leading-snug">
                      {item.title}
                    </h3>
                    <div className="font-sans font-bold text-xs text-[#5f27cd] mt-2 flex items-center gap-1.5">
                      <span className="text-[#ff6b6b]">▶</span>
                      <span>Focus: {item.focus}</span>
                    </div>
                  </div>

                  {/* Institution if available */}
                  {item.institutions && (
                    <div className="font-mono text-xs font-bold text-black bg-[#feca57] p-2 border-2 border-black">
                      Lab / Host: <strong>{item.institutions}</strong>
                    </div>
                  )}

                  {/* Description */}
                  <p className="font-sans font-bold text-xs sm:text-sm text-black/90 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Key Innovations */}
                  <div className="p-3 bg-[#fdf6e3] border-3 border-black space-y-2">
                    <div className="font-sans font-black text-[11px] uppercase tracking-wider text-[#ff6b6b] flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-[#feca57]" />
                      <span>KEY INNOVATIONS:</span>
                    </div>
                    <ul className="space-y-1.5 text-xs font-bold text-black">
                      {item.keyInnovations.map((innov, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-2">
                          <span className="text-[#1dd1a1] font-black select-none text-xs">■</span>
                          <span>{innov}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Tech Pills Footer */}
                <div className="pt-4 border-t-3 border-black mt-4">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {item.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="memphis-badge bg-white text-black text-[10px] py-0.5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Section Bottom Zigzag Divider */}
        <MemphisZigzagDivider color="mint" className="mt-16" />

      </div>
    </section>
  );
};
