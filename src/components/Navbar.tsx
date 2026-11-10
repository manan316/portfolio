import React, { useState, useEffect } from 'react';
import { Download, Menu, X, Terminal, Activity, FileText } from 'lucide-react';
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

      const sections = ['hero', 'about', 'lab', 'case-studies', 'journey', 'work', 'skills', 'education', 'contact'];
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
    { label: '⚡ SIM LAB', href: '#lab', id: 'lab', highlight: true },
    { label: 'CASE STUDIES', href: '#case-studies', id: 'case-studies' },
    { label: 'JOURNEY', href: '#journey', id: 'journey' },
    { label: 'ARCHIVE', href: '#work', id: 'work' },
    { label: 'WORKBENCH', href: '#skills', id: 'skills' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fdf6e3] border-b-4 border-black shadow-[0_4px_0_#000000]">
      {/* Scroll Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#feca57] border-b-2 border-black overflow-hidden">
        <div 
          className="h-full bg-[#ff6b6b] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5">
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
                AI & SYSTEMS // 1981 MILAN
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-1.5" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-2.5 py-1 text-xs font-black tracking-wider uppercase transition-all duration-150 border-3 ${
                    link.highlight
                      ? isActive
                        ? 'bg-[#ff6b6b] text-white border-black shadow-[3px_3px_0_#000000]'
                        : 'bg-[#feca57] text-black border-black shadow-[2px_2px_0_#000000] hover:bg-[#ff6b6b] hover:text-white'
                      : isActive
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
          <div className="hidden sm:flex items-center gap-2.5">
            {onOpenTerminal && (
              <button
                onClick={onOpenTerminal}
                className="memphis-btn-blue text-xs py-1.5 px-3 flex items-center gap-1.5 border-3"
                title="Launch Interactive Memphis Terminal"
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>SHELL [~]</span>
              </button>
            )}

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="memphis-btn text-xs py-1.5 px-3 flex items-center gap-1.5 border-3"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>RESUME</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex xl:hidden items-center gap-2">
            {onOpenTerminal && (
              <button
                onClick={onOpenTerminal}
                className="p-1.5 bg-[#48dbfb] border-3 border-black shadow-[2px_2px_0_#000000]"
                title="Terminal"
              >
                <Terminal className="w-4 h-4 text-black" />
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 bg-[#feca57] border-3 border-black shadow-[2px_2px_0_#000000] text-black focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#fdf6e3] border-b-4 border-black px-4 py-4 space-y-2 animate-fade-in shadow-memphis-lg">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 text-sm font-black border-3 border-black uppercase transition-colors ${
                link.highlight ? 'bg-[#feca57] text-black' : 'bg-white hover:bg-[#ff6b6b] hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}

          <div className="pt-2 flex flex-col gap-2 border-t-2 border-black">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="memphis-btn text-xs py-2.5 text-center flex items-center justify-center gap-1.5"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume [PDF]</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
