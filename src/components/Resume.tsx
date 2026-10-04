import React from 'react';
import { Download, Sparkles, Eye, ArrowRight } from 'lucide-react';

interface ResumeProps {
  onOpenResumeModal: () => void;
}

export const Resume: React.FC<ResumeProps> = ({ onOpenResumeModal }) => {
  return (
    <section id="resume" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large CTA Panel */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/40 via-[#0b0f19] to-indigo-950/40 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Curriculum Vitae</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Want to know more about my journey?
              </h2>
              <p className="text-base text-gray-300 max-w-xl leading-relaxed">
                Download my resume to explore my skills, projects, certifications and experience.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                onClick={onOpenResumeModal}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all group"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenResumeModal}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl glass-card text-gray-200 hover:text-cyan-400 hover:border-cyan-500/40 font-semibold text-sm transition-all"
              >
                <Eye className="w-4 h-4 text-cyan-400" />
                <span>View Resume Online</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
