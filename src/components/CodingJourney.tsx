import React from 'react';
import { Code2, ExternalLink, Award, CheckCircle2, TrendingUp, Terminal } from 'lucide-react';
import { DSA_JOURNEY, PERSONAL_INFO } from '../data/portfolioData';

export const CodingJourney: React.FC = () => {
  return (
    <section id="dsa" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Code2 className="w-3.5 h-3.5" />
            <span>Algorithmic Foundations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            {DSA_JOURNEY.headline}
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mt-2">
            {DSA_JOURNEY.summary}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full mt-4" />
        </div>

        {/* Highlight Banner / LeetCode Stats Card */}
        <div className="glass-panel p-8 rounded-3xl border border-white/10 shadow-2xl mb-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Counter Info */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono font-semibold">
                <Award className="w-3.5 h-3.5" />
                <span>Problem Solving Journey</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                {DSA_JOURNEY.totalSolved}+ LeetCode Problems Solved
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed max-w-xl">
                Building efficient data structure fundamentals, analyzing time/space complexity tradeoffs (Big-O), and writing clean, optimal algorithmic code.
              </p>

              {/* Platform CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={PERSONAL_INFO.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold text-xs shadow-md shadow-amber-500/20 hover:scale-105 transition-transform"
                >
                  <Terminal className="w-4 h-4" />
                  <span>LeetCode Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card text-gray-200 hover:text-cyan-400 hover:border-cyan-500/40 text-xs font-semibold transition-all"
                >
                  <Code2 className="w-4 h-4" />
                  <span>GitHub DSA Repo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Interactive Progress Visualizer */}
            <div className="lg:col-span-5 glass-card p-6 rounded-2xl border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-cyan-400 font-semibold uppercase">Core DSA Domains</span>
                <span className="text-xs font-mono text-gray-400">Continuous Practice</span>
              </div>

              {/* Progress Visualizer Bars */}
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-gray-300 mb-1">
                    <span>Arrays, Strings & Searching</span>
                    <span className="text-cyan-400">Strong</span>
                  </div>
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full w-[85%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-gray-300 mb-1">
                    <span>Two Pointers & Hashing</span>
                    <span className="text-indigo-400">Mastered</span>
                  </div>
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full w-[80%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-gray-300 mb-1">
                    <span>Sliding Window & Prefix Sum</span>
                    <span className="text-purple-400">Practicing</span>
                  </div>
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-[70%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-gray-300 mb-1">
                    <span>Linked Lists, Trees & Graphs</span>
                    <span className="text-emerald-400">Expanding</span>
                  </div>
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full w-[65%]" />
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Topic Cards Grid */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <h3 className="text-xl font-bold text-white">Algorithmic Topic Focus</h3>
            <div className="h-px bg-white/10 flex-1" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {DSA_JOURNEY.topics.map((topic) => (
              <div
                key={topic.name}
                className="glass-card p-5 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {topic.name}
                    </h4>
                    <span
                      className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded font-semibold ${
                        topic.status === 'Mastered'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          : topic.status === 'Practicing'
                          ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                          : 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                      }`}
                    >
                      {topic.status}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {topic.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[11px] font-mono text-gray-400 bg-white/5 border border-white/5"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-gray-400 font-mono">
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>~{topic.problemsCount} Solved</span>
                  </div>
                  <TrendingUp className="w-3.5 h-3.5 text-indigo-400" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
