import React, { useEffect, useRef, useState } from 'react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { Mail, FileText, ChevronDown, Sparkles, Terminal, ArrowRight, Cpu, Radio, Activity, Compass } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { DecryptedText } from './DecryptedText';

interface HeroProps {
  triggerAnimation?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ triggerAnimation = true }) => {
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

    const numParticles = Math.min(Math.floor(window.innerWidth / 14), 85);
    const particles: { x: number; y: number; vx: number; vy: number; radius: number; alpha: number; color: string }[] = [];

    const colors = ['rgba(0, 240, 255,', 'rgba(0, 255, 157,', 'rgba(56, 189, 248,', 'rgba(168, 85, 247,'];

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.6 + 0.6,
        alpha: Math.random() * 0.65 + 0.25,
        color: colors[Math.floor(Math.random() * colors.length)],
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
        ctx.fillStyle = `${p.color} ${p.alpha * 0.85})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        const mdx = p.x - currentMouseX;
        const mdy = p.y - currentMouseY;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 160) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(currentMouseX, currentMouseY);
          ctx.strokeStyle = `rgba(0, 255, 157, ${0.4 * (1 - mdist / 160)})`;
          ctx.lineWidth = 0.9;
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
    <section id="hero" className="relative min-h-[94vh] flex flex-col justify-between bg-dark-grid text-[#F1F5F9] pt-24 pb-8 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Background Starfield Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0 opacity-80" />

      {/* Dynamic Mouse Spotlight Glow */}
      <div 
        className="pointer-events-none absolute -inset-px opacity-75 transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 240, 255, 0.1), rgba(0, 255, 157, 0.06), transparent 80%)`
        }}
      />

      {/* Background Ambient Radiance */}
      <div className="absolute top-1/4 left-1/4 w-[36rem] h-[36rem] bg-[#00F0FF]/8 rounded-full blur-[150px] pointer-events-none animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[36rem] h-[36rem] bg-[#00FF9D]/8 rounded-full blur-[150px] pointer-events-none animate-float-delayed"></div>

      {/* Top Tactical Status Bar in Hero - Frosted Glass HUD */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-[#94A3B8] border border-white/[0.08] bg-[#0F121E]/65 backdrop-blur-xl px-4 py-2.5 rounded-2xl mb-6 sm:mb-10 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.06)]">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-[#131828]/80 px-3 py-1 rounded-xl border border-[#1E263D] shadow-inner">
            <span className="inline-block w-2 h-2 rounded-full bg-[#00FF9D] beacon-pulse shadow-[0_0_10px_#00FF9D]"></span>
            <span className="text-[#F1F5F9] font-bold tracking-wider">LOC: JAMMU, IN (32.72° N, 74.85° E)</span>
          </div>
          <div className="hidden md:flex items-center gap-2 text-[#00F0FF]">
            <span>UTC+5:30</span>
            <span className="text-[#64748B]">//</span>
            <span className="text-[#00FF9D] font-semibold">{timeString || 'LIVE'}</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline text-[#00FF9D] font-semibold flex items-center gap-1.5 bg-[#00FF9D]/10 px-3 py-1 rounded-full border border-[#00FF9D]/30 shadow-[0_0_12px_rgba(0,255,157,0.2)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] animate-ping"></span>
            SYS_HEALTH: OPTIMAL
          </span>
          <span className="hidden sm:inline text-[#64748B]">//</span>
          <span className="text-[#38BDF8] bg-[#131828]/80 px-2.5 py-1 rounded-xl border border-[#1E263D]">LINUX_KERNEL: 6.8.0-RT</span>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center flex-1 my-auto">

        {/* Left Side: Identity, Title, Badges, Socials */}
        <div className="lg:col-span-7 space-y-6">

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
            <div className="relative group shrink-0">
              {/* Glowing Cyber Radar Ring */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-[#00F0FF] via-[#38BDF8] to-[#00FF9D] opacity-75 group-hover:opacity-100 blur-md transition duration-500 animate-tilt"></div>
              
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#00F0FF] shadow-[0_0_30px_rgba(0,240,255,0.45)] relative bg-[#0F121E]/90 backdrop-blur-md">
                <img
                  src={personalInfo.profileImage || "/images/profile.png"}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Live status beacon */}
              <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#00FF9D] border-2 border-[#08090D] flex items-center justify-center shadow-lg" title="Online / Active">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
              </span>
            </div>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F121E]/85 backdrop-blur-md border border-[#00F0FF]/30 font-mono text-xs text-[#00F0FF] hover:border-[#00F0FF] hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all duration-200 shadow-sm animate-float">
                <Sparkles className="w-3.5 h-3.5 text-[#00FF9D] animate-spin" style={{ animationDuration: '8s' }} />
                <span>B.Tech Artificial Intelligence & Mathematics · 2024–2028</span>
              </div>
              <h2 className="font-mono text-xs sm:text-sm tracking-widest text-[#94A3B8] uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] beacon-pulse shadow-[0_0_6px_#00F0FF]"></span>
                <DecryptedText text="Software Engineer, Researcher & Polymath" speed={20} initialDelay={300} trigger={triggerAnimation} />
              </h2>
            </div>
          </div>

          {/* Name & Glowing Cyber Spectrum Accent Stripe */}
          <div className="space-y-2.5">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#F1F5F9] uppercase font-sans select-none">
              <span className="block text-[#F1F5F9] tracking-tight">
                <DecryptedText text="MANAN" speed={28} initialDelay={100} trigger={triggerAnimation} />
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-[#38BDF8] to-[#00FF9D] drop-shadow-[0_0_25px_rgba(0,240,255,0.35)]">
                <DecryptedText text="SHARMA" speed={28} initialDelay={250} trigger={triggerAnimation} />
              </span>
            </h1>

            {/* Glowing Spectrum Underline Bar */}
            <div className="retro-stripe-bar max-w-xs sm:max-w-sm shadow-[0_0_20px_rgba(0,240,255,0.6)]">
              <span className="flex-1 retro-stripe-red"></span>
              <span className="flex-1 retro-stripe-orange"></span>
              <span className="flex-1 retro-stripe-amber"></span>
              <span className="flex-1 retro-stripe-sage"></span>
              <span className="flex-1 retro-stripe-brown"></span>
            </div>
          </div>

          <p className="text-[#94A3B8] text-sm sm:text-base max-w-xl leading-relaxed font-sans">
            Engineer, Researcher & Polymath | Exploring Cloud, IoT, AI/ML, Computer Vision, Linux, Networking | Ex-Intern IIT Roorkee, UCT
          </p>

          {/* Social Links & Action Hub */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0F121E]/80 backdrop-blur-md border border-white/[0.08] text-[#F1F5F9] hover:text-[#00F0FF] hover:border-[#00F0FF] hover:shadow-[0_0_25px_rgba(0,240,255,0.35)] transition-all duration-250 text-xs font-mono group interactive-btn"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4 text-[#00F0FF] group-hover:scale-110 group-hover:rotate-6 transition-transform" />
              <span>LinkedIn</span>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0F121E]/80 backdrop-blur-md border border-white/[0.08] text-[#F1F5F9] hover:text-[#00FF9D] hover:border-[#00FF9D] hover:shadow-[0_0_25px_rgba(0,255,157,0.35)] transition-all duration-250 text-xs font-mono group interactive-btn"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4 text-[#00FF9D] group-hover:scale-110 group-hover:rotate-6 transition-transform" />
              <span>GitHub</span>
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0F121E]/80 backdrop-blur-md border border-white/[0.08] text-[#F1F5F9] hover:text-[#38BDF8] hover:border-[#38BDF8] hover:shadow-[0_0_25px_rgba(56,189,248,0.35)] transition-all duration-250 text-xs font-mono group interactive-btn"
              title="Email Manan"
            >
              <Mail className="w-4 h-4 text-[#38BDF8] group-hover:scale-110 group-hover:-rotate-6 transition-transform" />
              <span>Email</span>
            </a>

            <a
              href={personalInfo.resumeUrl}
              download="Manan_Sharma_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#00F0FF] to-[#38BDF8] hover:from-[#38BDF8] hover:to-[#00FF9D] text-[#08090D] font-mono text-xs font-bold transition-all shadow-[0_0_25px_rgba(0,240,255,0.45)] hover:shadow-[0_0_35px_rgba(0,240,255,0.75)] interactive-btn border border-[#00F0FF]"
            >
              <FileText className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Download Resume</span>
            </a>
          </div>

        </div>

        {/* Right Side: Major Navigational Sections Display - Frosted Glass Column */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-2.5 lg:pl-8 border-l border-white/[0.08]">
          <div className="font-mono text-xs text-[#00F0FF] tracking-widest uppercase mb-2 flex items-center justify-between bg-[#0F121E]/75 backdrop-blur-md p-2.5 rounded-xl border border-white/[0.08] shadow-inner">
            <div className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-[#00F0FF]" />
              <span>DIRECT SECTOR ROUTING</span>
            </div>
            <span className="text-[10px] text-[#00FF9D] font-bold bg-[#00FF9D]/10 border border-[#00FF9D]/30 px-2 py-0.5 rounded">FAST DISPATCH</span>
          </div>

          {quickSectors.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.sector}
                href={item.href}
                className="group flex items-center justify-between p-3.5 rounded-2xl bg-[#0F121E]/60 backdrop-blur-xl border border-white/[0.06] hover:border-[#00F0FF]/60 hover:bg-[#131828]/85 hover:shadow-[0_8px_30px_rgba(0,240,255,0.2),inset_0_1px_1px_rgba(255,255,255,0.08)] transition-all duration-300 transform hover:-translate-x-1.5"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#131828]/90 border border-white/[0.08] group-hover:border-[#00F0FF] group-hover:bg-[#00F0FF]/10 transition-all duration-300 shadow-sm">
                    <Icon className="w-3.5 h-3.5 text-[#00F0FF] group-hover:scale-115 transition-transform" />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] font-bold text-[#00F0FF] group-hover:text-[#00FF9D] transition-colors">
                        S0{item.sector}
                      </span>
                      <span className="font-sans text-sm font-semibold text-[#F1F5F9] group-hover:text-white transition-all flex items-center gap-1.5">
                        {item.name}
                        <ArrowRight className="w-3 h-3 text-[#00F0FF] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </span>
                    </div>
                  </div>
                </div>
                <span className="hidden sm:inline font-mono text-[10px] text-[#64748B] group-hover:text-[#94A3B8] transition-colors">
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
          className="flex flex-col items-center gap-1 text-[#64748B] hover:text-[#00F0FF] transition-colors group"
          aria-label="Scroll to About section"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase group-hover:tracking-wider transition-all">INITIALIZE SECTOR 01</span>
          <ChevronDown className="w-5 h-5 animate-bounce group-hover:text-[#00F0FF] group-hover:scale-125 transition-transform" />
        </a>
      </div>

    </section>
  );
};
