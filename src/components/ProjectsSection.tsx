import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Smartphone, Globe, Database } from "lucide-react";

interface ProjectsSectionProps {
  language: 'es' | 'en';
}

const ProjectsSection = ({ language }: ProjectsSectionProps) => {
  const content = {
    es: {
      title: "Proyectos Destacados",
      subtitle: "Una selección de mis trabajos más recientes",
      viewAll: "Ver Todos los Proyectos",
      liveDemo: "Demo en Vivo",
      sourceCode: "Código Fuente",
      projects: [
        {
          title: "E-commerce Moderno",
          description: "Plataforma de comercio electrónico completa con React, Node.js y pagos integrados. Incluye panel de administración y analytics en tiempo real.",
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
          tech: ["React", "Node.js", "MongoDB", "Stripe"],
          category: "Web App",
          icon: Globe
        },
        {
          title: "App de Gestión de Tareas",
          description: "Aplicación móvil para productividad con sincronización en tiempo real, notificaciones push y colaboración en equipo.",
          image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
          tech: ["React Native", "Firebase", "Redux"],
          category: "Mobile App",
          icon: Smartphone
        },
        {
          title: "Dashboard Analítico",
          description: "Panel de control empresarial con visualización de datos en tiempo real, reportes automatizados y integración con múltiples APIs.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
          tech: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
          category: "Data Visualization",
          icon: Database
        }
      ]
    },
    en: {
      title: "Featured Projects",
      subtitle: "A selection of my most recent work",
      viewAll: "View All Projects",
      liveDemo: "Live Demo",
      sourceCode: "Source Code",
      projects: [
        {
          title: "Modern E-commerce",
          description: "Complete e-commerce platform with React, Node.js and integrated payments. Includes admin panel and real-time analytics.",
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
          tech: ["React", "Node.js", "MongoDB", "Stripe"],
          category: "Web App",
          icon: Globe
        },
        {
          title: "Task Management App",
          description: "Mobile productivity app with real-time sync, push notifications and team collaboration features.",
          image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80", 
          tech: ["React Native", "Firebase", "Redux"],
          category: "Mobile App",
          icon: Smartphone
        },
        {
          title: "Analytics Dashboard",
          description: "Business control panel with real-time data visualization, automated reports and multiple API integrations.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
          tech: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
          category: "Data Visualization",
          icon: Database
        }
      ]
    }
  };

  const currentContent = content[language];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold bg-text-gradient bg-clip-text text-transparent mb-6">
            {currentContent.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {currentContent.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentContent.projects.map((project, index) => (
            <Card 
              key={index}
              className="group overflow-hidden border-0 bg-card-gradient shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-background/90 text-foreground">
                    <project.icon className="w-3 h-3 mr-1" />
                    {project.category}
                  </Badge>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="w-3 h-3 mr-2" />
                    {currentContent.liveDemo}
                  </Button>
                  <Button variant="outline" size="sm">
                    <Github className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center animate-fade-in-up">
          <Button variant="outline" size="lg" className="min-w-48">
            {currentContent.viewAll}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;