import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { SectorRibbon } from './SectorRibbon';
import { GithubIcon, LinkedinIcon } from './Icons';
import { 
  Mail, 
  Download, 
  Cpu, 
  ArrowRight
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const techLogos = [
    { name: 'Python', color: 'bg-[#3776AB]/10 text-[#3776AB] border-[#3776AB]/30', desc: 'AI / Data / Scripting' },
    { name: 'C / C++', color: 'bg-[#00599C]/10 text-[#00599C] border-[#00599C]/30', desc: 'Systems / Low-level' },
    { name: 'PyTorch', color: 'bg-[#EE4C2C]/10 text-[#EE4C2C] border-[#EE4C2C]/30', desc: 'Deep Learning' },
    { name: 'OpenVINO', color: 'bg-[#0071C5]/10 text-[#0071C5] border-[#0071C5]/30', desc: 'Intel NPU Inference' },
    { name: 'OpenWrt', color: 'bg-[#00A9E0]/10 text-[#00A9E0] border-[#00A9E0]/30', desc: 'Embedded Linux' },
    { name: 'LoRaWAN', color: 'bg-[#F26522]/10 text-[#F26522] border-[#F26522]/30', desc: 'Wireless Protocols' },
    { name: 'MNE-Python', color: 'bg-[#6B46C1]/10 text-[#6B46C1] border-[#6B46C1]/30', desc: 'EEG Neuroscience' },
    { name: 'Three.js', color: 'bg-[#181715]/10 text-[#181715] border-[#181715]/30', desc: '3D WebGL Shaders' },
    { name: 'Docker', color: 'bg-[#2496ED]/10 text-[#2496ED] border-[#2496ED]/30', desc: 'Containerization' },
    { name: 'Linux / Bash', color: 'bg-[#FCC624]/10 text-[#181715] border-[#FCC624]/40', desc: 'Kernel & Admin' },
    { name: 'Rust', color: 'bg-[#DEA584]/10 text-[#DEA584] border-[#DEA584]/30', desc: 'Safe Systems' },
    { name: 'FastAPI', color: 'bg-[#009688]/10 text-[#009688] border-[#009688]/30', desc: 'High-speed APIs' }
  ];

  return (
    <section id="about" className="relative bg-blueprint-grid text-[#181715] border-t-2 border-[#FF5722]">
      {/* Tactical Sector Ribbon */}
      <SectorRibbon sectorNumber="01" sectorName="ABOUT ME // SYSTEM PROFILE" dark={true} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Narrative Intro, Lists & Signature */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Header intro line & Operator Profile Badge */}
            <div className="border-b border-[#D5CCBB] pb-5">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                <div className="relative group shrink-0">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border-2 border-[#FF5722] shadow-sm bg-white">
                    <img
                      src={personalInfo.profileImage || "/images/profile.png"}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute -bottom-1.5 -right-1.5 bg-[#181715] text-[#00E5FF] font-mono text-[9px] px-1.5 py-0.5 rounded border border-[#00E5FF]/40 font-bold">
                    OPERATOR
                  </div>
                </div>
                <div>
                  <span className="font-mono text-xs font-bold text-[#FF5722] tracking-wider uppercase">
                    // SYSTEM PROFILE & PHILOSOPHY
                  </span>
                  <h3 className="text-xl font-bold font-sans text-[#181715] mt-0.5">
                    {personalInfo.name}
                  </h3>
                  <div className="font-mono text-xs text-[#00A9E0] font-semibold">
                    {personalInfo.subHeadline}
                  </div>
                </div>
              </div>

              <p className="mt-2 text-base sm:text-lg font-serif text-[#181715] leading-relaxed italic">
                “Hello, World! My name is <strong className="font-bold not-italic text-[#FF5722]">Manan Sharma</strong> and I'm a Software Engineer, Researcher & Polymath passionate about <strong className="font-semibold not-italic">Edge AI</strong>, <strong className="font-semibold not-italic">Embedded Linux firmware</strong>, and <strong className="font-semibold not-italic">Computational Neuroscience</strong>.”
              </p>
            </div>

            {/* Core Bio Description */}
            <p className="text-sm sm:text-base text-[#334155] leading-relaxed font-sans">
              {personalInfo.aboutBio}
            </p>

            {/* What I'm Up To */}
            <div className="bg-[#FAF7F0] border border-[#E2DBD0] rounded-lg p-5 shadow-sm space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#181715] tracking-wide uppercase">
                <span className="text-[#FF5722] font-bold">&gt;</span>
                <span>WHAT I'M UP TO:</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#475569] font-sans">
                {personalInfo.currentPursuits.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="font-mono text-[#FF5722] font-bold select-none text-xs mt-0.5">└</span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* In the past, I have */}
            <div className="bg-[#FAF7F0] border border-[#E2DBD0] rounded-lg p-5 shadow-sm space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#181715] tracking-wide uppercase">
                <span className="text-[#00A9E0] font-bold">&gt;</span>
                <span>IN THE PAST, I HAVE:</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#475569] font-sans">
                {personalInfo.pastHighlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="font-mono text-[#00A9E0] font-bold select-none text-xs mt-0.5">└</span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Handwritten Signature & Direct Action CTAs (As shown in template reference) */}
            <div className="pt-4 border-t border-[#D5CCBB] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="handwritten-signature select-none block">
                  Manan Sharma
                </span>
                <span className="font-mono text-[10px] text-[#64748B] tracking-wider uppercase">
                  Verified Identity // Researcher & Engineer
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded bg-[#181715] text-[#F4EFE6] hover:text-[#00E5FF] hover:bg-[#2C2A26] transition-colors"
                  title="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded bg-[#181715] text-[#F4EFE6] hover:text-[#FF5722] hover:bg-[#2C2A26] transition-colors"
                  title="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded bg-[#181715] text-[#F4EFE6] hover:text-[#E5A93C] hover:bg-[#2C2A26] transition-colors"
                  title="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.resumeUrl}
                  download="Manan_Sharma_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded bg-[#FF5722] hover:bg-[#E64A19] text-white font-mono text-xs font-bold transition-all shadow"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Resume</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Tactical Tech Matrix Grid (Faithful to template icon matrix) */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="bg-[#FAF7F0] border border-[#E2DBD0] rounded-lg p-5 shadow-sm">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E2DBD0]">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#FF5722]" />
                  <span className="font-mono text-xs font-bold text-[#181715] tracking-wider uppercase">
                    ENGINEERING TOOLCHAIN
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#64748B]">12 CORE ENGINES</span>
              </div>

              {/* Tech Icon Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
                {techLogos.map((tech) => (
                  <div
                    key={tech.name}
                    className="p-3 rounded-lg bg-white border border-[#E2DBD0] hover:border-[#FF5722] transition-all hover:shadow-md flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-xs text-[#181715]">
                        {tech.name}
                      </span>
                      <span className={`w-2 h-2 rounded-full ${tech.color}`}></span>
                    </div>
                    <span className="font-mono text-[10px] text-[#64748B] mt-1.5">
                      {tech.desc}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-[#E2DBD0] text-center">
                <a
                  href="#skills"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-[#FF5722] hover:text-[#E64A19] font-bold group"
                >
                  <span>Explore complete technical skill taxonomy</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Quick Metrics / Focus Badges */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-lg bg-white border border-[#E2DBD0] text-center">
                <div className="font-mono text-2xl font-bold text-[#FF5722]">2+</div>
                <div className="font-mono text-[10px] text-[#64748B] uppercase tracking-wide mt-0.5">
                  Industrial & Research Internships
                </div>
              </div>
              <div className="p-4 rounded-lg bg-white border border-[#E2DBD0] text-center">
                <div className="font-mono text-2xl font-bold text-[#00A9E0]">6+</div>
                <div className="font-mono text-[10px] text-[#64748B] uppercase tracking-wide mt-0.5">
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
