import React, { useState, useEffect } from 'react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { Mail, Download, ArrowRight, Sparkles, Terminal, Layers, Star, Code2, Cpu } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { MemphisCircle, MemphisTriangle, MemphisWave, MemphisZigzag } from './MemphisOrnament';

interface HeroProps {
  triggerAnimation?: boolean;
}

export const Hero: React.FC<HeroProps> = () => {
  const [timeString, setTimeString] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="hero"
      className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden bg-[#fdf6e3] border-b-4 border-black"
    >
      {/* Background Floating Memphis Geometric Ornaments (Playful Chaos) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        {/* Top Left Floating Triangle */}
        <div className="absolute top-16 left-6 lg:left-16 rotate-12 transition-transform duration-300 hover:rotate-45 hover:scale-125">
          <MemphisTriangle color="honey" size={54} />
        </div>

        {/* Top Right Floating Circle */}
        <div className="absolute top-24 right-8 sm:right-20 -rotate-6 transition-transform duration-300 hover:scale-125">
          <MemphisCircle color="coral" size={48} />
        </div>

        {/* Mid Left Zigzag */}
        <div className="absolute top-1/2 -left-6 sm:left-4 rotate-45 transition-transform duration-300 hover:scale-125">
          <MemphisZigzag color="electric-blue" size={72} />
        </div>

        {/* Mid Right Wave */}
        <div className="absolute top-2/3 right-4 sm:right-12 -rotate-12 transition-transform duration-300 hover:scale-125">
          <MemphisWave color="mint" size={80} />
        </div>

        {/* Bottom Left Big Circle */}
        <div className="absolute -bottom-8 left-1/4 rotate-45">
          <MemphisCircle color="bubblegum" size={68} />
        </div>

        {/* Bottom Right Floating Star/Pluses */}
        <div className="absolute bottom-16 right-1/3 rotate-12">
          <MemphisTriangle color="coral" size={42} />
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Top Pill / Status Ribbon */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <div className="memphis-badge bg-[#feca57] text-black">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1dd1a1] border-2 border-black inline-block animate-pulse"></span>
            <span>SYSTEM ACTIVE // SYS_READY</span>
          </div>

          <div className="memphis-badge bg-[#48dbfb] text-black hidden sm:inline-flex">
            <span>JAMMU & KASHMIR, INDIA</span>
          </div>

          <div className="memphis-badge bg-[#ff9ff3] text-black hidden md:inline-flex font-mono">
            <span>CLOCK: {timeString || '12:00:00'}</span>
          </div>
        </div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Big Bold Typography */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Clashing Title Block (Leading 1.0) */}
            <div className="space-y-3">
              <div className="inline-block bg-[#ff6b6b] text-white px-3.5 py-1 text-xs sm:text-sm font-black uppercase tracking-wider border-3 border-black shadow-[3px_3px_0_#000000] tilt-neg-1">
                ✦ 1981 MILAN REBUTTAL // NO RESTRAINT
              </div>

              <h1 className="memphis-display text-black">
                MANAN SHARMA
              </h1>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="bg-[#48dbfb] text-black px-3 py-1 font-sans font-black text-sm sm:text-lg uppercase border-3 border-black shadow-[3px_3px_0_#000000] tilt-pos-1 hover:bg-[#ff6b6b] hover:text-white pop-swap">
                  EDGE AI & VISION
                </span>
                <span className="bg-[#feca57] text-black px-3 py-1 font-sans font-black text-sm sm:text-lg uppercase border-3 border-black shadow-[3px_3px_0_#000000] tilt-neg-2 hover:bg-[#1dd1a1] pop-swap">
                  EMBEDDED LINUX
                </span>
                <span className="bg-[#1dd1a1] text-black px-3 py-1 font-sans font-black text-sm sm:text-lg uppercase border-3 border-black shadow-[3px_3px_0_#000000] hover:bg-[#feca57] pop-swap">
                  3D DIGITAL TWINS
                </span>
              </div>
            </div>

            {/* Subheading / Identity Narrative */}
            <p className="font-sans font-bold text-base sm:text-lg text-black leading-snug max-w-2xl bg-white p-5 border-4 border-black shadow-memphis">
              Engineer, Researcher & Polymath exploring <strong className="bg-[#feca57] px-1 text-black">Edge AI Acceleration</strong>, <strong className="bg-[#48dbfb] px-1 text-black">Linux Kernel Firmware</strong> (OpenWrt/LoRaWAN), and <strong className="bg-[#ff9ff3] px-1 text-black">High-Performance DSP</strong>.
              <span className="block mt-2 font-mono text-xs sm:text-sm text-[#5f27cd] font-bold">
                B.Tech Artificial Intelligence & Mathematics · University of Jammu · Ex-Intern IIT Roorkee, UCT
              </span>
            </p>

            {/* Pop Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a href="#projects" className="memphis-btn">
                <span>EXPLORE WORK</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a href="#contact" className="memphis-btn-blue">
                <Mail className="w-4 h-4" />
                <span>GET IN TOUCH</span>
              </a>

              <a
                href={personalInfo.resumeUrl}
                download="Manan_Sharma_Resume.pdf"
                className="memphis-btn-honey"
              >
                <Download className="w-4 h-4" />
                <span>RESUME (PDF)</span>
              </a>
            </div>

            {/* Social Link Badges */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-white border-3 border-black shadow-[3px_3px_0_#000000] hover:bg-[#ff6b6b] hover:text-white transition-colors duration-150"
                title="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-white border-3 border-black shadow-[3px_3px_0_#000000] hover:bg-[#48dbfb] hover:text-black transition-colors duration-150"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 bg-white border-3 border-black shadow-[3px_3px_0_#000000] hover:bg-[#feca57] hover:text-black transition-colors duration-150"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>

              <span className="font-mono text-xs font-bold text-black bg-[#ff9ff3] px-2.5 py-1 border-2 border-black ml-2 hidden sm:inline-block">
                SYS_VER: 2.0 (MEMPHIS)
              </span>
            </div>

          </div>

          {/* Right Column: Memphis Framed Portrait Card with Chaos Ornaments */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative group select-none">
              
              {/* Clashing Offset Backdrop Block */}
              <div className="absolute inset-0 bg-[#feca57] border-4 border-black translate-x-3 translate-y-3 -rotate-2"></div>
              
              {/* Card Container */}
              <div className="relative bg-white border-4 border-black p-4 shadow-memphis rotate-1 group-hover:rotate-0 transition-transform duration-150">
                
                {/* Photo Frame */}
                <div className="w-56 sm:w-64 h-64 sm:h-72 border-3 border-black overflow-hidden bg-[#ff9ff3] relative">
                  <img
                    src={personalInfo.profileImage || "/images/profile.png"}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top filter contrast-105"
                  />
                  {/* Badge pinned on image */}
                  <div className="absolute bottom-2 left-2 right-2 bg-black text-white text-center font-mono text-[11px] font-bold py-1 border-2 border-white uppercase">
                    OPERATOR // VERIFIED
                  </div>
                </div>

                {/* Corner Geometric Ornaments */}
                <MemphisCircle
                  color="coral"
                  size={38}
                  className="ornament ornament-1 -top-4 -right-4"
                />
                <MemphisTriangle
                  color="electric-blue"
                  size={42}
                  className="ornament ornament-2 -bottom-4 -left-4"
                />
                <MemphisWave
                  color="mint"
                  size={48}
                  className="ornament ornament-3 -top-3 -left-4"
                />

                {/* Footer of photo card */}
                <div className="pt-3 flex items-center justify-between border-t-3 border-black mt-3">
                  <span className="font-black text-xs uppercase tracking-wider text-black">
                    MANAN SHARMA
                  </span>
                  <span className="bg-[#1dd1a1] text-black text-[10px] font-black px-1.5 py-0.5 border-2 border-black">
                    IIT ROORKEE / UCT
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* 4 Chunky Metric Clash Blocks */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 sm:mt-16">
          <div className="bg-white border-4 border-black p-4 shadow-memphis tilt-neg-1 hover:tilt-0 transition-transform duration-150 group">
            <div className="font-sans font-black text-3xl sm:text-4xl text-[#ff6b6b] group-hover:text-black pop-swap">
              08+
            </div>
            <div className="font-sans font-black text-xs uppercase tracking-wider text-black mt-1">
              Production & AI Systems
            </div>
          </div>

          <div className="bg-white border-4 border-black p-4 shadow-memphis tilt-pos-1 hover:tilt-0 transition-transform duration-150 group">
            <div className="font-sans font-black text-3xl sm:text-4xl text-[#48dbfb] group-hover:text-black pop-swap">
              02
            </div>
            <div className="font-sans font-black text-xs uppercase tracking-wider text-black mt-1">
              Research Internships (IIT/UCT)
            </div>
          </div>

          <div className="bg-white border-4 border-black p-4 shadow-memphis tilt-neg-2 hover:tilt-0 transition-transform duration-150 group">
            <div className="font-sans font-black text-3xl sm:text-4xl text-[#1dd1a1] group-hover:text-black pop-swap">
              🏆 #1
            </div>
            <div className="font-sans font-black text-xs uppercase tracking-wider text-black mt-1">
              INDU X 5.0 Presentation Award
            </div>
          </div>

          <div className="bg-white border-4 border-black p-4 shadow-memphis tilt-pos-2 hover:tilt-0 transition-transform duration-150 group">
            <div className="font-sans font-black text-3xl sm:text-4xl text-[#feca57] group-hover:text-black pop-swap">
              12+
            </div>
            <div className="font-sans font-black text-xs uppercase tracking-wider text-black mt-1">
              Core Engineering Engines
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
