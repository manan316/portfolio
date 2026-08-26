import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { SectorRibbon } from './SectorRibbon';
import { GithubIcon, LinkedinIcon } from './Icons';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useAnimatedCounter } from '../hooks/useAnimatedCounter';
import { 
  Mail, 
  Download, 
  Cpu, 
  ArrowRight,
  Terminal,
  Zap,
  History,
  Award
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const containerRef = useScrollReveal<HTMLElement>();
  const internshipsCounter = useAnimatedCounter(2);
  const buildsCounter = useAnimatedCounter(6);
  const toolchainsCounter = useAnimatedCounter(12);

  const techLogos = [
    { name: 'Python', color: 'bg-[#3776AB]', textCol: 'text-[#38BDF8]', desc: 'AI / Data / Scripting' },
    { name: 'C / C++', color: 'bg-[#00599C]', textCol: 'text-[#60A5FA]', desc: 'Systems / Low-level' },
    { name: 'PyTorch', color: 'bg-[#EE4C2C]', textCol: 'text-[#FB923C]', desc: 'Deep Learning' },
    { name: 'OpenVINO', color: 'bg-[#0071C5]', textCol: 'text-[#00E5FF]', desc: 'Intel NPU Inference' },
    { name: 'OpenWrt', color: 'bg-[#00A9E0]', textCol: 'text-[#38BDF8]', desc: 'Embedded Linux' },
    { name: 'LoRaWAN', color: 'bg-[#F26522]', textCol: 'text-[#F97316]', desc: 'Wireless Protocols' },
    { name: 'DSP / MNE', color: 'bg-[#6B46C1]', textCol: 'text-[#A855F7]', desc: 'Signal Processing' },
    { name: 'Three.js', color: 'bg-[#00E5FF]', textCol: 'text-[#00E5FF]', desc: '3D WebGL Shaders' },
    { name: 'Docker', color: 'bg-[#2496ED]', textCol: 'text-[#38BDF8]', desc: 'Containerization' },
    { name: 'Linux / Bash', color: 'bg-[#FCC624]', textCol: 'text-[#FBBF24]', desc: 'Kernel & Admin' },
    { name: 'Rust', color: 'bg-[#DEA584]', textCol: 'text-[#F97316]', desc: 'Safe Systems' },
    { name: 'FastAPI', color: 'bg-[#009688]', textCol: 'text-[#34D399]', desc: 'High-speed APIs' }
  ];

  return (
    <section 
      id="about" 
      ref={containerRef} 
      className="relative bg-parchment-canvas text-[#1C1917] border-t-2 border-[#DECFC0] overflow-hidden"
    >
      {/* Tactical Sector Ribbon */}
      <SectorRibbon sectorNumber="01" sectorName="ABOUT ME // SYSTEM PROFILE & PHILOSOPHY" dark={false} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Narrative Intro, Lists & Signature */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Header intro line & Operator Profile Badge */}
            <div className="tactical-glass-card rounded-2xl p-6 sm:p-7 reveal-on-scroll corner-brackets">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[#DECFC0]">
                <div className="flex items-center gap-4">
                  <div className="relative group shrink-0">
                    <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-2xl overflow-hidden border-2 border-[#A45238] shadow-md bg-[#FAF7F2] group-hover:shadow-[0_0_20px_rgba(164,82,56,0.3)] transition-all">
                      <img
                        src={personalInfo.profileImage || "/images/profile.png"}
                        alt={personalInfo.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-[#1C1917] text-[#FAF5EE] font-mono text-[9px] px-2 py-0.5 rounded-full border border-[#DECFC0] font-bold tracking-wider shadow-md">
                      OPERATOR
                    </div>
                  </div>
                  <div>
                    <span className="font-mono text-[11px] font-bold text-[#A45238] tracking-wider uppercase flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A45238] beacon-pulse shadow-[0_0_6px_#A45238]"></span>
                      // SYSTEM PROFILE & PHILOSOPHY
                    </span>
                    <h3 className="text-2xl font-bold font-sans text-[#1C1917] mt-0.5">
                      {personalInfo.name}
                    </h3>
                    <div className="font-mono text-xs text-[#B85D3B] font-semibold flex items-center gap-1.5 mt-0.5">
                      <Terminal className="w-3.5 h-3.5 text-[#A45238]" />
                      <span>{personalInfo.subHeadline}</span>
                    </div>
                  </div>
                </div>

                <div className="hidden sm:flex flex-col items-end text-right font-mono text-[10px] text-[#78716C] space-y-0.5">
                  <span className="text-[#A45238] font-bold">SEC_LEVEL: ROOT_01</span>
                  <span className="text-[#15803D] font-semibold">STATUS: ACTIVE</span>
                  <span>LOC: JAMMU, IN</span>
                </div>
              </div>

              {/* Script Cursive Quote Banner */}
              <div className="mt-4 p-4 rounded-xl bg-[#EFE6D7] border-l-4 border-[#A45238] border-r border-t border-b border-[#DACBB8] shadow-xs">
                <p className="text-base sm:text-lg font-serif text-[#292524] leading-relaxed">
                  <span className="font-handwritten text-2xl text-[#8C3B1E] font-bold mr-1">Hello, World!</span> My name is <strong className="font-bold text-[#1C1917]">Manan Sharma</strong> and I'm a Software Engineer, Researcher & Polymath passionate about <strong className="font-semibold text-[#8C3B1E]">Edge AI</strong>, <strong className="font-semibold text-[#A45238]">Embedded Linux firmware</strong>, and <strong className="font-semibold text-[#6D28D9]">High-Performance Distributed Systems</strong>.
                </p>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-[#44403C] leading-relaxed font-sans">
                {personalInfo.aboutBio}
              </p>
            </div>

            {/* What I'm Up To */}
            <div className="tactical-glass-card rounded-2xl p-6 shadow-sm space-y-3.5 reveal-on-scroll reveal-delay-150">
              <div className="flex items-center justify-between pb-2 border-b border-[#DECFC0]">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#1C1917] tracking-wide uppercase">
                  <div className="p-1.5 rounded-lg bg-[#A45238]/10 text-[#A45238] border border-[#A45238]/20">
                    <Zap className="w-3.5 h-3.5" />
                  </div>
                  <span>WHAT I'M CURRENTLY BUILDING:</span>
                </div>
                <span className="font-mono text-[10px] text-[#A45238] font-bold bg-[#A45238]/10 px-2 py-0.5 rounded-full border border-[#A45238]/20">ACTIVE PURSUITS</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#44403C] font-sans">
                {personalInfo.currentPursuits.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 group">
                    <span className="font-mono text-[#A45238] font-bold select-none text-xs mt-0.5 group-hover:translate-x-1 transition-transform">▸</span>
                    <span className="leading-relaxed group-hover:text-[#1C1917] transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* In the past, I have */}
            <div className="tactical-glass-card rounded-2xl p-6 shadow-sm space-y-3.5 reveal-on-scroll reveal-delay-200">
              <div className="flex items-center justify-between pb-2 border-b border-[#DECFC0]">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#1C1917] tracking-wide uppercase">
                  <div className="p-1.5 rounded-lg bg-[#E8A838]/20 text-[#B45309] border border-[#E8A838]/40">
                    <History className="w-3.5 h-3.5" />
                  </div>
                  <span>TRACK RECORD & KEY MILESTONES:</span>
                </div>
                <span className="font-mono text-[10px] text-[#B45309] font-bold bg-[#E8A838]/15 px-2 py-0.5 rounded-full border border-[#E8A838]/30">VERIFIED HISTORY</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#44403C] font-sans">
                {personalInfo.pastHighlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 group">
                    <span className="font-mono text-[#B45309] font-bold select-none text-xs mt-0.5 group-hover:translate-x-1 transition-transform">▸</span>
                    <span className="leading-relaxed group-hover:text-[#1C1917] transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Handwritten Signature & Direct Action CTAs */}
            <div className="tactical-glass-card p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 reveal-on-scroll reveal-delay-250 shadow-sm">
              <div>
                <span className="handwritten-signature select-none cursor-default text-[#1C1917]">
                  Manan Sharma
                </span>
                <span className="font-mono text-[10px] text-[#78716C] tracking-wider uppercase block mt-0.5 font-semibold">
                  Verified Identity // Researcher & Engineer
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#1C1917] text-[#FAF5EE] hover:text-[#E8A838] hover:border-[#A45238] border border-[#2E2E35] hover:scale-105 transition-all shadow-sm"
                  title="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#1C1917] text-[#FAF5EE] hover:text-[#E06D3B] hover:border-[#E06D3B] border border-[#2E2E35] hover:scale-105 transition-all shadow-sm"
                  title="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-xl bg-[#1C1917] text-[#FAF5EE] hover:text-[#3D8B7A] hover:border-[#3D8B7A] border border-[#2E2E35] hover:scale-105 transition-all shadow-sm"
                  title="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.resumeUrl}
                  download="Manan_Sharma_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#1C1917] hover:bg-[#3D3833] text-[#FAF5EE] font-mono text-xs font-bold transition-all shadow-md hover:shadow-[0_0_20px_rgba(0,0,0,0.25)] interactive-btn border border-[#1C1917]"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Resume</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Tactical Tech Matrix Grid */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="tactical-glass-card rounded-2xl p-6 shadow-sm reveal-on-scroll reveal-delay-150 corner-brackets">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#DECFC0]">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-[#A45238]/10 text-[#A45238] border border-[#A45238]/20">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-xs font-bold text-[#1C1917] tracking-wider uppercase">
                    ENGINEERING TOOLCHAIN
                  </span>
                </div>
                <div ref={toolchainsCounter.elementRef} className="font-mono text-[10px] text-[#A45238] font-bold px-2.5 py-0.5 rounded-full bg-[#A45238]/10 border border-[#A45238]/30">
                  {toolchainsCounter.count} CORE ENGINES
                </div>
              </div>

              {/* Tech Icon Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-2.5">
                {techLogos.map((tech) => (
                  <div
                    key={tech.name}
                    className="p-3 rounded-xl bg-[#EFE6D7] border border-[#DECFC0] hover:border-[#A45238] hover:shadow-[0_4px_12px_rgba(164,82,56,0.12)] hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between group cursor-default"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-xs text-[#1C1917] group-hover:text-[#A45238] transition-colors">
                        {tech.name}
                      </span>
                      <span className={`w-2.5 h-2.5 rounded-full ${tech.color} group-hover:scale-125 transition-transform shadow-xs`}></span>
                    </div>
                    <span className="font-mono text-[10px] text-[#78716C] mt-1.5 group-hover:text-[#3D3833] transition-colors">
                      {tech.desc}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-[#DECFC0] text-center">
                <a
                  href="#skills"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-[#A45238] hover:text-[#E06D3B] font-bold group"
                >
                  <span>Explore complete technical skill taxonomy</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Quick Metrics / Focus Badges with Animated Counters */}
            <div className="grid grid-cols-2 gap-3 reveal-on-scroll reveal-delay-250">
              <div className="tactical-glass-card p-5 rounded-2xl text-center group cursor-default shadow-sm border border-[#DECFC0]">
                <div className="flex items-center justify-center mb-1 text-[#A45238]">
                  <Award className="w-5 h-5" />
                </div>
                <div ref={internshipsCounter.elementRef} className="font-mono text-3xl sm:text-4xl font-black text-[#A45238] group-hover:scale-105 transition-transform">
                  {internshipsCounter.count}+
                </div>
                <div className="font-mono text-[10px] text-[#78716C] uppercase tracking-wide mt-1 font-semibold">
                  Industrial & Research Internships
                </div>
              </div>
              
              <div className="tactical-glass-card p-5 rounded-2xl text-center group cursor-default shadow-sm border border-[#DECFC0]">
                <div className="flex items-center justify-center mb-1 text-[#D97706]">
                  <Zap className="w-5 h-5" />
                </div>
                <div ref={buildsCounter.elementRef} className="font-mono text-3xl sm:text-4xl font-black text-[#D97706] group-hover:scale-105 transition-transform">
                  {buildsCounter.count}+
                </div>
                <div className="font-mono text-[10px] text-[#78716C] uppercase tracking-wide mt-1 font-semibold">
                  Complex Production & AI Builds
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
