import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { SectorRibbon } from './SectorRibbon';
import { Brain, Cpu, Code2, Server, Layers, CheckCircle2, Search } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain': return <Brain className="w-4 h-4 text-[#FF5722]" />;
      case 'Cpu': return <Cpu className="w-4 h-4 text-[#00A9E0]" />;
      case 'Code2': return <Code2 className="w-4 h-4 text-[#E5A93C]" />;
      case 'Server': return <Server className="w-4 h-4 text-[#10B981]" />;
      default: return <Layers className="w-4 h-4 text-[#8B5CF6]" />;
    }
  };

  return (
    <section id="skills" className="relative bg-blueprint-grid text-[#181715] border-t-2 border-[#FF5722]">
      {/* Sector Ribbon */}
      <SectorRibbon sectorNumber="05" sectorName="TECHNICAL SKILL MATRIX & TOOLCHAINS" dark={true} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-14 sm:py-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 border-b border-[#D5CCBB] pb-6">
          <div>
            <span className="font-mono text-xs font-bold text-[#FF5722] tracking-widest uppercase">
              // VERIFIED TECHNICAL ARSENAL
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-sans text-[#181715] mt-1">
              Skills & Engineering Matrix
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] font-sans mt-1">
              Rigorous stack of low-level systems programming, deep neural modeling, edge accelerators, and cloud backends.
            </p>
          </div>

          {/* Search / Filter Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
            <input
              type="text"
              placeholder="Filter technologies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs font-mono bg-white border border-[#E2DBD0] rounded-lg focus:outline-none focus:border-[#FF5722] text-[#181715] placeholder-[#94A3B8]"
            />
          </div>
        </div>

        {/* Skill Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((group, idx) => {
            const filteredSkills = group.skills.filter(s => 
              s.name.toLowerCase().includes(searchTerm.toLowerCase())
            );

            if (searchTerm && filteredSkills.length === 0) return null;

            return (
              <div
                key={idx}
                className="tactical-card rounded-xl p-6 bg-white border border-[#E2DBD0] flex flex-col justify-between space-y-4"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#E2DBD0]">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded bg-[#FAF7F0] border border-[#E2DBD0]">
                        {getCategoryIcon(group.icon)}
                      </div>
                      <h3 className="font-mono text-xs font-bold text-[#181715] uppercase tracking-wide">
                        {group.category}
                      </h3>
                    </div>
                    <span className="font-mono text-[10px] text-[#64748B]">
                      {filteredSkills.length} SKILLS
                    </span>
                  </div>

                  <p className="text-xs text-[#64748B] font-sans mt-2.5 mb-4">
                    {group.description}
                  </p>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {filteredSkills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center gap-1 font-mono text-[11px] px-2.5 py-1 rounded bg-[#FAF7F0] hover:bg-[#F4EFE6] border border-[#E2DBD0] hover:border-[#FF5722] text-[#334155] transition-colors"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#00A9E0] shrink-0" />
                        <span>{skill.name}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#E2DBD0] flex items-center justify-between text-[10px] font-mono text-[#8899A6]">
                  <span>GROUP_0{idx + 1}</span>
                  <span>SYSTEM CERTIFIED</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
