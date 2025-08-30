/**
 * AboutSection Component - Professional introduction and skills showcase
 * 
 * Features:
 * - Bilingual content support with centralized constants
 * - Professional statistics display
 * - Interactive skill badges 
 * - Animated quality cards with hover effects
 * - Responsive grid layout
 * 
 * @param language - Current language ('es' | 'en')
 */

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Zap, Users } from "lucide-react";
import { aboutContent, getContent } from "@/constants/content";
import { Language } from "@/hooks/useLanguage";

interface AboutSectionProps {
  language: Language;
}

const AboutSection = ({ language }: AboutSectionProps) => {
  // Get localized content using utility function
  const content = getContent(aboutContent, language);

  return (
    <section className="py-20 px-6" id="about-section">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold bg-text-gradient bg-clip-text text-transparent mb-6">
            {content.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {content.description}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Statistics and Skills */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Professional Statistics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold bg-text-gradient bg-clip-text text-transparent">
                  5+
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {language === 'es' ? 'Años' : 'Years'}
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-text-gradient bg-clip-text text-transparent">
                  50+
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {language === 'es' ? 'Proyectos' : 'Projects'}
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-text-gradient bg-clip-text text-transparent">
                  3
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {language === 'es' ? 'Países' : 'Countries'}
                </p>
              </div>
            </div>

            {/* Technical Skills Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4">
                {language === 'es' ? 'Habilidades Técnicas' : 'Technical Skills'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {content.skills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Professional Qualities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {content.qualities.map((quality, index) => (
              <Card 
                key={index} 
                className="p-6 bg-card-gradient border-0 shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <quality.icon className="w-10 h-10 text-accent mb-4 group-hover:text-primary transition-colors" />
                <h4 className="font-semibold mb-2">{quality.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {quality.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;