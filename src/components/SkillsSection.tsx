import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Wrench, Target, Sparkles, Gamepad2, Music } from "lucide-react";

interface Skill {
  name: string;
  level: number; // 0-100
}

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: [
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 55 },
      { name: "Python", level: 50 },
      { name: "Java", level: 45 },
      { name: "PHP", level: 65 },
      { name: "SQL", level: 55 },
      { name: "C/C++", level: 65 },
    ] as Skill[],
    color: "primary",
  },
  {
    title: "Platforms & Tools",
    icon: Wrench,
    skills: [
      { name: "Firebase", level: 85 },
      { name: "GitHub", level: 50 },
      { name: "VS Code", level: 60 },
      { name: "n8n", level: 90 },
      { name: "Unreal Engine", level: 50 },
    ] as Skill[],
    color: "accent",
  },
  {
    title: "Focus Areas",
    icon: Target,
    skills: [
      { name: "Full Stack Development", level: 80 },
      { name: "AI Automation", level: 70 },
      { name: "App Prototyping", level: 75 },
      { name: "Game Development", level: 85 },
    ] as Skill[],
    color: "primary",
  },
];

const softSkills = [
  "Problem Solving",
  "Critical Thinking",
  "Teamwork",
  "Leadership",
  "Adaptability",
  "Time Management",
];
const hobbies = [
  { name: "Playing online games", icon: Gamepad2 },
  { name: "Listening to music", icon: Music },
  { name: "Exploring new technologies", icon: Sparkles },
];

const SkillBar = ({
  skill,
  index,
  isInView,
  color,
}: {
  skill: Skill;
  index: number;
  isInView: boolean;
  color: string;
}) => {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">
          {skill.name}
        </span>
        <span className="text-xs text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3 + index * 0.1,
            ease: "easeOut",
          }}
          className={`h-full rounded-full ${
            color === "primary" ? "bg-primary" : "bg-accent"
          }`}
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="section-padding">
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
              Skills & <span className="gradient-text">Expertise</span>
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-20 h-1 bg-primary mx-auto rounded-full"
            />
          </div>

          {/* Technical Skills Grid with Progress Bars */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={cardVariants}
                className="glass-card rounded-2xl p-6 card-hover group"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`p-3 rounded-xl ${
                      category.color === "primary"
                        ? "bg-primary/10"
                        : "bg-accent/10"
                    } group-hover:scale-110 transition-transform`}
                  >
                    <category.icon
                      className={`w-5 h-5 ${
                        category.color === "primary"
                          ? "text-primary"
                          : "text-accent"
                      }`}
                    />
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      index={index}
                      isInView={isInView}
                      color={category.color}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Soft Skills & Hobbies */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-6"
          >
            {/* Soft Skills */}
            <motion.div
              variants={cardVariants}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg border border-border text-sm font-medium hover:border-primary/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Hobbies */}
            <motion.div
              variants={cardVariants}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Gamepad2 className="w-5 h-5 text-accent" />
                Hobbies
              </h3>
              <div className="flex flex-wrap gap-3">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.name}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary"
                  >
                    <hobby.icon className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium">{hobby.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
