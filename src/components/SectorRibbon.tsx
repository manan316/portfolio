import React from 'react';

interface SectorRibbonProps {
  sectorNumber: string;
  sectorName: string;
  dark?: boolean;
}

export const SectorRibbon: React.FC<SectorRibbonProps> = ({ sectorNumber, sectorName, dark = true }) => {
  const text = `▼ SECTOR ${sectorNumber} — ${sectorName} ▼`;
  return (
    <div className={`w-full overflow-hidden select-none border-y ${
      dark 
        ? 'bg-[#06090E] border-[#FF5722] text-[#F4EFE6]' 
        : 'bg-[#E2DBD0] border-[#C8BFB0] text-[#181715]'
    }`}>
      <div className="py-2 flex items-center justify-around font-mono text-[11px] sm:text-xs font-bold tracking-[0.2em] whitespace-nowrap">
        <span className="hidden lg:inline text-[#FF5722]">{text}</span>
        <span className="hidden md:inline">{text}</span>
        <span className="text-[#FF5722]">{text}</span>
        <span className="hidden sm:inline">{text}</span>
        <span className="hidden xl:inline text-[#00E5FF]">{text}</span>
      </div>
    </div>
  );
};
