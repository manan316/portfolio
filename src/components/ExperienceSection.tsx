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
    'border-[#00F0FF] text-[#00F0FF] bg-[#0F121E]/90 shadow-[0_0_16px_rgba(0,240,255,0.4)]',
    'border-[#00FF9D] text-[#00FF9D] bg-[#0F121E]/90 shadow-[0_0_16px_rgba(0,255,157,0.4)]',
    'border-[#38BDF8] text-[#38BDF8] bg-[#0F121E]/90 shadow-[0_0_16px_rgba(56,189,248,0.4)]',
    'border-[#A855F7] text-[#A855F7] bg-[#0F121E]/90 shadow-[0_0_16px_rgba(168,85,247,0.4)]',
    'border-[#FFB800] text-[#FFB800] bg-[#0F121E]/90 shadow-[0_0_16px_rgba(255,184,0,0.4)]'
  ];

  return (
    <section 
      id="experience" 
      ref={containerRef} 
      className="relative bg-cyber-canvas text-[#F1F5F9] border-t-2 border-[#1E263D]/80 overflow-hidden"
    >
      {/* Sector Ribbon */}
      <SectorRibbon sectorNumber="02" sectorName="PROFESSIONAL EXPERIENCE & RESEARCH TRACK" dark={true} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F121E]/80 backdrop-blur-md border border-[#00F0FF]/30 font-mono text-xs font-bold text-[#00F0FF] shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] beacon-pulse shadow-[0_0_8px_#00FF9D]"></span>
            <span>// TRACK RECORD OF ENGINEERING & RESEARCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-[#F1F5F9]">
            Experience & Industrial Internships
          </h2>
          <p className="text-xs sm:text-sm text-[#94A3B8] font-sans">
            Hands-on development of production-grade embedded firmware, edge AI inference pipelines, and computer vision systems.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-gradient-to-b from-[#00F0FF]/50 via-[#38BDF8]/40 to-[#00FF9D]/50 ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 space-y-12">
          
          {experiences.map((exp, index) => {
            const nodeStyle = nodeColors[index % nodeColors.length];
            return (
              <div key={exp.id} className="relative group reveal-on-scroll reveal-delay-150">
                
                {/* Timeline Node Icon */}
                <div className={`absolute -left-[35px] sm:-left-[51px] top-1.5 w-8 h-8 rounded-2xl border-2 flex items-center justify-center backdrop-blur-md group-hover:scale-130 transition-all duration-300 ${nodeStyle}`}>
                  <Briefcase className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
                </div>

                {/* Experience Card - Frosted Glass Container */}
                <div className="tactical-glass-card rounded-3xl p-6 sm:p-8 space-y-5 shadow-sm corner-brackets">
                  
                  {/* Header: Role, Company, Period */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-white/[0.08] pb-4">
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#F1F5F9] font-sans group-hover:text-[#00F0FF] transition-colors">
                          {exp.role}
                        </h3>
                        <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-[#00F0FF]/10 text-[#00F0FF] font-bold border border-[#00F0FF]/30 shadow-xs">
                          {exp.type}
                        </span>
                      </div>
                      <div className="text-base font-bold text-[#38BDF8] mt-1 flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-[#00FF9D]" />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end font-mono text-xs text-[#94A3B8] space-y-1">
                      <div className="flex items-center gap-1.5 text-[#F1F5F9] font-bold bg-[#131828]/90 backdrop-blur-md px-3 py-1 rounded-xl border border-white/[0.08] shadow-sm">
                        <Calendar className="w-3.5 h-3.5 text-[#00F0FF]" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] text-[#64748B]">
                        <MapPin className="w-3 h-3 text-[#00FF9D]" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Narrative Summary - Frosted Inset */}
                  <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed font-sans glass-inset p-4.5 rounded-2xl">
                    {exp.description}
                  </p>

                  {/* Key Architectural Contributions */}
                  <div className="space-y-2.5">
                    <div className="font-mono text-xs font-bold text-[#F1F5F9] tracking-wide uppercase flex items-center gap-1.5">
                      <span className="text-[#00FF9D] font-black">&gt;</span>
                      <span>KEY ENGINEERING DELIVERABLES:</span>
                    </div>
                    <ul className="grid grid-cols-1 gap-2">
                      {exp.keyContributions.map((contrib, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#CBD5E1] group/item">
                          <CheckCircle2 className="w-4 h-4 text-[#00FF9D] shrink-0 mt-0.5 group-hover/item:text-[#00F0FF] transition-colors" />
                          <span className="leading-relaxed group-hover/item:text-white transition-colors">{contrib}</span>
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
                        className="font-mono text-[11px] px-2.5 py-1 rounded-xl glass-pill text-[#CBD5E1] font-medium transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Attached Credential / Document Preview Thumbnail */}
                  {exp.thumbnail && (
                    <div className="pt-3 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
                      <button
                        onClick={() => setSelectedImage({
                          url: exp.thumbnail!,
                          title: `${exp.company} — ${exp.thumbnailLabel || 'Credential'}`,
                          caption: `Official verification record for ${exp.role} at ${exp.company}`
                        })}
                        className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl glass-pill text-xs font-mono text-[#F1F5F9] transition-all group/btn interactive-btn"
                      >
                        <img
                          src={exp.thumbnail}
                          alt={exp.thumbnailLabel}
                          className="w-10 h-6 object-cover rounded-lg border border-white/10 group-hover/btn:scale-110 transition-transform"
                        />
                        <span className="font-bold">{exp.thumbnailLabel}</span>
                        <Eye className="w-3.5 h-3.5 text-[#00F0FF] group-hover/btn:scale-130 transition-transform" />
                      </button>
                      
                      <span className="font-mono text-[10px] text-[#00FF9D] flex items-center gap-1.5 bg-[#00FF9D]/10 px-2.5 py-1 rounded-xl border border-[#00FF9D]/30 shadow-xs">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#00FF9D]" />
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
