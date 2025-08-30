import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Upload, Video } from "lucide-react";

interface VideoSectionProps {
  language: 'es' | 'en';
}

const VideoSection = ({ language }: VideoSectionProps) => {
  const content = {
    es: {
      title: "Presentación en Video",
      subtitle: "Conoce mi historia y motivaciones",
      description: "Un vistazo personal a mi trayectoria profesional, metodología de trabajo y visión sobre el desarrollo de software.",
      placeholder: "Video próximamente disponible",
      uploadButton: "Subir Video"
    },
    en: {
      title: "Video Presentation", 
      subtitle: "Get to know my story and motivations",
      description: "A personal look at my professional journey, work methodology and vision about software development.",
      placeholder: "Video coming soon",
      uploadButton: "Upload Video"
    }
  };

  const currentContent = content[language];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold bg-text-gradient bg-clip-text text-transparent mb-4">
            {currentContent.title}
          </h2>
          <p className="text-xl text-muted-foreground mb-2">
            {currentContent.subtitle}
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {currentContent.description}
          </p>
        </div>

        <Card className="bg-card-gradient border-0 shadow-elegant overflow-hidden animate-scale-in">
          {/* Video Placeholder */}
          <div className="aspect-video bg-muted/50 flex items-center justify-center relative group cursor-pointer hover:bg-muted/70 transition-colors">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Video className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{currentContent.placeholder}</h3>
              <p className="text-sm text-muted-foreground mb-6">
                {language === 'es' 
                  ? 'Haz clic aquí cuando tengas tu video listo' 
                  : 'Click here when you have your video ready'}
              </p>
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-glow">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" />
                </div>
              </div>
            </div>
          </div>

          {/* Video Controls */}
          <div className="p-6 border-t bg-background/50">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-center sm:text-left">
                <h4 className="font-semibold">
                  {language === 'es' ? 'Espacio para tu presentación' : 'Space for your presentation'}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {language === 'es' 
                    ? 'Sube un video personal para conectar mejor con visitantes' 
                    : 'Upload a personal video to better connect with visitors'}
                </p>
              </div>
              <Button variant="outline" className="shrink-0">
                <Upload className="w-4 h-4 mr-2" />
                {currentContent.uploadButton}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default VideoSection;