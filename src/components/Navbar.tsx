import React, { useState, useEffect } from 'react';
import { Download, Menu, X, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  onOpenTerminal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 25);

      const totalDocHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalDocHeight > 0) {
        setScrollProgress((scrollY / totalDocHeight) * 100);
      }

      const sections = ['hero', 'about', 'experience', 'projects', 'research', 'skills', 'education', 'contact'];
      const scrollPosition = scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'EXPERIENCE', href: '#experience', id: 'experience' },
    { label: 'PROJECTS', href: '#projects', id: 'projects' },
    { label: 'RESEARCH', href: '#research', id: 'research' },
    { label: 'SKILLS', href: '#skills', id: 'skills' },
    { label: 'EDUCATION', href: '#education', id: 'education' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#08090D]/85 backdrop-blur-2xl border-b border-[#1E263D]/80 py-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.85)]' 
        : 'bg-gradient-to-b from-[#08090D]/90 via-[#08090D]/50 to-transparent py-4'
    }`}>
      {/* Scroll Progress Bar at the top of Navbar - Glowing Cyber Spectrum */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#1E263D]/60 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-[#00F0FF] via-[#38BDF8] via-[#00FF9D] via-[#8B5CF6] to-[#00F0FF] transition-all duration-150 ease-out shadow-[0_0_12px_#00F0FF]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / System Status */}
          <a href="#hero" className="flex items-center gap-3 group interactive-btn">
            <div className="w-9 h-9 rounded-xl overflow-hidden border border-[#1E263D] group-hover:border-[#00F0FF] group-hover:shadow-[0_0_22px_rgba(0,240,255,0.45)] transition-all duration-300 relative bg-[#0F121E]/90 shrink-0">
              <img
                src={personalInfo.profileImage || "/images/profile.png"}
                alt={personalInfo.name}
                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div>
              <div className="font-mono text-xs font-bold tracking-widest text-[#F1F5F9] flex items-center gap-2 group-hover:text-[#00F0FF] transition-colors">
                <span>MANAN.SYS</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] beacon-pulse inline-block shadow-[0_0_8px_#00FF9D]"></span>
              </div>
              <div className="font-mono text-[10px] text-[#64748B] tracking-tight group-hover:text-[#94A3B8] transition-colors flex items-center gap-1">
                <span>KERNEL_DAEMON</span>
                <span className="text-[#00FF9D] font-bold">ONLINE</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation - Frosted Glass Pill Container */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 bg-[#0F121E]/75 p-1.5 rounded-2xl border border-white/[0.08] backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.06)]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative font-mono text-xs px-3 py-1.5 rounded-xl transition-all duration-250 interactive-btn ${
                    isActive
                      ? 'text-[#00F0FF] bg-[#00F0FF]/15 font-bold border border-[#00F0FF]/50 shadow-[0_0_16px_rgba(0,240,255,0.25),inset_0_1px_1px_rgba(255,255,255,0.1)]'
                      : 'text-[#94A3B8] hover:text-[#F1F5F9] hover:bg-white/[0.06] border border-transparent'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#00F0FF] rounded-full shadow-[0_0_8px_#00F0FF]"></span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-2.5">
            {onOpenTerminal && (
              <button
                onClick={onOpenTerminal}
                className="flex items-center gap-1.5 font-mono text-xs px-3.5 py-2 rounded-xl bg-[#0F121E]/80 hover:bg-[#00F0FF] text-[#00F0FF] hover:text-[#08090D] font-bold border border-[#00F0FF]/30 hover:border-[#00F0FF] interactive-btn transition-all shadow-sm"
                title="Launch Interactive Terminal (Ctrl + K)"
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>TERMINAL</span>
              </button>
            )}
            <a
              href={personalInfo.resumeUrl}
              download="Manan_Sharma_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs px-4 py-2 rounded-xl bg-gradient-to-r from-[#00F0FF]/15 to-[#00FF9D]/15 hover:from-[#00F0FF] hover:to-[#38BDF8] text-[#00F0FF] hover:text-[#08090D] font-bold shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] interactive-btn border border-[#00F0FF]/40 hover:border-[#00F0FF] transition-all backdrop-blur-md"
            >
              <Download className="w-3.5 h-3.5 animate-bounce" />
              <span>RESUME.PDF</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={personalInfo.resumeUrl}
              download="Manan_Sharma_Resume.pdf"
              className="p-2 rounded-xl bg-[#0F121E]/90 border border-[#1E263D] text-[#00F0FF] text-xs interactive-btn shadow-md font-bold"
              title="Download Resume"
            >
              <Download className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#0F121E]/90 border border-[#1E263D] text-[#F1F5F9] hover:text-[#00F0FF] hover:border-[#00F0FF] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#08090D]/95 backdrop-blur-2xl border-b border-[#1E263D] px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-fadeIn">
          <div className="font-mono text-[10px] text-[#64748B] px-3 py-1 border-b border-white/5 flex items-center justify-between">
            <span>// LINUX KERNEL NAVIGATION HUD</span>
            <span className="text-[#00FF9D] font-bold">ONLINE</span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block font-mono text-xs px-3 py-2.5 rounded-xl transition-all ${
                activeSection === link.id
                  ? 'text-[#00F0FF] bg-[#00F0FF]/15 font-bold border-l-4 border-[#00F0FF] shadow-[inset_0_0_15px_rgba(0,240,255,0.15)]'
                  : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <a
              href={personalInfo.resumeUrl}
              download="Manan_Sharma_Resume.pdf"
              className="flex items-center justify-center gap-2 font-mono text-xs py-3 rounded-xl bg-gradient-to-r from-[#00F0FF] to-[#38BDF8] text-[#08090D] font-bold shadow-lg"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD RESUME (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
