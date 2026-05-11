import { motion } from "framer-motion";

const techCategories = [
  {
    title: "Programming Languages",
    items: ["Kotlin", "Java", "C++", "C#"],
  },
  {
    title: "Architecture & Patterns",
    items: ["MVP", "MVVM", "MVI", "Clean Architecture", "SOLID Principles", "Modularization"],
  },
  {
    title: "Android Development Stack",
    items: ["Android SDK", "Jetpack Compose", "XML", "Paging 3", "ExoPlayer3", "Room", "Retrofit", "Dagger/Hilt", "Coroutines/Flows", "CI/CD", "DataStore", "FCM & Firebase", "RxJava", "Material Design"],
  },
  {
    title: "Payment Gateways",
    items: ["PayFort", "HyperPay", "Moyasar", "MyFatoorah"],
  },
  {
    title: "Testing",
    items: ["UI Test", "Unit Test", "Integration Test"],
  },
  {
    title: "Core Fundamentals",
    items: ["OOP", "Data Structures & Algorithms", "Problem Solving", "SQL"],
  },
  {
    title: "Security",
    items: ["AES Encryption", "RSA Encryption"],
  },
  {
    title: "Tools & Workflow",
    items: ["Claude Code", "Git/GitHub", "Jira", "Trello", "Agile", "Scrum"],
  },
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies, architectures, and tools I use to build scalable, production-ready Android applications.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-xl p-6 hover:border-primary/30 transition-colors duration-300"
            >
              <h3 className="text-lg font-semibold mb-4 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 bg-secondary rounded-md text-sm text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
