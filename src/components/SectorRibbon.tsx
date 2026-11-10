import React from 'react';

interface SectorRibbonProps {
  sectorNumber: string;
  sectorName: string;
  dark?: boolean;
  color?: 'honey' | 'coral' | 'blue' | 'mint';
}

export const SectorRibbon: React.FC<SectorRibbonProps> = ({
  sectorNumber,
  sectorName,
  color = 'honey',
}) => {
  const bgStyles = {
    honey: 'bg-[#feca57] text-[#000000]',
    coral: 'bg-[#ff6b6b] text-[#ffffff]',
    blue: 'bg-[#48dbfb] text-[#000000]',
    mint: 'bg-[#1dd1a1] text-[#000000]',
  }[color];

  const item = (
    <div className="flex items-center gap-6 sm:gap-10 px-6 sm:px-8 py-2">
      <div className="flex items-center gap-2">
        <span className="w-3.5 h-3.5 rounded-full bg-[#ff6b6b] border-2 border-black inline-block"></span>
        <span className="font-sans font-black tracking-wider text-xs sm:text-sm uppercase">
          SEC {sectorNumber}
        </span>
      </div>
      <span className="font-black text-lg select-none">✦</span>
      <span className="tracking-wider uppercase font-sans font-black text-xs sm:text-sm">
        {sectorName}
      </span>
      <span className="font-black text-base select-none">▲</span>
      <span className="font-mono text-xs uppercase px-2 py-0.5 border-2 border-black bg-white text-black font-bold shadow-[2px_2px_0_#000000]">
        1981 // MILAN
      </span>
      <span className="font-black text-base select-none">●</span>
    </div>
  );

  return (
    <div className={`w-full overflow-hidden select-none border-y-4 border-black ${bgStyles} shadow-[0_4px_0_#000000] relative`}>
      <div className="py-1 flex items-center font-sans whitespace-nowrap overflow-hidden">
        <div className="flex items-center animate-marquee">
          {item}
          {item}
          {item}
          {item}
        </div>
        <div className="flex items-center animate-marquee" aria-hidden="true">
          {item}
          {item}
          {item}
          {item}
        </div>
      </div>
    </div>
  );
};
