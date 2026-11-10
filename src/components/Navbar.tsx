import React, { useState, useEffect } from 'react';
import { Download, Menu, X, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  onOpenTerminal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalDocHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalDocHeight > 0) {
        setScrollProgress((scrollY / totalDocHeight) * 100);
      }

      const sections = ['hero', 'about', 'experience', 'projects', 'research', 'skills', 'education', 'contact'];
      const scrollPosition = scrollY + 200;

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fdf6e3] border-b-4 border-black shadow-[0_4px_0_#000000]">
      {/* Scroll Progress Bar - Coral with hard border */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#feca57] border-b-2 border-black overflow-hidden">
        <div 
          className="h-full bg-[#ff6b6b] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-2.5">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand badge */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group select-none no-underline"
          >
            <div className="w-10 h-10 border-3 border-black bg-[#ff6b6b] flex items-center justify-center shadow-[3px_3px_0_#000000] group-hover:bg-[#feca57] transition-colors duration-150 relative">
              <span className="font-sans font-black text-white group-hover:text-black text-lg">M</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#48dbfb] border-2 border-black absolute -top-1 -right-1 group-hover:rotate-45 transition-transform"></span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-black text-base tracking-tight text-black group-hover:text-[#ff6b6b] pop-swap leading-none">
                MANAN SHARMA
              </span>
              <span className="font-mono font-bold text-[10px] tracking-wider text-[#5f27cd] uppercase mt-0.5">
                ENGINEER // 1981 MILAN
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1.5" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs font-black tracking-wider uppercase transition-all duration-150 border-3 ${
                    isActive
                      ? 'bg-[#ff6b6b] text-white border-black shadow-[3px_3px_0_#000000]'
                      : 'border-transparent text-black hover:border-black hover:bg-[#feca57] hover:shadow-[3px_3px_0_#000000]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {onOpenTerminal && (
              <button
                onClick={onOpenTerminal}
                className="memphis-btn-blue text-xs py-2 px-3.5 border-3 shadow-[3px_3px_0_#000000] active:translate-x-1 active:translate-y-1"
                title="Open Terminal (Ctrl + K)"
              >
                <Terminal className="w-3.5 h-3.5" />
                <span className="font-black">TERMINAL</span>
                <span className="text-[10px] bg-black text-white px-1 font-mono font-bold">^K</span>
              </button>
            )}

            <a
              href={personalInfo.resumeUrl}
              download="Manan_Sharma_Resume.pdf"
              className="memphis-btn text-xs py-2 px-4 border-3 shadow-[3px_3px_0_#000000] active:translate-x-1 active:translate-y-1"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="font-black">RESUME</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            className="lg:hidden p-2 bg-[#feca57] border-3 border-black shadow-[3px_3px_0_#000000] active:translate-x-1 active:translate-y-1"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fdf6e3] border-t-4 border-black p-5 shadow-[0_8px_0_#000000] animate-fadeIn">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 text-center text-xs font-black uppercase border-3 border-black bg-white shadow-[3px_3px_0_#000000] hover:bg-[#48dbfb] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex gap-2">
            {onOpenTerminal && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTerminal();
                }}
                className="memphis-btn-blue text-xs flex-1 py-2.5 border-3"
              >
                <Terminal className="w-4 h-4" />
                <span>TERMINAL</span>
              </button>
            )}
            <a
              href={personalInfo.resumeUrl}
              download="Manan_Sharma_Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="memphis-btn text-xs flex-1 py-2.5 border-3"
            >
              <Download className="w-4 h-4" />
              <span>RESUME</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
