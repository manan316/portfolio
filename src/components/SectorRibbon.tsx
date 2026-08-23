import React from 'react';

interface SectorRibbonProps {
  sectorNumber: string;
  sectorName: string;
  dark?: boolean;
}

export const SectorRibbon: React.FC<SectorRibbonProps> = ({ sectorNumber, sectorName }) => {
  const item = (
    <div className="flex items-center gap-6 sm:gap-10 px-4 sm:px-6">
      <span className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#00E5FF] beacon-pulse shadow-[0_0_8px_#00E5FF]"></span>
        <span className="text-[#00E5FF] font-black tracking-widest">SECTOR {sectorNumber}</span>
      </span>
      <span className="text-white/20 font-light">//</span>
      <span className="tracking-widest uppercase text-[#F8FAFC] font-bold">{sectorName}</span>
      <span className="text-[#FF5722] select-none font-bold">▲</span>
      <span className="text-[#64748B] font-mono text-[10px] hidden md:inline tracking-normal">SYS_REF: S0{sectorNumber}_ACTIVE</span>
      <span className="text-[#00E5FF]/60 font-bold select-none">▼</span>
    </div>
  );

  return (
    <div className="w-full overflow-hidden select-none border-y border-[#1E293B] bg-[#06090E]/90 backdrop-blur-md relative shadow-[0_4px_25px_rgba(0,0,0,0.8)]">
      <div className="py-2.5 flex items-center font-mono text-[11px] sm:text-xs font-semibold whitespace-nowrap overflow-hidden">
        <div className="animate-marquee flex items-center">
          {item}
          {item}
          {item}
          {item}
        </div>
        <div className="animate-marquee flex items-center" aria-hidden="true">
          {item}
          {item}
          {item}
          {item}
        </div>
      </div>
      
      {/* Edge Gradient Mask */}
      <div className="absolute inset-y-0 left-0 w-8 sm:w-20 bg-gradient-to-r from-[#06090E] to-transparent pointer-events-none z-10"></div>
      <div className="absolute inset-y-0 right-0 w-8 sm:w-20 bg-gradient-to-l from-[#06090E] to-transparent pointer-events-none z-10"></div>
    </div>
  );
};
