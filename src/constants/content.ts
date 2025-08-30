/**
 * Bilingual content constants for CV sections
 * Centralized content management for Spanish and English versions
 * 
 * Structure:
 * - Each section contains 'es' and 'en' objects
 * - Consistent naming for easy maintenance
 * - Professional tone and terminology
 */

import { Language } from '@/hooks/useLanguage';

export type ContentKey = 'es' | 'en';

/**
 * Header section content - Hero area with name, title, and CTA buttons
 */
export const headerContent = {
  es: {
    name: "Tu Nombre",
    title: "Desarrollador Full Stack & Diseñador UI/UX",
    description: "Transformando ideas en experiencias digitales excepcionales con más de 5 años de experiencia en desarrollo web y diseño centrado en el usuario.",
    downloadCV: "Descargar CV",
    viewProjects: "Ver Proyectos",
    switchLang: "English"
  },
  en: {
    name: "Your Name", 
    title: "Full Stack Developer & UI/UX Designer",
    description: "Transforming ideas into exceptional digital experiences with over 5 years of experience in web development and user-centered design.",
    downloadCV: "Download CV",
    viewProjects: "View Projects", 
    switchLang: "Español"
  }
} as const;

/**
 * About section content - Personal introduction and skills
 */
export const aboutContent = {
  es: {
    title: "Sobre Mí",
    subtitle: "Pasión por crear soluciones digitales innovadoras",
    description: "Con más de 5 años de experiencia en desarrollo web, me especializo en crear aplicaciones robustas y experiencias de usuario excepcionales. Mi enfoque combina técnica sólida con diseño centrado en el usuario.",
    skills: [
      "Desarrollo Frontend (React, Vue, Angular)",
      "Desarrollo Backend (Node.js, Python, Java)", 
      "Diseño UI/UX y Prototipado",
      "Bases de Datos y APIs RESTful",
      "DevOps y Deployment",
      "Metodologías Ágiles"
    ],
    qualities: [
      {
        icon: "Code" as any,
        title: "Desarrollo Técnico",
        description: "Código limpio y escalable siguiendo las mejores prácticas"
      },
      {
        icon: "Palette" as any,
        title: "Diseño UI/UX",
        description: "Interfaces intuitivas y experiencias centradas en el usuario"
      },
      {
        icon: "Zap" as any,
        title: "Optimización",
        description: "Performance y velocidad de carga optimizadas"
      },
      {
        icon: "Users" as any,
        title: "Colaboración",
        description: "Trabajo efectivo en equipos multidisciplinarios"
      }
    ],
    contact: "Contáctame",
    location: "Madrid, España"
  },
  en: {
    title: "About Me",
    subtitle: "Passionate about creating innovative digital solutions", 
    description: "With over 5 years of experience in web development, I specialize in creating robust applications and exceptional user experiences. My approach combines solid technique with user-centered design.",
    skills: [
      "Frontend Development (React, Vue, Angular)",
      "Backend Development (Node.js, Python, Java)",
      "UI/UX Design & Prototyping", 
      "Databases & RESTful APIs",
      "DevOps & Deployment",
      "Agile Methodologies"
    ],
    qualities: [
      {
        icon: "Code" as any,
        title: "Technical Development",
        description: "Clean and scalable code following best practices"
      },
      {
        icon: "Palette" as any,
        title: "UI/UX Design",
        description: "Intuitive interfaces and user-centered experiences"
      },
      {
        icon: "Zap" as any,
        title: "Optimization",
        description: "Optimized performance and loading speed"
      },
      {
        icon: "Users" as any,
        title: "Collaboration",
        description: "Effective work in multidisciplinary teams"
      }
    ],
    contact: "Contact Me",
    location: "Madrid, Spain"
  }
} as const;

/**
 * Video section content - Personal presentation placeholder
 */
export const videoContent = {
  es: {
    title: "Presentación en Video",
    subtitle: "Conoce mi historia y motivaciones",
    description: "Un vistazo personal a mi trayectoria profesional, metodología de trabajo y visión sobre el desarrollo de software.",
    placeholder: "Video próximamente disponible",
    uploadButton: "Subir Video",
    videoSpace: "Espacio para tu presentación",
    videoDescription: "Sube un video personal para conectar mejor con visitantes",
    clickPrompt: "Haz clic aquí cuando tengas tu video listo"
  },
  en: {
    title: "Video Presentation",
    subtitle: "Get to know my story and motivations", 
    description: "A personal look at my professional journey, work methodology and vision about software development.",
    placeholder: "Video coming soon",
    uploadButton: "Upload Video",
    videoSpace: "Space for your presentation",
    videoDescription: "Upload a personal video to better connect with visitors",
    clickPrompt: "Click here when you have your video ready"
  }
} as const;

/**
 * Projects section content - Portfolio showcase
 */
export const projectsContent = {
  es: {
    title: "Proyectos Destacados",
    subtitle: "Soluciones innovadoras que marcan la diferencia",
    description: "Una selección de mis trabajos más significativos, desde aplicaciones web complejas hasta soluciones de e-commerce escalables.",
    projects: [
      {
        title: "E-commerce Platform",
        description: "Plataforma completa de comercio electrónico con React, Node.js y PostgreSQL. Incluye panel de administración, pasarela de pagos y sistema de inventario.",
        technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
        status: "Completado"
      },
      {
        title: "Task Management App", 
        description: "Aplicación de gestión de tareas colaborativa con tiempo real, notificaciones push y sincronización offline.",
        technologies: ["Vue.js", "Express", "MongoDB", "Socket.io"],
        status: "En desarrollo"
      },
      {
        title: "Portfolio Website",
        description: "Sitio web profesional responsive con animaciones suaves, SEO optimizado y CMS personalizado.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Headless CMS"],
        status: "Completado"
      }
    ],
    viewProject: "Ver Proyecto",
    viewAll: "Ver Todos los Proyectos"
  },
  en: {
    title: "Featured Projects",
    subtitle: "Innovative solutions that make a difference",
    description: "A selection of my most significant work, from complex web applications to scalable e-commerce solutions.",
    projects: [
      {
        title: "E-commerce Platform",
        description: "Complete e-commerce platform with React, Node.js and PostgreSQL. Includes admin panel, payment gateway and inventory system.",
        technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
        status: "Completed"
      },
      {
        title: "Task Management App",
        description: "Collaborative task management application with real-time updates, push notifications and offline sync.",
        technologies: ["Vue.js", "Express", "MongoDB", "Socket.io"], 
        status: "In development"
      },
      {
        title: "Portfolio Website",
        description: "Professional responsive website with smooth animations, SEO optimized and custom CMS.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Headless CMS"],
        status: "Completed"
      }
    ],
    viewProject: "View Project",
    viewAll: "View All Projects"
  }
} as const;

/**
 * Utility function to get content by language
 * @param contentObject - Object containing 'es' and 'en' keys
 * @param language - Current language
 * @returns Content for the specified language
 */
export const getContent = <T extends Record<ContentKey, any>>(
  contentObject: T,
  language: Language
): T[ContentKey] => {
  return contentObject[language];
};