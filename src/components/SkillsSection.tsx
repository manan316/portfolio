import React, { useState } from 'react';
import { SkillCategory } from '../types/portfolio';
import { Search, Brain, Cpu, Code2, Server, Layers } from 'lucide-react';

interface SkillsSectionProps {
  skillCategories: SkillCategory[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skillCategories }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return <Brain className="w-5 h-5 text-[#d4553a]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#747800]" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-[#1a3055]" />;
      case 'Server':
        return <Server className="w-5 h-5 text-[#c9a227]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#2a5a8c]" />;
      default:
        return <Code2 className="w-5 h-5 text-[#1a3055]" />;
    }
  };

  const getCategoryBar = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return 'woodblock-bar-vermilion';
      case 'Cpu':
        return 'woodblock-bar-grass';
      case 'Code2':
        return 'woodblock-bar-indigo';
      case 'Server':
        return 'woodblock-bar-gold';
      case 'Layers':
        return 'woodblock-bar-ultramarine';
      default:
        return 'woodblock-bar-indigo';
    }
  };

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
    <section id="skills" className="py-20 px-4 sm:px-8 lg:px-12 2xl:px-16 w-full max-w-[1720px] mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="cartouche-label text-xs">
            [05 // TOOLCHAIN & CRAFT]
          </span>
          <span className="font-serif tracking-widest text-xs uppercase text-[#1a3055]/70 font-bold">
            {totalSkillCount} VERIFIED PROFICIENCIES
          </span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1a3055] mb-4">
          Engineering Toolchain & Stack
        </h2>
        <p className="font-serif text-sm sm:text-base max-w-3xl text-[#1a3055]/85 leading-relaxed">
          Comprehensive inventory of machine learning frameworks, embedded Linux environments, systems programming languages, and distributed cloud tools.
        </p>
      </div>

      {/* Search & Filter Toolbar */}
      <div className="woodblock-card woodblock-bar-indigo p-4 sm:p-6 mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#1a3055]" />
            <input
              type="text"
              placeholder="Search specific tool, framework, or protocol (e.g. OpenVINO, C++, OpenWrt, Three.js)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="woodblock-input pl-10 w-full text-xs sm:text-sm font-serif"
            />
          </div>
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="seal-btn-secondary py-2 px-3 text-xs"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Woodblock Tabs */}
        <div className="flex flex-wrap gap-2 pt-2 border-t-2 border-[#1a3055]/20">
          {['All', ...skillCategories.map((c) => c.category)].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 text-xs font-serif font-bold uppercase tracking-wider border-2 border-[#1a3055] transition-all duration-150 ${
                selectedCategory === cat
                  ? 'bg-[#d4553a] text-[#f5f0e1] shadow-woodblock translate-x-0.5 translate-y-0.5'
                  : 'bg-[#f5f0e1] text-[#1a3055] hover:bg-[#c9a227]/20 hover:shadow-woodblock'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Woodblock Skills Grid - 5 columns on widescreen */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {filteredCategories.map((cat) => (
          <div
            key={cat.category}
            className={`woodblock-card ${getCategoryBar(cat.icon)} p-6 flex flex-col justify-between group relative`}
          >
            <div>
              <div className="flex items-center gap-3 mb-4 pb-3 border-b-2 border-[#1a3055]/20">
                <div className="p-2 border-2 border-[#1a3055] bg-[#f5f0e1] shrink-0 group-hover:scale-105 transition-transform duration-200">
                  {getCategoryIcon(cat.icon)}
                </div>
                <div>
                  <h3 className="font-serif text-sm font-bold text-[#1a3055]">{cat.category}</h3>
                  <p className="font-serif text-[11px] text-[#1a3055]/70">{cat.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="woodblock-tag text-xs"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-6 border-t-2 border-[#1a3055]/20 flex items-center justify-between text-[11px] font-serif font-bold text-[#1a3055]/75">
              <span>{cat.skills.length} proficiencies</span>
              <span className="text-[#d4553a] uppercase tracking-wider">VERIFIED</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
