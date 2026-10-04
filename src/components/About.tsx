import React from 'react';
import { GraduationCap, Code2, BarChart3, BrainCircuit, Layers, Sparkles, CheckCircle2 } from 'lucide-react';
import { ABOUT_HIGHLIGHTS } from '../data/portfolioData';

export const About: React.FC = () => {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-cyan-400" />;
      case 'Code2':
        return <Code2 className="w-6 h-6 text-purple-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-emerald-400" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-6 h-6 text-pink-400" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-amber-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Driven by Curiosity, Engineered with Precision
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full mt-4" />
        </div>

        {/* Core Summary Card */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-5">
              <h3 className="text-2xl font-bold text-white dark:text-white light:text-slate-900 flex items-center gap-3">
                <span>Computer Science & Information Technology Student</span>
              </h3>
              
              <div className="space-y-4 text-base sm:text-lg text-gray-300 dark:text-gray-300 light:text-slate-700 leading-relaxed">
                <p>
                  I am a Computer Science & Information Technology student who enjoys solving problems, building practical applications and learning emerging technologies.
                </p>
                <p>
                  My current focus is on strengthening Data Structures & Algorithms, SQL, Data Analytics and Machine Learning while continuing to build real-world software projects.
                </p>
              </div>

              {/* Bullet Quick Strengths */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Algorithmic Thinking & DSA</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Data Analytics & SQL Querying</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Machine Learning & NLP Basics</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Full-Stack Web Development</span>
                </div>
              </div>
            </div>

            {/* Quick Profile Stat Box */}
            <div className="lg:col-span-4 glass-card p-6 rounded-2xl border border-white/10 text-center space-y-4 flex flex-col justify-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 flex items-center justify-center mx-auto text-cyan-400">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold block">Degree</span>
                <p className="text-lg font-bold text-white mt-1">B.Tech CSIT</p>
                <p className="text-xs text-gray-400 mt-1">Computer Science & Info Tech</p>
              </div>
              <div className="pt-3 border-t border-white/10 flex justify-around text-xs text-gray-300">
                <div>
                  <span className="font-bold text-white block text-sm">70+</span>
                  <span className="text-gray-400">DSA Solved</span>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div>
                  <span className="font-bold text-white block text-sm">4+</span>
                  <span className="text-gray-400">Core Projects</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Information Highlights Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ABOUT_HIGHLIGHTS.map((item, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {getIconComponent(item.icon)}
                </div>
                <h4 className="text-lg font-bold text-white dark:text-white light:text-slate-900 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs font-semibold text-cyan-400 mt-0.5 mb-2">
                  {item.subtitle}
                </p>
                <p className="text-sm text-gray-400 dark:text-gray-400 light:text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
