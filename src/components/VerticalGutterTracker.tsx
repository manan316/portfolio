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
    <aside className="hidden xl:flex fixed left-3 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-5 pointer-events-none select-none transition-all duration-300">
      {/* Top Sector Indicator */}
      <div className="w-1.5 h-16 bg-[#1E293B] rounded-full opacity-80 relative overflow-hidden">
        <div 
          className="w-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF] transition-all duration-200"
          style={{ height: `${scrollPercent}%` }}
        />
      </div>
      
      {/* Vertical Active Text with Smooth Fade */}
      <div className="vertical-gutter-text font-mono text-[11px] font-bold tracking-[0.25em] text-[#64748B] uppercase transition-all duration-300">
        <span className="text-[#00E5FF] mr-2 drop-shadow-[0_0_8px_rgba(0,229,255,0.7)]">SYS //</span>
        <span className="text-[#F8FAFC]">{activeSection}</span>
      </div>

      {/* Terminal Node */}
      <div className="flex flex-col items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-[#00E5FF] beacon-pulse shadow-[0_0_10px_rgba(0,229,255,0.9)]"></span>
        <span className="w-1 h-8 bg-gradient-to-b from-[#00E5FF]/40 to-transparent rounded-full"></span>
      </div>
    </aside>
  );
};
