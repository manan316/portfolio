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
    <section id="hero" className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Dynamic Ambient Background Glow Orbs */}
      <div className="absolute top-16 left-1/4 w-[420px] h-[420px] bg-cyan-500/15 rounded-full blur-[100px] -z-10 pointer-events-none animate-float" />
      <div className="absolute top-36 right-1/4 w-[460px] h-[460px] bg-indigo-500/15 rounded-full blur-[110px] -z-10 pointer-events-none animate-float-reverse" />
      <div className="absolute top-96 left-1/2 -translate-x-1/2 w-[500px] h-[350px] bg-fuchsia-500/10 rounded-full blur-[120px] -z-10 pointer-events-none animate-pulse-glow" />

      {/* Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Bento Cell 1: Master Pitch & Headline (8 cols) */}
        <div className="lg:col-span-8 bento-card p-6 sm:p-10 flex flex-col justify-between bento-glow-cyan relative overflow-hidden group">
          {/* Subtle top background gradient wash */}
          <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-cyan-500/[0.08] via-indigo-500/[0.03] to-transparent pointer-events-none" />

          <div className="relative z-10">
            {/* Status Beacon */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/25 shadow-sm shadow-emerald-500/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Available for AI/ML & Systems Roles
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 text-zinc-300 border border-white/10 hover:border-white/20 transition-colors">
                <MapPin className="w-3.5 h-3.5 text-rose-400" /> {personalInfo.location}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.08]">
              Architecting intelligent systems from{' '}
              <span className="bg-gradient-to-r from-cyan-300 via-indigo-300 to-fuchsia-400 bg-clip-text text-transparent animate-gradient-text">
                silicon to satellite.
              </span>
            </h1>

            {/* Bio Narrative */}
            <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed max-w-2xl mb-8">
              Hi, I'm <strong className="text-white font-semibold">{personalInfo.name}</strong>. I bridge low-level embedded Linux engineering with deep learning to build production-grade edge AI inference pipelines, procedural 3D digital twins, and autonomous geotechnical early-warning platforms.
            </p>

            {/* Provenance Pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1.5 rounded-xl text-xs font-medium bg-white/5 text-zinc-200 border border-white/10 hover:border-cyan-400/40 hover:bg-cyan-500/5 transition-all flex items-center gap-1.5">
                🏛️ Ex-Research Intern · IIT Roorkee
              </span>
              <span className="px-3 py-1.5 rounded-xl text-xs font-medium bg-white/5 text-zinc-200 border border-white/10 hover:border-indigo-400/40 hover:bg-indigo-500/5 transition-all flex items-center gap-1.5">
                📡 Ex-IoT Engineer · UniConverge
              </span>
              <span className="px-3 py-1.5 rounded-xl text-xs font-medium bg-white/5 text-zinc-200 border border-white/10 hover:border-amber-400/40 hover:bg-amber-500/5 transition-all flex items-center gap-1.5">
                🏆 Winner · INDU X 5.0 Hackathon
              </span>
              <span className="px-3 py-1.5 rounded-xl text-xs font-medium bg-white/5 text-zinc-200 border border-white/10 hover:border-emerald-400/40 hover:bg-emerald-500/5 transition-all flex items-center gap-1.5">
                🎓 University of Jammu · B.Tech AI & Math
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="relative z-10 flex flex-wrap items-center gap-3 pt-6 border-t border-white/10">
            <a href="#flagships" className="bento-btn-primary group">
              <Sparkles className="w-4 h-4 text-zinc-950 group-hover:rotate-12 transition-transform" />
              <span>Explore Flagships</span>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-950 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#journey" className="bento-btn-secondary">
              <Briefcase className="w-4 h-4 text-cyan-400" />
              <span>Experience & Labs</span>
            </a>
            <button onClick={onOpenTerminal} className="bento-btn-secondary group">
              <Terminal className="w-4 h-4 text-indigo-400 group-hover:rotate-12 transition-transform" />
              <span>Terminal [~]</span>
            </button>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bento-btn-secondary"
            >
              <FileText className="w-4 h-4 text-rose-400" />
              <span>Resume PDF</span>
            </a>
          </div>
        </div>

        {/* Bento Cell 2 & 3: Portrait & Real-Time Telemetry (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-5">
          {/* Portrait Card */}
          <div className="bento-card p-5 flex flex-col items-center text-center bento-glow-violet relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 rounded-full blur-2xl pointer-events-none" />

            {/* Glowing gradient frame around photo */}
            <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-2xl p-[2px] bg-gradient-to-tr from-cyan-400 via-indigo-500 to-fuchsia-500 shadow-xl shadow-indigo-500/20 mb-4 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-zinc-950 relative">
                <img
                  src={personalInfo.profileImage || '/images/profile.png'}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            <div className="text-base font-bold text-white tracking-tight">
              {personalInfo.name}
            </div>
            <div className="text-xs text-zinc-400 mt-0.5">
              Software Engineer & AI/ML Systems Researcher
            </div>

            <div className="mt-4 w-full py-2 px-3 rounded-xl bg-white/5 border border-white/5 text-[11px] font-mono text-zinc-300 flex items-center justify-between">
              <span className="text-zinc-500">AVAILABILITY</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                ACTIVE // OPEN TO ROLES
              </span>
            </div>
          </div>

          {/* Real-Time Telemetry Node Card */}
          <div className="bento-card p-5 flex-1 flex flex-col justify-between bento-glow-emerald relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-semibold text-zinc-300 flex items-center gap-1.5">
                  <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                  Engineering Telemetry Pulse
                </span>
                <span className="text-[10px] font-mono font-semibold text-cyan-300 bg-cyan-500/15 px-2 py-0.5 rounded-full border border-cyan-500/30">
                  ACTIVE
                </span>
              </div>

              <div className="space-y-2 py-3 text-xs font-mono">
                <div className="flex justify-between items-center bg-zinc-950/60 p-2.5 rounded-xl border border-white/5 hover:border-emerald-500/30 transition-colors">
                  <span className="text-zinc-400">Samroli Sensor Node:</span>
                  <span className="text-emerald-400 font-semibold">868 MHz LoRa // 100%</span>
                </div>
                <div className="flex justify-between items-center bg-zinc-950/60 p-2.5 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-colors">
                  <span className="text-zinc-400">Sentinel-2 STAC Gate:</span>
                  <span className="text-cyan-400 font-semibold">PASS (QA60 &lt; 5%)</span>
                </div>
                <div className="flex justify-between items-center bg-zinc-950/60 p-2.5 rounded-xl border border-white/5 hover:border-violet-500/30 transition-colors">
                  <span className="text-zinc-400">Intel OpenVINO NPU:</span>
                  <span className="text-violet-400 font-semibold">4.2ms / Frame</span>
                </div>
              </div>
            </div>

            <div className="text-[10px] text-zinc-500 font-mono flex items-center justify-between pt-2 border-t border-white/5">
              <span>Himalayan Corridor NH-44</span>
              <span className="text-zinc-400">UTC +05:30</span>
            </div>
          </div>
        </div>

        {/* Bento Cell 4: 4x Stats Row (12 cols) */}
        <div className="lg:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bento-card p-5 text-center bento-glow-cyan group">
            <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
              8+
            </div>
            <div className="text-xs font-semibold text-zinc-100 mt-1">Production Systems</div>
            <div className="text-[11px] text-zinc-400 mt-0.5">Edge AI, IoT & Spatial WebGL</div>
          </div>

          <div className="bento-card p-5 text-center bento-glow-violet group">
            <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-indigo-300 to-violet-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
              2
            </div>
            <div className="text-xs font-semibold text-zinc-100 mt-1">Tier-1 Labs & Internships</div>
            <div className="text-[11px] text-zinc-400 mt-0.5">IIT Roorkee & UniConverge</div>
          </div>

          <div className="bento-card p-5 text-center bento-glow-amber group">
            <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-amber-300 to-orange-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
              1st Prize
            </div>
            <div className="text-xs font-semibold text-zinc-100 mt-1">Best Presentation Award</div>
            <div className="text-[11px] text-zinc-400 mt-0.5">INDU X 5.0 Hackathon (2026)</div>
          </div>

          <div className="bento-card p-5 text-center bento-glow-emerald group">
            <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-emerald-300 to-teal-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
              14-Band
            </div>
            <div className="text-xs font-semibold text-zinc-100 mt-1">Multispectral Vision</div>
            <div className="text-[11px] text-zinc-400 mt-0.5">Custom CRUNet Satellite AI</div>
          </div>
        </div>

      </div>
    </section>
  );
};
