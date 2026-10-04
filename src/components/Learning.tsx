import React from 'react';
import { BookOpen, Binary, Database, LineChart, Brain, Container, Network, ArrowUpRight } from 'lucide-react';
import { CURRENTLY_LEARNING } from '../data/portfolioData';

export const Learning: React.FC = () => {
  const getTopicIcon = (iconName: string) => {
    switch (iconName) {
      case 'Binary': return <Binary className="w-6 h-6 text-cyan-400" />;
      case 'Database': return <Database className="w-6 h-6 text-indigo-400" />;
      case 'LineChart': return <LineChart className="w-6 h-6 text-emerald-400" />;
      case 'Brain': return <Brain className="w-6 h-6 text-pink-400" />;
      case 'Container': return <Container className="w-6 h-6 text-blue-400" />;
      case 'Network': return <Network className="w-6 h-6 text-amber-400" />;
      default: return <BookOpen className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="learning" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Continuous Knowledge Acquisition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Currently Learning
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mt-2">
            Active domains and technologies I am currently studying, mastering, and applying in projects.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full mt-4" />
        </div>

        {/* Learning Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CURRENTLY_LEARNING.map((item) => (
            <div
              key={item.topic}
              className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group flex flex-col justify-between shadow-xl relative overflow-hidden"
            >
              <div className="space-y-4">
                
                {/* Header Icon & Status Pill */}
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                    {getTopicIcon(item.icon)}
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    {item.status}
                  </span>
                </div>

                {/* Topic & Description */}
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors flex items-center justify-between">
                    <span>{item.topic}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-cyan-400" />
                  </h3>
                  <p className="text-xs text-gray-300 dark:text-gray-300 light:text-slate-600 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Subtopic Tags */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium glass-card border border-white/10 text-gray-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
