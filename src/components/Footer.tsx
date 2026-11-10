import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-200 bg-white/80 backdrop-blur-md py-12 px-4 sm:px-8 lg:px-12 2xl:px-16 mt-20 w-full">
      <div className="max-w-[1720px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="text-sm font-bold text-slate-900 tracking-tight">
            {personalInfo.name}
          </div>
          <div className="text-xs text-slate-500 mt-0.5">
            Software Engineer & AI/ML Systems Researcher
          </div>
          <div className="text-[11px] text-slate-400 font-mono mt-2">
            © {new Date().getFullYear()} Manan Sharma. Designed in Bento Grid Architecture.
          </div>
        </div>

        {/* Links & Back to top */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full text-slate-600 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors shadow-xs"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full text-slate-600 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors shadow-xs"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            className="bento-btn-secondary py-1.5 px-3.5 text-xs flex items-center gap-1.5"
            title="Back to Top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
