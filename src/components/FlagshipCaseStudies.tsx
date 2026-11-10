import React, { useState } from 'react';
import { ProjectItem } from '../types/portfolio';
import { ExternalLink, ZoomIn, Cpu, Layers, Sparkles, ArrowRight, CheckCircle2, Trophy, ShieldAlert, Activity } from 'lucide-react';
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
    <section id="flagships" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="bento-badge text-cyan-400 bg-cyan-500/10 border-cyan-500/20">
            [02 // FLAGSHIP SYSTEMS]
          </span>
          <span className="text-xs text-zinc-400 font-mono">
            CORE ARCHITECTURAL INNOVATIONS
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
          Featured Engineering Blueprints
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
          Deep-tech platforms developed under Project SAVERA, international hackathon winners, and high-throughput spatial telemetry architectures.
        </p>
      </div>

      {/* Flagships Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* BENTO CARD 1: OJASEWS (7 Cols) */}
        {ojasews && (
          <div className="lg:col-span-7 bento-card p-6 sm:p-8 flex flex-col justify-between bento-glow-cyan">
            <div>
              {/* Badges */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/20">
                    SAVERA Flagship System
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-white/5 text-zinc-300 border border-white/10">
                    {ojasews.category}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-zinc-500">
                  {ojasews.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
                {ojasews.title.split('—')[0]}
              </h3>
              <p className="text-xs sm:text-sm text-cyan-400/90 font-medium mb-4">
                {ojasews.subtitle}
              </p>

              {/* Description */}
              <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed mb-6 line-clamp-3">
                {ojasews.description}
              </p>

              {/* Screenshot Preview Stage */}
              {ojasews.images && ojasews.images.length > 0 && (
                <div className="mb-6 rounded-2xl overflow-hidden border border-white/10 bg-zinc-950/60 p-2 relative group/img">
                  <div
                    onClick={() => onOpenImage(ojasews.images![ojasewsImgIdx])}
                    className="h-56 sm:h-64 rounded-xl overflow-hidden relative cursor-zoom-in"
                  >
                    <img
                      src={ojasews.images[ojasewsImgIdx].url}
                      alt={ojasews.images[ojasewsImgIdx].caption}
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                      <p className="text-xs font-medium text-white truncate flex items-center justify-between w-full">
                        <span>{ojasews.images[ojasewsImgIdx].caption}</span>
                        <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-md flex items-center gap-1">
                          <ZoomIn className="w-3 h-3" /> Enlarge
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Thumbnail Row */}
                  <div className="flex gap-2 mt-2 pt-2 border-t border-white/5">
                    {ojasews.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setOjasewsImgIdx(idx)}
                        className={`h-12 w-20 rounded-lg overflow-hidden border transition-all ${
                          ojasewsImgIdx === idx
                            ? 'border-cyan-400 ring-2 ring-cyan-400/30'
                            : 'border-white/10 opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img src={img.url} alt={img.caption} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Engineering Highlights */}
              <div className="space-y-2 mb-6 text-xs text-zinc-300">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Procedural Three.js 3D Himalayan digital twin with dynamic slope shader heatmaps.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Dual-track risk arbiter: Mohr-Coulomb physics heuristic + Random Forest classifier.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Sub-second mobile push dispatch via ntfy.sh with priority lock-screen bypass.</span>
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {ojasews.technologies.slice(0, 6).map((t) => (
                  <span key={t} className="px-2.5 py-0.5 rounded-lg text-[11px] font-mono bg-white/5 text-zinc-300 border border-white/5">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Strip */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
              <button
                onClick={() => onOpenInspector(ojasews)}
                className="bento-btn-primary text-xs"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Full Architectural Spec</span>
              </button>
              {ojasews.githubUrl && (
                <a
                  href={ojasews.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bento-btn-secondary text-xs"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Codebase</span>
                </a>
              )}
            </div>
          </div>
        )}

        {/* BENTO CARD 2: GeoChange AI (5 Cols) */}
        {geochange && (
          <div className="lg:col-span-5 bento-card p-6 sm:p-8 flex flex-col justify-between bento-glow-emerald">
            <div>
              {/* Badges */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/20 flex items-center gap-1">
                  <Trophy className="w-3 h-3 text-amber-400" /> Best Presentation Award
                </span>
                <span className="text-[11px] font-mono text-zinc-500">
                  {geochange.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
                {geochange.title.split('—')[0]}
              </h3>
              <p className="text-xs sm:text-sm text-emerald-400/90 font-medium mb-4">
                {geochange.subtitle}
              </p>

              {/* Description */}
              <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed mb-6 line-clamp-3">
                {geochange.description}
              </p>

              {/* Image Preview */}
              {geochange.images && geochange.images.length > 0 && (
                <div className="mb-6 rounded-2xl overflow-hidden border border-white/10 bg-zinc-950/60 p-2 relative group/geo">
                  <div
                    onClick={() => onOpenImage(geochange.images![geochangeImgIdx])}
                    className="h-48 sm:h-56 rounded-xl overflow-hidden relative cursor-zoom-in"
                  >
                    <img
                      src={geochange.images[geochangeImgIdx].url}
                      alt={geochange.images[geochangeImgIdx].caption}
                      className="w-full h-full object-cover group-hover/geo:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                      <p className="text-xs font-medium text-white truncate flex items-center justify-between w-full">
                        <span>{geochange.images[geochangeImgIdx].caption}</span>
                        <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-md flex items-center gap-1">
                          <ZoomIn className="w-3 h-3" /> Zoom
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-2 pt-2 border-t border-white/5">
                    {geochange.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setGeochangeImgIdx(idx)}
                        className={`h-10 w-16 rounded-lg overflow-hidden border transition-all ${
                          geochangeImgIdx === idx
                            ? 'border-emerald-400 ring-2 ring-emerald-400/30'
                            : 'border-white/10 opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img src={img.url} alt={img.caption} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Bullet Highlights */}
              <div className="space-y-2 mb-6 text-xs text-zinc-300">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>STAC Data Readiness Gate with QA60 cloud mask at 10m Sentinel-2.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>NASA/ORNL Aboveground Biomass Carbon accounting in lost tonnes CO2e.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Landsat 8/9 daytime thermal infrared coupling quantifying urban Δ°C.</span>
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {geochange.technologies.slice(0, 5).map((t) => (
                  <span key={t} className="px-2.5 py-0.5 rounded-lg text-[11px] font-mono bg-white/5 text-zinc-300 border border-white/5">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Strip */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
              <button
                onClick={() => onOpenInspector(geochange)}
                className="bento-btn-primary text-xs"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Full Blueprint Spec</span>
              </button>
              {geochange.githubUrl && (
                <a
                  href={geochange.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bento-btn-secondary text-xs"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Codebase</span>
                </a>
              )}
            </div>
          </div>
        )}

        {/* BENTO CARD 3: NeuroView (6 Cols) */}
        {neuroview && (
          <div className="lg:col-span-6 bento-card p-6 sm:p-8 flex flex-col justify-between bento-glow-violet">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-violet-500/10 text-violet-400 border border-violet-500/20">
                  {neuroview.category}
                </span>
                <span className="text-[11px] font-mono text-zinc-500">
                  {neuroview.date}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
                {neuroview.title}
              </h3>
              <p className="text-xs sm:text-sm text-violet-400/90 font-medium mb-3">
                {neuroview.subtitle}
              </p>
              <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed mb-4 line-clamp-3">
                {neuroview.description}
              </p>

              {neuroview.images && neuroview.images[0] && (
                <div
                  onClick={() => onOpenImage(neuroview.images![0])}
                  className="mb-4 h-40 rounded-xl overflow-hidden border border-white/10 relative cursor-pointer group/nv"
                >
                  <img
                    src={neuroview.images[0].url}
                    alt={neuroview.images[0].caption}
                    className="w-full h-full object-cover group-hover/nv:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2.5">
                    <span className="text-xs text-white truncate font-medium">
                      {neuroview.images[0].caption}
                    </span>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-1.5 mb-6">
                {neuroview.technologies.slice(0, 5).map((t) => (
                  <span key={t} className="px-2.5 py-0.5 rounded-lg text-[11px] font-mono bg-white/5 text-zinc-300 border border-white/5">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <button onClick={() => onOpenInspector(neuroview)} className="bento-btn-primary text-xs">
                <span>View Blueprint Spec</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              {neuroview.githubUrl && (
                <a href={neuroview.githubUrl} target="_blank" rel="noopener noreferrer" className="bento-btn-secondary text-xs">
                  <GithubIcon className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        )}

        {/* BENTO CARD 4: SlipSense (6 Cols) */}
        {slipsense && (
          <div className="lg:col-span-6 bento-card p-6 sm:p-8 flex flex-col justify-between bento-glow-cyan">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  {slipsense.category}
                </span>
                <span className="text-[11px] font-mono text-zinc-500">
                  {slipsense.date}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
                {slipsense.title}
              </h3>
              <p className="text-xs sm:text-sm text-cyan-400/90 font-medium mb-3">
                {slipsense.subtitle}
              </p>
              <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed mb-4 line-clamp-3">
                {slipsense.description}
              </p>

              {slipsense.images && slipsense.images[0] && (
                <div
                  onClick={() => onOpenImage(slipsense.images![0])}
                  className="mb-4 h-40 rounded-xl overflow-hidden border border-white/10 relative cursor-pointer group/ss"
                >
                  <img
                    src={slipsense.images[0].url}
                    alt={slipsense.images[0].caption}
                    className="w-full h-full object-cover group-hover/ss:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2.5">
                    <span className="text-xs text-white truncate font-medium">
                      {slipsense.images[0].caption}
                    </span>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-1.5 mb-6">
                {slipsense.technologies.slice(0, 5).map((t) => (
                  <span key={t} className="px-2.5 py-0.5 rounded-lg text-[11px] font-mono bg-white/5 text-zinc-300 border border-white/5">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <button onClick={() => onOpenInspector(slipsense)} className="bento-btn-primary text-xs">
                <span>View Blueprint Spec</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
