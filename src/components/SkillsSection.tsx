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
        return <Brain className="w-4 h-4 text-cyan-400" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4 text-emerald-400" />;
      case 'Code2':
        return <Code2 className="w-4 h-4 text-indigo-400" />;
      case 'Server':
        return <Server className="w-4 h-4 text-amber-400" />;
      case 'Layers':
        return <Layers className="w-4 h-4 text-violet-400" />;
      default:
        return <Code2 className="w-4 h-4 text-zinc-400" />;
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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="bento-badge text-cyan-400 bg-cyan-500/10 border-cyan-500/20">
            [06 // TECHNICAL WORKBENCH]
          </span>
          <span className="text-xs text-zinc-400 font-mono">
            {totalSkillCount} VERIFIED PROFICIENCIES
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
          Engineering Toolchain & Stack
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
          Comprehensive inventory of machine learning frameworks, embedded Linux environments, systems programming languages, and distributed cloud tools.
        </p>
      </div>

      {/* Search & Filter Toolbar */}
      <div className="bento-card p-4 sm:p-5 mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              placeholder="Search specific tool, framework, or protocol (e.g. OpenVINO, C++, OpenWrt, Three.js)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bento-input pl-10 w-full text-xs sm:text-sm font-medium"
            />
          </div>
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="bento-btn-secondary py-2 px-3 text-xs"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
          {['All', ...skillCategories.map((c) => c.category)].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-white text-zinc-950 shadow-sm'
                  : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Bento Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredCategories.map((cat) => (
          <div key={cat.category} className="bento-card p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-3 pb-3 border-b border-white/5">
                <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                  {getCategoryIcon(cat.icon)}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">{cat.category}</h3>
                  <p className="text-[11px] text-zinc-400">{cat.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 text-zinc-300 border border-white/5 hover:border-cyan-400/30 hover:text-cyan-300 transition-colors"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-zinc-500 font-mono flex items-center justify-between">
              <span>{cat.skills.length} specialized tools</span>
              <span className="text-emerald-400">Verified</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
