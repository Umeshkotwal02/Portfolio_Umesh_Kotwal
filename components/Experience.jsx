
import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Sridix Technology",
    role: "ReactJS Developer",
    duration: "Sep 2024 - Present",
    desc: "Frontend Developer with hands-on experience building production-ready web applications using React.js and Next.js. Worked on real-time projects including ERP systems, DMS platforms, SEO-optimized websites, and custom UI solutions."
  },
  {
    company: "Webito Infotech",
    role: "ReactJS Intern",
    duration: "Aug 2024 - Sep 2024",
    desc: "Focused on core UI components, responsive web layouts, and JavaScript fundamentals."
  },
  {
    company: "R3 Systems India",
    role: "Web Intern",
    duration: "Nov 2021 - Jan 2022",
    desc: "Gained early insights into HTML/CSS/JS and real-world project development life cycles."
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-16 px-6 bg-gray-50/50 dark:bg-gray-900/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center dark:text-white">
          Career <span className="gradient-text">Journey</span>
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-indigo-500/30"
            >
              <div className="absolute top-0 left-[-9px] w-4 h-4 bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
              <div className="glass p-8 rounded-3xl transition-all hover:shadow-2xl hover:shadow-indigo-500/10 border border-gray-100 dark:border-gray-800">
                <span className="text-sm font-bold text-indigo-500 mb-2 block uppercase tracking-widest">{exp.duration}</span>
                <h3 className="text-2xl font-bold dark:text-white mb-1">{exp.role}</h3>
                <p className="text-gray-600 dark:text-indigo-300 font-semibold mb-4">{exp.company}</p>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                  {exp.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
