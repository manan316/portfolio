import React, { useEffect, useState } from 'react';

export const VerticalGutterTracker: React.FC = () => {
  const [activeSection, setActiveSection] = useState('About Me');
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollPercent(Math.min(Math.round((scrollY / totalHeight) * 100), 100));
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
    <aside className="hidden xl:flex fixed left-0 top-0 bottom-0 z-40 w-12 bg-[#141416] border-r border-[#26262B] flex-col items-center justify-between py-8 pointer-events-none select-none transition-all duration-300 shadow-md">
      {/* Top Sector Indicator */}
      <div className="w-1.5 h-16 bg-[#26262B] rounded-full overflow-hidden">
        <div 
          className="w-full bg-[#E06D3B] shadow-[0_0_8px_#E06D3B] transition-all duration-200"
          style={{ height: `${scrollPercent}%` }}
        />
      </div>
      
      {/* Vertical Active Text with Smooth Fade */}
      <div className="vertical-gutter-text font-mono text-[11px] font-bold tracking-[0.25em] text-[#52525B] uppercase transition-all duration-300">
        <span className="text-[#E06D3B] mr-2">SYS //</span>
        <span className="text-[#FAF5EE]">{activeSection}</span>
      </div>

      {/* Terminal Node Indicator */}
      <div className="flex flex-col items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-[#E06D3B] beacon-pulse shadow-[0_0_8px_rgba(224,109,59,0.8)]"></span>
        <div className="w-5 h-5 rounded border border-[#2E2E35] flex items-center justify-center text-[8px] font-mono text-[#71717A]">
          &lt;&gt;
        </div>
      </div>
    </aside>
  );
};
