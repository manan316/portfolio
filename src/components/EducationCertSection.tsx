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
        <div className="flex items-center gap-2 mb-3">
          <span className="bento-badge text-cyan-800 bg-cyan-50 border-cyan-300 font-semibold">
            [06 // CREDENTIALS & HONORS]
          </span>
          <span className="text-xs text-slate-500 font-mono">
            DEGREES · CERTIFICATIONS · WORKSHOPS
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
          Education & Verified Credentials
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-3xl font-normal leading-relaxed">
          Rigorous foundational degree in Artificial Intelligence & Mathematics, paired with verified certifications and national engineering bootcamps.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (6 cols): Education Degrees & National Bootcamps */}
        <div className="lg:col-span-6 space-y-6">
          <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-800 font-bold flex items-center gap-1.5">
            <GraduationCap className="w-4 h-4 text-cyan-600" /> Academic Degrees & Foundation
          </h3>

          <div className="space-y-4">
            {educationList.map((edu, idx) => (
              <div key={idx} className="bento-card p-6 sm:p-8 bento-glow-cyan group">
                <div className="flex items-start gap-4 pb-4 mb-4 border-b border-slate-200">
                  <div className="p-3 rounded-2xl bg-cyan-50 border border-cyan-200 text-cyan-600 shrink-0 group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-cyan-800 font-bold">{edu.duration}</span>
                    <h4 className="text-base sm:text-xl font-bold text-slate-900 tracking-tight mt-0.5">
                      {edu.degree}
                    </h4>
                    <div className="text-xs text-slate-500 font-medium mt-1">
                      {edu.institution} · {edu.location}
                    </div>
                  </div>
                </div>

                {edu.highlights && edu.highlights.length > 0 && (
                  <div className="space-y-2 mb-4 text-xs text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-200 font-medium">
                    {edu.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}

                {edu.skills && (
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-200">
                    {edu.skills.map((s) => (
                      <span key={s} className="px-2.5 py-0.5 rounded-md text-[10px] font-mono bg-slate-100 text-slate-700 border border-slate-200 font-medium">
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
            <h3 className="text-xs font-mono uppercase tracking-wider text-amber-800 font-bold flex items-center gap-1.5 mb-4">
              <Award className="w-4 h-4 text-amber-600" /> National Bootcamps, Workshops & Honors
            </h3>
            <div className="space-y-3">
              {trainingWorkshops.map((ws, i) => (
                <div key={i} className="bento-card p-5 space-y-1.5 bento-glow-amber group">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-mono text-amber-800 font-bold">{ws.year}</span>
                    <span className="text-slate-500 font-mono text-[10px] bg-slate-100 px-2 py-0.5 rounded border border-slate-200">{ws.institution}</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-amber-800 transition-colors">{ws.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{ws.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (6 cols): Certifications */}
        <div className="lg:col-span-6 space-y-6">
          <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-800 font-bold flex items-center gap-1.5">
            <Award className="w-4 h-4 text-emerald-600" /> Verified Industrial Certifications
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {certifications.map((cert, idx) => (
              <div key={idx} className="bento-card p-6 flex flex-col justify-between bento-glow-emerald group">
                <div>
                  <div className="flex items-center justify-between text-[11px] mb-2 font-mono text-slate-500">
                    <span className="text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">{cert.issuer}</span>
                    <span className="font-medium">{cert.issueDate}</span>
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-3 leading-snug group-hover:text-emerald-800 transition-colors">
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
                      className="mb-4 h-32 rounded-xl overflow-hidden border border-slate-200 relative cursor-pointer group/thumb bg-slate-100 shadow-sm"
                    >
                      <img
                        src={cert.thumbnail}
                        alt={cert.title}
                        className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-2.5">
                        <span className="text-[11px] text-white truncate font-medium flex items-center justify-between w-full">
                          <span>View Official Certificate</span>
                          <ZoomIn className="w-3.5 h-3.5 text-emerald-300 ml-1 shrink-0" />
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cert.skills.map((s) => (
                      <span key={s} className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-emerald-50 text-emerald-800 border border-emerald-200 font-medium">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-mono text-[10px]">VERIFIED CREDENTIAL</span>
                  <span className="text-emerald-700 font-semibold">100% AUTHENTIC</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
