import React, { useState } from 'react';
import { experiences } from '../data/portfolioData';
import { SectorRibbon } from './SectorRibbon';
import { ImageModal } from './ImageModal';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Eye
} from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string; caption?: string } | null>(null);

  return (
    <section id="experience" className="relative bg-blueprint-grid text-[#181715] border-t-2 border-[#FF5722]">
      {/* Sector Ribbon */}
      <SectorRibbon sectorNumber="02" sectorName="PROFESSIONAL EXPERIENCE & RESEARCH" dark={true} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="font-mono text-xs font-bold text-[#FF5722] tracking-widest uppercase">
            // TRACK RECORD OF ENGINEERING & RESEARCH
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-[#181715]">
            Experience & Internships
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B] font-sans">
            Hands-on development of production-grade embedded firmware, edge AI inference pipelines, and computer vision systems.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-[#D5CCBB] ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 space-y-12">
          
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative group">
              
              {/* Timeline Node Icon */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-8 h-8 rounded-full bg-[#181715] border-2 border-[#FF5722] flex items-center justify-center text-white shadow-md group-hover:scale-110 group-hover:bg-[#FF5722] transition-all">
                <Briefcase className="w-3.5 h-3.5" />
              </div>

              {/* Experience Card */}
              <div className="tactical-card rounded-xl p-6 sm:p-8 bg-white border border-[#E2DBD0] space-y-5">
                
                {/* Header: Role, Company, Period */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-[#E2DBD0] pb-4">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xl sm:text-2xl font-bold text-[#181715] font-sans">
                        {exp.role}
                      </h3>
                      <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-[#181715] text-[#F4EFE6] font-semibold">
                        {exp.type}
                      </span>
                    </div>
                    <div className="text-base font-semibold text-[#FF5722] mt-1">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end font-mono text-xs text-[#64748B] space-y-1">
                    <div className="flex items-center gap-1.5 text-[#181715] font-bold">
                      <Calendar className="w-3.5 h-3.5 text-[#FF5722]" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Narrative Summary */}
                <p className="text-xs sm:text-sm text-[#334155] leading-relaxed font-sans">
                  {exp.description}
                </p>

                {/* Key Architectural Contributions */}
                <div className="space-y-2.5">
                  <div className="font-mono text-xs font-bold text-[#181715] tracking-wide uppercase">
                    &gt; KEY ENGINEERING DELIVERABLES:
                  </div>
                  <ul className="grid grid-cols-1 gap-2">
                    {exp.keyContributions.map((contrib, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#475569]">
                        <CheckCircle2 className="w-4 h-4 text-[#00A9E0] shrink-0 mt-0.5" />
                        <span className="leading-snug">{contrib}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology Badges */}
                <div className="pt-2 flex flex-wrap items-center gap-1.5">
                  <span className="font-mono text-[10px] text-[#64748B] uppercase font-bold mr-2">
                    STACK:
                  </span>
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="font-mono text-[11px] px-2.5 py-1 rounded bg-[#FAF7F0] border border-[#E2DBD0] text-[#334155] font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Attached Credential / Document Preview Thumbnail */}
                {exp.thumbnail && (
                  <div className="pt-3 border-t border-[#E2DBD0] flex items-center justify-between">
                    <button
                      onClick={() => setSelectedImage({
                        url: exp.thumbnail!,
                        title: `${exp.company} — ${exp.thumbnailLabel || 'Credential'}`,
                        caption: `Official verification record for ${exp.role} at ${exp.company}`
                      })}
                      className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-[#FAF7F0] hover:bg-[#F4EFE6] border border-[#D5CCBB] text-xs font-mono text-[#181715] transition-all group"
                    >
                      <img
                        src={exp.thumbnail}
                        alt={exp.thumbnailLabel}
                        className="w-10 h-6 object-cover rounded border border-[#C8BFB0] group-hover:scale-105 transition-transform"
                      />
                      <span className="font-semibold">{exp.thumbnailLabel}</span>
                      <Eye className="w-3.5 h-3.5 text-[#FF5722]" />
                    </button>
                    
                    <span className="font-mono text-[10px] text-[#8899A6]">
                      ID: EXP_0{index + 1} // VERIFIED
                    </span>
                  </div>
                )}

              </div>
            </div>
          ))}

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
