import React, { useState } from 'react';
import { ProjectItem } from '../types/portfolio';
import { ZoomIn, Sparkles, ArrowRight, CheckCircle2, Trophy } from 'lucide-react';
import { GithubIcon } from './Icons';

interface FlagshipCaseStudiesProps {
  projects: ProjectItem[];
  onOpenImage: (image: { url: string; caption: string }) => void;
  onOpenInspector: (project: ProjectItem) => void;
}

export const FlagshipCaseStudies: React.FC<FlagshipCaseStudiesProps> = ({
  projects,
  onOpenImage,
  onOpenInspector,
}) => {
  const ojasews = projects.find((p) => p.id === 'ojasews') || projects[0];
  const geochange = projects.find((p) => p.id === 'geochange-ai') || projects[1];
  const neuroview = projects.find((p) => p.id === 'neuroview') || projects[2];
  const slipsense = projects.find((p) => p.id === 'slipsense') || projects[3];

  const [ojasewsImgIdx, setOjasewsImgIdx] = useState(0);
  const [geochangeImgIdx, setGeochangeImgIdx] = useState(0);

  return (
    <section id="flagships" className="py-16 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="cartouche-label">
            [二之巻 // FLAGSHIP BUILDS]
          </span>
          <span className="text-xs text-[#2a5a8c] font-mono font-bold tracking-widest uppercase">
            ARCHITECTURAL INNOVATIONS
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1a3055] mb-3">
          Featured Engineering Blueprints
        </h2>
        <p className="text-[#1a3055] text-base sm:text-lg max-w-3xl font-serif leading-[1.7]">
          Deep-tech platforms developed under Project SAVERA, international hackathon winners, and high-throughput spatial telemetry architectures.
        </p>
      </div>

      {/* Flagships Woodblock Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
        
        {/* CARD 1: OJASEWS (7 Cols) */}
        {ojasews && (
          <div className="lg:col-span-7 woodblock-card woodblock-bar-vermilion p-6 sm:p-10 flex flex-col justify-between">
            <div>
              {/* Badges */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 text-xs font-bold font-serif bg-[#d4553a] text-[#f5f0e1] border-2 border-[#1a3055] shadow-woodblock-sm uppercase">
                    ★ SAVERA Flagship System
                  </span>
                  <span className="px-2.5 py-1 text-xs font-mono font-bold bg-[#ece5d0] text-[#1a3055] border-2 border-[#1a3055]">
                    {ojasews.category}
                  </span>
                </div>
                <span className="text-xs font-mono font-bold text-[#1a3055]">
                  {ojasews.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1a3055] mb-2 tracking-tight">
                {ojasews.title.split('—')[0]}
              </h3>
              <p className="text-sm font-bold text-[#d4553a] mb-4 leading-snug tracking-wide">
                {ojasews.subtitle}
              </p>

              {/* Description */}
              <p className="text-sm text-[#1a3055] font-serif leading-[1.7] mb-6 line-clamp-3">
                {ojasews.description}
              </p>

              {/* Screenshot Preview Stage */}
              {ojasews.images && ojasews.images.length > 0 && (
                <div className="mb-6 border-3 border-[#1a3055] bg-[#ece5d0] p-2 shadow-woodblock">
                  <div
                    onClick={() => onOpenImage(ojasews.images![ojasewsImgIdx])}
                    className="h-56 sm:h-72 border-2 border-[#1a3055] overflow-hidden relative cursor-zoom-in group"
                  >
                    <img
                      src={ojasews.images[ojasewsImgIdx].url}
                      alt={ojasews.images[ojasewsImgIdx].caption}
                      className="w-full h-full object-cover contrast-105"
                    />
                    <div className="absolute inset-0 bg-[#1a3055]/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                      <span className="px-3 py-1.5 bg-[#d4553a] text-[#f5f0e1] text-xs font-bold border-2 border-[#1a3055] shadow-woodblock-sm flex items-center gap-1.5">
                        <ZoomIn className="w-3.5 h-3.5" /> ENLARGE PRINT
                      </span>
                    </div>
                    <div className="absolute bottom-0 inset-x-0 bg-[#1a3055] text-[#f5f0e1] p-2 text-xs font-serif font-bold truncate">
                      {ojasews.images[ojasewsImgIdx].caption}
                    </div>
                  </div>

                  {/* Thumbnail Row */}
                  <div className="flex gap-2 mt-2 pt-2 border-t-2 border-[#1a3055]">
                    {ojasews.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setOjasewsImgIdx(idx)}
                        className={`h-12 w-20 border-2 overflow-hidden transition-all ${
                          ojasewsImgIdx === idx
                            ? 'border-[#d4553a] ring-2 ring-[#d4553a]'
                            : 'border-[#1a3055] opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img src={img.url} alt={img.caption} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Engineering Highlights */}
              <div className="space-y-2 mb-6 bg-[#ece5d0] p-4 border-2 border-[#1a3055] shadow-woodblock-sm text-xs text-[#1a3055] font-serif leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#d4553a] shrink-0 mt-0.5" />
                  <span>Procedural Three.js 3D Himalayan digital twin with dynamic slope shader heatmaps.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#d4553a] shrink-0 mt-0.5" />
                  <span>Dual-track risk arbiter: Mohr-Coulomb physics heuristic + Random Forest classifier.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#d4553a] shrink-0 mt-0.5" />
                  <span>Sub-second mobile push dispatch via ntfy.sh with priority lock-screen bypass.</span>
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {ojasews.technologies.slice(0, 6).map((t) => (
                  <span key={t} className="woodblock-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Strip */}
            <div className="pt-4 border-t-2 border-[#1a3055] flex items-center justify-between gap-3">
              <button
                onClick={() => onOpenInspector(ojasews)}
                className="seal-btn-primary text-xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#c9a227]" />
                <span>ARCHITECTURAL SPEC</span>
              </button>
              {ojasews.githubUrl && (
                <a
                  href={ojasews.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="seal-btn-secondary text-xs"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-[#1a3055]" />
                  <span>CODEBASE</span>
                </a>
              )}
            </div>
          </div>
        )}

        {/* CARD 2: GeoChange AI (5 Cols) */}
        {geochange && (
          <div className="lg:col-span-5 woodblock-card woodblock-bar-gold p-6 sm:p-10 flex flex-col justify-between">
            <div>
              {/* Badges */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 text-xs font-bold font-serif bg-[#c9a227] text-[#1a3055] border-2 border-[#1a3055] shadow-woodblock-sm uppercase flex items-center gap-1.5">
                  <Trophy className="w-3.5 h-3.5 text-[#1a3055]" /> Best Presentation Award
                </span>
                <span className="text-xs font-mono font-bold text-[#1a3055]">
                  {geochange.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1a3055] mb-2 tracking-tight">
                {geochange.title.split('—')[0]}
              </h3>
              <p className="text-sm font-bold text-[#2a5a8c] mb-4 leading-snug tracking-wide">
                {geochange.subtitle}
              </p>

              {/* Description */}
              <p className="text-sm text-[#1a3055] font-serif leading-[1.7] mb-6 line-clamp-3">
                {geochange.description}
              </p>

              {/* Image Preview */}
              {geochange.images && geochange.images.length > 0 && (
                <div className="mb-6 border-3 border-[#1a3055] bg-[#ece5d0] p-2 shadow-woodblock">
                  <div
                    onClick={() => onOpenImage(geochange.images![geochangeImgIdx])}
                    className="h-48 sm:h-60 border-2 border-[#1a3055] overflow-hidden relative cursor-zoom-in group"
                  >
                    <img
                      src={geochange.images[geochangeImgIdx].url}
                      alt={geochange.images[geochangeImgIdx].caption}
                      className="w-full h-full object-cover contrast-105"
                    />
                    <div className="absolute inset-0 bg-[#1a3055]/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                      <span className="px-3 py-1.5 bg-[#c9a227] text-[#1a3055] text-xs font-bold border-2 border-[#1a3055] shadow-woodblock-sm flex items-center gap-1.5">
                        <ZoomIn className="w-3.5 h-3.5" /> ENLARGE PRINT
                      </span>
                    </div>
                    <div className="absolute bottom-0 inset-x-0 bg-[#1a3055] text-[#f5f0e1] p-2 text-xs font-serif font-bold truncate">
                      {geochange.images[geochangeImgIdx].caption}
                    </div>
                  </div>

                  <div className="flex gap-2 mt-2 pt-2 border-t-2 border-[#1a3055]">
                    {geochange.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setGeochangeImgIdx(idx)}
                        className={`h-10 w-16 border-2 overflow-hidden transition-all ${
                          geochangeImgIdx === idx
                            ? 'border-[#c9a227] ring-2 ring-[#c9a227]'
                            : 'border-[#1a3055] opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img src={img.url} alt={img.caption} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Highlights */}
              <div className="space-y-2 mb-6 bg-[#ece5d0] p-4 border-2 border-[#1a3055] shadow-woodblock-sm text-xs text-[#1a3055] font-serif leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#c9a227] shrink-0 mt-0.5" />
                  <span>STAC Data Readiness Gate with QA60 cloud mask at 10m Sentinel-2.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#c9a227] shrink-0 mt-0.5" />
                  <span>NASA/ORNL Aboveground Biomass Carbon accounting in lost tonnes CO2e.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#c9a227] shrink-0 mt-0.5" />
                  <span>Landsat 8/9 daytime thermal infrared coupling quantifying urban Δ°C.</span>
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {geochange.technologies.slice(0, 5).map((t) => (
                  <span key={t} className="woodblock-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Strip */}
            <div className="pt-4 border-t-2 border-[#1a3055] flex items-center justify-between gap-3">
              <button
                onClick={() => onOpenInspector(geochange)}
                className="seal-btn-primary text-xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#c9a227]" />
                <span>BLUEPRINT SPEC</span>
              </button>
              {geochange.githubUrl && (
                <a
                  href={geochange.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="seal-btn-secondary text-xs"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-[#1a3055]" />
                  <span>CODEBASE</span>
                </a>
              )}
            </div>
          </div>
        )}

        {/* CARD 3: NeuroView (6 Cols) */}
        {neuroview && (
          <div className="lg:col-span-6 woodblock-card woodblock-bar-ultramarine p-6 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-2.5 py-1 text-xs font-mono font-bold bg-[#ece5d0] text-[#1a3055] border-2 border-[#1a3055]">
                  {neuroview.category}
                </span>
                <span className="text-xs font-mono font-bold text-[#1a3055]">
                  {neuroview.date}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#1a3055] mb-2 tracking-tight">
                {neuroview.title}
              </h3>
              <p className="text-sm font-bold text-[#2a5a8c] mb-3">
                {neuroview.subtitle}
              </p>
              <p className="text-sm text-[#1a3055] font-serif leading-[1.7] mb-4 line-clamp-3">
                {neuroview.description}
              </p>

              {neuroview.images && neuroview.images[0] && (
                <div
                  onClick={() => onOpenImage(neuroview.images![0])}
                  className="mb-4 h-48 border-3 border-[#1a3055] bg-[#ece5d0] p-1.5 shadow-woodblock relative cursor-zoom-in group"
                >
                  <div className="w-full h-full border-2 border-[#1a3055] overflow-hidden relative">
                    <img
                      src={neuroview.images[0].url}
                      alt={neuroview.images[0].caption}
                      className="w-full h-full object-cover contrast-105"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-[#1a3055] text-[#f5f0e1] p-1.5 text-xs font-serif font-bold truncate">
                      {neuroview.images[0].caption}
                    </div>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-1.5 mb-6">
                {neuroview.technologies.slice(0, 5).map((t) => (
                  <span key={t} className="woodblock-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t-2 border-[#1a3055] flex items-center justify-between">
              <button onClick={() => onOpenInspector(neuroview)} className="seal-btn-primary text-xs">
                <span>VIEW SPEC</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              {neuroview.githubUrl && (
                <a href={neuroview.githubUrl} target="_blank" rel="noopener noreferrer" className="seal-btn-secondary text-xs">
                  <GithubIcon className="w-3.5 h-3.5 text-[#1a3055]" />
                </a>
              )}
            </div>
          </div>
        )}

        {/* CARD 4: SlipSense (6 Cols) */}
        {slipsense && (
          <div className="lg:col-span-6 woodblock-card woodblock-bar-vermilion p-6 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-2.5 py-1 text-xs font-mono font-bold bg-[#ece5d0] text-[#1a3055] border-2 border-[#1a3055]">
                  {slipsense.category}
                </span>
                <span className="text-xs font-mono font-bold text-[#1a3055]">
                  {slipsense.date}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#1a3055] mb-2 tracking-tight">
                {slipsense.title}
              </h3>
              <p className="text-sm font-bold text-[#d4553a] mb-3">
                {slipsense.subtitle}
              </p>
              <p className="text-sm text-[#1a3055] font-serif leading-[1.7] mb-4 line-clamp-3">
                {slipsense.description}
              </p>

              {slipsense.images && slipsense.images[0] && (
                <div
                  onClick={() => onOpenImage(slipsense.images![0])}
                  className="mb-4 h-48 border-3 border-[#1a3055] bg-[#ece5d0] p-1.5 shadow-woodblock relative cursor-zoom-in group"
                >
                  <div className="w-full h-full border-2 border-[#1a3055] overflow-hidden relative">
                    <img
                      src={slipsense.images[0].url}
                      alt={slipsense.images[0].caption}
                      className="w-full h-full object-cover contrast-105"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-[#1a3055] text-[#f5f0e1] p-1.5 text-xs font-serif font-bold truncate">
                      {slipsense.images[0].caption}
                    </div>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-1.5 mb-6">
                {slipsense.technologies.slice(0, 5).map((t) => (
                  <span key={t} className="woodblock-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t-2 border-[#1a3055] flex items-center justify-between">
              <button onClick={() => onOpenInspector(slipsense)} className="seal-btn-primary text-xs">
                <span>VIEW SPEC</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
