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
        <span className="w-2 h-2 rounded-full bg-[#FAF5EE] beacon-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)]"></span>
        <span className="text-[#FAF5EE] font-black tracking-widest">SECTOR {sectorNumber}</span>
      </span>
      <span className="text-[#FAF5EE]/40 font-light">//</span>
      <span className="tracking-widest uppercase text-[#FAF5EE] font-extrabold">{sectorName}</span>
      <span className="text-[#E8A838] select-none font-bold text-xs">▼</span>
      <span className="text-[#FAF5EE]/70 font-mono text-[10px] hidden md:inline tracking-normal">SYS_REF: S0{sectorNumber}_ACTIVE</span>
      <span className="text-[#E8A838] select-none font-bold text-xs">▼</span>
    </div>
  );

  return (
    <div className="w-full overflow-hidden select-none border-y border-[#873B24] bg-[#A45238] relative shadow-[0_4px_18px_rgba(164,82,56,0.3)]">
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
      <div className="absolute inset-y-0 left-0 w-8 sm:w-20 bg-gradient-to-r from-[#A45238] to-transparent pointer-events-none z-10"></div>
      <div className="absolute inset-y-0 right-0 w-8 sm:w-20 bg-gradient-to-l from-[#A45238] to-transparent pointer-events-none z-10"></div>
    </div>
  );
};
