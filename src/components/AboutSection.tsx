import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Zap, Users } from "lucide-react";

interface AboutSectionProps {
  language: 'es' | 'en';
}

const AboutSection = ({ language }: AboutSectionProps) => {
  const content = {
    es: {
      title: "Sobre Mí",
      description: "Soy un desarrollador apasionado por crear soluciones digitales innovadoras. Combino habilidades técnicas sólidas con un enfoque centrado en el usuario para entregar experiencias web excepcionales.",
      experience: "5+ años de experiencia",
      projects: "50+ proyectos completados",
      clients: "Clientes satisfechos en 3 países",
      skills: ["React", "TypeScript", "Node.js", "Python", "Figma", "AWS"],
      qualities: [
        {
          icon: Code,
          title: "Desarrollo Técnico",
          description: "Código limpio y escalable siguiendo las mejores prácticas"
        },
        {
          icon: Palette,
          title: "Diseño UI/UX",
          description: "Interfaces intuitivas y experiencias centradas en el usuario"
        },
        {
          icon: Zap,
          title: "Optimización",
          description: "Performance y velocidad de carga optimizadas"
        },
        {
          icon: Users,
          title: "Colaboración",
          description: "Trabajo efectivo en equipos multidisciplinarios"
        }
      ]
    },
    en: {
      title: "About Me",
      description: "I'm a passionate developer focused on creating innovative digital solutions. I combine solid technical skills with a user-centered approach to deliver exceptional web experiences.",
      experience: "5+ years of experience",
      projects: "50+ completed projects", 
      clients: "Satisfied clients in 3 countries",
      skills: ["React", "TypeScript", "Node.js", "Python", "Figma", "AWS"],
      qualities: [
        {
          icon: Code,
          title: "Technical Development",
          description: "Clean and scalable code following best practices"
        },
        {
          icon: Palette,
          title: "UI/UX Design",
          description: "Intuitive interfaces and user-centered experiences"
        },
        {
          icon: Zap,
          title: "Optimization",
          description: "Optimized performance and loading speed"
        },
        {
          icon: Users,
          title: "Collaboration",
          description: "Effective work in multidisciplinary teams"
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
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {currentContent.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Stats */}
          <div className="space-y-8 animate-fade-in-up">
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

            {/* Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-4">
                {language === 'es' ? 'Habilidades Técnicas' : 'Technical Skills'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {currentContent.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Qualities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {currentContent.qualities.map((quality, index) => (
              <Card 
                key={index} 
                className="p-6 bg-card-gradient border-0 shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <quality.icon className="w-10 h-10 text-accent mb-4" />
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