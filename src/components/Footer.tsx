import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t-3 border-[#1a3055] bg-[#f5f0e1] py-12 px-4 sm:px-8 lg:px-12 2xl:px-16 mt-20 w-full">
      <div className="max-w-[1720px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="hanko-seal w-7 h-7 text-xs">MS</span>
            <span className="font-serif text-base font-bold text-[#1a3055] tracking-tight">
              {personalInfo.name}
            </span>
          </div>
          <div className="font-serif text-xs text-[#1a3055]/75 mt-1">
            Software Engineer & AI/ML Systems Researcher
          </div>
          <div className="font-serif text-[11px] text-[#1a3055]/60 mt-2">
            © {new Date().getFullYear()} Manan Sharma. Composed in Ukiyo-e Digital Woodblock Architecture.
          </div>
        </div>

        {/* Links & Back to top */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 border-2 border-[#1a3055] bg-[#f5f0e1] shadow-woodblock flex items-center justify-center hover:bg-[#c9a227]/20 transition-all duration-150"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4 text-[#1a3055]" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 border-2 border-[#1a3055] bg-[#f5f0e1] shadow-woodblock flex items-center justify-center hover:bg-[#c9a227]/20 transition-all duration-150"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4 text-[#1a3055]" />
          </a>
          <button
            onClick={scrollToTop}
            className="seal-btn-secondary py-1.5 px-3.5 text-xs flex items-center gap-1.5 font-serif font-bold uppercase tracking-wider"
            title="Back to Top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#1a3055]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
