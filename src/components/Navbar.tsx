import React, { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 30);

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
        ? 'bg-[#121214]/95 backdrop-blur-xl border-b border-[#2E2E35] py-2.5 shadow-[0_10px_35px_rgba(0,0,0,0.8)]' 
        : 'bg-gradient-to-b from-[#121214]/90 to-transparent py-4'
    }`}>
      {/* Scroll Progress Bar at the top of Navbar - Retro 5-color Stripe */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#2E2E35] overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-[#B83A3A] via-[#E06D3B] via-[#E8A838] via-[#3D8B7A] to-[#3B281C] transition-all duration-150 ease-out shadow-[0_0_12px_rgba(224,109,59,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / System Status */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl overflow-hidden border border-[#2E2E35] group-hover:border-[#E06D3B] group-hover:shadow-[0_0_18px_rgba(224,109,59,0.3)] transition-all duration-300 relative bg-[#18181A] shrink-0">
              <img
                src={personalInfo.profileImage || "/images/profile.png"}
                alt={personalInfo.name}
                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div>
              <div className="font-mono text-xs font-bold tracking-widest text-[#FAF5EE] flex items-center gap-2 group-hover:text-[#E06D3B] transition-colors">
                <span>MANAN.SYS</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#E06D3B] beacon-pulse inline-block shadow-[0_0_8px_#E06D3B]"></span>
              </div>
              <div className="font-mono text-[10px] text-[#A8A29E] tracking-tight group-hover:text-[#D6D0C5] transition-colors">
                SOFTWARE ENGINEER & RESEARCHER
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 bg-[#18181A]/90 p-1.5 rounded-xl border border-[#2E2E35] backdrop-blur-md shadow-lg">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative font-mono text-xs px-3 py-1.5 rounded-lg transition-all duration-200 interactive-btn ${
                    isActive
                      ? 'text-[#FAF5EE] bg-[#E06D3B]/20 font-bold border border-[#E06D3B]/50 shadow-[0_0_12px_rgba(224,109,59,0.25)]'
                      : 'text-[#A8A29E] hover:text-[#FAF5EE] hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#E06D3B] rounded-full shadow-[0_0_6px_#E06D3B]"></span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={personalInfo.resumeUrl}
              download="Manan_Sharma_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs px-4 py-2 rounded-xl bg-[#1E1E22] hover:bg-[#E06D3B] text-[#FAF5EE] hover:text-white font-bold shadow-md hover:shadow-[0_0_20px_rgba(224,109,59,0.4)] interactive-btn border border-[#2E2E35] hover:border-[#E06D3B] transition-all"
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
              className="p-2 rounded-xl bg-[#1E1E22] border border-[#2E2E35] text-[#FAF5EE] text-xs interactive-btn shadow-md font-bold"
              title="Download Resume"
            >
              <Download className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#18181A] border border-[#2E2E35] text-[#FAF5EE] hover:text-[#E06D3B] hover:border-[#E06D3B] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#121214]/98 backdrop-blur-2xl border-b border-[#2E2E35] px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-fadeIn">
          <div className="font-mono text-[10px] text-[#A8A29E] px-3 py-1 border-b border-white/5 flex items-center justify-between">
            <span>// TACTICAL SYSTEM NAVIGATION</span>
            <span className="text-[#E06D3B] font-bold">ONLINE</span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block font-mono text-xs px-3 py-2.5 rounded-xl transition-all ${
                activeSection === link.id
                  ? 'text-[#FAF5EE] bg-[#E06D3B]/20 font-bold border-l-4 border-[#E06D3B]'
                  : 'text-[#A8A29E] hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <a
              href={personalInfo.resumeUrl}
              download="Manan_Sharma_Resume.pdf"
              className="flex items-center justify-center gap-2 font-mono text-xs py-3 rounded-xl bg-[#E06D3B] hover:bg-[#B85D3B] text-white font-bold shadow-lg"
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
