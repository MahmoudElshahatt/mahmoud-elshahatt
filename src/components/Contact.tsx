import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin, GraduationCap, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 px-4 py-2 glass rounded-full">
              <GraduationCap className="w-4 h-4 text-primary" />
              <span className="text-sm">B.Sc. Computer Science & Engineering</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 glass rounded-full">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm">Mansoura University, 2024</span>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="hero" asChild>
              <a href="mailto:mahmoudelshahatt1@gmail.com" className="gap-2">
                <Mail className="w-5 h-5" />
                Send an Email
              </a>
            </Button>
            
            <Button variant="heroOutline" asChild>
              <a href="tel:+201093729626" className="gap-2">
                <Phone className="w-5 h-5" />
                +20 109 372 9626
              </a>
            </Button>
            
            <Button variant="heroOutline" asChild>
              <a href="https://www.linkedin.com/in/mahmoudelshahatt/" target="_blank" rel="noopener noreferrer" className="gap-2">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
            
            <Button variant="heroOutline" asChild>
              <a href="https://github.com/MahmoudElshahatt" target="_blank" rel="noopener noreferrer" className="gap-2">
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
