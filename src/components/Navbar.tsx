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

      const sections = ['hero', 'flagships', 'lab', 'journey', 'work', 'skills', 'contact'];
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
    { label: 'Sim Lab', href: '#lab', id: 'lab', badge: 'Interactive' },
    { label: 'Journey', href: '#journey', id: 'journey' },
    { label: 'Archive', href: '#work', id: 'work' },
    { label: 'Stack', href: '#skills', id: 'skills' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 sm:px-6 pt-4 pointer-events-none">
      <div
        className={`pointer-events-auto flex items-center justify-between w-full max-w-5xl rounded-full px-4 sm:px-6 py-2.5 transition-all duration-300 ${
          scrolled
            ? 'bg-zinc-900/85 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/60'
            : 'bg-zinc-900/60 backdrop-blur-lg border border-white/5'
        }`}
      >
        {/* Brand / Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1px] flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full rounded-full bg-zinc-950 flex items-center justify-center">
              <span className="text-xs font-black bg-gradient-to-tr from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                MS
              </span>
            </div>
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-xs font-semibold text-zinc-100 group-hover:text-white transition-colors">
              Manan Sharma
            </span>
            <span className="text-[10px] text-zinc-400">
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
                className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-white/10 shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5'
                }`}
              >
                {link.label}
                {link.badge && (
                  <span className="ml-1.5 px-1.5 py-0.2 rounded-full text-[9px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    {link.badge}
                  </span>
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {onOpenTerminal && (
            <button
              onClick={onOpenTerminal}
              className="p-2 rounded-full text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-xs flex items-center gap-1.5"
              title="Launch Terminal (Ctrl + K)"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden lg:inline text-[11px] font-mono text-zinc-400">~</span>
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
            className="md:hidden p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/5"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-20 inset-x-4 bg-zinc-900/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 space-y-2 shadow-2xl pointer-events-auto">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-2.5 text-sm font-medium text-zinc-200 hover:text-white rounded-xl hover:bg-white/5 transition-colors"
            >
              <span>{link.label}</span>
              <ChevronRight className="w-4 h-4 text-zinc-500" />
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
