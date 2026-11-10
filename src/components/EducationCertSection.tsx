import React from 'react';
import { EducationItem, CertificationItem, TrainingWorkshopItem } from '../types/portfolio';
import { GraduationCap, Award, ZoomIn, CheckCircle2 } from 'lucide-react';

interface EducationCertSectionProps {
  educationList: EducationItem[];
  certifications: CertificationItem[];
  trainingWorkshops: TrainingWorkshopItem[];
  onOpenImage: (image: { url: string; caption: string }) => void;
}

export const EducationCertSection: React.FC<EducationCertSectionProps> = ({
  educationList,
  certifications,
  trainingWorkshops,
  onOpenImage,
}) => {
  return (
    <section id="education" className="py-20 px-4 sm:px-8 lg:px-12 2xl:px-16 w-full max-w-[1720px] mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="cartouche-label text-xs">
            [06 // CREDENTIALS & HONORS]
          </span>
          <span className="font-serif tracking-widest text-xs uppercase text-[#1a3055]/70 font-bold">
            DEGREES · CERTIFICATIONS · WORKSHOPS
          </span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1a3055] mb-4">
          Education & Verified Credentials
        </h2>
        <p className="font-serif text-sm sm:text-base max-w-3xl text-[#1a3055]/85 leading-relaxed">
          Rigorous foundational degree in Artificial Intelligence & Mathematics, paired with verified certifications and national engineering bootcamps.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (6 cols): Education Degrees & National Bootcamps */}
        <div className="lg:col-span-6 space-y-6">
          <h3 className="font-serif text-sm font-bold uppercase tracking-widest text-[#1a3055] flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-[#1a3055]" /> Academic Degrees & Foundation
          </h3>

          <div className="space-y-4">
            {educationList.map((edu, idx) => (
              <div key={idx} className="woodblock-card woodblock-bar-indigo p-6 sm:p-8 group relative">
                <div className="flex items-start gap-4 pb-4 mb-4 border-b-2 border-[#1a3055]/20">
                  <div className="p-3 border-2 border-[#1a3055] bg-[#1a3055] text-[#f5f0e1] shrink-0 group-hover:scale-105 transition-transform">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-serif text-xs font-bold text-[#d4553a] uppercase tracking-wider">{edu.duration}</span>
                    <h4 className="font-serif text-lg sm:text-xl font-bold text-[#1a3055] tracking-tight mt-0.5">
                      {edu.degree}
                    </h4>
                    <div className="font-serif text-xs sm:text-sm text-[#2a5a8c] font-bold mt-1">
                      {edu.institution} · {edu.location}
                    </div>
                  </div>
                </div>

                {edu.highlights && edu.highlights.length > 0 && (
                  <div className="space-y-2 mb-4 text-xs font-serif text-[#1a3055] bg-[#f5f0e1] p-4 border-2 border-[#1a3055]">
                    {edu.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#d4553a] shrink-0 mt-0.5" />
                        <span className="leading-snug">{h}</span>
                      </div>
                    ))}
                  </div>
                )}

                {edu.skills && (
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t-2 border-[#1a3055]/20">
                    {edu.skills.map((s) => (
                      <span key={s} className="woodblock-tag text-[10px]">
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* National Bootcamps */}
          <div className="pt-4">
            <h3 className="font-serif text-sm font-bold uppercase tracking-widest text-[#1a3055] flex items-center gap-2 mb-4">
              <Award className="w-4 h-4 text-[#c9a227]" /> National Bootcamps, Workshops & Honors
            </h3>
            <div className="space-y-3">
              {trainingWorkshops.map((ws, i) => (
                <div key={i} className="woodblock-card woodblock-bar-gold p-5 space-y-1.5 group relative">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-serif font-bold text-[#c9a227] tracking-wider">{ws.year}</span>
                    <span className="font-serif text-[10px] uppercase font-bold text-[#1a3055] bg-[#c9a227]/20 px-2 py-0.5 border border-[#1a3055]">
                      {ws.institution}
                    </span>
                  </div>
                  <h4 className="font-serif text-sm font-bold text-[#1a3055] group-hover:text-[#d4553a] transition-colors">{ws.title}</h4>
                  <p className="font-serif text-xs text-[#1a3055]/85 leading-relaxed">{ws.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (6 cols): Certifications */}
        <div className="lg:col-span-6 space-y-6">
          <h3 className="font-serif text-sm font-bold uppercase tracking-widest text-[#1a3055] flex items-center gap-2">
            <Award className="w-4 h-4 text-[#747800]" /> Verified Industrial Certifications
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {certifications.map((cert, idx) => (
              <div key={idx} className="woodblock-card woodblock-bar-grass p-6 flex flex-col justify-between group relative">
                <div>
                  <div className="flex items-center justify-between text-xs mb-2 font-serif text-[#1a3055]">
                    <span className="font-bold bg-[#747800] text-[#f5f0e1] px-2 py-0.5 border border-[#1a3055] text-[10px] uppercase tracking-wider">
                      {cert.issuer}
                    </span>
                    <span className="font-bold text-[#1a3055]/70 text-[11px]">{cert.issueDate}</span>
                  </div>

                  <h4 className="font-serif text-sm sm:text-base font-bold text-[#1a3055] mb-3 leading-snug group-hover:text-[#d4553a] transition-colors">
                    {cert.title}
                  </h4>

                  {cert.thumbnail && (
                    <div
                      onClick={() =>
                        onOpenImage({
                          url: cert.thumbnail!,
                          caption: `${cert.title} — ${cert.issuer}`
                        })
                      }
                      className="mb-4 h-32 border-3 border-[#1a3055] relative cursor-pointer group/thumb bg-[#f5f0e1] overflow-hidden shadow-woodblock"
                    >
                      <img
                        src={cert.thumbnail}
                        alt={cert.title}
                        className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-200"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-[#1a3055] text-[#f5f0e1] px-2 py-1 flex items-center justify-between border-t-2 border-[#1a3055]">
                        <span className="text-[10px] font-serif font-bold tracking-wider uppercase truncate">
                          Official Certificate
                        </span>
                        <ZoomIn className="w-3.5 h-3.5 text-[#c9a227] shrink-0 ml-1" />
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cert.skills.map((s) => (
                      <span key={s} className="woodblock-tag text-[10px]">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t-2 border-[#1a3055]/20 flex items-center justify-between text-xs font-serif font-bold">
                  <span className="text-[#1a3055]/70 text-[10px] tracking-wider uppercase">VERIFIED CREDENTIAL</span>
                  <span className="text-[#747800] tracking-wider uppercase">AUTHENTIC</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
