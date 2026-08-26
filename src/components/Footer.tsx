import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121214] text-[#A8A29E] border-t border-[#2E2E35] py-10 px-4 sm:px-6 lg:px-12 font-mono text-xs relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-[#E06D3B]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto space-y-6 relative z-10">
        
        {/* Top Status Strip */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/5 text-[11px]">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#E06D3B] beacon-pulse shadow-[0_0_10px_rgba(224,109,59,0.8)]"></div>
            <span className="text-[#FAF5EE] font-bold tracking-wider">
              PRTS_LINK ACTIVE // CORE STATUS: OPTIMAL
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[#71717A]">
            <span className="hover:text-white transition-colors">HOST: VITE + REACT + TYPESCRIPT</span>
            <span>//</span>
            <span className="hover:text-[#E06D3B] transition-colors">THEME: VINTAGE ANALOG EDITORIAL</span>
            <span>//</span>
            <span className="hover:text-[#E8A838] transition-colors">SEC_LEVEL: 01_ROOT</span>
          </div>
        </div>

        {/* Middle Main Content */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-sm font-bold text-[#FAF5EE] font-sans">
              {personalInfo.name} — Portfolio & Research System
            </div>
            <div className="text-[#71717A] text-[11px]">
              Software Engineer · AI/ML Researcher · Embedded & Edge AI Specialist
            </div>
          </div>

          {/* Quick Back to Top */}
          <button
            onClick={scrollToTop}
            className="self-start md:self-auto inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1E1E22] hover:bg-[#E06D3B] border border-[#2E2E35] hover:border-[#E06D3B] hover:shadow-[0_0_15px_rgba(224,109,59,0.25)] text-[#FAF5EE] hover:text-white transition-all text-xs group interactive-btn"
          >
            <span>RETURN TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#E06D3B] group-hover:text-white group-hover:-translate-y-1 transition-transform duration-200" />
          </button>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[10px] text-[#71717A]">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All verified records and technical artifacts preserved.
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[#E06D3B]">⚡</span>
            <span>Architected for High-Impact Technical Discovery</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
