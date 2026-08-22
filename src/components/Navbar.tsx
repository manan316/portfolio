import React, { useState, useEffect } from 'react';
import { Terminal, Download, Menu, X } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'experience', 'projects', 'research', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
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
        ? 'bg-[#06090E]/90 backdrop-blur-md border-b border-[#253347] py-3 shadow-xl' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / System Status */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg overflow-hidden border border-[#253347] group-hover:border-[#FF5722] transition-colors relative bg-[#131C2E] shrink-0">
              <img
                src={personalInfo.profileImage || "/images/profile.png"}
                alt={personalInfo.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <div className="font-mono text-xs font-bold tracking-widest text-[#F4EFE6] flex items-center gap-2">
                <span>MANAN.SYS</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] beacon-pulse inline-block"></span>
              </div>
              <div className="font-mono text-[10px] text-[#8899A6] tracking-tight">
                SOFTWARE ENGINEER & RESEARCHER
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`font-mono text-xs px-3 py-1.5 rounded transition-all duration-200 ${
                    isActive
                      ? 'text-[#FF5722] bg-[#FF5722]/10 font-bold border border-[#FF5722]/30'
                      : 'text-[#C8D1DC] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
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
              className="flex items-center gap-1.5 font-mono text-xs px-3.5 py-1.5 rounded bg-[#FF5722] hover:bg-[#E64A19] text-white font-semibold shadow-md hover:shadow-orange-500/25 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>RESUME.PDF</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={personalInfo.resumeUrl}
              download="Manan_Sharma_Resume.pdf"
              className="p-2 rounded bg-[#FF5722] text-white text-xs"
              title="Download Resume"
            >
              <Download className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded bg-[#131C2E] border border-[#253347] text-[#F4EFE6] hover:text-[#FF5722]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#06090E] border-b border-[#253347] px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-fadeIn">
          <div className="font-mono text-[10px] text-[#64748B] px-3 py-1 border-b border-white/5">
            // TACTICAL SYSTEM NAVIGATION
          </div>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block font-mono text-xs px-3 py-2 rounded transition-colors ${
                activeSection === link.id
                  ? 'text-[#FF5722] bg-[#FF5722]/10 font-bold border-l-2 border-[#FF5722]'
                  : 'text-[#C8D1DC] hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <a
              href={personalInfo.resumeUrl}
              download="Manan_Sharma_Resume.pdf"
              className="flex items-center justify-center gap-2 font-mono text-xs py-2.5 rounded bg-[#FF5722] text-white font-bold"
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
