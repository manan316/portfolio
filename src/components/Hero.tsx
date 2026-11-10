import React from 'react';
import { PersonalInfo } from '../types/portfolio';
import { Terminal, FileText, ArrowDown, Activity, Sparkles, MapPin, ExternalLink, ShieldCheck, Cpu, Layers, Radio } from 'lucide-react';

interface HeroProps {
  personalInfo: PersonalInfo;
  onOpenTerminal: () => void;
  onOpenImage?: (image: { url: string; caption: string }) => void;
}

export const Hero: React.FC<HeroProps> = ({ personalInfo, onOpenTerminal }) => {
  return (
    <section id="hero" className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Ambient Radial Mesh Background Glows */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-40 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Bento Cell 1: Master Pitch & Headline (8 cols) */}
        <div className="lg:col-span-8 bento-card p-6 sm:p-10 flex flex-col justify-between bento-glow-cyan">
          <div>
            {/* Status Beacon */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for High-Impact Roles & Research
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-zinc-300 border border-white/10">
                <MapPin className="w-3 h-3 text-zinc-400" /> {personalInfo.location}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Architecting intelligent systems from{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">
                silicon to satellite.
              </span>
            </h1>

            {/* Bio Narrative */}
            <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed max-w-2xl mb-8">
              Hi, I'm <strong className="text-white font-semibold">{personalInfo.name}</strong>. I bridge low-level embedded Linux engineering with deep learning to build production-grade edge AI pipelines, procedural 3D digital twins, and autonomous geotechnical early-warning platforms.
            </p>

            {/* Provenance Pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1 rounded-xl text-xs font-medium bg-white/5 text-zinc-300 border border-white/10 flex items-center gap-1.5">
                🏛️ Ex-Research Intern · IIT Roorkee
              </span>
              <span className="px-3 py-1 rounded-xl text-xs font-medium bg-white/5 text-zinc-300 border border-white/10 flex items-center gap-1.5">
                📡 Ex-IoT Engineer · UniConverge
              </span>
              <span className="px-3 py-1 rounded-xl text-xs font-medium bg-white/5 text-zinc-300 border border-white/10 flex items-center gap-1.5">
                🏆 Winner · INDU X 5.0 Hackathon
              </span>
              <span className="px-3 py-1 rounded-xl text-xs font-medium bg-white/5 text-zinc-300 border border-white/10 flex items-center gap-1.5">
                🎓 University of Jammu · B.Tech AI & Math
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-white/10">
            <a href="#flagships" className="bento-btn-primary">
              <Sparkles className="w-4 h-4 text-zinc-900" />
              <span>Explore Flagships</span>
            </a>
            <a href="#lab" className="bento-btn-secondary">
              <Activity className="w-4 h-4 text-cyan-400" />
              <span>Interactive Sim Lab</span>
            </a>
            <button onClick={onOpenTerminal} className="bento-btn-secondary">
              <Terminal className="w-4 h-4 text-indigo-400" />
              <span>Terminal [~]</span>
            </button>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bento-btn-secondary"
            >
              <FileText className="w-4 h-4 text-zinc-400" />
              <span>Resume PDF</span>
            </a>
          </div>
        </div>

        {/* Bento Cell 2 & 3: Portrait & Real-Time Telemetry (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-5">
          {/* Portrait Card */}
          <div className="bento-card p-5 flex flex-col items-center text-center bento-glow-violet">
            <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-2xl overflow-hidden mb-4 border border-white/10 shadow-2xl p-1 bg-gradient-to-tr from-white/10 via-white/5 to-transparent">
              <img
                src={personalInfo.profileImage || '/images/profile.png'}
                alt={personalInfo.name}
                className="w-full h-full object-cover object-top rounded-xl"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="text-base font-semibold text-white">
              {personalInfo.name}
            </div>
            <div className="text-xs text-zinc-400 mt-0.5">
              Software Engineer & AI/ML Researcher
            </div>

            <div className="mt-4 w-full py-2 px-3 rounded-xl bg-white/5 border border-white/5 text-[11px] font-mono text-zinc-300 flex items-center justify-between">
              <span className="text-zinc-500">SYS_STATUS</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                ONLINE // OPTIMAL
              </span>
            </div>
          </div>

          {/* Real-Time Telemetry Node Card */}
          <div className="bento-card p-5 flex-1 flex flex-col justify-between bento-glow-emerald">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-medium text-zinc-400 flex items-center gap-1.5">
                <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                Live Engineering Pulse
              </span>
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">
                ACTIVE
              </span>
            </div>

            <div className="space-y-2 py-3 text-xs font-mono">
              <div className="flex justify-between items-center bg-zinc-950/40 p-2 rounded-xl border border-white/5">
                <span className="text-zinc-400">Samroli Sensor Node:</span>
                <span className="text-emerald-400 font-semibold">868 MHz LoRa // 100%</span>
              </div>
              <div className="flex justify-between items-center bg-zinc-950/40 p-2 rounded-xl border border-white/5">
                <span className="text-zinc-400">Sentinel-2 STAC Gate:</span>
                <span className="text-cyan-400 font-semibold">PASS (QA60 &lt; 5%)</span>
              </div>
              <div className="flex justify-between items-center bg-zinc-950/40 p-2 rounded-xl border border-white/5">
                <span className="text-zinc-400">Intel OpenVINO NPU:</span>
                <span className="text-violet-400 font-semibold">4.2ms / Frame</span>
              </div>
            </div>

            <div className="text-[10px] text-zinc-500 font-mono flex items-center justify-between pt-2 border-t border-white/5">
              <span>Himalayan Corridor NH-44</span>
              <span>UTC +05:30</span>
            </div>
          </div>
        </div>

        {/* Bento Cell 4: 4x Stats Row (12 cols) */}
        <div className="lg:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bento-card p-5 text-center">
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              8+
            </div>
            <div className="text-xs font-semibold text-zinc-200 mt-1">Production Systems</div>
            <div className="text-[11px] text-zinc-400 mt-0.5">Edge AI, IoT & Spatial WebGL</div>
          </div>

          <div className="bento-card p-5 text-center">
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-violet-500 bg-clip-text text-transparent">
              2
            </div>
            <div className="text-xs font-semibold text-zinc-200 mt-1">Tier-1 Labs & Internships</div>
            <div className="text-[11px] text-zinc-400 mt-0.5">IIT Roorkee & UniConverge</div>
          </div>

          <div className="bento-card p-5 text-center">
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              1st Prize
            </div>
            <div className="text-xs font-semibold text-zinc-200 mt-1">Best Presentation Award</div>
            <div className="text-[11px] text-zinc-400 mt-0.5">INDU X 5.0 Hackathon (2026)</div>
          </div>

          <div className="bento-card p-5 text-center">
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
              14-Band
            </div>
            <div className="text-xs font-semibold text-zinc-200 mt-1">Multispectral Vision</div>
            <div className="text-[11px] text-zinc-400 mt-0.5">Custom CRUNet Satellite AI</div>
          </div>
        </div>

      </div>
    </section>
  );
};
