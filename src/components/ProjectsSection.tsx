import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  ExternalLink,
  Globe,
  Map,
  Leaf,
  Brain,
  Sprout,
  Gamepad2,
} from "lucide-react";

interface Project {
  title: string;
  subtitle: string;
  description: string[];
  tech: string[];
  status: "Live" | "Prototype" | "Planning" | "Coming Soon";
  icon: React.ElementType;
  link?: string;
}

const projects: Project[] = [
  {
    title: "Bangalore Explorer",
    subtitle: "Tourism Web Application | College Internship Project",
    description: [
      "Built an interactive tourism website to help visitors explore Bangalore across categories like temples, IT hubs, shopping areas, and landmarks.",
      "Enhanced user experience by implementing light/dark theme toggle and multilingual support (English and Kannada).",
      "Integrated Google My Maps to allow users to start navigation directly from their current location.",
      "Solely designed and developed the complete frontend and feature set.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Google My Maps"],
    status: "Live",
    icon: Map,
    link: "https://thilakputhanikar.github.io/",
  },
  {
    title: "Earthly-Eats",
    subtitle: "Health & Wellness Platform | College Internship Project",
    description: [
      "Developed a full-stack web platform focused on healthy living through personalized diet and yoga plans.",
      "Implemented user condition-based planning, expert consultation sessions, and yoga class hosting.",
      "Built e-commerce features including payment gateway, order tracking, and admin management panel.",
      "Added analytics, PDF generation, QR code support, and a weekly cheat-day feature.",
      "Independently handled frontend, backend, database, and admin functionalities.",
    ],
    tech: [
      "PHP",
      "HTML",
      "CSS",
      "JavaScript",
      "MySQL",
      "AJAX",
      "Chart.js",
      "pdf.js",
    ],
    status: "Coming Soon",
    icon: Leaf,
  },
  {
    title: "WellBeing-Hub",
    subtitle: "AI-Focused Health Assistant Platform",
    description: [
      "Upgraded version of Earthly-Eats with focus on practical, real-life health guidance.",
      "Removed commerce features and introduced a dedicated health-focused AI chatbot.",
      "Built and prototyped the application using Firebase for rapid iteration.",
      "Handling full-stack development and chatbot integration independently.",
    ],
    tech: ["Firebase", "AI Chatbot", "Full Stack"],
    status: "Prototype",
    icon: Brain,
  },
  {
    title: "CropCare",
    subtitle: "Smart Farming & Crop Planning Web Application",
    description: [
      "Designed a data-driven platform to assist farmers in Karnataka with crop selection and planning.",
      "Built an AI-powered recommendation system using soil reports and user inputs.",
      "Developed a database-driven crop planner generating day-by-day schedules from sowing to harvest.",
      "Included weather insights, market prices, and a crop & soil knowledge library.",
      "Responsible for full-stack architecture, AI logic, and UI planning.",
    ],
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "ShadCN UI",
      "Genkit",
      "Google Gemini AI",
      "Zod",
    ],
    status: "Prototype",
    icon: Sprout,
  },
  {
    title: "Trekking Adventure Game",
    subtitle: "3D Adventure Game (Mobile & PC)",
    description: [
      "Planning a 3D trekking-based adventure game with immersive environments.",
      "Exploring AI-based elements to enhance gameplay experience.",
    ],
    tech: ["Unreal Engine", "AI Concepts"],
    status: "Planning",
    icon: Gamepad2,
  },
];

const statusColors = {
  Live: "badge-live",
  Prototype: "badge-prototype",
  Planning: "badge-planning",
  "Coming Soon": "badge-prototype",
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="section-container">
        <motion.div ref={ref}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Featured <span className="gradient-text">Projects</span>
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-20 h-1 bg-primary mx-auto rounded-full"
            />
          </div>

          {/* Projects Grid */}
          <div className="grid gap-6">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 md:p-8 card-hover group"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Icon & Header */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <project.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {project.subtitle}
                        </p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                          statusColors[project.status]
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {project.description.map((desc, i) => (
                        <li
                          key={i}
                          className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {desc}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {project.link && project.status === "Live" && (
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Globe className="w-4 h-4" />
                          View Live
                          <ExternalLink className="w-3 h-3" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
