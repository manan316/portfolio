import React, { useEffect, useState } from 'react';

export const VerticalGutterTracker: React.FC = () => {
  const [activeSection, setActiveSection] = useState('System Root');
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollPercent(Math.min(Math.round((scrollY / totalHeight) * 100), 100));
      }

      if (scrollY < 200) {
        setActiveSection('System Root');
        return;
      }

      const sections = [
        { id: 'about', name: 'About Me' },
        { id: 'experience', name: 'Experience' },
        { id: 'projects', name: 'Projects' },
        { id: 'research', name: 'Research' },
        { id: 'skills', name: 'Skills & Stack' },
        { id: 'education', name: 'Education & Certs' },
        { id: 'contact', name: 'Contact' },
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && scrollY >= el.offsetTop - 300) {
          setActiveSection(sections[i].name);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <aside className="hidden xl:flex fixed left-0 top-0 bottom-0 z-40 w-12 bg-[#08090D]/95 border-r border-[#1E263D] flex-col items-center justify-between py-8 pointer-events-none select-none transition-all duration-300 shadow-[4px_0_24px_rgba(0,0,0,0.8)] backdrop-blur-md">
      {/* Top Sector Indicator */}
      <div className="w-1.5 h-16 bg-[#131828] rounded-full overflow-hidden border border-[#1E263D]">
        <div 
          className="w-full bg-gradient-to-b from-[#00F0FF] to-[#00FF9D] shadow-[0_0_10px_#00F0FF] transition-all duration-200"
          style={{ height: `${scrollPercent}%` }}
        />
      </div>
      
      {/* Vertical Active Text with Smooth Fade */}
      <div className="vertical-gutter-text font-mono text-[11px] font-bold tracking-[0.25em] text-[#64748B] uppercase transition-all duration-300">
        <span className="text-[#00F0FF] mr-2">KERNEL //</span>
        <span className="text-[#F1F5F9]">{activeSection}</span>
      </div>

      {/* Terminal Node Indicator */}
      <div className="flex flex-col items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-[#00FF9D] beacon-pulse shadow-[0_0_10px_#00FF9D]"></span>
        <div className="w-6 h-6 rounded bg-[#0F121E] border border-[#1E263D] flex items-center justify-center text-[9px] font-mono text-[#00F0FF] shadow-xs">
          0x
        </div>
      </div>
    </aside>
  );
};
