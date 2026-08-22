import React, { useState } from 'react';
import { educationList, certifications, trainingsAndWorkshops } from '../data/portfolioData';
import { SectorRibbon } from './SectorRibbon';
import { ImageModal } from './ImageModal';
import { 
  GraduationCap, 
  Award, 
  MapPin, 
  CheckCircle2, 
  Eye, 
  BookOpen
} from 'lucide-react';

export const EducationCertSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string; caption?: string } | null>(null);

  return (
    <section id="education" className="relative bg-blueprint-grid text-[#181715] border-t-2 border-[#FF5722]">
      {/* Sector Ribbon */}
      <SectorRibbon sectorNumber="06" sectorName="ACADEMIC BACKGROUND & CERTIFICATIONS" dark={true} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-14 sm:py-20 space-y-16">
        
        {/* Education & Academic Degrees */}
        <div>
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#FF5722] tracking-widest uppercase mb-2">
            <GraduationCap className="w-4 h-4" />
            <span>// FORMAL EDUCATION</span>
          </div>
          <h2 className="text-3xl font-bold font-sans text-[#181715] mb-8">
            Academic Degrees & Institutions
          </h2>

          <div className={`grid grid-cols-1 ${educationList.length > 1 ? 'md:grid-cols-2' : ''} gap-8`}>
            {educationList.map((edu, idx) => (
              <div
                key={idx}
                className="tactical-card rounded-xl p-6 sm:p-7 bg-white border border-[#E2DBD0] flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-bold font-sans text-[#181715]">
                        {edu.degree}
                      </h3>
                      <div className="text-sm font-semibold text-[#FF5722] mt-0.5">
                        {edu.institution}
                      </div>
                    </div>
                    <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#181715] text-[#F4EFE6] font-bold shrink-0">
                      {edu.duration}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 font-mono text-xs text-[#64748B]">
                    <MapPin className="w-3.5 h-3.5 text-[#00A9E0]" />
                    <span>{edu.location}</span>
                  </div>

                  <ul className="space-y-2 text-xs sm:text-sm text-[#475569] pt-2">
                    {edu.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#00A9E0] shrink-0 mt-0.5" />
                        <span className="leading-snug">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-[#E2DBD0] flex flex-wrap gap-1.5">
                  {edu.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#FAF7F0] border border-[#E2DBD0] text-[#334155]"
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
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#00A9E0] tracking-widest uppercase mb-2">
            <Award className="w-4 h-4" />
            <span>// LICENSES & CERTIFICATIONS</span>
          </div>
          <h2 className="text-3xl font-bold font-sans text-[#181715] mb-8">
            Industry Credentials
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="tactical-card rounded-xl p-6 bg-white border border-[#E2DBD0] flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="inline-flex items-center gap-1 font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-[#181715] text-[#F4EFE6] uppercase mb-1">
                        {cert.issuer}
                      </div>
                      <h3 className="text-lg font-bold font-sans text-[#181715] leading-snug">
                        {cert.title}
                      </h3>
                    </div>
                    <span className="font-mono text-xs text-[#64748B] shrink-0 font-medium">
                      {cert.issueDate}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="font-mono text-[10px] px-2.5 py-1 rounded bg-[#FAF7F0] border border-[#E2DBD0] text-[#334155] font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {cert.thumbnail && (
                  <div className="pt-3 border-t border-[#E2DBD0] flex items-center justify-between">
                    <button
                      onClick={() => setSelectedImage({
                        url: cert.thumbnail!,
                        title: cert.title,
                        caption: `Official certificate issued by ${cert.issuer} (${cert.issueDate})`
                      })}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#FAF7F0] hover:bg-[#F4EFE6] border border-[#D5CCBB] text-xs font-mono text-[#181715] transition-all group"
                    >
                      <img
                        src={cert.thumbnail}
                        alt={cert.title}
                        className="w-10 h-6 object-cover rounded border border-[#C8BFB0] group-hover:scale-105 transition-transform"
                      />
                      <span className="font-semibold">View Certificate</span>
                      <Eye className="w-3.5 h-3.5 text-[#FF5722]" />
                    </button>
                    <span className="font-mono text-[10px] text-[#8899A6]">
                      ISSUED: {cert.issueDate}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Training, Workshops & Hackathons */}
        <div>
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#E5A93C] tracking-widest uppercase mb-2">
            <BookOpen className="w-4 h-4" />
            <span>// TRAINING, HONORS & CO-CURRICULAR MILESTONES</span>
          </div>
          <h2 className="text-3xl font-bold font-sans text-[#181715] mb-8">
            Workshops, Honors & Key Milestones
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingsAndWorkshops.map((item, idx) => (
              <div
                key={idx}
                className="tactical-card rounded-xl p-6 bg-white border border-[#E2DBD0] flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold text-[#FF5722]">
                      {item.year}
                    </span>
                    <span className="font-mono text-[10px] text-[#64748B]">
                      MILESTONE_0{idx + 1}
                    </span>
                  </div>
                  <h3 className="text-base font-bold font-sans text-[#181715] leading-snug">
                    {item.title}
                  </h3>
                  <div className="font-mono text-xs font-semibold text-[#00A9E0]">
                    {item.institution}
                  </div>
                  <p className="text-xs text-[#475569] leading-relaxed font-sans pt-1">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E2DBD0] flex items-center justify-between text-[10px] font-mono text-[#8899A6]">
                  <span>{item.category || "HONOR / WORKSHOP"}</span>
                  <span>VERIFIED RECORD</span>
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
