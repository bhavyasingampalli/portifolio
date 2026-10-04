import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { BackgroundEffect } from './components/BackgroundEffect';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { CodingJourney } from './components/CodingJourney';
import { Achievements } from './components/Achievements';
import { Certifications } from './components/Certifications';
import { Learning } from './components/Learning';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-[#030712] text-gray-100 transition-colors duration-300 selection:bg-cyan-500 selection:text-black">
        
        {/* Ambient Dark Developer Background Effect */}
        <BackgroundEffect />

        {/* Sticky Responsive Navigation Bar */}
        <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* Main Content Sections */}
        <main className="relative z-10">
          <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />
          <About />
          <Skills />
          <Projects />
          <CodingJourney />
          <Achievements />
          <Certifications />
          <Learning />
          <Resume onOpenResumeModal={() => setIsResumeModalOpen(true)} />
          <Contact />
        </main>

        {/* Minimal Developer Footer */}
        <Footer />

        {/* Global Interactive Resume Viewer Modal */}
        <ResumeModal
          isOpen={isResumeModalOpen}
          onClose={() => setIsResumeModalOpen(false)}
        />

      </div>
    </ThemeProvider>
  );
};

export default App;
