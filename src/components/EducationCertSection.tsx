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
      className="relative bg-parchment-canvas text-[#1C1917] border-t-2 border-[#DECFC0] overflow-hidden"
    >
      {/* Sector Ribbon */}
      <SectorRibbon sectorNumber="06" sectorName="ACADEMIC BACKGROUND & CERTIFICATIONS" dark={false} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-24 space-y-16">
        
        {/* Education & Academic Degrees */}
        <div>
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#A45238] tracking-widest uppercase mb-2 reveal-on-scroll">
            <div className="p-1.5 rounded-lg bg-[#A45238]/10 text-[#A45238]">
              <GraduationCap className="w-4 h-4" />
            </div>
            <span>// FORMAL EDUCATION & ACADEMIA</span>
          </div>
          <h2 className="text-3xl font-bold font-sans text-[#1C1917] mb-8 reveal-on-scroll">
            Academic Degrees & Institutions
          </h2>

          <div className={`grid grid-cols-1 ${educationList.length > 1 ? 'md:grid-cols-2' : ''} gap-8`}>
            {educationList.map((edu, idx) => (
              <div
                key={idx}
                className="tactical-glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-4 reveal-on-scroll reveal-delay-150 corner-brackets shadow-sm"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3 pb-3 border-b border-[#DECFC0]">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold font-sans text-[#1C1917]">
                        {edu.degree}
                      </h3>
                      <div className="text-sm font-bold text-[#A45238] mt-1 flex items-center gap-1.5">
                        <span>🏛️</span>
                        <span>{edu.institution}</span>
                      </div>
                    </div>
                    <span className="font-mono text-xs px-3 py-1.5 rounded-xl bg-[#EFE6D7] text-[#A45238] font-bold shrink-0 shadow-2xs border border-[#DECFC0]">
                      {edu.duration}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 font-mono text-xs text-[#78716C] bg-[#EFE6D7] px-3 py-1.5 rounded-lg border border-[#DECFC0] w-fit">
                    <MapPin className="w-3.5 h-3.5 text-[#E06D3B]" />
                    <span>{edu.location}</span>
                  </div>

                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#44403C] pt-1">
                    {edu.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 group">
                        <CheckCircle2 className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5 group-hover:text-[#A45238] transition-colors" />
                        <span className="leading-relaxed group-hover:text-[#1C1917] transition-colors">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#DECFC0] flex flex-wrap gap-1.5">
                  {edu.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="font-mono text-[10px] px-2.5 py-1 rounded-md bg-[#EFE6D7] hover:bg-[#E8DDD0] border border-[#DECFC0] hover:border-[#A45238] text-[#574E45] transition-all hover:scale-105 font-medium"
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
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#E06D3B] tracking-widest uppercase mb-2 reveal-on-scroll">
            <div className="p-1.5 rounded-lg bg-[#E06D3B]/10 text-[#E06D3B]">
              <Award className="w-4 h-4" />
            </div>
            <span>// LICENSES & CERTIFICATIONS</span>
          </div>
          <h2 className="text-3xl font-bold font-sans text-[#1C1917] mb-8 reveal-on-scroll">
            Industry Credentials & Licenses
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className={`tactical-glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-4 reveal-on-scroll reveal-delay-${(idx % 2 + 1) * 150} corner-brackets shadow-sm`}
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3 pb-3 border-b border-[#DECFC0]">
                    <div>
                      <div className="inline-flex items-center gap-1 font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#EFE6D7] text-[#A45238] uppercase mb-1.5 border border-[#DECFC0]">
                        <Sparkles className="w-3 h-3 text-[#A45238]" />
                        <span>{cert.issuer}</span>
                      </div>
                      <h3 className="text-lg font-bold font-sans text-[#1C1917] leading-snug group-hover:text-[#A45238] transition-colors">
                        {cert.title}
                      </h3>
                    </div>
                    <span className="font-mono text-xs text-[#78716C] shrink-0 font-bold bg-[#EFE6D7] px-3 py-1 rounded-lg border border-[#DECFC0]">
                      {cert.issueDate}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="font-mono text-[10px] px-2.5 py-1 rounded-md bg-[#EFE6D7] hover:bg-[#E8DDD0] border border-[#DECFC0] hover:border-[#A45238] text-[#574E45] font-medium transition-all hover:scale-105"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {cert.thumbnail && (
                  <div className="pt-3 border-t border-[#DECFC0] flex items-center justify-between">
                    <button
                      onClick={() => setSelectedImage({
                        url: cert.thumbnail!,
                        title: cert.title,
                        caption: `Official certificate issued by ${cert.issuer} (${cert.issueDate})`
                      })}
                      className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#EFE6D7] hover:bg-[#E8DDD0] border border-[#DECFC0] hover:border-[#A45238] text-xs font-mono text-[#1C1917] transition-all group/btn interactive-btn shadow-2xs"
                    >
                      <img
                        src={cert.thumbnail}
                        alt={cert.title}
                        className="w-10 h-6 object-cover rounded-md border border-[#DECFC0] group-hover/btn:scale-110 transition-transform"
                      />
                      <span className="font-bold">View Certificate</span>
                      <Eye className="w-3.5 h-3.5 text-[#A45238] group-hover/btn:scale-125 transition-transform" />
                    </button>
                    <span className="font-mono text-[10px] text-[#78716C] flex items-center gap-1.5 bg-[#EFE6D7] px-2.5 py-1 rounded-lg border border-[#DECFC0]">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#15803D]" />
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
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#B45309] tracking-widest uppercase mb-2 reveal-on-scroll">
            <div className="p-1.5 rounded-lg bg-[#E8A838]/15 text-[#B45309]">
              <BookOpen className="w-4 h-4" />
            </div>
            <span>// TRAINING, HONORS & CO-CURRICULAR MILESTONES</span>
          </div>
          <h2 className="text-3xl font-bold font-sans text-[#1C1917] mb-8 reveal-on-scroll">
            Workshops, Honors & Key Milestones
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingsAndWorkshops.map((item, idx) => (
              <div
                key={idx}
                className={`tactical-glass-card rounded-2xl p-6 flex flex-col justify-between space-y-3 reveal-on-scroll reveal-delay-${(idx % 3 + 1) * 100} shadow-sm`}
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between pb-2 border-b border-[#DECFC0]">
                    <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-[#A45238]/10 text-[#A45238] border border-[#A45238]/25">
                      YEAR: {item.year}
                    </span>
                    <span className="font-mono text-[10px] text-[#8C7D6B] font-semibold">
                      MILESTONE_0{idx + 1}
                    </span>
                  </div>
                  <h3 className="text-base font-bold font-sans text-[#1C1917] leading-snug group-hover:text-[#A45238] transition-colors">
                    {item.title}
                  </h3>
                  <div className="font-mono text-xs font-semibold text-[#A45238] flex items-center gap-1">
                    <span>🏛️</span>
                    <span>{item.institution}</span>
                  </div>
                  <p className="text-xs text-[#44403C] leading-relaxed font-sans pt-1">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#DECFC0] flex items-center justify-between text-[10px] font-mono text-[#8C7D6B]">
                  <span className="text-[#78716C] font-semibold">{item.category || "HONOR / WORKSHOP"}</span>
                  <span className="text-[#15803D] font-bold">VERIFIED RECORD</span>
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
