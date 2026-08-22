import React, { useEffect, useState } from 'react';

export const VerticalGutterTracker: React.FC = () => {
  const [activeSection, setActiveSection] = useState('About Me');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <aside className="hidden xl:flex fixed left-3 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-6 pointer-events-none select-none">
      {/* Top Sector Indicator */}
      <div className="w-1.5 h-16 bg-gradient-to-b from-[#FF5722] to-transparent rounded-full opacity-60"></div>
      
      {/* Vertical Active Text */}
      <div className="vertical-gutter-text font-mono text-[11px] font-bold tracking-[0.25em] text-[#64748B] uppercase">
        <span className="text-[#FF5722] mr-2">SYS //</span>
        <span>{activeSection}</span>
      </div>

      {/* Terminal Node */}
      <div className="flex flex-col items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-[#00E5FF] beacon-pulse"></span>
        <span className="w-1 h-8 bg-[#253347]"></span>
      </div>
    </aside>
  );
};
