import React, { useState } from 'react';
import { 
  FileCode, Code, Database, Atom, Palette, Zap, Table, Server, 
  Cpu, Network, Binary, MessageSquareText, GitBranch, Box, Cloud, Sparkles, Terminal
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { GithubIcon } from './SocialIcons';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileCode': return <FileCode className="w-6 h-6 text-yellow-400" />;
      case 'Code': return <Code className="w-6 h-6 text-yellow-300" />;
      case 'Database': return <Database className="w-6 h-6 text-cyan-400" />;
      case 'Atom': return <Atom className="w-6 h-6 text-sky-400" />;
      case 'Palette': return <Palette className="w-6 h-6 text-teal-400" />;
      case 'Zap': return <Zap className="w-6 h-6 text-emerald-400" />;
      case 'Table': return <Table className="w-6 h-6 text-blue-400" />;
      case 'Server': return <Server className="w-6 h-6 text-emerald-500" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-orange-400" />;
      case 'Network': return <Network className="w-6 h-6 text-red-400" />;
      case 'Binary': return <Binary className="w-6 h-6 text-purple-400" />;
      case 'MessageSquareText': return <MessageSquareText className="w-6 h-6 text-pink-400" />;
      case 'GitBranch': return <GitBranch className="w-6 h-6 text-orange-500" />;
      case 'Github': return <GithubIcon className="w-6 h-6 text-gray-200" />;
      case 'Box': return <Box className="w-6 h-6 text-blue-500" />;
      case 'Cloud': return <Cloud className="w-6 h-6 text-amber-400" />;
      default: return <Terminal className="w-6 h-6 text-cyan-400" />;
    }
  };

  const categoryNames = ['All', ...SKILL_CATEGORIES.map((c) => c.category)];

  const filteredCategories = selectedCategory === 'All'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Skills & Technology Stack
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mt-2">
            A comprehensive overview of programming languages, frameworks, databases, and modern development tools.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full mt-4" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categoryNames.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 scale-105'
                  : 'glass-card text-gray-300 hover:text-cyan-400 hover:border-cyan-500/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="space-y-10">
          {filteredCategories.map((catGroup) => (
            <div key={catGroup.category} className="space-y-4">
              <div className="flex items-center gap-3">
                <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900">
                  {catGroup.category}
                </h3>
                <div className="h-px bg-white/10 flex-1" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {catGroup.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="glass-card p-5 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group flex items-start gap-4 relative overflow-hidden"
                  >
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-all">
                      {getSkillIcon(skill.icon)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-base font-bold text-white dark:text-white light:text-slate-900 group-hover:text-cyan-400 transition-colors">
                          {skill.name}
                        </h4>
                        {skill.highlight && (
                          <span className="text-[10px] uppercase font-mono tracking-wider font-semibold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                            Core
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-400 dark:text-gray-400 light:text-slate-600 mt-1 leading-snug">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
