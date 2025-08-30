/**
 * ProjectsSection Component - Professional portfolio showcase
 * 
 * Features:
 * - Bilingual project descriptions and metadata
 * - Interactive project cards with hover animations  
 * - Technology stack badges for each project
 * - Professional project images and category icons
 * - Call-to-action buttons for demos and source code
 * 
 * @param language - Current language ('es' | 'en')
 */

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Smartphone, Globe, Database } from "lucide-react";
import { projectsContent, getContent } from "@/constants/content";
import { Language } from "@/hooks/useLanguage";

interface ProjectsSectionProps {
  language: Language;
}

const ProjectsSection = ({ language }: ProjectsSectionProps) => {
  // Get localized content using utility function
  const content = getContent(projectsContent, language);

  return (
    <section className="py-20 px-6 bg-muted/30" id="projects-section">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold bg-text-gradient bg-clip-text text-transparent mb-6">
            {content.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {content.description}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {content.projects.map((project, index) => (
            <Card 
              key={index}
              className="group overflow-hidden border-0 bg-card-gradient shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image with Overlay */}
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={`${project.title} project screenshot`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                {/* Hover overlay effect */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-background/90 text-foreground">
                    <project.icon className="w-3 h-3 mr-1" />
                    {project.category}
                  </Badge>
                </div>
              </div>

              {/* Project Information */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technology Stack Badges */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs hover:bg-accent hover:text-accent-foreground transition-colors">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Project Action Buttons */}
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    className="flex-1 hover:shadow-glow transition-all"
                    aria-label={`View ${project.title} demo`}
                  >
                    <ExternalLink className="w-3 h-3 mr-2" />
                    {content.viewProject}
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={`View ${project.title} source code`}
                  >
                    <Github className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center animate-fade-in-up">
          <Button 
            variant="outline" 
            size="lg" 
            className="min-w-48 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {content.viewAll}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;