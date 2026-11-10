import React, { useState } from 'react';
import { SkillCategory } from '../types/portfolio';
import { Search } from 'lucide-react';

interface SkillsSectionProps {
  skillCategories: SkillCategory[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skillCategories }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredCategories = skillCategories
    .map((cat) => {
      const matchesCategory = selectedCategory === 'All' || cat.category === selectedCategory;
      if (!matchesCategory) return null;

      const matchedSkills = cat.skills.filter((s) =>
        s.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      if (searchTerm && matchedSkills.length === 0) return null;

      return {
        ...cat,
        skills: matchedSkills
      };
    })
    .filter(Boolean) as SkillCategory[];

  const totalSkillCount = skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <section id="skills" className="pt-24 sm:pt-32 lg:pt-40 px-4 sm:px-8 max-w-[1600px] mx-auto scroll-mt-24 hairline-divider">
      {/* Section Header */}
      <div className="pb-12 sm:pb-16">
        <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-[#71717a]">
          <span className="w-2 h-2 bg-[#ff4d00] inline-block"></span>
          <span>05 // THE POLYMATH WORKBENCH</span>
          <span>· {totalSkillCount} VERIFIED PROFICIENCIES ACROSS 6 LAYERS</span>
        </div>
        <h2 className="fluid-heading text-[#0a0a0a] uppercase tracking-[-0.04em] leading-[0.88] font-black break-words mt-4 mb-6">
          FULL-STACK CONTINUUM.
        </h2>
        <p className="text-lg sm:text-xl text-[#0a0a0a] font-normal leading-[1.5] max-w-3xl">
          Complete polymath mastery spanning low-level Linux kernel systems, wireless networking (LoRaWAN), satellite Earth observation (GEE), autonomous agentic AI (MCP), deep learning computer vision, and mathematical modeling.
        </p>
      </div>

      {/* Typographic Search & Filter Toolbar */}
      <div className="pb-12 space-y-6">
        <div className="flex items-center gap-4 border-b border-[#0a0a0a]/20 pb-2">
          <Search className="w-4 h-4 text-[#ff4d00]" />
          <input
            type="text"
            placeholder="SEARCH ANY DOMAIN (E.G. GEE, MCP, AGENTIC AI, OPENVINO, KERNEL, LORAWAN, MATH)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent font-mono text-xs tracking-[0.1em] text-[#0a0a0a] placeholder:text-[#71717a] outline-none uppercase"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#ff4d00] hover:text-[#0a0a0a]"
            >
              CLEAR
            </button>
          )}
        </div>

        {/* Monospace Category Filters */}
        <div className="flex flex-wrap gap-2 font-mono text-[11px] tracking-[0.2em] uppercase">
          {['All', ...skillCategories.map((c) => c.category)].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 transition-colors ${
                selectedCategory === cat
                  ? 'bg-[#0a0a0a] text-white font-medium'
                  : 'text-[#71717a] hover:text-[#0a0a0a] border border-[#0a0a0a]/15'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Typographic Workbench Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 lg:gap-10 pt-8 border-t border-[#0a0a0a]/15">
        {filteredCategories.map((cat, idx) => (
          <div key={cat.category} className="space-y-4">
            {/* Category Header */}
            <div className="pb-3 border-b border-[#0a0a0a]/15">
              <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#ff4d00] mb-1">
                LAYER {String(idx + 1).padStart(2, '0')}
              </div>
              <h3 className="text-xl font-bold text-[#0a0a0a] tracking-tight uppercase">
                {cat.category}
              </h3>
              <p className="font-mono text-[11px] text-[#71717a] tracking-[0.1em] mt-1">
                {cat.description}
              </p>
            </div>

            {/* Skills List */}
            <div className="space-y-2 pt-1">
              {cat.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-2 border border-[#0a0a0a]/10 hover:border-[#ff4d00] transition-colors flex items-center justify-between"
                >
                  <span className="font-mono text-xs text-[#0a0a0a] uppercase tracking-[0.05em]">
                    {skill.name}
                  </span>
                  <span className="w-1.5 h-1.5 bg-[#0a0a0a]/30 inline-block"></span>
                </div>
              ))}
            </div>

            <div className="pt-2 font-mono text-[10px] tracking-[0.2em] uppercase text-[#71717a] flex justify-between">
              <span>{cat.skills.length} TOOLS</span>
              <span className="text-[#0a0a0a]">VERIFIED</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
