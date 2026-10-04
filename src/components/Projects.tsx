import React, { useState } from 'react';
import { Sparkles, ExternalLink, BookOpen, Layers, CheckCircle2 } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../types';
import { CaseStudyModal } from './CaseStudyModal';
import { GithubIcon } from './SocialIcons';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeCaseStudy, setActiveCaseStudy] = useState<Project | null>(null);

  const categories = ['All', 'Full-Stack', 'AI / ML', 'Web Apps'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mt-2">
            Practical, problem-solving software applications built with modern web, AI, and backend technologies.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full mt-4" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
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

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-3xl border border-white/10 overflow-hidden hover:border-cyan-500/40 transition-all duration-300 group flex flex-col justify-between shadow-2xl relative"
            >
              <div className="p-7 space-y-6">
                
                {/* Top Badge & Category */}
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-mono font-bold tracking-wider px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono">
                    <Layers className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Featured</span>
                  </div>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-2xl font-extrabold text-white dark:text-white light:text-slate-900 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-400 mt-1">
                    {project.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-300 dark:text-gray-300 light:text-slate-600 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features List */}
                <div className="space-y-2 pt-2 border-t border-white/10">
                  <span className="text-xs font-mono uppercase text-gray-400 font-bold block">Key Features</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology Badges */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium glass-card border border-white/10 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* Action Buttons Footer */}
              <div className="p-5 bg-[#090d16]/70 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-xs shadow-md shadow-cyan-500/20 hover:scale-105 transition-transform"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl glass-card text-gray-200 hover:text-cyan-400 hover:border-cyan-500/40 text-xs font-semibold transition-all"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setActiveCaseStudy(project)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl glass-card border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 text-xs font-semibold transition-all"
                >
                  <BookOpen className="w-3.5 h-3.5 text-purple-400" />
                  <span>Case Study</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal Popup */}
      <CaseStudyModal
        project={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
      />
    </section>
  );
};
