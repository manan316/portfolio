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
        { id: 'skills', name: 'Skills' },
        { id: 'education', name: 'Education' },
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
    <aside className="hidden 2xl:flex fixed left-0 top-0 bottom-0 z-40 w-11 bg-[#fdf6e3] border-r-4 border-black flex-col items-center justify-between py-10 pointer-events-none select-none">
      {/* Top Sector Indicator */}
      <div className="w-3 h-20 bg-white border-2 border-black overflow-hidden shadow-[2px_2px_0_#000000]">
        <div 
          className="w-full bg-[#ff6b6b] transition-all duration-150"
          style={{ height: `${scrollPercent}%` }}
        />
      </div>
      
      {/* Vertical Active Text */}
      <div className="vertical-gutter-text font-sans text-xs font-black tracking-widest text-black uppercase">
        <span className="text-[#ff6b6b] mr-2">1981 //</span>
        <span>{activeSection}</span>
      </div>

      {/* Percentage Pill */}
      <div className="w-8 h-8 rounded-full bg-[#feca57] border-2 border-black flex items-center justify-center font-mono text-[10px] font-bold text-black shadow-[2px_2px_0_#000000]">
        {scrollPercent}%
      </div>
    </aside>
  );
};
