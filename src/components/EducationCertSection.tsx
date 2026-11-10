import React from 'react';
import { EducationItem, CertificationItem, TrainingWorkshopItem } from '../types/portfolio';
import { GraduationCap, Award, ExternalLink, Calendar, MapPin, ZoomIn, CheckCircle2, Bookmark } from 'lucide-react';
import { MemphisCardOrnaments } from './MemphisOrnament';

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
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="memphis-badge bg-honey text-black border-4 border-black px-4 py-1.5 text-xs font-black tracking-widest uppercase">
            [07 // CREDENTIALS & HONORS]
          </span>
          <span className="bg-coral text-white border-3 border-black px-3 py-1 text-xs font-black tracking-wider uppercase">
            DEGREES · CERTIFICATIONS · BOOTCAMPS
          </span>
        </div>
        <h2 className="memphis-heading text-black pop-swap mb-4">
          EDUCATION & VERIFIED CREDENTIALS
        </h2>
        <p className="text-black text-base sm:text-lg font-bold max-w-3xl leading-relaxed">
          Rigorous academic foundation in Artificial Intelligence and Mathematics, reinforced by tier-1 institutional workshops and verified industrial credentials.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (6 cols): Education Degrees */}
        <div className="lg:col-span-6 space-y-6">
          <h3 className="text-xs font-black uppercase tracking-widest bg-black text-white px-3 py-1.5 inline-block mb-2">
            ACADEMIC DEGREES & FOUNDATION
          </h3>

          <div className="space-y-6">
            {educationList.map((edu, idx) => (
              <div
                key={idx}
                className="memphis-card bg-paper p-6 relative overflow-hidden group"
              >
                <MemphisCardOrnaments variant={(((idx % 4) + 1) as 1 | 2 | 3 | 4)} />

                <div className="flex items-start gap-4 pb-4 mb-4 border-b-3 border-black">
                  <div className="w-12 h-12 bg-honey border-3 border-black flex items-center justify-center shrink-0 shadow-[2px_2px_0_#000]">
                    <GraduationCap className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <span className="text-xs font-bold bg-white border-2 border-black px-2 py-0.5 inline-block mb-1">
                      {edu.duration}
                    </span>
                    <h4 className="text-lg sm:text-xl font-black text-black leading-tight">
                      {edu.degree}
                    </h4>
                    <div className="text-xs font-bold text-gray-800 mt-0.5">
                      {edu.institution} · {edu.location}
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                {edu.highlights && edu.highlights.length > 0 && (
                  <div className="space-y-2 mb-4 bg-white border-3 border-black p-4 shadow-memphis-sm">
                    {edu.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs font-bold text-black">
                        <CheckCircle2 className="w-4 h-4 text-mint shrink-0 mt-0.5" />
                        <span className="leading-snug">{h}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Skills */}
                {edu.skills && (
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {edu.skills.map((s) => (
                      <span
                        key={s}
                        className="bg-white text-black border-2 border-black px-2 py-0.5 text-[11px] font-black"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* National Bootcamps & Workshops */}
          <div className="pt-6">
            <h3 className="text-xs font-black uppercase tracking-widest bg-black text-white px-3 py-1.5 inline-block mb-4">
              NATIONAL BOOTCAMPS & WORKSHOPS
            </h3>
            <div className="space-y-4">
              {trainingWorkshops.map((ws, i) => (
                <div
                  key={i}
                  className="bg-white border-4 border-black p-5 shadow-memphis-sm relative hover:bg-honey transition-colors"
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-black text-coral uppercase tracking-wider">
                      {ws.year}
                    </span>
                    <span className="text-[10px] font-black bg-paper border border-black px-2 py-0.5">
                      {ws.institution}
                    </span>
                  </div>
                  <h4 className="text-base font-black text-black leading-tight">
                    {ws.title}
                  </h4>
                  <p className="text-xs font-bold text-gray-800 mt-2 leading-relaxed">
                    {ws.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (6 cols): Verified Certifications */}
        <div className="lg:col-span-6 space-y-6">
          <h3 className="text-xs font-black uppercase tracking-widest bg-black text-white px-3 py-1.5 inline-block mb-2">
            VERIFIED INDUSTRIAL CERTIFICATIONS
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="memphis-card bg-white p-4 relative flex flex-col justify-between group overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2 pb-2 border-b-2 border-black">
                    <span className="text-[10px] font-black uppercase tracking-wider bg-honey px-1.5 py-0.5 border border-black">
                      {cert.issuer}
                    </span>
                    <span className="text-[10px] font-bold text-gray-600">
                      {cert.issueDate}
                    </span>
                  </div>

                  <h4 className="text-sm font-black text-black leading-tight mb-2">
                    {cert.title}
                  </h4>

                  {/* Thumbnail if present */}
                  {cert.thumbnail && (
                    <div
                      onClick={() =>
                        onOpenImage({
                          url: cert.thumbnail!,
                          caption: `${cert.title} — ${cert.issuer}`
                        })
                      }
                      className="mb-3 h-28 border-2 border-black overflow-hidden relative cursor-pointer group/thumb bg-paper"
                    >
                      <img
                        src={cert.thumbnail}
                        alt={cert.title}
                        className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/thumb:opacity-100 flex items-center justify-center transition-opacity">
                        <span className="bg-white text-black px-2 py-0.5 text-[10px] font-black border border-black flex items-center gap-1">
                          <ZoomIn className="w-3 h-3" /> View
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {cert.skills.slice(0, 4).map((s) => (
                      <span
                        key={s}
                        className="bg-paper text-black border border-black px-1.5 py-0.5 text-[9px] font-black"
                      >
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
                    className="memphis-btn-honey text-[11px] py-1.5 px-2 w-full text-center flex items-center justify-center gap-1 mt-2"
                  >
                    <ZoomIn className="w-3 h-3" /> Verify Certificate
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
