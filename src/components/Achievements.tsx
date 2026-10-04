import React from 'react';
import { Trophy, Sparkles, Award, Code2, Target, CheckCircle2, Calendar } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const getAchievementIcon = (iconName: string) => {
    switch (iconName) {
      case 'Trophy':
        return <Trophy className="w-5 h-5 text-amber-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
      case 'Award':
        return <Award className="w-5 h-5 text-indigo-400" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-purple-400" />;
      case 'Target':
        return <Target className="w-5 h-5 text-rose-400" />;
      default:
        return <Award className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="achievements" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Trophy className="w-3.5 h-3.5" />
            <span>Milestones & Community</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Achievements & Hackathons
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mt-2">
            Key technical milestones, hackathon participation, developer summits, and engineering achievements.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full mt-4" />
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-purple-600 opacity-30" />

          <div className="space-y-8">
            {ACHIEVEMENTS.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Node Marker */}
                  <div className="hidden sm:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#0b0f19] border-2 border-cyan-400 items-center justify-center shadow-lg shadow-cyan-500/30 z-10">
                    {getAchievementIcon(item.icon)}
                  </div>

                  {/* Content Card Box */}
                  <div className={`w-full sm:w-[calc(50%-2rem)] ${isEven ? 'sm:text-right' : 'sm:text-left'}`}>
                    <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group shadow-xl space-y-3">
                      
                      <div className={`flex items-center gap-2 ${isEven ? 'sm:justify-end' : 'sm:justify-start'}`}>
                        <div className="sm:hidden p-2 rounded-lg bg-white/5 border border-white/10">
                          {getAchievementIcon(item.icon)}
                        </div>
                        <span className="text-xs uppercase font-mono font-semibold px-2.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                          {item.type}
                        </span>
                        <span className="text-xs font-mono text-gray-400 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {item.date}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs font-semibold text-indigo-400 mt-0.5">
                          {item.organization}
                        </p>
                      </div>

                      <p className="text-xs text-gray-300 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="pt-2 border-t border-white/10 space-y-1">
                        {item.highlights.map((hl, i) => (
                          <div
                            key={i}
                            className={`flex items-center gap-2 text-xs text-gray-400 ${
                              isEven ? 'sm:justify-end' : 'sm:justify-start'
                            }`}
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
