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
        <span className="w-2 h-2 rounded-full bg-[#00F0FF] beacon-pulse shadow-[0_0_10px_#00F0FF]"></span>
        <span className="text-[#00F0FF] font-mono font-bold tracking-widest text-xs">SECTOR {sectorNumber}</span>
      </span>
      <span className="text-[#64748B] font-mono">//</span>
      <span className="tracking-widest uppercase text-[#F1F5F9] font-mono font-bold text-xs flex items-center gap-1.5">
        <span className="text-[#00FF9D]">$</span>
        <span>{sectorName}</span>
      </span>
      <span className="text-[#00F0FF]/40 select-none font-mono text-[10px]">::</span>
      <span className="text-[#00FF9D] font-mono text-[10px] hidden md:inline tracking-wider bg-[#00FF9D]/10 px-2 py-0.5 rounded border border-[#00FF9D]/30">
        SYS_REF: S0{sectorNumber}_ACTIVE
      </span>
      <span className="text-[#38BDF8] select-none font-mono text-xs">◆</span>
    </div>
  );

  return (
    <div className="w-full overflow-hidden select-none border-y border-[#1E263D] bg-[#0A0D17]/95 relative shadow-[0_4px_25px_rgba(0,0,0,0.8)] backdrop-blur-md">
      {/* Top glowing cyan line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00F0FF]/40 to-transparent"></div>
      
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
      <div className="absolute inset-y-0 left-0 w-8 sm:w-20 bg-gradient-to-r from-[#08090D] to-transparent pointer-events-none z-10"></div>
      <div className="absolute inset-y-0 right-0 w-8 sm:w-20 bg-gradient-to-l from-[#08090D] to-transparent pointer-events-none z-10"></div>
      
      {/* Bottom glowing emerald line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00FF9D]/30 to-transparent"></div>
    </div>
  );
};
