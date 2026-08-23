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

  return (
    <section 
      id="experience" 
      ref={containerRef} 
      className="relative bg-cyber-mesh text-[#F8FAFC] border-t-2 border-[#1E293B] overflow-hidden"
    >
      {/* Sector Ribbon */}
      <SectorRibbon sectorNumber="02" sectorName="PROFESSIONAL EXPERIENCE & RESEARCH TRACK" dark={true} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D131F] border border-[#1E293B] font-mono text-xs font-bold text-[#00E5FF] shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] beacon-pulse shadow-[0_0_6px_#00E5FF]"></span>
            <span>// TRACK RECORD OF ENGINEERING & RESEARCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-white">
            Experience & Industrial Internships
          </h2>
          <p className="text-xs sm:text-sm text-[#94A3B8] font-sans">
            Hands-on development of production-grade embedded firmware, edge AI inference pipelines, and computer vision systems.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-[#1E293B] ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 space-y-12">
          
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative group reveal-on-scroll reveal-delay-150">
              
              {/* Timeline Node Icon */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-8 h-8 rounded-full bg-[#06090E] border-2 border-[#00E5FF] flex items-center justify-center text-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.4)] group-hover:scale-125 group-hover:bg-[#00E5FF] group-hover:text-[#06090E] transition-all duration-300">
                <Briefcase className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
              </div>

              {/* Experience Card */}
              <div className="tactical-glass-card rounded-2xl p-6 sm:p-8 space-y-5 shadow-lg corner-brackets">
                
                {/* Header: Role, Company, Period */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-[#1E293B] pb-4">
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-sans group-hover:text-[#00E5FF] transition-colors">
                        {exp.role}
                      </h3>
                      <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-[#00E5FF]/10 text-[#00E5FF] font-bold border border-[#00E5FF]/30">
                        {exp.type}
                      </span>
                    </div>
                    <div className="text-base font-bold text-[#38BDF8] mt-1 flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-[#00E5FF]" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end font-mono text-xs text-[#94A3B8] space-y-1">
                    <div className="flex items-center gap-1.5 text-white font-bold bg-[#06090E] px-3 py-1 rounded-lg border border-[#1E293B]">
                      <Calendar className="w-3.5 h-3.5 text-[#00E5FF]" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-[#64748B]">
                      <MapPin className="w-3 h-3 text-[#38BDF8]" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Narrative Summary */}
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed font-sans bg-[#06090E]/60 p-4 rounded-xl border border-[#1E293B]">
                  {exp.description}
                </p>

                {/* Key Architectural Contributions */}
                <div className="space-y-2.5">
                  <div className="font-mono text-xs font-bold text-white tracking-wide uppercase flex items-center gap-1.5">
                    <span className="text-[#00E5FF] font-black">&gt;</span>
                    <span>KEY ENGINEERING DELIVERABLES:</span>
                  </div>
                  <ul className="grid grid-cols-1 gap-2">
                    {exp.keyContributions.map((contrib, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#94A3B8] group/item">
                        <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0 mt-0.5 group-hover/item:text-[#38BDF8] transition-colors" />
                        <span className="leading-relaxed group-hover/item:text-[#F8FAFC] transition-colors">{contrib}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology Badges */}
                <div className="pt-2 flex flex-wrap items-center gap-1.5">
                  <span className="font-mono text-[10px] text-[#64748B] uppercase font-bold mr-1.5">
                    STACK:
                  </span>
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="font-mono text-[11px] px-2.5 py-1 rounded-lg bg-[#06090E] hover:bg-[#131C2E] border border-[#1E293B] hover:border-[#00E5FF] text-[#CBD5E1] font-medium transition-all hover:scale-105 shadow-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Attached Credential / Document Preview Thumbnail */}
                {exp.thumbnail && (
                  <div className="pt-3 border-t border-[#1E293B] flex flex-wrap items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedImage({
                        url: exp.thumbnail!,
                        title: `${exp.company} — ${exp.thumbnailLabel || 'Credential'}`,
                        caption: `Official verification record for ${exp.role} at ${exp.company}`
                      })}
                      className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#06090E] hover:bg-[#131C2E] border border-[#1E293B] hover:border-[#00E5FF] text-xs font-mono text-[#F8FAFC] transition-all group/btn interactive-btn shadow-sm"
                    >
                      <img
                        src={exp.thumbnail}
                        alt={exp.thumbnailLabel}
                        className="w-10 h-6 object-cover rounded-md border border-[#1E293B] group-hover/btn:scale-110 transition-transform"
                      />
                      <span className="font-bold">{exp.thumbnailLabel}</span>
                      <Eye className="w-3.5 h-3.5 text-[#00E5FF] group-hover/btn:scale-125 transition-transform" />
                    </button>
                    
                    <span className="font-mono text-[10px] text-[#94A3B8] flex items-center gap-1.5 bg-[#06090E] px-2.5 py-1 rounded-lg border border-[#1E293B]">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                      <span>ID: EXP_0{index + 1} // VERIFIED RECORD</span>
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
