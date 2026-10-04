import React, { useState } from 'react';
import { Award, ExternalLink, CheckCircle2, ShieldCheck, X } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import type { Certification } from '../types';

export const Certifications: React.FC = () => {
  const [activeCert, setActiveCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Certifications & Training
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mt-2">
            Industry and academic certifications in Data Science, SQL, Python, and Sustainable Systems.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full mt-4" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="glass-panel p-7 rounded-3xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group flex flex-col justify-between shadow-xl relative overflow-hidden"
            >
              <div className="space-y-4">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  {cert.badgeText && (
                    <span className="text-xs uppercase font-mono font-bold px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-300 border border-cyan-500/30">
                      {cert.badgeText}
                    </span>
                  )}
                </div>

                {/* Title & Issuer */}
                <div>
                  <h3 className="text-xl font-extrabold text-white group-hover:text-cyan-400 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm font-semibold text-indigo-400">{cert.issuer}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-xs font-mono text-gray-400">{cert.year}</span>
                  </div>
                </div>

                {/* Skills Learned Badges */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {cert.skillsLearned.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono text-gray-300 bg-white/5 border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>

              {/* View Certificate Button */}
              <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
                <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Credential</span>
                </span>
                
                <button
                  onClick={() => setActiveCert(cert)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-xs shadow-md shadow-cyan-500/20 hover:scale-105 transition-transform"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>View Certificate</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Certificate Viewer Modal */}
      {activeCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg glass-panel bg-[#0b0f19] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-mono uppercase text-cyan-400 font-semibold">Credential Verification</span>
                <h3 className="text-xl font-bold text-white mt-1">{activeCert.title}</h3>
                <p className="text-xs text-indigo-400 font-semibold mt-0.5">{activeCert.issuer} — {activeCert.year}</p>
              </div>
              <button
                onClick={() => setActiveCert(null)}
                aria-label="Close Certificate Modal"
                className="p-2 rounded-full glass-card text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-cyan-500/20 text-center space-y-3 bg-cyan-500/5">
              <ShieldCheck className="w-12 h-12 text-cyan-400 mx-auto" />
              <h4 className="text-base font-bold text-white">Official Certification Document</h4>
              <p className="text-xs text-gray-300">
                Issued by {activeCert.issuer}. Verified under academic & student credential records.
              </p>
              <div className="pt-2 flex flex-wrap justify-center gap-2">
                {activeCert.skillsLearned.map((s) => (
                  <span key={s} className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-cyan-500/20 text-cyan-300">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <a
                href={activeCert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-xs shadow-lg shadow-cyan-500/20"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open Verification Link</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
