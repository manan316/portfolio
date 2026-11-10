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
        return <Brain className="w-5 h-5 text-cyan-600" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-emerald-600" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-indigo-600" />;
      case 'Server':
        return <Server className="w-5 h-5 text-amber-600" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-violet-600" />;
      default:
        return <Code2 className="w-5 h-5 text-slate-600" />;
    }
  };

  const getCategoryGlow = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return 'bento-glow-cyan';
      case 'Cpu':
        return 'bento-glow-emerald';
      case 'Code2':
        return 'bento-glow-violet';
      case 'Server':
        return 'bento-glow-amber';
      case 'Layers':
        return 'bento-glow-violet';
      default:
        return 'bento-glow-cyan';
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
        <div className="flex items-center gap-2 mb-3">
          <span className="bento-badge text-cyan-800 bg-cyan-50 border-cyan-300 font-semibold">
            [05 // TECHNICAL WORKBENCH]
          </span>
          <span className="text-xs text-slate-500 font-mono">
            {totalSkillCount} VERIFIED PROFICIENCIES
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
          Engineering Toolchain & Stack
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-3xl font-normal leading-relaxed">
          Comprehensive inventory of machine learning frameworks, embedded Linux environments, systems programming languages, and distributed cloud tools.
        </p>
      </div>

      {/* Search & Filter Toolbar */}
      <div className="bento-card p-4 sm:p-6 mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-cyan-600" />
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
        <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200">
          {['All', ...skillCategories.map((c) => c.category)].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white font-bold shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:text-slate-950 hover:bg-slate-200/80 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Bento Skills Grid - Expands to 5 columns on widescreen */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {filteredCategories.map((cat) => (
          <div key={cat.category} className={`bento-card p-6 flex flex-col justify-between ${getCategoryGlow(cat.icon)} group`}>
            <div>
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-200">
                <div className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {getCategoryIcon(cat.icon)}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{cat.category}</h3>
                  <p className="text-[11px] text-slate-500 font-medium">{cat.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-50 text-slate-800 border border-slate-200 hover:border-slate-300 transition-colors"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>{cat.skills.length} proficiencies</span>
              <span className="text-cyan-700 font-semibold">VERIFIED</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
