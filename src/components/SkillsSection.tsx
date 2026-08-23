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
      case 'Brain': return <Brain className="w-4 h-4 text-[#00E5FF]" />;
      case 'Cpu': return <Cpu className="w-4 h-4 text-[#38BDF8]" />;
      case 'Code2': return <Code2 className="w-4 h-4 text-[#818CF8]" />;
      case 'Server': return <Server className="w-4 h-4 text-[#10B981]" />;
      default: return <Layers className="w-4 h-4 text-[#A855F7]" />;
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
      className="relative bg-cyber-mesh text-[#F8FAFC] border-t-2 border-[#1E293B] overflow-hidden"
    >
      {/* Sector Ribbon */}
      <SectorRibbon sectorNumber="05" sectorName="TECHNICAL SKILL MATRIX & TOOLCHAINS" dark={true} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-24">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 border-b border-[#1E293B] pb-6 reveal-on-scroll">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D131F] border border-[#1E293B] font-mono text-xs font-bold text-[#00E5FF] shadow-sm mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] beacon-pulse shadow-[0_0_6px_#00E5FF]"></span>
              <span>// VERIFIED TECHNICAL ARSENAL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-sans text-white">
              Skills & Engineering Matrix
            </h2>
            <p className="text-xs sm:text-sm text-[#94A3B8] font-sans mt-1">
              Rigorous stack of low-level systems programming, deep neural modeling, edge accelerators, and cloud backends.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
            <input
              type="text"
              placeholder="Search skills (e.g. C++, PyTorch, Docker)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-9 py-2.5 text-xs font-mono bg-[#0D131F] border border-[#1E293B] rounded-xl focus:outline-none focus:border-[#00E5FF] focus:ring-2 focus:ring-[#00E5FF]/20 text-white placeholder-[#64748B] transition-all shadow-inner"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#64748B] hover:text-white"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category Quick Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8 reveal-on-scroll">
          <span className="font-mono text-[10px] text-[#64748B] uppercase font-bold mr-1 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#00E5FF]" />
            FILTER:
          </span>
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedGroup(cat)}
              className={`font-mono text-xs px-3.5 py-1.5 rounded-xl transition-all interactive-btn ${
                selectedGroup === cat
                  ? 'bg-[#00E5FF] text-[#06090E] font-bold shadow-[0_0_15px_rgba(0,229,255,0.35)]'
                  : 'bg-[#0D131F]/80 hover:bg-[#131C2E] text-[#94A3B8] hover:text-white border border-[#1E293B]'
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
                className={`tactical-glass-card rounded-2xl p-6 flex flex-col justify-between space-y-4 reveal-on-scroll reveal-delay-${(idx % 3 + 1) * 100} corner-brackets shadow-lg`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#1E293B]">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-[#06090E] border border-[#1E293B] group-hover:border-[#00E5FF] transition-colors shadow-inner">
                        {getCategoryIcon(group.icon)}
                      </div>
                      <h3 className="font-mono text-xs font-bold text-white uppercase tracking-wide">
                        {group.category}
                      </h3>
                    </div>
                    <span className="font-mono text-[10px] text-[#00E5FF] font-bold bg-[#00E5FF]/10 px-2.5 py-0.5 rounded-full border border-[#00E5FF]/30">
                      {filteredSkills.length} SKILLS
                    </span>
                  </div>

                  <p className="text-xs text-[#94A3B8] font-sans mt-3 mb-4 leading-relaxed">
                    {group.description}
                  </p>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {filteredSkills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center gap-1.5 font-mono text-[11px] px-2.5 py-1 rounded-lg bg-[#06090E] hover:bg-[#131C2E] border border-[#1E293B] hover:border-[#00E5FF] hover:shadow-[0_0_10px_rgba(0,229,255,0.15)] text-[#CBD5E1] transition-all hover:scale-105 group/badge cursor-default font-medium"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#00E5FF] shrink-0 group-hover/badge:scale-110 transition-transform" />
                        <span className="group-hover/badge:text-white">{skill.name}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3.5 border-t border-[#1E293B] flex items-center justify-between text-[10px] font-mono text-[#64748B]">
                  <span>GROUP_0{idx + 1}</span>
                  <span className="text-[#10B981] font-bold">SYSTEM VERIFIED</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
