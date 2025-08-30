import { useState } from 'react';
import CVHeader from './CVHeader';
import AboutSection from './AboutSection';
import VideoSection from './VideoSection';
import ProjectsSection from './ProjectsSection';

const CVPage = () => {
  const [language, setLanguage] = useState<'es' | 'en'>('es');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  return (
    <main className="min-h-screen">
      <CVHeader language={language} onLanguageToggle={toggleLanguage} />
      <AboutSection language={language} />
      <VideoSection language={language} />
      <ProjectsSection language={language} />
    </main>
  );
};

export default CVPage;