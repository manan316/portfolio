import React, { useState } from 'react';
import { SkillCategory } from '../types/portfolio';
import { Search, Brain, Cpu, Code2, Server, Layers, Terminal, CheckCircle2, Sparkles } from 'lucide-react';
import { MemphisCardOrnaments } from './MemphisOrnament';

interface SkillsSectionProps {
  skillCategories: SkillCategory[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skillCategories }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return <Brain className="w-5 h-5 text-coral" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-honey" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-electric-blue" />;
      case 'Server':
        return <Server className="w-5 h-5 text-mint" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-grape" />;
      default:
        return <Code2 className="w-5 h-5 text-black" />;
    }
  };

  // Filter skills based on search and category
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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="memphis-badge bg-electric-blue text-black border-4 border-black px-4 py-1.5 text-xs font-black tracking-widest uppercase">
            [06 // ENGINEERING WORKBENCH]
          </span>
          <span className="bg-honey text-black border-3 border-black px-3 py-1 text-xs font-black tracking-wider uppercase">
            {totalSkillCount} VERIFIED PROFICIENCIES
          </span>
        </div>
        <h2 className="memphis-heading text-black pop-swap mb-4">
          TECHNICAL STACK & WORKBENCH
        </h2>
        <p className="text-black text-base sm:text-lg font-bold max-w-3xl leading-relaxed">
          Comprehensive matrix of frameworks, systems programming tools, AI accelerators, and cloud platforms actively used across research and commercial systems.
        </p>
      </div>

      {/* Core Engineering Trifecta Spotlight */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-coral text-white border-4 border-black p-6 shadow-memphis group hover:-translate-y-1 transition-transform">
          <div className="flex items-center justify-between mb-3 pb-2 border-b-2 border-black">
            <span className="text-xs font-black uppercase tracking-wider bg-black text-white px-2 py-0.5">
              PILLAR 01
            </span>
            <Brain className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-black uppercase tracking-tight">AI, NPU & Vision</h3>
          <p className="text-xs font-bold mt-2 opacity-95 leading-relaxed">
            PyTorch, Intel OpenVINO, YOLOv8, Custom CRUNet, DeepLabV3+, DSP, Multispectral Remote Sensing.
          </p>
        </div>

        <div className="bg-honey text-black border-4 border-black p-6 shadow-memphis group hover:-translate-y-1 transition-transform">
          <div className="flex items-center justify-between mb-3 pb-2 border-b-2 border-black">
            <span className="text-xs font-black uppercase tracking-wider bg-black text-white px-2 py-0.5">
              PILLAR 02
            </span>
            <Cpu className="w-6 h-6 text-black" />
          </div>
          <h3 className="text-xl font-black uppercase tracking-tight">Embedded & Linux</h3>
          <p className="text-xs font-bold mt-2 text-gray-900 leading-relaxed">
            OpenWrt, LoRaWAN SX1303, MIPS/ARM Toolchains, Linux Kernel SPI Drivers, Device Tree Overlays (.dts).
          </p>
        </div>

        <div className="bg-mint text-black border-4 border-black p-6 shadow-memphis group hover:-translate-y-1 transition-transform">
          <div className="flex items-center justify-between mb-3 pb-2 border-b-2 border-black">
            <span className="text-xs font-black uppercase tracking-wider bg-black text-white px-2 py-0.5">
              PILLAR 03
            </span>
            <Layers className="w-6 h-6 text-black" />
          </div>
          <h3 className="text-xl font-black uppercase tracking-tight">Systems & Graphics</h3>
          <p className="text-xs font-bold mt-2 text-gray-900 leading-relaxed">
            C/C++, Python, FastAPI, Three.js (WebGL/GLSL Shaders), Docker Containers, TCP/IP Networking.
          </p>
        </div>
      </div>

      {/* Search & Filter Toolbar */}
      <div className="bg-white border-4 border-black p-4 sm:p-6 shadow-memphis mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <div className="relative flex-1">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-black" />
            <input
              type="text"
              placeholder="Search specific tool, library or protocol (e.g. OpenVINO, C++, Three.js, LoRa)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="memphis-input pl-11 w-full text-xs sm:text-sm font-bold"
            />
          </div>
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="memphis-btn-honey px-4 py-2.5 text-xs font-black"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 pt-2 border-t-2 border-black">
          {['All', ...skillCategories.map((c) => c.category)].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-black border-2 border-black uppercase transition-colors ${
                selectedCategory === cat
                  ? 'bg-black text-white'
                  : 'bg-paper text-black hover:bg-honey'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Filtered Skill Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
        {filteredCategories.map((cat, idx) => (
          <div
            key={cat.category}
            className="memphis-card bg-paper p-6 relative group overflow-hidden"
          >
            <MemphisCardOrnaments variant={(((idx % 4) + 1) as 1 | 2 | 3 | 4)} />

            {/* Header */}
            <div className="flex items-center gap-3 pb-3 mb-3 border-b-3 border-black">
              <div className="w-10 h-10 bg-white border-3 border-black flex items-center justify-center shrink-0 shadow-[2px_2px_0_#000]">
                {getCategoryIcon(cat.icon)}
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-black text-black leading-tight">
                  {cat.category}
                </h3>
                <p className="text-[11px] font-bold text-gray-700 leading-snug">
                  {cat.description}
                </p>
              </div>
            </div>

            {/* Skills Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="bg-white hover:bg-honey text-black border-2 border-black px-3 py-1.5 text-xs font-black transition-colors shadow-[1px_1px_0_#000]"
                >
                  {skill.name}
                </span>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t-2 border-black flex items-center justify-between text-[11px] font-bold text-gray-600">
              <span>{cat.skills.length} specialized tools</span>
              <span className="text-black font-black uppercase">Verified</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
