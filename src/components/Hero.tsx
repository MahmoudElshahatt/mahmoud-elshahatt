import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Briefcase, Download, Github, Linkedin, Mail } from "lucide-react";

const experiences = [
  {
    role: "Android Developer",
    company: "شركة أوامر الشبكة (AAIT)",
    type: "Full-time",
    period: "Mar 2024 - Present",
    duration: "2 yrs 2 mos",
    location: "El Mansoura, Ad Daqahliyah, Egypt · On-site",
  },
  {
    role: "Android Developer",
    company: "Freelance",
    type: "Freelance",
    period: "Jul 2024 - Jan 2025",
    duration: "7 mos",
    location: "Yalla Ghaseel - Apps on Google Play",
  },
  {
    role: "Android Developer",
    company: "ALEXON INCORP. FOR E-SOLUTIONS",
    type: "Full-time",
    period: "Mar 2023 - Mar 2024",
    duration: "1 yr 1 mo",
    location: "El Mansoura, Ad Daqahliyah, Egypt",
  },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{ background: "var(--gradient-hero)" }}
      />
      
      {/* Floating orb */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
      
      <div className="container relative z-10 px-6">
        {/* Intro - centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Available for new opportunities</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Hi, I'm{" "}
            <span className="text-gradient">Mahmoud Elshahatt</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground mb-4"
          >
            Android Developer
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Building pixel-perfect, performant, and maintainable apps using modern Android stack —{" "}
            <span className="text-foreground font-medium">Kotlin</span>,{" "}
            <span className="text-foreground font-medium">Jetpack Compose</span>, and{" "}
            <span className="text-foreground font-medium">Clean Architecture</span>.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button variant="hero" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="heroOutline" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button variant="heroOutline" asChild>
              <a href="/Mahmoud_Elshahatt-Android_developer.pdf" download className="gap-2">
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex items-center justify-center gap-6"
          >
            <a 
              href="https://github.com/MahmoudElshahatt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:bg-primary/10 transition-colors duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/mahmoudelshahatt/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:bg-primary/10 transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:mahmoudelshahatt1@gmail.com"
              className="p-3 rounded-full glass hover:bg-primary/10 transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Experience - below intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="max-w-5xl mx-auto mt-20"
        >
          <div className="flex items-center justify-center gap-2 mb-8">
            <Briefcase className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-semibold">Experience</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {experiences.map((exp, idx) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + idx * 0.15, duration: 0.5 }}
                className="glass rounded-xl p-5 hover:bg-primary/5 transition-colors duration-300 border border-border/40"
              >
                <h3 className="font-semibold text-foreground">{exp.role}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {exp.company} · <span className="text-primary">{exp.type}</span>
                </p>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground/80 mt-3">
                  <span className="font-medium text-foreground/80">{exp.period}</span>
                  <span>·</span>
                  <span>{exp.duration}</span>
                </div>
                <p className="text-xs text-muted-foreground/70 mt-2">{exp.location}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-12 flex justify-center"
        >
          <a href="#tech-stack" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
