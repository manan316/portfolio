import React from 'react';
import { EducationItem, CertificationItem, TrainingWorkshopItem } from '../types/portfolio';
import { ZoomIn } from 'lucide-react';

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
    <section id="education" className="pt-24 sm:pt-32 lg:pt-40 px-4 sm:px-8 max-w-[1600px] mx-auto scroll-mt-24 hairline-divider">
      {/* Section Header */}
      <div className="pb-12 sm:pb-16">
        <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-[#71717a]">
          <span className="w-2 h-2 bg-[#ff4d00] inline-block"></span>
          <span>06 // CREDENTIALS & FOUNDATION</span>
          <span>· DEGREES · CERTIFICATIONS · WORKSHOPS</span>
        </div>
        <h2 className="fluid-heading text-[#0a0a0a] uppercase tracking-[-0.04em] leading-[0.88] font-black break-words mt-4 mb-6">
          FOUNDATION & HONORS.
        </h2>
        <p className="text-lg sm:text-xl text-[#0a0a0a] font-normal leading-[1.5] max-w-3xl">
          Rigorous foundational degree in Artificial Intelligence & Mathematics, paired with verified certifications and national engineering bootcamps.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column (6 cols): Education Degrees & National Bootcamps */}
        <div className="lg:col-span-6 space-y-12">
          {/* Degrees */}
          <div>
            <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#ff4d00] pb-3 border-b border-[#0a0a0a]/15">
              [ACADEMIC DEGREES]
            </div>

            <div className="divide-y divide-[#0a0a0a]/15">
              {educationList.map((edu, idx) => (
                <div key={idx} className="py-8 space-y-4">
                  <div className="flex items-center justify-between font-mono text-[11px] tracking-[0.2em] uppercase text-[#71717a]">
                    <span>{edu.institution} · {edu.location}</span>
                    <span className="text-[#0a0a0a] font-medium">{edu.duration}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0a0a0a] tracking-tight leading-tight">
                    {edu.degree}
                  </h3>

                  {edu.highlights && edu.highlights.length > 0 && (
                    <ul className="space-y-1.5 font-mono text-xs text-[#0a0a0a] tracking-[0.05em] pt-2">
                      {edu.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#ff4d00] font-bold">—</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {edu.skills && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {edu.skills.map((s) => (
                        <span key={s} className="type-tag text-[10px]">
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* National Bootcamps & Workshops */}
          <div>
            <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#ff4d00] pb-3 border-b border-[#0a0a0a]/15">
              [NATIONAL BOOTCAMPS & RESEARCH WORKSHOPS]
            </div>

            <div className="divide-y divide-[#0a0a0a]/15">
              {trainingWorkshops.map((ws, i) => (
                <div key={i} className="py-6 space-y-2">
                  <div className="flex items-center justify-between font-mono text-[11px] tracking-[0.2em] uppercase text-[#71717a]">
                    <span>{ws.institution}</span>
                    <span className="text-[#0a0a0a] font-medium">{ws.year}</span>
                  </div>
                  <h4 className="text-lg font-bold text-[#0a0a0a] tracking-tight">
                    {ws.title}
                  </h4>
                  <p className="text-sm text-[#71717a] font-normal leading-relaxed">
                    {ws.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (6 cols): Verified Industrial Certifications */}
        <div className="lg:col-span-6 space-y-6">
          <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#ff4d00] pb-3 border-b border-[#0a0a0a]/15">
            [VERIFIED INDUSTRIAL CREDENTIALS]
          </div>

          <div className="divide-y divide-[#0a0a0a]/15">
            {certifications.map((cert, idx) => (
              <div key={idx} className="py-8 space-y-4">
                <div className="flex items-center justify-between font-mono text-[11px] tracking-[0.2em] uppercase text-[#71717a]">
                  <span className="text-[#ff4d00] font-medium">{cert.issuer}</span>
                  <span>{cert.issueDate}</span>
                </div>

                <h4 className="text-xl sm:text-2xl font-bold text-[#0a0a0a] tracking-tight leading-snug">
                  {cert.title}
                </h4>

                {/* Receding unbordered certificate thumbnail */}
                {cert.thumbnail && (
                  <div
                    onClick={() =>
                      onOpenImage({
                        url: cert.thumbnail!,
                        caption: `${cert.title} — ${cert.issuer}`
                      })
                    }
                    className="w-48 h-32 bg-[#e4e4e7] overflow-hidden cursor-pointer group relative"
                  >
                    <img
                      src={cert.thumbnail}
                      alt={cert.title}
                      className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-200"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                      <span className="text-[10px] text-white font-mono uppercase tracking-[0.15em] flex items-center gap-1">
                        <ZoomIn className="w-3 h-3 text-[#ff4d00]" /> ZOOM
                      </span>
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cert.skills.map((s) => (
                    <span key={s} className="type-tag text-[10px]">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#71717a] pt-1">
                  CREDENTIAL VERIFICATION // 100% AUTHENTIC
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
