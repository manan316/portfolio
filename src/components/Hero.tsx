import React, { useEffect, useRef, useState } from 'react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { Mail, FileText, ChevronDown, Sparkles, Terminal, ArrowRight, Cpu, Radio, Activity, Compass } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: -1000, y: -1000 });
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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const numParticles = Math.min(Math.floor(window.innerWidth / 14), 90);
    const particles: { x: number; y: number; vx: number; vy: number; radius: number; alpha: number }[] = [];

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.6 + 0.25,
      });
    }

    let currentMouseX = -1000;
    let currentMouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      currentMouseX = e.clientX;
      currentMouseY = e.clientY;
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232, 168, 56, ${p.alpha * 0.8})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(224, 109, 59, ${0.12 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }

        const mdx = p.x - currentMouseX;
        const mdy = p.y - currentMouseY;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 150) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(currentMouseX, currentMouseY);
          ctx.strokeStyle = `rgba(232, 168, 56, ${0.35 * (1 - mdist / 150)})`;
          ctx.lineWidth = 1.0;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const quickSectors = [
    { name: 'About Me', href: '#about', sector: '01', desc: 'Background & Strengths', icon: Activity },
    { name: 'Experience', href: '#experience', sector: '02', desc: 'UCT & IIT Roorkee', icon: Cpu },
    { name: 'Projects', href: '#projects', sector: '03', desc: 'Spatial WebGL & OpenWrt', icon: Radio },
    { name: 'Research', href: '#research', sector: '04', desc: 'DSP & Edge NPU', icon: Compass },
    { name: 'Skills & Stack', href: '#skills', sector: '05', desc: 'Languages & Systems', icon: Terminal },
    { name: 'Education & Certs', href: '#education', sector: '06', desc: 'Univ of Jammu & AMD', icon: Sparkles },
    { name: 'Contact Me', href: '#contact', sector: '07', desc: 'Direct Transmission', icon: Mail }
  ];

  return (
    <section id="hero" className="relative min-h-[94vh] flex flex-col justify-between bg-dark-grid text-[#FAF5EE] pt-24 pb-8 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Background Starfield Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0 opacity-75" />

      {/* Dynamic Mouse Spotlight Glow */}
      <div 
        className="pointer-events-none absolute -inset-px opacity-60 transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(224, 109, 59, 0.08), rgba(232, 168, 56, 0.05), transparent 80%)`
        }}
      />

      {/* Background Ambient Radiance */}
      <div className="absolute top-1/4 left-1/4 w-[32rem] h-[32rem] bg-[#E06D3B]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-[#E8A838]/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Top Tactical Status Bar in Hero */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-[#A8A29E] border-b border-[#2E2E35] pb-3 mb-6 sm:mb-10 backdrop-blur-[2px]">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-[#1E1E22] px-3 py-1 rounded-lg border border-[#2E2E35] shadow-inner">
            <span className="inline-block w-2 h-2 rounded-full bg-[#E06D3B] beacon-pulse shadow-[0_0_8px_#E06D3B]"></span>
            <span className="text-[#FAF5EE] font-bold tracking-wider">LOC: JAMMU, IN (32.72° N, 74.85° E)</span>
          </div>
          <div className="hidden md:flex items-center gap-2 text-[#E8A838]">
            <span>UTC+5:30</span>
            <span>//</span>
            <span className="text-[#FAF5EE] font-semibold">{timeString || 'LIVE'}</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline text-[#15803D] font-semibold flex items-center gap-1.5 bg-[#15803D]/10 px-2.5 py-0.5 rounded-full border border-[#15803D]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-[#15803D] animate-ping"></span>
            SYS_HEALTH: OPTIMAL
          </span>
          <span className="hidden sm:inline text-white/20">//</span>
          <span className="text-[#A8A29E]">PRTS_KERNEL: 6.8.0-EMBEDDED</span>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center flex-1 my-auto">

        {/* Left Side: Identity, Title, Badges, Socials */}
        <div className="lg:col-span-7 space-y-6">

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
            <div className="relative group shrink-0">
              {/* Radar ring effect */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#B83A3A] via-[#E06D3B] to-[#E8A838] opacity-70 group-hover:opacity-100 blur-sm transition duration-500 animate-tilt"></div>
              
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#E06D3B] shadow-[0_0_25px_rgba(224,109,59,0.35)] relative bg-[#18181A]">
                <img
                  src={personalInfo.profileImage || "/images/profile.png"}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Live status beacon */}
              <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#15803D] border-2 border-[#121214] flex items-center justify-center shadow-lg" title="Online / Active">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
              </span>
            </div>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E1E22]/90 border border-[#2E2E35] font-mono text-xs text-[#E8A838] hover:border-[#E06D3B] transition-colors duration-200 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#E8A838] animate-spin" style={{ animationDuration: '8s' }} />
                <span>B.Tech Information Technology & Mathematics · 2024–2028</span>
              </div>
              <h2 className="font-mono text-xs sm:text-sm tracking-widest text-[#A8A29E] uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E06D3B]"></span>
                Software Engineer, Researcher & Polymath
              </h2>
            </div>
          </div>

          {/* Name & Distinctive Retro Rainbow Accent Stripe */}
          <div className="space-y-2.5">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#FAF5EE] uppercase font-sans select-none">
              <span className="block text-[#FAF5EE]">
                MANAN
              </span>
              <span className="block text-[#FAF5EE]">
                SHARMA
              </span>
            </h1>

            {/* Retro 5-color Analog Rainbow Underline Stripe Bar */}
            <div className="retro-stripe-bar max-w-xs sm:max-w-sm shadow-md">
              <span className="flex-1 retro-stripe-red"></span>
              <span className="flex-1 retro-stripe-orange"></span>
              <span className="flex-1 retro-stripe-amber"></span>
              <span className="flex-1 retro-stripe-sage"></span>
              <span className="flex-1 retro-stripe-brown"></span>
            </div>
          </div>

          <p className="text-[#A8A29E] text-sm sm:text-base max-w-xl leading-relaxed font-sans">
            Engineer, Researcher & Polymath | Exploring Cloud, IoT, AI/ML, Computer Vision, Linux, Networking | Ex-Intern IIT Roorkee, UCT
          </p>

          {/* Social Links & Action Hub */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1E1E22] border border-[#2E2E35] text-[#FAF5EE] hover:text-[#E8A838] hover:border-[#E06D3B] hover:shadow-[0_0_20px_rgba(224,109,59,0.25)] transition-all duration-200 text-xs font-mono group interactive-btn"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4 text-[#E8A838] group-hover:scale-110 group-hover:rotate-6 transition-transform" />
              <span>LinkedIn</span>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1E1E22] border border-[#2E2E35] text-[#FAF5EE] hover:text-[#E06D3B] hover:border-[#E06D3B] hover:shadow-[0_0_20px_rgba(224,109,59,0.25)] transition-all duration-200 text-xs font-mono group interactive-btn"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4 text-[#E06D3B] group-hover:scale-110 group-hover:rotate-6 transition-transform" />
              <span>GitHub</span>
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1E1E22] border border-[#2E2E35] text-[#FAF5EE] hover:text-[#3D8B7A] hover:border-[#3D8B7A] hover:shadow-[0_0_20px_rgba(61,139,122,0.25)] transition-all duration-200 text-xs font-mono group interactive-btn"
              title="Email Manan"
            >
              <Mail className="w-4 h-4 text-[#3D8B7A] group-hover:scale-110 group-hover:-rotate-6 transition-transform" />
              <span>Email</span>
            </a>

            <a
              href={personalInfo.resumeUrl}
              download="Manan_Sharma_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#E06D3B] hover:bg-[#B85D3B] text-white font-mono text-xs font-bold transition-all shadow-lg hover:shadow-[0_0_25px_rgba(224,109,59,0.45)] interactive-btn border border-[#E06D3B]"
            >
              <FileText className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Download Resume</span>
            </a>
          </div>

        </div>

        {/* Right Side: Major Navigational Sections Display */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-2.5 lg:pl-8 border-l border-white/10">
          <div className="font-mono text-xs text-[#E8A838] tracking-widest uppercase mb-2 flex items-center justify-between bg-[#1E1E22]/90 p-2.5 rounded-xl border border-[#2E2E35] shadow-inner">
            <div className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-[#E8A838]" />
              <span>DIRECT SECTOR ROUTING</span>
            </div>
            <span className="text-[10px] text-[#A8A29E] font-bold bg-[#2E2E35] px-2 py-0.5 rounded">FAST DISPATCH</span>
          </div>

          {quickSectors.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.sector}
                href={item.href}
                className="group flex items-center justify-between p-3.5 rounded-xl bg-[#18181A]/90 border border-[#2E2E35] hover:border-[#E06D3B] hover:bg-[#1E1E22] hover:shadow-[0_6px_25px_rgba(224,109,59,0.2)] transition-all duration-200 transform hover:-translate-x-1 backdrop-blur-md"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#1E1E22] border border-[#2E2E35] group-hover:border-[#E06D3B] group-hover:bg-[#E06D3B]/10 transition-colors">
                    <Icon className="w-3.5 h-3.5 text-[#E8A838] group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] font-bold text-[#E06D3B] group-hover:text-[#E8A838] transition-colors">
                        S0{item.sector}
                      </span>
                      <span className="font-sans text-sm font-semibold text-[#FAF5EE] group-hover:text-white transition-all flex items-center gap-1.5">
                        {item.name}
                        <ArrowRight className="w-3 h-3 text-[#E06D3B] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </span>
                    </div>
                  </div>
                </div>
                <span className="hidden sm:inline font-mono text-[10px] text-[#71717A] group-hover:text-[#A8A29E] transition-colors">
                  {item.desc}
                </span>
              </a>
            );
          })}
        </div>

      </div>

      {/* Down Chevron Indicator */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-8 pb-2">
        <a
          href="#about"
          className="flex flex-col items-center gap-1 text-[#71717A] hover:text-[#E06D3B] transition-colors group"
          aria-label="Scroll to About section"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase group-hover:tracking-wider transition-all">INITIALIZE SECTOR 01</span>
          <ChevronDown className="w-5 h-5 animate-bounce group-hover:text-[#E06D3B] group-hover:scale-125 transition-transform" />
        </a>
      </div>

    </section>
  );
};
