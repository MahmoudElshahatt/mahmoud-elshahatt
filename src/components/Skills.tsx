import { motion } from "framer-motion";
import { 
  Palette, 
  BarChart3, 
  CreditCard, 
  Cloud, 
  Sparkles, 
  TestTube,
  Bot,
  Layers
} from "lucide-react";

const skills = [
  {
    icon: Palette,
    title: "Interface & Architecture",
    description: "Built Android interfaces using XML and Compose. Applied Clean Architecture with clear layer separation.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Tracking",
    description: "Integrated Firebase Analytics and Google Analytics. Implemented deep linking and attribution flows.",
  },
  {
    icon: CreditCard,
    title: "Payment Integrations",
    description: "Integrated PayFort, MyFatoorah, HyperPay, and Moyasar with secure transaction flows.",
  },
  {
    icon: Cloud,
    title: "Backend Integrations",
    description: "Firebase services integration: Auth, FCM Push Notifications, Analytics, and Storage.",
  },
  {
    icon: Sparkles,
    title: "UI, Media & Sharing",
    description: "Animations with Lottie, audio/video with ExoPlayer3, app sharing & deep linking.",
  },
  {
    icon: TestTube,
    title: "Testing & Stability",
    description: "Unit tests for business logic, complex UX scenarios, fallback behavior, and error handling.",
  },
  {
    icon: Bot,
    title: "AI Integrations",
    description: "Integrated AI-powered features across applications depending on business needs.",
  },
  {
    icon: Layers,
    title: "Modularization",
    description: "Feature-based modularization for better scalability and maintainability across large codebases.",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What I <span className="text-gradient">Do</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive capabilities across the full Android development lifecycle.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <skill.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{skill.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
