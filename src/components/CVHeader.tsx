/**
 * CVHeader Component - Professional hero section with bilingual support
 * 
 * Features:
 * - Responsive hero design with background image
 * - Language toggle functionality
 * - Call-to-action buttons (Download CV, View Projects)
 * - Smooth animations and hover effects
 * - Professional green-gray color scheme
 * 
 * @param language - Current language ('es' | 'en')
 * @param onLanguageToggle - Function to toggle between languages
 */

import { Button } from "@/components/ui/button";
import { Globe, Download } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import { headerContent, getContent } from "@/constants/content";
import { Language } from "@/hooks/useLanguage";

interface CVHeaderProps {
  language: Language;
  onLanguageToggle: () => void;
}

const CVHeader = ({ language, onLanguageToggle }: CVHeaderProps) => {
  // Get localized content using utility function
  const content = getContent(headerContent, language);

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Professional Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Professional green-gray gradient overlay */}
        <div className="absolute inset-0 bg-hero-gradient opacity-90"></div>
      </div>
      
      {/* Language Toggle Button - Top Right Corner */}
      <Button
        onClick={onLanguageToggle}
        variant="outline"
        size="sm"
        className="absolute top-6 right-6 z-10 bg-background/10 backdrop-blur-md border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 transition-smooth"
        aria-label={`Switch to ${content.switchLang}`}
      >
        <Globe className="w-4 h-4 mr-2" />
        {content.switchLang}
      </Button>

      {/* Main Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl animate-fade-in-up">
        {/* Name - Large heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
          {content.name}
        </h1>
        
        {/* Professional Title */}
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-light">
          {content.title}
        </p>
        
        {/* Description */}
        <p className="text-lg text-primary-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          {content.description}
        </p>
        
        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Primary CTA - Download CV */}
          <Button 
            size="lg" 
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-glow transition-smooth"
          >
            <Download className="w-5 h-5 mr-2" />
            {content.downloadCV}
          </Button>
          
          {/* Secondary CTA - View Projects */}
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm transition-smooth"
          >
            {content.viewProjects}
          </Button>
        </div>
      </div>

      {/* Scroll Indicator - Animated mouse icon */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center" aria-hidden="true">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </header>
  );
};

export default CVHeader;