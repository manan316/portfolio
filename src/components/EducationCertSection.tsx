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
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="bento-badge text-cyan-400 bg-cyan-500/10 border-cyan-500/20">
            [08 // CREDENTIALS & HONORS]
          </span>
          <span className="text-xs text-zinc-400 font-mono">
            DEGREES · CERTIFICATIONS · WORKSHOPS
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
          Education & Verified Credentials
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
          Rigorous foundational degree in Artificial Intelligence & Mathematics, paired with verified certifications and national engineering bootcamps.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column (6 cols): Education Degrees */}
        <div className="lg:col-span-6 space-y-5">
          <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
            Academic Degrees & Foundation
          </h3>

          <div className="space-y-4">
            {educationList.map((edu, idx) => (
              <div key={idx} className="bento-card p-6">
                <div className="flex items-start gap-4 pb-4 mb-4 border-b border-white/5">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-zinc-400">{edu.duration}</span>
                    <h4 className="text-base sm:text-lg font-bold text-white tracking-tight mt-0.5">
                      {edu.degree}
                    </h4>
                    <div className="text-xs text-zinc-400 mt-1">
                      {edu.institution} · {edu.location}
                    </div>
                  </div>
                </div>

                {edu.highlights && edu.highlights.length > 0 && (
                  <div className="space-y-1.5 mb-4 text-xs text-zinc-300">
                    {edu.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}

                {edu.skills && (
                  <div className="flex flex-wrap gap-1 pt-2 border-t border-white/5">
                    {edu.skills.map((s) => (
                      <span key={s} className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/5 text-zinc-400 border border-white/5">
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
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-4">
              National Bootcamps & Workshops
            </h3>
            <div className="space-y-3">
              {trainingWorkshops.map((ws, i) => (
                <div key={i} className="bento-card p-4 space-y-1.5">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-mono text-cyan-400">{ws.year}</span>
                    <span className="text-zinc-500 font-mono">{ws.institution}</span>
                  </div>
                  <h4 className="text-sm font-semibold text-white">{ws.title}</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">{ws.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (6 cols): Certifications */}
        <div className="lg:col-span-6 space-y-5">
          <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
            Verified Industrial Certifications
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <div key={idx} className="bento-card p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[10px] mb-2 font-mono text-zinc-400">
                    <span className="text-cyan-400">{cert.issuer}</span>
                    <span>{cert.issueDate}</span>
                  </div>

                  <h4 className="text-xs sm:text-sm font-semibold text-white mb-2 leading-snug">
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
                      className="mb-3 h-24 rounded-lg overflow-hidden border border-white/10 relative cursor-pointer group/thumb bg-zinc-950"
                    >
                      <img
                        src={cert.thumbnail}
                        alt={cert.title}
                        className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-200"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/thumb:opacity-100 flex items-center justify-center transition-opacity">
                        <ZoomIn className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1 mb-2">
                    {cert.skills.slice(0, 3).map((s) => (
                      <span key={s} className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-white/5 text-zinc-400 border border-white/5">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {cert.thumbnail && (
                  <button
                    onClick={() =>
                      onOpenImage({
                        url: cert.thumbnail!,
                        caption: `${cert.title} — ${cert.issuer}`
                      })
                    }
                    className="bento-btn-secondary text-[11px] py-1 px-2.5 w-full mt-2"
                  >
                    <span>View Credential</span>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
