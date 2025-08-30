import { Button } from "@/components/ui/button";
import { Globe, Download } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

interface CVHeaderProps {
  language: 'es' | 'en';
  onLanguageToggle: () => void;
}

const CVHeader = ({ language, onLanguageToggle }: CVHeaderProps) => {
  const content = {
    es: {
      name: "Tu Nombre",
      title: "Desarrollador Full Stack & Diseñador UI/UX",
      description: "Transformando ideas en experiencias digitales excepcionales con más de 5 años de experiencia en desarrollo web y diseño centrado en el usuario.",
      downloadCV: "Descargar CV",
      switchLang: "English"
    },
    en: {
      name: "Your Name",
      title: "Full Stack Developer & UI/UX Designer", 
      description: "Transforming ideas into exceptional digital experiences with over 5 years of experience in web development and user-centered design.",
      downloadCV: "Download CV",
      switchLang: "Español"
    }
  };

  const currentContent = content[language];

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-hero-gradient opacity-90"></div>
      </div>
      
      {/* Language Toggle */}
      <Button
        onClick={onLanguageToggle}
        variant="outline"
        size="sm"
        className="absolute top-6 right-6 z-10 bg-background/10 backdrop-blur-md border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20"
      >
        <Globe className="w-4 h-4 mr-2" />
        {currentContent.switchLang}
      </Button>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
          {currentContent.name}
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-light">
          {currentContent.title}
        </p>
        <p className="text-lg text-primary-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          {currentContent.description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-glow"
          >
            <Download className="w-5 h-5 mr-2" />
            {currentContent.downloadCV}
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm"
          >
            {language === 'es' ? 'Ver Proyectos' : 'View Projects'}
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </header>
  );
};

export default CVHeader;