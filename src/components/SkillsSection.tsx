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
      case 'Brain': return <Brain className="w-4 h-4 text-[#00F0FF]" />;
      case 'Cpu': return <Cpu className="w-4 h-4 text-[#00FF9D]" />;
      case 'Code2': return <Code2 className="w-4 h-4 text-[#38BDF8]" />;
      case 'Server': return <Server className="w-4 h-4 text-[#FFB800]" />;
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
      className="relative bg-cyber-canvas text-[#F1F5F9] border-t-2 border-[#1E263D]/80 overflow-hidden"
    >
      {/* Sector Ribbon */}
      <SectorRibbon sectorNumber="05" sectorName="TECHNICAL SKILL MATRIX & TOOLCHAINS" dark={true} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-24">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 border-b border-white/[0.08] pb-6 reveal-on-scroll">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F121E]/80 backdrop-blur-md border border-[#00F0FF]/30 font-mono text-xs font-bold text-[#00F0FF] shadow-2xs mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] beacon-pulse shadow-[0_0_8px_#00FF9D]"></span>
              <span>// VERIFIED TECHNICAL ARSENAL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-sans text-[#F1F5F9]">
              Skills & Engineering Matrix
            </h2>
            <p className="text-xs sm:text-sm text-[#94A3B8] font-sans mt-1">
              Rigorous stack of low-level systems programming, deep neural modeling, edge accelerators, and cloud backends.
            </p>
          </div>

          {/* Search Box - Frosted Glass Container */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
            <input
              type="text"
              placeholder="Search skills (e.g. C++, PyTorch, Docker)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-9 py-2.5 text-xs font-mono bg-[#0F121E]/75 backdrop-blur-md border border-white/[0.08] rounded-2xl focus:outline-none focus:border-[#00F0FF] focus:ring-2 focus:ring-[#00F0FF]/25 text-[#F1F5F9] placeholder-[#64748B] transition-all shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#64748B] hover:text-[#00F0FF]"
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
            <Sparkles className="w-3 h-3 text-[#00F0FF]" />
            FILTER:
          </span>
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedGroup(cat)}
              className={`font-mono text-xs px-3.5 py-1.5 rounded-2xl transition-all interactive-btn ${
                selectedGroup === cat
                  ? 'bg-gradient-to-r from-[#00F0FF] to-[#38BDF8] text-[#08090D] font-bold shadow-[0_0_20px_rgba(0,240,255,0.45)]'
                  : 'glass-pill text-[#CBD5E1] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Matrix Grid */}
        {displayedGroups.every(g => g.skills.filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase())).length === 0) ? (
          <div className="tactical-glass-card rounded-3xl p-12 text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/30 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(0,240,255,0.2)]">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-mono text-sm font-bold text-[#F1F5F9] uppercase tracking-wider">
              No matching modules detected in kernel buffer
            </h3>
            <p className="font-mono text-xs text-[#94A3B8] max-w-md mx-auto">
              No skill matching "<span className="text-[#00F0FF] font-bold">{searchTerm}</span>". Try searching for <span className="text-[#00FF9D]">Python</span>, <span className="text-[#00FF9D]">C++</span>, <span className="text-[#00FF9D]">PyTorch</span>, <span className="text-[#00FF9D]">Linux</span>, or <span className="text-[#00FF9D]">FastAPI</span>.
            </p>
            <button
              onClick={() => setSearchTerm('')}
              className="mt-2 font-mono text-xs px-4 py-2 rounded-xl bg-[#00F0FF] text-[#08090D] font-bold interactive-btn shadow-md"
            >
              RESET BUFFER SEARCH
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedGroups.map((group, idx) => {
              const filteredSkills = group.skills.filter(s => 
                s.name.toLowerCase().includes(searchTerm.toLowerCase())
              );

              if (searchTerm && filteredSkills.length === 0) return null;

              return (
                <div
                  key={idx}
                  className={`tactical-glass-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between space-y-4 reveal-on-scroll reveal-delay-${(idx % 3 + 1) * 100} corner-brackets shadow-sm`}
                >
                  <div>
                    {/* Category Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-2xl bg-[#131828]/90 border border-white/[0.08] group-hover:border-[#00F0FF] transition-colors shadow-xs">
                          {getCategoryIcon(group.icon)}
                        </div>
                        <h3 className="font-mono text-xs font-bold text-[#F1F5F9] uppercase tracking-wide">
                          {group.category}
                        </h3>
                      </div>
                      <span className="font-mono text-[10px] text-[#00FF9D] font-bold bg-[#00FF9D]/10 px-2.5 py-0.5 rounded-full border border-[#00FF9D]/30 shadow-xs">
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
                          className="inline-flex items-center gap-1.5 font-mono text-[11px] px-2.5 py-1 rounded-xl glass-pill text-[#CBD5E1] font-medium transition-all group/badge cursor-default"
                        >
                          <CheckCircle2 className="w-3 h-3 text-[#00FF9D] shrink-0" />
                          <span className="group-hover/badge:text-white">{skill.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3.5 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-[#64748B]">
                    <span>GROUP_0{idx + 1}</span>
                    <span className="text-[#00FF9D] font-bold">SYSTEM VERIFIED</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
