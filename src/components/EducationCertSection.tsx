import React, { useState } from 'react';
import { educationList, certifications, trainingsAndWorkshops } from '../data/portfolioData';
import { SectorRibbon } from './SectorRibbon';
import { ImageModal } from './ImageModal';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { 
  GraduationCap, 
  Award, 
  MapPin, 
  CheckCircle2, 
  Eye, 
  BookOpen,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export const EducationCertSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string; caption?: string } | null>(null);
  const containerRef = useScrollReveal<HTMLElement>();

  return (
    <section 
      id="education" 
      ref={containerRef} 
      className="relative bg-cyber-canvas text-[#F1F5F9] border-t-2 border-[#1E263D]/80 overflow-hidden"
    >
      {/* Sector Ribbon */}
      <SectorRibbon sectorNumber="06" sectorName="ACADEMIC BACKGROUND & CERTIFICATIONS" dark={true} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-24 space-y-16">
        
        {/* Education & Academic Degrees */}
        <div>
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#00F0FF] tracking-widest uppercase mb-2 reveal-on-scroll">
            <div className="p-1.5 rounded-xl bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/30">
              <GraduationCap className="w-4 h-4" />
            </div>
            <span>// FORMAL EDUCATION & ACADEMIA</span>
          </div>
          <h2 className="text-3xl font-bold font-sans text-[#F1F5F9] mb-8 reveal-on-scroll">
            Academic Degrees & Institutions
          </h2>

          <div className={`grid grid-cols-1 ${educationList.length > 1 ? 'md:grid-cols-2' : ''} gap-8`}>
            {educationList.map((edu, idx) => (
              <div
                key={idx}
                className="tactical-glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-4 reveal-on-scroll reveal-delay-150 corner-brackets shadow-sm"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3 pb-3 border-b border-white/[0.08]">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold font-sans text-[#F1F5F9]">
                        {edu.degree}
                      </h3>
                      <div className="text-sm font-bold text-[#00F0FF] mt-1 flex items-center gap-1.5">
                        <span>🏛️</span>
                        <span>{edu.institution}</span>
                      </div>
                    </div>
                    <span className="font-mono text-xs px-3 py-1.5 rounded-xl bg-[#131828]/90 text-[#00FF9D] font-bold shrink-0 shadow-xs border border-white/[0.08]">
                      {edu.duration}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 font-mono text-xs text-[#94A3B8] glass-inset px-3 py-1.5 rounded-xl w-fit">
                    <MapPin className="w-3.5 h-3.5 text-[#00F0FF]" />
                    <span>{edu.location}</span>
                  </div>

                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#CBD5E1] pt-1">
                    {edu.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 group">
                        <CheckCircle2 className="w-4 h-4 text-[#00FF9D] shrink-0 mt-0.5 group-hover:text-[#00F0FF] transition-colors" />
                        <span className="leading-relaxed group-hover:text-white transition-colors">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/[0.08] flex flex-wrap gap-1.5">
                  {edu.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="font-mono text-[10px] px-2.5 py-1 rounded-xl glass-pill text-[#CBD5E1] font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Industry Credentials */}
        <div>
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#00FF9D] tracking-widest uppercase mb-2 reveal-on-scroll">
            <div className="p-1.5 rounded-xl bg-[#00FF9D]/10 text-[#00FF9D] border border-[#00FF9D]/30">
              <Award className="w-4 h-4" />
            </div>
            <span>// LICENSES & CERTIFICATIONS</span>
          </div>
          <h2 className="text-3xl font-bold font-sans text-[#F1F5F9] mb-8 reveal-on-scroll">
            Industry Credentials & Licenses
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className={`tactical-glass-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between space-y-4 reveal-on-scroll reveal-delay-${(idx % 2 + 1) * 150} corner-brackets shadow-sm`}
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3 pb-3 border-b border-white/[0.08]">
                    <div>
                      <div className="inline-flex items-center gap-1 font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#00F0FF]/10 text-[#00F0FF] uppercase mb-1.5 border border-[#00F0FF]/30 shadow-xs">
                        <Sparkles className="w-3 h-3 text-[#00F0FF]" />
                        <span>{cert.issuer}</span>
                      </div>
                      <h3 className="text-lg font-bold font-sans text-[#F1F5F9] leading-snug group-hover:text-[#00F0FF] transition-colors">
                        {cert.title}
                      </h3>
                    </div>
                    <span className="font-mono text-xs text-[#94A3B8] shrink-0 font-bold bg-[#131828]/90 px-3 py-1 rounded-xl border border-white/[0.08]">
                      {cert.issueDate}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="font-mono text-[10px] px-2.5 py-1 rounded-xl glass-pill text-[#CBD5E1] font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {cert.thumbnail && (
                  <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
                    <button
                      onClick={() => setSelectedImage({
                        url: cert.thumbnail!,
                        title: cert.title,
                        caption: `Official certificate issued by ${cert.issuer} (${cert.issueDate})`
                      })}
                      className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl glass-pill text-xs font-mono text-[#F1F5F9] transition-all group/btn interactive-btn"
                    >
                      <img
                        src={cert.thumbnail}
                        alt={cert.title}
                        className="w-10 h-6 object-cover rounded-lg border border-white/10 group-hover/btn:scale-110 transition-transform"
                      />
                      <span className="font-bold">View Certificate</span>
                      <Eye className="w-3.5 h-3.5 text-[#00F0FF] group-hover/btn:scale-130 transition-transform" />
                    </button>
                    <span className="font-mono text-[10px] text-[#00FF9D] flex items-center gap-1.5 bg-[#00FF9D]/10 px-2.5 py-1 rounded-xl border border-[#00FF9D]/30 shadow-xs">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#00FF9D]" />
                      <span>VERIFIED ASSET</span>
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Training, Workshops & Hackathons */}
        <div>
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#FFB800] tracking-widest uppercase mb-2 reveal-on-scroll">
            <div className="p-1.5 rounded-xl bg-[#FFB800]/10 text-[#FFB800] border border-[#FFB800]/30">
              <BookOpen className="w-4 h-4" />
            </div>
            <span>// TRAINING, HONORS & CO-CURRICULAR MILESTONES</span>
          </div>
          <h2 className="text-3xl font-bold font-sans text-[#F1F5F9] mb-8 reveal-on-scroll">
            Workshops, Honors & Key Milestones
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingsAndWorkshops.map((item, idx) => (
              <div
                key={idx}
                className={`tactical-glass-card rounded-3xl p-6 flex flex-col justify-between space-y-3 reveal-on-scroll reveal-delay-${(idx % 3 + 1) * 100} shadow-sm`}
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
                    <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-lg bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/30">
                      YEAR: {item.year}
                    </span>
                    <span className="font-mono text-[10px] text-[#64748B] font-semibold">
                      MILESTONE_0{idx + 1}
                    </span>
                  </div>
                  <h3 className="text-base font-bold font-sans text-[#F1F5F9] leading-snug group-hover:text-[#00F0FF] transition-colors">
                    {item.title}
                  </h3>
                  <div className="font-mono text-xs font-semibold text-[#38BDF8] flex items-center gap-1">
                    <span>🏛️</span>
                    <span>{item.institution}</span>
                  </div>
                  <p className="text-xs text-[#CBD5E1] leading-relaxed font-sans pt-1">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-[#64748B]">
                  <span className="text-[#94A3B8] font-semibold">{item.category || "HONOR / WORKSHOP"}</span>
                  <span className="text-[#00FF9D] font-bold">VERIFIED RECORD</span>
                </div>
              </div>
            ))}
          </div>
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
