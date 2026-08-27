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
      className="relative bg-cyber-canvas text-[#F1F5F9] border-t-2 border-[#1E263D]/80 overflow-hidden"
    >
      {/* Tactical Sector Ribbon */}
      <SectorRibbon sectorNumber="01" sectorName="ABOUT ME // SYSTEM PROFILE & PHILOSOPHY" dark={true} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Narrative Intro, Lists & Signature */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Header intro line & Operator Profile Badge */}
            <div className="tactical-glass-card rounded-3xl p-6 sm:p-8 reveal-on-scroll corner-brackets">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-4">
                  <div className="relative group shrink-0">
                    <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-2xl overflow-hidden border-2 border-[#00F0FF] shadow-[0_0_25px_rgba(0,240,255,0.35)] bg-[#0F121E]/90 group-hover:shadow-[0_0_35px_rgba(0,240,255,0.65)] transition-all duration-300">
                      <img
                        src={personalInfo.profileImage || "/images/profile.png"}
                        alt={personalInfo.name}
                        className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-[#08090D] text-[#00FF9D] font-mono text-[9px] px-2 py-0.5 rounded-full border border-[#00FF9D]/40 font-bold tracking-wider shadow-md">
                      OPERATOR
                    </div>
                  </div>
                  <div>
                    <span className="font-mono text-[11px] font-bold text-[#00F0FF] tracking-wider uppercase flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] beacon-pulse shadow-[0_0_8px_#00FF9D]"></span>
                      // SYSTEM PROFILE & PHILOSOPHY
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold font-sans text-[#F1F5F9] mt-0.5">
                      {personalInfo.name}
                    </h3>
                    <div className="font-mono text-xs text-[#38BDF8] font-semibold flex items-center gap-1.5 mt-0.5">
                      <Terminal className="w-3.5 h-3.5 text-[#00F0FF]" />
                      <span>{personalInfo.subHeadline}</span>
                    </div>
                  </div>
                </div>

                <div className="hidden sm:flex flex-col items-end text-right font-mono text-[10px] text-[#94A3B8] space-y-0.5">
                  <span className="text-[#00F0FF] font-bold bg-[#00F0FF]/10 px-2 py-0.5 rounded border border-[#00F0FF]/30">SEC_LEVEL: ROOT_01</span>
                  <span className="text-[#00FF9D] font-semibold">STATUS: ACTIVE</span>
                  <span>LOC: JAMMU, IN</span>
                </div>
              </div>

              {/* Terminal Quote Banner - Frosted Glass Inset */}
              <div className="mt-4 p-4.5 rounded-2xl glass-inset border-l-4 border-l-[#00F0FF]">
                <p className="text-base sm:text-lg font-mono text-[#CBD5E1] leading-relaxed">
                  <span className="text-[#00FF9D] font-bold mr-1">$ echo "Hello, World!"</span> My name is <strong className="font-bold text-[#F1F5F9]">Manan Sharma</strong> and I'm a Software Engineer, Researcher & Polymath passionate about <strong className="font-semibold text-[#00F0FF]">Edge AI</strong>, <strong className="font-semibold text-[#00FF9D]">Embedded Linux firmware</strong>, and <strong className="font-semibold text-[#A855F7]">High-Performance Distributed Systems</strong>.
                </p>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-[#94A3B8] leading-relaxed font-sans">
                {personalInfo.aboutBio}
              </p>
            </div>

            {/* What I'm Up To */}
            <div className="tactical-glass-card rounded-3xl p-6 sm:p-7 shadow-sm space-y-3.5 reveal-on-scroll reveal-delay-150">
              <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#F1F5F9] tracking-wide uppercase">
                  <div className="p-1.5 rounded-xl bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/30 shadow-xs">
                    <Zap className="w-3.5 h-3.5" />
                  </div>
                  <span>WHAT I'M CURRENTLY BUILDING:</span>
                </div>
                <span className="font-mono text-[10px] text-[#00F0FF] font-bold bg-[#00F0FF]/10 px-2.5 py-0.5 rounded-full border border-[#00F0FF]/30">ACTIVE PURSUITS</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#CBD5E1] font-sans">
                {personalInfo.currentPursuits.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 group">
                    <span className="font-mono text-[#00F0FF] font-bold select-none text-xs mt-0.5 group-hover:translate-x-1.5 transition-transform duration-200">▸</span>
                    <span className="leading-relaxed group-hover:text-white transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* In the past, I have */}
            <div className="tactical-glass-card rounded-3xl p-6 sm:p-7 shadow-sm space-y-3.5 reveal-on-scroll reveal-delay-200">
              <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#F1F5F9] tracking-wide uppercase">
                  <div className="p-1.5 rounded-xl bg-[#00FF9D]/10 text-[#00FF9D] border border-[#00FF9D]/30 shadow-xs">
                    <History className="w-3.5 h-3.5" />
                  </div>
                  <span>TRACK RECORD & KEY MILESTONES:</span>
                </div>
                <span className="font-mono text-[10px] text-[#00FF9D] font-bold bg-[#00FF9D]/10 px-2.5 py-0.5 rounded-full border border-[#00FF9D]/30">VERIFIED HISTORY</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#CBD5E1] font-sans">
                {personalInfo.pastHighlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 group">
                    <span className="font-mono text-[#00FF9D] font-bold select-none text-xs mt-0.5 group-hover:translate-x-1.5 transition-transform duration-200">▸</span>
                    <span className="leading-relaxed group-hover:text-white transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cyber Identity & Direct Action CTAs */}
            <div className="tactical-glass-card p-6 sm:p-7 rounded-3xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 reveal-on-scroll reveal-delay-250 shadow-sm">
              <div>
                <span className="handwritten-signature select-none cursor-default">
                  Manan Sharma
                </span>
                <span className="font-mono text-[10px] text-[#64748B] tracking-wider uppercase block mt-0.5 font-semibold">
                  Verified Identity // Researcher & Engineer
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#131828]/80 text-[#F1F5F9] hover:text-[#00F0FF] hover:border-[#00F0FF] border border-white/[0.08] hover:scale-110 transition-all shadow-sm backdrop-blur-md"
                  title="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#131828]/80 text-[#F1F5F9] hover:text-[#00FF9D] hover:border-[#00FF9D] border border-white/[0.08] hover:scale-110 transition-all shadow-sm backdrop-blur-md"
                  title="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-xl bg-[#131828]/80 text-[#F1F5F9] hover:text-[#38BDF8] hover:border-[#38BDF8] border border-white/[0.08] hover:scale-110 transition-all shadow-sm backdrop-blur-md"
                  title="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.resumeUrl}
                  download="Manan_Sharma_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#00F0FF] to-[#38BDF8] hover:from-[#38BDF8] hover:to-[#00FF9D] text-[#08090D] font-mono text-xs font-bold transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)] interactive-btn border border-[#00F0FF]"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Resume</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Tactical Tech Matrix Grid */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="tactical-glass-card rounded-3xl p-6 sm:p-7 shadow-sm reveal-on-scroll reveal-delay-150 corner-brackets">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-xl bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/30">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-xs font-bold text-[#F1F5F9] tracking-wider uppercase">
                    ENGINEERING TOOLCHAIN
                  </span>
                </div>
                <div ref={toolchainsCounter.elementRef} className="font-mono text-[10px] text-[#00FF9D] font-bold px-2.5 py-0.5 rounded-full bg-[#00FF9D]/10 border border-[#00FF9D]/30 shadow-xs">
                  {toolchainsCounter.count} CORE ENGINES
                </div>
              </div>

              {/* Tech Icon Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-2.5">
                {techLogos.map((tech) => (
                  <div
                    key={tech.name}
                    className="p-3 rounded-2xl glass-pill flex flex-col justify-between group cursor-default"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-xs text-[#F1F5F9] group-hover:text-[#00F0FF] transition-colors">
                        {tech.name}
                      </span>
                      <span className={`w-2.5 h-2.5 rounded-full ${tech.color} group-hover:scale-130 transition-transform shadow-xs`}></span>
                    </div>
                    <span className="font-mono text-[10px] text-[#64748B] mt-1.5 group-hover:text-[#94A3B8] transition-colors">
                      {tech.desc}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-white/[0.08] text-center">
                <a
                  href="#skills"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-[#00F0FF] hover:text-[#38BDF8] font-bold group interactive-btn"
                >
                  <span>Explore complete technical skill taxonomy</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Quick Metrics / Focus Badges with Animated Counters */}
            <div className="grid grid-cols-2 gap-3.5 reveal-on-scroll reveal-delay-250">
              <div className="tactical-glass-card p-5 rounded-3xl text-center group cursor-default shadow-sm border border-white/[0.08]">
                <div className="flex items-center justify-center mb-1 text-[#00F0FF] group-hover:scale-115 transition-transform">
                  <Award className="w-5 h-5" />
                </div>
                <div ref={internshipsCounter.elementRef} className="font-mono text-3xl sm:text-4xl font-black text-[#00F0FF] group-hover:scale-108 transition-transform">
                  {internshipsCounter.count}+
                </div>
                <div className="font-mono text-[10px] text-[#94A3B8] uppercase tracking-wide mt-1 font-semibold">
                  Industrial & Research Internships
                </div>
              </div>
              
              <div className="tactical-glass-card p-5 rounded-3xl text-center group cursor-default shadow-sm border border-white/[0.08]">
                <div className="flex items-center justify-center mb-1 text-[#00FF9D] group-hover:scale-115 transition-transform">
                  <Zap className="w-5 h-5" />
                </div>
                <div ref={buildsCounter.elementRef} className="font-mono text-3xl sm:text-4xl font-black text-[#00FF9D] group-hover:scale-108 transition-transform">
                  {buildsCounter.count}+
                </div>
                <div className="font-mono text-[10px] text-[#94A3B8] uppercase tracking-wide mt-1 font-semibold">
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
