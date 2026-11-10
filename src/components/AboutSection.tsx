import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { SectorRibbon } from './SectorRibbon';
import { GithubIcon, LinkedinIcon } from './Icons';
import { useAnimatedCounter } from '../hooks/useAnimatedCounter';
import { 
  Mail, 
  Download, 
  Cpu, 
  ArrowRight, 
  Terminal, 
  Zap, 
  Award,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { 
  MemphisCircle, 
  MemphisTriangle, 
  MemphisWave, 
  MemphisZigzag, 
  MemphisCardOrnaments,
  MemphisZigzagDivider 
} from './MemphisOrnament';

export const AboutSection: React.FC = () => {
  const internshipsCounter = useAnimatedCounter(2);
  const buildsCounter = useAnimatedCounter(8);
  const toolchainsCounter = useAnimatedCounter(12);

  const techLogos = [
    { name: 'Python', color: 'bg-[#ff6b6b]', textCol: 'text-white', desc: 'AI / Data / Scripting' },
    { name: 'C / C++', color: 'bg-[#48dbfb]', textCol: 'text-black', desc: 'Systems / Low-level' },
    { name: 'PyTorch', color: 'bg-[#ff9ff3]', textCol: 'text-black', desc: 'Deep Learning' },
    { name: 'OpenVINO', color: 'bg-[#feca57]', textCol: 'text-black', desc: 'Intel NPU Inference' },
    { name: 'OpenWrt', color: 'bg-[#1dd1a1]', textCol: 'text-black', desc: 'Embedded Linux' },
    { name: 'LoRaWAN', color: 'bg-[#ff6b6b]', textCol: 'text-white', desc: 'Wireless Protocols' },
    { name: 'DSP / MNE', color: 'bg-[#5f27cd]', textCol: 'text-white', desc: 'Signal Processing' },
    { name: 'Three.js', color: 'bg-[#48dbfb]', textCol: 'text-black', desc: '3D WebGL Shaders' },
    { name: 'Docker', color: 'bg-[#1dd1a1]', textCol: 'text-black', desc: 'Containerization' },
    { name: 'Linux / Bash', color: 'bg-[#feca57]', textCol: 'text-black', desc: 'Kernel & Admin' },
    { name: 'Rust', color: 'bg-[#ff9ff3]', textCol: 'text-black', desc: 'Safe Systems' },
    { name: 'FastAPI', color: 'bg-[#48dbfb]', textCol: 'text-black', desc: 'High-speed APIs' }
  ];

  return (
    <section id="about" className="relative bg-[#fdf6e3] text-black overflow-hidden pt-4 pb-24">
      {/* Sector Ribbon */}
      <SectorRibbon sectorNumber="01" sectorName="ABOUT ME // PHILOSOPHY & CAPABILITIES" color="honey" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-16">
        
        {/* Section Heading Block */}
        <div className="mb-12">
          <div className="inline-block bg-[#1dd1a1] text-black px-3.5 py-1 text-xs font-black uppercase tracking-wider border-3 border-black shadow-[3px_3px_0_#000000] tilt-neg-1 mb-2">
            // OPERATOR PROFILE
          </div>
          <h2 className="memphis-heading text-black">
            WHO IS MANAN SHARMA?
          </h2>
          <p className="font-sans font-bold text-base text-black/80 mt-1 max-w-xl">
            Software Engineer, Researcher & Polymath with an obsession for high-speed systems and low-level control.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Narrative Playground Card */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Main Bio Card with Chaos Ornaments */}
            <div className="memphis-card group">
              <MemphisCardOrnaments variant={1} />

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b-4 border-black">
                <div className="flex items-center gap-3.5">
                  <div className="w-16 h-16 border-3 border-black overflow-hidden bg-[#ff9ff3] shadow-[3px_3px_0_#000000] shrink-0">
                    <img
                      src={personalInfo.profileImage || "/images/profile.png"}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 className="font-sans font-black text-2xl text-black group-hover:text-[#ff6b6b] pop-swap">
                      {personalInfo.name}
                    </h3>
                    <div className="font-mono text-xs font-bold text-[#5f27cd]">
                      {personalInfo.subHeadline}
                    </div>
                  </div>
                </div>

                <span className="memphis-badge bg-[#feca57] text-black">
                  STATUS: SYS_READY
                </span>
              </div>

              {/* Terminal Quote Block */}
              <div className="mt-5 p-4 bg-[#fdf6e3] border-3 border-black shadow-[3px_3px_0_#000000]">
                <p className="font-mono text-sm font-bold text-black leading-relaxed">
                  <span className="text-[#ff6b6b] mr-1.5">$ echo "Hello, World!"</span>
                  Passionate Software Engineer dedicated to writing clean, maintainable code across <span className="bg-[#48dbfb] px-1">Edge AI</span>, <span className="bg-[#feca57] px-1">Embedded Linux</span>, and <span className="bg-[#ff9ff3] px-1">3D Spatial Computing</span>.
                </p>
              </div>

              <p className="mt-4 font-sans font-bold text-sm sm:text-base text-black/90 leading-relaxed">
                {personalInfo.aboutBio}
              </p>

              {/* Current Pursuits Block */}
              <div className="mt-6 p-4 bg-white border-3 border-black shadow-[3px_3px_0_#000000]">
                <div className="font-sans font-black text-xs uppercase tracking-wider text-[#5f27cd] flex items-center gap-1.5 mb-2.5">
                  <Sparkles className="w-4 h-4 text-[#ff6b6b]" />
                  <span>CURRENT ACTIVE PURSUITS:</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm font-bold text-black">
                  {personalInfo.currentPursuits.map((pursuit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#ff6b6b] font-black select-none">▶</span>
                      <span>{pursuit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Past Highlights Accordion / List */}
              <div className="mt-4 p-4 bg-white border-3 border-black shadow-[3px_3px_0_#000000]">
                <div className="font-sans font-black text-xs uppercase tracking-wider text-[#ff6b6b] flex items-center gap-1.5 mb-2.5">
                  <Award className="w-4 h-4 text-[#feca57]" />
                  <span>KEY RESEARCH & LEADERSHIP HIGHLIGHTS:</span>
                </div>
                <ul className="space-y-1.5 text-xs font-bold text-black/90">
                  {personalInfo.pastHighlights.slice(0, 5).map((hl, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#1dd1a1] font-black select-none">✦</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Signature & CTAs */}
              <div className="mt-6 pt-5 border-t-4 border-black flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="font-sans font-black text-xl italic tracking-tight text-black block">
                    Manan Sharma
                  </span>
                  <span className="font-mono text-[10px] font-bold text-[#5f27cd] tracking-wider uppercase">
                    VERIFIED // RESEARCHER & ENGINEER
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 bg-white border-3 border-black shadow-[2px_2px_0_#000000] hover:bg-[#48dbfb] transition-colors"
                    title="LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>

                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 bg-white border-3 border-black shadow-[2px_2px_0_#000000] hover:bg-[#ff6b6b] hover:text-white transition-colors"
                    title="GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>

                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="p-2 bg-white border-3 border-black shadow-[2px_2px_0_#000000] hover:bg-[#feca57] transition-colors"
                    title="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>

                  <a
                    href={personalInfo.resumeUrl}
                    download="Manan_Sharma_Resume.pdf"
                    className="memphis-btn text-xs py-2 px-3.5 border-3"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Resume</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Tactical Tech Matrix Grid */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Engineering Toolchain Card */}
            <div className="memphis-card group tilt-pos-1">
              <MemphisCardOrnaments variant={2} />

              <div className="flex items-center justify-between pb-3 mb-4 border-b-4 border-black">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-[#feca57] border-2 border-black">
                    <Cpu className="w-4 h-4 text-black" />
                  </div>
                  <span className="font-sans font-black text-sm uppercase tracking-wider text-black">
                    ENGINEERING TOOLCHAIN
                  </span>
                </div>
                <span ref={toolchainsCounter.elementRef} className="memphis-badge bg-[#1dd1a1] text-black">
                  {toolchainsCounter.count} ENGINES
                </span>
              </div>

              {/* Tech Tiles Matrix */}
              <div className="grid grid-cols-2 gap-2.5">
                {techLogos.map((tech) => (
                  <div
                    key={tech.name}
                    className="p-3 bg-white border-3 border-black shadow-[3px_3px_0_#000000] hover:bg-[#feca57] transition-colors duration-150 group/tile select-none cursor-default"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-sans font-black text-xs text-black group-hover/tile:text-black">
                        {tech.name}
                      </span>
                      <span className={`w-3 h-3 rounded-full ${tech.color} border-2 border-black`}></span>
                    </div>
                    <span className="font-mono text-[10px] font-bold text-[#5f27cd] block mt-1">
                      {tech.desc}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-3 border-t-3 border-black text-center">
                <a
                  href="#skills"
                  className="inline-flex items-center gap-1.5 font-sans font-black text-xs text-[#5f27cd] hover:text-[#ff6b6b] uppercase tracking-wider"
                >
                  <span>Explore complete skills matrix</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Two Clashing Big Stat Counters */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border-4 border-black p-5 shadow-memphis tilt-neg-2 text-center group">
                <div className="font-sans font-black text-3xl sm:text-4xl text-[#ff6b6b] group-hover:text-black pop-swap" ref={internshipsCounter.elementRef}>
                  {internshipsCounter.count}
                </div>
                <div className="font-sans font-black text-xs uppercase tracking-wider text-black mt-1">
                  Research Internships (IIT / UCT)
                </div>
              </div>

              <div className="bg-white border-4 border-black p-5 shadow-memphis tilt-pos-2 text-center group">
                <div className="font-sans font-black text-3xl sm:text-4xl text-[#1dd1a1] group-hover:text-black pop-swap" ref={buildsCounter.elementRef}>
                  {buildsCounter.count}+
                </div>
                <div className="font-sans font-black text-xs uppercase tracking-wider text-black mt-1">
                  Major System Builds
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Section Bottom Zigzag Divider */}
        <MemphisZigzagDivider color="coral" className="mt-16" />

      </div>
    </section>
  );
};
