import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#06090E] text-[#94A3B8] border-t border-[#253347] py-8 sm:py-10 px-4 sm:px-6 lg:px-12 font-mono text-xs">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Top Status Strip */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/5 text-[11px]">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#00E5FF] beacon-pulse"></div>
            <span className="text-white font-bold tracking-wider">
              PRTS_LINK ACTIVE // CORE STATUS: OPTIMAL
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[#64748B]">
            <span>HOST: VITE + REACT + TYPESCRIPT</span>
            <span>//</span>
            <span>STYLING: TACTICAL BLUEPRINT</span>
            <span>//</span>
            <span>SEC_LEVEL: 01_ROOT</span>
          </div>
        </div>

        {/* Middle Main Content */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-sm font-bold text-white font-sans">
              {personalInfo.name} — Portfolio & Research System
            </div>
            <div className="text-[#64748B] text-[11px]">
              Software Engineer · AI/ML Researcher · Embedded & Edge AI Specialist
            </div>
          </div>

          {/* Quick Back to Top */}
          <button
            onClick={scrollToTop}
            className="self-start md:self-auto inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-[#131C2E] hover:bg-[#1E293B] border border-[#253347] text-white transition-all text-xs group"
          >
            <span>RETURN TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#FF5722] group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[10px] text-[#64748B]">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All verified records and technical artifacts preserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Designed & Architected for High-Impact Technical Discovery</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
