import React, { useState, useEffect } from 'react';
import { Terminal, FileText, Menu, X, ChevronRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  onOpenTerminal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'flagships', 'journey', 'work', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

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
    { label: 'OVERVIEW', href: '#hero', id: 'hero' },
    { label: 'FLAGSHIPS', href: '#flagships', id: 'flagships' },
    { label: 'CHRONICLE', href: '#journey', id: 'journey' },
    { label: 'ARCHIVE', href: '#work', id: 'work' },
    { label: 'TOOLCHAIN', href: '#skills', id: 'skills' },
    { label: 'HONORS', href: '#education', id: 'education' },
    { label: 'DISPATCH', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 sm:px-6 lg:px-8 pt-3 pointer-events-none">
      <div
        className="pointer-events-auto flex items-center justify-between w-full max-w-[1400px] bg-[#f5f0e1] border-3 border-[#1a3055] border-t-4 border-t-[#d4553a] shadow-woodblock px-4 sm:px-6 py-2.5 transition-all duration-150"
      >
        {/* Brand / Hanko Seal Stamp */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="hanko-seal font-serif text-sm font-black group-hover:bg-[#bf442a] transition-colors">
            MS
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-sm font-bold tracking-[0.08em] text-[#1a3055] uppercase">
              {personalInfo.name}
            </span>
            <span className="text-[10px] tracking-[0.18em] text-[#2a5a8c] font-semibold uppercase">
              AI/ML & Systems Researcher
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative px-3 py-1.5 text-xs font-bold tracking-[0.14em] uppercase transition-colors duration-120 ${
                  isActive
                    ? 'bg-[#1a3055] text-[#f5f0e1] border-b-2 border-b-[#c9a227]'
                    : 'text-[#1a3055] hover:bg-[#ece5d0] hover:text-[#d4553a]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5">
          {onOpenTerminal && (
            <button
              onClick={onOpenTerminal}
              className="seal-btn-secondary py-1.5 px-3 text-xs tracking-wider group"
              title="Open Command Shell (Ctrl + K)"
            >
              <Terminal className="w-3.5 h-3.5 text-[#d4553a]" />
              <span className="font-mono text-[11px] hidden lg:inline text-[#1a3055]">~</span>
            </button>
          )}

          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="seal-btn-primary py-1.5 px-4 text-xs tracking-[0.15em]"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>RESUME</span>
          </a>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 border-2 border-[#1a3055] bg-[#ece5d0] text-[#1a3055]"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-20 inset-x-4 bg-[#f5f0e1] border-3 border-[#1a3055] border-t-4 border-t-[#d4553a] p-4 space-y-2 shadow-woodblock-lg pointer-events-auto">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-2.5 text-xs font-bold tracking-[0.15em] text-[#1a3055] hover:bg-[#1a3055] hover:text-[#f5f0e1] border-b border-[#1a3055]/20 uppercase transition-colors"
            >
              <span>{link.label}</span>
              <ChevronRight className="w-4 h-4 text-[#d4553a]" />
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
