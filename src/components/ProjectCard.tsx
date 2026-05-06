import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import ImageLightbox from "./ImageLightbox";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  links?: { label: string; url: string }[];
  images?: string[];
  index: number;
}

const ProjectCard = ({ title, subtitle, description, techStack, links, images, index }: ProjectCardProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (imageIndex: number) => {
    setCurrentImageIndex(imageIndex);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    if (images) {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (images) {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500"
      >
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-3">
                {subtitle}
              </span>
              <h3 className="text-2xl font-bold">{title}</h3>
            </div>
            
            {links && links.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {links.map((link) => (
                  <Button key={link.label} variant="outline" size="sm" asChild>
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="gap-2">
                      {link.label}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </Button>
                ))}
              </div>
            )}
          </div>
          
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {description}
          </p>

          {/* Screenshots */}
          {images && images.length > 0 && (
            <div className="flex gap-3 mb-6 overflow-x-auto pb-2 scrollbar-thin">
              {images.map((image, i) => (
                <img
                  key={i}
                  src={image}
                  alt={`${title} screenshot ${i + 1}`}
                  className="h-48 w-auto rounded-lg border border-border object-cover flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => openLightbox(i)}
                />
              ))}
            </div>
          )}
          
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-mono bg-secondary rounded text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Image Lightbox */}
      {images && images.length > 0 && (
        <ImageLightbox
          images={images}
          currentIndex={currentImageIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onNext={nextImage}
          onPrev={prevImage}
          title={title}
        />
      )}
    </>
  );
};

export default ProjectCard;
