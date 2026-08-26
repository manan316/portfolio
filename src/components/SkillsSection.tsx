import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { SectorRibbon } from './SectorRibbon';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Brain, Cpu, Code2, Server, Layers, CheckCircle2, Search, X, Sparkles } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<string>('All');
  const containerRef = useScrollReveal<HTMLElement>();

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain': return <Brain className="w-4 h-4 text-[#A45238]" />;
      case 'Cpu': return <Cpu className="w-4 h-4 text-[#E06D3B]" />;
      case 'Code2': return <Code2 className="w-4 h-4 text-[#B45309]" />;
      case 'Server': return <Server className="w-4 h-4 text-[#15803D]" />;
      default: return <Layers className="w-4 h-4 text-[#6D28D9]" />;
    }
  };

  const allCategories = ['All', ...skillCategories.map(c => c.category)];

  const displayedGroups = skillCategories.filter(group => {
    if (selectedGroup !== 'All' && group.category !== selectedGroup) return false;
    return true;
  });

  return (
    <section 
      id="skills" 
      ref={containerRef} 
      className="relative bg-parchment-canvas text-[#1C1917] border-t-2 border-[#DECFC0] overflow-hidden"
    >
      {/* Sector Ribbon */}
      <SectorRibbon sectorNumber="05" sectorName="TECHNICAL SKILL MATRIX & TOOLCHAINS" dark={false} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-24">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 border-b border-[#DECFC0] pb-6 reveal-on-scroll">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DECFC0] font-mono text-xs font-bold text-[#A45238] shadow-2xs mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A45238] beacon-pulse shadow-[0_0_6px_#A45238]"></span>
              <span>// VERIFIED TECHNICAL ARSENAL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-sans text-[#1C1917]">
              Skills & Engineering Matrix
            </h2>
            <p className="text-xs sm:text-sm text-[#78716C] font-sans mt-1">
              Rigorous stack of low-level systems programming, deep neural modeling, edge accelerators, and cloud backends.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C7D6B]" />
            <input
              type="text"
              placeholder="Search skills (e.g. C++, PyTorch, Docker)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-9 py-2.5 text-xs font-mono bg-[#FAF7F2] border border-[#DECFC0] rounded-xl focus:outline-none focus:border-[#A45238] focus:ring-2 focus:ring-[#A45238]/20 text-[#1C1917] placeholder-[#8C7D6B] transition-all shadow-xs"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8C7D6B] hover:text-[#1C1917]"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category Quick Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8 reveal-on-scroll">
          <span className="font-mono text-[10px] text-[#78716C] uppercase font-bold mr-1 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#A45238]" />
            FILTER:
          </span>
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedGroup(cat)}
              className={`font-mono text-xs px-3.5 py-1.5 rounded-xl transition-all interactive-btn ${
                selectedGroup === cat
                  ? 'bg-[#1C1917] text-[#FAF5EE] font-bold shadow-xs'
                  : 'bg-[#EFE6D7] hover:bg-[#E8DDD0] text-[#574E45] hover:text-[#1C1917] border border-[#DECFC0]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedGroups.map((group, idx) => {
            const filteredSkills = group.skills.filter(s => 
              s.name.toLowerCase().includes(searchTerm.toLowerCase())
            );

            if (searchTerm && filteredSkills.length === 0) return null;

            return (
              <div
                key={idx}
                className={`tactical-glass-card rounded-2xl p-6 flex flex-col justify-between space-y-4 reveal-on-scroll reveal-delay-${(idx % 3 + 1) * 100} corner-brackets shadow-sm`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#DECFC0]">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-[#EFE6D7] border border-[#DECFC0] group-hover:border-[#A45238] transition-colors shadow-2xs">
                        {getCategoryIcon(group.icon)}
                      </div>
                      <h3 className="font-mono text-xs font-bold text-[#1C1917] uppercase tracking-wide">
                        {group.category}
                      </h3>
                    </div>
                    <span className="font-mono text-[10px] text-[#A45238] font-bold bg-[#A45238]/10 px-2.5 py-0.5 rounded-full border border-[#A45238]/25">
                      {filteredSkills.length} SKILLS
                    </span>
                  </div>

                  <p className="text-xs text-[#78716C] font-sans mt-3 mb-4 leading-relaxed">
                    {group.description}
                  </p>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {filteredSkills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center gap-1.5 font-mono text-[11px] px-2.5 py-1 rounded-lg bg-[#EFE6D7] hover:bg-[#E8DDD0] border border-[#DECFC0] hover:border-[#A45238] text-[#44403C] transition-all hover:scale-105 group/badge cursor-default font-medium"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#15803D] shrink-0" />
                        <span className="group-hover/badge:text-[#1C1917]">{skill.name}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3.5 border-t border-[#DECFC0] flex items-center justify-between text-[10px] font-mono text-[#8C7D6B]">
                  <span>GROUP_0{idx + 1}</span>
                  <span className="text-[#15803D] font-bold">SYSTEM VERIFIED</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
