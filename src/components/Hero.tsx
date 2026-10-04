import React, { useState } from 'react';
import { Mail, ArrowRight, FileText, Sparkles, Terminal, Cpu, Database, Code, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const [activeTab, setActiveTab] = useState<'fullstack' | 'sql' | 'python'>('fullstack');

  const codeSnippets = {
    fullstack: `// Smart Bus Ticketing System - Interactive App
import React, { useState } from 'react';
import { GoogleMap, PaymentGateway } from './services';

export const BookingMatrix = ({ busId, route }) => {
  const [selectedSeat, setSelectedSeat] = useState<string | null>(null);

  const handleCheckout = async () => {
    const payment = await PaymentGateway.initiate({
      amount: 150,
      currency: "INR"
    });
    console.log("Ticket Generated!", payment.id);
  };
  return <SeatGrid seat={selectedSeat} onSelect={setSelectedSeat} />;
};`,
    sql: `-- Advanced Analytical Query - Student Performance
WITH RankedPerformance AS (
  SELECT 
    student_id,
    course_name,
    score,
    DENSE_RANK() OVER (PARTITION BY course_name ORDER BY score DESC) as rank
  FROM assessment_scores
  WHERE assessment_year = 2024
)
SELECT * FROM RankedPerformance WHERE rank <= 3;`,
    python: `# Data Processing & Analytics Pipeline
import pandas as pd

def analyze_student_performance(dataset_path: str):
    df = pd.read_csv(dataset_path)
    summary = df.groupby('course').agg({
        'score': ['mean', 'max'],
        'student_id': 'count'
    })
    return summary`,
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-wide">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{PERSONAL_INFO.status}</span>
            </div>

            {/* Greeting */}
            <div className="flex items-center gap-2 text-gray-300 font-medium text-lg sm:text-xl">
              <span>Hi, I'm {PERSONAL_INFO.name.split(' ')[0]}</span>
              <span className="animate-bounce inline-block">👋</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white dark:text-white light:text-slate-900">
              {PERSONAL_INFO.role}
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">
                {PERSONAL_INFO.tagline}
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-gray-400 dark:text-gray-400 light:text-slate-600 max-w-2xl leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all group"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResumeModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl glass-card text-gray-200 dark:text-gray-200 light:text-slate-800 hover:text-cyan-400 hover:border-cyan-500/40 font-semibold text-sm transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Links & Quick Specs */}
            <div className="pt-6 border-t border-white/10 flex items-center gap-6 w-full">
              <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Connect</span>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-xl glass-card text-gray-400 hover:text-white hover:border-cyan-500/40 hover:scale-110 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-xl glass-card text-gray-400 hover:text-white hover:border-cyan-500/40 hover:scale-110 transition-all"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  aria-label="Send Email"
                  className="p-2.5 rounded-xl glass-card text-gray-400 hover:text-white hover:border-cyan-500/40 hover:scale-110 transition-all"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Visual Element: Interactive Developer IDE / Code Terminal */}
          <div className="lg:col-span-5 relative">
            
            {/* Ambient Background Glow behind visual */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 rounded-3xl blur-2xl opacity-25 animate-pulse-slow" />

            {/* IDE Window Card */}
            <div className="relative glass-panel rounded-2xl border border-white/15 overflow-hidden shadow-2xl">
              
              {/* Window Header */}
              <div className="px-4 py-3 bg-[#090d16]/90 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs text-gray-400 font-mono flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    bhavya-dev-workspace
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/20 text-cyan-300">
                    v2.4.0
                  </span>
                </div>
              </div>

              {/* IDE Code Tabs */}
              <div className="flex border-b border-white/10 bg-[#090d16]/50 px-2 pt-2 gap-1 overflow-x-auto text-xs font-mono">
                <button
                  onClick={() => setActiveTab('fullstack')}
                  className={`px-3 py-1.5 rounded-t-lg flex items-center gap-1.5 transition-colors ${
                    activeTab === 'fullstack'
                      ? 'bg-indigo-500/20 text-indigo-300 border-t-2 border-indigo-400'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  <Code className="w-3.5 h-3.5" />
                  BusApp.tsx
                </button>
                <button
                  onClick={() => setActiveTab('sql')}
                  className={`px-3 py-1.5 rounded-t-lg flex items-center gap-1.5 transition-colors ${
                    activeTab === 'sql'
                      ? 'bg-purple-500/20 text-purple-300 border-t-2 border-purple-400'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  <Database className="w-3.5 h-3.5" />
                  Analytics.sql
                </button>
                <button
                  onClick={() => setActiveTab('python')}
                  className={`px-3 py-1.5 rounded-t-lg flex items-center gap-1.5 transition-colors ${
                    activeTab === 'python'
                      ? 'bg-cyan-500/20 text-cyan-300 border-t-2 border-cyan-400'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5" />
                  DataPipeline.py
                </button>
              </div>

              {/* IDE Code Area */}
              <div className="p-4 bg-[#050811] text-xs font-mono text-gray-300 overflow-x-auto min-h-[240px] leading-relaxed">
                <pre className="text-gray-300">
                  <code>{codeSnippets[activeTab]}</code>
                </pre>
              </div>

              {/* Output Simulation Panel */}
              <div className="p-3 bg-[#090d16] border-t border-white/10 text-[11px] font-mono flex items-center justify-between text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Build: Success (0 warnings)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
                  <span>Data & Web Ready</span>
                </div>
              </div>

            </div>

            {/* Floating Tech Badges around IDE */}
            <div className="hidden sm:flex absolute -bottom-5 -left-5 glass-card px-3 py-1.5 rounded-xl border border-cyan-500/30 text-xs font-mono text-cyan-300 items-center gap-2 shadow-xl backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              FastAPI + React
            </div>
            
            <div className="hidden sm:flex absolute -top-4 -right-4 glass-card px-3 py-1.5 rounded-xl border border-purple-500/30 text-xs font-mono text-purple-300 items-center gap-2 shadow-xl backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              Python & SQL
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
