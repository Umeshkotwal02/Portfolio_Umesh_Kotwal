
import React from 'react';
import { motion } from 'framer-motion';

import {
  FaJs, FaReact, FaHtml5, FaCss3, FaSass, FaBootstrap, FaNodeJs, FaGitAlt, FaGithub, FaDatabase
} from 'react-icons/fa';
import {
  SiC, SiNextdotjs, SiRedux, SiTailwindcss, SiMysql, SiFirebase, SiHostinger, SiVercel, SiNetlify,
  SiReactbootstrap
} from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";

const skillData = [
  {
    category: "Programming",
    items: [
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "C", icon: <SiC className="text-blue-500" /> }
    ]
  },
  {
    category: "Frontend",
    items: [
      { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
      { name: "Redux Toolkit", icon: <SiRedux className="text-purple-600" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3 className="text-blue-500" /> },
      { name: "SCSS", icon: <FaSass className="text-pink-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
      { name: "React Bootstrap", icon: <SiReactbootstrap className="text-purple-600" /> }
    ]
  },
  {
    category: "Backend & Tools",
    items: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "SQL", icon: <FaDatabase className="text-gray-400" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
      { name: "VS Code", icon: <VscVscode className="text-blue-500" /> },
      { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
      { name: "GitHub", icon: <FaGithub className="text-black dark:text-white" /> },
      { name: "Hostinger", icon: <SiHostinger className="text-purple-600" /> },
      { name: "Vercel", icon: <SiVercel className="text-black dark:text-white" /> },
      { name: "Netlify", icon: <SiNetlify className="text-teal-500" /> }
    ]
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-16 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center dark:text-white">
          Technical <span className="gradient-text">Arsenal</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillData.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 glass rounded-[2.5rem] border border-gray-200 dark:border-gray-800"
            >
              <h3 className="text-xl font-bold mb-6 text-indigo-500 uppercase tracking-widest text-sm">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.items.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(168, 85, 247, 0.1)' }}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 rounded-2xl text-sm font-medium border border-gray-200 dark:border-gray-700 transition-colors cursor-default flex items-center gap-2"
                  >
                    <span className="text-lg">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
