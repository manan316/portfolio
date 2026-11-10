import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-24 pb-16 px-4 sm:px-8 max-w-[1600px] mx-auto hairline-divider">
      {/* Huge Fluid Name Stamp across the bottom */}
      <div className="pb-16 sm:pb-24 overflow-hidden select-none">
        <div className="fluid-display text-[#0a0a0a] uppercase tracking-[-0.05em] leading-[0.82] font-black break-words opacity-90 hover:opacity-100 transition-opacity">
          MANAN SHARMA
        </div>
      </div>

      {/* Monospace Metadata Row */}
      <div className="pt-8 border-t border-[#0a0a0a]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 font-mono text-[11px] tracking-[0.2em] uppercase text-[#71717a]">
        <div className="space-y-1">
          <div className="text-[#0a0a0a] font-medium">
            SOFTWARE ENGINEER & AI/ML SYSTEMS RESEARCHER
          </div>
          <div>
            © {new Date().getFullYear()} MANAN SHARMA. OVERSIZED TYPOGRAPHY ARCHITECTURE.
          </div>
        </div>

        {/* Links & Back to Top */}
        <div className="flex flex-wrap items-center gap-6">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ff4d00] transition-colors flex items-center gap-1"
          >
            <span>GITHUB</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ff4d00] transition-colors flex items-center gap-1"
          >
            <span>LINKEDIN</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={scrollToTop}
            className="hover:text-[#ff4d00] transition-colors flex items-center gap-1 text-[#0a0a0a] font-medium"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
