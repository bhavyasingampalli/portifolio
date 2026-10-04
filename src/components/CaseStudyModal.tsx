import React from 'react';
import { X, Layers, Lightbulb, CheckCircle2, Cpu, ExternalLink } from 'lucide-react';
import type { Project } from '../types';
import { GithubIcon } from './SocialIcons';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl glass-panel bg-[#0b0f19] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <span className="text-xs uppercase font-mono text-cyan-400 font-semibold tracking-wider">
              Technical Case Study
            </span>
            <h3 className="text-2xl font-extrabold text-white mt-1">{project.title}</h3>
            <p className="text-sm text-gray-400 mt-0.5">{project.tagline}</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Case Study Modal"
            className="p-2 rounded-full glass-card text-gray-400 hover:text-white hover:border-cyan-500/40 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Problem Statement */}
        <div className="glass-card p-4 sm:p-5 rounded-2xl border border-rose-500/20 bg-rose-500/5 space-y-2">
          <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
            <Lightbulb className="w-4 h-4" />
            <span>Problem Statement</span>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            {project.caseStudy.problem}
          </p>
        </div>

        {/* Proposed Solution */}
        <div className="glass-card p-4 sm:p-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
            <CheckCircle2 className="w-4 h-4" />
            <span>Architectural Solution</span>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            {project.caseStudy.solution}
          </p>
        </div>

        {/* Key System Architecture */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white flex items-center gap-2">
            <Layers className="w-4 h-4 text-indigo-400" />
            <span>System Components & Workflow</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.caseStudy.architecture.map((item, index) => (
              <div
                key={index}
                className="glass-card p-3.5 rounded-xl border border-white/10 text-xs text-gray-300 flex items-start gap-2.5"
              >
                <span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-mono font-bold shrink-0">
                  {index + 1}
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Takeaways */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white flex items-center gap-2">
            <Cpu className="w-4 h-4 text-amber-400" />
            <span>Key Engineering Takeaways</span>
          </h4>
          <ul className="space-y-2 text-xs text-gray-300">
            {project.caseStudy.keyTakeaways.map((takeaway, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Modal Footer Actions */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-xs shadow-md hover:scale-105 transition-transform"
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-card text-gray-200 hover:text-cyan-400 hover:border-cyan-500/40 text-xs font-semibold transition-all"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-gray-400 hover:text-white"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};
