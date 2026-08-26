import React, { useState } from 'react';
import { experiences } from '../data/portfolioData';
import { SectorRibbon } from './SectorRibbon';
import { ImageModal } from './ImageModal';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Eye, 
  ShieldCheck,
  Cpu
} from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string; caption?: string } | null>(null);
  const containerRef = useScrollReveal<HTMLElement>();

  const nodeColors = [
    'border-[#0284C7] text-[#0284C7] bg-[#FAF7F2]',
    'border-[#7C3AED] text-[#7C3AED] bg-[#FAF7F2]',
    'border-[#2563EB] text-[#2563EB] bg-[#FAF7F2]',
    'border-[#DC2626] text-[#DC2626] bg-[#FAF7F2]',
    'border-[#16A34A] text-[#16A34A] bg-[#FAF7F2]'
  ];

  return (
    <section 
      id="experience" 
      ref={containerRef} 
      className="relative bg-parchment-canvas text-[#1C1917] border-t-2 border-[#DECFC0] overflow-hidden"
    >
      {/* Sector Ribbon */}
      <SectorRibbon sectorNumber="02" sectorName="PROFESSIONAL EXPERIENCE & RESEARCH TRACK" dark={false} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DECFC0] font-mono text-xs font-bold text-[#A45238] shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A45238] beacon-pulse shadow-[0_0_6px_#A45238]"></span>
            <span>// TRACK RECORD OF ENGINEERING & RESEARCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-[#1C1917]">
            Experience & Industrial Internships
          </h2>
          <p className="text-xs sm:text-sm text-[#78716C] font-sans">
            Hands-on development of production-grade embedded firmware, edge AI inference pipelines, and computer vision systems.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-[#D96B43] ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 space-y-12">
          
          {experiences.map((exp, index) => {
            const nodeStyle = nodeColors[index % nodeColors.length];
            return (
              <div key={exp.id} className="relative group reveal-on-scroll reveal-delay-150">
                
                {/* Timeline Node Icon */}
                <div className={`absolute -left-[35px] sm:-left-[51px] top-1.5 w-8 h-8 rounded-full border-2 flex items-center justify-center shadow-md group-hover:scale-125 transition-all duration-300 ${nodeStyle}`}>
                  <Briefcase className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
                </div>

                {/* Experience Card */}
                <div className="tactical-glass-card rounded-2xl p-6 sm:p-8 space-y-5 shadow-sm corner-brackets">
                  
                  {/* Header: Role, Company, Period */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-[#DECFC0] pb-4">
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#1C1917] font-sans group-hover:text-[#A45238] transition-colors">
                          {exp.role}
                        </h3>
                        <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-[#A45238]/10 text-[#A45238] font-bold border border-[#A45238]/30">
                          {exp.type}
                        </span>
                      </div>
                      <div className="text-base font-bold text-[#A45238] mt-1 flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-[#A45238]" />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end font-mono text-xs text-[#78716C] space-y-1">
                      <div className="flex items-center gap-1.5 text-[#1C1917] font-bold bg-[#EFE6D7] px-3 py-1 rounded-lg border border-[#DECFC0]">
                        <Calendar className="w-3.5 h-3.5 text-[#A45238]" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] text-[#8C7D6B]">
                        <MapPin className="w-3 h-3 text-[#E06D3B]" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Narrative Summary */}
                  <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed font-sans bg-[#EFE6D7] p-4 rounded-xl border border-[#DECFC0]">
                    {exp.description}
                  </p>

                  {/* Key Architectural Contributions */}
                  <div className="space-y-2.5">
                    <div className="font-mono text-xs font-bold text-[#1C1917] tracking-wide uppercase flex items-center gap-1.5">
                      <span className="text-[#A45238] font-black">&gt;</span>
                      <span>KEY ENGINEERING DELIVERABLES:</span>
                    </div>
                    <ul className="grid grid-cols-1 gap-2">
                      {exp.keyContributions.map((contrib, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#44403C] group/item">
                          <CheckCircle2 className="w-4 h-4 text-[#A45238] shrink-0 mt-0.5 group-hover/item:text-[#B85D3B] transition-colors" />
                          <span className="leading-relaxed group-hover/item:text-[#1C1917] transition-colors">{contrib}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology Badges */}
                  <div className="pt-2 flex flex-wrap items-center gap-1.5">
                    <span className="font-mono text-[10px] text-[#78716C] uppercase font-bold mr-1.5">
                      STACK:
                    </span>
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="font-mono text-[11px] px-2.5 py-1 rounded-lg bg-[#EFE6D7] hover:bg-[#E8DDD0] border border-[#DECFC0] hover:border-[#A45238] text-[#44403C] font-medium transition-all hover:scale-105 shadow-2xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Attached Credential / Document Preview Thumbnail */}
                  {exp.thumbnail && (
                    <div className="pt-3 border-t border-[#DECFC0] flex flex-wrap items-center justify-between gap-3">
                      <button
                        onClick={() => setSelectedImage({
                          url: exp.thumbnail!,
                          title: `${exp.company} — ${exp.thumbnailLabel || 'Credential'}`,
                          caption: `Official verification record for ${exp.role} at ${exp.company}`
                        })}
                        className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#EFE6D7] hover:bg-[#E8DDD0] border border-[#DECFC0] hover:border-[#A45238] text-xs font-mono text-[#1C1917] transition-all group/btn interactive-btn shadow-2xs"
                      >
                        <img
                          src={exp.thumbnail}
                          alt={exp.thumbnailLabel}
                          className="w-10 h-6 object-cover rounded-md border border-[#DECFC0] group-hover/btn:scale-110 transition-transform"
                        />
                        <span className="font-bold">{exp.thumbnailLabel}</span>
                        <Eye className="w-3.5 h-3.5 text-[#A45238] group-hover/btn:scale-125 transition-transform" />
                      </button>
                      
                      <span className="font-mono text-[10px] text-[#78716C] flex items-center gap-1.5 bg-[#EFE6D7] px-2.5 py-1 rounded-lg border border-[#DECFC0]">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#15803D]" />
                        <span>ID: EXP_0{index + 1} // VERIFIED RECORD</span>
                      </span>
                    </div>
                  )}

                </div>
              </div>
            );
          })}

        </div>

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
