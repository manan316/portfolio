import React from 'react';
import { PersonalInfo } from '../types/portfolio';
import { Terminal, FileText, ArrowRight, Sparkles, MapPin, Radio, Briefcase } from 'lucide-react';

interface HeroProps {
  personalInfo: PersonalInfo;
  onOpenTerminal: () => void;
  onOpenImage?: (image: { url: string; caption: string }) => void;
}

export const Hero: React.FC<HeroProps> = ({ personalInfo, onOpenTerminal }) => {
  return (
    <section id="hero" className="relative pt-28 sm:pt-36 pb-12 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
      {/* Hokusai Wave Decorative Rule */}
      <div className="wave-divider mb-8" />

      {/* Master Woodblock Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
        
        {/* Cell 1: Master Pitch Woodblock (8 cols) */}
        <div className="lg:col-span-8 woodblock-card woodblock-bar-vermilion p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
          <div>
            {/* Cartouche & Location Stamp */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="cartouche-label">
                [巻頭 // PRELUDE] AVAILABLE FOR ROLES
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold font-serif bg-[#ece5d0] text-[#1a3055] border-2 border-[#1a3055] shadow-woodblock-sm">
                <MapPin className="w-3.5 h-3.5 text-[#d4553a]" /> {personalInfo.location}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1a3055] mb-6 leading-[1.18]">
              Architecting intelligent systems from{' '}
              <span className="text-[#d4553a] underline decoration-[#c9a227] decoration-4 underline-offset-8">
                silicon to satellite.
              </span>
            </h1>

            {/* Bio Narrative */}
            <p className="text-base sm:text-lg text-[#1a3055] font-serif leading-[1.7] max-w-3xl mb-8">
              I am <strong className="font-bold underline decoration-[#d4553a] decoration-2 underline-offset-4">{personalInfo.name}</strong>. I bridge low-level embedded Linux engineering with deep learning to build production-grade edge AI inference pipelines, procedural 3D digital twins, and autonomous geotechnical early-warning platforms.
            </p>

            {/* Provenance Blocks */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              <span className="px-3.5 py-1.5 text-xs font-bold bg-[#ece5d0] text-[#1a3055] border-2 border-[#1a3055] shadow-woodblock-sm flex items-center gap-1.5">
                🏛️ Ex-Research Intern · IIT Roorkee
              </span>
              <span className="px-3.5 py-1.5 text-xs font-bold bg-[#ece5d0] text-[#1a3055] border-2 border-[#1a3055] shadow-woodblock-sm flex items-center gap-1.5">
                📡 Ex-IoT Engineer · UniConverge
              </span>
              <span className="px-3.5 py-1.5 text-xs font-bold bg-[#ece5d0] text-[#1a3055] border-2 border-[#1a3055] shadow-woodblock-sm flex items-center gap-1.5">
                🏆 Winner · INDU X 5.0 Hackathon
              </span>
              <span className="px-3.5 py-1.5 text-xs font-bold bg-[#ece5d0] text-[#1a3055] border-2 border-[#1a3055] shadow-woodblock-sm flex items-center gap-1.5">
                🎓 University of Jammu · B.Tech AI & Math
              </span>
            </div>
          </div>

          {/* Action Seal Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-6 border-t-2 border-[#1a3055]">
            <a href="#flagships" className="seal-btn-primary">
              <Sparkles className="w-4 h-4 text-[#c9a227]" />
              <span>EXPLORE FLAGSHIPS</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#journey" className="seal-btn-secondary">
              <Briefcase className="w-4 h-4 text-[#2a5a8c]" />
              <span>CHRONICLE</span>
            </a>
            <button onClick={onOpenTerminal} className="seal-btn-secondary">
              <Terminal className="w-4 h-4 text-[#d4553a]" />
              <span>TERMINAL [~]</span>
            </button>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="seal-btn-secondary"
            >
              <FileText className="w-4 h-4 text-[#c9a227]" />
              <span>RESUME PDF</span>
            </a>
          </div>
        </div>

        {/* Cell 2 & 3: Portrait & Telemetry (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Portrait Woodblock Card */}
          <div className="woodblock-card woodblock-bar-gold p-6 flex flex-col items-center text-center">
            {/* Woodcut Portrait Frame */}
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 border-3 border-[#1a3055] p-2 bg-[#ece5d0] shadow-woodblock mb-4">
              <div className="w-full h-full border-2 border-[#d4553a] overflow-hidden bg-[#f5f0e1]">
                <img
                  src={personalInfo.profileImage || '/images/profile.png'}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top contrast-110"
                />
              </div>
              {/* Corner Hanko Stamp */}
              <div className="absolute -bottom-2 -right-2 hanko-seal text-xs font-black shadow-woodblock-sm">
                印
              </div>
            </div>

            <div className="text-xl font-black text-[#1a3055] tracking-wide mt-1">
              {personalInfo.name}
            </div>
            <div className="text-xs text-[#2a5a8c] font-bold tracking-[0.12em] uppercase mt-1">
              Software Engineer & AI/ML Systems
            </div>

            <div className="mt-4 w-full py-2.5 px-3 bg-[#1a3055] text-[#f5f0e1] border-2 border-[#1a3055] text-xs font-mono font-bold flex items-center justify-between shadow-woodblock-sm">
              <span className="text-[#c9a227] tracking-wider">AVAILABILITY</span>
              <span className="text-[#f5f0e1] flex items-center gap-1.5">
                <span className="w-2 h-2 bg-[#747800] border border-[#f5f0e1]" />
                SYS_ONLINE // OPEN
              </span>
            </div>
          </div>

          {/* Real-Time Telemetry Node Card */}
          <div className="woodblock-card woodblock-bar-indigo p-6 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b-2 border-[#1a3055]">
                <span className="text-xs font-bold text-[#1a3055] tracking-wider uppercase flex items-center gap-2">
                  <Radio className="w-3.5 h-3.5 text-[#d4553a]" />
                  Telemetry Node
                </span>
                <span className="text-[10px] font-mono font-bold text-[#f5f0e1] bg-[#1a3055] px-2 py-0.5 border border-[#1a3055]">
                  ACTIVE
                </span>
              </div>

              <div className="space-y-2.5 py-4 text-xs font-mono">
                <div className="flex justify-between items-center bg-[#ece5d0] p-2.5 border-2 border-[#1a3055] shadow-woodblock-sm">
                  <span className="text-[#1a3055] font-semibold">Samroli Sensor:</span>
                  <span className="text-[#747800] font-bold">868 MHz LoRa // 100%</span>
                </div>
                <div className="flex justify-between items-center bg-[#ece5d0] p-2.5 border-2 border-[#1a3055] shadow-woodblock-sm">
                  <span className="text-[#1a3055] font-semibold">STAC Cloud Gate:</span>
                  <span className="text-[#2a5a8c] font-bold">PASS (QA60 &lt; 5%)</span>
                </div>
                <div className="flex justify-between items-center bg-[#ece5d0] p-2.5 border-2 border-[#1a3055] shadow-woodblock-sm">
                  <span className="text-[#1a3055] font-semibold">OpenVINO NPU:</span>
                  <span className="text-[#d4553a] font-bold">4.2ms / Frame</span>
                </div>
              </div>
            </div>

            <div className="text-[10px] text-[#1a3055] font-mono flex items-center justify-between pt-2 border-t-2 border-[#1a3055]">
              <span>Himalayan Corridor NH-44</span>
              <span className="font-bold">UTC +05:30</span>
            </div>
          </div>
        </div>

        {/* Cell 4: 4x Stats Row */}
        <div className="lg:col-span-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="woodblock-card woodblock-bar-vermilion p-6 text-center">
            <div className="text-4xl sm:text-5xl font-black text-[#d4553a] font-serif">
              8+
            </div>
            <div className="text-xs sm:text-sm font-bold text-[#1a3055] tracking-wider uppercase mt-2">
              Production Systems
            </div>
            <div className="text-xs text-[#2a5a8c] font-serif mt-1">Edge AI, IoT & Spatial WebGL</div>
          </div>

          <div className="woodblock-card woodblock-bar-ultramarine p-6 text-center">
            <div className="text-4xl sm:text-5xl font-black text-[#2a5a8c] font-serif">
              2
            </div>
            <div className="text-xs sm:text-sm font-bold text-[#1a3055] tracking-wider uppercase mt-2">
              Tier-1 Research Labs
            </div>
            <div className="text-xs text-[#2a5a8c] font-serif mt-1">IIT Roorkee & UniConverge</div>
          </div>

          <div className="woodblock-card woodblock-bar-gold p-6 text-center">
            <div className="text-4xl sm:text-5xl font-black text-[#c9a227] font-serif">
              1st Prize
            </div>
            <div className="text-xs sm:text-sm font-bold text-[#1a3055] tracking-wider uppercase mt-2">
              Best Presentation Award
            </div>
            <div className="text-xs text-[#2a5a8c] font-serif mt-1">INDU X 5.0 Hackathon (2026)</div>
          </div>

          <div className="woodblock-card woodblock-bar-indigo p-6 text-center">
            <div className="text-4xl sm:text-5xl font-black text-[#747800] font-serif">
              14-Band
            </div>
            <div className="text-xs sm:text-sm font-bold text-[#1a3055] tracking-wider uppercase mt-2">
              Multispectral Vision
            </div>
            <div className="text-xs text-[#2a5a8c] font-serif mt-1">Custom CRUNet Satellite AI</div>
          </div>
        </div>

      </div>
    </section>
  );
};
