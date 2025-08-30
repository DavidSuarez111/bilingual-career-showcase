/**
 * VideoSection Component - Professional video presentation placeholder
 * 
 * Features:
 * - Bilingual content support
 * - Video upload placeholder with hover effects
 * - Professional card design with gradients
 * - Upload functionality preparation
 * - Accessibility features
 * 
 * @param language - Current language ('es' | 'en')
 */

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Upload, Video } from "lucide-react";
import { videoContent, getContent } from "@/constants/content";
import { Language } from "@/hooks/useLanguage";

interface VideoSectionProps {
  language: Language;
}

const VideoSection = ({ language }: VideoSectionProps) => {
  // Get localized content using utility function
  const content = getContent(videoContent, language);

  return (
    <section className="py-20 px-6 bg-muted/30" id="video-section">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold bg-text-gradient bg-clip-text text-transparent mb-4">
            {content.title}
          </h2>
          <p className="text-xl text-muted-foreground mb-2">
            {content.subtitle}
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {content.description}
          </p>
        </div>

        {/* Video Card Container */}
        <Card className="bg-card-gradient border-0 shadow-elegant overflow-hidden animate-scale-in">
          {/* Video Placeholder Area */}
          <div className="aspect-video bg-muted/50 flex items-center justify-center relative group cursor-pointer hover:bg-muted/70 transition-smooth">
            <div className="text-center">
              {/* Video Icon */}
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-smooth">
                <Video className="w-10 h-10 text-primary" />
              </div>
              
              {/* Placeholder Text */}
              <h3 className="text-lg font-semibold mb-2">{content.placeholder}</h3>
              <p className="text-sm text-muted-foreground mb-6">
                {content.clickPrompt}
              </p>
              
              {/* Play Button Overlay - Appears on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-glow">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" />
                </div>
              </div>
            </div>
          </div>

          {/* Video Controls Section */}
          <div className="p-6 border-t bg-background/50">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              {/* Video Information */}
              <div className="text-center sm:text-left">
                <h4 className="font-semibold">
                  {content.videoSpace}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {content.videoDescription}
                </p>
              </div>
              
              {/* Upload Button */}
              <Button 
                variant="outline" 
                className="shrink-0 hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <Upload className="w-4 h-4 mr-2" />
                {content.uploadButton}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default VideoSection;