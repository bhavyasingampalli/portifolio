import React from 'react';
import { X, Download, FileText, GraduationCap, Code2, Award, Briefcase, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, SKILL_CATEGORIES, PROJECTS, CERTIFICATIONS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob(
      [
        `==================================================
BHAVYA SINGAMPALLI - RESUME
Computer Science & Information Technology Student
Email: ${PERSONAL_INFO.email}
GitHub: ${PERSONAL_INFO.github}
LinkedIn: ${PERSONAL_INFO.linkedin}
==================================================

SUMMARY:
${PERSONAL_INFO.bio}

EDUCATION:
B.Tech — Computer Science & Information Technology

CORE SKILLS:
- Programming: Python, JavaScript, SQL
- Frontend: React, Tailwind CSS
- Backend: FastAPI
- Databases: MySQL, MongoDB
- Tools: Git, GitHub, Docker, AWS

FEATURED PROJECTS:
1. Smart Bus Digital Ticketing System
2. MediGuard AI
3. Elderly Care Awareness Portal
4. AI FAQ Voice Assistant

CERTIFICATIONS:
- Cisco: Data Science Essentials with Python
- NPTEL: Education for Sustainable Development (Elite)
- GeeksforGeeks: SQL Course
- HackerRank: SQL Assessment
==================================================`
      ],
      { type: 'text/plain' }
    );
    element.href = URL.createObjectURL(file);
    element.download = 'Bhavya_Singampalli_Resume.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl glass-panel bg-[#0b0f19] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto my-auto">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase text-cyan-400 font-semibold">Official Student Resume</span>
              <h3 className="text-xl font-bold text-white">{PERSONAL_INFO.name}</h3>
              <p className="text-xs text-gray-400">{PERSONAL_INFO.role}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-xs font-semibold shadow-md hover:scale-105 transition-transform"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download File</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Close Resume Modal"
              className="p-2 rounded-full glass-card text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formatted Resume Preview */}
        <div className="bg-[#050811] p-6 sm:p-8 rounded-2xl border border-white/10 text-gray-200 space-y-6 text-sm font-sans">
          
          {/* Resume Header */}
          <div className="text-center border-b border-white/10 pb-5 space-y-2">
            <h2 className="text-2xl font-extrabold text-white tracking-wide">{PERSONAL_INFO.name}</h2>
            <p className="text-xs font-mono text-cyan-400 font-semibold">{PERSONAL_INFO.role}</p>
            <p className="text-xs text-gray-400 max-w-xl mx-auto">{PERSONAL_INFO.bio}</p>
            <div className="flex flex-wrap justify-center gap-4 text-xs font-mono text-gray-400 pt-2">
              <span>📧 {PERSONAL_INFO.email}</span>
              <span>🔗 {PERSONAL_INFO.github}</span>
              <span>💼 {PERSONAL_INFO.linkedin}</span>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase font-mono font-bold text-cyan-400 tracking-wider flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h4>
            <div className="glass-card p-4 rounded-xl border border-white/10 flex justify-between items-start">
              <div>
                <p className="font-bold text-white text-sm">B.Tech — Computer Science & Information Technology</p>
                <p className="text-xs text-gray-400">Undergraduate Engineering Student</p>
              </div>
              <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded">Present</span>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase font-mono font-bold text-cyan-400 tracking-wider flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              <span>Technical Skills</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.category} className="glass-card p-3 rounded-xl border border-white/5">
                  <span className="font-bold text-indigo-300 block mb-1">{cat.category}</span>
                  <span className="text-gray-300">{cat.skills.map((s) => s.name).join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase font-mono font-bold text-cyan-400 tracking-wider flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>Technical Projects</span>
            </h4>
            <div className="space-y-3">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="glass-card p-3.5 rounded-xl border border-white/5 space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-white text-xs">{proj.title}</span>
                    <span className="text-[10px] font-mono text-cyan-400">{proj.technologies.slice(0, 3).join(', ')}</span>
                  </div>
                  <p className="text-xs text-gray-300">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase font-mono font-bold text-cyan-400 tracking-wider flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>Certifications</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {CERTIFICATIONS.map((c) => (
                <div key={c.id} className="glass-card p-3 rounded-xl border border-white/5 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-white block">{c.title}</span>
                    <span className="text-gray-400 text-[11px]">{c.issuer} ({c.year})</span>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-xs text-gray-400">PDF / Text resume export options</span>
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-xs font-semibold shadow-lg shadow-cyan-500/20 hover:scale-105 transition-transform"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </button>
        </div>

      </div>
    </div>
  );
};
