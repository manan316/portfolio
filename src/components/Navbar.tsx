import React, { useState, useEffect } from 'react';
import { Terminal, FileText, Menu, X, Sparkles, ChevronRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  onOpenTerminal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

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
    { label: 'Overview', href: '#hero', id: 'hero' },
    { label: 'Flagships', href: '#flagships', id: 'flagships' },
    { label: 'Journey', href: '#journey', id: 'journey' },
    { label: 'Archive', href: '#work', id: 'work' },
    { label: 'Stack', href: '#skills', id: 'skills' },
    { label: 'Credentials', href: '#education', id: 'education' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 sm:px-6 lg:px-8 pt-4 pointer-events-none">
      <div
        className={`pointer-events-auto flex items-center justify-between w-full max-w-[1720px] rounded-full px-4 sm:px-6 py-2.5 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-2xl border border-slate-200/90 shadow-lg shadow-slate-900/5 ring-1 ring-slate-900/5'
            : 'bg-white/75 backdrop-blur-xl border border-slate-200/70 shadow-sm'
        }`}
      >
        {/* Brand / Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 via-indigo-600 to-fuchsia-600 p-[1.5px] flex items-center justify-center shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
              <span className="text-xs font-black bg-gradient-to-tr from-cyan-600 via-indigo-600 to-fuchsia-600 bg-clip-text text-transparent">
                MS
              </span>
            </div>
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-xs font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
              Manan Sharma
            </span>
            <span className="text-[10px] text-slate-500 font-medium">
              Software Engineer & AI/ML Systems
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
                className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-slate-950 bg-slate-100 font-semibold border border-slate-200/90 shadow-xs'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/70'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {onOpenTerminal && (
            <button
              onClick={onOpenTerminal}
              className="p-2 rounded-full text-slate-700 hover:text-slate-950 bg-slate-100/80 hover:bg-slate-200/80 border border-slate-200/90 transition-all text-xs flex items-center gap-1.5 group"
              title="Launch Terminal (Ctrl + K)"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-600 group-hover:rotate-12 transition-transform" />
              <span className="hidden lg:inline text-[11px] font-mono text-slate-500">~</span>
            </button>
          )}

          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bento-btn-primary py-1.5 px-3.5 text-xs font-medium"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full text-slate-600 hover:text-slate-950 hover:bg-slate-100"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-20 inset-x-4 bg-white/95 backdrop-blur-2xl border border-slate-200 rounded-2xl p-4 space-y-2 shadow-2xl pointer-events-auto">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-2.5 text-sm font-medium text-slate-800 hover:text-cyan-700 rounded-xl hover:bg-slate-50 transition-colors"
            >
              <span>{link.label}</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
