import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { SectorRibbon } from './SectorRibbon';
import { Brain, Cpu, Code2, Server, Layers, Search, X, Sparkles } from 'lucide-react';
import { 
  MemphisCircle, 
  MemphisTriangle, 
  MemphisWave, 
  MemphisZigzag, 
  MemphisCardOrnaments,
  MemphisZigzagDivider 
} from './MemphisOrnament';

export const SkillsSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<string>('All');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain': return <Brain className="w-4 h-4 text-black" />;
      case 'Cpu': return <Cpu className="w-4 h-4 text-black" />;
      case 'Code2': return <Code2 className="w-4 h-4 text-black" />;
      case 'Server': return <Server className="w-4 h-4 text-black" />;
      default: return <Layers className="w-4 h-4 text-black" />;
    }
  };

  const categoryColors = [
    'bg-[#ff6b6b]',
    'bg-[#48dbfb]',
    'bg-[#feca57]',
    'bg-[#1dd1a1]',
    'bg-[#ff9ff3]',
  ];

  const allCategories = ['All', ...skillCategories.map(c => c.category)];

  const displayedGroups = skillCategories.filter(group => {
    if (selectedGroup !== 'All' && group.category !== selectedGroup) return false;
    return true;
  });

  return (
    <section id="skills" className="relative bg-[#fdf6e3] text-black overflow-hidden pt-4 pb-24">
      {/* Sector Ribbon */}
      <SectorRibbon sectorNumber="05" sectorName="TECHNICAL SKILL TAXONOMY & TOOLCHAINS" color="honey" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-16">
        
        {/* Section Heading & Search */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b-4 border-black">
          <div>
            <div className="inline-block bg-[#ff6b6b] text-white px-3.5 py-1 text-xs font-black uppercase tracking-wider border-3 border-black shadow-[3px_3px_0_#000000] tilt-neg-1 mb-2">
              // VERIFIED ARSENAL
            </div>
            <h2 className="memphis-heading text-black">
              SKILLS & TOOLCHAIN TAXONOMY
            </h2>
            <p className="font-sans font-bold text-base text-black/80 mt-1 max-w-xl">
              Systems programming, deep neural modeling, edge NPU acceleration, and embedded Linux.
            </p>
          </div>

          {/* Memphis Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-black" />
            <input
              type="text"
              placeholder="Search skills (C++, PyTorch, Docker)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="memphis-input pl-10 pr-9 text-xs sm:text-sm"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-black hover:bg-[#ff6b6b] hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Category Filters (Pop Buttons) */}
        <div className="flex flex-wrap gap-2.5 mb-10 select-none">
          {allCategories.map((cat, idx) => {
            const isSelected = selectedGroup === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedGroup(cat)}
                className={`px-3.5 py-2 font-sans font-black text-xs uppercase tracking-wider border-3 border-black transition-all duration-150 ${
                  isSelected
                    ? 'bg-[#ff6b6b] text-white shadow-[4px_4px_0_#000000] -translate-y-0.5'
                    : 'bg-white text-black shadow-[2px_2px_0_#000000] hover:bg-[#feca57] hover:shadow-[4px_4px_0_#000000]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedGroups.map((group, gIdx) => {
            const headerBg = categoryColors[gIdx % categoryColors.length];
            const filteredSkills = group.skills.filter(s =>
              s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              (s.level && s.level.toLowerCase().includes(searchTerm.toLowerCase()))
            );

            if (searchTerm && filteredSkills.length === 0) return null;

            const tilt = gIdx % 2 === 0 ? 'tilt-neg-1' : 'tilt-pos-1';

            return (
              <div
                key={group.category}
                className={`memphis-card group p-0 overflow-hidden ${tilt} hover:tilt-0 transition-transform duration-150 flex flex-col justify-between`}
              >
                {/* Chaos Ornaments */}
                <MemphisCardOrnaments variant={(gIdx % 4 + 1) as 1 | 2 | 3 | 4} />

                <div>
                  {/* Category Header */}
                  <div className={`${headerBg} p-4 sm:p-5 border-b-4 border-black flex items-center justify-between`}>
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 bg-white border-2 border-black shadow-[2px_2px_0_#000000]">
                        {getCategoryIcon(group.icon)}
                      </div>
                      <h3 className="font-sans font-black text-base sm:text-lg text-black uppercase tracking-tight">
                        {group.category}
                      </h3>
                    </div>
                    <span className="font-mono text-xs font-bold text-black bg-white px-2 py-0.5 border-2 border-black">
                      {filteredSkills.length}
                    </span>
                  </div>

                  {/* Skills Grid */}
                  <div className="p-5 sm:p-6 space-y-2.5 bg-white">
                    <p className="font-sans font-bold text-xs text-black/70 mb-3">
                      {group.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {filteredSkills.map((skill, sIdx) => (
                        <div
                          key={sIdx}
                          className="memphis-badge bg-[#fdf6e3] text-black hover:bg-[#48dbfb] transition-colors duration-150 select-none py-1 px-2.5"
                        >
                          <span>{skill.name}</span>
                          {skill.level && (
                            <span className="text-[9px] bg-black text-white px-1 font-mono uppercase ml-1">
                              {skill.level}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-[#fdf6e3] border-t-3 border-black text-right font-mono text-[10px] font-bold text-[#5f27cd]">
                  TAXONOMY // DOMAIN_{gIdx + 1}
                </div>

              </div>
            );
          })}
        </div>

        {/* Section Bottom Zigzag Divider */}
        <MemphisZigzagDivider color="coral" className="mt-16" />

      </div>
    </section>
  );
};
