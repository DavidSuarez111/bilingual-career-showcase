/**
 * CVPage Component - Main CV layout container
 * 
 * Features:
 * - Bilingual language management with custom hook
 * - Modular section components
 * - Professional layout structure
 * - SEO optimization with semantic HTML
 * 
 * This is the main container that orchestrates all CV sections
 */

import CVHeader from './CVHeader';
import AboutSection from './AboutSection'; 
import VideoSection from './VideoSection';
import ProjectsSection from './ProjectsSection';
import { useLanguage } from '@/hooks/useLanguage';

const CVPage = () => {
  // Custom hook for language management
  const { language, toggleLanguage } = useLanguage();
  
  return (
    <main className="min-h-screen bg-background" role="main">
      {/* Hero Section - Professional header with CTA */}
      <CVHeader 
        language={language} 
        onLanguageToggle={toggleLanguage} 
      />
      
      {/* About Me Section - Personal introduction and skills */}
      <AboutSection language={language} />
      
      {/* Video Section - Personal presentation placeholder */}
      <VideoSection language={language} />
      
      {/* Projects Section - Portfolio showcase */}
      <ProjectsSection language={language} />
    </main>
  );
};

export default CVPage;