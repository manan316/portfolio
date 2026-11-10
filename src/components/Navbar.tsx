import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
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
    { num: '01', label: 'OVERVIEW', href: '#hero', id: 'hero' },
    { num: '02', label: 'FLAGSHIPS', href: '#flagships', id: 'flagships' },
    { num: '03', label: 'CHRONICLE', href: '#journey', id: 'journey' },
    { num: '04', label: 'ARCHIVE', href: '#work', id: 'work' },
    { num: '05', label: 'WORKBENCH', href: '#skills', id: 'skills' },
    { num: '06', label: 'CREDENTIALS', href: '#education', id: 'education' },
    { num: '07', label: 'DISPATCH', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#fafaf8] border-b border-[#0a0a0a]/15">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
        {/* Brand in 11px Monospace Uppercase at 0.2em */}
        <a href="#hero" className="flex items-center gap-2 group">
          <span className="w-2 h-2 bg-[#ff4d00] inline-block"></span>
          <span className="font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-[#0a0a0a] group-hover:text-[#ff4d00] transition-colors">
            {personalInfo.name}
          </span>
          <span className="hidden lg:inline font-mono text-[11px] text-[#71717a] tracking-[0.15em] uppercase">
            / POLYMATH DEVELOPER · SILICON TO SATELLITE
          </span>
        </a>

        {/* Monospace Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`font-mono text-[11px] tracking-[0.2em] uppercase transition-colors duration-150 flex items-center gap-1.5 ${
                  isActive
                    ? 'text-[#ff4d00] font-medium'
                    : 'text-[#71717a] hover:text-[#0a0a0a]'
                }`}
              >
                <span className="text-[10px] text-[#71717a]/70">{link.num}</span>
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {onOpenTerminal && (
            <button
              onClick={onOpenTerminal}
              className="hidden sm:inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.2em] uppercase text-[#71717a] hover:text-[#ff4d00] transition-colors py-1 px-2 border border-[#0a0a0a]/15 hover:border-[#ff4d00]"
              title="Terminal [^K]"
            >
              <span>TERM</span>
              <span className="text-[10px] text-[#71717a]">[^K]</span>
            </button>
          )}

          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 bg-[#ff4d00] text-white hover:bg-[#0a0a0a] px-3.5 py-1.5 font-mono text-[11px] font-medium tracking-[0.2em] uppercase transition-colors duration-150"
          >
            <span>RESUME</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1 text-[#0a0a0a] hover:text-[#ff4d00]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fafaf8] border-b border-[#0a0a0a]/15 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-mono text-[11px] tracking-[0.2em] uppercase text-[#0a0a0a] hover:text-[#ff4d00] py-1 border-b border-[#0a0a0a]/10"
            >
              <span className="text-[#ff4d00] mr-2">{link.num}</span>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
