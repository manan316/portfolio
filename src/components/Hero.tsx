import React from 'react';
import { PersonalInfo } from '../types/portfolio';
import { Terminal, FileText, ArrowDown, Activity, Sparkles, MapPin, ExternalLink, ShieldCheck, Flame, Radio } from 'lucide-react';
import { MemphisCardOrnaments } from './MemphisOrnament';

interface HeroProps {
  personalInfo: PersonalInfo;
  onOpenTerminal: () => void;
  onOpenImage?: (image: { url: string; caption: string }) => void;
}

export const Hero: React.FC<HeroProps> = ({ personalInfo, onOpenTerminal, onOpenImage }) => {
  return (
    <section id="hero" className="relative pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Decorative Floating Geometry in Background */}
      <div className="absolute top-16 left-6 w-12 h-12 rounded-full bg-honey border-4 border-black -z-10 animate-bounce-short pointer-events-none" />
      <div className="absolute top-36 right-8 w-14 h-14 bg-electric-blue border-4 border-black rotate-12 -z-10 pointer-events-none" />

      {/* Top Banner Tag */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <span className="memphis-badge bg-coral text-white border-4 border-black px-4 py-1.5 text-xs font-black tracking-widest uppercase">
          [01 // MASTER IDENTITY MATRIX]
        </span>
        <span className="bg-mint text-black border-3 border-black px-3 py-1 text-xs font-black tracking-wider uppercase flex items-center gap-1.5">
          <Radio className="w-3.5 h-3.5 animate-pulse" /> PRTS_LINK ACTIVE // SYS_READY
        </span>
        <span className="bg-white text-black border-2 border-black px-2.5 py-0.5 text-xs font-bold hidden sm:inline-block">
          📍 {personalInfo.location}
        </span>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Bento Cell 1: Master Identity & Mission (Col 1 to 8, 8 cols) */}
        <div className="lg:col-span-8 memphis-card bg-paper p-6 sm:p-10 relative overflow-hidden group flex flex-col justify-between">
          <MemphisCardOrnaments variant={1} />

          <div>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="bg-honey text-black border-2 border-black px-2.5 py-0.5 text-xs font-black uppercase">
                AI/ML Researcher
              </span>
              <span className="bg-electric-blue text-black border-2 border-black px-2.5 py-0.5 text-xs font-black uppercase">
                Embedded Linux & IoT
              </span>
              <span className="bg-mint text-black border-2 border-black px-2.5 py-0.5 text-xs font-black uppercase">
                Computer Vision
              </span>
            </div>

            <h1 className="memphis-display text-black mb-4 pop-swap tracking-tight">
              MANAN SHARMA
            </h1>

            <div className="text-xl sm:text-2xl font-black text-black leading-tight mb-4 flex items-center gap-2">
              <span className="bg-black text-white px-3 py-1">ENGINEER</span>
              <span className="bg-coral text-white px-3 py-1">RESEARCHER</span>
              <span className="bg-honey text-black px-3 py-1">POLYMATH</span>
            </div>

            <p className="text-sm sm:text-base font-bold text-gray-900 leading-relaxed max-w-2xl mb-6">
              Specializing in <strong className="underline decoration-coral decoration-4">Edge AI NPU acceleration</strong> (Intel OpenVINO, YOLOv8), <strong className="underline decoration-honey decoration-4">custom embedded Linux firmware</strong> (OpenWrt, LoRaWAN SX1303), and <strong className="underline decoration-electric-blue decoration-4">geotechnical 3D digital twins & satellite remote sensing</strong> (OJASEWS, GeoChange AI, Sentinel-2).
            </p>

            {/* Provenance Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="bg-white border-3 border-black text-black px-3 py-1 text-xs font-black">
                🏛️ Ex-Research Intern · IIT Roorkee
              </span>
              <span className="bg-white border-3 border-black text-black px-3 py-1 text-xs font-black">
                📡 Ex-IoT Engineer Intern · UniConverge
              </span>
              <span className="bg-white border-3 border-black text-black px-3 py-1 text-xs font-black">
                🏆 Winner · INDU X 5.0 Hackathon
              </span>
              <span className="bg-white border-3 border-black text-black px-3 py-1 text-xs font-black">
                🎓 University of Jammu · B.Tech AI & Math
              </span>
            </div>
          </div>

          {/* Action Button Strip */}
          <div className="flex flex-wrap items-center gap-3 pt-6 border-t-4 border-black">
            <a
              href="#lab"
              className="memphis-btn flex items-center gap-2 text-xs sm:text-sm"
            >
              <Activity className="w-4 h-4" /> Try Live Sim Lab
            </a>
            <a
              href="#case-studies"
              className="memphis-btn-honey flex items-center gap-2 text-xs sm:text-sm"
            >
              <Sparkles className="w-4 h-4" /> Case Studies
            </a>
            <button
              onClick={onOpenTerminal}
              className="memphis-btn-blue flex items-center gap-2 text-xs sm:text-sm"
            >
              <Terminal className="w-4 h-4" /> Terminal [~]
            </button>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="memphis-btn-mint flex items-center gap-2 text-xs sm:text-sm"
            >
              <FileText className="w-4 h-4" /> Resume [PDF]
            </a>
          </div>
        </div>

        {/* Bento Cell 2 & 3: Profile Photo + Telemetry Widget (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Framed Profile Card */}
          <div className="memphis-card bg-paper p-5 relative overflow-hidden group flex flex-col items-center text-center">
            <MemphisCardOrnaments variant={2} />

            <div className="relative mb-4 mt-2">
              {/* Offset Backdrop Stamp */}
              <div className="absolute -inset-1.5 bg-honey border-4 border-black rotate-2" />
              <div className="relative w-44 h-44 sm:w-48 sm:h-48 border-4 border-black overflow-hidden bg-white shadow-memphis-sm">
                <img
                  src={personalInfo.profileImage || '/images/profile.png'}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-200"
                />
              </div>
            </div>

            <div className="text-lg font-black text-black uppercase tracking-tight">
              {personalInfo.name}
            </div>
            <div className="text-xs font-bold text-gray-700 mt-0.5">
              {personalInfo.pronouns} · Jammu & Kashmir, India
            </div>

            <div className="mt-3 bg-white border-2 border-black px-3 py-1 text-xs font-black text-black flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-mint border border-black animate-pulse" />
              Open for Research & High-Impact Roles
            </div>
          </div>

          {/* Real-Time Telemetry Ticker Card */}
          <div className="bg-white border-4 border-black p-5 shadow-memphis space-y-3">
            <div className="flex items-center justify-between pb-2 border-b-2 border-black">
              <span className="text-xs font-black uppercase tracking-widest text-black flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-coral animate-spin-slow" /> SYSTEM METRICS PULSE
              </span>
              <span className="text-[10px] font-black bg-honey px-1.5 py-0.5 border border-black">
                LIVE TELEMETRY
              </span>
            </div>

            <div className="space-y-2 text-xs font-bold">
              <div className="flex justify-between items-center bg-paper p-2 border-2 border-black">
                <span>Himalayan Samroli Sensor:</span>
                <span className="font-black text-green-700">ONLINE // 100%</span>
              </div>
              <div className="flex justify-between items-center bg-paper p-2 border-2 border-black">
                <span>STAC Satellite Cloud Mask:</span>
                <span className="font-black text-blue-700">PASS (QA60 &lt; 5%)</span>
              </div>
              <div className="flex justify-between items-center bg-paper p-2 border-2 border-black">
                <span>Intel OpenVINO NPU Latency:</span>
                <span className="font-black text-purple-700">4.2ms / Frame</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chunky Metric Clash Tiles (Full-width row) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        <div className="bg-coral text-white border-4 border-black p-5 shadow-memphis group hover:-translate-y-1 transition-transform">
          <div className="text-4xl sm:text-5xl font-black leading-none mb-1">8+</div>
          <div className="text-xs font-black uppercase tracking-wider">
            Engineered Systems Built
          </div>
          <div className="text-[11px] font-bold opacity-90 mt-1">
            Edge AI, IoT, WebGL & Remote Sensing
          </div>
        </div>

        <div className="bg-honey text-black border-4 border-black p-5 shadow-memphis group hover:-translate-y-1 transition-transform">
          <div className="text-4xl sm:text-5xl font-black leading-none mb-1">2</div>
          <div className="text-xs font-black uppercase tracking-wider">
            Tier-1 Labs & Internships
          </div>
          <div className="text-[11px] font-bold text-gray-800 mt-1">
            IIT Roorkee & UniConverge Technologies
          </div>
        </div>

        <div className="bg-mint text-black border-4 border-black p-5 shadow-memphis group hover:-translate-y-1 transition-transform">
          <div className="text-4xl sm:text-5xl font-black leading-none mb-1">1st</div>
          <div className="text-xs font-black uppercase tracking-wider">
            Best Presentation Prize
          </div>
          <div className="text-[11px] font-bold text-gray-800 mt-1">
            INDU X 5.0 International Hackathon
          </div>
        </div>

        <div className="bg-electric-blue text-black border-4 border-black p-5 shadow-memphis group hover:-translate-y-1 transition-transform">
          <div className="text-4xl sm:text-5xl font-black leading-none mb-1">14</div>
          <div className="text-xs font-black uppercase tracking-wider">
            Multispectral Bands
          </div>
          <div className="text-[11px] font-bold text-gray-800 mt-1">
            CRUNet Deep Satellite Segmentation
          </div>
        </div>
      </div>
    </section>
  );
};
