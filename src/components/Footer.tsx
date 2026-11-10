import React from 'react';
import { ArrowUp, Sparkles, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { MemphisZigzagDivider } from './MemphisOrnament';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#feca57] text-black border-t-4 border-black py-12 px-4 sm:px-6 relative select-none">
      
      <div className="max-w-[1200px] mx-auto space-y-8">
        
        {/* Top Strip */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b-4 border-black">
          <div className="flex items-center gap-3">
            <span className="w-3.5 h-3.5 rounded-full bg-[#ff6b6b] border-2 border-black animate-pulse"></span>
            <span className="font-sans font-black text-sm tracking-wider uppercase">
              1981 MILAN COLLECTIVE // INTERFACE EDITION
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="memphis-badge bg-white text-black text-[11px]">
              REACT 19 + VITE 6
            </span>
            <span className="memphis-badge bg-[#48dbfb] text-black text-[11px]">
              TAILWIND CSS
            </span>
            <span className="memphis-badge bg-[#1dd1a1] text-black text-[11px]">
              CLOUDFLARE PAGES
            </span>
          </div>
        </div>

        {/* Middle Main Content */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="font-sans font-black text-2xl text-black">
              {personalInfo.name} — Technical Systems Portfolio
            </div>
            <div className="font-sans font-bold text-xs sm:text-sm text-black/80">
              Software Engineer · AI/ML & Embedded Systems Researcher · Polymath
            </div>
          </div>

          {/* Return to Top Pop Button */}
          <button
            onClick={scrollToTop}
            className="memphis-btn self-start md:self-auto py-2.5 px-4 text-xs"
          >
            <span>RETURN TO TOP</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t-3 border-black flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs font-bold text-black">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. Pure geometric energy.
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-black text-white px-2 py-0.5 text-[10px] uppercase">
              NO RESTRAINT // ALL CLASH
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
