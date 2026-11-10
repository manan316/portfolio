import React, { useState } from 'react';
import { experiences } from '../data/portfolioData';
import { SectorRibbon } from './SectorRibbon';
import { ImageModal } from './ImageModal';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Eye, 
  Cpu,
  Sparkles
} from 'lucide-react';
import { 
  MemphisCircle, 
  MemphisTriangle, 
  MemphisWave, 
  MemphisZigzag, 
  MemphisCardOrnaments,
  MemphisZigzagDivider 
} from './MemphisOrnament';

export const ExperienceSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string; caption?: string } | null>(null);

  const headerColors = ['bg-[#feca57]', 'bg-[#48dbfb]', 'bg-[#1dd1a1]'];

  return (
    <section id="experience" className="relative bg-[#fdf6e3] text-black overflow-hidden pt-4 pb-24">
      {/* Sector Ribbon */}
      <SectorRibbon sectorNumber="02" sectorName="PROFESSIONAL EXPERIENCE & RESEARCH TRACK" color="coral" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-16">
        
        {/* Section Heading */}
        <div className="mb-12">
          <div className="inline-block bg-[#48dbfb] text-black px-3.5 py-1 text-xs font-black uppercase tracking-wider border-3 border-black shadow-[3px_3px_0_#000000] tilt-pos-1 mb-2">
            // INDUSTRIAL TRACK RECORD
          </div>
          <h2 className="memphis-heading text-black">
            EXPERIENCE & RESEARCH RESIDENCIES
          </h2>
          <p className="font-sans font-bold text-base text-black/80 mt-1 max-w-xl">
            Hands-on development of production-grade embedded Linux firmware, NPU-accelerated edge AI, and wireless telemetry.
          </p>
        </div>

        {/* Experience Cards Stack */}
        <div className="space-y-10">
          {experiences.map((exp, idx) => {
            const headerBg = headerColors[idx % headerColors.length];
            const isTilted = idx % 2 === 0 ? 'tilt-neg-1' : 'tilt-pos-1';

            return (
              <div 
                key={exp.id}
                className={`memphis-card group ${isTilted} hover:tilt-0 transition-transform duration-150 p-0 overflow-hidden`}
              >
                {/* Chaos Ornaments */}
                <MemphisCardOrnaments variant={(idx % 4 + 1) as 1 | 2 | 3 | 4} />

                {/* Card Top Banner (Clashing Color) */}
                <div className={`${headerBg} p-5 sm:p-6 border-b-4 border-black flex flex-col md:flex-row md:items-center justify-between gap-4`}>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="bg-black text-white text-[11px] font-mono font-bold px-2 py-0.5 uppercase tracking-wider">
                        {exp.type}
                      </span>
                      <span className="memphis-badge bg-white text-black text-[11px] py-0.5">
                        <MapPin className="w-3 h-3 text-[#ff6b6b]" />
                        <span>{exp.location}</span>
                      </span>
                    </div>

                    <h3 className="font-sans font-black text-2xl sm:text-3xl text-black group-hover:text-[#ff6b6b] pop-swap">
                      {exp.role}
                    </h3>
                    <div className="font-sans font-black text-base sm:text-lg text-[#5f27cd] mt-0.5">
                      @ {exp.company}
                    </div>
                  </div>

                  <div className="self-start md:self-center font-mono font-bold text-xs sm:text-sm bg-white text-black px-3.5 py-1.5 border-3 border-black shadow-[3px_3px_0_#000000]">
                    <span className="text-[#ff6b6b] mr-1">✦</span>
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 space-y-6 bg-white">
                  
                  {/* Summary Paragraph */}
                  <p className="font-sans font-bold text-sm sm:text-base text-black/90 leading-relaxed border-l-4 border-l-[#ff6b6b] pl-4 py-1">
                    {exp.description}
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    
                    {/* Key Contributions */}
                    <div className="lg:col-span-8 space-y-2.5">
                      <div className="font-sans font-black text-xs uppercase tracking-wider text-[#5f27cd] flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-[#ff6b6b]" />
                        <span>KEY CONTRIBUTIONS & DELIVERABLES:</span>
                      </div>
                      <ul className="space-y-2 text-xs sm:text-sm font-bold text-black">
                        {exp.keyContributions.map((contrib, cIdx) => (
                          <li key={cIdx} className="flex items-start gap-2.5">
                            <span className="text-[#ff6b6b] font-black select-none text-base leading-none">■</span>
                            <span className="leading-snug">{contrib}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Certificate Thumbnail Preview (If available) */}
                    {exp.thumbnail && (
                      <div className="lg:col-span-4 flex flex-col items-center sm:items-start lg:items-end">
                        <div 
                          onClick={() => setSelectedImage({
                            url: exp.thumbnail!,
                            title: exp.thumbnailLabel || exp.company,
                            caption: `${exp.role} — ${exp.company} Official Credential`
                          })}
                          className="group/thumb cursor-pointer border-4 border-black p-1.5 bg-[#fdf6e3] shadow-memphis hover:shadow-memphis-lg hover:-translate-y-1 transition-all duration-150 relative select-none w-full max-w-[260px]"
                        >
                          <div className="w-full h-36 border-2 border-black overflow-hidden bg-white relative">
                            <img
                              src={exp.thumbnail}
                              alt={exp.thumbnailLabel || exp.company}
                              className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-150 flex items-center justify-center">
                              <span className="bg-[#feca57] text-black text-xs font-black uppercase px-2.5 py-1 border-2 border-black shadow-[2px_2px_0_#000000] flex items-center gap-1">
                                <Eye className="w-3.5 h-3.5" />
                                <span>VIEW</span>
                              </span>
                            </div>
                          </div>
                          <div className="mt-2 text-center font-mono font-bold text-[11px] text-black truncate uppercase">
                            [ {exp.thumbnailLabel || "CREDENTIAL PREVIEW"} ]
                          </div>
                        </div>
                      </div>
                    )}

                  </div>

                  {/* Skills Grid */}
                  <div className="pt-4 border-t-3 border-black">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs font-bold text-[#5f27cd] mr-1 uppercase">
                        SKILLS:
                      </span>
                      {exp.skills.map((skill, sIdx) => (
                        <span 
                          key={sIdx}
                          className="memphis-badge bg-[#fdf6e3] text-black hover:bg-[#ff6b6b] hover:text-white transition-colors duration-150"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Section Bottom Zigzag Divider */}
        <MemphisZigzagDivider color="blue" className="mt-16" />

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          imageUrl={selectedImage.url}
          title={selectedImage.title}
          caption={selectedImage.caption}
        />
      )}
    </section>
  );
};
