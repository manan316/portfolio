import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08090D] text-[#94A3B8] border-t border-[#1E263D] py-10 px-4 sm:px-6 lg:px-12 font-mono text-xs relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-[#00F0FF]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto space-y-6 relative z-10">
        
        {/* Top Status Strip */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#1E263D] text-[11px]">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#00FF9D] beacon-pulse shadow-[0_0_10px_rgba(0,255,157,0.8)]"></div>
            <span className="text-[#F1F5F9] font-bold tracking-wider">
              PRTS_LINK ACTIVE // KERNEL DAEMON: OPTIMAL
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[#64748B]">
            <span className="hover:text-white transition-colors">HOST: VITE + REACT + TYPESCRIPT</span>
            <span>//</span>
            <span className="hover:text-[#00F0FF] transition-colors">THEME: LINUX KERNEL CYBERNETIC</span>
            <span>//</span>
            <span className="hover:text-[#00FF9D] transition-colors">SEC_LEVEL: 01_ROOT</span>
          </div>
        </div>

        {/* Middle Main Content */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-sm font-bold text-[#F1F5F9] font-sans">
              {personalInfo.name} — Portfolio & Research System
            </div>
            <div className="text-[#64748B] text-[11px]">
              Software Engineer · AI/ML Researcher · Embedded & Edge AI Specialist
            </div>
          </div>

          {/* Quick Back to Top */}
          <button
            onClick={scrollToTop}
            className="self-start md:self-auto inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0F121E] hover:bg-[#00F0FF] border border-[#1E263D] hover:border-[#00F0FF] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] text-[#F1F5F9] hover:text-[#08090D] transition-all text-xs group interactive-btn font-bold"
          >
            <span>RETURN TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#00F0FF] group-hover:text-[#08090D] group-hover:-translate-y-1 transition-transform duration-200" />
          </button>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-4 border-t border-[#1E263D] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[10px] text-[#64748B]">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All verified records and technical artifacts preserved.
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[#00F0FF]">⚡</span>
            <span>Architected for High-Impact Technical Discovery</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
