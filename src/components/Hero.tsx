import React, { useEffect, useRef } from 'react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { Mail, FileText, ChevronDown, Sparkles, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

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

    // Particle constellation
    const numParticles = Math.min(Math.floor(window.innerWidth / 12), 100);
    const particles: { x: number; y: number; vx: number; vy: number; radius: number; alpha: number }[] = [];

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.8 + 0.5,
        alpha: Math.random() * 0.7 + 0.3,
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint stars & grid dots
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
        ctx.fillStyle = `rgba(200, 225, 255, ${p.alpha * 0.8})`;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 229, 255, ${0.12 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }

        // Connect to mouse
        const mdx = p.x - mouseX;
        const mdy = p.y - mouseY;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 140) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.strokeStyle = `rgba(255, 87, 34, ${0.25 * (1 - mdist / 140)})`;
          ctx.lineWidth = 1;
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

  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-between bg-[#0A0E17] text-[#F4EFE6] pt-24 pb-10 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Background Starfield Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0 opacity-80" />

      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00E5FF]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#FF5722]/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Top Tactical Status Bar in Hero */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between text-[11px] font-mono text-[#64748B] border-b border-white/10 pb-3 mb-6 sm:mb-12">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#00E5FF] beacon-pulse"></span>
          <span>SYS_LOC: JAMMU (32.7266° N, 74.8570° E)</span>
        </div>
      </div>

      {/* Main Hero Content - Split Layout Inspired by Template */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center flex-1 my-auto">

        {/* Left Side: Identity, Title, Socials */}
        <div className="lg:col-span-7 space-y-6">

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
            <div className="relative group shrink-0">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#FF5722] shadow-[0_0_25px_rgba(255,87,34,0.35)] relative bg-[#131C2E]">
                <img
                  src={personalInfo.profileImage || "/images/profile.png"}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#10B981] border-2 border-[#0A0E17] flex items-center justify-center" title="Online / Active">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
              </span>
            </div>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#131C2E] border border-[#253347] font-mono text-xs text-[#00E5FF]">
                <Sparkles className="w-3.5 h-3.5 text-[#FF5722]" />
                <span>B.Tech Information Technology & Mathematics · 2024–2028</span>
              </div>
              <h2 className="font-mono text-xs sm:text-sm tracking-widest text-[#8899A6] uppercase">
                Software Engineer, Researcher & Polymath
              </h2>
            </div>
          </div>

          <div className="space-y-1">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white uppercase font-sans">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F4EFE6] to-[#CBD5E1]">
                MANAN
              </span>
              <span className="block text-[#FF5722] drop-shadow-[0_0_20px_rgba(255,87,34,0.3)]">
                SHARMA
              </span>
            </h1>
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
              className="flex items-center gap-2 px-4 py-2 rounded bg-[#131C2E] border border-[#253347] text-white hover:text-[#00E5FF] hover:border-[#00E5FF] transition-all duration-200 text-xs font-mono group"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4 text-[#00E5FF] group-hover:scale-110 transition-transform" />
              <span>LinkedIn</span>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded bg-[#131C2E] border border-[#253347] text-white hover:text-[#FF5722] hover:border-[#FF5722] transition-all duration-200 text-xs font-mono group"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4 text-[#FF5722] group-hover:scale-110 transition-transform" />
              <span>GitHub</span>
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 px-4 py-2 rounded bg-[#131C2E] border border-[#253347] text-white hover:text-[#E5A93C] hover:border-[#E5A93C] transition-all duration-200 text-xs font-mono group"
              title="Email Manan"
            >
              <Mail className="w-4 h-4 text-[#E5A93C] group-hover:scale-110 transition-transform" />
              <span>Email</span>
            </a>

            <a
              href={personalInfo.resumeUrl}
              download="Manan_Sharma_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded bg-[#FF5722] hover:bg-[#E64A19] text-white font-mono text-xs font-bold transition-all shadow-lg hover:shadow-orange-500/30"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>

        </div>

        {/* Right Side: Major Navigational Sections Display (Faithful to template_example.jpeg) */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-3 lg:pl-8 border-l border-white/5">
          <div className="font-mono text-xs text-[#00E5FF] tracking-widest uppercase mb-2 flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5" />
            <span>DIRECT SECTOR ROUTING</span>
          </div>

          {[
            { name: 'About Me', href: '#about', sector: '01', desc: 'Background & Core Strengths' },
            { name: 'Experience', href: '#experience', sector: '02', desc: 'UCT & IIT Roorkee' },
            { name: 'Projects', href: '#projects', sector: '03', desc: 'NeuroView, SlipSense & OpenWrt' },
            { name: 'Research', href: '#research', sector: '04', desc: 'EEG Neuroscience & Edge NPU' },
            { name: 'Skills & Stack', href: '#skills', sector: '05', desc: 'Languages, AI/ML & Embedded' },
            { name: 'Education & Certs', href: '#education', sector: '06', desc: 'University of Jammu & AMD' },
            { name: 'Contact Me', href: '#contact', sector: '07', desc: 'Direct Transmission' }
          ].map((item) => (
            <a
              key={item.sector}
              href={item.href}
              className="group flex items-center justify-between p-3 rounded-lg bg-[#0F172A]/70 border border-[#1E293B] hover:border-[#FF5722] hover:bg-[#131C2E] transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-[#FF5722] group-hover:text-[#00E5FF] transition-colors">
                  SECTOR {item.sector}
                </span>
                <span className="font-sans text-base font-semibold text-[#F4EFE6] group-hover:text-white group-hover:translate-x-1 transition-all">
                  {item.name}
                </span>
              </div>
              <span className="hidden sm:inline font-mono text-[10px] text-[#64748B] group-hover:text-[#8899A6]">
                {item.desc}
              </span>
            </a>
          ))}
        </div>

      </div>

      {/* Down Chevron Indicator */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-8 pb-2">
        <a
          href="#about"
          className="flex flex-col items-center gap-1 text-[#8899A6] hover:text-[#FF5722] transition-colors group"
          aria-label="Scroll to About section"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase">INITIALIZE SECTOR 01</span>
          <ChevronDown className="w-5 h-5 animate-bounce group-hover:text-[#FF5722]" />
        </a>
      </div>

    </section>
  );
};
