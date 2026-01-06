import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Award } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              About <span className="gradient-text">Me</span>
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-20 h-1 bg-primary mx-auto rounded-full"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Photo Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1 flex justify-center"
            >
              <div className="glass-card rounded-2xl p-4 card-hover">
                <div className="w-48 h-60 md:w-56 md:h-72 rounded-xl overflow-hidden bg-secondary">
                  <img
                    src="/1thilak.jpg"
                    alt="Thilak Puthanikar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center mt-4">
                  <h3 className="font-semibold text-lg">Thilak Puthanikar</h3>
                </div>
              </div>
            </motion.div>

            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card rounded-2xl p-8 card-hover"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/10">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Education</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg text-foreground">
                    Bachelor of Computer Applications (BCA)
                  </h4>
                  <p className="text-muted-foreground">
                    Pinnacle Institute of Management & Science, Bangalore
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium">CGPA: 8.7</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span className="text-sm text-muted-foreground">
                      Bangalore, Karnataka
                    </span>
                  </div>
                </div>

                <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                  Final Year
                </div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                I enjoy solving real-world problems using technology. I have
                hands-on experience in
                <span className="text-foreground font-medium">
                  {" "}
                  full-stack web development
                </span>
                ,
                <span className="text-foreground font-medium">
                  {" "}
                  AI automation
                </span>
                ,
                <span className="text-foreground font-medium">
                  {" "}
                  Firebase-based prototyping
                </span>
                , and
                <span className="text-foreground font-medium">
                  {" "}
                  game development
                </span>{" "}
                using Unreal Engine.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-card border border-border">
                  <div className="text-2xl font-bold gradient-text">5+</div>
                  <div className="text-sm text-muted-foreground">
                    Projects Completed
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border">
                  <div className="text-2xl font-bold gradient-text">8.7</div>
                  <div className="text-sm text-muted-foreground">
                    CGPA Score
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  "Problem Solving",
                  "Critical Thinking",
                  "Teamwork",
                  "Leadership",
                  "Adaptability",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
