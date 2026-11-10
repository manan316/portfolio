import React, { useState } from 'react';
import { educationList, certifications, trainingsAndWorkshops } from '../data/portfolioData';
import { SectorRibbon } from './SectorRibbon';
import { ImageModal } from './ImageModal';
import { 
  GraduationCap, 
  Award, 
  MapPin, 
  Eye, 
  BookOpen,
  Sparkles,
  Calendar
} from 'lucide-react';
import { 
  MemphisCircle, 
  MemphisTriangle, 
  MemphisWave, 
  MemphisZigzag, 
  MemphisCardOrnaments,
  MemphisZigzagDivider 
} from './MemphisOrnament';

export const EducationCertSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string; caption?: string } | null>(null);

  return (
    <section id="education" className="relative bg-[#fdf6e3] text-black overflow-hidden pt-4 pb-24">
      {/* Sector Ribbon */}
      <SectorRibbon sectorNumber="06" sectorName="ACADEMIC BACKGROUND & CERTIFICATIONS" color="blue" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-16 space-y-16">
        
        {/* Education Block */}
        <div>
          <div className="mb-10">
            <div className="inline-block bg-[#feca57] text-black px-3.5 py-1 text-xs font-black uppercase tracking-wider border-3 border-black shadow-[3px_3px_0_#000000] tilt-neg-1 mb-2">
              // FORMAL ACADEMIA
            </div>
            <h2 className="memphis-heading text-black">
              ACADEMIC DEGREES & FOUNDATIONS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {educationList.map((edu, idx) => {
              const tilt = idx % 2 === 0 ? 'tilt-neg-1' : 'tilt-pos-1';
              const bannerBg = idx === 0 ? 'bg-[#ff6b6b] text-white' : 'bg-[#48dbfb] text-black';

              return (
                <div
                  key={idx}
                  className={`memphis-card group p-0 overflow-hidden ${tilt} hover:tilt-0 transition-transform duration-150 flex flex-col justify-between`}
                >
                  <MemphisCardOrnaments variant={(idx + 1) as 1 | 2} />

                  <div>
                    {/* Header Banner */}
                    <div className={`${bannerBg} p-5 border-b-4 border-black`}>
                      <span className="font-mono text-xs font-bold uppercase tracking-wider bg-black text-white px-2 py-0.5 inline-block mb-1.5">
                        {edu.duration}
                      </span>
                      <h3 className="font-sans font-black text-xl sm:text-2xl leading-snug">
                        {edu.degree}
                      </h3>
                      <div className="font-sans font-black text-sm uppercase mt-1">
                        🏛️ {edu.institution}
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-6 space-y-4 bg-white">
                      <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-[#5f27cd]">
                        <MapPin className="w-3.5 h-3.5 text-[#ff6b6b]" />
                        <span>{edu.location}</span>
                      </div>

                      <ul className="space-y-2 text-xs sm:text-sm font-bold text-black/90">
                        {edu.highlights.map((hl, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2">
                            <span className="text-[#ff6b6b] font-black select-none text-sm">▶</span>
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Skills tags */}
                  <div className="p-4 bg-[#fdf6e3] border-t-3 border-black">
                    <div className="flex flex-wrap gap-1.5">
                      {edu.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="memphis-badge bg-white text-black text-[10px] py-0.5">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Certifications Block */}
        <div>
          <div className="mb-10">
            <div className="inline-block bg-[#1dd1a1] text-black px-3.5 py-1 text-xs font-black uppercase tracking-wider border-3 border-black shadow-[3px_3px_0_#000000] tilt-pos-1 mb-2">
              // ACCREDITATIONS & LICENSES
            </div>
            <h2 className="memphis-heading text-black">
              INDUSTRIAL CERTIFICATIONS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, idx) => {
              const tilt = idx % 2 === 0 ? 'tilt-pos-1' : 'tilt-neg-1';

              return (
                <div
                  key={idx}
                  className={`memphis-card group p-0 overflow-hidden ${tilt} hover:tilt-0 transition-transform duration-150 flex flex-col justify-between`}
                >
                  <MemphisCardOrnaments variant={(idx % 4 + 1) as 1 | 2 | 3 | 4} />

                  <div className="p-6 bg-white space-y-4">
                    <div className="flex items-start justify-between gap-3 pb-3 border-b-3 border-black">
                      <div>
                        <span className="font-mono text-xs font-bold text-[#ff6b6b] uppercase block">
                          ISSUER: {cert.issuer}
                        </span>
                        <h3 className="font-sans font-black text-xl text-black group-hover:text-[#ff6b6b] pop-swap leading-snug mt-0.5">
                          {cert.title}
                        </h3>
                      </div>
                      <span className="font-mono text-xs font-bold text-black bg-[#feca57] px-2.5 py-1 border-2 border-black whitespace-nowrap">
                        {cert.issueDate}
                      </span>
                    </div>

                    {/* Thumbnail preview */}
                    {cert.thumbnail && (
                      <div 
                        onClick={() => setSelectedImage({
                          url: cert.thumbnail!,
                          title: cert.title,
                          caption: `Official Certification issued by ${cert.issuer}`
                        })}
                        className="cursor-pointer border-3 border-black p-1.5 bg-[#fdf6e3] shadow-[3px_3px_0_#000000] hover:shadow-[5px_5px_0_#000000] hover:-translate-y-0.5 transition-all duration-150 relative select-none"
                      >
                        <div className="h-40 border-2 border-black overflow-hidden bg-white relative">
                          <img
                            src={cert.thumbnail}
                            alt={cert.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-150 flex items-center justify-center">
                            <span className="bg-[#feca57] text-black font-black text-xs px-3 py-1.5 border-2 border-black flex items-center gap-1.5">
                              <Eye className="w-3.5 h-3.5" />
                              <span>VIEW CREDENTIAL</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Skills pills */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {cert.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="memphis-badge bg-[#fdf6e3] text-black text-[10px] py-0.5">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 bg-[#feca57] border-t-3 border-black text-right font-mono text-[10px] font-bold text-black uppercase">
                    VERIFIED // {cert.issuer}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Workshops & Honors Block */}
        <div>
          <div className="mb-10">
            <div className="inline-block bg-[#ff9ff3] text-black px-3.5 py-1 text-xs font-black uppercase tracking-wider border-3 border-black shadow-[3px_3px_0_#000000] tilt-neg-2 mb-2">
              // HONORS & FELLOWSHIPS
            </div>
            <h2 className="memphis-heading text-black">
              TRAININGS, AWARDS & LEADERSHIP
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingsAndWorkshops.map((train, idx) => {
              const tilt = idx % 3 === 0 ? 'tilt-neg-1' : idx % 3 === 1 ? 'tilt-pos-1' : 'tilt-neg-2';

              return (
                <div
                  key={idx}
                  className={`memphis-card group ${tilt} hover:tilt-0 transition-transform duration-150 flex flex-col justify-between`}
                >
                  <MemphisCardOrnaments variant={(idx % 4 + 1) as 1 | 2 | 3 | 4} />

                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2 pb-2.5 border-b-3 border-black">
                      <span className="memphis-badge bg-[#1dd1a1] text-black text-[10px]">
                        {train.category || "HONOR"}
                      </span>
                      <span className="font-mono text-xs font-bold text-black bg-[#fdf6e3] px-2 py-0.5 border-2 border-black">
                        {train.year}
                      </span>
                    </div>

                    <h3 className="font-sans font-black text-lg text-black group-hover:text-[#ff6b6b] pop-swap leading-snug">
                      {train.title}
                    </h3>

                    <div className="font-sans font-black text-xs text-[#5f27cd]">
                      🏛️ {train.institution}
                    </div>

                    <p className="font-sans font-bold text-xs text-black/80 leading-relaxed">
                      {train.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t-2 border-black mt-3 font-mono text-[10px] font-bold text-black">
                    HONOR_REF: 0{idx + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section Bottom Zigzag Divider */}
        <MemphisZigzagDivider color="mint" className="mt-16" />

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
