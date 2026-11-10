import React from 'react';
import { PersonalInfo } from '../types/portfolio';
import { Terminal, FileText, ArrowRight, Sparkles, MapPin, Radio, Briefcase, Trophy, Cpu, Layers } from 'lucide-react';

interface HeroProps {
  personalInfo: PersonalInfo;
  onOpenTerminal: () => void;
  onOpenImage?: (image: { url: string; caption: string }) => void;
}

export const Hero: React.FC<HeroProps> = ({ personalInfo, onOpenTerminal }) => {
  return (
    <section id="hero" className="relative pt-28 sm:pt-36 pb-16 px-4 sm:px-8 lg:px-12 2xl:px-16 w-full max-w-[1720px] mx-auto">
      {/* Dynamic Ambient Background Glow Orbs (Light Mode) */}
      <div className="absolute top-16 left-1/4 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[100px] -z-10 pointer-events-none animate-float" />
      <div className="absolute top-36 right-1/4 w-[540px] h-[540px] bg-indigo-400/10 rounded-full blur-[110px] -z-10 pointer-events-none animate-float-reverse" />
      <div className="absolute top-96 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-fuchsia-400/10 rounded-full blur-[120px] -z-10 pointer-events-none animate-pulse-glow" />

      {/* Bento Grid - Full Width Spanning */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Bento Cell 1: Master Pitch & Headline (8 cols on lg, 7 cols on 2xl) */}
        <div className="lg:col-span-8 2xl:col-span-8 bento-card p-6 sm:p-10 lg:p-12 flex flex-col justify-between bento-glow-cyan relative overflow-hidden group">
          {/* Subtle top background gradient wash */}
          <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-cyan-500/[0.05] via-indigo-500/[0.02] to-transparent pointer-events-none" />

          <div className="relative z-10">
            {/* Status Beacon */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-300/80 shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                </span>
                Available for AI/ML & Systems Roles
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200/90 hover:bg-slate-200/70 transition-colors">
                <MapPin className="w-3.5 h-3.5 text-rose-500" /> {personalInfo.location}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.08]">
              Architecting intelligent systems from{' '}
              <span className="bg-gradient-to-r from-cyan-600 via-indigo-600 to-fuchsia-600 bg-clip-text text-transparent animate-gradient-text">
                silicon to satellite.
              </span>
            </h1>

            {/* Bio Narrative */}
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-3xl mb-8">
              Hi, I'm <strong className="text-slate-900 font-bold">{personalInfo.name}</strong>. I bridge low-level embedded Linux engineering with deep learning to build production-grade edge AI inference pipelines, procedural 3D digital twins, and autonomous geotechnical early-warning platforms.
            </p>

            {/* Provenance Pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-100/90 text-slate-800 border border-slate-200 hover:border-cyan-500/40 hover:bg-cyan-50/50 transition-all flex items-center gap-1.5">
                🏛️ Ex-Research Intern · IIT Roorkee
              </span>
              <span className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-100/90 text-slate-800 border border-slate-200 hover:border-indigo-500/40 hover:bg-indigo-50/50 transition-all flex items-center gap-1.5">
                📡 Ex-IoT Engineer · UniConverge
              </span>
              <span className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-100/90 text-slate-800 border border-slate-200 hover:border-amber-500/40 hover:bg-amber-50/50 transition-all flex items-center gap-1.5">
                🏆 Winner · INDU X 5.0 Hackathon
              </span>
              <span className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-100/90 text-slate-800 border border-slate-200 hover:border-emerald-500/40 hover:bg-emerald-50/50 transition-all flex items-center gap-1.5">
                🎓 University of Jammu · B.Tech AI & Math
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="relative z-10 flex flex-wrap items-center gap-3 pt-6 border-t border-slate-200/90">
            <a href="#flagships" className="bento-btn-primary group">
              <Sparkles className="w-4 h-4 text-cyan-300 group-hover:rotate-12 transition-transform" />
              <span>Explore Flagships</span>
              <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#journey" className="bento-btn-secondary">
              <Briefcase className="w-4 h-4 text-cyan-600" />
              <span>Experience & Labs</span>
            </a>
            <button onClick={onOpenTerminal} className="bento-btn-secondary group">
              <Terminal className="w-4 h-4 text-indigo-600 group-hover:rotate-12 transition-transform" />
              <span>Terminal [~]</span>
            </button>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bento-btn-secondary"
            >
              <FileText className="w-4 h-4 text-rose-600" />
              <span>Resume PDF</span>
            </a>
          </div>
        </div>

        {/* Bento Cell 2 & 3: Portrait & Real-Time Telemetry (4 cols on lg) */}
        <div className="lg:col-span-4 2xl:col-span-4 flex flex-col gap-6">
          {/* Portrait Card */}
          <div className="bento-card p-6 flex flex-col items-center text-center bento-glow-violet relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-36 h-36 bg-violet-400/10 rounded-full blur-2xl pointer-events-none" />

            {/* Glowing gradient frame around photo */}
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl p-[3px] bg-gradient-to-tr from-cyan-500 via-indigo-600 to-fuchsia-600 shadow-xl shadow-indigo-500/15 mb-4 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-100 relative">
                <img
                  src={personalInfo.profileImage || '/images/profile.png'}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="text-lg font-bold text-slate-900 tracking-tight">
              {personalInfo.name}
            </div>
            <div className="text-xs text-slate-600 mt-0.5 font-medium">
              Software Engineer & AI/ML Systems Researcher
            </div>

            <div className="mt-4 w-full py-2.5 px-3 rounded-xl bg-slate-50 border border-slate-200/90 text-[11px] font-mono text-slate-700 flex items-center justify-between shadow-xs">
              <span className="text-slate-500 font-semibold">AVAILABILITY</span>
              <span className="text-emerald-700 font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                ACTIVE // OPEN TO ROLES
              </span>
            </div>
          </div>

          {/* Real-Time Telemetry Node Card */}
          <div className="bento-card p-6 flex-1 flex flex-col justify-between bento-glow-emerald relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-36 h-36 bg-cyan-400/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
                <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <Radio className="w-3.5 h-3.5 text-cyan-600 animate-pulse" />
                  Engineering Telemetry Pulse
                </span>
                <span className="text-[10px] font-mono font-bold text-cyan-800 bg-cyan-100 px-2 py-0.5 rounded-full border border-cyan-300">
                  ACTIVE
                </span>
              </div>

              <div className="space-y-2.5 py-4 text-xs font-mono">
                <div className="flex justify-between items-center bg-slate-50 p-2.5 rounded-xl border border-slate-200/80 hover:border-emerald-500/40 transition-colors">
                  <span className="text-slate-600">Samroli Sensor Node:</span>
                  <span className="text-emerald-700 font-bold">868 MHz LoRa // 100%</span>
                </div>
                <div className="flex justify-between items-center bg-slate-50 p-2.5 rounded-xl border border-slate-200/80 hover:border-cyan-500/40 transition-colors">
                  <span className="text-slate-600">Sentinel-2 STAC Gate:</span>
                  <span className="text-cyan-700 font-bold">PASS (QA60 &lt; 5%)</span>
                </div>
                <div className="flex justify-between items-center bg-slate-50 p-2.5 rounded-xl border border-slate-200/80 hover:border-violet-500/40 transition-colors">
                  <span className="text-slate-600">Intel OpenVINO NPU:</span>
                  <span className="text-violet-700 font-bold">4.2ms / Frame</span>
                </div>
              </div>
            </div>

            <div className="text-[10px] text-slate-500 font-mono flex items-center justify-between pt-2 border-t border-slate-200/80">
              <span>Himalayan Corridor NH-44</span>
              <span className="text-slate-600 font-semibold">UTC +05:30</span>
            </div>
          </div>
        </div>

        {/* Bento Cell 4: 4x Stats Row (12 cols) */}
        <div className="lg:col-span-12 grid grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bento-card p-6 text-center bento-glow-cyan group">
            <div className="text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
              8+
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-900 mt-2">Production Systems</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Edge AI, IoT & Spatial WebGL</div>
          </div>

          <div className="bento-card p-6 text-center bento-glow-violet group">
            <div className="text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
              2
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-900 mt-2">Tier-1 Labs & Internships</div>
            <div className="text-[11px] text-slate-500 mt-0.5">IIT Roorkee & UniConverge</div>
          </div>

          <div className="bento-card p-6 text-center bento-glow-amber group">
            <div className="text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
              1st Prize
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-900 mt-2">Best Presentation Award</div>
            <div className="text-[11px] text-slate-500 mt-0.5">INDU X 5.0 Hackathon (2026)</div>
          </div>

          <div className="bento-card p-6 text-center bento-glow-emerald group">
            <div className="text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
              14-Band
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-900 mt-2">Multispectral Vision</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Custom CRUNet Satellite AI</div>
          </div>
        </div>

      </div>
    </section>
  );
};
