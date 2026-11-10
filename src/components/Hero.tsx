import React from 'react';
import { PersonalInfo } from '../types/portfolio';
import { ArrowRight, ArrowUpRight, Terminal } from 'lucide-react';

interface HeroProps {
  personalInfo: PersonalInfo;
  onOpenTerminal: () => void;
  onOpenImage?: (image: { url: string; caption: string }) => void;
}

export const Hero: React.FC<HeroProps> = ({ personalInfo, onOpenTerminal, onOpenImage }) => {
  return (
    <section id="hero" className="pt-24 sm:pt-32 lg:pt-40 px-4 sm:px-8 max-w-[1600px] mx-auto">
      {/* Monospace Metadata Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-6 border-b border-[#0a0a0a]/15 text-[#71717a] font-mono text-[11px] tracking-[0.2em] uppercase">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-[#ff4d00] inline-block"></span>
          <span className="text-[#0a0a0a] font-medium">01 // MANAN SHARMA</span>
          <span>· SOFTWARE ENGINEER & AI/ML RESEARCHER</span>
        </div>
        <div className="flex items-center gap-4">
          <span>JAMMU & KASHMIR, INDIA</span>
          <span className="text-[#0a0a0a] font-medium">SYS_ONLINE // 2026</span>
        </div>
      </div>

      {/* Extreme Fluid Headline — The Type IS the Layout */}
      <div className="pt-10 sm:pt-16 pb-12 sm:pb-20">
        <h1 className="fluid-display text-[#0a0a0a] uppercase tracking-[-0.05em] leading-[0.85] font-black break-words">
          ARCHITECTING
        </h1>
        <div className="fluid-display text-[#0a0a0a] uppercase tracking-[-0.05em] leading-[0.85] font-black break-words mt-1 sm:mt-2">
          SYSTEMS FROM
        </div>
        <div className="fluid-display text-[#0a0a0a] uppercase tracking-[-0.05em] leading-[0.85] font-black break-words mt-1 sm:mt-2">
          <span className="text-[#ff4d00]">SILICON</span> TO{' '}
          <span className="text-stroke">SATELLITE.</span>
        </div>
      </div>

      {/* Main Statement & Receding Imagery Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pt-8 pb-16 border-t border-[#0a0a0a]/15 items-start">
        {/* Left Column (8 cols): Body statement & provenance */}
        <div className="lg:col-span-8 space-y-8">
          <p className="text-xl sm:text-2xl text-[#0a0a0a] font-normal leading-[1.4] max-w-3xl">
            I bridge low-level embedded Linux kernel firmware with deep learning to build production-grade edge AI inference pipelines, procedural 3D digital twins, and autonomous geotechnical early-warning platforms.
          </p>

          {/* Monospace Provenance Roster */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 font-mono text-[11px] tracking-[0.18em] uppercase text-[#71717a]">
            <div className="p-3 border border-[#0a0a0a]/15 flex items-center justify-between">
              <span className="text-[#0a0a0a] font-medium">[01] EX-RESEARCH INTERN</span>
              <span>IIT ROORKEE</span>
            </div>
            <div className="p-3 border border-[#0a0a0a]/15 flex items-center justify-between">
              <span className="text-[#0a0a0a] font-medium">[02] EX-EMBEDDED & IOT INTERN</span>
              <span>UNICONVERGE</span>
            </div>
            <div className="p-3 border border-[#0a0a0a]/15 flex items-center justify-between">
              <span className="text-[#ff4d00] font-medium">[03] BEST PRESENTATION AWARD</span>
              <span>INDU X 5.0 HACKATHON</span>
            </div>
            <div className="p-3 border border-[#0a0a0a]/15 flex items-center justify-between">
              <span className="text-[#0a0a0a] font-medium">[04] B.TECH CANDIDATE</span>
              <span>UNIVERSITY OF JAMMU</span>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a href="#flagships" className="btn-orange">
              <span>EXPLORE BLUEPRINTS</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <span>RESUME [PDF]</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <button
              onClick={onOpenTerminal}
              className="px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-[#71717a] hover:text-[#0a0a0a] border border-transparent hover:border-[#0a0a0a]/15 transition-all flex items-center gap-2"
            >
              <Terminal className="w-3.5 h-3.5 text-[#ff4d00]" />
              <span>TERMINAL [^K]</span>
            </button>
          </div>
        </div>

        {/* Right Column (4 cols): Single small receding unbordered accent portrait & telemetry */}
        <div className="lg:col-span-4 space-y-6">
          <div className="flex flex-col sm:flex-row lg:flex-col gap-6 items-start">
            {/* Small unbordered portrait - imagery recedes to accent */}
            <div
              onClick={() =>
                onOpenImage &&
                onOpenImage({
                  url: personalInfo.profileImage || '/images/profile.png',
                  caption: 'Manan Sharma — AI & Systems Researcher'
                })
              }
              className="w-44 h-52 shrink-0 bg-[#e4e4e7] cursor-pointer overflow-hidden group"
            >
              <img
                src={personalInfo.profileImage || '/images/profile.png'}
                alt={personalInfo.name}
                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-300"
              />
            </div>

            {/* Receding Monospace Telemetry */}
            <div className="flex-1 w-full font-mono text-[11px] tracking-[0.18em] uppercase space-y-2 text-[#71717a]">
              <div className="text-[#0a0a0a] font-medium pb-1 border-b border-[#0a0a0a]/15 flex items-center justify-between">
                <span>ACTIVE TELEMETRY</span>
                <span className="text-[#ff4d00]">● ONLINE</span>
              </div>
              <div className="flex justify-between">
                <span>FLAGSHIP</span>
                <span className="text-[#0a0a0a]">SAVERA OJASEWS</span>
              </div>
              <div className="flex justify-between">
                <span>RADAR SENSOR</span>
                <span className="text-[#0a0a0a]">868 MHZ LORAWAN</span>
              </div>
              <div className="flex justify-between">
                <span>SATELLITE ACCURACY</span>
                <span className="text-[#0a0a0a]">QA60 CLOUD GATING</span>
              </div>
              <div className="flex justify-between">
                <span>NPU ACCELERATION</span>
                <span className="text-[#0a0a0a]">INTEL OPENVINO IR</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Extreme Typographic Statistics Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-t border-[#0a0a0a]/15 divide-y md:divide-y-0 md:divide-x divide-[#0a0a0a]/15">
        <div className="py-8 pr-6">
          <div className="text-5xl sm:text-7xl lg:text-8xl font-black text-[#0a0a0a] tracking-tight leading-none">
            8+
          </div>
          <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#71717a] mt-3">
            PRODUCTION BUILDS
          </div>
        </div>
        <div className="py-8 sm:px-6">
          <div className="text-5xl sm:text-7xl lg:text-8xl font-black text-[#0a0a0a] tracking-tight leading-none">
            02
          </div>
          <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#71717a] mt-3">
            TIER-1 RESEARCH LABS
          </div>
        </div>
        <div className="py-8 sm:px-6">
          <div className="text-5xl sm:text-7xl lg:text-8xl font-black text-[#ff4d00] tracking-tight leading-none">
            BEST
          </div>
          <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#71717a] mt-3">
            PRESENTATION AWARD (INDU X 5.0)
          </div>
        </div>
        <div className="py-8 pl-6">
          <div className="text-5xl sm:text-7xl lg:text-8xl font-black text-[#0a0a0a] tracking-tight leading-none">
            14B
          </div>
          <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#71717a] mt-3">
            MULTISPECTRAL SENSING
          </div>
        </div>
      </div>
    </section>
  );
};
