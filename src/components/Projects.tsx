import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import mehany1 from "@/assets/mehany-1.webp";
import mehany2 from "@/assets/mehany-2.webp";
import mehany3 from "@/assets/mehany-3.webp";
import mehany4 from "@/assets/mehany-4.webp";
import easywash1 from "@/assets/easywash-1.png";
import easywash2 from "@/assets/easywash-2.png";
import easywash3 from "@/assets/easywash-3.png";
import easywash4 from "@/assets/easywash-4.png";
import carhub1 from "@/assets/carhub-1.png";
import carhub2 from "@/assets/carhub-2.png";
import carhub3 from "@/assets/carhub-3.png";
import carhub4 from "@/assets/carhub-4.png";
import yallaghaseel1 from "@/assets/yallaghaseel-1.webp";
import yallaghaseel2 from "@/assets/yallaghaseel-2.webp";
import yallaghaseel3 from "@/assets/yallaghaseel-3.webp";
import yallaghaseel4 from "@/assets/yallaghaseel-4.webp";
import incontinence1 from "@/assets/incontinence-1.png";
import incontinence2 from "@/assets/incontinence-2.png";
import incontinence3 from "@/assets/incontinence-3.png";
import incontinence4 from "@/assets/incontinence-4.png";
import tam1 from "@/assets/tam-1.png";
import tam2 from "@/assets/tam-2.png";
import tam3 from "@/assets/tam-3.png";
import tam4 from "@/assets/tam-4.png";
import divano1 from "@/assets/divano-1.png";
import divano2 from "@/assets/divano-2.png";
import divano3 from "@/assets/divano-3.png";
import divano4 from "@/assets/divano-4.png";
import restoranti1 from "@/assets/restoranti-1.png";
import restoranti2 from "@/assets/restoranti-2.png";
import restoranti3 from "@/assets/restoranti-3.png";
import restoranti4 from "@/assets/restoranti-4.png";
import profix1 from "@/assets/profix-1.webp";
import profix2 from "@/assets/profix-2.webp";
import profix3 from "@/assets/profix-3.webp";
import profix4 from "@/assets/profix-4.webp";

const projects = [
  {
    title: "Mehany Express",
    subtitle: "On-demand Maintenance",
    description: "Expert, on-demand maintenance for plumbing, electricity, AC, and cooling with easy booking and transparent pricing. Contributed to order and more flows with the team.",
    techStack: ["Kotlin", "Modularization", "MyFatoorah", "Socket.IO", "Clean Architecture", "Retrofit", "Hilt", "MVVM"],
    links: [{ label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.aait.mehany_express&hl=en_US" }],
    images: [mehany1, mehany2, mehany3, mehany4],
  },
  {
    title: "Easy Wash KSA",
    subtitle: "Clean Services",
    description: "A flexible laundry service (regular and express) with convenient pickup/delivery options, secure in-app payment, and 24/7 customer support. Developed Client, Provider, and Delegate apps.",
    techStack: ["Kotlin", "Modularization", "Paging 3", "Moyaser", "Socket.IO", "Clean Architecture", "MVVM"],
    links: [
      { label: "Client App", url: "https://play.google.com/store/apps/details?id=com.aait.elaghaerUser" },
      { label: "Provider App", url: "https://play.google.com/store/apps/details?id=com.aait.elaghaerProvider" },
      { label: "Delegate App", url: "https://play.google.com/store/apps/details?id=com.aait.elaghaerDelegate" },
    ],
    images: [easywash1, easywash2, easywash3, easywash4],
  },
  {
    title: "Profix",
    subtitle: "Home Maintenance Services",
    description: "Profix provides comprehensive home maintenance services including electricity, AC, plumbing, and more — with easy service booking, order tracking, and professional communication with service providers.",
    techStack: ["Kotlin", "Modularization", "Paging 3", "Socket.IO", "Clean Architecture", "MVVM"],
    links: [
      { label: "Client App", url: "https://play.google.com/store/apps/details?id=com.aait.profix.user" },
      { label: "Provider App", url: "https://play.google.com/store/apps/details?id=com.aait.profix.provider" },
    ],
    images: [profix1, profix2, profix3, profix4],
  },
  {
    title: "CarHub",
    subtitle: "On-demand Car Wash",
    description: "Easily book car services, choose your preferred provider, and schedule at your convenience. Access ratings and details for informed decisions and seamless car care.",
    techStack: ["Kotlin", "Modularization", "MyFatoorah", "Socket.IO", "Clean Architecture", "Retrofit", "Hilt", "MVVM"],
    links: [
      { label: "Client App", url: "https://play.google.com/store/apps/details?id=com.aait.car_hub" },
      { label: "Provider App", url: "https://play.google.com/store/apps/details?id=com.aait.car_hub_provider" },
    ],
    images: [carhub1, carhub2, carhub3, carhub4],
  },
  {
    title: "Yalla Ghaseel",
    subtitle: "Car Wash",
    description: "A mobile car wash company dedicated to providing exceptional car care services in the UAE with efficient pagination and media playback features.",
    techStack: ["Kotlin", "Modularization", "Paging 3", "ExoPlayer3", "Clean Architecture", "Retrofit", "Hilt", "MVVM"],
    links: [{ label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.freelance.yalla_ghaseel&hl=ar" }],
    images: [yallaghaseel1, yallaghaseel2, yallaghaseel3, yallaghaseel4],
  },
  {
    title: "Tam",
    subtitle: "Vehicle Services",
    description: "Dual mobile apps connecting vehicle owners with service providers for tires, glass, batteries, brakes, alternators, engines, and spare parts with dynamic admin-controlled request forms.",
    techStack: ["Kotlin", "Clean Architecture", "Retrofit", "Hilt", "MVVM"],
    links: [
      { label: "Client App", url: "https://play.google.com/store/apps/details?id=com.aait.tam" },
      { label: "Provider App", url: "https://play.google.com/store/apps/details?id=com.aait.tam_provider" },
    ],
    images: [tam1, tam2, tam3, tam4],
  },
  {
    title: "IncontiSense",
    subtitle: "Medical Services",
    description: "App designed for self-management of stress urinary incontinence in women. Multi-module Android app with Clean Architecture and modern intuitive interface.",
    techStack: ["Kotlin", "Modularization", "Alarm Manager", "Clean Architecture", "Retrofit", "Hilt", "MVVM"],
    links: [{ label: "GitHub", url: "https://github.com/MahmoudElshahatt/IncontiSense-App" }],
    images: [incontinence1, incontinence2, incontinence3, incontinence4],
  },
  {
    title: "DIVANO",
    subtitle: "E-Commerce",
    description: "E-commerce platform similar to Alibaba, enabling users to browse, search, and purchase products. Integrated social login and PayFort payment gateway.",
    techStack: ["Kotlin", "PayFort", "Social Login", "MVVM", "Retrofit"],
    links: [],
    images: [divano1, divano2, divano3, divano4],
  },
  {
    title: "Restoranti",
    subtitle: "E-Commerce",
    description: "Dedicated restaurant app with table reservations, multi-cart ordering, and advanced filtering by meal type and rating. Integrated PayFort payment gateway.",
    techStack: ["Kotlin", "PayFort", "Clean Architecture", "MVVM", "Retrofit"],
    links: [],
    images: [restoranti1, restoranti2, restoranti3, restoranti4],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 relative">
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
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of Android applications I've built and contributed to.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
